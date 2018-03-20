{}(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
var y=function(){function t(){};return typeof t.name=='string'}()
function setFunctionNamesIfNecessary(a){if(y)return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$is"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.nF(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}var x=0
function tearOffGetter(a,b,c,d){var t=null
return d?function(e){if(t===null)t=H.jD(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jD(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jD(this,a,b,true,[],d).prototype
return t}:tearOffGetter(a,b,d,e)}var w=0
function installTearOff(a,b,c,d,e,f,g,h,i){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q=q+w
var p=h[0]
r.$stubName=p
var o=tearOff(t,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function setOrUpdateInterceptorsByTag(a){var t=u.interceptorsByTag
if(!t){u.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=u.leafTags
if(!t){u.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=u.types
t.push.apply(t,a)}function updateHolder(a,b){copyProperties(b,a)
return a}function initializeDeferredHunk(a){w=u.types.length
a(inherit,mixin,lazy,makeConstList,convertToFastObject,installTearOff,setFunctionNamesIfNecessary,updateHolder,updateTypes,setOrUpdateInterceptorsByTag,setOrUpdateLeafTags,u,v,$)}function getGlobalFromName(a){for(var t=0;t<v.length;t++){if(v[t]==C)continue
if(v[t][a])return v[t][a]}}var C={},H={jq:function jq(a){this.a=a},
jv:function(a,b,c,d){if(!!a.$isc)return new H.ee(a,b,[c,d])
return new H.dg(a,b,[c,d])},
da:function(){return new P.av("No element")},
mt:function(){return new P.av("Too many elements")},
ms:function(){return new P.av("Too few elements")},
dx:function(a,b,c,d){if(c-b<=32)H.mH(a,b,c,d)
else H.mG(a,b,c,d)},
mH:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ad(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ap(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mG:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.ad(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ap(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ap(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ap(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ap(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ap(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ap(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ap(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ap(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ap(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.D(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
c=a5.$2(d,l)
if(c===0)continue
if(c<0){if(e!==g){t.i(a2,e,t.h(a2,g))
t.i(a2,g,d)}++g}else for(;!0;){c=a5.$2(t.h(a2,f),l)
if(c>0){--f
continue}else{b=f-1
if(c<0){t.i(a2,e,t.h(a2,g))
a=g+1
t.i(a2,g,t.h(a2,f))
t.i(a2,f,d)
f=b
g=a
break}else{t.i(a2,e,t.h(a2,f))
t.i(a2,f,d)
f=b
break}}}}a0=!0}else{for(e=g;e<=f;++e){d=t.h(a2,e)
if(a5.$2(d,l)<0){if(e!==g){t.i(a2,e,t.h(a2,g))
t.i(a2,g,d)}++g}else if(a5.$2(d,j)>0)for(;!0;)if(a5.$2(t.h(a2,f),j)>0){--f
if(f<e)break
continue}else{b=f-1
if(a5.$2(t.h(a2,f),l)<0){t.i(a2,e,t.h(a2,g))
a=g+1
t.i(a2,g,t.h(a2,f))
t.i(a2,f,d)
g=a}else{t.i(a2,e,t.h(a2,f))
t.i(a2,f,d)}f=b
break}}a0=!1}a1=g-1
t.i(a2,a3,t.h(a2,a1))
t.i(a2,a1,l)
a1=f+1
t.i(a2,a4,t.h(a2,a1))
t.i(a2,a1,j)
H.dx(a2,a3,g-2,a5)
H.dx(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.D(a5.$2(t.h(a2,g),l),0);)++g
for(;J.D(a5.$2(t.h(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=t.h(a2,e)
if(a5.$2(d,l)===0){if(e!==g){t.i(a2,e,t.h(a2,g))
t.i(a2,g,d)}++g}else if(a5.$2(d,j)===0)for(;!0;)if(a5.$2(t.h(a2,f),j)===0){--f
if(f<e)break
continue}else{b=f-1
if(a5.$2(t.h(a2,f),l)<0){t.i(a2,e,t.h(a2,g))
a=g+1
t.i(a2,g,t.h(a2,f))
t.i(a2,f,d)
g=a}else{t.i(a2,e,t.h(a2,f))
t.i(a2,f,d)}f=b
break}}H.dx(a2,g,f,a5)}else H.dx(a2,g,f,a5)},
c:function c(){},
bg:function bg(){},
df:function df(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dg:function dg(a,b,c){this.a=a
this.b=b
this.$ti=c},
ee:function ee(a,b,c){this.a=a
this.b=b
this.$ti=c},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bI:function bI(a,b,c){this.a=a
this.b=b
this.$ti=c},
dF:function dF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hu:function hu(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(){},
dM:function(a,b){var t=a.ai(b)
if(!u.globalState.d.cy)u.globalState.f.ao()
return t},
j_:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
lh:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$isb)throw H.e(P.dX("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.id(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$km()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hM(P.ju(null,H.b5),0)
r=P.m
s.seM(new H.ag(0,null,null,null,null,null,0,[r,H.b4]))
s.seO(new H.ag(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ic()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mn,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mW)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ah(null,null,null,r)
p=new H.bi(0,null,!1)
o=new H.b4(s,new H.ag(0,null,null,null,null,null,0,[r,H.bi]),q,u.createNewIsolate(),p,new H.as(H.j4()),new H.as(H.j4()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
q.l(0,0)
o.bE(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bs(a,{func:1,args:[,]}))o.ai(new H.ja(t,a))
else if(H.bs(a,{func:1,args:[,,]}))o.ai(new H.jb(t,a))
else o.ai(a)
u.globalState.f.ao()},
mW:function(a){var t=P.aX(["command","print","msg",a])
return new H.am(!0,P.c5(null,P.m)).K(t)},
mp:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mq()
return},
mq:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
mn:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b3(!0,[]).Y(b.data)
s=J.ad(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nr(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b3(!0,[]).Y(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b3(!0,[]).Y(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.m
j=P.ah(null,null,null,k)
i=new H.bi(0,null,!1)
h=new H.b4(s,new H.ag(0,null,null,null,null,null,0,[k,H.bi]),j,u.createNewIsolate(),i,new H.as(H.j4()),new H.as(H.j4()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
j.l(0,0)
h.bE(0,i)
u.globalState.f.a.V(0,new H.b5(h,new H.eN(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ao()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lS(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ao()
break
case"close":u.globalState.ch.an(0,$.$get$kn().h(0,a))
a.terminate()
u.globalState.f.ao()
break
case"log":H.mm(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aX(["command","print","msg",t])
k=new H.am(!0,P.c5(null,P.m)).K(k)
s.toString
self.postMessage(k)}else P.ao(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mm:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aX(["command","log","msg",a])
r=new H.am(!0,P.c5(null,P.m)).K(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.M(q)
t=H.an(q)
s=P.cr(t)
throw H.e(s)}},
mo:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kt=$.kt+("_"+s)
$.ku=$.ku+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.bn(s,r),q,t.r])
r=new H.eO(a,b,c,d,t)
if(e){t.bZ(q,q)
u.globalState.f.a.V(0,new H.b5(t,r,"start isolate"))}else r.$0()},
mI:function(a,b){var t=new H.hb(!0,!1,null)
t.dt(a,b)
return t},
mZ:function(a){return new H.b3(!0,[]).Y(new H.am(!1,P.c5(null,P.m)).K(a))},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b){this.a=a
this.b=b},
id:function id(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=a0
_.y=a1
_.z=a2
_.Q=a3
_.ch=a4
_.cx=a5},
b4:function b4(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=a0
_.f=a1
_.r=a2
_.x=a3
_.y=a4
_.z=a5
_.Q=a6
_.ch=a7
_.cx=a8
_.cy=a9
_.db=b0
_.dx=b1},
i7:function i7(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(){},
eN:function eN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hE:function hE(){},
bn:function bn(a,b){this.b=a
this.a=b},
ie:function ie(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c){this.b=a
this.c=b
this.a=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
as:function as(a){this.a=a},
am:function am(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
nk:function(a){return u.types[a]},
nt:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$iso},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aM(a)
if(typeof t!=="string")throw H.e(H.U(a))
return t},
mF:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fE(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aY:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dt:function(a){var t,s,r,q,p,o,n,m
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.r(a).$isb0){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aM(q,0)===36)q=C.i.d5(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dP(H.iO(a),0,null),u.mangledGlobalNames)},
fA:function(a){return"Instance of '"+H.dt(a)+"'"},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mD:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
mB:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
mx:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
my:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
mA:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
mC:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
mz:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
ks:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.U(a))
return a[b]},
P:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ar(!0,b,"index",null)
t=J.dT(a)
if(b<0||C.b.cQ(b,t))return P.B(b,a,"index",null,t)
return P.fB(b,"index",null)},
U:function(a){return new P.ar(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bS()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lk})
t.name=""}else t.toString=H.lk
return t},
lk:function(){return J.aM(this.dartException)},
E:function(a){throw H.e(a)},
Q:function(a){throw H.e(new P.a1(a))},
ax:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hi(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kF:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
js:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eT(a,s,t?null:b.receiver)},
M:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aV(r,16)&8191)===10)switch(q){case 438:return t.$1(H.js(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dr(p,null))}}if(a instanceof TypeError){o=$.$get$kz()
n=$.$get$kA()
m=$.$get$kB()
l=$.$get$kC()
k=$.$get$kG()
j=$.$get$kH()
i=$.$get$kE()
$.$get$kD()
h=$.$get$kJ()
g=$.$get$kI()
f=o.O(s)
if(f!=null)return t.$1(H.js(s,f))
else{f=n.O(s)
if(f!=null){f.method="call"
return t.$1(H.js(s,f))}else{f=m.O(s)
if(f==null){f=l.O(s)
if(f==null){f=k.O(s)
if(f==null){f=j.O(s)
if(f==null){f=i.O(s)
if(f==null){f=l.O(s)
if(f==null){f=h.O(s)
if(f==null){f=g.O(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dr(s,f==null?null:f.method))}}return t.$1(new H.hm(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dy()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ar(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dy()
return a},
an:function(a){var t
if(a==null)return new H.dK(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dK(a,null)},
nx:function(a){if(a==null||typeof a!='object')return J.aq(a)
else return H.aY(a)},
ni:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
ns:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dM(b,new H.iV(a))
case 1:return H.dM(b,new H.iW(a,d))
case 2:return H.dM(b,new H.iX(a,d,e))
case 3:return H.dM(b,new H.iY(a,d,e,f))
case 4:return H.dM(b,new H.iZ(a,d,e,f,g))}throw H.e(P.cr("Unsupported number of arguments for wrapped closure"))},
br:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ns)
a.$identity=t
return t},
m7:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$isb){t.$reflectionInfo=c
r=H.mF(t).r}else r=c
q=d?Object.create(new H.fS().constructor.prototype):Object.create(new H.bv(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k5(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nk,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k2:H.jl
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k5(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m4:function(a,b,c,d){var t=H.jl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k5:function(a,b,c){var t,s,r,q
if(c)return H.m6(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m4(s,b==null?r!=null:b!==r,t,b)
return q},
m5:function(a,b,c,d){var t,s
t=H.jl
s=H.k2
switch(b?-1:a){case 0:throw H.e(new H.fJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
m6:function(a,b){var t,s,r,q
H.m3()
t=$.k1
if(t==null){t=H.k0("receiver")
$.k1=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m5(r,b==null?q!=null:b!==q,s,b)
return t},
jD:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.r(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.m7(a,b,t,!!d,e,f)},
jl:function(a){return a.a},
k2:function(a){return a.c},
m3:function(){var t=$.k3
if(t==null){t=H.k0("self")
$.k3=t}return t},
k0:function(a){var t,s,r,q,p
t=new H.bv("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nS:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ay(a,"String"))},
Z:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"double"))},
nR:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"num"))},
nb:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ay(a,"bool"))},
nr:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ay(a,"int"))},
nz:function(a,b){throw H.e(H.ay(a,b.substring(3)))},
ny:function(a,b){var t=J.ad(b)
throw H.e(H.k4(H.dt(a),t.bs(b,3,t.gj(b))))},
jG:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.nz(a,b)},
aK:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.ny(a,b)},
nQ:function(a){if(a==null)return a
if(!!J.r(a).$isb)return a
throw H.e(H.ay(a,"List"))},
l3:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
bs:function(a,b){var t
if(a==null)return!1
t=H.l3(a)
return t==null?!1:H.l9(t,b)},
nO:function(a,b){var t,s
if(a==null)return a
if($.jA)return a
$.jA=!0
try{if(H.bs(a,b))return a
t=H.aL(b,null)
s=H.ay(a,t)
throw H.e(s)}finally{$.jA=!1}},
ay:function(a,b){return new H.hk("type '"+H.dt(a)+"' is not a subtype of type '"+b+"'")},
k4:function(a,b){return new H.e1("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
az:function(a){if(!0===a)return!1
if(!!J.r(a).$isjo)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ay(a,"bool"))},
aJ:function(a){throw H.e(new H.hx(a))},
d:function(a){if(H.az(a))throw H.e(new P.ch(null))},
nF:function(a){throw H.e(new P.e5(a))},
j4:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l7:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aG(a,null)},
C:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iO:function(a){if(a==null)return
return a.$ti},
l8:function(a,b){return H.jK(a["$as"+H.f(b)],H.iO(a))},
ae:function(a,b,c){var t,s
t=H.l8(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aB:function(a,b){var t,s
t=H.iO(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aL:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dP(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aL(t,b)
return H.n0(a,b)}return"unknown-reified-type"},
n0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aL(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aL(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nh(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aL(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dP:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bX("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aL(o,c)}return p?"":"<"+s.k(0)+">"},
iP:function(a){var t,s
if(a instanceof H.b9){t=H.l3(a)
if(t!=null)return H.aL(t,null)}s=J.r(a).constructor.name
if(a==null)return s
return s+H.dP(a.$ti,0,null)},
jK:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jH(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jH(a,null,b)
return b},
cb:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iO(a)
s=J.r(a)
if(s[b]==null)return!1
return H.l_(H.jK(s[d],t),c)},
dQ:function(a,b,c,d){if(a==null)return a
if(H.cb(a,b,c,d))return a
throw H.e(H.k4(H.dt(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dP(c,0,null),u.mangledGlobalNames)))},
nM:function(a,b,c,d){if(a==null)return a
if(H.cb(a,b,c,d))return a
throw H.e(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dP(c,0,null),u.mangledGlobalNames)))},
l_:function(a,b){var t,s,r,q,p
if(a==null||b==null)return!0
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=typeof b==="object"&&b!==null&&b.constructor===Array
H.d(s)
H.d(t)
r=a.length
H.d(s)
H.d(r===b.length)
H.d(t)
q=a.length
for(p=0;p<q;++p){H.d(t)
r=a[p]
H.d(s)
if(!H.a_(r,b[p]))return!1}return!0},
ne:function(a,b,c){return H.jH(a,b,H.l8(b,c))},
a_:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aF")return!0
if('func' in b)return H.l9(a,b)
if('func' in a)return b.name==="jo"||b.name==="n"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aL(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l_(H.jK(o,t),r)},
kZ:function(a,b,c){var t,s,r,q,p,o,n
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=typeof b==="object"&&b!==null&&b.constructor===Array
H.d(s)
H.d(t)
r=a.length
H.d(s)
q=b.length
if(c){if(r<q)return!1}else if(r!==q)return!1
for(p=0;p<q;++p){H.d(t)
o=a[p]
H.d(s)
n=b[p]
if(!(H.a_(o,n)||H.a_(n,o)))return!1}return!0},
n7:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.d(typeof a=='object')
H.d(typeof b=='object')
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.a_(p,o)||H.a_(o,p)))return!1}return!0},
l9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a_(t,s)||H.a_(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
if(r!=null){H.d(typeof r==="object"&&r!==null&&r.constructor===Array)
n=r.length}else n=0
if(q!=null){H.d(typeof q==="object"&&q!==null&&q.constructor===Array)
m=q.length}else m=0
if(p!=null){H.d(typeof p==="object"&&p!==null&&p.constructor===Array)
l=p.length}else l=0
if(o!=null){H.d(typeof o==="object"&&o!==null&&o.constructor===Array)
k=o.length}else k=0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.kZ(r,q,!1))return!1
if(!H.kZ(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}}return H.n7(a.named,b.named)},
jH:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nT:function(a){var t=$.jE
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nP:function(a){return H.aY(a)},
nN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nu:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.n))
t=$.jE.$1(a)
s=$.iM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iU[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kY.$2(a,t)
if(t!=null){s=$.iM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iU[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jI(r)
$.iM[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iU[t]=r
return r}if(p==="-"){o=H.jI(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lb(a,r)
if(p==="*")throw H.e(new P.dE(t))
if(u.leafTags[t]===true){o=H.jI(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lb(a,r)},
lb:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j2(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jI:function(a){return J.j2(a,!1,null,!!a.$iso)},
nw:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j2(t,!1,null,!!t.$iso)
else return J.j2(t,c,null,null)},
np:function(){if(!0===$.jF)return
$.jF=!0
H.nq()},
nq:function(){var t,s,r,q,p,o,n,m
$.iM=Object.create(null)
$.iU=Object.create(null)
H.no()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.le.$1(p)
if(o!=null){n=H.nw(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
no:function(){var t,s,r,q,p,o,n
t=C.S()
t=H.bq(C.P,H.bq(C.U,H.bq(C.A,H.bq(C.A,H.bq(C.T,H.bq(C.Q,H.bq(C.R(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jE=new H.iR(p)
$.kY=new H.iS(o)
$.le=new H.iT(n)},
bq:function(a,b){return a(b)||b},
nE:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fE:function fE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hi:function hi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dr:function dr(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
jc:function jc(a){this.a=a},
dK:function dK(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b9:function b9(){},
h5:function h5(){},
fS:function fS(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a){this.a=a},
e1:function e1(a){this.a=a},
fJ:function fJ(a){this.a=a},
hx:function hx(a){this.a=a},
aG:function aG(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eS:function eS(a){this.a=a},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eW:function eW(a,b){this.a=a
this.$ti=b},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
G:function(a){return a},
iF:function(a){var t,s,r
if(!!J.r(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bM:function bM(){},
bh:function bh(){},
f9:function f9(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
di:function di(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
dm:function dm(){},
fg:function fg(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
nh:function(a){var t=H.C(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
j3:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dd.prototype
return J.dc.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.eR.prototype
if(typeof a=="boolean")return J.eQ.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.n)return a
return J.iN(a)},
j2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iN:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jF==null){H.np()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dE("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jr()]
if(p!=null)return p
p=H.nu(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$jr(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
ad:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.n)return a
return J.iN(a)},
dN:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.n)return a
return J.iN(a)},
l5:function(a){if(typeof a=="number")return J.bf.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b0.prototype
return a},
nj:function(a){if(typeof a=="number")return J.bf.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b0.prototype
return a},
l6:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b0.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.n)return a
return J.iN(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).v(a,b)},
ap:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l5(a).aF(a,b)},
ll:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l5(a).aG(a,b)},
b7:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nt(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ad(a).h(a,b)},
lm:function(a,b,c,d){return J.j(a).dG(a,b,c,d)},
jL:function(a,b){return J.l6(a).aM(a,b)},
bt:function(a,b){return J.j(a).dY(a,b)},
ln:function(a,b,c,d){return J.j(a).dZ(a,b,c,d)},
lo:function(a,b,c){return J.j(a).e_(a,b,c)},
jM:function(a,b){return J.j(a).bY(a,b)},
jd:function(a,b){return J.j(a).R(a,b)},
jN:function(a,b,c){return J.j(a).c0(a,b,c)},
lp:function(a,b){return J.j(a).ee(a,b)},
dR:function(a,b,c){return J.j(a).c1(a,b,c)},
cf:function(a,b,c){return J.j(a).c2(a,b,c)},
dS:function(a,b){return J.j(a).eh(a,b)},
lq:function(a,b){return J.j(a).c3(a,b)},
lr:function(a,b,c){return J.j(a).c4(a,b,c)},
jO:function(a,b,c,d){return J.j(a).c5(a,b,c,d)},
ls:function(a,b,c,d,e){return J.j(a).c6(a,b,c,d,e)},
lt:function(a,b){return J.nj(a).S(a,b)},
je:function(a,b,c){return J.ad(a).em(a,b,c)},
jf:function(a){return J.j(a).c8(a)},
lu:function(a){return J.j(a).c9(a)},
lv:function(a){return J.j(a).cc(a)},
jP:function(a){return J.j(a).er(a)},
lw:function(a,b){return J.j(a).ce(a,b)},
jg:function(a,b){return J.j(a).cf(a,b)},
lx:function(a,b,c,d){return J.j(a).cg(a,b,c,d)},
ly:function(a,b,c,d,e){return J.j(a).ez(a,b,c,d,e)},
lz:function(a,b,c,d,e){return J.j(a).ci(a,b,c,d,e)},
lA:function(a,b,c,d,e,f){return J.j(a).eA(a,b,c,d,e,f)},
lB:function(a,b){return J.dN(a).t(a,b)},
cg:function(a,b){return J.j(a).cj(a,b)},
lC:function(a,b){return J.j(a).ck(a,b)},
lD:function(a){return J.j(a).eB(a)},
lE:function(a,b){return J.dN(a).ay(a,b)},
lF:function(a){return J.j(a).ged(a)},
aq:function(a){return J.r(a).gu(a)},
bu:function(a){return J.dN(a).gw(a)},
dT:function(a){return J.ad(a).gj(a)},
lG:function(a){return J.j(a).gba(a)},
lH:function(a){return J.r(a).gA(a)},
lI:function(a){return J.j(a).gf0(a)},
lJ:function(a){return J.j(a).gaC(a)},
jh:function(a){return J.j(a).gm(a)},
ji:function(a){return J.j(a).gn(a)},
jQ:function(a){return J.j(a).gL(a)},
jj:function(a,b){return J.j(a).a8(a,b)},
lK:function(a){return J.j(a).aE(a)},
lL:function(a){return J.j(a).bh(a)},
lM:function(a,b){return J.j(a).bi(a,b)},
lN:function(a,b,c){return J.j(a).bj(a,b,c)},
jR:function(a,b,c){return J.j(a).bm(a,b,c)},
lO:function(a,b){return J.j(a).cm(a,b)},
lP:function(a,b){return J.dN(a).cp(a,b)},
lQ:function(a,b,c){return J.j(a).cq(a,b,c)},
lR:function(a){return J.dN(a).eU(a)},
lS:function(a,b){return J.j(a).G(a,b)},
lT:function(a,b,c,d){return J.j(a).br(a,b,c,d)},
lU:function(a,b,c,d,e,f,g){return J.j(a).cv(a,b,c,d,e,f,g)},
lV:function(a,b,c,d){return J.j(a).cw(a,b,c,d)},
jS:function(a,b,c,d){return J.j(a).cz(a,b,c,d)},
lW:function(a){return J.l6(a).f3(a)},
aM:function(a){return J.r(a).k(a)},
lX:function(a,b,c,d){return J.j(a).f5(a,b,c,d)},
lY:function(a,b,c){return J.j(a).cA(a,b,c)},
lZ:function(a,b,c){return J.j(a).cB(a,b,c)},
jk:function(a,b,c){return J.j(a).cC(a,b,c)},
m_:function(a,b,c){return J.j(a).cD(a,b,c)},
jT:function(a,b,c){return J.j(a).cE(a,b,c)},
jU:function(a,b,c){return J.j(a).cF(a,b,c)},
jV:function(a,b,c){return J.j(a).cG(a,b,c)},
jW:function(a,b,c,d){return J.j(a).cH(a,b,c,d)},
jX:function(a,b,c,d){return J.j(a).cI(a,b,c,d)},
m0:function(a,b){return J.j(a).cK(a,b)},
m1:function(a,b,c){return J.j(a).f6(a,b,c)},
jY:function(a,b,c,d,e,f,g){return J.j(a).cM(a,b,c,d,e,f,g)},
m2:function(a,b,c,d,e){return J.j(a).cN(a,b,c,d,e)},
a:function a(){},
eQ:function eQ(){},
eR:function eR(){},
bH:function bH(){},
fu:function fu(){},
b0:function b0(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
jp:function jp(a){this.$ti=a},
dY:function dY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bf:function bf(){},
dd:function dd(){},
dc:function dc(){},
aU:function aU(){}},P={
mM:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n8()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.br(new P.hA(t),1)).observe(s,{childList:true})
return new P.hz(t,s,r)}else if(self.setImmediate!=null)return P.n9()
return P.na()},
mN:function(a){++u.globalState.f.b
self.scheduleImmediate(H.br(new P.hB(a),0))},
mO:function(a){++u.globalState.f.b
self.setImmediate(H.br(new P.hC(a),0))},
mP:function(a){P.jw(C.y,a)},
n3:function(a,b){if(H.bs(a,{func:1,args:[P.aF,P.aF]})){b.toString
return a}else{b.toString
return a}},
mi:function(a,b,c){var t
if(a==null)a=new P.bS()
t=$.u
if(t!==C.d)t.toString
t=new P.J(0,t,null,[c])
t.dH(a,b)
return t},
mj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.J(0,$.u,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eF(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.be(new P.eE(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.J(0,$.u,null,[null])
l.bF(C.C)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.M(j)
n=H.an(j)
if(t.b===0||!1)return P.mi(o,n,null)
else{t.c=o
t.d=n}}return s},
n_:function(a,b,c){$.u.toString
a.P(b,c)},
mR:function(a,b){var t=new P.J(0,$.u,null,[b])
H.d(!0)
t.a=4
t.c=a
return t},
kP:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.J))
H.d(b.a===0)
b.a=1
try{a.be(new P.hW(b),new P.hX(b))}catch(r){t=H.M(r)
s=H.an(r)
P.nA(new P.hY(b,t,s))}},
hV:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ag(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bm(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bS(q)}},
bm:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t={}
t.a=a
for(s=a;!0;){r={}
H.d(s.a>=4)
s=t.a
q=s.a===8
if(b==null){if(q){H.d(!0)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.iG(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bm(t.a,b)}s=t.a
m=s.c
r.a=q
r.b=m
p=!q
if(p){o=b.c
o=(o&1)!==0||o===8}else o=!0
if(o){o=b.b
l=o.b
if(q){k=s.b
k.toString
k=k==null?l==null:k===l
if(!k)l.toString
else k=!0
k=!k}else k=!1
if(k){H.d(s.a===8)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.iG(null,null,p,o,s)
return}s=$.u
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.u
H.d(l==null?s!=null:l!==s)
j=$.u
$.u=l
i=j}else i=null
s=b.c
if(s===8)new P.i2(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i1(r,b,m).$0()}else if((s&2)!==0)new P.i0(t,r,b).$0()
if(i!=null){H.d(!0)
$.u=i}s=r.b
if(!!J.r(s).$isaS){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ag(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hV(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ag(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
n2:function(){var t,s
for(;t=$.bo,t!=null;){$.c9=null
s=t.b
$.bo=s
if(s==null)$.c8=null
t.a.$0()}},
n6:function(){$.jB=!0
try{P.n2()}finally{$.c9=null
$.jB=!1
if($.bo!=null)$.$get$jy().$1(P.l0())}},
kW:function(a){var t=new P.dG(a,null)
if($.bo==null){$.c8=t
$.bo=t
if(!$.jB)$.$get$jy().$1(P.l0())}else{$.c8.b=t
$.c8=t}},
n5:function(a){var t,s,r
t=$.bo
if(t==null){P.kW(a)
$.c9=$.c8
return}s=new P.dG(a,null)
r=$.c9
if(r==null){s.b=t
$.c9=s
$.bo=s}else{s.b=r.b
r.b=s
$.c9=s
if(s.b==null)$.c8=s}},
nA:function(a){var t=$.u
if(C.d===t){P.bp(null,null,C.d,a)
return}t.toString
P.bp(null,null,t,t.b2(a))},
mY:function(a,b,c){var t=a.ej(0)
if(!!J.r(t).$isaS&&t!==$.$get$kh())t.f7(new P.iE(b,c))
else b.ad(c)},
mJ:function(a,b){var t=$.u
if(t===C.d){t.toString
return P.jw(a,b)}return P.jw(a,t.b2(b))},
jw:function(a,b){var t=C.b.I(a.a,1000)
return H.mI(t<0?0:t,b)},
jx:function(a){var t,s
H.d(a!=null)
t=$.u
H.d(a==null?t!=null:a!==t)
s=$.u
$.u=a
return s},
iG:function(a,b,c,d,e){var t={}
t.a=d
P.n5(new P.iH(t,e))},
kU:function(a,b,c,d){var t,s
if($.u===c)return d.$0()
t=P.jx(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.u=s}},
kV:function(a,b,c,d,e){var t,s
if($.u===c)return d.$1(e)
t=P.jx(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.u=s}},
n4:function(a,b,c,d,e,f){var t,s
if($.u===c)return d.$2(e,f)
t=P.jx(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.u=s}},
bp:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b2(d):c.ef(d)
P.kW(d)},
hA:function hA(a){this.a=a},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
eF:function eF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hG:function hG(){},
hy:function hy(a,b){this.a=a
this.$ti=b},
iw:function iw(a,b){this.a=a
this.$ti=b},
c1:function c1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hS:function hS(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
hU:function hU(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i3:function i3(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a,b){this.a=a
this.b=b},
bW:function bW(){},
fZ:function fZ(a){this.a=a},
h_:function h_(a,b){this.a=a
this.b=b},
fX:function fX(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a){this.a=a},
fW:function fW(){},
iE:function iE(a,b){this.a=a
this.b=b},
b8:function b8(a,b){this.a=a
this.b=b},
iD:function iD(){},
iH:function iH(a,b){this.a=a
this.b=b},
ih:function ih(){},
ij:function ij(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
kp:function(a,b){return new H.ag(0,null,null,null,null,null,0,[a,b])},
N:function(){return new H.ag(0,null,null,null,null,null,0,[null,null])},
aX:function(a){return H.ni(a,new H.ag(0,null,null,null,null,null,0,[null,null]))},
c5:function(a,b){return new P.dI(0,null,null,null,null,null,0,[a,b])},
mV:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mr:function(a,b,c){var t,s
if(P.jC(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ca()
C.a.l(s,a)
try{P.n1(a,t)}finally{H.d(C.a.gb8(s)===a)
s.pop()}s=P.ky(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eP:function(a,b,c){var t,s,r
if(P.jC(a))return b+"..."+c
t=new P.bX(b)
s=$.$get$ca()
C.a.l(s,a)
try{r=t
r.a=P.ky(r.ga4(),a,", ")}finally{H.d(C.a.gb8(s)===a)
s.pop()}s=t
s.a=s.ga4()+c
s=t.ga4()
return s.charCodeAt(0)==0?s:s},
jC:function(a){var t,s
for(t=0;s=$.$get$ca(),t<s.length;++t)if(a===s[t])return!0
return!1},
n1:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.f(t.gq())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq();++r
if(!t.p()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gq();++r
H.d(r<100)
for(;t.p();n=m,m=l){l=t.gq();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.f(n)
p=H.f(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
ah:function(a,b,c,d){return new P.i9(0,null,null,null,null,null,0,[d])},
jt:function(a,b){var t,s
t=P.ah(null,null,null,b)
for(s=J.bu(a);s.p();)t.l(0,s.gq())
return t},
mv:function(a){var t,s,r
t={}
if(P.jC(a))return"{...}"
s=new P.bX("")
try{C.a.l($.$get$ca(),a)
r=s
r.a=r.ga4()+"{"
t.a=!0
a.ay(0,new P.f1(t,s))
t=s
t.a=t.ga4()+"}"}finally{t=$.$get$ca()
H.d(C.a.gb8(t)===a)
t.pop()}t=s.ga4()
return t.charCodeAt(0)==0?t:t},
ju:function(a,b){var t=new P.eY(null,0,0,0,[b])
t.dk(a,b)
return t},
dI:function dI(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i9:function i9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ia:function ia(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i6:function i6(){},
de:function de(){},
v:function v(){},
f1:function f1(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ib:function ib(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fM:function fM(){},
fL:function fL(){},
bT:function bT(){},
ky:function(a,b,c){var t=J.bu(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
m8:function(a,b){return J.lt(a,b)},
m9:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
ma:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cl:function(a){if(a>=10)return""+a
return"0"+a},
jn:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aM(a)
if(typeof a==="string")return JSON.stringify(a)
return P.me(a)},
me:function(a){var t=J.r(a)
if(!!t.$isb9)return t.k(a)
return H.fA(a)},
dX:function(a){return new P.ar(!1,null,null,a)},
jZ:function(a,b,c){return new P.ar(!0,a,b,c)},
fB:function(a,b,c){return new P.dv(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.dv(b,c,!0,a,d,"Invalid value")},
kv:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aZ(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aZ(b,a,c,"end",f))
return b},
B:function(a,b,c,d,e){var t=e!=null?e:J.dT(b)
return new P.eL(b,t,!0,a,c,"Index out of range")},
cr:function(a){return new P.hR(a)},
kq:function(a,b,c){var t,s
t=H.C([],[c])
for(s=J.bu(a);s.p();)C.a.l(t,s.gq())
return t},
ao:function(a){H.j3(H.f(a))},
aA:function aA(){},
H:function H(){},
bw:function bw(a,b){this.a=a
this.b=b},
L:function L(){},
aR:function aR(a){this.a=a},
ec:function ec(){},
ed:function ed(){},
bb:function bb(){},
ch:function ch(a){this.a=a},
bS:function bS(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dv:function dv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eL:function eL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
dE:function dE(a){this.a=a},
av:function av(a){this.a=a},
a1:function a1(a){this.a=a},
dy:function dy(){},
e5:function e5(a){this.a=a},
hR:function hR(a){this.a=a},
ef:function ef(a,b,c){this.a=a
this.b=b
this.$ti=c},
m:function m(){},
W:function W(){},
db:function db(){},
b:function b(){},
aE:function aE(){},
aF:function aF(){},
V:function V(){},
n:function n(){},
bV:function bV(){},
q:function q(){},
bX:function bX(a){this.a=a},
l2:function(a){return a},
iK:function(a){var t,s,r,q,p
if(a==null)return
t=P.N()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.Q)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nf:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lE(a,new P.iJ(t))
return t},
kc:function(){var t=$.kb
if(t==null){t=J.je(window.navigator.userAgent,"Opera",0)
$.kb=t}return t},
mb:function(){var t,s
t=$.k8
if(t!=null)return t
s=$.k9
if(s==null){s=J.je(window.navigator.userAgent,"Firefox",0)
$.k9=s}if(s)t="-moz-"
else{s=$.ka
if(s==null){s=!P.kc()&&J.je(window.navigator.userAgent,"Trident/",0)
$.ka=s}if(s)t="-ms-"
else t=P.kc()?"-o-":"-webkit-"}$.k8=t
return t},
iJ:function iJ(a){this.a=a},
nD:function(a){return Math.sqrt(a)},
i8:function i8(){},
ig:function ig(){},
I:function I(){},
dU:function dU(){},
aN:function aN(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
eA:function eA(){},
eC:function eC(){},
af:function af(){},
aD:function aD(){},
eJ:function eJ(){},
at:function at(){},
eU:function eU(){},
f2:function f2(){},
f3:function f3(){},
au:function au(){},
fk:function fk(){},
fr:function fr(){},
fw:function fw(){},
fx:function fx(){},
fC:function fC(){},
fD:function fD(){},
bU:function bU(){},
h0:function h0(){},
F:function F(){},
h1:function h1(){},
h2:function h2(){},
dA:function dA(){},
h6:function h6(){},
bZ:function bZ(){},
aw:function aw(){},
hg:function hg(){},
ho:function ho(){},
hq:function hq(){},
hr:function hr(){},
c2:function c2(){},
il:function il(){},
im:function im(){},
io:function io(){},
cz:function cz(){},
cx:function cx(){},
cE:function cE(){},
cI:function cI(){},
cS:function cS(){},
d0:function d0(){},
cX:function cX(){},
cZ:function cZ(){},
dZ:function dZ(){},
fG:function fG(){},
fH:function fH(){},
iA:function iA(){},
fR:function fR(){},
cy:function cy(){},
cV:function cV(){}},W={
mc:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).N(t,a,b,c)
s.toString
t=new H.dF(new W.S(s),new W.iI(),[W.p])
return t.ga3(t)},
md:function(a){return"wheel"},
by:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lI(a)
if(typeof s==="string")t=a.tagName}catch(r){H.M(r)}return t},
mQ:function(a,b){return document.createElement(a)},
b6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
al:function(a,b,c,d,e){var t=W.kX(new W.hQ(c))
t=new W.hP(0,a,b,t,!1,[e])
t.dB(a,b,c,!1,e)
return t},
kQ:function(a){var t,s
t=document.createElement("a")
s=new W.ip(t,window.location)
s=new W.c3(s)
s.dC(a)
return s},
mT:function(a,b,c,d){return!0},
mU:function(a,b,c,d){var t,s,r,q,p
t=d.a
s=t.a
s.href=c
r=s.hostname
t=t.b
q=t.hostname
if(r==null?q==null:r===q){q=s.port
p=t.port
if(q==null?p==null:q===p){q=s.protocol
t=t.protocol
t=q==null?t==null:q===t}else t=!1}else t=!1
if(!t)if(r==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kT:function(){var t=P.q
t=new W.ix(P.jt(C.t,t),P.ah(null,null,null,t),P.ah(null,null,null,t),P.ah(null,null,null,t),null)
t.dE(null,new H.bI(C.t,new W.iy(),[H.aB(C.t,0),null]),["TEMPLATE"],null)
return t},
kX:function(a){var t=$.u
if(t===C.d)return a
return t.eg(a)},
k:function k(){},
dV:function dV(){},
dW:function dW(){},
a0:function a0(){},
e_:function e_(){},
ci:function ci(){},
aO:function aO(){},
aP:function aP(){},
cj:function cj(){},
ck:function ck(){},
aQ:function aQ(){},
e3:function e3(){},
x:function x(){},
ba:function ba(){},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
cm:function cm(){},
bx:function bx(){},
cn:function cn(){},
e8:function e8(){},
co:function co(){},
e9:function e9(){},
cp:function cp(){},
cq:function cq(){},
ea:function ea(){},
eb:function eb(){},
a2:function a2(){},
iI:function iI(){},
i:function i(){},
h:function h(){},
a3:function a3(){},
ey:function ey(){},
ez:function ez(){},
eD:function eD(){},
a4:function a4(){},
cu:function cu(){},
eH:function eH(){},
bF:function bF(){},
cv:function cv(){},
eI:function eI(){},
bG:function bG(){},
bc:function bc(){},
bd:function bd(){},
be:function be(){},
eM:function eM(){},
aW:function aW(){},
f_:function f_(){},
bK:function bK(){},
f5:function f5(){},
f6:function f6(){},
bL:function bL(){},
a5:function a5(){},
f7:function f7(){},
O:function O(){},
fh:function fh(){},
S:function S(a){this.a=a},
p:function p(){},
dn:function dn(){},
bR:function bR(){},
fq:function fq(){},
fs:function fs(){},
a6:function a6(){},
fv:function fv(){},
fy:function fy(){},
fz:function fz(){},
du:function du(){},
fI:function fI(){},
dw:function dw(){},
fK:function fK(){},
fN:function fN(){},
a7:function a7(){},
fO:function fO(){},
a8:function a8(){},
fQ:function fQ(){},
a9:function a9(){},
fV:function fV(){},
X:function X(){},
aj:function aj(){},
dz:function dz(){},
h3:function h3(){},
h4:function h4(){},
bY:function bY(){},
aa:function aa(){},
Y:function Y(){},
h7:function h7(){},
h8:function h8(){},
ha:function ha(){},
ab:function ab(){},
b_:function b_(){},
he:function he(){},
hf:function hf(){},
bk:function bk(){},
hh:function hh(){},
dD:function dD(){},
aH:function aH(){},
hn:function hn(){},
bl:function bl(){},
hp:function hp(){},
hs:function hs(){},
ht:function ht(){},
b1:function b1(){},
c0:function c0(){},
hv:function hv(a){this.a=a},
hw:function hw(){},
b2:function b2(){},
hF:function hF(){},
dH:function dH(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
i4:function i4(){},
i5:function i5(){},
dJ:function dJ(){},
iq:function iq(){},
it:function it(){},
iu:function iu(){},
iB:function iB(){},
iC:function iC(){},
hD:function hD(){},
hK:function hK(a){this.a=a},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hP:function hP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hQ:function hQ(a){this.a=a},
c3:function c3(a){this.a=a},
z:function z(){},
dq:function dq(a){this.a=a},
fj:function fj(a){this.a=a},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(){},
ir:function ir(){},
is:function is(){},
ix:function ix(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iy:function iy(){},
iv:function iv(){},
ct:function ct(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dp:function dp(){},
ip:function ip(a,b){this.a=a
this.b=b},
dL:function dL(a){this.a=a},
iz:function iz(a){this.a=a},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
cw:function cw(){},
cQ:function cQ(){},
cC:function cC(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cA:function cA(){},
cB:function cB(){},
cD:function cD(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cR:function cR(){},
cT:function cT(){},
d2:function d2(){},
d3:function d3(){},
d1:function d1(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
cU:function cU(){},
cW:function cW(){},
cY:function cY(){},
d_:function d_(){},
d4:function d4(){},
d5:function d5(){}},B={
nB:function(a){var t,s
t=document
s=W.aW
W.al(t,"keydown",new B.j5(),!1,s)
W.al(t,"keyup",new B.j6(),!1,s)
if(!$.nC)W.al(t,"mousemove",new B.j7(),!1,W.O)
s=W.O
W.al(t,"mousedown",new B.j8(),!1,s)
W.al(t,"mouseup",new B.j9(),!1,s)},
mw:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.G(3))
s=$.$get$iL()
r=$.$get$cc()
q=new T.ai(new Float32Array(H.G(16)))
q.a2()
q=new B.fl(a,b,c,0,new T.A(t),-0.02,s,r,q,new T.A(new Float32Array(H.G(3))),new T.A(new Float32Array(H.G(3))),new T.A(new Float32Array(H.G(3))),new T.A(new Float32Array(H.G(3))),"camera:orbit",!1,!0)
q.dm(a,b,c,d)
return q},
j5:function j5(){},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
fl:function fl(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=a0
_.k3=a1
_.k4=a2
_.r1=a3
_.d=a4
_.e=a5
_.f=a6
_.r=a7
_.x=a8
_.a=a9
_.b=b0
_.c=b1},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fo:function fo(){},
fp:function fp(a){this.a=a},
mk:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.J(t,$.$get$ki())
C.a.J(s,$.$get$kj())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.Q)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.A(new Float32Array(3))
k.H(l)
l=n.b
k.l(0,s[l])
k.a1(0,0.5)
k.C(0)
j=s[l]
i=new T.A(new Float32Array(3))
i.H(j)
j=n.c
i.l(0,s[j])
i.a1(0,0.5)
i.C(0)
h=s[j]
g=new T.A(new Float32Array(3))
g.H(h)
g.l(0,s[m])
g.a1(0,0.5)
g.C(0)
f=s.length
C.a.l(s,k)
e=s.length
C.a.l(s,i)
d=s.length
C.a.l(s,g)
C.a.l(q,new G.y(m,f,d))
C.a.l(q,new G.y(l,e,f))
C.a.l(q,new G.y(j,d,e))
C.a.l(q,new G.y(f,e,d))}}c=new G.eG(!1,[],[],[],P.N())
c.bx("aTexUV")
c.bx("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.Q)(t),++o){n=t[o]
b=s[n.a]
H.d(Math.sqrt(b.gT())<1.01&&Math.sqrt(b.gT())>0.99)
a=s[n.b]
H.d(Math.sqrt(a.gT())<1.01&&Math.sqrt(a.gT())>0.99)
a0=s[n.c]
H.d(Math.sqrt(a0.gT())<1.01&&Math.sqrt(a0.gT())>0.99)
m=b.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
j=new Float32Array(2)
j[0]=0.5*(1+l*0.3183098861837907)
j[1]=m*0.3183098861837907
m=a.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
h=new Float32Array(2)
h[0]=0.5*(1+l*0.3183098861837907)
h[1]=m*0.3183098861837907
m=a0.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a1=new Float32Array(2)
a1[0]=0.5*(1+l*0.3183098861837907)
a1[1]=m*0.3183098861837907
c.dd("aNormal",[b,a,a0])
m=new T.A(new Float32Array(3))
m.H(b)
m.a1(0,a4)
l=new T.A(new Float32Array(3))
l.H(a)
l.a1(0,a4)
a2=new T.A(new Float32Array(3))
a2.H(a0)
a2.a1(0,a4)
c.de([m,l,a2])
c.dc("aTexUV",[new T.ak(j),new T.ak(h),new T.ak(a1)])}return c}},G={
mL:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.am(t,"\n")},
kO:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.cb(a,b)
t.bp(a,s,c)
t.c7(a,s)
r=t.bl(a,s,35713)
if(r!=null&&!r){q=t.bk(a,s)
P.ao("E:Compilation failed:")
P.ao("E:"+G.mL(c))
P.ao("E:Failure:")
P.ao(C.i.a7("E:",q))
throw H.e(q)}return s},
kr:function(a,b){var t=new G.f4(P.N(),a,!1,!0)
t.dl(a,b)
return t},
kg:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jh(a[s])
b[t+1]=J.ji(a[s])
b[t+2]=J.jQ(a[s])}return b},
mg:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jh(a[s])
b[t+1]=J.ji(a[s])}return b},
mh:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jh(a[s])
b[t+1]=J.ji(a[s])
b[t+2]=J.jQ(a[s])
b[t+3]=J.lJ(a[s])}return b},
mf:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b7(a[s],0)
b[t+1]=J.b7(a[s],1)
b[t+2]=J.b7(a[s],2)
b[t+3]=J.b7(a[s],3)}return b},
mS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gw(s),r=b.x,q=[[P.b,P.m]],p=[P.L],o=[T.aI],n=[T.A],m=[T.ak];s.p();){l=s.gq()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.l4>0)H.j3("I: "+k)
continue}j=t.h(0,l)
switch($.$get$T().h(0,l).a){case"vec2":b.ab(l,G.mg(H.dQ(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ab(l,G.kg(H.dQ(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ab(l,G.mh(H.dQ(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ab(l,new Float32Array(H.iF(H.dQ(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ab(l,G.mf(H.dQ(j,"$isb",q,"$asb"),null),4)
break
default:if(H.az(!1))H.aJ("unknown type for "+H.f(l)+" ["+J.lH(j[0]).k(0)+"] ["+new H.aG(H.iP(j),null).k(0)+"] "+H.f(j))}}},
kw:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ah(null,null,null,P.q)
s=c.b
r=d.b
q=c.f
p=J.lu(b.a)
o=G.kO(b.a,35633,s)
J.jN(b.a,p,o)
n=G.kO(b.a,35632,r)
J.jN(b.a,p,n)
if(q.length>0)J.lX(b.a,p,q,35980)
J.lO(b.a,p)
if(!J.lN(b.a,p,35714))H.E(J.lM(b.a,p))
t=new G.fF(b,c,d,p,P.jt(c.c,null),P.N(),P.N(),t,null,a,!1,!0)
t.dn(a,b,c,d)
return t},
kk:function(a,b,c,d,e){var t=new G.eK(c,b,J.lv(a.a),e,a,new G.h9(!1,!1,!1,!0,1,9729,9729))
t.dj(a,b,c,d,e)
return t},
f8:function f8(){},
hl:function hl(){},
e0:function e0(){},
e2:function e2(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dh:function dh(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=a0
_.Q=a1
_.ch=a2
_.cx=a3
_.cy=a4
_.a=a5
_.b=a6
_.c=a7},
ft:function ft(){},
fF:function fF(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.ch=a0
_.a=a1
_.b=a2
_.c=a3},
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fP:function fP(){},
h9:function h9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c_:function c_(){},
eK:function eK(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mK:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.G(s))
for(q=0;q<s;++q)r[q]=($.$get$kN().eR()-0.5)*c
s=a.d
s=new G.dh(s,J.jP(s.a),0,P.N(),a.e.x,null,0,-1,null,null,P.N(),"meshdata:"+t,!1,!0)
s.bv(r)
return s},
ds:function ds(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.fy=a
_.go=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=a0
_.cx=a1
_.cy=a2
_.db=a3
_.d=a4
_.a=a5
_.b=a6
_.c=a7},
fT:function fT(){},
fU:function fU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mu:function(a){var t,s,r
t=new P.J(0,$.u,null,[null])
s=document.createElement("img")
r=new W.hL(s,"load",!1,[W.i])
r.gb7(r).aB(new D.eZ(new P.hy(t,[null]),s))
s.src=a
return t},
eZ:function eZ(a,b){this.a=a
this.b=b}},A={
dO:function(a){var t,s
t=C.Y.eD(a,0,new A.iQ())
s=536870911&t+(C.b.cO(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iQ:function iQ(){},
nv:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t={}
s=document
r=new R.fU(0,0,null,null,null,null)
r.ds(C.r.cS(s,"stats"),"blue","gray")
q=C.r.eT(s,"#webgl-canvas")
p=new G.e2(null,q)
o=(q&&C.w).bg(q,"webgl2",P.aX(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.E(P.cr('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.aM(J.lK(o))
if($.l4>0)P.ao("I: "+n)
J.ls(o,0,0,0,1)
J.cg(o,2929)
J.cg(o,2884)
m=B.mw(5,10,0,q)
o=new T.ai(new Float32Array(H.G(16)))
o.a2()
n=new T.ai(new Float32Array(H.G(16)))
n.a2()
l=new R.ds(q,p,m,50,1,0.1,1000,o,n,new T.ai(new Float32Array(H.G(16))),P.N(),"perspective",!1,!0)
l.bA()
l.cs(null)
W.al(window,"resize",l.geX(),!1,W.i)
k=G.kw("spheres",p,$.$get$lg(),$.$get$lf())
j=B.mk(3,1,!0)
o=k.d
n=J.jP(o.a)
i=new G.dh(o,n,4,P.N(),k.e.x,null,0,-1,null,null,P.N(),"meshdata:icosahedron-3",!1,!0)
i.bv(G.kg(j.d,null))
h=j.dh()
i.y=J.jf(o.a)
H.d(i.ch!=null)
g=i.ch.length
if(g<768){i.saQ(new Uint8Array(H.iF(h)))
i.Q=5121}else if(g<196608){i.saQ(new Uint16Array(H.iF(h)))
i.Q=5123}else{i.saQ(new Uint32Array(H.iF(h)))
i.Q=5125}J.dS(o.a,n)
n=i.y
h=i.cx
g=J.r(h)
H.d(!!g.$iskK||!!g.$iskL||!!g.$iskM)
J.dR(o.a,34963,n)
J.jO(o.a,34963,h,35048)
G.mS(j,i)
f=new T.ai(new Float32Array(H.G(16)))
f.a2()
o=new Float32Array(H.G(9))
o[0]=1
o[1]=0
o[2]=0
o[3]=0
o[4]=1
o[5]=0
o[6]=0
o[7]=0
o[8]=1
n=$.$get$k_()
e=G.kr("sphere",n)
e.M("uNormalMatrix",new T.bJ(o))
e.M("uModelMatrix",f)
d=G.kw("stars",p,$.$get$ld(),$.$get$lc())
c=G.kr("stars",n)
b=s.createElement("canvas")
b.width=64
b.height=64
a=C.w.cR(b,"2d")
a0=(a&&C.p).ca(a,32,32,1,32,32,22);(a0&&C.m).ax(a0,0,"gray")
C.m.ax(a0,1,"black")
a.fillStyle=a0
C.p.eC(a,0,0,64,64)
a0=C.p.ca(a,32,32,1,32,32,6);(a0&&C.m).ax(a0,0,"white")
C.m.ax(a0,1,"gray")
a.globalAlpha=0.9
a.fillStyle=a0
a.arc(32,32,4,0,6.283185307179586,!1)
a.fill("nonzero")
c.M("uTexture",G.kk(p,"Utils::Particles",b,null,3553))
c.M("uPointSize",1000)
s=new T.ai(new Float32Array(H.G(16)))
s.a2()
c.M("uModelMatrix",s)
a1=R.mK(d,2000,100)
t.a=0
P.mj([D.mu($.lj)],null,!1).aB(new A.j1(p,e,new A.j0(t,r,m,l,k,i,f,e,d,c,a1)))},
j0:function j0(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=a0
_.Q=a1},
j1:function j1(a,b,c){this.a=a
this.b=b
this.c=c}},T={
ac:function(a,b,c){var t=new T.A(new Float32Array(H.G(3)))
t.aq(a,b,c)
return t},
bJ:function bJ(a){this.a=a},
ai:function ai(a){this.a=a},
ak:function ak(a){this.a=a},
A:function A(a){this.a=a},
aI:function aI(a){this.a=a}}
var v=[C,H,J,P,W,B,G,R,D,A,T]
setFunctionNamesIfNecessary(v)
var $={}
H.jq.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aY(a)},
k:function(a){return H.fA(a)},
gA:function(a){return new H.aG(H.iP(a),null)}}
J.eQ.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.as},
$isaA:1}
J.eR.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.am}}
J.bH.prototype={
gu:function(a){return 0},
gA:function(a){return C.al},
k:function(a){return String(a)},
$isko:1}
J.fu.prototype={}
J.b0.prototype={}
J.aV.prototype={
k:function(a){var t=a[$.$get$k7()]
return t==null?this.d8(a):J.aM(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjo:1}
J.aT.prototype={
b4:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
b3:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.b3(a,"add")
a.push(b)},
J:function(a,b){var t,s,r,q,p
t=a.length
this.b3(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.Q)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a1(a)))
a.push(q)}},
cp:function(a,b){return new H.bI(a,b,[H.aB(a,0),null])},
am:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gb7:function(a){if(a.length>0)return a[0]
throw H.e(H.da())},
gb8:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.da())},
bo:function(a,b,c,d,e){var t,s
this.b4(a,"setRange")
P.kv(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aZ(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.ms())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c_:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a1(a))}return!1},
d3:function(a,b){this.b4(a,"sort")
H.dx(a,0,a.length-1,P.ng())},
aH:function(a){return this.d3(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
k:function(a){return P.eP(a,"[","]")},
gw:function(a){return new J.dY(a,a.length,0,null,[H.aB(a,0)])},
gu:function(a){return H.aY(a)},
gj:function(a){return a.length},
sj:function(a,b){this.b3(a,"set length")
if(b<0)throw H.e(P.aZ(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
return a[b]},
i:function(a,b,c){this.b4(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jp.prototype={}
J.dY.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.Q(t))
r=this.c
if(r>=s){this.sbB(null)
return!1}this.sbB(t[r]);++this.c
return!0},
sbB:function(a){this.d=a}}
J.bf.prototype={
S:function(a,b){var t
if(typeof b!=="number")throw H.e(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaz(b)
if(this.gaz(a)===t)return 0
if(this.gaz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaz:function(a){return a===0?1/a<0:a<0},
ek:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.t(""+a+".ceil()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
el:function(a,b,c){if(this.S(b,c)>0)throw H.e(H.U(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
f4:function(a,b){var t
if(b>20)throw H.e(P.aZ(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaz(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a7:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a+b},
aa:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a-b},
cP:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a*b},
aJ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bW(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bW(a,b)},
bW:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aV:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cO:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a&b)>>>0},
da:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a^b)>>>0},
aG:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a<b},
aF:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>b},
cQ:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>=b},
gA:function(a){return C.av},
$isV:1}
J.dd.prototype={
gA:function(a){return C.au},
$isL:1,
$ism:1,
$isV:1}
J.dc.prototype={
gA:function(a){return C.at},
$isL:1,
$isV:1}
J.aU.prototype={
aM:function(a,b){if(b>=a.length)throw H.e(H.P(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(typeof b!=="string")throw H.e(P.jZ(b,null,null))
return a+b},
d4:function(a,b,c){var t
if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bq:function(a,b){return this.d4(a,b,0)},
bs:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fB(b,null,null))
if(b>c)throw H.e(P.fB(b,null,null))
if(c>a.length)throw H.e(P.fB(c,null,null))
return a.substring(b,c)},
d5:function(a,b){return this.bs(a,b,null)},
f3:function(a){return a.toLowerCase()},
em:function(a,b,c){if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
return H.nE(a,b,c)},
S:function(a,b){var t
if(typeof b!=="string")throw H.e(H.U(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gu:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gA:function(a){return C.an},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.P(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isq:1}
H.c.prototype={$asc:null}
H.bg.prototype={
gw:function(a){return new H.df(this,this.gj(this),0,null,[H.ae(this,"bg",0)])},
aD:function(a,b){return this.d7(0,b)},
f2:function(a,b){var t,s
t=H.C([],[H.ae(this,"bg",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f1:function(a){return this.f2(a,!0)}}
H.df.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ad(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a1(t))
q=this.c
if(q>=r){this.sae(null)
return!1}this.sae(s.t(t,q));++this.c
return!0},
sae:function(a){this.d=a}}
H.dg.prototype={
gw:function(a){return new H.f0(null,J.bu(this.a),this.b,this.$ti)},
gj:function(a){return J.dT(this.a)},
$asW:function(a,b){return[b]}}
H.ee.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f0.prototype={
p:function(){var t=this.b
if(t.p()){this.sae(this.c.$1(t.gq()))
return!0}this.sae(null)
return!1},
gq:function(){return this.a},
sae:function(a){this.a=a},
$asdb:function(a,b){return[b]}}
H.bI.prototype={
gj:function(a){return J.dT(this.a)},
t:function(a,b){return this.b.$1(J.lB(this.a,b))},
$asc:function(a,b){return[b]},
$asbg:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dF.prototype={
gw:function(a){return new H.hu(J.bu(this.a),this.b,this.$ti)}}
H.hu.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cs.prototype={}
H.ja.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jb.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.id.prototype={
seM:function(a){this.z=a},
seO:function(a){this.ch=a}}
H.b4.prototype={
bZ:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b1()},
eW:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.an(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bQ();++r.d}this.y=!1}this.b1()},
e9:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eV:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.t("removeRange"))
P.kv(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d0:function(a,b){if(!this.r.v(0,a))return
this.db=b},
eG:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ju(null,null)
this.cx=t}t.V(0,new H.i7(a,c))},
eF:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aA()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ju(null,null)
this.cx=t}t.V(0,this.geN())},
eH:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ao(a)
if(b!=null)P.ao(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aM(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c4(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.G(0,s)},
ai:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.M(o)
p=H.an(o)
this.eH(q,p)
if(this.db){this.aA()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nb(r)
u.globalState.d=H.jG(t,"$isb4")
if(t!=null)$=t.geL()
if(this.cx!=null)for(;n=this.cx,!n.gal(n);)this.cx.cr().$0()}return s},
co:function(a){return this.b.h(0,a)},
bE:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.cr("Registry: ports must be registered only once."))
t.i(0,a,b)},
b1:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aA()},
aA:function(){var t,s,r
t=this.cx
if(t!=null)t.X(0)
for(t=this.b,s=t.gcL(t),s=s.gw(s);s.p();)s.gq().dJ()
t.X(0)
this.c.X(0)
u.globalState.z.an(0,this.a)
this.dx.X(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
geL:function(){return this.d},
gen:function(){return this.e}}
H.i7.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hM.prototype={
eu:function(){var t=this.a
if(t.b===t.c)return
return t.cr()},
cu:function(){var t,s,r
t=this.eu()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gal(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cr("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gal(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aX(["command","close"])
r=new H.am(!0,new P.dI(0,null,null,null,null,null,0,[null,P.m])).K(r)
s.toString
self.postMessage(r)}return!1}t.eS()
return!0},
bU:function(){if(self.window!=null)new H.hN(this).$0()
else for(;this.cu(););},
ao:function(){var t,s,r,q,p
if(!u.globalState.x)this.bU()
else try{this.bU()}catch(r){t=H.M(r)
s=H.an(r)
q=u.globalState.Q
p=P.aX(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.am(!0,P.c5(null,P.m)).K(p)
q.toString
self.postMessage(p)}}}
H.hN.prototype={
$0:function(){if(!this.a.cu())return
P.mJ(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.b5.prototype={
eS:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ai(this.b)}}
H.ic.prototype={}
H.eN.prototype={
$0:function(){H.mo(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eO.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bs(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bs(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b1()},
$S:function(){return{func:1,v:true}}}
H.hE.prototype={}
H.bn.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mZ(b)
if(t.gen()===s){s=J.ad(r)
switch(s.h(r,0)){case"pause":t.bZ(s.h(r,1),s.h(r,2))
break
case"resume":t.eW(s.h(r,1))
break
case"add-ondone":t.e9(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eV(s.h(r,1))
break
case"set-errors-fatal":t.d0(s.h(r,1),s.h(r,2))
break
case"ping":t.eG(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eF(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.V(0,new H.b5(t,new H.ie(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bn){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.ie.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dF(0,this.b)},
$S:function(){return{func:1}}}
H.c7.prototype={
G:function(a,b){var t,s,r
t=P.aX(["command","message","port",this,"msg",b])
s=new H.am(!0,P.c5(null,P.m)).K(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c7){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.da((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bi.prototype={
dJ:function(){this.c=!0
this.b=null},
dF:function(a,b){if(this.c)return
this.b.$1(b)},
$ismE:1}
H.hb.prototype={
dt:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.V(0,new H.b5(s,new H.hc(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.br(new H.hd(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.hc.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hd.prototype={
$0:function(){this.a.c=null
H.j_()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.as.prototype={
gu:function(a){var t=this.a
t=C.b.aV(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.as){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.am.prototype={
K:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.r(a)
if(!!t.$isbM)return["buffer",a]
if(!!t.$isbh)return["typed",a]
if(!!t.$isl)return this.cX(a)
if(!!t.$isml){r=this.gcU()
q=t.gE(a)
q=H.jv(q,r,H.ae(q,"W",0),null)
q=P.kq(q,!0,H.ae(q,"W",0))
t=t.gcL(a)
t=H.jv(t,r,H.ae(t,"W",0),null)
return["map",q,P.kq(t,!0,H.ae(t,"W",0))]}if(!!t.$isko)return this.cY(a)
if(!!t.$isa)this.cJ(a)
if(!!t.$ismE)this.ap(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbn)return this.cZ(a)
if(!!t.$isc7)return this.d_(a)
if(!!t.$isb9){p=a.$static_name
if(p==null)this.ap(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isas)return["capability",a.a]
if(!(a instanceof P.n))this.cJ(a)
return["dart",u.classIdExtractor(a),this.cW(u.classFieldsExtractor(a))]},
ap:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cJ:function(a){return this.ap(a,null)},
cX:function(a){var t
H.d(typeof a!=="string")
t=this.cV(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ap(a,"Can't serialize indexable: ")},
cV:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.K(a[s])
return t},
cW:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.K(a[t]))
return a},
cY:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ap(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.K(a[t[r]])
return["js-object",t,s]},
d_:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cZ:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b3.prototype={
Y:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.dX("Bad serialized message: "+H.f(a)))
switch(C.a.gb7(a)){case"ref":H.d(J.D(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.D(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.D(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.D(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.C(this.ah(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.C(this.ah(t),[null])
case"mutable":H.d(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ah(t)
case"const":H.d(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.C(this.ah(t),[null])
s.fixed$length=Array
return s
case"map":return this.ex(a)
case"sendport":return this.ey(a)
case"raw sendport":H.d(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ew(a)
case"function":H.d(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.D(a[0],"capability"))
return new H.as(a[1])
case"dart":H.d(J.D(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ah(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ah:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.Y(a[t]))
return a},
ex:function(a){var t,s,r,q,p
H.d(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.N()
C.a.l(this.b,r)
t=J.lP(t,this.gev()).f1(0)
for(q=J.ad(s),p=0;p<t.length;++p)r.i(0,t[p],this.Y(q.h(s,p)))
return r},
ey:function(a){var t,s,r,q,p,o,n
H.d(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.co(r)
if(o==null)return
n=new H.bn(o,s)}else n=new H.c7(t,r,s)
C.a.l(this.b,n)
return n},
ew:function(a){var t,s,r,q,p,o
H.d(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ad(t),p=J.ad(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.Y(p.h(s,o))
return r}}
H.fE.prototype={}
H.hi.prototype={
O:function(a){var t,s,r
t=new RegExp(this.a).exec(a)
if(t==null)return
s=Object.create(null)
r=this.b
if(r!==-1)s.arguments=t[r+1]
r=this.c
if(r!==-1)s.argumentsExpr=t[r+1]
r=this.d
if(r!==-1)s.expr=t[r+1]
r=this.e
if(r!==-1)s.method=t[r+1]
r=this.f
if(r!==-1)s.receiver=t[r+1]
return s}}
H.dr.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eT.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hm.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jc.prototype={
$1:function(a){if(!!J.r(a).$isbb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dK.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iV.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iW.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iX.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iY.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iZ.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b9.prototype={
k:function(a){return"Closure '"+H.dt(this).trim()+"'"},
$isjo:1,
gf8:function(){return this},
$D:null}
H.h5.prototype={}
H.fS.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bv.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bv))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aY(this.a)
else s=typeof t!=="object"?J.aq(t):H.aY(t)
return(s^H.aY(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fA(t)}}
H.hk.prototype={
k:function(a){return this.a}}
H.e1.prototype={
k:function(a){return this.a}}
H.fJ.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hx.prototype={
k:function(a){return C.i.a7("Assertion failed: ",P.jn(this.a))}}
H.aG.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.aq(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aG){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ag.prototype={
gj:function(a){return this.a},
gal:function(a){return this.a===0},
gE:function(a){return new H.eW(this,[H.aB(this,0)])},
gcL:function(a){return H.jv(this.gE(this),new H.eS(this),H.aB(this,0),H.aB(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bN(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bN(s,b)}else return this.eI(b)},
eI:function(a){var t=this.d
if(t==null)return!1
return this.ak(this.av(t,this.aj(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.af(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.af(r,b)
return s==null?null:s.b}else return this.eJ(b)},
eJ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.av(t,this.aj(a))
r=this.ak(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aR()
this.b=t}this.bD(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aR()
this.c=s}this.bD(s,b,c)}else{r=this.d
if(r==null){r=this.aR()
this.d=r}q=this.aj(b)
p=this.av(r,q)
if(p==null)this.aU(r,q,[this.aS(b,c)])
else{o=this.ak(p,b)
if(o>=0)p[o].b=c
else p.push(this.aS(b,c))}}},
an:function(a,b){if(typeof b==="string")return this.bT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bT(this.c,b)
else return this.eK(b)},
eK:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.av(t,this.aj(a))
r=this.ak(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bX(q)
return q.b},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ay:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a1(this))
t=t.c}},
bD:function(a,b,c){var t=this.af(a,b)
if(t==null)this.aU(a,b,this.aS(b,c))
else t.b=c},
bT:function(a,b){var t
if(a==null)return
t=this.af(a,b)
if(t==null)return
this.bX(t)
this.bO(a,b)
return t.b},
aS:function(a,b){var t,s
t=new H.eV(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bX:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
aj:function(a){return J.aq(a)&0x3ffffff},
ak:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
k:function(a){return P.mv(this)},
af:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aU:function(a,b,c){H.d(c!=null)
a[b]=c},
bO:function(a,b){delete a[b]},
bN:function(a,b){return this.af(a,b)!=null},
aR:function(){var t=Object.create(null)
this.aU(t,"<non-identifier-key>",t)
this.bO(t,"<non-identifier-key>")
return t},
$isml:1}
H.eS.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eV.prototype={}
H.eW.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eX(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eX.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sbC(null)
return!1}else{this.sbC(t.a)
this.c=this.c.c
return!0}}},
sbC:function(a){this.d=a}}
H.iR.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iS.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.iT.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.bM.prototype={
gA:function(a){return C.ae},
$isbM:1}
H.bh.prototype={$isbh:1}
H.f9.prototype={
gA:function(a){return C.af}}
H.dj.prototype={
gj:function(a){return a.length},
$isl:1,
$asl:function(){},
$iso:1,
$aso:function(){}}
H.dk.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
a[b]=c}}
H.dl.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.di.prototype={
gA:function(a){return C.ag},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]},
$iseB:1}
H.fa.prototype={
gA:function(a){return C.ah},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]}}
H.fb.prototype={
gA:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.fc.prototype={
gA:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskl:1}
H.fd.prototype={
gA:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.fe.prototype={
gA:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskK:1}
H.ff.prototype={
gA:function(a){return C.ap},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskL:1}
H.dm.prototype={
gA:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.fg.prototype={
gA:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskM:1}
H.bN.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.m]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.m]}}
H.bO.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.L]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.L]}}
H.bP.prototype={
$asl:function(){},
$asc:function(){return[P.L]},
$aso:function(){},
$asb:function(){return[P.L]}}
H.bQ.prototype={
$asl:function(){},
$asc:function(){return[P.m]},
$aso:function(){},
$asb:function(){return[P.m]}}
P.hA.prototype={
$1:function(a){var t,s
H.j_()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hz.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hB.prototype={
$0:function(){H.j_()
this.a.$0()},
$S:function(){return{func:1}}}
P.hC.prototype={
$0:function(){H.j_()
this.a.$0()},
$S:function(){return{func:1}}}
P.eF.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.P(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.P(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eE.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bM(r)}else if(t.b===0&&!this.b)this.d.P(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hG.prototype={}
P.hy.prototype={
b5:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.av("Future already completed"))
t.bF(b)}}
P.iw.prototype={
b5:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.av("Future already completed"))
t.ad(b)}}
P.c1.prototype={
eP:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.bc(this.d,a.a)},
eE:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bs(s,{func:1,args:[P.n,P.bV]}))return t.eY(s,a.a,a.b)
else return t.bc(s,a.a)}}
P.J.prototype={
be:function(a,b){var t,s,r
t=$.u
if(t!==C.d){t.toString
if(b!=null)b=P.n3(b,t)}s=new P.J(0,t,null,[null])
r=b==null?1:3
this.aL(new P.c1(null,s,r,a,b,[H.aB(this,0),null]))
return s},
aB:function(a){return this.be(a,null)},
f7:function(a){var t,s
t=$.u
s=new P.J(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aB(this,0)
this.aL(new P.c1(null,s,8,a,null,[t,t]))
return s},
bH:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
aL:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jG(this.c,"$isc1")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.aL(a)
return}this.bH(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bp(null,null,t,new P.hS(this,a))}},
bS:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bS(a)
return}this.bH(s)}H.d(this.a>=4)
t.a=this.ag(a)
s=this.b
s.toString
P.bp(null,null,s,new P.i_(t,this))}},
aT:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ag(t)},
ag:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ad:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.cb(a,"$isaS",t,"$asaS"))if(H.cb(a,"$isJ",t,null))P.hV(a,this)
else P.kP(a,this)
else{s=this.aT()
H.d(this.a<4)
this.a=4
this.c=a
P.bm(this,s)}},
bM:function(a){var t
H.d(this.a<4)
H.d(!J.r(a).$isaS)
t=this.aT()
H.d(this.a<4)
this.a=4
this.c=a
P.bm(this,t)},
P:function(a,b){var t
H.d(this.a<4)
t=this.aT()
H.d(this.a<4)
this.a=8
this.c=new P.b8(a,b)
P.bm(this,t)},
dK:function(a){return this.P(a,null)},
bF:function(a){var t
H.d(this.a<4)
if(H.cb(a,"$isaS",this.$ti,"$asaS")){this.dI(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bp(null,null,t,new P.hU(this,a))},
dI:function(a){var t
if(H.cb(a,"$isJ",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bp(null,null,t,new P.hZ(this,a))}else P.hV(a,this)
return}P.kP(a,this)},
dH:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bp(null,null,t,new P.hT(this,a,b))},
$isaS:1,
gaW:function(){return this.a},
ge1:function(){return this.c}}
P.hS.prototype={
$0:function(){P.bm(this.a,this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$0:function(){P.bm(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hW.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.ad(a)},
$S:function(){return{func:1,args:[,]}}}
P.hX.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.P(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hY.prototype={
$0:function(){this.a.P(this.b,this.c)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){this.a.bM(this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){P.hV(this.b,this.a)},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){this.a.P(this.b,this.c)},
$S:function(){return{func:1}}}
P.i2.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.ct(q.d)}catch(n){s=H.M(n)
r=H.an(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b8(s,r)
p.a=!0
return}if(!!J.r(t).$isaS){if(t instanceof P.J&&t.gaW()>=4){if(t.gaW()===8){q=t
H.d(q.gaW()===8)
p=this.b
p.b=q.ge1()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aB(new P.i3(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i3.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i1.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.bc(r.d,this.c)}catch(q){t=H.M(q)
s=H.an(q)
r=this.a
r.b=new P.b8(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i0.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eP(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eE(t)
p.a=!1}}catch(o){s=H.M(o)
r=H.an(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b8(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dG.prototype={}
P.bW.prototype={
gj:function(a){var t,s
t={}
s=new P.J(0,$.u,null,[P.m])
t.a=0
this.cn(new P.fZ(t),!0,new P.h_(t,s),s.gbL())
return s},
gb7:function(a){var t,s
t={}
s=new P.J(0,$.u,null,[H.ae(this,"bW",0)])
t.a=null
t.a=this.cn(new P.fX(t,this,s),!0,new P.fY(s),s.gbL())
return s}}
P.fZ.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h_.prototype={
$0:function(){this.b.ad(this.a.a)},
$S:function(){return{func:1}}}
P.fX.prototype={
$1:function(a){P.mY(this.a.a,this.c,a)},
$S:function(){return H.ne(function(a){return{func:1,args:[a]}},this.b,"bW")}}
P.fY.prototype={
$0:function(){var t,s,r,q
try{r=H.da()
throw H.e(r)}catch(q){t=H.M(q)
s=H.an(q)
P.n_(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fW.prototype={}
P.iE.prototype={
$0:function(){return this.a.ad(this.b)},
$S:function(){return{func:1}}}
P.b8.prototype={
k:function(a){return H.f(this.a)},
$isbb:1}
P.iD.prototype={}
P.iH.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bS()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ih.prototype={
eZ:function(a){var t,s,r
try{if(C.d===$.u){a.$0()
return}P.kU(null,null,this,a)}catch(r){t=H.M(r)
s=H.an(r)
P.iG(null,null,this,t,s)}},
f_:function(a,b){var t,s,r
try{if(C.d===$.u){a.$1(b)
return}P.kV(null,null,this,a,b)}catch(r){t=H.M(r)
s=H.an(r)
P.iG(null,null,this,t,s)}},
ef:function(a){return new P.ij(this,a)},
b2:function(a){return new P.ii(this,a)},
eg:function(a){return new P.ik(this,a)},
h:function(a,b){return},
ct:function(a){if($.u===C.d)return a.$0()
return P.kU(null,null,this,a)},
bc:function(a,b){if($.u===C.d)return a.$1(b)
return P.kV(null,null,this,a,b)},
eY:function(a,b,c){if($.u===C.d)return a.$2(b,c)
return P.n4(null,null,this,a,b,c)}}
P.ij.prototype={
$0:function(){return this.a.ct(this.b)},
$S:function(){return{func:1}}}
P.ii.prototype={
$0:function(){return this.a.eZ(this.b)},
$S:function(){return{func:1}}}
P.ik.prototype={
$1:function(a){return this.a.f_(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dI.prototype={
aj:function(a){return H.nx(a)&0x3ffffff},
ak:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i9.prototype={
gw:function(a){var t=new P.c4(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dL(b)},
dL:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
co:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dU(a)},
dU:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return
return J.b7(s,r).gdN()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bI(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bI(r,b)}else return this.V(0,b)},
V:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mV()
this.d=t}s=this.at(b)
r=t[s]
if(r==null){q=[this.aN(b)]
H.d(q!=null)
t[s]=q}else{if(this.au(r,b)>=0)return!1
r.push(this.aN(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bJ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bJ(this.c,b)
else return this.dW(0,b)},
dW:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.at(b)]
r=this.au(s,b)
if(r<0)return!1
this.bK(s.splice(r,1)[0])
return!0},
X:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bI:function(a,b){var t
if(a[b]!=null)return!1
t=this.aN(b)
H.d(!0)
a[b]=t
return!0},
bJ:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bK(t)
delete a[b]
return!0},
aN:function(a){var t,s
t=new P.ia(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bK:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
at:function(a){return J.aq(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.ia.prototype={
gdN:function(){return this.a}}
P.c4.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a1(t))
else{t=this.c
if(t==null){this.sac(null)
return!1}else{this.sac(t.a)
this.c=this.c.b
return!0}}},
sac:function(a){this.d=a}}
P.i6.prototype={}
P.de.prototype={}
P.v.prototype={
gw:function(a){return new H.df(a,this.gj(a),0,null,[H.ae(a,"v",0)])},
t:function(a,b){return this.h(a,b)},
cp:function(a,b){return new H.bI(a,b,[H.ae(a,"v",0),null])},
eD:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a1(a))}return s},
k:function(a){return P.eP(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f1.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eY.prototype={
gw:function(a){return new P.ib(this,this.c,this.d,this.b,null,this.$ti)},
gal:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.E(P.B(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
X:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eP(this,"{","}")},
cr:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.da());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
V:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bQ();++this.d},
bQ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.C(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bo(s,0,q,t,r)
C.a.bo(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbV(s)},
dk:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbV(H.C(t,[b]))},
sbV:function(a){this.a=a},
$asc:null}
P.ib.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a1(t))
s=this.d
if(s===this.b){this.sac(null)
return!1}this.sac(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sac:function(a){this.e=a}}
P.fM.prototype={
J:function(a,b){var t
for(t=J.bu(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eP(this,"{","}")},
$isc:1,
$asc:null}
P.fL.prototype={}
P.bT.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.aA.prototype={}
P.H.prototype={}
P.bw.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bw))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aV(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m9(H.mD(this))
s=P.cl(H.mB(this))
r=P.cl(H.mx(this))
q=P.cl(H.my(this))
p=P.cl(H.mA(this))
o=P.cl(H.mC(this))
n=P.ma(H.mz(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.bw]}}
P.L.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.aR.prototype={
aG:function(a,b){return C.b.aG(this.a,b.gdM())},
aF:function(a,b){return C.b.aF(this.a,b.gdM())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aR))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ed()
s=this.a
if(s<0)return"-"+new P.aR(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.ec().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isH:1,
$asH:function(){return[P.aR]}}
P.ec.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.ed.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.bb.prototype={}
P.ch.prototype={
k:function(a){return"Assertion failed"}}
P.bS.prototype={
k:function(a){return"Throw of null."}}
P.ar.prototype={
gaP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaO:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaP()+s+r
if(!this.a)return q
p=this.gaO()
o=P.jn(this.b)
return q+p+": "+H.f(o)}}
P.dv.prototype={
gaP:function(){return"RangeError"},
gaO:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eL.prototype={
gaP:function(){return"RangeError"},
gaO:function(){H.d(this.a)
if(J.ll(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.t.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dE.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.av.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a1.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jn(t))+"."}}
P.dy.prototype={
k:function(a){return"Stack Overflow"},
$isbb:1}
P.e5.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hR.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.ef.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.jZ(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ks(b,"expando$values")
return s==null?null:H.ks(s,t)}}
P.m.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.W.prototype={
aD:function(a,b){return new H.dF(this,b,[H.ae(this,"W",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga3:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.da())
s=t.gq()
if(t.p())throw H.e(H.mt())
return s},
t:function(a,b){var t,s,r
if(b<0)H.E(P.aZ(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.B(b,this,"index",null,s))},
k:function(a){return P.mr(this,"(",")")}}
P.db.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aE.prototype={}
P.aF.prototype={
gu:function(a){return P.n.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.V.prototype={$isH:1,
$asH:function(){return[P.V]}}
P.n.prototype={constructor:P.n,$isn:1,
v:function(a,b){return this===b},
gu:function(a){return H.aY(this)},
k:function(a){return H.fA(this)},
gA:function(a){return new H.aG(H.iP(this),null)},
toString:function(){return this.k(this)}}
P.bV.prototype={}
P.q.prototype={$isH:1,
$asH:function(){return[P.q]}}
P.bX.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga4:function(){return this.a}}
W.k.prototype={}
W.dV.prototype={
k:function(a){return String(a)},
$isa:1}
W.dW.prototype={
k:function(a){return String(a)},
$isa:1}
W.a0.prototype={$isn:1}
W.e_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$iso:1,
$aso:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.ci.prototype={}
W.aO.prototype={$isa:1,$isaO:1}
W.aP.prototype={
bg:function(a,b,c){if(c!=null)return this.dP(a,b,P.nf(c,null))
return this.dQ(a,b)},
cR:function(a,b){return this.bg(a,b,null)},
dP:function(a,b,c){return a.getContext(b,c)},
dQ:function(a,b){return a.getContext(b)},
$isaP:1}
W.cj.prototype={
ax:function(a,b,c){return a.addColorStop(b,c)}}
W.ck.prototype={
ca:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eC:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aE:function(a){return P.iK(a.getContextAttributes())}}
W.aQ.prototype={$isa:1,
gj:function(a){return a.length}}
W.e3.prototype={$isa:1}
W.x.prototype={$isn:1}
W.ba.prototype={
bG:function(a,b){var t,s
t=$.$get$k6()
s=t[b]
if(typeof s==="string")return s
s=this.e4(a,b)
t[b]=s
return s},
e4:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mb()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e4.prototype={}
W.e6.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cm.prototype={}
W.bx.prototype={
ea:function(a,b){return a.adoptNode(b)},
cS:function(a,b){return a.getElementById(b)},
eT:function(a,b){return a.querySelector(b)}}
W.cn.prototype={$isa:1}
W.e8.prototype={
k:function(a){return String(a)}}
W.co.prototype={
eq:function(a,b){return a.createHTMLDocument(b)}}
W.e9.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cp.prototype={
gaC:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cq.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga0(a))+" x "+H.f(this.ga_(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isI)return!1
return a.left===t.gb9(b)&&a.top===t.gbf(b)&&this.ga0(a)===t.ga0(b)&&this.ga_(a)===t.ga_(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga0(a)
q=this.ga_(a)
return W.kS(W.b6(W.b6(W.b6(W.b6(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga_:function(a){return a.height},
gb9:function(a){return a.left},
gbf:function(a){return a.top},
ga0:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isI:1,
$asI:function(){}}
W.ea.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$iso:1,
$aso:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.eb.prototype={
gj:function(a){return a.length}}
W.a2.prototype={
ged:function(a){return new W.hK(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.ke
if(t==null){t=H.C([],[W.dp])
s=new W.dq(t)
C.a.l(t,W.kQ(null))
C.a.l(t,W.kT())
$.ke=s
d=s}else d=t
t=$.kd
if(t==null){t=new W.dL(d)
$.kd=t
c=t}else{t.a=d
c=t}}if($.aC==null){t=document
s=t.implementation
s=(s&&C.M).eq(s,"")
$.aC=s
$.jm=s.createRange()
s=$.aC
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aC.head;(t&&C.N).R(t,r)}t=$.aC
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jG(s,"$isaO")}t=$.aC
if(!!this.$isaO)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aC.body;(t&&C.o).R(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.X,a.tagName)){t=$.jm;(t&&C.F).cT(t,q)
t=$.jm
p=(t&&C.F).eo(t,b)}else{q.innerHTML=b
p=$.aC.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.R(p,s)}t=$.aC.body
if(q==null?t!=null:q!==t)J.lR(q)
c.bn(p)
C.r.ea(document,p)
return p},
ep:function(a,b,c){return this.N(a,b,c,null)},
d2:function(a,b,c,d){a.textContent=null
this.R(a,this.N(a,b,c,d))},
d1:function(a,b){return this.d2(a,b,null,null)},
a8:function(a,b){return a.getAttribute(b)},
dX:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isn:1,
$isa2:1,
$ish:1,
$isp:1,
gf0:function(a){return a.tagName}}
W.iI.prototype={
$1:function(a){return!!J.r(a).$isa2},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$isn:1,$isi:1}
W.h.prototype={
dG:function(a,b,c,d){return a.addEventListener(b,H.br(c,1),!1)},
dZ:function(a,b,c,d){return a.removeEventListener(b,H.br(c,1),!1)},
$isn:1,
$ish:1}
W.a3.prototype={$isn:1}
W.ey.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$iso:1,
$aso:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.ez.prototype={
gj:function(a){return a.length}}
W.eD.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$isn:1}
W.cu.prototype={}
W.eH.prototype={
gj:function(a){return a.length}}
W.bF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cv.prototype={}
W.eI.prototype={
G:function(a,b){return a.send(b)}}
W.bG.prototype={}
W.bc.prototype={$isbc:1}
W.bd.prototype={$isbd:1}
W.be.prototype={$isbe:1}
W.eM.prototype={$isa:1,$isa2:1}
W.aW.prototype={$isn:1,$isi:1,$isaW:1}
W.f_.prototype={
k:function(a){return String(a)}}
W.bK.prototype={}
W.f5.prototype={
gj:function(a){return a.length}}
W.f6.prototype={
f9:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bL.prototype={}
W.a5.prototype={$isn:1}
W.f7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$iso:1,
$aso:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.O.prototype={$isn:1,$isi:1,$isO:1}
W.fh.prototype={$isa:1}
W.S.prototype={
ga3:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.av("No elements"))
if(s>1)throw H.e(new P.av("More than one element"))
return t.firstChild},
J:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.R(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lo(t,c,C.D.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.ct(t,t.length,-1,null,[H.ae(t,"z",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asc:function(){return[W.p]},
$asde:function(){return[W.p]},
$asb:function(){return[W.p]},
$asbT:function(){return[W.p]}}
W.p.prototype={
eU:function(a){var t=a.parentNode
if(t!=null)J.bt(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d6(a):t},
R:function(a,b){return a.appendChild(b)},
dY:function(a,b){return a.removeChild(b)},
e_:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
$ish:1,
$isp:1,
gba:function(a){return a.previousSibling}}
W.dn.prototype={
bb:function(a){return a.previousNode()}}
W.bR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.fq.prototype={$isa:1}
W.fs.prototype={
gj:function(a){return a.length}}
W.a6.prototype={$isn:1,
gj:function(a){return a.length}}
W.fv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$iso:1,
$aso:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.fy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fz.prototype={
G:function(a,b){return a.send(b)}}
W.du.prototype={
eo:function(a,b){return a.createContextualFragment(b)},
cT:function(a,b){return a.selectNodeContents(b)}}
W.fI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.dw.prototype={
G:function(a,b){return a.send(b)}}
W.fK.prototype={
gj:function(a){return a.length}}
W.fN.prototype={$isa:1}
W.a7.prototype={$isn:1,$ish:1}
W.fO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$iso:1,
$aso:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.a8.prototype={$isn:1}
W.fQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$iso:1,
$aso:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$isn:1,
gj:function(a){return a.length}}
W.fV.prototype={
h:function(a,b){return this.bP(a,b)},
ay:function(a,b){var t,s
for(t=0;!0;++t){s=this.dT(a,t)
if(s==null)return
b.$2(s,this.bP(a,s))}},
gj:function(a){return a.length},
bP:function(a,b){return a.getItem(b)},
dT:function(a,b){return a.key(b)}}
W.X.prototype={$isn:1}
W.aj.prototype={}
W.dz.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=W.mc("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.S(s).J(0,new W.S(t))
return s}}
W.h3.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga3(t)
r.toString
t=new W.S(r)
q=t.ga3(t)
s.toString
q.toString
new W.S(s).J(0,new W.S(q))
return s}}
W.h4.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga3(t)
s.toString
r.toString
new W.S(s).J(0,new W.S(r))
return s}}
W.bY.prototype={$isbY:1}
W.aa.prototype={$isn:1,$ish:1}
W.Y.prototype={$isn:1,$ish:1}
W.h7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$iso:1,
$aso:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.h8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$iso:1,
$aso:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ha.prototype={
gj:function(a){return a.length}}
W.ab.prototype={$isn:1}
W.b_.prototype={$isn:1,$isi:1,$isb_:1}
W.he.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$iso:1,
$aso:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.hf.prototype={
gj:function(a){return a.length}}
W.bk.prototype={}
W.hh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.dD.prototype={
bb:function(a){return a.previousNode()}}
W.aH.prototype={}
W.hn.prototype={
k:function(a){return String(a)},
$isa:1}
W.bl.prototype={$isbl:1}
W.hp.prototype={
gj:function(a){return a.length}}
W.hs.prototype={
gj:function(a){return a.length}}
W.ht.prototype={
G:function(a,b){return a.send(b)}}
W.b1.prototype={
ges:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$isn:1,
$isi:1,
$isO:1,
$isb1:1}
W.c0.prototype={
gec:function(a){var t,s
t=P.V
s=new P.J(0,$.u,null,[t])
this.dO(a)
this.e0(a,W.kX(new W.hv(new P.iw(s,[t]))))
return s},
e0:function(a,b){return a.requestAnimationFrame(H.br(b,1))},
dO:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hv.prototype={
$1:function(a){this.a.b5(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hw.prototype={$isa:1}
W.b2.prototype={$isa:1}
W.hF.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.r(b)
if(!t.$isI)return!1
s=a.left
r=t.gb9(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbf(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga0(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga_(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.aq(a.left)
s=J.aq(a.top)
r=J.aq(a.width)
q=J.aq(a.height)
return W.kS(W.b6(W.b6(W.b6(W.b6(0,t),s),r),q))},
$isI:1,
$asI:function(){},
ga_:function(a){return a.height},
gb9:function(a){return a.left},
gbf:function(a){return a.top},
ga0:function(a){return a.width}}
W.dH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.I]},
$isc:1,
$asc:function(){return[P.I]},
$iso:1,
$aso:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.hH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.x]},
$isc:1,
$asc:function(){return[W.x]},
$iso:1,
$aso:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.hI.prototype={$isa:1}
W.hJ.prototype={
ga_:function(a){return a.height},
ga0:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$iso:1,
$aso:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.i5.prototype={$isa:1}
W.dJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.iq.prototype={$isa:1}
W.it.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$iso:1,
$aso:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.iu.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.iB.prototype={$isa:1}
W.iC.prototype={$isa:1}
W.hD.prototype={
ay:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.Q)(t),++p){o=t[p]
b.$2(o,q.a8(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.C([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdR:function(){return this.a}}
W.hK.prototype={
h:function(a,b){return J.jj(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hO.prototype={
cn:function(a,b,c,d){return W.al(this.a,this.b,a,!1,H.aB(this,0))}}
W.hL.prototype={}
W.hP.prototype={
ej:function(a){if(this.b==null)return
this.e7()
this.b=null
this.sdV(null)
return},
e6:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lm(r,this.c,t,!1)}},
e7:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.ln(r,this.c,t,!1)}},
dB:function(a,b,c,d,e){this.e6()},
sdV:function(a){this.d=a}}
W.hQ.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c3.prototype={
a5:function(a){return $.$get$kR().B(0,W.by(a))},
W:function(a,b,c){var t,s,r
t=W.by(a)
s=$.$get$jz()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dC:function(a){var t,s
t=$.$get$jz()
if(t.gal(t)){for(s=0;s<262;++s)t.i(0,C.W[s],W.nm())
for(s=0;s<12;++s)t.i(0,C.u[s],W.nn())}}}
W.z.prototype={
gw:function(a){return new W.ct(a,this.gj(a),-1,null,[H.ae(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dq.prototype={
a5:function(a){return C.a.c_(this.a,new W.fj(a))},
W:function(a,b,c){return C.a.c_(this.a,new W.fi(a,b,c))}}
W.fj.prototype={
$1:function(a){return a.a5(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fi.prototype={
$1:function(a){return a.W(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c6.prototype={
a5:function(a){return this.a.B(0,W.by(a))},
W:function(a,b,c){var t,s
t=W.by(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.eb(c)
else if(s.B(0,"*::"+b))return this.d.eb(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dE:function(a,b,c,d){var t,s,r
this.a.J(0,c)
t=b.aD(0,new W.ir())
s=b.aD(0,new W.is())
this.b.J(0,t)
r=this.c
r.J(0,C.C)
r.J(0,s)}}
W.ir.prototype={
$1:function(a){return!C.a.B(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.is.prototype={
$1:function(a){return C.a.B(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.ix.prototype={
W:function(a,b,c){if(this.d9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jj(a,"template")==="")return this.e.B(0,b)
return!1}}
W.iy.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iv.prototype={
a5:function(a){var t=J.r(a)
if(!!t.$isbU)return!1
t=!!t.$isF
if(t&&W.by(a)==="foreignObject")return!1
if(t)return!0
return!1},
W:function(a,b,c){if(b==="is"||C.i.bq(b,"on"))return!1
return this.a5(a)}}
W.ct.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbR(J.b7(this.a,t))
this.c=t
return!0}this.sbR(null)
this.c=s
return!1},
gq:function(){return this.d},
sbR:function(a){this.d=a}}
W.dp.prototype={}
W.ip.prototype={}
W.dL.prototype={
bn:function(a){new W.iz(this).$2(a,null)},
aw:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bt(t,a)}else J.bt(b,a)},
e3:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lF(a)
r=J.jj(s.gdR(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.M(n)}p="element unprintable"
try{p=J.aM(a)}catch(n){H.M(n)}try{o=W.by(a)
this.e2(a,b,t,p,o,s,r)}catch(n){if(H.M(n) instanceof P.ar)throw n
else{this.aw(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
e2:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aw(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a5(a)){this.aw(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aM(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.W(a,"is",g)){this.aw(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.C(t.slice(0),[H.aB(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.W(a,J.lW(p),q.a8(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a8(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a8(t,p)
q.dX(t,p)}}if(!!J.r(a).$isbY)this.bn(a.content)}}
W.iz.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e3(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bt(r,a)}else J.bt(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lG(t)}catch(q){H.M(q)
r=t
J.bt(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.p,W.p]}}}
W.bz.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bD.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bE.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cw.prototype={}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.cP.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cH.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cR.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.d1.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.d6.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.d7.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.d8.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.d9.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.x]},
$isb:1,
$asb:function(){return[W.x]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.d4.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.d5.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
P.iJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.i8.prototype={
eR:function(){return Math.random()}}
P.ig.prototype={}
P.I.prototype={$asI:null}
P.dU.prototype={$isa:1}
P.aN.prototype={$isa:1}
P.eg.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eh.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ei.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ek.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
P.eu.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
P.ew.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.af.prototype={}
P.aD.prototype={$isa:1}
P.eJ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isn:1}
P.eU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.f2.prototype={$isa:1}
P.f3.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$isn:1}
P.fk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.fr.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fx.prototype={
gj:function(a){return a.length}}
P.fC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bU.prototype={$isa:1,$isbU:1}
P.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.F.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.C([],[W.dp])
C.a.l(t,W.kQ(null))
C.a.l(t,W.kT())
C.a.l(t,new W.iv())
c=new W.dL(new W.dq(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).ep(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.S(q)
o=t.ga3(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.R(p,r)
return p},
$isa:1,
$isF:1}
P.h1.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h2.prototype={$isa:1}
P.dA.prototype={}
P.h6.prototype={$isa:1}
P.bZ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aw.prototype={$isn:1}
P.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.ho.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hq.prototype={$isa:1}
P.hr.prototype={$isa:1}
P.c2.prototype={$isa:1}
P.il.prototype={$isa:1}
P.im.prototype={$isa:1}
P.io.prototype={$isa:1}
P.cz.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cx.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.cE.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cI.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.d0.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cX.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cZ.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.dZ.prototype={
gj:function(a){return a.length}}
P.fG.prototype={
bY:function(a,b){return a.activeTexture(b)},
c0:function(a,b,c){return a.attachShader(b,c)},
c1:function(a,b,c){return a.bindBuffer(b,c)},
c2:function(a,b,c){return a.bindTexture(b,c)},
c3:function(a,b){return a.blendEquation(b)},
c4:function(a,b,c){return a.blendFunc(b,c)},
c5:function(a,b,c,d){return a.bufferData(b,c,d)},
c6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c7:function(a,b){return a.compileShader(b)},
c8:function(a){return a.createBuffer()},
c9:function(a){return a.createProgram()},
cb:function(a,b){return a.createShader(b)},
cc:function(a){return a.createTexture()},
ce:function(a,b){return a.depthMask(b)},
cf:function(a,b){return a.disable(b)},
cg:function(a,b,c,d){return a.drawArrays(b,c,d)},
ci:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cj:function(a,b){return a.enable(b)},
ck:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.iK(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bm:function(a,b,c){return a.getUniformLocation(b,c)},
cm:function(a,b){return a.linkProgram(b)},
cq:function(a,b,c){return a.pixelStorei(b,c)},
bp:function(a,b,c){return a.shaderSource(b,c)},
br:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bd:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.r(g)
if(!!t.$isbd||g==null)s=!0
else s=!1
if(s){this.aX(a,b,c,d,e,f,P.l2(g))
return}if(!!t.$isbe)s=!0
else s=!1
if(s){this.aY(a,b,c,d,e,f,g)
return}if(!!t.$isaP)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,g)
return}if(!!t.$isbl)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isbc)t=!0
else t=!1
if(t){this.b0(a,b,c,d,e,f,g)
return}throw H.e(P.dX("Incorrect number or type of arguments"))},
cv:function(a,b,c,d,e,f,g){return this.bd(a,b,c,d,e,f,g,null,null,null)},
aX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cw:function(a,b,c,d){return a.texParameterf(b,c,d)},
cz:function(a,b,c,d){return a.texParameteri(b,c,d)},
cA:function(a,b,c){return a.uniform1f(b,c)},
cB:function(a,b,c){return a.uniform1fv(b,c)},
cC:function(a,b,c){return a.uniform1i(b,c)},
cD:function(a,b,c){return a.uniform1iv(b,c)},
cE:function(a,b,c){return a.uniform2fv(b,c)},
cF:function(a,b,c){return a.uniform3fv(b,c)},
cG:function(a,b,c){return a.uniform4fv(b,c)},
cH:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cI:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cK:function(a,b){return a.useProgram(b)},
cM:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cN:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fH.prototype={
ee:function(a,b){return a.beginTransformFeedback(b)},
eh:function(a,b){return a.bindVertexArray(b)},
er:function(a){return a.createVertexArray()},
ez:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eA:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eB:function(a){return a.endTransformFeedback()},
f5:function(a,b,c,d){this.e5(a,b,c,d)
return},
e5:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f6:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bY:function(a,b){return a.activeTexture(b)},
c0:function(a,b,c){return a.attachShader(b,c)},
c1:function(a,b,c){return a.bindBuffer(b,c)},
c2:function(a,b,c){return a.bindTexture(b,c)},
c3:function(a,b){return a.blendEquation(b)},
c4:function(a,b,c){return a.blendFunc(b,c)},
c5:function(a,b,c,d){return a.bufferData(b,c,d)},
c6:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c7:function(a,b){return a.compileShader(b)},
c8:function(a){return a.createBuffer()},
c9:function(a){return a.createProgram()},
cb:function(a,b){return a.createShader(b)},
cc:function(a){return a.createTexture()},
ce:function(a,b){return a.depthMask(b)},
cf:function(a,b){return a.disable(b)},
cg:function(a,b,c,d){return a.drawArrays(b,c,d)},
ci:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cj:function(a,b){return a.enable(b)},
ck:function(a,b){return a.enableVertexAttribArray(b)},
aE:function(a){return P.iK(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bm:function(a,b,c){return a.getUniformLocation(b,c)},
cm:function(a,b){return a.linkProgram(b)},
cq:function(a,b,c){return a.pixelStorei(b,c)},
bp:function(a,b,c){return a.shaderSource(b,c)},
br:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bd:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.r(g)
if(!!t.$isbd||g==null)s=!0
else s=!1
if(s){this.aX(a,b,c,d,e,f,P.l2(g))
return}if(!!t.$isbe)s=!0
else s=!1
if(s){this.aY(a,b,c,d,e,f,g)
return}if(!!t.$isaP)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,g)
return}if(!!t.$isbl)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isbc)t=!0
else t=!1
if(t){this.b0(a,b,c,d,e,f,g)
return}throw H.e(P.dX("Incorrect number or type of arguments"))},
cv:function(a,b,c,d,e,f,g){return this.bd(a,b,c,d,e,f,g,null,null,null)},
aX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cw:function(a,b,c,d){return a.texParameterf(b,c,d)},
cz:function(a,b,c,d){return a.texParameteri(b,c,d)},
cA:function(a,b,c){return a.uniform1f(b,c)},
cB:function(a,b,c){return a.uniform1fv(b,c)},
cC:function(a,b,c){return a.uniform1i(b,c)},
cD:function(a,b,c){return a.uniform1iv(b,c)},
cE:function(a,b,c){return a.uniform2fv(b,c)},
cF:function(a,b,c){return a.uniform3fv(b,c)},
cG:function(a,b,c){return a.uniform4fv(b,c)},
cH:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cI:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cK:function(a,b){return a.useProgram(b)},
cM:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cN:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iA.prototype={$isa:1}
P.fR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return P.iK(this.dS(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dS:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
P.cy.prototype={$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
P.cV.prototype={$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
B.j5.prototype={
$1:function(a){$.$get$iL().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aW]}}}
B.j6.prototype={
$1:function(a){$.$get$iL().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aW]}}}
B.j7.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nc=t
$.nd=C.b.aa(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jJ=s-C.b.I(window.innerWidth,2)
$.la=-(t-C.b.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.O]}}}
B.j8.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cd=t-C.b.I(window.innerWidth,2)
$.ce=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$cc().i(0,"right",!0)
else $.$get$cc().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.O]}}}
B.j9.prototype={
$1:function(a){if(a.button===2)$.$get$cc().i(0,"right",null)
else $.$get$cc().i(0,"left",null)},
$S:function(){return{func:1,args:[W.O]}}}
B.fl.prototype={
dm:function(a,b,c,d){var t
d.toString
W.al(d,W.nl().$1(d),new B.fm(this),!1,W.b1)
W.al(d,"mousemove",new B.fn(this),!1,W.O)
t=W.b_
W.al(d,"touchstart",new B.fo(),!1,t)
W.al(d,"touchmove",new B.fp(this),!1,t)
B.nB(null)}}
B.fm.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.ges(a)*r.k3
if(C.c.aa(r.fy,t)>0)r.fy=H.Z(C.c.aa(r.fy,t))}catch(q){s=H.M(q)
P.ao(s)}},
$S:function(){return{func:1,args:[W.b1]}}}
B.fn.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Z(t.go+C.b.aa($.jJ,$.cd)*0.01)
s=t.id
r=$.ce
q=$.la
t.id=H.Z(s+(r-q)*0.01)
$.cd=$.jJ
$.ce=q}},
$S:function(){return{func:1,args:[W.O]}}}
B.fo.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a6(t.clientX)
C.c.a6(t.clientY)
$.cd=s
C.c.a6(t.clientX)
$.ce=C.c.a6(t.clientY)},
$S:function(){return{func:1,args:[W.b_]}}}
B.fp.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a6(t.clientX)
t=C.c.a6(t.clientY)
r=this.a
r.go=H.Z(r.go+C.b.aa(s,$.cd)*0.01)
r.id=H.Z(r.id+($.ce-t)*0.01)
$.cd=s
$.ce=t},
$S:function(){return{func:1,args:[W.b_]}}}
G.f8.prototype={}
G.hl.prototype={
M:function(a,b){var t=this.d
if(H.az(!t.D(0,a)))H.aJ("uniform "+a+" already set")
t.i(0,a,b)},
bz:function(){return this.d},
k:function(a){var t,s,r,q
t=H.C(["{"+new H.aG(H.iP(this),null).k(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gE(s),r=r.gw(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.am(t,"\n")}}
G.e0.prototype={}
G.e2.prototype={
cl:function(a,b,c){J.lC(this.a,b)
if(c>0)J.m1(this.a,b,c)}}
G.y.prototype={}
G.eG.prototype={
bx:function(a){var t=this.e
H.d(!t.D(0,a))
H.d(C.i.bq(a,"a"))
switch($.$get$T().h(0,a).a){case"vec2":t.i(0,a,H.C([],[T.ak]))
break
case"vec3":t.i(0,a,H.C([],[T.A]))
break
case"vec4":t.i(0,a,H.C([],[T.aI]))
break
case"float":t.i(0,a,H.C([],[P.L]))
break
case"uvec4":t.i(0,a,H.C([],[[P.b,P.m]]))
break
default:if(H.az(!1))H.aJ("unknown type for "+a)}},
de:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.b,new G.y(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.A(new Float32Array(3))
p.H(q)
C.a.l(t,p)}},
dc:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.ak(p))}},
dd:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new T.A(new Float32Array(3))
p.H(q)
s.l(t,p)}},
dh:function(){var t,s,r,q,p,o,n,m
t=this.b
H.d(t.length>0||!1)
s=new Array(t.length*3)
s.fixed$length=Array
r=H.C(s,[P.m])
for(s=t.length,q=0,p=0;o=t.length,p<o;o===s||(0,H.Q)(t),++p){n=t[p]
r[q]=n.a
r[q+1]=n.b
r[q+2]=n.c
q+=3}for(t=this.c,p=0;!1;++p){m=t[p]
r[q]=m.ge8(m)
r[q+1]=m.gfa(m)
r[q+2]=m.gei(m)
r[q+3]=m.ge8(m)
r[q+4]=m.gei(m)
r[q+5]=m.gfb(m)
q+=6}H.d(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(s=this.e,r=s.gE(s),r=r.gw(r);r.p();){q=r.gq()
p=$.$get$T().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.am(t," ")}}
G.dC.prototype={}
G.dB.prototype={}
G.f4.prototype={
dl:function(a,b){this.M("cDepthTest",!0)
this.M("cDepthWrite",!1)
this.M("cBlendEquation",b)
this.M("cStencilFunc",$.$get$kx())}}
G.dh.prototype={
bw:function(a,b,c){var t,s
if(C.i.aM(a,0)===105){if(H.az(C.b.aJ(b.length,c)===this.z))H.aJ("ChangeAttribute "+this.z)}else{t=C.b.aJ(b.length,c)
if(H.az(t===(this.ch.length/3|0)))H.aJ("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dR(t.a,34962,s)
J.jO(t.a,34962,b,35048)},
di:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ab:function(a,b,c){var t,s,r,q,p,o
t=J.jL(a,0)===105
if(t&&this.z===0)this.z=C.b.aJ(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.jf(r.a))
this.bw(a,b,c)
q=$.$get$T().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.az(p.D(0,a)))H.aJ("unexpected attribute "+a)
o=p.h(0,a)
J.dS(r.a,this.e)
r.cl(0,o,t?1:0)
s=s.h(0,a)
p=q.by()
J.dR(r.a,34962,s)
J.jY(r.a,o,p,5126,!1,0,0)},
bv:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.jf(s.a))
this.ch=a
this.bw("aPosition",a,3)
r=$.$get$T().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.D(0,"aPosition"))
p=q.h(0,"aPosition")
J.dS(s.a,this.e)
s.cl(0,p,0)
t=t.h(0,"aPosition")
q=r.by()
J.dR(s.a,34962,t)
J.jY(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gw(r);r.p();){q=r.gq()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.am(s,"  ")},
saQ:function(a){this.cx=a}}
G.ft.prototype={
df:function(a,b){var t=C.b.cP(a,b)
if(this.z===t)return
this.z=t
this.bA()},
bA:function(){var t,s,r,q,p,o,n
t=this.db
s=this.z
r=this.Q
q=this.ch
p=Math.tan(this.y*3.141592653589793/180*0.5)
o=r-q
n=t.a
n[0]=0
n[1]=0
n[2]=0
n[3]=0
n[4]=0
n[5]=0
n[6]=0
n[7]=0
n[8]=0
n[9]=0
n[10]=0
n[11]=0
n[12]=0
n[13]=0
n[14]=0
n[15]=0
t.a9(0,0,1/(p*s))
t.a9(1,1,1/p)
t.a9(2,2,(q+r)/o)
t.a9(3,2,-1)
t.a9(2,3,2*r*q/o)},
bz:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.A(new Float32Array(H.G(3)))
o.aq(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.H(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.r(n)
r=!!s.$isaI
k=r?s.gaC(n):1
if(!!s.$isA){j=s.gm(n)
m=s.gn(n)
l=s.gL(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gL(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.F(t[0],n)
r=C.c.F(t[4],m)
q=C.c.F(t[8],l)
i=t[12]
h=C.c.F(t[1],n)
g=C.c.F(t[5],m)
f=C.c.F(t[9],l)
e=t[13]
d=C.c.F(t[2],n)
c=C.c.F(t[6],m)
b=C.c.F(t[10],l)
a=t[14]
a0=C.c.F(t[3],n)
a1=C.c.F(t[7],m)
a2=C.c.F(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.H(this.db)
a3.eQ(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fF.prototype={
du:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c4(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dz:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jL(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.j3("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$T().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jk(r.a,k,m)
else if(!!J.r(m).$iskl)J.m_(r.a,k,m)
break
case"float":if(l.c===0)J.lY(r.a,k,m)
else if(!!J.r(m).$iseB)J.lZ(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aK(m,"$isai").a
J.jX(r.a,k,!1,j)}else if(!!J.r(m).$iseB)J.jX(r.a,k,!1,m)
else if(H.az(!1))H.aJ("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aK(m,"$isbJ").a
J.jW(r.a,k,!1,j)}else if(!!J.r(m).$iseB)J.jW(r.a,k,!1,m)
else if(H.az(!1))H.aJ("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jV(i,k,H.aK(m,"$isaI").a)
else J.jV(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jU(i,k,H.aK(m,"$isA").a)
else J.jU(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jT(i,k,H.aK(m,"$isak").a)
else J.jT(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a7(33984,this.ch)
J.jM(r.a,j)
j=H.aK(m,"$isc_").b
J.cf(r.a,3553,j)
j=this.ch
J.jk(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a7(33984,this.ch)
J.jM(r.a,j)
j=H.aK(m,"$isc_").b
J.cf(r.a,34067,j)
j=this.ch
J.jk(r.a,k,j)
this.ch=this.ch+1
break
default:H.j3("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.D(m,!0)
i=r.a
if(j)J.cg(i,2929)
else J.jg(i,2929)
break
case"cStencilFunc":H.aK(m,"$isdC")
j=m.a
i=r.a
if(j===1281)J.jg(i,2960)
else{J.cg(i,2960)
i=m.b
h=m.c
J.lT(r.a,j,i,h)}break
case"cDepthWrite":J.lw(r.a,m)
break
case"cBlendEquation":H.aK(m,"$isdB")
j=m.a
i=r.a
if(j===1281)J.jg(i,3042)
else{J.cg(i,3042)
i=m.b
h=m.c
J.lr(r.a,i,h)
J.lq(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aR(1000*(s-new P.bw(t,!1).a)).k(0)},
dg:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.m0(t.a,this.r)
this.ch=0
this.z.X(0)
for(s=0;s<2;++s){r=b[s]
this.dz(r.a,r.bz())}q=this.Q
q.X(0)
for(p=a.cy,p=p.gE(p),p=p.gw(p);p.p();)q.l(0,p.gq())
o=this.du()
if(o.length!==0)P.ao("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dS(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.di()
m=a.Q
l=a.z
if(n)J.lp(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lA(k,q,p,m,0,l)
else J.lz(k,q,p,m,0)}else{m=t.a
if(l>1)J.ly(m,q,0,p,l)
else J.lx(m,q,0,p)}if(n)J.lD(t.a)},
aK:function(a,b){return this.dg(a,b,null)},
dn:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.Q)(t),++o){n=t[o]
r.i(0,n,J.jR(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.Q)(t),++o){n=t[o]
r.i(0,n,J.jR(q.a,p,n))}}}
G.w.prototype={
by:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bj.prototype={
bt:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.Q)(a),++q){p=a[q]
H.d($.$get$T().D(0,p))
H.d(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aH(s)},
ar:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.Q)(a),++r){q=a[r]
if(H.az($.$get$T().D(0,q)))H.aJ("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.aH(s)},
bu:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$T().D(0,r))
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aH(t)},
dq:function(a,b){H.d(this.b==null)
this.b=this.dA(!0,a,b)},
as:function(a){return this.dq(a,null)},
dA:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.Q)(t),++o){n=t[o]
m=$.$get$T().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.Q)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.Q)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.Q)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.J(q,b)
C.a.l(q,"}")
return C.a.am(q,"\n")}}
G.fP.prototype={}
G.h9.prototype={}
G.c_.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eK.prototype={
dr:function(a){var t,s
t=this.d
s=this.c
J.cf(t.a,s,this.b)
J.lU(t.a,s,0,6408,6408,5121,a)},
dj:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.cf(t.a,s,this.b)
J.lQ(t.a,37440,1)
this.dr(this.f)
r=this.e
q=r.e
if(q!==1)J.lV(t.a,s,34046,q)
J.jS(t.a,s,10240,r.r)
J.jS(t.a,s,10241,r.f)
H.d(J.lL(t.a)===0)
J.cf(t.a,s,null)}}
R.ds.prototype={
cs:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ao("size change "+H.f(s)+" "+H.f(r))
this.df(s,r)
J.m2(this.go.a,0,0,s,r)}}
R.fT.prototype={
dD:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mQ("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bG(r,"float")
r.setProperty(p,"left","")
p=C.x.bG(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.R(t,s)}return t},
ds:function(a,b,c){var t,s,r
if(a==null)throw H.e("no element provided")
this.a=a
t=a.style
t.color=b
t.fontFamily="Helvetica,Arial,sans-serif"
t.fontSize="9px"
t.lineHeight="15px"
t.padding="0 0 3px 3px"
t.textAlign="left"
t.background=c
t=document
s=t.createElement("div")
r=s.style
r.fontWeight="bold"
s.textContent="@@@@"
this.b=s
J.jd(this.a,s)
r=this.dD(b,c,90,30)
this.d=r
J.jd(this.a,r)
t=t.createElement("div")
this.c=t
J.jd(this.a,t)}}
R.fU.prototype={
dw:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.f4(s,2)+" fps"
t=this.c;(t&&C.q).d1(t,b)
r=C.b.I(30*C.z.ek(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).R(t,q)},
dv:function(a){return this.dw(a,"")}}
D.eZ.prototype={
$1:function(a){return this.a.b5(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.iQ.prototype={
$2:function(a,b){var t=536870911&a+J.aq(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.m,P.n]}}}
T.bJ.prototype={
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.bJ){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dO(this.a)},
U:function(a){var t,s
t=new Float32Array(H.G(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.A(t)}}
T.ai.prototype={
a9:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
H:function(a){var t,s
t=a.a
s=this.a
s[15]=t[15]
s[14]=t[14]
s[13]=t[13]
s[12]=t[12]
s[11]=t[11]
s[10]=t[10]
s[9]=t[9]
s[8]=t[8]
s[7]=t[7]
s[6]=t[6]
s[5]=t[5]
s[4]=t[4]
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n[3] "+this.U(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ai){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dO(this.a)},
U:function(a){var t,s
t=new Float32Array(H.G(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aI(t)},
a2:function(){var t=this.a
t[0]=1
t[1]=0
t[2]=0
t[3]=0
t[4]=0
t[5]=1
t[6]=0
t[7]=0
t[8]=0
t[9]=0
t[10]=1
t[11]=0
t[12]=0
t[13]=0
t[14]=0
t[15]=1},
eQ:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=this.a
s=t[0]
r=t[4]
q=t[8]
p=t[12]
o=t[1]
n=t[5]
m=t[9]
l=t[13]
k=t[2]
j=t[6]
i=t[10]
h=t[14]
g=t[3]
f=t[7]
e=t[11]
d=t[15]
c=b5.a
b=c[0]
a=c[4]
a0=c[8]
a1=c[12]
a2=c[1]
a3=c[5]
a4=c[9]
a5=c[13]
a6=c[2]
a7=c[6]
a8=c[10]
a9=c[14]
b0=c[3]
b1=c[7]
b2=c[11]
b3=c[15]
t[0]=s*b+r*a2+q*a6+p*b0
t[4]=s*a+r*a3+q*a7+p*b1
t[8]=s*a0+r*a4+q*a8+p*b2
t[12]=s*a1+r*a5+q*a9+p*b3
t[1]=o*b+n*a2+m*a6+l*b0
t[5]=o*a+n*a3+m*a7+l*b1
t[9]=o*a0+n*a4+m*a8+l*b2
t[13]=o*a1+n*a5+m*a9+l*b3
t[2]=k*b+j*a2+i*a6+h*b0
t[6]=k*a+j*a3+i*a7+h*b1
t[10]=k*a0+j*a4+i*a8+h*b2
t[14]=k*a1+j*a5+i*a9+h*b3
t[3]=g*b+f*a2+e*a6+d*b0
t[7]=g*a+f*a3+e*a7+d*b1
t[11]=g*a0+f*a4+e*a8+d*b2
t[15]=g*a1+f*a5+e*a9+d*b3}}
T.ak.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ak){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dO(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.A.prototype={
aq:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
H:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.A){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dO(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gT())},
gT:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
C:function(a){var t,s,r
t=Math.sqrt(this.gT())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b6:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cd:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.A(new Float32Array(H.G(3)))
t.aq(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
a1:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gL:function(a){return this.a[2]}}
T.aI.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aI){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dO(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gL:function(a){return this.a[2]},
gaC:function(a){return this.a[3]}}
A.j0.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.a=b3+0
s=this.c
s.go=H.Z(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.Z(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.Z(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.Z(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.Z(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.Z(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.Z(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.Z(C.c.el(s.id,-1.4707963267948965,1.4707963267948965))
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
n=Math.cos(p)
r=Math.sin(r)
p=Math.sin(p)
m=s.d.a
m[12]=o*n
m[13]=q*r
m[14]=o*p
p=s.k2.a
m[12]=m[12]+p[0]
m[13]=m[13]+p[1]
m[14]=m[14]+p[2]
r=m[12]
q=m[13]
n=m[14]
l=new T.A(new Float32Array(H.G(3)))
l.aq(0,1,0)
k=s.e
j=k.a
j[0]=m[12]
j[1]=m[13]
j[2]=m[14]
j=new Float32Array(H.G(3))
i=new T.A(j)
i.H(k)
j[0]=j[0]-p[0]
j[1]=j[1]-p[1]
j[2]=j[2]-p[2]
i.C(0)
h=l.cd(i)
h.C(0)
g=i.cd(h)
g.C(0)
p=h.b6(k)
f=g.b6(k)
k=i.b6(k)
e=h.a
d=e[0]
c=g.a
b=c[0]
a=j[0]
a0=e[1]
a1=c[1]
a2=j[1]
e=e[2]
c=c[2]
j=j[2]
m[15]=1
m[14]=-k
m[13]=-f
m[12]=-p
m[11]=0
m[10]=j
m[9]=c
m[8]=e
m[7]=0
m[6]=a2
m[5]=a1
m[4]=a0
m[3]=0
m[2]=a
m[1]=b
m[0]=d
m[12]=r
m[13]=q
m[14]=n
n=s.f
q=n.a
q[0]=m[2]
q[1]=m[6]
q[2]=m[10]
s=-s.k1
n=Math.sqrt(n.gT())
h=q[0]/n
g=q[1]/n
i=q[2]/n
n=Math.cos(s)
s=Math.sin(s)
a3=1-n
a4=h*h*a3+n
q=i*s
a5=h*g*a3-q
r=g*s
a6=h*i*a3+r
a7=g*h*a3+q
a8=g*g*a3+n
s=h*s
a9=g*i*a3-s
b0=i*h*a3-r
b1=i*g*a3+s
b2=i*i*a3+n
n=m[0]
s=m[4]
r=m[8]
q=m[1]
d=m[5]
b=m[9]
a=m[2]
a0=m[6]
a1=m[10]
a2=m[3]
e=m[7]
c=m[11]
m[0]=n*a4+s*a7+r*b0
m[1]=q*a4+d*a7+b*b0
m[2]=a*a4+a0*a7+a1*b0
m[3]=a2*a4+e*a7+c*b0
m[4]=n*a5+s*a8+r*b1
m[5]=q*a5+d*a8+b*b1
m[6]=a*a5+a0*a8+a1*b1
m[7]=a2*a5+e*a8+c*b1
m[8]=n*a6+s*a9+r*b2
m[9]=q*a6+d*a9+b*b2
m[10]=a*a6+a0*a9+a1*b2
m[11]=a2*a6+e*a9+c*b2
c=this.r
c.a2()
e=this.e
a2=this.f
m=this.x
a1=this.d
e.aK(a2,[m,a1])
c=c.a
c[14]=0
c[13]=0
c[12]=1.5
e.aK(a2,[m,a1])
this.y.aK(this.Q,[this.z,a1])
C.ax.gec(window).aB(this)
this.b.dv(t.a)},
$S:function(){return{func:1,v:true,args:[P.V]}}}
A.j1.prototype={
$1:function(a){this.b.M("uTexture",G.kk(this.a,$.lj,J.b7(a,0),null,3553))
this.c.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.d6=J.a.prototype.k
J.bH.prototype.d8=J.bH.prototype.k
P.W.prototype.d7=P.W.prototype.aD
W.a2.prototype.aI=W.a2.prototype.N
W.c6.prototype.d9=W.c6.prototype.W;(function installTearOffs(){installTearOff(H.b4.prototype,"geN",0,0,0,null,["$0"],["aA"],0)
installTearOff(H.am.prototype,"gcU",0,0,0,null,["$1"],["K"],2)
installTearOff(H.b3.prototype,"gev",0,0,0,null,["$1"],["Y"],2)
installTearOff(P,"n8",1,0,0,null,["$1"],["mN"],1)
installTearOff(P,"n9",1,0,0,null,["$1"],["mO"],1)
installTearOff(P,"na",1,0,0,null,["$1"],["mP"],1)
installTearOff(P,"l0",1,0,0,null,["$0"],["n6"],0)
installTearOff(P.J.prototype,"gbL",0,0,0,null,["$2","$1"],["P","dK"],5)
installTearOff(P,"ng",1,0,0,null,["$2"],["m8"],7)
installTearOff(W,"nl",1,0,0,null,["$1"],["md"],8)
installTearOff(W,"nm",1,0,0,null,["$4"],["mT"],4)
installTearOff(W,"nn",1,0,0,null,["$4"],["mU"],4)
installTearOff(W.dn.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(W.dD.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(R.ds.prototype,"geX",0,0,0,null,["$1"],["cs"],6)
installTearOff(A,"l1",1,0,0,null,["$0"],["nv"],0)})();(function inheritance(){inherit(P.n,null)
var t=P.n
inherit(H.jq,t)
inherit(J.a,t)
inherit(J.dY,t)
inherit(P.W,t)
inherit(H.df,t)
inherit(P.db,t)
inherit(H.cs,t)
inherit(H.b9,t)
inherit(H.id,t)
inherit(H.b4,t)
inherit(H.hM,t)
inherit(H.b5,t)
inherit(H.ic,t)
inherit(H.hE,t)
inherit(H.bi,t)
inherit(H.hb,t)
inherit(H.as,t)
inherit(H.am,t)
inherit(H.b3,t)
inherit(H.fE,t)
inherit(H.hi,t)
inherit(P.bb,t)
inherit(H.dK,t)
inherit(H.aG,t)
inherit(H.ag,t)
inherit(H.eV,t)
inherit(H.eX,t)
inherit(P.hG,t)
inherit(P.c1,t)
inherit(P.J,t)
inherit(P.dG,t)
inherit(P.bW,t)
inherit(P.fW,t)
inherit(P.b8,t)
inherit(P.iD,t)
inherit(P.fM,t)
inherit(P.ia,t)
inherit(P.c4,t)
inherit(P.bT,t)
inherit(P.v,t)
inherit(P.ib,t)
inherit(P.aA,t)
inherit(P.H,t)
inherit(P.bw,t)
inherit(P.V,t)
inherit(P.aR,t)
inherit(P.dy,t)
inherit(P.hR,t)
inherit(P.ef,t)
inherit(P.b,t)
inherit(P.aE,t)
inherit(P.aF,t)
inherit(P.bV,t)
inherit(P.q,t)
inherit(P.bX,t)
inherit(W.e4,t)
inherit(W.hD,t)
inherit(W.c3,t)
inherit(W.z,t)
inherit(W.dq,t)
inherit(W.c6,t)
inherit(W.iv,t)
inherit(W.ct,t)
inherit(W.dp,t)
inherit(W.ip,t)
inherit(W.dL,t)
inherit(P.i8,t)
inherit(P.ig,t)
inherit(G.f8,t)
inherit(G.e2,t)
inherit(G.y,t)
inherit(G.eG,t)
inherit(G.dC,t)
inherit(G.dB,t)
inherit(G.w,t)
inherit(G.bj,t)
inherit(G.h9,t)
inherit(G.c_,t)
inherit(R.fT,t)
inherit(T.bJ,t)
inherit(T.ai,t)
inherit(T.ak,t)
inherit(T.A,t)
inherit(T.aI,t)
t=J.a
inherit(J.eQ,t)
inherit(J.eR,t)
inherit(J.bH,t)
inherit(J.aT,t)
inherit(J.bf,t)
inherit(J.aU,t)
inherit(H.bM,t)
inherit(H.bh,t)
inherit(W.h,t)
inherit(W.a0,t)
inherit(W.ci,t)
inherit(W.cj,t)
inherit(W.ck,t)
inherit(W.x,t)
inherit(W.cw,t)
inherit(W.e6,t)
inherit(W.e7,t)
inherit(W.e8,t)
inherit(W.co,t)
inherit(W.cp,t)
inherit(W.cq,t)
inherit(W.cH,t)
inherit(W.eb,t)
inherit(W.i,t)
inherit(W.cG,t)
inherit(W.a4,t)
inherit(W.eH,t)
inherit(W.cF,t)
inherit(W.bc,t)
inherit(W.bd,t)
inherit(W.f_,t)
inherit(W.f5,t)
inherit(W.a5,t)
inherit(W.cD,t)
inherit(W.fh,t)
inherit(W.dn,t)
inherit(W.cK,t)
inherit(W.fq,t)
inherit(W.bk,t)
inherit(W.a6,t)
inherit(W.cC,t)
inherit(W.aj,t)
inherit(W.du,t)
inherit(W.a8,t)
inherit(W.cB,t)
inherit(W.a9,t)
inherit(W.fV,t)
inherit(W.X,t)
inherit(W.cA,t)
inherit(W.ha,t)
inherit(W.ab,t)
inherit(W.cQ,t)
inherit(W.hf,t)
inherit(W.dD,t)
inherit(W.hn,t)
inherit(W.hs,t)
inherit(W.hF,t)
inherit(W.cP,t)
inherit(W.cO,t)
inherit(W.cN,t)
inherit(W.cJ,t)
inherit(W.cM,t)
inherit(W.cL,t)
inherit(W.iB,t)
inherit(W.iC,t)
inherit(P.at,t)
inherit(P.cz,t)
inherit(P.au,t)
inherit(P.cE,t)
inherit(P.fw,t)
inherit(P.fx,t)
inherit(P.fC,t)
inherit(P.cx,t)
inherit(P.aw,t)
inherit(P.cI,t)
inherit(P.hr,t)
inherit(P.dZ,t)
inherit(P.fG,t)
inherit(P.fH,t)
inherit(P.iA,t)
inherit(P.cy,t)
t=J.bH
inherit(J.fu,t)
inherit(J.b0,t)
inherit(J.aV,t)
inherit(J.jp,J.aT)
t=J.bf
inherit(J.dd,t)
inherit(J.dc,t)
t=P.W
inherit(H.c,t)
inherit(H.dg,t)
inherit(H.dF,t)
t=H.c
inherit(H.bg,t)
inherit(H.eW,t)
inherit(H.ee,H.dg)
t=P.db
inherit(H.f0,t)
inherit(H.hu,t)
t=H.bg
inherit(H.bI,t)
inherit(P.eY,t)
t=H.b9
inherit(H.ja,t)
inherit(H.jb,t)
inherit(H.i7,t)
inherit(H.hN,t)
inherit(H.eN,t)
inherit(H.eO,t)
inherit(H.ie,t)
inherit(H.hc,t)
inherit(H.hd,t)
inherit(H.jc,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(H.h5,t)
inherit(H.eS,t)
inherit(H.iR,t)
inherit(H.iS,t)
inherit(H.iT,t)
inherit(P.hA,t)
inherit(P.hz,t)
inherit(P.hB,t)
inherit(P.hC,t)
inherit(P.eF,t)
inherit(P.eE,t)
inherit(P.hS,t)
inherit(P.i_,t)
inherit(P.hW,t)
inherit(P.hX,t)
inherit(P.hY,t)
inherit(P.hU,t)
inherit(P.hZ,t)
inherit(P.hT,t)
inherit(P.i2,t)
inherit(P.i3,t)
inherit(P.i1,t)
inherit(P.i0,t)
inherit(P.fZ,t)
inherit(P.h_,t)
inherit(P.fX,t)
inherit(P.fY,t)
inherit(P.iE,t)
inherit(P.iH,t)
inherit(P.ij,t)
inherit(P.ii,t)
inherit(P.ik,t)
inherit(P.f1,t)
inherit(P.ec,t)
inherit(P.ed,t)
inherit(W.iI,t)
inherit(W.hv,t)
inherit(W.hQ,t)
inherit(W.fj,t)
inherit(W.fi,t)
inherit(W.ir,t)
inherit(W.is,t)
inherit(W.iy,t)
inherit(W.iz,t)
inherit(P.iJ,t)
inherit(B.j5,t)
inherit(B.j6,t)
inherit(B.j7,t)
inherit(B.j8,t)
inherit(B.j9,t)
inherit(B.fm,t)
inherit(B.fn,t)
inherit(B.fo,t)
inherit(B.fp,t)
inherit(D.eZ,t)
inherit(A.iQ,t)
inherit(A.j0,t)
inherit(A.j1,t)
t=H.hE
inherit(H.bn,t)
inherit(H.c7,t)
t=P.bb
inherit(H.dr,t)
inherit(H.eT,t)
inherit(H.hm,t)
inherit(H.hk,t)
inherit(H.e1,t)
inherit(H.fJ,t)
inherit(P.ch,t)
inherit(P.bS,t)
inherit(P.ar,t)
inherit(P.t,t)
inherit(P.dE,t)
inherit(P.av,t)
inherit(P.a1,t)
inherit(P.e5,t)
t=H.h5
inherit(H.fS,t)
inherit(H.bv,t)
inherit(H.hx,P.ch)
t=H.bh
inherit(H.f9,t)
inherit(H.dj,t)
t=H.dj
inherit(H.bO,t)
inherit(H.bN,t)
inherit(H.bP,H.bO)
inherit(H.dk,H.bP)
inherit(H.bQ,H.bN)
inherit(H.dl,H.bQ)
t=H.dk
inherit(H.di,t)
inherit(H.fa,t)
t=H.dl
inherit(H.fb,t)
inherit(H.fc,t)
inherit(H.fd,t)
inherit(H.fe,t)
inherit(H.ff,t)
inherit(H.dm,t)
inherit(H.fg,t)
t=P.hG
inherit(P.hy,t)
inherit(P.iw,t)
inherit(P.ih,P.iD)
inherit(P.dI,H.ag)
inherit(P.fL,P.fM)
inherit(P.i6,P.fL)
inherit(P.i9,P.i6)
inherit(P.de,P.bT)
t=P.V
inherit(P.L,t)
inherit(P.m,t)
t=P.ar
inherit(P.dv,t)
inherit(P.eL,t)
t=W.h
inherit(W.p,t)
inherit(W.bB,t)
inherit(W.e3,t)
inherit(W.ez,t)
inherit(W.bG,t)
inherit(W.bL,t)
inherit(W.fz,t)
inherit(W.dw,t)
inherit(W.fN,t)
inherit(W.a7,t)
inherit(W.bA,t)
inherit(W.aa,t)
inherit(W.Y,t)
inherit(W.bz,t)
inherit(W.hp,t)
inherit(W.ht,t)
inherit(W.c0,t)
inherit(W.hw,t)
inherit(W.b2,t)
inherit(W.iq,t)
t=W.p
inherit(W.a2,t)
inherit(W.aQ,t)
inherit(W.bx,t)
inherit(W.cn,t)
inherit(W.hI,t)
t=W.a2
inherit(W.k,t)
inherit(P.F,t)
t=W.k
inherit(W.dV,t)
inherit(W.dW,t)
inherit(W.aO,t)
inherit(W.aP,t)
inherit(W.cm,t)
inherit(W.eD,t)
inherit(W.cu,t)
inherit(W.be,t)
inherit(W.eM,t)
inherit(W.bK,t)
inherit(W.fK,t)
inherit(W.dz,t)
inherit(W.h3,t)
inherit(W.h4,t)
inherit(W.bY,t)
inherit(W.i5,t)
inherit(W.bE,W.bB)
inherit(W.e_,W.bE)
inherit(W.ba,W.cw)
inherit(W.e9,W.cp)
inherit(W.d9,W.cH)
inherit(W.ea,W.d9)
inherit(W.a3,W.ci)
inherit(W.d7,W.cG)
inherit(W.ey,W.d7)
inherit(W.d1,W.cF)
inherit(W.bF,W.d1)
inherit(W.cv,W.bx)
inherit(W.eI,W.bG)
inherit(W.aH,W.i)
t=W.aH
inherit(W.aW,t)
inherit(W.O,t)
inherit(W.b_,t)
inherit(W.f6,W.bL)
inherit(W.d3,W.cD)
inherit(W.f7,W.d3)
inherit(W.S,P.de)
inherit(W.d2,W.cK)
inherit(W.bR,W.d2)
t=W.bk
inherit(W.fs,t)
inherit(W.fI,t)
inherit(W.hh,t)
inherit(W.cT,W.cC)
inherit(W.fv,W.cT)
inherit(W.fy,W.aj)
inherit(W.bD,W.bA)
inherit(W.fO,W.bD)
inherit(W.cW,W.cB)
inherit(W.fQ,W.cW)
inherit(W.cU,W.cA)
inherit(W.h7,W.cU)
inherit(W.bC,W.bz)
inherit(W.h8,W.bC)
inherit(W.d4,W.cQ)
inherit(W.he,W.d4)
inherit(W.bl,W.bK)
inherit(W.b1,W.O)
inherit(W.cR,W.cP)
inherit(W.dH,W.cR)
inherit(W.cY,W.cO)
inherit(W.hH,W.cY)
inherit(W.hJ,W.cq)
inherit(W.d8,W.cN)
inherit(W.i4,W.d8)
inherit(W.d6,W.cJ)
inherit(W.dJ,W.d6)
inherit(W.d5,W.cM)
inherit(W.it,W.d5)
inherit(W.d_,W.cL)
inherit(W.iu,W.d_)
inherit(W.hK,W.hD)
inherit(W.hO,P.bW)
inherit(W.hL,W.hO)
inherit(W.hP,P.fW)
inherit(W.ix,W.c6)
inherit(P.I,P.ig)
t=P.F
inherit(P.aD,t)
inherit(P.aN,t)
inherit(P.eg,t)
inherit(P.eh,t)
inherit(P.ei,t)
inherit(P.ej,t)
inherit(P.ek,t)
inherit(P.el,t)
inherit(P.em,t)
inherit(P.en,t)
inherit(P.eo,t)
inherit(P.ep,t)
inherit(P.eq,t)
inherit(P.er,t)
inherit(P.es,t)
inherit(P.et,t)
inherit(P.eu,t)
inherit(P.ev,t)
inherit(P.ew,t)
inherit(P.ex,t)
inherit(P.eA,t)
inherit(P.f2,t)
inherit(P.f3,t)
inherit(P.fr,t)
inherit(P.bU,t)
inherit(P.h2,t)
inherit(P.hq,t)
inherit(P.c2,t)
inherit(P.il,t)
inherit(P.im,t)
inherit(P.io,t)
t=P.aD
inherit(P.dU,t)
inherit(P.eC,t)
inherit(P.af,t)
inherit(P.eJ,t)
inherit(P.h1,t)
inherit(P.dA,t)
inherit(P.ho,t)
inherit(P.cS,P.cz)
inherit(P.eU,P.cS)
inherit(P.d0,P.cE)
inherit(P.fk,P.d0)
inherit(P.fD,P.af)
inherit(P.cZ,P.cx)
inherit(P.h0,P.cZ)
t=P.dA
inherit(P.h6,t)
inherit(P.bZ,t)
inherit(P.cX,P.cI)
inherit(P.hg,P.cX)
inherit(P.cV,P.cy)
inherit(P.fR,P.cV)
t=G.f8
inherit(G.fP,t)
inherit(G.hl,t)
inherit(G.dh,t)
inherit(G.fF,t)
inherit(G.e0,G.fP)
inherit(B.fl,G.e0)
t=G.hl
inherit(G.f4,t)
inherit(G.ft,t)
inherit(G.eK,G.c_)
inherit(R.ds,G.ft)
inherit(R.fU,R.fT)
mixin(H.bN,P.v)
mixin(H.bO,P.v)
mixin(H.bP,H.cs)
mixin(H.bQ,H.cs)
mixin(P.bT,P.v)
mixin(W.bz,P.v)
mixin(W.bA,P.v)
mixin(W.bB,P.v)
mixin(W.bC,W.z)
mixin(W.bD,W.z)
mixin(W.bE,W.z)
mixin(W.cw,W.e4)
mixin(W.cQ,P.v)
mixin(W.cC,P.v)
mixin(W.cJ,P.v)
mixin(W.cK,P.v)
mixin(W.cL,P.v)
mixin(W.cM,P.v)
mixin(W.cN,P.v)
mixin(W.cO,P.v)
mixin(W.cP,P.v)
mixin(W.cA,P.v)
mixin(W.cB,P.v)
mixin(W.cD,P.v)
mixin(W.cF,P.v)
mixin(W.cG,P.v)
mixin(W.cH,P.v)
mixin(W.cR,W.z)
mixin(W.cT,W.z)
mixin(W.d2,W.z)
mixin(W.d3,W.z)
mixin(W.d1,W.z)
mixin(W.d6,W.z)
mixin(W.d7,W.z)
mixin(W.d8,W.z)
mixin(W.d9,W.z)
mixin(W.cU,W.z)
mixin(W.cW,W.z)
mixin(W.cY,W.z)
mixin(W.d_,W.z)
mixin(W.d4,W.z)
mixin(W.d5,W.z)
mixin(P.cz,P.v)
mixin(P.cx,P.v)
mixin(P.cE,P.v)
mixin(P.cI,P.v)
mixin(P.cS,W.z)
mixin(P.d0,W.z)
mixin(P.cX,W.z)
mixin(P.cZ,W.z)
mixin(P.cy,P.v)
mixin(P.cV,W.z)})();(function constants(){C.o=W.aO.prototype
C.w=W.aP.prototype
C.m=W.cj.prototype
C.p=W.ck.prototype
C.x=W.ba.prototype
C.q=W.cm.prototype
C.M=W.co.prototype
C.N=W.cu.prototype
C.r=W.cv.prototype
C.O=J.a.prototype
C.a=J.aT.prototype
C.z=J.dc.prototype
C.b=J.dd.prototype
C.c=J.bf.prototype
C.i=J.aU.prototype
C.V=J.aV.prototype
C.Y=H.di.prototype
C.D=W.bR.prototype
C.E=J.fu.prototype
C.F=W.du.prototype
C.K=W.dz.prototype
C.v=J.b0.prototype
C.aw=W.b1.prototype
C.ax=W.c0.prototype
C.L=new P.i8()
C.d=new P.ih()
C.y=new P.aR(0)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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
C.A=function(hooks) { return hooks; }

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.C(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.t=H.C(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.u=H.C(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.Z=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.a_=new G.w("vec4","delta from light",0)
C.n=new G.w("","",0)
C.G=new G.w("vec3","vertex coordinates",0)
C.a0=new G.w("vec3","vertex binormals",0)
C.H=new G.w("vec4","for wireframe",0)
C.a1=new G.w("vec4","per vertex color",0)
C.a2=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.a4=new G.w("mat4","",4)
C.a3=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.a5=new G.w("float","",4)
C.a6=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a7=new G.w("float","for bump maps",0)
C.a8=new G.w("vec2","texture uvs",0)
C.a9=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.aa=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.ab=new G.w("vec3","vertex normals",0)
C.ac=new G.w("sampler2DShadow","",0)
C.I=new G.w("vec3","per vertex color",0)
C.J=new G.w("mat3","",0)
C.ad=new G.w("vec3","vertex tangents",0)
C.ae=H.K("nG")
C.af=H.K("nH")
C.ag=H.K("eB")
C.ah=H.K("nI")
C.ai=H.K("nJ")
C.aj=H.K("kl")
C.ak=H.K("nK")
C.al=H.K("ko")
C.am=H.K("aF")
C.an=H.K("q")
C.ao=H.K("kK")
C.ap=H.K("kL")
C.aq=H.K("nL")
C.ar=H.K("kM")
C.as=H.K("aA")
C.at=H.K("L")
C.au=H.K("m")
C.av=H.K("V")})();(function staticFields(){$.kt="$cachedFunction"
$.ku="$cachedInvocation"
$.k3=null
$.k1=null
$.jA=!1
$.jE=null
$.kY=null
$.le=null
$.iM=null
$.iU=null
$.jF=null
$.bo=null
$.c8=null
$.c9=null
$.jB=!1
$.u=C.d
$.kf=0
$.aC=null
$.jm=null
$.ke=null
$.kd=null
$.kb=null
$.ka=null
$.k9=null
$.k8=null
$.nc=0
$.nd=0
$.jJ=0
$.la=0
$.cd=0
$.ce=0
$.nC=!1
$.l4=0
$.lj="sphere.png"
$.mX="  vec3 u = normalize(vec3(uModelMatrix * vec4(aPosition, 1.0)));\n  vec3 n = normalize(uNormalMatrix * aNormal );\n  vec3 r = reflect( u, n );\n  r.z += 1.0;\n  float m = 2.0 * length(r);\n  vTexUV = vec2(r.x/m + 0.5, r.y/m + 0.5);\n"})();(function lazyInitializers(){lazy($,"k7","$get$k7",function(){return H.l7("_$dart_dartClosure")})
lazy($,"jr","$get$jr",function(){return H.l7("_$dart_js")})
lazy($,"km","$get$km",function(){return H.mp()})
lazy($,"kn","$get$kn",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kf
$.kf=t+1
t="expando$key$"+t}return new P.ef(null,t,[P.m])})
lazy($,"kz","$get$kz",function(){return H.ax(H.hj({
toString:function(){return"$receiver$"}}))})
lazy($,"kA","$get$kA",function(){return H.ax(H.hj({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kB","$get$kB",function(){return H.ax(H.hj(null))})
lazy($,"kC","$get$kC",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kG","$get$kG",function(){return H.ax(H.hj(void 0))})
lazy($,"kH","$get$kH",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kE","$get$kE",function(){return H.ax(H.kF(null))})
lazy($,"kD","$get$kD",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kJ","$get$kJ",function(){return H.ax(H.kF(void 0))})
lazy($,"kI","$get$kI",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jy","$get$jy",function(){return P.mM()})
lazy($,"kh","$get$kh",function(){return P.mR(null,P.aF)})
lazy($,"ca","$get$ca",function(){return[]})
lazy($,"k6","$get$k6",function(){return{}})
lazy($,"kR","$get$kR",function(){return P.jt(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jz","$get$jz",function(){return P.N()})
lazy($,"iL","$get$iL",function(){return P.kp(P.m,P.aA)})
lazy($,"cc","$get$cc",function(){return P.kp(P.q,P.aA)})
lazy($,"kx","$get$kx",function(){return new G.dC(1281,0,4294967295)})
lazy($,"k_","$get$k_",function(){return new G.dB(32774,770,769)})
lazy($,"T","$get$T",function(){return P.aX(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kN","$get$kN",function(){return C.L})
lazy($,"ld","$get$ld",function(){var t=new G.bj("PointSpritesV",null,[],[],[],[],0,P.N())
t.bt(["aPosition"])
t.ar(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.as(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"lc","$get$lc",function(){var t=new G.bj("PointSpritesF",null,[],[],[],[],0,P.N())
t.ar(["uTexture"])
t.as(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"ki","$get$ki",function(){return[new G.y(0,11,5),new G.y(0,5,1),new G.y(0,1,7),new G.y(0,7,10),new G.y(0,10,11),new G.y(1,5,9),new G.y(5,11,4),new G.y(11,10,2),new G.y(10,7,6),new G.y(7,1,8),new G.y(3,9,4),new G.y(3,4,2),new G.y(3,2,6),new G.y(3,6,8),new G.y(3,8,9),new G.y(4,9,5),new G.y(2,4,11),new G.y(6,2,10),new G.y(8,6,7),new G.y(9,8,1)]})
lazy($,"li","$get$li",function(){return(1+P.nD(5))/2})
lazy($,"kj","$get$kj",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$li()
s=T.ac(-1,t,0)
s.C(0)
r=T.ac(1,t,0)
r.C(0)
q=T.ac(-1,-t,0)
q.C(0)
p=T.ac(1,-t,0)
p.C(0)
o=T.ac(0,-1,t)
o.C(0)
n=T.ac(0,1,t)
n.C(0)
m=T.ac(0,-1,-t)
m.C(0)
l=T.ac(0,1,-t)
l.C(0)
k=T.ac(t,0,-1)
k.C(0)
j=T.ac(t,0,1)
j.C(0)
i=T.ac(-t,0,-1)
i.C(0)
t=T.ac(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"lg","$get$lg",function(){var t=new G.bj("sphereV",null,[],[],[],[],0,P.N())
t.bt(["aPosition","aNormal"])
t.ar(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.bu(["vTexUV"])
t.as(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);",$.mX])
return t})
lazy($,"lf","$get$lf",function(){var t=new G.bj("sphereF",null,[],[],[],[],0,P.N())
t.bu(["vTexUV"])
t.ar(["uTexture"])
t.as(["oFragColor = texture(uTexture, vTexUV);"])
return t})})()
var u={
createNewIsolate:function(){return $},
staticFunctionNameToClosure:function(a){var t=getGlobalFromName(a)
var s=t.$tearOff
return s()},
classIdExtractor:function(a){return a.constructor.name},
classFieldsExtractor:function(a){var t=a.constructor
var s=t.$cachedFieldNames
if(!s){var r=new t()
s=t.$cachedFieldNames=Object.keys(r)}var q=new Array(s.length)
for(var p=0;p<s.length;p++)q[p]=a[s[p]]
return q},
instanceFromClassId:function(a){var t=getGlobalFromName(a)
return new t()},
initializeEmptyInstance:function(a,b,c){var t=b.constructor
var s=Object.keys(b)
if(s.length!=c.length)throw new Error("Mismatch during deserialization.")
for(var r=0;r<c.length;r++)b[s[r]]=c[r]
return b},
mangledGlobalNames:{m:"int",L:"double",V:"num",q:"String",aA:"bool",aF:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.aA,args:[W.a2,P.q,P.q,W.c3]},{func:1,v:true,args:[P.n],opt:[P.bV]},{func:1,v:true,args:[W.i]},{func:1,ret:P.m,args:[P.H,P.H]},{func:1,ret:P.q,args:[W.h]}],
interceptorsByTag:null,
leafTags:null};(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(convertToFastObject(n))[0]}
u.getIsolateTag=function(a){return t("___dart_"+a+u.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
u.isolateTag=o
break}}u.dispatchPropertyName=u.getIsolateTag("dispatch_record")}()
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bM,ArrayBufferView:H.bh,DataView:H.f9,Float32Array:H.di,Float64Array:H.fa,Int16Array:H.fb,Int32Array:H.fc,Int8Array:H.fd,Uint16Array:H.fe,Uint32Array:H.ff,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.fg,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dV,HTMLAreaElement:W.dW,AudioTrack:W.a0,AudioTrackList:W.e_,Blob:W.ci,HTMLBodyElement:W.aO,HTMLCanvasElement:W.aP,CanvasGradient:W.cj,CanvasRenderingContext2D:W.ck,CDATASection:W.aQ,CharacterData:W.aQ,Comment:W.aQ,ProcessingInstruction:W.aQ,Text:W.aQ,CompositorWorker:W.e3,CSSCharsetRule:W.x,CSSFontFaceRule:W.x,CSSGroupingRule:W.x,CSSImportRule:W.x,CSSKeyframeRule:W.x,MozCSSKeyframeRule:W.x,WebKitCSSKeyframeRule:W.x,CSSKeyframesRule:W.x,MozCSSKeyframesRule:W.x,WebKitCSSKeyframesRule:W.x,CSSMediaRule:W.x,CSSNamespaceRule:W.x,CSSPageRule:W.x,CSSRule:W.x,CSSStyleRule:W.x,CSSSupportsRule:W.x,CSSViewportRule:W.x,CSSStyleDeclaration:W.ba,MSStyleCSSProperties:W.ba,CSS2Properties:W.ba,DataTransferItemList:W.e6,DeviceAcceleration:W.e7,HTMLDivElement:W.cm,XMLDocument:W.bx,Document:W.bx,DocumentFragment:W.cn,ShadowRoot:W.cn,DOMException:W.e8,DOMImplementation:W.co,DOMPoint:W.e9,DOMPointReadOnly:W.cp,DOMRectReadOnly:W.cq,DOMStringList:W.ea,DOMTokenList:W.eb,Element:W.a2,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a3,FileList:W.ey,FileWriter:W.ez,HTMLFormElement:W.eD,Gamepad:W.a4,HTMLHeadElement:W.cu,History:W.eH,HTMLCollection:W.bF,HTMLFormControlsCollection:W.bF,HTMLOptionsCollection:W.bF,HTMLDocument:W.cv,XMLHttpRequest:W.eI,XMLHttpRequestUpload:W.bG,XMLHttpRequestEventTarget:W.bG,ImageBitmap:W.bc,ImageData:W.bd,HTMLImageElement:W.be,HTMLInputElement:W.eM,KeyboardEvent:W.aW,Location:W.f_,HTMLAudioElement:W.bK,HTMLMediaElement:W.bK,MediaList:W.f5,MIDIOutput:W.f6,MIDIInput:W.bL,MIDIPort:W.bL,MimeType:W.a5,MimeTypeArray:W.f7,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,Navigator:W.fh,Attr:W.p,Node:W.p,NodeIterator:W.dn,NodeList:W.bR,RadioNodeList:W.bR,Path2D:W.fq,Perspective:W.fs,Plugin:W.a6,PluginArray:W.fv,PositionValue:W.fy,PresentationConnection:W.fz,Range:W.du,Rotation:W.fI,RTCDataChannel:W.dw,DataChannel:W.dw,HTMLSelectElement:W.fK,SharedWorker:W.fN,SourceBuffer:W.a7,SourceBufferList:W.fO,SpeechGrammar:W.a8,SpeechGrammarList:W.fQ,SpeechRecognitionResult:W.a9,Storage:W.fV,CSSStyleSheet:W.X,StyleSheet:W.X,CalcLength:W.aj,KeywordValue:W.aj,LengthValue:W.aj,NumberValue:W.aj,SimpleLength:W.aj,TransformValue:W.aj,StyleValue:W.aj,HTMLTableElement:W.dz,HTMLTableRowElement:W.h3,HTMLTableSectionElement:W.h4,HTMLTemplateElement:W.bY,TextTrack:W.aa,TextTrackCue:W.Y,VTTCue:W.Y,TextTrackCueList:W.h7,TextTrackList:W.h8,TimeRanges:W.ha,Touch:W.ab,TouchEvent:W.b_,TouchList:W.he,TrackDefaultList:W.hf,Matrix:W.bk,Skew:W.bk,TransformComponent:W.bk,Translation:W.hh,TreeWalker:W.dD,CompositionEvent:W.aH,FocusEvent:W.aH,TextEvent:W.aH,SVGZoomEvent:W.aH,UIEvent:W.aH,URL:W.hn,HTMLVideoElement:W.bl,VideoTrackList:W.hp,VTTRegionList:W.hs,WebSocket:W.ht,WheelEvent:W.b1,Window:W.c0,DOMWindow:W.c0,Worker:W.hw,CompositorWorkerGlobalScope:W.b2,DedicatedWorkerGlobalScope:W.b2,ServiceWorkerGlobalScope:W.b2,SharedWorkerGlobalScope:W.b2,WorkerGlobalScope:W.b2,ClientRect:W.hF,ClientRectList:W.dH,DOMRectList:W.dH,CSSRuleList:W.hH,DocumentType:W.hI,DOMRect:W.hJ,GamepadList:W.i4,HTMLFrameSetElement:W.i5,NamedNodeMap:W.dJ,MozNamedAttrMap:W.dJ,ServiceWorker:W.iq,SpeechRecognitionResultList:W.it,StyleSheetList:W.iu,WorkerLocation:W.iB,WorkerNavigator:W.iC,SVGAElement:P.dU,SVGAnimateElement:P.aN,SVGAnimateMotionElement:P.aN,SVGAnimateTransformElement:P.aN,SVGAnimationElement:P.aN,SVGSetElement:P.aN,SVGFEBlendElement:P.eg,SVGFEColorMatrixElement:P.eh,SVGFEComponentTransferElement:P.ei,SVGFECompositeElement:P.ej,SVGFEConvolveMatrixElement:P.ek,SVGFEDiffuseLightingElement:P.el,SVGFEDisplacementMapElement:P.em,SVGFEFloodElement:P.en,SVGFEGaussianBlurElement:P.eo,SVGFEImageElement:P.ep,SVGFEMergeElement:P.eq,SVGFEMorphologyElement:P.er,SVGFEOffsetElement:P.es,SVGFEPointLightElement:P.et,SVGFESpecularLightingElement:P.eu,SVGFESpotLightElement:P.ev,SVGFETileElement:P.ew,SVGFETurbulenceElement:P.ex,SVGFilterElement:P.eA,SVGForeignObjectElement:P.eC,SVGCircleElement:P.af,SVGEllipseElement:P.af,SVGLineElement:P.af,SVGPathElement:P.af,SVGPolygonElement:P.af,SVGPolylineElement:P.af,SVGGeometryElement:P.af,SVGClipPathElement:P.aD,SVGDefsElement:P.aD,SVGGElement:P.aD,SVGSwitchElement:P.aD,SVGGraphicsElement:P.aD,SVGImageElement:P.eJ,SVGLength:P.at,SVGLengthList:P.eU,SVGMarkerElement:P.f2,SVGMaskElement:P.f3,SVGNumber:P.au,SVGNumberList:P.fk,SVGPatternElement:P.fr,SVGPoint:P.fw,SVGPointList:P.fx,SVGRect:P.fC,SVGRectElement:P.fD,SVGScriptElement:P.bU,SVGStringList:P.h0,SVGDescElement:P.F,SVGDiscardElement:P.F,SVGFEDistantLightElement:P.F,SVGFEFuncAElement:P.F,SVGFEFuncBElement:P.F,SVGFEFuncGElement:P.F,SVGFEFuncRElement:P.F,SVGFEMergeNodeElement:P.F,SVGMetadataElement:P.F,SVGStopElement:P.F,SVGStyleElement:P.F,SVGTitleElement:P.F,SVGComponentTransferFunctionElement:P.F,SVGElement:P.F,SVGSVGElement:P.h1,SVGSymbolElement:P.h2,SVGTextContentElement:P.dA,SVGTextPathElement:P.h6,SVGTSpanElement:P.bZ,SVGTextElement:P.bZ,SVGTextPositioningElement:P.bZ,SVGTransform:P.aw,SVGTransformList:P.hg,SVGUseElement:P.ho,SVGViewElement:P.hq,SVGViewSpec:P.hr,SVGLinearGradientElement:P.c2,SVGRadialGradientElement:P.c2,SVGGradientElement:P.c2,SVGCursorElement:P.il,SVGFEDropShadowElement:P.im,SVGMPathElement:P.io,AudioBuffer:P.dZ,WebGLRenderingContext:P.fG,WebGL2RenderingContext:P.fH,WebGL2RenderingContextBase:P.iA,SQLResultSetRowList:P.fR})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.bB.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bA.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"
W.bz.$nativeSuperclassTag="EventTarget"
W.bC.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lh(A.l1(),b)},[])
else (function(b){H.lh(A.l1(),b)})([])})})()