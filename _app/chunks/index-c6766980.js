import{S,i as j,s as D,e as I,c as L,a as w,d as y,b as f,f as N,aw as h,am as b,D as _,bj as T,aL as k,aN as q,a7 as U}from"./vendor-4c929228.js";import{s as V,c as Y,a as E}from"./pipeline-48dac86b.js";function z(s){let n,l,r,a,m,c;return{c(){n=I("div"),this.h()},l(t){n=L(t,"DIV",{class:!0,style:!0}),w(n).forEach(y),this.h()},h(){f(n,"class",l="pipeline-render-component "+s[1]+" svelte-13c43mf"),f(n,"style",s[2])},m(t,o){var u,i,d,p;N(t,n,o),s[9](n),m||(c=[h(r=V.call(null,n,{stylesheet:(i=(u=s[4])==null?void 0:u.stylesheet)!=null?i:void 0})),h(a=Y.call(null,n,{on_destroy:s[5],on_error:s[6],on_mount:s[7],Component:(p=(d=s[4])==null?void 0:d.module.exports.default)!=null?p:void 0}))],m=!0)},p(t,[o]){var u,i,d,p;o&2&&l!==(l="pipeline-render-component "+t[1]+" svelte-13c43mf")&&f(n,"class",l),o&4&&f(n,"style",t[2]),r&&b(r.update)&&o&16&&r.update.call(null,{stylesheet:(i=(u=t[4])==null?void 0:u.stylesheet)!=null?i:void 0}),a&&b(a.update)&&o&16&&a.update.call(null,{on_destroy:t[5],on_error:t[6],on_mount:t[7],Component:(p=(d=t[4])==null?void 0:d.module.exports.default)!=null?p:void 0})},i:_,o:_,d(t){t&&y(n),s[9](null),m=!1,T(c)}}}function A(s,n,l){let r,a=_,m=()=>(a(),a=q(i,e=>l(8,r=e)),i);s.$$.on_destroy.push(()=>a());const c=k();let{element:t=void 0}=n,{class:o=""}=n,{style:u=void 0}=n,{pipeline:i}=n;m();let d=null;function p(e){c("destroy",{component:e})}function C(e){c("error",{error:e})}function P(e){c("mount",{component:e})}function v(e){if(!!e)if(e.type===E.error){const R=new EvalError(e.message);c("error",{error:R})}else e.type===E.evaluated&&l(4,d=e)}function g(e){U[e?"unshift":"push"](()=>{t=e,l(0,t)})}return s.$$set=e=>{"element"in e&&l(0,t=e.element),"class"in e&&l(1,o=e.class),"style"in e&&l(2,u=e.style),"pipeline"in e&&m(l(3,i=e.pipeline))},s.$$.update=()=>{s.$$.dirty&256&&v(r)},[t,o,u,i,d,p,C,P,r,g]}class B extends S{constructor(n){super();j(this,n,A,z,D,{element:0,class:1,style:2,pipeline:3})}}var H=B;export{H as PipelineRenderComponent};