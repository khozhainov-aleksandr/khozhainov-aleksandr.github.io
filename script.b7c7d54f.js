parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"p7kT":[function(require,module,exports) {
"use strict";var e=document.querySelector(".progress");function t(t){var o=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;e.style.width=o+"%"}window.addEventListener("scroll",t);var o=document.querySelector(".hamburger"),n=document.querySelector(".menu"),r=document.querySelector(".menu__close");o.addEventListener("click",function(){n.classList.add("active")}),r.addEventListener("click",function(){n.classList.remove("active")});var c="2019-07-15";function l(e){var t=Date.parse(e)-Date.parse(new Date);return{total:t,years:Math.floor(t/321408e5+1),months:Math.floor(t/26784e5%12),days:Math.floor(t/864e5%30),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}}function s(e){return e>=0&&e<10?"0".concat(e):e}function a(e,t){var o=document.querySelector(e),n=o.querySelector("#years"),r=o.querySelector("#months"),c=o.querySelector("#days"),a=o.querySelector("#hours"),d=o.querySelector("#minutes"),i=o.querySelector("#seconds");setInterval(u,1e3);function u(){var e=l(t);n.innerHTML=s(-e.years),r.innerHTML=s(-e.months),c.innerHTML=s(-e.days),a.innerHTML=s(-e.hours),d.innerHTML=s(-e.minutes),i.innerHTML=s(-e.seconds)}u()}a(".timer",c);var d=document.querySelector("[data-modal_certificate_open]"),i=document.querySelector("[data-modal_certificate_close]"),u=document.querySelector("[data-modal_certificate]"),m=document.querySelector(".modal__wrapper");function y(){u.classList.add("modal_show"),u.classList.remove("modal_hide"),document.body.style.overflow="hidden",clearInterval(f)}function v(){u.classList.remove("modal_show"),u.classList.add("modal_hide"),document.body.style.overflow=""}d.addEventListener("click",y),i.addEventListener("click",v),m.addEventListener("click",function(e){e.target===m&&v()}),document.addEventListener("keydown",function(e){"Escape"===e.code&&u.classList.contains("modal_show")&&v()});var f=setTimeout(y,6e4);function h(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(y(),window.removeEventListener("scroll",h))}window.addEventListener("scroll",h);var L=document.querySelectorAll(".skills__ratings-counter"),w=document.querySelectorAll(".skills__ratings-line span");L.forEach(function(e,t){w[t].style.width=e.innerHTML});
},{}]},{},["p7kT"], null)
//# sourceMappingURL=script.b7c7d54f.js.map