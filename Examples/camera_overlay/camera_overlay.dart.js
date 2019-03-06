{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.lS(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ih"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ih"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ih(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r=r+x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={i5:function i5(){},
i3:function(){return new P.bP("No element")},
kL:function(){return new P.bP("Too many elements")},
l3:function(a,b,c){H.w(a,"$ib",[c],"$ab")
H.k(b,{func:1,ret:P.F,args:[c,c]})
H.cC(a,0,J.bt(a)-1,b,c)},
cC:function(a,b,c,d,e){H.w(a,"$ib",[e],"$ab")
H.k(d,{func:1,ret:P.F,args:[e,e]})
if(c-b<=32)H.l2(a,b,c,d,e)
else H.l1(a,b,c,d,e)},
l2:function(a,b,c,d,e){var u,t,s,r,q
H.w(a,"$ib",[e],"$ab")
H.k(d,{func:1,ret:P.F,args:[e,e]})
for(u=b+1,t=J.bp(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(!(r>b&&J.ap(d.$2(t.h(a,r-1),s),0)))break
q=r-1
t.i(a,r,t.h(a,q))
r=q}t.i(a,r,s)}},
l1:function(a3,a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
H.w(a3,"$ib",[a7],"$ab")
H.k(a6,{func:1,ret:P.F,args:[a7,a7]})
u=C.c.S(a5-a4+1,6)
t=a4+u
s=a5-u
r=C.c.S(a4+a5,2)
q=r-u
p=r+u
o=J.bp(a3)
n=o.h(a3,t)
m=o.h(a3,q)
l=o.h(a3,r)
k=o.h(a3,p)
j=o.h(a3,s)
if(J.ap(a6.$2(n,m),0)){i=m
m=n
n=i}if(J.ap(a6.$2(k,j),0)){i=j
j=k
k=i}if(J.ap(a6.$2(n,l),0)){i=l
l=n
n=i}if(J.ap(a6.$2(m,l),0)){i=l
l=m
m=i}if(J.ap(a6.$2(n,k),0)){i=k
k=n
n=i}if(J.ap(a6.$2(l,k),0)){i=k
k=l
l=i}if(J.ap(a6.$2(m,j),0)){i=j
j=m
m=i}if(J.ap(a6.$2(m,l),0)){i=l
l=m
m=i}if(J.ap(a6.$2(k,j),0)){i=j
j=k
k=i}o.i(a3,t,n)
o.i(a3,r,l)
o.i(a3,s,j)
o.i(a3,q,o.h(a3,a4))
o.i(a3,p,o.h(a3,a5))
h=a4+1
g=a5-1
if(J.b7(a6.$2(m,k),0)){for(f=h;f<=g;++f){e=o.h(a3,f)
d=a6.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.R()
if(d<0){if(f!==h){o.i(a3,f,o.h(a3,h))
o.i(a3,h,e)}++h}else for(;!0;){d=a6.$2(o.h(a3,g),m)
if(typeof d!=="number")return d.P()
if(d>0){--g
continue}else{c=g-1
if(d<0){o.i(a3,f,o.h(a3,h))
b=h+1
o.i(a3,h,o.h(a3,g))
o.i(a3,g,e)
g=c
h=b
break}else{o.i(a3,f,o.h(a3,g))
o.i(a3,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){e=o.h(a3,f)
a0=a6.$2(e,m)
if(typeof a0!=="number")return a0.R()
if(a0<0){if(f!==h){o.i(a3,f,o.h(a3,h))
o.i(a3,h,e)}++h}else{a1=a6.$2(e,k)
if(typeof a1!=="number")return a1.P()
if(a1>0)for(;!0;){d=a6.$2(o.h(a3,g),k)
if(typeof d!=="number")return d.P()
if(d>0){--g
if(g<f)break
continue}else{d=a6.$2(o.h(a3,g),m)
if(typeof d!=="number")return d.R()
c=g-1
if(d<0){o.i(a3,f,o.h(a3,h))
b=h+1
o.i(a3,h,o.h(a3,g))
o.i(a3,g,e)
h=b}else{o.i(a3,f,o.h(a3,g))
o.i(a3,g,e)}g=c
break}}}}a=!1}a2=h-1
o.i(a3,a4,o.h(a3,a2))
o.i(a3,a2,m)
a2=g+1
o.i(a3,a5,o.h(a3,a2))
o.i(a3,a2,k)
H.cC(a3,a4,h-2,a6,a7)
H.cC(a3,g+2,a5,a6,a7)
if(a)return
if(h<t&&g>s){for(;J.b7(a6.$2(o.h(a3,h),m),0);)++h
for(;J.b7(a6.$2(o.h(a3,g),k),0);)--g
for(f=h;f<=g;++f){e=o.h(a3,f)
if(a6.$2(e,m)===0){if(f!==h){o.i(a3,f,o.h(a3,h))
o.i(a3,h,e)}++h}else if(a6.$2(e,k)===0)for(;!0;)if(a6.$2(o.h(a3,g),k)===0){--g
if(g<f)break
continue}else{d=a6.$2(o.h(a3,g),m)
if(typeof d!=="number")return d.R()
c=g-1
if(d<0){o.i(a3,f,o.h(a3,h))
b=h+1
o.i(a3,h,o.h(a3,g))
o.i(a3,g,e)
h=b}else{o.i(a3,f,o.h(a3,g))
o.i(a3,g,e)}g=c
break}}H.cC(a3,h,g,a6,a7)}else H.cC(a3,h,g,a6,a7)},
ed:function ed(){},
bi:function bi(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eB:function eB(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
fO:function fO(a,b,c){this.a=a
this.b=b
this.$ti=c},
bg:function bg(){},
b6:function(a){var u,t
u=H.A(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
lB:function(a){return v.types[H.T(a)]},
lJ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.H(a).$iB},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ca(a)
if(typeof u!=="string")throw H.e(H.c4(a))
return u},
bL:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bM:function(a){return H.kS(a)+H.hF(H.aN(a),0,null)},
kS:function(a){var u,t,s,r,q,p,o,n,m
u=J.H(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.M||!!u.$ib0){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.b6(r.length>1&&C.i.ae(r,0)===36?C.i.c7(r,1):r)},
bj:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kZ:function(a){var u=H.bj(a).getFullYear()+0
return u},
kX:function(a){var u=H.bj(a).getMonth()+1
return u},
kT:function(a){var u=H.bj(a).getDate()+0
return u},
kU:function(a){var u=H.bj(a).getHours()+0
return u},
kW:function(a){var u=H.bj(a).getMinutes()+0
return u},
kY:function(a){var u=H.bj(a).getSeconds()+0
return u},
kV:function(a){var u=H.bj(a).getMilliseconds()+0
return u},
dJ:function(a){throw H.e(H.c4(a))},
p:function(a,b){if(a==null)J.bt(a)
throw H.e(H.c5(a,b))},
c5:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aB(!0,b,"index",null)
u=H.T(J.bt(a))
if(!(b<0)){if(typeof u!=="number")return H.dJ(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,"index",null,u)
return P.f6(b,"index")},
c4:function(a){return new P.aB(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.bK()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jv})
u.name=""}else u.toString=H.jv
return u},
jv:function(){return J.ca(this.dartException)},
ah:function(a){throw H.e(a)},
P:function(a){throw H.e(P.bc(a))},
ay:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.m([],[P.d])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fG(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fH:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
j0:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iY:function(a,b){return new H.eZ(a,b==null?null:b.method)},
i6:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.eo(a,t,u?null:b.receiver)},
a4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.c.b7(s,16)&8191)===10)switch(r){case 438:return u.$1(H.i6(H.f(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.iY(H.f(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jC()
p=$.jD()
o=$.jE()
n=$.jF()
m=$.jI()
l=$.jJ()
k=$.jH()
$.jG()
j=$.jL()
i=$.jK()
h=q.G(t)
if(h!=null)return u.$1(H.i6(H.A(t),h))
else{h=p.G(t)
if(h!=null){h.method="call"
return u.$1(H.i6(H.A(t),h))}else{h=o.G(t)
if(h==null){h=n.G(t)
if(h==null){h=m.G(t)
if(h==null){h=l.G(t)
if(h==null){h=k.G(t)
if(h==null){h=n.G(t)
if(h==null){h=j.G(t)
if(h==null){h=i.G(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.iY(H.A(t),h))}}return u.$1(new H.fK(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.cD()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aB(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.cD()
return a},
bq:function(a){var u
if(a==null)return new H.dl(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dl(a)},
lx:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.i(0,a[t],a[s])}return b},
lI:function(a,b,c,d,e,f){H.i(a,"$iaU")
switch(H.T(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.iR("Unsupported number of arguments for wrapped closure"))},
aM:function(a,b){var u
H.T(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lI)
a.$identity=u
return u},
kz:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.fl().constructor.prototype):Object.create(new H.bv(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.aq
if(typeof q!=="number")return q.D()
$.aq=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.iH(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.lB,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.iF:H.i0
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.e("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.iH(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
kw:function(a,b,c,d){var u=H.i0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iH:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ky(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kw(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.D()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bw
if(q==null){q=H.dY("self")
$.bw=q}return new Function(r+H.f(q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.D()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bw
if(q==null){q=H.dY("self")
$.bw=q}return new Function(r+H.f(q)+"."+H.f(u)+"("+o+");}")()},
kx:function(a,b,c,d){var u,t
u=H.i0
t=H.iF
switch(b?-1:a){case 0:throw H.e(H.l0("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ky:function(a,b){var u,t,s,r,q,p,o,n
u=$.bw
if(u==null){u=H.dY("self")
$.bw=u}t=$.iE
if(t==null){t=H.dY("receiver")
$.iE=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kx(r,!p,s,b)
if(r===1){u="return function(){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+");"
t=$.aq
if(typeof t!=="number")return t.D()
$.aq=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.f(u)+"."+H.f(s)+"(this."+H.f(t)+", "+n+");"
t=$.aq
if(typeof t!=="number")return t.D()
$.aq=t+1
return new Function(u+t+"}")()},
ih:function(a,b,c,d,e,f,g){return H.kz(a,b,H.T(c),d,!!e,!!f,g)},
i0:function(a){return a.a},
iF:function(a){return a.c},
dY:function(a){var u,t,s,r,q
u=new H.bv("self","target","receiver","name")
t=J.iU(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
A:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.al(a,"String"))},
jj:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.al(a,"double"))},
im:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.al(a,"num"))},
hI:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.al(a,"bool"))},
T:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.al(a,"int"))},
io:function(a,b){throw H.e(H.al(a,H.b6(H.A(b).substring(2))))},
lP:function(a,b){throw H.e(H.iG(a,H.b6(H.A(b).substring(2))))},
i:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.H(a)[b])return a
H.io(a,b)},
aO:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else u=!0
if(u)return a
H.lP(a,b)},
js:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.H(a)[b])return a
H.io(a,b)},
dK:function(a){if(a==null)return a
if(!!J.H(a).$ib)return a
throw H.e(H.al(a,"List<dynamic>"))},
lK:function(a,b){var u
if(a==null)return a
u=J.H(a)
if(!!u.$ib)return a
if(u[b])return a
H.io(a,b)},
ii:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.T(u)]
else return a.$S()}return},
dH:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ii(J.H(a))
if(u==null)return!1
return H.j9(u,null,b,null)},
k:function(a,b){var u,t
if(a==null)return a
if($.ic)return a
$.ic=!0
try{if(H.dH(a,b))return a
u=H.dL(b)
t=H.al(a,u)
throw H.e(t)}finally{$.ic=!1}},
c6:function(a,b){if(a!=null&&!H.ig(a,b))H.ah(H.al(a,H.dL(b)))
return a},
al:function(a,b){return new H.fI("TypeError: "+P.ef(a)+": type '"+H.je(a)+"' is not a subtype of type '"+b+"'")},
iG:function(a,b){return new H.e_("CastError: "+P.ef(a)+": type '"+H.je(a)+"' is not a subtype of type '"+b+"'")},
je:function(a){var u,t
u=J.H(a)
if(!!u.$ibb){t=H.ii(u)
if(t!=null)return H.dL(t)
return"Closure"}return H.bM(a)},
lS:function(a){throw H.e(new P.e6(H.A(a)))},
l0:function(a){return new H.fd(a)},
jo:function(a){return v.getIsolateTag(a)},
m:function(a,b){a.$ti=b
return a},
aN:function(a){if(a==null)return
return a.$ti},
mm:function(a,b,c){return H.br(a["$a"+H.f(c)],H.aN(b))},
c7:function(a,b,c,d){var u
H.A(c)
H.T(d)
u=H.br(a["$a"+H.f(c)],H.aN(b))
return u==null?null:u[d]},
ij:function(a,b,c){var u
H.A(b)
H.T(c)
u=H.br(a["$a"+H.f(b)],H.aN(a))
return u==null?null:u[c]},
r:function(a,b){var u
H.T(b)
u=H.aN(a)
return u==null?null:u[b]},
dL:function(a){return H.b5(a,null)},
b5:function(a,b){var u,t
H.w(b,"$ib",[P.d],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.b6(a[0].name)+H.hF(a,1,b)
if(typeof a=="function")return H.b6(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.T(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.p(b,t)
return H.f(b[t])}if('func' in a)return H.lk(a,b)
if('futureOr' in a)return"FutureOr<"+H.b5("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lk:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.d]
H.w(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.m([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.l(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.p(b,m)
o=C.i.D(o,b[m])
l=t[p]
if(l!=null&&l!==P.y)o+=" extends "+H.b5(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.b5(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.b5(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.b5(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.lw(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.A(u[g])
i=i+h+H.b5(d[c],b)+(" "+H.f(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
hF:function(a,b,c){var u,t,s,r,q,p
H.w(c,"$ib",[P.d],"$ab")
if(a==null)return""
u=new P.bQ("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b5(p,c)}return"<"+u.j(0)+">"},
lA:function(a){var u,t,s,r
u=J.H(a)
if(!!u.$ibb){t=H.ii(u)
if(t!=null)return t}s=u.constructor
if(a==null)return s
if(typeof a!="object")return s
r=H.aN(a)
if(r!=null){r=r.slice()
r.splice(0,0,s)
s=r}return s},
br:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aL:function(a,b,c,d){var u,t
H.A(b)
H.dK(c)
H.A(d)
if(a==null)return!1
u=H.aN(a)
t=J.H(a)
if(t[b]==null)return!1
return H.jh(H.br(t[d],u),null,c,null)},
dM:function(a,b,c,d){H.A(b)
H.dK(c)
H.A(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.e(H.iG(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.b6(b.substring(2))+H.hF(c,0,null),v.mangledGlobalNames)))},
w:function(a,b,c,d){H.A(b)
H.dK(c)
H.A(d)
if(a==null)return a
if(H.aL(a,b,c,d))return a
throw H.e(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.b6(b.substring(2))+H.hF(c,0,null),v.mangledGlobalNames)))},
jh:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.af(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.af(a[t],b,c[t],d))return!1
return!0},
mk:function(a,b,c){return a.apply(b,H.br(J.H(b)["$a"+H.f(c)],H.aN(b)))},
jq:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="y"||a.name==="C"||a===-1||a===-2||H.jq(u)}return!1},
ig:function(a,b){var u,t
if(a==null)return b==null||b.name==="y"||b.name==="C"||b===-1||b===-2||H.jq(b)
if(b==null||b===-1||b.name==="y"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.ig(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dH(a,b)}u=J.H(a).constructor
t=H.aN(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.af(u,null,b,null)},
D:function(a,b){if(a!=null&&!H.ig(a,b))throw H.e(H.al(a,H.dL(b)))
return a},
af:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="y"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="y"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.af(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="C")return!0
if('func' in c)return H.j9(a,b,c,d)
if('func' in a)return c.name==="aU"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.af("type" in a?a.type:null,b,s,d)
else if(H.af(a,b,s,d))return!0
else{if(!('$i'+"at" in t.prototype))return!1
r=t.prototype["$a"+"at"]
q=H.br(r,u?a.slice(1):null)
return H.af(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.jh(H.br(m,u),b,p,d)},
j9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.af(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.af(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.af(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.af(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lO(h,b,g,d)},
lO:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.af(c[r],d,a[r],b))return!1}return!0},
ml:function(a,b,c){Object.defineProperty(a,H.A(b),{value:c,enumerable:false,writable:true,configurable:true})},
lL:function(a){var u,t,s,r,q,p
u=H.A($.jp.$1(a))
t=$.hK[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hQ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.A($.jg.$2(a,u))
if(u!=null){t=$.hK[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hQ[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hT(s)
$.hK[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hQ[u]=s
return s}if(q==="-"){p=H.hT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.jt(a,s)
if(q==="*")throw H.e(P.ia(u))
if(v.leafTags[u]===true){p=H.hT(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.jt(a,s)},
jt:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.il(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hT:function(a){return J.il(a,!1,null,!!a.$iB)},
lN:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hT(u)
else return J.il(u,c,null,null)},
lG:function(){if(!0===$.ik)return
$.ik=!0
H.lH()},
lH:function(){var u,t,s,r,q,p,o,n
$.hK=Object.create(null)
$.hQ=Object.create(null)
H.lF()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ju.$1(q)
if(p!=null){o=H.lN(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lF:function(){var u,t,s,r,q,p,o
u=C.E()
u=H.bo(C.F,H.bo(C.G,H.bo(C.v,H.bo(C.v,H.bo(C.H,H.bo(C.I,H.bo(C.J(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.jp=new H.hN(q)
$.jg=new H.hO(p)
$.ju=new H.hP(o)},
bo:function(a,b){return a(b)||b},
lR:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
fG:function fG(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eZ:function eZ(a,b){this.a=a
this.b=b},
eo:function eo(a,b,c){this.a=a
this.b=b
this.c=c},
fK:function fK(a){this.a=a},
hV:function hV(a){this.a=a},
dl:function dl(a){this.a=a
this.b=null},
bb:function bb(){},
fz:function fz(){},
fl:function fl(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fI:function fI(a){this.a=a},
e_:function e_(a){this.a=a},
fd:function fd(a){this.a=a},
cK:function cK(a){this.a=a
this.d=this.b=null},
co:function co(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
et:function et(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ai:function ai(a,b){this.a=a
this.$ti=b},
eu:function eu(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hN:function hN(a){this.a=a},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hE:function(a){var u,t
if(!!J.H(a).$ix)return a
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)C.a.i(u,t,a[t])
return u},
az:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.c5(b,a))},
bF:function bF(){},
aZ:function aZ(){},
cs:function cs(){},
bG:function bG(){},
ct:function ct(){},
cr:function cr(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
cu:function cu(){},
cv:function cv(){},
eU:function eU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
lw:function(a){return J.kM(a?Object.keys(a):[],null)},
hU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
il:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hL:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.ik==null){H.lG()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.ia("Return interceptor for "+H.f(t(a,u))))}r=a.constructor
q=r==null?null:r[$.ip()]
if(q!=null)return q
q=H.lL(a)
if(q!=null)return q
if(typeof a=="function")return C.N
t=Object.getPrototypeOf(a)
if(t==null)return C.y
if(t===Object.prototype)return C.y
if(typeof r=="function"){Object.defineProperty(r,$.ip(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
kM:function(a,b){return J.iU(H.m(a,[b]))},
iU:function(a){H.dK(a)
a.fixed$length=Array
return a},
kN:function(a,b){return J.k_(H.js(a,"$iZ"),H.js(b,"$iZ"))},
H:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cm.prototype
return J.cl.prototype}if(typeof a=="string")return J.aW.prototype
if(a==null)return J.en.prototype
if(typeof a=="boolean")return J.em.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.y)return a
return J.hL(a)},
bp:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.y)return a
return J.hL(a)},
jm:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.y)return a
return J.hL(a)},
ly:function(a){if(typeof a=="number")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.b0.prototype
return a},
lz:function(a){if(typeof a=="number")return J.bh.prototype
if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.b0.prototype
return a},
jn:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.y))return J.b0.prototype
return a},
o:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.y)return a
return J.hL(a)},
b7:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).A(a,b)},
ap:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ly(a).P(a,b)},
c9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lJ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bp(a).h(a,b)},
is:function(a,b){return J.jn(a).ae(a,b)},
jS:function(a,b,c,d){return J.o(a).cJ(a,b,c,d)},
it:function(a,b){return J.o(a).ba(a,b)},
jT:function(a,b,c,d){return J.o(a).cQ(a,b,c,d)},
iu:function(a,b,c){return J.o(a).bc(a,b,c)},
jU:function(a,b){return J.o(a).cU(a,b)},
hW:function(a,b,c){return J.o(a).bd(a,b,c)},
jV:function(a,b,c){return J.o(a).bf(a,b,c)},
bs:function(a,b,c){return J.o(a).bg(a,b,c)},
dN:function(a,b){return J.o(a).cX(a,b)},
jW:function(a,b){return J.o(a).bh(a,b)},
jX:function(a,b,c){return J.o(a).bi(a,b,c)},
iv:function(a,b,c,d){return J.o(a).bj(a,b,c,d)},
jY:function(a,b){return J.o(a).bl(a,b)},
jZ:function(a,b,c,d,e){return J.o(a).bm(a,b,c,d,e)},
k_:function(a,b){return J.lz(a).I(a,b)},
hX:function(a,b,c){return J.bp(a).d1(a,b,c)},
hY:function(a){return J.o(a).bo(a)},
k0:function(a){return J.o(a).bp(a)},
k1:function(a){return J.o(a).br(a)},
k2:function(a){return J.o(a).d5(a)},
k3:function(a,b){return J.o(a).bt(a,b)},
hZ:function(a,b){return J.o(a).bu(a,b)},
k4:function(a,b,c,d){return J.o(a).bv(a,b,c,d)},
k5:function(a,b,c,d,e){return J.o(a).d7(a,b,c,d,e)},
k6:function(a,b,c,d,e){return J.o(a).bw(a,b,c,d,e)},
k7:function(a,b,c,d,e,f){return J.o(a).d8(a,b,c,d,e,f)},
k8:function(a,b){return J.jm(a).q(a,b)},
dO:function(a,b){return J.o(a).bx(a,b)},
k9:function(a,b){return J.o(a).by(a,b)},
ka:function(a){return J.o(a).d9(a)},
kb:function(a,b){return J.o(a).B(a,b)},
kc:function(a){return J.o(a).gcT(a)},
aP:function(a){return J.H(a).gn(a)},
dP:function(a){return J.jm(a).gv(a)},
bt:function(a){return J.bp(a).gk(a)},
kd:function(a){return J.o(a).gdq(a)},
ke:function(a){return J.o(a).a8(a)},
kf:function(a){return J.o(a).aw(a)},
kg:function(a,b){return J.o(a).ay(a,b)},
kh:function(a,b,c){return J.o(a).az(a,b,c)},
iw:function(a,b,c){return J.o(a).aC(a,b,c)},
ki:function(a,b){return J.o(a).bB(a,b)},
kj:function(a,b,c){return J.o(a).bI(a,b,c)},
ix:function(a){return J.o(a).dj(a)},
kk:function(a,b,c,d){return J.o(a).aH(a,b,c,d)},
kl:function(a,b,c,d,e,f,g){return J.o(a).bM(a,b,c,d,e,f,g)},
km:function(a,b,c,d){return J.o(a).bN(a,b,c,d)},
dQ:function(a,b,c,d){return J.o(a).bO(a,b,c,d)},
kn:function(a){return J.jn(a).dr(a)},
ca:function(a){return J.H(a).j(a)},
ko:function(a,b,c,d){return J.o(a).dt(a,b,c,d)},
kp:function(a,b,c){return J.o(a).bR(a,b,c)},
kq:function(a,b,c){return J.o(a).bS(a,b,c)},
i_:function(a,b,c){return J.o(a).bT(a,b,c)},
kr:function(a,b,c){return J.o(a).bU(a,b,c)},
iy:function(a,b,c){return J.o(a).bV(a,b,c)},
iz:function(a,b,c){return J.o(a).bW(a,b,c)},
iA:function(a,b,c){return J.o(a).bX(a,b,c)},
iB:function(a,b,c,d){return J.o(a).bY(a,b,c,d)},
iC:function(a,b,c,d){return J.o(a).bZ(a,b,c,d)},
ks:function(a,b){return J.o(a).c_(a,b)},
kt:function(a,b,c){return J.o(a).du(a,b,c)},
ku:function(a,b,c,d,e,f,g){return J.o(a).c0(a,b,c,d,e,f,g)},
kv:function(a,b,c,d,e){return J.o(a).c2(a,b,c,d,e)},
a:function a(){},
em:function em(){},
en:function en(){},
cn:function cn(){},
f3:function f3(){},
b0:function b0(){},
aX:function aX(){},
aV:function aV(a){this.$ti=a},
i4:function i4(a){this.$ti=a},
dT:function dT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bh:function bh(){},
cm:function cm(){},
cl:function cl(){},
aW:function aW(){}},P={
l7:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.lr()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.aM(new P.fR(u),1)).observe(t,{childList:true})
return new P.fQ(u,t,s)}else if(self.setImmediate!=null)return P.ls()
return P.lt()},
l8:function(a){self.scheduleImmediate(H.aM(new P.fS(H.k(a,{func:1,ret:-1})),0))},
l9:function(a){self.setImmediate(H.aM(new P.fT(H.k(a,{func:1,ret:-1})),0))},
la:function(a){H.k(a,{func:1,ret:-1})
P.li(0,a)},
li:function(a,b){var u=new P.hA()
u.cu(a,b)
return u},
j3:function(a,b){var u,t,s
b.a=1
try{a.bP(new P.h6(b),new P.h7(b),null)}catch(s){u=H.a4(s)
t=H.bq(s)
P.lQ(new P.h8(b,u,t))}},
h5:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.i(a.c,"$iS")
if(u>=4){t=b.a2()
b.a=a.a
b.c=a.c
P.bl(b,t)}else{t=H.i(b.c,"$ian")
b.a=2
b.c=a
a.b5(t)}},
bl:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.i(t.c,"$iQ")
t=t.b
p=q.a
o=q.b
t.toString
P.hG(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bl(u.a,b)}t=u.a
m=t.c
s.a=r
s.b=m
p=!r
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(r){k=t.b
k.toString
k=k==l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.i(m,"$iQ")
t=t.b
p=m.a
o=m.b
t.toString
P.hG(null,null,t,p,o)
return}j=$.J
if(j!=l)$.J=l
else j=null
t=b.c
if(t===8)new P.hd(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.hc(s,b,m).$0()}else if((t&2)!==0)new P.hb(u,s,b).$0()
if(j!=null)$.J=j
t=s.b
if(!!J.H(t).$iat){if(t.a>=4){i=H.i(o.c,"$ian")
o.c=null
b=o.a3(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.h5(t,o)
return}}h=b.b
i=H.i(h.c,"$ian")
h.c=null
b=h.a3(i)
t=s.a
p=s.b
if(!t){H.D(p,H.r(h,0))
h.a=4
h.c=p}else{H.i(p,"$iQ")
h.a=8
h.c=p}u.a=h
t=h}},
ja:function(a,b){if(H.dH(a,{func:1,args:[P.y,P.X]})){b.toString
return H.k(a,{func:1,ret:null,args:[P.y,P.X]})}if(H.dH(a,{func:1,args:[P.y]})){b.toString
return H.k(a,{func:1,ret:null,args:[P.y]})}throw H.e(P.iD(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ln:function(){var u,t
for(;u=$.bm,u!=null;){$.c3=null
t=u.b
$.bm=t
if(t==null)$.c2=null
u.a.$0()}},
lq:function(){$.id=!0
try{P.ln()}finally{$.c3=null
$.id=!1
if($.bm!=null)$.iq().$1(P.ji())}},
jd:function(a){var u=new P.cO(H.k(a,{func:1,ret:-1}))
if($.bm==null){$.c2=u
$.bm=u
if(!$.id)$.iq().$1(P.ji())}else{$.c2.b=u
$.c2=u}},
lp:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
u=$.bm
if(u==null){P.jd(a)
$.c3=$.c2
return}t=new P.cO(a)
s=$.c3
if(s==null){t.b=u
$.c3=t
$.bm=t}else{t.b=s.b
s.b=t
$.c3=t
if(t.b==null)$.c2=t}},
lQ:function(a){var u,t
u={func:1,ret:-1}
H.k(a,u)
t=$.J
if(C.e===t){P.bn(null,null,C.e,a)
return}t.toString
P.bn(null,null,t,H.k(t.be(a),u))},
lj:function(a,b,c){a.cY(0)
b.a0(c)},
hG:function(a,b,c,d,e){var u={}
u.a=d
P.lp(new P.hH(u,e))},
jb:function(a,b,c,d,e){var u,t
H.k(d,{func:1,ret:e})
t=$.J
if(t===c)return d.$0()
$.J=c
u=t
try{t=d.$0()
return t}finally{$.J=u}},
jc:function(a,b,c,d,e,f,g){var u,t
H.k(d,{func:1,ret:f,args:[g]})
H.D(e,g)
t=$.J
if(t===c)return d.$1(e)
$.J=c
u=t
try{t=d.$1(e)
return t}finally{$.J=u}},
lo:function(a,b,c,d,e,f,g,h,i){var u,t
H.k(d,{func:1,ret:g,args:[h,i]})
H.D(e,h)
H.D(f,i)
t=$.J
if(t===c)return d.$2(e,f)
$.J=c
u=t
try{t=d.$2(e,f)
return t}finally{$.J=u}},
bn:function(a,b,c,d){var u
H.k(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.be(d):c.cV(d,-1)
P.jd(d)},
fR:function fR(a){this.a=a},
fQ:function fQ(a,b,c){this.a=a
this.b=b
this.c=c},
fS:function fS(a){this.a=a},
fT:function fT(a){this.a=a},
hA:function hA(){},
hB:function hB(a,b){this.a=a
this.b=b},
fV:function fV(){},
cP:function cP(a,b){this.a=a
this.$ti=b},
hx:function hx(a,b){this.a=a
this.$ti=b},
an:function an(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
S:function S(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
h2:function h2(a,b){this.a=a
this.b=b},
ha:function ha(a,b){this.a=a
this.b=b},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
h8:function h8(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a,b){this.a=a
this.b=b},
h9:function h9(a,b){this.a=a
this.b=b},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a){this.a=a},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a){this.a=a
this.b=null},
fq:function fq(){},
fu:function fu(a,b){this.a=a
this.b=b},
fv:function fv(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a){this.a=a},
fr:function fr(){},
Q:function Q(a,b){this.a=a
this.b=b},
hD:function hD(){},
hH:function hH(a,b){this.a=a
this.b=b},
hj:function hj(){},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
i7:function(a,b,c){H.dK(a)
return H.w(H.lx(a,new H.co([b,c])),"$iiV",[b,c],"$aiV")},
a7:function(a,b){return new H.co([a,b])},
aj:function(a){return new P.hh([a])},
ib:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lg:function(a,b,c){var u=new P.d2(a,b,[c])
u.c=a.e
return u},
kK:function(a,b,c){var u,t
if(P.ie(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.m([],[P.d])
t=$.c8()
C.a.l(t,a)
try{P.lm(a,u)}finally{if(0>=t.length)return H.p(t,-1)
t.pop()}t=P.j_(b,H.lK(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
i2:function(a,b,c){var u,t,s
if(P.ie(a))return b+"..."+c
u=new P.bQ(b)
t=$.c8()
C.a.l(t,a)
try{s=u
s.a=P.j_(s.a,a,", ")}finally{if(0>=t.length)return H.p(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ie:function(a){var u,t
for(u=0;t=$.c8(),u<t.length;++u)if(a===t[u])return!0
return!1},
lm:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.w(b,"$ib",[P.d],"$ab")
u=a.gv(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.t())return
r=H.f(u.gw(u))
C.a.l(b,r)
t+=r.length+2;++s}if(!u.t()){if(s<=5)return
if(0>=b.length)return H.p(b,-1)
q=b.pop()
if(0>=b.length)return H.p(b,-1)
p=b.pop()}else{o=u.gw(u);++s
if(!u.t()){if(s<=4){C.a.l(b,H.f(o))
return}q=H.f(o)
if(0>=b.length)return H.p(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gw(u);++s
for(;u.t();o=n,n=m){m=u.gw(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.p(b,-1)
t-=b.pop().length+2;--s}C.a.l(b,"...")
return}}p=H.f(o)
q=H.f(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.p(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.l(b,l)
C.a.l(b,p)
C.a.l(b,q)},
i8:function(a,b){var u,t,s
u=P.aj(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.P)(a),++s)u.l(0,H.D(a[s],b))
return u},
iW:function(a){var u,t
t={}
if(P.ie(a))return"{...}"
u=new P.bQ("")
try{C.a.l($.c8(),a)
u.a+="{"
t.a=!0
J.kb(a,new P.eA(t,u))
u.a+="}"}finally{t=$.c8()
if(0>=t.length)return H.p(t,-1)
t.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
hh:function hh(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
b4:function b4(a){this.a=a
this.c=this.b=null},
d2:function d2(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ev:function ev(){},
t:function t(){},
ez:function ez(){},
eA:function eA(a,b){this.a=a
this.b=b},
U:function U(){},
ho:function ho(){},
d3:function d3(){},
kF:function(a){if(a instanceof H.bb)return a.j(0)
return"Instance of '"+H.bM(a)+"'"},
j_:function(a,b,c){var u=J.dP(b)
if(!u.t())return a
if(c.length===0){do a+=H.f(u.gw(u))
while(u.t())}else{a+=H.f(u.gw(u))
for(;u.t();)a=a+c+H.f(u.gw(u))}return a},
kB:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cd:function(a){if(a>=10)return""+a
return"0"+a},
iN:function(a,b){return new P.aT(1e6*b+1000*a)},
ef:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ca(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kF(a)},
iD:function(a,b,c){return new P.aB(!0,a,b,c)},
f6:function(a,b){return new P.cz(null,null,!0,a,b,"Value not in range")},
i9:function(a,b,c,d,e){return new P.cz(b,c,!0,a,d,"Invalid value")},
l_:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.e(P.i9(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=H.T(e==null?J.bt(b):e)
return new P.el(u,!0,a,c,"Index out of range")},
E:function(a){return new P.fL(a)},
ia:function(a){return new P.fJ(a)},
cE:function(a){return new P.bP(a)},
bc:function(a){return new P.e1(a)},
iR:function(a){return new P.h1(a)},
aA:function(a){H.hU(H.f(a))},
O:function O(){},
aC:function aC(a,b){this.a=a
this.b=b},
a3:function a3(){},
aT:function aT(a){this.a=a},
eb:function eb(){},
ec:function ec(){},
be:function be(){},
bK:function bK(){},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cz:function cz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
el:function el(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fL:function fL(a){this.a=a},
fJ:function fJ(a){this.a=a},
bP:function bP(a){this.a=a},
e1:function e1(a){this.a=a},
cD:function cD(){},
e6:function e6(a){this.a=a},
h1:function h1(a){this.a=a},
aU:function aU(){},
F:function F(){},
l:function l(){},
aE:function aE(){},
b:function b(){},
M:function M(){},
C:function C(){},
K:function K(){},
y:function y(){},
X:function X(){},
d:function d(){},
bQ:function bQ(a){this.a=a},
ag:function(a){var u,t,s,r,q
if(a==null)return
u=P.a7(P.d,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.P)(t),++r){q=H.A(t[r])
u.i(0,q,a[q])}return u},
lv:function(a){var u={}
a.B(0,new P.hJ(u))
return u},
iM:function(){var u=$.iL
if(u==null){u=J.hX(window.navigator.userAgent,"Opera",0)
$.iL=u}return u},
kD:function(){var u,t
u=$.iI
if(u!=null)return u
t=$.iJ
if(t==null){t=J.hX(window.navigator.userAgent,"Firefox",0)
$.iJ=t}if(t)u="-moz-"
else{t=$.iK
if(t==null){t=!P.iM()&&J.hX(window.navigator.userAgent,"Trident/",0)
$.iK=t}if(t)u="-ms-"
else u=P.iM()?"-o-":"-webkit-"}$.iI=u
return u},
hs:function hs(){},
hu:function hu(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.a=a},
ht:function ht(a,b){this.a=a
this.b=b},
j5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
aG:function aG(a,b,c){this.a=a
this.b=b
this.$ti=c},
hi:function hi(){},
V:function V(){},
av:function av(){},
es:function es(){},
aw:function aw(){},
f_:function f_(){},
f5:function f5(){},
bO:function bO(){},
fw:function fw(){},
j:function j(){},
ax:function ax(){},
fF:function fF(){},
d0:function d0(){},
d1:function d1(){},
db:function db(){},
dc:function dc(){},
dn:function dn(){},
dp:function dp(){},
du:function du(){},
dv:function dv(){},
a5:function a5(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(a){this.a=a},
dX:function dX(){},
b8:function b8(){},
f0:function f0(){},
cQ:function cQ(){},
cc:function cc(){},
cj:function cj(){},
cy:function cy(){},
f9:function f9(){},
fa:function fa(){},
cB:function cB(){},
cG:function cG(){},
cL:function cL(){},
cM:function cM(){},
fk:function fk(){},
dj:function dj(){},
dk:function dk(){}},W={
kE:function(a,b,c){var u,t,s,r
u=document.body
t=(u&&C.t).F(u,a,b,c)
t.toString
u=W.v
u=new H.cN(new W.Y(t),H.k(new W.ee(),{func:1,ret:P.O,args:[u]}),[u])
s=u.gv(u)
if(!s.t())H.ah(H.i3())
r=s.gw(s)
if(s.t())H.ah(H.kL())
return H.i(r,"$iR")},
iQ:function(a){H.i(a,"$ic")
return"wheel"},
bz:function(a){var u,t,s
u="element tag unavailable"
try{t=J.kd(a)
if(typeof t==="string")u=a.tagName}catch(s){H.a4(s)}return u},
lc:function(a,b){return document.createElement(a)},
hg:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
j6:function(a,b,c,d){var u,t
u=W.hg(W.hg(W.hg(W.hg(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aK:function(a,b,c,d,e){var u=W.jf(new W.h0(c),W.h)
if(u!=null&&!0)J.jT(a,b,u,!1)
return new W.h_(a,b,u,!1,[e])},
j4:function(a){var u,t
u=document.createElement("a")
t=new W.hn(u,window.location)
t=new W.b3(t)
t.cs(a)
return t},
le:function(a,b,c,d){H.i(a,"$iR")
H.A(b)
H.A(c)
H.i(d,"$ib3")
return!0},
lf:function(a,b,c,d){var u,t,s
H.i(a,"$iR")
H.A(b)
H.A(c)
u=H.i(d,"$ib3").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
j7:function(){var u,t,s,r,q
u=P.d
t=P.i8(C.p,u)
s=H.r(C.p,0)
r=H.k(new W.hz(),{func:1,ret:u,args:[s]})
q=H.m(["TEMPLATE"],[u])
t=new W.hy(t,P.aj(u),P.aj(u),P.aj(u),null)
t.ct(null,new H.eB(C.p,r,[s,u]),q,null)
return t},
j8:function(a){var u
if(a==null)return
if("postMessage" in a){u=W.lb(a)
if(!!J.H(u).$ic)return u
return}else return H.i(a,"$ic")},
lb:function(a){if(a===window)return H.i(a,"$ij1")
else return new W.fY()},
jf:function(a,b){var u
H.k(a,{func:1,ret:-1,args:[b]})
u=$.J
if(u===C.e)return a
return u.cW(a,b)},
n:function n(){},
dR:function dR(){},
cb:function cb(){},
dS:function dS(){},
bu:function bu(){},
b9:function b9(){},
aQ:function aQ(){},
ba:function ba(){},
dZ:function dZ(){},
aR:function aR(){},
bx:function bx(){},
e2:function e2(){},
I:function I(){},
bd:function bd(){},
e3:function e3(){},
ar:function ar(){},
as:function as(){},
e4:function e4(){},
e5:function e5(){},
e7:function e7(){},
ce:function ce(){},
by:function by(){},
e8:function e8(){},
cf:function cf(){},
cg:function cg(){},
e9:function e9(){},
ea:function ea(){},
R:function R(){},
ee:function ee(){},
h:function h(){},
c:function c(){},
a_:function a_(){},
bA:function bA(){},
eg:function eg(){},
eh:function eh(){},
a6:function a6(){},
ej:function ej(){},
bB:function bB(){},
bC:function bC(){},
au:function au(){},
cq:function cq(){},
bD:function bD(){},
eD:function eD(){},
ak:function ak(){},
bE:function bE(){},
eF:function eF(){},
eG:function eG(a){this.a=a},
eH:function eH(){},
eI:function eI(a){this.a=a},
a8:function a8(){},
eJ:function eJ(){},
N:function N(){},
cw:function cw(){},
eV:function eV(a){this.a=a},
eW:function eW(a){this.a=a},
bH:function bH(){},
aF:function aF(){},
Y:function Y(a){this.a=a},
v:function v(){},
bJ:function bJ(){},
a9:function a9(){},
f4:function f4(){},
fb:function fb(){},
fc:function fc(a){this.a=a},
fe:function fe(){},
aa:function aa(){},
fh:function fh(){},
ab:function ab(){},
fj:function fj(){},
ac:function ac(){},
fo:function fo(){},
fp:function fp(a){this.a=a},
a1:function a1(){},
cF:function cF(){},
fx:function fx(){},
fy:function fy(){},
bR:function bR(){},
ad:function ad(){},
a2:function a2(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(){},
ae:function ae(){},
fD:function fD(){},
fE:function fE(){},
aH:function aH(){},
fM:function fM(){},
aJ:function aJ(){},
fN:function fN(){},
am:function am(){},
bT:function bT(){},
fP:function fP(a){this.a=a},
bU:function bU(){},
fW:function fW(){},
cS:function cS(){},
hf:function hf(){},
d8:function d8(){},
hr:function hr(){},
hv:function hv(){},
fU:function fU(){},
fZ:function fZ(a){this.a=a},
b2:function b2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b1:function b1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
h_:function h_(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
h0:function h0(a){this.a=a},
fX:function fX(a,b){this.a=a
this.$ti=b},
b3:function b3(a){this.a=a},
u:function u(){},
cx:function cx(a){this.a=a},
eY:function eY(a){this.a=a},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(){},
hp:function hp(){},
hq:function hq(){},
hy:function hy(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hz:function hz(){},
hw:function hw(){},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fY:function fY(){},
a0:function a0(){},
hn:function hn(a,b){this.a=a
this.b=b},
dw:function dw(a){this.a=a},
hC:function hC(a){this.a=a},
cR:function cR(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d9:function d9(){},
da:function da(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
bZ:function bZ(){},
c_:function c_(){},
dh:function dh(){},
di:function di(){},
dm:function dm(){},
dq:function dq(){},
dr:function dr(){},
c0:function c0(){},
c1:function c1(){},
ds:function ds(){},
dt:function dt(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){}},G={
l6:function(a){var u,t,s,r
u=H.m(a.split("\n"),[P.d])
for(t=0;t<u.length;t=s){s=t+1
r=""+s+": "
if(t>=u.length)return H.p(u,t)
C.a.i(u,t,r+H.f(u[t]))}return C.a.U(u,"\n")},
j2:function(a,b,c){var u,t,s,r
u=J.o(a)
t=u.bq(a,b)
u.aG(a,t,c)
u.bn(a,t)
s=H.hI(u.aB(a,t,35713))
if(s!=null&&!s){r=u.aA(a,t)
P.aA("E:Compilation failed:")
P.aA("E:"+G.l6(c))
P.aA("E:Failure:")
P.aA(C.i.D("E:",r))
throw H.e(r)}return t},
iX:function(a){var u=P.a7(P.d,P.y)
u.i(0,"cDepthTest",!0)
u.i(0,"cDepthWrite",!0)
u.i(0,"cBlendEquation",$.jw())
u.i(0,"cStencilFunc",$.jA())
return new G.eC(u,a)},
iS:function(a){var u,t,s,r,q,p,o
H.w(a,"$ib",[T.q],"$ab")
u=a.length
t=new Float32Array(u*3)
for(u=a.length,s=0;s<u;++s){r=s*3
q=a[s].a[0]
p=t.length
if(r>=p)return H.p(t,r)
t[r]=q
q=r+1
o=a[s].a[1]
if(q>=p)return H.p(t,q)
t[q]=o
r+=2
o=a[s].a[2]
if(r>=p)return H.p(t,r)
t[r]=o}return t},
kH:function(a){var u,t,s,r,q,p
H.w(a,"$ib",[T.z],"$ab")
u=a.length
t=new Float32Array(u*2)
for(u=a.length,s=0;s<u;++s){r=s*2
q=a[s].a[0]
p=t.length
if(r>=p)return H.p(t,r)
t[r]=q;++r
q=a[s].a[1]
if(r>=p)return H.p(t,r)
t[r]=q}return t},
kI:function(a){var u,t,s,r,q,p,o
H.w(a,"$ib",[T.aI],"$ab")
u=a.length
t=new Float32Array(u*4)
for(u=a.length,s=0;s<u;++s){r=s*4
q=a[s].a[0]
p=t.length
if(r>=p)return H.p(t,r)
t[r]=q
q=r+1
o=a[s].a[1]
if(q>=p)return H.p(t,q)
t[q]=o
o=r+2
q=a[s].a[2]
if(o>=p)return H.p(t,o)
t[o]=q
r+=3
q=a[s].a[3]
if(r>=p)return H.p(t,r)
t[r]=q}return t},
kG:function(a){var u,t,s
H.w(a,"$ib",[[P.b,P.F]],"$ab")
u=a.length
t=new Uint32Array(u*4)
for(s=0;s<a.length;++s){u=s*4
C.n.i(t,u,J.c9(a[s],0))
if(s>=a.length)return H.p(a,s)
C.n.i(t,u+1,J.c9(a[s],1))
if(s>=a.length)return H.p(a,s)
C.n.i(t,u+2,J.c9(a[s],2))
if(s>=a.length)return H.p(a,s)
C.n.i(t,u+3,J.c9(a[s],3))}return t},
ld:function(a,b){var u,t,s,r,q,p,o,n,m,l
for(u=a.e,t=new H.ai(u,[H.r(u,0)]),t=t.gv(t),s=b.x,r=[[P.b,P.F]],q=[P.a3],p=[T.aI],o=[T.q],n=[T.z];t.t();){m=t.d
if(!s.a5(0,m)){m="Dropping unnecessary attribute: "+H.f(m)
if($.jl>0)H.hU("I: "+m)
continue}l=u.h(0,m)
switch($.ao().h(0,m).a){case"vec2":b.V(m,G.kH(H.dM(l,"$ib",n,"$ab")),2)
break
case"vec3":b.V(m,G.iS(H.dM(l,"$ib",o,"$ab")),3)
break
case"vec4":b.V(m,G.kI(H.dM(l,"$ib",p,"$ab")),4)
break
case"float":b.V(m,new Float32Array(H.hE(H.dM(l,"$ib",q,"$ab"))),1)
break
case"uvec4":b.V(m,G.kG(H.dM(l,"$ib",r,"$ab")),4)
break}}},
iT:function(a,b,c){var u,t,s,r,q,p,o,n
u=b.d
t=b.e.x
s=P.d
r=P.a7(s,P.y)
q=J.k2(u.a)
p=new G.eE(u,q,4,r,t,-1,P.a7(s,P.a5),"meshdata:"+a)
s=G.iS(c.d)
r.i(0,"aPosition",J.hY(u.a))
p.ch=s
p.aO("aPosition",s,3)
o=$.ao().h(0,"aPosition")
if(o==null)H.ah("Unknown canonical aPosition")
n=t.h(0,"aPosition")
J.dN(u.a,q)
u.bz(0,n,0)
u.c1(0,r.h(0,"aPosition"),n,o.aQ(),5126,!1,0,0)
t=H.w(c.cj(),"$ib",[P.F],"$ab")
p.y=J.hY(u.a)
s=p.ch.length
if(s<768){p.saj(new Uint8Array(H.hE(t)))
p.Q=5121}else if(s<196608){p.saj(new Uint16Array(H.hE(t)))
p.Q=5123}else{p.saj(new Uint32Array(H.hE(t)))
p.Q=5125}J.dN(u.a,q)
t=p.y
s=p.cx
J.hW(u.a,34963,t)
J.iv(u.a,34963,s,35048)
G.ld(c,p)
return p},
iZ:function(a,b,c,d){var u,t,s,r,q,p,o,n
u=P.d
t=P.aj(u)
s=c.b
r=d.b
q=H.w(c.f,"$ib",[u],"$ab")
p=J.k0(b.a)
o=G.j2(b.a,35633,s)
J.iu(b.a,p,o)
n=G.j2(b.a,35632,r)
J.iu(b.a,p,n)
if(q.length>0)J.ko(b.a,p,q,35980)
J.ki(b.a,p)
if(!H.hI(J.kh(b.a,p,35714)))H.ah(J.kg(b.a,p))
u=new G.f8(b,c,d,p,P.i8(c.c,u),P.a7(u,P.y),P.a7(u,u),t,a)
u.cn(a,b,c,d)
return u},
fg:function(a){var u,t
u=P.d
t=[u]
return new G.ff(H.m([],t),H.m([],t),H.m([],t),H.m([],t),P.a7(u,P.F))},
l4:function(){return new G.cH(1,9729,9729)},
eP:function eP(){},
b_:function b_(a,b){var _=this
_.d=a
_.a=b
_.b=!1
_.c=!0},
e0:function e0(a){this.a=null
this.b=a},
ei:function ei(a,b){this.a=a
this.b=b},
ch:function ch(){},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ck:function ck(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
eC:function eC(a,b){var _=this
_.d=a
_.a=b
_.b=!1
_.c=!0},
eE:function eE(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=null
_.z=0
_.Q=f
_.cx=_.ch=null
_.cy=g
_.a=h
_.b=!1
_.c=!0},
f2:function f2(a,b,c,d,e,f,g,h,i,j){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.d=i
_.a=j
_.b=!1
_.c=!0},
aS:function aS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f8:function f8(a,b,c,d,e,f,g,h,i){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.ch=null
_.a=i
_.b=!1
_.c=!0},
G:function G(a,b){this.a=a
this.c=b},
ff:function ff(a,b,c,d,e){var _=this
_.b=null
_.c=a
_.d=b
_.e=c
_.f=d
_.r=0
_.x=e},
fi:function fi(){},
cH:function cH(a,b,c){var _=this
_.c=_.b=_.a=!1
_.d=!0
_.e=a
_.f=b
_.r=c},
bS:function bS(){},
ek:function ek(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
lh:function(a,b,c,d){var u,t,s,r,q
u=document.createElement("div")
t=u.style
s=""+c+"px"
t.width=s
s=""+d+"px"
t.height=s
t.color=a
t.background=a
for(r=0;r<c;++r){q=H.i(W.lc("span",null),"$iR")
t=q.style
t.width="1px"
s=""+d+"px"
t.height=s
s=(t&&C.w).aY(t,"float")
t.setProperty(s,"left","")
s=C.w.aY(t,"opacity")
t.setProperty(s,"0.9","")
t.background=b
u.appendChild(q)}return u},
cA:function cA(a,b,c,d,e,f,g){var _=this
_.db=a
_.dx=b
_.d=c
_.e=d
_.f=e
_.r=f
_.Q=_.z=_.y=_.x=0
_.a=g
_.b=!1
_.c=!0},
fm:function fm(){},
fn:function fn(a,b,c,d,e){var _=this
_.e=0
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e}},A={
jk:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.w(d,"$ib",[G.aS],"$ab")
H.w(e,"$ib",[G.b_],"$ab")
u=b.dx
u.H(c)
t=b.d
u.bC(0,t)
s=b.cx
H.f(b)
r=C.a.gdh(e)
q=b.db
p=new Float32Array(9)
o=u.a
p[0]=o[0]
p[1]=o[1]
p[2]=o[2]
p[3]=o[4]
p[4]=o[5]
p[5]=o[6]
p[6]=o[8]
p[7]=o[9]
p[8]=o[10]
q.d2(new T.aY(p))
p=q.a
n=p[3]
p[3]=p[1]
p[1]=n
n=p[6]
p[6]=p[2]
p[2]=n
n=p[7]
p[7]=p[5]
p[5]=n
r=r.d
r.i(0,"uTransformationMatrix",t)
r.i(0,"uModelMatrix",u)
r.i(0,"uNormalMatrix",q)
C.a.l(e,b.ch)
a.ci(s,e,d)
if(0>=e.length)return H.p(e,-1)
e.pop()
for(t=b.cy,m=0;!1;++m){if(m>=0)return H.p(t,m)
A.jk(a,t[m],u,d,e)}},
bI:function bI(a,b,c,d,e,f,g,h,i){var _=this
_.ch=a
_.cx=b
_.cy=c
_.db=d
_.dx=e
_.d=f
_.e=g
_.f=h
_.a=i
_.b=!1
_.c=!0},
bN:function bN(a,b,c,d){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=!1
_.c=!0},
f7:function f7(){},
dI:function(a){var u,t
u=C.m.dc(H.w(a,"$il",[P.y],"$al"),0,new A.hM(),P.F)
if(typeof u!=="number")return H.dJ(u)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
hM:function hM(){}},D={
kO:function(a){var u=P.F
u=new D.ep(P.aj(u),P.aj(u),P.aj(u))
u.ck(a)
return u},
kQ:function(a){var u=P.F
u=new D.eK(P.aj(u),P.aj(u),P.aj(u))
u.cl(a)
return u},
kP:function(){var u,t,s
u=W.aJ
t=new P.S(0,$.J,[u])
s=new P.cP(t,[u])
u=window.navigator;(u&&C.R).c4(u,!0).Y(new D.ex(s),null).bk(new D.ey(s))
return t},
ep:function ep(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a},
er:function er(a){this.a=a},
eK:function eK(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.f=_.e=_.d=0},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
eN:function eN(a){this.a=a},
eO:function eO(a){this.a=a},
f1:function f1(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.ch=a
_.cx=b
_.cy=c
_.db=d
_.dx=e
_.dy=f
_.fr=g
_.fx=h
_.d=i
_.e=j
_.f=k
_.a=l
_.b=!1
_.c=!0},
ex:function ex(a){this.a=a},
ew:function ew(a,b){this.a=a
this.b=b},
ey:function ey(a){this.a=a}},T={
bk:function(a,b,c){var u=new T.q(new Float32Array(3))
u.m(a,b,c)
return u},
aY:function aY(a){this.a=a},
W:function W(a){this.a=a},
z:function z(a){this.a=a},
q:function q(a){this.a=a},
aI:function aI(a){this.a=a}},U={
lM:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
u={}
H.i(b1,"$iaJ")
if(b1==null){window.alert("Could not access camera - do you have a camera installed?")
return}t=document
s=t.getElementById("stats")
r=t.createElement("div")
q=r.style
q.fontWeight="bold"
r.textContent="@@@@"
p=new R.fn(0,s,r,t.createElement("div"),R.lh("blue","gray",90,30))
p.co(s,"blue","gray")
o=H.i(t.querySelector("#webgl-canvas"),"$iba")
n=new G.e0(o)
t=P.d
s=P.y
q=(o&&C.K).c3(o,"webgl2",P.i7(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],t,s))
n.a=q
if(q==null)H.ah(P.iR('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+H.f(J.ke(q))
if($.jl>0)P.aA("I: "+m)
J.jZ(q,0,0,0,1)
J.dO(q,2929)
m=new Float32Array(3)
l=D.kO(null)
k=D.kQ(o)
j=new T.W(new Float32Array(16))
j.K()
i=new Float32Array(3)
h=new Float32Array(3)
new Float32Array(3)
new Float32Array(3)
g=new D.f1(15,10,0,0,new T.q(m),-0.02,l,k,j,new T.q(i),new T.q(h),"camera:orbit")
m=new T.W(new Float32Array(16))
m.K()
l=new T.W(new Float32Array(16))
l.K()
f=new G.f2(g,50,1,0.1,1000,m,l,new T.W(new Float32Array(16)),P.a7(t,s),"perspective")
f.aT()
s=$.jB()
if(s==null)s=new G.cH(1,9729,9729)
m=J.k1(q)
e=new G.ek(b1,"video",m,3553,n,s)
J.bs(q,3553,m)
J.kj(n.a,37440,1)
e.aS(b1)
q=s.e
if(q!==1)J.km(n.a,3553,34046,q)
J.dQ(n.a,3553,10240,s.r)
J.dQ(n.a,3553,10241,s.f)
if(s.b){J.dQ(n.a,3553,10242,33071)
J.dQ(n.a,3553,10243,33071)}J.kf(n.a)
J.bs(n.a,3553,null)
s=H.m([],[A.bN])
d=new R.cA(o,f,null,n,s,17664,"main")
d.cm("main",n,null)
d.bK(null)
q=W.h
W.aK(window,"resize",H.k(d.gdk(),{func:1,ret:-1,args:[q]}),!1,q)
q=G.iZ("bg",n,$.jP(),$.jO())
m=[G.b_]
l=H.m([],m)
k=[A.bI]
j=H.m([],k)
c=G.iX("bg")
i=c.d
i.i(0,"cDepthWrite",!1)
i.i(0,"uTexture",e)
i=new T.q(new Float32Array(3))
i.m(-1,-1,0)
h=new T.q(new Float32Array(3))
h.m(1,-1,0)
b=new T.q(new Float32Array(3))
b.m(1,1,0)
a=new T.q(new Float32Array(3))
a.m(-1,1,0)
a0=[T.q]
a1=H.m([i,h,b,a],a0)
i=new T.z(new Float32Array(2))
i.p(0,0)
h=new T.z(new Float32Array(2))
h.p(1,0)
b=new T.z(new Float32Array(2))
b.p(1,1)
a=new T.z(new Float32Array(2))
a.p(0,1)
a2=H.m([i,h,b,a],[T.z])
a3=new T.q(new Float32Array(3))
a3.m(0,0,1)
a4=H.m([a3,a3,a3,a3],a0)
i=H.m([],[G.ch])
h=H.m([],[G.bf])
b=H.m([],a0)
a5=new G.ck(!1,i,h,b,P.a7(t,[P.b,,]))
a5.a_("aTexUV")
H.w(a1,"$ib",a0,"$ab")
a6=b.length
C.a.l(h,new G.bf(a6,a6+1,a6+2,a6+3))
a5.aN(a1)
a5.aK("aTexUV",a2)
a5.a_("aNormal")
a5.aL("aNormal",a4)
h=G.iT("quad",q,a5)
b=H.m([],k)
t=new Float32Array(9)
i=new T.W(new Float32Array(16))
i.K()
a=new T.W(new Float32Array(16))
a.K()
a0=new Float32Array(3)
a7=new Float32Array(3)
new Float32Array(3)
new Float32Array(3)
C.a.l(j,new A.bI(c,h,b,new T.aY(t),i,a,new T.q(a0),new T.q(a7),"bg"))
C.a.l(s,new A.bN(q,l,j,"bg"))
t=H.m([f],m)
q=G.iZ("solid",n,$.jR(),$.jQ())
m=H.m([],k)
a8=G.iX("cube")
a8.d.i(0,"uColor",$.jx())
l=G.iT("cube",q,B.kA(1,0,1,0,0.2,0.2,0.2))
k=H.m([],k)
j=new Float32Array(9)
i=new T.W(new Float32Array(16))
i.K()
h=new T.W(new Float32Array(16))
h.K()
b=new Float32Array(3)
a=new Float32Array(3)
new Float32Array(3)
new Float32Array(3)
a9=new A.bI(a8,l,k,new T.aY(j),i,h,new T.q(b),new T.q(a),"cube")
a9.aF(-5,0,-5)
C.a.l(m,a9)
if(0>=m.length)return H.p(m,0)
b0=m[0]
C.a.l(s,new A.bN(q,t,m,"objects"))
u.a=0
new U.hR(u,g,b0,e,d,p).$1(0)},
jr:function(){D.kP().Y(U.lu(),-1).bk(new U.hS())},
hR:function hR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hS:function hS(){}},B={
kA:function(b0,b1,b2,b3,b4,b5,b6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
u=-b4
t=-b5
s=new T.q(new Float32Array(3))
s.m(u,t,b6)
r=new T.q(new Float32Array(3))
r.m(b4,t,b6)
q=new T.q(new Float32Array(3))
q.m(b4,b5,b6)
p=new T.q(new Float32Array(3))
p.m(u,b5,b6)
o=-b6
n=new T.q(new Float32Array(3))
n.m(u,t,o)
m=new T.q(new Float32Array(3))
m.m(u,b5,o)
l=new T.q(new Float32Array(3))
l.m(b4,b5,o)
k=new T.q(new Float32Array(3))
k.m(b4,t,o)
j=new T.q(new Float32Array(3))
j.m(u,b5,o)
i=new T.q(new Float32Array(3))
i.m(u,b5,b6)
h=new T.q(new Float32Array(3))
h.m(b4,b5,b6)
g=new T.q(new Float32Array(3))
g.m(b4,b5,o)
f=new T.q(new Float32Array(3))
f.m(b4,t,b6)
e=new T.q(new Float32Array(3))
e.m(u,t,b6)
d=new T.q(new Float32Array(3))
d.m(u,t,o)
c=new T.q(new Float32Array(3))
c.m(b4,t,o)
b=new T.q(new Float32Array(3))
b.m(b4,t,o)
a=new T.q(new Float32Array(3))
a.m(b4,b5,o)
a0=new T.q(new Float32Array(3))
a0.m(b4,b5,b6)
a1=new T.q(new Float32Array(3))
a1.m(b4,t,b6)
a2=new T.q(new Float32Array(3))
a2.m(u,t,o)
a3=new T.q(new Float32Array(3))
a3.m(u,t,b6)
t=new T.q(new Float32Array(3))
t.m(u,b5,b6)
a4=new T.q(new Float32Array(3))
a4.m(u,b5,o)
o=[T.q]
a5=H.m([s,r,q,p,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,t,a4],o)
u=new T.z(new Float32Array(2))
u.p(b1,b3)
t=new T.z(new Float32Array(2))
t.p(b0,b3)
s=new T.z(new Float32Array(2))
s.p(b0,b2)
r=new T.z(new Float32Array(2))
r.p(b1,b2)
q=new T.z(new Float32Array(2))
q.p(b0,b3)
p=new T.z(new Float32Array(2))
p.p(b0,b2)
n=new T.z(new Float32Array(2))
n.p(b1,b2)
m=new T.z(new Float32Array(2))
m.p(b1,b3)
l=new T.z(new Float32Array(2))
l.p(b1,b2)
k=new T.z(new Float32Array(2))
k.p(b1,b3)
j=new T.z(new Float32Array(2))
j.p(b0,b3)
i=new T.z(new Float32Array(2))
i.p(b0,b2)
h=new T.z(new Float32Array(2))
h.p(b0,b2)
g=new T.z(new Float32Array(2))
g.p(b1,b2)
f=new T.z(new Float32Array(2))
f.p(b1,b3)
e=new T.z(new Float32Array(2))
e.p(b0,b3)
d=new T.z(new Float32Array(2))
d.p(b0,b3)
c=new T.z(new Float32Array(2))
c.p(b0,b2)
b=new T.z(new Float32Array(2))
b.p(b1,b2)
a=new T.z(new Float32Array(2))
a.p(b1,b3)
a0=new T.z(new Float32Array(2))
a0.p(b1,b3)
a1=new T.z(new Float32Array(2))
a1.p(b0,b3)
a2=new T.z(new Float32Array(2))
a2.p(b0,b2)
a3=new T.z(new Float32Array(2))
a3.p(b1,b2)
a6=H.m([u,t,s,r,q,p,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3],[T.z])
a7=new G.ck(!1,H.m([],[G.ch]),H.m([],[G.bf]),H.m([],o),P.a7(P.d,[P.b,,]))
a7.a_("aTexUV")
a7.a_("aNormal")
a7.ce(6)
a7.aN(a5)
a7.aK("aTexUV",a6)
for(a8=0;u=$.jM(),a8<6;++a8){a9=u[a8]
a7.aL("aNormal",H.m([a9,a9,a9,a9],o))}return a7}}
var w=[C,H,J,P,W,G,R,A,D,T,U,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.i5.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gn:function(a){return H.bL(a)},
j:function(a){return"Instance of '"+H.bM(a)+"'"}}
J.em.prototype={
j:function(a){return String(a)},
gn:function(a){return a?519018:218159},
$iO:1}
J.en.prototype={
A:function(a,b){return null==b},
j:function(a){return"null"},
gn:function(a){return 0},
$iC:1}
J.cn.prototype={
gn:function(a){return 0},
j:function(a){return String(a)}}
J.f3.prototype={}
J.b0.prototype={}
J.aX.prototype={
j:function(a){var u=a[$.jz()]
if(u==null)return this.cb(a)
return"JavaScript function for "+H.f(J.ca(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaU:1}
J.aV.prototype={
l:function(a,b){H.D(b,H.r(a,0))
if(!!a.fixed$length)H.ah(P.E("add"))
a.push(b)},
E:function(a,b){var u
H.w(b,"$il",[H.r(a,0)],"$al")
if(!!a.fixed$length)H.ah(P.E("addAll"))
for(u=0;u<1;++u)a.push(b[u])},
U:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.i(u,t,H.f(a[t]))
return u.join(b)},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
gdh:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.i3())},
bb:function(a,b){var u,t
H.k(b,{func:1,ret:P.O,args:[H.r(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.e(P.bc(a))}return!1},
a9:function(a){if(!!a.immutable$list)H.ah(P.E("sort"))
H.l3(a,J.ll(),H.r(a,0))},
u:function(a,b){var u
for(u=0;u<a.length;++u)if(J.b7(a[u],b))return!0
return!1},
j:function(a){return P.i2(a,"[","]")},
gv:function(a){return new J.dT(a,a.length,0,[H.r(a,0)])},
gn:function(a){return H.bL(a)},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||b<0)throw H.e(H.c5(a,b))
return a[b]},
i:function(a,b,c){H.D(c,H.r(a,0))
if(!!a.immutable$list)H.ah(P.E("indexed set"))
if(b>=a.length||b<0)throw H.e(H.c5(a,b))
a[b]=c},
$ix:1,
$ax:function(){},
$il:1,
$ib:1}
J.i4.prototype={}
J.dT.prototype={
gw:function(a){return this.d},
t:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.P(u))
s=this.c
if(s>=t){this.sb1(null)
return!1}this.sb1(u[s]);++this.c
return!0},
sb1:function(a){this.d=H.D(a,H.r(this,0))},
$iaE:1}
J.bh.prototype={
I:function(a,b){var u
H.im(b)
if(typeof b!=="number")throw H.e(H.c4(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.ga6(b)
if(this.ga6(a)===u)return 0
if(this.ga6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga6:function(a){return a===0?1/a<0:a<0},
bQ:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.E(""+a+".toInt()"))},
cZ:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.e(P.E(""+a+".ceil()"))},
d_:function(a,b,c){if(this.I(b,c)>0)throw H.e(H.c4(b))
if(this.I(a,b)<0)return b
if(this.I(a,c)>0)return c
return a},
ds:function(a,b){var u
if(b>20)throw H.e(P.i9(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.ga6(a))return"-"+u
return u},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gn:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
cd:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.b8(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.b8(a,b)},
b8:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.E("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
b7:function(a,b){var u
if(a>0)u=this.cN(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
cN:function(a,b){return b>31?0:a>>>b},
P:function(a,b){if(typeof b!=="number")throw H.e(H.c4(b))
return a>b},
$iZ:1,
$aZ:function(){return[P.K]},
$ia3:1,
$iK:1}
J.cm.prototype={$iF:1}
J.cl.prototype={}
J.aW.prototype={
ae:function(a,b){if(b>=a.length)throw H.e(H.c5(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.e(P.iD(b,null,null))
return a+b},
c6:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
c8:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.f6(b,null))
if(b>c)throw H.e(P.f6(b,null))
if(c>a.length)throw H.e(P.f6(c,null))
return a.substring(b,c)},
c7:function(a,b){return this.c8(a,b,null)},
dr:function(a){return a.toLowerCase()},
d1:function(a,b,c){if(c>a.length)throw H.e(P.i9(c,0,a.length,null,null))
return H.lR(a,b,c)},
I:function(a,b){var u
H.A(b)
if(typeof b!=="string")throw H.e(H.c4(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
j:function(a){return a},
gn:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
h:function(a,b){if(b.dz(0,a.length)||b.R(0,0))throw H.e(H.c5(a,b))
return a[b]},
$ix:1,
$ax:function(){},
$iZ:1,
$aZ:function(){return[P.d]},
$ikR:1,
$id:1}
H.ed.prototype={}
H.bi.prototype={
gv:function(a){return new H.cp(this,this.gk(this),0,[H.ij(this,"bi",0)])},
a7:function(a,b){return this.ca(0,H.k(b,{func:1,ret:P.O,args:[H.ij(this,"bi",0)]}))}}
H.cp.prototype={
gw:function(a){return this.d},
t:function(){var u,t,s,r
u=this.a
t=J.bp(u)
s=t.gk(u)
if(this.b!==s)throw H.e(P.bc(u))
r=this.c
if(r>=s){this.saV(null)
return!1}this.saV(t.q(u,r));++this.c
return!0},
saV:function(a){this.d=H.D(a,H.r(this,0))},
$iaE:1}
H.eB.prototype={
gk:function(a){return J.bt(this.a)},
q:function(a,b){return this.b.$1(J.k8(this.a,b))},
$abi:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.cN.prototype={
gv:function(a){return new H.fO(J.dP(this.a),this.b,this.$ti)}}
H.fO.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gw(u)))return!0
return!1},
gw:function(a){var u=this.a
return u.gw(u)}}
H.bg.prototype={}
H.fG.prototype={
G:function(a){var u,t,s
u=new RegExp(this.a).exec(a)
if(u==null)return
t=Object.create(null)
s=this.b
if(s!==-1)t.arguments=u[s+1]
s=this.c
if(s!==-1)t.argumentsExpr=u[s+1]
s=this.d
if(s!==-1)t.expr=u[s+1]
s=this.e
if(s!==-1)t.method=u[s+1]
s=this.f
if(s!==-1)t.receiver=u[s+1]
return t}}
H.eZ.prototype={
j:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eo.prototype={
j:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.f(this.a)+")"}}
H.fK.prototype={
j:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hV.prototype={
$1:function(a){if(!!J.H(a).$ibe)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:12}
H.dl.prototype={
j:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iX:1}
H.bb.prototype={
j:function(a){return"Closure '"+H.bM(this).trim()+"'"},
$iaU:1,
gdv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fz.prototype={}
H.fl.prototype={
j:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.b6(u)+"'"}}
H.bv.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bv))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gn:function(a){var u,t
u=this.c
if(u==null)t=H.bL(this.a)
else t=typeof u!=="object"?J.aP(u):H.bL(u)
return(t^H.bL(this.b))>>>0},
j:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.bM(u)+"'")}}
H.fI.prototype={
j:function(a){return this.a}}
H.e_.prototype={
j:function(a){return this.a}}
H.fd.prototype={
j:function(a){return"RuntimeError: "+H.f(this.a)}}
H.cK.prototype={
ga4:function(){var u=this.b
if(u==null){u=H.dL(this.a)
this.b=u}return u},
j:function(a){return this.ga4()},
gn:function(a){var u=this.d
if(u==null){u=C.i.gn(this.ga4())
this.d=u}return u},
A:function(a,b){if(b==null)return!1
return b instanceof H.cK&&this.ga4()===b.ga4()}}
H.co.prototype={
gk:function(a){return this.a},
gC:function(a){return new H.ai(this,[H.r(this,0)])},
a5:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cD(u,b)}else{t=this.df(b)
return t}},
df:function(a){var u=this.d
if(u==null)return!1
return this.ar(this.al(u,J.aP(a)&0x3ffffff),a)>=0},
h:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.a1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.a1(r,b)
s=t==null?null:t.b
return s}else return this.dg(b)},
dg:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.al(u,J.aP(a)&0x3ffffff)
s=this.ar(t,a)
if(s<0)return
return t[s].b},
i:function(a,b,c){var u,t,s,r,q,p
H.D(b,H.r(this,0))
H.D(c,H.r(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.am()
this.b=u}this.aX(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.am()
this.c=t}this.aX(t,b,c)}else{s=this.d
if(s==null){s=this.am()
this.d=s}r=J.aP(b)&0x3ffffff
q=this.al(s,r)
if(q==null)this.ao(s,r,[this.an(b,c)])
else{p=this.ar(q,b)
if(p>=0)q[p].b=c
else q.push(this.an(b,c))}}},
B:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.r(this,0),H.r(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.e(P.bc(this))
u=u.c}},
aX:function(a,b,c){var u
H.D(b,H.r(this,0))
H.D(c,H.r(this,1))
u=this.a1(a,b)
if(u==null)this.ao(a,b,this.an(b,c))
else u.b=c},
b4:function(){this.r=this.r+1&67108863},
an:function(a,b){var u,t
u=new H.et(H.D(a,H.r(this,0)),H.D(b,H.r(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.b4()
return u},
ar:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.b7(a[t].a,b))return t
return-1},
j:function(a){return P.iW(this)},
a1:function(a,b){return a[b]},
al:function(a,b){return a[b]},
ao:function(a,b,c){a[b]=c},
cE:function(a,b){delete a[b]},
cD:function(a,b){return this.a1(a,b)!=null},
am:function(){var u=Object.create(null)
this.ao(u,"<non-identifier-key>",u)
this.cE(u,"<non-identifier-key>")
return u},
$iiV:1}
H.et.prototype={}
H.ai.prototype={
gk:function(a){return this.a.a},
gv:function(a){var u,t
u=this.a
t=new H.eu(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eu.prototype={
gw:function(a){return this.d},
t:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.bc(u))
else{u=this.c
if(u==null){this.saW(null)
return!1}else{this.saW(u.a)
this.c=this.c.c
return!0}}},
saW:function(a){this.d=H.D(a,H.r(this,0))},
$iaE:1}
H.hN.prototype={
$1:function(a){return this.a(a)},
$S:12}
H.hO.prototype={
$2:function(a,b){return this.a(a,b)},
$S:31}
H.hP.prototype={
$1:function(a){return this.a(H.A(a))},
$S:24}
H.bF.prototype={$ibF:1}
H.aZ.prototype={$iaZ:1,$il5:1}
H.cs.prototype={
gk:function(a){return a.length},
$ix:1,
$ax:function(){},
$iB:1,
$aB:function(){}}
H.bG.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]},
i:function(a,b,c){H.jj(c)
H.az(b,a,a.length)
a[b]=c},
$abg:function(){return[P.a3]},
$at:function(){return[P.a3]},
$il:1,
$al:function(){return[P.a3]},
$ib:1,
$ab:function(){return[P.a3]}}
H.ct.prototype={
i:function(a,b,c){H.T(c)
H.az(b,a,a.length)
a[b]=c},
$abg:function(){return[P.F]},
$at:function(){return[P.F]},
$il:1,
$al:function(){return[P.F]},
$ib:1,
$ab:function(){return[P.F]}}
H.cr.prototype={$ia5:1}
H.eQ.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.eR.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]},
$ikJ:1}
H.eS.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.eT.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.cu.prototype={
h:function(a,b){H.az(b,a,a.length)
return a[b]},
$imb:1}
H.cv.prototype={
gk:function(a){return a.length},
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.eU.prototype={
gk:function(a){return a.length},
h:function(a,b){H.az(b,a,a.length)
return a[b]}}
H.bV.prototype={}
H.bW.prototype={}
H.bX.prototype={}
H.bY.prototype={}
P.fR.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:6}
P.fQ.prototype={
$1:function(a){var u,t
this.a.a=H.k(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:33}
P.fS.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fT.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hA.prototype={
cu:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aM(new P.hB(this,b),0),a)
else throw H.e(P.E("`setTimeout()` not found."))}}
P.hB.prototype={
$0:function(){this.b.$0()},
$S:1}
P.fV.prototype={
d0:function(a){if(a==null)a=new P.bK()
if(this.a.a!==0)throw H.e(P.cE("Future already completed"))
$.J.toString
this.L(a,null)}}
P.cP.prototype={
ap:function(a,b){var u
H.c6(b,{futureOr:1,type:H.r(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.cE("Future already completed"))
u.cz(b)},
L:function(a,b){this.a.cA(a,b)}}
P.hx.prototype={
L:function(a,b){this.a.L(a,b)}}
P.an.prototype={
di:function(a){if(this.c!==6)return!0
return this.b.b.au(H.k(this.d,{func:1,ret:P.O,args:[P.y]}),a.a,P.O,P.y)},
de:function(a){var u,t,s,r
u=this.e
t=P.y
s={futureOr:1,type:H.r(this,1)}
r=this.b.b
if(H.dH(u,{func:1,args:[P.y,P.X]}))return H.c6(r.dl(u,a.a,a.b,null,t,P.X),s)
else return H.c6(r.au(H.k(u,{func:1,args:[P.y]}),a.a,null,t),s)}}
P.S.prototype={
bP:function(a,b,c){var u,t,s,r
u=H.r(this,0)
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.J
if(t!==C.e){t.toString
H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.ja(b,t)}H.k(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.S(0,$.J,[c])
r=b==null?1:3
this.ad(new P.an(s,r,a,b,[u,c]))
return s},
Y:function(a,b){return this.bP(a,null,b)},
bk:function(a){var u,t
u=$.J
t=new P.S(0,u,this.$ti)
if(u!==C.e)a=P.ja(a,u)
u=H.r(this,0)
this.ad(new P.an(t,2,null,a,[u,u]))
return t},
ad:function(a){var u,t
u=this.a
if(u<=1){a.a=H.i(this.c,"$ian")
this.c=a}else{if(u===2){t=H.i(this.c,"$iS")
u=t.a
if(u<4){t.ad(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.bn(null,null,u,H.k(new P.h2(this,a),{func:1,ret:-1}))}},
b5:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.i(this.c,"$ian")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.i(this.c,"$iS")
t=p.a
if(t<4){p.b5(a)
return}this.a=t
this.c=p.c}u.a=this.a3(a)
t=this.b
t.toString
P.bn(null,null,t,H.k(new P.ha(u,this),{func:1,ret:-1}))}},
a2:function(){var u=H.i(this.c,"$ian")
this.c=null
return this.a3(u)},
a3:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
a0:function(a){var u,t,s
u=H.r(this,0)
H.c6(a,{futureOr:1,type:u})
t=this.$ti
if(H.aL(a,"$iat",t,"$aat"))if(H.aL(a,"$iS",t,null))P.h5(a,this)
else P.j3(a,this)
else{s=this.a2()
H.D(a,u)
this.a=4
this.c=a
P.bl(this,s)}},
L:function(a,b){var u
H.i(b,"$iX")
u=this.a2()
this.a=8
this.c=new P.Q(a,b)
P.bl(this,u)},
cz:function(a){var u
H.c6(a,{futureOr:1,type:H.r(this,0)})
if(H.aL(a,"$iat",this.$ti,"$aat")){this.cB(a)
return}this.a=1
u=this.b
u.toString
P.bn(null,null,u,H.k(new P.h4(this,a),{func:1,ret:-1}))},
cB:function(a){var u=this.$ti
H.w(a,"$iat",u,"$aat")
if(H.aL(a,"$iS",u,null)){if(a.a===8){this.a=1
u=this.b
u.toString
P.bn(null,null,u,H.k(new P.h9(this,a),{func:1,ret:-1}))}else P.h5(a,this)
return}P.j3(a,this)},
cA:function(a,b){var u
this.a=1
u=this.b
u.toString
P.bn(null,null,u,H.k(new P.h3(this,a,b),{func:1,ret:-1}))},
$iat:1}
P.h2.prototype={
$0:function(){P.bl(this.a,this.b)},
$S:0}
P.ha.prototype={
$0:function(){P.bl(this.b,this.a.a)},
$S:0}
P.h6.prototype={
$1:function(a){var u=this.a
u.a=0
u.a0(a)},
$S:6}
P.h7.prototype={
$2:function(a,b){H.i(b,"$iX")
this.a.L(a,b)},
$1:function(a){return this.$2(a,null)},
$S:23}
P.h8.prototype={
$0:function(){this.a.L(this.b,this.c)},
$S:0}
P.h4.prototype={
$0:function(){var u,t,s
u=this.a
t=H.D(this.b,H.r(u,0))
s=u.a2()
u.a=4
u.c=t
P.bl(u,s)},
$S:0}
P.h9.prototype={
$0:function(){P.h5(this.b,this.a)},
$S:0}
P.h3.prototype={
$0:function(){this.a.L(this.b,this.c)},
$S:0}
P.hd.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.bL(H.k(r.d,{func:1}),null)}catch(q){t=H.a4(q)
s=H.bq(q)
if(this.d){r=H.i(this.a.a.c,"$iQ").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.i(this.a.a.c,"$iQ")
else p.b=new P.Q(t,s)
p.a=!0
return}if(!!J.H(u).$iat){if(u instanceof P.S&&u.a>=4){if(u.a===8){r=this.b
r.b=H.i(u.c,"$iQ")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.Y(new P.he(o),null)
r.a=!1}},
$S:1}
P.he.prototype={
$1:function(a){return this.a},
$S:19}
P.hc.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.r(s,0)
q=H.D(this.c,r)
p=H.r(s,1)
this.a.b=s.b.b.au(H.k(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a4(o)
t=H.bq(o)
s=this.a
s.b=new P.Q(u,t)
s.a=!0}},
$S:1}
P.hb.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.i(this.a.a.c,"$iQ")
r=this.c
if(r.di(u)&&r.e!=null){q=this.b
q.b=r.de(u)
q.a=!1}}catch(p){t=H.a4(p)
s=H.bq(p)
r=H.i(this.a.a.c,"$iQ")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.Q(t,s)
n.a=!0}},
$S:1}
P.cO.prototype={}
P.fq.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.S(0,$.J,[P.F])
u.a=0
s=H.r(this,0)
r=H.k(new P.fu(u,this),{func:1,ret:-1,args:[s]})
H.k(new P.fv(u,t),{func:1,ret:-1})
W.aK(this.a,this.b,r,!1,s)
return t},
gda:function(a){var u,t,s,r
u={}
t=new P.S(0,$.J,this.$ti)
u.a=null
s=H.r(this,0)
r=H.k(new P.fs(u,this,t),{func:1,ret:-1,args:[s]})
H.k(new P.ft(t),{func:1,ret:-1})
u.a=W.aK(this.a,this.b,r,!1,s)
return t}}
P.fu.prototype={
$1:function(a){H.D(a,H.r(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.C,args:[H.r(this.b,0)]}}}
P.fv.prototype={
$0:function(){this.b.a0(this.a.a)},
$S:0}
P.fs.prototype={
$1:function(a){H.D(a,H.r(this.b,0))
P.lj(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.C,args:[H.r(this.b,0)]}}}
P.ft.prototype={
$0:function(){var u,t,s,r
try{s=H.i3()
throw H.e(s)}catch(r){u=H.a4(r)
t=H.bq(r)
$.J.toString
this.a.L(u,t)}},
$S:0}
P.fr.prototype={}
P.Q.prototype={
j:function(a){return H.f(this.a)},
$ibe:1}
P.hD.prototype={$imd:1}
P.hH.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.bK()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.j(0)
throw s},
$S:0}
P.hj.prototype={
dm:function(a){var u,t,s
H.k(a,{func:1,ret:-1})
try{if(C.e===$.J){a.$0()
return}P.jb(null,null,this,a,-1)}catch(s){u=H.a4(s)
t=H.bq(s)
P.hG(null,null,this,u,H.i(t,"$iX"))}},
dn:function(a,b,c){var u,t,s
H.k(a,{func:1,ret:-1,args:[c]})
H.D(b,c)
try{if(C.e===$.J){a.$1(b)
return}P.jc(null,null,this,a,b,-1,c)}catch(s){u=H.a4(s)
t=H.bq(s)
P.hG(null,null,this,u,H.i(t,"$iX"))}},
cV:function(a,b){return new P.hl(this,H.k(a,{func:1,ret:b}),b)},
be:function(a){return new P.hk(this,H.k(a,{func:1,ret:-1}))},
cW:function(a,b){return new P.hm(this,H.k(a,{func:1,ret:-1,args:[b]}),b)},
h:function(a,b){return},
bL:function(a,b){H.k(a,{func:1,ret:b})
if($.J===C.e)return a.$0()
return P.jb(null,null,this,a,b)},
au:function(a,b,c,d){H.k(a,{func:1,ret:c,args:[d]})
H.D(b,d)
if($.J===C.e)return a.$1(b)
return P.jc(null,null,this,a,b,c,d)},
dl:function(a,b,c,d,e,f){H.k(a,{func:1,ret:d,args:[e,f]})
H.D(b,e)
H.D(c,f)
if($.J===C.e)return a.$2(b,c)
return P.lo(null,null,this,a,b,c,d,e,f)}}
P.hl.prototype={
$0:function(){return this.a.bL(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.hk.prototype={
$0:function(){return this.a.dm(this.b)},
$S:1}
P.hm.prototype={
$1:function(a){var u=this.c
return this.a.dn(this.b,H.D(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hh.prototype={
gv:function(a){var u=new P.d2(this,this.r,this.$ti)
u.c=this.e
return u},
gk:function(a){return this.a},
u:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.i(u[b],"$ib4")!=null}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null)return!1
return H.i(t[b],"$ib4")!=null}else return this.cC(b)},
cC:function(a){var u=this.d
if(u==null)return!1
return this.ak(this.b2(u,a),a)>=0},
l:function(a,b){var u,t
H.D(b,H.r(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.ib()
this.b=u}return this.aZ(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.ib()
this.c=t}return this.aZ(t,b)}else return this.cv(0,b)},
cv:function(a,b){var u,t,s
H.D(b,H.r(this,0))
u=this.d
if(u==null){u=P.ib()
this.d=u}t=this.b0(b)
s=u[t]
if(s==null)u[t]=[this.ag(b)]
else{if(this.ak(s,b)>=0)return!1
s.push(this.ag(b))}return!0},
bJ:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b6(this.b,b)
else if(typeof b==="number"&&(b&1073741823)===b)return this.b6(this.c,b)
else return this.cI(0,b)},
cI:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.b2(u,b)
s=this.ak(t,b)
if(s<0)return!1
this.b9(t.splice(s,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.af()}},
aZ:function(a,b){H.D(b,H.r(this,0))
if(H.i(a[b],"$ib4")!=null)return!1
a[b]=this.ag(b)
return!0},
b6:function(a,b){var u
if(a==null)return!1
u=H.i(a[b],"$ib4")
if(u==null)return!1
this.b9(u)
delete a[b]
return!0},
af:function(){this.r=1073741823&this.r+1},
ag:function(a){var u,t
u=new P.b4(H.D(a,H.r(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.af()
return u},
b9:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.af()},
b0:function(a){return J.aP(a)&1073741823},
b2:function(a,b){return a[this.b0(b)]},
ak:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.b7(a[t].a,b))return t
return-1}}
P.b4.prototype={}
P.d2.prototype={
gw:function(a){return this.d},
t:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.bc(u))
else{u=this.c
if(u==null){this.sb_(null)
return!1}else{this.sb_(H.D(u.a,H.r(this,0)))
this.c=this.c.b
return!0}}},
sb_:function(a){this.d=H.D(a,H.r(this,0))},
$iaE:1}
P.ev.prototype={$il:1,$ib:1}
P.t.prototype={
gv:function(a){return new H.cp(a,this.gk(a),0,[H.c7(this,a,"t",0)])},
q:function(a,b){return this.h(a,b)},
dc:function(a,b,c,d){var u,t,s
H.D(b,d)
H.k(c,{func:1,ret:d,args:[d,H.c7(this,a,"t",0)]})
u=this.gk(a)
for(t=b,s=0;s<u;++s){t=c.$2(t,this.h(a,s))
if(u!==this.gk(a))throw H.e(P.bc(a))}return t},
j:function(a){return P.i2(a,"[","]")}}
P.ez.prototype={}
P.eA.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.f(a)
u.a=t+": "
u.a+=H.f(b)},
$S:5}
P.U.prototype={
B:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[H.c7(this,a,"U",0),H.c7(this,a,"U",1)]})
for(u=J.dP(this.gC(a));u.t();){t=u.gw(u)
b.$2(t,this.h(a,t))}},
gk:function(a){return J.bt(this.gC(a))},
j:function(a){return P.iW(a)},
$iM:1}
P.ho.prototype={
E:function(a,b){var u
for(u=J.dP(H.w(b,"$il",this.$ti,"$al"));u.t();)this.l(0,u.gw(u))},
j:function(a){return P.i2(this,"{","}")},
$il:1,
$ilZ:1}
P.d3.prototype={}
P.O.prototype={}
P.aC.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.aC&&this.a===b.a&&!0},
I:function(a,b){return C.c.I(this.a,H.i(b,"$iaC").a)},
gn:function(a){var u=this.a
return(u^C.c.b7(u,30))&1073741823},
j:function(a){var u,t,s,r,q,p,o,n
u=P.kB(H.kZ(this))
t=P.cd(H.kX(this))
s=P.cd(H.kT(this))
r=P.cd(H.kU(this))
q=P.cd(H.kW(this))
p=P.cd(H.kY(this))
o=P.kC(H.kV(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n},
$iZ:1,
$aZ:function(){return[P.aC]}}
P.a3.prototype={}
P.aT.prototype={
P:function(a,b){return C.c.P(this.a,b.gdA())},
A:function(a,b){if(b==null)return!1
return b instanceof P.aT&&this.a===b.a},
gn:function(a){return C.c.gn(this.a)},
I:function(a,b){return C.c.I(this.a,H.i(b,"$iaT").a)},
j:function(a){var u,t,s,r,q
u=new P.ec()
t=this.a
if(t<0)return"-"+new P.aT(0-t).j(0)
s=u.$1(C.c.S(t,6e7)%60)
r=u.$1(C.c.S(t,1e6)%60)
q=new P.eb().$1(t%1e6)
return""+C.c.S(t,36e8)+":"+H.f(s)+":"+H.f(r)+"."+H.f(q)},
$iZ:1,
$aZ:function(){return[P.aT]}}
P.eb.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:10}
P.ec.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:10}
P.be.prototype={}
P.bK.prototype={
j:function(a){return"Throw of null."}}
P.aB.prototype={
gai:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gah:function(){return""},
j:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gai()+t+s
if(!this.a)return r
q=this.gah()
p=P.ef(this.b)
return r+q+": "+p}}
P.cz.prototype={
gai:function(){return"RangeError"},
gah:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.f(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.f(u)
else if(s>u)t=": Not in range "+H.f(u)+".."+H.f(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.f(u)}return t}}
P.el.prototype={
gai:function(){return"RangeError"},
gah:function(){var u,t
u=H.T(this.b)
if(typeof u!=="number")return u.R()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.fL.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.fJ.prototype={
j:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bP.prototype={
j:function(a){return"Bad state: "+this.a}}
P.e1.prototype={
j:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.ef(u)+"."}}
P.cD.prototype={
j:function(a){return"Stack Overflow"},
$ibe:1}
P.e6.prototype={
j:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.h1.prototype={
j:function(a){return"Exception: "+this.a}}
P.aU.prototype={}
P.F.prototype={}
P.l.prototype={
a7:function(a,b){var u=H.ij(this,"l",0)
return new H.cN(this,H.k(b,{func:1,ret:P.O,args:[u]}),[u])},
gk:function(a){var u,t
u=this.gv(this)
for(t=0;u.t();)++t
return t},
q:function(a,b){var u,t,s
P.l_(b,"index")
for(u=this.gv(this),t=0;u.t();){s=u.gw(u)
if(b===t)return s;++t}throw H.e(P.L(b,this,"index",null,t))},
j:function(a){return P.kK(this,"(",")")}}
P.aE.prototype={}
P.b.prototype={$il:1}
P.M.prototype={}
P.C.prototype={
gn:function(a){return P.y.prototype.gn.call(this,this)},
j:function(a){return"null"}}
P.K.prototype={$iZ:1,
$aZ:function(){return[P.K]}}
P.y.prototype={constructor:P.y,$iy:1,
A:function(a,b){return this===b},
gn:function(a){return H.bL(this)},
j:function(a){return"Instance of '"+H.bM(this)+"'"},
toString:function(){return this.j(this)}}
P.X.prototype={}
P.d.prototype={$iZ:1,
$aZ:function(){return[P.d]},
$ikR:1}
P.bQ.prototype={
gk:function(a){return this.a.length},
j:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.n.prototype={}
W.dR.prototype={
gk:function(a){return a.length}}
W.cb.prototype={
j:function(a){return String(a)},
$icb:1}
W.dS.prototype={
j:function(a){return String(a)}}
W.bu.prototype={$ibu:1}
W.b9.prototype={$ib9:1}
W.aQ.prototype={$iaQ:1}
W.ba.prototype={
c3:function(a,b,c){var u=a.getContext(b,P.lv(c))
return u},
$iba:1,
gN:function(a){return a.height},
gO:function(a){return a.width}}
W.dZ.prototype={
a8:function(a){return P.ag(a.getContextAttributes())}}
W.aR.prototype={
gk:function(a){return a.length}}
W.bx.prototype={$ibx:1}
W.e2.prototype={
gk:function(a){return a.length}}
W.I.prototype={$iI:1}
W.bd.prototype={
aY:function(a,b){var u,t
u=$.jy()
t=u[b]
if(typeof t==="string")return t
t=this.cO(a,b)
u[b]=t
return t},
cO:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.kD()+b
if(u in a)return u
return b},
gk:function(a){return a.length}}
W.e3.prototype={}
W.ar.prototype={}
W.as.prototype={}
W.e4.prototype={
gk:function(a){return a.length}}
W.e5.prototype={
gk:function(a){return a.length}}
W.e7.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.ce.prototype={}
W.by.prototype={
gbE:function(a){return new W.b2(a,"mousedown",!1,[W.N])},
gbF:function(a){return new W.b2(a,"mousemove",!1,[W.N])},
gbG:function(a){return new W.b2(a,"mouseup",!1,[W.N])},
gbH:function(a){return C.aa.dd(a)}}
W.e8.prototype={
j:function(a){return String(a)}}
W.cf.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.w(c,"$iV",[P.K],"$aV")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[[P.V,P.K]]},
$iB:1,
$aB:function(){return[[P.V,P.K]]},
$at:function(){return[[P.V,P.K]]},
$il:1,
$al:function(){return[[P.V,P.K]]},
$ib:1,
$ab:function(){return[[P.V,P.K]]},
$au:function(){return[[P.V,P.K]]}}
W.cg.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gO(a))+" x "+H.f(this.gN(a))},
A:function(a,b){var u
if(b==null)return!1
if(!H.aL(b,"$iV",[P.K],"$aV"))return!1
if(a.left===b.left)if(a.top===b.top){u=J.o(b)
u=this.gO(a)===u.gO(b)&&this.gN(a)===u.gN(b)}else u=!1
else u=!1
return u},
gn:function(a){return W.j6(C.f.gn(a.left),C.f.gn(a.top),C.f.gn(this.gO(a)),C.f.gn(this.gN(a)))},
gN:function(a){return a.height},
gO:function(a){return a.width},
$iV:1,
$aV:function(){return[P.K]}}
W.e9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.A(c)
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[P.d]},
$iB:1,
$aB:function(){return[P.d]},
$at:function(){return[P.d]},
$il:1,
$al:function(){return[P.d]},
$ib:1,
$ab:function(){return[P.d]},
$au:function(){return[P.d]}}
W.ea.prototype={
gk:function(a){return a.length}}
W.R.prototype={
gcT:function(a){return new W.fZ(a)},
j:function(a){return a.localName},
F:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iP
if(u==null){u=H.m([],[W.a0])
t=new W.cx(u)
C.a.l(u,W.j4(null))
C.a.l(u,W.j7())
$.iP=t
d=t}else d=u
u=$.iO
if(u==null){u=new W.dw(d)
$.iO=u
c=u}else{u.a=d
c=u}}if($.aD==null){u=document
t=u.implementation.createHTMLDocument("")
$.aD=t
$.i1=t.createRange()
t=$.aD.createElement("base")
H.i(t,"$ibu")
t.href=u.baseURI
$.aD.head.appendChild(t)}u=$.aD
if(u.body==null){t=u.createElement("body")
u.body=H.i(t,"$iaQ")}u=$.aD
if(!!this.$iaQ)s=u.body
else{s=u.createElement(a.tagName)
$.aD.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.u(C.P,a.tagName)){$.i1.selectNodeContents(s)
r=$.i1.createContextualFragment(b)}else{s.innerHTML=b
r=$.aD.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aD.body
if(s==null?u!=null:s!==u)J.ix(s)
c.aE(r)
document.adoptNode(r)
return r},
d4:function(a,b,c){return this.F(a,b,c,null)},
c5:function(a,b){a.textContent=null
a.appendChild(this.F(a,b,null,null))},
gbE:function(a){return new W.b1(a,"mousedown",!1,[W.N])},
gbF:function(a){return new W.b1(a,"mousemove",!1,[W.N])},
gbG:function(a){return new W.b1(a,"mouseup",!1,[W.N])},
gbH:function(a){return new W.b1(a,H.A(W.iQ(a)),!1,[W.am])},
$iR:1,
gdq:function(a){return a.tagName}}
W.ee.prototype={
$1:function(a){return!!J.H(H.i(a,"$iv")).$iR},
$S:18}
W.h.prototype={$ih:1}
W.c.prototype={
cQ:function(a,b,c,d){H.k(c,{func:1,args:[W.h]})
if(c!=null)this.cw(a,b,c,!1)},
cw:function(a,b,c,d){return a.addEventListener(b,H.aM(H.k(c,{func:1,args:[W.h]}),1),!1)},
cJ:function(a,b,c,d){return a.removeEventListener(b,H.aM(H.k(c,{func:1,args:[W.h]}),1),!1)},
$ic:1}
W.a_.prototype={$ia_:1}
W.bA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$ia_")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.a_]},
$iB:1,
$aB:function(){return[W.a_]},
$at:function(){return[W.a_]},
$il:1,
$al:function(){return[W.a_]},
$ib:1,
$ab:function(){return[W.a_]},
$ibA:1,
$au:function(){return[W.a_]}}
W.eg.prototype={
gk:function(a){return a.length}}
W.eh.prototype={
gk:function(a){return a.length}}
W.a6.prototype={$ia6:1}
W.ej.prototype={
gk:function(a){return a.length}}
W.bB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$iv")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.v]},
$iB:1,
$aB:function(){return[W.v]},
$at:function(){return[W.v]},
$il:1,
$al:function(){return[W.v]},
$ib:1,
$ab:function(){return[W.v]},
$au:function(){return[W.v]}}
W.bC.prototype={$ibC:1}
W.au.prototype={$iau:1}
W.cq.prototype={
j:function(a){return String(a)},
$icq:1}
W.bD.prototype={}
W.eD.prototype={
gk:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.bE.prototype={$ibE:1}
W.eF.prototype={
h:function(a,b){return P.ag(a.get(H.A(b)))},
B:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.ag(t.value[1]))}},
gC:function(a){var u=H.m([],[P.d])
this.B(a,new W.eG(u))
return u},
gk:function(a){return a.size},
$aU:function(){return[P.d,null]},
$iM:1,
$aM:function(){return[P.d,null]}}
W.eG.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:2}
W.eH.prototype={
h:function(a,b){return P.ag(a.get(H.A(b)))},
B:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.ag(t.value[1]))}},
gC:function(a){var u=H.m([],[P.d])
this.B(a,new W.eI(u))
return u},
gk:function(a){return a.size},
$aU:function(){return[P.d,null]},
$iM:1,
$aM:function(){return[P.d,null]}}
W.eI.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:2}
W.a8.prototype={$ia8:1}
W.eJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$ia8")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.a8]},
$iB:1,
$aB:function(){return[W.a8]},
$at:function(){return[W.a8]},
$il:1,
$al:function(){return[W.a8]},
$ib:1,
$ab:function(){return[W.a8]},
$au:function(){return[W.a8]}}
W.N.prototype={
gbD:function(a){var u,t,s,r,q,p
if(!!a.offsetX)return new P.aG(a.offsetX,a.offsetY,[P.K])
else{u=a.target
if(!J.H(W.j8(u)).$iR)throw H.e(P.E("offsetX is only supported on elements"))
t=H.i(W.j8(u),"$iR")
u=a.clientX
s=a.clientY
r=[P.K]
q=t.getBoundingClientRect()
p=q.left
q=q.top
H.w(new P.aG(p,q,r),"$iaG",r,"$aaG")
if(typeof u!=="number")return u.aI()
if(typeof s!=="number")return s.aI()
return new P.aG(C.f.bQ(u-p),C.f.bQ(s-q),r)}},
$iN:1}
W.cw.prototype={
c4:function(a,b){var u,t,s,r
u=W.ak
t=new P.S(0,$.J,[u])
s=new P.cP(t,[u])
r=P.i7(["audio",!1,"video",!0],P.d,null)
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.cG(a,new P.ht([],[]).av(r),new W.eV(s),new W.eW(s))
return t},
cG:function(a,b,c,d){H.k(c,{func:1,ret:-1,args:[W.ak]})
H.k(d,{func:1,ret:-1,args:[W.aF]})
return a.getUserMedia(b,H.aM(c,1),H.aM(d,1))}}
W.eV.prototype={
$1:function(a){this.a.ap(0,H.i(a,"$iak"))},
$S:13}
W.eW.prototype={
$1:function(a){this.a.d0(H.i(a,"$iaF"))},
$S:17}
W.bH.prototype={}
W.aF.prototype={$iaF:1}
W.Y.prototype={
gZ:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.e(P.cE("No elements"))
if(t>1)throw H.e(P.cE("More than one element"))
return u.firstChild},
E:function(a,b){var u,t,s,r
H.w(b,"$il",[W.v],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
i:function(a,b,c){var u,t
H.i(c,"$iv")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.p(t,b)
u.replaceChild(c,t[b])},
gv:function(a){var u=this.a.childNodes
return new W.ci(u,u.length,-1,[H.c7(C.S,u,"u",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.p(u,b)
return u[b]},
$at:function(){return[W.v]},
$al:function(){return[W.v]},
$ab:function(){return[W.v]}}
W.v.prototype={
dj:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
j:function(a){var u=a.nodeValue
return u==null?this.c9(a):u},
$iv:1}
W.bJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$iv")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.v]},
$iB:1,
$aB:function(){return[W.v]},
$at:function(){return[W.v]},
$il:1,
$al:function(){return[W.v]},
$ib:1,
$ab:function(){return[W.v]},
$au:function(){return[W.v]}}
W.a9.prototype={$ia9:1,
gk:function(a){return a.length}}
W.f4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$ia9")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.a9]},
$iB:1,
$aB:function(){return[W.a9]},
$at:function(){return[W.a9]},
$il:1,
$al:function(){return[W.a9]},
$ib:1,
$ab:function(){return[W.a9]},
$au:function(){return[W.a9]}}
W.fb.prototype={
h:function(a,b){return P.ag(a.get(H.A(b)))},
B:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.ag(t.value[1]))}},
gC:function(a){var u=H.m([],[P.d])
this.B(a,new W.fc(u))
return u},
gk:function(a){return a.size},
$aU:function(){return[P.d,null]},
$iM:1,
$aM:function(){return[P.d,null]}}
W.fc.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:2}
W.fe.prototype={
gk:function(a){return a.length}}
W.aa.prototype={$iaa:1}
W.fh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$iaa")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.aa]},
$iB:1,
$aB:function(){return[W.aa]},
$at:function(){return[W.aa]},
$il:1,
$al:function(){return[W.aa]},
$ib:1,
$ab:function(){return[W.aa]},
$au:function(){return[W.aa]}}
W.ab.prototype={$iab:1}
W.fj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$iab")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.ab]},
$iB:1,
$aB:function(){return[W.ab]},
$at:function(){return[W.ab]},
$il:1,
$al:function(){return[W.ab]},
$ib:1,
$ab:function(){return[W.ab]},
$au:function(){return[W.ab]}}
W.ac.prototype={$iac:1,
gk:function(a){return a.length}}
W.fo.prototype={
h:function(a,b){return a.getItem(H.A(b))},
B:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gC:function(a){var u=H.m([],[P.d])
this.B(a,new W.fp(u))
return u},
gk:function(a){return a.length},
$aU:function(){return[P.d,P.d]},
$iM:1,
$aM:function(){return[P.d,P.d]}}
W.fp.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:15}
W.a1.prototype={$ia1:1}
W.cF.prototype={
F:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aa(a,b,c,d)
u=W.kE("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.Y(t).E(0,new W.Y(u))
return t}}
W.fx.prototype={
F:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aa(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.D.F(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gZ(u)
s.toString
u=new W.Y(s)
r=u.gZ(u)
t.toString
r.toString
new W.Y(t).E(0,new W.Y(r))
return t}}
W.fy.prototype={
F:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aa(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.D.F(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gZ(u)
t.toString
s.toString
new W.Y(t).E(0,new W.Y(s))
return t}}
W.bR.prototype={$ibR:1}
W.ad.prototype={$iad:1}
W.a2.prototype={$ia2:1}
W.fA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$ia2")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.a2]},
$iB:1,
$aB:function(){return[W.a2]},
$at:function(){return[W.a2]},
$il:1,
$al:function(){return[W.a2]},
$ib:1,
$ab:function(){return[W.a2]},
$au:function(){return[W.a2]}}
W.fB.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$iad")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.ad]},
$iB:1,
$aB:function(){return[W.ad]},
$at:function(){return[W.ad]},
$il:1,
$al:function(){return[W.ad]},
$ib:1,
$ab:function(){return[W.ad]},
$au:function(){return[W.ad]}}
W.fC.prototype={
gk:function(a){return a.length}}
W.ae.prototype={$iae:1}
W.fD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$iae")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.ae]},
$iB:1,
$aB:function(){return[W.ae]},
$at:function(){return[W.ae]},
$il:1,
$al:function(){return[W.ae]},
$ib:1,
$ab:function(){return[W.ae]},
$au:function(){return[W.ae]}}
W.fE.prototype={
gk:function(a){return a.length}}
W.aH.prototype={}
W.fM.prototype={
j:function(a){return String(a)}}
W.aJ.prototype={$iaJ:1}
W.fN.prototype={
gk:function(a){return a.length}}
W.am.prototype={
gd6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.E("deltaY is not supported"))},
$iam:1}
W.bT.prototype={
gcS:function(a){var u,t,s
u=P.K
t=new P.S(0,$.J,[u])
s=H.k(new W.fP(new P.hx(t,[u])),{func:1,ret:-1,args:[P.K]})
this.cF(a)
this.cK(a,W.jf(s,u))
return t},
cK:function(a,b){return a.requestAnimationFrame(H.aM(H.k(b,{func:1,ret:-1,args:[P.K]}),1))},
cF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$ij1:1}
W.fP.prototype={
$1:function(a){var u=this.a
a=H.c6(H.im(a),{futureOr:1,type:H.r(u,0)})
u=u.a
if(u.a!==0)H.ah(P.cE("Future already completed"))
u.a0(a)},
$S:16}
W.bU.prototype={$ibU:1}
W.fW.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$iI")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.I]},
$iB:1,
$aB:function(){return[W.I]},
$at:function(){return[W.I]},
$il:1,
$al:function(){return[W.I]},
$ib:1,
$ab:function(){return[W.I]},
$au:function(){return[W.I]}}
W.cS.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var u
if(b==null)return!1
if(!H.aL(b,"$iV",[P.K],"$aV"))return!1
if(a.left===b.left)if(a.top===b.top){u=J.o(b)
u=a.width===u.gO(b)&&a.height===u.gN(b)}else u=!1
else u=!1
return u},
gn:function(a){return W.j6(C.f.gn(a.left),C.f.gn(a.top),C.f.gn(a.width),C.f.gn(a.height))},
gN:function(a){return a.height},
gO:function(a){return a.width}}
W.hf.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$ia6")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.a6]},
$iB:1,
$aB:function(){return[W.a6]},
$at:function(){return[W.a6]},
$il:1,
$al:function(){return[W.a6]},
$ib:1,
$ab:function(){return[W.a6]},
$au:function(){return[W.a6]}}
W.d8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$iv")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.v]},
$iB:1,
$aB:function(){return[W.v]},
$at:function(){return[W.v]},
$il:1,
$al:function(){return[W.v]},
$ib:1,
$ab:function(){return[W.v]},
$au:function(){return[W.v]}}
W.hr.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$iac")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.ac]},
$iB:1,
$aB:function(){return[W.ac]},
$at:function(){return[W.ac]},
$il:1,
$al:function(){return[W.ac]},
$ib:1,
$ab:function(){return[W.ac]},
$au:function(){return[W.ac]}}
W.hv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.i(c,"$ia1")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){if(b<0||b>=a.length)return H.p(a,b)
return a[b]},
$ix:1,
$ax:function(){return[W.a1]},
$iB:1,
$aB:function(){return[W.a1]},
$at:function(){return[W.a1]},
$il:1,
$al:function(){return[W.a1]},
$ib:1,
$ab:function(){return[W.a1]},
$au:function(){return[W.a1]}}
W.fU.prototype={
B:function(a,b){var u,t,s,r,q
H.k(b,{func:1,ret:-1,args:[P.d,P.d]})
for(u=this.gC(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.P)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gC:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.m([],[P.d])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.p(u,r)
q=H.i(u[r],"$ibU")
if(q.namespaceURI==null)C.a.l(t,q.name)}return t},
$aU:function(){return[P.d,P.d]},
$aM:function(){return[P.d,P.d]}}
W.fZ.prototype={
h:function(a,b){return this.a.getAttribute(H.A(b))},
gk:function(a){return this.gC(this).length}}
W.b2.prototype={}
W.b1.prototype={}
W.h_.prototype={
cY:function(a){var u,t,s
u=this.b
if(u==null)return
t=this.d
s=t!=null
if(s){H.k(t,{func:1,args:[W.h]})
if(s)J.jS(u,this.c,t,!1)}this.b=null
this.scH(null)
return},
scH:function(a){this.d=H.k(a,{func:1,args:[W.h]})}}
W.h0.prototype={
$1:function(a){return this.a.$1(H.i(a,"$ih"))},
$S:34}
W.fX.prototype={
dd:function(a){return new W.b2(a,H.A(this.a.$1(a)),!1,this.$ti)}}
W.b3.prototype={
cs:function(a){var u,t
u=$.ir()
if(u.a===0){for(t=0;t<262;++t)u.i(0,C.O[t],W.lD())
for(t=0;t<12;++t)u.i(0,C.q[t],W.lE())}},
T:function(a){return $.jN().u(0,W.bz(a))},
M:function(a,b,c){var u,t,s
u=W.bz(a)
t=$.ir()
s=t.h(0,H.f(u)+"::"+b)
if(s==null)s=t.h(0,"*::"+b)
if(s==null)return!1
return H.hI(s.$4(a,b,c,this))},
$ia0:1}
W.u.prototype={
gv:function(a){return new W.ci(a,this.gk(a),-1,[H.c7(this,a,"u",0)])}}
W.cx.prototype={
T:function(a){return C.a.bb(this.a,new W.eY(a))},
M:function(a,b,c){return C.a.bb(this.a,new W.eX(a,b,c))},
$ia0:1}
W.eY.prototype={
$1:function(a){return H.i(a,"$ia0").T(this.a)},
$S:11}
W.eX.prototype={
$1:function(a){return H.i(a,"$ia0").M(this.a,this.b,this.c)},
$S:11}
W.dg.prototype={
ct:function(a,b,c,d){var u,t,s
this.a.E(0,c)
u=b.a7(0,new W.hp())
t=b.a7(0,new W.hq())
this.b.E(0,u)
s=this.c
s.E(0,C.Q)
s.E(0,t)},
T:function(a){return this.a.u(0,W.bz(a))},
M:function(a,b,c){var u,t
u=W.bz(a)
t=this.c
if(t.u(0,H.f(u)+"::"+b))return this.d.cR(c)
else if(t.u(0,"*::"+b))return this.d.cR(c)
else{t=this.b
if(t.u(0,H.f(u)+"::"+b))return!0
else if(t.u(0,"*::"+b))return!0
else if(t.u(0,H.f(u)+"::*"))return!0
else if(t.u(0,"*::*"))return!0}return!1},
$ia0:1}
W.hp.prototype={
$1:function(a){return!C.a.u(C.q,H.A(a))},
$S:9}
W.hq.prototype={
$1:function(a){return C.a.u(C.q,H.A(a))},
$S:9}
W.hy.prototype={
M:function(a,b,c){if(this.cc(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.u(0,b)
return!1}}
W.hz.prototype={
$1:function(a){return"TEMPLATE::"+H.f(H.A(a))},
$S:20}
W.hw.prototype={
T:function(a){var u=J.H(a)
if(!!u.$ibO)return!1
u=!!u.$ij
if(u&&W.bz(a)==="foreignObject")return!1
if(u)return!0
return!1},
M:function(a,b,c){if(b==="is"||C.i.c6(b,"on"))return!1
return this.T(a)},
$ia0:1}
W.ci.prototype={
t:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sb3(J.c9(this.a,u))
this.c=u
return!0}this.sb3(null)
this.c=t
return!1},
gw:function(a){return this.d},
sb3:function(a){this.d=H.D(a,H.r(this,0))},
$iaE:1}
W.fY.prototype={$ic:1,$ij1:1}
W.a0.prototype={}
W.hn.prototype={$imc:1}
W.dw.prototype={
aE:function(a){new W.hC(this).$2(a,null)},
W:function(a,b){if(b==null)J.ix(a)
else b.removeChild(a)},
cM:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.kc(a)
s=t.a.getAttribute("is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.a4(o)}q="element unprintable"
try{q=J.ca(a)}catch(o){H.a4(o)}try{p=W.bz(a)
this.cL(H.i(a,"$iR"),b,u,q,p,H.i(t,"$iM"),H.A(s))}catch(o){if(H.a4(o) instanceof P.aB)throw o
else{this.W(a,b)
window
n="Removing corrupted element "+H.f(q)
if(typeof console!="undefined")window.console.warn(n)}}},
cL:function(a,b,c,d,e,f,g){var u,t,s,r,q
if(c){this.W(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.T(a)){this.W(a,b)
window
u="Removing disallowed element <"+H.f(e)+"> from "+H.f(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.M(a,"is",g)){this.W(a,b)
window
u="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gC(f)
t=H.m(u.slice(0),[H.r(u,0)])
for(s=f.gC(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.p(t,s)
r=t[s]
if(!this.a.M(a,J.kn(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.f(e)+" "+r+'="'+H.f(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.H(a).$ibR)this.aE(a.content)},
$ilY:1}
W.hC.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.cM(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.W(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.a4(r)
q=H.i(u,"$iv")
if(s){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.i(t,"$iv")}},
$S:21}
W.cR.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.df.prototype={}
W.bZ.prototype={}
W.c_.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dm.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.c0.prototype={}
W.c1.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
P.hs.prototype={
bA:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.l(u,a)
C.a.l(this.b,null)
return t},
av:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.H(a)
if(!!t.$iaC)return new Date(a.a)
if(!!t.$ia_)return a
if(!!t.$ib9)return a
if(!!t.$ibA)return a
if(!!t.$ibC)return a
if(!!t.$ibF||!!t.$iaZ||!!t.$ibE)return a
if(!!t.$iM){s=this.bA(a)
r=this.b
if(s>=r.length)return H.p(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.i(r,s,q)
t.B(a,new P.hu(u,this))
return u.a}if(!!t.$ib){s=this.bA(a)
u=this.b
if(s>=u.length)return H.p(u,s)
q=u[s]
if(q!=null)return q
return this.d3(a,s)}throw H.e(P.ia("structured clone of other type"))},
d3:function(a,b){var u,t,s,r
u=J.bp(a)
t=u.gk(a)
s=new Array(t)
C.a.i(this.b,b,s)
for(r=0;r<t;++r)C.a.i(s,r,this.av(u.h(a,r)))
return s}}
P.hu.prototype={
$2:function(a,b){this.a.a[a]=this.b.av(b)},
$S:5}
P.hJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.ht.prototype={}
P.aG.prototype={
j:function(a){return"Point("+H.f(this.a)+", "+H.f(this.b)+")"},
A:function(a,b){if(b==null)return!1
return H.aL(b,"$iaG",[P.K],null)&&this.a==b.a&&this.b==b.b},
gn:function(a){var u,t,s
u=J.aP(this.a)
t=J.aP(this.b)
t=P.j5(P.j5(0,u),t)
s=536870911&t+((67108863&t)<<3)
s^=s>>>11
return 536870911&s+((16383&s)<<15)}}
P.hi.prototype={}
P.V.prototype={}
P.av.prototype={$iav:1}
P.es.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){H.i(c,"$iav")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$at:function(){return[P.av]},
$il:1,
$al:function(){return[P.av]},
$ib:1,
$ab:function(){return[P.av]},
$au:function(){return[P.av]}}
P.aw.prototype={$iaw:1}
P.f_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){H.i(c,"$iaw")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$at:function(){return[P.aw]},
$il:1,
$al:function(){return[P.aw]},
$ib:1,
$ab:function(){return[P.aw]},
$au:function(){return[P.aw]}}
P.f5.prototype={
gk:function(a){return a.length}}
P.bO.prototype={$ibO:1}
P.fw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){H.A(c)
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$at:function(){return[P.d]},
$il:1,
$al:function(){return[P.d]},
$ib:1,
$ab:function(){return[P.d]},
$au:function(){return[P.d]}}
P.j.prototype={
F:function(a,b,c,d){var u,t,s,r,q,p
u=H.m([],[W.a0])
C.a.l(u,W.j4(null))
C.a.l(u,W.j7())
C.a.l(u,new W.hw())
c=new W.dw(new W.cx(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.t).d4(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.Y(r)
p=u.gZ(u)
for(;u=p.firstChild,u!=null;)q.appendChild(u)
return q},
$ij:1}
P.ax.prototype={$iax:1}
P.fF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a.getItem(b)},
i:function(a,b,c){H.i(c,"$iax")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$at:function(){return[P.ax]},
$il:1,
$al:function(){return[P.ax]},
$ib:1,
$ab:function(){return[P.ax]},
$au:function(){return[P.ax]}}
P.d0.prototype={}
P.d1.prototype={}
P.db.prototype={}
P.dc.prototype={}
P.dn.prototype={}
P.dp.prototype={}
P.du.prototype={}
P.dv.prototype={}
P.a5.prototype={$il:1,
$al:function(){return[P.a3]},
$ib:1,
$ab:function(){return[P.a3]},
$il5:1}
P.dU.prototype={
gk:function(a){return a.length}}
P.dV.prototype={
h:function(a,b){return P.ag(a.get(H.A(b)))},
B:function(a,b){var u,t
H.k(b,{func:1,ret:-1,args:[P.d,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.ag(t.value[1]))}},
gC:function(a){var u=H.m([],[P.d])
this.B(a,new P.dW(u))
return u},
gk:function(a){return a.size},
$aU:function(){return[P.d,null]},
$iM:1,
$aM:function(){return[P.d,null]}}
P.dW.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:2}
P.dX.prototype={
gk:function(a){return a.length}}
P.b8.prototype={}
P.f0.prototype={
gk:function(a){return a.length}}
P.cQ.prototype={}
P.cc.prototype={$icc:1}
P.cj.prototype={$icj:1}
P.cy.prototype={$icy:1}
P.f9.prototype={
ba:function(a,b){return a.activeTexture(b)},
bc:function(a,b,c){return a.attachShader(b,c)},
bd:function(a,b,c){return a.bindBuffer(b,c)},
bf:function(a,b,c){return a.bindFramebuffer(b,c)},
bg:function(a,b,c){return a.bindTexture(b,c)},
bh:function(a,b){return a.blendEquation(b)},
bi:function(a,b,c){return a.blendFunc(b,c)},
bj:function(a,b,c,d){return a.bufferData(b,c,d)},
bl:function(a,b){return a.clear(b)},
bm:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bn:function(a,b){return a.compileShader(b)},
bo:function(a){return a.createBuffer()},
bp:function(a){return a.createProgram()},
bq:function(a,b){return a.createShader(b)},
br:function(a){return a.createTexture()},
bt:function(a,b){return a.depthMask(b)},
bu:function(a,b){return a.disable(b)},
bv:function(a,b,c,d){return a.drawArrays(b,c,d)},
bw:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bx:function(a,b){return a.enable(b)},
by:function(a,b){return a.enableVertexAttribArray(b)},
a8:function(a){return P.ag(a.getContextAttributes())},
aw:function(a){return a.getError()},
ay:function(a,b){return a.getProgramInfoLog(b)},
az:function(a,b,c){return a.getProgramParameter(b,c)},
aA:function(a,b){return a.getShaderInfoLog(b)},
aB:function(a,b,c){return a.getShaderParameter(b,c)},
aC:function(a,b,c){return a.getUniformLocation(b,c)},
bB:function(a,b){return a.linkProgram(b)},
bI:function(a,b,c){return a.pixelStorei(b,c)},
aG:function(a,b,c){return a.shaderSource(b,c)},
aH:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bM:function(a,b,c,d,e,f,g){a.texImage2D(b,c,d,e,f,g)
return},
bN:function(a,b,c,d){return a.texParameterf(b,c,d)},
bO:function(a,b,c,d){return a.texParameteri(b,c,d)},
bR:function(a,b,c){return a.uniform1f(b,c)},
bS:function(a,b,c){return a.uniform1fv(b,c)},
bT:function(a,b,c){return a.uniform1i(b,c)},
bU:function(a,b,c){return a.uniform1iv(b,c)},
bV:function(a,b,c){return a.uniform2fv(b,c)},
bW:function(a,b,c){return a.uniform3fv(b,c)},
bX:function(a,b,c){return a.uniform4fv(b,c)},
bY:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bZ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c_:function(a,b){return a.useProgram(b)},
c0:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c2:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fa.prototype={
cU:function(a,b){return a.beginTransformFeedback(b)},
cX:function(a,b){return a.bindVertexArray(b)},
d5:function(a){return a.createVertexArray()},
d7:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
d8:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
d9:function(a){return a.endTransformFeedback()},
dt:function(a,b,c,d){this.cP(a,b,H.w(c,"$ib",[P.d],"$ab"),d)
return},
cP:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
du:function(a,b,c){return a.vertexAttribDivisor(b,c)},
ba:function(a,b){return a.activeTexture(b)},
bc:function(a,b,c){return a.attachShader(b,c)},
bd:function(a,b,c){return a.bindBuffer(b,c)},
bf:function(a,b,c){return a.bindFramebuffer(b,c)},
bg:function(a,b,c){return a.bindTexture(b,c)},
bh:function(a,b){return a.blendEquation(b)},
bi:function(a,b,c){return a.blendFunc(b,c)},
bj:function(a,b,c,d){return a.bufferData(b,c,d)},
bl:function(a,b){return a.clear(b)},
bm:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bn:function(a,b){return a.compileShader(b)},
bo:function(a){return a.createBuffer()},
bp:function(a){return a.createProgram()},
bq:function(a,b){return a.createShader(b)},
br:function(a){return a.createTexture()},
bt:function(a,b){return a.depthMask(b)},
bu:function(a,b){return a.disable(b)},
bv:function(a,b,c,d){return a.drawArrays(b,c,d)},
bw:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bx:function(a,b){return a.enable(b)},
by:function(a,b){return a.enableVertexAttribArray(b)},
a8:function(a){return P.ag(a.getContextAttributes())},
aw:function(a){return a.getError()},
ay:function(a,b){return a.getProgramInfoLog(b)},
az:function(a,b,c){return a.getProgramParameter(b,c)},
aA:function(a,b){return a.getShaderInfoLog(b)},
aB:function(a,b,c){return a.getShaderParameter(b,c)},
aC:function(a,b,c){return a.getUniformLocation(b,c)},
bB:function(a,b){return a.linkProgram(b)},
bI:function(a,b,c){return a.pixelStorei(b,c)},
aG:function(a,b,c){return a.shaderSource(b,c)},
aH:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bM:function(a,b,c,d,e,f,g){a.texImage2D(b,c,d,e,f,g)
return},
bN:function(a,b,c,d){return a.texParameterf(b,c,d)},
bO:function(a,b,c,d){return a.texParameteri(b,c,d)},
bR:function(a,b,c){return a.uniform1f(b,c)},
bS:function(a,b,c){return a.uniform1fv(b,c)},
bT:function(a,b,c){return a.uniform1i(b,c)},
bU:function(a,b,c){return a.uniform1iv(b,c)},
bV:function(a,b,c){return a.uniform2fv(b,c)},
bW:function(a,b,c){return a.uniform3fv(b,c)},
bX:function(a,b,c){return a.uniform4fv(b,c)},
bY:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bZ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c_:function(a,b){return a.useProgram(b)},
c0:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c2:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.cB.prototype={$icB:1}
P.cG.prototype={$icG:1}
P.cL.prototype={$icL:1}
P.cM.prototype={$icM:1}
P.fk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return P.ag(a.item(b))},
i:function(a,b,c){H.i(c,"$iM")
throw H.e(P.E("Cannot assign element of immutable List."))},
q:function(a,b){return this.h(a,b)},
$at:function(){return[[P.M,,,]]},
$il:1,
$al:function(){return[[P.M,,,]]},
$ib:1,
$ab:function(){return[[P.M,,,]]},
$au:function(){return[[P.M,,,]]}}
P.dj.prototype={}
P.dk.prototype={}
G.eP.prototype={}
G.b_.prototype={
aR:function(){return this.d},
j:function(a){var u,t,s,r
u=H.m(["{"+new H.cK(H.lA(this)).j(0)+"}["+this.a+"]"],[P.d])
for(t=this.d,s=new H.ai(t,[H.r(t,0)]),s=s.gv(s);s.t();){r=s.d
C.a.l(u,H.f(r)+": "+H.f(t.h(0,r)))}return C.a.U(u,"\n")}}
G.e0.prototype={
bz:function(a,b,c){J.k9(this.a,b)
if(c>0)J.kt(this.a,b,c)},
c1:function(a,b,c,d,e,f,g,h){J.hW(this.a,34962,b)
J.ku(this.a,c,d,e,!1,g,h)}}
G.ei.prototype={}
G.ch.prototype={}
G.bf.prototype={}
G.ck.prototype={
a_:function(a){switch($.ao().h(0,a).a){case"vec2":this.e.i(0,a,H.m([],[T.z]))
break
case"vec3":this.e.i(0,a,H.m([],[T.q]))
break
case"vec4":this.e.i(0,a,H.m([],[T.aI]))
break
case"float":this.e.i(0,a,H.m([],[P.a3]))
break
case"uvec4":this.e.i(0,a,H.m([],[[P.b,P.F]]))
break}},
ce:function(a){var u,t,s
u=this.d.length
for(t=this.c,s=0;s<a;++s,u+=4)C.a.l(t,new G.bf(u,u+1,u+2,u+3))},
aN:function(a){var u,t,s,r,q
H.w(a,"$ib",[T.q],"$ab")
for(u=a.length,t=this.d,s=0;s<a.length;a.length===u||(0,H.P)(a),++s){r=a[s]
q=new T.q(new Float32Array(3))
q.H(r)
C.a.l(t,q)}},
aK:function(a,b){var u,t,s,r,q,p,o
u=[T.z]
H.w(b,"$ib",u,"$ab")
t=H.w(this.e.h(0,a),"$ib",u,"$ab")
for(u=b.length,s=t&&C.a,r=0;r<b.length;b.length===u||(0,H.P)(b),++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.z(p))}},
aL:function(a,b){var u,t,s,r,q
u=[T.q]
H.w(b,"$ib",u,"$ab")
t=H.w(this.e.h(0,a),"$ib",u,"$ab")
for(u=t&&C.a,s=0;s<4;++s){r=b[s]
q=new T.q(new Float32Array(3))
q.H(r)
u.l(t,q)}},
cj:function(){var u,t,s,r,q,p,o,n,m
u=this.c
t=new Array(u.length*6)
t.fixed$length=Array
s=H.m(t,[P.F])
for(t=this.b,r=0,q=0;!1;++q){if(q>=0)return H.p(t,q)
p=t[q]
C.a.i(s,r,p.gdB(p))
C.a.i(s,r+1,p.gdC(p))
C.a.i(s,r+2,p.gdD(p))
r+=3}for(t=u.length,q=0;q<u.length;u.length===t||(0,H.P)(u),++q){o=u[q]
n=o.a
C.a.i(s,r,n)
C.a.i(s,r+1,o.b)
m=o.c
C.a.i(s,r+2,m)
C.a.i(s,r+3,n)
C.a.i(s,r+4,m)
C.a.i(s,r+5,o.d)
r+=6}return s},
j:function(a){var u,t,s,r,q
u=H.m(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.d])
for(t=this.e,s=new H.ai(t,[H.r(t,0)]),s=s.gv(s);s.t();){r=s.d
q=$.ao().h(0,r).a
C.a.l(u,H.f(r)+"["+q+","+t.h(0,r).length+"]")}return C.a.U(u," ")}}
G.cJ.prototype={}
G.cI.prototype={}
G.eC.prototype={}
G.eE.prototype={
aO:function(a,b,c){var u,t
C.i.ae(a,0)
H.i(b,"$ia5")
this.cy.i(0,a,b)
u=this.d
t=this.r.h(0,a)
J.hW(u.a,34962,t)
J.iv(u.a,34962,b,35048)},
aP:function(){var u=this.cx
if(u!=null)return u.length
return this.ch.length/3|0},
V:function(a,b,c){var u,t,s,r,q
u=J.is(a,0)===105
if(u&&this.z===0)this.z=C.c.cd(b.length,c)
t=this.r
s=this.d
t.i(0,a,J.hY(s.a))
this.aO(a,b,c)
r=$.ao().h(0,a)
if(r==null)throw H.e("Unknown canonical "+a)
q=this.x.h(0,a)
J.dN(s.a,this.e)
s.bz(0,q,u?1:0)
s.c1(0,t.h(0,a),q,r.aQ(),5126,!1,0,0)},
j:function(a){var u,t,s,r
u=this.cx
t=H.m(["Faces:"+(u==null?0:u.length)],[P.d])
for(u=this.cy,s=new H.ai(u,[H.r(u,0)]),s=s.gv(s);s.t();){r=s.d
C.a.l(t,H.f(r)+":"+u.h(0,r).length)}return"MESH["+this.a+"] "+C.a.U(t,"  ")},
saj:function(a){this.cx=H.w(a,"$ib",[P.F],"$ab")}}
G.f2.prototype={
cf:function(a,b){var u
if(typeof a!=="number")return a.dw()
if(typeof b!=="number")return H.dJ(b)
u=a/b
if(this.z===u)return
this.z=u
this.aT()},
aT:function(){var u,t,s,r,q,p
u=this.z
t=this.Q
s=this.ch
r=Math.tan(this.y*3.141592653589793/180*0.5)
q=t-s
p=this.db.a
p[0]=0
p[1]=0
p[2]=0
p[3]=0
p[4]=0
p[5]=0
p[6]=0
p[7]=0
p[8]=0
p[9]=0
p[10]=0
p[11]=0
p[12]=0
p[13]=0
p[14]=0
p[15]=0
p[0]=1/(r*u)
p[5]=1/r
p[10]=(s+t)/q
p[11]=-1
p[14]=2*t*s/q},
aR:function(){var u,t,s
u=this.x
t=this.d
t.i(0,"uEyePosition",u.ax())
s=this.cy
s.H(u.d)
u=this.cx
u.H(this.db)
u.bC(0,s)
t.i(0,"uPerspectiveViewMatrix",u)
return t}}
G.aS.prototype={
j:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.f8.prototype={
cn:function(a,b,c,d){var u,t,s,r,q,p,o
for(u=this.e.d,t=u.length,s=this.y,r=this.d,q=this.r,p=0;p<u.length;u.length===t||(0,H.P)(u),++p){o=u[p]
s.i(0,o,J.iw(r.a,q,o))}for(u=this.f.d,t=u.length,p=0;p<u.length;u.length===t||(0,H.P)(u),++p){o=u[p]
s.i(0,o,J.iw(r.a,q,o))}},
cp:function(){var u,t,s,r
u=this.z
t=this.y
if(u.a===t.a&&this.Q.a===this.x.a)return H.m([],[P.d])
s=H.m([],[P.d])
for(t=new H.ai(t,[H.r(t,0)]),t=t.gv(t);t.t();){r=t.d
if(!u.a5(0,r))C.a.l(s,r)}for(u=this.x,u=P.lg(u,u.r,H.r(u,0)),t=this.Q;u.t();){r=u.d
if(!t.u(0,r))C.a.l(s,r)}return s},
cr:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.w(b,"$iM",[P.d,P.y],"$aM")
u=Date.now()
for(t=new H.ai(b,[H.r(b,0)]),t=t.gv(t),s=this.d,r=this.y,q=this.z,p=this.a,o=0;t.t();){n=t.d
switch(J.is(n,0)){case 117:if(r.a5(0,n)){m=b.h(0,n)
if(q.a5(0,n))H.hU("E:"+(p+":  "+n+" : group ["+a+"] overwrites ["+n+"]"))
q.i(0,n,a)
l=$.ao().h(0,n)
if(l==null)H.ah("unknown "+n)
k=r.h(0,n)
n=l.a
switch(n){case"int":if(l.c===0){H.T(m)
J.i_(s.a,k,m)}else if(!!J.H(m).$ikJ)J.kr(s.a,k,m)
break
case"float":if(l.c===0){H.jj(m)
J.kp(s.a,k,m)}else if(!!J.H(m).$ia5)J.kq(s.a,k,m)
break
case"mat4":if(l.c===0){n=H.aO(m,"$iW").a
J.iC(s.a,k,!1,n)}else if(!!J.H(m).$ia5)J.iC(s.a,k,!1,m)
break
case"mat3":if(l.c===0){n=H.aO(m,"$iaY").a
J.iB(s.a,k,!1,n)}else if(!!J.H(m).$ia5)J.iB(s.a,k,!1,m)
break
case"vec4":n=l.c
j=s.a
if(n===0)J.iA(j,k,H.aO(m,"$iaI").a)
else J.iA(j,k,H.i(m,"$ia5"))
break
case"vec3":n=l.c
j=s.a
if(n===0)J.iz(j,k,H.aO(m,"$iq").a)
else J.iz(j,k,H.i(m,"$ia5"))
break
case"vec2":n=l.c
j=s.a
if(n===0)J.iy(j,k,H.aO(m,"$iz").a)
else J.iy(j,k,H.i(m,"$ia5"))
break
case"sampler2D":case"sampler2DShadow":n=this.ch
if(typeof n!=="number")return H.dJ(n)
J.it(s.a,33984+n)
n=H.aO(m,"$ibS").b
J.bs(s.a,3553,n)
n=this.ch
J.i_(s.a,k,n)
n=this.ch
if(typeof n!=="number")return n.D()
this.ch=n+1
break
case"samplerCube":n=this.ch
if(typeof n!=="number")return H.dJ(n)
J.it(s.a,33984+n)
n=H.aO(m,"$ibS").b
J.bs(s.a,34067,n)
n=this.ch
J.i_(s.a,k,n)
n=this.ch
if(typeof n!=="number")return n.D()
this.ch=n+1
break
default:H.hU("Error: unknow uniform type: "+n)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.b7(m,!0)
j=s.a
if(n)J.dO(j,2929)
else J.hZ(j,2929)
break
case"cStencilFunc":H.aO(m,"$icJ")
n=m.a
j=s.a
if(n===1281)J.hZ(j,2960)
else{J.dO(j,2960)
j=m.b
i=m.c
J.kk(s.a,n,j,i)}break
case"cDepthWrite":H.hI(m)
J.k3(s.a,m)
break
case"cBlendEquation":H.aO(m,"$icI")
n=m.a
j=s.a
if(n===1281)J.hZ(j,3042)
else{J.dO(j,3042)
j=m.b
i=m.c
J.jX(s.a,j,i)
J.jW(s.a,n)}break}++o
break}}h=P.iN(Date.now()-new P.aC(u,!1).a,0)
""+o
h.j(0)},
ci:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
H.w(b,"$ib",[G.b_],"$ab")
H.w(c,"$ib",[G.aS],"$ab")
u=Date.now()
t=this.d
J.ks(t.a,this.r)
this.ch=0
s=this.z
if(s.a>0){s.f=null
s.e=null
s.d=null
s.c=null
s.b=null
s.a=0
s.b4()}for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r){q=b[r]
this.cr(q.a,q.aR())}s=this.Q
s.X(0)
for(p=a.cy,p=new H.ai(p,[H.r(p,0)]),p=p.gv(p);p.t();)s.l(0,p.d)
o=this.cp()
if(o.length!==0)P.aA("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dN(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.aP()
m=a.Q
l=a.z
if(n)J.jU(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.k7(k,s,p,m,0,l)
else J.k6(k,s,p,m,0)}else{m=t.a
if(l>1)J.k5(m,s,0,p,l)
else J.k4(m,s,0,p)}if(n)J.ka(t.a)
C.a.l(c,new G.aS(this.a,a.z,a.aP(),s,P.iN(Date.now()-new P.aC(u,!1).a,0)))}}
G.G.prototype={
aQ:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}}
G.ff.prototype={
aJ:function(a){var u,t,s,r,q
H.w(a,"$ib",[P.d],"$ab")
for(u=a.length,t=this.c,s=this.x,r=0;r<a.length;a.length===u||(0,H.P)(a),++r){q=a[r]
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.a9(t)},
ab:function(a){var u,t,s
H.w(a,"$ib",[P.d],"$ab")
for(u=a.length,t=this.d,s=0;s<a.length;a.length===u||(0,H.P)(a),++s)C.a.l(t,a[s])
C.a.a9(t)},
aM:function(a){var u,t
H.w(a,"$ib",[P.d],"$ab")
for(u=this.e,t=0;t<1;++t)C.a.l(u,a[t])
C.a.a9(u)},
ac:function(a){this.b=this.aU(!0,H.w(a,"$ib",[P.d],"$ab"),null)},
aU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
u=[P.d]
H.w(b,"$ib",u,"$ab")
t=this.c
s=t.length===0
r=H.m(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],u)
for(u=t.length,q=this.x,p=0;p<t.length;t.length===u||(0,H.P)(t),++p){o=t[p]
n=$.ao().h(0,o)
C.a.l(r,"layout (location="+H.f(q.h(0,o))+") in "+n.a+" "+H.f(o)+";")}C.a.l(r,"")
m=s?"in":"out"
if(s)C.a.l(r,"out vec4 oFragColor;")
for(u=this.e,t=u.length,p=0;p<u.length;u.length===t||(0,H.P)(u),++p){l=u[p]
n=$.ao().h(0,l)
C.a.l(r,m+" "+n.a+" "+H.f(l)+";")}for(u=this.f,t=u.length,p=0;p<u.length;u.length===t||(0,H.P)(u),++p){l=u[p]
n=$.ao().h(0,l)
C.a.l(r,m+" "+n.a+" "+H.f(l)+";")}C.a.l(r,"")
for(u=this.d,t=u.length,p=0;p<u.length;u.length===t||(0,H.P)(u),++p){l=u[p]
n=$.ao().h(0,l)
q=n.c
k=q===0?"":"["+q+"]"
C.a.l(r,"uniform "+n.a+" "+H.f(l)+k+";")}C.a.l(r,"")
if(a)C.a.l(r,"void main(void) {")
C.a.E(r,b)
if(a)C.a.l(r,"}")
return C.a.U(r,"\n")}}
G.fi.prototype={
ax:function(){var u,t,s
u=this.e
t=this.d.a
s=u.a
s[0]=t[12]
s[1]=t[13]
s[2]=t[14]
return u},
aF:function(a,b,c){var u=this.d.a
u[12]=a
u[13]=b
u[14]=c}}
G.cH.prototype={}
G.bS.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ek.prototype={
aS:function(a){var u,t
u=this.d
t=this.c
J.bs(u.a,t,this.b)
J.kl(u.a,t,0,6408,6408,5121,a)}}
R.cA.prototype={
bK:function(a){var u,t,s
u=this.db
t=u.clientWidth
s=u.clientHeight
u.width=t
u.height=s
P.aA("size change "+H.f(t)+" "+H.f(s))
this.dx.cf(t,s)
this.z=t
this.Q=s}}
R.fm.prototype={
co:function(a,b,c){var u,t
u=this.a
if(u==null)throw H.e("no element provided")
t=u.style
t.color=b
t.fontFamily="Helvetica,Arial,sans-serif"
t.fontSize="9px"
t.lineHeight="15px"
t.padding="0 0 3px 3px"
t.textAlign="left"
t.background=c
u.appendChild(this.b)
u.appendChild(this.d)
u.appendChild(this.c)}}
R.fn.prototype={
cq:function(a,b){var u,t,s,r,q,p
u=++this.e
if(a-this.f<1000)return
t=u*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.ds(t,2)+" fps"
C.L.c5(this.c,b)
s=C.c.S(30*C.x.cZ(t),90)
if(s<0)s=0
if(s>30)s=30
u=this.d
r=H.i(u.firstChild,"$iR")
q=r.style
p=""+s+"px"
q.height=p
u.appendChild(r)}}
A.bI.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.bN.prototype={}
A.f7.prototype={
cm:function(a,b,c){if(this.d==null)this.d=new G.ei(this.e,null)},
cg:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
H.w(a,"$ib",[G.aS],"$ab")
u=this.d
t=this.r
s=this.z
r=this.Q
q=u.a
u=u.b
J.jV(q.a,36160,u)
J.kv(q.a,this.x,this.y,s,r)
if(t!==0)J.jY(q.a,t)
for(u=this.f,t=u.length,s=P.d,r=P.y,p=0;p<u.length;u.length===t||(0,H.P)(u),++p){o=u[p]
n=o.e
C.a.l(n,new G.b_(P.a7(s,r),"transforms"))
m=new T.W(new Float32Array(16))
m.K()
for(q=o.f,l=q.length,k=o.d,j=0;j<q.length;q.length===l||(0,H.P)(q),++j)A.jk(k,q[j],m,a,n)
if(0>=n.length)return H.p(n,-1)
n.pop()}}}
D.ep.prototype={
ck:function(a){var u,t
a=document
u=W.au
t={func:1,ret:-1,args:[u]}
W.aK(a,"keydown",H.k(new D.eq(this),t),!1,u)
W.aK(a,"keyup",H.k(new D.er(this),t),!1,u)}}
D.eq.prototype={
$1:function(a){var u
H.i(a,"$iau")
u=this.a
u.a.l(0,a.which)
u.b.l(0,a.which)},
$S:8}
D.er.prototype={
$1:function(a){var u
H.i(a,"$iau")
u=this.a
u.a.bJ(0,a.which)
u.c.l(0,a.which)},
$S:8}
D.eK.prototype={
cl:function(a){var u,t,s
if(a==null)a=document
u=J.o(a)
t=u.gbF(a)
s=H.r(t,0)
W.aK(t.a,t.b,H.k(new D.eL(this),{func:1,ret:-1,args:[s]}),!1,s)
s=u.gbE(a)
t=H.r(s,0)
W.aK(s.a,s.b,H.k(new D.eM(this),{func:1,ret:-1,args:[t]}),!1,t)
t=u.gbG(a)
s=H.r(t,0)
W.aK(t.a,t.b,H.k(new D.eN(this),{func:1,ret:-1,args:[s]}),!1,s)
u=u.gbH(a)
s=H.r(u,0)
W.aK(u.a,u.b,H.k(new D.eO(this),{func:1,ret:-1,args:[s]}),!1,s)}}
D.eL.prototype={
$1:function(a){var u
H.i(a,"$iN")
a.preventDefault()
u=J.o(a)
H.T(u.gbD(a).a)
H.T(u.gbD(a).b)
u=this.a
u.d=a.movementX
u.e=a.movementY},
$S:4}
D.eM.prototype={
$1:function(a){var u
H.i(a,"$iN")
a.preventDefault()
P.aA("BUTTON "+H.f(a.button))
u=this.a
u.a.l(0,a.button)
u.b.l(0,a.button)},
$S:4}
D.eN.prototype={
$1:function(a){var u
H.i(a,"$iN")
a.preventDefault()
u=this.a
u.a.bJ(0,a.button)
u.c.l(0,a.button)},
$S:4}
D.eO.prototype={
$1:function(a){H.i(a,"$iam")
a.preventDefault()
this.a.f=H.T(C.a8.gd6(a))},
$S:25}
D.f1.prototype={}
D.ex.prototype={
$1:function(a){var u,t
H.i(a,"$iak")
u=document.createElement("video")
u.autoplay=!0
t=new W.b1(u,"playing",!1,[W.h])
t.gda(t).Y(new D.ew(this.a,u),-1)
u.srcObject=a},
$S:13}
D.ew.prototype={
$1:function(a){H.i(a,"$ih")
return this.a.ap(0,this.b)},
$S:14}
D.ey.prototype={
$1:function(a){P.aA("E:"+("Camera open error "+H.f(a)))
this.a.ap(0,null)},
$S:26}
A.hM.prototype={
$2:function(a,b){var u,t
H.T(a)
u=J.aP(b)
if(typeof a!=="number")return a.D()
t=536870911&a+u
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:27}
T.aY.prototype={
H:function(a){var u,t
u=a.a
t=this.a
t[8]=u[8]
t[7]=u[7]
t[6]=u[6]
t[5]=u[5]
t[4]=u[4]
t[3]=u[3]
t[2]=u[2]
t[1]=u[1]
t[0]=u[0]},
j:function(a){return"[0] "+this.J(0).j(0)+"\n[1] "+this.J(1).j(0)+"\n[2] "+this.J(2).j(0)+"\n"},
h:function(a,b){return C.m.h(this.a,b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.aY){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]&&u[2]===s[2]&&u[3]===s[3]&&u[4]===s[4]&&u[5]===s[5]&&u[6]===s[6]&&u[7]===s[7]&&u[8]===s[8]}else u=!1
return u},
gn:function(a){return A.dI(this.a)},
J:function(a){var u,t,s
u=new Float32Array(3)
t=this.a
if(a>=9)return H.p(t,a)
u[0]=t[a]
s=3+a
if(s>=9)return H.p(t,s)
u[1]=t[s]
s=6+a
if(s>=9)return H.p(t,s)
u[2]=t[s]
return new T.q(u)},
d2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=a.a
t=u[0]
s=u[4]
r=u[8]
q=u[5]
p=u[7]
o=s*r-q*p
n=u[1]
m=u[3]
l=m*r
k=u[6]
j=q*k
u=u[2]
i=m*p-s*k
h=t*o-n*(l-j)+u*i
if(h===0){this.H(a)
return 0}g=1/h
f=this.a
f[0]=g*o
f[1]=g*(u*p-n*r)
f[2]=g*(n*q-u*s)
f[3]=g*(j-l)
f[4]=g*(t*r-u*k)
f[5]=g*(u*m-t*q)
f[6]=g*i
f[7]=g*(n*k-t*p)
f[8]=g*(t*s-n*m)
return h}}
T.W.prototype={
H:function(a){var u,t
u=a.a
t=this.a
t[15]=u[15]
t[14]=u[14]
t[13]=u[13]
t[12]=u[12]
t[11]=u[11]
t[10]=u[10]
t[9]=u[9]
t[8]=u[8]
t[7]=u[7]
t[6]=u[6]
t[5]=u[5]
t[4]=u[4]
t[3]=u[3]
t[2]=u[2]
t[1]=u[1]
t[0]=u[0]},
j:function(a){return"[0] "+this.J(0).j(0)+"\n[1] "+this.J(1).j(0)+"\n[2] "+this.J(2).j(0)+"\n[3] "+this.J(3).j(0)+"\n"},
h:function(a,b){var u=this.a
if(b>=16)return H.p(u,b)
return u[b]},
A:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.W){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]&&u[2]===s[2]&&u[3]===s[3]&&u[4]===s[4]&&u[5]===s[5]&&u[6]===s[6]&&u[7]===s[7]&&u[8]===s[8]&&u[9]===s[9]&&u[10]===s[10]&&u[11]===s[11]&&u[12]===s[12]&&u[13]===s[13]&&u[14]===s[14]&&u[15]===s[15]}else u=!1
return u},
gn:function(a){return A.dI(this.a)},
J:function(a){var u,t,s
u=new Float32Array(4)
t=this.a
if(a>=16)return H.p(t,a)
u[0]=t[a]
s=4+a
if(s>=16)return H.p(t,s)
u[1]=t[s]
s=8+a
if(s>=16)return H.p(t,s)
u[2]=t[s]
s=12+a
if(s>=16)return H.p(t,s)
u[3]=t[s]
return new T.aI(u)},
K:function(){var u=this.a
u[0]=1
u[1]=0
u[2]=0
u[3]=0
u[4]=0
u[5]=1
u[6]=0
u[7]=0
u[8]=0
u[9]=0
u[10]=1
u[11]=0
u[12]=0
u[13]=0
u[14]=0
u[15]=1},
bC:function(b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
u=this.a
t=u[0]
s=u[4]
r=u[8]
q=u[12]
p=u[1]
o=u[5]
n=u[9]
m=u[13]
l=u[2]
k=u[6]
j=u[10]
i=u[14]
h=u[3]
g=u[7]
f=u[11]
e=u[15]
d=b4.a
c=d[0]
b=d[4]
a=d[8]
a0=d[12]
a1=d[1]
a2=d[5]
a3=d[9]
a4=d[13]
a5=d[2]
a6=d[6]
a7=d[10]
a8=d[14]
a9=d[3]
b0=d[7]
b1=d[11]
b2=d[15]
u[0]=t*c+s*a1+r*a5+q*a9
u[4]=t*b+s*a2+r*a6+q*b0
u[8]=t*a+s*a3+r*a7+q*b1
u[12]=t*a0+s*a4+r*a8+q*b2
u[1]=p*c+o*a1+n*a5+m*a9
u[5]=p*b+o*a2+n*a6+m*b0
u[9]=p*a+o*a3+n*a7+m*b1
u[13]=p*a0+o*a4+n*a8+m*b2
u[2]=l*c+k*a1+j*a5+i*a9
u[6]=l*b+k*a2+j*a6+i*b0
u[10]=l*a+k*a3+j*a7+i*b1
u[14]=l*a0+k*a4+j*a8+i*b2
u[3]=h*c+g*a1+f*a5+e*a9
u[7]=h*b+g*a2+f*a6+e*b0
u[11]=h*a+g*a3+f*a7+e*b1
u[15]=h*a0+g*a4+f*a8+e*b2}}
T.z.prototype={
p:function(a,b){var u=this.a
u[0]=a
u[1]=b},
j:function(a){var u=this.a
return"["+H.f(u[0])+","+H.f(u[1])+"]"},
A:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.z){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]}else u=!1
return u},
gn:function(a){return A.dI(this.a)},
h:function(a,b){return C.m.h(this.a,b)},
gk:function(a){var u,t
u=this.a
t=u[0]
u=u[1]
return Math.sqrt(t*t+u*u)}}
T.q.prototype={
m:function(a,b,c){var u=this.a
u[0]=a
u[1]=b
u[2]=c},
H:function(a){var u,t
u=a.a
t=this.a
t[0]=u[0]
t[1]=u[1]
t[2]=u[2]},
j:function(a){var u=this.a
return"["+H.f(u[0])+","+H.f(u[1])+","+H.f(u[2])+"]"},
A:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.q){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]&&u[2]===s[2]}else u=!1
return u},
gn:function(a){return A.dI(this.a)},
h:function(a,b){var u=this.a
if(b>=3)return H.p(u,b)
return u[b]},
gk:function(a){return Math.sqrt(this.gas())},
gas:function(){var u,t,s
u=this.a
t=u[0]
s=u[1]
u=u[2]
return t*t+s*s+u*u},
at:function(a){var u,t,s
u=Math.sqrt(this.gas())
if(u===0)return 0
t=1/u
s=this.a
s[0]=s[0]*t
s[1]=s[1]*t
s[2]=s[2]*t
return u},
aq:function(a){var u,t
u=a.a
t=this.a
return t[0]*u[0]+t[1]*u[1]+t[2]*u[2]},
bs:function(a){var u,t,s,r,q,p,o,n
u=this.a
t=u[0]
s=u[1]
r=u[2]
q=a.a
p=q[0]
o=q[1]
n=q[2]
u=new T.q(new Float32Array(3))
u.m(s*n-r*o,r*p-t*n,t*o-s*p)
return u}}
T.aI.prototype={
j:function(a){var u=this.a
return H.f(u[0])+","+H.f(u[1])+","+H.f(u[2])+","+H.f(u[3])},
A:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.aI){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]&&u[2]===s[2]&&u[3]===s[3]}else u=!1
return u},
gn:function(a){return A.dI(this.a)},
h:function(a,b){return C.m.h(this.a,b)},
gk:function(a){var u,t,s,r
u=this.a
t=u[0]
s=u[1]
r=u[2]
u=u[3]
return Math.sqrt(t*t+s*s+r*r+u*u)}}
U.hR.prototype={
$1:function(c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0
H.im(c1)
if(typeof c1!=="number")return c1.aI()
t=this.a
t.a=c1+0
s=this.b
r=s.fx
q=r.a
if(q.u(0,0)||q.u(0,1)){q=s.cx
p=r.d
if(typeof p!=="number")return p.aD()
s.cx=q+p*0.01
p=s.cy
q=r.e
if(typeof q!=="number")return q.aD()
s.cy=p+q*0.01}q=s.fr
p=q.a
if(p.u(0,37))s.cx+=0.03
else if(p.u(0,39))s.cx-=0.03
if(p.u(0,38))s.cy+=0.03
else if(p.u(0,40))s.cy-=0.03
if(p.u(0,33))s.ch*=0.99
else if(p.u(0,34))s.ch*=1.01
if(p.u(0,32)){s.cx=0
s.cy=0}p=r.f
if(typeof p!=="number")return p.aD()
p=s.ch-p*s.dy
if(p>0)s.ch=p
p=C.f.d_(s.cy,-1.4707963267948965,1.4707963267948965)
s.cy=p
o=s.ch
n=s.cx
m=o*Math.cos(p)
s.aF(m*Math.cos(n),o*Math.sin(p),m*Math.sin(n))
n=s.d.a
p=s.dx.a
n[12]=n[12]+p[0]
n[13]=n[13]+p[1]
n[14]=n[14]+p[2]
l=new T.q(new Float32Array(3))
l.m(0,1,0)
o=s.ax()
k=new Float32Array(3)
j=new T.q(k)
j.H(o)
k[0]=k[0]-p[0]
k[1]=k[1]-p[1]
k[2]=k[2]-p[2]
j.at(0)
i=l.bs(j)
i.at(0)
h=j.bs(i)
h.at(0)
p=i.aq(o)
g=h.aq(o)
o=j.aq(o)
f=i.a
e=f[0]
d=h.a
c=d[0]
b=k[0]
a=f[1]
a0=d[1]
a1=k[1]
f=f[2]
d=d[2]
k=k[2]
n[15]=1
n[14]=-o
n[13]=-g
n[12]=-p
n[11]=0
n[10]=k
n[9]=d
n[8]=f
n[7]=0
n[6]=a1
n[5]=a0
n[4]=a
n[3]=0
n[2]=b
n[1]=c
n[0]=e
e=s.f
c=e.a
c[0]=n[2]
c[1]=n[6]
c[2]=n[10]
s=-s.db
a2=Math.sqrt(e.gas())
i=c[0]/a2
h=c[1]/a2
j=c[2]/a2
a3=Math.cos(s)
a4=Math.sin(s)
a5=1-a3
a6=i*i*a5+a3
s=j*a4
a7=i*h*a5-s
c=h*a4
a8=i*j*a5+c
a9=h*i*a5+s
b0=h*h*a5+a3
s=i*a4
b1=h*j*a5-s
b2=j*i*a5-c
b3=j*h*a5+s
b4=j*j*a5+a3
s=n[0]
c=n[4]
e=n[8]
b=n[1]
a=n[5]
a0=n[9]
a1=n[2]
f=n[6]
d=n[10]
k=n[3]
p=n[7]
g=n[11]
n[0]=s*a6+c*a9+e*b2
n[1]=b*a6+a*a9+a0*b2
n[2]=a1*a6+f*a9+d*b2
n[3]=k*a6+p*a9+g*b2
n[4]=s*a7+c*b0+e*b3
n[5]=b*a7+a*b0+a0*b3
n[6]=a1*a7+f*b0+d*b3
n[7]=k*a7+p*b0+g*b3
n[8]=s*a8+c*b1+e*b4
n[9]=b*a8+a*b1+a0*b4
n[10]=a1*a8+f*b1+d*b4
n[11]=k*a8+p*b1+g*b4
q.c.X(0)
q.b.X(0)
r.e=0
r.d=0
r.f=0
r.c.X(0)
r.b.X(0)
b5=Math.cos(0.01)
b6=Math.sin(0.01)
r=this.c.d.a
q=r[4]
g=r[8]
p=r[5]
k=r[9]
n=r[6]
d=r[10]
f=r[7]
a1=r[11]
a0=-b6
r[4]=q*b5+g*b6
r[5]=p*b5+k*b6
r[6]=n*b5+d*b6
r[7]=f*b5+a1*b6
r[8]=q*a0+g*b5
r[9]=p*a0+k*b5
r[10]=n*a0+d*b5
r[11]=f*a0+a1*b5
b5=Math.cos(0.01)
b6=Math.sin(0.01)
a1=r[0]
a0=r[8]
f=-b6
d=r[1]
n=r[9]
k=r[2]
p=r[10]
g=r[3]
q=r[11]
r[0]=a1*b5+a0*f
r[1]=d*b5+n*f
r[2]=k*b5+p*f
r[3]=g*b5+q*f
r[8]=a1*b6+a0*b5
r[9]=d*b6+n*b5
r[10]=k*b6+p*b5
r[11]=g*b6+q*b5
try{s=this.d
s.aS(s.f)
J.bs(s.d.a,s.c,null)}catch(b7){u=H.a4(b7)
P.aA(u)}b8=H.m([],[G.aS])
this.e.cg(b8)
b9=H.m([],[P.d])
for(s=b8.length,c0=0;c0<b8.length;b8.length===s||(0,H.P)(b8),++c0)C.a.l(b9,b8[c0].j(0))
this.f.cq(t.a,C.a.U(b9,"<br>"))
C.a9.gcS(window).Y(this,-1)},
$S:28}
U.hS.prototype={
$1:function(a){H.i(a,"$iQ")
window.alert("Camera error "+H.f(a)+": - do you have a camera installed?")},
$S:29};(function aliases(){var u=J.a.prototype
u.c9=u.j
u=J.cn.prototype
u.cb=u.j
u=P.l.prototype
u.ca=u.a7
u=W.R.prototype
u.aa=u.F
u=W.dg.prototype
u.cc=u.M})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers._instance_1u
u(J,"ll","kN",30)
t(P,"lr","l8",3)
t(P,"ls","l9",3)
t(P,"lt","la",3)
s(P,"ji","lq",1)
t(W,"lC","iQ",32)
r(W,"lD",4,null,["$4"],["le"],7,0)
r(W,"lE",4,null,["$4"],["lf"],7,0)
q(R.cA.prototype,"gdk","bK",14)
t(U,"lu","lM",22)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.y,null)
s(P.y,[H.i5,J.a,J.dT,P.l,H.cp,P.aE,H.bg,H.fG,P.be,H.bb,H.dl,H.cK,P.U,H.et,H.eu,P.hA,P.fV,P.an,P.S,P.cO,P.fq,P.fr,P.Q,P.hD,P.ho,P.b4,P.d2,P.d3,P.t,P.O,P.aC,P.K,P.aT,P.cD,P.h1,P.aU,P.b,P.M,P.C,P.X,P.d,P.bQ,W.e3,W.fX,W.b3,W.u,W.cx,W.dg,W.hw,W.ci,W.fY,W.a0,W.hn,W.dw,P.hs,P.aG,P.hi,P.a5,G.eP,G.e0,G.ei,G.ch,G.bf,G.ck,G.cJ,G.cI,G.aS,G.G,G.ff,G.cH,G.bS,R.fm,D.ep,D.eK,T.aY,T.W,T.z,T.q,T.aI])
s(J.a,[J.em,J.en,J.cn,J.aV,J.bh,J.aW,H.bF,H.aZ,W.c,W.dR,W.b9,W.dZ,W.ar,W.as,W.I,W.cR,W.e7,W.e8,W.cT,W.cg,W.cV,W.ea,W.h,W.cX,W.a6,W.ej,W.cZ,W.bC,W.cq,W.eD,W.d4,W.d5,W.a8,W.d6,W.bH,W.aF,W.d9,W.a9,W.dd,W.df,W.ab,W.dh,W.ac,W.dm,W.a1,W.dq,W.fC,W.ae,W.ds,W.fE,W.fM,W.dx,W.dz,W.dB,W.dD,W.dF,P.av,P.d0,P.aw,P.db,P.f5,P.dn,P.ax,P.du,P.dU,P.cQ,P.cc,P.cj,P.cy,P.f9,P.fa,P.cB,P.cG,P.cL,P.cM,P.dj])
s(J.cn,[J.f3,J.b0,J.aX])
t(J.i4,J.aV)
s(J.bh,[J.cm,J.cl])
s(P.l,[H.ed,H.cN])
s(H.ed,[H.bi,H.ai])
t(H.eB,H.bi)
t(H.fO,P.aE)
s(P.be,[H.eZ,H.eo,H.fK,H.fI,H.e_,H.fd,P.bK,P.aB,P.fL,P.fJ,P.bP,P.e1,P.e6])
s(H.bb,[H.hV,H.fz,H.hN,H.hO,H.hP,P.fR,P.fQ,P.fS,P.fT,P.hB,P.h2,P.ha,P.h6,P.h7,P.h8,P.h4,P.h9,P.h3,P.hd,P.he,P.hc,P.hb,P.fu,P.fv,P.fs,P.ft,P.hH,P.hl,P.hk,P.hm,P.eA,P.eb,P.ec,W.ee,W.eG,W.eI,W.eV,W.eW,W.fc,W.fp,W.fP,W.h0,W.eY,W.eX,W.hp,W.hq,W.hz,W.hC,P.hu,P.hJ,P.dW,D.eq,D.er,D.eL,D.eM,D.eN,D.eO,D.ex,D.ew,D.ey,A.hM,U.hR,U.hS])
s(H.fz,[H.fl,H.bv])
t(P.ez,P.U)
s(P.ez,[H.co,W.fU])
t(H.cs,H.aZ)
s(H.cs,[H.bV,H.bX])
t(H.bW,H.bV)
t(H.bG,H.bW)
t(H.bY,H.bX)
t(H.ct,H.bY)
t(H.cr,H.bG)
s(H.ct,[H.eQ,H.eR,H.eS,H.eT,H.cu,H.cv,H.eU])
s(P.fV,[P.cP,P.hx])
t(P.hj,P.hD)
t(P.hh,P.ho)
t(P.ev,P.d3)
s(P.K,[P.a3,P.F])
s(P.aB,[P.cz,P.el])
s(W.c,[W.v,W.eg,W.ak,W.bE,W.aa,W.bZ,W.ad,W.a2,W.c0,W.fN,W.bT,P.dX,P.b8])
s(W.v,[W.R,W.aR,W.by,W.bU])
s(W.R,[W.n,P.j])
s(W.n,[W.cb,W.dS,W.bu,W.aQ,W.ba,W.ce,W.eh,W.bD,W.fe,W.cF,W.fx,W.fy,W.bR])
s(W.ar,[W.bx,W.e4,W.e5])
t(W.e2,W.as)
t(W.bd,W.cR)
t(W.cU,W.cT)
t(W.cf,W.cU)
t(W.cW,W.cV)
t(W.e9,W.cW)
t(W.a_,W.b9)
t(W.cY,W.cX)
t(W.bA,W.cY)
t(W.d_,W.cZ)
t(W.bB,W.d_)
t(W.aH,W.h)
s(W.aH,[W.au,W.N])
t(W.eF,W.d4)
t(W.eH,W.d5)
t(W.d7,W.d6)
t(W.eJ,W.d7)
t(W.cw,W.bH)
t(W.Y,P.ev)
t(W.da,W.d9)
t(W.bJ,W.da)
t(W.de,W.dd)
t(W.f4,W.de)
t(W.fb,W.df)
t(W.c_,W.bZ)
t(W.fh,W.c_)
t(W.di,W.dh)
t(W.fj,W.di)
t(W.fo,W.dm)
t(W.dr,W.dq)
t(W.fA,W.dr)
t(W.c1,W.c0)
t(W.fB,W.c1)
t(W.dt,W.ds)
t(W.fD,W.dt)
t(W.aJ,W.bD)
t(W.am,W.N)
t(W.dy,W.dx)
t(W.fW,W.dy)
t(W.cS,W.cg)
t(W.dA,W.dz)
t(W.hf,W.dA)
t(W.dC,W.dB)
t(W.d8,W.dC)
t(W.dE,W.dD)
t(W.hr,W.dE)
t(W.dG,W.dF)
t(W.hv,W.dG)
t(W.fZ,W.fU)
t(W.b2,P.fq)
t(W.b1,W.b2)
t(W.h_,P.fr)
t(W.hy,W.dg)
t(P.ht,P.hs)
t(P.V,P.hi)
t(P.d1,P.d0)
t(P.es,P.d1)
t(P.dc,P.db)
t(P.f_,P.dc)
t(P.bO,P.j)
t(P.dp,P.dn)
t(P.fw,P.dp)
t(P.dv,P.du)
t(P.fF,P.dv)
t(P.dV,P.cQ)
t(P.f0,P.b8)
t(P.dk,P.dj)
t(P.fk,P.dk)
s(G.eP,[G.b_,G.eE,G.f8,G.fi,A.f7,A.bN])
s(G.b_,[G.eC,G.f2])
t(G.ek,G.bS)
t(R.cA,A.f7)
t(R.fn,R.fm)
s(G.fi,[A.bI,D.f1])
u(H.bV,P.t)
u(H.bW,H.bg)
u(H.bX,P.t)
u(H.bY,H.bg)
u(P.d3,P.t)
u(W.cR,W.e3)
u(W.cT,P.t)
u(W.cU,W.u)
u(W.cV,P.t)
u(W.cW,W.u)
u(W.cX,P.t)
u(W.cY,W.u)
u(W.cZ,P.t)
u(W.d_,W.u)
u(W.d4,P.U)
u(W.d5,P.U)
u(W.d6,P.t)
u(W.d7,W.u)
u(W.d9,P.t)
u(W.da,W.u)
u(W.dd,P.t)
u(W.de,W.u)
u(W.df,P.U)
u(W.bZ,P.t)
u(W.c_,W.u)
u(W.dh,P.t)
u(W.di,W.u)
u(W.dm,P.U)
u(W.dq,P.t)
u(W.dr,W.u)
u(W.c0,P.t)
u(W.c1,W.u)
u(W.ds,P.t)
u(W.dt,W.u)
u(W.dx,P.t)
u(W.dy,W.u)
u(W.dz,P.t)
u(W.dA,W.u)
u(W.dB,P.t)
u(W.dC,W.u)
u(W.dD,P.t)
u(W.dE,W.u)
u(W.dF,P.t)
u(W.dG,W.u)
u(P.d0,P.t)
u(P.d1,W.u)
u(P.db,P.t)
u(P.dc,W.u)
u(P.dn,P.t)
u(P.dp,W.u)
u(P.du,P.t)
u(P.dv,W.u)
u(P.cQ,P.U)
u(P.dj,P.t)
u(P.dk,W.u)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.aQ.prototype
C.K=W.ba.prototype
C.w=W.bd.prototype
C.L=W.ce.prototype
C.M=J.a.prototype
C.a=J.aV.prototype
C.x=J.cl.prototype
C.c=J.cm.prototype
C.f=J.bh.prototype
C.i=J.aW.prototype
C.N=J.aX.prototype
C.m=H.cr.prototype
C.n=H.cu.prototype
C.R=W.cw.prototype
C.S=W.bJ.prototype
C.y=J.f3.prototype
C.D=W.cF.prototype
C.r=J.b0.prototype
C.a8=W.am.prototype
C.a9=W.bT.prototype
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.J=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.I=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.H=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.v=function(hooks) { return hooks; }

