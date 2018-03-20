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
a[c]=function(){a[c]=function(){H.nz(b)}
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
return d?function(e){if(t===null)t=H.jH(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jH(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jH(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={ju:function ju(a){this.a=a},
jz:function(a,b,c,d){if(!!a.$isc)return new H.ed(a,b,[c,d])
return new H.dc(a,b,[c,d])},
d5:function(){return new P.ai("No element")},
mq:function(){return new P.ai("Too many elements")},
mp:function(){return new P.ai("Too few elements")},
du:function(a,b,c,d){if(c-b<=32)H.mF(a,b,c,d)
else H.mE(a,b,c,d)},
mF:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a_(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ap(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mE:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.a_(a2)
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
if(J.F(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.du(a2,a3,g-2,a5)
H.du(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.F(a5.$2(t.h(a2,g),l),0);)++g
for(;J.F(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.du(a2,g,f,a5)}else H.du(a2,g,f,a5)},
c:function c(){},
be:function be(){},
db:function db(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
ed:function ed(a,b,c){this.a=a
this.b=b
this.$ti=c},
f0:function f0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bK:function bK(a,b,c){this.a=a
this.b=b
this.$ti=c},
dB:function dB(a,b,c){this.a=a
this.b=b
this.$ti=c},
hw:function hw(a,b,c){this.a=a
this.b=b
this.$ti=c},
cn:function cn(){},
dJ:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.am()
return t},
j3:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
ld:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isb)throw H.e(P.dV("Arguments to main must be a List: "+H.f(s)))
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
s.f=new H.hN(P.jy(null,H.b4),0)
r=P.o
s.seJ(new H.ag(0,null,null,null,null,null,0,[r,H.b3]))
s.seL(new H.ag(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ic()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mk,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mT)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ah(null,null,null,r)
p=new H.bi(0,null,!1)
o=new H.b3(s,new H.ag(0,null,null,null,null,null,0,[r,H.bi]),q,u.createNewIsolate(),p,new H.as(H.j8()),new H.as(H.j8()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
q.l(0,0)
o.bx(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bs(a,{func:1,args:[,]}))o.af(new H.je(t,a))
else if(H.bs(a,{func:1,args:[,,]}))o.af(new H.jf(t,a))
else o.af(a)
u.globalState.f.am()},
mT:function(a){var t=P.aD(["command","print","msg",a])
return new H.al(!0,P.c4(null,P.o)).J(t)},
mm:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mn()
return},
mn:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
mk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b2(!0,[]).U(b.data)
s=J.a_(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nm(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b2(!0,[]).U(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b2(!0,[]).U(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ah(null,null,null,k)
i=new H.bi(0,null,!1)
h=new H.b3(s,new H.ag(0,null,null,null,null,null,0,[k,H.bi]),j,u.createNewIsolate(),i,new H.as(H.j8()),new H.as(H.j8()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
j.l(0,0)
h.bx(0,i)
u.globalState.f.a.R(0,new H.b4(h,new H.eM(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.am()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lP(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.am()
break
case"close":u.globalState.ch.al(0,$.$get$kn().h(0,a))
a.terminate()
u.globalState.f.am()
break
case"log":H.mj(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aD(["command","print","msg",t])
k=new H.al(!0,P.c4(null,P.o)).J(k)
s.toString
self.postMessage(k)}else P.a1(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mj:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aD(["command","log","msg",a])
r=new H.al(!0,P.c4(null,P.o)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.L(q)
t=H.am(q)
s=P.cm(t)
throw H.e(s)}},
ml:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ks=$.ks+("_"+s)
$.kt=$.kt+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bo(s,r),q,t.r])
r=new H.eN(a,b,c,d,t)
if(e){t.bT(q,q)
u.globalState.f.a.R(0,new H.b4(t,r,"start isolate"))}else r.$0()},
mG:function(a,b){var t=new H.hd(!0,!1,null)
t.dq(a,b)
return t},
mV:function(a){return new H.b2(!0,[]).U(new H.al(!1,P.c4(null,P.o)).J(a))},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b){this.a=a
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
b3:function b3(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
i8:function i8(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hO:function hO(a){this.a=a},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(){},
eM:function eM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hF:function hF(){},
bo:function bo(a,b){this.b=a
this.a=b},
ie:function ie(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c){this.b=a
this.c=b
this.a=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(a,b){this.a=a
this.b=b},
as:function as(a){this.a=a},
al:function al(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
nf:function(a){return u.types[a]},
no:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isp},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aM(a)
if(typeof t!=="string")throw H.e(H.U(a))
return t},
mC:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fG(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aX:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dp:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.u(a).$isb_){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aG(q,0)===36)q=C.i.d1(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dL(H.iR(a),0,null),u.mangledGlobalNames)},
fC:function(a){return"Instance of '"+H.dp(a)+"'"},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mA:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
my:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
mu:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
mv:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
mx:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
mz:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
mw:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
kr:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.U(a))
return a[b]},
P:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ar(!0,b,"index",null)
t=J.dQ(a)
if(b<0||C.b.cK(b,t))return P.C(b,a,"index",null,t)
return P.fD(b,"index",null)},
U:function(a){return new P.ar(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bh()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lg})
t.name=""}else t.toString=H.lg
return t},
lg:function(){return J.aM(this.dartException)},
E:function(a){throw H.e(a)},
ao:function(a){throw H.e(new P.a3(a))},
ax:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hk(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hl:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kE:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jw:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eR(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aP(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jw(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dm(p,null))}}if(a instanceof TypeError){o=$.$get$ky()
n=$.$get$kz()
m=$.$get$kA()
l=$.$get$kB()
k=$.$get$kF()
j=$.$get$kG()
i=$.$get$kD()
$.$get$kC()
h=$.$get$kI()
g=$.$get$kH()
f=o.N(s)
if(f!=null)return t.$1(H.jw(s,f))
else{f=n.N(s)
if(f!=null){f.method="call"
return t.$1(H.jw(s,f))}else{f=m.N(s)
if(f==null){f=l.N(s)
if(f==null){f=k.N(s)
if(f==null){f=j.N(s)
if(f==null){f=i.N(s)
if(f==null){f=l.N(s)
if(f==null){f=h.N(s)
if(f==null){f=g.N(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dm(s,f==null?null:f.method))}}return t.$1(new H.ho(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dv()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ar(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dv()
return a},
am:function(a){var t
if(a==null)return new H.dH(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dH(a,null)},
ns:function(a){if(a==null||typeof a!='object')return J.aq(a)
else return H.aX(a)},
nd:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nn:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dJ(b,new H.iZ(a))
case 1:return H.dJ(b,new H.j_(a,d))
case 2:return H.dJ(b,new H.j0(a,d,e))
case 3:return H.dJ(b,new H.j1(a,d,e,f))
case 4:return H.dJ(b,new H.j2(a,d,e,f,g))}throw H.e(P.cm("Unsupported number of arguments for wrapped closure"))},
aJ:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nn)
a.$identity=t
return t},
m4:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isb){t.$reflectionInfo=c
r=H.mC(t).r}else r=c
q=d?Object.create(new H.fU().constructor.prototype):Object.create(new H.bw(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k7(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nf,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k4:H.jp
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k7(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m1:function(a,b,c,d){var t=H.jp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k7:function(a,b,c){var t,s,r,q
if(c)return H.m3(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m1(s,b==null?r!=null:b!==r,t,b)
return q},
m2:function(a,b,c,d){var t,s
t=H.jp
s=H.k4
switch(b?-1:a){case 0:throw H.e(new H.fL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
m3:function(a,b){var t,s,r,q
H.m0()
t=$.k3
if(t==null){t=H.k2("receiver")
$.k3=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m2(r,b==null?q!=null:b!==q,s,b)
return t},
jH:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.m4(a,b,t,!!d,e,f)},
jp:function(a){return a.a},
k4:function(a){return a.c},
m0:function(){var t=$.k5
if(t==null){t=H.k2("self")
$.k5=t}return t},
k2:function(a){var t,s,r,q,p
t=new H.bw("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nN:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ay(a,"String"))},
Z:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"double"))},
nM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"num"))},
n6:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ay(a,"bool"))},
nm:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ay(a,"int"))},
nu:function(a,b){throw H.e(H.ay(a,b.substring(3)))},
nt:function(a,b){var t=J.a_(b)
throw H.e(H.k6(H.dp(a),t.bk(b,3,t.gj(b))))},
jK:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.nu(a,b)},
aK:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.nt(a,b)},
nL:function(a){if(a==null)return a
if(!!J.u(a).$isb)return a
throw H.e(H.ay(a,"List"))},
l3:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bs:function(a,b){var t
if(a==null)return!1
t=H.l3(a)
return t==null?!1:H.l9(t,b)},
nJ:function(a,b){var t,s
if(a==null)return a
if($.jE)return a
$.jE=!0
try{if(H.bs(a,b))return a
t=H.aL(b,null)
s=H.ay(a,t)
throw H.e(s)}finally{$.jE=!1}},
ay:function(a,b){return new H.hm("type '"+H.dp(a)+"' is not a subtype of type '"+b+"'")},
k6:function(a,b){return new H.e0("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
az:function(a){if(!0===a)return!1
if(!!J.u(a).$isjs)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ay(a,"bool"))},
aI:function(a){throw H.e(new H.hz(a))},
d:function(a){if(H.az(a))throw H.e(new P.ce(null))},
nz:function(a){throw H.e(new P.e4(a))},
j8:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l7:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aF(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iR:function(a){if(a==null)return
return a.$ti},
l8:function(a,b){return H.jO(a["$as"+H.f(b)],H.iR(a))},
ae:function(a,b,c){var t,s
t=H.l8(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
an:function(a,b){var t,s
t=H.iR(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aL:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dL(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aL(t,b)
return H.mX(a,b)}return"unknown-reified-type"},
mX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aL(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aL(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nc(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aL(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dL:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bW("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aL(o,c)}return p?"":"<"+s.k(0)+">"},
iS:function(a){var t,s
if(a instanceof H.b9){t=H.l3(a)
if(t!=null)return H.aL(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dL(a.$ti,0,null)},
jO:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jL(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jL(a,null,b)
return b},
ca:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iR(a)
s=J.u(a)
if(s[b]==null)return!1
return H.l_(H.jO(s[d],t),c)},
dM:function(a,b,c,d){if(a==null)return a
if(H.ca(a,b,c,d))return a
throw H.e(H.k6(H.dp(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dL(c,0,null),u.mangledGlobalNames)))},
nH:function(a,b,c,d){if(a==null)return a
if(H.ca(a,b,c,d))return a
throw H.e(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dL(c,0,null),u.mangledGlobalNames)))},
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
if(!H.a0(r,b[p]))return!1}return!0},
n9:function(a,b,c){return H.jL(a,b,H.l8(b,c))},
a0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aE")return!0
if('func' in b)return H.l9(a,b)
if('func' in a)return b.name==="js"||b.name==="n"
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
return H.l_(H.jO(o,t),r)},
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
if(!(H.a0(o,n)||H.a0(n,o)))return!1}return!0},
n2:function(a,b){var t,s,r,q,p,o
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
if(!(H.a0(p,o)||H.a0(o,p)))return!1}return!0},
l9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a0(t,s)||H.a0(s,t)))return!1}r=a.args
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
if(!(H.a0(g,f)||H.a0(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a0(g,f)||H.a0(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a0(g,f)||H.a0(f,g)))return!1}}return H.n2(a.named,b.named)},
jL:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nO:function(a){var t=$.jI
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nK:function(a){return H.aX(a)},
nI:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
np:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.n))
t=$.jI.$1(a)
s=$.iP[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iY[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kY.$2(a,t)
if(t!=null){s=$.iP[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iY[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jM(r)
$.iP[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iY[t]=r
return r}if(p==="-"){o=H.jM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lb(a,r)
if(p==="*")throw H.e(new P.c_(t))
if(u.leafTags[t]===true){o=H.jM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lb(a,r)},
lb:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j6(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jM:function(a){return J.j6(a,!1,null,!!a.$isp)},
nr:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j6(t,!1,null,!!t.$isp)
else return J.j6(t,c,null,null)},
nk:function(){if(!0===$.jJ)return
$.jJ=!0
H.nl()},
nl:function(){var t,s,r,q,p,o,n,m
$.iP=Object.create(null)
$.iY=Object.create(null)
H.nj()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lc.$1(p)
if(o!=null){n=H.nr(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nj:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.br(C.O,H.br(C.T,H.br(C.x,H.br(C.x,H.br(C.S,H.br(C.P,H.br(C.Q(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jI=new H.iV(p)
$.kY=new H.iW(o)
$.lc=new H.iX(n)},
br:function(a,b){return a(b)||b},
ny:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fG:function fG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hk:function hk(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dm:function dm(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(a){this.a=a},
jg:function jg(a){this.a=a},
dH:function dH(a,b){this.a=a
this.b=b},
iZ:function iZ(a){this.a=a},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b9:function b9(){},
h7:function h7(){},
fU:function fU(){},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hm:function hm(a){this.a=a},
e0:function e0(a){this.a=a},
fL:function fL(a){this.a=a},
hz:function hz(a){this.a=a},
aF:function aF(a,b){this.a=a
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
eQ:function eQ(a){this.a=a},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eU:function eU(a,b){this.a=a
this.$ti=b},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
iX:function iX(a){this.a=a},
k:function(a){return a},
iI:function(a){var t,s,r
if(!!J.u(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bg:function bg(){},
aW:function aW(){},
fa:function fa(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dd:function dd(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
dh:function dh(){},
fh:function fh(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
nc:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
j7:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.eP.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.n)return a
return J.iQ(a)},
j6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iQ:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jJ==null){H.nk()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.c_("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jv()]
if(p!=null)return p
p=H.np(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){Object.defineProperty(q,$.$get$jv(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
a_:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.n)return a
return J.iQ(a)},
dK:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.n)return a
return J.iQ(a)},
l5:function(a){if(typeof a=="number")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
ne:function(a){if(typeof a=="number")return J.bd.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
l6:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.n)return a
return J.iQ(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).A(a,b)},
ap:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l5(a).aB(a,b)},
lh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l5(a).aC(a,b)},
b6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.no(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a_(a).h(a,b)},
li:function(a,b,c,d){return J.j(a).dD(a,b,c,d)},
jP:function(a,b){return J.l6(a).aG(a,b)},
bt:function(a,b){return J.j(a).dU(a,b)},
lj:function(a,b,c,d){return J.j(a).dV(a,b,c,d)},
lk:function(a,b,c){return J.j(a).dW(a,b,c)},
jQ:function(a,b){return J.j(a).bS(a,b)},
jh:function(a,b){return J.j(a).O(a,b)},
jR:function(a,b,c){return J.j(a).bV(a,b,c)},
ll:function(a,b){return J.j(a).ea(a,b)},
dN:function(a,b,c){return J.j(a).bW(a,b,c)},
bu:function(a,b,c){return J.j(a).bX(a,b,c)},
dO:function(a,b){return J.j(a).ed(a,b)},
lm:function(a,b){return J.j(a).bY(a,b)},
ln:function(a,b,c){return J.j(a).bZ(a,b,c)},
jS:function(a,b,c,d){return J.j(a).c_(a,b,c,d)},
lo:function(a,b,c,d,e){return J.j(a).c0(a,b,c,d,e)},
lp:function(a,b){return J.ne(a).P(a,b)},
ji:function(a,b,c){return J.a_(a).ej(a,b,c)},
jj:function(a){return J.j(a).c2(a)},
lq:function(a){return J.j(a).c3(a)},
lr:function(a){return J.j(a).c5(a)},
ls:function(a){return J.j(a).ep(a)},
lt:function(a,b){return J.j(a).c7(a,b)},
jk:function(a,b){return J.j(a).c8(a,b)},
lu:function(a,b,c,d){return J.j(a).c9(a,b,c,d)},
lv:function(a,b,c,d,e){return J.j(a).ex(a,b,c,d,e)},
lw:function(a,b,c,d,e){return J.j(a).ca(a,b,c,d,e)},
lx:function(a,b,c,d,e,f){return J.j(a).ey(a,b,c,d,e,f)},
ly:function(a,b){return J.dK(a).t(a,b)},
dP:function(a,b){return J.j(a).cb(a,b)},
lz:function(a,b){return J.j(a).cc(a,b)},
lA:function(a){return J.j(a).ez(a)},
lB:function(a,b){return J.dK(a).ag(a,b)},
lC:function(a){return J.j(a).ge9(a)},
aq:function(a){return J.u(a).gv(a)},
bv:function(a){return J.dK(a).gw(a)},
dQ:function(a){return J.a_(a).gj(a)},
lD:function(a){return J.j(a).gb2(a)},
lE:function(a){return J.u(a).gB(a)},
lF:function(a){return J.j(a).geX(a)},
lG:function(a){return J.j(a).gay(a)},
jl:function(a){return J.j(a).gm(a)},
jm:function(a){return J.j(a).gn(a)},
jT:function(a){return J.j(a).gK(a)},
jn:function(a,b){return J.j(a).a4(a,b)},
lH:function(a){return J.j(a).aA(a)},
lI:function(a){return J.j(a).b9(a)},
lJ:function(a,b){return J.j(a).ba(a,b)},
lK:function(a,b,c){return J.j(a).bb(a,b,c)},
jU:function(a,b,c){return J.j(a).be(a,b,c)},
lL:function(a,b){return J.j(a).cf(a,b)},
lM:function(a,b){return J.dK(a).cj(a,b)},
lN:function(a,b,c){return J.j(a).ck(a,b,c)},
lO:function(a){return J.dK(a).eQ(a)},
lP:function(a,b){return J.j(a).H(a,b)},
lQ:function(a,b,c,d){return J.j(a).bj(a,b,c,d)},
lR:function(a,b,c,d,e,f,g){return J.j(a).cp(a,b,c,d,e,f,g)},
lS:function(a,b,c,d){return J.j(a).cq(a,b,c,d)},
dR:function(a,b,c,d){return J.j(a).cr(a,b,c,d)},
lT:function(a){return J.l6(a).f_(a)},
aM:function(a){return J.u(a).k(a)},
lU:function(a,b,c,d){return J.j(a).f1(a,b,c,d)},
lV:function(a,b,c){return J.j(a).cs(a,b,c)},
lW:function(a,b,c){return J.j(a).ct(a,b,c)},
jo:function(a,b,c){return J.j(a).cu(a,b,c)},
lX:function(a,b,c){return J.j(a).cv(a,b,c)},
jV:function(a,b,c){return J.j(a).cw(a,b,c)},
jW:function(a,b,c){return J.j(a).cz(a,b,c)},
jX:function(a,b,c){return J.j(a).cA(a,b,c)},
jY:function(a,b,c,d){return J.j(a).cB(a,b,c,d)},
jZ:function(a,b,c,d){return J.j(a).cC(a,b,c,d)},
lY:function(a,b){return J.j(a).cE(a,b)},
lZ:function(a,b,c){return J.j(a).f2(a,b,c)},
k_:function(a,b,c,d,e,f,g){return J.j(a).cG(a,b,c,d,e,f,g)},
m_:function(a,b,c,d,e){return J.j(a).cH(a,b,c,d,e)},
a:function a(){},
eP:function eP(){},
d9:function d9(){},
bJ:function bJ(){},
fw:function fw(){},
b_:function b_(){},
aU:function aU(){},
aS:function aS(a){this.$ti=a},
jt:function jt(a){this.$ti=a},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
d8:function d8(){},
d7:function d7(){},
aT:function aT(){}},P={
mJ:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n3()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aJ(new P.hB(t),1)).observe(s,{childList:true})
return new P.hA(t,s,r)}else if(self.setImmediate!=null)return P.n4()
return P.n5()},
mK:function(a){++u.globalState.f.b
self.scheduleImmediate(H.aJ(new P.hC(a),0))},
mL:function(a){++u.globalState.f.b
self.setImmediate(H.aJ(new P.hD(a),0))},
mM:function(a){P.jA(C.v,a)},
kT:function(a,b){if(H.bs(a,{func:1,args:[P.aE,P.aE]})){b.toString
return a}else{b.toString
return a}},
mg:function(a,b,c){var t
if(a==null)a=new P.bh()
t=$.w
if(t!==C.d)t.toString
t=new P.H(0,t,null,[c])
t.bz(a,b)
return t},
mh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.H(0,$.w,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eE(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b6(new P.eD(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.H(0,$.w,null,[null])
l.by(C.z)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.L(j)
n=H.am(j)
if(t.b===0||!1)return P.mg(o,n,null)
else{t.c=o
t.d=n}}return s},
mW:function(a,b,c){$.w.toString
a.F(b,c)},
mO:function(a,b){var t=new P.H(0,$.w,null,[b])
H.d(!0)
t.a=4
t.c=a
return t},
kO:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.H))
H.d(b.a===0)
b.a=1
try{a.b6(new P.hX(b),new P.hY(b))}catch(r){t=H.L(r)
s=H.am(r)
P.nv(new P.hZ(b,t,s))}},
hW:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ac(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bn(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bM(q)}},
bn:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iJ(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bn(t.a,b)}s=t.a
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
P.iJ(null,null,p,o,s)
return}s=$.w
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.w
H.d(l==null?s!=null:l!==s)
j=$.w
$.w=l
i=j}else i=null
s=b.c
if(s===8)new P.i3(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i2(r,b,m).$0()}else if((s&2)!==0)new P.i1(t,r,b).$0()
if(i!=null){H.d(!0)
$.w=i}s=r.b
if(!!J.u(s).$isaR){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ac(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hW(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ac(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mZ:function(){var t,s
for(;t=$.bp,t!=null;){$.c8=null
s=t.b
$.bp=s
if(s==null)$.c7=null
t.a.$0()}},
n1:function(){$.jF=!0
try{P.mZ()}finally{$.c8=null
$.jF=!1
if($.bp!=null)$.$get$jC().$1(P.l0())}},
kW:function(a){var t=new P.dC(a,null)
if($.bp==null){$.c7=t
$.bp=t
if(!$.jF)$.$get$jC().$1(P.l0())}else{$.c7.b=t
$.c7=t}},
n0:function(a){var t,s,r
t=$.bp
if(t==null){P.kW(a)
$.c8=$.c7
return}s=new P.dC(a,null)
r=$.c8
if(r==null){s.b=t
$.c8=s
$.bp=s}else{s.b=r.b
r.b=s
$.c8=s
if(s.b==null)$.c7=s}},
nv:function(a){var t=$.w
if(C.d===t){P.bq(null,null,C.d,a)
return}t.toString
P.bq(null,null,t,t.aU(a))},
mU:function(a,b,c){var t=a.ee(0)
if(!!J.u(t).$isaR&&t!==$.$get$kk())t.f3(new P.iH(b,c))
else b.a9(c)},
mH:function(a,b){var t=$.w
if(t===C.d){t.toString
return P.jA(a,b)}return P.jA(a,t.aU(b))},
jA:function(a,b){var t=C.b.I(a.a,1000)
return H.mG(t<0?0:t,b)},
jB:function(a){var t,s
H.d(a!=null)
t=$.w
H.d(a==null?t!=null:a!==t)
s=$.w
$.w=a
return s},
iJ:function(a,b,c,d,e){var t={}
t.a=d
P.n0(new P.iK(t,e))},
kU:function(a,b,c,d){var t,s
if($.w===c)return d.$0()
t=P.jB(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.w=s}},
kV:function(a,b,c,d,e){var t,s
if($.w===c)return d.$1(e)
t=P.jB(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
n_:function(a,b,c,d,e,f){var t,s
if($.w===c)return d.$2(e,f)
t=P.jB(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
bq:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aU(d):c.eb(d)
P.kW(d)},
hB:function hB(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
eE:function eE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hH:function hH(){},
dD:function dD(a,b){this.a=a
this.$ti=b},
iz:function iz(a,b){this.a=a
this.$ti=b},
bm:function bm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
H:function H(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hT:function hT(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
hX:function hX(a){this.a=a},
hY:function hY(a){this.a=a},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
dC:function dC(a,b){this.a=a
this.b=b},
bV:function bV(){},
h0:function h0(a){this.a=a},
h1:function h1(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a){this.a=a},
fY:function fY(){},
iH:function iH(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
iG:function iG(){},
iK:function iK(a,b){this.a=a
this.b=b},
ih:function ih(){},
ij:function ij(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
kp:function(a,b){return new H.ag(0,null,null,null,null,null,0,[a,b])},
a6:function(){return new H.ag(0,null,null,null,null,null,0,[null,null])},
aD:function(a){return H.nd(a,new H.ag(0,null,null,null,null,null,0,[null,null]))},
c4:function(a,b){return new P.dF(0,null,null,null,null,null,0,[a,b])},
mS:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mo:function(a,b,c){var t,s
if(P.jG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c9()
C.a.l(s,a)
try{P.mY(a,t)}finally{H.d(C.a.gaZ(s)===a)
s.pop()}s=P.kw(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eO:function(a,b,c){var t,s,r
if(P.jG(a))return b+"..."+c
t=new P.bW(b)
s=$.$get$c9()
C.a.l(s,a)
try{r=t
r.a=P.kw(r.ga0(),a,", ")}finally{H.d(C.a.gaZ(s)===a)
s.pop()}s=t
s.a=s.ga0()+c
s=t.ga0()
return s.charCodeAt(0)==0?s:s},
jG:function(a){var t,s
for(t=0;s=$.$get$c9(),t<s.length;++t)if(a===s[t])return!0
return!1},
mY:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
jx:function(a,b){var t,s
t=P.ah(null,null,null,b)
for(s=J.bv(a);s.p();)t.l(0,s.gq())
return t},
ms:function(a){var t,s,r
t={}
if(P.jG(a))return"{...}"
s=new P.bW("")
try{C.a.l($.$get$c9(),a)
r=s
r.a=r.ga0()+"{"
t.a=!0
a.ag(0,new P.f1(t,s))
t=s
t.a=t.ga0()+"}"}finally{t=$.$get$c9()
H.d(C.a.gaZ(t)===a)
t.pop()}t=s.ga0()
return t.charCodeAt(0)==0?t:t},
jy:function(a,b){var t=new P.eW(null,0,0,0,[b])
t.dj(a,b)
return t},
dF:function dF(a,b,c,d,e,f,g,h){var _=this
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
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i7:function i7(){},
da:function da(){},
y:function y(){},
f1:function f1(a,b){this.a=a
this.b=b},
eW:function eW(a,b,c,d,e){var _=this
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
fO:function fO(){},
fN:function fN(){},
bS:function bS(){},
kw:function(a,b,c){var t=J.bv(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
m5:function(a,b){return J.lp(a,b)},
m7:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
m8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cg:function(a){if(a>=10)return""+a
return"0"+a},
jr:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aM(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mc(a)},
mc:function(a){var t=J.u(a)
if(!!t.$isb9)return t.k(a)
return H.fC(a)},
dV:function(a){return new P.ar(!1,null,null,a)},
k0:function(a,b,c){return new P.ar(!0,a,b,c)},
fD:function(a,b,c){return new P.dr(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.dr(b,c,!0,a,d,"Invalid value")},
ku:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aY(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aY(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dQ(b)
return new P.eK(b,t,!0,a,c,"Index out of range")},
cm:function(a){return new P.hS(a)},
kq:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bv(a);s.p();)C.a.l(t,s.gq())
return t},
a1:function(a){H.j7(H.f(a))},
aA:function aA(){},
I:function I(){},
bb:function bb(a,b){this.a=a
this.b=b},
N:function N(){},
aQ:function aQ(a){this.a=a},
eb:function eb(){},
ec:function ec(){},
bc:function bc(){},
ce:function ce(a){this.a=a},
bh:function bh(){},
ar:function ar(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dr:function dr(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eK:function eK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
c_:function c_(a){this.a=a},
ai:function ai(a){this.a=a},
a3:function a3(a){this.a=a},
dv:function dv(){},
e4:function e4(a){this.a=a},
hS:function hS(a){this.a=a},
ee:function ee(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
W:function W(){},
d6:function d6(){},
b:function b(){},
M:function M(){},
aE:function aE(){},
V:function V(){},
n:function n(){},
bU:function bU(){},
q:function q(){},
bW:function bW(a){this.a=a},
l2:function(a){return a},
iN:function(a){var t,s,r,q,p
if(a==null)return
t=P.a6()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.ao)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
na:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lB(a,new P.iM(t))
return t},
kf:function(){var t=$.ke
if(t==null){t=J.ji(window.navigator.userAgent,"Opera",0)
$.ke=t}return t},
m9:function(){var t,s
t=$.kb
if(t!=null)return t
s=$.kc
if(s==null){s=J.ji(window.navigator.userAgent,"Firefox",0)
$.kc=s}if(s)t="-moz-"
else{s=$.kd
if(s==null){s=!P.kf()&&J.ji(window.navigator.userAgent,"Trident/",0)
$.kd=s}if(s)t="-ms-"
else t=P.kf()?"-o-":"-webkit-"}$.kb=t
return t},
iu:function iu(){},
iw:function iw(a,b){this.a=a
this.b=b},
iM:function iM(a){this.a=a},
iv:function iv(a,b){this.a=a
this.b=b},
ig:function ig(){},
J:function J(){},
dS:function dS(){},
aN:function aN(){},
ef:function ef(){},
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
ez:function ez(){},
eB:function eB(){},
af:function af(){},
aC:function aC(){},
eI:function eI(){},
at:function at(){},
eS:function eS(){},
f2:function f2(){},
f3:function f3(){},
av:function av(){},
fm:function fm(){},
ft:function ft(){},
fy:function fy(){},
fz:function fz(){},
fE:function fE(){},
fF:function fF(){},
bT:function bT(){},
h2:function h2(){},
G:function G(){},
h3:function h3(){},
h4:function h4(){},
dx:function dx(){},
h8:function h8(){},
bY:function bY(){},
aw:function aw(){},
hi:function hi(){},
hq:function hq(){},
hs:function hs(){},
ht:function ht(){},
c1:function c1(){},
il:function il(){},
im:function im(){},
io:function io(){},
cu:function cu(){},
cs:function cs(){},
cz:function cz(){},
cD:function cD(){},
cN:function cN(){},
cW:function cW(){},
cS:function cS(){},
cU:function cU(){},
dX:function dX(){},
fI:function fI(){},
fJ:function fJ(){},
iD:function iD(){},
fT:function fT(){},
ct:function ct(){},
cQ:function cQ(){}},W={
ma:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).M(t,a,b,c)
s.toString
t=new H.dB(new W.S(s),new W.iL(),[W.t])
return t.ga_(t)},
mb:function(a){return"wheel"},
by:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lF(a)
if(typeof s==="string")t=a.tagName}catch(r){H.L(r)}return t},
mN:function(a,b){return document.createElement(a)},
b5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kR:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ak:function(a,b,c,d,e){var t=W.kX(new W.hR(c))
t=new W.hQ(0,a,b,t,!1,[e])
t.dw(a,b,c,!1,e)
return t},
kP:function(a){var t,s
t=document.createElement("a")
s=new W.ip(t,window.location)
s=new W.c2(s)
s.dz(a)
return s},
mQ:function(a,b,c,d){return!0},
mR:function(a,b,c,d){var t,s,r,q,p
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
kS:function(){var t=P.q
t=new W.iA(P.jx(C.q,t),P.ah(null,null,null,t),P.ah(null,null,null,t),P.ah(null,null,null,t),null)
t.dB(null,new H.bK(C.q,new W.iB(),[H.an(C.q,0),null]),["TEMPLATE"],null)
return t},
kX:function(a){var t=$.w
if(t===C.d)return a
return t.ec(a)},
l:function l(){},
dT:function dT(){},
dU:function dU(){},
a2:function a2(){},
dY:function dY(){},
b8:function b8(){},
aO:function aO(){},
cf:function cf(){},
e_:function e_(){},
aP:function aP(){},
e2:function e2(){},
A:function A(){},
ba:function ba(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
ch:function ch(){},
bx:function bx(){},
ci:function ci(){},
e7:function e7(){},
cj:function cj(){},
e8:function e8(){},
ck:function ck(){},
cl:function cl(){},
e9:function e9(){},
ea:function ea(){},
a4:function a4(){},
iL:function iL(){},
i:function i(){},
h:function h(){},
Q:function Q(){},
bF:function bF(){},
ey:function ey(){},
eC:function eC(){},
a5:function a5(){},
cp:function cp(){},
eG:function eG(){},
bG:function bG(){},
cq:function cq(){},
eH:function eH(){},
bH:function bH(){},
bI:function bI(){},
eL:function eL(){},
aV:function aV(){},
eX:function eX(){},
bL:function bL(){},
f5:function f5(){},
bf:function bf(){},
f7:function f7(){},
bM:function bM(){},
a7:function a7(){},
f8:function f8(){},
O:function O(){},
di:function di(){},
fi:function fi(a){this.a=a},
fj:function fj(a){this.a=a},
S:function S(a){this.a=a},
t:function t(){},
dj:function dj(){},
bR:function bR(){},
fs:function fs(){},
fu:function fu(){},
a8:function a8(){},
fx:function fx(){},
fA:function fA(){},
fB:function fB(){},
dq:function dq(){},
fK:function fK(){},
ds:function ds(){},
fM:function fM(){},
fP:function fP(){},
a9:function a9(){},
fQ:function fQ(){},
aa:function aa(){},
fS:function fS(){},
ab:function ab(){},
fX:function fX(){},
X:function X(){},
aj:function aj(){},
dw:function dw(){},
h5:function h5(){},
h6:function h6(){},
bX:function bX(){},
ac:function ac(){},
Y:function Y(){},
h9:function h9(){},
ha:function ha(){},
hc:function hc(){},
ad:function ad(){},
aZ:function aZ(){},
hg:function hg(){},
hh:function hh(){},
bj:function bj(){},
hj:function hj(){},
dA:function dA(){},
aG:function aG(){},
hp:function hp(){},
bl:function bl(){},
hr:function hr(){},
hu:function hu(){},
hv:function hv(){},
b0:function b0(){},
c0:function c0(){},
hx:function hx(a){this.a=a},
hy:function hy(){},
b1:function b1(){},
hG:function hG(){},
dE:function dE(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
i5:function i5(){},
i6:function i6(){},
dG:function dG(){},
iq:function iq(){},
it:function it(){},
ix:function ix(){},
iE:function iE(){},
iF:function iF(){},
hE:function hE(){},
hL:function hL(a){this.a=a},
hP:function hP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hQ:function hQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hR:function hR(a){this.a=a},
c2:function c2(a){this.a=a},
B:function B(){},
dl:function dl(a){this.a=a},
fl:function fl(a){this.a=a},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(){},
ir:function ir(){},
is:function is(){},
iA:function iA(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iB:function iB(){},
iy:function iy(){},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dk:function dk(){},
ip:function ip(a,b){this.a=a
this.b=b},
dI:function dI(a){this.a=a},
iC:function iC(a){this.a=a},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
cr:function cr(){},
cL:function cL(){},
cx:function cx(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cv:function cv(){},
cw:function cw(){},
cy:function cy(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cM:function cM(){},
cO:function cO(){},
cY:function cY(){},
cZ:function cZ(){},
cX:function cX(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
cP:function cP(){},
cR:function cR(){},
cT:function cT(){},
cV:function cV(){},
d_:function d_(){},
d0:function d0(){}},B={
nw:function(a){var t,s
t=document
s=W.aV
W.ak(t,"keydown",new B.j9(),!1,s)
W.ak(t,"keyup",new B.ja(),!1,s)
if(!$.nx)W.ak(t,"mousemove",new B.jb(),!1,W.O)
s=W.O
W.ak(t,"mousedown",new B.jc(),!1,s)
W.ak(t,"mouseup",new B.jd(),!1,s)},
mt:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.k(3))
s=$.$get$iO()
r=$.$get$cb()
q=new T.au(new Float32Array(H.k(16)))
q.aq()
q=new B.fn(a,b,c,0,new T.r(t),-0.02,s,r,q,new T.r(new Float32Array(H.k(3))),new T.r(new Float32Array(H.k(3))),new T.r(new Float32Array(H.k(3))),new T.r(new Float32Array(H.k(3))),"camera:orbit",!1,!0)
q.dk(a,b,c,d)
return q},
j9:function j9(){},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
fn:function fn(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
fq:function fq(){},
fr:function fr(a){this.a=a},
m6:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.r(new Float32Array(H.k(3)))
r.u(t,s,d8)
q=new T.r(new Float32Array(H.k(3)))
q.u(d6,s,d8)
p=new T.r(new Float32Array(H.k(3)))
p.u(d6,d7,d8)
o=new T.r(new Float32Array(H.k(3)))
o.u(t,d7,d8)
n=-d8
m=new T.r(new Float32Array(H.k(3)))
m.u(t,s,n)
l=new T.r(new Float32Array(H.k(3)))
l.u(t,d7,n)
k=new T.r(new Float32Array(H.k(3)))
k.u(d6,d7,n)
j=new T.r(new Float32Array(H.k(3)))
j.u(d6,s,n)
i=new T.r(new Float32Array(H.k(3)))
i.u(t,d7,n)
h=new T.r(new Float32Array(H.k(3)))
h.u(t,d7,d8)
g=new T.r(new Float32Array(H.k(3)))
g.u(d6,d7,d8)
f=new T.r(new Float32Array(H.k(3)))
f.u(d6,d7,n)
e=new T.r(new Float32Array(H.k(3)))
e.u(d6,s,d8)
d=new T.r(new Float32Array(H.k(3)))
d.u(t,s,d8)
c=new T.r(new Float32Array(H.k(3)))
c.u(t,s,n)
b=new T.r(new Float32Array(H.k(3)))
b.u(d6,s,n)
a=new T.r(new Float32Array(H.k(3)))
a.u(d6,s,n)
a0=new T.r(new Float32Array(H.k(3)))
a0.u(d6,d7,n)
a1=new T.r(new Float32Array(H.k(3)))
a1.u(d6,d7,d8)
a2=new T.r(new Float32Array(H.k(3)))
a2.u(d6,s,d8)
a3=new T.r(new Float32Array(H.k(3)))
a3.u(t,s,n)
a4=new T.r(new Float32Array(H.k(3)))
a4.u(t,s,d8)
s=new T.r(new Float32Array(H.k(3)))
s.u(t,d7,d8)
a5=new T.r(new Float32Array(H.k(3)))
a5.u(t,d7,n)
n=new Float32Array(H.k(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.k(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.k(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.k(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.k(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.k(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.k(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.k(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.k(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.k(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.k(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.k(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.k(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.k(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.k(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.k(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.k(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.k(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.k(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.k(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.k(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.k(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.k(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.k(2))
c7[0]=d3
c7[1]=d4
c8=new G.eF(!1,[],[],[],P.a6())
c8.bo("aTexUV")
c8.bo("aNormal")
c8.da(6)
c8.dc([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.d8("aTexUV",[new T.x(n),new T.x(t),new T.x(a6),new T.x(a7),new T.x(a8),new T.x(a9),new T.x(b0),new T.x(b1),new T.x(b2),new T.x(b3),new T.x(b4),new T.x(b5),new T.x(b6),new T.x(b7),new T.x(b8),new T.x(b9),new T.x(c0),new T.x(c1),new T.x(c2),new T.x(c3),new T.x(c4),new T.x(c5),new T.x(c6),new T.x(c7)])
for(c9=0;t=$.$get$kN(),c9<6;++c9){d0=t[c9]
c8.d9("aNormal",[d0,d0,d0,d0])}return c8}},G={
mI:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ak(t,"\n")},
kM:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.c4(a,b)
t.bh(a,s,c)
t.c1(a,s)
r=t.bd(a,s,35713)
if(r!=null&&!r){q=t.bc(a,s)
P.a1("E:Compilation failed:")
P.a1("E:"+G.mI(c))
P.a1("E:Failure:")
P.a1(C.i.a3("E:",q))
throw H.e(q)}return s},
kj:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jl(a[s])
b[t+1]=J.jm(a[s])
b[t+2]=J.jT(a[s])}return b},
me:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jl(a[s])
b[t+1]=J.jm(a[s])}return b},
mf:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jl(a[s])
b[t+1]=J.jm(a[s])
b[t+2]=J.jT(a[s])
b[t+3]=J.lG(a[s])}return b},
md:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b6(a[s],0)
b[t+1]=J.b6(a[s],1)
b[t+2]=J.b6(a[s],2)
b[t+3]=J.b6(a[s],3)}return b},
mP:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gw(s),r=b.x,q=[[P.b,P.o]],p=[P.N],o=[T.aH],n=[T.r],m=[T.x];s.p();){l=s.gq()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.l4>0)H.j7("I: "+k)
continue}j=t.h(0,l)
switch($.$get$T().h(0,l).a){case"vec2":b.a7(l,G.me(H.dM(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a7(l,G.kj(H.dM(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a7(l,G.mf(H.dM(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a7(l,new Float32Array(H.iI(H.dM(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a7(l,G.md(H.dM(j,"$isb",q,"$asb"),null),4)
break
default:if(H.az(!1))H.aI("unknown type for "+H.f(l)+" ["+J.lE(j[0]).k(0)+"] ["+new H.aF(H.iS(j),null).k(0)+"] "+H.f(j))}}},
mD:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ah(null,null,null,P.q)
s=c.b
r=d.b
q=c.f
p=J.lq(b.a)
o=G.kM(b.a,35633,s)
J.jR(b.a,p,o)
n=G.kM(b.a,35632,r)
J.jR(b.a,p,n)
if(q.length>0)J.lU(b.a,p,q,35980)
J.lL(b.a,p)
if(!J.lK(b.a,p,35714))H.E(J.lJ(b.a,p))
t=new G.fH(b,c,d,p,P.jx(c.c,null),P.a6(),P.a6(),t,null,a,!1,!0)
t.dl(a,b,c,d)
return t},
f9:function f9(){},
hn:function hn(){},
dZ:function dZ(){},
e1:function e1(a,b){this.a=a
this.b=b},
ex:function ex(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dz:function dz(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
f4:function f4(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
f6:function f6(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fv:function fv(){},
fH:function fH(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
dt:function dt(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fR:function fR(){},
hb:function hb(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bZ:function bZ(){},
eJ:function eJ(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={dn:function dn(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
_.c=a7},fV:function fV(){},fW:function fW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mr:function(){var t,s,r,q,p,o
t=new P.H(0,$.w,null,[null])
s=new P.dD(t,[null])
r=window.navigator
r=(r&&C.Y).cN(r,!0).an(new D.eZ(s))
q=new D.f_(s)
p=H.an(r,0)
o=$.w
if(o!==C.d)q=P.kT(q,o)
r.ar(new P.bm(null,new P.H(0,o,null,[p]),2,null,q,[p,p]))
return t},
eZ:function eZ(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
f_:function f_(a){this.a=a}},A={
iT:function(a){var t,s
t=C.X.eA(a,0,new A.iU())
s=536870911&t+(C.b.cI(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iU:function iU(){}},T={
bk:function(a,b,c){var t=new T.r(new Float32Array(H.k(3)))
t.u(a,b,c)
return t},
au:function au(a){this.a=a},
x:function x(a){this.a=a},
r:function r(a){this.a=a},
aH:function aH(a){this.a=a}},U={
nq:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t={}
s=document
r=new R.fW(0,0,null,null,null,null)
r.dn(C.p.cM(s,"stats"),"blue","gray")
q=C.p.eP(s,"#webgl-canvas")
p=new G.e1(null,q)
s=(q&&C.J).cL(q,"webgl2",P.aD(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.E(P.cm('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aM(J.lH(s))
if($.l4>0)P.a1("I: "+o)
J.lo(s,0,0,0,1)
J.dP(s,2929)
n=B.mt(15,10,0,q)
s=new T.au(new Float32Array(H.k(16)))
s.aq()
o=new T.au(new Float32Array(H.k(16)))
o.aq()
m=new R.dn(q,p,n,50,1,0.1,1000,s,o,new T.au(new Float32Array(H.k(16))),P.a6(),"perspective",!1,!0)
m.bt()
m.cm(null)
W.ak(window,"resize",m.geT(),!1,W.i)
l=G.mD("solid",p,$.$get$lf(),$.$get$le())
k=new G.f4(P.a6(),"cube",!1,!0)
k.W("cDepthTest",!0)
k.W("cDepthWrite",!0)
k.W("cBlendEquation",$.$get$k1())
k.W("cStencilFunc",$.$get$kv())
k.W("uColor",$.$get$k8())
o=new T.au(new Float32Array(H.k(16)))
o.aq()
k.W("uModelMatrix",o)
j=B.m6(!0,1,0,1,0,1,1,1)
s=l.d
o=l.e.x
i=P.a6()
h=J.ls(s.a)
g=new G.f6(s,h,4,i,o,null,0,-1,null,null,P.a6(),"meshdata:cube",!1,!0)
f=G.kj(j.d,null)
i.i(0,"aPosition",J.jj(s.a))
g.ch=f
g.bn("aPosition",f,3)
e=$.$get$T().h(0,"aPosition")
if(e==null)H.E("Unknown canonical aPosition")
H.d(o.D(0,"aPosition"))
d=o.h(0,"aPosition")
J.dO(s.a,h)
s.cd(0,d,0)
o=i.h(0,"aPosition")
i=e.bp()
J.dN(s.a,34962,o)
J.k_(s.a,d,i,5126,!1,0,0)
o=j.dg()
g.y=J.jj(s.a)
H.d(g.ch!=null)
i=g.ch.length
if(i<768){g.saK(new Uint8Array(H.iI(o)))
g.Q=5121}else if(i<196608){g.saK(new Uint16Array(H.iI(o)))
g.Q=5123}else{g.saK(new Uint32Array(H.iI(o)))
g.Q=5125}J.dO(s.a,h)
o=g.y
i=g.cx
h=J.u(i)
H.d(!!h.$iskJ||!!h.$iskK||!!h.$iskL)
J.dN(s.a,34963,o)
J.jS(s.a,34963,i,35048)
G.mP(j,g)
t.a=null
t.b=null
t.c=0
P.mh([D.mr()],null,!1).an(new U.j5(t,p,k,new U.j4(t,r,n,m,l,k,g)))},
j4:function j4(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j5:function j5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,D,A,T,U]
setFunctionNamesIfNecessary(v)
var $={}
H.ju.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gv:function(a){return H.aX(a)},
k:function(a){return H.fC(a)},
gB:function(a){return new H.aF(H.iS(a),null)}}
J.eP.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.as},
$isaA:1}
J.d9.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.am}}
J.bJ.prototype={
gv:function(a){return 0},
gB:function(a){return C.al},
k:function(a){return String(a)},
$isko:1}
J.fw.prototype={}
J.b_.prototype={}
J.aU.prototype={
k:function(a){var t=a[$.$get$ka()]
return t==null?this.d4(a):J.aM(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjs:1}
J.aS.prototype={
aW:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
aV:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
l:function(a,b){this.aV(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.aV(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.ao)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a3(a)))
a.push(q)}},
cj:function(a,b){return new H.bK(a,b,[H.an(a,0),null])},
ak:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gaY:function(a){if(a.length>0)return a[0]
throw H.e(H.d5())},
gaZ:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.d5())},
bg:function(a,b,c,d,e){var t,s
this.aW(a,"setRange")
P.ku(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aY(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mp())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bU:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a3(a))}return!1},
d_:function(a,b){this.aW(a,"sort")
H.du(a,0,a.length-1,P.nb())},
aD:function(a){return this.d_(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
k:function(a){return P.eO(a,"[","]")},
gw:function(a){return new J.dW(a,a.length,0,null,[H.an(a,0)])},
gv:function(a){return H.aX(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aV(a,"set length")
if(b<0)throw H.e(P.aY(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
return a[b]},
i:function(a,b,c){this.aW(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jt.prototype={}
J.dW.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.ao(t))
r=this.c
if(r>=s){this.sbu(null)
return!1}this.sbu(t[r]);++this.c
return!0},
sbu:function(a){this.d=a}}
J.bd.prototype={
P:function(a,b){var t
if(typeof b!=="number")throw H.e(H.U(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaw(b)
if(this.gaw(a)===t)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw:function(a){return a===0?1/a<0:a<0},
ef:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
eg:function(a,b,c){if(this.P(b,c)>0)throw H.e(H.U(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
f0:function(a,b){var t
if(b>20)throw H.e(P.aY(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaw(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a3:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a+b},
a6:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a-b},
cJ:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a*b},
aF:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bQ(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bQ(a,b)},
bQ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aP:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cI:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a&b)>>>0},
d6:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a^b)>>>0},
aC:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a<b},
aB:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>b},
cK:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>=b},
gB:function(a){return C.av},
$isV:1}
J.d8.prototype={
gB:function(a){return C.au},
$isN:1,
$iso:1,
$isV:1}
J.d7.prototype={
gB:function(a){return C.at},
$isN:1,
$isV:1}
J.aT.prototype={
aG:function(a,b){if(b>=a.length)throw H.e(H.P(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(typeof b!=="string")throw H.e(P.k0(b,null,null))
return a+b},
d0:function(a,b,c){var t
if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bi:function(a,b){return this.d0(a,b,0)},
bk:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fD(b,null,null))
if(b>c)throw H.e(P.fD(b,null,null))
if(c>a.length)throw H.e(P.fD(c,null,null))
return a.substring(b,c)},
d1:function(a,b){return this.bk(a,b,null)},
f_:function(a){return a.toLowerCase()},
ej:function(a,b,c){if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
return H.ny(a,b,c)},
P:function(a,b){var t
if(typeof b!=="string")throw H.e(H.U(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gv:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gB:function(a){return C.an},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.P(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isq:1}
H.c.prototype={$asc:null}
H.be.prototype={
gw:function(a){return new H.db(this,this.gj(this),0,null,[H.ae(this,"be",0)])},
az:function(a,b){return this.d3(0,b)},
eZ:function(a,b){var t,s
t=H.D([],[H.ae(this,"be",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eY:function(a){return this.eZ(a,!0)}}
H.db.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.a_(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a3(t))
q=this.c
if(q>=r){this.saa(null)
return!1}this.saa(s.t(t,q));++this.c
return!0},
saa:function(a){this.d=a}}
H.dc.prototype={
gw:function(a){return new H.f0(null,J.bv(this.a),this.b,this.$ti)},
gj:function(a){return J.dQ(this.a)},
$asW:function(a,b){return[b]}}
H.ed.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f0.prototype={
p:function(){var t=this.b
if(t.p()){this.saa(this.c.$1(t.gq()))
return!0}this.saa(null)
return!1},
gq:function(){return this.a},
saa:function(a){this.a=a},
$asd6:function(a,b){return[b]}}
H.bK.prototype={
gj:function(a){return J.dQ(this.a)},
t:function(a,b){return this.b.$1(J.ly(this.a,b))},
$asc:function(a,b){return[b]},
$asbe:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dB.prototype={
gw:function(a){return new H.hw(J.bv(this.a),this.b,this.$ti)}}
H.hw.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cn.prototype={}
H.je.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jf.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.id.prototype={
seJ:function(a){this.z=a},
seL:function(a){this.ch=a}}
H.b3.prototype={
bT:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aT()},
eS:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.al(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bK();++r.d}this.y=!1}this.aT()},
e4:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eR:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.v("removeRange"))
P.ku(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cX:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eD:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jy(null,null)
this.cx=t}t.R(0,new H.i8(a,c))},
eC:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ax()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jy(null,null)
this.cx=t}t.R(0,this.geK())},
eE:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a1(a)
if(b!=null)P.a1(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aM(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c3(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.L(o)
p=H.am(o)
this.eE(q,p)
if(this.db){this.ax()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n6(r)
u.globalState.d=H.jK(t,"$isb3")
if(t!=null)$=t.geI()
if(this.cx!=null)for(;n=this.cx,!n.gaj(n);)this.cx.cl().$0()}return s},
ci:function(a){return this.b.h(0,a)},
bx:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.cm("Registry: ports must be registered only once."))
t.i(0,a,b)},
aT:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ax()},
ax:function(){var t,s,r
t=this.cx
if(t!=null)t.T(0)
for(t=this.b,s=t.gcF(t),s=s.gw(s);s.p();)s.gq().dF()
t.T(0)
this.c.T(0)
u.globalState.z.al(0,this.a)
this.dx.T(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geI:function(){return this.d},
gek:function(){return this.e}}
H.i8.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hN.prototype={
er:function(){var t=this.a
if(t.b===t.c)return
return t.cl()},
co:function(){var t,s,r
t=this.er()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaj(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cm("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaj(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aD(["command","close"])
r=new H.al(!0,new P.dF(0,null,null,null,null,null,0,[null,P.o])).J(r)
s.toString
self.postMessage(r)}return!1}t.eO()
return!0},
bO:function(){if(self.window!=null)new H.hO(this).$0()
else for(;this.co(););},
am:function(){var t,s,r,q,p
if(!u.globalState.x)this.bO()
else try{this.bO()}catch(r){t=H.L(r)
s=H.am(r)
q=u.globalState.Q
p=P.aD(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.al(!0,P.c4(null,P.o)).J(p)
q.toString
self.postMessage(p)}}}
H.hO.prototype={
$0:function(){if(!this.a.co())return
P.mH(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.b4.prototype={
eO:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.ic.prototype={}
H.eM.prototype={
$0:function(){H.ml(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eN.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bs(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bs(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aT()},
$S:function(){return{func:1,v:true}}}
H.hF.prototype={}
H.bo.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mV(b)
if(t.gek()===s){s=J.a_(r)
switch(s.h(r,0)){case"pause":t.bT(s.h(r,1),s.h(r,2))
break
case"resume":t.eS(s.h(r,1))
break
case"add-ondone":t.e4(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eR(s.h(r,1))
break
case"set-errors-fatal":t.cX(s.h(r,1),s.h(r,2))
break
case"ping":t.eD(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eC(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.al(0,s)
break}return}u.globalState.f.a.R(0,new H.b4(t,new H.ie(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bo){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.ie.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dC(0,this.b)},
$S:function(){return{func:1}}}
H.c6.prototype={
H:function(a,b){var t,s,r
t=P.aD(["command","message","port",this,"msg",b])
s=new H.al(!0,P.c4(null,P.o)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c6){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.d6((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bi.prototype={
dF:function(){this.c=!0
this.b=null},
dC:function(a,b){if(this.c)return
this.b.$1(b)},
$ismB:1}
H.hd.prototype={
dq:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.R(0,new H.b4(s,new H.he(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.aJ(new H.hf(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.he.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hf.prototype={
$0:function(){this.a.c=null
H.j3()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.as.prototype={
gv:function(a){var t=this.a
t=C.b.aP(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.as){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.al.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.u(a)
if(!!t.$isbg)return["buffer",a]
if(!!t.$isaW)return["typed",a]
if(!!t.$ism)return this.cT(a)
if(!!t.$ismi){r=this.gcQ()
q=t.gE(a)
q=H.jz(q,r,H.ae(q,"W",0),null)
q=P.kq(q,!0,H.ae(q,"W",0))
t=t.gcF(a)
t=H.jz(t,r,H.ae(t,"W",0),null)
return["map",q,P.kq(t,!0,H.ae(t,"W",0))]}if(!!t.$isko)return this.cU(a)
if(!!t.$isa)this.cD(a)
if(!!t.$ismB)this.ao(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbo)return this.cV(a)
if(!!t.$isc6)return this.cW(a)
if(!!t.$isb9){p=a.$static_name
if(p==null)this.ao(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isas)return["capability",a.a]
if(!(a instanceof P.n))this.cD(a)
return["dart",u.classIdExtractor(a),this.cS(u.classFieldsExtractor(a))]},
ao:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cD:function(a){return this.ao(a,null)},
cT:function(a){var t
H.d(typeof a!=="string")
t=this.cR(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ao(a,"Can't serialize indexable: ")},
cR:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
cS:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
cU:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ao(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
cW:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cV:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b2.prototype={
U:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.dV("Bad serialized message: "+H.f(a)))
switch(C.a.gaY(a)){case"ref":H.d(J.F(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.F(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.F(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.F(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ae(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.F(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.ae(t),[null])
case"mutable":H.d(J.F(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.d(J.F(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ae(t),[null])
s.fixed$length=Array
return s
case"map":return this.ev(a)
case"sendport":return this.ew(a)
case"raw sendport":H.d(J.F(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eu(a)
case"function":H.d(J.F(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.F(a[0],"capability"))
return new H.as(a[1])
case"dart":H.d(J.F(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ae(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.U(a[t]))
return a},
ev:function(a){var t,s,r,q,p
H.d(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.a6()
C.a.l(this.b,r)
t=J.lM(t,this.ges()).eY(0)
for(q=J.a_(s),p=0;p<t.length;++p)r.i(0,t[p],this.U(q.h(s,p)))
return r},
ew:function(a){var t,s,r,q,p,o,n
H.d(J.F(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ci(r)
if(o==null)return
n=new H.bo(o,s)}else n=new H.c6(t,r,s)
C.a.l(this.b,n)
return n},
eu:function(a){var t,s,r,q,p,o
H.d(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a_(t),p=J.a_(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.U(p.h(s,o))
return r}}
H.fG.prototype={}
H.hk.prototype={
N:function(a){var t,s,r
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
H.dm.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eR.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.ho.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jg.prototype={
$1:function(a){if(!!J.u(a).$isbc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dH.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iZ.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.j_.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j0.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j1.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j2.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b9.prototype={
k:function(a){return"Closure '"+H.dp(this).trim()+"'"},
$isjs:1,
gf4:function(){return this},
$D:null}
H.h7.prototype={}
H.fU.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bw.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bw))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aX(this.a)
else s=typeof t!=="object"?J.aq(t):H.aX(t)
return(s^H.aX(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fC(t)}}
H.hm.prototype={
k:function(a){return this.a}}
H.e0.prototype={
k:function(a){return this.a}}
H.fL.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hz.prototype={
k:function(a){return C.i.a3("Assertion failed: ",P.jr(this.a))}}
H.aF.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.aq(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aF){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ag.prototype={
gj:function(a){return this.a},
gaj:function(a){return this.a===0},
gE:function(a){return new H.eU(this,[H.an(this,0)])},
gcF:function(a){return H.jz(this.gE(this),new H.eQ(this),H.an(this,0),H.an(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bH(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bH(s,b)}else return this.eF(b)},
eF:function(a){var t=this.d
if(t==null)return!1
return this.ai(this.au(t,this.ah(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ab(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ab(r,b)
return s==null?null:s.b}else return this.eG(b)},
eG:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.au(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aL()
this.b=t}this.bw(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aL()
this.c=s}this.bw(s,b,c)}else{r=this.d
if(r==null){r=this.aL()
this.d=r}q=this.ah(b)
p=this.au(r,q)
if(p==null)this.aO(r,q,[this.aM(b,c)])
else{o=this.ai(p,b)
if(o>=0)p[o].b=c
else p.push(this.aM(b,c))}}},
al:function(a,b){if(typeof b==="string")return this.bN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bN(this.c,b)
else return this.eH(b)},
eH:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.au(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bR(q)
return q.b},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ag:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a3(this))
t=t.c}},
bw:function(a,b,c){var t=this.ab(a,b)
if(t==null)this.aO(a,b,this.aM(b,c))
else t.b=c},
bN:function(a,b){var t
if(a==null)return
t=this.ab(a,b)
if(t==null)return
this.bR(t)
this.bI(a,b)
return t.b},
aM:function(a,b){var t,s
t=new H.eT(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bR:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ah:function(a){return J.aq(a)&0x3ffffff},
ai:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
k:function(a){return P.ms(this)},
ab:function(a,b){return a[b]},
au:function(a,b){return a[b]},
aO:function(a,b,c){H.d(c!=null)
a[b]=c},
bI:function(a,b){delete a[b]},
bH:function(a,b){return this.ab(a,b)!=null},
aL:function(){var t=Object.create(null)
this.aO(t,"<non-identifier-key>",t)
this.bI(t,"<non-identifier-key>")
return t},
$ismi:1,
$isM:1,
$asM:null}
H.eQ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eT.prototype={}
H.eU.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eV(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eV.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sbv(null)
return!1}else{this.sbv(t.a)
this.c=this.c.c
return!0}}},
sbv:function(a){this.d=a}}
H.iV.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iW.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.iX.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.bg.prototype={
gB:function(a){return C.ae},
$isbg:1}
H.aW.prototype={$isaW:1}
H.fa.prototype={
gB:function(a){return C.af}}
H.de.prototype={
gj:function(a){return a.length},
$ism:1,
$asm:function(){},
$isp:1,
$asp:function(){}}
H.df.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
a[b]=c}}
H.dg.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.dd.prototype={
gB:function(a){return C.ag},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]},
$iseA:1}
H.fb.prototype={
gB:function(a){return C.ah},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
H.fc.prototype={
gB:function(a){return C.ai},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fd.prototype={
gB:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskl:1}
H.fe.prototype={
gB:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.ff.prototype={
gB:function(a){return C.ao},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskJ:1}
H.fg.prototype={
gB:function(a){return C.ap},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskK:1}
H.dh.prototype={
gB:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fh.prototype={
gB:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskL:1}
H.bN.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.o]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bO.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.N]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.N]}}
H.bP.prototype={
$asm:function(){},
$asc:function(){return[P.N]},
$asp:function(){},
$asb:function(){return[P.N]}}
H.bQ.prototype={
$asm:function(){},
$asc:function(){return[P.o]},
$asp:function(){},
$asb:function(){return[P.o]}}
P.hB.prototype={
$1:function(a){var t,s
H.j3()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hA.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hC.prototype={
$0:function(){H.j3()
this.a.$0()},
$S:function(){return{func:1}}}
P.hD.prototype={
$0:function(){H.j3()
this.a.$0()},
$S:function(){return{func:1}}}
P.eE.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.F(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.F(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eD.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bG(r)}else if(t.b===0&&!this.b)this.d.F(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hH.prototype={
ei:function(a,b){if(a==null)a=new P.bh()
if(this.a.a!==0)throw H.e(new P.ai("Future already completed"))
$.w.toString
this.F(a,b)},
eh:function(a){return this.ei(a,null)}}
P.dD.prototype={
ad:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ai("Future already completed"))
t.by(b)},
F:function(a,b){this.a.bz(a,b)}}
P.iz.prototype={
ad:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ai("Future already completed"))
t.a9(b)},
F:function(a,b){this.a.F(a,b)}}
P.bm.prototype={
eM:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b4(this.d,a.a)},
eB:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bs(s,{func:1,args:[P.n,P.bU]}))return t.eU(s,a.a,a.b)
else return t.b4(s,a.a)}}
P.H.prototype={
b6:function(a,b){var t,s,r
t=$.w
if(t!==C.d){t.toString
if(b!=null)b=P.kT(b,t)}s=new P.H(0,t,null,[null])
r=b==null?1:3
this.ar(new P.bm(null,s,r,a,b,[H.an(this,0),null]))
return s},
an:function(a){return this.b6(a,null)},
f3:function(a){var t,s
t=$.w
s=new P.H(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.an(this,0)
this.ar(new P.bm(null,s,8,a,null,[t,t]))
return s},
bB:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
ar:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jK(this.c,"$isbm")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.ar(a)
return}this.bB(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bq(null,null,t,new P.hT(this,a))}},
bM:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bM(a)
return}this.bB(s)}H.d(this.a>=4)
t.a=this.ac(a)
s=this.b
s.toString
P.bq(null,null,s,new P.i0(t,this))}},
aN:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ac(t)},
ac:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
a9:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.ca(a,"$isaR",t,"$asaR"))if(H.ca(a,"$isH",t,null))P.hW(a,this)
else P.kO(a,this)
else{s=this.aN()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,s)}},
bG:function(a){var t
H.d(this.a<4)
H.d(!J.u(a).$isaR)
t=this.aN()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,t)},
F:function(a,b){var t
H.d(this.a<4)
t=this.aN()
H.d(this.a<4)
this.a=8
this.c=new P.b7(a,b)
P.bn(this,t)},
dG:function(a){return this.F(a,null)},
by:function(a){var t
H.d(this.a<4)
if(H.ca(a,"$isaR",this.$ti,"$asaR")){this.dE(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hV(this,a))},
dE:function(a){var t
if(H.ca(a,"$isH",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.i_(this,a))}else P.hW(a,this)
return}P.kO(a,this)},
bz:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hU(this,a,b))},
$isaR:1,
gaQ:function(){return this.a},
gdY:function(){return this.c}}
P.hT.prototype={
$0:function(){P.bn(this.a,this.b)},
$S:function(){return{func:1}}}
P.i0.prototype={
$0:function(){P.bn(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hX.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.a9(a)},
$S:function(){return{func:1,args:[,]}}}
P.hY.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.F(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hZ.prototype={
$0:function(){this.a.F(this.b,this.c)},
$S:function(){return{func:1}}}
P.hV.prototype={
$0:function(){this.a.bG(this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$0:function(){P.hW(this.b,this.a)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){this.a.F(this.b,this.c)},
$S:function(){return{func:1}}}
P.i3.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cn(q.d)}catch(n){s=H.L(n)
r=H.am(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b7(s,r)
p.a=!0
return}if(!!J.u(t).$isaR){if(t instanceof P.H&&t.gaQ()>=4){if(t.gaQ()===8){q=t
H.d(q.gaQ()===8)
p=this.b
p.b=q.gdY()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.an(new P.i4(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i4.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i2.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b4(r.d,this.c)}catch(q){t=H.L(q)
s=H.am(q)
r=this.a
r.b=new P.b7(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i1.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eM(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eB(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.am(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b7(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dC.prototype={}
P.bV.prototype={
gj:function(a){var t,s
t={}
s=new P.H(0,$.w,null,[P.o])
t.a=0
this.cg(new P.h0(t),!0,new P.h1(t,s),s.gbF())
return s},
gaY:function(a){var t,s
t={}
s=new P.H(0,$.w,null,[H.ae(this,"bV",0)])
t.a=null
t.a=this.cg(new P.fZ(t,this,s),!0,new P.h_(s),s.gbF())
return s}}
P.h0.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h1.prototype={
$0:function(){this.b.a9(this.a.a)},
$S:function(){return{func:1}}}
P.fZ.prototype={
$1:function(a){P.mU(this.a.a,this.c,a)},
$S:function(){return H.n9(function(a){return{func:1,args:[a]}},this.b,"bV")}}
P.h_.prototype={
$0:function(){var t,s,r,q
try{r=H.d5()
throw H.e(r)}catch(q){t=H.L(q)
s=H.am(q)
P.mW(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fY.prototype={}
P.iH.prototype={
$0:function(){return this.a.a9(this.b)},
$S:function(){return{func:1}}}
P.b7.prototype={
k:function(a){return H.f(this.a)},
$isbc:1}
P.iG.prototype={}
P.iK.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bh()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ih.prototype={
eV:function(a){var t,s,r
try{if(C.d===$.w){a.$0()
return}P.kU(null,null,this,a)}catch(r){t=H.L(r)
s=H.am(r)
P.iJ(null,null,this,t,s)}},
eW:function(a,b){var t,s,r
try{if(C.d===$.w){a.$1(b)
return}P.kV(null,null,this,a,b)}catch(r){t=H.L(r)
s=H.am(r)
P.iJ(null,null,this,t,s)}},
eb:function(a){return new P.ij(this,a)},
aU:function(a){return new P.ii(this,a)},
ec:function(a){return new P.ik(this,a)},
h:function(a,b){return},
cn:function(a){if($.w===C.d)return a.$0()
return P.kU(null,null,this,a)},
b4:function(a,b){if($.w===C.d)return a.$1(b)
return P.kV(null,null,this,a,b)},
eU:function(a,b,c){if($.w===C.d)return a.$2(b,c)
return P.n_(null,null,this,a,b,c)}}
P.ij.prototype={
$0:function(){return this.a.cn(this.b)},
$S:function(){return{func:1}}}
P.ii.prototype={
$0:function(){return this.a.eV(this.b)},
$S:function(){return{func:1}}}
P.ik.prototype={
$1:function(a){return this.a.eW(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dF.prototype={
ah:function(a){return H.ns(a)&0x3ffffff},
ai:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i9.prototype={
gw:function(a){var t=new P.c3(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dH(b)},
dH:function(a){var t=this.d
if(t==null)return!1
return this.at(t[this.as(a)],a)>=0},
ci:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.dQ(a)},
dQ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return
return J.b6(s,r).gdJ()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bC(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bC(r,b)}else return this.R(0,b)},
R:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mS()
this.d=t}s=this.as(b)
r=t[s]
if(r==null){q=[this.aH(b)]
H.d(q!=null)
t[s]=q}else{if(this.at(r,b)>=0)return!1
r.push(this.aH(b))}return!0},
al:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bD(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bD(this.c,b)
else return this.dS(0,b)},
dS:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.as(b)]
r=this.at(s,b)
if(r<0)return!1
this.bE(s.splice(r,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bC:function(a,b){var t
if(a[b]!=null)return!1
t=this.aH(b)
H.d(!0)
a[b]=t
return!0},
bD:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bE(t)
delete a[b]
return!0},
aH:function(a){var t,s
t=new P.ia(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bE:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
as:function(a){return J.aq(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.ia.prototype={
gdJ:function(){return this.a}}
P.c3.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sa8(null)
return!1}else{this.sa8(t.a)
this.c=this.c.b
return!0}}},
sa8:function(a){this.d=a}}
P.i7.prototype={}
P.da.prototype={}
P.y.prototype={
gw:function(a){return new H.db(a,this.gj(a),0,null,[H.ae(a,"y",0)])},
t:function(a,b){return this.h(a,b)},
cj:function(a,b){return new H.bK(a,b,[H.ae(a,"y",0),null])},
eA:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a3(a))}return s},
k:function(a){return P.eO(a,"[","]")},
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
P.eW.prototype={
gw:function(a){return new P.ib(this,this.c,this.d,this.b,null,this.$ti)},
gaj:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.E(P.C(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
T:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eO(this,"{","}")},
cl:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.d5());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
R:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bK();++this.d},
bK:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bg(s,0,q,t,r)
C.a.bg(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbP(s)},
dj:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbP(H.D(t,[b]))},
sbP:function(a){this.a=a},
$asc:null}
P.ib.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a3(t))
s=this.d
if(s===this.b){this.sa8(null)
return!1}this.sa8(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa8:function(a){this.e=a}}
P.fO.prototype={
L:function(a,b){var t
for(t=J.bv(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eO(this,"{","}")},
$isc:1,
$asc:null}
P.fN.prototype={}
P.bS.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.aA.prototype={}
P.I.prototype={}
P.bb.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bb))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aP(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m7(H.mA(this))
s=P.cg(H.my(this))
r=P.cg(H.mu(this))
q=P.cg(H.mv(this))
p=P.cg(H.mx(this))
o=P.cg(H.mz(this))
n=P.m8(H.mw(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.bb]}}
P.N.prototype={$isI:1,
$asI:function(){return[P.V]}}
P.aQ.prototype={
aC:function(a,b){return C.b.aC(this.a,b.gdI())},
aB:function(a,b){return C.b.aB(this.a,b.gdI())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aQ))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ec()
s=this.a
if(s<0)return"-"+new P.aQ(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.eb().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isI:1,
$asI:function(){return[P.aQ]}}
P.eb.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.q,args:[P.o]}}}
P.ec.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.q,args:[P.o]}}}
P.bc.prototype={}
P.ce.prototype={
k:function(a){return"Assertion failed"}}
P.bh.prototype={
k:function(a){return"Throw of null."}}
P.ar.prototype={
gaJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaI:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaJ()+s+r
if(!this.a)return q
p=this.gaI()
o=P.jr(this.b)
return q+p+": "+H.f(o)}}
P.dr.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eK.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){H.d(this.a)
if(J.lh(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.v.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.c_.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ai.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a3.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jr(t))+"."}}
P.dv.prototype={
k:function(a){return"Stack Overflow"},
$isbc:1}
P.e4.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hS.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.ee.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.k0(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kr(b,"expando$values")
return s==null?null:H.kr(s,t)}}
P.o.prototype={$isI:1,
$asI:function(){return[P.V]}}
P.W.prototype={
az:function(a,b){return new H.dB(this,b,[H.ae(this,"W",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga_:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.d5())
s=t.gq()
if(t.p())throw H.e(H.mq())
return s},
t:function(a,b){var t,s,r
if(b<0)H.E(P.aY(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
k:function(a){return P.mo(this,"(",")")}}
P.d6.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.M.prototype={$asM:null}
P.aE.prototype={
gv:function(a){return P.n.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.V.prototype={$isI:1,
$asI:function(){return[P.V]}}
P.n.prototype={constructor:P.n,$isn:1,
A:function(a,b){return this===b},
gv:function(a){return H.aX(this)},
k:function(a){return H.fC(this)},
gB:function(a){return new H.aF(H.iS(this),null)},
toString:function(){return this.k(this)}}
P.bU.prototype={}
P.q.prototype={$isI:1,
$asI:function(){return[P.q]}}
P.bW.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga0:function(){return this.a}}
W.l.prototype={}
W.dT.prototype={
k:function(a){return String(a)},
$isa:1}
W.dU.prototype={
k:function(a){return String(a)},
$isa:1}
W.a2.prototype={$isn:1}
W.dY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isp:1,
$asp:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.b8.prototype={$isb8:1}
W.aO.prototype={$isa:1,$isaO:1}
W.cf.prototype={
cL:function(a,b,c){var t=this.dL(a,b,P.na(c,null))
return t},
dL:function(a,b,c){return a.getContext(b,c)}}
W.e_.prototype={
aA:function(a){return P.iN(a.getContextAttributes())}}
W.aP.prototype={$isa:1,
gj:function(a){return a.length}}
W.e2.prototype={$isa:1}
W.A.prototype={$isn:1}
W.ba.prototype={
bA:function(a,b){var t,s
t=$.$get$k9()
s=t[b]
if(typeof s==="string")return s
s=this.e0(a,b)
t[b]=s
return s},
e0:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m9()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e3.prototype={}
W.e5.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ch.prototype={}
W.bx.prototype={
e5:function(a,b){return a.adoptNode(b)},
cM:function(a,b){return a.getElementById(b)},
eP:function(a,b){return a.querySelector(b)}}
W.ci.prototype={$isa:1}
W.e7.prototype={
k:function(a){return String(a)}}
W.cj.prototype={
eo:function(a,b){return a.createHTMLDocument(b)}}
W.e8.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ck.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cl.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gY(a))+" x "+H.f(this.gX(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isJ)return!1
return a.left===t.gb_(b)&&a.top===t.gb7(b)&&this.gY(a)===t.gY(b)&&this.gX(a)===t.gX(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gY(a)
q=this.gX(a)
return W.kR(W.b5(W.b5(W.b5(W.b5(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gX:function(a){return a.height},
gb_:function(a){return a.left},
gb7:function(a){return a.top},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isJ:1,
$asJ:function(){}}
W.e9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$isp:1,
$asp:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.ea.prototype={
gj:function(a){return a.length}}
W.a4.prototype={
ge9:function(a){return new W.hL(a)},
k:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kh
if(t==null){t=H.D([],[W.dk])
s=new W.dl(t)
C.a.l(t,W.kP(null))
C.a.l(t,W.kS())
$.kh=s
d=s}else d=t
t=$.kg
if(t==null){t=new W.dI(d)
$.kg=t
c=t}else{t.a=d
c=t}}if($.aB==null){t=document
s=t.implementation
s=(s&&C.K).eo(s,"")
$.aB=s
$.jq=s.createRange()
s=$.aB
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aB.head;(t&&C.L).O(t,r)}t=$.aB
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jK(s,"$isaO")}t=$.aB
if(!!this.$isaO)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aB.body;(t&&C.n).O(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.W,a.tagName)){t=$.jq;(t&&C.C).cP(t,q)
t=$.jq
p=(t&&C.C).em(t,b)}else{q.innerHTML=b
p=$.aB.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.O(p,s)}t=$.aB.body
if(q==null?t!=null:q!==t)J.lO(q)
c.bf(p)
C.p.e5(document,p)
return p},
en:function(a,b,c){return this.M(a,b,c,null)},
cZ:function(a,b,c,d){a.textContent=null
this.O(a,this.M(a,b,c,d))},
cY:function(a,b){return this.cZ(a,b,null,null)},
a4:function(a,b){return a.getAttribute(b)},
dT:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isn:1,
$isa4:1,
$ish:1,
$ist:1,
geX:function(a){return a.tagName}}
W.iL.prototype={
$1:function(a){return!!J.u(a).$isa4},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$isn:1,$isi:1}
W.h.prototype={
dD:function(a,b,c,d){return a.addEventListener(b,H.aJ(c,1),!1)},
dV:function(a,b,c,d){return a.removeEventListener(b,H.aJ(c,1),!1)},
$isn:1,
$ish:1}
W.Q.prototype={$isn:1,$isQ:1}
W.bF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.Q]},
$isc:1,
$asc:function(){return[W.Q]},
$isp:1,
$asp:function(){return[W.Q]},
$isb:1,
$asb:function(){return[W.Q]},
$isbF:1}
W.ey.prototype={
gj:function(a){return a.length}}
W.eC.prototype={
gj:function(a){return a.length}}
W.a5.prototype={$isn:1}
W.cp.prototype={}
W.eG.prototype={
gj:function(a){return a.length}}
W.bG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cq.prototype={}
W.eH.prototype={
H:function(a,b){return a.send(b)}}
W.bH.prototype={}
W.bI.prototype={$isbI:1}
W.eL.prototype={$isa:1,$isa4:1}
W.aV.prototype={$isn:1,$isi:1,$isaV:1}
W.eX.prototype={
k:function(a){return String(a)}}
W.bL.prototype={}
W.f5.prototype={
gj:function(a){return a.length}}
W.bf.prototype={$isn:1,$ish:1,$isbf:1}
W.f7.prototype={
f5:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bM.prototype={}
W.a7.prototype={$isn:1}
W.f8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.O.prototype={$isn:1,$isi:1,$isO:1}
W.di.prototype={
cO:function(a,b,c){var t,s,r,q
t=W.bf
s=new P.H(0,$.w,null,[t])
r=new P.dD(s,[t])
q=P.aD(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.dM(a,new P.iv([],[]).b8(q),new W.fi(r),new W.fj(r))
return s},
cN:function(a,b){return this.cO(a,!1,b)},
dM:function(a,b,c,d){return a.getUserMedia(b,H.aJ(c,1),H.aJ(d,1))},
$isa:1}
W.fi.prototype={
$1:function(a){this.a.ad(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fj.prototype={
$1:function(a){this.a.eh(a)},
$S:function(){return{func:1,args:[,]}}}
W.S.prototype={
ga_:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.ai("No elements"))
if(s>1)throw H.e(new P.ai("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.O(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lk(t,c,C.A.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.co(t,t.length,-1,null,[H.ae(t,"B",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.A.h(this.a.childNodes,b)},
$asc:function(){return[W.t]},
$asda:function(){return[W.t]},
$asb:function(){return[W.t]},
$asbS:function(){return[W.t]}}
W.t.prototype={
eQ:function(a){var t=a.parentNode
if(t!=null)J.bt(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d2(a):t},
O:function(a,b){return a.appendChild(b)},
dU:function(a,b){return a.removeChild(b)},
dW:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
$ish:1,
$ist:1,
gb2:function(a){return a.previousSibling}}
W.dj.prototype={
b3:function(a){return a.previousNode()}}
W.bR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.fs.prototype={$isa:1}
W.fu.prototype={
gj:function(a){return a.length}}
W.a8.prototype={$isn:1,
gj:function(a){return a.length}}
W.fx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isp:1,
$asp:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.fA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fB.prototype={
H:function(a,b){return a.send(b)}}
W.dq.prototype={
em:function(a,b){return a.createContextualFragment(b)},
cP:function(a,b){return a.selectNodeContents(b)}}
W.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ds.prototype={
H:function(a,b){return a.send(b)}}
W.fM.prototype={
gj:function(a){return a.length}}
W.fP.prototype={$isa:1}
W.a9.prototype={$isn:1,$ish:1}
W.fQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isp:1,
$asp:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$isn:1}
W.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isp:1,
$asp:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ab.prototype={$isn:1,
gj:function(a){return a.length}}
W.fX.prototype={
h:function(a,b){return this.bJ(a,b)},
ag:function(a,b){var t,s
for(t=0;!0;++t){s=this.dP(a,t)
if(s==null)return
b.$2(s,this.bJ(a,s))}},
gj:function(a){return a.length},
bJ:function(a,b){return a.getItem(b)},
dP:function(a,b){return a.key(b)},
$isM:1,
$asM:function(){return[P.q,P.q]}}
W.X.prototype={$isn:1}
W.aj.prototype={}
W.dw.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=W.ma("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.S(s).L(0,new W.S(t))
return s}}
W.h5.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.M(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga_(t)
r.toString
t=new W.S(r)
q=t.ga_(t)
s.toString
q.toString
new W.S(s).L(0,new W.S(q))
return s}}
W.h6.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.M(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga_(t)
s.toString
r.toString
new W.S(s).L(0,new W.S(r))
return s}}
W.bX.prototype={$isbX:1}
W.ac.prototype={$isn:1,$ish:1}
W.Y.prototype={$isn:1,$ish:1}
W.h9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isp:1,
$asp:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.ha.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isp:1,
$asp:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.hc.prototype={
gj:function(a){return a.length}}
W.ad.prototype={$isn:1}
W.aZ.prototype={$isn:1,$isi:1,$isaZ:1}
W.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$isp:1,
$asp:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.hh.prototype={
gj:function(a){return a.length}}
W.bj.prototype={}
W.hj.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dA.prototype={
b3:function(a){return a.previousNode()}}
W.aG.prototype={}
W.hp.prototype={
k:function(a){return String(a)},
$isa:1}
W.bl.prototype={$isbl:1}
W.hr.prototype={
gj:function(a){return a.length}}
W.hu.prototype={
gj:function(a){return a.length}}
W.hv.prototype={
H:function(a,b){return a.send(b)}}
W.b0.prototype={
geq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$isn:1,
$isi:1,
$isO:1,
$isb0:1}
W.c0.prototype={
ge8:function(a){var t,s
t=P.V
s=new P.H(0,$.w,null,[t])
this.dK(a)
this.dX(a,W.kX(new W.hx(new P.iz(s,[t]))))
return s},
dX:function(a,b){return a.requestAnimationFrame(H.aJ(b,1))},
dK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
e6:function(a,b){return a.alert(b)},
$isa:1}
W.hx.prototype={
$1:function(a){this.a.ad(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hy.prototype={$isa:1}
W.b1.prototype={$isa:1}
W.hG.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isJ)return!1
s=a.left
r=t.gb_(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb7(b)
if(s==null?r==null:s===r){s=a.width
r=t.gY(b)
if(s==null?r==null:s===r){s=a.height
t=t.gX(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q
t=J.aq(a.left)
s=J.aq(a.top)
r=J.aq(a.width)
q=J.aq(a.height)
return W.kR(W.b5(W.b5(W.b5(W.b5(0,t),s),r),q))},
$isJ:1,
$asJ:function(){},
gX:function(a){return a.height},
gb_:function(a){return a.left},
gb7:function(a){return a.top},
gY:function(a){return a.width}}
W.dE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]},
$isp:1,
$asp:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.hI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isp:1,
$asp:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hJ.prototype={$isa:1}
W.hK.prototype={
gX:function(a){return a.height},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isp:1,
$asp:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.i6.prototype={$isa:1}
W.dG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isp:1,
$asp:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.iq.prototype={$isa:1}
W.it.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isp:1,
$asp:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.ix.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isp:1,
$asp:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.iE.prototype={$isa:1}
W.iF.prototype={$isa:1}
W.hE.prototype={
ag:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.ao)(t),++p){o=t[p]
b.$2(o,q.a4(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$isM:1,
$asM:function(){return[P.q,P.q]},
gdN:function(){return this.a}}
W.hL.prototype={
h:function(a,b){return J.jn(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hP.prototype={
cg:function(a,b,c,d){return W.ak(this.a,this.b,a,!1,H.an(this,0))}}
W.hM.prototype={}
W.hQ.prototype={
ee:function(a){if(this.b==null)return
this.e3()
this.b=null
this.sdR(null)
return},
e2:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.li(r,this.c,t,!1)}},
e3:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lj(r,this.c,t,!1)}},
dw:function(a,b,c,d,e){this.e2()},
sdR:function(a){this.d=a}}
W.hR.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c2.prototype={
a1:function(a){return $.$get$kQ().C(0,W.by(a))},
S:function(a,b,c){var t,s,r
t=W.by(a)
s=$.$get$jD()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dz:function(a){var t,s
t=$.$get$jD()
if(t.gaj(t)){for(s=0;s<262;++s)t.i(0,C.V[s],W.nh())
for(s=0;s<12;++s)t.i(0,C.r[s],W.ni())}}}
W.B.prototype={
gw:function(a){return new W.co(a,this.gj(a),-1,null,[H.ae(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dl.prototype={
a1:function(a){return C.a.bU(this.a,new W.fl(a))},
S:function(a,b,c){return C.a.bU(this.a,new W.fk(a,b,c))}}
W.fl.prototype={
$1:function(a){return a.a1(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fk.prototype={
$1:function(a){return a.S(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c5.prototype={
a1:function(a){return this.a.C(0,W.by(a))},
S:function(a,b,c){var t,s
t=W.by(a)
s=this.c
if(s.C(0,H.f(t)+"::"+b))return this.d.e7(c)
else if(s.C(0,"*::"+b))return this.d.e7(c)
else{s=this.b
if(s.C(0,H.f(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.f(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
dB:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.az(0,new W.ir())
s=b.az(0,new W.is())
this.b.L(0,t)
r=this.c
r.L(0,C.z)
r.L(0,s)}}
W.ir.prototype={
$1:function(a){return!C.a.C(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.is.prototype={
$1:function(a){return C.a.C(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.iA.prototype={
S:function(a,b,c){if(this.d5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jn(a,"template")==="")return this.e.C(0,b)
return!1}}
W.iB.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iy.prototype={
a1:function(a){var t=J.u(a)
if(!!t.$isbT)return!1
t=!!t.$isG
if(t&&W.by(a)==="foreignObject")return!1
if(t)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.i.bi(b,"on"))return!1
return this.a1(a)}}
W.co.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbL(J.b6(this.a,t))
this.c=t
return!0}this.sbL(null)
this.c=s
return!1},
gq:function(){return this.d},
sbL:function(a){this.d=a}}
W.dk.prototype={}
W.ip.prototype={}
W.dI.prototype={
bf:function(a){new W.iC(this).$2(a,null)},
av:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bt(t,a)}else J.bt(b,a)},
e_:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lC(a)
r=J.jn(s.gdN(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.L(n)}p="element unprintable"
try{p=J.aM(a)}catch(n){H.L(n)}try{o=W.by(a)
this.dZ(a,b,t,p,o,s,r)}catch(n){if(H.L(n) instanceof P.ar)throw n
else{this.av(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dZ:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.av(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a1(a)){this.av(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aM(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.av(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.D(t.slice(0),[H.an(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.S(a,J.lT(p),q.a4(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a4(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a4(t,p)
q.dT(t,p)}}if(!!J.u(a).$isbX)this.bf(a.content)}}
W.iC.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e_(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bt(r,a)}else J.bt(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lD(t)}catch(q){H.L(q)
r=t
J.bt(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.t,W.t]}}}
W.bz.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bD.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bE.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cr.prototype={}
W.cL.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.Q]},
$isb:1,
$asb:function(){return[W.Q]}}
W.cC.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.d1.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.Q]},
$isb:1,
$asb:function(){return[W.Q]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.d4.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.d_.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
P.iu.prototype={
ce:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
C.a.l(t,a)
C.a.l(this.b,null)
return s},
b8:function(a){var t,s,r,q,p
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.u(a)
if(!!s.$isbb)return new Date(a.a)
if(!!s.$isQ)return a
if(!!s.$isb8)return a
if(!!s.$isbF)return a
if(!!s.$isbI)return a
if(!!s.$isbg||!!s.$isaW)return a
if(!!s.$isM){r=this.ce(a)
q=this.b
p=q[r]
t.a=p
if(p!=null)return p
p={}
t.a=p
q[r]=p
s.ag(a,new P.iw(t,this))
return t.a}if(!!s.$isb){r=this.ce(a)
p=this.b[r]
if(p!=null)return p
return this.el(a,r)}throw H.e(new P.c_("structured clone of other type"))},
el:function(a,b){var t,s,r,q
t=J.a_(a)
s=t.gj(a)
r=new Array(s)
this.b[b]=r
for(q=0;q<s;++q)r[q]=this.b8(t.h(a,q))
return r}}
P.iw.prototype={
$2:function(a,b){this.a.a[a]=this.b.b8(b)},
$S:function(){return{func:1,args:[,,]}}}
P.iM.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.iv.prototype={}
P.ig.prototype={}
P.J.prototype={$asJ:null}
P.dS.prototype={$isa:1}
P.aN.prototype={$isa:1}
P.ef.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.ev.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.af.prototype={}
P.aC.prototype={$isa:1}
P.eI.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isn:1}
P.eS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.f2.prototype={$isa:1}
P.f3.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$isn:1}
P.fm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.ft.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fz.prototype={
gj:function(a){return a.length}}
P.fE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bT.prototype={$isa:1,$isbT:1}
P.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.G.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.dk])
C.a.l(t,W.kP(null))
C.a.l(t,W.kS())
C.a.l(t,new W.iy())
c=new W.dI(new W.dl(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).en(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.S(q)
o=t.ga_(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.O(p,r)
return p},
$isa:1,
$isG:1}
P.h3.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h4.prototype={$isa:1}
P.dx.prototype={}
P.h8.prototype={$isa:1}
P.bY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aw.prototype={$isn:1}
P.hi.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.hq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hs.prototype={$isa:1}
P.ht.prototype={$isa:1}
P.c1.prototype={$isa:1}
P.il.prototype={$isa:1}
P.im.prototype={$isa:1}
P.io.prototype={$isa:1}
P.cu.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cs.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cD.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cN.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cU.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.dX.prototype={
gj:function(a){return a.length}}
P.fI.prototype={
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindTexture(b,c)},
bY:function(a,b){return a.blendEquation(b)},
bZ:function(a,b,c){return a.blendFunc(b,c)},
c_:function(a,b,c,d){return a.bufferData(b,c,d)},
c0:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c1:function(a,b){return a.compileShader(b)},
c2:function(a){return a.createBuffer()},
c3:function(a){return a.createProgram()},
c4:function(a,b){return a.createShader(b)},
c5:function(a){return a.createTexture()},
c7:function(a,b){return a.depthMask(b)},
c8:function(a,b){return a.disable(b)},
c9:function(a,b,c,d){return a.drawArrays(b,c,d)},
ca:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cb:function(a,b){return a.enable(b)},
cc:function(a,b){return a.enableVertexAttribArray(b)},
aA:function(a){return P.iN(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cf:function(a,b){return a.linkProgram(b)},
ck:function(a,b,c){return a.pixelStorei(b,c)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b5:function(a,b,c,d,e,f,g,h,i,j){var t
if(g==null)t=!0
else t=!1
if(t){this.aR(a,b,c,d,e,f,P.l2(g))
return}if(!!J.u(g).$isbl)t=!0
else t=!1
if(t){this.aS(a,b,c,d,e,f,g)
return}throw H.e(P.dV("Incorrect number or type of arguments"))},
cp:function(a,b,c,d,e,f,g){return this.b5(a,b,c,d,e,f,g,null,null,null)},
aR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aS:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cq:function(a,b,c,d){return a.texParameterf(b,c,d)},
cr:function(a,b,c,d){return a.texParameteri(b,c,d)},
cs:function(a,b,c){return a.uniform1f(b,c)},
ct:function(a,b,c){return a.uniform1fv(b,c)},
cu:function(a,b,c){return a.uniform1i(b,c)},
cv:function(a,b,c){return a.uniform1iv(b,c)},
cw:function(a,b,c){return a.uniform2fv(b,c)},
cz:function(a,b,c){return a.uniform3fv(b,c)},
cA:function(a,b,c){return a.uniform4fv(b,c)},
cB:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cE:function(a,b){return a.useProgram(b)},
cG:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cH:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fJ.prototype={
ea:function(a,b){return a.beginTransformFeedback(b)},
ed:function(a,b){return a.bindVertexArray(b)},
ep:function(a){return a.createVertexArray()},
ex:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ey:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ez:function(a){return a.endTransformFeedback()},
f1:function(a,b,c,d){this.e1(a,b,c,d)
return},
e1:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f2:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindTexture(b,c)},
bY:function(a,b){return a.blendEquation(b)},
bZ:function(a,b,c){return a.blendFunc(b,c)},
c_:function(a,b,c,d){return a.bufferData(b,c,d)},
c0:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c1:function(a,b){return a.compileShader(b)},
c2:function(a){return a.createBuffer()},
c3:function(a){return a.createProgram()},
c4:function(a,b){return a.createShader(b)},
c5:function(a){return a.createTexture()},
c7:function(a,b){return a.depthMask(b)},
c8:function(a,b){return a.disable(b)},
c9:function(a,b,c,d){return a.drawArrays(b,c,d)},
ca:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cb:function(a,b){return a.enable(b)},
cc:function(a,b){return a.enableVertexAttribArray(b)},
aA:function(a){return P.iN(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cf:function(a,b){return a.linkProgram(b)},
ck:function(a,b,c){return a.pixelStorei(b,c)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b5:function(a,b,c,d,e,f,g,h,i,j){var t
if(g==null)t=!0
else t=!1
if(t){this.aR(a,b,c,d,e,f,P.l2(g))
return}if(!!J.u(g).$isbl)t=!0
else t=!1
if(t){this.aS(a,b,c,d,e,f,g)
return}throw H.e(P.dV("Incorrect number or type of arguments"))},
cp:function(a,b,c,d,e,f,g){return this.b5(a,b,c,d,e,f,g,null,null,null)},
aR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aS:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cq:function(a,b,c,d){return a.texParameterf(b,c,d)},
cr:function(a,b,c,d){return a.texParameteri(b,c,d)},
cs:function(a,b,c){return a.uniform1f(b,c)},
ct:function(a,b,c){return a.uniform1fv(b,c)},
cu:function(a,b,c){return a.uniform1i(b,c)},
cv:function(a,b,c){return a.uniform1iv(b,c)},
cw:function(a,b,c){return a.uniform2fv(b,c)},
cz:function(a,b,c){return a.uniform3fv(b,c)},
cA:function(a,b,c){return a.uniform4fv(b,c)},
cB:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cC:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cE:function(a,b){return a.useProgram(b)},
cG:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cH:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iD.prototype={$isa:1}
P.fT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iN(this.dO(a,b))},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dO:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
B.j9.prototype={
$1:function(a){$.$get$iO().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aV]}}}
B.ja.prototype={
$1:function(a){$.$get$iO().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aV]}}}
B.jb.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.n7=t
$.n8=C.b.a6(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jN=s-C.b.I(window.innerWidth,2)
$.la=-(t-C.b.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.O]}}}
B.jc.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cc=t-C.b.I(window.innerWidth,2)
$.cd=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$cb().i(0,"right",!0)
else $.$get$cb().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.O]}}}
B.jd.prototype={
$1:function(a){if(a.button===2)$.$get$cb().i(0,"right",null)
else $.$get$cb().i(0,"left",null)},
$S:function(){return{func:1,args:[W.O]}}}
B.fn.prototype={
dk:function(a,b,c,d){var t
d.toString
W.ak(d,W.ng().$1(d),new B.fo(this),!1,W.b0)
W.ak(d,"mousemove",new B.fp(this),!1,W.O)
t=W.aZ
W.ak(d,"touchstart",new B.fq(),!1,t)
W.ak(d,"touchmove",new B.fr(this),!1,t)
B.nw(null)}}
B.fo.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.geq(a)*r.k3
if(C.c.a6(r.fy,t)>0)r.fy=H.Z(C.c.a6(r.fy,t))}catch(q){s=H.L(q)
P.a1(s)}},
$S:function(){return{func:1,args:[W.b0]}}}
B.fp.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Z(t.go+C.b.a6($.jN,$.cc)*0.01)
s=t.id
r=$.cd
q=$.la
t.id=H.Z(s+(r-q)*0.01)
$.cc=$.jN
$.cd=q}},
$S:function(){return{func:1,args:[W.O]}}}
B.fq.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a2(t.clientX)
C.c.a2(t.clientY)
$.cc=s
C.c.a2(t.clientX)
$.cd=C.c.a2(t.clientY)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.fr.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a2(t.clientX)
t=C.c.a2(t.clientY)
r=this.a
r.go=H.Z(r.go+C.b.a6(s,$.cc)*0.01)
r.id=H.Z(r.id+($.cd-t)*0.01)
$.cc=s
$.cd=t},
$S:function(){return{func:1,args:[W.aZ]}}}
G.f9.prototype={}
G.hn.prototype={
W:function(a,b){var t=this.d
if(H.az(!t.D(0,a)))H.aI("uniform "+a+" already set")
t.i(0,a,b)},
bq:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aF(H.iS(this),null).k(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gE(s),r=r.gw(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ak(t,"\n")}}
G.dZ.prototype={}
G.e1.prototype={
cd:function(a,b,c){J.lz(this.a,b)
if(c>0)J.lZ(this.a,b,c)}}
G.ex.prototype={}
G.eF.prototype={
bo:function(a){var t=this.e
H.d(!t.D(0,a))
H.d(C.i.bi(a,"a"))
switch($.$get$T().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.x]))
break
case"vec3":t.i(0,a,H.D([],[T.r]))
break
case"vec4":t.i(0,a,H.D([],[T.aH]))
break
case"float":t.i(0,a,H.D([],[P.N]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.o]]))
break
default:if(H.az(!1))H.aI("unknown type for "+a)}},
da:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.ex(t,t+1,t+2,t+3))},
dc:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.r(new Float32Array(3))
q.Z(r)
C.a.l(t,q)}},
d8:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<24;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.x(p))}},
d9:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.r(new Float32Array(3))
p.Z(q)
s.l(t,p)}},
dg:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.D(s,[P.o])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gf7(o)
r[q+1]=o.gf8(o)
r[q+2]=o.gf9(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.ao)(t),++p){m=t[p]
l=m.a
r[q]=l
r[q+1]=m.b
k=m.c
r[q+2]=k
r[q+3]=l
r[q+4]=k
r[q+5]=m.d
q+=6}H.d(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gw(r);r.p();){q=r.gq()
p=$.$get$T().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ak(t," ")}}
G.dz.prototype={}
G.dy.prototype={}
G.f4.prototype={}
G.f6.prototype={
bn:function(a,b,c){var t,s
if(C.i.aG(a,0)===105){if(H.az(C.b.aF(b.length,c)===this.z))H.aI("ChangeAttribute "+this.z)}else{t=C.b.aF(b.length,c)
if(H.az(t===(this.ch.length/3|0)))H.aI("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dN(t.a,34962,s)
J.jS(t.a,34962,b,35048)},
dh:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a7:function(a,b,c){var t,s,r,q,p,o
t=J.jP(a,0)===105
if(t&&this.z===0)this.z=C.b.aF(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.jj(r.a))
this.bn(a,b,c)
q=$.$get$T().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.az(p.D(0,a)))H.aI("unexpected attribute "+a)
o=p.h(0,a)
J.dO(r.a,this.e)
r.cd(0,o,t?1:0)
s=s.h(0,a)
p=q.bp()
J.dN(r.a,34962,s)
J.k_(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gw(r);r.p();){q=r.gq()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ak(s,"  ")},
saK:function(a){this.cx=a}}
G.fv.prototype={
dd:function(a,b){var t=C.b.cJ(a,b)
if(this.z===t)return
this.z=t
this.bt()},
bt:function(){var t,s,r,q,p,o,n
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
t.a5(0,0,1/(p*s))
t.a5(1,1,1/p)
t.a5(2,2,(q+r)/o)
t.a5(3,2,-1)
t.a5(2,3,2*r*q/o)},
bq:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.r(new Float32Array(H.k(3)))
o.u(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.Z(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isaH
k=r?s.gay(n):1
if(!!s.$isr){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.G(t[0],n)
r=C.c.G(t[4],m)
q=C.c.G(t[8],l)
i=t[12]
h=C.c.G(t[1],n)
g=C.c.G(t[5],m)
f=C.c.G(t[9],l)
e=t[13]
d=C.c.G(t[2],n)
c=C.c.G(t[6],m)
b=C.c.G(t[10],l)
a=t[14]
a0=C.c.G(t[3],n)
a1=C.c.G(t[7],m)
a2=C.c.G(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.Z(this.db)
a3.eN(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fH.prototype={
dr:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c3(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.C(0,q))C.a.l(r,q)}return r},
du:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jP(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.j7("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$T().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jo(r.a,k,m)
else if(!!J.u(m).$iskl)J.lX(r.a,k,m)
break
case"float":if(l.c===0)J.lV(r.a,k,m)
else if(!!J.u(m).$iseA)J.lW(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aK(m,"$isau").a
J.jZ(r.a,k,!1,j)}else if(!!J.u(m).$iseA)J.jZ(r.a,k,!1,m)
else if(H.az(!1))H.aI("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.N.gf6(H.aK(m,"$isnF"))
J.jY(r.a,k,!1,j)}else if(!!J.u(m).$iseA)J.jY(r.a,k,!1,m)
else if(H.az(!1))H.aI("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jX(i,k,H.aK(m,"$isaH").a)
else J.jX(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jW(i,k,H.aK(m,"$isr").a)
else J.jW(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jV(i,k,H.aK(m,"$isx").a)
else J.jV(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a3(33984,this.ch)
J.jQ(r.a,j)
j=H.aK(m,"$isbZ").b
J.bu(r.a,3553,j)
j=this.ch
J.jo(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a3(33984,this.ch)
J.jQ(r.a,j)
j=H.aK(m,"$isbZ").b
J.bu(r.a,34067,j)
j=this.ch
J.jo(r.a,k,j)
this.ch=this.ch+1
break
default:H.j7("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.F(m,!0)
i=r.a
if(j)J.dP(i,2929)
else J.jk(i,2929)
break
case"cStencilFunc":H.aK(m,"$isdz")
j=m.a
i=r.a
if(j===1281)J.jk(i,2960)
else{J.dP(i,2960)
i=m.b
h=m.c
J.lQ(r.a,j,i,h)}break
case"cDepthWrite":J.lt(r.a,m)
break
case"cBlendEquation":H.aK(m,"$isdy")
j=m.a
i=r.a
if(j===1281)J.jk(i,3042)
else{J.dP(i,3042)
i=m.b
h=m.c
J.ln(r.a,i,h)
J.lm(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aQ(1000*(s-new P.bb(t,!1).a)).k(0)},
df:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lY(t.a,this.r)
this.ch=0
this.z.T(0)
for(s=0;s<2;++s){r=b[s]
this.du(r.a,r.bq())}q=this.Q
q.T(0)
for(p=a.cy,p=p.gE(p),p=p.gw(p);p.p();)q.l(0,p.gq())
o=this.dr()
if(o.length!==0)P.a1("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dO(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.dh()
m=a.Q
l=a.z
if(n)J.ll(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lx(k,q,p,m,0,l)
else J.lw(k,q,p,m,0)}else{m=t.a
if(l>1)J.lv(m,q,0,p,l)
else J.lu(m,q,0,p)}if(n)J.lA(t.a)},
de:function(a,b){return this.df(a,b,null)},
dl:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.ao)(t),++o){n=t[o]
r.i(0,n,J.jU(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.ao)(t),++o){n=t[o]
r.i(0,n,J.jU(q.a,p,n))}}}
G.z.prototype={
bp:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.dt.prototype={
d7:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<2;++r){q=a[r]
H.d($.$get$T().D(0,q))
H.d(!C.a.C(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aD(t)},
bl:function(a){var t,s,r
H.d(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.az($.$get$T().D(0,r)))H.aI("missing uniform "+r)
H.d(!C.a.C(t,r))
C.a.l(t,r)}C.a.aD(t)},
bm:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$T().D(0,r))
H.d(!C.a.C(t,r))
C.a.l(t,r)}C.a.aD(t)},
dm:function(a,b){H.d(this.b==null)
this.b=this.dv(!0,a,b)},
br:function(a){return this.dm(a,null)},
dv:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.ao)(t),++o){n=t[o]
m=$.$get$T().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.ao)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.ao)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.ao)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.L(q,b)
C.a.l(q,"}")
return C.a.ak(q,"\n")}}
G.fR.prototype={}
G.hb.prototype={
di:function(a,b){var t=this.e
if(t!==1)J.lS(a.a,b,34046,t)
J.dR(a.a,b,10240,this.r)
J.dR(a.a,b,10241,this.f)
if(this.b){J.dR(a.a,b,10242,33071)
J.dR(a.a,b,10243,33071)}}}
G.bZ.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eJ.prototype={
bs:function(a){var t,s
t=this.d
s=this.c
J.bu(t.a,s,this.b)
J.lR(t.a,s,0,6408,6408,5121,a)}}
R.dn.prototype={
cm:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a1("size change "+H.f(s)+" "+H.f(r))
this.dd(s,r)
J.m_(this.go.a,0,0,s,r)}}
R.fV.prototype={
dA:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mN("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bA(r,"float")
r.setProperty(p,"left","")
p=C.u.bA(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.O(t,s)}return t},
dn:function(a,b,c){var t,s,r
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
J.jh(this.a,s)
r=this.dA(b,c,90,30)
this.d=r
J.jh(this.a,r)
t=t.createElement("div")
this.c=t
J.jh(this.a,t)}}
R.fW.prototype={
dt:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.f0(s,2)+" fps"
t=this.c;(t&&C.o).cY(t,b)
r=C.b.I(30*C.w.ef(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).O(t,q)},
ds:function(a){return this.dt(a,"")}}
D.eZ.prototype={
$1:function(a){var t,s
t=document.createElement("video")
t.autoplay=!0
s=new W.hM(t,"playing",!1,[W.i])
s.gaY(s).an(new D.eY(this.a,t))
t.src=(self.URL||self.webkitURL).createObjectURL(a)},
$S:function(){return{func:1,args:[W.bf]}}}
D.eY.prototype={
$1:function(a){return this.a.ad(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
D.f_.prototype={
$1:function(a){P.a1("E:"+("Camera open error "+H.f(a)))
this.a.ad(0,null)},
$S:function(){return{func:1,args:[P.n]}}}
A.iU.prototype={
$2:function(a,b){var t=536870911&a+J.aq(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.n]}}}
T.au.prototype={
a5:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
Z:function(a){var t,s
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
k:function(a){return"[0] "+this.ap(0).k(0)+"\n[1] "+this.ap(1).k(0)+"\n[2] "+this.ap(2).k(0)+"\n[3] "+this.ap(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.au){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.iT(this.a)},
ap:function(a){var t,s
t=new Float32Array(H.k(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aH(t)},
aq:function(){var t=this.a
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
eN:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.x.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.x){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.iT(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.r.prototype={
u:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
Z:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.r){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.iT(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb0())},
gb0:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b1:function(a){var t,s,r
t=Math.sqrt(this.gb0())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aX:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c6:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.r(new Float32Array(H.k(3)))
t.u(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.aH.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aH){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.iT(this.a)},
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
gK:function(a){return this.a[2]},
gay:function(a){return this.a[3]}}
U.j4.prototype={
$1:function(b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
s=this.a
s.c=b5+0
r=this.c
r.go=H.Z(r.go+0.001)
q=r.k4
if(q.h(0,37)!=null)r.go=H.Z(r.go+0.03)
else if(q.h(0,39)!=null)r.go=H.Z(r.go-0.03)
if(q.h(0,38)!=null)r.id=H.Z(r.id+0.03)
else if(q.h(0,40)!=null)r.id=H.Z(r.id-0.03)
if(q.h(0,33)!=null)r.fy=H.Z(r.fy*0.99)
else if(q.h(0,34)!=null)r.fy=H.Z(r.fy*1.01)
if(q.h(0,32)!=null){r.go=0
r.id=0}q=H.Z(C.c.eg(r.id,-1.4707963267948965,1.4707963267948965))
r.id=q
p=r.fy
o=r.go
n=p*Math.cos(q)
m=Math.cos(o)
q=Math.sin(q)
o=Math.sin(o)
l=r.d.a
l[12]=n*m
l[13]=p*q
l[14]=n*o
o=r.k2.a
l[12]=l[12]+o[0]
l[13]=l[13]+o[1]
l[14]=l[14]+o[2]
q=l[12]
p=l[13]
m=l[14]
k=new T.r(new Float32Array(H.k(3)))
k.u(0,1,0)
j=r.e
i=j.a
i[0]=l[12]
i[1]=l[13]
i[2]=l[14]
i=new Float32Array(H.k(3))
h=new T.r(i)
h.Z(j)
i[0]=i[0]-o[0]
i[1]=i[1]-o[1]
i[2]=i[2]-o[2]
h.b1(0)
g=k.c6(h)
g.b1(0)
f=h.c6(g)
f.b1(0)
o=g.aX(j)
e=f.aX(j)
j=h.aX(j)
d=g.a
c=d[0]
b=f.a
a=b[0]
a0=i[0]
a1=d[1]
a2=b[1]
a3=i[1]
d=d[2]
b=b[2]
i=i[2]
l[15]=1
l[14]=-j
l[13]=-e
l[12]=-o
l[11]=0
l[10]=i
l[9]=b
l[8]=d
l[7]=0
l[6]=a3
l[5]=a2
l[4]=a1
l[3]=0
l[2]=a0
l[1]=a
l[0]=c
l[12]=q
l[13]=p
l[14]=m
m=r.f
p=m.a
p[0]=l[2]
p[1]=l[6]
p[2]=l[10]
r=-r.k1
m=Math.sqrt(m.gb0())
g=p[0]/m
f=p[1]/m
h=p[2]/m
m=Math.cos(r)
r=Math.sin(r)
a4=1-m
a5=g*g*a4+m
p=h*r
a6=g*f*a4-p
q=f*r
a7=g*h*a4+q
a8=f*g*a4+p
a9=f*f*a4+m
r=g*r
b0=f*h*a4-r
b1=h*g*a4-q
b2=h*f*a4+r
b3=h*h*a4+m
m=l[0]
r=l[4]
q=l[8]
p=l[1]
c=l[5]
a=l[9]
a0=l[2]
a1=l[6]
a2=l[10]
a3=l[3]
d=l[7]
b=l[11]
l[0]=m*a5+r*a8+q*b1
l[1]=p*a5+c*a8+a*b1
l[2]=a0*a5+a1*a8+a2*b1
l[3]=a3*a5+d*a8+b*b1
l[4]=m*a6+r*a9+q*b2
l[5]=p*a6+c*a9+a*b2
l[6]=a0*a6+a1*a9+a2*b2
l[7]=a3*a6+d*a9+b*b2
l[8]=m*a7+r*b0+q*b3
l[9]=p*a7+c*b0+a*b3
l[10]=a0*a7+a1*b0+a2*b3
l[11]=a3*a7+d*b0+b*b3
try{r=s.b
r.bs(r.f)
q=r.d
r=r.c
J.bu(q.a,r,null)}catch(b4){t=H.L(b4)
P.a1(t)}this.e.de(this.r,[this.d,this.f])
this.b.ds(s.c)
C.I.ge8(window).an(this)},
$S:function(){return{func:1,v:true,args:[P.V]}}}
U.j5.prototype={
$1:function(a){var t,s,r,q,p,o,n
t=J.b6(a,0)
s=this.a
s.a=t
if(t==null)C.I.e6(window,"Could not access camera - do you have a camera installed?")
r=this.b
q=s.a
p=$.$get$kx()
o=J.lr(r.a)
n=new G.eJ(q,"video",o,3553,r,p)
J.bu(r.a,3553,o)
J.lN(r.a,37440,1)
n.bs(q)
p.di(r,3553)
H.d(J.lI(r.a)===0)
J.bu(r.a,3553,null)
s.b=n
this.c.W("uTexture",n)
this.d.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.d2=J.a.prototype.k
J.bJ.prototype.d4=J.bJ.prototype.k
P.W.prototype.d3=P.W.prototype.az
W.a4.prototype.aE=W.a4.prototype.M
W.c5.prototype.d5=W.c5.prototype.S;(function installTearOffs(){installTearOff(H.b3.prototype,"geK",0,0,0,null,["$0"],["ax"],0)
installTearOff(H.al.prototype,"gcQ",0,0,0,null,["$1"],["J"],2)
installTearOff(H.b2.prototype,"ges",0,0,0,null,["$1"],["U"],2)
installTearOff(P,"n3",1,0,0,null,["$1"],["mK"],1)
installTearOff(P,"n4",1,0,0,null,["$1"],["mL"],1)
installTearOff(P,"n5",1,0,0,null,["$1"],["mM"],1)
installTearOff(P,"l0",1,0,0,null,["$0"],["n1"],0)
installTearOff(P.H.prototype,"gbF",0,0,0,null,["$2","$1"],["F","dG"],5)
installTearOff(P,"nb",1,0,0,null,["$2"],["m5"],7)
installTearOff(W,"ng",1,0,0,null,["$1"],["mb"],8)
installTearOff(W,"nh",1,0,0,null,["$4"],["mQ"],4)
installTearOff(W,"ni",1,0,0,null,["$4"],["mR"],4)
installTearOff(W.dj.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(W.dA.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(R.dn.prototype,"geT",0,0,0,null,["$1"],["cm"],6)
installTearOff(U,"l1",1,0,0,null,["$0"],["nq"],0)})();(function inheritance(){inherit(P.n,null)
var t=P.n
inherit(H.ju,t)
inherit(J.a,t)
inherit(J.dW,t)
inherit(P.W,t)
inherit(H.db,t)
inherit(P.d6,t)
inherit(H.cn,t)
inherit(H.b9,t)
inherit(H.id,t)
inherit(H.b3,t)
inherit(H.hN,t)
inherit(H.b4,t)
inherit(H.ic,t)
inherit(H.hF,t)
inherit(H.bi,t)
inherit(H.hd,t)
inherit(H.as,t)
inherit(H.al,t)
inherit(H.b2,t)
inherit(H.fG,t)
inherit(H.hk,t)
inherit(P.bc,t)
inherit(H.dH,t)
inherit(H.aF,t)
inherit(H.ag,t)
inherit(H.eT,t)
inherit(H.eV,t)
inherit(P.hH,t)
inherit(P.bm,t)
inherit(P.H,t)
inherit(P.dC,t)
inherit(P.bV,t)
inherit(P.fY,t)
inherit(P.b7,t)
inherit(P.iG,t)
inherit(P.fO,t)
inherit(P.ia,t)
inherit(P.c3,t)
inherit(P.bS,t)
inherit(P.y,t)
inherit(P.ib,t)
inherit(P.aA,t)
inherit(P.I,t)
inherit(P.bb,t)
inherit(P.V,t)
inherit(P.aQ,t)
inherit(P.dv,t)
inherit(P.hS,t)
inherit(P.ee,t)
inherit(P.b,t)
inherit(P.M,t)
inherit(P.aE,t)
inherit(P.bU,t)
inherit(P.q,t)
inherit(P.bW,t)
inherit(W.e3,t)
inherit(W.hE,t)
inherit(W.c2,t)
inherit(W.B,t)
inherit(W.dl,t)
inherit(W.c5,t)
inherit(W.iy,t)
inherit(W.co,t)
inherit(W.dk,t)
inherit(W.ip,t)
inherit(W.dI,t)
inherit(P.iu,t)
inherit(P.ig,t)
inherit(G.f9,t)
inherit(G.e1,t)
inherit(G.ex,t)
inherit(G.eF,t)
inherit(G.dz,t)
inherit(G.dy,t)
inherit(G.z,t)
inherit(G.dt,t)
inherit(G.hb,t)
inherit(G.bZ,t)
inherit(R.fV,t)
inherit(T.au,t)
inherit(T.x,t)
inherit(T.r,t)
inherit(T.aH,t)
t=J.a
inherit(J.eP,t)
inherit(J.d9,t)
inherit(J.bJ,t)
inherit(J.aS,t)
inherit(J.bd,t)
inherit(J.aT,t)
inherit(H.bg,t)
inherit(H.aW,t)
inherit(W.h,t)
inherit(W.a2,t)
inherit(W.b8,t)
inherit(W.e_,t)
inherit(W.A,t)
inherit(W.cr,t)
inherit(W.e5,t)
inherit(W.e6,t)
inherit(W.e7,t)
inherit(W.cj,t)
inherit(W.ck,t)
inherit(W.cl,t)
inherit(W.cC,t)
inherit(W.ea,t)
inherit(W.i,t)
inherit(W.cB,t)
inherit(W.a5,t)
inherit(W.eG,t)
inherit(W.cA,t)
inherit(W.bI,t)
inherit(W.eX,t)
inherit(W.f5,t)
inherit(W.a7,t)
inherit(W.cy,t)
inherit(W.di,t)
inherit(W.dj,t)
inherit(W.cF,t)
inherit(W.fs,t)
inherit(W.bj,t)
inherit(W.a8,t)
inherit(W.cx,t)
inherit(W.aj,t)
inherit(W.dq,t)
inherit(W.aa,t)
inherit(W.cw,t)
inherit(W.ab,t)
inherit(W.fX,t)
inherit(W.X,t)
inherit(W.cv,t)
inherit(W.hc,t)
inherit(W.ad,t)
inherit(W.cG,t)
inherit(W.hh,t)
inherit(W.dA,t)
inherit(W.hp,t)
inherit(W.hu,t)
inherit(W.hG,t)
inherit(W.cL,t)
inherit(W.cK,t)
inherit(W.cJ,t)
inherit(W.cE,t)
inherit(W.cI,t)
inherit(W.cH,t)
inherit(W.iE,t)
inherit(W.iF,t)
inherit(P.at,t)
inherit(P.cu,t)
inherit(P.av,t)
inherit(P.cz,t)
inherit(P.fy,t)
inherit(P.fz,t)
inherit(P.fE,t)
inherit(P.cs,t)
inherit(P.aw,t)
inherit(P.cD,t)
inherit(P.ht,t)
inherit(P.dX,t)
inherit(P.fI,t)
inherit(P.fJ,t)
inherit(P.iD,t)
inherit(P.ct,t)
t=J.bJ
inherit(J.fw,t)
inherit(J.b_,t)
inherit(J.aU,t)
inherit(J.jt,J.aS)
t=J.bd
inherit(J.d8,t)
inherit(J.d7,t)
t=P.W
inherit(H.c,t)
inherit(H.dc,t)
inherit(H.dB,t)
t=H.c
inherit(H.be,t)
inherit(H.eU,t)
inherit(H.ed,H.dc)
t=P.d6
inherit(H.f0,t)
inherit(H.hw,t)
t=H.be
inherit(H.bK,t)
inherit(P.eW,t)
t=H.b9
inherit(H.je,t)
inherit(H.jf,t)
inherit(H.i8,t)
inherit(H.hO,t)
inherit(H.eM,t)
inherit(H.eN,t)
inherit(H.ie,t)
inherit(H.he,t)
inherit(H.hf,t)
inherit(H.jg,t)
inherit(H.iZ,t)
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.j1,t)
inherit(H.j2,t)
inherit(H.h7,t)
inherit(H.eQ,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.iX,t)
inherit(P.hB,t)
inherit(P.hA,t)
inherit(P.hC,t)
inherit(P.hD,t)
inherit(P.eE,t)
inherit(P.eD,t)
inherit(P.hT,t)
inherit(P.i0,t)
inherit(P.hX,t)
inherit(P.hY,t)
inherit(P.hZ,t)
inherit(P.hV,t)
inherit(P.i_,t)
inherit(P.hU,t)
inherit(P.i3,t)
inherit(P.i4,t)
inherit(P.i2,t)
inherit(P.i1,t)
inherit(P.h0,t)
inherit(P.h1,t)
inherit(P.fZ,t)
inherit(P.h_,t)
inherit(P.iH,t)
inherit(P.iK,t)
inherit(P.ij,t)
inherit(P.ii,t)
inherit(P.ik,t)
inherit(P.f1,t)
inherit(P.eb,t)
inherit(P.ec,t)
inherit(W.iL,t)
inherit(W.fi,t)
inherit(W.fj,t)
inherit(W.hx,t)
inherit(W.hR,t)
inherit(W.fl,t)
inherit(W.fk,t)
inherit(W.ir,t)
inherit(W.is,t)
inherit(W.iB,t)
inherit(W.iC,t)
inherit(P.iw,t)
inherit(P.iM,t)
inherit(B.j9,t)
inherit(B.ja,t)
inherit(B.jb,t)
inherit(B.jc,t)
inherit(B.jd,t)
inherit(B.fo,t)
inherit(B.fp,t)
inherit(B.fq,t)
inherit(B.fr,t)
inherit(D.eZ,t)
inherit(D.eY,t)
inherit(D.f_,t)
inherit(A.iU,t)
inherit(U.j4,t)
inherit(U.j5,t)
t=H.hF
inherit(H.bo,t)
inherit(H.c6,t)
t=P.bc
inherit(H.dm,t)
inherit(H.eR,t)
inherit(H.ho,t)
inherit(H.hm,t)
inherit(H.e0,t)
inherit(H.fL,t)
inherit(P.ce,t)
inherit(P.bh,t)
inherit(P.ar,t)
inherit(P.v,t)
inherit(P.c_,t)
inherit(P.ai,t)
inherit(P.a3,t)
inherit(P.e4,t)
t=H.h7
inherit(H.fU,t)
inherit(H.bw,t)
inherit(H.hz,P.ce)
t=H.aW
inherit(H.fa,t)
inherit(H.de,t)
t=H.de
inherit(H.bO,t)
inherit(H.bN,t)
inherit(H.bP,H.bO)
inherit(H.df,H.bP)
inherit(H.bQ,H.bN)
inherit(H.dg,H.bQ)
t=H.df
inherit(H.dd,t)
inherit(H.fb,t)
t=H.dg
inherit(H.fc,t)
inherit(H.fd,t)
inherit(H.fe,t)
inherit(H.ff,t)
inherit(H.fg,t)
inherit(H.dh,t)
inherit(H.fh,t)
t=P.hH
inherit(P.dD,t)
inherit(P.iz,t)
inherit(P.ih,P.iG)
inherit(P.dF,H.ag)
inherit(P.fN,P.fO)
inherit(P.i7,P.fN)
inherit(P.i9,P.i7)
inherit(P.da,P.bS)
t=P.V
inherit(P.N,t)
inherit(P.o,t)
t=P.ar
inherit(P.dr,t)
inherit(P.eK,t)
t=W.h
inherit(W.t,t)
inherit(W.bB,t)
inherit(W.e2,t)
inherit(W.ey,t)
inherit(W.bH,t)
inherit(W.bf,t)
inherit(W.bM,t)
inherit(W.fB,t)
inherit(W.ds,t)
inherit(W.fP,t)
inherit(W.a9,t)
inherit(W.bA,t)
inherit(W.ac,t)
inherit(W.Y,t)
inherit(W.bz,t)
inherit(W.hr,t)
inherit(W.hv,t)
inherit(W.c0,t)
inherit(W.hy,t)
inherit(W.b1,t)
inherit(W.iq,t)
t=W.t
inherit(W.a4,t)
inherit(W.aP,t)
inherit(W.bx,t)
inherit(W.ci,t)
inherit(W.hJ,t)
t=W.a4
inherit(W.l,t)
inherit(P.G,t)
t=W.l
inherit(W.dT,t)
inherit(W.dU,t)
inherit(W.aO,t)
inherit(W.cf,t)
inherit(W.ch,t)
inherit(W.eC,t)
inherit(W.cp,t)
inherit(W.eL,t)
inherit(W.bL,t)
inherit(W.fM,t)
inherit(W.dw,t)
inherit(W.h5,t)
inherit(W.h6,t)
inherit(W.bX,t)
inherit(W.i6,t)
inherit(W.bE,W.bB)
inherit(W.dY,W.bE)
inherit(W.ba,W.cr)
inherit(W.e8,W.ck)
inherit(W.d4,W.cC)
inherit(W.e9,W.d4)
inherit(W.Q,W.b8)
inherit(W.d2,W.cB)
inherit(W.bF,W.d2)
inherit(W.cX,W.cA)
inherit(W.bG,W.cX)
inherit(W.cq,W.bx)
inherit(W.eH,W.bH)
inherit(W.aG,W.i)
t=W.aG
inherit(W.aV,t)
inherit(W.O,t)
inherit(W.aZ,t)
inherit(W.f7,W.bM)
inherit(W.cZ,W.cy)
inherit(W.f8,W.cZ)
inherit(W.S,P.da)
inherit(W.cY,W.cF)
inherit(W.bR,W.cY)
t=W.bj
inherit(W.fu,t)
inherit(W.fK,t)
inherit(W.hj,t)
inherit(W.cO,W.cx)
inherit(W.fx,W.cO)
inherit(W.fA,W.aj)
inherit(W.bD,W.bA)
inherit(W.fQ,W.bD)
inherit(W.cR,W.cw)
inherit(W.fS,W.cR)
inherit(W.cP,W.cv)
inherit(W.h9,W.cP)
inherit(W.bC,W.bz)
inherit(W.ha,W.bC)
inherit(W.cV,W.cG)
inherit(W.hg,W.cV)
inherit(W.bl,W.bL)
inherit(W.b0,W.O)
inherit(W.d_,W.cL)
inherit(W.dE,W.d_)
inherit(W.cM,W.cK)
inherit(W.hI,W.cM)
inherit(W.hK,W.cl)
inherit(W.cT,W.cJ)
inherit(W.i5,W.cT)
inherit(W.d1,W.cE)
inherit(W.dG,W.d1)
inherit(W.d3,W.cI)
inherit(W.it,W.d3)
inherit(W.d0,W.cH)
inherit(W.ix,W.d0)
inherit(W.hL,W.hE)
inherit(W.hP,P.bV)
inherit(W.hM,W.hP)
inherit(W.hQ,P.fY)
inherit(W.iA,W.c5)
inherit(P.iv,P.iu)
inherit(P.J,P.ig)
t=P.G
inherit(P.aC,t)
inherit(P.aN,t)
inherit(P.ef,t)
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
inherit(P.ez,t)
inherit(P.f2,t)
inherit(P.f3,t)
inherit(P.ft,t)
inherit(P.bT,t)
inherit(P.h4,t)
inherit(P.hs,t)
inherit(P.c1,t)
inherit(P.il,t)
inherit(P.im,t)
inherit(P.io,t)
t=P.aC
inherit(P.dS,t)
inherit(P.eB,t)
inherit(P.af,t)
inherit(P.eI,t)
inherit(P.h3,t)
inherit(P.dx,t)
inherit(P.hq,t)
inherit(P.cN,P.cu)
inherit(P.eS,P.cN)
inherit(P.cW,P.cz)
inherit(P.fm,P.cW)
inherit(P.fF,P.af)
inherit(P.cU,P.cs)
inherit(P.h2,P.cU)
t=P.dx
inherit(P.h8,t)
inherit(P.bY,t)
inherit(P.cS,P.cD)
inherit(P.hi,P.cS)
inherit(P.cQ,P.ct)
inherit(P.fT,P.cQ)
t=G.f9
inherit(G.fR,t)
inherit(G.hn,t)
inherit(G.f6,t)
inherit(G.fH,t)
inherit(G.dZ,G.fR)
inherit(B.fn,G.dZ)
t=G.hn
inherit(G.f4,t)
inherit(G.fv,t)
inherit(G.eJ,G.bZ)
inherit(R.dn,G.fv)
inherit(R.fW,R.fV)
mixin(H.bN,P.y)
mixin(H.bO,P.y)
mixin(H.bP,H.cn)
mixin(H.bQ,H.cn)
mixin(P.bS,P.y)
mixin(W.bz,P.y)
mixin(W.bA,P.y)
mixin(W.bB,P.y)
mixin(W.bC,W.B)
mixin(W.bD,W.B)
mixin(W.bE,W.B)
mixin(W.cr,W.e3)
mixin(W.cL,P.y)
mixin(W.cx,P.y)
mixin(W.cE,P.y)
mixin(W.cF,P.y)
mixin(W.cG,P.y)
mixin(W.cH,P.y)
mixin(W.cI,P.y)
mixin(W.cJ,P.y)
mixin(W.cK,P.y)
mixin(W.cv,P.y)
mixin(W.cw,P.y)
mixin(W.cy,P.y)
mixin(W.cA,P.y)
mixin(W.cB,P.y)
mixin(W.cC,P.y)
mixin(W.cM,W.B)
mixin(W.cO,W.B)
mixin(W.cY,W.B)
mixin(W.cZ,W.B)
mixin(W.cX,W.B)
mixin(W.d1,W.B)
mixin(W.d2,W.B)
mixin(W.d3,W.B)
mixin(W.d4,W.B)
mixin(W.cP,W.B)
mixin(W.cR,W.B)
mixin(W.cT,W.B)
mixin(W.cV,W.B)
mixin(W.d_,W.B)
mixin(W.d0,W.B)
mixin(P.cu,P.y)
mixin(P.cs,P.y)
mixin(P.cz,P.y)
mixin(P.cD,P.y)
mixin(P.cN,W.B)
mixin(P.cW,W.B)
mixin(P.cS,W.B)
mixin(P.cU,W.B)
mixin(P.ct,P.y)
mixin(P.cQ,W.B)})();(function constants(){C.n=W.aO.prototype
C.J=W.cf.prototype
C.u=W.ba.prototype
C.o=W.ch.prototype
C.K=W.cj.prototype
C.L=W.cp.prototype
C.p=W.cq.prototype
C.M=J.a.prototype
C.a=J.aS.prototype
C.w=J.d7.prototype
C.b=J.d8.prototype
C.N=J.d9.prototype
C.c=J.bd.prototype
C.i=J.aT.prototype
C.U=J.aU.prototype
C.X=H.dd.prototype
C.Y=W.di.prototype
C.A=W.bR.prototype
C.B=J.fw.prototype
C.C=W.dq.prototype
C.H=W.dw.prototype
C.t=J.b_.prototype
C.aw=W.b0.prototype
C.I=W.c0.prototype
C.d=new P.ih()
C.v=new P.aQ(0)
C.O=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.P=function(hooks) {
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
C.x=function(hooks) { return hooks; }

C.Q=function(getTagFallback) {
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
C.R=function() {
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
C.S=function(hooks) {
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
C.T=function(hooks) {
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
C.y=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.z=makeConstList([])
C.q=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.r=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.Z=new G.z("vec3","vertex btangents",0)
C.e=new G.z("vec3","",0)
C.a_=new G.z("vec4","delta from light",0)
C.m=new G.z("","",0)
C.D=new G.z("vec3","vertex coordinates",0)
C.a0=new G.z("vec3","vertex binormals",0)
C.E=new G.z("vec4","for wireframe",0)
C.a1=new G.z("vec4","per vertex color",0)
C.a2=new G.z("float","for normal maps",0)
C.j=new G.z("mat4","",0)
C.a4=new G.z("mat4","",4)
C.a3=new G.z("mat4","",128)
C.f=new G.z("float","",0)
C.a5=new G.z("float","",4)
C.a6=new G.z("float","depth for shadowmaps",0)
C.h=new G.z("sampler2D","",0)
C.a7=new G.z("float","for bump maps",0)
C.a8=new G.z("vec2","texture uvs",0)
C.a9=new G.z("float","time since program start in sec",0)
C.k=new G.z("vec2","",0)
C.aa=new G.z("samplerCube","",0)
C.l=new G.z("vec4","",0)
C.ab=new G.z("vec3","vertex normals",0)
C.ac=new G.z("sampler2DShadow","",0)
C.F=new G.z("vec3","per vertex color",0)
C.G=new G.z("mat3","",0)
C.ad=new G.z("vec3","vertex tangents",0)
C.ae=H.K("nA")
C.af=H.K("nB")
C.ag=H.K("eA")
C.ah=H.K("nC")
C.ai=H.K("nD")
C.aj=H.K("kl")
C.ak=H.K("nE")
C.al=H.K("ko")
C.am=H.K("aE")
C.an=H.K("q")
C.ao=H.K("kJ")
C.ap=H.K("kK")
C.aq=H.K("nG")
C.ar=H.K("kL")
C.as=H.K("aA")
C.at=H.K("N")
C.au=H.K("o")
C.av=H.K("V")})();(function staticFields(){$.ks="$cachedFunction"
$.kt="$cachedInvocation"
$.k5=null
$.k3=null
$.jE=!1
$.jI=null
$.kY=null
$.lc=null
$.iP=null
$.iY=null
$.jJ=null
$.bp=null
$.c7=null
$.c8=null
$.jF=!1
$.w=C.d
$.ki=0
$.aB=null
$.jq=null
$.kh=null
$.kg=null
$.ke=null
$.kd=null
$.kc=null
$.kb=null
$.n7=0
$.n8=0
$.jN=0
$.la=0
$.cc=0
$.cd=0
$.nx=!1
$.l4=0})();(function lazyInitializers(){lazy($,"ka","$get$ka",function(){return H.l7("_$dart_dartClosure")})
lazy($,"jv","$get$jv",function(){return H.l7("_$dart_js")})
lazy($,"km","$get$km",function(){return H.mm()})
lazy($,"kn","$get$kn",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ki
$.ki=t+1
t="expando$key$"+t}return new P.ee(null,t,[P.o])})
lazy($,"ky","$get$ky",function(){return H.ax(H.hl({
toString:function(){return"$receiver$"}}))})
lazy($,"kz","$get$kz",function(){return H.ax(H.hl({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kA","$get$kA",function(){return H.ax(H.hl(null))})
lazy($,"kB","$get$kB",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kF","$get$kF",function(){return H.ax(H.hl(void 0))})
lazy($,"kG","$get$kG",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kD","$get$kD",function(){return H.ax(H.kE(null))})
lazy($,"kC","$get$kC",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kI","$get$kI",function(){return H.ax(H.kE(void 0))})
lazy($,"kH","$get$kH",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jC","$get$jC",function(){return P.mJ()})
lazy($,"kk","$get$kk",function(){return P.mO(null,P.aE)})
lazy($,"c9","$get$c9",function(){return[]})
lazy($,"k9","$get$k9",function(){return{}})
lazy($,"kQ","$get$kQ",function(){return P.jx(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jD","$get$jD",function(){return P.a6()})
lazy($,"iO","$get$iO",function(){return P.kp(P.o,P.aA)})
lazy($,"cb","$get$cb",function(){return P.kp(P.q,P.aA)})
lazy($,"kv","$get$kv",function(){return new G.dz(1281,0,4294967295)})
lazy($,"k1","$get$k1",function(){return new G.dy(1281,1281,1281)})
lazy($,"T","$get$T",function(){return P.aD(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.F,"aColorAlpha",C.a1,"aPosition",C.D,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.E,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.F,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.D,"vPositionFromLight",C.a_,"vCenter",C.E,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kx","$get$kx",function(){var t=new G.hb(!1,!1,!1,!0,1,9729,9729)
t.b=!0
return t})
lazy($,"k8","$get$k8",function(){return T.bk(0,0,0)})
lazy($,"lf","$get$lf",function(){var t=new G.dt("Textured",null,[],[],[],[],0,P.a6())
t.d7(["aPosition","aTexUV"])
t.bl(["uPerspectiveViewMatrix","uModelMatrix"])
t.bm(["vTexUV"])
t.br(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"le","$get$le",function(){var t=new G.dt("TexturedF",null,[],[],[],[],0,P.a6())
t.bm(["vTexUV"])
t.bl(["uColor","uTexture"])
t.br(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"kN","$get$kN",function(){return[T.bk(0,0,1),T.bk(0,0,-1),T.bk(0,1,0),T.bk(0,-1,0),T.bk(1,0,0),T.bk(-1,0,0)]})})()
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
mangledGlobalNames:{o:"int",N:"double",V:"num",q:"String",aA:"bool",aE:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.aA,args:[W.a4,P.q,P.q,W.c2]},{func:1,v:true,args:[P.n],opt:[P.bU]},{func:1,v:true,args:[W.i]},{func:1,ret:P.o,args:[P.I,P.I]},{func:1,ret:P.q,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bg,ArrayBufferView:H.aW,DataView:H.fa,Float32Array:H.dd,Float64Array:H.fb,Int16Array:H.fc,Int32Array:H.fd,Int8Array:H.fe,Uint16Array:H.ff,Uint32Array:H.fg,Uint8ClampedArray:H.dh,CanvasPixelArray:H.dh,Uint8Array:H.fh,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dT,HTMLAreaElement:W.dU,AudioTrack:W.a2,AudioTrackList:W.dY,Blob:W.b8,HTMLBodyElement:W.aO,HTMLCanvasElement:W.cf,CanvasRenderingContext2D:W.e_,CDATASection:W.aP,CharacterData:W.aP,Comment:W.aP,ProcessingInstruction:W.aP,Text:W.aP,CompositorWorker:W.e2,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.ba,MSStyleCSSProperties:W.ba,CSS2Properties:W.ba,DataTransferItemList:W.e5,DeviceAcceleration:W.e6,HTMLDivElement:W.ch,XMLDocument:W.bx,Document:W.bx,DocumentFragment:W.ci,ShadowRoot:W.ci,DOMException:W.e7,DOMImplementation:W.cj,DOMPoint:W.e8,DOMPointReadOnly:W.ck,DOMRectReadOnly:W.cl,DOMStringList:W.e9,DOMTokenList:W.ea,Element:W.a4,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.Q,FileList:W.bF,FileWriter:W.ey,HTMLFormElement:W.eC,Gamepad:W.a5,HTMLHeadElement:W.cp,History:W.eG,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,HTMLDocument:W.cq,XMLHttpRequest:W.eH,XMLHttpRequestUpload:W.bH,XMLHttpRequestEventTarget:W.bH,ImageData:W.bI,HTMLInputElement:W.eL,KeyboardEvent:W.aV,Location:W.eX,HTMLAudioElement:W.bL,HTMLMediaElement:W.bL,MediaList:W.f5,MediaStream:W.bf,MIDIOutput:W.f7,MIDIInput:W.bM,MIDIPort:W.bM,MimeType:W.a7,MimeTypeArray:W.f8,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,Navigator:W.di,Attr:W.t,Node:W.t,NodeIterator:W.dj,NodeList:W.bR,RadioNodeList:W.bR,Path2D:W.fs,Perspective:W.fu,Plugin:W.a8,PluginArray:W.fx,PositionValue:W.fA,PresentationConnection:W.fB,Range:W.dq,Rotation:W.fK,RTCDataChannel:W.ds,DataChannel:W.ds,HTMLSelectElement:W.fM,SharedWorker:W.fP,SourceBuffer:W.a9,SourceBufferList:W.fQ,SpeechGrammar:W.aa,SpeechGrammarList:W.fS,SpeechRecognitionResult:W.ab,Storage:W.fX,CSSStyleSheet:W.X,StyleSheet:W.X,CalcLength:W.aj,KeywordValue:W.aj,LengthValue:W.aj,NumberValue:W.aj,SimpleLength:W.aj,TransformValue:W.aj,StyleValue:W.aj,HTMLTableElement:W.dw,HTMLTableRowElement:W.h5,HTMLTableSectionElement:W.h6,HTMLTemplateElement:W.bX,TextTrack:W.ac,TextTrackCue:W.Y,VTTCue:W.Y,TextTrackCueList:W.h9,TextTrackList:W.ha,TimeRanges:W.hc,Touch:W.ad,TouchEvent:W.aZ,TouchList:W.hg,TrackDefaultList:W.hh,Matrix:W.bj,Skew:W.bj,TransformComponent:W.bj,Translation:W.hj,TreeWalker:W.dA,CompositionEvent:W.aG,FocusEvent:W.aG,TextEvent:W.aG,SVGZoomEvent:W.aG,UIEvent:W.aG,URL:W.hp,HTMLVideoElement:W.bl,VideoTrackList:W.hr,VTTRegionList:W.hu,WebSocket:W.hv,WheelEvent:W.b0,Window:W.c0,DOMWindow:W.c0,Worker:W.hy,CompositorWorkerGlobalScope:W.b1,DedicatedWorkerGlobalScope:W.b1,ServiceWorkerGlobalScope:W.b1,SharedWorkerGlobalScope:W.b1,WorkerGlobalScope:W.b1,ClientRect:W.hG,ClientRectList:W.dE,DOMRectList:W.dE,CSSRuleList:W.hI,DocumentType:W.hJ,DOMRect:W.hK,GamepadList:W.i5,HTMLFrameSetElement:W.i6,NamedNodeMap:W.dG,MozNamedAttrMap:W.dG,ServiceWorker:W.iq,SpeechRecognitionResultList:W.it,StyleSheetList:W.ix,WorkerLocation:W.iE,WorkerNavigator:W.iF,SVGAElement:P.dS,SVGAnimateElement:P.aN,SVGAnimateMotionElement:P.aN,SVGAnimateTransformElement:P.aN,SVGAnimationElement:P.aN,SVGSetElement:P.aN,SVGFEBlendElement:P.ef,SVGFEColorMatrixElement:P.eg,SVGFEComponentTransferElement:P.eh,SVGFECompositeElement:P.ei,SVGFEConvolveMatrixElement:P.ej,SVGFEDiffuseLightingElement:P.ek,SVGFEDisplacementMapElement:P.el,SVGFEFloodElement:P.em,SVGFEGaussianBlurElement:P.en,SVGFEImageElement:P.eo,SVGFEMergeElement:P.ep,SVGFEMorphologyElement:P.eq,SVGFEOffsetElement:P.er,SVGFEPointLightElement:P.es,SVGFESpecularLightingElement:P.et,SVGFESpotLightElement:P.eu,SVGFETileElement:P.ev,SVGFETurbulenceElement:P.ew,SVGFilterElement:P.ez,SVGForeignObjectElement:P.eB,SVGCircleElement:P.af,SVGEllipseElement:P.af,SVGLineElement:P.af,SVGPathElement:P.af,SVGPolygonElement:P.af,SVGPolylineElement:P.af,SVGGeometryElement:P.af,SVGClipPathElement:P.aC,SVGDefsElement:P.aC,SVGGElement:P.aC,SVGSwitchElement:P.aC,SVGGraphicsElement:P.aC,SVGImageElement:P.eI,SVGLength:P.at,SVGLengthList:P.eS,SVGMarkerElement:P.f2,SVGMaskElement:P.f3,SVGNumber:P.av,SVGNumberList:P.fm,SVGPatternElement:P.ft,SVGPoint:P.fy,SVGPointList:P.fz,SVGRect:P.fE,SVGRectElement:P.fF,SVGScriptElement:P.bT,SVGStringList:P.h2,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.h3,SVGSymbolElement:P.h4,SVGTextContentElement:P.dx,SVGTextPathElement:P.h8,SVGTSpanElement:P.bY,SVGTextElement:P.bY,SVGTextPositioningElement:P.bY,SVGTransform:P.aw,SVGTransformList:P.hi,SVGUseElement:P.hq,SVGViewElement:P.hs,SVGViewSpec:P.ht,SVGLinearGradientElement:P.c1,SVGRadialGradientElement:P.c1,SVGGradientElement:P.c1,SVGCursorElement:P.il,SVGFEDropShadowElement:P.im,SVGMPathElement:P.io,AudioBuffer:P.dX,WebGLRenderingContext:P.fI,WebGL2RenderingContext:P.fJ,WebGL2RenderingContextBase:P.iD,SQLResultSetRowList:P.fT})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MediaStream:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.de.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.dg.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.ld(U.l1(),b)},[])
else (function(b){H.ld(U.l1(),b)})([])})})()