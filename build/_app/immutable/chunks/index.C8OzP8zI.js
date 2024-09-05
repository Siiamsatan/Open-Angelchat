import"./sha256.CRlV3BEV.js";import{g as F}from"./index.D2mQNFJF.js";let m;const U=new Uint8Array(16);function b(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(U)}const c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function T(e,t=0){return c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]}const A=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),C={randomUUID:A};function E(e,t,n){if(C.randomUUID&&!t&&!e)return C.randomUUID();e=e||{};const s=e.random||(e.rng||b)();return s[6]=s[6]&15|64,s[8]=s[8]&63|128,T(s)}var h=(e=>(e.PUNCTUATION="punctuation",e.PARAGRAPHS="paragraphs",e.NONE="none",e))(h||{});const R=e=>([/(\$\$\s[\s\S]*?\s\$\$)/g,/(\\\[[\s\S]*?\\\])/g,/(\\begin\{[a-z]+\}[\s\S]*?\\end\{[a-z]+\})/g].forEach(n=>{e=e.replace(n,s=>s.replace(/\s*\n\s*/g," ").trim())}),e),O=(e,t,n)=>{const s=/{{char}}/gi,r=/{{user}}/gi,o=/{{VIDEO_FILE_ID_([a-f0-9-]+)}}/gi,a=/{{HTML_FILE_ID_([a-f0-9-]+)}}/gi;return t!=null&&(e=e.replace(s,t)),n!=null&&(e=e.replace(r,n)),e=e.replace(o,(i,l)=>`<video src="${`${F}/api/v1/files/${l}/content`}" controls></video>`),e=e.replace(a,(i,l)=>`<iframe src="${`${F}/api/v1/files/${l}/content`}" width="100%" frameborder="0" onload="this.style.height=(this.contentWindow.document.body.scrollHeight+20)+'px';"></iframe>`),e},H=e=>e.replace(/<\|[a-z]*$/,"").replace(/<\|[a-z]+\|$/,"").replace(/<$/,"").replaceAll(/<\|[a-z]+\|>/g," ").replaceAll("<","&lt;").replaceAll(">","&gt;").trim(),V=e=>(e=R(e),e.trim()),Y=e=>e.replaceAll("&lt;","<").replaceAll("&gt;",">");function W(e){return new DOMParser().parseFromString(e,"text/html").documentElement.textContent}const j=e=>{let t="";return new TransformStream({transform(n,s){t+=n;const r=t.split(e);r.slice(0,-1).forEach(o=>s.enqueue(o)),t=r[r.length-1]},flush(n){t&&n.enqueue(t)}})},q=e=>{const t={messages:{},currentId:null};let n=null,s=null;for(const r of e)s=E(),n!==null&&(t.messages[n].childrenIds=[...t.messages[n].childrenIds,s]),t.messages[s]={...r,id:s,parentId:n,childrenIds:[]},n=s;return t.currentId=s,t},M=()=>{const e=document.createElement("canvas"),t=e.getContext("2d");e.height=1,e.width=1;const n=new ImageData(e.width,e.height),s=n.data;for(let o=0;o<n.data.length;o+=1)o%4!==3?s[o]=Math.floor(256*Math.random()):s[o]=255;t.putImageData(n,0,0);const r=t.getImageData(0,0,e.width,e.height).data;for(let o=0;o<r.length;o+=1)if(r[o]!==s[o])return console.log("canvasPixelTest: Wrong canvas pixel RGB value detected:",r[o],"at:",o,"expected:",s[o]),console.log("canvasPixelTest: Canvas blocking or spoofing is likely"),!1;return!0},G=e=>{const t=document.createElement("canvas"),n=t.getContext("2d");if(t.width=100,t.height=100,!M())return console.log("generateInitialsImage: failed pixel test, fingerprint evasion is likely. Using default image."),"/user.png";n.fillStyle="#F39C12",n.fillRect(0,0,t.width,t.height),n.fillStyle="#FFFFFF",n.font="40px Helvetica",n.textAlign="center",n.textBaseline="middle";const s=e.trim(),r=s.length>0?s[0]+(s.split(" ").length>1?s[s.lastIndexOf(" ")+1]:""):"";return n.fillText(r.toUpperCase(),t.width/2,t.height/2),t.toDataURL()},J=async e=>{let t=!1;if(!navigator.clipboard){const n=document.createElement("textarea");n.value=e,n.style.top="0",n.style.left="0",n.style.position="fixed",document.body.appendChild(n),n.focus(),n.select();try{const r=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+r),t=!0}catch(s){console.error("Fallback: Oops, unable to copy",s)}return document.body.removeChild(n),t}return t=await navigator.clipboard.writeText(e).then(()=>(console.log("Async: Copying to clipboard was successful!"),!0)).catch(n=>(console.error("Async: Could not copy text: ",n),!1)),t},K=(e,t)=>t==="0.0.0"?!1:t.localeCompare(e,void 0,{numeric:!0,sensitivity:"case",caseFirst:"upper"})<0,Q=e=>{const t=/\[([^\]]+)\]/g,n=[];let s;for(;(s=t.exec(e))!==null;)n.push({word:s[1],startIndex:s.index,endIndex:t.lastIndex-1});return n},X=(e,t)=>{const n=e.split(" ");n.at(-1)===t&&n.pop();let s=n.join(" ");return s!==""&&(s+=" "),s},Z=e=>e.toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g,"-"),ee=e=>"mapping"in e[0]?"openai":"webui",te=async(e=!1)=>{const t=await new Promise((r,o)=>{navigator.geolocation.getCurrentPosition(r,o)}).catch(r=>{throw console.error("Error getting user location:",r),r});if(!t)return"Location not available";const{latitude:n,longitude:s}=t.coords;return e?{latitude:n,longitude:s}:`${n.toFixed(3)}, ${s.toFixed(3)} (lat, long)`},S=e=>{var i,l,u,d,v,x,I,w;const t=e.mapping,n=[];let s="",r=null;for(const p in t){const g=t[p];s=p;try{if(n.length==0&&(g.message==null||((i=g.message.content.parts)==null?void 0:i[0])==""&&g.message.content.text==null))continue;{const f={id:p,parentId:r,childrenIds:g.children||[],role:((u=(l=g.message)==null?void 0:l.author)==null?void 0:u.role)!=="user"?"assistant":"user",content:((x=(v=(d=g.message)==null?void 0:d.content)==null?void 0:v.parts)==null?void 0:x[0])||((w=(I=g.message)==null?void 0:I.content)==null?void 0:w.text)||"",model:"gpt-3.5-turbo",done:!0,context:null};n.push(f),r=s}}catch(f){console.log("Error with",g,`
Error:`,f)}}const o={};return n.forEach(p=>o[p.id]=p),{history:{currentId:s,messages:o},models:["gpt-3.5-turbo"],messages:n,options:{},timestamp:e.create_time,title:e.title??"New Chat"}},$=e=>{const t=e.messages;if(t.length===0||t[t.length-1].childrenIds.length!==0||t[0].parentId!==null)return!1;for(const r of t)if(typeof r.content!="string")return!1;return!0},ne=e=>{const t=[];let n=0;for(const s of e){const r=S(s);$(r)?t.push({id:s.id,user_id:"",title:s.title,chat:r,timestamp:s.timestamp}):n++}return console.log(n,"Conversations could not be imported"),t},se=e=>{let t;try{t=new URL(e)}catch{return!1}return t.protocol==="http:"||t.protocol==="https:"},N=e=>{const t=/[\uD800-\uDBFF][\uDC00-\uDFFF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;return e.replace(t,"")},k=e=>e.replace(/(\*)(.*?)\1/g,"").replace(/(```)(.*?)\1/gs,""),y=e=>k(N(e.trim())),D=/```[\s\S]*?```/g,P=e=>{const t=[];let n=0;e=e.replace(D,r=>{const o=`\0${n}\0`;return t[n++]=r,o});let s=e.split(new RegExp("(?<=[.!?])\\s+"));return s=s.map(r=>r.replace(/\u0000(\d+)\u0000/g,(o,a)=>t[a])),s.map(y).filter(Boolean)},_=e=>{const t=[];let n=0;e=e.replace(D,r=>{const o=`\0${n}\0`;return t[n++]=r,o});let s=e.split(/\n+/);return s=s.map(r=>r.replace(/\u0000(\d+)\u0000/g,(o,a)=>t[a])),s.map(y).filter(Boolean)},z=e=>P(e).reduce((t,n)=>{const s=t.length-1;if(s>=0){const r=t[s],o=r.split(/\s+/).length,a=r.length;o<4||a<50?t[s]=r+" "+n:t.push(n)}else t.push(n);return t},[]),re=(e,t="punctuation")=>{const n=[];switch(t){default:case h.PUNCTUATION:n.push(...z(e));break;case h.PARAGRAPHS:n.push(..._(e));break;case h.NONE:n.push(y(e));break}return n},oe=(e,t)=>new File([e],t,{type:e.type}),ae=(e,t,n)=>{const s=new Date,r=s.getFullYear()+"-"+String(s.getMonth()+1).padStart(2,"0")+"-"+String(s.getDate()).padStart(2,"0"),o=s.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0});return e=e.replace("{{CURRENT_DATETIME}}",`${r} ${o}`),e=e.replace("{{CURRENT_DATE}}",r),e=e.replace("{{CURRENT_TIME}}",o),t&&(e=e.replace("{{USER_NAME}}",t)),n&&(e=e.replace("{{USER_LOCATION}}",n)),e},ce=e=>{const t=Math.floor(e/1e9%60),n=Math.floor(e/6e10%60),s=Math.floor(e/36e11%24),r=[];return t>=0&&r.push(`${t}s`),n>0&&r.push(`${n}m`),s>0&&r.push(`${s}h`),r.reverse().join(" ")},le=e=>{const t=new Date,n=new Date(e*1e3),r=(t.getTime()-n.getTime())/(1e3*3600*24),o=t.getDate(),a=t.getMonth(),i=t.getFullYear(),l=n.getDate(),u=n.getMonth(),d=n.getFullYear();return i===d&&a===u&&o===l?"Today":i===d&&a===u&&o-l===1?"Yesterday":r<=7?"Previous 7 days":r<=30?"Previous 30 days":i===d?n.toLocaleString("default",{month:"long"}):n.getFullYear().toString()},ie=e=>{const t={};let n=!1,s=!1;const r=/^\s*([a-z_]+):\s*(.*)\s*$/i,o=e.split(`
`);if(o[0].trim()!=='"""')return{};n=!0;for(let a=1;a<o.length;a++){const i=o[a];if(i.includes('"""')&&n){s=!0;break}if(n&&!s){const l=r.exec(i);if(l){const[,u,d]=l;t[u.trim()]=d.trim()}}}return t},ue=(e,t,n)=>{const s=e.map(o=>o.code),r=t.map(o=>s.find(a=>a.startsWith(o))).find(Boolean);return console.log(s,t,r,n),r||n};export{ce as A,h as T,q as a,le as b,K as c,te as d,ie as e,H as f,G as g,J as h,oe as i,M as j,ee as k,ne as l,Q as m,se as n,re as o,ae as p,ue as q,X as r,j as s,Z as t,T as u,E as v,W as w,Y as x,O as y,V as z};
//# sourceMappingURL=index.C8OzP8zI.js.map