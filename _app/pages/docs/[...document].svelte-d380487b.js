import{S as t,i as e,s as n,I as r,F as $,j as o,k as s,m as a,n as i,o as c,f as l,v as f,r as p,w as m,d as g,E as d,a0 as u,H as h,T as w,e as x,c as y,a as v,l as k,W as b,B as j,u as L,aO as z,t as D,g as E,h as N,$ as _,U as C,aP as O,af as M,ag as T,aQ as V,aR as I,aS as S,ad as F}from"../../chunks/vendor-a7c7b466.js";import{a as P,i as U,j as A}from"../../chunks/snippet-43816a16.js";const q=/%s/;function B(t){let e,n;return e=new z({}),{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,r){c(e,t,r),n=!0},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function H(t){let e;return{c(){e=D("Last Modified")},l(t){e=E(t,"Last Modified")},m(t,n){l(t,e,n)},d(t){t&&g(e)}}}function Q(t){let e;return{c(){e=D(t[1])},l(n){e=E(n,t[1])},m(t,n){l(t,e,n)},p(t,n){2&n&&N(e,t[1])},d(t){t&&g(e)}}}function R(t){let e,n,r,$,d;return e=new _({props:{hidden:"mobile"}}),$=new C({props:{href:t[2],rel:"noopener noreferrer",target:"_blank",palette:"accent",size:"medium",variation:"clear",$$slots:{default:[W]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),n=s(),r=x("div"),o($.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),r=y(t,"DIV",{});var o=v(r);a($.$$.fragment,o),o.forEach(g)},m(t,o){c(e,t,o),l(t,n,o),l(t,r,o),c($,r,null),d=!0},p(t,e){const n={};4&e&&(n.href=t[2]),16&e&&(n.$$scope={dirty:e,ctx:t}),$.$set(n)},i(t){d||(f(e.$$.fragment,t),f($.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),d=!1},d(t){m(e,t),t&&g(n),t&&g(r),m($)}}}function W(t){let e,n,r;return n=new O({}),{c(){e=D("View page in repository\n                "),o(n.$$.fragment)},l(t){e=E(t,"View page in repository\n                "),a(n.$$.fragment,t)},m(t,$){l(t,e,$),c(n,t,$),r=!0},i(t){r||(f(n.$$.fragment,t),r=!0)},o(t){p(n.$$.fragment,t),r=!1},d(t){t&&g(e),m(n,t)}}}function G(t){let e,n,r,$,d,z,D,E,N;e=new u({props:{variation:"icon",size:"medium",$$slots:{default:[B]},$$scope:{ctx:t}}}),$=new h({props:{is:"h5",align:"center",max_width:["widescreen:content-max","desktop:content-max","tablet:content-max"],$$slots:{default:[H]},$$scope:{ctx:t}}}),z=new w({props:{is:"small",$$slots:{default:[Q]},$$scope:{ctx:t}}});let _=t[0].edit.enabled&&R(t);return{c(){o(e.$$.fragment),n=s(),r=x("div"),o($.$$.fragment),d=s(),o(z.$$.fragment),D=s(),_&&_.c(),E=k()},l(t){a(e.$$.fragment,t),n=i(t),r=y(t,"DIV",{});var o=v(r);a($.$$.fragment,o),d=i(o),a(z.$$.fragment,o),o.forEach(g),D=i(t),_&&_.l(t),E=k()},m(t,o){c(e,t,o),l(t,n,o),l(t,r,o),c($,r,null),b(r,d),c(z,r,null),l(t,D,o),_&&_.m(t,o),l(t,E,o),N=!0},p(t,n){const r={};16&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const o={};16&n&&(o.$$scope={dirty:n,ctx:t}),$.$set(o);const s={};18&n&&(s.$$scope={dirty:n,ctx:t}),z.$set(s),t[0].edit.enabled?_?(_.p(t,n),1&n&&f(_,1)):(_=R(t),_.c(),f(_,1),_.m(E.parentNode,E)):_&&(j(),p(_,1,1,(()=>{_=null})),L())},i(t){N||(f(e.$$.fragment,t),f($.$$.fragment,t),f(z.$$.fragment,t),f(_),N=!0)},o(t){p(e.$$.fragment,t),p($.$$.fragment,t),p(z.$$.fragment,t),p(_),N=!1},d(t){m(e,t),t&&g(n),t&&g(r),m($),m(z),t&&g(D),_&&_.d(t),t&&g(E)}}}function J(t){let e,n,d,u;return e=new r({props:{margin_y:"large"}}),d=new $({props:{class:"documentation-footer",orientation:["widescreen:horizontal","desktop:horizontal","tablet:horizontal"],alignment:"center",spacing:"medium",width:"100",$$slots:{default:[G]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),n=s(),o(d.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(d.$$.fragment,t)},m(t,r){c(e,t,r),l(t,n,r),c(d,t,r),u=!0},p(t,[e]){const n={};23&e&&(n.$$scope={dirty:e,ctx:t}),d.$set(n)},i(t){u||(f(e.$$.fragment,t),f(d.$$.fragment,t),u=!0)},o(t){p(e.$$.fragment,t),p(d.$$.fragment,t),u=!1},d(t){m(e,t),t&&g(n),m(d,t)}}}function K(t,e,n){let r,$,o,s;return d(t,P,(t=>n(0,o=t))),d(t,U,(t=>n(3,s=t))),t.$$.update=()=>{var e,a;9&t.$$.dirty&&n(2,(e=o.edit.url,a=s.properties.identifier+".md",r=e.replace(q,a.toString()))),9&t.$$.dirty&&n(1,$=new Date(s.properties.modified_at).toLocaleString(o.locale.language))},[o,$,r,s]}class X extends t{constructor(t){super(),e(this,t,K,J,n,{})}}function Y(t,e,n){const r=t.slice();return r[4]=e[n][0],r[5]=e[n][1],r}function Z(t,e,n){const r=t.slice();return r[8]=e[n],r}function tt(t,e,n){const r=t.slice();return r[11]=e[n],r}function et(t){let e;return{c(){e=D(t[1])},l(n){e=E(n,t[1])},m(t,n){l(t,e,n)},p(t,n){2&n&&N(e,t[1])},d(t){t&&g(e)}}}function nt(t){let e,n=t[4]+"";return{c(){e=D(n)},l(t){e=E(t,n)},m(t,n){l(t,e,n)},p(t,r){4&r&&n!==(n=t[4]+"")&&N(e,n)},d(t){t&&g(e)}}}function rt(t){let e,n=t[8].name+"";return{c(){e=D(n)},l(t){e=E(t,n)},m(t,n){l(t,e,n)},p(t,r){4&r&&n!==(n=t[8].name+"")&&N(e,n)},d(t){t&&g(e)}}}function $t(t){let e,n;return e=new V({props:{$$slots:{default:[rt]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,r){c(e,t,r),n=!0},p(t,n){const r={};16388&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function ot(t){let e;return{c(){e=D("Description")},l(t){e=E(t,"Description")},m(t,n){l(t,e,n)},d(t){t&&g(e)}}}function st(t){let e,n,r=t[8].description+"";return{c(){e=new I,n=k(),this.h()},l(t){e=S(t),n=k(),this.h()},h(){e.a=n},m(t,$){e.m(r,t,$),l(t,n,$)},p(t,n){4&n&&r!==(r=t[8].description+"")&&e.p(r)},d(t){t&&g(n),t&&e.d()}}}function at(t){let e,n,r,$,d,u;return e=new w({props:{is:"strong",$$slots:{default:[ot]},$$scope:{ctx:t}}}),r=new _({props:{orientation:"horizontal",spacing:"huge"}}),d=new w({props:{is:"span",align:"right",max_width:"prose",$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),n=s(),o(r.$$.fragment),$=s(),o(d.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(r.$$.fragment,t),$=i(t),a(d.$$.fragment,t)},m(t,o){c(e,t,o),l(t,n,o),c(r,t,o),l(t,$,o),c(d,t,o),u=!0},p(t,n){const r={};16384&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const $={};16388&n&&($.$$scope={dirty:n,ctx:t}),d.$set($)},i(t){u||(f(e.$$.fragment,t),f(r.$$.fragment,t),f(d.$$.fragment,t),u=!0)},o(t){p(e.$$.fragment,t),p(r.$$.fragment,t),p(d.$$.fragment,t),u=!1},d(t){m(e,t),t&&g(n),m(r,t),t&&g($),m(d,t)}}}function it(t){let e;return{c(){e=D("Types")},l(t){e=E(t,"Types")},m(t,n){l(t,e,n)},d(t){t&&g(e)}}}function ct(t){let e,n;return e=new w({props:{is:"strong",$$slots:{default:[lt]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,r){c(e,t,r),n=!0},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function lt(t){let e;return{c(){e=D("(DEFAULT)")},l(t){e=E(t,"(DEFAULT)")},m(t,n){l(t,e,n)},d(t){t&&g(e)}}}function ft(t){let e,n,r,$,o=t[11]+"",a=t[11]===t[8].default&&ct(t);return{c(){e=D(o),n=s(),a&&a.c(),r=k()},l(t){e=E(t,o),n=i(t),a&&a.l(t),r=k()},m(t,o){l(t,e,o),l(t,n,o),a&&a.m(t,o),l(t,r,o),$=!0},p(t,n){(!$||4&n)&&o!==(o=t[11]+"")&&N(e,o),t[11]===t[8].default?a?4&n&&f(a,1):(a=ct(t),a.c(),f(a,1),a.m(r.parentNode,r)):a&&(j(),p(a,1,1,(()=>{a=null})),L())},i(t){$||(f(a),$=!0)},o(t){p(a),$=!1},d(t){t&&g(e),t&&g(n),a&&a.d(t),t&&g(r)}}}function pt(t,e){let n,r,$;return r=new V({props:{$$slots:{default:[ft]},$$scope:{ctx:e}}}),{key:t,first:null,c(){n=k(),o(r.$$.fragment),this.h()},l(t){n=k(),a(r.$$.fragment,t),this.h()},h(){this.first=n},m(t,e){l(t,n,e),c(r,t,e),$=!0},p(t,n){e=t;const $={};16388&n&&($.$$scope={dirty:n,ctx:e}),r.$set($)},i(t){$||(f(r.$$.fragment,t),$=!0)},o(t){p(r.$$.fragment,t),$=!1},d(t){t&&g(n),m(r,t)}}}function mt(t){let e,n,r=[],$=new Map,o=t[8].types;const s=t=>t[11];for(let a=0;a<o.length;a+=1){let e=tt(t,o,a),n=s(e);$.set(n,r[a]=pt(n,e))}return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=k()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=k()},m(t,$){for(let e=0;e<r.length;e+=1)r[e].m(t,$);l(t,e,$),n=!0},p(t,n){4&n&&(o=t[8].types,j(),r=M(r,n,s,1,t,o,$,e.parentNode,T,pt,e,tt),L())},i(t){if(!n){for(let t=0;t<o.length;t+=1)f(r[t]);n=!0}},o(t){for(let e=0;e<r.length;e+=1)p(r[e]);n=!1},d(t){for(let e=0;e<r.length;e+=1)r[e].d(t);t&&g(e)}}}function gt(t){let e,n,r,d,u,h;return e=new w({props:{is:"strong",$$slots:{default:[it]},$$scope:{ctx:t}}}),r=new _({props:{orientation:"horizontal",spacing:"huge"}}),u=new $({props:{orientation:"horizontal",alignment_x:"right",spacing:"small",variation:"wrap",max_width:"prose",$$slots:{default:[mt]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),n=s(),o(r.$$.fragment),d=s(),o(u.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(r.$$.fragment,t),d=i(t),a(u.$$.fragment,t)},m(t,$){c(e,t,$),l(t,n,$),c(r,t,$),l(t,d,$),c(u,t,$),h=!0},p(t,n){const r={};16384&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const $={};16388&n&&($.$$scope={dirty:n,ctx:t}),u.$set($)},i(t){h||(f(e.$$.fragment,t),f(r.$$.fragment,t),f(u.$$.fragment,t),h=!0)},o(t){p(e.$$.fragment,t),p(r.$$.fragment,t),p(u.$$.fragment,t),h=!1},d(t){m(e,t),t&&g(n),m(r,t),t&&g(d),m(u,t)}}}function dt(t){let e,n,r,d;return e=new $({props:{orientation:"horizontal",$$slots:{default:[at]},$$scope:{ctx:t}}}),r=new $({props:{orientation:"horizontal",$$slots:{default:[gt]},$$scope:{ctx:t}}}),{c(){o(e.$$.fragment),n=s(),o(r.$$.fragment)},l(t){a(e.$$.fragment,t),n=i(t),a(r.$$.fragment,t)},m(t,$){c(e,t,$),l(t,n,$),c(r,t,$),d=!0},p(t,n){const $={};16388&n&&($.$$scope={dirty:n,ctx:t}),e.$set($);const o={};16388&n&&(o.$$scope={dirty:n,ctx:t}),r.$set(o)},i(t){d||(f(e.$$.fragment,t),f(r.$$.fragment,t),d=!0)},o(t){p(e.$$.fragment,t),p(r.$$.fragment,t),d=!1},d(t){m(e,t),t&&g(n),m(r,t)}}}function ut(t,e){let n,d,u,w,k,j,L;return d=new h({props:{is:"h4",id:e[0]+"-"+e[4].toLowerCase()+"-"+e[8].name.toLowerCase(),$$slots:{default:[$t]},$$scope:{ctx:e}}}),w=new r({}),j=new $({props:{spacing:"medium",$$slots:{default:[dt]},$$scope:{ctx:e}}}),{key:t,first:null,c(){n=x("div"),o(d.$$.fragment),u=s(),o(w.$$.fragment),k=s(),o(j.$$.fragment),this.h()},l(t){n=y(t,"DIV",{});var e=v(n);a(d.$$.fragment,e),u=i(e),a(w.$$.fragment,e),k=i(e),a(j.$$.fragment,e),e.forEach(g),this.h()},h(){this.first=n},m(t,e){l(t,n,e),c(d,n,null),b(n,u),c(w,n,null),b(n,k),c(j,n,null),L=!0},p(t,n){e=t;const r={};5&n&&(r.id=e[0]+"-"+e[4].toLowerCase()+"-"+e[8].name.toLowerCase()),16388&n&&(r.$$scope={dirty:n,ctx:e}),d.$set(r);const $={};16388&n&&($.$$scope={dirty:n,ctx:e}),j.$set($)},i(t){L||(f(d.$$.fragment,t),f(w.$$.fragment,t),f(j.$$.fragment,t),L=!0)},o(t){p(d.$$.fragment,t),p(w.$$.fragment,t),p(j.$$.fragment,t),L=!1},d(t){t&&g(n),m(d),m(w),m(j)}}}function ht(t){let e,n,r=[],$=new Map,o=t[5];const a=t=>t[8].name;for(let s=0;s<o.length;s+=1){let e=Z(t,o,s),n=a(e);$.set(n,r[s]=ut(n,e))}return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=s()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=i(t)},m(t,$){for(let e=0;e<r.length;e+=1)r[e].m(t,$);l(t,e,$),n=!0},p(t,n){5&n&&(o=t[5],j(),r=M(r,n,a,1,t,o,$,e.parentNode,T,ut,e,Z),L())},i(t){if(!n){for(let t=0;t<o.length;t+=1)f(r[t]);n=!0}},o(t){for(let e=0;e<r.length;e+=1)p(r[e]);n=!1},d(t){for(let e=0;e<r.length;e+=1)r[e].d(t);t&&g(e)}}}function wt(t,e){let n,r,d,u,w;return r=new h({props:{is:"h3",id:e[0]+"-"+e[4].toLowerCase(),$$slots:{default:[nt]},$$scope:{ctx:e}}}),u=new $({props:{spacing:"medium",$$slots:{default:[ht]},$$scope:{ctx:e}}}),{key:t,first:null,c(){n=k(),o(r.$$.fragment),d=s(),o(u.$$.fragment),this.h()},l(t){n=k(),a(r.$$.fragment,t),d=i(t),a(u.$$.fragment,t),this.h()},h(){this.first=n},m(t,e){l(t,n,e),c(r,t,e),l(t,d,e),c(u,t,e),w=!0},p(t,n){e=t;const $={};5&n&&($.id=e[0]+"-"+e[4].toLowerCase()),16388&n&&($.$$scope={dirty:n,ctx:e}),r.$set($);const o={};16389&n&&(o.$$scope={dirty:n,ctx:e}),u.$set(o)},i(t){w||(f(r.$$.fragment,t),f(u.$$.fragment,t),w=!0)},o(t){p(r.$$.fragment,t),p(u.$$.fragment,t),w=!1},d(t){t&&g(n),m(r,t),t&&g(d),m(u,t)}}}function xt(t){let e,n,r,$,d=[],u=new Map;e=new h({props:{is:"h2",id:t[0],$$slots:{default:[et]},$$scope:{ctx:t}}});let w=t[2];const x=t=>t[4];for(let o=0;o<w.length;o+=1){let e=Y(t,w,o),n=x(e);u.set(n,d[o]=wt(n,e))}return{c(){o(e.$$.fragment),n=s();for(let t=0;t<d.length;t+=1)d[t].c();r=k()},l(t){a(e.$$.fragment,t),n=i(t);for(let e=0;e<d.length;e+=1)d[e].l(t);r=k()},m(t,o){c(e,t,o),l(t,n,o);for(let e=0;e<d.length;e+=1)d[e].m(t,o);l(t,r,o),$=!0},p(t,[n]){const $={};1&n&&($.id=t[0]),16386&n&&($.$$scope={dirty:n,ctx:t}),e.$set($),5&n&&(w=t[2],j(),d=M(d,n,x,1,t,w,u,r.parentNode,T,wt,r,Y),L())},i(t){if(!$){f(e.$$.fragment,t);for(let t=0;t<w.length;t+=1)f(d[t]);$=!0}},o(t){p(e.$$.fragment,t);for(let e=0;e<d.length;e+=1)p(d[e]);$=!1},d(t){m(e,t),t&&g(n);for(let e=0;e<d.length;e+=1)d[e].d(t);t&&g(r)}}}function yt(t,e,n){let r,{id:$}=e,{references:o}=e,{title:s}=e;return t.$$set=t=>{"id"in t&&n(0,$=t.id),"references"in t&&n(3,o=t.references),"title"in t&&n(1,s=t.title)},t.$$.update=()=>{8&t.$$.dirty&&n(2,r=Object.entries(o))},[$,s,r,o]}class vt extends t{constructor(t){super(),e(this,t,yt,xt,n,{id:0,references:3,title:1})}}function kt(t){let e,n;return e=new vt({props:{references:t[0].properties.properties,id:"properties",title:"Properties"}}),{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,r){c(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.references=t[0].properties.properties),e.$set(r)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function bt(t){let e,n;return e=new vt({props:{references:t[0].properties.events,id:"events",title:"Events"}}),{c(){o(e.$$.fragment)},l(t){a(e.$$.fragment,t)},m(t,r){c(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.references=t[0].properties.events),e.$set(r)},i(t){n||(f(e.$$.fragment,t),n=!0)},o(t){p(e.$$.fragment,t),n=!1},d(t){m(e,t)}}}function jt(t){let e,n,r,$,d,u,h,w,x=t[0].render+"",y=Object.keys(t[0].properties.properties).length>0,v=Object.keys(t[0].properties.events).length>0;document.title=e=t[0].properties.title+" — "+t[1].application.title;let k=y&&kt(t),b=v&&bt(t);return h=new X({}),{c(){n=s(),r=new I,$=s(),k&&k.c(),d=s(),b&&b.c(),u=s(),o(h.$$.fragment),this.h()},l(t){F('[data-svelte="svelte-1f1iq3w"]',document.head).forEach(g),n=i(t),r=S(t),$=i(t),k&&k.l(t),d=i(t),b&&b.l(t),u=i(t),a(h.$$.fragment,t),this.h()},h(){r.a=$},m(t,e){l(t,n,e),r.m(x,t,e),l(t,$,e),k&&k.m(t,e),l(t,d,e),b&&b.m(t,e),l(t,u,e),c(h,t,e),w=!0},p(t,[n]){(!w||3&n)&&e!==(e=t[0].properties.title+" — "+t[1].application.title)&&(document.title=e),(!w||1&n)&&x!==(x=t[0].render+"")&&r.p(x),1&n&&(y=Object.keys(t[0].properties.properties).length>0),y?k?(k.p(t,n),1&n&&f(k,1)):(k=kt(t),k.c(),f(k,1),k.m(d.parentNode,d)):k&&(j(),p(k,1,1,(()=>{k=null})),L()),1&n&&(v=Object.keys(t[0].properties.events).length>0),v?b?(b.p(t,n),1&n&&f(b,1)):(b=bt(t),b.c(),f(b,1),b.m(u.parentNode,u)):b&&(j(),p(b,1,1,(()=>{b=null})),L())},i(t){w||(f(k),f(b),f(h.$$.fragment,t),w=!0)},o(t){p(k),p(b),p(h.$$.fragment,t),w=!1},d(t){t&&g(n),t&&r.d(),t&&g($),k&&k.d(t),t&&g(d),b&&b.d(t),t&&g(u),m(h,t)}}}var Lt=function(t,e,n,r){return new(n||(n=Promise))((function($,o){function s(t){try{i(r.next(t))}catch(e){o(e)}}function a(t){try{i(r.throw(t))}catch(e){o(e)}}function i(t){var e;t.done?$(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}i((r=r.apply(t,e||[])).next())}))};const zt=({fetch:t,page:e})=>Lt(void 0,void 0,void 0,(function*(){const{document:n=""}=e.params,r=yield t(`/api/v2/content/docs/${n}.json`);if(!r.ok){const t=yield r.json();return{status:r.status,error:t.code}}return{props:{documentation:(yield r.json()).data}}}));function Dt(t,e,n){let r;d(t,P,(t=>n(1,r=t)));let{documentation:$}=e;return A($),t.$$set=t=>{"documentation"in t&&n(0,$=t.documentation)},[$,r]}export default class extends t{constructor(t){super(),e(this,t,Dt,jt,n,{documentation:0})}}export{zt as load};