C.e=new P.hj()
C.O=H.m(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.d])
C.P=H.m(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.d])
C.Q=H.m(u([]),[P.d])
C.p=H.m(u(["bind","if","ref","repeat","syntax"]),[P.d])
C.q=H.m(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.d])
C.o=new G.G("",0)
C.b=new G.G("float",0)
C.T=new G.G("float",0)
C.V=new G.G("float",0)
C.W=new G.G("float",0)
C.U=new G.G("float",0)
C.X=new G.G("float",4)
C.z=new G.G("mat3",0)
C.j=new G.G("mat4",0)
C.Y=new G.G("mat4",128)
C.Z=new G.G("mat4",4)
C.a_=new G.G("sampler2DShadow",0)
C.h=new G.G("sampler2D",0)
C.a0=new G.G("samplerCube",0)
C.k=new G.G("vec2",0)
C.a1=new G.G("vec2",0)
C.d=new G.G("vec3",0)
C.A=new G.G("vec3",0)
C.a3=new G.G("vec3",0)
C.a5=new G.G("vec3",0)
C.B=new G.G("vec3",0)
C.a2=new G.G("vec3",0)
C.a4=new G.G("vec3",0)
C.l=new G.G("vec4",0)
C.a7=new G.G("vec4",0)
C.C=new G.G("vec4",0)
C.a6=new G.G("vec4",0)
C.aa=new W.fX(W.lC(),[W.am])})();(function staticFields(){$.aq=0
$.bw=null
$.iE=null
$.ic=!1
$.jp=null
$.jg=null
$.ju=null
$.hK=null
$.hQ=null
$.ik=null
$.bm=null
$.c2=null
$.c3=null
$.id=!1
$.J=C.e
$.aD=null
$.i1=null
$.iP=null
$.iO=null
$.iL=null
$.iK=null
$.iJ=null
$.iI=null
$.jl=0})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lW","jz",function(){return H.jo("_$dart_dartClosure")})
u($,"lX","ip",function(){return H.jo("_$dart_js")})
u($,"m1","jC",function(){return H.ay(H.fH({
toString:function(){return"$receiver$"}}))})
u($,"m2","jD",function(){return H.ay(H.fH({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"m3","jE",function(){return H.ay(H.fH(null))})
u($,"m4","jF",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m7","jI",function(){return H.ay(H.fH(void 0))})
u($,"m8","jJ",function(){return H.ay(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"m6","jH",function(){return H.ay(H.j0(null))})
u($,"m5","jG",function(){return H.ay(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ma","jL",function(){return H.ay(H.j0(void 0))})
u($,"m9","jK",function(){return H.ay(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"me","iq",function(){return P.l7()})
u($,"mj","c8",function(){return[]})
u($,"lV","jy",function(){return{}})
u($,"mg","jN",function(){return P.i8(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.d)})
u($,"mh","ir",function(){return P.a7(P.d,P.aU)})
u($,"m_","jA",function(){return new G.cJ(1281,0,4294967295)})
u($,"lT","jw",function(){return new G.cI(1281,1281,1281)})
u($,"mi","ao",function(){return P.i7(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.A,"aColorAlpha",C.a6,"aPosition",C.B,"aTexUV",C.a1,"aNormal",C.a2,"aBinormal",C.a3,"aCenter",C.C,"aPointSize",C.b,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a4,"aBitangent",C.a5,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.b,"iaColor",C.d,"vColor",C.A,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.B,"vPositionFromLight",C.a7,"vCenter",C.C,"vDepth",C.T,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.z,"uConvolutionMatrix",C.z,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a_,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a0,"uAnimationTable",C.h,"uTime",C.U,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Y,"uLightDescs",C.Z,"uLightCount",C.b,"uLightTypes",C.X,"uBumpScale",C.V,"uNormalScale",C.W],P.d,G.G)})
u($,"m0","jB",function(){var t=G.l4()
t.b=!0
return t})
u($,"lU","jx",function(){return T.bk(1,0,0)})
u($,"mo","jP",function(){var t,s
t=G.fg("nullUV")
s=[P.d]
t.aJ(H.m(["aPosition","aTexUV"],s))
t.aM(H.m(["vTexUV"],s))
t.b=t.aU(!1,H.w(H.m(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],s),"$ib",s,"$ab"),null)
return t})
u($,"mn","jO",function(){var t,s
t=G.fg("copyF")
s=[P.d]
t.ab(H.m(["uTexture"],s))
t.aM(H.m(["vTexUV"],s))
t.ac(H.m(["oFragColor = texture(uTexture, vTexUV);"],s))
return t})
u($,"mq","jR",function(){var t,s
t=G.fg("SolidColor")
s=[P.d]
t.aJ(H.m(["aPosition"],s))
t.ab(H.m(["uPerspectiveViewMatrix","uModelMatrix"],s))
t.ac(H.m(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"],s))
return t})
u($,"mp","jQ",function(){var t,s
t=G.fg("SolidColorF")
s=[P.d]
t.ab(H.m(["uColor"],s))
t.ac(H.m(["oFragColor = vec4( uColor, 1.0 );"],s))
return t})
u($,"mf","jM",function(){return H.m([T.bk(0,0,1),T.bk(0,0,-1),T.bk(0,1,0),T.bk(0,-1,0),T.bk(1,0,0),T.bk(-1,0,0)],[T.q])})})()
var v={mangledGlobalNames:{F:"int",a3:"double",K:"num",d:"String",O:"bool",C:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.C},{func:1,ret:-1},{func:1,ret:-1,args:[P.d,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.C,args:[W.N]},{func:1,ret:P.C,args:[,,]},{func:1,ret:P.C,args:[,]},{func:1,ret:P.O,args:[W.R,P.d,P.d,W.b3]},{func:1,ret:P.C,args:[W.au]},{func:1,ret:P.O,args:[P.d]},{func:1,ret:P.d,args:[P.F]},{func:1,ret:P.O,args:[W.a0]},{func:1,args:[,]},{func:1,ret:P.C,args:[W.ak]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[P.d,P.d]},{func:1,ret:P.C,args:[P.K]},{func:1,ret:P.C,args:[W.aF]},{func:1,ret:P.O,args:[W.v]},{func:1,ret:[P.S,,],args:[,]},{func:1,ret:P.d,args:[P.d]},{func:1,ret:-1,args:[W.v,W.v]},{func:1,ret:-1,args:[W.aJ]},{func:1,ret:P.C,args:[,],opt:[P.X]},{func:1,args:[P.d]},{func:1,ret:P.C,args:[W.am]},{func:1,ret:P.C,args:[P.y]},{func:1,ret:P.F,args:[P.F,P.y]},{func:1,ret:-1,args:[P.K]},{func:1,ret:P.C,args:[P.Q]},{func:1,ret:P.F,args:[,,]},{func:1,args:[,P.d]},{func:1,ret:P.d,args:[W.c]},{func:1,ret:P.C,args:[{func:1,ret:-1}]},{func:1,args:[W.h]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,NavigatorAutomationInformation:J.a,NavigatorCookies:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bF,DataView:H.aZ,ArrayBufferView:H.aZ,Float64Array:H.bG,Float32Array:H.cr,Int16Array:H.eQ,Int32Array:H.eR,Int8Array:H.eS,Uint16Array:H.eT,Uint32Array:H.cu,Uint8ClampedArray:H.cv,CanvasPixelArray:H.cv,Uint8Array:H.eU,HTMLBRElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.dR,HTMLAnchorElement:W.cb,HTMLAreaElement:W.dS,HTMLBaseElement:W.bu,Blob:W.b9,HTMLBodyElement:W.aQ,HTMLCanvasElement:W.ba,CanvasRenderingContext2D:W.dZ,CDATASection:W.aR,CharacterData:W.aR,Comment:W.aR,ProcessingInstruction:W.aR,Text:W.aR,CSSNumericValue:W.bx,CSSUnitValue:W.bx,CSSPerspective:W.e2,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.bd,MSStyleCSSProperties:W.bd,CSS2Properties:W.bd,CSSImageValue:W.ar,CSSKeywordValue:W.ar,CSSPositionValue:W.ar,CSSResourceValue:W.ar,CSSURLImageValue:W.ar,CSSStyleValue:W.ar,CSSMatrixComponent:W.as,CSSRotation:W.as,CSSScale:W.as,CSSSkew:W.as,CSSTranslation:W.as,CSSTransformComponent:W.as,CSSTransformValue:W.e4,CSSUnparsedValue:W.e5,DataTransferItemList:W.e7,HTMLDivElement:W.ce,Document:W.by,HTMLDocument:W.by,XMLDocument:W.by,DOMException:W.e8,ClientRectList:W.cf,DOMRectList:W.cf,DOMRectReadOnly:W.cg,DOMStringList:W.e9,DOMTokenList:W.ea,Element:W.R,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.c,Accelerometer:W.c,AccessibleNode:W.c,AmbientLightSensor:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,Gyroscope:W.c,XMLHttpRequest:W.c,XMLHttpRequestEventTarget:W.c,XMLHttpRequestUpload:W.c,LinearAccelerationSensor:W.c,Magnetometer:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStreamTrack:W.c,MIDIAccess:W.c,MIDIInput:W.c,MIDIOutput:W.c,MIDIPort:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,OrientationSensor:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnection:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RelativeOrientationSensor:W.c,RemotePlayback:W.c,RTCDataChannel:W.c,DataChannel:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,Sensor:W.c,ServiceWorker:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,WebSocket:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,File:W.a_,FileList:W.bA,FileWriter:W.eg,HTMLFormElement:W.eh,Gamepad:W.a6,History:W.ej,HTMLCollection:W.bB,HTMLFormControlsCollection:W.bB,HTMLOptionsCollection:W.bB,ImageData:W.bC,KeyboardEvent:W.au,Location:W.cq,HTMLAudioElement:W.bD,HTMLMediaElement:W.bD,MediaList:W.eD,MediaStream:W.ak,MessagePort:W.bE,MIDIInputMap:W.eF,MIDIOutputMap:W.eH,MimeType:W.a8,MimeTypeArray:W.eJ,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.cw,WorkerNavigator:W.bH,NavigatorConcurrentHardware:W.bH,NavigatorUserMediaError:W.aF,DocumentFragment:W.v,ShadowRoot:W.v,DocumentType:W.v,Node:W.v,NodeList:W.bJ,RadioNodeList:W.bJ,Plugin:W.a9,PluginArray:W.f4,RTCStatsReport:W.fb,HTMLSelectElement:W.fe,SourceBuffer:W.aa,SourceBufferList:W.fh,SpeechGrammar:W.ab,SpeechGrammarList:W.fj,SpeechRecognitionResult:W.ac,Storage:W.fo,CSSStyleSheet:W.a1,StyleSheet:W.a1,HTMLTableElement:W.cF,HTMLTableRowElement:W.fx,HTMLTableSectionElement:W.fy,HTMLTemplateElement:W.bR,TextTrack:W.ad,TextTrackCue:W.a2,VTTCue:W.a2,TextTrackCueList:W.fA,TextTrackList:W.fB,TimeRanges:W.fC,Touch:W.ae,TouchList:W.fD,TrackDefaultList:W.fE,CompositionEvent:W.aH,FocusEvent:W.aH,TextEvent:W.aH,TouchEvent:W.aH,UIEvent:W.aH,URL:W.fM,HTMLVideoElement:W.aJ,VideoTrackList:W.fN,WheelEvent:W.am,Window:W.bT,DOMWindow:W.bT,Attr:W.bU,CSSRuleList:W.fW,ClientRect:W.cS,DOMRect:W.cS,GamepadList:W.hf,NamedNodeMap:W.d8,MozNamedAttrMap:W.d8,SpeechRecognitionResultList:W.hr,StyleSheetList:W.hv,SVGLength:P.av,SVGLengthList:P.es,SVGNumber:P.aw,SVGNumberList:P.f_,SVGPointList:P.f5,SVGScriptElement:P.bO,SVGStringList:P.fw,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.ax,SVGTransformList:P.fF,AudioBuffer:P.dU,AudioParamMap:P.dV,AudioTrackList:P.dX,AudioContext:P.b8,webkitAudioContext:P.b8,BaseAudioContext:P.b8,OfflineAudioContext:P.f0,WebGLBuffer:P.cc,WebGLFramebuffer:P.cj,WebGLProgram:P.cy,WebGLRenderingContext:P.f9,WebGL2RenderingContext:P.fa,WebGLShader:P.cB,WebGLTexture:P.cG,WebGLUniformLocation:P.cL,WebGLVertexArrayObject:P.cM,SQLResultSetRowList:P.fk})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,NavigatorAutomationInformation:true,NavigatorCookies:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,Document:true,HTMLDocument:true,XMLDocument:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MediaStream:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,WorkerNavigator:true,NavigatorConcurrentHardware:false,NavigatorUserMediaError:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.bY.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
W.bZ.$nativeSuperclassTag="EventTarget"
W.c_.$nativeSuperclassTag="EventTarget"
W.c0.$nativeSuperclassTag="EventTarget"
W.c1.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(U.jr,[])
else U.jr([])})})()
//# sourceMappingURL=camera_overlay.dart.js.map
