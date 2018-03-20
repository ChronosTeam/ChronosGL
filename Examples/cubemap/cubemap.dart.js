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
a[c]=function(){a[c]=function(){H.nC(b)}
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
return d?function(e){if(t===null)t=H.jE(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jE(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jE(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jr:function jr(a){this.a=a},
jw:function(a,b,c,d){if(!!a.$isc)return new H.eg(a,b,[c,d])
return new H.df(a,b,[c,d])},
d8:function(){return new P.au("No element")},
ms:function(){return new P.au("Too many elements")},
mr:function(){return new P.au("Too few elements")},
dx:function(a,b,c,d){if(c-b<=32)H.mG(a,b,c,d)
else H.mF(a,b,c,d)},
mG:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a0(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ao(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mF:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.a0(a2)
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
H.dx(a2,a3,g-2,a5)
H.dx(a2,f+2,a4,a5)
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
break}}H.dx(a2,g,f,a5)}else H.dx(a2,g,f,a5)},
c:function c(){},
be:function be(){},
de:function de(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
df:function df(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b,c){this.a=a
this.b=b
this.$ti=c},
f2:function f2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bH:function bH(a,b,c){this.a=a
this.b=b
this.$ti=c},
dF:function dF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hu:function hu(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(){},
dM:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.al()
return t},
j0:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
ll:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isb)throw H.e(P.dY("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.id(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$ko()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hM(P.jv(null,H.b4),0)
r=P.o
s.seJ(new H.ag(0,null,null,null,null,null,0,[r,H.b3]))
s.seL(new H.ag(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ic()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mm,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mV)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ah(null,null,null,r)
p=new H.bg(0,null,!1)
o=new H.b3(s,new H.ag(0,null,null,null,null,null,0,[r,H.bg]),q,u.createNewIsolate(),p,new H.ar(H.j5()),new H.ar(H.j5()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
q.l(0,0)
o.bE(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bq(a,{func:1,args:[,]}))o.af(new H.jb(t,a))
else if(H.bq(a,{func:1,args:[,,]}))o.af(new H.jc(t,a))
else o.af(a)
u.globalState.f.al()},
mV:function(a){var t=P.aW(["command","print","msg",a])
return new H.al(!0,P.c5(null,P.o)).J(t)},
mo:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mp()
return},
mp:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
mm:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b2(!0,[]).V(b.data)
s=J.a0(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.np(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b2(!0,[]).V(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b2(!0,[]).V(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ah(null,null,null,k)
i=new H.bg(0,null,!1)
h=new H.b3(s,new H.ag(0,null,null,null,null,null,0,[k,H.bg]),j,u.createNewIsolate(),i,new H.ar(H.j5()),new H.ar(H.j5()),!1,!1,[],P.ah(null,null,null,null),null,null,!1,!0,P.ah(null,null,null,null))
j.l(0,0)
h.bE(0,i)
u.globalState.f.a.S(0,new H.b4(h,new H.eQ(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.al()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lR(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.al()
break
case"close":u.globalState.ch.ak(0,$.$get$kp().h(0,a))
a.terminate()
u.globalState.f.al()
break
case"log":H.ml(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aW(["command","print","msg",t])
k=new H.al(!0,P.c5(null,P.o)).J(k)
s.toString
self.postMessage(k)}else P.an(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
ml:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aW(["command","log","msg",a])
r=new H.al(!0,P.c5(null,P.o)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.N(q)
t=H.am(q)
s=P.cp(t)
throw H.e(s)}},
mn:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ku=$.ku+("_"+s)
$.kv=$.kv+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bl(s,r),q,t.r])
r=new H.eR(a,b,c,d,t)
if(e){t.bZ(q,q)
u.globalState.f.a.S(0,new H.b4(t,r,"start isolate"))}else r.$0()},
mH:function(a,b){var t=new H.hb(!0,!1,null)
t.ds(a,b)
return t},
mX:function(a){return new H.b2(!0,[]).V(new H.al(!1,P.c5(null,P.o)).J(a))},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
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
i7:function i7(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(a){this.a=a},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
ic:function ic(){},
eQ:function eQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hE:function hE(){},
bl:function bl(a,b){this.b=a
this.a=b},
ie:function ie(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c){this.b=a
this.c=b
this.a=c},
bg:function bg(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a,b){this.a=a
this.b=b},
hd:function hd(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
al:function al(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
ni:function(a){return u.types[a]},
nr:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isp},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aL(a)
if(typeof t!=="string")throw H.e(H.T(a))
return t},
mE:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fF(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aX:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dt:function(a){var t,s,r,q,p,o,n,m
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.u(a).$isb_){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aK(q,0)===36)q=C.i.d5(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dO(H.iO(a),0,null),u.mangledGlobalNames)},
fB:function(a){return"Instance of '"+H.dt(a)+"'"},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mC:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
mA:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
mw:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
mx:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
mz:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
mB:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
my:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
kt:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.T(a))
return a[b]},
P:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aq(!0,b,"index",null)
t=J.dT(a)
if(b<0||C.b.cQ(b,t))return P.C(b,a,"index",null,t)
return P.fC(b,"index",null)},
T:function(a){return new P.aq(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bQ()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lm})
t.name=""}else t.toString=H.lm
return t},
lm:function(){return J.aL(this.dartException)},
F:function(a){throw H.e(a)},
ae:function(a){throw H.e(new P.a3(a))},
aw:function(a){var t,s,r,q,p,o
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
kH:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jt:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eV(a,s,t?null:b.receiver)},
N:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jd(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aT(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jt(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dr(p,null))}}if(a instanceof TypeError){o=$.$get$kB()
n=$.$get$kC()
m=$.$get$kD()
l=$.$get$kE()
k=$.$get$kI()
j=$.$get$kJ()
i=$.$get$kG()
$.$get$kF()
h=$.$get$kL()
g=$.$get$kK()
f=o.N(s)
if(f!=null)return t.$1(H.jt(s,f))
else{f=n.N(s)
if(f!=null){f.method="call"
return t.$1(H.jt(s,f))}else{f=m.N(s)
if(f==null){f=l.N(s)
if(f==null){f=k.N(s)
if(f==null){f=j.N(s)
if(f==null){f=i.N(s)
if(f==null){f=l.N(s)
if(f==null){f=h.N(s)
if(f==null){f=g.N(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dr(s,f==null?null:f.method))}}return t.$1(new H.hm(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dy()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.aq(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dy()
return a},
am:function(a){var t
if(a==null)return new H.dK(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dK(a,null)},
nv:function(a){if(a==null||typeof a!='object')return J.ap(a)
else return H.aX(a)},
ng:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nq:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dM(b,new H.iW(a))
case 1:return H.dM(b,new H.iX(a,d))
case 2:return H.dM(b,new H.iY(a,d,e))
case 3:return H.dM(b,new H.iZ(a,d,e,f))
case 4:return H.dM(b,new H.j_(a,d,e,f,g))}throw H.e(P.cp("Unsupported number of arguments for wrapped closure"))},
bp:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nq)
a.$identity=t
return t},
m5:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isb){t.$reflectionInfo=c
r=H.mE(t).r}else r=c
q=d?Object.create(new H.fT().constructor.prototype):Object.create(new H.bu(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.ka(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.ni,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k7:H.jm
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.ka(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m2:function(a,b,c,d){var t=H.jm
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ka:function(a,b,c){var t,s,r,q
if(c)return H.m4(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m2(s,b==null?r!=null:b!==r,t,b)
return q},
m3:function(a,b,c,d){var t,s
t=H.jm
s=H.k7
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
m4:function(a,b){var t,s,r,q
H.m1()
t=$.k6
if(t==null){t=H.k5("receiver")
$.k6=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m3(r,b==null?q!=null:b!==q,s,b)
return t},
jE:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.u(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.m5(a,b,t,!!d,e,f)},
jm:function(a){return a.a},
k7:function(a){return a.c},
m1:function(){var t=$.k8
if(t==null){t=H.k5("self")
$.k8=t}return t},
k5:function(a){var t,s,r,q,p
t=new H.bu("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nQ:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ax(a,"String"))},
a_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"double"))},
nP:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ax(a,"num"))},
n9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ax(a,"bool"))},
np:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ax(a,"int"))},
nx:function(a,b){throw H.e(H.ax(a,b.substring(3)))},
nw:function(a,b){var t=J.a0(b)
throw H.e(H.k9(H.dt(a),t.bs(b,3,t.gj(b))))},
jH:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.nx(a,b)},
aJ:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.nw(a,b)},
nO:function(a){if(a==null)return a
if(!!J.u(a).$isb)return a
throw H.e(H.ax(a,"List"))},
l9:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
bq:function(a,b){var t
if(a==null)return!1
t=H.l9(a)
return t==null?!1:H.lf(t,b)},
nM:function(a,b){var t,s
if(a==null)return a
if($.jB)return a
$.jB=!0
try{if(H.bq(a,b))return a
t=H.aK(b,null)
s=H.ax(a,t)
throw H.e(s)}finally{$.jB=!1}},
ax:function(a,b){return new H.hk("type '"+H.dt(a)+"' is not a subtype of type '"+b+"'")},
k9:function(a,b){return new H.e2("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ay:function(a){if(!0===a)return!1
if(!!J.u(a).$isjp)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ax(a,"bool"))},
aI:function(a){throw H.e(new H.hx(a))},
d:function(a){if(H.ay(a))throw H.e(new P.cf(null))},
nC:function(a){throw H.e(new P.e7(a))},
j5:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
ld:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aF(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iO:function(a){if(a==null)return
return a.$ti},
le:function(a,b){return H.jL(a["$as"+H.f(b)],H.iO(a))},
ad:function(a,b,c){var t,s
t=H.le(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aA:function(a,b){var t,s
t=H.iO(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aK:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dO(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aK(t,b)
return H.mZ(a,b)}return"unknown-reified-type"},
mZ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aK(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aK(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aK(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nf(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aK(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dO:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bV("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aK(o,c)}return p?"":"<"+s.k(0)+">"},
iP:function(a){var t,s
if(a instanceof H.b8){t=H.l9(a)
if(t!=null)return H.aK(t,null)}s=J.u(a).constructor.name
if(a==null)return s
return s+H.dO(a.$ti,0,null)},
jL:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jI(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jI(a,null,b)
return b},
cb:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iO(a)
s=J.u(a)
if(s[b]==null)return!1
return H.l3(H.jL(s[d],t),c)},
dP:function(a,b,c,d){if(a==null)return a
if(H.cb(a,b,c,d))return a
throw H.e(H.k9(H.dt(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dO(c,0,null),u.mangledGlobalNames)))},
nK:function(a,b,c,d){if(a==null)return a
if(H.cb(a,b,c,d))return a
throw H.e(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dO(c,0,null),u.mangledGlobalNames)))},
l3:function(a,b){var t,s,r,q,p
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
if(!H.a1(r,b[p]))return!1}return!0},
nc:function(a,b,c){return H.jI(a,b,H.le(b,c))},
a1:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aE")return!0
if('func' in b)return H.lf(a,b)
if('func' in a)return b.name==="jp"||b.name==="n"
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
return H.l3(H.jL(o,t),r)},
l2:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a1(o,n)||H.a1(n,o)))return!1}return!0},
n5:function(a,b){var t,s,r,q,p,o
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
if(!(H.a1(p,o)||H.a1(o,p)))return!1}return!0},
lf:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a1(t,s)||H.a1(s,t)))return!1}r=a.args
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
if(n===m){if(!H.l2(r,q,!1))return!1
if(!H.l2(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.a1(g,f)||H.a1(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a1(g,f)||H.a1(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a1(g,f)||H.a1(f,g)))return!1}}return H.n5(a.named,b.named)},
jI:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nR:function(a){var t=$.jF
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nN:function(a){return H.aX(a)},
nL:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ns:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.n))
t=$.jF.$1(a)
s=$.iM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iV[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l1.$2(a,t)
if(t!=null){s=$.iM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iV[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jJ(r)
$.iM[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iV[t]=r
return r}if(p==="-"){o=H.jJ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lh(a,r)
if(p==="*")throw H.e(new P.dE(t))
if(u.leafTags[t]===true){o=H.jJ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lh(a,r)},
lh:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j3(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jJ:function(a){return J.j3(a,!1,null,!!a.$isp)},
nu:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j3(t,!1,null,!!t.$isp)
else return J.j3(t,c,null,null)},
nn:function(){if(!0===$.jG)return
$.jG=!0
H.no()},
no:function(){var t,s,r,q,p,o,n,m
$.iM=Object.create(null)
$.iV=Object.create(null)
H.nm()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lk.$1(p)
if(o!=null){n=H.nu(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nm:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.bo(C.Q,H.bo(C.V,H.bo(C.A,H.bo(C.A,H.bo(C.U,H.bo(C.R,H.bo(C.S(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jF=new H.iS(p)
$.l1=new H.iT(o)
$.lk=new H.iU(n)},
bo:function(a,b){return a(b)||b},
nB:function(a,b,c){var t=a.indexOf(b,c)
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
hi:function hi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dr:function dr(a,b){this.a=a
this.b=b},
eV:function eV(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a){this.a=a},
jd:function jd(a){this.a=a},
dK:function dK(a,b){this.a=a
this.b=b},
iW:function iW(a){this.a=a},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b8:function b8(){},
h6:function h6(){},
fT:function fT(){},
bu:function bu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a){this.a=a},
e2:function e2(a){this.a=a},
fK:function fK(a){this.a=a},
hx:function hx(a){this.a=a},
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
eU:function eU(a){this.a=a},
eX:function eX(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eY:function eY(a,b){this.a=a
this.$ti=b},
eZ:function eZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
k:function(a){return a},
iF:function(a){var t,s,r
if(!!J.u(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bK:function bK(){},
bf:function bf(){},
fa:function fa(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
di:function di(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
dm:function dm(){},
fh:function fh(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
bO:function bO(){},
nf:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
j4:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.da.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.dc.prototype
if(typeof a=="boolean")return J.eT.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.n)return a
return J.iN(a)},
j3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iN:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jG==null){H.nn()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dE("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$js()]
if(p!=null)return p
p=H.ns(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$js(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
a0:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.n)return a
return J.iN(a)},
dN:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.n)return a
return J.iN(a)},
lb:function(a){if(typeof a=="number")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
nh:function(a){if(typeof a=="number")return J.bd.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
lc:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.b_.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.n)return a
return J.iN(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).A(a,b)},
ao:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lb(a).aD(a,b)},
ln:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lb(a).aE(a,b)},
br:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nr(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)},
lo:function(a,b,c,d){return J.j(a).dF(a,b,c,d)},
jM:function(a,b){return J.lc(a).aK(a,b)},
bs:function(a,b){return J.j(a).dX(a,b)},
lp:function(a,b,c,d){return J.j(a).dY(a,b,c,d)},
lq:function(a,b,c){return J.j(a).dZ(a,b,c)},
jN:function(a,b){return J.j(a).bY(a,b)},
je:function(a,b){return J.j(a).P(a,b)},
jO:function(a,b,c){return J.j(a).c0(a,b,c)},
lr:function(a,b){return J.j(a).ec(a,b)},
dQ:function(a,b,c){return J.j(a).c1(a,b,c)},
b6:function(a,b,c){return J.j(a).c2(a,b,c)},
dR:function(a,b){return J.j(a).ef(a,b)},
ls:function(a,b){return J.j(a).c3(a,b)},
lt:function(a,b,c){return J.j(a).c4(a,b,c)},
jP:function(a,b,c,d){return J.j(a).c5(a,b,c,d)},
lu:function(a,b,c,d,e){return J.j(a).c6(a,b,c,d,e)},
lv:function(a,b){return J.nh(a).R(a,b)},
jf:function(a,b,c){return J.a0(a).ej(a,b,c)},
jg:function(a){return J.j(a).c8(a)},
lw:function(a){return J.j(a).c9(a)},
jQ:function(a){return J.j(a).cc(a)},
jR:function(a){return J.j(a).eo(a)},
lx:function(a,b){return J.j(a).ce(a,b)},
jh:function(a,b){return J.j(a).cf(a,b)},
ly:function(a,b,c,d){return J.j(a).cg(a,b,c,d)},
lz:function(a,b,c,d,e){return J.j(a).ew(a,b,c,d,e)},
lA:function(a,b,c,d,e){return J.j(a).ci(a,b,c,d,e)},
lB:function(a,b,c,d,e,f){return J.j(a).ex(a,b,c,d,e,f)},
lC:function(a,b){return J.dN(a).t(a,b)},
dS:function(a,b){return J.j(a).cj(a,b)},
lD:function(a,b){return J.j(a).ck(a,b)},
lE:function(a){return J.j(a).ey(a)},
lF:function(a,b){return J.dN(a).aw(a,b)},
lG:function(a){return J.j(a).geb(a)},
ap:function(a){return J.u(a).gv(a)},
bt:function(a){return J.dN(a).gw(a)},
dT:function(a){return J.a0(a).gj(a)},
lH:function(a){return J.j(a).gba(a)},
lI:function(a){return J.u(a).gB(a)},
lJ:function(a){return J.j(a).geY(a)},
lK:function(a){return J.j(a).gaA(a)},
ji:function(a){return J.j(a).gm(a)},
jj:function(a){return J.j(a).gn(a)},
jS:function(a){return J.j(a).gK(a)},
jk:function(a,b){return J.j(a).a4(a,b)},
lL:function(a){return J.j(a).aC(a)},
jT:function(a){return J.j(a).bh(a)},
lM:function(a,b){return J.j(a).bi(a,b)},
lN:function(a,b,c){return J.j(a).bj(a,b,c)},
jU:function(a,b,c){return J.j(a).bm(a,b,c)},
lO:function(a,b){return J.j(a).cm(a,b)},
lP:function(a,b){return J.dN(a).cp(a,b)},
jV:function(a,b,c){return J.j(a).cq(a,b,c)},
lQ:function(a){return J.dN(a).eR(a)},
lR:function(a,b){return J.j(a).H(a,b)},
lS:function(a,b,c,d){return J.j(a).br(a,b,c,d)},
jW:function(a,b,c,d,e,f,g){return J.j(a).cv(a,b,c,d,e,f,g)},
lT:function(a,b,c,d){return J.j(a).cw(a,b,c,d)},
dU:function(a,b,c,d){return J.j(a).cz(a,b,c,d)},
lU:function(a){return J.lc(a).f0(a)},
aL:function(a){return J.u(a).k(a)},
lV:function(a,b,c,d){return J.j(a).f2(a,b,c,d)},
lW:function(a,b,c){return J.j(a).cA(a,b,c)},
lX:function(a,b,c){return J.j(a).cB(a,b,c)},
jl:function(a,b,c){return J.j(a).cC(a,b,c)},
lY:function(a,b,c){return J.j(a).cD(a,b,c)},
jX:function(a,b,c){return J.j(a).cE(a,b,c)},
jY:function(a,b,c){return J.j(a).cF(a,b,c)},
jZ:function(a,b,c){return J.j(a).cG(a,b,c)},
k_:function(a,b,c,d){return J.j(a).cH(a,b,c,d)},
k0:function(a,b,c,d){return J.j(a).cI(a,b,c,d)},
lZ:function(a,b){return J.j(a).cK(a,b)},
m_:function(a,b,c){return J.j(a).f3(a,b,c)},
k1:function(a,b,c,d,e,f,g){return J.j(a).cM(a,b,c,d,e,f,g)},
m0:function(a,b,c,d,e){return J.j(a).cN(a,b,c,d,e)},
a:function a(){},
eT:function eT(){},
dc:function dc(){},
bG:function bG(){},
fv:function fv(){},
b_:function b_(){},
aU:function aU(){},
aS:function aS(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
dZ:function dZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bd:function bd(){},
db:function db(){},
da:function da(){},
aT:function aT(){}},P={
mL:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n6()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bp(new P.hA(t),1)).observe(s,{childList:true})
return new P.hz(t,s,r)}else if(self.setImmediate!=null)return P.n7()
return P.n8()},
mM:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bp(new P.hB(a),0))},
mN:function(a){++u.globalState.f.b
self.setImmediate(H.bp(new P.hC(a),0))},
mO:function(a){P.jx(C.y,a)},
n1:function(a,b){if(H.bq(a,{func:1,args:[P.aE,P.aE]})){b.toString
return a}else{b.toString
return a}},
mi:function(a,b,c){var t
if(a==null)a=new P.bQ()
t=$.w
if(t!==C.d)t.toString
t=new P.J(0,t,null,[c])
t.dG(a,b)
return t},
mj:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.J(0,$.w,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eI(t,!1,b,s)
try{for(m=0,l=0;m<6;++m){q=a[m]
p=l
q.be(new P.eH(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.J(0,$.w,null,[null])
l.bF(C.C)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.N(j)
n=H.am(j)
if(t.b===0||!1)return P.mi(o,n,null)
else{t.c=o
t.d=n}}return s},
mY:function(a,b,c){$.w.toString
a.O(b,c)},
mQ:function(a,b){var t=new P.J(0,$.w,null,[b])
H.d(!0)
t.a=4
t.c=a
return t},
kS:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.J))
H.d(b.a===0)
b.a=1
try{a.be(new P.hW(b),new P.hX(b))}catch(r){t=H.N(r)
s=H.am(r)
P.ny(new P.hY(b,t,s))}},
hV:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ad(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bk(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bS(q)}},
bk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.bk(t.a,b)}s=t.a
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
return}s=$.w
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.w
H.d(l==null?s!=null:l!==s)
j=$.w
$.w=l
i=j}else i=null
s=b.c
if(s===8)new P.i2(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i1(r,b,m).$0()}else if((s&2)!==0)new P.i0(t,r,b).$0()
if(i!=null){H.d(!0)
$.w=i}s=r.b
if(!!J.u(s).$isW){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ad(h)
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
b=g.ad(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
n0:function(){var t,s
for(;t=$.bm,t!=null;){$.c9=null
s=t.b
$.bm=s
if(s==null)$.c8=null
t.a.$0()}},
n4:function(){$.jC=!0
try{P.n0()}finally{$.c9=null
$.jC=!1
if($.bm!=null)$.$get$jz().$1(P.l4())}},
l_:function(a){var t=new P.dG(a,null)
if($.bm==null){$.c8=t
$.bm=t
if(!$.jC)$.$get$jz().$1(P.l4())}else{$.c8.b=t
$.c8=t}},
n3:function(a){var t,s,r
t=$.bm
if(t==null){P.l_(a)
$.c9=$.c8
return}s=new P.dG(a,null)
r=$.c9
if(r==null){s.b=t
$.c9=s
$.bm=s}else{s.b=r.b
r.b=s
$.c9=s
if(s.b==null)$.c8=s}},
ny:function(a){var t=$.w
if(C.d===t){P.bn(null,null,C.d,a)
return}t.toString
P.bn(null,null,t,t.b0(a))},
mW:function(a,b,c){var t=a.eg(0)
if(!!J.u(t).$isW&&t!==$.$get$km())t.f4(new P.iE(b,c))
else b.aa(c)},
mI:function(a,b){var t=$.w
if(t===C.d){t.toString
return P.jx(a,b)}return P.jx(a,t.b0(b))},
jx:function(a,b){var t=C.b.I(a.a,1000)
return H.mH(t<0?0:t,b)},
jy:function(a){var t,s
H.d(a!=null)
t=$.w
H.d(a==null?t!=null:a!==t)
s=$.w
$.w=a
return s},
iG:function(a,b,c,d,e){var t={}
t.a=d
P.n3(new P.iH(t,e))},
kY:function(a,b,c,d){var t,s
if($.w===c)return d.$0()
t=P.jy(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.w=s}},
kZ:function(a,b,c,d,e){var t,s
if($.w===c)return d.$1(e)
t=P.jy(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
n2:function(a,b,c,d,e,f){var t,s
if($.w===c)return d.$2(e,f)
t=P.jy(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.w=s}},
bn:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b0(d):c.ed(d)
P.l_(d)},
hA:function hA(a){this.a=a},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
W:function W(){},
eI:function eI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eH:function eH(a,b,c,d,e){var _=this
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
bU:function bU(){},
h_:function h_(a){this.a=a},
h0:function h0(a,b){this.a=a
this.b=b},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a){this.a=a},
fX:function fX(){},
iE:function iE(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
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
kr:function(a,b){return new H.ag(0,null,null,null,null,null,0,[a,b])},
L:function(){return new H.ag(0,null,null,null,null,null,0,[null,null])},
aW:function(a){return H.ng(a,new H.ag(0,null,null,null,null,null,0,[null,null]))},
c5:function(a,b){return new P.dI(0,null,null,null,null,null,0,[a,b])},
mU:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mq:function(a,b,c){var t,s
if(P.jD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ca()
C.a.l(s,a)
try{P.n_(a,t)}finally{H.d(C.a.gb6(s)===a)
s.pop()}s=P.kA(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eS:function(a,b,c){var t,s,r
if(P.jD(a))return b+"..."+c
t=new P.bV(b)
s=$.$get$ca()
C.a.l(s,a)
try{r=t
r.a=P.kA(r.ga0(),a,", ")}finally{H.d(C.a.gb6(s)===a)
s.pop()}s=t
s.a=s.ga0()+c
s=t.ga0()
return s.charCodeAt(0)==0?s:s},
jD:function(a){var t,s
for(t=0;s=$.$get$ca(),t<s.length;++t)if(a===s[t])return!0
return!1},
n_:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
ju:function(a,b){var t,s
t=P.ah(null,null,null,b)
for(s=J.bt(a);s.p();)t.l(0,s.gq())
return t},
mu:function(a){var t,s,r
t={}
if(P.jD(a))return"{...}"
s=new P.bV("")
try{C.a.l($.$get$ca(),a)
r=s
r.a=r.ga0()+"{"
t.a=!0
a.aw(0,new P.f3(t,s))
t=s
t.a=t.ga0()+"}"}finally{t=$.$get$ca()
H.d(C.a.gb6(t)===a)
t.pop()}t=s.ga0()
return t.charCodeAt(0)==0?t:t},
jv:function(a,b){var t=new P.f_(null,0,0,0,[b])
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
dd:function dd(){},
y:function y(){},
f3:function f3(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c,d,e){var _=this
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
fN:function fN(){},
fM:function fM(){},
bR:function bR(){},
kA:function(a,b,c){var t=J.bt(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
m6:function(a,b){return J.lv(a,b)},
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
cj:function(a){if(a>=10)return""+a
return"0"+a},
jo:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aL(a)
if(typeof a==="string")return JSON.stringify(a)
return P.me(a)},
me:function(a){var t=J.u(a)
if(!!t.$isb8)return t.k(a)
return H.fB(a)},
dY:function(a){return new P.aq(!1,null,null,a)},
k2:function(a,b,c){return new P.aq(!0,a,b,c)},
fC:function(a,b,c){return new P.dv(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.dv(b,c,!0,a,d,"Invalid value")},
kw:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aY(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aY(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dT(b)
return new P.eO(b,t,!0,a,c,"Index out of range")},
cp:function(a){return new P.hR(a)},
ks:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bt(a);s.p();)C.a.l(t,s.gq())
return t},
an:function(a){H.j4(H.f(a))},
az:function az(){},
H:function H(){},
bv:function bv(a,b){this.a=a
this.b=b},
M:function M(){},
aQ:function aQ(a){this.a=a},
ee:function ee(){},
ef:function ef(){},
ba:function ba(){},
cf:function cf(a){this.a=a},
bQ:function bQ(){},
aq:function aq(a,b,c,d){var _=this
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
eO:function eO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
dE:function dE(a){this.a=a},
au:function au(a){this.a=a},
a3:function a3(a){this.a=a},
dy:function dy(){},
e7:function e7(a){this.a=a},
hR:function hR(a){this.a=a},
eh:function eh(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
X:function X(){},
d9:function d9(){},
b:function b(){},
aD:function aD(){},
aE:function aE(){},
U:function U(){},
n:function n(){},
bT:function bT(){},
t:function t(){},
bV:function bV(a){this.a=a},
l5:function(a){return a},
iK:function(a){var t,s,r,q,p
if(a==null)return
t=P.L()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.ae)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nd:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lF(a,new P.iJ(t))
return t},
kh:function(){var t=$.kg
if(t==null){t=J.jf(window.navigator.userAgent,"Opera",0)
$.kg=t}return t},
mb:function(){var t,s
t=$.kd
if(t!=null)return t
s=$.ke
if(s==null){s=J.jf(window.navigator.userAgent,"Firefox",0)
$.ke=s}if(s)t="-moz-"
else{s=$.kf
if(s==null){s=!P.kh()&&J.jf(window.navigator.userAgent,"Trident/",0)
$.kf=s}if(s)t="-ms-"
else t=P.kh()?"-o-":"-webkit-"}$.kd=t
return t},
iJ:function iJ(a){this.a=a},
i8:function i8(){},
ig:function ig(){},
I:function I(){},
dV:function dV(){},
aM:function aM(){},
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
ey:function ey(){},
ez:function ez(){},
eD:function eD(){},
eF:function eF(){},
af:function af(){},
aC:function aC(){},
eM:function eM(){},
as:function as(){},
eW:function eW(){},
f4:function f4(){},
f5:function f5(){},
at:function at(){},
fl:function fl(){},
fs:function fs(){},
fx:function fx(){},
fy:function fy(){},
fD:function fD(){},
fE:function fE(){},
bS:function bS(){},
h1:function h1(){},
G:function G(){},
h2:function h2(){},
h3:function h3(){},
dA:function dA(){},
h7:function h7(){},
bX:function bX(){},
av:function av(){},
hg:function hg(){},
ho:function ho(){},
hq:function hq(){},
hr:function hr(){},
c2:function c2(){},
il:function il(){},
im:function im(){},
io:function io(){},
cx:function cx(){},
cv:function cv(){},
cC:function cC(){},
cG:function cG(){},
cQ:function cQ(){},
cZ:function cZ(){},
cV:function cV(){},
cX:function cX(){},
e_:function e_(){},
fH:function fH(){},
fI:function fI(){},
iA:function iA(){},
fS:function fS(){},
cw:function cw(){},
cT:function cT(){}},W={
mc:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).M(t,a,b,c)
s.toString
t=new H.dF(new W.R(s),new W.iI(),[W.r])
return t.ga_(t)},
md:function(a){return"wheel"},
bx:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lJ(a)
if(typeof s==="string")t=a.tagName}catch(r){H.N(r)}return t},
mP:function(a,b){return document.createElement(a)},
b5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kV:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ak:function(a,b,c,d,e){var t=W.l0(new W.hQ(c))
t=new W.hP(0,a,b,t,!1,[e])
t.dA(a,b,c,!1,e)
return t},
kT:function(a){var t,s
t=document.createElement("a")
s=new W.ip(t,window.location)
s=new W.c3(s)
s.dB(a)
return s},
mS:function(a,b,c,d){return!0},
mT:function(a,b,c,d){var t,s,r,q,p
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
kW:function(){var t=P.t
t=new W.ix(P.ju(C.t,t),P.ah(null,null,null,t),P.ah(null,null,null,t),P.ah(null,null,null,t),null)
t.dD(null,new H.bH(C.t,new W.iy(),[H.aA(C.t,0),null]),["TEMPLATE"],null)
return t},
l0:function(a){var t=$.w
if(t===C.d)return a
return t.ee(a)},
l:function l(){},
dW:function dW(){},
dX:function dX(){},
a2:function a2(){},
e0:function e0(){},
cg:function cg(){},
aN:function aN(){},
aO:function aO(){},
ch:function ch(){},
ci:function ci(){},
aP:function aP(){},
e4:function e4(){},
A:function A(){},
b9:function b9(){},
e5:function e5(){},
e8:function e8(){},
e9:function e9(){},
ck:function ck(){},
bw:function bw(){},
cl:function cl(){},
ea:function ea(){},
cm:function cm(){},
eb:function eb(){},
cn:function cn(){},
co:function co(){},
ec:function ec(){},
ed:function ed(){},
V:function V(){},
iI:function iI(){},
i:function i(){},
h:function h(){},
a4:function a4(){},
eB:function eB(){},
eC:function eC(){},
eG:function eG(){},
a5:function a5(){},
cs:function cs(){},
eK:function eK(){},
bE:function bE(){},
ct:function ct(){},
eL:function eL(){},
bF:function bF(){},
bb:function bb(){},
bc:function bc(){},
aR:function aR(){},
eP:function eP(){},
aV:function aV(){},
f1:function f1(){},
bI:function bI(){},
f6:function f6(){},
f7:function f7(){},
bJ:function bJ(){},
a6:function a6(){},
f8:function f8(){},
O:function O(){},
fi:function fi(){},
R:function R(a){this.a=a},
r:function r(){},
dn:function dn(){},
bP:function bP(){},
fr:function fr(){},
ft:function ft(){},
a7:function a7(){},
fw:function fw(){},
fz:function fz(){},
fA:function fA(){},
du:function du(){},
fJ:function fJ(){},
dw:function dw(){},
fL:function fL(){},
fO:function fO(){},
a8:function a8(){},
fP:function fP(){},
a9:function a9(){},
fR:function fR(){},
aa:function aa(){},
fW:function fW(){},
Y:function Y(){},
aj:function aj(){},
dz:function dz(){},
h4:function h4(){},
h5:function h5(){},
bW:function bW(){},
ab:function ab(){},
Z:function Z(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
ac:function ac(){},
aZ:function aZ(){},
he:function he(){},
hf:function hf(){},
bi:function bi(){},
hh:function hh(){},
dD:function dD(){},
aG:function aG(){},
hn:function hn(){},
bj:function bj(){},
hp:function hp(){},
hs:function hs(){},
ht:function ht(){},
b0:function b0(){},
c0:function c0(){},
hv:function hv(a){this.a=a},
hw:function hw(){},
b1:function b1(){},
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
B:function B(){},
dq:function dq(a){this.a=a},
fk:function fk(a){this.a=a},
fj:function fj(a,b,c){this.a=a
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
cr:function cr(a,b,c,d,e){var _=this
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
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
cu:function cu(){},
cO:function cO(){},
cA:function cA(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cy:function cy(){},
cz:function cz(){},
cB:function cB(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cP:function cP(){},
cR:function cR(){},
d0:function d0(){},
d1:function d1(){},
d_:function d_(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
cS:function cS(){},
cU:function cU(){},
cW:function cW(){},
cY:function cY(){},
d2:function d2(){},
d3:function d3(){}},B={
nz:function(a){var t,s
t=document
s=W.aV
W.ak(t,"keydown",new B.j6(),!1,s)
W.ak(t,"keyup",new B.j7(),!1,s)
if(!$.nA)W.ak(t,"mousemove",new B.j8(),!1,W.O)
s=W.O
W.ak(t,"mousedown",new B.j9(),!1,s)
W.ak(t,"mouseup",new B.ja(),!1,s)},
mv:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.k(3))
s=$.$get$iL()
r=$.$get$cc()
q=new T.ai(new Float32Array(H.k(16)))
q.a6()
q=new B.fm(a,b,c,0,new T.q(t),-0.02,s,r,q,new T.q(new Float32Array(H.k(3))),new T.q(new Float32Array(H.k(3))),new T.q(new Float32Array(H.k(3))),new T.q(new Float32Array(H.k(3))),"camera:orbit",!1,!0)
q.dl(a,b,c,d)
return q},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
ja:function ja(){},
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
m7:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.q(new Float32Array(H.k(3)))
r.u(t,s,d8)
q=new T.q(new Float32Array(H.k(3)))
q.u(d6,s,d8)
p=new T.q(new Float32Array(H.k(3)))
p.u(d6,d7,d8)
o=new T.q(new Float32Array(H.k(3)))
o.u(t,d7,d8)
n=-d8
m=new T.q(new Float32Array(H.k(3)))
m.u(t,s,n)
l=new T.q(new Float32Array(H.k(3)))
l.u(t,d7,n)
k=new T.q(new Float32Array(H.k(3)))
k.u(d6,d7,n)
j=new T.q(new Float32Array(H.k(3)))
j.u(d6,s,n)
i=new T.q(new Float32Array(H.k(3)))
i.u(t,d7,n)
h=new T.q(new Float32Array(H.k(3)))
h.u(t,d7,d8)
g=new T.q(new Float32Array(H.k(3)))
g.u(d6,d7,d8)
f=new T.q(new Float32Array(H.k(3)))
f.u(d6,d7,n)
e=new T.q(new Float32Array(H.k(3)))
e.u(d6,s,d8)
d=new T.q(new Float32Array(H.k(3)))
d.u(t,s,d8)
c=new T.q(new Float32Array(H.k(3)))
c.u(t,s,n)
b=new T.q(new Float32Array(H.k(3)))
b.u(d6,s,n)
a=new T.q(new Float32Array(H.k(3)))
a.u(d6,s,n)
a0=new T.q(new Float32Array(H.k(3)))
a0.u(d6,d7,n)
a1=new T.q(new Float32Array(H.k(3)))
a1.u(d6,d7,d8)
a2=new T.q(new Float32Array(H.k(3)))
a2.u(d6,s,d8)
a3=new T.q(new Float32Array(H.k(3)))
a3.u(t,s,n)
a4=new T.q(new Float32Array(H.k(3)))
a4.u(t,s,d8)
s=new T.q(new Float32Array(H.k(3)))
s.u(t,d7,d8)
a5=new T.q(new Float32Array(H.k(3)))
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
c8=new G.eJ(!1,[],[],[],P.L())
c8.bw("aTexUV")
c8.bw("aNormal")
c8.de(6)
c8.ap([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.dc("aTexUV",[new T.x(n),new T.x(t),new T.x(a6),new T.x(a7),new T.x(a8),new T.x(a9),new T.x(b0),new T.x(b1),new T.x(b2),new T.x(b3),new T.x(b4),new T.x(b5),new T.x(b6),new T.x(b7),new T.x(b8),new T.x(b9),new T.x(c0),new T.x(c1),new T.x(c2),new T.x(c3),new T.x(c4),new T.x(c5),new T.x(c6),new T.x(c7)])
for(c9=0;t=$.$get$kR(),c9<6;++c9){d0=t[c9]
c8.dd("aNormal",[d0,d0,d0,d0])}return c8}},G={
mK:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.aj(t,"\n")},
kQ:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.cb(a,b)
t.bp(a,s,c)
t.c7(a,s)
r=t.bl(a,s,35713)
if(r!=null&&!r){q=t.bk(a,s)
P.an("E:Compilation failed:")
P.an("E:"+G.mK(c))
P.an("E:Failure:")
P.an(C.i.a3("E:",q))
throw H.e(q)}return s},
kl:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ji(a[s])
b[t+1]=J.jj(a[s])
b[t+2]=J.jS(a[s])}return b},
mg:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ji(a[s])
b[t+1]=J.jj(a[s])}return b},
mh:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ji(a[s])
b[t+1]=J.jj(a[s])
b[t+2]=J.jS(a[s])
b[t+3]=J.lK(a[s])}return b},
mf:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.br(a[s],0)
b[t+1]=J.br(a[s],1)
b[t+2]=J.br(a[s],2)
b[t+3]=J.br(a[s],3)}return b},
mR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gw(s),r=b.x,q=[[P.b,P.o]],p=[P.M],o=[T.aH],n=[T.q],m=[T.x];s.p();){l=s.gq()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.la>0)H.j4("I: "+k)
continue}j=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.a8(l,G.mg(H.dP(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a8(l,G.kl(H.dP(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a8(l,G.mh(H.dP(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a8(l,new Float32Array(H.iF(H.dP(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a8(l,G.mf(H.dP(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ay(!1))H.aI("unknown type for "+H.f(l)+" ["+J.lI(j[0]).k(0)+"] ["+new H.aF(H.iP(j),null).k(0)+"] "+H.f(j))}}},
kx:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ah(null,null,null,P.t)
s=c.b
r=d.b
q=c.f
p=J.lw(b.a)
o=G.kQ(b.a,35633,s)
J.jO(b.a,p,o)
n=G.kQ(b.a,35632,r)
J.jO(b.a,p,n)
if(q.length>0)J.lV(b.a,p,q,35980)
J.lO(b.a,p)
if(!J.lN(b.a,p,35714))H.F(J.lM(b.a,p))
t=new G.fG(b,c,d,p,P.ju(c.c,null),P.L(),P.L(),t,null,a,!1,!0)
t.dm(a,b,c,d)
return t},
m8:function(a,b,c){var t=new G.dB(!1,!1,!1,!0,1,9729,9729)
t.b=!0
t=new G.e6(b,J.jQ(a.a),34067,a,t)
t.dg(a,b,c)
return t},
f9:function f9(){},
hl:function hl(){},
e1:function e1(){},
e3:function e3(a,b){this.a=a
this.b=b},
eA:function eA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dC:function dC(a,b,c){this.a=a
this.b=b
this.c=c},
bZ:function bZ(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b,c,d){var _=this
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
fu:function fu(){},
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
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fQ:function fQ(){},
dB:function dB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bY:function bY(){},
eN:function eN(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f},
e6:function e6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},R={
mJ:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.k(s))
for(q=0;q<s;++q)r[q]=($.$get$kP().eO()-0.5)*c
s=a.d
s=new G.dh(s,J.jR(s.a),0,P.L(),a.e.x,null,0,-1,null,null,P.L(),"meshdata:"+t,!1,!0)
s.ap(r)
return s},
ky:function(a,b,c,d,e,f,g,h){var t,s,r,q,p,o
t=B.m7(!0,b,c,d,e,f,g,h)
s=a.d
r=J.jR(s.a)
q=new G.dh(s,r,4,P.L(),a.e.x,null,0,-1,null,null,P.L(),"meshdata:cube",!1,!0)
q.ap(G.kl(t.d,null))
p=t.di()
q.y=J.jg(s.a)
H.d(q.ch!=null)
o=q.ch.length
if(o<768){q.saO(new Uint8Array(H.iF(p)))
q.Q=5121}else if(o<196608){q.saO(new Uint16Array(H.iF(p)))
q.Q=5123}else{q.saO(new Uint32Array(H.iF(p)))
q.Q=5125}J.dR(s.a,r)
r=q.y
p=q.cx
o=J.u(p)
H.d(!!o.$iskM||!!o.$iskN||!!o.$iskO)
J.dQ(s.a,34963,r)
J.jP(s.a,34963,p,35048)
G.mR(t,q)
return q},
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
fU:function fU(){},
fV:function fV(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mt:function(a,b){var t,s,r,q,p,o,n,m,l
t=H.D(new Array(6),[[P.W,W.aR]])
for(s=[W.i],r=[null],q=[null],p=0;o=$.$get$kX(),p<6;++p){n=new P.J(0,$.w,null,r)
m=document.createElement("img")
l=new W.hL(m,"load",!1,s)
l.gb5(l).az(new D.f0(new P.hy(n,q),m))
m.src=a+o[p]+b
t[p]=n}return t},
f0:function f0(a,b){this.a=a
this.b=b}},A={
iQ:function(a){var t,s
t=C.a_.eA(a,0,new A.iR())
s=536870911&t+(C.b.cO(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iR:function iR(){}},T={
c_:function(a,b,c){var t=new T.q(new Float32Array(H.k(3)))
t.u(a,b,c)
return t},
ai:function ai(a){this.a=a},
x:function x(a){this.a=a},
q:function q(a){this.a=a},
aH:function aH(a){this.a=a}},M={
nt:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t={}
s=document
r=new R.fV(0,0,null,null,null,null)
r.dr(C.r.cS(s,"stats"),"blue","gray")
q=C.r.eQ(s,"#webgl-canvas")
p=new G.e3(null,q)
o=(q&&C.w).bg(q,"webgl2",P.aW(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.F(P.cp('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.aL(J.lL(o))
if($.la>0)P.an("I: "+n)
J.lu(o,0,0,0,1)
J.dS(o,2929)
m=B.mv(15,0,0,q)
o=new T.ai(new Float32Array(H.k(16)))
o.a6()
n=new T.ai(new Float32Array(H.k(16)))
n.a6()
l=new R.ds(q,p,m,50,1,0.1,1000,o,n,new T.ai(new Float32Array(H.k(16))),P.L(),"perspective",!1,!0)
l.bA()
l.cs(null)
W.ak(window,"resize",l.geU(),!1,W.i)
k=G.kx("solid",p,$.$get$l7(),$.$get$l6())
j=new G.dg(P.L(),"cubemap",!1,!0)
j.F("cDepthTest",!0)
j.F("cDepthWrite",!0)
j.F("cBlendEquation",$.$get$k4())
n=$.$get$kz()
j.F("cStencilFunc",n)
o=new T.ai(new Float32Array(H.k(16)))
o.a6()
j.F("uModelMatrix",o)
i=R.ky(k,1,0,1,0,2,2,2)
h=R.ky(k,1,0,1,0,512,512,512)
g=G.kx("stars",p,$.$get$lj(),$.$get$li())
o=$.$get$k3()
f=new G.dg(P.L(),"stars",!1,!0)
f.F("cDepthTest",!0)
f.F("cDepthWrite",!1)
f.F("cBlendEquation",o)
f.F("cStencilFunc",n)
e=s.createElement("canvas")
e.width=64
e.height=64
d=C.w.cR(e,"2d")
c=(d&&C.p).ca(d,32,32,1,32,32,22);(c&&C.m).av(c,0,"gray")
C.m.av(c,1,"black")
d.fillStyle=c
C.p.ez(d,0,0,64,64)
c=C.p.ca(d,32,32,1,32,32,6);(c&&C.m).av(c,0,"white")
C.m.av(c,1,"gray")
d.globalAlpha=0.9
d.fillStyle=c
d.arc(32,32,4,0,6.283185307179586,!1)
d.fill("nonzero")
s=new G.dB(!1,!1,!1,!0,1,9729,9729)
o=J.jQ(p.a)
n=new G.eN(e,"Utils::Particles",o,3553,p,s)
J.b6(p.a,3553,o)
J.jV(p.a,37440,1)
n.dq(e)
s.bz(p,3553)
H.d(J.jT(p.a)===0)
J.b6(p.a,3553,null)
f.F("uTexture",n)
f.F("uPointSize",1000)
s=new T.ai(new Float32Array(H.k(16)))
s.a6()
f.F("uModelMatrix",s)
b=R.mJ(g,2000,100)
t.a=0
P.mj(D.mt("skybox_",".png"),null,!1).az(new M.j2(p,j,new M.j1(t,r,m,l,k,j,i,h,g,f,b)))},
j1:function j1(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c}}
var v=[C,H,J,P,W,B,G,R,D,A,T,M]
setFunctionNamesIfNecessary(v)
var $={}
H.jr.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gv:function(a){return H.aX(a)},
k:function(a){return H.fB(a)},
gB:function(a){return new H.aF(H.iP(a),null)}}
J.eT.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gB:function(a){return C.au},
$isaz:1}
J.dc.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gB:function(a){return C.ao}}
J.bG.prototype={
gv:function(a){return 0},
gB:function(a){return C.an},
k:function(a){return String(a)},
$iskq:1}
J.fv.prototype={}
J.b_.prototype={}
J.aU.prototype={
k:function(a){var t=a[$.$get$kc()]
return t==null?this.d8(a):J.aL(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjp:1}
J.aS.prototype={
b2:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
b1:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
l:function(a,b){this.b1(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.b1(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.ae)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.F(new P.a3(a)))
a.push(q)}},
cp:function(a,b){return new H.bH(a,b,[H.aA(a,0),null])},
aj:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gb5:function(a){if(a.length>0)return a[0]
throw H.e(H.d8())},
gb6:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.d8())},
bo:function(a,b,c,d,e){var t,s
this.b2(a,"setRange")
P.kw(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.F(P.aY(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mr())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c_:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a3(a))}return!1},
d3:function(a,b){this.b2(a,"sort")
H.dx(a,0,a.length-1,P.ne())},
aF:function(a){return this.d3(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
k:function(a){return P.eS(a,"[","]")},
gw:function(a){return new J.dZ(a,a.length,0,null,[H.aA(a,0)])},
gv:function(a){return H.aX(a)},
gj:function(a){return a.length},
sj:function(a,b){this.b1(a,"set length")
if(b<0)throw H.e(P.aY(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
return a[b]},
i:function(a,b,c){this.b2(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.P(a,b))
if(b>=a.length||b<0)throw H.e(H.P(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jq.prototype={}
J.dZ.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.ae(t))
r=this.c
if(r>=s){this.sbB(null)
return!1}this.sbB(t[r]);++this.c
return!0},
sbB:function(a){this.d=a}}
J.bd.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gax(b)
if(this.gax(a)===t)return 0
if(this.gax(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gax:function(a){return a===0?1/a<0:a<0},
eh:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
ei:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.T(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
f1:function(a,b){var t
if(b>20)throw H.e(P.aY(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gax(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a3:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a+b},
a7:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a-b},
cP:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a*b},
aH:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bW(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bW(a,b)},
bW:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aT:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cO:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a&b)>>>0},
da:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a^b)>>>0},
aE:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a<b},
aD:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>b},
cQ:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>=b},
gB:function(a){return C.ax},
$isU:1}
J.db.prototype={
gB:function(a){return C.aw},
$isM:1,
$iso:1,
$isU:1}
J.da.prototype={
gB:function(a){return C.av},
$isM:1,
$isU:1}
J.aT.prototype={
aK:function(a,b){if(b>=a.length)throw H.e(H.P(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(typeof b!=="string")throw H.e(P.k2(b,null,null))
return a+b},
d4:function(a,b,c){var t
if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bq:function(a,b){return this.d4(a,b,0)},
bs:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fC(b,null,null))
if(b>c)throw H.e(P.fC(b,null,null))
if(c>a.length)throw H.e(P.fC(c,null,null))
return a.substring(b,c)},
d5:function(a,b){return this.bs(a,b,null)},
f0:function(a){return a.toLowerCase()},
ej:function(a,b,c){if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
return H.nB(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.T(b))
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
gB:function(a){return C.ap},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.P(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$ist:1}
H.c.prototype={$asc:null}
H.be.prototype={
gw:function(a){return new H.de(this,this.gj(this),0,null,[H.ad(this,"be",0)])},
aB:function(a,b){return this.d7(0,b)},
f_:function(a,b){var t,s
t=H.D([],[H.ad(this,"be",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eZ:function(a){return this.f_(a,!0)}}
H.de.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.a0(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a3(t))
q=this.c
if(q>=r){this.sab(null)
return!1}this.sab(s.t(t,q));++this.c
return!0},
sab:function(a){this.d=a}}
H.df.prototype={
gw:function(a){return new H.f2(null,J.bt(this.a),this.b,this.$ti)},
gj:function(a){return J.dT(this.a)},
$asX:function(a,b){return[b]}}
H.eg.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f2.prototype={
p:function(){var t=this.b
if(t.p()){this.sab(this.c.$1(t.gq()))
return!0}this.sab(null)
return!1},
gq:function(){return this.a},
sab:function(a){this.a=a},
$asd9:function(a,b){return[b]}}
H.bH.prototype={
gj:function(a){return J.dT(this.a)},
t:function(a,b){return this.b.$1(J.lC(this.a,b))},
$asc:function(a,b){return[b]},
$asbe:function(a,b){return[b]},
$asX:function(a,b){return[b]}}
H.dF.prototype={
gw:function(a){return new H.hu(J.bt(this.a),this.b,this.$ti)}}
H.hu.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cq.prototype={}
H.jb.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jc.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.id.prototype={
seJ:function(a){this.z=a},
seL:function(a){this.ch=a}}
H.b3.prototype={
bZ:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b_()},
eT:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ak(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bQ();++r.d}this.y=!1}this.b_()},
e7:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eS:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.F(new P.v("removeRange"))
P.kw(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d0:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eD:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jv(null,null)
this.cx=t}t.S(0,new H.i7(a,c))},
eC:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ay()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jv(null,null)
this.cx=t}t.S(0,this.geK())},
eE:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.an(a)
if(b!=null)P.an(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aL(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c4(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.N(o)
p=H.am(o)
this.eE(q,p)
if(this.db){this.ay()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n9(r)
u.globalState.d=H.jH(t,"$isb3")
if(t!=null)$=t.geI()
if(this.cx!=null)for(;n=this.cx,!n.gai(n);)this.cx.cr().$0()}return s},
co:function(a){return this.b.h(0,a)},
bE:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.cp("Registry: ports must be registered only once."))
t.i(0,a,b)},
b_:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ay()},
ay:function(){var t,s,r
t=this.cx
if(t!=null)t.U(0)
for(t=this.b,s=t.gcL(t),s=s.gw(s);s.p();)s.gq().dI()
t.U(0)
this.c.U(0)
u.globalState.z.ak(0,this.a)
this.dx.U(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geI:function(){return this.d},
gek:function(){return this.e}}
H.i7.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hM.prototype={
eq:function(){var t=this.a
if(t.b===t.c)return
return t.cr()},
cu:function(){var t,s,r
t=this.eq()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gai(s)}else s=!1
else s=!1
else s=!1
if(s)H.F(P.cp("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gai(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aW(["command","close"])
r=new H.al(!0,new P.dI(0,null,null,null,null,null,0,[null,P.o])).J(r)
s.toString
self.postMessage(r)}return!1}t.eP()
return!0},
bU:function(){if(self.window!=null)new H.hN(this).$0()
else for(;this.cu(););},
al:function(){var t,s,r,q,p
if(!u.globalState.x)this.bU()
else try{this.bU()}catch(r){t=H.N(r)
s=H.am(r)
q=u.globalState.Q
p=P.aW(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.al(!0,P.c5(null,P.o)).J(p)
q.toString
self.postMessage(p)}}}
H.hN.prototype={
$0:function(){if(!this.a.cu())return
P.mI(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.b4.prototype={
eP:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.ic.prototype={}
H.eQ.prototype={
$0:function(){H.mn(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eR.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bq(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bq(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b_()},
$S:function(){return{func:1,v:true}}}
H.hE.prototype={}
H.bl.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mX(b)
if(t.gek()===s){s=J.a0(r)
switch(s.h(r,0)){case"pause":t.bZ(s.h(r,1),s.h(r,2))
break
case"resume":t.eT(s.h(r,1))
break
case"add-ondone":t.e7(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eS(s.h(r,1))
break
case"set-errors-fatal":t.d0(s.h(r,1),s.h(r,2))
break
case"ping":t.eD(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eC(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ak(0,s)
break}return}u.globalState.f.a.S(0,new H.b4(t,new H.ie(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bl){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.ie.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dE(0,this.b)},
$S:function(){return{func:1}}}
H.c7.prototype={
H:function(a,b){var t,s,r
t=P.aW(["command","message","port",this,"msg",b])
s=new H.al(!0,P.c5(null,P.o)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
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
gv:function(a){return C.b.da((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bg.prototype={
dI:function(){this.c=!0
this.b=null},
dE:function(a,b){if(this.c)return
this.b.$1(b)},
$ismD:1}
H.hb.prototype={
ds:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.b4(s,new H.hc(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bp(new H.hd(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.hc.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hd.prototype={
$0:function(){this.a.c=null
H.j0()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gv:function(a){var t=this.a
t=C.b.aT(t,0)^C.b.I(t,4294967296)
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
H.al.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.u(a)
if(!!t.$isbK)return["buffer",a]
if(!!t.$isbf)return["typed",a]
if(!!t.$ism)return this.cX(a)
if(!!t.$ismk){r=this.gcU()
q=t.gE(a)
q=H.jw(q,r,H.ad(q,"X",0),null)
q=P.ks(q,!0,H.ad(q,"X",0))
t=t.gcL(a)
t=H.jw(t,r,H.ad(t,"X",0),null)
return["map",q,P.ks(t,!0,H.ad(t,"X",0))]}if(!!t.$iskq)return this.cY(a)
if(!!t.$isa)this.cJ(a)
if(!!t.$ismD)this.am(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbl)return this.cZ(a)
if(!!t.$isc7)return this.d_(a)
if(!!t.$isb8){p=a.$static_name
if(p==null)this.am(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.n))this.cJ(a)
return["dart",u.classIdExtractor(a),this.cW(u.classFieldsExtractor(a))]},
am:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cJ:function(a){return this.am(a,null)},
cX:function(a){var t
H.d(typeof a!=="string")
t=this.cV(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.am(a,"Can't serialize indexable: ")},
cV:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
cW:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
cY:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.am(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
d_:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cZ:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b2.prototype={
V:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.dY("Bad serialized message: "+H.f(a)))
switch(C.a.gb5(a)){case"ref":H.d(J.E(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.E(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.E(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.E(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ae(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.E(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.ae(t),[null])
case"mutable":H.d(J.E(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.d(J.E(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ae(t),[null])
s.fixed$length=Array
return s
case"map":return this.eu(a)
case"sendport":return this.ev(a)
case"raw sendport":H.d(J.E(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.es(a)
case"function":H.d(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.E(a[0],"capability"))
return new H.ar(a[1])
case"dart":H.d(J.E(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.ae(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.V(a[t]))
return a},
eu:function(a){var t,s,r,q,p
H.d(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.L()
C.a.l(this.b,r)
t=J.lP(t,this.ger()).eZ(0)
for(q=J.a0(s),p=0;p<t.length;++p)r.i(0,t[p],this.V(q.h(s,p)))
return r},
ev:function(a){var t,s,r,q,p,o,n
H.d(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.co(r)
if(o==null)return
n=new H.bl(o,s)}else n=new H.c7(t,r,s)
C.a.l(this.b,n)
return n},
es:function(a){var t,s,r,q,p,o
H.d(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a0(t),p=J.a0(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.V(p.h(s,o))
return r}}
H.fF.prototype={}
H.hi.prototype={
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
H.dr.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eV.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hm.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jd.prototype={
$1:function(a){if(!!J.u(a).$isba)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
H.iW.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iX.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iY.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iZ.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j_.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b8.prototype={
k:function(a){return"Closure '"+H.dt(this).trim()+"'"},
$isjp:1,
gf5:function(){return this},
$D:null}
H.h6.prototype={}
H.fT.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bu.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bu))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.aX(this.a)
else s=typeof t!=="object"?J.ap(t):H.aX(t)
return(s^H.aX(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fB(t)}}
H.hk.prototype={
k:function(a){return this.a}}
H.e2.prototype={
k:function(a){return this.a}}
H.fK.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hx.prototype={
k:function(a){return C.i.a3("Assertion failed: ",P.jo(this.a))}}
H.aF.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.ap(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aF){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ag.prototype={
gj:function(a){return this.a},
gai:function(a){return this.a===0},
gE:function(a){return new H.eY(this,[H.aA(this,0)])},
gcL:function(a){return H.jw(this.gE(this),new H.eU(this),H.aA(this,0),H.aA(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bN(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bN(s,b)}else return this.eF(b)},
eF:function(a){var t=this.d
if(t==null)return!1
return this.ah(this.at(t,this.ag(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ac(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ac(r,b)
return s==null?null:s.b}else return this.eG(b)},
eG:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.at(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aP()
this.b=t}this.bD(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aP()
this.c=s}this.bD(s,b,c)}else{r=this.d
if(r==null){r=this.aP()
this.d=r}q=this.ag(b)
p=this.at(r,q)
if(p==null)this.aS(r,q,[this.aQ(b,c)])
else{o=this.ah(p,b)
if(o>=0)p[o].b=c
else p.push(this.aQ(b,c))}}},
ak:function(a,b){if(typeof b==="string")return this.bT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bT(this.c,b)
else return this.eH(b)},
eH:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.at(t,this.ag(a))
r=this.ah(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bX(q)
return q.b},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aw:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a3(this))
t=t.c}},
bD:function(a,b,c){var t=this.ac(a,b)
if(t==null)this.aS(a,b,this.aQ(b,c))
else t.b=c},
bT:function(a,b){var t
if(a==null)return
t=this.ac(a,b)
if(t==null)return
this.bX(t)
this.bO(a,b)
return t.b},
aQ:function(a,b){var t,s
t=new H.eX(a,b,null,null,[null,null])
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
ag:function(a){return J.ap(a)&0x3ffffff},
ah:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
k:function(a){return P.mu(this)},
ac:function(a,b){return a[b]},
at:function(a,b){return a[b]},
aS:function(a,b,c){H.d(c!=null)
a[b]=c},
bO:function(a,b){delete a[b]},
bN:function(a,b){return this.ac(a,b)!=null},
aP:function(){var t=Object.create(null)
this.aS(t,"<non-identifier-key>",t)
this.bO(t,"<non-identifier-key>")
return t},
$ismk:1}
H.eU.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eX.prototype={}
H.eY.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eZ(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eZ.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sbC(null)
return!1}else{this.sbC(t.a)
this.c=this.c.c
return!0}}},
sbC:function(a){this.d=a}}
H.iS.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.t]}}}
H.iU.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.t]}}}
H.bK.prototype={
gB:function(a){return C.ag},
$isbK:1}
H.bf.prototype={$isbf:1}
H.fa.prototype={
gB:function(a){return C.ah}}
H.dj.prototype={
gj:function(a){return a.length},
$ism:1,
$asm:function(){},
$isp:1,
$asp:function(){}}
H.dk.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
a[b]=c}}
H.dl.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.di.prototype={
gB:function(a){return C.ai},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]},
$iseE:1}
H.fb.prototype={
gB:function(a){return C.aj},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
H.fc.prototype={
gB:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fd.prototype={
gB:function(a){return C.al},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskn:1}
H.fe.prototype={
gB:function(a){return C.am},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.ff.prototype={
gB:function(a){return C.aq},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskM:1}
H.fg.prototype={
gB:function(a){return C.ar},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskN:1}
H.dm.prototype={
gB:function(a){return C.as},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fh.prototype={
gB:function(a){return C.at},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.P(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskO:1}
H.bL.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.o]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bM.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.M]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.M]}}
H.bN.prototype={
$asm:function(){},
$asc:function(){return[P.M]},
$asp:function(){},
$asb:function(){return[P.M]}}
H.bO.prototype={
$asm:function(){},
$asc:function(){return[P.o]},
$asp:function(){},
$asb:function(){return[P.o]}}
P.hA.prototype={
$1:function(a){var t,s
H.j0()
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
$0:function(){H.j0()
this.a.$0()},
$S:function(){return{func:1}}}
P.hC.prototype={
$0:function(){H.j0()
this.a.$0()},
$S:function(){return{func:1}}}
P.W.prototype={}
P.eI.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.O(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.O(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eH.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bM(r)}else if(t.b===0&&!this.b)this.d.O(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hG.prototype={}
P.hy.prototype={
b3:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.au("Future already completed"))
t.bF(b)}}
P.iw.prototype={
b3:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.au("Future already completed"))
t.aa(b)}}
P.c1.prototype={
eM:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.bc(this.d,a.a)},
eB:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bq(s,{func:1,args:[P.n,P.bT]}))return t.eV(s,a.a,a.b)
else return t.bc(s,a.a)}}
P.J.prototype={
be:function(a,b){var t,s,r
t=$.w
if(t!==C.d){t.toString
if(b!=null)b=P.n1(b,t)}s=new P.J(0,t,null,[null])
r=b==null?1:3
this.aJ(new P.c1(null,s,r,a,b,[H.aA(this,0),null]))
return s},
az:function(a){return this.be(a,null)},
f4:function(a){var t,s
t=$.w
s=new P.J(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aA(this,0)
this.aJ(new P.c1(null,s,8,a,null,[t,t]))
return s},
bH:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
aJ:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jH(this.c,"$isc1")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.aJ(a)
return}this.bH(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bn(null,null,t,new P.hS(this,a))}},
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
t.a=this.ad(a)
s=this.b
s.toString
P.bn(null,null,s,new P.i_(t,this))}},
aR:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ad(t)},
ad:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aa:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.cb(a,"$isW",t,"$asW"))if(H.cb(a,"$isJ",t,null))P.hV(a,this)
else P.kS(a,this)
else{s=this.aR()
H.d(this.a<4)
this.a=4
this.c=a
P.bk(this,s)}},
bM:function(a){var t
H.d(this.a<4)
H.d(!J.u(a).$isW)
t=this.aR()
H.d(this.a<4)
this.a=4
this.c=a
P.bk(this,t)},
O:function(a,b){var t
H.d(this.a<4)
t=this.aR()
H.d(this.a<4)
this.a=8
this.c=new P.b7(a,b)
P.bk(this,t)},
dJ:function(a){return this.O(a,null)},
bF:function(a){var t
H.d(this.a<4)
if(H.cb(a,"$isW",this.$ti,"$asW")){this.dH(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bn(null,null,t,new P.hU(this,a))},
dH:function(a){var t
if(H.cb(a,"$isJ",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bn(null,null,t,new P.hZ(this,a))}else P.hV(a,this)
return}P.kS(a,this)},
dG:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bn(null,null,t,new P.hT(this,a,b))},
$isW:1,
gaU:function(){return this.a},
ge0:function(){return this.c}}
P.hS.prototype={
$0:function(){P.bk(this.a,this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$0:function(){P.bk(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hW.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aa(a)},
$S:function(){return{func:1,args:[,]}}}
P.hX.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.O(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hY.prototype={
$0:function(){this.a.O(this.b,this.c)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){this.a.bM(this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){P.hV(this.b,this.a)},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){this.a.O(this.b,this.c)},
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
t=q.b.b.ct(q.d)}catch(n){s=H.N(n)
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
return}if(!!J.u(t).$isW){if(t instanceof P.J&&t.gaU()>=4){if(t.gaU()===8){q=t
H.d(q.gaU()===8)
p=this.b
p.b=q.ge0()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.az(new P.i3(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i3.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i1.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.bc(r.d,this.c)}catch(q){t=H.N(q)
s=H.am(q)
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
if(q.eM(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eB(t)
p.a=!1}}catch(o){s=H.N(o)
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
P.dG.prototype={}
P.bU.prototype={
gj:function(a){var t,s
t={}
s=new P.J(0,$.w,null,[P.o])
t.a=0
this.cn(new P.h_(t),!0,new P.h0(t,s),s.gbL())
return s},
gb5:function(a){var t,s
t={}
s=new P.J(0,$.w,null,[H.ad(this,"bU",0)])
t.a=null
t.a=this.cn(new P.fY(t,this,s),!0,new P.fZ(s),s.gbL())
return s}}
P.h_.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h0.prototype={
$0:function(){this.b.aa(this.a.a)},
$S:function(){return{func:1}}}
P.fY.prototype={
$1:function(a){P.mW(this.a.a,this.c,a)},
$S:function(){return H.nc(function(a){return{func:1,args:[a]}},this.b,"bU")}}
P.fZ.prototype={
$0:function(){var t,s,r,q
try{r=H.d8()
throw H.e(r)}catch(q){t=H.N(q)
s=H.am(q)
P.mY(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fX.prototype={}
P.iE.prototype={
$0:function(){return this.a.aa(this.b)},
$S:function(){return{func:1}}}
P.b7.prototype={
k:function(a){return H.f(this.a)},
$isba:1}
P.iD.prototype={}
P.iH.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bQ()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ih.prototype={
eW:function(a){var t,s,r
try{if(C.d===$.w){a.$0()
return}P.kY(null,null,this,a)}catch(r){t=H.N(r)
s=H.am(r)
P.iG(null,null,this,t,s)}},
eX:function(a,b){var t,s,r
try{if(C.d===$.w){a.$1(b)
return}P.kZ(null,null,this,a,b)}catch(r){t=H.N(r)
s=H.am(r)
P.iG(null,null,this,t,s)}},
ed:function(a){return new P.ij(this,a)},
b0:function(a){return new P.ii(this,a)},
ee:function(a){return new P.ik(this,a)},
h:function(a,b){return},
ct:function(a){if($.w===C.d)return a.$0()
return P.kY(null,null,this,a)},
bc:function(a,b){if($.w===C.d)return a.$1(b)
return P.kZ(null,null,this,a,b)},
eV:function(a,b,c){if($.w===C.d)return a.$2(b,c)
return P.n2(null,null,this,a,b,c)}}
P.ij.prototype={
$0:function(){return this.a.ct(this.b)},
$S:function(){return{func:1}}}
P.ii.prototype={
$0:function(){return this.a.eW(this.b)},
$S:function(){return{func:1}}}
P.ik.prototype={
$1:function(a){return this.a.eX(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dI.prototype={
ag:function(a){return H.nv(a)&0x3ffffff},
ah:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i9.prototype={
gw:function(a){var t=new P.c4(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dK(b)},
dK:function(a){var t=this.d
if(t==null)return!1
return this.as(t[this.ar(a)],a)>=0},
co:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.dT(a)},
dT:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ar(a)]
r=this.as(s,a)
if(r<0)return
return J.br(s,r).gdM()},
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
r=s}return this.bI(r,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mU()
this.d=t}s=this.ar(b)
r=t[s]
if(r==null){q=[this.aL(b)]
H.d(q!=null)
t[s]=q}else{if(this.as(r,b)>=0)return!1
r.push(this.aL(b))}return!0},
ak:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bJ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bJ(this.c,b)
else return this.dV(0,b)},
dV:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ar(b)]
r=this.as(s,b)
if(r<0)return!1
this.bK(s.splice(r,1)[0])
return!0},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bI:function(a,b){var t
if(a[b]!=null)return!1
t=this.aL(b)
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
aL:function(a){var t,s
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
ar:function(a){return J.ap(a)&0x3ffffff},
as:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.ia.prototype={
gdM:function(){return this.a}}
P.c4.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sa9(null)
return!1}else{this.sa9(t.a)
this.c=this.c.b
return!0}}},
sa9:function(a){this.d=a}}
P.i6.prototype={}
P.dd.prototype={}
P.y.prototype={
gw:function(a){return new H.de(a,this.gj(a),0,null,[H.ad(a,"y",0)])},
t:function(a,b){return this.h(a,b)},
cp:function(a,b){return new H.bH(a,b,[H.ad(a,"y",0),null])},
eA:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a3(a))}return s},
k:function(a){return P.eS(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f3.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.f_.prototype={
gw:function(a){return new P.ib(this,this.c,this.d,this.b,null,this.$ti)},
gai:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.F(P.C(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
U:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eS(this,"{","}")},
cr:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.d8());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
S:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bQ();++this.d},
bQ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
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
this.sbV(H.D(t,[b]))},
sbV:function(a){this.a=a},
$asc:null}
P.ib.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.F(new P.a3(t))
s=this.d
if(s===this.b){this.sa9(null)
return!1}this.sa9(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa9:function(a){this.e=a}}
P.fN.prototype={
L:function(a,b){var t
for(t=J.bt(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eS(this,"{","}")},
$isc:1,
$asc:null}
P.fM.prototype={}
P.bR.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.az.prototype={}
P.H.prototype={}
P.bv.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bv))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.aT(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m9(H.mC(this))
s=P.cj(H.mA(this))
r=P.cj(H.mw(this))
q=P.cj(H.mx(this))
p=P.cj(H.mz(this))
o=P.cj(H.mB(this))
n=P.ma(H.my(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.bv]}}
P.M.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.aQ.prototype={
aE:function(a,b){return C.b.aE(this.a,b.gdL())},
aD:function(a,b){return C.b.aD(this.a,b.gdL())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aQ))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ef()
s=this.a
if(s<0)return"-"+new P.aQ(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.ee().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isH:1,
$asH:function(){return[P.aQ]}}
P.ee.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.ef.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.ba.prototype={}
P.cf.prototype={
k:function(a){return"Assertion failed"}}
P.bQ.prototype={
k:function(a){return"Throw of null."}}
P.aq.prototype={
gaN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaM:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaN()+s+r
if(!this.a)return q
p=this.gaM()
o=P.jo(this.b)
return q+p+": "+H.f(o)}}
P.dv.prototype={
gaN:function(){return"RangeError"},
gaM:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eO.prototype={
gaN:function(){return"RangeError"},
gaM:function(){H.d(this.a)
if(J.ln(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.v.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dE.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.au.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a3.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jo(t))+"."}}
P.dy.prototype={
k:function(a){return"Stack Overflow"},
$isba:1}
P.e7.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hR.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.eh.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.F(P.k2(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kt(b,"expando$values")
return s==null?null:H.kt(s,t)}}
P.o.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.X.prototype={
aB:function(a,b){return new H.dF(this,b,[H.ad(this,"X",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga_:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.d8())
s=t.gq()
if(t.p())throw H.e(H.ms())
return s},
t:function(a,b){var t,s,r
if(b<0)H.F(P.aY(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
k:function(a){return P.mq(this,"(",")")}}
P.d9.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aD.prototype={}
P.aE.prototype={
gv:function(a){return P.n.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.U.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.n.prototype={constructor:P.n,$isn:1,
A:function(a,b){return this===b},
gv:function(a){return H.aX(this)},
k:function(a){return H.fB(this)},
gB:function(a){return new H.aF(H.iP(this),null)},
toString:function(){return this.k(this)}}
P.bT.prototype={}
P.t.prototype={$isH:1,
$asH:function(){return[P.t]}}
P.bV.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga0:function(){return this.a}}
W.l.prototype={}
W.dW.prototype={
k:function(a){return String(a)},
$isa:1}
W.dX.prototype={
k:function(a){return String(a)},
$isa:1}
W.a2.prototype={$isn:1}
W.e0.prototype={
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
W.cg.prototype={}
W.aN.prototype={$isa:1,$isaN:1}
W.aO.prototype={
bg:function(a,b,c){if(c!=null)return this.dO(a,b,P.nd(c,null))
return this.dP(a,b)},
cR:function(a,b){return this.bg(a,b,null)},
dO:function(a,b,c){return a.getContext(b,c)},
dP:function(a,b){return a.getContext(b)},
$isaO:1}
W.ch.prototype={
av:function(a,b,c){return a.addColorStop(b,c)}}
W.ci.prototype={
ca:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ez:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aC:function(a){return P.iK(a.getContextAttributes())}}
W.aP.prototype={$isa:1,
gj:function(a){return a.length}}
W.e4.prototype={$isa:1}
W.A.prototype={$isn:1}
W.b9.prototype={
bG:function(a,b){var t,s
t=$.$get$kb()
s=t[b]
if(typeof s==="string")return s
s=this.e3(a,b)
t[b]=s
return s},
e3:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mb()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e5.prototype={}
W.e8.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ck.prototype={}
W.bw.prototype={
e8:function(a,b){return a.adoptNode(b)},
cS:function(a,b){return a.getElementById(b)},
eQ:function(a,b){return a.querySelector(b)}}
W.cl.prototype={$isa:1}
W.ea.prototype={
k:function(a){return String(a)}}
W.cm.prototype={
en:function(a,b){return a.createHTMLDocument(b)}}
W.eb.prototype={
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cn.prototype={
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.co.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gY(a))+" x "+H.f(this.gX(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isI)return!1
return a.left===t.gb7(b)&&a.top===t.gbf(b)&&this.gY(a)===t.gY(b)&&this.gX(a)===t.gX(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gY(a)
q=this.gX(a)
return W.kV(W.b5(W.b5(W.b5(W.b5(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gX:function(a){return a.height},
gb7:function(a){return a.left},
gbf:function(a){return a.top},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isI:1,
$asI:function(){}}
W.ec.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
$isp:1,
$asp:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.ed.prototype={
gj:function(a){return a.length}}
W.V.prototype={
geb:function(a){return new W.hK(a)},
k:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kj
if(t==null){t=H.D([],[W.dp])
s=new W.dq(t)
C.a.l(t,W.kT(null))
C.a.l(t,W.kW())
$.kj=s
d=s}else d=t
t=$.ki
if(t==null){t=new W.dL(d)
$.ki=t
c=t}else{t.a=d
c=t}}if($.aB==null){t=document
s=t.implementation
s=(s&&C.M).en(s,"")
$.aB=s
$.jn=s.createRange()
s=$.aB
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aB.head;(t&&C.N).P(t,r)}t=$.aB
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jH(s,"$isaN")}t=$.aB
if(!!this.$isaN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aB.body;(t&&C.o).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.Z,a.tagName)){t=$.jn;(t&&C.F).cT(t,q)
t=$.jn
p=(t&&C.F).el(t,b)}else{q.innerHTML=b
p=$.aB.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.aB.body
if(q==null?t!=null:q!==t)J.lQ(q)
c.bn(p)
C.r.e8(document,p)
return p},
em:function(a,b,c){return this.M(a,b,c,null)},
d2:function(a,b,c,d){a.textContent=null
this.P(a,this.M(a,b,c,d))},
d1:function(a,b){return this.d2(a,b,null,null)},
a4:function(a,b){return a.getAttribute(b)},
dW:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isn:1,
$isV:1,
$ish:1,
$isr:1,
geY:function(a){return a.tagName}}
W.iI.prototype={
$1:function(a){return!!J.u(a).$isV},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$isn:1,$isi:1}
W.h.prototype={
dF:function(a,b,c,d){return a.addEventListener(b,H.bp(c,1),!1)},
dY:function(a,b,c,d){return a.removeEventListener(b,H.bp(c,1),!1)},
$isn:1,
$ish:1}
W.a4.prototype={$isn:1}
W.eB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isp:1,
$asp:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.eC.prototype={
gj:function(a){return a.length}}
W.eG.prototype={
gj:function(a){return a.length}}
W.a5.prototype={$isn:1}
W.cs.prototype={}
W.eK.prototype={
gj:function(a){return a.length}}
W.bE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isp:1,
$asp:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.ct.prototype={}
W.eL.prototype={
H:function(a,b){return a.send(b)}}
W.bF.prototype={}
W.bb.prototype={$isbb:1}
W.bc.prototype={$isbc:1}
W.aR.prototype={$isn:1,$isV:1,$ish:1,$isaR:1,$isr:1}
W.eP.prototype={$isa:1,$isV:1}
W.aV.prototype={$isn:1,$isi:1,$isaV:1}
W.f1.prototype={
k:function(a){return String(a)}}
W.bI.prototype={}
W.f6.prototype={
gj:function(a){return a.length}}
W.f7.prototype={
f6:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bJ.prototype={}
W.a6.prototype={$isn:1}
W.f8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.O.prototype={$isn:1,$isi:1,$isO:1}
W.fi.prototype={$isa:1}
W.R.prototype={
ga_:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.au("No elements"))
if(s>1)throw H.e(new P.au("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lq(t,c,C.D.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.cr(t,t.length,-1,null,[H.ad(t,"B",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asc:function(){return[W.r]},
$asdd:function(){return[W.r]},
$asb:function(){return[W.r]},
$asbR:function(){return[W.r]}}
W.r.prototype={
eR:function(a){var t=a.parentNode
if(t!=null)J.bs(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d6(a):t},
P:function(a,b){return a.appendChild(b)},
dX:function(a,b){return a.removeChild(b)},
dZ:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
$ish:1,
$isr:1,
gba:function(a){return a.previousSibling}}
W.dn.prototype={
bb:function(a){return a.previousNode()}}
W.bP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isp:1,
$asp:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.fr.prototype={$isa:1}
W.ft.prototype={
gj:function(a){return a.length}}
W.a7.prototype={$isn:1,
gj:function(a){return a.length}}
W.fw.prototype={
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
W.fz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fA.prototype={
H:function(a,b){return a.send(b)}}
W.du.prototype={
el:function(a,b){return a.createContextualFragment(b)},
cT:function(a,b){return a.selectNodeContents(b)}}
W.fJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dw.prototype={
H:function(a,b){return a.send(b)}}
W.fL.prototype={
gj:function(a){return a.length}}
W.fO.prototype={$isa:1}
W.a8.prototype={$isn:1,$ish:1}
W.fP.prototype={
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
W.a9.prototype={$isn:1}
W.fR.prototype={
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
W.aa.prototype={$isn:1,
gj:function(a){return a.length}}
W.fW.prototype={
h:function(a,b){return this.bP(a,b)},
aw:function(a,b){var t,s
for(t=0;!0;++t){s=this.dS(a,t)
if(s==null)return
b.$2(s,this.bP(a,s))}},
gj:function(a){return a.length},
bP:function(a,b){return a.getItem(b)},
dS:function(a,b){return a.key(b)}}
W.Y.prototype={$isn:1}
W.aj.prototype={}
W.dz.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
t=W.mc("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).L(0,new W.R(t))
return s}}
W.h4.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.M(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga_(t)
r.toString
t=new W.R(r)
q=t.ga_(t)
s.toString
q.toString
new W.R(s).L(0,new W.R(q))
return s}}
W.h5.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.M(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga_(t)
s.toString
r.toString
new W.R(s).L(0,new W.R(r))
return s}}
W.bW.prototype={$isbW:1}
W.ab.prototype={$isn:1,$ish:1}
W.Z.prototype={$isn:1,$ish:1}
W.h8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isp:1,
$asp:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.h9.prototype={
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
W.ha.prototype={
gj:function(a){return a.length}}
W.ac.prototype={$isn:1}
W.aZ.prototype={$isn:1,$isi:1,$isaZ:1}
W.he.prototype={
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
W.hf.prototype={
gj:function(a){return a.length}}
W.bi.prototype={}
W.hh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dD.prototype={
bb:function(a){return a.previousNode()}}
W.aG.prototype={}
W.hn.prototype={
k:function(a){return String(a)},
$isa:1}
W.bj.prototype={$isbj:1}
W.hp.prototype={
gj:function(a){return a.length}}
W.hs.prototype={
gj:function(a){return a.length}}
W.ht.prototype={
H:function(a,b){return a.send(b)}}
W.b0.prototype={
gep:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$isn:1,
$isi:1,
$isO:1,
$isb0:1}
W.c0.prototype={
gea:function(a){var t,s
t=P.U
s=new P.J(0,$.w,null,[t])
this.dN(a)
this.e_(a,W.l0(new W.hv(new P.iw(s,[t]))))
return s},
e_:function(a,b){return a.requestAnimationFrame(H.bp(b,1))},
dN:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hv.prototype={
$1:function(a){this.a.b3(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hw.prototype={$isa:1}
W.b1.prototype={$isa:1}
W.hF.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.u(b)
if(!t.$isI)return!1
s=a.left
r=t.gb7(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbf(b)
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
return W.kV(W.b5(W.b5(W.b5(W.b5(0,t),s),r),q))},
$isI:1,
$asI:function(){},
gX:function(a){return a.height},
gb7:function(a){return a.left},
gbf:function(a){return a.top},
gY:function(a){return a.width}}
W.dH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[P.I]},
$isc:1,
$asc:function(){return[P.I]},
$isp:1,
$asp:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.hH.prototype={
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
W.i5.prototype={$isa:1}
W.dJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$ism:1,
$asm:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isp:1,
$asp:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.iq.prototype={$isa:1}
W.it.prototype={
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
W.iu.prototype={
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
W.iB.prototype={$isa:1}
W.iC.prototype={$isa:1}
W.hD.prototype={
aw:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.ae)(t),++p){o=t[p]
b.$2(o,q.a4(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.t])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdQ:function(){return this.a}}
W.hK.prototype={
h:function(a,b){return J.jk(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hO.prototype={
cn:function(a,b,c,d){return W.ak(this.a,this.b,a,!1,H.aA(this,0))}}
W.hL.prototype={}
W.hP.prototype={
eg:function(a){if(this.b==null)return
this.e6()
this.b=null
this.sdU(null)
return},
e5:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lo(r,this.c,t,!1)}},
e6:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lp(r,this.c,t,!1)}},
dA:function(a,b,c,d,e){this.e5()},
sdU:function(a){this.d=a}}
W.hQ.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c3.prototype={
a1:function(a){return $.$get$kU().C(0,W.bx(a))},
T:function(a,b,c){var t,s,r
t=W.bx(a)
s=$.$get$jA()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dB:function(a){var t,s
t=$.$get$jA()
if(t.gai(t)){for(s=0;s<262;++s)t.i(0,C.X[s],W.nk())
for(s=0;s<12;++s)t.i(0,C.u[s],W.nl())}}}
W.B.prototype={
gw:function(a){return new W.cr(a,this.gj(a),-1,null,[H.ad(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dq.prototype={
a1:function(a){return C.a.c_(this.a,new W.fk(a))},
T:function(a,b,c){return C.a.c_(this.a,new W.fj(a,b,c))}}
W.fk.prototype={
$1:function(a){return a.a1(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fj.prototype={
$1:function(a){return a.T(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c6.prototype={
a1:function(a){return this.a.C(0,W.bx(a))},
T:function(a,b,c){var t,s
t=W.bx(a)
s=this.c
if(s.C(0,H.f(t)+"::"+b))return this.d.e9(c)
else if(s.C(0,"*::"+b))return this.d.e9(c)
else{s=this.b
if(s.C(0,H.f(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.f(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
dD:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aB(0,new W.ir())
s=b.aB(0,new W.is())
this.b.L(0,t)
r=this.c
r.L(0,C.C)
r.L(0,s)}}
W.ir.prototype={
$1:function(a){return!C.a.C(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.is.prototype={
$1:function(a){return C.a.C(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.ix.prototype={
T:function(a,b,c){if(this.d9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jk(a,"template")==="")return this.e.C(0,b)
return!1}}
W.iy.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iv.prototype={
a1:function(a){var t=J.u(a)
if(!!t.$isbS)return!1
t=!!t.$isG
if(t&&W.bx(a)==="foreignObject")return!1
if(t)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.i.bq(b,"on"))return!1
return this.a1(a)}}
W.cr.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbR(J.br(this.a,t))
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
au:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bs(t,a)}else J.bs(b,a)},
e2:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lG(a)
r=J.jk(s.gdQ(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.N(n)}p="element unprintable"
try{p=J.aL(a)}catch(n){H.N(n)}try{o=W.bx(a)
this.e1(a,b,t,p,o,s,r)}catch(n){if(H.N(n) instanceof P.aq)throw n
else{this.au(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
e1:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.au(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a1(a)){this.au(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aL(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.T(a,"is",g)){this.au(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.D(t.slice(0),[H.aA(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.T(a,J.lU(p),q.a4(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a4(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a4(t,p)
q.dW(t,p)}}if(!!J.u(a).$isbW)this.bn(a.content)}}
W.iz.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e2(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bs(r,a)}else J.bs(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lH(t)}catch(q){H.N(q)
r=t
J.bs(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.r,W.r]}}}
W.by.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bz.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bD.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cu.prototype={}
W.cO.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cN.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cF.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.cP.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.d1.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.d4.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.d5.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.d6.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.d7.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
P.iJ.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.t,,]}}}
P.i8.prototype={
eO:function(){return Math.random()}}
P.ig.prototype={}
P.I.prototype={$asI:null}
P.dV.prototype={$isa:1}
P.aM.prototype={$isa:1}
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
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.ew.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.af.prototype={}
P.aC.prototype={$isa:1}
P.eM.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$isn:1}
P.eW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.f4.prototype={$isa:1}
P.f5.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isn:1}
P.fl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
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
P.bS.prototype={$isa:1,$isbS:1}
P.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.G.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.dp])
C.a.l(t,W.kT(null))
C.a.l(t,W.kW())
C.a.l(t,new W.iv())
c=new W.dL(new W.dq(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).em(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.ga_(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isa:1,
$isG:1}
P.h2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h3.prototype={$isa:1}
P.dA.prototype={}
P.h7.prototype={$isa:1}
P.bX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$isn:1}
P.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.ho.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hq.prototype={$isa:1}
P.hr.prototype={$isa:1}
P.c2.prototype={$isa:1}
P.il.prototype={$isa:1}
P.im.prototype={$isa:1}
P.io.prototype={$isa:1}
P.cx.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.cC.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cG.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cZ.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cV.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cX.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.e_.prototype={
gj:function(a){return a.length}}
P.fH.prototype={
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
aC:function(a){return P.iK(a.getContextAttributes())},
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
t=J.u(g)
if(!!t.$isbc||g==null)s=!0
else s=!1
if(s){this.aV(a,b,c,d,e,f,P.l5(g))
return}if(!!t.$isaR)s=!0
else s=!1
if(s){this.aW(a,b,c,d,e,f,g)
return}if(!!t.$isaO)s=!0
else s=!1
if(s){this.aX(a,b,c,d,e,f,g)
return}if(!!t.$isbj)s=!0
else s=!1
if(s){this.aY(a,b,c,d,e,f,g)
return}if(!!t.$isbb)t=!0
else t=!1
if(t){this.aZ(a,b,c,d,e,f,g)
return}throw H.e(P.dY("Incorrect number or type of arguments"))},
cv:function(a,b,c,d,e,f,g){return this.bd(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
P.fI.prototype={
ec:function(a,b){return a.beginTransformFeedback(b)},
ef:function(a,b){return a.bindVertexArray(b)},
eo:function(a){return a.createVertexArray()},
ew:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ex:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ey:function(a){return a.endTransformFeedback()},
f2:function(a,b,c,d){this.e4(a,b,c,d)
return},
e4:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f3:function(a,b,c){return a.vertexAttribDivisor(b,c)},
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
aC:function(a){return P.iK(a.getContextAttributes())},
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
t=J.u(g)
if(!!t.$isbc||g==null)s=!0
else s=!1
if(s){this.aV(a,b,c,d,e,f,P.l5(g))
return}if(!!t.$isaR)s=!0
else s=!1
if(s){this.aW(a,b,c,d,e,f,g)
return}if(!!t.$isaO)s=!0
else s=!1
if(s){this.aX(a,b,c,d,e,f,g)
return}if(!!t.$isbj)s=!0
else s=!1
if(s){this.aY(a,b,c,d,e,f,g)
return}if(!!t.$isbb)t=!0
else t=!1
if(t){this.aZ(a,b,c,d,e,f,g)
return}throw H.e(P.dY("Incorrect number or type of arguments"))},
cv:function(a,b,c,d,e,f,g){return this.bd(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
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
P.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iK(this.dR(a,b))},
i:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dR:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aD]},
$isb:1,
$asb:function(){return[P.aD]}}
P.cw.prototype={$isc:1,
$asc:function(){return[P.aD]},
$isb:1,
$asb:function(){return[P.aD]}}
P.cT.prototype={$isc:1,
$asc:function(){return[P.aD]},
$isb:1,
$asb:function(){return[P.aD]}}
B.j6.prototype={
$1:function(a){$.$get$iL().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aV]}}}
B.j7.prototype={
$1:function(a){$.$get$iL().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aV]}}}
B.j8.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.na=t
$.nb=C.b.a7(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jK=s-C.b.I(window.innerWidth,2)
$.lg=-(t-C.b.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.O]}}}
B.j9.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cd=t-C.b.I(window.innerWidth,2)
$.ce=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$cc().i(0,"right",!0)
else $.$get$cc().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.O]}}}
B.ja.prototype={
$1:function(a){if(a.button===2)$.$get$cc().i(0,"right",null)
else $.$get$cc().i(0,"left",null)},
$S:function(){return{func:1,args:[W.O]}}}
B.fm.prototype={
dl:function(a,b,c,d){var t
d.toString
W.ak(d,W.nj().$1(d),new B.fn(this),!1,W.b0)
W.ak(d,"mousemove",new B.fo(this),!1,W.O)
t=W.aZ
W.ak(d,"touchstart",new B.fp(),!1,t)
W.ak(d,"touchmove",new B.fq(this),!1,t)
B.nz(null)}}
B.fn.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ay.gep(a)*r.k3
if(C.c.a7(r.fy,t)>0)r.fy=H.a_(C.c.a7(r.fy,t))}catch(q){s=H.N(q)
P.an(s)}},
$S:function(){return{func:1,args:[W.b0]}}}
B.fo.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a_(t.go+C.b.a7($.jK,$.cd)*0.01)
s=t.id
r=$.ce
q=$.lg
t.id=H.a_(s+(r-q)*0.01)
$.cd=$.jK
$.ce=q}},
$S:function(){return{func:1,args:[W.O]}}}
B.fp.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a2(t.clientX)
C.c.a2(t.clientY)
$.cd=s
C.c.a2(t.clientX)
$.ce=C.c.a2(t.clientY)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.fq.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a2(t.clientX)
t=C.c.a2(t.clientY)
r=this.a
r.go=H.a_(r.go+C.b.a7(s,$.cd)*0.01)
r.id=H.a_(r.id+($.ce-t)*0.01)
$.cd=s
$.ce=t},
$S:function(){return{func:1,args:[W.aZ]}}}
G.f9.prototype={}
G.hl.prototype={
F:function(a,b){var t=this.d
if(H.ay(!t.D(0,a)))H.aI("uniform "+a+" already set")
t.i(0,a,b)},
by:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aF(H.iP(this),null).k(0)+"}["+this.a+"]"],[P.t])
for(s=this.d,r=s.gE(s),r=r.gw(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.aj(t,"\n")}}
G.e1.prototype={}
G.e3.prototype={
cl:function(a,b,c){J.lD(this.a,b)
if(c>0)J.m_(this.a,b,c)}}
G.eA.prototype={}
G.eJ.prototype={
bw:function(a){var t=this.e
H.d(!t.D(0,a))
H.d(C.i.bq(a,"a"))
switch($.$get$S().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.x]))
break
case"vec3":t.i(0,a,H.D([],[T.q]))
break
case"vec4":t.i(0,a,H.D([],[T.aH]))
break
case"float":t.i(0,a,H.D([],[P.M]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.o]]))
break
default:if(H.ay(!1))H.aI("unknown type for "+a)}},
de:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.eA(t,t+1,t+2,t+3))},
ap:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.q(new Float32Array(3))
q.Z(r)
C.a.l(t,q)}},
dc:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<24;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.x(p))}},
dd:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.q(new Float32Array(3))
p.Z(q)
s.l(t,p)}},
di:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.D(s,[P.o])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gf8(o)
r[q+1]=o.gf9(o)
r[q+2]=o.gfa(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.ae)(t),++p){m=t[p]
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
p=$.$get$S().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aj(t," ")}}
G.dC.prototype={}
G.bZ.prototype={}
G.dg.prototype={}
G.dh.prototype={
bv:function(a,b,c){var t,s
if(C.i.aK(a,0)===105){if(H.ay(C.b.aH(b.length,c)===this.z))H.aI("ChangeAttribute "+this.z)}else{t=C.b.aH(b.length,c)
if(H.ay(t===(this.ch.length/3|0)))H.aI("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dQ(t.a,34962,s)
J.jP(t.a,34962,b,35048)},
dj:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a8:function(a,b,c){var t,s,r,q,p,o
t=J.jM(a,0)===105
if(t&&this.z===0)this.z=C.b.aH(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.jg(r.a))
this.bv(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ay(p.D(0,a)))H.aI("unexpected attribute "+a)
o=p.h(0,a)
J.dR(r.a,this.e)
r.cl(0,o,t?1:0)
s=s.h(0,a)
p=q.bx()
J.dQ(r.a,34962,s)
J.k1(r.a,o,p,5126,!1,0,0)},
ap:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.jg(s.a))
this.ch=a
this.bv("aPosition",a,3)
r=$.$get$S().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.D(0,"aPosition"))
p=q.h(0,"aPosition")
J.dR(s.a,this.e)
s.cl(0,p,0)
t=t.h(0,"aPosition")
q=r.bx()
J.dQ(s.a,34962,t)
J.k1(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gw(r);r.p();){q=r.gq()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.aj(s,"  ")},
saO:function(a){this.cx=a}}
G.fu.prototype={
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
t.a5(0,0,1/(p*s))
t.a5(1,1,1/p)
t.a5(2,2,(q+r)/o)
t.a5(3,2,-1)
t.a5(2,3,2*r*q/o)},
by:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.q(new Float32Array(H.k(3)))
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
k=r?s.gaA(n):1
if(!!s.$isq){j=s.gm(n)
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
G.fG.prototype={
dt:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c4(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.C(0,q))C.a.l(r,q)}return r},
dw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jM(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.j4("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.F("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jl(r.a,k,m)
else if(!!J.u(m).$iskn)J.lY(r.a,k,m)
break
case"float":if(l.c===0)J.lW(r.a,k,m)
else if(!!J.u(m).$iseE)J.lX(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aJ(m,"$isai").a
J.k0(r.a,k,!1,j)}else if(!!J.u(m).$iseE)J.k0(r.a,k,!1,m)
else if(H.ay(!1))H.aI("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.P.gf7(H.aJ(m,"$isnI"))
J.k_(r.a,k,!1,j)}else if(!!J.u(m).$iseE)J.k_(r.a,k,!1,m)
else if(H.ay(!1))H.aI("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jZ(i,k,H.aJ(m,"$isaH").a)
else J.jZ(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jY(i,k,H.aJ(m,"$isq").a)
else J.jY(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jX(i,k,H.aJ(m,"$isx").a)
else J.jX(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a3(33984,this.ch)
J.jN(r.a,j)
j=H.aJ(m,"$isbY").b
J.b6(r.a,3553,j)
j=this.ch
J.jl(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a3(33984,this.ch)
J.jN(r.a,j)
j=H.aJ(m,"$isbY").b
J.b6(r.a,34067,j)
j=this.ch
J.jl(r.a,k,j)
this.ch=this.ch+1
break
default:H.j4("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.E(m,!0)
i=r.a
if(j)J.dS(i,2929)
else J.jh(i,2929)
break
case"cStencilFunc":H.aJ(m,"$isdC")
j=m.a
i=r.a
if(j===1281)J.jh(i,2960)
else{J.dS(i,2960)
i=m.b
h=m.c
J.lS(r.a,j,i,h)}break
case"cDepthWrite":J.lx(r.a,m)
break
case"cBlendEquation":H.aJ(m,"$isbZ")
j=m.a
i=r.a
if(j===1281)J.jh(i,3042)
else{J.dS(i,3042)
i=m.b
h=m.c
J.lt(r.a,i,h)
J.ls(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aQ(1000*(s-new P.bv(t,!1).a)).k(0)},
dh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lZ(t.a,this.r)
this.ch=0
this.z.U(0)
for(s=0;s<2;++s){r=b[s]
this.dw(r.a,r.by())}q=this.Q
q.U(0)
for(p=a.cy,p=p.gE(p),p=p.gw(p);p.p();)q.l(0,p.gq())
o=this.dt()
if(o.length!==0)P.an("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dR(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.dj()
m=a.Q
l=a.z
if(n)J.lr(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lB(k,q,p,m,0,l)
else J.lA(k,q,p,m,0)}else{m=t.a
if(l>1)J.lz(m,q,0,p,l)
else J.ly(m,q,0,p)}if(n)J.lE(t.a)},
aI:function(a,b){return this.dh(a,b,null)},
dm:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){n=t[o]
r.i(0,n,J.jU(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){n=t[o]
r.i(0,n,J.jU(q.a,p,n))}}}
G.z.prototype={
bx:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bh.prototype={
bt:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$S().D(0,q))
H.d(!C.a.C(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aF(t)},
ao:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.ae)(a),++r){q=a[r]
if(H.ay($.$get$S().D(0,q)))H.aI("missing uniform "+q)
H.d(!C.a.C(s,q))
C.a.l(s,q)}C.a.aF(s)},
bu:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$S().D(0,r))
H.d(!C.a.C(t,r))
C.a.l(t,r)}C.a.aF(t)},
dn:function(a,b){H.d(this.b==null)
this.b=this.dz(!0,a,b)},
aq:function(a){return this.dn(a,null)},
dz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.ae)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.L(q,b)
C.a.l(q,"}")
return C.a.aj(q,"\n")}}
G.fQ.prototype={}
G.dB.prototype={
bz:function(a,b){var t=this.e
if(t!==1)J.lT(a.a,b,34046,t)
J.dU(a.a,b,10240,this.r)
J.dU(a.a,b,10241,this.f)
if(this.b){J.dU(a.a,b,10242,33071)
J.dU(a.a,b,10243,33071)}}}
G.bY.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eN.prototype={
dq:function(a){var t,s
t=this.d
s=this.c
J.b6(t.a,s,this.b)
J.jW(t.a,s,0,6408,6408,5121,a)}}
G.e6.prototype={
dg:function(a,b,c){var t,s,r,q,p,o
t=J.a0(c)
H.d(t.gj(c)===6)
s=this.d
J.jV(s.a,37440,1)
r=this.c
J.b6(s.a,r,this.b)
for(q=0;q<6;++q){p=C.Y[q]
o=t.h(c,q)
J.jW(s.a,p,0,6408,6408,5121,o)}t=this.e
t.bz(s,r)
H.d(J.jT(s.a)===0)
J.b6(s.a,r,null)
t.b=!0}}
R.ds.prototype={
cs:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.an("size change "+H.f(s)+" "+H.f(r))
this.df(s,r)
J.m0(this.go.a,0,0,s,r)}}
R.fU.prototype={
dC:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mP("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bG(r,"float")
r.setProperty(p,"left","")
p=C.x.bG(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.P(t,s)}return t},
dr:function(a,b,c){var t,s,r
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
J.je(this.a,s)
r=this.dC(b,c,90,30)
this.d=r
J.je(this.a,r)
t=t.createElement("div")
this.c=t
J.je(this.a,t)}}
R.fV.prototype={
dv:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.f1(s,2)+" fps"
t=this.c;(t&&C.q).d1(t,b)
r=C.b.I(30*C.z.eh(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).P(t,q)},
du:function(a){return this.dv(a,"")}}
D.f0.prototype={
$1:function(a){return this.a.b3(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.iR.prototype={
$2:function(a,b){var t=536870911&a+J.ap(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.n]}}}
T.ai.prototype={
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
k:function(a){return"[0] "+this.an(0).k(0)+"\n[1] "+this.an(1).k(0)+"\n[2] "+this.an(2).k(0)+"\n[3] "+this.an(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ai){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.iQ(this.a)},
an:function(a){var t,s
t=new Float32Array(H.k(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aH(t)},
a6:function(){var t=this.a
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
gv:function(a){return A.iQ(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.q.prototype={
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
if(b instanceof T.q){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.iQ(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb8())},
gb8:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b9:function(a){var t,s,r
t=Math.sqrt(this.gb8())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b4:function(a){var t,s
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
t=new T.q(new Float32Array(H.k(3)))
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
gv:function(a){return A.iQ(this.a)},
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
gaA:function(a){return this.a[3]}}
M.j1.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.a=b3+0
s=this.c
s.go=H.a_(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.a_(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.a_(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.a_(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.a_(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.a_(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.a_(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.a_(C.c.ei(s.id,-1.4707963267948965,1.4707963267948965))
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
l=new T.q(new Float32Array(H.k(3)))
l.u(0,1,0)
k=s.e
j=k.a
j[0]=m[12]
j[1]=m[13]
j[2]=m[14]
j=new Float32Array(H.k(3))
i=new T.q(j)
i.Z(k)
j[0]=j[0]-p[0]
j[1]=j[1]-p[1]
j[2]=j[2]-p[2]
i.b9(0)
h=l.cd(i)
h.b9(0)
g=i.cd(h)
g.b9(0)
p=h.b4(k)
f=g.b4(k)
k=i.b4(k)
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
n=Math.sqrt(n.gb8())
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
c=this.e
e=this.f
a2=this.d
c.aI(this.r,[e,a2])
c.aI(this.x,[e,a2])
this.y.aI(this.Q,[this.z,a2])
C.az.gea(window).az(this)
this.b.du(t.a)},
$S:function(){return{func:1,v:true,args:[P.U]}}}
M.j2.prototype={
$1:function(a){this.b.F("uCubeTexture",G.m8(this.a,"stars",a))
this.c.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.d6=J.a.prototype.k
J.bG.prototype.d8=J.bG.prototype.k
P.X.prototype.d7=P.X.prototype.aB
W.V.prototype.aG=W.V.prototype.M
W.c6.prototype.d9=W.c6.prototype.T;(function installTearOffs(){installTearOff(H.b3.prototype,"geK",0,0,0,null,["$0"],["ay"],0)
installTearOff(H.al.prototype,"gcU",0,0,0,null,["$1"],["J"],2)
installTearOff(H.b2.prototype,"ger",0,0,0,null,["$1"],["V"],2)
installTearOff(P,"n6",1,0,0,null,["$1"],["mM"],1)
installTearOff(P,"n7",1,0,0,null,["$1"],["mN"],1)
installTearOff(P,"n8",1,0,0,null,["$1"],["mO"],1)
installTearOff(P,"l4",1,0,0,null,["$0"],["n4"],0)
installTearOff(P.J.prototype,"gbL",0,0,0,null,["$2","$1"],["O","dJ"],5)
installTearOff(P,"ne",1,0,0,null,["$2"],["m6"],7)
installTearOff(W,"nj",1,0,0,null,["$1"],["md"],8)
installTearOff(W,"nk",1,0,0,null,["$4"],["mS"],4)
installTearOff(W,"nl",1,0,0,null,["$4"],["mT"],4)
installTearOff(W.dn.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(W.dD.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(R.ds.prototype,"geU",0,0,0,null,["$1"],["cs"],6)
installTearOff(M,"l8",1,0,0,null,["$0"],["nt"],0)})();(function inheritance(){inherit(P.n,null)
var t=P.n
inherit(H.jr,t)
inherit(J.a,t)
inherit(J.dZ,t)
inherit(P.X,t)
inherit(H.de,t)
inherit(P.d9,t)
inherit(H.cq,t)
inherit(H.b8,t)
inherit(H.id,t)
inherit(H.b3,t)
inherit(H.hM,t)
inherit(H.b4,t)
inherit(H.ic,t)
inherit(H.hE,t)
inherit(H.bg,t)
inherit(H.hb,t)
inherit(H.ar,t)
inherit(H.al,t)
inherit(H.b2,t)
inherit(H.fF,t)
inherit(H.hi,t)
inherit(P.ba,t)
inherit(H.dK,t)
inherit(H.aF,t)
inherit(H.ag,t)
inherit(H.eX,t)
inherit(H.eZ,t)
inherit(P.W,t)
inherit(P.hG,t)
inherit(P.c1,t)
inherit(P.J,t)
inherit(P.dG,t)
inherit(P.bU,t)
inherit(P.fX,t)
inherit(P.b7,t)
inherit(P.iD,t)
inherit(P.fN,t)
inherit(P.ia,t)
inherit(P.c4,t)
inherit(P.bR,t)
inherit(P.y,t)
inherit(P.ib,t)
inherit(P.az,t)
inherit(P.H,t)
inherit(P.bv,t)
inherit(P.U,t)
inherit(P.aQ,t)
inherit(P.dy,t)
inherit(P.hR,t)
inherit(P.eh,t)
inherit(P.b,t)
inherit(P.aD,t)
inherit(P.aE,t)
inherit(P.bT,t)
inherit(P.t,t)
inherit(P.bV,t)
inherit(W.e5,t)
inherit(W.hD,t)
inherit(W.c3,t)
inherit(W.B,t)
inherit(W.dq,t)
inherit(W.c6,t)
inherit(W.iv,t)
inherit(W.cr,t)
inherit(W.dp,t)
inherit(W.ip,t)
inherit(W.dL,t)
inherit(P.i8,t)
inherit(P.ig,t)
inherit(G.f9,t)
inherit(G.e3,t)
inherit(G.eA,t)
inherit(G.eJ,t)
inherit(G.dC,t)
inherit(G.bZ,t)
inherit(G.z,t)
inherit(G.bh,t)
inherit(G.dB,t)
inherit(G.bY,t)
inherit(R.fU,t)
inherit(T.ai,t)
inherit(T.x,t)
inherit(T.q,t)
inherit(T.aH,t)
t=J.a
inherit(J.eT,t)
inherit(J.dc,t)
inherit(J.bG,t)
inherit(J.aS,t)
inherit(J.bd,t)
inherit(J.aT,t)
inherit(H.bK,t)
inherit(H.bf,t)
inherit(W.h,t)
inherit(W.a2,t)
inherit(W.cg,t)
inherit(W.ch,t)
inherit(W.ci,t)
inherit(W.A,t)
inherit(W.cu,t)
inherit(W.e8,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.cm,t)
inherit(W.cn,t)
inherit(W.co,t)
inherit(W.cF,t)
inherit(W.ed,t)
inherit(W.i,t)
inherit(W.cE,t)
inherit(W.a5,t)
inherit(W.eK,t)
inherit(W.cD,t)
inherit(W.bb,t)
inherit(W.bc,t)
inherit(W.f1,t)
inherit(W.f6,t)
inherit(W.a6,t)
inherit(W.cB,t)
inherit(W.fi,t)
inherit(W.dn,t)
inherit(W.cI,t)
inherit(W.fr,t)
inherit(W.bi,t)
inherit(W.a7,t)
inherit(W.cA,t)
inherit(W.aj,t)
inherit(W.du,t)
inherit(W.a9,t)
inherit(W.cz,t)
inherit(W.aa,t)
inherit(W.fW,t)
inherit(W.Y,t)
inherit(W.cy,t)
inherit(W.ha,t)
inherit(W.ac,t)
inherit(W.cO,t)
inherit(W.hf,t)
inherit(W.dD,t)
inherit(W.hn,t)
inherit(W.hs,t)
inherit(W.hF,t)
inherit(W.cN,t)
inherit(W.cM,t)
inherit(W.cL,t)
inherit(W.cH,t)
inherit(W.cK,t)
inherit(W.cJ,t)
inherit(W.iB,t)
inherit(W.iC,t)
inherit(P.as,t)
inherit(P.cx,t)
inherit(P.at,t)
inherit(P.cC,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.fD,t)
inherit(P.cv,t)
inherit(P.av,t)
inherit(P.cG,t)
inherit(P.hr,t)
inherit(P.e_,t)
inherit(P.fH,t)
inherit(P.fI,t)
inherit(P.iA,t)
inherit(P.cw,t)
t=J.bG
inherit(J.fv,t)
inherit(J.b_,t)
inherit(J.aU,t)
inherit(J.jq,J.aS)
t=J.bd
inherit(J.db,t)
inherit(J.da,t)
t=P.X
inherit(H.c,t)
inherit(H.df,t)
inherit(H.dF,t)
t=H.c
inherit(H.be,t)
inherit(H.eY,t)
inherit(H.eg,H.df)
t=P.d9
inherit(H.f2,t)
inherit(H.hu,t)
t=H.be
inherit(H.bH,t)
inherit(P.f_,t)
t=H.b8
inherit(H.jb,t)
inherit(H.jc,t)
inherit(H.i7,t)
inherit(H.hN,t)
inherit(H.eQ,t)
inherit(H.eR,t)
inherit(H.ie,t)
inherit(H.hc,t)
inherit(H.hd,t)
inherit(H.jd,t)
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(H.j_,t)
inherit(H.h6,t)
inherit(H.eU,t)
inherit(H.iS,t)
inherit(H.iT,t)
inherit(H.iU,t)
inherit(P.hA,t)
inherit(P.hz,t)
inherit(P.hB,t)
inherit(P.hC,t)
inherit(P.eI,t)
inherit(P.eH,t)
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
inherit(P.iE,t)
inherit(P.iH,t)
inherit(P.ij,t)
inherit(P.ii,t)
inherit(P.ik,t)
inherit(P.f3,t)
inherit(P.ee,t)
inherit(P.ef,t)
inherit(W.iI,t)
inherit(W.hv,t)
inherit(W.hQ,t)
inherit(W.fk,t)
inherit(W.fj,t)
inherit(W.ir,t)
inherit(W.is,t)
inherit(W.iy,t)
inherit(W.iz,t)
inherit(P.iJ,t)
inherit(B.j6,t)
inherit(B.j7,t)
inherit(B.j8,t)
inherit(B.j9,t)
inherit(B.ja,t)
inherit(B.fn,t)
inherit(B.fo,t)
inherit(B.fp,t)
inherit(B.fq,t)
inherit(D.f0,t)
inherit(A.iR,t)
inherit(M.j1,t)
inherit(M.j2,t)
t=H.hE
inherit(H.bl,t)
inherit(H.c7,t)
t=P.ba
inherit(H.dr,t)
inherit(H.eV,t)
inherit(H.hm,t)
inherit(H.hk,t)
inherit(H.e2,t)
inherit(H.fK,t)
inherit(P.cf,t)
inherit(P.bQ,t)
inherit(P.aq,t)
inherit(P.v,t)
inherit(P.dE,t)
inherit(P.au,t)
inherit(P.a3,t)
inherit(P.e7,t)
t=H.h6
inherit(H.fT,t)
inherit(H.bu,t)
inherit(H.hx,P.cf)
t=H.bf
inherit(H.fa,t)
inherit(H.dj,t)
t=H.dj
inherit(H.bM,t)
inherit(H.bL,t)
inherit(H.bN,H.bM)
inherit(H.dk,H.bN)
inherit(H.bO,H.bL)
inherit(H.dl,H.bO)
t=H.dk
inherit(H.di,t)
inherit(H.fb,t)
t=H.dl
inherit(H.fc,t)
inherit(H.fd,t)
inherit(H.fe,t)
inherit(H.ff,t)
inherit(H.fg,t)
inherit(H.dm,t)
inherit(H.fh,t)
t=P.hG
inherit(P.hy,t)
inherit(P.iw,t)
inherit(P.ih,P.iD)
inherit(P.dI,H.ag)
inherit(P.fM,P.fN)
inherit(P.i6,P.fM)
inherit(P.i9,P.i6)
inherit(P.dd,P.bR)
t=P.U
inherit(P.M,t)
inherit(P.o,t)
t=P.aq
inherit(P.dv,t)
inherit(P.eO,t)
t=W.h
inherit(W.r,t)
inherit(W.bA,t)
inherit(W.e4,t)
inherit(W.eC,t)
inherit(W.bF,t)
inherit(W.bJ,t)
inherit(W.fA,t)
inherit(W.dw,t)
inherit(W.fO,t)
inherit(W.a8,t)
inherit(W.bz,t)
inherit(W.ab,t)
inherit(W.Z,t)
inherit(W.by,t)
inherit(W.hp,t)
inherit(W.ht,t)
inherit(W.c0,t)
inherit(W.hw,t)
inherit(W.b1,t)
inherit(W.iq,t)
t=W.r
inherit(W.V,t)
inherit(W.aP,t)
inherit(W.bw,t)
inherit(W.cl,t)
inherit(W.hI,t)
t=W.V
inherit(W.l,t)
inherit(P.G,t)
t=W.l
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.aN,t)
inherit(W.aO,t)
inherit(W.ck,t)
inherit(W.eG,t)
inherit(W.cs,t)
inherit(W.aR,t)
inherit(W.eP,t)
inherit(W.bI,t)
inherit(W.fL,t)
inherit(W.dz,t)
inherit(W.h4,t)
inherit(W.h5,t)
inherit(W.bW,t)
inherit(W.i5,t)
inherit(W.bD,W.bA)
inherit(W.e0,W.bD)
inherit(W.b9,W.cu)
inherit(W.eb,W.cn)
inherit(W.d7,W.cF)
inherit(W.ec,W.d7)
inherit(W.a4,W.cg)
inherit(W.d5,W.cE)
inherit(W.eB,W.d5)
inherit(W.d_,W.cD)
inherit(W.bE,W.d_)
inherit(W.ct,W.bw)
inherit(W.eL,W.bF)
inherit(W.aG,W.i)
t=W.aG
inherit(W.aV,t)
inherit(W.O,t)
inherit(W.aZ,t)
inherit(W.f7,W.bJ)
inherit(W.d1,W.cB)
inherit(W.f8,W.d1)
inherit(W.R,P.dd)
inherit(W.d0,W.cI)
inherit(W.bP,W.d0)
t=W.bi
inherit(W.ft,t)
inherit(W.fJ,t)
inherit(W.hh,t)
inherit(W.cR,W.cA)
inherit(W.fw,W.cR)
inherit(W.fz,W.aj)
inherit(W.bC,W.bz)
inherit(W.fP,W.bC)
inherit(W.cU,W.cz)
inherit(W.fR,W.cU)
inherit(W.cS,W.cy)
inherit(W.h8,W.cS)
inherit(W.bB,W.by)
inherit(W.h9,W.bB)
inherit(W.d2,W.cO)
inherit(W.he,W.d2)
inherit(W.bj,W.bI)
inherit(W.b0,W.O)
inherit(W.cP,W.cN)
inherit(W.dH,W.cP)
inherit(W.cW,W.cM)
inherit(W.hH,W.cW)
inherit(W.hJ,W.co)
inherit(W.d6,W.cL)
inherit(W.i4,W.d6)
inherit(W.d4,W.cH)
inherit(W.dJ,W.d4)
inherit(W.d3,W.cK)
inherit(W.it,W.d3)
inherit(W.cY,W.cJ)
inherit(W.iu,W.cY)
inherit(W.hK,W.hD)
inherit(W.hO,P.bU)
inherit(W.hL,W.hO)
inherit(W.hP,P.fX)
inherit(W.ix,W.c6)
inherit(P.I,P.ig)
t=P.G
inherit(P.aC,t)
inherit(P.aM,t)
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
inherit(P.ey,t)
inherit(P.ez,t)
inherit(P.eD,t)
inherit(P.f4,t)
inherit(P.f5,t)
inherit(P.fs,t)
inherit(P.bS,t)
inherit(P.h3,t)
inherit(P.hq,t)
inherit(P.c2,t)
inherit(P.il,t)
inherit(P.im,t)
inherit(P.io,t)
t=P.aC
inherit(P.dV,t)
inherit(P.eF,t)
inherit(P.af,t)
inherit(P.eM,t)
inherit(P.h2,t)
inherit(P.dA,t)
inherit(P.ho,t)
inherit(P.cQ,P.cx)
inherit(P.eW,P.cQ)
inherit(P.cZ,P.cC)
inherit(P.fl,P.cZ)
inherit(P.fE,P.af)
inherit(P.cX,P.cv)
inherit(P.h1,P.cX)
t=P.dA
inherit(P.h7,t)
inherit(P.bX,t)
inherit(P.cV,P.cG)
inherit(P.hg,P.cV)
inherit(P.cT,P.cw)
inherit(P.fS,P.cT)
t=G.f9
inherit(G.fQ,t)
inherit(G.hl,t)
inherit(G.dh,t)
inherit(G.fG,t)
inherit(G.e1,G.fQ)
inherit(B.fm,G.e1)
t=G.hl
inherit(G.dg,t)
inherit(G.fu,t)
t=G.bY
inherit(G.eN,t)
inherit(G.e6,t)
inherit(R.ds,G.fu)
inherit(R.fV,R.fU)
mixin(H.bL,P.y)
mixin(H.bM,P.y)
mixin(H.bN,H.cq)
mixin(H.bO,H.cq)
mixin(P.bR,P.y)
mixin(W.by,P.y)
mixin(W.bz,P.y)
mixin(W.bA,P.y)
mixin(W.bB,W.B)
mixin(W.bC,W.B)
mixin(W.bD,W.B)
mixin(W.cu,W.e5)
mixin(W.cO,P.y)
mixin(W.cA,P.y)
mixin(W.cH,P.y)
mixin(W.cI,P.y)
mixin(W.cJ,P.y)
mixin(W.cK,P.y)
mixin(W.cL,P.y)
mixin(W.cM,P.y)
mixin(W.cN,P.y)
mixin(W.cy,P.y)
mixin(W.cz,P.y)
mixin(W.cB,P.y)
mixin(W.cD,P.y)
mixin(W.cE,P.y)
mixin(W.cF,P.y)
mixin(W.cP,W.B)
mixin(W.cR,W.B)
mixin(W.d0,W.B)
mixin(W.d1,W.B)
mixin(W.d_,W.B)
mixin(W.d4,W.B)
mixin(W.d5,W.B)
mixin(W.d6,W.B)
mixin(W.d7,W.B)
mixin(W.cS,W.B)
mixin(W.cU,W.B)
mixin(W.cW,W.B)
mixin(W.cY,W.B)
mixin(W.d2,W.B)
mixin(W.d3,W.B)
mixin(P.cx,P.y)
mixin(P.cv,P.y)
mixin(P.cC,P.y)
mixin(P.cG,P.y)
mixin(P.cQ,W.B)
mixin(P.cZ,W.B)
mixin(P.cV,W.B)
mixin(P.cX,W.B)
mixin(P.cw,P.y)
mixin(P.cT,W.B)})();(function constants(){C.o=W.aN.prototype
C.w=W.aO.prototype
C.m=W.ch.prototype
C.p=W.ci.prototype
C.x=W.b9.prototype
C.q=W.ck.prototype
C.M=W.cm.prototype
C.N=W.cs.prototype
C.r=W.ct.prototype
C.O=J.a.prototype
C.a=J.aS.prototype
C.z=J.da.prototype
C.b=J.db.prototype
C.P=J.dc.prototype
C.c=J.bd.prototype
C.i=J.aT.prototype
C.W=J.aU.prototype
C.a_=H.di.prototype
C.D=W.bP.prototype
C.E=J.fv.prototype
C.F=W.du.prototype
C.K=W.dz.prototype
C.v=J.b_.prototype
C.ay=W.b0.prototype
C.az=W.c0.prototype
C.L=new P.i8()
C.d=new P.ih()
C.y=new P.aQ(0)
C.Q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.R=function(hooks) {
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

C.S=function(getTagFallback) {
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
C.T=function() {
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
C.U=function(hooks) {
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
C.V=function(hooks) {
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
C.X=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.t])
C.Y=makeConstList([34070,34069,34072,34071,34074,34073])
C.Z=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.t=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.t])
C.u=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.t])
C.a0=new G.z("vec3","vertex btangents",0)
C.e=new G.z("vec3","",0)
C.a1=new G.z("vec4","delta from light",0)
C.n=new G.z("","",0)
C.G=new G.z("vec3","vertex coordinates",0)
C.a2=new G.z("vec3","vertex binormals",0)
C.H=new G.z("vec4","for wireframe",0)
C.a3=new G.z("vec4","per vertex color",0)
C.a4=new G.z("float","for normal maps",0)
C.j=new G.z("mat4","",0)
C.a6=new G.z("mat4","",4)
C.a5=new G.z("mat4","",128)
C.f=new G.z("float","",0)
C.a7=new G.z("float","",4)
C.a8=new G.z("float","depth for shadowmaps",0)
C.h=new G.z("sampler2D","",0)
C.a9=new G.z("float","for bump maps",0)
C.aa=new G.z("vec2","texture uvs",0)
C.ab=new G.z("float","time since program start in sec",0)
C.k=new G.z("vec2","",0)
C.ac=new G.z("samplerCube","",0)
C.l=new G.z("vec4","",0)
C.ad=new G.z("vec3","vertex normals",0)
C.ae=new G.z("sampler2DShadow","",0)
C.I=new G.z("vec3","per vertex color",0)
C.J=new G.z("mat3","",0)
C.af=new G.z("vec3","vertex tangents",0)
C.ag=H.K("nD")
C.ah=H.K("nE")
C.ai=H.K("eE")
C.aj=H.K("nF")
C.ak=H.K("nG")
C.al=H.K("kn")
C.am=H.K("nH")
C.an=H.K("kq")
C.ao=H.K("aE")
C.ap=H.K("t")
C.aq=H.K("kM")
C.ar=H.K("kN")
C.as=H.K("nJ")
C.at=H.K("kO")
C.au=H.K("az")
C.av=H.K("M")
C.aw=H.K("o")
C.ax=H.K("U")})();(function staticFields(){$.ku="$cachedFunction"
$.kv="$cachedInvocation"
$.k8=null
$.k6=null
$.jB=!1
$.jF=null
$.l1=null
$.lk=null
$.iM=null
$.iV=null
$.jG=null
$.bm=null
$.c8=null
$.c9=null
$.jC=!1
$.w=C.d
$.kk=0
$.aB=null
$.jn=null
$.kj=null
$.ki=null
$.kg=null
$.kf=null
$.ke=null
$.kd=null
$.na=0
$.nb=0
$.jK=0
$.lg=0
$.cd=0
$.ce=0
$.nA=!1
$.la=0})();(function lazyInitializers(){lazy($,"kc","$get$kc",function(){return H.ld("_$dart_dartClosure")})
lazy($,"js","$get$js",function(){return H.ld("_$dart_js")})
lazy($,"ko","$get$ko",function(){return H.mo()})
lazy($,"kp","$get$kp",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kk
$.kk=t+1
t="expando$key$"+t}return new P.eh(null,t,[P.o])})
lazy($,"kB","$get$kB",function(){return H.aw(H.hj({
toString:function(){return"$receiver$"}}))})
lazy($,"kC","$get$kC",function(){return H.aw(H.hj({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kD","$get$kD",function(){return H.aw(H.hj(null))})
lazy($,"kE","$get$kE",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kI","$get$kI",function(){return H.aw(H.hj(void 0))})
lazy($,"kJ","$get$kJ",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kG","$get$kG",function(){return H.aw(H.kH(null))})
lazy($,"kF","$get$kF",function(){return H.aw(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kL","$get$kL",function(){return H.aw(H.kH(void 0))})
lazy($,"kK","$get$kK",function(){return H.aw(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jz","$get$jz",function(){return P.mL()})
lazy($,"km","$get$km",function(){return P.mQ(null,P.aE)})
lazy($,"ca","$get$ca",function(){return[]})
lazy($,"kb","$get$kb",function(){return{}})
lazy($,"kU","$get$kU",function(){return P.ju(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jA","$get$jA",function(){return P.L()})
lazy($,"iL","$get$iL",function(){return P.kr(P.o,P.az)})
lazy($,"cc","$get$cc",function(){return P.kr(P.t,P.az)})
lazy($,"kz","$get$kz",function(){return new G.dC(1281,0,4294967295)})
lazy($,"k4","$get$k4",function(){return new G.bZ(1281,1281,1281)})
lazy($,"k3","$get$k3",function(){return new G.bZ(32774,770,769)})
lazy($,"S","$get$S",function(){return P.aW(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a3,"aPosition",C.G,"aTexUV",C.aa,"aNormal",C.ad,"aBinormal",C.a2,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.af,"aBitangent",C.a0,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a1,"vCenter",C.H,"vDepth",C.a8,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ae,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ac,"uAnimationTable",C.h,"uTime",C.ab,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a5,"uLightDescs",C.a6,"uLightCount",C.f,"uLightTypes",C.a7,"uBumpScale",C.a9,"uNormalScale",C.a4])})
lazy($,"kP","$get$kP",function(){return C.L})
lazy($,"l7","$get$l7",function(){var t=new G.bh("CubeMap",null,[],[],[],[],0,P.L())
t.bt(["aPosition"])
t.bu(["vPosition"])
t.ao(["uPerspectiveViewMatrix","uModelMatrix"])
t.aq(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vPosition = normalize(aPosition);"])
return t})
lazy($,"l6","$get$l6",function(){var t=new G.bh("CubeMapF",null,[],[],[],[],0,P.L())
t.bu(["vPosition"])
t.ao(["uCubeTexture"])
t.aq(["oFragColor = texture( uCubeTexture, vPosition );"])
return t})
lazy($,"lj","$get$lj",function(){var t=new G.bh("PointSpritesV",null,[],[],[],[],0,P.L())
t.bt(["aPosition"])
t.ao(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.aq(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"li","$get$li",function(){var t=new G.bh("PointSpritesF",null,[],[],[],[],0,P.L())
t.ao(["uTexture"])
t.aq(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kR","$get$kR",function(){return[T.c_(0,0,1),T.c_(0,0,-1),T.c_(0,1,0),T.c_(0,-1,0),T.c_(1,0,0),T.c_(-1,0,0)]})
lazy($,"kX","$get$kX",function(){return["nx","px","ny","py","nz","pz"]})})()
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
mangledGlobalNames:{o:"int",M:"double",U:"num",t:"String",az:"bool",aE:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.az,args:[W.V,P.t,P.t,W.c3]},{func:1,v:true,args:[P.n],opt:[P.bT]},{func:1,v:true,args:[W.i]},{func:1,ret:P.o,args:[P.H,P.H]},{func:1,ret:P.t,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bK,ArrayBufferView:H.bf,DataView:H.fa,Float32Array:H.di,Float64Array:H.fb,Int16Array:H.fc,Int32Array:H.fd,Int8Array:H.fe,Uint16Array:H.ff,Uint32Array:H.fg,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.fh,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dW,HTMLAreaElement:W.dX,AudioTrack:W.a2,AudioTrackList:W.e0,Blob:W.cg,HTMLBodyElement:W.aN,HTMLCanvasElement:W.aO,CanvasGradient:W.ch,CanvasRenderingContext2D:W.ci,CDATASection:W.aP,CharacterData:W.aP,Comment:W.aP,ProcessingInstruction:W.aP,Text:W.aP,CompositorWorker:W.e4,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.b9,MSStyleCSSProperties:W.b9,CSS2Properties:W.b9,DataTransferItemList:W.e8,DeviceAcceleration:W.e9,HTMLDivElement:W.ck,XMLDocument:W.bw,Document:W.bw,DocumentFragment:W.cl,ShadowRoot:W.cl,DOMException:W.ea,DOMImplementation:W.cm,DOMPoint:W.eb,DOMPointReadOnly:W.cn,DOMRectReadOnly:W.co,DOMStringList:W.ec,DOMTokenList:W.ed,Element:W.V,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a4,FileList:W.eB,FileWriter:W.eC,HTMLFormElement:W.eG,Gamepad:W.a5,HTMLHeadElement:W.cs,History:W.eK,HTMLCollection:W.bE,HTMLFormControlsCollection:W.bE,HTMLOptionsCollection:W.bE,HTMLDocument:W.ct,XMLHttpRequest:W.eL,XMLHttpRequestUpload:W.bF,XMLHttpRequestEventTarget:W.bF,ImageBitmap:W.bb,ImageData:W.bc,HTMLImageElement:W.aR,HTMLInputElement:W.eP,KeyboardEvent:W.aV,Location:W.f1,HTMLAudioElement:W.bI,HTMLMediaElement:W.bI,MediaList:W.f6,MIDIOutput:W.f7,MIDIInput:W.bJ,MIDIPort:W.bJ,MimeType:W.a6,MimeTypeArray:W.f8,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,Navigator:W.fi,Attr:W.r,Node:W.r,NodeIterator:W.dn,NodeList:W.bP,RadioNodeList:W.bP,Path2D:W.fr,Perspective:W.ft,Plugin:W.a7,PluginArray:W.fw,PositionValue:W.fz,PresentationConnection:W.fA,Range:W.du,Rotation:W.fJ,RTCDataChannel:W.dw,DataChannel:W.dw,HTMLSelectElement:W.fL,SharedWorker:W.fO,SourceBuffer:W.a8,SourceBufferList:W.fP,SpeechGrammar:W.a9,SpeechGrammarList:W.fR,SpeechRecognitionResult:W.aa,Storage:W.fW,CSSStyleSheet:W.Y,StyleSheet:W.Y,CalcLength:W.aj,KeywordValue:W.aj,LengthValue:W.aj,NumberValue:W.aj,SimpleLength:W.aj,TransformValue:W.aj,StyleValue:W.aj,HTMLTableElement:W.dz,HTMLTableRowElement:W.h4,HTMLTableSectionElement:W.h5,HTMLTemplateElement:W.bW,TextTrack:W.ab,TextTrackCue:W.Z,VTTCue:W.Z,TextTrackCueList:W.h8,TextTrackList:W.h9,TimeRanges:W.ha,Touch:W.ac,TouchEvent:W.aZ,TouchList:W.he,TrackDefaultList:W.hf,Matrix:W.bi,Skew:W.bi,TransformComponent:W.bi,Translation:W.hh,TreeWalker:W.dD,CompositionEvent:W.aG,FocusEvent:W.aG,TextEvent:W.aG,SVGZoomEvent:W.aG,UIEvent:W.aG,URL:W.hn,HTMLVideoElement:W.bj,VideoTrackList:W.hp,VTTRegionList:W.hs,WebSocket:W.ht,WheelEvent:W.b0,Window:W.c0,DOMWindow:W.c0,Worker:W.hw,CompositorWorkerGlobalScope:W.b1,DedicatedWorkerGlobalScope:W.b1,ServiceWorkerGlobalScope:W.b1,SharedWorkerGlobalScope:W.b1,WorkerGlobalScope:W.b1,ClientRect:W.hF,ClientRectList:W.dH,DOMRectList:W.dH,CSSRuleList:W.hH,DocumentType:W.hI,DOMRect:W.hJ,GamepadList:W.i4,HTMLFrameSetElement:W.i5,NamedNodeMap:W.dJ,MozNamedAttrMap:W.dJ,ServiceWorker:W.iq,SpeechRecognitionResultList:W.it,StyleSheetList:W.iu,WorkerLocation:W.iB,WorkerNavigator:W.iC,SVGAElement:P.dV,SVGAnimateElement:P.aM,SVGAnimateMotionElement:P.aM,SVGAnimateTransformElement:P.aM,SVGAnimationElement:P.aM,SVGSetElement:P.aM,SVGFEBlendElement:P.ei,SVGFEColorMatrixElement:P.ej,SVGFEComponentTransferElement:P.ek,SVGFECompositeElement:P.el,SVGFEConvolveMatrixElement:P.em,SVGFEDiffuseLightingElement:P.en,SVGFEDisplacementMapElement:P.eo,SVGFEFloodElement:P.ep,SVGFEGaussianBlurElement:P.eq,SVGFEImageElement:P.er,SVGFEMergeElement:P.es,SVGFEMorphologyElement:P.et,SVGFEOffsetElement:P.eu,SVGFEPointLightElement:P.ev,SVGFESpecularLightingElement:P.ew,SVGFESpotLightElement:P.ex,SVGFETileElement:P.ey,SVGFETurbulenceElement:P.ez,SVGFilterElement:P.eD,SVGForeignObjectElement:P.eF,SVGCircleElement:P.af,SVGEllipseElement:P.af,SVGLineElement:P.af,SVGPathElement:P.af,SVGPolygonElement:P.af,SVGPolylineElement:P.af,SVGGeometryElement:P.af,SVGClipPathElement:P.aC,SVGDefsElement:P.aC,SVGGElement:P.aC,SVGSwitchElement:P.aC,SVGGraphicsElement:P.aC,SVGImageElement:P.eM,SVGLength:P.as,SVGLengthList:P.eW,SVGMarkerElement:P.f4,SVGMaskElement:P.f5,SVGNumber:P.at,SVGNumberList:P.fl,SVGPatternElement:P.fs,SVGPoint:P.fx,SVGPointList:P.fy,SVGRect:P.fD,SVGRectElement:P.fE,SVGScriptElement:P.bS,SVGStringList:P.h1,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.h2,SVGSymbolElement:P.h3,SVGTextContentElement:P.dA,SVGTextPathElement:P.h7,SVGTSpanElement:P.bX,SVGTextElement:P.bX,SVGTextPositioningElement:P.bX,SVGTransform:P.av,SVGTransformList:P.hg,SVGUseElement:P.ho,SVGViewElement:P.hq,SVGViewSpec:P.hr,SVGLinearGradientElement:P.c2,SVGRadialGradientElement:P.c2,SVGGradientElement:P.c2,SVGCursorElement:P.il,SVGFEDropShadowElement:P.im,SVGMPathElement:P.io,AudioBuffer:P.e_,WebGLRenderingContext:P.fH,WebGL2RenderingContext:P.fI,WebGL2RenderingContextBase:P.iA,SQLResultSetRowList:P.fS})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.bA.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"
W.bz.$nativeSuperclassTag="EventTarget"
W.bC.$nativeSuperclassTag="EventTarget"
W.by.$nativeSuperclassTag="EventTarget"
W.bB.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.ll(M.l8(),b)},[])
else (function(b){H.ll(M.l8(),b)})([])})})()