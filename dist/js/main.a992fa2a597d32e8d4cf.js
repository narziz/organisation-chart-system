!function(){"use strict";var e={567:function(e,t,c){e.exports=c.p+"icons/add.png"},728:function(e,t,c){e.exports=c.p+"icons/cancel.png"},539:function(e,t,c){e.exports=c.p+"icons/confirm.png"},120:function(e,t,c){e.exports=c.p+"icons/remove.png"}},t={};function c(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,c),o.exports}c.p="",function(){var e=c(567),t=c(120),n=c(728),a=c(539);function o(e){let t=e.target.closest(".category"),c=t.nextElementSibling;if(c)r(c);else{let e=document.createElement("ul");e.classList.add("categories"),t.closest(".categories__item")?t.closest(".categories__item").append(e):t.closest(".container").append(e),r(e)}}function r(e){let t=l({el:"li",class:"categories__item",parent:e}),c=l({el:"div",class:"category",parent:t}),o=(l({el:"input",class:"category__input",placeholder:"Category Name...",parent:c}),l({el:"div",class:"category__btn-group",parent:c})),r=l({el:"button",btnType:"cancel",class:["category__btn","category__button--cancel"],parent:o}),s=l({el:"button",btnType:"confirm",class:["category__btn","category__button--confirm"],parent:o});l({el:"img",class:"category__img",src:n,parent:r}),l({el:"img",class:"category__img",src:a,parent:s})}function s(e){let t=e.target.closest(".categories__item"),c=t.parentElement;c.children.length>1?t.remove():c.remove()}function l(c){let n=document.createElement(c.el);return Array.isArray(c.class)?c.class.forEach((e=>n.classList.add(e))):n.classList.add(c.class),c.text&&(n.textContent=c.text),c.src&&(n.src=c.src),c.placeholder&&(n.placeholder=c.placeholder),"add"===c.btnType?n.onclick=e=>o(e):"remove"===c.btnType?n.onclick=e=>function(e){let t=document.body.lastElementChild,c=t.querySelector(".modal__button--cancel"),n=t.querySelector(".modal__button--delete");t.classList.add("modal--active"),c.addEventListener("click",(function(){i()})),n.addEventListener("click",(function(){s(e),i()}))}(e):"confirm"===c.btnType?n.onclick=()=>function(c){let n=c.closest(".category"),a=n.firstElementChild,o=n.lastElementChild,r=a.value;a.remove(),o.remove();let s=function(e){let t=[],c=0,n=e.closest(".categories");for(;n;){let e=n.previousElementSibling;t.push("category "+ ++c),n=e.closest(".categories")}return t.length}(n);1===s?n.classList.add("category--main"):2===s?n.classList.add("category--secondary"):n.classList.add("category--default"),l({el:"span",class:"category__title",text:r,parent:n});let i=l({el:"div",class:"category__btn-group",parent:n}),d=l({el:"button",btnType:"add",class:["category__btn","category__button--add"],parent:i}),p=l({el:"button",btnType:"remove",class:["category__btn","category__button--remove"],parent:i});l({el:"img",class:"category__img",src:e,parent:d}),l({el:"img",class:"category__img",src:t,parent:p})}(n):"cancel"===c.btnType&&(n.onclick=e=>s(e)),c.parent.append(n),n}function i(e){document.body.lastElementChild.classList.remove("modal--active")}document.querySelector("button.category__button--add").addEventListener("click",(function(e){o(e)}))}()}();