(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var i=o.call(e,"string");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}function n(t,n){for(var o=0;o<n.length;o++){var i=n[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,e(i.key),i)}}var o,i,r;new(function(){function t(n,o){var i,r,l;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i=this,l=void 0,(r=e(r="softScroll"))in i?Object.defineProperty(i,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[r]=l,this.linksInternos=document.querySelectorAll(n),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.softScrollSection=this.softScrollSection.bind(this)}var o,i;return o=t,(i=[{key:"softScrollSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}},{key:"addLinksEvents",value:function(){var t=this;this.linksInternos.forEach((function(e){e.addEventListener("click",t.softScrollSection)}))}},{key:"init",value:function(){return this.linksInternos.length&&this.addLinksEvents(),this}}])&&n(o.prototype,i),Object.defineProperty(o,"prototype",{writable:!1}),t}())('.js-menu a[href^="#"]').init(),o=document.querySelectorAll('[data-anime="scroll"]'),i=.6*window.innerHeight,r=function(){o.forEach((function(t){t.getBoundingClientRect().top-i<0?t.classList.add("active"):t.classList.contains("active")&&t.classList.remove("active")}))},o.length&&(r(),window.addEventListener("scroll",r))})();