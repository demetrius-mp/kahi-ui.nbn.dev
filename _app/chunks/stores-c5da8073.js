import{C as o,y as n,aB as i}from"./vendor-0cbb6e11.js";function b(e){return{init(r){const t=o(r);return n(e,{subscribe:t.subscribe}),t},subscribe(r,t){const s=i(e);if(!s)throw ReferenceError(`bad dispatch to 'subscribe' (failed to lookup context '${e.toString()}')`);return s.subscribe(r,t)}}}export{b as m};
