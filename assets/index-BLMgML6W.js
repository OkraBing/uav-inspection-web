var dy=Object.defineProperty;var fy=(t,e,n)=>e in t?dy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Ue=(t,e,n)=>fy(t,typeof e!="symbol"?e+"":e,n);function hy(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Ov(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bv={exports:{}},$c={},Vv={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),py=Symbol.for("react.portal"),my=Symbol.for("react.fragment"),gy=Symbol.for("react.strict_mode"),vy=Symbol.for("react.profiler"),xy=Symbol.for("react.provider"),_y=Symbol.for("react.context"),yy=Symbol.for("react.forward_ref"),Sy=Symbol.for("react.suspense"),My=Symbol.for("react.memo"),Ey=Symbol.for("react.lazy"),Jp=Symbol.iterator;function wy(t){return t===null||typeof t!="object"?null:(t=Jp&&t[Jp]||t["@@iterator"],typeof t=="function"?t:null)}var Hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jv=Object.assign,Gv={};function Mo(t,e,n){this.props=t,this.context=e,this.refs=Gv,this.updater=n||Hv}Mo.prototype.isReactComponent={};Mo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Mo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wv(){}Wv.prototype=Mo.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=Gv,this.updater=n||Hv}var wh=Eh.prototype=new Wv;wh.constructor=Eh;jv(wh,Mo.prototype);wh.isPureReactComponent=!0;var Qp=Array.isArray,Xv=Object.prototype.hasOwnProperty,Th={current:null},$v={key:!0,ref:!0,__self:!0,__source:!0};function Yv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Xv.call(e,i)&&!$v.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Pa,type:t,key:s,ref:o,props:r,_owner:Th.current}}function Ty(t,e){return{$$typeof:Pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ah(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa}function Ay(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var em=/\/+/g;function Eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ay(""+t.key):e.toString(36)}function Bl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Pa:case py:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Eu(o,0):i,Qp(r)?(n="",t!=null&&(n=t.replace(em,"$&/")+"/"),Bl(r,e,n,"",function(c){return c})):r!=null&&(Ah(r)&&(r=Ty(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(em,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Qp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Eu(s,a);o+=Bl(s,e,n,l,r)}else if(l=wy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Eu(s,a++),o+=Bl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var i=[],r=0;return Bl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Cy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},Vl={transition:null},by={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:Vl,ReactCurrentOwner:Th};function qv(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!Ah(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Mo;Ve.Fragment=my;Ve.Profiler=vy;Ve.PureComponent=Eh;Ve.StrictMode=gy;Ve.Suspense=Sy;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=by;Ve.act=qv;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Th.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Xv.call(e,l)&&!$v.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Pa,type:t.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(t){return t={$$typeof:_y,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xy,_context:t},t.Consumer=t};Ve.createElement=Yv;Ve.createFactory=function(t){var e=Yv.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:yy,render:t}};Ve.isValidElement=Ah;Ve.lazy=function(t){return{$$typeof:Ey,_payload:{_status:-1,_result:t},_init:Cy}};Ve.memo=function(t,e){return{$$typeof:My,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Vl.transition;Vl.transition={};try{t()}finally{Vl.transition=e}};Ve.unstable_act=qv;Ve.useCallback=function(t,e){return on.current.useCallback(t,e)};Ve.useContext=function(t){return on.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return on.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return on.current.useEffect(t,e)};Ve.useId=function(){return on.current.useId()};Ve.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return on.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};Ve.useRef=function(t){return on.current.useRef(t)};Ve.useState=function(t){return on.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return on.current.useTransition()};Ve.version="18.3.1";Vv.exports=Ve;var $=Vv.exports;const Ch=Ov($),Ry=hy({__proto__:null,default:Ch},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Py=$,Ly=Symbol.for("react.element"),Ny=Symbol.for("react.fragment"),Dy=Object.prototype.hasOwnProperty,Iy=Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Uy={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Dy.call(e,i)&&!Uy.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ly,type:t,key:s,ref:o,props:r,_owner:Iy.current}}$c.Fragment=Ny;$c.jsx=Kv;$c.jsxs=Kv;Bv.exports=$c;var m=Bv.exports,kd={},Zv={exports:{}},Tn={},Jv={exports:{}},Qv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,q){var J=N.length;N.push(q);e:for(;0<J;){var re=J-1>>>1,ye=N[re];if(0<r(ye,q))N[re]=q,N[J]=ye,J=re;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var q=N[0],J=N.pop();if(J!==q){N[0]=J;e:for(var re=0,ye=N.length,Ge=ye>>>1;re<Ge;){var Y=2*(re+1)-1,ie=N[Y],de=Y+1,fe=N[de];if(0>r(ie,J))de<ye&&0>r(fe,ie)?(N[re]=fe,N[de]=J,re=de):(N[re]=ie,N[Y]=J,re=Y);else if(de<ye&&0>r(fe,J))N[re]=fe,N[de]=J,re=de;else break e}}return q}function r(N,q){var J=N.sortIndex-q.sortIndex;return J!==0?J:N.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,d=null,h=3,p=!1,v=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=N)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(N){if(y=!1,x(N),!v)if(n(l)!==null)v=!0,G(R);else{var q=n(c);q!==null&&B(S,q.startTime-N)}}function R(N,q){v=!1,y&&(y=!1,u(P),P=-1),p=!0;var J=h;try{for(x(q),d=n(l);d!==null&&(!(d.expirationTime>q)||N&&!w());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var ye=re(d.expirationTime<=q);q=t.unstable_now(),typeof ye=="function"?d.callback=ye:d===n(l)&&i(l),x(q)}else i(l);d=n(l)}if(d!==null)var Ge=!0;else{var Y=n(c);Y!==null&&B(S,Y.startTime-q),Ge=!1}return Ge}finally{d=null,h=J,p=!1}}var b=!1,A=null,P=-1,E=5,M=-1;function w(){return!(t.unstable_now()-M<E)}function I(){if(A!==null){var N=t.unstable_now();M=N;var q=!0;try{q=A(!0,N)}finally{q?z():(b=!1,A=null)}}else b=!1}var z;if(typeof _=="function")z=function(){_(I)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,X=W.port2;W.port1.onmessage=I,z=function(){X.postMessage(null)}}else z=function(){g(I,0)};function G(N){A=N,b||(b=!0,z())}function B(N,q){P=g(function(){N(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(R))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var J=h;h=q;try{return N()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var J=h;h=N;try{return q()}finally{h=J}},t.unstable_scheduleCallback=function(N,q,J){var re=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?re+J:re):J=re,N){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=J+ye,N={id:f++,callback:q,priorityLevel:N,startTime:J,expirationTime:ye,sortIndex:-1},J>re?(N.sortIndex=J,e(c,N),n(l)===null&&N===n(c)&&(y?(u(P),P=-1):y=!0,B(S,J-re))):(N.sortIndex=ye,e(l,N),v||p||(v=!0,G(R))),N},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(N){var q=h;return function(){var J=h;h=q;try{return N.apply(this,arguments)}finally{h=J}}}})(Qv);Jv.exports=Qv;var Fy=Jv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zy=$,wn=Fy;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var e0=new Set,ca={};function rs(t,e){so(t,e),so(t+"Capture",e)}function so(t,e){for(ca[t]=e,t=0;t<e.length;t++)e0.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Od=Object.prototype.hasOwnProperty,ky=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tm={},nm={};function Oy(t){return Od.call(nm,t)?!0:Od.call(tm,t)?!1:ky.test(t)?nm[t]=!0:(tm[t]=!0,!1)}function By(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Vy(t,e,n,i){if(e===null||typeof e>"u"||By(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var bh=/[\-:]([a-z])/g;function Rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bh,Rh);Gt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bh,Rh);Gt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bh,Rh);Gt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ph(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vy(e,n,r,i)&&(n=null),i||r===null?Oy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Ds=Symbol.for("react.portal"),Is=Symbol.for("react.fragment"),Lh=Symbol.for("react.strict_mode"),Bd=Symbol.for("react.profiler"),t0=Symbol.for("react.provider"),n0=Symbol.for("react.context"),Nh=Symbol.for("react.forward_ref"),Vd=Symbol.for("react.suspense"),Hd=Symbol.for("react.suspense_list"),Dh=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),i0=Symbol.for("react.offscreen"),im=Symbol.iterator;function Ro(t){return t===null||typeof t!="object"?null:(t=im&&t[im]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,wu;function Xo(t){if(wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wu=e&&e[1]||""}return`
`+wu+t}var Tu=!1;function Au(t,e){if(!t||Tu)return"";Tu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Tu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Xo(t):""}function Hy(t){switch(t.tag){case 5:return Xo(t.type);case 16:return Xo("Lazy");case 13:return Xo("Suspense");case 19:return Xo("SuspenseList");case 0:case 2:case 15:return t=Au(t.type,!1),t;case 11:return t=Au(t.type.render,!1),t;case 1:return t=Au(t.type,!0),t;default:return""}}function jd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Is:return"Fragment";case Ds:return"Portal";case Bd:return"Profiler";case Lh:return"StrictMode";case Vd:return"Suspense";case Hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case n0:return(t.displayName||"Context")+".Consumer";case t0:return(t._context.displayName||"Context")+".Provider";case Nh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dh:return e=t.displayName||null,e!==null?e:jd(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return jd(t(e))}catch{}}return null}function jy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jd(e);case 8:return e===Lh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function r0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gy(t){var e=r0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=Gy(t))}function s0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=r0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gd(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function o0(t,e){e=e.checked,e!=null&&Ph(t,"checked",e,!1)}function Wd(t,e){o0(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xd(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function sm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xd(t,e,n){(e!=="number"||ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var $o=Array.isArray;function qs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $d(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if($o(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function a0(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function am(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function l0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?l0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ja,c0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ja=ja||document.createElement("div"),ja.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ja.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Qo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wy=["Webkit","ms","Moz","O"];Object.keys(Qo).forEach(function(t){Wy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Qo[e]=Qo[t]})});function u0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Qo.hasOwnProperty(t)&&Qo[t]?(""+e).trim():e+"px"}function d0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=u0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Xy=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(t,e){if(e){if(Xy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Kd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zd=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jd=null,Ks=null,Zs=null;function lm(t){if(t=Da(t)){if(typeof Jd!="function")throw Error(te(280));var e=t.stateNode;e&&(e=Jc(e),Jd(t.stateNode,t.type,e))}}function f0(t){Ks?Zs?Zs.push(t):Zs=[t]:Ks=t}function h0(){if(Ks){var t=Ks,e=Zs;if(Zs=Ks=null,lm(t),e)for(t=0;t<e.length;t++)lm(e[t])}}function p0(t,e){return t(e)}function m0(){}var Cu=!1;function g0(t,e,n){if(Cu)return t(e,n);Cu=!0;try{return p0(t,e,n)}finally{Cu=!1,(Ks!==null||Zs!==null)&&(m0(),h0())}}function da(t,e){var n=t.stateNode;if(n===null)return null;var i=Jc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var Qd=!1;if(Pi)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){Qd=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{Qd=!1}function $y(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var ea=!1,lc=null,cc=!1,ef=null,Yy={onError:function(t){ea=!0,lc=t}};function qy(t,e,n,i,r,s,o,a,l){ea=!1,lc=null,$y.apply(Yy,arguments)}function Ky(t,e,n,i,r,s,o,a,l){if(qy.apply(this,arguments),ea){if(ea){var c=lc;ea=!1,lc=null}else throw Error(te(198));cc||(cc=!0,ef=c)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cm(t){if(ss(t)!==t)throw Error(te(188))}function Zy(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return cm(r),t;if(s===i)return cm(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function x0(t){return t=Zy(t),t!==null?_0(t):null}function _0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_0(t);if(e!==null)return e;t=t.sibling}return null}var y0=wn.unstable_scheduleCallback,um=wn.unstable_cancelCallback,Jy=wn.unstable_shouldYield,Qy=wn.unstable_requestPaint,_t=wn.unstable_now,eS=wn.unstable_getCurrentPriorityLevel,Uh=wn.unstable_ImmediatePriority,S0=wn.unstable_UserBlockingPriority,uc=wn.unstable_NormalPriority,tS=wn.unstable_LowPriority,M0=wn.unstable_IdlePriority,Yc=null,ci=null;function nS(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(Yc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:sS,iS=Math.log,rS=Math.LN2;function sS(t){return t>>>=0,t===0?32:31-(iS(t)/rS|0)|0}var Ga=64,Wa=4194304;function Yo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Yo(a):(s&=o,s!==0&&(i=Yo(s)))}else o=n&~r,o!==0?i=Yo(o):s!==0&&(i=Yo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function oS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=oS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function E0(){var t=Ga;return Ga<<=1,!(Ga&4194240)&&(Ga=64),t}function bu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function lS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function w0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var T0,zh,A0,C0,b0,nf=!1,Xa=[],er=null,tr=null,nr=null,fa=new Map,ha=new Map,Yi=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function dm(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function Lo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Da(e),e!==null&&zh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function uS(t,e,n,i,r){switch(e){case"focusin":return er=Lo(er,t,e,n,i,r),!0;case"dragenter":return tr=Lo(tr,t,e,n,i,r),!0;case"mouseover":return nr=Lo(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,Lo(fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,Lo(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function R0(t){var e=Or(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=v0(n),e!==null){t.blockedOn=e,b0(t.priority,function(){A0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zd=i,n.target.dispatchEvent(i),Zd=null}else return e=Da(n),e!==null&&zh(e),t.blockedOn=n,!1;e.shift()}return!0}function fm(t,e,n){Hl(t)&&n.delete(e)}function dS(){nf=!1,er!==null&&Hl(er)&&(er=null),tr!==null&&Hl(tr)&&(tr=null),nr!==null&&Hl(nr)&&(nr=null),fa.forEach(fm),ha.forEach(fm)}function No(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,dS)))}function pa(t){function e(r){return No(r,t)}if(0<Xa.length){No(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&No(er,t),tr!==null&&No(tr,t),nr!==null&&No(nr,t),fa.forEach(e),ha.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)R0(n),n.blockedOn===null&&Yi.shift()}var Js=Ui.ReactCurrentBatchConfig,fc=!0;function fS(t,e,n,i){var r=Qe,s=Js.transition;Js.transition=null;try{Qe=1,kh(t,e,n,i)}finally{Qe=r,Js.transition=s}}function hS(t,e,n,i){var r=Qe,s=Js.transition;Js.transition=null;try{Qe=4,kh(t,e,n,i)}finally{Qe=r,Js.transition=s}}function kh(t,e,n,i){if(fc){var r=rf(t,e,n,i);if(r===null)ku(t,e,i,hc,n),dm(t,i);else if(uS(r,t,e,n,i))i.stopPropagation();else if(dm(t,i),e&4&&-1<cS.indexOf(t)){for(;r!==null;){var s=Da(r);if(s!==null&&T0(s),s=rf(t,e,n,i),s===null&&ku(t,e,i,hc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ku(t,e,i,null,n)}}var hc=null;function rf(t,e,n,i){if(hc=null,t=Ih(i),t=Or(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return hc=t,null}function P0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eS()){case Uh:return 1;case S0:return 4;case uc:case tS:return 16;case M0:return 536870912;default:return 16}default:return 16}}var Zi=null,Oh=null,jl=null;function L0(){if(jl)return jl;var t,e=Oh,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return jl=r.slice(t,1<i?1-i:void 0)}function Gl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function hm(){return!1}function An(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$a:hm,this.isPropagationStopped=hm,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),e}var Eo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=An(Eo),Na=ht({},Eo,{view:0,detail:0}),pS=An(Na),Ru,Pu,Do,qc=ht({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Do&&(Do&&t.type==="mousemove"?(Ru=t.screenX-Do.screenX,Pu=t.screenY-Do.screenY):Pu=Ru=0,Do=t),Ru)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),pm=An(qc),mS=ht({},qc,{dataTransfer:0}),gS=An(mS),vS=ht({},Na,{relatedTarget:0}),Lu=An(vS),xS=ht({},Eo,{animationName:0,elapsedTime:0,pseudoElement:0}),_S=An(xS),yS=ht({},Eo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),SS=An(yS),MS=ht({},Eo,{data:0}),mm=An(MS),ES={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TS[t])?!!e[t]:!1}function Vh(){return AS}var CS=ht({},Na,{key:function(t){if(t.key){var e=ES[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Gl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vh,charCode:function(t){return t.type==="keypress"?Gl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Gl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bS=An(CS),RS=ht({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gm=An(RS),PS=ht({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vh}),LS=An(PS),NS=ht({},Eo,{propertyName:0,elapsedTime:0,pseudoElement:0}),DS=An(NS),IS=ht({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),US=An(IS),FS=[9,13,27,32],Hh=Pi&&"CompositionEvent"in window,ta=null;Pi&&"documentMode"in document&&(ta=document.documentMode);var zS=Pi&&"TextEvent"in window&&!ta,N0=Pi&&(!Hh||ta&&8<ta&&11>=ta),vm=" ",xm=!1;function D0(t,e){switch(t){case"keyup":return FS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Us=!1;function kS(t,e){switch(t){case"compositionend":return I0(e);case"keypress":return e.which!==32?null:(xm=!0,vm);case"textInput":return t=e.data,t===vm&&xm?null:t;default:return null}}function OS(t,e){if(Us)return t==="compositionend"||!Hh&&D0(t,e)?(t=L0(),jl=Oh=Zi=null,Us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N0&&e.locale!=="ko"?null:e.data;default:return null}}var BS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BS[t.type]:e==="textarea"}function U0(t,e,n,i){f0(i),e=pc(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var na=null,ma=null;function VS(t){X0(t,0)}function Kc(t){var e=ks(t);if(s0(e))return t}function HS(t,e){if(t==="change")return e}var F0=!1;if(Pi){var Nu;if(Pi){var Du="oninput"in document;if(!Du){var ym=document.createElement("div");ym.setAttribute("oninput","return;"),Du=typeof ym.oninput=="function"}Nu=Du}else Nu=!1;F0=Nu&&(!document.documentMode||9<document.documentMode)}function Sm(){na&&(na.detachEvent("onpropertychange",z0),ma=na=null)}function z0(t){if(t.propertyName==="value"&&Kc(ma)){var e=[];U0(e,ma,t,Ih(t)),g0(VS,e)}}function jS(t,e,n){t==="focusin"?(Sm(),na=e,ma=n,na.attachEvent("onpropertychange",z0)):t==="focusout"&&Sm()}function GS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Kc(ma)}function WS(t,e){if(t==="click")return Kc(e)}function XS(t,e){if(t==="input"||t==="change")return Kc(e)}function $S(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:$S;function ga(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Od.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function Mm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Em(t,e){var n=Mm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mm(n)}}function k0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?k0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O0(){for(var t=window,e=ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ac(t.document)}return e}function jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function YS(t){var e=O0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&k0(n.ownerDocument.documentElement,n)){if(i!==null&&jh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Em(n,s);var o=Em(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qS=Pi&&"documentMode"in document&&11>=document.documentMode,Fs=null,sf=null,ia=null,of=!1;function wm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;of||Fs==null||Fs!==ac(i)||(i=Fs,"selectionStart"in i&&jh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&ga(ia,i)||(ia=i,i=pc(sf,"onSelect"),0<i.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Fs)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var zs={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},Iu={},B0={};Pi&&(B0=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Zc(t){if(Iu[t])return Iu[t];if(!zs[t])return t;var e=zs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B0)return Iu[t]=e[n];return t}var V0=Zc("animationend"),H0=Zc("animationiteration"),j0=Zc("animationstart"),G0=Zc("transitionend"),W0=new Map,Tm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(t,e){W0.set(t,e),rs(e,[t])}for(var Uu=0;Uu<Tm.length;Uu++){var Fu=Tm[Uu],KS=Fu.toLowerCase(),ZS=Fu[0].toUpperCase()+Fu.slice(1);xr(KS,"on"+ZS)}xr(V0,"onAnimationEnd");xr(H0,"onAnimationIteration");xr(j0,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(G0,"onTransitionEnd");so("onMouseEnter",["mouseout","mouseover"]);so("onMouseLeave",["mouseout","mouseover"]);so("onPointerEnter",["pointerout","pointerover"]);so("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JS=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function Am(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Ky(i,e,void 0,t),t.currentTarget=null}function X0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Am(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Am(r,a,c),s=l}}}if(cc)throw t=ef,cc=!1,ef=null,t}function rt(t,e){var n=e[df];n===void 0&&(n=e[df]=new Set);var i=t+"__bubble";n.has(i)||($0(e,t,2,!1),n.add(i))}function zu(t,e,n){var i=0;e&&(i|=4),$0(n,t,i,e)}var qa="_reactListening"+Math.random().toString(36).slice(2);function va(t){if(!t[qa]){t[qa]=!0,e0.forEach(function(n){n!=="selectionchange"&&(JS.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qa]||(e[qa]=!0,zu("selectionchange",!1,e))}}function $0(t,e,n,i){switch(P0(e)){case 1:var r=fS;break;case 4:r=hS;break;default:r=kh}n=r.bind(null,e,n,t),r=void 0,!Qd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ku(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}g0(function(){var c=s,f=Ih(n),d=[];e:{var h=W0.get(t);if(h!==void 0){var p=Bh,v=t;switch(t){case"keypress":if(Gl(n)===0)break e;case"keydown":case"keyup":p=bS;break;case"focusin":v="focus",p=Lu;break;case"focusout":v="blur",p=Lu;break;case"beforeblur":case"afterblur":p=Lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=LS;break;case V0:case H0:case j0:p=_S;break;case G0:p=DS;break;case"scroll":p=pS;break;case"wheel":p=US;break;case"copy":case"cut":case"paste":p=SS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=gm}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?h!==null?h+"Capture":null:h;y=[];for(var _=c,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=da(_,u),S!=null&&y.push(xa(_,S,x)))),g)break;_=_.return}0<y.length&&(h=new p(h,v,null,n,f),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Zd&&(v=n.relatedTarget||n.fromElement)&&(Or(v)||v[Li]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=c,v=v?Or(v):null,v!==null&&(g=ss(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(y=pm,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(y=gm,S="onPointerLeave",u="onPointerEnter",_="pointer"),g=p==null?h:ks(p),x=v==null?h:ks(v),h=new y(S,_+"leave",p,n,f),h.target=g,h.relatedTarget=x,S=null,Or(f)===c&&(y=new y(u,_+"enter",v,n,f),y.target=x,y.relatedTarget=g,S=y),g=S,p&&v)t:{for(y=p,u=v,_=0,x=y;x;x=ls(x))_++;for(x=0,S=u;S;S=ls(S))x++;for(;0<_-x;)y=ls(y),_--;for(;0<x-_;)u=ls(u),x--;for(;_--;){if(y===u||u!==null&&y===u.alternate)break t;y=ls(y),u=ls(u)}y=null}else y=null;p!==null&&Cm(d,h,p,y,!1),v!==null&&g!==null&&Cm(d,g,v,y,!0)}}e:{if(h=c?ks(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=HS;else if(_m(h))if(F0)R=XS;else{R=GS;var b=jS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=WS);if(R&&(R=R(t,c))){U0(d,R,n,f);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Xd(h,"number",h.value)}switch(b=c?ks(c):window,t){case"focusin":(_m(b)||b.contentEditable==="true")&&(Fs=b,sf=c,ia=null);break;case"focusout":ia=sf=Fs=null;break;case"mousedown":of=!0;break;case"contextmenu":case"mouseup":case"dragend":of=!1,wm(d,n,f);break;case"selectionchange":if(qS)break;case"keydown":case"keyup":wm(d,n,f)}var A;if(Hh)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Us?D0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(N0&&n.locale!=="ko"&&(Us||P!=="onCompositionStart"?P==="onCompositionEnd"&&Us&&(A=L0()):(Zi=f,Oh="value"in Zi?Zi.value:Zi.textContent,Us=!0)),b=pc(c,P),0<b.length&&(P=new mm(P,t,null,n,f),d.push({event:P,listeners:b}),A?P.data=A:(A=I0(n),A!==null&&(P.data=A)))),(A=zS?kS(t,n):OS(t,n))&&(c=pc(c,"onBeforeInput"),0<c.length&&(f=new mm("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=A))}X0(d,e)})}function xa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=da(t,n),s!=null&&i.unshift(xa(t,s,r)),s=da(t,e),s!=null&&i.push(xa(t,s,r))),t=t.return}return i}function ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Cm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=da(n,s),l!=null&&o.unshift(xa(n,l,a))):r||(l=da(n,s),l!=null&&o.push(xa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var QS=/\r\n?/g,eM=/\u0000|\uFFFD/g;function bm(t){return(typeof t=="string"?t:""+t).replace(QS,`
`).replace(eM,"")}function Ka(t,e,n){if(e=bm(e),bm(t)!==e&&n)throw Error(te(425))}function mc(){}var af=null,lf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,tM=typeof clearTimeout=="function"?clearTimeout:void 0,Rm=typeof Promise=="function"?Promise:void 0,nM=typeof queueMicrotask=="function"?queueMicrotask:typeof Rm<"u"?function(t){return Rm.resolve(null).then(t).catch(iM)}:uf;function iM(t){setTimeout(function(){throw t})}function Ou(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pa(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Pm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wo=Math.random().toString(36).slice(2),ai="__reactFiber$"+wo,_a="__reactProps$"+wo,Li="__reactContainer$"+wo,df="__reactEvents$"+wo,rM="__reactListeners$"+wo,sM="__reactHandles$"+wo;function Or(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Pm(t);t!==null;){if(n=t[ai])return n;t=Pm(t)}return e}t=n,n=t.parentNode}return null}function Da(t){return t=t[ai]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ks(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function Jc(t){return t[_a]||null}var ff=[],Os=-1;function _r(t){return{current:t}}function ot(t){0>Os||(t.current=ff[Os],ff[Os]=null,Os--)}function nt(t,e){Os++,ff[Os]=t.current,t.current=e}var mr={},Jt=_r(mr),dn=_r(!1),Kr=mr;function oo(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function gc(){ot(dn),ot(Jt)}function Lm(t,e,n){if(Jt.current!==mr)throw Error(te(168));nt(Jt,e),nt(dn,n)}function Y0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,jy(t)||"Unknown",r));return ht({},n,i)}function vc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Kr=Jt.current,nt(Jt,t),nt(dn,dn.current),!0}function Nm(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Y0(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,ot(dn),ot(Jt),nt(Jt,t)):ot(dn),nt(dn,n)}var Mi=null,Qc=!1,Bu=!1;function q0(t){Mi===null?Mi=[t]:Mi.push(t)}function oM(t){Qc=!0,q0(t)}function yr(){if(!Bu&&Mi!==null){Bu=!0;var t=0,e=Qe;try{var n=Mi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Mi=null,Qc=!1}catch(r){throw Mi!==null&&(Mi=Mi.slice(t+1)),y0(Uh,yr),r}finally{Qe=e,Bu=!1}}return null}var Bs=[],Vs=0,xc=null,_c=0,Ln=[],Nn=0,Zr=null,wi=1,Ti="";function Dr(t,e){Bs[Vs++]=_c,Bs[Vs++]=xc,xc=t,_c=e}function K0(t,e,n){Ln[Nn++]=wi,Ln[Nn++]=Ti,Ln[Nn++]=Zr,Zr=t;var i=wi;t=Ti;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,wi=1<<32-Qn(e)+r|n<<r|i,Ti=s+t}else wi=1<<s|n<<r|i,Ti=t}function Gh(t){t.return!==null&&(Dr(t,1),K0(t,1,0))}function Wh(t){for(;t===xc;)xc=Bs[--Vs],Bs[Vs]=null,_c=Bs[--Vs],Bs[Vs]=null;for(;t===Zr;)Zr=Ln[--Nn],Ln[Nn]=null,Ti=Ln[--Nn],Ln[Nn]=null,wi=Ln[--Nn],Ln[Nn]=null}var En=null,Mn=null,at=!1,qn=null;function Z0(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:wi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(at){var e=Mn;if(e){var n=e;if(!Dm(t,e)){if(hf(t))throw Error(te(418));e=ir(n.nextSibling);var i=En;e&&Dm(t,e)?Z0(i,n):(t.flags=t.flags&-4097|2,at=!1,En=t)}}else{if(hf(t))throw Error(te(418));t.flags=t.flags&-4097|2,at=!1,En=t}}}function Im(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function Za(t){if(t!==En)return!1;if(!at)return Im(t),at=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=Mn)){if(hf(t))throw J0(),Error(te(418));for(;e;)Z0(t,e),e=ir(e.nextSibling)}if(Im(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?ir(t.stateNode.nextSibling):null;return!0}function J0(){for(var t=Mn;t;)t=ir(t.nextSibling)}function ao(){Mn=En=null,at=!1}function Xh(t){qn===null?qn=[t]:qn.push(t)}var aM=Ui.ReactCurrentBatchConfig;function Io(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Um(t){var e=t._init;return e(t._payload)}function Q0(t){function e(u,_){if(t){var x=u.deletions;x===null?(u.deletions=[_],u.flags|=16):x.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=ar(u,_),u.index=0,u.sibling=null,u}function s(u,_,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<_?(u.flags|=2,_):x):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,x,S){return _===null||_.tag!==6?(_=$u(x,u.mode,S),_.return=u,_):(_=r(_,x),_.return=u,_)}function l(u,_,x,S){var R=x.type;return R===Is?f(u,_,x.props.children,S,x.key):_!==null&&(_.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xi&&Um(R)===_.type)?(S=r(_,x.props),S.ref=Io(u,_,x),S.return=u,S):(S=Zl(x.type,x.key,x.props,null,u.mode,S),S.ref=Io(u,_,x),S.return=u,S)}function c(u,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Yu(x,u.mode,S),_.return=u,_):(_=r(_,x.children||[]),_.return=u,_)}function f(u,_,x,S,R){return _===null||_.tag!==7?(_=Yr(x,u.mode,S,R),_.return=u,_):(_=r(_,x),_.return=u,_)}function d(u,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=$u(""+_,u.mode,x),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:return x=Zl(_.type,_.key,_.props,null,u.mode,x),x.ref=Io(u,null,_),x.return=u,x;case Ds:return _=Yu(_,u.mode,x),_.return=u,_;case Xi:var S=_._init;return d(u,S(_._payload),x)}if($o(_)||Ro(_))return _=Yr(_,u.mode,x,null),_.return=u,_;Ja(u,_)}return null}function h(u,_,x,S){var R=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:a(u,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return x.key===R?l(u,_,x,S):null;case Ds:return x.key===R?c(u,_,x,S):null;case Xi:return R=x._init,h(u,_,R(x._payload),S)}if($o(x)||Ro(x))return R!==null?null:f(u,_,x,S,null);Ja(u,x)}return null}function p(u,_,x,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,a(_,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Va:return u=u.get(S.key===null?x:S.key)||null,l(_,u,S,R);case Ds:return u=u.get(S.key===null?x:S.key)||null,c(_,u,S,R);case Xi:var b=S._init;return p(u,_,x,b(S._payload),R)}if($o(S)||Ro(S))return u=u.get(x)||null,f(_,u,S,R,null);Ja(_,S)}return null}function v(u,_,x,S){for(var R=null,b=null,A=_,P=_=0,E=null;A!==null&&P<x.length;P++){A.index>P?(E=A,A=null):E=A.sibling;var M=h(u,A,x[P],S);if(M===null){A===null&&(A=E);break}t&&A&&M.alternate===null&&e(u,A),_=s(M,_,P),b===null?R=M:b.sibling=M,b=M,A=E}if(P===x.length)return n(u,A),at&&Dr(u,P),R;if(A===null){for(;P<x.length;P++)A=d(u,x[P],S),A!==null&&(_=s(A,_,P),b===null?R=A:b.sibling=A,b=A);return at&&Dr(u,P),R}for(A=i(u,A);P<x.length;P++)E=p(A,u,P,x[P],S),E!==null&&(t&&E.alternate!==null&&A.delete(E.key===null?P:E.key),_=s(E,_,P),b===null?R=E:b.sibling=E,b=E);return t&&A.forEach(function(w){return e(u,w)}),at&&Dr(u,P),R}function y(u,_,x,S){var R=Ro(x);if(typeof R!="function")throw Error(te(150));if(x=R.call(x),x==null)throw Error(te(151));for(var b=R=null,A=_,P=_=0,E=null,M=x.next();A!==null&&!M.done;P++,M=x.next()){A.index>P?(E=A,A=null):E=A.sibling;var w=h(u,A,M.value,S);if(w===null){A===null&&(A=E);break}t&&A&&w.alternate===null&&e(u,A),_=s(w,_,P),b===null?R=w:b.sibling=w,b=w,A=E}if(M.done)return n(u,A),at&&Dr(u,P),R;if(A===null){for(;!M.done;P++,M=x.next())M=d(u,M.value,S),M!==null&&(_=s(M,_,P),b===null?R=M:b.sibling=M,b=M);return at&&Dr(u,P),R}for(A=i(u,A);!M.done;P++,M=x.next())M=p(A,u,P,M.value,S),M!==null&&(t&&M.alternate!==null&&A.delete(M.key===null?P:M.key),_=s(M,_,P),b===null?R=M:b.sibling=M,b=M);return t&&A.forEach(function(I){return e(u,I)}),at&&Dr(u,P),R}function g(u,_,x,S){if(typeof x=="object"&&x!==null&&x.type===Is&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:e:{for(var R=x.key,b=_;b!==null;){if(b.key===R){if(R=x.type,R===Is){if(b.tag===7){n(u,b.sibling),_=r(b,x.props.children),_.return=u,u=_;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xi&&Um(R)===b.type){n(u,b.sibling),_=r(b,x.props),_.ref=Io(u,b,x),_.return=u,u=_;break e}n(u,b);break}else e(u,b);b=b.sibling}x.type===Is?(_=Yr(x.props.children,u.mode,S,x.key),_.return=u,u=_):(S=Zl(x.type,x.key,x.props,null,u.mode,S),S.ref=Io(u,_,x),S.return=u,u=S)}return o(u);case Ds:e:{for(b=x.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(u,_.sibling),_=r(_,x.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Yu(x,u.mode,S),_.return=u,u=_}return o(u);case Xi:return b=x._init,g(u,_,b(x._payload),S)}if($o(x))return v(u,_,x,S);if(Ro(x))return y(u,_,x,S);Ja(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,x),_.return=u,u=_):(n(u,_),_=$u(x,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return g}var lo=Q0(!0),ex=Q0(!1),yc=_r(null),Sc=null,Hs=null,$h=null;function Yh(){$h=Hs=Sc=null}function qh(t){var e=yc.current;ot(yc),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Qs(t,e){Sc=t,$h=Hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if($h!==t)if(t={context:t,memoizedValue:e,next:null},Hs===null){if(Sc===null)throw Error(te(308));Hs=t,Sc.dependencies={lanes:0,firstContext:t}}else Hs=Hs.next=t;return e}var Br=null;function Kh(t){Br===null?Br=[t]:Br.push(t)}function tx(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ni(t,i)}function Ni(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function nx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ri(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ni(t,n)}return r=i.interleaved,r===null?(e.next=e,Kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ni(t,n)}function Wl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}function Fm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Mc(t,e,n,i){var r=t.updateQueue;$i=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,p=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=ht({},d,h);break e;case 2:$i=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=d}}function zm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ia={},ui=_r(Ia),ya=_r(Ia),Sa=_r(Ia);function Vr(t){if(t===Ia)throw Error(te(174));return t}function Jh(t,e){switch(nt(Sa,e),nt(ya,t),nt(ui,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yd(e,t)}ot(ui),nt(ui,e)}function co(){ot(ui),ot(ya),ot(Sa)}function ix(t){Vr(Sa.current);var e=Vr(ui.current),n=Yd(e,t.type);e!==n&&(nt(ya,t),nt(ui,n))}function Qh(t){ya.current===t&&(ot(ui),ot(ya))}var ct=_r(0);function Ec(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vu=[];function ep(){for(var t=0;t<Vu.length;t++)Vu[t]._workInProgressVersionPrimary=null;Vu.length=0}var Xl=Ui.ReactCurrentDispatcher,Hu=Ui.ReactCurrentBatchConfig,Jr=0,dt=null,Lt=null,zt=null,wc=!1,ra=!1,Ma=0,lM=0;function Wt(){throw Error(te(321))}function tp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function np(t,e,n,i,r,s){if(Jr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Xl.current=t===null||t.memoizedState===null?fM:hM,t=n(i,r),ra){s=0;do{if(ra=!1,Ma=0,25<=s)throw Error(te(301));s+=1,zt=Lt=null,e.updateQueue=null,Xl.current=pM,t=n(i,r)}while(ra)}if(Xl.current=Tc,e=Lt!==null&&Lt.next!==null,Jr=0,zt=Lt=dt=null,wc=!1,e)throw Error(te(300));return t}function ip(){var t=Ma!==0;return Ma=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?dt.memoizedState=zt=t:zt=zt.next=t,zt}function Bn(){if(Lt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=zt===null?dt.memoizedState:zt.next;if(e!==null)zt=e,Lt=t;else{if(t===null)throw Error(te(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},zt===null?dt.memoizedState=zt=t:zt=zt.next=t}return zt}function Ea(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=Bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Jr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,dt.lanes|=f,Qr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,Qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gu(t){var e=Bn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function rx(){}function sx(t,e){var n=dt,i=Bn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,rp(lx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,wa(9,ax.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(te(349));Jr&30||ox(n,e,r)}return r}function ox(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ax(t,e,n,i){e.value=n,e.getSnapshot=i,cx(e)&&ux(t)}function lx(t,e,n){return n(function(){cx(e)&&ux(t)})}function cx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function ux(t){var e=Ni(t,1);e!==null&&ei(e,t,1,-1)}function km(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=dM.bind(null,dt,t),[e.memoizedState,t]}function wa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function dx(){return Bn().memoizedState}function $l(t,e,n,i){var r=ri();dt.flags|=t,r.memoizedState=wa(1|e,n,void 0,i===void 0?null:i)}function eu(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&tp(i,o.deps)){r.memoizedState=wa(e,n,s,i);return}}dt.flags|=t,r.memoizedState=wa(1|e,n,s,i)}function Om(t,e){return $l(8390656,8,t,e)}function rp(t,e){return eu(2048,8,t,e)}function fx(t,e){return eu(4,2,t,e)}function hx(t,e){return eu(4,4,t,e)}function px(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function mx(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,px.bind(null,e,t),n)}function sp(){}function gx(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function vx(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&tp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function xx(t,e,n){return Jr&21?(ti(n,e)||(n=E0(),dt.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function cM(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=Hu.transition;Hu.transition={};try{t(!1),e()}finally{Qe=n,Hu.transition=i}}function _x(){return Bn().memoizedState}function uM(t,e,n){var i=or(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},yx(t))Sx(e,n);else if(n=tx(t,e,n,i),n!==null){var r=nn();ei(n,t,i,r),Mx(n,e,i)}}function dM(t,e,n){var i=or(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(yx(t))Sx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,Kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=tx(t,e,r,i),n!==null&&(r=nn(),ei(n,t,i,r),Mx(n,e,i))}}function yx(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Sx(t,e){ra=wc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Fh(t,n)}}var Tc={readContext:On,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},fM={readContext:On,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:Om,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,$l(4194308,4,px.bind(null,e,t),n)},useLayoutEffect:function(t,e){return $l(4194308,4,t,e)},useInsertionEffect:function(t,e){return $l(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=uM.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:km,useDebugValue:sp,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=km(!1),e=t[0];return t=cM.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=ri();if(at){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ot===null)throw Error(te(349));Jr&30||ox(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Om(lx.bind(null,i,s,t),[t]),i.flags|=2048,wa(9,ax.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=Ot.identifierPrefix;if(at){var n=Ti,i=wi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hM={readContext:On,useCallback:gx,useContext:On,useEffect:rp,useImperativeHandle:mx,useInsertionEffect:fx,useLayoutEffect:hx,useMemo:vx,useReducer:ju,useRef:dx,useState:function(){return ju(Ea)},useDebugValue:sp,useDeferredValue:function(t){var e=Bn();return xx(e,Lt.memoizedState,t)},useTransition:function(){var t=ju(Ea)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:rx,useSyncExternalStore:sx,useId:_x,unstable_isNewReconciler:!1},pM={readContext:On,useCallback:gx,useContext:On,useEffect:rp,useImperativeHandle:mx,useInsertionEffect:fx,useLayoutEffect:hx,useMemo:vx,useReducer:Gu,useRef:dx,useState:function(){return Gu(Ea)},useDebugValue:sp,useDeferredValue:function(t){var e=Bn();return Lt===null?e.memoizedState=t:xx(e,Lt.memoizedState,t)},useTransition:function(){var t=Gu(Ea)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:rx,useSyncExternalStore:sx,useId:_x,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var tu={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=or(t),s=Ri(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(ei(e,t,r,i),Wl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=or(t),s=Ri(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(ei(e,t,r,i),Wl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=or(t),r=Ri(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(ei(e,t,i,n),Wl(e,t,i))}};function Bm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ga(n,i)||!ga(r,s):!0}function Ex(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=fn(e)?Kr:Jt.current,i=e.contextTypes,s=(i=i!=null)?oo(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&tu.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Zh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=fn(e)?Kr:Jt.current,r.context=oo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tu.enqueueReplaceState(r,r.state,null),Mc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function uo(t,e){try{var n="",i=e;do n+=Hy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mM=typeof WeakMap=="function"?WeakMap:Map;function wx(t,e,n){n=Ri(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cc||(Cc=!0,bf=i),xf(t,e)},n}function Tx(t,e,n){n=Ri(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new mM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=RM.bind(null,t,e,n),e.then(t,t))}function jm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ri(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var gM=Ui.ReactCurrentOwner,un=!1;function tn(t,e,n,i){e.child=t===null?ex(e,null,n,i):lo(e,t.child,n,i)}function Wm(t,e,n,i,r){n=n.render;var s=e.ref;return Qs(e,r),i=np(t,e,n,i,s,r),n=ip(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(at&&n&&Gh(e),e.flags|=1,tn(t,e,i,r),e.child)}function Xm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ax(t,e,s,i,r)):(t=Zl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(o,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ax(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ga(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Di(t,e,r)}return _f(t,e,n,i,r)}function Cx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},nt(Gs,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,nt(Gs,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,nt(Gs,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,nt(Gs,yn),yn|=i;return tn(t,e,r,n),e.child}function bx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _f(t,e,n,i,r){var s=fn(n)?Kr:Jt.current;return s=oo(e,s),Qs(e,r),n=np(t,e,n,i,s,r),i=ip(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(at&&i&&Gh(e),e.flags|=1,tn(t,e,n,r),e.child)}function $m(t,e,n,i,r){if(fn(n)){var s=!0;vc(e)}else s=!1;if(Qs(e,r),e.stateNode===null)Yl(t,e),Ex(e,n,i),vf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=fn(n)?Kr:Jt.current,c=oo(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Vm(e,o,i,c),$i=!1;var h=e.memoizedState;o.state=h,Mc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||$i?(typeof f=="function"&&(gf(e,n,f,i),l=e.memoizedState),(a=$i||Bm(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,nx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=fn(n)?Kr:Jt.current,l=oo(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Vm(e,o,i,l),$i=!1,h=e.memoizedState,o.state=h,Mc(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||dn.current||$i?(typeof p=="function"&&(gf(e,n,p,i),v=e.memoizedState),(c=$i||Bm(e,n,c,i,h,v,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return yf(t,e,n,i,s,r)}function yf(t,e,n,i,r,s){bx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Nm(e,n,!1),Di(t,e,s);i=e.stateNode,gM.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=lo(e,t.child,null,s),e.child=lo(e,null,a,s)):tn(t,e,a,s),e.memoizedState=i.state,r&&Nm(e,n,!0),e.child}function Rx(t){var e=t.stateNode;e.pendingContext?Lm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lm(t,e.context,!1),Jh(t,e.containerInfo)}function Ym(t,e,n,i,r){return ao(),Xh(r),e.flags|=256,tn(t,e,n,i),e.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Px(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),nt(ct,r&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,i,0,null),t=Yr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Mf(n),e.memoizedState=Sf,t):op(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return vM(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ar(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=ar(a,s):(s=Yr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Mf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sf,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function op(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,i){return i!==null&&Xh(i),lo(e,t.child,null,n),t=op(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vM(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wu(Error(te(422))),Qa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ru({mode:"visible",children:i.children},r,0,null),s=Yr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&lo(e,t.child,null,o),e.child.memoizedState=Mf(o),e.memoizedState=Sf,s);if(!(e.mode&1))return Qa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Wu(s,i,void 0),Qa(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ni(t,r),ei(i,t,r,-1))}return fp(),i=Wu(Error(te(421))),Qa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=PM.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=ir(r.nextSibling),En=e,at=!0,qn=null,t!==null&&(Ln[Nn++]=wi,Ln[Nn++]=Ti,Ln[Nn++]=Zr,wi=t.id,Ti=t.overflow,Zr=e),e=op(e,i.children),e.flags|=4096,e)}function qm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mf(t.return,e,n)}function Xu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Lx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qm(t,n,e);else if(t.tag===19)qm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(nt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ec(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ec(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xu(e,!0,n,null,s);break;case"together":Xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xM(t,e,n){switch(e.tag){case 3:Rx(e),ao();break;case 5:ix(e);break;case 1:fn(e.type)&&vc(e);break;case 4:Jh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;nt(yc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(nt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?Px(t,e,n):(nt(ct,ct.current&1),t=Di(t,e,n),t!==null?t.sibling:null);nt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Lx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),nt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Cx(t,e,n)}return Di(t,e,n)}var Nx,Ef,Dx,Ix;Nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ef=function(){};Dx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Vr(ui.current);var s=null;switch(n){case"input":r=Gd(t,r),i=Gd(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=$d(t,r),i=$d(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=mc)}qd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ca.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ca.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&rt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ix=function(t,e,n,i){n!==i&&(e.flags|=4)};function Uo(t,e){if(!at)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _M(t,e,n){var i=e.pendingProps;switch(Wh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return fn(e.type)&&gc(),Xt(e),null;case 3:return i=e.stateNode,co(),ot(dn),ot(Jt),ep(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(Lf(qn),qn=null))),Ef(t,e),Xt(e),null;case 5:Qh(e);var r=Vr(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Dx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Xt(e),null}if(t=Vr(ui.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[_a]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<qo.length;r++)rt(qo[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":rm(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":om(i,s),rt("invalid",i)}qd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ka(i.textContent,a,t),r=["children",""+a]):ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(n){case"input":Ha(i),sm(i,s,!0);break;case"textarea":Ha(i),am(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=mc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=l0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ai]=e,t[_a]=i,Nx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Kd(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<qo.length;r++)rt(qo[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":rm(t,i),r=Gd(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),rt("invalid",t);break;case"textarea":om(t,i),r=$d(t,i),rt("invalid",t);break;default:r=i}qd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?d0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&c0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ua(t,l):typeof l=="number"&&ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&Ph(t,s,l,o))}switch(n){case"input":Ha(t),sm(t,i,!1);break;case"textarea":Ha(t),am(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?qs(t,!!i.multiple,s,!1):i.defaultValue!=null&&qs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=mc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)Ix(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Vr(Sa.current),Vr(ui.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:Ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Xt(e),null;case 13:if(ot(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(at&&Mn!==null&&e.mode&1&&!(e.flags&128))J0(),ao(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ai]=e}else ao(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else qn!==null&&(Lf(qn),qn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Dt===0&&(Dt=3):fp())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return co(),Ef(t,e),t===null&&va(e.stateNode.containerInfo),Xt(e),null;case 10:return qh(e.type._context),Xt(e),null;case 17:return fn(e.type)&&gc(),Xt(e),null;case 19:if(ot(ct),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Uo(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ec(t),o!==null){for(e.flags|=128,Uo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return nt(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>fo&&(e.flags|=128,i=!0,Uo(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ec(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return Xt(e),null}else 2*_t()-s.renderingStartTime>fo&&n!==1073741824&&(e.flags|=128,i=!0,Uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ct.current,nt(ct,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return dp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function yM(t,e){switch(Wh(e),e.tag){case 1:return fn(e.type)&&gc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return co(),ot(dn),ot(Jt),ep(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qh(e),null;case 13:if(ot(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));ao()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ot(ct),null;case 4:return co(),null;case 10:return qh(e.type._context),null;case 22:case 23:return dp(),null;case 24:return null;default:return null}}var el=!1,Kt=!1,SM=typeof WeakSet=="function"?WeakSet:Set,pe=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){xt(t,e,i)}else n.current=null}function wf(t,e,n){try{n()}catch(i){xt(t,e,i)}}var Km=!1;function MM(t,e){if(af=fc,t=O0(),jh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},fc=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,g=v.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Xn(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){xt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return v=Km,Km=!1,v}function sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&wf(e,n,s)}r=r.next}while(r!==i)}}function nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ux(t){var e=t.alternate;e!==null&&(t.alternate=null,Ux(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[_a],delete e[df],delete e[rM],delete e[sM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fx(t){return t.tag===5||t.tag===3||t.tag===4}function Zm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=mc));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var Ht=null,Yn=!1;function ki(t,e,n){for(n=n.child;n!==null;)zx(t,e,n),n=n.sibling}function zx(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(Yc,n)}catch{}switch(n.tag){case 5:Kt||js(n,e);case 6:var i=Ht,r=Yn;Ht=null,ki(t,e,n),Ht=i,Yn=r,Ht!==null&&(Yn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Yn?(t=Ht,n=n.stateNode,t.nodeType===8?Ou(t.parentNode,n):t.nodeType===1&&Ou(t,n),pa(t)):Ou(Ht,n.stateNode));break;case 4:i=Ht,r=Yn,Ht=n.stateNode.containerInfo,Yn=!0,ki(t,e,n),Ht=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wf(n,e,o),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!Kt&&(js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){xt(n,e,a)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,ki(t,e,n),Kt=i):ki(t,e,n);break;default:ki(t,e,n)}}function Jm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new SM),e.forEach(function(i){var r=LM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ht=a.stateNode,Yn=!1;break e;case 3:Ht=a.stateNode.containerInfo,Yn=!0;break e;case 4:Ht=a.stateNode.containerInfo,Yn=!0;break e}a=a.return}if(Ht===null)throw Error(te(160));zx(s,o,r),Ht=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){xt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)kx(e,t),e=e.sibling}function kx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ii(t),i&4){try{sa(3,t,t.return),nu(3,t)}catch(y){xt(t,t.return,y)}try{sa(5,t,t.return)}catch(y){xt(t,t.return,y)}}break;case 1:Hn(e,t),ii(t),i&512&&n!==null&&js(n,n.return);break;case 5:if(Hn(e,t),ii(t),i&512&&n!==null&&js(n,n.return),t.flags&32){var r=t.stateNode;try{ua(r,"")}catch(y){xt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&o0(r,s),Kd(a,o);var c=Kd(a,s);for(o=0;o<l.length;o+=2){var f=l[o],d=l[o+1];f==="style"?d0(r,d):f==="dangerouslySetInnerHTML"?c0(r,d):f==="children"?ua(r,d):Ph(r,f,d,c)}switch(a){case"input":Wd(r,s);break;case"textarea":a0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?qs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?qs(r,!!s.multiple,s.defaultValue,!0):qs(r,!!s.multiple,s.multiple?[]:"",!1))}r[_a]=s}catch(y){xt(t,t.return,y)}}break;case 6:if(Hn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){xt(t,t.return,y)}}break;case 3:if(Hn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(y){xt(t,t.return,y)}break;case 4:Hn(e,t),ii(t);break;case 13:Hn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cp=_t())),i&4&&Jm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||f,Hn(e,t),Kt=c):Hn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(d=pe=f;pe!==null;){switch(h=pe,p=h.child,h.tag){case 0:case 11:case 14:case 15:sa(4,h,h.return);break;case 1:js(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){xt(i,n,y)}}break;case 5:js(h,h.return);break;case 22:if(h.memoizedState!==null){eg(d);continue}}p!==null?(p.return=h,pe=p):eg(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=u0("display",o))}catch(y){xt(t,t.return,y)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(y){xt(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Hn(e,t),ii(t),i&4&&Jm(t);break;case 21:break;default:Hn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fx(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ua(r,""),i.flags&=-33);var s=Zm(t);Cf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Zm(t);Af(t,a,o);break;default:throw Error(te(161))}}catch(l){xt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EM(t,e,n){pe=t,Ox(t)}function Ox(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||el;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=el;var c=Kt;if(el=o,(Kt=l)&&!c)for(pe=r;pe!==null;)o=pe,l=o.child,o.tag===22&&o.memoizedState!==null?tg(r):l!==null?(l.return=o,pe=l):tg(r);for(;s!==null;)pe=s,Ox(s),s=s.sibling;pe=r,el=a,Kt=c}Qm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,pe=s):Qm(t)}}function Qm(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||nu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&zm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&pa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Kt||e.flags&512&&Tf(e)}catch(h){xt(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function eg(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function tg(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{nu(4,e)}catch(l){xt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{Tf(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{Tf(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===t){pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,pe=a;break}pe=e.return}}var wM=Math.ceil,Ac=Ui.ReactCurrentDispatcher,ap=Ui.ReactCurrentOwner,zn=Ui.ReactCurrentBatchConfig,Xe=0,Ot=null,Ct=null,jt=0,yn=0,Gs=_r(0),Dt=0,Ta=null,Qr=0,iu=0,lp=0,oa=null,cn=null,cp=0,fo=1/0,Si=null,Cc=!1,bf=null,sr=null,tl=!1,Ji=null,bc=0,aa=0,Rf=null,ql=-1,Kl=0;function nn(){return Xe&6?_t():ql!==-1?ql:ql=_t()}function or(t){return t.mode&1?Xe&2&&jt!==0?jt&-jt:aM.transition!==null?(Kl===0&&(Kl=E0()),Kl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:P0(t.type)),t):1}function ei(t,e,n,i){if(50<aa)throw aa=0,Rf=null,Error(te(185));La(t,n,i),(!(Xe&2)||t!==Ot)&&(t===Ot&&(!(Xe&2)&&(iu|=n),Dt===4&&qi(t,jt)),hn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(fo=_t()+500,Qc&&yr()))}function hn(t,e){var n=t.callbackNode;aS(t,e);var i=dc(t,t===Ot?jt:0);if(i===0)n!==null&&um(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&um(n),e===1)t.tag===0?oM(ng.bind(null,t)):q0(ng.bind(null,t)),nM(function(){!(Xe&6)&&yr()}),n=null;else{switch(w0(i)){case 1:n=Uh;break;case 4:n=S0;break;case 16:n=uc;break;case 536870912:n=M0;break;default:n=uc}n=$x(n,Bx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Bx(t,e){if(ql=-1,Kl=0,Xe&6)throw Error(te(327));var n=t.callbackNode;if(eo()&&t.callbackNode!==n)return null;var i=dc(t,t===Ot?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Rc(t,i);else{e=i;var r=Xe;Xe|=2;var s=Hx();(Ot!==t||jt!==e)&&(Si=null,fo=_t()+500,$r(t,e));do try{CM();break}catch(a){Vx(t,a)}while(!0);Yh(),Ac.current=s,Xe=r,Ct!==null?e=0:(Ot=null,jt=0,e=Dt)}if(e!==0){if(e===2&&(r=tf(t),r!==0&&(i=r,e=Pf(t,r))),e===1)throw n=Ta,$r(t,0),qi(t,i),hn(t,_t()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!TM(r)&&(e=Rc(t,i),e===2&&(s=tf(t),s!==0&&(i=s,e=Pf(t,s))),e===1))throw n=Ta,$r(t,0),qi(t,i),hn(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Ir(t,cn,Si);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=cp+500-_t(),10<e)){if(dc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=uf(Ir.bind(null,t,cn,Si),e);break}Ir(t,cn,Si);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wM(i/1960))-i,10<i){t.timeoutHandle=uf(Ir.bind(null,t,cn,Si),i);break}Ir(t,cn,Si);break;case 5:Ir(t,cn,Si);break;default:throw Error(te(329))}}}return hn(t,_t()),t.callbackNode===n?Bx.bind(null,t):null}function Pf(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=Rc(t,e),t!==2&&(e=cn,cn=n,e!==null&&Lf(e)),t}function Lf(t){cn===null?cn=t:cn.push.apply(cn,t)}function TM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~lp,e&=~iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function ng(t){if(Xe&6)throw Error(te(327));eo();var e=dc(t,0);if(!(e&1))return hn(t,_t()),null;var n=Rc(t,e);if(t.tag!==0&&n===2){var i=tf(t);i!==0&&(e=i,n=Pf(t,i))}if(n===1)throw n=Ta,$r(t,0),qi(t,e),hn(t,_t()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,cn,Si),hn(t,_t()),null}function up(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(fo=_t()+500,Qc&&yr())}}function es(t){Ji!==null&&Ji.tag===0&&!(Xe&6)&&eo();var e=Xe;Xe|=1;var n=zn.transition,i=Qe;try{if(zn.transition=null,Qe=1,t)return t()}finally{Qe=i,zn.transition=n,Xe=e,!(Xe&6)&&yr()}}function dp(){yn=Gs.current,ot(Gs)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tM(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(Wh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gc();break;case 3:co(),ot(dn),ot(Jt),ep();break;case 5:Qh(i);break;case 4:co();break;case 13:ot(ct);break;case 19:ot(ct);break;case 10:qh(i.type._context);break;case 22:case 23:dp()}n=n.return}if(Ot=t,Ct=t=ar(t.current,null),jt=yn=e,Dt=0,Ta=null,lp=iu=Qr=0,cn=oa=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Br=null}return t}function Vx(t,e){do{var n=Ct;try{if(Yh(),Xl.current=Tc,wc){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wc=!1}if(Jr=0,zt=Lt=dt=null,ra=!1,Ma=0,ap.current=null,n===null||n.return===null){Dt=1,Ta=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=jm(o);if(p!==null){p.flags&=-257,Gm(p,o,a,s,e),p.mode&1&&Hm(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Hm(s,c,e),fp();break e}l=Error(te(426))}}else if(at&&a.mode&1){var g=jm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Gm(g,o,a,s,e),Xh(uo(l,a));break e}}s=l=uo(l,a),Dt!==4&&(Dt=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=wx(s,l,e);Fm(s,u);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(sr===null||!sr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Tx(s,a,e);Fm(s,S);break e}}s=s.return}while(s!==null)}Gx(n)}catch(R){e=R,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function Hx(){var t=Ac.current;return Ac.current=Tc,t===null?Tc:t}function fp(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Ot===null||!(Qr&268435455)&&!(iu&268435455)||qi(Ot,jt)}function Rc(t,e){var n=Xe;Xe|=2;var i=Hx();(Ot!==t||jt!==e)&&(Si=null,$r(t,e));do try{AM();break}catch(r){Vx(t,r)}while(!0);if(Yh(),Xe=n,Ac.current=i,Ct!==null)throw Error(te(261));return Ot=null,jt=0,Dt}function AM(){for(;Ct!==null;)jx(Ct)}function CM(){for(;Ct!==null&&!Jy();)jx(Ct)}function jx(t){var e=Xx(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?Gx(t):Ct=e,ap.current=null}function Gx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yM(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Ct=null;return}}else if(n=_M(n,e,yn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Dt===0&&(Dt=5)}function Ir(t,e,n){var i=Qe,r=zn.transition;try{zn.transition=null,Qe=1,bM(t,e,n,i)}finally{zn.transition=r,Qe=i}return null}function bM(t,e,n,i){do eo();while(Ji!==null);if(Xe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lS(t,s),t===Ot&&(Ct=Ot=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,$x(uc,function(){return eo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=Qe;Qe=1;var a=Xe;Xe|=4,ap.current=null,MM(t,n),kx(n,t),YS(lf),fc=!!af,lf=af=null,t.current=n,EM(n),Qy(),Xe=a,Qe=o,zn.transition=s}else t.current=n;if(tl&&(tl=!1,Ji=t,bc=r),s=t.pendingLanes,s===0&&(sr=null),nS(n.stateNode),hn(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cc)throw Cc=!1,t=bf,bf=null,t;return bc&1&&t.tag!==0&&eo(),s=t.pendingLanes,s&1?t===Rf?aa++:(aa=0,Rf=t):aa=0,yr(),null}function eo(){if(Ji!==null){var t=w0(bc),e=zn.transition,n=Qe;try{if(zn.transition=null,Qe=16>t?16:t,Ji===null)var i=!1;else{if(t=Ji,Ji=null,bc=0,Xe&6)throw Error(te(331));var r=Xe;for(Xe|=4,pe=t.current;pe!==null;){var s=pe,o=s.child;if(pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(pe=c;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:sa(8,f,s)}var d=f.child;if(d!==null)d.return=f,pe=d;else for(;pe!==null;){f=pe;var h=f.sibling,p=f.return;if(Ux(f),f===c){pe=null;break}if(h!==null){h.return=p,pe=h;break}pe=p}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,pe=o;else e:for(;pe!==null;){if(s=pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,pe=u;break e}pe=s.return}}var _=t.current;for(pe=_;pe!==null;){o=pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,pe=x;else e:for(o=_;pe!==null;){if(a=pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:nu(9,a)}}catch(R){xt(a,a.return,R)}if(a===o){pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,pe=S;break e}pe=a.return}}if(Xe=r,yr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(Yc,t)}catch{}i=!0}return i}finally{Qe=n,zn.transition=e}}return!1}function ig(t,e,n){e=uo(n,e),e=wx(t,e,1),t=rr(t,e,1),e=nn(),t!==null&&(La(t,1,e),hn(t,e))}function xt(t,e,n){if(t.tag===3)ig(t,t,n);else for(;e!==null;){if(e.tag===3){ig(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=uo(n,t),t=Tx(e,t,1),e=rr(e,t,1),t=nn(),e!==null&&(La(e,1,t),hn(e,t));break}}e=e.return}}function RM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(jt&n)===n&&(Dt===4||Dt===3&&(jt&130023424)===jt&&500>_t()-cp?$r(t,0):lp|=n),hn(t,e)}function Wx(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=nn();t=Ni(t,e),t!==null&&(La(t,e,n),hn(t,n))}function PM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Wx(t,n)}function LM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Wx(t,n)}var Xx;Xx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,xM(t,e,n);un=!!(t.flags&131072)}else un=!1,at&&e.flags&1048576&&K0(e,_c,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Yl(t,e),t=e.pendingProps;var r=oo(e,Jt.current);Qs(e,n),r=np(null,e,i,t,r,n);var s=ip();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,vc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Zh(e),r.updater=tu,e.stateNode=r,r._reactInternals=e,vf(e,i,t,n),e=yf(null,e,i,!0,s,n)):(e.tag=0,at&&s&&Gh(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Yl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=DM(i),t=Xn(i,t),r){case 0:e=_f(null,e,i,t,n);break e;case 1:e=$m(null,e,i,t,n);break e;case 11:e=Wm(null,e,i,t,n);break e;case 14:e=Xm(null,e,i,Xn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),_f(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),$m(t,e,i,r,n);case 3:e:{if(Rx(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,nx(t,e),Mc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=uo(Error(te(423)),e),e=Ym(t,e,i,n,r);break e}else if(i!==r){r=uo(Error(te(424)),e),e=Ym(t,e,i,n,r);break e}else for(Mn=ir(e.stateNode.containerInfo.firstChild),En=e,at=!0,qn=null,n=ex(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===r){e=Di(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return ix(e),t===null&&pf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cf(i,r)?o=null:s!==null&&cf(i,s)&&(e.flags|=32),bx(t,e),tn(t,e,o,n),e.child;case 6:return t===null&&pf(e),null;case 13:return Px(t,e,n);case 4:return Jh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=lo(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Wm(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,nt(yc,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!dn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ri(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Qs(e,n),r=On(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=Xn(i,e.pendingProps),r=Xn(i.type,r),Xm(t,e,i,r,n);case 15:return Ax(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Xn(i,r),Yl(t,e),e.tag=1,fn(i)?(t=!0,vc(e)):t=!1,Qs(e,n),Ex(e,i,r),vf(e,i,r,n),yf(null,e,i,!0,t,n);case 19:return Lx(t,e,n);case 22:return Cx(t,e,n)}throw Error(te(156,e.tag))};function $x(t,e){return y0(t,e)}function NM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new NM(t,e,n,i)}function hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DM(t){if(typeof t=="function")return hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nh)return 11;if(t===Dh)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Zl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Is:return Yr(n.children,r,s,e);case Lh:o=8,r|=8;break;case Bd:return t=In(12,n,e,r|2),t.elementType=Bd,t.lanes=s,t;case Vd:return t=In(13,n,e,r),t.elementType=Vd,t.lanes=s,t;case Hd:return t=In(19,n,e,r),t.elementType=Hd,t.lanes=s,t;case i0:return ru(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case t0:o=10;break e;case n0:o=9;break e;case Nh:o=11;break e;case Dh:o=14;break e;case Xi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=In(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Yr(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function ru(t,e,n,i){return t=In(22,t,i,e),t.elementType=i0,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function Yu(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bu(0),this.expirationTimes=bu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function pp(t,e,n,i,r,s,o,a,l){return t=new IM(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),t}function UM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ds,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Yx(t){if(!t)return mr;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(fn(n))return Y0(t,n,e)}return e}function qx(t,e,n,i,r,s,o,a,l){return t=pp(n,i,!0,t,r,s,o,a,l),t.context=Yx(null),n=t.current,i=nn(),r=or(n),s=Ri(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,La(t,r,i),hn(t,i),t}function su(t,e,n,i){var r=e.current,s=nn(),o=or(r);return n=Yx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ri(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,o),t!==null&&(ei(t,r,o,s),Wl(t,r,o)),o}function Pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function rg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function mp(t,e){rg(t,e),(t=t.alternate)&&rg(t,e)}function FM(){return null}var Kx=typeof reportError=="function"?reportError:function(t){console.error(t)};function gp(t){this._internalRoot=t}ou.prototype.render=gp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));su(t,e,null,null)};ou.prototype.unmount=gp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;es(function(){su(null,t,null,null)}),e[Li]=null}};function ou(t){this._internalRoot=t}ou.prototype.unstable_scheduleHydration=function(t){if(t){var e=C0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&R0(t)}};function vp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function au(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function sg(){}function zM(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Pc(o);s.call(c)}}var o=qx(e,i,t,0,null,!1,!1,"",sg);return t._reactRootContainer=o,t[Li]=o.current,va(t.nodeType===8?t.parentNode:t),es(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Pc(l);a.call(c)}}var l=pp(t,0,!1,null,null,!1,!1,"",sg);return t._reactRootContainer=l,t[Li]=l.current,va(t.nodeType===8?t.parentNode:t),es(function(){su(e,l,n,i)}),l}function lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Pc(o);a.call(l)}}su(e,o,t,r)}else o=zM(n,e,t,r,i);return Pc(o)}T0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Yo(e.pendingLanes);n!==0&&(Fh(e,n|1),hn(e,_t()),!(Xe&6)&&(fo=_t()+500,yr()))}break;case 13:es(function(){var i=Ni(t,1);if(i!==null){var r=nn();ei(i,t,1,r)}}),mp(t,1)}};zh=function(t){if(t.tag===13){var e=Ni(t,134217728);if(e!==null){var n=nn();ei(e,t,134217728,n)}mp(t,134217728)}};A0=function(t){if(t.tag===13){var e=or(t),n=Ni(t,e);if(n!==null){var i=nn();ei(n,t,e,i)}mp(t,e)}};C0=function(){return Qe};b0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Jd=function(t,e,n){switch(e){case"input":if(Wd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Jc(i);if(!r)throw Error(te(90));s0(i),Wd(i,r)}}}break;case"textarea":a0(t,n);break;case"select":e=n.value,e!=null&&qs(t,!!n.multiple,e,!1)}};p0=up;m0=es;var kM={usingClientEntryPoint:!1,Events:[Da,ks,Jc,f0,h0,up]},Fo={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OM={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=x0(t),t===null?null:t.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||FM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Yc=nl.inject(OM),ci=nl}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kM;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vp(e))throw Error(te(200));return UM(t,e,null,n)};Tn.createRoot=function(t,e){if(!vp(t))throw Error(te(299));var n=!1,i="",r=Kx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=pp(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,va(t.nodeType===8?t.parentNode:t),new gp(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=x0(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return es(t)};Tn.hydrate=function(t,e,n){if(!au(e))throw Error(te(200));return lu(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!vp(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qx(e,null,t,1,n??null,r,!1,s,o),t[Li]=e.current,va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ou(e)};Tn.render=function(t,e,n){if(!au(e))throw Error(te(200));return lu(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!au(t))throw Error(te(40));return t._reactRootContainer?(es(function(){lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};Tn.unstable_batchedUpdates=up;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!au(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return lu(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Zx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zx)}catch(t){console.error(t)}}Zx(),Zv.exports=Tn;var BM=Zv.exports,og=BM;kd.createRoot=og.createRoot,kd.hydrateRoot=og.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Aa.apply(null,arguments)}var Qi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Qi||(Qi={}));const ag="popstate";function VM(t){t===void 0&&(t={});function e(r,s){let{pathname:o="/",search:a="",hash:l=""}=os(r.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Nf("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let o=r.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:Lc(s))}function i(r,s){xp(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return jM(e,n,i,t)}function ft(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function xp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function HM(){return Math.random().toString(36).substr(2,8)}function lg(t,e){return{usr:t.state,key:t.key,idx:e}}function Nf(t,e,n,i){return n===void 0&&(n=null),Aa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?os(e):e,{state:n,key:e&&e.key||i||HM()})}function Lc(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function jM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=Qi.Pop,l=null,c=f();c==null&&(c=0,o.replaceState(Aa({},o.state,{idx:c}),""));function f(){return(o.state||{idx:null}).idx}function d(){a=Qi.Pop;let g=f(),u=g==null?null:g-c;c=g,l&&l({action:a,location:y.location,delta:u})}function h(g,u){a=Qi.Push;let _=Nf(y.location,g,u);n&&n(_,g),c=f()+1;let x=lg(_,c),S=y.createHref(_);try{o.pushState(x,"",S)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function p(g,u){a=Qi.Replace;let _=Nf(y.location,g,u);n&&n(_,g),c=f();let x=lg(_,c),S=y.createHref(_);o.replaceState(x,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function v(g){let u=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof g=="string"?g:Lc(g);return _=_.replace(/ $/,"%20"),ft(u,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,u)}let y={get action(){return a},get location(){return t(r,o)},listen(g){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(ag,d),l=g,()=>{r.removeEventListener(ag,d),l=null}},createHref(g){return e(r,g)},createURL:v,encodeLocation(g){let u=v(g);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:h,replace:p,go(g){return o.go(g)}};return y}var cg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(cg||(cg={}));function GM(t,e,n){return n===void 0&&(n="/"),WM(t,e,n)}function WM(t,e,n,i){let r=typeof e=="string"?os(e):e,s=ho(r.pathname||"/",n);if(s==null)return null;let o=Jx(t);XM(o);let a=null,l=i1(s);for(let c=0;a==null&&c<o.length;++c)a=t1(o[c],l);return a}function Jx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ft(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=lr([i,l.relativePath]),f=n.concat(l);s.children&&s.children.length>0&&(ft(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Jx(s.children,e,f,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:QM(c,s.index),routesMeta:f})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Qx(s.path))r(s,o,l)}),e}function Qx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Qx(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function XM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:e1(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const $M=/^:[\w-]+$/,YM=3,qM=2,KM=1,ZM=10,JM=-2,ug=t=>t==="*";function QM(t,e){let n=t.split("/"),i=n.length;return n.some(ug)&&(i+=JM),e&&(i+=qM),n.filter(r=>!ug(r)).reduce((r,s)=>r+($M.test(s)?YM:s===""?KM:ZM),i)}function e1(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function t1(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,f=s==="/"?e:e.slice(s.length)||"/",d=Df({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},f),h=l.route;if(!d)return null;Object.assign(r,d.params),o.push({params:r,pathname:lr([s,d.pathname]),pathnameBase:o1(lr([s,d.pathnameBase])),route:h}),d.pathnameBase!=="/"&&(s=lr([s,d.pathnameBase]))}return o}function Df(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=n1(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,f,d)=>{let{paramName:h,isOptional:p}=f;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[d];return p&&!v?c[h]=void 0:c[h]=(v||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function n1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),xp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function i1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return xp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ho(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function r1(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?os(t):t,s;return n?(n=e_(n),n.startsWith("/")?s=dg(n.substring(1),"/"):s=dg(n,e)):s=e,{pathname:s,search:a1(i),hash:l1(r)}}function dg(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function qu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function s1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function _p(t,e){let n=s1(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function yp(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=os(t):(r=Aa({},t),ft(!r.pathname||!r.pathname.includes("?"),qu("?","pathname","search",r)),ft(!r.pathname||!r.pathname.includes("#"),qu("#","pathname","hash",r)),ft(!r.search||!r.search.includes("#"),qu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=r1(r,a),c=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||f)&&(l.pathname+="/"),l}const e_=t=>t.replace(/\/\/+/g,"/"),lr=t=>e_(t.join("/")),o1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),a1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,l1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function c1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const t_=["post","put","patch","delete"];new Set(t_);const u1=["get",...t_];new Set(u1);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ca(){return Ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ca.apply(null,arguments)}const cu=$.createContext(null),n_=$.createContext(null),Fi=$.createContext(null),uu=$.createContext(null),hi=$.createContext({outlet:null,matches:[],isDataRoute:!1}),i_=$.createContext(null);function d1(t,e){let{relative:n}=e===void 0?{}:e;To()||ft(!1);let{basename:i,navigator:r}=$.useContext(Fi),{hash:s,pathname:o,search:a}=du(t,{relative:n}),l=o;return i!=="/"&&(l=o==="/"?i:lr([i,o])),r.createHref({pathname:l,search:a,hash:s})}function To(){return $.useContext(uu)!=null}function Sr(){return To()||ft(!1),$.useContext(uu).location}function r_(t){$.useContext(Fi).static||$.useLayoutEffect(t)}function Mr(){let{isDataRoute:t}=$.useContext(hi);return t?C1():f1()}function f1(){To()||ft(!1);let t=$.useContext(cu),{basename:e,future:n,navigator:i}=$.useContext(Fi),{matches:r}=$.useContext(hi),{pathname:s}=Sr(),o=JSON.stringify(_p(r,n.v7_relativeSplatPath)),a=$.useRef(!1);return r_(()=>{a.current=!0}),$.useCallback(function(c,f){if(f===void 0&&(f={}),!a.current)return;if(typeof c=="number"){i.go(c);return}let d=yp(c,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:lr([e,d.pathname])),(f.replace?i.replace:i.push)(d,f.state,f)},[e,i,o,s,t])}const h1=$.createContext(null);function p1(t){let e=$.useContext(hi).outlet;return e&&$.createElement(h1.Provider,{value:t},e)}function m1(){let{matches:t}=$.useContext(hi),e=t[t.length-1];return e?e.params:{}}function du(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=$.useContext(Fi),{matches:r}=$.useContext(hi),{pathname:s}=Sr(),o=JSON.stringify(_p(r,i.v7_relativeSplatPath));return $.useMemo(()=>yp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function g1(t,e){return v1(t,e)}function v1(t,e,n,i){To()||ft(!1);let{navigator:r}=$.useContext(Fi),{matches:s}=$.useContext(hi),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Sr(),f;if(e){var d;let g=typeof e=="string"?os(e):e;l==="/"||(d=g.pathname)!=null&&d.startsWith(l)||ft(!1),f=g}else f=c;let h=f.pathname||"/",p=h;if(l!=="/"){let g=l.replace(/^\//,"").split("/");p="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let v=GM(t,{pathname:p}),y=M1(v&&v.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:lr([l,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:lr([l,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&y?$.createElement(uu.Provider,{value:{location:Ca({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Qi.Pop}},y):y}function x1(){let t=A1(),e=c1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},e),n?$.createElement("pre",{style:r},n):null,null)}const _1=$.createElement(x1,null);class y1 extends $.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?$.createElement(hi.Provider,{value:this.props.routeContext},$.createElement(i_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S1(t){let{routeContext:e,match:n,children:i}=t,r=$.useContext(cu);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),$.createElement(hi.Provider,{value:e},i)}function M1(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let f=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);f>=0||ft(!1),o=o.slice(0,Math.min(o.length,f+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=f),d.route.id){let{loaderData:h,errors:p}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||v){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((f,d,h)=>{let p,v=!1,y=null,g=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||_1,l&&(c<0&&h===0?(b1("route-fallback"),v=!0,g=null):c===h&&(v=!0,g=d.route.hydrateFallbackElement||null)));let u=e.concat(o.slice(0,h+1)),_=()=>{let x;return p?x=y:v?x=g:d.route.Component?x=$.createElement(d.route.Component,null):d.route.element?x=d.route.element:x=f,$.createElement(S1,{match:d,routeContext:{outlet:f,matches:u,isDataRoute:n!=null},children:x})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?$.createElement(y1,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:_(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):_()},null)}var s_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(s_||{}),o_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(o_||{});function E1(t){let e=$.useContext(cu);return e||ft(!1),e}function w1(t){let e=$.useContext(n_);return e||ft(!1),e}function T1(t){let e=$.useContext(hi);return e||ft(!1),e}function a_(t){let e=T1(),n=e.matches[e.matches.length-1];return n.route.id||ft(!1),n.route.id}function A1(){var t;let e=$.useContext(i_),n=w1(),i=a_();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function C1(){let{router:t}=E1(s_.UseNavigateStable),e=a_(o_.UseNavigateStable),n=$.useRef(!1);return r_(()=>{n.current=!0}),$.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Ca({fromRouteId:e},s)))},[t,e])}const fg={};function b1(t,e,n){fg[t]||(fg[t]=!0)}function R1(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function hg(t){let{to:e,replace:n,state:i,relative:r}=t;To()||ft(!1);let{future:s,static:o}=$.useContext(Fi),{matches:a}=$.useContext(hi),{pathname:l}=Sr(),c=Mr(),f=yp(e,_p(a,s.v7_relativeSplatPath),l,r==="path"),d=JSON.stringify(f);return $.useEffect(()=>c(JSON.parse(d),{replace:n,state:i,relative:r}),[c,d,r,n,i]),null}function P1(t){return p1(t.context)}function Wi(t){ft(!1)}function L1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Qi.Pop,navigator:s,static:o=!1,future:a}=t;To()&&ft(!1);let l=e.replace(/^\/*/,"/"),c=$.useMemo(()=>({basename:l,navigator:s,static:o,future:Ca({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=os(i));let{pathname:f="/",search:d="",hash:h="",state:p=null,key:v="default"}=i,y=$.useMemo(()=>{let g=ho(f,l);return g==null?null:{location:{pathname:g,search:d,hash:h,state:p,key:v},navigationType:r}},[l,f,d,h,p,v,r]);return y==null?null:$.createElement(Fi.Provider,{value:c},$.createElement(uu.Provider,{children:n,value:y}))}function N1(t){let{children:e,location:n}=t;return g1(If(e),n)}new Promise(()=>{});function If(t,e){e===void 0&&(e=[]);let n=[];return $.Children.forEach(t,(i,r)=>{if(!$.isValidElement(i))return;let s=[...e,r];if(i.type===$.Fragment){n.push.apply(n,If(i.props.children,s));return}i.type!==Wi&&ft(!1),!i.props.index||!i.props.children||ft(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=If(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nc(){return Nc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Nc.apply(null,arguments)}function l_(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function D1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function I1(t,e){return t.button===0&&(!e||e==="_self")&&!D1(t)}function Uf(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let i=t[n];return e.concat(Array.isArray(i)?i.map(r=>[n,r]):[[n,i]])},[]))}function U1(t,e){let n=Uf(t);return e&&e.forEach((i,r)=>{n.has(r)||e.getAll(r).forEach(s=>{n.append(r,s)})}),n}const F1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],z1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],k1="6";try{window.__reactRouterVersion=k1}catch{}const O1=$.createContext({isTransitioning:!1}),B1="startTransition",pg=Ry[B1];function V1(t){let{basename:e,children:n,future:i,window:r}=t,s=$.useRef();s.current==null&&(s.current=VM({window:r,v5Compat:!0}));let o=s.current,[a,l]=$.useState({action:o.action,location:o.location}),{v7_startTransition:c}=i||{},f=$.useCallback(d=>{c&&pg?pg(()=>l(d)):l(d)},[l,c]);return $.useLayoutEffect(()=>o.listen(f),[o,f]),$.useEffect(()=>R1(i),[i]),$.createElement(L1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const H1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",j1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G1=$.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:f,viewTransition:d}=e,h=l_(e,F1),{basename:p}=$.useContext(Fi),v,y=!1;if(typeof c=="string"&&j1.test(c)&&(v=c,H1))try{let x=new URL(window.location.href),S=c.startsWith("//")?new URL(x.protocol+c):new URL(c),R=ho(S.pathname,p);S.origin===x.origin&&R!=null?c=R+S.search+S.hash:y=!0}catch{}let g=d1(c,{relative:r}),u=$1(c,{replace:o,state:a,target:l,preventScrollReset:f,relative:r,viewTransition:d});function _(x){i&&i(x),x.defaultPrevented||u(x)}return $.createElement("a",Nc({},h,{href:v||g,onClick:y||s?i:_,ref:n,target:l}))}),W1=$.forwardRef(function(e,n){let{"aria-current":i="page",caseSensitive:r=!1,className:s="",end:o=!1,style:a,to:l,viewTransition:c,children:f}=e,d=l_(e,z1),h=du(l,{relative:d.relative}),p=Sr(),v=$.useContext(n_),{navigator:y,basename:g}=$.useContext(Fi),u=v!=null&&q1(h)&&c===!0,_=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,x=p.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;r||(x=x.toLowerCase(),S=S?S.toLowerCase():null,_=_.toLowerCase()),S&&g&&(S=ho(S,g)||S);const R=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let b=x===_||!o&&x.startsWith(_)&&x.charAt(R)==="/",A=S!=null&&(S===_||!o&&S.startsWith(_)&&S.charAt(_.length)==="/"),P={isActive:b,isPending:A,isTransitioning:u},E=b?i:void 0,M;typeof s=="function"?M=s(P):M=[s,b?"active":null,A?"pending":null,u?"transitioning":null].filter(Boolean).join(" ");let w=typeof a=="function"?a(P):a;return $.createElement(G1,Nc({},d,{"aria-current":E,className:M,ref:n,style:w,to:l,viewTransition:c}),typeof f=="function"?f(P):f)});var Ff;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ff||(Ff={}));var mg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(mg||(mg={}));function X1(t){let e=$.useContext(cu);return e||ft(!1),e}function $1(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Mr(),c=Sr(),f=du(t,{relative:o});return $.useCallback(d=>{if(I1(d,n)){d.preventDefault();let h=i!==void 0?i:Lc(c)===Lc(f);l(t,{replace:h,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,f,i,r,n,t,s,o,a])}function Y1(t){let e=$.useRef(Uf(t)),n=$.useRef(!1),i=Sr(),r=$.useMemo(()=>U1(i.search,n.current?null:e.current),[i.search]),s=Mr(),o=$.useCallback((a,l)=>{const c=Uf(typeof a=="function"?a(r):a);n.current=!0,s("?"+c,l)},[s,r]);return[r,o]}function q1(t,e){e===void 0&&(e={});let n=$.useContext(O1);n==null&&ft(!1);let{basename:i}=X1(Ff.useViewTransitionState),r=du(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ho(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=ho(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Df(r.pathname,o)!=null||Df(r.pathname,s)!=null}const K1={},gg=t=>{let e;const n=new Set,i=(f,d)=>{const h=typeof f=="function"?f(e):f;if(!Object.is(h,e)){const p=e;e=d??(typeof h!="object"||h===null)?h:Object.assign({},e,h),n.forEach(v=>v(e,p))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(K1?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Z1=t=>t?gg(t):gg;var c_={exports:{}},u_={},d_={exports:{}},f_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=$;function J1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Q1=typeof Object.is=="function"?Object.is:J1,eE=po.useState,tE=po.useEffect,nE=po.useLayoutEffect,iE=po.useDebugValue;function rE(t,e){var n=e(),i=eE({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return nE(function(){r.value=n,r.getSnapshot=e,Ku(r)&&s({inst:r})},[t,n,e]),tE(function(){return Ku(r)&&s({inst:r}),t(function(){Ku(r)&&s({inst:r})})},[t]),iE(n),n}function Ku(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Q1(t,n)}catch{return!0}}function sE(t,e){return e()}var oE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?sE:rE;f_.useSyncExternalStore=po.useSyncExternalStore!==void 0?po.useSyncExternalStore:oE;d_.exports=f_;var aE=d_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fu=$,lE=aE;function cE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var uE=typeof Object.is=="function"?Object.is:cE,dE=lE.useSyncExternalStore,fE=fu.useRef,hE=fu.useEffect,pE=fu.useMemo,mE=fu.useDebugValue;u_.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=fE(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=pE(function(){function l(p){if(!c){if(c=!0,f=p,p=i(p),r!==void 0&&o.hasValue){var v=o.value;if(r(v,p))return d=v}return d=p}if(v=d,uE(f,p))return v;var y=i(p);return r!==void 0&&r(v,y)?(f=p,v):(f=p,d=y)}var c=!1,f,d,h=n===void 0?null:n;return[function(){return l(e())},h===null?void 0:function(){return l(h())}]},[e,n,i,r]);var a=dE(t,s[0],s[1]);return hE(function(){o.hasValue=!0,o.value=a},[a]),mE(a),a};c_.exports=u_;var gE=c_.exports;const vE=Ov(gE),h_={},{useDebugValue:xE}=Ch,{useSyncExternalStoreWithSelector:_E}=vE;let vg=!1;const yE=t=>t;function SE(t,e=yE,n){(h_?"production":void 0)!=="production"&&n&&!vg&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),vg=!0);const i=_E(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return xE(i),i}const xg=t=>{(h_?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Z1(t):t,n=(i,r)=>SE(e,i,r);return Object.assign(n,e),n},ME=t=>t?xg(t):xg,EE=new Date("2026-07-27T00:00:00"),zo=t=>String(t).padStart(2,"0"),_g=t=>new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime(),wE=_g(new Date)-_g(EE);function qr(t){if(!t)return t;const e=t.includes("T"),n=new Date(e?t:`${t}T00:00:00`);if(Number.isNaN(n.getTime()))return t;const i=new Date(n.getTime()+wE),r=`${i.getFullYear()}-${zo(i.getMonth()+1)}-${zo(i.getDate())}`;return e?`${r}T${zo(i.getHours())}:${zo(i.getMinutes())}:${zo(i.getSeconds())}`:r}function TE(t){var r;const e=qr(t.startedAt),n=((r=t.cloudSharePath.match(/\\\\([A-Z0-9-]+)\\/i))==null?void 0:r[1])??"UAV-A31C",i=`${e.slice(0,10).replace(/-/g,"")}_${e.slice(11,16).replace(":","")}`;return{...t,startedAt:e,landedAt:qr(t.landedAt),siteAckAt:qr(t.siteAckAt),cloudSharePath:`\\\\${n}\\scans\\${i}\\`}}function p_(t){return{...t,recordedAt:qr(t.recordedAt),lastRunAt:t.lastRunAt?qr(t.lastRunAt):null}}const AE=[{id:"T-20260727-01",routeId:"R-03",routeName:"A区",startedAt:"2026-07-27T09:41:02",landedAt:"2026-07-27T09:47:54",durationSec:412,coveragePct:100,status:"success",operator:"操作员·张",siteAckAt:"2026-07-27T09:40:51",waypointDone:24,waypointTotal:24,trackLengthM:186.4,avgSpeedMs:1.4,maxSpeedMs:1.9,returnTrigger:"route_complete",locP95Cm:6.2,cloudCompletePct:97.8,trackCompletePct:99.4,volumeCalcSec:63,volumeErrPct:2.8,cloudSharePath:"\\\\UAV-A31C\\scans\\20260727_0941\\",cloudSizeMb:742,stacks:[{id:"S-A",name:"堆体 A",position:"东侧靠门",cargoType:"bulk",volumeM3:84.6,volumeConfidence:"high",surfaceCoverPct:98,occlusionNote:"四面完整可见，顶面点云密度充足。",layerCount:null,perLayerCount:null,totalCount:null,countConfidence:null},{id:"S-B",name:"堆体 B",position:"中部",cargoType:"bulk",volumeM3:52.3,volumeConfidence:"medium",surfaceCoverPct:91,occlusionNote:"北侧紧贴墙面，该侧壁面由地面基准延伸推算，未直接扫描。",layerCount:null,perLayerCount:null,totalCount:null,countConfidence:null},{id:"S-C",name:"堆体 C",position:"西南角",cargoType:"bulk",volumeM3:31.8,volumeConfidence:"low",surfaceCoverPct:64,occlusionNote:"西侧贴墙、南侧被立柱与输送设备遮挡，堆脚不可见。体积中约 3 成由推算得出。",issue:"occluded",layerCount:null,perLayerCount:null,totalCount:null,countConfidence:null}]},{id:"T-20260724-01",routeId:"R-03",routeName:"A区",startedAt:"2026-07-24T10:05:11",landedAt:"2026-07-24T10:12:07",durationSec:416,coveragePct:100,status:"success",operator:"操作员·张",siteAckAt:"2026-07-24T10:04:58",waypointDone:24,waypointTotal:24,trackLengthM:186.1,avgSpeedMs:1.4,maxSpeedMs:1.9,returnTrigger:"route_complete",locP95Cm:5.9,cloudCompletePct:98.2,trackCompletePct:99.6,volumeCalcSec:58,volumeErrPct:2.6,cloudSharePath:"\\\\UAV-A31C\\scans\\20260724_1005\\",cloudSizeMb:735,stacks:[{id:"S-A",name:"堆体 A",position:"东侧靠门",cargoType:"bulk",volumeM3:83.1,volumeConfidence:"high",surfaceCoverPct:97,occlusionNote:"四面完整可见。",layerCount:null,perLayerCount:null,totalCount:null,countConfidence:null},{id:"S-B",name:"堆体 B",position:"中部",cargoType:"bulk",volumeM3:51.4,volumeConfidence:"medium",surfaceCoverPct:90,occlusionNote:"北侧紧贴墙面，该侧壁面由推算得出。",layerCount:null,perLayerCount:null,totalCount:null,countConfidence:null},{id:"S-C",name:"堆体 C",position:"西南角",cargoType:"bulk",volumeM3:31.7,volumeConfidence:"low",surfaceCoverPct:62,occlusionNote:"西侧贴墙、南侧被立柱遮挡，堆脚不可见。",layerCount:null,perLayerCount:null,totalCount:null,countConfidence:null}]},{id:"T-20260719-02",routeId:"R-02",routeName:"A区西侧",startedAt:"2026-07-19T15:30:44",landedAt:"2026-07-19T15:32:08",durationSec:84,coveragePct:43,status:"aborted",operator:"操作员·王",siteAckAt:"2026-07-19T15:30:20",waypointDone:5,waypointTotal:11,trackLengthM:38.2,avgSpeedMs:1.3,maxSpeedMs:1.6,returnTrigger:"user",locP95Cm:8.4,cloudCompletePct:94.1,trackCompletePct:96,volumeCalcSec:31,volumeErrPct:4.9,cloudSharePath:"\\\\UAV-A31C\\scans\\20260719_1530\\",cloudSizeMb:288,stacks:[{id:"S-B",name:"堆体 B",position:"中部",cargoType:"bulk",volumeM3:44.1,volumeConfidence:"low",surfaceCoverPct:58,occlusionNote:"任务中断，顶面仅扫到约六成，东侧完全缺失。",layerCount:null,perLayerCount:null,totalCount:null,countConfidence:null},{id:"S-C",name:"堆体 C",position:"西南角",cargoType:"bulk",volumeM3:17.3,volumeConfidence:"low",surfaceCoverPct:41,occlusionNote:"任务中断，仅扫到北侧坡面。体积不可用于账务。",issue:"uncovered",layerCount:null,perLayerCount:null,totalCount:null,countConfidence:null}]},{id:"T-20260712-01",routeId:"R-04",routeName:"B区码垛区",startedAt:"2026-07-12T09:12:30",landedAt:"2026-07-12T09:17:08",durationSec:278,coveragePct:100,status:"success",operator:"操作员·张",siteAckAt:"2026-07-12T09:12:14",waypointDone:16,waypointTotal:16,trackLengthM:121.7,avgSpeedMs:1.1,maxSpeedMs:1.4,returnTrigger:"route_complete",locP95Cm:6.8,cloudCompletePct:98.6,trackCompletePct:99.1,volumeCalcSec:47,volumeErrPct:2.1,cloudSharePath:"\\\\UAV-A31C\\scans\\20260712_0912\\",cloudSizeMb:512,stacks:[{id:"K-B1",name:"货位 B1",position:"中部",cargoType:"stacked",volumeM3:62.4,volumeConfidence:"high",surfaceCoverPct:96,occlusionNote:"四面可见，层间断面清晰。",tagType:"qr",tagCode:"PLT-B1-0421",layerCount:6,perLayerCount:70,totalCount:420,countConfidence:"high"},{id:"K-B2",name:"货位 B2",position:"中部偏东",cargoType:"stacked",volumeM3:53.6,volumeConfidence:"high",surfaceCoverPct:95,occlusionNote:"四面可见。",tagType:"qr",tagCode:"PLT-B2-0388",layerCount:6,perLayerCount:60,totalCount:360,countConfidence:"high"},{id:"K-B3",name:"货位 B3",position:"西侧",cargoType:"stacked",volumeM3:41.2,volumeConfidence:"medium",surfaceCoverPct:88,occlusionNote:"西侧贴墙，该侧由推算得出。",tagType:"rfid",tagCode:"RF-0007A2",layerCount:4,perLayerCount:70,totalCount:280,countConfidence:"medium"},{id:"K-B4",name:"货位 B4",position:"北侧",cargoType:"stacked",volumeM3:26.8,volumeConfidence:"medium",surfaceCoverPct:85,occlusionNote:"顶层码放不齐，最上层计数存在偏差。",issue:"unclear",tagType:"qr",tagCode:null,layerCount:3,perLayerCount:60,totalCount:180,countConfidence:"medium"}]}],CE=AE.map(TE),Dc=[{id:"M-01",name:"一号仓 A区",version:2,builtAt:"2026-07-02",cloudSizeMb:8.6},{id:"M-02",name:"一号仓 B区",version:1,builtAt:"2026-07-05",cloudSizeMb:6.2},{id:"M-03",name:"二号仓 平房仓",version:1,builtAt:"2026-07-10",cloudSizeMb:11.4},{id:"M-04",name:"三号仓 通廊仓",version:1,builtAt:"2026-07-14",cloudSizeMb:7.8},{id:"M-05",name:"四号仓 方仓",version:1,builtAt:"2026-07-18",cloudSizeMb:9.1}],bE=[{id:"R-03",sceneId:"M-01",version:3,name:"A区",scanTags:["全覆盖","高空扫"],recordedAt:"2026-07-15",recordedBy:"运维·李",note:"从东侧门起飞，贴顶棚下方 5.2m 高度往返扫。西南角有立柱，航线已绕开。适用于 A 区三个堆位。",waypointCount:24,etaMin:7,minClearanceM:6.5,altitudeM:5.2,lastRunAt:"2026-07-24",lastRunStatus:"success",runs:9,successRuns:8},{id:"R-02",sceneId:"M-01",version:2,name:"A区西侧",scanTags:["补扫"],recordedAt:"2026-07-03",recordedBy:"运维·李",note:"只覆盖西侧两个堆位。离堆较近，堆高变化后需重录。",waypointCount:11,etaMin:3,minClearanceM:.9,altitudeM:4,lastRunAt:"2026-07-19",lastRunStatus:"aborted",runs:4,successRuns:2},{id:"R-04",sceneId:"M-02",version:1,name:"B区码垛区",scanTags:["分层扫"],recordedAt:"2026-07-07",recordedBy:"运维·李",note:"B 区四个货位，逐排低速扫。码垛较整齐，可出分层计数。货位间通道窄。",waypointCount:16,etaMin:5,minClearanceM:3.2,altitudeM:4.4,lastRunAt:"2026-07-12",lastRunStatus:"success",runs:3,successRuns:3},{id:"R-06",sceneId:"M-02",version:1,name:"B区托盘区",scanTags:["低空扫"],recordedAt:"2026-07-18",recordedBy:"运维·李",note:"托盘区低空慢扫，重点覆盖靠墙两列。",waypointCount:14,etaMin:4,minClearanceM:2.8,altitudeM:4.2,lastRunAt:"2026-07-21",lastRunStatus:"success",runs:2,successRuns:2},{id:"R-07",sceneId:"M-03",version:2,name:"二号仓全景",scanTags:["全覆盖"],recordedAt:"2026-07-11",recordedBy:"运维·王",note:"平房仓整仓覆盖，仓体较高，按 6.4m 高度扫。",waypointCount:28,etaMin:9,minClearanceM:1.6,altitudeM:6.4,lastRunAt:"2026-07-25",lastRunStatus:"success",runs:6,successRuns:5},{id:"R-08",sceneId:"M-03",version:1,name:"二号仓东半区",scanTags:["高空扫"],recordedAt:"2026-07-16",recordedBy:"运维·王",note:"只覆盖东半区两个大堆，适合日常快检。",waypointCount:15,etaMin:5,minClearanceM:2.2,altitudeM:6.8,lastRunAt:"2026-07-16",lastRunStatus:"success",runs:1,successRuns:1},{id:"R-09",sceneId:"M-04",version:3,name:"通廊纵扫",scanTags:["全覆盖","低空扫"],recordedAt:"2026-07-15",recordedBy:"运维·李",note:"狭长通廊沿中线往返，注意两侧墙距较近。",waypointCount:20,etaMin:6,minClearanceM:1.2,altitudeM:4.6,lastRunAt:"2026-07-26",lastRunStatus:"success",runs:7,successRuns:7},{id:"R-10",sceneId:"M-05",version:1,name:"方仓环扫",scanTags:["全覆盖"],recordedAt:"2026-07-22",recordedBy:"运维·王",note:"五个堆位环形覆盖，中央小堆最后补扫。",waypointCount:22,etaMin:7,minClearanceM:1.8,altitudeM:5.4,lastRunAt:null,lastRunStatus:null,runs:0,successRuns:0}],ba=bE.map(p_);p_({id:"R-05",sceneId:"M-01",version:1,name:"A区东侧",scanTags:["低空扫"],recordedAt:"2026-07-27",recordedBy:"运维·李",note:"",waypointCount:18,etaMin:5,minClearanceM:4.1,altitudeM:4.8,lastRunAt:null,lastRunStatus:null,runs:0,successRuns:0});`${qr("2026-07-27")}`;function RE(t){const e=t.name||"未命名航线";return t.scanTags.length?`${e} · ${t.scanTags.join("/")}`:e}function Sp(t){let e=2166136261;for(let n=0;n<t.length;n++)e=Math.imul(e^t.charCodeAt(n),16777619)>>>0;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}const PE={"R-03":[{id:"S-A",name:"堆体 A",position:"东侧靠门",base:88.2,drift:-1.2},{id:"S-B",name:"堆体 B",position:"中部",base:49.6,drift:.9},{id:"S-C",name:"堆体 C",position:"西南角",base:32.4,drift:-.2}],"R-07":[{id:"S-A",name:"堆体 A",position:"南侧",base:121.4,drift:-3.8},{id:"S-B",name:"堆体 B",position:"中部偏南",base:96.2,drift:-2.1},{id:"S-C",name:"堆体 C",position:"中部偏北",base:74.8,drift:.4},{id:"S-D",name:"堆体 D",position:"北侧",base:58.1,drift:6.5}],"R-08":[{id:"S-A",name:"堆体 A",position:"东南",base:118.6,drift:0},{id:"S-B",name:"堆体 B",position:"东北",base:92.9,drift:0}],"R-09":[{id:"S-A",name:"堆体 A",position:"通廊南段",base:66.3,drift:-.8},{id:"S-B",name:"堆体 B",position:"通廊北段",base:41.7,drift:2.3}],"R-06":[{id:"K-P1",name:"货位 P1",position:"靠墙东列",base:38.4,drift:0,stacked:{layers:5,per:48}},{id:"K-P2",name:"货位 P2",position:"靠墙西列",base:36.9,drift:0,stacked:{layers:5,per:48}},{id:"K-P3",name:"货位 P3",position:"中列",base:22.1,drift:0,stacked:{layers:3,per:48}}]},LE={"R-03":[{date:"2026-07-03",time:"09:32:10",k:0,device:"UAV-A31C",operator:"操作员·张"},{date:"2026-07-10",time:"09:38:44",k:1,device:"UAV-A31C",operator:"操作员·张"},{date:"2026-07-17",time:"10:02:19",k:2,device:"UAV-A31C",operator:"操作员·王"}],"R-07":[{date:"2026-07-11",time:"14:10:05",k:0,device:"UAV-B12",operator:"操作员·王"},{date:"2026-07-18",time:"14:21:37",k:1,device:"UAV-B12",operator:"操作员·王"},{date:"2026-07-25",time:"13:58:52",k:2,device:"UAV-B12",operator:"操作员·王"}],"R-08":[{date:"2026-07-16",time:"16:05:30",k:0,device:"UAV-B12",operator:"操作员·王"}],"R-09":[{date:"2026-07-12",time:"11:20:14",k:0,device:"UAV-C08",operator:"操作员·李"},{date:"2026-07-19",time:"11:15:48",k:1,device:"UAV-C08",operator:"操作员·李"},{date:"2026-07-26",time:"11:31:02",k:2,device:"UAV-C08",operator:"操作员·李"}],"R-06":[{date:"2026-07-21",time:"10:44:23",k:0,device:"UAV-A31C",operator:"操作员·张"}]};function Ns(t){return String(t).padStart(2,"0")}function yg(t,e){const n=new Date(t);return n.setSeconds(n.getSeconds()+e),`${n.getFullYear()}-${Ns(n.getMonth()+1)}-${Ns(n.getDate())}T${Ns(n.getHours())}:${Ns(n.getMinutes())}:${Ns(n.getSeconds())}`}function NE(t,e,n){const i=ba.find(d=>d.id===t),r=`T-${e.date.replace(/-/g,"")}-${Ns(n)}`,s=Sp(r),o=qr(`${e.date}T${e.time}`),a=Math.round(i.etaMin*60*(.94+s()*.12)),c=PE[t].map((d,h)=>{const p=(s()-.5)*1.6,v=Math.round((d.base+d.drift*e.k+p)*10)/10,y=Math.round(86+s()*12),g=y>=94?"high":y>=88?"medium":"low",u={id:d.id,name:d.name,position:d.position,cargoType:d.stacked?"stacked":"bulk",volumeM3:v,volumeConfidence:g,surfaceCoverPct:y,occlusionNote:g==="high"?"四面完整可见，顶面点云密度充足。":g==="medium"?"一侧贴墙，该侧壁面由地面基准延伸推算。":"两侧受立柱与设备遮挡，堆脚不可见，体积部分由推算得出。",issue:g==="low"?"occluded":null,layerCount:null,perLayerCount:null,totalCount:null,countConfidence:null};return d.stacked&&(u.layerCount=d.stacked.layers,u.perLayerCount=d.stacked.per,u.totalCount=d.stacked.layers*d.stacked.per,u.countConfidence=g==="low"?"medium":"high",u.tagType=h===2?"rfid":"qr",u.tagCode=h===2?`RF-00${(n*37+h).toString(16).toUpperCase().padStart(4,"0")}`:`PLT-${d.id.slice(2)}-0${300+n*7+h}`),u}),f=`${o.slice(0,10).replace(/-/g,"")}_${o.slice(11,16).replace(":","")}`;return{id:r,routeId:t,routeName:RE(i),startedAt:o,landedAt:yg(o,a),durationSec:a,coveragePct:100,status:"success",operator:e.operator,siteAckAt:yg(o,-14),waypointDone:i.waypointCount,waypointTotal:i.waypointCount,trackLengthM:Math.round(i.waypointCount*7.6*(.95+s()*.1)*10)/10,avgSpeedMs:1.4,maxSpeedMs:1.9,returnTrigger:"route_complete",locP95Cm:Math.round((5.4+s()*1.8)*10)/10,cloudCompletePct:Math.round((97+s()*2)*10)/10,trackCompletePct:Math.round((99+s()*.8)*10)/10,volumeCalcSec:Math.round(40+s()*30),volumeErrPct:Math.round((2+s()*1.4)*10)/10,cloudSharePath:`\\\\${e.device}\\scans\\${f}\\`,cloudSizeMb:Math.round(480+s()*400),stacks:c}}function DE(){const t=[];let e=3;for(const[n,i]of Object.entries(LE))for(const r of i)t.push(NE(n,r,e++));return t}const Hr=[...CE,...DE()].sort((t,e)=>e.startedAt.localeCompare(t.startedAt)),IE=Hr.map(t=>t.id).filter(t=>t!=="T-20260727-01");function Ic(t){const e=t.cloudSharePath.match(/\\\\([A-Z0-9-]+)\\/i);return e?e[1]:"UAV-A31C"}const UE="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function cr(t){let e=2166136261,n=16777619;for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);e=Math.imul(e^s,16777619)>>>0,n=Math.imul(n+s,2246822519)>>>0}let i="";for(let r=0;r<8;r++){const s=r<4?e>>>r*5&31:n>>>(r-4)*5&31;i+=UE[s]}return`UAV-${i.slice(0,4)}-${i.slice(4)}`}function m_(t){const e=t.trim().toUpperCase().replace(/[－—–\s]/g,"-").replace(/[^A-Z0-9-]/g,""),n=e.replace(/^UAV-?/,"").replace(/-/g,"");return n.length!==8?e:`UAV-${n.slice(0,4)}-${n.slice(4)}`}const g_=/^UAV-[A-Z2-9]{4}-[A-Z2-9]{4}$/,v_=7;function cs(t,e){const n=new Date(t);n.setSeconds(n.getSeconds()+e);const i=r=>String(r).padStart(2,"0");return`${i(n.getHours())}:${i(n.getMinutes())}:${i(n.getSeconds())}`}const Sg=new Map;function FE(t,e){var _;const n=Sg.get(t.id);if(n)return n;const i=Sp(`${t.id}-proc`),r=(e==null?void 0:e.altitudeM)??5.2,s=t.durationSec,o=t.waypointDone,a=t.status!=="success",l=12,c=s-l-(a?8:26),f=[];for(let x=1;x<=o;x++){const S=Math.round(l+c*x/o),R=x%2===0;f.push({idx:x,t:S,time:cs(t.startedAt,S),photo:R,dwellS:R?Math.round(5+i()*2):0})}const d=t.id==="T-20260727-01"?((_=f[8])==null?void 0:_.t)+6:null,h=[],p=82+i()*6;for(let x=0;x<=s;x+=5){const S=x/s;let R=x<l?.4:t.avgSpeedMs+Math.sin(x/7)*.25+(i()-.5)*.15;f.find(P=>P.photo&&x>=P.t&&x<P.t+P.dwellS)&&(R=.05+i()*.08),d!==null&&x>=d&&x<d+18&&(R=0),x>s-20&&(R=Math.max(.2,t.avgSpeedMs*((s-x)/20)));const A=x<l?.3+(r-.3)*(x/l):x>s-14?r*Math.max(.05,(s-x)/14):r+Math.sin(x/11)*.06;h.push({t:x,battery:Math.round((p-S*(s/60)*3.1-i()*.3)*10)/10,speed:Math.round(Math.max(0,R)*100)/100,alt:Math.round(A*100)/100,rtt:Math.round(18+i()*14+(x%60<5?40:0))})}const v=[{time:cs(t.startedAt,0),type:"takeoff",label:"起飞，目标高度 "+r.toFixed(1)+"m"}];for(const x of f)v.push({time:x.time,type:"waypoint_reached",label:`到达航点 ${x.idx}${x.photo?"，悬停拍照":""}`}),d!==null&&x.idx===9&&(v.push({time:cs(t.startedAt,d),type:"hover_obstacle",label:"前方 2.1m 检测到障碍物，已悬停"}),v.push({time:cs(t.startedAt,d+18),type:"resume",label:"障碍物离开，继续飞行"}));const y={route_complete:"航线执行完成，沿原航线返航",user:"操作员长按返航，任务中断",auto_timeout:"悬停超时，自动返航",safety:"低电量，安全返航",loc_lost:"定位丢失，原地降落",rc_override:"遥控器接管，任务中断"};v.push({time:cs(t.startedAt,s-(a?8:26)),type:"return_start",label:y[t.returnTrigger]}),v.push({time:cs(t.startedAt,s),type:"landed",label:"降落，起降点误差 "+(3+Math.round(i()*5))+"cm"});const g=[{name:"数据回传",sec:Math.round(t.volumeCalcSec*.3),ok:!0},{name:"点云处理",sec:Math.round(t.volumeCalcSec*.45),ok:!0},{name:"结果计算",sec:Math.round(t.volumeCalcSec*.25),ok:!0}],u={telemetry:h,waypoints:f,events:v,stages:g};return Sg.set(t.id,u),u}function x_(t){return Math.max(6,t.waypointDone-2)}function zE(t){const e=Sp(`${t}-md5`);let n="";for(let i=0;i<32;i++)n+="0123456789abcdef"[Math.floor(e()*16)];return n}function Mp(t){const e=x_(t),n=(i,r,s,o,a,l)=>({key:i,name:r,kind:s,sizeMb:Math.round(o*100)/100,md5:zE(`${t.id}-${i}`),desc:a,count:l});return[n("model",`${t.id}_cloud_sparse.pcd`,"pcd",t.cloudSizeMb*.18,"稀疏点云三维模型，可在 CloudCompare 等工具中打开"),n("volume",`${t.id}_volume.json`,"json",.02,"各堆体体积、置信度、覆盖度与遮挡说明"),n("inventory",`${t.id}_inventory.json`,"json",.01,"盘点汇总：货位、标签编码、分层计数"),n("report",`report_${t.id}.pdf`,"pdf",1.2,"巡检报告（与网页端在线预览一致）"),n("telemetry",`${t.id}_telemetry.csv`,"csv",.3,"飞行遥测：电量、速度、高度、链路时延（5 秒采样）"),n("events",`${t.id}_events.json`,"json",.01,"飞行事件日志：起飞、航点、悬停、返航、降落"),n("video",`${t.id}_video.mp4`,"mp4",t.durationSec*1.1,"机头相机全程录像"),n("photos",`${t.id}_photos.zip`,"zip",e*2.4,"拍照航点实景图片",e)]}function jr(t){return Math.round(Mp(t).reduce((e,n)=>e+n.sizeMb,0))}const Ws={name:"张",role:"管理员",org:"示范粮库"};function zf(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n.toISOString()}function kE(){return IE.map(t=>{const e=Hr.find(r=>r.id===t),n=zf(e.landedAt,0),i=e.status==="aborted"?[`${e.id}_video.mp4`]:[];return{code:cr(t),taskId:t,deviceId:Ic(e),syncedAt:n,sizeMb:jr(e),complete:i.length===0,missing:i,expiresAt:zf(n,v_)}}).sort((t,e)=>e.syncedAt.localeCompare(t.syncedAt))}let Zu,Mg=1;const ut=ME((t,e)=>({syncs:kE(),downloads:[],toast:null,syncModalOpen:!1,syncPrefill:"",libraryTasks:()=>{const n=new Set(e().syncs.map(i=>i.taskId));return Hr.filter(i=>n.has(i.id))},taskById:n=>new Set(e().syncs.map(r=>r.taskId)).has(n)?Hr.find(r=>r.id===n):void 0,syncOf:n=>e().syncs.find(i=>i.taskId===n),ingest:async n=>{const i=m_(n);if(!g_.test(i))return{ok:!1,code:n.trim()||"（空）",reason:"格式不正确，同步码形如 UAV-XXXX-XXXX"};const r=Hr.find(l=>cr(l.id)===i);if(!r)return{ok:!1,code:i,reason:"同步码无效或已过期（有效期 7 天）"};const s=e().syncs.find(l=>l.taskId===r.id);if(s)return{ok:!0,task:r,record:s,already:!0};await new Promise(l=>setTimeout(l,900+Math.random()*600));const o=new Date().toISOString(),a={code:i,taskId:r.id,deviceId:Ic(r),syncedAt:o,sizeMb:jr(r),complete:!0,missing:[],expiresAt:zf(o,v_)};return t(l=>({syncs:[a,...l.syncs]})),{ok:!0,task:r,record:a,already:!1}},pendingTasks:()=>{const n=new Set(e().syncs.map(i=>i.taskId));return Hr.filter(i=>!n.has(i.id))},ingestAll:async()=>{const n=e().pendingTasks();for(const i of n)await e().ingest(cr(i.id));return n.length},enqueueDownload:(n,i)=>{const r=Mp(n),s=i==="all"?r:r.filter(l=>i.includes(l.key)),o=new Date().toISOString(),a=i==="all"||s.length>1?[{id:`D-${Mg++}`,taskId:n.id,name:`${n.id}_package.zip`,sizeMb:Math.round(s.reduce((l,c)=>l+c.sizeMb,0)),startedAt:o,progress:0,state:"queued",by:Ws.name}]:s.map(l=>({id:`D-${Mg++}`,taskId:n.id,name:l.name,sizeMb:l.sizeMb,startedAt:o,progress:0,state:"queued",by:Ws.name}));return t(l=>({downloads:[...a,...l.downloads]})),a.forEach((l,c)=>{const f=1400+Math.min(4e3,l.sizeMb*2.2),d=performance.now()+c*300,h=()=>{const p=Math.min(100,Math.round((performance.now()-d)/f*100));t(v=>({downloads:v.downloads.map(y=>y.id===l.id?{...y,progress:Math.max(0,p),state:p>=100?"done":p>0?"running":"queued"}:y)})),p<100&&requestAnimationFrame(h)};requestAnimationFrame(h)}),a},showToast:n=>{Zu&&clearTimeout(Zu),t({toast:n}),Zu=setTimeout(()=>t({toast:null}),2400)},set:n=>t(n)})),Ko=t=>String(t).padStart(2,"0"),Ar=t=>t.slice(0,10),us=t=>t.slice(11,19),Ai=t=>{const e=new Date(t);return`${e.getFullYear()}-${Ko(e.getMonth()+1)}-${Ko(e.getDate())} ${Ko(e.getHours())}:${Ko(e.getMinutes())}`},Ju=t=>`${Math.floor(t/60)}分${Ko(Math.round(t%60))}秒`,_n=t=>t>=1024?`${(t/1024).toFixed(2)} GB`:t>=10?`${Math.round(t)} MB`:`${t.toFixed(2)} MB`,__={success:"完成",aborted:"中断",failed:"失败"},Qu={qr:"二维码",barcode:"条码",rfid:"RFID"},ed={unclear:"识别不清晰",occluded:"部分遮挡",uncovered:"未完整覆盖",changed:"变化异常"},$n=t=>Math.round(t.stacks.reduce((e,n)=>e+n.volumeM3,0)*10)/10,la=t=>t.stacks.reduce((e,n)=>e+(n.totalCount??0),0),Ep=t=>{var e;return((e=t.stacks[0])==null?void 0:e.cargoType)==="stacked"},Rt=(t=15)=>({width:t,height:t,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),OE=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("circle",{cx:"7",cy:"7",r:"4.3"}),m.jsx("path",{d:"M10.3 10.3 13.8 13.8"})]}),Pn=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("path",{d:"M8 1.8v7M5.2 6 8 8.8 10.8 6"}),m.jsx("path",{d:"M2.4 9.6v3a1.2 1.2 0 0 0 1.2 1.2h8.8a1.2 1.2 0 0 0 1.2-1.2v-3"})]}),BE=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("rect",{x:"5.5",y:"5.5",width:"8",height:"8",rx:"1.4"}),m.jsx("path",{d:"M10.5 5.5V3.7a1.2 1.2 0 0 0-1.2-1.2H3.7a1.2 1.2 0 0 0-1.2 1.2v5.6a1.2 1.2 0 0 0 1.2 1.2h1.8"})]}),Jl=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("path",{d:"M4 1.8h5.2L13 5.6v8.2a.6.6 0 0 1-.6.6H4a.6.6 0 0 1-.6-.6V2.4a.6.6 0 0 1 .6-.6z"}),m.jsx("path",{d:"M9.2 1.8v3.8H13M5.8 8.6h4.4M5.8 11h4.4"})]}),VE=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("path",{d:"M8 2.2 14 5.4 8 8.6 2 5.4z"}),m.jsx("path",{d:"M2 8.4 8 11.6l6-3.2M2 11.2 8 14.4l6-3.2"})]}),y_=({size:t})=>m.jsx("svg",{...Rt(t),children:m.jsx("path",{d:"M6 3.5 10.5 8 6 12.5"})}),HE=({size:t})=>m.jsx("svg",{...Rt(t),children:m.jsx("path",{d:"M3.5 6 8 10.5 12.5 6"})}),jE=({size:t})=>m.jsx("svg",{...Rt(t),children:m.jsx("path",{d:"M10 3.5 5.5 8 10 12.5"})}),Uc=({size:t,spinning:e})=>m.jsxs("svg",{...Rt(t),style:e?{animation:"spin 1s linear infinite"}:void 0,children:[m.jsx("path",{d:"M13.2 6.6A5.4 5.4 0 0 0 3.6 4.9M2.8 9.4a5.4 5.4 0 0 0 9.6 1.7"}),m.jsx("path",{d:"M13.4 2.6v3.6H9.8M2.6 13.4V9.8h3.6"})]}),ur=({size:t})=>m.jsx("svg",{...Rt(t),strokeWidth:1.8,children:m.jsx("path",{d:"M3.4 8.4 6.6 11.6 12.6 4.8"})}),Kn=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("path",{d:"M8 2.6 14.6 13.2H1.4z"}),m.jsx("path",{d:"M8 6.6V9.4",strokeWidth:1.4}),m.jsx("circle",{cx:"8",cy:"11.3",r:"0.8",fill:"currentColor",stroke:"none"})]}),S_=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("path",{d:"M2 12.5 6 8l3 2.6 5-5.6"}),m.jsx("path",{d:"M10.6 5H14v3.4"})]}),wp=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("path",{d:"M8 1.8 13.6 4.8v6.4L8 14.2 2.4 11.2V4.8z"}),m.jsx("path",{d:"M2.4 4.8 8 7.8l5.6-3M8 7.8v6.4"})]}),hu=({size:t})=>m.jsx("svg",{...Rt(t),children:m.jsx("path",{d:"M6.6 9.4 9.4 6.6M7.2 4.4l1.2-1.2a2.6 2.6 0 0 1 3.7 3.7l-1.2 1.2M8.8 11.6l-1.2 1.2a2.6 2.6 0 0 1-3.7-3.7l1.2-1.2"})}),GE=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("path",{d:"M4.6 5.6V2.4h6.8v3.2M4.6 11.2H3a1 1 0 0 1-1-1V6.6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3.6a1 1 0 0 1-1 1h-1.6"}),m.jsx("rect",{x:"4.6",y:"9.2",width:"6.8",height:"4.4",rx:"0.6"})]}),WE=({size:t})=>m.jsx("svg",{...Rt(t),children:m.jsx("path",{d:"M2.4 6V2.4H6M10 2.4h3.6V6M13.6 10v3.6H10M6 13.6H2.4V10"})}),XE=({size:t})=>m.jsx("svg",{...Rt(t),children:m.jsx("path",{d:"M6 2.4V6H2.4M10 2.4V6h3.6M13.6 10H10v3.6M2.4 10H6v3.6"})}),$E=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("path",{d:"M8 14.2s4.2-4 4.2-7.4a4.2 4.2 0 0 0-8.4 0c0 3.4 4.2 7.4 4.2 7.4z"}),m.jsx("circle",{cx:"8",cy:"6.8",r:"1.5"})]}),M_=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("path",{d:"M2.4 5.6h2.4l1.2-1.8h4l1.2 1.8h2.4v7.2H2.4z"}),m.jsx("circle",{cx:"8",cy:"9",r:"2.2"})]}),YE=({size:t})=>m.jsxs("svg",{...Rt(t),children:[m.jsx("rect",{x:"2",y:"4",width:"8.4",height:"8",rx:"1.2"}),m.jsx("path",{d:"M10.4 7.2 14 5.2v5.6l-3.6-2"})]});function Pt({children:t,style:e,className:n="",pad:i=16}){return m.jsx("div",{className:n,style:{borderRadius:10,padding:i,background:"var(--surface-1)",border:"1px solid var(--card-stroke)",boxShadow:"var(--shadow-card)",...e},children:t})}function Gr({title:t,right:e,children:n,style:i}){return m.jsxs("div",{style:i,children:[m.jsxs("div",{className:"flex items-center justify-between mb-2.5",children:[m.jsx("div",{className:"dlabel",style:{fontSize:11},children:t}),e]}),n]})}function vt({variant:t="primary",small:e,disabled:n,onClick:i,children:r,style:s,icon:o,title:a}){const l={primary:{background:"var(--brand)",color:"#FFFFFF",border:"1px solid transparent",boxShadow:"0 1px 6px rgba(76,107,192,.25)"},secondary:{background:"var(--surface-1)",color:"var(--text-primary)",border:"1px solid var(--border-default)"},ghost:{background:"transparent",color:"var(--text-link)",border:"1px solid transparent"},"danger-outline":{background:"var(--danger-bg)",color:"var(--danger)",border:"1px solid rgba(217,69,60,.35)"}};return m.jsxs("button",{title:a,className:`inline-flex items-center justify-center gap-1.5 select-none ${n?"":"pressable"}`,style:{height:e?30:36,padding:e?"0 12px":"0 16px",borderRadius:8,fontSize:e?12.5:13.5,fontWeight:500,whiteSpace:"nowrap",...l[t],...n?{background:"var(--surface-3)",color:"var(--text-placeholder)",border:"1px solid var(--border-subtle)",cursor:"default",boxShadow:"none"}:{cursor:"pointer"},...s},disabled:n,onClick:i,children:[o,r]})}const Eg={hi:{bg:"var(--success-bg)",fg:"var(--success)"},mid:{bg:"var(--warning-bg)",fg:"var(--warning)"},lo:{bg:"var(--danger-bg)",fg:"var(--danger)"},info:{bg:"var(--brand-subtle-bg)",fg:"var(--brand-subtle-text)"},neutral:{bg:"var(--tag-gray-bg)",fg:"var(--tag-gray-fg)"}};function kf({tone:t="neutral",children:e}){return m.jsx("span",{className:"inline-flex items-center gap-1",style:{padding:"2px 8px",borderRadius:999,fontSize:11,fontWeight:500,background:Eg[t].bg,color:Eg[t].fg,whiteSpace:"nowrap"},children:e})}function qE({children:t,tone:e="neutral"}){return m.jsx("span",{style:{padding:"2px 7px",borderRadius:5,fontSize:10.5,background:e==="info"?"var(--tag-blue-bg)":"var(--tag-gray-bg)",color:e==="info"?"var(--tag-blue-fg)":"var(--tag-gray-fg)",whiteSpace:"nowrap"},children:t})}const Tp=({task:t})=>m.jsx(kf,{tone:t.status==="success"?"hi":t.status==="aborted"?"mid":"lo",children:__[t.status]});function qt({label:t,value:e,unit:n,sub:i,tone:r}){return m.jsxs(Pt,{pad:14,children:[m.jsx("div",{className:"dlabel",children:t}),m.jsxs("div",{className:"flex items-baseline gap-1 mt-1.5",children:[m.jsx("span",{className:"mono",style:{fontSize:24,lineHeight:1.1,fontWeight:500,color:r==="danger"?"var(--danger)":r==="warning"?"var(--warning)":"var(--text-primary)"},children:e}),n&&m.jsx("span",{className:"mono",style:{fontSize:12,color:"var(--text-secondary)"},children:n})]}),i&&m.jsx("div",{className:"mt-1",style:{fontSize:11,color:"var(--text-tertiary)"},children:i})]})}function Ap({icon:t,text:e,sub:n,actionText:i,onAction:r}){return m.jsxs("div",{className:"flex flex-col items-center text-center",style:{padding:"56px 24px"},children:[t&&m.jsx("span",{className:"flex items-center justify-center mb-3",style:{width:52,height:52,borderRadius:999,background:"var(--fill-quiet)",color:"var(--text-tertiary)"},children:t}),m.jsx("div",{style:{fontSize:14,fontWeight:500},children:e}),n&&m.jsx("div",{className:"mt-1 leading-[1.6]",style:{fontSize:12.5,color:"var(--text-tertiary)",maxWidth:360},children:n}),i&&m.jsx("div",{className:"mt-4",children:m.jsx(vt,{onClick:r,children:i})})]})}function KE({open:t,title:e,onClose:n,children:i,width:r=560,footer:s}){return $.useEffect(()=>{if(!t)return;const o=a=>{a.key==="Escape"&&n()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[t,n]),t?m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center mask-in no-print",style:{background:"rgba(16,24,40,.36)"},onClick:n,children:m.jsxs("div",{className:"dialog-in flex flex-col",style:{width:r,maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 64px)",background:"var(--surface-1)",borderRadius:14,boxShadow:"var(--shadow-modal)",overflow:"hidden"},onClick:o=>o.stopPropagation(),children:[m.jsxs("div",{className:"flex items-center shrink-0",style:{height:52,padding:"0 8px 0 20px",borderBottom:"1px solid var(--divider)"},children:[m.jsx("span",{className:"flex-1",style:{fontSize:15,fontWeight:600},children:e}),m.jsx("button",{className:"flex items-center justify-center pressable",style:{width:36,height:36,fontSize:20,color:"var(--text-secondary)",cursor:"pointer"},onClick:n,"aria-label":"关闭",children:"×"})]}),m.jsx("div",{className:"flex-1 overflow-y-auto",style:{padding:20},children:i}),s&&m.jsx("div",{className:"shrink-0 flex items-center justify-end gap-2",style:{padding:"12px 20px",borderTop:"1px solid var(--divider)",background:"var(--surface-3)"},children:s})]})}):null}function ZE(){const t=ut(e=>e.toast);return t?m.jsx("div",{className:"fixed z-[60] mask-in no-print",style:{left:"50%",bottom:28,transform:"translateX(-50%)",padding:"9px 16px",borderRadius:999,fontSize:13,background:"rgba(27,31,39,.92)",color:"#FFFFFF",boxShadow:"var(--shadow-popover)",whiteSpace:"nowrap"},children:t}):null}function JE({text:t,label:e="复制",small:n=!0,done:i="已复制"}){const r=ut(a=>a.showToast),[s,o]=$.useState(!1);return m.jsx(vt,{variant:"secondary",small:n,icon:s?m.jsx(ur,{size:12}):m.jsx(BE,{size:12}),onClick:async a=>{a.stopPropagation();try{await navigator.clipboard.writeText(t)}catch{}o(!0),r(i),setTimeout(()=>o(!1),1600)},children:s?i:e})}function QE({code:t,copy:e=!0}){return m.jsxs("span",{className:"inline-flex items-center gap-2",children:[m.jsx("span",{className:"mono",style:{fontSize:12.5,padding:"3px 8px",borderRadius:6,background:"var(--brand-subtle-bg)",color:"var(--brand-subtle-text)",letterSpacing:".04em"},children:t}),e&&m.jsx(JE,{text:t,label:""})]})}function ew({value:t,options:e,onChange:n,width:i=160,ariaLabel:r}){var f;const[s,o]=$.useState(!1),a=$.useRef(null);$.useEffect(()=>{if(!s)return;const d=p=>{var v;(v=a.current)!=null&&v.contains(p.target)||o(!1)},h=p=>{p.key==="Escape"&&o(!1)};return document.addEventListener("mousedown",d),window.addEventListener("keydown",h),()=>{document.removeEventListener("mousedown",d),window.removeEventListener("keydown",h)}},[s]);const l=e.find(d=>d.value===t)??e[0],c=(l==null?void 0:l.value)===((f=e[0])==null?void 0:f.value);return m.jsxs("div",{ref:a,className:"relative",style:{width:i},children:[m.jsxs("button",{className:"input w-full flex items-center gap-2 text-left",style:{cursor:"pointer",borderColor:s?"var(--brand)":void 0,boxShadow:s?"0 0 0 3px rgba(76,107,192,.14)":void 0},onClick:()=>o(d=>!d),"aria-expanded":s,"aria-haspopup":"listbox","aria-label":r,children:[m.jsx("span",{className:"flex-1 truncate",style:{color:c?"var(--text-secondary)":"var(--text-primary)",fontWeight:c?400:500},children:l==null?void 0:l.label}),m.jsx("span",{style:{display:"inline-flex",color:"var(--text-tertiary)",transform:s?"rotate(180deg)":"none",transition:"transform .15s"},children:m.jsx(HE,{size:12})})]}),s&&m.jsx("div",{className:"absolute flex flex-col mask-in",role:"listbox",style:{left:0,top:"calc(100% + 5px)",minWidth:"100%",zIndex:30,padding:5,gap:2,background:"var(--glass-bg)",backdropFilter:"blur(14px)",borderRadius:10,border:"1px solid var(--border-strong)",boxShadow:"var(--shadow-popover)",maxHeight:288,overflowY:"auto"},children:e.map(d=>{const h=d.value===t;return m.jsxs("button",{role:"option","aria-selected":h,className:"flex items-center gap-2 text-left",style:{padding:"8px 10px",borderRadius:7,fontSize:12.5,cursor:"pointer",whiteSpace:"nowrap",background:h?"var(--brand-subtle-bg)":"transparent",color:h?"var(--brand-subtle-text)":"var(--text-primary)",fontWeight:h?500:400},onMouseEnter:p=>{h||(p.currentTarget.style.background="var(--fill-quiet)")},onMouseLeave:p=>{h||(p.currentTarget.style.background="transparent")},onClick:()=>{n(d.value),o(!1)},children:[m.jsx("span",{className:"flex-1",children:d.label}),d.hint&&m.jsx("span",{className:"mono",style:{fontSize:10.5,color:"var(--text-tertiary)"},children:d.hint}),h&&m.jsx("span",{style:{display:"inline-flex"},children:m.jsx(ur,{size:12})})]},d.value)})})]})}function Fc({on:t,onChange:e,indeterminate:n}){return m.jsxs("button",{className:"flex items-center justify-center",style:{width:16,height:16,borderRadius:4,cursor:"pointer",background:t||n?"var(--brand)":"var(--surface-1)",border:`1.4px solid ${t||n?"var(--brand)":"var(--border-strong)"}`,color:"#FFFFFF"},onClick:i=>{i.stopPropagation(),e(!t)},"aria-label":t?"取消选择":"选择",children:[t&&m.jsx(ur,{size:10}),!t&&n&&m.jsx("span",{style:{width:8,height:1.6,background:"#FFFFFF",borderRadius:1}})]})}function tw({size:t=30}){return m.jsxs("svg",{width:t,height:t,viewBox:"0 0 128 128",fill:"none",children:[m.jsx("circle",{cx:"64",cy:"64",r:"60",stroke:"rgba(76,107,192,.18)",strokeWidth:"3"}),m.jsx("circle",{cx:"64",cy:"64",r:"46",stroke:"rgba(76,107,192,.34)",strokeWidth:"3",strokeDasharray:"4 8"}),m.jsx("path",{d:"M64 4 A60 60 0 0 1 121 45",stroke:"var(--brand)",strokeWidth:"4",strokeLinecap:"round"}),m.jsx("rect",{x:"52",y:"52",width:"24",height:"24",rx:"6",stroke:"var(--text-primary)",strokeWidth:"5"}),m.jsx("path",{d:"M36 36 L52 52 M92 36 L76 52 M36 92 L52 76 M92 92 L76 76",stroke:"var(--text-primary)",strokeWidth:"5",strokeLinecap:"round"}),m.jsx("circle",{cx:"36",cy:"36",r:"6.5",stroke:"var(--brand)",strokeWidth:"4"}),m.jsx("circle",{cx:"92",cy:"36",r:"6.5",stroke:"var(--brand)",strokeWidth:"4"}),m.jsx("circle",{cx:"36",cy:"92",r:"6.5",stroke:"var(--brand)",strokeWidth:"4"}),m.jsx("circle",{cx:"92",cy:"92",r:"6.5",stroke:"var(--brand)",strokeWidth:"4"}),m.jsx("circle",{cx:"64",cy:"64",r:"4",fill:"var(--brand)"})]})}const nw=[{to:"/sync",label:"同步数据",icon:m.jsx(hu,{size:15})},{to:"/tasks",label:"任务数据",icon:m.jsx(wp,{size:15})},{to:"/analysis",label:"数据分析",icon:m.jsx(S_,{size:15})}],iw={"/sync":"同步数据","/tasks":"任务数据","/analysis":"数据分析"};function rw(){const t=ut(u=>u.syncModalOpen),e=ut(u=>u.syncPrefill),n=ut(u=>u.set),i=ut(u=>u.ingest),r=Mr(),[s,o]=$.useState(""),[a,l]=$.useState(!1),[c,f]=$.useState([]),[d,h]=$.useState(null);$.useEffect(()=>{t&&(o(e),f([]),h(null))},[t,e]);const p=s.split(/[\n,，;；\s]+/).map(u=>u.trim()).filter(Boolean),v=()=>n({syncModalOpen:!1,syncPrefill:""}),y=async()=>{if(a||p.length===0)return;l(!0);const u=[];for(const x of p)h(x),u.push(await i(x)),f([...u]);h(null),l(!1);const _=u[0];if(u.length===1&&_.ok){const x=_.task.id;setTimeout(()=>{v(),r(`/tasks/${x}`)},500)}},g=c.filter(u=>u.ok).length;return m.jsxs(KE,{open:t,onClose:v,title:"同步数据",width:600,footer:m.jsxs(m.Fragment,{children:[m.jsx(vt,{variant:"secondary",onClick:v,children:c.length?"完成":"取消"}),m.jsx(vt,{onClick:y,disabled:a||p.length===0,icon:a?m.jsx(Uc,{size:13,spinning:!0}):m.jsx(hu,{size:13}),children:a?"同步中":p.length>1?`同步 ${p.length} 个任务`:"同步"})]}),children:[m.jsx("div",{style:{fontSize:12.5,color:"var(--text-secondary)",lineHeight:1.6},children:"粘贴手机端复制的同步码。一次可粘贴多个，用换行或逗号分隔。"}),m.jsx("textarea",{className:"input mt-3 mono",style:{width:"100%",height:92,padding:"10px 12px",resize:"vertical",fontSize:13.5,letterSpacing:".04em",lineHeight:1.6},placeholder:"UAV-XXXX-XXXX",value:s,onChange:u=>o(u.target.value),disabled:a,onKeyDown:u=>{(u.metaKey||u.ctrlKey)&&u.key==="Enter"&&y()},autoFocus:!0}),m.jsxs("div",{className:"mt-1.5 flex items-center justify-between",style:{fontSize:11,color:"var(--text-tertiary)"},children:[m.jsx("span",{children:"有效期 7 天，超期请在手机端重新生成"}),m.jsxs("span",{className:"mono",children:[p.length," 个"]})]}),(c.length>0||d)&&m.jsxs("div",{className:"mt-4 flex flex-col gap-1.5",children:[c.map((u,_)=>m.jsxs("div",{className:"flex items-center gap-3",style:{padding:"10px 12px",borderRadius:8,background:u.ok?"var(--success-bg)":"var(--danger-bg)"},children:[m.jsx("span",{style:{color:u.ok?"var(--success)":"var(--danger)",display:"inline-flex"},children:u.ok?m.jsx(ur,{size:14}):m.jsx(Kn,{size:14})}),m.jsx("span",{className:"mono",style:{fontSize:12.5,minWidth:128},children:u.ok?u.record.code:u.code}),m.jsx("span",{className:"flex-1 truncate",style:{fontSize:12.5,color:u.ok?"var(--text-primary)":"var(--danger)"},children:u.ok?`${u.already?"此前已同步":"已同步"} · ${u.task.routeName} · ${Ai(u.task.startedAt)}`:u.reason}),u.ok&&m.jsxs("button",{className:"inline-flex items-center gap-0.5 pressable",style:{fontSize:12,color:"var(--text-link)",cursor:"pointer"},onClick:()=>{v(),r(`/tasks/${u.task.id}`)},children:["查看 ",m.jsx(y_,{size:11})]})]},_)),d&&m.jsxs("div",{className:"flex items-center gap-3",style:{padding:"10px 12px",borderRadius:8,background:"var(--brand-subtle-bg)"},children:[m.jsx("span",{style:{color:"var(--brand)",display:"inline-flex"},children:m.jsx(Uc,{size:14,spinning:!0})}),m.jsx("span",{className:"mono",style:{fontSize:12.5,minWidth:128},children:d}),m.jsx("span",{style:{fontSize:12.5,color:"var(--brand-subtle-text)"},children:"正在拉取数据包"})]}),!a&&c.length>1&&m.jsxs("div",{className:"mono mt-1",style:{fontSize:11,color:"var(--text-tertiary)"},children:[g,"/",c.length," 个同步成功"]})]})]})}function sw(){const t=Sr();ut(i=>i.set);const e="/"+(t.pathname.split("/")[1]||"tasks"),n=iw[e]??"仓储无人机巡检 · 数据中心";return m.jsxs("div",{className:"flex",style:{minHeight:"100vh"},children:[m.jsxs("aside",{className:"no-print shrink-0 flex flex-col",style:{width:"var(--sidebar-w)",background:"var(--surface-1)",borderRight:"1px solid var(--border-subtle)",position:"sticky",top:0,height:"100vh"},children:[m.jsxs("div",{className:"flex items-center gap-2.5",style:{padding:"18px 16px 14px"},children:[m.jsx(tw,{}),m.jsxs("div",{className:"min-w-0",children:[m.jsx("div",{style:{fontSize:13.5,fontWeight:600,letterSpacing:".04em"},children:"仓储无人机巡检"}),m.jsx("div",{style:{fontSize:10.5,color:"var(--text-tertiary)",letterSpacing:".06em"},children:"数据中心"})]})]}),m.jsx("nav",{className:"flex flex-col gap-0.5",style:{padding:"0 10px"},children:nw.map(i=>m.jsxs(W1,{to:i.to,className:({isActive:r})=>`navitem ${r?"on":""}`,children:[m.jsx("span",{style:{display:"inline-flex",opacity:.9},children:i.icon}),m.jsx("span",{className:"flex-1",children:i.label})]},i.to))}),m.jsx("div",{className:"mt-auto",style:{padding:14,borderTop:"1px solid var(--border-subtle)"},children:m.jsxs("div",{className:"flex items-center gap-2.5",children:[m.jsx("span",{className:"flex items-center justify-center mono shrink-0",style:{width:30,height:30,borderRadius:999,background:"var(--brand-subtle-bg)",color:"var(--brand-subtle-text)",fontSize:12.5,fontWeight:600},children:Ws.name}),m.jsxs("div",{className:"min-w-0",children:[m.jsxs("div",{className:"truncate",style:{fontSize:12.5,fontWeight:500},children:[Ws.org," · ",Ws.name]}),m.jsxs("div",{style:{fontSize:10.5,color:"var(--text-tertiary)"},children:[Ws.role," · 私有化部署"]})]})]})})]}),m.jsxs("main",{className:"flex-1 min-w-0 flex flex-col",children:[m.jsx("header",{className:"no-print flex items-center shrink-0",style:{height:54,padding:"0 28px",borderBottom:"1px solid var(--border-subtle)",background:"var(--glass-bar)",backdropFilter:"blur(10px)",position:"sticky",top:0,zIndex:20},children:m.jsx("span",{style:{fontSize:15,fontWeight:600},children:n})}),m.jsx("div",{className:"flex-1",style:{padding:"24px 28px 40px",maxWidth:1360,width:"100%"},children:m.jsx(P1,{})})]}),m.jsx(rw,{}),m.jsx(ZE,{})]})}function ow(){const t=Mr(),e=ut(u=>u.ingest),n=ut(u=>u.ingestAll),i=ut(u=>u.set),r=ut(u=>u.showToast),s=ut(u=>u.syncs),o=ut(u=>u.pendingTasks()),[a,l]=$.useState(""),[c,f]=$.useState(!1),[d,h]=$.useState(!1),[p,v]=$.useState(""),y=async()=>{if(c||!a.trim())return;f(!0),v("");const u=await e(a);f(!1),u.ok?t(`/tasks/${u.task.id}`):v(u.reason)},g=async()=>{if(d)return;h(!0);const u=await n();h(!1),r(u?`已同步 ${u} 个任务`:"没有需要同步的任务"),u&&t("/tasks")};return m.jsxs("div",{className:"grid",style:{gridTemplateColumns:"minmax(0, 1.3fr) minmax(300px, 1fr)",gap:24},children:[m.jsxs("div",{className:"flex flex-col gap-4",children:[m.jsxs(Pt,{pad:24,children:[m.jsxs("div",{className:"flex items-center",children:[m.jsx("div",{style:{fontSize:16,fontWeight:600},children:"输入同步码"}),m.jsx("button",{className:"ml-auto pressable",style:{fontSize:12.5,color:"var(--text-link)",cursor:"pointer"},onClick:()=>i({syncModalOpen:!0}),children:"批量同步"})]}),m.jsx("div",{className:"mt-1",style:{fontSize:12.5,color:"var(--text-secondary)"},children:"手机端「巡检结果 → 结果报告 → 同步到网页端」复制同步码，粘贴到这里。"}),m.jsxs("div",{className:"flex items-center gap-2 mt-4",children:[m.jsxs("div",{className:"flex-1 relative",children:[m.jsx("span",{className:"absolute",style:{left:12,top:12,color:"var(--text-tertiary)",display:"inline-flex"},children:m.jsx(hu,{size:15})}),m.jsx("input",{className:"input mono w-full",style:{height:44,paddingLeft:36,fontSize:15,letterSpacing:".06em",borderColor:p?"var(--danger)":void 0},placeholder:"UAV-XXXX-XXXX",value:a,onChange:u=>{l(u.target.value),v("")},onKeyDown:u=>u.key==="Enter"&&y(),autoFocus:!0})]}),m.jsx(vt,{style:{height:44,padding:"0 22px"},onClick:y,disabled:c||!a.trim(),icon:c?m.jsx(Uc,{size:13,spinning:!0}):void 0,children:c?"同步中":"同步"})]}),p&&m.jsxs("div",{className:"mt-2 inline-flex items-center gap-1",style:{fontSize:12,color:"var(--danger)"},children:[m.jsx(Kn,{size:12}),p]})]}),m.jsxs(Pt,{pad:24,children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("div",{style:{fontSize:16,fontWeight:600},children:"同步全部数据"}),m.jsx("div",{className:"mt-1",style:{fontSize:12.5,color:"var(--text-secondary)"},children:"拉取手机端与机载端所有尚未同步到网页端的巡检任务，包括过程数据、成果与报告。"})]}),m.jsx(vt,{style:{height:44,padding:"0 22px"},onClick:g,disabled:d||o.length===0,icon:m.jsx(Uc,{size:13,spinning:d}),children:d?"同步中":o.length?`同步 ${o.length} 个任务`:"已全部同步"})]}),o.length>0&&m.jsx("div",{className:"mt-4",style:{borderTop:"1px solid var(--border-subtle)"},children:o.map(u=>m.jsxs("div",{className:"flex items-center gap-3",style:{padding:"10px 0",borderBottom:"1px solid var(--border-subtle)"},children:[m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("div",{style:{fontSize:13,fontWeight:500},children:u.routeName}),m.jsxs("div",{className:"mono",style:{fontSize:11,color:"var(--text-tertiary)"},children:[u.id," · ",Ai(u.startedAt)]})]}),m.jsxs("span",{className:"mono",style:{fontSize:11.5,color:"var(--text-tertiary)"},children:["同步码 ",cr(u.id)]})]},u.id))})]})]}),m.jsx(Gr,{title:"最近同步",right:m.jsx("button",{className:"pressable",style:{fontSize:12,color:"var(--text-link)",cursor:"pointer"},onClick:()=>t("/tasks"),children:"全部任务"}),children:m.jsx(Pt,{pad:0,style:{overflow:"hidden"},children:s.slice(0,10).map((u,_)=>{const x=Hr.find(S=>S.id===u.taskId);return m.jsxs("button",{className:"w-full flex items-center gap-3 text-left pressable",style:{padding:"11px 14px",borderTop:_>0?"1px solid var(--border-subtle)":"none",cursor:"pointer"},onClick:()=>t(`/tasks/${x.id}`),children:[m.jsx("span",{style:{color:u.complete?"var(--success)":"var(--warning)",display:"inline-flex"},children:u.complete?m.jsx(ur,{size:14}):m.jsx(Kn,{size:14})}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("div",{className:"truncate",style:{fontSize:12.5,fontWeight:500},children:x.routeName}),m.jsxs("div",{className:"mono truncate",style:{fontSize:10.5,color:"var(--text-tertiary)"},children:[Ai(x.startedAt)," · ",_n(u.sizeMb)]})]}),m.jsxs("span",{className:"mono shrink-0",style:{fontSize:10.5,color:"var(--text-tertiary)"},children:["同步于 ",Ai(u.syncedAt).slice(5)]}),m.jsx("span",{style:{color:"var(--text-placeholder)",display:"inline-flex"},children:m.jsx(y_,{size:12})})]},u.code)})})})]})}function aw(){const t=Mr(),e=ut(E=>E.libraryTasks()),n=ut(E=>E.enqueueDownload),i=ut(E=>E.showToast),r=ut(E=>E.set),[s,o]=$.useState(""),[a,l]=$.useState("all"),[c,f]=$.useState("all"),[d,h]=$.useState(new Set),p=E=>{var M;return((M=ba.find(w=>w.id===E.routeId))==null?void 0:M.sceneId)??""},v=E=>{var M;return((M=Dc.find(w=>w.id===p(E)))==null?void 0:M.name)??""},y=$.useMemo(()=>{const E=s.trim().toLowerCase();return e.filter(M=>{if(a!=="all"&&M.status!==a||c!=="all"&&p(M)!==c)return!1;if(!E)return!0;const w=cr(M.id).toLowerCase();return M.id.toLowerCase().includes(E)||w.includes(E.replace(/\s/g,""))||M.routeName.toLowerCase().includes(E)||v(M).toLowerCase().includes(E)||M.operator.toLowerCase().includes(E)}).sort((M,w)=>w.startedAt.localeCompare(M.startedAt))},[e,s,a,c]),g=m_(s),u=g_.test(g)&&!e.some(E=>cr(E.id)===g),_=Math.round(e.filter(E=>E.status==="success").reduce((E,M)=>E+$n(M),0)),x=e.reduce((E,M)=>E+jr(M),0),S=y.length>0&&y.every(E=>d.has(E.id)),R=y.some(E=>d.has(E.id)),b=E=>h(E?new Set(y.map(M=>M.id)):new Set),A=()=>{const E=e.filter(M=>d.has(M.id));E.forEach(M=>n(M,"all")),i(`已开始下载 ${E.length} 个数据包`),h(new Set)},P=(E,M,w)=>m.jsx("button",{className:`chip ${E?"on":""}`,onClick:w,children:M},M);return m.jsxs("div",{children:[m.jsxs("div",{className:"grid",style:{gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[m.jsx(qt,{label:"已同步任务",value:e.length,unit:"次",sub:`覆盖 ${new Set(e.map(p)).size} 个场景`}),m.jsx(qt,{label:"累计测算体积",value:_.toLocaleString(),unit:"m³",sub:"仅统计完成任务"}),m.jsx(qt,{label:"数据总量",value:_n(x).split(" ")[0],unit:_n(x).split(" ")[1],sub:"点云 / 视频 / 图片 / 报告"})]}),m.jsx(Pt,{pad:14,style:{marginTop:16},children:m.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[m.jsxs("div",{className:"relative",style:{width:300},children:[m.jsx("span",{className:"absolute",style:{left:11,top:10,color:"var(--text-tertiary)",display:"inline-flex"},children:m.jsx(OE,{size:14})}),m.jsx("input",{className:"input w-full",style:{paddingLeft:32},placeholder:"搜索任务 / 同步码 / 航线 / 场景",value:s,onChange:E=>o(E.target.value)})]}),m.jsxs("div",{className:"flex items-center gap-1.5",children:[P(a==="all","全部",()=>l("all")),P(a==="success","完成",()=>l("success")),P(a==="aborted","中断",()=>l("aborted"))]}),m.jsx("span",{style:{width:1,height:20,background:"var(--border-subtle)"}}),m.jsx(ew,{width:158,value:c,onChange:f,ariaLabel:"按场景筛选",options:[{value:"all",label:"全部场景"},...Dc.map(E=>({value:E.id,label:E.name,hint:`${e.filter(M=>p(M)===E.id).length}`}))]}),m.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[d.size>0&&m.jsxs("span",{className:"mono",style:{fontSize:12,color:"var(--text-secondary)"},children:["已选 ",d.size," 个"]}),m.jsx(vt,{small:!0,variant:d.size?"primary":"secondary",disabled:d.size===0,icon:m.jsx(Pn,{size:13}),onClick:A,children:"打包下载"})]})]})}),u&&m.jsxs("div",{className:"flex items-center gap-3 mt-3",style:{padding:"11px 14px",borderRadius:10,background:"var(--brand-subtle-bg)",border:"1px solid var(--brand-border)"},children:[m.jsx("span",{style:{color:"var(--brand)",display:"inline-flex"},children:m.jsx(hu,{size:15})}),m.jsxs("span",{style:{fontSize:13},className:"flex-1",children:[m.jsx("span",{className:"mono",children:g})," 尚未同步到网页端。"]}),m.jsx(vt,{small:!0,onClick:()=>r({syncModalOpen:!0,syncPrefill:g}),children:"同步"})]}),m.jsxs(Pt,{pad:0,style:{marginTop:16,overflow:"hidden"},children:[y.length===0?m.jsx(Ap,{icon:m.jsx(wp,{size:22}),text:e.length===0?"还没有同步任何任务":"没有匹配的任务",sub:e.length===0?"在「同步数据」输入手机端复制的同步码，或一键同步全部":"调整筛选条件试试",actionText:e.length===0?"去同步数据":void 0,onAction:()=>t("/sync")}):m.jsx("div",{style:{overflowX:"auto"},children:m.jsxs("table",{className:"dtable",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{style:{width:36},children:m.jsx(Fc,{on:S,indeterminate:!S&&R,onChange:b})}),m.jsx("th",{children:"巡检时间"}),m.jsx("th",{children:"任务 / 同步码"}),m.jsx("th",{children:"场景 · 航线"}),m.jsx("th",{children:"状态"}),m.jsx("th",{style:{textAlign:"right"},children:"覆盖"}),m.jsx("th",{style:{textAlign:"right"},children:"结果"}),m.jsx("th",{children:"异常"}),m.jsx("th",{style:{width:120}})]})}),m.jsx("tbody",{children:y.map(E=>{const M=E.stacks.filter(I=>I.issue).length,w=d.has(E.id);return m.jsxs("tr",{className:`row-link ${w?"row-on":""}`,onClick:()=>t(`/tasks/${E.id}`),children:[m.jsx("td",{children:m.jsx(Fc,{on:w,onChange:I=>h(z=>{const W=new Set(z);return I?W.add(E.id):W.delete(E.id),W})})}),m.jsx("td",{className:"mono",children:Ai(E.startedAt)}),m.jsxs("td",{children:[m.jsx("div",{className:"mono",style:{fontSize:12,whiteSpace:"nowrap"},children:E.id}),m.jsx("div",{className:"mono",style:{fontSize:11,color:"var(--text-tertiary)",whiteSpace:"nowrap"},children:cr(E.id)})]}),m.jsxs("td",{style:{minWidth:200},children:[m.jsx("div",{style:{fontWeight:500,whiteSpace:"nowrap"},children:E.routeName}),m.jsxs("div",{style:{fontSize:11,color:"var(--text-tertiary)",whiteSpace:"nowrap"},children:[v(E)," · ",E.operator]})]}),m.jsx("td",{children:m.jsx(Tp,{task:E})}),m.jsxs("td",{className:"mono",style:{textAlign:"right",color:E.coveragePct<100?"var(--warning)":void 0},children:[E.coveragePct,"%"]}),m.jsx("td",{className:"mono",style:{textAlign:"right",whiteSpace:"nowrap"},children:Ep(E)?m.jsxs(m.Fragment,{children:[la(E).toLocaleString()," ",m.jsx("span",{style:{color:"var(--text-tertiary)"},children:"件"})]}):m.jsxs(m.Fragment,{children:[$n(E).toFixed(1)," ",m.jsx("span",{style:{color:"var(--text-tertiary)"},children:"m³"})]})}),m.jsx("td",{children:M>0?m.jsxs("span",{className:"inline-flex items-center gap-1",style:{fontSize:11.5,color:"var(--warning)",whiteSpace:"nowrap"},children:[m.jsx(Kn,{size:12}),M," 项"]}):m.jsx("span",{style:{fontSize:11.5,color:"var(--text-placeholder)"},children:"无"})}),m.jsx("td",{style:{textAlign:"right"},children:m.jsxs("div",{className:"inline-flex items-center gap-1.5",children:[m.jsx(vt,{small:!0,variant:"secondary",onClick:I=>{I.stopPropagation(),t(`/tasks/${E.id}?tab=report`)},children:"报告"}),m.jsx(vt,{small:!0,variant:"secondary",icon:m.jsx(Pn,{size:12}),title:"打包下载",onClick:I=>{I.stopPropagation(),n(E,"all"),i("已开始下载数据包")}})]})})]},E.id)})})]})}),m.jsxs("div",{style:{padding:"10px 14px",borderTop:"1px solid var(--border-subtle)",fontSize:11.5,color:"var(--text-tertiary)"},children:["共 ",y.length," 条 · 点击行查看详情"]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cp="166",lw=0,wg=1,cw=2,E_=1,uw=2,yi=3,gr=0,pn=1,Ei=2,dr=0,to=1,Tg=2,Ag=3,Cg=4,dw=5,zr=100,fw=101,hw=102,pw=103,mw=104,gw=200,vw=201,xw=202,_w=203,Of=204,Bf=205,yw=206,Sw=207,Mw=208,Ew=209,ww=210,Tw=211,Aw=212,Cw=213,bw=214,Rw=0,Pw=1,Lw=2,zc=3,Nw=4,Dw=5,Iw=6,Uw=7,w_=0,Fw=1,zw=2,fr=0,kw=1,Ow=2,Bw=3,Vw=4,Hw=5,jw=6,Gw=7,T_=300,mo=301,go=302,Vf=303,Hf=304,pu=306,jf=1e3,Wr=1001,Gf=1002,Un=1003,Ww=1004,il=1005,Zn=1006,td=1007,Xr=1008,Ii=1009,A_=1010,C_=1011,Ra=1012,bp=1013,ts=1014,Ci=1015,Ua=1016,Rp=1017,Pp=1018,vo=1020,b_=35902,R_=1021,P_=1022,Jn=1023,L_=1024,N_=1025,no=1026,xo=1027,D_=1028,Lp=1029,I_=1030,Np=1031,Dp=1033,Ql=33776,ec=33777,tc=33778,nc=33779,Wf=35840,Xf=35841,$f=35842,Yf=35843,qf=36196,Kf=37492,Zf=37496,Jf=37808,Qf=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,oh=37816,ah=37817,lh=37818,ch=37819,uh=37820,dh=37821,ic=36492,fh=36494,hh=36495,U_=36283,ph=36284,mh=36285,gh=36286,Xw=3200,$w=3201,F_=0,Yw=1,Ki="",si="srgb",Er="srgb-linear",Ip="display-p3",mu="display-p3-linear",kc="linear",st="srgb",Oc="rec709",Bc="p3",ds=7680,bg=519,qw=512,Kw=513,Zw=514,z_=515,Jw=516,Qw=517,eT=518,tT=519,vh=35044,Rg="300 es",bi=2e3,Vc=2001;class Ao{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],rc=Math.PI/180,xh=180/Math.PI;function hr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function nT(t,e){return(t%e+e)%e}function nd(t,e,n){return(1-n)*t+n*e}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,n=0){Ne.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,n,i,r,s,o,a,l,c){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],v=i[8],y=r[0],g=r[3],u=r[6],_=r[1],x=r[4],S=r[7],R=r[2],b=r[5],A=r[8];return s[0]=o*y+a*_+l*R,s[3]=o*g+a*x+l*b,s[6]=o*u+a*S+l*A,s[1]=c*y+f*_+d*R,s[4]=c*g+f*x+d*b,s[7]=c*u+f*S+d*A,s[2]=h*y+p*_+v*R,s[5]=h*g+p*x+v*b,s[8]=h*u+p*S+v*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=f*o-a*c,h=a*l-f*s,p=c*s-o*l,v=n*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return e[0]=d*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(id.makeScale(e,n)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,n){return this.premultiply(id.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const id=new ke;function k_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Hc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iT(){const t=Hc("canvas");return t.style.display="block",t}const Pg={};function Up(t){t in Pg||(Pg[t]=!0,console.warn(t))}function rT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Lg=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ng=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rl={[Er]:{transfer:kc,primaries:Oc,toReference:t=>t,fromReference:t=>t},[si]:{transfer:st,primaries:Oc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[mu]:{transfer:kc,primaries:Bc,toReference:t=>t.applyMatrix3(Ng),fromReference:t=>t.applyMatrix3(Lg)},[Ip]:{transfer:st,primaries:Bc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ng),fromReference:t=>t.applyMatrix3(Lg).convertLinearToSRGB()}},sT=new Set([Er,mu]),Je={enabled:!0,_workingColorSpace:Er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!sT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=rl[e].toReference,r=rl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return rl[t].primaries},getTransfer:function(t){return t===Ki?kc:rl[t].transfer}};function io(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function rd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fs;class oT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=Hc("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Hc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=io(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(io(n[i]/255)*255):n[i]=io(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aT=0;class O_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aT++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sd(r[o].image)):s.push(sd(r[o]))}else s=sd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function sd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?oT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lT=0;class rn extends Ao{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Wr,r=Wr,s=Zn,o=Xr,a=Jn,l=Ii,c=rn.DEFAULT_ANISOTROPY,f=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=hr(),this.name="",this.source=new O_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==T_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case Wr:e.x=e.x<0?0:1;break;case Gf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case Wr:e.y=e.y<0?0:1;break;case Gf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=T_;rn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,n=0,i=0,r=1){Nt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],v=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-y)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+y)<.1&&Math.abs(v+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(p+1)/2,R=(u+1)/2,b=(f+h)/4,A=(d+y)/4,P=(v+g)/4;return x>S&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=b/i,s=A/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=P/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=A/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((g-v)*(g-v)+(d-y)*(d-y)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(g-v)/_,this.y=(d-y)/_,this.z=(h-f)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cT extends Ao{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Nt(0,0,e,n),this.scissorTest=!1,this.viewport=new Nt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new rn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new O_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ns extends cT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class B_ extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uT extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Un,this.minFilter=Un,this.wrapR=Wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=v,e[n+3]=y;return}if(d!==y||l!==h||c!==p||f!==v){let g=1-a;const u=l*h+c*p+f*v+d*y,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),b=Math.atan2(R,u*_);g=Math.sin(g*b)/R,a=Math.sin(a*b)/R}const S=a*_;if(l=l*g+h*S,c=c*g+p*S,f=f*g+v*S,d=d*g+y*S,g===1-a){const R=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=R,c*=R,f*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+f*d+l*p-c*h,e[n+1]=l*v+f*h+c*d-a*p,e[n+2]=c*v+f*p+a*h-l*d,e[n+3]=f*v-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"YXZ":this._x=h*f*d+c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"ZXY":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d-h*p*v;break;case"ZYX":this._x=h*f*d-c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d+h*p*v;break;case"YZX":this._x=h*f*d+c*p*v,this._y=c*p*d+h*f*v,this._z=c*f*v-h*p*d,this._w=c*f*d-h*p*v;break;case"XZY":this._x=h*f*d-c*p*v,this._y=c*p*d-h*f*v,this._z=c*f*v+h*p*d,this._w=c*f*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Dg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Dg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*f,this.y=i+l*f+a*c-s*d,this.z=r+l*d+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new U,Dg=new Fa;class Co{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,jn):jn.fromBufferAttribute(s,o),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),ol.subVectors(this.max,ko),hs.subVectors(e.a,ko),ps.subVectors(e.b,ko),ms.subVectors(e.c,ko),Oi.subVectors(ps,hs),Bi.subVectors(ms,ps),Cr.subVectors(hs,ms);let n=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-Cr.z,Cr.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,Cr.z,0,-Cr.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-Cr.y,Cr.x,0];return!ad(n,hs,ps,ms,ol)||(n=[1,0,0,0,1,0,0,0,1],!ad(n,hs,ps,ms,ol))?!1:(al.crossVectors(Oi,Bi),n=[al.x,al.y,al.z],ad(n,hs,ps,ms,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mi=[new U,new U,new U,new U,new U,new U,new U,new U],jn=new U,sl=new Co,hs=new U,ps=new U,ms=new U,Oi=new U,Bi=new U,Cr=new U,ko=new U,ol=new U,al=new U,br=new U;function ad(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){br.fromArray(t,s);const a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),l=e.dot(br),c=n.dot(br),f=i.dot(br);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const dT=new Co,Oo=new U,ld=new U;class za{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):dT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const n=Oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Oo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(ld)),this.expandByPoint(Oo.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new U,cd=new U,ll=new U,Vi=new U,ud=new U,cl=new U,dd=new U;class gu{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=gi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,n),gi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cd.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(cd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ll),a=Vi.dot(this.direction),l=-Vi.dot(ll),c=Vi.lengthSq(),f=Math.abs(1-o*o);let d,h,p,v;if(f>0)if(d=o*l-a,h=o*a-l,v=s*f,d>=0)if(h>=-v)if(h<=v){const y=1/f;d*=y,h*=y,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(cd).addScaledVector(ll,h),p}intersectSphere(e,n){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),r=gi.dot(gi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,n,i,r,s){ud.subVectors(n,e),cl.subVectors(i,e),dd.crossVectors(ud,cl);let o=this.direction.dot(dd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(cl.crossVectors(Vi,cl));if(l<0)return null;const c=a*this.direction.dot(ud.cross(Vi));if(c<0||l+c>o)return null;const f=-a*Vi.dot(dd);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,n,i,r,s,o,a,l,c,f,d,h,p,v,y,g){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,d,h,p,v,y,g)}set(e,n,i,r,s,o,a,l,c,f,d,h,p,v,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=v,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*d,v=a*f,y=a*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+v*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=v+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,v=c*f,y=c*d;n[0]=h+y*a,n[4]=v*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*f,n[9]=-a,n[2]=p*a-v,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,v=c*f,y=c*d;n[0]=h-y*a,n[4]=-o*d,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*f,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*d,v=a*f,y=a*d;n[0]=l*f,n[4]=v*c-p,n[8]=h*c+y,n[1]=l*d,n[5]=y*c+h,n[9]=p*c-v,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=y-h*d,n[8]=v*d+p,n[1]=d,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*d+v,n[10]=h-y*d}else if(e.order==="XZY"){const h=o*l,p=o*c,v=a*l,y=a*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+y,n[5]=o*f,n[9]=p*d-v,n[2]=v*d-p,n[6]=a*f,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fT,e,hT)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Hi.crossVectors(i,vn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Hi.crossVectors(i,vn)),Hi.normalize(),ul.crossVectors(vn,Hi),r[0]=Hi.x,r[4]=ul.x,r[8]=vn.x,r[1]=Hi.y,r[5]=ul.y,r[9]=vn.y,r[2]=Hi.z,r[6]=ul.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],v=i[2],y=i[6],g=i[10],u=i[14],_=i[3],x=i[7],S=i[11],R=i[15],b=r[0],A=r[4],P=r[8],E=r[12],M=r[1],w=r[5],I=r[9],z=r[13],W=r[2],X=r[6],G=r[10],B=r[14],N=r[3],q=r[7],J=r[11],re=r[15];return s[0]=o*b+a*M+l*W+c*N,s[4]=o*A+a*w+l*X+c*q,s[8]=o*P+a*I+l*G+c*J,s[12]=o*E+a*z+l*B+c*re,s[1]=f*b+d*M+h*W+p*N,s[5]=f*A+d*w+h*X+p*q,s[9]=f*P+d*I+h*G+p*J,s[13]=f*E+d*z+h*B+p*re,s[2]=v*b+y*M+g*W+u*N,s[6]=v*A+y*w+g*X+u*q,s[10]=v*P+y*I+g*G+u*J,s[14]=v*E+y*z+g*B+u*re,s[3]=_*b+x*M+S*W+R*N,s[7]=_*A+x*w+S*X+R*q,s[11]=_*P+x*I+S*G+R*J,s[15]=_*E+x*z+S*B+R*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],v=e[3],y=e[7],g=e[11],u=e[15];return v*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+y*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*f-s*l*f)+g*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*f-i*c*f)+u*(-r*a*f-n*l*d+n*a*h+r*o*d-i*o*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],v=e[12],y=e[13],g=e[14],u=e[15],_=d*g*c-y*h*c+y*l*p-a*g*p-d*l*u+a*h*u,x=v*h*c-f*g*c-v*l*p+o*g*p+f*l*u-o*h*u,S=f*y*c-v*d*c+v*a*p-o*y*p-f*a*u+o*d*u,R=v*d*l-f*y*l-v*a*h+o*y*h+f*a*g-o*d*g,b=n*_+i*x+r*S+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=_*A,e[1]=(y*h*s-d*g*s-y*r*p+i*g*p+d*r*u-i*h*u)*A,e[2]=(a*g*s-y*l*s+y*r*c-i*g*c-a*r*u+i*l*u)*A,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(f*g*s-v*h*s+v*r*p-n*g*p-f*r*u+n*h*u)*A,e[6]=(v*l*s-o*g*s-v*r*c+n*g*c+o*r*u-n*l*u)*A,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*A,e[8]=S*A,e[9]=(v*d*s-f*y*s-v*i*p+n*y*p+f*i*u-n*d*u)*A,e[10]=(o*y*s-v*a*s+v*i*c-n*y*c-o*i*u+n*a*u)*A,e[11]=(f*a*s-o*d*s-f*i*c+n*d*c+o*i*p-n*a*p)*A,e[12]=R*A,e[13]=(f*y*r-v*d*r+v*i*h-n*y*h-f*i*g+n*d*g)*A,e[14]=(v*a*r-o*y*r-v*i*l+n*y*l+o*i*g-n*a*g)*A,e[15]=(o*d*r-f*a*r+f*i*l-n*d*l-o*i*h+n*a*h)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,d=a+a,h=s*c,p=s*f,v=s*d,y=o*f,g=o*d,u=a*d,_=l*c,x=l*f,S=l*d,R=i.x,b=i.y,A=i.z;return r[0]=(1-(y+u))*R,r[1]=(p+S)*R,r[2]=(v-x)*R,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(h+u))*b,r[6]=(g+_)*b,r[7]=0,r[8]=(v+x)*A,r[9]=(g-_)*A,r[10]=(1-(h+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=gs.set(r[0],r[1],r[2]).length();const o=gs.set(r[4],r[5],r[6]).length(),a=gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,f=1/o,d=1/a;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=bi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,v;if(a===bi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Vc)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=bi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*f;let v,y;if(a===bi)v=(o+s)*d,y=-2*d;else if(a===Vc)v=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const gs=new U,Gn=new it,fT=new U(0,0,0),hT=new U(1,1,1),Hi=new U,ul=new U,vn=new U,Ig=new it,Ug=new Fa;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ig,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ug.setFromEuler(this),this.setFromQuaternion(Ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pT=0;const Fg=new U,vs=new Fa,vi=new it,dl=new U,Bo=new U,mT=new U,gT=new Fa,zg=new U(1,0,0),kg=new U(0,1,0),Og=new U(0,0,1),Bg={type:"added"},vT={type:"removed"},xs={type:"childadded",child:null},fd={type:"childremoved",child:null};class bt extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new U,n=new di,i=new Fa,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new ke}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(zg,e)}rotateY(e){return this.rotateOnAxis(kg,e)}rotateZ(e){return this.rotateOnAxis(Og,e)}translateOnAxis(e,n){return Fg.copy(e).applyQuaternion(this.quaternion),this.position.add(Fg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(zg,e)}translateY(e){return this.translateOnAxis(kg,e)}translateZ(e){return this.translateOnAxis(Og,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?dl.copy(e):dl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Bo,dl,this.up):vi.lookAt(dl,Bo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(vi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bg),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(vT),fd.child=e,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bg),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,mT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,gT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}bt.DEFAULT_UP=new U(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new U,xi=new U,hd=new U,_i=new U,_s=new U,ys=new U,Vg=new U,pd=new U,md=new U,gd=new U;class Dn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),xi.subVectors(i,n),hd.subVectors(e,n);const o=Wn.dot(Wn),a=Wn.dot(xi),l=Wn.dot(hd),c=xi.dot(xi),f=xi.dot(hd),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*f)*h,v=(o*f-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),xi.subVectors(e,n),Wn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Wn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_s.subVectors(r,i),ys.subVectors(s,i),pd.subVectors(e,i);const l=_s.dot(pd),c=ys.dot(pd);if(l<=0&&c<=0)return n.copy(i);md.subVectors(e,r);const f=_s.dot(md),d=ys.dot(md);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(_s,o);gd.subVectors(e,s);const p=_s.dot(gd),v=ys.dot(gd);if(v>=0&&p<=v)return n.copy(s);const y=p*c-l*v;if(y<=0&&c>=0&&v<=0)return a=c/(c-v),n.copy(i).addScaledVector(ys,a);const g=f*v-p*d;if(g<=0&&d-f>=0&&p-v>=0)return Vg.subVectors(s,r),a=(d-f)/(d-f+(p-v)),n.copy(r).addScaledVector(Vg,a);const u=1/(g+y+h);return o=y*u,a=h*u,n.copy(i).addScaledVector(_s,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const V_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ji={h:0,s:0,l:0},fl={h:0,s:0,l:0};function vd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Re{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=nT(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vd(o,s,e+1/3),this.g=vd(o,s,e),this.b=vd(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=si){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=si){const i=V_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=io(e.r),this.g=io(e.g),this.b=io(e.b),this}copyLinearToSRGB(e){return this.r=rd(e.r),this.g=rd(e.g),this.b=rd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return Je.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Zt(Yt.r*255,0,255))*65536+Math.round(Zt(Yt.g*255,0,255))*256+Math.round(Zt(Yt.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Yt.copy(this),n);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=f<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Yt.copy(this),n),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=si){Je.fromWorkingColorSpace(Yt.copy(this),e);const n=Yt.r,i=Yt.g,r=Yt.b;return e!==si?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ji),this.setHSL(ji.h+e,ji.s+n,ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ji),e.getHSL(fl);const i=nd(ji.h,fl.h,n),r=nd(ji.s,fl.s,n),s=nd(ji.l,fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new Re;Re.NAMES=V_;let xT=0;class wr extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=to,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Of,this.blendDst=Bf,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=zc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Of&&(i.blendSrc=this.blendSrc),this.blendDst!==Bf&&(i.blendDst=this.blendDst),this.blendEquation!==zr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ro extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=w_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new U,hl=new Ne;class kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Up("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=li(n,this.array)),n}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=li(n,this.array)),n}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=li(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=li(n,this.array)),n}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vh&&(e.usage=this.usage),e}}class H_ extends kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class j_ extends kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class St extends kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _T=0;const bn=new it,xd=new bt,Ss=new U,xn=new Co,Vo=new Co,Ft=new U;class yt extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(k_(e)?j_:H_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return xd.lookAt(e),xd.updateMatrix(),this.applyMatrix4(xd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new St(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(xn.min,Vo.min),xn.expandByPoint(Ft),Ft.addVectors(xn.max,Vo.max),xn.expandByPoint(Ft)):(xn.expandByPoint(Vo.min),xn.expandByPoint(Vo.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ft.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Ft.add(Ss)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new U,l[P]=new U;const c=new U,f=new U,d=new U,h=new Ne,p=new Ne,v=new Ne,y=new U,g=new U;function u(P,E,M){c.fromBufferAttribute(i,P),f.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,E),v.fromBufferAttribute(s,M),f.sub(c),d.sub(c),p.sub(h),v.sub(h);const w=1/(p.x*v.y-v.x*p.y);isFinite(w)&&(y.copy(f).multiplyScalar(v.y).addScaledVector(d,-p.y).multiplyScalar(w),g.copy(d).multiplyScalar(p.x).addScaledVector(f,-v.x).multiplyScalar(w),a[P].add(y),a[E].add(y),a[M].add(y),l[P].add(g),l[E].add(g),l[M].add(g))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,E=_.length;P<E;++P){const M=_[P],w=M.start,I=M.count;for(let z=w,W=w+I;z<W;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new U,S=new U,R=new U,b=new U;function A(P){R.fromBufferAttribute(r,P),b.copy(R);const E=a[P];x.copy(E),x.sub(R.multiplyScalar(R.dot(E))).normalize(),S.crossVectors(b,E);const w=S.dot(l[P])<0?-1:1;o.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,E=_.length;P<E;++P){const M=_[P],w=M.start,I=M.count;for(let z=w,W=w+I;z<W;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,f=new U,d=new U;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),y=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,d=a.normalized,h=new c.constructor(l.length*f);let p=0,v=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*f;for(let u=0;u<f;u++)h[v++]=c[p++]}return new kn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hg=new it,Rr=new gu,pl=new za,jg=new U,Ms=new U,Es=new U,ws=new U,_d=new U,ml=new U,gl=new Ne,vl=new Ne,xl=new Ne,Gg=new U,Wg=new U,Xg=new U,_l=new U,yl=new U;class kt extends bt{constructor(e=new yt,n=new ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],d=s[l];f!==0&&(_d.fromBufferAttribute(d,e),o?ml.addScaledVector(_d,f):ml.addScaledVector(_d.sub(n),f))}n.add(ml)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(pl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(pl,jg)===null||Rr.origin.distanceToSquared(jg)>(e.far-e.near)**2))&&(Hg.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(Hg),!(i.boundingBox!==null&&Rr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Rr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const g=h[v],u=o[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,R=x;S<R;S+=3){const b=a.getX(S),A=a.getX(S+1),P=a.getX(S+2);r=Sl(this,u,e,i,c,f,d,b,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let g=v,u=y;g<u;g+=3){const _=a.getX(g),x=a.getX(g+1),S=a.getX(g+2);r=Sl(this,o,e,i,c,f,d,_,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=h.length;v<y;v++){const g=h[v],u=o[g.materialIndex],_=Math.max(g.start,p.start),x=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let S=_,R=x;S<R;S+=3){const b=S,A=S+1,P=S+2;r=Sl(this,u,e,i,c,f,d,b,A,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,u=y;g<u;g+=3){const _=g,x=g+1,S=g+2;r=Sl(this,o,e,i,c,f,d,_,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function yT(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;yl.copy(a),yl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(yl);return c<n.near||c>n.far?null:{distance:c,point:yl.clone(),object:t}}function Sl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ms),t.getVertexPosition(l,Es),t.getVertexPosition(c,ws);const f=yT(t,e,n,i,Ms,Es,ws,_l);if(f){r&&(gl.fromBufferAttribute(r,a),vl.fromBufferAttribute(r,l),xl.fromBufferAttribute(r,c),f.uv=Dn.getInterpolation(_l,Ms,Es,ws,gl,vl,xl,new Ne)),s&&(gl.fromBufferAttribute(s,a),vl.fromBufferAttribute(s,l),xl.fromBufferAttribute(s,c),f.uv1=Dn.getInterpolation(_l,Ms,Es,ws,gl,vl,xl,new Ne)),o&&(Gg.fromBufferAttribute(o,a),Wg.fromBufferAttribute(o,l),Xg.fromBufferAttribute(o,c),f.normal=Dn.getInterpolation(_l,Ms,Es,ws,Gg,Wg,Xg,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Dn.getNormal(Ms,Es,ws,d.normal),f.face=d}return f}class fi extends yt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(d,2));function v(y,g,u,_,x,S,R,b,A,P,E){const M=S/A,w=R/P,I=S/2,z=R/2,W=b/2,X=A+1,G=P+1;let B=0,N=0;const q=new U;for(let J=0;J<G;J++){const re=J*w-z;for(let ye=0;ye<X;ye++){const Ge=ye*M-I;q[y]=Ge*_,q[g]=re*x,q[u]=W,c.push(q.x,q.y,q.z),q[y]=0,q[g]=0,q[u]=b>0?1:-1,f.push(q.x,q.y,q.z),d.push(ye/A),d.push(1-J/P),B+=1}}for(let J=0;J<P;J++)for(let re=0;re<A;re++){const ye=h+re+X*J,Ge=h+re+X*(J+1),Y=h+(re+1)+X*(J+1),ie=h+(re+1)+X*J;l.push(ye,Ge,ie),l.push(Ge,Y,ie),N+=6}a.addGroup(p,N,E),p+=N,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=_o(t[n]);for(const r in i)e[r]=i[r]}return e}function ST(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function G_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const MT={clone:_o,merge:en};var ET=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ET,this.fragmentShader=wT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=ST(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class W_ extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new U,$g=new Ne,Yg=new Ne;class Sn extends W_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,$g,Yg),n.subVectors(Yg,$g)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(rc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ts=-90,As=1;class TT extends bt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(Ts,As,e,n);r.layers=this.layers,this.add(r);const s=new Sn(Ts,As,e,n);s.layers=this.layers,this.add(s);const o=new Sn(Ts,As,e,n);o.layers=this.layers,this.add(o);const a=new Sn(Ts,As,e,n);a.layers=this.layers,this.add(a);const l=new Sn(Ts,As,e,n);l.layers=this.layers,this.add(l);const c=new Sn(Ts,As,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Vc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class X_ extends rn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:mo,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AT extends ns{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new X_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fi(5,5,5),s=new vr({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:dr});s.uniforms.tEquirect.value=n;const o=new kt(r,s),a=n.minFilter;return n.minFilter===Xr&&(n.minFilter=Zn),new TT(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const yd=new U,CT=new U,bT=new ke;class Ur{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yd.subVectors(i,n).cross(CT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||bT.getNormalMatrix(e),r=this.coplanarPoint(yd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pr=new za,Ml=new U;class zp{constructor(e=new Ur,n=new Ur,i=new Ur,r=new Ur,s=new Ur,o=new Ur){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],p=r[8],v=r[9],y=r[10],g=r[11],u=r[12],_=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,g-p,S-u).normalize(),i[1].setComponents(l+s,h+c,g+p,S+u).normalize(),i[2].setComponents(l+o,h+f,g+v,S+_).normalize(),i[3].setComponents(l-o,h-f,g-v,S-_).normalize(),i[4].setComponents(l-a,h-d,g-y,S-x).normalize(),n===bi)i[5].setComponents(l+a,h+d,g+y,S+x).normalize();else if(n===Vc)i[5].setComponents(a,d,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pr)}intersectsSprite(e){return Pr.center.set(0,0,0),Pr.radius=.7071067811865476,Pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function RT(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const f=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&h.length===0&&t.bufferSubData(c,0,f),h.length!==0){for(let p=0,v=h.length;p<v;p++){const y=h[p];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class yo extends yt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,d=e/a,h=n/l,p=[],v=[],y=[],g=[];for(let u=0;u<f;u++){const _=u*h-o;for(let x=0;x<c;x++){const S=x*d-s;v.push(S,-_,0),y.push(0,0,1),g.push(x/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const x=_+c*u,S=_+c*(u+1),R=_+1+c*(u+1),b=_+1+c*u;p.push(x,S,b),p.push(S,R,b)}this.setIndex(p),this.setAttribute("position",new St(v,3)),this.setAttribute("normal",new St(y,3)),this.setAttribute("uv",new St(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.width,e.height,e.widthSegments,e.heightSegments)}}var PT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,NT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,OT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,QT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oA="gl_FragColor = linearToOutputTexel( gl_FragColor );",aA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,lA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,xA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_A=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,RA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,XA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$A=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,QA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_C=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$C=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,a2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:PT,alphahash_pars_fragment:LT,alphamap_fragment:NT,alphamap_pars_fragment:DT,alphatest_fragment:IT,alphatest_pars_fragment:UT,aomap_fragment:FT,aomap_pars_fragment:zT,batching_pars_vertex:kT,batching_vertex:OT,begin_vertex:BT,beginnormal_vertex:VT,bsdfs:HT,iridescence_fragment:jT,bumpmap_pars_fragment:GT,clipping_planes_fragment:WT,clipping_planes_pars_fragment:XT,clipping_planes_pars_vertex:$T,clipping_planes_vertex:YT,color_fragment:qT,color_pars_fragment:KT,color_pars_vertex:ZT,color_vertex:JT,common:QT,cube_uv_reflection_fragment:eA,defaultnormal_vertex:tA,displacementmap_pars_vertex:nA,displacementmap_vertex:iA,emissivemap_fragment:rA,emissivemap_pars_fragment:sA,colorspace_fragment:oA,colorspace_pars_fragment:aA,envmap_fragment:lA,envmap_common_pars_fragment:cA,envmap_pars_fragment:uA,envmap_pars_vertex:dA,envmap_physical_pars_fragment:MA,envmap_vertex:fA,fog_vertex:hA,fog_pars_vertex:pA,fog_fragment:mA,fog_pars_fragment:gA,gradientmap_pars_fragment:vA,lightmap_pars_fragment:xA,lights_lambert_fragment:_A,lights_lambert_pars_fragment:yA,lights_pars_begin:SA,lights_toon_fragment:EA,lights_toon_pars_fragment:wA,lights_phong_fragment:TA,lights_phong_pars_fragment:AA,lights_physical_fragment:CA,lights_physical_pars_fragment:bA,lights_fragment_begin:RA,lights_fragment_maps:PA,lights_fragment_end:LA,logdepthbuf_fragment:NA,logdepthbuf_pars_fragment:DA,logdepthbuf_pars_vertex:IA,logdepthbuf_vertex:UA,map_fragment:FA,map_pars_fragment:zA,map_particle_fragment:kA,map_particle_pars_fragment:OA,metalnessmap_fragment:BA,metalnessmap_pars_fragment:VA,morphinstance_vertex:HA,morphcolor_vertex:jA,morphnormal_vertex:GA,morphtarget_pars_vertex:WA,morphtarget_vertex:XA,normal_fragment_begin:$A,normal_fragment_maps:YA,normal_pars_fragment:qA,normal_pars_vertex:KA,normal_vertex:ZA,normalmap_pars_fragment:JA,clearcoat_normal_fragment_begin:QA,clearcoat_normal_fragment_maps:eC,clearcoat_pars_fragment:tC,iridescence_pars_fragment:nC,opaque_fragment:iC,packing:rC,premultiplied_alpha_fragment:sC,project_vertex:oC,dithering_fragment:aC,dithering_pars_fragment:lC,roughnessmap_fragment:cC,roughnessmap_pars_fragment:uC,shadowmap_pars_fragment:dC,shadowmap_pars_vertex:fC,shadowmap_vertex:hC,shadowmask_pars_fragment:pC,skinbase_vertex:mC,skinning_pars_vertex:gC,skinning_vertex:vC,skinnormal_vertex:xC,specularmap_fragment:_C,specularmap_pars_fragment:yC,tonemapping_fragment:SC,tonemapping_pars_fragment:MC,transmission_fragment:EC,transmission_pars_fragment:wC,uv_pars_fragment:TC,uv_pars_vertex:AC,uv_vertex:CC,worldpos_vertex:bC,background_vert:RC,background_frag:PC,backgroundCube_vert:LC,backgroundCube_frag:NC,cube_vert:DC,cube_frag:IC,depth_vert:UC,depth_frag:FC,distanceRGBA_vert:zC,distanceRGBA_frag:kC,equirect_vert:OC,equirect_frag:BC,linedashed_vert:VC,linedashed_frag:HC,meshbasic_vert:jC,meshbasic_frag:GC,meshlambert_vert:WC,meshlambert_frag:XC,meshmatcap_vert:$C,meshmatcap_frag:YC,meshnormal_vert:qC,meshnormal_frag:KC,meshphong_vert:ZC,meshphong_frag:JC,meshphysical_vert:QC,meshphysical_frag:e2,meshtoon_vert:t2,meshtoon_frag:n2,points_vert:i2,points_frag:r2,shadow_vert:s2,shadow_frag:o2,sprite_vert:a2,sprite_frag:l2},ce={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},oi={basic:{uniforms:en([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:en([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:en([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:en([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:en([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Re(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:en([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:en([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:en([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:en([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:en([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:en([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:en([ce.common,ce.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:en([ce.lights,ce.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};oi.physical={uniforms:en([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const El={r:0,b:0,g:0},Lr=new di,c2=new it;function u2(t,e,n,i,r,s,o){const a=new Re(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function v(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function y(_){let x=!1;const S=v(_);S===null?u(a,l):S&&S.isColor&&(u(S,1),x=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(_,x){const S=v(x);S&&(S.isCubeTexture||S.mapping===pu)?(f===void 0&&(f=new kt(new fi(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:_o(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Lr.copy(x.backgroundRotation),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(c2.makeRotationFromEuler(Lr)),f.material.toneMapped=Je.getTransfer(S.colorSpace)!==st,(d!==S||h!==S.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new kt(new yo(2,2),new vr({name:"BackgroundMaterial",uniforms:_o(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,x){_.getRGB(El,G_(t)),i.buffers.color.setClear(El.r,El.g,El.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:y,addToRenderList:g}}function d2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(M,w,I,z,W){let X=!1;const G=d(z,I,w);s!==G&&(s=G,c(s.object)),X=p(M,z,I,W),X&&v(M,z,I,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,S(M,w,I,z),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function f(M){return t.deleteVertexArray(M)}function d(M,w,I){const z=I.wireframe===!0;let W=i[M.id];W===void 0&&(W={},i[M.id]=W);let X=W[w.id];X===void 0&&(X={},W[w.id]=X);let G=X[z];return G===void 0&&(G=h(l()),X[z]=G),G}function h(M){const w=[],I=[],z=[];for(let W=0;W<n;W++)w[W]=0,I[W]=0,z[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:I,attributeDivisors:z,object:M,attributes:{},index:null}}function p(M,w,I,z){const W=s.attributes,X=w.attributes;let G=0;const B=I.getAttributes();for(const N in B)if(B[N].location>=0){const J=W[N];let re=X[N];if(re===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(re=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(re=M.instanceColor)),J===void 0||J.attribute!==re||re&&J.data!==re.data)return!0;G++}return s.attributesNum!==G||s.index!==z}function v(M,w,I,z){const W={},X=w.attributes;let G=0;const B=I.getAttributes();for(const N in B)if(B[N].location>=0){let J=X[N];J===void 0&&(N==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),N==="instanceColor"&&M.instanceColor&&(J=M.instanceColor));const re={};re.attribute=J,J&&J.data&&(re.data=J.data),W[N]=re,G++}s.attributes=W,s.attributesNum=G,s.index=z}function y(){const M=s.newAttributes;for(let w=0,I=M.length;w<I;w++)M[w]=0}function g(M){u(M,0)}function u(M,w){const I=s.newAttributes,z=s.enabledAttributes,W=s.attributeDivisors;I[M]=1,z[M]===0&&(t.enableVertexAttribArray(M),z[M]=1),W[M]!==w&&(t.vertexAttribDivisor(M,w),W[M]=w)}function _(){const M=s.newAttributes,w=s.enabledAttributes;for(let I=0,z=w.length;I<z;I++)w[I]!==M[I]&&(t.disableVertexAttribArray(I),w[I]=0)}function x(M,w,I,z,W,X,G){G===!0?t.vertexAttribIPointer(M,w,I,W,X):t.vertexAttribPointer(M,w,I,z,W,X)}function S(M,w,I,z){y();const W=z.attributes,X=I.getAttributes(),G=w.defaultAttributeValues;for(const B in X){const N=X[B];if(N.location>=0){let q=W[B];if(q===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(q=M.instanceColor)),q!==void 0){const J=q.normalized,re=q.itemSize,ye=e.get(q);if(ye===void 0)continue;const Ge=ye.buffer,Y=ye.type,ie=ye.bytesPerElement,de=Y===t.INT||Y===t.UNSIGNED_INT||q.gpuType===bp;if(q.isInterleavedBufferAttribute){const fe=q.data,De=fe.stride,Oe=q.offset;if(fe.isInstancedInterleavedBuffer){for(let He=0;He<N.locationSize;He++)u(N.location+He,fe.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let He=0;He<N.locationSize;He++)g(N.location+He);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let He=0;He<N.locationSize;He++)x(N.location+He,re/N.locationSize,Y,J,De*ie,(Oe+re/N.locationSize*He)*ie,de)}else{if(q.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)u(N.location+fe,q.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let fe=0;fe<N.locationSize;fe++)g(N.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let fe=0;fe<N.locationSize;fe++)x(N.location+fe,re/N.locationSize,Y,J,re*ie,re/N.locationSize*fe*ie,de)}}else if(G!==void 0){const J=G[B];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(N.location,J);break;case 3:t.vertexAttrib3fv(N.location,J);break;case 4:t.vertexAttrib4fv(N.location,J);break;default:t.vertexAttrib1fv(N.location,J)}}}}_()}function R(){P();for(const M in i){const w=i[M];for(const I in w){const z=w[I];for(const W in z)f(z[W].object),delete z[W];delete w[I]}delete i[M]}}function b(M){if(i[M.id]===void 0)return;const w=i[M.id];for(const I in w){const z=w[I];for(const W in z)f(z[W].object),delete z[W];delete w[I]}delete i[M.id]}function A(M){for(const w in i){const I=i[w];if(I[M.id]===void 0)continue;const z=I[M.id];for(const W in z)f(z[W].object),delete z[W];delete I[M.id]}}function P(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:_}}function f2(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,d){d!==0&&(t.drawArraysInstanced(i,c,f,d),n.update(f,i,d))}function a(c,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,d);let p=0;for(let v=0;v<d;v++)p+=f[v];n.update(p,i,1)}function l(c,f,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],f[v],h[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,d);let v=0;for(let y=0;y<d;y++)v+=f[y];for(let y=0;y<h.length;y++)n.update(v,i,h[y])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function h2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==Jn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const A=b===Ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ii&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ci&&!A)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),g=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,R=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:u,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:S,maxSamples:R}}function p2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ur,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,u=t.get(d);if(!r||v===null||v.length===0||s&&!g)s?f(null):c();else{const _=s?0:i,x=_*4;let S=u.clippingState||null;l.value=S,S=f(v,h,x,p);for(let R=0;R!==x;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,v){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=l.value,v!==!0||g===null){const u=p+y*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<u)&&(g=new Float32Array(u));for(let x=0,S=p;x!==y;++x,S+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function m2(t){let e=new WeakMap;function n(o,a){return a===Vf?o.mapping=mo:a===Hf&&(o.mapping=go),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vf||a===Hf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new AT(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Y_ extends W_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Xs=4,qg=[.125,.215,.35,.446,.526,.582],kr=20,Sd=new Y_,Kg=new Re;let Md=null,Ed=0,wd=0,Td=!1;const Fr=(1+Math.sqrt(5))/2,Cs=1/Fr,Zg=[new U(-Fr,Cs,0),new U(Fr,Cs,0),new U(-Cs,0,Fr),new U(Cs,0,Fr),new U(0,Fr,-Cs),new U(0,Fr,Cs),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ev(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,Ed,wd),this._renderer.xr.enabled=Td,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===mo||e.mapping===go?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Ua,format:Jn,colorSpace:Er,depthBuffer:!1},r=Qg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g2(s)),this._blurMaterial=v2(s,e,n)}return r}_compileMaterial(e){const n=new kt(this._lodPlanes[0],e);this._renderer.compile(n,Sd)}_sceneToCubeUV(e,n,i,r){const a=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Kg),f.toneMapping=fr,f.autoClear=!1;const p=new ro({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),v=new kt(new fi,p);let y=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,y=!0):(p.color.copy(Kg),y=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;wl(r,_*x,u>2?x:0,x,x),f.setRenderTarget(r),y&&f.render(v,a),f.render(e,a)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===mo||e.mapping===go;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ev());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zg[(r-s-1)%Zg.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new kt(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*kr-1),y=s/v,g=isFinite(s)?1+Math.floor(f*y):kr;g>kr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${kr}`);const u=[];let _=0;for(let A=0;A<kr;++A){const P=A/y,E=Math.exp(-P*P/2);u.push(E),A===0?_+=E:A<g&&(_+=2*E)}for(let A=0;A<u.length;A++)u[A]=u[A]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const S=this._sizeLods[r],R=3*S*(r>x-Xs?r-x+Xs:0),b=4*(this._cubeSize-S);wl(n,R,b,3*S,2*S),l.setRenderTarget(n),l.render(d,Sd)}}function g2(t){const e=[],n=[],i=[];let r=t;const s=t-Xs+1+qg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Xs?l=qg[o-t+Xs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,v=6,y=3,g=2,u=1,_=new Float32Array(y*v*p),x=new Float32Array(g*v*p),S=new Float32Array(u*v*p);for(let b=0;b<p;b++){const A=b%3*2/3-1,P=b>2?0:-1,E=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];_.set(E,y*v*b),x.set(h,g*v*b);const M=[b,b,b,b,b,b];S.set(M,u*v*b)}const R=new yt;R.setAttribute("position",new kn(_,y)),R.setAttribute("uv",new kn(x,g)),R.setAttribute("faceIndex",new kn(S,u)),e.push(R),r>Xs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Qg(t,e,n){const i=new ns(t,e,n);return i.texture.mapping=pu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function v2(t,e,n){const i=new Float32Array(kr),r=new U(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function ev(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function tv(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function kp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function x2(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vf||l===Hf,f=l===mo||l===go;if(c||f){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Jg(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Jg(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function _2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Up("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y2(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const y=h.morphAttributes[v];for(let g=0,u=y.length;g<u;g++)e.remove(y[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const y=p[v];for(let g=0,u=y.length;g<u;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,v=d.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let x=0,S=_.length;x<S;x+=3){const R=_[x+0],b=_[x+1],A=_[x+2];h.push(R,b,b,A,A,R)}}else if(v!==void 0){const _=v.array;y=v.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const R=x+0,b=x+1,A=x+2;h.push(R,b,b,A,A,R)}}else return;const g=new(k_(h)?j_:H_)(h,1);g.version=y;const u=s.get(d);u&&e.remove(u),s.set(d,g)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:f}}function S2(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,h*o,v),n.update(p,i,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,v);let g=0;for(let u=0;u<v;u++)g+=p[u];n.update(g,i,1)}function d(h,p,v,y){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<h.length;u++)c(h[u]/o,p[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,v);let u=0;for(let _=0;_<v;_++)u+=p[_];for(let _=0;_<y.length;_++)n.update(u,i,y[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function M2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function E2(t,e,n){const i=new WeakMap,r=new Nt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;h!==void 0&&h.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),g===!0&&(S=3);let R=a.attributes.position.count*S,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*b*4*d),P=new B_(A,R,b,d);P.type=Ci,P.needsUpdate=!0;const E=S*4;for(let w=0;w<d;w++){const I=u[w],z=_[w],W=x[w],X=R*b*4*w;for(let G=0;G<I.count;G++){const B=G*E;v===!0&&(r.fromBufferAttribute(I,G),A[X+B+0]=r.x,A[X+B+1]=r.y,A[X+B+2]=r.z,A[X+B+3]=0),y===!0&&(r.fromBufferAttribute(z,G),A[X+B+4]=r.x,A[X+B+5]=r.y,A[X+B+6]=r.z,A[X+B+7]=0),g===!0&&(r.fromBufferAttribute(W,G),A[X+B+8]=r.x,A[X+B+9]=r.y,A[X+B+10]=r.z,A[X+B+11]=W.itemSize===4?r.w:1)}}h={count:d,texture:P,size:new Ne(R,b)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let g=0;g<c.length;g++)v+=c[g];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function w2(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class q_ extends rn{constructor(e,n,i,r,s,o,a,l,c,f=no){if(f!==no&&f!==xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===no&&(i=ts),i===void 0&&f===xo&&(i=vo),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const K_=new rn,nv=new q_(1,1),Z_=new B_,J_=new uT,Q_=new X_,iv=[],rv=[],sv=new Float32Array(16),ov=new Float32Array(9),av=new Float32Array(4);function bo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=iv[r];if(s===void 0&&(s=new Float32Array(r),iv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vu(t,e){let n=rv[e];n===void 0&&(n=new Int32Array(e),rv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function T2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function A2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function C2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function b2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function R2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;av.set(i),t.uniformMatrix2fv(this.addr,!1,av),Ut(n,i)}}function P2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;ov.set(i),t.uniformMatrix3fv(this.addr,!1,ov),Ut(n,i)}}function L2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(It(n,i))return;sv.set(i),t.uniformMatrix4fv(this.addr,!1,sv),Ut(n,i)}}function N2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function D2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function F2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function B2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(nv.compareFunction=z_,s=nv):s=K_,n.setTexture2D(e||s,r)}function V2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||J_,r)}function H2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Q_,r)}function j2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Z_,r)}function G2(t){switch(t){case 5126:return T2;case 35664:return A2;case 35665:return C2;case 35666:return b2;case 35674:return R2;case 35675:return P2;case 35676:return L2;case 5124:case 35670:return N2;case 35667:case 35671:return D2;case 35668:case 35672:return I2;case 35669:case 35673:return U2;case 5125:return F2;case 36294:return z2;case 36295:return k2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return B2;case 35679:case 36299:case 36307:return V2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return j2}}function W2(t,e){t.uniform1fv(this.addr,e)}function X2(t,e){const n=bo(e,this.size,2);t.uniform2fv(this.addr,n)}function $2(t,e){const n=bo(e,this.size,3);t.uniform3fv(this.addr,n)}function Y2(t,e){const n=bo(e,this.size,4);t.uniform4fv(this.addr,n)}function q2(t,e){const n=bo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function K2(t,e){const n=bo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Z2(t,e){const n=bo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function J2(t,e){t.uniform1iv(this.addr,e)}function Q2(t,e){t.uniform2iv(this.addr,e)}function eb(t,e){t.uniform3iv(this.addr,e)}function tb(t,e){t.uniform4iv(this.addr,e)}function nb(t,e){t.uniform1uiv(this.addr,e)}function ib(t,e){t.uniform2uiv(this.addr,e)}function rb(t,e){t.uniform3uiv(this.addr,e)}function sb(t,e){t.uniform4uiv(this.addr,e)}function ob(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||K_,s[o])}function ab(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||J_,s[o])}function lb(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Q_,s[o])}function cb(t,e,n){const i=this.cache,r=e.length,s=vu(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Z_,s[o])}function ub(t){switch(t){case 5126:return W2;case 35664:return X2;case 35665:return $2;case 35666:return Y2;case 35674:return q2;case 35675:return K2;case 35676:return Z2;case 5124:case 35670:return J2;case 35667:case 35671:return Q2;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ob;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}class db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=G2(n.type)}}class fb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ub(n.type)}}class hb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function lv(t,e){t.seq.push(e),t.map[e.id]=e}function pb(t,e,n){const i=t.name,r=i.length;for(Ad.lastIndex=0;;){const s=Ad.exec(i),o=Ad.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){lv(n,c===void 0?new db(a,t,e):new fb(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new hb(a),lv(n,d)),n=d}}}class sc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);pb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function cv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mb=37297;let gb=0;function vb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function xb(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===Bc&&n===Oc?i="LinearDisplayP3ToLinearSRGB":e===Oc&&n===Bc&&(i="LinearSRGBToLinearDisplayP3"),t){case Er:case mu:return[i,"LinearTransferOETF"];case si:case Ip:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function uv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+vb(t.getShaderSource(e),o)}else return r}function _b(t,e){const n=xb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function yb(t,e){let n;switch(e){case kw:n="Linear";break;case Ow:n="Reinhard";break;case Bw:n="OptimizedCineon";break;case Vw:n="ACESFilmic";break;case jw:n="AgX";break;case Gw:n="Neutral";break;case Hw:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Sb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function Mb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Eb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Zo(t){return t!==""}function dv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(t){return t.replace(wb,Ab)}const Tb=new Map;function Ab(t,e){let n=ze[e];if(n===void 0){const i=Tb.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return _h(n)}const Cb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hv(t){return t.replace(Cb,bb)}function bb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function pv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===E_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Pb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case mo:case go:e="ENVMAP_TYPE_CUBE";break;case pu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case go:e="ENVMAP_MODE_REFRACTION";break}return e}function Nb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case w_:e="ENVMAP_BLENDING_MULTIPLY";break;case Fw:e="ENVMAP_BLENDING_MIX";break;case zw:e="ENVMAP_BLENDING_ADD";break}return e}function Db(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Ib(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Rb(n),c=Pb(n),f=Lb(n),d=Nb(n),h=Db(n),p=Sb(n),v=Mb(s),y=r.createProgram();let g,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Zo).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Zo).join(`
`),u.length>0&&(u+=`
`)):(g=[pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),u=[pv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fr?"#define TONE_MAPPING":"",n.toneMapping!==fr?ze.tonemapping_pars_fragment:"",n.toneMapping!==fr?yb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,_b("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Zo).join(`
`)),o=_h(o),o=dv(o,n),o=fv(o,n),a=_h(a),a=dv(a,n),a=fv(a,n),o=hv(o),a=hv(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=_+g+o,S=_+u+a,R=cv(r,r.VERTEX_SHADER,x),b=cv(r,r.FRAGMENT_SHADER,S);r.attachShader(y,R),r.attachShader(y,b),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(w){if(t.debug.checkShaderErrors){const I=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(R).trim(),W=r.getShaderInfoLog(b).trim();let X=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,R,b);else{const B=uv(r,R,"vertex"),N=uv(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+I+`
`+B+`
`+N)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||W==="")&&(G=!1);G&&(w.diagnostics={runnable:X,programLog:I,vertexShader:{log:z,prefix:g},fragmentShader:{log:W,prefix:u}})}r.deleteShader(R),r.deleteShader(b),P=new sc(r,y),E=Eb(r,y)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,mb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=b,this}let Ub=0;class Fb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zb(e),n.set(e,i)),i}}class zb{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}}function kb(t,e,n,i,r,s,o){const a=new Fp,l=new Fb,c=new Set,f=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,M,w,I,z){const W=I.fog,X=z.geometry,G=E.isMeshStandardMaterial?I.environment:null,B=(E.isMeshStandardMaterial?n:e).get(E.envMap||G),N=B&&B.mapping===pu?B.image.height:null,q=v[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const J=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,re=J!==void 0?J.length:0;let ye=0;X.morphAttributes.position!==void 0&&(ye=1),X.morphAttributes.normal!==void 0&&(ye=2),X.morphAttributes.color!==void 0&&(ye=3);let Ge,Y,ie,de;if(q){const $e=oi[q];Ge=$e.vertexShader,Y=$e.fragmentShader}else Ge=E.vertexShader,Y=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),de=l.getFragmentShaderID(E);const fe=t.getRenderTarget(),De=z.isInstancedMesh===!0,Oe=z.isBatchedMesh===!0,He=!!E.map,pt=!!E.matcap,D=!!B,Mt=!!E.aoMap,Ze=!!E.lightMap,et=!!E.bumpMap,Me=!!E.normalMap,Et=!!E.displacementMap,Pe=!!E.emissiveMap,Ie=!!E.metalnessMap,L=!!E.roughnessMap,T=E.anisotropy>0,j=E.clearcoat>0,ee=E.dispersion>0,ne=E.iridescence>0,Q=E.sheen>0,Ee=E.transmission>0,ue=T&&!!E.anisotropyMap,ge=j&&!!E.clearcoatMap,Fe=j&&!!E.clearcoatNormalMap,se=j&&!!E.clearcoatRoughnessMap,me=ne&&!!E.iridescenceMap,je=ne&&!!E.iridescenceThicknessMap,be=Q&&!!E.sheenColorMap,ve=Q&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Be=!!E.specularColorMap,lt=!!E.specularIntensityMap,F=Ee&&!!E.transmissionMap,oe=Ee&&!!E.thicknessMap,K=!!E.gradientMap,Z=!!E.alphaMap,le=E.alphaTest>0,Te=!!E.alphaHash,We=!!E.extensions;let wt=fr;E.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(wt=t.toneMapping);const Bt={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:Y,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:de,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&z._colorsTexture!==null,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Er,alphaToCoverage:!!E.alphaToCoverage,map:He,matcap:pt,envMap:D,envMapMode:D&&B.mapping,envMapCubeUVHeight:N,aoMap:Mt,lightMap:Ze,bumpMap:et,normalMap:Me,displacementMap:h&&Et,emissiveMap:Pe,normalMapObjectSpace:Me&&E.normalMapType===Yw,normalMapTangentSpace:Me&&E.normalMapType===F_,metalnessMap:Ie,roughnessMap:L,anisotropy:T,anisotropyMap:ue,clearcoat:j,clearcoatMap:ge,clearcoatNormalMap:Fe,clearcoatRoughnessMap:se,dispersion:ee,iridescence:ne,iridescenceMap:me,iridescenceThicknessMap:je,sheen:Q,sheenColorMap:be,sheenRoughnessMap:ve,specularMap:Le,specularColorMap:Be,specularIntensityMap:lt,transmission:Ee,transmissionMap:F,thicknessMap:oe,gradientMap:K,opaque:E.transparent===!1&&E.blending===to&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:Te,combine:E.combine,mapUv:He&&y(E.map.channel),aoMapUv:Mt&&y(E.aoMap.channel),lightMapUv:Ze&&y(E.lightMap.channel),bumpMapUv:et&&y(E.bumpMap.channel),normalMapUv:Me&&y(E.normalMap.channel),displacementMapUv:Et&&y(E.displacementMap.channel),emissiveMapUv:Pe&&y(E.emissiveMap.channel),metalnessMapUv:Ie&&y(E.metalnessMap.channel),roughnessMapUv:L&&y(E.roughnessMap.channel),anisotropyMapUv:ue&&y(E.anisotropyMap.channel),clearcoatMapUv:ge&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:je&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(E.sheenRoughnessMap.channel),specularMapUv:Le&&y(E.specularMap.channel),specularColorMapUv:Be&&y(E.specularColorMap.channel),specularIntensityMapUv:lt&&y(E.specularIntensityMap.channel),transmissionMapUv:F&&y(E.transmissionMap.channel),thicknessMapUv:oe&&y(E.thicknessMap.channel),alphaMapUv:Z&&y(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Me||T),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!X.attributes.uv&&(He||Z),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&w.length>0,shadowMapType:t.shadowMap.type,toneMapping:wt,decodeVideoTexture:He&&E.map.isVideoTexture===!0&&Je.getTransfer(E.map.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ei,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:We&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&E.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function u(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const w in E.defines)M.push(w),M.push(E.defines[w]);return E.isRawShaderMaterial===!1&&(_(M,E),x(M,E),M.push(t.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function _(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function x(E,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.doubleSided&&a.enable(10),M.flipSided&&a.enable(11),M.useDepthPacking&&a.enable(12),M.dithering&&a.enable(13),M.transmission&&a.enable(14),M.sheen&&a.enable(15),M.opaque&&a.enable(16),M.pointsUvs&&a.enable(17),M.decodeVideoTexture&&a.enable(18),M.alphaToCoverage&&a.enable(19),E.push(a.mask)}function S(E){const M=v[E.type];let w;if(M){const I=oi[M];w=MT.clone(I.uniforms)}else w=E.uniforms;return w}function R(E,M){let w;for(let I=0,z=f.length;I<z;I++){const W=f[I];if(W.cacheKey===M){w=W,++w.usedTimes;break}}return w===void 0&&(w=new Ib(t,M,E,s),f.push(w)),w}function b(E){if(--E.usedTimes===0){const M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function A(E){l.remove(E)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:b,releaseShaderCache:A,programs:f,dispose:P}}function Ob(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function Bb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function mv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function gv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,v,y,g){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:y,group:g},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=v,u.renderOrder=d.renderOrder,u.z=y,u.group=g),e++,u}function a(d,h,p,v,y,g){const u=o(d,h,p,v,y,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,v,y,g){const u=o(d,h,p,v,y,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||Bb),i.length>1&&i.sort(h||mv),r.length>1&&r.sort(h||mv)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function Vb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new gv,t.set(i,[o])):r>=s.length?(o=new gv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Hb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Re};break;case"SpotLight":n={position:new U,direction:new U,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function jb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Gb=0;function Wb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Xb(t){const e=new Hb,n=jb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new it,o=new it;function a(c){let f=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,v=0,y=0,g=0,u=0,_=0,x=0,S=0,R=0,b=0,A=0;c.sort(Wb);for(let E=0,M=c.length;E<M;E++){const w=c[E],I=w.color,z=w.intensity,W=w.distance,X=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=I.r*z,d+=I.g*z,h+=I.b*z;else if(w.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(w.sh.coefficients[G],z);A++}else if(w.isDirectionalLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const B=w.shadow,N=n.get(w);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=X,i.directionalShadowMatrix[p]=w.shadow.matrix,_++}i.directional[p]=G,p++}else if(w.isSpotLight){const G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(I).multiplyScalar(z),G.distance=W,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,i.spot[y]=G;const B=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,B.updateMatrices(w),w.castShadow&&b++),i.spotLightMatrix[y]=B.matrix,w.castShadow){const N=n.get(w);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,i.spotShadow[y]=N,i.spotShadowMap[y]=X,S++}y++}else if(w.isRectAreaLight){const G=e.get(w);G.color.copy(I).multiplyScalar(z),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=G,g++}else if(w.isPointLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const B=w.shadow,N=n.get(w);N.shadowIntensity=B.intensity,N.shadowBias=B.bias,N.shadowNormalBias=B.normalBias,N.shadowRadius=B.radius,N.shadowMapSize=B.mapSize,N.shadowCameraNear=B.camera.near,N.shadowCameraFar=B.camera.far,i.pointShadow[v]=N,i.pointShadowMap[v]=X,i.pointShadowMatrix[v]=w.shadow.matrix,x++}i.point[v]=G,v++}else if(w.isHemisphereLight){const G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(z),G.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[u]=G,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=h;const P=i.hash;(P.directionalLength!==p||P.pointLength!==v||P.spotLength!==y||P.rectAreaLength!==g||P.hemiLength!==u||P.numDirectionalShadows!==_||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=g,i.point.length=v,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+R-b,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=A,P.directionalLength=p,P.pointLength=v,P.spotLength=y,P.rectAreaLength=g,P.hemiLength=u,P.numDirectionalShadows=_,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=A,i.version=Gb++)}function l(c,f){let d=0,h=0,p=0,v=0,y=0;const g=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),d++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),p++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(x.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function vv(t){const e=new Xb(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $b(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new vv(t),e.set(r,[a])):s>=o.length?(a=new vv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Yb extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qb extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jb(t,e,n){let i=new zp;const r=new Ne,s=new Ne,o=new Nt,a=new Yb({depthPacking:$w}),l=new qb,c={},f=n.maxTextureSize,d={[gr]:pn,[pn]:gr,[Ei]:Ei},h=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Kb,fragmentShader:Zb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new yt;v.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new kt(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=E_;let u=this.type;this.render=function(b,A,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const E=t.getRenderTarget(),M=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),I=t.state;I.setBlending(dr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=u!==yi&&this.type===yi,W=u===yi&&this.type!==yi;for(let X=0,G=b.length;X<G;X++){const B=b[X],N=B.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const q=N.getFrameExtents();if(r.multiply(q),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/q.x),r.x=s.x*q.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/q.y),r.y=s.y*q.y,N.mapSize.y=s.y)),N.map===null||z===!0||W===!0){const re=this.type!==yi?{minFilter:Un,magFilter:Un}:{};N.map!==null&&N.map.dispose(),N.map=new ns(r.x,r.y,re),N.map.texture.name=B.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const J=N.getViewportCount();for(let re=0;re<J;re++){const ye=N.getViewport(re);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),I.viewport(o),N.updateMatrices(B,re),i=N.getFrustum(),S(A,P,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===yi&&_(N,P),N.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(E,M,w)};function _(b,A){const P=e.update(y);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ns(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(A,null,P,h,y,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(A,null,P,p,y,null)}function x(b,A,P,E){let M=null;const w=P.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(w!==void 0)M=w;else if(M=P.isPointLight===!0?l:a,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const I=M.uuid,z=A.uuid;let W=c[I];W===void 0&&(W={},c[I]=W);let X=W[z];X===void 0&&(X=M.clone(),W[z]=X,A.addEventListener("dispose",R)),M=X}if(M.visible=A.visible,M.wireframe=A.wireframe,E===yi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:d[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=t.properties.get(M);I.light=P}return M}function S(b,A,P,E,M){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===yi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,b.matrixWorld);const z=e.update(b),W=b.material;if(Array.isArray(W)){const X=z.groups;for(let G=0,B=X.length;G<B;G++){const N=X[G],q=W[N.materialIndex];if(q&&q.visible){const J=x(b,q,E,M);b.onBeforeShadow(t,b,A,P,z,J,N),t.renderBufferDirect(P,null,z,J,b,N),b.onAfterShadow(t,b,A,P,z,J,N)}}}else if(W.visible){const X=x(b,W,E,M);b.onBeforeShadow(t,b,A,P,z,X,null),t.renderBufferDirect(P,null,z,X,b,null),b.onAfterShadow(t,b,A,P,z,X,null)}}const I=b.children;for(let z=0,W=I.length;z<W;z++)S(I[z],A,P,E,M)}function R(b){b.target.removeEventListener("dispose",R);for(const P in c){const E=c[P],M=b.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Qb(t){function e(){let F=!1;const oe=new Nt;let K=null;const Z=new Nt(0,0,0,0);return{setMask:function(le){K!==le&&!F&&(t.colorMask(le,le,le,le),K=le)},setLocked:function(le){F=le},setClear:function(le,Te,We,wt,Bt){Bt===!0&&(le*=wt,Te*=wt,We*=wt),oe.set(le,Te,We,wt),Z.equals(oe)===!1&&(t.clearColor(le,Te,We,wt),Z.copy(oe))},reset:function(){F=!1,K=null,Z.set(-1,0,0,0)}}}function n(){let F=!1,oe=null,K=null,Z=null;return{setTest:function(le){le?de(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(le){oe!==le&&!F&&(t.depthMask(le),oe=le)},setFunc:function(le){if(K!==le){switch(le){case Rw:t.depthFunc(t.NEVER);break;case Pw:t.depthFunc(t.ALWAYS);break;case Lw:t.depthFunc(t.LESS);break;case zc:t.depthFunc(t.LEQUAL);break;case Nw:t.depthFunc(t.EQUAL);break;case Dw:t.depthFunc(t.GEQUAL);break;case Iw:t.depthFunc(t.GREATER);break;case Uw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=le}},setLocked:function(le){F=le},setClear:function(le){Z!==le&&(t.clearDepth(le),Z=le)},reset:function(){F=!1,oe=null,K=null,Z=null}}}function i(){let F=!1,oe=null,K=null,Z=null,le=null,Te=null,We=null,wt=null,Bt=null;return{setTest:function($e){F||($e?de(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function($e){oe!==$e&&!F&&(t.stencilMask($e),oe=$e)},setFunc:function($e,pi,ni){(K!==$e||Z!==pi||le!==ni)&&(t.stencilFunc($e,pi,ni),K=$e,Z=pi,le=ni)},setOp:function($e,pi,ni){(Te!==$e||We!==pi||wt!==ni)&&(t.stencilOp($e,pi,ni),Te=$e,We=pi,wt=ni)},setLocked:function($e){F=$e},setClear:function($e){Bt!==$e&&(t.clearStencil($e),Bt=$e)},reset:function(){F=!1,oe=null,K=null,Z=null,le=null,Te=null,We=null,wt=null,Bt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},d=new WeakMap,h=[],p=null,v=!1,y=null,g=null,u=null,_=null,x=null,S=null,R=null,b=new Re(0,0,0),A=0,P=!1,E=null,M=null,w=null,I=null,z=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,G=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(B)[1]),X=G>=1):B.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),X=G>=2);let N=null,q={};const J=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),ye=new Nt().fromArray(J),Ge=new Nt().fromArray(re);function Y(F,oe,K,Z){const le=new Uint8Array(4),Te=t.createTexture();t.bindTexture(F,Te),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let We=0;We<K;We++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(oe+We,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return Te}const ie={};ie[t.TEXTURE_2D]=Y(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=Y(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=Y(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=Y(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),de(t.DEPTH_TEST),s.setFunc(zc),et(!1),Me(wg),de(t.CULL_FACE),Mt(dr);function de(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function fe(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function De(F,oe){return f[F]!==oe?(t.bindFramebuffer(F,oe),f[F]=oe,F===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=oe),F===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Oe(F,oe){let K=h,Z=!1;if(F){K=d.get(oe),K===void 0&&(K=[],d.set(oe,K));const le=F.textures;if(K.length!==le.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Te=0,We=le.length;Te<We;Te++)K[Te]=t.COLOR_ATTACHMENT0+Te;K.length=le.length,Z=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,Z=!0);Z&&t.drawBuffers(K)}function He(F){return p!==F?(t.useProgram(F),p=F,!0):!1}const pt={[zr]:t.FUNC_ADD,[fw]:t.FUNC_SUBTRACT,[hw]:t.FUNC_REVERSE_SUBTRACT};pt[pw]=t.MIN,pt[mw]=t.MAX;const D={[gw]:t.ZERO,[vw]:t.ONE,[xw]:t.SRC_COLOR,[Of]:t.SRC_ALPHA,[ww]:t.SRC_ALPHA_SATURATE,[Mw]:t.DST_COLOR,[yw]:t.DST_ALPHA,[_w]:t.ONE_MINUS_SRC_COLOR,[Bf]:t.ONE_MINUS_SRC_ALPHA,[Ew]:t.ONE_MINUS_DST_COLOR,[Sw]:t.ONE_MINUS_DST_ALPHA,[Tw]:t.CONSTANT_COLOR,[Aw]:t.ONE_MINUS_CONSTANT_COLOR,[Cw]:t.CONSTANT_ALPHA,[bw]:t.ONE_MINUS_CONSTANT_ALPHA};function Mt(F,oe,K,Z,le,Te,We,wt,Bt,$e){if(F===dr){v===!0&&(fe(t.BLEND),v=!1);return}if(v===!1&&(de(t.BLEND),v=!0),F!==dw){if(F!==y||$e!==P){if((g!==zr||x!==zr)&&(t.blendEquation(t.FUNC_ADD),g=zr,x=zr),$e)switch(F){case to:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tg:t.blendFunc(t.ONE,t.ONE);break;case Ag:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case to:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Tg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ag:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}u=null,_=null,S=null,R=null,b.set(0,0,0),A=0,y=F,P=$e}return}le=le||oe,Te=Te||K,We=We||Z,(oe!==g||le!==x)&&(t.blendEquationSeparate(pt[oe],pt[le]),g=oe,x=le),(K!==u||Z!==_||Te!==S||We!==R)&&(t.blendFuncSeparate(D[K],D[Z],D[Te],D[We]),u=K,_=Z,S=Te,R=We),(wt.equals(b)===!1||Bt!==A)&&(t.blendColor(wt.r,wt.g,wt.b,Bt),b.copy(wt),A=Bt),y=F,P=!1}function Ze(F,oe){F.side===Ei?fe(t.CULL_FACE):de(t.CULL_FACE);let K=F.side===pn;oe&&(K=!K),et(K),F.blending===to&&F.transparent===!1?Mt(dr):Mt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);const Z=F.stencilWrite;o.setTest(Z),Z&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Pe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){E!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),E=F)}function Me(F){F!==lw?(de(t.CULL_FACE),F!==M&&(F===wg?t.cullFace(t.BACK):F===cw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),M=F}function Et(F){F!==w&&(X&&t.lineWidth(F),w=F)}function Pe(F,oe,K){F?(de(t.POLYGON_OFFSET_FILL),(I!==oe||z!==K)&&(t.polygonOffset(oe,K),I=oe,z=K)):fe(t.POLYGON_OFFSET_FILL)}function Ie(F){F?de(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function L(F){F===void 0&&(F=t.TEXTURE0+W-1),N!==F&&(t.activeTexture(F),N=F)}function T(F,oe,K){K===void 0&&(N===null?K=t.TEXTURE0+W-1:K=N);let Z=q[K];Z===void 0&&(Z={type:void 0,texture:void 0},q[K]=Z),(Z.type!==F||Z.texture!==oe)&&(N!==K&&(t.activeTexture(K),N=K),t.bindTexture(F,oe||ie[F]),Z.type=F,Z.texture=oe)}function j(){const F=q[N];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function je(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(F){ye.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),ye.copy(F))}function ve(F){Ge.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ge.copy(F))}function Le(F,oe){let K=l.get(oe);K===void 0&&(K=new WeakMap,l.set(oe,K));let Z=K.get(F);Z===void 0&&(Z=t.getUniformBlockIndex(oe,F.name),K.set(F,Z))}function Be(F,oe){const Z=l.get(oe).get(F);a.get(oe)!==Z&&(t.uniformBlockBinding(oe,Z,F.__bindingPointIndex),a.set(oe,Z))}function lt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,q={},f={},d=new WeakMap,h=[],p=null,v=!1,y=null,g=null,u=null,_=null,x=null,S=null,R=null,b=new Re(0,0,0),A=0,P=!1,E=null,M=null,w=null,I=null,z=null,ye.set(0,0,t.canvas.width,t.canvas.height),Ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:de,disable:fe,bindFramebuffer:De,drawBuffers:Oe,useProgram:He,setBlending:Mt,setMaterial:Ze,setFlipSided:et,setCullFace:Me,setLineWidth:Et,setPolygonOffset:Pe,setScissorTest:Ie,activeTexture:L,bindTexture:T,unbindTexture:j,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:me,texImage3D:je,updateUBOMapping:Le,uniformBlockBinding:Be,texStorage2D:Fe,texStorage3D:se,texSubImage2D:Q,texSubImage3D:Ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:be,viewport:ve,reset:lt}}function xv(t,e,n,i){const r=eR(i);switch(n){case R_:return t*e;case L_:return t*e;case N_:return t*e*2;case D_:return t*e/r.components*r.byteLength;case Lp:return t*e/r.components*r.byteLength;case I_:return t*e*2/r.components*r.byteLength;case Np:return t*e*2/r.components*r.byteLength;case P_:return t*e*3/r.components*r.byteLength;case Jn:return t*e*4/r.components*r.byteLength;case Dp:return t*e*4/r.components*r.byteLength;case Ql:case ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xf:case Yf:return Math.max(t,16)*Math.max(e,8)/4;case Wf:case $f:return Math.max(t,8)*Math.max(e,8)/2;case qf:case Kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case oh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ic:case fh:case hh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case U_:case ph:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mh:case gh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function eR(t){switch(t){case Ii:case A_:return{byteLength:1,components:1};case Ra:case C_:case Ua:return{byteLength:2,components:1};case Rp:case Pp:return{byteLength:2,components:4};case ts:case bp:case Ci:return{byteLength:4,components:1};case b_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function tR(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(L,T){return p?new OffscreenCanvas(L,T):Hc("canvas")}function y(L,T,j){let ee=1;const ne=Ie(L);if((ne.width>j||ne.height>j)&&(ee=j/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(ee*ne.width),Ee=Math.floor(ee*ne.height);d===void 0&&(d=v(Q,Ee));const ue=T?v(Q,Ee):d;return ue.width=Q,ue.height=Ee,ue.getContext("2d").drawImage(L,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+Ee+")."),ue}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==Un&&L.minFilter!==Zn}function u(L){t.generateMipmap(L)}function _(L,T,j,ee,ne=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=T;if(T===t.RED&&(j===t.FLOAT&&(Q=t.R32F),j===t.HALF_FLOAT&&(Q=t.R16F),j===t.UNSIGNED_BYTE&&(Q=t.R8)),T===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.R8UI),j===t.UNSIGNED_SHORT&&(Q=t.R16UI),j===t.UNSIGNED_INT&&(Q=t.R32UI),j===t.BYTE&&(Q=t.R8I),j===t.SHORT&&(Q=t.R16I),j===t.INT&&(Q=t.R32I)),T===t.RG&&(j===t.FLOAT&&(Q=t.RG32F),j===t.HALF_FLOAT&&(Q=t.RG16F),j===t.UNSIGNED_BYTE&&(Q=t.RG8)),T===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(Q=t.RG8UI),j===t.UNSIGNED_SHORT&&(Q=t.RG16UI),j===t.UNSIGNED_INT&&(Q=t.RG32UI),j===t.BYTE&&(Q=t.RG8I),j===t.SHORT&&(Q=t.RG16I),j===t.INT&&(Q=t.RG32I)),T===t.RGB&&j===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),T===t.RGBA){const Ee=ne?kc:Je.getTransfer(ee);j===t.FLOAT&&(Q=t.RGBA32F),j===t.HALF_FLOAT&&(Q=t.RGBA16F),j===t.UNSIGNED_BYTE&&(Q=Ee===st?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(L,T){let j;return L?T===null||T===ts||T===vo?j=t.DEPTH24_STENCIL8:T===Ci?j=t.DEPTH32F_STENCIL8:T===Ra&&(j=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ts||T===vo?j=t.DEPTH_COMPONENT24:T===Ci?j=t.DEPTH_COMPONENT32F:T===Ra&&(j=t.DEPTH_COMPONENT16),j}function S(L,T){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Un&&L.minFilter!==Zn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function R(L){const T=L.target;T.removeEventListener("dispose",R),A(T),T.isVideoTexture&&f.delete(T)}function b(L){const T=L.target;T.removeEventListener("dispose",b),E(T)}function A(L){const T=i.get(L);if(T.__webglInit===void 0)return;const j=L.source,ee=h.get(j);if(ee){const ne=ee[T.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&P(L),Object.keys(ee).length===0&&h.delete(j)}i.remove(L)}function P(L){const T=i.get(L);t.deleteTexture(T.__webglTexture);const j=L.source,ee=h.get(j);delete ee[T.__cacheKey],o.memory.textures--}function E(L){const T=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(T.__webglFramebuffer[ee]))for(let ne=0;ne<T.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(T.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(T.__webglFramebuffer[ee]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[ee])}else{if(Array.isArray(T.__webglFramebuffer))for(let ee=0;ee<T.__webglFramebuffer.length;ee++)t.deleteFramebuffer(T.__webglFramebuffer[ee]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ee=0;ee<T.__webglColorRenderbuffer.length;ee++)T.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[ee]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=L.textures;for(let ee=0,ne=j.length;ee<ne;ee++){const Q=i.get(j[ee]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(j[ee])}i.remove(L)}let M=0;function w(){M=0}function I(){const L=M;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),M+=1,L}function z(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function W(L,T){const j=i.get(L);if(L.isVideoTexture&&Et(L),L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){const ee=L.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(j,L,T);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+T)}function X(L,T){const j=i.get(L);if(L.version>0&&j.__version!==L.version){Ge(j,L,T);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+T)}function G(L,T){const j=i.get(L);if(L.version>0&&j.__version!==L.version){Ge(j,L,T);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+T)}function B(L,T){const j=i.get(L);if(L.version>0&&j.__version!==L.version){Y(j,L,T);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+T)}const N={[jf]:t.REPEAT,[Wr]:t.CLAMP_TO_EDGE,[Gf]:t.MIRRORED_REPEAT},q={[Un]:t.NEAREST,[Ww]:t.NEAREST_MIPMAP_NEAREST,[il]:t.NEAREST_MIPMAP_LINEAR,[Zn]:t.LINEAR,[td]:t.LINEAR_MIPMAP_NEAREST,[Xr]:t.LINEAR_MIPMAP_LINEAR},J={[qw]:t.NEVER,[tT]:t.ALWAYS,[Kw]:t.LESS,[z_]:t.LEQUAL,[Zw]:t.EQUAL,[eT]:t.GEQUAL,[Jw]:t.GREATER,[Qw]:t.NOTEQUAL};function re(L,T){if(T.type===Ci&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zn||T.magFilter===td||T.magFilter===il||T.magFilter===Xr||T.minFilter===Zn||T.minFilter===td||T.minFilter===il||T.minFilter===Xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,N[T.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,N[T.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,N[T.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,q[T.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,q[T.minFilter]),T.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Un||T.minFilter!==il&&T.minFilter!==Xr||T.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function ye(L,T){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",R));const ee=T.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const Q=z(T);if(Q!==L.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ne[Q].usedTimes++;const Ee=ne[L.__cacheKey];Ee!==void 0&&(ne[L.__cacheKey].usedTimes--,Ee.usedTimes===0&&P(T)),L.__cacheKey=Q,L.__webglTexture=ne[Q].texture}return j}function Ge(L,T,j){let ee=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=ye(L,T),Q=T.source;n.bindTexture(ee,L.__webglTexture,t.TEXTURE0+j);const Ee=i.get(Q);if(Q.version!==Ee.__version||ne===!0){n.activeTexture(t.TEXTURE0+j);const ue=Je.getPrimaries(Je.workingColorSpace),ge=T.colorSpace===Ki?null:Je.getPrimaries(T.colorSpace),Fe=T.colorSpace===Ki||ue===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let se=y(T.image,!1,r.maxTextureSize);se=Pe(T,se);const me=s.convert(T.format,T.colorSpace),je=s.convert(T.type);let be=_(T.internalFormat,me,je,T.colorSpace,T.isVideoTexture);re(ee,T);let ve;const Le=T.mipmaps,Be=T.isVideoTexture!==!0,lt=Ee.__version===void 0||ne===!0,F=Q.dataReady,oe=S(T,se);if(T.isDepthTexture)be=x(T.format===xo,T.type),lt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,be,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,me,je,null));else if(T.isDataTexture)if(Le.length>0){Be&&lt&&n.texStorage2D(t.TEXTURE_2D,oe,be,Le[0].width,Le[0].height);for(let K=0,Z=Le.length;K<Z;K++)ve=Le[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve.width,ve.height,me,je,ve.data):n.texImage2D(t.TEXTURE_2D,K,be,ve.width,ve.height,0,me,je,ve.data);T.generateMipmaps=!1}else Be?(lt&&n.texStorage2D(t.TEXTURE_2D,oe,be,se.width,se.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,me,je,se.data)):n.texImage2D(t.TEXTURE_2D,0,be,se.width,se.height,0,me,je,se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Be&&lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,be,Le[0].width,Le[0].height,se.depth);for(let K=0,Z=Le.length;K<Z;K++)if(ve=Le[K],T.format!==Jn)if(me!==null)if(Be){if(F)if(T.layerUpdates.size>0){const le=xv(ve.width,ve.height,T.format,T.type);for(const Te of T.layerUpdates){const We=ve.data.subarray(Te*le/ve.data.BYTES_PER_ELEMENT,(Te+1)*le/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,Te,ve.width,ve.height,1,me,We,0,0)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,se.depth,me,ve.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,be,ve.width,ve.height,se.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,ve.width,ve.height,se.depth,me,je,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,be,ve.width,ve.height,se.depth,0,me,je,ve.data)}else{Be&&lt&&n.texStorage2D(t.TEXTURE_2D,oe,be,Le[0].width,Le[0].height);for(let K=0,Z=Le.length;K<Z;K++)ve=Le[K],T.format!==Jn?me!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,ve.width,ve.height,me,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,K,be,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,ve.width,ve.height,me,je,ve.data):n.texImage2D(t.TEXTURE_2D,K,be,ve.width,ve.height,0,me,je,ve.data)}else if(T.isDataArrayTexture)if(Be){if(lt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,be,se.width,se.height,se.depth),F)if(T.layerUpdates.size>0){const K=xv(se.width,se.height,T.format,T.type);for(const Z of T.layerUpdates){const le=se.data.subarray(Z*K/se.data.BYTES_PER_ELEMENT,(Z+1)*K/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,se.width,se.height,1,me,je,le)}T.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,je,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,se.width,se.height,se.depth,0,me,je,se.data);else if(T.isData3DTexture)Be?(lt&&n.texStorage3D(t.TEXTURE_3D,oe,be,se.width,se.height,se.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,je,se.data)):n.texImage3D(t.TEXTURE_3D,0,be,se.width,se.height,se.depth,0,me,je,se.data);else if(T.isFramebufferTexture){if(lt)if(Be)n.texStorage2D(t.TEXTURE_2D,oe,be,se.width,se.height);else{let K=se.width,Z=se.height;for(let le=0;le<oe;le++)n.texImage2D(t.TEXTURE_2D,le,be,K,Z,0,me,je,null),K>>=1,Z>>=1}}else if(Le.length>0){if(Be&&lt){const K=Ie(Le[0]);n.texStorage2D(t.TEXTURE_2D,oe,be,K.width,K.height)}for(let K=0,Z=Le.length;K<Z;K++)ve=Le[K],Be?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,me,je,ve):n.texImage2D(t.TEXTURE_2D,K,be,me,je,ve);T.generateMipmaps=!1}else if(Be){if(lt){const K=Ie(se);n.texStorage2D(t.TEXTURE_2D,oe,be,K.width,K.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,je,se)}else n.texImage2D(t.TEXTURE_2D,0,be,me,je,se);g(T)&&u(ee),Ee.__version=Q.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Y(L,T,j){if(T.image.length!==6)return;const ee=ye(L,T),ne=T.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+j);const Q=i.get(ne);if(ne.version!==Q.__version||ee===!0){n.activeTexture(t.TEXTURE0+j);const Ee=Je.getPrimaries(Je.workingColorSpace),ue=T.colorSpace===Ki?null:Je.getPrimaries(T.colorSpace),ge=T.colorSpace===Ki||Ee===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Fe=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Fe&&!se?me[Z]=y(T.image[Z],!0,r.maxCubemapSize):me[Z]=se?T.image[Z].image:T.image[Z],me[Z]=Pe(T,me[Z]);const je=me[0],be=s.convert(T.format,T.colorSpace),ve=s.convert(T.type),Le=_(T.internalFormat,be,ve,T.colorSpace),Be=T.isVideoTexture!==!0,lt=Q.__version===void 0||ee===!0,F=ne.dataReady;let oe=S(T,je);re(t.TEXTURE_CUBE_MAP,T);let K;if(Fe){Be&&lt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Le,je.width,je.height);for(let Z=0;Z<6;Z++){K=me[Z].mipmaps;for(let le=0;le<K.length;le++){const Te=K[le];T.format!==Jn?be!==null?Be?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Te.width,Te.height,be,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Le,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Te.width,Te.height,be,ve,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Le,Te.width,Te.height,0,be,ve,Te.data)}}}else{if(K=T.mipmaps,Be&&lt){K.length>0&&oe++;const Z=Ie(me[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Le,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(se){Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,be,ve,me[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Le,me[Z].width,me[Z].height,0,be,ve,me[Z].data);for(let le=0;le<K.length;le++){const We=K[le].image[Z].image;Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,We.width,We.height,be,ve,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Le,We.width,We.height,0,be,ve,We.data)}}else{Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,be,ve,me[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Le,be,ve,me[Z]);for(let le=0;le<K.length;le++){const Te=K[le];Be?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,be,ve,Te.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Le,be,ve,Te.image[Z])}}}g(T)&&u(t.TEXTURE_CUBE_MAP),Q.__version=ne.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ie(L,T,j,ee,ne,Q){const Ee=s.convert(j.format,j.colorSpace),ue=s.convert(j.type),ge=_(j.internalFormat,Ee,ue,j.colorSpace);if(!i.get(T).__hasExternalTextures){const se=Math.max(1,T.width>>Q),me=Math.max(1,T.height>>Q);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,Q,ge,se,me,T.depth,0,Ee,ue,null):n.texImage2D(ne,Q,ge,se,me,0,Ee,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Me(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,i.get(j).__webglTexture,0,et(T)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,i.get(j).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(L,T,j){if(t.bindRenderbuffer(t.RENDERBUFFER,L),T.depthBuffer){const ee=T.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,Q=x(T.stencilBuffer,ne),Ee=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=et(T);Me(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ue,Q,T.width,T.height):j?t.renderbufferStorageMultisample(t.RENDERBUFFER,ue,Q,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,Q,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,L)}else{const ee=T.textures;for(let ne=0;ne<ee.length;ne++){const Q=ee[ne],Ee=s.convert(Q.format,Q.colorSpace),ue=s.convert(Q.type),ge=_(Q.internalFormat,Ee,ue,Q.colorSpace),Fe=et(T);j&&Me(T)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe,ge,T.width,T.height):Me(T)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe,ge,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ge,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);const ee=i.get(T.depthTexture).__webglTexture,ne=et(T);if(T.depthTexture.format===no)Me(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(T.depthTexture.format===xo)Me(T)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function De(L){const T=i.get(L),j=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,L)}else if(j){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=t.createRenderbuffer(),de(T.__webglDepthbuffer[ee],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=t.createRenderbuffer(),de(T.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(L,T,j){const ee=i.get(L);T!==void 0&&ie(ee.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&De(L)}function He(L){const T=L.texture,j=i.get(L),ee=i.get(T);L.addEventListener("dispose",b);const ne=L.textures,Q=L.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=T.version,o.memory.textures++),Q){j.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[ue]=[];for(let ge=0;ge<T.mipmaps.length;ge++)j.__webglFramebuffer[ue][ge]=t.createFramebuffer()}else j.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)j.__webglFramebuffer[ue]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ue=0,ge=ne.length;ue<ge;ue++){const Fe=i.get(ne[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}if(L.samples>0&&Me(L)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const ge=ne[ue];j.__webglColorRenderbuffer[ue]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[ue]);const Fe=s.convert(ge.format,ge.colorSpace),se=s.convert(ge.type),me=_(ge.internalFormat,Fe,se,ge.colorSpace,L.isXRRenderTarget===!0),je=et(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,me,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,j.__webglColorRenderbuffer[ue])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),de(j.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),re(t.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)ie(j.__webglFramebuffer[ue][ge],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ge);else ie(j.__webglFramebuffer[ue],L,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(T)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ue=0,ge=ne.length;ue<ge;ue++){const Fe=ne[ue],se=i.get(Fe);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),re(t.TEXTURE_2D,Fe),ie(j.__webglFramebuffer,L,Fe,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,0),g(Fe)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,ee.__webglTexture),re(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)ie(j.__webglFramebuffer[ge],L,T,t.COLOR_ATTACHMENT0,ue,ge);else ie(j.__webglFramebuffer,L,T,t.COLOR_ATTACHMENT0,ue,0);g(T)&&u(ue),n.unbindTexture()}L.depthBuffer&&De(L)}function pt(L){const T=L.textures;for(let j=0,ee=T.length;j<ee;j++){const ne=T[j];if(g(ne)){const Q=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(ne).__webglTexture;n.bindTexture(Q,Ee),u(Q),n.unbindTexture()}}}const D=[],Mt=[];function Ze(L){if(L.samples>0){if(Me(L)===!1){const T=L.textures,j=L.width,ee=L.height;let ne=t.COLOR_BUFFER_BIT;const Q=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(L),ue=T.length>1;if(ue)for(let ge=0;ge<T.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<T.length;ge++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ue){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Fe=i.get(T[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,j,ee,0,0,j,ee,ne,t.NEAREST),l===!0&&(D.length=0,Mt.length=0,D.push(t.COLOR_ATTACHMENT0+ge),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(Q),Mt.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Mt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ue)for(let ge=0;ge<T.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Fe=i.get(T[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const T=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function et(L){return Math.min(r.maxSamples,L.samples)}function Me(L){const T=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Et(L){const T=o.render.frame;f.get(L)!==T&&(f.set(L,T),L.update())}function Pe(L,T){const j=L.colorSpace,ee=L.format,ne=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Er&&j!==Ki&&(Je.getTransfer(j)===st?(ee!==Jn||ne!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),T}function Ie(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=w,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=G,this.setTextureCube=B,this.rebindTextures=Oe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Me}function nR(t,e){function n(i,r=Ki){let s;const o=Je.getTransfer(r);if(i===Ii)return t.UNSIGNED_BYTE;if(i===Rp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Pp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===b_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===A_)return t.BYTE;if(i===C_)return t.SHORT;if(i===Ra)return t.UNSIGNED_SHORT;if(i===bp)return t.INT;if(i===ts)return t.UNSIGNED_INT;if(i===Ci)return t.FLOAT;if(i===Ua)return t.HALF_FLOAT;if(i===R_)return t.ALPHA;if(i===P_)return t.RGB;if(i===Jn)return t.RGBA;if(i===L_)return t.LUMINANCE;if(i===N_)return t.LUMINANCE_ALPHA;if(i===no)return t.DEPTH_COMPONENT;if(i===xo)return t.DEPTH_STENCIL;if(i===D_)return t.RED;if(i===Lp)return t.RED_INTEGER;if(i===I_)return t.RG;if(i===Np)return t.RG_INTEGER;if(i===Dp)return t.RGBA_INTEGER;if(i===Ql||i===ec||i===tc||i===nc)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ql)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ql)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wf||i===Xf||i===$f||i===Yf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Wf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qf||i===Kf||i===Zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===qf||i===Kf)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Zf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jf||i===Qf||i===eh||i===th||i===nh||i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Jf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===th)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ih)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===oh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ah)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ch)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dh)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===fh||i===hh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ic)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===U_||i===ph||i===mh||i===gh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ic)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ph)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class iR extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Fn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rR={type:"move"};class Cd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,v=.005;c.inputState.pinching&&h>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Fn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const sR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class aR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new rn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vr({vertexShader:sR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kt(new yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lR extends Ao{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,v=null;const y=new aR,g=n.getContextAttributes();let u=null,_=null;const x=[],S=[],R=new Ne;let b=null;const A=new Sn;A.layers.enable(1),A.viewport=new Nt;const P=new Sn;P.layers.enable(2),P.viewport=new Nt;const E=[A,P],M=new iR;M.layers.enable(1),M.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=x[Y];return ie===void 0&&(ie=new Cd,x[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=x[Y];return ie===void 0&&(ie=new Cd,x[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=x[Y];return ie===void 0&&(ie=new Cd,x[Y]=ie),ie.getHandSpace()};function z(Y){const ie=S.indexOf(Y.inputSource);if(ie===-1)return;const de=x[ie];de!==void 0&&(de.update(Y.inputSource,Y.frame,c||o),de.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",X);for(let Y=0;Y<x.length;Y++){const ie=S[Y];ie!==null&&(S[Y]=null,x[Y].disconnect(ie))}w=null,I=null,y.reset(),e.setRenderTarget(u),p=null,h=null,d=null,r=null,_=null,Ge.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",X),g.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const ie={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new ns(p.framebufferWidth,p.framebufferHeight,{format:Jn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ie=null,de=null,fe=null;g.depth&&(fe=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=g.stencil?xo:no,de=g.stencil?vo:ts);const De={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ns(h.textureWidth,h.textureHeight,{format:Jn,type:Ii,depthTexture:new q_(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(Y){for(let ie=0;ie<Y.removed.length;ie++){const de=Y.removed[ie],fe=S.indexOf(de);fe>=0&&(S[fe]=null,x[fe].disconnect(de))}for(let ie=0;ie<Y.added.length;ie++){const de=Y.added[ie];let fe=S.indexOf(de);if(fe===-1){for(let Oe=0;Oe<x.length;Oe++)if(Oe>=S.length){S.push(de),fe=Oe;break}else if(S[Oe]===null){S[Oe]=de,fe=Oe;break}if(fe===-1)break}const De=x[fe];De&&De.connect(de)}}const G=new U,B=new U;function N(Y,ie,de){G.setFromMatrixPosition(ie.matrixWorld),B.setFromMatrixPosition(de.matrixWorld);const fe=G.distanceTo(B),De=ie.projectionMatrix.elements,Oe=de.projectionMatrix.elements,He=De[14]/(De[10]-1),pt=De[14]/(De[10]+1),D=(De[9]+1)/De[5],Mt=(De[9]-1)/De[5],Ze=(De[8]-1)/De[0],et=(Oe[8]+1)/Oe[0],Me=He*Ze,Et=He*et,Pe=fe/(-Ze+et),Ie=Pe*-Ze;ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ie),Y.translateZ(Pe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const L=He+Pe,T=pt+Pe,j=Me-Ie,ee=Et+(fe-Ie),ne=D*pt/T*L,Q=Mt*pt/T*L;Y.projectionMatrix.makePerspective(j,ee,ne,Q,L,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function q(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;y.texture!==null&&(Y.near=y.depthNear,Y.far=y.depthFar),M.near=P.near=A.near=Y.near,M.far=P.far=A.far=Y.far,(w!==M.near||I!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,I=M.far,A.near=w,A.far=I,P.near=w,P.far=I,A.updateProjectionMatrix(),P.updateProjectionMatrix(),Y.updateProjectionMatrix());const ie=Y.parent,de=M.cameras;q(M,ie);for(let fe=0;fe<de.length;fe++)q(de[fe],ie);de.length===2?N(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),J(Y,M,ie)};function J(Y,ie,de){de===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(de.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=xh*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let re=null;function ye(Y,ie){if(f=ie.getViewerPose(c||o),v=ie,f!==null){const de=f.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let fe=!1;de.length!==M.cameras.length&&(M.cameras.length=0,fe=!0);for(let Oe=0;Oe<de.length;Oe++){const He=de[Oe];let pt=null;if(p!==null)pt=p.getViewport(He);else{const Mt=d.getViewSubImage(h,He);pt=Mt.viewport,Oe===0&&(e.setRenderTargetTextures(_,Mt.colorTexture,h.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(_))}let D=E[Oe];D===void 0&&(D=new Sn,D.layers.enable(Oe),D.viewport=new Nt,E[Oe]=D),D.matrix.fromArray(He.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(He.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(pt.x,pt.y,pt.width,pt.height),Oe===0&&(M.matrix.copy(D.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),fe===!0&&M.cameras.push(D)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Oe=d.getDepthInformation(de[0]);Oe&&Oe.isValid&&Oe.texture&&y.init(e,Oe,r.renderState)}}for(let de=0;de<x.length;de++){const fe=S[de],De=x[de];fe!==null&&De!==void 0&&De.update(fe,ie,c||o)}re&&re(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ge=new $_;Ge.setAnimationLoop(ye),this.setAnimationLoop=function(Y){re=Y},this.dispose=function(){}}}const Nr=new di,cR=new it;function uR(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,G_(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,_,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),d(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,S)):u.isMeshMatcapMaterial?(s(g,u),v(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,_,x):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===pn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===pn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const _=e.get(u),x=_.envMap,S=_.envMapRotation;x&&(g.envMap.value=x,Nr.copy(S),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),g.envMapRotation.value.setFromMatrix4(cR.makeRotationFromEuler(Nr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,_,x){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*_,g.scale.value=x*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,_){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const _=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dR(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(v(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",g));const R=x.program;i.updateUBOMapping(_,R);const b=e.render.frame;s[_.id]!==b&&(h(_),s[_.id]=b)}function f(_){const x=d();_.__bindingPointIndex=x;const S=t.createBuffer(),R=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=r[_.id],S=_.uniforms,R=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let b=0,A=S.length;b<A;b++){const P=Array.isArray(S[b])?S[b]:[S[b]];for(let E=0,M=P.length;E<M;E++){const w=P[E];if(p(w,b,E,R)===!0){const I=w.__offset,z=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let X=0;X<z.length;X++){const G=z[X],B=y(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,I+W,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,W),W+=B.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,I,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,x,S,R){const b=_.value,A=x+"_"+S;if(R[A]===void 0)return typeof b=="number"||typeof b=="boolean"?R[A]=b:R[A]=b.clone(),!0;{const P=R[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[A]=b,!0}else if(P.equals(b)===!1)return P.copy(b),!0}return!1}function v(_){const x=_.uniforms;let S=0;const R=16;for(let A=0,P=x.length;A<P;A++){const E=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,w=E.length;M<w;M++){const I=E[M],z=Array.isArray(I.value)?I.value:[I.value];for(let W=0,X=z.length;W<X;W++){const G=z[W],B=y(G),N=S%R;N!==0&&R-N<B.boundary&&(S+=R-N),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=B.storage}}}const b=S%R;return b>0&&(S+=R-b),_.__size=S,_.__cache={},this}function y(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function g(_){const x=_.target;x.removeEventListener("dispose",g);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class _v{constructor(e={}){const{canvas:n=iT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),v=new Int32Array(4);let y=null,g=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=fr,this.toneMappingExposure=1;const x=this;let S=!1,R=0,b=0,A=null,P=-1,E=null;const M=new Nt,w=new Nt;let I=null;const z=new Re(0);let W=0,X=n.width,G=n.height,B=1,N=null,q=null;const J=new Nt(0,0,X,G),re=new Nt(0,0,X,G);let ye=!1;const Ge=new zp;let Y=!1,ie=!1;const de=new it,fe=new U,De=new Nt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let He=!1;function pt(){return A===null?B:1}let D=i;function Mt(C,k){return n.getContext(C,k)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cp}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",le,!1),D===null){const k="webgl2";if(D=Mt(k,C),D===null)throw Mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ze,et,Me,Et,Pe,Ie,L,T,j,ee,ne,Q,Ee,ue,ge,Fe,se,me,je,be,ve,Le,Be,lt;function F(){Ze=new _2(D),Ze.init(),Le=new nR(D,Ze),et=new h2(D,Ze,e,Le),Me=new Qb(D),Et=new M2(D),Pe=new Ob,Ie=new tR(D,Ze,Me,Pe,et,Le,Et),L=new m2(x),T=new x2(x),j=new RT(D),Be=new d2(D,j),ee=new y2(D,j,Et,Be),ne=new w2(D,ee,j,Et),je=new E2(D,et,Ie),Fe=new p2(Pe),Q=new kb(x,L,T,Ze,et,Be,Fe),Ee=new uR(x,Pe),ue=new Vb,ge=new $b(Ze),me=new u2(x,L,T,Me,ne,h,l),se=new Jb(x,ne,et),lt=new dR(D,Et,et,Me),be=new f2(D,Ze,Et),ve=new S2(D,Ze,Et),Et.programs=Q.programs,x.capabilities=et,x.extensions=Ze,x.properties=Pe,x.renderLists=ue,x.shadowMap=se,x.state=Me,x.info=Et}F();const oe=new lR(x,D);this.xr=oe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const C=Ze.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ze.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(X,G,!1))},this.getSize=function(C){return C.set(X,G)},this.setSize=function(C,k,V=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=C,G=k,n.width=Math.floor(C*B),n.height=Math.floor(k*B),V===!0&&(n.style.width=C+"px",n.style.height=k+"px"),this.setViewport(0,0,C,k)},this.getDrawingBufferSize=function(C){return C.set(X*B,G*B).floor()},this.setDrawingBufferSize=function(C,k,V){X=C,G=k,B=V,n.width=Math.floor(C*V),n.height=Math.floor(k*V),this.setViewport(0,0,C,k)},this.getCurrentViewport=function(C){return C.copy(M)},this.getViewport=function(C){return C.copy(J)},this.setViewport=function(C,k,V,H){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,k,V,H),Me.viewport(M.copy(J).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,k,V,H){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,k,V,H),Me.scissor(w.copy(re).multiplyScalar(B).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){Me.setScissorTest(ye=C)},this.setOpaqueSort=function(C){N=C},this.setTransparentSort=function(C){q=C},this.getClearColor=function(C){return C.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(C=!0,k=!0,V=!0){let H=0;if(C){let O=!1;if(A!==null){const ae=A.texture.format;O=ae===Dp||ae===Np||ae===Lp}if(O){const ae=A.texture.type,he=ae===Ii||ae===ts||ae===Ra||ae===vo||ae===Rp||ae===Pp,xe=me.getClearColor(),_e=me.getClearAlpha(),Ae=xe.r,Ce=xe.g,we=xe.b;he?(p[0]=Ae,p[1]=Ce,p[2]=we,p[3]=_e,D.clearBufferuiv(D.COLOR,0,p)):(v[0]=Ae,v[1]=Ce,v[2]=we,v[3]=_e,D.clearBufferiv(D.COLOR,0,v))}else H|=D.COLOR_BUFFER_BIT}k&&(H|=D.DEPTH_BUFFER_BIT),V&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",le,!1),ue.dispose(),ge.dispose(),Pe.dispose(),L.dispose(),T.dispose(),ne.dispose(),Be.dispose(),lt.dispose(),Q.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ni),oe.removeEventListener("sessionend",Wp),Tr.stop()};function K(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const C=Et.autoReset,k=se.enabled,V=se.autoUpdate,H=se.needsUpdate,O=se.type;F(),Et.autoReset=C,se.enabled=k,se.autoUpdate=V,se.needsUpdate=H,se.type=O}function le(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Te(C){const k=C.target;k.removeEventListener("dispose",Te),We(k)}function We(C){wt(C),Pe.remove(C)}function wt(C){const k=Pe.get(C).programs;k!==void 0&&(k.forEach(function(V){Q.releaseProgram(V)}),C.isShaderMaterial&&Q.releaseShaderCache(C))}this.renderBufferDirect=function(C,k,V,H,O,ae){k===null&&(k=Oe);const he=O.isMesh&&O.matrixWorld.determinant()<0,xe=ay(C,k,V,H,O);Me.setMaterial(H,he);let _e=V.index,Ae=1;if(H.wireframe===!0){if(_e=ee.getWireframeAttribute(V),_e===void 0)return;Ae=2}const Ce=V.drawRange,we=V.attributes.position;let Ye=Ce.start*Ae,mt=(Ce.start+Ce.count)*Ae;ae!==null&&(Ye=Math.max(Ye,ae.start*Ae),mt=Math.min(mt,(ae.start+ae.count)*Ae)),_e!==null?(Ye=Math.max(Ye,0),mt=Math.min(mt,_e.count)):we!=null&&(Ye=Math.max(Ye,0),mt=Math.min(mt,we.count));const gt=mt-Ye;if(gt<0||gt===1/0)return;Be.setup(O,H,xe,V,_e);let mn,qe=be;if(_e!==null&&(mn=j.get(_e),qe=ve,qe.setIndex(mn)),O.isMesh)H.wireframe===!0?(Me.setLineWidth(H.wireframeLinewidth*pt()),qe.setMode(D.LINES)):qe.setMode(D.TRIANGLES);else if(O.isLine){let Se=H.linewidth;Se===void 0&&(Se=1),Me.setLineWidth(Se*pt()),O.isLineSegments?qe.setMode(D.LINES):O.isLineLoop?qe.setMode(D.LINE_LOOP):qe.setMode(D.LINE_STRIP)}else O.isPoints?qe.setMode(D.POINTS):O.isSprite&&qe.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Se=O._multiDrawStarts,Vt=O._multiDrawCounts,Ke=O._multiDrawCount,Vn=_e?j.get(_e).bytesPerElement:1,as=Pe.get(H).currentProgram.getUniforms();for(let gn=0;gn<Ke;gn++)as.setValue(D,"_gl_DrawID",gn),qe.render(Se[gn]/Vn,Vt[gn])}else if(O.isInstancedMesh)qe.renderInstances(Ye,gt,O.count);else if(V.isInstancedBufferGeometry){const Se=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Vt=Math.min(V.instanceCount,Se);qe.renderInstances(Ye,gt,Vt)}else qe.render(Ye,gt)};function Bt(C,k,V){C.transparent===!0&&C.side===Ei&&C.forceSinglePass===!1?(C.side=pn,C.needsUpdate=!0,Oa(C,k,V),C.side=gr,C.needsUpdate=!0,Oa(C,k,V),C.side=Ei):Oa(C,k,V)}this.compile=function(C,k,V=null){V===null&&(V=C),g=ge.get(V),g.init(k),_.push(g),V.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),C!==V&&C.traverseVisible(function(O){O.isLight&&O.layers.test(k.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const H=new Set;return C.traverse(function(O){const ae=O.material;if(ae)if(Array.isArray(ae))for(let he=0;he<ae.length;he++){const xe=ae[he];Bt(xe,V,O),H.add(xe)}else Bt(ae,V,O),H.add(ae)}),_.pop(),g=null,H},this.compileAsync=function(C,k,V=null){const H=this.compile(C,k,V);return new Promise(O=>{function ae(){if(H.forEach(function(he){Pe.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){O(C);return}setTimeout(ae,10)}Ze.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let $e=null;function pi(C){$e&&$e(C)}function ni(){Tr.stop()}function Wp(){Tr.start()}const Tr=new $_;Tr.setAnimationLoop(pi),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(C){$e=C,oe.setAnimationLoop(C),C===null?Tr.stop():Tr.start()},oe.addEventListener("sessionstart",ni),oe.addEventListener("sessionend",Wp),this.render=function(C,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(k),k=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,k,A),g=ge.get(C,_.length),g.init(k),_.push(g),de.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ge.setFromProjectionMatrix(de),ie=this.localClippingEnabled,Y=Fe.init(this.clippingPlanes,ie),y=ue.get(C,u.length),y.init(),u.push(y),oe.enabled===!0&&oe.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&_u(ae,k,-1/0,x.sortObjects)}_u(C,k,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(N,q),He=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,He&&me.addToRenderList(y,C),this.info.render.frame++,Y===!0&&Fe.beginShadows();const V=g.state.shadowsArray;se.render(V,C,k),Y===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=y.opaque,O=y.transmissive;if(g.setupLights(),k.isArrayCamera){const ae=k.cameras;if(O.length>0)for(let he=0,xe=ae.length;he<xe;he++){const _e=ae[he];$p(H,O,C,_e)}He&&me.render(C);for(let he=0,xe=ae.length;he<xe;he++){const _e=ae[he];Xp(y,C,_e,_e.viewport)}}else O.length>0&&$p(H,O,C,k),He&&me.render(C),Xp(y,C,k);A!==null&&(Ie.updateMultisampleRenderTarget(A),Ie.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(x,C,k),Be.resetDefaultState(),P=-1,E=null,_.pop(),_.length>0?(g=_[_.length-1],Y===!0&&Fe.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function _u(C,k,V,H){if(C.visible===!1)return;if(C.layers.test(k.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(k);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ge.intersectsSprite(C)){H&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(de);const he=ne.update(C),xe=C.material;xe.visible&&y.push(C,he,xe,V,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ge.intersectsObject(C))){const he=ne.update(C),xe=C.material;if(H&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),De.copy(he.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(de)),Array.isArray(xe)){const _e=he.groups;for(let Ae=0,Ce=_e.length;Ae<Ce;Ae++){const we=_e[Ae],Ye=xe[we.materialIndex];Ye&&Ye.visible&&y.push(C,he,Ye,V,De.z,we)}}else xe.visible&&y.push(C,he,xe,V,De.z,null)}}const ae=C.children;for(let he=0,xe=ae.length;he<xe;he++)_u(ae[he],k,V,H)}function Xp(C,k,V,H){const O=C.opaque,ae=C.transmissive,he=C.transparent;g.setupLightsView(V),Y===!0&&Fe.setGlobalState(x.clippingPlanes,V),H&&Me.viewport(M.copy(H)),O.length>0&&ka(O,k,V),ae.length>0&&ka(ae,k,V),he.length>0&&ka(he,k,V),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function $p(C,k,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[H.id]===void 0&&(g.state.transmissionRenderTarget[H.id]=new ns(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?Ua:Ii,minFilter:Xr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=g.state.transmissionRenderTarget[H.id],he=H.viewport||M;ae.setSize(he.z,he.w);const xe=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(z),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),He?me.render(V):x.clear();const _e=x.toneMapping;x.toneMapping=fr;const Ae=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),g.setupLightsView(H),Y===!0&&Fe.setGlobalState(x.clippingPlanes,H),ka(C,V,H),Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let we=0,Ye=k.length;we<Ye;we++){const mt=k[we],gt=mt.object,mn=mt.geometry,qe=mt.material,Se=mt.group;if(qe.side===Ei&&gt.layers.test(H.layers)){const Vt=qe.side;qe.side=pn,qe.needsUpdate=!0,Yp(gt,V,H,mn,qe,Se),qe.side=Vt,qe.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ie.updateMultisampleRenderTarget(ae),Ie.updateRenderTargetMipmap(ae))}x.setRenderTarget(xe),x.setClearColor(z,W),Ae!==void 0&&(H.viewport=Ae),x.toneMapping=_e}function ka(C,k,V){const H=k.isScene===!0?k.overrideMaterial:null;for(let O=0,ae=C.length;O<ae;O++){const he=C[O],xe=he.object,_e=he.geometry,Ae=H===null?he.material:H,Ce=he.group;xe.layers.test(V.layers)&&Yp(xe,k,V,_e,Ae,Ce)}}function Yp(C,k,V,H,O,ae){C.onBeforeRender(x,k,V,H,O,ae),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),O.transparent===!0&&O.side===Ei&&O.forceSinglePass===!1?(O.side=pn,O.needsUpdate=!0,x.renderBufferDirect(V,k,H,O,C,ae),O.side=gr,O.needsUpdate=!0,x.renderBufferDirect(V,k,H,O,C,ae),O.side=Ei):x.renderBufferDirect(V,k,H,O,C,ae),C.onAfterRender(x,k,V,H,O,ae)}function Oa(C,k,V){k.isScene!==!0&&(k=Oe);const H=Pe.get(C),O=g.state.lights,ae=g.state.shadowsArray,he=O.state.version,xe=Q.getParameters(C,O.state,ae,k,V),_e=Q.getProgramCacheKey(xe);let Ae=H.programs;H.environment=C.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(C.isMeshStandardMaterial?T:L).get(C.envMap||H.environment),H.envMapRotation=H.environment!==null&&C.envMap===null?k.environmentRotation:C.envMapRotation,Ae===void 0&&(C.addEventListener("dispose",Te),Ae=new Map,H.programs=Ae);let Ce=Ae.get(_e);if(Ce!==void 0){if(H.currentProgram===Ce&&H.lightsStateVersion===he)return Kp(C,xe),Ce}else xe.uniforms=Q.getUniforms(C),C.onBeforeCompile(xe,x),Ce=Q.acquireProgram(xe,_e),Ae.set(_e,Ce),H.uniforms=xe.uniforms;const we=H.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(we.clippingPlanes=Fe.uniform),Kp(C,xe),H.needsLights=cy(C),H.lightsStateVersion=he,H.needsLights&&(we.ambientLightColor.value=O.state.ambient,we.lightProbe.value=O.state.probe,we.directionalLights.value=O.state.directional,we.directionalLightShadows.value=O.state.directionalShadow,we.spotLights.value=O.state.spot,we.spotLightShadows.value=O.state.spotShadow,we.rectAreaLights.value=O.state.rectArea,we.ltc_1.value=O.state.rectAreaLTC1,we.ltc_2.value=O.state.rectAreaLTC2,we.pointLights.value=O.state.point,we.pointLightShadows.value=O.state.pointShadow,we.hemisphereLights.value=O.state.hemi,we.directionalShadowMap.value=O.state.directionalShadowMap,we.directionalShadowMatrix.value=O.state.directionalShadowMatrix,we.spotShadowMap.value=O.state.spotShadowMap,we.spotLightMatrix.value=O.state.spotLightMatrix,we.spotLightMap.value=O.state.spotLightMap,we.pointShadowMap.value=O.state.pointShadowMap,we.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ce,H.uniformsList=null,Ce}function qp(C){if(C.uniformsList===null){const k=C.currentProgram.getUniforms();C.uniformsList=sc.seqWithValue(k.seq,C.uniforms)}return C.uniformsList}function Kp(C,k){const V=Pe.get(C);V.outputColorSpace=k.outputColorSpace,V.batching=k.batching,V.batchingColor=k.batchingColor,V.instancing=k.instancing,V.instancingColor=k.instancingColor,V.instancingMorph=k.instancingMorph,V.skinning=k.skinning,V.morphTargets=k.morphTargets,V.morphNormals=k.morphNormals,V.morphColors=k.morphColors,V.morphTargetsCount=k.morphTargetsCount,V.numClippingPlanes=k.numClippingPlanes,V.numIntersection=k.numClipIntersection,V.vertexAlphas=k.vertexAlphas,V.vertexTangents=k.vertexTangents,V.toneMapping=k.toneMapping}function ay(C,k,V,H,O){k.isScene!==!0&&(k=Oe),Ie.resetTextureUnits();const ae=k.fog,he=H.isMeshStandardMaterial?k.environment:null,xe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Er,_e=(H.isMeshStandardMaterial?T:L).get(H.envMap||he),Ae=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ce=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!V.morphAttributes.position,Ye=!!V.morphAttributes.normal,mt=!!V.morphAttributes.color;let gt=fr;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=x.toneMapping);const mn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,qe=mn!==void 0?mn.length:0,Se=Pe.get(H),Vt=g.state.lights;if(Y===!0&&(ie===!0||C!==E)){const Cn=C===E&&H.id===P;Fe.setState(H,C,Cn)}let Ke=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Vt.state.version||Se.outputColorSpace!==xe||O.isBatchedMesh&&Se.batching===!1||!O.isBatchedMesh&&Se.batching===!0||O.isBatchedMesh&&Se.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Se.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Se.instancing===!1||!O.isInstancedMesh&&Se.instancing===!0||O.isSkinnedMesh&&Se.skinning===!1||!O.isSkinnedMesh&&Se.skinning===!0||O.isInstancedMesh&&Se.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Se.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Se.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Se.instancingMorph===!1&&O.morphTexture!==null||Se.envMap!==_e||H.fog===!0&&Se.fog!==ae||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Fe.numPlanes||Se.numIntersection!==Fe.numIntersection)||Se.vertexAlphas!==Ae||Se.vertexTangents!==Ce||Se.morphTargets!==we||Se.morphNormals!==Ye||Se.morphColors!==mt||Se.toneMapping!==gt||Se.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Se.__version=H.version);let Vn=Se.currentProgram;Ke===!0&&(Vn=Oa(H,k,O));let as=!1,gn=!1,yu=!1;const Tt=Vn.getUniforms(),zi=Se.uniforms;if(Me.useProgram(Vn.program)&&(as=!0,gn=!0,yu=!0),H.id!==P&&(P=H.id,gn=!0),as||E!==C){Tt.setValue(D,"projectionMatrix",C.projectionMatrix),Tt.setValue(D,"viewMatrix",C.matrixWorldInverse);const Cn=Tt.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,fe.setFromMatrixPosition(C.matrixWorld)),et.logarithmicDepthBuffer&&Tt.setValue(D,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Tt.setValue(D,"isOrthographic",C.isOrthographicCamera===!0),E!==C&&(E=C,gn=!0,yu=!0)}if(O.isSkinnedMesh){Tt.setOptional(D,O,"bindMatrix"),Tt.setOptional(D,O,"bindMatrixInverse");const Cn=O.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Tt.setValue(D,"boneTexture",Cn.boneTexture,Ie))}O.isBatchedMesh&&(Tt.setOptional(D,O,"batchingTexture"),Tt.setValue(D,"batchingTexture",O._matricesTexture,Ie),Tt.setOptional(D,O,"batchingIdTexture"),Tt.setValue(D,"batchingIdTexture",O._indirectTexture,Ie),Tt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Tt.setValue(D,"batchingColorTexture",O._colorsTexture,Ie));const Su=V.morphAttributes;if((Su.position!==void 0||Su.normal!==void 0||Su.color!==void 0)&&je.update(O,V,Vn),(gn||Se.receiveShadow!==O.receiveShadow)&&(Se.receiveShadow=O.receiveShadow,Tt.setValue(D,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zi.envMap.value=_e,zi.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&k.environment!==null&&(zi.envMapIntensity.value=k.environmentIntensity),gn&&(Tt.setValue(D,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&ly(zi,yu),ae&&H.fog===!0&&Ee.refreshFogUniforms(zi,ae),Ee.refreshMaterialUniforms(zi,H,B,G,g.state.transmissionRenderTarget[C.id]),sc.upload(D,qp(Se),zi,Ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(sc.upload(D,qp(Se),zi,Ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Tt.setValue(D,"center",O.center),Tt.setValue(D,"modelViewMatrix",O.modelViewMatrix),Tt.setValue(D,"normalMatrix",O.normalMatrix),Tt.setValue(D,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Cn=H.uniformsGroups;for(let Mu=0,uy=Cn.length;Mu<uy;Mu++){const Zp=Cn[Mu];lt.update(Zp,Vn),lt.bind(Zp,Vn)}}return Vn}function ly(C,k){C.ambientLightColor.needsUpdate=k,C.lightProbe.needsUpdate=k,C.directionalLights.needsUpdate=k,C.directionalLightShadows.needsUpdate=k,C.pointLights.needsUpdate=k,C.pointLightShadows.needsUpdate=k,C.spotLights.needsUpdate=k,C.spotLightShadows.needsUpdate=k,C.rectAreaLights.needsUpdate=k,C.hemisphereLights.needsUpdate=k}function cy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,k,V){Pe.get(C.texture).__webglTexture=k,Pe.get(C.depthTexture).__webglTexture=V;const H=Pe.get(C);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,k){const V=Pe.get(C);V.__webglFramebuffer=k,V.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(C,k=0,V=0){A=C,R=k,b=V;let H=!0,O=null,ae=!1,he=!1;if(C){const _e=Pe.get(C);_e.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(D.FRAMEBUFFER,null),H=!1):_e.__webglFramebuffer===void 0?Ie.setupRenderTarget(C):_e.__hasExternalTextures&&Ie.rebindTextures(C,Pe.get(C.texture).__webglTexture,Pe.get(C.depthTexture).__webglTexture);const Ae=C.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(he=!0);const Ce=Pe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ce[k])?O=Ce[k][V]:O=Ce[k],ae=!0):C.samples>0&&Ie.useMultisampledRTT(C)===!1?O=Pe.get(C).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[V]:O=Ce,M.copy(C.viewport),w.copy(C.scissor),I=C.scissorTest}else M.copy(J).multiplyScalar(B).floor(),w.copy(re).multiplyScalar(B).floor(),I=ye;if(Me.bindFramebuffer(D.FRAMEBUFFER,O)&&H&&Me.drawBuffers(C,O),Me.viewport(M),Me.scissor(w),Me.setScissorTest(I),ae){const _e=Pe.get(C.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,V)}else if(he){const _e=Pe.get(C.texture),Ae=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,_e.__webglTexture,V||0,Ae)}P=-1},this.readRenderTargetPixels=function(C,k,V,H,O,ae,he){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){Me.bindFramebuffer(D.FRAMEBUFFER,xe);try{const _e=C.texture,Ae=_e.format,Ce=_e.type;if(!et.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=C.width-H&&V>=0&&V<=C.height-O&&D.readPixels(k,V,H,O,Le.convert(Ae),Le.convert(Ce),ae)}finally{const _e=A!==null?Pe.get(A).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(C,k,V,H,O,ae,he){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Pe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){Me.bindFramebuffer(D.FRAMEBUFFER,xe);try{const _e=C.texture,Ae=_e.format,Ce=_e.type;if(!et.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=C.width-H&&V>=0&&V<=C.height-O){const we=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(k,V,H,O,Le.convert(Ae),Le.convert(Ce),0),D.flush();const Ye=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await rT(D,Ye,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,we),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae)}finally{D.deleteBuffer(we),D.deleteSync(Ye)}return ae}}finally{const _e=A!==null?Pe.get(A).__webglFramebuffer:null;Me.bindFramebuffer(D.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(C,k=null,V=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,C=arguments[1]);const H=Math.pow(2,-V),O=Math.floor(C.image.width*H),ae=Math.floor(C.image.height*H),he=k!==null?k.x:0,xe=k!==null?k.y:0;Ie.setTexture2D(C,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,he,xe,O,ae),Me.unbindTexture()},this.copyTextureToTexture=function(C,k,V=null,H=null,O=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,C=arguments[1],k=arguments[2],O=arguments[3]||0,V=null);let ae,he,xe,_e,Ae,Ce;V!==null?(ae=V.max.x-V.min.x,he=V.max.y-V.min.y,xe=V.min.x,_e=V.min.y):(ae=C.image.width,he=C.image.height,xe=0,_e=0),H!==null?(Ae=H.x,Ce=H.y):(Ae=0,Ce=0);const we=Le.convert(k.format),Ye=Le.convert(k.type);Ie.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const mt=D.getParameter(D.UNPACK_ROW_LENGTH),gt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),qe=D.getParameter(D.UNPACK_SKIP_ROWS),Se=D.getParameter(D.UNPACK_SKIP_IMAGES),Vt=C.isCompressedTexture?C.mipmaps[O]:C.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,_e),C.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Ae,Ce,ae,he,we,Ye,Vt.data):C.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Ae,Ce,Vt.width,Vt.height,we,Vt.data):D.texSubImage2D(D.TEXTURE_2D,O,Ae,Ce,ae,he,we,Ye,Vt),D.pixelStorei(D.UNPACK_ROW_LENGTH,mt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Se),O===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(C,k,V=null,H=null,O=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,H=arguments[1]||null,C=arguments[2],k=arguments[3],O=arguments[4]||0);let ae,he,xe,_e,Ae,Ce,we,Ye,mt;const gt=C.isCompressedTexture?C.mipmaps[O]:C.image;V!==null?(ae=V.max.x-V.min.x,he=V.max.y-V.min.y,xe=V.max.z-V.min.z,_e=V.min.x,Ae=V.min.y,Ce=V.min.z):(ae=gt.width,he=gt.height,xe=gt.depth,_e=0,Ae=0,Ce=0),H!==null?(we=H.x,Ye=H.y,mt=H.z):(we=0,Ye=0,mt=0);const mn=Le.convert(k.format),qe=Le.convert(k.type);let Se;if(k.isData3DTexture)Ie.setTexture3D(k,0),Se=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ie.setTexture2DArray(k,0),Se=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Vt=D.getParameter(D.UNPACK_ROW_LENGTH),Ke=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Vn=D.getParameter(D.UNPACK_SKIP_PIXELS),as=D.getParameter(D.UNPACK_SKIP_ROWS),gn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,_e),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),C.isDataTexture||C.isData3DTexture?D.texSubImage3D(Se,O,we,Ye,mt,ae,he,xe,mn,qe,gt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Se,O,we,Ye,mt,ae,he,xe,mn,gt.data):D.texSubImage3D(Se,O,we,Ye,mt,ae,he,xe,mn,qe,gt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Vt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ke),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Vn),D.pixelStorei(D.UNPACK_SKIP_ROWS,as),D.pixelStorei(D.UNPACK_SKIP_IMAGES,gn),O===0&&k.generateMipmaps&&D.generateMipmap(Se),Me.unbindTexture()},this.initRenderTarget=function(C){Pe.get(C).__webglFramebuffer===void 0&&Ie.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Ie.setTextureCube(C,0):C.isData3DTexture?Ie.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Ie.setTexture2DArray(C,0):Ie.setTexture2D(C,0),Me.unbindTexture()},this.resetState=function(){R=0,b=0,A=null,Me.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ip?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===mu?"display-p3":"srgb"}}class Op{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=n,this.far=i}clone(){return new Op(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class fR extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class hR{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=vh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Up("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new U;class jc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=li(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=li(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=li(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=li(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array),s=tt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new kn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bp extends wr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let bs;const Ho=new U,Rs=new U,Ps=new U,Ls=new Ne,jo=new Ne,ey=new it,Tl=new U,Go=new U,Al=new U,yv=new Ne,bd=new Ne,Sv=new Ne;class ty extends bt{constructor(e=new Bp){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new yt;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new hR(n,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new jc(i,3,0,!1)),bs.setAttribute("uv",new jc(i,2,3,!1))}this.geometry=bs,this.material=e,this.center=new Ne(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),ey.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Ps.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Cl(Tl.set(-.5,-.5,0),Ps,o,Rs,r,s),Cl(Go.set(.5,-.5,0),Ps,o,Rs,r,s),Cl(Al.set(.5,.5,0),Ps,o,Rs,r,s),yv.set(0,0),bd.set(1,0),Sv.set(1,1);let a=e.ray.intersectTriangle(Tl,Go,Al,!1,Ho);if(a===null&&(Cl(Go.set(-.5,.5,0),Ps,o,Rs,r,s),bd.set(0,1),a=e.ray.intersectTriangle(Tl,Al,Go,!1,Ho),a===null))return;const l=e.ray.origin.distanceTo(Ho);l<e.near||l>e.far||n.push({distance:l,point:Ho.clone(),uv:Dn.getInterpolation(Ho,Tl,Go,Al,yv,bd,Sv,new Ne),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Cl(t,e,n,i,r,s){Ls.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(jo.x=s*Ls.x-r*Ls.y,jo.y=r*Ls.x+s*Ls.y):jo.copy(Ls),t.copy(e),t.x+=jo.x,t.y+=jo.y,t.applyMatrix4(ey)}class is extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new U,Wc=new U,Mv=new it,Wo=new gu,bl=new za,Rd=new U,Ev=new U;class Jo extends bt{constructor(e=new yt,n=new is){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Gc.fromBufferAttribute(n,r-1),Wc.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Gc.distanceTo(Wc);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),bl.radius+=s,e.ray.intersectsSphere(bl)===!1)return;Mv.copy(r).invert(),Wo.copy(e.ray).applyMatrix4(Mv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,h=i.attributes.position;if(f!==null){const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let y=p,g=v-1;y<g;y+=c){const u=f.getX(y),_=f.getX(y+1),x=Rl(this,e,Wo,l,u,_);x&&n.push(x)}if(this.isLineLoop){const y=f.getX(v-1),g=f.getX(p),u=Rl(this,e,Wo,l,y,g);u&&n.push(u)}}else{const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let y=p,g=v-1;y<g;y+=c){const u=Rl(this,e,Wo,l,y,y+1);u&&n.push(u)}if(this.isLineLoop){const y=Rl(this,e,Wo,l,v-1,p);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Rl(t,e,n,i,r,s){const o=t.geometry.attributes.position;if(Gc.fromBufferAttribute(o,r),Wc.fromBufferAttribute(o,s),n.distanceSqToSegment(Gc,Wc,Rd,Ev)>i)return;Rd.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Rd);if(!(l<e.near||l>e.far))return{distance:l,point:Ev.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const wv=new U,Tv=new U;class Vp extends Jo{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)wv.fromBufferAttribute(n,r),Tv.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wv.distanceTo(Tv);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Hp extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Av=new it,yh=new gu,Pl=new za,Ll=new U;class ny extends bt{constructor(e=new yt,n=new Hp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Pl.copy(i.boundingSphere),Pl.applyMatrix4(r),Pl.radius+=s,e.ray.intersectsSphere(Pl)===!1)return;Av.copy(r).invert(),yh.copy(e.ray).applyMatrix4(Av);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=h,y=p;v<y;v++){const g=c.getX(v);Ll.fromBufferAttribute(d,g),Cv(Ll,g,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let v=h,y=p;v<y;v++)Ll.fromBufferAttribute(d,v),Cv(Ll,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Cv(t,e,n,i,r,s,o){const a=yh.distanceSqToPoint(t);if(a<n){const l=new U;yh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class iy extends rn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class pR{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],h=i[r+1]-f,p=(o-f)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ne:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new U,r=[],s=[],o=[],a=new U,l=new it;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Zt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Zt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function jp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,d){let h=(o-s)/c-(a-s)/(c+f)+(a-o)/f,p=(a-o)/f-(l-o)/(f+d)+(l-a)/d;h*=f,p*=f,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Nl=new U,Pd=new jp,Ld=new jp,Nd=new jp;class mR extends pR{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(Nl.subVectors(r[0],r[1]).add(r[0]),c=Nl);const d=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Nl.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Nl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(h),p),g=Math.pow(h.distanceToSquared(f),p);y<1e-4&&(y=1),v<1e-4&&(v=y),g<1e-4&&(g=y),Pd.initNonuniformCatmullRom(c.x,d.x,h.x,f.x,v,y,g),Ld.initNonuniformCatmullRom(c.y,d.y,h.y,f.y,v,y,g),Nd.initNonuniformCatmullRom(c.z,d.z,h.z,f.z,v,y,g)}else this.curveType==="catmullrom"&&(Pd.initCatmullRom(c.x,d.x,h.x,f.x,this.tension),Ld.initCatmullRom(c.y,d.y,h.y,f.y,this.tension),Nd.initCatmullRom(c.z,d.z,h.z,f.z,this.tension));return i.set(Pd.calc(l),Ld.calc(l),Nd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class xu extends yt{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],d=[],h=[],p=[];let v=0;const y=[],g=i/2;let u=0;_(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(p,2));function _(){const S=new U,R=new U;let b=0;const A=(n-e)/i;for(let P=0;P<=s;P++){const E=[],M=P/s,w=M*(n-e)+e;for(let I=0;I<=r;I++){const z=I/r,W=z*l+a,X=Math.sin(W),G=Math.cos(W);R.x=w*X,R.y=-M*i+g,R.z=w*G,d.push(R.x,R.y,R.z),S.set(X,A,G).normalize(),h.push(S.x,S.y,S.z),p.push(z,1-M),E.push(v++)}y.push(E)}for(let P=0;P<r;P++)for(let E=0;E<s;E++){const M=y[E][P],w=y[E+1][P],I=y[E+1][P+1],z=y[E][P+1];f.push(M,w,z),f.push(w,I,z),b+=6}c.addGroup(u,b,0),u+=b}function x(S){const R=v,b=new Ne,A=new U;let P=0;const E=S===!0?e:n,M=S===!0?1:-1;for(let I=1;I<=r;I++)d.push(0,g*M,0),h.push(0,M,0),p.push(.5,.5),v++;const w=v;for(let I=0;I<=r;I++){const W=I/r*l+a,X=Math.cos(W),G=Math.sin(W);A.x=E*G,A.y=g*M,A.z=E*X,d.push(A.x,A.y,A.z),h.push(0,M,0),b.x=X*.5+.5,b.y=G*.5*M+.5,p.push(b.x,b.y),v++}for(let I=0;I<r;I++){const z=R+I,W=w+I;S===!0?f.push(W,W+1,z):f.push(W+1,W,z),P+=3}c.addGroup(u,P,S===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Dl=new U,Il=new U,Dd=new U,Ul=new Dn;class gR extends yt{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(rc*n),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],f=["a","b","c"],d=new Array(3),h={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:y,b:g,c:u}=Ul;if(y.fromBufferAttribute(a,c[0]),g.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),Ul.getNormal(Dd),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const x=(_+1)%3,S=d[_],R=d[x],b=Ul[f[_]],A=Ul[f[x]],P=`${S}_${R}`,E=`${R}_${S}`;E in h&&h[E]?(Dd.dot(h[E].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(A.x,A.y,A.z)),h[E]=null):P in h||(h[P]={index0:c[_],index1:c[x],normal:Dd.clone()})}}for(const v in h)if(h[v]){const{index0:y,index1:g}=h[v];Dl.fromBufferAttribute(a,y),Il.fromBufferAttribute(a,g),p.push(Dl.x,Dl.y,Dl.z),p.push(Il.x,Il.y,Il.z)}this.setAttribute("position",new St(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Gp extends yt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new U,d=new U,h=new U;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const y=v/r*s,g=p/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(y),d.y=(e+n*Math.cos(g))*Math.sin(y),d.z=n*Math.sin(g),a.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const y=(r+1)*p+v-1,g=(r+1)*(p-1)+v-1,u=(r+1)*(p-1)+v,_=(r+1)*p+v;o.push(y,g,_),o.push(g,u,_)}this.setIndex(o),this.setAttribute("position",new St(a,3)),this.setAttribute("normal",new St(l,3)),this.setAttribute("uv",new St(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fl extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=F_,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bv extends is{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class ry extends bt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class vR extends ry{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const Id=new it,Rv=new U,Pv=new U;class xR{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Rv.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rv),Pv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Pv),n.updateMatrixWorld(),Id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Id),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Id)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _R extends xR{constructor(){super(new Y_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yR extends ry{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new _R}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Lv=new it;class SR{constructor(e,n,i=0,r=1/0){this.ray=new gu(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Fp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Lv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lv),this}intersectObject(e,n=!0,i=[]){return Sh(e,this,i,n),i.sort(Nv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Sh(e[r],this,i,n);return i.sort(Nv),i}}function Nv(t,e){return t.distance-e.distance}function Sh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Sh(s[o],e,n,!0)}}class MR extends Vp{constructor(e=10,n=10,i=4473924,r=8947848){i=new Re(i),r=new Re(r);const s=n/2,o=e/n,a=e/2,l=[],c=[];for(let h=0,p=0,v=-a;h<=n;h++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const y=h===s?i:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const f=new yt;f.setAttribute("position",new St(l,3)),f.setAttribute("color",new St(c,3));const d=new is({vertexColors:!0,toneMapped:!1});super(f,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cp);const sn={W:12.5,L:16,H:6.4,piles:[{x:-3.4,z:-4.6,r:2.9,h:4.1},{x:2.6,z:.4,r:2.5,h:3.4},{x:-3.2,z:5.2,r:2.1,h:2.6}]},ER={"M-01":sn,"M-02":{W:11,L:13.5,H:5.6,piles:[{x:-2.6,z:-3.6,r:2.1,h:2.8},{x:2.4,z:-.4,r:1.9,h:2.4},{x:-2.2,z:3.6,r:1.7,h:2.1},{x:2.6,z:4.2,r:1.4,h:1.8}]},"M-03":{W:16,L:21,H:7.5,piles:[{x:-4.8,z:-6.4,r:3.4,h:4.8},{x:4,z:-4.4,r:3,h:4.2},{x:-3.6,z:3.6,r:2.8,h:3.6},{x:4.4,z:6,r:2.4,h:3}]},"M-04":{W:9.5,L:22,H:5.8,piles:[{x:.2,z:-6.8,r:2.6,h:3.4},{x:-.3,z:0,r:2.8,h:3.8},{x:.4,z:6.8,r:2.4,h:3.1}]},"M-05":{W:13,L:13,H:6.8,piles:[{x:-3.2,z:-3.2,r:2.4,h:3.9},{x:3.4,z:-3,r:2.2,h:3.2},{x:-3,z:3.4,r:2.1,h:2.8},{x:3.2,z:3.2,r:2.3,h:3.3},{x:.1,z:.1,r:1.5,h:2.1}]}};function sy(t){return ER[t??""]??sn}const wR=sn.W,TR=sn.L,AR=sn.H;sn.piles;function Xc(t,e,n){let i=0;for(const r of t.piles){const s=Math.hypot(e-r.x,n-r.z);if(s<r.r){const o=1-s/r.r;i=Math.max(i,r.h*o*o*(3-2*o))}}return i}const Rn=(t,e)=>t+Math.random()*(e-t);function zl(t,e){const n=new yt;n.setAttribute("position",new St(t,3)),n.setAttribute("color",new St(e,3));const i=new Hp({size:.036,sizeAttenuation:!0,vertexColors:!0});return new ny(n,i)}function CR(t=sn){const e=new Fn,{W:n,L:i,H:r}=t,s=n*i/(sn.W*sn.L),o=Math.max(...t.piles.map(c=>c.h));{const c=[],f=[],d=new Re("#A9B3C0");let h=0;for(;h<Math.round(6e3*s);){const p=Rn(-n/2,n/2),v=Rn(-i/2,i/2);if(Xc(t,p,v)>.05)continue;c.push(p,Math.random()*.016,v);const y=Rn(.985,1.015);f.push(d.r*y,d.g*y,d.b*y),h++}e.add(zl(c,f))}{const c=[],f=[],d=new Re("#B4BdC9".toLowerCase());for(let h=0;h<Math.round(5200*Math.sqrt(s));h++){const p=Math.floor(Math.random()*4),v=Math.random()*r,y=Rn(-.014,.014);let g=0,u=0;p===0?(g=-n/2+y,u=Rn(-i/2,i/2)):p===1?(g=n/2+y,u=Rn(-i/2,i/2)):p===2?(u=-i/2+y,g=Rn(-n/2,n/2)):(u=i/2+y,g=Rn(-n/2,n/2)),c.push(g,v,u);const _=.99+v/80;f.push(Math.min(1,d.r*_),Math.min(1,d.g*_),Math.min(1,d.b*_))}e.add(zl(c,f))}{const c=[],f=[],d=new Re("#8794A6"),h=-n/2+1.5,p=i/2-2.2;for(let v=0;v<900;v++){const y=Math.random()*Math.PI*2;c.push(h+Math.cos(y)*.26,Math.random()*r,p+Math.sin(y)*.26),f.push(d.r,d.g,d.b)}e.add(zl(c,f))}let a,l=0;{const c=[],f=[],d=new Re("#6F7480"),h=new Re("#CDD1D8");let p=0;for(;p<Math.round(26e3*s);){const v=Rn(-n/2,n/2),y=Rn(-i/2,i/2),g=Xc(t,v,y);if(g<.06)continue;c.push(v,g+Rn(-.012,.012),y);const u=g/o,_=u*u*.92+.08,x=d.clone().lerp(h,Math.min(1,_)),S=Rn(.975,1.025);f.push(x.r*S,x.g*S,x.b*S),p++}a=zl(c,f),l=p,e.add(a)}return{group:e,pilePoints:a,pileFullCount:l}}function bR(t=sn){const e=new Fn;return t.piles.forEach((n,i)=>{const r=new Co(new U(n.x-n.r,0,n.z-n.r),new U(n.x+n.r,n.h+.15,n.z+n.r)),s=new U,o=new U;r.getSize(s),r.getCenter(o);const a=new gR(new fi(s.x,s.y,s.z)),l=new Vp(a,new is({color:"#E8792B",transparent:!0,opacity:.9}));l.position.copy(o),l.userData.pileIdx=i,e.add(l)}),e}function RR(t=sn){const e=new Fn;return t.piles.forEach((n,i)=>{const r=new kt(new fi(n.r*2,n.h+.15,n.r*2),new ro({visible:!1}));r.position.set(n.x,(n.h+.15)/2,n.z),r.userData.pileIdx=i,e.add(r)}),e}function PR(t,e=sn){const n=new Fn;return e.piles.forEach((i,r)=>{const s=t[r]??`堆体 ${String.fromCharCode(65+r)}`,o=document.createElement("canvas");o.width=256,o.height=80;const a=o.getContext("2d");a.fillStyle="rgba(255,255,255,0.88)",a.fillRect(48,8,160,52),a.strokeStyle="#E8792B",a.strokeRect(48,8,160,52),a.fillStyle="#1B1F27",a.font='30px -apple-system, "PingFang SC", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(s,128,35);const l=new iy(o),c=new ty(new Bp({map:l,depthTest:!1}));c.scale.set(2.6,.8,1),c.position.set(i.x,i.h+.8,i.z),n.add(c)}),n}function oc(t){return Math.sin(t*12.9898+78.233)%1}function LR(t,e,n=sn){const{W:i,L:r}=n,s=Math.max(2,Math.round(t/6)),o=Math.ceil(t/s),a=[];let l=0;for(let u=0;u<s&&l<t;u++){const _=-i/2+1.6+(i-3.2)*(s===1?.5:u/(s-1)),x=u%2===0;for(let S=0;S<o&&l<t;S++,l++){const R=o===1?.5:S/(o-1),b=(x?-1:1)*(r/2-1.6)*(1-2*R),A=oc(l*3.1+u)*.7,P=oc(l*5.7+2.3)*.45,E=oc(l*2.3+.6)*.22;a.push(new U(_+A,e+E,b+P))}}const f=new mR(a,!1,"centripetal",.5).getPoints(Math.max(120,t*10)),d=[];let h=0,p=0,v=1/0;for(let u=0;u<f.length-1;u++){const _=f[u].distanceTo(f[u+1]);d.push(_),h+=_;const x=f[u].clone().add(f[u+1]).multiplyScalar(.5),S=x.y-Xc(n,x.x,x.z);S<v&&(v=S,p=u)}const y=[0];for(let u=0;u<d.length;u++)y.push(y[u]+d[u]);const g=a.map(u=>{let _=0,x=1/0;for(let S=0;S<f.length;S++){const R=f[S].distanceToSquared(u);R<x&&(x=R,_=S)}return h===0?0:y[_]/h});return{pts:f,waypoints:a,wpFracs:g,segLens:d,totalLen:h,minClearIdx:p,minClearM:v}}function $s(t,e){const n=Math.max(0,Math.min(1,e))*t.totalLen;let i=0;for(let r=0;r<t.segLens.length;r++){if(i+t.segLens[r]>=n||r===t.segLens.length-1){const s=t.segLens[r]===0?0:(n-i)/t.segLens[r],o=t.pts[r].clone().lerp(t.pts[r+1],Math.max(0,Math.min(1,s))),a=t.pts[r+1].clone().sub(t.pts[r]).normalize();return{pos:o,dir:a}}i+=t.segLens[r]}return{pos:t.pts[0].clone(),dir:new U(0,0,1)}}function NR(t,e){const n=t.waypoints,i=[];let r=null;for(let s=0;s<Math.min(e,n.length);s++){const o=n[s],a=n[Math.min(s+1,n.length-1)],l=n[Math.max(0,s-1)],c=a.clone().sub(l),f=(Math.atan2(c.x,c.z)*180/Math.PI+360)%360,h=(r===null?0:Math.abs((f-r+540)%360-180))>45;i.push({x:Math.round(o.x*100)/100,y:Math.round(o.y*100)/100,z:Math.round(o.z*100)/100,yawDeg:Math.round(f),isPhoto:s>0&&!h,vel:Math.round((h?.8:1.2+Math.abs(oc(s*1.7))*.5)*10)/10}),r=f}return i}function DR(t,e=300){const n=new Float32Array(e*3);for(let i=0;i<e;i++){const{pos:r}=$s(t,i/(e-1));n[i*3]=r.x,n[i*3+1]=r.y-.06,n[i*3+2]=r.z}return n}let kl=null;function IR(){if(kl)return kl;const t=document.createElement("canvas");t.width=64,t.height=64;const e=t.getContext("2d");return e.beginPath(),e.arc(32,32,28,0,Math.PI*2),e.fillStyle="rgba(255,255,255,.95)",e.fill(),e.lineWidth=1.8,e.strokeStyle="#4C6BC0",e.stroke(),e.lineWidth=2.4,e.beginPath(),e.roundRect(17,25,30,20,4.5),e.stroke(),e.beginPath(),e.roundRect(25.5,19.5,13,6.5,2),e.stroke(),e.beginPath(),e.arc(32,35,6,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(32,35,2.2,0,Math.PI*2),e.fillStyle="#4C6BC0",e.fill(),kl=new iy(t),kl}const Ud=1;function UR(t){const{W:e,L:n,H:i}=t,r=new Fn,s=[],o=[],a=2;for(let d=-e/2;d<=e/2+.01;d+=a)s.push(d,.012,-n/2,d,.012,n/2);for(let d=-n/2;d<=n/2+.01;d+=a)s.push(-e/2,.012,d,e/2,.012,d);const l=(d,h)=>{const p=d==="x"?n:e;for(let v=-p/2;v<=p/2+.01;v+=a)d==="x"?s.push(h,0,v,h,i,v):s.push(v,0,h,v,i,h);for(let v=a;v<i;v+=a)d==="x"?s.push(h,v,-p/2,h,v,p/2):s.push(-p/2,v,h,p/2,v,h)};l("x",-e/2),l("x",e/2),l("z",-n/2),l("z",n/2);const c=[[-e/2,-n/2],[e/2,-n/2],[e/2,n/2],[-e/2,n/2]];for(let d=0;d<4;d++){const[h,p]=c[d],[v,y]=c[(d+1)%4];o.push(h,.012,p,v,.012,y),o.push(h,i,p,v,i,y),o.push(h,0,p,h,i,p)}const f=(d,h,p)=>{const v=new yt;return v.setAttribute("position",new St(d,3)),new Vp(v,new is({color:h,transparent:!0,opacity:p}))};return r.add(f(s,"#C2CBDB",.38)),r.add(f(o,"#9FACC4",.75)),r}function FR(t){const{W:e,L:n,H:i}=t,r=new Fn,s=new kt(new yo(e,n),new Fl({color:"#232830",roughness:1}));s.rotation.x=-Math.PI/2,r.add(s);const o=new MR(Math.max(e,n),16,"#3A424F","#2A303A");o.position.y=.02,r.add(o);const a=new yo(e,n,90,110);a.rotateX(-Math.PI/2);{const p=a.attributes.position;for(let v=0;v<p.count;v++){const y=p.getX(v),g=p.getZ(v);p.setY(v,Xc(t,y,g)+.015)}a.computeVertexNormals()}r.add(new kt(a,new Fl({color:"#8A8171",roughness:.95})));const l=new Fl({color:"#2A303B",roughness:.9}),c=(p,v,y,g)=>{const u=new kt(new fi(p,i,v),l);u.position.set(y,i/2,g),r.add(u)};c(.12,n,-e/2,0),c(.12,n,e/2,0),c(e,.12,0,-n/2),c(e,.12,0,n/2);const f=new kt(new xu(.26,.26,i,18),new Fl({color:"#3A414E",roughness:.8}));f.position.set(-e/2+1.5,i/2,n/2-2.2),r.add(f);const d=new vR("#9FB0CB","#171B22",1),h=new yR("#DCE4F5",1.2);return h.position.set(5,9,3),d.layers.enable(Ud),h.layers.enable(Ud),r.add(d,h),r.traverse(p=>p.layers.set(Ud)),r}function zR(t){const e=sy(t.sceneId),n=new fR;n.background=new Re("#E9ECF1"),n.fog=new Op("#E9ECF1",42,95),n.add(UR(e));const{group:i,pilePoints:r,pileFullCount:s}=CR(e);n.add(i),n.add(FR(e));const o=LR(t.waypointCount,t.altitudeM,e),a=new Fn;{const u=new yt().setFromPoints(o.pts),_=new Jo(u,new bv({color:"#5F7CC8",dashSize:.28,gapSize:.18,transparent:!0,opacity:.85}));_.computeLineDistances(),a.add(_);const x=new yt().setFromPoints(o.waypoints);a.add(new ny(x,new Hp({color:"#4C6BC0",size:.13,sizeAttenuation:!0})));{const S=IR();NR(o,t.waypointCount).filter(R=>R.isPhoto).forEach(R=>{const b=new ty(new Bp({map:S,depthTest:!0}));b.scale.set(.44,.44,1),b.position.set(R.x,R.y+.42,R.z),a.add(b)})}if(t.highlightMinClearance){const S=o.pts[o.minClearIdx],R=o.pts[o.minClearIdx+1],b=R.clone().sub(S),A=b.length(),P=new kt(new xu(.05,.05,A,6),new ro({color:"#E8792B"}));P.position.copy(S.clone().add(R).multiplyScalar(.5)),P.quaternion.setFromUnitVectors(new U(0,1,0),b.normalize()),a.add(P)}}n.add(a);const l=300,c=new yt;c.setAttribute("position",new kn(DR(o,l),3)),c.setDrawRange(0,0);const f=new Jo(c,new is({color:"#33487E"}));n.add(f);const d=new yt().setFromPoints([new U,new U]),h=new Jo(d,new bv({color:"#8A93A3",dashSize:.3,gapSize:.2,transparent:!0,opacity:.9}));h.visible=!1,n.add(h);const p=new Fn;{const u=new ro({color:"#3E4656"}),_=new ro({color:"#4C6BC0"}),x=new kt(new fi(.2,.07,.28),u);p.add(x),[[1,1],[-1,1],[1,-1],[-1,-1]].forEach(([R,b])=>{const A=new kt(new fi(.26,.025,.035),u);A.position.set(R*.17,.02,b*.2),A.rotation.y=-Math.atan2(b,R),p.add(A);const P=new kt(new Gp(.1,.014,6,22),_);P.rotation.x=Math.PI/2,P.position.set(R*.26,.045,b*.3),p.add(P)});const S=new Jo(new yt().setFromPoints([new U(0,0,0),new U(0,-8,0)]),new is({color:"#4C6BC0",transparent:!0,opacity:.22}));p.add(S)}p.visible=!1,n.add(p);const v=bR(e);v.visible=!0,n.add(v);const y=RR(e);n.add(y);const g=PR(t.labelNames??["堆体 A","堆体 B","堆体 C"],e);return g.visible=!1,n.add(g),{scene:n,cloud:i,pilePoints:r,pileFullCount:s,routeGroup:a,trackLine:f,trackCount:l,drone:p,boxes:v,hitboxes:y,labels:g,path:o,returnLine:h,setTrackProg(u){c.setDrawRange(0,Math.max(0,Math.min(l,Math.round(u*l))))},setDrone(u){const{pos:_,dir:x}=$s(o,u);p.position.copy(_),p.rotation.y=Math.atan2(x.x,x.z)},setDronePosition(u){p.position.copy(u)},setDroneVisible(u){p.visible=u},selectPile(u){v.children.forEach((_,x)=>{_.visible=u===null?!0:x===u,_.material.opacity=u===x?1:.9})}}}const So=Math.PI/180,kR=5*So,OR=83*So,BR=9,VR=46,Dv=wR/2*1.5,Iv=TR/2*1.5,ln={yaw:45*So,pitch:42*So,dist:23,tx:0,ty:1.4,tz:0},Uv={yaw:45*So,pitch:83*So,dist:26,tx:0,ty:0,tz:0};class HR{constructor(e){Ue(this,"yaw",ln.yaw);Ue(this,"pitch",ln.pitch);Ue(this,"dist",ln.dist);Ue(this,"target",new U(ln.tx,ln.ty,ln.tz));Ue(this,"enabled",!0);Ue(this,"onInteract",null);Ue(this,"onTap",null);Ue(this,"onDoubleTap",null);Ue(this,"el");Ue(this,"pointers",new Map);Ue(this,"lastPinch",0);Ue(this,"downAt",0);Ue(this,"downPos",{x:0,y:0});Ue(this,"moved",!1);Ue(this,"lastTapAt",0);Ue(this,"onDown",e=>{if(this.enabled&&(this.el.setPointerCapture(e.pointerId),this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),this.pointers.size===1&&(this.downAt=performance.now(),this.downPos={x:e.clientX,y:e.clientY},this.moved=!1),this.pointers.size===2)){const[n,i]=[...this.pointers.values()];this.lastPinch=Math.hypot(n.x-i.x,n.y-i.y)}});Ue(this,"onMove",e=>{var s,o;if(!this.enabled||!this.pointers.has(e.pointerId))return;const n=this.pointers.get(e.pointerId),i=e.clientX-n.x,r=e.clientY-n.y;if(this.pointers.set(e.pointerId,{x:e.clientX,y:e.clientY}),Math.hypot(e.clientX-this.downPos.x,e.clientY-this.downPos.y)>7&&(this.moved=!0),this.pointers.size===1)this.yaw-=i*.0075,this.pitch+=r*.006,this.clamp(),this.moved&&((s=this.onInteract)==null||s.call(this));else if(this.pointers.size===2){const[a,l]=[...this.pointers.values()],c=Math.hypot(a.x-l.x,a.y-l.y),f=c-this.lastPinch;if(Math.abs(f)>2)this.dist*=1-f*.006,this.lastPinch=c;else{const d=this.dist*.0011,h=new U(Math.cos(this.yaw),0,-Math.sin(this.yaw)),p=new U(-Math.sin(this.yaw),0,-Math.cos(this.yaw));this.target.addScaledVector(h,-i*d),this.target.addScaledVector(p,-r*d)}this.clamp(),(o=this.onInteract)==null||o.call(this)}});Ue(this,"onUp",e=>{var n,i;if(this.pointers.delete(e.pointerId),this.pointers.size===0&&!this.moved&&performance.now()-this.downAt<350){const r=performance.now();r-this.lastTapAt<300?(this.reset(),(n=this.onDoubleTap)==null||n.call(this),this.lastTapAt=0):(this.lastTapAt=r,(i=this.onTap)==null||i.call(this,e.clientX,e.clientY))}});Ue(this,"onWheel",e=>{var n;this.enabled&&(e.preventDefault(),this.dist*=1+e.deltaY*.0012,this.clamp(),(n=this.onInteract)==null||n.call(this))});this.el=e,e.addEventListener("pointerdown",this.onDown),e.addEventListener("pointermove",this.onMove),e.addEventListener("pointerup",this.onUp),e.addEventListener("pointercancel",this.onUp),e.addEventListener("wheel",this.onWheel,{passive:!1})}dispose(){this.el.removeEventListener("pointerdown",this.onDown),this.el.removeEventListener("pointermove",this.onMove),this.el.removeEventListener("pointerup",this.onUp),this.el.removeEventListener("pointercancel",this.onUp),this.el.removeEventListener("wheel",this.onWheel)}reset(){this.yaw=ln.yaw,this.pitch=ln.pitch,this.dist=ln.dist,this.target.set(ln.tx,ln.ty,ln.tz)}setView(e){this.yaw=e.yaw,this.pitch=e.pitch,this.dist=e.dist,this.target.set(e.tx,e.ty,e.tz)}applyTo(e){const n=this.target.x+this.dist*Math.cos(this.pitch)*Math.sin(this.yaw),i=this.target.y+this.dist*Math.sin(this.pitch),r=this.target.z+this.dist*Math.cos(this.pitch)*Math.cos(this.yaw);e.position.set(n,i,r),e.lookAt(this.target)}clamp(){this.pitch=Math.max(kR,Math.min(OR,this.pitch)),this.dist=Math.max(BR,Math.min(VR,this.dist)),this.target.x=Math.max(-Dv,Math.min(Dv,this.target.x)),this.target.z=Math.max(-Iv,Math.min(Iv,this.target.z)),this.target.y=Math.max(0,Math.min(AR,this.target.y))}}const Ys=class Ys{constructor(e,n){Ue(this,"bundle");Ue(this,"orbit");Ue(this,"preset","iso");Ue(this,"swapped",!1);Ue(this,"renderer");Ue(this,"pipRenderer",null);Ue(this,"mainCam");Ue(this,"pipCam");Ue(this,"canvas");Ue(this,"opts");Ue(this,"raf",0);Ue(this,"droneProg",0);Ue(this,"raycaster",new SR);Ue(this,"lowFpsSince",null);Ue(this,"degraded",!1);Ue(this,"disposed",!1);Ue(this,"viewScale",1);Ue(this,"loop",e=>{var l,c;if(this.disposed)return;this.raf=requestAnimationFrame(this.loop);const n=this.canvas.width/this.renderer.getPixelRatio(),i=this.canvas.height/this.renderer.getPixelRatio();if(n===0||i===0)return;this.updateCams();const r=f=>{var h;const d=f?Ys.CAM_BG:Ys.SCENE_BG;this.bundle.scene.background.set(d),(h=this.bundle.scene.fog)==null||h.color.set(d)},s=this.swapped?this.pipCam:this.mainCam,o=this.swapped?this.mainCam:this.pipCam;if(r(s===this.pipCam),s.aspect=n/i,s.updateProjectionMatrix(),this.renderer.render(this.bundle.scene,s),this.pipRenderer&&this.opts.pipCanvas){const f=this.opts.pipCanvas,d=f.clientWidth,h=f.clientHeight;d>0&&h>0&&(r(o===this.pipCam),o.aspect=d/h,o.updateProjectionMatrix(),this.pipRenderer.render(this.bundle.scene,o))}r(!1);const a=e-(this.lastT||e);this.lastT=e,a>0&&(1e3/a<20?this.lowFpsSince===null?this.lowFpsSince=e:e-this.lowFpsSince>2e3&&!this.degraded&&(this.degraded=!0,this.bundle.pilePoints.geometry.setDrawRange(0,Math.round(this.bundle.pileFullCount*.55)),(c=(l=this.opts).onDegrade)==null||c.call(l)):this.lowFpsSince=null)});Ue(this,"lastT",0);this.canvas=e,this.opts=n,this.bundle=zR({waypointCount:n.waypointCount,altitudeM:n.altitudeM,highlightMinClearance:!!n.highlightMinClearance,labelNames:n.labelNames,sceneId:n.sceneId});const i=sy(n.sceneId);this.viewScale=Math.max(i.W/sn.W,i.L/sn.L,1),this.renderer=new _v({canvas:e,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),n.pip&&n.pipCanvas&&(this.pipRenderer=new _v({canvas:n.pipCanvas,antialias:!0}),this.pipRenderer.setPixelRatio(Math.min(2,window.devicePixelRatio))),this.mainCam=new Sn(52,1,.1,200),this.pipCam=new Sn(62,1.4,.05,200),this.pipCam.layers.set(1),this.orbit=new HR(e),this.orbit.onInteract=()=>{var r;this.preset==="follow"&&(this.preset="iso",(r=n.onUserOrbit)==null||r.call(n))},this.orbit.onTap=(r,s)=>this.pick(r,s),this.resize(),this.loop(performance.now())}setPreset(e){this.preset=e,e==="top"&&this.orbit.setView({...Uv,dist:Uv.dist*this.viewScale}),e==="iso"&&this.orbit.setView({...ln,dist:ln.dist*this.viewScale})}setLayers(e){const n=this.bundle;e.cloud!==void 0&&(n.cloud.visible=e.cloud),e.route!==void 0&&(n.routeGroup.visible=e.route),e.track!==void 0&&(n.trackLine.visible=e.track),e.boxes!==void 0&&(n.boxes.visible=e.boxes),e.labels!==void 0&&(n.labels.visible=e.labels)}setFlight(e,n,i=1){if(this.droneProg=e,this.bundle.setTrackProg(i<1?0:e),this.bundle.setDrone(e),i<1){const r=this.bundle.path.pts[0].clone(),s=i*i*(3-2*i);r.y=.25+(r.y-.25)*s,this.bundle.setDronePosition(r)}this.bundle.setDroneVisible(n)}setReturnPath(e){const{pos:n}=$s(this.bundle.path,e),i=this.bundle.path.pts[0];this.bundle.returnLine.geometry.setFromPoints([n,i.clone()]),this.bundle.returnLine.computeLineDistances(),this.bundle.returnLine.visible=!0}setReturnPose(e,n){const i=Math.max(0,Math.min(1,n)),r=e*(1-i),{pos:s}=$s(this.bundle.path,r),o=s.clone();i>.85&&(o.y=s.y*(1-(i-.85)/.15*.92)),this.bundle.setDronePosition(o),this.bundle.setTrackProg(r)}hideReturnPath(){this.bundle.returnLine.visible=!1}setSwapped(e){this.swapped=e}selectPile(e){this.bundle.selectPile(e)}pick(e,n){if(!this.opts.onSelectPile)return;const i=this.canvas.getBoundingClientRect(),r=(e-i.left)/i.width*2-1,s=-((n-i.top)/i.height)*2+1;this.raycaster.setFromCamera(new Ne(r,s),this.mainCam);const o=this.raycaster.intersectObjects(this.bundle.hitboxes.children,!1);this.opts.onSelectPile(o.length?o[0].object.userData.pileIdx:null)}resize(){const e=this.canvas.getBoundingClientRect();if(!(e.width===0||e.height===0)&&(this.renderer.setSize(e.width,e.height,!1),this.mainCam.aspect=e.width/e.height,this.mainCam.updateProjectionMatrix(),this.pipRenderer&&this.opts.pipCanvas)){const n=this.opts.pipCanvas.getBoundingClientRect();n.width>0&&n.height>0&&(this.pipRenderer.setSize(n.width,n.height,!1),this.pipCam.aspect=n.width/n.height,this.pipCam.updateProjectionMatrix())}}updateCams(){if(this.preset==="follow"){const{dir:r}=$s(this.bundle.path,this.droneProg),s=this.bundle.drone.position,o=r.clone().multiplyScalar(-4.2);this.mainCam.position.copy(s).add(o).add(new U(0,2.4,0)),this.mainCam.lookAt(s)}else this.orbit.applyTo(this.mainCam);const{dir:e}=$s(this.bundle.path,this.droneProg),n=this.bundle.drone.position;this.pipCam.position.copy(n);const i=n.clone().add(e.clone().multiplyScalar(3)).add(new U(0,-2.1,0));this.pipCam.lookAt(i)}dispose(){var e;this.disposed=!0,cancelAnimationFrame(this.raf),this.orbit.dispose(),this.bundle.scene.traverse(n=>{const i=n;i.geometry&&i.geometry.dispose();const r=i.material;Array.isArray(r)?r.forEach(s=>s.dispose()):r==null||r.dispose()}),this.renderer.dispose(),(e=this.pipRenderer)==null||e.dispose()}};Ue(Ys,"SCENE_BG","#E9ECF1"),Ue(Ys,"CAM_BG","#10131A");let Mh=Ys;function Fv(t,e){var i;const n=((i=t.stacks[e])==null?void 0:i.id)??"";return n==="S-A"?0:n==="S-B"?1:n==="S-C"?2:Math.min(e,2)}const Fd=t=>({height:26,padding:"0 10px",borderRadius:999,fontSize:11.5,cursor:"pointer",background:t?"var(--brand)":"rgba(255,255,255,.88)",color:t?"#FFFFFF":"var(--text-secondary)",border:`1px solid ${t?"var(--brand)":"var(--border-default)"}`,backdropFilter:"blur(6px)",boxShadow:"var(--shadow-card)",whiteSpace:"nowrap"});function zv({task:t,route:e,height:n=420,selected:i,onSelect:r,initialLayers:s,showRoute:o=!1}){const a=$.useRef(null),l=$.useRef(null),c=$.useRef(null),[f,d]=$.useState("iso"),[h,p]=$.useState({cloud:!0,route:o,track:!0,boxes:!0,labels:!0,...s}),[v,y]=$.useState(!1),[g,u]=$.useState(!1),[_,x]=$.useState(null),[S,R]=$.useState(null),[b,A]=$.useState(!1);$.useEffect(()=>{const E=a.current,M=performance.now(),w=new Mh(E,{waypointCount:t.waypointTotal,altitudeM:(e==null?void 0:e.altitudeM)??5.2,sceneId:e==null?void 0:e.sceneId,labelNames:t.stacks.map(z=>z.name),onSelectPile:z=>{if(!r)return;if(z===null){r(null);return}const W=t.stacks.findIndex((X,G)=>Fv(t,G)===z);r(W>=0?W:null)},onDegrade:()=>A(!0),onUserOrbit:()=>d("iso")});c.current=w,w.setLayers(h),w.setPreset("iso"),w.setFlight(t.coveragePct/100,!1),requestAnimationFrame(()=>x(Math.round(performance.now()-M)));const I=new ResizeObserver(()=>w.resize());return l.current&&I.observe(l.current),()=>{I.disconnect(),w.dispose(),c.current=null}},[t.id]),$.useEffect(()=>{var E;(E=c.current)==null||E.setLayers(h)},[h]),$.useEffect(()=>{var E;(E=c.current)==null||E.selectPile(i==null?null:Fv(t,i))},[i,t]),$.useEffect(()=>{let E=0,M=0,w=performance.now();const I=z=>{M+=1,z-w>=1e3&&(R(Math.round(M*1e3/(z-w))),M=0,w=z),E=requestAnimationFrame(I)};return E=requestAnimationFrame(I),()=>cancelAnimationFrame(E)},[]),$.useEffect(()=>{if(!g)return;const E=M=>{M.key==="Escape"&&u(!1)};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[g]);const P=E=>{var M;d(E),(M=c.current)==null||M.setPreset(E)};return m.jsxs("div",{ref:l,className:g?"fixed inset-0 z-50":"relative",style:{height:g?"100vh":n,borderRadius:g?0:10,overflow:"hidden",background:"var(--canvas)",border:g?"none":"1px solid var(--card-stroke)"},children:[m.jsx("canvas",{ref:a,className:"w-full h-full block",style:{touchAction:"none"}}),m.jsxs("div",{className:"absolute flex items-center gap-1.5",style:{left:12,top:12},children:[["top","iso"].map(E=>m.jsx("button",{className:"mono pressable",style:Fd(f===E),onClick:()=>P(E),children:E==="top"?"顶视":"全景"},E)),m.jsx("button",{className:"flex items-center justify-center",style:{...Fd(v),width:28,padding:0},onClick:()=>y(E=>!E),"aria-label":"图层",children:m.jsx(VE,{size:14})}),v&&m.jsx("div",{className:"absolute flex flex-col gap-1",style:{left:0,top:32,width:120,padding:6,borderRadius:9,background:"var(--glass-bg)",border:"1px solid var(--border-strong)",boxShadow:"var(--shadow-popover)",zIndex:5},children:[["cloud","场景点云"],["route","规划航线"],["track","飞行轨迹"],["boxes","堆体包围框"],["labels","堆体标签"]].map(([E,M])=>m.jsx("button",{className:"w-full text-center",style:{padding:"6px 0",borderRadius:6,fontSize:11.5,background:h[E]?"var(--brand)":"var(--fill-quiet)",color:h[E]?"#FFFFFF":"var(--text-tertiary)",cursor:"pointer"},onClick:()=>p(w=>({...w,[E]:!w[E]})),children:M},E))})]}),m.jsx("button",{className:"absolute flex items-center justify-center",style:{...Fd(!1),width:28,padding:0,right:12,top:12},onClick:()=>u(E=>!E),"aria-label":g?"退出全屏":"全屏",children:g?m.jsx(XE,{size:13}):m.jsx(WE,{size:13})}),b&&m.jsx("div",{className:"absolute mono",style:{right:12,top:46,fontSize:10.5,padding:"3px 8px",borderRadius:5,background:"var(--warning-bg)",border:"1px solid var(--warning)",color:"var(--warning)"},children:"已降低渲染精度"}),m.jsx("div",{className:"absolute mono pointer-events-none",style:{left:12,bottom:10,fontSize:10.5,color:"var(--text-tertiary)"},children:"拖拽旋转 · 滚轮缩放 · 点击堆体查看明细"}),_!=null&&m.jsxs("div",{className:"absolute mono pointer-events-none",style:{right:12,bottom:10,fontSize:10,letterSpacing:".04em",color:"var(--text-tertiary)"},children:["加载 ",_<1e3?`${_}ms`:`${(_/1e3).toFixed(1)}s`," · ",S??"--"," FPS"]})]})}function oy({series:t,height:e=200,yUnit:n="",xFmt:i=f=>String(f),yFmt:r=f=>String(f),xTicks:s,yMin:o,yMax:a,markers:l,area:c}){const[f,d]=$.useState(null),h=1e3,p=e,v=46,y=16,g=14,u=28,_=t.flatMap(B=>B.points);if(_.length===0)return null;const x=_.map(B=>B.x),S=_.map(B=>B.y),R=Math.min(...x),b=Math.max(...x);let A=o??Math.min(...S),P=a??Math.max(...S);P===A&&(P+=1,A-=1);const E=(P-A)*.08;o===void 0&&(A-=E),a===void 0&&(P+=E);const M=B=>v+(B-R)/(b-R||1)*(h-v-y),w=B=>g+(1-(B-A)/(P-A))*(p-g-u),I=4,z=Array.from({length:I+1},(B,N)=>A+(P-A)*N/I),W=s??Array.from({length:6},(B,N)=>R+(b-R)*N/5),X=B=>{const N=B.currentTarget.getBoundingClientRect(),q=(B.clientX-N.left)/N.width*h,J=R+(q-v)/(h-v-y)*(b-R);if(q<v||q>h-y){d(null);return}d({x:J,px:q})},G=(B,N)=>B.points.reduce((q,J)=>Math.abs(J.x-N)<Math.abs(q.x-N)?J:q,B.points[0]);return m.jsxs("div",{className:"relative",children:[m.jsxs("svg",{viewBox:`0 0 ${h} ${p}`,width:"100%",height:p,preserveAspectRatio:"none",style:{display:"block"},onMouseMove:X,onMouseLeave:()=>d(null),children:[z.map(B=>m.jsxs("g",{children:[m.jsx("line",{x1:v,x2:h-y,y1:w(B),y2:w(B),stroke:"rgba(16,24,40,.07)"}),m.jsx("text",{x:v-8,y:w(B)+3.5,textAnchor:"end",fontSize:"10",fill:"#737E90",fontFamily:"ui-monospace, Menlo, monospace",children:r(B)})]},B)),W.map(B=>m.jsx("text",{x:M(B),y:p-8,textAnchor:"middle",fontSize:"10",fill:"#737E90",fontFamily:"ui-monospace, Menlo, monospace",children:i(B)},B)),l==null?void 0:l.map((B,N)=>m.jsxs("g",{children:[m.jsx("line",{x1:M(B.x),x2:M(B.x),y1:g,y2:p-u,stroke:B.tone==="warn"?"#D9453C":"#4C6BC0",strokeDasharray:"3 3",strokeWidth:"1"}),m.jsx("text",{x:M(B.x)+4,y:g+10,fontSize:"10",fill:B.tone==="warn"?"#D9453C":"#4C6BC0",children:B.label})]},N)),t.map(B=>{const N=B.points.map((re,ye)=>`${ye===0?"M":"L"}${M(re.x).toFixed(1)} ${w(re.y).toFixed(1)}`).join(" "),q=B.points[B.points.length-1],J=B.points[0];return m.jsxs("g",{children:[c&&m.jsx("path",{d:`${N} L${M(q.x)} ${p-u} L${M(J.x)} ${p-u} Z`,fill:B.color,opacity:".08"}),m.jsx("path",{d:N,fill:"none",stroke:B.color,strokeWidth:"1.8",vectorEffect:"non-scaling-stroke",strokeLinejoin:"round"}),B.points.length<=12&&B.points.map((re,ye)=>m.jsx("circle",{cx:M(re.x),cy:w(re.y),r:"3.2",fill:"#FFFFFF",stroke:B.color,strokeWidth:"1.6",vectorEffect:"non-scaling-stroke"},ye))]},B.name)}),f&&m.jsxs("g",{children:[m.jsx("line",{x1:f.px,x2:f.px,y1:g,y2:p-u,stroke:"rgba(16,24,40,.25)",strokeWidth:"1",vectorEffect:"non-scaling-stroke"}),t.map(B=>{const N=G(B,f.x);return m.jsx("circle",{cx:M(N.x),cy:w(N.y),r:"4",fill:B.color},B.name)})]})]}),f&&m.jsxs("div",{className:"absolute pointer-events-none mono",style:{left:`${f.px/h*100}%`,top:8,transform:f.px>h*.7?"translateX(calc(-100% - 10px))":"translateX(10px)",padding:"6px 9px",borderRadius:7,fontSize:11,background:"rgba(27,31,39,.92)",color:"#FFFFFF",whiteSpace:"nowrap"},children:[m.jsx("div",{style:{color:"rgba(255,255,255,.6)"},children:i(G(t[0],f.x).x)}),t.map(B=>{const N=G(B,f.x);return m.jsxs("div",{className:"flex items-center gap-1.5",children:[m.jsx("span",{style:{width:8,height:8,borderRadius:999,background:B.color,display:"inline-block"}}),B.name," ",N.label??`${r(N.y)}${n}`]},B.name)})]}),m.jsx("div",{className:"flex flex-wrap gap-x-4 gap-y-1 mt-1",style:{paddingLeft:46},children:t.map(B=>m.jsxs("span",{className:"inline-flex items-center gap-1.5",style:{fontSize:11,color:"var(--text-secondary)"},children:[m.jsx("span",{style:{width:10,height:2.5,borderRadius:2,background:B.color}}),B.name]},B.name))})]})}function jR({items:t,height:e=120}){const n=Math.max(1,...t.map(i=>Math.abs(i.value)));return m.jsx("div",{className:"flex items-end gap-2",style:{height:e},children:t.map(i=>{const r=Math.abs(i.value)/n*(e-34),s=i.value>=0;return m.jsxs("div",{className:"flex-1 flex flex-col items-center justify-end",style:{height:"100%"},children:[m.jsxs("span",{className:"mono",style:{fontSize:10.5,color:s?"var(--brand-subtle-text)":"var(--sig3d-ink)"},children:[s?"+":"",i.value.toFixed(1)]}),m.jsx("div",{style:{width:"60%",maxWidth:34,height:Math.max(3,r),borderRadius:4,background:s?"var(--brand)":"var(--sig3d)",opacity:.85,marginTop:3}}),m.jsx("span",{className:"mono mt-1",style:{fontSize:10,color:"var(--text-tertiary)"},children:i.label})]},i.label)})})}const kv=["#4C6BC0","#E8792B","#1FA971","#B97A17","#7C5CBF","#3D4B5C"],GR=[["overview","概览"],["model","三维成果"],["process","飞行过程"],["report","报告"],["files","附件下载"]],zd=.75,Ol={route_complete:"航线执行完成",user:"操作员手动返航",auto_timeout:"悬停超时自动返航",safety:"低电量安全返航",loc_lost:"定位丢失原地降落",rc_override:"遥控器接管"},WR={pcd:m.jsx(wp,{size:15}),json:m.jsx(Jl,{size:15}),pdf:m.jsx(Jl,{size:15}),mp4:m.jsx(YE,{size:15}),zip:m.jsx(M_,{size:15}),csv:m.jsx(Jl,{size:15})};function XR(t,e){const n=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=t,i.click(),URL.revokeObjectURL(i.href)}function $R(){const{id:t=""}=m1(),e=Mr(),[n,i]=Y1(),r=n.get("tab")||"overview",s=w=>i(w==="overview"?{}:{tab:w}),o=ut(w=>w.taskById(t)),a=ut(w=>w.syncOf(t)),l=ut(w=>w.enqueueDownload),c=ut(w=>w.showToast),f=ut(w=>w.set),[d,h]=$.useState(null),[p,v]=$.useState(new Set),y=o?ba.find(w=>w.id===o.routeId):void 0,g=$.useMemo(()=>o?FE(o,y):null,[o,y]);if(!o||!a||!g)return m.jsx(Ap,{icon:m.jsx(Kn,{size:22}),text:"该任务尚未同步",sub:`任务 ${t} 还没有同步到网页端。请在手机端复制该次巡检的同步码后同步。`,actionText:"同步数据",onAction:()=>f({syncModalOpen:!0})});const u=Dc.find(w=>w.id===(y==null?void 0:y.sceneId)),_=g,x=Mp(o),S=Ep(o),R=S?"货位":"堆体",b=$n(o),A=cr(o.id),P=new Set(a.missing),E=o.stacks.filter(w=>w.issue),M=w=>{l(o,w),(w==="all"?[]:w).filter(z=>["volume","inventory","events"].includes(z)).forEach(z=>{const W=x.find(X=>X.key===z);XR(W.name,z==="events"?_.events:z==="volume"?{taskId:o.id,totalVolumeM3:b,stacks:o.stacks}:{taskId:o.id,totalCount:la(o),stacks:o.stacks.map(X=>({id:X.id,name:X.name,tagType:X.tagType,tagCode:X.tagCode,layerCount:X.layerCount,perLayerCount:X.perLayerCount,totalCount:X.totalCount}))})}),c(w==="all"?"已开始下载完整数据包":`已开始下载 ${w.length} 个文件`)};return m.jsxs("div",{children:[m.jsxs("div",{className:"no-print flex items-start gap-4",children:[m.jsx("button",{className:"flex items-center justify-center pressable shrink-0",style:{width:34,height:34,borderRadius:9,border:"1px solid var(--border-default)",background:"var(--surface-1)",color:"var(--text-secondary)",cursor:"pointer",marginTop:2},onClick:()=>e("/tasks"),"aria-label":"返回任务库",children:m.jsx(jE,{size:15})}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsxs("div",{className:"flex items-center gap-2.5",children:[m.jsx("span",{style:{fontSize:20,fontWeight:600},children:o.routeName}),m.jsx(Tp,{task:o}),o.coveragePct<100&&m.jsxs(kf,{tone:"mid",children:["覆盖 ",o.coveragePct,"%"]}),!a.complete&&m.jsx(kf,{tone:"mid",children:"附件缺失"})]}),m.jsxs("div",{className:"flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 mono",style:{fontSize:12,color:"var(--text-tertiary)"},children:[m.jsx("span",{children:o.id}),m.jsx("span",{children:Ai(o.startedAt)}),m.jsxs("span",{className:"inline-flex items-center gap-1",children:[m.jsx($E,{size:11}),u==null?void 0:u.name]}),m.jsx("span",{children:Ic(o)}),m.jsx("span",{children:o.operator})]})]}),m.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[m.jsx(QE,{code:A}),m.jsx(vt,{variant:"secondary",icon:m.jsx(Jl,{size:13}),onClick:()=>s("report"),children:"报告"}),m.jsxs(vt,{icon:m.jsx(Pn,{size:13}),onClick:()=>M("all"),children:["下载数据包 · ",_n(jr(o))]})]})]}),m.jsx("div",{className:"no-print flex mt-5",style:{borderBottom:"1px solid var(--border-subtle)"},children:GR.map(([w,I])=>m.jsx("button",{className:`ptab ${r===w?"on":""}`,onClick:()=>s(w),children:I},w))}),r==="overview"&&m.jsxs("div",{className:"mt-5",children:[m.jsxs("div",{className:"grid",style:{gridTemplateColumns:"repeat(auto-fit, minmax(172px, 1fr))",gap:12},children:[m.jsx(qt,{label:S?"合计件数":"合计体积",value:S?la(o).toLocaleString():b.toFixed(1),unit:S?"件":"m³",sub:S?`${b.toFixed(1)} m³ · ${o.stacks.length} 个货位`:`折算 ${(b*zd).toFixed(1)} t · ${o.stacks.length} 个堆体`}),m.jsx(qt,{label:"覆盖度",value:o.coveragePct,unit:"%",sub:`完成航点 ${o.waypointDone}/${o.waypointTotal}`,tone:o.coveragePct<100?"warning":void 0}),m.jsx(qt,{label:"飞行时长",value:Ju(o.durationSec),sub:`轨迹 ${o.trackLengthM.toFixed(0)} m · 均速 ${o.avgSpeedMs} m/s`}),m.jsx(qt,{label:"处理状态",value:"完成",sub:`处理耗时 ${o.volumeCalcSec}s · 数据包 ${_n(jr(o))}`})]}),m.jsxs("div",{className:"grid mt-4",style:{gridTemplateColumns:"minmax(0, 1.6fr) minmax(320px, 1fr)",gap:16},children:[m.jsxs("div",{children:[m.jsx(zv,{task:o,route:y,height:380,selected:d,onSelect:h}),m.jsxs("div",{className:"mt-1.5 flex items-center justify-between",style:{fontSize:11.5,color:"var(--text-tertiary)"},children:[m.jsxs("span",{children:["稀疏点云（",_n(x[0].sizeMb),"）在线预览；完整点云见附件"]}),m.jsx("button",{className:"pressable",style:{color:"var(--text-link)",cursor:"pointer"},onClick:()=>s("model"),children:"放大查看"})]})]}),m.jsx("div",{className:"flex flex-col gap-4",children:m.jsx(Gr,{title:"同步信息",children:m.jsx(Pt,{pad:0,style:{overflow:"hidden"},children:[["同步码",m.jsx("span",{className:"mono",children:A})],["来源设备",m.jsx("span",{className:"mono",children:a.deviceId})],["同步时间",m.jsx("span",{className:"mono",children:Ai(a.syncedAt)})],["数据包",m.jsxs("span",{className:"mono",children:[_n(a.sizeMb)," · ",x.length," 个附件"]})],["完整性",a.complete?m.jsxs("span",{className:"inline-flex items-center gap-1",style:{color:"var(--success)"},children:[m.jsx(ur,{size:12}),"校验通过"]}):m.jsxs("span",{className:"inline-flex items-center gap-1",style:{color:"var(--warning)"},children:[m.jsx(Kn,{size:12}),"缺 ",a.missing.length," 项"]})]].map(([w,I],z)=>m.jsxs("div",{className:"flex items-center gap-3",style:{padding:"8px 14px",borderTop:z>0?"1px solid var(--border-subtle)":"none",fontSize:12},children:[m.jsx("span",{style:{width:64,color:"var(--text-tertiary)"},children:w}),m.jsx("span",{className:"flex-1 min-w-0",children:I})]},z))})})})]})]}),r==="model"&&m.jsxs("div",{className:"grid mt-5",style:{gridTemplateColumns:"minmax(0, 1fr) 300px",gap:16},children:[m.jsx(zv,{task:o,route:y,height:620,selected:d,onSelect:h,showRoute:!0}),m.jsxs("div",{className:"flex flex-col gap-3",children:[m.jsxs(Pt,{pad:0,style:{overflow:"hidden"},children:[m.jsxs("div",{style:{padding:"10px 14px",fontSize:12.5,fontWeight:500,borderBottom:"1px solid var(--border-subtle)"},children:[R," · 点击定位"]}),o.stacks.map((w,I)=>m.jsxs("button",{className:"w-full text-left",style:{padding:"10px 14px",borderTop:I>0?"1px solid var(--border-subtle)":"none",background:d===I?"var(--brand-subtle-bg)":"transparent",cursor:"pointer"},onClick:()=>h(d===I?null:I),children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{style:{fontSize:13,fontWeight:500},children:w.name}),m.jsxs("span",{className:"mono",style:{fontSize:13},children:[w.volumeM3.toFixed(1)," m³"]})]}),m.jsxs("div",{className:"mt-1",style:{fontSize:11,color:w.issue?"var(--warning)":"var(--text-tertiary)"},children:[w.position," · 覆盖 ",w.surfaceCoverPct,"%",w.issue?` · ${ed[w.issue]}`:""]})]},w.id))]}),m.jsxs(Pt,{pad:14,children:[m.jsx("div",{className:"dlabel",children:"数据质量"}),[["轨迹完整度",`${o.trackCompletePct}%`],["稀疏点云",_n(x[0].sizeMb)],["完整点云",_n(o.cloudSizeMb)]].map(([w,I])=>m.jsxs("div",{className:"flex justify-between mt-2",style:{fontSize:12},children:[m.jsx("span",{style:{color:"var(--text-tertiary)"},children:w}),m.jsx("span",{className:"mono",children:I})]},w))]}),m.jsx(vt,{variant:"secondary",icon:m.jsx(Pn,{size:13}),onClick:()=>M(["model"]),children:"下载点云 PCD"})]})]}),r==="process"&&m.jsxs("div",{className:"mt-5",children:[m.jsxs("div",{className:"grid",style:{gridTemplateColumns:"repeat(5, 1fr)",gap:12},children:[m.jsx(qt,{label:"起飞",value:us(o.startedAt),sub:`现场确认 ${us(o.siteAckAt)}`}),m.jsx(qt,{label:"降落",value:us(o.landedAt),sub:`时长 ${Ju(o.durationSec)}`}),m.jsx(qt,{label:"航点",value:`${o.waypointDone}/${o.waypointTotal}`,sub:`拍照点 ${_.waypoints.filter(w=>w.photo).length} 个`,tone:o.waypointDone<o.waypointTotal?"warning":void 0}),m.jsx(qt,{label:"返航触发",value:Ol[o.returnTrigger],sub:o.returnTrigger==="route_complete"?"沿原航线返航":"任务提前结束",tone:o.returnTrigger!=="route_complete"?"warning":void 0}),m.jsx(qt,{label:"电量消耗",value:`${(_.telemetry[0].battery-_.telemetry[_.telemetry.length-1].battery).toFixed(0)}`,unit:"%",sub:`${_.telemetry[0].battery.toFixed(0)}% → ${_.telemetry[_.telemetry.length-1].battery.toFixed(0)}%`})]}),m.jsx("div",{className:"grid mt-4",style:{gridTemplateColumns:"repeat(3, 1fr)",gap:12},children:[{name:"电量",unit:"%",key:"battery",color:"#4C6BC0",min:0,max:100},{name:"速度",unit:" m/s",key:"speed",color:"#E8792B",min:0,max:void 0},{name:"高度",unit:" m",key:"alt",color:"#1FA971",min:0,max:void 0}].map(w=>m.jsxs(Pt,{pad:14,children:[m.jsx("div",{style:{fontSize:12.5,fontWeight:500},children:w.name}),m.jsx("div",{className:"mt-2",children:m.jsx(oy,{series:[{name:w.name,color:w.color,points:_.telemetry.map(I=>({x:I.t,y:I[w.key]}))}],height:170,yUnit:w.unit,yMin:w.min,yMax:w.max,area:!0,xFmt:I=>`${Math.floor(I/60)}:${String(Math.round(I%60)).padStart(2,"0")}`,yFmt:I=>w.key==="battery"?I.toFixed(0):I.toFixed(1),markers:_.events.filter(I=>I.type==="hover_obstacle"||I.type==="return_start").map(I=>{const[z,W,X]=I.time.split(":").map(Number),[G,B,N]=us(o.startedAt).split(":").map(Number);return{x:z*3600+W*60+X-(G*3600+B*60+N),label:I.type==="hover_obstacle"?"停障":"返航",tone:I.type==="hover_obstacle"?"warn":"info"}})})})]},w.key))}),m.jsxs("div",{className:"grid mt-4",style:{gridTemplateColumns:"minmax(0, 1fr) minmax(0, 1fr) 280px",gap:16},children:[m.jsx(Gr,{title:"航点时间线",children:m.jsx(Pt,{pad:0,style:{overflow:"hidden",maxHeight:420,overflowY:"auto"},children:m.jsxs("table",{className:"dtable",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"航点"}),m.jsx("th",{children:"到达"}),m.jsx("th",{children:"拍照"}),m.jsx("th",{style:{textAlign:"right"},children:"悬停"})]})}),m.jsxs("tbody",{children:[_.waypoints.map(w=>m.jsxs("tr",{children:[m.jsx("td",{className:"mono",children:w.idx}),m.jsx("td",{className:"mono",children:w.time}),m.jsx("td",{children:w.photo?m.jsxs("span",{className:"inline-flex items-center gap-1",style:{color:"var(--brand-subtle-text)",fontSize:11.5},children:[m.jsx(M_,{size:12}),"拍照"]}):m.jsx("span",{style:{color:"var(--text-placeholder)",fontSize:11.5},children:"—"})}),m.jsx("td",{className:"mono",style:{textAlign:"right"},children:w.dwellS?`${w.dwellS}s`:"—"})]},w.idx)),o.waypointDone<o.waypointTotal&&m.jsx("tr",{children:m.jsxs("td",{colSpan:4,style:{color:"var(--warning)",fontSize:11.5},children:["航点 ",o.waypointDone+1,"–",o.waypointTotal," 未执行（",Ol[o.returnTrigger],"）"]})})]})]})})}),m.jsx(Gr,{title:"飞行事件",children:m.jsx(Pt,{pad:0,style:{overflow:"hidden",maxHeight:420,overflowY:"auto"},children:_.events.map((w,I)=>{const z=w.type==="hover_obstacle"||w.type==="hover_loc"||w.type==="fault"||w.type==="return_start"&&o.returnTrigger!=="route_complete";return m.jsxs("div",{className:"flex items-start gap-3",style:{padding:"8px 14px",borderTop:I>0?"1px solid var(--border-subtle)":"none"},children:[m.jsx("span",{className:"mono shrink-0",style:{fontSize:11.5,color:"var(--text-tertiary)",width:58},children:w.time}),m.jsx("span",{className:"rounded-full shrink-0",style:{width:6,height:6,marginTop:6,background:z?"var(--warning)":w.type==="takeoff"||w.type==="landed"?"var(--brand)":"var(--border-strong)"}}),m.jsx("span",{style:{fontSize:12.5,color:z?"var(--warning)":"var(--text-primary)"},children:w.label})]},I)})})}),m.jsxs(Gr,{title:"机载数据处理",children:[m.jsxs(Pt,{pad:0,style:{overflow:"hidden"},children:[_.stages.map((w,I)=>m.jsxs("div",{className:"flex items-center gap-3",style:{padding:"9px 14px",borderTop:I>0?"1px solid var(--border-subtle)":"none"},children:[m.jsx("span",{style:{color:"var(--success)",display:"inline-flex"},children:m.jsx(ur,{size:13})}),m.jsx("span",{className:"flex-1",style:{fontSize:12.5},children:w.name}),m.jsxs("span",{className:"mono",style:{fontSize:11.5,color:"var(--text-tertiary)"},children:[w.sec,"s"]})]},w.name)),m.jsxs("div",{style:{padding:"9px 14px",borderTop:"1px solid var(--border-subtle)",fontSize:11.5,color:"var(--text-tertiary)"},children:["合计 ",o.volumeCalcSec,"s · 处理结果状态：成功"]})]}),m.jsxs("div",{className:"mt-3 flex gap-2",children:[m.jsx(vt,{small:!0,variant:"secondary",icon:m.jsx(Pn,{size:12}),onClick:()=>M(["telemetry"]),children:"遥测 CSV"}),m.jsx(vt,{small:!0,variant:"secondary",icon:m.jsx(Pn,{size:12}),onClick:()=>M(["events"]),children:"事件 JSON"})]})]})]})]}),r==="overview"&&m.jsxs("div",{className:"mt-6",children:[m.jsxs("div",{className:"dlabel mb-2.5",style:{fontSize:11},children:[R,"明细"]}),E.length>0&&m.jsxs("div",{className:"flex items-center gap-2 mb-3",style:{padding:"10px 14px",borderRadius:10,background:"var(--warning-bg)",color:"var(--warning)",fontSize:12.5},children:[m.jsx(Kn,{size:14}),E.length," 个",R,"存在异常标注，相关体积结果建议复核后再用于账务。"]}),m.jsx(Pt,{pad:0,style:{overflow:"hidden"},children:m.jsxs("table",{className:"dtable",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:R}),m.jsx("th",{children:"位置"}),m.jsx("th",{children:"类型"}),m.jsx("th",{style:{textAlign:"right"},children:"体积 m³"}),S&&m.jsxs(m.Fragment,{children:[m.jsx("th",{style:{textAlign:"right"},children:"分层"}),m.jsx("th",{style:{textAlign:"right"},children:"件数"}),m.jsx("th",{children:"标签识别"})]}),m.jsx("th",{style:{textAlign:"right"},children:"表面覆盖"}),m.jsx("th",{children:"异常"})]})}),m.jsx("tbody",{children:o.stacks.map((w,I)=>{var z;return m.jsxs("tr",{className:`row-link ${d===I?"row-on":""}`,onClick:()=>h(d===I?null:I),children:[m.jsx("td",{style:{fontWeight:500},children:w.name}),m.jsx("td",{children:w.position}),m.jsx("td",{children:w.cargoType==="bulk"?"散料堆体":"规则码垛"}),m.jsx("td",{className:"mono",style:{textAlign:"right"},children:w.volumeM3.toFixed(1)}),S&&m.jsxs(m.Fragment,{children:[m.jsxs("td",{className:"mono",style:{textAlign:"right"},children:[w.layerCount," × ",w.perLayerCount]}),m.jsx("td",{className:"mono",style:{textAlign:"right",fontWeight:500},children:(z=w.totalCount)==null?void 0:z.toLocaleString()}),m.jsx("td",{children:w.tagType?w.tagCode?m.jsxs("span",{className:"mono",style:{fontSize:11.5},children:[Qu[w.tagType]," ",w.tagCode]}):m.jsxs("span",{style:{fontSize:11.5,color:"var(--warning)"},children:[Qu[w.tagType],"标签未识别"]}):"—"})]}),m.jsxs("td",{className:"mono",style:{textAlign:"right"},children:[w.surfaceCoverPct,"%"]}),m.jsx("td",{children:w.issue?m.jsxs("span",{className:"inline-flex items-center gap-1",style:{fontSize:11.5,color:"var(--warning)"},children:[m.jsx(Kn,{size:12}),ed[w.issue]]}):m.jsx("span",{style:{color:"var(--text-placeholder)",fontSize:11.5},children:"无"})})]},w.id)})})]})}),m.jsxs("div",{className:"mt-3 flex gap-2",children:[m.jsx(vt,{small:!0,variant:"secondary",icon:m.jsx(Pn,{size:12}),onClick:()=>M(["volume"]),children:"体积结果 JSON"}),S&&m.jsx(vt,{small:!0,variant:"secondary",icon:m.jsx(Pn,{size:12}),onClick:()=>M(["inventory"]),children:"盘点汇总 JSON"})]})]}),r==="report"&&m.jsxs("div",{className:"mt-5",children:[m.jsxs("div",{className:"no-print flex items-center justify-between mb-3",children:[m.jsx("span",{style:{fontSize:12.5,color:"var(--text-tertiary)"},children:"报告内容与手机端生成的 PDF 一致；打印时仅输出报告纸面"}),m.jsxs("div",{className:"flex gap-2",children:[m.jsx(vt,{variant:"secondary",icon:m.jsx(GE,{size:13}),onClick:()=>window.print(),children:"打印"}),m.jsx(vt,{icon:m.jsx(Pn,{size:13}),onClick:()=>{M(["report"]),window.print()},children:"下载 PDF"})]})]}),m.jsxs("div",{className:"print-sheet",style:{width:794,margin:"0 auto",background:"#FFFFFF",border:"1px solid var(--border-default)",boxShadow:"var(--shadow-card)",padding:"56px 64px",color:"#1B1F27"},children:[m.jsxs("div",{className:"flex items-start justify-between",children:[m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:22,fontWeight:600,letterSpacing:".04em"},children:"仓储无人机巡检报告"}),m.jsxs("div",{className:"mono mt-1",style:{fontSize:11.5,color:"#737E90"},children:[o.id," · 同步码 ",A]})]}),m.jsxs("div",{className:"text-right",style:{fontSize:11,color:"#737E90"},children:[m.jsxs("div",{children:["报告生成 ",Ai(a.syncedAt)]}),m.jsxs("div",{children:["来源设备 ",Ic(o)]})]})]}),m.jsx("div",{style:{borderTop:"1.5px solid #1B1F27",margin:"18px 0 14px"}}),m.jsx("div",{className:"grid",style:{gridTemplateColumns:"repeat(2, 1fr)",columnGap:32,rowGap:6},children:[["巡检时间",Ai(o.startedAt)],["场景 / 航线",`${u==null?void 0:u.name} · ${o.routeName}`],["任务状态",__[o.status]],["操作员",o.operator],["覆盖度",`${o.coveragePct}%（航点 ${o.waypointDone}/${o.waypointTotal}）`],["飞行时长",Ju(o.durationSec)],["处理状态","机载处理完成"],["返航触发",Ol[o.returnTrigger]]].map(([w,I])=>m.jsxs("div",{className:"flex justify-between",style:{fontSize:12,padding:"3px 0",borderBottom:"1px solid rgba(16,24,40,.07)"},children:[m.jsx("span",{style:{color:"#737E90"},children:w}),m.jsx("span",{className:"mono",children:I})]},w))}),m.jsx("div",{className:"mt-7",style:{fontSize:13.5,fontWeight:600},children:"一、测算合计"}),m.jsxs("div",{className:"flex items-baseline gap-2 mt-2",children:[m.jsx("span",{className:"mono",style:{fontSize:36,lineHeight:1},children:S?la(o).toLocaleString():b.toFixed(1)}),m.jsx("span",{className:"mono",style:{fontSize:13,color:"#5A6272"},children:S?"件":"m³"}),m.jsxs("span",{className:"mono ml-4",style:{fontSize:13,color:"#5A6272"},children:[S?`体积 ${b.toFixed(1)} m³`:`按容重 ${zd} t/m³ 折算 ${(b*zd).toFixed(1)} t`," · ",o.stacks.length," 个",R]})]}),m.jsxs("div",{className:"mt-6",style:{fontSize:13.5,fontWeight:600},children:["二、",R,"明细"]}),m.jsxs("table",{className:"mt-2",style:{width:"100%",borderCollapse:"collapse",fontSize:11.5},children:[m.jsx("thead",{children:m.jsx("tr",{style:{borderBottom:"1px solid #1B1F27"},children:[R,"位置","体积 m³",S?"件数":"覆盖",...S?["标签"]:[],"异常"].map(w=>m.jsx("th",{style:{textAlign:"left",padding:"5px 4px",fontWeight:500},children:w},w))})}),m.jsx("tbody",{children:o.stacks.map(w=>{var I;return m.jsxs("tr",{style:{borderBottom:"1px solid rgba(16,24,40,.09)"},children:[m.jsx("td",{style:{padding:"6px 4px"},children:w.name}),m.jsx("td",{style:{padding:"6px 4px"},children:w.position}),m.jsx("td",{className:"mono",style:{padding:"6px 4px"},children:w.volumeM3.toFixed(1)}),m.jsx("td",{className:"mono",style:{padding:"6px 4px"},children:S?`${(I=w.totalCount)==null?void 0:I.toLocaleString()}（${w.layerCount}×${w.perLayerCount}）`:`${w.surfaceCoverPct}%`}),S&&m.jsx("td",{className:"mono",style:{padding:"6px 4px",color:w.tagCode?void 0:"#B97A17"},children:w.tagCode?`${Qu[w.tagType]} ${w.tagCode}`:"未识别"}),m.jsx("td",{style:{padding:"6px 4px",color:w.issue?"#B97A17":"#5A6272"},children:w.issue?ed[w.issue]:"无"})]},w.id)})})]}),m.jsx("div",{className:"mt-6",style:{fontSize:13.5,fontWeight:600},children:"三、飞行过程摘要"}),m.jsxs("div",{className:"mt-2 leading-[1.8]",style:{fontSize:12,color:"#5A6272"},children:[us(o.startedAt)," 起飞，航线高度 ",y==null?void 0:y.altitudeM.toFixed(1)," m，完成 ",o.waypointDone," 个航点，其中拍照点 ",_.waypoints.filter(w=>w.photo).length," 个；",_.events.some(w=>w.type==="hover_obstacle")?"途中检测到障碍物悬停 18 秒后自动恢复；":"全程无停障；",Ol[o.returnTrigger],"，",us(o.landedAt)," 降落。电量 ",_.telemetry[0].battery.toFixed(0),"% → ",_.telemetry[_.telemetry.length-1].battery.toFixed(0),"%。"]}),m.jsx("div",{className:"mt-6",style:{fontSize:13.5,fontWeight:600},children:"四、附件清单"}),m.jsx("div",{className:"mt-2",children:x.map(w=>m.jsxs("div",{className:"flex justify-between",style:{fontSize:11.5,padding:"3px 0",borderBottom:"1px solid rgba(16,24,40,.07)"},children:[m.jsxs("span",{style:{color:"#5A6272"},children:[w.desc.split("，")[0].split("：")[0],w.count?`（${w.count} 张）`:""]}),m.jsxs("span",{className:"mono",children:[w.name," · ",_n(w.sizeMb),P.has(w.name)?" · 缺失":""]})]},w.key))}),m.jsxs("div",{className:"mono mt-8 pt-3 flex justify-between",style:{borderTop:"1px solid rgba(16,24,40,.12)",fontSize:10,color:"#B0B7C3"},children:[m.jsxs("span",{children:["完整数据包约 ",_n(jr(o))," · 由机载端生成，经同步码同步到网页端"]}),m.jsx("span",{children:"仓储无人机巡检 · 数据中心"})]})]})]}),r==="files"&&m.jsxs("div",{className:"mt-5",children:[m.jsxs(Pt,{pad:0,style:{overflow:"hidden"},children:[m.jsxs("div",{className:"flex items-center gap-3",style:{padding:"10px 14px",borderBottom:"1px solid var(--border-subtle)",background:"var(--surface-3)"},children:[m.jsx(Fc,{on:p.size===x.length,indeterminate:p.size>0&&p.size<x.length,onChange:w=>v(w?new Set(x.filter(I=>!P.has(I.name)).map(I=>I.key)):new Set)}),m.jsx("span",{style:{fontSize:12.5},children:p.size?`已选 ${p.size} 个文件`:`${x.length} 个附件 · 合计 ${_n(jr(o))}`}),m.jsxs("div",{className:"ml-auto flex gap-2",children:[m.jsx(vt,{small:!0,variant:"secondary",disabled:p.size===0,icon:m.jsx(Pn,{size:12}),onClick:()=>{M([...p]),v(new Set)},children:"下载所选"}),m.jsx(vt,{small:!0,icon:m.jsx(Pn,{size:12}),onClick:()=>M("all"),children:"打包下载全部"})]})]}),m.jsxs("table",{className:"dtable",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{style:{width:36}}),m.jsx("th",{children:"文件"}),m.jsx("th",{children:"说明"}),m.jsx("th",{style:{textAlign:"right"},children:"大小"}),m.jsx("th",{children:"MD5"}),m.jsx("th",{children:"状态"}),m.jsx("th",{style:{width:100}})]})}),m.jsx("tbody",{children:x.map(w=>{const I=P.has(w.name),z=p.has(w.key);return m.jsxs("tr",{className:z?"row-on":"",style:{opacity:I?.6:1},children:[m.jsx("td",{children:!I&&m.jsx(Fc,{on:z,onChange:W=>v(X=>{const G=new Set(X);return W?G.add(w.key):G.delete(w.key),G})})}),m.jsx("td",{children:m.jsxs("span",{className:"inline-flex items-center gap-2",children:[m.jsx("span",{style:{color:"var(--text-tertiary)",display:"inline-flex"},children:WR[w.kind]}),m.jsx("span",{className:"mono",children:w.name}),m.jsx(qE,{children:w.kind.toUpperCase()})]})}),m.jsxs("td",{style:{color:"var(--text-secondary)"},children:[w.desc,w.count?`（${w.count} 张）`:""]}),m.jsx("td",{className:"mono",style:{textAlign:"right"},children:_n(w.sizeMb)}),m.jsxs("td",{className:"mono",style:{fontSize:11,color:"var(--text-tertiary)"},children:[w.md5.slice(0,12),"…"]}),m.jsx("td",{children:I?m.jsxs("span",{className:"inline-flex items-center gap-1",style:{fontSize:11.5,color:"var(--warning)"},children:[m.jsx(Kn,{size:12}),"缺失"]}):m.jsxs("span",{className:"inline-flex items-center gap-1",style:{fontSize:11.5,color:"var(--success)"},children:[m.jsx(ur,{size:12}),"校验通过"]})}),m.jsx("td",{style:{textAlign:"right"},children:!I&&m.jsx(vt,{small:!0,variant:"secondary",icon:m.jsx(Pn,{size:12}),onClick:()=>M([w.key]),children:"下载"})})]},w.key)})})]})]}),!a.complete&&m.jsxs("div",{className:"mt-3 flex items-center gap-2",style:{padding:"10px 14px",borderRadius:10,background:"var(--warning-bg)",color:"var(--warning)",fontSize:12.5},children:[m.jsx(Kn,{size:14}),"缺失 ",a.missing.join("、"),"。请在手机端该任务的「结果报告」中重新生成同步码再同步一次，系统会补传缺失附件。"]}),m.jsxs("div",{className:"mt-3",style:{fontSize:11.5,color:"var(--text-tertiary)"},children:["点位图片共 ",x_(o)," 张；PCD 可在 CloudCompare、MeshLab 等工具中打开；JSON 结构见设置页数据接口说明。"]})]})]})}function YR(){var x;const t=Mr(),e=ut(S=>S.libraryTasks()),n=.75,i=$.useMemo(()=>{const S=new Map;return e.filter(R=>R.status==="success").forEach(R=>S.set(R.routeId,[...S.get(R.routeId)??[],R])),[...S.entries()].filter(([,R])=>R.length>=2).map(([R,b])=>({routeId:R,list:b.sort((A,P)=>A.startedAt.localeCompare(P.startedAt))})).sort((R,b)=>b.list.length-R.list.length)},[e]),[r,s]=$.useState(((x=i[0])==null?void 0:x.routeId)??""),o=i.find(S=>S.routeId===r)??i[0];if(!o)return m.jsx(Ap,{icon:m.jsx(S_,{size:22}),text:"暂无可比对的航线",sub:"同一航线接入 2 次以上完成的巡检后，这里会展示体积变化趋势"});const a=ba.find(S=>S.id===o.routeId),l=Dc.find(S=>S.id===(a==null?void 0:a.sceneId)),c=o.list,f=Ep(c[0]),d=[...new Set(c.flatMap(S=>S.stacks.map(R=>R.id)))],h=S=>new Date(S.startedAt).getTime(),p=[{name:"合计",color:"#1B1F27",points:c.map(S=>({x:h(S),y:$n(S)}))},...d.map((S,R)=>{var b;return{name:((b=c[0].stacks.find(A=>A.id===S))==null?void 0:b.name)??S,color:kv[R%kv.length],points:c.filter(A=>A.stacks.some(P=>P.id===S)).map(A=>({x:h(A),y:A.stacks.find(P=>P.id===S).volumeM3}))}})],v=$n(c[0]),y=$n(c[c.length-1]),g=Math.round((y-v)*10)/10,u=c.slice(1).map((S,R)=>({label:Ar(S.startedAt).slice(5),value:Math.round(($n(S)-$n(c[R]))*10)/10})),_=c.slice(1).map((S,R)=>{const b=c[R];return S.stacks.map(A=>{const P=b.stacks.find(M=>M.id===A.id);if(!P)return null;const E=(A.volumeM3-P.volumeM3)/P.volumeM3*100;return Math.abs(E)>=12?{task:S,stack:A,pct:E}:null}).filter(Boolean)}).flat();return m.jsxs("div",{children:[m.jsxs("div",{className:"flex flex-wrap items-center gap-1.5",children:[m.jsx("span",{className:"dlabel mr-1",style:{fontSize:10.5},children:"航线"}),i.map(S=>{const R=ba.find(b=>b.id===S.routeId);return m.jsxs("button",{className:`chip ${S.routeId===o.routeId?"on":""}`,onClick:()=>s(S.routeId),children:[(R==null?void 0:R.name)??S.routeId," · ",S.list.length," 次"]},S.routeId)})]}),m.jsxs("div",{className:"grid mt-4",style:{gridTemplateColumns:"repeat(4, 1fr)",gap:12},children:[m.jsx(qt,{label:"当前库存（最近一次）",value:y.toFixed(1),unit:"m³",sub:f?`${la(c[c.length-1]).toLocaleString()} 件`:`折算 ${(y*n).toFixed(1)} t（容重 ${n}）`}),m.jsx(qt,{label:`较首次（${Ar(c[0].startedAt).slice(5)}）`,value:`${g>=0?"+":""}${g.toFixed(1)}`,unit:"m³",sub:`${(g/v*100).toFixed(1)}%`,tone:Math.abs(g/v)>.1?"warning":void 0}),m.jsx(qt,{label:"巡检次数",value:c.length,unit:"次",sub:`${Ar(c[0].startedAt)} 至 ${Ar(c[c.length-1].startedAt)}`}),m.jsx(qt,{label:"异常变化",value:_.length,unit:"项",sub:"相邻两次单堆体变化 ≥ 12%",tone:_.length?"warning":void 0})]}),m.jsxs("div",{className:"grid mt-4",style:{gridTemplateColumns:"minmax(0, 2fr) minmax(280px, 1fr)",gap:16},children:[m.jsxs(Pt,{children:[m.jsx("div",{className:"flex items-center justify-between",children:m.jsxs("div",{children:[m.jsx("div",{style:{fontSize:14,fontWeight:600},children:a==null?void 0:a.name}),m.jsxs("div",{style:{fontSize:11.5,color:"var(--text-tertiary)"},children:[l==null?void 0:l.name," · 各",f?"货位":"堆体","体积随巡检时间变化（m³）"]})]})}),m.jsx("div",{className:"mt-3",children:m.jsx(oy,{series:p,height:260,yUnit:" m³",xFmt:S=>Ar(new Date(S).toISOString()).slice(5),yFmt:S=>S.toFixed(0),xTicks:c.map(h)})})]}),m.jsxs(Pt,{children:[m.jsx("div",{style:{fontSize:14,fontWeight:600},children:"相邻两次差值"}),m.jsx("div",{style:{fontSize:11.5,color:"var(--text-tertiary)"},children:"正值为入库，负值为出库（m³）"}),m.jsx("div",{className:"mt-4",children:m.jsx(jR,{items:u,height:150})}),m.jsx("div",{className:"mt-4 leading-[1.6]",style:{fontSize:11.5,color:"var(--text-tertiary)",borderTop:"1px solid var(--border-subtle)",paddingTop:10},children:"体积差值包含测算误差，幅度较小的变化不宜直接作为出入库依据，必要时安排补扫复核。"})]})]}),_.length>0&&m.jsx(Gr,{title:"异常变化",style:{marginTop:20},children:m.jsx(Pt,{pad:0,style:{overflow:"hidden"},children:_.map((S,R)=>m.jsxs("button",{className:"w-full flex items-center gap-3 text-left pressable",style:{padding:"11px 16px",borderTop:R>0?"1px solid var(--border-subtle)":"none",cursor:"pointer"},onClick:()=>t(`/tasks/${S.task.id}`),children:[m.jsx("span",{style:{color:"var(--warning)",display:"inline-flex"},children:m.jsx(Kn,{size:14})}),m.jsx("span",{style:{fontSize:13,fontWeight:500},children:S.stack.name}),m.jsxs("span",{className:"mono",style:{fontSize:12,color:S.pct>0?"var(--brand-subtle-text)":"var(--sig3d-ink)"},children:[S.pct>0?"+":"",S.pct.toFixed(1),"%"]}),m.jsxs("span",{className:"flex-1",style:{fontSize:12,color:"var(--text-secondary)"},children:[Ar(S.task.startedAt)," 较上次",S.pct>0?"增加":"减少","，超出误差带，建议核对出入库记录或安排补扫复核"]})]},R))})}),m.jsx(Gr,{title:"巡检记录",style:{marginTop:20},children:m.jsx(Pt,{pad:0,style:{overflow:"hidden"},children:m.jsxs("table",{className:"dtable",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"巡检时间"}),m.jsx("th",{children:"任务"}),m.jsx("th",{children:"状态"}),d.map(S=>{var R;return m.jsx("th",{style:{textAlign:"right"},children:((R=c[0].stacks.find(b=>b.id===S))==null?void 0:R.name)??S},S)}),m.jsx("th",{style:{textAlign:"right"},children:"合计 m³"}),m.jsx("th",{style:{textAlign:"right"},children:"较上次"})]})}),m.jsx("tbody",{children:c.map((S,R)=>{const b=R===0?null:Math.round(($n(S)-$n(c[R-1]))*10)/10;return m.jsxs("tr",{className:"row-link",onClick:()=>t(`/tasks/${S.id}`),children:[m.jsx("td",{className:"mono",children:Ar(S.startedAt)}),m.jsx("td",{className:"mono",style:{fontSize:11.5},children:S.id}),m.jsx("td",{children:m.jsx(Tp,{task:S})}),d.map(A=>{const P=S.stacks.find(E=>E.id===A);return m.jsx("td",{className:"mono",style:{textAlign:"right"},children:P?P.volumeM3.toFixed(1):"—"},A)}),m.jsx("td",{className:"mono",style:{textAlign:"right",fontWeight:500},children:$n(S).toFixed(1)}),m.jsx("td",{className:"mono",style:{textAlign:"right",color:b===null?"var(--text-placeholder)":b>=0?"var(--brand-subtle-text)":"var(--sig3d-ink)"},children:b===null?"—":`${b>=0?"+":""}${b.toFixed(1)}`})]},S.id)})})]})})})]})}function qR(){return m.jsx(N1,{children:m.jsxs(Wi,{element:m.jsx(sw,{}),children:[m.jsx(Wi,{index:!0,element:m.jsx(hg,{to:"/tasks",replace:!0})}),m.jsx(Wi,{path:"sync",element:m.jsx(ow,{})}),m.jsx(Wi,{path:"tasks",element:m.jsx(aw,{})}),m.jsx(Wi,{path:"tasks/:id",element:m.jsx($R,{})}),m.jsx(Wi,{path:"analysis",element:m.jsx(YR,{})}),m.jsx(Wi,{path:"*",element:m.jsx(hg,{to:"/tasks",replace:!0})})]})})}kd.createRoot(document.getElementById("root")).render(m.jsx(Ch.StrictMode,{children:m.jsx(V1,{children:m.jsx(qR,{})})}));
