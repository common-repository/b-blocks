(()=>{"use strict";var t={8744:(t,e,n)=>{var r=n(5795);e.H=r.createRoot,r.hydrateRoot},5795:t=>{t.exports=window.ReactDOM}},e={};const n=window.React;var r=function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}(8744);const o=(t,e=!0,n=!0,r=!0)=>{const{type:o="solid",color:a="#000000b3",gradient:i="linear-gradient(135deg, #4527a4, #8344c5)",image:c={},position:d="center center",attachment:s="initial",repeat:l="no-repeat",size:$="cover",overlayColor:u="#000000b3"}=t||{};return"gradient"===o&&n?`background: ${i};`:"image"===o&&r?`background: url(${c?.url});\n\t\t\t\tbackground-color: ${u};\n\t\t\t\tbackground-position: ${d};\n\t\t\t\tbackground-size: ${$};\n\t\t\t\tbackground-repeat: ${l};\n\t\t\t\tbackground-attachment: ${s};\n\t\t\t\tbackground-blend-mode: overlay;`:e&&`background: ${a};`},a=t=>{const{width:e="0px",style:n="solid",color:r="",side:o="all",radius:a="0px"}=t||{},i=t=>{const e=o?.toLowerCase();return e?.includes("all")||e?.includes(t)},c=`${e} ${n} ${r}`,d=`\n\t\t${"0px"!==e&&e?["top","right","bottom","left"].map((t=>i(t)?`border-${t}: ${c};`:"")).join(""):""}\n\t\t${a?`border-radius: ${a};`:""}\n\t`;return d},i=(t,e="box")=>{const{hOffset:n="0px",vOffset:r="0px",blur:o="0px",spreed:a="0px",color:i="#7090b0",isInset:c=!1}=t||{},d=`${n} ${r} ${o}`;return("text"===e?`${d} ${i}`:`${d} ${a} ${i} ${c?"inset":""}`)||"none"},c="bBlocksSocialShare",d=({attributes:t,id:e})=>{const{socials:r,alignment:d,background:s,size:l,padding:$,margin:u,border:b,shadow:g}=t,p=`#${e}`,m=`${p} ul.${c}`;return(0,n.createElement)("style",{dangerouslySetInnerHTML:{__html:`\n\t\t${p}{\n\t\t\ttext-align: ${d};\n\t\t}\n\t\t${m} li.icon{\n\t\t\tfont-size: ${l};\n\t\t\t${o(s)}\n\t\t\twidth: calc( ${l} + ${$} + ${$} );\n\t\t\theight: calc( ${l} + ${$} + ${$} );\n\t\t\tmargin: 0 calc( ${u} / 2 );\n\t\t\t${a(b)}\n\t\t\tbox-shadow: ${i(g)||"none"};\n\t\t}\n\t\t${m} li.icon img{\n\t\t\twidth: ${l};\n\t\t}\n\n\t\t${r?.map(((t,e)=>`\n\t\t\t${m} li.icon-${e} i{\n\t\t\t\t${((t,e=!0,n=!0)=>{const{fontSize:r=16,colorType:o="solid",color:a="inherit",gradient:i="linear-gradient(135deg, #4527a4, #8344c5)"}=t||{};return`\n\t\t${r&&e?`font-size: ${r}px;`:""}\n\t\t${n?"gradient"===o?`color: transparent; background-image: ${i}; -webkit-background-clip: text; background-clip: text;`:`color: ${a};`:""}\n\t`})(t?.icon)}\n\t\t\t\tfont-size: inherit;\n\t\t\t}`)).join(" ")}\n\t\t`.replace(/\s+/g," ")}})};document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".wp-block-b-blocks-social-share").forEach((t=>{const e=JSON.parse(t.dataset.attributes),o=document.querySelector(`#${t.id} .${c}Style`);(0,r.H)(o).render((0,n.createElement)(d,{attributes:e,id:t.id})),t?.removeAttribute("data-attributes")}))}))})();