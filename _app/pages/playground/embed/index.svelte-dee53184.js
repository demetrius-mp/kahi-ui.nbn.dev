import{S as u,i as d,s as m,j as l,m as f,o as v,D as _,x as j,u as h,v as b}from"../../../chunks/vendor-60ec2bc5.js";import{d as k}from"../../../chunks/preferences-4a0b4d60.js";import{R as E}from"../../../chunks/REPLEmbed-6213377d.js";import"../../../chunks/REPLSplit-7812d145.js";import"../../../chunks/preload-helper-ec9aa979.js";import"../../../chunks/Code-9ccf6b75.js";function g(i){let e,s;return e=new E({props:{identifier:i[0],value:i[1]}}),{c(){l(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,n){v(e,t,n),s=!0},p:_,i(t){s||(j(e.$$.fragment,t),s=!0)},o(t){h(e.$$.fragment,t),s=!1},d(t){b(e,t)}}}const x=async({fetch:i})=>{const e=new URLSearchParams(location.search),{script:s="",snippet:t=""}=Object.fromEntries(e.entries());if(t){const n=await i(`/api/v4/snippets/${t}.json`);if(!n.ok){const r=await n.json();return{status:n.status,error:r.code}}return{props:{snippet:(await n.json()).data}}}else if(s)return{props:{script:k(s)}};return{status:404,error:"MissingScript"}};function w(i,e,s){var t,n;let{script:o}=e,{snippet:r}=e;const c=r==null?void 0:r.identifier;let p=(n=(t=r==null?void 0:r.script)!==null&&t!==void 0?t:o)!==null&&n!==void 0?n:"";return i.$$set=a=>{"script"in a&&s(2,o=a.script),"snippet"in a&&s(3,r=a.snippet)},[c,p,o,r]}class C extends u{constructor(e){super();d(this,e,w,g,m,{script:2,snippet:3})}}export{C as default,x as load};
