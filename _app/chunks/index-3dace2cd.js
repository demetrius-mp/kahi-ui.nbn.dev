import{S as I,i as S,s as D,e as j,c as k,a as L,d as y,b as m,f as T,au as h,ak as b,D as _,bd as q,aI as w,aK as K,a7 as N}from"./vendor-60ec2bc5.js";import{s as U,c as V,a as E}from"./pipeline-48dac86b.js";function Y(s){let n,l,r,a,f,c;return{c(){n=j("div"),this.h()},l(t){n=k(t,"DIV",{class:!0,style:!0}),L(n).forEach(y),this.h()},h(){m(n,"class",l="pipeline-render-component "+s[1]+" svelte-13c43mf"),m(n,"style",s[2])},m(t,o){var u,i,d,p;T(t,n,o),s[9](n),f||(c=[h(r=U.call(null,n,{stylesheet:(i=(u=s[4])==null?void 0:u.stylesheet)!=null?i:void 0})),h(a=V.call(null,n,{on_destroy:s[5],on_error:s[6],on_mount:s[7],Component:(p=(d=s[4])==null?void 0:d.module.exports.default)!=null?p:void 0}))],f=!0)},p(t,[o]){var u,i,d,p;o&2&&l!==(l="pipeline-render-component "+t[1]+" svelte-13c43mf")&&m(n,"class",l),o&4&&m(n,"style",t[2]),r&&b(r.update)&&o&16&&r.update.call(null,{stylesheet:(i=(u=t[4])==null?void 0:u.stylesheet)!=null?i:void 0}),a&&b(a.update)&&o&16&&a.update.call(null,{on_destroy:t[5],on_error:t[6],on_mount:t[7],Component:(p=(d=t[4])==null?void 0:d.module.exports.default)!=null?p:void 0})},i:_,o:_,d(t){t&&y(n),s[9](null),f=!1,q(c)}}}function z(s,n,l){let r,a=_,f=()=>(a(),a=K(i,e=>l(8,r=e)),i);s.$$.on_destroy.push(()=>a());const c=w();let{element:t=void 0}=n,{class:o=""}=n,{style:u=void 0}=n,{pipeline:i}=n;f();let d=null;function p(e){c("destroy",{component:e})}function C(e){c("error",{error:e})}function P(e){c("mount",{component:e})}function v(e){if(!!e)if(e.type===E.error){const R=new EvalError(e.message);c("error",{error:R})}else e.type===E.evaluated&&l(4,d=e)}function g(e){N[e?"unshift":"push"](()=>{t=e,l(0,t)})}return s.$$set=e=>{"element"in e&&l(0,t=e.element),"class"in e&&l(1,o=e.class),"style"in e&&l(2,u=e.style),"pipeline"in e&&f(l(3,i=e.pipeline))},s.$$.update=()=>{s.$$.dirty&256&&v(r)},[t,o,u,i,d,p,C,P,r,g]}class A extends I{constructor(n){super();S(this,n,z,Y,D,{element:0,class:1,style:2,pipeline:3})}}var G=A;export{G as PipelineRenderComponent};
