!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"k",function(){return c}),n.d(e,"h",function(){return s}),n.d(e,"m",function(){return u}),n.d(e,"c",function(){return l}),n.d(e,"i",function(){return d}),n.d(e,"l",function(){return f}),n.d(e,"j",function(){return b}),n.d(e,"f",function(){return L}),n.d(e,"g",function(){return x}),n.d(e,"e",function(){return S}),n.d(e,"d",function(){return E}),n.d(e,"n",function(){return k});var o,i=function(t){return"string"==typeof t?document.querySelector(t):t},r=function(t,e){if(!t)return[];if("string"==typeof t){var n=(e||document).querySelectorAll(t);return[].concat.apply([],n)}return[t]},c=function(t,e){function n(o){var i=function(o){0===t.length?e&&e():n.apply(Array.prototype.slice.call(arguments,1))};t.shift().apply(null,Array.prototype.slice.call(arguments,0).concat([i]))}n()},a=function(){},s=function(t,e){return function(n){e&&e(null,!0),setTimeout(n,t)}},u=function(t,e){r(t).forEach(function(t){t.classList.add("no-transition"),e(t),t.offsetLeft,t.classList.remove("no-transition"),t.offsetLeft})},l=function(t,e,n){r(t).forEach(function(t){n&&t.classList.add("no-transition"),b(t),t.classList.add(e),n&&(t.offsetLeft,t.classList.remove("no-transition"),t.offsetLeft)})},d=function(t,e){r(t).forEach(function(t){t.classList.remove(e)})},f=function(t,e){return function(){d(t,e)}};o=window.requestAnimationFrame?window.requestAnimationFrame:function(t){setTimeout(t,16)};var m=!1;try{var p=Object.defineProperty({},"passive",{get:function(){m=!0}});window.addEventListener("test",null,p)}catch(t){}var h=!!m&&{passive:!0},w=0,_=0,b=a,v={},g=0,y=function(t){return t.__seal_id||(t.__seal_id=g++),t.__seal_id},j=function(t){return{top:t.top,left:t.left,bottom:t.bottom,right:t.right,width:t.width,height:t.height}},O=function(t){var e=y(t);return v[e]={item:t,position:j(t.getBoundingClientRect())},v[e].position.top+=w,v[e]},L=function(t){var e=(y(t),O(t));return{top:e.position.top,left:e.position.left,bottom:e.position.bottom,height:e.position.height}},x=function(){return window.scrollY},q=[],S=function(t){function e(){w=x(),_=window.innerHeight,t(),i=!1}function n(){i||(i=!0,o(e))}var i=!1;q.push(n),window.addEventListener("scroll",n,h)},E=function(t){return window.addEventListener("scroll",t,h),function(){return window.removeEventListener("scroll",t,h)}},k=function(t){w=x(),b=O,t(),b=a}},,,function(t,e,n){t.exports=n(4)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5);n.n(o),n(6)},function(t,e){},function(t,e,n){"use strict";n(7),n(9),n(10),n(11),n(12)},function(t,e,n){"use strict";var o=n(0),i=n(8),r=function(){var t=0,e=0,n=0,r=function t(){if(!n){var e=Object(i.c)(),r=window.innerHeight,c=Object(o.g)(),a=r+c,s=e.filter(function(t){return!t.done}).map(function(t){return{position:Object(o.f)(t),item:t}}).sort(function(t,e){var n=t.position.top-e.position.top;if(Math.abs(n)<10){var o=t.order-e.order;return o||t.position.left-e.position.left}return n}).filter(function(t){return t.position.top<a-r/5}).filter(function(t){return t.position.bottom>0});if(s.length){var u=s[0].item;Object(i.f)(u),u.done=!0,n=setTimeout(function(){n=0,t()},u.dataset.noAnimationDelay?0:300)}}};return function(){var n=Object(o.g)(),i=n-t;e=i,t=n,r()}},c=function(){var t=r();Object(o.e)(t),setTimeout(function(){t(0)},300)},a=function(){var t=document.querySelector(".airnow-promo__list");Object(o.d)(function(){var e=t.getBoundingClientRect(),n=e.height,o=1.8*n,r=Math.min(o,window.scrollY),c=1-r/(4*o),a=1-r/(2.5*o);t.style.transform="translateY(".concat(r,"px) scaleY(").concat(c,")"),t.style.opacity=a,r>=o&&Object(i.a)()})},s=function(){var t=document.querySelector(".airnow-promo__tip"),e=t.getBoundingClientRect().top+window.scrollY;Object(o.m)(t,function(){t.style.transform="translateY(-1000px)",t.style.opacity=0}),Object(o.d)(function(){var n=t.getBoundingClientRect(),o=n.height,r=1.8*o,c=Math.min(0,window.scrollY+window.innerHeight/2-e);window.scrollY;t.style.transform="translateY(".concat(c,"px)"),t.style.opacity=1+c/(window.innerHeight/2),c>=r&&Object(i.a)()})},u=window.matchMedia("(max-width: 639px)").matches,l=u?.7:1,d=u?.5:1,f=function(){var t=function(t,e){return t+Math.random()*(e-t)},e=document.querySelector(".airnow-promo__space-content"),n=document.querySelector(".airnow-promo__bottom"),i=function(i,r){var c=document.createElement("img");c.className="dollar",c.src="../images/dollar".concat(Math.round(t(1,3)),".svg"),e.appendChild(c);var a=function(){var i=e.getBoundingClientRect(),r=n.getBoundingClientRect(),a=.2*r.width,s=[t(-a,r.width+a),-100],u=[r.width/2,r.top-i.top+r.width/1.5+32],d=t(0,.2),f=[u[0]-s[0],u[1]-s[1]],m=[s[0]+f[0]*d,s[1]+f[1]*d],p=[u[0]-.35*f[0],u[1]-.35*f[1]],h=t(-190,190),w=t(-190,190);Object(o.m)(c,function(){c.style.transform="translate(".concat(m[0],"px, ").concat(m[1],"px) rotate(").concat(h,"deg) scale(").concat(l,")"),c.classList.remove("dollar--visible")}),c.style.transform="translate(".concat(p[0],"px, ").concat(p[1],"px) rotate(").concat(w,"deg) scale(").concat(.8*l,")"),c.classList.add("dollar--visible")};setTimeout(function(){a(),setInterval(function(){c.classList.remove("dollar--visible"),setTimeout(a,200)},6e3)},600*r)};Array(10).fill(1).map(i)},m=function(){var t=function(t,e){return t+Math.random()*(e-t)},e=document.querySelector(".airnow-promo__space-content"),n=document.querySelector(".airnow-promo__bottom"),i=function(){var i=document.createElement("img");i.className="dollar dollar--bottom",i.src="../images/dollar".concat(Math.round(t(1,3)),".svg"),e.appendChild(i);var r=function(){var r=e.getBoundingClientRect(),c=n.getBoundingClientRect(),a=[c.width/2,c.top-r.top],s=c.width/3.5,u=[t(-s,s)+c.width/2,c.bottom-r.top],l=.3+t(0,.2),f=.15+t(0,.12),m=[u[0]-a[0],u[1]-a[1]],p=[a[0]+m[0]*l,a[1]+m[1]*l],h=[u[0]-m[0]*f,u[1]-m[1]*f],w=t(-390,190),_=t(-190,390);Object(o.m)(i,function(){i.style.transform="translate(".concat(p[0],"px, ").concat(p[1],"px) rotate(").concat(w,"deg) scale(").concat(.8*d,")"),i.classList.remove("dollar--visible")}),i.style.transform="translate(".concat(h[0],"px, ").concat(h[1],"px) rotate(").concat(_,"deg) scale(").concat(d,")"),i.classList.add("dollar--visible")};setTimeout(function(){r(),setInterval(function(){i.classList.remove("dollar--visible"),setTimeout(r,200)},4700)},1e3*t(0,6))};Array(7).fill(1).map(i)},p=function t(){var e=document.querySelector(".airnow-promo__device"),n=function(t){return Object(o.m)(t,function(e){e.classList.add("".concat(t.substr(1),"--hidden"))})},i=function(t){return Object(o.b)(t)[0].classList.remove("".concat(t.substr(1),"--hidden"))};setTimeout(function(){e.classList.add("airnow-promo__device--move-out"),setTimeout(function(){Object(o.m)(e,function(){e.classList.remove("airnow-promo__device--move-out")}),n(".airnow-promo__case-wrapper"),n(".airnow-promo__phone-wrapper"),i(".airnow-promo__case-wrapper"),i(".airnow-promo__phone-wrapper"),setTimeout(t,1e3)},1e3)},1600)};!function(){document.addEventListener("keydown",function(t){console.log(t.keyCode),9===t.keyCode&&document.body.classList.add("accessible-tabs")},!0),Object(i.b)(".airnow-promo__case-wrapper","common-animation",function(){setTimeout(p,1800)}),Object(o.i)(".airnow-page","airnow-page--hidden"),a(),s();var t=Object(o.g)()<500?1:0;f(),m(),Object(i.d)(),Object(i.e)(),Object(o.k)([Object(o.h)(500*t),Object(o.h)(0,Object(o.l)(".airnow-promo__slogan","airnow-promo__slogan--hidden")),Object(o.h)(100*t),Object(o.h)(0,Object(o.l)(".airnow-promo__start","airnow-promo__start--hidden")),Object(o.h)(100*t),Object(o.h)(0,Object(o.l)(".airnow-promo__item","airnow-promo__item--hidden")),Object(o.h)(300*t),Object(o.h)(0,Object(o.l)(".airnow-header","airnow-header--hidden")),Object(o.h)(500*t,c)])}()},function(t,e,n){"use strict";function o(t){return c(t)||r(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function c(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}n.d(e,"b",function(){return w}),n.d(e,"f",function(){return y}),n.d(e,"a",function(){return j}),n.d(e,"c",function(){return O}),n.d(e,"d",function(){return L}),n.d(e,"e",function(){return x});var a,s=n(0),u=function(t,e){return{className:t,mod:"--"+e}},l=function(t){return u(t,"hidden")},d=[l("airnow-header"),l("airnow-promo__slogan"),l("airnow-promo__start"),l("airnow-promo__item")],f=[l("airnow-promo__phone-wrapper"),l("airnow-promo__case-wrapper")],m=[],p={},h=function(t,e){((p[t]||{})[e]||[]).forEach(function(t){return t()})},w=function(t,e,n){p[t]||(p[t]={}),p[t][e]||(p[t][e]=[]),p[t][e].push(n)},_=function(){return m.map(function(t){return"."+t.className}).join(",")},b=function(){return a=Object(s.b)(_())},v=function(){[].concat(o(f),m).forEach(function(t){Object(s.m)("."+t.className,function(e){return Object(s.c)(e,t.className+t.mod,!0)})})},g=function(){d.forEach(function(t){Object(s.m)("."+t.className,function(e){return Object(s.c)(e,t.className+t.mod,!0)})})},y=function(t){m.forEach(function(e){var n=e.className+e.mod;t.classList.contains(n)&&(t.classList.remove(n),h("."+e.className,"common-animation"))})},j=function(){m.push.apply(m,o(f)),f=[],b()},O=function(){return a||b()},L=function(){Object(s.n)(function(){v(),O().forEach(s.j)})},x=function(){Object(s.n)(function(){g()})}},function(t,e,n){"use strict";var o=n(0),i=function(t){var e;return Object(o.m)(t,function(){var n=Object(o.a)(t),i=n.style.height,r=n.style.maxHeight;n.style.height="auto",n.style.maxHeight="100%",e=n.offsetHeight,n.style.height=i,n.style.maxHeight=r,n.offsetHeight}),e};!function(){var t,e=Object(o.b)(".airnow-help__item");e.forEach(function(e){var n=e.querySelector(".airnow-help__item-toggle"),o=e.querySelector(".airnow-help__item-answer");e.addEventListener("click",function(){var r=n.classList.contains("airnow-help__item-toggle--opened");t&&$(t).click(),t=e,r?(e.classList.remove("airnow-help__item--opened"),n.classList.remove("airnow-help__item-toggle--opened"),o.style.maxHeight="",t=null):(e.classList.add("airnow-help__item--opened"),n.classList.add("airnow-help__item-toggle--opened"),o.style.maxHeight=i(o)+"px")})})}()},function(t,e,n){"use strict";var o=n(0),i=Object(o.b)(".airnow-switch__item"),r=function(){var t=Object(o.b)(".airnow-switch__report-wrapper"),e=document.querySelector(".airnow-switch__board-wrapper");i.forEach(function(e){var n=e.querySelector(".airnow-switch__checkbox"),o=t.find(function(t){return t.getAttribute("data")===n.getAttribute("id")}),i=o.querySelector(".airnow-switch__report"),r=o.querySelector(".airnow-switch__shadow");n.checked?(i.classList.add("airnow-switch__report--opened"),r.classList.add("airnow-switch__shadow--opened")):(i.classList.remove("airnow-switch__report--opened"),r.classList.remove("airnow-switch__shadow--opened"))});var n=Object(o.b)(".airnow-switch__checkbox"),r=n.filter(function(t){return!0===t.checked}),c=e.querySelector(".airnow-switch__amount--1"),a=e.querySelector(".airnow-switch__amount--2"),s=e.querySelector(".airnow-switch__amount--3");c.classList[1===r.length?"add":"remove"]("airnow-switch__amount--visible"),a.classList[2===r.length?"add":"remove"]("airnow-switch__amount--visible"),s.classList[3===r.length?"add":"remove"]("airnow-switch__amount--visible")};i.forEach(function(t){t.querySelector(".airnow-switch__checkbox").addEventListener("change",r)}),r()},function(t,e,n){"use strict";var o=n(0),i=function(t){var e;return Object(o.m)(t,function(){var n=Object(o.a)(t),i=n.style.height,r=n.style.maxHeight;n.style.height="auto",n.style.maxHeight="100%",e=n.offsetHeight,n.style.height=i,n.style.maxHeight=r,n.offsetHeight}),e};window.matchMedia("(min-width: 640px)").matches&&function(){var t,e=Object(o.b)(".airnow-stories__item");e.forEach(function(e){var n=e.querySelector(".airnow-stories__item-feedback-wrapper"),o=e.querySelector(".airnow-stories__item-image");e.addEventListener("click",function(){t&&$(t).click(),t=e,e.classList.contains("airnow-stories__item--opened")?(e.classList.remove("airnow-stories__item--opened"),o.classList.remove("airnow-stories__item-image--opened"),n.classList.remove("airnow-stories__item-feedback-wrapper--opened"),n.style.maxHeight="",t=null):(e.classList.add("airnow-stories__item--opened"),o.classList.add("airnow-stories__item-image--opened"),n.classList.add("airnow-stories__item-feedback-wrapper--opened"),n.style.maxHeight=i(e)+"px")})}),window.matchMedia("(min-width: 640px)").matches&&$(e[0]).click(),window.matchMedia("(min-width: 1024px)").matches&&$(e[1]).click()}()},function(t,e,n){"use strict";function o(t){var e=Object(i.b)(".airnow-form__input",t),n={};return e.forEach(function(t){n[t.getAttribute("name")]=t.value}),n}var i=n(0),r=document.querySelector(".airnow-form"),c=r.querySelector(".airnow-form__step-1"),a=r.querySelector(".airnow-form__step-2"),s=function(){Object(i.k)([Object(i.h)(1,c.classList.add("airnow-form__step-1--hidden")),Object(i.h)(100,a.classList.remove("airnow-form__step-2--hidden"))])};document.querySelector(".airnow-form__button").addEventListener("click",function(){Object(i.k)([Object(i.h)(1,c.classList.remove("airnow-form__step-1--hidden")),Object(i.h)(100,a.classList.add("airnow-form__step-2--hidden"))])}),document.querySelector(".airnow-form__form").addEventListener("submit",function(t){return o(t.target),s(),t.preventDefault(),!1})}]);