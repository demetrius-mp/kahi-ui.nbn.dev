var y=Object.defineProperty,v=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var l=(e,s,r)=>s in e?y(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,i=(e,s)=>{for(var r in s||(s={}))_.call(s,r)&&l(e,r,s[r]);if(h)for(var r of h(s))w.call(s,r)&&l(e,r,s[r]);return e},d=(e,s)=>v(e,k(s));import"./snippet-e4557597.js";import{a8 as x,Y as N,a9 as D,aa as j}from"./vendor-ec7aa2c0.js";import{i as E,a as A}from"./url-b5fabed9.js";function C(e){return typeof e=="object"&&"href"in e}function I(e){return typeof e=="object"&&"text"in e}function T(e){return typeof e=="object"&&"items"in e&&"separator"in e}function q(e,s={}){const{base:r="",default_no_scroll:u=!1,default_prefetch:p=!1,default_title:f="",title_map:m={}}=s;return e.map(o=>{var n;if(C(o)){const{href:t,text:a}=o;let{is_external:c=!1,no_scroll:b=u,prefetch:g=p}=o;return c||(c=E(t)),d(i({},o),{is_external:c,href:c?t:A(r,t),no_scroll:c?void 0:b||void 0,prefetch:c?void 0:g||void 0,text:(n=a!=null?a:m[t])!=null?n:f})}else if(T(o)&&o.items.length>0){const{items:t,separator:a}=o;return d(i({},o),{items:q(t,s),separator:a!=null?a:f})}else if(I(o)){const{text:t}=o;return d(i({},o),{text:t!=null?t:f})}return i({},o)})}function F(e={}){const{application:s=[],documentation:r=[]}=e;return{application:s,documentation:r}}var W=F({application:[{href:"/docs/framework/getting-started",text:"Documentation",icon:x},{href:"https://github.com/novacbn/kahi-ui",text:"Source",icon:N},{href:"https://github.com/novacbn/kahi-ui/releases",text:"Releases",icon:D},{href:"/chat",text:"Chat",icon:j}],documentation:[{separator:"Resources",items:[{href:"/docs/resources/official"},{href:"/docs/resources/community"}]},{separator:"Framework",items:[{href:"/docs/framework/getting-started"},{href:"/docs/framework/faq"},{href:"/docs/framework/browser-support"},{href:"/docs/framework/responsitivity"},{href:"/docs/framework/elements"},{href:"/docs/framework/events"}]},{separator:"Typography",items:[{href:"/docs/typography/blockquote"},{href:"/docs/typography/code"},{href:"/docs/typography/heading"},{href:"/docs/typography/text"}]},{separator:"Embedded",items:[{href:"/docs/embedded/figure"}]},{separator:"Display",items:[{href:"/docs/display/badge"},{href:"/docs/display/list"},{href:"/docs/display/table",badge:"UPDATED"}]},{separator:"Disclosure",items:[{href:"/docs/disclosure/accordion",badge:"NEW"},{href:"/docs/disclosure/carousel",badge:"NEW"},{href:"/docs/disclosure/tab",badge:"UPDATED"}]},{separator:"Feedback",items:[{href:"/docs/feedback/dot"},{href:"/docs/feedback/ellipsis"},{href:"/docs/feedback/progress"},{href:"/docs/feedback/spinner"},{href:"/docs/feedback/wave"}]},{separator:"Interactables",items:[{href:"/docs/interactables/button"},{href:"/docs/interactables/check"},{href:"/docs/interactables/filedropinput",badge:"NEW"},{href:"/docs/interactables/form"},{href:"/docs/interactables/radio"},{href:"/docs/interactables/switch"},{href:"/docs/interactables/textinput"}]},{separator:"Layouts",items:[{href:"/docs/layouts/center"},{href:"/docs/layouts/container"},{href:"/docs/layouts/divider"},{href:"/docs/layouts/grid"},{href:"/docs/layouts/group"},{href:"/docs/layouts/mosaic"},{href:"/docs/layouts/position"},{href:"/docs/layouts/scrollable"},{href:"/docs/layouts/spacer"},{href:"/docs/layouts/stack"}]},{separator:"Surfaces",items:[{href:"/docs/surfaces/box"},{href:"/docs/surfaces/card"},{href:"/docs/surfaces/hero"},{href:"/docs/surfaces/tile"}]},{separator:"Navigation",items:[{href:"/docs/navigation/anchor"},{href:"/docs/navigation/aside"},{href:"/docs/navigation/breadcrumb"},{href:"/docs/navigation/menu"},{href:"/docs/navigation/omni"}]},{separator:"Overlays",items:[{href:"/docs/overlays/clickable"},{href:"/docs/overlays/popover"},{href:"/docs/overlays/offscreen"},{href:"/docs/overlays/overlay"}]},{separator:"Utilities",items:[{href:"/docs/utilities/browserrender"},{href:"/docs/utilities/contextbackdrop"},{href:"/docs/utilities/contextbutton"},{href:"/docs/utilities/intersectionrender"},{href:"/docs/utilities/portal"},{href:"/docs/utilities/serverrender"},{href:"/docs/utilities/transition"}]},{separator:"Modifiers",items:[{href:"/docs/modifiers/html5"},{href:"/docs/modifiers/hidden"},{href:"/docs/modifiers/sizings"},{href:"/docs/modifiers/spacings"}]},{separator:"Actions",items:[{href:"/docs/actions/click_outside"},{href:"/docs/actions/keybind"},{href:"/docs/actions/intersection_observer"},{href:"/docs/actions/mutation_observer"}]},{separator:"Stores",items:[{href:"/docs/stores/darkmode"},{href:"/docs/stores/htmlpalette"},{href:"/docs/stores/mediaquery"},{href:"/docs/stores/prefersscheme"},{href:"/docs/stores/scrolllock"},{href:"/docs/stores/viewport"}]}]});export{W as N,q as m};
