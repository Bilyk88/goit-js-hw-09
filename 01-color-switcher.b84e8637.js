const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");e.addEventListener("click",(function(){o(),r=setInterval(o,1e3),e.setAttribute("disabled","disabled"),d.removeAttribute("disabled")})),d.addEventListener("click",(function(){clearInterval(r),e.removeAttribute("disabled"),d.setAttribute("disabled","disabled")}));let r=null;function o(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.b84e8637.js.map
