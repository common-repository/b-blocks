(()=>{"use strict";var t={8744:(t,n,e)=>{var o=e(5795);n.H=o.createRoot,o.hydrateRoot},5795:t=>{t.exports=window.ReactDOM}},n={};const e=window.React;var o=function e(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return t[o](i,i.exports,e),i.exports}(8744);const r=(t,n=!0,e=!0,o=!0)=>{const{type:r="solid",color:i="#000000b3",gradient:a="linear-gradient(135deg, #4527a4, #8344c5)",image:s={},position:l="center center",attachment:$="initial",repeat:d="no-repeat",size:c="cover",overlayColor:p="#000000b3"}=t||{};return"gradient"===r&&e?`background: ${a};`:"image"===r&&o?`background: url(${s?.url});\n\t\t\t\tbackground-color: ${p};\n\t\t\t\tbackground-position: ${l};\n\t\t\t\tbackground-size: ${c};\n\t\t\t\tbackground-repeat: ${d};\n\t\t\t\tbackground-attachment: ${$};\n\t\t\t\tbackground-blend-mode: overlay;`:n&&`background: ${i};`},i=t=>{const{width:n="0px",style:e="solid",color:o="",side:r="all",radius:i="0px"}=t||{},a=t=>{const n=r?.toLowerCase();return n?.includes("all")||n?.includes(t)},s=`${n} ${e} ${o}`,l=`\n\t\t${"0px"!==n&&n?["top","right","bottom","left"].map((t=>a(t)?`border-${t}: ${s};`:"")).join(""):""}\n\t\t${i?`border-radius: ${i};`:""}\n\t`;return l},a=(t,n="box")=>{const{hOffset:e="0px",vOffset:o="0px",blur:r="0px",spreed:i="0px",color:a="#7090b0",isInset:s=!1}=t||{},l=`${e} ${o} ${r}`;return("text"===n?`${l} ${a}`:`${l} ${i} ${a} ${s?"inset":""}`)||"none"},s=t=>{const{side:n=2,vertical:e="0px",horizontal:o="0px",top:r="0px",right:i="0px",bottom:a="0px",left:s="0px"}=t||{};return 2===n?`${e} ${o}`:`${r} ${i} ${a} ${s}`},l=(t,n,e=!0)=>{const{fontFamily:o="Default",fontCategory:r="sans-serif",fontVariant:i=400,fontWeight:a=400,isUploadFont:s=!0,fontSize:l={desktop:15,tablet:15,mobile:15},fontStyle:$="normal",textTransform:d="none",textDecoration:c="auto",lineHeight:p="135%",letterSpace:g="0px"}=n||{},u=(t,n)=>t?`${n}: ${t};`:"",b=!e||!o||"Default"===o,m=l?.desktop||l,x=l?.tablet||m,f=l?.mobile||x,h=`\n\t\t${b?"":`font-family: '${o}', ${r};`}\n\t\t${u(a,"font-weight")}\n\t\tfont-size: ${m}px;\n\t\t${u($,"font-style")}\n\t\t${u(d,"text-transform")}\n\t\t${u(c,"text-decoration")}\n\t\t${u(p,"line-height")}\n\t\t${u(g,"letter-spacing")}\n\t`,y=i&&400!==i?"400i"===i?":ital@1":i?.includes("00i")?`: ital, wght@1, ${i?.replace("00i","00")} `:`: wght@${i} `:"",k=b?"":`https://fonts.googleapis.com/css2?family=${o?.split(" ").join("+")}${y.replace(/ /g,"")}&display=swap`;return{googleFontLink:!s||b?"":`@import url(${k});`,styles:`${t}{\n\t\t\t${h}\n\t\t}\n\t\t@media only screen and (min-width: 641px) and (max-width: 1024px) {\n\t\t\t${t}{\n\t\t\t\tfont-size: ${x}px;\n\t\t\t}\n\t\t}\n\t\t@media only screen and (max-width: 640px) {\n\t\t\t${t}{\n\t\t\t\tfont-size: ${f}px;\n\t\t\t}\n\t\t}`.replace(/\s+/g," ").trim()}},$="bBlocksServices",d=({attributes:t,id:n,isBackend:o=!1})=>{const{columnGap:d,rowGap:c,background:p,textAlign:g,itemHeight:u,itemPadding:b,itemBorder:m,itemShadow:x,iconPadding:f,iconMargin:h,titleTypo:y,titleMargin:k,descTypo:w}=t,v=`#${n} .${$}`,S=`${v} .bBlocksService`,L=o?`${v} .block-editor-inner-blocks .block-editor-block-list__layout{\n\t\tgrid-gap: ${c} ${d};\n\t}`:`${v}{\n\t\tgrid-gap: ${c} ${d};\n\t}`;return(0,e.createElement)("style",{dangerouslySetInnerHTML:{__html:`\n\t\t${l("",y)?.googleFontLink}\n\t\t${l("",w)?.googleFontLink}\n\t\t${l(`${S} .title`,y)?.styles}\n\t\t${l(`${S} .description`,w)?.styles}\n\n\t\t${v}{\n\t\t\t${r(p)}\n\t\t}\n\t\t${L}\n\n\t\t${S}{\n\t\t\ttext-align: ${g};\n\t\t\tmin-height: ${u};\n\t\t\tpadding: ${s(b)};\n\t\t\t${i(m)||"border-radius: 15px;"}\n\t\t\tbox-shadow: ${a(x)};\n\t\t}\n\t\t${S} .bgLayer{\n\t\t\tborder-radius: ${m?.radius||"15px"}\n\t\t}\n\t\t${S} .icon{\n\t\t\tpadding: ${s(f)};\n\t\t\tmargin: ${s(h)};\n\t\t}\n\t\t${S} .title{\n\t\t\tmargin: ${s(k)};\n\t\t}\n\t\t`.replace(/\s+/g," ")}})};document.addEventListener("DOMContentLoaded",(()=>{document.querySelectorAll(".wp-block-b-blocks-services").forEach((t=>{const n=JSON.parse(t.dataset.attributes),r=document.querySelector(`#${t.id} .${$}Style`);(0,o.H)(r).render((0,e.createElement)(d,{attributes:n,id:t.id})),t?.removeAttribute("data-attributes")}))}))})();