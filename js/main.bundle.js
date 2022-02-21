(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{559:(t,e,n)=>{t.exports=n(335)},786:(t,e,n)=>{"use strict";var r=n(266),o=n(608),i=n(159),a=n(568),s=n(943),c=n(201),u=n(745),l=n(979),d=n(46),f=n(760);t.exports=function(t){return new Promise((function(e,n){var p,h=t.data,g=t.headers,M=t.responseType;function m(){t.cancelToken&&t.cancelToken.unsubscribe(p),t.signal&&t.signal.removeEventListener("abort",p)}r.isFormData(h)&&delete g["Content-Type"];var y=new XMLHttpRequest;if(t.auth){var x=t.auth.username||"",L=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";g.Authorization="Basic "+btoa(x+":"+L)}var j=s(t.baseURL,t.url);function v(){if(y){var r="getAllResponseHeaders"in y?c(y.getAllResponseHeaders()):null,i={data:M&&"text"!==M&&"json"!==M?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:r,config:t,request:y};o((function(t){e(t),m()}),(function(t){n(t),m()}),i),y=null}}if(y.open(t.method.toUpperCase(),a(j,t.params,t.paramsSerializer),!0),y.timeout=t.timeout,"onloadend"in y?y.onloadend=v:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&setTimeout(v)},y.onabort=function(){y&&(n(l("Request aborted",t,"ECONNABORTED",y)),y=null)},y.onerror=function(){n(l("Network Error",t,null,y)),y=null},y.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||d.transitional;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(l(e,t,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",y)),y=null},r.isStandardBrowserEnv()){var w=(t.withCredentials||u(j))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;w&&(g[t.xsrfHeaderName]=w)}"setRequestHeader"in y&&r.forEach(g,(function(t,e){void 0===h&&"content-type"===e.toLowerCase()?delete g[e]:y.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(y.withCredentials=!!t.withCredentials),M&&"json"!==M&&(y.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&y.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(p=function(t){y&&(n(!t||t&&t.type?new f("canceled"):t),y.abort(),y=null)},t.cancelToken&&t.cancelToken.subscribe(p),t.signal&&(t.signal.aborted?p():t.signal.addEventListener("abort",p))),h||(h=null),y.send(h)}))}},335:(t,e,n)=>{"use strict";var r=n(266),o=n(345),i=n(929),a=n(650),s=function t(e){var n=new i(e),s=o(i.prototype.request,n);return r.extend(s,i.prototype,n),r.extend(s,n),s.create=function(n){return t(a(e,n))},s}(n(46));s.Axios=i,s.Cancel=n(760),s.CancelToken=n(510),s.isCancel=n(825),s.VERSION=n(992).version,s.all=function(t){return Promise.all(t)},s.spread=n(346),s.isAxiosError=n(276),t.exports=s,t.exports.default=s},760:t=>{"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},510:(t,e,n)=>{"use strict";var r=n(760);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},o.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},825:t=>{"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},929:(t,e,n)=>{"use strict";var r=n(266),o=n(568),i=n(252),a=n(29),s=n(650),c=n(123),u=c.validators;function l(t){this.defaults=t,this.interceptors={request:new i,response:new i}}l.prototype.request=function(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],o=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(o=o&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var i,l=[];if(this.interceptors.response.forEach((function(t){l.push(t.fulfilled,t.rejected)})),!o){var d=[a,void 0];for(Array.prototype.unshift.apply(d,r),d=d.concat(l),i=Promise.resolve(e);d.length;)i=i.then(d.shift(),d.shift());return i}for(var f=e;r.length;){var p=r.shift(),h=r.shift();try{f=p(f)}catch(t){h(t);break}}try{i=a(f)}catch(t){return Promise.reject(t)}for(;l.length;)i=i.then(l.shift(),l.shift());return i},l.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){l.prototype[t]=function(e,n,r){return this.request(s(r||{},{method:t,url:e,data:n}))}})),t.exports=l},252:(t,e,n)=>{"use strict";var r=n(266);function o(){this.handlers=[]}o.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},943:(t,e,n)=>{"use strict";var r=n(406),o=n(27);t.exports=function(t,e){return t&&!r(e)?o(t,e):e}},979:(t,e,n)=>{"use strict";var r=n(50);t.exports=function(t,e,n,o,i){var a=new Error(t);return r(a,e,n,o,i)}},29:(t,e,n)=>{"use strict";var r=n(266),o=n(661),i=n(825),a=n(46),s=n(760);function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new s("canceled")}t.exports=function(t){return c(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||a.adapter)(t).then((function(e){return c(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},50:t=>{"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},t}},650:(t,e,n)=>{"use strict";var r=n(266);t.exports=function(t,e){e=e||{};var n={};function o(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function i(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(t[n],e[n])}function a(t){if(!r.isUndefined(e[t]))return o(void 0,e[t])}function s(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:o(void 0,t[n]):o(void 0,e[n])}function c(n){return n in e?o(t[n],e[n]):n in t?o(void 0,t[n]):void 0}var u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||i,o=e(t);r.isUndefined(o)&&e!==c||(n[t]=o)})),n}},608:(t,e,n)=>{"use strict";var r=n(979);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},661:(t,e,n)=>{"use strict";var r=n(266),o=n(46);t.exports=function(t,e,n){var i=this||o;return r.forEach(n,(function(n){t=n.call(i,t,e)})),t}},46:(t,e,n)=>{"use strict";var r=n(266),o=n(490),i=n(50),a={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var c,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=n(786)),c),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)||e&&"application/json"===e["Content-Type"]?(s(e,"application/json"),function(t,e,n){if(r.isString(t))try{return(0,JSON.parse)(t),r.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||u.transitional,n=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||o&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(t){if(a){if("SyntaxError"===t.name)throw i(t,this,"E_JSON_PARSE");throw t}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){u.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){u.headers[t]=r.merge(a)})),t.exports=u},992:t=>{t.exports={version:"0.26.0"}},345:t=>{"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},568:(t,e,n)=>{"use strict";var r=n(266);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var a=[];r.forEach(e,(function(t,e){null!=t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},27:t=>{"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},159:(t,e,n)=>{"use strict";var r=n(266);t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},406:t=>{"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},276:(t,e,n)=>{"use strict";var r=n(266);t.exports=function(t){return r.isObject(t)&&!0===t.isAxiosError}},745:(t,e,n)=>{"use strict";var r=n(266);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},490:(t,e,n)=>{"use strict";var r=n(266);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},201:(t,e,n)=>{"use strict";var r=n(266),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,a={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([n]):a[e]?a[e]+", "+n:n}})),a):a}},346:t=>{"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},123:(t,e,n)=>{"use strict";var r=n(992).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){o[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var i={};o.transitional=function(t,e,n){function o(t,e){return"[Axios v"+r+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,a){if(!1===t)throw new Error(o(r," has been removed"+(e?" in "+e:"")));return e&&!i[r]&&(i[r]=!0,console.warn(o(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,a)}},t.exports={assertOptions:function(t,e,n){if("object"!=typeof t)throw new TypeError("options must be an object");for(var r=Object.keys(t),o=r.length;o-- >0;){var i=r[o],a=e[i];if(a){var s=t[i],c=void 0===s||a(s,i,t);if(!0!==c)throw new TypeError("option "+i+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+i)}},validators:o}},266:(t,e,n)=>{"use strict";var r=n(345),o=Object.prototype.toString;function i(t){return Array.isArray(t)}function a(t){return void 0===t}function s(t){return"[object ArrayBuffer]"===o.call(t)}function c(t){return null!==t&&"object"==typeof t}function u(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function l(t){return"[object Function]"===o.call(t)}function d(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:s,isBuffer:function(t){return null!==t&&!a(t)&&null!==t.constructor&&!a(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"[object FormData]"===o.call(t)},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&s(t.buffer)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:c,isPlainObject:u,isUndefined:a,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:l,isStream:function(t){return c(t)&&l(t.pipe)},isURLSearchParams:function(t){return"[object URLSearchParams]"===o.call(t)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:d,merge:function t(){var e={};function n(n,r){u(e[r])&&u(n)?e[r]=t(e[r],n):u(n)?e[r]=t({},n):i(n)?e[r]=n.slice():e[r]=n}for(var r=0,o=arguments.length;r<o;r++)d(arguments[r],n);return e},extend:function(t,e,n){return d(e,(function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},841:(t,e,n)=>{"use strict";var r,o="https://i.postimg.cc/9Ms2RcW0/player.png",i="https://i.postimg.cc/XJSWPmDq/enemylv1-Big.png",a="https://i.postimg.cc/vBqb8hYw/enemylv1-Big-R.png",s="https://i.postimg.cc/j27tW2Yv/tile-Background.png",c=function(t,e){var n=t.x-e.x,r=t.y-e.y;return Math.sqrt(n*n+r*r)},u=n(559),l=n.n(u),d="https://spicybook-server.herokuapp.com/highscores",f=function(){var t;return l().get(d).then((function(e){return t=e.data})).then((function(t){r=t})).catch((function(t){return console.log(t)})),t};f();var p=document.body,h=document.createElement("h1");h.textContent="Mouse Sabre",h.classList.add("title"),p.appendChild(h);var g=document.createElement("a");g.textContent="START",g.classList.add("startButton"),p.appendChild(g);var M=document.createElement("img");M.src="https://i.postimg.cc/VvJgLND4/main-Menu-Sword.png",M.classList.add("menuImage"),p.appendChild(M);var m=document.createElement("ul");m.classList.add("highscoresUl");var y=document.createElement("li"),x=document.createElement("li"),L=document.createElement("li"),j=document.createElement("li"),v=document.createElement("li"),w=document.createElement("li");g.addEventListener("click",(function(){!function(t,e){history.replaceState(null,document.title,e.pathname+"#!/stealingyourhistory"),history.pushState(null,document.title,e.pathname);var n=e.href;t.addEventListener("popstate",(function(){"#!/stealingyourhistory"===e.hash&&(history.replaceState(null,document.title,e.pathname),setTimeout((function(){e.replace(n)}),0))}),!1)}(window,location),V()})),setTimeout((function(){!function(t,e){void 0===t&&setTimeout((function(){return window.location.reload()}),750);for(var n=0;n<t.length;n++)for(var r=0;r<t.length-n-1;r++){if(t[r+1].score>t[r].score){var o=[t[r].score,t[r+1].score];t[r+1].score=o[0],t[r].score=o[1];var i=t[r+1].name;t[r+1].name=t[r].name,t[r].name=i}}}(r),y.textContent="HIGHSCORES",x.textContent="".concat(r[0].name," - ").concat(r[0].score," pkt"),L.textContent="".concat(r[1].name," - ").concat(r[1].score," pkt"),j.textContent="".concat(r[2].name," - ").concat(r[2].score," pkt"),v.textContent="".concat(r[3].name," - ").concat(r[3].score," pkt"),w.textContent="".concat(r[4].name," - ").concat(r[4].score," pkt"),p.appendChild(m),m.appendChild(y),m.appendChild(x),m.appendChild(L),m.appendChild(j),m.appendChild(v),m.appendChild(w)}),210);var N,T,O=function(t){var e=document.createElement("div");e.classList.add("highscoresWindow");var n=document.createElement("p");n.textContent="NEW HIGHSCORE!";var o=document.createElement("p");o.textContent="Your score: ".concat(t);var i=document.createElement("input"),a=/([a-zA-Z0-9]{3,21})/g;a.test(i.value),i.placeholder="Your nickname";var s=document.createElement("button");s.textContent="submit",document.body.appendChild(e),e.appendChild(n),e.appendChild(o),e.appendChild(i),e.appendChild(s),s.addEventListener("click",(function(){var n;a.test(i.value)?(n={id:r?r.length:Math.floor(300*Math.random()),name:i.value,score:t},l().post(d,{payload:n}).catch((function(t){return console.log(t)})),e.remove()):a.test(i.value)?i.classList.remove("badName"):i.classList.add("badName")}))};f();var E=20,C=0,b=[],A=[],I=[],D=new Array,S=location.href,k=!1,z=new Image,Y=new Image;Y.src="https://i.postimg.cc/G3ZSzHdd/sideTile.png";var U,R=new Image;R.src="https://i.postimg.cc/gk7R3ZWH/bottom-Tile.png",(new Image).src="https://i.postimg.cc/VNpQPw38/bckg.png",(new Image).src="https://i.postimg.cc/C1KJC87K/TEST20-X20circle.png";var P,B,W=0,Q=[],H=[384,192,96,48,24,12,6,3],X=1,q={img:new Image,width:40,height:40,x:-100,y:-100};q.img.src=o;var V=function(){document.body.classList.add("hideCursor"),N=document.getElementById("canvas"),T=N.getContext("2d"),N.width=window.innerWidth-5,N.height=window.innerHeight-5,z.src=s,N.addEventListener("contextmenu",(function(t){_(),t.preventDefault()}))},J=function(t,e,n,r,o,i){var a=new Image;a.src=o;var s=Math.round(W%(10*(i-1))/10);T.drawImage(a,n*s,0,n,r,t,e,n,r)},_=function(){G(3.5);var t=setInterval((function(){T.beginPath(),T.lineWidth=10,Q.forEach((function(t){T.lineTo(t.x,t.y)})),T.stroke()}),1e3/60);switch(Math.floor(3*Math.random()+1)){case 1:T.strokeStyle="#EE5A24";break;case 2:T.strokeStyle="#9980FA";break;case 3:T.strokeStyle="#1B1464"}setTimeout((function(){Q=[],clearInterval(t)}),4500)},G=function(t){k=!0,clearInterval(tt),tt=setInterval($,1e3/12),z.src="https://i.postimg.cc/h4Ys1tTc/tile-Background-Darker-Version.png",setTimeout((function(){k=!1,clearInterval(tt),z.src=s,tt=setInterval($,1e3/60)}),1e3*t)},F=function t(e,n){T.lineTo(e.x,e.y-25),T.lineTo(e.x+(40*Math.random()-20),e.y-25-(40*Math.random()-20)),0!==n&&t(e,n-1)},Z=function(t,e){var n=t.x,r=t.y,o=setInterval((function(){T.beginPath(),T.lineWidth=12,T.strokeStyle="#6F1E51",F({x:n+55,y:r+110},2),T.stroke()}),1e3/120);setTimeout((function(){clearInterval(o)}),1e3*e)},K=function(t,e){switch(e){case 1:n=q,r=t,5,k||(n.x>r.x&&Math.abs(n.x-r.x)<90&&r.x<window.innerWidth-60&&r.x>0?r.x-=15:n.x<r.x&&Math.abs(n.x-r.x)<90&&r.x<window.innerWidth-60&&r.x>0&&(r.x+=15));break;case 2:!function(t,e){if(1===Math.floor(75*Math.random())){var n=Object.create(t);2===Math.round(Math.random()+1)&&t.x<window.innerWidth-90?(n.x+=Math.round(30*Math.random())+35,e.push(n)):1===Math.round(Math.random()+1)&&t.x>90&&(n.x-=Math.round(30*Math.random())+35,e.push(n))}}(t,I);break;case 3:!function(t,e){if(!k&&(t.x>e.x&&Math.abs(t.x-e.x)<50&&e.x<window.innerWidth-60&&e.x>0||t.x<e.x&&Math.abs(t.x-e.x)<50&&e.x<window.innerWidth-60&&e.x>0)){var n=Math.round(400*Math.random())-200;e.x+=n;var r=setInterval((function(){J(e.x-10,e.y-10,128,128,"https://i.postimg.cc/fL73C721/teleporx128t.png",8)}),1e3/120);setTimeout((function(){clearInterval(r)}),450)}}(q,t);break;case 4:!function(t,e){J(t.x,t.y-160,128,256,"https://i.postimg.cc/pXVV7Hhy/rushdown.png",4);var n=e;t.y>.45*window.innerHeight&&(e=k?.5:n,t.y+=e)}(t,20)}var n,r},$=function(){if(T.drawImage(z,0,0,N.clientWidth,N.clientHeight),32,b.forEach((function(t,e){t.forEach((function(n,r){0===r||r===t.length-1?T.drawImage(Y,32*r,32*e):e===b.length-2&&T.drawImage(R,32*r,32*e)}))})),E<1&&function(){clearInterval(tt),document.body.classList.remove("hideCursor"),document.body.innerHTML="";var t=document.createElement("h1");t.textContent="GAME OVER",t.classList.add("gameOverText"),N.style="display:none;",document.body.appendChild(t);var e=document.createElement("button");e.textContent="Main Menu",e.classList.add("menuButton"),document.body.appendChild(e);var n=[];r.forEach((function(t){n.push(t.score)})),e.addEventListener("click",(function(){location.href=S}));for(var o=function(t,e){for(var n=0;n<t.length;n++)for(var r=0;r<t.length-n-1;r++){if(t[r+1]>t[r]){var o=[t[r],t[r+1]];t[r+1]=o[0],t[r]=o[1]}}return t}(n),i=0;i<5;i++)if(C>o[i])return void O(C)}(),T.fillStyle="#b71540",T.font="normal small-caps bold 48px rakkas",J(50,50,64,64,"https://i.postimg.cc/2Swnd2fZ/heart.png",5),T.fillText(" x ".concat(E),114,98),T.fillText(" Score: ".concat(C),window.innerWidth-350,98),onmousemove=function(t){if(t.clientX<P&&t.clientY!=B?(q.img.src="https://i.postimg.cc/PrrypYRL/player-Left.png",U=15.5):t.clientX>P&&t.clientY!=B?(q.img.src=o,U=-41.5):t.clientY!=B&&(q.img.src="https://i.postimg.cc/JnHVWSbL/player-North.png"),q.x=t.clientX,q.y=t.clientY,P=t.clientX,B=t.clientY,D.push(n),k){var e={x:t.clientX,y:t.clientY};Q.push(e)}},++W/1e3>0&&W/1e3<1?X=H[3]:W/1e3>1&&W/1e3<2?(X=H[4],console.log("Waves are on level 2")):W/1e3>2&&W/1e3<3?(X=H[5],console.log("Waves are on level 3")):W/1e3>3&&W/1e3<4&&(X=H[6],console.log("Waves are on level 4")),W%X==3){var t={img:new Image,width:100,height:100,x:Math.floor(Math.random()*window.innerWidth+50-25),y:-50,speed:3.5,radius:190,mutation:Math.floor(4*Math.random())+1,src:Math.floor(2*Math.random())+1===1?i:a};t.img.src=i,A.push(t)}if(A.forEach((function(t){var e=t.x,n=t.y;if(K(t,t.mutation),J(t.x,t.y,96,96,t.src,8),t.y+=t.speed,t.y>=window.innerHeight){var r=A.indexOf(t);A.splice(r,1),t.x>0&&t.x<window.innerWidth&&E--}if(c(q,t)<=t.radius/2&&!k){Z({x:e,y:n},.4);var o=A.indexOf(t);A.splice(o,1),C+=50}Q.forEach((function(r){if(c(r,t)<10&&!k){Z({x:e,y:n},.6);var o=A.indexOf(t);A.splice(o,1),C+=50}}))})),W%368==24){var e={img:new Image,width:100,height:100,x:Math.floor(Math.random()*window.innerWidth+50-25),y:-50,speed:3.5,radius:190,mutation:Math.floor(4*Math.random())+1,mutation2:Math.floor(4*Math.random())+1,src:Math.floor(2*Math.random())+1===1?i:a};for(e.img.src=i,I.push(e);e.mutation===e.mutation2;)e.mutation2=Math.floor(4*Math.random())+1}I.forEach((function(t){var e=t.x,n=t.y;if(K(t,t.mutation),K(t,t.mutation2),t.y+=t.speed,t.y>=window.innerHeight){var r=I.indexOf(t);I.splice(r,1),t.x>0&&t.x<window.innerWidth&&E--}if(c(q,t)<=t.radius/2&&!k){Z({x:e,y:n},.4);var o=I.indexOf(t);I.splice(o,1),C+=50}Q.forEach((function(r){if(c(r,t)<10&&!k){Z({x:e,y:n},.6);var o=I.indexOf(t);I.splice(o,1),C+=50}})),J(t.x,t.y,96,96,"https://i.postimg.cc/R0Bh6gwk/octopus.png",4)}));var n={x:q.x+25+U,y:q.y,width:20,height:53};D.forEach((function(t){if(!k){switch(T.beginPath(),Math.floor(4*Math.random()+1)){case 1:T.strokeStyle="#2ce8f5";break;case 2:T.strokeStyle="#0099db";break;case 3:T.strokeStyle="#fff";break;case 4:T.strokeStyle="#7b2cf5"}T.lineWidth=3,F(t,12),T.stroke()}})),D.forEach((function(t){if(c(q,t)>220){var e=D.indexOf(t);D.splice(e,1)}if(W%12==1){var n=D.indexOf(t);D.splice(n,1)}})),T.drawImage(q.img,q.x-q.width/2,q.y-q.height/2),T.strokeStyle="#03045e"},tt=setInterval((function(){T&&$()}),1e3/60);!function(t,e){for(var n=window.innerWidth,r=window.innerHeight,o=Math.ceil(n/32),i=Math.ceil(r/32),a=0;a<i;a++){for(var s=Array.from(Array(o)),c=0;c<s.length;c++)s[c]=0;e.push(s)}}(0,b),n(517)},517:t=>{"use strict";t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTE2IDE1MjQiPjx0aXRsZT5sb2dvLW9uLWRhcmstYmc8L3RpdGxlPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik04MjIgMzM2bDM4NyAyMTguOXY0MzcuOWwtMzg3IDIxOC45LTM4Ny0yMTguOVY1NTQuOXoiLz48cGF0aCBmaWxsPSIjOEVENkZCIiBkPSJNMTEzOS45IDk3Ny43bC0zMDUuMSAxNzIuNnYtMTM0LjRsMTkwLjEtMTA0LjYgMTE1IDY2LjR6bTIwLjktMTguOVY1OTcuOWwtMTExLjYgNjQuNXYyMzJsMTExLjYgNjQuNHptLTY1Ny45IDE4LjlMODA4IDExNTAuM3YtMTM0LjRMNjE3LjggOTExLjNsLTExNC45IDY2LjR6TTQ4MiA5NTguOFY1OTcuOWwxMTEuNiA2NC41djIzMkw0ODIgOTU4Ljh6bTEzLjEtMzg0LjNsMzEyLjktMTc3djEyOS45TDYwNy41IDYzNy43bC0xLjYuOS0xMTAuOC02NC4xem02NTIuNiAwbC0zMTIuOS0xNzd2MTI5LjlsMjAwLjUgMTEwLjIgMS42LjkgMTEwLjgtNjR6Ii8+PHBhdGggZmlsbD0iIzFDNzhDMCIgZD0iTTgwOCA5ODUuM0w2MjAuNCA4ODIuMVY2NzcuOEw4MDggNzg2LjF2MTk5LjJ6bTI2LjggMGwxODcuNi0xMDMuMVY2NzcuOEw4MzQuOCA3ODYuMXYxOTkuMnptLTEzLjQtMjA3ek02MzMuMSA2NTQuMmwxODguMy0xMDMuNSAxODguMyAxMDMuNS0xODguMyAxMDguNy0xODguMy0xMDguN3oiLz48cGF0aCBmaWxsPSIjRjVGQUZBIiBkPSJNMTU5OS4zIDkxMi4zaDgyLjVsODQuMS0yODAuMmgtODAuNGwtNDkuOCAxOTguOC01My4xLTE5OC44SDE1MTNsLTUzLjYgMTk4LjgtNDkuMy0xOTguOGgtODAuNGw4My42IDI4MC4yaDgyLjVsNTItMTc5LjUgNTEuNSAxNzkuNXpNMTc3MC4yIDc3M2MwIDg0LjEgNTcuMyAxNDYuMyAxNDcuNCAxNDYuMyA2OS43IDAgMTA3LjItNDEuOCAxMTcuOS02MS42bC00OC44LTM3Yy04IDExLjgtMzAgMzQuMy02OC4xIDM0LjMtNDEuMyAwLTcxLjMtMjYuOC03Mi45LTY0LjNIMjA0M2MuNS01LjQuNS0xMC43LjUtMTYuMSAwLTkxLjYtNDkuMy0xNDkuNS0xMzYuMS0xNDkuNS03OS45IDAtMTM3LjIgNjMuMi0xMzcuMiAxNDcuOXptNzcuNy0zMC42YzMuMi0zMi4xIDI1LjctNTYuOCA2MC42LTU2LjggMzMuOCAwIDU4LjQgMjIuNSA2MCA1Ni44aC0xMjAuNnptMjIzLjUgMTY5LjloNjkuN3YtMjguOWM3LjUgOS4xIDM1LjQgMzUuOSA4My4xIDM1LjkgODAuNCAwIDEzNy4yLTYwLjUgMTM3LjItMTQ2LjggMC04Ni44LTUyLjUtMTQ3LjMtMTMyLjktMTQ3LjMtNDguMiAwLTc2LjEgMjYuOC04My4xIDM2LjRWNTI0LjloLTczLjl2Mzg3LjR6bTcxLjgtMTM5LjNjMC01Mi41IDMxLjEtODIuNSA3MS44LTgyLjUgNDIuOSAwIDcxLjggMzMuOCA3MS44IDgyLjUgMCA0OS44LTMwIDgwLjktNzEuOCA4MC45LTQ1IDAtNzEuOC0zNi41LTcxLjgtODAuOXptMjQ3IDIzOS41aDczLjlWODgzLjNjNyA5LjEgMzQuOCAzNS45IDgzLjEgMzUuOSA4MC40IDAgMTMyLjktNjAuNSAxMzIuOS0xNDcuMyAwLTg1LjctNTYuOC0xNDYuOC0xMzcuMi0xNDYuOC00Ny43IDAtNzUuNiAyNi44LTgzLjEgMzYuNFY2MzJoLTY5Ljd2MzgwLjV6bTcxLjgtMjQxLjFjMC00NC41IDI2LjgtODAuOSA3MS44LTgwLjkgNDEuOCAwIDcxLjggMzEuMSA3MS44IDgwLjkgMCA0OC44LTI4LjkgODIuNS03MS44IDgyLjUtNDAuNyAwLTcxLjgtMzAtNzEuOC04Mi41em0yMzEuNSA1NC4xYzAgNTguOSA0OC4yIDkzLjggMTA1IDkzLjggMzIuMiAwIDUzLjYtOS42IDY4LjEtMjUuMmw0LjggMTguMmg2NS40VjczNC45YzAtNjIuNy0yNi44LTEwOS44LTExNi44LTEwOS44LTQyLjkgMC04NS4yIDE2LjEtMTEwLjQgMzMuMmwyNy45IDUwLjRjMjAuOS0xMC43IDQ2LjYtMTkuOCA3NC41LTE5LjggMzIuNyAwIDUwLjkgMTYuNiA1MC45IDQxLjN2MTguMmMtMTAuMi03LTMyLjItMTUuNS02MC42LTE1LjUtNjUuNC0uMS0xMDguOCAzNy40LTEwOC44IDkyLjZ6bTczLjktMi4yYzAtMjMgMTkuOC0zOS4xIDQ4LjItMzkuMXM0OC44IDE0LjUgNDguOCAzOS4xYzAgMjMuNi0yMC40IDM4LjYtNDguMiAzOC42cy00OC44LTE1LjUtNDguOC0zOC42em0zNDguOSAzMC42Yy00Ni42IDAtNzkuOC0zMy44LTc5LjgtODEuNCAwLTQ1IDI5LjUtODIgNzcuMi04MiAzMS42IDAgNTMuMSAxNS41IDY1LjQgMjYuOGwyMC45LTYyLjJjLTE4LjItMTMuOS00Ny4yLTMwLTg4LjQtMzAtODUuMiAwLTE0OSA2Mi43LTE0OSAxNDcuOXM2Mi4yIDE0Ni4zIDE0OS41IDE0Ni4zYzQwLjcgMCA3MS4zLTE3LjEgODcuMy0zMGwtMTkuOC02MC41Yy0xMi40IDEwLjEtMzQuOSAyNS4xLTYzLjMgMjUuMXptMTEwLjkgNTguNGg3My45Vjc2Ny42bDkzLjggMTQ0LjdoODYuOEwzMzc1LjYgNzU5bDk4LjYtMTI3aC04My4xbC05MCAxMTcuOXYtMjI1aC03My45djM4Ny40eiIvPjwvc3ZnPg=="}},t=>{t(t.s=841)}]);