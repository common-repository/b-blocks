(()=>{"use strict";var e={8744:(e,t,a)=>{var n=a(5795);t.H=n.createRoot,n.hydrateRoot},5795:e=>{e.exports=window.ReactDOM}},t={};const a=window.React;var n=function a(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}(8744);document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".bplAdminHelpPage"),t=[{title:"Need any Assistance?",description:"Our Expert Support Team is always ready to help you out promptly.",iconClass:"fa fa-life-ring",link:"https://bplugins.com/support",linkText:"Contact Support"},{title:"Looking for Documentation?",description:"We have detailed documentation on every aspects of the plugin.",iconClass:"fa fa-file-text",link:"https://bblockswp.com/docs/",linkText:"Documentation"},{title:"Liked This Plugin?",description:"Glad to know that, you can support us by leaving a 5 &#11088; rating.",iconClass:"fa fa-thumbs-up",link:"https://wordpress.org/support/plugin/b-blocks/reviews/#new-post",linkText:"Rate the Plugin"}];e&&(0,n.H)(e).render((0,a.createElement)("div",{className:"bplContainer"},(0,a.createElement)("div",{className:"header box"},(0,a.createElement)("h1",{className:"heading"},"Helpful Links")),(0,a.createElement)("div",{className:"body"},(0,a.createElement)("div",{className:"features col-3 col-tab-2 col-mob-1"},t.map(((e,t)=>(0,a.createElement)(r,{key:t,feature:e})))))))}));const r=({feature:e})=>{const{title:t,description:n,iconClass:r,link:o,linkText:s}=e;return(0,a.createElement)("div",{className:"feature box"},(0,a.createElement)("i",{className:r}),(0,a.createElement)("h3",{dangerouslySetInnerHTML:{__html:t}}),(0,a.createElement)("p",{dangerouslySetInnerHTML:{__html:n}}),(0,a.createElement)("a",{href:o,target:"_blank",rel:"noreferrer",className:"button button-primary",dangerouslySetInnerHTML:{__html:s}}))}})();