(()=>{"use strict";var t={8744:(t,e,n)=>{var o=n(5795);e.H=o.createRoot,o.hydrateRoot},5795:t=>{t.exports=window.ReactDOM}},e={};const n=window.React;var o=function n(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}(8744);const a=t=>{const{width:e="0px",style:n="solid",color:o="",side:a="all",radius:r="0px"}=t||{},s=t=>{const e=a?.toLowerCase();return e?.includes("all")||e?.includes(t)},l=`${e} ${n} ${o}`,i=`\n\t\t${"0px"!==e&&e?["top","right","bottom","left"].map((t=>s(t)?`border-${t}: ${l};`:"")).join(""):""}\n\t\t${r?`border-radius: ${r};`:""}\n\t`;return i},r=t=>{const{color:e="#333",bgType:n="solid",bg:o="",gradient:a="linear-gradient(135deg, #4527a4, #8344c5)"}=t||{};return`\n\t\t${e?`color: ${e};`:""}\n\t\t${a||o?`background: ${"gradient"===n?a:o};`:""}\n\t`},s=(t,e="box")=>{const{hOffset:n="0px",vOffset:o="0px",blur:a="0px",spreed:r="0px",color:s="#7090b0",isInset:l=!1}=t||{},i=`${n} ${o} ${a}`;return("text"===e?`${i} ${s}`:`${i} ${r} ${s} ${l?"inset":""}`)||"none"},l=t=>{const{side:e=2,vertical:n="0px",horizontal:o="0px",top:a="0px",right:r="0px",bottom:s="0px",left:l="0px"}=t||{};return 2===e?`${n} ${o}`:`${a} ${r} ${s} ${l}`},i=(t,e,n=!0)=>{const{fontFamily:o="Default",fontCategory:a="sans-serif",fontVariant:r=400,fontWeight:s=400,isUploadFont:l=!0,fontSize:i={desktop:15,tablet:15,mobile:15},fontStyle:c="normal",textTransform:$="none",textDecoration:d="auto",lineHeight:p="135%",letterSpace:m="0px"}=e||{},x=(t,e)=>t?`${e}: ${t};`:"",u=!n||!o||"Default"===o,f=i?.desktop||i,g=i?.tablet||f,b=i?.mobile||g,h=`\n\t\t${u?"":`font-family: '${o}', ${a};`}\n\t\t${x(s,"font-weight")}\n\t\tfont-size: ${f}px;\n\t\t${x(c,"font-style")}\n\t\t${x($,"text-transform")}\n\t\t${x(d,"text-decoration")}\n\t\t${x(p,"line-height")}\n\t\t${x(m,"letter-spacing")}\n\t`,y=r&&400!==r?"400i"===r?":ital@1":r?.includes("00i")?`: ital, wght@1, ${r?.replace("00i","00")} `:`: wght@${r} `:"",w=u?"":`https://fonts.googleapis.com/css2?family=${o?.split(" ").join("+")}${y.replace(/ /g,"")}&display=swap`;return{googleFontLink:!l||u?"":`@import url(${w});`,styles:`${t}{\n\t\t\t${h}\n\t\t}\n\t\t@media only screen and (min-width: 641px) and (max-width: 1024px) {\n\t\t\t${t}{\n\t\t\t\tfont-size: ${g}px;\n\t\t\t}\n\t\t}\n\t\t@media only screen and (max-width: 640px) {\n\t\t\t${t}{\n\t\t\t\tfont-size: ${b}px;\n\t\t\t}\n\t\t}`.replace(/\s+/g," ").trim()}},c="bBlocksAlert",$=({attributes:t,id:e})=>{const{width:o,alignment:$,textAlign:d,typography:p,colors:m,padding:x,border:u,shadow:f}=t,g=`#${e} .${c} .alert`;return(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:`\n\t\t${i("",p)?.googleFontLink}\n\t\t${i(g,p)?.styles}\n\n\t\t${g}{\n\t\t\ttext-align: ${$};\n\t\t}\n\t\t${g}{\n\t\t\ttext-align: ${d};\n\t\t\twidth: ${["0px","0%","0em"].includes(o)?"auto":o};\n\t\t\t${r(m)}\n\t\t\tpadding: ${l(x)};\n\t\t\t${a(u)}\n\t\t\tbox-shadow: ${s(f)};\n\t\t}\n\t\t${g} .alertIcon{\n\t\t\tfont-size: ${p?.fontSize?.desktop};\n\t\t\tcolor: ${m?.color};\n\t\t}\n\t\t${g} .alertClose{\n\t\t\tcolor: ${m?.color};\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t${g} .alertIcon{\n\t\t\t\tfont-size: ${p?.fontSize?.tablet};\n\t\t\t}\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t${g} .alertIcon{\n\t\t\t\tfont-size: ${p?.fontSize?.mobile};\n\t\t\t}c\n\t\t}\n\t\t`.replace(/\s+/g," ")}})},d=({attributes:t,alertEl:e=null})=>{const{message:o,icon:a,isDismiss:r}=t;return(0,n.createElement)("div",{className:c},(0,n.createElement)("div",{className:"alert"},a?.class&&(0,n.createElement)("i",{className:`alertIcon ${a?.class}`}),o&&(0,n.createElement)("span",{className:"alertMessage",dangerouslySetInnerHTML:{__html:o}}),r&&(0,n.createElement)("i",{className:"alertClose fa fa-times-circle",onClick:()=>{e&&(e.classList.add("transformHidden"),setTimeout((()=>{e.style.display="none"}),400))}})))};document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".wp-block-b-blocks-alert").forEach((t=>{const e=JSON.parse(t.dataset.attributes);(0,o.H)(t).render((0,n.createElement)(n.Fragment,null,(0,n.createElement)($,{attributes:e,id:t.id}),(0,n.createElement)(d,{attributes:e,alertEl:t}))),t?.removeAttribute("data-attributes")}))}))})();