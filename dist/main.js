(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([t.id,'*:not(dialog) {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  box-sizing: border-box;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n:root {\n  --header-background-color: #eff6ff;\n  --sidebar-background-color: #60a5fa;\n  --sidebar-font-color: #ffffff;\n  --container-inset-shadow: inset 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  --add-task-input-background: #f1f5f9;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 12fr;\n}\n\n.container {\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  box-shadow: var(--container-inset-shadow);\n}\n\nbutton {\n  border-radius: 4px;\n  padding: 8px 16px;\n}\n\nh1 {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n  padding: 16px;\n  color: var(--sidebar-background-color);\n  background-color: var(--header-background-color);\n}\n\n.sidebar {\n  box-shadow: var(--container-inset-shadow);\n  background-color: var(--sidebar-background-color);\n  padding: 24px;\n  color: var(--sidebar-font-color);\n  display: flex;\n  flex-direction: column;\n  gap: 56px;\n}\n\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n}\n\n.user-name {\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n\n.cat-pfp {\n  border-radius: 50%;\n  width: 3.4rem;\n  background-color: #facc15;\n  padding: 4px;\n}\n\n.sidebar .add-task-button {\n  background-color: var(--sidebar-font-color);\n  color: var(--sidebar-background-color);\n  font-weight: 600;\n}\n\n.sidebar .add-task-button:hover {\n  letter-spacing: 1px;\n}\n\n.sidebar button,\ninput {\n  background-color: var(--sidebar-background-color);\n  color: var(--sidebar-font-color);\n  border-radius: 4px;\n  padding: 8px 16px;\n  font-size: 1.1rem;\n  width: 100%;\n  font-weight: 500;\n}\n\ninput {\n  outline: none;\n}\n\n::placeholder {\n  color: var(--sidebar-font-color);\n  opacity: 0.5;\n}\n\n.sidebar .add-task-button {\n  border: solid var(--sidebar-font-color) 2px;\n  font-size: 1.2rem;\n  font-weight: 600;\n  transition: 0.2s;\n}\n\n.sidebar button:hover {\n  background-color: var(--sidebar-font-color);\n  color: var(--sidebar-background-color);\n}\n\nli {\n  list-style: none;\n  font-size: 1.1rem;\n}\n\nul {\n  display: flex;\n  flex-direction: column;\n}\n\n.projects,\n.time-based-tasks {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.projects button,\n.time-based-tasks button {\n  display: flex;\n  justify-content: left;\n}\n\nhr {\n  border-radius: 4px;\n  border-bottom: solid rgb(255, 255, 255, 0.3);\n}\n\n.title-and-add {\n  display: flex;\n  align-items: center;\n  justify-content: right;\n}\n\n.title-and-add > button {\n  width: auto;\n  transition: 0.2s;\n}\n\n.add-button-svg {\n  height: 1.5em;\n  fill: var(--sidebar-font-color);\n}\n\n.title-and-add > button:hover > svg {\n  fill: var(--sidebar-background-color);\n}\n\n.title-and-add > h2 {\n  flex: 1 1 auto;\n}\n\n.invisible-new-project-prompt {\n  position: absolute;\n  visibility: hidden;\n}\n\n.new-project-prompt {\n  visibility: visible;\n  position: static;\n}\n\n.project-name-submit-svg {\n  height: 1.1rem;\n  fill: var(--sidebar-font-color);\n}\n\n.new-project-prompt button:hover > svg {\n  fill: var(--sidebar-background-color);\n}\n\n.new-project-prompt > form {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.new-project-prompt button[type="submit"] {\n  width: auto;\n  transition: 0.2s;\n}\n\ndialog {\n  border: solid 2px var(--sidebar-background-color);\n  border-radius: 4px;\n  font-size: 1.2rem;\n}\n\n.task-details-form * {\n  display: block;\n}\n\n.task-details-form label,\n.task-details-form legend {\n  font-weight: 600;\n  color: var(--sidebar-background-color);\n}\n\n.task-details-form input:not(input[type="radio"]),\n.task-details-form textarea {\n  width: 50ch;\n  color: black;\n  background-color: var(--add-task-input-background);\n}\n\n.task-details-form textarea {\n  border-radius: 4px;\n  padding: 8px 16px;\n  font-size: 1rem;\n  width: 100%;\n  height: 10ch;\n  resize: none;\n}\n\n.task-details-form > form {\n  padding: 8px;\n  display: flex;\n  flex-direction: column;\n  gap: 48px;\n}\n\n.task-details-form fieldset {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.radio-button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.priority-buttons > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n*:focus:not(dialog) {\n  outline: solid var(--sidebar-background-color) 2px;\n}\n\ninput[type="radio"] {\n  outline: none;\n  width: auto;\n  accent-color: var(--sidebar-background-color);\n}\n\n.radio-button label {\n  font-weight: 400;\n}\n\nselect {\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n.task-details-form button[type="submit"] {\n  transition: 0.2s;\n}\n\n.task-details-form button[type="submit"]:hover {\n  letter-spacing: 1px;\n  color: var(--sidebar-font-color);\n  background-color: var(--sidebar-background-color);\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n  padding: 48px;\n}\n\n.project-title-and-add {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.project-title-and-add h2 {\n  font-size: 2.1rem;\n  font-weight: 600;\n}\n\n.project-title-and-add button {\n  transition: 0.2s;\n  background-color: var(--sidebar-font-color);\n}\n\n.project-title-and-add button:hover {\n  background-color: black;\n}\n\n.project-title-and-add button:hover svg {\n  fill: var(--sidebar-font-color);\n}\n\n.project-title-and-add svg {\n  height: 2rem;\n}\n\n.task-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.task {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n  grid-template-columns: 4fr 1fr;\n  align-items: center;\n  background-color: var(--add-task-input-background);\n  border-radius: 4px;\n  padding: 16px 32px;\n}\n\n.task h3 {\n  font-size: 1.3rem;\n  font-weight: 500;\n}\n\n.task-controls {\n  display: flex;\n  gap: 2px;\n  grid-row: span 2;\n  justify-content: space-between;\n}\n\n.task-controls button {\n  background-color: var(--add-task-input-background);\n}\n\n.task-controls svg {\n  height: 1.3rem;\n}\n\n.task button {\n  transition: 0.1s;\n}\n\n.check-button svg {\n  fill: #22c55e;\n}\n\n.check-button:hover {\n  background-color: #22c55e;\n}\n\n.check-button:hover svg {\n  fill: var(--add-task-input-background);\n}\n\n.edit-button svg {\n  fill: #f59e0b;\n}\n\n.edit-button:hover {\n  background-color: #f59e0b;\n}\n\n.edit-button:hover svg {\n  fill: var(--add-task-input-background);\n}\n\n.delete-button svg {\n  fill: #ef4444;\n}\n\n.delete-button:hover {\n  background-color: #ef4444;\n}\n\n.delete-button:hover svg {\n  fill: var(--add-task-input-background);\n}\n\n.task.completed {\n  opacity: 0.5;\n}\n\n.task.completed h3 {\n  text-decoration-line: line-through;\n}\n\n.task.completed .edit-button {\n  outline: none;\n}\n\n.task.completed .edit-button:hover {\n  background-color: var(--add-task-input-background);\n}\n\n.task.completed .edit-button:hover svg {\n  fill: #f59e0b;\n}\n',""]);const s=i},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=a[u]||0,l="".concat(u," ").concat(d);a[u]=d+1;var f=n(l),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(m);else{var h=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var c=r(t,o),u=0;u<a.length;u++){var d=n(a[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}let r;function o(){return localStorage.getItem("projects")?r=JSON.parse(localStorage.getItem("projects")):(r={Personal:[]},localStorage.setItem("projects",JSON.stringify(r))),r}function a(t,e){switch(t.priority){case"Low":return 1;case"High":return-1;case"Medium":if("High"===e.priority)return 1;if("Low"===e.priority)return-1}}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.nc=void 0;const i=n.p+"1f4c27501c440346116f.png";function s(t,e){const n=o();n[t].splice(e,1),localStorage.setItem("projects",JSON.stringify(n))}function c(){const t=o(),e=document.querySelector(".project-list");!function(t){for(;t.childNodes.length>1;)t.removeChild(t.lastChild)}(e);for(let n of Object.keys(t).reverse()){const t=e.appendChild(document.createElement("li")).appendChild(document.createElement("button"));t.value=n,t.textContent=n,t.classList.add("project-button")}et()}function u(t){document.querySelector(`.project-button[value="${t.value}"]`).click()}function d(){const t=o(),e=document.querySelector("#project-name-list");e.innerHTML="",Object.keys(t).reverse().forEach((t=>{const n=e.appendChild(document.createElement("option"));n.value=t,n.textContent=t}))}const l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function f(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const m={date:f({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:f({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:f({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function p(t){return(e,n)=>{let r;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,o=n?.width?String(n.width):e;r=t.formattingValues[o]||t.formattingValues[e]}else{const e=t.defaultWidth,o=n?.width?String(n.width):t.defaultWidth;r=t.values[o]||t.values[e]}return r[t.argumentCallback?t.argumentCallback(e):e]}}const g={ordinalNumber:(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:p({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:p({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:p({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:p({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:p({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function b(t){return(e,n={})=>{const r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],a=e.match(o);if(!a)return null;const i=a[0],s=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?function(t,e){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t,e){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let u;return u=t.valueCallback?t.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u,{value:u,rest:e.slice(i.length)}}}const v={ordinalNumber:(y={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(y.matchPattern);if(!n)return null;const r=n[0],o=t.match(y.parsePattern);if(!o)return null;let a=y.valueCallback?y.valueCallback(o[0]):o[0];return a=e.valueCallback?e.valueCallback(a):a,{value:a,rest:t.slice(r.length)}}),era:b({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:b({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:b({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:b({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:b({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};var y;const w={code:"en-US",formatDistance:(t,e,n)=>{let r;const o=l[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:m,formatRelative:(t,e,n,r)=>h[t],localize:g,match:v,options:{weekStartsOn:0,firstWeekContainsDate:1}};let k={};function x(){return k}Math.pow(10,8);const S=6048e5,M=864e5;function j(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function q(t){const e=j(t);return e.setHours(0,0,0,0),e}function P(t){const e=j(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function C(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function T(t){const e=j(t);return function(t,e){const n=q(t),r=q(e),o=+n-P(n),a=+r-P(r);return Math.round((o-a)/M)}(e,function(t){const e=j(t),n=C(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}function D(t,e){const n=x(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,o=j(t),a=o.getDay(),i=(a<r?7:0)+a-r;return o.setDate(o.getDate()-i),o.setHours(0,0,0,0),o}function L(t){return D(t,{weekStartsOn:1})}function E(t){const e=j(t),n=e.getFullYear(),r=C(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const o=L(r),a=C(t,0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);const i=L(a);return e.getTime()>=o.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function W(t){const e=j(t),n=+L(e)-+function(t){const e=E(t),n=C(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),L(n)}(e);return Math.round(n/S)+1}function N(t,e){const n=j(t),r=n.getFullYear(),o=x(),a=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??o.firstWeekContainsDate??o.locale?.options?.firstWeekContainsDate??1,i=C(t,0);i.setFullYear(r+1,0,a),i.setHours(0,0,0,0);const s=D(i,e),c=C(t,0);c.setFullYear(r,0,a),c.setHours(0,0,0,0);const u=D(c,e);return n.getTime()>=s.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function O(t,e){const n=j(t),r=+D(n,e)-+function(t,e){const n=x(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,o=N(t,e),a=C(t,0);return a.setFullYear(o,0,r),a.setHours(0,0,0,0),D(a,e)}(n,e);return Math.round(r/S)+1}function H(t,e){return(t<0?"-":"")+Math.abs(t).toString().padStart(e,"0")}const Y={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return H("yy"===e?r%100:r,e.length)},M(t,e){const n=t.getMonth();return"M"===e?String(n+1):H(n+1,2)},d:(t,e)=>H(t.getDate(),e.length),a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>H(t.getHours()%12||12,e.length),H:(t,e)=>H(t.getHours(),e.length),m:(t,e)=>H(t.getMinutes(),e.length),s:(t,e)=>H(t.getSeconds(),e.length),S(t,e){const n=e.length,r=t.getMilliseconds();return H(Math.trunc(r*Math.pow(10,n-3)),e.length)}},A={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){const e=t.getFullYear(),r=e>0?e:1-e;return n.ordinalNumber(r,{unit:"year"})}return Y.y(t,e)},Y:function(t,e,n,r){const o=N(t,r),a=o>0?o:1-o;return"YY"===e?H(a%100,2):"Yo"===e?n.ordinalNumber(a,{unit:"year"}):H(a,e.length)},R:function(t,e){return H(E(t),e.length)},u:function(t,e){return H(t.getFullYear(),e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return H(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return H(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return Y.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return H(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const o=O(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):H(o,e.length)},I:function(t,e,n){const r=W(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):H(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):Y.d(t,e)},D:function(t,e,n){const r=T(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):H(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(a);case"ee":return H(a,2);case"eo":return n.ordinalNumber(a,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const o=t.getDay(),a=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(a);case"cc":return H(a,e.length);case"co":return n.ordinalNumber(a,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return H(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let o;switch(o=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let o;switch(o=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(o,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(o,{width:"narrow",context:"formatting"});default:return n.dayPeriod(o,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return Y.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):Y.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):H(r,e.length)},k:function(t,e,n){let r=t.getHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):H(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):Y.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):Y.s(t,e)},S:function(t,e){return Y.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return F(r);case"XXXX":case"XX":return $(r);default:return $(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return F(r);case"xxxx":case"xx":return $(r);default:return $(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+z(r,":");default:return"GMT"+$(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+z(r,":");default:return"GMT"+$(r,":")}},t:function(t,e,n){return H(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return H(t.getTime(),e.length)}};function z(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),o=Math.trunc(r/60),a=r%60;return 0===a?n+String(o):n+String(o)+e+H(a,2)}function F(t,e){return t%60==0?(t>0?"-":"+")+H(Math.abs(t)/60,2):$(t,e)}function $(t,e=""){const n=t>0?"-":"+",r=Math.abs(t);return n+H(Math.trunc(r/60),2)+e+H(r%60,2)}const B=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},I=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Q={p:I,P:(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],o=n[2];if(!o)return B(t,e);let a;switch(r){case"P":a=e.dateTime({width:"short"});break;case"PP":a=e.dateTime({width:"medium"});break;case"PPP":a=e.dateTime({width:"long"});break;default:a=e.dateTime({width:"full"})}return a.replace("{{date}}",B(r,e)).replace("{{time}}",I(o,e))}},J=/^D+$/,G=/^Y+$/,X=["D","DD","YY","YYYY"];function U(t){if(!(e=t,e instanceof Date||"object"==typeof e&&"[object Date]"===Object.prototype.toString.call(e)||"number"==typeof t))return!1;var e;const n=j(t);return!isNaN(Number(n))}const R=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Z=/^'([^]*?)'?$/,K=/''/g,_=/[a-zA-Z]/;function tt(t){const e=t.match(Z);return e?e[1].replace(K,"'"):t}function et(){u(document.querySelector('.project-button[value="Personal"]'));const t=document.querySelector(".content");document.querySelectorAll(".project-button").forEach((e=>{e.addEventListener("click",(()=>{t.innerHTML='\n      <div class="project-title-and-add">\n          <h2></h2>\n        </div>\n        <div class="task-list"></div>\n        ';const n=document.querySelector(".project-title-and-add > h2");n.textContent=e.textContent,n.value=e.textContent,nt(e.textContent)}))}))}function nt(t){(function(t){r[t].sort(a)})(t),function(t){const e=r[t];for(let t=e.length-1;t>=0;t--)if(e[t].isCompleted){const n=e.splice(t,1)[0];e.push(n)}localStorage.setItem("projects",JSON.stringify(r))}(t);const e=document.querySelector(".task-list");e.innerHTML="";const n=o()[t];let i=0;0===n.length?e.innerHTML="<div>This project has no tasks :)</div>":(n.forEach((t=>{e.innerHTML+=`\n        <div class="task" data-index="${i}">\n          <h3></h3>\n          <div class="task-controls">\n            <button class="check-button" data-index="${i}">\n                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check-bold</title><path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" /></svg>\n            </button>\n            <button class="edit-button ${t.isCompleted?"cannot-edit":""}" data-index="${i}">\n              <svg\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n                class="edit-icon"\n              >\n                <title>pencil</title>\n                <path\n                  d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"\n                />\n              </svg>\n            </button>\n            <button class="delete-button" data-index="${i}">\n              <svg\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 24 24"\n                class="delete-icon"\n              >\n                <title>delete</title>\n                <path\n                  d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"\n                />\n              </svg>\n            </button>\n          </div>\n          <div class="task-due-date"></div>\n      </div>`,document.querySelector(`.task[data-index="${i}"] h3`).textContent=t.title,document.querySelector(`.task[data-index="${i}"] .task-due-date`).textContent=function(t,e,n){const r=x(),o=n?.locale??r.locale??w,a=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??r.firstWeekContainsDate??r.locale?.options?.firstWeekContainsDate??1,i=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??r.weekStartsOn??r.locale?.options?.weekStartsOn??0,s=j(t);if(!U(s))throw new RangeError("Invalid time value");let c=e.match(V).map((t=>{const e=t[0];return"p"===e||"P"===e?(0,Q[e])(t,o.formatLong):t})).join("").match(R).map((t=>{if("''"===t)return{isToken:!1,value:"'"};const e=t[0];if("'"===e)return{isToken:!1,value:tt(t)};if(A[e])return{isToken:!0,value:t};if(e.match(_))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}}));o.localize.preprocessor&&(c=o.localize.preprocessor(s,c));const u={firstWeekContainsDate:a,weekStartsOn:i,locale:o};return c.map((r=>{if(!r.isToken)return r.value;const a=r.value;return(!n?.useAdditionalWeekYearTokens&&function(t){return G.test(t)}(a)||!n?.useAdditionalDayOfYearTokens&&function(t){return J.test(t)}(a))&&function(t,e,n){const r=function(t,e,n){const r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),X.includes(t))throw new RangeError(r)}(a,e,String(t)),(0,A[a[0]])(s,a,o.localize,u)})).join("")}(t.dueDate,"PPPP"),t.isCompleted&&document.querySelector(`.task[data-index="${i}"]`).classList.add("completed"),i++})),document.querySelectorAll(".check-button").forEach((t=>{t.addEventListener("click",(()=>{const e=t.dataset.index,n=document.querySelector(".project-title-and-add > h2").textContent;!function(t,e){const n=o(),r=n[t][e];r.isCompleted=!r.isCompleted,localStorage.setItem("projects",JSON.stringify(n))}(n,e),nt(n)}))})),function(){const t=o();document.querySelectorAll(".edit-button:not(.cannot-edit)").forEach((e=>{e.addEventListener("click",(()=>{const n=e.dataset.index,r=document.querySelector(".project-title-and-add > h2").textContent;document.querySelector(".add-task-button").click();const o=t[r][n];document.querySelector("#task-title").value=o.title,document.querySelector("#task-description").value=o.description,document.querySelector("#task-due-date").value=o.dueDate,document.querySelector(`input[name="taskPriority"][value=${o.priority}]`).checked=!0,document.querySelector(`option[value="${r}"]`).selected="selected",document.querySelector(".submit-task-details-button").addEventListener("click",(()=>{const t=document.querySelector("#project-name-list").value,e=document.querySelector(`.project-button[value="${t}"]`);s(r,n),u(e)}),{once:!0})}))}))}(),document.querySelectorAll(".delete-button").forEach((t=>{t.addEventListener("click",(()=>{const e=t.dataset.index,n=document.querySelector(".project-title-and-add > h2").textContent;s(n,e),nt(n)}))})))}var rt=n(72),ot=n.n(rt),at=n(825),it=n.n(at),st=n(659),ct=n.n(st),ut=n(56),dt=n.n(ut),lt=n(540),ft=n.n(lt),mt=n(113),ht=n.n(mt),pt=n(208),gt={};gt.styleTagTransform=ht(),gt.setAttributes=dt(),gt.insert=ct().bind(null,"head"),gt.domAPI=it(),gt.insertStyleElement=ft(),ot()(pt.A,gt),pt.A&&pt.A.locals&&pt.A.locals,o(),document.querySelector(".add-project-button").addEventListener("click",(()=>{var t;(t=document.querySelector(".invisible-new-project-prompt")).classList.remove("invisible-new-project-prompt"),t.className="new-project-prompt",document.querySelector("#project-name").focus()})),c(),function(){const t=new Image;t.src=i,t.alt="image of very round cat holding a yarn ball",t.className="cat-pfp";const e=document.querySelector(".user-info");e.insertBefore(t,e.firstChild)}(),document.querySelector(".create-new-project-button").addEventListener("click",(t=>{t.preventDefault();const e=document.querySelector("#project-name");var n,o;o=e.value,r[o]=[],localStorage.setItem("projects",JSON.stringify(r)),c(),u(e),d(),e.value="",(n=document.querySelector(".new-project-prompt")).classList.remove("new-project-prompt"),n.className="invisible-new-project-prompt"})),function(){const t=document.querySelector(".add-task-button"),e=document.querySelector(".task-details-form");t.addEventListener("click",(()=>{e.showModal()}))}(),d(),document.querySelector(".submit-task-details-button").addEventListener("click",(t=>{t.preventDefault();const e=document.querySelector("#task-title"),n=document.querySelector("#task-description"),r=document.querySelector("#task-due-date"),a=document.querySelector('input[name="taskPriority"]:checked'),i=document.querySelector("#project-name-list");!function(t,e,n,r,a){const i=o(),s={title:t,description:e,dueDate:n,priority:r,isCompleted:!1};i[a].push(s),localStorage.setItem("projects",JSON.stringify(i))}(e.value,n.value,r.value,a.value,i.value),e.value="",n.value="",r.value=new Date,a.checked=!1,document.querySelector(".task-details-form").close(),u(i)})),function(){const t=document.querySelector(".task-details-form");t.addEventListener("keydown",(e=>{"Escape"===e.key&&(e.preventDefault(),document.querySelector("#task-title").value="",document.querySelector("#task-description").value="",document.querySelector("#task-due-date").value=new Date,null!==document.querySelector('input[name="taskPriority"]:checked')&&(document.querySelector('input[name="taskPriority"]:checked').checked=!1),t.close())}))}(),et()})();