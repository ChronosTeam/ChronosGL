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
a[c]=function(){a[c]=function(){H.nO(b)}
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
return d?function(e){if(t===null)t=H.jJ(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jJ(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jJ(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jw:function jw(a){this.a=a},
jB:function(a,b,c,d){if(!!a.$isc)return new H.eg(a,b,[c,d])
return new H.dj(a,b,[c,d])},
dd:function(){return new P.av("No element")},
mC:function(){return new P.av("Too many elements")},
mB:function(){return new P.av("Too few elements")},
dz:function(a,b,c,d){if(c-b<=32)H.mQ(a,b,c,d)
else H.mP(a,b,c,d)},
mQ:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ae(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aq(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mP:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.ae(a2)
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
H.dz(a2,a3,g-2,a5)
H.dz(a2,f+2,a4,a5)
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
break}}H.dz(a2,g,f,a5)}else H.dz(a2,g,f,a5)},
c:function c(){},
bh:function bh(){},
di:function di(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dj:function dj(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b,c){this.a=a
this.b=b
this.$ti=c},
f3:function f3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
dI:function dI(a,b,c){this.a=a
this.b=b
this.$ti=c},
hx:function hx(a,b,c){this.a=a
this.b=b
this.$ti=c},
cv:function cv(){},
dP:function(a,b){var t=a.ai(b)
if(!u.globalState.d.cy)u.globalState.f.ao()
return t},
j2:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
ln:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isb)throw H.e(P.dZ("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ih(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kr()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hP(P.jA(null,H.b5),0)
r=P.n
s.seS(new H.ai(0,null,null,null,null,null,0,[r,H.b4]))
s.seU(new H.ai(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ig()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mw,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n4)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aj(null,null,null,r)
p=new H.bj(0,null,!1)
o=new H.b4(s,new H.ai(0,null,null,null,null,null,0,[r,H.bj]),q,u.createNewIsolate(),p,new H.as(H.j9()),new H.as(H.j9()),!1,!1,[],P.aj(null,null,null,null),null,null,!1,!0,P.aj(null,null,null,null))
q.l(0,0)
o.bE(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bt(a,{func:1,args:[,]}))o.ai(new H.jf(t,a))
else if(H.bt(a,{func:1,args:[,,]}))o.ai(new H.jg(t,a))
else o.ai(a)
u.globalState.f.ao()},
n4:function(a){var t=P.aX(["command","print","msg",a])
return new H.an(!0,P.c7(null,P.n)).K(t)},
my:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mz()
return},
mz:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.w('Cannot extract URI from "'+t+'"'))},
mw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b3(!0,[]).Y(b.data)
s=J.ae(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nA(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b3(!0,[]).Y(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b3(!0,[]).Y(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.aj(null,null,null,k)
i=new H.bj(0,null,!1)
h=new H.b4(s,new H.ai(0,null,null,null,null,null,0,[k,H.bj]),j,u.createNewIsolate(),i,new H.as(H.j9()),new H.as(H.j9()),!1,!1,[],P.aj(null,null,null,null),null,null,!1,!0,P.aj(null,null,null,null))
j.l(0,0)
h.bE(0,i)
u.globalState.f.a.V(0,new H.b5(h,new H.eQ(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.ao()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.m_(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ao()
break
case"close":u.globalState.ch.an(0,$.$get$ks().h(0,a))
a.terminate()
u.globalState.f.ao()
break
case"log":H.mv(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aX(["command","print","msg",t])
k=new H.an(!0,P.c7(null,P.n)).K(k)
s.toString
self.postMessage(k)}else P.ap(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mv:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aX(["command","log","msg",a])
r=new H.an(!0,P.c7(null,P.n)).K(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.ao(q)
s=P.cu(t)
throw H.e(s)}},
mx:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ky=$.ky+("_"+s)
$.kz=$.kz+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.bo(s,r),q,t.r])
r=new H.eR(a,b,c,d,t)
if(e){t.bZ(q,q)
u.globalState.f.a.V(0,new H.b5(t,r,"start isolate"))}else r.$0()},
mR:function(a,b){var t=new H.hf(!0,!1,null)
t.dz(a,b)
return t},
n7:function(a){return new H.b3(!0,[]).Y(new H.an(!1,P.c7(null,P.n)).K(a))},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(a,b){this.a=a
this.b=b},
ih:function ih(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
ia:function ia(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(){},
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
hH:function hH(){},
bo:function bo(a,b){this.b=a
this.a=b},
ii:function ii(a,b){this.a=a
this.b=b},
c9:function c9(a,b,c){this.b=a
this.c=b
this.a=c},
bj:function bj(a,b,c){this.a=a
this.b=b
this.c=c},
hf:function hf(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
as:function as(a){this.a=a},
an:function an(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
nt:function(a){return u.types[a]},
nC:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isp},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aB(a)
if(typeof t!=="string")throw H.e(H.V(a))
return t},
mO:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fH(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aY:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dv:function(a){var t,s,r,q,p,o,n,m
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.D||!!J.t(a).$isb0){p=C.u(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aN(q,0)===36)q=C.e.d7(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dR(H.iR(a),0,null),u.mangledGlobalNames)},
fD:function(a){return"Instance of '"+H.dv(a)+"'"},
S:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mM:function(a){return a.b?H.S(a).getUTCFullYear()+0:H.S(a).getFullYear()+0},
mK:function(a){return a.b?H.S(a).getUTCMonth()+1:H.S(a).getMonth()+1},
mG:function(a){return a.b?H.S(a).getUTCDate()+0:H.S(a).getDate()+0},
mH:function(a){return a.b?H.S(a).getUTCHours()+0:H.S(a).getHours()+0},
mJ:function(a){return a.b?H.S(a).getUTCMinutes()+0:H.S(a).getMinutes()+0},
mL:function(a){return a.b?H.S(a).getUTCSeconds()+0:H.S(a).getSeconds()+0},
mI:function(a){return a.b?H.S(a).getUTCMilliseconds()+0:H.S(a).getMilliseconds()+0},
kx:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.V(a))
return a[b]},
R:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,"index",null)
t=J.dV(a)
if(b<0||C.b.cS(b,t))return P.C(b,a,"index",null,t)
return P.fE(b,"index",null)},
V:function(a){return new P.ag(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bT()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lq})
t.name=""}else t.toString=H.lq
return t},
lq:function(){return J.aB(this.dartException)},
F:function(a){throw H.e(a)},
I:function(a){throw H.e(new P.a2(a))},
ax:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hm(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kK:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jy:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eW(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aW(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jy(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.du(p,null))}}if(a instanceof TypeError){o=$.$get$kE()
n=$.$get$kF()
m=$.$get$kG()
l=$.$get$kH()
k=$.$get$kL()
j=$.$get$kM()
i=$.$get$kJ()
$.$get$kI()
h=$.$get$kO()
g=$.$get$kN()
f=o.O(s)
if(f!=null)return t.$1(H.jy(s,f))
else{f=n.O(s)
if(f!=null){f.method="call"
return t.$1(H.jy(s,f))}else{f=m.O(s)
if(f==null){f=l.O(s)
if(f==null){f=k.O(s)
if(f==null){f=j.O(s)
if(f==null){f=i.O(s)
if(f==null){f=l.O(s)
if(f==null){f=h.O(s)
if(f==null){f=g.O(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.du(s,f==null?null:f.method))}}return t.$1(new H.hp(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dA()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ag(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dA()
return a},
ao:function(a){var t
if(a==null)return new H.dN(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dN(a,null)},
nG:function(a){if(a==null||typeof a!='object')return J.ar(a)
else return H.aY(a)},
nr:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nB:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dP(b,new H.iY(a))
case 1:return H.dP(b,new H.iZ(a,d))
case 2:return H.dP(b,new H.j_(a,d,e))
case 3:return H.dP(b,new H.j0(a,d,e,f))
case 4:return H.dP(b,new H.j1(a,d,e,f,g))}throw H.e(P.cu("Unsupported number of arguments for wrapped closure"))},
bs:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nB)
a.$identity=t
return t},
mg:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isb){t.$reflectionInfo=c
r=H.mO(t).r}else r=c
q=d?Object.create(new H.fW().constructor.prototype):Object.create(new H.bw(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.ka(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nt,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k7:H.jr
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
md:function(a,b,c,d){var t=H.jr
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
ka:function(a,b,c){var t,s,r,q
if(c)return H.mf(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.md(s,b==null?r!=null:b!==r,t,b)
return q},
me:function(a,b,c,d){var t,s
t=H.jr
s=H.k7
switch(b?-1:a){case 0:throw H.e(new H.fN("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mf:function(a,b){var t,s,r,q
H.mc()
t=$.k6
if(t==null){t=H.k5("receiver")
$.k6=t}s=b.$stubName
r=b.length
q=a[s]
t=H.me(r,b==null?q!=null:b!==q,s,b)
return t},
jJ:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.t(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.mg(a,b,t,!!d,e,f)},
jr:function(a){return a.a},
k7:function(a){return a.c},
mc:function(){var t=$.k8
if(t==null){t=H.k5("self")
$.k8=t}return t},
k5:function(a){var t,s,r,q,p
t=new H.bw("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
o0:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ay(a,"String"))},
a_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"double"))},
o_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"num"))},
nk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ay(a,"bool"))},
nA:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ay(a,"int"))},
nI:function(a,b){throw H.e(H.ay(a,b.substring(3)))},
nH:function(a,b){var t=J.ae(b)
throw H.e(H.k9(H.dv(a),t.bs(b,3,t.gj(b))))},
jM:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.nI(a,b)},
aL:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.nH(a,b)},
nZ:function(a){if(a==null)return a
if(!!J.t(a).$isb)return a
throw H.e(H.ay(a,"List"))},
l9:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
bt:function(a,b){var t
if(a==null)return!1
t=H.l9(a)
return t==null?!1:H.lf(t,b)},
nX:function(a,b){var t,s
if(a==null)return a
if($.jG)return a
$.jG=!0
try{if(H.bt(a,b))return a
t=H.aM(b,null)
s=H.ay(a,t)
throw H.e(s)}finally{$.jG=!1}},
ay:function(a,b){return new H.ho("type '"+H.dv(a)+"' is not a subtype of type '"+b+"'")},
k9:function(a,b){return new H.e3("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aK:function(a){if(!0===a)return!1
if(!!J.t(a).$isju)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ay(a,"bool"))},
b7:function(a){throw H.e(new H.hA(a))},
d:function(a){if(H.aK(a))throw H.e(new P.ck(null))},
nO:function(a){throw H.e(new P.e7(a))},
j9:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
ld:function(a){return u.getIsolateTag(a)},
L:function(a){return new H.aH(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iR:function(a){if(a==null)return
return a.$ti},
le:function(a,b){return H.jQ(a["$as"+H.f(b)],H.iR(a))},
af:function(a,b,c){var t,s
t=H.le(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aA:function(a,b){var t,s
t=H.iR(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aM:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dR(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aM(t,b)
return H.n9(a,b)}return"unknown-reified-type"},
n9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aM(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aM(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aM(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nq(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aM(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dR:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bZ("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aM(o,c)}return p?"":"<"+s.k(0)+">"},
iS:function(a){var t,s
if(a instanceof H.ba){t=H.l9(a)
if(t!=null)return H.aM(t,null)}s=J.t(a).constructor.name
if(a==null)return s
return s+H.dR(a.$ti,0,null)},
jQ:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jN(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jN(a,null,b)
return b},
cd:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iR(a)
s=J.t(a)
if(s[b]==null)return!1
return H.l4(H.jQ(s[d],t),c)},
dS:function(a,b,c,d){if(a==null)return a
if(H.cd(a,b,c,d))return a
throw H.e(H.k9(H.dv(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dR(c,0,null),u.mangledGlobalNames)))},
nV:function(a,b,c,d){if(a==null)return a
if(H.cd(a,b,c,d))return a
throw H.e(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dR(c,0,null),u.mangledGlobalNames)))},
l4:function(a,b){var t,s,r,q,p
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
nn:function(a,b,c){return H.jN(a,b,H.le(b,c))},
a0:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aG")return!0
if('func' in b)return H.lf(a,b)
if('func' in a)return b.name==="ju"||b.name==="o"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aM(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l4(H.jQ(o,t),r)},
l3:function(a,b,c){var t,s,r,q,p,o,n
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
ng:function(a,b){var t,s,r,q,p,o
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
lf:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.l3(r,q,!1))return!1
if(!H.l3(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a0(g,f)||H.a0(f,g)))return!1}}return H.ng(a.named,b.named)},
jN:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
o1:function(a){var t=$.jK
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nY:function(a){return H.aY(a)},
nW:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nD:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.jK.$1(a)
s=$.iP[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iX[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l2.$2(a,t)
if(t!=null){s=$.iP[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iX[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jO(r)
$.iP[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iX[t]=r
return r}if(p==="-"){o=H.jO(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lh(a,r)
if(p==="*")throw H.e(new P.dH(t))
if(u.leafTags[t]===true){o=H.jO(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lh(a,r)},
lh:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j6(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jO:function(a){return J.j6(a,!1,null,!!a.$isp)},
nF:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j6(t,!1,null,!!t.$isp)
else return J.j6(t,c,null,null)},
ny:function(){if(!0===$.jL)return
$.jL=!0
H.nz()},
nz:function(){var t,s,r,q,p,o,n,m
$.iP=Object.create(null)
$.iX=Object.create(null)
H.nx()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lk.$1(p)
if(o!=null){n=H.nF(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nx:function(){var t,s,r,q,p,o,n
t=C.H()
t=H.br(C.E,H.br(C.J,H.br(C.t,H.br(C.t,H.br(C.I,H.br(C.F,H.br(C.G(C.u),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jK=new H.iU(p)
$.l2=new H.iV(o)
$.lk=new H.iW(n)},
br:function(a,b){return a(b)||b},
nN:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fH:function fH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hm:function hm(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
du:function du(a,b){this.a=a
this.b=b},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){this.a=a},
jh:function jh(a){this.a=a},
dN:function dN(a,b){this.a=a
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
ba:function ba(){},
h9:function h9(){},
fW:function fW(){},
bw:function bw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ho:function ho(a){this.a=a},
e3:function e3(a){this.a=a},
fN:function fN(a){this.a=a},
hA:function hA(a){this.a=a},
aH:function aH(a,b){this.a=a
this.b=b},
ai:function ai(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eV:function eV(a){this.a=a},
eY:function eY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eZ:function eZ(a,b){this.a=a
this.$ti=b},
f_:function f_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iU:function iU(a){this.a=a},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
v:function(a){return a},
iI:function(a){var t,s,r
if(!!J.t(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bM:function bM(){},
bi:function bi(){},
fc:function fc(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dl:function dl(){},
fd:function fd(){},
fe:function fe(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
dq:function dq(){},
fj:function fj(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
nq:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
j8:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dg.prototype
return J.df.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.eU.prototype
if(typeof a=="boolean")return J.eT.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.o)return a
return J.iQ(a)},
j6:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iQ:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jL==null){H.ny()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dH("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jx()]
if(p!=null)return p
p=H.nD(a)
if(p!=null)return p
if(typeof a=="function")return C.K
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,$.$get$jx(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
ae:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.o)return a
return J.iQ(a)},
cf:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.o)return a
return J.iQ(a)},
lb:function(a){if(typeof a=="number")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b0.prototype
return a},
ns:function(a){if(typeof a=="number")return J.bg.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b0.prototype
return a},
lc:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b0.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.o)return a
return J.iQ(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).v(a,b)},
aq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lb(a).aq(a,b)},
lr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lb(a).aH(a,b)},
b8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nC(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ae(a).h(a,b)},
ls:function(a,b,c,d){return J.k(a).dK(a,b,c,d)},
jR:function(a,b){return J.lc(a).aN(a,b)},
bu:function(a,b){return J.k(a).e2(a,b)},
lt:function(a,b,c,d){return J.k(a).e3(a,b,c,d)},
lu:function(a,b,c){return J.k(a).e4(a,b,c)},
jS:function(a,b){return J.k(a).bY(a,b)},
ji:function(a,b){return J.k(a).R(a,b)},
jT:function(a,b,c){return J.k(a).c0(a,b,c)},
lv:function(a,b){return J.k(a).ej(a,b)},
dT:function(a,b,c){return J.k(a).c1(a,b,c)},
lw:function(a,b,c){return J.k(a).c2(a,b,c)},
ci:function(a,b,c){return J.k(a).c3(a,b,c)},
dU:function(a,b){return J.k(a).em(a,b)},
lx:function(a,b){return J.k(a).c4(a,b)},
ly:function(a,b,c){return J.k(a).c5(a,b,c)},
jU:function(a,b,c,d){return J.k(a).c6(a,b,c,d)},
lz:function(a,b){return J.cf(a).c7(a,b)},
lA:function(a,b,c,d,e){return J.k(a).c8(a,b,c,d,e)},
lB:function(a,b){return J.ns(a).S(a,b)},
jj:function(a,b,c){return J.ae(a).er(a,b,c)},
jk:function(a){return J.k(a).ca(a)},
lC:function(a){return J.k(a).cb(a)},
lD:function(a){return J.k(a).ce(a)},
jV:function(a){return J.k(a).ey(a)},
lE:function(a,b){return J.k(a).cg(a,b)},
jl:function(a,b){return J.k(a).ci(a,b)},
lF:function(a,b,c,d){return J.k(a).cj(a,b,c,d)},
lG:function(a,b,c,d,e){return J.k(a).eF(a,b,c,d,e)},
lH:function(a,b,c,d,e){return J.k(a).ck(a,b,c,d,e)},
lI:function(a,b,c,d,e,f){return J.k(a).eG(a,b,c,d,e,f)},
lJ:function(a,b){return J.cf(a).t(a,b)},
cj:function(a,b){return J.k(a).cl(a,b)},
lK:function(a,b){return J.k(a).cm(a,b)},
lL:function(a){return J.k(a).eH(a)},
lM:function(a,b){return J.cf(a).az(a,b)},
lN:function(a){return J.k(a).gei(a)},
ar:function(a){return J.t(a).gu(a)},
bv:function(a){return J.cf(a).gw(a)},
dV:function(a){return J.ae(a).gj(a)},
lO:function(a){return J.k(a).gba(a)},
lP:function(a){return J.t(a).gA(a)},
lQ:function(a){return J.k(a).gf4(a)},
lR:function(a){return J.k(a).gaE(a)},
jm:function(a){return J.k(a).gm(a)},
jn:function(a){return J.k(a).gn(a)},
jW:function(a){return J.k(a).gL(a)},
jo:function(a,b){return J.k(a).a8(a,b)},
lS:function(a){return J.k(a).aG(a)},
lT:function(a){return J.k(a).bh(a)},
lU:function(a,b){return J.k(a).bi(a,b)},
lV:function(a,b,c){return J.k(a).bj(a,b,c)},
jX:function(a,b,c){return J.k(a).bm(a,b,c)},
lW:function(a,b){return J.k(a).co(a,b)},
lX:function(a,b){return J.cf(a).cr(a,b)},
lY:function(a,b,c){return J.k(a).ct(a,b,c)},
lZ:function(a){return J.cf(a).eZ(a)},
m_:function(a,b){return J.k(a).H(a,b)},
m0:function(a,b,c,d){return J.k(a).br(a,b,c,d)},
m1:function(a,b,c,d,e,f,g){return J.k(a).cz(a,b,c,d,e,f,g)},
m2:function(a,b,c,d){return J.k(a).cA(a,b,c,d)},
jY:function(a,b,c,d){return J.k(a).cB(a,b,c,d)},
m3:function(a){return J.lc(a).f7(a)},
aB:function(a){return J.t(a).k(a)},
m4:function(a,b,c,d){return J.k(a).f9(a,b,c,d)},
m5:function(a,b,c){return J.k(a).cC(a,b,c)},
m6:function(a,b,c){return J.k(a).cD(a,b,c)},
jp:function(a,b,c){return J.k(a).cE(a,b,c)},
m7:function(a,b,c){return J.k(a).cF(a,b,c)},
jZ:function(a,b,c){return J.k(a).cG(a,b,c)},
k_:function(a,b,c){return J.k(a).cH(a,b,c)},
k0:function(a,b,c){return J.k(a).cI(a,b,c)},
k1:function(a,b,c,d){return J.k(a).cJ(a,b,c,d)},
k2:function(a,b,c,d){return J.k(a).cK(a,b,c,d)},
m8:function(a,b){return J.k(a).cM(a,b)},
m9:function(a,b,c){return J.k(a).fa(a,b,c)},
k3:function(a,b,c,d,e,f,g){return J.k(a).cO(a,b,c,d,e,f,g)},
ma:function(a,b,c,d,e){return J.k(a).cP(a,b,c,d,e)},
a:function a(){},
eT:function eT(){},
eU:function eU(){},
bI:function bI(){},
fx:function fx(){},
b0:function b0(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
jv:function jv(a){this.$ti=a},
e_:function e_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bg:function bg(){},
dg:function dg(){},
df:function df(){},
aU:function aU(){}},P={
mV:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nh()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bs(new P.hD(t),1)).observe(s,{childList:true})
return new P.hC(t,s,r)}else if(self.setImmediate!=null)return P.ni()
return P.nj()},
mW:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bs(new P.hE(a),0))},
mX:function(a){++u.globalState.f.b
self.setImmediate(H.bs(new P.hF(a),0))},
mY:function(a){P.jC(C.q,a)},
nc:function(a,b){if(H.bt(a,{func:1,args:[P.aG,P.aG]})){b.toString
return a}else{b.toString
return a}},
mr:function(a,b,c){var t
if(a==null)a=new P.bT()
t=$.x
if(t!==C.d)t.toString
t=new P.K(0,t,null,[c])
t.dL(a,b)
return t},
ms:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.K(0,$.x,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eI(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.be(new P.eH(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.K(0,$.x,null,[null])
l.bF(C.v)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.O(j)
n=H.ao(j)
if(t.b===0||!1)return P.mr(o,n,null)
else{t.c=o
t.d=n}}return s},
n8:function(a,b,c){$.x.toString
a.P(b,c)},
n_:function(a,b){var t=new P.K(0,$.x,null,[b])
H.d(!0)
t.a=4
t.c=a
return t},
kU:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.K))
H.d(b.a===0)
b.a=1
try{a.be(new P.hZ(b),new P.i_(b))}catch(r){t=H.O(r)
s=H.ao(r)
P.nJ(new P.i0(b,t,s))}},
hY:function(a,b){var t,s,r,q
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
P.bn(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bS(q)}},
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
return}s=$.x
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.x
H.d(l==null?s!=null:l!==s)
j=$.x
$.x=l
i=j}else i=null
s=b.c
if(s===8)new P.i5(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i4(r,b,m).$0()}else if((s&2)!==0)new P.i3(t,r,b).$0()
if(i!=null){H.d(!0)
$.x=i}s=r.b
if(!!J.t(s).$isaS){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ag(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hY(s,o)
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
nb:function(){var t,s
for(;t=$.bp,t!=null;){$.cb=null
s=t.b
$.bp=s
if(s==null)$.ca=null
t.a.$0()}},
nf:function(){$.jH=!0
try{P.nb()}finally{$.cb=null
$.jH=!1
if($.bp!=null)$.$get$jE().$1(P.l5())}},
l0:function(a){var t=new P.dJ(a,null)
if($.bp==null){$.ca=t
$.bp=t
if(!$.jH)$.$get$jE().$1(P.l5())}else{$.ca.b=t
$.ca=t}},
ne:function(a){var t,s,r
t=$.bp
if(t==null){P.l0(a)
$.cb=$.ca
return}s=new P.dJ(a,null)
r=$.cb
if(r==null){s.b=t
$.cb=s
$.bp=s}else{s.b=r.b
r.b=s
$.cb=s
if(s.b==null)$.ca=s}},
nJ:function(a){var t=$.x
if(C.d===t){P.bq(null,null,C.d,a)
return}t.toString
P.bq(null,null,t,t.b3(a))},
n6:function(a,b,c){var t=a.eo(0)
if(!!J.t(t).$isaS&&t!==$.$get$km())t.fb(new P.iH(b,c))
else b.ad(c)},
mS:function(a,b){var t=$.x
if(t===C.d){t.toString
return P.jC(a,b)}return P.jC(a,t.b3(b))},
jC:function(a,b){var t=C.b.I(a.a,1000)
return H.mR(t<0?0:t,b)},
jD:function(a){var t,s
H.d(a!=null)
t=$.x
H.d(a==null?t!=null:a!==t)
s=$.x
$.x=a
return s},
iJ:function(a,b,c,d,e){var t={}
t.a=d
P.ne(new P.iK(t,e))},
kZ:function(a,b,c,d){var t,s
if($.x===c)return d.$0()
t=P.jD(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.x=s}},
l_:function(a,b,c,d,e){var t,s
if($.x===c)return d.$1(e)
t=P.jD(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
nd:function(a,b,c,d,e,f){var t,s
if($.x===c)return d.$2(e,f)
t=P.jD(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.x=s}},
bq:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b3(d):c.ek(d)
P.l0(d)},
hD:function hD(a){this.a=a},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
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
hJ:function hJ(){},
hB:function hB(a,b){this.a=a
this.$ti=b},
iz:function iz(a,b){this.a=a
this.$ti=b},
c3:function c3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hV:function hV(a,b){this.a=a
this.b=b},
i2:function i2(a,b){this.a=a
this.b=b},
hZ:function hZ(a){this.a=a},
i_:function i_(a){this.a=a},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
i5:function i5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i6:function i6(a){this.a=a},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
dJ:function dJ(a,b){this.a=a
this.b=b},
bY:function bY(){},
h2:function h2(a){this.a=a},
h3:function h3(a,b){this.a=a
this.b=b},
h0:function h0(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a){this.a=a},
h_:function h_(){},
iH:function iH(a,b){this.a=a
this.b=b},
b9:function b9(a,b){this.a=a
this.b=b},
iG:function iG(){},
iK:function iK(a,b){this.a=a
this.b=b},
ik:function ik(){},
im:function im(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.b=b},
ku:function(a,b){return new H.ai(0,null,null,null,null,null,0,[a,b])},
M:function(){return new H.ai(0,null,null,null,null,null,0,[null,null])},
aX:function(a){return H.nr(a,new H.ai(0,null,null,null,null,null,0,[null,null]))},
c7:function(a,b){return new P.dL(0,null,null,null,null,null,0,[a,b])},
n3:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mA:function(a,b,c){var t,s
if(P.jI(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$cc()
C.a.l(s,a)
try{P.na(a,t)}finally{H.d(C.a.gaC(s)===a)
s.pop()}s=P.kD(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eS:function(a,b,c){var t,s,r
if(P.jI(a))return b+"..."+c
t=new P.bZ(b)
s=$.$get$cc()
C.a.l(s,a)
try{r=t
r.a=P.kD(r.ga5(),a,", ")}finally{H.d(C.a.gaC(s)===a)
s.pop()}s=t
s.a=s.ga5()+c
s=t.ga5()
return s.charCodeAt(0)==0?s:s},
jI:function(a){var t,s
for(t=0;s=$.$get$cc(),t<s.length;++t)if(a===s[t])return!0
return!1},
na:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
aj:function(a,b,c,d){return new P.ic(0,null,null,null,null,null,0,[d])},
jz:function(a,b){var t,s
t=P.aj(null,null,null,b)
for(s=J.bv(a);s.p();)t.l(0,s.gq())
return t},
mE:function(a){var t,s,r
t={}
if(P.jI(a))return"{...}"
s=new P.bZ("")
try{C.a.l($.$get$cc(),a)
r=s
r.a=r.ga5()+"{"
t.a=!0
a.az(0,new P.f4(t,s))
t=s
t.a=t.ga5()+"}"}finally{t=$.$get$cc()
H.d(C.a.gaC(t)===a)
t.pop()}t=s.ga5()
return t.charCodeAt(0)==0?t:t},
jA:function(a,b){var t=new P.f0(null,0,0,0,[b])
t.dq(a,b)
return t},
dL:function dL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ic:function ic(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
id:function id(a,b,c){this.a=a
this.b=b
this.c=c},
c6:function c6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i9:function i9(){},
dh:function dh(){},
y:function y(){},
f4:function f4(a,b){this.a=a
this.b=b},
f0:function f0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ie:function ie(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fQ:function fQ(){},
fP:function fP(){},
bU:function bU(){},
kD:function(a,b,c){var t=J.bv(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
mh:function(a,b){return J.lB(a,b)},
mi:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mj:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
co:function(a){if(a>=10)return""+a
return"0"+a},
jt:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aB(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mn(a)},
mn:function(a){var t=J.t(a)
if(!!t.$isba)return t.k(a)
return H.fD(a)},
dZ:function(a){return new P.ag(!1,null,null,a)},
k4:function(a,b,c){return new P.ag(!0,a,b,c)},
mb:function(a){return new P.ag(!1,null,a,"Must not be null")},
fE:function(a,b,c){return new P.dx(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.dx(b,c,!0,a,d,"Invalid value")},
kA:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aZ(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aZ(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dV(b)
return new P.eO(b,t,!0,a,c,"Index out of range")},
cu:function(a){return new P.hU(a)},
kv:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.bv(a);s.p();)C.a.l(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
ap:function(a){H.j8(H.f(a))},
az:function az(){},
H:function H(){},
bx:function bx(a,b){this.a=a
this.b=b},
N:function N(){},
aR:function aR(a){this.a=a},
ee:function ee(){},
ef:function ef(){},
bc:function bc(){},
ck:function ck(a){this.a=a},
bT:function bT(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dx:function dx(a,b,c,d,e,f){var _=this
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
w:function w(a){this.a=a},
dH:function dH(a){this.a=a},
av:function av(a){this.a=a},
a2:function a2(a){this.a=a},
dA:function dA(){},
e7:function e7(a){this.a=a},
hU:function hU(a){this.a=a},
eh:function eh(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
X:function X(){},
de:function de(){},
b:function b(){},
aE:function aE(){},
aG:function aG(){},
W:function W(){},
o:function o(){},
bX:function bX(){},
r:function r(){},
bZ:function bZ(a){this.a=a},
l7:function(a){return a},
iN:function(a){var t,s,r,q,p
if(a==null)return
t=P.M()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
no:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lM(a,new P.iM(t))
return t},
kh:function(){var t=$.kg
if(t==null){t=J.jj(window.navigator.userAgent,"Opera",0)
$.kg=t}return t},
mk:function(){var t,s
t=$.kd
if(t!=null)return t
s=$.ke
if(s==null){s=J.jj(window.navigator.userAgent,"Firefox",0)
$.ke=s}if(s)t="-moz-"
else{s=$.kf
if(s==null){s=!P.kh()&&J.jj(window.navigator.userAgent,"Trident/",0)
$.kf=s}if(s)t="-ms-"
else t=P.kh()?"-o-":"-webkit-"}$.kd=t
return t},
iM:function iM(a){this.a=a},
nM:function(a){return Math.sqrt(a)},
ib:function ib(){},
ij:function ij(){},
J:function J(){},
dW:function dW(){},
aN:function aN(){},
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
eC:function eC(){},
eE:function eE(){},
ah:function ah(){},
aD:function aD(){},
eM:function eM(){},
at:function at(){},
eX:function eX(){},
f5:function f5(){},
f6:function f6(){},
au:function au(){},
fn:function fn(){},
fu:function fu(){},
fz:function fz(){},
fA:function fA(){},
fF:function fF(){},
fG:function fG(){},
bW:function bW(){},
h4:function h4(){},
G:function G(){},
h5:function h5(){},
h6:function h6(){},
dC:function dC(){},
ha:function ha(){},
c0:function c0(){},
aw:function aw(){},
hk:function hk(){},
hr:function hr(){},
ht:function ht(){},
hu:function hu(){},
c4:function c4(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
cC:function cC(){},
cA:function cA(){},
cH:function cH(){},
cL:function cL(){},
cW:function cW(){},
d3:function d3(){},
d_:function d_(){},
d1:function d1(){},
e0:function e0(){},
fK:function fK(){},
fL:function fL(){},
iD:function iD(){},
fV:function fV(){},
cB:function cB(){},
cY:function cY(){}},W={
ml:function(a,b,c){var t,s
t=document.body
s=(t&&C.h).N(t,a,b,c)
s.toString
t=new H.dI(new W.T(s),new W.iL(),[W.q])
return t.ga4(t)},
mm:function(a){return"wheel"},
bz:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lQ(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
mZ:function(a,b){return document.createElement(a)},
b6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kX:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
am:function(a,b,c,d,e){var t=c==null?null:W.l1(new W.hT(c))
t=new W.hS(0,a,b,t,!1,[e])
t.dF(a,b,c,!1,e)
return t},
kV:function(a){var t,s
t=document.createElement("a")
s=new W.is(t,window.location)
s=new W.c5(s)
s.dG(a)
return s},
n1:function(a,b,c,d){return!0},
n2:function(a,b,c,d){var t,s,r,q,p
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
kY:function(){var t=P.r
t=new W.iA(P.jz(C.l,t),P.aj(null,null,null,t),P.aj(null,null,null,t),P.aj(null,null,null,t),null)
t.dI(null,new H.bJ(C.l,new W.iB(),[H.aA(C.l,0),null]),["TEMPLATE"],null)
return t},
l1:function(a){var t=$.x
if(t===C.d)return a
return t.el(a)},
l:function l(){},
dX:function dX(){},
dY:function dY(){},
a1:function a1(){},
e1:function e1(){},
cl:function cl(){},
aO:function aO(){},
aP:function aP(){},
cm:function cm(){},
cn:function cn(){},
aQ:function aQ(){},
e5:function e5(){},
z:function z(){},
bb:function bb(){},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
cp:function cp(){},
by:function by(){},
cq:function cq(){},
ea:function ea(){},
cr:function cr(){},
eb:function eb(){},
cs:function cs(){},
ct:function ct(){},
ec:function ec(){},
ed:function ed(){},
a3:function a3(){},
iL:function iL(){},
j:function j(){},
h:function h(){},
a4:function a4(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
a5:function a5(){},
cx:function cx(){},
eK:function eK(){},
bG:function bG(){},
cy:function cy(){},
eL:function eL(){},
bH:function bH(){},
bd:function bd(){},
be:function be(){},
bf:function bf(){},
eP:function eP(){},
aW:function aW(){},
f2:function f2(){},
bK:function bK(){},
f8:function f8(){},
f9:function f9(){},
bL:function bL(){},
a6:function a6(){},
fa:function fa(){},
Q:function Q(){},
fk:function fk(){},
T:function T(a){this.a=a},
q:function q(){},
dr:function dr(){},
bS:function bS(){},
ft:function ft(){},
fw:function fw(){},
a7:function a7(){},
fy:function fy(){},
fB:function fB(){},
fC:function fC(){},
dw:function dw(){},
fM:function fM(){},
dy:function dy(){},
fO:function fO(){},
fR:function fR(){},
a8:function a8(){},
fS:function fS(){},
a9:function a9(){},
fU:function fU(){},
aa:function aa(){},
fZ:function fZ(){},
Y:function Y(){},
ak:function ak(){},
dB:function dB(){},
h7:function h7(){},
h8:function h8(){},
c_:function c_(){},
ab:function ab(){},
Z:function Z(){},
hb:function hb(){},
hc:function hc(){},
he:function he(){},
ac:function ac(){},
b_:function b_(){},
hi:function hi(){},
hj:function hj(){},
bl:function bl(){},
hl:function hl(){},
dF:function dF(){},
aI:function aI(){},
hq:function hq(){},
bm:function bm(){},
hs:function hs(){},
hv:function hv(){},
hw:function hw(){},
b1:function b1(){},
c2:function c2(){},
hy:function hy(a){this.a=a},
hz:function hz(){},
b2:function b2(){},
hI:function hI(){},
dK:function dK(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
i7:function i7(){},
i8:function i8(){},
dM:function dM(){},
it:function it(){},
iw:function iw(){},
ix:function ix(){},
iE:function iE(){},
iF:function iF(){},
hG:function hG(){},
hN:function hN(a){this.a=a},
hR:function hR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hS:function hS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hT:function hT(a){this.a=a},
c5:function c5(a){this.a=a},
B:function B(){},
dt:function dt(a){this.a=a},
fm:function fm(a){this.a=a},
fl:function fl(a,b,c){this.a=a
this.b=b
this.c=c},
c8:function c8(){},
iu:function iu(){},
iv:function iv(){},
iA:function iA(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iB:function iB(){},
iy:function iy(){},
cw:function cw(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ds:function ds(){},
is:function is(a,b){this.a=a
this.b=b},
dO:function dO(a){this.a=a},
iC:function iC(a){this.a=a},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
cz:function cz(){},
cT:function cT(){},
cF:function cF(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cD:function cD(){},
cE:function cE(){},
cG:function cG(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cU:function cU(){},
cV:function cV(){},
d5:function d5(){},
d6:function d6(){},
d4:function d4(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
cX:function cX(){},
cZ:function cZ(){},
d0:function d0(){},
d2:function d2(){},
d7:function d7(){},
d8:function d8(){}},B={
nK:function(a){var t,s
t=document
s=W.aW
W.am(t,"keydown",new B.ja(),!1,s)
W.am(t,"keyup",new B.jb(),!1,s)
if(!$.nL)W.am(t,"mousemove",new B.jc(),!1,W.Q)
s=W.Q
W.am(t,"mousedown",new B.jd(),!1,s)
W.am(t,"mouseup",new B.je(),!1,s)},
mF:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.v(3))
s=$.$get$iO()
r=$.$get$ce()
q=new T.P(new Float32Array(H.v(16)))
q.M()
q=new B.fo(a,b,c,0,new T.u(t),-0.02,s,r,q,new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),"camera:orbit",!1,!0)
q.ds(a,b,c,d)
return q},
ja:function ja(){},
jb:function jb(){},
jc:function jc(){},
jd:function jd(){},
je:function je(){},
fo:function fo(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fp:function fp(a){this.a=a},
fq:function fq(a){this.a=a},
fr:function fr(){},
fs:function fs(a){this.a=a},
mt:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.J(t,$.$get$kn())
C.a.J(s,$.$get$ko())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.I)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.u(new Float32Array(3))
k.D(l)
l=n.b
k.l(0,s[l])
k.a3(0,0.5)
k.C(0)
j=s[l]
i=new T.u(new Float32Array(3))
i.D(j)
j=n.c
i.l(0,s[j])
i.a3(0,0.5)
i.C(0)
h=s[j]
g=new T.u(new Float32Array(3))
g.D(h)
g.l(0,s[m])
g.a3(0,0.5)
g.C(0)
f=s.length
C.a.l(s,k)
e=s.length
C.a.l(s,i)
d=s.length
C.a.l(s,g)
C.a.l(q,new G.A(m,f,d))
C.a.l(q,new G.A(l,e,f))
C.a.l(q,new G.A(j,d,e))
C.a.l(q,new G.A(f,e,d))}}c=new G.eJ(!1,[],[],[],P.M())
c.bx("aTexUV")
c.bx("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.I)(t),++o){n=t[o]
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
c.df("aNormal",[b,a,a0])
m=new T.u(new Float32Array(3))
m.D(b)
m.a3(0,a4)
l=new T.u(new Float32Array(3))
l.D(a)
l.a3(0,a4)
a2=new T.u(new Float32Array(3))
a2.D(a0)
a2.a3(0,a4)
c.dg([m,l,a2])
c.de("aTexUV",[new T.al(j),new T.al(h),new T.al(a1)])}return c}},G={
mU:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.am(t,"\n")},
kT:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.cd(a,b)
t.bp(a,s,c)
t.c9(a,s)
r=t.bl(a,s,35713)
if(r!=null&&!r){q=t.bk(a,s)
P.ap("E:Compilation failed:")
P.ap("E:"+G.mU(c))
P.ap("E:Failure:")
P.ap(C.e.a2("E:",q))
throw H.e(q)}return s},
kw:function(a,b){var t=new G.f7(P.M(),a,!1,!0)
t.dr(a,b)
return t},
kl:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jm(a[s])
b[t+1]=J.jn(a[s])
b[t+2]=J.jW(a[s])}return b},
mp:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jm(a[s])
b[t+1]=J.jn(a[s])}return b},
mq:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jm(a[s])
b[t+1]=J.jn(a[s])
b[t+2]=J.jW(a[s])
b[t+3]=J.lR(a[s])}return b},
mo:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b8(a[s],0)
b[t+1]=J.b8(a[s],1)
b[t+2]=J.b8(a[s],2)
b[t+3]=J.b8(a[s],3)}return b},
n0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gF(t),s=s.gw(s),r=b.x,q=[[P.b,P.n]],p=[P.N],o=[T.aJ],n=[T.u],m=[T.al];s.p();){l=s.gq()
if(!r.E(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.la>0)H.j8("I: "+k)
continue}j=t.h(0,l)
switch($.$get$U().h(0,l).a){case"vec2":b.ab(l,G.mp(H.dS(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ab(l,G.kl(H.dS(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ab(l,G.mq(H.dS(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ab(l,new Float32Array(H.iI(H.dS(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ab(l,G.mo(H.dS(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aK(!1))H.b7("unknown type for "+H.f(l)+" ["+J.lP(j[0]).k(0)+"] ["+new H.aH(H.iS(j),null).k(0)+"] "+H.f(j))}}},
kB:function(a,b,c,d){var t=new G.fJ(b,c,d,null,null,P.M(),P.M(),P.aj(null,null,null,P.r),null,a,!1,!0)
t.dt(a,b,c,d)
return t},
kp:function(a,b,c,d,e){var t=new G.eN(c,b,J.lD(a.a),e,a,new G.hd(!1,!1,!1,!0,1,9729,9729))
t.dn(a,b,c,d,e)
return t},
fb:function fb(){},
dG:function dG(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e2:function e2(){},
e4:function e4(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
f7:function f7(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dk:function dk(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fv:function fv(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fJ:function fJ(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
bk:function bk(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fT:function fT(){},
hd:function hd(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c1:function c1(){},
eN:function eN(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mT:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.v(s))
for(q=0;q<s;++q)r[q]=($.$get$kS().eW()-0.5)*c
s=a.d
s=new G.dk(s,J.jV(s.a),0,P.M(),a.e.x,null,0,-1,null,null,P.M(),"meshdata:"+t,!1,!0)
s.bv(r)
return s},
fX:function fX(){},
fY:function fY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
l8:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.D(c)
s=b.d
t.cs(0,s)
r=b.ch
if(r!=null){b.cx
q=!0}else q=!1
if(q){J.aB(b)
q=C.a.gaC(e)
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
p.eu(new T.aF(o))
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
C.a.l(e,r)
a.dk(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.I)(s),++l)A.l8(a,s[l],t,d,e)},
bR:function bR(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bV:function bV(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fI:function fI(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
dQ:function(a){var t,s
t=C.N.eJ(a,0,new A.iT())
s=536870911&t+(C.b.cQ(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iT:function iT(){},
nE:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t={}
s=document
r=new R.fY(0,0,null,null,null,null)
r.dw(C.k.cU(s,"stats"),"blue","gray")
q=C.k.eY(s,"#webgl-canvas")
p=new G.e4(null,q)
o=(q&&C.o).bg(q,"webgl2",P.aX(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.F(P.cu('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.aB(J.lS(o))
if($.la>0)P.ap("I: "+n)
J.lA(o,0,0,0,1)
J.cj(o,2929)
J.cj(o,2884)
m=B.mF(5,10,0,q)
o=new T.P(new Float32Array(H.v(16)))
o.M()
n=new T.P(new Float32Array(H.v(16)))
n.M()
l=new G.fv(m,50,1,0.1,1000,o,n,new T.P(new Float32Array(H.v(16))),P.M(),"perspective",!1,!0)
l.bA()
n=H.D([],[A.bV])
k=new A.fI(null,p,n,17664,0,0,0,0,"main",!1,!0)
k.d=new G.eG(p,null,null,null,null)
o=G.kB("stars",p,$.$get$lj(),$.$get$li())
j=[]
i=G.kw("stars",$.$get$jq())
h=s.createElement("canvas")
h.width=64
h.height=64
g=C.o.cT(h,"2d")
f=(g&&C.i).cc(g,32,32,1,32,32,22);(f&&C.f).ay(f,0,"gray")
C.f.ay(f,1,"black")
g.fillStyle=f
C.i.eI(g,0,0,64,64)
f=C.i.cc(g,32,32,1,32,32,6);(f&&C.f).ay(f,0,"white")
C.f.ay(f,1,"gray")
g.globalAlpha=0.9
g.fillStyle=f
g.arc(32,32,4,0,6.283185307179586,!1)
g.fill("nonzero")
i.a_("uTexture",G.kp(o.d,"Utils::Particles",h,null,3553))
i.a_("uPointSize",1000)
e=R.mT(o,2000,100)
s=new Float32Array(H.v(9))
d=new T.P(new Float32Array(H.v(16)))
d.M()
c=new T.P(new Float32Array(H.v(16)))
c.M()
b=new Float32Array(H.v(3))
a=new Float32Array(H.v(3))
a0=new Float32Array(H.v(3))
a1=new Float32Array(H.v(3))
H.d(!0)
C.a.l(j,new A.bR(i,e,[],new T.aF(s),d,c,new T.u(b),new T.u(a),new T.u(a0),new T.u(a1),e.a,!1,!0))
H.d(!0)
C.a.l(n,new A.bV(o,[l],j,"stars",!1,!0))
j=G.kB("spheres",p,$.$get$lm(),$.$get$ll())
o=[]
H.d(!0)
C.a.l(n,new A.bV(j,[l],o,"spheres",!1,!0))
a2=B.mt(3,1,!0)
s=j.d
n=J.jV(s.a)
e=new G.dk(s,n,4,P.M(),j.e.x,null,0,-1,null,null,P.M(),"meshdata:icosahedron-3",!1,!0)
e.bv(G.kl(a2.d,null))
j=a2.dl()
e.y=J.jk(s.a)
H.d(e.ch!=null)
d=e.ch.length
if(d<768){e.saR(new Uint8Array(H.iI(j)))
e.Q=5121}else if(d<196608){e.saR(new Uint16Array(H.iI(j)))
e.Q=5123}else{e.saR(new Uint32Array(H.iI(j)))
e.Q=5125}J.dU(s.a,n)
n=e.y
j=e.cx
s.toString
d=J.t(j)
H.d(!!d.$iskP||!!d.$iskQ||!!d.$iskR)
J.dT(s.a,34963,n)
J.jU(s.a,34963,j,35048)
G.n0(a2,e)
s=$.$get$j7()
n=new Float32Array(H.v(9))
j=new T.P(new Float32Array(H.v(16)))
j.M()
d=new T.P(new Float32Array(H.v(16)))
d.M()
d=new A.bR(s,e,[],new T.aF(n),j,d,new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),"sphere",!1,!0)
d.aI(0,0,0)
H.d(!0)
C.a.l(o,d)
d=$.$get$j7()
j=new Float32Array(H.v(9))
n=new T.P(new Float32Array(H.v(16)))
n.M()
s=new T.P(new Float32Array(H.v(16)))
s.M()
s=new A.bR(d,e,[],new T.aF(j),n,s,new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),new T.u(new Float32Array(H.v(3))),"sphere",!1,!0)
s.aI(1.5,0,0)
H.d(!0)
C.a.l(o,s)
s=new A.j5(q,l,k)
s.$1(null)
W.am(window,"resize",s,!1,W.j)
t.a=0
P.ms([D.mD($.lp)],null,!1).aD(new A.j4(p,new A.j3(t,r,m,k)))},
j5:function j5(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a,b){this.a=a
this.b=b}},D={
mD:function(a){var t,s,r
t=new P.K(0,$.x,null,[null])
s=document.createElement("img")
r=new W.hO(s,"load",!1,[W.j])
r.gb8(r).aD(new D.f1(new P.hB(t,[null]),s))
s.src=a
return t},
f1:function f1(a,b){this.a=a
this.b=b}},T={
ad:function(a,b,c){var t=new T.u(new Float32Array(H.v(3)))
t.ar(a,b,c)
return t},
aF:function aF(a){this.a=a},
P:function P(a){this.a=a},
al:function al(a){this.a=a},
u:function u(a){this.a=a},
aJ:function aJ(a){this.a=a}}
var v=[C,H,J,P,W,B,G,R,A,D,T]
setFunctionNamesIfNecessary(v)
var $={}
H.jw.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aY(a)},
k:function(a){return H.fD(a)},
gA:function(a){return new H.aH(H.iS(a),null)}}
J.eT.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.a1},
$isaz:1}
J.eU.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.W}}
J.bI.prototype={
gu:function(a){return 0},
gA:function(a){return C.V},
k:function(a){return String(a)},
$iskt:1}
J.fx.prototype={}
J.b0.prototype={}
J.aV.prototype={
k:function(a){var t=a[$.$get$kc()]
return t==null?this.da(a):J.aB(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isju:1}
J.aT.prototype={
b5:function(a,b){if(!!a.immutable$list)throw H.e(new P.w(b))},
b4:function(a,b){if(!!a.fixed$length)throw H.e(new P.w(b))},
l:function(a,b){this.b4(a,"add")
a.push(b)},
J:function(a,b){var t,s,r,q,p
t=a.length
this.b4(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.I)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.F(new P.a2(a)))
a.push(q)}},
cr:function(a,b){return new H.bJ(a,b,[H.aA(a,0),null])},
am:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gb8:function(a){if(a.length>0)return a[0]
throw H.e(H.dd())},
gaC:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.dd())},
bo:function(a,b,c,d,e){var t,s
this.b5(a,"setRange")
P.kA(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.F(P.aZ(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mB())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c_:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a2(a))}return!1},
d5:function(a,b){this.b5(a,"sort")
H.dz(a,0,a.length-1,P.np())},
aJ:function(a){return this.d5(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
k:function(a){return P.eS(a,"[","]")},
gw:function(a){return new J.e_(a,a.length,0,null,[H.aA(a,0)])},
gu:function(a){return H.aY(a)},
gj:function(a){return a.length},
sj:function(a,b){this.b4(a,"set length")
if(b<0)throw H.e(P.aZ(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
return a[b]},
i:function(a,b,c){this.b5(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jv.prototype={}
J.e_.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.I(t))
r=this.c
if(r>=s){this.sbB(null)
return!1}this.sbB(t[r]);++this.c
return!0},
sbB:function(a){this.d=a}}
J.bg.prototype={
S:function(a,b){var t
if(typeof b!=="number")throw H.e(H.V(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaA(b)
if(this.gaA(a)===t)return 0
if(this.gaA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaA:function(a){return a===0?1/a<0:a<0},
ep:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.w(""+a+".ceil()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.w(""+a+".round()"))},
eq:function(a,b,c){if(this.S(b,c)>0)throw H.e(H.V(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
f8:function(a,b){var t
if(b>20)throw H.e(P.aZ(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaA(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a2:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a+b},
aa:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a-b},
cR:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a*b},
aL:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bW(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bW(a,b)},
bW:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.w("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aW:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cQ:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return(a&b)>>>0},
dd:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return(a^b)>>>0},
aH:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a<b},
aq:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a>b},
cS:function(a,b){if(typeof b!=="number")throw H.e(H.V(b))
return a>=b},
gA:function(a){return C.a4},
$isW:1}
J.dg.prototype={
gA:function(a){return C.a3},
$isN:1,
$isn:1,
$isW:1}
J.df.prototype={
gA:function(a){return C.a2},
$isN:1,
$isW:1}
J.aU.prototype={
aN:function(a,b){if(b>=a.length)throw H.e(H.R(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.e(P.k4(b,null,null))
return a+b},
d6:function(a,b,c){var t
if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bq:function(a,b){return this.d6(a,b,0)},
bs:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fE(b,null,null))
if(b>c)throw H.e(P.fE(b,null,null))
if(c>a.length)throw H.e(P.fE(c,null,null))
return a.substring(b,c)},
d7:function(a,b){return this.bs(a,b,null)},
f7:function(a){return a.toLowerCase()},
er:function(a,b,c){if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
return H.nN(a,b,c)},
S:function(a,b){var t
if(typeof b!=="string")throw H.e(H.V(b))
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
gA:function(a){return C.X},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.R(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isr:1}
H.c.prototype={$asc:null}
H.bh.prototype={
gw:function(a){return new H.di(this,this.gj(this),0,null,[H.af(this,"bh",0)])},
aF:function(a,b){return this.d9(0,b)},
f6:function(a,b){var t,s
t=H.D([],[H.af(this,"bh",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f5:function(a){return this.f6(a,!0)}}
H.di.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ae(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a2(t))
q=this.c
if(q>=r){this.sae(null)
return!1}this.sae(s.t(t,q));++this.c
return!0},
sae:function(a){this.d=a}}
H.dj.prototype={
gw:function(a){return new H.f3(null,J.bv(this.a),this.b,this.$ti)},
gj:function(a){return J.dV(this.a)},
$asX:function(a,b){return[b]}}
H.eg.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f3.prototype={
p:function(){var t=this.b
if(t.p()){this.sae(this.c.$1(t.gq()))
return!0}this.sae(null)
return!1},
gq:function(){return this.a},
sae:function(a){this.a=a},
$asde:function(a,b){return[b]}}
H.bJ.prototype={
gj:function(a){return J.dV(this.a)},
t:function(a,b){return this.b.$1(J.lJ(this.a,b))},
$asc:function(a,b){return[b]},
$asbh:function(a,b){return[b]},
$asX:function(a,b){return[b]}}
H.dI.prototype={
gw:function(a){return new H.hx(J.bv(this.a),this.b,this.$ti)}}
H.hx.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cv.prototype={}
H.jf.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jg.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ih.prototype={
seS:function(a){this.z=a},
seU:function(a){this.ch=a}}
H.b4.prototype={
bZ:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b2()},
f0:function(a){var t,s,r,q,p
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
if(q===r.c)r.bQ();++r.d}this.y=!1}this.b2()},
ee:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
f_:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.F(new P.w("removeRange"))
P.kA(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d2:function(a,b){if(!this.r.v(0,a))return
this.db=b},
eM:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jA(null,null)
this.cx=t}t.V(0,new H.ia(a,c))},
eL:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aB()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jA(null,null)
this.cx=t}t.V(0,this.geT())},
eN:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ap(a)
if(b!=null)P.ap(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aB(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c6(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
ai:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.O(o)
p=H.ao(o)
this.eN(q,p)
if(this.db){this.aB()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nk(r)
u.globalState.d=H.jM(t,"$isb4")
if(t!=null)$=t.geR()
if(this.cx!=null)for(;n=this.cx,!n.gal(n);)this.cx.cu().$0()}return s},
cq:function(a){return this.b.h(0,a)},
bE:function(a,b){var t=this.b
if(t.E(0,a))throw H.e(P.cu("Registry: ports must be registered only once."))
t.i(0,a,b)},
b2:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aB()},
aB:function(){var t,s,r
t=this.cx
if(t!=null)t.X(0)
for(t=this.b,s=t.gcN(t),s=s.gw(s);s.p();)s.gq().dO()
t.X(0)
this.c.X(0)
u.globalState.z.an(0,this.a)
this.dx.X(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geR:function(){return this.d},
ges:function(){return this.e}}
H.ia.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hP.prototype={
eA:function(){var t=this.a
if(t.b===t.c)return
return t.cu()},
cw:function(){var t,s,r
t=this.eA()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gal(s)}else s=!1
else s=!1
else s=!1
if(s)H.F(P.cu("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gal(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aX(["command","close"])
r=new H.an(!0,new P.dL(0,null,null,null,null,null,0,[null,P.n])).K(r)
s.toString
self.postMessage(r)}return!1}t.eX()
return!0},
bU:function(){if(self.window!=null)new H.hQ(this).$0()
else for(;this.cw(););},
ao:function(){var t,s,r,q,p
if(!u.globalState.x)this.bU()
else try{this.bU()}catch(r){t=H.O(r)
s=H.ao(r)
q=u.globalState.Q
p=P.aX(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.an(!0,P.c7(null,P.n)).K(p)
q.toString
self.postMessage(p)}}}
H.hQ.prototype={
$0:function(){if(!this.a.cw())return
P.mS(C.q,this)},
$S:function(){return{func:1,v:true}}}
H.b5.prototype={
eX:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ai(this.b)}}
H.ig.prototype={}
H.eQ.prototype={
$0:function(){H.mx(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eR.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bt(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bt(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b2()},
$S:function(){return{func:1,v:true}}}
H.hH.prototype={}
H.bo.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n7(b)
if(t.ges()===s){s=J.ae(r)
switch(s.h(r,0)){case"pause":t.bZ(s.h(r,1),s.h(r,2))
break
case"resume":t.f0(s.h(r,1))
break
case"add-ondone":t.ee(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.f_(s.h(r,1))
break
case"set-errors-fatal":t.d2(s.h(r,1),s.h(r,2))
break
case"ping":t.eM(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eL(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.an(0,s)
break}return}u.globalState.f.a.V(0,new H.b5(t,new H.ii(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bo){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.ii.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dJ(0,this.b)},
$S:function(){return{func:1}}}
H.c9.prototype={
H:function(a,b){var t,s,r
t=P.aX(["command","message","port",this,"msg",b])
s=new H.an(!0,P.c7(null,P.n)).K(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c9){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.dd((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bj.prototype={
dO:function(){this.c=!0
this.b=null},
dJ:function(a,b){if(this.c)return
this.b.$1(b)},
$ismN:1}
H.hf.prototype={
dz:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.V(0,new H.b5(s,new H.hg(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bs(new H.hh(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.w("Timer greater than 0."))}}}
H.hg.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hh.prototype={
$0:function(){this.a.c=null
H.j2()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.as.prototype={
gu:function(a){var t=this.a
t=C.b.aW(t,0)^C.b.I(t,4294967296)
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
H.an.prototype={
K:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.t(a)
if(!!t.$isbM)return["buffer",a]
if(!!t.$isbi)return["typed",a]
if(!!t.$ism)return this.cZ(a)
if(!!t.$ismu){r=this.gcW()
q=t.gF(a)
q=H.jB(q,r,H.af(q,"X",0),null)
q=P.kv(q,!0,H.af(q,"X",0))
t=t.gcN(a)
t=H.jB(t,r,H.af(t,"X",0),null)
return["map",q,P.kv(t,!0,H.af(t,"X",0))]}if(!!t.$iskt)return this.d_(a)
if(!!t.$isa)this.cL(a)
if(!!t.$ismN)this.ap(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbo)return this.d0(a)
if(!!t.$isc9)return this.d1(a)
if(!!t.$isba){p=a.$static_name
if(p==null)this.ap(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isas)return["capability",a.a]
if(!(a instanceof P.o))this.cL(a)
return["dart",u.classIdExtractor(a),this.cY(u.classFieldsExtractor(a))]},
ap:function(a,b){throw H.e(new P.w((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cL:function(a){return this.ap(a,null)},
cZ:function(a){var t
H.d(typeof a!=="string")
t=this.cX(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ap(a,"Can't serialize indexable: ")},
cX:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.K(a[s])
return t},
cY:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.K(a[t]))
return a},
d_:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ap(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.K(a[t[r]])
return["js-object",t,s]},
d1:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d0:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b3.prototype={
Y:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.dZ("Bad serialized message: "+H.f(a)))
switch(C.a.gb8(a)){case"ref":H.d(J.E(a[0],"ref"))
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
s=H.D(this.ah(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.E(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.ah(t),[null])
case"mutable":H.d(J.E(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ah(t)
case"const":H.d(J.E(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.ah(t),[null])
s.fixed$length=Array
return s
case"map":return this.eD(a)
case"sendport":return this.eE(a)
case"raw sendport":H.d(J.E(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eC(a)
case"function":H.d(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.E(a[0],"capability"))
return new H.as(a[1])
case"dart":H.d(J.E(a[0],"dart"))
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
eD:function(a){var t,s,r,q,p
H.d(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.M()
C.a.l(this.b,r)
t=J.lX(t,this.geB()).f5(0)
for(q=J.ae(s),p=0;p<t.length;++p)r.i(0,t[p],this.Y(q.h(s,p)))
return r},
eE:function(a){var t,s,r,q,p,o,n
H.d(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cq(r)
if(o==null)return
n=new H.bo(o,s)}else n=new H.c9(t,r,s)
C.a.l(this.b,n)
return n},
eC:function(a){var t,s,r,q,p,o
H.d(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ae(t),p=J.ae(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.Y(p.h(s,o))
return r}}
H.fH.prototype={}
H.hm.prototype={
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
H.du.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eW.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hp.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jh.prototype={
$1:function(a){if(!!J.t(a).$isbc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dN.prototype={
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
H.ba.prototype={
k:function(a){return"Closure '"+H.dv(this).trim()+"'"},
$isju:1,
gfc:function(){return this},
$D:null}
H.h9.prototype={}
H.fW.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bw.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bw))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aY(this.a)
else s=typeof t!=="object"?J.ar(t):H.aY(t)
return(s^H.aY(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fD(t)}}
H.ho.prototype={
k:function(a){return this.a}}
H.e3.prototype={
k:function(a){return this.a}}
H.fN.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hA.prototype={
k:function(a){return C.e.a2("Assertion failed: ",P.jt(this.a))}}
H.aH.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ar(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aH){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ai.prototype={
gj:function(a){return this.a},
gal:function(a){return this.a===0},
gF:function(a){return new H.eZ(this,[H.aA(this,0)])},
gcN:function(a){return H.jB(this.gF(this),new H.eV(this),H.aA(this,0),H.aA(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bN(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bN(s,b)}else return this.eO(b)},
eO:function(a){var t=this.d
if(t==null)return!1
return this.ak(this.aw(t,this.aj(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.af(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.af(r,b)
return s==null?null:s.b}else return this.eP(b)},
eP:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aw(t,this.aj(a))
r=this.ak(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aS()
this.b=t}this.bD(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aS()
this.c=s}this.bD(s,b,c)}else{r=this.d
if(r==null){r=this.aS()
this.d=r}q=this.aj(b)
p=this.aw(r,q)
if(p==null)this.aV(r,q,[this.aT(b,c)])
else{o=this.ak(p,b)
if(o>=0)p[o].b=c
else p.push(this.aT(b,c))}}},
an:function(a,b){if(typeof b==="string")return this.bT(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bT(this.c,b)
else return this.eQ(b)},
eQ:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aw(t,this.aj(a))
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
az:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a2(this))
t=t.c}},
bD:function(a,b,c){var t=this.af(a,b)
if(t==null)this.aV(a,b,this.aT(b,c))
else t.b=c},
bT:function(a,b){var t
if(a==null)return
t=this.af(a,b)
if(t==null)return
this.bX(t)
this.bO(a,b)
return t.b},
aT:function(a,b){var t,s
t=new H.eY(a,b,null,null,[null,null])
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
aj:function(a){return J.ar(a)&0x3ffffff},
ak:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
k:function(a){return P.mE(this)},
af:function(a,b){return a[b]},
aw:function(a,b){return a[b]},
aV:function(a,b,c){H.d(c!=null)
a[b]=c},
bO:function(a,b){delete a[b]},
bN:function(a,b){return this.af(a,b)!=null},
aS:function(){var t=Object.create(null)
this.aV(t,"<non-identifier-key>",t)
this.bO(t,"<non-identifier-key>")
return t},
$ismu:1}
H.eV.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eY.prototype={}
H.eZ.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.f_(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f_.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a2(t))
else{t=this.c
if(t==null){this.sbC(null)
return!1}else{this.sbC(t.a)
this.c=this.c.c
return!0}}},
sbC:function(a){this.d=a}}
H.iU.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iV.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.iW.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.bM.prototype={
gA:function(a){return C.O},
$isbM:1}
H.bi.prototype={$isbi:1}
H.fc.prototype={
gA:function(a){return C.P}}
H.dm.prototype={
gj:function(a){return a.length},
$ism:1,
$asm:function(){},
$isp:1,
$asp:function(){}}
H.dn.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
a[b]=c}}
H.dp.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.dl.prototype={
gA:function(a){return C.Q},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]},
$iseD:1}
H.fd.prototype={
gA:function(a){return C.R},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
H.fe.prototype={
gA:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.ff.prototype={
gA:function(a){return C.T},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskq:1}
H.fg.prototype={
gA:function(a){return C.U},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.fh.prototype={
gA:function(a){return C.Y},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskP:1}
H.fi.prototype={
gA:function(a){return C.Z},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskQ:1}
H.dq.prototype={
gA:function(a){return C.a_},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.fj.prototype={
gA:function(a){return C.a0},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskR:1}
H.bN.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.n]}}
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
$asc:function(){return[P.n]},
$asp:function(){},
$asb:function(){return[P.n]}}
P.hD.prototype={
$1:function(a){var t,s
H.j2()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hC.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hE.prototype={
$0:function(){H.j2()
this.a.$0()},
$S:function(){return{func:1}}}
P.hF.prototype={
$0:function(){H.j2()
this.a.$0()},
$S:function(){return{func:1}}}
P.eI.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.P(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.P(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eH.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bM(r)}else if(t.b===0&&!this.b)this.d.P(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hJ.prototype={}
P.hB.prototype={
b6:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.av("Future already completed"))
t.bF(b)}}
P.iz.prototype={
b6:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.av("Future already completed"))
t.ad(b)}}
P.c3.prototype={
eV:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.bc(this.d,a.a)},
eK:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bt(s,{func:1,args:[P.o,P.bX]}))return t.f1(s,a.a,a.b)
else return t.bc(s,a.a)}}
P.K.prototype={
be:function(a,b){var t,s,r
t=$.x
if(t!==C.d){t.toString
if(b!=null)b=P.nc(b,t)}s=new P.K(0,t,null,[null])
r=b==null?1:3
this.aM(new P.c3(null,s,r,a,b,[H.aA(this,0),null]))
return s},
aD:function(a){return this.be(a,null)},
fb:function(a){var t,s
t=$.x
s=new P.K(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aA(this,0)
this.aM(new P.c3(null,s,8,a,null,[t,t]))
return s},
bH:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
aM:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jM(this.c,"$isc3")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.aM(a)
return}this.bH(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bq(null,null,t,new P.hV(this,a))}},
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
P.bq(null,null,s,new P.i2(t,this))}},
aU:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ag(t)},
ag:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ad:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.cd(a,"$isaS",t,"$asaS"))if(H.cd(a,"$isK",t,null))P.hY(a,this)
else P.kU(a,this)
else{s=this.aU()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,s)}},
bM:function(a){var t
H.d(this.a<4)
H.d(!J.t(a).$isaS)
t=this.aU()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,t)},
P:function(a,b){var t
H.d(this.a<4)
t=this.aU()
H.d(this.a<4)
this.a=8
this.c=new P.b9(a,b)
P.bn(this,t)},
dP:function(a){return this.P(a,null)},
bF:function(a){var t
H.d(this.a<4)
if(H.cd(a,"$isaS",this.$ti,"$asaS")){this.dN(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hX(this,a))},
dN:function(a){var t
if(H.cd(a,"$isK",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.i1(this,a))}else P.hY(a,this)
return}P.kU(a,this)},
dL:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hW(this,a,b))},
$isaS:1,
gaX:function(){return this.a},
ge6:function(){return this.c}}
P.hV.prototype={
$0:function(){P.bn(this.a,this.b)},
$S:function(){return{func:1}}}
P.i2.prototype={
$0:function(){P.bn(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.ad(a)},
$S:function(){return{func:1,args:[,]}}}
P.i_.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.P(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.i0.prototype={
$0:function(){this.a.P(this.b,this.c)},
$S:function(){return{func:1}}}
P.hX.prototype={
$0:function(){this.a.bM(this.b)},
$S:function(){return{func:1}}}
P.i1.prototype={
$0:function(){P.hY(this.b,this.a)},
$S:function(){return{func:1}}}
P.hW.prototype={
$0:function(){this.a.P(this.b,this.c)},
$S:function(){return{func:1}}}
P.i5.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cv(q.d)}catch(n){s=H.O(n)
r=H.ao(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b9(s,r)
p.a=!0
return}if(!!J.t(t).$isaS){if(t instanceof P.K&&t.gaX()>=4){if(t.gaX()===8){q=t
H.d(q.gaX()===8)
p=this.b
p.b=q.ge6()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aD(new P.i6(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i6.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i4.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.bc(r.d,this.c)}catch(q){t=H.O(q)
s=H.ao(q)
r=this.a
r.b=new P.b9(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i3.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eV(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eK(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.ao(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b9(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dJ.prototype={}
P.bY.prototype={
gj:function(a){var t,s
t={}
s=new P.K(0,$.x,null,[P.n])
t.a=0
this.cp(new P.h2(t),!0,new P.h3(t,s),s.gbL())
return s},
gb8:function(a){var t,s
t={}
s=new P.K(0,$.x,null,[H.af(this,"bY",0)])
t.a=null
t.a=this.cp(new P.h0(t,this,s),!0,new P.h1(s),s.gbL())
return s}}
P.h2.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h3.prototype={
$0:function(){this.b.ad(this.a.a)},
$S:function(){return{func:1}}}
P.h0.prototype={
$1:function(a){P.n6(this.a.a,this.c,a)},
$S:function(){return H.nn(function(a){return{func:1,args:[a]}},this.b,"bY")}}
P.h1.prototype={
$0:function(){var t,s,r,q
try{r=H.dd()
throw H.e(r)}catch(q){t=H.O(q)
s=H.ao(q)
P.n8(this.a,t,s)}},
$S:function(){return{func:1}}}
P.h_.prototype={}
P.iH.prototype={
$0:function(){return this.a.ad(this.b)},
$S:function(){return{func:1}}}
P.b9.prototype={
k:function(a){return H.f(this.a)},
$isbc:1}
P.iG.prototype={}
P.iK.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bT()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ik.prototype={
f2:function(a){var t,s,r
try{if(C.d===$.x){a.$0()
return}P.kZ(null,null,this,a)}catch(r){t=H.O(r)
s=H.ao(r)
P.iJ(null,null,this,t,s)}},
f3:function(a,b){var t,s,r
try{if(C.d===$.x){a.$1(b)
return}P.l_(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.ao(r)
P.iJ(null,null,this,t,s)}},
ek:function(a){return new P.im(this,a)},
b3:function(a){return new P.il(this,a)},
el:function(a){return new P.io(this,a)},
h:function(a,b){return},
cv:function(a){if($.x===C.d)return a.$0()
return P.kZ(null,null,this,a)},
bc:function(a,b){if($.x===C.d)return a.$1(b)
return P.l_(null,null,this,a,b)},
f1:function(a,b,c){if($.x===C.d)return a.$2(b,c)
return P.nd(null,null,this,a,b,c)}}
P.im.prototype={
$0:function(){return this.a.cv(this.b)},
$S:function(){return{func:1}}}
P.il.prototype={
$0:function(){return this.a.f2(this.b)},
$S:function(){return{func:1}}}
P.io.prototype={
$1:function(a){return this.a.f3(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dL.prototype={
aj:function(a){return H.nG(a)&0x3ffffff},
ak:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.ic.prototype={
gw:function(a){var t=new P.c6(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dQ(b)},
dQ:function(a){var t=this.d
if(t==null)return!1
return this.av(t[this.au(a)],a)>=0},
cq:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dZ(a)},
dZ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.au(a)]
r=this.av(s,a)
if(r<0)return
return J.b8(s,r).gdS()},
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
if(t==null){t=P.n3()
this.d=t}s=this.au(b)
r=t[s]
if(r==null){q=[this.aO(b)]
H.d(q!=null)
t[s]=q}else{if(this.av(r,b)>=0)return!1
r.push(this.aO(b))}return!0},
an:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bJ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bJ(this.c,b)
else return this.e0(0,b)},
e0:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.au(b)]
r=this.av(s,b)
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
t=this.aO(b)
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
aO:function(a){var t,s
t=new P.id(a,null,null)
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
au:function(a){return J.ar(a)&0x3ffffff},
av:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.id.prototype={
gdS:function(){return this.a}}
P.c6.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a2(t))
else{t=this.c
if(t==null){this.sac(null)
return!1}else{this.sac(t.a)
this.c=this.c.b
return!0}}},
sac:function(a){this.d=a}}
P.i9.prototype={}
P.dh.prototype={}
P.y.prototype={
gw:function(a){return new H.di(a,this.gj(a),0,null,[H.af(a,"y",0)])},
t:function(a,b){return this.h(a,b)},
cr:function(a,b){return new H.bJ(a,b,[H.af(a,"y",0),null])},
eJ:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a2(a))}return s},
k:function(a){return P.eS(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f4.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.f0.prototype={
gw:function(a){return new P.ie(this,this.c,this.d,this.b,null,this.$ti)},
gal:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.aq(0,b)||b>=t)H.F(P.C(b,this,"index",null,t))
return this.a[(C.b.a2(this.b,b)&this.a.length-1)>>>0]},
X:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eS(this,"{","}")},
cu:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.dd());++this.d
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
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bo(s,0,q,t,r)
C.a.bo(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbV(s)},
dq:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbV(H.D(t,[b]))},
sbV:function(a){this.a=a},
$asc:null}
P.ie.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.F(new P.a2(t))
s=this.d
if(s===this.b){this.sac(null)
return!1}this.sac(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sac:function(a){this.e=a}}
P.fQ.prototype={
J:function(a,b){var t
for(t=J.bv(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eS(this,"{","}")},
$isc:1,
$asc:null}
P.fP.prototype={}
P.bU.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.az.prototype={}
P.H.prototype={}
P.bx.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bx))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aW(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mi(H.mM(this))
s=P.co(H.mK(this))
r=P.co(H.mG(this))
q=P.co(H.mH(this))
p=P.co(H.mJ(this))
o=P.co(H.mL(this))
n=P.mj(H.mI(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.bx]}}
P.N.prototype={$isH:1,
$asH:function(){return[P.W]}}
P.aR.prototype={
aH:function(a,b){return C.b.aH(this.a,b.gdR())},
aq:function(a,b){return C.b.aq(this.a,b.gdR())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aR))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ef()
s=this.a
if(s<0)return"-"+new P.aR(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.ee().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isH:1,
$asH:function(){return[P.aR]}}
P.ee.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.ef.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.bc.prototype={}
P.ck.prototype={
k:function(a){return"Assertion failed"}}
P.bT.prototype={
k:function(a){return"Throw of null."}}
P.ag.prototype={
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaQ()+s+r
if(!this.a)return q
p=this.gaP()
o=P.jt(this.b)
return q+p+": "+H.f(o)}}
P.dx.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eO.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){H.d(this.a)
if(J.lr(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.w.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dH.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.av.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a2.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jt(t))+"."}}
P.dA.prototype={
k:function(a){return"Stack Overflow"},
$isbc:1}
P.e7.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hU.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.eh.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.F(P.k4(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kx(b,"expando$values")
return s==null?null:H.kx(s,t)}}
P.n.prototype={$isH:1,
$asH:function(){return[P.W]}}
P.X.prototype={
aF:function(a,b){return new H.dI(this,b,[H.af(this,"X",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga4:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.dd())
s=t.gq()
if(t.p())throw H.e(H.mC())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mb("index"))
if(b<0)H.F(P.aZ(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
k:function(a){return P.mA(this,"(",")")}}
P.de.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aE.prototype={}
P.aG.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.W.prototype={$isH:1,
$asH:function(){return[P.W]}}
P.o.prototype={constructor:P.o,$iso:1,
v:function(a,b){return this===b},
gu:function(a){return H.aY(this)},
k:function(a){return H.fD(this)},
gA:function(a){return new H.aH(H.iS(this),null)},
toString:function(){return this.k(this)}}
P.bX.prototype={}
P.r.prototype={$isH:1,
$asH:function(){return[P.r]}}
P.bZ.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga5:function(){return this.a}}
W.l.prototype={}
W.dX.prototype={
k:function(a){return String(a)},
$isa:1}
W.dY.prototype={
k:function(a){return String(a)},
$isa:1}
W.a1.prototype={$iso:1}
W.e1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isp:1,
$asp:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cl.prototype={}
W.aO.prototype={$isa:1,$isaO:1}
W.aP.prototype={
bg:function(a,b,c){if(c!=null)return this.dU(a,b,P.no(c,null))
return this.dV(a,b)},
cT:function(a,b){return this.bg(a,b,null)},
dU:function(a,b,c){return a.getContext(b,c)},
dV:function(a,b){return a.getContext(b)},
$isaP:1}
W.cm.prototype={
ay:function(a,b,c){return a.addColorStop(b,c)}}
W.cn.prototype={
cc:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eI:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aG:function(a){return P.iN(a.getContextAttributes())}}
W.aQ.prototype={$isa:1,
gj:function(a){return a.length}}
W.e5.prototype={$isa:1}
W.z.prototype={$iso:1}
W.bb.prototype={
bG:function(a,b){var t,s
t=$.$get$kb()
s=t[b]
if(typeof s==="string")return s
s=this.e9(a,b)
t[b]=s
return s},
e9:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mk()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e6.prototype={}
W.e8.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cp.prototype={}
W.by.prototype={
ef:function(a,b){return a.adoptNode(b)},
cU:function(a,b){return a.getElementById(b)},
eY:function(a,b){return a.querySelector(b)}}
W.cq.prototype={$isa:1}
W.ea.prototype={
k:function(a){return String(a)}}
W.cr.prototype={
ex:function(a,b){return a.createHTMLDocument(b)}}
W.eb.prototype={
gaE:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.cs.prototype={
gaE:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.ct.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga1(a))+" x "+H.f(this.ga0(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isJ)return!1
return a.left===t.gb9(b)&&a.top===t.gbf(b)&&this.ga1(a)===t.ga1(b)&&this.ga0(a)===t.ga0(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga1(a)
q=this.ga0(a)
return W.kX(W.b6(W.b6(W.b6(W.b6(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga0:function(a){return a.height},
gb9:function(a){return a.left},
gbf:function(a){return a.top},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isJ:1,
$asJ:function(){}}
W.ec.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
$isp:1,
$asp:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.ed.prototype={
gj:function(a){return a.length}}
W.a3.prototype={
gei:function(a){return new W.hN(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kj
if(t==null){t=H.D([],[W.ds])
s=new W.dt(t)
C.a.l(t,W.kV(null))
C.a.l(t,W.kY())
$.kj=s
d=s}else d=t
t=$.ki
if(t==null){t=new W.dO(d)
$.ki=t
c=t}else{t.a=d
c=t}}if($.aC==null){t=document
s=t.implementation
s=(s&&C.B).ex(s,"")
$.aC=s
$.js=s.createRange()
s=$.aC
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aC.head;(t&&C.C).R(t,r)}t=$.aC
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jM(s,"$isaO")}t=$.aC
if(!!this.$isaO)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aC.body;(t&&C.h).R(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.M,a.tagName)){t=$.js;(t&&C.y).cV(t,q)
t=$.js
p=(t&&C.y).ev(t,b)}else{q.innerHTML=b
p=$.aC.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.R(p,s)}t=$.aC.body
if(q==null?t!=null:q!==t)J.lZ(q)
c.bn(p)
C.k.ef(document,p)
return p},
ew:function(a,b,c){return this.N(a,b,c,null)},
d4:function(a,b,c,d){a.textContent=null
this.R(a,this.N(a,b,c,d))},
d3:function(a,b){return this.d4(a,b,null,null)},
a8:function(a,b){return a.getAttribute(b)},
e1:function(a,b){return a.removeAttribute(b)},
$isa:1,
$iso:1,
$isa3:1,
$ish:1,
$isq:1,
gf4:function(a){return a.tagName}}
W.iL.prototype={
$1:function(a){return!!J.t(a).$isa3},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={$iso:1,$isj:1}
W.h.prototype={
dK:function(a,b,c,d){return a.addEventListener(b,H.bs(c,1),!1)},
e3:function(a,b,c,d){return a.removeEventListener(b,H.bs(c,1),!1)},
$iso:1,
$ish:1}
W.a4.prototype={$iso:1}
W.eA.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isp:1,
$asp:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.eB.prototype={
gj:function(a){return a.length}}
W.eF.prototype={
gj:function(a){return a.length}}
W.a5.prototype={$iso:1}
W.cx.prototype={}
W.eK.prototype={
gj:function(a){return a.length}}
W.bG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cy.prototype={}
W.eL.prototype={
H:function(a,b){return a.send(b)}}
W.bH.prototype={}
W.bd.prototype={$isbd:1}
W.be.prototype={$isbe:1}
W.bf.prototype={$isbf:1}
W.eP.prototype={$isa:1,$isa3:1}
W.aW.prototype={$iso:1,$isj:1,$isaW:1}
W.f2.prototype={
k:function(a){return String(a)}}
W.bK.prototype={}
W.f8.prototype={
gj:function(a){return a.length}}
W.f9.prototype={
fd:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bL.prototype={}
W.a6.prototype={$iso:1}
W.fa.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.Q.prototype={$iso:1,$isj:1,$isQ:1}
W.fk.prototype={$isa:1}
W.T.prototype={
ga4:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.av("No elements"))
if(s>1)throw H.e(new P.av("More than one element"))
return t.firstChild},
J:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.R(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lu(t,c,C.w.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.cw(t,t.length,-1,null,[H.af(t,"B",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.w.h(this.a.childNodes,b)},
$asc:function(){return[W.q]},
$asdh:function(){return[W.q]},
$asb:function(){return[W.q]},
$asbU:function(){return[W.q]}}
W.q.prototype={
eZ:function(a){var t=a.parentNode
if(t!=null)J.bu(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d8(a):t},
R:function(a,b){return a.appendChild(b)},
e2:function(a,b){return a.removeChild(b)},
e4:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isq:1,
gba:function(a){return a.previousSibling}}
W.dr.prototype={
bb:function(a){return a.previousNode()}}
W.bS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.ft.prototype={$isa:1}
W.fw.prototype={
gj:function(a){return a.length}}
W.a7.prototype={$iso:1,
gj:function(a){return a.length}}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fC.prototype={
H:function(a,b){return a.send(b)}}
W.dw.prototype={
ev:function(a,b){return a.createContextualFragment(b)},
cV:function(a,b){return a.selectNodeContents(b)}}
W.fM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.dy.prototype={
H:function(a,b){return a.send(b)}}
W.fO.prototype={
gj:function(a){return a.length}}
W.fR.prototype={$isa:1}
W.a8.prototype={$iso:1,$ish:1}
W.fS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isp:1,
$asp:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$iso:1}
W.fU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isp:1,
$asp:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$iso:1,
gj:function(a){return a.length}}
W.fZ.prototype={
h:function(a,b){return this.bP(a,b)},
az:function(a,b){var t,s
for(t=0;!0;++t){s=this.dY(a,t)
if(s==null)return
b.$2(s,this.bP(a,s))}},
gj:function(a){return a.length},
bP:function(a,b){return a.getItem(b)},
dY:function(a,b){return a.key(b)}}
W.Y.prototype={$iso:1}
W.ak.prototype={}
W.dB.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=W.ml("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.T(s).J(0,new W.T(t))
return s}}
W.h7.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.N(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.ga4(t)
r.toString
t=new W.T(r)
q=t.ga4(t)
s.toString
q.toString
new W.T(s).J(0,new W.T(q))
return s}}
W.h8.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.z.N(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.ga4(t)
s.toString
r.toString
new W.T(s).J(0,new W.T(r))
return s}}
W.c_.prototype={$isc_:1}
W.ab.prototype={$iso:1,$ish:1}
W.Z.prototype={$iso:1,$ish:1}
W.hb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isp:1,
$asp:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.hc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isp:1,
$asp:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.he.prototype={
gj:function(a){return a.length}}
W.ac.prototype={$iso:1}
W.b_.prototype={$iso:1,$isj:1,$isb_:1}
W.hi.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isp:1,
$asp:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.hj.prototype={
gj:function(a){return a.length}}
W.bl.prototype={}
W.hl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
W.dF.prototype={
bb:function(a){return a.previousNode()}}
W.aI.prototype={}
W.hq.prototype={
k:function(a){return String(a)},
$isa:1}
W.bm.prototype={$isbm:1}
W.hs.prototype={
gj:function(a){return a.length}}
W.hv.prototype={
gj:function(a){return a.length}}
W.hw.prototype={
H:function(a,b){return a.send(b)}}
W.b1.prototype={
gez:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.w("deltaY is not supported"))},
$iso:1,
$isj:1,
$isQ:1,
$isb1:1}
W.c2.prototype={
geh:function(a){var t,s
t=P.W
s=new P.K(0,$.x,null,[t])
this.dT(a)
this.e5(a,W.l1(new W.hy(new P.iz(s,[t]))))
return s},
e5:function(a,b){return a.requestAnimationFrame(H.bs(b,1))},
dT:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hy.prototype={
$1:function(a){this.a.b6(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hz.prototype={$isa:1}
W.b2.prototype={$isa:1}
W.hI.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.t(b)
if(!t.$isJ)return!1
s=a.left
r=t.gb9(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbf(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga1(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga0(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ar(a.left)
s=J.ar(a.top)
r=J.ar(a.width)
q=J.ar(a.height)
return W.kX(W.b6(W.b6(W.b6(W.b6(0,t),s),r),q))},
$isJ:1,
$asJ:function(){},
ga0:function(a){return a.height},
gb9:function(a){return a.left},
gbf:function(a){return a.top},
ga1:function(a){return a.width}}
W.dK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]},
$isp:1,
$asp:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.hK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]},
$isp:1,
$asp:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.hL.prototype={$isa:1}
W.hM.prototype={
ga0:function(a){return a.height},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isp:1,
$asp:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.i8.prototype={$isa:1}
W.dM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.it.prototype={$isa:1}
W.iw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isp:1,
$asp:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ix.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isp:1,
$asp:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.iE.prototype={$isa:1}
W.iF.prototype={$isa:1}
W.hG.prototype={
az:function(a,b){var t,s,r,q,p,o
for(t=this.gF(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.I)(t),++p){o=t[p]
b.$2(o,q.a8(r,o))}},
gF:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdW:function(){return this.a}}
W.hN.prototype={
h:function(a,b){return J.jo(this.a,b)},
gj:function(a){return this.gF(this).length}}
W.hR.prototype={
cp:function(a,b,c,d){return W.am(this.a,this.b,a,!1,H.aA(this,0))}}
W.hO.prototype={}
W.hS.prototype={
eo:function(a){if(this.b==null)return
this.ec()
this.b=null
this.se_(null)
return},
eb:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.ls(r,this.c,t,!1)}},
ec:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lt(r,this.c,t,!1)}},
dF:function(a,b,c,d,e){this.eb()},
se_:function(a){this.d=a}}
W.hT.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c5.prototype={
a6:function(a){return $.$get$kW().B(0,W.bz(a))},
W:function(a,b,c){var t,s,r
t=W.bz(a)
s=$.$get$jF()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dG:function(a){var t,s
t=$.$get$jF()
if(t.gal(t)){for(s=0;s<262;++s)t.i(0,C.L[s],W.nv())
for(s=0;s<12;++s)t.i(0,C.m[s],W.nw())}}}
W.B.prototype={
gw:function(a){return new W.cw(a,this.gj(a),-1,null,[H.af(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dt.prototype={
a6:function(a){return C.a.c_(this.a,new W.fm(a))},
W:function(a,b,c){return C.a.c_(this.a,new W.fl(a,b,c))}}
W.fm.prototype={
$1:function(a){return a.a6(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fl.prototype={
$1:function(a){return a.W(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c8.prototype={
a6:function(a){return this.a.B(0,W.bz(a))},
W:function(a,b,c){var t,s
t=W.bz(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.eg(c)
else if(s.B(0,"*::"+b))return this.d.eg(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dI:function(a,b,c,d){var t,s,r
this.a.J(0,c)
t=b.aF(0,new W.iu())
s=b.aF(0,new W.iv())
this.b.J(0,t)
r=this.c
r.J(0,C.v)
r.J(0,s)}}
W.iu.prototype={
$1:function(a){return!C.a.B(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iv.prototype={
$1:function(a){return C.a.B(C.m,a)},
$S:function(){return{func:1,args:[,]}}}
W.iA.prototype={
W:function(a,b,c){if(this.dc(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jo(a,"template")==="")return this.e.B(0,b)
return!1}}
W.iB.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iy.prototype={
a6:function(a){var t=J.t(a)
if(!!t.$isbW)return!1
t=!!t.$isG
if(t&&W.bz(a)==="foreignObject")return!1
if(t)return!0
return!1},
W:function(a,b,c){if(b==="is"||C.e.bq(b,"on"))return!1
return this.a6(a)}}
W.cw.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbR(J.b8(this.a,t))
this.c=t
return!0}this.sbR(null)
this.c=s
return!1},
gq:function(){return this.d},
sbR:function(a){this.d=a}}
W.ds.prototype={}
W.is.prototype={}
W.dO.prototype={
bn:function(a){new W.iC(this).$2(a,null)},
ax:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bu(t,a)}else J.bu(b,a)},
e8:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lN(a)
r=J.jo(s.gdW(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.aB(a)}catch(n){H.O(n)}try{o=W.bz(a)
this.e7(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.ag)throw n
else{this.ax(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
e7:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ax(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a6(a)){this.ax(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aB(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.W(a,"is",g)){this.ax(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gF(f)
s=H.D(t.slice(0),[H.aA(t,0)])
for(r=f.gF(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.W(a,J.m3(p),q.a8(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a8(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a8(t,p)
q.e1(t,p)}}if(!!J.t(a).$isc_)this.bn(a.content)}}
W.iC.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e8(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bu(r,a)}else J.bu(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lO(t)}catch(q){H.O(q)
r=t
J.bu(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.q,W.q]}}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.bD.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bE.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.bF.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cz.prototype={}
W.cT.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cK.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.d5.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.d6.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.d4.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.d9.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.da.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.db.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.dc.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.d7.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.d8.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
P.iM.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.ib.prototype={
eW:function(){return Math.random()}}
P.ij.prototype={}
P.J.prototype={$asJ:null}
P.dW.prototype={$isa:1}
P.aN.prototype={$isa:1}
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
gL:function(a){return a.z}}
P.ew.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gL:function(a){return a.z}}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ah.prototype={}
P.aD.prototype={$isa:1}
P.eM.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$iso:1}
P.eX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.f5.prototype={$isa:1}
P.f6.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.au.prototype={$iso:1}
P.fn.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.fu.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fA.prototype={
gj:function(a){return a.length}}
P.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bW.prototype={$isa:1,$isbW:1}
P.h4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.G.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.ds])
C.a.l(t,W.kV(null))
C.a.l(t,W.kY())
C.a.l(t,new W.iy())
c=new W.dO(new W.dt(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.h).ew(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.T(q)
o=t.ga4(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.R(p,r)
return p},
$isa:1,
$isG:1}
P.h5.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h6.prototype={$isa:1}
P.dC.prototype={}
P.ha.prototype={$isa:1}
P.c0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aw.prototype={$iso:1}
P.hk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.Z(a,b)},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Z:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.hr.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ht.prototype={$isa:1}
P.hu.prototype={$isa:1}
P.c4.prototype={$isa:1}
P.ip.prototype={$isa:1}
P.iq.prototype={$isa:1}
P.ir.prototype={$isa:1}
P.cC.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cA.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.cH.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cL.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.d3.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.d_.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.d1.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.e0.prototype={
gj:function(a){return a.length}}
P.fK.prototype={
bY:function(a,b){return a.activeTexture(b)},
c0:function(a,b,c){return a.attachShader(b,c)},
c1:function(a,b,c){return a.bindBuffer(b,c)},
c2:function(a,b,c){return a.bindFramebuffer(b,c)},
c3:function(a,b,c){return a.bindTexture(b,c)},
c4:function(a,b){return a.blendEquation(b)},
c5:function(a,b,c){return a.blendFunc(b,c)},
c6:function(a,b,c,d){return a.bufferData(b,c,d)},
c7:function(a,b){return a.clear(b)},
c8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c9:function(a,b){return a.compileShader(b)},
ca:function(a){return a.createBuffer()},
cb:function(a){return a.createProgram()},
cd:function(a,b){return a.createShader(b)},
ce:function(a){return a.createTexture()},
cg:function(a,b){return a.depthMask(b)},
ci:function(a,b){return a.disable(b)},
cj:function(a,b,c,d){return a.drawArrays(b,c,d)},
ck:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cl:function(a,b){return a.enable(b)},
cm:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.iN(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bm:function(a,b,c){return a.getUniformLocation(b,c)},
co:function(a,b){return a.linkProgram(b)},
ct:function(a,b,c){return a.pixelStorei(b,c)},
bp:function(a,b,c){return a.shaderSource(b,c)},
br:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bd:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.t(g)
if(!!t.$isbe||g==null)s=!0
else s=!1
if(s){this.aY(a,b,c,d,e,f,P.l7(g))
return}if(!!t.$isbf)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,g)
return}if(!!t.$isaP)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isbm)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isbd)t=!0
else t=!1
if(t){this.b1(a,b,c,d,e,f,g)
return}throw H.e(P.dZ("Incorrect number or type of arguments"))},
cz:function(a,b,c,d,e,f,g){return this.bd(a,b,c,d,e,f,g,null,null,null)},
aY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cA:function(a,b,c,d){return a.texParameterf(b,c,d)},
cB:function(a,b,c,d){return a.texParameteri(b,c,d)},
cC:function(a,b,c){return a.uniform1f(b,c)},
cD:function(a,b,c){return a.uniform1fv(b,c)},
cE:function(a,b,c){return a.uniform1i(b,c)},
cF:function(a,b,c){return a.uniform1iv(b,c)},
cG:function(a,b,c){return a.uniform2fv(b,c)},
cH:function(a,b,c){return a.uniform3fv(b,c)},
cI:function(a,b,c){return a.uniform4fv(b,c)},
cJ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cK:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cM:function(a,b){return a.useProgram(b)},
cO:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cP:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fL.prototype={
ej:function(a,b){return a.beginTransformFeedback(b)},
em:function(a,b){return a.bindVertexArray(b)},
ey:function(a){return a.createVertexArray()},
eF:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eG:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eH:function(a){return a.endTransformFeedback()},
f9:function(a,b,c,d){this.ea(a,b,c,d)
return},
ea:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fa:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bY:function(a,b){return a.activeTexture(b)},
c0:function(a,b,c){return a.attachShader(b,c)},
c1:function(a,b,c){return a.bindBuffer(b,c)},
c2:function(a,b,c){return a.bindFramebuffer(b,c)},
c3:function(a,b,c){return a.bindTexture(b,c)},
c4:function(a,b){return a.blendEquation(b)},
c5:function(a,b,c){return a.blendFunc(b,c)},
c6:function(a,b,c,d){return a.bufferData(b,c,d)},
c7:function(a,b){return a.clear(b)},
c8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c9:function(a,b){return a.compileShader(b)},
ca:function(a){return a.createBuffer()},
cb:function(a){return a.createProgram()},
cd:function(a,b){return a.createShader(b)},
ce:function(a){return a.createTexture()},
cg:function(a,b){return a.depthMask(b)},
ci:function(a,b){return a.disable(b)},
cj:function(a,b,c,d){return a.drawArrays(b,c,d)},
ck:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cl:function(a,b){return a.enable(b)},
cm:function(a,b){return a.enableVertexAttribArray(b)},
aG:function(a){return P.iN(a.getContextAttributes())},
bh:function(a){return a.getError()},
bi:function(a,b){return a.getProgramInfoLog(b)},
bj:function(a,b,c){return a.getProgramParameter(b,c)},
bk:function(a,b){return a.getShaderInfoLog(b)},
bl:function(a,b,c){return a.getShaderParameter(b,c)},
bm:function(a,b,c){return a.getUniformLocation(b,c)},
co:function(a,b){return a.linkProgram(b)},
ct:function(a,b,c){return a.pixelStorei(b,c)},
bp:function(a,b,c){return a.shaderSource(b,c)},
br:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bd:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.t(g)
if(!!t.$isbe||g==null)s=!0
else s=!1
if(s){this.aY(a,b,c,d,e,f,P.l7(g))
return}if(!!t.$isbf)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,g)
return}if(!!t.$isaP)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isbm)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isbd)t=!0
else t=!1
if(t){this.b1(a,b,c,d,e,f,g)
return}throw H.e(P.dZ("Incorrect number or type of arguments"))},
cz:function(a,b,c,d,e,f,g){return this.bd(a,b,c,d,e,f,g,null,null,null)},
aY:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cA:function(a,b,c,d){return a.texParameterf(b,c,d)},
cB:function(a,b,c,d){return a.texParameteri(b,c,d)},
cC:function(a,b,c){return a.uniform1f(b,c)},
cD:function(a,b,c){return a.uniform1fv(b,c)},
cE:function(a,b,c){return a.uniform1i(b,c)},
cF:function(a,b,c){return a.uniform1iv(b,c)},
cG:function(a,b,c){return a.uniform2fv(b,c)},
cH:function(a,b,c){return a.uniform3fv(b,c)},
cI:function(a,b,c){return a.uniform4fv(b,c)},
cJ:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cK:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cM:function(a,b){return a.useProgram(b)},
cO:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cP:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iD.prototype={$isa:1}
P.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iN(this.dX(a,b))},
i:function(a,b,c){throw H.e(new P.w("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dX:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
P.cB.prototype={$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
P.cY.prototype={$isc:1,
$asc:function(){return[P.aE]},
$isb:1,
$asb:function(){return[P.aE]}}
B.ja.prototype={
$1:function(a){$.$get$iO().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aW]}}}
B.jb.prototype={
$1:function(a){$.$get$iO().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aW]}}}
B.jc.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nl=t
$.nm=C.b.aa(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jP=s-C.b.I(window.innerWidth,2)
$.lg=-(t-C.b.I(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.Q]}}}
B.jd.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cg=t-C.b.I(window.innerWidth,2)
$.ch=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$ce().i(0,"right",!0)
else $.$get$ce().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.Q]}}}
B.je.prototype={
$1:function(a){if(a.button===2)$.$get$ce().i(0,"right",null)
else $.$get$ce().i(0,"left",null)},
$S:function(){return{func:1,args:[W.Q]}}}
B.fo.prototype={
ds:function(a,b,c,d){var t
d.toString
W.am(d,W.nu().$1(d),new B.fp(this),!1,W.b1)
W.am(d,"mousemove",new B.fq(this),!1,W.Q)
t=W.b_
W.am(d,"touchstart",new B.fr(),!1,t)
W.am(d,"touchmove",new B.fs(this),!1,t)
B.nK(null)}}
B.fp.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a5.gez(a)*r.k3
if(C.c.aa(r.fy,t)>0)r.fy=H.a_(C.c.aa(r.fy,t))}catch(q){s=H.O(q)
P.ap(s)}},
$S:function(){return{func:1,args:[W.b1]}}}
B.fq.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a_(t.go+C.b.aa($.jP,$.cg)*0.01)
s=t.id
r=$.ch
q=$.lg
t.id=H.a_(s+(r-q)*0.01)
$.cg=$.jP
$.ch=q}},
$S:function(){return{func:1,args:[W.Q]}}}
B.fr.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a7(t.clientX)
C.c.a7(t.clientY)
$.cg=s
C.c.a7(t.clientX)
$.ch=C.c.a7(t.clientY)},
$S:function(){return{func:1,args:[W.b_]}}}
B.fs.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a7(t.clientX)
t=C.c.a7(t.clientY)
r=this.a
r.go=H.a_(r.go+C.b.aa(s,$.cg)*0.01)
r.id=H.a_(r.id+($.ch-t)*0.01)
$.cg=s
$.ch=t},
$S:function(){return{func:1,args:[W.b_]}}}
G.fb.prototype={}
G.dG.prototype={
a_:function(a,b){var t=this.d
if(H.aK(!t.E(0,a)))H.b7("uniform "+a+" already set")
t.i(0,a,b)},
bz:function(){return this.d},
k:function(a){var t,s,r,q
t=H.D(["{"+new H.aH(H.iS(this),null).k(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gF(s),r=r.gw(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.am(t,"\n")}}
G.e2.prototype={}
G.e4.prototype={
cn:function(a,b,c){J.lK(this.a,b)
if(c>0)J.m9(this.a,b,c)}}
G.eG.prototype={}
G.A.prototype={}
G.eJ.prototype={
bx:function(a){var t=this.e
H.d(!t.E(0,a))
H.d(C.e.bq(a,"a"))
switch($.$get$U().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.al]))
break
case"vec3":t.i(0,a,H.D([],[T.u]))
break
case"vec4":t.i(0,a,H.D([],[T.aJ]))
break
case"float":t.i(0,a,H.D([],[P.N]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.n]]))
break
default:if(H.aK(!1))H.b7("unknown type for "+a)}},
dg:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.b,new G.A(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.u(new Float32Array(3))
p.D(q)
C.a.l(t,p)}},
de:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.al(p))}},
df:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new T.u(new Float32Array(3))
p.D(q)
s.l(t,p)}},
dl:function(){var t,s,r,q,p,o,n,m
t=this.b
H.d(t.length>0||!1)
s=new Array(t.length*3)
s.fixed$length=Array
r=H.D(s,[P.n])
for(s=t.length,q=0,p=0;o=t.length,p<o;o===s||(0,H.I)(t),++p){n=t[p]
r[q]=n.a
r[q+1]=n.b
r[q+2]=n.c
q+=3}for(t=this.c,p=0;!1;++p){m=t[p]
r[q]=m.ged(m)
r[q+1]=m.gfe(m)
r[q+2]=m.gen(m)
r[q+3]=m.ged(m)
r[q+4]=m.gen(m)
r[q+5]=m.gff(m)
q+=6}H.d(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(s=this.e,r=s.gF(s),r=r.gw(r);r.p();){q=r.gq()
p=$.$get$U().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.am(t," ")}}
G.dE.prototype={}
G.dD.prototype={}
G.f7.prototype={
dr:function(a,b){this.a_("cDepthTest",!0)
this.a_("cDepthWrite",!1)
this.a_("cBlendEquation",b)
this.a_("cStencilFunc",$.$get$kC())}}
G.dk.prototype={
bw:function(a,b,c){var t,s
if(C.e.aN(a,0)===105){if(H.aK(C.b.aL(b.length,c)===this.z))H.b7("ChangeAttribute "+this.z)}else H.d(C.b.aL(b.length,c)===(this.ch.length/3|0))
this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dT(t.a,34962,s)
J.jU(t.a,34962,b,35048)},
dm:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ab:function(a,b,c){var t,s,r,q,p,o
t=J.jR(a,0)===105
if(t&&this.z===0)this.z=C.b.aL(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.jk(r.a))
this.bw(a,b,c)
q=$.$get$U().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aK(p.E(0,a)))H.b7("unexpected attribute "+a)
o=p.h(0,a)
J.dU(r.a,this.e)
r.cn(0,o,t?1:0)
s=s.h(0,a)
p=q.by()
J.dT(r.a,34962,s)
J.k3(r.a,o,p,5126,!1,0,0)},
bv:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.jk(s.a))
this.ch=a
this.bw("aPosition",a,3)
r=$.$get$U().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.E(0,"aPosition"))
p=q.h(0,"aPosition")
J.dU(s.a,this.e)
s.cn(0,p,0)
t=t.h(0,"aPosition")
q=r.by()
J.dT(s.a,34962,t)
J.k3(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gF(t),t=t.gw(t);t.p();){r=t.gq()
C.a.l(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.am(s,"  ")},
saR:function(a){this.cx=a}}
G.fv.prototype={
dh:function(a,b){var t=C.b.cR(a,b)
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
o=new T.u(new Float32Array(H.v(3)))
o.ar(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.D(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.t(n)
r=!!s.$isaJ
k=r?s.gaE(n):1
if(!!s.$isu){j=s.gm(n)
m=s.gn(n)
l=s.gL(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gL(n)
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
a3.D(this.db)
a3.cs(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fJ.prototype={
dA:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gF(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c6(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dD:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gF(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jR(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.j8("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$U().h(0,n)
if(l==null)H.F("unknown "+n)
H.d(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jp(r.a,k,m)
else if(!!J.t(m).$iskq)J.m7(r.a,k,m)
break
case"float":if(l.c===0)J.m5(r.a,k,m)
else if(!!J.t(m).$iseD)J.m6(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aL(m,"$isP").a
J.k2(r.a,k,!1,j)}else if(!!J.t(m).$iseD)J.k2(r.a,k,!1,m)
else if(H.aK(!1))H.b7("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aL(m,"$isaF").a
J.k1(r.a,k,!1,j)}else if(!!J.t(m).$iseD)J.k1(r.a,k,!1,m)
else if(H.aK(!1))H.b7("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.aL(m,"$isaJ").a
J.k0(r.a,k,j)}else J.k0(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.aL(m,"$isu").a
J.k_(r.a,k,j)}else J.k_(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.aL(m,"$isal").a
J.jZ(r.a,k,j)}else J.jZ(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a2(33984,this.ch)
J.jS(r.a,j)
j=H.aL(m,"$isc1").b
J.ci(r.a,3553,j)
j=this.ch
J.jp(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a2(33984,this.ch)
J.jS(r.a,j)
j=H.aL(m,"$isc1").b
J.ci(r.a,34067,j)
j=this.ch
J.jp(r.a,k,j)
this.ch=this.ch+1
break
default:H.j8("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.E(m,!0))J.cj(r.a,2929)
else J.jl(r.a,2929)
break
case"cStencilFunc":H.aL(m,"$isdE")
j=m.a
if(j===1281)J.jl(r.a,2960)
else{J.cj(r.a,2960)
i=m.b
h=m.c
J.m0(r.a,j,i,h)}break
case"cDepthWrite":J.lE(r.a,m)
break
case"cBlendEquation":H.aL(m,"$isdD")
j=m.a
if(j===1281)J.jl(r.a,3042)
else{J.cj(r.a,3042)
i=m.b
h=m.c
J.ly(r.a,i,h)
J.lx(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aR(1000*(s-new P.bx(t,!1).a)).k(0)},
dk:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.m8(t.a,s)
this.ch=0
this.z.X(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.I)(b),++r){q=b[r]
this.dD(q.a,q.bz())}s=this.Q
s.X(0)
for(p=a.cy,p=p.gF(p),p=p.gw(p);p.p();)s.l(0,p.gq())
o=this.dA()
if(o.length!==0)P.ap("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dU(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.dm()
m=a.Q
l=a.z
t.toString
if(n)J.lv(t.a,s)
if(m!==-1)if(l>1)J.lI(t.a,s,p,m,0,l)
else J.lH(t.a,s,p,m,0)
else if(l>1)J.lG(t.a,s,0,p,l)
else J.lF(t.a,s,0,p)
if(n)J.lL(t.a)},
dt:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lC(t.a)
m=G.kT(t.a,35633,r)
J.jT(t.a,n,m)
l=G.kT(t.a,35632,p)
J.jT(t.a,n,l)
if(o.length>0)J.m4(t.a,n,o,35980)
J.lW(t.a,n)
if(!J.lV(t.a,n,35714))H.F(J.lU(t.a,n))
this.r=n
this.sdM(0,P.jz(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.I)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.jX(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.I)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.jX(t.a,q,j))}},
sdM:function(a,b){this.x=b}}
G.i.prototype={
by:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.bk.prototype={
bt:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.I)(a),++q){p=a[q]
H.d($.$get$U().E(0,p))
H.d(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aJ(s)},
as:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.I)(a),++r){q=a[r]
if(H.aK($.$get$U().E(0,q)))H.b7("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.aJ(s)},
bu:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$U().E(0,r))
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aJ(t)},
du:function(a,b){H.d(this.b==null)
this.b=this.dE(!0,a,b)},
at:function(a){return this.du(a,null)},
dE:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
m=$.$get$U().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$U().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$U().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$U().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.J(q,b)
C.a.l(q,"}")
return C.a.am(q,"\n")}}
G.fT.prototype={
aI:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.hd.prototype={}
G.c1.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eN.prototype={
dv:function(a){var t,s
t=this.d
s=this.c
J.ci(t.a,s,this.b)
J.m1(t.a,s,0,6408,6408,5121,a)},
dn:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.ci(t.a,s,this.b)
J.lY(t.a,37440,1)
this.dv(this.f)
r=this.e
q=r.e
if(q!==1)J.m2(t.a,s,34046,q)
J.jY(t.a,s,10240,r.r)
J.jY(t.a,s,10241,r.f)
H.d(J.lT(t.a)===0)
J.ci(t.a,s,null)}}
R.fX.prototype={
dH:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mZ("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.p).bG(r,"float")
r.setProperty(p,"left","")
p=C.p.bG(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.j.R(t,s)}return t},
dw:function(a,b,c){var t,s,r
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
J.ji(this.a,s)
r=this.dH(b,c,90,30)
this.d=r
J.ji(this.a,r)
t=t.createElement("div")
this.c=t
J.ji(this.a,t)}}
R.fY.prototype={
dC:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.r.f8(s,2)+" fps"
t=this.c;(t&&C.j).d3(t,b)
r=C.b.I(30*C.r.ep(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.j).R(t,q)},
dB:function(a){return this.dC(a,"")}}
A.bR.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.bV.prototype={}
A.fI.prototype={
dj:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lw(p.a,36160,t)
H.d(r>0&&q>0)
J.ma(p.a,this.x,this.y,r,q)
if(s!==0)J.lz(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.dG(P.M(),"transforms",!1,!0))
l=new T.P(new Float32Array(16))
l.M()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.I)(r),++k)A.l8(p,r[k],l,a,m)
m.pop()}},
di:function(){return this.dj(null)}}
D.f1.prototype={
$1:function(a){return this.a.b6(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.iT.prototype={
$2:function(a,b){var t=536870911&a+J.ar(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.o]}}}
T.aF.prototype={
D:function(a){var t,s
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
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aF){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
U:function(a){var t,s
t=new Float32Array(H.v(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.u(t)},
eu:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.D(a)
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
T.P.prototype={
a9:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
D:function(a){var t,s
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
if(b instanceof T.P){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
U:function(a){var t,s
t=new Float32Array(H.v(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aJ(t)},
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
cs:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.al.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.al){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.u.prototype={
ar:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
D:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.u){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
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
b7:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cf:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.u(new Float32Array(H.v(3)))
t.ar(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
a3:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gL:function(a){return this.a[2]}}
T.aJ.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aJ){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dQ(this.a)},
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
gaE:function(a){return this.a[3]}}
A.j5.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ap("size change "+H.f(s)+" "+H.f(r))
this.b.dh(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
A.j3.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.c
t.go=H.a_(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.a_(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.a_(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.a_(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.a_(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.a_(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.a_(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.a_(C.c.eq(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.aI(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.d.a
s=t.k2.a
q[12]=q[12]+s[0]
q[13]=q[13]+s[1]
q[14]=q[14]+s[2]
r=q[12]
o=q[13]
n=q[14]
m=new T.u(new Float32Array(H.v(3)))
m.ar(0,1,0)
l=t.e
k=l.a
k[0]=q[12]
k[1]=q[13]
k[2]=q[14]
k=new Float32Array(H.v(3))
j=new T.u(k)
j.D(l)
k[0]=k[0]-s[0]
k[1]=k[1]-s[1]
k[2]=k[2]-s[2]
j.C(0)
i=m.cf(j)
i.C(0)
h=j.cf(i)
h.C(0)
s=i.b7(l)
g=h.b7(l)
l=j.b7(l)
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
q[15]=1
q[14]=-l
q[13]=-g
q[12]=-s
q[11]=0
q[10]=k
q[9]=d
q[8]=f
q[7]=0
q[6]=a1
q[5]=a0
q[4]=a
q[3]=0
q[2]=b
q[1]=c
q[0]=e
q[12]=r
q[13]=o
q[14]=n
n=t.f
o=n.a
o[0]=q[2]
o[1]=q[6]
o[2]=q[10]
t=-t.k1
n=Math.sqrt(n.gT())
i=o[0]/n
h=o[1]/n
j=o[2]/n
n=Math.cos(t)
t=Math.sin(t)
a2=1-n
a3=i*i*a2+n
o=j*t
a4=i*h*a2-o
r=h*t
a5=i*j*a2+r
a6=h*i*a2+o
a7=h*h*a2+n
t=i*t
a8=h*j*a2-t
a9=j*i*a2-r
b0=j*h*a2+t
b1=j*j*a2+n
n=q[0]
t=q[4]
r=q[8]
o=q[1]
e=q[5]
c=q[9]
b=q[2]
a=q[6]
a0=q[10]
a1=q[3]
f=q[7]
d=q[11]
q[0]=n*a3+t*a6+r*a9
q[1]=o*a3+e*a6+c*a9
q[2]=b*a3+a*a6+a0*a9
q[3]=a1*a3+f*a6+d*a9
q[4]=n*a4+t*a7+r*b0
q[5]=o*a4+e*a7+c*b0
q[6]=b*a4+a*a7+a0*b0
q[7]=a1*a4+f*a7+d*b0
q[8]=n*a5+t*a8+r*b1
q[9]=o*a5+e*a8+c*b1
q[10]=b*a5+a*a8+a0*b1
q[11]=a1*a5+f*a8+d*b1
this.d.di()
C.a6.geh(window).aD(this)
this.b.dB(b2)},
$S:function(){return{func:1,v:true,args:[P.W]}}}
A.j4.prototype={
$1:function(a){var t=G.kp(this.a,$.lp,J.b8(a,0),null,3553)
$.$get$j7().a_("uTexture",t)
this.b.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.d8=J.a.prototype.k
J.bI.prototype.da=J.bI.prototype.k
P.X.prototype.d9=P.X.prototype.aF
W.a3.prototype.aK=W.a3.prototype.N
W.c8.prototype.dc=W.c8.prototype.W;(function installTearOffs(){installTearOff(H.b4.prototype,"geT",0,0,0,null,["$0"],["aB"],0)
installTearOff(H.an.prototype,"gcW",0,0,0,null,["$1"],["K"],2)
installTearOff(H.b3.prototype,"geB",0,0,0,null,["$1"],["Y"],2)
installTearOff(P,"nh",1,0,0,null,["$1"],["mW"],1)
installTearOff(P,"ni",1,0,0,null,["$1"],["mX"],1)
installTearOff(P,"nj",1,0,0,null,["$1"],["mY"],1)
installTearOff(P,"l5",1,0,0,null,["$0"],["nf"],0)
installTearOff(P.K.prototype,"gbL",0,0,0,null,["$2","$1"],["P","dP"],5)
installTearOff(P,"np",1,0,0,null,["$2"],["mh"],6)
installTearOff(W,"nu",1,0,0,null,["$1"],["mm"],7)
installTearOff(W,"nv",1,0,0,null,["$4"],["n1"],4)
installTearOff(W,"nw",1,0,0,null,["$4"],["n2"],4)
installTearOff(W.dr.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(W.dF.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(A,"l6",1,0,0,null,["$0"],["nE"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.jw,t)
inherit(J.a,t)
inherit(J.e_,t)
inherit(P.X,t)
inherit(H.di,t)
inherit(P.de,t)
inherit(H.cv,t)
inherit(H.ba,t)
inherit(H.ih,t)
inherit(H.b4,t)
inherit(H.hP,t)
inherit(H.b5,t)
inherit(H.ig,t)
inherit(H.hH,t)
inherit(H.bj,t)
inherit(H.hf,t)
inherit(H.as,t)
inherit(H.an,t)
inherit(H.b3,t)
inherit(H.fH,t)
inherit(H.hm,t)
inherit(P.bc,t)
inherit(H.dN,t)
inherit(H.aH,t)
inherit(H.ai,t)
inherit(H.eY,t)
inherit(H.f_,t)
inherit(P.hJ,t)
inherit(P.c3,t)
inherit(P.K,t)
inherit(P.dJ,t)
inherit(P.bY,t)
inherit(P.h_,t)
inherit(P.b9,t)
inherit(P.iG,t)
inherit(P.fQ,t)
inherit(P.id,t)
inherit(P.c6,t)
inherit(P.bU,t)
inherit(P.y,t)
inherit(P.ie,t)
inherit(P.az,t)
inherit(P.H,t)
inherit(P.bx,t)
inherit(P.W,t)
inherit(P.aR,t)
inherit(P.dA,t)
inherit(P.hU,t)
inherit(P.eh,t)
inherit(P.b,t)
inherit(P.aE,t)
inherit(P.aG,t)
inherit(P.bX,t)
inherit(P.r,t)
inherit(P.bZ,t)
inherit(W.e6,t)
inherit(W.hG,t)
inherit(W.c5,t)
inherit(W.B,t)
inherit(W.dt,t)
inherit(W.c8,t)
inherit(W.iy,t)
inherit(W.cw,t)
inherit(W.ds,t)
inherit(W.is,t)
inherit(W.dO,t)
inherit(P.ib,t)
inherit(P.ij,t)
inherit(G.fb,t)
inherit(G.e4,t)
inherit(G.eG,t)
inherit(G.A,t)
inherit(G.eJ,t)
inherit(G.dE,t)
inherit(G.dD,t)
inherit(G.i,t)
inherit(G.bk,t)
inherit(G.hd,t)
inherit(G.c1,t)
inherit(R.fX,t)
inherit(T.aF,t)
inherit(T.P,t)
inherit(T.al,t)
inherit(T.u,t)
inherit(T.aJ,t)
t=J.a
inherit(J.eT,t)
inherit(J.eU,t)
inherit(J.bI,t)
inherit(J.aT,t)
inherit(J.bg,t)
inherit(J.aU,t)
inherit(H.bM,t)
inherit(H.bi,t)
inherit(W.h,t)
inherit(W.a1,t)
inherit(W.cl,t)
inherit(W.cm,t)
inherit(W.cn,t)
inherit(W.z,t)
inherit(W.cz,t)
inherit(W.e8,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.cr,t)
inherit(W.cs,t)
inherit(W.ct,t)
inherit(W.cK,t)
inherit(W.ed,t)
inherit(W.j,t)
inherit(W.cJ,t)
inherit(W.a5,t)
inherit(W.eK,t)
inherit(W.cO,t)
inherit(W.bd,t)
inherit(W.be,t)
inherit(W.f2,t)
inherit(W.f8,t)
inherit(W.a6,t)
inherit(W.cI,t)
inherit(W.fk,t)
inherit(W.dr,t)
inherit(W.cN,t)
inherit(W.ft,t)
inherit(W.bl,t)
inherit(W.a7,t)
inherit(W.cG,t)
inherit(W.ak,t)
inherit(W.dw,t)
inherit(W.a9,t)
inherit(W.cF,t)
inherit(W.aa,t)
inherit(W.fZ,t)
inherit(W.Y,t)
inherit(W.cE,t)
inherit(W.he,t)
inherit(W.ac,t)
inherit(W.cD,t)
inherit(W.hj,t)
inherit(W.dF,t)
inherit(W.hq,t)
inherit(W.hv,t)
inherit(W.hI,t)
inherit(W.cT,t)
inherit(W.cS,t)
inherit(W.cR,t)
inherit(W.cM,t)
inherit(W.cQ,t)
inherit(W.cP,t)
inherit(W.iE,t)
inherit(W.iF,t)
inherit(P.at,t)
inherit(P.cC,t)
inherit(P.au,t)
inherit(P.cH,t)
inherit(P.fz,t)
inherit(P.fA,t)
inherit(P.fF,t)
inherit(P.cA,t)
inherit(P.aw,t)
inherit(P.cL,t)
inherit(P.hu,t)
inherit(P.e0,t)
inherit(P.fK,t)
inherit(P.fL,t)
inherit(P.iD,t)
inherit(P.cB,t)
t=J.bI
inherit(J.fx,t)
inherit(J.b0,t)
inherit(J.aV,t)
inherit(J.jv,J.aT)
t=J.bg
inherit(J.dg,t)
inherit(J.df,t)
t=P.X
inherit(H.c,t)
inherit(H.dj,t)
inherit(H.dI,t)
t=H.c
inherit(H.bh,t)
inherit(H.eZ,t)
inherit(H.eg,H.dj)
t=P.de
inherit(H.f3,t)
inherit(H.hx,t)
t=H.bh
inherit(H.bJ,t)
inherit(P.f0,t)
t=H.ba
inherit(H.jf,t)
inherit(H.jg,t)
inherit(H.ia,t)
inherit(H.hQ,t)
inherit(H.eQ,t)
inherit(H.eR,t)
inherit(H.ii,t)
inherit(H.hg,t)
inherit(H.hh,t)
inherit(H.jh,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(H.j_,t)
inherit(H.j0,t)
inherit(H.j1,t)
inherit(H.h9,t)
inherit(H.eV,t)
inherit(H.iU,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(P.hD,t)
inherit(P.hC,t)
inherit(P.hE,t)
inherit(P.hF,t)
inherit(P.eI,t)
inherit(P.eH,t)
inherit(P.hV,t)
inherit(P.i2,t)
inherit(P.hZ,t)
inherit(P.i_,t)
inherit(P.i0,t)
inherit(P.hX,t)
inherit(P.i1,t)
inherit(P.hW,t)
inherit(P.i5,t)
inherit(P.i6,t)
inherit(P.i4,t)
inherit(P.i3,t)
inherit(P.h2,t)
inherit(P.h3,t)
inherit(P.h0,t)
inherit(P.h1,t)
inherit(P.iH,t)
inherit(P.iK,t)
inherit(P.im,t)
inherit(P.il,t)
inherit(P.io,t)
inherit(P.f4,t)
inherit(P.ee,t)
inherit(P.ef,t)
inherit(W.iL,t)
inherit(W.hy,t)
inherit(W.hT,t)
inherit(W.fm,t)
inherit(W.fl,t)
inherit(W.iu,t)
inherit(W.iv,t)
inherit(W.iB,t)
inherit(W.iC,t)
inherit(P.iM,t)
inherit(B.ja,t)
inherit(B.jb,t)
inherit(B.jc,t)
inherit(B.jd,t)
inherit(B.je,t)
inherit(B.fp,t)
inherit(B.fq,t)
inherit(B.fr,t)
inherit(B.fs,t)
inherit(D.f1,t)
inherit(A.iT,t)
inherit(A.j5,t)
inherit(A.j3,t)
inherit(A.j4,t)
t=H.hH
inherit(H.bo,t)
inherit(H.c9,t)
t=P.bc
inherit(H.du,t)
inherit(H.eW,t)
inherit(H.hp,t)
inherit(H.ho,t)
inherit(H.e3,t)
inherit(H.fN,t)
inherit(P.ck,t)
inherit(P.bT,t)
inherit(P.ag,t)
inherit(P.w,t)
inherit(P.dH,t)
inherit(P.av,t)
inherit(P.a2,t)
inherit(P.e7,t)
t=H.h9
inherit(H.fW,t)
inherit(H.bw,t)
inherit(H.hA,P.ck)
t=H.bi
inherit(H.fc,t)
inherit(H.dm,t)
t=H.dm
inherit(H.bO,t)
inherit(H.bN,t)
inherit(H.bP,H.bO)
inherit(H.dn,H.bP)
inherit(H.bQ,H.bN)
inherit(H.dp,H.bQ)
t=H.dn
inherit(H.dl,t)
inherit(H.fd,t)
t=H.dp
inherit(H.fe,t)
inherit(H.ff,t)
inherit(H.fg,t)
inherit(H.fh,t)
inherit(H.fi,t)
inherit(H.dq,t)
inherit(H.fj,t)
t=P.hJ
inherit(P.hB,t)
inherit(P.iz,t)
inherit(P.ik,P.iG)
inherit(P.dL,H.ai)
inherit(P.fP,P.fQ)
inherit(P.i9,P.fP)
inherit(P.ic,P.i9)
inherit(P.dh,P.bU)
t=P.W
inherit(P.N,t)
inherit(P.n,t)
t=P.ag
inherit(P.dx,t)
inherit(P.eO,t)
t=W.h
inherit(W.q,t)
inherit(W.bC,t)
inherit(W.e5,t)
inherit(W.eB,t)
inherit(W.bH,t)
inherit(W.bL,t)
inherit(W.fC,t)
inherit(W.dy,t)
inherit(W.fR,t)
inherit(W.a8,t)
inherit(W.bB,t)
inherit(W.ab,t)
inherit(W.Z,t)
inherit(W.bA,t)
inherit(W.hs,t)
inherit(W.hw,t)
inherit(W.c2,t)
inherit(W.hz,t)
inherit(W.b2,t)
inherit(W.it,t)
t=W.q
inherit(W.a3,t)
inherit(W.aQ,t)
inherit(W.by,t)
inherit(W.cq,t)
inherit(W.hL,t)
t=W.a3
inherit(W.l,t)
inherit(P.G,t)
t=W.l
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.aO,t)
inherit(W.aP,t)
inherit(W.cp,t)
inherit(W.eF,t)
inherit(W.cx,t)
inherit(W.bf,t)
inherit(W.eP,t)
inherit(W.bK,t)
inherit(W.fO,t)
inherit(W.dB,t)
inherit(W.h7,t)
inherit(W.h8,t)
inherit(W.c_,t)
inherit(W.i8,t)
inherit(W.bF,W.bC)
inherit(W.e1,W.bF)
inherit(W.bb,W.cz)
inherit(W.eb,W.cs)
inherit(W.dc,W.cK)
inherit(W.ec,W.dc)
inherit(W.a4,W.cl)
inherit(W.da,W.cJ)
inherit(W.eA,W.da)
inherit(W.cV,W.cO)
inherit(W.bG,W.cV)
inherit(W.cy,W.by)
inherit(W.eL,W.bH)
inherit(W.aI,W.j)
t=W.aI
inherit(W.aW,t)
inherit(W.Q,t)
inherit(W.b_,t)
inherit(W.f9,W.bL)
inherit(W.d4,W.cI)
inherit(W.fa,W.d4)
inherit(W.T,P.dh)
inherit(W.d5,W.cN)
inherit(W.bS,W.d5)
t=W.bl
inherit(W.fw,t)
inherit(W.fM,t)
inherit(W.hl,t)
inherit(W.d6,W.cG)
inherit(W.fy,W.d6)
inherit(W.fB,W.ak)
inherit(W.bE,W.bB)
inherit(W.fS,W.bE)
inherit(W.d2,W.cF)
inherit(W.fU,W.d2)
inherit(W.cZ,W.cE)
inherit(W.hb,W.cZ)
inherit(W.bD,W.bA)
inherit(W.hc,W.bD)
inherit(W.d9,W.cD)
inherit(W.hi,W.d9)
inherit(W.bm,W.bK)
inherit(W.b1,W.Q)
inherit(W.d7,W.cT)
inherit(W.dK,W.d7)
inherit(W.cU,W.cS)
inherit(W.hK,W.cU)
inherit(W.hM,W.ct)
inherit(W.d0,W.cR)
inherit(W.i7,W.d0)
inherit(W.db,W.cM)
inherit(W.dM,W.db)
inherit(W.cX,W.cQ)
inherit(W.iw,W.cX)
inherit(W.d8,W.cP)
inherit(W.ix,W.d8)
inherit(W.hN,W.hG)
inherit(W.hR,P.bY)
inherit(W.hO,W.hR)
inherit(W.hS,P.h_)
inherit(W.iA,W.c8)
inherit(P.J,P.ij)
t=P.G
inherit(P.aD,t)
inherit(P.aN,t)
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
inherit(P.eC,t)
inherit(P.f5,t)
inherit(P.f6,t)
inherit(P.fu,t)
inherit(P.bW,t)
inherit(P.h6,t)
inherit(P.ht,t)
inherit(P.c4,t)
inherit(P.ip,t)
inherit(P.iq,t)
inherit(P.ir,t)
t=P.aD
inherit(P.dW,t)
inherit(P.eE,t)
inherit(P.ah,t)
inherit(P.eM,t)
inherit(P.h5,t)
inherit(P.dC,t)
inherit(P.hr,t)
inherit(P.cW,P.cC)
inherit(P.eX,P.cW)
inherit(P.d3,P.cH)
inherit(P.fn,P.d3)
inherit(P.fG,P.ah)
inherit(P.d1,P.cA)
inherit(P.h4,P.d1)
t=P.dC
inherit(P.ha,t)
inherit(P.c0,t)
inherit(P.d_,P.cL)
inherit(P.hk,P.d_)
inherit(P.cY,P.cB)
inherit(P.fV,P.cY)
t=G.fb
inherit(G.fT,t)
inherit(G.dG,t)
inherit(G.dk,t)
inherit(G.fJ,t)
inherit(A.bV,t)
inherit(A.fI,t)
t=G.fT
inherit(G.e2,t)
inherit(A.bR,t)
inherit(B.fo,G.e2)
t=G.dG
inherit(G.f7,t)
inherit(G.fv,t)
inherit(G.eN,G.c1)
inherit(R.fY,R.fX)
mixin(H.bN,P.y)
mixin(H.bO,P.y)
mixin(H.bP,H.cv)
mixin(H.bQ,H.cv)
mixin(P.bU,P.y)
mixin(W.bA,P.y)
mixin(W.bB,P.y)
mixin(W.bC,P.y)
mixin(W.bD,W.B)
mixin(W.bE,W.B)
mixin(W.bF,W.B)
mixin(W.cz,W.e6)
mixin(W.cT,P.y)
mixin(W.cF,P.y)
mixin(W.cM,P.y)
mixin(W.cN,P.y)
mixin(W.cO,P.y)
mixin(W.cP,P.y)
mixin(W.cQ,P.y)
mixin(W.cR,P.y)
mixin(W.cS,P.y)
mixin(W.cD,P.y)
mixin(W.cE,P.y)
mixin(W.cG,P.y)
mixin(W.cI,P.y)
mixin(W.cJ,P.y)
mixin(W.cK,P.y)
mixin(W.cU,W.B)
mixin(W.cV,W.B)
mixin(W.d5,W.B)
mixin(W.d6,W.B)
mixin(W.d4,W.B)
mixin(W.d9,W.B)
mixin(W.da,W.B)
mixin(W.db,W.B)
mixin(W.dc,W.B)
mixin(W.cX,W.B)
mixin(W.cZ,W.B)
mixin(W.d0,W.B)
mixin(W.d2,W.B)
mixin(W.d7,W.B)
mixin(W.d8,W.B)
mixin(P.cC,P.y)
mixin(P.cA,P.y)
mixin(P.cH,P.y)
mixin(P.cL,P.y)
mixin(P.cW,W.B)
mixin(P.d3,W.B)
mixin(P.d_,W.B)
mixin(P.d1,W.B)
mixin(P.cB,P.y)
mixin(P.cY,W.B)})();(function constants(){C.h=W.aO.prototype
C.o=W.aP.prototype
C.f=W.cm.prototype
C.i=W.cn.prototype
C.p=W.bb.prototype
C.j=W.cp.prototype
C.B=W.cr.prototype
C.C=W.cx.prototype
C.k=W.cy.prototype
C.D=J.a.prototype
C.a=J.aT.prototype
C.r=J.df.prototype
C.b=J.dg.prototype
C.c=J.bg.prototype
C.e=J.aU.prototype
C.K=J.aV.prototype
C.N=H.dl.prototype
C.w=W.bS.prototype
C.x=J.fx.prototype
C.y=W.dw.prototype
C.z=W.dB.prototype
C.n=J.b0.prototype
C.a5=W.b1.prototype
C.a6=W.c2.prototype
C.A=new P.ib()
C.d=new P.ik()
C.q=new P.aR(0)
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.J=function(hooks) {
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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.M=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.v=makeConstList([])
C.l=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.m=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.O=H.L("nP")
C.P=H.L("nQ")
C.Q=H.L("eD")
C.R=H.L("nR")
C.S=H.L("nS")
C.T=H.L("kq")
C.U=H.L("nT")
C.V=H.L("kt")
C.W=H.L("aG")
C.X=H.L("r")
C.Y=H.L("kP")
C.Z=H.L("kQ")
C.a_=H.L("nU")
C.a0=H.L("kR")
C.a1=H.L("az")
C.a2=H.L("N")
C.a3=H.L("n")
C.a4=H.L("W")})();(function staticFields(){$.ky="$cachedFunction"
$.kz="$cachedInvocation"
$.k8=null
$.k6=null
$.jG=!1
$.jK=null
$.l2=null
$.lk=null
$.iP=null
$.iX=null
$.jL=null
$.bp=null
$.ca=null
$.cb=null
$.jH=!1
$.x=C.d
$.kk=0
$.aC=null
$.js=null
$.kj=null
$.ki=null
$.kg=null
$.kf=null
$.ke=null
$.kd=null
$.nl=0
$.nm=0
$.jP=0
$.lg=0
$.cg=0
$.ch=0
$.nL=!1
$.la=0
$.lp="sphere.png"
$.n5="  vec3 u = normalize(vec3(uModelMatrix * vec4(aPosition, 1.0)));\n  vec3 n = normalize(uNormalMatrix * aNormal );\n  vec3 r = reflect( u, n );\n  r.z += 1.0;\n  float m = 2.0 * length(r);\n  vTexUV = vec2(r.x/m + 0.5, r.y/m + 0.5);\n"})();(function lazyInitializers(){lazy($,"kc","$get$kc",function(){return H.ld("_$dart_dartClosure")})
lazy($,"jx","$get$jx",function(){return H.ld("_$dart_js")})
lazy($,"kr","$get$kr",function(){return H.my()})
lazy($,"ks","$get$ks",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kk
$.kk=t+1
t="expando$key$"+t}return new P.eh(null,t,[P.n])})
lazy($,"kE","$get$kE",function(){return H.ax(H.hn({
toString:function(){return"$receiver$"}}))})
lazy($,"kF","$get$kF",function(){return H.ax(H.hn({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kG","$get$kG",function(){return H.ax(H.hn(null))})
lazy($,"kH","$get$kH",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kL","$get$kL",function(){return H.ax(H.hn(void 0))})
lazy($,"kM","$get$kM",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kJ","$get$kJ",function(){return H.ax(H.kK(null))})
lazy($,"kI","$get$kI",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kO","$get$kO",function(){return H.ax(H.kK(void 0))})
lazy($,"kN","$get$kN",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jE","$get$jE",function(){return P.mV()})
lazy($,"km","$get$km",function(){return P.n_(null,P.aG)})
lazy($,"cc","$get$cc",function(){return[]})
lazy($,"kb","$get$kb",function(){return{}})
lazy($,"kW","$get$kW",function(){return P.jz(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jF","$get$jF",function(){return P.M()})
lazy($,"iO","$get$iO",function(){return P.ku(P.n,P.az)})
lazy($,"ce","$get$ce",function(){return P.ku(P.r,P.az)})
lazy($,"kC","$get$kC",function(){return new G.dE(1281,0,4294967295)})
lazy($,"jq","$get$jq",function(){return new G.dD(32774,770,769)})
lazy($,"U","$get$U",function(){return P.aX(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kS","$get$kS",function(){return C.A})
lazy($,"lj","$get$lj",function(){var t=new G.bk("PointSpritesV",null,[],[],[],[],0,P.M())
t.bt(["aPosition"])
t.as(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.at(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"li","$get$li",function(){var t=new G.bk("PointSpritesF",null,[],[],[],[],0,P.M())
t.as(["uTexture"])
t.at(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kn","$get$kn",function(){return[new G.A(0,11,5),new G.A(0,5,1),new G.A(0,1,7),new G.A(0,7,10),new G.A(0,10,11),new G.A(1,5,9),new G.A(5,11,4),new G.A(11,10,2),new G.A(10,7,6),new G.A(7,1,8),new G.A(3,9,4),new G.A(3,4,2),new G.A(3,2,6),new G.A(3,6,8),new G.A(3,8,9),new G.A(4,9,5),new G.A(2,4,11),new G.A(6,2,10),new G.A(8,6,7),new G.A(9,8,1)]})
lazy($,"lo","$get$lo",function(){return(1+P.nM(5))/2})
lazy($,"ko","$get$ko",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lo()
s=T.ad(-1,t,0)
s.C(0)
r=T.ad(1,t,0)
r.C(0)
q=T.ad(-1,-t,0)
q.C(0)
p=T.ad(1,-t,0)
p.C(0)
o=T.ad(0,-1,t)
o.C(0)
n=T.ad(0,1,t)
n.C(0)
m=T.ad(0,-1,-t)
m.C(0)
l=T.ad(0,1,-t)
l.C(0)
k=T.ad(t,0,-1)
k.C(0)
j=T.ad(t,0,1)
j.C(0)
i=T.ad(-t,0,-1)
i.C(0)
t=T.ad(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"lm","$get$lm",function(){var t=new G.bk("sphereV",null,[],[],[],[],0,P.M())
t.bt(["aPosition","aNormal"])
t.as(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.bu(["vTexUV"])
t.at(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);",$.n5])
return t})
lazy($,"ll","$get$ll",function(){var t=new G.bk("sphereF",null,[],[],[],[],0,P.M())
t.bu(["vTexUV"])
t.as(["uTexture"])
t.at(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"j7","$get$j7",function(){return G.kw("sphere",$.$get$jq())})})()
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
mangledGlobalNames:{n:"int",N:"double",W:"num",r:"String",az:"bool",aG:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.az,args:[W.a3,P.r,P.r,W.c5]},{func:1,v:true,args:[P.o],opt:[P.bX]},{func:1,ret:P.n,args:[P.H,P.H]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bM,ArrayBufferView:H.bi,DataView:H.fc,Float32Array:H.dl,Float64Array:H.fd,Int16Array:H.fe,Int32Array:H.ff,Int8Array:H.fg,Uint16Array:H.fh,Uint32Array:H.fi,Uint8ClampedArray:H.dq,CanvasPixelArray:H.dq,Uint8Array:H.fj,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dX,HTMLAreaElement:W.dY,AudioTrack:W.a1,AudioTrackList:W.e1,Blob:W.cl,HTMLBodyElement:W.aO,HTMLCanvasElement:W.aP,CanvasGradient:W.cm,CanvasRenderingContext2D:W.cn,CDATASection:W.aQ,CharacterData:W.aQ,Comment:W.aQ,ProcessingInstruction:W.aQ,Text:W.aQ,CompositorWorker:W.e5,CSSCharsetRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.bb,MSStyleCSSProperties:W.bb,CSS2Properties:W.bb,DataTransferItemList:W.e8,DeviceAcceleration:W.e9,HTMLDivElement:W.cp,XMLDocument:W.by,Document:W.by,DocumentFragment:W.cq,ShadowRoot:W.cq,DOMException:W.ea,DOMImplementation:W.cr,DOMPoint:W.eb,DOMPointReadOnly:W.cs,DOMRectReadOnly:W.ct,DOMStringList:W.ec,DOMTokenList:W.ed,Element:W.a3,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a4,FileList:W.eA,FileWriter:W.eB,HTMLFormElement:W.eF,Gamepad:W.a5,HTMLHeadElement:W.cx,History:W.eK,HTMLCollection:W.bG,HTMLFormControlsCollection:W.bG,HTMLOptionsCollection:W.bG,HTMLDocument:W.cy,XMLHttpRequest:W.eL,XMLHttpRequestUpload:W.bH,XMLHttpRequestEventTarget:W.bH,ImageBitmap:W.bd,ImageData:W.be,HTMLImageElement:W.bf,HTMLInputElement:W.eP,KeyboardEvent:W.aW,Location:W.f2,HTMLAudioElement:W.bK,HTMLMediaElement:W.bK,MediaList:W.f8,MIDIOutput:W.f9,MIDIInput:W.bL,MIDIPort:W.bL,MimeType:W.a6,MimeTypeArray:W.fa,PointerEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,Navigator:W.fk,Attr:W.q,Node:W.q,NodeIterator:W.dr,NodeList:W.bS,RadioNodeList:W.bS,Path2D:W.ft,Perspective:W.fw,Plugin:W.a7,PluginArray:W.fy,PositionValue:W.fB,PresentationConnection:W.fC,Range:W.dw,Rotation:W.fM,RTCDataChannel:W.dy,DataChannel:W.dy,HTMLSelectElement:W.fO,SharedWorker:W.fR,SourceBuffer:W.a8,SourceBufferList:W.fS,SpeechGrammar:W.a9,SpeechGrammarList:W.fU,SpeechRecognitionResult:W.aa,Storage:W.fZ,CSSStyleSheet:W.Y,StyleSheet:W.Y,CalcLength:W.ak,KeywordValue:W.ak,LengthValue:W.ak,NumberValue:W.ak,SimpleLength:W.ak,TransformValue:W.ak,StyleValue:W.ak,HTMLTableElement:W.dB,HTMLTableRowElement:W.h7,HTMLTableSectionElement:W.h8,HTMLTemplateElement:W.c_,TextTrack:W.ab,TextTrackCue:W.Z,VTTCue:W.Z,TextTrackCueList:W.hb,TextTrackList:W.hc,TimeRanges:W.he,Touch:W.ac,TouchEvent:W.b_,TouchList:W.hi,TrackDefaultList:W.hj,Matrix:W.bl,Skew:W.bl,TransformComponent:W.bl,Translation:W.hl,TreeWalker:W.dF,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,SVGZoomEvent:W.aI,UIEvent:W.aI,URL:W.hq,HTMLVideoElement:W.bm,VideoTrackList:W.hs,VTTRegionList:W.hv,WebSocket:W.hw,WheelEvent:W.b1,Window:W.c2,DOMWindow:W.c2,Worker:W.hz,CompositorWorkerGlobalScope:W.b2,DedicatedWorkerGlobalScope:W.b2,ServiceWorkerGlobalScope:W.b2,SharedWorkerGlobalScope:W.b2,WorkerGlobalScope:W.b2,ClientRect:W.hI,ClientRectList:W.dK,DOMRectList:W.dK,CSSRuleList:W.hK,DocumentType:W.hL,DOMRect:W.hM,GamepadList:W.i7,HTMLFrameSetElement:W.i8,NamedNodeMap:W.dM,MozNamedAttrMap:W.dM,ServiceWorker:W.it,SpeechRecognitionResultList:W.iw,StyleSheetList:W.ix,WorkerLocation:W.iE,WorkerNavigator:W.iF,SVGAElement:P.dW,SVGAnimateElement:P.aN,SVGAnimateMotionElement:P.aN,SVGAnimateTransformElement:P.aN,SVGAnimationElement:P.aN,SVGSetElement:P.aN,SVGFEBlendElement:P.ei,SVGFEColorMatrixElement:P.ej,SVGFEComponentTransferElement:P.ek,SVGFECompositeElement:P.el,SVGFEConvolveMatrixElement:P.em,SVGFEDiffuseLightingElement:P.en,SVGFEDisplacementMapElement:P.eo,SVGFEFloodElement:P.ep,SVGFEGaussianBlurElement:P.eq,SVGFEImageElement:P.er,SVGFEMergeElement:P.es,SVGFEMorphologyElement:P.et,SVGFEOffsetElement:P.eu,SVGFEPointLightElement:P.ev,SVGFESpecularLightingElement:P.ew,SVGFESpotLightElement:P.ex,SVGFETileElement:P.ey,SVGFETurbulenceElement:P.ez,SVGFilterElement:P.eC,SVGForeignObjectElement:P.eE,SVGCircleElement:P.ah,SVGEllipseElement:P.ah,SVGLineElement:P.ah,SVGPathElement:P.ah,SVGPolygonElement:P.ah,SVGPolylineElement:P.ah,SVGGeometryElement:P.ah,SVGClipPathElement:P.aD,SVGDefsElement:P.aD,SVGGElement:P.aD,SVGSwitchElement:P.aD,SVGGraphicsElement:P.aD,SVGImageElement:P.eM,SVGLength:P.at,SVGLengthList:P.eX,SVGMarkerElement:P.f5,SVGMaskElement:P.f6,SVGNumber:P.au,SVGNumberList:P.fn,SVGPatternElement:P.fu,SVGPoint:P.fz,SVGPointList:P.fA,SVGRect:P.fF,SVGRectElement:P.fG,SVGScriptElement:P.bW,SVGStringList:P.h4,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.h5,SVGSymbolElement:P.h6,SVGTextContentElement:P.dC,SVGTextPathElement:P.ha,SVGTSpanElement:P.c0,SVGTextElement:P.c0,SVGTextPositioningElement:P.c0,SVGTransform:P.aw,SVGTransformList:P.hk,SVGUseElement:P.hr,SVGViewElement:P.ht,SVGViewSpec:P.hu,SVGLinearGradientElement:P.c4,SVGRadialGradientElement:P.c4,SVGGradientElement:P.c4,SVGCursorElement:P.ip,SVGFEDropShadowElement:P.iq,SVGMPathElement:P.ir,AudioBuffer:P.e0,WebGLRenderingContext:P.fK,WebGL2RenderingContext:P.fL,WebGL2RenderingContextBase:P.iD,SQLResultSetRowList:P.fV})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dm.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
W.bC.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"
W.bB.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bA.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.ln(A.l6(),b)},[])
else (function(b){H.ln(A.l6(),b)})([])})})()