import{ab as a,ac as C}from"./vendor-ec7aa2c0.js";let i,c;function e(){return{getContext:i,setContext:c}}function O(t,n){i=t,c=n}const s=Symbol.for("kahi-docs-application-config");function T(){return a(null,t=>{const{getContext:n}=e(),o=n(s);t(o)})}function I(t){const{setContext:n}=e();n(s,t)}let k=T();const r=Symbol.for("kahi-docs-navigation-application"),f=Symbol.for("kahi-docs-navigation-documentation");function p(t){return a(null,n=>{const{getContext:o}=e(),u=o(t);n(u)})}function _(t,n){const{setContext:o}=e();o(t,n)}const m=p(r),A=p(f),b=t=>_(r,t),v=t=>_(f,t),l=Symbol.for("kahi-docs-partials-config");function d(){return a(null,t=>{const{getContext:n}=e(),o=n(l);t(o)})}function E(t){const{setContext:n}=e();n(l,t)}let S=d();function N(){return typeof window=="undefined"?a(""):C("kahi-docs.preferences.theme","")}const y=N(),g=Symbol.for("kahi-docs-snippet");function x(){return a(null,t=>{const{getContext:n}=e(),o=n(g);t(o)})}function P(t){const{setContext:n}=e();n(g,t)}let X=x();export{k as a,E as b,b as c,O as d,m as e,y as f,A as g,v as h,e as i,P as j,X as k,S as p,I as s};
