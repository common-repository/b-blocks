(()=>{"use strict";var t={8744:(t,e,n)=>{var r=n(5795);e.H=r.createRoot,r.hydrateRoot},5795:t=>{t.exports=window.ReactDOM}},e={};const n=window.React;var r=function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}(8744);const o=(t,e=!0,n=!0,r=!0)=>{const{type:o="solid",color:a="#000000b3",gradient:d="linear-gradient(135deg, #4527a4, #8344c5)",image:i={},position:c="center center",attachment:s="initial",repeat:l="no-repeat",size:$="cover",overlayColor:u="#000000b3"}=t||{};return"gradient"===o&&n?`background: ${d};`:"image"===o&&r?`background: url(${i?.url});\n\t\t\t\tbackground-color: ${u};\n\t\t\t\tbackground-position: ${c};\n\t\t\t\tbackground-size: ${$};\n\t\t\t\tbackground-repeat: ${l};\n\t\t\t\tbackground-attachment: ${s};\n\t\t\t\tbackground-blend-mode: overlay;`:e&&`background: ${a};`},a=t=>{const{width:e="0px",style:n="solid",color:r="",side:o="all",radius:a="0px"}=t||{},d=t=>{const e=o?.toLowerCase();return e?.includes("all")||e?.includes(t)},i=`${e} ${n} ${r}`,c=`\n\t\t${"0px"!==e&&e?["top","right","bottom","left"].map((t=>d(t)?`border-${t}: ${i};`:"")).join(""):""}\n\t\t${a?`border-radius: ${a};`:""}\n\t`;return c},d=(t,e="box")=>{const{hOffset:n="0px",vOffset:r="0px",blur:o="0px",spreed:a="0px",color:d="#7090b0",isInset:i=!1}=t||{},c=`${n} ${r} ${o}`;return("text"===e?`${c} ${d}`:`${c} ${a} ${d} ${i?"inset":""}`)||"none"},i=t=>{const{side:e=2,vertical:n="0px",horizontal:r="0px",top:o="0px",right:a="0px",bottom:d="0px",left:i="0px"}=t||{};return 2===e?`${n} ${r}`:`${o} ${a} ${d} ${i}`},c="bBlocksColumn",s=({attributes:t,id:e})=>{const{width:r,overflow:s,background:l,padding:$,border:u,shadow:p}=t,b=`#${e}`;return(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:`\n\t\t${b}{\n\t\t\twidth: ${r.mobile}%;\n\t\t}\n\t\t@media (min-width: 576px) {\n\t\t\t${b}{\n\t\t\t\twidth: ${r.tablet}%;\n\t\t\t}\n\t\t}\n\n\t\t@media (min-width: 768px) {\n\t\t\t${b}{\n\t\t\t\twidth: ${r.desktop}%;\n\t\t\t}\n\t\t}\n\n\t\t#${e} .${c}{\n\t\t\toverflow: ${s};\n\t\t\t${o(l)}\n\t\t\tpadding: ${i($)};\n\t\t\t${a(u)}\n\t\t\tbox-shadow: ${d(p)};\n\t\t}\n\t\t`.replace(/\s+/g," ")}})};document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".wp-block-b-blocks-column").forEach((t=>{const e=JSON.parse(t.dataset.attributes),o=document.querySelector(`#${t.id} .${c}Style`);(0,r.H)(o).render((0,n.createElement)(n.Fragment,null,(0,n.createElement)(s,{attributes:e,id:t.id}))),t?.removeAttribute("data-attributes")}))}))})();