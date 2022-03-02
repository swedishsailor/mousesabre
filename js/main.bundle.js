(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{559:(e,t,n)=>{e.exports=n(335)},786:(e,t,n)=>{"use strict";var r=n(266),i=n(608),o=n(159),a=n(568),s=n(943),c=n(201),u=n(745),d=n(979),l=n(46),h=n(760);e.exports=function(e){return new Promise((function(t,n){var f,p=e.data,g=e.headers,m=e.responseType;function M(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}r.isFormData(p)&&delete g["Content-Type"];var x=new XMLHttpRequest;if(e.auth){var y=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(y+":"+w)}var L=s(e.baseURL,e.url);function j(){if(x){var r="getAllResponseHeaders"in x?c(x.getAllResponseHeaders()):null,o={data:m&&"text"!==m&&"json"!==m?x.response:x.responseText,status:x.status,statusText:x.statusText,headers:r,config:e,request:x};i((function(e){t(e),M()}),(function(e){n(e),M()}),o),x=null}}if(x.open(e.method.toUpperCase(),a(L,e.params,e.paramsSerializer),!0),x.timeout=e.timeout,"onloadend"in x?x.onloadend=j:x.onreadystatechange=function(){x&&4===x.readyState&&(0!==x.status||x.responseURL&&0===x.responseURL.indexOf("file:"))&&setTimeout(j)},x.onabort=function(){x&&(n(d("Request aborted",e,"ECONNABORTED",x)),x=null)},x.onerror=function(){n(d("Network Error",e,null,x)),x=null},x.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(d(t,e,r.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",x)),x=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||u(L))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;v&&(g[e.xsrfHeaderName]=v)}"setRequestHeader"in x&&r.forEach(g,(function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete g[t]:x.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(x.withCredentials=!!e.withCredentials),m&&"json"!==m&&(x.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&x.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&x.upload&&x.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(e){x&&(n(!e||e&&e.type?new h("canceled"):e),x.abort(),x=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),p||(p=null),x.send(p)}))}},335:(e,t,n)=>{"use strict";var r=n(266),i=n(345),o=n(929),a=n(650),s=function e(t){var n=new o(t),s=i(o.prototype.request,n);return r.extend(s,o.prototype,n),r.extend(s,n),s.create=function(n){return e(a(t,n))},s}(n(46));s.Axios=o,s.Cancel=n(760),s.CancelToken=n(510),s.isCancel=n(825),s.VERSION=n(992).version,s.all=function(e){return Promise.all(e)},s.spread=n(346),s.isAxiosError=n(276),e.exports=s,e.exports.default=s},760:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},510:(e,t,n)=>{"use strict";var r=n(760);function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i},825:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},929:(e,t,n)=>{"use strict";var r=n(266),i=n(568),o=n(252),a=n(29),s=n(650),c=n(123),u=c.validators;function d(e){this.defaults=e,this.interceptors={request:new o,response:new o}}d.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&c.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,d=[];if(this.interceptors.response.forEach((function(e){d.push(e.fulfilled,e.rejected)})),!i){var l=[a,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(d),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var h=t;r.length;){var f=r.shift(),p=r.shift();try{h=f(h)}catch(e){p(e);break}}try{o=a(h)}catch(e){return Promise.reject(e)}for(;d.length;)o=o.then(d.shift(),d.shift());return o},d.prototype.getUri=function(e){return e=s(this.defaults,e),i(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){d.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){d.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=d},252:(e,t,n)=>{"use strict";var r=n(266);function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i},943:(e,t,n)=>{"use strict";var r=n(406),i=n(27);e.exports=function(e,t){return e&&!r(t)?i(e,t):t}},979:(e,t,n)=>{"use strict";var r=n(50);e.exports=function(e,t,n,i,o){var a=new Error(e);return r(a,t,n,i,o)}},29:(e,t,n)=>{"use strict";var r=n(266),i=n(661),o=n(825),a=n(46),s=n(760);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s("canceled")}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},50:e=>{"use strict";e.exports=function(e,t,n,r,i){return e.config=t,n&&(e.code=n),e.request=r,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},650:(e,t,n)=>{"use strict";var r=n(266);e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function o(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function a(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function c(n){return n in t?i(e[n],t[n]):n in e?i(void 0,e[n]):void 0}var u={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,i=t(e);r.isUndefined(i)&&t!==c||(n[e]=i)})),n}},608:(e,t,n)=>{"use strict";var r=n(979);e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},661:(e,t,n)=>{"use strict";var r=n(266),i=n(46);e.exports=function(e,t,n){var o=this||i;return r.forEach(n,(function(n){e=n.call(o,e,t)})),e}},46:(e,t,n)=>{"use strict";var r=n(266),i=n(490),o=n(50),a={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(c=n(786)),c),transformRequest:[function(e,t){return i(t,"Accept"),i(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)||t&&"application/json"===t["Content-Type"]?(s(t,"application/json"),function(e,t,n){if(r.isString(e))try{return(0,JSON.parse)(e),r.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||u.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,a=!n&&"json"===this.responseType;if(a||i&&r.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw o(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){u.headers[e]=r.merge(a)})),e.exports=u},992:e=>{e.exports={version:"0.26.0"}},345:e=>{"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},568:(e,t,n)=>{"use strict";var r=n(266);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},27:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},159:(e,t,n)=>{"use strict";var r=n(266);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},406:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},276:(e,t,n)=>{"use strict";var r=n(266);e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}},745:(e,t,n)=>{"use strict";var r=n(266);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},490:(e,t,n)=>{"use strict";var r=n(266);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},201:(e,t,n)=>{"use strict";var r=n(266),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,a={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},346:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},123:(e,t,n)=>{"use strict";var r=n(992).version,i={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){i[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var o={};i.transitional=function(e,t,n){function i(e,t){return"[Axios v"+r+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,r,a){if(!1===e)throw new Error(i(r," has been removed"+(t?" in "+t:"")));return t&&!o[r]&&(o[r]=!0,console.warn(i(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new TypeError("options must be an object");for(var r=Object.keys(e),i=r.length;i-- >0;){var o=r[i],a=t[o];if(a){var s=e[o],c=void 0===s||a(s,o,e);if(!0!==c)throw new TypeError("option "+o+" must be "+c)}else if(!0!==n)throw Error("Unknown option "+o)}},validators:i}},266:(e,t,n)=>{"use strict";var r=n(345),i=Object.prototype.toString;function o(e){return Array.isArray(e)}function a(e){return void 0===e}function s(e){return"[object ArrayBuffer]"===i.call(e)}function c(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function d(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:o,isArrayBuffer:s,isBuffer:function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"[object FormData]"===i.call(e)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&s(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isPlainObject:u,isUndefined:a,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:d,isStream:function(e){return c(e)&&d(e.pipe)},isURLSearchParams:function(e){return"[object URLSearchParams]"===i.call(e)},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):o(n)?t[r]=n.slice():t[r]=n}for(var r=0,i=arguments.length;r<i;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},230:(e,t,n)=>{"use strict";var r,i="https://i.postimg.cc/9Ms2RcW0/player.png",o="https://i.postimg.cc/XJSWPmDq/enemylv1-Big.png",a="https://i.postimg.cc/vBqb8hYw/enemylv1-Big-R.png",s="https://i.postimg.cc/j27tW2Yv/tile-Background.png",c=function(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)},u=n(559),d=n.n(u),l=function(){var e;return d().get("https://spicybook-server.herokuapp.com/highscores").then((function(t){return e=t.data})).then((function(e){r=e})).catch((function(e){return console.log(e)})),e};l();var h=document.body,f=document.createElement("h1");f.textContent="Mouse Sabre",f.classList.add("title"),h.appendChild(f);var p=document.createElement("a");p.textContent="START",p.classList.add("startButton"),h.appendChild(p);var g=document.createElement("img");g.src="https://i.postimg.cc/VvJgLND4/main-Menu-Sword.png",g.classList.add("menuImage"),h.appendChild(g);var m=document.createElement("ul");m.classList.add("highscoresUl");var M=document.createElement("li"),x=document.createElement("li"),y=document.createElement("li"),w=document.createElement("li"),L=document.createElement("li"),j=document.createElement("li"),v=document.createElement("h3");v.textContent="Your screen is too small :(",v.style.color="red",v.style.fontSize="43px",p.addEventListener("click",(function(){window.innerWidth<=900?document.body.appendChild(v):(function(e,t){history.replaceState(null,document.title,t.pathname+"#!/stealingyourhistory"),history.pushState(null,document.title,t.pathname);var n=t.href;e.addEventListener("popstate",(function(){"#!/stealingyourhistory"===t.hash&&(history.replaceState(null,document.title,t.pathname),setTimeout((function(){t.replace(n)}),0))}),!1)}(window,location),_())})),setTimeout((function(){!function(e,t){for(var n=0;n<e.length;n++)for(var r=0;r<e.length-n-1;r++){if(e[r+1].score>e[r].score){var i=[e[r].score,e[r+1].score];e[r+1].score=i[0],e[r].score=i[1];var o=e[r+1].name;e[r+1].name=e[r].name,e[r].name=o}}}(r),M.textContent="HIGHSCORES",x.textContent="".concat(r[0].name," - ").concat(r[0].score," pkt"),y.textContent="".concat(r[1].name," - ").concat(r[1].score," pkt"),w.textContent="".concat(r[2].name," - ").concat(r[2].score," pkt"),L.textContent="".concat(r[3].name," - ").concat(r[3].score," pkt"),j.textContent="".concat(r[4].name," - ").concat(r[4].score," pkt"),h.appendChild(m),m.appendChild(M),m.appendChild(x),m.appendChild(y),m.appendChild(w),m.appendChild(L),m.appendChild(j)}),210);var N=function(e){var t=document.createElement("div");t.classList.add("highscoresWindow");var n=document.createElement("p");n.textContent="NEW HIGHSCORE!";var r=document.createElement("p");r.textContent="Your score: ".concat(e);var i=document.createElement("input"),o=/([a-zA-Z0-9]{3,21})/g;o.test(i.value),i.placeholder="Your nickname";var a=document.createElement("button");a.textContent="submit",document.body.appendChild(t),t.appendChild(n),t.appendChild(r),t.appendChild(i),t.appendChild(a),a.addEventListener("click",(function(){o.test(i.value),o.test(i.value)?i.classList.remove("badName"):i.classList.add("badName")}))};l();var T=new Image;T.src="https://i.postimg.cc/d3xWZXKP/ladybug1.png";var O,E,C={hp:700,maxHp:700,x:window.innerWidth/4,y:-30,width:769,height:600,isDead:null,weakPoints:[],shots:[]},b=0,D=[],I=[],S=[],A=new Array,k=location.href,z=!1,Y=new Image,U=new Image;U.src="https://i.postimg.cc/G3ZSzHdd/sideTile.png";var R,P=new Image;P.src="https://i.postimg.cc/gk7R3ZWH/bottom-Tile.png",(new Image).src="https://i.postimg.cc/VNpQPw38/bckg.png",(new Image).src="https://i.postimg.cc/C1KJC87K/TEST20-X20circle.png";var W,B,Q=0,X=0,H=[],q=[384,192,96,48,24,12,6,3],J=1,V={img:new Image,hp:20,width:40,height:40,x:-100,y:-100};V.img.src=i;var _=function(){document.body.classList.add("hideCursor"),O=document.getElementById("canvas"),E=O.getContext("2d"),O.width=window.innerWidth-5,O.height=window.innerHeight-5,Y.src=s,function(e,t){for(var n=window.innerWidth,r=window.innerHeight,i=Math.ceil(n/32),o=Math.ceil(r/32),a=0;a<o;a++){for(var s=Array.from(Array(i)),c=0;c<s.length;c++)s[c]=0;t.push(s)}}(0,D),O.addEventListener("contextmenu",(function(e){F(),e.preventDefault()}))},G=function(e,t,n,r,i,o){var a=new Image;a.src=i;var s=Math.round(Q%(10*(o-1))/10);E.drawImage(a,n*s,0,n,r,e,t,n,r)},F=function(){Z(3.5);var e=setInterval((function(){E.beginPath(),E.lineWidth=10,H.forEach((function(e){E.lineTo(e.x,e.y)})),E.stroke()}),1e3/60);switch(Math.floor(3*Math.random()+1)){case 1:E.strokeStyle="#EE5A24";break;case 2:E.strokeStyle="#9980FA";break;case 3:E.strokeStyle="#1B1464"}setTimeout((function(){H=[],clearInterval(e)}),4500)},Z=function(e){z=!0,clearInterval(re),re=setInterval(ne,1e3/12),Y.src="https://i.postimg.cc/h4Ys1tTc/tile-Background-Darker-Version.png",setTimeout((function(){z=!1,clearInterval(re),Y.src=s,re=setInterval(ne,1e3/60)}),1e3*e)},K=function e(t,n){E.lineTo(t.x,t.y-25),E.lineTo(t.x+(40*Math.random()-20),t.y-25-(40*Math.random()-20)),0!==n&&e(t,n-1)},$=function(e,t){var n=e.x,r=e.y,i=setInterval((function(){E.beginPath(),E.lineWidth=12,E.strokeStyle="#6F1E51",K({x:n+55,y:r+110},2),E.stroke()}),1e3/120);setTimeout((function(){clearInterval(i)}),1e3*t)},ee=function(e,t){switch(t){case 1:n=V,r=e,5,z||(n.x>r.x&&Math.abs(n.x-r.x)<90&&r.x<window.innerWidth-60&&r.x>0?r.x-=15:n.x<r.x&&Math.abs(n.x-r.x)<90&&r.x<window.innerWidth-60&&r.x>0&&(r.x+=15));break;case 2:!function(e,t){if(1===Math.floor(75*Math.random())){var n=Object.create(e);2===Math.round(Math.random()+1)&&e.x<window.innerWidth-90?(n.x+=Math.round(30*Math.random())+35,t.push(n)):1===Math.round(Math.random()+1)&&e.x>90&&(n.x-=Math.round(30*Math.random())+35,t.push(n))}}(e,S);break;case 3:!function(e,t){if(!z&&(e.x>t.x&&Math.abs(e.x-t.x)<50&&t.x<window.innerWidth-60&&t.x>0||e.x<t.x&&Math.abs(e.x-t.x)<50&&t.x<window.innerWidth-60&&t.x>0)){var n=Math.round(400*Math.random())-200;t.x+=n;var r=setInterval((function(){G(t.x-10,t.y-10,128,128,"https://i.postimg.cc/fL73C721/teleporx128t.png",8)}),1e3/120);setTimeout((function(){clearInterval(r)}),450)}}(V,e);break;case 4:!function(e,t){G(e.x,e.y-160,128,256,"https://i.postimg.cc/pXVV7Hhy/rushdown.png",4);var n=t;e.y>.45*window.innerHeight&&(t=z?.5:n,e.y+=t)}(e,20)}var n,r},te=function(e,t){E.beginPath(),E.fillStyle="rgba(0,0,0, 0.35)",E.fillRect(window.innerWidth/5,100,3*window.innerWidth/5,25),E.fillStyle="green",E.fillRect(window.innerWidth/5,100,3*window.innerWidth/5*e/t,25)},ne=function(){if(E.drawImage(Y,0,0,O.clientWidth,O.clientHeight),32,D.forEach((function(e,t){e.forEach((function(n,r){0===r||r===e.length-1?E.drawImage(U,32*r,32*t):t===D.length-2&&E.drawImage(P,32*r,32*t)}))})),V.hp<1&&function(){clearInterval(re),document.body.classList.remove("hideCursor"),document.body.innerHTML="";var e=document.createElement("h1");e.textContent="GAME OVER",e.classList.add("gameOverText"),O.style="display:none;",document.body.appendChild(e);var t=document.createElement("button");t.textContent="Main Menu",t.classList.add("menuButton"),document.body.appendChild(t);var n=[];r.forEach((function(e){n.push(e.score)})),t.addEventListener("click",(function(){location.href=k}));for(var i=function(e,t){for(var n=0;n<e.length;n++)for(var r=0;r<e.length-n-1;r++){if(e[r+1]>e[r]){var i=[e[r],e[r+1]];e[r+1]=i[0],e[r]=i[1]}}return e}(n),o=0;o<5;o++)if(b>i[o])return void N(b)}(),E.fillStyle="#b71540",E.font="normal small-caps bold 48px rakkas",G(50,50,64,64,"https://i.postimg.cc/2Swnd2fZ/heart.png",5),E.fillText(" x ".concat(V.hp),114,98),E.fillText(" Score: ".concat(b),window.innerWidth-350,98),onmousemove=function(e){if(e.clientX<W&&e.clientY!=B?(V.img.src="https://i.postimg.cc/PrrypYRL/player-Left.png",R=15.5):e.clientX>W&&e.clientY!=B?(V.img.src=i,R=-41.5):e.clientY!=B&&(V.img.src="https://i.postimg.cc/JnHVWSbL/player-North.png"),V.x=e.clientX,V.y=e.clientY,W=e.clientX,B=e.clientY,A.push(n),z){var t={x:e.clientX,y:e.clientY};H.push(t)}},Q++,X++,Q/1e3>0&&Q/1e3<1?J=q[3]:Q/1e3>1&&Q/1e3<2?J=q[4]:Q/1e3>2&&Q/1e3<3||Q/1e3>3&&Q/1e3<4?J=q[5]:Q/1e3>4&&null===C.isDead&&Q/1e3<4.3?C.isDead=!1:Q/1e3>4.3&&!1===C.isDead?J=0:Q/1e3>5&&!0===C.isDead?(X=0,C.isDead=null):X/1e3>0&&X/1e3<1.1?J=q[5]:X/1e3>1.1&&(J=q[6]),Q%J==3){var e={img:new Image,width:100,height:100,x:Math.floor(Math.random()*window.innerWidth+50-25),y:-50,speed:3.5,radius:190,mutation:Math.floor(4*Math.random())+1,src:Math.floor(2*Math.random())+1===1?o:a};e.img.src=o,I.push(e)}if(I.forEach((function(e){var t=e.x,n=e.y;if(ee(e,e.mutation),G(e.x,e.y,96,96,e.src,8),e.y+=e.speed,e.y>=window.innerHeight){var r=I.indexOf(e);I.splice(r,1),e.x>0&&e.x<window.innerWidth&&V.hp--}if(c(V,e)<=e.radius/2&&!z){$({x:t,y:n},.4);var i=I.indexOf(e);I.splice(i,1),b+=50}H.forEach((function(r){if(c(r,e)<10&&!z){$({x:t,y:n},.6);var i=I.indexOf(e);I.splice(i,1),b+=50}}))})),Q%J/3==24){var t={img:new Image,width:100,height:100,x:Math.floor(Math.random()*window.innerWidth+50-25),y:-50,speed:3.5,radius:190,mutation:Math.floor(4*Math.random())+1,mutation2:Math.floor(4*Math.random())+1,src:Math.floor(2*Math.random())+1===1?o:a};for(t.img.src=o,S.push(t);t.mutation===t.mutation2;)t.mutation2=Math.floor(4*Math.random())+1}S.forEach((function(e){var t=e.x,n=e.y;if(ee(e,e.mutation),ee(e,e.mutation2),e.y+=e.speed,e.y>=window.innerHeight){var r=S.indexOf(e);S.splice(r,1),e.x>0&&e.x<window.innerWidth&&V.hp--}if(c(V,e)<=e.radius/2&&!z){$({x:t,y:n},.4);var i=S.indexOf(e);S.splice(i,1),b+=50}H.forEach((function(r){if(c(r,e)<10&&!z){$({x:t,y:n},.6);var i=S.indexOf(e);S.splice(i,1),b+=50}})),G(e.x,e.y,96,96,"https://i.postimg.cc/R0Bh6gwk/octopus.png",4)})),!1===C.isDead&&function(e,t,n){if(t.drawImage(T,C.x-C.width/2,C.y-C.height/2),te(C.hp,C.maxHp),e%128>64?C.y-=2:C.y+=2,C.x+=11*Math.cos(e/50),C.x>window.innerWidth-window.innerWidth/3?C.x-=2:C.x<window.innerWidth/3&&(C.x+=2),e%100==1){var r={x:C.x,y:C.y,width:30,heigth:70,speedX:0,speedY:8},i={x:C.x,y:C.y,width:30,heigth:70,speedX:6,speedY:7},o={x:C.x,y:C.y,width:30,heigth:70,speedX:-6,speedY:7};C.shots.push(r),C.shots.push(i),C.shots.push(o)}var a=new Image;if(a.src="https://i.postimg.cc/9MvXBdkJ/spike.png",C.shots.forEach((function(e){if(t.drawImage(a,e.x,e.y+210),e.y+=e.speedY,e.x+=e.speedX,c(n,{x:e.x,y:e.y+220})<60){var r=C.shots.indexOf(e);C.shots.splice(r,1)}if(e.y+220>window.innerHeight&&e.x>0&&e.x<window.innerWidth-10){n.hp--;var i=C.shots.indexOf(e);C.shots.splice(i,1)}})),e%324==1){var s={x:C.x/6+Math.floor(Math.random()*(C.width/4))-C.width/4,y:C.y/2+Math.floor(Math.random()*C.height/2-50),radius:40};C.weakPoints.push(s)}C.weakPoints.forEach((function(r){if(t.beginPath(),t.arc(r.x+C.x,r.y+C.y,r.radius,0,15),t.fillStyle="white",t.fill(),c(n,{x:r.x+C.x,y:r.y+C.y})<40){var i=C.weakPoints.indexOf(r);C.weakPoints.splice(i,1),C.hp-=100}if(e%216==0){var o=C.weakPoints.indexOf(r);C.weakPoints.splice(o,1)}})),C.hp<=0&&(C.isDead=!0)}(Q,E,V);var n={x:V.x+25+R,y:V.y,width:20,height:53};A.forEach((function(e){if(!z){switch(E.beginPath(),Math.floor(4*Math.random()+1)){case 1:E.strokeStyle="#2ce8f5";break;case 2:E.strokeStyle="#0099db";break;case 3:E.strokeStyle="#fff";break;case 4:E.strokeStyle="#7b2cf5"}E.lineWidth=3,K(e,12),E.stroke()}})),A.forEach((function(e){if(c(V,e)>220){var t=A.indexOf(e);A.splice(t,1)}if(Q%12==1){var n=A.indexOf(e);A.splice(n,1)}})),E.drawImage(V.img,V.x-V.width/2,V.y-V.height/2),E.strokeStyle="#03045e"},re=setInterval((function(){E&&ne()}),1e3/60);n(517)},517:e=>{"use strict";e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTE2IDE1MjQiPjx0aXRsZT5sb2dvLW9uLWRhcmstYmc8L3RpdGxlPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik04MjIgMzM2bDM4NyAyMTguOXY0MzcuOWwtMzg3IDIxOC45LTM4Ny0yMTguOVY1NTQuOXoiLz48cGF0aCBmaWxsPSIjOEVENkZCIiBkPSJNMTEzOS45IDk3Ny43bC0zMDUuMSAxNzIuNnYtMTM0LjRsMTkwLjEtMTA0LjYgMTE1IDY2LjR6bTIwLjktMTguOVY1OTcuOWwtMTExLjYgNjQuNXYyMzJsMTExLjYgNjQuNHptLTY1Ny45IDE4LjlMODA4IDExNTAuM3YtMTM0LjRMNjE3LjggOTExLjNsLTExNC45IDY2LjR6TTQ4MiA5NTguOFY1OTcuOWwxMTEuNiA2NC41djIzMkw0ODIgOTU4Ljh6bTEzLjEtMzg0LjNsMzEyLjktMTc3djEyOS45TDYwNy41IDYzNy43bC0xLjYuOS0xMTAuOC02NC4xem02NTIuNiAwbC0zMTIuOS0xNzd2MTI5LjlsMjAwLjUgMTEwLjIgMS42LjkgMTEwLjgtNjR6Ii8+PHBhdGggZmlsbD0iIzFDNzhDMCIgZD0iTTgwOCA5ODUuM0w2MjAuNCA4ODIuMVY2NzcuOEw4MDggNzg2LjF2MTk5LjJ6bTI2LjggMGwxODcuNi0xMDMuMVY2NzcuOEw4MzQuOCA3ODYuMXYxOTkuMnptLTEzLjQtMjA3ek02MzMuMSA2NTQuMmwxODguMy0xMDMuNSAxODguMyAxMDMuNS0xODguMyAxMDguNy0xODguMy0xMDguN3oiLz48cGF0aCBmaWxsPSIjRjVGQUZBIiBkPSJNMTU5OS4zIDkxMi4zaDgyLjVsODQuMS0yODAuMmgtODAuNGwtNDkuOCAxOTguOC01My4xLTE5OC44SDE1MTNsLTUzLjYgMTk4LjgtNDkuMy0xOTguOGgtODAuNGw4My42IDI4MC4yaDgyLjVsNTItMTc5LjUgNTEuNSAxNzkuNXpNMTc3MC4yIDc3M2MwIDg0LjEgNTcuMyAxNDYuMyAxNDcuNCAxNDYuMyA2OS43IDAgMTA3LjItNDEuOCAxMTcuOS02MS42bC00OC44LTM3Yy04IDExLjgtMzAgMzQuMy02OC4xIDM0LjMtNDEuMyAwLTcxLjMtMjYuOC03Mi45LTY0LjNIMjA0M2MuNS01LjQuNS0xMC43LjUtMTYuMSAwLTkxLjYtNDkuMy0xNDkuNS0xMzYuMS0xNDkuNS03OS45IDAtMTM3LjIgNjMuMi0xMzcuMiAxNDcuOXptNzcuNy0zMC42YzMuMi0zMi4xIDI1LjctNTYuOCA2MC42LTU2LjggMzMuOCAwIDU4LjQgMjIuNSA2MCA1Ni44aC0xMjAuNnptMjIzLjUgMTY5LjloNjkuN3YtMjguOWM3LjUgOS4xIDM1LjQgMzUuOSA4My4xIDM1LjkgODAuNCAwIDEzNy4yLTYwLjUgMTM3LjItMTQ2LjggMC04Ni44LTUyLjUtMTQ3LjMtMTMyLjktMTQ3LjMtNDguMiAwLTc2LjEgMjYuOC04My4xIDM2LjRWNTI0LjloLTczLjl2Mzg3LjR6bTcxLjgtMTM5LjNjMC01Mi41IDMxLjEtODIuNSA3MS44LTgyLjUgNDIuOSAwIDcxLjggMzMuOCA3MS44IDgyLjUgMCA0OS44LTMwIDgwLjktNzEuOCA4MC45LTQ1IDAtNzEuOC0zNi41LTcxLjgtODAuOXptMjQ3IDIzOS41aDczLjlWODgzLjNjNyA5LjEgMzQuOCAzNS45IDgzLjEgMzUuOSA4MC40IDAgMTMyLjktNjAuNSAxMzIuOS0xNDcuMyAwLTg1LjctNTYuOC0xNDYuOC0xMzcuMi0xNDYuOC00Ny43IDAtNzUuNiAyNi44LTgzLjEgMzYuNFY2MzJoLTY5Ljd2MzgwLjV6bTcxLjgtMjQxLjFjMC00NC41IDI2LjgtODAuOSA3MS44LTgwLjkgNDEuOCAwIDcxLjggMzEuMSA3MS44IDgwLjkgMCA0OC44LTI4LjkgODIuNS03MS44IDgyLjUtNDAuNyAwLTcxLjgtMzAtNzEuOC04Mi41em0yMzEuNSA1NC4xYzAgNTguOSA0OC4yIDkzLjggMTA1IDkzLjggMzIuMiAwIDUzLjYtOS42IDY4LjEtMjUuMmw0LjggMTguMmg2NS40VjczNC45YzAtNjIuNy0yNi44LTEwOS44LTExNi44LTEwOS44LTQyLjkgMC04NS4yIDE2LjEtMTEwLjQgMzMuMmwyNy45IDUwLjRjMjAuOS0xMC43IDQ2LjYtMTkuOCA3NC41LTE5LjggMzIuNyAwIDUwLjkgMTYuNiA1MC45IDQxLjN2MTguMmMtMTAuMi03LTMyLjItMTUuNS02MC42LTE1LjUtNjUuNC0uMS0xMDguOCAzNy40LTEwOC44IDkyLjZ6bTczLjktMi4yYzAtMjMgMTkuOC0zOS4xIDQ4LjItMzkuMXM0OC44IDE0LjUgNDguOCAzOS4xYzAgMjMuNi0yMC40IDM4LjYtNDguMiAzOC42cy00OC44LTE1LjUtNDguOC0zOC42em0zNDguOSAzMC42Yy00Ni42IDAtNzkuOC0zMy44LTc5LjgtODEuNCAwLTQ1IDI5LjUtODIgNzcuMi04MiAzMS42IDAgNTMuMSAxNS41IDY1LjQgMjYuOGwyMC45LTYyLjJjLTE4LjItMTMuOS00Ny4yLTMwLTg4LjQtMzAtODUuMiAwLTE0OSA2Mi43LTE0OSAxNDcuOXM2Mi4yIDE0Ni4zIDE0OS41IDE0Ni4zYzQwLjcgMCA3MS4zLTE3LjEgODcuMy0zMGwtMTkuOC02MC41Yy0xMi40IDEwLjEtMzQuOSAyNS4xLTYzLjMgMjUuMXptMTEwLjkgNTguNGg3My45Vjc2Ny42bDkzLjggMTQ0LjdoODYuOEwzMzc1LjYgNzU5bDk4LjYtMTI3aC04My4xbC05MCAxMTcuOXYtMjI1aC03My45djM4Ny40eiIvPjwvc3ZnPg=="}},e=>{e(e.s=230)}]);