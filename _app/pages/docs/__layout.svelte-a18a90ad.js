import{S as C,i as M,s as S,J as z,K as N,a as y,d as c,b as u,f as k,I as j,D as I,aN as ae,a3 as T,a4 as B,j as d,m as g,o as h,a5 as H,x as $,u as _,v,am as Q,A as oe,aO as ie,az as U,ay as le,l as A,r as q,ab as W,ac as Y,w as R,aP as ue,t as D,k as E,g as F,n as x,h as L,aQ as fe,aA as ce,_ as $e,aR as _e,E as O,e as G,c as V,F as X,G as J,H as K,ap as me}from"../../chunks/vendor-4f07f368.js";import{m as pe}from"../../chunks/stores-32efc95d.js";import"../../chunks/preferences-2a4a2893.js";import{A as de}from"../../chunks/AppNavigation-9451f860.js";import{A as ge}from"../../chunks/AppFooter-cef37c62.js";import{A as he}from"../../chunks/AppAnchor-65ba4265.js";import"../../chunks/Code-4413ab62.js";import"../../chunks/paths-28a87002.js";const ve=Symbol.for("kahi-docs-navigation"),Z=pe(ve);function ke(a,e,s){let t=e.offsetTop;switch(s){case"center":t-=e.offsetHeight/2-a.offsetHeight/2;case"end":t+=e.offsetHeight-a.offsetHeight}return t-a.offsetTop}function we(a,e,s="start",t="auto"){const n=typeof a=="string"?document.querySelector(a):a;if(!n)throw ReferenceError(`bad argument #0 to 'scroll_into_container' (target '${a}' is invalid)`);const r=typeof e=="string"?document.querySelector(e):e;if(!r)throw ReferenceError(`bad argument #0 to 'scroll_into_container' (container '${e}' is invalid)`);r.scrollTo({behavior:t,top:ke(r,n,s)})}function be(a){let e,s,t,n;return{c(){e=z("svg"),s=z("line"),t=z("line"),n=z("line"),this.h()},l(r){e=N(r,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var o=y(e);s=N(o,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),y(s).forEach(c),t=N(o,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),y(t).forEach(c),n=N(o,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),y(n).forEach(c),o.forEach(c),this.h()},h(){u(s,"x1","4"),u(s,"y1","12"),u(s,"x2","20"),u(s,"y2","12"),u(t,"x1","4"),u(t,"y1","6"),u(t,"x2","20"),u(t,"y2","6"),u(n,"x1","4"),u(n,"y1","18"),u(n,"x2","20"),u(n,"y2","18"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"width",a[0]),u(e,"height",a[0]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"stroke","currentColor"),u(e,"stroke-width","2"),u(e,"stroke-linecap","round"),u(e,"stroke-linejoin","round")},m(r,o){k(r,e,o),j(e,s),j(e,t),j(e,n)},p(r,[o]){o&1&&u(e,"width",r[0]),o&1&&u(e,"height",r[0])},i:I,o:I,d(r){r&&c(e)}}}function ye(a,e,s){let{size:t="1em"}=e;return a.$$set=n=>{"size"in n&&s(0,t=n.size)},[t]}class Ae extends C{constructor(e){super();M(this,e,ye,be,S,{size:0})}}function je(a){let e,s,t;return{c(){e=z("svg"),s=z("line"),t=z("line"),this.h()},l(n){e=N(n,"svg",{xmlns:!0,width:!0,height:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0});var r=y(e);s=N(r,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),y(s).forEach(c),t=N(r,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),y(t).forEach(c),r.forEach(c),this.h()},h(){u(s,"x1","18"),u(s,"y1","6"),u(s,"x2","6"),u(s,"y2","18"),u(t,"x1","6"),u(t,"y1","6"),u(t,"x2","18"),u(t,"y2","18"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"width",a[0]),u(e,"height",a[0]),u(e,"viewBox","0 0 24 24"),u(e,"fill","none"),u(e,"stroke","currentColor"),u(e,"stroke-width","2"),u(e,"stroke-linecap","round"),u(e,"stroke-linejoin","round")},m(n,r){k(n,e,r),j(e,s),j(e,t)},p(n,[r]){r&1&&u(e,"width",n[0]),r&1&&u(e,"height",n[0])},i:I,o:I,d(n){n&&c(e)}}}function Ee(a,e,s){let{size:t="1em"}=e;return a.$$set=n=>{"size"in n&&s(0,t=n.size)},[t]}class xe extends C{constructor(e){super();M(this,e,Ee,je,S,{size:0})}}function ee(a,e,s){const t=a.slice();return t[7]=e[s],t}function te(a,e,s){const t=a.slice();return t[10]=e[s],t}function ze(a){let e=a[7].text+"",s,t;return{c(){s=D(e),t=E()},l(n){s=F(n,e),t=x(n)},m(n,r){k(n,s,r),k(n,t,r)},p(n,r){r&8&&e!==(e=n[7].text+"")&&L(s,e)},d(n){n&&c(s),n&&c(t)}}}function ne(a){let e,s,t,n;return e=new $e({props:{is:"span"}}),t=new _e({props:{palette:"accent",shape:"rounded",$$slots:{default:[Ne]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment),s=E(),d(t.$$.fragment)},l(r){g(e.$$.fragment,r),s=x(r),g(t.$$.fragment,r)},m(r,o){h(e,r,o),k(r,s,o),h(t,r,o),n=!0},p(r,o){const i={};o&8200&&(i.$$scope={dirty:o,ctx:r}),t.$set(i)},i(r){n||($(e.$$.fragment,r),$(t.$$.fragment,r),n=!0)},o(r){_(e.$$.fragment,r),_(t.$$.fragment,r),n=!1},d(r){v(e,r),r&&c(s),v(t,r)}}}function Ne(a){let e=a[10].badge+"",s;return{c(){s=D(e)},l(t){s=F(t,e)},m(t,n){k(t,s,n)},p(t,n){n&8&&e!==(e=t[10].badge+"")&&L(s,e)},d(t){t&&c(s)}}}function Ce(a){let e=a[10].text+"",s,t,n,r,o=a[10].badge&&ne(a);return{c(){s=D(e),t=E(),o&&o.c(),n=A()},l(i){s=F(i,e),t=x(i),o&&o.l(i),n=A()},m(i,l){k(i,s,l),k(i,t,l),o&&o.m(i,l),k(i,n,l),r=!0},p(i,l){(!r||l&8)&&e!==(e=i[10].text+"")&&L(s,e),i[10].badge?o?(o.p(i,l),l&8&&$(o,1)):(o=ne(i),o.c(),$(o,1),o.m(n.parentNode,n)):o&&(q(),_(o,1,1,()=>{o=null}),R())},i(i){r||($(o),r=!0)},o(i){_(o),r=!1},d(i){i&&c(s),i&&c(t),o&&o.d(i),i&&c(n)}}}function Me(a){let e,s,t;return e=new he({props:{href:a[10].href,$$slots:{default:[Ce]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment),s=E()},l(n){g(e.$$.fragment,n),s=x(n)},m(n,r){h(e,n,r),k(n,s,r),t=!0},p(n,r){const o={};r&8&&(o.href=n[10].href),r&8200&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){v(e,n),n&&c(s)}}}function re(a,e){let s,t,n;return t=new ce({props:{$$slots:{default:[Me]},$$scope:{ctx:e}}}),{key:a,first:null,c(){s=A(),d(t.$$.fragment),this.h()},l(r){s=A(),g(t.$$.fragment,r),this.h()},h(){this.first=s},m(r,o){k(r,s,o),h(t,r,o),n=!0},p(r,o){e=r;const i={};o&8200&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)},i(r){n||($(t.$$.fragment,r),n=!0)},o(r){_(t.$$.fragment,r),n=!1},d(r){r&&c(s),v(t,r)}}}function Se(a){let e=[],s=new Map,t,n,r=a[7].items;const o=i=>i[10].href;for(let i=0;i<r.length;i+=1){let l=te(a,r,i),f=o(l);s.set(f,e[i]=re(f,l))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=A()},l(i){for(let l=0;l<e.length;l+=1)e[l].l(i);t=A()},m(i,l){for(let f=0;f<e.length;f+=1)e[f].m(i,l);k(i,t,l),n=!0},p(i,l){l&8&&(r=i[7].items,q(),e=W(e,l,o,1,i,r,s,t.parentNode,Y,re,t,te),R())},i(i){if(!n){for(let l=0;l<r.length;l+=1)$(e[l]);n=!0}},o(i){for(let l=0;l<e.length;l+=1)_(e[l]);n=!1},d(i){for(let l=0;l<e.length;l+=1)e[l].d(i);i&&c(t)}}}function Ie(a){let e,s,t;return e=new fe({props:{$$slots:{default:[Se]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment),s=E()},l(n){g(e.$$.fragment,n),s=x(n)},m(n,r){h(e,n,r),k(n,s,r),t=!0},p(n,r){const o={};r&8200&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){t||($(e.$$.fragment,n),t=!0)},o(n){_(e.$$.fragment,n),t=!1},d(n){v(e,n),n&&c(s)}}}function se(a,e){let s,t,n;return t=new ue({props:{$$slots:{"sub-menu":[Ie],default:[ze]},$$scope:{ctx:e}}}),{key:a,first:null,c(){s=A(),d(t.$$.fragment),this.h()},l(r){s=A(),g(t.$$.fragment,r),this.h()},h(){this.first=s},m(r,o){k(r,s,o),h(t,r,o),n=!0},p(r,o){e=r;const i={};o&8200&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)},i(r){n||($(t.$$.fragment,r),n=!0)},o(r){_(t.$$.fragment,r),n=!1},d(r){r&&c(s),v(t,r)}}}function Te(a){let e=[],s=new Map,t,n,r=a[3];const o=i=>i[7].text;for(let i=0;i<r.length;i+=1){let l=ee(a,r,i),f=o(l);s.set(f,e[i]=se(f,l))}return{c(){for(let i=0;i<e.length;i+=1)e[i].c();t=A()},l(i){for(let l=0;l<e.length;l+=1)e[l].l(i);t=A()},m(i,l){for(let f=0;f<e.length;f+=1)e[f].m(i,l);k(i,t,l),n=!0},p(i,l){l&8&&(r=i[3],q(),e=W(e,l,o,1,i,r,s,t.parentNode,Y,se,t,ee),R())},i(i){if(!n){for(let l=0;l<r.length;l+=1)$(e[l]);n=!0}},o(i){for(let l=0;l<e.length;l+=1)_(e[l]);n=!1},d(i){for(let l=0;l<e.length;l+=1)e[l].d(i);i&&c(t)}}}function Be(a){let e,s;return e=new le({props:{sizing:"small",$$slots:{default:[Te]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){h(e,t,n),s=!0},p(t,n){const r={};n&8200&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function He(a){let e,s,t;function n(o){a[4](o)}let r={margin_bottom:"none",$$slots:{default:[Be]},$$scope:{ctx:a}};return a[2]!==void 0&&(r.element=a[2]),e=new ie({props:r}),T.push(()=>B(e,"element",n)),{c(){d(e.$$.fragment)},l(o){g(e.$$.fragment,o)},m(o,i){h(e,o,i),t=!0},p(o,i){const l={};i&8200&&(l.$$scope={dirty:i,ctx:o}),!s&&i&4&&(s=!0,l.element=o[2],H(()=>s=!1)),e.$set(l)},i(o){t||($(e.$$.fragment,o),t=!0)},o(o){_(e.$$.fragment,o),t=!1},d(o){v(e,o)}}}function qe(a){let e,s;return e=new xe({}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){h(e,t,n),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function Re(a){let e,s;return e=new U({props:{size:"huge",palette:"dark",variation:"clear",hidden:["desktop","widescreen"],$$slots:{default:[qe]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){h(e,t,n),s=!0},p(t,n){const r={};n&8192&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function De(a){let e,s;return e=new Ae({}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){h(e,t,n),s=!0},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function Fe(a){let e,s;return e=new U({props:{size:"huge",hidden:["desktop","widescreen"],$$slots:{default:[De]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){h(e,t,n),s=!0},p(t,n){const r={};n&8192&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function Le(a){let e,s,t,n;function r(l){a[5](l)}function o(l){a[6](l)}let i={class:"aside-navigation",logic_id:"aside-navigation",variation:"sticky",captive:!0,dismissible:!0,$$slots:{open:[Fe],close:[Re],default:[He]},$$scope:{ctx:a}};return a[0]!==void 0&&(i.element=a[0]),a[1]!==void 0&&(i.state=a[1]),e=new ae({props:i}),T.push(()=>B(e,"element",r)),T.push(()=>B(e,"state",o)),{c(){d(e.$$.fragment)},l(l){g(e.$$.fragment,l)},m(l,f){h(e,l,f),n=!0},p(l,[f]){const m={};f&8204&&(m.$$scope={dirty:f,ctx:l}),!s&&f&1&&(s=!0,m.element=l[0],H(()=>s=!1)),!t&&f&2&&(t=!0,m.state=l[1],H(()=>t=!1)),e.$set(m)},i(l){n||($(e.$$.fragment,l),n=!0)},o(l){_(e.$$.fragment,l),n=!1},d(l){v(e,l)}}}function Oe(a,e,s){let t;Q(a,Z,m=>s(3,t=m));let n,{element:r=void 0}=e,{state:o=!1}=e;oe(()=>{if(!n)return;const m=n.querySelector("a[aria-current]");m&&we(m,n,"center","smooth")});function i(m){n=m,s(2,n)}function l(m){r=m,s(0,r)}function f(m){o=m,s(1,o)}return a.$$set=m=>{"element"in m&&s(0,r=m.element),"state"in m&&s(1,o=m.state)},[r,o,n,t,i,l,f]}class Ge extends C{constructor(e){super();M(this,e,Oe,Le,S,{element:0,state:1})}}function Ve(a){let e,s,t,n,r,o,i,l,f;s=new Ge({}),n=new de({});const m=a[1].default,w=O(m,a,a[0],null);return l=new ge({}),{c(){e=G("div"),d(s.$$.fragment),t=E(),d(n.$$.fragment),r=E(),o=G("main"),w&&w.c(),i=E(),d(l.$$.fragment),this.h()},l(p){e=V(p,"DIV",{class:!0});var b=y(e);g(s.$$.fragment,b),t=x(b),g(n.$$.fragment,b),r=x(b),o=V(b,"MAIN",{class:!0});var P=y(o);w&&w.l(P),P.forEach(c),i=x(b),g(l.$$.fragment,b),b.forEach(c),this.h()},h(){u(o,"class","aside-container"),u(e,"class","aside-layout")},m(p,b){k(p,e,b),h(s,e,null),j(e,t),h(n,e,null),j(e,r),j(e,o),w&&w.m(o,null),j(e,i),h(l,e,null),f=!0},p(p,[b]){w&&w.p&&(!f||b&1)&&X(w,m,p,p[0],f?K(m,p[0],b,null):J(p[0]),null)},i(p){f||($(s.$$.fragment,p),$(n.$$.fragment,p),$(w,p),$(l.$$.fragment,p),f=!0)},o(p){_(s.$$.fragment,p),_(n.$$.fragment,p),_(w,p),_(l.$$.fragment,p),f=!1},d(p){p&&c(e),v(s),v(n),w&&w.d(p),v(l)}}}function Xe(a,e,s){let{$$slots:t={},$$scope:n}=e;return a.$$set=r=>{"$$scope"in r&&s(0,n=r.$$scope)},[n,t]}class Je extends C{constructor(e){super();M(this,e,Xe,Ve,S,{})}}function Ke(a){let e,s;const t=a[1].default,n=O(t,a,a[0],null);return{c(){e=G("article"),n&&n.c(),this.h()},l(r){e=V(r,"ARTICLE",{class:!0,"data-viewport":!0,"data-padding-bottom":!0});var o=y(e);n&&n.l(o),o.forEach(c),this.h()},h(){u(e,"class","container content-article"),u(e,"data-viewport","desktop"),u(e,"data-padding-bottom","large")},m(r,o){k(r,e,o),n&&n.m(e,null),s=!0},p(r,[o]){n&&n.p&&(!s||o&1)&&X(n,t,r,r[0],s?K(t,r[0],o,null):J(r[0]),null)},i(r){s||($(n,r),s=!0)},o(r){_(n,r),s=!1},d(r){r&&c(e),n&&n.d(r)}}}function Pe(a,e,s){let{$$slots:t={},$$scope:n}=e;return a.$$set=r=>{"$$scope"in r&&s(0,n=r.$$scope)},[n,t]}class Qe extends C{constructor(e){super();M(this,e,Pe,Ke,S,{})}}function Ue(a){let e;const s=a[2].default,t=O(s,a,a[3],null);return{c(){t&&t.c()},l(n){t&&t.l(n)},m(n,r){t&&t.m(n,r),e=!0},p(n,r){t&&t.p&&(!e||r&8)&&X(t,s,n,n[3],e?K(s,n[3],r,null):J(n[3]),null)},i(n){e||($(t,n),e=!0)},o(n){_(t,n),e=!1},d(n){t&&t.d(n)}}}function We(a){let e,s;return e=new Qe({props:{$$slots:{default:[Ue]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){h(e,t,n),s=!0},p(t,n){const r={};n&8&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}function Ye(a){let e,s;return e=new Je({props:{$$slots:{default:[We]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,n){h(e,t,n),s=!0},p(t,[n]){const r={};n&8&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){_(e.$$.fragment,t),s=!1},d(t){v(e,t)}}}const lt=async({fetch:a})=>{const e=await a("/api/v4/navigation/docs.json");if(!e.ok){const t=await e.json();return{status:e.status,error:t.code}}return{props:{navigation:(await e.json()).data}}};function Ze(a,e,s){let t,{$$slots:n={},$$scope:r}=e,{navigation:o}=e;const i=Z.init(o);return Q(a,i,l=>s(4,t=l)),a.$$set=l=>{"navigation"in l&&s(1,o=l.navigation),"$$scope"in l&&s(3,r=l.$$scope)},a.$$.update=()=>{a.$$.dirty&2&&me(i,t=o,t)},[i,o,n,r]}class ut extends C{constructor(e){super();M(this,e,Ze,Ye,S,{navigation:1})}}export{ut as default,lt as load};
