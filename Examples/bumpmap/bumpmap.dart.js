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
a[c]=function(){a[c]=function(){H.oc(b)}
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
return d?function(e){if(t===null)t=H.k0(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.k0(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.k0(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jK:function jK(a){this.a=a},
jQ:function(a,b,c,d){if(!!J.u(a).$isd)return new H.el(a,b,[c,d])
return new H.dn(a,b,[c,d])},
dh:function(){return new P.am("No element")},
mZ:function(){return new P.am("Too many elements")},
mY:function(){return new P.am("Too few elements")},
dD:function(a,b,c,d){if(c-b<=32)H.nc(a,b,c,d)
else H.nb(a,b,c,d)},
nc:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.F(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aq(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
nb:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.C(t+1,6)
r=a3+s
q=a4-s
p=C.b.C(a3+a4,2)
o=p-s
n=p+s
t=J.F(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.aq(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.aq(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.aq(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.aq(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aq(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.aq(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.aq(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.aq(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aq(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.E(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dD(a2,a3,g-2,a5)
H.dD(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.E(a5.$2(t.h(a2,g),l),0);)++g
for(;J.E(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dD(a2,g,f,a5)}else H.dD(a2,g,f,a5)},
d:function d(){},
bk:function bk(){},
dm:function dm(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dn:function dn(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
ff:function ff(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bL:function bL(a,b,c){this.a=a
this.b=b
this.$ti=c},
dL:function dL(a,b,c){this.a=a
this.b=b
this.$ti=c},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cy:function cy(){},
dS:function(a,b){var t=a.aj(b)
if(!u.globalState.d.cy)u.globalState.f.ap()
return t},
jj:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lH:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isc)throw H.e(P.cm("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.iw(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kK()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.i2(P.jP(null,H.b5),0)
r=P.p
s.sf6(new H.ak(0,null,null,null,null,null,0,[r,H.b4]))
s.sf9(new H.ak(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.iv()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mT,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ns)}if(u.globalState.x)return
s=u.globalState.a++
q=P.al(null,null,null,r)
p=new H.bn(0,null,!1)
o=new H.b4(s,new H.ak(0,null,null,null,null,null,0,[r,H.bn]),q,u.createNewIsolate(),p,new H.as(H.jo()),new H.as(H.jo()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
q.j(0,0)
o.bI(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bw(a,{func:1,args:[,]}))o.aj(new H.ju(t,a))
else if(H.bw(a,{func:1,args:[,,]}))o.aj(new H.jv(t,a))
else o.aj(a)
u.globalState.f.ap()},
ns:function(a){var t=P.aX(["command","print","msg",a])
return new H.ao(!0,P.ca(null,P.p)).J(t)},
mV:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mW()
return},
mW:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.w('Cannot extract URI from "'+t+'"'))},
mT:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b3(!0,[]).X(b.data)
s=J.F(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.o_(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b3(!0,[]).X(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b3(!0,[]).X(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.al(null,null,null,k)
i=new H.bn(0,null,!1)
h=new H.b4(s,new H.ak(0,null,null,null,null,null,0,[k,H.bn]),j,u.createNewIsolate(),i,new H.as(H.jo()),new H.as(H.jo()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
j.j(0,0)
h.bI(0,i)
u.globalState.f.a.U(0,new H.b5(h,new H.eY(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ap()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mj(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ap()
break
case"close":u.globalState.ch.ao(0,$.$get$kL().h(0,a))
a.terminate()
u.globalState.f.ap()
break
case"log":H.mS(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aX(["command","print","msg",t])
k=new H.ao(!0,P.ca(null,P.p)).J(k)
s.toString
self.postMessage(k)}else P.T(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mS:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aX(["command","log","msg",a])
r=new H.ao(!0,P.ca(null,P.p)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.ap(q)
s=P.cx(t)
throw H.e(s)}},
mU:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kQ=$.kQ+("_"+s)
$.kR=$.kR+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.bs(s,r),q,t.r])
r=new H.eZ(a,b,c,d,t)
if(e){t.c3(q,q)
u.globalState.f.a.U(0,new H.b5(t,r,"start isolate"))}else r.$0()},
nd:function(a,b){var t=new H.hr(!0,!1,null)
t.dJ(a,b)
return t},
nu:function(a){return new H.b3(!0,[]).X(new H.ao(!1,P.ca(null,P.p)).J(a))},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b){this.a=a
this.b=b},
iw:function iw(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
iq:function iq(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
i3:function i3(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(){},
eY:function eY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eZ:function eZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hV:function hV(){},
bs:function bs(a,b){this.b=a
this.a=b},
ix:function ix(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c){this.b=a
this.c=b
this.a=c},
bn:function bn(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
as:function as(a){this.a=a},
ao:function ao(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
nT:function(a){return u.types[a]},
o1:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isr},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.ah(a)
if(typeof t!=="string")throw H.e(H.P(a))
return t},
na:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fT(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aY:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dz:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.u(a).$isb0){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.f.aM(q,0)===36)q=C.f.dh(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dU(H.j7(a),0,null),u.mangledGlobalNames)},
fP:function(a){return"Instance of '"+H.dz(a)+"'"},
U:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
n8:function(a){return a.b?H.U(a).getUTCFullYear()+0:H.U(a).getFullYear()+0},
n6:function(a){return a.b?H.U(a).getUTCMonth()+1:H.U(a).getMonth()+1},
n2:function(a){return a.b?H.U(a).getUTCDate()+0:H.U(a).getDate()+0},
n3:function(a){return a.b?H.U(a).getUTCHours()+0:H.U(a).getHours()+0},
n5:function(a){return a.b?H.U(a).getUTCMinutes()+0:H.U(a).getMinutes()+0},
n7:function(a){return a.b?H.U(a).getUTCSeconds()+0:H.U(a).getSeconds()+0},
n4:function(a){return a.b?H.U(a).getUTCMilliseconds()+0:H.U(a).getMilliseconds()+0},
jR:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
return a[b]},
kS:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
a[b]=c},
S:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
t=J.ba(a)
if(b<0||C.b.cZ(b,t))return P.D(b,a,"index",null,t)
return P.fQ(b,"index",null)},
P:function(a){return new P.ai(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bm()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lI})
t.name=""}else t.toString=H.lI
return t},
lI:function(){return J.ah(this.dartException)},
G:function(a){throw H.e(a)},
C:function(a){throw H.e(new P.Y(a))},
aw:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hy(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
l1:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jM:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f3(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aW(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jM(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dy(p,null))}}if(a instanceof TypeError){o=$.$get$kW()
n=$.$get$kX()
m=$.$get$kY()
l=$.$get$kZ()
k=$.$get$l2()
j=$.$get$l3()
i=$.$get$l0()
$.$get$l_()
h=$.$get$l5()
g=$.$get$l4()
f=o.O(s)
if(f!=null)return t.$1(H.jM(s,f))
else{f=n.O(s)
if(f!=null){f.method="call"
return t.$1(H.jM(s,f))}else{f=m.O(s)
if(f==null){f=l.O(s)
if(f==null){f=k.O(s)
if(f==null){f=j.O(s)
if(f==null){f=i.O(s)
if(f==null){f=l.O(s)
if(f==null){f=h.O(s)
if(f==null){f=g.O(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dy(s,f==null?null:f.method))}}return t.$1(new H.hB(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dE()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ai(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dE()
return a},
ap:function(a){var t
if(a==null)return new H.dQ(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dQ(a,null)},
o5:function(a){if(a==null||typeof a!='object')return J.ar(a)
else return H.aY(a)},
nR:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
o0:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dS(b,new H.je(a))
case 1:return H.dS(b,new H.jf(a,d))
case 2:return H.dS(b,new H.jg(a,d,e))
case 3:return H.dS(b,new H.jh(a,d,e,f))
case 4:return H.dS(b,new H.ji(a,d,e,f,g))}throw H.e(P.cx("Unsupported number of arguments for wrapped closure"))},
aJ:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.o0)
a.$identity=t
return t},
mB:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isc){t.$reflectionInfo=c
r=H.na(t).r}else r=c
q=d?Object.create(new H.h7().constructor.prototype):Object.create(new H.bA(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.ku(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nT,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kr:H.jE
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.ku(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
my:function(a,b,c,d){var t=H.jE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ku:function(a,b,c){var t,s,r,q
if(c)return H.mA(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.my(s,b==null?r!=null:b!==r,t,b)
return q},
mz:function(a,b,c,d){var t,s
t=H.jE
s=H.kr
switch(b?-1:a){case 0:throw H.e(new H.fZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mA:function(a,b){var t,s,r,q
H.mx()
t=$.kq
if(t==null){t=H.kp("receiver")
$.kq=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mz(r,b==null?q!=null:b!==q,s,b)
return t},
k0:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isc){c.fixed$length=Array
t=c}else t=c
return H.mB(a,b,t,!!d,e,f)},
jE:function(a){return a.a},
kr:function(a){return a.c},
mx:function(){var t=$.ks
if(t==null){t=H.kp("self")
$.ks=t}return t},
kp:function(a){var t,s,r,q,p
t=new H.bA("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
oq:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ax(a,"String"))},
a1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"double"))},
op:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"num"))},
nJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ax(a,"bool"))},
o_:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ax(a,"int"))},
o7:function(a,b){throw H.e(H.ax(a,b.substring(3)))},
o6:function(a,b){var t=J.F(b)
throw H.e(H.kt(H.dz(a),t.bv(b,3,t.gk(b))))},
k4:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.o7(a,b)},
aK:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.o6(a,b)},
oo:function(a){if(a==null)return a
if(!!J.u(a).$isc)return a
throw H.e(H.ax(a,"List"))},
lv:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bw:function(a,b){var t
if(a==null)return!1
t=H.lv(a)
return t==null?!1:H.lB(t,b)},
om:function(a,b){var t,s
if(a==null)return a
if($.jY)return a
$.jY=!0
try{if(H.bw(a,b))return a
t=H.aL(b,null)
s=H.ax(a,t)
throw H.e(s)}finally{$.jY=!1}},
ax:function(a,b){return new H.hA("type '"+H.dz(a)+"' is not a subtype of type '"+b+"'")},
kt:function(a,b){return new H.e7("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aI:function(a){if(!0===a)return!1
if(!!J.u(a).$isjI)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ax(a,"bool"))},
b7:function(a){throw H.e(new H.hP(a))},
b:function(a){if(H.aI(a))throw H.e(new P.cn(null))},
oc:function(a){throw H.e(new P.eb(a))},
jo:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lz:function(a){return u.getIsolateTag(a)},
N:function(a){return new H.aG(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
j7:function(a){if(a==null)return
return a.$ti},
lA:function(a,b){return H.k8(a["$as"+H.f(b)],H.j7(a))},
ag:function(a,b,c){var t,s
t=H.lA(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aA:function(a,b){var t,s
t=H.j7(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aL:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dU(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aL(t,b)
return H.nx(a,b)}return"unknown-reified-type"},
nx:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aL(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aL(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nQ(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aL(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dU:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.c_("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aL(o,c)}return p?"":"<"+s.l(0)+">"},
j8:function(a){var t,s
if(a instanceof H.bc){t=H.lv(a)
if(t!=null)return H.aL(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dU(a.$ti,0,null)},
k8:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.k5(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.k5(a,null,b)
return b},
cg:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.j7(a)
s=J.u(a)
if(s[b]==null)return!1
return H.lm(H.k8(s[d],t),c)},
dW:function(a,b,c,d){if(a==null)return a
if(H.cg(a,b,c,d))return a
throw H.e(H.kt(H.dz(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dU(c,0,null),u.mangledGlobalNames)))},
ok:function(a,b,c,d){if(a==null)return a
if(H.cg(a,b,c,d))return a
throw H.e(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dU(c,0,null),u.mangledGlobalNames)))},
lm:function(a,b){var t,s,r,q,p
if(a==null||b==null)return!0
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=typeof b==="object"&&b!==null&&b.constructor===Array
H.b(s)
H.b(t)
r=a.length
H.b(s)
H.b(r===b.length)
H.b(t)
q=a.length
for(p=0;p<q;++p){H.b(t)
r=a[p]
H.b(s)
if(!H.a2(r,b[p]))return!1}return!0},
nM:function(a,b,c){return H.k5(a,b,H.lA(b,c))},
a2:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aF")return!0
if('func' in b)return H.lB(a,b)
if('func' in a)return b.name==="jI"||b.name==="m"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.aL(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lm(H.k8(o,t),r)},
ll:function(a,b,c){var t,s,r,q,p,o,n
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=typeof b==="object"&&b!==null&&b.constructor===Array
H.b(s)
H.b(t)
r=a.length
H.b(s)
q=b.length
if(c){if(r<q)return!1}else if(r!==q)return!1
for(p=0;p<q;++p){H.b(t)
o=a[p]
H.b(s)
n=b[p]
if(!(H.a2(o,n)||H.a2(n,o)))return!1}return!0},
nF:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.a2(p,o)||H.a2(o,p)))return!1}return!0},
lB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a2(t,s)||H.a2(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
if(r!=null){H.b(typeof r==="object"&&r!==null&&r.constructor===Array)
n=r.length}else n=0
if(q!=null){H.b(typeof q==="object"&&q!==null&&q.constructor===Array)
m=q.length}else m=0
if(p!=null){H.b(typeof p==="object"&&p!==null&&p.constructor===Array)
l=p.length}else l=0
if(o!=null){H.b(typeof o==="object"&&o!==null&&o.constructor===Array)
k=o.length}else k=0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.ll(r,q,!1))return!1
if(!H.ll(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}}return H.nF(a.named,b.named)},
k5:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
or:function(a){var t=$.k2
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
on:function(a){return H.aY(a)},
ol:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o2:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.m))
t=$.k2.$1(a)
s=$.j5[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.jd[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lk.$2(a,t)
if(t!=null){s=$.j5[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.jd[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.k6(r)
$.j5[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.jd[t]=r
return r}if(p==="-"){o=H.k6(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lD(a,r)
if(p==="*")throw H.e(new P.c3(t))
if(u.leafTags[t]===true){o=H.k6(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lD(a,r)},
lD:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jn(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
k6:function(a){return J.jn(a,!1,null,!!a.$isr)},
o4:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.jn(t,!1,null,!!t.$isr)
else return J.jn(t,c,null,null)},
nY:function(){if(!0===$.k3)return
$.k3=!0
H.nZ()},
nZ:function(){var t,s,r,q,p,o,n,m
$.j5=Object.create(null)
$.jd=Object.create(null)
H.nX()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lE.$1(p)
if(o!=null){n=H.o4(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nX:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.bv(C.D,H.bv(C.I,H.bv(C.r,H.bv(C.r,H.bv(C.H,H.bv(C.E,H.bv(C.F(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.k2=new H.ja(p)
$.lk=new H.jb(o)
$.lE=new H.jc(n)},
bv:function(a,b){return a(b)||b},
ob:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fT:function fT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hy:function hy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dy:function dy(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a){this.a=a},
jw:function jw(a){this.a=a},
dQ:function dQ(a,b){this.a=a
this.b=b},
je:function je(a){this.a=a},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ji:function ji(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bc:function bc(){},
hl:function hl(){},
h7:function h7(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hA:function hA(a){this.a=a},
e7:function e7(a){this.a=a},
fZ:function fZ(a){this.a=a},
hP:function hP(a){this.a=a},
aG:function aG(a,b){this.a=a
this.b=b},
ak:function ak(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
f2:function f2(a){this.a=a},
f8:function f8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f9:function f9(a,b){this.a=a
this.$ti=b},
fa:function fa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
jc:function jc(a){this.a=a},
q:function(a){return a},
iX:function(a){var t,s,r
if(!!J.u(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bO:function bO(){},
bl:function bl(){},
fo:function fo(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
dq:function dq(){},
fp:function fp(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
du:function du(){},
fv:function fv(){},
bP:function bP(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
nQ:function(a){var t=H.B(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
dV:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.f1.prototype
if(typeof a=="boolean")return J.f0.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.m)return a
return J.j6(a)},
jn:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j6:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.k3==null){H.nY()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.c3("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jL()]
if(p!=null)return p
p=H.o2(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$jL(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
F:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.m)return a
return J.j6(a)},
b8:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.m)return a
return J.j6(a)},
k1:function(a){if(typeof a=="number")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.b0.prototype
return a},
nS:function(a){if(typeof a=="number")return J.bj.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.b0.prototype
return a},
ly:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.m))return J.b0.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.m)return a
return J.j6(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).v(a,b)},
aq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k1(a).ar(a,b)},
lK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k1(a).as(a,b)},
b9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.o1(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.F(a).h(a,b)},
lL:function(a,b,c){return J.b8(a).i(a,b,c)},
lM:function(a,b,c,d){return J.k(a).dU(a,b,c,d)},
k9:function(a,b){return J.ly(a).aM(a,b)},
bx:function(a,b){return J.k(a).eb(a,b)},
lN:function(a,b,c,d){return J.k(a).ec(a,b,c,d)},
lO:function(a,b,c){return J.k(a).ed(a,b,c)},
ka:function(a,b){return J.k(a).c2(a,b)},
jx:function(a,b){return J.k(a).R(a,b)},
kb:function(a,b,c){return J.k(a).c5(a,b,c)},
lP:function(a,b){return J.k(a).eu(a,b)},
dX:function(a,b,c){return J.k(a).c6(a,b,c)},
lQ:function(a,b,c){return J.k(a).c7(a,b,c)},
ck:function(a,b,c){return J.k(a).c8(a,b,c)},
dY:function(a,b){return J.k(a).ex(a,b)},
lR:function(a,b){return J.k(a).c9(a,b)},
lS:function(a,b,c){return J.k(a).ca(a,b,c)},
kc:function(a,b,c,d){return J.k(a).cb(a,b,c,d)},
lT:function(a,b){return J.b8(a).cc(a,b)},
lU:function(a,b,c,d,e){return J.k(a).cd(a,b,c,d,e)},
lV:function(a,b){return J.nS(a).S(a,b)},
jy:function(a,b,c){return J.F(a).eD(a,b,c)},
dZ:function(a){return J.k(a).cf(a)},
lW:function(a){return J.k(a).cg(a)},
lX:function(a){return J.k(a).cj(a)},
kd:function(a){return J.k(a).eJ(a)},
lY:function(a,b){return J.k(a).cl(a,b)},
jz:function(a,b){return J.k(a).cm(a,b)},
lZ:function(a,b,c,d){return J.k(a).cn(a,b,c,d)},
m_:function(a,b,c,d,e){return J.k(a).eT(a,b,c,d,e)},
m0:function(a,b,c,d,e){return J.k(a).co(a,b,c,d,e)},
m1:function(a,b,c,d,e,f){return J.k(a).eU(a,b,c,d,e,f)},
m2:function(a,b){return J.b8(a).t(a,b)},
cl:function(a,b){return J.k(a).cp(a,b)},
m3:function(a,b){return J.k(a).cq(a,b)},
m4:function(a){return J.k(a).eV(a)},
m5:function(a,b){return J.b8(a).a5(a,b)},
m6:function(a){return J.k(a).ges(a)},
ar:function(a){return J.u(a).gu(a)},
by:function(a){return J.b8(a).gw(a)},
ba:function(a){return J.F(a).gk(a)},
m7:function(a){return J.k(a).gbb(a)},
m8:function(a){return J.u(a).gA(a)},
m9:function(a){return J.k(a).gfl(a)},
ma:function(a){return J.k(a).gaD(a)},
jA:function(a){return J.k(a).gm(a)},
jB:function(a){return J.k(a).gn(a)},
ke:function(a){return J.k(a).gL(a)},
jC:function(a,b){return J.k(a).a7(a,b)},
mb:function(a){return J.k(a).aF(a)},
mc:function(a){return J.k(a).bi(a)},
md:function(a,b){return J.k(a).bj(a,b)},
me:function(a,b,c){return J.k(a).bk(a,b,c)},
kf:function(a,b,c){return J.k(a).bn(a,b,c)},
mf:function(a,b){return J.k(a).cu(a,b)},
mg:function(a,b){return J.b8(a).cA(a,b)},
mh:function(a,b,c){return J.k(a).cC(a,b,c)},
mi:function(a){return J.b8(a).ff(a)},
mj:function(a,b){return J.k(a).G(a,b)},
mk:function(a,b,c){return J.k(a).da(a,b,c)},
ml:function(a,b,c,d){return J.k(a).bt(a,b,c,d)},
mm:function(a,b,c,d,e,f,g){return J.k(a).cG(a,b,c,d,e,f,g)},
mn:function(a,b,c,d){return J.k(a).cH(a,b,c,d)},
kg:function(a,b,c,d){return J.k(a).cI(a,b,c,d)},
bz:function(a){return J.k1(a).fm(a)},
mo:function(a){return J.ly(a).fp(a)},
ah:function(a){return J.u(a).l(a)},
mp:function(a,b,c,d){return J.k(a).fs(a,b,c,d)},
mq:function(a,b,c){return J.k(a).cJ(a,b,c)},
mr:function(a,b,c){return J.k(a).cK(a,b,c)},
jD:function(a,b,c){return J.k(a).cL(a,b,c)},
ms:function(a,b,c){return J.k(a).cM(a,b,c)},
kh:function(a,b,c){return J.k(a).cN(a,b,c)},
ki:function(a,b,c){return J.k(a).cO(a,b,c)},
kj:function(a,b,c){return J.k(a).cP(a,b,c)},
kk:function(a,b,c,d){return J.k(a).cQ(a,b,c,d)},
kl:function(a,b,c,d){return J.k(a).cR(a,b,c,d)},
mt:function(a,b){return J.k(a).cT(a,b)},
mu:function(a,b,c){return J.k(a).ft(a,b,c)},
km:function(a,b,c,d,e,f,g){return J.k(a).cV(a,b,c,d,e,f,g)},
mv:function(a,b,c,d,e){return J.k(a).cW(a,b,c,d,e)},
a:function a(){},
f0:function f0(){},
f1:function f1(){},
bK:function bK(){},
fJ:function fJ(){},
b0:function b0(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
jJ:function jJ(a){this.$ti=a},
e2:function e2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bj:function bj(){},
dk:function dk(){},
dj:function dj(){},
aU:function aU(){}},P={
nh:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nG()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aJ(new P.hR(t),1)).observe(s,{childList:true})
return new P.hQ(t,s,r)}else if(self.setImmediate!=null)return P.nH()
return P.nI()},
ni:function(a){++u.globalState.f.b
self.scheduleImmediate(H.aJ(new P.hS(a),0))},
nj:function(a){++u.globalState.f.b
self.setImmediate(H.aJ(new P.hT(a),0))},
nk:function(a){P.jT(C.p,a)},
nB:function(a,b){if(H.bw(a,{func:1,args:[P.aF,P.aF]})){b.toString
return a}else{b.toString
return a}},
mN:function(a,b,c){var t
if(a==null)a=new P.bm()
t=$.x
if(t!==C.d)t.toString
t=new P.I(0,t,null,[c])
t.bK(a,b)
return t},
mO:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.I(0,$.x,null,[P.c])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eQ(t,!1,b,s)
try{for(m=0,l=0;m<2;++m){q=a[m]
p=l
q.bf(new P.eP(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.I(0,$.x,null,[null])
l.bJ(C.u)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.O(j)
n=H.ap(j)
if(t.b===0||!1)return P.mN(o,n,null)
else{t.c=o
t.d=n}}return s},
nv:function(a,b,c){$.x.toString
a.H(b,c)},
nn:function(a,b){var t=new P.I(0,$.x,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
lb:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.I))
H.b(b.a===0)
b.a=1
try{a.bf(new P.ic(b),new P.id(b))}catch(r){t=H.O(r)
s=H.ap(r)
P.o8(new P.ie(b,t,s))}},
ib:function(a,b){var t,s,r,q
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}s=b.a
if(t>=4){H.b(s<4)
r=b.c
b.c=null
q=b.ag(r)
H.b(b.a<4)
H.b(a.a>=4)
b.a=a.a
b.c=a.c
P.br(b,q)}else{q=b.c
H.b(s<=1)
b.a=2
b.c=a
a.bX(q)}},
br:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t={}
t.a=a
for(s=a;!0;){r={}
H.b(s.a>=4)
s=t.a
q=s.a===8
if(b==null){if(q){H.b(!0)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.iY(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.br(t.a,b)}s=t.a
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
if(k){H.b(s.a===8)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.iY(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.x
H.b(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.ik(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.ij(r,b,m).$0()}else if((s&2)!==0)new P.ii(t,r,b).$0()
if(i!=null){H.b(!0)
$.x=i}s=r.b
if(!!J.u(s).$isaS){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.ag(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ib(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.ag(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nz:function(){var t,s
for(;t=$.bt,t!=null;){$.ce=null
s=t.b
$.bt=s
if(s==null)$.cd=null
t.a.$0()}},
nE:function(){$.jZ=!0
try{P.nz()}finally{$.ce=null
$.jZ=!1
if($.bt!=null)$.$get$jW().$1(P.ln())}},
li:function(a){var t=new P.dM(a,null)
if($.bt==null){$.cd=t
$.bt=t
if(!$.jZ)$.$get$jW().$1(P.ln())}else{$.cd.b=t
$.cd=t}},
nD:function(a){var t,s,r
t=$.bt
if(t==null){P.li(a)
$.ce=$.cd
return}s=new P.dM(a,null)
r=$.ce
if(r==null){s.b=t
$.ce=s
$.bt=s}else{s.b=r.b
r.b=s
$.ce=s
if(s.b==null)$.cd=s}},
o8:function(a){var t=$.x
if(C.d===t){P.bu(null,null,C.d,a)
return}t.toString
P.bu(null,null,t,t.b3(a))},
nt:function(a,b,c){var t=a.ey(0)
if(!!J.u(t).$isaS&&t!==$.$get$kI())t.fu(new P.iV(b,c))
else b.ad(c)},
ne:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jT(a,b)}return P.jT(a,t.b3(b))},
jT:function(a,b){var t=C.b.C(a.a,1000)
return H.nd(t<0?0:t,b)},
jV:function(a){var t,s
H.b(a!=null)
t=$.x
H.b(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
iY:function(a,b,c,d,e){var t={}
t.a=d
P.nD(new P.iZ(t,e))},
lg:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.jV(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.x=s}},
lh:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.jV(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
nC:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.jV(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.x=s}},
bu:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b3(d):c.ev(d)
P.li(d)},
hR:function hR(a){this.a=a},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hX:function hX(){},
c5:function c5(a,b){this.a=a
this.$ti=b},
iN:function iN(a,b){this.a=a
this.$ti=b},
c6:function c6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i8:function i8(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
il:function il(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
dM:function dM(a,b){this.a=a
this.b=b},
bZ:function bZ(){},
he:function he(a){this.a=a},
hf:function hf(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
hd:function hd(a){this.a=a},
hb:function hb(){},
iV:function iV(a,b){this.a=a
this.b=b},
bb:function bb(a,b){this.a=a
this.b=b},
iU:function iU(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
iz:function iz(){},
iB:function iB(a,b){this.a=a
this.b=b},
iA:function iA(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
jN:function(a,b){return new H.ak(0,null,null,null,null,null,0,[a,b])},
K:function(){return new H.ak(0,null,null,null,null,null,0,[null,null])},
aX:function(a){return H.nR(a,new H.ak(0,null,null,null,null,null,0,[null,null]))},
ca:function(a,b){return new P.dO(0,null,null,null,null,null,0,[a,b])},
nr:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mX:function(a,b,c){var t,s
if(P.k_(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$cf()
C.a.j(s,a)
try{P.ny(a,t)}finally{H.b(C.a.gaB(s)===a)
s.pop()}s=P.kV(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
f_:function(a,b,c){var t,s,r
if(P.k_(a))return b+"..."+c
t=new P.c_(b)
s=$.$get$cf()
C.a.j(s,a)
try{r=t
r.a=P.kV(r.ga3(),a,", ")}finally{H.b(C.a.gaB(s)===a)
s.pop()}s=t
s.a=s.ga3()+c
s=t.ga3()
return s.charCodeAt(0)==0?s:s},
k_:function(a){var t,s
for(t=0;s=$.$get$cf(),t<s.length;++t)if(a===s[t])return!0
return!1},
ny:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.f(t.gq())
C.a.j(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq();++r
if(!t.p()){if(r<=4){C.a.j(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gq();++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gq();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.j(b,"...")
return}}o=H.f(n)
p=H.f(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.j(b,k)
C.a.j(b,o)
C.a.j(b,p)},
al:function(a,b,c,d){return new P.is(0,null,null,null,null,null,0,[d])},
jO:function(a,b){var t,s
t=P.al(null,null,null,b)
for(s=J.by(a);s.p();)t.j(0,s.gq())
return t},
kO:function(a){var t,s,r
t={}
if(P.k_(a))return"{...}"
s=new P.c_("")
try{C.a.j($.$get$cf(),a)
r=s
r.a=r.ga3()+"{"
t.a=!0
a.a5(0,new P.fg(t,s))
t=s
t.a=t.ga3()+"}"}finally{t=$.$get$cf()
H.b(C.a.gaB(t)===a)
t.pop()}t=s.ga3()
return t.charCodeAt(0)==0?t:t},
jP:function(a,b){var t=new P.fb(null,0,0,0,[b])
t.dD(a,b)
return t},
dO:function dO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
is:function is(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
c9:function c9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ip:function ip(){},
dl:function dl(){},
y:function y(){},
fg:function fg(a,b){this.a=a
this.b=b},
fb:function fb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iu:function iu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h1:function h1(){},
h0:function h0(){},
bV:function bV(){},
iW:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.ir(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.iW(a[t])
return a},
nA:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.e(H.P(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.O(r)
q=String(s)
throw H.e(new P.eN(q,null,null))}q=P.iW(t)
return q},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
cp:function cp(){},
cq:function cq(){},
f4:function f4(a,b){this.a=a
this.b=b},
f5:function f5(a){this.a=a},
kV:function(a,b,c){var t=J.by(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
mC:function(a,b){return J.lV(a,b)},
mE:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mF:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cr:function(a){if(a>=10)return""+a
return"0"+a},
jG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ah(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mJ(a)},
mJ:function(a){var t=J.u(a)
if(!!t.$isbc)return t.l(a)
return H.fP(a)},
cm:function(a){return new P.ai(!1,null,null,a)},
kn:function(a,b,c){return new P.ai(!0,a,b,c)},
mw:function(a){return new P.ai(!1,null,a,"Must not be null")},
fQ:function(a,b,c){return new P.dB(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.dB(b,c,!0,a,d,"Invalid value")},
jS:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aZ(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aZ(b,a,c,"end",f))
return b},
D:function(a,b,c,d,e){var t=e!=null?e:J.ba(b)
return new P.eW(b,t,!0,a,c,"Index out of range")},
cx:function(a){return new P.i7(a)},
kN:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.by(a);s.p();)C.a.j(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
T:function(a){H.dV(H.f(a))},
az:function az(){},
J:function J(){},
be:function be(a,b){this.a=a
this.b=b},
Q:function Q(){},
aR:function aR(a){this.a=a},
ej:function ej(){},
ek:function ek(){},
bf:function bf(){},
cn:function cn(a){this.a=a},
bm:function bm(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dB:function dB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eW:function eW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
w:function w(a){this.a=a},
c3:function c3(a){this.a=a},
am:function am(a){this.a=a},
Y:function Y(a){this.a=a},
dE:function dE(){},
eb:function eb(a){this.a=a},
i7:function i7(a){this.a=a},
eN:function eN(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
Z:function Z(){},
di:function di(){},
c:function c(){},
aD:function aD(){},
aF:function aF(){},
X:function X(){},
m:function m(){},
bY:function bY(){},
t:function t(){},
c_:function c_(a){this.a=a},
ls:function(a){return a},
j3:function(a){var t,s,r,q,p
if(a==null)return
t=P.K()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nN:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.m5(a,new P.j0(t))
return t},
nO:function(a){var t,s
t=new P.I(0,$.x,null,[null])
s=new P.c5(t,[null])
a.then(H.aJ(new P.j1(s),1))["catch"](H.aJ(new P.j2(s),1))
return t},
kE:function(){var t=$.kD
if(t==null){t=J.jy(window.navigator.userAgent,"Opera",0)
$.kD=t}return t},
mG:function(){var t,s
t=$.kA
if(t!=null)return t
s=$.kB
if(s==null){s=J.jy(window.navigator.userAgent,"Firefox",0)
$.kB=s}if(s)t="-moz-"
else{s=$.kC
if(s==null){s=!P.kE()&&J.jy(window.navigator.userAgent,"Trident/",0)
$.kC=s}if(s)t="-ms-"
else t=P.kE()?"-o-":"-webkit-"}$.kA=t
return t},
hM:function hM(){},
hO:function hO(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a){this.a=a},
j2:function j2(a){this.a=a},
iy:function iy(){},
M:function M(){},
e_:function e_(){},
aM:function aM(){},
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
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eL:function eL(){},
aj:function aj(){},
aC:function aC(){},
eU:function eU(){},
at:function at(){},
f6:function f6(){},
fh:function fh(){},
fi:function fi(){},
au:function au(){},
fz:function fz(){},
fG:function fG(){},
fL:function fL(){},
fM:function fM(){},
fR:function fR(){},
fS:function fS(){},
bX:function bX(){},
hg:function hg(){},
H:function H(){},
hh:function hh(){},
hi:function hi(){},
dG:function dG(){},
hm:function hm(){},
c1:function c1(){},
av:function av(){},
hw:function hw(){},
hD:function hD(){},
hF:function hF(){},
hG:function hG(){},
c7:function c7(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
cG:function cG(){},
cE:function cE(){},
cL:function cL(){},
cP:function cP(){},
d_:function d_(){},
d7:function d7(){},
d3:function d3(){},
d5:function d5(){},
e3:function e3(){},
fW:function fW(){},
fX:function fX(){},
iR:function iR(){},
h6:function h6(){},
cF:function cF(){},
d1:function d1(){}},W={
mH:function(a,b,c){var t,s
t=document.body
s=(t&&C.h).N(t,a,b,c)
s.toString
t=new H.dL(new W.V(s),new W.j_(),[W.v])
return t.ga1(t)},
mI:function(a){return"wheel"},
bB:function(a){var t,s,r
t="element tag unavailable"
try{s=J.m9(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
nl:function(a,b){return document.createElement(a)},
b6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
le:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
af:function(a,b,c,d,e){var t=c==null?null:W.lj(new W.i6(c))
t=new W.i5(0,a,b,t,!1,[e])
t.dP(a,b,c,!1,e)
return t},
lc:function(a){var t,s
t=document.createElement("a")
s=new W.iG(t,window.location)
s=new W.c8(s)
s.dQ(a)
return s},
np:function(a,b,c,d){return!0},
nq:function(a,b,c,d){var t,s,r,q,p
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
lf:function(){var t=P.t
t=new W.iO(P.jO(C.l,t),P.al(null,null,null,t),P.al(null,null,null,t),P.al(null,null,null,t),null)
t.dS(null,new H.bL(C.l,new W.iP(),[H.aA(C.l,0),null]),["TEMPLATE"],null)
return t},
nw:function(a){var t
if(!!J.u(a).$isaQ)return a
t=new P.hN([],[],!1)
t.c=!0
return t.bh(a)},
lj:function(a){var t=$.x
if(t===C.d)return a
return t.ew(a)},
l:function l(){},
e0:function e0(){},
e1:function e1(){},
a3:function a3(){},
e4:function e4(){},
co:function co(){},
aN:function aN(){},
aO:function aO(){},
e6:function e6(){},
aP:function aP(){},
e9:function e9(){},
z:function z(){},
bd:function bd(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
cs:function cs(){},
aQ:function aQ(){},
ct:function ct(){},
ef:function ef(){},
cu:function cu(){},
eg:function eg(){},
cv:function cv(){},
cw:function cw(){},
eh:function eh(){},
ei:function ei(){},
a4:function a4(){},
j_:function j_(){},
j:function j(){},
h:function h(){},
a5:function a5(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
a6:function a6(){},
cA:function cA(){},
eS:function eS(){},
bI:function bI(){},
cB:function cB(){},
cC:function cC(){},
bJ:function bJ(){},
bg:function bg(){},
bh:function bh(){},
bi:function bi(){},
eX:function eX(){},
aW:function aW(){},
fe:function fe(){},
bM:function bM(){},
fk:function fk(){},
fl:function fl(){},
bN:function bN(){},
a7:function a7(){},
fm:function fm(){},
R:function R(){},
fw:function fw(){},
V:function V(a){this.a=a},
v:function v(){},
dv:function dv(){},
bU:function bU(){},
fF:function fF(){},
fI:function fI(){},
a8:function a8(){},
fK:function fK(){},
fN:function fN(){},
fO:function fO(){},
dA:function dA(){},
fY:function fY(){},
dC:function dC(){},
h_:function h_(){},
h2:function h2(){},
a9:function a9(){},
h3:function h3(){},
aa:function aa(){},
h5:function h5(){},
ab:function ab(){},
ha:function ha(){},
a_:function a_(){},
an:function an(){},
dF:function dF(){},
hj:function hj(){},
hk:function hk(){},
c0:function c0(){},
ac:function ac(){},
a0:function a0(){},
hn:function hn(){},
ho:function ho(){},
hq:function hq(){},
ad:function ad(){},
b_:function b_(){},
hu:function hu(){},
hv:function hv(){},
bp:function bp(){},
hx:function hx(){},
dJ:function dJ(){},
aH:function aH(){},
hC:function hC(){},
bq:function bq(){},
hE:function hE(){},
hH:function hH(){},
hI:function hI(){},
b1:function b1(){},
c4:function c4(){},
hK:function hK(a){this.a=a},
hL:function hL(){},
b2:function b2(){},
hW:function hW(){},
dN:function dN(){},
hY:function hY(){},
hZ:function hZ(){},
i_:function i_(){},
im:function im(){},
io:function io(){},
dP:function dP(){},
iH:function iH(){},
iK:function iK(){},
iL:function iL(){},
iS:function iS(){},
iT:function iT(){},
hU:function hU(){},
i0:function i0(a){this.a=a},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i5:function i5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
i6:function i6(a){this.a=a},
c8:function c8(a){this.a=a},
A:function A(){},
dx:function dx(a){this.a=a},
fy:function fy(a){this.a=a},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
cb:function cb(){},
iI:function iI(){},
iJ:function iJ(){},
iO:function iO(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iP:function iP(){},
iM:function iM(){},
cz:function cz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dw:function dw(){},
iG:function iG(a,b){this.a=a
this.b=b},
dR:function dR(a){this.a=a},
iQ:function iQ(a){this.a=a},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
cD:function cD(){},
cX:function cX(){},
cJ:function cJ(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cH:function cH(){},
cI:function cI(){},
cK:function cK(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cY:function cY(){},
cZ:function cZ(){},
d9:function d9(){},
da:function da(){},
d8:function d8(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
d0:function d0(){},
d2:function d2(){},
d4:function d4(){},
d6:function d6(){},
db:function db(){},
dc:function dc(){}},B={
o9:function(a){var t,s
t=document
s=W.aW
W.af(t,"keydown",new B.jp(),!1,s)
W.af(t,"keyup",new B.jq(),!1,s)
if(!$.oa)W.af(t,"mousemove",new B.jr(),!1,W.R)
s=W.R
W.af(t,"mousedown",new B.js(),!1,s)
W.af(t,"mouseup",new B.jt(),!1,s)},
n1:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.q(3))
s=$.$get$j4()
r=$.$get$ch()
q=new T.L(new Float32Array(H.q(16)))
q.M()
q=new B.fA(a,b,c,0,new T.n(t),-0.02,s,r,q,new T.n(new Float32Array(H.q(3))),new T.n(new Float32Array(H.q(3))),new T.n(new Float32Array(H.q(3))),new T.n(new Float32Array(H.q(3))),"camera:orbit",!1,!0)
q.dF(a,b,c,d)
return q},
jp:function jp(){},
jq:function jq(){},
jr:function jr(){},
js:function js(){},
jt:function jt(){},
fA:function fA(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fB:function fB(a){this.a=a},
fC:function fC(a){this.a=a},
fD:function fD(){},
fE:function fE(a){this.a=a}},G={
ng:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.an(t,"\n")},
la:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.ci(a,b)
t.br(a,s,c)
t.ce(a,s)
r=t.bm(a,s,35713)
if(r!=null&&!r){q=t.bl(a,s)
P.T("E:Compilation failed:")
P.T("E:"+G.ng(c))
P.T("E:Failure:")
P.T(C.f.a0("E:",q))
throw H.e(q)}return s},
mP:function(a,b,c){var t,s,r,q,p,o,n,m
C.e.cs(a,0,a.length,0)
C.e.cs(b,0,4,0)
for(t=c.length,s=0,r=0;q=c.length,r<q;q===t||(0,H.C)(c),++r){p=c[r]
o=s*16
n=p.x.a
m=n[0]
a[o+4]=m
a[o+5]=n[1]
a[o+6]=n[2]
n=p.y.a
a[o+8]=n[0]
a[o+9]=n[1]
a[o+10]=n[2]
n=p.z.a
a[o+12]=n[0]
a[o+13]=n[1]
a[o+14]=n[2]
b[s]=p.d;++s}},
kP:function(a){var t=new G.fj(P.K(),a,!1,!0)
t.dE(a)
return t},
jH:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jA(a[s])
b[t+1]=J.jB(a[s])
b[t+2]=J.ke(a[s])}return b},
mL:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jA(a[s])
b[t+1]=J.jB(a[s])}return b},
mM:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jA(a[s])
b[t+1]=J.jB(a[s])
b[t+2]=J.ke(a[s])
b[t+3]=J.ma(a[s])}return b},
mK:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b9(a[s],0)
b[t+1]=J.b9(a[s],1)
b[t+2]=J.b9(a[s],2)
b[t+3]=J.b9(a[s],3)}return b},
no:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gF(t),s=s.gw(s),r=b.x,q=[[P.c,P.p]],p=[P.Q],o=[T.ae],n=[T.n],m=[T.ay];s.p();){l=s.gq()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lx>0)H.dV("I: "+k)
continue}j=t.h(0,l)
switch($.$get$W().h(0,l).a){case"vec2":b.ab(l,G.mL(H.dW(j,"$isc",m,"$asc"),null),2)
break
case"vec3":b.ab(l,G.jH(H.dW(j,"$isc",n,"$asc"),null),3)
break
case"vec4":b.ab(l,G.mM(H.dW(j,"$isc",o,"$asc"),null),4)
break
case"float":b.ab(l,new Float32Array(H.iX(H.dW(j,"$isc",p,"$asc"))),1)
break
case"uvec4":b.ab(l,G.mK(H.dW(j,"$isc",q,"$asc"),null),4)
break
default:if(H.aI(!1))H.b7("unknown type for "+H.f(l)+" ["+J.m8(j[0]).l(0)+"] ["+new H.aG(H.j8(j),null).l(0)+"] "+H.f(j))}}},
kT:function(a,b,c,d){var t=new G.fV(b,c,d,null,null,P.K(),P.K(),P.al(null,null,null,P.t),null,a,!1,!0)
t.dG(a,b,c,d)
return t},
fn:function fn(){},
dK:function dK(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e5:function e5(){},
e8:function e8(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
eG:function eG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f7:function f7(){},
ee:function ee(a,b,c,d,e,f,g,h,i,j){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.d=g
_.a=h
_.b=i
_.c=j},
eT:function eT(a,b,c,d,e,f,g){var _=this
_.x=a
_.y=b
_.z=c
_.d=d
_.a=e
_.b=f
_.c=g},
dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
fj:function fj(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dp:function dp(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fH:function fH(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fV:function fV(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
bo:function bo(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h4:function h4(){},
hp:function hp(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c2:function c2(){},
eV:function eV(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
nf:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=d.a
if(t[1]===0)return
s=b*0.5
r=c*C.k.eW(s/c)
q=-r
p=new T.n(new Float32Array(H.q(3)))
p.E(d)
p.bp(0,s)
t=t[1]
o=new T.n(new Float32Array(H.q(3)))
o.E(p)
o.bp(0,1/t)
n=[]
for(m=q;m<=r;m+=c)for(l=q;l<=r;l+=c){t=new Float32Array(3)
p=new T.n(t)
t[0]=m
t[1]=0
t[2]=l
p.j(0,o)
C.a.j(n,p)
t=new Float32Array(3)
p=new T.n(t)
t[0]=m
t[1]=0
t[2]=l
p.bu(o)
C.a.j(n,p)}for(k=0;k<8;++k){m=(k&1)===1?1:-1
j=(k&2)===2?1:-1
l=(k&4)===4?1:-1
if(m>0){t=j*s
p=l*s
i=new Float32Array(3)
i[0]=m*s
i[1]=t
i[2]=p
C.a.j(n,new T.n(i))
i=new Float32Array(3)
i[0]=-m*s
i[1]=t
i[2]=p
C.a.j(n,new T.n(i))}if(j>0){t=m*s
p=l*s
i=new Float32Array(3)
i[0]=t
i[1]=j*s
i[2]=p
C.a.j(n,new T.n(i))
i=new Float32Array(3)
i[0]=t
i[1]=-j*s
i[2]=p
C.a.j(n,new T.n(i))}if(l>0){t=m*s
p=j*s
i=new Float32Array(3)
i[0]=t
i[1]=p
i[2]=l*s
C.a.j(n,new T.n(i))
i=new Float32Array(3)
i[0]=t
i[1]=p
i[2]=-l*s
C.a.j(n,new T.n(i))}}a.bB(G.jH(n,null))
t=new Array(n.length)
t.fixed$length=Array
h=H.B(t,[P.p])
for(t=n.length,k=0;k<t;++k)h[k]=k
a.aI(h)},
h8:function h8(){},
h9:function h9(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
lu:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.E(c)
s=b.d
t.cB(0,s)
r=b.ch
if(r!=null&&b.cx!=null){J.ah(b)
q=C.a.gaB(e)
p=b.db
o=new Float32Array(9)
n=t.a
o[0]=n[0]
o[1]=n[1]
o[2]=n[2]
o[3]=n[4]
o[4]=n[5]
o[5]=n[6]
o[6]=n[8]
o[7]=n[9]
o[8]=n[10]
p.eF(new T.aE(o))
o=p.a
m=o[3]
o[3]=o[1]
o[1]=m
m=o[6]
o[6]=o[2]
o[2]=m
m=o[7]
o[7]=o[5]
o[5]=m
q=q.d
q.i(0,"uTransformationMatrix",s)
q.i(0,"uModelMatrix",t)
q.i(0,"uNormalMatrix",p)
C.a.j(e,r)
a.dz(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.C)(s),++l)A.lu(a,s[l],t,d,e)},
bT:function bT(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
_.ch=a
_.cx=b
_.cy=c
_.db=d
_.dx=e
_.d=f
_.e=g
_.f=a0
_.r=a1
_.x=a2
_.a=a3
_.b=a4
_.c=a5},
bW:function bW(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fU:function fU(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.a=i
_.b=a0
_.c=a1},
dT:function(a){var t,s
t=C.e.eX(a,0,new A.j9())
s=536870911&t+(C.b.cX(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
j9:function j9(){}},D={
n0:function(a){var t,s
t=new P.I(0,$.x,null,[null])
s=new XMLHttpRequest()
C.q.fc(s,"GET",a)
W.af(s,"loadend",new D.fd(new P.c5(t,[null]),s),!1,W.oi)
C.q.G(s,"")
return t},
n_:function(a){var t,s,r
t=new P.I(0,$.x,null,[null])
s=document.createElement("img")
r=new W.i1(s,"load",!1,[W.j])
r.gb7(r).aC(new D.fc(new P.c5(t,[null]),s))
s.src=a
return t},
fd:function fd(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b}},T={
jU:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.n(t)},
l9:function(a){var t=new Float32Array(H.q(3))
t[2]=a
t[1]=a
t[0]=a
return new T.n(t)},
aE:function aE(a){this.a=a},
L:function L(a){this.a=a},
ay:function ay(a){this.a=a},
n:function n(a){this.a=a},
ae:function ae(a){this.a=a}},L={
o3:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=new R.h9(0,0,null,null,null,null)
r.dI(C.j.d0(s,"stats"),"blue","gray")
q=C.j.fe(s,"#webgl-canvas")
p=new G.e8(null,q)
s=(q&&C.z).d_(q,"webgl2",P.aX(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.G(P.cx('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.ah(J.mb(s))
if($.lx>0)P.T("I: "+o)
J.lU(s,0,0,0,1)
J.cl(s,2929)
J.cl(s,2884)
n=B.n1(0.5,0,0,q)
s=new T.L(new Float32Array(H.q(16)))
s.M()
o=new T.L(new Float32Array(H.q(16)))
o.M()
m=new G.fH(n,50,1,0.1,1000,s,o,new T.L(new Float32Array(H.q(16))),P.K(),"perspective",!1,!0)
m.bE()
o=$.$get$lt()
s=$.$get$lp()
l=$.$get$lr()
k=new Float32Array(H.q(16))
j=new Float32Array(H.q(16))
i=[]
h=new G.eT(i,new Float32Array(H.q(64)),new Float32Array(H.q(4)),P.K(),"illumination",!1,!0)
C.a.j(i,new G.ee(o,s,l,40,new T.L(k),new T.L(j),1,"dir",!1,!0))
j=H.B([],[A.bW])
g=new A.fU(null,p,j,17664,0,0,0,0,"main",!1,!0)
g.d=new G.eO(p,null,null,null,null)
s=G.kT("Fixed",p,$.$get$lG(),$.$get$lF())
l=[]
H.b(!0)
C.a.j(j,new A.bW(s,[m,h],l,"Fixed",!1,!0))
f=G.kP("light")
f.P("uColor",$.$get$kv())
k=s.d
e=new G.dp(k,J.kd(k.a),1,P.K(),s.e.x,null,0,-1,null,null,P.K(),"meshdata:dirLightViz",!1,!0)
e.bz(new Float32Array(H.q(3)))
e.y=J.dZ(k.a)
e.aI([0,0])
R.nf(e,40,10,o)
s=new Float32Array(H.q(9))
o=new T.L(new Float32Array(H.q(16)))
o.M()
k=new T.L(new Float32Array(H.q(16)))
k.M()
i=new Float32Array(H.q(3))
d=new Float32Array(H.q(3))
c=new Float32Array(H.q(3))
b=new Float32Array(H.q(3))
H.b(!0)
C.a.j(l,new A.bT(f,e,[],new T.aE(s),o,k,new T.n(i),new T.n(d),new T.n(c),new T.n(b),"pointLight",!1,!0))
b=G.kT("main",p,$.$get$lJ(),$.$get$lw())
a=new A.bW(b,[m,h],[],"main",!1,!0)
H.b(!0)
C.a.j(j,a)
s=new L.jm(q,m,g)
s.$1(null)
W.af(window,"resize",s,!1,W.j)
t.a=0
a0=G.kP("mat")
a0.P("uColor",$.$get$lq())
a0.P("uShininess",2)
P.mO([D.n0("../asset/leeperrysmith/LeePerrySmith.js"),D.n_("../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg")],null,!1).aC(new L.jl(p,a,new L.jk(t,r,n,g),a0))},
jm:function jm(a,b,c){this.a=a
this.b=b
this.c=c},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},Y={
nm:function(a){var t,s,r,q,p
t=J.F(a)
s=t.h(a,"skinIndices")
r=t.h(a,"skinWeights")
if(s==null||J.ba(s)===0)return 0
t=C.c.C(J.ba(t.h(a,"vertices")),3)
q=J.F(s)
p=C.b.aa(q.gk(s),t)
t*=p
H.b(t===q.gk(s))
H.b(t===J.ba(r))
H.b(p<=4)
P.T("Skin multiplier is "+p)
return p},
mQ:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=[]
s=Y.nm(b2)
r=J.F(b2)
q=r.h(b2,"faces")
p=J.F(q)
P.T("faces: "+p.gk(q))
o=Y.kw(r.h(b2,"vertices"))
n=Y.kw(r.h(b2,"normals"))
m=s===0
l=m?null:Y.kx(s,r.h(b2,"skinIndices"))
k=m?null:Y.kx(s,r.h(b2,"skinWeights"))
if(k!=null)for(m=k.length,j=0;j<m;++j){i=k[j]
h=i.a
g=h[0]+h[1]+h[2]+h[3]
if(g<0.98||g>1.02)H.dV("bad vector: "+J.ah(i))}f=Y.mD(J.b9(r.h(b2,"uvs"),0))
for(r=s>0,m=f.length>0,h=n.length>0,e=o.length,d=0;d<p.gk(q);){c=d+1
b=p.h(q,d)
g=(b&1)===0?3:4
a=[]
for(d=c,a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a,p.h(q,d))}if((b&2)!==0){c=d+1
a1=p.h(q,d)
d=c}else a1=0
a2=[]
if((b&8)!==0)for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a2,C.a.h(f,p.h(q,d)))}a3=[]
if((b&16)!==0){c=d+1
a4=C.a.h(n,p.h(q,d))
for(a0=0;a0<g;++a0)C.a.j(a3,a4)
d=c}if((b&32)!==0)for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a3,C.a.h(n,p.h(q,d)))}a5=[]
if((b&64)!==0){H.b(!1)
c=d+1
a6=p.h(q,d)
for(a0=0;a0<g;++a0)C.a.j(a5,a6)
d=c}if((b&128)!==0){H.b(!1)
for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.j(a5,p.h(q,d))}}for(;C.b.d1(t.length,a1);){a7=new G.eR(!1,[],[],[],P.K())
if(h)a7.au("aNormal")
if(m)a7.au("aTexUV")
if(r){a7.au("aBoneIndex")
a7.au("aBoneWeight")}C.a.j(t,a7)}a7=C.a.h(t,a1)
a8=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.C)(a),++j)C.a.j(a8,C.a.h(o,a[j]))
if(g===3)a7.dr(a8)
else{H.b(g===4)
a7.ds(a8)}if(a2.length>0)a7.dn("aTexUV",a2)
if(a3.length>0)a7.dq("aNormal",a3)
if(r){H.b(e===l.length)
H.b(e===k.length)
b0=[]
b1=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.C)(a),++j){c=a[j]
C.a.j(b0,C.a.h(l,c))
C.a.j(b1,C.a.h(k,c))}a7.bx("aBoneIndex",b0)
a7.bx("aBoneWeight",b1)}}P.T("out: "+t.length+" "+t[0].l(0))
return t},
kw:function(a){var t,s,r,q,p,o,n,m
t=J.F(a)
s=H.B(new Array(C.b.C(t.gk(a),3)),[T.n])
for(r=0;r<t.gk(a);r+=3){q=C.b.C(r,3)
p=J.bz(t.h(a,r))
o=J.bz(t.h(a,r+1))
n=J.bz(t.h(a,r+2))
m=new Float32Array(3)
m[0]=p
m[1]=o
m[2]=n
s[q]=new T.n(m)}return s},
mD:function(a){var t,s,r,q,p,o,n
t=J.F(a)
s=H.B(new Array(C.b.C(t.gk(a),2)),[T.ay])
for(r=0;r<t.gk(a);r+=2){q=C.b.C(r,2)
p=J.bz(t.h(a,r))
o=J.bz(t.h(a,r+1))
n=new Float32Array(2)
n[0]=p
n[1]=o
s[q]=new T.ay(n)}return s},
kx:function(a,b){var t,s,r,q,p,o
t=J.F(b)
s=H.B(new Array(C.b.aa(t.gk(b),a)),[T.ae])
for(r=0,q=0;r<t.gk(b);r+=a,++q){p=new Float32Array(4)
for(o=0;o<a;++o)p[o]=J.bz(t.h(b,r+o))
s[q]=new T.ae(p)}return s}}
var v=[C,H,J,P,W,B,G,R,A,D,T,L,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jK.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aY(a)},
l:function(a){return H.fP(a)},
gA:function(a){return new H.aG(H.j8(a),null)}}
J.f0.prototype={
l:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.a1},
$isaz:1}
J.f1.prototype={
v:function(a,b){return null==b},
l:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.W}}
J.bK.prototype={
gu:function(a){return 0},
gA:function(a){return C.V},
l:function(a){return String(a)},
$iskM:1}
J.fJ.prototype={}
J.b0.prototype={}
J.aV.prototype={
l:function(a){var t=a[$.$get$kz()]
return t==null?this.dk(a):J.ah(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjI:1}
J.aT.prototype={
b5:function(a,b){if(!!a.immutable$list)throw H.e(new P.w(b))},
b4:function(a,b){if(!!a.fixed$length)throw H.e(new P.w(b))},
j:function(a,b){this.b4(a,"add")
a.push(b)},
K:function(a,b){var t,s,r,q,p
t=a.length
this.b4(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.G(new P.Y(a)))
a.push(q)}},
cA:function(a,b){return new H.bL(a,b,[H.aA(a,0),null])},
an:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gb7:function(a){if(a.length>0)return a[0]
throw H.e(H.dh())},
gaB:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.dh())},
bq:function(a,b,c,d,e){var t,s
this.b5(a,"setRange")
P.jS(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.aZ(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mY())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c4:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.Y(a))}return!1},
df:function(a,b){this.b5(a,"sort")
H.dD(a,0,a.length-1,P.nP())},
aG:function(a){return this.df(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
l:function(a){return P.f_(a,"[","]")},
gw:function(a){return new J.e2(a,a.length,0,null,[H.aA(a,0)])},
gu:function(a){return H.aY(a)},
gk:function(a){return a.length},
sk:function(a,b){this.b4(a,"set length")
if(b<0)throw H.e(P.aZ(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.S(a,b))
if(b>=a.length||b<0)throw H.e(H.S(a,b))
return a[b]},
i:function(a,b,c){this.b5(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.S(a,b))
if(b>=a.length||b<0)throw H.e(H.S(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
J.jJ.prototype={}
J.e2.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.C(t))
r=this.c
if(r>=s){this.sbF(null)
return!1}this.sbF(t[r]);++this.c
return!0},
sbF:function(a){this.d=a}}
J.bj.prototype={
S:function(a,b){var t
if(typeof b!=="number")throw H.e(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaz(b)
if(this.gaz(a)===t)return 0
if(this.gaz(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaz:function(a){return a===0?1/a<0:a<0},
ez:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".ceil()"))},
eW:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.w(""+a+".round()"))},
eA:function(a,b,c){if(this.S(b,c)>0)throw H.e(H.P(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
fm:function(a){return a},
fq:function(a,b){var t
if(b>20)throw H.e(P.aZ(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaz(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a0:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a-b},
cY:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a*b},
aa:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c0(a,b)},
C:function(a,b){return(a|0)===a?a/b|0:this.c0(a,b)},
c0:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.w("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aW:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cX:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a&b)>>>0},
dm:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a^b)>>>0},
as:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a<b},
ar:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>b},
d1:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a<=b},
cZ:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>=b},
gA:function(a){return C.a4},
$isX:1}
J.dk.prototype={
gA:function(a){return C.a3},
$isQ:1,
$isp:1,
$isX:1}
J.dj.prototype={
gA:function(a){return C.a2},
$isQ:1,
$isX:1}
J.aU.prototype={
aM:function(a,b){if(b>=a.length)throw H.e(H.S(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(typeof b!=="string")throw H.e(P.kn(b,null,null))
return a+b},
dg:function(a,b,c){var t
if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bs:function(a,b){return this.dg(a,b,0)},
bv:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fQ(b,null,null))
if(b>c)throw H.e(P.fQ(b,null,null))
if(c>a.length)throw H.e(P.fQ(c,null,null))
return a.substring(b,c)},
dh:function(a,b){return this.bv(a,b,null)},
fp:function(a){return a.toLowerCase()},
eD:function(a,b,c){if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
return H.ob(a,b,c)},
S:function(a,b){var t
if(typeof b!=="string")throw H.e(H.P(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
l:function(a){return a},
gu:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gA:function(a){return C.X},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.S(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$ist:1}
H.d.prototype={$asd:null}
H.bk.prototype={
gw:function(a){return new H.dm(this,this.gk(this),0,null,[H.ag(this,"bk",0)])},
aE:function(a,b){return this.dj(0,b)},
fo:function(a,b){var t,s
t=H.B([],[H.ag(this,"bk",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.t(0,s)
return t},
fn:function(a){return this.fo(a,!0)}}
H.dm.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.F(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.Y(t))
q=this.c
if(q>=r){this.sae(null)
return!1}this.sae(s.t(t,q));++this.c
return!0},
sae:function(a){this.d=a}}
H.dn.prototype={
gw:function(a){return new H.ff(null,J.by(this.a),this.b,this.$ti)},
gk:function(a){return J.ba(this.a)},
$asZ:function(a,b){return[b]}}
H.el.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.ff.prototype={
p:function(){var t=this.b
if(t.p()){this.sae(this.c.$1(t.gq()))
return!0}this.sae(null)
return!1},
gq:function(){return this.a},
sae:function(a){this.a=a},
$asdi:function(a,b){return[b]}}
H.bL.prototype={
gk:function(a){return J.ba(this.a)},
t:function(a,b){return this.b.$1(J.m2(this.a,b))},
$asd:function(a,b){return[b]},
$asbk:function(a,b){return[b]},
$asZ:function(a,b){return[b]}}
H.dL.prototype={
gw:function(a){return new H.hJ(J.by(this.a),this.b,this.$ti)}}
H.hJ.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cy.prototype={}
H.ju.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jv.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.iw.prototype={
sf6:function(a){this.z=a},
sf9:function(a){this.ch=a}}
H.b4.prototype={
c3:function(a,b){if(!this.f.v(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.b2()},
fh:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ao(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bV();++r.d}this.y=!1}this.b2()},
eo:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
fg:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(new P.w("removeRange"))
P.jS(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dc:function(a,b){if(!this.r.v(0,a))return
this.db=b},
f0:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jP(null,null)
this.cx=t}t.U(0,new H.iq(a,c))},
f_:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aA()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jP(null,null)
this.cx=t}t.U(0,this.gf7())},
f1:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.T(a)
if(b!=null)P.T(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.ah(a)
s[1]=b==null?null:b.l(0)
for(r=new P.c9(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.G(0,s)},
aj:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.O(o)
p=H.ap(o)
this.f1(q,p)
if(this.db){this.aA()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nJ(r)
u.globalState.d=H.k4(t,"$isb4")
if(t!=null)$=t.gf5()
if(this.cx!=null)for(;n=this.cx,!n.gam(n);)this.cx.cD().$0()}return s},
cz:function(a){return this.b.h(0,a)},
bI:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.cx("Registry: ports must be registered only once."))
t.i(0,a,b)},
b2:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aA()},
aA:function(){var t,s,r
t=this.cx
if(t!=null)t.W(0)
for(t=this.b,s=t.gcU(t),s=s.gw(s);s.p();)s.gq().dX()
t.W(0)
this.c.W(0)
u.globalState.z.ao(0,this.a)
this.dx.W(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
gf5:function(){return this.d},
geE:function(){return this.e}}
H.iq.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.i2.prototype={
eO:function(){var t=this.a
if(t.b===t.c)return
return t.cD()},
cF:function(){var t,s,r
t=this.eO()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gam(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.cx("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gam(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aX(["command","close"])
r=new H.ao(!0,new P.dO(0,null,null,null,null,null,0,[null,P.p])).J(r)
s.toString
self.postMessage(r)}return!1}t.fd()
return!0},
bZ:function(){if(self.window!=null)new H.i3(this).$0()
else for(;this.cF(););},
ap:function(){var t,s,r,q,p
if(!u.globalState.x)this.bZ()
else try{this.bZ()}catch(r){t=H.O(r)
s=H.ap(r)
q=u.globalState.Q
p=P.aX(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.ao(!0,P.ca(null,P.p)).J(p)
q.toString
self.postMessage(p)}}}
H.i3.prototype={
$0:function(){if(!this.a.cF())return
P.ne(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.b5.prototype={
fd:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.aj(this.b)}}
H.iv.prototype={}
H.eY.prototype={
$0:function(){H.mU(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eZ.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bw(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bw(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b2()},
$S:function(){return{func:1,v:true}}}
H.hV.prototype={}
H.bs.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nu(b)
if(t.geE()===s){s=J.F(r)
switch(s.h(r,0)){case"pause":t.c3(s.h(r,1),s.h(r,2))
break
case"resume":t.fh(s.h(r,1))
break
case"add-ondone":t.eo(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fg(s.h(r,1))
break
case"set-errors-fatal":t.dc(s.h(r,1),s.h(r,2))
break
case"ping":t.f0(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.f_(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ao(0,s)
break}return}u.globalState.f.a.U(0,new H.b5(t,new H.ix(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bs){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.ix.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dT(0,this.b)},
$S:function(){return{func:1}}}
H.cc.prototype={
G:function(a,b){var t,s,r
t=P.aX(["command","message","port",this,"msg",b])
s=new H.ao(!0,P.ca(null,P.p)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.cc){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.dm((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bn.prototype={
dX:function(){this.c=!0
this.b=null},
dT:function(a,b){if(this.c)return
this.b.$1(b)},
$isn9:1}
H.hr.prototype={
dJ:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.U(0,new H.b5(s,new H.hs(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.aJ(new H.ht(this,b),0),a)}else{H.b(a>0)
throw H.e(new P.w("Timer greater than 0."))}}}
H.hs.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ht.prototype={
$0:function(){this.a.c=null
H.jj()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.as.prototype={
gu:function(a){var t=this.a
t=C.b.aW(t,0)^C.b.C(t,4294967296)
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
H.ao.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.u(a)
if(!!t.$isbO)return["buffer",a]
if(!!t.$isbl)return["typed",a]
if(!!t.$iso)return this.d6(a)
if(!!t.$ismR){r=this.gd3()
q=t.gF(a)
q=H.jQ(q,r,H.ag(q,"Z",0),null)
q=P.kN(q,!0,H.ag(q,"Z",0))
t=t.gcU(a)
t=H.jQ(t,r,H.ag(t,"Z",0),null)
return["map",q,P.kN(t,!0,H.ag(t,"Z",0))]}if(!!t.$iskM)return this.d7(a)
if(!!t.$isa)this.cS(a)
if(!!t.$isn9)this.aq(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbs)return this.d8(a)
if(!!t.$iscc)return this.d9(a)
if(!!t.$isbc){p=a.$static_name
if(p==null)this.aq(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isas)return["capability",a.a]
if(!(a instanceof P.m))this.cS(a)
return["dart",u.classIdExtractor(a),this.d5(u.classFieldsExtractor(a))]},
aq:function(a,b){throw H.e(new P.w((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cS:function(a){return this.aq(a,null)},
d6:function(a){var t
H.b(typeof a!=="string")
t=this.d4(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aq(a,"Can't serialize indexable: ")},
d4:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
d5:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
d7:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aq(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
d9:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d8:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b3.prototype={
X:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.cm("Bad serialized message: "+H.f(a)))
switch(C.a.gb7(a)){case"ref":H.b(J.E(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.E(a[0],"buffer"))
t=a[1]
C.a.j(this.b,t)
return t
case"typed":H.b(J.E(a[0],"typed"))
t=a[1]
C.a.j(this.b,t)
return t
case"fixed":H.b(J.E(a[0],"fixed"))
t=a[1]
C.a.j(this.b,t)
s=H.B(this.ai(t),[null])
s.fixed$length=Array
return s
case"extendable":H.b(J.E(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.B(this.ai(t),[null])
case"mutable":H.b(J.E(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.ai(t)
case"const":H.b(J.E(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
s=H.B(this.ai(t),[null])
s.fixed$length=Array
return s
case"map":return this.eR(a)
case"sendport":return this.eS(a)
case"raw sendport":H.b(J.E(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.eQ(a)
case"function":H.b(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.b(J.E(a[0],"capability"))
return new H.as(a[1])
case"dart":H.b(J.E(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.j(this.b,p)
this.ai(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ai:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.X(a[t]))
return a},
eR:function(a){var t,s,r,q,p
H.b(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.K()
C.a.j(this.b,r)
t=J.mg(t,this.geP()).fn(0)
for(q=J.F(s),p=0;p<t.length;++p)r.i(0,t[p],this.X(q.h(s,p)))
return r},
eS:function(a){var t,s,r,q,p,o,n
H.b(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cz(r)
if(o==null)return
n=new H.bs(o,s)}else n=new H.cc(t,r,s)
C.a.j(this.b,n)
return n},
eQ:function(a){var t,s,r,q,p,o
H.b(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.F(t),p=J.F(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.X(p.h(s,o))
return r}}
H.fT.prototype={}
H.hy.prototype={
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
H.dy.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.f3.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hB.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jw.prototype={
$1:function(a){if(!!J.u(a).$isbf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dQ.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.je.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.jf.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.jg.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.jh.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ji.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bc.prototype={
l:function(a){return"Closure '"+H.dz(this).trim()+"'"},
$isjI:1,
gfv:function(){return this},
$D:null}
H.hl.prototype={}
H.h7.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bA.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aY(this.a)
else s=typeof t!=="object"?J.ar(t):H.aY(t)
return(s^H.aY(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fP(t)}}
H.hA.prototype={
l:function(a){return this.a}}
H.e7.prototype={
l:function(a){return this.a}}
H.fZ.prototype={
l:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hP.prototype={
l:function(a){return C.f.a0("Assertion failed: ",P.jG(this.a))}}
H.aG.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ar(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aG){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ak.prototype={
gk:function(a){return this.a},
gam:function(a){return this.a===0},
gF:function(a){return new H.f9(this,[H.aA(this,0)])},
gcU:function(a){return H.jQ(this.gF(this),new H.f2(this),H.aA(this,0),H.aA(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bS(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bS(s,b)}else return this.f2(b)},
f2:function(a){var t=this.d
if(t==null)return!1
return this.al(this.ax(t,this.ak(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.af(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.af(r,b)
return s==null?null:s.b}else return this.f3(b)},
f3:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ax(t,this.ak(a))
r=this.al(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aS()
this.b=t}this.bH(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aS()
this.c=s}this.bH(s,b,c)}else{r=this.d
if(r==null){r=this.aS()
this.d=r}q=this.ak(b)
p=this.ax(r,q)
if(p==null)this.aV(r,q,[this.aT(b,c)])
else{o=this.al(p,b)
if(o>=0)p[o].b=c
else p.push(this.aT(b,c))}}},
ao:function(a,b){if(typeof b==="string")return this.bY(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bY(this.c,b)
else return this.f4(b)},
f4:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ax(t,this.ak(a))
r=this.al(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c1(q)
return q.b},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
a5:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.Y(this))
t=t.c}},
bH:function(a,b,c){var t=this.af(a,b)
if(t==null)this.aV(a,b,this.aT(b,c))
else t.b=c},
bY:function(a,b){var t
if(a==null)return
t=this.af(a,b)
if(t==null)return
this.c1(t)
this.bT(a,b)
return t.b},
aT:function(a,b){var t,s
t=new H.f8(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c1:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ak:function(a){return J.ar(a)&0x3ffffff},
al:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
l:function(a){return P.kO(this)},
af:function(a,b){return a[b]},
ax:function(a,b){return a[b]},
aV:function(a,b,c){H.b(c!=null)
a[b]=c},
bT:function(a,b){delete a[b]},
bS:function(a,b){return this.af(a,b)!=null},
aS:function(){var t=Object.create(null)
this.aV(t,"<non-identifier-key>",t)
this.bT(t,"<non-identifier-key>")
return t},
$ismR:1}
H.f2.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.f8.prototype={}
H.f9.prototype={
gk:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.fa(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.fa.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.Y(t))
else{t=this.c
if(t==null){this.sbG(null)
return!1}else{this.sbG(t.a)
this.c=this.c.c
return!0}}},
sbG:function(a){this.d=a}}
H.ja.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.jb.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.t]}}}
H.jc.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.t]}}}
H.bO.prototype={
gA:function(a){return C.O},
$isbO:1}
H.bl.prototype={$isbl:1}
H.fo.prototype={
gA:function(a){return C.P}}
H.dr.prototype={
gk:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.ds.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
a[b]=c}}
H.dt.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
a[b]=c},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.dq.prototype={
gA:function(a){return C.Q},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]},
$iseK:1}
H.fp.prototype={
gA:function(a){return C.R},
$isd:1,
$asd:function(){return[P.Q]},
$isc:1,
$asc:function(){return[P.Q]}}
H.fq.prototype={
gA:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.fr.prototype={
gA:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$iskJ:1}
H.fs.prototype={
gA:function(a){return C.U},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.ft.prototype={
gA:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$isl6:1}
H.fu.prototype={
gA:function(a){return C.Z},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$isl7:1}
H.du.prototype={
gA:function(a){return C.a_},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]}}
H.fv.prototype={
gA:function(a){return C.a0},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.S(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isc:1,
$asc:function(){return[P.p]},
$isl8:1}
H.bP.prototype={
$aso:function(){},
$isd:1,
$asd:function(){return[P.p]},
$asr:function(){},
$isc:1,
$asc:function(){return[P.p]}}
H.bQ.prototype={
$aso:function(){},
$isd:1,
$asd:function(){return[P.Q]},
$asr:function(){},
$isc:1,
$asc:function(){return[P.Q]}}
H.bR.prototype={
$aso:function(){},
$asd:function(){return[P.Q]},
$asr:function(){},
$asc:function(){return[P.Q]}}
H.bS.prototype={
$aso:function(){},
$asd:function(){return[P.p]},
$asr:function(){},
$asc:function(){return[P.p]}}
P.hR.prototype={
$1:function(a){var t,s
H.jj()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hQ.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hS.prototype={
$0:function(){H.jj()
this.a.$0()},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){H.jj()
this.a.$0()},
$S:function(){return{func:1}}}
P.eQ.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.H(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.H(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eP.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bR(r)}else if(t.b===0&&!this.b)this.d.H(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hX.prototype={
eC:function(a,b){if(a==null)a=new P.bm()
if(this.a.a!==0)throw H.e(new P.am("Future already completed"))
$.x.toString
this.H(a,b)},
eB:function(a){return this.eC(a,null)}}
P.c5.prototype={
ah:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.am("Future already completed"))
t.bJ(b)},
H:function(a,b){this.a.bK(a,b)}}
P.iN.prototype={
ah:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.am("Future already completed"))
t.ad(b)},
H:function(a,b){this.a.H(a,b)}}
P.c6.prototype={
fa:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bd(this.d,a.a)},
eZ:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bw(s,{func:1,args:[P.m,P.bY]}))return t.fi(s,a.a,a.b)
else return t.bd(s,a.a)}}
P.I.prototype={
bf:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.nB(b,t)}s=new P.I(0,t,null,[null])
r=b==null?1:3
this.aL(new P.c6(null,s,r,a,b,[H.aA(this,0),null]))
return s},
aC:function(a){return this.bf(a,null)},
fu:function(a){var t,s
t=$.x
s=new P.I(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aA(this,0)
this.aL(new P.c6(null,s,8,a,null,[t,t]))
return s},
bM:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aL:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.k4(this.c,"$isc6")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aL(a)
return}this.bM(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bu(null,null,t,new P.i8(this,a))}},
bX:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bX(a)
return}this.bM(s)}H.b(this.a>=4)
t.a=this.ag(a)
s=this.b
s.toString
P.bu(null,null,s,new P.ih(t,this))}},
aU:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.ag(t)},
ag:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ad:function(a){var t,s
H.b(this.a<4)
t=this.$ti
if(H.cg(a,"$isaS",t,"$asaS"))if(H.cg(a,"$isI",t,null))P.ib(a,this)
else P.lb(a,this)
else{s=this.aU()
H.b(this.a<4)
this.a=4
this.c=a
P.br(this,s)}},
bR:function(a){var t
H.b(this.a<4)
H.b(!J.u(a).$isaS)
t=this.aU()
H.b(this.a<4)
this.a=4
this.c=a
P.br(this,t)},
H:function(a,b){var t
H.b(this.a<4)
t=this.aU()
H.b(this.a<4)
this.a=8
this.c=new P.bb(a,b)
P.br(this,t)},
dY:function(a){return this.H(a,null)},
bJ:function(a){var t
H.b(this.a<4)
if(H.cg(a,"$isaS",this.$ti,"$asaS")){this.dW(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bu(null,null,t,new P.ia(this,a))},
dW:function(a){var t
if(H.cg(a,"$isI",this.$ti,null)){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bu(null,null,t,new P.ig(this,a))}else P.ib(a,this)
return}P.lb(a,this)},
bK:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bu(null,null,t,new P.i9(this,a,b))},
$isaS:1,
gaX:function(){return this.a},
gef:function(){return this.c}}
P.i8.prototype={
$0:function(){P.br(this.a,this.b)},
$S:function(){return{func:1}}}
P.ih.prototype={
$0:function(){P.br(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ic.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ad(a)},
$S:function(){return{func:1,args:[,]}}}
P.id.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.H(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.ie.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.ia.prototype={
$0:function(){this.a.bR(this.b)},
$S:function(){return{func:1}}}
P.ig.prototype={
$0:function(){P.ib(this.b,this.a)},
$S:function(){return{func:1}}}
P.i9.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.ik.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cE(q.d)}catch(n){s=H.O(n)
r=H.ap(n)
if(this.c){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.bb(s,r)
p.a=!0
return}if(!!J.u(t).$isaS){if(t instanceof P.I&&t.gaX()>=4){if(t.gaX()===8){q=t
H.b(q.gaX()===8)
p=this.b
p.b=q.gef()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aC(new P.il(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.il.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.ij.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bd(r.d,this.c)}catch(q){t=H.O(q)
s=H.ap(q)
r=this.a
r.b=new P.bb(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ii.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.fa(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eZ(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.ap(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.bb(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dM.prototype={}
P.bZ.prototype={
gk:function(a){var t,s
t={}
s=new P.I(0,$.x,null,[P.p])
t.a=0
this.cv(new P.he(t),!0,new P.hf(t,s),s.gbQ())
return s},
gb7:function(a){var t,s
t={}
s=new P.I(0,$.x,null,[H.ag(this,"bZ",0)])
t.a=null
t.a=this.cv(new P.hc(t,this,s),!0,new P.hd(s),s.gbQ())
return s}}
P.he.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.hf.prototype={
$0:function(){this.b.ad(this.a.a)},
$S:function(){return{func:1}}}
P.hc.prototype={
$1:function(a){P.nt(this.a.a,this.c,a)},
$S:function(){return H.nM(function(a){return{func:1,args:[a]}},this.b,"bZ")}}
P.hd.prototype={
$0:function(){var t,s,r,q
try{r=H.dh()
throw H.e(r)}catch(q){t=H.O(q)
s=H.ap(q)
P.nv(this.a,t,s)}},
$S:function(){return{func:1}}}
P.hb.prototype={}
P.iV.prototype={
$0:function(){return this.a.ad(this.b)},
$S:function(){return{func:1}}}
P.bb.prototype={
l:function(a){return H.f(this.a)},
$isbf:1}
P.iU.prototype={}
P.iZ.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bm()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.iz.prototype={
fj:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.lg(null,null,this,a)}catch(r){t=H.O(r)
s=H.ap(r)
P.iY(null,null,this,t,s)}},
fk:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.lh(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.ap(r)
P.iY(null,null,this,t,s)}},
ev:function(a){return new P.iB(this,a)},
b3:function(a){return new P.iA(this,a)},
ew:function(a){return new P.iC(this,a)},
h:function(a,b){return},
cE:function(a){if($.x===C.d)return a.$0()
return P.lg(null,null,this,a)},
bd:function(a,b){if($.x===C.d)return a.$1(b)
return P.lh(null,null,this,a,b)},
fi:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.nC(null,null,this,a,b,c)}}
P.iB.prototype={
$0:function(){return this.a.cE(this.b)},
$S:function(){return{func:1}}}
P.iA.prototype={
$0:function(){return this.a.fj(this.b)},
$S:function(){return{func:1}}}
P.iC.prototype={
$1:function(a){return this.a.fk(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dO.prototype={
ak:function(a){return H.o5(a)&0x3ffffff},
al:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.is.prototype={
gw:function(a){var t=new P.c9(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dZ(b)},
dZ:function(a){var t=this.d
if(t==null)return!1
return this.aw(t[this.av(a)],a)>=0},
cz:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.e6(a)},
e6:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.av(a)]
r=this.aw(s,a)
if(r<0)return
return J.b9(s,r).ge0()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bN(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.b(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bN(r,b)}else return this.U(0,b)},
U:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nr()
this.d=t}s=this.av(b)
r=t[s]
if(r==null){q=[this.aN(b)]
H.b(q!=null)
t[s]=q}else{if(this.aw(r,b)>=0)return!1
r.push(this.aN(b))}return!0},
ao:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bO(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bO(this.c,b)
else return this.e9(0,b)},
e9:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.av(b)]
r=this.aw(s,b)
if(r<0)return!1
this.bP(s.splice(r,1)[0])
return!0},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bN:function(a,b){var t
if(a[b]!=null)return!1
t=this.aN(b)
H.b(!0)
a[b]=t
return!0},
bO:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bP(t)
delete a[b]
return!0},
aN:function(a){var t,s
t=new P.it(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bP:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
av:function(a){return J.ar(a)&0x3ffffff},
aw:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.it.prototype={
ge0:function(){return this.a}}
P.c9.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.Y(t))
else{t=this.c
if(t==null){this.sac(null)
return!1}else{this.sac(t.a)
this.c=this.c.b
return!0}}},
sac:function(a){this.d=a}}
P.ip.prototype={}
P.dl.prototype={}
P.y.prototype={
gw:function(a){return new H.dm(a,this.gk(a),0,null,[H.ag(a,"y",0)])},
t:function(a,b){return this.h(a,b)},
cA:function(a,b){return new H.bL(a,b,[H.ag(a,"y",0),null])},
eX:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.Y(a))}return s},
cs:function(a,b,c,d){var t
P.jS(b,c,this.gk(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
l:function(a){return P.f_(a,"[","]")},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
P.fg.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.fb.prototype={
gw:function(a){return new P.iu(this,this.c,this.d,this.b,null,this.$ti)},
gam:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ar(0,b)||b>=t)H.G(P.D(b,this,"index",null,t))
return this.a[(C.b.a0(this.b,b)&this.a.length-1)>>>0]},
W:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.f_(this,"{","}")},
cD:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.dh());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
U:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bV();++this.d},
bV:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bq(s,0,q,t,r)
C.a.bq(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc_(s)},
dD:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc_(H.B(t,[b]))},
sc_:function(a){this.a=a},
$asd:null}
P.iu.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(new P.Y(t))
s=this.d
if(s===this.b){this.sac(null)
return!1}this.sac(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sac:function(a){this.e=a}}
P.h1.prototype={
K:function(a,b){var t
for(t=J.by(b);t.p();)this.j(0,t.gq())},
l:function(a){return P.f_(this,"{","}")},
$isd:1,
$asd:null}
P.h0.prototype={}
P.bV.prototype={$isd:1,$asd:null,$isc:1,$asc:null}
P.ir.prototype={
h:function(a,b){var t,s
t=this.b
if(t==null){H.b(!0)
return this.c.h(0,b)}else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.e8(b):s}},
gk:function(a){var t
if(this.b==null){H.b(!0)
t=this.c
t=t.gk(t)}else t=this.aO().length
return t},
i:function(a,b,c){var t,s
if(this.b==null){H.b(!0)
this.c.i(0,b,c)}else if(this.D(0,b)){t=this.b
t[b]=c
s=this.a
if(s==null?t!=null:s!==t)s[b]=null}else this.en().i(0,b,c)},
D:function(a,b){if(this.b==null){H.b(!0)
return this.c.D(0,b)}if(typeof b!=="string")return!1
return Object.prototype.hasOwnProperty.call(this.a,b)},
a5:function(a,b){var t,s,r,q
if(this.b==null){H.b(!0)
return this.c.a5(0,b)}t=this.aO()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.iW(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.e(new P.Y(this))}},
l:function(a){return P.kO(this)},
aO:function(){H.b(this.b!=null)
var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
en:function(){var t,s,r,q,p
if(this.b==null){H.b(!0)
return this.c}t=P.jN(P.t,null)
s=this.aO()
for(r=0;q=s.length,r<q;++r){p=s[r]
t.i(0,p,this.h(0,p))}if(q===0)C.a.j(s,null)
else C.a.sk(s,0)
this.b=null
this.a=null
this.c=t
H.b(!0)
return t},
e8:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.iW(this.a[a])
return this.b[a]=t}}
P.cp.prototype={}
P.cq.prototype={}
P.f4.prototype={
eL:function(a,b){var t=P.nA(a,this.geM().a)
return t},
eK:function(a){return this.eL(a,null)},
geM:function(){return C.L},
$ascp:function(){return[P.m,P.t]}}
P.f5.prototype={
$ascq:function(){return[P.t,P.m]}}
P.az.prototype={}
P.J.prototype={}
P.be.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.be))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aW(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.mE(H.n8(this))
s=P.cr(H.n6(this))
r=P.cr(H.n2(this))
q=P.cr(H.n3(this))
p=P.cr(H.n5(this))
o=P.cr(H.n7(this))
n=P.mF(H.n4(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
gfb:function(){return this.a},
du:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.cm("DateTime is outside valid range: "+this.gfb()))},
$isJ:1,
$asJ:function(){return[P.be]}}
P.Q.prototype={$isJ:1,
$asJ:function(){return[P.X]}}
P.aR.prototype={
as:function(a,b){return C.b.as(this.a,b.ge_())},
ar:function(a,b){return C.b.ar(this.a,b.ge_())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aR))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.ek()
s=this.a
if(s<0)return"-"+new P.aR(0-s).l(0)
r=t.$1(C.b.C(s,6e7)%60)
q=t.$1(C.b.C(s,1e6)%60)
p=new P.ej().$1(s%1e6)
return""+C.b.C(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isJ:1,
$asJ:function(){return[P.aR]}}
P.ej.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.t,args:[P.p]}}}
P.ek.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.t,args:[P.p]}}}
P.bf.prototype={}
P.cn.prototype={
l:function(a){return"Assertion failed"}}
P.bm.prototype={
l:function(a){return"Throw of null."}}
P.ai.prototype={
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaQ()+s+r
if(!this.a)return q
p=this.gaP()
o=P.jG(this.b)
return q+p+": "+H.f(o)}}
P.dB.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eW.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){H.b(this.a)
if(J.lK(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.w.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.c3.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.am.prototype={
l:function(a){return"Bad state: "+this.a}}
P.Y.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jG(t))+"."}}
P.dE.prototype={
l:function(a){return"Stack Overflow"},
$isbf:1}
P.eb.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.i7.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.eN.prototype={
l:function(a){var t,s
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
return s}}
P.em.prototype={
l:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.kn(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jR(b,"expando$values")
return s==null?null:H.jR(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jR(b,"expando$values")
if(s==null){s=new P.m()
H.kS(b,"expando$values",s)}H.kS(s,t,c)}}}
P.p.prototype={$isJ:1,
$asJ:function(){return[P.X]}}
P.Z.prototype={
aE:function(a,b){return new H.dL(this,b,[H.ag(this,"Z",0)])},
gk:function(a){var t,s
H.b(!this.$isd)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga1:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.dh())
s=t.gq()
if(t.p())throw H.e(H.mZ())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mw("index"))
if(b<0)H.G(P.aZ(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.D(b,this,"index",null,s))},
l:function(a){return P.mX(this,"(",")")}}
P.di.prototype={}
P.c.prototype={$isd:1,$asd:null,$asc:null}
P.aD.prototype={}
P.aF.prototype={
gu:function(a){return P.m.prototype.gu.call(this,this)},
l:function(a){return"null"}}
P.X.prototype={$isJ:1,
$asJ:function(){return[P.X]}}
P.m.prototype={constructor:P.m,$ism:1,
v:function(a,b){return this===b},
gu:function(a){return H.aY(this)},
l:function(a){return H.fP(this)},
gA:function(a){return new H.aG(H.j8(this),null)},
toString:function(){return this.l(this)}}
P.bY.prototype={}
P.t.prototype={$isJ:1,
$asJ:function(){return[P.t]}}
P.c_.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga3:function(){return this.a}}
W.l.prototype={}
W.e0.prototype={
l:function(a){return String(a)},
$isa:1}
W.e1.prototype={
l:function(a){return String(a)},
$isa:1}
W.a3.prototype={$ism:1}
W.e4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a3]},
$isd:1,
$asd:function(){return[W.a3]},
$isr:1,
$asr:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.co.prototype={}
W.aN.prototype={$isa:1,$isaN:1}
W.aO.prototype={
d_:function(a,b,c){var t=this.e2(a,b,P.nN(c,null))
return t},
e2:function(a,b,c){return a.getContext(b,c)},
$isaO:1}
W.e6.prototype={
aF:function(a){return P.j3(a.getContextAttributes())}}
W.aP.prototype={$isa:1,
gk:function(a){return a.length}}
W.e9.prototype={$isa:1}
W.z.prototype={$ism:1}
W.bd.prototype={
bL:function(a,b){var t,s
t=$.$get$ky()
s=t[b]
if(typeof s==="string")return s
s=this.ej(a,b)
t[b]=s
return s},
ej:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mG()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.ea.prototype={}
W.ec.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.ed.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cs.prototype={}
W.aQ.prototype={
ep:function(a,b){return a.adoptNode(b)},
d0:function(a,b){return a.getElementById(b)},
fe:function(a,b){return a.querySelector(b)},
$isaQ:1}
W.ct.prototype={$isa:1}
W.ef.prototype={
l:function(a){return String(a)}}
W.cu.prototype={
eI:function(a,b){return a.createHTMLDocument(b)}}
W.eg.prototype={
gaD:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cv.prototype={
gaD:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cw.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga_(a))+" x "+H.f(this.gZ(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isM)return!1
return a.left===t.gb8(b)&&a.top===t.gbg(b)&&this.ga_(a)===t.ga_(b)&&this.gZ(a)===t.gZ(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga_(a)
q=this.gZ(a)
return W.le(W.b6(W.b6(W.b6(W.b6(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gZ:function(a){return a.height},
gb8:function(a){return a.left},
gbg:function(a){return a.top},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isM:1,
$asM:function(){}}
W.eh.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.t]},
$isd:1,
$asd:function(){return[P.t]},
$isr:1,
$asr:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
W.ei.prototype={
gk:function(a){return a.length}}
W.a4.prototype={
ges:function(a){return new W.i0(a)},
l:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kG
if(t==null){t=H.B([],[W.dw])
s=new W.dx(t)
C.a.j(t,W.lc(null))
C.a.j(t,W.lf())
$.kG=s
d=s}else d=t
t=$.kF
if(t==null){t=new W.dR(d)
$.kF=t
c=t}else{t.a=d
c=t}}if($.aB==null){t=document
s=t.implementation
s=(s&&C.A).eI(s,"")
$.aB=s
$.jF=s.createRange()
s=$.aB
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aB.head;(t&&C.B).R(t,r)}t=$.aB
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.k4(s,"$isaN")}t=$.aB
if(!!this.$isaN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aB.body;(t&&C.h).R(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.N,a.tagName)){t=$.jF;(t&&C.x).d2(t,q)
t=$.jF
p=(t&&C.x).eG(t,b)}else{q.innerHTML=b
p=$.aB.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.R(p,s)}t=$.aB.body
if(q==null?t!=null:q!==t)J.mi(q)
c.bo(p)
C.j.ep(document,p)
return p},
eH:function(a,b,c){return this.N(a,b,c,null)},
de:function(a,b,c,d){a.textContent=null
this.R(a,this.N(a,b,c,d))},
dd:function(a,b){return this.de(a,b,null,null)},
a7:function(a,b){return a.getAttribute(b)},
ea:function(a,b){return a.removeAttribute(b)},
da:function(a,b,c){return a.setAttribute(b,c)},
$isa:1,
$ism:1,
$isa4:1,
$ish:1,
$isv:1,
gfl:function(a){return a.tagName}}
W.j_.prototype={
$1:function(a){return!!J.u(a).$isa4},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={$ism:1,$isj:1}
W.h.prototype={
dU:function(a,b,c,d){return a.addEventListener(b,H.aJ(c,1),!1)},
ec:function(a,b,c,d){return a.removeEventListener(b,H.aJ(c,1),!1)},
$ism:1,
$ish:1}
W.a5.prototype={$ism:1}
W.eH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a5]},
$isd:1,
$asd:function(){return[W.a5]},
$isr:1,
$asr:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.eI.prototype={
gk:function(a){return a.length}}
W.eM.prototype={
gk:function(a){return a.length}}
W.a6.prototype={$ism:1}
W.cA.prototype={}
W.eS.prototype={
gk:function(a){return a.length}}
W.bI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$isr:1,
$asr:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.cB.prototype={}
W.cC.prototype={
fz:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
fc:function(a,b,c){return a.open(b,c)},
G:function(a,b){return a.send(b)}}
W.bJ.prototype={}
W.bg.prototype={$isbg:1}
W.bh.prototype={$isbh:1}
W.bi.prototype={$isbi:1}
W.eX.prototype={$isa:1,$isa4:1}
W.aW.prototype={$ism:1,$isj:1,$isaW:1}
W.fe.prototype={
l:function(a){return String(a)}}
W.bM.prototype={}
W.fk.prototype={
gk:function(a){return a.length}}
W.fl.prototype={
fw:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bN.prototype={}
W.a7.prototype={$ism:1}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a7]},
$isd:1,
$asd:function(){return[W.a7]},
$isr:1,
$asr:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.R.prototype={$ism:1,$isj:1,$isR:1}
W.fw.prototype={$isa:1}
W.V.prototype={
ga1:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.am("No elements"))
if(s>1)throw H.e(new P.am("More than one element"))
return t.firstChild},
K:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.R(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lO(t,c,C.v.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.cz(t,t.length,-1,null,[H.ag(t,"A",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asd:function(){return[W.v]},
$asdl:function(){return[W.v]},
$asc:function(){return[W.v]},
$asbV:function(){return[W.v]}}
W.v.prototype={
ff:function(a){var t=a.parentNode
if(t!=null)J.bx(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.di(a):t},
R:function(a,b){return a.appendChild(b)},
eb:function(a,b){return a.removeChild(b)},
ed:function(a,b,c){return a.replaceChild(b,c)},
$ism:1,
$ish:1,
$isv:1,
gbb:function(a){return a.previousSibling}}
W.dv.prototype={
bc:function(a){return a.previousNode()}}
W.bU.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$isr:1,
$asr:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.fF.prototype={$isa:1}
W.fI.prototype={
gk:function(a){return a.length}}
W.a8.prototype={$ism:1,
gk:function(a){return a.length}}
W.fK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a8]},
$isd:1,
$asd:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.fN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fO.prototype={
G:function(a,b){return a.send(b)}}
W.dA.prototype={
eG:function(a,b){return a.createContextualFragment(b)},
d2:function(a,b){return a.selectNodeContents(b)}}
W.fY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.dC.prototype={
G:function(a,b){return a.send(b)}}
W.h_.prototype={
gk:function(a){return a.length}}
W.h2.prototype={$isa:1}
W.a9.prototype={$ism:1,$ish:1}
W.h3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a9]},
$isd:1,
$asd:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.aa.prototype={$ism:1}
W.h5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.aa]},
$isd:1,
$asd:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.ab.prototype={$ism:1,
gk:function(a){return a.length}}
W.ha.prototype={
h:function(a,b){return this.bU(a,b)},
i:function(a,b,c){this.ei(a,b,c)},
a5:function(a,b){var t,s
for(t=0;!0;++t){s=this.e5(a,t)
if(s==null)return
b.$2(s,this.bU(a,s))}},
gk:function(a){return a.length},
bU:function(a,b){return a.getItem(b)},
e5:function(a,b){return a.key(b)},
ei:function(a,b,c){return a.setItem(b,c)}}
W.a_.prototype={$ism:1}
W.an.prototype={}
W.dF.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=W.mH("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.V(s).K(0,new W.V(t))
return s}}
W.hj.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.N(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga1(t)
r.toString
t=new W.V(r)
q=t.ga1(t)
s.toString
q.toString
new W.V(s).K(0,new W.V(q))
return s}}
W.hk.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.N(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga1(t)
s.toString
r.toString
new W.V(s).K(0,new W.V(r))
return s}}
W.c0.prototype={$isc0:1}
W.ac.prototype={$ism:1,$ish:1}
W.a0.prototype={$ism:1,$ish:1}
W.hn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a0]},
$isd:1,
$asd:function(){return[W.a0]},
$isr:1,
$asr:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.ho.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ac]},
$isd:1,
$asd:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.hq.prototype={
gk:function(a){return a.length}}
W.ad.prototype={$ism:1}
W.b_.prototype={$ism:1,$isj:1,$isb_:1}
W.hu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ad]},
$isd:1,
$asd:function(){return[W.ad]},
$isr:1,
$asr:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.hv.prototype={
gk:function(a){return a.length}}
W.bp.prototype={}
W.hx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.dJ.prototype={
bc:function(a){return a.previousNode()}}
W.aH.prototype={}
W.hC.prototype={
l:function(a){return String(a)},
$isa:1}
W.bq.prototype={$isbq:1}
W.hE.prototype={
gk:function(a){return a.length}}
W.hH.prototype={
gk:function(a){return a.length}}
W.hI.prototype={
G:function(a,b){return a.send(b)}}
W.b1.prototype={
geN:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.w("deltaY is not supported"))},
$ism:1,
$isj:1,
$isR:1,
$isb1:1}
W.c4.prototype={
ger:function(a){var t,s
t=P.X
s=new P.I(0,$.x,null,[t])
this.e1(a)
this.ee(a,W.lj(new W.hK(new P.iN(s,[t]))))
return s},
ee:function(a,b){return a.requestAnimationFrame(H.aJ(b,1))},
e1:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hK.prototype={
$1:function(a){this.a.ah(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hL.prototype={$isa:1}
W.b2.prototype={$isa:1}
W.hW.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isM)return!1
s=a.left
r=t.gb8(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbg(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga_(b)
if(s==null?r==null:s===r){s=a.height
t=t.gZ(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ar(a.left)
s=J.ar(a.top)
r=J.ar(a.width)
q=J.ar(a.height)
return W.le(W.b6(W.b6(W.b6(W.b6(0,t),s),r),q))},
$isM:1,
$asM:function(){},
gZ:function(a){return a.height},
gb8:function(a){return a.left},
gbg:function(a){return a.top},
ga_:function(a){return a.width}}
W.dN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.M]},
$isd:1,
$asd:function(){return[P.M]},
$isr:1,
$asr:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]}}
W.hY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.z]},
$isd:1,
$asd:function(){return[W.z]},
$isr:1,
$asr:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]}}
W.hZ.prototype={$isa:1}
W.i_.prototype={
gZ:function(a){return a.height},
ga_:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.im.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a6]},
$isd:1,
$asd:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.io.prototype={$isa:1}
W.dP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.v]},
$isd:1,
$asd:function(){return[W.v]},
$isr:1,
$asr:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.iH.prototype={$isa:1}
W.iK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ab]},
$isd:1,
$asd:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.iL.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a_]},
$isd:1,
$asd:function(){return[W.a_]},
$isr:1,
$asr:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.iS.prototype={$isa:1}
W.iT.prototype={$isa:1}
W.hU.prototype={
a5:function(a,b){var t,s,r,q,p,o
for(t=this.gF(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.C)(t),++p){o=t[p]
b.$2(o,q.a7(r,o))}},
gF:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.t])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.j(s,p.name)}return s},
ge3:function(){return this.a}}
W.i0.prototype={
h:function(a,b){return J.jC(this.a,b)},
i:function(a,b,c){J.mk(this.a,b,c)},
gk:function(a){return this.gF(this).length}}
W.i4.prototype={
cv:function(a,b,c,d){return W.af(this.a,this.b,a,!1,H.aA(this,0))}}
W.i1.prototype={}
W.i5.prototype={
ey:function(a){if(this.b==null)return
this.em()
this.b=null
this.se7(null)
return},
el:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lM(r,this.c,t,!1)}},
em:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lN(r,this.c,t,!1)}},
dP:function(a,b,c,d,e){this.el()},
se7:function(a){this.d=a}}
W.i6.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c8.prototype={
a4:function(a){return $.$get$ld().B(0,W.bB(a))},
V:function(a,b,c){var t,s,r
t=W.bB(a)
s=$.$get$jX()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dQ:function(a){var t,s
t=$.$get$jX()
if(t.gam(t)){for(s=0;s<262;++s)t.i(0,C.M[s],W.nV())
for(s=0;s<12;++s)t.i(0,C.m[s],W.nW())}}}
W.A.prototype={
gw:function(a){return new W.cz(a,this.gk(a),-1,null,[H.ag(a,"A",0)])},
$isd:1,
$asd:null,
$isc:1,
$asc:null}
W.dx.prototype={
a4:function(a){return C.a.c4(this.a,new W.fy(a))},
V:function(a,b,c){return C.a.c4(this.a,new W.fx(a,b,c))}}
W.fy.prototype={
$1:function(a){return a.a4(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fx.prototype={
$1:function(a){return a.V(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.cb.prototype={
a4:function(a){return this.a.B(0,W.bB(a))},
V:function(a,b,c){var t,s
t=W.bB(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.eq(c)
else if(s.B(0,"*::"+b))return this.d.eq(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dS:function(a,b,c,d){var t,s,r
this.a.K(0,c)
t=b.aE(0,new W.iI())
s=b.aE(0,new W.iJ())
this.b.K(0,t)
r=this.c
r.K(0,C.u)
r.K(0,s)}}
W.iI.prototype={
$1:function(a){return!C.a.B(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iJ.prototype={
$1:function(a){return C.a.B(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iO.prototype={
V:function(a,b,c){if(this.dl(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jC(a,"template")==="")return this.e.B(0,b)
return!1}}
W.iP.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iM.prototype={
a4:function(a){var t=J.u(a)
if(!!t.$isbX)return!1
t=!!t.$isH
if(t&&W.bB(a)==="foreignObject")return!1
if(t)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.f.bs(b,"on"))return!1
return this.a4(a)}}
W.cz.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbW(J.b9(this.a,t))
this.c=t
return!0}this.sbW(null)
this.c=s
return!1},
gq:function(){return this.d},
sbW:function(a){this.d=a}}
W.dw.prototype={}
W.iG.prototype={}
W.dR.prototype={
bo:function(a){new W.iQ(this).$2(a,null)},
ay:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bx(t,a)}else J.bx(b,a)},
eh:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.m6(a)
r=J.jC(s.ge3(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.ah(a)}catch(n){H.O(n)}try{o=W.bB(a)
this.eg(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.ai)throw n
else{this.ay(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
eg:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ay(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a4(a)){this.ay(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.ah(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.ay(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gF(f)
s=H.B(t.slice(0),[H.aA(t,0)])
for(r=f.gF(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.V(a,J.mo(p),q.a7(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a7(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a7(t,p)
q.ea(t,p)}}if(!!J.u(a).$isc0)this.bo(a.content)}}
W.iQ.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.eh(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bx(r,a)}else J.bx(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.m7(t)}catch(q){H.O(q)
r=t
J.bx(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.v,W.v]}}}
W.bC.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.bD.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.bE.prototype={$isd:1,
$asd:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.bF.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]}}
W.bG.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]}}
W.bH.prototype={$isd:1,
$asd:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]}}
W.cD.prototype={}
W.cX.prototype={$isd:1,
$asd:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]}}
W.cJ.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.cQ.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.cR.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.cS.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.cT.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
W.cU.prototype={$isd:1,
$asd:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.cV.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.cW.prototype={$isd:1,
$asd:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.cH.prototype={$isd:1,
$asd:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]}}
W.cI.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.cK.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.cM.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.cN.prototype={$isd:1,
$asd:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.cO.prototype={$isd:1,
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
W.cY.prototype={$isd:1,
$asd:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]}}
W.cZ.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.d9.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.da.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]}}
W.d8.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]}}
W.dd.prototype={$isd:1,
$asd:function(){return[P.M]},
$isc:1,
$asc:function(){return[P.M]}}
W.de.prototype={$isd:1,
$asd:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]}}
W.df.prototype={$isd:1,
$asd:function(){return[W.v]},
$isc:1,
$asc:function(){return[W.v]}}
W.dg.prototype={$isd:1,
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
W.d0.prototype={$isd:1,
$asd:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]}}
W.d2.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]}}
W.d4.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]}}
W.d6.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]}}
W.db.prototype={$isd:1,
$asd:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]}}
W.dc.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]}}
P.hM.prototype={
ct:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.j(t,a)
C.a.j(this.b,null)
return s},
bh:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.be(s,!0)
r.du(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.c3("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.nO(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.ct(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.K()
t.a=o
r[p]=o
this.eY(a,new P.hO(t,this))
return t.a}if(a instanceof Array){p=this.ct(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.F(a)
m=n.gk(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.b8(o),l=0;C.b.as(l,m);++l)r.i(o,l,this.bh(n.h(a,l)))
return o}return a}}
P.hO.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bh(b)
J.lL(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.j0.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.t,,]}}}
P.hN.prototype={
eY:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.j1.prototype={
$1:function(a){return this.a.ah(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.j2.prototype={
$1:function(a){return this.a.eB(a)},
$S:function(){return{func:1,args:[,]}}}
P.iy.prototype={}
P.M.prototype={$asM:null}
P.e_.prototype={$isa:1}
P.aM.prototype={$isa:1}
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
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
P.eB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eJ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aj.prototype={}
P.aC.prototype={$isa:1}
P.eU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$ism:1}
P.f6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.fh.prototype={$isa:1}
P.fi.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$ism:1}
P.fz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.fG.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fM.prototype={
gk:function(a){return a.length}}
P.fR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bX.prototype={$isa:1,$isbX:1}
P.hg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
P.H.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.dw])
C.a.j(t,W.lc(null))
C.a.j(t,W.lf())
C.a.j(t,new W.iM())
c=new W.dR(new W.dx(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.h).eH(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.V(q)
o=t.ga1(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.R(p,r)
return p},
$isa:1,
$isH:1}
P.hh.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hi.prototype={$isa:1}
P.dG.prototype={}
P.hm.prototype={$isa:1}
P.c1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$ism:1}
P.hw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.hD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hF.prototype={$isa:1}
P.hG.prototype={$isa:1}
P.c7.prototype={$isa:1}
P.iD.prototype={$isa:1}
P.iE.prototype={$isa:1}
P.iF.prototype={$isa:1}
P.cG.prototype={$isd:1,
$asd:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.cE.prototype={$isd:1,
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
P.cL.prototype={$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.cP.prototype={$isd:1,
$asd:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.d_.prototype={$isd:1,
$asd:function(){return[P.at]},
$isc:1,
$asc:function(){return[P.at]}}
P.d7.prototype={$isd:1,
$asd:function(){return[P.au]},
$isc:1,
$asc:function(){return[P.au]}}
P.d3.prototype={$isd:1,
$asd:function(){return[P.av]},
$isc:1,
$asc:function(){return[P.av]}}
P.d5.prototype={$isd:1,
$asd:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]}}
P.e3.prototype={
gk:function(a){return a.length}}
P.fW.prototype={
c2:function(a,b){return a.activeTexture(b)},
c5:function(a,b,c){return a.attachShader(b,c)},
c6:function(a,b,c){return a.bindBuffer(b,c)},
c7:function(a,b,c){return a.bindFramebuffer(b,c)},
c8:function(a,b,c){return a.bindTexture(b,c)},
c9:function(a,b){return a.blendEquation(b)},
ca:function(a,b,c){return a.blendFunc(b,c)},
cb:function(a,b,c,d){return a.bufferData(b,c,d)},
cc:function(a,b){return a.clear(b)},
cd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ce:function(a,b){return a.compileShader(b)},
cf:function(a){return a.createBuffer()},
cg:function(a){return a.createProgram()},
ci:function(a,b){return a.createShader(b)},
cj:function(a){return a.createTexture()},
cl:function(a,b){return a.depthMask(b)},
cm:function(a,b){return a.disable(b)},
cn:function(a,b,c,d){return a.drawArrays(b,c,d)},
co:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cp:function(a,b){return a.enable(b)},
cq:function(a,b){return a.enableVertexAttribArray(b)},
aF:function(a){return P.j3(a.getContextAttributes())},
bi:function(a){return a.getError()},
bj:function(a,b){return a.getProgramInfoLog(b)},
bk:function(a,b,c){return a.getProgramParameter(b,c)},
bl:function(a,b){return a.getShaderInfoLog(b)},
bm:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cu:function(a,b){return a.linkProgram(b)},
cC:function(a,b,c){return a.pixelStorei(b,c)},
br:function(a,b,c){return a.shaderSource(b,c)},
bt:function(a,b,c,d){return a.stencilFunc(b,c,d)},
be:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.u(g)
if(!!t.$isbh||g==null)s=!0
else s=!1
if(s){this.aY(a,b,c,d,e,f,P.ls(g))
return}if(!!t.$isbi)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,g)
return}if(!!t.$isaO)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isbq)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isbg)t=!0
else t=!1
if(t){this.b1(a,b,c,d,e,f,g)
return}throw H.e(P.cm("Incorrect number or type of arguments"))},
cG:function(a,b,c,d,e,f,g){return this.be(a,b,c,d,e,f,g,null,null,null)},
aY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cH:function(a,b,c,d){return a.texParameterf(b,c,d)},
cI:function(a,b,c,d){return a.texParameteri(b,c,d)},
cJ:function(a,b,c){return a.uniform1f(b,c)},
cK:function(a,b,c){return a.uniform1fv(b,c)},
cL:function(a,b,c){return a.uniform1i(b,c)},
cM:function(a,b,c){return a.uniform1iv(b,c)},
cN:function(a,b,c){return a.uniform2fv(b,c)},
cO:function(a,b,c){return a.uniform3fv(b,c)},
cP:function(a,b,c){return a.uniform4fv(b,c)},
cQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cT:function(a,b){return a.useProgram(b)},
cV:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cW:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fX.prototype={
eu:function(a,b){return a.beginTransformFeedback(b)},
ex:function(a,b){return a.bindVertexArray(b)},
eJ:function(a){return a.createVertexArray()},
eT:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eU:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eV:function(a){return a.endTransformFeedback()},
fs:function(a,b,c,d){this.ek(a,b,c,d)
return},
ek:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
ft:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c2:function(a,b){return a.activeTexture(b)},
c5:function(a,b,c){return a.attachShader(b,c)},
c6:function(a,b,c){return a.bindBuffer(b,c)},
c7:function(a,b,c){return a.bindFramebuffer(b,c)},
c8:function(a,b,c){return a.bindTexture(b,c)},
c9:function(a,b){return a.blendEquation(b)},
ca:function(a,b,c){return a.blendFunc(b,c)},
cb:function(a,b,c,d){return a.bufferData(b,c,d)},
cc:function(a,b){return a.clear(b)},
cd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
ce:function(a,b){return a.compileShader(b)},
cf:function(a){return a.createBuffer()},
cg:function(a){return a.createProgram()},
ci:function(a,b){return a.createShader(b)},
cj:function(a){return a.createTexture()},
cl:function(a,b){return a.depthMask(b)},
cm:function(a,b){return a.disable(b)},
cn:function(a,b,c,d){return a.drawArrays(b,c,d)},
co:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cp:function(a,b){return a.enable(b)},
cq:function(a,b){return a.enableVertexAttribArray(b)},
aF:function(a){return P.j3(a.getContextAttributes())},
bi:function(a){return a.getError()},
bj:function(a,b){return a.getProgramInfoLog(b)},
bk:function(a,b,c){return a.getProgramParameter(b,c)},
bl:function(a,b){return a.getShaderInfoLog(b)},
bm:function(a,b,c){return a.getShaderParameter(b,c)},
bn:function(a,b,c){return a.getUniformLocation(b,c)},
cu:function(a,b){return a.linkProgram(b)},
cC:function(a,b,c){return a.pixelStorei(b,c)},
br:function(a,b,c){return a.shaderSource(b,c)},
bt:function(a,b,c,d){return a.stencilFunc(b,c,d)},
be:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.u(g)
if(!!t.$isbh||g==null)s=!0
else s=!1
if(s){this.aY(a,b,c,d,e,f,P.ls(g))
return}if(!!t.$isbi)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,g)
return}if(!!t.$isaO)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isbq)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isbg)t=!0
else t=!1
if(t){this.b1(a,b,c,d,e,f,g)
return}throw H.e(P.cm("Incorrect number or type of arguments"))},
cG:function(a,b,c,d,e,f,g){return this.be(a,b,c,d,e,f,g,null,null,null)},
aY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cH:function(a,b,c,d){return a.texParameterf(b,c,d)},
cI:function(a,b,c,d){return a.texParameteri(b,c,d)},
cJ:function(a,b,c){return a.uniform1f(b,c)},
cK:function(a,b,c){return a.uniform1fv(b,c)},
cL:function(a,b,c){return a.uniform1i(b,c)},
cM:function(a,b,c){return a.uniform1iv(b,c)},
cN:function(a,b,c){return a.uniform2fv(b,c)},
cO:function(a,b,c){return a.uniform3fv(b,c)},
cP:function(a,b,c){return a.uniform4fv(b,c)},
cQ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cR:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cT:function(a,b){return a.useProgram(b)},
cV:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cW:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iR.prototype={$isa:1}
P.h6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return P.j3(this.e4(a,b))},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
e4:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.aD]},
$isc:1,
$asc:function(){return[P.aD]}}
P.cF.prototype={$isd:1,
$asd:function(){return[P.aD]},
$isc:1,
$asc:function(){return[P.aD]}}
P.d1.prototype={$isd:1,
$asd:function(){return[P.aD]},
$isc:1,
$asc:function(){return[P.aD]}}
B.jp.prototype={
$1:function(a){$.$get$j4().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aW]}}}
B.jq.prototype={
$1:function(a){$.$get$j4().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aW]}}}
B.jr.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nK=t
$.nL=C.b.a9(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.k7=s-C.b.C(window.innerWidth,2)
$.lC=-(t-C.b.C(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.R]}}}
B.js.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.ci=t-C.b.C(window.innerWidth,2)
$.cj=-(s-C.b.C(window.innerHeight,2))
if(a.button===2)$.$get$ch().i(0,"right",!0)
else $.$get$ch().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.R]}}}
B.jt.prototype={
$1:function(a){if(a.button===2)$.$get$ch().i(0,"right",null)
else $.$get$ch().i(0,"left",null)},
$S:function(){return{func:1,args:[W.R]}}}
B.fA.prototype={
dF:function(a,b,c,d){var t
d.toString
W.af(d,W.nU().$1(d),new B.fB(this),!1,W.b1)
W.af(d,"mousemove",new B.fC(this),!1,W.R)
t=W.b_
W.af(d,"touchstart",new B.fD(),!1,t)
W.af(d,"touchmove",new B.fE(this),!1,t)
B.o9(null)}}
B.fB.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a5.geN(a)*r.k3
if(C.c.a9(r.fy,t)>0)r.fy=H.a1(C.c.a9(r.fy,t))}catch(q){s=H.O(q)
P.T(s)}},
$S:function(){return{func:1,args:[W.b1]}}}
B.fC.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a1(t.go+C.b.a9($.k7,$.ci)*0.01)
s=t.id
r=$.cj
q=$.lC
t.id=H.a1(s+(r-q)*0.01)
$.ci=$.k7
$.cj=q}},
$S:function(){return{func:1,args:[W.R]}}}
B.fD.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a6(t.clientX)
C.c.a6(t.clientY)
$.ci=s
C.c.a6(t.clientX)
$.cj=C.c.a6(t.clientY)},
$S:function(){return{func:1,args:[W.b_]}}}
B.fE.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a6(t.clientX)
t=C.c.a6(t.clientY)
r=this.a
r.go=H.a1(r.go+C.b.a9(s,$.ci)*0.01)
r.id=H.a1(r.id+($.cj-t)*0.01)
$.ci=s
$.cj=t},
$S:function(){return{func:1,args:[W.b_]}}}
G.fn.prototype={}
G.dK.prototype={
P:function(a,b){var t=this.d
if(H.aI(!t.D(0,a)))H.b7("uniform "+a+" already set")
t.i(0,a,b)},
aJ:function(){return this.d},
l:function(a){var t,s,r,q
t=H.B(["{"+new H.aG(H.j8(this),null).l(0)+"}["+this.a+"]"],[P.t])
for(s=this.d,r=s.gF(s),r=r.gw(r);r.p();){q=r.gq()
C.a.j(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.an(t,"\n")}}
G.e5.prototype={}
G.e8.prototype={
cr:function(a,b,c){J.m3(this.a,b)
if(c>0)J.mu(this.a,b,c)}}
G.eO.prototype={}
G.eF.prototype={}
G.eG.prototype={}
G.eR.prototype={
au:function(a){var t=this.e
H.b(!t.D(0,a))
H.b(C.f.bs(a,"a"))
switch($.$get$W().h(0,a).a){case"vec2":t.i(0,a,H.B([],[T.ay]))
break
case"vec3":t.i(0,a,H.B([],[T.n]))
break
case"vec4":t.i(0,a,H.B([],[T.ae]))
break
case"float":t.i(0,a,H.B([],[P.Q]))
break
case"uvec4":t.i(0,a,H.B([],[[P.c,P.p]]))
break
default:if(H.aI(!1))H.b7("unknown type for "+a)}},
dr:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.j(this.b,new G.eF(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
p.toString
o=new T.n(new Float32Array(3))
o.E(p)
C.a.j(t,o)}},
dn:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.ay(o))}},
dq:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new T.n(new Float32Array(3))
o.E(p)
r.j(t,o)}},
bx:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
p.toString
o=new T.ae(new Float32Array(4))
o.E(p)
r.j(t,o)}},
ds:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.j(this.c,new G.eG(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
p.toString
o=new T.n(new Float32Array(3))
o.E(p)
C.a.j(t,o)}},
dA:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.B(r,[P.p])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.C)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.C)(s),++o){l=s[o]
n=l.a
q[p]=n
q[p+1]=l.b
k=l.c
q[p+2]=k
q[p+3]=n
q[p+4]=k
q[p+5]=l.d
p+=6}H.b(p===q.length)
return q},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gF(s),r=r.gw(r);r.p();){q=r.gq()
p=$.$get$W().h(0,q).a
C.a.j(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.an(t," ")}}
G.f7.prototype={}
G.ee.prototype={
l:function(a){return"DL: p:"+J.ah(this.x)}}
G.eT.prototype={
aJ:function(){var t,s,r
t=this.y
s=this.z
G.mP(t,s,this.x)
r=this.d
r.i(0,"uLightDescs",t)
r.i(0,"uLightTypes",s)
return r}}
G.dI.prototype={}
G.dH.prototype={}
G.fj.prototype={
dE:function(a){this.P("cDepthTest",!0)
this.P("cDepthWrite",!0)
this.P("cBlendEquation",$.$get$ko())
this.P("cStencilFunc",$.$get$kU())}}
G.dp.prototype={
bA:function(a,b,c){var t,s
if(C.f.aM(a,0)===105){if(H.aI(C.b.aa(b.length,c)===this.z))H.b7("ChangeAttribute "+this.z)}else H.b(C.b.aa(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dX(t.a,34962,s)
J.kc(t.a,34962,b,35048)},
bB:function(a){this.ch=a
this.bA("aPosition",a,3)},
dB:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ab:function(a,b,c){var t,s,r,q,p,o
t=J.k9(a,0)===105
if(t&&this.z===0)this.z=C.b.aa(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.dZ(r.a))
this.bA(a,b,c)
q=$.$get$W().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aI(p.D(0,a)))H.b7("unexpected attribute "+a)
o=p.h(0,a)
J.dY(r.a,this.e)
r.cr(0,o,t?1:0)
s=s.h(0,a)
p=q.bC()
J.dX(r.a,34962,s)
J.km(r.a,o,p,5126,!1,0,0)},
bz:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.dZ(s.a))
this.bB(a)
r=$.$get$W().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.b(q.D(0,"aPosition"))
p=q.h(0,"aPosition")
J.dY(s.a,this.e)
s.cr(0,p,0)
t=t.h(0,"aPosition")
q=r.bC()
J.dX(s.a,34962,t)
J.km(s.a,p,q,5126,!1,0,0)},
aI:function(a){var t,s,r,q
H.b(this.ch!=null)
t=this.ch.length
if(t<768){this.saR(new Uint8Array(H.iX(a)))
this.Q=5121}else if(t<196608){this.saR(new Uint16Array(H.iX(a)))
this.Q=5123}else{this.saR(new Uint32Array(H.iX(a)))
this.Q=5125}t=this.d
J.dY(t.a,this.e)
s=this.y
r=this.cx
t.toString
q=J.u(r)
H.b(!!q.$isl6||!!q.$isl7||!!q.$isl8)
J.dX(t.a,34963,s)
J.kc(t.a,34963,r,35048)},
l:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gF(t),t=t.gw(t);t.p();){r=t.gq()
C.a.j(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.an(s,"  ")},
saR:function(a){this.cx=a}}
G.fH.prototype={
dt:function(a,b){var t=C.b.cY(a,b)
if(this.z===t)return
this.z=t
this.bE()},
bE:function(){var t,s,r,q,p,o,n
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
t.a8(0,0,1/(p*s))
t.a8(1,1,1/p)
t.a8(2,2,(q+r)/o)
t.a8(3,2,-1)
t.a8(2,3,2*r*q/o)},
aJ:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.n(new Float32Array(H.q(3)))
o.at(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.E(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isae
k=r?s.gaD(n):1
if(!!s.$isn){j=s.gm(n)
m=s.gn(n)
l=s.gL(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gL(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.I(t[0],n)
r=C.c.I(t[4],m)
q=C.c.I(t[8],l)
i=t[12]
h=C.c.I(t[1],n)
g=C.c.I(t[5],m)
f=C.c.I(t[9],l)
e=t[13]
d=C.c.I(t[2],n)
c=C.c.I(t[6],m)
b=C.c.I(t[10],l)
a=t[14]
a0=C.c.I(t[3],n)
a1=C.c.I(t[7],m)
a2=C.c.I(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.E(this.db)
a3.cB(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fV.prototype={
dK:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gF(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.D(0,q))C.a.j(r,q)}for(t=this.x,s=new P.c9(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.j(r,q)}return r},
dN:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gF(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.k9(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.dV("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$W().h(0,n)
if(l==null)H.G("unknown "+n)
H.b(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jD(r.a,k,m)
else if(!!J.u(m).$iskJ)J.ms(r.a,k,m)
break
case"float":if(l.c===0)J.mq(r.a,k,m)
else if(!!J.u(m).$iseK)J.mr(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aK(m,"$isL").a
J.kl(r.a,k,!1,j)}else if(!!J.u(m).$iseK)J.kl(r.a,k,!1,m)
else if(H.aI(!1))H.b7("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aK(m,"$isaE").a
J.kk(r.a,k,!1,j)}else if(!!J.u(m).$iseK)J.kk(r.a,k,!1,m)
else if(H.aI(!1))H.b7("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aK(m,"$isae").a
J.kj(r.a,k,j)}else J.kj(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aK(m,"$isn").a
J.ki(r.a,k,j)}else J.ki(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aK(m,"$isay").a
J.kh(r.a,k,j)}else J.kh(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a0(33984,this.ch)
J.ka(r.a,j)
j=H.aK(m,"$isc2").b
J.ck(r.a,3553,j)
j=this.ch
J.jD(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
j=C.b.a0(33984,this.ch)
J.ka(r.a,j)
j=H.aK(m,"$isc2").b
J.ck(r.a,34067,j)
j=this.ch
J.jD(r.a,k,j)
this.ch=this.ch+1
break
default:H.dV("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.E(m,!0))J.cl(r.a,2929)
else J.jz(r.a,2929)
break
case"cStencilFunc":H.aK(m,"$isdI")
j=m.a
if(j===1281)J.jz(r.a,2960)
else{J.cl(r.a,2960)
i=m.b
h=m.c
J.ml(r.a,j,i,h)}break
case"cDepthWrite":J.lY(r.a,m)
break
case"cBlendEquation":H.aK(m,"$isdH")
j=m.a
if(j===1281)J.jz(r.a,3042)
else{J.cl(r.a,3042)
i=m.b
h=m.c
J.lS(r.a,i,h)
J.lR(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aR(1000*(s-new P.be(t,!1).a)).l(0)},
dz:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.mt(t.a,s)
this.ch=0
this.z.W(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r){q=b[r]
this.dN(q.a,q.aJ())}s=this.Q
s.W(0)
for(p=a.cy,p=p.gF(p),p=p.gw(p);p.p();)s.j(0,p.gq())
o=this.dK()
if(o.length!==0)P.T("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
s=a.d
p=a.e
J.dY(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dB()
m=a.Q
l=a.z
t.toString
if(n)J.lP(t.a,p)
if(m!==-1)if(l>1)J.m1(t.a,p,s,m,0,l)
else J.m0(t.a,p,s,m,0)
else if(l>1)J.m_(t.a,p,0,s,l)
else J.lZ(t.a,p,0,s)
if(n)J.m4(t.a)},
dG:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lW(t.a)
m=G.la(t.a,35633,r)
J.kb(t.a,n,m)
l=G.la(t.a,35632,p)
J.kb(t.a,n,l)
if(o.length>0)J.mp(t.a,n,o,35980)
J.mf(t.a,n)
if(!J.me(t.a,n,35714))H.G(J.md(t.a,n))
this.r=n
this.sdV(0,P.jO(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.C)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.kf(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.C)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.kf(t.a,q,j))}},
sdV:function(a,b){this.x=b}}
G.i.prototype={
bC:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.bo.prototype={
bw:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.C)(a),++q){p=a[q]
H.b($.$get$W().D(0,p))
H.b(!C.a.B(s,p))
C.a.j(s,p)
r.i(0,p,this.r);++this.r}C.a.aG(s)},
a2:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
if(H.aI($.$get$W().D(0,q)))H.b7("missing uniform "+q)
H.b(!C.a.B(s,q))
C.a.j(s,q)}C.a.aG(s)},
by:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<3;++s){r=a[s]
H.b($.$get$W().D(0,r))
H.b(!C.a.B(t,r))
C.a.j(t,r)}C.a.aG(t)},
bD:function(a,b){H.b(this.b==null)
this.b=this.dO(!0,a,b)},
aK:function(a){return this.bD(a,null)},
dO:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=$.$get$W().h(0,n)
C.a.j(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.j(q,"")
l=r?"in":"out"
if(r)C.a.j(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}C.a.j(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.j(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.j(q,"")
if(c!=null)C.a.K(q,c)
C.a.j(q,"void main(void) {")
C.a.K(q,b)
C.a.j(q,"}")
return C.a.an(q,"\n")}}
G.h4.prototype={
f8:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a0=new T.n(new Float32Array(H.q(3)))
a0.at(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(H.q(3))
n=new T.n(o)
n.E(p)
n.bu(a)
n.ba(0)
m=a0.ck(n)
m.ba(0)
l=n.ck(m)
l.ba(0)
k=m.b6(p)
j=l.b6(p)
p=n.b6(p)
i=m.a
h=i[0]
g=l.a
f=g[0]
e=o[0]
d=i[1]
c=g[1]
b=o[1]
i=i[2]
g=g[2]
o=o[2]
t[15]=1
t[14]=-p
t[13]=-j
t[12]=-k
t[11]=0
t[10]=o
t[9]=g
t[8]=i
t[7]=0
t[6]=b
t[5]=c
t[4]=d
t[3]=0
t[2]=e
t[1]=f
t[0]=h
t[12]=s
t[13]=r
t[14]=q},
cw:function(a){return this.f8(a,null)}}
G.hp.prototype={
dC:function(a,b){var t=this.e
if(t!==1)J.mn(a.a,b,34046,t)
J.kg(a.a,b,10240,this.r)
J.kg(a.a,b,10241,this.f)}}
G.c2.prototype={
l:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eV.prototype={
dH:function(a){var t,s
t=this.d
s=this.c
J.ck(t.a,s,this.b)
J.mm(t.a,s,0,6408,6408,5121,a)}}
R.h8.prototype={
dR:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nl("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.o).bL(r,"float")
r.setProperty(p,"left","")
p=C.o.bL(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.i.R(t,s)}return t},
dI:function(a,b,c){var t,s,r
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
J.jx(this.a,s)
r=this.dR(b,c,90,30)
this.d=r
J.jx(this.a,r)
t=t.createElement("div")
this.c=t
J.jx(this.a,t)}}
R.h9.prototype={
dM:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.k.fq(s,2)+" fps"
t=this.c;(t&&C.i).dd(t,b)
r=C.b.C(30*C.k.ez(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.i).R(t,q)},
dL:function(a){return this.dM(a,"")}}
A.bT.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bW.prototype={}
A.fU.prototype={
dw:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lQ(p.a,36160,t)
H.b(r>0&&q>0)
J.mv(p.a,this.x,this.y,r,q)
if(s!==0)J.lT(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=n.e
C.a.j(m,new G.dK(P.K(),"transforms",!1,!0))
l=new T.L(new Float32Array(16))
l.M()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.C)(r),++k)A.lu(p,r[k],l,a,m)
m.pop()}},
dv:function(){return this.dw(null)}}
D.fd.prototype={
$1:function(a){this.a.ah(0,C.K.eK(W.nw(this.b.response)))},
$S:function(){return{func:1,args:[,]}}}
D.fc.prototype={
$1:function(a){return this.a.ah(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.j9.prototype={
$2:function(a,b){var t=536870911&a+J.ar(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.m]}}}
T.aE.prototype={
E:function(a){var t,s
t=a.a
s=this.a
s[8]=t[8]
s[7]=t[7]
s[6]=t[6]
s[5]=t[5]
s[4]=t[4]
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){return"[0] "+this.T(0).l(0)+"\n[1] "+this.T(1).l(0)+"\n[2] "+this.T(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.e.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aE){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dT(this.a)},
T:function(a){var t,s
t=new Float32Array(H.q(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.n(t)},
eF:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=a.a
s=t[0]
r=t[4]
q=t[8]
p=t[5]
o=t[7]
n=r*q-p*o
m=t[1]
l=t[3]
k=l*q
j=t[6]
i=p*j
t=t[2]
h=l*o-r*j
g=s*n-m*(k-i)+t*h
if(g===0){this.E(a)
return 0}f=1/g
e=this.a
e[0]=f*n
e[1]=f*(t*o-m*q)
e[2]=f*(m*p-t*r)
e[3]=f*(i-k)
e[4]=f*(s*q-t*j)
e[5]=f*(t*l-s*p)
e[6]=f*h
e[7]=f*(m*j-s*o)
e[8]=f*(s*r-m*l)
return g}}
T.L.prototype={
a8:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
E:function(a){var t,s
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
l:function(a){return"[0] "+this.T(0).l(0)+"\n[1] "+this.T(1).l(0)+"\n[2] "+this.T(2).l(0)+"\n[3] "+this.T(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.e.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.L){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dT(this.a)},
T:function(a){var t,s
t=new Float32Array(H.q(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ae(t)},
M:function(){var t=this.a
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
cB:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.ay.prototype={
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ay){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dT(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.e.i(this.a,b,c)},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.n.prototype={
at:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
E:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.n){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dT(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.e.i(this.a,b,c)},
gk:function(a){return Math.sqrt(this.gb9())},
gb9:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
ba:function(a){var t,s,r
t=Math.sqrt(this.gb9())
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
ck:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.n(new Float32Array(H.q(3)))
t.at(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
j:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
bu:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
bp:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gL:function(a){return this.a[2]}}
T.ae.prototype={
E:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ae){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dT(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.e.i(this.a,b,c)},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gL:function(a){return this.a[2]},
gaD:function(a){return this.a[3]}}
L.jm.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.T("size change "+H.f(s)+" "+H.f(r))
this.b.dt(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
L.jk.prototype={
$1:function(a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.a.a=a7+0
t=this.c
t.go=H.a1(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.a1(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.a1(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.a1(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.a1(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.a1(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.a1(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.a1(C.c.eA(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
o=Math.cos(q)
s=Math.sin(s)
q=Math.sin(q)
n=t.d.a
n[12]=p*o
n[13]=r*s
n[14]=p*q
q=t.k2
s=q.a
n[12]=n[12]+s[0]
n[13]=n[13]+s[1]
n[14]=n[14]+s[2]
t.cw(q)
q=t.f
s=q.a
s[0]=n[2]
s[1]=n[6]
s[2]=n[10]
t=-t.k1
q=Math.sqrt(q.gb9())
m=s[0]/q
l=s[1]/q
k=s[2]/q
q=Math.cos(t)
t=Math.sin(t)
j=1-q
i=m*m*j+q
s=k*t
h=m*l*j-s
r=l*t
g=m*k*j+r
f=l*m*j+s
e=l*l*j+q
t=m*t
d=l*k*j-t
c=k*m*j-r
b=k*l*j+t
a=k*k*j+q
q=n[0]
t=n[4]
r=n[8]
s=n[1]
o=n[5]
a0=n[9]
a1=n[2]
a2=n[6]
a3=n[10]
a4=n[3]
a5=n[7]
a6=n[11]
n[0]=q*i+t*f+r*c
n[1]=s*i+o*f+a0*c
n[2]=a1*i+a2*f+a3*c
n[3]=a4*i+a5*f+a6*c
n[4]=q*h+t*e+r*b
n[5]=s*h+o*e+a0*b
n[6]=a1*h+a2*e+a3*b
n[7]=a4*h+a5*e+a6*b
n[8]=q*g+t*d+r*a
n[9]=s*g+o*d+a0*a
n[10]=a1*g+a2*d+a3*a
n[11]=a4*g+a5*d+a6*a
this.d.dv()
C.a6.ger(window).aC(this)
this.b.dL(a7)},
$S:function(){return{func:1,v:true,args:[P.X]}}}
L.jl.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
t=this.a
s=J.F(a)
r=s.h(a,1)
q=new G.hp(!1,!1,!1,!0,1,9729,9729)
p=J.lX(t.a)
o=new G.eV(r,"../asset/leeperrysmith/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg",p,3553,t,q)
J.ck(t.a,3553,p)
J.mh(t.a,37440,1)
o.dH(r)
q.dC(t,3553)
H.b(J.mc(t.a)===0)
J.ck(t.a,3553,null)
t=this.d
t.P("uBumpMap",o)
t.P("uBumpScale",12)
n=Y.mQ(s.h(a,0))
P.T(n[0])
s=this.b
r=s.d
q=n[0]
p=r.d
m=new G.dp(p,J.kd(p.a),4,P.K(),r.e.x,null,0,-1,null,null,P.K(),"meshdata:../asset/leeperrysmith/LeePerrySmith.js",!1,!0)
m.bz(G.jH(q.d,null))
r=q.dA()
m.y=J.dZ(p.a)
m.aI(r)
G.no(q,m)
r=new Float32Array(H.q(9))
q=new T.L(new Float32Array(H.q(16)))
q.M()
p=new T.L(new Float32Array(H.q(16)))
p.M()
l=new Float32Array(H.q(3))
k=new Float32Array(H.q(3))
j=new Float32Array(H.q(3))
i=new Float32Array(H.q(3))
h=[]
g=new Float32Array(H.q(9))
f=new T.L(new Float32Array(H.q(16)))
f.M()
e=new T.L(new Float32Array(H.q(16)))
e.M()
d=new A.bT(null,null,h,new T.aE(g),f,e,new T.n(new Float32Array(H.q(3))),new T.n(new Float32Array(H.q(3))),new T.n(new Float32Array(H.q(3))),new T.n(new Float32Array(H.q(3))),"wrapper",!1,!0)
C.a.j(h,new A.bT(t,m,[],new T.aE(r),q,p,new T.n(l),new T.n(k),new T.n(j),new T.n(i),"meshdata:../asset/leeperrysmith/LeePerrySmith.js",!1,!0))
t=new T.n(new Float32Array(H.q(3)))
t.at(100,0,0)
d.cw(t)
H.b(!0)
C.a.j(s.f,d)
this.c.$1(0)},
$S:function(){return{func:1,args:[P.c]}}}
J.a.prototype.di=J.a.prototype.l
J.bK.prototype.dk=J.bK.prototype.l
P.Z.prototype.dj=P.Z.prototype.aE
W.a4.prototype.aH=W.a4.prototype.N
W.cb.prototype.dl=W.cb.prototype.V;(function installTearOffs(){installTearOff(H.b4.prototype,"gf7",0,0,0,null,["$0"],["aA"],0)
installTearOff(H.ao.prototype,"gd3",0,0,0,null,["$1"],["J"],2)
installTearOff(H.b3.prototype,"geP",0,0,0,null,["$1"],["X"],2)
installTearOff(P,"nG",1,0,0,null,["$1"],["ni"],1)
installTearOff(P,"nH",1,0,0,null,["$1"],["nj"],1)
installTearOff(P,"nI",1,0,0,null,["$1"],["nk"],1)
installTearOff(P,"ln",1,0,0,null,["$0"],["nE"],0)
installTearOff(P.I.prototype,"gbQ",0,0,0,null,["$2","$1"],["H","dY"],5)
installTearOff(P,"nP",1,0,0,null,["$2"],["mC"],6)
installTearOff(W,"nU",1,0,0,null,["$1"],["mI"],7)
installTearOff(W,"nV",1,0,0,null,["$4"],["np"],4)
installTearOff(W,"nW",1,0,0,null,["$4"],["nq"],4)
installTearOff(W.dv.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(W.dJ.prototype,"gbb",0,1,0,null,["$0"],["bc"],3)
installTearOff(L,"lo",1,0,0,null,["$0"],["o3"],0)})();(function inheritance(){inherit(P.m,null)
var t=P.m
inherit(H.jK,t)
inherit(J.a,t)
inherit(J.e2,t)
inherit(P.Z,t)
inherit(H.dm,t)
inherit(P.di,t)
inherit(H.cy,t)
inherit(H.bc,t)
inherit(H.iw,t)
inherit(H.b4,t)
inherit(H.i2,t)
inherit(H.b5,t)
inherit(H.iv,t)
inherit(H.hV,t)
inherit(H.bn,t)
inherit(H.hr,t)
inherit(H.as,t)
inherit(H.ao,t)
inherit(H.b3,t)
inherit(H.fT,t)
inherit(H.hy,t)
inherit(P.bf,t)
inherit(H.dQ,t)
inherit(H.aG,t)
inherit(H.ak,t)
inherit(H.f8,t)
inherit(H.fa,t)
inherit(P.hX,t)
inherit(P.c6,t)
inherit(P.I,t)
inherit(P.dM,t)
inherit(P.bZ,t)
inherit(P.hb,t)
inherit(P.bb,t)
inherit(P.iU,t)
inherit(P.h1,t)
inherit(P.it,t)
inherit(P.c9,t)
inherit(P.bV,t)
inherit(P.y,t)
inherit(P.iu,t)
inherit(P.ir,t)
inherit(P.cp,t)
inherit(P.cq,t)
inherit(P.az,t)
inherit(P.J,t)
inherit(P.be,t)
inherit(P.X,t)
inherit(P.aR,t)
inherit(P.dE,t)
inherit(P.i7,t)
inherit(P.eN,t)
inherit(P.em,t)
inherit(P.c,t)
inherit(P.aD,t)
inherit(P.aF,t)
inherit(P.bY,t)
inherit(P.t,t)
inherit(P.c_,t)
inherit(W.ea,t)
inherit(W.hU,t)
inherit(W.c8,t)
inherit(W.A,t)
inherit(W.dx,t)
inherit(W.cb,t)
inherit(W.iM,t)
inherit(W.cz,t)
inherit(W.dw,t)
inherit(W.iG,t)
inherit(W.dR,t)
inherit(P.hM,t)
inherit(P.iy,t)
inherit(G.fn,t)
inherit(G.e8,t)
inherit(G.eO,t)
inherit(G.eF,t)
inherit(G.eG,t)
inherit(G.eR,t)
inherit(G.dI,t)
inherit(G.dH,t)
inherit(G.i,t)
inherit(G.bo,t)
inherit(G.hp,t)
inherit(G.c2,t)
inherit(R.h8,t)
inherit(T.aE,t)
inherit(T.L,t)
inherit(T.ay,t)
inherit(T.n,t)
inherit(T.ae,t)
t=J.a
inherit(J.f0,t)
inherit(J.f1,t)
inherit(J.bK,t)
inherit(J.aT,t)
inherit(J.bj,t)
inherit(J.aU,t)
inherit(H.bO,t)
inherit(H.bl,t)
inherit(W.h,t)
inherit(W.a3,t)
inherit(W.co,t)
inherit(W.e6,t)
inherit(W.z,t)
inherit(W.cD,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.ef,t)
inherit(W.cu,t)
inherit(W.cv,t)
inherit(W.cw,t)
inherit(W.cO,t)
inherit(W.ei,t)
inherit(W.j,t)
inherit(W.cN,t)
inherit(W.a6,t)
inherit(W.eS,t)
inherit(W.cR,t)
inherit(W.bg,t)
inherit(W.bh,t)
inherit(W.fe,t)
inherit(W.fk,t)
inherit(W.a7,t)
inherit(W.cM,t)
inherit(W.fw,t)
inherit(W.dv,t)
inherit(W.cQ,t)
inherit(W.fF,t)
inherit(W.bp,t)
inherit(W.a8,t)
inherit(W.cK,t)
inherit(W.an,t)
inherit(W.dA,t)
inherit(W.aa,t)
inherit(W.cJ,t)
inherit(W.ab,t)
inherit(W.ha,t)
inherit(W.a_,t)
inherit(W.cI,t)
inherit(W.hq,t)
inherit(W.ad,t)
inherit(W.cT,t)
inherit(W.hv,t)
inherit(W.dJ,t)
inherit(W.hC,t)
inherit(W.hH,t)
inherit(W.hW,t)
inherit(W.cH,t)
inherit(W.cX,t)
inherit(W.cW,t)
inherit(W.cS,t)
inherit(W.cV,t)
inherit(W.cU,t)
inherit(W.iS,t)
inherit(W.iT,t)
inherit(P.at,t)
inherit(P.cG,t)
inherit(P.au,t)
inherit(P.cL,t)
inherit(P.fL,t)
inherit(P.fM,t)
inherit(P.fR,t)
inherit(P.cE,t)
inherit(P.av,t)
inherit(P.cP,t)
inherit(P.hG,t)
inherit(P.e3,t)
inherit(P.fW,t)
inherit(P.fX,t)
inherit(P.iR,t)
inherit(P.cF,t)
t=J.bK
inherit(J.fJ,t)
inherit(J.b0,t)
inherit(J.aV,t)
inherit(J.jJ,J.aT)
t=J.bj
inherit(J.dk,t)
inherit(J.dj,t)
t=P.Z
inherit(H.d,t)
inherit(H.dn,t)
inherit(H.dL,t)
t=H.d
inherit(H.bk,t)
inherit(H.f9,t)
inherit(H.el,H.dn)
t=P.di
inherit(H.ff,t)
inherit(H.hJ,t)
t=H.bk
inherit(H.bL,t)
inherit(P.fb,t)
t=H.bc
inherit(H.ju,t)
inherit(H.jv,t)
inherit(H.iq,t)
inherit(H.i3,t)
inherit(H.eY,t)
inherit(H.eZ,t)
inherit(H.ix,t)
inherit(H.hs,t)
inherit(H.ht,t)
inherit(H.jw,t)
inherit(H.je,t)
inherit(H.jf,t)
inherit(H.jg,t)
inherit(H.jh,t)
inherit(H.ji,t)
inherit(H.hl,t)
inherit(H.f2,t)
inherit(H.ja,t)
inherit(H.jb,t)
inherit(H.jc,t)
inherit(P.hR,t)
inherit(P.hQ,t)
inherit(P.hS,t)
inherit(P.hT,t)
inherit(P.eQ,t)
inherit(P.eP,t)
inherit(P.i8,t)
inherit(P.ih,t)
inherit(P.ic,t)
inherit(P.id,t)
inherit(P.ie,t)
inherit(P.ia,t)
inherit(P.ig,t)
inherit(P.i9,t)
inherit(P.ik,t)
inherit(P.il,t)
inherit(P.ij,t)
inherit(P.ii,t)
inherit(P.he,t)
inherit(P.hf,t)
inherit(P.hc,t)
inherit(P.hd,t)
inherit(P.iV,t)
inherit(P.iZ,t)
inherit(P.iB,t)
inherit(P.iA,t)
inherit(P.iC,t)
inherit(P.fg,t)
inherit(P.ej,t)
inherit(P.ek,t)
inherit(W.j_,t)
inherit(W.hK,t)
inherit(W.i6,t)
inherit(W.fy,t)
inherit(W.fx,t)
inherit(W.iI,t)
inherit(W.iJ,t)
inherit(W.iP,t)
inherit(W.iQ,t)
inherit(P.hO,t)
inherit(P.j0,t)
inherit(P.j1,t)
inherit(P.j2,t)
inherit(B.jp,t)
inherit(B.jq,t)
inherit(B.jr,t)
inherit(B.js,t)
inherit(B.jt,t)
inherit(B.fB,t)
inherit(B.fC,t)
inherit(B.fD,t)
inherit(B.fE,t)
inherit(D.fd,t)
inherit(D.fc,t)
inherit(A.j9,t)
inherit(L.jm,t)
inherit(L.jk,t)
inherit(L.jl,t)
t=H.hV
inherit(H.bs,t)
inherit(H.cc,t)
t=P.bf
inherit(H.dy,t)
inherit(H.f3,t)
inherit(H.hB,t)
inherit(H.hA,t)
inherit(H.e7,t)
inherit(H.fZ,t)
inherit(P.cn,t)
inherit(P.bm,t)
inherit(P.ai,t)
inherit(P.w,t)
inherit(P.c3,t)
inherit(P.am,t)
inherit(P.Y,t)
inherit(P.eb,t)
t=H.hl
inherit(H.h7,t)
inherit(H.bA,t)
inherit(H.hP,P.cn)
t=H.bl
inherit(H.fo,t)
inherit(H.dr,t)
t=H.dr
inherit(H.bQ,t)
inherit(H.bP,t)
inherit(H.bR,H.bQ)
inherit(H.ds,H.bR)
inherit(H.bS,H.bP)
inherit(H.dt,H.bS)
t=H.ds
inherit(H.dq,t)
inherit(H.fp,t)
t=H.dt
inherit(H.fq,t)
inherit(H.fr,t)
inherit(H.fs,t)
inherit(H.ft,t)
inherit(H.fu,t)
inherit(H.du,t)
inherit(H.fv,t)
t=P.hX
inherit(P.c5,t)
inherit(P.iN,t)
inherit(P.iz,P.iU)
inherit(P.dO,H.ak)
inherit(P.h0,P.h1)
inherit(P.ip,P.h0)
inherit(P.is,P.ip)
inherit(P.dl,P.bV)
inherit(P.f4,P.cp)
inherit(P.f5,P.cq)
t=P.X
inherit(P.Q,t)
inherit(P.p,t)
t=P.ai
inherit(P.dB,t)
inherit(P.eW,t)
t=W.h
inherit(W.v,t)
inherit(W.bE,t)
inherit(W.e9,t)
inherit(W.eI,t)
inherit(W.bJ,t)
inherit(W.bN,t)
inherit(W.fO,t)
inherit(W.dC,t)
inherit(W.h2,t)
inherit(W.a9,t)
inherit(W.bD,t)
inherit(W.ac,t)
inherit(W.a0,t)
inherit(W.bC,t)
inherit(W.hE,t)
inherit(W.hI,t)
inherit(W.c4,t)
inherit(W.hL,t)
inherit(W.b2,t)
inherit(W.iH,t)
t=W.v
inherit(W.a4,t)
inherit(W.aP,t)
inherit(W.aQ,t)
inherit(W.ct,t)
inherit(W.hZ,t)
t=W.a4
inherit(W.l,t)
inherit(P.H,t)
t=W.l
inherit(W.e0,t)
inherit(W.e1,t)
inherit(W.aN,t)
inherit(W.aO,t)
inherit(W.cs,t)
inherit(W.eM,t)
inherit(W.cA,t)
inherit(W.bi,t)
inherit(W.eX,t)
inherit(W.bM,t)
inherit(W.h_,t)
inherit(W.dF,t)
inherit(W.hj,t)
inherit(W.hk,t)
inherit(W.c0,t)
inherit(W.io,t)
inherit(W.bH,W.bE)
inherit(W.e4,W.bH)
inherit(W.bd,W.cD)
inherit(W.eg,W.cv)
inherit(W.dg,W.cO)
inherit(W.eh,W.dg)
inherit(W.a5,W.co)
inherit(W.de,W.cN)
inherit(W.eH,W.de)
inherit(W.df,W.cR)
inherit(W.bI,W.df)
inherit(W.cB,W.aQ)
inherit(W.cC,W.bJ)
inherit(W.aH,W.j)
t=W.aH
inherit(W.aW,t)
inherit(W.R,t)
inherit(W.b_,t)
inherit(W.fl,W.bN)
inherit(W.d8,W.cM)
inherit(W.fm,W.d8)
inherit(W.V,P.dl)
inherit(W.d9,W.cQ)
inherit(W.bU,W.d9)
t=W.bp
inherit(W.fI,t)
inherit(W.fY,t)
inherit(W.hx,t)
inherit(W.da,W.cK)
inherit(W.fK,W.da)
inherit(W.fN,W.an)
inherit(W.bG,W.bD)
inherit(W.h3,W.bG)
inherit(W.d6,W.cJ)
inherit(W.h5,W.d6)
inherit(W.d2,W.cI)
inherit(W.hn,W.d2)
inherit(W.bF,W.bC)
inherit(W.ho,W.bF)
inherit(W.dc,W.cT)
inherit(W.hu,W.dc)
inherit(W.bq,W.bM)
inherit(W.b1,W.R)
inherit(W.dd,W.cH)
inherit(W.dN,W.dd)
inherit(W.db,W.cX)
inherit(W.hY,W.db)
inherit(W.i_,W.cw)
inherit(W.cY,W.cW)
inherit(W.im,W.cY)
inherit(W.cZ,W.cS)
inherit(W.dP,W.cZ)
inherit(W.d4,W.cV)
inherit(W.iK,W.d4)
inherit(W.d0,W.cU)
inherit(W.iL,W.d0)
inherit(W.i0,W.hU)
inherit(W.i4,P.bZ)
inherit(W.i1,W.i4)
inherit(W.i5,P.hb)
inherit(W.iO,W.cb)
inherit(P.hN,P.hM)
inherit(P.M,P.iy)
t=P.H
inherit(P.aC,t)
inherit(P.aM,t)
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
inherit(P.ey,t)
inherit(P.ez,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.eC,t)
inherit(P.eD,t)
inherit(P.eE,t)
inherit(P.eJ,t)
inherit(P.fh,t)
inherit(P.fi,t)
inherit(P.fG,t)
inherit(P.bX,t)
inherit(P.hi,t)
inherit(P.hF,t)
inherit(P.c7,t)
inherit(P.iD,t)
inherit(P.iE,t)
inherit(P.iF,t)
t=P.aC
inherit(P.e_,t)
inherit(P.eL,t)
inherit(P.aj,t)
inherit(P.eU,t)
inherit(P.hh,t)
inherit(P.dG,t)
inherit(P.hD,t)
inherit(P.d_,P.cG)
inherit(P.f6,P.d_)
inherit(P.d7,P.cL)
inherit(P.fz,P.d7)
inherit(P.fS,P.aj)
inherit(P.d5,P.cE)
inherit(P.hg,P.d5)
t=P.dG
inherit(P.hm,t)
inherit(P.c1,t)
inherit(P.d3,P.cP)
inherit(P.hw,P.d3)
inherit(P.d1,P.cF)
inherit(P.h6,P.d1)
t=G.fn
inherit(G.h4,t)
inherit(G.dK,t)
inherit(G.f7,t)
inherit(G.dp,t)
inherit(G.fV,t)
inherit(A.bW,t)
inherit(A.fU,t)
t=G.h4
inherit(G.e5,t)
inherit(A.bT,t)
inherit(B.fA,G.e5)
inherit(G.ee,G.f7)
t=G.dK
inherit(G.eT,t)
inherit(G.fj,t)
inherit(G.fH,t)
inherit(G.eV,G.c2)
inherit(R.h9,R.h8)
mixin(H.bP,P.y)
mixin(H.bQ,P.y)
mixin(H.bR,H.cy)
mixin(H.bS,H.cy)
mixin(P.bV,P.y)
mixin(W.bC,P.y)
mixin(W.bD,P.y)
mixin(W.bE,P.y)
mixin(W.bF,W.A)
mixin(W.bG,W.A)
mixin(W.bH,W.A)
mixin(W.cD,W.ea)
mixin(W.cX,P.y)
mixin(W.cJ,P.y)
mixin(W.cQ,P.y)
mixin(W.cR,P.y)
mixin(W.cS,P.y)
mixin(W.cT,P.y)
mixin(W.cU,P.y)
mixin(W.cV,P.y)
mixin(W.cW,P.y)
mixin(W.cH,P.y)
mixin(W.cI,P.y)
mixin(W.cK,P.y)
mixin(W.cM,P.y)
mixin(W.cN,P.y)
mixin(W.cO,P.y)
mixin(W.cY,W.A)
mixin(W.cZ,W.A)
mixin(W.d9,W.A)
mixin(W.da,W.A)
mixin(W.d8,W.A)
mixin(W.dd,W.A)
mixin(W.de,W.A)
mixin(W.df,W.A)
mixin(W.dg,W.A)
mixin(W.d0,W.A)
mixin(W.d2,W.A)
mixin(W.d4,W.A)
mixin(W.d6,W.A)
mixin(W.db,W.A)
mixin(W.dc,W.A)
mixin(P.cG,P.y)
mixin(P.cE,P.y)
mixin(P.cL,P.y)
mixin(P.cP,P.y)
mixin(P.d_,W.A)
mixin(P.d7,W.A)
mixin(P.d3,W.A)
mixin(P.d5,W.A)
mixin(P.cF,P.y)
mixin(P.d1,W.A)})();(function constants(){C.h=W.aN.prototype
C.z=W.aO.prototype
C.o=W.bd.prototype
C.i=W.cs.prototype
C.A=W.cu.prototype
C.B=W.cA.prototype
C.j=W.cB.prototype
C.q=W.cC.prototype
C.C=J.a.prototype
C.a=J.aT.prototype
C.k=J.dj.prototype
C.b=J.dk.prototype
C.c=J.bj.prototype
C.f=J.aU.prototype
C.J=J.aV.prototype
C.e=H.dq.prototype
C.v=W.bU.prototype
C.w=J.fJ.prototype
C.x=W.dA.prototype
C.y=W.dF.prototype
C.n=J.b0.prototype
C.a5=W.b1.prototype
C.a6=W.c4.prototype
C.d=new P.iz()
C.p=new P.aR(0)
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
C.r=function(hooks) { return hooks; }

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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=new P.f4(null,null)
C.L=new P.f5(null)
C.M=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.t])
C.N=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.u=makeConstList([])
C.l=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.t])
C.m=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.t])
C.O=H.N("od")
C.P=H.N("oe")
C.Q=H.N("eK")
C.R=H.N("of")
C.S=H.N("og")
C.T=H.N("kJ")
C.U=H.N("oh")
C.V=H.N("kM")
C.W=H.N("aF")
C.X=H.N("t")
C.Y=H.N("l6")
C.Z=H.N("l7")
C.a_=H.N("oj")
C.a0=H.N("l8")
C.a1=H.N("az")
C.a2=H.N("Q")
C.a3=H.N("p")
C.a4=H.N("X")})();(function staticFields(){$.kQ="$cachedFunction"
$.kR="$cachedInvocation"
$.ks=null
$.kq=null
$.jY=!1
$.k2=null
$.lk=null
$.lE=null
$.j5=null
$.jd=null
$.k3=null
$.bt=null
$.cd=null
$.ce=null
$.jZ=!1
$.x=C.d
$.kH=0
$.aB=null
$.jF=null
$.kG=null
$.kF=null
$.kD=null
$.kC=null
$.kB=null
$.kA=null
$.nK=0
$.nL=0
$.k7=0
$.lC=0
$.ci=0
$.cj=0
$.oa=!1
$.lx=0})();(function lazyInitializers(){lazy($,"kz","$get$kz",function(){return H.lz("_$dart_dartClosure")})
lazy($,"jL","$get$jL",function(){return H.lz("_$dart_js")})
lazy($,"kK","$get$kK",function(){return H.mV()})
lazy($,"kL","$get$kL",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kH
$.kH=t+1
t="expando$key$"+t}return new P.em(null,t,[P.p])})
lazy($,"kW","$get$kW",function(){return H.aw(H.hz({
toString:function(){return"$receiver$"}}))})
lazy($,"kX","$get$kX",function(){return H.aw(H.hz({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kY","$get$kY",function(){return H.aw(H.hz(null))})
lazy($,"kZ","$get$kZ",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l2","$get$l2",function(){return H.aw(H.hz(void 0))})
lazy($,"l3","$get$l3",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l0","$get$l0",function(){return H.aw(H.l1(null))})
lazy($,"l_","$get$l_",function(){return H.aw(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"l5","$get$l5",function(){return H.aw(H.l1(void 0))})
lazy($,"l4","$get$l4",function(){return H.aw(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jW","$get$jW",function(){return P.nh()})
lazy($,"kI","$get$kI",function(){return P.nn(null,P.aF)})
lazy($,"cf","$get$cf",function(){return[]})
lazy($,"ky","$get$ky",function(){return{}})
lazy($,"ld","$get$ld",function(){return P.jO(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jX","$get$jX",function(){return P.K()})
lazy($,"j4","$get$j4",function(){return P.jN(P.p,P.az)})
lazy($,"ch","$get$ch",function(){return P.jN(P.t,P.az)})
lazy($,"kU","$get$kU",function(){return new G.dI(1281,0,4294967295)})
lazy($,"ko","$get$ko",function(){return new G.dH(1281,1281,1281)})
lazy($,"W","$get$W",function(){return P.aX(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kv","$get$kv",function(){return T.jU(1,1,0)})
lazy($,"lG","$get$lG",function(){var t=new G.bo("SolidColor",null,[],[],[],[],0,P.K())
t.bw(["aPosition"])
t.a2(["uPerspectiveViewMatrix","uModelMatrix"])
t.aK(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lF","$get$lF",function(){var t=new G.bo("SolidColorF",null,[],[],[],[],0,P.K())
t.a2(["uColor"])
t.aK(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lJ","$get$lJ",function(){var t=new G.bo("LightBlinnPhongFancyV",null,[],[],[],[],0,P.K())
t.bw(["aPosition","aNormal","aTexUV"])
t.by(["vPosition","vNormal","vTexUV"])
t.a2(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.aK(["vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\ngl_Position = uPerspectiveViewMatrix * pos;\nvPosition = pos.xyz;\nvTexUV = aTexUV;\nvNormal = uNormalMatrix * aNormal;\n"])
return t})
lazy($,"lw","$get$lw",function(){var t=new G.bo("LightBlinnPhongFancyF",null,[],[],[],[],0,P.K())
t.by(["vPosition","vNormal","vTexUV"])
t.a2(["uLightDescs","uLightTypes","uShininess"])
t.a2(["uEyePosition","uColor"])
t.a2(["uBumpScale","uBumpMap"])
t.bD(["vec2 uv = dHdxy_fwd(vTexUV, uBumpScale, uBumpMap);\nvec3 normal = perturbNormalArb(vPosition, vNormal, uv);\n\nColorComponents acc = CombinedLight(vPosition - uEyePosition,\n                                    normal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\noFragColor.rgb = acc.diffuse + acc.specular + uColor;\noFragColor.a = 1.0;\n\n"],["vec2 dHdxy_fwd(vec2 uv, float scale, sampler2D map) {\n    vec2 dSTdx = dFdx( uv );\n    vec2 dSTdy = dFdy( uv );\n\n    float Hll = scale * texture(map, uv ).x;\n    float dBx = scale * texture(map, uv + dSTdx ).x - Hll;\n    float dBy = scale * texture(map, uv + dSTdy ).x - Hll;\n\n    return vec2( dBx, dBy );\n}\n\nvec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {\n    surf_norm = normalize  (surf_norm);\n    vec3 vSigmaX = dFdx( surf_pos );\n    vec3 vSigmaY = dFdy( surf_pos );\n    vec3 vN = surf_norm;            // normalized\n\n    vec3 R1 = cross( vSigmaY, vN );\n    vec3 R2 = cross( vN, vSigmaX );\n\n    float fDet = dot( vSigmaX, R1 );\n\n    vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n    return normalize( abs( fDet ) * surf_norm - vGrad );\n}\n","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lq","$get$lq",function(){return T.jU(0.333,0.157,0.067)})
lazy($,"lt","$get$lt",function(){return T.jU(-1,-1,0)})
lazy($,"lp","$get$lp",function(){return T.l9(0.3)})
lazy($,"lr","$get$lr",function(){return T.l9(0.133)})})()
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
mangledGlobalNames:{p:"int",Q:"double",X:"num",t:"String",az:"bool",aF:"Null",c:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.v},{func:1,ret:P.az,args:[W.a4,P.t,P.t,W.c8]},{func:1,v:true,args:[P.m],opt:[P.bY]},{func:1,ret:P.p,args:[P.J,P.J]},{func:1,ret:P.t,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bO,ArrayBufferView:H.bl,DataView:H.fo,Float32Array:H.dq,Float64Array:H.fp,Int16Array:H.fq,Int32Array:H.fr,Int8Array:H.fs,Uint16Array:H.ft,Uint32Array:H.fu,Uint8ClampedArray:H.du,CanvasPixelArray:H.du,Uint8Array:H.fv,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.e0,HTMLAreaElement:W.e1,AudioTrack:W.a3,AudioTrackList:W.e4,Blob:W.co,HTMLBodyElement:W.aN,HTMLCanvasElement:W.aO,CanvasRenderingContext2D:W.e6,CDATASection:W.aP,CharacterData:W.aP,Comment:W.aP,ProcessingInstruction:W.aP,Text:W.aP,CompositorWorker:W.e9,CSSCharsetRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bd,MSStyleCSSProperties:W.bd,CSS2Properties:W.bd,DataTransferItemList:W.ec,DeviceAcceleration:W.ed,HTMLDivElement:W.cs,XMLDocument:W.aQ,Document:W.aQ,DocumentFragment:W.ct,ShadowRoot:W.ct,DOMException:W.ef,DOMImplementation:W.cu,DOMPoint:W.eg,DOMPointReadOnly:W.cv,DOMRectReadOnly:W.cw,DOMStringList:W.eh,DOMTokenList:W.ei,Element:W.a4,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a5,FileList:W.eH,FileWriter:W.eI,HTMLFormElement:W.eM,Gamepad:W.a6,HTMLHeadElement:W.cA,History:W.eS,HTMLCollection:W.bI,HTMLFormControlsCollection:W.bI,HTMLOptionsCollection:W.bI,HTMLDocument:W.cB,XMLHttpRequest:W.cC,XMLHttpRequestUpload:W.bJ,XMLHttpRequestEventTarget:W.bJ,ImageBitmap:W.bg,ImageData:W.bh,HTMLImageElement:W.bi,HTMLInputElement:W.eX,KeyboardEvent:W.aW,Location:W.fe,HTMLAudioElement:W.bM,HTMLMediaElement:W.bM,MediaList:W.fk,MIDIOutput:W.fl,MIDIInput:W.bN,MIDIPort:W.bN,MimeType:W.a7,MimeTypeArray:W.fm,PointerEvent:W.R,MouseEvent:W.R,DragEvent:W.R,Navigator:W.fw,Attr:W.v,Node:W.v,NodeIterator:W.dv,NodeList:W.bU,RadioNodeList:W.bU,Path2D:W.fF,Perspective:W.fI,Plugin:W.a8,PluginArray:W.fK,PositionValue:W.fN,PresentationConnection:W.fO,Range:W.dA,Rotation:W.fY,RTCDataChannel:W.dC,DataChannel:W.dC,HTMLSelectElement:W.h_,SharedWorker:W.h2,SourceBuffer:W.a9,SourceBufferList:W.h3,SpeechGrammar:W.aa,SpeechGrammarList:W.h5,SpeechRecognitionResult:W.ab,Storage:W.ha,CSSStyleSheet:W.a_,StyleSheet:W.a_,CalcLength:W.an,KeywordValue:W.an,LengthValue:W.an,NumberValue:W.an,SimpleLength:W.an,TransformValue:W.an,StyleValue:W.an,HTMLTableElement:W.dF,HTMLTableRowElement:W.hj,HTMLTableSectionElement:W.hk,HTMLTemplateElement:W.c0,TextTrack:W.ac,TextTrackCue:W.a0,VTTCue:W.a0,TextTrackCueList:W.hn,TextTrackList:W.ho,TimeRanges:W.hq,Touch:W.ad,TouchEvent:W.b_,TouchList:W.hu,TrackDefaultList:W.hv,Matrix:W.bp,Skew:W.bp,TransformComponent:W.bp,Translation:W.hx,TreeWalker:W.dJ,CompositionEvent:W.aH,FocusEvent:W.aH,TextEvent:W.aH,SVGZoomEvent:W.aH,UIEvent:W.aH,URL:W.hC,HTMLVideoElement:W.bq,VideoTrackList:W.hE,VTTRegionList:W.hH,WebSocket:W.hI,WheelEvent:W.b1,Window:W.c4,DOMWindow:W.c4,Worker:W.hL,CompositorWorkerGlobalScope:W.b2,DedicatedWorkerGlobalScope:W.b2,ServiceWorkerGlobalScope:W.b2,SharedWorkerGlobalScope:W.b2,WorkerGlobalScope:W.b2,ClientRect:W.hW,ClientRectList:W.dN,DOMRectList:W.dN,CSSRuleList:W.hY,DocumentType:W.hZ,DOMRect:W.i_,GamepadList:W.im,HTMLFrameSetElement:W.io,NamedNodeMap:W.dP,MozNamedAttrMap:W.dP,ServiceWorker:W.iH,SpeechRecognitionResultList:W.iK,StyleSheetList:W.iL,WorkerLocation:W.iS,WorkerNavigator:W.iT,SVGAElement:P.e_,SVGAnimateElement:P.aM,SVGAnimateMotionElement:P.aM,SVGAnimateTransformElement:P.aM,SVGAnimationElement:P.aM,SVGSetElement:P.aM,SVGFEBlendElement:P.en,SVGFEColorMatrixElement:P.eo,SVGFEComponentTransferElement:P.ep,SVGFECompositeElement:P.eq,SVGFEConvolveMatrixElement:P.er,SVGFEDiffuseLightingElement:P.es,SVGFEDisplacementMapElement:P.et,SVGFEFloodElement:P.eu,SVGFEGaussianBlurElement:P.ev,SVGFEImageElement:P.ew,SVGFEMergeElement:P.ex,SVGFEMorphologyElement:P.ey,SVGFEOffsetElement:P.ez,SVGFEPointLightElement:P.eA,SVGFESpecularLightingElement:P.eB,SVGFESpotLightElement:P.eC,SVGFETileElement:P.eD,SVGFETurbulenceElement:P.eE,SVGFilterElement:P.eJ,SVGForeignObjectElement:P.eL,SVGCircleElement:P.aj,SVGEllipseElement:P.aj,SVGLineElement:P.aj,SVGPathElement:P.aj,SVGPolygonElement:P.aj,SVGPolylineElement:P.aj,SVGGeometryElement:P.aj,SVGClipPathElement:P.aC,SVGDefsElement:P.aC,SVGGElement:P.aC,SVGSwitchElement:P.aC,SVGGraphicsElement:P.aC,SVGImageElement:P.eU,SVGLength:P.at,SVGLengthList:P.f6,SVGMarkerElement:P.fh,SVGMaskElement:P.fi,SVGNumber:P.au,SVGNumberList:P.fz,SVGPatternElement:P.fG,SVGPoint:P.fL,SVGPointList:P.fM,SVGRect:P.fR,SVGRectElement:P.fS,SVGScriptElement:P.bX,SVGStringList:P.hg,SVGDescElement:P.H,SVGDiscardElement:P.H,SVGFEDistantLightElement:P.H,SVGFEFuncAElement:P.H,SVGFEFuncBElement:P.H,SVGFEFuncGElement:P.H,SVGFEFuncRElement:P.H,SVGFEMergeNodeElement:P.H,SVGMetadataElement:P.H,SVGStopElement:P.H,SVGStyleElement:P.H,SVGTitleElement:P.H,SVGComponentTransferFunctionElement:P.H,SVGElement:P.H,SVGSVGElement:P.hh,SVGSymbolElement:P.hi,SVGTextContentElement:P.dG,SVGTextPathElement:P.hm,SVGTSpanElement:P.c1,SVGTextElement:P.c1,SVGTextPositioningElement:P.c1,SVGTransform:P.av,SVGTransformList:P.hw,SVGUseElement:P.hD,SVGViewElement:P.hF,SVGViewSpec:P.hG,SVGLinearGradientElement:P.c7,SVGRadialGradientElement:P.c7,SVGGradientElement:P.c7,SVGCursorElement:P.iD,SVGFEDropShadowElement:P.iE,SVGMPathElement:P.iF,AudioBuffer:P.e3,WebGLRenderingContext:P.fW,WebGL2RenderingContext:P.fX,WebGL2RenderingContextBase:P.iR,SQLResultSetRowList:P.h6})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dr.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.ds.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.dt.$nativeSuperclassTag="ArrayBufferView"
W.bE.$nativeSuperclassTag="EventTarget"
W.bH.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"
W.bG.$nativeSuperclassTag="EventTarget"
W.bC.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lH(L.lo(),b)},[])
else (function(b){H.lH(L.lo(),b)})([])})})()