const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");let o=0;t.addEventListener("click",(()=>{o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.setAttribute("disabled",!0)}),1e3)})),e.addEventListener("click",(()=>{clearInterval(o),t.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.ed653076.js.map