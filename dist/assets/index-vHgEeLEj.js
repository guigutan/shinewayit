var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n)),l=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error('Calling `require` for "'+e+"\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.")});(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function u(e){let t=Object.create(null);for(let n of e.split(`,`))t[n]=1;return e=>e in t}var d={},f=[],p=()=>{},m=()=>!1,h=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),g=e=>e.startsWith(`onUpdate:`),_=Object.assign,v=(e,t)=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)},y=Object.prototype.hasOwnProperty,b=(e,t)=>y.call(e,t),x=Array.isArray,S=e=>ne(e)===`[object Map]`,C=e=>ne(e)===`[object Set]`,w=e=>ne(e)===`[object Date]`,T=e=>typeof e==`function`,E=e=>typeof e==`string`,D=e=>typeof e==`symbol`,O=e=>typeof e==`object`&&!!e,ee=e=>(O(e)||T(e))&&T(e.then)&&T(e.catch),te=Object.prototype.toString,ne=e=>te.call(e),re=e=>ne(e).slice(8,-1),ie=e=>ne(e)===`[object Object]`,ae=e=>E(e)&&e!==`NaN`&&e[0]!==`-`&&``+parseInt(e,10)===e,k=u(`,key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted`),oe=e=>{let t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},se=/-\w/g,ce=oe(e=>e.replace(se,e=>e.slice(1).toUpperCase())),le=/\B([A-Z])/g,ue=oe(e=>e.replace(le,`-$1`).toLowerCase()),de=oe(e=>e.charAt(0).toUpperCase()+e.slice(1)),fe=oe(e=>e?`on${de(e)}`:``),pe=(e,t)=>!Object.is(e,t),me=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},he=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},ge=e=>{let t=parseFloat(e);return isNaN(t)?e:t},_e,ve=()=>_e||=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{};function ye(e){if(x(e)){let t={};for(let n=0;n<e.length;n++){let r=e[n],i=E(r)?Ce(r):ye(r);if(i)for(let e in i)t[e]=i[e]}return t}else if(E(e)||O(e))return e}var be=/;(?![^(]*\))/g,xe=/:([^]+)/,Se=/\/\*[^]*?\*\//g;function Ce(e){let t={};return e.replace(Se,``).split(be).forEach(e=>{if(e){let n=e.split(xe);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function A(e){let t=``;if(E(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){let r=A(e[n]);r&&(t+=r+` `)}else if(O(e))for(let n in e)e[n]&&(t+=n+` `);return t.trim()}var we=`itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`,Te=u(we);we+``;function Ee(e){return!!e||e===``}function De(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Oe(e[r],t[r]);return n}function Oe(e,t){if(e===t)return!0;let n=w(e),r=w(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=D(e),r=D(t),n||r)return e===t;if(n=x(e),r=x(t),n||r)return n&&r?De(e,t):!1;if(n=O(e),r=O(t),n||r){if(!n||!r||Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e){let r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!Oe(e[n],t[n]))return!1}}return String(e)===String(t)}function ke(e,t){return e.findIndex(e=>Oe(e,t))}var Ae=e=>!!(e&&e.__v_isRef===!0),j=e=>E(e)?e:e==null?``:x(e)||O(e)&&(e.toString===te||!T(e.toString))?Ae(e)?j(e.value):JSON.stringify(e,je,2):String(e),je=(e,t)=>Ae(t)?je(e,t.value):S(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n],r)=>(e[Me(t,r)+` =>`]=n,e),{})}:C(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Me(e))}:D(t)?Me(t):O(t)&&!x(t)&&!ie(t)?String(t):t,Me=(e,t=``)=>D(e)?`Symbol(${e.description??t})`:e,Ne,Pe=class{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Ne&&(Ne.active?(this.parent=Ne,this.index=(Ne.scopes||=[]).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){let n=this.scopes.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}let n=this.effects.slice();for(e=0,t=n.length;e<t;e++)n[e].resume()}}run(e){if(this._active){let t=Ne;try{return Ne=this,e()}finally{Ne=t}}}on(){++this._on===1&&(this.prevScope=Ne,Ne=this)}off(){if(this._on>0&&--this._on===0){if(Ne===this)Ne=this.prevScope;else{let e=Ne;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){let e=this.scopes.slice();for(t=0,n=e.length;t<n;t++)e[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){let e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.parent=void 0}}};function Fe(){return Ne}var M,Ie=new WeakSet,Le=class{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ne&&(Ne.active?Ne.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ie.has(this)&&(Ie.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ve(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,et(this),We(this);let e=M,t=Xe;M=this,Xe=!0;try{return this.fn()}finally{Ge(this),M=e,Xe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Je(e);this.deps=this.depsTail=void 0,et(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ie.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ke(this)&&this.run()}get dirty(){return Ke(this)}},Re=0,ze,Be;function Ve(e,t=!1){if(e.flags|=8,t){e.next=Be,Be=e;return}e.next=ze,ze=e}function He(){Re++}function Ue(){if(--Re>0)return;if(Be){let e=Be;for(Be=void 0;e;){let t=e.next;e.next=void 0,e.flags&=-9,e=t}}let e;for(;ze;){let t=ze;for(ze=void 0;t;){let n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(t){e||=t}t=n}}if(e)throw e}function We(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ge(e){let t,n=e.depsTail,r=n;for(;r;){let e=r.prevDep;r.version===-1?(r===n&&(n=e),Je(r),Ye(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=e}e.deps=t,e.depsTail=n}function Ke(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(qe(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function qe(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===tt)||(e.globalVersion=tt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Ke(e))))return;e.flags|=2;let t=e.dep,n=M,r=Xe;M=e,Xe=!0;try{We(e);let n=e.fn(e._value);(t.version===0||pe(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(e){throw t.version++,e}finally{M=n,Xe=r,Ge(e),e.flags&=-3}}function Je(e,t=!1){let{dep:n,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let e=n.computed.deps;e;e=e.nextDep)Je(e,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ye(e){let{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}var Xe=!0,Ze=[];function Qe(){Ze.push(Xe),Xe=!1}function $e(){let e=Ze.pop();Xe=e===void 0||e}function et(e){let{cleanup:t}=e;if(e.cleanup=void 0,t){let e=M;M=void 0;try{t()}finally{M=e}}}var tt=0,nt=class{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}},rt=class{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!M||!Xe||M===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==M)t=this.activeLink=new nt(M,this),M.deps?(t.prevDep=M.depsTail,M.depsTail.nextDep=t,M.depsTail=t):M.deps=M.depsTail=t,it(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){let e=t.nextDep;e.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=e),t.prevDep=M.depsTail,t.nextDep=void 0,M.depsTail.nextDep=t,M.depsTail=t,M.deps===t&&(M.deps=e)}return t}trigger(e){this.version++,tt++,this.notify(e)}notify(e){He();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ue()}}};function it(e){if(e.dep.sc++,e.sub.flags&4){let t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let e=t.deps;e;e=e.nextDep)it(e)}let n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}var at=new WeakMap,ot=Symbol(``),st=Symbol(``),ct=Symbol(``);function lt(e,t,n){if(Xe&&M){let t=at.get(e);t||at.set(e,t=new Map);let r=t.get(n);r||(t.set(n,r=new rt),r.map=t,r.key=n),r.track()}}function ut(e,t,n,r,i,a){let o=at.get(e);if(!o){tt++;return}let s=e=>{e&&e.trigger()};if(He(),t===`clear`)o.forEach(s);else{let i=x(e),a=i&&ae(n);if(i&&n===`length`){let e=Number(r);o.forEach((t,n)=>{(n===`length`||n===ct||!D(n)&&n>=e)&&s(t)})}else switch((n!==void 0||o.has(void 0))&&s(o.get(n)),a&&s(o.get(ct)),t){case`add`:i?a&&s(o.get(`length`)):(s(o.get(ot)),S(e)&&s(o.get(st)));break;case`delete`:i||(s(o.get(ot)),S(e)&&s(o.get(st)));break;case`set`:S(e)&&s(o.get(ot));break}}Ue()}function dt(e){let t=N(e);return t===e?t:(lt(t,`iterate`,ct),Xt(e)?t:t.map($t))}function ft(e){return lt(e=N(e),`iterate`,ct),e}function pt(e,t){return Yt(e)?en(Jt(e)?$t(t):t):$t(t)}var mt={__proto__:null,[Symbol.iterator](){return ht(this,Symbol.iterator,e=>pt(this,e))},concat(...e){return dt(this).concat(...e.map(e=>x(e)?dt(e):e))},entries(){return ht(this,`entries`,e=>(e[1]=pt(this,e[1]),e))},every(e,t){return _t(this,`every`,e,t,void 0,arguments)},filter(e,t){return _t(this,`filter`,e,t,e=>e.map(e=>pt(this,e)),arguments)},find(e,t){return _t(this,`find`,e,t,e=>pt(this,e),arguments)},findIndex(e,t){return _t(this,`findIndex`,e,t,void 0,arguments)},findLast(e,t){return _t(this,`findLast`,e,t,e=>pt(this,e),arguments)},findLastIndex(e,t){return _t(this,`findLastIndex`,e,t,void 0,arguments)},forEach(e,t){return _t(this,`forEach`,e,t,void 0,arguments)},includes(...e){return yt(this,`includes`,e)},indexOf(...e){return yt(this,`indexOf`,e)},join(e){return dt(this).join(e)},lastIndexOf(...e){return yt(this,`lastIndexOf`,e)},map(e,t){return _t(this,`map`,e,t,void 0,arguments)},pop(){return bt(this,`pop`)},push(...e){return bt(this,`push`,e)},reduce(e,...t){return vt(this,`reduce`,e,t)},reduceRight(e,...t){return vt(this,`reduceRight`,e,t)},shift(){return bt(this,`shift`)},some(e,t){return _t(this,`some`,e,t,void 0,arguments)},splice(...e){return bt(this,`splice`,e)},toReversed(){return dt(this).toReversed()},toSorted(e){return dt(this).toSorted(e)},toSpliced(...e){return dt(this).toSpliced(...e)},unshift(...e){return bt(this,`unshift`,e)},values(){return ht(this,`values`,e=>pt(this,e))}};function ht(e,t,n){let r=ft(e),i=r[t]();return r!==e&&!Xt(e)&&(i._next=i.next,i.next=()=>{let e=i._next();return e.done||(e.value=n(e.value)),e}),i}var gt=Array.prototype;function _t(e,t,n,r,i,a){let o=ft(e),s=o!==e&&!Xt(e),c=o[t];if(c!==gt[t]){let t=c.apply(e,a);return s?$t(t):t}let l=n;o!==e&&(s?l=function(t,r){return n.call(this,pt(e,t),r,e)}:n.length>2&&(l=function(t,r){return n.call(this,t,r,e)}));let u=c.call(o,l,r);return s&&i?i(u):u}function vt(e,t,n,r){let i=ft(e),a=i!==e&&!Xt(e),o=n,s=!1;i!==e&&(a?(s=r.length===0,o=function(t,r,i){return s&&(s=!1,t=pt(e,t)),n.call(this,t,pt(e,r),i,e)}):n.length>3&&(o=function(t,r,i){return n.call(this,t,r,i,e)}));let c=i[t](o,...r);return s?pt(e,c):c}function yt(e,t,n){let r=N(e);lt(r,`iterate`,ct);let i=r[t](...n);return(i===-1||i===!1)&&Zt(n[0])?(n[0]=N(n[0]),r[t](...n)):i}function bt(e,t,n=[]){Qe(),He();let r=N(e)[t].apply(e,n);return Ue(),$e(),r}var xt=u(`__proto__,__v_isRef,__isVue`),St=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!==`arguments`&&e!==`caller`).map(e=>Symbol[e]).filter(D));function Ct(e){D(e)||(e=String(e));let t=N(this);return lt(t,`has`,e),t.hasOwnProperty(e)}var wt=class{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){if(t===`__v_skip`)return e.__v_skip;let r=this._isReadonly,i=this._isShallow;if(t===`__v_isReactive`)return!r;if(t===`__v_isReadonly`)return r;if(t===`__v_isShallow`)return i;if(t===`__v_raw`)return n===(r?i?Ht:Vt:i?Bt:zt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;let a=x(e);if(!r){let e;if(a&&(e=mt[t]))return e;if(t===`hasOwnProperty`)return Ct}let o=Reflect.get(e,t,tn(e)?e:n);if((D(t)?St.has(t):xt(t))||(r||lt(e,`get`,t),i))return o;if(tn(o)){let e=a&&ae(t)?o:o.value;return r&&O(e)?Kt(e):e}return O(o)?r?Kt(o):Wt(o):o}},Tt=class extends wt{constructor(e=!1){super(!1,e)}set(e,t,n,r){let i=e[t],a=x(e)&&ae(t);if(!this._isShallow){let e=Yt(i);if(!Xt(n)&&!Yt(n)&&(i=N(i),n=N(n)),!a&&tn(i)&&!tn(n))return e||(i.value=n),!0}let o=a?Number(t)<e.length:b(e,t),s=Reflect.set(e,t,n,tn(e)?e:r);return e===N(r)&&s&&(o?pe(n,i)&&ut(e,`set`,t,n,i):ut(e,`add`,t,n)),s}deleteProperty(e,t){let n=b(e,t),r=e[t],i=Reflect.deleteProperty(e,t);return i&&n&&ut(e,`delete`,t,void 0,r),i}has(e,t){let n=Reflect.has(e,t);return(!D(t)||!St.has(t))&&lt(e,`has`,t),n}ownKeys(e){return lt(e,`iterate`,x(e)?`length`:ot),Reflect.ownKeys(e)}},Et=class extends wt{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}},Dt=new Tt,Ot=new Et,kt=new Tt(!0),At=e=>e,jt=e=>Reflect.getPrototypeOf(e);function Mt(e,t,n){return function(...r){let i=this.__v_raw,a=N(i),o=S(a),s=e===`entries`||e===Symbol.iterator&&o,c=e===`keys`&&o,l=i[e](...r),u=n?At:t?en:$t;return!t&&lt(a,`iterate`,c?st:ot),_(Object.create(l),{next(){let{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:s?[u(e[0]),u(e[1])]:u(e),done:t}}})}}function Nt(e){return function(...t){return e===`delete`?!1:e===`clear`?void 0:this}}function Pt(e,t){let n={get(n){let r=this.__v_raw,i=N(r),a=N(n);e||(pe(n,a)&&lt(i,`get`,n),lt(i,`get`,a));let{has:o}=jt(i),s=t?At:e?en:$t;if(o.call(i,n))return s(r.get(n));if(o.call(i,a))return s(r.get(a));r!==i&&r.get(n)},get size(){let t=this.__v_raw;return!e&&lt(N(t),`iterate`,ot),t.size},has(t){let n=this.__v_raw,r=N(n),i=N(t);return e||(pe(t,i)&&lt(r,`has`,t),lt(r,`has`,i)),t===i?n.has(t):n.has(t)||n.has(i)},forEach(n,r){let i=this,a=i.__v_raw,o=N(a),s=t?At:e?en:$t;return!e&&lt(o,`iterate`,ot),a.forEach((e,t)=>n.call(r,s(e),s(t),i))}};return _(n,e?{add:Nt(`add`),set:Nt(`set`),delete:Nt(`delete`),clear:Nt(`clear`)}:{add(e){let n=N(this),r=jt(n),i=N(e),a=!t&&!Xt(e)&&!Yt(e)?i:e;return r.has.call(n,a)||pe(e,a)&&r.has.call(n,e)||pe(i,a)&&r.has.call(n,i)||(n.add(a),ut(n,`add`,a,a)),this},set(e,n){!t&&!Xt(n)&&!Yt(n)&&(n=N(n));let r=N(this),{has:i,get:a}=jt(r),o=i.call(r,e);o||=(e=N(e),i.call(r,e));let s=a.call(r,e);return r.set(e,n),o?pe(n,s)&&ut(r,`set`,e,n,s):ut(r,`add`,e,n),this},delete(e){let t=N(this),{has:n,get:r}=jt(t),i=n.call(t,e);i||=(e=N(e),n.call(t,e));let a=r?r.call(t,e):void 0,o=t.delete(e);return i&&ut(t,`delete`,e,void 0,a),o},clear(){let e=N(this),t=e.size!==0,n=e.clear();return t&&ut(e,`clear`,void 0,void 0,void 0),n}}),[`keys`,`values`,`entries`,Symbol.iterator].forEach(r=>{n[r]=Mt(r,e,t)}),n}function Ft(e,t){let n=Pt(e,t);return(t,r,i)=>r===`__v_isReactive`?!e:r===`__v_isReadonly`?e:r===`__v_raw`?t:Reflect.get(b(n,r)&&r in t?n:t,r,i)}var It={get:Ft(!1,!1)},Lt={get:Ft(!1,!0)},Rt={get:Ft(!0,!1)},zt=new WeakMap,Bt=new WeakMap,Vt=new WeakMap,Ht=new WeakMap;function Ut(e){switch(e){case`Object`:case`Array`:return 1;case`Map`:case`Set`:case`WeakMap`:case`WeakSet`:return 2;default:return 0}}function Wt(e){return Yt(e)?e:qt(e,!1,Dt,It,zt)}function Gt(e){return qt(e,!1,kt,Lt,Bt)}function Kt(e){return qt(e,!0,Ot,Rt,Vt)}function qt(e,t,n,r,i){if(!O(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;let a=i.get(e);if(a)return a;let o=Ut(re(e));if(o===0)return e;let s=new Proxy(e,o===2?r:n);return i.set(e,s),s}function Jt(e){return Yt(e)?Jt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function Xt(e){return!!(e&&e.__v_isShallow)}function Zt(e){return e?!!e.__v_raw:!1}function N(e){let t=e&&e.__v_raw;return t?N(t):e}function Qt(e){return!b(e,`__v_skip`)&&Object.isExtensible(e)&&he(e,`__v_skip`,!0),e}var $t=e=>O(e)?Wt(e):e,en=e=>O(e)?Kt(e):e;function tn(e){return e?e.__v_isRef===!0:!1}function P(e){return rn(e,!1)}function nn(e){return rn(e,!0)}function rn(e,t){return tn(e)?e:new an(e,t)}var an=class{constructor(e,t){this.dep=new rt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:N(e),this._value=t?e:$t(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){let t=this._rawValue,n=this.__v_isShallow||Xt(e)||Yt(e);e=n?e:N(e),pe(e,t)&&(this._rawValue=e,this._value=n?e:$t(e),this.dep.trigger())}};function F(e){return tn(e)?e.value:e}var on={get:(e,t,n)=>t===`__v_raw`?e:F(Reflect.get(e,t,n)),set:(e,t,n,r)=>{let i=e[t];return tn(i)&&!tn(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function sn(e){return Jt(e)?e:new Proxy(e,on)}var cn=class{constructor(e,t,n){this.fn=e,this.setter=t,this._value=void 0,this.dep=new rt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=tt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&M!==this)return Ve(this,!0),!0}get value(){let e=this.dep.track();return qe(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}};function ln(e,t,n=!1){let r,i;return T(e)?r=e:(r=e.get,i=e.set),new cn(r,i,n)}var un={},dn=new WeakMap,fn=void 0;function pn(e,t=!1,n=fn){if(n){let t=dn.get(n);t||dn.set(n,t=[]),t.push(e)}}function mn(e,t,n=d){let{immediate:r,deep:i,once:a,scheduler:o,augmentJob:s,call:c}=n,l=e=>i?e:Xt(e)||i===!1||i===0?hn(e,1):hn(e),u,f,m,h,g=!1,_=!1;if(tn(e)?(f=()=>e.value,g=Xt(e)):Jt(e)?(f=()=>l(e),g=!0):x(e)?(_=!0,g=e.some(e=>Jt(e)||Xt(e)),f=()=>e.map(e=>{if(tn(e))return e.value;if(Jt(e))return l(e);if(T(e))return c?c(e,2):e()})):f=T(e)?t?c?()=>c(e,2):e:()=>{if(m){Qe();try{m()}finally{$e()}}let t=fn;fn=u;try{return c?c(e,3,[h]):e(h)}finally{fn=t}}:p,t&&i){let e=f,t=i===!0?1/0:i;f=()=>hn(e(),t)}let y=Fe(),b=()=>{u.stop(),y&&y.active&&v(y.effects,u)};if(a&&t){let e=t;t=(...t)=>{let n=e(...t);return b(),n}}let S=_?Array(e.length).fill(un):un,C=e=>{if(!(!(u.flags&1)||!u.dirty&&!e))if(t){let n=u.run();if(e||i||g||(_?n.some((e,t)=>pe(e,S[t])):pe(n,S))){m&&m();let e=fn;fn=u;try{let e=[n,S===un?void 0:_&&S[0]===un?[]:S,h];S=n,c?c(t,3,e):t(...e)}finally{fn=e}}}else u.run()};return s&&s(C),u=new Le(f),u.scheduler=o?()=>o(C,!1):C,h=e=>pn(e,!1,u),m=u.onStop=()=>{let e=dn.get(u);if(e){if(c)c(e,4);else for(let t of e)t();dn.delete(u)}},t?r?C(!0):S=u.run():o?o(C.bind(null,!0),!0):u.run(),b.pause=u.pause.bind(u),b.resume=u.resume.bind(u),b.stop=b,b}function hn(e,t=1/0,n){if(t<=0||!O(e)||e.__v_skip||(n||=new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,tn(e))hn(e.value,t,n);else if(x(e))for(let r=0;r<e.length;r++)hn(e[r],t,n);else if(C(e)||S(e))e.forEach(e=>{hn(e,t,n)});else if(ie(e)){for(let r in e)hn(e[r],t,n);for(let r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&hn(e[r],t,n)}return e}function gn(e,t,n,r){try{return r?e(...r):e()}catch(e){vn(e,t,n)}}function _n(e,t,n,r){if(T(e)){let i=gn(e,t,n,r);return i&&ee(i)&&i.catch(e=>{vn(e,t,n)}),i}if(x(e)){let i=[];for(let a=0;a<e.length;a++)i.push(_n(e[a],t,n,r));return i}}function vn(e,t,n,r=!0){let i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||d;if(t){let r=t.parent,i=t.proxy,o=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){let t=r.ec;if(t){for(let n=0;n<t.length;n++)if(t[n](e,i,o)===!1)return}r=r.parent}if(a){Qe(),gn(a,null,10,[e,i,o]),$e();return}}yn(e,n,i,r,o)}function yn(e,t,n,r=!0,i=!1){if(i)throw e;console.error(e)}var bn=[],xn=-1,Sn=[],Cn=null,wn=0,Tn=Promise.resolve(),En=null;function Dn(e){let t=En||Tn;return e?t.then(this?e.bind(this):e):t}function On(e){let t=xn+1,n=bn.length;for(;t<n;){let r=t+n>>>1,i=bn[r],a=Pn(i);a<e||a===e&&i.flags&2?t=r+1:n=r}return t}function kn(e){if(!(e.flags&1)){let t=Pn(e),n=bn[bn.length-1];!n||!(e.flags&2)&&t>=Pn(n)?bn.push(e):bn.splice(On(t),0,e),e.flags|=1,An()}}function An(){En||=Tn.then(Fn)}function jn(e){x(e)?Sn.push(...e):Cn&&e.id===-1?Cn.splice(wn+1,0,e):e.flags&1||(Sn.push(e),e.flags|=1),An()}function Mn(e,t,n=xn+1){for(;n<bn.length;n++){let t=bn[n];if(t&&t.flags&2){if(e&&t.id!==e.uid)continue;bn.splice(n,1),n--,t.flags&4&&(t.flags&=-2),t(),t.flags&4||(t.flags&=-2)}}}function Nn(e){if(Sn.length){let e=[...new Set(Sn)].sort((e,t)=>Pn(e)-Pn(t));if(Sn.length=0,Cn){Cn.push(...e);return}for(Cn=e,wn=0;wn<Cn.length;wn++){let e=Cn[wn];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Cn=null,wn=0}}var Pn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Fn(e){try{for(xn=0;xn<bn.length;xn++){let e=bn[xn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;xn<bn.length;xn++){let e=bn[xn];e&&(e.flags&=-2)}xn=-1,bn.length=0,Nn(e),En=null,(bn.length||Sn.length)&&Fn(e)}}var In=null,Ln=null;function Rn(e){let t=In;return In=e,Ln=e&&e.type.__scopeId||null,t}function zn(e,t=In,n){if(!t||e._n)return e;let r=(...n)=>{r._d&&ta(-1);let i=Rn(t),a=Zi.length,o;try{o=e(...n)}finally{for(let e=Zi.length;e>a;e--)$i();Rn(i),r._d&&ta(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function I(e,t){if(In===null)return e;let n=Ia(In),r=e.dirs||=[];for(let e=0;e<t.length;e++){let[i,a,o,s=d]=t[e];i&&(T(i)&&(i={mounted:i,updated:i}),i.deep&&hn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:o,modifiers:s}))}return e}function Bn(e,t,n,r){let i=e.dirs,a=t&&t.dirs;for(let o=0;o<i.length;o++){let s=i[o];a&&(s.oldValue=a[o].value);let c=s.dir[r];c&&(Qe(),_n(c,n,8,[e.el,s,e,t]),$e())}}function Vn(e,t){if(ba){let n=ba.provides,r=ba.parent&&ba.parent.provides;r===n&&(n=ba.provides=Object.create(r)),n[e]=t}}function Hn(e,t,n=!1){let r=xa();if(r||ii){let i=ii?ii._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&T(t)?t.call(r&&r.proxy):t}}var Un=Symbol.for(`v-scx`),Wn=()=>Hn(Un);function Gn(e,t,n){return Kn(e,t,n)}function Kn(e,t,n=d){let{immediate:r,deep:i,flush:a,once:o}=n,s=_({},n),c=t&&r||!t&&a!==`post`,l;if(Da){if(a===`sync`){let e=Wn();l=e.__watcherHandles||=[]}else if(!c){let e=()=>{};return e.stop=p,e.resume=p,e.pause=p,e}}let u=ba;s.call=(e,t,n)=>_n(e,u,t,n);let f=!1;a===`post`?s.scheduler=e=>{Fi(e,u&&u.suspense)}:a!==`sync`&&(f=!0,s.scheduler=(e,t)=>{t?e():kn(e)}),s.augmentJob=e=>{t&&(e.flags|=4),f&&(e.flags|=2,u&&(e.id=u.uid,e.i=u))};let m=mn(e,t,s);return Da&&(l?l.push(m):c&&m()),m}function qn(e,t,n){let r=this.proxy,i=E(e)?e.includes(`.`)?Jn(r,e):()=>r[e]:e.bind(r,r),a;T(t)?a=t:(a=t.handler,n=t);let o=wa(this),s=Kn(i,a.bind(r),n);return o(),s}function Jn(e,t){let n=t.split(`.`);return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}var Yn=new WeakMap,Xn=Symbol(`_vte`),Zn=e=>e.__isTeleport,Qn=e=>e&&(e.disabled||e.disabled===``),$n=e=>e&&(e.defer||e.defer===``),er=e=>typeof SVGElement<`u`&&e instanceof SVGElement,tr=e=>typeof MathMLElement==`function`&&e instanceof MathMLElement,nr=(e,t)=>{let n=e&&e.to;return E(n)?t?t(n):null:n},rr={name:`Teleport`,__isTeleport:!0,process(e,t,n,r,i,a,o,s,c,l){let{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:m,createText:h,createComment:g,parentNode:_}}=l,v=Qn(t.props),{dynamicChildren:y}=t,b=(e,t,n)=>{e.shapeFlag&16&&u(e.children,t,n,i,a,o,s,c)},x=(e=t)=>{let n=Qn(e.props),r=e.target=nr(e.props,m),a=cr(r,e,h,p);r&&(o!==`svg`&&er(r)?o=`svg`:o!==`mathml`&&tr(r)&&(o=`mathml`),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(r),n||(b(e,r,a),sr(e,!1)))},S=e=>{let t=()=>{if(Yn.get(e)===t){if(Yn.delete(e),Qn(e.props)){let t=_(e.el)||n;b(e,t,e.anchor),sr(e,!0)}x(e)}};Yn.set(e,t),Fi(t,a)};if(e==null){let e=t.el=h(``),i=t.anchor=h(``);if(p(e,n,r),p(i,n,r),$n(t.props)||a&&a.pendingBranch){S(t);return}v&&(b(t,n,i),sr(t,!0)),x()}else{t.el=e.el;let r=t.anchor=e.anchor,u=Yn.get(e);if(u){u.flags|=8,Yn.delete(e),S(t);return}t.targetStart=e.targetStart;let p=t.target=e.target,h=t.targetAnchor=e.targetAnchor,g=Qn(e.props),_=g?n:p,b=g?r:h;if(o===`svg`||er(p)?o=`svg`:(o===`mathml`||tr(p))&&(o=`mathml`),y?(f(e.dynamicChildren,y,_,i,a,o,s),Vi(e,t,!0)):c||d(e,t,_,b,i,a,o,s,!1),v)g?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ir(t,n,r,l,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){let e=nr(t.props,m);e&&(t.target=e,ir(t,e,null,l,0))}else g&&ir(t,p,h,l,1);sr(t,v)}},remove(e,t,n,{um:r,o:{remove:i}},a){let{shapeFlag:o,children:s,anchor:c,targetStart:l,targetAnchor:u,target:d,props:f}=e,p=Qn(f),m=a||!p,h=Yn.get(e);if(h&&(h.flags|=8,Yn.delete(e)),d&&(i(l),i(u)),a&&i(c),!h&&(p||d)&&o&16)for(let e=0;e<s.length;e++){let i=s[e];r(i,t,n,m,!!i.dynamicChildren)}},move:ir,hydrate:ar};function ir(e,t,n,{o:{insert:r},m:i},a=2){a===0&&r(e.targetAnchor,t,n);let{el:o,anchor:s,shapeFlag:c,children:l,props:u}=e,d=a===2;if(d&&r(o,t,n),!Yn.has(e)&&(!d||Qn(u))&&c&16)for(let e=0;e<l.length;e++)i(l[e],t,n,2);d&&r(s,t,n)}function ar(e,t,n,r,i,a,{o:{nextSibling:o,parentNode:s,querySelector:c,insert:l,createText:u}},d){function f(e,n){let r=n;for(;r;){if(r&&r.nodeType===8){if(r.data===`teleport start anchor`)t.targetStart=r;else if(r.data===`teleport anchor`){t.targetAnchor=r,e._lpa=t.targetAnchor&&o(t.targetAnchor);break}}r=o(r)}}function p(e,t){t.anchor=d(o(e),t,s(e),n,r,i,a)}let m=t.target=nr(t.props,c),h=Qn(t.props);if(m){let c=m._lpa||m.firstChild;t.shapeFlag&16&&(h?(p(e,t),f(m,c),t.targetAnchor||cr(m,t,u,l,s(e)===m?e:null)):(t.anchor=o(e),f(m,c),t.targetAnchor||cr(m,t,u,l),d(c&&o(c),t,m,n,r,i,a))),sr(t,h)}else h&&t.shapeFlag&16&&(p(e,t),t.targetStart=e,t.targetAnchor=o(e));return t.anchor&&o(t.anchor)}var or=rr;function sr(e,t){let n=e.ctx;if(n&&n.ut){let r,i;for(t?(r=e.el,i=e.anchor):(r=e.targetStart,i=e.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute(`data-v-owner`,n.uid),r=r.nextSibling;n.ut()}}function cr(e,t,n,r,i=null){let a=t.targetStart=n(``),o=t.targetAnchor=n(``);return a[Xn]=o,e&&(r(a,e,i),r(o,e,i)),o}var lr=Symbol(`_leaveCb`);function ur(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ur(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function L(e,t){return T(e)?_({name:e.name},t,{setup:e}):e}function dr(e){e.ids=[e.ids[0]+e.ids[2]+++`-`,0,0]}function fr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}var pr=new WeakMap;function mr(e,t,n,r,i=!1){if(x(e)){e.forEach((e,a)=>mr(e,t&&(x(t)?t[a]:t),n,r,i));return}if(gr(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&mr(e,t,n,r.component.subTree);return}let a=r.shapeFlag&4?Ia(r.component):r.el,o=i?null:a,{i:s,r:c}=e,l=t&&t.r,u=s.refs===d?s.refs={}:s.refs,f=s.setupState,p=N(f),h=f===d?m:e=>!fr(u,e)&&b(p,e),g=(e,t)=>!(t&&fr(u,t));if(l!=null&&l!==c){if(hr(t),E(l))u[l]=null,h(l)&&(f[l]=null);else if(tn(l)){let e=t;g(l,e.k)&&(l.value=null),e.k&&(u[e.k]=null)}}if(T(c))gn(c,s,12,[o,u]);else{let t=E(c),r=tn(c);if(t||r){let s=()=>{if(e.f){let n=t?h(c)?f[c]:u[c]:g(c)||!e.k?c.value:u[e.k];if(i)x(n)&&v(n,a);else if(x(n))n.includes(a)||n.push(a);else if(t)u[c]=[a],h(c)&&(f[c]=u[c]);else{let t=[a];g(c,e.k)&&(c.value=t),e.k&&(u[e.k]=t)}}else t?(u[c]=o,h(c)&&(f[c]=o)):r&&(g(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){let t=()=>{s(),pr.delete(e)};t.id=-1,pr.set(e,t),Fi(t,n)}else hr(e),s()}}}function hr(e){let t=pr.get(e);t&&(t.flags|=8,pr.delete(e))}ve().requestIdleCallback,ve().cancelIdleCallback;var gr=e=>!!e.type.__asyncLoader,_r=e=>e.type.__isKeepAlive;function vr(e,t){br(e,`a`,t)}function yr(e,t){br(e,`da`,t)}function br(e,t,n=ba){let r=e.__wdc||=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()};if(Sr(t,r,n),n){let e=n.parent;for(;e&&e.parent;)_r(e.parent.vnode)&&xr(r,t,n,e),e=e.parent}}function xr(e,t,n,r){let i=Sr(t,e,r,!0);kr(()=>{v(r[t],i)},n)}function Sr(e,t,n=ba,r=!1){if(n){let i=n[e]||(n[e]=[]),a=t.__weh||=(...r)=>{Qe();let i=wa(n),a=_n(t,n,e,r);return i(),$e(),a};return r?i.unshift(a):i.push(a),a}}var Cr=e=>(t,n=ba)=>{(!Da||e===`sp`)&&Sr(e,(...e)=>t(...e),n)},wr=Cr(`bm`),Tr=Cr(`m`),Er=Cr(`bu`),Dr=Cr(`u`),Or=Cr(`bum`),kr=Cr(`um`),Ar=Cr(`sp`),jr=Cr(`rtg`),Mr=Cr(`rtc`);function Nr(e,t=ba){Sr(`ec`,e,t)}var Pr=Symbol.for(`v-ndc`);function R(e,t,n,r){let i,a=n&&n[r],o=x(e);if(o||E(e)){let n=o&&Jt(e),r=!1,s=!1;n&&(r=!Xt(e),s=Yt(e),e=ft(e)),i=Array(e.length);for(let n=0,o=e.length;n<o;n++)i[n]=t(r?s?en($t(e[n])):$t(e[n]):e[n],n,void 0,a&&a[n])}else if(typeof e==`number`){i=Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,a&&a[n])}else if(O(e))if(e[Symbol.iterator])i=Array.from(e,(e,n)=>t(e,n,void 0,a&&a[n]));else{let n=Object.keys(e);i=Array(n.length);for(let r=0,o=n.length;r<o;r++){let o=n[r];i[r]=t(e[o],o,r,a&&a[r])}}else i=[];return n&&(n[r]=i),i}var Fr=e=>e?Ea(e)?Ia(e):Fr(e.parent):null,Ir=_(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fr(e.parent),$root:e=>Fr(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Gr(e),$forceUpdate:e=>e.f||=()=>{kn(e.update)},$nextTick:e=>e.n||=Dn.bind(e.proxy),$watch:e=>qn.bind(e)}),Lr=(e,t)=>e!==d&&!e.__isScriptSetup&&b(e,t),Rr={get({_:e},t){if(t===`__v_skip`)return!0;let{ctx:n,setupState:r,data:i,props:a,accessCache:o,type:s,appContext:c}=e;if(t[0]!==`$`){let e=o[t];if(e!==void 0)switch(e){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return a[t]}else if(Lr(r,t))return o[t]=1,r[t];else if(i!==d&&b(i,t))return o[t]=2,i[t];else if(b(a,t))return o[t]=3,a[t];else if(n!==d&&b(n,t))return o[t]=4,n[t];else Br&&(o[t]=0)}let l=Ir[t],u,f;if(l)return t===`$attrs`&&lt(e.attrs,`get`,``),l(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==d&&b(n,t))return o[t]=4,n[t];if(f=c.config.globalProperties,b(f,t))return f[t]},set({_:e},t,n){let{data:r,setupState:i,ctx:a}=e;return Lr(i,t)?(i[t]=n,!0):r!==d&&b(r,t)?(r[t]=n,!0):b(e.props,t)||t[0]===`$`&&t.slice(1)in e?!1:(a[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,props:a,type:o}},s){let c;return!!(n[s]||e!==d&&s[0]!==`$`&&b(e,s)||Lr(t,s)||b(a,s)||b(r,s)||b(Ir,s)||b(i.config.globalProperties,s)||(c=o.__cssModules)&&c[s])},defineProperty(e,t,n){return n.get==null?b(n,`value`)&&this.set(e,t,n.value,null):e._.accessCache[t]=0,Reflect.defineProperty(e,t,n)}};function zr(e){return x(e)?e.reduce((e,t)=>(e[t]=null,e),{}):e}var Br=!0;function Vr(e){let t=Gr(e),n=e.proxy,r=e.ctx;Br=!1,t.beforeCreate&&Ur(t.beforeCreate,e,`bc`);let{data:i,computed:a,methods:o,watch:s,provide:c,inject:l,created:u,beforeMount:d,mounted:f,beforeUpdate:m,updated:h,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:b,unmounted:S,render:C,renderTracked:w,renderTriggered:E,errorCaptured:D,serverPrefetch:ee,expose:te,inheritAttrs:ne,components:re,directives:ie,filters:ae}=t;if(l&&Hr(l,r,null),o)for(let e in o){let t=o[e];T(t)&&(r[e]=t.bind(n))}if(i){let t=i.call(n,n);O(t)&&(e.data=Wt(t))}if(Br=!0,a)for(let e in a){let t=a[e],i=K({get:T(t)?t.bind(n,n):T(t.get)?t.get.bind(n,n):p,set:!T(t)&&T(t.set)?t.set.bind(n):p});Object.defineProperty(r,e,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e})}if(s)for(let e in s)Wr(s[e],r,n,e);if(c){let e=T(c)?c.call(n):c;Reflect.ownKeys(e).forEach(t=>{Vn(t,e[t])})}u&&Ur(u,e,`c`);function k(e,t){x(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(k(wr,d),k(Tr,f),k(Er,m),k(Dr,h),k(vr,g),k(yr,_),k(Nr,D),k(Mr,w),k(jr,E),k(Or,y),k(kr,S),k(Ar,ee),x(te))if(te.length){let t=e.exposed||={};te.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t,enumerable:!0})})}else e.exposed||={};C&&e.render===p&&(e.render=C),ne!=null&&(e.inheritAttrs=ne),re&&(e.components=re),ie&&(e.directives=ie),ee&&dr(e)}function Hr(e,t,n=p){x(e)&&(e=Xr(e));for(let n in e){let r=e[n],i;i=O(r)?`default`in r?Hn(r.from||n,r.default,!0):Hn(r.from||n):Hn(r),tn(i)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:e=>i.value=e}):t[n]=i}}function Ur(e,t,n){_n(x(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wr(e,t,n,r){let i=r.includes(`.`)?Jn(n,r):()=>n[r];if(E(e)){let n=t[e];T(n)&&Gn(i,n)}else if(T(e))Gn(i,e.bind(n));else if(O(e))if(x(e))e.forEach(e=>Wr(e,t,n,r));else{let r=T(e.handler)?e.handler.bind(n):t[e.handler];T(r)&&Gn(i,r,e)}}function Gr(e){let t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:a,config:{optionMergeStrategies:o}}=e.appContext,s=a.get(t),c;return s?c=s:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(e=>Kr(c,e,o,!0)),Kr(c,t,o)),O(t)&&a.set(t,c),c}function Kr(e,t,n,r=!1){let{mixins:i,extends:a}=t;a&&Kr(e,a,n,!0),i&&i.forEach(t=>Kr(e,t,n,!0));for(let i in t)if(!(r&&i===`expose`)){let r=qr[i]||n&&n[i];e[i]=r?r(e[i],t[i]):t[i]}return e}var qr={data:Jr,props:$r,emits:$r,methods:Qr,computed:Qr,beforeCreate:Zr,created:Zr,beforeMount:Zr,mounted:Zr,beforeUpdate:Zr,updated:Zr,beforeDestroy:Zr,beforeUnmount:Zr,destroyed:Zr,unmounted:Zr,activated:Zr,deactivated:Zr,errorCaptured:Zr,serverPrefetch:Zr,components:Qr,directives:Qr,watch:ei,provide:Jr,inject:Yr};function Jr(e,t){return t?e?function(){return _(T(e)?e.call(this,this):e,T(t)?t.call(this,this):t)}:t:e}function Yr(e,t){return Qr(Xr(e),Xr(t))}function Xr(e){if(x(e)){let t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Zr(e,t){return e?[...new Set([].concat(e,t))]:t}function Qr(e,t){return e?_(Object.create(null),e,t):t}function $r(e,t){return e?x(e)&&x(t)?[...new Set([...e,...t])]:_(Object.create(null),zr(e),zr(t??{})):t}function ei(e,t){if(!e)return t;if(!t)return e;let n=_(Object.create(null),e);for(let r in t)n[r]=Zr(e[r],t[r]);return n}function ti(){return{app:null,config:{isNativeTag:m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}var ni=0;function ri(e,t){return function(n,r=null){T(n)||(n=_({},n)),r!=null&&!O(r)&&(r=null);let i=ti(),a=new WeakSet,o=[],s=!1,c=i.app={_uid:ni++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:za,get config(){return i.config},set config(e){},use(e,...t){return a.has(e)||(e&&T(e.install)?(a.add(e),e.install(c,...t)):T(e)&&(a.add(e),e(c,...t))),c},mixin(e){return i.mixins.includes(e)||i.mixins.push(e),c},component(e,t){return t?(i.components[e]=t,c):i.components[e]},directive(e,t){return t?(i.directives[e]=t,c):i.directives[e]},mount(a,o,l){if(!s){let u=c._ceVNode||U(n,r);return u.appContext=i,l===!0?l=`svg`:l===!1&&(l=void 0),o&&t?t(u,a):e(u,a,l),s=!0,c._container=a,a.__vue_app__=c,Ia(u.component)}},onUnmount(e){o.push(e)},unmount(){s&&(_n(o,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return i.provides[e]=t,c},runWithContext(e){let t=ii;ii=c;try{return e()}finally{ii=t}}};return c}}var ii=null,ai=(e,t)=>t===`modelValue`||t===`model-value`?e.modelModifiers:e[`${t}Modifiers`]||e[`${ce(t)}Modifiers`]||e[`${ue(t)}Modifiers`];function oi(e,t,...n){if(e.isUnmounted)return;let r=e.vnode.props||d,i=n,a=t.startsWith(`update:`),o=a&&ai(r,t.slice(7));o&&(o.trim&&(i=n.map(e=>E(e)?e.trim():e)),o.number&&(i=n.map(ge)));let s,c=r[s=fe(t)]||r[s=fe(ce(t))];!c&&a&&(c=r[s=fe(ue(t))]),c&&_n(c,e,6,i);let l=r[s+`Once`];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,_n(l,e,6,i)}}var si=new WeakMap;function ci(e,t,n=!1){let r=n?si:t.emitsCache,i=r.get(e);if(i!==void 0)return i;let a=e.emits,o={},s=!1;if(!T(e)){let r=e=>{let n=ci(e,t,!0);n&&(s=!0,_(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return!a&&!s?(O(e)&&r.set(e,null),null):(x(a)?a.forEach(e=>o[e]=null):_(o,a),O(e)&&r.set(e,o),o)}function li(e,t){return!e||!h(t)?!1:(t=t.slice(2),t=t===`Once`?t:t.replace(/Once$/,``),b(e,t[0].toLowerCase()+t.slice(1))||b(e,ue(t))||b(e,t))}function ui(e){let{type:t,vnode:n,proxy:r,withProxy:i,propsOptions:[a],slots:o,attrs:s,emit:c,render:l,renderCache:u,props:d,data:f,setupState:p,ctx:m,inheritAttrs:h}=e,_=Rn(e),v,y;try{if(n.shapeFlag&4){let e=i||r,t=e;v=fa(l.call(t,e,u,d,p,f,m)),y=s}else{let e=t;v=fa(e.length>1?e(d,{attrs:s,slots:o,emit:c}):e(d,null)),y=t.props?s:di(s)}}catch(t){Zi.length=0,vn(t,e,1),v=U(Yi)}let b=v;if(y&&h!==!1){let e=Object.keys(y),{shapeFlag:t}=b;e.length&&t&7&&(a&&e.some(g)&&(y=fi(y,a)),b=ua(b,y,!1,!0))}return n.dirs&&(b=ua(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&ur(b,n.transition),v=b,Rn(_),v}var di=e=>{let t;for(let n in e)(n===`class`||n===`style`||h(n))&&((t||={})[n]=e[n]);return t},fi=(e,t)=>{let n={};for(let r in e)(!g(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function pi(e,t,n){let{props:r,children:i,component:a}=e,{props:o,children:s,patchFlag:c}=t,l=a.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?mi(r,o,l):!!o;if(c&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let n=e[t];if(hi(o,r,n)&&!li(l,n))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:r===o?!1:r?!o||mi(r,o,l):!!o;return!1}function mi(e,t,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){let a=r[i];if(hi(t,e,a)&&!li(n,a))return!0}return!1}function hi(e,t,n){let r=e[n],i=t[n];return n===`style`&&O(r)&&O(i)?!Oe(r,i):r!==i}function gi({vnode:e,parent:t,suspense:n},r){for(;t;){let n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.suspense.vnode.el=n.el=r,e=n),n===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}var _i={},vi=()=>Object.create(_i),yi=e=>Object.getPrototypeOf(e)===_i;function bi(e,t,n,r=!1){let i={},a=vi();e.propsDefaults=Object.create(null),Si(e,t,i,a);for(let t in e.propsOptions[0])t in i||(i[t]=void 0);n?e.props=r?i:Gt(i):e.type.props?e.props=i:e.props=a,e.attrs=a}function xi(e,t,n,r){let{props:i,attrs:a,vnode:{patchFlag:o}}=e,s=N(i),[c]=e.propsOptions,l=!1;if((r||o>0)&&!(o&16)){if(o&8){let n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];if(li(e.emitsOptions,o))continue;let u=t[o];if(c)if(b(a,o))u!==a[o]&&(a[o]=u,l=!0);else{let t=ce(o);i[t]=Ci(c,s,t,u,e,!1)}else u!==a[o]&&(a[o]=u,l=!0)}}}else{Si(e,t,i,a)&&(l=!0);let r;for(let a in s)(!t||!b(t,a)&&((r=ue(a))===a||!b(t,r)))&&(c?n&&(n[a]!==void 0||n[r]!==void 0)&&(i[a]=Ci(c,s,a,void 0,e,!0)):delete i[a]);if(a!==s)for(let e in a)(!t||!b(t,e))&&(delete a[e],l=!0)}l&&ut(e.attrs,`set`,``)}function Si(e,t,n,r){let[i,a]=e.propsOptions,o=!1,s;if(t)for(let c in t){if(k(c))continue;let l=t[c],u;i&&b(i,u=ce(c))?!a||!a.includes(u)?n[u]=l:(s||={})[u]=l:li(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(a){let t=N(n),r=s||d;for(let o=0;o<a.length;o++){let s=a[o];n[s]=Ci(i,t,s,r[s],e,!b(r,s))}}return o}function Ci(e,t,n,r,i,a){let o=e[n];if(o!=null){let e=b(o,`default`);if(e&&r===void 0){let e=o.default;if(o.type!==Function&&!o.skipFactory&&T(e)){let{propsDefaults:a}=i;if(n in a)r=a[n];else{let o=wa(i);r=a[n]=e.call(null,t),o()}}else r=e;i.ce&&i.ce._setProp(n,r)}o[0]&&(a&&!e?r=!1:o[1]&&(r===``||r===ue(n))&&(r=!0))}return r}var wi=new WeakMap;function Ti(e,t,n=!1){let r=n?wi:t.propsCache,i=r.get(e);if(i)return i;let a=e.props,o={},s=[],c=!1;if(!T(e)){let r=e=>{c=!0;let[n,r]=Ti(e,t,!0);_(o,n),r&&s.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!a&&!c)return O(e)&&r.set(e,f),f;if(x(a))for(let e=0;e<a.length;e++){let t=ce(a[e]);Ei(t)&&(o[t]=d)}else if(a)for(let e in a){let t=ce(e);if(Ei(t)){let n=a[e],r=o[t]=x(n)||T(n)?{type:n}:_({},n),i=r.type,c=!1,l=!0;if(x(i))for(let e=0;e<i.length;++e){let t=i[e],n=T(t)&&t.name;if(n===`Boolean`){c=!0;break}else n===`String`&&(l=!1)}else c=T(i)&&i.name===`Boolean`;r[0]=c,r[1]=l,(c||b(r,`default`))&&s.push(t)}}let l=[o,s];return O(e)&&r.set(e,l),l}function Ei(e){return e[0]!==`$`&&!k(e)}var Di=e=>e===`_`||e===`_ctx`||e===`$stable`,Oi=e=>x(e)?e.map(fa):[fa(e)],ki=(e,t,n)=>{if(t._n)return t;let r=zn((...e)=>Oi(t(...e)),n);return r._c=!1,r},Ai=(e,t,n)=>{let r=e._ctx;for(let n in e){if(Di(n))continue;let i=e[n];if(T(i))t[n]=ki(n,i,r);else if(i!=null){let e=Oi(i);t[n]=()=>e}}},ji=(e,t)=>{let n=Oi(t);e.slots.default=()=>n},Mi=(e,t,n)=>{for(let r in t)(n||!Di(r))&&(e[r]=t[r])},Ni=(e,t,n)=>{let r=e.slots=vi();if(e.vnode.shapeFlag&32){let e=t._;e?(Mi(r,t,n),n&&he(r,`_`,e,!0)):Ai(t,r)}else t&&ji(e,t)},Pi=(e,t,n)=>{let{vnode:r,slots:i}=e,a=!0,o=d;if(r.shapeFlag&32){let e=t._;e?n&&e===1?a=!1:Mi(i,t,n):(a=!t.$stable,Ai(t,i)),o=t}else t&&(ji(e,t),o={default:1});if(a)for(let e in i)!Di(e)&&o[e]==null&&delete i[e]},Fi=qi;function Ii(e){return Li(e)}function Li(e,t){let n=ve();n.__VUE__=!0;let{insert:r,remove:i,patchProp:a,createElement:o,createText:s,createComment:c,setText:l,setElementText:u,parentNode:m,nextSibling:h,setScopeId:g=p,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,a=null,o=void 0,s=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!aa(e,t)&&(r=ye(e),fe(e,i,a,!0),e=null),t.patchFlag===-2&&(c=!1,t.dynamicChildren=null);let{type:l,ref:u,shapeFlag:d}=t;switch(l){case Ji:y(e,t,n,r);break;case Yi:b(e,t,n,r);break;case Xi:e??x(t,n,r,o);break;case z:ne(e,t,n,r,i,a,o,s,c);break;default:d&1?w(e,t,n,r,i,a,o,s,c):d&6?re(e,t,n,r,i,a,o,s,c):(d&64||d&128)&&l.process(e,t,n,r,i,a,o,s,c,Se)}u!=null&&i?mr(u,e&&e.ref,a,t||e,!t):u==null&&e&&e.ref!=null&&mr(e.ref,null,a,e,!0)},y=(e,t,n,i)=>{if(e==null)r(t.el=s(t.children),n,i);else{let n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,i)=>{e==null?r(t.el=c(t.children||``),n,i):t.el=e.el},x=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r,e.el,e.anchor)},S=({el:e,anchor:t},n,i)=>{let a;for(;e&&e!==t;)a=h(e),r(e,n,i),e=a;r(t,n,i)},C=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),i(e),e=n;i(t)},w=(e,t,n,r,i,a,o,s,c)=>{if(t.type===`svg`?o=`svg`:t.type===`math`&&(o=`mathml`),e==null)T(t,n,r,i,a,o,s,c);else{let n=e.el&&e.el._isVueCE?e.el:null;try{n&&n._beginPatch(),O(e,t,i,a,o,s,c)}finally{n&&n._endPatch()}}},T=(e,t,n,i,s,c,l,d)=>{let f,p,{props:m,shapeFlag:h,transition:g,dirs:_}=e;if(f=e.el=o(e.type,c,m&&m.is,m),h&8?u(f,e.children):h&16&&D(e.children,f,null,i,s,Ri(e,c),l,d),_&&Bn(e,null,i,`created`),E(f,e,e.scopeId,l,i),m){for(let e in m)e!==`value`&&!k(e)&&a(f,e,null,m[e],c,i);`value`in m&&a(f,`value`,null,m.value,c),(p=m.onVnodeBeforeMount)&&ga(p,i,e)}_&&Bn(e,null,i,`beforeMount`);let v=Bi(s,g);v&&g.beforeEnter(f),r(f,t,n),((p=m&&m.onVnodeMounted)||v||_)&&Fi(()=>{try{p&&ga(p,i,e),v&&g.enter(f),_&&Bn(e,null,i,`mounted`)}finally{}},s)},E=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let t=0;t<r.length;t++)g(e,r[t]);if(i){let n=i.subTree;if(t===n||Ki(n.type)&&(n.ssContent===t||n.ssFallback===t)){let t=i.vnode;E(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},D=(e,t,n,r,i,a,o,s,c=0)=>{for(let l=c;l<e.length;l++){let c=e[l]=s?pa(e[l]):fa(e[l]);v(null,c,t,n,r,i,a,o,s)}},O=(e,t,n,r,i,o,s)=>{let c=t.el=e.el,{patchFlag:l,dynamicChildren:f,dirs:p}=t;l|=e.patchFlag&16;let m=e.props||d,h=t.props||d,g;if(n&&zi(n,!1),(g=h.onVnodeBeforeUpdate)&&ga(g,n,t,e),p&&Bn(t,e,n,`beforeUpdate`),n&&zi(n,!0),f&&(!e.dynamicChildren||e.dynamicChildren.length!==f.length)&&(l=0,s=!1,f=null),(m.innerHTML&&h.innerHTML==null||m.textContent&&h.textContent==null)&&u(c,``),f?ee(e.dynamicChildren,f,c,n,r,Ri(t,i),o):s||ce(e,t,c,null,n,r,Ri(t,i),o,!1),l>0){if(l&16)te(c,m,h,n,i);else if(l&2&&m.class!==h.class&&a(c,`class`,null,h.class,i),l&4&&a(c,`style`,m.style,h.style,i),l&8){let e=t.dynamicProps;for(let t=0;t<e.length;t++){let r=e[t],o=m[r],s=h[r];(s!==o||r===`value`)&&a(c,r,o,s,i,n)}}l&1&&e.children!==t.children&&u(c,t.children)}else!s&&f==null&&te(c,m,h,n,i);((g=h.onVnodeUpdated)||p)&&Fi(()=>{g&&ga(g,n,t,e),p&&Bn(t,e,n,`updated`)},r)},ee=(e,t,n,r,i,a,o)=>{for(let s=0;s<t.length;s++){let c=e[s],l=t[s],u=c.el&&(c.type===z||!aa(c,l)||c.shapeFlag&198)?m(c.el):n;v(c,l,u,null,r,i,a,o,!0)}},te=(e,t,n,r,i)=>{if(t!==n){if(t!==d)for(let o in t)!k(o)&&!(o in n)&&a(e,o,t[o],null,i,r);for(let o in n){if(k(o))continue;let s=n[o],c=t[o];s!==c&&o!==`value`&&a(e,o,c,s,i,r)}`value`in n&&a(e,`value`,t.value,n.value,i)}},ne=(e,t,n,i,a,o,c,l,u)=>{let d=t.el=e?e.el:s(``),f=t.anchor=e?e.anchor:s(``),{patchFlag:p,dynamicChildren:m,slotScopeIds:h}=t;h&&(l=l?l.concat(h):h),e==null?(r(d,n,i),r(f,n,i),D(t.children||[],n,f,a,o,c,l,u)):p>0&&p&64&&m&&e.dynamicChildren&&e.dynamicChildren.length===m.length?(ee(e.dynamicChildren,m,n,a,o,c,l),(t.key!=null||a&&t===a.subTree)&&Vi(e,t,!0)):ce(e,t,n,f,a,o,c,l,u)},re=(e,t,n,r,i,a,o,s,c)=>{t.slotScopeIds=s,e==null?t.shapeFlag&512?i.ctx.activate(t,n,r,o,c):ie(t,n,r,i,a,o,c):ae(e,t,c)},ie=(e,t,n,r,i,a,o)=>{let s=e.component=ya(e,r,i);if(_r(e)&&(s.ctx.renderer=Se),Oa(s,!1,o),s.asyncDep){if(i&&i.registerDep(s,oe,o),!e.el){let r=s.subTree=U(Yi);b(null,r,t,n),e.placeholder=r.el}}else oe(s,e,t,n,i,a,o)},ae=(e,t,n)=>{let r=t.component=e.component;if(pi(e,t,n))if(r.asyncDep&&!r.asyncResolved){se(r,t,n);return}else r.next=t,r.update();else t.el=e.el,r.vnode=t},oe=(e,t,n,r,i,a,o)=>{let s=()=>{if(e.isMounted){let{next:t,bu:n,u:r,parent:s,vnode:c}=e;{let n=Ui(e);if(n){t&&(t.el=c.el,se(e,t,o)),n.asyncDep.then(()=>{Fi(()=>{e.isUnmounted||l()},i)});return}}let u=t,d;zi(e,!1),t?(t.el=c.el,se(e,t,o)):t=c,n&&me(n),(d=t.props&&t.props.onVnodeBeforeUpdate)&&ga(d,s,t,c),zi(e,!0);let f=ui(e),p=e.subTree;e.subTree=f,v(p,f,m(p.el),ye(p),e,i,a),t.el=f.el,u===null&&gi(e,f.el),r&&Fi(r,i),(d=t.props&&t.props.onVnodeUpdated)&&Fi(()=>ga(d,s,t,c),i)}else{let o,{el:s,props:c}=t,{bm:l,m:u,parent:d,root:f,type:p}=e,m=gr(t);if(zi(e,!1),l&&me(l),!m&&(o=c&&c.onVnodeBeforeMount)&&ga(o,d,t),zi(e,!0),s&&A){let t=()=>{e.subTree=ui(e),A(s,e.subTree,e,i,null)};m&&p.__asyncHydrate?p.__asyncHydrate(s,e,t):t()}else{f.ce&&f.ce._hasShadowRoot()&&f.ce._injectChildStyle(p,e.parent?e.parent.type:void 0);let o=e.subTree=ui(e);v(null,o,n,r,e,i,a),t.el=o.el}if(u&&Fi(u,i),!m&&(o=c&&c.onVnodeMounted)){let e=t;Fi(()=>ga(o,d,e),i)}(t.shapeFlag&256||d&&gr(d.vnode)&&d.vnode.shapeFlag&256)&&e.a&&Fi(e.a,i),e.isMounted=!0,t=n=r=null}};e.scope.on();let c=e.effect=new Le(s);e.scope.off();let l=e.update=c.run.bind(c),u=e.job=c.runIfDirty.bind(c);u.i=e,u.id=e.uid,c.scheduler=()=>kn(u),zi(e,!0),l()},se=(e,t,n)=>{t.component=e;let r=e.vnode.props;e.vnode=t,e.next=null,xi(e,t.props,r,n),Pi(e,t.children,n),Qe(),Mn(e),$e()},ce=(e,t,n,r,i,a,o,s,c=!1)=>{let l=e&&e.children,d=e?e.shapeFlag:0,f=t.children,{patchFlag:p,shapeFlag:m}=t;if(p>0){if(p&128){ue(l,f,n,r,i,a,o,s,c);return}else if(p&256){le(l,f,n,r,i,a,o,s,c);return}}m&8?(d&16&&_e(l,i,a),f!==l&&u(n,f)):d&16?m&16?ue(l,f,n,r,i,a,o,s,c):_e(l,i,a,!0):(d&8&&u(n,``),m&16&&D(f,n,r,i,a,o,s,c))},le=(e,t,n,r,i,a,o,s,c)=>{e||=f,t||=f;let l=e.length,u=t.length,d=Math.min(l,u),p;for(p=0;p<d;p++){let r=t[p]=c?pa(t[p]):fa(t[p]);v(e[p],r,n,null,i,a,o,s,c)}l>u?_e(e,i,a,!0,!1,d):D(t,n,r,i,a,o,s,c,d)},ue=(e,t,n,r,i,a,o,s,c)=>{let l=0,u=t.length,d=e.length-1,p=u-1;for(;l<=d&&l<=p;){let r=e[l],u=t[l]=c?pa(t[l]):fa(t[l]);if(aa(r,u))v(r,u,n,null,i,a,o,s,c);else break;l++}for(;l<=d&&l<=p;){let r=e[d],l=t[p]=c?pa(t[p]):fa(t[p]);if(aa(r,l))v(r,l,n,null,i,a,o,s,c);else break;d--,p--}if(l>d){if(l<=p){let e=p+1,d=e<u?t[e].el:r;for(;l<=p;)v(null,t[l]=c?pa(t[l]):fa(t[l]),n,d,i,a,o,s,c),l++}}else if(l>p)for(;l<=d;)fe(e[l],i,a,!0),l++;else{let m=l,h=l,g=new Map;for(l=h;l<=p;l++){let e=t[l]=c?pa(t[l]):fa(t[l]);e.key!=null&&g.set(e.key,l)}let _,y=0,b=p-h+1,x=!1,S=0,C=Array(b);for(l=0;l<b;l++)C[l]=0;for(l=m;l<=d;l++){let r=e[l];if(y>=b){fe(r,i,a,!0);continue}let u;if(r.key!=null)u=g.get(r.key);else for(_=h;_<=p;_++)if(C[_-h]===0&&aa(r,t[_])){u=_;break}u===void 0?fe(r,i,a,!0):(C[u-h]=l+1,u>=S?S=u:x=!0,v(r,t[u],n,null,i,a,o,s,c),y++)}let w=x?Hi(C):f;for(_=w.length-1,l=b-1;l>=0;l--){let e=h+l,d=t[e],f=t[e+1],p=e+1<u?f.el||Gi(f):r;C[l]===0?v(null,d,n,p,i,a,o,s,c):x&&(_<0||l!==w[_]?de(d,n,p,2):_--)}}},de=(e,t,n,a,o=null)=>{let{el:s,type:c,transition:l,children:u,shapeFlag:d}=e;if(d&6){de(e.component.subTree,t,n,a);return}if(d&128){e.suspense.move(t,n,a);return}if(d&64){c.move(e,t,n,Se);return}if(c===z){r(s,t,n);for(let e=0;e<u.length;e++)de(u[e],t,n,a);r(e.anchor,t,n);return}if(c===Xi){S(e,t,n);return}if(a!==2&&d&1&&l)if(a===0)l.persisted&&!s[lr]?r(s,t,n):(l.beforeEnter(s),r(s,t,n),Fi(()=>l.enter(s),o));else{let{leave:a,delayLeave:o,afterLeave:c}=l,u=()=>{e.ctx.isUnmounted?i(s):r(s,t,n)},d=()=>{let e=s._isLeaving||!!s[lr];s._isLeaving&&s[lr](!0),l.persisted&&!e?u():a(s,()=>{u(),c&&c()})};o?o(s,u,d):d()}else r(s,t,n)},fe=(e,t,n,r=!1,i=!1)=>{let{type:a,props:o,ref:s,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:d,dirs:f,cacheIndex:p,memo:m}=e;if(d===-2&&(i=!1),s!=null&&(Qe(),mr(s,null,n,e,!0),$e()),p!=null&&(t.renderCache[p]=void 0),u&256){t.ctx.deactivate(e);return}let h=u&1&&f,g=!gr(e),_;if(g&&(_=o&&o.onVnodeBeforeUnmount)&&ga(_,t,e),u&6)ge(e.component,n,r);else{if(u&128){e.suspense.unmount(n,r);return}h&&Bn(e,null,t,`beforeUnmount`),u&64?e.type.remove(e,t,n,Se,r):l&&!l.hasOnce&&(a!==z||d>0&&d&64)?_e(l,t,n,!1,!0):(a===z&&d&384||!i&&u&16)&&_e(c,t,n),r&&pe(e)}let v=m!=null&&p==null;(g&&(_=o&&o.onVnodeUnmounted)||h||v)&&Fi(()=>{_&&ga(_,t,e),h&&Bn(e,null,t,`unmounted`),v&&(e.el=null)},n)},pe=e=>{let{type:t,el:n,anchor:r,transition:a}=e;if(t===z){he(n,r);return}if(t===Xi){C(e);return}let o=()=>{i(n),a&&!a.persisted&&a.afterLeave&&a.afterLeave()};if(e.shapeFlag&1&&a&&!a.persisted){let{leave:t,delayLeave:r}=a,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},he=(e,t)=>{let n;for(;e!==t;)n=h(e),i(e),e=n;i(t)},ge=(e,t,n)=>{let{bum:r,scope:i,job:a,subTree:o,um:s,m:c,a:l}=e;Wi(c),Wi(l),r&&me(r),i.stop(),a&&(a.flags|=8,fe(o,e,t,n)),s&&Fi(s,t),Fi(()=>{e.isUnmounted=!0},t)},_e=(e,t,n,r=!1,i=!1,a=0)=>{for(let o=a;o<e.length;o++)fe(e[o],t,n,r,i)},ye=e=>{if(e.shapeFlag&6)return ye(e.component.subTree);if(e.shapeFlag&128)return e.suspense.next();let t=h(e.anchor||e.el),n=t&&t[Xn];return n?h(n):t},be=!1,xe=(e,t,n)=>{let r;e==null?t._vnode&&(fe(t._vnode,null,null,!0),r=t._vnode.component):v(t._vnode||null,e,t,null,null,null,n),t._vnode=e,be||=(be=!0,Mn(r),Nn(),!1)},Se={p:v,um:fe,m:de,r:pe,mt:ie,mc:D,pc:ce,pbc:ee,n:ye,o:e},Ce,A;return t&&([Ce,A]=t(Se)),{render:xe,hydrate:Ce,createApp:ri(xe,Ce)}}function Ri({type:e,props:t},n){return n===`svg`&&e===`foreignObject`||n===`mathml`&&e===`annotation-xml`&&t&&t.encoding&&t.encoding.includes(`html`)?void 0:n}function zi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Bi(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vi(e,t,n=!1){let r=e.children,i=t.children;if(x(r)&&x(i))for(let e=0;e<r.length;e++){let t=r[e],a=i[e];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[e]=pa(i[e]),a.el=t.el),!n&&a.patchFlag!==-2&&Vi(t,a)),a.type===Ji&&(a.patchFlag===-1&&(a=i[e]=pa(a)),a.el=t.el),a.type===Yi&&!a.el&&(a.el=t.el)}}function Hi(e){let t=e.slice(),n=[0],r,i,a,o,s,c=e.length;for(r=0;r<c;r++){let c=e[r];if(c!==0){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}for(a=0,o=n.length-1;a<o;)s=a+o>>1,e[n[s]]<c?a=s+1:o=s;c<e[n[a]]&&(a>0&&(t[r]=n[a-1]),n[a]=r)}}for(a=n.length,o=n[a-1];a-->0;)n[a]=o,o=t[o];return n}function Ui(e){let t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ui(t)}function Wi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Gi(e){if(e.placeholder)return e.placeholder;let t=e.component;return t?Gi(t.subTree):null}var Ki=e=>e.__isSuspense;function qi(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):jn(e)}var z=Symbol.for(`v-fgt`),Ji=Symbol.for(`v-txt`),Yi=Symbol.for(`v-cmt`),Xi=Symbol.for(`v-stc`),Zi=[],Qi=null;function B(e=!1){Zi.push(Qi=e?null:[])}function $i(){Zi.pop(),Qi=Zi[Zi.length-1]||null}var ea=1;function ta(e,t=!1){ea+=e,e<0&&Qi&&t&&(Qi.hasOnce=!0)}function na(e){return e.dynamicChildren=ea>0?Qi||f:null,$i(),ea>0&&Qi&&Qi.push(e),e}function V(e,t,n,r,i,a){return na(H(e,t,n,r,i,a,!0))}function ra(e,t,n,r,i){return na(U(e,t,n,r,i,!0))}function ia(e){return e?e.__v_isVNode===!0:!1}function aa(e,t){return e.type===t.type&&e.key===t.key}var oa=({key:e})=>e??null,sa=({ref:e,ref_key:t,ref_for:n})=>(typeof e==`number`&&(e=``+e),e==null?null:E(e)||tn(e)||T(e)?{i:In,r:e,k:t,f:!!n}:e);function H(e,t=null,n=null,r=0,i=null,a=e===z?0:1,o=!1,s=!1){let c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&oa(t),ref:t&&sa(t),scopeId:Ln,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:In};return s?(ma(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=E(n)?8:16),ea>0&&!o&&Qi&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Qi.push(c),c}var U=ca;function ca(e,t=null,n=null,r=0,i=null,a=!1){if((!e||e===Pr)&&(e=Yi),ia(e)){let r=ua(e,t,!0);return n&&ma(r,n),ea>0&&!a&&Qi&&(r.shapeFlag&6?Qi[Qi.indexOf(e)]=r:Qi.push(r)),r.patchFlag=-2,r}if(La(e)&&(e=e.__vccOpts),t){t=la(t);let{class:e,style:n}=t;e&&!E(e)&&(t.class=A(e)),O(n)&&(Zt(n)&&!x(n)&&(n=_({},n)),t.style=ye(n))}let o=E(e)?1:Ki(e)?128:Zn(e)?64:O(e)?4:T(e)?2:0;return H(e,t,n,r,i,o,a,!0)}function la(e){return e?Zt(e)||yi(e)?_({},e):e:null}function ua(e,t,n=!1,r=!1){let{props:i,ref:a,patchFlag:o,children:s,transition:c}=e,l=t?ha(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&oa(l),ref:t&&t.ref?n&&a?x(a)?a.concat(sa(t)):[a,sa(t)]:sa(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==z?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ua(e.ssContent),ssFallback:e.ssFallback&&ua(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&r&&ur(u,c.clone(u)),u}function W(e=` `,t=0){return U(Ji,null,e,t)}function da(e,t){let n=U(Xi,null,e);return n.staticCount=t,n}function G(e=``,t=!1){return t?(B(),ra(Yi,null,e)):U(Yi,null,e)}function fa(e){return e==null||typeof e==`boolean`?U(Yi):x(e)?U(z,null,e.slice()):ia(e)?pa(e):U(Ji,null,String(e))}function pa(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ua(e)}function ma(e,t){let n=0,{shapeFlag:r}=e;if(t==null)t=null;else if(x(t))n=16;else if(typeof t==`object`)if(r&65){let n=t.default;n&&(n._c&&(n._d=!1),ma(e,n()),n._c&&(n._d=!0));return}else{n=32;let r=t._;!r&&!yi(t)?t._ctx=In:r===3&&In&&(In.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(T(t)){if(r&65){ma(e,{default:t});return}t={default:t,_ctx:In},n=32}else t=String(t),r&64?(n=16,t=[W(t)]):n=8;e.children=t,e.shapeFlag|=n}function ha(...e){let t={};for(let n=0;n<e.length;n++){let r=e[n];for(let e in r)if(e===`class`)t.class!==r.class&&(t.class=A([t.class,r.class]));else if(e===`style`)t.style=ye([t.style,r.style]);else if(h(e)){let n=t[e],i=r[e];i&&n!==i&&!(x(n)&&n.includes(i))?t[e]=n?[].concat(n,i):i:i==null&&n==null&&!g(e)&&(t[e]=i)}else e!==``&&(t[e]=r[e])}return t}function ga(e,t,n,r=null){_n(e,t,7,[n,r])}var _a=ti(),va=0;function ya(e,t,n){let r=e.type,i=(t?t.appContext:e.appContext)||_a,a={uid:va++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Pe(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:[``,0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ti(r,i),emitsOptions:ci(r,i),emit:null,emitted:null,propsDefaults:d,inheritAttrs:r.inheritAttrs,ctx:d,data:d,props:d,attrs:d,slots:d,refs:d,setupState:d,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=oi.bind(null,a),e.ce&&e.ce(a),a}var ba=null,xa=()=>ba||In,Sa,Ca;{let e=ve(),t=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),e=>{r.length>1?r.forEach(t=>t(e)):r[0](e)}};Sa=t(`__VUE_INSTANCE_SETTERS__`,e=>ba=e),Ca=t(`__VUE_SSR_SETTERS__`,e=>Da=e)}var wa=e=>{let t=ba;return Sa(e),e.scope.on(),()=>{e.scope.off(),Sa(t)}},Ta=()=>{ba&&ba.scope.off(),Sa(null)};function Ea(e){return e.vnode.shapeFlag&4}var Da=!1;function Oa(e,t=!1,n=!1){t&&Ca(t);let{props:r,children:i}=e.vnode,a=Ea(e);bi(e,r,a,t),Ni(e,i,n||t);let o=a?ka(e,t):void 0;return t&&Ca(!1),o}function ka(e,t){let n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Rr);let{setup:r}=n;if(r){Qe();let n=e.setupContext=r.length>1?Fa(e):null,i=wa(e),a=gn(r,e,0,[e.props,n]),o=ee(a);if($e(),i(),(o||e.sp)&&!gr(e)&&dr(e),o){if(a.then(Ta,Ta),t)return a.then(n=>{Aa(e,n,t)}).catch(t=>{vn(t,e,0)});e.asyncDep=a}else Aa(e,a,t)}else Na(e,t)}function Aa(e,t,n){T(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:O(t)&&(e.setupState=sn(t)),Na(e,n)}var ja,Ma;function Na(e,t,n){let r=e.type;if(!e.render){if(!t&&ja&&!r.render){let t=r.template||Gr(e).template;if(t){let{isCustomElement:n,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:o}=r;r.render=ja(t,_(_({isCustomElement:n,delimiters:a},i),o))}}e.render=r.render||p,Ma&&Ma(e)}{let t=wa(e);Qe();try{Vr(e)}finally{$e(),t()}}}var Pa={get(e,t){return lt(e,`get`,``),e[t]}};function Fa(e){return{attrs:new Proxy(e.attrs,Pa),slots:e.slots,emit:e.emit,expose:t=>{e.exposed=t||{}}}}function Ia(e){return e.exposed?e.exposeProxy||=new Proxy(sn(Qt(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ir)return Ir[n](e)},has(e,t){return t in e||t in Ir}}):e.proxy}function La(e){return T(e)&&`__vccOpts`in e}var K=(e,t)=>ln(e,t,Da);function Ra(e,t,n){try{ta(-1);let r=arguments.length;return r===2?O(t)&&!x(t)?ia(t)?U(e,null,[t]):U(e,t):U(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ia(n)&&(n=[n]),U(e,t,n))}finally{ta(1)}}var za=`3.5.40`,Ba=void 0,Va=typeof window<`u`&&window.trustedTypes;if(Va)try{Ba=Va.createPolicy(`vue`,{createHTML:e=>e})}catch{}var Ha=Ba?e=>Ba.createHTML(e):e=>e,Ua=`http://www.w3.org/2000/svg`,Wa=`http://www.w3.org/1998/Math/MathML`,Ga=typeof document<`u`?document:null,Ka=Ga&&Ga.createElement(`template`),qa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?Ga.createElementNS(Ua,e):t===`mathml`?Ga.createElementNS(Wa,e):n?Ga.createElement(e,{is:n}):Ga.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>Ga.createTextNode(e),createComment:e=>Ga.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ga.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ka.innerHTML=Ha(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ka.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ja=Symbol(`_vtc`);function Ya(e,t,n){let r=e[Ja];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Xa=Symbol(`_vod`),Za=Symbol(`_vsh`),Qa=Symbol(``),$a=/(?:^|;)\s*display\s*:/;function eo(e,t,n){let r=e.style,i=E(n),a=!1;if(n&&!i){if(t)if(E(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??no(r,t,``)}else for(let e in t)n[e]??no(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?no(r,i,``):oo(e,i,!E(t)&&t?t[i]:void 0,o)||no(r,i,o)}}else if(i){if(t!==n){let e=r[Qa];e&&(n+=`;`+e),r.cssText=n,a=$a.test(n)}}else t&&e.removeAttribute(`style`);Xa in e&&(e[Xa]=a?r.display:``,e[Za]&&(r.display=`none`))}var to=/\s*!important$/;function no(e,t,n){if(x(n))n.forEach(n=>no(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=ao(e,t);to.test(n)?e.setProperty(ue(r),n.replace(to,``),`important`):e[r]=n}}var ro=[`Webkit`,`Moz`,`ms`],io={};function ao(e,t){let n=io[t];if(n)return n;let r=ce(t);if(r!==`filter`&&r in e)return io[t]=r;r=de(r);for(let n=0;n<ro.length;n++){let i=ro[n]+r;if(i in e)return io[t]=i}return t}function oo(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&E(r)&&n===r}var so=`http://www.w3.org/1999/xlink`;function co(e,t,n,r,i,a=Te(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(so,t.slice(6,t.length)):e.setAttributeNS(so,t,n):n==null||a&&!Ee(n)?e.removeAttribute(t):e.setAttribute(t,a?``:D(n)?String(n):n)}function lo(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?Ha(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=Ee(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function uo(e,t,n,r){e.addEventListener(t,n,r)}function fo(e,t,n,r){e.removeEventListener(t,n,r)}var po=Symbol(`_vei`);function mo(e,t,n,r,i=null){let a=e[po]||(e[po]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=_o(t);r?uo(e,n,a[t]=xo(r,i),s):o&&(fo(e,n,o,s),a[t]=void 0)}}var ho=/(Once|Passive|Capture)$/,go=/^on:?(?:Once|Passive|Capture)$/;function _o(e){let t,n;for(;(n=e.match(ho))&&!go.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):ue(e.slice(2)),t]}var vo=0,yo=Promise.resolve(),bo=()=>vo||=(yo.then(()=>vo=0),Date.now());function xo(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(x(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&_n(e,t,5,a)}}else _n(r,t,5,[e])};return n.value=e,n.attached=bo(),n}var So=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Co=(e,t,n,r,i,a)=>{let o=i===`svg`;t===`class`?Ya(e,r,o):t===`style`?eo(e,n,r):h(t)?g(t)||mo(e,t,n,r,a):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):wo(e,t,r,o))?(lo(e,t,r),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&co(e,t,r,o,a,t!==`value`)):e._isVueCE&&(To(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!E(r)))?lo(e,ce(t),r,a,t):(t===`true-value`?e._trueValue=r:t===`false-value`&&(e._falseValue=r),co(e,t,r,o))};function wo(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&So(t)&&T(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return So(t)&&E(n)?!1:t in e}function To(e,t){let n=e._def.props;if(!n)return!1;let r=ce(t);return Array.isArray(n)?n.some(e=>ce(e)===r):Object.keys(n).some(e=>ce(e)===r)}var Eo=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return x(t)?e=>me(t,e):t};function Do(e){e.target.composing=!0}function Oo(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var ko=Symbol(`_assign`);function Ao(e,t,n){return t&&(e=e.trim()),n&&(e=ge(e)),e}var q={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[ko]=Eo(i);let a=r||i.props&&i.props.type===`number`;uo(e,t?`change`:`input`,t=>{t.target.composing||e[ko](Ao(e.value,n,a))}),(n||a)&&uo(e,`change`,()=>{e.value=Ao(e.value,n,a)}),t||(uo(e,`compositionstart`,Do),uo(e,`compositionend`,Oo),uo(e,`change`,Oo))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[ko]=Eo(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?ge(e.value):e.value,c=t??``;if(s===c)return;let l=e.getRootNode();(l instanceof Document||l instanceof ShadowRoot)&&l.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===c)||(e.value=c)}},jo={deep:!0,created(e,t,n){e[ko]=Eo(n),uo(e,`change`,()=>{let t=e._modelValue,n=Fo(e),r=e.checked,i=e[ko];if(x(t)){let e=ke(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(C(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(Io(e,r))})},mounted:Mo,beforeUpdate(e,t,n){e[ko]=Eo(n),Mo(e,t,n)}};function Mo(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(x(t))i=ke(t,r.props.value)>-1;else if(C(t))i=t.has(r.props.value);else{if(t===n)return;i=Oe(t,Io(e,!0))}e.checked!==i&&(e.checked=i)}var No={deep:!0,created(e,{value:t,modifiers:{number:n}},r){e._modelValue=t,uo(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?ge(Fo(e)):Fo(e));e[ko](e.multiple?C(e._modelValue)?new Set(t):t:t[0]),e._assigning=!0,Dn(()=>{e._assigning=!1})}),e[ko]=Eo(r)},mounted(e,{value:t}){Po(e,t)},beforeUpdate(e,{value:t},n){e._modelValue=t,e[ko]=Eo(n)},updated(e,{value:t}){e._assigning||Po(e,t)}};function Po(e,t){let n=e.multiple,r=x(t);if(!(n&&!r&&!C(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=Fo(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=ke(t,o)>-1}else a.selected=t.has(o);else if(Oe(Fo(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Fo(e){return`_value`in e?e._value:e.value}function Io(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var Lo=[`ctrl`,`shift`,`alt`,`meta`],Ro={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Lo.some(n=>e[`${n}Key`]&&!t.includes(n))},zo=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=Ro[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Bo=_({patchProp:Co},qa),Vo;function Ho(){return Vo||=Ii(Bo)}var Uo=((...e)=>{let t=Ho().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Go(e);if(!r)return;let i=t._component;!T(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Wo(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Wo(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Go(e){return E(e)?document.querySelector(e):e}function Ko(e){return typeof e==`object`||`displayName`in e||`props`in e||`__vccOpts`in e}function qo(e){return e.__esModule||e[Symbol.toStringTag]===`Module`||e.default&&Ko(e.default)}var J=Object.assign;function Jo(e,t){let n={};for(let r in t){let i=t[r];n[r]=Xo(i)?i.map(e):e(i)}return n}var Yo=()=>{},Xo=Array.isArray;function Zo(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}var Qo=Symbol(``);function $o(e,t){return J(Error(),{type:e,[Qo]:!0},t)}function es(e,t){return e instanceof Error&&Qo in e&&(t==null||!!(e.type&t))}var ts=Symbol(``),ns=Symbol(``),rs=Symbol(``),is=Symbol(``),as=Symbol(``);function os(){return Hn(rs)}function ss(e){return Hn(is)}var cs=typeof document<`u`,ls=/#/g,us=/&/g,ds=/\//g,fs=/=/g,ps=/\?/g,ms=/\+/g,hs=/%5B/g,gs=/%5D/g,_s=/%5E/g,vs=/%60/g,ys=/%7B/g,bs=/%7C/g,xs=/%7D/g,Ss=/%20/g;function Cs(e){return e==null?``:encodeURI(``+e).replace(bs,`|`).replace(hs,`[`).replace(gs,`]`)}function ws(e){return Cs(e).replace(ys,`{`).replace(xs,`}`).replace(_s,`^`)}function Ts(e){return Cs(e).replace(ms,`%2B`).replace(Ss,`+`).replace(ls,`%23`).replace(us,`%26`).replace(vs,"`").replace(ys,`{`).replace(xs,`}`).replace(_s,`^`)}function Es(e){return Ts(e).replace(fs,`%3D`)}function Ds(e){return Cs(e).replace(ls,`%23`).replace(ps,`%3F`)}function Os(e){return Ds(e).replace(ds,`%2F`)}function ks(e){if(e==null)return null;try{return decodeURIComponent(``+e)}catch{}return``+e}var As=/\/$/,js=e=>e.replace(As,``);function Ms(e,t,n=`/`){let r,i={},a=``,o=``,s=t.indexOf(`#`),c=t.indexOf(`?`);return c=s>=0&&c>s?-1:c,c>=0&&(r=t.slice(0,c),a=t.slice(c,s>0?s:t.length),i=e(a.slice(1))),s>=0&&(r||=t.slice(0,s),o=t.slice(s,t.length)),r=Bs(r??t,n),{fullPath:r+a+o,path:r,query:i,hash:ks(o)}}function Ns(e,t){let n=t.query?e(t.query):``;return t.path+(n&&`?`)+n+(t.hash||``)}function Ps(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||`/`}function Fs(e,t,n){let r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Is(t.matched[r],n.matched[i])&&Ls(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Is(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ls(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e)if(!Rs(e[n],t[n]))return!1;return!0}function Rs(e,t){return Xo(e)?zs(e,t):Xo(t)?zs(t,e):(e&&e.valueOf())===(t&&t.valueOf())}function zs(e,t){return Xo(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):e.length===1&&e[0]===t}function Bs(e,t){if(e.startsWith(`/`))return e;if(!e)return t;let n=t.split(`/`),r=e.split(`/`),i=r[r.length-1];(i===`..`||i===`.`)&&r.push(``);let a=n.length-1,o,s;for(o=0;o<r.length;o++)if(s=r[o],s!==`.`)if(s===`..`)a>1&&a--;else break;return n.slice(0,a).join(`/`)+`/`+r.slice(o).join(`/`)}var Vs={path:`/`,name:void 0,params:{},query:{},hash:``,fullPath:`/`,matched:[],meta:{},redirectedFrom:void 0};function Hs(e){if(!e)if(cs){let t=document.querySelector(`base`);e=t&&t.getAttribute(`href`)||`/`,e=e.replace(/^\w+:\/\/[^/]+/,``)}else e=`/`;return e[0]!==`/`&&e[0]!==`#`&&(e=`/`+e),js(e)}var Us=/^[^#]+#/;function Ws(e,t){return e.replace(Us,`#`)+t}function Gs(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}var Ks=()=>({left:window.scrollX,top:window.scrollY});function qs(e){let t;if(`el`in e){let n=e.el,r=typeof n==`string`&&n.startsWith(`#`),i=typeof n==`string`?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Gs(i,e)}else t=e;`scrollBehavior`in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left==null?window.scrollX:t.left,t.top==null?window.scrollY:t.top)}function Js(e,t){return(history.state?history.state.position-t:-1)+e}var Ys=new Map;function Xs(e,t){Ys.set(e,t)}function Zs(e){let t=Ys.get(e);return Ys.delete(e),t}function Qs(e){return typeof e==`string`||e&&typeof e==`object`}function $s(e){return typeof e==`string`||typeof e==`symbol`}function ec(e){let t={};if(e===``||e===`?`)return t;let n=(e[0]===`?`?e.slice(1):e).split(`&`);for(let e=0;e<n.length;++e){let r=n[e].replace(ms,` `),i=r.indexOf(`=`),a=ks(i<0?r:r.slice(0,i)),o=i<0?null:ks(r.slice(i+1));if(a in t){let e=t[a];Xo(e)||(e=t[a]=[e]),e.push(o)}else t[a]=o}return t}function tc(e){let t=``;for(let n in e){let r=e[n];if(n=Es(n),r==null){r!==void 0&&(t+=(t.length?`&`:``)+n);continue}(Xo(r)?r.map(e=>e&&Ts(e)):[r&&Ts(r)]).forEach(e=>{e!==void 0&&(t+=(t.length?`&`:``)+n,e!=null&&(t+=`=`+e))})}return t}function nc(e){let t={};for(let n in e){let r=e[n];r!==void 0&&(t[n]=Xo(r)?r.map(e=>e==null?null:``+e):r==null?r:``+r)}return t}function rc(){let e=[];function t(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function ic(e,t,n,r,i,a=e=>e()){let o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,c)=>{let l=e=>{e===!1?c($o(4,{from:n,to:t})):e instanceof Error?c(e):Qs(e)?c($o(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&typeof e==`function`&&o.push(e),s())},u=a(()=>e.call(r&&r.instances[i],t,n,l)),d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(e=>c(e))})}function ac(e,t,n,r,i=e=>e()){let a=[];for(let o of e)for(let e in o.components){let s=o.components[e];if(!(t!==`beforeRouteEnter`&&!o.instances[e]))if(Ko(s)){let c=(s.__vccOpts||s)[t];c&&a.push(ic(c,n,r,o,e,i))}else{let c=s();a.push(()=>c.then(a=>{if(!a)throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);let s=qo(a)?a.default:a;o.mods[e]=a,o.components[e]=s;let c=(s.__vccOpts||s)[t];return c&&ic(c,n,r,o,e,i)()}))}}return a}function oc(e,t){let n=[],r=[],i=[],a=Math.max(t.matched.length,e.matched.length);for(let o=0;o<a;o++){let a=t.matched[o];a&&(e.matched.find(e=>Is(e,a))?r.push(a):n.push(a));let s=e.matched[o];s&&(t.matched.find(e=>Is(e,s))||i.push(s))}return[n,r,i]}var sc=()=>location.protocol+`//`+location.host;function cc(e,t){let{pathname:n,search:r,hash:i}=t,a=e.indexOf(`#`);if(a>-1){let t=i.includes(e.slice(a))?e.slice(a).length:1,n=i.slice(t);return n[0]!==`/`&&(n=`/`+n),Ps(n,``)}return Ps(n,e)+r+i}function lc(e,t,n,r){let i=[],a=[],o=null,s=({state:a})=>{let s=cc(e,location),c=n.value,l=t.value,u=0;if(a){if(n.value=s,t.value=a,o&&o===c){o=null;return}u=l?a.position-l.position:0}else r(s);i.forEach(e=>{e(n.value,c,{delta:u,type:`pop`,direction:u?u>0?`forward`:`back`:``})})};function c(){o=n.value}function l(e){i.push(e);let t=()=>{let t=i.indexOf(e);t>-1&&i.splice(t,1)};return a.push(t),t}function u(){if(document.visibilityState===`hidden`){let{history:e}=window;if(!e.state)return;e.replaceState(J({},e.state,{scroll:Ks()}),``)}}function d(){for(let e of a)e();a=[],window.removeEventListener(`popstate`,s),window.removeEventListener(`pagehide`,u),document.removeEventListener(`visibilitychange`,u)}return window.addEventListener(`popstate`,s),window.addEventListener(`pagehide`,u),document.addEventListener(`visibilitychange`,u),{pauseListeners:c,listen:l,destroy:d}}function uc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ks():null}}function dc(e){let{history:t,location:n}=window,r={value:cc(e,n)},i={value:t.state};i.value||a(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function a(r,a,o){let s=e.indexOf(`#`),c=s>-1?(n.host&&document.querySelector(`base`)?e:e.slice(s))+r:sc()+e+r;try{t[o?`replaceState`:`pushState`](a,``,c),i.value=a}catch(e){console.error(e),n[o?`replace`:`assign`](c)}}function o(e,n){a(e,J({},t.state,uc(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}function s(e,n){let o=J({},i.value,t.state,{forward:e,scroll:Ks()});a(o.current,o,!0),a(e,J({},uc(r.value,e,null),{position:o.position+1},n),!1),r.value=e}return{location:r,state:i,push:s,replace:o}}function fc(e){e=Hs(e);let t=dc(e),n=lc(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}let i=J({location:``,base:e,go:r,createHref:Ws.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}var pc={type:0,value:``},mc=/[a-zA-Z0-9_]/;function hc(e){if(!e)return[[]];if(e===`/`)return[[pc]];if(!e.startsWith(`/`))throw Error(`Invalid path "${e}"`);function t(e){throw Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n,i=[],a;function o(){a&&i.push(a),a=[]}let s=0,c,l=``,u=``;function d(){l&&=(n===0?a.push({type:0,value:l}):n===1||n===2||n===3?(a.length>1&&(c===`*`||c===`+`)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:c===`*`||c===`+`,optional:c===`*`||c===`?`})):t(`Invalid state to consume buffer`),``)}function f(){l+=c}for(;s<e.length;)switch(c=e[s++],n){case 0:c===`\\`?(r=n,n=4):c===`/`?(l&&d(),o()):c===`:`?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:c===`(`?n=2:mc.test(c)?f():(d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--);break;case 2:c===`)`?u[u.length-1]==`\\`?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!==`*`&&c!==`?`&&c!==`+`&&s--,u=``;break;default:t(`Unknown state`);break}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),i}var gc=`[^/]+?`,_c={sensitive:!1,strict:!1,start:!0,end:!0},vc=/[.+*?^${}()[\]/\\]/g;function yc(e,t){let n=J({},_c,t),r=[],i=n.start?`^`:``,a=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(i+=`/`);for(let r=0;r<t.length;r++){let o=t[r],s=40+(n.sensitive?.25:0);if(o.type===0)r||(i+=`/`),i+=o.value.replace(vc,`\\$&`),s+=40;else if(o.type===1){let{value:e,repeatable:n,optional:c,regexp:l}=o;a.push({name:e,repeatable:n,optional:c});let u=l||gc;if(u!==gc){s+=10;try{RegExp(`(${u})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;r||(d=c&&t.length<2?`(?:/${d})`:`/`+d),c&&(d+=`?`),i+=d,s+=20,c&&(s+=-8),n&&(s+=-20),u===`.*`&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+=`/?`),n.end?i+=`$`:n.strict&&!i.endsWith(`/`)&&(i+=`(?:/|$)`);let o=new RegExp(i,n.sensitive?``:`i`);function s(e){let t=e.match(o),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||``,i=a[e-1];n[i.name]=r&&i.repeatable?r.split(`/`):r}return n}function c(t){let n=``,r=!1;for(let i of e){(!r||!n.endsWith(`/`))&&(n+=`/`),r=!1;for(let e of i)if(e.type===0)n+=e.value;else if(e.type===1){let{value:a,repeatable:o,optional:s}=e,c=a in t?t[a]:``;if(Xo(c)&&!o)throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);let l=Xo(c)?c.join(`/`):c;if(!l)if(s)i.length<2&&(n.endsWith(`/`)?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${a}"`);n+=l}}return n||`/`}return{re:o,score:r,keys:a,parse:s,stringify:c}}function bc(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function xc(e,t){let n=0,r=e.score,i=t.score;for(;n<r.length&&n<i.length;){let e=bc(r[n],i[n]);if(e)return e;n++}if(Math.abs(i.length-r.length)===1){if(Sc(r))return 1;if(Sc(i))return-1}return i.length-r.length}function Sc(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}var Cc={strict:!1,end:!0,sensitive:!1};function wc(e,t,n){let r=J(yc(hc(e.path),n),{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Tc(e,t){let n=[],r=new Map;t=Zo(Cc,t);function i(e){return r.get(e)}function a(e,n,r){let i=!r,s=Dc(e);s.aliasOf=r&&r.record;let l=Zo(t,e),u=[s];if(`alias`in e){let t=typeof e.alias==`string`?[e.alias]:e.alias;for(let e of t)u.push(Dc(J({},s,{components:r?r.record.components:s.components,path:e,aliasOf:r?r.record:s})))}let d,f;for(let t of u){let{path:u}=t;if(n&&u[0]!==`/`){let e=n.record.path,r=e[e.length-1]===`/`?``:`/`;t.path=n.record.path+(u&&r+u)}if(d=wc(t,n,l),r?r.alias.push(d):(f||=d,f!==d&&f.alias.push(d),i&&e.name&&!kc(d)&&o(e.name)),Nc(d)&&c(d),s.children){let e=s.children;for(let t=0;t<e.length;t++)a(e[t],d,r&&r.children[t])}r||=d}return f?()=>{o(f)}:Yo}function o(e){if($s(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function s(){return n}function c(e){let t=jc(e,n);n.splice(t,0,e),e.record.name&&!kc(e)&&r.set(e.record.name,e)}function l(e,t){let i,a={},o,s;if(`name`in e&&e.name){if(i=r.get(e.name),!i)throw $o(1,{location:e});s=i.record.name,a=J(Ec(t.params,i.keys.filter(e=>!e.optional).concat(i.parent?i.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&Ec(e.params,i.keys.map(e=>e.name))),o=i.stringify(a)}else if(e.path!=null)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name,i.keys.forEach(e=>{e.optional&&!a[e.name]&&delete a[e.name]}));else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw $o(1,{location:e,currentLocation:t});s=i.record.name,a=J({},t.params,e.params),o=i.stringify(a)}let c=[],l=i;for(;l;)c.unshift(l.record),l=l.parent;return{name:s,path:o,params:a,matched:c,meta:Ac(c)}}e.forEach(e=>a(e));function u(){n.length=0,r.clear()}return{addRoute:a,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:s,getRecordMatcher:i}}function Ec(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function Dc(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Oc(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:`components`in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Oc(e){let t={},n=e.props||!1;if(`component`in e)t.default=n;else for(let r in e.components)t[r]=typeof n==`object`?n[r]:n;return t}function kc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ac(e){return e.reduce((e,t)=>J(e,t.meta),{})}function jc(e,t){let n=0,r=t.length;for(;n!==r;){let i=n+r>>1;xc(e,t[i])<0?r=i:n=i+1}let i=Mc(e);return i&&(r=t.lastIndexOf(i,r-1)),r}function Mc(e){let t=e;for(;t=t.parent;)if(Nc(t)&&xc(e,t)===0)return t}function Nc({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Pc(e){let t=Hn(rs),n=Hn(is),r=K(()=>{let n=F(e.to);return t.resolve(n)}),i=K(()=>{let{matched:e}=r.value,{length:t}=e,i=e[t-1],a=n.matched;if(!i||!a.length)return-1;let o=a.findIndex(Is.bind(null,i));if(o>-1)return o;let s=zc(e[t-2]);return t>1&&zc(i)===s&&a[a.length-1].path!==s?a.findIndex(Is.bind(null,e[t-2])):o}),a=K(()=>i.value>-1&&Rc(n.params,r.value.params)),o=K(()=>i.value>-1&&i.value===n.matched.length-1&&Ls(n.params,r.value.params));function s(n={}){if(Lc(n)){let n=t[F(e.replace)?`replace`:`push`](F(e.to)).catch(Yo);return e.viewTransition&&typeof document<`u`&&`startViewTransition`in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}return{route:r,href:K(()=>r.value.href),isActive:a,isExactActive:o,navigate:s}}function Fc(e){return e.length===1?e[0]:e}var Ic=L({name:`RouterLink`,compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:`page`},viewTransition:Boolean},useLink:Pc,setup(e,{slots:t}){let n=Wt(Pc(e)),{options:r}=Hn(rs),i=K(()=>({[Bc(e.activeClass,r.linkActiveClass,`router-link-active`)]:n.isActive,[Bc(e.exactActiveClass,r.linkExactActiveClass,`router-link-exact-active`)]:n.isExactActive}));return()=>{let r=t.default&&Fc(t.default(n));return e.custom?r:Ra(`a`,{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Lc(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute(`target`);if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Rc(e,t){for(let n in t){let r=t[n],i=e[n];if(typeof r==`string`){if(r!==i)return!1}else if(!Xo(i)||i.length!==r.length||r.some((e,t)=>e.valueOf()!==i[t].valueOf()))return!1}return!0}function zc(e){return e?e.aliasOf?e.aliasOf.path:e.path:``}var Bc=(e,t,n)=>e??t??n,Vc=L({name:`RouterView`,inheritAttrs:!1,props:{name:{type:String,default:`default`},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=Hn(as),i=K(()=>e.route||r.value),a=Hn(ns,0),o=K(()=>{let e=F(a),{matched:t}=i.value,n;for(;(n=t[e])&&!n.components;)e++;return e}),s=K(()=>i.value.matched[o.value]);Vn(ns,K(()=>o.value+1)),Vn(ts,s),Vn(as,i);let c=P();return Gn(()=>[c.value,s.value,e.name],([e,t,n],[r,i,a])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),e&&t&&(!i||!Is(t,i)||!r)&&(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:`post`}),()=>{let r=i.value,a=e.name,o=s.value,l=o&&o.components[a];if(!l)return Hc(n.default,{Component:l,route:r});let u=o.props[a],d=Ra(l,J({},u?u===!0?r.params:typeof u==`function`?u(r):u:null,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(o.instances[a]=null)},ref:c}));return Hc(n.default,{Component:d,route:r})||d}}});function Hc(e,t){if(!e)return null;let n=e(t);return n.length===1?n[0]:n}var Uc=Vc;function Wc(e){let t=Tc(e.routes,e),n=e.parseQuery||ec,r=e.stringifyQuery||tc,i=e.history,a=rc(),o=rc(),s=rc(),c=nn(Vs),l=Vs;cs&&e.scrollBehavior&&`scrollRestoration`in history&&(history.scrollRestoration=`manual`);let u=Jo.bind(null,e=>``+e),d=Jo.bind(null,Os),f=Jo.bind(null,ks);function p(e,n){let r,i;return $s(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function m(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function h(){return t.getRoutes().map(e=>e.record)}function g(e){return!!t.getRecordMatcher(e)}function _(e,a){if(a=J({},a||c.value),typeof e==`string`){let r=Ms(n,e,a.path),o=t.resolve({path:r.path},a),s=i.createHref(r.fullPath);return J(r,o,{params:f(o.params),redirectedFrom:void 0,href:s})}let o;if(e.path!=null)o=J({},e,{path:Ms(n,e.path,a.path).path});else{let t=J({},e.params);for(let e in t)t[e]??delete t[e];o=J({},e,{params:d(t)}),a.params=d(a.params)}let s=t.resolve(o,a),l=e.hash||``;s.params=u(f(s.params));let p=Ns(r,J({},e,{hash:ws(l),path:s.path})),m=i.createHref(p);return J({fullPath:p,hash:l,query:r===tc?nc(e.query):e.query||{}},s,{redirectedFrom:void 0,href:m})}function v(e){return typeof e==`string`?Ms(n,e,c.value.path):J({},e)}function y(e,t){if(l!==e)return $o(8,{from:t,to:e})}function b(e){return C(e)}function x(e){return b(J(v(e),{replace:!0}))}function S(e,t){let n=e.matched[e.matched.length-1];if(n&&n.redirect){let{redirect:r}=n,i=typeof r==`function`?r(e,t):r;return typeof i==`string`&&(i=i.includes(`?`)||i.includes(`#`)?i=v(i):{path:i},i.params={}),J({query:e.query,hash:e.hash,params:i.path==null?e.params:{}},i)}}function C(e,t){let n=l=_(e),i=c.value,a=e.state,o=e.force,s=e.replace===!0,u=S(n,i);if(u)return C(J(v(u),{state:typeof u==`object`?J({},a,u.state):a,force:o,replace:s}),t||n);let d=n;d.redirectedFrom=t;let f;return!o&&Fs(r,i,n)&&(f=$o(16,{to:d,from:i}),se(i,i,!0,!1)),(f?Promise.resolve(f):E(d,i)).catch(e=>es(e)?es(e,2)?e:oe(e):ae(e,d,i)).then(e=>{if(e){if(es(e,2))return C(J({replace:s},v(e.to),{state:typeof e.to==`object`?J({},a,e.to.state):a,force:o}),t||d)}else e=O(d,i,!0,s,a);return D(d,i,e),e})}function w(e,t){let n=y(e,t);return n?Promise.reject(n):Promise.resolve()}function T(e){let t=ue.values().next().value;return t&&typeof t.runWithContext==`function`?t.runWithContext(e):e()}function E(e,t){let n,[r,i,s]=oc(e,t);n=ac(r.reverse(),`beforeRouteLeave`,e,t);for(let i of r)i.leaveGuards.forEach(r=>{n.push(ic(r,e,t))});let c=w.bind(null,e,t);return n.push(c),fe(n).then(()=>{n=[];for(let r of a.list())n.push(ic(r,e,t));return n.push(c),fe(n)}).then(()=>{n=ac(i,`beforeRouteUpdate`,e,t);for(let r of i)r.updateGuards.forEach(r=>{n.push(ic(r,e,t))});return n.push(c),fe(n)}).then(()=>{n=[];for(let r of s)if(r.beforeEnter)if(Xo(r.beforeEnter))for(let i of r.beforeEnter)n.push(ic(i,e,t));else n.push(ic(r.beforeEnter,e,t));return n.push(c),fe(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=ac(s,`beforeRouteEnter`,e,t,T),n.push(c),fe(n))).then(()=>{n=[];for(let r of o.list())n.push(ic(r,e,t));return n.push(c),fe(n)}).catch(e=>es(e,8)?e:Promise.reject(e))}function D(e,t,n){s.list().forEach(r=>T(()=>r(e,t,n)))}function O(e,t,n,r,a){let o=y(e,t);if(o)return o;let s=t===Vs,l=cs?history.state:{};n&&(r||s?i.replace(e.fullPath,J({scroll:s&&l&&l.scroll},a)):i.push(e.fullPath,a)),c.value=e,se(e,t,n,s),oe()}let ee;function te(){ee||=i.listen((e,t,n)=>{if(!de.listening)return;let r=_(e),a=S(r,de.currentRoute.value);if(a){C(J(a,{replace:!0,force:!0}),r).catch(Yo);return}l=r;let o=c.value;cs&&Xs(Js(o.fullPath,n.delta),Ks()),E(r,o).catch(e=>es(e,12)?e:es(e,2)?(C(J(v(e.to),{force:!0}),r).then(e=>{es(e,20)&&!n.delta&&n.type===`pop`&&i.go(-1,!1)}).catch(Yo),Promise.reject()):(n.delta&&i.go(-n.delta,!1),ae(e,r,o))).then(e=>{e||=O(r,o,!1),e&&(n.delta&&!es(e,8)?i.go(-n.delta,!1):n.type===`pop`&&es(e,20)&&i.go(-1,!1)),D(r,o,e)}).catch(Yo)})}let ne=rc(),re=rc(),ie;function ae(e,t,n){oe(e);let r=re.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function k(){return ie&&c.value!==Vs?Promise.resolve():new Promise((e,t)=>{ne.add([e,t])})}function oe(e){return ie||(ie=!e,te(),ne.list().forEach(([t,n])=>e?n(e):t()),ne.reset()),e}function se(t,n,r,i){let{scrollBehavior:a}=e;if(!cs||!a)return Promise.resolve();let o=!r&&Zs(Js(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Dn().then(()=>a(t,n,o)).then(e=>t===c.value&&e&&qs(e)).catch(e=>t===c.value&&ae(e,t,n))}let ce=e=>i.go(e),le,ue=new Set,de={currentRoute:c,listening:!0,addRoute:p,removeRoute:m,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:_,options:e,push:b,replace:x,go:ce,back:()=>ce(-1),forward:()=>ce(1),beforeEach:a.add,beforeResolve:o.add,afterEach:s.add,onError:re.add,isReady:k,install(e){e.component(`RouterLink`,Ic),e.component(`RouterView`,Uc),e.config.globalProperties.$router=de,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>F(c)}),cs&&!le&&c.value===Vs&&(le=!0,b(i.location).catch(e=>{}));let t={};for(let e in Vs)Object.defineProperty(t,e,{get:()=>c.value[e],enumerable:!0});e.provide(rs,de),e.provide(is,Gt(t)),e.provide(as,c);let n=e.unmount;ue.add(e),e.unmount=function(){ue.delete(e),ue.size<1&&(l=Vs,ee&&ee(),ee=null,c.value=Vs,le=!1,ie=!1),n()}}};function fe(e){return e.reduce((e,t)=>e.then(()=>T(t)),Promise.resolve())}return de}var Gc=L({__name:`App`,setup(e){return(e,t)=>(B(),ra(F(Uc)))}}),Kc=class extends Error{status;constructor(e,t){super(e),this.status=t}},Y=async(e,t)=>{let n=new Headers(t?.headers),r=localStorage.getItem(`shineway_session`);if(r)try{let e=JSON.parse(r).token;e&&n.set(`Authorization`,`Bearer ${e}`)}catch{localStorage.removeItem(`shineway_session`)}t?.body&&n.set(`Content-Type`,`application/json`);let i=await fetch(e,{...t,headers:n});if(!i.ok)throw new Kc((await i.json().catch(()=>({}))).error??`请求失败（${i.status}）`,i.status);if(i.status!==204)return i.json()},qc=localStorage.getItem(`shineway_session`),Jc=null;if(qc)try{Jc=JSON.parse(qc)}catch{localStorage.removeItem(`shineway_session`)}var X=Wt({token:Jc?.token??``,user:Jc?.user??null,permissions:[]}),Yc=async(e,t)=>{let n=await Y(`/api/auth/login`,{method:`POST`,body:JSON.stringify({UserNO:e,Password:t})});X.token=n.data.token,X.user=n.data.user,localStorage.setItem(`shineway_session`,JSON.stringify(n.data)),await Xc()},Xc=async()=>{X.token&&(X.permissions=(await Y(`/api/admin/my-permissions`)).data)},Zc=async()=>{try{await Y(`/api/auth/logout`,{method:`POST`})}finally{X.token=``,X.user=null,X.permissions=[],localStorage.removeItem(`shineway_session`)}},Z=(e,t=!1)=>{let n=X.permissions.find(t=>t.ModuleKey===e);return!!(t?n?.CanEdit:n?.CanView)},Qc=[`title`,`aria-label`],$c={class:`sidebar__nav`},el={class:`nav-item__icon`},tl={class:`nav-item__label`},nl={class:`main-area`},rl={class:`topbar`},il={class:`topbar__title`},al={class:`account-menu`},ol={class:`operator__avatar`},sl={key:0,class:`account-popover`},cl={class:`page-content`},ll=L({__name:`AdminLayout`,setup(e){let t=[{label:`工作台`,to:`/`,icon:`⌂`,key:`dashboard`},{label:`机台管理`,to:`/machines`,icon:`▣`,key:`machines`},{label:`设备类型`,to:`/machine-types`,icon:`◈`,key:`machine-types`},{label:`产品信息`,to:`/products`,icon:`◇`,key:`products`},{label:`机台排产`,to:`/schedules`,icon:`▥`,key:`schedules`},{label:`采集配置`,to:`/collection`,icon:`⌁`,key:`collection`},{label:`考勤打卡`,to:`/attendance`,icon:`◷`,key:`attendance`},{label:`报表中心`,to:`/reports`,icon:`▤`,key:`reports`},{label:`用户管理`,to:`/users`,icon:`♙`,key:`users`},{label:`部门管理`,to:`/departments`,icon:`⌘`,key:`departments`},{label:`系统设置`,to:`/settings`,icon:`⚙`,key:`settings`},{label:`帮助文档`,to:`/docs`,icon:`?`,key:null}],n=K(()=>t.filter(e=>e.key===null||Z(e.key))),r=ss(),i=os(),a=P(!1),o=P(!1),s=P(!1),c=K(()=>String(r.meta.title??`管理中心`)),l=async()=>{await Zc(),await i.push(`/login`)};return(e,t)=>(B(),V(`div`,{class:A([`admin-shell`,{"admin-shell--collapsed":o.value}])},[a.value?(B(),V(`button`,{key:0,class:`sidebar-scrim`,onClick:t[0]||=e=>a.value=!1})):G(``,!0),H(`aside`,{class:A([`sidebar`,{"sidebar--open":a.value}])},[H(`button`,{class:`sidebar-toggle`,title:o.value?`展开菜单`:`收缩菜单`,"aria-label":o.value?`展开菜单`:`收缩菜单`,onClick:t[1]||=e=>o.value=!o.value},j(o.value?`›`:`‹`),9,Qc),t[6]||=H(`div`,{class:`brand`},[H(`div`,{class:`brand__mark`},`S`),H(`div`,{class:`brand__text`},[H(`strong`,null,`SHINEWAY`),H(`span`,null,`企业管理中心`)])],-1),t[7]||=H(`div`,{class:`sidebar__section-label`},`管理导航`,-1),H(`nav`,$c,[(B(!0),V(z,null,R(n.value,e=>(B(),ra(F(Ic),{key:e.to,to:e.to,class:A([`nav-item`,{"nav-item--active":F(r).path===e.to}]),title:o.value?e.label:void 0,onClick:t[2]||=e=>a.value=!1},{default:zn(()=>[H(`span`,el,j(e.icon),1),H(`span`,tl,j(e.label),1)]),_:2},1032,[`to`,`class`,`title`]))),128))]),t[8]||=H(`div`,{class:`sidebar__footer`},[H(`div`,{class:`status-dot`}),H(`div`,{class:`sidebar__footer-text`},[H(`strong`,null,`系统运行正常`),H(`span`,null,`Shineway API · 7003`)])],-1)],2),H(`main`,nl,[H(`header`,rl,[H(`div`,il,[H(`button`,{class:`menu-button`,onClick:t[3]||=e=>a.value=!0},`☰`),H(`div`,null,[t[9]||=H(`span`,null,`Shineway / 管理中心`,-1),H(`h1`,null,j(c.value),1)])]),H(`div`,al,[H(`button`,{class:`operator`,onClick:t[4]||=e=>s.value=!s.value},[H(`div`,ol,j(F(X).user?.UserName?.slice(0,1)||`用`),1),H(`div`,null,[H(`strong`,null,j(F(X).user?.UserName||F(X).user?.UserNO),1),H(`span`,null,j(F(X).user?.UserNO),1)])]),s.value?(B(),V(`div`,sl,[U(F(Ic),{to:`/change-password`,onClick:t[5]||=e=>s.value=!1},{default:zn(()=>[...t[10]||=[W(`修改密码`,-1)]]),_:1}),H(`button`,{onClick:l},`退出登录`)])):G(``,!0)])]),H(`section`,cl,[U(F(Uc))])])],2))}}),ul={class:`hero-card`},dl={class:`hero-actions`},fl={class:`module-grid`},pl={class:`module-card module-card--ready`},ml=L({__name:`DashboardView`,setup(e){return(e,t)=>(B(),V(`div`,null,[H(`section`,ul,[H(`div`,null,[t[2]||=H(`span`,{class:`eyebrow`},`SHINEWAY OPERATIONS`,-1),t[3]||=H(`h2`,null,`让设备与数据管理更清晰`,-1),t[4]||=H(`p`,null,`管理中心已接入现有 MariaDB 业务数据。机台管理是第一个模块，其他业务能力可在左侧导航中持续扩展。`,-1),H(`div`,dl,[U(F(Ic),{class:`button button--primary`,to:`/machines`},{default:zn(()=>[...t[0]||=[W(`进入机台管理`,-1)]]),_:1}),t[1]||=H(`a`,{class:`button button--dashboard`,href:`/scada/`},`查看看板`,-1)])]),t[5]||=H(`div`,{class:`hero-card__visual`,"aria-hidden":`true`},[H(`span`,null,`01`),H(`strong`,null,`MODULE`),H(`small`,null,`READY`)],-1)]),H(`section`,fl,[H(`article`,pl,[t[7]||=H(`span`,{class:`module-card__index`},`01`,-1),t[8]||=H(`div`,{class:`module-card__icon`},`▣`,-1),t[9]||=H(`h3`,null,`机台管理`,-1),t[10]||=H(`p`,null,`维护机台编号、区域、连接信息、排序及启用状态。`,-1),U(F(Ic),{to:`/machines`},{default:zn(()=>[...t[6]||=[W(`立即管理 →`,-1)]]),_:1})]),t[11]||=da(`<article class="module-card"><span class="module-card__index">02</span><div class="module-card__icon">⌁</div><h3>采集配置</h3><p>为后续采集参数、采集任务和连接状态管理预留。</p><span class="tag">规划中</span></article><article class="module-card"><span class="module-card__index">03</span><div class="module-card__icon">▥</div><h3>报表中心</h3><p>为产量、效率、异常与设备利用率报表预留。</p><span class="tag">规划中</span></article><article class="module-card"><span class="module-card__index">04</span><div class="module-card__icon">♙</div><h3>权限与审计</h3><p>为账号、角色、菜单权限和操作日志预留。</p><span class="tag">规划中</span></article>`,3)])]))}}),hl=async e=>{let t=new URLSearchParams({page:String(e.page),pageSize:String(e.pageSize)});return e.search&&t.set(`search`,e.search),e.area&&t.set(`area`,e.area),e.status&&t.set(`status`,e.status),Y(`/api/admin/machines?${t}`)},gl=async e=>(await Y(`/api/admin/machines`,{method:`POST`,body:JSON.stringify(e)})).data,_l=async(e,t)=>(await Y(`/api/admin/machines/${e}`,{method:`PUT`,body:JSON.stringify(t)})).data,vl=async e=>{await Y(`/api/admin/machines/${e}`,{method:`DELETE`,body:JSON.stringify({operator:`shinewayit`})})},yl=async(e=!1)=>(await Y(`/api/machine-types?active=${e}`)).data,bl=async e=>(await Y(`/api/machine-types`,{method:`POST`,body:JSON.stringify(e)})).data,xl=async(e,t)=>(await Y(`/api/machine-types/${encodeURIComponent(e)}`,{method:`PUT`,body:JSON.stringify(t)})).data,Sl=async e=>{await Y(`/api/machine-types/${encodeURIComponent(e)}`,{method:`DELETE`})},Cl=async(e,t)=>{let n=await new Promise((e,n)=>{let r=new FileReader;r.onload=()=>e(String(r.result).split(`,`,2)[1]??``),r.onerror=()=>n(r.error),r.readAsDataURL(t)});return(await Y(`/api/machine-types/${encodeURIComponent(e)}/icon`,{method:`PUT`,body:JSON.stringify({mime:t.type,base64:n})})).data},wl={key:0,class:`dialog-layer`},Tl={class:`machine-dialog`,role:`dialog`,"aria-modal":`true`},El={class:`machine-dialog__header`},Dl={class:`form-section`},Ol={class:`form-grid`},kl={class:`form-grid__wide`},Al=[`value`],jl={class:`form-section`},Ml={class:`form-grid`},Nl=[`max`],Pl=[`max`],Fl={class:`form-grid__wide`},Il={class:`form-grid__wide`},Ll={key:0,class:`form-error`},Rl={class:`machine-dialog__footer`},zl=[`disabled`],Bl=L({__name:`MachineForm`,props:{open:{type:Boolean},machine:{}},emits:[`close`,`saved`],setup(e,{emit:t}){let n=e,r=t,i=()=>({MachineNO:``,ShortName:null,FullName:null,Brand:null,Model:null,Detail:null,Area:`一楼`,Stype:``,OutDate:null,Status:1,MacAddr:null,IpAddr:null,PortNum:null,OrderBy:0,trCount:0,tdCount:0,rowIndex:0,colIndex:0,tempItem:null,tempOneToMany:1,operator:`shinewayit`}),a=Wt(i()),o=P(!1),s=P(``),c=P([]),l=K(()=>n.machine!==null),u=()=>{let e=n.machine;Object.assign(a,e?{MachineNO:e.MachineNO,ShortName:e.ShortName,FullName:e.FullName,Brand:e.Brand,Model:e.Model,Detail:e.Detail,Area:e.Area,Stype:e.Stype,OutDate:e.OutDate,Status:e.Status,MacAddr:e.MacAddr,IpAddr:e.IpAddr,PortNum:e.PortNum,OrderBy:e.OrderBy??0,trCount:e.trCount??0,tdCount:e.tdCount??0,rowIndex:e.rowIndex??0,colIndex:e.colIndex??0,tempItem:e.tempItem,tempOneToMany:e.tempOneToMany,operator:`shinewayit`}:i()),s.value=``};Gn(()=>[n.open,n.machine],async([e])=>{if(u(),e)try{c.value=await yl(!0),!a.Stype&&c.value[0]&&(a.Stype=c.value[0].Stype)}catch{s.value=`设备类型加载失败，请先检查设备类型管理`}},{immediate:!0});let d=()=>{let e=e=>e?.trim()||null;return{...a,MachineNO:a.MachineNO.trim(),ShortName:e(a.ShortName),FullName:e(a.FullName),Brand:e(a.Brand),Model:e(a.Model),Detail:e(a.Detail),Area:a.Area.trim(),Stype:a.Stype.trim(),MacAddr:e(a.MacAddr),IpAddr:e(a.IpAddr),tempItem:e(a.tempItem)}},f=async()=>{if(!a.MachineNO.trim()||!a.Area.trim()||!a.Stype.trim()){s.value=`请填写机台编号、区域和设备类型`;return}o.value=!0,s.value=``;try{let e=d(),t=n.machine?await _l(n.machine.MachineID,e):await gl(e);r(`saved`,t)}catch(e){s.value=e instanceof Error?e.message:`保存失败`}finally{o.value=!1}};return(t,n)=>(B(),ra(or,{to:`body`},[e.open?(B(),V(`div`,wl,[H(`button`,{class:`dialog-scrim`,"aria-label":`关闭`,onClick:n[0]||=e=>r(`close`)}),H(`section`,Tl,[H(`header`,El,[H(`div`,null,[n[23]||=H(`span`,{class:`eyebrow`},`MACHINE PROFILE`,-1),H(`h2`,null,j(l.value?`编辑机台`:`新增机台`),1)]),H(`button`,{class:`icon-button`,"aria-label":`关闭`,onClick:n[1]||=e=>r(`close`)},`×`)]),H(`form`,{class:`machine-form`,onSubmit:zo(f,[`prevent`])},[H(`div`,Dl,[n[38]||=H(`h3`,null,`基本信息`,-1),H(`div`,Ol,[H(`label`,null,[n[24]||=W(`机台编号 `,-1),n[25]||=H(`b`,null,`*`,-1),I(H(`input`,{"onUpdate:modelValue":n[2]||=e=>a.MachineNO=e,maxlength:`50`},null,512),[[q,a.MachineNO]])]),H(`label`,null,[n[26]||=W(`简称`,-1),I(H(`input`,{"onUpdate:modelValue":n[3]||=e=>a.ShortName=e,maxlength:`100`},null,512),[[q,a.ShortName]])]),H(`label`,kl,[n[27]||=W(`完整名称`,-1),I(H(`input`,{"onUpdate:modelValue":n[4]||=e=>a.FullName=e,maxlength:`200`},null,512),[[q,a.FullName]])]),H(`label`,null,[n[28]||=W(`区域 `,-1),n[29]||=H(`b`,null,`*`,-1),I(H(`input`,{"onUpdate:modelValue":n[5]||=e=>a.Area=e,maxlength:`30`},null,512),[[q,a.Area]])]),H(`label`,null,[n[31]||=W(`设备类型 `,-1),n[32]||=H(`b`,null,`*`,-1),I(H(`select`,{"onUpdate:modelValue":n[6]||=e=>a.Stype=e},[n[30]||=H(`option`,{value:``,disabled:``},`请选择设备类型`,-1),(B(!0),V(z,null,R(c.value,e=>(B(),V(`option`,{key:e.Stype,value:e.Stype},j(e.DisplayName)+`（`+j(e.Stype)+`）`,9,Al))),128))],512),[[No,a.Stype]])]),H(`label`,null,[n[33]||=W(`品牌`,-1),I(H(`input`,{"onUpdate:modelValue":n[7]||=e=>a.Brand=e,maxlength:`50`},null,512),[[q,a.Brand]])]),H(`label`,null,[n[34]||=W(`型号`,-1),I(H(`input`,{"onUpdate:modelValue":n[8]||=e=>a.Model=e,maxlength:`50`},null,512),[[q,a.Model]])]),H(`label`,null,[n[35]||=W(`出厂日期`,-1),I(H(`input`,{"onUpdate:modelValue":n[9]||=e=>a.OutDate=e,type:`date`},null,512),[[q,a.OutDate]])]),H(`label`,null,[n[37]||=W(`启用状态`,-1),I(H(`select`,{"onUpdate:modelValue":n[10]||=e=>a.Status=e},[...n[36]||=[H(`option`,{value:1},`启用`,-1),H(`option`,{value:0},`停用`,-1)]],512),[[No,a.Status,void 0,{number:!0}]])])])]),H(`div`,jl,[n[50]||=H(`h3`,null,`连接与采集`,-1),H(`div`,Ml,[H(`label`,null,[n[39]||=W(`IP 地址`,-1),I(H(`input`,{"onUpdate:modelValue":n[11]||=e=>a.IpAddr=e,maxlength:`50`,placeholder:`192.168.100.101`},null,512),[[q,a.IpAddr]])]),H(`label`,null,[n[40]||=W(`端口`,-1),I(H(`input`,{"onUpdate:modelValue":n[12]||=e=>a.PortNum=e,type:`number`,min:`1`,max:`65535`},null,512),[[q,a.PortNum,void 0,{number:!0}]])]),H(`label`,null,[n[41]||=W(`MAC 地址`,-1),I(H(`input`,{"onUpdate:modelValue":n[13]||=e=>a.MacAddr=e,maxlength:`50`},null,512),[[q,a.MacAddr]])]),H(`label`,null,[n[42]||=W(`显示顺序`,-1),I(H(`input`,{"onUpdate:modelValue":n[14]||=e=>a.OrderBy=e,type:`number`},null,512),[[q,a.OrderBy,void 0,{number:!0}]])]),H(`label`,null,[n[43]||=W(`分布图行数量`,-1),I(H(`input`,{"onUpdate:modelValue":n[15]||=e=>a.trCount=e,type:`number`,min:`1`},null,512),[[q,a.trCount,void 0,{number:!0}]])]),H(`label`,null,[n[44]||=W(`分布图列数量`,-1),I(H(`input`,{"onUpdate:modelValue":n[16]||=e=>a.tdCount=e,type:`number`,min:`1`},null,512),[[q,a.tdCount,void 0,{number:!0}]])]),H(`label`,null,[n[45]||=W(`机台所在行`,-1),I(H(`input`,{"onUpdate:modelValue":n[17]||=e=>a.rowIndex=e,type:`number`,min:`1`,max:a.trCount||void 0},null,8,Nl),[[q,a.rowIndex,void 0,{number:!0}]])]),H(`label`,null,[n[46]||=W(`机台所在列`,-1),I(H(`input`,{"onUpdate:modelValue":n[18]||=e=>a.colIndex=e,type:`number`,min:`1`,max:a.tdCount||void 0},null,8,Pl),[[q,a.colIndex,void 0,{number:!0}]])]),H(`label`,null,[n[47]||=W(`一对多系数`,-1),I(H(`input`,{"onUpdate:modelValue":n[19]||=e=>a.tempOneToMany=e,type:`number`,min:`1`},null,512),[[q,a.tempOneToMany,void 0,{number:!0}]])]),H(`label`,Fl,[n[48]||=W(`临时项目`,-1),I(H(`input`,{"onUpdate:modelValue":n[20]||=e=>a.tempItem=e,maxlength:`255`},null,512),[[q,a.tempItem]])]),H(`label`,Il,[n[49]||=W(`备注`,-1),I(H(`textarea`,{"onUpdate:modelValue":n[21]||=e=>a.Detail=e,maxlength:`512`,rows:`3`},null,512),[[q,a.Detail]])])])]),s.value?(B(),V(`p`,Ll,j(s.value),1)):G(``,!0),H(`footer`,Rl,[H(`button`,{type:`button`,class:`button button--ghost`,onClick:n[22]||=e=>r(`close`)},`取消`),H(`button`,{type:`submit`,class:`button button--primary`,disabled:o.value},j(o.value?`正在保存…`:`保存机台`),9,zl)])],32)])])):G(``,!0)]))}}),Vl={class:`summary-strip`},Hl={class:`card machine-card`},Ul={class:`search-field`},Wl={key:0,class:`notice notice--error`},Gl={class:`table-wrap`},Kl={key:0},ql={key:1},Jl={class:`machine-identity`},Yl={class:`cell-subtitle`},Xl={class:`align-right table-actions`},Zl=[`onClick`],Ql=[`onClick`],$l={class:`pagination`},eu=[`disabled`],tu=[`disabled`],nu=L({__name:`MachinesView`,setup(e){let t=P([]),n=P({page:1,pageSize:20,total:0,pageCount:0}),r=Wt({page:1,pageSize:20,search:``,area:``,status:``}),i=P(!1),a=P(``),o=P(!1),s=P(null),c=K(()=>t.value.filter(e=>e.Status===1).length),l=K(()=>new Set(t.value.map(e=>e.Area)).size),u=async()=>{i.value=!0,a.value=``;try{let e=await hl(r);t.value=e.data,n.value=e.meta}catch(e){a.value=e instanceof Error?e.message:`机台数据加载失败`}finally{i.value=!1}},d=()=>{r.page=1,u()},f=()=>{Object.assign(r,{page:1,search:``,area:``,status:``}),u()},p=()=>{s.value=null,o.value=!0},m=e=>{s.value=e,o.value=!0},h=()=>{o.value=!1,u()},g=async e=>{if(window.confirm(`确定停用机台“${e.MachineNO}”吗？历史采集数据不会被删除。`))try{await vl(e.MachineID),await u()}catch(e){a.value=e instanceof Error?e.message:`停用失败`}},_=e=>{e<1||e>n.value.pageCount||e===r.page||(r.page=e,u())};return Tr(()=>void u()),(e,u)=>(B(),V(`div`,null,[H(`section`,Vl,[H(`div`,null,[u[6]||=H(`span`,null,`当前结果`,-1),H(`strong`,null,j(n.value.total),1),u[7]||=H(`small`,null,`台机台`,-1)]),H(`div`,null,[u[8]||=H(`span`,null,`本页启用`,-1),H(`strong`,null,j(c.value),1),u[9]||=H(`small`,null,`运行配置`,-1)]),H(`div`,null,[u[10]||=H(`span`,null,`区域覆盖`,-1),H(`strong`,null,j(l.value),1),u[11]||=H(`small`,null,`个区域`,-1)]),H(`button`,{class:`button button--primary`,onClick:p},[...u[12]||=[H(`span`,null,`＋`,-1),W(` 新增机台`,-1)]])]),H(`section`,Hl,[u[19]||=H(`header`,{class:`machine-card__header`},[H(`div`,null,[H(`span`,{class:`eyebrow`},`MACHINE DIRECTORY`),H(`h2`,null,`机台档案`),H(`p`,null,`维护设备基础资料及采集连接参数。`)])],-1),H(`form`,{class:`filter-bar`,onSubmit:zo(d,[`prevent`])},[H(`label`,Ul,[u[13]||=H(`span`,null,`⌕`,-1),I(H(`input`,{"onUpdate:modelValue":u[0]||=e=>r.search=e,placeholder:`搜索编号、名称或 IP`},null,512),[[q,r.search]])]),I(H(`input`,{"onUpdate:modelValue":u[1]||=e=>r.area=e,class:`filter-input`,placeholder:`区域，例如：一楼`},null,512),[[q,r.area]]),I(H(`select`,{"onUpdate:modelValue":u[2]||=e=>r.status=e,class:`filter-input`},[...u[14]||=[H(`option`,{value:``},`全部状态`,-1),H(`option`,{value:`1`},`启用`,-1),H(`option`,{value:`0`},`停用`,-1)]],512),[[No,r.status]]),u[15]||=H(`button`,{class:`button button--dark`,type:`submit`},`查询`,-1),H(`button`,{class:`button button--ghost`,type:`button`,onClick:f},`重置`)],32),a.value?(B(),V(`div`,Wl,j(a.value),1)):G(``,!0),H(`div`,Gl,[H(`table`,null,[u[18]||=H(`thead`,null,[H(`tr`,null,[H(`th`,null,`机台`),H(`th`,null,`区域 / 类型`),H(`th`,null,`品牌型号`),H(`th`,null,`连接地址`),H(`th`,null,`顺序`),H(`th`,null,`状态`),H(`th`,null,`更新时间`),H(`th`,{class:`align-right`},`操作`)])],-1),H(`tbody`,null,[i.value?(B(),V(`tr`,Kl,[...u[16]||=[H(`td`,{colspan:`8`,class:`table-state`},`正在读取机台数据…`,-1)]])):t.value.length===0?(B(),V(`tr`,ql,[...u[17]||=[H(`td`,{colspan:`8`,class:`table-state`},`没有符合条件的机台`,-1)]])):(B(!0),V(z,{key:2},R(t.value,e=>(B(),V(`tr`,{key:e.MachineID},[H(`td`,null,[H(`div`,Jl,[H(`span`,null,j(e.MachineNO.slice(0,2).toUpperCase()),1),H(`div`,null,[H(`strong`,null,j(e.MachineNO),1),H(`small`,null,j(e.ShortName||e.FullName||`未设置名称`),1)])])]),H(`td`,null,[H(`strong`,null,j(e.Area),1),H(`small`,Yl,j(e.Stype),1)]),H(`td`,null,j([e.Brand,e.Model].filter(Boolean).join(` / `)||`—`),1),H(`td`,null,[H(`code`,null,j(e.IpAddr||`未配置`)+j(e.PortNum?`:${e.PortNum}`:``),1)]),H(`td`,null,j(e.OrderBy??0),1),H(`td`,null,[H(`span`,{class:A([`status-pill`,e.Status===1?`status-pill--on`:`status-pill--off`])},j(e.Status===1?`启用`:`停用`),3)]),H(`td`,null,[H(`small`,null,j(e.UpdateTime),1)]),H(`td`,Xl,[H(`button`,{class:`text-button`,onClick:t=>m(e)},`编辑`,8,Zl),e.Status===1?(B(),V(`button`,{key:0,class:`text-button text-button--danger`,onClick:t=>g(e)},`停用`,8,Ql)):G(``,!0)])]))),128))])])]),H(`footer`,$l,[H(`span`,null,`共 `+j(n.value.total)+` 条，第 `+j(n.value.page)+` / `+j(Math.max(n.value.pageCount,1))+` 页`,1),H(`div`,null,[H(`button`,{disabled:n.value.page<=1,onClick:u[3]||=e=>_(n.value.page-1)},`上一页`,8,eu),H(`button`,{disabled:n.value.page>=n.value.pageCount,onClick:u[4]||=e=>_(n.value.page+1)},`下一页`,8,tu)])])]),U(Bl,{open:o.value,machine:s.value,onClose:u[5]||=e=>o.value=!1,onSaved:h},null,8,[`open`,`machine`])]))}}),ru={class:`type-layout`},iu={class:`card type-editor`},au=[`disabled`],ou={class:`type-form__actions`},su=[`disabled`],cu={class:`card type-list`},lu={key:0,class:`notice notice--error`},uu={key:1,class:`table-state`},du={key:2,class:`type-grid`},fu={class:`type-icon`},pu=[`src`,`alt`],mu={key:1},hu={class:`type-item__body`},gu={class:`type-item__actions`},_u={class:`text-button upload-button`},vu=[`onChange`],yu=[`onClick`],bu=[`onClick`],xu=L({__name:`MachineTypesView`,setup(e){let t=P([]),n=P(!1),r=P(!1),i=P(``),a=P(null),o=Wt({Stype:``,DisplayName:``,Status:1,OrderBy:0}),s=async()=>{n.value=!0,i.value=``;try{t.value=await yl()}catch(e){i.value=e instanceof Error?e.message:`设备类型加载失败`}finally{n.value=!1}},c=()=>{a.value=null,Object.assign(o,{Stype:``,DisplayName:``,Status:1,OrderBy:0})},l=e=>{a.value=e.Stype,Object.assign(o,{Stype:e.Stype,DisplayName:e.DisplayName,Status:e.Status,OrderBy:e.OrderBy})},u=async()=>{if(!o.Stype.trim()||!o.DisplayName.trim()){i.value=`请填写类型编码和显示名称`;return}r.value=!0;try{a.value?await xl(a.value,{DisplayName:o.DisplayName.trim(),Status:o.Status,OrderBy:o.OrderBy}):await bl({...o,Stype:o.Stype.trim(),DisplayName:o.DisplayName.trim()}),c(),await s()}catch(e){i.value=e instanceof Error?e.message:`保存失败`}finally{r.value=!1}},d=async(e,t)=>{let n=t.target,r=n.files?.[0];if(n.value=``,r){if(![`image/png`,`image/jpeg`,`image/webp`,`image/gif`].includes(r.type)){i.value=`仅支持 PNG、JPEG、WebP 或 GIF 图片`;return}if(r.size>2e6){i.value=`图片不能超过 2MB`;return}try{await Cl(e.Stype,r),await s()}catch(e){i.value=e instanceof Error?e.message:`图标上传失败`}}},f=async e=>{if(window.confirm(`确定停用设备类型“${e.DisplayName}”吗？已有机台数据不会删除。`))try{await Sl(e.Stype),await s()}catch(e){i.value=e instanceof Error?e.message:`停用失败`}};return Tr(()=>void s()),(e,s)=>(B(),V(`div`,ru,[H(`section`,iu,[s[11]||=H(`span`,{class:`eyebrow`},`MACHINE TYPE`,-1),H(`h2`,null,j(a.value?`编辑设备类型`:`新增设备类型`),1),H(`form`,{class:`type-form`,onSubmit:zo(u,[`prevent`])},[H(`label`,null,[s[4]||=W(`类型编码 `,-1),s[5]||=H(`b`,null,`*`,-1),I(H(`input`,{"onUpdate:modelValue":s[0]||=e=>o.Stype=e,maxlength:`30`,disabled:!!a.value,placeholder:`例如：Brother`},null,8,au),[[q,o.Stype]])]),H(`label`,null,[s[6]||=W(`显示名称 `,-1),s[7]||=H(`b`,null,`*`,-1),I(H(`input`,{"onUpdate:modelValue":s[1]||=e=>o.DisplayName=e,maxlength:`100`,placeholder:`例如：兄弟加工中心`},null,512),[[q,o.DisplayName]])]),H(`label`,null,[s[8]||=W(`显示顺序`,-1),I(H(`input`,{"onUpdate:modelValue":s[2]||=e=>o.OrderBy=e,type:`number`},null,512),[[q,o.OrderBy,void 0,{number:!0}]])]),H(`label`,null,[s[10]||=W(`状态`,-1),I(H(`select`,{"onUpdate:modelValue":s[3]||=e=>o.Status=e},[...s[9]||=[H(`option`,{value:1},`启用`,-1),H(`option`,{value:0},`停用`,-1)]],512),[[No,o.Status,void 0,{number:!0}]])]),H(`div`,ou,[a.value?(B(),V(`button`,{key:0,type:`button`,class:`button button--ghost`,onClick:c},`取消`)):G(``,!0),H(`button`,{class:`button button--primary`,disabled:r.value},j(r.value?`保存中…`:`保存类型`),9,su)])],32)]),H(`section`,cu,[H(`header`,null,[s[12]||=H(`div`,null,[H(`span`,{class:`eyebrow`},`TYPE DIRECTORY`),H(`h2`,null,`设备类型与机台图标`)],-1),H(`span`,null,j(t.value.length)+` 种类型`,1)]),i.value?(B(),V(`p`,lu,j(i.value),1)):G(``,!0),n.value?(B(),V(`div`,uu,`正在读取设备类型…`)):(B(),V(`div`,du,[(B(!0),V(z,null,R(t.value,e=>(B(),V(`article`,{key:e.Stype,class:`type-item`},[H(`div`,fu,[e.IconUrl?(B(),V(`img`,{key:0,src:e.IconUrl,alt:`${e.DisplayName}图标`},null,8,pu)):(B(),V(`span`,mu,`无图`))]),H(`div`,hu,[H(`div`,null,[H(`strong`,null,j(e.DisplayName),1),H(`code`,null,j(e.Stype),1)]),H(`small`,null,j(e.MachineCount)+` 台机台 · 顺序 `+j(e.OrderBy),1),H(`span`,{class:A([`status-pill`,e.Status?`status-pill--on`:`status-pill--off`])},j(e.Status?`启用`:`停用`),3)]),H(`div`,gu,[H(`label`,_u,[s[13]||=W(`更换图标`,-1),H(`input`,{type:`file`,accept:`image/png,image/jpeg,image/webp,image/gif`,onChange:t=>d(e,t)},null,40,vu)]),H(`button`,{class:`text-button`,onClick:t=>l(e)},`编辑`,8,yu),e.Status?(B(),V(`button`,{key:0,class:`text-button text-button--danger`,onClick:t=>f(e)},`停用`,8,bu)):G(``,!0)])]))),128))]))])]))}}),Su=(e,t)=>{let n=e.__vccOpts||e;for(let[e,r]of t)n[e]=r;return n},Cu=Su(xu,[[`__scopeId`,`data-v-f7dd5510`]]),wu=async()=>(await Y(`/api/admin/planning/products`)).data,Tu=async e=>(await Y(`/api/admin/planning/products`,{method:`POST`,body:JSON.stringify(e)})).data,Eu=async(e,t)=>(await Y(`/api/admin/planning/products/${e}`,{method:`PUT`,body:JSON.stringify(t)})).data,Du=async e=>Y(`/api/admin/planning/products/${e}`,{method:`DELETE`}),Ou=async e=>(await Y(`/api/admin/planning/products/import`,{method:`POST`,body:JSON.stringify({rows:e})})).data,ku=async()=>(await Y(`/api/admin/planning/machines`)).data,Au=async(e,t,n)=>(await Y(`/api/admin/planning/schedules?${new URLSearchParams({start:e,end:t,area:n})}`)).data,ju=async e=>(await Y(`/api/admin/planning/schedules`,{method:`POST`,body:JSON.stringify(e)})).data,Mu=async(e,t)=>(await Y(`/api/admin/planning/schedules/${e}`,{method:`PUT`,body:JSON.stringify(t)})).data,Nu=async e=>Y(`/api/admin/planning/schedules/${e}`,{method:`DELETE`}),Pu=async e=>(await Y(`/api/admin/planning/schedules/import`,{method:`POST`,body:JSON.stringify({rows:e})})).data,Fu=`modulepreload`,Iu=function(e){return`/`+e},Lu={},Ru=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Iu(t,n),t=s(t),t in Lu)return;Lu[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Fu,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},zu=e=>{if(e&&typeof e==`object`){if(`text`in e)return String(e.text??``).trim();if(`result`in e)return String(e.result??``).trim()}return String(e??``).trim()},Bu=e=>zu(e),Vu=async e=>{let{default:t}=await Ru(async()=>{let{default:e}=await import(`./exceljs.min-Doha2Ajm.js`).then(e=>c(e.default,1));return{default:e}},[]),n=new t.Workbook;await n.xlsx.load(await e.arrayBuffer());let r=n.worksheets[0];if(!r)throw Error(`Excel 中没有工作表`);let i=new Map;return r.getRow(1).eachCell((e,t)=>i.set(zu(e.value),t)),{sheet:r,headers:i}},Hu=(e,t,n)=>{for(let r of n){let n=t.get(r);if(n)return e.getCell(n).value}return``},Uu=e=>String(e).padStart(2,`0`),Wu=e=>`${e.getFullYear()}-${Uu(e.getMonth()+1)}-${Uu(e.getDate())} ${Uu(e.getHours())}:${Uu(e.getMinutes())}:${Uu(e.getSeconds())}`,Gu=e=>{if(e instanceof Date)return Wu(e);if(typeof e==`number`){let t=Math.round((e-25569)*864e5),n=new Date(t);return`${n.getUTCFullYear()}-${Uu(n.getUTCMonth()+1)}-${Uu(n.getUTCDate())} ${Uu(n.getUTCHours())}:${Uu(n.getUTCMinutes())}:${Uu(n.getUTCSeconds())}`}let t=zu(e).replaceAll(`/`,`-`).replace(`T`,` `);return/^\d{4}-\d{2}-\d{2}$/.test(t)?`${t} 00:00:00`:/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/.test(t)?`${t}:00`:t},Ku=async e=>{let{default:t}=await Ru(async()=>{let{default:e}=await import(`./exceljs.min-Doha2Ajm.js`).then(e=>c(e.default,1));return{default:e}},[]),n=new t.Workbook,r=n.addWorksheet(e.sheetName);r.addRow(e.headers),r.addRow(e.example),r.getRow(1).font={bold:!0,color:{argb:`FFFFFFFF`}},r.getRow(1).fill={type:`pattern`,pattern:`solid`,fgColor:{argb:`FF287B6D`}},r.views=[{state:`frozen`,ySplit:1}],r.autoFilter={from:{row:1,column:1},to:{row:1,column:e.headers.length}},r.columns.forEach(e=>{e.width=18});let i=await n.xlsx.writeBuffer(),a=URL.createObjectURL(new Blob([new Uint8Array(i)],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`})),o=document.createElement(`a`);o.href=a,o.download=e.fileName,o.click(),URL.revokeObjectURL(a)},qu={class:`summary-strip`},Ju={class:`card machine-card`},Yu={class:`machine-card__header`},Xu={key:0,class:`planning-import-actions`},Zu=[`disabled`],Qu={class:`filter-bar`},$u={class:`search-field`},ed={key:0,class:`notice`},td={key:1,class:`notice notice--error`},nd={class:`table-wrap`},rd={key:0},id={key:1},ad={class:`align-right`},od=[`onClick`],sd=[`onClick`],cd={key:0,class:`dialog-layer`},ld={class:`machine-dialog`},ud={class:`machine-dialog__header`},dd={class:`form-section`},fd={class:`form-grid`},pd={class:`machine-dialog__footer`},md=Su(L({__name:`ProductsView`,setup(e){let t=P([]),n=P(``),r=P(!1),i=P(``),a=P(null),o=P(!1),s=P(null),c=P(!1),l=P(``),u=()=>({ProductCode:``,ProductName:``,ShortName:null,Specification:null,CycleSeconds:60,Cavities:1,Status:1}),d=P(u()),f=K(()=>t.value.filter(e=>`${e.ProductCode}${e.ProductName}${e.ShortName??``}${e.Specification??``}`.toLowerCase().includes(n.value.toLowerCase()))),p=async()=>{r.value=!0,i.value=``;try{t.value=await wu()}catch(e){i.value=e instanceof Error?e.message:`产品数据加载失败`}finally{r.value=!1}},m=e=>{a.value=e??null,d.value=e?{ProductCode:e.ProductCode,ProductName:e.ProductName,ShortName:e.ShortName,Specification:e.Specification,CycleSeconds:e.CycleSeconds,Cavities:e.Cavities,Status:e.Status}:u(),o.value=!0},h=async()=>{i.value=``;try{a.value?await Eu(a.value.ProductID,d.value):await Tu(d.value),o.value=!1,await p()}catch(e){i.value=e instanceof Error?e.message:`保存失败`}},g=async e=>{confirm(`确定停用产品“${e.ProductName}”吗？历史排产不会受影响。`)&&(await Du(e.ProductID),await p())},_=e=>Math.round(3600/e.CycleSeconds*e.Cavities*100)/100,v=async e=>{let t=e.target,n=t.files?.[0];if(t.value=``,n){c.value=!0,i.value=``,l.value=``;try{let{sheet:e,headers:t}=await Vu(n),r=[];if(e.eachRow((e,n)=>{if(n===1)return;let i=Bu(Hu(e,t,[`产品编码`,`ProductCode`])),a=Bu(Hu(e,t,[`产品名称`,`ProductName`]));if(!i&&!a)return;let o=Number(Bu(Hu(e,t,[`基本加工时间（秒）`,`基本加工时间`,`CycleSeconds`]))),s=Number(Bu(Hu(e,t,[`一模多穴（pcs）`,`一模多穴`,`Cavities`])));if(!i||!a||!Number.isFinite(o)||o<=0||!Number.isInteger(s)||s<=0)throw Error(`第 ${n} 行产品编码、产品名称、基本加工时间或一模多穴无效`);let c=Bu(Hu(e,t,[`状态`,`Status`]));r.push({ProductCode:i,ProductName:a,ShortName:Bu(Hu(e,t,[`产品简称`,`简称`,`ShortName`]))||null,Specification:Bu(Hu(e,t,[`规格型号`,`Specification`]))||null,CycleSeconds:o,Cavities:s,Status:+![`0`,`停用`].includes(c)})}),!r.length)throw Error(`没有读取到产品；请使用产品批量导入模板`);let i=await Ou(r);l.value=`产品导入完成：新增 ${i.inserted}，更新 ${i.updated}，共 ${i.total} 条`,await p()}catch(e){i.value=e instanceof Error?e.message:`产品批量导入失败`}finally{c.value=!1}}},y=()=>Ku({sheetName:`产品信息`,fileName:`产品信息批量导入模板.xlsx`,headers:[`产品编码`,`产品名称`,`产品简称`,`规格型号`,`基本加工时间（秒）`,`一模多穴（pcs）`,`状态`],example:[`A001`,`示例产品`,`产品A`,`100×50`,60,1,1]});return Tr(p),(e,u)=>(B(),V(`div`,null,[H(`section`,qu,[H(`div`,null,[u[13]||=H(`span`,null,`产品总数`,-1),H(`strong`,null,j(t.value.length),1),u[14]||=H(`small`,null,`项`,-1)]),H(`div`,null,[u[15]||=H(`span`,null,`启用产品`,-1),H(`strong`,null,j(t.value.filter(e=>e.Status).length),1),u[16]||=H(`small`,null,`项`,-1)]),u[17]||=H(`div`,null,[H(`span`,null,`产能参数`),H(`strong`,null,`秒 / pcs`),H(`small`,null,`自动换算`)],-1),F(Z)(`products`,!0)?(B(),V(`button`,{key:0,class:`button button--primary`,onClick:u[0]||=e=>m()},`＋ 新增产品`)):G(``,!0)]),H(`section`,Ju,[H(`header`,Yu,[u[18]||=H(`div`,null,[H(`span`,{class:`eyebrow`},`PRODUCT MASTER`),H(`h2`,null,`产品信息`),H(`p`,null,`基础加工时间与一模多穴共同决定产品标准产能。`)],-1),F(Z)(`products`,!0)?(B(),V(`div`,Xu,[H(`input`,{ref_key:`importInput`,ref:s,type:`file`,accept:`.xlsx`,hidden:``,onChange:v},null,544),H(`button`,{class:`button button--ghost`,type:`button`,onClick:y},`下载导入模板`),H(`button`,{class:`button button--dark`,type:`button`,disabled:c.value,onClick:u[1]||=e=>s.value?.click()},j(c.value?`导入中…`:`批量导入`),9,Zu)])):G(``,!0)]),H(`div`,Qu,[H(`label`,$u,[u[19]||=H(`span`,null,`⌕`,-1),I(H(`input`,{"onUpdate:modelValue":u[2]||=e=>n.value=e,placeholder:`搜索编码、名称或规格`},null,512),[[q,n.value]])])]),l.value?(B(),V(`div`,ed,j(l.value),1)):G(``,!0),i.value?(B(),V(`div`,td,j(i.value),1)):G(``,!0),H(`div`,nd,[H(`table`,null,[u[23]||=H(`thead`,null,[H(`tr`,null,[H(`th`,null,`产品编码`),H(`th`,null,`产品名称`),H(`th`,null,`简称`),H(`th`,null,`规格型号`),H(`th`,null,`基本加工时间`),H(`th`,null,`一模多穴`),H(`th`,null,`小时标准产量`),H(`th`,null,`状态`),H(`th`,{class:`align-right`},`操作`)])],-1),H(`tbody`,null,[r.value?(B(),V(`tr`,rd,[...u[20]||=[H(`td`,{colspan:`9`,class:`table-state`},`正在读取产品数据…`,-1)]])):f.value.length?(B(!0),V(z,{key:2},R(f.value,e=>(B(),V(`tr`,{key:e.ProductID},[H(`td`,null,[H(`strong`,null,j(e.ProductCode),1)]),H(`td`,null,j(e.ProductName),1),H(`td`,null,j(e.ShortName||`—`),1),H(`td`,null,j(e.Specification||`—`),1),H(`td`,null,j(e.CycleSeconds)+` s`,1),H(`td`,null,j(e.Cavities)+` pcs`,1),H(`td`,null,[H(`strong`,null,j(_(e)),1),u[22]||=W(` pcs`,-1)]),H(`td`,null,[H(`span`,{class:A([`status-pill`,e.Status?`status-pill--on`:`status-pill--off`])},j(e.Status?`启用`:`停用`),3)]),H(`td`,ad,[F(Z)(`products`,!0)?(B(),V(`button`,{key:0,class:`text-button`,onClick:t=>m(e)},`编辑`,8,od)):G(``,!0),e.Status&&F(Z)(`products`,!0)?(B(),V(`button`,{key:1,class:`text-button text-button--danger`,onClick:t=>g(e)},`停用`,8,sd)):G(``,!0)])]))),128)):(B(),V(`tr`,id,[...u[21]||=[H(`td`,{colspan:`9`,class:`table-state`},`暂无产品信息`,-1)]]))])])])]),o.value?(B(),V(`div`,cd,[H(`button`,{class:`dialog-scrim`,onClick:u[3]||=e=>o.value=!1}),H(`aside`,ld,[H(`header`,ud,[H(`div`,null,[u[24]||=H(`span`,{class:`eyebrow`},`PRODUCT`,-1),H(`h2`,null,j(a.value?`编辑产品`:`新增产品`),1)]),H(`button`,{class:`icon-button`,title:`关闭`,onClick:u[4]||=e=>o.value=!1},`×`)]),H(`form`,{class:`machine-form`,onSubmit:zo(h,[`prevent`])},[H(`section`,dd,[u[37]||=H(`h3`,null,`产品资料与产能参数`,-1),H(`div`,fd,[H(`label`,null,[u[25]||=W(`产品编码 `,-1),u[26]||=H(`b`,null,`*`,-1),I(H(`input`,{"onUpdate:modelValue":u[5]||=e=>d.value.ProductCode=e,required:``,maxlength:`80`},null,512),[[q,d.value.ProductCode,void 0,{trim:!0}]])]),H(`label`,null,[u[27]||=W(`产品名称 `,-1),u[28]||=H(`b`,null,`*`,-1),I(H(`input`,{"onUpdate:modelValue":u[6]||=e=>d.value.ProductName=e,required:``,maxlength:`160`},null,512),[[q,d.value.ProductName,void 0,{trim:!0}]])]),H(`label`,null,[u[29]||=W(`产品简称`,-1),I(H(`input`,{"onUpdate:modelValue":u[7]||=e=>d.value.ShortName=e,maxlength:`80`},null,512),[[q,d.value.ShortName,void 0,{trim:!0}]])]),H(`label`,null,[u[30]||=W(`规格型号`,-1),I(H(`input`,{"onUpdate:modelValue":u[8]||=e=>d.value.Specification=e,maxlength:`200`},null,512),[[q,d.value.Specification,void 0,{trim:!0}]])]),H(`label`,null,[u[31]||=W(`基本加工时间（秒）`,-1),u[32]||=H(`b`,null,`*`,-1),I(H(`input`,{"onUpdate:modelValue":u[9]||=e=>d.value.CycleSeconds=e,required:``,type:`number`,min:`0.01`,step:`0.01`},null,512),[[q,d.value.CycleSeconds,void 0,{number:!0}]])]),H(`label`,null,[u[33]||=W(`一模多穴（pcs）`,-1),u[34]||=H(`b`,null,`*`,-1),I(H(`input`,{"onUpdate:modelValue":u[10]||=e=>d.value.Cavities=e,required:``,type:`number`,min:`1`,step:`1`},null,512),[[q,d.value.Cavities,void 0,{number:!0}]])]),H(`label`,null,[u[36]||=W(`状态`,-1),I(H(`select`,{"onUpdate:modelValue":u[11]||=e=>d.value.Status=e},[...u[35]||=[H(`option`,{value:1},`启用`,-1),H(`option`,{value:0},`停用`,-1)]],512),[[No,d.value.Status,void 0,{number:!0}]])])])]),H(`footer`,pd,[H(`button`,{type:`button`,class:`button button--ghost`,onClick:u[12]||=e=>o.value=!1},`取消`),u[38]||=H(`button`,{class:`button button--primary`},`保存产品`,-1)])],32)])])):G(``,!0)]))}}),[[`__scopeId`,`data-v-d570e7d3`]]),hd={class:`planning-page`},gd={class:`planning-toolbar`},_d={key:0,class:`schedule-import-actions`},vd=[`disabled`],yd={key:0,class:`notice`},bd={key:1,class:`notice notice--error`},xd={class:`planning-grid`},Sd=[`value`],Cd=[`value`],wd=[`disabled`],Td={class:`timeline-panel`},Ed={class:`timeline-hours`},Dd={key:0,class:`table-state`},Od={key:1,class:`table-state`},kd={class:`timeline-machine`},Ad={class:`timeline-track`},jd=[`title`,`onClick`],Md={key:0},Nd={class:`schedule-events`},Pd={key:0,class:`empty-inline`},Fd=[`onClick`],Id=[`onClick`],Ld=Su(L({__name:`SchedulesView`,setup(e){let t=P(((e=new Date)=>`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`)()),n=P(`一楼`),r=P([]),i=P([]),a=P([]),o=P(!1),s=P(``),c=P(null),l=P(!1),u=P(``),d=P(null),f=P({MachineID:0,ProductID:null,StartTime:`${t.value}T08:00`,Note:null}),p=K(()=>[...new Set(r.value.map(e=>e.Area))]),m=K(()=>r.value.filter(e=>e.Area===n.value)),h=K(()=>new Date(`${t.value}T00:00:00`).getTime()),g=K(()=>h.value+864e5),_=e=>e===null?`#82908c`:[`#17766e`,`#2f6fa3`,`#b47920`,`#9b4d5d`,`#6b5ca5`][e%5],v=e=>{let t=a.value.filter(t=>t.MachineID===e).sort((e,t)=>e.StartTime.localeCompare(t.StartTime)),n=t.filter(e=>new Date(e.StartTime.replace(` `,`T`)).getTime()<h.value).at(-1),r=t.filter(e=>{let t=new Date(e.StartTime.replace(` `,`T`)).getTime();return t>=h.value&&t<g.value}),i=n?[n,...r]:r;return i.map((e,t)=>{let n=new Date(e.StartTime.replace(` `,`T`)).getTime(),r=Math.max(n,h.value),a=i[t+1]?new Date(i[t+1].StartTime.replace(` `,`T`)).getTime():g.value,o=Math.min(a,g.value);return{...e,left:(r-h.value)/864e3,width:Math.max((o-r)/864e3,.6),startsBefore:n<h.value}})},y=async()=>{o.value=!0,s.value=``;try{a.value=await Au(t.value,t.value,n.value)}catch(e){s.value=e instanceof Error?e.message:`排产加载失败`}finally{o.value=!1}},b=()=>{c.value=null,f.value={MachineID:m.value[0]?.MachineID??0,ProductID:null,StartTime:`${t.value}T08:00`,Note:null}},x=async()=>{s.value=``;try{c.value?await Mu(c.value,f.value):await ju(f.value),b(),await y()}catch(e){s.value=e instanceof Error?e.message:`保存排产失败`}},S=e=>{c.value=e.ScheduleID,f.value={MachineID:e.MachineID,ProductID:e.ProductID,StartTime:e.StartTime.replace(` `,`T`).slice(0,16),Note:e.Note}},C=async e=>{confirm(`删除 ${e.MachineNO} 在 ${e.StartTime} 的排产点？`)&&(await Nu(e.ScheduleID),c.value===e.ScheduleID&&b(),await y())},w=async e=>{let t=e.target,n=t.files?.[0];if(t.value=``,n){l.value=!0,s.value=``,u.value=``;try{let{sheet:e,headers:t}=await Vu(n),r=[];if(e.eachRow((e,n)=>{if(n===1)return;let i=Bu(Hu(e,t,[`机台编码`,`MachineNO`])),a=Gu(Hu(e,t,[`开始时间`,`StartTime`])),o=Bu(Hu(e,t,[`产品编码`,`ProductCode`]))||null;if(!(!i&&!a&&!o)){if(!i||!/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(a))throw Error(`第 ${n} 行机台编码或开始时间无效`);r.push({MachineNO:i,ProductCode:o,StartTime:a,Note:Bu(Hu(e,t,[`备注`,`Note`]))||null})}}),!r.length)throw Error(`没有读取到排产点；请使用机台排产批量导入模板`);let i=await Pu(r);u.value=`排产导入完成：新增 ${i.inserted}，更新 ${i.updated}，共 ${i.total} 条`,await y()}catch(e){s.value=e instanceof Error?e.message:`机台排产批量导入失败`}finally{l.value=!1}}},T=()=>Ku({sheetName:`机台排产`,fileName:`机台排产批量导入模板.xlsx`,headers:[`机台编码`,`开始时间`,`产品编码`,`备注`],example:[`C1`,`${t.value} 08:00:00`,`A001`,`示例；产品编码留空表示停产`]});return Gn([t,n],()=>{b(),y()}),Tr(async()=>{try{[r.value,i.value]=await Promise.all([ku(),wu()]),p.value.includes(n.value)||(n.value=p.value[0]??``),b(),await y()}catch(e){s.value=e instanceof Error?e.message:`基础数据加载失败`}}),(e,r)=>(B(),V(`div`,hd,[H(`section`,gd,[H(`div`,null,[r[7]||=H(`span`,{class:`eyebrow`},`MACHINE SCHEDULE`,-1),r[8]||=H(`h2`,null,`机台排产时间线`,-1),r[9]||=H(`p`,null,`一个排产点从设定时刻持续生效，直到该机台出现下一个排产点。`,-1),F(Z)(`schedules`,!0)?(B(),V(`div`,_d,[H(`input`,{ref_key:`importInput`,ref:d,type:`file`,accept:`.xlsx`,hidden:``,onChange:w},null,544),H(`button`,{class:`button button--ghost`,type:`button`,onClick:T},`下载导入模板`),H(`button`,{class:`button button--dark`,type:`button`,disabled:l.value,onClick:r[0]||=e=>d.value?.click()},j(l.value?`导入中…`:`批量导入`),9,vd)])):G(``,!0)]),H(`label`,null,[r[10]||=W(`排产日期`,-1),I(H(`input`,{"onUpdate:modelValue":r[1]||=e=>t.value=e,type:`date`},null,512),[[q,t.value]])]),H(`label`,null,[r[11]||=W(`楼层 / 区域`,-1),I(H(`select`,{"onUpdate:modelValue":r[2]||=e=>n.value=e},[(B(!0),V(z,null,R(p.value,e=>(B(),V(`option`,{key:e},j(e),1))),128))],512),[[No,n.value]])])]),u.value?(B(),V(`div`,yd,j(u.value),1)):G(``,!0),s.value?(B(),V(`div`,bd,j(s.value),1)):G(``,!0),H(`div`,xd,[F(Z)(`schedules`,!0)?(B(),V(`form`,{key:0,class:`schedule-editor`,onSubmit:zo(x,[`prevent`])},[H(`header`,null,[H(`h3`,null,j(c.value?`编辑排产点`:`新增排产点`),1),c.value?(B(),V(`button`,{key:0,type:`button`,class:`text-button`,onClick:b},`取消编辑`)):G(``,!0)]),H(`label`,null,[r[13]||=W(`机台`,-1),I(H(`select`,{"onUpdate:modelValue":r[3]||=e=>f.value.MachineID=e,required:``},[r[12]||=H(`option`,{value:0,disabled:``},`请选择机台`,-1),(B(!0),V(z,null,R(m.value,e=>(B(),V(`option`,{key:e.MachineID,value:e.MachineID},j(e.MachineNO),9,Sd))),128))],512),[[No,f.value.MachineID,void 0,{number:!0}]])]),H(`label`,null,[r[14]||=W(`开始时间`,-1),I(H(`input`,{"onUpdate:modelValue":r[4]||=e=>f.value.StartTime=e,type:`datetime-local`,required:``},null,512),[[q,f.value.StartTime]])]),H(`label`,null,[r[16]||=W(`生产产品`,-1),I(H(`select`,{"onUpdate:modelValue":r[5]||=e=>f.value.ProductID=e},[r[15]||=H(`option`,{value:null},`停产 / 排空`,-1),(B(!0),V(z,null,R(i.value.filter(e=>e.Status),e=>(B(),V(`option`,{key:e.ProductID,value:e.ProductID},j(e.ProductCode)+` · `+j(e.ShortName||e.ProductName),9,Cd))),128))],512),[[No,f.value.ProductID]])]),H(`label`,null,[r[17]||=W(`备注`,-1),I(H(`textarea`,{"onUpdate:modelValue":r[6]||=e=>f.value.Note=e,rows:`3`,maxlength:`255`,placeholder:`可选`},null,512),[[q,f.value.Note,void 0,{trim:!0}]])]),H(`button`,{class:`button button--primary`,disabled:!f.value.MachineID},j(c.value?`保存修改`:`添加排产点`),9,wd),r[18]||=H(`p`,{class:`editor-tip`},`选择“停产 / 排空”后，该时刻起标准产量为 0。`,-1)],32)):G(``,!0),H(`section`,Td,[H(`div`,Ed,[r[19]||=H(`span`,{class:`machine-axis`},`机台`,-1),(B(),V(z,null,R([0,4,8,12,16,20,24],e=>H(`span`,{key:e,style:ye({left:`calc(150px + (100% - 150px) * ${e/24})`})},j(String(e).padStart(2,`0`))+`:00`,5)),64))]),o.value?(B(),V(`div`,Dd,`正在生成时间线…`)):m.value.length?(B(!0),V(z,{key:2},R(m.value,e=>(B(),V(`div`,{key:e.MachineID,class:`timeline-row`},[H(`div`,kd,[H(`strong`,null,j(e.MachineNO),1),H(`small`,null,j(e.ShortName||`未命名`),1)]),H(`div`,Ad,[(B(!0),V(z,null,R(v(e.MachineID),e=>(B(),V(`button`,{key:e.ScheduleID,class:A([`timeline-segment`,{"timeline-segment--empty":e.ProductID===null}]),style:ye({left:`${e.left}%`,width:`${e.width}%`,background:_(e.ProductID)}),title:`${e.StartTime} · ${e.ProductCode||`停产`}${e.Note?` · `+e.Note:``}`,onClick:t=>S(e)},[H(`span`,null,j(e.ProductCode||`停产`),1),e.startsBefore?G(``,!0):(B(),V(`small`,Md,j(e.StartTime.slice(11,16)),1))],14,jd))),128))])]))),128)):(B(),V(`div`,Od,`该区域暂无机台`)),H(`footer`,Nd,[r[20]||=H(`h3`,null,`当日排产点`,-1),a.value.filter(e=>e.StartTime.startsWith(t.value)).length?G(``,!0):(B(),V(`div`,Pd,`当天没有新增排产点，机台继续沿用此前排产。`)),(B(!0),V(z,null,R(a.value.filter(e=>e.StartTime.startsWith(t.value)),e=>(B(),V(`div`,{key:e.ScheduleID,class:`event-row`},[H(`time`,null,j(e.StartTime.slice(11,16)),1),H(`strong`,null,j(e.MachineNO),1),H(`span`,{style:ye({borderColor:_(e.ProductID)})},j(e.ProductCode||`停产 / 排空`),5),H(`small`,null,j(e.Note),1),F(Z)(`schedules`,!0)?(B(),V(`button`,{key:0,class:`text-button`,onClick:t=>S(e)},`编辑`,8,Fd)):G(``,!0),F(Z)(`schedules`,!0)?(B(),V(`button`,{key:1,class:`text-button text-button--danger`,onClick:t=>C(e)},`删除`,8,Id)):G(``,!0)]))),128))])])])]))}}),[[`__scopeId`,`data-v-b93d69dd`]]),Rd={class:`empty-state card`},zd=L({__name:`PlaceholderView`,setup(e){let t=ss();return(e,n)=>(B(),V(`section`,Rd,[n[0]||=H(`div`,{class:`empty-state__icon`},`＋`,-1),n[1]||=H(`span`,{class:`eyebrow`},`RESERVED MODULE`,-1),H(`h2`,null,j(F(t).meta.title),1),n[2]||=H(`p`,null,`页面入口和整体布局已经预留，后续可以在这里继续增加对应的业务功能。`,-1)]))}}),Bd=c(o(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs=r()})(e,(function(){var e=1e3,t=6e4,n=36e5,r=`millisecond`,i=`second`,a=`minute`,o=`hour`,s=`day`,c=`week`,l=`month`,u=`quarter`,d=`year`,f=`date`,p=`Invalid Date`,m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:`en`,weekdays:`Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),months:`January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),ordinal:function(e){var t=[`th`,`st`,`nd`,`rd`],n=e%100;return`[`+e+(t[(n-20)%10]||t[n]||t[0])+`]`}},_=function(e,t,n){var r=String(e);return!r||r.length>=t?e:``+Array(t+1-r.length).join(n)+e},v={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?`+`:`-`)+_(r,2,`0`)+`:`+_(i,2,`0`)},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),a=n-i<0,o=t.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:f,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||``).toLowerCase().replace(/s$/,``)},u:function(e){return e===void 0}},y=`en`,b={};b[y]=g;var x=`$isDayjsObject`,S=function(e){return e instanceof E||!(!e||!e[x])},C=function e(t,n,r){var i;if(!t)return y;if(typeof t==`string`){var a=t.toLowerCase();b[a]&&(i=a),n&&(b[a]=n,i=a);var o=t.split(`-`);if(!i&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},w=function(e,t){if(S(e))return e.clone();var n=typeof t==`object`?t:{};return n.date=e,n.args=arguments,new E(n)},T=v;T.l=C,T.i=S,T.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function g(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var _=g.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(t===null)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t==`string`&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||`0`).substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return T},_.isValid=function(){return this.$d.toString()!==p},_.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return w(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<w(e)},_.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,r=!!T.u(t)||t,u=T.p(e),p=function(e,t){var i=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},m=function(e,t){return T.w(n.toDate()[e].apply(n.toDate(`s`),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,_=this.$D,v=`set`+(this.$u?`UTC`:``);switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,g):p(0,g+1);case c:var y=this.$locale().weekStart||0,b=(h<y?h+7:h)-y;return p(r?_-b:_+(6-b),g);case s:case f:return m(v+`Hours`,0);case o:return m(v+`Minutes`,1);case a:return m(v+`Seconds`,2);case i:return m(v+`Milliseconds`,3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var n,c=T.p(e),u=`set`+(this.$u?`UTC`:``),p=(n={},n[s]=u+`Date`,n[f]=u+`Date`,n[l]=u+`Month`,n[d]=u+`FullYear`,n[o]=u+`Hours`,n[a]=u+`Minutes`,n[i]=u+`Seconds`,n[r]=u+`Milliseconds`,n)[c],m=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var h=this.clone().set(f,1);h.$d[p](m),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[T.p(e)]()},_.add=function(r,u){var f,p=this;r=Number(r);var m=T.p(u),h=function(e){var t=w(p);return T.w(t.date(t.date()+Math.round(e*r)),p)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===s)return h(1);if(m===c)return h(7);var g=(f={},f[a]=t,f[o]=n,f[i]=e,f)[m]||1,_=this.$d.getTime()+r*g;return T.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||`YYYY-MM-DDTHH:mm:ssZ`,i=T.z(this),a=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return T.s(a%12||12,e,`0`)},m=u||function(e,t,n){var r=e<12?`AM`:`PM`;return n?r.toLowerCase():r};return r.replace(h,(function(e,r){return r||function(e){switch(e){case`YY`:return String(t.$y).slice(-2);case`YYYY`:return T.s(t.$y,4,`0`);case`M`:return s+1;case`MM`:return T.s(s+1,2,`0`);case`MMM`:return d(n.monthsShort,s,l,3);case`MMMM`:return d(l,s);case`D`:return t.$D;case`DD`:return T.s(t.$D,2,`0`);case`d`:return String(t.$W);case`dd`:return d(n.weekdaysMin,t.$W,c,2);case`ddd`:return d(n.weekdaysShort,t.$W,c,3);case`dddd`:return c[t.$W];case`H`:return String(a);case`HH`:return T.s(a,2,`0`);case`h`:return f(1);case`hh`:return f(2);case`a`:return m(a,o,!0);case`A`:return m(a,o,!1);case`m`:return String(o);case`mm`:return T.s(o,2,`0`);case`s`:return String(t.$s);case`ss`:return T.s(t.$s,2,`0`);case`SSS`:return T.s(t.$ms,3,`0`);case`Z`:return i}return null}(e)||i.replace(`:`,``)}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,f,p){var m,h=this,g=T.p(f),_=w(r),v=(_.utcOffset()-this.utcOffset())*t,y=this-_,b=function(){return T.m(h,_)};switch(g){case d:m=b()/12;break;case l:m=b();break;case u:m=b()/3;break;case c:m=(y-v)/6048e5;break;case s:m=(y-v)/864e5;break;case o:m=y/n;break;case a:m=y/t;break;case i:m=y/e;break;default:m=y}return p?m:T.a(m)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=C(e,t,!0);return r&&(n.$L=r),n},_.clone=function(){return T.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},g}(),D=E.prototype;return w.prototype=D,[[`$ms`,r],[`$s`,i],[`$m`,a],[`$H`,o],[`$W`,s],[`$M`,l],[`$y`,d],[`$D`,f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||=(e(t,E,w),!0),w},w.locale=C,w.isDayjs=S,w.unix=function(e){return w(1e3*e)},w.en=b[y],w.Ls=b,w.p={},w}))}))(),1),Vd=[{key:`today`,label:`当天`},{key:`week`,label:`一周`},{key:`month`,label:`最近一个月`},{key:`current-month`,label:`当前自然月`}],Hd=e=>{let t=(0,Bd.default)();return e===`today`?{startDate:t.format(`YYYY-MM-DD`),endDate:t.format(`YYYY-MM-DD`)}:e===`week`?{startDate:t.subtract(6,`day`).format(`YYYY-MM-DD`),endDate:t.format(`YYYY-MM-DD`)}:e===`month`?{startDate:t.subtract(1,`month`).format(`YYYY-MM-DD`),endDate:t.format(`YYYY-MM-DD`)}:{startDate:t.startOf(`month`).format(`YYYY-MM-DD`),endDate:t.endOf(`month`).format(`YYYY-MM-DD`)}},Ud={class:`date-preset-control`,role:`group`,"aria-label":`快速选择日期范围`},Wd=[`onClick`],Gd=Su(L({__name:`DateRangePresets`,props:{active:{}},emits:[`select`],setup(e,{emit:t}){let n=t;return(t,r)=>(B(),V(`div`,Ud,[(B(!0),V(z,null,R(F(Vd),t=>(B(),V(`button`,{key:t.key,type:`button`,class:A({active:t.key===e.active}),onClick:e=>n(`select`,t.key)},j(t.label),11,Wd))),128))]))}}),[[`__scopeId`,`data-v-958a9522`]]),Kd=e=>Y(`/api/attendance?${new URLSearchParams(Object.entries(e).map(([e,t])=>[e,String(t)]))}`),qd=()=>Y(`/api/attendance/unmatched-fingerprints`),Jd=async()=>(await Y(`/api/admin/users/sync-oa`,{method:`POST`})).data,Yd={class:`card report-card`},Xd={class:`machine-card__header`},Zd={class:`attendance-header-actions`},Qd=[`disabled`],$d=[`disabled`],ef={class:`page-size page-size--filter`},tf=[`disabled`],nf=[`value`],rf=[`disabled`],af={key:0,class:`notice`},of={key:1,class:`notice notice--error`},sf={class:`report-summary`},cf={class:`table-wrap`},lf={key:0},uf={key:1},df={class:`pagination`},ff=[`disabled`],pf={class:`page-number`},mf=[`disabled`],hf={key:0,class:`dialog-layer`},gf={class:`machine-dialog unmatched-dialog`},_f={class:`machine-dialog__header`},vf={class:`unmatched-dialog__body`},yf={key:0,class:`unmatched-summary`},bf={key:1,class:`notice notice--error`},xf={class:`table-wrap unmatched-table-wrap`},Sf={key:0},Cf={key:1},wf=Su(L({__name:`AttendanceView`,setup(e){let t=[20,50,100,500,1e3,2e3,5e3],n=Hd(`current-month`),r=Wt({name:``,workCode:``,hrNumber:``,startDate:n.startDate,endDate:n.endDate,page:1,pageSize:20}),i=P([]),a=P(!1),o=P(!1),s=P(``),l=P(!1),u=P(!1),d=P(``),f=P(!1),p=P(!1),m=P(``),h=P([]),g=P(`current-month`),_=Wt({page:1,pageSize:20,total:0,pageCount:0}),v=Wt({startTime:``,endTime:``,total:0}),y=async()=>{a.value=!0,o.value=!0,s.value=``;try{let e=await Kd(r);i.value=e.data,Object.assign(_,e.meta),r.page=e.meta.page}catch(e){s.value=e instanceof Error?e.message:`考勤查询失败`}finally{a.value=!1}},b=()=>(r.page=1,y()),x=e=>{g.value=e,Object.assign(r,Hd(e),{page:1}),y()},S=()=>{r.page=1,y()},C=e=>{e<1||e>_.pageCount||e===_.page||(r.page=e,y())},w=async()=>{if(i.value.length){l.value=!0;try{let{default:e}=await Ru(async()=>{let{default:e}=await import(`./exceljs.min-Doha2Ajm.js`).then(e=>c(e.default,1));return{default:e}},[]),t=new e.Workbook,n=t.addWorksheet(`考勤打卡记录`);n.columns=[{header:`用户工号`,key:`userNO`,width:18},{header:`用户姓名`,key:`userName`,width:18},{header:`指纹号`,key:`hrNumber`,width:18},{header:`打卡时间`,key:`logTime`,width:24}],i.value.forEach(e=>n.addRow(e)),n.views=[{state:`frozen`,ySplit:1}],n.getRow(1).font={bold:!0,color:{argb:`FFFFFFFF`}},n.getRow(1).fill={type:`pattern`,pattern:`solid`,fgColor:{argb:`FF3C91D0`}},n.autoFilter=`A1:D1`;let a=await t.xlsx.writeBuffer(),o=URL.createObjectURL(new Blob([new Uint8Array(a)],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`})),s=document.createElement(`a`);s.href=o,s.download=`考勤打卡记录_${r.startDate}_${r.endDate}.xlsx`,s.click(),URL.revokeObjectURL(o)}finally{l.value=!1}}},T=async()=>{u.value=!0,d.value=``,s.value=``;try{let e=await Jd();d.value=`OA 用户同步完成：新增 ${e.inserted}，更新 ${e.updated}`,await y()}catch(e){s.value=e instanceof Error?e.message:`OA 用户同步失败`}finally{u.value=!1}},E=async()=>{f.value=!0,p.value=!0,m.value=``;try{let e=await qd();h.value=e.data,Object.assign(v,e.meta)}catch(e){h.value=[],m.value=e instanceof Error?e.message:`未维护指纹号查询失败`}finally{p.value=!1}};return Tr(b),(e,n)=>(B(),V(z,null,[H(`section`,Yd,[H(`header`,Xd,[n[12]||=H(`div`,null,[H(`span`,{class:`eyebrow`},`ATTENDANCE`),H(`h2`,null,`考勤打卡记录`),H(`p`,null,`查询指纹考勤机的原始打卡记录。`)],-1),H(`div`,Zd,[H(`button`,{class:`button button--ghost`,type:`button`,onClick:E},` 查看未维护的指纹号 `),F(Z)(`attendance`,!0)||F(Z)(`users`,!0)?(B(),V(`button`,{key:0,class:`button button--primary`,type:`button`,disabled:u.value,onClick:T},j(u.value?`同步中…`:`同步 OA 用户`),9,Qd)):G(``,!0)])]),H(`form`,{class:`filter-bar report-filter`,onSubmit:zo(b,[`prevent`])},[U(Gd,{active:g.value,onSelect:x},null,8,[`active`]),H(`label`,null,[n[13]||=H(`span`,null,`用户姓名`,-1),I(H(`input`,{"onUpdate:modelValue":n[0]||=e=>r.name=e,class:`filter-input`,placeholder:`完整姓名`},null,512),[[q,r.name,void 0,{trim:!0}]])]),H(`label`,null,[n[14]||=H(`span`,null,`用户工号`,-1),I(H(`input`,{"onUpdate:modelValue":n[1]||=e=>r.workCode=e,class:`filter-input`,placeholder:`完整工号`},null,512),[[q,r.workCode,void 0,{trim:!0}]])]),H(`label`,null,[n[15]||=H(`span`,null,`指纹号`,-1),I(H(`input`,{"onUpdate:modelValue":n[2]||=e=>r.hrNumber=e,class:`filter-input`,placeholder:`完整指纹号`},null,512),[[q,r.hrNumber,void 0,{trim:!0}]])]),H(`label`,null,[n[16]||=H(`span`,null,`开始日期 *`,-1),I(H(`input`,{"onUpdate:modelValue":n[3]||=e=>r.startDate=e,onInput:n[4]||=e=>g.value=null,class:`filter-input`,type:`date`,required:``},null,544),[[q,r.startDate]])]),H(`label`,null,[n[17]||=H(`span`,null,`结束日期 *`,-1),I(H(`input`,{"onUpdate:modelValue":n[5]||=e=>r.endDate=e,onInput:n[6]||=e=>g.value=null,class:`filter-input`,type:`date`,required:``},null,544),[[q,r.endDate]])]),H(`button`,{class:`button button--dark`,disabled:a.value},j(a.value?`查询中…`:`查询`),9,$d),H(`label`,ef,[n[18]||=H(`span`,null,`每页条数`,-1),I(H(`select`,{"onUpdate:modelValue":n[7]||=e=>r.pageSize=e,disabled:a.value,onChange:S},[(B(),V(z,null,R(t,e=>H(`option`,{key:e,value:e},j(e)+` 条 `,9,nf)),64))],40,tf),[[No,r.pageSize,void 0,{number:!0}]])]),H(`button`,{class:`button button--export`,type:`button`,disabled:a.value||l.value||!i.value.length,onClick:w},j(l.value?`导出中…`:`导出本页 Excel`),9,rf)],32),d.value?(B(),V(`div`,af,j(d.value),1)):G(``,!0),s.value?(B(),V(`div`,of,j(s.value),1)):G(``,!0),H(`div`,sf,[n[19]||=W(` 查询结果：共 `,-1),H(`strong`,null,j(_.total),1),W(` 条，当前第 `+j(_.page)+` / `+j(_.pageCount||1)+` 页 `,1)]),H(`div`,cf,[H(`table`,null,[n[22]||=H(`thead`,null,[H(`tr`,null,[H(`th`,null,`用户工号`),H(`th`,null,`用户姓名`),H(`th`,null,`指纹号`),H(`th`,null,`打卡时间`)])],-1),H(`tbody`,null,[a.value?(B(),V(`tr`,lf,[...n[20]||=[H(`td`,{colspan:`4`,class:`table-state`},`正在读取考勤数据…`,-1)]])):o.value&&!i.value.length?(B(),V(`tr`,uf,[...n[21]||=[H(`td`,{colspan:`4`,class:`table-state`},`没有符合条件的数据`,-1)]])):(B(!0),V(z,{key:2},R(i.value,(e,t)=>(B(),V(`tr`,{key:t},[H(`td`,null,j(e.userNO||`-`),1),H(`td`,null,j(e.userName||`-`),1),H(`td`,null,j(e.hrNumber),1),H(`td`,null,j(e.logTime),1)]))),128))])])]),H(`footer`,df,[H(`span`,null,`共 `+j(_.total)+` 条`,1),H(`div`,null,[H(`button`,{type:`button`,disabled:a.value||_.page<=1,onClick:n[8]||=e=>C(_.page-1)},` 上一页`,8,ff),H(`span`,pf,`第 `+j(_.page)+` / `+j(_.pageCount||1)+` 页`,1),H(`button`,{type:`button`,disabled:a.value||_.page>=_.pageCount,onClick:n[9]||=e=>C(_.page+1)},` 下一页 `,8,mf)])])]),f.value?(B(),V(`div`,hf,[H(`button`,{class:`dialog-scrim`,"aria-label":`关闭`,onClick:n[10]||=e=>f.value=!1}),H(`aside`,gf,[H(`header`,_f,[n[23]||=H(`div`,null,[H(`span`,{class:`eyebrow`},`FINGERPRINT AUDIT`),H(`h2`,null,`最近一个月未维护的指纹号`)],-1),H(`button`,{class:`icon-button`,title:`关闭`,onClick:n[11]||=e=>f.value=!1},`×`)]),H(`div`,vf,[n[27]||=H(`p`,{class:`unmatched-description`},` 以下指纹号最近一个月有打卡记录，但用户管理中不存在对应指纹号。 `,-1),v.startTime?(B(),V(`div`,yf,[H(`span`,null,`统计区间：`+j(v.startTime)+` 至 `+j(v.endTime),1),H(`strong`,null,j(v.total)+` 个`,1)])):G(``,!0),m.value?(B(),V(`div`,bf,j(m.value),1)):G(``,!0),H(`div`,xf,[H(`table`,null,[n[26]||=H(`thead`,null,[H(`tr`,null,[H(`th`,null,`指纹号`),H(`th`,null,`打卡次数`),H(`th`,null,`首次打卡`),H(`th`,null,`最近打卡`)])],-1),H(`tbody`,null,[p.value?(B(),V(`tr`,Sf,[...n[24]||=[H(`td`,{colspan:`4`,class:`table-state`},`正在汇总最近一个月的打卡记录…`,-1)]])):!h.value.length&&!m.value?(B(),V(`tr`,Cf,[...n[25]||=[H(`td`,{colspan:`4`,class:`table-state unmatched-complete`},`最近一个月有打卡记录的指纹号均已维护`,-1)]])):(B(!0),V(z,{key:2},R(h.value,e=>(B(),V(`tr`,{key:e.hrNumber},[H(`td`,null,[H(`strong`,null,j(e.hrNumber),1)]),H(`td`,null,j(e.punchCount),1),H(`td`,null,j(e.firstPunchTime),1),H(`td`,null,j(e.lastPunchTime),1)]))),128))])])])])])])):G(``,!0)],64))}}),[[`__scopeId`,`data-v-139d4ccc`]]),Tf=e=>Y(`/api/reports?${new URLSearchParams({...e})}`),Ef={class:`card report-card`},Df=[`value`],Of=[`disabled`],kf=[`disabled`],Af={key:0,class:`notice notice--error`},jf={class:`report-summary`},Mf={class:`table-wrap`},Nf={key:0},Pf=[`colspan`],Ff={key:1},If=[`colspan`],Lf={key:0},Rf={key:0},zf={key:1},Bf={key:2},Vf={key:3},Hf={key:4},Uf=Su(L({__name:`ReportsView`,setup(e){let t=Hd(`current-month`),n=Wt({type:`leave`,name:``,workCode:``,startDate:t.startDate,endDate:t.endDate}),r=[{value:`leave`,label:`请假单`},{value:`group-leave`,label:`请假单（多人）`},{value:`group-overtime`,label:`加班申请单（多人）`},{value:`travel`,label:`出差申请单`},{value:`sign-card`,label:`签卡单`}],i={requestId:`流程编号`,workCode:`工号`,name:`姓名`,hireDate:`入职日期`,startDate:`开始日期`,startTime:`开始时间`,endDate:`结束日期`,endTime:`结束时间`,days:`共计天`,hours:`共计时`,minutes:`共计分`,leaveType:`请假类型`,reason:`事由`,remark:`备注`,destination:`出差地点`,signDate:`签卡日期`,scheduleTime:`排班时间`,signTime:`签卡时间`,attendanceStatus:`考勤状态`,signCategory:`签卡类别`,makeupType:`补卡类型`,createdAt:`创建时间`,currentNode:`当前节点`},a=[`workCode`,`name`,`hireDate`,`startDate`,`startTime`,`endDate`,`endTime`,`signDate`,`scheduleTime`,`signTime`,`attendanceStatus`,`signCategory`,`makeupType`,`days`,`hours`,`minutes`,`leaveType`,`destination`,`reason`,`remark`,`createdAt`,`currentNode`,`requestId`],o=P([]),s=P(!1),l=P(!1),u=P(!1),d=P(``),f=P(`current-month`),p=K(()=>a.filter(e=>o.value.some(t=>e in t))),m=K(()=>[`leave`,`group-leave`,`group-overtime`].includes(n.type)),h=e=>o.value.reduce((t,n)=>t+(Number(n[e])||0),0);Gn(()=>n.type,()=>{o.value=[],u.value=!1,d.value=``});let g=async()=>{if(!n.startDate||!n.endDate){d.value=`日期范围为必填项`;return}if(n.startDate>n.endDate){d.value=`开始日期不能晚于结束日期`;return}s.value=!0,u.value=!0,d.value=``;try{o.value=(await Tf(n)).data}catch(e){d.value=e instanceof Error?e.message:`报表查询失败`}finally{s.value=!1}},_=e=>{f.value=e,Object.assign(n,Hd(e)),g()},v=async()=>{if(o.value.length){l.value=!0;try{let{default:e}=await Ru(async()=>{let{default:e}=await import(`./exceljs.min-Doha2Ajm.js`).then(e=>c(e.default,1));return{default:e}},[]),t=new e.Workbook,a=r.find(e=>e.value===n.type),s=t.addWorksheet(a?.label??`报表`);if(s.columns=p.value.map(e=>({header:i[e]??e,key:e,width:e===`reason`?35:20})),o.value.forEach(e=>s.addRow(Object.fromEntries(p.value.map(t=>[t,e[t]??``])))),m.value){let e={workCode:`合计`};for(let t of[`days`,`hours`,`minutes`])p.value.includes(t)&&(e[t]=h(t));let t=s.addRow(e);t.font={bold:!0}}s.views=[{state:`frozen`,ySplit:1}],s.getRow(1).font={bold:!0,color:{argb:`FFFFFFFF`}},s.getRow(1).fill={type:`pattern`,pattern:`solid`,fgColor:{argb:`FF3C91D0`}},s.autoFilter={from:{row:1,column:1},to:{row:1,column:p.value.length}};let l=await t.xlsx.writeBuffer(),u=URL.createObjectURL(new Blob([new Uint8Array(l)],{type:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`})),d=document.createElement(`a`);d.href=u,d.download=`${a?.label??`报表`}_${n.startDate}_${n.endDate}.xlsx`,d.click(),URL.revokeObjectURL(u)}finally{l.value=!1}}};return(e,t)=>(B(),V(`section`,Ef,[t[14]||=H(`header`,{class:`machine-card__header`},[H(`div`,null,[H(`span`,{class:`eyebrow`},`REPORT CENTER`),H(`h2`,null,`报表查询`),H(`p`,null,`按日期和人员条件查询业务数据，并可导出 Excel。`)])],-1),H(`form`,{class:`filter-bar report-filter`,onSubmit:zo(g,[`prevent`])},[U(Gd,{active:f.value,onSelect:_},null,8,[`active`]),H(`label`,null,[t[7]||=H(`span`,null,`报表`,-1),I(H(`select`,{"onUpdate:modelValue":t[0]||=e=>n.type=e,class:`filter-input`},[(B(),V(z,null,R(r,e=>H(`option`,{key:e.value,value:e.value},j(e.label),9,Df)),64))],512),[[No,n.type]])]),H(`label`,null,[t[8]||=H(`span`,null,`用户姓名`,-1),I(H(`input`,{"onUpdate:modelValue":t[1]||=e=>n.name=e,class:`filter-input`,placeholder:`完整姓名`},null,512),[[q,n.name,void 0,{trim:!0}]])]),H(`label`,null,[t[9]||=H(`span`,null,`用户工号`,-1),I(H(`input`,{"onUpdate:modelValue":t[2]||=e=>n.workCode=e,class:`filter-input`,placeholder:`完整工号`},null,512),[[q,n.workCode,void 0,{trim:!0}]])]),H(`label`,null,[t[10]||=H(`span`,null,`开始日期 *`,-1),I(H(`input`,{"onUpdate:modelValue":t[3]||=e=>n.startDate=e,class:`filter-input`,type:`date`,required:``,onInput:t[4]||=e=>f.value=null},null,544),[[q,n.startDate]])]),H(`label`,null,[t[11]||=H(`span`,null,`结束日期 *`,-1),I(H(`input`,{"onUpdate:modelValue":t[5]||=e=>n.endDate=e,class:`filter-input`,type:`date`,required:``,onInput:t[6]||=e=>f.value=null},null,544),[[q,n.endDate]])]),H(`button`,{class:`button button--dark`,type:`submit`,disabled:s.value},j(s.value?`查询中…`:`查询`),9,Of),H(`button`,{class:`button button--export`,type:`button`,disabled:s.value||l.value||!o.value.length,onClick:v},j(l.value?`导出中…`:`导出 Excel`),9,kf)],32),d.value?(B(),V(`div`,Af,j(d.value),1)):G(``,!0),H(`div`,jf,[t[12]||=W(`查询结果：`,-1),H(`strong`,null,j(o.value.length),1),t[13]||=W(` 条`,-1)]),H(`div`,Mf,[H(`table`,null,[H(`thead`,null,[H(`tr`,null,[(B(!0),V(z,null,R(p.value,e=>(B(),V(`th`,{key:e},j(i[e]??e),1))),128))])]),H(`tbody`,null,[s.value?(B(),V(`tr`,Nf,[H(`td`,{colspan:Math.max(p.value.length,1),class:`table-state`},`正在读取数据…`,8,Pf)])):u.value&&!o.value.length?(B(),V(`tr`,Ff,[H(`td`,{colspan:Math.max(p.value.length,1),class:`table-state`},`没有符合条件的数据`,8,If)])):(B(!0),V(z,{key:2},R(o.value,(e,t)=>(B(),V(`tr`,{key:t},[(B(!0),V(z,null,R(p.value,t=>(B(),V(`td`,{key:t,class:A({"report-reason":t===`reason`})},j(e[t]??`—`),3))),128))]))),128))]),m.value&&o.value.length?(B(),V(`tfoot`,Lf,[H(`tr`,null,[(B(!0),V(z,null,R(p.value,e=>(B(),V(`td`,{key:e},[e===`workCode`?(B(),V(`strong`,Rf,`合计`)):e===`days`?(B(),V(`strong`,zf,j(h(`days`)),1)):e===`hours`?(B(),V(`strong`,Bf,j(h(`hours`)),1)):e===`minutes`?(B(),V(`strong`,Vf,j(h(`minutes`)),1)):(B(),V(`span`,Hf,`—`))]))),128))])])):G(``,!0)])])]))}}),[[`__scopeId`,`data-v-2c5c7fa8`]]),Wf={class:`login-page`},Gf={key:0,class:`form-error`},Kf=[`disabled`],qf=L({__name:`LoginView`,setup(e){let t=P(``),n=P(``),r=P(``),i=P(!1),a=os(),o=async()=>{i.value=!0,r.value=``;try{await Yc(t.value,n.value),await a.push(`/`)}catch(e){r.value=e instanceof Error?e.message:`登录失败`}finally{i.value=!1}};return(e,a)=>(B(),V(`main`,Wf,[H(`form`,{class:`login-card`,onSubmit:zo(o,[`prevent`])},[a[4]||=H(`div`,{class:`brand__mark`},`S`,-1),a[5]||=H(`h1`,null,`Shineway 管理中心`,-1),a[6]||=H(`p`,null,`请使用工号和密码登录`,-1),H(`label`,null,[a[2]||=W(`工号`,-1),I(H(`input`,{"onUpdate:modelValue":a[0]||=e=>t.value=e,required:``,autofocus:``},null,512),[[q,t.value]])]),H(`label`,null,[a[3]||=W(`密码`,-1),I(H(`input`,{"onUpdate:modelValue":a[1]||=e=>n.value=e,type:`password`,required:``},null,512),[[q,n.value]])]),r.value?(B(),V(`div`,Gf,j(r.value),1)):G(``,!0),H(`button`,{class:`button button--primary`,disabled:i.value},j(i.value?`登录中…`:`登录`),9,Kf)],32)]))}}),Jf={class:`card machine-card`},Yf={class:`resource-header`},Xf={class:`inline-actions`},Zf=[`disabled`],Qf=[`disabled`],$f=[`disabled`],ep={key:0,class:`notice`},tp={key:1,class:`notice`},np={key:2,class:`notice notice--error`},rp={key:3,class:`import-help`},ip={class:`table-wrap`},ap={class:`cell-subtitle`},op={class:`cell-subtitle`},sp=[`onClick`],cp=[`onClick`],lp=[`onClick`],up={key:0,class:`dialog-layer`},dp={class:`machine-dialog__header`},fp={class:`machine-form`},pp={class:`form-section form-grid`},mp=[`value`],hp={class:`machine-dialog__footer`},gp={key:1,class:`dialog-layer`},_p={class:`permission-dialog`},vp={class:`permission-row`},yp=[`onUpdate:modelValue`],bp=[`onUpdate:modelValue`,`onChange`],xp=Su(L({__name:`UsersView`,setup(e){let t=P([]),n=P([]),r=P(``),i=P(null),a=P(null),o=P(null),s=P(null),l=P(null),u=P(!1),d=P(!1),f=P(``),p=P([]),m=K(()=>t.value.filter(e=>`${e.UserNO}${e.UserName}${e.DepartmentName}`.includes(r.value))),h=async()=>{t.value=(await Y(`/api/admin/users`)).data,n.value=(await Y(`/api/admin/departments`)).data},g=e=>i.value=e?{...e}:{UserNO:``,UserName:``,DepartmentID:null,Status:1,HireDate:`1900-01-01`},_=async()=>{let e=i.value;await Y(e.UserID?`/api/admin/users/${e.UserID}`:`/api/admin/users`,{method:e.UserID?`PUT`:`POST`,body:JSON.stringify(e)}),i.value=null,await h()},v=async e=>{confirm(`重置 ${e.UserName} 的密码为 Aa123456？`)&&await Y(`/api/admin/users/${e.UserID}/reset-password`,{method:`POST`})},y=async e=>{o.value=e,a.value=(await Y(`/api/admin/users/${e.UserID}/permissions`)).data},b=async()=>{await Y(`/api/admin/users/${o.value.UserID}/permissions`,{method:`PUT`,body:JSON.stringify({permissions:a.value})}),a.value=null},x=e=>({dashboard:`工作台`,machines:`机台管理`,"machine-types":`设备类型`,products:`产品信息`,schedules:`机台排产`,collection:`采集配置`,attendance:`考勤打卡`,reports:`报表中心`,users:`用户管理`,departments:`部门管理`,settings:`系统设置`})[e]??e,S=e=>String(e??``).trim(),C=e=>{if(e instanceof Date)return e.toISOString().slice(0,10);if(typeof e==`number`)return new Date(Date.UTC(1899,11,30)+e*864e5).toISOString().slice(0,10);let t=S(e);if(!t)return`1900-01-01`;let n=new Date(t);return Number.isNaN(n.getTime())?t:n.toISOString().slice(0,10)},w=async e=>{let{default:t}=await Ru(async()=>{let{default:e}=await import(`./exceljs.min-Doha2Ajm.js`).then(e=>c(e.default,1));return{default:e}},[]),n=new t.Workbook;await n.xlsx.load(await e.arrayBuffer());let r=n.worksheets[0];if(!r)throw Error(`Excel 中没有工作表`);let i=new Map;return r.getRow(1).eachCell((e,t)=>i.set(S(e.value),t)),{sheet:r,headers:i}},T=(e,t,n)=>{for(let r of n){let n=t.get(r);if(n)return e.getCell(n).value}return``},E=async e=>{let t=e.target,n=t.files?.[0];if(t.value=``,n){u.value=!0,f.value=``,p.value=[];try{let{sheet:e,headers:t}=await w(n),r=[];if(e.eachRow((e,n)=>{if(n===1)return;let i=S(T(e,t,[`工号`,`用户工号`,`UserNO`]));i&&r.push({UserNO:i,UserName:S(T(e,t,[`姓名`,`用户姓名`,`UserName`])),DepartmentName:S(T(e,t,[`部门`,`部门名称`,`DepartmentName`])),Sex:S(T(e,t,[`性别`,`Sex`])),ProfessionalTitle:S(T(e,t,[`职称`,`ProfessionalTitle`])),Position:S(T(e,t,[`职务`,`职位`,`Position`])),WageGrade:S(T(e,t,[`资位`,`工资等级`,`WageGrade`])),Status:+![`0`,`离职`,`停用`].includes(S(T(e,t,[`状态`,`在职状态`,`Status`]))),HireDate:C(T(e,t,[`聘用日期`,`入职日期`,`HireDate`])),HrNumber:S(T(e,t,[`指纹号`,`HR编号`,`HrNumber`]))})}),!r.length)throw Error(`没有读取到用户；请确认首行包含“工号”和“姓名”`);let i=await Y(`/api/admin/users/import-information`,{method:`POST`,body:JSON.stringify({rows:r})});f.value=`用户信息导入完成：新增 ${i.data.inserted}，更新 ${i.data.updated}，共 ${i.data.total} 条`,await h()}catch(e){p.value=[e instanceof Error?e.message:`用户信息导入失败`]}finally{u.value=!1}}},D=async e=>{let t=e.target,n=t.files?.[0];if(t.value=``,n){u.value=!0,f.value=``,p.value=[];try{let{sheet:e,headers:t}=await w(n),r=[];if(e.eachRow((e,n)=>{if(n===1)return;let i=S(T(e,t,[`工号`,`用户工号`,`UserNO`])),a=S(T(e,t,[`指纹号`,`HR编号`,`HrNumber`]));(i||a)&&r.push({UserNO:i,HrNumber:a})}),!r.length)throw Error(`没有读取到数据；请确认首行包含“工号”和“指纹号”`);let i=await Y(`/api/admin/users/import-fingerprints`,{method:`POST`,body:JSON.stringify({rows:r})});f.value=`指纹号导入完成：更新 ${i.data.updated}，共 ${i.data.total} 条`,p.value=i.data.errors.map(e=>`第 ${e.row} 行（${e.UserNO}）：${e.message}`),await h()}catch(e){p.value=[e instanceof Error?e.message:`指纹号导入失败`]}finally{u.value=!1}}},O=async()=>{d.value=!0,f.value=``,p.value=[];try{let e=await Jd();f.value=`OA 用户同步完成：新增 ${e.inserted}，更新 ${e.updated}`,await h()}catch(e){p.value=[e instanceof Error?e.message:`OA 用户同步失败`]}finally{d.value=!1}},ee=async e=>{let{default:t}=await Ru(async()=>{let{default:e}=await import(`./exceljs.min-Doha2Ajm.js`).then(e=>c(e.default,1));return{default:e}},[]),n=new t.Workbook,r=n.addWorksheet(e===`information`?`用户信息`:`用户指纹号`);r.addRow(e===`information`?[`工号`,`姓名`,`部门`,`性别`,`职称`,`职务`,`资位`,`状态`,`聘用日期`,`指纹号`]:[`工号`,`指纹号`]),r.addRow(e===`information`?[`XH001`,`示例用户`,`生产部`,`男`,``,``,``,1,`2026-01-01`,`10001`]:[`XH001`,`10001`]),r.getRow(1).font={bold:!0},r.columns.forEach(e=>e.width=16);let i=await n.xlsx.writeBuffer(),a=URL.createObjectURL(new Blob([new Uint8Array(i)])),o=document.createElement(`a`);o.href=a,o.download=e===`information`?`用户信息导入模板.xlsx`:`用户指纹号导入模板.xlsx`,o.click(),URL.revokeObjectURL(a)};return Tr(h),(e,t)=>(B(),V(z,null,[H(`div`,Jf,[H(`div`,Yf,[t[21]||=H(`div`,null,[H(`span`,{class:`eyebrow`},`ACCOUNTS`),H(`h2`,null,`用户与权限`)],-1),H(`div`,Xf,[I(H(`input`,{"onUpdate:modelValue":t[0]||=e=>r.value=e,class:`filter-input`,placeholder:`搜索工号、姓名或部门`},null,512),[[q,r.value]]),F(Z)(`users`,!0)?(B(),V(z,{key:0},[H(`button`,{class:`button button--ghost`,disabled:d.value||u.value,onClick:O},j(d.value?`同步中…`:`同步 OA 用户`),9,Zf),H(`button`,{class:`button button--ghost`,disabled:d.value||u.value,onClick:t[1]||=e=>s.value?.click()},` 导入用户信息`,8,Qf),H(`button`,{class:`button button--ghost`,disabled:d.value||u.value,onClick:t[2]||=e=>l.value?.click()},` 导入指纹号`,8,$f),H(`button`,{class:`button button--primary`,onClick:t[3]||=e=>g()},` 新增用户`),H(`input`,{ref_key:`informationInput`,ref:s,hidden:``,type:`file`,accept:`.xlsx`,onChange:E},null,544),H(`input`,{ref_key:`fingerprintInput`,ref:l,hidden:``,type:`file`,accept:`.xlsx`,onChange:D},null,544)],64)):G(``,!0)])]),u.value?(B(),V(`div`,ep,`正在读取并导入 Excel…`)):G(``,!0),f.value?(B(),V(`div`,tp,j(f.value),1)):G(``,!0),p.value.length?(B(),V(`div`,np,[t[22]||=H(`strong`,null,`导入提示`,-1),(B(!0),V(z,null,R(p.value.slice(0,20),e=>(B(),V(`div`,{key:e},j(e),1))),128))])):G(``,!0),F(Z)(`users`,!0)?(B(),V(`div`,rp,[t[23]||=W(` Excel 首行使用模板列名；按工号新增或更新用户。`,-1),H(`button`,{class:`text-button`,onClick:t[4]||=e=>ee(`information`)},` 下载用户信息模板`),H(`button`,{class:`text-button`,onClick:t[5]||=e=>ee(`fingerprint`)},` 下载指纹号模板 `)])):G(``,!0),H(`div`,ip,[H(`table`,null,[t[24]||=H(`thead`,null,[H(`tr`,null,[H(`th`,null,`工号 / 姓名`),H(`th`,null,`部门`),H(`th`,null,`性别`),H(`th`,null,`职称 / 职务`),H(`th`,null,`指纹号`),H(`th`,null,`聘用日期`),H(`th`,null,`状态`),H(`th`,null,`操作`)])],-1),H(`tbody`,null,[(B(!0),V(z,null,R(m.value,e=>(B(),V(`tr`,{key:e.UserID},[H(`td`,null,[H(`strong`,null,j(e.UserNO),1),H(`span`,ap,j(e.UserName),1)]),H(`td`,null,j(e.DepartmentName||`-`),1),H(`td`,null,j(e.Sex||`-`),1),H(`td`,null,[W(j(e.ProfessionalTitle||`-`),1),H(`span`,op,j(e.Position||`-`),1)]),H(`td`,null,j(e.HrNumber||`-`),1),H(`td`,null,j(e.HireDate),1),H(`td`,null,[H(`span`,{class:A([`status-pill`,e.Status?`status-pill--on`:`status-pill--off`])},j(e.Status?`在职`:`离职`),3)]),H(`td`,null,[F(Z)(`users`,!0)?(B(),V(`button`,{key:0,class:`text-button`,onClick:t=>g(e)},` 编辑`,8,sp)):G(``,!0),F(Z)(`users`,!0)?(B(),V(`button`,{key:1,class:`text-button`,onClick:t=>y(e)},` 权限`,8,cp)):G(``,!0),F(Z)(`users`,!0)?(B(),V(`button`,{key:2,class:`text-button`,onClick:t=>v(e)},` 重置密码 `,8,lp)):G(``,!0)])]))),128))])])])]),i.value?(B(),V(`div`,up,[H(`button`,{class:`dialog-scrim`,onClick:t[6]||=e=>i.value=null}),H(`form`,{class:`machine-dialog`,onSubmit:zo(_,[`prevent`])},[H(`header`,dp,[H(`h2`,null,j(i.value.UserID?`编辑用户`:`新增用户`),1),H(`button`,{type:`button`,class:`icon-button`,onClick:t[7]||=e=>i.value=null},` × `)]),H(`div`,fp,[H(`div`,pp,[H(`label`,null,[t[25]||=W(`工号`,-1),I(H(`input`,{"onUpdate:modelValue":t[8]||=e=>i.value.UserNO=e,required:``},null,512),[[q,i.value.UserNO]])]),H(`label`,null,[t[26]||=W(`姓名`,-1),I(H(`input`,{"onUpdate:modelValue":t[9]||=e=>i.value.UserName=e,required:``},null,512),[[q,i.value.UserName]])]),H(`label`,null,[t[28]||=W(`部门`,-1),I(H(`select`,{"onUpdate:modelValue":t[10]||=e=>i.value.DepartmentID=e},[t[27]||=H(`option`,{value:null},`未分配`,-1),(B(!0),V(z,null,R(n.value,e=>(B(),V(`option`,{value:e.ID},j(e.DepartmentName),9,mp))),256))],512),[[No,i.value.DepartmentID]])]),H(`label`,null,[t[29]||=W(`性别`,-1),I(H(`input`,{"onUpdate:modelValue":t[11]||=e=>i.value.Sex=e},null,512),[[q,i.value.Sex]])]),H(`label`,null,[t[30]||=W(`职称`,-1),I(H(`input`,{"onUpdate:modelValue":t[12]||=e=>i.value.ProfessionalTitle=e},null,512),[[q,i.value.ProfessionalTitle]])]),H(`label`,null,[t[31]||=W(`职务`,-1),I(H(`input`,{"onUpdate:modelValue":t[13]||=e=>i.value.Position=e},null,512),[[q,i.value.Position]])]),H(`label`,null,[t[32]||=W(`资位`,-1),I(H(`input`,{"onUpdate:modelValue":t[14]||=e=>i.value.WageGrade=e},null,512),[[q,i.value.WageGrade]])]),H(`label`,null,[t[34]||=W(`状态`,-1),I(H(`select`,{"onUpdate:modelValue":t[15]||=e=>i.value.Status=e},[...t[33]||=[H(`option`,{value:1},`在职`,-1),H(`option`,{value:0},`离职`,-1)]],512),[[No,i.value.Status,void 0,{number:!0}]])]),H(`label`,null,[t[35]||=W(`聘用日期`,-1),I(H(`input`,{"onUpdate:modelValue":t[16]||=e=>i.value.HireDate=e,type:`date`,required:``},null,512),[[q,i.value.HireDate]])]),H(`label`,null,[t[36]||=W(`指纹号`,-1),I(H(`input`,{"onUpdate:modelValue":t[17]||=e=>i.value.HrNumber=e},null,512),[[q,i.value.HrNumber]])])]),H(`footer`,hp,[H(`button`,{type:`button`,class:`button button--ghost`,onClick:t[18]||=e=>i.value=null},` 取消`),t[37]||=H(`button`,{class:`button button--primary`},`保存`,-1)])])],32)])):G(``,!0),a.value?(B(),V(`div`,gp,[H(`button`,{class:`dialog-scrim`,onClick:t[19]||=e=>a.value=null}),H(`div`,_p,[H(`h2`,null,j(o.value?.UserName)+` 的模块权限`,1),(B(!0),V(z,null,R(a.value,e=>(B(),V(`div`,vp,[H(`strong`,null,j(x(e.ModuleKey)),1),H(`label`,null,[I(H(`input`,{"onUpdate:modelValue":t=>e.CanView=t,type:`checkbox`},null,8,yp),[[jo,e.CanView]]),t[38]||=W(` 查看`,-1)]),H(`label`,null,[I(H(`input`,{"onUpdate:modelValue":t=>e.CanEdit=t,type:`checkbox`,onChange:t=>e.CanView||=e.CanEdit},null,40,bp),[[jo,e.CanEdit]]),t[39]||=W(` 编辑`,-1)])]))),256)),H(`footer`,null,[H(`button`,{class:`button button--ghost`,onClick:t[20]||=e=>a.value=null},` 取消`),H(`button`,{class:`button button--primary`,onClick:b},` 保存权限 `)])])])):G(``,!0)],64))}}),[[`__scopeId`,`data-v-a8874990`]]),Sp={class:`card machine-card`},Cp={class:`resource-header`},wp=[`onClick`],Tp=[`onClick`],Ep=L({__name:`DepartmentsView`,setup(e){let t=P([]),n=async()=>{t.value=(await Y(`/api/admin/departments`)).data},r=async()=>{let e=prompt(`部门名称`);e&&(await Y(`/api/admin/departments`,{method:`POST`,body:JSON.stringify({DepartmentName:e})}),await n())},i=async e=>{let t=prompt(`部门名称`,e.DepartmentName);t&&(await Y(`/api/admin/departments/${e.ID}`,{method:`PUT`,body:JSON.stringify({DepartmentName:t})}),await n())},a=async e=>{if(confirm(`确定删除“${e.DepartmentName}”？`))try{await Y(`/api/admin/departments/${e.ID}`,{method:`DELETE`}),await n()}catch(e){alert(e instanceof Error?e.message:`删除失败`)}};return Tr(n),(e,n)=>(B(),V(`div`,Sp,[H(`div`,Cp,[n[0]||=H(`div`,null,[H(`span`,{class:`eyebrow`},`ORGANIZATION`),H(`h2`,null,`部门管理`)],-1),F(Z)(`departments`,!0)?(B(),V(`button`,{key:0,class:`button button--primary`,onClick:r},`新增部门`)):G(``,!0)]),H(`table`,null,[n[1]||=H(`thead`,null,[H(`tr`,null,[H(`th`,null,`ID`),H(`th`,null,`部门名称`),H(`th`,null,`人数`),H(`th`,null,`操作`)])],-1),H(`tbody`,null,[(B(!0),V(z,null,R(t.value,e=>(B(),V(`tr`,{key:e.ID},[H(`td`,null,j(e.ID),1),H(`td`,null,j(e.DepartmentName),1),H(`td`,null,j(e.UserCount),1),H(`td`,null,[F(Z)(`departments`,!0)?(B(),V(`button`,{key:0,class:`text-button`,onClick:t=>i(e)},`编辑`,8,wp)):G(``,!0),F(Z)(`departments`,!0)?(B(),V(`button`,{key:1,class:`text-button text-button--danger`,onClick:t=>a(e)},`删除`,8,Tp)):G(``,!0)])]))),128))])])]))}}),Dp={key:0,class:`form-error`},Op=L({__name:`ChangePasswordView`,setup(e){let t=P(``),n=P(``),r=P(``),i=P(``),a=os(),o=async()=>{if(n.value!==r.value){i.value=`两次新密码不一致`;return}try{await Y(`/api/auth/password`,{method:`PUT`,body:JSON.stringify({currentPassword:t.value,newPassword:n.value})}),alert(`密码已修改，请重新登录`),await Zc(),await a.push(`/login`)}catch(e){i.value=e instanceof Error?e.message:`修改失败`}};return(e,a)=>(B(),V(`form`,{class:`card password-card`,onSubmit:zo(o,[`prevent`])},[a[6]||=H(`h2`,null,`修改密码`,-1),H(`label`,null,[a[3]||=W(`当前密码`,-1),I(H(`input`,{"onUpdate:modelValue":a[0]||=e=>t.value=e,type:`password`,required:``},null,512),[[q,t.value]])]),H(`label`,null,[a[4]||=W(`新密码（至少 8 位）`,-1),I(H(`input`,{"onUpdate:modelValue":a[1]||=e=>n.value=e,type:`password`,minlength:`8`,required:``},null,512),[[q,n.value]])]),H(`label`,null,[a[5]||=W(`确认新密码`,-1),I(H(`input`,{"onUpdate:modelValue":a[2]||=e=>r.value=e,type:`password`,required:``},null,512),[[q,r.value]])]),i.value?(B(),V(`div`,Dp,j(i.value),1)):G(``,!0),a[7]||=H(`button`,{class:`button button--primary`},`修改密码`,-1)],32))}});function kp(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ap=kp();function jp(e){Ap=e}var Mp={exec:()=>null};function Np(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function Q(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Fp.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var Pp=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),Fp={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Np(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Np(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Np(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:Np(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:Np(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:Np(e=>RegExp(`^ {0,${e}}>`))},Ip=/^(?:[ \t]*(?:\n|$))+/,Lp=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Rp=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,zp=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Bp=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Vp=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Hp=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Up=Q(Hp).replace(/bull/g,Vp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),Wp=Q(Hp).replace(/bull/g,Vp).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Gp=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Kp=/^[^\n]+/,qp=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Jp=Q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,qp).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Yp=Q(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Vp).getRegex(),Xp=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Zp=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Qp=Q(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Zp).replace(`tag`,Xp).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),$p=e=>Q(Gp).replace(`hr`,zp).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Xp).getRegex(),em=$p(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),tm=$p(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),nm={blockquote:Q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,tm).getRegex(),code:Lp,def:Jp,fences:Rp,heading:Bp,hr:zp,html:Qp,lheading:Up,list:Yp,newline:Ip,paragraph:em,table:Mp,text:Kp},rm=Q(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,zp).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Xp).getRegex(),im={...nm,lheading:Wp,table:rm,paragraph:Q(Gp).replace(`hr`,zp).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,rm).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Xp).getRegex()},am={...nm,html:Q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Zp).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Mp,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Q(Gp).replace(`hr`,zp).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Up).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},om=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,sm=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,cm=/^( {2,}|\\)\n(?!\s*$)/,lm=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,um=/[\p{P}\p{S}]/u,dm=/[\s\p{P}\p{S}]/u,fm=/[^\s\p{P}\p{S}]/u,pm=Q(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,dm).getRegex(),mm=/[\p{Pi}\p{Ps}"']/u,hm=/(?!~)[\p{P}\p{S}]/u,gm=/(?!~)[\s\p{P}\p{S}]/u,_m=/(?:[^\s\p{P}\p{S}]|~)/u,vm=Q(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,Pp?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),ym=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,bm=Q(ym,`u`).replace(/punct/g,um).getRegex(),xm=Q(ym,`u`).replace(/punct/g,hm).getRegex(),Sm=Q(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,mm).replace(/punct/g,um).getRegex(),Cm=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,wm=Q(Cm,`gu`).replace(/notPunctSpace/g,fm).replace(/punctSpace/g,dm).replace(/punct/g,um).getRegex(),Tm=Q(Cm,`gu`).replace(/notPunctSpace/g,_m).replace(/punctSpace/g,gm).replace(/punct/g,hm).getRegex(),Em=Q(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,fm).replace(/punctSpace/g,dm).replace(/punct/g,um).getRegex(),Dm=Q(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,fm).replace(/punctSpace/g,dm).replace(/punct/g,um).getRegex(),Om=Q(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,fm).replace(/punctSpace/g,dm).replace(/punct/g,um).getRegex(),km=Q(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,um).getRegex(),Am=Q(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,fm).replace(/punctSpace/g,dm).replace(/punct/g,um).getRegex(),jm=Q(/\\(punct)/,`gu`).replace(/punct/g,um).getRegex(),Mm=Q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Nm=Q(Zp).replace(`(?:-->|$)`,`-->`).getRegex(),Pm=Q(`^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,Nm).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Fm=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,Im=Q(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Fm).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Lm=Q(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Fm).replace(`ref`,qp).getRegex(),Rm=Q(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,qp).getRegex(),zm=Q(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,Lm).replace(`nolink`,Rm).getRegex(),Bm=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Vm={_backpedal:Mp,anyPunctuation:jm,autolink:Mm,blockSkip:vm,br:cm,code:sm,del:Mp,delLDelim:Mp,delRDelim:Mp,emStrongLDelim:bm,emStrongRDelimAst:wm,emStrongRDelimUnd:Dm,escape:om,link:Im,nolink:Rm,punctuation:pm,reflink:Lm,reflinkSearch:zm,tag:Pm,text:lm,url:Mp},Hm={...Vm,emStrongLDelim:Sm,emStrongRDelimAst:Em,emStrongRDelimUnd:Om,link:Q(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Fm).getRegex(),reflink:Q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Fm).getRegex()},Um={...Vm,emStrongRDelimAst:Tm,emStrongLDelim:xm,delLDelim:km,delRDelim:Am,url:Q(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Bm).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Q(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Bm).getRegex()},Wm={...Um,br:Q(cm).replace(`{2,}`,`*`).getRegex(),text:Q(Um.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Gm={normal:nm,gfm:im,pedantic:am},Km={normal:Vm,gfm:Um,breaks:Wm,pedantic:Hm},qm={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Jm=e=>qm[e];function Ym(e,t){if(t){if(Fp.escapeTest.test(e))return e.replace(Fp.escapeReplace,Jm)}else if(Fp.escapeTestNoEncode.test(e))return e.replace(Fp.escapeReplaceNoEncode,Jm);return e}function Xm(e){try{e=encodeURI(e).replace(Fp.percentDecode,`%`)}catch{return null}return e}function Zm(e,t){let n=e.replace(Fp.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Fp.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``);for(;r<n.length;r++)n[r]=n[r].trim().replace(Fp.slashPipe,`|`);return n}function Qm(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function $m(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Fp.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function eh(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function th(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function nh(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`);r.state.inLink=!0;let c={type:e[0].charAt(0)===`!`?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function rh(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return r.length>=i.length?e.slice(i.length):e}).join(`
`)}var ih=class{options;rules;lexer;constructor(e){this.options=e||Ap}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:$m(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=rh(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=Qm(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:Qm(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:Qm(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=Qm(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o;for(o=0;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s,n=`${n}
${a}`,r=r.substring(0,r.length-t.text.length)+s.text;break}else if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=th(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=$m(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:Qm(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Zm(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:Qm(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Zm(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:Qm(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=Qm(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=eh(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),nh(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return nh(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}else if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},ah=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ap,this.options.tokenizer=this.options.tokenizer||new ih,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={other:Fp,block:Gm.normal,inline:Km.normal};this.options.pedantic?(t.block=Gm.pedantic,t.inline=Km.pedantic):this.options.gfm&&(t.block=Gm.gfm,this.options.breaks?t.inline=Km.breaks:t.inline=Km.gfm),this.tokenizer.rules=t}static get rules(){return{block:Gm,inline:Km}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Fp.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Fp.tabCharGlobal,`    `).replace(Fp.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);e.length>0&&(n=n.replace(this.tokenizer.rules.inline.reflinkSearch,t=>e.includes(t.slice(t.lastIndexOf(`[`)+1,-1))?`[`+`a`.repeat(t.length-2)+`]`:t))}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},oh=class{options;parser;constructor(e){this.options=e||Ap}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Fp.notSpaceStart)?.[0],i=e.replace(Fp.endingNewline,``)+`
`;return r?`<pre><code class="language-`+Ym(r)+`">`+(n?i:Ym(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Ym(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Ym(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){let r=this.parser.parseInline(n),i=Xm(e);if(i===null)return r;e=i;let a=`<a href="`+e+`"`;return t&&(a+=` title="`+Ym(t)+`"`),a+=`>`+r+`</a>`,a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Xm(e);if(i===null)return Ym(n);e=i;let a=`<img src="${e}" alt="${Ym(n)}"`;return t&&(a+=` title="${Ym(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Ym(e.text)}},sh=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},ch=class e{options;renderer;textRenderer;constructor(e){this.options=e||Ap,this.options.renderer=this.options.renderer||new oh,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new sh}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},lh=class{options;block;constructor(e){this.options=e||Ap}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?ah.lex:ah.lexInline}provideParser(e=this.block){return e?ch.parse:ch.parseInline}},uh=new class{defaults=kp();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ch;Renderer=oh;TextRenderer=sh;Lexer=ah;Tokenizer=ih;Hooks=lh;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new oh(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new ih(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new lh;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];lh.passThroughHooks.has(n)?t[r]=e=>{if(this.defaults.async&&lh.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:t[r]=(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ah.lex(e,t??this.defaults)}parser(e,t){return ch.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?ah.lex:ah.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?ch.parse:ch.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?ah.lex:ah.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?ch.parse:ch.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Ym(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function $(e,t){return uh.parse(e,t)}$.options=$.setOptions=function(e){return uh.setOptions(e),$.defaults=uh.defaults,jp($.defaults),$},$.getDefaults=kp,$.defaults=Ap;function dh(...e){return uh.use(...e),$.defaults=uh.defaults,jp($.defaults),$}$.use=dh,$.walkTokens=function(e,t){return uh.walkTokens(e,t)},$.parseInline=uh.parseInline,$.Parser=ch,$.parser=ch.parse,$.Renderer=oh,$.TextRenderer=sh,$.Lexer=ah,$.lexer=ah.lex,$.Tokenizer=ih,$.Hooks=lh,$.parse=$,$.options,$.setOptions,$.walkTokens,$.parseInline,ch.parse,ah.lex;var fh=`# Shineway 智能制造系统功能清单

> 文档版本：2026-08-24  
> 适用范围：\`shinewayit\` 管理后台、\`shinewayapi\` 统一接口、\`shinewayscada\` 智能制造看板。

## 1. 系统概览

Shineway 智能制造系统由三个相互配合的 Web 项目组成，并通过同一个 Nginx 网关向用户提供服务。

| 项目 | 访问路径 | 主要职责 | 主要使用者 |
| --- | --- | --- | --- |
| \`shinewayit\` | \`/\`、\`/login\` | 机台、产品、排产、用户、权限、考勤和 OA 报表管理 | 管理员、生产管理、行政人事 |
| \`shinewayapi\` | \`/api/\` | 统一业务接口、登录鉴权、数据库访问、标准与实际产量计算 | 两个前端项目，不直接面向普通用户 |
| \`shinewayscada\` | \`/scada/\` | 楼层机台状态、实时产量、产品与机台产能分析 | 车间、生产管理、现场看板 |

### 1.1 项目关联关系

1. 用户在管理后台维护机台、设备类型、产品和排产。
2. 管理后台把操作发送给统一 API，API 将资料写入相应数据库。
3. 设备采集程序每分钟将机台状态和实际产量写入 SCADA 数据库的 \`t_scadadata\`。
4. 看板通过 API 同时读取机台档案、采集数据、产品资料和排产记录。
5. API 根据排产有效时间和产品标准节拍计算标准产量，再与实际产量组合成达成率。
6. OA 人员与流程数据保留在 OA SQL Server 中，API 按需读取并同步或展示，不要求用户直接操作 OA 数据库。

### 1.2 数据源

| 数据库 | 作用 | 主要数据 |
| --- | --- | --- |
| 核心 MySQL 数据库 | 管理后台基础资料与权限 | 用户、部门、密码、登录会话、模块权限 |
| SCADA MySQL 数据库 | 生产基础资料与采集数据 | 机台、设备类型、产品、排产、分钟采集数据 |
| 考勤 MySQL 数据库 | 原始打卡记录 | 指纹号、打卡时间 |
| OA SQL Server | OA 人员与流程来源 | 人员基本信息、请假、加班、出差、签卡流程 |

## 2. 统一访问与网关

### 2.1 路径分发

- 访问 \`/\` 时跳转到 \`/login\`。
- \`/api/\` 转发到 \`shinewayapi\` 的 7003 端口。
- \`/scada/\` 转发到 \`shinewayscada\`。
- 其他路径转发到 \`shinewayit\`。
- 管理后台和 SCADA 都使用前端路由回退，刷新子页面时仍能正常打开。

### 2.2 容器化运行

- \`gateway\`：统一监听主机 80 端口。
- \`api\`：Node.js 24 + Fastify 服务，容器内监听 7003。
- \`it\`：管理后台静态文件，由 Nginx 提供。
- \`scada\`：看板静态文件，由独立 Nginx 提供。
- 四个服务均配置自动重启策略。
- API、管理后台和看板均配置容器健康检查。

## 3. 登录、账号与权限

### 3.1 登录认证

- 使用“工号 + 密码”登录。
- 仅状态为“在职/启用”的用户可以登录。
- 密码使用随机盐的 \`scrypt\` 哈希保存，不保存明文密码。
- 登录成功后生成随机会话令牌，服务端只保存令牌的 SHA-256 摘要。
- 登录会话有效期为 12 小时。
- 主动退出会删除当前会话。
- 修改密码后会清除该用户全部旧会话，用户需要重新登录。

### 3.2 模块权限

每个用户可以按模块分别设置“查看”和“编辑”权限。

| 模块 | 权限控制内容 |
| --- | --- |
| 工作台 | 是否可进入后台首页 |
| 机台管理 | 查看、增加、修改和停用机台 |
| 设备类型 | 维护设备类型及图标 |
| 产品信息 | 维护产品与标准产能参数 |
| 机台排产 | 维护各机台的产品生效时间点 |
| 采集配置 | 预留模块权限 |
| 考勤打卡 | 查询考勤；具有编辑权限时可同步 OA 用户 |
| 报表中心 | 查询 OA 流程报表 |
| 用户管理 | 维护用户、同步 OA、导入资料、设置权限 |
| 部门管理 | 维护部门资料 |
| 系统设置 | 预留模块权限 |

编辑权限会自动包含查看能力。没有查看权限的菜单不会显示，直接输入受限地址也会被前端导航守卫拦截；关键管理接口还会在服务端再次检查权限。

### 3.3 修改与重置密码

- 用户可从右上角账号菜单进入“修改密码”。
- 新密码至少 8 位。
- 管理员可在用户管理中把指定用户的密码重置为 \`Aa123456\`。
- 新建用户、Excel 导入的新用户和 OA 同步产生的新用户，默认密码均为 \`Aa123456\`。
- 更新已有用户时不修改原密码。

## 4. 管理后台功能

### 4.1 工作台

- 显示系统管理入口概览。
- 提供“进入机台管理”快捷入口。
- 提供“查看看板”快捷入口，打开 \`/scada/\`。
- 展示当前登录人的姓名和工号。
- 提供修改密码和退出登录入口。
- 管理中心左侧菜单支持桌面端收缩和展开，默认保持展开。
- 收缩后只保留品牌标记和菜单图标，鼠标悬停可通过标题提示识别菜单，同时主内容区域自动扩展。
- 移动端继续使用原有抽屉菜单，不受桌面收缩状态影响。

### 4.2 机台管理

#### 查询与列表

- 按机台编号、名称或 IP 模糊搜索。
- 按楼层/区域筛选。
- 按启用或停用状态筛选。
- 分页浏览，默认每页 20 条，单页最多 100 条。
- 列表展示机台编号、名称、区域、类型、品牌型号、连接地址、顺序、状态和更新时间。

#### 机台档案字段

| 字段组 | 字段 |
| --- | --- |
| 基本信息 | 机台编号、简称、完整名称、区域、设备类型、品牌、型号、出厂日期、启用状态 |
| 连接采集 | IP 地址、端口、MAC 地址、一对多系数、临时项目 |
| 看板布局 | 显示顺序、分布图行数量、分布图列数量、机台所在行、机台所在列 |
| 补充信息 | 备注 |

#### 看板布局规则

- \`区域\` 决定机台属于哪一层楼看板，例如“一楼”。
- 同一楼层应使用一致的“分布图行数量”和“分布图列数量”。
- “机台所在行”和“机台所在列”决定机台在固定网格中的实际位置。
- 空白网格位置仍保留宽度，保证布局与现场位置一致。
- 超出可视宽度时缩放机台格和图片，不按内容自动重新排队。

#### 停用规则

- 停用采用逻辑停用，不直接删除机台档案。
- 历史采集数据不会删除。
- 停用机台不再出现在状态看板和当前排产机台选择中。

### 4.3 设备类型管理

- 新增设备类型编码、显示名称、显示顺序和状态。
- 编辑时类型编码不可修改，以保持机台关联稳定。
- 查看每种类型关联的机台数量。
- 上传或更换设备图片，支持 PNG、JPEG、WebP、GIF。
- 单张图片不能超过 2 MB。
- 图标存入数据库，通过带版本参数的 API 地址提供，可避免浏览器继续使用旧图。
- 停用设备类型不会删除已有关联机台数据。
- 看板优先使用机台所属设备类型的图标；没有图标时使用系统默认机台图。

### 4.4 产品信息

#### 基础字段

- 产品编码：唯一业务编码。
- 产品名称：完整名称。
- 产品简称：用于紧凑界面显示。
- 规格型号：产品规格说明。
- 基本加工时间：生产一模所需秒数，允许小数。
- 一模多穴：每模产出的件数，默认为 1 pcs。
- 状态：启用或停用。

#### 标准产能

标准生产速度由以下公式确定：

\`\`\`text
每秒标准产量 = 一模多穴 ÷ 基本加工时间
小时标准产量 = 3600 ÷ 基本加工时间 × 一模多穴
任意时段标准产量 = 有效排产秒数 ÷ 基本加工时间 × 一模多穴
\`\`\`

例如加工时间 60 秒、一模 3 穴，则小时标准产量为 \`3600 ÷ 60 × 3 = 180 pcs\`。

- 产品列表实时显示换算后的小时标准产量。
- 停用产品不会出现在新增排产的产品选择中。
- 历史排产和历史报表仍保留停用产品，避免历史数据失去归属。

#### 产品批量导入

- 提供“下载导入模板”和“批量导入”按钮，仅有产品编辑权限的用户可见。
- Excel 字段包含产品编码、产品名称、产品简称、规格型号、基本加工时间、一模多穴和状态。
- 以产品编码作为业务键：编码已存在时更新全部产品维护字段，不存在时新增。
- 状态填写 \`0\` 或“停用”时导入为停用，其他正常值导入为启用。
- 单次最多导入 5000 条，同一文件内不允许出现重复产品编码。
- 整批数据使用数据库事务，任意行校验或写入失败时不保留部分结果。
- 批量导入不会停用文件中未出现的其他产品。

### 4.5 机台排产

#### 时间点模型

排产记录表示“从某个时间点开始生产什么”，不要求填写计划数量和结束时间。

- 当前排产点从开始时间起生效。
- 遇到同一机台的下一个排产点时，上一排产自动结束。
- 最后一个排产点持续有效，直到后续新增另一个排产点。
- 同一机台同一开始时间只能有一个排产点。
- 产品为空表示“停产 / 排空”，该时刻起标准产量为 0。

#### 时间线界面

- 按日期查看 00:00 至 24:00 时间线。
- 按楼层/区域筛选机台。
- 时间线会继承目标日期之前最后一个排产点，展示当天 00:00 时的实际生效产品。
- 不同产品使用不同颜色，停产段使用空产样式。
- 点击时间线段可编辑排产点。
- 下方“当日排产点”列出当天发生的全部切换，可编辑或删除。
- 新增或编辑排产点时，机台选择列表只显示机台编码，不再拼接机台简称。

#### 排产批量导入

- 提供机台排产 Excel 模板下载和批量导入。
- 模板字段为机台编码、开始时间、产品编码、备注。
- 以“机台编码 + 开始时间”作为业务键：已有排产点更新产品和备注，不存在时新增。
- 产品编码留空表示“停产 / 排空”，该时间点起标准产量为 0。
- 机台编码和非空产品编码必须已存在；错误信息会指出 Excel 行号和无效编码。
- 同一文件内不允许出现重复的“机台编码 + 开始时间”。
- 单次最多 5000 条，整批导入使用事务，写入失败时整体回滚。

### 4.6 考勤打卡记录

- 默认查询本月第一天到本月最后一天。
- 支持快速选择“当天”“一周”“最近一个月”“当前自然月”，点击后立即按所选范围查询。
- “一周”为含当天在内的最近 7 天；“最近一个月”为当前日期向前一个月到当天；“当前自然月”为本月 1 日至本月最后一天。
- 快速选择后仍可手工调整开始或结束日期，手工修改会取消快捷项选中状态。
- 可按完整用户姓名、完整用户工号、完整指纹号筛选。
- 可选择每页 20、50、100、500、1000、2000 或 5000 条。
- 结果按打卡时间倒序显示。
- 列表包含用户工号、用户姓名、指纹号、打卡时间。
- 可把当前页导出为 Excel，文件带筛选日期范围。
- Excel 包含冻结标题行和自动筛选。
- 提供“查看未维护的指纹号”按钮，独立汇总最近一个月有打卡、但用户管理中不存在对应指纹号的数据。
- 未维护指纹号弹窗展示指纹号、最近一个月打卡次数、首次打卡时间和最近打卡时间，并显示实际统计起止时刻。
- 汇总使用滚动一个月区间，即数据库当前时间向前一个月，不受考勤列表当前日期和人员筛选条件影响。
- 用户管理中只要任意用户已维护相同的非空指纹号，即视为已维护；判断不区分用户在职或离职状态。
- 指纹号会去除首尾空格后再比较，避免空格造成重复的未维护提示。

考勤库只保存指纹号和打卡时间。系统使用核心用户表中的 \`HrNumber\` 将指纹号关联到工号和姓名；关联不到时，工号和姓名显示为空。

页面提供“同步 OA 用户”按钮。同步完成后会重新查询考勤记录，使新员工的工号和姓名立即补齐。

“查看未维护的指纹号”用于主动发现近期有打卡的新指纹号。无结果时会明确提示最近一个月有打卡记录的指纹号均已维护。

### 4.7 OA 报表中心

支持以下 OA 流程报表：

1. 请假单。
2. 请假单（多人）。
3. 加班申请单（多人）。
4. 出差申请单。
5. 签卡单。

通用功能：

- 按完整姓名、完整工号、开始日期、结束日期查询。
- 日期范围必填，开始日期不能晚于结束日期。
- 支持“当天”“一周”“最近一个月”“当前自然月”四种快速日期范围，口径与考勤页面一致，并在选择后立即查询。
- 根据报表类型动态展示存在的字段。
- 请假和加班类报表显示天、时、分合计。
- 可导出当前查询结果为 Excel。
- 导出表格包含冻结标题、自动筛选和相应合计行。

数据直接来自 OA SQL Server 的流程主表、明细表、流程状态表和人员表，因此“当前节点”反映 OA 中的实时流程状态。

### 4.8 用户与权限

#### 用户资料

- 搜索工号、姓名或部门。
- 展示工号、姓名、部门、性别、职称、职务、资位、指纹号、聘用日期和状态。
- 新增和编辑现有字段。
- 重置密码。
- 为每个用户设置各模块的查看/编辑权限。

#### 同步 OA 用户

同步使用 OA 人员表中的以下对应字段：

| 后台字段 | OA 来源 |
| --- | --- |
| 工号 | \`HrmResource.workcode\` |
| 姓名 | \`HrmResource.lastname\` |
| 部门 | \`HrmDepartment.departmentname\` |
| 性别 | OA 性别代码转换为男/女 |
| 职称 | \`HrmJobCall.name\` |
| 职务 | \`HrmJobTitles.jobtitlename\` |
| 资位 | 人员自定义字段 \`field31\` |
| 聘用日期 | 公司入职日期，空时使用开始日期 |
| 指纹号 | 人员基本信息自定义字段 \`field22\` |
| 状态 | OA 人员状态转换为在职/离职 |

同步原则：

- 以工号识别同一个用户。
- 新用户自动建立，默认密码 \`Aa123456\`。
- 已有用户只更新管理后台现有字段，不更新密码。
- OA 指纹号为空时保留后台原指纹号，不用空值覆盖。
- 自动建立 OA 中存在但后台没有的部门。
- 新增用户默认获得考勤和报表查看权限，不获得编辑权限。
- OA 中已经离职且后台不存在的人员不会新建；后台已存在人员会同步为离职状态。

#### Excel 导入

- “导入用户信息”按工号新增或更新，最多一次 5000 行。
- 用户信息导入可自动创建新部门。
- “导入指纹号”只按工号更新指纹号。
- 页面提供两种 Excel 模板下载。
- 新导入用户使用默认密码；更新用户不改密码。
- 导入在事务中执行，发生不可恢复错误时整体回滚。

### 4.9 部门管理

- 新增、编辑和删除部门。
- 显示每个部门的用户数量。
- 仍有用户关联的部门不能删除，防止用户资料出现无效引用。

### 4.10 预留页面

以下页面目前只有占位内容，尚未提供实际维护能力：

- 采集配置。
- 系统设置。

## 5. SCADA 智能制造看板

### 5.1 看板导航

- 一级楼层：一楼、二楼、三楼。
- 每层楼包含：机台状态、基于产品报表、基于机台报表。
- 默认进入“一楼 / 机台状态”。
- 楼层与报表类型可以组合切换，例如“二楼 / 基于产品报表”。

### 5.2 状态看板

#### 顶部信息

- 品牌与当前楼层标题。
- 距离下次自动刷新的秒数。
- 当前日期、星期和时间。
- 楼层及报表导航。

#### 状态汇总

| 状态 | 含义 | 统一颜色 |
| --- | --- | --- |
| 绿灯 | 运行 | \`#00FF00\` |
| 黄灯 | 待机 | \`#FFFF00\` |
| 红灯 | 报警 | \`#FF0000\` |
| 异常 | 当前分钟没有有效通信数据 | \`#CCCCCC\` |

- 显示各状态机台数量及占比。
- 显示机台总数。
- 稼动率按运行与待机机台占总机台的比例计算。

#### 产量汇总

今日、上一班和当前班分别展示：

- 时间范围。
- 标准产量。
- 实际产量。
- 达成率。

白班为 08:00 至 20:00，夜班为 20:00 至次日 08:00。当前班的统计终点为当前分钟附近，不把尚未发生的班次时间计入实际统计。

#### 未排产提醒

API 检查最近 1 小时所有正产出的分钟记录。如果产出时点没有有效产品排产，页面提示机台数量和机台编码。该提醒用于避免实际产量无法正确归属产品，以及标准产量无法正确计算。

#### 机台分布图

- 按机台档案中的楼层、总行数、总列数、所在行和所在列生成固定网格。
- 设备图片在上，机台编码条在下。
- 按状态使用深色主体和高亮编码条，便于快速辨认。
- 点击机台进入设备生产详情。

### 5.3 单机生产详情

#### 实时信息

- 标题为“机台编码 - IP 地址”。
- 实时状态、分钟产量、采集时点、连接地址。
- 设备品牌、设备型号、出厂日期、工件计数。

#### 当前产品

- 当前没有产品排产时显示“停产 / 未排产”。
- 有排产时显示产品编码、产品名称、规格型号和标准节拍。

#### 上一班与当前班小时产量

- 按小时分别展示上一班和当前班。
- 每小时包含标准、实际、达成率。
- “标准 / 实际 / 达成”标签为黑色，只有数值使用对应强调色。
- 标准产量为 0 时，达成率显示 \`—\`，避免除以 0。

#### 排产变更

- 展示最近统计范围内的排产切换时间。
- 展示产品编码、产品简称/名称或停产记录。
- 当前生效排产即使早于最近 24 小时，也会作为上下文显示。

### 5.4 基于产品报表

- 汇总每个产品的标准产量、实际产量和达成率。
- 包含当天、上一班、当前班三组指标。
- 提供最近 24 小时标准/实际柱状图和达成率折线图。
- 可选择全部产品汇总或指定产品查看趋势。
- 明细表可点击产品行切换趋势图对象。
- 产品达成明细使用分组配色区分三个统计区间：当天为青绿色、上一班为琥珀色、当前班为蓝色；分组表头、子表头和对应三列数据保持同色系。
- 没有排产但发生的实际产量归入“未排产产量”行。

### 5.5 基于机台报表

- 汇总每台机台的标准产量、实际产量和达成率。
- 包含当天、上一班、当前班三组指标。
- 提供最近 24 小时趋势图。
- 可选择全部机台汇总或指定机台。
- 明细表可点击机台行切换趋势图对象。
- 机台达成明细同样使用青绿、琥珀、蓝三组颜色区分当天、上一班和当前班，并通过组间分隔线提高横向阅读准确性。

### 5.6 自动刷新

- 状态看板按系统秒钟在每分钟的第 30 秒发起刷新。
- 报表页面每 60 秒刷新一次。
- 状态快照同时并行读取机台状态、产量汇总和未排产提醒。
- 产品/机台分析将所需时间范围一次取回后统一计算，减少重复请求。
- 页面加载失败时保留页面结构并显示错误，不用长时间全屏“加载中”遮挡已有内容。

## 6. 标准、实际与达成率原理

### 6.1 标准产量

API 将查询时段与一台机台的每个排产有效区间求交集，只对交集秒数计算标准产量。

\`\`\`text
某排产段标准产量 = 交集秒数 ÷ 产品基本加工时间 × 一模多穴
时段标准产量 = 时段内全部有效排产段标准产量之和
\`\`\`

因此排产在 09:15 切换产品时，08:00 至 09:00按旧产品计算，09:00 至 09:15仍按旧产品计算，09:15以后按新产品计算，不会强制按整小时粗略分配。

### 6.2 实际产量

- 实际产量来自 \`t_scadadata.WkcntrSum\`。
- 只汇总大于 0 的产出记录。
- 时间区间采用“开始时间包含、结束时间不包含”的方式，避免相邻时段重复统计边界分钟。
- 小时统计按采集记录的小时编号聚合。

### 6.3 产品归属

每条实际产量按该采集分钟生效的最近排产点归属：

- 有产品排产：归入该产品。
- 生效排产为停产，或此前没有任何排产：归入“未排产产量”。
- 基于机台报表不改变机台归属，直接归入产生数据的机台。

### 6.4 达成率

\`\`\`text
达成率 = 实际产量 ÷ 标准产量 × 100%
\`\`\`

- 标准产量大于 0 时计算百分比，保留两位计算精度，界面通常显示一位小数。
- 标准产量等于 0 时达成率为无值，界面显示 \`—\`。
- 达成率达到 90% 时使用达标强调样式。

## 7. API 能力清单

### 7.1 基础与认证

- \`GET /api/health\`：服务和数据库健康状态。
- \`POST /api/auth/login\`：登录。
- \`GET /api/auth/me\`：当前用户。
- \`POST /api/auth/logout\`：退出。
- \`PUT /api/auth/password\`：修改密码。

### 7.2 管理接口

- \`/api/machines\`：机台分页、详情、新增、编辑、停用。
- \`/api/machine-types\`：设备类型维护和图标读写。
- \`/api/admin/planning/products\`：产品维护。
- \`/api/admin/planning/products/import\`：按产品编码批量新增或更新产品。
- \`/api/admin/planning/machines\`：排产可选机台。
- \`/api/admin/planning/schedules\`：排产查询、新增、编辑、删除。
- \`/api/admin/planning/schedules/import\`：按机台编码和开始时间批量新增或更新排产点。
- \`/api/admin/users\`：用户维护。
- \`/api/admin/users/sync-oa\`：同步 OA 用户。
- \`/api/admin/users/import-information\`：导入用户资料。
- \`/api/admin/users/import-fingerprints\`：导入指纹号。
- \`/api/admin/departments\`：部门维护。
- \`/api/admin/my-permissions\`：当前用户模块权限。

### 7.3 查询与看板接口

- \`/api/attendance\`：考勤分页查询。
- \`/api/attendance/unmatched-fingerprints\`：汇总最近一个月有打卡但用户管理中尚未维护的指纹号。
- \`/api/reports\`：OA 流程报表查询。
- \`/api/scada/dashboard\`：楼层状态看板组合快照。
- \`/api/scada/machines/status\`：指定分钟机台状态。
- \`/api/scada/production/total\`：指定范围实际总产量。
- \`/api/scada/machines/:id/production/hourly\`：单机小时实际产量。
- \`/api/scada/production/report\`：按产品或机台的综合产能报表。
- \`/api/scada/machines/:id/production/context\`：单机产品、排产和小时产量上下文。

## 8. 当前边界与注意事项

- 系统负责读取采集结果，但本仓库没有提供统一的设备采集任务配置页面。
- “采集配置”和“系统设置”仍处于规划状态。
- 楼层名称目前由看板固定映射为一楼、二楼、三楼；机台档案的区域值应与之完全一致。
- 班次固定为 08:00/20:00 两班制，目前没有后台自定义班次功能。
- OA 同步依赖 OA 数据库连通性以及自定义字段 \`field22\`、\`field31\` 的现有定义。
- 考勤工号和姓名依赖指纹号关联，同一指纹号应避免分配给多个有效用户。
- 删除排产点会改变其后时间段的有效产品，应在确认历史统计影响后操作。
- 产品停用和机台停用不会删除历史数据，这是为了保证历史报表可追溯。
`,ph=`# Shineway 智能制造系统使用教程

> 本教程不仅说明按钮怎么点，也解释资料之间的关系、统计结果为什么这样产生，以及出现异常时应从哪里检查。

## 1. 开始使用前先理解系统

### 1.1 三个项目怎样配合

日常操作时不需要分别启动三个网页地址，但需要理解它们的职责：

1. **管理后台 \`shinewayit\`** 是资料维护入口。机台放在哪层楼、产品标准节拍是多少、某台机从什么时候开始做什么产品，都在这里设置。
2. **统一接口 \`shinewayapi\`** 是业务中枢。它检查账号和权限、访问不同数据库，并计算标准产量、实际产量和达成率。
3. **看板 \`shinewayscada\`** 是展示入口。它不直接修改生产资料，只把管理后台配置和设备采集结果组合成状态与报表。

可以把数据流理解为：

\`\`\`text
管理人员维护资料 ─┐
                  ├─> shinewayapi ─> MySQL / OA SQL Server
设备采集写入产量 ─┘                       │
                                          └─> shinewayscada 展示
\`\`\`

### 1.2 推荐的首次配置顺序

首次投入使用时建议严格按以下顺序：

1. 建立或同步用户和部门。
2. 分配用户模块权限。
3. 建立设备类型并上传设备图片。
4. 建立机台档案、连接参数和楼层位置。
5. 建立产品，填写加工时间和一模多穴。
6. 为机台建立排产起点。
7. 打开 SCADA 检查状态、布局和标准/实际产量。

顺序的原因是：机台依赖设备类型，排产依赖机台和产品，看板又依赖机台、排产和采集数据。跳过前置资料时，页面虽然可能打开，但会出现无图标、未排产、标准产量为 0 或实际产量无法归属产品等情况。

## 2. 登录与退出

### 2.1 登录

1. 浏览器访问系统根地址，例如 \`http://服务器地址/\`。
2. 系统自动进入 \`/login\`。
3. 输入用户工号和密码。
4. 点击登录。

登录后左侧只显示当前账号有权查看的模块。如果某个同事看不到菜单，先检查权限，不要先判断页面丢失。

### 2.2 默认密码

以下方式产生的新用户默认密码是 \`Aa123456\`：

- 后台手工新增用户。
- 从 Excel 导入的新用户。
- 从 OA 同步的新用户。
- 管理员执行“重置密码”的用户。

已有用户被 OA 同步或 Excel 更新时，原密码保持不变。

### 2.3 修改密码

1. 点击页面右上角当前用户。
2. 选择“修改密码”。
3. 输入当前密码。
4. 输入至少 8 位的新密码并再次确认。
5. 点击“修改密码”。

修改成功后旧登录会话被清除，需要用新密码重新登录。这可以防止其他设备继续使用旧会话。

### 2.4 退出登录

点击右上角用户菜单中的“退出登录”。系统会删除当前令牌，而不是只清除浏览器页面状态。

### 2.5 收缩或展开左侧菜单

管理中心桌面版左侧菜单默认展开。点击菜单右上侧边缘的箭头按钮即可收缩：

- 收缩后只保留品牌标记和各菜单图标，页面正文获得更多横向空间。
- 鼠标停在图标上可看到菜单名称提示。
- 再次点击右侧箭头可恢复完整菜单文字。
- 刷新或重新进入管理中心时仍以展开状态开始。
- 手机和窄屏页面继续点击顶部菜单按钮打开抽屉，不显示桌面收缩按钮。

## 3. 用户、OA 与权限管理

### 3.1 为什么应先同步 OA 用户

OA 是现有员工资料的主要来源。同步后可以一次得到工号、姓名、部门、性别、职称、职务、资位、聘用日期、状态和指纹号，减少重复录入。

指纹号尤其重要：考勤机原始记录通常只有指纹号和时间，管理后台必须用用户表中的指纹号反查工号和姓名。

### 3.2 从 OA 同步用户

可以从两个页面发起同步：

- 用户管理 → 用户与权限 → “同步 OA 用户”。
- 考勤打卡 → “同步 OA 用户”。

操作步骤：

1. 确认当前账号具有“用户管理编辑”或“考勤打卡编辑”权限。
2. 点击“同步 OA 用户”。
3. 等待按钮从“同步中…”恢复。
4. 查看提示中的新增数和更新数。
5. 在用户列表搜索新员工的工号或姓名。
6. 如果从考勤页面同步，系统会自动重新查询当前考勤结果。

#### 同步时系统做了什么

系统按工号判断人员是否已存在：

- **新工号**：新建后台账号，使用默认密码，并授予考勤与报表查看权限。
- **已有工号**：更新后台已有资料，但不更新密码。
- **OA 新部门**：自动建立部门后再关联用户。
- **OA 指纹号为空**：保留后台原指纹号，避免有效指纹号被空值覆盖。
- **OA 离职人员**：后台已有时同步为离职；后台尚不存在时不再新建。

OA 人员“基本信息”里的“指纹号”对应人员自定义字段 \`field22\`；“资位”对应 \`field31\`。系统只同步管理后台已有的字段，OA 的身份证、黑名单原因等其他字段不会写入后台。

### 3.3 手工新增用户

1. 进入“用户管理”。
2. 点击“新增用户”。
3. 填写工号和姓名，这两个字段必填。
4. 选择部门，填写性别、职称、职务、资位、聘用日期和指纹号。
5. 选择在职状态。
6. 点击“保存”。

新用户会使用默认密码。保存后应继续为其设置所需模块权限。

### 3.4 编辑用户

1. 在搜索框输入工号、姓名或部门关键字。
2. 点击目标用户右侧“编辑”。
3. 修改资料并保存。

编辑用户不会更改密码。若要恢复默认密码，使用列表中的“重置密码”操作。

### 3.5 导入用户信息 Excel

适用于批量补录或从其他系统迁移资料。

1. 在用户管理点击“下载用户信息模板”。
2. 保留模板第一行列名。
3. 每行填写一名用户，工号是新增/更新的识别键。
4. 点击“导入用户信息”，选择填写后的文件。
5. 等待导入提示，核对新增、更新和总条数。

导入特点：

- 一次最多 5000 行。
- 不存在的部门会自动创建。
- 新用户使用默认密码。
- 已有用户不修改密码。
- 指纹号单元格为空时不会覆盖后台已有指纹号。
- 整批数据在数据库事务中处理，严重错误会回滚整批操作。

### 3.6 只导入指纹号

当人员资料已经存在，只需补齐指纹号时：

1. 下载“用户指纹号导入模板”。
2. 填写用户工号和指纹号。
3. 点击“导入指纹号”并选择文件。
4. 查看更新数量和错误明细。

系统按工号匹配，只更新 \`HrNumber\`，不会修改姓名、部门或密码。

### 3.7 设置模块权限

1. 找到用户，点击“权限”。
2. 每个模块分别勾选“查看”和“编辑”。
3. 点击保存。

建议按岗位分配：

| 岗位示例 | 建议权限 |
| --- | --- |
| 车间看板人员 | 可直接查看 SCADA；后台可不授权或仅工作台查看 |
| 生产计划员 | 产品查看/编辑、排产查看/编辑、机台查看 |
| 设备管理员 | 机台和设备类型查看/编辑 |
| 行政人事 | 用户、部门、考勤、报表，根据职责决定编辑权限 |
| 普通员工 | 工作台、个人需要的报表查看权限 |

“编辑”代表可改变业务数据，应只授予确有职责的人员。帮助文档对所有已登录用户开放，不单独占用业务权限。

### 3.8 重置密码

1. 找到用户。
2. 点击“重置密码”。
3. 确认操作。

密码恢复为 \`Aa123456\`，该用户已有登录会话全部失效。

## 4. 部门管理

### 4.1 新增部门

1. 进入“部门管理”。
2. 点击“新增部门”。
3. 输入部门名称并保存。

OA 同步和用户 Excel 导入也会自动建立缺少的部门，因此日常一般不需要重复手工建立。

### 4.2 编辑部门

点击部门右侧“编辑”，修改名称后保存。关联用户会继续引用同一个部门记录。

### 4.3 删除部门

只有用户数为 0 的部门可以删除。如果提示仍有用户：

1. 在用户管理搜索该部门。
2. 把用户转移到其他部门或处理相应人员资料。
3. 返回部门管理再次删除。

## 5. 设备类型管理

### 5.1 作用与原理

设备类型用于把多个相同类别机台归组，并为看板提供统一设备图片。机台档案保存类型编码，看板根据编码读取类型图片。

例如类型编码 \`Brother\`、显示名称“兄弟加工中心”，所有 \`Stype=Brother\` 的机台都可以使用同一张图标。

### 5.2 新增类型

1. 进入“设备类型”。
2. 填写类型编码。建议使用稳定、简短的英文或数字编码。
3. 填写显示名称。
4. 设置显示顺序和启用状态。
5. 点击“保存类型”。

类型编码建立后不能在编辑界面修改，因为机台通过该编码关联类型。确需更换编码时，应先评估已关联机台。

### 5.3 上传设备图标

1. 在设备类型卡片中点击“更换图标”。
2. 选择 PNG、JPEG、WebP 或 GIF 文件。
3. 文件大小应小于 2 MB。
4. 上传后查看卡片预览。
5. 打开看板确认机台图片比例和辨识度。

建议使用背景干净、机台主体完整、横竖比例接近看板格子的图片。系统使用 \`object-fit: contain\` 保持比例，不会强制拉伸变形。

### 5.4 停用类型

停用只影响该类型是否作为有效类型使用，不会删除已有机台数据。历史资料仍然保留。

## 6. 机台管理

### 6.1 新增机台

1. 进入“机台管理”。
2. 点击“新增机台”。
3. 在“基本信息”填写机台编号、区域和设备类型，这三项必须准确。
4. 按需填写简称、完整名称、品牌、型号和出厂日期。
5. 在“连接与采集”填写 IP 地址、端口和 MAC 地址。
6. 设置显示顺序和看板布局参数。
7. 保持状态为启用。
8. 点击“保存机台”。

### 6.2 各字段怎样影响系统

| 字段 | 作用 | 填错后的表现 |
| --- | --- | --- |
| 机台编号 | 业务识别和看板编码 | 用户无法对应现场设备 |
| 区域 | 决定进入哪层楼 | 机台出现在错误楼层或完全不显示 |
| 设备类型 | 决定设备分类和图片 | 看板使用默认图或错误图 |
| IP、端口 | 展示并供采集连接配置参考 | 详情显示错误地址，采集程序可能无法连接 |
| 显示顺序 | 列表和部分查询排序 | 机台顺序不符合现场习惯 |
| 行列总数 | 定义该楼层固定网格 | 空间比例和位置错乱 |
| 所在行、所在列 | 定义机台实际位置 | 机台重叠或放错位置 |
| 一对多系数 | 采集相关扩展参数 | 需与实际采集逻辑保持一致 |

### 6.3 配置楼层分布图

状态看板“一层楼就是一张看板”，每层楼可以有不同的行数和列数。

以一楼 4 行 8 列为例：

1. 筛选区域“一楼”。
2. 编辑该楼层的每台机台。
3. “分布图行数量”统一填 4。
4. “分布图列数量”统一填 8。
5. 按现场位置分别填写“机台所在行”和“机台所在列”。
6. 确保同一个位置只分配给一台启用机台。
7. 打开 \`/scada/floor1/status\` 核对。

如果某一整列没有机台，也不要减少总列数。系统会保留空列宽度，使左右间距仍与实际场景相符。

### 6.4 查询机台

- 搜索框支持编号、名称和 IP。
- 区域应输入完整区域值，例如“一楼”。
- 状态可选全部、启用或停用。
- 点击“重置”恢复全部条件。

### 6.5 编辑和停用

编辑机台后保存即可。停用机台前系统会确认：

- 停用后机台不再出现在当前状态看板。
- 不再出现在新增排产的可选机台中。
- 历史采集数据和历史排产不会删除。

如果设备只是短暂停机，不应停用机台；应在排产中增加“停产 / 排空”点。停用更适用于设备退役或长期不再管理。

## 7. 产品信息与标准产量

### 7.1 为什么必须维护产品产能参数

实际产量来自设备采集，而标准产量无法从计数器自动推断。系统用产品的“基本加工时间”和“一模多穴”建立标准速度，再结合机台排产计算每个时间段应完成多少件。

### 7.2 新增产品

1. 进入“产品信息”。
2. 点击“新增产品”。
3. 填写唯一产品编码和产品名称。
4. 填写简称和规格型号。
5. 输入基本加工时间，单位是秒。
6. 输入一模多穴，单位是 pcs，最小为 1。
7. 设置为启用。
8. 点击“保存产品”。

### 7.3 批量导入产品

适合首次建立大量产品，或统一调整多个产品的节拍和状态。

1. 进入“产品信息”。
2. 点击“下载导入模板”。
3. 在模板中逐行填写产品编码、名称、简称、规格、基本加工时间、一模多穴和状态。
4. 保留第一行字段名称，不要合并单元格。
5. 点击“批量导入”并选择 \`.xlsx\` 文件。
6. 等待完成提示，核对新增数、更新数和总数。
7. 在列表搜索几个代表性产品，检查节拍换算结果。

导入判断规则：

- 产品编码已存在：更新该产品的名称、简称、规格、节拍、穴数和状态。
- 产品编码不存在：新增产品。
- 状态为 \`0\` 或“停用”：产品导入为停用；常规填写 \`1\` 表示启用。
- 文件中没有出现的已有产品不会被删除或停用。
- 同一文件不能重复填写同一个产品编码。
- 单次最多 5000 条，任何一行失败都会取消整批写入。

批量更新节拍同样会影响重新查询的历史标准产量，导入前应确认参数口径。

### 7.4 怎样填写节拍

示例一：每 60 秒完成一模，每模 3 件。

\`\`\`text
基本加工时间 = 60
一模多穴 = 3
小时标准产量 = 3600 ÷ 60 × 3 = 180 pcs
\`\`\`

示例二：每 45.5 秒完成一模，每模 2 件。

\`\`\`text
基本加工时间 = 45.5
一模多穴 = 2
小时标准产量约 = 158.24 pcs
\`\`\`

基本加工时间应使用稳定生产条件下认可的标准节拍，而不是随意使用某一分钟的最快值。否则达成率会长期偏低，失去管理意义。

### 7.5 编辑产品参数的影响

当前实现计算报表时读取产品当前的节拍参数。因此修改基本加工时间或一模多穴后，再查询历史时段也会使用新参数重算标准产量。

在修改标准前应保留业务依据，并明确这会影响历史标准口径。若将来需要冻结历史标准，应增加产品版本或排产快照机制。

### 7.6 停用产品

停用后：

- 不能再用于新增排产点。
- 历史排产仍然有效。
- 历史产品报表仍显示该产品。

这适用于产品停止接单但仍需查询历史数据的场景。

## 8. 机台排产

### 8.1 理解“排产点”

系统排的是产品切换时间，不排计划数量。

假设 C1 有以下记录：

| 开始时间 | 产品 |
| --- | --- |
| 08:00 | A |
| 09:00 | B |
| 10:00 | C |

系统解释为：

- 08:00 ≤ 时间 < 09:00：A 产品。
- 09:00 ≤ 时间 < 10:00：B 产品。
- 10:00 以后：C 产品，直到出现新的排产点。

这类模型的优点是切换清楚，且不需要猜测结束时间。需要停止生产时，必须主动增加“停产 / 排空”记录。

### 8.2 新增排产点

1. 进入“机台排产”。
2. 选择要查看的排产日期。
3. 选择楼层/区域。
4. 在左侧编辑器选择机台。
5. 设置准确的开始时间。
6. 选择生产产品。
7. 需要时填写备注，例如“试模”或“换料”。
8. 点击“添加排产点”。

保存后在时间线和“当日排产点”中检查切换位置。

机台选择框只显示机台编码，避免简称过长影响选择效率；楼层/区域筛选仍会限制可选机台范围。

### 8.3 批量导入排产点

1. 进入“机台排产”。
2. 点击标题区域的“下载导入模板”。
3. 填写机台编码、开始时间、产品编码和备注。
4. 开始时间建议使用 \`YYYY-MM-DD HH:mm:ss\`，例如 \`2026-08-24 08:00:00\`。
5. 需要排停产时把产品编码留空，不要填写“停产”文字。
6. 点击“批量导入”并选择模板文件。
7. 查看新增、更新和总数提示。
8. 切换到导入日期和对应楼层，在时间线中抽查结果。

系统以“机台编码 + 开始时间”识别同一个排产点：

- 已存在：更新产品和备注。
- 不存在：新增排产点。
- 机台编码必须存在于机台管理。
- 非空产品编码必须存在于产品信息；历史维护时可以引用已存在的停用产品。
- 同一文件中的机台和开始时间不能重复。
- 单次最多 5000 条，写入使用事务，任意写入失败会整体回滚。

批量更新历史排产会改变历史实际产量的产品归属和标准产量，导入前应核对日期与机台编码。

### 8.4 排停产

当机台停止生产：

1. 新增排产点。
2. 开始时间填实际停产时间。
3. 产品选择“停产 / 排空”。
4. 保存。

该时刻起标准产量为 0。之后复产时再添加新的产品排产点。

不要用“停用机台”代替临时停产，因为停用会让机台从看板和排产选择中消失。

### 8.5 编辑排产

可以点击时间线中的产品色块，或在“当日排产点”点击编辑。修改机台、开始时间、产品或备注后保存。

编辑开始时间会改变前后两个排产段的边界，从而影响标准产量和实际产量的产品归属。

### 8.6 删除排产

删除后，前一个排产点会继续生效到更晚的下一个排产点。例如删除 09:00 的 B 产品点，08:00 的 A 产品会持续到 10:00。

删除历史排产会重新解释历史实际产量归属。删除前应确认该记录确实录错，而不是为了让当前页面看起来更整洁。

### 8.7 时间线如何阅读

- 横轴表示当天 00:00 至 24:00。
- 每行是一台机台。
- 色块表示某产品在当天的有效区间。
- “停产”色块表示标准产量为 0。
- 当天没有新增排产点并不表示没有排产，机台可能继续沿用前一天或更早的最后一个排产。

## 9. 考勤打卡记录

### 9.1 数据为什么有时只有指纹号

考勤原始表保存：

\`\`\`text
指纹号 + 打卡时间
\`\`\`

页面显示工号和姓名时，API 再到用户表按相同指纹号查找。因此出现“有指纹号、工号姓名为空”通常不是打卡丢失，而是新员工尚未同步，或 OA/后台没有正确指纹号。

### 9.2 查询打卡记录

1. 进入“考勤打卡”。
2. 选择开始日期和结束日期。
3. 可选填写完整姓名、完整工号或完整指纹号。
4. 选择每页条数。
5. 点击“查询”。

姓名和工号是精确匹配，不是模糊搜索。日期范围包含开始日期和结束日期的整天。

#### 快速选择日期范围

日期筛选区提供四个快捷按钮，点击后立即查询：

| 快捷项 | 开始日期 | 结束日期 |
| --- | --- | --- |
| 当天 | 今天 | 今天 |
| 一周 | 今天向前 6 天 | 今天 |
| 最近一个月 | 当前日期向前一个月 | 今天 |
| 当前自然月 | 本月 1 日 | 本月最后一天 |

快捷选择完成后仍可手工修改开始或结束日期。手工修改后快捷按钮取消高亮，再点击“查询”应用自定义范围。

### 9.3 查看未维护的指纹号

该功能适合在不逐页翻查考勤记录的情况下，集中发现最近入职、已经打卡但尚未建立指纹号关联的人员。

1. 进入“考勤打卡”。
2. 点击页面标题右侧的“查看未维护的指纹号”。
3. 等待系统汇总最近一个月记录。
4. 在弹窗中查看指纹号、打卡次数、首次打卡和最近打卡时间。
5. 根据指纹号到 OA 人员基本信息或用户管理中核对员工。
6. 可先关闭弹窗并点击“同步 OA 用户”；如果 OA 中尚未维护，则使用用户编辑或“导入指纹号”补齐。
7. 维护完成后再次打开弹窗，确认该指纹号已经消失。

#### 统计口径

- “最近一个月”是从数据库当前时间向前推一个月的滚动区间，不是固定的上月 1 日至月末，也不是考勤列表当前选择的日期范围。
- 系统先按去除首尾空格后的指纹号分组，再计算打卡次数、最早和最晚时间。
- 用户管理中任意用户存在相同的非空指纹号，就认为该指纹号已经维护；离职用户也算已维护。
- 空指纹号不进入汇总。
- 弹窗显示“均已维护”时，表示最近一个月出现过的有效指纹号都能在用户管理中找到，不代表 OA 的其他人员字段全部完整。

该汇总只负责发现缺少关联的指纹号，不会自动创建用户或猜测姓名。这样可以避免把同一指纹号错误分配给错误员工。

### 9.4 补齐新员工姓名

1. 记下空白记录的指纹号。
2. 点击“同步 OA 用户”。
3. 等待同步完成并自动刷新。
4. 检查工号和姓名是否出现。
5. 若仍为空，进入用户管理搜索该员工，确认“指纹号”与打卡记录完全一致。
6. 若用户不存在，检查 OA 人员基本信息中的指纹号字段及工号。

### 9.5 导出考勤

1. 先设置筛选条件并查询。
2. 选择合适的每页条数，因为按钮导出的是当前页。
3. 点击“导出本页 Excel”。

若需要一次导出更多记录，可把每页条数调到 500、1000、2000 或 5000 后重新查询，再导出。

## 10. OA 报表中心

### 10.1 选择报表

报表下拉框提供：请假单、请假单（多人）、加班申请单（多人）、出差申请单、签卡单。

切换报表类型时，旧结果会清空，避免把不同表单字段误认为同一类数据。

### 10.2 查询

1. 选择报表类型。
2. 可选输入完整姓名或完整工号。
3. 选择开始和结束日期。
4. 点击“查询”。

日期区域同样提供“当天”“一周”“最近一个月”“当前自然月”。点击快捷项会立即执行当前报表类型、姓名和工号条件下的查询；之后仍可手工调整日期。

报表字段根据类型变化，例如：

- 请假：开始/结束时间、天时分、请假类型、事由。
- 加班：加班时段、累计小时、原因和备注。
- 出差：日期、时长、地点和事由。
- 签卡：签卡日期、排班时间、签卡时间、考勤状态、类别和原因。

“当前节点”来自 OA 当前流程节点，可用于判断流程是否归档或仍在审批。

### 10.3 合计

请假单和多人加班类报表会对结果中的天、时、分分别求和。合计只是各字段数值相加，不会自动把 60 分换算成 1 小时，也不会把小时换算成天。

### 10.4 导出 Excel

查询得到结果后点击“导出 Excel”。文件名包含报表名称和日期范围，列结构与当前报表类型对应。

## 11. SCADA 看板

### 11.1 进入看板

有两种方式：

- 在管理后台工作台点击“查看看板”。
- 直接访问 \`/scada/\`。

默认页面是一楼机台状态。看板当前不要求单独登录，适合车间大屏，但网络访问控制仍应由服务器或内网策略保证。

### 11.2 切换楼层和报表

顶部第一组菜单选择一楼、二楼或三楼。第二组菜单选择：

- 机台状态。
- 基于产品报表。
- 基于机台报表。

切换楼层后，区域条件随之变化。机台档案的区域必须严格填写“一楼”“二楼”或“三楼”，否则不会进入对应看板。

### 11.3 阅读机台状态

- **绿灯**：运行。
- **黄灯**：待机。
- **红灯**：报警。
- **异常**：目标采集分钟没有有效状态，通常需要检查设备、网络或采集任务。

机台按钮主体使用较深的同色系，底部编码条使用纯亮色，既保留层次又能快速辨别状态。

### 11.4 阅读产量卡片

“今日产量”“上一班”“当前班”都有标准、实际、达成率：

- **标准**：按产品节拍和排产有效秒数计算。
- **实际**：设备每分钟产量之和。
- **达成率**：实际 ÷ 标准 × 100%。
- **—**：标准为 0，无法计算达成率。

班次固定为：

- 白班 08:00 至 20:00。
- 夜班 20:00 至次日 08:00。

“上一班”使用完整班次范围；“当前班”只统计到当前时间。

### 11.5 处理“最近 1 小时未排产”提醒

看到提醒时按以下步骤处理：

1. 记下提示中的机台编码。
2. 确认机台最近 1 小时是否确实生产。
3. 进入后台“机台排产”。
4. 找到实际开始生产产品的时间。
5. 补充正确产品排产点。
6. 若机台实际处于停产但采集产生了错误计数，应检查采集数据，不要用虚假产品排产掩盖。
7. 等待下一次看板刷新，确认提醒消失。

提醒消失只表示最近 1 小时的产出已有产品归属，不代表排产产品一定正确，还应核对实际产品。

### 11.6 查看单机详情

点击分布图中的机台：

1. 顶部核对机台编码和 IP 地址。
2. 查看实时状态、分钟产量、采集时点和工件计数。
3. 查看设备品牌、型号和出厂日期。
4. 查看当前生产产品及标准节拍。
5. 横向查看上一班、当前班每小时标准、实际和达成率。
6. 在下方核对近期排产变更。

小时表中的“标准 / 实际 / 达成”是黑色标签；后面的数字使用不同颜色，便于区分指标而不让整行文字过于花哨。

### 11.7 基于产品报表

用于回答“各产品做得怎么样”：

1. 选择楼层。
2. 进入“基于产品报表”。
3. 先看当天、上一班、当前班汇总卡片。
4. 在“图表对象”选择全部产品或某个产品。
5. 查看最近 24 小时标准柱、实际柱和达成率折线。
6. 查看产品达成明细，点击任意产品行切换上方图表。

产品达成明细按时间范围分为三种颜色：青绿色列是当天，琥珀色列是上一班，蓝色列是当前班。每种颜色内仍按“标准、实际、达成率”排列；横向查看同一行时，可借助颜色避免把相邻班次的数据读错。

“未排产产量”表示采集到了实际产量，但该分钟找不到有效产品排产。这一行越大，产品维度报表越不可靠，应优先补排产。

### 11.8 基于机台报表

用于回答“各机台做得怎么样”：

操作与产品报表相同，但统计对象变为机台。它适合比较同层楼不同设备的产能表现。机台报表中的实际产量天然知道来自哪台机，因此不会产生“未知机台”归属；但没有排产时标准仍会是 0。

机台达成明细沿用相同颜色规则：当天为青绿色、上一班为琥珀色、当前班为蓝色。点击某台机台所在行后，三组背景会同步加深，同时上方趋势图切换到该机台。

### 11.9 自动刷新

- 顶部倒计时显示下一次状态刷新时间。
- 状态看板在每分钟第 30 秒刷新。
- 产品和机台报表每 60 秒刷新。
- 点击机台时，弹窗按打开时刻加载最新产品与排产上下文。

刷新期间尽量保留已有内容。如果显示错误提示，可等待下一轮刷新；持续失败则按故障排查章节检查。

## 12. 统计原理详解

### 12.1 时间边界

系统统计区间采用：

\`\`\`text
开始时间 <= 采集分钟 < 结束时间
\`\`\`

例如 08:00 至 09:00 包含 08:00、08:01……08:59，不包含 09:00。这样 09:00 至 10:00 可以从 09:00 开始，不会重复统计。

### 12.2 排产切换落在小时中间

假设：

- 08:00 开始 A，标准速度 2 pcs/分钟。
- 08:20 切换 B，标准速度 3 pcs/分钟。
- 查询 08:00 至 09:00。

标准产量是：

\`\`\`text
A：20 分钟 × 2 = 40 pcs
B：40 分钟 × 3 = 120 pcs
合计：160 pcs
\`\`\`

系统按秒级有效区间求交集，不会因为报表按小时显示而把整小时都算给 A 或 B。

### 12.3 实际产量如何归入产品

每条采集记录都会查找“该分钟之前最近的排产点”：

- 最近排产点是 A：实际量归 A。
- 最近排产点是 B：实际量归 B。
- 最近排产点是停产或不存在：归“未排产产量”。

所以事后补排产或修改历史排产，会改变产品报表中的历史归属。

### 12.4 为什么标准为 0 时不显示 0%

没有标准产量时，\`实际 ÷ 标准\` 无法计算。显示 0% 会误导用户认为“有标准但完全未完成”，因此系统显示 \`—\`。

常见原因：

- 尚未排产。
- 当前生效记录为停产。
- 产品加工时间无效。
- 查询时段与排产段没有交集。

## 13. 常见问题排查

### 13.1 登录提示工号或密码错误

依次检查：

1. 工号是否与后台一致。
2. 用户状态是否为在职。
3. 是否刚被管理员重置为默认密码。
4. OA 同步不会覆盖已有密码，不要误以为同步后密码恢复默认。
5. 必要时由管理员重置密码。

### 13.2 登录后看不到某个菜单

- 进入用户管理检查该用户对应模块的“查看”权限。
- 如果连用户管理也无权进入，请由其他管理员处理。
- 编辑按钮不显示时，检查“编辑”权限。

### 13.3 OA 同步失败

检查：

1. 当前用户是否有用户管理编辑或考勤编辑权限。
2. API 是否能访问 OA SQL Server。
3. OA 数据库账号是否仍有效。
4. OA 表结构或人员自定义字段是否被调整。
5. API 日志中是否有连接超时、登录失败或字段不存在错误。

### 13.4 有指纹号但工号姓名为空

1. 点击“查看未维护的指纹号”，确认该号码是否出现在最近一个月汇总中。
2. 同步 OA 用户。
3. 在用户管理确认员工已存在。
4. 核对后台指纹号与打卡记录是否完全一致，注意数字位数。
5. 查看 OA 人员基本信息的指纹号是否填在正确字段。
6. 必要时用“导入指纹号”模板补齐。
7. 再次打开未维护指纹号弹窗，确认号码已经从汇总中消失。

### 13.5 机台不出现在看板

检查：

1. 机台是否启用。
2. 区域是否准确为当前楼层名称。
3. 所在行、所在列是否大于 0。
4. 行列位置是否超过该层总行数和总列数。
5. 是否与另一台机台占用同一位置。
6. API 的机台状态接口是否能返回该机台。

### 13.6 机台显示“异常”

异常代表看板查询的目标分钟没有有效采集状态。检查：

1. 设备是否开机且网络连通。
2. 机台 IP 和端口是否正确。
3. 采集程序是否运行。
4. \`t_scadadata\` 是否持续出现每分钟记录。
5. 服务器与采集设备时间是否一致。

### 13.7 标准产量一直为 0

检查：

1. 机台是否有查询时段之前或时段内生效的排产点。
2. 当前排产是否选择了产品，而不是停产/排空。
3. 产品是否有大于 0 的基本加工时间。
4. 一模多穴是否至少为 1。
5. 排产机台是否与产生实际数据的机台一致。

### 13.8 实际产量为 0

检查：

1. 目标时段内 \`t_scadadata.WkcntrSum\` 是否大于 0。
2. 采集时间编号是否使用正确的 \`YYYYMMDDHHmm\`。
3. 机台是否属于当前楼层。
4. 页面显示的时间范围是否是预期班次。

### 13.9 达成率显示“—”

这不是页面错误，而是标准产量为 0。先解决排产或产品节拍问题。

### 13.10 修改排产后历史报表变化

这是当前系统的预期行为。报表按现有产品参数和现有排产记录重新计算历史标准及产品归属。历史排产应只在原记录确实错误时修改。

### 13.11 页面持续加载或接口报错

管理员可检查：

\`\`\`bash
cd /opt/shineway
sudo docker compose -f shinewayscada/shinewayscada.yml ps
sudo docker compose -f shinewayscada/shinewayscada.yml logs --tail=200 api
sudo docker compose -f shinewayscada/shinewayscada.yml logs --tail=100 gateway
\`\`\`

同时访问 \`/api/health\` 判断 API 和数据库连接状态。

## 14. 日常操作建议

### 14.1 每班开始前

1. 检查即将生产的机台是否已有正确排产。
2. 确认产品节拍参数没有遗漏。
3. 查看机台是否大面积通信异常。
4. 核对当前班名称和时间范围。

### 14.2 换产品时

1. 记录实际切换时间。
2. 立即新增新产品排产点。
3. 打开单机详情确认当前产品已变化。
4. 检查切换小时的标准产量是否符合两个产品的分段计算。

### 14.3 停产时

1. 在实际停产时刻排“停产 / 排空”。
2. 不要仅依赖设备没有产出，因为没有停产点时系统仍会继续计算前一产品的标准产量。

### 14.4 新员工入职时

1. OA 完成人员基本信息并填写工号和指纹号。
2. 在后台同步 OA 用户。
3. 检查部门、指纹号和在职状态。
4. 分配业务权限。
5. 通知默认密码并要求及时修改。

### 14.5 每日数据检查

- 查看最近 1 小时未排产提醒。
- 查看产品报表中的“未排产产量”。
- 对比产品和机台两个维度的实际总量。
- 对异常低或异常高的达成率核对节拍、排产和采集计数。
- 对考勤空姓名记录及时同步或补指纹号。

## 15. 管理员部署与维护说明

### 15.1 当前部署结构

Ubuntu 主机使用 Docker Compose 运行：

\`\`\`text
80/tcp -> gateway
          ├─ /api/   -> api:7003
          ├─ /scada/ -> scada:80
          └─ /       -> it:80
\`\`\`

这种方式比直接在 Ubuntu 主机安装每个项目的 Node.js、Nginx 和依赖更容易保持环境一致，也便于重建、回滚和查看日志。Ubuntu 仍然是宿主操作系统，Docker 是应用运行方式，两者并不冲突。

### 15.2 环境配置

API 通过 \`.env\` 配置：

- 服务监听地址和端口。
- CORS 来源。
- MySQL 主机、端口、账号、密码和三个数据库名。
- MySQL 连接池大小。
- OA SQL Server 主机、端口、账号、密码和数据库名。

修改数据库配置后需要重建或重启 API 容器。环境文件包含敏感信息，应限制服务器文件权限和 Git 仓库访问权限。

### 15.3 构建与启动

\`\`\`bash
cd /opt/shineway
sudo docker compose -f shinewayscada/shinewayscada.yml up -d --build
\`\`\`

查看状态：

\`\`\`bash
sudo docker compose -f shinewayscada/shinewayscada.yml ps
\`\`\`

### 15.4 更新单个服务

更新管理后台：

\`\`\`bash
sudo docker compose -f shinewayscada/shinewayscada.yml up -d --build it
sudo docker compose -f shinewayscada/shinewayscada.yml up -d --force-recreate gateway
\`\`\`

更新看板：

\`\`\`bash
sudo docker compose -f shinewayscada/shinewayscada.yml up -d --build scada
sudo docker compose -f shinewayscada/shinewayscada.yml up -d --force-recreate gateway
\`\`\`

更新 API：

\`\`\`bash
sudo docker compose -f shinewayscada/shinewayscada.yml up -d --build api
sudo docker compose -f shinewayscada/shinewayscada.yml up -d --force-recreate gateway
\`\`\`

重建后重新创建网关，可以避免网关继续使用容器旧地址。

### 15.5 健康检查

浏览器或命令行访问：

\`\`\`text
/api/health
\`\`\`

正常时应返回成功状态，并反映 API 数据库连接情况。前端页面能打开不等于数据库正常，排查业务查询时应同时检查健康接口和 API 日志。

## 16. 术语速查

| 术语 | 含义 |
| --- | --- |
| ScadaNO | 采集分钟编号，格式通常为 \`YYYYMMDDHHmm\` |
| WkcntrNum | 设备工件累计计数或当前工件计数 |
| WkcntrSum | 该采集记录代表的实际产出数量 |
| LedStatus | 机台状态代码，映射为运行、待机、报警或异常 |
| CycleSeconds | 产品完成一模的基本加工时间，单位秒 |
| Cavities | 一模多穴数量，单位 pcs |
| 排产点 | 从指定时刻开始生效的产品或停产记录 |
| 标准产量 | 根据节拍、穴数和排产有效时间计算的应产数量 |
| 实际产量 | 设备采集记录中实际产出数量的汇总 |
| 达成率 | 实际产量除以标准产量 |
| 未排产产量 | 有实际产出但该分钟没有有效产品排产的数量 |
| HrNumber | 后台用户指纹号，用于关联考勤原始记录 |
`,mh={class:`docs-page`},hh={class:`docs-heading`},gh={class:`document-tabs`,"aria-label":`文档选择`},_h=[`onClick`],vh={class:`docs-layout`},yh=[`innerHTML`],bh={class:`card docs-toc`},xh={"aria-label":`章节目录`},Sh=[`onClick`],Ch=Su(L({__name:`DocsView`,setup(e){let t=[{key:`features`,title:`功能清单`,description:`系统范围、模块能力、数据来源与计算规则`,source:fh},{key:`tutorial`,title:`使用教程`,description:`操作步骤、业务原理、使用建议与故障排查`,source:ph}],n=ss(),r=os(),i=P(null),a=P([]),o=K(()=>n.query.doc===`features`?`features`:`tutorial`),s=K(()=>t.find(e=>e.key===o.value)??t[1]),c=K(()=>$.parse(s.value.source,{gfm:!0})),l=async()=>{if(await Dn(),!i.value)return;let e=[...i.value.querySelectorAll(`h2, h3`)];a.value=e.map((e,t)=>{let n=`section-${o.value}-${t+1}`;return e.id=n,{id:n,text:e.textContent?.trim()||`章节 ${t+1}`,level:Number(e.tagName.slice(1))}}),i.value.scrollTop=0},u=async e=>{await r.replace({path:`/docs`,query:{doc:e}})},d=e=>{i.value?.querySelector(`#${e}`)?.scrollIntoView({behavior:`smooth`,block:`start`})};return Gn(c,()=>void l(),{immediate:!0}),(e,n)=>(B(),V(`div`,mh,[H(`header`,hh,[n[0]||=H(`div`,null,[H(`span`,{class:`eyebrow`},`KNOWLEDGE BASE`),H(`h2`,null,`帮助文档`),H(`p`,null,`系统功能、操作方法与业务计算原理。`)],-1),H(`nav`,gh,[(B(),V(z,null,R(t,e=>H(`button`,{key:e.key,class:A({active:e.key===o.value}),onClick:t=>u(e.key)},[H(`strong`,null,j(e.title),1),H(`span`,null,j(e.description),1)],10,_h)),64))])]),H(`div`,vh,[H(`article`,{ref_key:`article`,ref:i,class:`card document-panel`},[H(`div`,{class:`document-body`,innerHTML:c.value},null,8,yh)],512),H(`aside`,bh,[H(`header`,null,[n[1]||=H(`span`,null,`当前文档`,-1),H(`strong`,null,j(s.value.title),1)]),H(`nav`,xh,[(B(!0),V(z,null,R(a.value,e=>(B(),V(`button`,{key:e.id,class:A(`toc-level-${e.level}`),onClick:t=>d(e.id)},j(e.text),11,Sh))),128))])])])]))}}),[[`__scopeId`,`data-v-b46a07ec`]]),wh=Wc({history:fc(`/`),routes:[{path:`/login`,component:qf,meta:{title:`登录`,public:!0}},{path:`/`,component:ll,children:[{path:``,name:`dashboard`,component:ml,meta:{title:`工作台`,module:`dashboard`}},{path:`machines`,component:nu,meta:{title:`机台管理`,module:`machines`}},{path:`machine-types`,component:Cu,meta:{title:`设备类型管理`,module:`machine-types`}},{path:`products`,component:md,meta:{title:`产品信息`,module:`products`}},{path:`schedules`,component:Ld,meta:{title:`机台排产`,module:`schedules`}},{path:`collection`,component:zd,meta:{title:`采集配置`,module:`collection`}},{path:`attendance`,component:wf,meta:{title:`考勤打卡记录`,module:`attendance`}},{path:`reports`,component:Uf,meta:{title:`报表中心`,module:`reports`}},{path:`users`,component:xp,meta:{title:`用户管理`,module:`users`}},{path:`departments`,component:Ep,meta:{title:`部门管理`,module:`departments`}},{path:`settings`,component:zd,meta:{title:`系统设置`,module:`settings`}},{path:`docs`,component:Ch,meta:{title:`帮助文档`}},{path:`change-password`,component:Op,meta:{title:`修改密码`}}]}]});wh.beforeEach(async e=>{if(e.meta.public)return!X.token||`/`;if(!X.token)return`/login`;if(!X.permissions.length)try{await Xc()}catch{return X.token=``,X.user=null,X.permissions=[],localStorage.removeItem(`shineway_session`),`/login`}let t=e.meta.module;if(t&&!Z(t)){let e=X.permissions.find(e=>!!e.CanView);return e&&e.ModuleKey!==t?`/${e.ModuleKey===`dashboard`?``:e.ModuleKey}`:!1}return!0}),wh.afterEach(e=>{document.title=`${String(e.meta.title??`管理中心`)} · Shineway`}),Uo(Gc).use(wh).mount(`#app`);export{l as n,o as t};