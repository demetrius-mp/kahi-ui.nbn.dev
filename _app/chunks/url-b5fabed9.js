const r="http://fake.invalid";function u(e,n){if(n=l(n),!e)return n;let{hash:i,pathname:t,origin:a,search:s}=new URL(e,r);return t=t.endsWith("/")?t.slice(0,-1)+n:t+n,a=a===r?"":a,a+t+s+i}function c(e){let n;try{n=new URL(e,r)}catch{return!1}return n.origin!==r}function o(e){let n;try{n=new URL(e,r)}catch{return!1}return n.origin===r}function l(e){const{pathname:n}=new URL(e,r);return n.endsWith("/")?n.slice(0,-1):n}export{u as a,o as b,c as i,l as n};
