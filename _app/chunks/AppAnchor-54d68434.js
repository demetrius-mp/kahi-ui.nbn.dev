import{aB as G,S as I,i as N,s as q,l as w,f as k,r as B,u as g,w as D,x as v,d as h,al as H,E,e as L,c as R,a as U,b as s,F as S,G as j,H as C}from"./vendor-0cbb6e11.js";import"./preferences-16cf381e.js";const O=()=>{const n=G("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session}},T={subscribe(n){return O().page.subscribe(n)}},b="http://kahi-docs.invalid";function W(n){let e;try{e=new URL(n,b)}catch{return!1}return e.origin!==b}function J(n){let e;try{e=new URL(n,b)}catch{return!1}return e.origin===b}function F(n){const{pathname:e}=new URL(n,b);return e.endsWith("/")?e.slice(0,-1):e}function K(n,e){return J(e)?F(n.path)===F(e):!1}function M(n){let e,l,_,c,d,f,a;const u=n[12].default,r=E(u,n,n[11],null);return{c(){e=L("a"),r&&r.c(),this.h()},l(t){e=R(t,"A",{"aria-current":!0,href:!0,target:!0,rel:!0,"sveltekit:noscroll":!0,"sveltekit:prefetch":!0,"data-palette":!0});var i=U(e);r&&r.l(i),i.forEach(h),this.h()},h(){s(e,"aria-current",l=n[8]?"page":void 0),s(e,"href",n[1]),s(e,"target",_=n[7]?"_blank":void 0),s(e,"rel",c=n[7]?"noopener noreferrer":void 0),s(e,"sveltekit:noscroll",d=n[2]?!0:void 0),s(e,"sveltekit:prefetch",f=n[3]?!0:void 0),s(e,"data-palette",n[4])},m(t,i){k(t,e,i),r&&r.m(e,null),a=!0},p(t,i){r&&r.p&&(!a||i&2048)&&S(r,u,t,t[11],a?C(u,t[11],i,null):j(t[11]),null),(!a||i&256&&l!==(l=t[8]?"page":void 0))&&s(e,"aria-current",l),(!a||i&2)&&s(e,"href",t[1]),(!a||i&128&&_!==(_=t[7]?"_blank":void 0))&&s(e,"target",_),(!a||i&128&&c!==(c=t[7]?"noopener noreferrer":void 0))&&s(e,"rel",c),(!a||i&4&&d!==(d=t[2]?!0:void 0))&&s(e,"sveltekit:noscroll",d),(!a||i&8&&f!==(f=t[3]?!0:void 0))&&s(e,"sveltekit:prefetch",f),(!a||i&16)&&s(e,"data-palette",t[4])},i(t){a||(v(r,t),a=!0)},o(t){g(r,t),a=!1},d(t){t&&h(e),r&&r.d(t)}}}function P(n){let e,l,_,c,d,f,a;const u=n[12].default,r=E(u,n,n[11],null);return{c(){e=L("a"),r&&r.c(),this.h()},l(t){e=R(t,"A",{class:!0,"aria-current":!0,href:!0,target:!0,rel:!0,"sveltekit:noscroll":!0,"sveltekit:prefetch":!0,"data-palette":!0,"data-size":!0,"data-variation":!0});var i=U(e);r&&r.l(i),i.forEach(h),this.h()},h(){s(e,"class","button"),s(e,"aria-current",l=n[8]?"page":void 0),s(e,"href",n[1]),s(e,"target",_=n[7]?"_blank":void 0),s(e,"rel",c=n[7]?"noopener noreferrer":void 0),s(e,"sveltekit:noscroll",d=n[2]?!0:void 0),s(e,"sveltekit:prefetch",f=n[3]?!0:void 0),s(e,"data-palette",n[4]),s(e,"data-size",n[6]),s(e,"data-variation",n[5])},m(t,i){k(t,e,i),r&&r.m(e,null),a=!0},p(t,i){r&&r.p&&(!a||i&2048)&&S(r,u,t,t[11],a?C(u,t[11],i,null):j(t[11]),null),(!a||i&256&&l!==(l=t[8]?"page":void 0))&&s(e,"aria-current",l),(!a||i&2)&&s(e,"href",t[1]),(!a||i&128&&_!==(_=t[7]?"_blank":void 0))&&s(e,"target",_),(!a||i&128&&c!==(c=t[7]?"noopener noreferrer":void 0))&&s(e,"rel",c),(!a||i&4&&d!==(d=t[2]?!0:void 0))&&s(e,"sveltekit:noscroll",d),(!a||i&8&&f!==(f=t[3]?!0:void 0))&&s(e,"sveltekit:prefetch",f),(!a||i&16)&&s(e,"data-palette",t[4]),(!a||i&64)&&s(e,"data-size",t[6]),(!a||i&32)&&s(e,"data-variation",t[5])},i(t){a||(v(r,t),a=!0)},o(t){g(r,t),a=!1},d(t){t&&h(e),r&&r.d(t)}}}function Q(n){let e,l,_,c;const d=[P,M],f=[];function a(u,r){return u[0]==="button"?0:1}return e=a(n),l=f[e]=d[e](n),{c(){l.c(),_=w()},l(u){l.l(u),_=w()},m(u,r){f[e].m(u,r),k(u,_,r),c=!0},p(u,[r]){let t=e;e=a(u),e===t?f[e].p(u,r):(B(),g(f[t],1,1,()=>{f[t]=null}),D(),l=f[e],l?l.p(u,r):(l=f[e]=d[e](u),l.c()),v(l,1),l.m(_.parentNode,_))},i(u){c||(v(l),c=!0)},o(u){g(l),c=!1},d(u){f[e].d(u),u&&h(_)}}}function V(n,e,l){let _,c,d;H(n,T,o=>l(10,d=o));let{$$slots:f={},$$scope:a}=e,{is:u="a"}=e,{href:r}=e,{no_handle:t=!1}=e,{no_scroll:i=!1}=e,{prefetch:m=!1}=e,{palette:p=void 0}=e,{variation:z=void 0}=e,{size:A=void 0}=e;return n.$$set=o=>{"is"in o&&l(0,u=o.is),"href"in o&&l(1,r=o.href),"no_handle"in o&&l(9,t=o.no_handle),"no_scroll"in o&&l(2,i=o.no_scroll),"prefetch"in o&&l(3,m=o.prefetch),"palette"in o&&l(4,p=o.palette),"variation"in o&&l(5,z=o.variation),"size"in o&&l(6,A=o.size),"$$scope"in o&&l(11,a=o.$$scope)},n.$$.update=()=>{n.$$.dirty&1538&&l(8,_=t?!1:K(d,r)),n.$$.dirty&2&&l(7,c=W(r))},[u,r,i,m,p,z,A,c,_,t,d,a,f]}class Z extends I{constructor(e){super();N(this,e,V,Q,q,{is:0,href:1,no_handle:9,no_scroll:2,prefetch:3,palette:4,variation:5,size:6})}}export{Z as A};
