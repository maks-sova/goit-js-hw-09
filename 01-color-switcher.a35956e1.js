!function(){const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let r=0;t.addEventListener("click",(()=>{r=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.setAttribute("disabled",!0)}),1e3)})),e.addEventListener("click",(()=>{clearInterval(r),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.a35956e1.js.map
