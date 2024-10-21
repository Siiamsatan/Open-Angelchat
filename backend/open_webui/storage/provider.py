import os
import boto3
from botocore.exceptions import ClientError
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from open_webui.config import (
    STORAGE_PROVIDER,
    S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY,
    S3_BUCKET_NAME,
    S3_REGION_NAME,
    S3_ENDPOINT_URL,
    UPLOAD_DIR,
    AppConfig,
)
from open_webui.apps.webui.models.files import (
    Files,
    FileForm,
    FileModel,
    FileModelResponse,
)
from typing import Optional

LOCAL_UPLOAD_DIR = UPLOAD_DIR


class StorageProvider:
    def __init__(self):
        if STORAGE_PROVIDER == "s3":
            self._storage_type = "s3"
            self.client = boto3.client(
                "s3",
                region_name=S3_REGION_NAME,
                endpoint_url=S3_ENDPOINT_URL,
                aws_access_key_id=S3_ACCESS_KEY_ID,
                aws_secret_access_key=S3_SECRET_ACCESS_KEY,
            )
        else:
            self._storage_type = "local"

    def _get_bucket(self):
        return S3_BUCKET_NAME

    def get_storage_provider(self):
        return self._storage_type

    def upload_file(self, file, filename):
        if self._storage_type == "local":
            file_path = os.path.join(LOCAL_UPLOAD_DIR, filename)
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            with open(file_path, "wb") as f:
                f.write(file.read())
            return filename
        else:
            try:
                bucket = self._get_bucket()
                self.client.upload_fileobj(file, bucket, filename)
                return filename
            except ClientError as e:
                raise RuntimeError(f"Error uploading file: {e}")

    def list_files(self):
        if self._storage_type == "local":
            return [
                f
                for f in os.listdir(LOCAL_UPLOAD_DIR)
                if os.path.isfile(os.path.join(LOCAL_UPLOAD_DIR, f))
            ]
        else:
            try:
                bucket = self._get_bucket()
                response = self.client.list_objects_v2(Bucket=bucket)
                if "Contents" in response:
                    return [content["Key"] for content in response["Contents"]]
                return []
            except ClientError as e:
                raise RuntimeError(f"Error listing files: {e}")

    def delete_all_files(self):
        if self._storage_type == "local":
            for filename in os.listdir(LOCAL_UPLOAD_DIR):
                file_path = os.path.join(LOCAL_UPLOAD_DIR, filename)
                if os.path.isfile(file_path):
                    os.remove(file_path)
        else:
            try:
                bucket = self._get_bucket()
                response = self.client.list_objects_v2(Bucket=bucket)
                if "Contents" in response:
                    for content in response["Contents"]:
                        self.client.delete_object(Bucket=bucket, Key=content["Key"])
            except ClientError as e:
                raise RuntimeError(f"Error deleting all files: {e}")

    def get_file_by_id(self, id):
        file = Files.get_file_by_id(id)
        if file.meta["StorageProvider"] == "local":
            return file
        elif file.meta["StorageProvider"] == "s3":
            try:
                srcfile = f"{file.meta.get('path')}"
                dstfile = f"{UPLOAD_DIR}/{os.path.basename(srcfile)}"
                self.client.download_file(S3_BUCKET_NAME, srcfile, dstfile)
            except ClientError as e:
                raise RuntimeError(f"Error fetching file: {e}")
        else:
            raise RuntimeError(f"No Suppport storage_type")
        return file

    def delete_file(self, filename):
        if self._storage_type == "local":
            file_path = os.path.join(LOCAL_UPLOAD_DIR, filename)
            if os.path.isfile(file_path):
                os.remove(file_path)
            else:
                raise FileNotFoundError(f"File {filename} not found in local storage.")
        else:
            try:
                bucket = self._get_bucket()
                self.client.delete_object(Bucket=bucket, Key=filename)
            except ClientError as e:
                raise RuntimeError(f"Error deleting file: {e}")

    def delete_file_by_id(self, id: str) -> bool:
        return Files.delete_file_by_id(id)

    def update_file_data_by_id(self, id: str, data: dict) -> Optional[FileModel]:
        return Files.update_file_data_by_id(id, data)

    def update_file_hash_by_id(self, id: str, hash: str) -> Optional[FileModel]:
        return Files.update_file_data_by_id(id, hash)

    def update_file_metadata_by_id(self, id: str, meta: dict) -> Optional[FileModel]:
        return Files.update_file_metadata_by_id(id, meta)


Storage = StorageProvider()