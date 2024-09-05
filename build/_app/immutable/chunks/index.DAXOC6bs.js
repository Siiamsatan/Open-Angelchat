import{g as r}from"./index.D2mQNFJF.js";const y=async(e="")=>{let i=null;const o=await fetch(`${r}/api/models`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),i=t,null));if(i)throw i;let n=(o==null?void 0:o.data)??[];return n=n.filter(t=>t).sort((t,a)=>{var h,u,d,f;const s=((u=(h=t.info)==null?void 0:h.meta)==null?void 0:u.position)!==void 0,c=((f=(d=a.info)==null?void 0:d.meta)==null?void 0:f.position)!==void 0;if(s&&c)return t.info.meta.position-a.info.meta.position;if(s)return-1;if(c)return 1;const l=t.name.toLowerCase(),p=a.name.toLowerCase();return l<p?-1:l>p?1:t.name<a.name?-1:t.name>a.name?1:0}),console.log(n),n},j=async(e,i)=>{let o=null;const n=await fetch(`${r}/api/chat/completed`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify(i)}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?o=t.detail:o=t,null));if(o)throw o;return n},g=async(e,i,o)=>{let n=null;const t=await fetch(`${r}/api/chat/actions/${i}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify(o)}).then(async a=>{if(!a.ok)throw await a.json();return a.json()}).catch(a=>(console.log(a),"detail"in a?n=a.detail:n=a,null));if(n)throw n;return t},m=async(e="")=>{let i=null;const o=await fetch(`${r}/api/task/config`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),i=n,null));if(i)throw i;return o},$=async(e,i)=>{let o=null;const n=await fetch(`${r}/api/task/config/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify(i)}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?o=t.detail:o=t,null));if(o)throw o;return n},T=async(e="",i,o,n)=>{var s,c;let t=null;const a=await fetch(`${r}/api/task/title/completions`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:i,prompt:o,...n&&{chat_id:n}})}).then(async l=>{if(!l.ok)throw await l.json();return l.json()}).catch(l=>(console.log(l),"detail"in l&&(t=l.detail),null));if(t)throw t;return((c=(s=a==null?void 0:a.choices[0])==null?void 0:s.message)==null?void 0:c.content.replace(/["']/g,""))??"New Chat"},C=async(e="",i,o,n)=>{var c,l;let t=null;const a=await fetch(`${r}/api/task/emoji/completions`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:i,prompt:o,...n&&{chat_id:n}})}).then(async p=>{if(!p.ok)throw await p.json();return p.json()}).catch(p=>(console.log(p),"detail"in p&&(t=p.detail),null));if(t)throw t;const s=((l=(c=a==null?void 0:a.choices[0])==null?void 0:c.message)==null?void 0:l.content.replace(/["']/g,""))??null;return s&&new RegExp("\\p{Extended_Pictographic}","u").test(s)?s.match(new RegExp("\\p{Extended_Pictographic}","gu"))[0]:null},S=async(e="",i,o,n)=>{var s,c;let t=null;const a=await fetch(`${r}/api/task/query/completions`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:i,messages:o,prompt:n})}).then(async l=>{if(!l.ok)throw await l.json();return l.json()}).catch(l=>(console.log(l),"detail"in l&&(t=l.detail),null));if(t)throw t;return((c=(s=a==null?void 0:a.choices[0])==null?void 0:s.message)==null?void 0:c.content.replace(/["']/g,""))??n},P=async(e="",i,o,n)=>{const t=new AbortController;let a=null;const s=await fetch(`${r}/api/task/moa/completions`,{signal:t.signal,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({model:i,prompt:o,responses:n,stream:!0})}).catch(c=>(console.log(c),a=c,null));if(a)throw a;return[s,t]},A=async(e="")=>{let i=null;const o=await fetch(`${r}/api/pipelines/list`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),i=t,null));if(i)throw i;return(o==null?void 0:o.data)??[]},B=async(e,i,o)=>{let n=null;const t=new FormData;t.append("file",i),t.append("urlIdx",o);const a=await fetch(`${r}/api/pipelines/upload`,{method:"POST",headers:{...e&&{authorization:`Bearer ${e}`}},body:t}).then(async s=>{if(!s.ok)throw await s.json();return s.json()}).catch(s=>(console.log(s),"detail"in s?n=s.detail:n=s,null));if(n)throw n;return a},k=async(e,i,o)=>{let n=null;const t=await fetch(`${r}/api/pipelines/add`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify({url:i,urlIdx:o})}).then(async a=>{if(!a.ok)throw await a.json();return a.json()}).catch(a=>(console.log(a),"detail"in a?n=a.detail:n=a,null));if(n)throw n;return t},O=async(e,i,o)=>{let n=null;const t=await fetch(`${r}/api/pipelines/delete`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify({id:i,urlIdx:o})}).then(async a=>{if(!a.ok)throw await a.json();return a.json()}).catch(a=>(console.log(a),"detail"in a?n=a.detail:n=a,null));if(n)throw n;return t},z=async(e,i)=>{let o=null;const n=new URLSearchParams;i!==void 0&&n.append("urlIdx",i);const t=await fetch(`${r}/api/pipelines?${n.toString()}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async s=>{if(!s.ok)throw await s.json();return s.json()}).catch(s=>(console.log(s),o=s,null));if(o)throw o;return(t==null?void 0:t.data)??[]},E=async(e,i,o)=>{let n=null;const t=new URLSearchParams;o!==void 0&&t.append("urlIdx",o);const a=await fetch(`${r}/api/pipelines/${i}/valves?${t.toString()}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async s=>{if(!s.ok)throw await s.json();return s.json()}).catch(s=>(console.log(s),n=s,null));if(n)throw n;return a},v=async(e,i,o)=>{let n=null;const t=new URLSearchParams;o!==void 0&&t.append("urlIdx",o);const a=await fetch(`${r}/api/pipelines/${i}/valves/spec?${t.toString()}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}}}).then(async s=>{if(!s.ok)throw await s.json();return s.json()}).catch(s=>(console.log(s),n=s,null));if(n)throw n;return a},b=async(e="",i,o,n)=>{let t=null;const a=new URLSearchParams;n!==void 0&&a.append("urlIdx",n);const s=await fetch(`${r}/api/pipelines/${i}/valves/update?${a.toString()}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...e&&{authorization:`Bearer ${e}`}},body:JSON.stringify(o)}).then(async c=>{if(!c.ok)throw await c.json();return c.json()}).catch(c=>(console.log(c),"detail"in c?t=c.detail:t=c,null));if(t)throw t;return s},N=async()=>{let e=null;const i=await fetch(`${r}/api/config`,{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(async o=>{if(!o.ok)throw await o.json();return o.json()}).catch(o=>(console.log(o),e=o,null));if(e)throw e;return i},J=async()=>{let e=null;const i=await fetch(`${r}/api/changelog`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(async o=>{if(!o.ok)throw await o.json();return o.json()}).catch(o=>(console.log(o),e=o,null));if(e)throw e;return i},G=async()=>{let e=null;const i=await fetch(`${r}/api/version/updates`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(async o=>{if(!o.ok)throw await o.json();return o.json()}).catch(o=>(console.log(o),e=o,null));if(e)throw e;return i},L=async e=>{let i=null;const o=await fetch(`${r}/api/config/model/filter`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),i=n,null));if(i)throw i;return o},U=async(e,i,o)=>{let n=null;const t=await fetch(`${r}/api/config/model/filter`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({enabled:i,models:o})}).then(async a=>{if(!a.ok)throw await a.json();return a.json()}).catch(a=>(console.log(a),n=a,null));if(n)throw n;return t},x=async e=>{let i=null;const o=await fetch(`${r}/api/webhook`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),i=n,null));if(i)throw i;return o.url},R=async(e,i)=>{let o=null;const n=await fetch(`${r}/api/webhook`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify({url:i})}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t,null));if(o)throw o;return n.url};export{N as a,x as b,L as c,U as d,A as e,b as f,y as g,v as h,E as i,z as j,k,O as l,B as m,m as n,$ as o,G as p,J as q,C as r,T as s,j as t,R as u,g as v,P as w,S as x};
//# sourceMappingURL=index.DAXOC6bs.js.map