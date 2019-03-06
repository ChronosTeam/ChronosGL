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
a[c]=function(){a[c]=function(){H.lZ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.hX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.hX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.hX(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={hM:function hM(){},
iC:function(){return new P.bC("No element")},
kU:function(){return new P.bC("Too many elements")},
lb:function(a,b,c){H.z(a,"$ib",[c],"$ab")
H.m(b,{func:1,ret:P.C,args:[c,c]})
H.ct(a,0,J.bh(a)-1,b,c)},
ct:function(a,b,c,d,e){H.z(a,"$ib",[e],"$ab")
H.m(d,{func:1,ret:P.C,args:[e,e]})
if(c-b<=32)H.la(a,b,c,d,e)
else H.l9(a,b,c,d,e)},
la:function(a,b,c,d,e){var u,t,s,r,q
H.z(a,"$ib",[e],"$ab")
H.m(d,{func:1,ret:P.C,args:[e,e]})
for(u=b+1,t=J.bd(a);u<=c;++u){s=t.i(a,u)
r=u
while(!0){if(!(r>b&&J.ao(d.$2(t.i(a,r-1),s),0)))break
q=r-1
t.h(a,r,t.i(a,q))
r=q}t.h(a,r,s)}},
l9:function(a3,a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
H.z(a3,"$ib",[a7],"$ab")
H.m(a6,{func:1,ret:P.C,args:[a7,a7]})
u=C.c.P(a5-a4+1,6)
t=a4+u
s=a5-u
r=C.c.P(a4+a5,2)
q=r-u
p=r+u
o=J.bd(a3)
n=o.i(a3,t)
m=o.i(a3,q)
l=o.i(a3,r)
k=o.i(a3,p)
j=o.i(a3,s)
if(J.ao(a6.$2(n,m),0)){i=m
m=n
n=i}if(J.ao(a6.$2(k,j),0)){i=j
j=k
k=i}if(J.ao(a6.$2(n,l),0)){i=l
l=n
n=i}if(J.ao(a6.$2(m,l),0)){i=l
l=m
m=i}if(J.ao(a6.$2(n,k),0)){i=k
k=n
n=i}if(J.ao(a6.$2(l,k),0)){i=k
k=l
l=i}if(J.ao(a6.$2(m,j),0)){i=j
j=m
m=i}if(J.ao(a6.$2(m,l),0)){i=l
l=m
m=i}if(J.ao(a6.$2(k,j),0)){i=j
j=k
k=i}o.h(a3,t,n)
o.h(a3,r,l)
o.h(a3,s,j)
o.h(a3,q,o.i(a3,a4))
o.h(a3,p,o.i(a3,a5))
h=a4+1
g=a5-1
if(J.aW(a6.$2(m,k),0)){for(f=h;f<=g;++f){e=o.i(a3,f)
d=a6.$2(e,m)
if(d===0)continue
if(typeof d!=="number")return d.N()
if(d<0){if(f!==h){o.h(a3,f,o.i(a3,h))
o.h(a3,h,e)}++h}else for(;!0;){d=a6.$2(o.i(a3,g),m)
if(typeof d!=="number")return d.M()
if(d>0){--g
continue}else{c=g-1
if(d<0){o.h(a3,f,o.i(a3,h))
b=h+1
o.h(a3,h,o.i(a3,g))
o.h(a3,g,e)
g=c
h=b
break}else{o.h(a3,f,o.i(a3,g))
o.h(a3,g,e)
g=c
break}}}}a=!0}else{for(f=h;f<=g;++f){e=o.i(a3,f)
a0=a6.$2(e,m)
if(typeof a0!=="number")return a0.N()
if(a0<0){if(f!==h){o.h(a3,f,o.i(a3,h))
o.h(a3,h,e)}++h}else{a1=a6.$2(e,k)
if(typeof a1!=="number")return a1.M()
if(a1>0)for(;!0;){d=a6.$2(o.i(a3,g),k)
if(typeof d!=="number")return d.M()
if(d>0){--g
if(g<f)break
continue}else{d=a6.$2(o.i(a3,g),m)
if(typeof d!=="number")return d.N()
c=g-1
if(d<0){o.h(a3,f,o.i(a3,h))
b=h+1
o.h(a3,h,o.i(a3,g))
o.h(a3,g,e)
h=b}else{o.h(a3,f,o.i(a3,g))
o.h(a3,g,e)}g=c
break}}}}a=!1}a2=h-1
o.h(a3,a4,o.i(a3,a2))
o.h(a3,a2,m)
a2=g+1
o.h(a3,a5,o.i(a3,a2))
o.h(a3,a2,k)
H.ct(a3,a4,h-2,a6,a7)
H.ct(a3,g+2,a5,a6,a7)
if(a)return
if(h<t&&g>s){for(;J.aW(a6.$2(o.i(a3,h),m),0);)++h
for(;J.aW(a6.$2(o.i(a3,g),k),0);)--g
for(f=h;f<=g;++f){e=o.i(a3,f)
if(a6.$2(e,m)===0){if(f!==h){o.h(a3,f,o.i(a3,h))
o.h(a3,h,e)}++h}else if(a6.$2(e,k)===0)for(;!0;)if(a6.$2(o.i(a3,g),k)===0){--g
if(g<f)break
continue}else{d=a6.$2(o.i(a3,g),m)
if(typeof d!=="number")return d.N()
c=g-1
if(d<0){o.h(a3,f,o.i(a3,h))
b=h+1
o.h(a3,h,o.i(a3,g))
o.h(a3,g,e)
h=b}else{o.h(a3,f,o.i(a3,g))
o.h(a3,g,e)}g=c
break}}H.ct(a3,h,g,a6,a7)}else H.ct(a3,h,g,a6,a7)},
e3:function e3(){},
b5:function b5(){},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
eo:function eo(a,b,c){this.a=a
this.b=b
this.$ti=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.$ti=c},
fq:function fq(a,b,c){this.a=a
this.b=b
this.$ti=c},
b3:function b3(){},
aV:function(a){var u,t
u=H.x(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
lJ:function(a){return v.types[H.X(a)]},
lQ:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.I(a).$iy},
h:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.bZ(a)
if(typeof u!=="string")throw H.e(H.dy(a))
return u},
bz:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bA:function(a){return H.kZ(a)+H.hh(H.aG(a),0,null)},
kZ:function(a){var u,t,s,r,q,p,o,n,m
u=J.I(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.N||!!u.$iaD){p=C.u(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.aV(r.length>1&&C.i.aa(r,0)===36?C.i.bR(r,1):r)},
b6:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
l5:function(a){var u=H.b6(a).getFullYear()+0
return u},
l3:function(a){var u=H.b6(a).getMonth()+1
return u},
l_:function(a){var u=H.b6(a).getDate()+0
return u},
l0:function(a){var u=H.b6(a).getHours()+0
return u},
l2:function(a){var u=H.b6(a).getMinutes()+0
return u},
l4:function(a){var u=H.b6(a).getSeconds()+0
return u},
l1:function(a){var u=H.b6(a).getMilliseconds()+0
return u},
hq:function(a){throw H.e(H.dy(a))},
r:function(a,b){if(a==null)J.bh(a)
throw H.e(H.bU(a,b))},
bU:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,"index",null)
u=H.X(J.bh(a))
if(!(b<0)){if(typeof u!=="number")return H.hq(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,"index",null,u)
return P.eN(b,"index")},
dy:function(a){return new P.ap(!0,a,null,null)},
e:function(a){var u
if(a==null)a=new P.by()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jc})
u.name=""}else u.toString=H.jc
return u},
jc:function(){return J.bZ(this.dartException)},
a0:function(a){throw H.e(a)},
a_:function(a){throw H.e(P.b0(a))},
ax:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.i([],[P.c])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fh(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fi:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
iK:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
iG:function(a,b){return new H.eH(a,b==null?null:b.method)},
hN:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.ee(a,t,u?null:b.receiver)},
a7:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.hz(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.c.aW(s,16)&8191)===10)switch(r){case 438:return u.$1(H.hN(H.h(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.iG(H.h(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.jv()
p=$.jw()
o=$.jx()
n=$.jy()
m=$.jB()
l=$.jC()
k=$.jA()
$.jz()
j=$.jE()
i=$.jD()
h=q.G(t)
if(h!=null)return u.$1(H.hN(H.x(t),h))
else{h=p.G(t)
if(h!=null){h.method="call"
return u.$1(H.hN(H.x(t),h))}else{h=o.G(t)
if(h==null){h=n.G(t)
if(h==null){h=m.G(t)
if(h==null){h=l.G(t)
if(h==null){h=k.G(t)
if(h==null){h=n.G(t)
if(h==null){h=j.G(t)
if(h==null){h=i.G(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.iG(H.x(t),h))}}return u.$1(new H.fm(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.cu()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.ap(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.cu()
return a},
be:function(a){var u
if(a==null)return new H.dc(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dc(a)},
lF:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.h(0,a[t],a[s])}return b},
lP:function(a,b,c,d,e,f){H.k(a,"$iaM")
switch(H.X(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.iA("Unsupported number of arguments for wrapped closure"))},
aF:function(a,b){var u
H.X(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lP)
a.$identity=u
return u},
kI:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j
u=b[0]
t=u.$callName
s=e?Object.create(new H.eX().constructor.prototype):Object.create(new H.bj(null,null,null,null).constructor.prototype)
s.$initialize=s.constructor
if(e)r=function static_tear_off(){this.$initialize()}
else{q=$.aq
if(typeof q!=="number")return q.E()
$.aq=q+1
q=new Function("a,b,c,d"+q,"this.$initialize(a,b,c,d"+q+")")
r=q}s.constructor=r
r.prototype=s
if(!e){p=H.is(a,u,f)
p.$reflectionInfo=d}else{s.$static_name=g
p=u}if(typeof d=="number")o=function(h,i){return function(){return h(i)}}(H.lJ,d)
else if(typeof d=="function")if(e)o=d
else{n=f?H.iq:H.hH
o=function(h,i){return function(){return h.apply({$receiver:i(this)},arguments)}}(d,n)}else throw H.e("Error in reflectionInfo.")
s.$S=o
s[t]=p
for(m=p,l=1;l<b.length;++l){k=b[l]
j=k.$callName
if(j!=null){k=e?k:H.is(a,k,f)
s[j]=k}if(l===c){k.$reflectionInfo=d
m=k}}s.$C=m
s.$R=u.$R
s.$D=u.$D
return r},
kF:function(a,b,c,d){var u=H.hH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
is:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kH(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kF(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.E()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bk
if(q==null){q=H.dO("self")
$.bk=q}return new Function(r+H.h(q)+";return "+p+"."+H.h(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.E()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bk
if(q==null){q=H.dO("self")
$.bk=q}return new Function(r+H.h(q)+"."+H.h(u)+"("+o+");}")()},
kG:function(a,b,c,d){var u,t
u=H.hH
t=H.iq
switch(b?-1:a){case 0:throw H.e(H.l8("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kH:function(a,b){var u,t,s,r,q,p,o,n
u=$.bk
if(u==null){u=H.dO("self")
$.bk=u}t=$.ip
if(t==null){t=H.dO("receiver")
$.ip=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.kG(r,!p,s,b)
if(r===1){u="return function(){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+");"
t=$.aq
if(typeof t!=="number")return t.E()
$.aq=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.h(u)+"."+H.h(s)+"(this."+H.h(t)+", "+n+");"
t=$.aq
if(typeof t!=="number")return t.E()
$.aq=t+1
return new Function(u+t+"}")()},
hX:function(a,b,c,d,e,f,g){return H.kI(a,b,H.X(c),d,!!e,!!f,g)},
hH:function(a){return a.a},
iq:function(a){return a.c},
dO:function(a){var u,t,s,r,q
u=new H.bj("self","target","receiver","name")
t=J.iD(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
x:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.al(a,"String"))},
j1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.al(a,"double"))},
i2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.al(a,"num"))},
hk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.al(a,"bool"))},
X:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.al(a,"int"))},
i3:function(a,b){throw H.e(H.al(a,H.aV(H.x(b).substring(2))))},
lW:function(a,b){throw H.e(H.ir(a,H.aV(H.x(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.I(a)[b])return a
H.i3(a,b)},
az:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else u=!0
if(u)return a
H.lW(a,b)},
j9:function(a,b){if(a==null)return a
if(typeof a==="string")return a
if(typeof a==="number")return a
if(J.I(a)[b])return a
H.i3(a,b)},
dA:function(a){if(a==null)return a
if(!!J.I(a).$ib)return a
throw H.e(H.al(a,"List<dynamic>"))},
lR:function(a,b){var u
if(a==null)return a
u=J.I(a)
if(!!u.$ib)return a
if(u[b])return a
H.i3(a,b)},
hY:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.X(u)]
else return a.$S()}return},
dz:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.hY(J.I(a))
if(u==null)return!1
return H.iS(u,null,b,null)},
m:function(a,b){var u,t
if(a==null)return a
if($.hT)return a
$.hT=!0
try{if(H.dz(a,b))return a
u=H.dB(b)
t=H.al(a,u)
throw H.e(t)}finally{$.hT=!1}},
bV:function(a,b){if(a!=null&&!H.hW(a,b))H.a0(H.al(a,H.dB(b)))
return a},
al:function(a,b){return new H.fj("TypeError: "+P.e5(a)+": type '"+H.iX(a)+"' is not a subtype of type '"+b+"'")},
ir:function(a,b){return new H.dQ("CastError: "+P.e5(a)+": type '"+H.iX(a)+"' is not a subtype of type '"+b+"'")},
iX:function(a){var u,t
u=J.I(a)
if(!!u.$ib_){t=H.hY(u)
if(t!=null)return H.dB(t)
return"Closure"}return H.bA(a)},
lZ:function(a){throw H.e(new P.dX(H.x(a)))},
l8:function(a){return new H.eT(a)},
j5:function(a){return v.getIsolateTag(a)},
i:function(a,b){a.$ti=b
return a},
aG:function(a){if(a==null)return
return a.$ti},
mL:function(a,b,c){return H.bf(a["$a"+H.h(c)],H.aG(b))},
bW:function(a,b,c,d){var u
H.x(c)
H.X(d)
u=H.bf(a["$a"+H.h(c)],H.aG(b))
return u==null?null:u[d]},
hZ:function(a,b,c){var u
H.x(b)
H.X(c)
u=H.bf(a["$a"+H.h(b)],H.aG(a))
return u==null?null:u[c]},
q:function(a,b){var u
H.X(b)
u=H.aG(a)
return u==null?null:u[b]},
dB:function(a){return H.aS(a,null)},
aS:function(a,b){var u,t
H.z(b,"$ib",[P.c],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aV(a[0].name)+H.hh(a,1,b)
if(typeof a=="function")return H.aV(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.X(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.r(b,t)
return H.h(b[t])}if('func' in a)return H.lq(a,b)
if('futureOr' in a)return"FutureOr<"+H.aS("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lq:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.c]
H.z(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.i([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.l(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.r(b,m)
o=C.i.E(o,b[m])
l=t[p]
if(l!=null&&l!==P.w)o+=" extends "+H.aS(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.aS(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.aS(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.aS(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.lE(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.x(u[g])
i=i+h+H.aS(d[c],b)+(" "+H.h(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
hh:function(a,b,c){var u,t,s,r,q,p
H.z(c,"$ib",[P.c],"$ab")
if(a==null)return""
u=new P.bD("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aS(p,c)}return"<"+u.k(0)+">"},
lI:function(a){var u,t,s,r
u=J.I(a)
if(!!u.$ib_){t=H.hY(u)
if(t!=null)return t}s=u.constructor
if(a==null)return s
if(typeof a!="object")return s
r=H.aG(a)
if(r!=null){r=r.slice()
r.splice(0,0,s)
s=r}return s},
bf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
aT:function(a,b,c,d){var u,t
H.x(b)
H.dA(c)
H.x(d)
if(a==null)return!1
u=H.aG(a)
t=J.I(a)
if(t[b]==null)return!1
return H.j_(H.bf(t[d],u),null,c,null)},
dC:function(a,b,c,d){H.x(b)
H.dA(c)
H.x(d)
if(a==null)return a
if(H.aT(a,b,c,d))return a
throw H.e(H.ir(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aV(b.substring(2))+H.hh(c,0,null),v.mangledGlobalNames)))},
z:function(a,b,c,d){H.x(b)
H.dA(c)
H.x(d)
if(a==null)return a
if(H.aT(a,b,c,d))return a
throw H.e(H.al(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aV(b.substring(2))+H.hh(c,0,null),v.mangledGlobalNames)))},
j_:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ai(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ai(a[t],b,c[t],d))return!1
return!0},
mE:function(a,b,c){return a.apply(b,H.bf(J.I(b)["$a"+H.h(c)],H.aG(b)))},
j7:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="w"||a.name==="E"||a===-1||a===-2||H.j7(u)}return!1},
hW:function(a,b){var u,t
if(a==null)return b==null||b.name==="w"||b.name==="E"||b===-1||b===-2||H.j7(b)
if(b==null||b===-1||b.name==="w"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.hW(a,"type" in b?b.type:null))return!0
if('func' in b)return H.dz(a,b)}u=J.I(a).constructor
t=H.aG(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ai(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.hW(a,b))throw H.e(H.al(a,H.dB(b)))
return a},
ai:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="w"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="w"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ai(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="E")return!0
if('func' in c)return H.iS(a,b,c,d)
if('func' in a)return c.name==="aM"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ai("type" in a?a.type:null,b,s,d)
else if(H.ai(a,b,s,d))return!0
else{if(!('$i'+"at" in t.prototype))return!1
r=t.prototype["$a"+"at"]
q=H.bf(r,u?a.slice(1):null)
return H.ai(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.j_(H.bf(m,u),b,p,d)},
iS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ai(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ai(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ai(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ai(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.lV(h,b,g,d)},
lV:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ai(c[r],d,a[r],b))return!1}return!0},
mH:function(a,b,c){Object.defineProperty(a,H.x(b),{value:c,enumerable:false,writable:true,configurable:true})},
lS:function(a){var u,t,s,r,q,p
u=H.x($.j6.$1(a))
t=$.hm[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hu[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.x($.iZ.$2(a,u))
if(u!=null){t=$.hm[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.hu[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.hx(s)
$.hm[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.hu[u]=s
return s}if(q==="-"){p=H.hx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.ja(a,s)
if(q==="*")throw H.e(P.hR(u))
if(v.leafTags[u]===true){p=H.hx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.ja(a,s)},
ja:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.i1(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
hx:function(a){return J.i1(a,!1,null,!!a.$iy)},
lU:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.hx(u)
else return J.i1(u,c,null,null)},
lN:function(){if(!0===$.i0)return
$.i0=!0
H.lO()},
lO:function(){var u,t,s,r,q,p,o,n
$.hm=Object.create(null)
$.hu=Object.create(null)
H.lM()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jb.$1(q)
if(p!=null){o=H.lU(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lM:function(){var u,t,s,r,q,p,o
u=C.F()
u=H.bc(C.G,H.bc(C.H,H.bc(C.v,H.bc(C.v,H.bc(C.I,H.bc(C.J,H.bc(C.K(C.u),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.j6=new H.hr(q)
$.iZ=new H.hs(p)
$.jb=new H.ht(o)},
bc:function(a,b){return a(b)||b},
lY:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
fh:function fh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eH:function eH(a,b){this.a=a
this.b=b},
ee:function ee(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a){this.a=a},
hz:function hz(a){this.a=a},
dc:function dc(a){this.a=a
this.b=null},
b_:function b_(){},
fa:function fa(){},
eX:function eX(){},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a){this.a=a},
dQ:function dQ(a){this.a=a},
eT:function eT(a){this.a=a},
cB:function cB(a){this.a=a
this.d=this.b=null},
ce:function ce(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eg:function eg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
aa:function aa(a,b){this.a=a
this.$ti=b},
eh:function eh(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
hg:function(a){var u,t
if(!!J.I(a).$iv)return a
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)C.a.h(u,t,a[t])
return u},
ay:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.bU(b,a))},
bu:function bu(){},
aQ:function aQ(){},
cj:function cj(){},
bv:function bv(){},
ck:function ck(){},
ci:function ci(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
cl:function cl(){},
cm:function cm(){},
eC:function eC(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
lE:function(a){return J.kV(a?Object.keys(a):[],null)},
hy:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
i1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ho:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.i0==null){H.lN()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.e(P.hR("Return interceptor for "+H.h(t(a,u))))}r=a.constructor
q=r==null?null:r[$.i4()]
if(q!=null)return q
q=H.lS(a)
if(q!=null)return q
if(typeof a=="function")return C.O
t=Object.getPrototypeOf(a)
if(t==null)return C.z
if(t===Object.prototype)return C.z
if(typeof r=="function"){Object.defineProperty(r,$.i4(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
kV:function(a,b){return J.iD(H.i(a,[b]))},
iD:function(a){H.dA(a)
a.fixed$length=Array
return a},
kW:function(a,b){return J.k3(H.j9(a,"$ia1"),H.j9(b,"$ia1"))},
I:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cb.prototype
return J.ca.prototype}if(typeof a=="string")return J.aO.prototype
if(a==null)return J.cc.prototype
if(typeof a=="boolean")return J.ed.prototype
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.w)return a
return J.ho(a)},
bd:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.w)return a
return J.ho(a)},
j3:function(a){if(a==null)return a
if(a.constructor==Array)return J.aN.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.w)return a
return J.ho(a)},
lG:function(a){if(typeof a=="number")return J.b4.prototype
if(a==null)return a
if(!(a instanceof P.w))return J.aD.prototype
return a},
lH:function(a){if(typeof a=="number")return J.b4.prototype
if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.w))return J.aD.prototype
return a},
j4:function(a){if(typeof a=="string")return J.aO.prototype
if(a==null)return a
if(!(a instanceof P.w))return J.aD.prototype
return a},
o:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aP.prototype
return a}if(a instanceof P.w)return a
return J.ho(a)},
hn:function(a){if(a==null)return a
if(!(a instanceof P.w))return J.aD.prototype
return a},
aW:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).B(a,b)},
ao:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lG(a).M(a,b)},
bY:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lQ(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bd(a).i(a,b)},
i8:function(a,b){return J.j4(a).aa(a,b)},
jW:function(a,b,c,d){return J.o(a).cn(a,b,c,d)},
i9:function(a,b){return J.o(a).aY(a,b)},
jX:function(a,b,c,d){return J.o(a).cu(a,b,c,d)},
ia:function(a,b,c){return J.o(a).b_(a,b,c)},
jY:function(a,b){return J.o(a).cA(a,b)},
hB:function(a,b,c){return J.o(a).b0(a,b,c)},
hC:function(a,b,c){return J.o(a).b2(a,b,c)},
aH:function(a,b,c){return J.o(a).b3(a,b,c)},
dD:function(a,b){return J.o(a).cD(a,b)},
jZ:function(a,b){return J.o(a).b4(a,b)},
k_:function(a,b,c){return J.o(a).b5(a,b,c)},
ib:function(a,b,c,d){return J.o(a).b6(a,b,c,d)},
k0:function(a,b){return J.o(a).b8(a,b)},
k1:function(a,b){return J.o(a).b9(a,b)},
k2:function(a,b,c,d,e){return J.o(a).ba(a,b,c,d,e)},
k3:function(a,b){return J.lH(a).S(a,b)},
hD:function(a,b,c){return J.bd(a).cH(a,b,c)},
hE:function(a){return J.o(a).bc(a)},
k4:function(a){return J.o(a).bd(a)},
k5:function(a){return J.o(a).be(a)},
ic:function(a){return J.o(a).bg(a)},
k6:function(a){return J.o(a).cK(a)},
k7:function(a,b){return J.o(a).bh(a,b)},
hF:function(a,b){return J.o(a).bi(a,b)},
k8:function(a,b,c,d){return J.o(a).bj(a,b,c,d)},
k9:function(a,b,c,d,e){return J.o(a).cL(a,b,c,d,e)},
ka:function(a,b,c,d,e){return J.o(a).bk(a,b,c,d,e)},
kb:function(a,b,c,d,e,f){return J.o(a).cM(a,b,c,d,e,f)},
kc:function(a,b){return J.j3(a).p(a,b)},
dE:function(a,b){return J.o(a).bl(a,b)},
kd:function(a,b){return J.o(a).bm(a,b)},
ke:function(a){return J.o(a).cN(a)},
kf:function(a,b){return J.o(a).w(a,b)},
id:function(a,b,c,d,e,f){return J.o(a).bp(a,b,c,d,e,f)},
kg:function(a){return J.o(a).gcz(a)},
bg:function(a){return J.I(a).gm(a)},
dF:function(a){return J.j3(a).gq(a)},
bh:function(a){return J.bd(a).gj(a)},
kh:function(a){return J.o(a).gcZ(a)},
ki:function(a){return J.hn(a).gdd(a)},
kj:function(a){return J.hn(a).gbK(a)},
kk:function(a){return J.hn(a).gbL(a)},
kl:function(a){return J.hn(a).gd4(a)},
km:function(a){return J.o(a).a5(a)},
ie:function(a){return J.o(a).an(a)},
kn:function(a,b){return J.o(a).ao(a,b)},
ko:function(a,b,c){return J.o(a).ap(a,b,c)},
ig:function(a,b,c){return J.o(a).as(a,b,c)},
kp:function(a,b){return J.o(a).bq(a,b)},
kq:function(a,b,c){return J.o(a).br(a,b,c)},
ih:function(a){return J.o(a).cV(a)},
kr:function(a,b,c,d){return J.o(a).ax(a,b,c,d)},
ks:function(a,b,c,d,e,f,g){return J.o(a).bt(a,b,c,d,e,f,g)},
kt:function(a,b,c,d){return J.o(a).bu(a,b,c,d)},
dG:function(a,b,c,d){return J.o(a).bv(a,b,c,d)},
ku:function(a,b,c,d,e,f){return J.o(a).d_(a,b,c,d,e,f)},
kv:function(a){return J.j4(a).d0(a)},
bZ:function(a){return J.I(a).k(a)},
kw:function(a,b,c,d){return J.o(a).d2(a,b,c,d)},
kx:function(a,b,c){return J.o(a).bx(a,b,c)},
ky:function(a,b,c){return J.o(a).by(a,b,c)},
hG:function(a,b,c){return J.o(a).bz(a,b,c)},
kz:function(a,b,c){return J.o(a).bA(a,b,c)},
ii:function(a,b,c){return J.o(a).bB(a,b,c)},
ij:function(a,b,c){return J.o(a).bC(a,b,c)},
ik:function(a,b,c){return J.o(a).bD(a,b,c)},
il:function(a,b,c,d){return J.o(a).bE(a,b,c,d)},
im:function(a,b,c,d){return J.o(a).bF(a,b,c,d)},
kA:function(a,b){return J.o(a).bG(a,b)},
kB:function(a,b,c){return J.o(a).d3(a,b,c)},
kC:function(a,b,c,d,e,f,g){return J.o(a).bH(a,b,c,d,e,f,g)},
kD:function(a,b,c,d,e){return J.o(a).bJ(a,b,c,d,e)},
a:function a(){},
ed:function ed(){},
cc:function cc(){},
cd:function cd(){},
eK:function eK(){},
aD:function aD(){},
aP:function aP(){},
aN:function aN(a){this.$ti=a},
hL:function hL(a){this.$ti=a},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
b4:function b4(){},
cb:function cb(){},
ca:function ca(){},
aO:function aO(){}},P={
le:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.ly()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.aF(new P.ft(u),1)).observe(t,{childList:true})
return new P.fs(u,t,s)}else if(self.setImmediate!=null)return P.lz()
return P.lA()},
lf:function(a){self.scheduleImmediate(H.aF(new P.fu(H.m(a,{func:1,ret:-1})),0))},
lg:function(a){self.setImmediate(H.aF(new P.fv(H.m(a,{func:1,ret:-1})),0))},
lh:function(a){H.m(a,{func:1,ret:-1})
P.lo(0,a)},
lo:function(a,b){var u=new P.hc()
u.c9(a,b)
return u},
iO:function(a,b){var u,t,s
b.a=1
try{a.bw(new P.fJ(b),new P.fK(b),null)}catch(s){u=H.a7(s)
t=H.be(s)
P.lX(new P.fL(b,u,t))}},
fI:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iS")
if(u>=4){t=b.a_()
b.a=a.a
b.c=a.c
P.b9(b,t)}else{t=H.k(b.c,"$iam")
b.a=2
b.c=a
a.aV(t)}},
b9:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iR")
t=t.b
p=q.a
o=q.b
t.toString
P.hi(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b9(u.a,b)}t=u.a
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
if(k){H.k(m,"$iR")
t=t.b
p=m.a
o=m.b
t.toString
P.hi(null,null,t,p,o)
return}j=$.H
if(j!=l)$.H=l
else j=null
t=b.c
if(t===8)new P.fQ(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.fP(s,b,m).$0()}else if((t&2)!==0)new P.fO(u,s,b).$0()
if(j!=null)$.H=j
t=s.b
if(!!J.I(t).$iat){if(t.a>=4){i=H.k(o.c,"$iam")
o.c=null
b=o.a0(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.fI(t,o)
return}}h=b.b
i=H.k(h.c,"$iam")
h.c=null
b=h.a0(i)
t=s.a
p=s.b
if(!t){H.A(p,H.q(h,0))
h.a=4
h.c=p}else{H.k(p,"$iR")
h.a=8
h.c=p}u.a=h
t=h}},
iT:function(a,b){if(H.dz(a,{func:1,args:[P.w,P.Y]})){b.toString
return H.m(a,{func:1,ret:null,args:[P.w,P.Y]})}if(H.dz(a,{func:1,args:[P.w]})){b.toString
return H.m(a,{func:1,ret:null,args:[P.w]})}throw H.e(P.io(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lt:function(){var u,t
for(;u=$.ba,u!=null;){$.bT=null
t=u.b
$.ba=t
if(t==null)$.bS=null
u.a.$0()}},
lw:function(){$.hU=!0
try{P.lt()}finally{$.bT=null
$.hU=!1
if($.ba!=null)$.i5().$1(P.j0())}},
iW:function(a){var u=new P.cF(H.m(a,{func:1,ret:-1}))
if($.ba==null){$.bS=u
$.ba=u
if(!$.hU)$.i5().$1(P.j0())}else{$.bS.b=u
$.bS=u}},
lv:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
u=$.ba
if(u==null){P.iW(a)
$.bT=$.bS
return}t=new P.cF(a)
s=$.bT
if(s==null){t.b=u
$.bT=t
$.ba=t}else{t.b=s.b
s.b=t
$.bT=t
if(t.b==null)$.bS=t}},
lX:function(a){var u,t
u={func:1,ret:-1}
H.m(a,u)
t=$.H
if(C.e===t){P.bb(null,null,C.e,a)
return}t.toString
P.bb(null,null,t,H.m(t.b1(a),u))},
lp:function(a,b,c){a.cE(0)
b.Y(c)},
hi:function(a,b,c,d,e){var u={}
u.a=d
P.lv(new P.hj(u,e))},
iU:function(a,b,c,d,e){var u,t
H.m(d,{func:1,ret:e})
t=$.H
if(t===c)return d.$0()
$.H=c
u=t
try{t=d.$0()
return t}finally{$.H=u}},
iV:function(a,b,c,d,e,f,g){var u,t
H.m(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.H
if(t===c)return d.$1(e)
$.H=c
u=t
try{t=d.$1(e)
return t}finally{$.H=u}},
lu:function(a,b,c,d,e,f,g,h,i){var u,t
H.m(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.H
if(t===c)return d.$2(e,f)
$.H=c
u=t
try{t=d.$2(e,f)
return t}finally{$.H=u}},
bb:function(a,b,c,d){var u
H.m(d,{func:1,ret:-1})
u=C.e!==c
if(u)d=!(!u||!1)?c.b1(d):c.cB(d,-1)
P.iW(d)},
ft:function ft(a){this.a=a},
fs:function fs(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
hc:function hc(){},
hd:function hd(a,b){this.a=a
this.b=b},
fx:function fx(){},
cG:function cG(a,b){this.a=a
this.$ti=b},
h9:function h9(a,b){this.a=a
this.$ti=b},
am:function am(a,b,c,d,e){var _=this
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
fF:function fF(a,b){this.a=a
this.b=b},
fN:function fN(a,b){this.a=a
this.b=b},
fJ:function fJ(a){this.a=a},
fK:function fK(a){this.a=a},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
fH:function fH(a,b){this.a=a
this.b=b},
fM:function fM(a,b){this.a=a
this.b=b},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fQ:function fQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fR:function fR(a){this.a=a},
fP:function fP(a,b,c){this.a=a
this.b=b
this.c=c},
fO:function fO(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.a=a
this.b=null},
f1:function f1(){},
f5:function f5(a,b){this.a=a
this.b=b},
f6:function f6(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a){this.a=a},
f2:function f2(){},
R:function R(a,b){this.a=a
this.b=b},
hf:function hf(){},
hj:function hj(a,b){this.a=a
this.b=b},
fW:function fW(){},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
fX:function fX(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function(a,b,c){H.dA(a)
return H.z(H.lF(a,new H.ce([b,c])),"$iiE",[b,c],"$aiE")},
D:function(a,b){return new H.ce([a,b])},
cf:function(a){return new P.fU([a])},
hS:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lm:function(a,b,c){var u=new P.cU(a,b,[c])
u.c=a.e
return u},
kT:function(a,b,c){var u,t
if(P.hV(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.i([],[P.c])
t=$.bX()
C.a.l(t,a)
try{P.ls(a,u)}finally{if(0>=t.length)return H.r(t,-1)
t.pop()}t=P.iI(b,H.lR(u,"$il"),", ")+c
return t.charCodeAt(0)==0?t:t},
hK:function(a,b,c){var u,t,s
if(P.hV(a))return b+"..."+c
u=new P.bD(b)
t=$.bX()
C.a.l(t,a)
try{s=u
s.a=P.iI(s.a,a,", ")}finally{if(0>=t.length)return H.r(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
hV:function(a){var u,t
for(u=0;t=$.bX(),u<t.length;++u)if(a===t[u])return!0
return!1},
ls:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.z(b,"$ib",[P.c],"$ab")
u=a.gq(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.n())return
r=H.h(u.gt(u))
C.a.l(b,r)
t+=r.length+2;++s}if(!u.n()){if(s<=5)return
if(0>=b.length)return H.r(b,-1)
q=b.pop()
if(0>=b.length)return H.r(b,-1)
p=b.pop()}else{o=u.gt(u);++s
if(!u.n()){if(s<=4){C.a.l(b,H.h(o))
return}q=H.h(o)
if(0>=b.length)return H.r(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gt(u);++s
for(;u.n();o=n,n=m){m=u.gt(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.r(b,-1)
t-=b.pop().length+2;--s}C.a.l(b,"...")
return}}p=H.h(o)
q=H.h(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.r(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.l(b,l)
C.a.l(b,p)
C.a.l(b,q)},
hP:function(a,b){var u,t,s
u=P.cf(b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.a_)(a),++s)u.l(0,H.A(a[s],b))
return u},
iF:function(a){var u,t
t={}
if(P.hV(a))return"{...}"
u=new P.bD("")
try{C.a.l($.bX(),a)
u.a+="{"
t.a=!0
J.kf(a,new P.en(t,u))
u.a+="}"}finally{t=$.bX()
if(0>=t.length)return H.r(t,-1)
t.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
fU:function fU(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bJ:function bJ(a){this.a=a
this.c=this.b=null},
cU:function cU(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ei:function ei(){},
p:function p(){},
em:function em(){},
en:function en(a,b){this.a=a
this.b=b},
T:function T(){},
h0:function h0(){},
cV:function cV(){},
kO:function(a){if(a instanceof H.b_)return a.k(0)
return"Instance of '"+H.bA(a)+"'"},
iI:function(a,b,c){var u=J.dF(b)
if(!u.n())return a
if(c.length===0){do a+=H.h(u.gt(u))
while(u.n())}else{a+=H.h(u.gt(u))
for(;u.n();)a=a+c+H.h(u.gt(u))}return a},
kJ:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c1:function(a){if(a>=10)return""+a
return"0"+a},
kM:function(a,b){return new P.aL(1e6*b+1000*a)},
e5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bZ(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kO(a)},
kE:function(a){return new P.ap(!1,null,null,a)},
io:function(a,b,c){return new P.ap(!0,a,b,c)},
eN:function(a,b){return new P.cq(null,null,!0,a,b,"Value not in range")},
hQ:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
l6:function(a,b){if(typeof a!=="number")return a.N()
if(a<0)throw H.e(P.hQ(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=H.X(e==null?J.bh(b):e)
return new P.ec(u,!0,a,c,"Index out of range")},
G:function(a){return new P.fn(a)},
hR:function(a){return new P.fl(a)},
cv:function(a){return new P.bC(a)},
b0:function(a){return new P.dS(a)},
iA:function(a){return new P.fE(a)},
aU:function(a){H.hy(H.h(a))},
Q:function Q(){},
aK:function aK(a,b){this.a=a
this.b=b},
a6:function a6(){},
aL:function aL(a){this.a=a},
e1:function e1(){},
e2:function e2(){},
b2:function b2(){},
by:function by(){},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cq:function cq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ec:function ec(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
fn:function fn(a){this.a=a},
fl:function fl(a){this.a=a},
bC:function bC(a){this.a=a},
dS:function dS(a){this.a=a},
cu:function cu(){},
dX:function dX(a){this.a=a},
fE:function fE(a){this.a=a},
aM:function aM(){},
C:function C(){},
l:function l(){},
aB:function aB(){},
b:function b(){},
M:function M(){},
E:function E(){},
K:function K(){},
w:function w(){},
Y:function Y(){},
c:function c(){},
bD:function bD(a){this.a=a},
aj:function(a){var u,t,s,r,q
if(a==null)return
u=P.D(P.c,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.a_)(t),++r){q=H.x(t[r])
u.h(0,q,a[q])}return u},
lC:function(a){var u={}
a.w(0,new P.hl(u))
return u},
ix:function(){var u=$.iw
if(u==null){u=J.hD(window.navigator.userAgent,"Opera",0)
$.iw=u}return u},
kL:function(){var u,t
u=$.it
if(u!=null)return u
t=$.iu
if(t==null){t=J.hD(window.navigator.userAgent,"Firefox",0)
$.iu=t}if(t)u="-moz-"
else{t=$.iv
if(t==null){t=!P.ix()&&J.hD(window.navigator.userAgent,"Trident/",0)
$.iv=t}if(t)u="-ms-"
else u=P.ix()?"-o-":"-webkit-"}$.it=u
return u},
h4:function h4(){},
h6:function h6(a,b){this.a=a
this.b=b},
hl:function hl(a){this.a=a},
h5:function h5(a,b){this.a=a
this.b=b},
fV:function fV(){},
U:function U(){},
au:function au(){},
ef:function ef(){},
av:function av(){},
eI:function eI(){},
eM:function eM(){},
bB:function bB(){},
f7:function f7(){},
j:function j(){},
aw:function aw(){},
fg:function fg(){},
cS:function cS(){},
cT:function cT(){},
d2:function d2(){},
d3:function d3(){},
de:function de(){},
df:function df(){},
dk:function dk(){},
dl:function dl(){},
a8:function a8(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(a){this.a=a},
dN:function dN(){},
aX:function aX(){},
eJ:function eJ(){},
cH:function cH(){},
c0:function c0(){},
c9:function c9(){},
cp:function cp(){},
eP:function eP(){},
eQ:function eQ(){},
cr:function cr(){},
cx:function cx(){},
cC:function cC(){},
cD:function cD(){},
eW:function eW(){},
da:function da(){},
db:function db(){}},W={
lD:function(){return document},
kN:function(a,b,c){var u,t,s,r
u=document.body
t=(u&&C.t).D(u,a,b,c)
t.toString
u=W.u
u=new H.cE(new W.Z(t),H.m(new W.e4(),{func:1,ret:P.Q,args:[u]}),[u])
s=u.gq(u)
if(!s.n())H.a0(H.iC())
r=s.gt(s)
if(s.n())H.a0(H.kU())
return H.k(r,"$iV")},
bm:function(a){var u,t,s
u="element tag unavailable"
try{t=J.kh(a)
if(typeof t==="string")u=a.tagName}catch(s){H.a7(s)}return u},
li:function(a,b){return document.createElement(a)},
fT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
iQ:function(a,b,c,d){var u,t
u=W.fT(W.fT(W.fT(W.fT(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
iN:function(a,b,c,d,e){var u=W.iY(new W.fD(c),W.f)
if(u!=null&&!0)J.jX(a,b,u,!1)
return new W.fC(a,b,u,!1,[e])},
iP:function(a){var u,t
u=document.createElement("a")
t=new W.h_(u,window.location)
t=new W.aR(t)
t.c7(a)
return t},
lk:function(a,b,c,d){H.k(a,"$iV")
H.x(b)
H.x(c)
H.k(d,"$iaR")
return!0},
ll:function(a,b,c,d){var u,t,s
H.k(a,"$iV")
H.x(b)
H.x(c)
u=H.k(d,"$iaR").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
iR:function(){var u,t,s,r,q
u=P.c
t=P.hP(C.p,u)
s=H.q(C.p,0)
r=H.m(new W.hb(),{func:1,ret:u,args:[s]})
q=H.i(["TEMPLATE"],[u])
t=new W.ha(t,P.cf(u),P.cf(u),P.cf(u),null)
t.c8(null,new H.eo(C.p,r,[s,u]),q,null)
return t},
iY:function(a,b){var u
H.m(a,{func:1,ret:-1,args:[b]})
u=$.H
if(u===C.e)return a
return u.cC(a,b)},
n:function n(){},
dH:function dH(){},
c_:function c_(){},
dI:function dI(){},
bi:function bi(){},
aY:function aY(){},
aI:function aI(){},
aZ:function aZ(){},
dP:function dP(){},
aJ:function aJ(){},
bl:function bl(){},
dT:function dT(){},
F:function F(){},
b1:function b1(){},
dU:function dU(){},
ar:function ar(){},
as:function as(){},
dV:function dV(){},
dW:function dW(){},
dY:function dY(){},
c2:function c2(){},
dZ:function dZ(){},
c3:function c3(){},
c4:function c4(){},
e_:function e_(){},
e0:function e0(){},
V:function V(){},
e4:function e4(){},
f:function f(){},
d:function d(){},
a2:function a2(){},
bn:function bn(){},
e7:function e7(){},
e8:function e8(){},
a9:function a9(){},
ea:function ea(){},
bo:function bo(){},
bp:function bp(){},
ch:function ch(){},
bs:function bs(){},
eq:function eq(){},
ak:function ak(){},
bt:function bt(){},
es:function es(){},
et:function et(a){this.a=a},
eu:function eu(){},
ev:function ev(a){this.a=a},
ab:function ab(){},
ew:function ew(){},
cn:function cn(){},
eD:function eD(a){this.a=a},
eE:function eE(a){this.a=a},
bw:function bw(){},
aC:function aC(){},
Z:function Z(a){this.a=a},
u:function u(){},
bx:function bx(){},
ac:function ac(){},
eL:function eL(){},
eR:function eR(){},
eS:function eS(a){this.a=a},
b7:function b7(){},
ad:function ad(){},
eU:function eU(){},
ae:function ae(){},
eV:function eV(){},
af:function af(){},
f_:function f_(){},
f0:function f0(a){this.a=a},
a4:function a4(){},
cw:function cw(){},
f8:function f8(){},
f9:function f9(){},
bE:function bE(){},
ag:function ag(){},
a5:function a5(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
ah:function ah(){},
fe:function fe(){},
ff:function ff(){},
fo:function fo(){},
aE:function aE(){},
fp:function fp(){},
bH:function bH(){},
fr:function fr(a){this.a=a},
bI:function bI(){},
fy:function fy(){},
cJ:function cJ(){},
fS:function fS(){},
d_:function d_(){},
h3:function h3(){},
h7:function h7(){},
fw:function fw(){},
fz:function fz(a){this.a=a},
fB:function fB(){},
fA:function fA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
fC:function fC(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fD:function fD(a){this.a=a},
aR:function aR(a){this.a=a},
t:function t(){},
co:function co(a){this.a=a},
eG:function eG(a){this.a=a},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
d7:function d7(){},
h1:function h1(){},
h2:function h2(){},
ha:function ha(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hb:function hb(){},
h8:function h8(){},
c7:function c7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
a3:function a3(){},
h_:function h_(a,b){this.a=a
this.b=b},
dm:function dm(a){this.a=a},
he:function he(a){this.a=a},
cI:function cI(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d0:function d0(){},
d1:function d1(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
bO:function bO(){},
bP:function bP(){},
d8:function d8(){},
d9:function d9(){},
dd:function dd(){},
dg:function dg(){},
dh:function dh(){},
bQ:function bQ(){},
bR:function bR(){},
di:function di(){},
dj:function dj(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){}},G={
ld:function(a){var u,t,s,r
u=H.i(a.split("\n"),[P.c])
for(t=0;t<u.length;t=s){s=t+1
r=""+s+": "
if(t>=u.length)return H.r(u,t)
C.a.h(u,t,r+H.h(u[t]))}return C.a.V(u,"\n")},
iM:function(a,b,c){var u,t,s,r
u=J.o(a)
t=u.bf(a,b)
u.aw(a,t,c)
u.bb(a,t)
s=H.hk(u.ar(a,t,35713))
if(s!=null&&!s){r=u.aq(a,t)
P.aU("E:Compilation failed:")
P.aU("E:"+G.ld(c))
P.aU("E:Failure:")
P.aU(C.i.E("E:",r))
throw H.e(r)}return t},
iB:function(a){var u,t,s,r,q,p,o
H.z(a,"$ib",[T.N],"$ab")
u=a.length
t=new Float32Array(u*3)
for(u=a.length,s=0;s<u;++s){r=s*3
q=a[s].a[0]
p=t.length
if(r>=p)return H.r(t,r)
t[r]=q
q=r+1
o=a[s].a[1]
if(q>=p)return H.r(t,q)
t[q]=o
r+=2
o=a[s].a[2]
if(r>=p)return H.r(t,r)
t[r]=o}return t},
kQ:function(a){var u,t,s,r,q,p
H.z(a,"$ib",[T.P],"$ab")
u=a.length
t=new Float32Array(u*2)
for(u=a.length,s=0;s<u;++s){r=s*2
q=a[s].a[0]
p=t.length
if(r>=p)return H.r(t,r)
t[r]=q;++r
q=a[s].a[1]
if(r>=p)return H.r(t,r)
t[r]=q}return t},
kR:function(a){var u,t,s,r,q,p
H.z(a,"$ib",[T.b8],"$ab")
u=a.length
t=new Float32Array(u*4)
for(s=0;s<a.length;++s){u=s*4
r=J.kj(a[s])
q=t.length
if(u>=q)return H.r(t,u)
t[u]=r
r=u+1
if(s>=a.length)return H.r(a,s)
p=J.kk(a[s])
if(r>=q)return H.r(t,r)
t[r]=p
p=u+2
if(s>=a.length)return H.r(a,s)
r=J.kl(a[s])
if(p>=q)return H.r(t,p)
t[p]=r
if(s>=a.length)return H.r(a,s)
C.j.h(t,u+3,J.ki(a[s]))}return t},
kP:function(a){var u,t,s
H.z(a,"$ib",[[P.b,P.C]],"$ab")
u=a.length
t=new Uint32Array(u*4)
for(s=0;s<a.length;++s){u=s*4
C.n.h(t,u,J.bY(a[s],0))
if(s>=a.length)return H.r(a,s)
C.n.h(t,u+1,J.bY(a[s],1))
if(s>=a.length)return H.r(a,s)
C.n.h(t,u+2,J.bY(a[s],2))
if(s>=a.length)return H.r(a,s)
C.n.h(t,u+3,J.bY(a[s],3))}return t},
lj:function(a,b){var u,t,s,r,q,p,o,n,m,l
for(u=a.e,t=new H.aa(u,[H.q(u,0)]),t=t.gq(t),s=b.x,r=[[P.b,P.C]],q=[P.a6],p=[T.b8],o=[T.N],n=[T.P];t.n();){m=t.d
if(!s.a2(0,m)){m="Dropping unnecessary attribute: "+H.h(m)
if($.j2>0)H.hy("I: "+m)
continue}l=u.i(0,m)
switch($.an().i(0,m).a){case"vec2":b.T(m,G.kQ(H.dC(l,"$ib",n,"$ab")),2)
break
case"vec3":b.T(m,G.iB(H.dC(l,"$ib",o,"$ab")),3)
break
case"vec4":b.T(m,G.kR(H.dC(l,"$ib",p,"$ab")),4)
break
case"float":b.T(m,new Float32Array(H.hg(H.dC(l,"$ib",q,"$ab"))),1)
break
case"uvec4":b.T(m,G.kP(H.dC(l,"$ib",r,"$ab")),4)
break}}},
iH:function(a,b,c,d){var u,t,s,r,q,p,o,n
u=P.c
t=P.cf(u)
s=c.b
r=d.b
q=H.z(c.f,"$ib",[u],"$ab")
p=J.k5(b.a)
o=G.iM(b.a,35633,s)
J.ia(b.a,p,o)
n=G.iM(b.a,35632,r)
J.ia(b.a,p,n)
if(q.length>0)J.kw(b.a,p,q,35980)
J.kp(b.a,p)
if(!H.hk(J.ko(b.a,p,35714)))H.a0(J.kn(b.a,p))
u=new G.eO(b,c,d,p,P.hP(c.c,u),P.D(u,P.w),P.D(u,u),t,a)
u.c2(a,b,c,d)
return u},
W:function(a){var u,t
u=P.c
t=[u]
return new G.cs(H.i([],t),H.i([],t),H.i([],t),H.i([],t),P.D(u,P.C))},
iJ:function(){return new G.cy(1,9729,9729)},
iL:function(a,b,c,d,e,f){var u=J.ic(a.a)
J.aH(a.a,3553,u)
J.ku(a.a,3553,1,e,c,d)
f.aF(a,3553)
J.ie(a.a)
J.aH(a.a,3553,null)
return new G.fk(c,d,e,b,u,3553,a,f)},
ex:function ex(){},
J:function J(a,b){this.d=a
this.a=b
this.b=!1},
dR:function dR(a){this.a=null
this.b=a},
c8:function c8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
e6:function e6(){},
c6:function c6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cA:function cA(a,b,c){this.a=a
this.b=b
this.c=c},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a,b){this.d=a
this.a=b
this.b=!1},
er:function er(a,b,c,d,e,f,g,h){var _=this
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
_.b=!1},
hI:function hI(){},
eO:function eO(a,b,c,d,e,f,g,h,i){var _=this
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
_.b=!1},
B:function B(a,b){this.a=a
this.c=b},
cs:function cs(a,b,c,d,e){var _=this
_.b=null
_.c=a
_.d=b
_.e=c
_.f=d
_.r=0
_.x=e},
cy:function cy(a,b,c){var _=this
_.c=_.b=_.a=!1
_.d=!0
_.e=a
_.f=b
_.r=c},
bF:function bF(){},
fk:function fk(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eb:function eb(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
ln:function(a,b,c,d){var u,t,s,r,q
u=document.createElement("div")
t=u.style
s=""+c+"px"
t.width=s
s=""+d+"px"
t.height=s
t.color=a
t.background=a
for(r=0;r<c;++r){q=H.k(W.li("span",null),"$iV")
t=q.style
t.width="1px"
s=""+d+"px"
t.height=s
s=(t&&C.w).aM(t,"float")
t.setProperty(s,"left","")
s=C.w.aM(t,"opacity")
t.setProperty(s,"0.9","")
t.background=b
u.appendChild(q)}return u},
eY:function eY(){},
eZ:function eZ(a,b,c,d,e){var _=this
_.e=0
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e}},D={
kX:function(){var u,t,s
u=W.aE
t=new P.S(0,$.H,[u])
s=new P.cG(t,[u])
u=window.navigator;(u&&C.S).bN(u,!0).W(new D.ek(s),null).b7(new D.el(s))
return t},
ek:function ek(a){this.a=a},
ej:function ej(a,b){this.a=a
this.b=b},
el:function el(a){this.a=a}},A={
i_:function(a){var u,t
u=C.j.cP(H.z(a,"$il",[P.w],"$al"),0,new A.hp(),P.C)
if(typeof u!=="number")return H.hq(u)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
hp:function hp(){}},T={
br:function(a,b,c,d,e,f,g,h,i){var u=new Float32Array(9)
u[8]=i
u[7]=h
u[6]=g
u[5]=f
u[4]=e
u[3]=d
u[2]=c
u[1]=b
u[0]=a
return new T.bq(u)},
bG:function(a,b,c){var u=new T.N(new Float32Array(3))
u.O(a,b,c)
return u},
bq:function bq(a){this.a=a},
P:function P(a){this.a=a},
N:function N(a){this.a=a},
b8:function b8(){},
O:function(a,b,c){var u,t
u=c.a
t=new T.c5(G.iH(u,a,$.jJ(),b),c)
$.hA().h(0,u,t)
return t},
l7:function(a){var u,t,s,r,q
u=P.c
t=P.w
T.O(a,$.jH(),new G.J(P.D(u,t),"none"))
T.O(a,$.jS(),new G.J(P.D(u,t),"toon"))
s=$.jK()
r=P.D(u,t)
q=new T.P(new Float32Array(2))
q.H(0.5,0.5)
r.h(0,"uCenter2",q)
r.h(0,"uPointSize",6)
T.O(a,s,new G.J(r,"hexalate-6"))
r=$.jI()
s=P.D(u,t)
q=new T.P(new Float32Array(2))
q.H(0,0)
s.h(0,"uCenter2",q)
s.h(0,"uScale",0.8)
s.h(0,"uAngle",0.5)
T.O(a,r,new G.J(s,"dot"))
s=$.jT()
r=P.D(u,t)
r.h(0,"uScale",0.0009)
r.h(0,"uTime",0)
T.O(a,s,new G.J(r,"tv-distortion"))
r=$.jL()
s=P.D(u,t)
s.h(0,"uPointSize",4)
T.O(a,r,new G.J(s,"lumidots-4"))
s=$.jQ()
r=P.D(u,t)
r.h(0,"uPointSize",4)
T.O(a,s,new G.J(r,"square-4"))
r=$.jO()
s=P.D(u,t)
q=new T.P(new Float32Array(2))
q.H(120,240)
s.h(0,"uRange",q)
T.O(a,r,new G.J(s,"scanline"))
T.O(a,$.jV(),new G.J(P.D(u,t),"water"))
s=[u]
r=new G.cs(H.i([],s),H.i([],s),H.i([],s),H.i([],s),P.D(u,P.C))
r.u(H.i(["uTexture"],s))
r.v(H.i(["#define MODE 0","float level1 = 1.0;\nfloat level2 = 0.7;\nfloat level3 = 0.5;\nfloat level4 = 0.3;\n\nfloat dist = 10.0;\nfloat thickness = 0.5;\n\n#if MODE == 0\n// diagonal crosshach\nvec2 slope = vec2(1.0, 1.0);\n#elif MODE == 1\n// regular crosshatch\nvec2 slope = vec2(1.0, 0.0);\n#else\nERROR\n#endif\n\nfloat PixelColor(vec2 pixel, float lum) {\n    if (lum < level1) {\n        // main anti diagonal\n        if (mod(pixel.x * slope.x + pixel.y * slope.y, dist) <= thickness) return 0.0; \n    }  \n  \n    if (lum < level2) { \n        // main diagonal\n        if (mod(pixel.x * slope.y - pixel.y * slope.x, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level3) {\n        // inbetween anti diagonals\n        if (mod(pixel.x * slope.x + pixel.y * slope.y - dist * 0.5, dist) <= thickness) return 0.0;\n    }  \n  \n    if (lum < level4) {\n        // inbetween main diagonals\n        if (mod(pixel.x * slope.y - pixel.y * slope.x - dist * 0.5, dist) <= thickness) return 0.0;\n    } \n    \n    return 1.0;\n}       \n       \nvoid main()  { \n    vec2 pixel = gl_FragCoord.xy;  // this is really pixel + 0.5\n   \n    float lum = dot(vec3(0.2126, 0.7152, 0.0723), \n                    texelFetch(uTexture, ivec2(pixel), 0).rgb);\n    \n    float color = PixelColor(pixel, lum);\n    oFragColor = vec4(vec3(color), 1.0);  \n}      \n\n"],s))
T.O(a,r,new G.J(P.D(u,t),"crosshatch"))
r=$.jP()
s=P.D(u,t)
s.h(0,"uScale",0.5)
T.O(a,r,new G.J(s,"sepia"))
T.O(a,$.jR(),new G.J(P.D(u,t),"technicolor"))
s=$.jU()
r=P.D(u,t)
q=new T.P(new Float32Array(2))
q.H(0.4,0.7)
r.h(0,"uRange",q)
T.O(a,s,new G.J(r,"vigenetting"))
r=$.jG()
s=P.D(u,t)
s.h(0,"uConvolutionMatrix",$.jg())
s.h(0,"uColor",$.jm())
T.O(a,r,new G.J(s,"emboss"))
s=P.D(u,t)
s.h(0,"uConvolutionMatrix",$.jh())
s.h(0,"uColor",$.jn())
T.O(a,r,new G.J(s,"emboss2"))
s=P.D(u,t)
s.h(0,"uConvolutionMatrix",$.ji())
s.h(0,"uColor",$.jo())
T.O(a,r,new G.J(s,"engrave"))
s=P.D(u,t)
s.h(0,"uConvolutionMatrix",$.jj())
s.h(0,"uColor",$.jp())
T.O(a,r,new G.J(s,"sharpen"))
s=P.D(u,t)
s.h(0,"uConvolutionMatrix",$.jf())
s.h(0,"uColor",$.jl())
T.O(a,r,new G.J(s,"edges"))
t=P.D(u,t)
t.h(0,"uConvolutionMatrix",$.je())
t.h(0,"uColor",$.jk())
T.O(a,r,new G.J(t,"blur"))
for(u=$.hA(),u=new H.aa(u,[H.q(u,0)]),u=u.gq(u);u.n();){t=u.d
s=$.i7();(s&&C.U).cR(s,"beforeend","<option>"+H.h(t)+"</option>",null,null)}},
lT:function(a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
H.k(a6,"$iaE")
if(a6==null){window.alert("Could not access camera - do you have a camera installed?")
return}u=document
t=u.getElementById("stats")
s=u.createElement("div")
r=s.style
r.fontWeight="bold"
s.textContent="@@@@"
q=new R.eZ(0,t,s,u.createElement("div"),R.ln("blue","gray",90,30))
q.c3(t,"blue","gray")
p=H.k(u.querySelector("#webgl-canvas"),"$iaZ")
o=p.clientWidth
n=p.clientHeight
p.width=o
p.height=n
m=new G.dR(p)
u=P.c
t=P.w
r=(p&&C.L).bM(p,"webgl2",P.hO(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1],u,t))
m.a=r
if(r==null)H.a0(P.iA('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
l="ChronosGL Config: "+H.h(J.km(r))
if($.j2>0)P.aU("I: "+l)
J.k2(r,0,0,0,1)
J.dE(r,2929)
l=$.ju()
if(l==null)l=new G.cy(1,9729,9729)
k=J.ic(r)
j=new G.eb(a6,"video",k,3553,m,l)
J.aH(r,3553,k)
r=l.d?1:0
J.kq(m.a,37440,r)
j.aH(a6)
l.aF(m,3553)
J.ie(m.a)
J.aH(m.a,3553,null)
i=G.iH("bg",m,$.jN(),$.jM())
l=P.D(u,t)
l.h(0,"cDepthTest",!0)
l.h(0,"cDepthWrite",!0)
l.h(0,"cBlendEquation",$.jd())
l.h(0,"cStencilFunc",$.js())
l.h(0,"uTexture",j)
r=new T.N(new Float32Array(3))
r.O(-1,-1,0)
k=new T.N(new Float32Array(3))
k.O(1,-1,0)
h=new T.N(new Float32Array(3))
h.O(1,1,0)
g=new T.N(new Float32Array(3))
g.O(-1,1,0)
f=[T.N]
e=H.i([r,k,h,g],f)
r=new T.P(new Float32Array(2))
r.H(0,0)
k=new T.P(new Float32Array(2))
k.H(1,0)
h=new T.P(new Float32Array(2))
h.H(1,1)
g=new T.P(new Float32Array(2))
g.H(0,1)
d=H.i([r,k,h,g],[T.P])
c=new T.N(new Float32Array(3))
c.O(0,0,1)
b=H.i([c,c,c,c],f)
r=H.i([],[G.e6])
k=H.i([],[G.c6])
h=H.i([],f)
a=new G.e9(!1,r,k,h,P.D(u,[P.b,,]))
a.aD("aTexUV")
H.z(e,"$ib",f,"$ab")
a0=h.length
C.a.l(k,new G.c6(a0,a0+1,a0+2,a0+3))
a.c_(e)
a.bY("aTexUV",d)
a.aD("aNormal")
a.bZ("aNormal",b)
r=i.d
k=i.e.x
t=P.D(u,t)
g=J.k6(r.a)
a1=new G.er(r,g,4,t,k,-1,P.D(u,P.a8),"meshdata:quad")
h=G.iB(h)
t.h(0,"aPosition",J.hE(r.a))
a1.ch=h
a1.aB("aPosition",h,3)
a2=$.an().i(0,"aPosition")
if(a2==null)H.a0("Unknown canonical aPosition")
a3=k.i(0,"aPosition")
J.dD(r.a,g)
r.bn(0,a3,0)
r.bI(0,t.i(0,"aPosition"),a3,a2.aE(),5126,!1,0,0)
u=H.z(a.c0(),"$ib",[P.C],"$ab")
a1.y=J.hE(r.a)
t=a1.ch.length
if(t<768){a1.sae(new Uint8Array(H.hg(u)))
a1.Q=5121}else if(t<196608){a1.sae(new Uint16Array(H.hg(u)))
a1.Q=5123}else{a1.sae(new Uint32Array(H.hg(u)))
a1.Q=5125}J.dD(r.a,g)
u=a1.y
t=a1.cx
J.hB(r.a,34963,u)
J.ib(r.a,34963,t,35048)
G.lj(a,a1)
u=$.jt()
t=G.iL(m,"frame::color",o,n,32856,u)
u=G.iL(m,"frame::depth",o,n,33190,u)
a4=new G.c8(m,null,t,u,null)
r=J.k4(m.a)
a4.b=r
J.hC(m.a,36160,r)
J.id(m.a,36160,36064,3553,t.b,0)
J.id(m.a,36160,36096,3553,u.b,0)
a5=J.k0(m.a,36160)
if(a5!==36053)H.a0("Error Incomplete Framebuffer: "+H.h(a5))
J.hC(m.a,36160,null)
T.l7(m)
new T.hv(j,a4,o,n,i,a1,new G.ep(l,"mat"),new G.c8(m,null,null,null,null),q).$1(0)},
j8:function(){D.kX().W(T.lB(),-1).b7(new T.hw())},
c5:function c5(a,b){this.b=a
this.c=b},
hv:function hv(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
hw:function hw(){}}
var w=[C,H,J,P,W,G,R,D,A,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.hM.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gm:function(a){return H.bz(a)},
k:function(a){return"Instance of '"+H.bA(a)+"'"}}
J.ed.prototype={
k:function(a){return String(a)},
gm:function(a){return a?519018:218159},
$iQ:1}
J.cc.prototype={
B:function(a,b){return null==b},
k:function(a){return"null"},
gm:function(a){return 0},
$iE:1}
J.cd.prototype={
gm:function(a){return 0},
k:function(a){return String(a)}}
J.eK.prototype={}
J.aD.prototype={}
J.aP.prototype={
k:function(a){var u=a[$.jr()]
if(u==null)return this.bV(a)
return"JavaScript function for "+H.h(J.bZ(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iaM:1}
J.aN.prototype={
l:function(a,b){H.A(b,H.q(a,0))
if(!!a.fixed$length)H.a0(P.G("add"))
a.push(b)},
F:function(a,b){var u,t
H.z(b,"$il",[H.q(a,0)],"$al")
if(!!a.fixed$length)H.a0(P.G("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.a_)(b),++t)a.push(b[t])},
V:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.h(u,t,H.h(a[t]))
return u.join(b)},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
aZ:function(a,b){var u,t
H.m(b,{func:1,ret:P.Q,args:[H.q(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.e(P.b0(a))}return!1},
a7:function(a){if(!!a.immutable$list)H.a0(P.G("sort"))
H.lb(a,J.lr(),H.q(a,0))},
A:function(a,b){var u
for(u=0;u<a.length;++u)if(J.aW(a[u],b))return!0
return!1},
k:function(a){return P.hK(a,"[","]")},
gq:function(a){return new J.dJ(a,a.length,0,[H.q(a,0)])},
gm:function(a){return H.bz(a)},
gj:function(a){return a.length},
i:function(a,b){if(b>=a.length||b<0)throw H.e(H.bU(a,b))
return a[b]},
h:function(a,b,c){H.A(c,H.q(a,0))
if(!!a.immutable$list)H.a0(P.G("indexed set"))
if(b>=a.length||b<0)throw H.e(H.bU(a,b))
a[b]=c},
$iv:1,
$av:function(){},
$il:1,
$ib:1}
J.hL.prototype={}
J.dJ.prototype={
gt:function(a){return this.d},
n:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.e(H.a_(u))
s=this.c
if(s>=t){this.saR(null)
return!1}this.saR(u[s]);++this.c
return!0},
saR:function(a){this.d=H.A(a,H.q(this,0))},
$iaB:1}
J.b4.prototype={
S:function(a,b){var u
H.i2(b)
if(typeof b!=="number")throw H.e(H.dy(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.ga3(b)
if(this.ga3(a)===u)return 0
if(this.ga3(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
ga3:function(a){return a===0?1/a<0:a<0},
cF:function(a){var u,t
if(a>=0){if(a<=2147483647){u=a|0
return a===u?u:u+1}}else if(a>=-2147483648)return a|0
t=Math.ceil(a)
if(isFinite(t))return t
throw H.e(P.G(""+a+".ceil()"))},
d1:function(a,b){var u
if(b>20)throw H.e(P.hQ(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.ga3(a))return"-"+u
return u},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gm:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
bX:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.aX(a,b)},
P:function(a,b){return(a|0)===a?a/b|0:this.aX(a,b)},
aX:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.G("Result of truncating division is "+H.h(u)+": "+H.h(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.cr(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
cr:function(a,b){return b>31?0:a>>>b},
M:function(a,b){if(typeof b!=="number")throw H.e(H.dy(b))
return a>b},
$ia1:1,
$aa1:function(){return[P.K]},
$ia6:1,
$iK:1}
J.cb.prototype={$iC:1}
J.ca.prototype={}
J.aO.prototype={
aa:function(a,b){if(b>=a.length)throw H.e(H.bU(a,b))
return a.charCodeAt(b)},
E:function(a,b){if(typeof b!=="string")throw H.e(P.io(b,null,null))
return a+b},
bP:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
bS:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.eN(b,null))
if(b>c)throw H.e(P.eN(b,null))
if(c>a.length)throw H.e(P.eN(c,null))
return a.substring(b,c)},
bR:function(a,b){return this.bS(a,b,null)},
d0:function(a){return a.toLowerCase()},
cH:function(a,b,c){if(c>a.length)throw H.e(P.hQ(c,0,a.length,null,null))
return H.lY(a,b,c)},
S:function(a,b){var u
H.x(b)
if(typeof b!=="string")throw H.e(H.dy(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
k:function(a){return a},
gm:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
i:function(a,b){if(b.d7(0,a.length)||b.N(0,0))throw H.e(H.bU(a,b))
return a[b]},
$iv:1,
$av:function(){},
$ia1:1,
$aa1:function(){return[P.c]},
$ikY:1,
$ic:1}
H.e3.prototype={}
H.b5.prototype={
gq:function(a){return new H.cg(this,this.gj(this),0,[H.hZ(this,"b5",0)])},
a4:function(a,b){return this.bU(0,H.m(b,{func:1,ret:P.Q,args:[H.hZ(this,"b5",0)]}))}}
H.cg.prototype={
gt:function(a){return this.d},
n:function(){var u,t,s,r
u=this.a
t=J.bd(u)
s=t.gj(u)
if(this.b!==s)throw H.e(P.b0(u))
r=this.c
if(r>=s){this.saJ(null)
return!1}this.saJ(t.p(u,r));++this.c
return!0},
saJ:function(a){this.d=H.A(a,H.q(this,0))},
$iaB:1}
H.eo.prototype={
gj:function(a){return J.bh(this.a)},
p:function(a,b){return this.b.$1(J.kc(this.a,b))},
$ab5:function(a,b){return[b]},
$al:function(a,b){return[b]}}
H.cE.prototype={
gq:function(a){return new H.fq(J.dF(this.a),this.b,this.$ti)}}
H.fq.prototype={
n:function(){var u,t
for(u=this.a,t=this.b;u.n();)if(t.$1(u.gt(u)))return!0
return!1},
gt:function(a){var u=this.a
return u.gt(u)}}
H.b3.prototype={}
H.fh.prototype={
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
H.eH.prototype={
k:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.ee.prototype={
k:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.h(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.h(this.a)+")"}}
H.fm.prototype={
k:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.hz.prototype={
$1:function(a){if(!!J.I(a).$ib2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.dc.prototype={
k:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iY:1}
H.b_.prototype={
k:function(a){return"Closure '"+H.bA(this).trim()+"'"},
$iaM:1,
gd5:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fa.prototype={}
H.eX.prototype={
k:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aV(u)+"'"}}
H.bj.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gm:function(a){var u,t
u=this.c
if(u==null)t=H.bz(this.a)
else t=typeof u!=="object"?J.bg(u):H.bz(u)
return(t^H.bz(this.b))>>>0},
k:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.h(this.d)+"' of "+("Instance of '"+H.bA(u)+"'")}}
H.fj.prototype={
k:function(a){return this.a}}
H.dQ.prototype={
k:function(a){return this.a}}
H.eT.prototype={
k:function(a){return"RuntimeError: "+H.h(this.a)}}
H.cB.prototype={
ga1:function(){var u=this.b
if(u==null){u=H.dB(this.a)
this.b=u}return u},
k:function(a){return this.ga1()},
gm:function(a){var u=this.d
if(u==null){u=C.i.gm(this.ga1())
this.d=u}return u},
B:function(a,b){if(b==null)return!1
return b instanceof H.cB&&this.ga1()===b.ga1()}}
H.ce.prototype={
gj:function(a){return this.a},
gC:function(a){return new H.aa(this,[H.q(this,0)])},
a2:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.cg(u,b)}else{t=this.cS(b)
return t}},
cS:function(a){var u=this.d
if(u==null)return!1
return this.ak(this.af(u,J.bg(a)&0x3ffffff),a)>=0},
i:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.Z(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.Z(r,b)
s=t==null?null:t.b
return s}else return this.cT(b)},
cT:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.af(u,J.bg(a)&0x3ffffff)
s=this.ak(t,a)
if(s<0)return
return t[s].b},
h:function(a,b,c){var u,t,s,r,q,p
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.ag()
this.b=u}this.aL(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.ag()
this.c=t}this.aL(t,b,c)}else{s=this.d
if(s==null){s=this.ag()
this.d=s}r=J.bg(b)&0x3ffffff
q=this.af(s,r)
if(q==null)this.ai(s,r,[this.ah(b,c)])
else{p=this.ak(q,b)
if(p>=0)q[p].b=c
else q.push(this.ah(b,c))}}},
w:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.q(this,0),H.q(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.e(P.b0(this))
u=u.c}},
aL:function(a,b,c){var u
H.A(b,H.q(this,0))
H.A(c,H.q(this,1))
u=this.Z(a,b)
if(u==null)this.ai(a,b,this.ah(b,c))
else u.b=c},
aU:function(){this.r=this.r+1&67108863},
ah:function(a,b){var u,t
u=new H.eg(H.A(a,H.q(this,0)),H.A(b,H.q(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.aU()
return u},
ak:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.aW(a[t].a,b))return t
return-1},
k:function(a){return P.iF(this)},
Z:function(a,b){return a[b]},
af:function(a,b){return a[b]},
ai:function(a,b,c){a[b]=c},
ci:function(a,b){delete a[b]},
cg:function(a,b){return this.Z(a,b)!=null},
ag:function(){var u=Object.create(null)
this.ai(u,"<non-identifier-key>",u)
this.ci(u,"<non-identifier-key>")
return u},
$iiE:1}
H.eg.prototype={}
H.aa.prototype={
gj:function(a){return this.a.a},
gq:function(a){var u,t
u=this.a
t=new H.eh(u,u.r,this.$ti)
t.c=u.e
return t}}
H.eh.prototype={
gt:function(a){return this.d},
n:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.b0(u))
else{u=this.c
if(u==null){this.saK(null)
return!1}else{this.saK(u.a)
this.c=this.c.c
return!0}}},
saK:function(a){this.d=H.A(a,H.q(this,0))},
$iaB:1}
H.hr.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.hs.prototype={
$2:function(a,b){return this.a(a,b)},
$S:12}
H.ht.prototype={
$1:function(a){return this.a(H.x(a))},
$S:13}
H.bu.prototype={$ibu:1}
H.aQ.prototype={$iaQ:1,$ilc:1}
H.cj.prototype={
gj:function(a){return a.length},
$iv:1,
$av:function(){},
$iy:1,
$ay:function(){}}
H.bv.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
h:function(a,b,c){H.j1(c)
H.ay(b,a,a.length)
a[b]=c},
$ab3:function(){return[P.a6]},
$ap:function(){return[P.a6]},
$il:1,
$al:function(){return[P.a6]},
$ib:1,
$ab:function(){return[P.a6]}}
H.ck.prototype={
h:function(a,b,c){H.X(c)
H.ay(b,a,a.length)
a[b]=c},
$ab3:function(){return[P.C]},
$ap:function(){return[P.C]},
$il:1,
$al:function(){return[P.C]},
$ib:1,
$ab:function(){return[P.C]}}
H.ci.prototype={$ia8:1}
H.ey.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.ez.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
$ikS:1}
H.eA.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.eB.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.cl.prototype={
i:function(a,b){H.ay(b,a,a.length)
return a[b]},
$imw:1}
H.cm.prototype={
gj:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.eC.prototype={
gj:function(a){return a.length},
i:function(a,b){H.ay(b,a,a.length)
return a[b]}}
H.bK.prototype={}
H.bL.prototype={}
H.bM.prototype={}
H.bN.prototype={}
P.ft.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:6}
P.fs.prototype={
$1:function(a){var u,t
this.a.a=H.m(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:14}
P.fu.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fv.prototype={
$0:function(){this.a.$0()},
$S:0}
P.hc.prototype={
c9:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.aF(new P.hd(this,b),0),a)
else throw H.e(P.G("`setTimeout()` not found."))}}
P.hd.prototype={
$0:function(){this.b.$0()},
$S:1}
P.fx.prototype={
cG:function(a){if(a==null)a=new P.by()
if(this.a.a!==0)throw H.e(P.cv("Future already completed"))
$.H.toString
this.I(a,null)}}
P.cG.prototype={
aj:function(a,b){var u
H.bV(b,{futureOr:1,type:H.q(this,0)})
u=this.a
if(u.a!==0)throw H.e(P.cv("Future already completed"))
u.cc(b)},
I:function(a,b){this.a.cd(a,b)}}
P.h9.prototype={
I:function(a,b){this.a.I(a,b)}}
P.am.prototype={
cU:function(a){if(this.c!==6)return!0
return this.b.b.al(H.m(this.d,{func:1,ret:P.Q,args:[P.w]}),a.a,P.Q,P.w)},
cQ:function(a){var u,t,s,r
u=this.e
t=P.w
s={futureOr:1,type:H.q(this,1)}
r=this.b.b
if(H.dz(u,{func:1,args:[P.w,P.Y]}))return H.bV(r.cW(u,a.a,a.b,null,t,P.Y),s)
else return H.bV(r.al(H.m(u,{func:1,args:[P.w]}),a.a,null,t),s)}}
P.S.prototype={
bw:function(a,b,c){var u,t,s,r
u=H.q(this,0)
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.H
if(t!==C.e){t.toString
H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.iT(b,t)}H.m(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.S(0,$.H,[c])
r=b==null?1:3
this.a9(new P.am(s,r,a,b,[u,c]))
return s},
W:function(a,b){return this.bw(a,null,b)},
b7:function(a){var u,t
u=$.H
t=new P.S(0,u,this.$ti)
if(u!==C.e)a=P.iT(a,u)
u=H.q(this,0)
this.a9(new P.am(t,2,null,a,[u,u]))
return t},
a9:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$iam")
this.c=a}else{if(u===2){t=H.k(this.c,"$iS")
u=t.a
if(u<4){t.a9(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.bb(null,null,u,H.m(new P.fF(this,a),{func:1,ret:-1}))}},
aV:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$iam")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iS")
t=p.a
if(t<4){p.aV(a)
return}this.a=t
this.c=p.c}u.a=this.a0(a)
t=this.b
t.toString
P.bb(null,null,t,H.m(new P.fN(u,this),{func:1,ret:-1}))}},
a_:function(){var u=H.k(this.c,"$iam")
this.c=null
return this.a0(u)},
a0:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
Y:function(a){var u,t,s
u=H.q(this,0)
H.bV(a,{futureOr:1,type:u})
t=this.$ti
if(H.aT(a,"$iat",t,"$aat"))if(H.aT(a,"$iS",t,null))P.fI(a,this)
else P.iO(a,this)
else{s=this.a_()
H.A(a,u)
this.a=4
this.c=a
P.b9(this,s)}},
I:function(a,b){var u
H.k(b,"$iY")
u=this.a_()
this.a=8
this.c=new P.R(a,b)
P.b9(this,u)},
cc:function(a){var u
H.bV(a,{futureOr:1,type:H.q(this,0)})
if(H.aT(a,"$iat",this.$ti,"$aat")){this.ce(a)
return}this.a=1
u=this.b
u.toString
P.bb(null,null,u,H.m(new P.fH(this,a),{func:1,ret:-1}))},
ce:function(a){var u=this.$ti
H.z(a,"$iat",u,"$aat")
if(H.aT(a,"$iS",u,null)){if(a.a===8){this.a=1
u=this.b
u.toString
P.bb(null,null,u,H.m(new P.fM(this,a),{func:1,ret:-1}))}else P.fI(a,this)
return}P.iO(a,this)},
cd:function(a,b){var u
this.a=1
u=this.b
u.toString
P.bb(null,null,u,H.m(new P.fG(this,a,b),{func:1,ret:-1}))},
$iat:1}
P.fF.prototype={
$0:function(){P.b9(this.a,this.b)},
$S:0}
P.fN.prototype={
$0:function(){P.b9(this.b,this.a.a)},
$S:0}
P.fJ.prototype={
$1:function(a){var u=this.a
u.a=0
u.Y(a)},
$S:6}
P.fK.prototype={
$2:function(a,b){H.k(b,"$iY")
this.a.I(a,b)},
$1:function(a){return this.$2(a,null)},
$S:15}
P.fL.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:0}
P.fH.prototype={
$0:function(){var u,t,s
u=this.a
t=H.A(this.b,H.q(u,0))
s=u.a_()
u.a=4
u.c=t
P.b9(u,s)},
$S:0}
P.fM.prototype={
$0:function(){P.fI(this.b,this.a)},
$S:0}
P.fG.prototype={
$0:function(){this.a.I(this.b,this.c)},
$S:0}
P.fQ.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.bs(H.m(r.d,{func:1}),null)}catch(q){t=H.a7(q)
s=H.be(q)
if(this.d){r=H.k(this.a.a.c,"$iR").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iR")
else p.b=new P.R(t,s)
p.a=!0
return}if(!!J.I(u).$iat){if(u instanceof P.S&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iR")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.W(new P.fR(o),null)
r.a=!1}},
$S:1}
P.fR.prototype={
$1:function(a){return this.a},
$S:16}
P.fP.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.q(s,0)
q=H.A(this.c,r)
p=H.q(s,1)
this.a.b=s.b.b.al(H.m(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.a7(o)
t=H.be(o)
s=this.a
s.b=new P.R(u,t)
s.a=!0}},
$S:1}
P.fO.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iR")
r=this.c
if(r.cU(u)&&r.e!=null){q=this.b
q.b=r.cQ(u)
q.a=!1}}catch(p){t=H.a7(p)
s=H.be(p)
r=H.k(this.a.a.c,"$iR")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.R(t,s)
n.a=!0}},
$S:1}
P.cF.prototype={}
P.f1.prototype={
gj:function(a){var u,t,s,r
u={}
t=new P.S(0,$.H,[P.C])
u.a=0
s=H.q(this,0)
r=H.m(new P.f5(u,this),{func:1,ret:-1,args:[s]})
H.m(new P.f6(u,t),{func:1,ret:-1})
W.iN(this.a,this.b,r,!1,s)
return t},
gcO:function(a){var u,t,s,r
u={}
t=new P.S(0,$.H,this.$ti)
u.a=null
s=H.q(this,0)
r=H.m(new P.f3(u,this,t),{func:1,ret:-1,args:[s]})
H.m(new P.f4(t),{func:1,ret:-1})
u.a=W.iN(this.a,this.b,r,!1,s)
return t}}
P.f5.prototype={
$1:function(a){H.A(a,H.q(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.E,args:[H.q(this.b,0)]}}}
P.f6.prototype={
$0:function(){this.b.Y(this.a.a)},
$S:0}
P.f3.prototype={
$1:function(a){H.A(a,H.q(this.b,0))
P.lp(this.a.a,this.c,a)},
$S:function(){return{func:1,ret:P.E,args:[H.q(this.b,0)]}}}
P.f4.prototype={
$0:function(){var u,t,s,r
try{s=H.iC()
throw H.e(s)}catch(r){u=H.a7(r)
t=H.be(r)
$.H.toString
this.a.I(u,t)}},
$S:0}
P.f2.prototype={}
P.R.prototype={
k:function(a){return H.h(this.a)},
$ib2:1}
P.hf.prototype={$imy:1}
P.hj.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.by()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.e(u)
s=H.e(u)
s.stack=t.k(0)
throw s},
$S:0}
P.fW.prototype={
cX:function(a){var u,t,s
H.m(a,{func:1,ret:-1})
try{if(C.e===$.H){a.$0()
return}P.iU(null,null,this,a,-1)}catch(s){u=H.a7(s)
t=H.be(s)
P.hi(null,null,this,u,H.k(t,"$iY"))}},
cY:function(a,b,c){var u,t,s
H.m(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.e===$.H){a.$1(b)
return}P.iV(null,null,this,a,b,-1,c)}catch(s){u=H.a7(s)
t=H.be(s)
P.hi(null,null,this,u,H.k(t,"$iY"))}},
cB:function(a,b){return new P.fY(this,H.m(a,{func:1,ret:b}),b)},
b1:function(a){return new P.fX(this,H.m(a,{func:1,ret:-1}))},
cC:function(a,b){return new P.fZ(this,H.m(a,{func:1,ret:-1,args:[b]}),b)},
i:function(a,b){return},
bs:function(a,b){H.m(a,{func:1,ret:b})
if($.H===C.e)return a.$0()
return P.iU(null,null,this,a,b)},
al:function(a,b,c,d){H.m(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.H===C.e)return a.$1(b)
return P.iV(null,null,this,a,b,c,d)},
cW:function(a,b,c,d,e,f){H.m(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.H===C.e)return a.$2(b,c)
return P.lu(null,null,this,a,b,c,d,e,f)}}
P.fY.prototype={
$0:function(){return this.a.bs(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.fX.prototype={
$0:function(){return this.a.cX(this.b)},
$S:1}
P.fZ.prototype={
$1:function(a){var u=this.c
return this.a.cY(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.fU.prototype={
gq:function(a){var u=new P.cU(this,this.r,this.$ti)
u.c=this.e
return u},
gj:function(a){return this.a},
A:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.k(u[b],"$ibJ")!=null}else{t=this.cf(b)
return t}},
cf:function(a){var u=this.d
if(u==null)return!1
return this.aS(this.ck(u,a),a)>=0},
l:function(a,b){var u,t
H.A(b,H.q(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.hS()
this.b=u}return this.aN(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.hS()
this.c=t}return this.aN(t,b)}else return this.ca(0,b)},
ca:function(a,b){var u,t,s
H.A(b,H.q(this,0))
u=this.d
if(u==null){u=P.hS()
this.d=u}t=this.aQ(b)
s=u[t]
if(s==null)u[t]=[this.ab(b)]
else{if(this.aS(s,b)>=0)return!1
s.push(this.ab(b))}return!0},
aN:function(a,b){H.A(b,H.q(this,0))
if(H.k(a[b],"$ibJ")!=null)return!1
a[b]=this.ab(b)
return!0},
aP:function(){this.r=1073741823&this.r+1},
ab:function(a){var u,t
u=new P.bJ(H.A(a,H.q(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.aP()
return u},
aQ:function(a){return J.bg(a)&1073741823},
ck:function(a,b){return a[this.aQ(b)]},
aS:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.aW(a[t].a,b))return t
return-1}}
P.bJ.prototype={}
P.cU.prototype={
gt:function(a){return this.d},
n:function(){var u=this.a
if(this.b!==u.r)throw H.e(P.b0(u))
else{u=this.c
if(u==null){this.saO(null)
return!1}else{this.saO(H.A(u.a,H.q(this,0)))
this.c=this.c.b
return!0}}},
saO:function(a){this.d=H.A(a,H.q(this,0))},
$iaB:1}
P.ei.prototype={$il:1,$ib:1}
P.p.prototype={
gq:function(a){return new H.cg(a,this.gj(a),0,[H.bW(this,a,"p",0)])},
p:function(a,b){return this.i(a,b)},
cP:function(a,b,c,d){var u,t,s
H.A(b,d)
H.m(c,{func:1,ret:d,args:[d,H.bW(this,a,"p",0)]})
u=this.gj(a)
for(t=b,s=0;s<u;++s){t=c.$2(t,this.i(a,s))
if(u!==this.gj(a))throw H.e(P.b0(a))}return t},
k:function(a){return P.hK(a,"[","]")}}
P.em.prototype={}
P.en.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.h(a)
u.a=t+": "
u.a+=H.h(b)},
$S:3}
P.T.prototype={
w:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[H.bW(this,a,"T",0),H.bW(this,a,"T",1)]})
for(u=J.dF(this.gC(a));u.n();){t=u.gt(u)
b.$2(t,this.i(a,t))}},
gj:function(a){return J.bh(this.gC(a))},
k:function(a){return P.iF(a)},
$iM:1}
P.h0.prototype={
F:function(a,b){var u
for(u=J.dF(H.z(b,"$il",this.$ti,"$al"));u.n();)this.l(0,u.gt(u))},
k:function(a){return P.hK(this,"{","}")},
$il:1,
$imi:1}
P.cV.prototype={}
P.Q.prototype={}
P.aK.prototype={
B:function(a,b){if(b==null)return!1
return b instanceof P.aK&&this.a===b.a&&!0},
S:function(a,b){return C.c.S(this.a,H.k(b,"$iaK").a)},
gm:function(a){var u=this.a
return(u^C.c.aW(u,30))&1073741823},
k:function(a){var u,t,s,r,q,p,o,n
u=P.kJ(H.l5(this))
t=P.c1(H.l3(this))
s=P.c1(H.l_(this))
r=P.c1(H.l0(this))
q=P.c1(H.l2(this))
p=P.c1(H.l4(this))
o=P.kK(H.l1(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n},
$ia1:1,
$aa1:function(){return[P.aK]}}
P.a6.prototype={}
P.aL.prototype={
M:function(a,b){return C.c.M(this.a,b.gd8())},
B:function(a,b){if(b==null)return!1
return b instanceof P.aL&&this.a===b.a},
gm:function(a){return C.c.gm(this.a)},
S:function(a,b){return C.c.S(this.a,H.k(b,"$iaL").a)},
k:function(a){var u,t,s,r,q
u=new P.e2()
t=this.a
if(t<0)return"-"+new P.aL(0-t).k(0)
s=u.$1(C.c.P(t,6e7)%60)
r=u.$1(C.c.P(t,1e6)%60)
q=new P.e1().$1(t%1e6)
return""+C.c.P(t,36e8)+":"+H.h(s)+":"+H.h(r)+"."+H.h(q)},
$ia1:1,
$aa1:function(){return[P.aL]}}
P.e1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:7}
P.e2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:7}
P.b2.prototype={}
P.by.prototype={
k:function(a){return"Throw of null."}}
P.ap.prototype={
gad:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gac:function(){return""},
k:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gad()+t+s
if(!this.a)return r
q=this.gac()
p=P.e5(this.b)
return r+q+": "+p}}
P.cq.prototype={
gad:function(){return"RangeError"},
gac:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.h(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.h(u)
else if(s>u)t=": Not in range "+H.h(u)+".."+H.h(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.h(u)}return t}}
P.ec.prototype={
gad:function(){return"RangeError"},
gac:function(){var u,t
u=H.X(this.b)
if(typeof u!=="number")return u.N()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gj:function(a){return this.f}}
P.fn.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.fl.prototype={
k:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bC.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dS.prototype={
k:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.e5(u)+"."}}
P.cu.prototype={
k:function(a){return"Stack Overflow"},
$ib2:1}
P.dX.prototype={
k:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.fE.prototype={
k:function(a){return"Exception: "+this.a}}
P.aM.prototype={}
P.C.prototype={}
P.l.prototype={
a4:function(a,b){var u=H.hZ(this,"l",0)
return new H.cE(this,H.m(b,{func:1,ret:P.Q,args:[u]}),[u])},
gj:function(a){var u,t
u=this.gq(this)
for(t=0;u.n();)++t
return t},
p:function(a,b){var u,t,s
P.l6(b,"index")
for(u=this.gq(this),t=0;u.n();){s=u.gt(u)
if(b===t)return s;++t}throw H.e(P.L(b,this,"index",null,t))},
k:function(a){return P.kT(this,"(",")")}}
P.aB.prototype={}
P.b.prototype={$il:1}
P.M.prototype={}
P.E.prototype={
gm:function(a){return P.w.prototype.gm.call(this,this)},
k:function(a){return"null"}}
P.K.prototype={$ia1:1,
$aa1:function(){return[P.K]}}
P.w.prototype={constructor:P.w,$iw:1,
B:function(a,b){return this===b},
gm:function(a){return H.bz(this)},
k:function(a){return"Instance of '"+H.bA(this)+"'"},
toString:function(){return this.k(this)}}
P.Y.prototype={}
P.c.prototype={$ia1:1,
$aa1:function(){return[P.c]},
$ikY:1}
P.bD.prototype={
gj:function(a){return this.a.length},
k:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.n.prototype={}
W.dH.prototype={
gj:function(a){return a.length}}
W.c_.prototype={
k:function(a){return String(a)},
$ic_:1}
W.dI.prototype={
k:function(a){return String(a)}}
W.bi.prototype={$ibi:1}
W.aY.prototype={$iaY:1}
W.aI.prototype={$iaI:1}
W.aZ.prototype={
bM:function(a,b,c){var u=a.getContext(b,P.lC(c))
return u},
$iaZ:1,
gK:function(a){return a.height},
gL:function(a){return a.width}}
W.dP.prototype={
a5:function(a){return P.aj(a.getContextAttributes())}}
W.aJ.prototype={
gj:function(a){return a.length}}
W.bl.prototype={$ibl:1}
W.dT.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.b1.prototype={
aM:function(a,b){var u,t
u=$.jq()
t=u[b]
if(typeof t==="string")return t
t=this.cs(a,b)
u[b]=t
return t},
cs:function(a,b){var u
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
u=P.kL()+b
if(u in a)return u
return b},
gj:function(a){return a.length}}
W.dU.prototype={}
W.ar.prototype={}
W.as.prototype={}
W.dV.prototype={
gj:function(a){return a.length}}
W.dW.prototype={
gj:function(a){return a.length}}
W.dY.prototype={
i:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.c2.prototype={}
W.dZ.prototype={
k:function(a){return String(a)}}
W.c3.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.z(c,"$iU",[P.K],"$aU")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[[P.U,P.K]]},
$iy:1,
$ay:function(){return[[P.U,P.K]]},
$ap:function(){return[[P.U,P.K]]},
$il:1,
$al:function(){return[[P.U,P.K]]},
$ib:1,
$ab:function(){return[[P.U,P.K]]},
$at:function(){return[[P.U,P.K]]}}
W.c4.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gL(a))+" x "+H.h(this.gK(a))},
B:function(a,b){var u
if(b==null)return!1
if(!H.aT(b,"$iU",[P.K],"$aU"))return!1
if(a.left===b.left)if(a.top===b.top){u=J.o(b)
u=this.gL(a)===u.gL(b)&&this.gK(a)===u.gK(b)}else u=!1
else u=!1
return u},
gm:function(a){return W.iQ(C.h.gm(a.left),C.h.gm(a.top),C.h.gm(this.gL(a)),C.h.gm(this.gK(a)))},
gK:function(a){return a.height},
gL:function(a){return a.width},
$iU:1,
$aU:function(){return[P.K]}}
W.e_.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.x(c)
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[P.c]},
$iy:1,
$ay:function(){return[P.c]},
$ap:function(){return[P.c]},
$il:1,
$al:function(){return[P.c]},
$ib:1,
$ab:function(){return[P.c]},
$at:function(){return[P.c]}}
W.e0.prototype={
gj:function(a){return a.length}}
W.V.prototype={
gcz:function(a){return new W.fz(a)},
k:function(a){return a.localName},
cR:function(a,b,c,d,e){var u,t
u=this.D(a,c,d,e)
switch(b.toLowerCase()){case"beforebegin":a.parentNode.insertBefore(u,a)
break
case"afterbegin":t=a.childNodes
a.insertBefore(u,t.length>0?t[0]:null)
break
case"beforeend":a.appendChild(u)
break
case"afterend":a.parentNode.insertBefore(u,a.nextSibling)
break
default:H.a0(P.kE("Invalid position "+b))}},
D:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.iz
if(u==null){u=H.i([],[W.a3])
t=new W.co(u)
C.a.l(u,W.iP(null))
C.a.l(u,W.iR())
$.iz=t
d=t}else d=u
u=$.iy
if(u==null){u=new W.dm(d)
$.iy=u
c=u}else{u.a=d
c=u}}if($.aA==null){u=document
t=u.implementation.createHTMLDocument("")
$.aA=t
$.hJ=t.createRange()
t=$.aA.createElement("base")
H.k(t,"$ibi")
t.href=u.baseURI
$.aA.head.appendChild(t)}u=$.aA
if(u.body==null){t=u.createElement("body")
u.body=H.k(t,"$iaI")}u=$.aA
if(!!this.$iaI)s=u.body
else{s=u.createElement(a.tagName)
$.aA.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.A(C.Q,a.tagName)){$.hJ.selectNodeContents(s)
r=$.hJ.createContextualFragment(b)}else{s.innerHTML=b
r=$.aA.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.aA.body
if(s==null?u!=null:s!==u)J.ih(s)
c.at(r)
document.adoptNode(r)
return r},
cJ:function(a,b,c){return this.D(a,b,c,null)},
bO:function(a,b){a.textContent=null
a.appendChild(this.D(a,b,null,null))},
$iV:1,
gcZ:function(a){return a.tagName}}
W.e4.prototype={
$1:function(a){return!!J.I(H.k(a,"$iu")).$iV},
$S:17}
W.f.prototype={$if:1}
W.d.prototype={
cu:function(a,b,c,d){H.m(c,{func:1,args:[W.f]})
if(c!=null)this.cb(a,b,c,!1)},
cb:function(a,b,c,d){return a.addEventListener(b,H.aF(H.m(c,{func:1,args:[W.f]}),1),!1)},
cn:function(a,b,c,d){return a.removeEventListener(b,H.aF(H.m(c,{func:1,args:[W.f]}),1),!1)},
$id:1}
W.a2.prototype={$ia2:1}
W.bn.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$ia2")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.a2]},
$iy:1,
$ay:function(){return[W.a2]},
$ap:function(){return[W.a2]},
$il:1,
$al:function(){return[W.a2]},
$ib:1,
$ab:function(){return[W.a2]},
$ibn:1,
$at:function(){return[W.a2]}}
W.e7.prototype={
gj:function(a){return a.length}}
W.e8.prototype={
gj:function(a){return a.length}}
W.a9.prototype={$ia9:1}
W.ea.prototype={
gj:function(a){return a.length}}
W.bo.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iu")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.u]},
$iy:1,
$ay:function(){return[W.u]},
$ap:function(){return[W.u]},
$il:1,
$al:function(){return[W.u]},
$ib:1,
$ab:function(){return[W.u]},
$at:function(){return[W.u]}}
W.bp.prototype={$ibp:1}
W.ch.prototype={
k:function(a){return String(a)},
$ich:1}
W.bs.prototype={}
W.eq.prototype={
gj:function(a){return a.length}}
W.ak.prototype={$iak:1}
W.bt.prototype={$ibt:1}
W.es.prototype={
i:function(a,b){return P.aj(a.get(H.x(b)))},
w:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.c,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aj(t.value[1]))}},
gC:function(a){var u=H.i([],[P.c])
this.w(a,new W.et(u))
return u},
gj:function(a){return a.size},
$aT:function(){return[P.c,null]},
$iM:1,
$aM:function(){return[P.c,null]}}
W.et.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:2}
W.eu.prototype={
i:function(a,b){return P.aj(a.get(H.x(b)))},
w:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.c,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aj(t.value[1]))}},
gC:function(a){var u=H.i([],[P.c])
this.w(a,new W.ev(u))
return u},
gj:function(a){return a.size},
$aT:function(){return[P.c,null]},
$iM:1,
$aM:function(){return[P.c,null]}}
W.ev.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:2}
W.ab.prototype={$iab:1}
W.ew.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iab")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ab]},
$iy:1,
$ay:function(){return[W.ab]},
$ap:function(){return[W.ab]},
$il:1,
$al:function(){return[W.ab]},
$ib:1,
$ab:function(){return[W.ab]},
$at:function(){return[W.ab]}}
W.cn.prototype={
bN:function(a,b){var u,t,s,r
u=W.ak
t=new P.S(0,$.H,[u])
s=new P.cG(t,[u])
r=P.hO(["audio",!1,"video",!0],P.c,null)
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.cl(a,new P.h5([],[]).am(r),new W.eD(s),new W.eE(s))
return t},
cl:function(a,b,c,d){H.m(c,{func:1,ret:-1,args:[W.ak]})
H.m(d,{func:1,ret:-1,args:[W.aC]})
return a.getUserMedia(b,H.aF(c,1),H.aF(d,1))}}
W.eD.prototype={
$1:function(a){this.a.aj(0,H.k(a,"$iak"))},
$S:8}
W.eE.prototype={
$1:function(a){this.a.cG(H.k(a,"$iaC"))},
$S:18}
W.bw.prototype={}
W.aC.prototype={$iaC:1}
W.Z.prototype={
gX:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.e(P.cv("No elements"))
if(t>1)throw H.e(P.cv("More than one element"))
return u.firstChild},
F:function(a,b){var u,t,s,r
H.z(b,"$il",[W.u],"$al")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
h:function(a,b,c){var u,t
H.k(c,"$iu")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.r(t,b)
u.replaceChild(c,t[b])},
gq:function(a){var u=this.a.childNodes
return new W.c7(u,u.length,-1,[H.bW(C.T,u,"t",0)])},
gj:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.r(u,b)
return u[b]},
$ap:function(){return[W.u]},
$al:function(){return[W.u]},
$ab:function(){return[W.u]}}
W.u.prototype={
cV:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
k:function(a){var u=a.nodeValue
return u==null?this.bT(a):u},
$iu:1}
W.bx.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iu")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.u]},
$iy:1,
$ay:function(){return[W.u]},
$ap:function(){return[W.u]},
$il:1,
$al:function(){return[W.u]},
$ib:1,
$ab:function(){return[W.u]},
$at:function(){return[W.u]}}
W.ac.prototype={$iac:1,
gj:function(a){return a.length}}
W.eL.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iac")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ac]},
$iy:1,
$ay:function(){return[W.ac]},
$ap:function(){return[W.ac]},
$il:1,
$al:function(){return[W.ac]},
$ib:1,
$ab:function(){return[W.ac]},
$at:function(){return[W.ac]}}
W.eR.prototype={
i:function(a,b){return P.aj(a.get(H.x(b)))},
w:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.c,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aj(t.value[1]))}},
gC:function(a){var u=H.i([],[P.c])
this.w(a,new W.eS(u))
return u},
gj:function(a){return a.size},
$aT:function(){return[P.c,null]},
$iM:1,
$aM:function(){return[P.c,null]}}
W.eS.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:2}
W.b7.prototype={$ib7:1,
gj:function(a){return a.length}}
W.ad.prototype={$iad:1}
W.eU.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iad")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ad]},
$iy:1,
$ay:function(){return[W.ad]},
$ap:function(){return[W.ad]},
$il:1,
$al:function(){return[W.ad]},
$ib:1,
$ab:function(){return[W.ad]},
$at:function(){return[W.ad]}}
W.ae.prototype={$iae:1}
W.eV.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iae")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ae]},
$iy:1,
$ay:function(){return[W.ae]},
$ap:function(){return[W.ae]},
$il:1,
$al:function(){return[W.ae]},
$ib:1,
$ab:function(){return[W.ae]},
$at:function(){return[W.ae]}}
W.af.prototype={$iaf:1,
gj:function(a){return a.length}}
W.f_.prototype={
i:function(a,b){return a.getItem(H.x(b))},
w:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.c,P.c]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gC:function(a){var u=H.i([],[P.c])
this.w(a,new W.f0(u))
return u},
gj:function(a){return a.length},
$aT:function(){return[P.c,P.c]},
$iM:1,
$aM:function(){return[P.c,P.c]}}
W.f0.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:19}
W.a4.prototype={$ia4:1}
W.cw.prototype={
D:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.a8(a,b,c,d)
u=W.kN("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.Z(t).F(0,new W.Z(u))
return t}}
W.f8.prototype={
D:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.a8(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.D(u.createElement("table"),b,c,d)
u.toString
u=new W.Z(u)
s=u.gX(u)
s.toString
u=new W.Z(s)
r=u.gX(u)
t.toString
r.toString
new W.Z(t).F(0,new W.Z(r))
return t}}
W.f9.prototype={
D:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.a8(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.D(u.createElement("table"),b,c,d)
u.toString
u=new W.Z(u)
s=u.gX(u)
t.toString
s.toString
new W.Z(t).F(0,new W.Z(s))
return t}}
W.bE.prototype={$ibE:1}
W.ag.prototype={$iag:1}
W.a5.prototype={$ia5:1}
W.fb.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$ia5")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.a5]},
$iy:1,
$ay:function(){return[W.a5]},
$ap:function(){return[W.a5]},
$il:1,
$al:function(){return[W.a5]},
$ib:1,
$ab:function(){return[W.a5]},
$at:function(){return[W.a5]}}
W.fc.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iag")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ag]},
$iy:1,
$ay:function(){return[W.ag]},
$ap:function(){return[W.ag]},
$il:1,
$al:function(){return[W.ag]},
$ib:1,
$ab:function(){return[W.ag]},
$at:function(){return[W.ag]}}
W.fd.prototype={
gj:function(a){return a.length}}
W.ah.prototype={$iah:1}
W.fe.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iah")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.ah]},
$iy:1,
$ay:function(){return[W.ah]},
$ap:function(){return[W.ah]},
$il:1,
$al:function(){return[W.ah]},
$ib:1,
$ab:function(){return[W.ah]},
$at:function(){return[W.ah]}}
W.ff.prototype={
gj:function(a){return a.length}}
W.fo.prototype={
k:function(a){return String(a)}}
W.aE.prototype={$iaE:1}
W.fp.prototype={
gj:function(a){return a.length}}
W.bH.prototype={
gcw:function(a){var u,t,s
u=P.K
t=new P.S(0,$.H,[u])
s=H.m(new W.fr(new P.h9(t,[u])),{func:1,ret:-1,args:[P.K]})
this.cj(a)
this.co(a,W.iY(s,u))
return t},
co:function(a,b){return a.requestAnimationFrame(H.aF(H.m(b,{func:1,ret:-1,args:[P.K]}),1))},
cj:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.fr.prototype={
$1:function(a){var u=this.a
a=H.bV(H.i2(a),{futureOr:1,type:H.q(u,0)})
u=u.a
if(u.a!==0)H.a0(P.cv("Future already completed"))
u.Y(a)},
$S:20}
W.bI.prototype={$ibI:1}
W.fy.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iF")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.F]},
$iy:1,
$ay:function(){return[W.F]},
$ap:function(){return[W.F]},
$il:1,
$al:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$at:function(){return[W.F]}}
W.cJ.prototype={
k:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
B:function(a,b){var u
if(b==null)return!1
if(!H.aT(b,"$iU",[P.K],"$aU"))return!1
if(a.left===b.left)if(a.top===b.top){u=J.o(b)
u=a.width===u.gL(b)&&a.height===u.gK(b)}else u=!1
else u=!1
return u},
gm:function(a){return W.iQ(C.h.gm(a.left),C.h.gm(a.top),C.h.gm(a.width),C.h.gm(a.height))},
gK:function(a){return a.height},
gL:function(a){return a.width}}
W.fS.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$ia9")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.a9]},
$iy:1,
$ay:function(){return[W.a9]},
$ap:function(){return[W.a9]},
$il:1,
$al:function(){return[W.a9]},
$ib:1,
$ab:function(){return[W.a9]},
$at:function(){return[W.a9]}}
W.d_.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iu")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.u]},
$iy:1,
$ay:function(){return[W.u]},
$ap:function(){return[W.u]},
$il:1,
$al:function(){return[W.u]},
$ib:1,
$ab:function(){return[W.u]},
$at:function(){return[W.u]}}
W.h3.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$iaf")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.af]},
$iy:1,
$ay:function(){return[W.af]},
$ap:function(){return[W.af]},
$il:1,
$al:function(){return[W.af]},
$ib:1,
$ab:function(){return[W.af]},
$at:function(){return[W.af]}}
W.h7.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a[b]},
h:function(a,b,c){H.k(c,"$ia4")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){if(b<0||b>=a.length)return H.r(a,b)
return a[b]},
$iv:1,
$av:function(){return[W.a4]},
$iy:1,
$ay:function(){return[W.a4]},
$ap:function(){return[W.a4]},
$il:1,
$al:function(){return[W.a4]},
$ib:1,
$ab:function(){return[W.a4]},
$at:function(){return[W.a4]}}
W.fw.prototype={
w:function(a,b){var u,t,s,r,q
H.m(b,{func:1,ret:-1,args:[P.c,P.c]})
for(u=this.gC(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.a_)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gC:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.i([],[P.c])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.r(u,r)
q=H.k(u[r],"$ibI")
if(q.namespaceURI==null)C.a.l(t,q.name)}return t},
$aT:function(){return[P.c,P.c]},
$aM:function(){return[P.c,P.c]}}
W.fz.prototype={
i:function(a,b){return this.a.getAttribute(H.x(b))},
gj:function(a){return this.gC(this).length}}
W.fB.prototype={}
W.fA.prototype={}
W.fC.prototype={
cE:function(a){var u,t,s
u=this.b
if(u==null)return
t=this.d
s=t!=null
if(s){H.m(t,{func:1,args:[W.f]})
if(s)J.jW(u,this.c,t,!1)}this.b=null
this.scm(null)
return},
scm:function(a){this.d=H.m(a,{func:1,args:[W.f]})}}
W.fD.prototype={
$1:function(a){return this.a.$1(H.k(a,"$if"))},
$S:21}
W.aR.prototype={
c7:function(a){var u,t
u=$.i6()
if(u.a===0){for(t=0;t<262;++t)u.h(0,C.P[t],W.lK())
for(t=0;t<12;++t)u.h(0,C.q[t],W.lL())}},
R:function(a){return $.jF().A(0,W.bm(a))},
J:function(a,b,c){var u,t,s
u=W.bm(a)
t=$.i6()
s=t.i(0,H.h(u)+"::"+b)
if(s==null)s=t.i(0,"*::"+b)
if(s==null)return!1
return H.hk(s.$4(a,b,c,this))},
$ia3:1}
W.t.prototype={
gq:function(a){return new W.c7(a,this.gj(a),-1,[H.bW(this,a,"t",0)])}}
W.co.prototype={
R:function(a){return C.a.aZ(this.a,new W.eG(a))},
J:function(a,b,c){return C.a.aZ(this.a,new W.eF(a,b,c))},
$ia3:1}
W.eG.prototype={
$1:function(a){return H.k(a,"$ia3").R(this.a)},
$S:9}
W.eF.prototype={
$1:function(a){return H.k(a,"$ia3").J(this.a,this.b,this.c)},
$S:9}
W.d7.prototype={
c8:function(a,b,c,d){var u,t,s
this.a.F(0,c)
u=b.a4(0,new W.h1())
t=b.a4(0,new W.h2())
this.b.F(0,u)
s=this.c
s.F(0,C.R)
s.F(0,t)},
R:function(a){return this.a.A(0,W.bm(a))},
J:function(a,b,c){var u,t
u=W.bm(a)
t=this.c
if(t.A(0,H.h(u)+"::"+b))return this.d.cv(c)
else if(t.A(0,"*::"+b))return this.d.cv(c)
else{t=this.b
if(t.A(0,H.h(u)+"::"+b))return!0
else if(t.A(0,"*::"+b))return!0
else if(t.A(0,H.h(u)+"::*"))return!0
else if(t.A(0,"*::*"))return!0}return!1},
$ia3:1}
W.h1.prototype={
$1:function(a){return!C.a.A(C.q,H.x(a))},
$S:10}
W.h2.prototype={
$1:function(a){return C.a.A(C.q,H.x(a))},
$S:10}
W.ha.prototype={
J:function(a,b,c){if(this.bW(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.A(0,b)
return!1}}
W.hb.prototype={
$1:function(a){return"TEMPLATE::"+H.h(H.x(a))},
$S:22}
W.h8.prototype={
R:function(a){var u=J.I(a)
if(!!u.$ibB)return!1
u=!!u.$ij
if(u&&W.bm(a)==="foreignObject")return!1
if(u)return!0
return!1},
J:function(a,b,c){if(b==="is"||C.i.bP(b,"on"))return!1
return this.R(a)},
$ia3:1}
W.c7.prototype={
n:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.saT(J.bY(this.a,u))
this.c=u
return!0}this.saT(null)
this.c=t
return!1},
gt:function(a){return this.d},
saT:function(a){this.d=H.A(a,H.q(this,0))},
$iaB:1}
W.a3.prototype={}
W.h_.prototype={$imx:1}
W.dm.prototype={
at:function(a){new W.he(this).$2(a,null)},
U:function(a,b){if(b==null)J.ih(a)
else b.removeChild(a)},
cq:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.kg(a)
s=t.a.getAttribute("is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.a7(o)}q="element unprintable"
try{q=J.bZ(a)}catch(o){H.a7(o)}try{p=W.bm(a)
this.cp(H.k(a,"$iV"),b,u,q,p,H.k(t,"$iM"),H.x(s))}catch(o){if(H.a7(o) instanceof P.ap)throw o
else{this.U(a,b)
window
n="Removing corrupted element "+H.h(q)
if(typeof console!="undefined")window.console.warn(n)}}},
cp:function(a,b,c,d,e,f,g){var u,t,s,r,q
if(c){this.U(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.R(a)){this.U(a,b)
window
u="Removing disallowed element <"+H.h(e)+"> from "+H.h(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.J(a,"is",g)){this.U(a,b)
window
u="Removing disallowed type extension <"+H.h(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gC(f)
t=H.i(u.slice(0),[H.q(u,0)])
for(s=f.gC(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.r(t,s)
r=t[s]
if(!this.a.J(a,J.kv(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.h(e)+" "+r+'="'+H.h(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.I(a).$ibE)this.at(a.content)},
$imh:1}
W.he.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.cq(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.U(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.a7(r)
q=H.k(u,"$iu")
if(s){p=q.parentNode
if(p!=null)p.removeChild(q)}else a.removeChild(q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.k(t,"$iu")}},
$S:23}
W.cI.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.bO.prototype={}
W.bP.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.dd.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.bQ.prototype={}
W.bR.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
P.h4.prototype={
bo:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.l(u,a)
C.a.l(this.b,null)
return t},
am:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.I(a)
if(!!t.$iaK)return new Date(a.a)
if(!!t.$ia2)return a
if(!!t.$iaY)return a
if(!!t.$ibn)return a
if(!!t.$ibp)return a
if(!!t.$ibu||!!t.$iaQ||!!t.$ibt)return a
if(!!t.$iM){s=this.bo(a)
r=this.b
if(s>=r.length)return H.r(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.h(r,s,q)
t.w(a,new P.h6(u,this))
return u.a}if(!!t.$ib){s=this.bo(a)
u=this.b
if(s>=u.length)return H.r(u,s)
q=u[s]
if(q!=null)return q
return this.cI(a,s)}throw H.e(P.hR("structured clone of other type"))},
cI:function(a,b){var u,t,s,r
u=J.bd(a)
t=u.gj(a)
s=new Array(t)
C.a.h(this.b,b,s)
for(r=0;r<t;++r)C.a.h(s,r,this.am(u.i(a,r)))
return s}}
P.h6.prototype={
$2:function(a,b){this.a.a[a]=this.b.am(b)},
$S:3}
P.hl.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.h5.prototype={}
P.fV.prototype={}
P.U.prototype={}
P.au.prototype={$iau:1}
P.ef.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a.getItem(b)},
h:function(a,b,c){H.k(c,"$iau")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){return this.i(a,b)},
$ap:function(){return[P.au]},
$il:1,
$al:function(){return[P.au]},
$ib:1,
$ab:function(){return[P.au]},
$at:function(){return[P.au]}}
P.av.prototype={$iav:1}
P.eI.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a.getItem(b)},
h:function(a,b,c){H.k(c,"$iav")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){return this.i(a,b)},
$ap:function(){return[P.av]},
$il:1,
$al:function(){return[P.av]},
$ib:1,
$ab:function(){return[P.av]},
$at:function(){return[P.av]}}
P.eM.prototype={
gj:function(a){return a.length}}
P.bB.prototype={$ibB:1}
P.f7.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a.getItem(b)},
h:function(a,b,c){H.x(c)
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){return this.i(a,b)},
$ap:function(){return[P.c]},
$il:1,
$al:function(){return[P.c]},
$ib:1,
$ab:function(){return[P.c]},
$at:function(){return[P.c]}}
P.j.prototype={
D:function(a,b,c,d){var u,t,s,r,q,p
u=H.i([],[W.a3])
C.a.l(u,W.iP(null))
C.a.l(u,W.iR())
C.a.l(u,new W.h8())
c=new W.dm(new W.co(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.t).cJ(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.Z(r)
p=u.gX(u)
for(;u=p.firstChild,u!=null;)q.appendChild(u)
return q},
$ij:1}
P.aw.prototype={$iaw:1}
P.fg.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return a.getItem(b)},
h:function(a,b,c){H.k(c,"$iaw")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){return this.i(a,b)},
$ap:function(){return[P.aw]},
$il:1,
$al:function(){return[P.aw]},
$ib:1,
$ab:function(){return[P.aw]},
$at:function(){return[P.aw]}}
P.cS.prototype={}
P.cT.prototype={}
P.d2.prototype={}
P.d3.prototype={}
P.de.prototype={}
P.df.prototype={}
P.dk.prototype={}
P.dl.prototype={}
P.a8.prototype={$il:1,
$al:function(){return[P.a6]},
$ib:1,
$ab:function(){return[P.a6]},
$ilc:1}
P.dK.prototype={
gj:function(a){return a.length}}
P.dL.prototype={
i:function(a,b){return P.aj(a.get(H.x(b)))},
w:function(a,b){var u,t
H.m(b,{func:1,ret:-1,args:[P.c,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.aj(t.value[1]))}},
gC:function(a){var u=H.i([],[P.c])
this.w(a,new P.dM(u))
return u},
gj:function(a){return a.size},
$aT:function(){return[P.c,null]},
$iM:1,
$aM:function(){return[P.c,null]}}
P.dM.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:2}
P.dN.prototype={
gj:function(a){return a.length}}
P.aX.prototype={}
P.eJ.prototype={
gj:function(a){return a.length}}
P.cH.prototype={}
P.c0.prototype={$ic0:1}
P.c9.prototype={$ic9:1}
P.cp.prototype={$icp:1}
P.eP.prototype={
aY:function(a,b){return a.activeTexture(b)},
b_:function(a,b,c){return a.attachShader(b,c)},
b0:function(a,b,c){return a.bindBuffer(b,c)},
b2:function(a,b,c){return a.bindFramebuffer(b,c)},
b3:function(a,b,c){return a.bindTexture(b,c)},
b4:function(a,b){return a.blendEquation(b)},
b5:function(a,b,c){return a.blendFunc(b,c)},
b6:function(a,b,c,d){return a.bufferData(b,c,d)},
b8:function(a,b){return a.checkFramebufferStatus(b)},
b9:function(a,b){return a.clear(b)},
ba:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bb:function(a,b){return a.compileShader(b)},
bc:function(a){return a.createBuffer()},
bd:function(a){return a.createFramebuffer()},
be:function(a){return a.createProgram()},
bf:function(a,b){return a.createShader(b)},
bg:function(a){return a.createTexture()},
bh:function(a,b){return a.depthMask(b)},
bi:function(a,b){return a.disable(b)},
bj:function(a,b,c,d){return a.drawArrays(b,c,d)},
bk:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bl:function(a,b){return a.enable(b)},
bm:function(a,b){return a.enableVertexAttribArray(b)},
bp:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
a5:function(a){return P.aj(a.getContextAttributes())},
an:function(a){return a.getError()},
ao:function(a,b){return a.getProgramInfoLog(b)},
ap:function(a,b,c){return a.getProgramParameter(b,c)},
aq:function(a,b){return a.getShaderInfoLog(b)},
ar:function(a,b,c){return a.getShaderParameter(b,c)},
as:function(a,b,c){return a.getUniformLocation(b,c)},
bq:function(a,b){return a.linkProgram(b)},
br:function(a,b,c){return a.pixelStorei(b,c)},
aw:function(a,b,c){return a.shaderSource(b,c)},
ax:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bt:function(a,b,c,d,e,f,g){a.texImage2D(b,c,d,e,f,g)
return},
bu:function(a,b,c,d){return a.texParameterf(b,c,d)},
bv:function(a,b,c,d){return a.texParameteri(b,c,d)},
bx:function(a,b,c){return a.uniform1f(b,c)},
by:function(a,b,c){return a.uniform1fv(b,c)},
bz:function(a,b,c){return a.uniform1i(b,c)},
bA:function(a,b,c){return a.uniform1iv(b,c)},
bB:function(a,b,c){return a.uniform2fv(b,c)},
bC:function(a,b,c){return a.uniform3fv(b,c)},
bD:function(a,b,c){return a.uniform4fv(b,c)},
bE:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bF:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bG:function(a,b){return a.useProgram(b)},
bH:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bJ:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.eQ.prototype={
cA:function(a,b){return a.beginTransformFeedback(b)},
cD:function(a,b){return a.bindVertexArray(b)},
cK:function(a){return a.createVertexArray()},
cL:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
cM:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
cN:function(a){return a.endTransformFeedback()},
d_:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
d2:function(a,b,c,d){this.ct(a,b,H.z(c,"$ib",[P.c],"$ab"),d)
return},
ct:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
d3:function(a,b,c){return a.vertexAttribDivisor(b,c)},
aY:function(a,b){return a.activeTexture(b)},
b_:function(a,b,c){return a.attachShader(b,c)},
b0:function(a,b,c){return a.bindBuffer(b,c)},
b2:function(a,b,c){return a.bindFramebuffer(b,c)},
b3:function(a,b,c){return a.bindTexture(b,c)},
b4:function(a,b){return a.blendEquation(b)},
b5:function(a,b,c){return a.blendFunc(b,c)},
b6:function(a,b,c,d){return a.bufferData(b,c,d)},
b8:function(a,b){return a.checkFramebufferStatus(b)},
b9:function(a,b){return a.clear(b)},
ba:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bb:function(a,b){return a.compileShader(b)},
bc:function(a){return a.createBuffer()},
bd:function(a){return a.createFramebuffer()},
be:function(a){return a.createProgram()},
bf:function(a,b){return a.createShader(b)},
bg:function(a){return a.createTexture()},
bh:function(a,b){return a.depthMask(b)},
bi:function(a,b){return a.disable(b)},
bj:function(a,b,c,d){return a.drawArrays(b,c,d)},
bk:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bl:function(a,b){return a.enable(b)},
bm:function(a,b){return a.enableVertexAttribArray(b)},
bp:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
a5:function(a){return P.aj(a.getContextAttributes())},
an:function(a){return a.getError()},
ao:function(a,b){return a.getProgramInfoLog(b)},
ap:function(a,b,c){return a.getProgramParameter(b,c)},
aq:function(a,b){return a.getShaderInfoLog(b)},
ar:function(a,b,c){return a.getShaderParameter(b,c)},
as:function(a,b,c){return a.getUniformLocation(b,c)},
bq:function(a,b){return a.linkProgram(b)},
br:function(a,b,c){return a.pixelStorei(b,c)},
aw:function(a,b,c){return a.shaderSource(b,c)},
ax:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bt:function(a,b,c,d,e,f,g){a.texImage2D(b,c,d,e,f,g)
return},
bu:function(a,b,c,d){return a.texParameterf(b,c,d)},
bv:function(a,b,c,d){return a.texParameteri(b,c,d)},
bx:function(a,b,c){return a.uniform1f(b,c)},
by:function(a,b,c){return a.uniform1fv(b,c)},
bz:function(a,b,c){return a.uniform1i(b,c)},
bA:function(a,b,c){return a.uniform1iv(b,c)},
bB:function(a,b,c){return a.uniform2fv(b,c)},
bC:function(a,b,c){return a.uniform3fv(b,c)},
bD:function(a,b,c){return a.uniform4fv(b,c)},
bE:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
bF:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
bG:function(a,b){return a.useProgram(b)},
bH:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
bJ:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.cr.prototype={$icr:1}
P.cx.prototype={$icx:1}
P.cC.prototype={$icC:1}
P.cD.prototype={$icD:1}
P.eW.prototype={
gj:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.L(b,a,null,null,null))
return P.aj(a.item(b))},
h:function(a,b,c){H.k(c,"$iM")
throw H.e(P.G("Cannot assign element of immutable List."))},
p:function(a,b){return this.i(a,b)},
$ap:function(){return[[P.M,,,]]},
$il:1,
$al:function(){return[[P.M,,,]]},
$ib:1,
$ab:function(){return[[P.M,,,]]},
$at:function(){return[[P.M,,,]]}}
P.da.prototype={}
P.db.prototype={}
G.ex.prototype={}
G.J.prototype={
k:function(a){var u,t,s,r
u=H.i(["{"+new H.cB(H.lI(this)).k(0)+"}["+this.a+"]"],[P.c])
for(t=this.d,s=new H.aa(t,[H.q(t,0)]),s=s.gq(s);s.n();){r=s.d
C.a.l(u,H.h(r)+": "+H.h(t.i(0,r)))}return C.a.V(u,"\n")}}
G.dR.prototype={
bn:function(a,b,c){J.kd(this.a,b)
if(c>0)J.kB(this.a,b,c)},
bI:function(a,b,c,d,e,f,g,h){J.hB(this.a,34962,b)
J.kC(this.a,c,d,e,!1,g,h)}}
G.c8.prototype={
ay:function(a,b,c,d,e){var u,t
u=this.a
t=this.b
J.hC(u.a,36160,t)
J.kD(u.a,b,c,d,e)
if(a!==0)J.k1(u.a,a)}}
G.e6.prototype={}
G.c6.prototype={}
G.e9.prototype={
aD:function(a){switch($.an().i(0,a).a){case"vec2":this.e.h(0,a,H.i([],[T.P]))
break
case"vec3":this.e.h(0,a,H.i([],[T.N]))
break
case"vec4":this.e.h(0,a,H.i([],[T.b8]))
break
case"float":this.e.h(0,a,H.i([],[P.a6]))
break
case"uvec4":this.e.h(0,a,H.i([],[[P.b,P.C]]))
break}},
c_:function(a){var u,t,s,r
H.z(a,"$ib",[T.N],"$ab")
for(u=this.d,t=0;t<4;++t){s=a[t]
r=new T.N(new Float32Array(3))
r.av(s)
C.a.l(u,r)}},
bY:function(a,b){var u,t,s,r,q,p
u=[T.P]
H.z(b,"$ib",u,"$ab")
t=H.z(this.e.i(0,a),"$ib",u,"$ab")
for(u=t&&C.a,s=0;s<4;++s){r=b[s]
q=new Float32Array(2)
p=r.a
q[1]=p[1]
q[0]=p[0]
u.l(t,new T.P(q))}},
bZ:function(a,b){var u,t,s,r,q
u=[T.N]
H.z(b,"$ib",u,"$ab")
t=H.z(this.e.i(0,a),"$ib",u,"$ab")
for(u=t&&C.a,s=0;s<4;++s){r=b[s]
q=new T.N(new Float32Array(3))
q.av(r)
u.l(t,q)}},
c0:function(){var u,t,s,r,q,p,o,n,m
u=this.c
t=new Array(u.length*6)
t.fixed$length=Array
s=H.i(t,[P.C])
for(t=this.b,r=0,q=0;!1;++q){if(q>=0)return H.r(t,q)
p=t[q]
C.a.h(s,r,p.gd9(p))
C.a.h(s,r+1,p.gda(p))
C.a.h(s,r+2,p.gdc(p))
r+=3}for(t=u.length,q=0;q<u.length;u.length===t||(0,H.a_)(u),++q){o=u[q]
n=o.a
C.a.h(s,r,n)
C.a.h(s,r+1,o.b)
m=o.c
C.a.h(s,r+2,m)
C.a.h(s,r+3,n)
C.a.h(s,r+4,m)
C.a.h(s,r+5,o.d)
r+=6}return s},
k:function(a){var u,t,s,r,q
u=H.i(["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"],[P.c])
for(t=this.e,s=new H.aa(t,[H.q(t,0)]),s=s.gq(s);s.n();){r=s.d
q=$.an().i(0,r).a
C.a.l(u,H.h(r)+"["+q+","+t.i(0,r).length+"]")}return C.a.V(u," ")}}
G.cA.prototype={}
G.cz.prototype={}
G.ep.prototype={}
G.er.prototype={
aB:function(a,b,c){var u,t
C.i.aa(a,0)
H.k(b,"$ia8")
this.cy.h(0,a,b)
u=this.d
t=this.r.i(0,a)
J.hB(u.a,34962,t)
J.ib(u.a,34962,b,35048)},
c1:function(){var u=this.cx
if(u!=null)return u.length
return this.ch.length/3|0},
T:function(a,b,c){var u,t,s,r,q
u=J.i8(a,0)===105
if(u&&this.z===0)this.z=C.c.bX(b.length,c)
t=this.r
s=this.d
t.h(0,a,J.hE(s.a))
this.aB(a,b,c)
r=$.an().i(0,a)
if(r==null)throw H.e("Unknown canonical "+a)
q=this.x.i(0,a)
J.dD(s.a,this.e)
s.bn(0,q,u?1:0)
s.bI(0,t.i(0,a),q,r.aE(),5126,!1,0,0)},
k:function(a){var u,t,s,r
u=this.cx
t=H.i(["Faces:"+(u==null?0:u.length)],[P.c])
for(u=this.cy,s=new H.aa(u,[H.q(u,0)]),s=s.gq(s);s.n();){r=s.d
C.a.l(t,H.h(r)+":"+u.i(0,r).length)}return"MESH["+this.a+"] "+C.a.V(t,"  ")},
sae:function(a){this.cx=H.z(a,"$ib",[P.C],"$ab")}}
G.hI.prototype={}
G.eO.prototype={
c2:function(a,b,c,d){var u,t,s,r,q,p,o
for(u=this.e.d,t=u.length,s=this.y,r=this.d,q=this.r,p=0;p<u.length;u.length===t||(0,H.a_)(u),++p){o=u[p]
s.h(0,o,J.ig(r.a,q,o))}for(u=this.f.d,t=u.length,p=0;p<u.length;u.length===t||(0,H.a_)(u),++p){o=u[p]
s.h(0,o,J.ig(r.a,q,o))}},
c4:function(){var u,t,s,r
u=this.z
t=this.y
if(u.a===t.a&&this.Q.a===this.x.a)return H.i([],[P.c])
s=H.i([],[P.c])
for(t=new H.aa(t,[H.q(t,0)]),t=t.gq(t);t.n();){r=t.d
if(!u.a2(0,r))C.a.l(s,r)}for(u=this.x,u=P.lm(u,u.r,H.q(u,0)),t=this.Q;u.n();){r=u.d
if(!t.A(0,r))C.a.l(s,r)}return s},
c6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.z(b,"$iM",[P.c,P.w],"$aM")
u=Date.now()
for(t=new H.aa(b,[H.q(b,0)]),t=t.gq(t),s=this.d,r=this.y,q=this.z,p=this.a,o=0;t.n();){n=t.d
switch(J.i8(n,0)){case 117:if(r.a2(0,n)){m=b.i(0,n)
if(q.a2(0,n))H.hy("E:"+(p+":  "+n+" : group ["+a+"] overwrites ["+n+"]"))
q.h(0,n,a)
l=$.an().i(0,n)
if(l==null)H.a0("unknown "+n)
k=r.i(0,n)
n=l.a
switch(n){case"int":if(l.c===0){H.X(m)
J.hG(s.a,k,m)}else if(!!J.I(m).$ikS)J.kz(s.a,k,m)
break
case"float":if(l.c===0){H.j1(m)
J.kx(s.a,k,m)}else if(!!J.I(m).$ia8)J.ky(s.a,k,m)
break
case"mat4":if(l.c===0){n=C.y.gbQ(H.az(m,"$img"))
J.im(s.a,k,!1,n)}else if(!!J.I(m).$ia8)J.im(s.a,k,!1,m)
break
case"mat3":if(l.c===0){n=H.az(m,"$ibq").a
J.il(s.a,k,!1,n)}else if(!!J.I(m).$ia8)J.il(s.a,k,!1,m)
break
case"vec4":if(l.c===0){n=C.y.gbQ(H.az(m,"$ib8"))
J.ik(s.a,k,n)}else{H.k(m,"$ia8")
J.ik(s.a,k,m)}break
case"vec3":n=l.c
j=s.a
if(n===0)J.ij(j,k,H.az(m,"$iN").a)
else J.ij(j,k,H.k(m,"$ia8"))
break
case"vec2":n=l.c
j=s.a
if(n===0)J.ii(j,k,H.az(m,"$iP").a)
else J.ii(j,k,H.k(m,"$ia8"))
break
case"sampler2D":case"sampler2DShadow":n=this.ch
if(typeof n!=="number")return H.hq(n)
J.i9(s.a,33984+n)
n=H.az(m,"$ibF").b
J.aH(s.a,3553,n)
n=this.ch
J.hG(s.a,k,n)
n=this.ch
if(typeof n!=="number")return n.E()
this.ch=n+1
break
case"samplerCube":n=this.ch
if(typeof n!=="number")return H.hq(n)
J.i9(s.a,33984+n)
n=H.az(m,"$ibF").b
J.aH(s.a,34067,n)
n=this.ch
J.hG(s.a,k,n)
n=this.ch
if(typeof n!=="number")return n.E()
this.ch=n+1
break
default:H.hy("Error: unknow uniform type: "+n)}++o}break
case 99:m=b.i(0,n)
switch(n){case"cDepthTest":n=J.aW(m,!0)
j=s.a
if(n)J.dE(j,2929)
else J.hF(j,2929)
break
case"cStencilFunc":H.az(m,"$icA")
n=m.a
j=s.a
if(n===1281)J.hF(j,2960)
else{J.dE(j,2960)
j=m.b
i=m.c
J.kr(s.a,n,j,i)}break
case"cDepthWrite":H.hk(m)
J.k7(s.a,m)
break
case"cBlendEquation":H.az(m,"$icz")
n=m.a
j=s.a
if(n===1281)J.hF(j,3042)
else{J.dE(j,3042)
j=m.b
i=m.c
J.k_(s.a,j,i)
J.jZ(s.a,n)}break}++o
break}}h=P.kM(Date.now()-new P.aK(u,!1).a,0)
""+o
h.k(0)},
aC:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.z(b,"$ib",[G.J],"$ab")
Date.now()
u=this.d
J.kA(u.a,this.r)
this.ch=0
t=this.z
if(t.a>0){t.f=null
t.e=null
t.d=null
t.c=null
t.b=null
t.a=0
t.aU()}for(s=0;s<1;++s){r=b[s]
this.c6(r.a,r.d)}t=this.Q
if(t.a>0){t.f=null
t.e=null
t.d=null
t.c=null
t.b=null
t.a=0
t.aP()}for(q=a.cy,q=new H.aa(q,[H.q(q,0)]),q=q.gq(q);q.n();)t.l(0,q.d)
p=this.c4()
if(p.length!==0)P.aU("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(p)))
J.dD(a.d.a,a.e)
o=this.e.f.length>0
t=a.f
q=a.c1()
n=a.Q
m=a.z
if(o)J.jY(u.a,t)
if(n!==-1){l=u.a
if(m>1)J.kb(l,t,q,n,0,m)
else J.ka(l,t,q,n,0)}else{n=u.a
if(m>1)J.k9(n,t,0,q,m)
else J.k8(n,t,0,q)}if(o)J.ke(u.a)}}
G.B.prototype={
aE:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:return-1}}}
G.cs.prototype={
az:function(a){var u,t,s,r,q
H.z(a,"$ib",[P.c],"$ab")
for(u=a.length,t=this.c,s=this.x,r=0;r<a.length;a.length===u||(0,H.a_)(a),++r){q=a[r]
C.a.l(t,q)
s.h(0,q,this.r);++this.r}C.a.a7(t)},
u:function(a){var u,t,s
H.z(a,"$ib",[P.c],"$ab")
for(u=a.length,t=this.d,s=0;s<a.length;a.length===u||(0,H.a_)(a),++s)C.a.l(t,a[s])
C.a.a7(t)},
aA:function(a){var u,t
H.z(a,"$ib",[P.c],"$ab")
for(u=this.e,t=0;t<1;++t)C.a.l(u,a[t])
C.a.a7(u)},
aG:function(a){this.b=this.aI(!0,H.z(a,"$ib",[P.c],"$ab"),null)},
v:function(a){this.b=this.aI(!1,H.z(a,"$ib",[P.c],"$ab"),null)},
aI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
u=[P.c]
H.z(b,"$ib",u,"$ab")
t=this.c
s=t.length===0
r=H.i(["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""],u)
for(u=t.length,q=this.x,p=0;p<t.length;t.length===u||(0,H.a_)(t),++p){o=t[p]
n=$.an().i(0,o)
C.a.l(r,"layout (location="+H.h(q.i(0,o))+") in "+n.a+" "+H.h(o)+";")}C.a.l(r,"")
m=s?"in":"out"
if(s)C.a.l(r,"out vec4 oFragColor;")
for(u=this.e,t=u.length,p=0;p<u.length;u.length===t||(0,H.a_)(u),++p){l=u[p]
n=$.an().i(0,l)
C.a.l(r,m+" "+n.a+" "+H.h(l)+";")}for(u=this.f,t=u.length,p=0;p<u.length;u.length===t||(0,H.a_)(u),++p){l=u[p]
n=$.an().i(0,l)
C.a.l(r,m+" "+n.a+" "+H.h(l)+";")}C.a.l(r,"")
for(u=this.d,t=u.length,p=0;p<u.length;u.length===t||(0,H.a_)(u),++p){l=u[p]
n=$.an().i(0,l)
q=n.c
k=q===0?"":"["+q+"]"
C.a.l(r,"uniform "+n.a+" "+H.h(l)+k+";")}C.a.l(r,"")
if(a)C.a.l(r,"void main(void) {")
C.a.F(r,b)
if(a)C.a.l(r,"}")
return C.a.V(r,"\n")}}
G.cy.prototype={
aF:function(a,b){var u=this.e
if(u!==1)J.kt(a.a,b,34046,u)
u=this.r
J.dG(a.a,b,10240,u)
u=this.f
J.dG(a.a,b,10241,u)
if(this.b){J.dG(a.a,b,10242,33071)
J.dG(a.a,b,10243,33071)}}}
G.bF.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.fk.prototype={
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.h(this.f)+" X "+H.h(this.r)+"]"}}
G.eb.prototype={
aH:function(a){var u,t
u=this.d
t=this.c
J.aH(u.a,t,this.b)
J.ks(u.a,t,0,6408,6408,5121,a)}}
R.eY.prototype={
c3:function(a,b,c){var u,t
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
R.eZ.prototype={
c5:function(a){var u,t,s,r,q,p
u=++this.e
if(a-this.f<1000)return
t=u*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.d1(t,2)+" fps"
C.M.bO(this.c,"")
s=C.c.P(30*C.x.cF(t),90)
if(s<0)s=0
if(s>30)s=30
u=this.d
r=H.k(u.firstChild,"$iV")
q=r.style
p=""+s+"px"
q.height=p
u.appendChild(r)}}
D.ek.prototype={
$1:function(a){var u,t
H.k(a,"$iak")
u=document.createElement("video")
u.autoplay=!0
t=new W.fA(u,"playing",!1,[W.f])
t.gcO(t).W(new D.ej(this.a,u),-1)
u.srcObject=a},
$S:8}
D.ej.prototype={
$1:function(a){H.k(a,"$if")
return this.a.aj(0,this.b)},
$S:24}
D.el.prototype={
$1:function(a){P.aU("E:"+("Camera open error "+H.h(a)))
this.a.aj(0,null)},
$S:25}
A.hp.prototype={
$2:function(a,b){var u,t
H.X(a)
u=J.bg(b)
if(typeof a!=="number")return a.E()
t=536870911&a+u
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:26}
T.bq.prototype={
k:function(a){return"[0] "+this.a6(0).k(0)+"\n[1] "+this.a6(1).k(0)+"\n[2] "+this.a6(2).k(0)+"\n"},
i:function(a,b){return C.j.i(this.a,b)},
B:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.bq){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]&&u[2]===s[2]&&u[3]===s[3]&&u[4]===s[4]&&u[5]===s[5]&&u[6]===s[6]&&u[7]===s[7]&&u[8]===s[8]}else u=!1
return u},
gm:function(a){return A.i_(this.a)},
a6:function(a){var u,t,s
u=new Float32Array(3)
t=this.a
if(a>=9)return H.r(t,a)
u[0]=t[a]
s=3+a
if(s>=9)return H.r(t,s)
u[1]=t[s]
s=6+a
if(s>=9)return H.r(t,s)
u[2]=t[s]
return new T.N(u)},
au:function(a,b){var u=this.a
u[0]=u[0]*b
u[1]=u[1]*b
u[2]=u[2]*b
u[3]=u[3]*b
u[4]=u[4]*b
u[5]=u[5]*b
u[6]=u[6]*b
u[7]=u[7]*b
u[8]=u[8]*b}}
T.P.prototype={
H:function(a,b){var u=this.a
u[0]=a
u[1]=b},
k:function(a){var u=this.a
return"["+H.h(u[0])+","+H.h(u[1])+"]"},
B:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.P){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]}else u=!1
return u},
gm:function(a){return A.i_(this.a)},
i:function(a,b){return C.j.i(this.a,b)},
gj:function(a){var u,t
u=this.a
t=u[0]
u=u[1]
return Math.sqrt(t*t+u*u)},
gbK:function(a){return this.a[0]},
gbL:function(a){return this.a[1]}}
T.N.prototype={
O:function(a,b,c){var u=this.a
u[0]=a
u[1]=b
u[2]=c},
av:function(a){var u,t
u=a.a
t=this.a
t[0]=u[0]
t[1]=u[1]
t[2]=u[2]},
k:function(a){var u=this.a
return"["+H.h(u[0])+","+H.h(u[1])+","+H.h(u[2])+"]"},
B:function(a,b){var u,t,s
if(b==null)return!1
if(b instanceof T.N){u=this.a
t=u[0]
s=b.a
u=t===s[0]&&u[1]===s[1]&&u[2]===s[2]}else u=!1
return u},
gm:function(a){return A.i_(this.a)},
i:function(a,b){return C.j.i(this.a,b)},
gj:function(a){var u,t,s
u=this.a
t=u[0]
s=u[1]
u=u[2]
return Math.sqrt(t*t+s*s+u*u)},
gbK:function(a){return this.a[0]},
gbL:function(a){return this.a[1]},
gd4:function(a){return this.a[2]}}
T.b8.prototype={}
T.c5.prototype={}
T.hv.prototype={
$1:function(a){var u,t,s,r,q,p,o,n
H.i2(a)
try{t=this.a
t.aH(t.f)
J.aH(t.d.a,t.c,null)}catch(s){u=H.a7(s)
P.aU(u)}t=this.b
r=this.c
q=this.d
t.ay(17664,0,0,r,q)
p=this.f
o=[G.J]
this.e.aC(p,H.i([this.r],o))
this.x.ay(17664,0,0,r,q)
n=$.hA().i(0,$.i7().value)
q=n.c
if(typeof a!=="number")return a.d6()
r=q.d
r.h(0,"uTime",a/1000)
r.h(0,"uTexture",t.c)
n.b.aC(p,H.i([q],o))
C.aa.gcw(window).W(this,-1)
this.y.c5(a+0)},
$S:27}
T.hw.prototype={
$1:function(a){H.k(a,"$iR")
window.alert("Camera error "+H.h(a)+": - do you have a camera installed?")},
$S:28};(function aliases(){var u=J.a.prototype
u.bT=u.k
u=J.cd.prototype
u.bV=u.k
u=P.l.prototype
u.bU=u.a4
u=W.V.prototype
u.a8=u.D
u=W.d7.prototype
u.bW=u.J})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff
u(J,"lr","kW",29)
t(P,"ly","lf",4)
t(P,"lz","lg",4)
t(P,"lA","lh",4)
s(P,"j0","lw",1)
r(W,"lK",4,null,["$4"],["lk"],11,0)
r(W,"lL",4,null,["$4"],["ll"],11,0)
t(T,"lB","lT",30)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.w,null)
s(P.w,[H.hM,J.a,J.dJ,P.l,H.cg,P.aB,H.b3,H.fh,P.b2,H.b_,H.dc,H.cB,P.T,H.eg,H.eh,P.hc,P.fx,P.am,P.S,P.cF,P.f1,P.f2,P.R,P.hf,P.h0,P.bJ,P.cU,P.cV,P.p,P.Q,P.aK,P.K,P.aL,P.cu,P.fE,P.aM,P.b,P.M,P.E,P.Y,P.c,P.bD,W.dU,W.aR,W.t,W.co,W.d7,W.h8,W.c7,W.a3,W.h_,W.dm,P.h4,P.fV,P.a8,G.ex,G.dR,G.c8,G.e6,G.c6,G.e9,G.cA,G.cz,G.hI,G.B,G.cs,G.cy,G.bF,R.eY,T.bq,T.P,T.N,T.b8,T.c5])
s(J.a,[J.ed,J.cc,J.cd,J.aN,J.b4,J.aO,H.bu,H.aQ,W.d,W.dH,W.aY,W.dP,W.ar,W.as,W.F,W.cI,W.dY,W.dZ,W.cK,W.c4,W.cM,W.e0,W.f,W.cO,W.a9,W.ea,W.cQ,W.bp,W.ch,W.eq,W.cW,W.cX,W.ab,W.cY,W.bw,W.aC,W.d0,W.ac,W.d4,W.d6,W.ae,W.d8,W.af,W.dd,W.a4,W.dg,W.fd,W.ah,W.di,W.ff,W.fo,W.dn,W.dq,W.ds,W.du,W.dw,P.au,P.cS,P.av,P.d2,P.eM,P.de,P.aw,P.dk,P.dK,P.cH,P.c0,P.c9,P.cp,P.eP,P.eQ,P.cr,P.cx,P.cC,P.cD,P.da])
s(J.cd,[J.eK,J.aD,J.aP])
t(J.hL,J.aN)
s(J.b4,[J.cb,J.ca])
s(P.l,[H.e3,H.cE])
s(H.e3,[H.b5,H.aa])
t(H.eo,H.b5)
t(H.fq,P.aB)
s(P.b2,[H.eH,H.ee,H.fm,H.fj,H.dQ,H.eT,P.by,P.ap,P.fn,P.fl,P.bC,P.dS,P.dX])
s(H.b_,[H.hz,H.fa,H.hr,H.hs,H.ht,P.ft,P.fs,P.fu,P.fv,P.hd,P.fF,P.fN,P.fJ,P.fK,P.fL,P.fH,P.fM,P.fG,P.fQ,P.fR,P.fP,P.fO,P.f5,P.f6,P.f3,P.f4,P.hj,P.fY,P.fX,P.fZ,P.en,P.e1,P.e2,W.e4,W.et,W.ev,W.eD,W.eE,W.eS,W.f0,W.fr,W.fD,W.eG,W.eF,W.h1,W.h2,W.hb,W.he,P.h6,P.hl,P.dM,D.ek,D.ej,D.el,A.hp,T.hv,T.hw])
s(H.fa,[H.eX,H.bj])
t(P.em,P.T)
s(P.em,[H.ce,W.fw])
t(H.cj,H.aQ)
s(H.cj,[H.bK,H.bM])
t(H.bL,H.bK)
t(H.bv,H.bL)
t(H.bN,H.bM)
t(H.ck,H.bN)
t(H.ci,H.bv)
s(H.ck,[H.ey,H.ez,H.eA,H.eB,H.cl,H.cm,H.eC])
s(P.fx,[P.cG,P.h9])
t(P.fW,P.hf)
t(P.fU,P.h0)
t(P.ei,P.cV)
s(P.K,[P.a6,P.C])
s(P.ap,[P.cq,P.ec])
s(W.d,[W.u,W.e7,W.ak,W.bt,W.ad,W.bO,W.ag,W.a5,W.bQ,W.fp,W.bH,P.dN,P.aX])
s(W.u,[W.V,W.aJ,W.bI])
s(W.V,[W.n,P.j])
s(W.n,[W.c_,W.dI,W.bi,W.aI,W.aZ,W.c2,W.e8,W.bs,W.b7,W.cw,W.f8,W.f9,W.bE])
s(W.ar,[W.bl,W.dV,W.dW])
t(W.dT,W.as)
t(W.b1,W.cI)
t(W.cL,W.cK)
t(W.c3,W.cL)
t(W.cN,W.cM)
t(W.e_,W.cN)
t(W.a2,W.aY)
t(W.cP,W.cO)
t(W.bn,W.cP)
t(W.cR,W.cQ)
t(W.bo,W.cR)
t(W.es,W.cW)
t(W.eu,W.cX)
t(W.cZ,W.cY)
t(W.ew,W.cZ)
t(W.cn,W.bw)
t(W.Z,P.ei)
t(W.d1,W.d0)
t(W.bx,W.d1)
t(W.d5,W.d4)
t(W.eL,W.d5)
t(W.eR,W.d6)
t(W.bP,W.bO)
t(W.eU,W.bP)
t(W.d9,W.d8)
t(W.eV,W.d9)
t(W.f_,W.dd)
t(W.dh,W.dg)
t(W.fb,W.dh)
t(W.bR,W.bQ)
t(W.fc,W.bR)
t(W.dj,W.di)
t(W.fe,W.dj)
t(W.aE,W.bs)
t(W.dp,W.dn)
t(W.fy,W.dp)
t(W.cJ,W.c4)
t(W.dr,W.dq)
t(W.fS,W.dr)
t(W.dt,W.ds)
t(W.d_,W.dt)
t(W.dv,W.du)
t(W.h3,W.dv)
t(W.dx,W.dw)
t(W.h7,W.dx)
t(W.fz,W.fw)
t(W.fB,P.f1)
t(W.fA,W.fB)
t(W.fC,P.f2)
t(W.ha,W.d7)
t(P.h5,P.h4)
t(P.U,P.fV)
t(P.cT,P.cS)
t(P.ef,P.cT)
t(P.d3,P.d2)
t(P.eI,P.d3)
t(P.bB,P.j)
t(P.df,P.de)
t(P.f7,P.df)
t(P.dl,P.dk)
t(P.fg,P.dl)
t(P.dL,P.cH)
t(P.eJ,P.aX)
t(P.db,P.da)
t(P.eW,P.db)
s(G.ex,[G.J,G.er,G.eO])
t(G.ep,G.J)
s(G.bF,[G.fk,G.eb])
t(R.eZ,R.eY)
u(H.bK,P.p)
u(H.bL,H.b3)
u(H.bM,P.p)
u(H.bN,H.b3)
u(P.cV,P.p)
u(W.cI,W.dU)
u(W.cK,P.p)
u(W.cL,W.t)
u(W.cM,P.p)
u(W.cN,W.t)
u(W.cO,P.p)
u(W.cP,W.t)
u(W.cQ,P.p)
u(W.cR,W.t)
u(W.cW,P.T)
u(W.cX,P.T)
u(W.cY,P.p)
u(W.cZ,W.t)
u(W.d0,P.p)
u(W.d1,W.t)
u(W.d4,P.p)
u(W.d5,W.t)
u(W.d6,P.T)
u(W.bO,P.p)
u(W.bP,W.t)
u(W.d8,P.p)
u(W.d9,W.t)
u(W.dd,P.T)
u(W.dg,P.p)
u(W.dh,W.t)
u(W.bQ,P.p)
u(W.bR,W.t)
u(W.di,P.p)
u(W.dj,W.t)
u(W.dn,P.p)
u(W.dp,W.t)
u(W.dq,P.p)
u(W.dr,W.t)
u(W.ds,P.p)
u(W.dt,W.t)
u(W.du,P.p)
u(W.dv,W.t)
u(W.dw,P.p)
u(W.dx,W.t)
u(P.cS,P.p)
u(P.cT,W.t)
u(P.d2,P.p)
u(P.d3,W.t)
u(P.de,P.p)
u(P.df,W.t)
u(P.dk,P.p)
u(P.dl,W.t)
u(P.cH,P.T)
u(P.da,P.p)
u(P.db,W.t)})();(function constants(){var u=hunkHelpers.makeConstList
C.t=W.aI.prototype
C.L=W.aZ.prototype
C.w=W.b1.prototype
C.M=W.c2.prototype
C.N=J.a.prototype
C.a=J.aN.prototype
C.x=J.ca.prototype
C.c=J.cb.prototype
C.y=J.cc.prototype
C.h=J.b4.prototype
C.i=J.aO.prototype
C.O=J.aP.prototype
C.j=H.ci.prototype
C.n=H.cl.prototype
C.S=W.cn.prototype
C.T=W.bx.prototype
C.z=J.eK.prototype
C.U=W.b7.prototype
C.E=W.cw.prototype
C.r=J.aD.prototype
C.aa=W.bH.prototype
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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

C.e=new P.fW()
C.P=H.i(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.c])
C.Q=H.i(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.c])
C.R=H.i(u([]),[P.c])
C.p=H.i(u(["bind","if","ref","repeat","syntax"]),[P.c])
C.q=H.i(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.c])
C.o=new G.B("",0)
C.b=new G.B("float",0)
C.V=new G.B("float",0)
C.X=new G.B("float",0)
C.Y=new G.B("float",0)
C.W=new G.B("float",0)
C.Z=new G.B("float",4)
C.A=new G.B("mat3",0)
C.k=new G.B("mat4",0)
C.a_=new G.B("mat4",128)
C.a0=new G.B("mat4",4)
C.a1=new G.B("sampler2DShadow",0)
C.f=new G.B("sampler2D",0)
C.a2=new G.B("samplerCube",0)
C.l=new G.B("vec2",0)
C.a3=new G.B("vec2",0)
C.d=new G.B("vec3",0)
C.B=new G.B("vec3",0)
C.a5=new G.B("vec3",0)
C.a7=new G.B("vec3",0)
C.C=new G.B("vec3",0)
C.a4=new G.B("vec3",0)
C.a6=new G.B("vec3",0)
C.m=new G.B("vec4",0)
C.a9=new G.B("vec4",0)
C.D=new G.B("vec4",0)
C.a8=new G.B("vec4",0)})();(function staticFields(){$.aq=0
$.bk=null
$.ip=null
$.hT=!1
$.j6=null
$.iZ=null
$.jb=null
$.hm=null
$.hu=null
$.i0=null
$.ba=null
$.bS=null
$.bT=null
$.hU=!1
$.H=C.e
$.aA=null
$.hJ=null
$.iz=null
$.iy=null
$.iw=null
$.iv=null
$.iu=null
$.it=null
$.j2=0
$.lx="\nvec3 config = vec3(1.0 / 80.0, 6.0, 3.0);\n// vec3 config = vec3(0.2, 2.0, 2.0);\n\n\n// averaged pixel intensity from 3 color channels\nfloat avg3(vec3 pix) {\n return (pix.r + pix.g + pix.b)/3.0;\n}\n\nvec3 get_pixel(ivec2 center, int dx, int dy) {\n return texelFetch(uTexture, center + ivec2(dx, dy), 0).rgb;\n}\n\n// returns pixel color using a strange kernel\n\nfloat IsEdge(ivec2 center) {\n  // read neighboring pixel intensities\n  float pix0 = avg3(get_pixel(center, -1, -1));\n  float pix1 = avg3(get_pixel(center, -1, 0));\n  float pix2 = avg3(get_pixel(center, -1, 1));\n  float pix3 = avg3(get_pixel(center, 0, -1));\n\n  float pix5 = avg3(get_pixel(center, 0, 1));\n  float pix6 = avg3(get_pixel(center, 1, -1));\n  float pix7 = avg3(get_pixel(center, 1, 0));\n  float pix8 = avg3(get_pixel(center, 1, 1));\n\n\n  // average color differences around neighboring pixels\n  float delta = (abs(pix1-pix7) + abs(pix5-pix3) +\n                 abs(pix0-pix8) + abs(pix2-pix6)) * 0.25;\n  return clamp(5.5*delta, 0.0, 1.0);\n}\n\nvoid main() {\n    ivec2 center = ivec2(gl_FragCoord.xy);\n\n    vec4 colorOrg = texelFetch(uTexture, center, 0);\n    vec3 vHSV =  RGBtoHSV(colorOrg.rgb);\n    // find nearest level\n    vHSV =  ceil(vHSV * config) / config;\n    float edg = IsEdge(center);\n    vec3 vRGB = (edg >= 0.3) ? vec3(0.0,0.0,0.0) : HSVtoRGB(vHSV);\n    //vec3 vRGB = (edg >= 0.3) ? vec3(1.0, 1.0, 1.0) : vec3(0.0, 0.0, 0.0);\n    //vec3 vRGB = HSVtoRGB(vHSV);\n    oFragColor = vec4(vRGB, 1.0);\n}\n"})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"md","jr",function(){return H.j5("_$dart_dartClosure")})
u($,"mf","i4",function(){return H.j5("_$dart_js")})
u($,"mm","jv",function(){return H.ax(H.fi({
toString:function(){return"$receiver$"}}))})
u($,"mn","jw",function(){return H.ax(H.fi({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mo","jx",function(){return H.ax(H.fi(null))})
u($,"mp","jy",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ms","jB",function(){return H.ax(H.fi(void 0))})
u($,"mt","jC",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mr","jA",function(){return H.ax(H.iK(null))})
u($,"mq","jz",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mv","jE",function(){return H.ax(H.iK(void 0))})
u($,"mu","jD",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mz","i5",function(){return P.le()})
u($,"mD","bX",function(){return[]})
u($,"mc","jq",function(){return{}})
u($,"mA","jF",function(){return P.hP(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.c)})
u($,"mB","i6",function(){return P.D(P.c,P.aM)})
u($,"mj","js",function(){return new G.cA(1281,0,4294967295)})
u($,"m_","jd",function(){return new G.cz(1281,1281,1281)})
u($,"mC","an",function(){return P.hO(["cBlendEquation",C.o,"cDepthWrite",C.o,"cDepthTest",C.o,"cStencilFunc",C.o,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColor",C.B,"aColorAlpha",C.a8,"aPosition",C.C,"aTexUV",C.a3,"aNormal",C.a4,"aBinormal",C.a5,"aCenter",C.D,"aPointSize",C.b,"aBoneIndex",C.m,"aBoneWeight",C.m,"aTangent",C.a6,"aBitangent",C.a7,"iaRotation",C.m,"iaTranslation",C.d,"iaScale",C.b,"iaColor",C.d,"vColor",C.B,"vTexUV",C.l,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.a9,"vCenter",C.D,"vDepth",C.V,"uTransformationMatrix",C.k,"uModelMatrix",C.k,"uNormalMatrix",C.A,"uConvolutionMatrix",C.A,"uPerspectiveViewMatrix",C.k,"uLightPerspectiveViewMatrix",C.k,"uShadowMap",C.a1,"uTexture",C.f,"uTexture2",C.f,"uTexture3",C.f,"uTexture4",C.f,"uSpecularMap",C.f,"uNormalMap",C.f,"uBumpMap",C.f,"uDepthMap",C.f,"uCubeTexture",C.a2,"uAnimationTable",C.f,"uTime",C.W,"uCameraNear",C.b,"uCameraFar",C.b,"uFogNear",C.b,"uFogFar",C.b,"uPointSize",C.b,"uScale",C.b,"uAngle",C.b,"uCanvasSize",C.l,"uCenter2",C.l,"uCutOff",C.b,"uShininess",C.b,"uShadowBias",C.b,"uOpacity",C.b,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.m,"uColorAlpha2",C.m,"uEyePosition",C.d,"uMaterial",C.k,"uRange",C.l,"uDirection",C.l,"uBoneMatrices",C.a_,"uLightDescs",C.a0,"uLightCount",C.b,"uLightTypes",C.Z,"uBumpScale",C.X,"uNormalScale",C.Y],P.c,G.B)})
u($,"mk","jt",function(){var t=G.iJ()
t.d=!1
t.b=!0
t.a=!1
t.f=9728
t.r=9728
return t})
u($,"ml","ju",function(){var t=G.iJ()
t.b=!0
return t})
u($,"mJ","jJ",function(){var t,s
t=G.W("null")
s=[P.c]
t.az(H.i(["aPosition"],s))
t.v(H.i(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n}\n"],s))
return t})
u($,"mG","jH",function(){var t,s
t=G.W("copyF")
s=[P.c]
t.u(H.i(["uTexture"],s))
t.aG(H.i(["oFragColor = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0);"],s))
return t})
u($,"mP","jN",function(){var t,s
t=G.W("nullUV")
s=[P.c]
t.az(H.i(["aPosition","aTexUV"],s))
t.aA(H.i(["vTexUV"],s))
t.v(H.i(["void main() {\n  gl_Position = vec4(aPosition, 1.0);\n  vTexUV = aTexUV;\n}\n"],s))
return t})
u($,"mO","jM",function(){var t,s
t=G.W("copyF")
s=[P.c]
t.u(H.i(["uTexture"],s))
t.aA(H.i(["vTexUV"],s))
t.aG(H.i(["oFragColor = texture(uTexture, vTexUV);"],s))
return t})
u($,"mU","jS",function(){var t,s
t=G.W("ToonF")
s=[P.c]
t.u(H.i(["uTexture"],s))
t.v(H.i(["vec3 RGBtoHSV(vec3 rgb) {\n   float r = rgb.r;\n   float g = rgb.g;\n   float b = rgb.b;\n\n\n   float minv = min(min(r, g), b);\n   float maxv = max(max(r, g), b);\n   float delta = maxv - minv;\n\n   vec3 res;\n   res.z = maxv;            // v\n   if( maxv == 0.0 ) {\n      // r = g = b = 0      // s = 0, v is undefined\n      res.y = 0.0;\n      res.x = -1.0;\n      return res;\n   }\n\n   res.y = delta / maxv;      // s\n   if (r == maxv) res.x = (g - b) / delta;  // btwn yellow & magenta\n   else if (g == maxv) res.x = 2.0 + (b - r) / delta;   // btwn cyan & yellow\n   else res.x = 4.0 + (r - g) / delta;   // btwn magenta & cyan\n\n   res.x = res.x * 60.0;            // degrees\n   if( res.x < 0.0 ) res.x = res.x + 360.0;\n\n   return res;\n}\n\nvec3 HSVtoRGB(vec3 hsv) {\n   float h = hsv.x / 60.0;  // sector 0 to 5\n   float s = hsv.y;\n   float v = hsv.z;\n\n   if( s == 0.0 ) {\n      // achromatic (grey)\n      return vec3(v, v, v);\n   }\n\n   int i = int(floor( h ));\n   float f = h - float(i);         // fractional part of h\n   float p = v * ( 1.0 - s );\n   float q = v * ( 1.0 - s * f );\n   float t = v * ( 1.0 - s * ( 1.0 - f ) );\n\n   if (i == 0) return vec3(v, t, p);\n   else if (i == 1) return vec3(q, v , p);\n   else if (i == 2) return vec3(p, v, t);\n   else if (i == 3) return vec3(p, q, v);\n   else if (i == 4) return vec3(t, p, v);\n   return vec3(v, p, q);\n}\n",$.lx],s))
return t})
u($,"mM","jK",function(){var t,s
t=G.W("HexPixelateF")
s=[P.c]
t.u(H.i(["uCenter2","uPointSize","uTexture"],s))
t.v(H.i(["\nfloat S = 0.86602540378;\n\nvec2 GetHexCenter(vec2 p) {\n vec2 a;\n    if (p.x + p.y - floor(p.x) - floor(p.y) < 1.0) a = vec2(floor(p.x), floor(p.y));\n    else a = vec2(ceil(p.x), ceil(p.y));\n    vec2 b = vec2(ceil(p.x), floor(p.y));\n    vec2 c = vec2(floor(p.x), ceil(p.y));\n\n    vec3 P = vec3(p.x, p.y, 1.0 - p.x - p.y);\n    vec3 A = vec3(a.x, a.y, 1.0 - a.x - a.y);\n    vec3 B = vec3(b.x, b.y, 1.0 - b.x - b.y);\n    vec3 C = vec3(c.x, c.y, 1.0 - c.x - c.y);\n\n    float alen = length(P - A);\n    float blen = length(P - B);\n    float clen = length(P - C);\n\n    if (alen < blen) {\n        return (alen < clen) ? a : c;\n    } else {\n        return (blen < clen) ? b : c;\n    }\n}\n\nvec2 ToPixelSpace(vec2 v) {\n    vec2 p = (v - uCenter2) / uPointSize;\n    float t = p.y / S;\n    return vec2(p.x - 0.5 * t, t);\n}\n\nvec2 ToNormalizedSpace(vec2 v, vec2 texdim) {\n   vec2 p = vec2(v.x + v.y * 0.5, v.y * S);\n   return p * uPointSize + uCenter2 / texdim;\n}\n\nvoid main() {\n    vec2 texdim = vec2(textureSize(uTexture, 0));\n    vec2 p = ToPixelSpace(gl_FragCoord.xy);\n    vec2 c = GetHexCenter(p);\n    vec2 q = ToNormalizedSpace(c, texdim);\n    oFragColor = texelFetch(uTexture, ivec2(q), 0);\n}\n"],s))
return t})
u($,"mI","jI",function(){var t,s
t=G.W("DotF")
s=[P.c]
t.u(H.i(["uCenter2","uScale","uAngle","uTexture"],s))
t.v(H.i(["// Inspired by three.js\n\nfloat pattern(vec2 tex) {\n\t\tfloat s = sin( uAngle );\n\t\tfloat c = cos( uAngle );\n\t\tvec2 point = vec2( c * tex.x - s * tex.y, s * tex.x + c * tex.y ) * uScale;\n\t\treturn ( sin( point.x ) * sin( point.y ) ) * 4.0;\n}\n\nvoid main() {\n    vec2 center = gl_FragCoord.xy;\n\t\tvec2 texdim = vec2(textureSize(uTexture, 0));\n\t\tvec4 color = texelFetch(uTexture, ivec2(center), 0);\n\t\tfloat average = ( color.r + color.g + color.b ) / 3.0;\n    vec2 tex = center - uCenter2;\n\t\toFragColor = vec4( vec3( average * 10.0 - 5.0 + pattern(tex) ), color.a );\n}\n"],s))
return t})
u($,"mV","jT",function(){var t,s
t=G.W("DotF")
s=[P.c]
t.u(H.i(["uScale","uTime","uTexture"],s))
t.v(H.i(["float rand(vec2 co)  {\n    float a = 12.9898;\n    float b = 78.233;\n    float c = 43758.5453;\n    float dt = dot(co.xy, vec2(a,b));\n    float sn = mod(dt,3.14);\n    return fract(sin(sn) * c);\n}\n\nvec3 rgbDistortion(vec2 uv, float magnitude, float time) {\n    // x offset for the three color channels\n    // we do not change the y\n\t  float dR = rand(vec2(time * 0.03, uv.y * 0.42)) * 0.001 +\n\t             sin(rand(vec2(time * 0.2, uv.y))) * magnitude;\n\t  float dG = rand(vec2(time * 0.004, uv.y * 0.002)) * 0.004 +\n               sin(time * 9.0) * magnitude;\n\t  float dB = 0.0;\n    return vec3(dR, dG, dB);\n}\n\nvoid main() {\n      vec2 dim = vec2(textureSize(uTexture, 0));\n      vec2 center = gl_FragCoord.xy / dim;\n      vec3 d = rgbDistortion(center, uScale, uTime);\n      float x = center.x;\n      float y = center.y;\n\n\t\t\tfloat r = texelFetch(uTexture, ivec2(dim * vec2(x + d.r, y)), 0).r;\n\t\t\tfloat g = texelFetch(uTexture, ivec2(dim * vec2(x + d.g, y)), 0).g;\n\t\t\tfloat b = texelFetch(uTexture, ivec2(dim * vec2(x + d.b, y)), 0).b;\n\t\t\toFragColor = vec4( r, g, b, 1.0 );\n}\n"],s))
return t})
u($,"mN","jL",function(){var t,s
t=G.W("LumidotsF")
s=[P.c]
t.u(H.i(["uPointSize","uTexture"],s))
t.v(H.i(["// Inspired by https://www.shadertoy.com/view/MtcXRB\n\n// http://stackoverflow.com/questions/596216/formula-to-determine-brightness-of-rgb-color\nfloat RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.212, 0.715, 0.072)); }\n// float RGB2Luma(vec3 rgb) { return dot(rgb, vec3(0.299, 0.587, 0.114)); }\n\n\nvoid main() {\n\t  vec2 texdim = vec2(textureSize(uTexture, 0));\n    float r = uPointSize;\n    vec2 uv = gl_FragCoord.xy;\n    vec2 center = floor(uv / r / 2.0) * 2.0 * r + r;\n    vec3 col = texelFetch(uTexture, ivec2(center), 0).rgb;\n    float lum = max(0.1, RGB2Luma(col));\n    float alpha =  smoothstep(1.0, 0.5,\n                              distance(center, uv) / lum / r);\n    oFragColor.rgb = col.rgb * alpha;\n}\n"],s))
return t})
u($,"mS","jQ",function(){var t,s
t=G.W("SquarePixelateF")
s=[P.c]
t.u(H.i(["uPointSize","uTexture"],s))
t.v(H.i(["void main() {\n    float r = uPointSize;\n    vec2 center = floor(gl_FragCoord.xy / r / 2.0) * 2.0 * r + r;\n    oFragColor = texelFetch(uTexture, ivec2(center), 0);\n}\n"],s))
return t})
u($,"m2","jg",function(){return T.br(-1,0,-1,0,4,0,-1,0,-1)})
u($,"m8","jm",function(){return T.bG(0.5,0.5,0.5)})
u($,"m3","jh",function(){return T.br(2,0,0,0,-1,0,0,0,-1)})
u($,"m9","jn",function(){return T.bG(0.5,0.5,0.5)})
u($,"m4","ji",function(){return T.br(-2,0,0,0,2,0,0,0,0)})
u($,"ma","jo",function(){return T.bG(0.37,0.37,0.37)})
u($,"m5","jj",function(){var t=T.br(0,-2,0,-2,11,-2,0,-2,0)
t.au(0,0.333)
return t})
u($,"mb","jp",function(){return T.bG(0,0,0)})
u($,"m1","jf",function(){return T.br(-1,-1,-1,-1,8,-1,-1,-1,-1)})
u($,"m7","jl",function(){return T.bG(0,0,0)})
u($,"m0","je",function(){var t=T.br(1,2,1,2,4,2,1,2,1)
t.au(0,0.0625)
return t})
u($,"m6","jk",function(){return T.bG(0,0,0)})
u($,"mF","jG",function(){var t,s
t=G.W("Convolution3x3F")
s=[P.c]
t.u(H.i(["uTexture","uColor","uConvolutionMatrix"],s))
t.v(H.i(["void main() {\n    mat3 m = uConvolutionMatrix;\n    ivec2 center = ivec2(gl_FragCoord.xy);\n    vec3 sum = vec3(0.0, 0.0, 0.0);\n    for (int x = -1; x <= 1; x++) {\n      for (int y = -1; y <= 1; y++) {\n        sum += m[x+1][y+1] * texelFetch(uTexture, center + ivec2(x, y), 0).rgb;     \n      }\n    }\n    oFragColor.rgb = uColor + sum;\n}\n\n"],s))
return t})
u($,"mQ","jO",function(){var t,s
t=G.W("ScanlinePixelateF")
s=[P.c]
t.u(H.i(["uTexture","uRange"],s))
t.v(H.i(["      \n// const vec3 comp = vec3(0.05, 0.15, 0.95);\nconst vec3 comp = vec3(0.1, 0.30, 0.85);\n\nvoid main() {\n    // number scan lines: texture height * \n    vec2 sine_coord = uRange * 2.0 * 3.1415;\n                        \n    sine_coord.x = 0.0;\n    vec2 dim = vec2(textureSize(uTexture, 0));\n    vec2 pixel = gl_FragCoord.xy;\n    vec3 color =  texelFetch(uTexture, ivec2(pixel), 0).xyz;\n    float m = comp.z + \n              dot(comp.xy * sin(pixel / dim * sine_coord), vec2(1.0, 1.0));\n    oFragColor = vec4(color * m, 1.0);\n}\n"],s))
return t})
u($,"mX","jV",function(){var t,s
t=G.W("WaterPixelateF")
s=[P.c]
t.u(H.i(["uTexture","uTime"],s))
t.v(H.i(["float wave(vec2 pos, float srcX, float srcY, float t) {\n   float dist = 300.0 * length(pos - vec2(srcX, srcY));\n   return sin(dist - 0.15 * t);\n}\n\nvoid main() {\n    vec2 center = gl_FragCoord.xy;\n    vec3 color = texelFetch(uTexture, ivec2(center), 0).rgb;\n    vec2 uv = center /  vec2(textureSize(uTexture, 0)); \n    float t =  uTime * 50.0;\n    float res = 0.0;\n    res += wave(uv, 0.6, 0.7, t);\n    res += wave(uv, 0.9, 0.9, t);\n    res += wave(uv, -0.6, 0.3, t);\n    res += wave(uv, 0.1, 0.4, t);\n    // res += wave(uv, 0.1, 0.4, t);\n    res += wave(uv, 0.5, 0.5, t);\n    res += wave(uv, -1.0, 1.4, t);\n    oFragColor = vec4(color * (0.9 + 0.012 * res), 1.0);\n}\n"],s))
return t})
u($,"mR","jP",function(){var t,s
t=G.W("sepiaPixelateF")
s=[P.c]
t.u(H.i(["uTexture","uScale"],s))
t.v(H.i(["\nvec3 SepiaColor(float gray, float sepiaFactor) {\n    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n    vec3 one3 = vec3(1.0);\n    vec3 color = gray <= 0.5 ?\n                 sepiaColor * 2.0 * gray :\n                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);\n\n    return vec3(gray) + sepiaFactor * (color - vec3(gray));\n}\n\n// additive blend of red and blue channels\nvec3 Technicolor1(vec3 inColor, float amount) {\t\n     vec2 bgFilter = vec2(1.0, 0.7);\n     float bg = dot(inColor.bg, bgFilter) * 0.5;\n     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);\n}\n\n// multiplicative blend of red and blue channels\nvec3 Technicolor2(vec3 inColor, float amount) {\t\n    // TODO: simply this mess\n    vec3 redfilter       = vec3(1.0, 0.0, 0.0);\n    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);\n    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);\n\n\t  vec3 redrecord       = inColor * redfilter;\n\t  vec3 bluegreenrecord = inColor * bluegreenfilter;\n\t\n\t  vec3 rednegative = vec3(redrecord.r);\n\t  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);\n\t\n\t  vec3 redoutput = rednegative + cyanfilter;\n\t  vec3 bluegreenoutput = bluegreennegative + magentafilter;\n\t\n\t  vec3 result = redoutput * bluegreenoutput;\n\t\n\t  return mix(inColor, result, amount);\n}\n\n//  matting between all channels.\nvec3 Technicolor3(vec3 inColor, float amount) {\t\t\n  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;\n \treturn mix(inColor, inColor * matte.gbr * matte.brg, amount);\n}\n\n// cyan, magenta, yellow and red/orange filters\nvec3 Technicolor4(vec3 inColor, float amount) {\t\t\n    // TODO: simply this mess\n    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);\n    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);\n    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);\n    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);\n    \n    vec3 greenrecord = inColor * greenfilter;\n\t  vec3 bluerecord  = inColor * magentafilter;\n    vec3 redrecord   = inColor * redorangefilter;\n    \n    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);\n\t  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);\n\t  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);\n\t\n\t  vec3 redoutput   = rednegative + cyanfilter;\n\t  vec3 greenoutput = greennegative + magentafilter;\n\t  vec3 blueoutput  =  bluenegative + yellowfilter;\n\t\n\t  vec3 result = redoutput * greenoutput * blueoutput;\n    return mix(inColor, result, amount);\n}\n\nfloat VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {\t\t\n\tfloat d = distance(vec2(0.5, 0.5), uv) * 1.414213;\n\treturn clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);\n}\n","void main() { \n    vec3 color = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0).rgb;\n    float gray = dot(color, vec3(0.3333));\n    // float gray = dot(color, vec3(0.2126, 0.7152, 0.0723));\n    oFragColor = vec4(SepiaColor(gray, uScale), 1.0);\n}\n"],s))
return t})
u($,"mT","jR",function(){var t,s
t=G.W("technicolorPixelateF")
s=[P.c]
t.u(H.i(["uTexture"],s))
t.v(H.i(["\nvec3 SepiaColor(float gray, float sepiaFactor) {\n    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n    vec3 one3 = vec3(1.0);\n    vec3 color = gray <= 0.5 ?\n                 sepiaColor * 2.0 * gray :\n                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);\n\n    return vec3(gray) + sepiaFactor * (color - vec3(gray));\n}\n\n// additive blend of red and blue channels\nvec3 Technicolor1(vec3 inColor, float amount) {\t\n     vec2 bgFilter = vec2(1.0, 0.7);\n     float bg = dot(inColor.bg, bgFilter) * 0.5;\n     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);\n}\n\n// multiplicative blend of red and blue channels\nvec3 Technicolor2(vec3 inColor, float amount) {\t\n    // TODO: simply this mess\n    vec3 redfilter       = vec3(1.0, 0.0, 0.0);\n    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);\n    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);\n\n\t  vec3 redrecord       = inColor * redfilter;\n\t  vec3 bluegreenrecord = inColor * bluegreenfilter;\n\t\n\t  vec3 rednegative = vec3(redrecord.r);\n\t  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);\n\t\n\t  vec3 redoutput = rednegative + cyanfilter;\n\t  vec3 bluegreenoutput = bluegreennegative + magentafilter;\n\t\n\t  vec3 result = redoutput * bluegreenoutput;\n\t\n\t  return mix(inColor, result, amount);\n}\n\n//  matting between all channels.\nvec3 Technicolor3(vec3 inColor, float amount) {\t\t\n  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;\n \treturn mix(inColor, inColor * matte.gbr * matte.brg, amount);\n}\n\n// cyan, magenta, yellow and red/orange filters\nvec3 Technicolor4(vec3 inColor, float amount) {\t\t\n    // TODO: simply this mess\n    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);\n    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);\n    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);\n    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);\n    \n    vec3 greenrecord = inColor * greenfilter;\n\t  vec3 bluerecord  = inColor * magentafilter;\n    vec3 redrecord   = inColor * redorangefilter;\n    \n    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);\n\t  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);\n\t  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);\n\t\n\t  vec3 redoutput   = rednegative + cyanfilter;\n\t  vec3 greenoutput = greennegative + magentafilter;\n\t  vec3 blueoutput  =  bluenegative + yellowfilter;\n\t\n\t  vec3 result = redoutput * greenoutput * blueoutput;\n    return mix(inColor, result, amount);\n}\n\nfloat VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {\t\t\n\tfloat d = distance(vec2(0.5, 0.5), uv) * 1.414213;\n\treturn clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);\n}\n","void main() { \n    vec3 color = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0).rgb;\n    oFragColor = vec4(Technicolor3(color, 0.5), 1.0);\n}\n"],s))
return t})
u($,"mW","jU",function(){var t,s
t=G.W("vignettingPixelateF")
s=[P.c]
t.u(H.i(["uTexture","uRange"],s))
t.v(H.i(["\nvec3 SepiaColor(float gray, float sepiaFactor) {\n    vec3 sepiaColor = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n    vec3 one3 = vec3(1.0);\n    vec3 color = gray <= 0.5 ?\n                 sepiaColor * 2.0 * gray :\n                 one3 - 2.0 * (1.0 - gray) * (one3 - sepiaColor);\n\n    return vec3(gray) + sepiaFactor * (color - vec3(gray));\n}\n\n// additive blend of red and blue channels\nvec3 Technicolor1(vec3 inColor, float amount) {\t\n     vec2 bgFilter = vec2(1.0, 0.7);\n     float bg = dot(inColor.bg, bgFilter) * 0.5;\n     return mix(inColor, vec3(inColor.r, vec2(bg) * bgFilter), amount);\n}\n\n// multiplicative blend of red and blue channels\nvec3 Technicolor2(vec3 inColor, float amount) {\t\n    // TODO: simply this mess\n    vec3 redfilter       = vec3(1.0, 0.0, 0.0);\n    vec3 bluegreenfilter = vec3(0.0, 1.0, 1.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 0.5);\n    vec3 magentafilter   = vec3(1.0, 0.0, 0.25);\n\n\t  vec3 redrecord       = inColor * redfilter;\n\t  vec3 bluegreenrecord = inColor * bluegreenfilter;\n\t\n\t  vec3 rednegative = vec3(redrecord.r);\n\t  vec3 bluegreennegative = vec3((bluegreenrecord.g + bluegreenrecord.b) * 0.5);\n\t\n\t  vec3 redoutput = rednegative + cyanfilter;\n\t  vec3 bluegreenoutput = bluegreennegative + magentafilter;\n\t\n\t  vec3 result = redoutput * bluegreenoutput;\n\t\n\t  return mix(inColor, result, amount);\n}\n\n//  matting between all channels.\nvec3 Technicolor3(vec3 inColor, float amount) {\t\t\n  vec3 matte = vec3(1.0) - inColor + (inColor.gbr + inColor.brg) * 0.5;\n \treturn mix(inColor, inColor * matte.gbr * matte.brg, amount);\n}\n\n// cyan, magenta, yellow and red/orange filters\nvec3 Technicolor4(vec3 inColor, float amount) {\t\t\n    // TODO: simply this mess\n    vec3 greenfilter     = vec3(0.0, 1.0, 0.0);\n    vec3 magentafilter   = vec3(1.0, 0.0, 1.0);\n    vec3 redorangefilter = vec3(0.99, 0.263, 0.0);\n    vec3 cyanfilter      = vec3(0.0, 1.0, 1.0);\n    vec3 yellowfilter    = vec3(1.0, 1.0, 0.0);\n    \n    vec3 greenrecord = inColor * greenfilter;\n\t  vec3 bluerecord  = inColor * magentafilter;\n    vec3 redrecord   = inColor * redorangefilter;\n    \n    vec3 rednegative   = vec3((redrecord.r + redrecord.g + redrecord.b) / 3.0);\n\t  vec3 greennegative = vec3((greenrecord.r + greenrecord.g + greenrecord.b) / 3.0);\n\t  vec3 bluenegative  = vec3((bluerecord.r + bluerecord.g + bluerecord.b ) / 3.0);\n\t\n\t  vec3 redoutput   = rednegative + cyanfilter;\n\t  vec3 greenoutput = greennegative + magentafilter;\n\t  vec3 blueoutput  =  bluenegative + yellowfilter;\n\t\n\t  vec3 result = redoutput * greenoutput * blueoutput;\n    return mix(inColor, result, amount);\n}\n\nfloat VignettingFactor(vec2 uv, float innerRadius, float outerRadius) {\t\t\n\tfloat d = distance(vec2(0.5, 0.5), uv) * 1.414213;\n\treturn clamp((outerRadius - d) / (outerRadius - innerRadius), 0.0, 1.0);\n}\n","void main() { \n    vec2 dim = vec2(textureSize(uTexture, 0));\n    vec3 color = texelFetch(uTexture, ivec2(gl_FragCoord.xy), 0).rgb;\n    float v = VignettingFactor(gl_FragCoord.xy / dim, uRange.x, uRange.y);\n    oFragColor = vec4(color * v, 1.0);\n}\n"],s))
return t})
u($,"mK","i7",function(){return H.az(W.lD().querySelector("#effect"),"$ib7")})
u($,"me","hA",function(){return P.D(P.c,T.c5)})})()
var v={mangledGlobalNames:{C:"int",a6:"double",K:"num",c:"String",Q:"bool",E:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.E},{func:1,ret:-1},{func:1,ret:-1,args:[P.c,,]},{func:1,ret:P.E,args:[,,]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.E,args:[,]},{func:1,ret:P.c,args:[P.C]},{func:1,ret:P.E,args:[W.ak]},{func:1,ret:P.Q,args:[W.a3]},{func:1,ret:P.Q,args:[P.c]},{func:1,ret:P.Q,args:[W.V,P.c,P.c,W.aR]},{func:1,args:[,P.c]},{func:1,args:[P.c]},{func:1,ret:P.E,args:[{func:1,ret:-1}]},{func:1,ret:P.E,args:[,],opt:[P.Y]},{func:1,ret:[P.S,,],args:[,]},{func:1,ret:P.Q,args:[W.u]},{func:1,ret:P.E,args:[W.aC]},{func:1,ret:-1,args:[P.c,P.c]},{func:1,ret:P.E,args:[P.K]},{func:1,args:[W.f]},{func:1,ret:P.c,args:[P.c]},{func:1,ret:-1,args:[W.u,W.u]},{func:1,ret:-1,args:[W.f]},{func:1,ret:P.E,args:[P.w]},{func:1,ret:P.C,args:[P.C,P.w]},{func:1,ret:-1,args:[P.K]},{func:1,ret:P.E,args:[P.R]},{func:1,ret:P.C,args:[,,]},{func:1,ret:-1,args:[W.aE]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,NavigatorAutomationInformation:J.a,NavigatorCookies:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bu,DataView:H.aQ,ArrayBufferView:H.aQ,Float64Array:H.bv,Float32Array:H.ci,Int16Array:H.ey,Int32Array:H.ez,Int8Array:H.eA,Uint16Array:H.eB,Uint32Array:H.cl,Uint8ClampedArray:H.cm,CanvasPixelArray:H.cm,Uint8Array:H.eC,HTMLBRElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.dH,HTMLAnchorElement:W.c_,HTMLAreaElement:W.dI,HTMLBaseElement:W.bi,Blob:W.aY,HTMLBodyElement:W.aI,HTMLCanvasElement:W.aZ,CanvasRenderingContext2D:W.dP,CDATASection:W.aJ,CharacterData:W.aJ,Comment:W.aJ,ProcessingInstruction:W.aJ,Text:W.aJ,CSSNumericValue:W.bl,CSSUnitValue:W.bl,CSSPerspective:W.dT,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.b1,MSStyleCSSProperties:W.b1,CSS2Properties:W.b1,CSSImageValue:W.ar,CSSKeywordValue:W.ar,CSSPositionValue:W.ar,CSSResourceValue:W.ar,CSSURLImageValue:W.ar,CSSStyleValue:W.ar,CSSMatrixComponent:W.as,CSSRotation:W.as,CSSScale:W.as,CSSSkew:W.as,CSSTranslation:W.as,CSSTransformComponent:W.as,CSSTransformValue:W.dV,CSSUnparsedValue:W.dW,DataTransferItemList:W.dY,HTMLDivElement:W.c2,DOMException:W.dZ,ClientRectList:W.c3,DOMRectList:W.c3,DOMRectReadOnly:W.c4,DOMStringList:W.e_,DOMTokenList:W.e0,Element:W.V,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CompositionEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,Event:W.f,InputEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FocusEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,KeyboardEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MouseEvent:W.f,DragEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PointerEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TextEvent:W.f,TouchEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,UIEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,WheelEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStreamTrack:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.a2,FileList:W.bn,FileWriter:W.e7,HTMLFormElement:W.e8,Gamepad:W.a9,History:W.ea,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,ImageData:W.bp,Location:W.ch,HTMLAudioElement:W.bs,HTMLMediaElement:W.bs,MediaList:W.eq,MediaStream:W.ak,MessagePort:W.bt,MIDIInputMap:W.es,MIDIOutputMap:W.eu,MimeType:W.ab,MimeTypeArray:W.ew,Navigator:W.cn,WorkerNavigator:W.bw,NavigatorConcurrentHardware:W.bw,NavigatorUserMediaError:W.aC,Document:W.u,DocumentFragment:W.u,HTMLDocument:W.u,ShadowRoot:W.u,XMLDocument:W.u,DocumentType:W.u,Node:W.u,NodeList:W.bx,RadioNodeList:W.bx,Plugin:W.ac,PluginArray:W.eL,RTCStatsReport:W.eR,HTMLSelectElement:W.b7,SourceBuffer:W.ad,SourceBufferList:W.eU,SpeechGrammar:W.ae,SpeechGrammarList:W.eV,SpeechRecognitionResult:W.af,Storage:W.f_,CSSStyleSheet:W.a4,StyleSheet:W.a4,HTMLTableElement:W.cw,HTMLTableRowElement:W.f8,HTMLTableSectionElement:W.f9,HTMLTemplateElement:W.bE,TextTrack:W.ag,TextTrackCue:W.a5,VTTCue:W.a5,TextTrackCueList:W.fb,TextTrackList:W.fc,TimeRanges:W.fd,Touch:W.ah,TouchList:W.fe,TrackDefaultList:W.ff,URL:W.fo,HTMLVideoElement:W.aE,VideoTrackList:W.fp,Window:W.bH,DOMWindow:W.bH,Attr:W.bI,CSSRuleList:W.fy,ClientRect:W.cJ,DOMRect:W.cJ,GamepadList:W.fS,NamedNodeMap:W.d_,MozNamedAttrMap:W.d_,SpeechRecognitionResultList:W.h3,StyleSheetList:W.h7,SVGLength:P.au,SVGLengthList:P.ef,SVGNumber:P.av,SVGNumberList:P.eI,SVGPointList:P.eM,SVGScriptElement:P.bB,SVGStringList:P.f7,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.aw,SVGTransformList:P.fg,AudioBuffer:P.dK,AudioParamMap:P.dL,AudioTrackList:P.dN,AudioContext:P.aX,webkitAudioContext:P.aX,BaseAudioContext:P.aX,OfflineAudioContext:P.eJ,WebGLBuffer:P.c0,WebGLFramebuffer:P.c9,WebGLProgram:P.cp,WebGLRenderingContext:P.eP,WebGL2RenderingContext:P.eQ,WebGLShader:P.cr,WebGLTexture:P.cx,WebGLUniformLocation:P.cC,WebGLVertexArrayObject:P.cD,SQLResultSetRowList:P.eW})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,NavigatorAutomationInformation:true,NavigatorCookies:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float64Array:true,Float32Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FocusEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,KeyboardEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MouseEvent:true,DragEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PointerEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TextEvent:true,TouchEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,UIEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,WheelEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MediaStream:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,Navigator:true,WorkerNavigator:true,NavigatorConcurrentHardware:false,NavigatorUserMediaError:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchList:true,TrackDefaultList:true,URL:true,HTMLVideoElement:true,VideoTrackList:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,SQLResultSetRowList:true})
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"
W.bQ.$nativeSuperclassTag="EventTarget"
W.bR.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.j8,[])
else T.j8([])})})()
//# sourceMappingURL=camera_effects.dart.js.map
