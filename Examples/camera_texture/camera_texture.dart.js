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
a[c]=function(){a[c]=function(){H.nx(b)}
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
return d?function(e){if(t===null)t=H.jG(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jG(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jG(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jt:function jt(a){this.a=a},
jy:function(a,b,c,d){if(!!a.$isc)return new H.ec(a,b,[c,d])
return new H.dc(a,b,[c,d])},
d5:function(){return new P.ai("No element")},
mo:function(){return new P.ai("Too many elements")},
mn:function(){return new P.ai("Too few elements")},
dt:function(a,b,c,d){if(c-b<=32)H.mD(a,b,c,d)
else H.mC(a,b,c,d)},
mD:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a_(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ao(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mC:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
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
if(J.ao(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ao(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ao(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ao(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ao(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ao(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ao(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ao(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ao(a5.$2(j,i),0)){h=i
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
H.dt(a2,a3,g-2,a5)
H.dt(a2,f+2,a4,a5)
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
break}}H.dt(a2,g,f,a5)}else H.dt(a2,g,f,a5)},
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
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bK:function bK(a,b,c){this.a=a
this.b=b
this.$ti=c},
dA:function dA(a,b,c){this.a=a
this.b=b
this.$ti=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.$ti=c},
cn:function cn(){},
dI:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.am()
return t},
j2:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
lc:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isb)throw H.e(P.dU("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ic(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kl()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hM(P.jx(null,H.b3),0)
r=P.p
s.seI(new H.ag(0,null,null,null,null,null,0,[r,H.b2]))
s.seK(new H.ag(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ib()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mi,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mR)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ah(null,null,null,r)
p=new H.bi(0,null,!1)
o=new H.b2(s,new H.ag(0,null,null,null,null,null,0,[r,H.bi]),q,u.createNewIsolate(),p,new H.ar(H.j7()),new H.ar(H.j7()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
q.l(0,0)
o.bx(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bs(a,{func:1,args:[,]}))o.af(new H.jd(t,a))
else if(H.bs(a,{func:1,args:[,,]}))o.af(new H.je(t,a))
else o.af(a)
u.globalState.f.am()},
mR:function(a){var t=P.aC(["command","print","msg",a])
return new H.ak(!0,P.c4(null,P.p)).J(t)},
mk:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.ml()
return},
ml:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.w('Cannot extract URI from "'+t+'"'))},
mi:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b1(!0,[]).U(b.data)
s=J.a_(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nk(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b1(!0,[]).U(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b1(!0,[]).U(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.ah(null,null,null,k)
i=new H.bi(0,null,!1)
h=new H.b2(s,new H.ag(0,null,null,null,null,null,0,[k,H.bi]),j,u.createNewIsolate(),i,new H.ar(H.j7()),new H.ar(H.j7()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
j.l(0,0)
h.bx(0,i)
u.globalState.f.a.R(0,new H.b3(h,new H.eL(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.am()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lO(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.am()
break
case"close":u.globalState.ch.al(0,$.$get$km().h(0,a))
a.terminate()
u.globalState.f.am()
break
case"log":H.mh(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aC(["command","print","msg",t])
k=new H.ak(!0,P.c4(null,P.p)).J(k)
s.toString
self.postMessage(k)}else P.ae(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mh:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aC(["command","log","msg",a])
r=new H.ak(!0,P.c4(null,P.p)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.L(q)
t=H.al(q)
s=P.cm(t)
throw H.e(s)}},
mj:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kr=$.kr+("_"+s)
$.ks=$.ks+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bo(s,r),q,t.r])
r=new H.eM(a,b,c,d,t)
if(e){t.bT(q,q)
u.globalState.f.a.R(0,new H.b3(t,r,"start isolate"))}else r.$0()},
mE:function(a,b){var t=new H.hc(!0,!1,null)
t.dm(a,b)
return t},
mT:function(a){return new H.b1(!0,[]).U(new H.ak(!1,P.c4(null,P.p)).J(a))},
jd:function jd(a,b){this.a=a
this.b=b},
je:function je(a,b){this.a=a
this.b=b},
ic:function ic(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b2:function b2(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
b3:function b3(a,b,c){this.a=a
this.b=b
this.c=c},
ib:function ib(){},
eL:function eL(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hE:function hE(){},
bo:function bo(a,b){this.b=a
this.a=b},
id:function id(a,b){this.a=a
this.b=b},
c6:function c6(a,b,c){this.b=a
this.c=b
this.a=c},
bi:function bi(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
ak:function ak(a,b){this.a=a
this.b=b},
b1:function b1(a,b){this.a=a
this.b=b},
nd:function(a){return u.types[a]},
nm:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isq},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aL(a)
if(typeof t!=="string")throw H.e(H.U(a))
return t},
mA:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fF(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aW:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dn:function(a){var t,s,r,q,p,o,n,m
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.B||!!J.v(a).$isaZ){p=C.q(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aG(q,0)===36)q=C.e.d_(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dK(H.iQ(a),0,null),u.mangledGlobalNames)},
fB:function(a){return"Instance of '"+H.dn(a)+"'"},
R:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
my:function(a){return a.b?H.R(a).getUTCFullYear()+0:H.R(a).getFullYear()+0},
mw:function(a){return a.b?H.R(a).getUTCMonth()+1:H.R(a).getMonth()+1},
ms:function(a){return a.b?H.R(a).getUTCDate()+0:H.R(a).getDate()+0},
mt:function(a){return a.b?H.R(a).getUTCHours()+0:H.R(a).getHours()+0},
mv:function(a){return a.b?H.R(a).getUTCMinutes()+0:H.R(a).getMinutes()+0},
mx:function(a){return a.b?H.R(a).getUTCSeconds()+0:H.R(a).getSeconds()+0},
mu:function(a){return a.b?H.R(a).getUTCMilliseconds()+0:H.R(a).getMilliseconds()+0},
kq:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.U(a))
return a[b]},
P:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,"index",null)
t=J.dP(a)
if(b<0||C.b.cI(b,t))return P.C(b,a,"index",null,t)
return P.fC(b,"index",null)},
U:function(a){return new P.aq(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bh()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lf})
t.name=""}else t.toString=H.lf
return t},
lf:function(){return J.aL(this.dartException)},
E:function(a){throw H.e(a)},
an:function(a){throw H.e(new P.a2(a))},
aw:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hj(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hk:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kD:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jv:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eQ(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jf(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aP(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jv(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dm(p,null))}}if(a instanceof TypeError){o=$.$get$kx()
n=$.$get$ky()
m=$.$get$kz()
l=$.$get$kA()
k=$.$get$kE()
j=$.$get$kF()
i=$.$get$kC()
$.$get$kB()
h=$.$get$kH()
g=$.$get$kG()
f=o.N(s)
if(f!=null)return t.$1(H.jv(s,f))
else{f=n.N(s)
if(f!=null){f.method="call"
return t.$1(H.jv(s,f))}else{f=m.N(s)
if(f==null){f=l.N(s)
if(f==null){f=k.N(s)
if(f==null){f=j.N(s)
if(f==null){f=i.N(s)
if(f==null){f=l.N(s)
if(f==null){f=h.N(s)
if(f==null){f=g.N(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dm(s,f==null?null:f.method))}}return t.$1(new H.hn(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.du()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.aq(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.du()
return a},
al:function(a){var t
if(a==null)return new H.dG(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dG(a,null)},
nq:function(a){if(a==null||typeof a!='object')return J.ap(a)
else return H.aW(a)},
nb:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nl:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dI(b,new H.iY(a))
case 1:return H.dI(b,new H.iZ(a,d))
case 2:return H.dI(b,new H.j_(a,d,e))
case 3:return H.dI(b,new H.j0(a,d,e,f))
case 4:return H.dI(b,new H.j1(a,d,e,f,g))}throw H.e(P.cm("Unsupported number of arguments for wrapped closure"))},
aI:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nl)
a.$identity=t
return t},
m2:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isb){t.$reflectionInfo=c
r=H.mA(t).r}else r=c
q=d?Object.create(new H.fT().constructor.prototype):Object.create(new H.bw(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k6(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nd,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k3:H.jo
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k6(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m_:function(a,b,c,d){var t=H.jo
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k6:function(a,b,c){var t,s,r,q
if(c)return H.m1(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m_(s,b==null?r!=null:b!==r,t,b)
return q},
m0:function(a,b,c,d){var t,s
t=H.jo
s=H.k3
switch(b?-1:a){case 0:throw H.e(new H.fK("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
m1:function(a,b){var t,s,r,q
H.lZ()
t=$.k2
if(t==null){t=H.k1("receiver")
$.k2=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m0(r,b==null?q!=null:b!==q,s,b)
return t},
jG:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.v(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.m2(a,b,t,!!d,e,f)},
jo:function(a){return a.a},
k3:function(a){return a.c},
lZ:function(){var t=$.k4
if(t==null){t=H.k1("self")
$.k4=t}return t},
k1:function(a){var t,s,r,q,p
t=new H.bw("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nL:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ax(a,"String"))},
Z:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"double"))},
nK:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"num"))},
n4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ax(a,"bool"))},
nk:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ax(a,"int"))},
ns:function(a,b){throw H.e(H.ax(a,b.substring(3)))},
nr:function(a,b){var t=J.a_(b)
throw H.e(H.k5(H.dn(a),t.bk(b,3,t.gj(b))))},
jJ:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.ns(a,b)},
aJ:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.nr(a,b)},
nJ:function(a){if(a==null)return a
if(!!J.v(a).$isb)return a
throw H.e(H.ax(a,"List"))},
l2:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
bs:function(a,b){var t
if(a==null)return!1
t=H.l2(a)
return t==null?!1:H.l8(t,b)},
nH:function(a,b){var t,s
if(a==null)return a
if($.jD)return a
$.jD=!0
try{if(H.bs(a,b))return a
t=H.aK(b,null)
s=H.ax(a,t)
throw H.e(s)}finally{$.jD=!1}},
ax:function(a,b){return new H.hl("type '"+H.dn(a)+"' is not a subtype of type '"+b+"'")},
k5:function(a,b){return new H.e_("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aH:function(a){if(!0===a)return!1
if(!!J.v(a).$isjr)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ax(a,"bool"))},
b5:function(a){throw H.e(new H.hy(a))},
d:function(a){if(H.aH(a))throw H.e(new P.ce(null))},
nx:function(a){throw H.e(new P.e3(a))},
j7:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l6:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aE(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iQ:function(a){if(a==null)return
return a.$ti},
l7:function(a,b){return H.jN(a["$as"+H.f(b)],H.iQ(a))},
ad:function(a,b,c){var t,s
t=H.l7(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
am:function(a,b){var t,s
t=H.iQ(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aK:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dK(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aK(t,b)
return H.mV(a,b)}return"unknown-reified-type"},
mV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aK(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aK(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.na(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aK(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dK:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bW("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aK(o,c)}return p?"":"<"+s.k(0)+">"},
iR:function(a){var t,s
if(a instanceof H.b9){t=H.l2(a)
if(t!=null)return H.aK(t,null)}s=J.v(a).constructor.name
if(a==null)return s
return s+H.dK(a.$ti,0,null)},
jN:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jK(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jK(a,null,b)
return b},
ca:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iQ(a)
s=J.v(a)
if(s[b]==null)return!1
return H.kZ(H.jN(s[d],t),c)},
dL:function(a,b,c,d){if(a==null)return a
if(H.ca(a,b,c,d))return a
throw H.e(H.k5(H.dn(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dK(c,0,null),u.mangledGlobalNames)))},
nF:function(a,b,c,d){if(a==null)return a
if(H.ca(a,b,c,d))return a
throw H.e(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dK(c,0,null),u.mangledGlobalNames)))},
kZ:function(a,b){var t,s,r,q,p
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
n7:function(a,b,c){return H.jK(a,b,H.l7(b,c))},
a0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aD")return!0
if('func' in b)return H.l8(a,b)
if('func' in a)return b.name==="jr"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aK(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kZ(H.jN(o,t),r)},
kY:function(a,b,c){var t,s,r,q,p,o,n
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
n0:function(a,b){var t,s,r,q,p,o
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
l8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kY(r,q,!1))return!1
if(!H.kY(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a0(g,f)||H.a0(f,g)))return!1}}return H.n0(a.named,b.named)},
jK:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nM:function(a){var t=$.jH
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nI:function(a){return H.aW(a)},
nG:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nn:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.jH.$1(a)
s=$.iO[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iX[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kX.$2(a,t)
if(t!=null){s=$.iO[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iX[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jL(r)
$.iO[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iX[t]=r
return r}if(p==="-"){o=H.jL(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.la(a,r)
if(p==="*")throw H.e(new P.c_(t))
if(u.leafTags[t]===true){o=H.jL(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.la(a,r)},
la:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j5(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jL:function(a){return J.j5(a,!1,null,!!a.$isq)},
np:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j5(t,!1,null,!!t.$isq)
else return J.j5(t,c,null,null)},
ni:function(){if(!0===$.jI)return
$.jI=!0
H.nj()},
nj:function(){var t,s,r,q,p,o,n,m
$.iO=Object.create(null)
$.iX=Object.create(null)
H.nh()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lb.$1(p)
if(o!=null){n=H.np(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nh:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.br(C.D,H.br(C.I,H.br(C.p,H.br(C.p,H.br(C.H,H.br(C.E,H.br(C.F(C.q),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jH=new H.iU(p)
$.kX=new H.iV(o)
$.lb=new H.iW(n)},
br:function(a,b){return a(b)||b},
nw:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fF:function fF(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hj:function hj(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dm:function dm(a,b){this.a=a
this.b=b},
eQ:function eQ(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(a){this.a=a},
jf:function jf(a){this.a=a},
dG:function dG(a,b){this.a=a
this.b=b},
iY:function iY(a){this.a=a},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b9:function b9(){},
h6:function h6(){},
fT:function fT(){},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hl:function hl(a){this.a=a},
e_:function e_(a){this.a=a},
fK:function fK(a){this.a=a},
hy:function hy(a){this.a=a},
aE:function aE(a,b){this.a=a
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
eP:function eP(a){this.a=a},
eS:function eS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eT:function eT(a,b){this.a=a
this.$ti=b},
eU:function eU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
l:function(a){return a},
iH:function(a){var t,s,r
if(!!J.v(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bg:function bg(){},
aV:function aV(){},
f9:function f9(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
dd:function dd(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
dh:function dh(){},
fg:function fg(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
na:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
j6:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.eO.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.o)return a
return J.iP(a)},
j5:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iP:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jI==null){H.ni()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.c_("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$ju()]
if(p!=null)return p
p=H.nn(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,$.$get$ju(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
a_:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.o)return a
return J.iP(a)},
dJ:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.o)return a
return J.iP(a)},
l4:function(a){if(typeof a=="number")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aZ.prototype
return a},
nc:function(a){if(typeof a=="number")return J.bd.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aZ.prototype
return a},
l5:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.aZ.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.o)return a
return J.iP(a)},
F:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).A(a,b)},
ao:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l4(a).aB(a,b)},
lg:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l4(a).aC(a,b)},
b6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nm(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a_(a).h(a,b)},
lh:function(a,b,c,d){return J.k(a).dB(a,b,c,d)},
jO:function(a,b){return J.l5(a).aG(a,b)},
bt:function(a,b){return J.k(a).dT(a,b)},
li:function(a,b,c,d){return J.k(a).dU(a,b,c,d)},
lj:function(a,b,c){return J.k(a).dV(a,b,c)},
jP:function(a,b){return J.k(a).bS(a,b)},
jg:function(a,b){return J.k(a).O(a,b)},
jQ:function(a,b,c){return J.k(a).bV(a,b,c)},
lk:function(a,b){return J.k(a).e9(a,b)},
dM:function(a,b,c){return J.k(a).bW(a,b,c)},
bu:function(a,b,c){return J.k(a).bX(a,b,c)},
dN:function(a,b){return J.k(a).ec(a,b)},
ll:function(a,b){return J.k(a).bY(a,b)},
lm:function(a,b,c){return J.k(a).bZ(a,b,c)},
jR:function(a,b,c,d){return J.k(a).c_(a,b,c,d)},
ln:function(a,b,c,d,e){return J.k(a).c0(a,b,c,d,e)},
lo:function(a,b){return J.nc(a).P(a,b)},
jh:function(a,b,c){return J.a_(a).ei(a,b,c)},
ji:function(a){return J.k(a).c2(a)},
lp:function(a){return J.k(a).c3(a)},
lq:function(a){return J.k(a).c5(a)},
lr:function(a){return J.k(a).eo(a)},
ls:function(a,b){return J.k(a).c7(a,b)},
jj:function(a,b){return J.k(a).c8(a,b)},
lt:function(a,b,c,d){return J.k(a).c9(a,b,c,d)},
lu:function(a,b,c,d,e){return J.k(a).ew(a,b,c,d,e)},
lv:function(a,b,c,d,e){return J.k(a).ca(a,b,c,d,e)},
lw:function(a,b,c,d,e,f){return J.k(a).ex(a,b,c,d,e,f)},
lx:function(a,b){return J.dJ(a).t(a,b)},
dO:function(a,b){return J.k(a).cb(a,b)},
ly:function(a,b){return J.k(a).cc(a,b)},
lz:function(a){return J.k(a).ey(a)},
lA:function(a,b){return J.dJ(a).ag(a,b)},
lB:function(a){return J.k(a).ge8(a)},
ap:function(a){return J.v(a).gv(a)},
bv:function(a){return J.dJ(a).gw(a)},
dP:function(a){return J.a_(a).gj(a)},
lC:function(a){return J.k(a).gb2(a)},
lD:function(a){return J.v(a).gB(a)},
lE:function(a){return J.k(a).geV(a)},
lF:function(a){return J.k(a).gay(a)},
jk:function(a){return J.k(a).gm(a)},
jl:function(a){return J.k(a).gn(a)},
jS:function(a){return J.k(a).gK(a)},
jm:function(a,b){return J.k(a).a4(a,b)},
lG:function(a){return J.k(a).aA(a)},
lH:function(a){return J.k(a).b9(a)},
lI:function(a,b){return J.k(a).ba(a,b)},
lJ:function(a,b,c){return J.k(a).bb(a,b,c)},
jT:function(a,b,c){return J.k(a).be(a,b,c)},
lK:function(a,b){return J.k(a).cf(a,b)},
lL:function(a,b){return J.dJ(a).cj(a,b)},
lM:function(a,b,c){return J.k(a).ck(a,b,c)},
lN:function(a){return J.dJ(a).eP(a)},
lO:function(a,b){return J.k(a).H(a,b)},
lP:function(a,b,c,d){return J.k(a).bj(a,b,c,d)},
lQ:function(a,b,c,d,e,f,g){return J.k(a).co(a,b,c,d,e,f,g)},
lR:function(a,b,c,d){return J.k(a).cp(a,b,c,d)},
dQ:function(a,b,c,d){return J.k(a).cq(a,b,c,d)},
lS:function(a){return J.l5(a).eY(a)},
aL:function(a){return J.v(a).k(a)},
lT:function(a,b,c,d){return J.k(a).f_(a,b,c,d)},
lU:function(a,b,c){return J.k(a).cr(a,b,c)},
lV:function(a,b,c){return J.k(a).cs(a,b,c)},
jn:function(a,b,c){return J.k(a).ct(a,b,c)},
lW:function(a,b,c){return J.k(a).cu(a,b,c)},
jU:function(a,b,c){return J.k(a).cv(a,b,c)},
jV:function(a,b,c){return J.k(a).cw(a,b,c)},
jW:function(a,b,c){return J.k(a).cz(a,b,c)},
jX:function(a,b,c,d){return J.k(a).cA(a,b,c,d)},
jY:function(a,b,c,d){return J.k(a).cB(a,b,c,d)},
lX:function(a,b){return J.k(a).cD(a,b)},
lY:function(a,b,c){return J.k(a).f0(a,b,c)},
jZ:function(a,b,c,d,e,f,g){return J.k(a).cF(a,b,c,d,e,f,g)},
a:function a(){},
eO:function eO(){},
d9:function d9(){},
bJ:function bJ(){},
fv:function fv(){},
aZ:function aZ(){},
aT:function aT(){},
aR:function aR(a){this.$ti=a},
js:function js(a){this.$ti=a},
dV:function dV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
d8:function d8(){},
d7:function d7(){},
aS:function aS(){}},P={
mH:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n1()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aI(new P.hA(t),1)).observe(s,{childList:true})
return new P.hz(t,s,r)}else if(self.setImmediate!=null)return P.n2()
return P.n3()},
mI:function(a){++u.globalState.f.b
self.scheduleImmediate(H.aI(new P.hB(a),0))},
mJ:function(a){++u.globalState.f.b
self.setImmediate(H.aI(new P.hC(a),0))},
mK:function(a){P.jz(C.n,a)},
kS:function(a,b){if(H.bs(a,{func:1,args:[P.aD,P.aD]})){b.toString
return a}else{b.toString
return a}},
me:function(a,b,c){var t
if(a==null)a=new P.bh()
t=$.x
if(t!==C.d)t.toString
t=new P.H(0,t,null,[c])
t.bz(a,b)
return t},
mf:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.H(0,$.x,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eD(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b6(new P.eC(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.H(0,$.x,null,[null])
l.by(C.r)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.L(j)
n=H.al(j)
if(t.b===0||!1)return P.me(o,n,null)
else{t.c=o
t.d=n}}return s},
mU:function(a,b,c){$.x.toString
a.F(b,c)},
mM:function(a,b){var t=new P.H(0,$.x,null,[b])
H.d(!0)
t.a=4
t.c=a
return t},
kN:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.H))
H.d(b.a===0)
b.a=1
try{a.b6(new P.hW(b),new P.hX(b))}catch(r){t=H.L(r)
s=H.al(r)
P.nt(new P.hY(b,t,s))}},
hV:function(a,b){var t,s,r,q
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
P.iI(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
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
P.iI(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.x
H.d(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.i2(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i1(r,b,m).$0()}else if((s&2)!==0)new P.i0(t,r,b).$0()
if(i!=null){H.d(!0)
$.x=i}s=r.b
if(!!J.v(s).$isaQ){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ac(h)
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
mX:function(){var t,s
for(;t=$.bp,t!=null;){$.c8=null
s=t.b
$.bp=s
if(s==null)$.c7=null
t.a.$0()}},
n_:function(){$.jE=!0
try{P.mX()}finally{$.c8=null
$.jE=!1
if($.bp!=null)$.$get$jB().$1(P.l_())}},
kV:function(a){var t=new P.dB(a,null)
if($.bp==null){$.c7=t
$.bp=t
if(!$.jE)$.$get$jB().$1(P.l_())}else{$.c7.b=t
$.c7=t}},
mZ:function(a){var t,s,r
t=$.bp
if(t==null){P.kV(a)
$.c8=$.c7
return}s=new P.dB(a,null)
r=$.c8
if(r==null){s.b=t
$.c8=s
$.bp=s}else{s.b=r.b
r.b=s
$.c8=s
if(s.b==null)$.c7=s}},
nt:function(a){var t=$.x
if(C.d===t){P.bq(null,null,C.d,a)
return}t.toString
P.bq(null,null,t,t.aU(a))},
mS:function(a,b,c){var t=a.ed(0)
if(!!J.v(t).$isaQ&&t!==$.$get$kj())t.f1(new P.iG(b,c))
else b.a9(c)},
mF:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jz(a,b)}return P.jz(a,t.aU(b))},
jz:function(a,b){var t=C.b.I(a.a,1000)
return H.mE(t<0?0:t,b)},
jA:function(a){var t,s
H.d(a!=null)
t=$.x
H.d(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
iI:function(a,b,c,d,e){var t={}
t.a=d
P.mZ(new P.iJ(t,e))},
kT:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.jA(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.x=s}},
kU:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.jA(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
mY:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.jA(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
bq:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aU(d):c.ea(d)
P.kV(d)},
hA:function hA(a){this.a=a},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
eD:function eD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eC:function eC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hG:function hG(){},
dC:function dC(a,b){this.a=a
this.$ti=b},
iy:function iy(a,b){this.a=a
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
dB:function dB(a,b){this.a=a
this.b=b},
bV:function bV(){},
h_:function h_(a){this.a=a},
h0:function h0(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a){this.a=a},
fX:function fX(){},
iG:function iG(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
iF:function iF(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
ig:function ig(){},
ii:function ii(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
ko:function(a,b){return new H.ag(0,null,null,null,null,null,0,[a,b])},
a5:function(){return new H.ag(0,null,null,null,null,null,0,[null,null])},
aC:function(a){return H.nb(a,new H.ag(0,null,null,null,null,null,0,[null,null]))},
c4:function(a,b){return new P.dE(0,null,null,null,null,null,0,[a,b])},
mQ:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mm:function(a,b,c){var t,s
if(P.jF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c9()
C.a.l(s,a)
try{P.mW(a,t)}finally{H.d(C.a.gaZ(s)===a)
s.pop()}s=P.kv(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eN:function(a,b,c){var t,s,r
if(P.jF(a))return b+"..."+c
t=new P.bW(b)
s=$.$get$c9()
C.a.l(s,a)
try{r=t
r.a=P.kv(r.ga0(),a,", ")}finally{H.d(C.a.gaZ(s)===a)
s.pop()}s=t
s.a=s.ga0()+c
s=t.ga0()
return s.charCodeAt(0)==0?s:s},
jF:function(a){var t,s
for(t=0;s=$.$get$c9(),t<s.length;++t)if(a===s[t])return!0
return!1},
mW:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
ah:function(a,b,c,d){return new P.i8(0,null,null,null,null,null,0,[d])},
jw:function(a,b){var t,s
t=P.ah(null,null,null,b)
for(s=J.bv(a);s.p();)t.l(0,s.gq())
return t},
mq:function(a){var t,s,r
t={}
if(P.jF(a))return"{...}"
s=new P.bW("")
try{C.a.l($.$get$c9(),a)
r=s
r.a=r.ga0()+"{"
t.a=!0
a.ag(0,new P.f0(t,s))
t=s
t.a=t.ga0()+"}"}finally{t=$.$get$c9()
H.d(C.a.gaZ(t)===a)
t.pop()}t=s.ga0()
return t.charCodeAt(0)==0?t:t},
jx:function(a,b){var t=new P.eV(null,0,0,0,[b])
t.dh(a,b)
return t},
dE:function dE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i8:function i8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
c3:function c3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i6:function i6(){},
da:function da(){},
z:function z(){},
f0:function f0(a,b){this.a=a
this.b=b},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ia:function ia(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fN:function fN(){},
fM:function fM(){},
bS:function bS(){},
kv:function(a,b,c){var t=J.bv(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
m3:function(a,b){return J.lo(a,b)},
m5:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
m6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cg:function(a){if(a>=10)return""+a
return"0"+a},
jq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aL(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ma(a)},
ma:function(a){var t=J.v(a)
if(!!t.$isb9)return t.k(a)
return H.fB(a)},
dU:function(a){return new P.aq(!1,null,null,a)},
k_:function(a,b,c){return new P.aq(!0,a,b,c)},
fC:function(a,b,c){return new P.dq(null,null,!0,a,b,"Value not in range")},
aX:function(a,b,c,d,e){return new P.dq(b,c,!0,a,d,"Invalid value")},
kt:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aX(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aX(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dP(b)
return new P.eJ(b,t,!0,a,c,"Index out of range")},
cm:function(a){return new P.hR(a)},
kp:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bv(a);s.p();)C.a.l(t,s.gq())
return t},
ae:function(a){H.j6(H.f(a))},
az:function az(){},
I:function I(){},
bb:function bb(a,b){this.a=a
this.b=b},
N:function N(){},
aP:function aP(a){this.a=a},
ea:function ea(){},
eb:function eb(){},
bc:function bc(){},
ce:function ce(a){this.a=a},
bh:function bh(){},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eJ:function eJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
w:function w(a){this.a=a},
c_:function c_(a){this.a=a},
ai:function ai(a){this.a=a},
a2:function a2(a){this.a=a},
du:function du(){},
e3:function e3(a){this.a=a},
hR:function hR(a){this.a=a},
ed:function ed(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
W:function W(){},
d6:function d6(){},
b:function b(){},
M:function M(){},
aD:function aD(){},
V:function V(){},
o:function o(){},
bU:function bU(){},
r:function r(){},
bW:function bW(a){this.a=a},
l1:function(a){return a},
iM:function(a){var t,s,r,q,p
if(a==null)return
t=P.a5()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.an)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
n8:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lA(a,new P.iL(t))
return t},
ke:function(){var t=$.kd
if(t==null){t=J.jh(window.navigator.userAgent,"Opera",0)
$.kd=t}return t},
m7:function(){var t,s
t=$.ka
if(t!=null)return t
s=$.kb
if(s==null){s=J.jh(window.navigator.userAgent,"Firefox",0)
$.kb=s}if(s)t="-moz-"
else{s=$.kc
if(s==null){s=!P.ke()&&J.jh(window.navigator.userAgent,"Trident/",0)
$.kc=s}if(s)t="-ms-"
else t=P.ke()?"-o-":"-webkit-"}$.ka=t
return t},
it:function it(){},
iv:function iv(a,b){this.a=a
this.b=b},
iL:function iL(a){this.a=a},
iu:function iu(a,b){this.a=a
this.b=b},
ie:function ie(){},
J:function J(){},
dR:function dR(){},
aM:function aM(){},
ee:function ee(){},
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
ey:function ey(){},
eA:function eA(){},
af:function af(){},
aB:function aB(){},
eH:function eH(){},
as:function as(){},
eR:function eR(){},
f1:function f1(){},
f2:function f2(){},
au:function au(){},
fl:function fl(){},
fs:function fs(){},
fx:function fx(){},
fy:function fy(){},
fD:function fD(){},
fE:function fE(){},
bT:function bT(){},
h1:function h1(){},
G:function G(){},
h2:function h2(){},
h3:function h3(){},
dw:function dw(){},
h7:function h7(){},
bY:function bY(){},
av:function av(){},
hh:function hh(){},
hp:function hp(){},
hr:function hr(){},
hs:function hs(){},
c1:function c1(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
cu:function cu(){},
cs:function cs(){},
cz:function cz(){},
cD:function cD(){},
cN:function cN(){},
cW:function cW(){},
cS:function cS(){},
cU:function cU(){},
dW:function dW(){},
fH:function fH(){},
fI:function fI(){},
iC:function iC(){},
fS:function fS(){},
ct:function ct(){},
cQ:function cQ(){}},W={
m8:function(a,b,c){var t,s
t=document.body
s=(t&&C.f).M(t,a,b,c)
s.toString
t=new H.dA(new W.S(s),new W.iK(),[W.u])
return t.ga_(t)},
m9:function(a){return"wheel"},
by:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lE(a)
if(typeof s==="string")t=a.tagName}catch(r){H.L(r)}return t},
mL:function(a,b){return document.createElement(a)},
b4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ay:function(a,b,c,d,e){var t=W.kW(new W.hQ(c))
t=new W.hP(0,a,b,t,!1,[e])
t.du(a,b,c,!1,e)
return t},
kO:function(a){var t,s
t=document.createElement("a")
s=new W.io(t,window.location)
s=new W.c2(s)
s.dv(a)
return s},
mO:function(a,b,c,d){return!0},
mP:function(a,b,c,d){var t,s,r,q,p
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
kR:function(){var t=P.r
t=new W.iz(P.jw(C.j,t),P.ah(null,null,null,t),P.ah(null,null,null,t),P.ah(null,null,null,t),null)
t.dz(null,new H.bK(C.j,new W.iA(),[H.am(C.j,0),null]),["TEMPLATE"],null)
return t},
kW:function(a){var t=$.x
if(t===C.d)return a
return t.eb(a)},
m:function m(){},
dS:function dS(){},
dT:function dT(){},
a1:function a1(){},
dX:function dX(){},
b8:function b8(){},
aN:function aN(){},
cf:function cf(){},
dZ:function dZ(){},
aO:function aO(){},
e1:function e1(){},
A:function A(){},
ba:function ba(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
ch:function ch(){},
bx:function bx(){},
ci:function ci(){},
e6:function e6(){},
cj:function cj(){},
e7:function e7(){},
ck:function ck(){},
cl:function cl(){},
e8:function e8(){},
e9:function e9(){},
a3:function a3(){},
iK:function iK(){},
j:function j(){},
h:function h(){},
Q:function Q(){},
bF:function bF(){},
ex:function ex(){},
eB:function eB(){},
a4:function a4(){},
cp:function cp(){},
eF:function eF(){},
bG:function bG(){},
cq:function cq(){},
eG:function eG(){},
bH:function bH(){},
bI:function bI(){},
eK:function eK(){},
aU:function aU(){},
eW:function eW(){},
bL:function bL(){},
f4:function f4(){},
bf:function bf(){},
f6:function f6(){},
bM:function bM(){},
a6:function a6(){},
f7:function f7(){},
O:function O(){},
di:function di(){},
fh:function fh(a){this.a=a},
fi:function fi(a){this.a=a},
S:function S(a){this.a=a},
u:function u(){},
dj:function dj(){},
bR:function bR(){},
fr:function fr(){},
fu:function fu(){},
a7:function a7(){},
fw:function fw(){},
fz:function fz(){},
fA:function fA(){},
dp:function dp(){},
fJ:function fJ(){},
dr:function dr(){},
fL:function fL(){},
fO:function fO(){},
a8:function a8(){},
fP:function fP(){},
a9:function a9(){},
fR:function fR(){},
aa:function aa(){},
fW:function fW(){},
X:function X(){},
aj:function aj(){},
dv:function dv(){},
h4:function h4(){},
h5:function h5(){},
bX:function bX(){},
ab:function ab(){},
Y:function Y(){},
h8:function h8(){},
h9:function h9(){},
hb:function hb(){},
ac:function ac(){},
aY:function aY(){},
hf:function hf(){},
hg:function hg(){},
bj:function bj(){},
hi:function hi(){},
dz:function dz(){},
aF:function aF(){},
ho:function ho(){},
bl:function bl(){},
hq:function hq(){},
ht:function ht(){},
hu:function hu(){},
b_:function b_(){},
c0:function c0(){},
hw:function hw(a){this.a=a},
hx:function hx(){},
b0:function b0(){},
hF:function hF(){},
dD:function dD(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
i4:function i4(){},
i5:function i5(){},
dF:function dF(){},
ip:function ip(){},
is:function is(){},
iw:function iw(){},
iD:function iD(){},
iE:function iE(){},
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
c2:function c2(a){this.a=a},
B:function B(){},
dl:function dl(a){this.a=a},
fk:function fk(a){this.a=a},
fj:function fj(a,b,c){this.a=a
this.b=b
this.c=c},
c5:function c5(){},
iq:function iq(){},
ir:function ir(){},
iz:function iz(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iA:function iA(){},
ix:function ix(){},
co:function co(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dk:function dk(){},
io:function io(a,b){this.a=a
this.b=b},
dH:function dH(a){this.a=a},
iB:function iB(a){this.a=a},
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
nu:function(a){var t,s
t=document
s=W.aU
W.ay(t,"keydown",new B.j8(),!1,s)
W.ay(t,"keyup",new B.j9(),!1,s)
if(!$.nv)W.ay(t,"mousemove",new B.ja(),!1,W.O)
s=W.O
W.ay(t,"mousedown",new B.jb(),!1,s)
W.ay(t,"mouseup",new B.jc(),!1,s)},
mr:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.l(3))
s=$.$get$iN()
r=$.$get$cb()
q=new T.at(new Float32Array(H.l(16)))
q.aq()
q=new B.fm(a,b,c,0,new T.t(t),-0.02,s,r,q,new T.t(new Float32Array(H.l(3))),new T.t(new Float32Array(H.l(3))),new T.t(new Float32Array(H.l(3))),new T.t(new Float32Array(H.l(3))),"camera:orbit",!1,!0)
q.di(a,b,c,d)
return q},
j8:function j8(){},
j9:function j9(){},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
fm:function fm(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
fp:function fp(){},
fq:function fq(a){this.a=a},
m4:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.t(new Float32Array(H.l(3)))
r.u(t,s,d8)
q=new T.t(new Float32Array(H.l(3)))
q.u(d6,s,d8)
p=new T.t(new Float32Array(H.l(3)))
p.u(d6,d7,d8)
o=new T.t(new Float32Array(H.l(3)))
o.u(t,d7,d8)
n=-d8
m=new T.t(new Float32Array(H.l(3)))
m.u(t,s,n)
l=new T.t(new Float32Array(H.l(3)))
l.u(t,d7,n)
k=new T.t(new Float32Array(H.l(3)))
k.u(d6,d7,n)
j=new T.t(new Float32Array(H.l(3)))
j.u(d6,s,n)
i=new T.t(new Float32Array(H.l(3)))
i.u(t,d7,n)
h=new T.t(new Float32Array(H.l(3)))
h.u(t,d7,d8)
g=new T.t(new Float32Array(H.l(3)))
g.u(d6,d7,d8)
f=new T.t(new Float32Array(H.l(3)))
f.u(d6,d7,n)
e=new T.t(new Float32Array(H.l(3)))
e.u(d6,s,d8)
d=new T.t(new Float32Array(H.l(3)))
d.u(t,s,d8)
c=new T.t(new Float32Array(H.l(3)))
c.u(t,s,n)
b=new T.t(new Float32Array(H.l(3)))
b.u(d6,s,n)
a=new T.t(new Float32Array(H.l(3)))
a.u(d6,s,n)
a0=new T.t(new Float32Array(H.l(3)))
a0.u(d6,d7,n)
a1=new T.t(new Float32Array(H.l(3)))
a1.u(d6,d7,d8)
a2=new T.t(new Float32Array(H.l(3)))
a2.u(d6,s,d8)
a3=new T.t(new Float32Array(H.l(3)))
a3.u(t,s,n)
a4=new T.t(new Float32Array(H.l(3)))
a4.u(t,s,d8)
s=new T.t(new Float32Array(H.l(3)))
s.u(t,d7,d8)
a5=new T.t(new Float32Array(H.l(3)))
a5.u(t,d7,n)
n=new Float32Array(H.l(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.l(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.l(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.l(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.l(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.l(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.l(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.l(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.l(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.l(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.l(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.l(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.l(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.l(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.l(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.l(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.l(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.l(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.l(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.l(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.l(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.l(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.l(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.l(2))
c7[0]=d3
c7[1]=d4
c8=new G.eE(!1,[],[],[],P.a5())
c8.bo("aTexUV")
c8.bo("aNormal")
c8.d8(6)
c8.d9([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.d6("aTexUV",[new T.y(n),new T.y(t),new T.y(a6),new T.y(a7),new T.y(a8),new T.y(a9),new T.y(b0),new T.y(b1),new T.y(b2),new T.y(b3),new T.y(b4),new T.y(b5),new T.y(b6),new T.y(b7),new T.y(b8),new T.y(b9),new T.y(c0),new T.y(c1),new T.y(c2),new T.y(c3),new T.y(c4),new T.y(c5),new T.y(c6),new T.y(c7)])
for(c9=0;t=$.$get$kM(),c9<6;++c9){d0=t[c9]
c8.d7("aNormal",[d0,d0,d0,d0])}return c8}},G={
mG:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ak(t,"\n")},
kL:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.c4(a,b)
t.bh(a,s,c)
t.c1(a,s)
r=t.bd(a,s,35713)
if(r!=null&&!r){q=t.bc(a,s)
P.ae("E:Compilation failed:")
P.ae("E:"+G.mG(c))
P.ae("E:Failure:")
P.ae(C.e.a3("E:",q))
throw H.e(q)}return s},
ki:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jk(a[s])
b[t+1]=J.jl(a[s])
b[t+2]=J.jS(a[s])}return b},
mc:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jk(a[s])
b[t+1]=J.jl(a[s])}return b},
md:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jk(a[s])
b[t+1]=J.jl(a[s])
b[t+2]=J.jS(a[s])
b[t+3]=J.lF(a[s])}return b},
mb:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b6(a[s],0)
b[t+1]=J.b6(a[s],1)
b[t+2]=J.b6(a[s],2)
b[t+3]=J.b6(a[s],3)}return b},
mN:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gw(s),r=b.x,q=[[P.b,P.p]],p=[P.N],o=[T.aG],n=[T.t],m=[T.y];s.p();){l=s.gq()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.l3>0)H.j6("I: "+k)
continue}j=t.h(0,l)
switch($.$get$T().h(0,l).a){case"vec2":b.a7(l,G.mc(H.dL(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a7(l,G.ki(H.dL(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a7(l,G.md(H.dL(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a7(l,new Float32Array(H.iH(H.dL(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a7(l,G.mb(H.dL(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aH(!1))H.b5("unknown type for "+H.f(l)+" ["+J.lD(j[0]).k(0)+"] ["+new H.aE(H.iR(j),null).k(0)+"] "+H.f(j))}}},
mB:function(a,b,c,d){var t=new G.fG(b,c,d,null,null,P.a5(),P.a5(),P.ah(null,null,null,P.r),null,a,!1,!0)
t.dj(a,b,c,d)
return t},
f8:function f8(){},
hm:function hm(){},
dY:function dY(){},
e0:function e0(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c,d){var _=this
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
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
f5:function f5(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
ft:function ft(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.d=a0
_.a=a1
_.b=a2
_.c=a3},
fG:function fG(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fQ:function fQ(){},
ha:function ha(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bZ:function bZ(){},
eI:function eI(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={fU:function fU(){},fV:function fV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mp:function(){var t,s,r,q,p,o
t=new P.H(0,$.x,null,[null])
s=new P.dC(t,[null])
r=window.navigator
r=(r&&C.N).cL(r,!0).an(new D.eY(s))
q=new D.eZ(s)
p=H.am(r,0)
o=$.x
if(o!==C.d)q=P.kS(q,o)
r.ar(new P.bm(null,new P.H(0,o,null,[p]),2,null,q,[p,p]))
return t},
eY:function eY(a){this.a=a},
eX:function eX(a,b){this.a=a
this.b=b},
eZ:function eZ(a){this.a=a}},A={
iS:function(a){var t,s
t=C.M.ez(a,0,new A.iT())
s=536870911&t+(C.b.cG(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iT:function iT(){}},T={
bk:function(a,b,c){var t=new T.t(new Float32Array(H.l(3)))
t.u(a,b,c)
return t},
at:function at(a){this.a=a},
y:function y(a){this.a=a},
t:function t(a){this.a=a},
aG:function aG(a){this.a=a}},U={
no:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t={}
s=document
r=new R.fV(0,0,null,null,null,null)
r.dl(C.i.cK(s,"stats"),"blue","gray")
q=C.i.eO(s,"#webgl-canvas")
q.width=q.clientWidth
q.height=q.clientHeight
p=new G.e0(null,q)
s=(q&&C.y).cJ(q,"webgl2",P.aC(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.E(P.cm('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aL(J.lG(s))
if($.l3>0)P.ae("I: "+o)
J.ln(s,0,0,0,1)
J.dO(s,2929)
n=B.mr(15,10,0,q)
s=new T.at(new Float32Array(H.l(16)))
s.aq()
o=new T.at(new Float32Array(H.l(16)))
o.aq()
m=new G.ft(n,50,1,0.1,1000,s,o,new T.at(new Float32Array(H.l(16))),P.a5(),"perspective",!1,!0)
m.bt()
m.da(q.width,q.height)
l=G.mB("solid",p,$.$get$le(),$.$get$ld())
k=new G.f3(P.a5(),"cube",!1,!0)
k.W("cDepthTest",!0)
k.W("cDepthWrite",!0)
k.W("cBlendEquation",$.$get$k0())
k.W("cStencilFunc",$.$get$ku())
k.W("uColor",$.$get$k7())
o=new T.at(new Float32Array(H.l(16)))
o.aq()
k.W("uModelMatrix",o)
j=B.m4(!0,1,0,1,0,1,1,1)
s=l.d
o=l.e.x
i=P.a5()
h=J.lr(s.a)
g=new G.f5(s,h,4,i,o,null,0,-1,null,null,P.a5(),"meshdata:cube",!1,!0)
f=G.ki(j.d,null)
i.i(0,"aPosition",J.ji(s.a))
g.ch=f
g.bn("aPosition",f,3)
e=$.$get$T().h(0,"aPosition")
if(e==null)H.E("Unknown canonical aPosition")
H.d(o.D(0,"aPosition"))
d=o.h(0,"aPosition")
J.dN(s.a,h)
s.cd(0,d,0)
o=i.h(0,"aPosition")
i=e.bp()
J.dM(s.a,34962,o)
J.jZ(s.a,d,i,5126,!1,0,0)
o=j.de()
g.y=J.ji(s.a)
H.d(g.ch!=null)
i=g.ch.length
if(i<768){g.saK(new Uint8Array(H.iH(o)))
g.Q=5121}else if(i<196608){g.saK(new Uint16Array(H.iH(o)))
g.Q=5123}else{g.saK(new Uint32Array(H.iH(o)))
g.Q=5125}J.dN(s.a,h)
o=g.y
i=g.cx
h=J.v(i)
H.d(!!h.$iskI||!!h.$iskJ||!!h.$iskK)
J.dM(s.a,34963,o)
J.jR(s.a,34963,i,35048)
G.mN(j,g)
t.a=null
t.b=null
t.c=0
P.mf([D.mp()],null,!1).an(new U.j4(t,p,k,new U.j3(t,r,n,m,l,k,g)))},
j3:function j3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
j4:function j4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,D,A,T,U]
setFunctionNamesIfNecessary(v)
var $={}
H.jt.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gv:function(a){return H.aW(a)},
k:function(a){return H.fB(a)},
gB:function(a){return new H.aE(H.iR(a),null)}}
J.eO.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.a1},
$isaz:1}
J.d9.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.W}}
J.bJ.prototype={
gv:function(a){return 0},
gB:function(a){return C.V},
k:function(a){return String(a)},
$iskn:1}
J.fv.prototype={}
J.aZ.prototype={}
J.aT.prototype={
k:function(a){var t=a[$.$get$k9()]
return t==null?this.d2(a):J.aL(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjr:1}
J.aR.prototype={
aW:function(a,b){if(!!a.immutable$list)throw H.e(new P.w(b))},
aV:function(a,b){if(!!a.fixed$length)throw H.e(new P.w(b))},
l:function(a,b){this.aV(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.aV(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.an)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a2(a)))
a.push(q)}},
cj:function(a,b){return new H.bK(a,b,[H.am(a,0),null])},
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
P.kt(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aX(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mn())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bU:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a2(a))}return!1},
cY:function(a,b){this.aW(a,"sort")
H.dt(a,0,a.length-1,P.n9())},
aD:function(a){return this.cY(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.F(a[t],b))return!0
return!1},
k:function(a){return P.eN(a,"[","]")},
gw:function(a){return new J.dV(a,a.length,0,null,[H.am(a,0)])},
gv:function(a){return H.aW(a)},
gj:function(a){return a.length},
sj:function(a,b){this.aV(a,"set length")
if(b<0)throw H.e(P.aX(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
return a[b]},
i:function(a,b,c){this.aW(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.js.prototype={}
J.dV.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.an(t))
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
ee:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".ceil()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.w(""+a+".round()"))},
ef:function(a,b,c){if(this.P(b,c)>0)throw H.e(H.U(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
eZ:function(a,b){var t
if(b>20)throw H.e(P.aX(b,0,20,"fractionDigits",null))
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
cH:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a*b},
aF:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bQ(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bQ(a,b)},
bQ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.w("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aP:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cG:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a&b)>>>0},
d4:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return(a^b)>>>0},
aC:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a<b},
aB:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>b},
cI:function(a,b){if(typeof b!=="number")throw H.e(H.U(b))
return a>=b},
gB:function(a){return C.a4},
$isV:1}
J.d8.prototype={
gB:function(a){return C.a3},
$isN:1,
$isp:1,
$isV:1}
J.d7.prototype={
gB:function(a){return C.a2},
$isN:1,
$isV:1}
J.aS.prototype={
aG:function(a,b){if(b>=a.length)throw H.e(H.P(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(typeof b!=="string")throw H.e(P.k_(b,null,null))
return a+b},
cZ:function(a,b,c){var t
if(c>a.length)throw H.e(P.aX(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bi:function(a,b){return this.cZ(a,b,0)},
bk:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fC(b,null,null))
if(b>c)throw H.e(P.fC(b,null,null))
if(c>a.length)throw H.e(P.fC(c,null,null))
return a.substring(b,c)},
d_:function(a,b){return this.bk(a,b,null)},
eY:function(a){return a.toLowerCase()},
ei:function(a,b,c){if(c>a.length)throw H.e(P.aX(c,0,a.length,null,null))
return H.nw(a,b,c)},
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
gB:function(a){return C.X},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.P(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isr:1}
H.c.prototype={$asc:null}
H.be.prototype={
gw:function(a){return new H.db(this,this.gj(this),0,null,[H.ad(this,"be",0)])},
az:function(a,b){return this.d1(0,b)},
eX:function(a,b){var t,s
t=H.D([],[H.ad(this,"be",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eW:function(a){return this.eX(a,!0)}}
H.db.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.a_(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a2(t))
q=this.c
if(q>=r){this.saa(null)
return!1}this.saa(s.t(t,q));++this.c
return!0},
saa:function(a){this.d=a}}
H.dc.prototype={
gw:function(a){return new H.f_(null,J.bv(this.a),this.b,this.$ti)},
gj:function(a){return J.dP(this.a)},
$asW:function(a,b){return[b]}}
H.ec.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f_.prototype={
p:function(){var t=this.b
if(t.p()){this.saa(this.c.$1(t.gq()))
return!0}this.saa(null)
return!1},
gq:function(){return this.a},
saa:function(a){this.a=a},
$asd6:function(a,b){return[b]}}
H.bK.prototype={
gj:function(a){return J.dP(this.a)},
t:function(a,b){return this.b.$1(J.lx(this.a,b))},
$asc:function(a,b){return[b]},
$asbe:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dA.prototype={
gw:function(a){return new H.hv(J.bv(this.a),this.b,this.$ti)}}
H.hv.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cn.prototype={}
H.jd.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.je.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ic.prototype={
seI:function(a){this.z=a},
seK:function(a){this.ch=a}}
H.b2.prototype={
bT:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aT()},
eR:function(a){var t,s,r,q,p
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
e3:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eQ:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.w("removeRange"))
P.kt(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cV:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eC:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jx(null,null)
this.cx=t}t.R(0,new H.i7(a,c))},
eB:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ax()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jx(null,null)
this.cx=t}t.R(0,this.geJ())},
eD:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ae(a)
if(b!=null)P.ae(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aL(a)
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
p=H.al(o)
this.eD(q,p)
if(this.db){this.ax()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n4(r)
u.globalState.d=H.jJ(t,"$isb2")
if(t!=null)$=t.geH()
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
for(t=this.b,s=t.gcE(t),s=s.gw(s);s.p();)s.gq().dE()
t.T(0)
this.c.T(0)
u.globalState.z.al(0,this.a)
this.dx.T(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geH:function(){return this.d},
gej:function(){return this.e}}
H.i7.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hM.prototype={
eq:function(){var t=this.a
if(t.b===t.c)return
return t.cl()},
cn:function(){var t,s,r
t=this.eq()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaj(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cm("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaj(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aC(["command","close"])
r=new H.ak(!0,new P.dE(0,null,null,null,null,null,0,[null,P.p])).J(r)
s.toString
self.postMessage(r)}return!1}t.eN()
return!0},
bO:function(){if(self.window!=null)new H.hN(this).$0()
else for(;this.cn(););},
am:function(){var t,s,r,q,p
if(!u.globalState.x)this.bO()
else try{this.bO()}catch(r){t=H.L(r)
s=H.al(r)
q=u.globalState.Q
p=P.aC(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.ak(!0,P.c4(null,P.p)).J(p)
q.toString
self.postMessage(p)}}}
H.hN.prototype={
$0:function(){if(!this.a.cn())return
P.mF(C.n,this)},
$S:function(){return{func:1,v:true}}}
H.b3.prototype={
eN:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.ib.prototype={}
H.eL.prototype={
$0:function(){H.mj(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eM.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bs(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bs(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aT()},
$S:function(){return{func:1,v:true}}}
H.hE.prototype={}
H.bo.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mT(b)
if(t.gej()===s){s=J.a_(r)
switch(s.h(r,0)){case"pause":t.bT(s.h(r,1),s.h(r,2))
break
case"resume":t.eR(s.h(r,1))
break
case"add-ondone":t.e3(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eQ(s.h(r,1))
break
case"set-errors-fatal":t.cV(s.h(r,1),s.h(r,2))
break
case"ping":t.eC(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eB(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.al(0,s)
break}return}u.globalState.f.a.R(0,new H.b3(t,new H.id(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bo){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.id.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dA(0,this.b)},
$S:function(){return{func:1}}}
H.c6.prototype={
H:function(a,b){var t,s,r
t=P.aC(["command","message","port",this,"msg",b])
s=new H.ak(!0,P.c4(null,P.p)).J(t)
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
gv:function(a){return C.b.d4((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bi.prototype={
dE:function(){this.c=!0
this.b=null},
dA:function(a,b){if(this.c)return
this.b.$1(b)},
$ismz:1}
H.hc.prototype={
dm:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.R(0,new H.b3(s,new H.hd(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.aI(new H.he(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.w("Timer greater than 0."))}}}
H.hd.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.he.prototype={
$0:function(){this.a.c=null
H.j2()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gv:function(a){var t=this.a
t=C.b.aP(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ar){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ak.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.v(a)
if(!!t.$isbg)return["buffer",a]
if(!!t.$isaV)return["typed",a]
if(!!t.$isn)return this.cR(a)
if(!!t.$ismg){r=this.gcO()
q=t.gE(a)
q=H.jy(q,r,H.ad(q,"W",0),null)
q=P.kp(q,!0,H.ad(q,"W",0))
t=t.gcE(a)
t=H.jy(t,r,H.ad(t,"W",0),null)
return["map",q,P.kp(t,!0,H.ad(t,"W",0))]}if(!!t.$iskn)return this.cS(a)
if(!!t.$isa)this.cC(a)
if(!!t.$ismz)this.ao(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbo)return this.cT(a)
if(!!t.$isc6)return this.cU(a)
if(!!t.$isb9){p=a.$static_name
if(p==null)this.ao(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.o))this.cC(a)
return["dart",u.classIdExtractor(a),this.cQ(u.classFieldsExtractor(a))]},
ao:function(a,b){throw H.e(new P.w((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cC:function(a){return this.ao(a,null)},
cR:function(a){var t
H.d(typeof a!=="string")
t=this.cP(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ao(a,"Can't serialize indexable: ")},
cP:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
cQ:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
cS:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ao(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
cU:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cT:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b1.prototype={
U:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.dU("Bad serialized message: "+H.f(a)))
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
case"map":return this.eu(a)
case"sendport":return this.ev(a)
case"raw sendport":H.d(J.F(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.es(a)
case"function":H.d(J.F(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.F(a[0],"capability"))
return new H.ar(a[1])
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
eu:function(a){var t,s,r,q,p
H.d(J.F(a[0],"map"))
t=a[1]
s=a[2]
r=P.a5()
C.a.l(this.b,r)
t=J.lL(t,this.ger()).eW(0)
for(q=J.a_(s),p=0;p<t.length;++p)r.i(0,t[p],this.U(q.h(s,p)))
return r},
ev:function(a){var t,s,r,q,p,o,n
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
es:function(a){var t,s,r,q,p,o
H.d(J.F(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a_(t),p=J.a_(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.U(p.h(s,o))
return r}}
H.fF.prototype={}
H.hj.prototype={
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
H.eQ.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hn.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jf.prototype={
$1:function(a){if(!!J.v(a).$isbc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dG.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iY.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iZ.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j_.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j0.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j1.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b9.prototype={
k:function(a){return"Closure '"+H.dn(this).trim()+"'"},
$isjr:1,
gf2:function(){return this},
$D:null}
H.h6.prototype={}
H.fT.prototype={
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
if(t==null)s=H.aW(this.a)
else s=typeof t!=="object"?J.ap(t):H.aW(t)
return(s^H.aW(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fB(t)}}
H.hl.prototype={
k:function(a){return this.a}}
H.e_.prototype={
k:function(a){return this.a}}
H.fK.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hy.prototype={
k:function(a){return C.e.a3("Assertion failed: ",P.jq(this.a))}}
H.aE.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.ap(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aE){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ag.prototype={
gj:function(a){return this.a},
gaj:function(a){return this.a===0},
gE:function(a){return new H.eT(this,[H.am(this,0)])},
gcE:function(a){return H.jy(this.gE(this),new H.eP(this),H.am(this,0),H.am(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bH(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bH(s,b)}else return this.eE(b)},
eE:function(a){var t=this.d
if(t==null)return!1
return this.ai(this.au(t,this.ah(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ab(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ab(r,b)
return s==null?null:s.b}else return this.eF(b)},
eF:function(a){var t,s,r
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
else return this.eG(b)},
eG:function(a){var t,s,r,q
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
if(s!==this.r)throw H.e(new P.a2(this))
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
t=new H.eS(a,b,null,null,[null,null])
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
ah:function(a){return J.ap(a)&0x3ffffff},
ai:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
k:function(a){return P.mq(this)},
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
$ismg:1,
$isM:1,
$asM:null}
H.eP.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eS.prototype={}
H.eT.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eU(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eU.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a2(t))
else{t=this.c
if(t==null){this.sbv(null)
return!1}else{this.sbv(t.a)
this.c=this.c.c
return!0}}},
sbv:function(a){this.d=a}}
H.iU.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iV.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.iW.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.bg.prototype={
gB:function(a){return C.O},
$isbg:1}
H.aV.prototype={$isaV:1}
H.f9.prototype={
gB:function(a){return C.P}}
H.de.prototype={
gj:function(a){return a.length},
$isn:1,
$asn:function(){},
$isq:1,
$asq:function(){}}
H.df.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
a[b]=c}}
H.dg.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.dd.prototype={
gB:function(a){return C.Q},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]},
$isez:1}
H.fa.prototype={
gB:function(a){return C.R},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
H.fb.prototype={
gB:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.fc.prototype={
gB:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskk:1}
H.fd.prototype={
gB:function(a){return C.U},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.fe.prototype={
gB:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskI:1}
H.ff.prototype={
gB:function(a){return C.Z},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskJ:1}
H.dh.prototype={
gB:function(a){return C.a_},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.fg.prototype={
gB:function(a){return C.a0},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskK:1}
H.bN.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.p]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.p]}}
H.bO.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.N]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.N]}}
H.bP.prototype={
$asn:function(){},
$asc:function(){return[P.N]},
$asq:function(){},
$asb:function(){return[P.N]}}
H.bQ.prototype={
$asn:function(){},
$asc:function(){return[P.p]},
$asq:function(){},
$asb:function(){return[P.p]}}
P.hA.prototype={
$1:function(a){var t,s
H.j2()
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
$0:function(){H.j2()
this.a.$0()},
$S:function(){return{func:1}}}
P.hC.prototype={
$0:function(){H.j2()
this.a.$0()},
$S:function(){return{func:1}}}
P.eD.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.F(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.F(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eC.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bG(r)}else if(t.b===0&&!this.b)this.d.F(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hG.prototype={
eh:function(a,b){if(a==null)a=new P.bh()
if(this.a.a!==0)throw H.e(new P.ai("Future already completed"))
$.x.toString
this.F(a,b)},
eg:function(a){return this.eh(a,null)}}
P.dC.prototype={
ad:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ai("Future already completed"))
t.by(b)},
F:function(a,b){this.a.bz(a,b)}}
P.iy.prototype={
ad:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.ai("Future already completed"))
t.a9(b)},
F:function(a,b){this.a.F(a,b)}}
P.bm.prototype={
eL:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b4(this.d,a.a)},
eA:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bs(s,{func:1,args:[P.o,P.bU]}))return t.eS(s,a.a,a.b)
else return t.b4(s,a.a)}}
P.H.prototype={
b6:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.kS(b,t)}s=new P.H(0,t,null,[null])
r=b==null?1:3
this.ar(new P.bm(null,s,r,a,b,[H.am(this,0),null]))
return s},
an:function(a){return this.b6(a,null)},
f1:function(a){var t,s
t=$.x
s=new P.H(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.am(this,0)
this.ar(new P.bm(null,s,8,a,null,[t,t]))
return s},
bB:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
ar:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jJ(this.c,"$isbm")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.ar(a)
return}this.bB(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bq(null,null,t,new P.hS(this,a))}},
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
P.bq(null,null,s,new P.i_(t,this))}},
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
if(H.ca(a,"$isaQ",t,"$asaQ"))if(H.ca(a,"$isH",t,null))P.hV(a,this)
else P.kN(a,this)
else{s=this.aN()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,s)}},
bG:function(a){var t
H.d(this.a<4)
H.d(!J.v(a).$isaQ)
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
dF:function(a){return this.F(a,null)},
by:function(a){var t
H.d(this.a<4)
if(H.ca(a,"$isaQ",this.$ti,"$asaQ")){this.dD(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hU(this,a))},
dD:function(a){var t
if(H.ca(a,"$isH",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hZ(this,a))}else P.hV(a,this)
return}P.kN(a,this)},
bz:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hT(this,a,b))},
$isaQ:1,
gaQ:function(){return this.a},
gdX:function(){return this.c}}
P.hS.prototype={
$0:function(){P.bn(this.a,this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$0:function(){P.bn(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hW.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.a9(a)},
$S:function(){return{func:1,args:[,]}}}
P.hX.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.F(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hY.prototype={
$0:function(){this.a.F(this.b,this.c)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){this.a.bG(this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){P.hV(this.b,this.a)},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){this.a.F(this.b,this.c)},
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
t=q.b.b.cm(q.d)}catch(n){s=H.L(n)
r=H.al(n)
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
return}if(!!J.v(t).$isaQ){if(t instanceof P.H&&t.gaQ()>=4){if(t.gaQ()===8){q=t
H.d(q.gaQ()===8)
p=this.b
p.b=q.gdX()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.an(new P.i3(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i3.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i1.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b4(r.d,this.c)}catch(q){t=H.L(q)
s=H.al(q)
r=this.a
r.b=new P.b7(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i0.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eL(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eA(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.al(o)
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
P.dB.prototype={}
P.bV.prototype={
gj:function(a){var t,s
t={}
s=new P.H(0,$.x,null,[P.p])
t.a=0
this.cg(new P.h_(t),!0,new P.h0(t,s),s.gbF())
return s},
gaY:function(a){var t,s
t={}
s=new P.H(0,$.x,null,[H.ad(this,"bV",0)])
t.a=null
t.a=this.cg(new P.fY(t,this,s),!0,new P.fZ(s),s.gbF())
return s}}
P.h_.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h0.prototype={
$0:function(){this.b.a9(this.a.a)},
$S:function(){return{func:1}}}
P.fY.prototype={
$1:function(a){P.mS(this.a.a,this.c,a)},
$S:function(){return H.n7(function(a){return{func:1,args:[a]}},this.b,"bV")}}
P.fZ.prototype={
$0:function(){var t,s,r,q
try{r=H.d5()
throw H.e(r)}catch(q){t=H.L(q)
s=H.al(q)
P.mU(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fX.prototype={}
P.iG.prototype={
$0:function(){return this.a.a9(this.b)},
$S:function(){return{func:1}}}
P.b7.prototype={
k:function(a){return H.f(this.a)},
$isbc:1}
P.iF.prototype={}
P.iJ.prototype={
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
P.ig.prototype={
eT:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.kT(null,null,this,a)}catch(r){t=H.L(r)
s=H.al(r)
P.iI(null,null,this,t,s)}},
eU:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.kU(null,null,this,a,b)}catch(r){t=H.L(r)
s=H.al(r)
P.iI(null,null,this,t,s)}},
ea:function(a){return new P.ii(this,a)},
aU:function(a){return new P.ih(this,a)},
eb:function(a){return new P.ij(this,a)},
h:function(a,b){return},
cm:function(a){if($.x===C.d)return a.$0()
return P.kT(null,null,this,a)},
b4:function(a,b){if($.x===C.d)return a.$1(b)
return P.kU(null,null,this,a,b)},
eS:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.mY(null,null,this,a,b,c)}}
P.ii.prototype={
$0:function(){return this.a.cm(this.b)},
$S:function(){return{func:1}}}
P.ih.prototype={
$0:function(){return this.a.eT(this.b)},
$S:function(){return{func:1}}}
P.ij.prototype={
$1:function(a){return this.a.eU(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dE.prototype={
ah:function(a){return H.nq(a)&0x3ffffff},
ai:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i8.prototype={
gw:function(a){var t=new P.c3(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dG(b)},
dG:function(a){var t=this.d
if(t==null)return!1
return this.at(t[this.as(a)],a)>=0},
ci:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.dP(a)},
dP:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return
return J.b6(s,r).gdI()},
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
if(t==null){t=P.mQ()
this.d=t}s=this.as(b)
r=t[s]
if(r==null){q=[this.aH(b)]
H.d(q!=null)
t[s]=q}else{if(this.at(r,b)>=0)return!1
r.push(this.aH(b))}return!0},
al:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bD(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bD(this.c,b)
else return this.dR(0,b)},
dR:function(a,b){var t,s,r
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
t=new P.i9(a,null,null)
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
as:function(a){return J.ap(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.F(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.i9.prototype={
gdI:function(){return this.a}}
P.c3.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a2(t))
else{t=this.c
if(t==null){this.sa8(null)
return!1}else{this.sa8(t.a)
this.c=this.c.b
return!0}}},
sa8:function(a){this.d=a}}
P.i6.prototype={}
P.da.prototype={}
P.z.prototype={
gw:function(a){return new H.db(a,this.gj(a),0,null,[H.ad(a,"z",0)])},
t:function(a,b){return this.h(a,b)},
cj:function(a,b){return new H.bK(a,b,[H.ad(a,"z",0),null])},
ez:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a2(a))}return s},
k:function(a){return P.eN(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f0.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eV.prototype={
gw:function(a){return new P.ia(this,this.c,this.d,this.b,null,this.$ti)},
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
k:function(a){return P.eN(this,"{","}")},
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
dh:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbP(H.D(t,[b]))},
sbP:function(a){this.a=a},
$asc:null}
P.ia.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a2(t))
s=this.d
if(s===this.b){this.sa8(null)
return!1}this.sa8(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa8:function(a){this.e=a}}
P.fN.prototype={
L:function(a,b){var t
for(t=J.bv(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eN(this,"{","}")},
$isc:1,
$asc:null}
P.fM.prototype={}
P.bS.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.az.prototype={}
P.I.prototype={}
P.bb.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bb))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aP(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m5(H.my(this))
s=P.cg(H.mw(this))
r=P.cg(H.ms(this))
q=P.cg(H.mt(this))
p=P.cg(H.mv(this))
o=P.cg(H.mx(this))
n=P.m6(H.mu(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.bb]}}
P.N.prototype={$isI:1,
$asI:function(){return[P.V]}}
P.aP.prototype={
aC:function(a,b){return C.b.aC(this.a,b.gdH())},
aB:function(a,b){return C.b.aB(this.a,b.gdH())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.eb()
s=this.a
if(s<0)return"-"+new P.aP(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.ea().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isI:1,
$asI:function(){return[P.aP]}}
P.ea.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.p]}}}
P.eb.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.p]}}}
P.bc.prototype={}
P.ce.prototype={
k:function(a){return"Assertion failed"}}
P.bh.prototype={
k:function(a){return"Throw of null."}}
P.aq.prototype={
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
o=P.jq(this.b)
return q+p+": "+H.f(o)}}
P.dq.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eJ.prototype={
gaJ:function(){return"RangeError"},
gaI:function(){H.d(this.a)
if(J.lg(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.w.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.c_.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.ai.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a2.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jq(t))+"."}}
P.du.prototype={
k:function(a){return"Stack Overflow"},
$isbc:1}
P.e3.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hR.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.ed.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.k_(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kq(b,"expando$values")
return s==null?null:H.kq(s,t)}}
P.p.prototype={$isI:1,
$asI:function(){return[P.V]}}
P.W.prototype={
az:function(a,b){return new H.dA(this,b,[H.ad(this,"W",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga_:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.d5())
s=t.gq()
if(t.p())throw H.e(H.mo())
return s},
t:function(a,b){var t,s,r
if(b<0)H.E(P.aX(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
k:function(a){return P.mm(this,"(",")")}}
P.d6.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.M.prototype={$asM:null}
P.aD.prototype={
gv:function(a){return P.o.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.V.prototype={$isI:1,
$asI:function(){return[P.V]}}
P.o.prototype={constructor:P.o,$iso:1,
A:function(a,b){return this===b},
gv:function(a){return H.aW(this)},
k:function(a){return H.fB(this)},
gB:function(a){return new H.aE(H.iR(this),null)},
toString:function(){return this.k(this)}}
P.bU.prototype={}
P.r.prototype={$isI:1,
$asI:function(){return[P.r]}}
P.bW.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga0:function(){return this.a}}
W.m.prototype={}
W.dS.prototype={
k:function(a){return String(a)},
$isa:1}
W.dT.prototype={
k:function(a){return String(a)},
$isa:1}
W.a1.prototype={$iso:1}
W.dX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isq:1,
$asq:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.b8.prototype={$isb8:1}
W.aN.prototype={$isa:1,$isaN:1}
W.cf.prototype={
cJ:function(a,b,c){var t=this.dK(a,b,P.n8(c,null))
return t},
dK:function(a,b,c){return a.getContext(b,c)}}
W.dZ.prototype={
aA:function(a){return P.iM(a.getContextAttributes())}}
W.aO.prototype={$isa:1,
gj:function(a){return a.length}}
W.e1.prototype={$isa:1}
W.A.prototype={$iso:1}
W.ba.prototype={
bA:function(a,b){var t,s
t=$.$get$k8()
s=t[b]
if(typeof s==="string")return s
s=this.e_(a,b)
t[b]=s
return s},
e_:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m7()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e2.prototype={}
W.e4.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ch.prototype={}
W.bx.prototype={
e4:function(a,b){return a.adoptNode(b)},
cK:function(a,b){return a.getElementById(b)},
eO:function(a,b){return a.querySelector(b)}}
W.ci.prototype={$isa:1}
W.e6.prototype={
k:function(a){return String(a)}}
W.cj.prototype={
en:function(a,b){return a.createHTMLDocument(b)}}
W.e7.prototype={
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
t=J.v(b)
if(!t.$isJ)return!1
return a.left===t.gb_(b)&&a.top===t.gb7(b)&&this.gY(a)===t.gY(b)&&this.gX(a)===t.gX(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gY(a)
q=this.gX(a)
return W.kQ(W.b4(W.b4(W.b4(W.b4(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gX:function(a){return a.height},
gb_:function(a){return a.left},
gb7:function(a){return a.top},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isJ:1,
$asJ:function(){}}
W.e8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
$isq:1,
$asq:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.e9.prototype={
gj:function(a){return a.length}}
W.a3.prototype={
ge8:function(a){return new W.hK(a)},
k:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kg
if(t==null){t=H.D([],[W.dk])
s=new W.dl(t)
C.a.l(t,W.kO(null))
C.a.l(t,W.kR())
$.kg=s
d=s}else d=t
t=$.kf
if(t==null){t=new W.dH(d)
$.kf=t
c=t}else{t.a=d
c=t}}if($.aA==null){t=document
s=t.implementation
s=(s&&C.z).en(s,"")
$.aA=s
$.jp=s.createRange()
s=$.aA
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aA.head;(t&&C.A).O(t,r)}t=$.aA
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jJ(s,"$isaN")}t=$.aA
if(!!this.$isaN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aA.body;(t&&C.f).O(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.L,a.tagName)){t=$.jp;(t&&C.v).cN(t,q)
t=$.jp
p=(t&&C.v).el(t,b)}else{q.innerHTML=b
p=$.aA.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.O(p,s)}t=$.aA.body
if(q==null?t!=null:q!==t)J.lN(q)
c.bf(p)
C.i.e4(document,p)
return p},
em:function(a,b,c){return this.M(a,b,c,null)},
cX:function(a,b,c,d){a.textContent=null
this.O(a,this.M(a,b,c,d))},
cW:function(a,b){return this.cX(a,b,null,null)},
a4:function(a,b){return a.getAttribute(b)},
dS:function(a,b){return a.removeAttribute(b)},
$isa:1,
$iso:1,
$isa3:1,
$ish:1,
$isu:1,
geV:function(a){return a.tagName}}
W.iK.prototype={
$1:function(a){return!!J.v(a).$isa3},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={}
W.h.prototype={
dB:function(a,b,c,d){return a.addEventListener(b,H.aI(c,1),!1)},
dU:function(a,b,c,d){return a.removeEventListener(b,H.aI(c,1),!1)},
$iso:1,
$ish:1}
W.Q.prototype={$iso:1,$isQ:1}
W.bF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.Q]},
$isc:1,
$asc:function(){return[W.Q]},
$isq:1,
$asq:function(){return[W.Q]},
$isb:1,
$asb:function(){return[W.Q]},
$isbF:1}
W.ex.prototype={
gj:function(a){return a.length}}
W.eB.prototype={
gj:function(a){return a.length}}
W.a4.prototype={$iso:1}
W.cp.prototype={}
W.eF.prototype={
gj:function(a){return a.length}}
W.bG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isq:1,
$asq:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cq.prototype={}
W.eG.prototype={
H:function(a,b){return a.send(b)}}
W.bH.prototype={}
W.bI.prototype={$isbI:1}
W.eK.prototype={$isa:1,$isa3:1}
W.aU.prototype={$iso:1,$isaU:1}
W.eW.prototype={
k:function(a){return String(a)}}
W.bL.prototype={}
W.f4.prototype={
gj:function(a){return a.length}}
W.bf.prototype={$iso:1,$ish:1,$isbf:1}
W.f6.prototype={
f3:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bM.prototype={}
W.a6.prototype={$iso:1}
W.f7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isq:1,
$asq:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.O.prototype={$iso:1,$isO:1}
W.di.prototype={
cM:function(a,b,c){var t,s,r,q
t=W.bf
s=new P.H(0,$.x,null,[t])
r=new P.dC(s,[t])
q=P.aC(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.dL(a,new P.iu([],[]).b8(q),new W.fh(r),new W.fi(r))
return s},
cL:function(a,b){return this.cM(a,!1,b)},
dL:function(a,b,c,d){return a.getUserMedia(b,H.aI(c,1),H.aI(d,1))},
$isa:1}
W.fh.prototype={
$1:function(a){this.a.ad(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fi.prototype={
$1:function(a){this.a.eg(a)},
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
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.O(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lj(t,c,C.t.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.co(t,t.length,-1,null,[H.ad(t,"B",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.t.h(this.a.childNodes,b)},
$asc:function(){return[W.u]},
$asda:function(){return[W.u]},
$asb:function(){return[W.u]},
$asbS:function(){return[W.u]}}
W.u.prototype={
eP:function(a){var t=a.parentNode
if(t!=null)J.bt(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d0(a):t},
O:function(a,b){return a.appendChild(b)},
dT:function(a,b){return a.removeChild(b)},
dV:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isu:1,
gb2:function(a){return a.previousSibling}}
W.dj.prototype={
b3:function(a){return a.previousNode()}}
W.bR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isq:1,
$asq:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.fr.prototype={$isa:1}
W.fu.prototype={
gj:function(a){return a.length}}
W.a7.prototype={$iso:1,
gj:function(a){return a.length}}
W.fw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fA.prototype={
H:function(a,b){return a.send(b)}}
W.dp.prototype={
el:function(a,b){return a.createContextualFragment(b)},
cN:function(a,b){return a.selectNodeContents(b)}}
W.fJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dr.prototype={
H:function(a,b){return a.send(b)}}
W.fL.prototype={
gj:function(a){return a.length}}
W.fO.prototype={$isa:1}
W.a8.prototype={$iso:1,$ish:1}
W.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$iso:1}
W.fR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$iso:1,
gj:function(a){return a.length}}
W.fW.prototype={
h:function(a,b){return this.bJ(a,b)},
ag:function(a,b){var t,s
for(t=0;!0;++t){s=this.dO(a,t)
if(s==null)return
b.$2(s,this.bJ(a,s))}},
gj:function(a){return a.length},
bJ:function(a,b){return a.getItem(b)},
dO:function(a,b){return a.key(b)},
$isM:1,
$asM:function(){return[P.r,P.r]}}
W.X.prototype={$iso:1}
W.aj.prototype={}
W.dv.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=W.m8("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.S(s).L(0,new W.S(t))
return s}}
W.h4.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.M(t.createElement("table"),b,c,d)
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
W.h5.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.M(t.createElement("table"),b,c,d)
t.toString
t=new W.S(t)
r=t.ga_(t)
s.toString
r.toString
new W.S(s).L(0,new W.S(r))
return s}}
W.bX.prototype={$isbX:1}
W.ab.prototype={$iso:1,$ish:1}
W.Y.prototype={$iso:1,$ish:1}
W.h8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isq:1,
$asq:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.h9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.hb.prototype={
gj:function(a){return a.length}}
W.ac.prototype={$iso:1}
W.aY.prototype={$iso:1,$isaY:1}
W.hf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isq:1,
$asq:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.hg.prototype={
gj:function(a){return a.length}}
W.bj.prototype={}
W.hi.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dz.prototype={
b3:function(a){return a.previousNode()}}
W.aF.prototype={}
W.ho.prototype={
k:function(a){return String(a)},
$isa:1}
W.bl.prototype={$isbl:1}
W.hq.prototype={
gj:function(a){return a.length}}
W.ht.prototype={
gj:function(a){return a.length}}
W.hu.prototype={
H:function(a,b){return a.send(b)}}
W.b_.prototype={
gep:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.w("deltaY is not supported"))},
$iso:1,
$isO:1,
$isb_:1}
W.c0.prototype={
ge7:function(a){var t,s
t=P.V
s=new P.H(0,$.x,null,[t])
this.dJ(a)
this.dW(a,W.kW(new W.hw(new P.iy(s,[t]))))
return s},
dW:function(a,b){return a.requestAnimationFrame(H.aI(b,1))},
dJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
e5:function(a,b){return a.alert(b)},
$isa:1}
W.hw.prototype={
$1:function(a){this.a.ad(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hx.prototype={$isa:1}
W.b0.prototype={$isa:1}
W.hF.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.v(b)
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
t=J.ap(a.left)
s=J.ap(a.top)
r=J.ap(a.width)
q=J.ap(a.height)
return W.kQ(W.b4(W.b4(W.b4(W.b4(0,t),s),r),q))},
$isJ:1,
$asJ:function(){},
gX:function(a){return a.height},
gb_:function(a){return a.left},
gb7:function(a){return a.top},
gY:function(a){return a.width}}
W.dD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]},
$isq:1,
$asq:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.hH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isq:1,
$asq:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hI.prototype={$isa:1}
W.hJ.prototype={
gX:function(a){return a.height},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isq:1,
$asq:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.i5.prototype={$isa:1}
W.dF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.u]},
$isc:1,
$asc:function(){return[W.u]},
$isq:1,
$asq:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.ip.prototype={$isa:1}
W.is.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.iw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isn:1,
$asn:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isq:1,
$asq:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.iD.prototype={$isa:1}
W.iE.prototype={$isa:1}
W.hD.prototype={
ag:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.an)(t),++p){o=t[p]
b.$2(o,q.a4(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$isM:1,
$asM:function(){return[P.r,P.r]},
gdM:function(){return this.a}}
W.hK.prototype={
h:function(a,b){return J.jm(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hO.prototype={
cg:function(a,b,c,d){return W.ay(this.a,this.b,a,!1,H.am(this,0))}}
W.hL.prototype={}
W.hP.prototype={
ed:function(a){if(this.b==null)return
this.e2()
this.b=null
this.sdQ(null)
return},
e1:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lh(r,this.c,t,!1)}},
e2:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.li(r,this.c,t,!1)}},
du:function(a,b,c,d,e){this.e1()},
sdQ:function(a){this.d=a}}
W.hQ.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c2.prototype={
a1:function(a){return $.$get$kP().C(0,W.by(a))},
S:function(a,b,c){var t,s,r
t=W.by(a)
s=$.$get$jC()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dv:function(a){var t,s
t=$.$get$jC()
if(t.gaj(t)){for(s=0;s<262;++s)t.i(0,C.K[s],W.nf())
for(s=0;s<12;++s)t.i(0,C.k[s],W.ng())}}}
W.B.prototype={
gw:function(a){return new W.co(a,this.gj(a),-1,null,[H.ad(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dl.prototype={
a1:function(a){return C.a.bU(this.a,new W.fk(a))},
S:function(a,b,c){return C.a.bU(this.a,new W.fj(a,b,c))}}
W.fk.prototype={
$1:function(a){return a.a1(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fj.prototype={
$1:function(a){return a.S(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c5.prototype={
a1:function(a){return this.a.C(0,W.by(a))},
S:function(a,b,c){var t,s
t=W.by(a)
s=this.c
if(s.C(0,H.f(t)+"::"+b))return this.d.e6(c)
else if(s.C(0,"*::"+b))return this.d.e6(c)
else{s=this.b
if(s.C(0,H.f(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.f(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
dz:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.az(0,new W.iq())
s=b.az(0,new W.ir())
this.b.L(0,t)
r=this.c
r.L(0,C.r)
r.L(0,s)}}
W.iq.prototype={
$1:function(a){return!C.a.C(C.k,a)},
$S:function(){return{func:1,args:[,]}}}
W.ir.prototype={
$1:function(a){return C.a.C(C.k,a)},
$S:function(){return{func:1,args:[,]}}}
W.iz.prototype={
S:function(a,b,c){if(this.d3(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jm(a,"template")==="")return this.e.C(0,b)
return!1}}
W.iA.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.ix.prototype={
a1:function(a){var t=J.v(a)
if(!!t.$isbT)return!1
t=!!t.$isG
if(t&&W.by(a)==="foreignObject")return!1
if(t)return!0
return!1},
S:function(a,b,c){if(b==="is"||C.e.bi(b,"on"))return!1
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
W.io.prototype={}
W.dH.prototype={
bf:function(a){new W.iB(this).$2(a,null)},
av:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bt(t,a)}else J.bt(b,a)},
dZ:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lB(a)
r=J.jm(s.gdM(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.L(n)}p="element unprintable"
try{p=J.aL(a)}catch(n){H.L(n)}try{o=W.by(a)
this.dY(a,b,t,p,o,s,r)}catch(n){if(H.L(n) instanceof P.aq)throw n
else{this.av(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dY:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.av(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a1(a)){this.av(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aL(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.S(a,"is",g)){this.av(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.D(t.slice(0),[H.am(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.S(a,J.lS(p),q.a4(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a4(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a4(t,p)
q.dS(t,p)}}if(!!J.v(a).$isbX)this.bf(a.content)}}
W.iB.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dZ(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bt(r,a)}else J.bt(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lC(t)}catch(q){H.L(q)
r=t
J.bt(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.u,W.u]}}}
W.bz.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bD.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bE.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cr.prototype={}
W.cL.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.Q]},
$isb:1,
$asb:function(){return[W.Q]}}
W.cC.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.d1.prototype={$isc:1,
$asc:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.Q]},
$isb:1,
$asb:function(){return[W.Q]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.d4.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.d_.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
P.it.prototype={
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
s=J.v(a)
if(!!s.$isbb)return new Date(a.a)
if(!!s.$isQ)return a
if(!!s.$isb8)return a
if(!!s.$isbF)return a
if(!!s.$isbI)return a
if(!!s.$isbg||!!s.$isaV)return a
if(!!s.$isM){r=this.ce(a)
q=this.b
p=q[r]
t.a=p
if(p!=null)return p
p={}
t.a=p
q[r]=p
s.ag(a,new P.iv(t,this))
return t.a}if(!!s.$isb){r=this.ce(a)
p=this.b[r]
if(p!=null)return p
return this.ek(a,r)}throw H.e(new P.c_("structured clone of other type"))},
ek:function(a,b){var t,s,r,q
t=J.a_(a)
s=t.gj(a)
r=new Array(s)
this.b[b]=r
for(q=0;q<s;++q)r[q]=this.b8(t.h(a,q))
return r}}
P.iv.prototype={
$2:function(a,b){this.a.a[a]=this.b.b8(b)},
$S:function(){return{func:1,args:[,,]}}}
P.iL.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.iu.prototype={}
P.ie.prototype={}
P.J.prototype={$asJ:null}
P.dR.prototype={$isa:1}
P.aM.prototype={$isa:1}
P.ee.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.eu.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.af.prototype={}
P.aB.prototype={$isa:1}
P.eH.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$iso:1}
P.eR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.f1.prototype={$isa:1}
P.f2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$iso:1}
P.fl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.fs.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fy.prototype={
gj:function(a){return a.length}}
P.fD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bT.prototype={$isa:1,$isbT:1}
P.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.G.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.dk])
C.a.l(t,W.kO(null))
C.a.l(t,W.kR())
C.a.l(t,new W.ix())
c=new W.dH(new W.dl(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.f).em(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.S(q)
o=t.ga_(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.O(p,r)
return p},
$isa:1,
$isG:1}
P.h2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h3.prototype={$isa:1}
P.dw.prototype={}
P.h7.prototype={$isa:1}
P.bY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$iso:1}
P.hh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.hp.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hr.prototype={$isa:1}
P.hs.prototype={$isa:1}
P.c1.prototype={$isa:1}
P.ik.prototype={$isa:1}
P.il.prototype={$isa:1}
P.im.prototype={$isa:1}
P.cu.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cs.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cD.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cN.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cU.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.dW.prototype={
gj:function(a){return a.length}}
P.fH.prototype={
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
aA:function(a){return P.iM(a.getContextAttributes())},
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
if(t){this.aR(a,b,c,d,e,f,P.l1(g))
return}if(!!J.v(g).$isbl)t=!0
else t=!1
if(t){this.aS(a,b,c,d,e,f,g)
return}throw H.e(P.dU("Incorrect number or type of arguments"))},
co:function(a,b,c,d,e,f,g){return this.b5(a,b,c,d,e,f,g,null,null,null)},
aR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aS:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cp:function(a,b,c,d){return a.texParameterf(b,c,d)},
cq:function(a,b,c,d){return a.texParameteri(b,c,d)},
cr:function(a,b,c){return a.uniform1f(b,c)},
cs:function(a,b,c){return a.uniform1fv(b,c)},
ct:function(a,b,c){return a.uniform1i(b,c)},
cu:function(a,b,c){return a.uniform1iv(b,c)},
cv:function(a,b,c){return a.uniform2fv(b,c)},
cw:function(a,b,c){return a.uniform3fv(b,c)},
cz:function(a,b,c){return a.uniform4fv(b,c)},
cA:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cB:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cD:function(a,b){return a.useProgram(b)},
cF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)}}
P.fI.prototype={
e9:function(a,b){return a.beginTransformFeedback(b)},
ec:function(a,b){return a.bindVertexArray(b)},
eo:function(a){return a.createVertexArray()},
ew:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ex:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ey:function(a){return a.endTransformFeedback()},
f_:function(a,b,c,d){this.e0(a,b,c,d)
return},
e0:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f0:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
aA:function(a){return P.iM(a.getContextAttributes())},
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
if(t){this.aR(a,b,c,d,e,f,P.l1(g))
return}if(!!J.v(g).$isbl)t=!0
else t=!1
if(t){this.aS(a,b,c,d,e,f,g)
return}throw H.e(P.dU("Incorrect number or type of arguments"))},
co:function(a,b,c,d,e,f,g){return this.b5(a,b,c,d,e,f,g,null,null,null)},
aR:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aS:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cp:function(a,b,c,d){return a.texParameterf(b,c,d)},
cq:function(a,b,c,d){return a.texParameteri(b,c,d)},
cr:function(a,b,c){return a.uniform1f(b,c)},
cs:function(a,b,c){return a.uniform1fv(b,c)},
ct:function(a,b,c){return a.uniform1i(b,c)},
cu:function(a,b,c){return a.uniform1iv(b,c)},
cv:function(a,b,c){return a.uniform2fv(b,c)},
cw:function(a,b,c){return a.uniform3fv(b,c)},
cz:function(a,b,c){return a.uniform4fv(b,c)},
cA:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cB:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cD:function(a,b){return a.useProgram(b)},
cF:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
$isa:1}
P.iC.prototype={$isa:1}
P.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iM(this.dN(a,b))},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dN:function(a,b){return a.item(b)},
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
B.j8.prototype={
$1:function(a){$.$get$iN().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aU]}}}
B.j9.prototype={
$1:function(a){$.$get$iN().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aU]}}}
B.ja.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.n5=t
$.n6=C.b.a6(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jM=s-C.b.I(window.innerWidth,2)
$.l9=-(t-C.b.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.O]}}}
B.jb.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cc=t-C.b.I(window.innerWidth,2)
$.cd=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$cb().i(0,"right",!0)
else $.$get$cb().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.O]}}}
B.jc.prototype={
$1:function(a){if(a.button===2)$.$get$cb().i(0,"right",null)
else $.$get$cb().i(0,"left",null)},
$S:function(){return{func:1,args:[W.O]}}}
B.fm.prototype={
di:function(a,b,c,d){var t
d.toString
W.ay(d,W.ne().$1(d),new B.fn(this),!1,W.b_)
W.ay(d,"mousemove",new B.fo(this),!1,W.O)
t=W.aY
W.ay(d,"touchstart",new B.fp(),!1,t)
W.ay(d,"touchmove",new B.fq(this),!1,t)
B.nu(null)}}
B.fn.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a5.gep(a)*r.k3
if(C.c.a6(r.fy,t)>0)r.fy=H.Z(C.c.a6(r.fy,t))}catch(q){s=H.L(q)
P.ae(s)}},
$S:function(){return{func:1,args:[W.b_]}}}
B.fo.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Z(t.go+C.b.a6($.jM,$.cc)*0.01)
s=t.id
r=$.cd
q=$.l9
t.id=H.Z(s+(r-q)*0.01)
$.cc=$.jM
$.cd=q}},
$S:function(){return{func:1,args:[W.O]}}}
B.fp.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a2(t.clientX)
C.c.a2(t.clientY)
$.cc=s
C.c.a2(t.clientX)
$.cd=C.c.a2(t.clientY)},
$S:function(){return{func:1,args:[W.aY]}}}
B.fq.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a2(t.clientX)
t=C.c.a2(t.clientY)
r=this.a
r.go=H.Z(r.go+C.b.a6(s,$.cc)*0.01)
r.id=H.Z(r.id+($.cd-t)*0.01)
$.cc=s
$.cd=t},
$S:function(){return{func:1,args:[W.aY]}}}
G.f8.prototype={}
G.hm.prototype={
W:function(a,b){var t=this.d
if(H.aH(!t.D(0,a)))H.b5("uniform "+a+" already set")
t.i(0,a,b)},
bq:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aE(H.iR(this),null).k(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gE(s),r=r.gw(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ak(t,"\n")}}
G.dY.prototype={}
G.e0.prototype={
cd:function(a,b,c){J.ly(this.a,b)
if(c>0)J.lY(this.a,b,c)}}
G.ew.prototype={}
G.eE.prototype={
bo:function(a){var t=this.e
H.d(!t.D(0,a))
H.d(C.e.bi(a,"a"))
switch($.$get$T().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.y]))
break
case"vec3":t.i(0,a,H.D([],[T.t]))
break
case"vec4":t.i(0,a,H.D([],[T.aG]))
break
case"float":t.i(0,a,H.D([],[P.N]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.p]]))
break
default:if(H.aH(!1))H.b5("unknown type for "+a)}},
d8:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.ew(t,t+1,t+2,t+3))},
d9:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.t(new Float32Array(3))
q.Z(r)
C.a.l(t,q)}},
d6:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<24;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.y(p))}},
d7:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.t(new Float32Array(3))
p.Z(q)
s.l(t,p)}},
de:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.D(s,[P.p])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gf5(o)
r[q+1]=o.gf6(o)
r[q+2]=o.gf7(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.an)(t),++p){m=t[p]
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
G.dy.prototype={}
G.dx.prototype={}
G.f3.prototype={}
G.f5.prototype={
bn:function(a,b,c){var t,s
if(C.e.aG(a,0)===105){if(H.aH(C.b.aF(b.length,c)===this.z))H.b5("ChangeAttribute "+this.z)}else H.d(C.b.aF(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dM(t.a,34962,s)
J.jR(t.a,34962,b,35048)},
df:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a7:function(a,b,c){var t,s,r,q,p,o
t=J.jO(a,0)===105
if(t&&this.z===0)this.z=C.b.aF(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.ji(r.a))
this.bn(a,b,c)
q=$.$get$T().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aH(p.D(0,a)))H.b5("unexpected attribute "+a)
o=p.h(0,a)
J.dN(r.a,this.e)
r.cd(0,o,t?1:0)
s=s.h(0,a)
p=q.bp()
J.dM(r.a,34962,s)
J.jZ(r.a,o,p,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gE(t),t=t.gw(t);t.p();){r=t.gq()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.ak(s,"  ")},
saK:function(a){this.cx=a}}
G.ft.prototype={
da:function(a,b){var t=C.b.cH(a,b)
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
o=new T.t(new Float32Array(H.l(3)))
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
s=J.v(n)
r=!!s.$isaG
k=r?s.gay(n):1
if(!!s.$ist){j=s.gm(n)
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
a3.eM(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fG.prototype={
dn:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c3(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.C(0,q))C.a.l(r,q)}return r},
ds:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jO(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.j6("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$T().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jn(r.a,k,m)
else if(!!J.v(m).$iskk)J.lW(r.a,k,m)
break
case"float":if(l.c===0)J.lU(r.a,k,m)
else if(!!J.v(m).$isez)J.lV(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aJ(m,"$isat").a
J.jY(r.a,k,!1,j)}else if(!!J.v(m).$isez)J.jY(r.a,k,!1,m)
else if(H.aH(!1))H.b5("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.C.gf4(H.aJ(m,"$isnD"))
J.jX(r.a,k,!1,j)}else if(!!J.v(m).$isez)J.jX(r.a,k,!1,m)
else if(H.aH(!1))H.b5("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aJ(m,"$isaG").a
J.jW(r.a,k,j)}else J.jW(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aJ(m,"$ist").a
J.jV(r.a,k,j)}else J.jV(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aJ(m,"$isy").a
J.jU(r.a,k,j)}else J.jU(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a3(33984,this.ch)
J.jP(r.a,j)
j=H.aJ(m,"$isbZ").b
J.bu(r.a,3553,j)
j=this.ch
J.jn(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a3(33984,this.ch)
J.jP(r.a,j)
j=H.aJ(m,"$isbZ").b
J.bu(r.a,34067,j)
j=this.ch
J.jn(r.a,k,j)
this.ch=this.ch+1
break
default:H.j6("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.F(m,!0))J.dO(r.a,2929)
else J.jj(r.a,2929)
break
case"cStencilFunc":H.aJ(m,"$isdy")
j=m.a
if(j===1281)J.jj(r.a,2960)
else{J.dO(r.a,2960)
i=m.b
h=m.c
J.lP(r.a,j,i,h)}break
case"cDepthWrite":J.ls(r.a,m)
break
case"cBlendEquation":H.aJ(m,"$isdx")
j=m.a
if(j===1281)J.jj(r.a,3042)
else{J.dO(r.a,3042)
i=m.b
h=m.c
J.lm(r.a,i,h)
J.ll(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aP(1000*(s-new P.bb(t,!1).a)).k(0)},
dd:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.lX(t.a,s)
this.ch=0
this.z.T(0)
for(r=0;r<2;++r){q=b[r]
this.ds(q.a,q.bq())}s=this.Q
s.T(0)
for(p=a.cy,p=p.gE(p),p=p.gw(p);p.p();)s.l(0,p.gq())
o=this.dn()
if(o.length!==0)P.ae("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dN(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.df()
m=a.Q
l=a.z
t.toString
if(n)J.lk(t.a,s)
if(m!==-1)if(l>1)J.lw(t.a,s,p,m,0,l)
else J.lv(t.a,s,p,m,0)
else if(l>1)J.lu(t.a,s,0,p,l)
else J.lt(t.a,s,0,p)
if(n)J.lz(t.a)},
dc:function(a,b){return this.dd(a,b,null)},
dj:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lp(t.a)
m=G.kL(t.a,35633,r)
J.jQ(t.a,n,m)
l=G.kL(t.a,35632,p)
J.jQ(t.a,n,l)
if(o.length>0)J.lT(t.a,n,o,35980)
J.lK(t.a,n)
if(!J.lJ(t.a,n,35714))H.E(J.lI(t.a,n))
this.r=n
this.sdC(0,P.jw(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.an)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.jT(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.an)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.jT(t.a,q,j))}},
sdC:function(a,b){this.x=b}}
G.i.prototype={
bp:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.ds.prototype={
d5:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<2;++r){q=a[r]
H.d($.$get$T().D(0,q))
H.d(!C.a.C(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aD(t)},
bl:function(a){var t,s,r
H.d(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.aH($.$get$T().D(0,r)))H.b5("missing uniform "+r)
H.d(!C.a.C(t,r))
C.a.l(t,r)}C.a.aD(t)},
bm:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$T().D(0,r))
H.d(!C.a.C(t,r))
C.a.l(t,r)}C.a.aD(t)},
dk:function(a,b){H.d(this.b==null)
this.b=this.dt(!0,a,b)},
br:function(a){return this.dk(a,null)},
dt:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.an)(t),++o){n=t[o]
m=$.$get$T().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.an)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.an)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.an)(t),++o){k=t[o]
m=$.$get$T().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.L(q,b)
C.a.l(q,"}")
return C.a.ak(q,"\n")}}
G.fQ.prototype={}
G.ha.prototype={
dg:function(a,b){var t=this.e
if(t!==1)J.lR(a.a,b,34046,t)
J.dQ(a.a,b,10240,this.r)
J.dQ(a.a,b,10241,this.f)
if(this.b){J.dQ(a.a,b,10242,33071)
J.dQ(a.a,b,10243,33071)}}}
G.bZ.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eI.prototype={
bs:function(a){var t,s
t=this.d
s=this.c
J.bu(t.a,s,this.b)
J.lQ(t.a,s,0,6408,6408,5121,a)}}
R.fU.prototype={
dw:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mL("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.m).bA(r,"float")
r.setProperty(p,"left","")
p=C.m.bA(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.h.O(t,s)}return t},
dl:function(a,b,c){var t,s,r
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
J.jg(this.a,s)
r=this.dw(b,c,90,30)
this.d=r
J.jg(this.a,r)
t=t.createElement("div")
this.c=t
J.jg(this.a,t)}}
R.fV.prototype={
dr:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.o.eZ(s,2)+" fps"
t=this.c;(t&&C.h).cW(t,b)
r=C.b.I(30*C.o.ee(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.h).O(t,q)},
dq:function(a){return this.dr(a,"")}}
D.eY.prototype={
$1:function(a){var t,s
t=document.createElement("video")
t.autoplay=!0
s=new W.hL(t,"playing",!1,[W.j])
s.gaY(s).an(new D.eX(this.a,t))
t.src=(self.URL||self.webkitURL).createObjectURL(a)},
$S:function(){return{func:1,args:[W.bf]}}}
D.eX.prototype={
$1:function(a){return this.a.ad(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
D.eZ.prototype={
$1:function(a){P.ae("E:"+("Camera open error "+H.f(a)))
this.a.ad(0,null)},
$S:function(){return{func:1,args:[P.o]}}}
A.iT.prototype={
$2:function(a,b){var t=536870911&a+J.ap(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.o]}}}
T.at.prototype={
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
if(b instanceof T.at){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.iS(this.a)},
ap:function(a){var t,s
t=new Float32Array(H.l(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aG(t)},
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
eM:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.y.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.y){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.iS(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.t.prototype={
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
if(b instanceof T.t){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.iS(this.a)},
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
t=new T.t(new Float32Array(H.l(3)))
t.u(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.aG.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aG){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.iS(this.a)},
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
U.j3.prototype={
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
r.id=0}q=H.Z(C.c.ef(r.id,-1.4707963267948965,1.4707963267948965))
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
k=new T.t(new Float32Array(H.l(3)))
k.u(0,1,0)
j=r.e
i=j.a
i[0]=l[12]
i[1]=l[13]
i[2]=l[14]
i=new Float32Array(H.l(3))
h=new T.t(i)
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
P.ae(t)}this.e.dc(this.r,[this.d,this.f])
this.b.dq(s.c)
C.x.ge7(window).an(this)},
$S:function(){return{func:1,v:true,args:[P.V]}}}
U.j4.prototype={
$1:function(a){var t,s,r,q,p,o,n
t=J.b6(a,0)
s=this.a
s.a=t
if(t==null)C.x.e5(window,"Could not access camera - do you have a camera installed?")
r=this.b
q=s.a
p=$.$get$kw()
o=J.lq(r.a)
n=new G.eI(q,"video",o,3553,r,p)
J.bu(r.a,3553,o)
J.lM(r.a,37440,1)
n.bs(q)
p.dg(r,3553)
H.d(J.lH(r.a)===0)
J.bu(r.a,3553,null)
s.b=n
this.c.W("uTexture",n)
this.d.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.d0=J.a.prototype.k
J.bJ.prototype.d2=J.bJ.prototype.k
P.W.prototype.d1=P.W.prototype.az
W.a3.prototype.aE=W.a3.prototype.M
W.c5.prototype.d3=W.c5.prototype.S;(function installTearOffs(){installTearOff(H.b2.prototype,"geJ",0,0,0,null,["$0"],["ax"],0)
installTearOff(H.ak.prototype,"gcO",0,0,0,null,["$1"],["J"],2)
installTearOff(H.b1.prototype,"ger",0,0,0,null,["$1"],["U"],2)
installTearOff(P,"n1",1,0,0,null,["$1"],["mI"],1)
installTearOff(P,"n2",1,0,0,null,["$1"],["mJ"],1)
installTearOff(P,"n3",1,0,0,null,["$1"],["mK"],1)
installTearOff(P,"l_",1,0,0,null,["$0"],["n_"],0)
installTearOff(P.H.prototype,"gbF",0,0,0,null,["$2","$1"],["F","dF"],5)
installTearOff(P,"n9",1,0,0,null,["$2"],["m3"],6)
installTearOff(W,"ne",1,0,0,null,["$1"],["m9"],7)
installTearOff(W,"nf",1,0,0,null,["$4"],["mO"],4)
installTearOff(W,"ng",1,0,0,null,["$4"],["mP"],4)
installTearOff(W.dj.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(W.dz.prototype,"gb2",0,1,0,null,["$0"],["b3"],3)
installTearOff(U,"l0",1,0,0,null,["$0"],["no"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.jt,t)
inherit(J.a,t)
inherit(J.dV,t)
inherit(P.W,t)
inherit(H.db,t)
inherit(P.d6,t)
inherit(H.cn,t)
inherit(H.b9,t)
inherit(H.ic,t)
inherit(H.b2,t)
inherit(H.hM,t)
inherit(H.b3,t)
inherit(H.ib,t)
inherit(H.hE,t)
inherit(H.bi,t)
inherit(H.hc,t)
inherit(H.ar,t)
inherit(H.ak,t)
inherit(H.b1,t)
inherit(H.fF,t)
inherit(H.hj,t)
inherit(P.bc,t)
inherit(H.dG,t)
inherit(H.aE,t)
inherit(H.ag,t)
inherit(H.eS,t)
inherit(H.eU,t)
inherit(P.hG,t)
inherit(P.bm,t)
inherit(P.H,t)
inherit(P.dB,t)
inherit(P.bV,t)
inherit(P.fX,t)
inherit(P.b7,t)
inherit(P.iF,t)
inherit(P.fN,t)
inherit(P.i9,t)
inherit(P.c3,t)
inherit(P.bS,t)
inherit(P.z,t)
inherit(P.ia,t)
inherit(P.az,t)
inherit(P.I,t)
inherit(P.bb,t)
inherit(P.V,t)
inherit(P.aP,t)
inherit(P.du,t)
inherit(P.hR,t)
inherit(P.ed,t)
inherit(P.b,t)
inherit(P.M,t)
inherit(P.aD,t)
inherit(P.bU,t)
inherit(P.r,t)
inherit(P.bW,t)
inherit(W.e2,t)
inherit(W.hD,t)
inherit(W.c2,t)
inherit(W.B,t)
inherit(W.dl,t)
inherit(W.c5,t)
inherit(W.ix,t)
inherit(W.co,t)
inherit(W.dk,t)
inherit(W.io,t)
inherit(W.dH,t)
inherit(P.it,t)
inherit(P.ie,t)
inherit(G.f8,t)
inherit(G.e0,t)
inherit(G.ew,t)
inherit(G.eE,t)
inherit(G.dy,t)
inherit(G.dx,t)
inherit(G.i,t)
inherit(G.ds,t)
inherit(G.ha,t)
inherit(G.bZ,t)
inherit(R.fU,t)
inherit(T.at,t)
inherit(T.y,t)
inherit(T.t,t)
inherit(T.aG,t)
t=J.a
inherit(J.eO,t)
inherit(J.d9,t)
inherit(J.bJ,t)
inherit(J.aR,t)
inherit(J.bd,t)
inherit(J.aS,t)
inherit(H.bg,t)
inherit(H.aV,t)
inherit(W.h,t)
inherit(W.a1,t)
inherit(W.b8,t)
inherit(W.dZ,t)
inherit(W.A,t)
inherit(W.cr,t)
inherit(W.e4,t)
inherit(W.e5,t)
inherit(W.e6,t)
inherit(W.cj,t)
inherit(W.ck,t)
inherit(W.cl,t)
inherit(W.cC,t)
inherit(W.e9,t)
inherit(W.j,t)
inherit(W.cB,t)
inherit(W.a4,t)
inherit(W.eF,t)
inherit(W.cA,t)
inherit(W.bI,t)
inherit(W.eW,t)
inherit(W.f4,t)
inherit(W.a6,t)
inherit(W.cy,t)
inherit(W.di,t)
inherit(W.dj,t)
inherit(W.cF,t)
inherit(W.fr,t)
inherit(W.bj,t)
inherit(W.a7,t)
inherit(W.cx,t)
inherit(W.aj,t)
inherit(W.dp,t)
inherit(W.a9,t)
inherit(W.cw,t)
inherit(W.aa,t)
inherit(W.fW,t)
inherit(W.X,t)
inherit(W.cv,t)
inherit(W.hb,t)
inherit(W.ac,t)
inherit(W.cG,t)
inherit(W.hg,t)
inherit(W.dz,t)
inherit(W.ho,t)
inherit(W.ht,t)
inherit(W.hF,t)
inherit(W.cL,t)
inherit(W.cK,t)
inherit(W.cJ,t)
inherit(W.cE,t)
inherit(W.cI,t)
inherit(W.cH,t)
inherit(W.iD,t)
inherit(W.iE,t)
inherit(P.as,t)
inherit(P.cu,t)
inherit(P.au,t)
inherit(P.cz,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.fD,t)
inherit(P.cs,t)
inherit(P.av,t)
inherit(P.cD,t)
inherit(P.hs,t)
inherit(P.dW,t)
inherit(P.fH,t)
inherit(P.fI,t)
inherit(P.iC,t)
inherit(P.ct,t)
t=J.bJ
inherit(J.fv,t)
inherit(J.aZ,t)
inherit(J.aT,t)
inherit(J.js,J.aR)
t=J.bd
inherit(J.d8,t)
inherit(J.d7,t)
t=P.W
inherit(H.c,t)
inherit(H.dc,t)
inherit(H.dA,t)
t=H.c
inherit(H.be,t)
inherit(H.eT,t)
inherit(H.ec,H.dc)
t=P.d6
inherit(H.f_,t)
inherit(H.hv,t)
t=H.be
inherit(H.bK,t)
inherit(P.eV,t)
t=H.b9
inherit(H.jd,t)
inherit(H.je,t)
inherit(H.i7,t)
inherit(H.hN,t)
inherit(H.eL,t)
inherit(H.eM,t)
inherit(H.id,t)
inherit(H.hd,t)
inherit(H.he,t)
inherit(H.jf,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.j1,t)
inherit(H.h6,t)
inherit(H.eP,t)
inherit(H.iU,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(P.hA,t)
inherit(P.hz,t)
inherit(P.hB,t)
inherit(P.hC,t)
inherit(P.eD,t)
inherit(P.eC,t)
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
inherit(P.h_,t)
inherit(P.h0,t)
inherit(P.fY,t)
inherit(P.fZ,t)
inherit(P.iG,t)
inherit(P.iJ,t)
inherit(P.ii,t)
inherit(P.ih,t)
inherit(P.ij,t)
inherit(P.f0,t)
inherit(P.ea,t)
inherit(P.eb,t)
inherit(W.iK,t)
inherit(W.fh,t)
inherit(W.fi,t)
inherit(W.hw,t)
inherit(W.hQ,t)
inherit(W.fk,t)
inherit(W.fj,t)
inherit(W.iq,t)
inherit(W.ir,t)
inherit(W.iA,t)
inherit(W.iB,t)
inherit(P.iv,t)
inherit(P.iL,t)
inherit(B.j8,t)
inherit(B.j9,t)
inherit(B.ja,t)
inherit(B.jb,t)
inherit(B.jc,t)
inherit(B.fn,t)
inherit(B.fo,t)
inherit(B.fp,t)
inherit(B.fq,t)
inherit(D.eY,t)
inherit(D.eX,t)
inherit(D.eZ,t)
inherit(A.iT,t)
inherit(U.j3,t)
inherit(U.j4,t)
t=H.hE
inherit(H.bo,t)
inherit(H.c6,t)
t=P.bc
inherit(H.dm,t)
inherit(H.eQ,t)
inherit(H.hn,t)
inherit(H.hl,t)
inherit(H.e_,t)
inherit(H.fK,t)
inherit(P.ce,t)
inherit(P.bh,t)
inherit(P.aq,t)
inherit(P.w,t)
inherit(P.c_,t)
inherit(P.ai,t)
inherit(P.a2,t)
inherit(P.e3,t)
t=H.h6
inherit(H.fT,t)
inherit(H.bw,t)
inherit(H.hy,P.ce)
t=H.aV
inherit(H.f9,t)
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
inherit(H.fa,t)
t=H.dg
inherit(H.fb,t)
inherit(H.fc,t)
inherit(H.fd,t)
inherit(H.fe,t)
inherit(H.ff,t)
inherit(H.dh,t)
inherit(H.fg,t)
t=P.hG
inherit(P.dC,t)
inherit(P.iy,t)
inherit(P.ig,P.iF)
inherit(P.dE,H.ag)
inherit(P.fM,P.fN)
inherit(P.i6,P.fM)
inherit(P.i8,P.i6)
inherit(P.da,P.bS)
t=P.V
inherit(P.N,t)
inherit(P.p,t)
t=P.aq
inherit(P.dq,t)
inherit(P.eJ,t)
t=W.h
inherit(W.u,t)
inherit(W.bB,t)
inherit(W.e1,t)
inherit(W.ex,t)
inherit(W.bH,t)
inherit(W.bf,t)
inherit(W.bM,t)
inherit(W.fA,t)
inherit(W.dr,t)
inherit(W.fO,t)
inherit(W.a8,t)
inherit(W.bA,t)
inherit(W.ab,t)
inherit(W.Y,t)
inherit(W.bz,t)
inherit(W.hq,t)
inherit(W.hu,t)
inherit(W.c0,t)
inherit(W.hx,t)
inherit(W.b0,t)
inherit(W.ip,t)
t=W.u
inherit(W.a3,t)
inherit(W.aO,t)
inherit(W.bx,t)
inherit(W.ci,t)
inherit(W.hI,t)
t=W.a3
inherit(W.m,t)
inherit(P.G,t)
t=W.m
inherit(W.dS,t)
inherit(W.dT,t)
inherit(W.aN,t)
inherit(W.cf,t)
inherit(W.ch,t)
inherit(W.eB,t)
inherit(W.cp,t)
inherit(W.eK,t)
inherit(W.bL,t)
inherit(W.fL,t)
inherit(W.dv,t)
inherit(W.h4,t)
inherit(W.h5,t)
inherit(W.bX,t)
inherit(W.i5,t)
inherit(W.bE,W.bB)
inherit(W.dX,W.bE)
inherit(W.ba,W.cr)
inherit(W.e7,W.ck)
inherit(W.d4,W.cC)
inherit(W.e8,W.d4)
inherit(W.Q,W.b8)
inherit(W.d2,W.cB)
inherit(W.bF,W.d2)
inherit(W.cX,W.cA)
inherit(W.bG,W.cX)
inherit(W.cq,W.bx)
inherit(W.eG,W.bH)
inherit(W.aF,W.j)
t=W.aF
inherit(W.aU,t)
inherit(W.O,t)
inherit(W.aY,t)
inherit(W.f6,W.bM)
inherit(W.cZ,W.cy)
inherit(W.f7,W.cZ)
inherit(W.S,P.da)
inherit(W.cY,W.cF)
inherit(W.bR,W.cY)
t=W.bj
inherit(W.fu,t)
inherit(W.fJ,t)
inherit(W.hi,t)
inherit(W.cO,W.cx)
inherit(W.fw,W.cO)
inherit(W.fz,W.aj)
inherit(W.bD,W.bA)
inherit(W.fP,W.bD)
inherit(W.cR,W.cw)
inherit(W.fR,W.cR)
inherit(W.cP,W.cv)
inherit(W.h8,W.cP)
inherit(W.bC,W.bz)
inherit(W.h9,W.bC)
inherit(W.cV,W.cG)
inherit(W.hf,W.cV)
inherit(W.bl,W.bL)
inherit(W.b_,W.O)
inherit(W.d_,W.cL)
inherit(W.dD,W.d_)
inherit(W.cM,W.cK)
inherit(W.hH,W.cM)
inherit(W.hJ,W.cl)
inherit(W.cT,W.cJ)
inherit(W.i4,W.cT)
inherit(W.d1,W.cE)
inherit(W.dF,W.d1)
inherit(W.d3,W.cI)
inherit(W.is,W.d3)
inherit(W.d0,W.cH)
inherit(W.iw,W.d0)
inherit(W.hK,W.hD)
inherit(W.hO,P.bV)
inherit(W.hL,W.hO)
inherit(W.hP,P.fX)
inherit(W.iz,W.c5)
inherit(P.iu,P.it)
inherit(P.J,P.ie)
t=P.G
inherit(P.aB,t)
inherit(P.aM,t)
inherit(P.ee,t)
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
inherit(P.ey,t)
inherit(P.f1,t)
inherit(P.f2,t)
inherit(P.fs,t)
inherit(P.bT,t)
inherit(P.h3,t)
inherit(P.hr,t)
inherit(P.c1,t)
inherit(P.ik,t)
inherit(P.il,t)
inherit(P.im,t)
t=P.aB
inherit(P.dR,t)
inherit(P.eA,t)
inherit(P.af,t)
inherit(P.eH,t)
inherit(P.h2,t)
inherit(P.dw,t)
inherit(P.hp,t)
inherit(P.cN,P.cu)
inherit(P.eR,P.cN)
inherit(P.cW,P.cz)
inherit(P.fl,P.cW)
inherit(P.fE,P.af)
inherit(P.cU,P.cs)
inherit(P.h1,P.cU)
t=P.dw
inherit(P.h7,t)
inherit(P.bY,t)
inherit(P.cS,P.cD)
inherit(P.hh,P.cS)
inherit(P.cQ,P.ct)
inherit(P.fS,P.cQ)
t=G.f8
inherit(G.fQ,t)
inherit(G.hm,t)
inherit(G.f5,t)
inherit(G.fG,t)
inherit(G.dY,G.fQ)
inherit(B.fm,G.dY)
t=G.hm
inherit(G.f3,t)
inherit(G.ft,t)
inherit(G.eI,G.bZ)
inherit(R.fV,R.fU)
mixin(H.bN,P.z)
mixin(H.bO,P.z)
mixin(H.bP,H.cn)
mixin(H.bQ,H.cn)
mixin(P.bS,P.z)
mixin(W.bz,P.z)
mixin(W.bA,P.z)
mixin(W.bB,P.z)
mixin(W.bC,W.B)
mixin(W.bD,W.B)
mixin(W.bE,W.B)
mixin(W.cr,W.e2)
mixin(W.cL,P.z)
mixin(W.cx,P.z)
mixin(W.cE,P.z)
mixin(W.cF,P.z)
mixin(W.cG,P.z)
mixin(W.cH,P.z)
mixin(W.cI,P.z)
mixin(W.cJ,P.z)
mixin(W.cK,P.z)
mixin(W.cv,P.z)
mixin(W.cw,P.z)
mixin(W.cy,P.z)
mixin(W.cA,P.z)
mixin(W.cB,P.z)
mixin(W.cC,P.z)
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
mixin(P.cu,P.z)
mixin(P.cs,P.z)
mixin(P.cz,P.z)
mixin(P.cD,P.z)
mixin(P.cN,W.B)
mixin(P.cW,W.B)
mixin(P.cS,W.B)
mixin(P.cU,W.B)
mixin(P.ct,P.z)
mixin(P.cQ,W.B)})();(function constants(){C.f=W.aN.prototype
C.y=W.cf.prototype
C.m=W.ba.prototype
C.h=W.ch.prototype
C.z=W.cj.prototype
C.A=W.cp.prototype
C.i=W.cq.prototype
C.B=J.a.prototype
C.a=J.aR.prototype
C.o=J.d7.prototype
C.b=J.d8.prototype
C.C=J.d9.prototype
C.c=J.bd.prototype
C.e=J.aS.prototype
C.J=J.aT.prototype
C.M=H.dd.prototype
C.N=W.di.prototype
C.t=W.bR.prototype
C.u=J.fv.prototype
C.v=W.dp.prototype
C.w=W.dv.prototype
C.l=J.aZ.prototype
C.a5=W.b_.prototype
C.x=W.c0.prototype
C.d=new P.ig()
C.n=new P.aP(0)
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.I=function(hooks) {
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
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.L=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.r=makeConstList([])
C.j=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.k=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.O=H.K("ny")
C.P=H.K("nz")
C.Q=H.K("ez")
C.R=H.K("nA")
C.S=H.K("nB")
C.T=H.K("kk")
C.U=H.K("nC")
C.V=H.K("kn")
C.W=H.K("aD")
C.X=H.K("r")
C.Y=H.K("kI")
C.Z=H.K("kJ")
C.a_=H.K("nE")
C.a0=H.K("kK")
C.a1=H.K("az")
C.a2=H.K("N")
C.a3=H.K("p")
C.a4=H.K("V")})();(function staticFields(){$.kr="$cachedFunction"
$.ks="$cachedInvocation"
$.k4=null
$.k2=null
$.jD=!1
$.jH=null
$.kX=null
$.lb=null
$.iO=null
$.iX=null
$.jI=null
$.bp=null
$.c7=null
$.c8=null
$.jE=!1
$.x=C.d
$.kh=0
$.aA=null
$.jp=null
$.kg=null
$.kf=null
$.kd=null
$.kc=null
$.kb=null
$.ka=null
$.n5=0
$.n6=0
$.jM=0
$.l9=0
$.cc=0
$.cd=0
$.nv=!1
$.l3=0})();(function lazyInitializers(){lazy($,"k9","$get$k9",function(){return H.l6("_$dart_dartClosure")})
lazy($,"ju","$get$ju",function(){return H.l6("_$dart_js")})
lazy($,"kl","$get$kl",function(){return H.mk()})
lazy($,"km","$get$km",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kh
$.kh=t+1
t="expando$key$"+t}return new P.ed(null,t,[P.p])})
lazy($,"kx","$get$kx",function(){return H.aw(H.hk({
toString:function(){return"$receiver$"}}))})
lazy($,"ky","$get$ky",function(){return H.aw(H.hk({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kz","$get$kz",function(){return H.aw(H.hk(null))})
lazy($,"kA","$get$kA",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kE","$get$kE",function(){return H.aw(H.hk(void 0))})
lazy($,"kF","$get$kF",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kC","$get$kC",function(){return H.aw(H.kD(null))})
lazy($,"kB","$get$kB",function(){return H.aw(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kH","$get$kH",function(){return H.aw(H.kD(void 0))})
lazy($,"kG","$get$kG",function(){return H.aw(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jB","$get$jB",function(){return P.mH()})
lazy($,"kj","$get$kj",function(){return P.mM(null,P.aD)})
lazy($,"c9","$get$c9",function(){return[]})
lazy($,"k8","$get$k8",function(){return{}})
lazy($,"kP","$get$kP",function(){return P.jw(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jC","$get$jC",function(){return P.a5()})
lazy($,"iN","$get$iN",function(){return P.ko(P.p,P.az)})
lazy($,"cb","$get$cb",function(){return P.ko(P.r,P.az)})
lazy($,"ku","$get$ku",function(){return new G.dy(1281,0,4294967295)})
lazy($,"k0","$get$k0",function(){return new G.dx(1281,1281,1281)})
lazy($,"T","$get$T",function(){return P.aC(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kw","$get$kw",function(){var t=new G.ha(!1,!1,!1,!0,1,9729,9729)
t.b=!0
return t})
lazy($,"k7","$get$k7",function(){return T.bk(0,0,0)})
lazy($,"le","$get$le",function(){var t=new G.ds("Textured",null,[],[],[],[],0,P.a5())
t.d5(["aPosition","aTexUV"])
t.bl(["uPerspectiveViewMatrix","uModelMatrix"])
t.bm(["vTexUV"])
t.br(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"ld","$get$ld",function(){var t=new G.ds("TexturedF",null,[],[],[],[],0,P.a5())
t.bm(["vTexUV"])
t.bl(["uColor","uTexture"])
t.br(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"kM","$get$kM",function(){return[T.bk(0,0,1),T.bk(0,0,-1),T.bk(0,1,0),T.bk(0,-1,0),T.bk(1,0,0),T.bk(-1,0,0)]})})()
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
mangledGlobalNames:{p:"int",N:"double",V:"num",r:"String",az:"bool",aD:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.u},{func:1,ret:P.az,args:[W.a3,P.r,P.r,W.c2]},{func:1,v:true,args:[P.o],opt:[P.bU]},{func:1,ret:P.p,args:[P.I,P.I]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bg,ArrayBufferView:H.aV,DataView:H.f9,Float32Array:H.dd,Float64Array:H.fa,Int16Array:H.fb,Int32Array:H.fc,Int8Array:H.fd,Uint16Array:H.fe,Uint32Array:H.ff,Uint8ClampedArray:H.dh,CanvasPixelArray:H.dh,Uint8Array:H.fg,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLImageElement:W.m,HTMLKeygenElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMenuElement:W.m,HTMLMenuItemElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.dS,HTMLAreaElement:W.dT,AudioTrack:W.a1,AudioTrackList:W.dX,Blob:W.b8,HTMLBodyElement:W.aN,HTMLCanvasElement:W.cf,CanvasRenderingContext2D:W.dZ,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CompositorWorker:W.e1,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.ba,MSStyleCSSProperties:W.ba,CSS2Properties:W.ba,DataTransferItemList:W.e4,DeviceAcceleration:W.e5,HTMLDivElement:W.ch,XMLDocument:W.bx,Document:W.bx,DocumentFragment:W.ci,ShadowRoot:W.ci,DOMException:W.e6,DOMImplementation:W.cj,DOMPoint:W.e7,DOMPointReadOnly:W.ck,DOMRectReadOnly:W.cl,DOMStringList:W.e8,DOMTokenList:W.e9,Element:W.a3,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.Q,FileList:W.bF,FileWriter:W.ex,HTMLFormElement:W.eB,Gamepad:W.a4,HTMLHeadElement:W.cp,History:W.eF,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,HTMLDocument:W.cq,XMLHttpRequest:W.eG,XMLHttpRequestUpload:W.bH,XMLHttpRequestEventTarget:W.bH,ImageData:W.bI,HTMLInputElement:W.eK,KeyboardEvent:W.aU,Location:W.eW,HTMLAudioElement:W.bL,HTMLMediaElement:W.bL,MediaList:W.f4,MediaStream:W.bf,MIDIOutput:W.f6,MIDIInput:W.bM,MIDIPort:W.bM,MimeType:W.a6,MimeTypeArray:W.f7,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,Navigator:W.di,Attr:W.u,Node:W.u,NodeIterator:W.dj,NodeList:W.bR,RadioNodeList:W.bR,Path2D:W.fr,Perspective:W.fu,Plugin:W.a7,PluginArray:W.fw,PositionValue:W.fz,PresentationConnection:W.fA,Range:W.dp,Rotation:W.fJ,RTCDataChannel:W.dr,DataChannel:W.dr,HTMLSelectElement:W.fL,SharedWorker:W.fO,SourceBuffer:W.a8,SourceBufferList:W.fP,SpeechGrammar:W.a9,SpeechGrammarList:W.fR,SpeechRecognitionResult:W.aa,Storage:W.fW,CSSStyleSheet:W.X,StyleSheet:W.X,CalcLength:W.aj,KeywordValue:W.aj,LengthValue:W.aj,NumberValue:W.aj,SimpleLength:W.aj,TransformValue:W.aj,StyleValue:W.aj,HTMLTableElement:W.dv,HTMLTableRowElement:W.h4,HTMLTableSectionElement:W.h5,HTMLTemplateElement:W.bX,TextTrack:W.ab,TextTrackCue:W.Y,VTTCue:W.Y,TextTrackCueList:W.h8,TextTrackList:W.h9,TimeRanges:W.hb,Touch:W.ac,TouchEvent:W.aY,TouchList:W.hf,TrackDefaultList:W.hg,Matrix:W.bj,Skew:W.bj,TransformComponent:W.bj,Translation:W.hi,TreeWalker:W.dz,CompositionEvent:W.aF,FocusEvent:W.aF,TextEvent:W.aF,SVGZoomEvent:W.aF,UIEvent:W.aF,URL:W.ho,HTMLVideoElement:W.bl,VideoTrackList:W.hq,VTTRegionList:W.ht,WebSocket:W.hu,WheelEvent:W.b_,Window:W.c0,DOMWindow:W.c0,Worker:W.hx,CompositorWorkerGlobalScope:W.b0,DedicatedWorkerGlobalScope:W.b0,ServiceWorkerGlobalScope:W.b0,SharedWorkerGlobalScope:W.b0,WorkerGlobalScope:W.b0,ClientRect:W.hF,ClientRectList:W.dD,DOMRectList:W.dD,CSSRuleList:W.hH,DocumentType:W.hI,DOMRect:W.hJ,GamepadList:W.i4,HTMLFrameSetElement:W.i5,NamedNodeMap:W.dF,MozNamedAttrMap:W.dF,ServiceWorker:W.ip,SpeechRecognitionResultList:W.is,StyleSheetList:W.iw,WorkerLocation:W.iD,WorkerNavigator:W.iE,SVGAElement:P.dR,SVGAnimateElement:P.aM,SVGAnimateMotionElement:P.aM,SVGAnimateTransformElement:P.aM,SVGAnimationElement:P.aM,SVGSetElement:P.aM,SVGFEBlendElement:P.ee,SVGFEColorMatrixElement:P.ef,SVGFEComponentTransferElement:P.eg,SVGFECompositeElement:P.eh,SVGFEConvolveMatrixElement:P.ei,SVGFEDiffuseLightingElement:P.ej,SVGFEDisplacementMapElement:P.ek,SVGFEFloodElement:P.el,SVGFEGaussianBlurElement:P.em,SVGFEImageElement:P.en,SVGFEMergeElement:P.eo,SVGFEMorphologyElement:P.ep,SVGFEOffsetElement:P.eq,SVGFEPointLightElement:P.er,SVGFESpecularLightingElement:P.es,SVGFESpotLightElement:P.et,SVGFETileElement:P.eu,SVGFETurbulenceElement:P.ev,SVGFilterElement:P.ey,SVGForeignObjectElement:P.eA,SVGCircleElement:P.af,SVGEllipseElement:P.af,SVGLineElement:P.af,SVGPathElement:P.af,SVGPolygonElement:P.af,SVGPolylineElement:P.af,SVGGeometryElement:P.af,SVGClipPathElement:P.aB,SVGDefsElement:P.aB,SVGGElement:P.aB,SVGSwitchElement:P.aB,SVGGraphicsElement:P.aB,SVGImageElement:P.eH,SVGLength:P.as,SVGLengthList:P.eR,SVGMarkerElement:P.f1,SVGMaskElement:P.f2,SVGNumber:P.au,SVGNumberList:P.fl,SVGPatternElement:P.fs,SVGPoint:P.fx,SVGPointList:P.fy,SVGRect:P.fD,SVGRectElement:P.fE,SVGScriptElement:P.bT,SVGStringList:P.h1,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.h2,SVGSymbolElement:P.h3,SVGTextContentElement:P.dw,SVGTextPathElement:P.h7,SVGTSpanElement:P.bY,SVGTextElement:P.bY,SVGTextPositioningElement:P.bY,SVGTransform:P.av,SVGTransformList:P.hh,SVGUseElement:P.hp,SVGViewElement:P.hr,SVGViewSpec:P.hs,SVGLinearGradientElement:P.c1,SVGRadialGradientElement:P.c1,SVGGradientElement:P.c1,SVGCursorElement:P.ik,SVGFEDropShadowElement:P.il,SVGMPathElement:P.im,AudioBuffer:P.dW,WebGLRenderingContext:P.fH,WebGL2RenderingContext:P.fI,WebGL2RenderingContextBase:P.iC,SQLResultSetRowList:P.fS})
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lc(U.l0(),b)},[])
else (function(b){H.lc(U.l0(),b)})([])})})()