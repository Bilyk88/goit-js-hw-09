!function(){var e=document.querySelector("button"),n=document.querySelector('input[name="delay"]'),o=document.querySelector('input[name="step"]'),t=document.querySelector('input[name="amount"]');function c(e,n){return new Promise((function(o,t){var c=Math.random()>.3;setTimeout((function(){c?o("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):t("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}e.addEventListener("click",c);var u=n.value,r=Number(o.value),a=Number(t.value);console.log(u);for(var i=0;i<a;i+=1){c(i+1,u+(i-1)*r).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}();
//# sourceMappingURL=03-promises.1b4a9721.js.map
