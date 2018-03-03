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
a[c]=function(){a[c]=function(){H.oI(b)}
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
return d?function(e){if(t===null)t=H.k5(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.k5(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.k5(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jP:function jP(a){this.a=a},
jU:function(a,b,c,d){if(!!a.$isd)return new H.er(a,b,[c,d])
return new H.dt(a,b,[c,d])},
dm:function(){return new P.am("No element")},
nj:function(){return new P.am("Too many elements")},
ni:function(){return new P.am("Too few elements")},
dJ:function(a,b,c,d){if(c-b<=32)H.nA(a,b,c,d)
else H.nz(a,b,c,d)},
nA:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.W(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.as(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
nz:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.c(t>32)
s=C.b.K(t+1,6)
r=a3+s
q=a4-s
p=C.b.K(a3+a4,2)
o=p-s
n=p+s
t=J.W(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.as(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.as(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.as(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.as(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.as(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.as(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.as(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.as(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.as(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.z(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dJ(a2,a3,g-2,a5)
H.dJ(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.z(a5.$2(t.h(a2,g),l),0);)++g
for(;J.z(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dJ(a2,g,f,a5)}else H.dJ(a2,g,f,a5)},
d:function d(){},
bm:function bm(){},
ds:function ds(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dt:function dt(a,b,c){this.a=a
this.b=b
this.$ti=c},
er:function er(a,b,c){this.a=a
this.b=b
this.$ti=c},
fi:function fi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dS:function dS(a,b,c){this.a=a
this.b=b
this.$ti=c},
hN:function hN(a,b,c){this.a=a
this.b=b
this.$ti=c},
cC:function cC(){},
dZ:function(a,b){var t=a.am(b)
if(!u.globalState.d.cy)u.globalState.f.as()
return t},
jo:function(){--u.globalState.f.b
H.c(u.globalState.f.b>=0)},
lW:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isb)throw H.e(P.cr("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.iz(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kR()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.i6(P.jT(null,H.ba),0)
r=P.p
s.sfg(new H.ak(0,null,null,null,null,null,0,[r,H.b9]))
s.sfj(new H.ak(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.iy()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.nd,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nS)}if(u.globalState.x)return
s=u.globalState.a++
q=P.al(null,null,null,r)
p=new H.bq(0,null,!1)
o=new H.b9(s,new H.ak(0,null,null,null,null,null,0,[r,H.bq]),q,u.createNewIsolate(),p,new H.au(H.ju()),new H.au(H.ju()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
q.j(0,0)
o.bM(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bz(a,{func:1,args:[,]}))o.am(new H.jA(t,a))
else if(H.bz(a,{func:1,args:[,,]}))o.am(new H.jB(t,a))
else o.am(a)
u.globalState.f.as()},
nS:function(a){var t=P.aH(["command","print","msg",a])
return new H.ao(!0,P.cf(null,P.p)).M(t)},
nf:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.ng()
return},
ng:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.w('Cannot extract URI from "'+t+'"'))},
nd:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b8(!0,[]).Z(b.data)
s=J.W(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.oq(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b8(!0,[]).Z(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b8(!0,[]).Z(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.al(null,null,null,k)
i=new H.bq(0,null,!1)
h=new H.b9(s,new H.ak(0,null,null,null,null,null,0,[k,H.bq]),j,u.createNewIsolate(),i,new H.au(H.ju()),new H.au(H.ju()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
j.j(0,0)
h.bM(0,i)
u.globalState.f.a.W(0,new H.ba(h,new H.f1(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.as()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mB(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.as()
break
case"close":u.globalState.ch.ar(0,$.$get$kS().h(0,a))
a.terminate()
u.globalState.f.as()
break
case"log":H.nc(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aH(["command","print","msg",t])
k=new H.ao(!0,P.cf(null,P.p)).M(k)
s.toString
self.postMessage(k)}else P.Y(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
nc:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aH(["command","log","msg",a])
r=new H.ao(!0,P.cf(null,P.p)).M(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.R(q)
t=H.ap(q)
s=P.cB(t)
throw H.e(s)}},
ne:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.l0=$.l0+("_"+s)
$.l1=$.l1+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.bv(s,r),q,t.r])
r=new H.f2(a,b,c,d,t)
if(e){t.c8(q,q)
u.globalState.f.a.W(0,new H.ba(t,r,"start isolate"))}else r.$0()},
nB:function(a,b){var t=new H.hv(!0,!1,null)
t.dU(a,b)
return t},
nV:function(a){return new H.b8(!0,[]).Z(new H.ao(!1,P.cf(null,P.p)).M(a))},
jA:function jA(a,b){this.a=a
this.b=b},
jB:function jB(a,b){this.a=a
this.b=b},
iz:function iz(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b9:function b9(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
iu:function iu(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(a){this.a=a},
ba:function ba(a,b,c){this.a=a
this.b=b
this.c=c},
iy:function iy(){},
f1:function f1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hZ:function hZ(){},
bv:function bv(a,b){this.b=a
this.a=b},
iB:function iB(a,b){this.a=a
this.b=b},
ch:function ch(a,b,c){this.b=a
this.c=b
this.a=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
au:function au(a){this.a=a},
ao:function ao(a,b){this.a=a
this.b=b},
b8:function b8(a,b){this.a=a
this.b=b},
oj:function(a){return u.types[a]},
os:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isr},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.Z(a)
if(typeof t!=="string")throw H.e(H.P(a))
return t},
ny:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fY(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
b1:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
l_:function(a,b){throw H.e(new P.bL(a,null,null))},
jW:function(a,b,c){var t,s
H.lA(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.l_(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.l_(a,c)},
kZ:function(a,b){throw H.e(new P.bL("Invalid double",a,null))},
b2:function(a,b){var t,s
H.lA(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kZ(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.mJ(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kZ(a,b)}return t},
dF:function(a){var t,s,r,q,p,o,n,m
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.t(a).$isb5){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.ae(q,0)===36)q=C.e.dr(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.e0(H.jc(a),0,null),u.mangledGlobalNames)},
fT:function(a){return"Instance of '"+H.dF(a)+"'"},
T:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nw:function(a){return a.b?H.T(a).getUTCFullYear()+0:H.T(a).getFullYear()+0},
nu:function(a){return a.b?H.T(a).getUTCMonth()+1:H.T(a).getMonth()+1},
nq:function(a){return a.b?H.T(a).getUTCDate()+0:H.T(a).getDate()+0},
nr:function(a){return a.b?H.T(a).getUTCHours()+0:H.T(a).getHours()+0},
nt:function(a){return a.b?H.T(a).getUTCMinutes()+0:H.T(a).getMinutes()+0},
nv:function(a){return a.b?H.T(a).getUTCSeconds()+0:H.T(a).getSeconds()+0},
ns:function(a){return a.b?H.T(a).getUTCMilliseconds()+0:H.T(a).getMilliseconds()+0},
jV:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
return a[b]},
l2:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
a[b]=c},
O:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
t=J.e5(a)
if(b<0||C.b.d5(b,t))return P.D(b,a,"index",null,t)
return P.fV(b,"index",null)},
P:function(a){return new P.ai(!0,a,null,null)},
lz:function(a){if(typeof a!=="number")throw H.e(H.P(a))
return a},
lA:function(a){if(typeof a!=="string")throw H.e(H.P(a))
return a},
e:function(a){var t
if(a==null)a=new P.bp()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lY})
t.name=""}else t.toString=H.lY
return t},
lY:function(){return J.Z(this.dartException)},
G:function(a){throw H.e(a)},
C:function(a){throw H.e(new P.a6(a))},
az:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ld:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jR:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f8(a,s,t?null:b.receiver)},
R:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jC(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b2(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jR(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dD(p,null))}}if(a instanceof TypeError){o=$.$get$l7()
n=$.$get$l8()
m=$.$get$l9()
l=$.$get$la()
k=$.$get$le()
j=$.$get$lf()
i=$.$get$lc()
$.$get$lb()
h=$.$get$lh()
g=$.$get$lg()
f=o.R(s)
if(f!=null)return t.$1(H.jR(s,f))
else{f=n.R(s)
if(f!=null){f.method="call"
return t.$1(H.jR(s,f))}else{f=m.R(s)
if(f==null){f=l.R(s)
if(f==null){f=k.R(s)
if(f==null){f=j.R(s)
if(f==null){f=i.R(s)
if(f==null){f=l.R(s)
if(f==null){f=h.R(s)
if(f==null){f=g.R(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dD(s,f==null?null:f.method))}}return t.$1(new H.hF(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dL()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ai(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dL()
return a},
ap:function(a){var t
if(a==null)return new H.dX(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dX(a,null)},
ow:function(a){if(a==null||typeof a!='object')return J.at(a)
else return H.b1(a)},
oh:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=a.length
for(r=0;r<s;){q=r+1
H.c(t)
p=a[r]
r=q+1
H.c(t)
b.i(0,p,a[q])}return b},
or:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dZ(b,new H.jj(a))
case 1:return H.dZ(b,new H.jk(a,d))
case 2:return H.dZ(b,new H.jl(a,d,e))
case 3:return H.dZ(b,new H.jm(a,d,e,f))
case 4:return H.dZ(b,new H.jn(a,d,e,f,g))}throw H.e(P.cB("Unsupported number of arguments for wrapped closure"))},
aP:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.or)
a.$identity=t
return t},
mV:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isb){t.$reflectionInfo=c
r=H.ny(t).r}else r=c
q=d?Object.create(new H.hb().constructor.prototype):Object.create(new H.bD(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.ky(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.oj,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kv:H.jK
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.ky(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mS:function(a,b,c,d){var t=H.jK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ky:function(a,b,c){var t,s,r,q
if(c)return H.mU(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mS(s,b==null?r!=null:b!==r,t,b)
return q},
mT:function(a,b,c,d){var t,s
t=H.jK
s=H.kv
switch(b?-1:a){case 0:throw H.e(new H.h3("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mU:function(a,b){var t,s,r,q
H.mR()
t=$.ku
if(t==null){t=H.kt("receiver")
$.ku=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mT(r,b==null?q!=null:b!==q,s,b)
return t},
k5:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.t(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.mV(a,b,t,!!d,e,f)},
jK:function(a){return a.a},
kv:function(a){return a.c},
mR:function(){var t=$.kw
if(t==null){t=H.kt("self")
$.kw=t}return t},
kt:function(a){var t,s,r,q,p
t=new H.bD("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
oW:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.aA(a,"String"))},
a3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aA(a,"double"))},
oV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.aA(a,"num"))},
o9:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.aA(a,"bool"))},
oq:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.aA(a,"int"))},
oy:function(a,b){throw H.e(H.aA(a,b.substring(3)))},
ox:function(a,b){var t=J.W(b)
throw H.e(H.kx(H.dF(a),t.aN(b,3,t.gl(b))))},
k8:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.oy(a,b)},
ar:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.ox(a,b)},
oU:function(a){if(a==null)return a
if(!!J.t(a).$isb)return a
throw H.e(H.aA(a,"List"))},
lE:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
bz:function(a,b){var t
if(a==null)return!1
t=H.lE(a)
return t==null?!1:H.lJ(t,b)},
oS:function(a,b){var t,s
if(a==null)return a
if($.k2)return a
$.k2=!0
try{if(H.bz(a,b))return a
t=H.aQ(b,null)
s=H.aA(a,t)
throw H.e(s)}finally{$.k2=!1}},
aA:function(a,b){return new H.hE("type '"+H.dF(a)+"' is not a subtype of type '"+b+"'")},
kx:function(a,b){return new H.ee("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aC:function(a){if(!0===a)return!1
if(!!J.t(a).$isjN)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.aA(a,"bool"))},
aO:function(a){throw H.e(new H.hT(a))},
c:function(a){if(H.aC(a))throw H.e(new P.cs(null))},
oI:function(a){throw H.e(new P.ei(a))},
ju:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lH:function(a){return u.getIsolateTag(a)},
N:function(a){return new H.aL(a,null)},
E:function(a,b){H.c(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
jc:function(a){if(a==null)return
return a.$ti},
lI:function(a,b){return H.kc(a["$as"+H.f(b)],H.jc(a))},
ah:function(a,b,c){var t,s
t=H.lI(a,b)
if(t==null)s=null
else{H.c(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aq:function(a,b){var t,s
t=H.jc(a)
if(t==null)s=null
else{H.c(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aQ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.c(!0)
H.c(!0)
return a[0].name+H.e0(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aQ(t,b)
return H.nZ(a,b)}return"unknown-reified-type"},
nZ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aQ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aQ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aQ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.og(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aQ(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
e0:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=new P.c3("")
for(r=b,q=!0,p=!0;H.c(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.c(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aQ(o,c)}return p?"":"<"+s.k(0)+">"},
jd:function(a){var t,s
if(a instanceof H.bf){t=H.lE(a)
if(t!=null)return H.aQ(t,null)}s=J.t(a).constructor.name
if(a==null)return s
return s+H.e0(a.$ti,0,null)},
kc:function(a,b){if(a==null)return b
H.c(typeof a=="function")
H.c(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.k9(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.k9(a,null,b)
return b},
cl:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.jc(a)
s=J.t(a)
if(s[b]==null)return!1
return H.lx(H.kc(s[d],t),c)},
e1:function(a,b,c,d){if(a==null)return a
if(H.cl(a,b,c,d))return a
throw H.e(H.kx(H.dF(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.e0(c,0,null),u.mangledGlobalNames)))},
oQ:function(a,b,c,d){if(a==null)return a
if(H.cl(a,b,c,d))return a
throw H.e(H.aA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.e0(c,0,null),u.mangledGlobalNames)))},
lx:function(a,b){var t,s,r,q,p
if(a==null||b==null)return!0
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=typeof b==="object"&&b!==null&&b.constructor===Array
H.c(s)
H.c(t)
r=a.length
H.c(s)
H.c(r===b.length)
H.c(t)
q=a.length
for(p=0;p<q;++p){H.c(t)
r=a[p]
H.c(s)
if(!H.a4(r,b[p]))return!1}return!0},
oc:function(a,b,c){return H.k9(a,b,H.lI(b,c))},
a4:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aJ")return!0
if('func' in b)return H.lJ(a,b)
if('func' in a)return b.name==="jN"||b.name==="q"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.c(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.c(!0)
q=b[0]}else q=b
if(q!==s){p=H.aQ(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lx(H.kc(o,t),r)},
lw:function(a,b,c){var t,s,r,q,p,o,n
t=b==null
if(t&&a==null)return!0
if(t)return c
if(a==null)return!1
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=typeof b==="object"&&b!==null&&b.constructor===Array
H.c(s)
H.c(t)
r=a.length
H.c(s)
q=b.length
if(c){if(r<q)return!1}else if(r!==q)return!1
for(p=0;p<q;++p){H.c(t)
o=a[p]
H.c(s)
n=b[p]
if(!(H.a4(o,n)||H.a4(n,o)))return!1}return!0},
o5:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.c(typeof a=='object')
H.c(typeof b=='object')
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.a4(p,o)||H.a4(o,p)))return!1}return!0},
lJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.c('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a4(t,s)||H.a4(s,t)))return!1}r=a.args
q=b.args
p=a.opt
o=b.opt
if(r!=null){H.c(typeof r==="object"&&r!==null&&r.constructor===Array)
n=r.length}else n=0
if(q!=null){H.c(typeof q==="object"&&q!==null&&q.constructor===Array)
m=q.length}else m=0
if(p!=null){H.c(typeof p==="object"&&p!==null&&p.constructor===Array)
l=p.length}else l=0
if(o!=null){H.c(typeof o==="object"&&o!==null&&o.constructor===Array)
k=o.length}else k=0
if(n>m)return!1
if(n+l<m+k)return!1
if(n===m){if(!H.lw(r,q,!1))return!1
if(!H.lw(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.c(j)
g=r[h]
H.c(i)
f=q[h]
if(!(H.a4(g,f)||H.a4(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.c(j)
g=p[d]
H.c(i)
f=q[e]
if(!(H.a4(g,f)||H.a4(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.c(j)
g=p[d]
H.c(i)
f=o[e]
if(!(H.a4(g,f)||H.a4(f,g)))return!1}}return H.o5(a.named,b.named)},
k9:function(a,b,c){H.c(typeof a=="function")
H.c(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oX:function(a){var t=$.k6
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oT:function(a){return H.b1(a)},
oR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
ot:function(a){var t,s,r,q,p,o
H.c(!(a instanceof P.q))
t=$.k6.$1(a)
s=$.j8[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ji[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lv.$2(a,t)
if(t!=null){s=$.j8[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ji[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.ka(r)
$.j8[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ji[t]=r
return r}if(p==="-"){o=H.ka(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lQ(a,r)
if(p==="*")throw H.e(new P.c7(t))
if(u.leafTags[t]===true){o=H.ka(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lQ(a,r)},
lQ:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jt(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ka:function(a){return J.jt(a,!1,null,!!a.$isr)},
ov:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.jt(t,!1,null,!!t.$isr)
else return J.jt(t,c,null,null)},
oo:function(){if(!0===$.k7)return
$.k7=!0
H.op()},
op:function(){var t,s,r,q,p,o,n,m
$.j8=Object.create(null)
$.ji=Object.create(null)
H.on()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lS.$1(p)
if(o!=null){n=H.ov(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
on:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.by(C.D,H.by(C.I,H.by(C.r,H.by(C.r,H.by(C.H,H.by(C.E,H.by(C.F(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.k6=new H.jf(p)
$.lv=new H.jg(o)
$.lS=new H.jh(n)},
by:function(a,b){return a(b)||b},
kV:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(new P.bL("Illegal RegExp pattern ("+String(q)+")",a,null))},
nT:function(a,b){var t=new H.iA(a,b)
t.e1(a,b)
return t},
oD:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
oF:function(a,b,c,d){var t,s,r
t=b.ee(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.oH(a,r,r+s[0].length,c)},
oE:function(a,b,c){var t,s
t=b.gc0()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
oG:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.oF(a,b,c,d)},
oH:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fY:function fY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hC:function hC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dD:function dD(a,b){this.a=a
this.b=b},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a){this.a=a},
jC:function jC(a){this.a=a},
dX:function dX(a,b){this.a=a
this.b=b},
jj:function jj(a){this.a=a},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c){this.a=a
this.b=b
this.c=c},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn:function jn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bf:function bf(){},
hp:function hp(){},
hb:function hb(){},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hE:function hE(a){this.a=a},
ee:function ee(a){this.a=a},
h3:function h3(a){this.a=a},
hT:function hT(a){this.a=a},
aL:function aL(a,b){this.a=a
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
f7:function f7(a){this.a=a},
fb:function fb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fc:function fc(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
f6:function f6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iA:function iA(a,b){this.a=a
this.b=b},
n:function(a){return a},
j_:function(a){var t,s,r
if(!!J.t(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bT:function bT(){},
bn:function bn(){},
fs:function fs(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dv:function dv(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
dz:function dz(){},
fz:function fz(){},
bU:function bU(){},
bV:function bV(){},
bW:function bW(){},
bX:function bX(){},
og:function(a){var t=H.E(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dq.prototype
return J.dp.prototype}if(typeof a=="string")return J.aZ.prototype
if(a==null)return J.f5.prototype
if(typeof a=="boolean")return J.f4.prototype
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
return a}if(a instanceof P.q)return a
return J.jb(a)},
jt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jb:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.k7==null){H.oo()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.c7("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jQ()]
if(p!=null)return p
p=H.ot(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$jQ(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
kU:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nk:function(a,b){var t,s
for(t=a.length;b<t;){s=C.e.ae(a,b)
if(s!==32&&s!==13&&!J.kU(s))break;++b}return b},
nl:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.e.ck(a,t)
if(s!==32&&s!==13&&!J.kU(s))break}return b},
W:function(a){if(typeof a=="string")return J.aZ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
return a}if(a instanceof P.q)return a
return J.jb(a)},
bc:function(a){if(a==null)return a
if(a.constructor==Array)return J.aY.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
return a}if(a instanceof P.q)return a
return J.jb(a)},
lG:function(a){if(typeof a=="number")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b5.prototype
return a},
oi:function(a){if(typeof a=="number")return J.bl.prototype
if(typeof a=="string")return J.aZ.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b5.prototype
return a},
ja:function(a){if(typeof a=="string")return J.aZ.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b5.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b_.prototype
return a}if(a instanceof P.q)return a
return J.jb(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).w(a,b)},
as:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lG(a).av(a,b)},
lZ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lG(a).aw(a,b)},
bA:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.os(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.W(a).h(a,b)},
m_:function(a,b,c){return J.bc(a).i(a,b,c)},
m0:function(a,b,c,d){return J.k(a).e4(a,b,c,d)},
kd:function(a,b){return J.ja(a).ae(a,b)},
m1:function(a,b,c,d){return J.k(a).eh(a,b,c,d)},
bB:function(a,b){return J.k(a).eo(a,b)},
m2:function(a,b,c,d){return J.k(a).ep(a,b,c,d)},
m3:function(a,b,c){return J.k(a).eq(a,b,c)},
ke:function(a,b){return J.k(a).c7(a,b)},
jD:function(a,b){return J.k(a).S(a,b)},
kf:function(a,b,c){return J.k(a).ca(a,b,c)},
m4:function(a,b){return J.k(a).eG(a,b)},
e2:function(a,b,c){return J.k(a).cb(a,b,c)},
m5:function(a,b,c){return J.k(a).cc(a,b,c)},
cp:function(a,b,c){return J.k(a).cd(a,b,c)},
e3:function(a,b){return J.k(a).eJ(a,b)},
m6:function(a,b){return J.k(a).ce(a,b)},
m7:function(a,b,c){return J.k(a).cf(a,b,c)},
kg:function(a,b,c,d){return J.k(a).cg(a,b,c,d)},
m8:function(a,b){return J.bc(a).ci(a,b)},
m9:function(a,b,c,d,e){return J.k(a).cj(a,b,c,d,e)},
ma:function(a,b){return J.oi(a).T(a,b)},
jE:function(a,b,c){return J.W(a).eP(a,b,c)},
e4:function(a){return J.k(a).cm(a)},
mb:function(a){return J.k(a).cn(a)},
mc:function(a){return J.k(a).cp(a)},
kh:function(a){return J.k(a).eV(a)},
md:function(a,b){return J.k(a).cr(a,b)},
jF:function(a,b){return J.k(a).cs(a,b)},
me:function(a,b){return J.k(a).f1(a,b)},
mf:function(a,b,c,d){return J.k(a).ct(a,b,c,d)},
mg:function(a,b,c,d,e){return J.k(a).f2(a,b,c,d,e)},
mh:function(a,b,c,d,e){return J.k(a).cu(a,b,c,d,e)},
mi:function(a,b,c,d,e,f){return J.k(a).f3(a,b,c,d,e,f)},
mj:function(a,b){return J.bc(a).t(a,b)},
cq:function(a,b){return J.k(a).cv(a,b)},
mk:function(a,b){return J.k(a).cw(a,b)},
ml:function(a){return J.k(a).f4(a)},
mm:function(a,b){return J.bc(a).aD(a,b)},
mn:function(a){return J.k(a).geF(a)},
at:function(a){return J.t(a).gv(a)},
bC:function(a){return J.bc(a).gu(a)},
e5:function(a){return J.W(a).gl(a)},
mo:function(a){return J.k(a).gcI(a)},
mp:function(a){return J.k(a).gbg(a)},
mq:function(a){return J.t(a).gA(a)},
mr:function(a){return J.k(a).gfv(a)},
ms:function(a){return J.k(a).gau(a)},
jG:function(a){return J.k(a).gm(a)},
jH:function(a){return J.k(a).gn(a)},
ki:function(a){return J.k(a).gL(a)},
jI:function(a,b){return J.k(a).a8(a,b)},
mt:function(a){return J.k(a).aL(a)},
mu:function(a){return J.k(a).bo(a)},
mv:function(a,b){return J.k(a).bp(a,b)},
mw:function(a,b,c){return J.k(a).bq(a,b,c)},
kj:function(a,b,c){return J.k(a).bt(a,b,c)},
mx:function(a,b){return J.k(a).cC(a,b)},
my:function(a,b){return J.bc(a).cG(a,b)},
mz:function(a,b,c){return J.k(a).cJ(a,b,c)},
mA:function(a){return J.bc(a).fo(a)},
mB:function(a,b){return J.k(a).G(a,b)},
mC:function(a,b,c){return J.k(a).dh(a,b,c)},
mD:function(a,b){return J.ja(a).dn(a,b)},
mE:function(a,b,c,d){return J.k(a).bz(a,b,c,d)},
mF:function(a,b,c,d,e,f,g){return J.k(a).cO(a,b,c,d,e,f,g)},
mG:function(a,b,c,d){return J.k(a).cP(a,b,c,d)},
kk:function(a,b,c,d){return J.k(a).cQ(a,b,c,d)},
mH:function(a){return J.ja(a).fA(a)},
Z:function(a){return J.t(a).k(a)},
mI:function(a,b,c,d){return J.k(a).fC(a,b,c,d)},
mJ:function(a){return J.ja(a).fD(a)},
mK:function(a,b,c){return J.k(a).cR(a,b,c)},
mL:function(a,b,c){return J.k(a).cS(a,b,c)},
jJ:function(a,b,c){return J.k(a).cT(a,b,c)},
mM:function(a,b,c){return J.k(a).cU(a,b,c)},
kl:function(a,b,c){return J.k(a).cV(a,b,c)},
km:function(a,b,c){return J.k(a).cW(a,b,c)},
kn:function(a,b,c){return J.k(a).cX(a,b,c)},
ko:function(a,b,c,d){return J.k(a).cY(a,b,c,d)},
kp:function(a,b,c,d){return J.k(a).cZ(a,b,c,d)},
mN:function(a,b){return J.k(a).d0(a,b)},
mO:function(a,b,c){return J.k(a).fE(a,b,c)},
kq:function(a,b,c,d,e,f,g){return J.k(a).d1(a,b,c,d,e,f,g)},
mP:function(a,b,c,d,e){return J.k(a).d2(a,b,c,d,e)},
a:function a(){},
f4:function f4(){},
f5:function f5(){},
bP:function bP(){},
fN:function fN(){},
b5:function b5(){},
b_:function b_(){},
aY:function aY(a){this.$ti=a},
jO:function jO(a){this.$ti=a},
e9:function e9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bl:function bl(){},
dq:function dq(){},
dp:function dp(){},
aZ:function aZ(){}},P={
nH:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.o6()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aP(new P.hV(t),1)).observe(s,{childList:true})
return new P.hU(t,s,r)}else if(self.setImmediate!=null)return P.o7()
return P.o8()},
nI:function(a){++u.globalState.f.b
self.scheduleImmediate(H.aP(new P.hW(a),0))},
nJ:function(a){++u.globalState.f.b
self.setImmediate(H.aP(new P.hX(a),0))},
nK:function(a){P.jZ(C.p,a)},
o1:function(a,b){if(H.bz(a,{func:1,args:[P.aJ,P.aJ]})){b.toString
return a}else{b.toString
return a}},
n6:function(a,b,c){var t
if(a==null)a=new P.bp()
t=$.x
if(t!==C.d)t.toString
t=new P.J(0,t,null,[c])
t.bO(a,b)
return t},
n7:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.J(0,$.x,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eV(t,!1,b,s)
try{for(m=0,l=0;m<2;++m){q=a[m]
p=l
q.bk(new P.eU(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.J(0,$.x,null,[null])
l.bN(C.u)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.R(j)
n=H.ap(j)
if(t.b===0||!1)return P.n6(o,n,null)
else{t.c=o
t.d=n}}return s},
nW:function(a,b,c){$.x.toString
a.H(b,c)},
nN:function(a,b){var t=new P.J(0,$.x,null,[b])
H.c(!0)
t.a=4
t.c=a
return t},
lm:function(a,b){var t,s,r
H.c(b.a<4)
H.c(!(a instanceof P.J))
H.c(b.a===0)
b.a=1
try{a.bk(new P.ih(b),new P.ii(b))}catch(r){t=H.R(r)
s=H.ap(r)
P.oz(new P.ij(b,t,s))}},
ig:function(a,b){var t,s,r,q
H.c(b.a<=1)
for(;t=a.a,s=t===2,s;){H.c(s)
a=a.c}s=b.a
if(t>=4){H.c(s<4)
r=b.c
b.c=null
q=b.aj(r)
H.c(b.a<4)
H.c(a.a>=4)
b.a=a.a
b.c=a.c
P.bu(b,q)}else{q=b.c
H.c(s<=1)
b.a=2
b.c=a
a.c1(q)}},
bu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t={}
t.a=a
for(s=a;!0;){r={}
H.c(s.a>=4)
s=t.a
q=s.a===8
if(b==null){if(q){H.c(!0)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.j0(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bu(t.a,b)}s=t.a
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
if(k){H.c(s.a===8)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.j0(null,null,p,o,s)
return}s=$.x
if(s==null?l!=null:s!==l){H.c(l!=null)
s=$.x
H.c(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.ip(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.io(r,b,m).$0()}else if((s&2)!==0)new P.im(t,r,b).$0()
if(i!=null){H.c(!0)
$.x=i}s=r.b
if(!!J.t(s).$isaX){if(s.a>=4){H.c(o.a<4)
h=o.c
o.c=null
b=o.aj(h)
H.c(o.a<4)
H.c(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ig(s,o)
return}}g=b.b
H.c(g.a<4)
h=g.c
g.c=null
b=g.aj(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.c(!o)
g.a=4
g.c=p}else{H.c(!o)
g.a=8
g.c=p}t.a=g
s=g}},
o0:function(){var t,s
for(;t=$.bw,t!=null;){$.cj=null
s=t.b
$.bw=s
if(s==null)$.ci=null
t.a.$0()}},
o4:function(){$.k3=!0
try{P.o0()}finally{$.cj=null
$.k3=!1
if($.bw!=null)$.$get$k0().$1(P.ly())}},
lt:function(a){var t=new P.dT(a,null)
if($.bw==null){$.ci=t
$.bw=t
if(!$.k3)$.$get$k0().$1(P.ly())}else{$.ci.b=t
$.ci=t}},
o3:function(a){var t,s,r
t=$.bw
if(t==null){P.lt(a)
$.cj=$.ci
return}s=new P.dT(a,null)
r=$.cj
if(r==null){s.b=t
$.cj=s
$.bw=s}else{s.b=r.b
r.b=s
$.cj=s
if(s.b==null)$.ci=s}},
oz:function(a){var t=$.x
if(C.d===t){P.bx(null,null,C.d,a)
return}t.toString
P.bx(null,null,t,t.ba(a))},
nU:function(a,b,c){var t=a.eK(0)
if(!!J.t(t).$isaX&&t!==$.$get$kO())t.fF(new P.iZ(b,c))
else b.ag(c)},
nC:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jZ(a,b)}return P.jZ(a,t.ba(b))},
jZ:function(a,b){var t=C.b.K(a.a,1000)
return H.nB(t<0?0:t,b)},
k_:function(a){var t,s
H.c(a!=null)
t=$.x
H.c(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
j0:function(a,b,c,d,e){var t={}
t.a=d
P.o3(new P.j1(t,e))},
lr:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.k_(c)
try{s=d.$0()
return s}finally{s=t
H.c(s!=null)
$.x=s}},
ls:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.k_(c)
try{s=d.$1(e)
return s}finally{s=t
H.c(s!=null)
$.x=s}},
o2:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.k_(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.c(s!=null)
$.x=s}},
bx:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.ba(d):c.eH(d)
P.lt(d)},
hV:function hV(a){this.a=a},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eU:function eU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
i0:function i0(){},
c9:function c9(a,b){this.a=a
this.$ti=b},
iR:function iR(a,b){this.a=a
this.$ti=b},
cb:function cb(a,b,c,d,e,f){var _=this
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
ic:function ic(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
ij:function ij(a,b,c){this.a=a
this.b=b
this.c=c},
ie:function ie(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iq:function iq(a){this.a=a},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
im:function im(a,b,c){this.a=a
this.b=b
this.c=c},
dT:function dT(a,b){this.a=a
this.b=b},
c2:function c2(){},
hi:function hi(a){this.a=a},
hj:function hj(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a){this.a=a},
hf:function hf(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
be:function be(a,b){this.a=a
this.b=b},
iY:function iY(){},
j1:function j1(a,b){this.a=a
this.b=b},
iD:function iD(){},
iF:function iF(a,b){this.a=a
this.b=b},
iE:function iE(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
kW:function(a,b){return new H.ak(0,null,null,null,null,null,0,[a,b])},
F:function(){return new H.ak(0,null,null,null,null,null,0,[null,null])},
aH:function(a){return H.oh(a,new H.ak(0,null,null,null,null,null,0,[null,null]))},
cf:function(a,b){return new P.dV(0,null,null,null,null,null,0,[a,b])},
nR:function(){var t=Object.create(null)
H.c(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
nh:function(a,b,c){var t,s
if(P.k4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$ck()
C.a.j(s,a)
try{P.o_(a,t)}finally{H.c(C.a.gaG(s)===a)
s.pop()}s=P.l6(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
f3:function(a,b,c){var t,s,r
if(P.k4(a))return b+"..."+c
t=new P.c3(b)
s=$.$get$ck()
C.a.j(s,a)
try{r=t
r.a=P.l6(r.ga5(),a,", ")}finally{H.c(C.a.gaG(s)===a)
s.pop()}s=t
s.a=s.ga5()+c
s=t.ga5()
return s.charCodeAt(0)==0?s:s},
k4:function(a){var t,s
for(t=0;s=$.$get$ck(),t<s.length;++t)if(a===s[t])return!0
return!1},
o_:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gu(a)
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
H.c(r<100)
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
al:function(a,b,c,d){return new P.iv(0,null,null,null,null,null,0,[d])},
jS:function(a,b){var t,s
t=P.al(null,null,null,b)
for(s=J.bC(a);s.p();)t.j(0,s.gq())
return t},
no:function(a){var t,s,r
t={}
if(P.k4(a))return"{...}"
s=new P.c3("")
try{C.a.j($.$get$ck(),a)
r=s
r.a=r.ga5()+"{"
t.a=!0
a.aD(0,new P.fj(t,s))
t=s
t.a=t.ga5()+"}"}finally{t=$.$get$ck()
H.c(C.a.gaG(t)===a)
t.pop()}t=s.ga5()
return t.charCodeAt(0)==0?t:t},
jT:function(a,b){var t=new P.fe(null,0,0,0,[b])
t.dM(a,b)
return t},
dV:function dV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
iv:function iv(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
ce:function ce(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
it:function it(){},
dr:function dr(){},
y:function y(){},
fj:function fj(a,b){this.a=a
this.b=b},
fe:function fe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ix:function ix(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h5:function h5(){},
h4:function h4(){},
bZ:function bZ(){},
l6:function(a,b,c){var t=J.bC(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
mW:function(a,b){return J.ma(a,b)},
mX:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cu:function(a){if(a>=10)return""+a
return"0"+a},
n_:function(a,b,c,d,e,f){return new P.aE(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jM:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Z(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n2(a)},
n2:function(a){var t=J.t(a)
if(!!t.$isbf)return t.k(a)
return H.fT(a)},
cr:function(a){return new P.ai(!1,null,null,a)},
kr:function(a,b,c){return new P.ai(!0,a,b,c)},
mQ:function(a){return new P.ai(!1,null,a,"Must not be null")},
fV:function(a,b,c){return new P.dH(null,null,!0,a,b,"Value not in range")},
b3:function(a,b,c,d,e){return new P.dH(b,c,!0,a,d,"Invalid value")},
jX:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b3(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b3(b,a,c,"end",f))
return b},
D:function(a,b,c,d,e){var t=e!=null?e:J.e5(b)
return new P.f0(b,t,!0,a,c,"Index out of range")},
cB:function(a){return new P.ib(a)},
kX:function(a,b,c){var t,s
t=H.E([],[c])
for(s=J.bC(a);s.p();)C.a.j(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
Y:function(a){H.bd(H.f(a))},
l3:function(a,b,c){return new H.f6(a,H.kV(a,!1,!0,!1),null,null)},
aD:function aD(){},
K:function K(){},
aV:function aV(a,b){this.a=a
this.b=b},
Q:function Q(){},
aE:function aE(a){this.a=a},
ep:function ep(){},
eq:function eq(){},
bh:function bh(){},
cs:function cs(a){this.a=a},
bp:function bp(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dH:function dH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f0:function f0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
w:function w(a){this.a=a},
c7:function c7(a){this.a=a},
am:function am(a){this.a=a},
a6:function a6(a){this.a=a},
dL:function dL(){},
ei:function ei(a){this.a=a},
ib:function ib(a){this.a=a},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
es:function es(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
a_:function a_(){},
dn:function dn(){},
b:function b(){},
aI:function aI(){},
aJ:function aJ(){},
X:function X(){},
q:function q(){},
c1:function c1(){},
v:function v(){},
c3:function c3(a){this.a=a},
lB:function(a){return a},
j6:function(a){var t,s,r,q,p
if(a==null)return
t=P.F()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
od:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.mm(a,new P.j3(t))
return t},
oe:function(a){var t,s
t=new P.J(0,$.x,null,[null])
s=new P.c9(t,[null])
a.then(H.aP(new P.j4(s),1))["catch"](H.aP(new P.j5(s),1))
return t},
kK:function(){var t=$.kJ
if(t==null){t=J.jE(window.navigator.userAgent,"Opera",0)
$.kJ=t}return t},
mZ:function(){var t,s
t=$.kG
if(t!=null)return t
s=$.kH
if(s==null){s=J.jE(window.navigator.userAgent,"Firefox",0)
$.kH=s}if(s)t="-moz-"
else{s=$.kI
if(s==null){s=!P.kK()&&J.jE(window.navigator.userAgent,"Trident/",0)
$.kI=s}if(s)t="-ms-"
else t=P.kK()?"-o-":"-webkit-"}$.kG=t
return t},
hQ:function hQ(){},
hS:function hS(a,b){this.a=a
this.b=b},
j3:function j3(a){this.a=a},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
oC:function(a){return Math.sqrt(a)},
iC:function iC(){},
M:function M(){},
e6:function e6(){},
aR:function aR(){},
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
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eP:function eP(){},
eR:function eR(){},
aj:function aj(){},
aG:function aG(){},
eZ:function eZ(){},
av:function av(){},
f9:function f9(){},
fk:function fk(){},
fl:function fl(){},
ax:function ax(){},
fD:function fD(){},
fK:function fK(){},
fP:function fP(){},
fQ:function fQ(){},
fW:function fW(){},
fX:function fX(){},
c_:function c_(){},
hk:function hk(){},
H:function H(){},
hl:function hl(){},
hm:function hm(){},
dN:function dN(){},
hq:function hq(){},
c5:function c5(){},
ay:function ay(){},
hA:function hA(){},
hH:function hH(){},
hJ:function hJ(){},
hK:function hK(){},
cc:function cc(){},
iH:function iH(){},
iI:function iI(){},
iJ:function iJ(){},
cL:function cL(){},
cJ:function cJ(){},
cQ:function cQ(){},
cU:function cU(){},
d4:function d4(){},
dc:function dc(){},
d8:function d8(){},
da:function da(){},
ea:function ea(){},
h0:function h0(){},
h1:function h1(){},
iV:function iV(){},
ha:function ha(){},
cK:function cK(){},
d3:function d3(){}},W={
n0:function(a,b,c){var t,s
t=document.body
s=(t&&C.i).P(t,a,b,c)
s.toString
t=new H.dS(new W.U(s),new W.j2(),[W.u])
return t.ga4(t)},
n1:function(a){return"wheel"},
bE:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mr(a)
if(typeof s==="string")t=a.tagName}catch(r){H.R(r)}return t},
nM:function(a,b){return document.createElement(a)},
bb:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lp:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a2:function(a,b,c,d,e){var t=c==null?null:W.lu(new W.ia(c))
t=new W.i9(0,a,b,t,!1,[e])
t.dZ(a,b,c,!1,e)
return t},
ln:function(a){var t,s
t=document.createElement("a")
s=new W.iK(t,window.location)
s=new W.cd(s)
s.e_(a)
return s},
nP:function(a,b,c,d){return!0},
nQ:function(a,b,c,d){var t,s,r,q,p
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
lq:function(){var t=P.v
t=new W.iS(P.jS(C.l,t),P.al(null,null,null,t),P.al(null,null,null,t),P.al(null,null,null,t),null)
t.e2(null,new H.bQ(C.l,new W.iT(),[H.aq(C.l,0),null]),["TEMPLATE"],null)
return t},
nX:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.nL(a)
if(!!J.t(t).$ish)return t
return}else return a},
nY:function(a){var t
if(!!J.t(a).$isaW)return a
t=new P.hR([],[],!1)
t.c=!0
return t.bm(a)},
nL:function(a){if(a===window)return a
else return new W.i2(a)},
lu:function(a){var t=$.x
if(t===C.d)return a
return t.eI(a)},
m:function m(){},
e7:function e7(){},
e8:function e8(){},
a5:function a5(){},
eb:function eb(){},
ct:function ct(){},
aS:function aS(){},
aT:function aT(){},
ed:function ed(){},
aU:function aU(){},
eg:function eg(){},
A:function A(){},
bg:function bg(){},
eh:function eh(){},
ej:function ej(){},
ek:function ek(){},
cw:function cw(){},
aW:function aW(){},
cx:function cx(){},
el:function el(){},
cy:function cy(){},
em:function em(){},
cz:function cz(){},
cA:function cA(){},
en:function en(){},
eo:function eo(){},
a7:function a7(){},
j2:function j2(){},
j:function j(){},
h:function h(){},
a8:function a8(){},
eN:function eN(){},
eO:function eO(){},
eS:function eS(){},
a9:function a9(){},
cF:function cF(){},
eX:function eX(){},
bM:function bM(){},
cG:function cG(){},
cH:function cH(){},
bN:function bN(){},
bi:function bi(){},
bj:function bj(){},
bk:function bk(){},
bO:function bO(){},
b0:function b0(){},
fh:function fh(){},
bR:function bR(){},
fo:function fo(){},
fp:function fp(){},
bS:function bS(){},
aa:function aa(){},
fq:function fq(){},
S:function S(){},
fA:function fA(){},
U:function U(a){this.a=a},
u:function u(){},
dA:function dA(){},
bY:function bY(){},
fJ:function fJ(){},
fM:function fM(){},
ab:function ab(){},
fO:function fO(){},
fR:function fR(){},
fS:function fS(){},
dG:function dG(){},
h2:function h2(){},
dI:function dI(){},
c0:function c0(){},
h6:function h6(){},
ac:function ac(){},
h7:function h7(){},
ad:function ad(){},
h9:function h9(){},
ae:function ae(){},
he:function he(){},
a0:function a0(){},
an:function an(){},
dM:function dM(){},
hn:function hn(){},
ho:function ho(){},
c4:function c4(){},
af:function af(){},
a1:function a1(){},
hr:function hr(){},
hs:function hs(){},
hu:function hu(){},
ag:function ag(){},
b4:function b4(){},
hy:function hy(){},
hz:function hz(){},
bs:function bs(){},
hB:function hB(){},
dQ:function dQ(){},
aM:function aM(){},
hG:function hG(){},
bt:function bt(){},
hI:function hI(){},
hL:function hL(){},
hM:function hM(){},
b6:function b6(){},
c8:function c8(){},
hO:function hO(a){this.a=a},
hP:function hP(){},
b7:function b7(){},
i_:function i_(){},
dU:function dU(){},
i1:function i1(){},
i3:function i3(){},
i4:function i4(){},
ir:function ir(){},
is:function is(){},
dW:function dW(){},
iL:function iL(){},
iO:function iO(){},
iP:function iP(){},
iW:function iW(){},
iX:function iX(){},
hY:function hY(){},
i5:function i5(a){this.a=a},
i8:function i8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ca:function ca(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i9:function i9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ia:function ia(a){this.a=a},
cd:function cd(a){this.a=a},
B:function B(){},
dC:function dC(a){this.a=a},
fC:function fC(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
cg:function cg(){},
iM:function iM(){},
iN:function iN(){},
iS:function iS(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iT:function iT(){},
iQ:function iQ(){},
cD:function cD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i2:function i2(a){this.a=a},
dB:function dB(){},
iK:function iK(a,b){this.a=a
this.b=b},
dY:function dY(a){this.a=a},
iU:function iU(a){this.a=a},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
cI:function cI(){},
d1:function d1(){},
cO:function cO(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
cM:function cM(){},
cN:function cN(){},
cP:function cP(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
d2:function d2(){},
de:function de(){},
df:function df(){},
dd:function dd(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d9:function d9(){},
db:function db(){},
dg:function dg(){},
dh:function dh(){}},B={
oA:function(a){var t,s
t=document
s=W.b0
W.a2(t,"keydown",new B.jv(),!1,s)
W.a2(t,"keyup",new B.jw(),!1,s)
if(!$.oB)W.a2(t,"mousemove",new B.jx(),!1,W.S)
s=W.S
W.a2(t,"mousedown",new B.jy(),!1,s)
W.a2(t,"mouseup",new B.jz(),!1,s)},
np:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.n(3))
s=$.$get$j7()
r=$.$get$cm()
q=new T.L(new Float32Array(H.n(16)))
q.J()
q=new B.fE(a,b,c,0,new T.l(t),-0.02,s,r,q,new T.l(new Float32Array(H.n(3))),new T.l(new Float32Array(H.n(3))),new T.l(new Float32Array(H.n(3))),new T.l(new Float32Array(H.n(3))),"camera:orbit",!1,!0)
q.dO(a,b,c,d)
return q},
jv:function jv(){},
jw:function jw(){},
jx:function jx(){},
jy:function jy(){},
jz:function jz(){},
fE:function fE(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fF:function fF(a){this.a=a},
fG:function fG(a){this.a=a},
fH:function fH(){},
fI:function fI(a){this.a=a}},G={
nG:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.aq(t,"\n")},
ll:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.co(a,b)
t.bx(a,s,c)
t.cl(a,s)
r=t.bs(a,s,35713)
if(r!=null&&!r){q=t.br(a,s)
P.Y("E:Compilation failed:")
P.Y("E:"+G.nG(c))
P.Y("E:Failure:")
P.Y(C.e.a3("E:",q))
throw H.e(q)}return s},
n9:function(a,b,c){var t,s,r,q
C.f.cA(a,0,a.length,0)
C.f.cA(b,0,4,0)
for(t=c.length,s=0,r=0;r<c.length;c.length===t||(0,H.C)(c),++r){q=c[r]
if(q.c){q.aR(a,s*16)
b[s]=q.d;++s}}},
kY:function(a){var t=new G.fm(P.F(),a,!1,!0)
t.dN(a)
return t},
cE:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jG(a[s])
b[t+1]=J.jH(a[s])
b[t+2]=J.ki(a[s])}return b},
n4:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jG(a[s])
b[t+1]=J.jH(a[s])}return b},
n5:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jG(a[s])
b[t+1]=J.jH(a[s])
b[t+2]=J.ki(a[s])
b[t+3]=J.ms(a[s])}return b},
n3:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bA(a[s],0)
b[t+1]=J.bA(a[s],1)
b[t+2]=J.bA(a[s],2)
b[t+3]=J.bA(a[s],3)}return b},
nO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gu(s),r=b.x,q=[[P.b,P.p]],p=[P.Q],o=[T.aN],n=[T.l],m=[T.aB];s.p();){l=s.gq()
if(!r.F(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lF>0)H.bd("I: "+k)
continue}j=t.h(0,l)
switch($.$get$V().h(0,l).a){case"vec2":b.ac(l,G.n4(H.e1(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ac(l,G.cE(H.e1(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ac(l,G.n5(H.e1(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ac(l,new Float32Array(H.j_(H.e1(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ac(l,G.n3(H.e1(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aC(!1))H.aO("unknown type for "+H.f(l)+" ["+J.mq(j[0]).k(0)+"] ["+new H.aL(H.jd(j),null).k(0)+"] "+H.f(j))}}},
jY:function(a,b,c,d){var t=new G.h_(b,c,d,null,null,P.F(),P.F(),P.al(null,null,null,P.v),null,a,!1,!0)
t.dQ(a,b,c,d)
return t},
fr:function fr(){},
dR:function dR(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ec:function ec(){},
ef:function ef(a,b){this.a=a
this.b=b},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eW:function eW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fa:function fa(){},
dE:function dE(a,b,c,d,e,f,g,h){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.d=e
_.a=f
_.b=g
_.c=h},
cv:function cv(a,b,c,d,e,f,g,h,i,j){var _=this
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
dK:function dK(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=a0
_.cx=a1
_.cy=a2
_.db=a3
_.dx=a4
_.dy=a5
_.fr=a6
_.fx=a7
_.d=a8
_.a=a9
_.b=b0
_.c=b1},
eY:function eY(a,b,c,d,e,f,g){var _=this
_.x=a
_.y=b
_.z=c
_.d=d
_.a=e
_.b=f
_.c=g},
dP:function dP(a,b,c){this.a=a
this.b=b
this.c=c},
dO:function dO(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
du:function du(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fL:function fL(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
h_:function h_(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
aK:function aK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h8:function h8(){},
ht:function ht(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c6:function c6(){},
f_:function f_(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
nD:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=d.a
if(t[1]===0)return
s=b*0.5
r=c*C.k.f5(s/c)
q=-r
p=new T.l(new Float32Array(H.n(3)))
p.B(d)
p.a9(0,s)
t=t[1]
o=new T.l(new Float32Array(H.n(3)))
o.B(p)
o.a9(0,1/t)
n=[]
for(m=q;m<=r;m+=c)for(l=q;l<=r;l+=c){t=new Float32Array(3)
p=new T.l(t)
t[0]=m
t[1]=0
t[2]=l
p.j(0,o)
C.a.j(n,p)
t=new Float32Array(3)
p=new T.l(t)
t[0]=m
t[1]=0
t[2]=l
p.bA(o)
C.a.j(n,p)}for(k=0;k<8;++k){m=(k&1)===1?1:-1
j=(k&2)===2?1:-1
l=(k&4)===4?1:-1
if(m>0){t=j*s
p=l*s
i=new Float32Array(3)
i[0]=m*s
i[1]=t
i[2]=p
C.a.j(n,new T.l(i))
i=new Float32Array(3)
i[0]=-m*s
i[1]=t
i[2]=p
C.a.j(n,new T.l(i))}if(j>0){t=m*s
p=l*s
i=new Float32Array(3)
i[0]=t
i[1]=j*s
i[2]=p
C.a.j(n,new T.l(i))
i=new Float32Array(3)
i[0]=t
i[1]=-j*s
i[2]=p
C.a.j(n,new T.l(i))}if(l>0){t=m*s
p=j*s
i=new Float32Array(3)
i[0]=t
i[1]=p
i[2]=l*s
C.a.j(n,new T.l(i))
i=new Float32Array(3)
i[0]=t
i[1]=p
i[2]=-l*s
C.a.j(n,new T.l(i))}}a.ay(G.cE(n,null))
t=new Array(n.length)
t.fixed$length=Array
h=H.E(t,[P.p])
for(t=n.length,k=0;k<t;++k)h[k]=k
a.ad(h)},
n8:function(a){var t,s,r
t=a.a
s=t[0]
if(s!==0){r=t[1]
if(r!==0){t=new T.l(new Float32Array(H.n(3)))
t.O(-r,s,0)
return t}t=t[2]
if(t!==0){r=new T.l(new Float32Array(H.n(3)))
r.O(-t,0,s)
return r}t=new T.l(new Float32Array(H.n(3)))
t.O(0,1,1)
return t}else{s=t[1]
if(s===0){t=new T.l(new Float32Array(H.n(3)))
t.O(1,1,0)
return t}t=t[2]
if(t===0){t=new T.l(new Float32Array(H.n(3)))
t.O(1,0,1)
return t}r=new T.l(new Float32Array(H.n(3)))
r.O(0,-t,s)
return r}},
nF:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a3.toString
t=new T.l(new Float32Array(H.n(3)))
t.B(a3)
t.D(0)
s=new T.l(new Float32Array(H.n(3)))
s.B(t)
s.a9(0,a4)
a2.toString
r=new T.l(new Float32Array(H.n(3)))
r.B(a2)
r.j(0,s)
q=[a2,r]
p=R.n8(a3)
p.D(0)
p.a9(0,Math.tan(H.lz(a5))*a4)
for(o=0;o<8;++o){t=new Float32Array(3)
n=new T.l(t)
n.B(p)
s=new Float32Array(4)
new T.fU(s).di(a3,o*2*3.141592653589793/8)
m=t[0]
l=t[1]
k=t[2]
j=s[0]
i=s[1]
h=s[2]
g=s[3]
f=g*m+i*k-h*l
e=g*l+h*m-j*k
d=g*k+j*l-i*m
s=-j
c=s*m-i*l-h*k
b=-h
a=-i
t[0]=f*g+c*s+e*b-d*a
t[1]=e*g+c*a+d*s-f*b
t[2]=d*g+c*b+f*a-e*s
n.j(0,r)
C.a.j(q,n)}a0=[]
for(o=1;o<q.length;++o){C.a.j(a0,0)
C.a.j(a0,o)}for(o=3;t=q.length,o<t;++o){C.a.j(a0,o-1)
C.a.j(a0,o)}C.a.j(a0,t-1)
C.a.j(a0,2)
for(o=2;o<q.length;++o)if(o%2===0){C.a.j(a0,1)
C.a.j(a0,o)}a1.ay(G.cE(q,null))
a1.ad(a0)},
nE:function(a,b,c){var t,s,r,q,p,o,n
t=[]
s=[]
for(r=$.$get$kP(),q=0;q<12;++q){p=r[q]
C.a.j(s,t.length)
C.a.j(s,12)
o=new T.l(new Float32Array(3))
o.B(p)
o.a9(0,c)
b.toString
n=new T.l(new Float32Array(3))
n.B(b)
n.j(0,o)
C.a.j(t,n)}C.a.j(t,b)
a.ay(G.cE(t,null))
a.ad(s)},
hc:function hc(){},
hd:function hd(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
lD:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.B(c)
s=b.d
t.cH(0,s)
r=b.ch
if(r!=null&&b.cx!=null){J.Z(b)
q=C.a.gaG(e)
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
p.eR(new T.aw(o))
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
a.dH(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.C)(s),++l)A.lD(a,s[l],t,d,e)},
l4:function(a,b,c){var t=new A.fZ(c,b,H.E([],[A.br]),17664,0,0,0,0,a,!1,!0)
t.dP(a,b,c)
return t},
bo:function bo(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
br:function br(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fZ:function fZ(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
e_:function(a){var t,s
t=C.f.f6(a,0,new A.je())
s=536870911&t+(C.b.d3(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
je:function je(){}},D={
nn:function(a){var t,s
t=new P.J(0,$.x,null,[null])
s=new XMLHttpRequest()
C.q.fm(s,"GET",a)
W.a2(s,"loadend",new D.fg(new P.c9(t,[null]),s),!1,W.oO)
C.q.G(s,"")
return t},
nm:function(a){var t,s,r
t=new P.J(0,$.x,null,[null])
s=document.createElement("img")
r=new W.ca(s,"load",!1,[W.j])
r.gbe(r).aI(new D.ff(new P.c9(t,[null]),s))
s.src=a
return t},
fg:function fg(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b}},T={
fn:function(){return new T.L(new Float32Array(H.n(16)))},
I:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.l(t)},
aw:function aw(a){this.a=a},
L:function L(a){this.a=a},
fU:function fU(a){this.a=a},
aB:function aB(a){this.a=a},
l:function l(a){this.a=a},
aN:function aN(a){this.a=a},
ou:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t={}
s=document
r=new R.hd(0,0,null,null,null,null)
r.dT(C.h.d7(s,"stats"),"blue","gray")
q=C.h.cK(s,"#webgl-canvas")
p=new G.ef(null,q)
o=(q&&C.z).d6(q,"webgl2",P.aH(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.G(P.cB('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.Z(J.mt(o))
if($.lF>0)P.Y("I: "+n)
J.m9(o,0,0,0,1)
J.cq(o,2929)
J.cq(o,2884)
m=B.np(50,10,0,q)
m.bv(0,0,56)
o=new T.L(new Float32Array(H.n(16)))
o.J()
n=new T.L(new Float32Array(H.n(16)))
n.J()
l=new G.fL(m,50,1,0.1,1e4,o,n,new T.L(new Float32Array(H.n(16))),P.F(),"perspective",!1,!0)
l.bH()
n=[]
k=new G.eY(n,new Float32Array(H.n(64)),new Float32Array(H.n(4)),P.F(),"illumination",!1,!0)
for(o=$.$get$j9(),o=o.gaJ(o),o=o.gu(o);o.p();)C.a.j(n,o.gq())
o=G.jY("BlinnPhong",p,$.$get$lN(),$.$get$lL())
j=new A.br(o,[l,k],[],"BlinnPhong",!1,!0)
n=G.jY("Gourad",p,$.$get$lO(),$.$get$lM())
i=new A.br(n,[l,k],[],"Gourad",!1,!0)
H.c(o.dK(n))
o=G.jY("Fixed",p,$.$get$lU(),$.$get$lT())
h=new A.br(o,[l],[],"Fixed",!1,!0)
g=A.l4("BlinnPhong",p,null)
H.c(!0)
n=g.f
C.a.j(n,j)
H.c(!0)
C.a.j(n,h)
f=A.l4("Gourad",p,null)
H.c(!0)
n=f.f
C.a.j(n,i)
H.c(!0)
C.a.j(n,h)
e=G.kY("light")
e.a0("uColor",$.$get$kD())
d=P.F()
for(n=$.$get$j9(),c=n.gE(n),c=c.gu(c),b=o.d,o=o.e.x;c.p();){a=c.gq()
a0=n.h(0,a)
a1=new G.du(b,J.kh(b.a),1,P.F(),o,null,0,-1,null,null,P.F(),"meshdata:dirLightViz",!1,!0)
a1.bB(new Float32Array(3))
a1.y=J.e4(b.a)
a1.ad([0,0])
a2=J.t(a0)
if(!!a2.$iscv){a2=a0.Q
R.nD(a1,a2,a2/4,a0.x)}else if(!!a2.$isdK)R.nF(a1,a0.x,a0.y,a0.ch,a0.cx)
else if(!!a2.$isdE)R.nE(a1,a0.x,a0.Q)
else if(H.aC(!1))H.aO("unknown light: "+a2.gA(a0).k(0))
a2=new Float32Array(9)
a3=new T.L(new Float32Array(16))
a3.J()
a4=new T.L(new Float32Array(16))
a4.J()
a5=new Float32Array(3)
a6=new Float32Array(3)
a7=new Float32Array(3)
d.i(0,a,new A.bo(e,a1,[],new T.aw(a2),a3,a4,new T.l(a5),new T.l(a6),new T.l(a7),new T.l(new Float32Array(3)),a,!1,!0))}for(o=d.gaJ(d),o=o.gu(o),n=h.f;o.p();){a8=o.gq()
H.c(a8!=null)
C.a.j(n,a8)}o=new Float32Array(H.n(9))
n=new T.L(new Float32Array(H.n(16)))
n.J()
c=new T.L(new Float32Array(H.n(16)))
c.J()
a9=new A.bo(null,null,[],new T.aw(o),n,c,new T.l(new Float32Array(H.n(3))),new T.l(new Float32Array(H.n(3))),new T.l(new Float32Array(H.n(3))),new T.l(new Float32Array(H.n(3))),"dragon",!1,!0)
H.c(!0)
C.a.j(i.f,a9)
H.c(!0)
C.a.j(j.f,a9)
b0=H.ar(C.h.cK(s,"#phase"),"$isc0")
H.c(b0!=null)
b0.selectedIndex=0
for(o=C.h.bn(s,"input"),n=o.length,b1=0;b1<o.length;o.length===n||(0,H.C)(o),++b1){c=J.mo(o[b1])
W.a2(c.a,c.b,new T.jq(d),!1,H.aq(c,0))}for(o=C.h.bn(s,"input"),n=o.length,b1=0;b1<o.length;o.length===n||(0,H.C)(o),++b1){b2=o[b1]
H.bd("initialize inputs "+H.f(b2.id))
b3=C.h.ea(s,"Event")
J.m1(b3,"change",!0,!0)
J.me(b2,b3)}s=new T.js(q,l,g,f)
s.$1(null)
W.a2(window,"resize",s,!1,W.j)
t.a=0
P.n7([D.nn("../asset/dragon/dragon.obj"),D.nm("../asset/dragon/dragon.png")],null,!1).aI(new T.jr(p,j,a9,new T.jp(t,r,m,g,f,b0)))},
jq:function jq(a){this.a=a},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp:function jp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jr:function jr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},Y={
na:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.eW(!1,[],[],[],P.F())
t.bD("aTexUV")
t.bD("aNormal")
s=P.F()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.l3("\\s+",!0,!1)
l=P.l3("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.C)(r),++j){i=r[j]
i.toString
h=H.oE(i,m," ")
g=H.oG(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
if(J.z(f[0],"g"))s.i(0,f[1],q.length)
else if(J.z(f[0],"v")){h=H.b2(f[1],null)
e=H.b2(f[2],null)
d=H.b2(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.j(q,new T.l(c))}else if(J.z(f[0],"vt")){h=H.b2(f[1],null)
e=H.b2(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.j(o,new T.aB(d))}else if(J.z(f[0],"vn")){h=H.b2(f[1],null)
e=H.b2(f[2],null)
d=H.b2(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.j(p,new T.l(c))}else if(J.z(f[0],"f")){h=f.length
if(h!==4&&h!==5){H.bd("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.mD(f[a1],"/")
H.c(a2.length>0)
for(;a2.length<3;)C.a.j(a2,"")
a3=H.jW(a2[0],null,null)-1
a4=J.z(a2[1],"")?-1:H.jW(a2[1],null,null)-1
a5=J.z(a2[2],"")?-1:H.jW(a2[2],null,null)-1
if(a3<q.length)C.a.j(b,q[a3])
else C.a.j(b,new T.l(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.j(a0,o[a4])
else{H.bd("problem uv "+a1+" "+a4)
C.a.j(a0,new T.aB(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.j(a,p[a5])
else{H.bd("problem normals "+a1+" "+a5)
C.a.j(a,new T.l(new Float32Array(3)))}}if(h===4)t.dB(b)
else t.dC(b)
t.dA("aNormal",a)
t.dz("aTexUV",a0)}}P.Y("loaded ("+P.n_(0,0,0,Date.now()-new P.aV(n,!1).a,0,0).k(0)+") "+t.k(0))
return t}}
var v=[C,H,J,P,W,B,G,R,A,D,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jP.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gv:function(a){return H.b1(a)},
k:function(a){return H.fT(a)},
gA:function(a){return new H.aL(H.jd(a),null)}}
J.f4.prototype={
k:function(a){return String(a)},
gv:function(a){return a?519018:218159},
gA:function(a){return C.a_},
$isaD:1}
J.f5.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gv:function(a){return 0},
gA:function(a){return C.U}}
J.bP.prototype={
gv:function(a){return 0},
gA:function(a){return C.T},
k:function(a){return String(a)},
$iskT:1}
J.fN.prototype={}
J.b5.prototype={}
J.b_.prototype={
k:function(a){var t=a[$.$get$kF()]
return t==null?this.du(a):J.Z(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjN:1}
J.aY.prototype={
bc:function(a,b){if(!!a.immutable$list)throw H.e(new P.w(b))},
bb:function(a,b){if(!!a.fixed$length)throw H.e(new P.w(b))},
j:function(a,b){this.bb(a,"add")
a.push(b)},
N:function(a,b){var t,s,r,q
t=a.length
this.bb(a,"addAll")
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.c(t===a.length||H.G(new P.a6(a)))
a.push(r)}},
cG:function(a,b){return new H.bQ(a,b,[H.aq(a,0),null])},
aq:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gbe:function(a){if(a.length>0)return a[0]
throw H.e(H.dm())},
gaG:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.dm())},
bw:function(a,b,c,d,e){var t,s
this.bc(a,"setRange")
P.jX(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.b3(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.ni())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c9:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a6(a))}return!1},
dm:function(a,b){this.bc(a,"sort")
H.dJ(a,0,a.length-1,P.of())},
aM:function(a){return this.dm(a,null)},
C:function(a,b){var t
for(t=0;t<a.length;++t)if(J.z(a[t],b))return!0
return!1},
k:function(a){return P.f3(a,"[","]")},
gu:function(a){return new J.e9(a,a.length,0,null,[H.aq(a,0)])},
gv:function(a){return H.b1(a)},
gl:function(a){return a.length},
sl:function(a,b){this.bb(a,"set length")
if(b<0)throw H.e(P.b3(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
return a[b]},
i:function(a,b,c){this.bc(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isd:1,
$asd:null,
$isb:1,
$asb:null}
J.jO.prototype={}
J.e9.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.C(t))
r=this.c
if(r>=s){this.sbJ(null)
return!1}this.sbJ(t[r]);++this.c
return!0},
sbJ:function(a){this.d=a}}
J.bl.prototype={
T:function(a,b){var t
if(typeof b!=="number")throw H.e(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaE(b)
if(this.gaE(a)===t)return 0
if(this.gaE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaE:function(a){return a===0?1/a<0:a<0},
eL:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".ceil()"))},
f5:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".floor()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.w(""+a+".round()"))},
eM:function(a,b,c){if(this.T(b,c)>0)throw H.e(H.P(b))
if(this.T(a,b)<0)return b
if(this.T(a,c)>0)return c
return a},
fB:function(a,b){var t
if(b>20)throw H.e(P.b3(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaE(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gv:function(a){return a&0x1FFFFFFF},
a3:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a+b},
ab:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a-b},
d4:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a*b},
aP:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.c5(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.c5(a,b)},
c5:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.w("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
b2:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
d3:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a&b)>>>0},
dw:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a^b)>>>0},
aw:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a<b},
av:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>b},
d5:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>=b},
gA:function(a){return C.a2},
$isX:1}
J.dq.prototype={
gA:function(a){return C.a1},
$isQ:1,
$isp:1,
$isX:1}
J.dp.prototype={
gA:function(a){return C.a0},
$isQ:1,
$isX:1}
J.aZ.prototype={
ck:function(a,b){if(b<0)throw H.e(H.O(a,b))
if(b>=a.length)H.G(H.O(a,b))
return a.charCodeAt(b)},
ae:function(a,b){if(b>=a.length)throw H.e(H.O(a,b))
return a.charCodeAt(b)},
a3:function(a,b){if(typeof b!=="string")throw H.e(P.kr(b,null,null))
return a+b},
dn:function(a,b){var t=a.split(b)
return t},
dq:function(a,b,c){var t
if(c>a.length)throw H.e(P.b3(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
by:function(a,b){return this.dq(a,b,0)},
aN:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fV(b,null,null))
if(b>c)throw H.e(P.fV(b,null,null))
if(c>a.length)throw H.e(P.fV(c,null,null))
return a.substring(b,c)},
dr:function(a,b){return this.aN(a,b,null)},
fA:function(a){return a.toLowerCase()},
fD:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.ae(t,0)===133){r=J.nk(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.ck(t,q)===133?J.nl(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
eP:function(a,b,c){if(c>a.length)throw H.e(P.b3(c,0,a.length,null,null))
return H.oD(a,b,c)},
T:function(a,b){var t
if(typeof b!=="string")throw H.e(H.P(b))
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
gA:function(a){return C.V},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.O(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isv:1}
H.d.prototype={$asd:null}
H.bm.prototype={
gu:function(a){return new H.ds(this,this.gl(this),0,null,[H.ah(this,"bm",0)])},
aK:function(a,b){return this.dt(0,b)},
fz:function(a,b){var t,s
t=H.E([],[H.ah(this,"bm",0)])
C.a.sl(t,this.gl(this))
for(s=0;s<this.gl(this);++s)t[s]=this.t(0,s)
return t},
fw:function(a){return this.fz(a,!0)}}
H.ds.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.W(t)
r=s.gl(t)
if(this.b!==r)throw H.e(new P.a6(t))
q=this.c
if(q>=r){this.sah(null)
return!1}this.sah(s.t(t,q));++this.c
return!0},
sah:function(a){this.d=a}}
H.dt.prototype={
gu:function(a){return new H.fi(null,J.bC(this.a),this.b,this.$ti)},
gl:function(a){return J.e5(this.a)},
$asa_:function(a,b){return[b]}}
H.er.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.fi.prototype={
p:function(){var t=this.b
if(t.p()){this.sah(this.c.$1(t.gq()))
return!0}this.sah(null)
return!1},
gq:function(){return this.a},
sah:function(a){this.a=a},
$asdn:function(a,b){return[b]}}
H.bQ.prototype={
gl:function(a){return J.e5(this.a)},
t:function(a,b){return this.b.$1(J.mj(this.a,b))},
$asd:function(a,b){return[b]},
$asbm:function(a,b){return[b]},
$asa_:function(a,b){return[b]}}
H.dS.prototype={
gu:function(a){return new H.hN(J.bC(this.a),this.b,this.$ti)}}
H.hN.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cC.prototype={}
H.jA.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jB.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.iz.prototype={
sfg:function(a){this.z=a},
sfj:function(a){this.ch=a}}
H.b9.prototype={
c8:function(a,b){if(!this.f.w(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.b9()},
fq:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ar(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bZ();++r.d}this.y=!1}this.b9()},
eB:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
fp:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(new P.w("removeRange"))
P.jX(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dj:function(a,b){if(!this.r.w(0,a))return
this.db=b},
fa:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.c(b===1)
t=this.cx
if(t==null){t=P.jT(null,null)
this.cx=t}t.W(0,new H.iu(a,c))},
f9:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aF()
return}H.c(b===1)
t=this.cx
if(t==null){t=P.jT(null,null)
this.cx=t}t.W(0,this.gfh())},
fb:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.Y(a)
if(b!=null)P.Y(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.Z(a)
s[1]=b==null?null:b.k(0)
for(r=new P.ce(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.G(0,s)},
am:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.R(o)
p=H.ap(o)
this.fb(q,p)
if(this.db){this.aF()
if(this===u.globalState.e)throw o}}finally{this.cy=H.o9(r)
u.globalState.d=H.k8(t,"$isb9")
if(t!=null)$=t.gff()
if(this.cx!=null)for(;n=this.cx,!n.gap(n);)this.cx.cL().$0()}return s},
cF:function(a){return this.b.h(0,a)},
bM:function(a,b){var t=this.b
if(t.F(0,a))throw H.e(P.cB("Registry: ports must be registered only once."))
t.i(0,a,b)},
b9:function(){var t=this.b
if(t.gl(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aF()},
aF:function(){var t,s,r
t=this.cx
if(t!=null)t.Y(0)
for(t=this.b,s=t.gaJ(t),s=s.gu(s);s.p();)s.gq().e7()
t.Y(0)
this.c.Y(0)
u.globalState.z.ar(0,this.a)
this.dx.Y(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
gff:function(){return this.d},
geQ:function(){return this.e}}
H.iu.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.i6.prototype={
eX:function(){var t=this.a
if(t.b===t.c)return
return t.cL()},
cN:function(){var t,s,r
t=this.eX()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gap(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.cB("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gap(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aH(["command","close"])
r=new H.ao(!0,new P.dV(0,null,null,null,null,null,0,[null,P.p])).M(r)
s.toString
self.postMessage(r)}return!1}t.fn()
return!0},
c3:function(){if(self.window!=null)new H.i7(this).$0()
else for(;this.cN(););},
as:function(){var t,s,r,q,p
if(!u.globalState.x)this.c3()
else try{this.c3()}catch(r){t=H.R(r)
s=H.ap(r)
q=u.globalState.Q
p=P.aH(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.ao(!0,P.cf(null,P.p)).M(p)
q.toString
self.postMessage(p)}}}
H.i7.prototype={
$0:function(){if(!this.a.cN())return
P.nC(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.ba.prototype={
fn:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.am(this.b)}}
H.iy.prototype={}
H.f1.prototype={
$0:function(){H.ne(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.f2.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bz(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bz(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b9()},
$S:function(){return{func:1,v:true}}}
H.hZ.prototype={}
H.bv.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nV(b)
if(t.geQ()===s){s=J.W(r)
switch(s.h(r,0)){case"pause":t.c8(s.h(r,1),s.h(r,2))
break
case"resume":t.fq(s.h(r,1))
break
case"add-ondone":t.eB(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fp(s.h(r,1))
break
case"set-errors-fatal":t.dj(s.h(r,1),s.h(r,2))
break
case"ping":t.fa(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.f9(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ar(0,s)
break}return}u.globalState.f.a.W(0,new H.ba(t,new H.iB(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bv){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gv:function(a){return this.b.a}}
H.iB.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.e3(0,this.b)},
$S:function(){return{func:1}}}
H.ch.prototype={
G:function(a,b){var t,s,r
t=P.aH(["command","message","port",this,"msg",b])
s=new H.ao(!0,P.cf(null,P.p)).M(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ch){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){return C.b.dw((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bq.prototype={
e7:function(){this.c=!0
this.b=null},
e3:function(a,b){if(this.c)return
this.b.$1(b)},
$isnx:1}
H.hv.prototype={
dU:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.W(0,new H.ba(s,new H.hw(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.aP(new H.hx(this,b),0),a)}else{H.c(a>0)
throw H.e(new P.w("Timer greater than 0."))}}}
H.hw.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hx.prototype={
$0:function(){this.a.c=null
H.jo()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.au.prototype={
gv:function(a){var t=this.a
t=C.b.b2(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.au){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.ao.prototype={
M:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gl(t))
t=J.t(a)
if(!!t.$isbT)return["buffer",a]
if(!!t.$isbn)return["typed",a]
if(!!t.$iso)return this.dd(a)
if(!!t.$isnb){r=this.gd9()
q=t.gE(a)
q=H.jU(q,r,H.ah(q,"a_",0),null)
q=P.kX(q,!0,H.ah(q,"a_",0))
t=t.gaJ(a)
t=H.jU(t,r,H.ah(t,"a_",0),null)
return["map",q,P.kX(t,!0,H.ah(t,"a_",0))]}if(!!t.$iskT)return this.de(a)
if(!!t.$isa)this.d_(a)
if(!!t.$isnx)this.at(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbv)return this.df(a)
if(!!t.$isch)return this.dg(a)
if(!!t.$isbf){p=a.$static_name
if(p==null)this.at(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isau)return["capability",a.a]
if(!(a instanceof P.q))this.d_(a)
return["dart",u.classIdExtractor(a),this.dc(u.classFieldsExtractor(a))]},
at:function(a,b){throw H.e(new P.w((b==null?"Can't transmit:":b)+" "+H.f(a)))},
d_:function(a){return this.at(a,null)},
dd:function(a){var t
H.c(typeof a!=="string")
t=this.da(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.at(a,"Can't serialize indexable: ")},
da:function(a){var t,s
t=[]
C.a.sl(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.M(a[s])
return t},
dc:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.M(a[t]))
return a},
de:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.at(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sl(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.M(a[t[r]])
return["js-object",t,s]},
dg:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
df:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b8.prototype={
Z:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.cr("Bad serialized message: "+H.f(a)))
switch(C.a.gbe(a)){case"ref":H.c(J.z(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.c(J.z(a[0],"buffer"))
t=a[1]
C.a.j(this.b,t)
return t
case"typed":H.c(J.z(a[0],"typed"))
t=a[1]
C.a.j(this.b,t)
return t
case"fixed":H.c(J.z(a[0],"fixed"))
t=a[1]
C.a.j(this.b,t)
s=H.E(this.al(t),[null])
s.fixed$length=Array
return s
case"extendable":H.c(J.z(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.E(this.al(t),[null])
case"mutable":H.c(J.z(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.al(t)
case"const":H.c(J.z(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
s=H.E(this.al(t),[null])
s.fixed$length=Array
return s
case"map":return this.f_(a)
case"sendport":return this.f0(a)
case"raw sendport":H.c(J.z(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.eZ(a)
case"function":H.c(J.z(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.c(J.z(a[0],"capability"))
return new H.au(a[1])
case"dart":H.c(J.z(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.j(this.b,p)
this.al(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
al:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.Z(a[t]))
return a},
f_:function(a){var t,s,r,q,p
H.c(J.z(a[0],"map"))
t=a[1]
s=a[2]
r=P.F()
C.a.j(this.b,r)
t=J.my(t,this.geY()).fw(0)
for(q=J.W(s),p=0;p<t.length;++p)r.i(0,t[p],this.Z(q.h(s,p)))
return r},
f0:function(a){var t,s,r,q,p,o,n
H.c(J.z(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cF(r)
if(o==null)return
n=new H.bv(o,s)}else n=new H.ch(t,r,s)
C.a.j(this.b,n)
return n},
eZ:function(a){var t,s,r,q,p,o
H.c(J.z(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.W(t),p=J.W(s),o=0;o<q.gl(t);++o)r[q.h(t,o)]=this.Z(p.h(s,o))
return r}}
H.fY.prototype={}
H.hC.prototype={
R:function(a){var t,s,r
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
H.dD.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.f8.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hF.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jC.prototype={
$1:function(a){if(!!J.t(a).$isbh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dX.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.jj.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.jk.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.jl.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.jm.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.jn.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bf.prototype={
k:function(a){return"Closure '"+H.dF(this).trim()+"'"},
$isjN:1,
gfG:function(){return this},
$D:null}
H.hp.prototype={}
H.hb.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bD.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bD))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gv:function(a){var t,s
t=this.c
if(t==null)s=H.b1(this.a)
else s=typeof t!=="object"?J.at(t):H.b1(t)
return(s^H.b1(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fT(t)}}
H.hE.prototype={
k:function(a){return this.a}}
H.ee.prototype={
k:function(a){return this.a}}
H.h3.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hT.prototype={
k:function(a){return C.e.a3("Assertion failed: ",P.jM(this.a))}}
H.aL.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gv:function(a){return J.at(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aL){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ak.prototype={
gl:function(a){return this.a},
gap:function(a){return this.a===0},
gE:function(a){return new H.fc(this,[H.aq(this,0)])},
gaJ:function(a){return H.jU(this.gE(this),new H.f7(this),H.aq(this,0),H.aq(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bW(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bW(s,b)}else return this.fc(b)},
fc:function(a){var t=this.d
if(t==null)return!1
return this.ao(this.aB(t,this.an(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ai(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ai(r,b)
return s==null?null:s.b}else return this.fd(b)},
fd:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aB(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aZ()
this.b=t}this.bL(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aZ()
this.c=s}this.bL(s,b,c)}else{r=this.d
if(r==null){r=this.aZ()
this.d=r}q=this.an(b)
p=this.aB(r,q)
if(p==null)this.b1(r,q,[this.b_(b,c)])
else{o=this.ao(p,b)
if(o>=0)p[o].b=c
else p.push(this.b_(b,c))}}},
ar:function(a,b){if(typeof b==="string")return this.c2(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c2(this.c,b)
else return this.fe(b)},
fe:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aB(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c6(q)
return q.b},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aD:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a6(this))
t=t.c}},
bL:function(a,b,c){var t=this.ai(a,b)
if(t==null)this.b1(a,b,this.b_(b,c))
else t.b=c},
c2:function(a,b){var t
if(a==null)return
t=this.ai(a,b)
if(t==null)return
this.c6(t)
this.bX(a,b)
return t.b},
b_:function(a,b){var t,s
t=new H.fb(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c6:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.c(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.c(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
an:function(a){return J.at(a)&0x3ffffff},
ao:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
k:function(a){return P.no(this)},
ai:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
b1:function(a,b,c){H.c(c!=null)
a[b]=c},
bX:function(a,b){delete a[b]},
bW:function(a,b){return this.ai(a,b)!=null},
aZ:function(){var t=Object.create(null)
this.b1(t,"<non-identifier-key>",t)
this.bX(t,"<non-identifier-key>")
return t},
$isnb:1}
H.f7.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.fb.prototype={}
H.fc.prototype={
gl:function(a){return this.a.a},
gu:function(a){var t,s
t=this.a
s=new H.fd(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.fd.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a6(t))
else{t=this.c
if(t==null){this.sbK(null)
return!1}else{this.sbK(t.a)
this.c=this.c.c
return!0}}},
sbK:function(a){this.d=a}}
H.jf.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.jg.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.jh.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.f6.prototype={
k:function(a){return"RegExp/"+this.a+"/"},
gc0:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.kV(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
ee:function(a,b){var t,s
t=this.gc0()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.nT(this,s)}}
H.iA.prototype={
h:function(a,b){return this.b[b]},
e1:function(a,b){var t,s
t=this.b
s=t.input
H.c(typeof s==="string")
t=t.index
H.c(typeof t==="number"&&Math.floor(t)===t)}}
H.bT.prototype={
gA:function(a){return C.M},
$isbT:1}
H.bn.prototype={$isbn:1}
H.fs.prototype={
gA:function(a){return C.N}}
H.dw.prototype={
gl:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.dx.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
a[b]=c}}
H.dy.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
a[b]=c},
$isd:1,
$asd:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.dv.prototype={
gA:function(a){return C.O},
$isd:1,
$asd:function(){return[P.Q]},
$isb:1,
$asb:function(){return[P.Q]},
$iseQ:1}
H.ft.prototype={
gA:function(a){return C.P},
$isd:1,
$asd:function(){return[P.Q]},
$isb:1,
$asb:function(){return[P.Q]}}
H.fu.prototype={
gA:function(a){return C.Q},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.fv.prototype={
gA:function(a){return C.R},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskQ:1}
H.fw.prototype={
gA:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.fx.prototype={
gA:function(a){return C.W},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isli:1}
H.fy.prototype={
gA:function(a){return C.X},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$islj:1}
H.dz.prototype={
gA:function(a){return C.Y},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.fz.prototype={
gA:function(a){return C.Z},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.O(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$islk:1}
H.bU.prototype={
$aso:function(){},
$isd:1,
$asd:function(){return[P.p]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.p]}}
H.bV.prototype={
$aso:function(){},
$isd:1,
$asd:function(){return[P.Q]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.Q]}}
H.bW.prototype={
$aso:function(){},
$asd:function(){return[P.Q]},
$asr:function(){},
$asb:function(){return[P.Q]}}
H.bX.prototype={
$aso:function(){},
$asd:function(){return[P.p]},
$asr:function(){},
$asb:function(){return[P.p]}}
P.hV.prototype={
$1:function(a){var t,s
H.jo()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hU.prototype={
$1:function(a){var t,s
t=this.a
H.c(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hW.prototype={
$0:function(){H.jo()
this.a.$0()},
$S:function(){return{func:1}}}
P.hX.prototype={
$0:function(){H.jo()
this.a.$0()},
$S:function(){return{func:1}}}
P.eV.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.H(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.H(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eU.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bV(r)}else if(t.b===0&&!this.b)this.d.H(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.i0.prototype={
eO:function(a,b){if(a==null)a=new P.bp()
if(this.a.a!==0)throw H.e(new P.am("Future already completed"))
$.x.toString
this.H(a,b)},
eN:function(a){return this.eO(a,null)}}
P.c9.prototype={
ak:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.am("Future already completed"))
t.bN(b)},
H:function(a,b){this.a.bO(a,b)}}
P.iR.prototype={
ak:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.am("Future already completed"))
t.ag(b)},
H:function(a,b){this.a.H(a,b)}}
P.cb.prototype={
fk:function(a){if(this.c!==6)return!0
H.c(!0)
return this.b.b.bi(this.d,a.a)},
f8:function(a){var t,s
t=(this.c&2)!==0
if(t){H.c(t)
t=this.e!=null}else t=!1
H.c(t)
s=this.e
t=this.b.b
if(H.bz(s,{func:1,args:[P.q,P.c1]}))return t.fs(s,a.a,a.b)
else return t.bi(s,a.a)}}
P.J.prototype={
bk:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.o1(b,t)}s=new P.J(0,t,null,[null])
r=b==null?1:3
this.aU(new P.cb(null,s,r,a,b,[H.aq(this,0),null]))
return s},
aI:function(a){return this.bk(a,null)},
fF:function(a){var t,s
t=$.x
s=new P.J(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aq(this,0)
this.aU(new P.cb(null,s,8,a,null,[t,t]))
return s},
bQ:function(a){H.c(this.a<4)
H.c(a.a>=4)
this.a=a.a
this.c=a.c},
aU:function(a){var t
H.c(a.a==null)
t=this.a
if(t<=1){a.a=H.k8(this.c,"$iscb")
this.c=a}else{if(t===2){H.c(!0)
t=this.c
if(t.a<4){t.aU(a)
return}this.bQ(t)}H.c(this.a>=4)
t=this.b
t.toString
P.bx(null,null,t,new P.ic(this,a))}},
c1:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.c(!0)
s=this.c
if(s.a<4){s.c1(a)
return}this.bQ(s)}H.c(this.a>=4)
t.a=this.aj(a)
s=this.b
s.toString
P.bx(null,null,s,new P.il(t,this))}},
b0:function(){H.c(this.a<4)
var t=this.c
this.c=null
return this.aj(t)},
aj:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ag:function(a){var t,s
H.c(this.a<4)
t=this.$ti
if(H.cl(a,"$isaX",t,"$asaX"))if(H.cl(a,"$isJ",t,null))P.ig(a,this)
else P.lm(a,this)
else{s=this.b0()
H.c(this.a<4)
this.a=4
this.c=a
P.bu(this,s)}},
bV:function(a){var t
H.c(this.a<4)
H.c(!J.t(a).$isaX)
t=this.b0()
H.c(this.a<4)
this.a=4
this.c=a
P.bu(this,t)},
H:function(a,b){var t
H.c(this.a<4)
t=this.b0()
H.c(this.a<4)
this.a=8
this.c=new P.be(a,b)
P.bu(this,t)},
e8:function(a){return this.H(a,null)},
bN:function(a){var t
H.c(this.a<4)
if(H.cl(a,"$isaX",this.$ti,"$asaX")){this.e6(a)
return}H.c(this.a===0)
this.a=1
t=this.b
t.toString
P.bx(null,null,t,new P.ie(this,a))},
e6:function(a){var t
if(H.cl(a,"$isJ",this.$ti,null)){if(a.a===8){H.c(this.a===0)
this.a=1
t=this.b
t.toString
P.bx(null,null,t,new P.ik(this,a))}else P.ig(a,this)
return}P.lm(a,this)},
bO:function(a,b){var t
H.c(this.a<4)
H.c(this.a===0)
this.a=1
t=this.b
t.toString
P.bx(null,null,t,new P.id(this,a,b))},
$isaX:1,
gb3:function(){return this.a},
ges:function(){return this.c}}
P.ic.prototype={
$0:function(){P.bu(this.a,this.b)},
$S:function(){return{func:1}}}
P.il.prototype={
$0:function(){P.bu(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ih.prototype={
$1:function(a){var t=this.a
H.c(t.a===1)
H.c(t.a===1)
t.a=0
t.ag(a)},
$S:function(){return{func:1,args:[,]}}}
P.ii.prototype={
$2:function(a,b){var t=this.a
H.c(t.a===1)
t.H(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.ij.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.ie.prototype={
$0:function(){this.a.bV(this.b)},
$S:function(){return{func:1}}}
P.ik.prototype={
$0:function(){P.ig(this.b,this.a)},
$S:function(){return{func:1}}}
P.id.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.ip.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.c((p&1)===0)
o=(p&2)===0
H.c(o)
t=null
try{H.c(o)
H.c(p===8)
t=q.b.b.cM(q.d)}catch(n){s=H.R(n)
r=H.ap(n)
if(this.c){q=this.a.a
H.c(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.c(q.a===8)
p.b=q.c}else p.b=new P.be(s,r)
p.a=!0
return}if(!!J.t(t).$isaX){if(t instanceof P.J&&t.gb3()>=4){if(t.gb3()===8){q=t
H.c(q.gb3()===8)
p=this.b
p.b=q.ges()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aI(new P.iq(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.iq.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.io.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.c((r.c&1)!==0)
this.a.b=r.b.b.bi(r.d,this.c)}catch(q){t=H.R(q)
s=H.ap(q)
r=this.a
r.b=new P.be(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.im.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.c(q.a===8)
t=q.c
q=this.c
if(q.fk(t)){H.c((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.f8(t)
p.a=!1}}catch(o){s=H.R(o)
r=H.ap(o)
q=this.a
p=q.a
H.c(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.c(q.a===8)
m.b=q.c}else m.b=new P.be(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dT.prototype={}
P.c2.prototype={
gl:function(a){var t,s
t={}
s=new P.J(0,$.x,null,[P.p])
t.a=0
this.cD(new P.hi(t),!0,new P.hj(t,s),s.gbU())
return s},
gbe:function(a){var t,s
t={}
s=new P.J(0,$.x,null,[H.ah(this,"c2",0)])
t.a=null
t.a=this.cD(new P.hg(t,this,s),!0,new P.hh(s),s.gbU())
return s}}
P.hi.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.hj.prototype={
$0:function(){this.b.ag(this.a.a)},
$S:function(){return{func:1}}}
P.hg.prototype={
$1:function(a){P.nU(this.a.a,this.c,a)},
$S:function(){return H.oc(function(a){return{func:1,args:[a]}},this.b,"c2")}}
P.hh.prototype={
$0:function(){var t,s,r,q
try{r=H.dm()
throw H.e(r)}catch(q){t=H.R(q)
s=H.ap(q)
P.nW(this.a,t,s)}},
$S:function(){return{func:1}}}
P.hf.prototype={}
P.iZ.prototype={
$0:function(){return this.a.ag(this.b)},
$S:function(){return{func:1}}}
P.be.prototype={
k:function(a){return H.f(this.a)},
$isbh:1}
P.iY.prototype={}
P.j1.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bp()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.iD.prototype={
ft:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.lr(null,null,this,a)}catch(r){t=H.R(r)
s=H.ap(r)
P.j0(null,null,this,t,s)}},
fu:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.ls(null,null,this,a,b)}catch(r){t=H.R(r)
s=H.ap(r)
P.j0(null,null,this,t,s)}},
eH:function(a){return new P.iF(this,a)},
ba:function(a){return new P.iE(this,a)},
eI:function(a){return new P.iG(this,a)},
h:function(a,b){return},
cM:function(a){if($.x===C.d)return a.$0()
return P.lr(null,null,this,a)},
bi:function(a,b){if($.x===C.d)return a.$1(b)
return P.ls(null,null,this,a,b)},
fs:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.o2(null,null,this,a,b,c)}}
P.iF.prototype={
$0:function(){return this.a.cM(this.b)},
$S:function(){return{func:1}}}
P.iE.prototype={
$0:function(){return this.a.ft(this.b)},
$S:function(){return{func:1}}}
P.iG.prototype={
$1:function(a){return this.a.fu(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dV.prototype={
an:function(a){return H.ow(a)&0x3ffffff},
ao:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.iv.prototype={
gu:function(a){var t=new P.ce(this,this.r,null,null,[null])
t.c=this.e
return t},
gl:function(a){return this.a},
C:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.e9(b)},
e9:function(a){var t=this.d
if(t==null)return!1
return this.aA(t[this.az(a)],a)>=0},
cF:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.C(0,a)?a:null
else return this.ek(a)},
ek:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.az(a)]
r=this.aA(s,a)
if(r<0)return
return J.bA(s,r).gec()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.c(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bR(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.c(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bR(r,b)}else return this.W(0,b)},
W:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nR()
this.d=t}s=this.az(b)
r=t[s]
if(r==null){q=[this.aV(b)]
H.c(q!=null)
t[s]=q}else{if(this.aA(r,b)>=0)return!1
r.push(this.aV(b))}return!0},
ar:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bS(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bS(this.c,b)
else return this.em(0,b)},
em:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.az(b)]
r=this.aA(s,b)
if(r<0)return!1
this.bT(s.splice(r,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bR:function(a,b){var t
if(a[b]!=null)return!1
t=this.aV(b)
H.c(!0)
a[b]=t
return!0},
bS:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bT(t)
delete a[b]
return!0},
aV:function(a){var t,s
t=new P.iw(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bT:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.c(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.c(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
az:function(a){return J.at(a)&0x3ffffff},
aA:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.iw.prototype={
gec:function(){return this.a}}
P.ce.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a6(t))
else{t=this.c
if(t==null){this.saf(null)
return!1}else{this.saf(t.a)
this.c=this.c.b
return!0}}},
saf:function(a){this.d=a}}
P.it.prototype={}
P.dr.prototype={}
P.y.prototype={
gu:function(a){return new H.ds(a,this.gl(a),0,null,[H.ah(a,"y",0)])},
t:function(a,b){return this.h(a,b)},
cG:function(a,b){return new H.bQ(a,b,[H.ah(a,"y",0),null])},
f6:function(a,b,c){var t,s,r
t=this.gl(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gl(a))throw H.e(new P.a6(a))}return s},
cA:function(a,b,c,d){var t
P.jX(b,c,this.gl(a),null,null,null)
for(t=b;t<c;++t)this.i(a,t,d)},
k:function(a){return P.f3(a,"[","]")},
$isd:1,
$asd:null,
$isb:1,
$asb:null}
P.fj.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.fe.prototype={
gu:function(a){return new P.ix(this,this.c,this.d,this.b,null,this.$ti)},
gap:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.av(0,b)||b>=t)H.G(P.D(b,this,"index",null,t))
return this.a[(C.b.a3(this.b,b)&this.a.length-1)>>>0]},
Y:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.f3(this,"{","}")},
cL:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.dm());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
W:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bZ();++this.d},
bZ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.E(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bw(s,0,q,t,r)
C.a.bw(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc4(s)},
dM:function(a,b){var t
H.c(!0)
t=new Array(8)
t.fixed$length=Array
this.sc4(H.E(t,[b]))},
sc4:function(a){this.a=a},
$asd:null}
P.ix.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(new P.a6(t))
s=this.d
if(s===this.b){this.saf(null)
return!1}this.saf(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saf:function(a){this.e=a}}
P.h5.prototype={
N:function(a,b){var t
for(t=J.bC(b);t.p();)this.j(0,t.gq())},
k:function(a){return P.f3(this,"{","}")},
$isd:1,
$asd:null}
P.h4.prototype={}
P.bZ.prototype={$isd:1,$asd:null,$isb:1,$asb:null}
P.aD.prototype={}
P.K.prototype={}
P.aV.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aV))return!1
return this.a===b.a&&this.b===b.b},
T:function(a,b){return C.b.T(this.a,b.a)},
gv:function(a){var t=this.a
return(t^C.b.b2(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mX(H.nw(this))
s=P.cu(H.nu(this))
r=P.cu(H.nq(this))
q=P.cu(H.nr(this))
p=P.cu(H.nt(this))
o=P.cu(H.nv(this))
n=P.mY(H.ns(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
gfl:function(){return this.a},
dE:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.cr("DateTime is outside valid range: "+this.gfl()))},
$isK:1,
$asK:function(){return[P.aV]}}
P.Q.prototype={$isK:1,
$asK:function(){return[P.X]}}
P.aE.prototype={
aw:function(a,b){return C.b.aw(this.a,b.geb())},
av:function(a,b){return C.b.av(this.a,b.geb())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aE))return!1
return this.a===b.a},
gv:function(a){return this.a&0x1FFFFFFF},
T:function(a,b){return C.b.T(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.eq()
s=this.a
if(s<0)return"-"+new P.aE(0-s).k(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.ep().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isK:1,
$asK:function(){return[P.aE]}}
P.ep.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.p]}}}
P.eq.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.p]}}}
P.bh.prototype={}
P.cs.prototype={
k:function(a){return"Assertion failed"}}
P.bp.prototype={
k:function(a){return"Throw of null."}}
P.ai.prototype={
gaX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaW:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaX()+s+r
if(!this.a)return q
p=this.gaW()
o=P.jM(this.b)
return q+p+": "+H.f(o)}}
P.dH.prototype={
gaX:function(){return"RangeError"},
gaW:function(){var t,s,r
H.c(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.f0.prototype={
gaX:function(){return"RangeError"},
gaW:function(){H.c(this.a)
if(J.lZ(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gl:function(a){return this.f}}
P.w.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.c7.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.am.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a6.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jM(t))+"."}}
P.dL.prototype={
k:function(a){return"Stack Overflow"},
$isbh:1}
P.ei.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.ib.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.bL.prototype={
k:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.e.aN(r,0,75)+"..."
return s+"\n"+r}}
P.es.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.kr(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jV(b,"expando$values")
return s==null?null:H.jV(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jV(b,"expando$values")
if(s==null){s=new P.q()
H.l2(b,"expando$values",s)}H.l2(s,t,c)}}}
P.p.prototype={$isK:1,
$asK:function(){return[P.X]}}
P.a_.prototype={
aK:function(a,b){return new H.dS(this,b,[H.ah(this,"a_",0)])},
gl:function(a){var t,s
H.c(!this.$isd)
t=this.gu(this)
for(s=0;t.p();)++s
return s},
ga4:function(a){var t,s
t=this.gu(this)
if(!t.p())throw H.e(H.dm())
s=t.gq()
if(t.p())throw H.e(H.nj())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mQ("index"))
if(b<0)H.G(P.b3(b,0,null,"index",null))
for(t=this.gu(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.D(b,this,"index",null,s))},
k:function(a){return P.nh(this,"(",")")}}
P.dn.prototype={}
P.b.prototype={$isd:1,$asd:null,$asb:null}
P.aI.prototype={}
P.aJ.prototype={
gv:function(a){return P.q.prototype.gv.call(this,this)},
k:function(a){return"null"}}
P.X.prototype={$isK:1,
$asK:function(){return[P.X]}}
P.q.prototype={constructor:P.q,$isq:1,
w:function(a,b){return this===b},
gv:function(a){return H.b1(this)},
k:function(a){return H.fT(this)},
gA:function(a){return new H.aL(H.jd(this),null)},
toString:function(){return this.k(this)}}
P.c1.prototype={}
P.v.prototype={$isK:1,
$asK:function(){return[P.v]}}
P.c3.prototype={
gl:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga5:function(){return this.a}}
W.m.prototype={}
W.e7.prototype={
k:function(a){return String(a)},
$isa:1}
W.e8.prototype={
k:function(a){return String(a)},
$isa:1}
W.a5.prototype={$isq:1}
W.eb.prototype={
gl:function(a){return a.length},
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
$isb:1,
$asb:function(){return[W.a5]}}
W.ct.prototype={}
W.aS.prototype={$isa:1,$isaS:1,$ish:1}
W.aT.prototype={
d6:function(a,b,c){var t=this.ef(a,b,P.od(c,null))
return t},
ef:function(a,b,c){return a.getContext(b,c)},
$isaT:1}
W.ed.prototype={
aL:function(a){return P.j6(a.getContextAttributes())}}
W.aU.prototype={$isa:1,
gl:function(a){return a.length}}
W.eg.prototype={$isa:1,$ish:1}
W.A.prototype={$isq:1}
W.bg.prototype={
bP:function(a,b){var t,s
t=$.$get$kE()
s=t[b]
if(typeof s==="string")return s
s=this.ex(a,b)
t[b]=s
return s},
ex:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mZ()+b
if(t in a)return t
return b},
gl:function(a){return a.length}}
W.eh.prototype={}
W.ej.prototype={
h:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cw.prototype={}
W.aW.prototype={
eC:function(a,b){return a.adoptNode(b)},
ea:function(a,b){return a.createEvent(b)},
bn:function(a,b){return a.getElementsByTagName(b)},
d7:function(a,b){return a.getElementById(b)},
cK:function(a,b){return a.querySelector(b)},
$isaW:1}
W.cx.prototype={$isa:1}
W.el.prototype={
k:function(a){return String(a)}}
W.cy.prototype={
eU:function(a,b){return a.createHTMLDocument(b)}}
W.em.prototype={
gau:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cz.prototype={
gau:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cA.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga2(a))+" x "+H.f(this.ga1(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isM)return!1
return a.left===t.gbf(b)&&a.top===t.gbl(b)&&this.ga2(a)===t.ga2(b)&&this.ga1(a)===t.ga1(b)},
gv:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga2(a)
q=this.ga1(a)
return W.lp(W.bb(W.bb(W.bb(W.bb(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gbf:function(a){return a.left},
gbl:function(a){return a.top},
ga2:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isM:1,
$asM:function(){}}
W.en.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
$isr:1,
$asr:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.eo.prototype={
gl:function(a){return a.length}}
W.a7.prototype={
geF:function(a){return new W.i5(a)},
k:function(a){return a.localName},
P:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kM
if(t==null){t=H.E([],[W.dB])
s=new W.dC(t)
C.a.j(t,W.ln(null))
C.a.j(t,W.lq())
$.kM=s
d=s}else d=t
t=$.kL
if(t==null){t=new W.dY(d)
$.kL=t
c=t}else{t.a=d
c=t}}if($.aF==null){t=document
s=t.implementation
s=(s&&C.A).eU(s,"")
$.aF=s
$.jL=s.createRange()
s=$.aF
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aF.head;(t&&C.B).S(t,r)}t=$.aF
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.k8(s,"$isaS")}t=$.aF
if(!!this.$isaS)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aF.body;(t&&C.i).S(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.L,a.tagName)){t=$.jL;(t&&C.x).d8(t,q)
t=$.jL
p=(t&&C.x).eS(t,b)}else{q.innerHTML=b
p=$.aF.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.S(p,s)}t=$.aF.body
if(q==null?t!=null:q!==t)J.mA(q)
c.bu(p)
C.h.eC(document,p)
return p},
eT:function(a,b,c){return this.P(a,b,c,null)},
dl:function(a,b,c,d){a.textContent=null
this.S(a,this.P(a,b,c,d))},
dk:function(a,b){return this.dl(a,b,null,null)},
a8:function(a,b){return a.getAttribute(b)},
en:function(a,b){return a.removeAttribute(b)},
dh:function(a,b,c){return a.setAttribute(b,c)},
gcI:function(a){return new W.ca(a,"change",!1,[W.j])},
$isa:1,
$isq:1,
$isa7:1,
$ish:1,
$isu:1,
gfv:function(a){return a.tagName}}
W.j2.prototype={
$1:function(a){return!!J.t(a).$isa7},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={
eh:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isq:1,
$isj:1}
W.h.prototype={
e4:function(a,b,c,d){return a.addEventListener(b,H.aP(c,1),!1)},
f1:function(a,b){return a.dispatchEvent(b)},
ep:function(a,b,c,d){return a.removeEventListener(b,H.aP(c,1),!1)},
$isq:1,
$ish:1}
W.a8.prototype={$isq:1}
W.eN.prototype={
gl:function(a){return a.length},
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
$isb:1,
$asb:function(){return[W.a8]}}
W.eO.prototype={
gl:function(a){return a.length}}
W.eS.prototype={
gl:function(a){return a.length}}
W.a9.prototype={$isq:1}
W.cF.prototype={}
W.eX.prototype={
gl:function(a){return a.length}}
W.bM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cG.prototype={}
W.cH.prototype={
fI:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
fm:function(a,b,c){return a.open(b,c)},
G:function(a,b){return a.send(b)}}
W.bN.prototype={}
W.bi.prototype={$isbi:1}
W.bj.prototype={$isbj:1}
W.bk.prototype={$isbk:1}
W.bO.prototype={$isa:1,$isa7:1,$ish:1,$isbO:1}
W.b0.prototype={$isq:1,$isj:1,$isb0:1}
W.fh.prototype={
k:function(a){return String(a)}}
W.bR.prototype={}
W.fo.prototype={
gl:function(a){return a.length}}
W.fp.prototype={
fH:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bS.prototype={}
W.aa.prototype={$isq:1}
W.fq.prototype={
gl:function(a){return a.length},
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
$isb:1,
$asb:function(){return[W.aa]}}
W.S.prototype={$isq:1,$isj:1,$isS:1}
W.fA.prototype={$isa:1}
W.U.prototype={
ga4:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.am("No elements"))
if(s>1)throw H.e(new P.am("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.S(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.m3(t,c,C.v.h(t.childNodes,b))},
gu:function(a){var t=this.a.childNodes
return new W.cD(t,t.length,-1,null,[H.ah(t,"B",0)])},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asd:function(){return[W.u]},
$asdr:function(){return[W.u]},
$asb:function(){return[W.u]},
$asbZ:function(){return[W.u]}}
W.u.prototype={
fo:function(a){var t=a.parentNode
if(t!=null)J.bB(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.ds(a):t},
S:function(a,b){return a.appendChild(b)},
eo:function(a,b){return a.removeChild(b)},
eq:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
$ish:1,
$isu:1,
gbg:function(a){return a.previousSibling}}
W.dA.prototype={
bh:function(a){return a.previousNode()}}
W.bY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.fJ.prototype={$isa:1}
W.fM.prototype={
gl:function(a){return a.length}}
W.ab.prototype={$isq:1,
gl:function(a){return a.length}}
W.fO.prototype={
gl:function(a){return a.length},
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
$isb:1,
$asb:function(){return[W.ab]}}
W.fR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fS.prototype={
G:function(a,b){return a.send(b)}}
W.dG.prototype={
eS:function(a,b){return a.createContextualFragment(b)},
d8:function(a,b){return a.selectNodeContents(b)}}
W.h2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.dI.prototype={
G:function(a,b){return a.send(b)}}
W.c0.prototype={$isc0:1,
gl:function(a){return a.length}}
W.h6.prototype={$isa:1,$ish:1}
W.ac.prototype={$isq:1,$ish:1}
W.h7.prototype={
gl:function(a){return a.length},
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
$isb:1,
$asb:function(){return[W.ac]}}
W.ad.prototype={$isq:1}
W.h9.prototype={
gl:function(a){return a.length},
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
$isb:1,
$asb:function(){return[W.ad]}}
W.ae.prototype={$isq:1,
gl:function(a){return a.length}}
W.he.prototype={
h:function(a,b){return this.bY(a,b)},
i:function(a,b,c){this.ew(a,b,c)},
aD:function(a,b){var t,s
for(t=0;!0;++t){s=this.ej(a,t)
if(s==null)return
b.$2(s,this.bY(a,s))}},
gl:function(a){return a.length},
bY:function(a,b){return a.getItem(b)},
ej:function(a,b){return a.key(b)},
ew:function(a,b,c){return a.setItem(b,c)}}
W.a0.prototype={$isq:1}
W.an.prototype={}
W.dM.prototype={
P:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aO(a,b,c,d)
t=W.n0("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.U(s).N(0,new W.U(t))
return s}}
W.hn.prototype={
P:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aO(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.P(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga4(t)
r.toString
t=new W.U(r)
q=t.ga4(t)
s.toString
q.toString
new W.U(s).N(0,new W.U(q))
return s}}
W.ho.prototype={
P:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aO(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.P(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga4(t)
s.toString
r.toString
new W.U(s).N(0,new W.U(r))
return s}}
W.c4.prototype={$isc4:1}
W.af.prototype={$isq:1,$ish:1}
W.a1.prototype={$isq:1,$ish:1}
W.hr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a1]},
$isd:1,
$asd:function(){return[W.a1]},
$isr:1,
$asr:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.hs.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.af]},
$isd:1,
$asd:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.hu.prototype={
gl:function(a){return a.length}}
W.ag.prototype={$isq:1}
W.b4.prototype={$isq:1,$isj:1,$isb4:1}
W.hy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ag]},
$isd:1,
$asd:function(){return[W.ag]},
$isr:1,
$asr:function(){return[W.ag]},
$isb:1,
$asb:function(){return[W.ag]}}
W.hz.prototype={
gl:function(a){return a.length}}
W.bs.prototype={}
W.hB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.dQ.prototype={
bh:function(a){return a.previousNode()}}
W.aM.prototype={}
W.hG.prototype={
k:function(a){return String(a)},
$isa:1}
W.bt.prototype={$isbt:1}
W.hI.prototype={
gl:function(a){return a.length}}
W.hL.prototype={
gl:function(a){return a.length}}
W.hM.prototype={
G:function(a,b){return a.send(b)}}
W.b6.prototype={
geW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.w("deltaY is not supported"))},
$isq:1,
$isj:1,
$isS:1,
$isb6:1}
W.c8.prototype={
geE:function(a){var t,s
t=P.X
s=new P.J(0,$.x,null,[t])
this.ed(a)
this.er(a,W.lu(new W.hO(new P.iR(s,[t]))))
return s},
er:function(a,b){return a.requestAnimationFrame(H.aP(b,1))},
ed:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1,
$ish:1}
W.hO.prototype={
$1:function(a){this.a.ak(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hP.prototype={$isa:1,$ish:1}
W.b7.prototype={$isa:1}
W.i_.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.t(b)
if(!t.$isM)return!1
s=a.left
r=t.gbf(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbl(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga2(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga1(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gv:function(a){var t,s,r,q
t=J.at(a.left)
s=J.at(a.top)
r=J.at(a.width)
q=J.at(a.height)
return W.lp(W.bb(W.bb(W.bb(W.bb(0,t),s),r),q))},
$isM:1,
$asM:function(){},
ga1:function(a){return a.height},
gbf:function(a){return a.left},
gbl:function(a){return a.top},
ga2:function(a){return a.width}}
W.dU.prototype={
gl:function(a){return a.length},
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
$isb:1,
$asb:function(){return[P.M]}}
W.i1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.A]},
$isd:1,
$asd:function(){return[W.A]},
$isr:1,
$asr:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.i3.prototype={$isa:1}
W.i4.prototype={
ga1:function(a){return a.height},
ga2:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.ir.prototype={
gl:function(a){return a.length},
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
$isb:1,
$asb:function(){return[W.a9]}}
W.is.prototype={$isa:1,$ish:1}
W.dW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$isr:1,
$asr:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.iL.prototype={$isa:1,$ish:1}
W.iO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ae]},
$isd:1,
$asd:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.iP.prototype={
gl:function(a){return a.length},
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
$isb:1,
$asb:function(){return[W.a0]}}
W.iW.prototype={$isa:1}
W.iX.prototype={$isa:1}
W.hY.prototype={
aD:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.C)(t),++p){o=t[p]
b.$2(o,q.a8(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.E([],[P.v])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.j(s,p.name)}return s},
geg:function(){return this.a}}
W.i5.prototype={
h:function(a,b){return J.jI(this.a,b)},
i:function(a,b,c){J.mC(this.a,b,c)},
gl:function(a){return this.gE(this).length}}
W.i8.prototype={
cD:function(a,b,c,d){return W.a2(this.a,this.b,a,!1,H.aq(this,0))}}
W.ca.prototype={}
W.i9.prototype={
eK:function(a){if(this.b==null)return
this.eA()
this.b=null
this.sel(null)
return},
ez:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.m0(r,this.c,t,!1)}},
eA:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.m2(r,this.c,t,!1)}},
dZ:function(a,b,c,d,e){this.ez()},
sel:function(a){this.d=a}}
W.ia.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.cd.prototype={
a6:function(a){return $.$get$lo().C(0,W.bE(a))},
X:function(a,b,c){var t,s,r
t=W.bE(a)
s=$.$get$k1()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
e_:function(a){var t,s
t=$.$get$k1()
if(t.gap(t)){for(s=0;s<262;++s)t.i(0,C.K[s],W.ol())
for(s=0;s<12;++s)t.i(0,C.m[s],W.om())}}}
W.B.prototype={
gu:function(a){return new W.cD(a,this.gl(a),-1,null,[H.ah(a,"B",0)])},
$isd:1,
$asd:null,
$isb:1,
$asb:null}
W.dC.prototype={
a6:function(a){return C.a.c9(this.a,new W.fC(a))},
X:function(a,b,c){return C.a.c9(this.a,new W.fB(a,b,c))}}
W.fC.prototype={
$1:function(a){return a.a6(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fB.prototype={
$1:function(a){return a.X(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.cg.prototype={
a6:function(a){return this.a.C(0,W.bE(a))},
X:function(a,b,c){var t,s
t=W.bE(a)
s=this.c
if(s.C(0,H.f(t)+"::"+b))return this.d.eD(c)
else if(s.C(0,"*::"+b))return this.d.eD(c)
else{s=this.b
if(s.C(0,H.f(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.f(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
e2:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aK(0,new W.iM())
s=b.aK(0,new W.iN())
this.b.N(0,t)
r=this.c
r.N(0,C.u)
r.N(0,s)}}
W.iM.prototype={
$1:function(a){return!C.a.C(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iN.prototype={
$1:function(a){return C.a.C(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iS.prototype={
X:function(a,b,c){if(this.dv(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jI(a,"template")==="")return this.e.C(0,b)
return!1}}
W.iT.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iQ.prototype={
a6:function(a){var t=J.t(a)
if(!!t.$isc_)return!1
t=!!t.$isH
if(t&&W.bE(a)==="foreignObject")return!1
if(t)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.e.by(b,"on"))return!1
return this.a6(a)}}
W.cD.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sc_(J.bA(this.a,t))
this.c=t
return!0}this.sc_(null)
this.c=s
return!1},
gq:function(){return this.d},
sc_:function(a){this.d=a}}
W.i2.prototype={$isa:1,$ish:1}
W.dB.prototype={}
W.iK.prototype={}
W.dY.prototype={
bu:function(a){new W.iU(this).$2(a,null)},
aC:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bB(t,a)}else J.bB(b,a)},
ev:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mn(a)
r=J.jI(s.geg(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.R(n)}p="element unprintable"
try{p=J.Z(a)}catch(n){H.R(n)}try{o=W.bE(a)
this.eu(a,b,t,p,o,s,r)}catch(n){if(H.R(n) instanceof P.ai)throw n
else{this.aC(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
eu:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aC(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a6(a)){this.aC(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.Z(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.aC(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.E(t.slice(0),[H.aq(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.X(a,J.mH(p),q.a8(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a8(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a8(t,p)
q.en(t,p)}}if(!!J.t(a).$isc4)this.bu(a.content)}}
W.iU.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.ev(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bB(r,a)}else J.bB(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.mp(t)}catch(q){H.R(q)
r=t
J.bB(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.u,W.u]}}}
W.bF.prototype={$isd:1,
$asd:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.bG.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bH.prototype={$isd:1,
$asd:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.bI.prototype={$isd:1,
$asd:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.bJ.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bK.prototype={$isd:1,
$asd:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cI.prototype={}
W.d1.prototype={$isd:1,
$asd:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cO.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cV.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cW.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cX.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cY.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isb:1,
$asb:function(){return[W.ag]}}
W.cZ.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.d_.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.d0.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cM.prototype={$isd:1,
$asd:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
W.cN.prototype={$isd:1,
$asd:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cP.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cR.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cS.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cT.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.d2.prototype={$isd:1,
$asd:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.de.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.df.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.dd.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.di.prototype={$isd:1,
$asd:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
W.dj.prototype={$isd:1,
$asd:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.dk.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.dl.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.d5.prototype={$isd:1,
$asd:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.d6.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.d7.prototype={$isd:1,
$asd:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.d9.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.db.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.dg.prototype={$isd:1,
$asd:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.dh.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isb:1,
$asb:function(){return[W.ag]}}
P.hQ.prototype={
cB:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.j(t,a)
C.a.j(this.b,null)
return s},
bm:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aV(s,!0)
r.dE(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.c7("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.oe(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cB(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.F()
t.a=o
r[p]=o
this.f7(a,new P.hS(t,this))
return t.a}if(a instanceof Array){p=this.cB(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.W(a)
m=n.gl(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.bc(o),l=0;C.b.aw(l,m);++l)r.i(o,l,this.bm(n.h(a,l)))
return o}return a}}
P.hS.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bm(b)
J.m_(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.j3.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.v,,]}}}
P.hR.prototype={
f7:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.j4.prototype={
$1:function(a){return this.a.ak(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.j5.prototype={
$1:function(a){return this.a.eN(a)},
$S:function(){return{func:1,args:[,]}}}
P.iC.prototype={}
P.M.prototype={$asM:null}
P.e6.prototype={$isa:1}
P.aR.prototype={$isa:1}
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
P.eA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
P.eH.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
P.eJ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eP.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aj.prototype={}
P.aG.prototype={$isa:1}
P.eZ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$isq:1}
P.f9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.fk.prototype={$isa:1}
P.fl.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ax.prototype={$isq:1}
P.fD.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.ax]},
$isb:1,
$asb:function(){return[P.ax]}}
P.fK.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fQ.prototype={
gl:function(a){return a.length}}
P.fW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.c_.prototype={$isa:1,$isc_:1}
P.hk.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.H.prototype={
P:function(a,b,c,d){var t,s,r,q,p,o
t=H.E([],[W.dB])
C.a.j(t,W.ln(null))
C.a.j(t,W.lq())
C.a.j(t,new W.iQ())
c=new W.dY(new W.dC(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.i).eT(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.U(q)
o=t.ga4(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.S(p,r)
return p},
gcI:function(a){return new W.ca(a,"change",!1,[W.j])},
$isa:1,
$ish:1,
$isH:1}
P.hl.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hm.prototype={$isa:1}
P.dN.prototype={}
P.hq.prototype={$isa:1}
P.c5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ay.prototype={$isq:1}
P.hA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.ay]},
$isb:1,
$asb:function(){return[P.ay]}}
P.hH.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hJ.prototype={$isa:1}
P.hK.prototype={$isa:1}
P.cc.prototype={$isa:1}
P.iH.prototype={$isa:1}
P.iI.prototype={$isa:1}
P.iJ.prototype={$isa:1}
P.cL.prototype={$isd:1,
$asd:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cJ.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cQ.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isb:1,
$asb:function(){return[P.ax]}}
P.cU.prototype={$isd:1,
$asd:function(){return[P.ay]},
$isb:1,
$asb:function(){return[P.ay]}}
P.d4.prototype={$isd:1,
$asd:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.dc.prototype={$isd:1,
$asd:function(){return[P.ax]},
$isb:1,
$asb:function(){return[P.ax]}}
P.d8.prototype={$isd:1,
$asd:function(){return[P.ay]},
$isb:1,
$asb:function(){return[P.ay]}}
P.da.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.ea.prototype={
gl:function(a){return a.length}}
P.h0.prototype={
c7:function(a,b){return a.activeTexture(b)},
ca:function(a,b,c){return a.attachShader(b,c)},
cb:function(a,b,c){return a.bindBuffer(b,c)},
cc:function(a,b,c){return a.bindFramebuffer(b,c)},
cd:function(a,b,c){return a.bindTexture(b,c)},
ce:function(a,b){return a.blendEquation(b)},
cf:function(a,b,c){return a.blendFunc(b,c)},
cg:function(a,b,c,d){return a.bufferData(b,c,d)},
ci:function(a,b){return a.clear(b)},
cj:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cl:function(a,b){return a.compileShader(b)},
cm:function(a){return a.createBuffer()},
cn:function(a){return a.createProgram()},
co:function(a,b){return a.createShader(b)},
cp:function(a){return a.createTexture()},
cr:function(a,b){return a.depthMask(b)},
cs:function(a,b){return a.disable(b)},
ct:function(a,b,c,d){return a.drawArrays(b,c,d)},
cu:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cv:function(a,b){return a.enable(b)},
cw:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a){return P.j6(a.getContextAttributes())},
bo:function(a){return a.getError()},
bp:function(a,b){return a.getProgramInfoLog(b)},
bq:function(a,b,c){return a.getProgramParameter(b,c)},
br:function(a,b){return a.getShaderInfoLog(b)},
bs:function(a,b,c){return a.getShaderParameter(b,c)},
bt:function(a,b,c){return a.getUniformLocation(b,c)},
cC:function(a,b){return a.linkProgram(b)},
cJ:function(a,b,c){return a.pixelStorei(b,c)},
bx:function(a,b,c){return a.shaderSource(b,c)},
bz:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bj:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.t(g)
if(!!t.$isbj||g==null)s=!0
else s=!1
if(s){this.b4(a,b,c,d,e,f,P.lB(g))
return}if(!!t.$isbk)s=!0
else s=!1
if(s){this.b5(a,b,c,d,e,f,g)
return}if(!!t.$isaT)s=!0
else s=!1
if(s){this.b6(a,b,c,d,e,f,g)
return}if(!!t.$isbt)s=!0
else s=!1
if(s){this.b7(a,b,c,d,e,f,g)
return}if(!!t.$isbi)t=!0
else t=!1
if(t){this.b8(a,b,c,d,e,f,g)
return}throw H.e(P.cr("Incorrect number or type of arguments"))},
cO:function(a,b,c,d,e,f,g){return this.bj(a,b,c,d,e,f,g,null,null,null)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cP:function(a,b,c,d){return a.texParameterf(b,c,d)},
cQ:function(a,b,c,d){return a.texParameteri(b,c,d)},
cR:function(a,b,c){return a.uniform1f(b,c)},
cS:function(a,b,c){return a.uniform1fv(b,c)},
cT:function(a,b,c){return a.uniform1i(b,c)},
cU:function(a,b,c){return a.uniform1iv(b,c)},
cV:function(a,b,c){return a.uniform2fv(b,c)},
cW:function(a,b,c){return a.uniform3fv(b,c)},
cX:function(a,b,c){return a.uniform4fv(b,c)},
cY:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cZ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d0:function(a,b){return a.useProgram(b)},
d1:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d2:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h1.prototype={
eG:function(a,b){return a.beginTransformFeedback(b)},
eJ:function(a,b){return a.bindVertexArray(b)},
eV:function(a){return a.createVertexArray()},
f2:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
f3:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
f4:function(a){return a.endTransformFeedback()},
fC:function(a,b,c,d){this.ey(a,b,c,d)
return},
ey:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fE:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c7:function(a,b){return a.activeTexture(b)},
ca:function(a,b,c){return a.attachShader(b,c)},
cb:function(a,b,c){return a.bindBuffer(b,c)},
cc:function(a,b,c){return a.bindFramebuffer(b,c)},
cd:function(a,b,c){return a.bindTexture(b,c)},
ce:function(a,b){return a.blendEquation(b)},
cf:function(a,b,c){return a.blendFunc(b,c)},
cg:function(a,b,c,d){return a.bufferData(b,c,d)},
ci:function(a,b){return a.clear(b)},
cj:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cl:function(a,b){return a.compileShader(b)},
cm:function(a){return a.createBuffer()},
cn:function(a){return a.createProgram()},
co:function(a,b){return a.createShader(b)},
cp:function(a){return a.createTexture()},
cr:function(a,b){return a.depthMask(b)},
cs:function(a,b){return a.disable(b)},
ct:function(a,b,c,d){return a.drawArrays(b,c,d)},
cu:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cv:function(a,b){return a.enable(b)},
cw:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a){return P.j6(a.getContextAttributes())},
bo:function(a){return a.getError()},
bp:function(a,b){return a.getProgramInfoLog(b)},
bq:function(a,b,c){return a.getProgramParameter(b,c)},
br:function(a,b){return a.getShaderInfoLog(b)},
bs:function(a,b,c){return a.getShaderParameter(b,c)},
bt:function(a,b,c){return a.getUniformLocation(b,c)},
cC:function(a,b){return a.linkProgram(b)},
cJ:function(a,b,c){return a.pixelStorei(b,c)},
bx:function(a,b,c){return a.shaderSource(b,c)},
bz:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bj:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.t(g)
if(!!t.$isbj||g==null)s=!0
else s=!1
if(s){this.b4(a,b,c,d,e,f,P.lB(g))
return}if(!!t.$isbk)s=!0
else s=!1
if(s){this.b5(a,b,c,d,e,f,g)
return}if(!!t.$isaT)s=!0
else s=!1
if(s){this.b6(a,b,c,d,e,f,g)
return}if(!!t.$isbt)s=!0
else s=!1
if(s){this.b7(a,b,c,d,e,f,g)
return}if(!!t.$isbi)t=!0
else t=!1
if(t){this.b8(a,b,c,d,e,f,g)
return}throw H.e(P.cr("Incorrect number or type of arguments"))},
cO:function(a,b,c,d,e,f,g){return this.bj(a,b,c,d,e,f,g,null,null,null)},
b4:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cP:function(a,b,c,d){return a.texParameterf(b,c,d)},
cQ:function(a,b,c,d){return a.texParameteri(b,c,d)},
cR:function(a,b,c){return a.uniform1f(b,c)},
cS:function(a,b,c){return a.uniform1fv(b,c)},
cT:function(a,b,c){return a.uniform1i(b,c)},
cU:function(a,b,c){return a.uniform1iv(b,c)},
cV:function(a,b,c){return a.uniform2fv(b,c)},
cW:function(a,b,c){return a.uniform3fv(b,c)},
cX:function(a,b,c){return a.uniform4fv(b,c)},
cY:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cZ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
d0:function(a,b){return a.useProgram(b)},
d1:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d2:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iV.prototype={$isa:1}
P.ha.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.D(b,a,null,null,null))
return P.j6(this.ei(a,b))},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
ei:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.aI]},
$isb:1,
$asb:function(){return[P.aI]}}
P.cK.prototype={$isd:1,
$asd:function(){return[P.aI]},
$isb:1,
$asb:function(){return[P.aI]}}
P.d3.prototype={$isd:1,
$asd:function(){return[P.aI]},
$isb:1,
$asb:function(){return[P.aI]}}
B.jv.prototype={
$1:function(a){$.$get$j7().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.b0]}}}
B.jw.prototype={
$1:function(a){$.$get$j7().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.b0]}}}
B.jx.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.oa=t
$.ob=C.b.ab(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.kb=s-C.b.K(window.innerWidth,2)
$.lP=-(t-C.b.K(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.S]}}}
B.jy.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cn=t-C.b.K(window.innerWidth,2)
$.co=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$cm().i(0,"right",!0)
else $.$get$cm().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.S]}}}
B.jz.prototype={
$1:function(a){if(a.button===2)$.$get$cm().i(0,"right",null)
else $.$get$cm().i(0,"left",null)},
$S:function(){return{func:1,args:[W.S]}}}
B.fE.prototype={
dO:function(a,b,c,d){var t
d.toString
W.a2(d,W.ok().$1(d),new B.fF(this),!1,W.b6)
W.a2(d,"mousemove",new B.fG(this),!1,W.S)
t=W.b4
W.a2(d,"touchstart",new B.fH(),!1,t)
W.a2(d,"touchmove",new B.fI(this),!1,t)
B.oA(null)}}
B.fF.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a3.geW(a)*r.k3
if(C.c.ab(r.fy,t)>0)r.fy=H.a3(C.c.ab(r.fy,t))}catch(q){s=H.R(q)
P.Y(s)}},
$S:function(){return{func:1,args:[W.b6]}}}
B.fG.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a3(t.go+C.b.ab($.kb,$.cn)*0.01)
s=t.id
r=$.co
q=$.lP
t.id=H.a3(s+(r-q)*0.01)
$.cn=$.kb
$.co=q}},
$S:function(){return{func:1,args:[W.S]}}}
B.fH.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a7(t.clientX)
C.c.a7(t.clientY)
$.cn=s
C.c.a7(t.clientX)
$.co=C.c.a7(t.clientY)},
$S:function(){return{func:1,args:[W.b4]}}}
B.fI.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a7(t.clientX)
t=C.c.a7(t.clientY)
r=this.a
r.go=H.a3(r.go+C.b.ab(s,$.cn)*0.01)
r.id=H.a3(r.id+($.co-t)*0.01)
$.cn=s
$.co=t},
$S:function(){return{func:1,args:[W.b4]}}}
G.fr.prototype={}
G.dR.prototype={
a0:function(a,b){var t=this.d
if(H.aC(!t.F(0,a)))H.aO("uniform "+a+" already set")
t.i(0,a,b)},
aS:function(){return this.d},
k:function(a){var t,s,r,q
t=H.E(["{"+new H.aL(H.jd(this),null).k(0)+"}["+H.f(this.a)+"]"],[P.v])
for(s=this.d,r=s.gE(s),r=r.gu(r);r.p();){q=r.gq()
C.a.j(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.aq(t,"\n")}}
G.ec.prototype={}
G.ef.prototype={
cz:function(a,b,c){J.mk(this.a,b)
if(c>0)J.mO(this.a,b,c)}}
G.eT.prototype={}
G.eL.prototype={}
G.eM.prototype={}
G.eW.prototype={
bD:function(a){var t=this.e
H.c(!t.F(0,a))
H.c(C.e.by(a,"a"))
switch($.$get$V().h(0,a).a){case"vec2":t.i(0,a,H.E([],[T.aB]))
break
case"vec3":t.i(0,a,H.E([],[T.l]))
break
case"vec4":t.i(0,a,H.E([],[T.aN]))
break
case"float":t.i(0,a,H.E([],[P.Q]))
break
case"uvec4":t.i(0,a,H.E([],[[P.b,P.p]]))
break
default:if(H.aC(!1))H.aO("unknown type for "+a)}},
dB:function(a){var t,s,r,q,p,o
H.c(a.length===3)
t=this.d
s=t.length
C.a.j(this.b,new G.eL(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
o=new T.l(new Float32Array(3))
o.B(p)
C.a.j(t,o)}},
dz:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.aB(o))}},
dA:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new T.l(new Float32Array(3))
o.B(p)
r.j(t,o)}},
dC:function(a){var t,s,r,q,p,o
H.c(a.length===4)
t=this.d
s=t.length
C.a.j(this.c,new G.eM(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.C)(a),++q){p=a[q]
o=new T.l(new Float32Array(3))
o.B(p)
C.a.j(t,o)}},
dI:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.c(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.E(r,[P.p])
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
p+=6}H.c(p===q.length)
return q},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gu(r);r.p();){q=r.gq()
p=$.$get$V().h(0,q).a
C.a.j(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aq(t," ")}}
G.fa.prototype={}
G.dE.prototype={
aR:function(a,b){var t=this.x.a
a[b]=t[0]
a[b+1]=t[1]
a[b+2]=t[2]
t=this.y.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.z.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]
a[b+7]=this.Q},
k:function(a){return"PL: p:"+J.Z(this.x)+"  r:"+this.Q}}
G.cv.prototype={
aR:function(a,b){var t=this.x.a
a[b+4]=t[0]
a[b+5]=t[1]
a[b+6]=t[2]
t=this.y.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.z.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]},
k:function(a){return"DL: p:"+J.Z(this.x)}}
G.dK.prototype={
aR:function(a,b){var t=this.x.a
a[b]=t[0]
a[b+1]=t[1]
a[b+2]=t[2]
t=this.y.a
a[b+4]=t[0]
a[b+5]=t[1]
a[b+6]=t[2]
t=this.z.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.Q.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]
a[b+7]=this.ch
a[b+11]=Math.cos(H.lz(this.cx))
a[b+15]=this.cy},
k:function(a){return"SL: p:"+J.Z(this.x)+"  d:"+J.Z(this.y)+"  r:"+this.ch+"  a:"+H.f(this.cx)}}
G.eY.prototype={
aS:function(){var t,s,r
t=this.y
s=this.z
G.n9(t,s,this.x)
r=this.d
r.i(0,"uLightDescs",t)
r.i(0,"uLightTypes",s)
return r}}
G.dP.prototype={}
G.dO.prototype={}
G.fm.prototype={
dN:function(a){this.a0("cDepthTest",!0)
this.a0("cDepthWrite",!0)
this.a0("cBlendEquation",$.$get$ks())
this.a0("cStencilFunc",$.$get$l5())}}
G.du.prototype={
bC:function(a,b,c){var t,s
if(C.e.ae(a,0)===105){if(H.aC(C.b.aP(b.length,c)===this.z))H.aO("ChangeAttribute "+this.z)}else H.c(C.b.aP(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.e2(t.a,34962,s)
J.kg(t.a,34962,b,35048)},
ay:function(a){this.ch=a
this.bC("aPosition",a,3)},
dJ:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ac:function(a,b,c){var t,s,r,q,p,o
t=J.kd(a,0)===105
if(t&&this.z===0)this.z=C.b.aP(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.e4(r.a))
this.bC(a,b,c)
q=$.$get$V().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aC(p.F(0,a)))H.aO("unexpected attribute "+a)
o=p.h(0,a)
J.e3(r.a,this.e)
r.cz(0,o,t?1:0)
s=s.h(0,a)
p=q.bE()
J.e2(r.a,34962,s)
J.kq(r.a,o,p,5126,!1,0,0)},
bB:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.e4(s.a))
this.ay(a)
r=$.$get$V().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.c(q.F(0,"aPosition"))
p=q.h(0,"aPosition")
J.e3(s.a,this.e)
s.cz(0,p,0)
t=t.h(0,"aPosition")
q=r.bE()
J.e2(s.a,34962,t)
J.kq(s.a,p,q,5126,!1,0,0)},
ad:function(a){var t,s,r,q
H.c(this.ch!=null)
t=this.ch.length
if(t<768){this.saY(new Uint8Array(H.j_(a)))
this.Q=5121}else if(t<196608){this.saY(new Uint16Array(H.j_(a)))
this.Q=5123}else{this.saY(new Uint32Array(H.j_(a)))
this.Q=5125}t=this.d
J.e3(t.a,this.e)
s=this.y
r=this.cx
t.toString
q=J.t(r)
H.c(!!q.$isli||!!q.$islj||!!q.$islk)
J.e2(t.a,34963,s)
J.kg(t.a,34963,r,35048)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gE(t),t=t.gu(t);t.p();){r=t.gq()
C.a.j(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+H.f(this.a)+"] "+C.a.aq(s,"  ")},
saY:function(a){this.cx=a}}
G.fL.prototype={
dD:function(a,b){var t=C.b.d4(a,b)
if(this.z===t)return
this.z=t
this.bH()},
bH:function(){var t,s,r,q,p,o,n
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
t.aa(0,0,1/(p*s))
t.aa(1,1,1/p)
t.aa(2,2,(q+r)/o)
t.aa(3,2,-1)
t.aa(2,3,2*r*q/o)},
aS:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.l(new Float32Array(H.n(3)))
o.O(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.B(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.t(n)
r=!!s.$isaN
k=r?s.gau(n):1
if(!!s.$isl){j=s.gm(n)
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
a3.B(this.db)
a3.cH(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.h_.prototype={
dK:function(a){var t,s,r,q,p,o
t=this.e.x
s=a.e.x
if(t.gl(t)!==s.gl(s))return!1
for(r=t.gE(t),r=r.gu(r);r.p();){q=r.gq()
p=t.h(0,q)
o=s.h(0,q)
if(p==null?o!=null:p!==o)return!1}return!0},
dV:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gl(t)===s.gl(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gu(s);s.p();){q=s.gq()
if(!t.F(0,q))C.a.j(r,q)}for(t=this.x,s=new P.ce(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.C(0,q))C.a.j(r,q)}return r},
dY:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gu(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.kd(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.bd("E:"+(n+" : group ["+H.f(a)+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$V().h(0,n)
if(l==null)H.G("unknown "+n)
H.c(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jJ(r.a,k,m)
else if(!!J.t(m).$iskQ)J.mM(r.a,k,m)
break
case"float":if(l.c===0)J.mK(r.a,k,m)
else if(!!J.t(m).$iseQ)J.mL(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.ar(m,"$isL").a
J.kp(r.a,k,!1,j)}else if(!!J.t(m).$iseQ)J.kp(r.a,k,!1,m)
else if(H.aC(!1))H.aO("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.ar(m,"$isaw").a
J.ko(r.a,k,!1,j)}else if(!!J.t(m).$iseQ)J.ko(r.a,k,!1,m)
else if(H.aC(!1))H.aO("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.ar(m,"$isaN").a
J.kn(r.a,k,j)}else J.kn(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.ar(m,"$isl").a
J.km(r.a,k,j)}else J.km(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.ar(m,"$isaB").a
J.kl(r.a,k,j)}else J.kl(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a3(33984,this.ch)
J.ke(r.a,j)
j=H.ar(m,"$isc6").b
J.cp(r.a,3553,j)
j=this.ch
J.jJ(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.c(n==="uCubeTexture")
j=C.b.a3(33984,this.ch)
J.ke(r.a,j)
j=H.ar(m,"$isc6").b
J.cp(r.a,34067,j)
j=this.ch
J.jJ(r.a,k,j)
this.ch=this.ch+1
break
default:H.bd("Error: unknow uniform type: "+j)
H.c(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.z(m,!0))J.cq(r.a,2929)
else J.jF(r.a,2929)
break
case"cStencilFunc":H.ar(m,"$isdP")
j=m.a
if(j===1281)J.jF(r.a,2960)
else{J.cq(r.a,2960)
i=m.b
h=m.c
J.mE(r.a,j,i,h)}break
case"cDepthWrite":J.md(r.a,m)
break
case"cBlendEquation":H.ar(m,"$isdO")
j=m.a
if(j===1281)J.jF(r.a,3042)
else{J.cq(r.a,3042)
i=m.b
h=m.c
J.m7(r.a,i,h)
J.m6(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aE(1000*(s-new P.aV(t,!1).a)).k(0)},
dH:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.mN(t.a,s)
this.ch=0
this.z.Y(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r){q=b[r]
this.dY(q.a,q.aS())}s=this.Q
s.Y(0)
for(p=a.cy,p=p.gE(p),p=p.gu(p);p.p();)s.j(0,p.gq())
o=this.dV()
if(o.length!==0)P.Y("E:"+(H.f(this.a)+" "+a.f+": uninitialized inputs: "+H.f(o)))
s=a.d
p=a.e
J.e3(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dJ()
m=a.Q
l=a.z
t.toString
if(n)J.m4(t.a,p)
if(m!==-1)if(l>1)J.mi(t.a,p,s,m,0,l)
else J.mh(t.a,p,s,m,0)
else if(l>1)J.mg(t.a,p,0,s,l)
else J.mf(t.a,p,0,s)
if(n)J.ml(t.a)},
dQ:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.mb(t.a)
m=G.ll(t.a,35633,r)
J.kf(t.a,n,m)
l=G.ll(t.a,35632,p)
J.kf(t.a,n,l)
if(o.length>0)J.mI(t.a,n,o,35980)
J.mx(t.a,n)
if(!J.mw(t.a,n,35714))H.G(J.mv(t.a,n))
this.r=n
this.se5(0,P.jS(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.C)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.kj(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.C)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.kj(t.a,q,j))}},
se5:function(a,b){this.x=b}}
G.i.prototype={
bE:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.c(!1)
return-1}}}
G.aK.prototype={
aQ:function(a){var t,s,r,q,p
H.c(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.C)(a),++q){p=a[q]
H.c($.$get$V().F(0,p))
H.c(!C.a.C(s,p))
C.a.j(s,p)
r.i(0,p,this.r);++this.r}C.a.aM(s)},
V:function(a){var t,s,r,q
H.c(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
if(H.aC($.$get$V().F(0,q)))H.aO("missing uniform "+q)
H.c(!C.a.C(s,q))
C.a.j(s,q)}C.a.aM(s)},
ax:function(a){var t,s,r,q
H.c(this.b==null)
for(t=a.length,s=this.e,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
H.c($.$get$V().F(0,q))
H.c(!C.a.C(s,q))
C.a.j(s,q)}C.a.aM(s)},
bG:function(a,b){H.c(this.b==null)
this.b=this.bI(!0,a,b)},
aT:function(a){return this.bG(a,null)},
bF:function(a,b){H.c(this.b==null)
this.b=this.bI(!1,a,b)},
dR:function(a){return this.bF(a,null)},
bI:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.c(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=$.$get$V().h(0,n)
C.a.j(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.j(q,"")
l=r?"in":"out"
if(r)C.a.j(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}C.a.j(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.j(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.j(q,"")
if(c!=null)C.a.N(q,c)
if(a)C.a.j(q,"void main(void) {")
C.a.N(q,b)
if(a)C.a.j(q,"}")
return C.a.aq(q,"\n")}}
G.h8.prototype={
bv:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c},
fi:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a0=new T.l(new Float32Array(H.n(3)))
a0.O(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(H.n(3))
n=new T.l(o)
n.B(p)
n.bA(a)
n.D(0)
m=a0.cq(n)
m.D(0)
l=n.cq(m)
l.D(0)
k=m.bd(p)
j=l.bd(p)
p=n.bd(p)
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
cE:function(a){return this.fi(a,null)}}
G.ht.prototype={
dL:function(a,b){var t=this.e
if(t!==1)J.mG(a.a,b,34046,t)
J.kk(a.a,b,10240,this.r)
J.kk(a.a,b,10241,this.f)}}
G.c6.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.f_.prototype={
dS:function(a){var t,s
t=this.d
s=this.c
J.cp(t.a,s,this.b)
J.mF(t.a,s,0,6408,6408,5121,a)}}
R.hc.prototype={
e0:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nM("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.o).bP(r,"float")
r.setProperty(p,"left","")
p=C.o.bP(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.j.S(t,s)}return t},
dT:function(a,b,c){var t,s,r
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
J.jD(this.a,s)
r=this.e0(b,c,90,30)
this.d=r
J.jD(this.a,r)
t=t.createElement("div")
this.c=t
J.jD(this.a,t)}}
R.hd.prototype={
dX:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.k.fB(s,2)+" fps"
t=this.c;(t&&C.j).dk(t,b)
r=C.b.K(30*C.k.eL(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.j).S(t,q)},
dW:function(a){return this.dX(a,"")}}
A.bo.prototype={
k:function(a){return"NODE["+H.f(this.a)+"]"}}
A.br.prototype={}
A.fZ.prototype={
dG:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.m5(p.a,36160,t)
H.c(r>0&&q>0)
J.mP(p.a,this.x,this.y,r,q)
if(s!==0)J.m8(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.j(m,new G.dR(P.F(),"transforms",!1,!0))
l=new T.L(new Float32Array(16))
l.J()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.C)(q),++k)A.lD(r,q[k],l,a,m)
m.pop()}},
dF:function(){return this.dG(null)},
dP:function(a,b,c){if(this.d==null)this.d=new G.eT(this.e,null,null,null,null)}}
D.fg.prototype={
$1:function(a){this.a.ak(0,W.nY(this.b.response))},
$S:function(){return{func:1,args:[,]}}}
D.ff.prototype={
$1:function(a){return this.a.ak(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.je.prototype={
$2:function(a,b){var t=536870911&a+J.at(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.q]}}}
T.aw.prototype={
B:function(a){var t,s
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
k:function(a){return"[0] "+this.U(0).k(0)+"\n[1] "+this.U(1).k(0)+"\n[2] "+this.U(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aw){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gv:function(a){return A.e_(this.a)},
U:function(a){var t,s
t=new Float32Array(H.n(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.l(t)},
eR:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.B(a)
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
aa:function(a,b,c){H.c(a<4)
H.c(b<4)
this.a[b*4+a]=c},
B:function(a){var t,s
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
i:function(a,b,c){C.f.i(this.a,b,c)},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.L){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gv:function(a){return A.e_(this.a)},
U:function(a){var t,s
t=new Float32Array(H.n(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aN(t)},
J:function(){var t=this.a
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
cH:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.fU.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gL:function(a){return this.a[2]},
gau:function(a){return this.a[3]},
di:function(a,b){var t,s,r,q
t=Math.sqrt(a.gaH())
if(t===0)return
s=b*0.5
r=Math.sin(s)/t
q=a.a
t=this.a
t[0]=q[0]*r
t[1]=q[1]*r
t[2]=q[2]*r
t[3]=Math.cos(s)},
gl:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return Math.sqrt(s*s+r*r+q*q+p*p)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
k:function(a){var t=this.a
return H.f(t[0])+", "+H.f(t[1])+", "+H.f(t[2])+" @ "+H.f(t[3])}}
T.aB.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aB){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gv:function(a){return A.e_(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gl:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.l.prototype={
O:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
B:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.l){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gv:function(a){return A.e_(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gl:function(a){return Math.sqrt(this.gaH())},
gaH:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
D:function(a){var t,s,r
t=Math.sqrt(this.gaH())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
bd:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cq:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.l(new Float32Array(H.n(3)))
t.O(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
j:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
bA:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a9:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gL:function(a){return this.a[2]}}
T.aN.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aN){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gv:function(a){return A.e_(this.a)},
h:function(a,b){return this.a[b]},
i:function(a,b,c){C.f.i(this.a,b,c)},
gl:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gL:function(a){return this.a[2]},
gau:function(a){return this.a[3]}}
T.jq.prototype={
$1:function(a){var t=H.ar(W.nX(a.target),"$isbO")
P.Y(H.f(t.id)+" toggle "+H.f(t.checked))
$.$get$j9().h(0,t.id).c=t.checked
this.a.h(0,t.id).c=t.checked},
$S:function(){return{func:1,args:[W.j]}}}
T.js.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.Y("size change "+H.f(s)+" "+H.f(r))
this.b.dD(s,r)
t=this.d
t.z=s
t.Q=r
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
T.jp.prototype={
$1:function(a7){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
this.a.a=a7+0
t=this.c
t.go=H.a3(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.a3(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.a3(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.a3(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.a3(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.a3(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.a3(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.a3(C.c.eM(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.bv(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.k2
s=t.d.a
r=q.a
s[12]=s[12]+r[0]
s[13]=s[13]+r[1]
s[14]=s[14]+r[2]
t.cE(q)
q=t.f
r=q.a
r[0]=s[2]
r[1]=s[6]
r[2]=s[10]
t=-t.k1
q=Math.sqrt(q.gaH())
o=r[0]/q
n=r[1]/q
m=r[2]/q
q=Math.cos(t)
t=Math.sin(t)
l=1-q
k=o*o*l+q
r=m*t
j=o*n*l-r
i=n*t
h=o*m*l+i
g=n*o*l+r
f=n*n*l+q
t=o*t
e=n*m*l-t
d=m*o*l-i
c=m*n*l+t
b=m*m*l+q
q=s[0]
t=s[4]
i=s[8]
r=s[1]
a=s[5]
a0=s[9]
a1=s[2]
a2=s[6]
a3=s[10]
a4=s[3]
a5=s[7]
a6=s[11]
s[0]=q*k+t*g+i*d
s[1]=r*k+a*g+a0*d
s[2]=a1*k+a2*g+a3*d
s[3]=a4*k+a5*g+a6*d
s[4]=q*j+t*f+i*c
s[5]=r*j+a*f+a0*c
s[6]=a1*j+a2*f+a3*c
s[7]=a4*j+a5*f+a6*c
s[8]=q*h+t*e+i*b
s[9]=r*h+a*e+a0*b
s[10]=a1*h+a2*e+a3*b
s[11]=a4*h+a5*e+a6*b
this.b.dW(a7);(this.f.selectedIndex===0?this.d:this.e).dF()
C.a4.geE(window).aI(this)},
$S:function(){return{func:1,v:true,args:[P.X]}}}
T.jr.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
t=this.a
s=J.W(a)
r=s.h(a,1)
q=new G.ht(!1,!1,!1,!0,1,9729,9729)
p=J.mc(t.a)
o=new G.f_(r,"../asset/dragon/dragon.png",p,3553,t,q)
J.cp(t.a,3553,p)
J.mz(t.a,37440,1)
o.dS(r)
q.dL(t,3553)
H.c(J.mu(t.a)===0)
J.cp(t.a,3553,null)
n=G.kY("matDragon")
n.a0("uTexture",o)
n.a0("uShininess",10)
m=Y.na(s.h(a,0))
P.Y(m)
t=this.b.d
s=t.d
l=new G.du(s,J.kh(s.a),4,P.F(),t.e.x,null,0,-1,null,null,P.F(),"meshdata:../asset/dragon/dragon.obj",!1,!0)
l.bB(G.cE(m.d,null))
t=m.dI()
l.y=J.e4(s.a)
l.ad(t)
G.nO(m,l)
t=new Float32Array(H.n(9))
s=new T.L(new Float32Array(H.n(16)))
s.J()
r=new T.L(new Float32Array(H.n(16)))
r.J()
q=new Float32Array(H.n(3))
p=new Float32Array(H.n(3))
k=new Float32Array(H.n(3))
j=new Float32Array(H.n(3))
i=[]
h=new Float32Array(H.n(9))
g=new T.L(new Float32Array(H.n(16)))
g.J()
f=new T.L(new Float32Array(H.n(16)))
f.J()
e=new A.bo(null,null,i,new T.aw(h),g,f,new T.l(new Float32Array(H.n(3))),new T.l(new Float32Array(H.n(3))),new T.l(new Float32Array(H.n(3))),new T.l(new Float32Array(H.n(3))),"wrapper",!1,!0)
C.a.j(i,new A.bo(n,l,[],new T.aw(t),s,r,new T.l(q),new T.l(p),new T.l(k),new T.l(j),"meshdata:../asset/dragon/dragon.obj",!1,!0))
t=new T.l(new Float32Array(H.n(3)))
t.O(100,0,0)
e.cE(t)
C.a.j(this.c.cy,e)
this.d.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.ds=J.a.prototype.k
J.bP.prototype.du=J.bP.prototype.k
P.a_.prototype.dt=P.a_.prototype.aK
W.a7.prototype.aO=W.a7.prototype.P
W.cg.prototype.dv=W.cg.prototype.X;(function installTearOffs(){installTearOff(H.b9.prototype,"gfh",0,0,0,null,["$0"],["aF"],0)
installTearOff(H.ao.prototype,"gd9",0,0,0,null,["$1"],["M"],2)
installTearOff(H.b8.prototype,"geY",0,0,0,null,["$1"],["Z"],2)
installTearOff(P,"o6",1,0,0,null,["$1"],["nI"],1)
installTearOff(P,"o7",1,0,0,null,["$1"],["nJ"],1)
installTearOff(P,"o8",1,0,0,null,["$1"],["nK"],1)
installTearOff(P,"ly",1,0,0,null,["$0"],["o4"],0)
installTearOff(P.J.prototype,"gbU",0,0,0,null,["$2","$1"],["H","e8"],5)
installTearOff(P,"of",1,0,0,null,["$2"],["mW"],6)
installTearOff(W,"ok",1,0,0,null,["$1"],["n1"],7)
installTearOff(W,"ol",1,0,0,null,["$4"],["nP"],4)
installTearOff(W,"om",1,0,0,null,["$4"],["nQ"],4)
installTearOff(W.dA.prototype,"gbg",0,1,0,null,["$0"],["bh"],3)
installTearOff(W.dQ.prototype,"gbg",0,1,0,null,["$0"],["bh"],3)
installTearOff(T,"lK",1,0,0,null,["$0"],["ou"],0)})();(function inheritance(){inherit(P.q,null)
var t=P.q
inherit(H.jP,t)
inherit(J.a,t)
inherit(J.e9,t)
inherit(P.a_,t)
inherit(H.ds,t)
inherit(P.dn,t)
inherit(H.cC,t)
inherit(H.bf,t)
inherit(H.iz,t)
inherit(H.b9,t)
inherit(H.i6,t)
inherit(H.ba,t)
inherit(H.iy,t)
inherit(H.hZ,t)
inherit(H.bq,t)
inherit(H.hv,t)
inherit(H.au,t)
inherit(H.ao,t)
inherit(H.b8,t)
inherit(H.fY,t)
inherit(H.hC,t)
inherit(P.bh,t)
inherit(H.dX,t)
inherit(H.aL,t)
inherit(H.ak,t)
inherit(H.fb,t)
inherit(H.fd,t)
inherit(H.f6,t)
inherit(H.iA,t)
inherit(P.i0,t)
inherit(P.cb,t)
inherit(P.J,t)
inherit(P.dT,t)
inherit(P.c2,t)
inherit(P.hf,t)
inherit(P.be,t)
inherit(P.iY,t)
inherit(P.h5,t)
inherit(P.iw,t)
inherit(P.ce,t)
inherit(P.bZ,t)
inherit(P.y,t)
inherit(P.ix,t)
inherit(P.aD,t)
inherit(P.K,t)
inherit(P.aV,t)
inherit(P.X,t)
inherit(P.aE,t)
inherit(P.dL,t)
inherit(P.ib,t)
inherit(P.bL,t)
inherit(P.es,t)
inherit(P.b,t)
inherit(P.aI,t)
inherit(P.aJ,t)
inherit(P.c1,t)
inherit(P.v,t)
inherit(P.c3,t)
inherit(W.eh,t)
inherit(W.hY,t)
inherit(W.cd,t)
inherit(W.B,t)
inherit(W.dC,t)
inherit(W.cg,t)
inherit(W.iQ,t)
inherit(W.cD,t)
inherit(W.i2,t)
inherit(W.dB,t)
inherit(W.iK,t)
inherit(W.dY,t)
inherit(P.hQ,t)
inherit(P.iC,t)
inherit(G.fr,t)
inherit(G.ef,t)
inherit(G.eT,t)
inherit(G.eL,t)
inherit(G.eM,t)
inherit(G.eW,t)
inherit(G.dP,t)
inherit(G.dO,t)
inherit(G.i,t)
inherit(G.aK,t)
inherit(G.ht,t)
inherit(G.c6,t)
inherit(R.hc,t)
inherit(T.aw,t)
inherit(T.L,t)
inherit(T.fU,t)
inherit(T.aB,t)
inherit(T.l,t)
inherit(T.aN,t)
t=J.a
inherit(J.f4,t)
inherit(J.f5,t)
inherit(J.bP,t)
inherit(J.aY,t)
inherit(J.bl,t)
inherit(J.aZ,t)
inherit(H.bT,t)
inherit(H.bn,t)
inherit(W.h,t)
inherit(W.a5,t)
inherit(W.ct,t)
inherit(W.ed,t)
inherit(W.A,t)
inherit(W.cI,t)
inherit(W.ej,t)
inherit(W.ek,t)
inherit(W.el,t)
inherit(W.cy,t)
inherit(W.cz,t)
inherit(W.cA,t)
inherit(W.cT,t)
inherit(W.eo,t)
inherit(W.j,t)
inherit(W.cS,t)
inherit(W.a9,t)
inherit(W.eX,t)
inherit(W.cX,t)
inherit(W.bi,t)
inherit(W.bj,t)
inherit(W.fh,t)
inherit(W.fo,t)
inherit(W.aa,t)
inherit(W.cR,t)
inherit(W.fA,t)
inherit(W.dA,t)
inherit(W.cW,t)
inherit(W.fJ,t)
inherit(W.bs,t)
inherit(W.ab,t)
inherit(W.cP,t)
inherit(W.an,t)
inherit(W.dG,t)
inherit(W.ad,t)
inherit(W.cO,t)
inherit(W.ae,t)
inherit(W.he,t)
inherit(W.a0,t)
inherit(W.cN,t)
inherit(W.hu,t)
inherit(W.ag,t)
inherit(W.cY,t)
inherit(W.hz,t)
inherit(W.dQ,t)
inherit(W.hG,t)
inherit(W.hL,t)
inherit(W.i_,t)
inherit(W.cM,t)
inherit(W.d1,t)
inherit(W.d0,t)
inherit(W.cV,t)
inherit(W.d_,t)
inherit(W.cZ,t)
inherit(W.iW,t)
inherit(W.iX,t)
inherit(P.av,t)
inherit(P.cL,t)
inherit(P.ax,t)
inherit(P.cQ,t)
inherit(P.fP,t)
inherit(P.fQ,t)
inherit(P.fW,t)
inherit(P.cJ,t)
inherit(P.ay,t)
inherit(P.cU,t)
inherit(P.hK,t)
inherit(P.ea,t)
inherit(P.h0,t)
inherit(P.h1,t)
inherit(P.iV,t)
inherit(P.cK,t)
t=J.bP
inherit(J.fN,t)
inherit(J.b5,t)
inherit(J.b_,t)
inherit(J.jO,J.aY)
t=J.bl
inherit(J.dq,t)
inherit(J.dp,t)
t=P.a_
inherit(H.d,t)
inherit(H.dt,t)
inherit(H.dS,t)
t=H.d
inherit(H.bm,t)
inherit(H.fc,t)
inherit(H.er,H.dt)
t=P.dn
inherit(H.fi,t)
inherit(H.hN,t)
t=H.bm
inherit(H.bQ,t)
inherit(P.fe,t)
t=H.bf
inherit(H.jA,t)
inherit(H.jB,t)
inherit(H.iu,t)
inherit(H.i7,t)
inherit(H.f1,t)
inherit(H.f2,t)
inherit(H.iB,t)
inherit(H.hw,t)
inherit(H.hx,t)
inherit(H.jC,t)
inherit(H.jj,t)
inherit(H.jk,t)
inherit(H.jl,t)
inherit(H.jm,t)
inherit(H.jn,t)
inherit(H.hp,t)
inherit(H.f7,t)
inherit(H.jf,t)
inherit(H.jg,t)
inherit(H.jh,t)
inherit(P.hV,t)
inherit(P.hU,t)
inherit(P.hW,t)
inherit(P.hX,t)
inherit(P.eV,t)
inherit(P.eU,t)
inherit(P.ic,t)
inherit(P.il,t)
inherit(P.ih,t)
inherit(P.ii,t)
inherit(P.ij,t)
inherit(P.ie,t)
inherit(P.ik,t)
inherit(P.id,t)
inherit(P.ip,t)
inherit(P.iq,t)
inherit(P.io,t)
inherit(P.im,t)
inherit(P.hi,t)
inherit(P.hj,t)
inherit(P.hg,t)
inherit(P.hh,t)
inherit(P.iZ,t)
inherit(P.j1,t)
inherit(P.iF,t)
inherit(P.iE,t)
inherit(P.iG,t)
inherit(P.fj,t)
inherit(P.ep,t)
inherit(P.eq,t)
inherit(W.j2,t)
inherit(W.hO,t)
inherit(W.ia,t)
inherit(W.fC,t)
inherit(W.fB,t)
inherit(W.iM,t)
inherit(W.iN,t)
inherit(W.iT,t)
inherit(W.iU,t)
inherit(P.hS,t)
inherit(P.j3,t)
inherit(P.j4,t)
inherit(P.j5,t)
inherit(B.jv,t)
inherit(B.jw,t)
inherit(B.jx,t)
inherit(B.jy,t)
inherit(B.jz,t)
inherit(B.fF,t)
inherit(B.fG,t)
inherit(B.fH,t)
inherit(B.fI,t)
inherit(D.fg,t)
inherit(D.ff,t)
inherit(A.je,t)
inherit(T.jq,t)
inherit(T.js,t)
inherit(T.jp,t)
inherit(T.jr,t)
t=H.hZ
inherit(H.bv,t)
inherit(H.ch,t)
t=P.bh
inherit(H.dD,t)
inherit(H.f8,t)
inherit(H.hF,t)
inherit(H.hE,t)
inherit(H.ee,t)
inherit(H.h3,t)
inherit(P.cs,t)
inherit(P.bp,t)
inherit(P.ai,t)
inherit(P.w,t)
inherit(P.c7,t)
inherit(P.am,t)
inherit(P.a6,t)
inherit(P.ei,t)
t=H.hp
inherit(H.hb,t)
inherit(H.bD,t)
inherit(H.hT,P.cs)
t=H.bn
inherit(H.fs,t)
inherit(H.dw,t)
t=H.dw
inherit(H.bV,t)
inherit(H.bU,t)
inherit(H.bW,H.bV)
inherit(H.dx,H.bW)
inherit(H.bX,H.bU)
inherit(H.dy,H.bX)
t=H.dx
inherit(H.dv,t)
inherit(H.ft,t)
t=H.dy
inherit(H.fu,t)
inherit(H.fv,t)
inherit(H.fw,t)
inherit(H.fx,t)
inherit(H.fy,t)
inherit(H.dz,t)
inherit(H.fz,t)
t=P.i0
inherit(P.c9,t)
inherit(P.iR,t)
inherit(P.iD,P.iY)
inherit(P.dV,H.ak)
inherit(P.h4,P.h5)
inherit(P.it,P.h4)
inherit(P.iv,P.it)
inherit(P.dr,P.bZ)
t=P.X
inherit(P.Q,t)
inherit(P.p,t)
t=P.ai
inherit(P.dH,t)
inherit(P.f0,t)
t=W.h
inherit(W.u,t)
inherit(W.bH,t)
inherit(W.eg,t)
inherit(W.eO,t)
inherit(W.bN,t)
inherit(W.bS,t)
inherit(W.fS,t)
inherit(W.dI,t)
inherit(W.h6,t)
inherit(W.ac,t)
inherit(W.bG,t)
inherit(W.af,t)
inherit(W.a1,t)
inherit(W.bF,t)
inherit(W.hI,t)
inherit(W.hM,t)
inherit(W.c8,t)
inherit(W.hP,t)
inherit(W.b7,t)
inherit(W.iL,t)
t=W.u
inherit(W.a7,t)
inherit(W.aU,t)
inherit(W.aW,t)
inherit(W.cx,t)
inherit(W.i3,t)
t=W.a7
inherit(W.m,t)
inherit(P.H,t)
t=W.m
inherit(W.e7,t)
inherit(W.e8,t)
inherit(W.aS,t)
inherit(W.aT,t)
inherit(W.cw,t)
inherit(W.eS,t)
inherit(W.cF,t)
inherit(W.bk,t)
inherit(W.bO,t)
inherit(W.bR,t)
inherit(W.c0,t)
inherit(W.dM,t)
inherit(W.hn,t)
inherit(W.ho,t)
inherit(W.c4,t)
inherit(W.is,t)
inherit(W.bK,W.bH)
inherit(W.eb,W.bK)
inherit(W.bg,W.cI)
inherit(W.em,W.cz)
inherit(W.dl,W.cT)
inherit(W.en,W.dl)
inherit(W.a8,W.ct)
inherit(W.dj,W.cS)
inherit(W.eN,W.dj)
inherit(W.d6,W.cX)
inherit(W.bM,W.d6)
inherit(W.cG,W.aW)
inherit(W.cH,W.bN)
inherit(W.aM,W.j)
t=W.aM
inherit(W.b0,t)
inherit(W.S,t)
inherit(W.b4,t)
inherit(W.fp,W.bS)
inherit(W.dd,W.cR)
inherit(W.fq,W.dd)
inherit(W.U,P.dr)
inherit(W.de,W.cW)
inherit(W.bY,W.de)
t=W.bs
inherit(W.fM,t)
inherit(W.h2,t)
inherit(W.hB,t)
inherit(W.df,W.cP)
inherit(W.fO,W.df)
inherit(W.fR,W.an)
inherit(W.bJ,W.bG)
inherit(W.h7,W.bJ)
inherit(W.db,W.cO)
inherit(W.h9,W.db)
inherit(W.d7,W.cN)
inherit(W.hr,W.d7)
inherit(W.bI,W.bF)
inherit(W.hs,W.bI)
inherit(W.dh,W.cY)
inherit(W.hy,W.dh)
inherit(W.bt,W.bR)
inherit(W.b6,W.S)
inherit(W.di,W.cM)
inherit(W.dU,W.di)
inherit(W.dg,W.d1)
inherit(W.i1,W.dg)
inherit(W.i4,W.cA)
inherit(W.d2,W.d0)
inherit(W.ir,W.d2)
inherit(W.dk,W.cV)
inherit(W.dW,W.dk)
inherit(W.d9,W.d_)
inherit(W.iO,W.d9)
inherit(W.d5,W.cZ)
inherit(W.iP,W.d5)
inherit(W.i5,W.hY)
inherit(W.i8,P.c2)
inherit(W.ca,W.i8)
inherit(W.i9,P.hf)
inherit(W.iS,W.cg)
inherit(P.hR,P.hQ)
inherit(P.M,P.iC)
t=P.H
inherit(P.aG,t)
inherit(P.aR,t)
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
inherit(P.eF,t)
inherit(P.eG,t)
inherit(P.eH,t)
inherit(P.eI,t)
inherit(P.eJ,t)
inherit(P.eK,t)
inherit(P.eP,t)
inherit(P.fk,t)
inherit(P.fl,t)
inherit(P.fK,t)
inherit(P.c_,t)
inherit(P.hm,t)
inherit(P.hJ,t)
inherit(P.cc,t)
inherit(P.iH,t)
inherit(P.iI,t)
inherit(P.iJ,t)
t=P.aG
inherit(P.e6,t)
inherit(P.eR,t)
inherit(P.aj,t)
inherit(P.eZ,t)
inherit(P.hl,t)
inherit(P.dN,t)
inherit(P.hH,t)
inherit(P.d4,P.cL)
inherit(P.f9,P.d4)
inherit(P.dc,P.cQ)
inherit(P.fD,P.dc)
inherit(P.fX,P.aj)
inherit(P.da,P.cJ)
inherit(P.hk,P.da)
t=P.dN
inherit(P.hq,t)
inherit(P.c5,t)
inherit(P.d8,P.cU)
inherit(P.hA,P.d8)
inherit(P.d3,P.cK)
inherit(P.ha,P.d3)
t=G.fr
inherit(G.h8,t)
inherit(G.dR,t)
inherit(G.fa,t)
inherit(G.du,t)
inherit(G.h_,t)
inherit(A.br,t)
inherit(A.fZ,t)
t=G.h8
inherit(G.ec,t)
inherit(A.bo,t)
inherit(B.fE,G.ec)
t=G.fa
inherit(G.dE,t)
inherit(G.cv,t)
inherit(G.dK,t)
t=G.dR
inherit(G.eY,t)
inherit(G.fm,t)
inherit(G.fL,t)
inherit(G.f_,G.c6)
inherit(R.hd,R.hc)
mixin(H.bU,P.y)
mixin(H.bV,P.y)
mixin(H.bW,H.cC)
mixin(H.bX,H.cC)
mixin(P.bZ,P.y)
mixin(W.bF,P.y)
mixin(W.bG,P.y)
mixin(W.bH,P.y)
mixin(W.bI,W.B)
mixin(W.bJ,W.B)
mixin(W.bK,W.B)
mixin(W.cI,W.eh)
mixin(W.d1,P.y)
mixin(W.cO,P.y)
mixin(W.cV,P.y)
mixin(W.cW,P.y)
mixin(W.cX,P.y)
mixin(W.cY,P.y)
mixin(W.cZ,P.y)
mixin(W.d_,P.y)
mixin(W.d0,P.y)
mixin(W.cM,P.y)
mixin(W.cN,P.y)
mixin(W.cP,P.y)
mixin(W.cR,P.y)
mixin(W.cS,P.y)
mixin(W.cT,P.y)
mixin(W.d2,W.B)
mixin(W.de,W.B)
mixin(W.df,W.B)
mixin(W.dd,W.B)
mixin(W.di,W.B)
mixin(W.dj,W.B)
mixin(W.dk,W.B)
mixin(W.dl,W.B)
mixin(W.d5,W.B)
mixin(W.d6,W.B)
mixin(W.d7,W.B)
mixin(W.d9,W.B)
mixin(W.db,W.B)
mixin(W.dg,W.B)
mixin(W.dh,W.B)
mixin(P.cL,P.y)
mixin(P.cJ,P.y)
mixin(P.cQ,P.y)
mixin(P.cU,P.y)
mixin(P.d4,W.B)
mixin(P.dc,W.B)
mixin(P.d8,W.B)
mixin(P.da,W.B)
mixin(P.cK,P.y)
mixin(P.d3,W.B)})();(function constants(){C.i=W.aS.prototype
C.z=W.aT.prototype
C.o=W.bg.prototype
C.j=W.cw.prototype
C.A=W.cy.prototype
C.B=W.cF.prototype
C.h=W.cG.prototype
C.q=W.cH.prototype
C.C=J.a.prototype
C.a=J.aY.prototype
C.k=J.dp.prototype
C.b=J.dq.prototype
C.c=J.bl.prototype
C.e=J.aZ.prototype
C.J=J.b_.prototype
C.f=H.dv.prototype
C.v=W.bY.prototype
C.w=J.fN.prototype
C.x=W.dG.prototype
C.y=W.dM.prototype
C.n=J.b5.prototype
C.a3=W.b6.prototype
C.a4=W.c8.prototype
C.d=new P.iD()
C.p=new P.aE(0)
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
C.K=H.E(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.v])
C.L=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.u=makeConstList([])
C.l=H.E(makeConstList(["bind","if","ref","repeat","syntax"]),[P.v])
C.m=H.E(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.v])
C.M=H.N("oJ")
C.N=H.N("oK")
C.O=H.N("eQ")
C.P=H.N("oL")
C.Q=H.N("oM")
C.R=H.N("kQ")
C.S=H.N("oN")
C.T=H.N("kT")
C.U=H.N("aJ")
C.V=H.N("v")
C.W=H.N("li")
C.X=H.N("lj")
C.Y=H.N("oP")
C.Z=H.N("lk")
C.a_=H.N("aD")
C.a0=H.N("Q")
C.a1=H.N("p")
C.a2=H.N("X")})();(function staticFields(){$.l0="$cachedFunction"
$.l1="$cachedInvocation"
$.kw=null
$.ku=null
$.k2=!1
$.k6=null
$.lv=null
$.lS=null
$.j8=null
$.ji=null
$.k7=null
$.bw=null
$.ci=null
$.cj=null
$.k3=!1
$.x=C.d
$.kN=0
$.aF=null
$.jL=null
$.kM=null
$.kL=null
$.kJ=null
$.kI=null
$.kH=null
$.kG=null
$.oa=0
$.ob=0
$.kb=0
$.lP=0
$.cn=0
$.co=0
$.oB=!1
$.lF=0})();(function lazyInitializers(){lazy($,"kF","$get$kF",function(){return H.lH("_$dart_dartClosure")})
lazy($,"jQ","$get$jQ",function(){return H.lH("_$dart_js")})
lazy($,"kR","$get$kR",function(){return H.nf()})
lazy($,"kS","$get$kS",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kN
$.kN=t+1
t="expando$key$"+t}return new P.es(null,t,[P.p])})
lazy($,"l7","$get$l7",function(){return H.az(H.hD({
toString:function(){return"$receiver$"}}))})
lazy($,"l8","$get$l8",function(){return H.az(H.hD({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"l9","$get$l9",function(){return H.az(H.hD(null))})
lazy($,"la","$get$la",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"le","$get$le",function(){return H.az(H.hD(void 0))})
lazy($,"lf","$get$lf",function(){return H.az(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"lc","$get$lc",function(){return H.az(H.ld(null))})
lazy($,"lb","$get$lb",function(){return H.az(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"lh","$get$lh",function(){return H.az(H.ld(void 0))})
lazy($,"lg","$get$lg",function(){return H.az(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"k0","$get$k0",function(){return P.nH()})
lazy($,"kO","$get$kO",function(){return P.nN(null,P.aJ)})
lazy($,"ck","$get$ck",function(){return[]})
lazy($,"kE","$get$kE",function(){return{}})
lazy($,"lo","$get$lo",function(){return P.jS(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"k1","$get$k1",function(){return P.F()})
lazy($,"j7","$get$j7",function(){return P.kW(P.p,P.aD)})
lazy($,"cm","$get$cm",function(){return P.kW(P.v,P.aD)})
lazy($,"l5","$get$l5",function(){return new G.dP(1281,0,4294967295)})
lazy($,"ks","$get$ks",function(){return new G.dO(1281,1281,1281)})
lazy($,"V","$get$V",function(){return P.aH(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kC","$get$kC",function(){return T.I(1,1,1)})
lazy($,"kz","$get$kz",function(){return T.I(0,0,0)})
lazy($,"kA","$get$kA",function(){return T.I(0,0,0.5)})
lazy($,"kB","$get$kB",function(){return T.I(0,0.5,0)})
lazy($,"kD","$get$kD",function(){return T.I(1,1,0)})
lazy($,"lO","$get$lO",function(){var t=new G.aK("LightGouradV",null,[],[],[],[],0,P.F())
t.aQ(["aPosition","aNormal","aTexUV"])
t.ax(["vColor"])
t.V(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.V(["uLightDescs","uLightTypes","uShininess"])
t.V(["uEyePosition","uTexture"])
t.bF(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lM","$get$lM",function(){var t=new G.aK("LightGrouradV",null,[],[],[],[],0,P.F())
t.ax(["vColor"])
t.aT(["oFragColor = vec4(vColor, 1.0 );"])
return t})
lazy($,"lN","$get$lN",function(){var t=new G.aK("LightBlinnPhongV",null,[],[],[],[],0,P.F())
t.aQ(["aPosition","aNormal","aTexUV"])
t.ax(["vPosition","vNormal","vTexUV"])
t.V(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.dR(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"])
return t})
lazy($,"lL","$get$lL",function(){var t=new G.aK("LightBlinnPhongF",null,[],[],[],[],0,P.F())
t.ax(["vPosition","vNormal","vTexUV"])
t.V(["uLightDescs","uLightTypes","uShininess"])
t.V(["uEyePosition","uTexture"])
t.bG(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lU","$get$lU",function(){var t=new G.aK("SolidColor",null,[],[],[],[],0,P.F())
t.aQ(["aPosition"])
t.V(["uPerspectiveViewMatrix","uModelMatrix"])
t.aT(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lT","$get$lT",function(){var t=new G.aK("SolidColorF",null,[],[],[],[],0,P.F())
t.V(["uColor"])
t.aT(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lX","$get$lX",function(){return(1+P.oC(5))/2})
lazy($,"kP","$get$kP",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lX()
s=T.I(-1,t,0)
s.D(0)
r=T.I(1,t,0)
r.D(0)
q=T.I(-1,-t,0)
q.D(0)
p=T.I(1,-t,0)
p.D(0)
o=T.I(0,-1,t)
o.D(0)
n=T.I(0,1,t)
n.D(0)
m=T.I(0,-1,-t)
m.D(0)
l=T.I(0,1,-t)
l.D(0)
k=T.I(t,0,-1)
k.D(0)
j=T.I(t,0,1)
j.D(0)
i=T.I(-t,0,-1)
i.D(0)
t=T.I(-t,0,1)
t.D(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"lR","$get$lR",function(){return T.I(11,20,0)})
lazy($,"lC","$get$lC",function(){return T.I(0,-50,0)})
lazy($,"lV","$get$lV",function(){return T.I(-11,-30,0)})
lazy($,"j9","$get$j9",function(){var t,s,r,q,p,o
t=$.$get$lC()
s=$.$get$kz()
r=$.$get$kC()
q=T.fn()
p=T.fn()
o=$.$get$lR()
return P.aH(["idDirectional",new G.cv(t,s,r,40,q,p,1,"dir",!1,!0),"idPoint",new G.dE(o,$.$get$kA(),r,50,3,"point",!1,!0),"idSpot",new G.dK(o,$.$get$lV(),$.$get$kB(),r,50,0.4487989505128276,2,1,1,40,T.fn(),T.fn(),2,"spot",!1,!0)])})})()
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
mangledGlobalNames:{p:"int",Q:"double",X:"num",v:"String",aD:"bool",aJ:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.u},{func:1,ret:P.aD,args:[W.a7,P.v,P.v,W.cd]},{func:1,v:true,args:[P.q],opt:[P.c1]},{func:1,ret:P.p,args:[P.K,P.K]},{func:1,ret:P.v,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bT,ArrayBufferView:H.bn,DataView:H.fs,Float32Array:H.dv,Float64Array:H.ft,Int16Array:H.fu,Int32Array:H.fv,Int8Array:H.fw,Uint16Array:H.fx,Uint32Array:H.fy,Uint8ClampedArray:H.dz,CanvasPixelArray:H.dz,Uint8Array:H.fz,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLKeygenElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMenuElement:W.m,HTMLMenuItemElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTextAreaElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,HTMLAnchorElement:W.e7,HTMLAreaElement:W.e8,AudioTrack:W.a5,AudioTrackList:W.eb,Blob:W.ct,HTMLBodyElement:W.aS,HTMLCanvasElement:W.aT,CanvasRenderingContext2D:W.ed,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CompositorWorker:W.eg,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.bg,MSStyleCSSProperties:W.bg,CSS2Properties:W.bg,DataTransferItemList:W.ej,DeviceAcceleration:W.ek,HTMLDivElement:W.cw,XMLDocument:W.aW,Document:W.aW,DocumentFragment:W.cx,ShadowRoot:W.cx,DOMException:W.el,DOMImplementation:W.cy,DOMPoint:W.em,DOMPointReadOnly:W.cz,DOMRectReadOnly:W.cA,DOMStringList:W.en,DOMTokenList:W.eo,Element:W.a7,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a8,FileList:W.eN,FileWriter:W.eO,HTMLFormElement:W.eS,Gamepad:W.a9,HTMLHeadElement:W.cF,History:W.eX,HTMLCollection:W.bM,HTMLFormControlsCollection:W.bM,HTMLOptionsCollection:W.bM,HTMLDocument:W.cG,XMLHttpRequest:W.cH,XMLHttpRequestUpload:W.bN,XMLHttpRequestEventTarget:W.bN,ImageBitmap:W.bi,ImageData:W.bj,HTMLImageElement:W.bk,HTMLInputElement:W.bO,KeyboardEvent:W.b0,Location:W.fh,HTMLAudioElement:W.bR,HTMLMediaElement:W.bR,MediaList:W.fo,MIDIOutput:W.fp,MIDIInput:W.bS,MIDIPort:W.bS,MimeType:W.aa,MimeTypeArray:W.fq,PointerEvent:W.S,MouseEvent:W.S,DragEvent:W.S,Navigator:W.fA,Attr:W.u,Node:W.u,NodeIterator:W.dA,NodeList:W.bY,RadioNodeList:W.bY,Path2D:W.fJ,Perspective:W.fM,Plugin:W.ab,PluginArray:W.fO,PositionValue:W.fR,PresentationConnection:W.fS,Range:W.dG,Rotation:W.h2,RTCDataChannel:W.dI,DataChannel:W.dI,HTMLSelectElement:W.c0,SharedWorker:W.h6,SourceBuffer:W.ac,SourceBufferList:W.h7,SpeechGrammar:W.ad,SpeechGrammarList:W.h9,SpeechRecognitionResult:W.ae,Storage:W.he,CSSStyleSheet:W.a0,StyleSheet:W.a0,CalcLength:W.an,KeywordValue:W.an,LengthValue:W.an,NumberValue:W.an,SimpleLength:W.an,TransformValue:W.an,StyleValue:W.an,HTMLTableElement:W.dM,HTMLTableRowElement:W.hn,HTMLTableSectionElement:W.ho,HTMLTemplateElement:W.c4,TextTrack:W.af,TextTrackCue:W.a1,VTTCue:W.a1,TextTrackCueList:W.hr,TextTrackList:W.hs,TimeRanges:W.hu,Touch:W.ag,TouchEvent:W.b4,TouchList:W.hy,TrackDefaultList:W.hz,Matrix:W.bs,Skew:W.bs,TransformComponent:W.bs,Translation:W.hB,TreeWalker:W.dQ,CompositionEvent:W.aM,FocusEvent:W.aM,TextEvent:W.aM,SVGZoomEvent:W.aM,UIEvent:W.aM,URL:W.hG,HTMLVideoElement:W.bt,VideoTrackList:W.hI,VTTRegionList:W.hL,WebSocket:W.hM,WheelEvent:W.b6,Window:W.c8,DOMWindow:W.c8,Worker:W.hP,CompositorWorkerGlobalScope:W.b7,DedicatedWorkerGlobalScope:W.b7,ServiceWorkerGlobalScope:W.b7,SharedWorkerGlobalScope:W.b7,WorkerGlobalScope:W.b7,ClientRect:W.i_,ClientRectList:W.dU,DOMRectList:W.dU,CSSRuleList:W.i1,DocumentType:W.i3,DOMRect:W.i4,GamepadList:W.ir,HTMLFrameSetElement:W.is,NamedNodeMap:W.dW,MozNamedAttrMap:W.dW,ServiceWorker:W.iL,SpeechRecognitionResultList:W.iO,StyleSheetList:W.iP,WorkerLocation:W.iW,WorkerNavigator:W.iX,SVGAElement:P.e6,SVGAnimateElement:P.aR,SVGAnimateMotionElement:P.aR,SVGAnimateTransformElement:P.aR,SVGAnimationElement:P.aR,SVGSetElement:P.aR,SVGFEBlendElement:P.et,SVGFEColorMatrixElement:P.eu,SVGFEComponentTransferElement:P.ev,SVGFECompositeElement:P.ew,SVGFEConvolveMatrixElement:P.ex,SVGFEDiffuseLightingElement:P.ey,SVGFEDisplacementMapElement:P.ez,SVGFEFloodElement:P.eA,SVGFEGaussianBlurElement:P.eB,SVGFEImageElement:P.eC,SVGFEMergeElement:P.eD,SVGFEMorphologyElement:P.eE,SVGFEOffsetElement:P.eF,SVGFEPointLightElement:P.eG,SVGFESpecularLightingElement:P.eH,SVGFESpotLightElement:P.eI,SVGFETileElement:P.eJ,SVGFETurbulenceElement:P.eK,SVGFilterElement:P.eP,SVGForeignObjectElement:P.eR,SVGCircleElement:P.aj,SVGEllipseElement:P.aj,SVGLineElement:P.aj,SVGPathElement:P.aj,SVGPolygonElement:P.aj,SVGPolylineElement:P.aj,SVGGeometryElement:P.aj,SVGClipPathElement:P.aG,SVGDefsElement:P.aG,SVGGElement:P.aG,SVGSwitchElement:P.aG,SVGGraphicsElement:P.aG,SVGImageElement:P.eZ,SVGLength:P.av,SVGLengthList:P.f9,SVGMarkerElement:P.fk,SVGMaskElement:P.fl,SVGNumber:P.ax,SVGNumberList:P.fD,SVGPatternElement:P.fK,SVGPoint:P.fP,SVGPointList:P.fQ,SVGRect:P.fW,SVGRectElement:P.fX,SVGScriptElement:P.c_,SVGStringList:P.hk,SVGDescElement:P.H,SVGDiscardElement:P.H,SVGFEDistantLightElement:P.H,SVGFEFuncAElement:P.H,SVGFEFuncBElement:P.H,SVGFEFuncGElement:P.H,SVGFEFuncRElement:P.H,SVGFEMergeNodeElement:P.H,SVGMetadataElement:P.H,SVGStopElement:P.H,SVGStyleElement:P.H,SVGTitleElement:P.H,SVGComponentTransferFunctionElement:P.H,SVGElement:P.H,SVGSVGElement:P.hl,SVGSymbolElement:P.hm,SVGTextContentElement:P.dN,SVGTextPathElement:P.hq,SVGTSpanElement:P.c5,SVGTextElement:P.c5,SVGTextPositioningElement:P.c5,SVGTransform:P.ay,SVGTransformList:P.hA,SVGUseElement:P.hH,SVGViewElement:P.hJ,SVGViewSpec:P.hK,SVGLinearGradientElement:P.cc,SVGRadialGradientElement:P.cc,SVGGradientElement:P.cc,SVGCursorElement:P.iH,SVGFEDropShadowElement:P.iI,SVGMPathElement:P.iJ,AudioBuffer:P.ea,WebGLRenderingContext:P.h0,WebGL2RenderingContext:P.h1,WebGL2RenderingContextBase:P.iV,SQLResultSetRowList:P.ha})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dw.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.bW.$nativeSuperclassTag="ArrayBufferView"
H.dx.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.bX.$nativeSuperclassTag="ArrayBufferView"
H.dy.$nativeSuperclassTag="ArrayBufferView"
W.bH.$nativeSuperclassTag="EventTarget"
W.bK.$nativeSuperclassTag="EventTarget"
W.bG.$nativeSuperclassTag="EventTarget"
W.bJ.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"
W.bI.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lW(T.lK(),b)},[])
else (function(b){H.lW(T.lK(),b)})([])})})()