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
a[c]=function(){a[c]=function(){H.ov(b)}
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
return d?function(e){if(t===null)t=H.jR(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jR(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jR(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jz:function jz(a){this.a=a},
jE:function(a,b,c,d){if(!!a.$isd)return new H.ek(a,b,[c,d])
return new H.dh(a,b,[c,d])},
eU:function(){return new P.aN("No element")},
nb:function(){return new P.aN("Too many elements")},
na:function(){return new P.aN("Too few elements")},
dy:function(a,b,c,d){if(c-b<=32)H.ns(a,b,c,d)
else H.nr(a,b,c,d)},
ns:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.al(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aw(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
nr:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.c(t>32)
s=C.b.K(t+1,6)
r=a3+s
q=a4-s
p=C.b.K(a3+a4,2)
o=p-s
n=p+s
t=J.al(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.aw(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.aw(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.aw(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.aw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aw(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.aw(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.aw(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.aw(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aw(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.L(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
c=a5.$2(d,l)
if(c===0)continue
if(c<0){if(e!==g){t.j(a2,e,t.h(a2,g))
t.j(a2,g,d)}++g}else for(;!0;){c=a5.$2(t.h(a2,f),l)
if(c>0){--f
continue}else{b=f-1
if(c<0){t.j(a2,e,t.h(a2,g))
a=g+1
t.j(a2,g,t.h(a2,f))
t.j(a2,f,d)
f=b
g=a
break}else{t.j(a2,e,t.h(a2,f))
t.j(a2,f,d)
f=b
break}}}}a0=!0}else{for(e=g;e<=f;++e){d=t.h(a2,e)
if(a5.$2(d,l)<0){if(e!==g){t.j(a2,e,t.h(a2,g))
t.j(a2,g,d)}++g}else if(a5.$2(d,j)>0)for(;!0;)if(a5.$2(t.h(a2,f),j)>0){--f
if(f<e)break
continue}else{b=f-1
if(a5.$2(t.h(a2,f),l)<0){t.j(a2,e,t.h(a2,g))
a=g+1
t.j(a2,g,t.h(a2,f))
t.j(a2,f,d)
g=a}else{t.j(a2,e,t.h(a2,f))
t.j(a2,f,d)}f=b
break}}a0=!1}a1=g-1
t.j(a2,a3,t.h(a2,a1))
t.j(a2,a1,l)
a1=f+1
t.j(a2,a4,t.h(a2,a1))
t.j(a2,a1,j)
H.dy(a2,a3,g-2,a5)
H.dy(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.L(a5.$2(t.h(a2,g),l),0);)++g
for(;J.L(a5.$2(t.h(a2,f),j),0);)--f
for(e=g;e<=f;++e){d=t.h(a2,e)
if(a5.$2(d,l)===0){if(e!==g){t.j(a2,e,t.h(a2,g))
t.j(a2,g,d)}++g}else if(a5.$2(d,j)===0)for(;!0;)if(a5.$2(t.h(a2,f),j)===0){--f
if(f<e)break
continue}else{b=f-1
if(a5.$2(t.h(a2,f),l)<0){t.j(a2,e,t.h(a2,g))
a=g+1
t.j(a2,g,t.h(a2,f))
t.j(a2,f,d)
g=a}else{t.j(a2,e,t.h(a2,f))
t.j(a2,f,d)}f=b
break}}H.dy(a2,g,f,a5)}else H.dy(a2,g,f,a5)},
d:function d(){},
bo:function bo(){},
dg:function dg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dh:function dh(a,b,c){this.a=a
this.b=b
this.$ti=c},
ek:function ek(a,b,c){this.a=a
this.b=b
this.$ti=c},
f5:function f5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
dH:function dH(a,b,c){this.a=a
this.b=b
this.$ti=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.$ti=c},
cr:function cr(){},
dP:function(a,b){var t=a.ap(b)
if(!u.globalState.d.cy)u.globalState.f.av()
return t},
j5:function(){--u.globalState.f.b
H.c(u.globalState.f.b>=0)},
lQ:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.x(s).$isb)throw H.f(P.kf("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.ih(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kH()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hU(P.jD(null,H.be),0)
r=P.o
s.seU(new H.ap(0,null,null,null,null,null,0,[r,H.bd]))
s.seX(new H.ap(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ig()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.n5,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nM)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aq(null,null,null,r)
p=new H.bq(0,null,!1)
o=new H.bd(s,new H.ap(0,null,null,null,null,null,0,[r,H.bq]),q,u.createNewIsolate(),p,new H.ay(H.jc()),new H.ay(H.jc()),!1,!1,[],P.aq(null,null,null,null),null,null,!1,!0,P.aq(null,null,null,null))
q.i(0,0)
o.bJ(0,p)
u.globalState.e=o
u.globalState.z.j(0,s,o)
u.globalState.d=o
if(H.bw(a,{func:1,args:[,]}))o.ap(new H.ji(t,a))
else if(H.bw(a,{func:1,args:[,,]}))o.ap(new H.jj(t,a))
else o.ap(a)
u.globalState.f.av()},
nM:function(a){var t=P.aL(["command","print","msg",a])
return new H.au(!0,P.c6(null,P.o)).R(t)},
n7:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.n8()
return},
n8:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.f(new P.w("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.f(new P.w('Cannot extract URI from "'+t+'"'))},
n5:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.bc(!0,[]).a1(b.data)
s=J.al(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.oe(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.bc(!0,[]).a1(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.bc(!0,[]).a1(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.aq(null,null,null,k)
i=new H.bq(0,null,!1)
h=new H.bd(s,new H.ap(0,null,null,null,null,null,0,[k,H.bq]),j,u.createNewIsolate(),i,new H.ay(H.jc()),new H.ay(H.jc()),!1,!1,[],P.aq(null,null,null,null),null,null,!1,!0,P.aq(null,null,null,null))
j.i(0,0)
h.bJ(0,i)
u.globalState.f.a.Z(0,new H.be(h,new H.eR(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.av()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.ms(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.av()
break
case"close":u.globalState.ch.au(0,$.$get$kI().h(0,a))
a.terminate()
u.globalState.f.av()
break
case"log":H.n4(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aL(["command","print","msg",t])
k=new H.au(!0,P.c6(null,P.o)).R(k)
s.toString
self.postMessage(k)}else P.U(s.h(t,"msg"))
break
case"error":throw H.f(s.h(t,"msg"))}},
n4:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aL(["command","log","msg",a])
r=new H.au(!0,P.c6(null,P.o)).R(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.V(q)
t=H.aS(q)
s=P.cq(t)
throw H.f(s)}},
n6:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kP=$.kP+("_"+s)
$.kQ=$.kQ+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.N(0,["spawned",new H.bt(s,r),q,t.r])
r=new H.eS(a,b,c,d,t)
if(e){t.c2(q,q)
u.globalState.f.a.Z(0,new H.be(t,r,"start isolate"))}else r.$0()},
nu:function(a,b){var t=new H.hk(!0,!1,null)
t.dE(a,b)
return t},
nN:function(a){return new H.bc(!0,[]).a1(new H.au(!1,P.c6(null,P.o)).R(a))},
ji:function ji(a,b){this.a=a
this.b=b},
jj:function jj(a,b){this.a=a
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
bd:function bd(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ib:function ib(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hV:function hV(a){this.a=a},
be:function be(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(){},
eR:function eR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eS:function eS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hM:function hM(){},
bt:function bt(a,b){this.b=a
this.a=b},
ii:function ii(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c){this.b=a
this.c=b
this.a=c},
bq:function bq(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a,b){this.a=a
this.b=b},
hm:function hm(a,b){this.a=a
this.b=b},
ay:function ay(a){this.a=a},
au:function au(a,b){this.a=a
this.b=b},
bc:function bc(a,b){this.a=a
this.b=b},
o7:function(a){return u.types[a]},
og:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.x(a).$ist},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.W(a)
if(typeof t!=="string")throw H.f(H.T(a))
return t},
np:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fM(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
b5:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
kN:function(a,b){throw H.f(new P.eK("Invalid double",a,null))},
nn:function(a,b){var t,s
H.o_(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kN(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.mz(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kN(a,b)}return t},
du:function(a){var t,s,r,q,p,o,n,m
t=J.x(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.A||!!J.x(a).$isb9){p=C.r(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.e.aj(q,0)===36)q=C.e.dg(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dR(H.iU(a),0,null),u.mangledGlobalNames)},
fH:function(a){return"Instance of '"+H.du(a)+"'"},
X:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nm:function(a){return a.b?H.X(a).getUTCFullYear()+0:H.X(a).getFullYear()+0},
nk:function(a){return a.b?H.X(a).getUTCMonth()+1:H.X(a).getMonth()+1},
ng:function(a){return a.b?H.X(a).getUTCDate()+0:H.X(a).getDate()+0},
nh:function(a){return a.b?H.X(a).getUTCHours()+0:H.X(a).getHours()+0},
nj:function(a){return a.b?H.X(a).getUTCMinutes()+0:H.X(a).getMinutes()+0},
nl:function(a){return a.b?H.X(a).getUTCSeconds()+0:H.X(a).getSeconds()+0},
ni:function(a){return a.b?H.X(a).getUTCMilliseconds()+0:H.X(a).getMilliseconds()+0},
kO:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.f(H.T(a))
return a[b]},
R:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,"index",null)
t=J.dY(a)
if(b<0||C.b.d_(b,t))return P.G(b,a,"index",null,t)
return P.fJ(b,"index",null)},
T:function(a){return new P.an(!0,a,null,null)},
lr:function(a){if(typeof a!=="number")throw H.f(H.T(a))
return a},
o_:function(a){if(typeof a!=="string")throw H.f(H.T(a))
return a},
f:function(a){var t
if(a==null)a=new P.dt()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lS})
t.name=""}else t.toString=H.lS
return t},
lS:function(){return J.W(this.dartException)},
K:function(a){throw H.f(a)},
A:function(a){throw H.f(new P.a8(a))},
aD:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hr(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
l1:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jB:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eY(a,s,t?null:b.receiver)},
V:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jk(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b7(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jB(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.ds(p,null))}}if(a instanceof TypeError){o=$.$get$kW()
n=$.$get$kX()
m=$.$get$kY()
l=$.$get$kZ()
k=$.$get$l2()
j=$.$get$l3()
i=$.$get$l0()
$.$get$l_()
h=$.$get$l5()
g=$.$get$l4()
f=o.U(s)
if(f!=null)return t.$1(H.jB(s,f))
else{f=n.U(s)
if(f!=null){f.method="call"
return t.$1(H.jB(s,f))}else{f=m.U(s)
if(f==null){f=l.U(s)
if(f==null){f=k.U(s)
if(f==null){f=j.U(s)
if(f==null){f=i.U(s)
if(f==null){f=l.U(s)
if(f==null){f=h.U(s)
if(f==null){f=g.U(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.ds(s,f==null?null:f.method))}}return t.$1(new H.hv(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dz()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.an(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dz()
return a},
aS:function(a){var t
if(a==null)return new H.dN(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dN(a,null)},
om:function(a){if(a==null||typeof a!='object')return J.ax(a)
else return H.b5(a)},
o5:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=a.length
for(r=0;r<s;){q=r+1
H.c(t)
p=a[r]
r=q+1
H.c(t)
b.j(0,p,a[q])}return b},
of:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dP(b,new H.j0(a))
case 1:return H.dP(b,new H.j1(a,d))
case 2:return H.dP(b,new H.j2(a,d,e))
case 3:return H.dP(b,new H.j3(a,d,e,f))
case 4:return H.dP(b,new H.j4(a,d,e,f,g))}throw H.f(P.cq("Unsupported number of arguments for wrapped closure"))},
cc:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.of)
a.$identity=t
return t},
mL:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.x(c).$isb){t.$reflectionInfo=c
r=H.np(t).r}else r=c
q=d?Object.create(new H.h2().constructor.prototype):Object.create(new H.bA(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kn(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.o7,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kk:H.jt
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.f("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kn(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mI:function(a,b,c,d){var t=H.jt
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kn:function(a,b,c){var t,s,r,q
if(c)return H.mK(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mI(s,b==null?r!=null:b!==r,t,b)
return q},
mJ:function(a,b,c,d){var t,s
t=H.jt
s=H.kk
switch(b?-1:a){case 0:throw H.f(new H.fT("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mK:function(a,b){var t,s,r,q
H.mH()
t=$.kj
if(t==null){t=H.ki("receiver")
$.kj=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mJ(r,b==null?q!=null:b!==q,s,b)
return t},
jR:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.x(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.mL(a,b,t,!!d,e,f)},
jt:function(a){return a.a},
kk:function(a){return a.c},
mH:function(){var t=$.kl
if(t==null){t=H.ki("self")
$.kl=t}return t},
ki:function(a){var t,s,r,q,p
t=new H.bA("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
oJ:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.aE(a,"String"))},
ak:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aE(a,"double"))},
oI:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.aE(a,"num"))},
nZ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.aE(a,"bool"))},
oe:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.aE(a,"int"))},
oo:function(a,b){throw H.f(H.aE(a,b.substring(3)))},
on:function(a,b){var t=J.al(b)
throw H.f(H.km(H.du(a),t.aU(b,3,t.gl(b))))},
jU:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.x(a)[b])return a
H.oo(a,b)},
J:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.x(a)[b]
else t=!0
if(t)return a
H.on(a,b)},
oH:function(a){if(a==null)return a
if(!!J.x(a).$isb)return a
throw H.f(H.aE(a,"List"))},
lu:function(a){var t=J.x(a)
return"$S" in t?t.$S():null},
bw:function(a,b){var t
if(a==null)return!1
t=H.lu(a)
return t==null?!1:H.lA(t,b)},
oF:function(a,b){var t,s
if(a==null)return a
if($.jM)return a
$.jM=!0
try{if(H.bw(a,b))return a
t=H.aT(b,null)
s=H.aE(a,t)
throw H.f(s)}finally{$.jM=!1}},
aE:function(a,b){return new H.ht("type '"+H.du(a)+"' is not a subtype of type '"+b+"'")},
km:function(a,b){return new H.e6("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
a5:function(a){if(!0===a)return!1
if(!!J.x(a).$isjw)a=a.$0()
if(typeof a==="boolean")return!a
throw H.f(H.aE(a,"bool"))},
aj:function(a){throw H.f(new H.hG(a))},
c:function(a){if(H.a5(a))throw H.f(new P.ch(null))},
ov:function(a){throw H.f(new P.ea(a))},
jc:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lx:function(a){return u.getIsolateTag(a)},
Q:function(a){return new H.aO(a,null)},
F:function(a,b){H.c(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iU:function(a){if(a==null)return
return a.$ti},
ly:function(a,b){return H.k_(a["$as"+H.i(b)],H.iU(a))},
av:function(a,b,c){var t,s
t=H.ly(a,b)
if(t==null)s=null
else{H.c(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
am:function(a,b){var t,s
t=H.iU(a)
if(t==null)s=null
else{H.c(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aT:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.c(!0)
H.c(!0)
return a[0].name+H.dR(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aT(t,b)
return H.nO(a,b)}return"unknown-reified-type"},
nO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aT(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aT(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aT(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.o4(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aT(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
dR:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.c(t)
s=new P.bY("")
for(r=b,q=!0,p=!0;H.c(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.c(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aT(o,c)}return p?"":"<"+s.k(0)+">"},
iV:function(a){var t,s
if(a instanceof H.bi){t=H.lu(a)
if(t!=null)return H.aT(t,null)}s=J.x(a).constructor.name
if(a==null)return s
return s+H.dR(a.$ti,0,null)},
k_:function(a,b){if(a==null)return b
H.c(typeof a=="function")
H.c(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jV(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jV(a,null,b)
return b},
iL:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iU(a)
s=J.x(a)
if(s[b]==null)return!1
return H.lp(H.k_(s[d],t),c)},
dT:function(a,b,c,d){if(a==null)return a
if(H.iL(a,b,c,d))return a
throw H.f(H.km(H.du(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dR(c,0,null),u.mangledGlobalNames)))},
oC:function(a,b,c,d){if(a==null)return a
if(H.iL(a,b,c,d))return a
throw H.f(H.aE(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dR(c,0,null),u.mangledGlobalNames)))},
lp:function(a,b){var t,s,r,q,p
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
if(!H.a6(r,b[p]))return!1}return!0},
oD:function(a,b,c){return H.jV(a,b,H.ly(b,c))},
a6:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="b3")return!0
if('func' in b)return H.lA(a,b)
if('func' in a)return b.name==="jw"||b.name==="r"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.c(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.c(!0)
q=b[0]}else q=b
if(q!==s){p=H.aT(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lp(H.k_(o,t),r)},
lo:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a6(o,n)||H.a6(n,o)))return!1}return!0},
nV:function(a,b){var t,s,r,q,p,o
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
if(!(H.a6(p,o)||H.a6(o,p)))return!1}return!0},
lA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.c('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a6(t,s)||H.a6(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lo(r,q,!1))return!1
if(!H.lo(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.c(j)
g=r[h]
H.c(i)
f=q[h]
if(!(H.a6(g,f)||H.a6(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.c(j)
g=p[d]
H.c(i)
f=q[e]
if(!(H.a6(g,f)||H.a6(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.c(j)
g=p[d]
H.c(i)
f=o[e]
if(!(H.a6(g,f)||H.a6(f,g)))return!1}}return H.nV(a.named,b.named)},
jV:function(a,b,c){H.c(typeof a=="function")
H.c(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oK:function(a){var t=$.jS
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oG:function(a){return H.b5(a)},
oE:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oj:function(a){var t,s,r,q,p,o
H.c(!(a instanceof P.r))
t=$.jS.$1(a)
s=$.iQ[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j_[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.ln.$2(a,t)
if(t!=null){s=$.iQ[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j_[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jW(r)
$.iQ[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.j_[t]=r
return r}if(p==="-"){o=H.jW(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lH(a,r)
if(p==="*")throw H.f(new P.dG(t))
if(u.leafTags[t]===true){o=H.jW(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lH(a,r)},
lH:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ja(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jW:function(a){return J.ja(a,!1,null,!!a.$ist)},
ol:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ja(t,!1,null,!!t.$ist)
else return J.ja(t,c,null,null)},
oc:function(){if(!0===$.jT)return
$.jT=!0
H.od()},
od:function(){var t,s,r,q,p,o,n,m
$.iQ=Object.create(null)
$.j_=Object.create(null)
H.ob()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lJ.$1(p)
if(o!=null){n=H.ol(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ob:function(){var t,s,r,q,p,o,n
t=C.E()
t=H.bv(C.B,H.bv(C.G,H.bv(C.q,H.bv(C.q,H.bv(C.F,H.bv(C.C,H.bv(C.D(C.r),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jS=new H.iX(p)
$.ln=new H.iY(o)
$.lJ=new H.iZ(n)},
bv:function(a,b){return a(b)||b},
ou:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fM:function fM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hr:function hr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ds:function ds(a,b){this.a=a
this.b=b},
eY:function eY(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(a){this.a=a},
jk:function jk(a){this.a=a},
dN:function dN(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(a,b,c){this.a=a
this.b=b
this.c=c},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j4:function j4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bi:function bi(){},
hf:function hf(){},
h2:function h2(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ht:function ht(a){this.a=a},
e6:function e6(a){this.a=a},
fT:function fT(a){this.a=a},
hG:function hG(a){this.a=a},
aO:function aO(a,b){this.a=a
this.b=b},
ap:function ap(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eX:function eX(a){this.a=a},
f0:function f0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f1:function f1(a,b){this.a=a
this.$ti=b},
f2:function f2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iX:function iX(a){this.a=a},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
e:function(a){return a},
iH:function(a){var t,s,r
if(!!J.x(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bP:function bP(){},
bp:function bp(){},
fg:function fg(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dj:function dj(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
dn:function dn(){},
fn:function fn(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
o4:function(a){var t=H.F(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
dS:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
x:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.de.prototype
return J.dd.prototype}if(typeof a=="string")return J.b0.prototype
if(a==null)return J.eW.prototype
if(typeof a=="boolean")return J.eV.prototype
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.r)return a
return J.iT(a)},
ja:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iT:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jT==null){H.oc()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.f(new P.dG("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jA()]
if(p!=null)return p
p=H.oj(a)
if(p!=null)return p
if(typeof a=="function")return C.H
s=Object.getPrototypeOf(a)
if(s==null)return C.u
if(s===Object.prototype)return C.u
if(typeof q=="function"){Object.defineProperty(q,$.$get$jA(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
kK:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nc:function(a,b){var t,s
for(t=a.length;b<t;){s=C.e.aj(a,b)
if(s!==32&&s!==13&&!J.kK(s))break;++b}return b},
nd:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.e.ce(a,t)
if(s!==32&&s!==13&&!J.kK(s))break}return b},
al:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.r)return a
return J.iT(a)},
ce:function(a){if(a==null)return a
if(a.constructor==Array)return J.b_.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.r)return a
return J.iT(a)},
lw:function(a){if(typeof a=="number")return J.bn.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.b9.prototype
return a},
o6:function(a){if(typeof a=="number")return J.bn.prototype
if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.b9.prototype
return a},
iS:function(a){if(typeof a=="string")return J.b0.prototype
if(a==null)return a
if(!(a instanceof P.r))return J.b9.prototype
return a},
m:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b1.prototype
return a}if(a instanceof P.r)return a
return J.iT(a)},
L:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).B(a,b)},
aw:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lw(a).ay(a,b)},
lV:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lw(a).aS(a,b)},
bx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.og(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.al(a).h(a,b)},
lW:function(a,b,c,d){return J.m(a).dQ(a,b,c,d)},
k0:function(a,b){return J.iS(a).aj(a,b)},
k1:function(a,b,c,d){return J.m(a).e0(a,b,c,d)},
by:function(a,b){return J.m(a).e6(a,b)},
lX:function(a,b,c){return J.m(a).e7(a,b,c)},
k2:function(a,b){return J.m(a).c1(a,b)},
jl:function(a,b){return J.m(a).W(a,b)},
k3:function(a,b,c){return J.m(a).c4(a,b,c)},
lY:function(a,b){return J.m(a).ek(a,b)},
dU:function(a,b,c){return J.m(a).c5(a,b,c)},
jm:function(a,b,c){return J.m(a).c6(a,b,c)},
aU:function(a,b,c){return J.m(a).c7(a,b,c)},
dV:function(a,b){return J.m(a).en(a,b)},
lZ:function(a,b){return J.m(a).c8(a,b)},
m_:function(a,b,c){return J.m(a).c9(a,b,c)},
k4:function(a,b,c,d){return J.m(a).ca(a,b,c,d)},
m0:function(a,b){return J.m(a).cb(a,b)},
m1:function(a,b){return J.ce(a).cc(a,b)},
m2:function(a,b,c,d,e){return J.m(a).cd(a,b,c,d,e)},
m3:function(a,b){return J.o6(a).X(a,b)},
jn:function(a,b,c){return J.al(a).es(a,b,c)},
dW:function(a){return J.m(a).cg(a)},
m4:function(a){return J.m(a).ci(a)},
m5:function(a){return J.m(a).cj(a)},
m6:function(a){return J.m(a).cl(a)},
k5:function(a){return J.m(a).ez(a)},
m7:function(a,b){return J.m(a).cm(a,b)},
jo:function(a,b){return J.m(a).cn(a,b)},
m8:function(a,b,c,d){return J.m(a).cp(a,b,c,d)},
m9:function(a,b,c,d,e){return J.m(a).eG(a,b,c,d,e)},
ma:function(a,b,c,d,e){return J.m(a).cq(a,b,c,d,e)},
mb:function(a,b,c,d,e,f){return J.m(a).eH(a,b,c,d,e,f)},
mc:function(a,b){return J.ce(a).v(a,b)},
dX:function(a,b){return J.m(a).cr(a,b)},
md:function(a,b){return J.m(a).cs(a,b)},
me:function(a){return J.m(a).eI(a)},
mf:function(a,b){return J.ce(a).aL(a,b)},
k6:function(a,b,c,d,e,f){return J.m(a).cv(a,b,c,d,e,f)},
mg:function(a){return J.m(a).gej(a)},
ax:function(a){return J.x(a).gA(a)},
bz:function(a){return J.ce(a).gw(a)},
dY:function(a){return J.al(a).gl(a)},
mh:function(a){return J.m(a).gbf(a)},
mi:function(a){return J.x(a).gD(a)},
mj:function(a){return J.m(a).gf6(a)},
mk:function(a){return J.m(a).gax(a)},
jp:function(a){return J.m(a).gm(a)},
jq:function(a){return J.m(a).gn(a)},
k7:function(a){return J.m(a).gP(a)},
jr:function(a,b){return J.m(a).ae(a,b)},
ml:function(a){return J.m(a).aR(a)},
mm:function(a){return J.m(a).bl(a)},
mn:function(a,b){return J.m(a).bm(a,b)},
mo:function(a,b,c){return J.m(a).bn(a,b,c)},
k8:function(a,b,c){return J.m(a).bq(a,b,c)},
mp:function(a,b){return J.m(a).cw(a,b)},
mq:function(a,b){return J.ce(a).cA(a,b)},
mr:function(a){return J.ce(a).f0(a)},
ms:function(a,b){return J.m(a).N(a,b)},
mt:function(a,b){return J.iS(a).az(a,b)},
mu:function(a,b,c,d){return J.m(a).bw(a,b,c,d)},
mv:function(a,b,c,d){return J.m(a).cH(a,b,c,d)},
bg:function(a,b,c,d){return J.m(a).cI(a,b,c,d)},
mw:function(a,b,c,d,e,f){return J.m(a).f7(a,b,c,d,e,f)},
mx:function(a){return J.iS(a).fa(a)},
W:function(a){return J.x(a).k(a)},
my:function(a,b,c,d){return J.m(a).fc(a,b,c,d)},
mz:function(a){return J.iS(a).fd(a)},
mA:function(a,b,c){return J.m(a).cL(a,b,c)},
mB:function(a,b,c){return J.m(a).cM(a,b,c)},
js:function(a,b,c){return J.m(a).cN(a,b,c)},
mC:function(a,b,c){return J.m(a).cO(a,b,c)},
k9:function(a,b,c){return J.m(a).cP(a,b,c)},
ka:function(a,b,c){return J.m(a).cQ(a,b,c)},
kb:function(a,b,c){return J.m(a).cR(a,b,c)},
kc:function(a,b,c,d){return J.m(a).cS(a,b,c,d)},
kd:function(a,b,c,d){return J.m(a).cT(a,b,c,d)},
mD:function(a,b){return J.m(a).cV(a,b)},
mE:function(a,b,c){return J.m(a).fe(a,b,c)},
ke:function(a,b,c,d,e,f,g){return J.m(a).cW(a,b,c,d,e,f,g)},
mF:function(a,b,c,d,e){return J.m(a).cX(a,b,c,d,e)},
a:function a(){},
eV:function eV(){},
eW:function eW(){},
bM:function bM(){},
fB:function fB(){},
b9:function b9(){},
b1:function b1(){},
b_:function b_(a){this.$ti=a},
jy:function jy(a){this.$ti=a},
e1:function e1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bn:function bn(){},
de:function de(){},
dd:function dd(){},
b0:function b0(){}},P={
nB:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nW()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.cc(new P.hI(t),1)).observe(s,{childList:true})
return new P.hH(t,s,r)}else if(self.setImmediate!=null)return P.nX()
return P.nY()},
nC:function(a){++u.globalState.f.b
self.scheduleImmediate(H.cc(new P.hJ(a),0))},
nD:function(a){++u.globalState.f.b
self.setImmediate(H.cc(new P.hK(a),0))},
nE:function(a){P.jI(C.p,a)},
nR:function(a,b){if(H.bw(a,{func:1,args:[P.b3,P.b3]})){b.toString
return a}else{b.toString
return a}},
nH:function(a,b){var t,s,r
H.c(b.a<4)
H.c(!(a instanceof P.aF))
H.c(b.a===0)
b.a=1
try{a.cK(new P.i0(b),new P.i1(b))}catch(r){t=H.V(r)
s=H.aS(r)
P.op(new P.i2(b,t,s))}},
ld:function(a,b){var t,s,r,q
H.c(b.a<=1)
for(;t=a.a,s=t===2,s;){H.c(s)
a=a.c}s=b.a
if(t>=4){H.c(s<4)
r=b.c
b.c=null
q=b.an(r)
H.c(b.a<4)
H.c(a.a>=4)
b.a=a.a
b.c=a.c
P.c2(b,q)}else{q=b.c
H.c(s<=1)
b.a=2
b.c=a
a.bV(q)}},
c2:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iI(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.c2(t.a,b)}s=t.a
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
P.iI(null,null,p,o,s)
return}s=$.I
if(s==null?l!=null:s!==l){H.c(l!=null)
s=$.I
H.c(l==null?s!=null:l!==s)
j=$.I
$.I=l
i=j}else i=null
s=b.c
if(s===8)new P.i6(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i5(r,b,m).$0()}else if((s&2)!==0)new P.i4(t,r,b).$0()
if(i!=null){H.c(!0)
$.I=i}s=r.b
if(!!J.x(s).$iseL){if(s.a>=4){H.c(o.a<4)
h=o.c
o.c=null
b=o.an(h)
H.c(o.a<4)
H.c(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ld(s,o)
return}}g=b.b
H.c(g.a<4)
h=g.c
g.c=null
b=g.an(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.c(!o)
g.a=4
g.c=p}else{H.c(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nQ:function(){var t,s
for(;t=$.bu,t!=null;){$.ca=null
s=t.b
$.bu=s
if(s==null)$.c9=null
t.a.$0()}},
nU:function(){$.jN=!0
try{P.nQ()}finally{$.ca=null
$.jN=!1
if($.bu!=null)$.$get$jK().$1(P.lq())}},
ll:function(a){var t=new P.dI(a,null)
if($.bu==null){$.c9=t
$.bu=t
if(!$.jN)$.$get$jK().$1(P.lq())}else{$.c9.b=t
$.c9=t}},
nT:function(a){var t,s,r
t=$.bu
if(t==null){P.ll(a)
$.ca=$.c9
return}s=new P.dI(a,null)
r=$.ca
if(r==null){s.b=t
$.ca=s
$.bu=s}else{s.b=r.b
r.b=s
$.ca=s
if(s.b==null)$.c9=s}},
op:function(a){var t=$.I
if(C.d===t){P.iK(null,null,C.d,a)
return}t.toString
P.iK(null,null,t,t.ba(a))},
nv:function(a,b){var t=$.I
if(t===C.d){t.toString
return P.jI(a,b)}return P.jI(a,t.ba(b))},
jI:function(a,b){var t=C.b.K(a.a,1000)
return H.nu(t<0?0:t,b)},
jJ:function(a){var t,s
H.c(a!=null)
t=$.I
H.c(a==null?t!=null:a!==t)
s=$.I
$.I=a
return s},
iI:function(a,b,c,d,e){var t={}
t.a=d
P.nT(new P.iJ(t,e))},
lj:function(a,b,c,d){var t,s
if($.I===c)return d.$0()
t=P.jJ(c)
try{s=d.$0()
return s}finally{s=t
H.c(s!=null)
$.I=s}},
lk:function(a,b,c,d,e){var t,s
if($.I===c)return d.$1(e)
t=P.jJ(c)
try{s=d.$1(e)
return s}finally{s=t
H.c(s!=null)
$.I=s}},
nS:function(a,b,c,d,e,f){var t,s
if($.I===c)return d.$2(e,f)
t=P.jJ(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.c(s!=null)
$.I=s}},
iK:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.ba(d):c.el(d)
P.ll(d)},
hI:function hI(a){this.a=a},
hH:function hH(a,b,c){this.a=a
this.b=b
this.c=c},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
hO:function hO(){},
iz:function iz(a,b){this.a=a
this.$ti=b},
dK:function dK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
aF:function aF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i_:function i_(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(a){this.a=a},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a,b){this.a=a
this.b=b},
h6:function h6(){},
h8:function h8(a){this.a=a},
h9:function h9(a,b){this.a=a
this.b=b},
h7:function h7(){},
bh:function bh(a,b){this.a=a
this.b=b},
iG:function iG(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
ik:function ik(){},
im:function im(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
io:function io(a,b){this.a=a
this.b=b},
kL:function(a,b){return new H.ap(0,null,null,null,null,null,0,[a,b])},
D:function(){return new H.ap(0,null,null,null,null,null,0,[null,null])},
aL:function(a){return H.o5(a,new H.ap(0,null,null,null,null,null,0,[null,null]))},
c6:function(a,b){return new P.dL(0,null,null,null,null,null,0,[a,b])},
nL:function(){var t=Object.create(null)
H.c(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
n9:function(a,b,c){var t,s
if(P.jO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$cb()
C.a.i(s,a)
try{P.nP(a,t)}finally{H.c(C.a.gaO(s)===a)
s.pop()}s=P.kT(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eT:function(a,b,c){var t,s,r
if(P.jO(a))return b+"..."+c
t=new P.bY(b)
s=$.$get$cb()
C.a.i(s,a)
try{r=t
r.a=P.kT(r.gab(),a,", ")}finally{H.c(C.a.gaO(s)===a)
s.pop()}s=t
s.a=s.gab()+c
s=t.gab()
return s.charCodeAt(0)==0?s:s},
jO:function(a){var t,s
for(t=0;s=$.$get$cb(),t<s.length;++t)if(a===s[t])return!0
return!1},
nP:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.i(t.gu())
C.a.i(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gu();++r
if(!t.q()){if(r<=4){C.a.i(b,H.i(n))
return}p=H.i(n)
o=b.pop()
s+=p.length+2}else{m=t.gu();++r
H.c(r<100)
for(;t.q();n=m,m=l){l=t.gu();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.i(n)
p=H.i(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
aq:function(a,b,c,d){return new P.ic(0,null,null,null,null,null,0,[d])},
jC:function(a,b){var t,s
t=P.aq(null,null,null,b)
for(s=J.bz(a);s.q();)t.i(0,s.gu())
return t},
ne:function(a){var t,s,r
t={}
if(P.jO(a))return"{...}"
s=new P.bY("")
try{C.a.i($.$get$cb(),a)
r=s
r.a=r.gab()+"{"
t.a=!0
a.aL(0,new P.f6(t,s))
t=s
t.a=t.gab()+"}"}finally{t=$.$get$cb()
H.c(C.a.gaO(t)===a)
t.pop()}t=s.gab()
return t.charCodeAt(0)==0?t:t},
jD:function(a,b){var t=new P.f3(null,0,0,0,[b])
t.dw(a,b)
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
c5:function c5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ia:function ia(){},
df:function df(){},
y:function y(){},
f6:function f6(a,b){this.a=a
this.b=b},
f3:function f3(a,b,c,d,e){var _=this
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
fW:function fW(){},
fV:function fV(){},
bV:function bV(){},
kT:function(a,b,c){var t=J.bz(b)
if(!t.q())return a
if(c.length===0){do a+=H.i(t.gu())
while(t.q())}else{a+=H.i(t.gu())
for(;t.q();)a=a+c+H.i(t.gu())}return a},
mM:function(a,b){return J.m3(a,b)},
mP:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
mQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ck:function(a){if(a>=10)return""+a
return"0"+a},
mS:function(a,b,c,d,e,f){return new P.aI(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jv:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.W(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mV(a)},
mV:function(a){var t=J.x(a)
if(!!t.$isbi)return t.k(a)
return H.fH(a)},
kf:function(a){return new P.an(!1,null,null,a)},
kg:function(a,b,c){return new P.an(!0,a,b,c)},
mG:function(a){return new P.an(!1,null,a,"Must not be null")},
fJ:function(a,b,c){return new P.dw(null,null,!0,a,b,"Value not in range")},
b6:function(a,b,c,d,e){return new P.dw(b,c,!0,a,d,"Invalid value")},
jG:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.b6(a,0,c,"start",f))
if(a>b||b>c)throw H.f(P.b6(b,a,c,"end",f))
return b},
G:function(a,b,c,d,e){var t=e!=null?e:J.dY(b)
return new P.eQ(b,t,!0,a,c,"Index out of range")},
cq:function(a){return new P.hZ(a)},
kM:function(a,b,c){var t,s
t=H.F([],[c])
for(s=J.bz(a);s.q();)C.a.i(t,s.gu())
if(b)return t
t.fixed$length=Array
return t},
U:function(a){H.dS(H.i(a))},
aG:function aG(){},
N:function N(){},
bk:function bk(a,b){this.a=a
this.b=b},
S:function S(){},
aI:function aI(a){this.a=a},
ei:function ei(){},
ej:function ej(){},
bl:function bl(){},
ch:function ch(a){this.a=a},
dt:function dt(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dw:function dw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eQ:function eQ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
w:function w(a){this.a=a},
dG:function dG(a){this.a=a},
aN:function aN(a){this.a=a},
a8:function a8(a){this.a=a},
dz:function dz(){},
ea:function ea(a){this.a=a},
hZ:function hZ(a){this.a=a},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
a1:function a1(){},
dc:function dc(){},
b:function b(){},
aM:function aM(){},
b3:function b3(){},
a0:function a0(){},
r:function r(){},
bX:function bX(){},
v:function v(){},
bY:function bY(a){this.a=a},
iO:function(a){var t,s,r,q,p
if(a==null)return
t=P.D()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
o2:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.mf(a,new P.iN(t))
return t},
kA:function(){var t=$.kz
if(t==null){t=J.jn(window.navigator.userAgent,"Opera",0)
$.kz=t}return t},
mR:function(){var t,s
t=$.kw
if(t!=null)return t
s=$.kx
if(s==null){s=J.jn(window.navigator.userAgent,"Firefox",0)
$.kx=s}if(s)t="-moz-"
else{s=$.ky
if(s==null){s=!P.kA()&&J.jn(window.navigator.userAgent,"Trident/",0)
$.ky=s}if(s)t="-ms-"
else t=P.kA()?"-o-":"-webkit-"}$.kw=t
return t},
iN:function iN(a){this.a=a},
ot:function(a){return Math.sqrt(a)},
ij:function ij(){},
P:function P(){},
dZ:function dZ(){},
aV:function aV(){},
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
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eD:function eD(){},
eG:function eG(){},
eI:function eI(){},
ao:function ao(){},
aK:function aK(){},
eP:function eP(){},
az:function az(){},
eZ:function eZ(){},
f7:function f7(){},
f8:function f8(){},
aB:function aB(){},
fr:function fr(){},
fy:function fy(){},
fD:function fD(){},
fE:function fE(){},
fK:function fK(){},
fL:function fL(){},
bW:function bW(){},
ha:function ha(){},
M:function M(){},
hb:function hb(){},
hc:function hc(){},
dB:function dB(){},
hg:function hg(){},
c_:function c_(){},
aC:function aC(){},
hp:function hp(){},
hx:function hx(){},
hz:function hz(){},
hA:function hA(){},
c3:function c3(){},
ip:function ip(){},
iq:function iq(){},
ir:function ir(){},
cB:function cB(){},
cz:function cz(){},
cG:function cG(){},
cK:function cK(){},
cV:function cV(){},
d2:function d2(){},
cZ:function cZ(){},
d0:function d0(){},
e2:function e2(){},
fQ:function fQ(){},
fR:function fR(){},
iD:function iD(){},
h1:function h1(){},
cA:function cA(){},
cU:function cU(){}},W={
mT:function(a,b,c){var t,s
t=document.body
s=(t&&C.j).T(t,a,b,c)
s.toString
t=new H.dH(new W.Y(s),new W.iM(),[W.u])
return t.ga9(t)},
mU:function(a){return"wheel"},
bC:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mj(a)
if(typeof s==="string")t=a.tagName}catch(r){H.V(r)}return t},
nG:function(a,b){return document.createElement(a)},
bf:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lg:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
Z:function(a,b,c,d,e){var t=c==null?null:W.lm(new W.hY(c))
t=new W.hX(0,a,b,t,!1,[e])
t.dL(a,b,c,!1,e)
return t},
le:function(a){var t,s
t=document.createElement("a")
s=new W.is(t,window.location)
s=new W.c4(s)
s.dM(a)
return s},
nJ:function(a,b,c,d){return!0},
nK:function(a,b,c,d){var t,s,r,q,p
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
lh:function(){var t=P.v
t=new W.iA(P.jC(C.k,t),P.aq(null,null,null,t),P.aq(null,null,null,t),P.aq(null,null,null,t),null)
t.dO(null,new H.bN(C.k,new W.iB(),[H.am(C.k,0),null]),["TEMPLATE"],null)
return t},
li:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.nF(a)
if(!!J.x(t).$isj)return t
return}else return a},
nF:function(a){if(a===window)return a
else return new W.hQ(a)},
lm:function(a){var t=$.I
if(t===C.d)return a
return t.em(a)},
n:function n(){},
e_:function e_(){},
e0:function e0(){},
a7:function a7(){},
e3:function e3(){},
ci:function ci(){},
aW:function aW(){},
cj:function cj(){},
e5:function e5(){},
aX:function aX(){},
e8:function e8(){},
B:function B(){},
bj:function bj(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
cl:function cl(){},
bB:function bB(){},
cm:function cm(){},
ed:function ed(){},
cn:function cn(){},
ee:function ee(){},
co:function co(){},
cp:function cp(){},
ef:function ef(){},
eg:function eg(){},
a9:function a9(){},
iM:function iM(){},
k:function k(){},
j:function j(){},
aa:function aa(){},
eE:function eE(){},
eF:function eF(){},
eJ:function eJ(){},
ab:function ab(){},
cw:function cw(){},
eM:function eM(){},
bK:function bK(){},
cx:function cx(){},
eN:function eN(){},
bL:function bL(){},
bm:function bm(){},
b2:function b2(){},
f4:function f4(){},
fc:function fc(){},
fd:function fd(){},
bO:function bO(){},
ac:function ac(){},
fe:function fe(){},
O:function O(){},
fo:function fo(){},
Y:function Y(a){this.a=a},
u:function u(){},
dp:function dp(){},
bU:function bU(){},
fx:function fx(){},
fA:function fA(){},
ad:function ad(){},
fC:function fC(){},
fF:function fF(){},
fG:function fG(){},
dv:function dv(){},
fS:function fS(){},
dx:function dx(){},
fU:function fU(){},
fY:function fY(){},
ae:function ae(){},
fZ:function fZ(){},
af:function af(){},
h0:function h0(){},
ag:function ag(){},
h5:function h5(){},
a3:function a3(){},
at:function at(){},
dA:function dA(){},
hd:function hd(){},
he:function he(){},
bZ:function bZ(){},
ah:function ah(){},
a4:function a4(){},
hh:function hh(){},
hi:function hi(){},
hj:function hj(){},
ai:function ai(){},
b8:function b8(){},
hn:function hn(){},
ho:function ho(){},
br:function br(){},
hq:function hq(){},
dF:function dF(){},
aP:function aP(){},
hw:function hw(){},
hy:function hy(){},
hB:function hB(){},
hC:function hC(){},
ba:function ba(){},
c1:function c1(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
bb:function bb(){},
hN:function hN(){},
dJ:function dJ(){},
hP:function hP(){},
hR:function hR(){},
hS:function hS(){},
i8:function i8(){},
i9:function i9(){},
dM:function dM(){},
it:function it(){},
iw:function iw(){},
ix:function ix(){},
iE:function iE(){},
iF:function iF(){},
hL:function hL(){},
hT:function hT(a){this.a=a},
hW:function hW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
aR:function aR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hX:function hX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hY:function hY(a){this.a=a},
c4:function c4(a){this.a=a},
C:function C(){},
dr:function dr(a){this.a=a},
fq:function fq(a){this.a=a},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
c7:function c7(){},
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
cs:function cs(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hQ:function hQ(a){this.a=a},
dq:function dq(){},
is:function is(a,b){this.a=a
this.b=b},
dO:function dO(a){this.a=a},
iC:function iC(a){this.a=a},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
cy:function cy(){},
cS:function cS(){},
cE:function cE(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cC:function cC(){},
cD:function cD(){},
cF:function cF(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cT:function cT(){},
d4:function d4(){},
d5:function d5(){},
d3:function d3(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
cW:function cW(){},
cX:function cX(){},
cY:function cY(){},
d_:function d_(){},
d1:function d1(){},
d6:function d6(){},
d7:function d7(){}},B={
oq:function(a){var t,s
t=document
s=W.b2
W.Z(t,"keydown",new B.jd(),!1,s)
W.Z(t,"keyup",new B.je(),!1,s)
if(!$.os)W.Z(t,"mousemove",new B.jf(),!1,W.O)
s=W.O
W.Z(t,"mousedown",new B.jg(),!1,s)
W.Z(t,"mouseup",new B.jh(),!1,s)},
nf:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.e(3))
s=$.$get$iP()
r=$.$get$cd()
q=new T.H(new Float32Array(H.e(16)))
q.E()
q=new B.fs(a,b,c,0,new T.h(t),-0.02,s,r,q,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"camera:orbit",!1,!0)
q.dA(a,b,c,d)
return q},
jd:function jd(){},
je:function je(){},
jf:function jf(){},
jg:function jg(){},
jh:function jh(){},
fs:function fs(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
fv:function fv(){},
fw:function fw(a){this.a=a},
mN:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.h(new Float32Array(H.e(3)))
r.p(t,s,d8)
q=new T.h(new Float32Array(H.e(3)))
q.p(d6,s,d8)
p=new T.h(new Float32Array(H.e(3)))
p.p(d6,d7,d8)
o=new T.h(new Float32Array(H.e(3)))
o.p(t,d7,d8)
n=-d8
m=new T.h(new Float32Array(H.e(3)))
m.p(t,s,n)
l=new T.h(new Float32Array(H.e(3)))
l.p(t,d7,n)
k=new T.h(new Float32Array(H.e(3)))
k.p(d6,d7,n)
j=new T.h(new Float32Array(H.e(3)))
j.p(d6,s,n)
i=new T.h(new Float32Array(H.e(3)))
i.p(t,d7,n)
h=new T.h(new Float32Array(H.e(3)))
h.p(t,d7,d8)
g=new T.h(new Float32Array(H.e(3)))
g.p(d6,d7,d8)
f=new T.h(new Float32Array(H.e(3)))
f.p(d6,d7,n)
e=new T.h(new Float32Array(H.e(3)))
e.p(d6,s,d8)
d=new T.h(new Float32Array(H.e(3)))
d.p(t,s,d8)
c=new T.h(new Float32Array(H.e(3)))
c.p(t,s,n)
b=new T.h(new Float32Array(H.e(3)))
b.p(d6,s,n)
a=new T.h(new Float32Array(H.e(3)))
a.p(d6,s,n)
a0=new T.h(new Float32Array(H.e(3)))
a0.p(d6,d7,n)
a1=new T.h(new Float32Array(H.e(3)))
a1.p(d6,d7,d8)
a2=new T.h(new Float32Array(H.e(3)))
a2.p(d6,s,d8)
a3=new T.h(new Float32Array(H.e(3)))
a3.p(t,s,n)
a4=new T.h(new Float32Array(H.e(3)))
a4.p(t,s,d8)
s=new T.h(new Float32Array(H.e(3)))
s.p(t,d7,d8)
a5=new T.h(new Float32Array(H.e(3)))
a5.p(t,d7,n)
n=new Float32Array(H.e(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.e(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.e(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.e(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.e(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.e(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.e(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.e(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.e(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.e(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.e(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.e(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.e(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.e(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.e(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.e(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.e(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.e(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.e(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.e(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.e(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.e(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.e(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.e(2))
c7[0]=d3
c7[1]=d4
c8=new G.aZ(!1,[],[],[],P.D())
c8.V("aTexUV")
c8.V("aNormal")
c8.bx(6)
c8.aa([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.ah("aTexUV",[new T.p(n),new T.p(t),new T.p(a6),new T.p(a7),new T.p(a8),new T.p(a9),new T.p(b0),new T.p(b1),new T.p(b2),new T.p(b3),new T.p(b4),new T.p(b5),new T.p(b6),new T.p(b7),new T.p(b8),new T.p(b9),new T.p(c0),new T.p(c1),new T.p(c2),new T.p(c3),new T.p(c4),new T.p(c5),new T.p(c6),new T.p(c7)])
for(c9=0;t=$.$get$lc(),c9<6;++c9){d0=t[c9]
c8.aC("aNormal",[d0,d0,d0,d0])}return c8},
mO:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=a3/2
s=[]
r=[]
q=[]
p=new T.h(new Float32Array(H.e(3)))
p.p(0,t,0)
C.a.i(s,p)
p=new Float32Array(H.e(2))
p[0]=0
p[1]=0
C.a.i(r,new T.p(p))
p=new T.h(new Float32Array(H.e(3)))
p.p(0,1,0)
C.a.i(q,p)
p=-t
o=new T.h(new Float32Array(H.e(3)))
o.p(0,p,0)
C.a.i(s,o)
o=new Float32Array(H.e(2))
o[0]=1
o[1]=1
C.a.i(r,new T.p(o))
o=new T.h(new Float32Array(H.e(3)))
o.p(0,-1,0)
C.a.i(q,o)
for(n=0;n<a4;++n){m=n/a4
o=m*3.141592653589793*2
l=Math.sin(o)
o=Math.cos(o)
k=new Float32Array(3)
k[0]=l*a1
k[1]=t
k[2]=o*a1
C.a.i(s,new T.h(k))
k=new Float32Array(2)
k[0]=m
k[1]=1
C.a.i(r,new T.p(k))
k=new Float32Array(3)
k[0]=0
k[1]=1
k[2]=0
C.a.i(q,new T.h(k))
k=new Float32Array(3)
k[0]=l*a2
k[1]=p
k[2]=o*a2
C.a.i(s,new T.h(k))
o=new Float32Array(2)
o[0]=m
o[1]=0
C.a.i(r,new T.p(o))
o=new Float32Array(3)
o[0]=0
o[1]=-1
o[2]=0
C.a.i(q,new T.h(o))}p=2*a4
o=2+p
H.c(s.length===o)
H.c(r.length===o)
for(n=0;n<p;n=j){j=n+2
C.a.i(s,s[j])
o=n+3
C.a.i(s,s[o])
C.a.i(r,r[j])
C.a.i(r,r[o])
i=s[j]
h=s[o]
g=s[n+4]
o=new Float32Array(3)
f=new T.h(new Float32Array(3))
G.jF(i,h,g,new T.h(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.c(s.length===2+4*a4)
p=[]
o=[]
e=new G.aZ(!1,p,o,[],P.D())
e.V("aTexUV")
e.aa(s)
e.ah("aTexUV",r)
e.V("aNormal")
e.aC("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.c(!0)
C.a.i(p,new G.z(0,c,a))
H.c(!0)
C.a.i(p,new G.z(1,a0,h))
H.c(!0)
C.a.i(o,new G.bJ(d+a,d+c,d+h,d+a0))}return e},
n1:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.L(t,$.$get$kF())
C.a.L(s,$.$get$jx())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.A)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.h(new Float32Array(3))
k.t(l)
l=n.b
k.i(0,s[l])
k.M(0,0.5)
k.C(0)
j=s[l]
i=new T.h(new Float32Array(3))
i.t(j)
j=n.c
i.i(0,s[j])
i.M(0,0.5)
i.C(0)
h=s[j]
g=new T.h(new Float32Array(3))
g.t(h)
g.i(0,s[m])
g.M(0,0.5)
g.C(0)
f=s.length
C.a.i(s,k)
e=s.length
C.a.i(s,i)
d=s.length
C.a.i(s,g)
C.a.i(q,new G.z(m,f,d))
C.a.i(q,new G.z(l,e,f))
C.a.i(q,new G.z(j,d,e))
C.a.i(q,new G.z(f,e,d))}}c=new G.aZ(!1,[],[],[],P.D())
c.V("aTexUV")
c.V("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.A)(t),++o){n=t[o]
b=s[n.a]
H.c(Math.sqrt(b.gS())<1.01&&Math.sqrt(b.gS())>0.99)
a=s[n.b]
H.c(Math.sqrt(a.gS())<1.01&&Math.sqrt(a.gS())>0.99)
a0=s[n.c]
H.c(Math.sqrt(a0.gS())<1.01&&Math.sqrt(a0.gS())>0.99)
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
c.aC("aNormal",[b,a,a0])
m=new T.h(new Float32Array(3))
m.t(b)
m.M(0,a4)
l=new T.h(new Float32Array(3))
l.t(a)
l.M(0,a4)
a2=new T.h(new Float32Array(3))
a2.t(a0)
a2.M(0,a4)
c.dm([m,l,a2])
c.ah("aTexUV",[new T.p(j),new T.p(h),new T.p(a1)])}return c},
nq:function(b4,b5,b6,b7,b8,b9,c0,c1,c2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
t=[]
s=new Float32Array(H.e(3))
r=new T.h(s)
q=new T.h(new Float32Array(H.e(3)))
new Float32Array(H.e(3))
p=H.F(new Array(b9),[[P.b,P.o]])
for(o=[P.o],n=0;n<b9;++n){p[n]=H.F(new Array(c0),o)
m=n/b9*2*b6*3.141592653589793
B.lz(m,b7,b6,b8,b5,$.$get$jb())
B.lz(m+0.02,b7,b6,b8,b5,$.$get$jY())
l=$.$get$jY().a
k=l[0]
j=$.$get$jb().a
s[0]=k-j[0]
s[1]=l[1]-j[1]
s[2]=l[2]-j[2]
k=q.a
k[0]=l[0]+j[0]
k[1]=l[1]+j[1]
k[2]=l[2]+j[2]
i=r.aK(q)
i.C(0)
q=i.aK(r)
q.C(0)
for(l=q.a,k=i.a,h=0;h<c0;++h){g=h/c0*2*3.141592653589793
f=c1*Math.cos(g)
e=c1*Math.sin(g)
j=$.$get$jb().a
d=j[0]
c=l[0]
b=k[0]
a=j[1]
a0=l[1]
a1=k[1]
j=j[2]
a2=l[2]
a3=k[2]
a4=new Float32Array(3)
a4[0]=d+f*c+e*b
a4[1]=a+f*a0+e*a1
a4[2]=j+f*a2+e*a3
C.a.i(t,new T.h(a4))
p[n][h]=t.length-1}}a5=new G.aZ(!1,[],[],[],P.D())
a5.V("aTexUV")
for(n=0;n<b9;n=a6)for(a6=n+1,a7=a6%b9,h=0;h<c0;h=a8){a8=h+1
a9=a8%c0
s=p[n]
b0=s[h]
o=p[a7]
b1=o[h]
b2=o[a9]
b3=s[a9]
s=h/c0
o=new Float32Array(2)
o[0]=0
o[1]=s
l=new Float32Array(2)
l[0]=1
l[1]=s
s=a8/c0
k=new Float32Array(2)
k[0]=1
k[1]=s
j=new Float32Array(2)
j[0]=0
j[1]=s
a5.bx(1)
a5.aa([C.a.h(t,b3),C.a.h(t,b2),C.a.h(t,b1),C.a.h(t,b0)])
a5.ah("aTexUV",[new T.p(o),new T.p(l),new T.p(k),new T.p(j)])}a5.du()
return a5},
lz:function(a,b,c,d,e,f){var t,s,r,q,p
t=Math.cos(a)
s=Math.sin(a)
r=b/c*a
q=d*(2+Math.cos(r))
p=f.a
p[0]=q*0.5*t
p[1]=q*s*0.5
p[2]=e*d*Math.sin(r)*0.5
return f}},G={
nA:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.at(t,"\n")},
lb:function(a,b,c){var t,s,r,q
t=J.m(a)
s=t.ck(a,b)
t.bv(a,s,c)
t.cf(a,s)
r=t.bp(a,s,35713)
if(r!=null&&!r){q=t.bo(a,s)
P.U("E:Compilation failed:")
P.U("E:"+G.nA(c))
P.U("E:Failure:")
P.U(C.e.a7("E:",q))
throw H.f(q)}return s},
n_:function(a,b,c,d,e){var t=new G.cu(a,null,b,c,d)
t.ds(a,b,c,d,!1)
return t},
jF:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.t(b)
d.aA(a)
e.t(c)
e.aA(a)
t=e.a
s=t[0]
r=t[1]
q=t[2]
p=d.a
o=p[0]
n=p[1]
m=p[2]
t[0]=r*m-q*n
t[1]=q*o-s*m
t[2]=s*n-r*o
t=Math.sqrt(e.gS())
if(t===0)return!1
e.M(0,-1/t)
return!0},
n2:function(a,b,c){var t,s,r,q
C.m.cu(a,0,a.length,0)
C.m.cu(b,0,4,0)
for(t=c.length,s=0,r=0;r<c.length;c.length===t||(0,H.A)(c),++r){q=c[r]
if(q.c){q.aX(a,s*16)
b[s]=q.d;++s}}},
fa:function(a){var t=new G.f9(P.D(),a,!1,!0)
t.dz(a)
return t},
ct:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jp(a[s])
b[t+1]=J.jq(a[s])
b[t+2]=J.k7(a[s])}return b},
mY:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jp(a[s])
b[t+1]=J.jq(a[s])}return b},
mZ:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jp(a[s])
b[t+1]=J.jq(a[s])
b[t+2]=J.k7(a[s])
b[t+3]=J.mk(a[s])}return b},
mX:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bx(a[s],0)
b[t+1]=J.bx(a[s],1)
b[t+2]=J.bx(a[s],2)
b[t+3]=J.bx(a[s],3)}return b},
nI:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gH(t),s=s.gw(s),r=b.x,q=[[P.b,P.o]],p=[P.S],o=[T.aQ],n=[T.h],m=[T.p];s.q();){l=s.gu()
if(!r.I(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.lv>0)H.dS("I: "+k)
continue}j=t.h(0,l)
switch($.$get$a_().h(0,l).a){case"vec2":b.ag(l,G.mY(H.dT(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ag(l,G.ct(H.dT(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ag(l,G.mZ(H.dT(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ag(l,new Float32Array(H.iH(H.dT(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ag(l,G.mX(H.dT(j,"$isb",q,"$asb"),null),4)
break
default:if(H.a5(!1))H.aj("unknown type for "+H.i(l)+" ["+J.mi(j[0]).k(0)+"] ["+new H.aO(H.iV(j),null).k(0)+"] "+H.i(j))}}},
cv:function(a,b,c){var t,s,r
t=b.d
s=new G.di(t,J.k5(t.a),4,P.D(),b.e.x,null,0,-1,null,null,P.D(),"meshdata:"+a,!1,!0)
s.aa(G.ct(c.d,null))
r=c.dt()
s.y=J.dW(t.a)
s.ai(r)
G.nI(c,s)
return s},
fP:function(a,b,c,d){var t=new G.fO(b,c,d,null,null,P.D(),P.D(),P.aq(null,null,null,P.v),null,a,!1,!0)
t.dC(a,b,c,d)
return t},
l6:function(a,b,c,d,e,f){var t=new G.hu(c,d,e,b,J.m6(a.a),3553,a,f)
t.dF(a,b,c,d,e,f)
return t},
ff:function ff(){},
bs:function bs(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e4:function e4(){},
e7:function e7(a,b){this.a=a
this.b=b},
cu:function cu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
f_:function f_(){},
b4:function b4(a,b,c,d,e,f,g,h){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.d=e
_.a=f
_.b=g
_.c=h},
aY:function aY(a,b,c,d,e,f,g,h,i,j){var _=this
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
as:function as(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
eO:function eO(a,b,c,d,e,f,g){var _=this
_.x=a
_.y=b
_.z=c
_.d=d
_.a=e
_.b=f
_.c=g},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
dD:function dD(a,b,c){this.a=a
this.b=b
this.c=c},
f9:function f9(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
di:function di(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fz:function fz(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
eh:function eh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fO:function fO(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
l:function l(a,b,c){this.a=a
this.b=b
this.c=c},
ar:function ar(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h_:function h_(){},
dC:function dC(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
c0:function c0(){},
hu:function hu(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={
kR:function(a,b,c,d,e,f,g,h){return G.cv("cube",a,B.mN(!0,b,c,d,e,f,g,h))},
nw:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=new T.h(new Float32Array(H.e(3)))
t.p(-1,-1,0)
s=new T.h(new Float32Array(H.e(3)))
s.p(1,-1,0)
r=new T.h(new Float32Array(H.e(3)))
r.p(1,1,0)
q=new T.h(new Float32Array(H.e(3)))
q.p(-1,1,0)
p=new Float32Array(H.e(2))
p[0]=0
p[1]=0
o=new Float32Array(H.e(2))
o[0]=1
o[1]=0
n=new Float32Array(H.e(2))
n[0]=1
n[1]=1
m=new Float32Array(H.e(2))
m[0]=0
m[1]=1
l=new T.h(new Float32Array(H.e(3)))
l.p(0,0,1)
k=new G.aZ(!1,[],[],[],P.D())
k.V("aTexUV")
k.dn([t,s,r,q])
k.ah("aTexUV",[new T.p(p),new T.p(o),new T.p(n),new T.p(m)])
k.V("aNormal")
k.aC("aNormal",[l,l,l,l])
j=G.cv("quad",a,k)
m=$.$get$kD()
n=new Float32Array(H.e(9))
o=new T.H(new Float32Array(H.e(16)))
o.E()
p=new T.H(new Float32Array(H.e(16)))
p.E()
return new A.aA(m,j,[],new T.a2(n),o,p,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"unit-mesh",!1,!0)},
nx:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=d.a
if(t[1]===0)return
s=b*0.5
r=c*C.i.eK(s/c)
q=-r
p=new T.h(new Float32Array(H.e(3)))
p.t(d)
p.M(0,s)
t=t[1]
o=new T.h(new Float32Array(H.e(3)))
o.t(p)
o.M(0,1/t)
n=[]
for(m=q;m<=r;m+=c)for(l=q;l<=r;l+=c){t=new Float32Array(3)
p=new T.h(t)
t[0]=m
t[1]=0
t[2]=l
p.i(0,o)
C.a.i(n,p)
t=new Float32Array(3)
p=new T.h(t)
t[0]=m
t[1]=0
t[2]=l
p.aA(o)
C.a.i(n,p)}for(k=0;k<8;++k){m=(k&1)===1?1:-1
j=(k&2)===2?1:-1
l=(k&4)===4?1:-1
if(m>0){t=j*s
p=l*s
i=new Float32Array(3)
i[0]=m*s
i[1]=t
i[2]=p
C.a.i(n,new T.h(i))
i=new Float32Array(3)
i[0]=-m*s
i[1]=t
i[2]=p
C.a.i(n,new T.h(i))}if(j>0){t=m*s
p=l*s
i=new Float32Array(3)
i[0]=t
i[1]=j*s
i[2]=p
C.a.i(n,new T.h(i))
i=new Float32Array(3)
i[0]=t
i[1]=-j*s
i[2]=p
C.a.i(n,new T.h(i))}if(l>0){t=m*s
p=j*s
i=new Float32Array(3)
i[0]=t
i[1]=p
i[2]=l*s
C.a.i(n,new T.h(i))
i=new Float32Array(3)
i[0]=t
i[1]=p
i[2]=-l*s
C.a.i(n,new T.h(i))}}a.aE(G.ct(n,null))
t=new Array(n.length)
t.fixed$length=Array
h=H.F(t,[P.o])
for(t=n.length,k=0;k<t;++k)h[k]=k
a.ai(h)},
n0:function(a){var t,s,r
t=a.a
s=t[0]
if(s!==0){r=t[1]
if(r!==0){t=new T.h(new Float32Array(H.e(3)))
t.p(-r,s,0)
return t}t=t[2]
if(t!==0){r=new T.h(new Float32Array(H.e(3)))
r.p(-t,0,s)
return r}t=new T.h(new Float32Array(H.e(3)))
t.p(0,1,1)
return t}else{s=t[1]
if(s===0){t=new T.h(new Float32Array(H.e(3)))
t.p(1,1,0)
return t}t=t[2]
if(t===0){t=new T.h(new Float32Array(H.e(3)))
t.p(1,0,1)
return t}r=new T.h(new Float32Array(H.e(3)))
r.p(0,-t,s)
return r}},
nz:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a3.toString
t=new T.h(new Float32Array(H.e(3)))
t.t(a3)
t.C(0)
s=new T.h(new Float32Array(H.e(3)))
s.t(t)
s.M(0,a4)
a2.toString
r=new T.h(new Float32Array(H.e(3)))
r.t(a2)
r.i(0,s)
q=[a2,r]
p=R.n0(a3)
p.C(0)
p.M(0,Math.tan(H.lr(a5))*a4)
for(o=0;o<8;++o){t=new Float32Array(3)
n=new T.h(t)
n.t(p)
s=new Float32Array(4)
new T.fI(s).da(a3,o*2*3.141592653589793/8)
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
n.i(0,r)
C.a.i(q,n)}a0=[]
for(o=1;o<q.length;++o){C.a.i(a0,0)
C.a.i(a0,o)}for(o=3;t=q.length,o<t;++o){C.a.i(a0,o-1)
C.a.i(a0,o)}C.a.i(a0,t-1)
C.a.i(a0,2)
for(o=2;o<q.length;++o)if(o%2===0){C.a.i(a0,1)
C.a.i(a0,o)}a1.aE(G.ct(q,null))
a1.ai(a0)},
ny:function(a,b,c){var t,s,r,q,p,o,n
t=[]
s=[]
for(r=$.$get$jx(),q=0;q<12;++q){p=r[q]
C.a.i(s,t.length)
C.a.i(s,12)
o=new T.h(new Float32Array(3))
o.t(p)
o.M(0,c)
b.toString
n=new T.h(new Float32Array(3))
n.t(b)
n.i(0,o)
C.a.i(t,n)}C.a.i(t,b)
a.aE(G.ct(t,null))
a.ai(s)},
h3:function h3(){},
h4:function h4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fX:function fX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i}},A={
lt:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.t(c)
s=b.d
t.aP(0,s)
r=b.ch
if(r!=null){b.cx
q=!0}else q=!1
if(q){J.W(b)
q=C.a.gaO(e)
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
p.ev(new T.a2(o))
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
q.j(0,"uTransformationMatrix",s)
q.j(0,"uModelMatrix",t)
q.j(0,"uNormalMatrix",p)
C.a.i(e,r)
a.dr(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.A)(s),++l)A.lt(a,s[l],t,d,e)},
jH:function(a,b,c){var t=new A.fN(c,b,H.F([],[A.b7]),17664,0,0,0,0,a,!1,!0)
t.dB(a,b,c)
return t},
aA:function aA(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b7:function b7(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fN:function fN(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
t=C.m.eL(a,0,new A.iW())
s=536870911&t+(C.b.cY(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iW:function iW(){}},T={
fb:function(){return new T.H(new Float32Array(H.e(16)))},
jZ:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
b.toString
t=new Float32Array(H.e(3))
s=new T.h(t)
s.t(b)
s.aA(c)
s.C(0)
r=d.aK(s)
r.C(0)
q=s.aK(r)
q.C(0)
p=r.bd(b)
o=q.bd(b)
n=s.bd(b)
m=r.a
l=m[0]
k=q.a
j=k[0]
i=t[0]
h=m[1]
g=k[1]
f=t[1]
m=m[2]
k=k[2]
t=t[2]
e=a.a
e[15]=1
e[14]=-n
e[13]=-o
e[12]=-p
e[11]=0
e[10]=t
e[9]=k
e[8]=m
e[7]=0
e[6]=f
e[5]=g
e[4]=h
e[3]=0
e[2]=i
e[1]=j
e[0]=l},
lK:function(a,b,c,d,e){var t,s
t=Math.tan(b*0.5)
s=d-e
a.bu()
a.O(0,0,1/(t*c))
a.O(1,1,1/t)
a.O(2,2,(e+d)/s)
a.O(3,2,-1)
a.O(2,3,2*d*e/s)},
E:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.h(t)},
la:function(){return new T.h(new Float32Array(H.e(3)))},
a2:function a2(a){this.a=a},
H:function H(a){this.a=a},
fI:function fI(a){this.a=a},
p:function p(a){this.a=a},
h:function h(a){this.a=a},
aQ:function aQ(a){this.a=a}},L={
mW:function(a){var t,s
P.U(H.i(a)+" toggle ")
t=$.$get$aH()
$.iR=t.h(0,a)
t.h(0,a).c=!0
for(t=t.gH(t),t=t.gw(t);t.q();){s=t.gu()
if(s==null?a!=null:s!==a)$.$get$aH().h(0,s).c=!1}},
nt:function(a){a.stopPropagation()},
ok:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
t={}
s=document
r=new R.h4(0,0,null,null,null,null)
r.dD(C.f.d1(s,"stats"),"blue","gray")
q=C.f.f_(s,"#webgl-canvas")
p=new G.e7(null,q)
o=(q&&C.x).d0(q,"webgl2",P.aL(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.K(P.cq('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.W(J.ml(o))
if($.lv>0)P.U("I: "+n)
J.m2(o,0,0,0,1)
J.dX(o,2929)
m=B.nf(25,10,0,q)
q.width=q.clientWidth
q.height=q.clientHeight
o=$.oi
n=$.oh
l=new T.H(new Float32Array(H.e(16)))
l.E()
k=new T.H(new Float32Array(H.e(16)))
k.E()
j=new G.fz(m,50,1,o,n,l,k,new T.H(new Float32Array(H.e(16))),P.D(),"perspective",!1,!0)
j.bE()
k=[]
i=new G.eO(k,new Float32Array(H.e(64)),new Float32Array(H.e(4)),P.D(),"illumination",!1,!0)
for(o=$.$get$aH(),o=o.gbj(o),o=o.gw(o);o.q();)C.a.i(k,o.gu())
o=new G.bs(P.D(),"uniforms",!1,!0)
h=new R.fX(p,null,null,null,null,null,o,null,null)
n=new Float32Array(H.e(2))
l=new T.p(n)
n[0]=512
n[1]=512
h.y=l
g=G.l6(p,"frame::color",512,512,32856,$.$get$kU())
n=G.l6(p,"frame::depth",512,512,33190,$.$get$kV())
h.b=n
k=G.n_(p,g,n,null,!1)
h.d=k
k=A.jH("compute-shadow",p,k)
k.z=512
k.Q=512
h.c=k
o.G("uTexture",n)
o.G("uCutOff",0)
o.G("uCameraNear",0.5)
o.G("uCameraFar",20)
f=G.fP("shadowCompute",p,$.$get$lM(),$.$get$lL())
f=new A.b7(f,[o],[],"shadowCompute",!1,!0)
h.e=f
H.c(!0)
C.a.i(k.f,f)
f=A.jH("visualize-shadow",p,null)
f.seq(!1)
h.f=f
k=G.fP("shadowVisualize",p,$.$get$lU(),$.$get$lT())
e=[]
o=new A.b7(k,[o],e,"shadowVisualize",!1,!0)
h.x=o
k=R.nw(k)
H.c(!0)
C.a.i(e,k)
H.c(!0)
C.a.i(f.f,o)
d=new G.bs(P.D(),"plain",!1,!0)
d.G("uShadowMap",n)
d.G("uCanvasSize",l)
d.G("uShadowBias",0.03)
c=A.jH("main",p,null)
l=G.fP("solid",p,$.$get$lD(),$.$get$lB())
n=[]
H.c(!0)
o=c.f
C.a.i(o,new A.b7(l,[j,i,d],n,"solid",!1,!0))
k=G.fP("solid",p,$.$get$lP(),$.$get$lO())
b=new A.b7(k,[j,i],[],"solid",!1,!0)
H.c(!0)
C.a.i(o,b)
H.c(k.dv(l))
o=G.cv("icosahedron-3",l,B.n1(3,1,!0))
f=$.$get$lF()
e=new Float32Array(H.e(9))
a=new T.H(new Float32Array(H.e(16)))
a.E()
a0=new T.H(new Float32Array(H.e(16)))
a0.E()
a0=new A.aA(f,o,[],new T.a2(e),a,a0,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"sphere",!1,!0)
a0.a8(0,0,0)
H.c(!0)
C.a.i(n,a0)
a0=R.kR(l,1,0,1,0,1,1,1)
a=new Float32Array(H.e(9))
e=new T.H(new Float32Array(H.e(16)))
e.E()
o=new T.H(new Float32Array(H.e(16)))
o.E()
o=new A.aA(f,a0,[],new T.a2(a),e,o,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"cube",!1,!0)
o.a8(-5,0,-5)
H.c(!0)
C.a.i(n,o)
o=G.cv("cylinder-32",l,B.mO(3,6,2,32,!0))
e=new Float32Array(H.e(9))
a=new T.H(new Float32Array(H.e(16)))
a.E()
a0=new T.H(new Float32Array(H.e(16)))
a0.E()
a0=new A.aA(f,o,[],new T.a2(e),a,a0,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"cylinder",!1,!0)
a0.a8(5,0,-5)
H.c(!0)
C.a.i(n,a0)
a0=G.cv("torusknot",l,B.nq(!0,1,2,3,1,128,16,0.4,!0))
a=new Float32Array(H.e(9))
e=new T.H(new Float32Array(H.e(16)))
e.E()
o=new T.H(new Float32Array(H.e(16)))
o.E()
o=new A.aA(f,a0,[],new T.a2(a),e,o,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"torusknot",!1,!0)
o.a8(5,0,5)
H.c(!0)
C.a.i(n,o)
l=R.kR(l,1,0,1,0,30,0.1,30)
o=$.$get$lE()
e=new Float32Array(H.e(9))
a=new T.H(new Float32Array(H.e(16)))
a.E()
a0=new T.H(new Float32Array(H.e(16)))
a0.E()
a0=new A.aA(o,l,[],new T.a2(e),a,a0,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"plane",!1,!0)
a0.a8(0,-10,0)
H.c(!0)
C.a.i(n,a0)
for(o=n.length,a1=0;a1<n.length;n.length===o||(0,H.A)(n),++a1){a2=n[a1]
l=h.e
l.toString
H.c(!0)
C.a.i(l.f,a2)}o=k.d
a3=new G.di(o,J.k5(o.a),1,P.D(),k.e.x,null,0,-1,null,null,P.D(),"meshdata:light",!1,!0)
a3.aa(new Float32Array(H.e(3)))
a3.y=J.dW(o.a)
a3.ai([0,0])
o=$.$get$lC()
k=new Float32Array(H.e(9))
n=new T.H(new Float32Array(H.e(16)))
n.E()
l=new T.H(new Float32Array(H.e(16)))
l.E()
f=new Float32Array(H.e(3))
e=new Float32Array(H.e(3))
a=new Float32Array(H.e(3))
a0=new Float32Array(H.e(3))
H.c(!0)
C.a.i(b.f,new A.aA(o,a3,[],new T.a2(k),n,l,new T.h(f),new T.h(e),new T.h(a),new T.h(a0),"light",!1,!0))
for(o=C.f.bk(s,"input"),n=o.length,a1=0;a1<o.length;o.length===n||(0,H.A)(o),++a1){a4=o[a1]
l=J.m(a4)
k=l.gcB(a4)
W.Z(k.a,k.b,new L.j7(),!1,H.am(k,0))
k=l.gcC(a4)
W.Z(k.a,k.b,new L.j8(),!1,H.am(k,0))
l=l.gcD(a4)
W.Z(l.a,l.b,L.or(),!1,H.am(l,0))}for(o=C.f.bk(s,"input"),n=o.length,a1=0;a1<o.length;o.length===n||(0,H.A)(o),++a1){a5=o[a1]
H.dS("initialize inputs "+H.i(a5.id))
a6=C.f.bQ(s,"Event")
J.k1(a6,"change",!0,!0)
l=J.m(a5)
l.co(a5,a6)
a6=C.f.bQ(s,"Event")
J.k1(a6,"input",!0,!0)
l.co(a5,a6)}s=new L.j9(q,j,h,c)
s.$1(null)
W.Z(window,"resize",s,!1,W.k)
t.a=0
new L.j6(t,r,m,h,d,c,a3).$1(0)},
j7:function j7(){},
j8:function j8(){},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j6:function j6(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var v=[C,H,J,P,W,B,G,R,A,T,L]
setFunctionNamesIfNecessary(v)
var $={}
H.jz.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gA:function(a){return H.b5(a)},
k:function(a){return H.fH(a)},
gD:function(a){return new H.aO(H.iV(a),null)}}
J.eV.prototype={
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
gD:function(a){return C.Z},
$isaG:1}
J.eW.prototype={
B:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
gD:function(a){return C.T}}
J.bM.prototype={
gA:function(a){return 0},
gD:function(a){return C.S},
k:function(a){return String(a)},
$iskJ:1}
J.fB.prototype={}
J.b9.prototype={}
J.b1.prototype={
k:function(a){var t=a[$.$get$kv()]
return t==null?this.dj(a):J.W(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjw:1}
J.b_.prototype={
bc:function(a,b){if(!!a.immutable$list)throw H.f(new P.w(b))},
bb:function(a,b){if(!!a.fixed$length)throw H.f(new P.w(b))},
i:function(a,b){this.bb(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.bb(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.A)(b),++r,t=p){q=b[r]
p=t+1
H.c(t===a.length||H.K(new P.a8(a)))
a.push(q)}},
cA:function(a,b){return new H.bN(a,b,[H.am(a,0),null])},
at:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
v:function(a,b){return this.h(a,b)},
geJ:function(a){if(a.length>0)return a[0]
throw H.f(H.eU())},
gaO:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.f(H.eU())},
bt:function(a,b,c,d,e){var t,s
this.bc(a,"setRange")
P.jG(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.K(P.b6(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.f(H.na())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c3:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.f(new P.a8(a))}return!1},
de:function(a,b){this.bc(a,"sort")
H.dy(a,0,a.length-1,P.o3())},
aT:function(a){return this.de(a,null)},
F:function(a,b){var t
for(t=0;t<a.length;++t)if(J.L(a[t],b))return!0
return!1},
k:function(a){return P.eT(a,"[","]")},
gw:function(a){return new J.e1(a,a.length,0,null,[H.am(a,0)])},
gA:function(a){return H.b5(a)},
gl:function(a){return a.length},
sl:function(a,b){this.bb(a,"set length")
if(b<0)throw H.f(P.b6(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.R(a,b))
if(b>=a.length||b<0)throw H.f(H.R(a,b))
return a[b]},
j:function(a,b,c){this.bc(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.R(a,b))
if(b>=a.length||b<0)throw H.f(H.R(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isd:1,
$asd:null,
$isb:1,
$asb:null}
J.jy.prototype={}
J.e1.prototype={
gu:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.f(H.A(t))
r=this.c
if(r>=s){this.sbF(null)
return!1}this.sbF(t[r]);++this.c
return!0},
sbF:function(a){this.d=a}}
J.bn.prototype={
X:function(a,b){var t
if(typeof b!=="number")throw H.f(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaM(b)
if(this.gaM(a)===t)return 0
if(this.gaM(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaM:function(a){return a===0?1/a<0:a<0},
eo:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.f(new P.w(""+a+".ceil()"))},
eK:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.f(new P.w(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(new P.w(""+a+".round()"))},
ep:function(a,b,c){if(this.X(b,c)>0)throw H.f(H.T(b))
if(this.X(a,b)<0)return b
if(this.X(a,c)>0)return c
return a},
fb:function(a,b){var t
if(b>20)throw H.f(P.b6(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaM(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
a7:function(a,b){if(typeof b!=="number")throw H.f(H.T(b))
return a+b},
af:function(a,b){if(typeof b!=="number")throw H.f(H.T(b))
return a-b},
cZ:function(a,b){if(typeof b!=="number")throw H.f(H.T(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.f(H.T(b))
return a*b},
aW:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.c_(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.c_(a,b)},
c_:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.f(new P.w("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
b7:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cY:function(a,b){if(typeof b!=="number")throw H.f(H.T(b))
return(a&b)>>>0},
dl:function(a,b){if(typeof b!=="number")throw H.f(H.T(b))
return(a^b)>>>0},
aS:function(a,b){if(typeof b!=="number")throw H.f(H.T(b))
return a<b},
ay:function(a,b){if(typeof b!=="number")throw H.f(H.T(b))
return a>b},
d_:function(a,b){if(typeof b!=="number")throw H.f(H.T(b))
return a>=b},
gD:function(a){return C.a1},
$isa0:1}
J.de.prototype={
gD:function(a){return C.a0},
$isS:1,
$iso:1,
$isa0:1}
J.dd.prototype={
gD:function(a){return C.a_},
$isS:1,
$isa0:1}
J.b0.prototype={
ce:function(a,b){if(b<0)throw H.f(H.R(a,b))
if(b>=a.length)H.K(H.R(a,b))
return a.charCodeAt(b)},
aj:function(a,b){if(b>=a.length)throw H.f(H.R(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(typeof b!=="string")throw H.f(P.kg(b,null,null))
return a+b},
df:function(a,b,c){var t
if(c>a.length)throw H.f(P.b6(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
az:function(a,b){return this.df(a,b,0)},
aU:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fJ(b,null,null))
if(b>c)throw H.f(P.fJ(b,null,null))
if(c>a.length)throw H.f(P.fJ(c,null,null))
return a.substring(b,c)},
dg:function(a,b){return this.aU(a,b,null)},
fa:function(a){return a.toLowerCase()},
fd:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.aj(t,0)===133){r=J.nc(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.ce(t,q)===133?J.nd(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
es:function(a,b,c){if(c>a.length)throw H.f(P.b6(c,0,a.length,null,null))
return H.ou(a,b,c)},
X:function(a,b){var t
if(typeof b!=="string")throw H.f(H.T(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gA:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gD:function(a){return C.U},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.f(H.R(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isv:1}
H.d.prototype={$asd:null}
H.bo.prototype={
gw:function(a){return new H.dg(this,this.gl(this),0,null,[H.av(this,"bo",0)])},
aQ:function(a,b){return this.di(0,b)},
f9:function(a,b){var t,s
t=H.F([],[H.av(this,"bo",0)])
C.a.sl(t,this.gl(this))
for(s=0;s<this.gl(this);++s)t[s]=this.v(0,s)
return t},
f8:function(a){return this.f9(a,!0)}}
H.dg.prototype={
gu:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.al(t)
r=s.gl(t)
if(this.b!==r)throw H.f(new P.a8(t))
q=this.c
if(q>=r){this.sal(null)
return!1}this.sal(s.v(t,q));++this.c
return!0},
sal:function(a){this.d=a}}
H.dh.prototype={
gw:function(a){return new H.f5(null,J.bz(this.a),this.b,this.$ti)},
gl:function(a){return J.dY(this.a)},
$asa1:function(a,b){return[b]}}
H.ek.prototype={$isd:1,
$asd:function(a,b){return[b]}}
H.f5.prototype={
q:function(){var t=this.b
if(t.q()){this.sal(this.c.$1(t.gu()))
return!0}this.sal(null)
return!1},
gu:function(){return this.a},
sal:function(a){this.a=a},
$asdc:function(a,b){return[b]}}
H.bN.prototype={
gl:function(a){return J.dY(this.a)},
v:function(a,b){return this.b.$1(J.mc(this.a,b))},
$asd:function(a,b){return[b]},
$asbo:function(a,b){return[b]},
$asa1:function(a,b){return[b]}}
H.dH.prototype={
gw:function(a){return new H.hD(J.bz(this.a),this.b,this.$ti)}}
H.hD.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gu()))return!0
return!1},
gu:function(){return this.a.gu()}}
H.cr.prototype={}
H.ji.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jj.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ih.prototype={
seU:function(a){this.z=a},
seX:function(a){this.ch=a}}
H.bd.prototype={
c2:function(a,b){if(!this.f.B(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.b9()},
f2:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.au(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bT();++r.d}this.y=!1}this.b9()},
ef:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.x(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
f1:function(a){var t,s,r
if(this.ch==null)return
for(t=J.x(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.K(new P.w("removeRange"))
P.jG(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
dc:function(a,b){if(!this.r.B(0,a))return
this.db=b},
eO:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.N(0,c)
return}H.c(b===1)
t=this.cx
if(t==null){t=P.jD(null,null)
this.cx=t}t.Z(0,new H.ib(a,c))},
eN:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aN()
return}H.c(b===1)
t=this.cx
if(t==null){t=P.jD(null,null)
this.cx=t}t.Z(0,this.geV())},
eP:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.U(a)
if(b!=null)P.U(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.W(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c5(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.N(0,s)},
ap:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.V(o)
p=H.aS(o)
this.eP(q,p)
if(this.db){this.aN()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nZ(r)
u.globalState.d=H.jU(t,"$isbd")
if(t!=null)$=t.geT()
if(this.cx!=null)for(;n=this.cx,!n.gas(n);)this.cx.cE().$0()}return s},
cz:function(a){return this.b.h(0,a)},
bJ:function(a,b){var t=this.b
if(t.I(0,a))throw H.f(P.cq("Registry: ports must be registered only once."))
t.j(0,a,b)},
b9:function(){var t=this.b
if(t.gl(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aN()},
aN:function(){var t,s,r
t=this.cx
if(t!=null)t.a0(0)
for(t=this.b,s=t.gbj(t),s=s.gw(s);s.q();)s.gu().dS()
t.a0(0)
this.c.a0(0)
u.globalState.z.au(0,this.a)
this.dx.a0(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].N(0,t[r+1])
this.ch=null}},
geT:function(){return this.d},
geu:function(){return this.e}}
H.ib.prototype={
$0:function(){this.a.N(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hU.prototype={
eB:function(){var t=this.a
if(t.b===t.c)return
return t.cE()},
cG:function(){var t,s,r
t=this.eB()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.I(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gas(s)}else s=!1
else s=!1
else s=!1
if(s)H.K(P.cq("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gas(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aL(["command","close"])
r=new H.au(!0,new P.dL(0,null,null,null,null,null,0,[null,P.o])).R(r)
s.toString
self.postMessage(r)}return!1}t.eZ()
return!0},
bY:function(){if(self.window!=null)new H.hV(this).$0()
else for(;this.cG(););},
av:function(){var t,s,r,q,p
if(!u.globalState.x)this.bY()
else try{this.bY()}catch(r){t=H.V(r)
s=H.aS(r)
q=u.globalState.Q
p=P.aL(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.au(!0,P.c6(null,P.o)).R(p)
q.toString
self.postMessage(p)}}}
H.hV.prototype={
$0:function(){if(!this.a.cG())return
P.nv(C.p,this)},
$S:function(){return{func:1,v:true}}}
H.be.prototype={
eZ:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.ap(this.b)}}
H.ig.prototype={}
H.eR.prototype={
$0:function(){H.n6(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eS.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bw(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bw(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b9()},
$S:function(){return{func:1,v:true}}}
H.hM.prototype={}
H.bt.prototype={
N:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nN(b)
if(t.geu()===s){s=J.al(r)
switch(s.h(r,0)){case"pause":t.c2(s.h(r,1),s.h(r,2))
break
case"resume":t.f2(s.h(r,1))
break
case"add-ondone":t.ef(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.f1(s.h(r,1))
break
case"set-errors-fatal":t.dc(s.h(r,1),s.h(r,2))
break
case"ping":t.eO(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eN(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.au(0,s)
break}return}u.globalState.f.a.Z(0,new H.be(t,new H.ii(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bt){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gA:function(a){return this.b.a}}
H.ii.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dP(0,this.b)},
$S:function(){return{func:1}}}
H.c8.prototype={
N:function(a,b){var t,s,r
t=P.aL(["command","message","port",this,"msg",b])
s=new H.au(!0,P.c6(null,P.o)).R(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c8){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){return C.b.dl((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bq.prototype={
dS:function(){this.c=!0
this.b=null},
dP:function(a,b){if(this.c)return
this.b.$1(b)},
$isno:1}
H.hk.prototype={
dE:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Z(0,new H.be(s,new H.hl(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.cc(new H.hm(this,b),0),a)}else{H.c(a>0)
throw H.f(new P.w("Timer greater than 0."))}}}
H.hl.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hm.prototype={
$0:function(){this.a.c=null
H.j5()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ay.prototype={
gA:function(a){var t=this.a
t=C.b.b7(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ay){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.au.prototype={
R:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gl(t))
t=J.x(a)
if(!!t.$isbP)return["buffer",a]
if(!!t.$isbp)return["typed",a]
if(!!t.$isq)return this.d6(a)
if(!!t.$isn3){r=this.gd3()
q=t.gH(a)
q=H.jE(q,r,H.av(q,"a1",0),null)
q=P.kM(q,!0,H.av(q,"a1",0))
t=t.gbj(a)
t=H.jE(t,r,H.av(t,"a1",0),null)
return["map",q,P.kM(t,!0,H.av(t,"a1",0))]}if(!!t.$iskJ)return this.d7(a)
if(!!t.$isa)this.cU(a)
if(!!t.$isno)this.aw(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbt)return this.d8(a)
if(!!t.$isc8)return this.d9(a)
if(!!t.$isbi){p=a.$static_name
if(p==null)this.aw(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isay)return["capability",a.a]
if(!(a instanceof P.r))this.cU(a)
return["dart",u.classIdExtractor(a),this.d5(u.classFieldsExtractor(a))]},
aw:function(a,b){throw H.f(new P.w((b==null?"Can't transmit:":b)+" "+H.i(a)))},
cU:function(a){return this.aw(a,null)},
d6:function(a){var t
H.c(typeof a!=="string")
t=this.d4(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aw(a,"Can't serialize indexable: ")},
d4:function(a){var t,s
t=[]
C.a.sl(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.R(a[s])
return t},
d5:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.R(a[t]))
return a},
d7:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aw(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sl(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.R(a[t[r]])
return["js-object",t,s]},
d9:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d8:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.bc.prototype={
a1:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.f(P.kf("Bad serialized message: "+H.i(a)))
switch(C.a.geJ(a)){case"ref":H.c(J.L(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.c(J.L(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.c(J.L(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.c(J.L(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
s=H.F(this.ao(t),[null])
s.fixed$length=Array
return s
case"extendable":H.c(J.L(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.F(this.ao(t),[null])
case"mutable":H.c(J.L(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.ao(t)
case"const":H.c(J.L(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
s=H.F(this.ao(t),[null])
s.fixed$length=Array
return s
case"map":return this.eE(a)
case"sendport":return this.eF(a)
case"raw sendport":H.c(J.L(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.eD(a)
case"function":H.c(J.L(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.c(J.L(a[0],"capability"))
return new H.ay(a[1])
case"dart":H.c(J.L(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.i(this.b,p)
this.ao(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.f("couldn't deserialize: "+H.i(a))}},
ao:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a1(a[t]))
return a},
eE:function(a){var t,s,r,q,p
H.c(J.L(a[0],"map"))
t=a[1]
s=a[2]
r=P.D()
C.a.i(this.b,r)
t=J.mq(t,this.geC()).f8(0)
for(q=J.al(s),p=0;p<t.length;++p)r.j(0,t[p],this.a1(q.h(s,p)))
return r},
eF:function(a){var t,s,r,q,p,o,n
H.c(J.L(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cz(r)
if(o==null)return
n=new H.bt(o,s)}else n=new H.c8(t,r,s)
C.a.i(this.b,n)
return n},
eD:function(a){var t,s,r,q,p,o
H.c(J.L(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.al(t),p=J.al(s),o=0;o<q.gl(t);++o)r[q.h(t,o)]=this.a1(p.h(s,o))
return r}}
H.fM.prototype={}
H.hr.prototype={
U:function(a){var t,s,r
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
H.ds.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eY.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.hv.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jk.prototype={
$1:function(a){if(!!J.x(a).$isbl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
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
H.j0.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.j1.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j2.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j3.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j4.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bi.prototype={
k:function(a){return"Closure '"+H.du(this).trim()+"'"},
$isjw:1,
gff:function(){return this},
$D:null}
H.hf.prototype={}
H.h2.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bA.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bA))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var t,s
t=this.c
if(t==null)s=H.b5(this.a)
else s=typeof t!=="object"?J.ax(t):H.b5(t)
return(s^H.b5(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.fH(t)}}
H.ht.prototype={
k:function(a){return this.a}}
H.e6.prototype={
k:function(a){return this.a}}
H.fT.prototype={
k:function(a){return"RuntimeError: "+H.i(this.a)}}
H.hG.prototype={
k:function(a){return C.e.a7("Assertion failed: ",P.jv(this.a))}}
H.aO.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gA:function(a){return J.ax(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aO){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ap.prototype={
gl:function(a){return this.a},
gas:function(a){return this.a===0},
gH:function(a){return new H.f1(this,[H.am(this,0)])},
gbj:function(a){return H.jE(this.gH(this),new H.eX(this),H.am(this,0),H.am(this,1))},
I:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bP(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bP(s,b)}else return this.eQ(b)},
eQ:function(a){var t=this.d
if(t==null)return!1
return this.ar(this.aI(t,this.aq(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.am(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.am(r,b)
return s==null?null:s.b}else return this.eR(b)},
eR:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aI(t,this.aq(a))
r=this.ar(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b4()
this.b=t}this.bH(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b4()
this.c=s}this.bH(s,b,c)}else{r=this.d
if(r==null){r=this.b4()
this.d=r}q=this.aq(b)
p=this.aI(r,q)
if(p==null)this.b6(r,q,[this.b5(b,c)])
else{o=this.ar(p,b)
if(o>=0)p[o].b=c
else p.push(this.b5(b,c))}}},
au:function(a,b){if(typeof b==="string")return this.bW(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bW(this.c,b)
else return this.eS(b)},
eS:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aI(t,this.aq(a))
r=this.ar(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c0(q)
return q.b},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aL:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.f(new P.a8(this))
t=t.c}},
bH:function(a,b,c){var t=this.am(a,b)
if(t==null)this.b6(a,b,this.b5(b,c))
else t.b=c},
bW:function(a,b){var t
if(a==null)return
t=this.am(a,b)
if(t==null)return
this.c0(t)
this.bR(a,b)
return t.b},
b5:function(a,b){var t,s
t=new H.f0(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
c0:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.c(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.c(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
aq:function(a){return J.ax(a)&0x3ffffff},
ar:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.L(a[s].a,b))return s
return-1},
k:function(a){return P.ne(this)},
am:function(a,b){return a[b]},
aI:function(a,b){return a[b]},
b6:function(a,b,c){H.c(c!=null)
a[b]=c},
bR:function(a,b){delete a[b]},
bP:function(a,b){return this.am(a,b)!=null},
b4:function(){var t=Object.create(null)
this.b6(t,"<non-identifier-key>",t)
this.bR(t,"<non-identifier-key>")
return t},
$isn3:1}
H.eX.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.f0.prototype={}
H.f1.prototype={
gl:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.f2(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f2.prototype={
gu:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.f(new P.a8(t))
else{t=this.c
if(t==null){this.sbG(null)
return!1}else{this.sbG(t.a)
this.c=this.c.c
return!0}}},
sbG:function(a){this.d=a}}
H.iX.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iY.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.v]}}}
H.iZ.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.v]}}}
H.bP.prototype={
gD:function(a){return C.L},
$isbP:1}
H.bp.prototype={$isbp:1}
H.fg.prototype={
gD:function(a){return C.M}}
H.dk.prototype={
gl:function(a){return a.length},
$isq:1,
$asq:function(){},
$ist:1,
$ast:function(){}}
H.dl.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
a[b]=c}}
H.dm.prototype={
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
a[b]=c},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.dj.prototype={
gD:function(a){return C.N},
$isd:1,
$asd:function(){return[P.S]},
$isb:1,
$asb:function(){return[P.S]},
$iseH:1}
H.fh.prototype={
gD:function(a){return C.O},
$isd:1,
$asd:function(){return[P.S]},
$isb:1,
$asb:function(){return[P.S]}}
H.fi.prototype={
gD:function(a){return C.P},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fj.prototype={
gD:function(a){return C.Q},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskG:1}
H.fk.prototype={
gD:function(a){return C.R},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fl.prototype={
gD:function(a){return C.V},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isl7:1}
H.fm.prototype={
gD:function(a){return C.W},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isl8:1}
H.dn.prototype={
gD:function(a){return C.X},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fn.prototype={
gD:function(a){return C.Y},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.K(H.R(a,b))
return a[b]},
$isd:1,
$asd:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isl9:1}
H.bQ.prototype={
$asq:function(){},
$isd:1,
$asd:function(){return[P.o]},
$ast:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bR.prototype={
$asq:function(){},
$isd:1,
$asd:function(){return[P.S]},
$ast:function(){},
$isb:1,
$asb:function(){return[P.S]}}
H.bS.prototype={
$asq:function(){},
$asd:function(){return[P.S]},
$ast:function(){},
$asb:function(){return[P.S]}}
H.bT.prototype={
$asq:function(){},
$asd:function(){return[P.o]},
$ast:function(){},
$asb:function(){return[P.o]}}
P.hI.prototype={
$1:function(a){var t,s
H.j5()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hH.prototype={
$1:function(a){var t,s
t=this.a
H.c(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hJ.prototype={
$0:function(){H.j5()
this.a.$0()},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){H.j5()
this.a.$0()},
$S:function(){return{func:1}}}
P.hO.prototype={}
P.iz.prototype={
er:function(a,b){var t=this.a
if(t.a!==0)throw H.f(new P.aN("Future already completed"))
t.b0(b)}}
P.dK.prototype={
eY:function(a){if(this.c!==6)return!0
H.c(!0)
return this.b.b.bh(this.d,a.a)},
eM:function(a){var t,s
t=(this.c&2)!==0
if(t){H.c(t)
t=this.e!=null}else t=!1
H.c(t)
s=this.e
t=this.b.b
if(H.bw(s,{func:1,args:[P.r,P.bX]}))return t.f3(s,a.a,a.b)
else return t.bh(s,a.a)}}
P.aF.prototype={
cK:function(a,b){var t,s,r
t=$.I
if(t!==C.d){t.toString
if(b!=null)b=P.nR(b,t)}s=new P.aF(0,t,null,[null])
r=b==null?1:3
this.bI(new P.dK(null,s,r,a,b,[H.am(this,0),null]))
return s},
cJ:function(a){return this.cK(a,null)},
bL:function(a){H.c(this.a<4)
H.c(a.a>=4)
this.a=a.a
this.c=a.c},
bI:function(a){var t
H.c(a.a==null)
t=this.a
if(t<=1){a.a=H.jU(this.c,"$isdK")
this.c=a}else{if(t===2){H.c(!0)
t=this.c
if(t.a<4){t.bI(a)
return}this.bL(t)}H.c(this.a>=4)
t=this.b
t.toString
P.iK(null,null,t,new P.i_(this,a))}},
bV:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.c(!0)
s=this.c
if(s.a<4){s.bV(a)
return}this.bL(s)}H.c(this.a>=4)
t.a=this.an(a)
s=this.b
s.toString
P.iK(null,null,s,new P.i3(t,this))}},
bX:function(){H.c(this.a<4)
var t=this.c
this.c=null
return this.an(t)},
an:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
b0:function(a){var t,s
H.c(this.a<4)
t=this.$ti
if(H.iL(a,"$iseL",t,"$aseL"))if(H.iL(a,"$isaF",t,null))P.ld(a,this)
else P.nH(a,this)
else{s=this.bX()
H.c(this.a<4)
this.a=4
this.c=a
P.c2(this,s)}},
aF:function(a,b){var t
H.c(this.a<4)
t=this.bX()
H.c(this.a<4)
this.a=8
this.c=new P.bh(a,b)
P.c2(this,t)},
dU:function(a){return this.aF(a,null)},
$iseL:1,
gb8:function(){return this.a},
ge9:function(){return this.c}}
P.i_.prototype={
$0:function(){P.c2(this.a,this.b)},
$S:function(){return{func:1}}}
P.i3.prototype={
$0:function(){P.c2(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.i0.prototype={
$1:function(a){var t=this.a
H.c(t.a===1)
H.c(t.a===1)
t.a=0
t.b0(a)},
$S:function(){return{func:1,args:[,]}}}
P.i1.prototype={
$2:function(a,b){var t=this.a
H.c(t.a===1)
t.aF(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.i2.prototype={
$0:function(){this.a.aF(this.b,this.c)},
$S:function(){return{func:1}}}
P.i6.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.c((p&1)===0)
o=(p&2)===0
H.c(o)
t=null
try{H.c(o)
H.c(p===8)
t=q.b.b.cF(q.d)}catch(n){s=H.V(n)
r=H.aS(n)
if(this.c){q=this.a.a
H.c(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.c(q.a===8)
p.b=q.c}else p.b=new P.bh(s,r)
p.a=!0
return}if(!!J.x(t).$iseL){if(t instanceof P.aF&&t.gb8()>=4){if(t.gb8()===8){q=t
H.c(q.gb8()===8)
p=this.b
p.b=q.ge9()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cJ(new P.i7(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i7.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i5.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.c((r.c&1)!==0)
this.a.b=r.b.b.bh(r.d,this.c)}catch(q){t=H.V(q)
s=H.aS(q)
r=this.a
r.b=new P.bh(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i4.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.c(q.a===8)
t=q.c
q=this.c
if(q.eY(t)){H.c((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eM(t)
p.a=!1}}catch(o){s=H.V(o)
r=H.aS(o)
q=this.a
p=q.a
H.c(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.c(q.a===8)
m.b=q.c}else m.b=new P.bh(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dI.prototype={}
P.h6.prototype={
gl:function(a){var t,s
t={}
s=new P.aF(0,$.I,null,[P.o])
t.a=0
this.eW(new P.h8(t),!0,new P.h9(t,s),s.gdT())
return s}}
P.h8.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h9.prototype={
$0:function(){this.b.b0(this.a.a)},
$S:function(){return{func:1}}}
P.h7.prototype={}
P.bh.prototype={
k:function(a){return H.i(this.a)},
$isbl:1}
P.iG.prototype={}
P.iJ.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dt()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.f(t)
r=H.f(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ik.prototype={
f4:function(a){var t,s,r
try{if(C.d===$.I){a.$0()
return}P.lj(null,null,this,a)}catch(r){t=H.V(r)
s=H.aS(r)
P.iI(null,null,this,t,s)}},
f5:function(a,b){var t,s,r
try{if(C.d===$.I){a.$1(b)
return}P.lk(null,null,this,a,b)}catch(r){t=H.V(r)
s=H.aS(r)
P.iI(null,null,this,t,s)}},
el:function(a){return new P.im(this,a)},
ba:function(a){return new P.il(this,a)},
em:function(a){return new P.io(this,a)},
h:function(a,b){return},
cF:function(a){if($.I===C.d)return a.$0()
return P.lj(null,null,this,a)},
bh:function(a,b){if($.I===C.d)return a.$1(b)
return P.lk(null,null,this,a,b)},
f3:function(a,b,c){if($.I===C.d)return a.$2(b,c)
return P.nS(null,null,this,a,b,c)}}
P.im.prototype={
$0:function(){return this.a.cF(this.b)},
$S:function(){return{func:1}}}
P.il.prototype={
$0:function(){return this.a.f4(this.b)},
$S:function(){return{func:1}}}
P.io.prototype={
$1:function(a){return this.a.f5(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dL.prototype={
aq:function(a){return H.om(a)&0x3ffffff},
ar:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.ic.prototype={
gw:function(a){var t=new P.c5(this,this.r,null,null,[null])
t.c=this.e
return t},
gl:function(a){return this.a},
F:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dV(b)},
dV:function(a){var t=this.d
if(t==null)return!1
return this.aH(t[this.aG(a)],a)>=0},
cz:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.F(0,a)?a:null
else return this.e3(a)},
e3:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aG(a)]
r=this.aH(s,a)
if(r<0)return
return J.bx(s,r).gdX()},
i:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.c(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bM(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.c(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bM(r,b)}else return this.Z(0,b)},
Z:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.nL()
this.d=t}s=this.aG(b)
r=t[s]
if(r==null){q=[this.b_(b)]
H.c(q!=null)
t[s]=q}else{if(this.aH(r,b)>=0)return!1
r.push(this.b_(b))}return!0},
au:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bN(this.c,b)
else return this.e4(0,b)},
e4:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aG(b)]
r=this.aH(s,b)
if(r<0)return!1
this.bO(s.splice(r,1)[0])
return!0},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bM:function(a,b){var t
if(a[b]!=null)return!1
t=this.b_(b)
H.c(!0)
a[b]=t
return!0},
bN:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bO(t)
delete a[b]
return!0},
b_:function(a){var t,s
t=new P.id(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bO:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.c(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.c(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
aG:function(a){return J.ax(a)&0x3ffffff},
aH:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.L(a[s].a,b))return s
return-1},
$isd:1,
$asd:null}
P.id.prototype={
gdX:function(){return this.a}}
P.c5.prototype={
gu:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.f(new P.a8(t))
else{t=this.c
if(t==null){this.sak(null)
return!1}else{this.sak(t.a)
this.c=this.c.b
return!0}}},
sak:function(a){this.d=a}}
P.ia.prototype={}
P.df.prototype={}
P.y.prototype={
gw:function(a){return new H.dg(a,this.gl(a),0,null,[H.av(a,"y",0)])},
v:function(a,b){return this.h(a,b)},
cA:function(a,b){return new H.bN(a,b,[H.av(a,"y",0),null])},
eL:function(a,b,c){var t,s,r
t=this.gl(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gl(a))throw H.f(new P.a8(a))}return s},
cu:function(a,b,c,d){var t
P.jG(b,c,this.gl(a),null,null,null)
for(t=b;t<c;++t)this.j(a,t,d)},
k:function(a){return P.eT(a,"[","]")},
$isd:1,
$asd:null,
$isb:1,
$asb:null}
P.f6.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.f3.prototype={
gw:function(a){return new P.ie(this,this.c,this.d,this.b,null,this.$ti)},
gas:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
v:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ay(0,b)||b>=t)H.K(P.G(b,this,"index",null,t))
return this.a[(C.b.a7(this.b,b)&this.a.length-1)>>>0]},
a0:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eT(this,"{","}")},
cE:function(){var t,s,r
t=this.b
if(t===this.c)throw H.f(H.eU());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
Z:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bT();++this.d},
bT:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.F(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bt(s,0,q,t,r)
C.a.bt(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbZ(s)},
dw:function(a,b){var t
H.c(!0)
t=new Array(8)
t.fixed$length=Array
this.sbZ(H.F(t,[b]))},
sbZ:function(a){this.a=a},
$asd:null}
P.ie.prototype={
gu:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.K(new P.a8(t))
s=this.d
if(s===this.b){this.sak(null)
return!1}this.sak(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sak:function(a){this.e=a}}
P.fW.prototype={
L:function(a,b){var t
for(t=J.bz(b);t.q();)this.i(0,t.gu())},
k:function(a){return P.eT(this,"{","}")},
$isd:1,
$asd:null}
P.fV.prototype={}
P.bV.prototype={$isd:1,$asd:null,$isb:1,$asb:null}
P.aG.prototype={}
P.N.prototype={}
P.bk.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bk))return!1
return this.a===b.a&&this.b===b.b},
X:function(a,b){return C.b.X(this.a,b.a)},
gA:function(a){var t=this.a
return(t^C.b.b7(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mP(H.nm(this))
s=P.ck(H.nk(this))
r=P.ck(H.ng(this))
q=P.ck(H.nh(this))
p=P.ck(H.nj(this))
o=P.ck(H.nl(this))
n=P.mQ(H.ni(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isN:1,
$asN:function(){return[P.bk]}}
P.S.prototype={$isN:1,
$asN:function(){return[P.a0]}}
P.aI.prototype={
aS:function(a,b){return C.b.aS(this.a,b.gdW())},
ay:function(a,b){return C.b.ay(this.a,b.gdW())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aI))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
X:function(a,b){return C.b.X(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ej()
s=this.a
if(s<0)return"-"+new P.aI(0-s).k(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.ei().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isN:1,
$asN:function(){return[P.aI]}}
P.ei.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.v,args:[P.o]}}}
P.ej.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.v,args:[P.o]}}}
P.bl.prototype={}
P.ch.prototype={
k:function(a){return"Assertion failed"}}
P.dt.prototype={
k:function(a){return"Throw of null."}}
P.an.prototype={
gb2:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb1:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.i(t)
q=this.gb2()+s+r
if(!this.a)return q
p=this.gb1()
o=P.jv(this.b)
return q+p+": "+H.i(o)}}
P.dw.prototype={
gb2:function(){return"RangeError"},
gb1:function(){var t,s,r
H.c(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.eQ.prototype={
gb2:function(){return"RangeError"},
gb1:function(){H.c(this.a)
if(J.lV(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gl:function(a){return this.f}}
P.w.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dG.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aN.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a8.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.jv(t))+"."}}
P.dz.prototype={
k:function(a){return"Stack Overflow"},
$isbl:1}
P.ea.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hZ.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.eK.prototype={
k:function(a){var t,s,r
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.e.aU(r,0,75)+"..."
return s+"\n"+r}}
P.el.prototype={
k:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.K(P.kg(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kO(b,"expando$values")
return s==null?null:H.kO(s,t)}}
P.o.prototype={$isN:1,
$asN:function(){return[P.a0]}}
P.a1.prototype={
aQ:function(a,b){return new H.dH(this,b,[H.av(this,"a1",0)])},
gl:function(a){var t,s
H.c(!this.$isd)
t=this.gw(this)
for(s=0;t.q();)++s
return s},
ga9:function(a){var t,s
t=this.gw(this)
if(!t.q())throw H.f(H.eU())
s=t.gu()
if(t.q())throw H.f(H.nb())
return s},
v:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.mG("index"))
if(b<0)H.K(P.b6(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.q();){r=t.gu()
if(b===s)return r;++s}throw H.f(P.G(b,this,"index",null,s))},
k:function(a){return P.n9(this,"(",")")}}
P.dc.prototype={}
P.b.prototype={$isd:1,$asd:null,$asb:null}
P.aM.prototype={}
P.b3.prototype={
gA:function(a){return P.r.prototype.gA.call(this,this)},
k:function(a){return"null"}}
P.a0.prototype={$isN:1,
$asN:function(){return[P.a0]}}
P.r.prototype={constructor:P.r,$isr:1,
B:function(a,b){return this===b},
gA:function(a){return H.b5(this)},
k:function(a){return H.fH(this)},
gD:function(a){return new H.aO(H.iV(this),null)},
toString:function(){return this.k(this)}}
P.bX.prototype={}
P.v.prototype={$isN:1,
$asN:function(){return[P.v]}}
P.bY.prototype={
gl:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gab:function(){return this.a}}
W.n.prototype={}
W.e_.prototype={
k:function(a){return String(a)},
$isa:1}
W.e0.prototype={
k:function(a){return String(a)},
$isa:1}
W.a7.prototype={$isr:1}
W.e3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a7]},
$isd:1,
$asd:function(){return[W.a7]},
$ist:1,
$ast:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.ci.prototype={}
W.aW.prototype={$isa:1,$isaW:1,$isj:1}
W.cj.prototype={
d0:function(a,b,c){var t=this.dZ(a,b,P.o2(c,null))
return t},
dZ:function(a,b,c){return a.getContext(b,c)}}
W.e5.prototype={
aR:function(a){return P.iO(a.getContextAttributes())}}
W.aX.prototype={$isa:1,
gl:function(a){return a.length}}
W.e8.prototype={$isa:1,$isj:1}
W.B.prototype={$isr:1}
W.bj.prototype={
bK:function(a,b){var t,s
t=$.$get$ku()
s=t[b]
if(typeof s==="string")return s
s=this.ec(a,b)
t[b]=s
return s},
ec:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mR()+b
if(t in a)return t
return b},
gl:function(a){return a.length}}
W.e9.prototype={}
W.eb.prototype={
h:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gP:function(a){return a.z}}
W.cl.prototype={}
W.bB.prototype={
eg:function(a,b){return a.adoptNode(b)},
bQ:function(a,b){return a.createEvent(b)},
bk:function(a,b){return a.getElementsByTagName(b)},
d1:function(a,b){return a.getElementById(b)},
f_:function(a,b){return a.querySelector(b)}}
W.cm.prototype={$isa:1}
W.ed.prototype={
k:function(a){return String(a)}}
W.cn.prototype={
ey:function(a,b){return a.createHTMLDocument(b)}}
W.ee.prototype={
gax:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gP:function(a){return a.z}}
W.co.prototype={
gax:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gP:function(a){return a.z}}
W.cp.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga6(a))+" x "+H.i(this.ga5(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.x(b)
if(!t.$isP)return!1
return a.left===t.gbe(b)&&a.top===t.gbi(b)&&this.ga6(a)===t.ga6(b)&&this.ga5(a)===t.ga5(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga6(a)
q=this.ga5(a)
return W.lg(W.bf(W.bf(W.bf(W.bf(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga5:function(a){return a.height},
gbe:function(a){return a.left},
gbi:function(a){return a.top},
ga6:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isP:1,
$asP:function(){}}
W.ef.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.v]},
$isd:1,
$asd:function(){return[P.v]},
$ist:1,
$ast:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.eg.prototype={
gl:function(a){return a.length}}
W.a9.prototype={
gej:function(a){return new W.hT(a)},
k:function(a){return a.localName},
T:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kC
if(t==null){t=H.F([],[W.dq])
s=new W.dr(t)
C.a.i(t,W.le(null))
C.a.i(t,W.lh())
$.kC=s
d=s}else d=t
t=$.kB
if(t==null){t=new W.dO(d)
$.kB=t
c=t}else{t.a=d
c=t}}if($.aJ==null){t=document
s=t.implementation
s=(s&&C.y).ey(s,"")
$.aJ=s
$.ju=s.createRange()
s=$.aJ
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aJ.head;(t&&C.z).W(t,r)}t=$.aJ
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jU(s,"$isaW")}t=$.aJ
if(!!this.$isaW)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aJ.body;(t&&C.j).W(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.F(C.J,a.tagName)){t=$.ju;(t&&C.v).d2(t,q)
t=$.ju
p=(t&&C.v).ew(t,b)}else{q.innerHTML=b
p=$.aJ.createDocumentFragment()
for(t=J.m(p);s=q.firstChild,s!=null;)t.W(p,s)}t=$.aJ.body
if(q==null?t!=null:q!==t)J.mr(q)
c.br(p)
C.f.eg(document,p)
return p},
ex:function(a,b,c){return this.T(a,b,c,null)},
dd:function(a,b,c,d){a.textContent=null
this.W(a,this.T(a,b,c,d))},
bs:function(a,b){return this.dd(a,b,null,null)},
ae:function(a,b){return a.getAttribute(b)},
e5:function(a,b){return a.removeAttribute(b)},
gcB:function(a){return new W.aR(a,"change",!1,[W.k])},
gcC:function(a){return new W.aR(a,"input",!1,[W.k])},
gcD:function(a){return new W.aR(a,"mousemove",!1,[W.O])},
$isa:1,
$isr:1,
$isa9:1,
$isj:1,
$isu:1,
gf6:function(a){return a.tagName}}
W.iM.prototype={
$1:function(a){return!!J.x(a).$isa9},
$S:function(){return{func:1,args:[,]}}}
W.k.prototype={
e0:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isr:1,
$isk:1}
W.j.prototype={
dQ:function(a,b,c,d){return a.addEventListener(b,H.cc(c,1),!1)},
co:function(a,b){return a.dispatchEvent(b)},
$isr:1,
$isj:1}
W.aa.prototype={$isr:1}
W.eE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.aa]},
$isd:1,
$asd:function(){return[W.aa]},
$ist:1,
$ast:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.eF.prototype={
gl:function(a){return a.length}}
W.eJ.prototype={
gl:function(a){return a.length}}
W.ab.prototype={$isr:1}
W.cw.prototype={}
W.eM.prototype={
gl:function(a){return a.length}}
W.bK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$ist:1,
$ast:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cx.prototype={}
W.eN.prototype={
N:function(a,b){return a.send(b)}}
W.bL.prototype={}
W.bm.prototype={$isa:1,$isa9:1,$isj:1,$isbm:1}
W.b2.prototype={$isr:1,$isk:1,$isb2:1}
W.f4.prototype={
k:function(a){return String(a)}}
W.fc.prototype={
gl:function(a){return a.length}}
W.fd.prototype={
fg:function(a,b,c){return a.send(b,c)},
N:function(a,b){return a.send(b)}}
W.bO.prototype={}
W.ac.prototype={$isr:1}
W.fe.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ac]},
$isd:1,
$asd:function(){return[W.ac]},
$ist:1,
$ast:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.O.prototype={$isr:1,$isk:1,$isO:1}
W.fo.prototype={$isa:1}
W.Y.prototype={
ga9:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.f(new P.aN("No elements"))
if(s>1)throw H.f(new P.aN("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.m(s),p=0;p<r;++p)q.W(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lX(t,c,C.t.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.cs(t,t.length,-1,null,[H.av(t,"C",0)])},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){return C.t.h(this.a.childNodes,b)},
$asd:function(){return[W.u]},
$asdf:function(){return[W.u]},
$asb:function(){return[W.u]},
$asbV:function(){return[W.u]}}
W.u.prototype={
f0:function(a){var t=a.parentNode
if(t!=null)J.by(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.dh(a):t},
W:function(a,b){return a.appendChild(b)},
e6:function(a,b){return a.removeChild(b)},
e7:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
$isj:1,
$isu:1,
gbf:function(a){return a.previousSibling}}
W.dp.prototype={
bg:function(a){return a.previousNode()}}
W.bU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$ist:1,
$ast:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.fx.prototype={$isa:1}
W.fA.prototype={
gl:function(a){return a.length}}
W.ad.prototype={$isr:1,
gl:function(a){return a.length}}
W.fC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ad]},
$isd:1,
$asd:function(){return[W.ad]},
$ist:1,
$ast:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fG.prototype={
N:function(a,b){return a.send(b)}}
W.dv.prototype={
ew:function(a,b){return a.createContextualFragment(b)},
d2:function(a,b){return a.selectNodeContents(b)}}
W.fS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gP:function(a){return a.z}}
W.dx.prototype={
N:function(a,b){return a.send(b)}}
W.fU.prototype={
gl:function(a){return a.length}}
W.fY.prototype={$isa:1,$isj:1}
W.ae.prototype={$isr:1,$isj:1}
W.fZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ae]},
$isd:1,
$asd:function(){return[W.ae]},
$ist:1,
$ast:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.af.prototype={$isr:1}
W.h0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.af]},
$isd:1,
$asd:function(){return[W.af]},
$ist:1,
$ast:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.ag.prototype={$isr:1,
gl:function(a){return a.length}}
W.h5.prototype={
h:function(a,b){return this.bS(a,b)},
aL:function(a,b){var t,s
for(t=0;!0;++t){s=this.e2(a,t)
if(s==null)return
b.$2(s,this.bS(a,s))}},
gl:function(a){return a.length},
bS:function(a,b){return a.getItem(b)},
e2:function(a,b){return a.key(b)}}
W.a3.prototype={$isr:1}
W.at.prototype={}
W.dA.prototype={
T:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aV(a,b,c,d)
t=W.mT("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.Y(s).L(0,new W.Y(t))
return s}}
W.hd.prototype={
T:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aV(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.T(t.createElement("table"),b,c,d)
t.toString
t=new W.Y(t)
r=t.ga9(t)
r.toString
t=new W.Y(r)
q=t.ga9(t)
s.toString
q.toString
new W.Y(s).L(0,new W.Y(q))
return s}}
W.he.prototype={
T:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aV(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.w.T(t.createElement("table"),b,c,d)
t.toString
t=new W.Y(t)
r=t.ga9(t)
s.toString
r.toString
new W.Y(s).L(0,new W.Y(r))
return s}}
W.bZ.prototype={$isbZ:1}
W.ah.prototype={$isr:1,$isj:1}
W.a4.prototype={$isr:1,$isj:1}
W.hh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a4]},
$isd:1,
$asd:function(){return[W.a4]},
$ist:1,
$ast:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.hi.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ah]},
$isd:1,
$asd:function(){return[W.ah]},
$ist:1,
$ast:function(){return[W.ah]},
$isb:1,
$asb:function(){return[W.ah]}}
W.hj.prototype={
gl:function(a){return a.length}}
W.ai.prototype={$isr:1}
W.b8.prototype={$isr:1,$isk:1,$isb8:1}
W.hn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ai]},
$isd:1,
$asd:function(){return[W.ai]},
$ist:1,
$ast:function(){return[W.ai]},
$isb:1,
$asb:function(){return[W.ai]}}
W.ho.prototype={
gl:function(a){return a.length}}
W.br.prototype={}
W.hq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gP:function(a){return a.z}}
W.dF.prototype={
bg:function(a){return a.previousNode()}}
W.aP.prototype={}
W.hw.prototype={
k:function(a){return String(a)},
$isa:1}
W.hy.prototype={
gl:function(a){return a.length}}
W.hB.prototype={
gl:function(a){return a.length}}
W.hC.prototype={
N:function(a,b){return a.send(b)}}
W.ba.prototype={
geA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(new P.w("deltaY is not supported"))},
$isr:1,
$isk:1,
$isO:1,
$isba:1}
W.c1.prototype={
gei:function(a){var t,s
t=P.a0
s=new P.aF(0,$.I,null,[t])
this.dY(a)
this.e8(a,W.lm(new W.hE(new P.iz(s,[t]))))
return s},
e8:function(a,b){return a.requestAnimationFrame(H.cc(b,1))},
dY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1,
$isj:1}
W.hE.prototype={
$1:function(a){this.a.er(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hF.prototype={$isa:1,$isj:1}
W.bb.prototype={$isa:1}
W.hN.prototype={
k:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
B:function(a,b){var t,s,r
if(b==null)return!1
t=J.x(b)
if(!t.$isP)return!1
s=a.left
r=t.gbe(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbi(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga6(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga5(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){var t,s,r,q
t=J.ax(a.left)
s=J.ax(a.top)
r=J.ax(a.width)
q=J.ax(a.height)
return W.lg(W.bf(W.bf(W.bf(W.bf(0,t),s),r),q))},
$isP:1,
$asP:function(){},
ga5:function(a){return a.height},
gbe:function(a){return a.left},
gbi:function(a){return a.top},
ga6:function(a){return a.width}}
W.dJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.P]},
$isd:1,
$asd:function(){return[P.P]},
$ist:1,
$ast:function(){return[P.P]},
$isb:1,
$asb:function(){return[P.P]}}
W.hP.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.B]},
$isd:1,
$asd:function(){return[W.B]},
$ist:1,
$ast:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]}}
W.hR.prototype={$isa:1}
W.hS.prototype={
ga5:function(a){return a.height},
ga6:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i8.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ab]},
$isd:1,
$asd:function(){return[W.ab]},
$ist:1,
$ast:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.i9.prototype={$isa:1,$isj:1}
W.dM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.u]},
$isd:1,
$asd:function(){return[W.u]},
$ist:1,
$ast:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.it.prototype={$isa:1,$isj:1}
W.iw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ag]},
$isd:1,
$asd:function(){return[W.ag]},
$ist:1,
$ast:function(){return[W.ag]},
$isb:1,
$asb:function(){return[W.ag]}}
W.ix.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.a3]},
$isd:1,
$asd:function(){return[W.a3]},
$ist:1,
$ast:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.iE.prototype={$isa:1}
W.iF.prototype={$isa:1}
W.hL.prototype={
aL:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.m(r),p=0;p<t.length;t.length===s||(0,H.A)(t),++p){o=t[p]
b.$2(o,q.ae(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.F([],[P.v])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
ge_:function(){return this.a}}
W.hT.prototype={
h:function(a,b){return J.jr(this.a,b)},
gl:function(a){return this.gH(this).length}}
W.hW.prototype={
eW:function(a,b,c,d){return W.Z(this.a,this.b,a,!1,H.am(this,0))}}
W.aR.prototype={}
W.hX.prototype={
ee:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lW(r,this.c,t,!1)}},
dL:function(a,b,c,d,e){this.ee()}}
W.hY.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c4.prototype={
ac:function(a){return $.$get$lf().F(0,W.bC(a))},
a_:function(a,b,c){var t,s,r
t=W.bC(a)
s=$.$get$jL()
r=s.h(0,H.i(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dM:function(a){var t,s
t=$.$get$jL()
if(t.gas(t)){for(s=0;s<262;++s)t.j(0,C.I[s],W.o9())
for(s=0;s<12;++s)t.j(0,C.l[s],W.oa())}}}
W.C.prototype={
gw:function(a){return new W.cs(a,this.gl(a),-1,null,[H.av(a,"C",0)])},
$isd:1,
$asd:null,
$isb:1,
$asb:null}
W.dr.prototype={
ac:function(a){return C.a.c3(this.a,new W.fq(a))},
a_:function(a,b,c){return C.a.c3(this.a,new W.fp(a,b,c))}}
W.fq.prototype={
$1:function(a){return a.ac(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fp.prototype={
$1:function(a){return a.a_(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c7.prototype={
ac:function(a){return this.a.F(0,W.bC(a))},
a_:function(a,b,c){var t,s
t=W.bC(a)
s=this.c
if(s.F(0,H.i(t)+"::"+b))return this.d.eh(c)
else if(s.F(0,"*::"+b))return this.d.eh(c)
else{s=this.b
if(s.F(0,H.i(t)+"::"+b))return!0
else if(s.F(0,"*::"+b))return!0
else if(s.F(0,H.i(t)+"::*"))return!0
else if(s.F(0,"*::*"))return!0}return!1},
dO:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aQ(0,new W.iu())
s=b.aQ(0,new W.iv())
this.b.L(0,t)
r=this.c
r.L(0,C.K)
r.L(0,s)}}
W.iu.prototype={
$1:function(a){return!C.a.F(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.iv.prototype={
$1:function(a){return C.a.F(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.iA.prototype={
a_:function(a,b,c){if(this.dk(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jr(a,"template")==="")return this.e.F(0,b)
return!1}}
W.iB.prototype={
$1:function(a){return"TEMPLATE::"+H.i(a)},
$S:function(){return{func:1,args:[,]}}}
W.iy.prototype={
ac:function(a){var t=J.x(a)
if(!!t.$isbW)return!1
t=!!t.$isM
if(t&&W.bC(a)==="foreignObject")return!1
if(t)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.e.az(b,"on"))return!1
return this.ac(a)}}
W.cs.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbU(J.bx(this.a,t))
this.c=t
return!0}this.sbU(null)
this.c=s
return!1},
gu:function(){return this.d},
sbU:function(a){this.d=a}}
W.hQ.prototype={$isa:1,$isj:1}
W.dq.prototype={}
W.is.prototype={}
W.dO.prototype={
br:function(a){new W.iC(this).$2(a,null)},
aJ:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.by(t,a)}else J.by(b,a)},
eb:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mg(a)
r=J.jr(s.ge_(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.V(n)}p="element unprintable"
try{p=J.W(a)}catch(n){H.V(n)}try{o=W.bC(a)
this.ea(a,b,t,p,o,s,r)}catch(n){if(H.V(n) instanceof P.an)throw n
else{this.aJ(a,b)
window
m="Removing corrupted element "+H.i(p)
if(typeof console!="undefined")console.warn(m)}}},
ea:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aJ(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.ac(a)){this.aJ(a,b)
window
t="Removing disallowed element <"+H.i(e)+"> from "+J.W(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.aJ(a,b)
window
t="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gH(f)
s=H.F(t.slice(0),[H.am(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.m(t);r>=0;--r){p=s[r]
if(!this.a.a_(a,J.mx(p),q.ae(t,p))){window
o="Removing disallowed attribute <"+H.i(e)+" "+p+'="'+H.i(q.ae(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.ae(t,p)
q.e5(t,p)}}if(!!J.x(a).$isbZ)this.br(a.content)}}
W.iC.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.eb(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.by(r,a)}else J.by(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.mh(t)}catch(q){H.V(q)
r=t
J.by(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.u,W.u]}}}
W.bD.prototype={$isd:1,
$asd:function(){return[W.ah]},
$isb:1,
$asb:function(){return[W.ah]}}
W.bE.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.bF.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bG.prototype={$isd:1,
$asd:function(){return[W.ah]},
$isb:1,
$asb:function(){return[W.ah]}}
W.bH.prototype={$isd:1,
$asd:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.bI.prototype={$isd:1,
$asd:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cy.prototype={}
W.cS.prototype={$isd:1,
$asd:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]}}
W.cE.prototype={$isd:1,
$asd:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.cL.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cM.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cN.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cO.prototype={$isd:1,
$asd:function(){return[W.ai]},
$isb:1,
$asb:function(){return[W.ai]}}
W.cP.prototype={$isd:1,
$asd:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cQ.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isb:1,
$asb:function(){return[W.ag]}}
W.cR.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cC.prototype={$isd:1,
$asd:function(){return[P.P]},
$isb:1,
$asb:function(){return[P.P]}}
W.cD.prototype={$isd:1,
$asd:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cF.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cH.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cI.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cJ.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cT.prototype={$isd:1,
$asd:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.d4.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.d5.prototype={$isd:1,
$asd:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.d3.prototype={$isd:1,
$asd:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.d8.prototype={$isd:1,
$asd:function(){return[P.P]},
$isb:1,
$asb:function(){return[P.P]}}
W.d9.prototype={$isd:1,
$asd:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.da.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.db.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
W.cW.prototype={$isd:1,
$asd:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cX.prototype={$isd:1,
$asd:function(){return[W.u]},
$isb:1,
$asb:function(){return[W.u]}}
W.cY.prototype={$isd:1,
$asd:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.d_.prototype={$isd:1,
$asd:function(){return[W.ag]},
$isb:1,
$asb:function(){return[W.ag]}}
W.d1.prototype={$isd:1,
$asd:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.d6.prototype={$isd:1,
$asd:function(){return[W.B]},
$isb:1,
$asb:function(){return[W.B]}}
W.d7.prototype={$isd:1,
$asd:function(){return[W.ai]},
$isb:1,
$asb:function(){return[W.ai]}}
P.iN.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.v,,]}}}
P.ij.prototype={}
P.P.prototype={$asP:null}
P.dZ.prototype={$isa:1}
P.aV.prototype={$isa:1}
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
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gP:function(a){return a.z}}
P.eA.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gP:function(a){return a.z}}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eG.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ao.prototype={}
P.aK.prototype={$isa:1}
P.eP.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.az.prototype={$isr:1}
P.eZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.az]},
$isb:1,
$asb:function(){return[P.az]}}
P.f7.prototype={$isa:1}
P.f8.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aB.prototype={$isr:1}
P.fr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.fy.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fE.prototype={
gl:function(a){return a.length}}
P.fK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bW.prototype={$isa:1,$isbW:1}
P.ha.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.M.prototype={
T:function(a,b,c,d){var t,s,r,q,p,o
t=H.F([],[W.dq])
C.a.i(t,W.le(null))
C.a.i(t,W.lh())
C.a.i(t,new W.iy())
c=new W.dO(new W.dr(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.j).ex(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.Y(q)
o=t.ga9(t)
for(t=J.m(p);r=o.firstChild,r!=null;)t.W(p,r)
return p},
gcB:function(a){return new W.aR(a,"change",!1,[W.k])},
gcC:function(a){return new W.aR(a,"input",!1,[W.k])},
gcD:function(a){return new W.aR(a,"mousemove",!1,[W.O])},
$isa:1,
$isj:1,
$isM:1}
P.hb.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hc.prototype={$isa:1}
P.dB.prototype={}
P.hg.prototype={$isa:1}
P.c_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aC.prototype={$isr:1}
P.hp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isd:1,
$asd:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.hx.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hz.prototype={$isa:1}
P.hA.prototype={$isa:1}
P.c3.prototype={$isa:1}
P.ip.prototype={$isa:1}
P.iq.prototype={$isa:1}
P.ir.prototype={$isa:1}
P.cB.prototype={$isd:1,
$asd:function(){return[P.az]},
$isb:1,
$asb:function(){return[P.az]}}
P.cz.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.cG.prototype={$isd:1,
$asd:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cK.prototype={$isd:1,
$asd:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cV.prototype={$isd:1,
$asd:function(){return[P.az]},
$isb:1,
$asb:function(){return[P.az]}}
P.d2.prototype={$isd:1,
$asd:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cZ.prototype={$isd:1,
$asd:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.d0.prototype={$isd:1,
$asd:function(){return[P.v]},
$isb:1,
$asb:function(){return[P.v]}}
P.e2.prototype={
gl:function(a){return a.length}}
P.fQ.prototype={
c1:function(a,b){return a.activeTexture(b)},
c4:function(a,b,c){return a.attachShader(b,c)},
c5:function(a,b,c){return a.bindBuffer(b,c)},
c6:function(a,b,c){return a.bindFramebuffer(b,c)},
c7:function(a,b,c){return a.bindTexture(b,c)},
c8:function(a,b){return a.blendEquation(b)},
c9:function(a,b,c){return a.blendFunc(b,c)},
ca:function(a,b,c,d){return a.bufferData(b,c,d)},
cb:function(a,b){return a.checkFramebufferStatus(b)},
cc:function(a,b){return a.clear(b)},
cd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createFramebuffer()},
cj:function(a){return a.createProgram()},
ck:function(a,b){return a.createShader(b)},
cl:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
cp:function(a,b,c,d){return a.drawArrays(b,c,d)},
cq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cr:function(a,b){return a.enable(b)},
cs:function(a,b){return a.enableVertexAttribArray(b)},
cv:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aR:function(a){return P.iO(a.getContextAttributes())},
bl:function(a){return a.getError()},
bm:function(a,b){return a.getProgramInfoLog(b)},
bn:function(a,b,c){return a.getProgramParameter(b,c)},
bo:function(a,b){return a.getShaderInfoLog(b)},
bp:function(a,b,c){return a.getShaderParameter(b,c)},
bq:function(a,b,c){return a.getUniformLocation(b,c)},
cw:function(a,b){return a.linkProgram(b)},
bv:function(a,b,c){return a.shaderSource(b,c)},
bw:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cH:function(a,b,c,d){return a.texParameterf(b,c,d)},
cI:function(a,b,c,d){return a.texParameteri(b,c,d)},
cL:function(a,b,c){return a.uniform1f(b,c)},
cM:function(a,b,c){return a.uniform1fv(b,c)},
cN:function(a,b,c){return a.uniform1i(b,c)},
cO:function(a,b,c){return a.uniform1iv(b,c)},
cP:function(a,b,c){return a.uniform2fv(b,c)},
cQ:function(a,b,c){return a.uniform3fv(b,c)},
cR:function(a,b,c){return a.uniform4fv(b,c)},
cS:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cT:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cV:function(a,b){return a.useProgram(b)},
cW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cX:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fR.prototype={
ek:function(a,b){return a.beginTransformFeedback(b)},
en:function(a,b){return a.bindVertexArray(b)},
ez:function(a){return a.createVertexArray()},
eG:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eH:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eI:function(a){return a.endTransformFeedback()},
f7:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
fc:function(a,b,c,d){this.ed(a,b,c,d)
return},
ed:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fe:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c1:function(a,b){return a.activeTexture(b)},
c4:function(a,b,c){return a.attachShader(b,c)},
c5:function(a,b,c){return a.bindBuffer(b,c)},
c6:function(a,b,c){return a.bindFramebuffer(b,c)},
c7:function(a,b,c){return a.bindTexture(b,c)},
c8:function(a,b){return a.blendEquation(b)},
c9:function(a,b,c){return a.blendFunc(b,c)},
ca:function(a,b,c,d){return a.bufferData(b,c,d)},
cb:function(a,b){return a.checkFramebufferStatus(b)},
cc:function(a,b){return a.clear(b)},
cd:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createFramebuffer()},
cj:function(a){return a.createProgram()},
ck:function(a,b){return a.createShader(b)},
cl:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
cp:function(a,b,c,d){return a.drawArrays(b,c,d)},
cq:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cr:function(a,b){return a.enable(b)},
cs:function(a,b){return a.enableVertexAttribArray(b)},
cv:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aR:function(a){return P.iO(a.getContextAttributes())},
bl:function(a){return a.getError()},
bm:function(a,b){return a.getProgramInfoLog(b)},
bn:function(a,b,c){return a.getProgramParameter(b,c)},
bo:function(a,b){return a.getShaderInfoLog(b)},
bp:function(a,b,c){return a.getShaderParameter(b,c)},
bq:function(a,b,c){return a.getUniformLocation(b,c)},
cw:function(a,b){return a.linkProgram(b)},
bv:function(a,b,c){return a.shaderSource(b,c)},
bw:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cH:function(a,b,c,d){return a.texParameterf(b,c,d)},
cI:function(a,b,c,d){return a.texParameteri(b,c,d)},
cL:function(a,b,c){return a.uniform1f(b,c)},
cM:function(a,b,c){return a.uniform1fv(b,c)},
cN:function(a,b,c){return a.uniform1i(b,c)},
cO:function(a,b,c){return a.uniform1iv(b,c)},
cP:function(a,b,c){return a.uniform2fv(b,c)},
cQ:function(a,b,c){return a.uniform3fv(b,c)},
cR:function(a,b,c){return a.uniform4fv(b,c)},
cS:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cT:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cV:function(a,b){return a.useProgram(b)},
cW:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cX:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iD.prototype={$isa:1}
P.h1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.G(b,a,null,null,null))
return P.iO(this.e1(a,b))},
j:function(a,b,c){throw H.f(new P.w("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
e1:function(a,b){return a.item(b)},
$isd:1,
$asd:function(){return[P.aM]},
$isb:1,
$asb:function(){return[P.aM]}}
P.cA.prototype={$isd:1,
$asd:function(){return[P.aM]},
$isb:1,
$asb:function(){return[P.aM]}}
P.cU.prototype={$isd:1,
$asd:function(){return[P.aM]},
$isb:1,
$asb:function(){return[P.aM]}}
B.jd.prototype={
$1:function(a){$.$get$iP().j(0,a.which,!0)},
$S:function(){return{func:1,args:[W.b2]}}}
B.je.prototype={
$1:function(a){$.$get$iP().j(0,a.which,null)},
$S:function(){return{func:1,args:[W.b2]}}}
B.jf.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.o0=t
$.o1=C.b.af(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jX=s-C.b.K(window.innerWidth,2)
$.lG=-(t-C.b.K(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.O]}}}
B.jg.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cf=t-C.b.K(window.innerWidth,2)
$.cg=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$cd().j(0,"right",!0)
else $.$get$cd().j(0,"left",!0)},
$S:function(){return{func:1,args:[W.O]}}}
B.jh.prototype={
$1:function(a){if(a.button===2)$.$get$cd().j(0,"right",null)
else $.$get$cd().j(0,"left",null)},
$S:function(){return{func:1,args:[W.O]}}}
B.fs.prototype={
dA:function(a,b,c,d){var t
d.toString
W.Z(d,W.o8().$1(d),new B.ft(this),!1,W.ba)
W.Z(d,"mousemove",new B.fu(this),!1,W.O)
t=W.b8
W.Z(d,"touchstart",new B.fv(),!1,t)
W.Z(d,"touchmove",new B.fw(this),!1,t)
B.oq(null)}}
B.ft.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a2.geA(a)*r.k3
if(C.c.af(r.fy,t)>0)r.fy=H.ak(C.c.af(r.fy,t))}catch(q){s=H.V(q)
P.U(s)}},
$S:function(){return{func:1,args:[W.ba]}}}
B.fu.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.ak(t.go+C.b.af($.jX,$.cf)*0.01)
s=t.id
r=$.cg
q=$.lG
t.id=H.ak(s+(r-q)*0.01)
$.cf=$.jX
$.cg=q}},
$S:function(){return{func:1,args:[W.O]}}}
B.fv.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ad(t.clientX)
C.c.ad(t.clientY)
$.cf=s
C.c.ad(t.clientX)
$.cg=C.c.ad(t.clientY)},
$S:function(){return{func:1,args:[W.b8]}}}
B.fw.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ad(t.clientX)
t=C.c.ad(t.clientY)
r=this.a
r.go=H.ak(r.go+C.b.af(s,$.cf)*0.01)
r.id=H.ak(r.id+($.cg-t)*0.01)
$.cf=s
$.cg=t},
$S:function(){return{func:1,args:[W.b8]}}}
G.ff.prototype={}
G.bs.prototype={
G:function(a,b){var t=this.d
if(H.a5(!t.I(0,a)))H.aj("uniform "+a+" already set")
t.j(0,a,b)},
aZ:function(){return this.d},
k:function(a){var t,s,r,q
t=H.F(["{"+new H.aO(H.iV(this),null).k(0)+"}["+this.a+"]"],[P.v])
for(s=this.d,r=s.gH(s),r=r.gw(r);r.q();){q=r.gu()
C.a.i(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.at(t,"\n")}}
G.e4.prototype={}
G.e7.prototype={
ct:function(a,b,c){J.md(this.a,b)
if(c>0)J.mE(this.a,b,c)}}
G.cu.prototype={
ds:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.m4(t.a)
this.b=s
J.jm(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.k6(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.k6(t.a,36160,36096,3553,s,0)}r=J.m0(t.a,36160)
s=r===36053
if(H.a5(s))H.aj("framebuffer error: "+H.i(r))
if(!s)throw H.f("Error Incomplete Framebuffer: "+H.i(r))
J.jm(t.a,36160,null)}}
G.z.prototype={}
G.bJ.prototype={}
G.aZ.prototype={
V:function(a){var t=this.e
H.c(!t.I(0,a))
H.c(C.e.az(a,"a"))
switch($.$get$a_().h(0,a).a){case"vec2":t.j(0,a,H.F([],[T.p]))
break
case"vec3":t.j(0,a,H.F([],[T.h]))
break
case"vec4":t.j(0,a,H.F([],[T.aQ]))
break
case"float":t.j(0,a,H.F([],[P.S]))
break
case"uvec4":t.j(0,a,H.F([],[[P.b,P.o]]))
break
default:if(H.a5(!1))H.aj("unknown type for "+a)}},
bx:function(a){var t,s,r
H.c(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.bJ(t,t+1,t+2,t+3))},
aa:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=a[r]
p=new T.h(new Float32Array(3))
p.t(q)
C.a.i(s,p)}},
dm:function(a){var t,s,r,q,p
H.c(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.z(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.t(q)
C.a.i(t,p)}},
ah:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.A)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.p(o))}},
aC:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.A)(b),++q){p=b[q]
o=new T.h(new Float32Array(3))
o.t(p)
r.i(t,o)}},
dn:function(a){var t,s,r,q,p
H.c(!0)
t=this.d
s=t.length
C.a.i(this.c,new G.bJ(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.t(q)
C.a.i(t,p)}},
dt:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.c(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.F(r,[P.o])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.A)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.A)(s),++o){l=s[o]
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
du:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.F(s,[T.h])
q=new T.h(new Float32Array(H.e(3)))
p=new T.h(new Float32Array(H.e(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.A)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.jF(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.t(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.t(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.t(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.A)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.jF(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.t(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.t(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.t(p)
r[j]=l
l=new T.h(new Float32Array(3))
l.t(p)
r[h.d]=l}this.e.j(0,"aNormal",r)},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gw(r);r.q();){q=r.gu()
p=$.$get$a_().h(0,q).a
C.a.i(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.at(t," ")}}
G.f_.prototype={}
G.b4.prototype={
aX:function(a,b){var t=this.x.a
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
aY:function(){if(H.a5(!1))H.aj("NYI")
return new T.H(new Float32Array(H.e(16)))},
k:function(a){return"PL: p:"+J.W(this.x)+"  r:"+this.Q}}
G.aY.prototype={
aX:function(a,b){var t=this.x.a
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
aY:function(){var t,s,r,q,p,o
t=this.ch
s=this.Q
r=-s
q=s-r
t.bu()
p=2/q
t.O(0,0,p)
t.O(1,1,p)
t.O(2,2,-2/q)
r=-(s+r)/q
t.O(0,3,r)
t.O(1,3,r)
t.O(2,3,r)
t.O(3,3,1)
s=this.x
r=s.a
o=r[0]===0&&r[2]===0?$.$get$jQ():$.$get$jP()
r=this.cx
T.jZ(r,new T.h(new Float32Array(H.e(3))),s,o)
t.aP(0,r)
return t},
k:function(a){return"DL: p:"+J.W(this.x)}}
G.as.prototype={
aX:function(a,b){var t=this.x.a
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
a[b+11]=Math.cos(H.lr(this.cx))
a[b+15]=this.cy},
aY:function(){var t,s,r,q,p
t=this.y
s=t.a
r=s[0]===0&&s[2]===0?$.$get$jQ():$.$get$jP()
s=this.fr
q=this.x
t.toString
p=new T.h(new Float32Array(H.e(3)))
p.t(t)
p.i(0,q)
T.jZ(s,q,p,r)
p=this.fx
T.lK(p,C.i.J(2.1,this.cx),this.db,this.dx,this.dy)
p.aP(0,s)
return p},
k:function(a){return"SL: p:"+J.W(this.x)+"  d:"+J.W(this.y)+"  r:"+this.ch+"  a:"+H.i(this.cx)}}
G.eO.prototype={
aZ:function(){var t,s,r
t=this.y
s=this.z
G.n2(t,s,this.x)
r=this.d
r.j(0,"uLightDescs",t)
r.j(0,"uLightTypes",s)
return r}}
G.dE.prototype={}
G.dD.prototype={}
G.f9.prototype={
dz:function(a){this.G("cDepthTest",!0)
this.G("cDepthWrite",!0)
this.G("cBlendEquation",$.$get$kh())
this.G("cStencilFunc",$.$get$kS())}}
G.di.prototype={
by:function(a,b,c){var t,s
if(C.e.aj(a,0)===105){if(H.a5(C.b.aW(b.length,c)===this.z))H.aj("ChangeAttribute "+this.z)}else H.c(C.b.aW(b.length,c)===(this.ch.length/3|0))
this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dU(t.a,34962,s)
J.k4(t.a,34962,b,35048)},
aE:function(a){this.ch=a
this.by("aPosition",a,3)},
bB:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ag:function(a,b,c){var t,s,r,q,p,o
t=J.k0(a,0)===105
if(t&&this.z===0)this.z=C.b.aW(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.dW(r.a))
this.by(a,b,c)
q=$.$get$a_().h(0,a)
if(q==null)throw H.f("Unknown canonical "+a)
p=this.x
if(H.a5(p.I(0,a)))H.aj("unexpected attribute "+a)
o=p.h(0,a)
J.dV(r.a,this.e)
r.ct(0,o,t?1:0)
s=s.h(0,a)
p=q.bC()
J.dU(r.a,34962,s)
J.ke(r.a,o,p,5126,!1,0,0)},
aa:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.dW(s.a))
this.aE(a)
r=$.$get$a_().h(0,"aPosition")
if(r==null)throw H.f("Unknown canonical aPosition")
q=this.x
H.c(q.I(0,"aPosition"))
p=q.h(0,"aPosition")
J.dV(s.a,this.e)
s.ct(0,p,0)
t=t.h(0,"aPosition")
q=r.bC()
J.dU(s.a,34962,t)
J.ke(s.a,p,q,5126,!1,0,0)},
ai:function(a){var t,s,r,q
H.c(this.ch!=null)
t=this.ch.length
if(t<768){this.sb3(new Uint8Array(H.iH(a)))
this.Q=5121}else if(t<196608){this.sb3(new Uint16Array(H.iH(a)))
this.Q=5123}else{this.sb3(new Uint32Array(H.iH(a)))
this.Q=5125}t=this.d
J.dV(t.a,this.e)
s=this.y
r=this.cx
t.toString
q=J.x(r)
H.c(!!q.$isl7||!!q.$isl8||!!q.$isl9)
J.dU(t.a,34963,s)
J.k4(t.a,34963,r,35048)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gH(t),t=t.gw(t);t.q();){r=t.gu()
C.a.i(s,H.i(r)+":"+this.cy.h(0,r).length)}return"MESH["+this.a+"] "+C.a.at(s,"  ")},
sb3:function(a){this.cx=a}}
G.fz.prototype={
dq:function(a,b){var t=C.b.cZ(a,b)
if(this.z===t)return
this.z=t
this.bE()},
bE:function(){T.lK(this.db,this.y*3.141592653589793/180,this.z,this.Q,this.ch)},
aZ:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.h(new Float32Array(H.e(3)))
o.p(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.t(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.x(n)
r=!!s.$isaQ
k=r?s.gax(n):1
if(!!s.$ish){j=s.gm(n)
m=s.gn(n)
l=s.gP(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gP(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.J(t[0],n)
r=C.c.J(t[4],m)
q=C.c.J(t[8],l)
i=t[12]
h=C.c.J(t[1],n)
g=C.c.J(t[5],m)
f=C.c.J(t[9],l)
e=t[13]
d=C.c.J(t[2],n)
c=C.c.J(t[6],m)
b=C.c.J(t[10],l)
a=t[14]
a0=C.c.J(t[3],n)
a1=C.c.J(t[7],m)
a2=C.c.J(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.t(this.db)
a3.aP(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.eh.prototype={
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fO.prototype={
dv:function(a){var t,s,r,q,p,o
t=this.e.x
s=a.e.x
for(r=t.gH(t),r=r.gw(r);r.q();){q=r.gu()
p=t.h(0,q)
o=s.h(0,q)
if(p==null?o!=null:p!==o)return!1}return!0},
dG:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gl(t)===s.gl(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gw(s);s.q();){q=s.gu()
if(!t.I(0,q))C.a.i(r,q)}for(t=this.x,s=new P.c5(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.F(0,q))C.a.i(r,q)}return r},
dJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gu()
switch(J.k0(n,0)){case 117:if(q.I(0,n)){m=b.h(0,n)
if(p.I(0,n))H.dS("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$a_().h(0,n)
if(l==null)H.K("unknown "+n)
H.c(q.I(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.js(r.a,k,m)
else if(!!J.x(m).$iskG)J.mC(r.a,k,m)
break
case"float":if(l.c===0)J.mA(r.a,k,m)
else if(!!J.x(m).$iseH)J.mB(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.J(m,"$isH").a
J.kd(r.a,k,!1,j)}else if(!!J.x(m).$iseH)J.kd(r.a,k,!1,m)
else if(H.a5(!1))H.aj("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.J(m,"$isa2").a
J.kc(r.a,k,!1,j)}else if(!!J.x(m).$iseH)J.kc(r.a,k,!1,m)
else if(H.a5(!1))H.aj("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.J(m,"$isaQ").a
J.kb(r.a,k,j)}else J.kb(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.J(m,"$ish").a
J.ka(r.a,k,j)}else J.ka(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.J(m,"$isp").a
J.k9(r.a,k,j)}else J.k9(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a7(33984,this.ch)
J.k2(r.a,j)
j=H.J(m,"$isc0").b
J.aU(r.a,3553,j)
j=this.ch
J.js(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.c(n==="uCubeTexture")
j=C.b.a7(33984,this.ch)
J.k2(r.a,j)
j=H.J(m,"$isc0").b
J.aU(r.a,34067,j)
j=this.ch
J.js(r.a,k,j)
this.ch=this.ch+1
break
default:H.dS("Error: unknow uniform type: "+j)
H.c(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.L(m,!0))J.dX(r.a,2929)
else J.jo(r.a,2929)
break
case"cStencilFunc":H.J(m,"$isdE")
j=m.a
if(j===1281)J.jo(r.a,2960)
else{J.dX(r.a,2960)
i=m.b
h=m.c
J.mu(r.a,j,i,h)}break
case"cDepthWrite":J.m7(r.a,m)
break
case"cBlendEquation":H.J(m,"$isdD")
j=m.a
if(j===1281)J.jo(r.a,3042)
else{J.dX(r.a,3042)
i=m.b
h=m.c
J.m_(r.a,i,h)
J.lZ(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aI(1000*(s-new P.bk(t,!1).a)).k(0)},
dr:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
t=Date.now()
s=this.d
r=this.r
J.mD(s.a,r)
this.ch=0
this.z.a0(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.A)(b),++q){p=b[q]
this.dJ(p.a,p.aZ())}r=this.Q
r.a0(0)
for(o=a.cy,o=o.gH(o),o=o.gw(o);o.q();)r.i(0,o.gu())
n=this.dG()
if(n.length!==0)P.U("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(n)))
J.dV(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bB()
l=a.Q
k=a.z
s.toString
if(m)J.lY(s.a,r)
if(l!==-1)if(k>1)J.mb(s.a,r,o,l,0,k)
else J.ma(s.a,r,o,l,0)
else if(k>1)J.m9(s.a,r,0,o,k)
else J.m8(s.a,r,0,o)
if(m)J.me(s.a)
if(c!=null)C.a.i(c,new G.eh(this.a,a.z,a.bB(),r,P.mS(0,0,0,Date.now()-new P.bk(t,!1).a,0,0)))},
dC:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.m5(t.a)
m=G.lb(t.a,35633,r)
J.k3(t.a,n,m)
l=G.lb(t.a,35632,p)
J.k3(t.a,n,l)
if(o.length>0)J.my(t.a,n,o,35980)
J.mp(t.a,n)
if(!J.mo(t.a,n,35714))H.K(J.mn(t.a,n))
this.r=n
this.sdR(0,P.jC(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.A)(s),++k){j=s[k]
o=this.r
p.j(0,j,J.k8(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.A)(s),++k){j=s[k]
q=this.r
p.j(0,j,J.k8(t.a,q,j))}},
sdR:function(a,b){this.x=b}}
G.l.prototype={
bC:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.c(!1)
return-1}}}
G.ar.prototype={
aB:function(a){var t,s,r,q,p
H.c(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.A)(a),++q){p=a[q]
H.c($.$get$a_().I(0,p))
H.c(!C.a.F(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aT(s)},
a3:function(a){var t,s,r,q
H.c(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=a[r]
if(H.a5($.$get$a_().I(0,q)))H.aj("missing uniform "+q)
H.c(!C.a.F(s,q))
C.a.i(s,q)}C.a.aT(s)},
aD:function(a){var t,s,r,q
H.c(this.b==null)
for(t=a.length,s=this.e,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=a[r]
H.c($.$get$a_().I(0,q))
H.c(!C.a.F(s,q))
C.a.i(s,q)}C.a.aT(s)},
bD:function(a,b){H.c(this.b==null)
this.b=this.dK(!0,a,b)},
a4:function(a){return this.bD(a,null)},
dK:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.c(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){n=t[o]
m=$.$get$a_().h(0,n)
C.a.i(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){k=t[o]
m=$.$get$a_().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){k=t[o]
m=$.$get$a_().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.i(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){k=t[o]
m=$.$get$a_().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.i(q,"")
if(c!=null)C.a.L(q,c)
C.a.i(q,"void main(void) {")
C.a.L(q,b)
C.a.i(q,"}")
return C.a.at(q,"\n")}}
G.h_.prototype={
a8:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.dC.prototype={}
G.c0.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.hu.prototype={
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"},
dF:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.aU(t.a,s,this.b)
J.mw(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.mv(t.a,s,34046,q)
q=r.r
J.bg(t.a,s,10240,q)
q=r.f
J.bg(t.a,s,10241,q)
if(r.b){J.bg(t.a,s,10242,33071)
J.bg(t.a,s,10243,33071)}if(r.c)J.bg(t.a,s,34892,34894)
p=J.mm(t.a)
if(H.a5(p===0))H.aj("texture error "+H.i(p))
J.aU(t.a,s,null)}}
R.h3.prototype={
dN:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nG("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.o).bK(r,"float")
r.setProperty(p,"left","")
p=C.o.bK(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.h.W(t,s)}return t},
dD:function(a,b,c){var t,s,r
if(a==null)throw H.f("no element provided")
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
J.jl(this.a,s)
r=this.dN(b,c,90,30)
this.d=r
J.jl(this.a,r)
t=t.createElement("div")
this.c=t
J.jl(this.a,t)}}
R.h4.prototype={
dI:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.i.fb(s,2)+" fps"
t=this.c;(t&&C.h).bs(t,b)
r=C.b.K(30*C.i.eo(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.h).W(t,q)},
dH:function(a){return this.dI(a,"")}}
R.fX.prototype={}
A.aA.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.b7.prototype={}
A.fN.prototype={
seq:function(a){this.r&=4294950911},
bA:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=this.d
s=this.r
r=this.x
q=this.y
p=this.z
o=this.Q
n=t.a
t=t.b
J.jm(n.a,36160,t)
H.c(p>0&&o>0)
J.mF(n.a,r,q,p,o)
if(s!==0)J.m1(n.a,s)
for(t=this.f,s=t.length,m=0;m<t.length;t.length===s||(0,H.A)(t),++m){l=t[m]
if(!l.c)continue
r=l.d
if(!r.c)continue
k=l.e
C.a.i(k,new G.bs(P.D(),"transforms",!1,!0))
j=new T.H(new Float32Array(16))
j.E()
for(q=l.f,p=q.length,i=0;i<q.length;q.length===p||(0,H.A)(q),++i)A.lt(r,q[i],j,a,k)
k.pop()}},
bz:function(){return this.bA(null)},
dB:function(a,b,c){if(this.d==null)this.d=new G.cu(this.e,null,null,null,null)}}
A.iW.prototype={
$2:function(a,b){var t=536870911&a+J.ax(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.r]}}}
T.a2.prototype={
t:function(a){var t,s
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
k:function(a){return"[0] "+this.Y(0).k(0)+"\n[1] "+this.Y(1).k(0)+"\n[2] "+this.Y(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a2){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gA:function(a){return A.dQ(this.a)},
Y:function(a){var t,s
t=new Float32Array(H.e(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.h(t)},
ev:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.t(a)
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
T.H.prototype={
O:function(a,b,c){H.c(a<4)
H.c(b<4)
this.a[b*4+a]=c},
t:function(a){var t,s
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
k:function(a){return"[0] "+this.Y(0).k(0)+"\n[1] "+this.Y(1).k(0)+"\n[2] "+this.Y(2).k(0)+"\n[3] "+this.Y(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.H){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gA:function(a){return A.dQ(this.a)},
Y:function(a){var t,s
t=new Float32Array(H.e(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aQ(t)},
bu:function(){var t=this.a
t[0]=0
t[1]=0
t[2]=0
t[3]=0
t[4]=0
t[5]=0
t[6]=0
t[7]=0
t[8]=0
t[9]=0
t[10]=0
t[11]=0
t[12]=0
t[13]=0
t[14]=0
t[15]=0},
E:function(){var t=this.a
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
aP:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.fI.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gP:function(a){return this.a[2]},
gax:function(a){return this.a[3]},
da:function(a,b){var t,s,r,q
t=Math.sqrt(a.gS())
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
k:function(a){var t=this.a
return H.i(t[0])+", "+H.i(t[1])+", "+H.i(t[2])+" @ "+H.i(t[3])}}
T.p.prototype={
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.p){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gA:function(a){return A.dQ(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.h.prototype={
p:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
t:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.h){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gA:function(a){return A.dQ(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){return Math.sqrt(this.gS())},
gS:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
C:function(a){var t,s,r
t=Math.sqrt(this.gS())
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
aK:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.h(new Float32Array(H.e(3)))
t.p(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aA:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
M:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gP:function(a){return this.a[2]}}
T.aQ.prototype={
k:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aQ){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gA:function(a){return A.dQ(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gP:function(a){return this.a[2]},
gax:function(a){return this.a[3]}}
L.j7.prototype={
$1:function(a){var t=H.J(W.li(a.target),"$isbm")
if(t.type==="radio")L.mW(t.id)},
$S:function(){return{func:1,args:[W.k]}}}
L.j8.prototype={
$1:function(a){var t,s,r,q
t=H.J(W.li(a.target),"$isbm")
if(t.type==="range"){s=t.id
r=H.nn(t.value,null)
if(J.mt(s,"pos")){P.U("EventPositionChanged "+s+" "+H.i(r))
switch(s){case"posx":q=$.$get$aH()
H.J(q.h(0,"idSpot"),"$isas").x.a[0]=r
H.J(q.h(0,"idPoint"),"$isb4").x.a[0]=r
break
case"posy":q=$.$get$aH()
H.J(q.h(0,"idSpot"),"$isas").x.a[1]=r
H.J(q.h(0,"idPoint"),"$isb4").x.a[1]=r
break
case"posz":q=$.$get$aH()
H.J(q.h(0,"idSpot"),"$isas").x.a[2]=r
H.J(q.h(0,"idPoint"),"$isb4").x.a[2]=r
break}}else if(C.e.az(s,"dir")){P.U("EventDirectionChanged "+s+" "+H.i(r))
switch(s){case"dirx":q=$.$get$aH()
H.J(q.h(0,"idSpot"),"$isas").y.a[0]=r
H.J(q.h(0,"idDirectional"),"$isaY").x.a[0]=r
break
case"diry":q=$.$get$aH()
H.J(q.h(0,"idSpot"),"$isas").y.a[1]=r
H.J(q.h(0,"idDirectional"),"$isaY").x.a[1]=r
break
case"dirz":q=$.$get$aH()
H.J(q.h(0,"idSpot"),"$isas").y.a[2]=r
H.J(q.h(0,"idDirectional"),"$isaY").x.a[2]=r
break}}else if(s==="cutoff")P.U("set cutoff "+H.i(r))}},
$S:function(){return{func:1,args:[W.k]}}}
L.j9.prototype={
$1:function(a){var t,s,r,q
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.U("size change "+H.i(s)+" "+H.i(r))
t=C.b.K(s,2)
this.b.dq(t,r)
q=this.d
q.z=t
q.Q=r
q=this.c.f
q.x=t
q.y=0
q.z=t
q.Q=r},
$S:function(){return{func:1,v:true,args:[W.k]}}}
L.j6.prototype={
$1:function(b0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
this.a.a=b0+0
t=this.c
s=t.k4
if(s.h(0,37)!=null)t.go=H.ak(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.ak(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.ak(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.ak(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.ak(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.ak(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.ak(C.c.ep(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.a8(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.k2
s=t.d
r=s.a
o=q.a
r[12]=r[12]+o[0]
r[13]=r[13]+o[1]
r[14]=r[14]+o[2]
o=r[12]
n=r[13]
m=r[14]
l=new T.h(new Float32Array(H.e(3)))
l.p(0,1,0)
k=t.e
j=k.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
T.jZ(s,k,q,l)
r[12]=o
r[13]=n
r[14]=m
m=t.f
n=m.a
n[0]=r[2]
n[1]=r[6]
n[2]=r[10]
t=-t.k1
m=Math.sqrt(m.gS())
i=n[0]/m
h=n[1]/m
g=n[2]/m
m=Math.cos(t)
t=Math.sin(t)
f=1-m
e=i*i*f+m
n=g*t
d=i*h*f-n
o=h*t
c=i*g*f+o
b=h*i*f+n
a=h*h*f+m
t=i*t
a0=h*g*f-t
a1=g*i*f-o
a2=g*h*f+t
a3=g*g*f+m
m=r[0]
t=r[4]
o=r[8]
n=r[1]
q=r[5]
k=r[9]
s=r[2]
j=r[6]
a4=r[10]
a5=r[3]
a6=r[7]
a7=r[11]
r[0]=m*e+t*b+o*a1
r[1]=n*e+q*b+k*a1
r[2]=s*e+j*b+a4*a1
r[3]=a5*e+a6*b+a7*a1
r[4]=m*d+t*a+o*a2
r[5]=n*d+q*a+k*a2
r[6]=s*d+j*a+a4*a2
r[7]=a5*d+a6*a+a7*a2
r[8]=m*c+t*a0+o*a3
r[9]=n*c+q*a0+k*a3
r[10]=s*c+j*a0+a4*a3
r[11]=a5*c+a6*a0+a7*a3
a8=$.iR.aY()
a7=this.r
a9=$.iR
t=J.x(a9)
if(!!t.$isaY){t=a9.Q
R.nx(a7,t,t/4,a9.x)}else if(!!t.$isas)R.nz(a7,a9.x,a9.y,a9.ch,a9.cx)
else if(!!t.$isb4)R.ny(a7,a9.x,a9.Q)
else if(H.a5(!1))H.aj("unknown light: "+t.gD(a9).k(0))
t=this.b
s=J.W($.iR)
r=t.c;(r&&C.h).bs(r,s)
s=this.d
s.r.d.j(0,"uLightPerspectiveViewMatrix",a8)
s.c.bz()
this.e.d.j(0,"uLightPerspectiveViewMatrix",a8)
this.f.bz()
r=s.a
q=s.b
J.aU(r.a,3553,q.b)
J.bg(r.a,3553,34892,0)
J.aU(r.a,3553,null)
s.f.bA([])
s=s.b
J.aU(r.a,3553,s.b)
J.bg(r.a,3553,34892,34894)
J.aU(r.a,3553,null)
C.a3.gei(window).cJ(this)
t.dH(b0)},
$S:function(){return{func:1,v:true,args:[P.a0]}}}
J.a.prototype.dh=J.a.prototype.k
J.bM.prototype.dj=J.bM.prototype.k
P.a1.prototype.di=P.a1.prototype.aQ
W.a9.prototype.aV=W.a9.prototype.T
W.c7.prototype.dk=W.c7.prototype.a_;(function installTearOffs(){installTearOff(H.bd.prototype,"geV",0,0,0,null,["$0"],["aN"],0)
installTearOff(H.au.prototype,"gd3",0,0,0,null,["$1"],["R"],2)
installTearOff(H.bc.prototype,"geC",0,0,0,null,["$1"],["a1"],2)
installTearOff(P,"nW",1,0,0,null,["$1"],["nC"],1)
installTearOff(P,"nX",1,0,0,null,["$1"],["nD"],1)
installTearOff(P,"nY",1,0,0,null,["$1"],["nE"],1)
installTearOff(P,"lq",1,0,0,null,["$0"],["nU"],0)
installTearOff(P.aF.prototype,"gdT",0,0,0,null,["$2","$1"],["aF","dU"],5)
installTearOff(P,"o3",1,0,0,null,["$2"],["mM"],6)
installTearOff(W,"o8",1,0,0,null,["$1"],["mU"],7)
installTearOff(W,"o9",1,0,0,null,["$4"],["nJ"],4)
installTearOff(W,"oa",1,0,0,null,["$4"],["nK"],4)
installTearOff(W.dp.prototype,"gbf",0,1,0,null,["$0"],["bg"],3)
installTearOff(W.dF.prototype,"gbf",0,1,0,null,["$0"],["bg"],3)
installTearOff(L,"or",1,0,0,null,["$1"],["nt"],8)
installTearOff(L,"lN",1,0,0,null,["$0"],["ok"],0)})();(function inheritance(){inherit(P.r,null)
var t=P.r
inherit(H.jz,t)
inherit(J.a,t)
inherit(J.e1,t)
inherit(P.a1,t)
inherit(H.dg,t)
inherit(P.dc,t)
inherit(H.cr,t)
inherit(H.bi,t)
inherit(H.ih,t)
inherit(H.bd,t)
inherit(H.hU,t)
inherit(H.be,t)
inherit(H.ig,t)
inherit(H.hM,t)
inherit(H.bq,t)
inherit(H.hk,t)
inherit(H.ay,t)
inherit(H.au,t)
inherit(H.bc,t)
inherit(H.fM,t)
inherit(H.hr,t)
inherit(P.bl,t)
inherit(H.dN,t)
inherit(H.aO,t)
inherit(H.ap,t)
inherit(H.f0,t)
inherit(H.f2,t)
inherit(P.hO,t)
inherit(P.dK,t)
inherit(P.aF,t)
inherit(P.dI,t)
inherit(P.h6,t)
inherit(P.h7,t)
inherit(P.bh,t)
inherit(P.iG,t)
inherit(P.fW,t)
inherit(P.id,t)
inherit(P.c5,t)
inherit(P.bV,t)
inherit(P.y,t)
inherit(P.ie,t)
inherit(P.aG,t)
inherit(P.N,t)
inherit(P.bk,t)
inherit(P.a0,t)
inherit(P.aI,t)
inherit(P.dz,t)
inherit(P.hZ,t)
inherit(P.eK,t)
inherit(P.el,t)
inherit(P.b,t)
inherit(P.aM,t)
inherit(P.b3,t)
inherit(P.bX,t)
inherit(P.v,t)
inherit(P.bY,t)
inherit(W.e9,t)
inherit(W.hL,t)
inherit(W.c4,t)
inherit(W.C,t)
inherit(W.dr,t)
inherit(W.c7,t)
inherit(W.iy,t)
inherit(W.cs,t)
inherit(W.hQ,t)
inherit(W.dq,t)
inherit(W.is,t)
inherit(W.dO,t)
inherit(P.ij,t)
inherit(G.ff,t)
inherit(G.e7,t)
inherit(G.cu,t)
inherit(G.z,t)
inherit(G.bJ,t)
inherit(G.aZ,t)
inherit(G.dE,t)
inherit(G.dD,t)
inherit(G.eh,t)
inherit(G.l,t)
inherit(G.ar,t)
inherit(G.dC,t)
inherit(G.c0,t)
inherit(R.h3,t)
inherit(R.fX,t)
inherit(T.a2,t)
inherit(T.H,t)
inherit(T.fI,t)
inherit(T.p,t)
inherit(T.h,t)
inherit(T.aQ,t)
t=J.a
inherit(J.eV,t)
inherit(J.eW,t)
inherit(J.bM,t)
inherit(J.b_,t)
inherit(J.bn,t)
inherit(J.b0,t)
inherit(H.bP,t)
inherit(H.bp,t)
inherit(W.j,t)
inherit(W.a7,t)
inherit(W.ci,t)
inherit(W.e5,t)
inherit(W.B,t)
inherit(W.cy,t)
inherit(W.eb,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.cn,t)
inherit(W.co,t)
inherit(W.cp,t)
inherit(W.cJ,t)
inherit(W.eg,t)
inherit(W.k,t)
inherit(W.cI,t)
inherit(W.ab,t)
inherit(W.eM,t)
inherit(W.cN,t)
inherit(W.f4,t)
inherit(W.fc,t)
inherit(W.ac,t)
inherit(W.cH,t)
inherit(W.fo,t)
inherit(W.dp,t)
inherit(W.cM,t)
inherit(W.fx,t)
inherit(W.br,t)
inherit(W.ad,t)
inherit(W.cF,t)
inherit(W.at,t)
inherit(W.dv,t)
inherit(W.af,t)
inherit(W.cE,t)
inherit(W.ag,t)
inherit(W.h5,t)
inherit(W.a3,t)
inherit(W.cD,t)
inherit(W.hj,t)
inherit(W.ai,t)
inherit(W.cO,t)
inherit(W.ho,t)
inherit(W.dF,t)
inherit(W.hw,t)
inherit(W.hB,t)
inherit(W.hN,t)
inherit(W.cC,t)
inherit(W.cS,t)
inherit(W.cR,t)
inherit(W.cL,t)
inherit(W.cQ,t)
inherit(W.cP,t)
inherit(W.iE,t)
inherit(W.iF,t)
inherit(P.az,t)
inherit(P.cB,t)
inherit(P.aB,t)
inherit(P.cG,t)
inherit(P.fD,t)
inherit(P.fE,t)
inherit(P.fK,t)
inherit(P.cz,t)
inherit(P.aC,t)
inherit(P.cK,t)
inherit(P.hA,t)
inherit(P.e2,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.iD,t)
inherit(P.cA,t)
t=J.bM
inherit(J.fB,t)
inherit(J.b9,t)
inherit(J.b1,t)
inherit(J.jy,J.b_)
t=J.bn
inherit(J.de,t)
inherit(J.dd,t)
t=P.a1
inherit(H.d,t)
inherit(H.dh,t)
inherit(H.dH,t)
t=H.d
inherit(H.bo,t)
inherit(H.f1,t)
inherit(H.ek,H.dh)
t=P.dc
inherit(H.f5,t)
inherit(H.hD,t)
t=H.bo
inherit(H.bN,t)
inherit(P.f3,t)
t=H.bi
inherit(H.ji,t)
inherit(H.jj,t)
inherit(H.ib,t)
inherit(H.hV,t)
inherit(H.eR,t)
inherit(H.eS,t)
inherit(H.ii,t)
inherit(H.hl,t)
inherit(H.hm,t)
inherit(H.jk,t)
inherit(H.j0,t)
inherit(H.j1,t)
inherit(H.j2,t)
inherit(H.j3,t)
inherit(H.j4,t)
inherit(H.hf,t)
inherit(H.eX,t)
inherit(H.iX,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(P.hI,t)
inherit(P.hH,t)
inherit(P.hJ,t)
inherit(P.hK,t)
inherit(P.i_,t)
inherit(P.i3,t)
inherit(P.i0,t)
inherit(P.i1,t)
inherit(P.i2,t)
inherit(P.i6,t)
inherit(P.i7,t)
inherit(P.i5,t)
inherit(P.i4,t)
inherit(P.h8,t)
inherit(P.h9,t)
inherit(P.iJ,t)
inherit(P.im,t)
inherit(P.il,t)
inherit(P.io,t)
inherit(P.f6,t)
inherit(P.ei,t)
inherit(P.ej,t)
inherit(W.iM,t)
inherit(W.hE,t)
inherit(W.hY,t)
inherit(W.fq,t)
inherit(W.fp,t)
inherit(W.iu,t)
inherit(W.iv,t)
inherit(W.iB,t)
inherit(W.iC,t)
inherit(P.iN,t)
inherit(B.jd,t)
inherit(B.je,t)
inherit(B.jf,t)
inherit(B.jg,t)
inherit(B.jh,t)
inherit(B.ft,t)
inherit(B.fu,t)
inherit(B.fv,t)
inherit(B.fw,t)
inherit(A.iW,t)
inherit(L.j7,t)
inherit(L.j8,t)
inherit(L.j9,t)
inherit(L.j6,t)
t=H.hM
inherit(H.bt,t)
inherit(H.c8,t)
t=P.bl
inherit(H.ds,t)
inherit(H.eY,t)
inherit(H.hv,t)
inherit(H.ht,t)
inherit(H.e6,t)
inherit(H.fT,t)
inherit(P.ch,t)
inherit(P.dt,t)
inherit(P.an,t)
inherit(P.w,t)
inherit(P.dG,t)
inherit(P.aN,t)
inherit(P.a8,t)
inherit(P.ea,t)
t=H.hf
inherit(H.h2,t)
inherit(H.bA,t)
inherit(H.hG,P.ch)
t=H.bp
inherit(H.fg,t)
inherit(H.dk,t)
t=H.dk
inherit(H.bR,t)
inherit(H.bQ,t)
inherit(H.bS,H.bR)
inherit(H.dl,H.bS)
inherit(H.bT,H.bQ)
inherit(H.dm,H.bT)
t=H.dl
inherit(H.dj,t)
inherit(H.fh,t)
t=H.dm
inherit(H.fi,t)
inherit(H.fj,t)
inherit(H.fk,t)
inherit(H.fl,t)
inherit(H.fm,t)
inherit(H.dn,t)
inherit(H.fn,t)
inherit(P.iz,P.hO)
inherit(P.ik,P.iG)
inherit(P.dL,H.ap)
inherit(P.fV,P.fW)
inherit(P.ia,P.fV)
inherit(P.ic,P.ia)
inherit(P.df,P.bV)
t=P.a0
inherit(P.S,t)
inherit(P.o,t)
t=P.an
inherit(P.dw,t)
inherit(P.eQ,t)
t=W.j
inherit(W.u,t)
inherit(W.bF,t)
inherit(W.e8,t)
inherit(W.eF,t)
inherit(W.bL,t)
inherit(W.bO,t)
inherit(W.fG,t)
inherit(W.dx,t)
inherit(W.fY,t)
inherit(W.ae,t)
inherit(W.bE,t)
inherit(W.ah,t)
inherit(W.a4,t)
inherit(W.bD,t)
inherit(W.hy,t)
inherit(W.hC,t)
inherit(W.c1,t)
inherit(W.hF,t)
inherit(W.bb,t)
inherit(W.it,t)
t=W.u
inherit(W.a9,t)
inherit(W.aX,t)
inherit(W.bB,t)
inherit(W.cm,t)
inherit(W.hR,t)
t=W.a9
inherit(W.n,t)
inherit(P.M,t)
t=W.n
inherit(W.e_,t)
inherit(W.e0,t)
inherit(W.aW,t)
inherit(W.cj,t)
inherit(W.cl,t)
inherit(W.eJ,t)
inherit(W.cw,t)
inherit(W.bm,t)
inherit(W.fU,t)
inherit(W.dA,t)
inherit(W.hd,t)
inherit(W.he,t)
inherit(W.bZ,t)
inherit(W.i9,t)
inherit(W.bI,W.bF)
inherit(W.e3,W.bI)
inherit(W.bj,W.cy)
inherit(W.ee,W.co)
inherit(W.db,W.cJ)
inherit(W.ef,W.db)
inherit(W.aa,W.ci)
inherit(W.d9,W.cI)
inherit(W.eE,W.d9)
inherit(W.cX,W.cN)
inherit(W.bK,W.cX)
inherit(W.cx,W.bB)
inherit(W.eN,W.bL)
inherit(W.aP,W.k)
t=W.aP
inherit(W.b2,t)
inherit(W.O,t)
inherit(W.b8,t)
inherit(W.fd,W.bO)
inherit(W.d3,W.cH)
inherit(W.fe,W.d3)
inherit(W.Y,P.df)
inherit(W.d4,W.cM)
inherit(W.bU,W.d4)
t=W.br
inherit(W.fA,t)
inherit(W.fS,t)
inherit(W.hq,t)
inherit(W.d5,W.cF)
inherit(W.fC,W.d5)
inherit(W.fF,W.at)
inherit(W.bH,W.bE)
inherit(W.fZ,W.bH)
inherit(W.d1,W.cE)
inherit(W.h0,W.d1)
inherit(W.cY,W.cD)
inherit(W.hh,W.cY)
inherit(W.bG,W.bD)
inherit(W.hi,W.bG)
inherit(W.d7,W.cO)
inherit(W.hn,W.d7)
inherit(W.ba,W.O)
inherit(W.d8,W.cC)
inherit(W.dJ,W.d8)
inherit(W.d6,W.cS)
inherit(W.hP,W.d6)
inherit(W.hS,W.cp)
inherit(W.cT,W.cR)
inherit(W.i8,W.cT)
inherit(W.da,W.cL)
inherit(W.dM,W.da)
inherit(W.d_,W.cQ)
inherit(W.iw,W.d_)
inherit(W.cW,W.cP)
inherit(W.ix,W.cW)
inherit(W.hT,W.hL)
inherit(W.hW,P.h6)
inherit(W.aR,W.hW)
inherit(W.hX,P.h7)
inherit(W.iA,W.c7)
inherit(P.P,P.ij)
t=P.M
inherit(P.aK,t)
inherit(P.aV,t)
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
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.eC,t)
inherit(P.eD,t)
inherit(P.eG,t)
inherit(P.f7,t)
inherit(P.f8,t)
inherit(P.fy,t)
inherit(P.bW,t)
inherit(P.hc,t)
inherit(P.hz,t)
inherit(P.c3,t)
inherit(P.ip,t)
inherit(P.iq,t)
inherit(P.ir,t)
t=P.aK
inherit(P.dZ,t)
inherit(P.eI,t)
inherit(P.ao,t)
inherit(P.eP,t)
inherit(P.hb,t)
inherit(P.dB,t)
inherit(P.hx,t)
inherit(P.cV,P.cB)
inherit(P.eZ,P.cV)
inherit(P.d2,P.cG)
inherit(P.fr,P.d2)
inherit(P.fL,P.ao)
inherit(P.d0,P.cz)
inherit(P.ha,P.d0)
t=P.dB
inherit(P.hg,t)
inherit(P.c_,t)
inherit(P.cZ,P.cK)
inherit(P.hp,P.cZ)
inherit(P.cU,P.cA)
inherit(P.h1,P.cU)
t=G.ff
inherit(G.h_,t)
inherit(G.bs,t)
inherit(G.f_,t)
inherit(G.di,t)
inherit(G.fO,t)
inherit(A.b7,t)
inherit(A.fN,t)
t=G.h_
inherit(G.e4,t)
inherit(A.aA,t)
inherit(B.fs,G.e4)
t=G.f_
inherit(G.b4,t)
inherit(G.aY,t)
inherit(G.as,t)
t=G.bs
inherit(G.eO,t)
inherit(G.f9,t)
inherit(G.fz,t)
inherit(G.hu,G.c0)
inherit(R.h4,R.h3)
mixin(H.bQ,P.y)
mixin(H.bR,P.y)
mixin(H.bS,H.cr)
mixin(H.bT,H.cr)
mixin(P.bV,P.y)
mixin(W.bD,P.y)
mixin(W.bE,P.y)
mixin(W.bF,P.y)
mixin(W.bG,W.C)
mixin(W.bH,W.C)
mixin(W.bI,W.C)
mixin(W.cy,W.e9)
mixin(W.cS,P.y)
mixin(W.cE,P.y)
mixin(W.cL,P.y)
mixin(W.cM,P.y)
mixin(W.cN,P.y)
mixin(W.cO,P.y)
mixin(W.cP,P.y)
mixin(W.cQ,P.y)
mixin(W.cR,P.y)
mixin(W.cC,P.y)
mixin(W.cD,P.y)
mixin(W.cF,P.y)
mixin(W.cH,P.y)
mixin(W.cI,P.y)
mixin(W.cJ,P.y)
mixin(W.cT,W.C)
mixin(W.d4,W.C)
mixin(W.d5,W.C)
mixin(W.d3,W.C)
mixin(W.d8,W.C)
mixin(W.d9,W.C)
mixin(W.da,W.C)
mixin(W.db,W.C)
mixin(W.cW,W.C)
mixin(W.cX,W.C)
mixin(W.cY,W.C)
mixin(W.d_,W.C)
mixin(W.d1,W.C)
mixin(W.d6,W.C)
mixin(W.d7,W.C)
mixin(P.cB,P.y)
mixin(P.cz,P.y)
mixin(P.cG,P.y)
mixin(P.cK,P.y)
mixin(P.cV,W.C)
mixin(P.d2,W.C)
mixin(P.cZ,W.C)
mixin(P.d0,W.C)
mixin(P.cA,P.y)
mixin(P.cU,W.C)})();(function constants(){C.j=W.aW.prototype
C.x=W.cj.prototype
C.o=W.bj.prototype
C.h=W.cl.prototype
C.y=W.cn.prototype
C.z=W.cw.prototype
C.f=W.cx.prototype
C.A=J.a.prototype
C.a=J.b_.prototype
C.i=J.dd.prototype
C.b=J.de.prototype
C.c=J.bn.prototype
C.e=J.b0.prototype
C.H=J.b1.prototype
C.m=H.dj.prototype
C.t=W.bU.prototype
C.u=J.fB.prototype
C.v=W.dv.prototype
C.w=W.dA.prototype
C.n=J.b9.prototype
C.a2=W.ba.prototype
C.a3=W.c1.prototype
C.d=new P.ik()
C.p=new P.aI(0)
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.D=function(getTagFallback) {
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
C.F=function(hooks) {
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
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.I=H.F(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.v])
C.J=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.K=makeConstList([])
C.k=H.F(makeConstList(["bind","if","ref","repeat","syntax"]),[P.v])
C.l=H.F(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.v])
C.L=H.Q("ow")
C.M=H.Q("ox")
C.N=H.Q("eH")
C.O=H.Q("oy")
C.P=H.Q("oz")
C.Q=H.Q("kG")
C.R=H.Q("oA")
C.S=H.Q("kJ")
C.T=H.Q("b3")
C.U=H.Q("v")
C.V=H.Q("l7")
C.W=H.Q("l8")
C.X=H.Q("oB")
C.Y=H.Q("l9")
C.Z=H.Q("aG")
C.a_=H.Q("S")
C.a0=H.Q("o")
C.a1=H.Q("a0")})();(function staticFields(){$.kP="$cachedFunction"
$.kQ="$cachedInvocation"
$.kl=null
$.kj=null
$.jM=!1
$.jS=null
$.ln=null
$.lJ=null
$.iQ=null
$.j_=null
$.jT=null
$.bu=null
$.c9=null
$.ca=null
$.jN=!1
$.I=C.d
$.kE=0
$.aJ=null
$.ju=null
$.kC=null
$.kB=null
$.kz=null
$.ky=null
$.kx=null
$.kw=null
$.o0=0
$.o1=0
$.jX=0
$.lG=0
$.cf=0
$.cg=0
$.os=!1
$.lv=0
$.iR=null
$.oi=0.1
$.oh=50})();(function lazyInitializers(){lazy($,"kv","$get$kv",function(){return H.lx("_$dart_dartClosure")})
lazy($,"jA","$get$jA",function(){return H.lx("_$dart_js")})
lazy($,"kH","$get$kH",function(){return H.n7()})
lazy($,"kI","$get$kI",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kE
$.kE=t+1
t="expando$key$"+t}return new P.el(null,t,[P.o])})
lazy($,"kW","$get$kW",function(){return H.aD(H.hs({
toString:function(){return"$receiver$"}}))})
lazy($,"kX","$get$kX",function(){return H.aD(H.hs({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kY","$get$kY",function(){return H.aD(H.hs(null))})
lazy($,"kZ","$get$kZ",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l2","$get$l2",function(){return H.aD(H.hs(void 0))})
lazy($,"l3","$get$l3",function(){return H.aD(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"l0","$get$l0",function(){return H.aD(H.l1(null))})
lazy($,"l_","$get$l_",function(){return H.aD(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"l5","$get$l5",function(){return H.aD(H.l1(void 0))})
lazy($,"l4","$get$l4",function(){return H.aD(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jK","$get$jK",function(){return P.nB()})
lazy($,"cb","$get$cb",function(){return[]})
lazy($,"ku","$get$ku",function(){return{}})
lazy($,"lf","$get$lf",function(){return P.jC(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jL","$get$jL",function(){return P.D()})
lazy($,"iP","$get$iP",function(){return P.kL(P.o,P.aG)})
lazy($,"cd","$get$cd",function(){return P.kL(P.v,P.aG)})
lazy($,"jP","$get$jP",function(){return T.E(0,1,0)})
lazy($,"jQ","$get$jQ",function(){return T.E(0,0,1)})
lazy($,"kS","$get$kS",function(){return new G.dE(1281,0,4294967295)})
lazy($,"kh","$get$kh",function(){return new G.dD(1281,1281,1281)})
lazy($,"a_","$get$a_",function(){return P.aL(["cBlendEquation",new G.l("","",0),"cDepthWrite",new G.l("","",0),"cDepthTest",new G.l("","",0),"cStencilFunc",new G.l("","",0),"tPosition",new G.l("vec3","",0),"tSpeed",new G.l("vec3","",0),"tForce",new G.l("vec3","",0),"aColors",new G.l("vec3","per vertex color",0),"aColorAlpha",new G.l("vec4","per vertex color",0),"aPosition",new G.l("vec3","vertex coordinates",0),"aTexUV",new G.l("vec2","texture uvs",0),"aNormal",new G.l("vec3","vertex normals",0),"aBinormal",new G.l("vec3","vertex binormals",0),"aCenter",new G.l("vec4","for wireframe",0),"aPointSize",new G.l("float","",0),"aBoneIndex",new G.l("vec4","",0),"aBoneWeight",new G.l("vec4","",0),"aTangent",new G.l("vec3","vertex tangents",0),"aBitangent",new G.l("vec3","vertex btangents",0),"iaRotation",new G.l("vec4","",0),"iaTranslation",new G.l("vec3","",0),"iaScale",new G.l("vec3","",0),"vColor",new G.l("vec3","per vertex color",0),"vTexUV",new G.l("vec2","",0),"vLightWeighting",new G.l("vec3","",0),"vNormal",new G.l("vec3","",0),"vPosition",new G.l("vec3","vertex coordinates",0),"vPositionFromLight",new G.l("vec4","delta from light",0),"vCenter",new G.l("vec4","for wireframe",0),"vDepth",new G.l("float","depth for shadowmaps",0),"uTransformationMatrix",new G.l("mat4","",0),"uModelMatrix",new G.l("mat4","",0),"uNormalMatrix",new G.l("mat3","",0),"uConvolutionMatrix",new G.l("mat3","",0),"uPerspectiveViewMatrix",new G.l("mat4","",0),"uLightPerspectiveViewMatrix",new G.l("mat4","",0),"uShadowMap",new G.l("sampler2DShadow","",0),"uTexture",new G.l("sampler2D","",0),"uTexture2",new G.l("sampler2D","",0),"uTexture3",new G.l("sampler2D","",0),"uTexture4",new G.l("sampler2D","",0),"uSpecularMap",new G.l("sampler2D","",0),"uNormalMap",new G.l("sampler2D","",0),"uBumpMap",new G.l("sampler2D","",0),"uDepthMap",new G.l("sampler2D","",0),"uCubeTexture",new G.l("samplerCube","",0),"uAnimationTable",new G.l("sampler2D","",0),"uTime",new G.l("float","time since program start in sec",0),"uCameraNear",new G.l("float","",0),"uCameraFar",new G.l("float","",0),"uFogNear",new G.l("float","",0),"uFogFar",new G.l("float","",0),"uPointSize",new G.l("float","",0),"uScale",new G.l("float","",0),"uAngle",new G.l("float","",0),"uCanvasSize",new G.l("vec2","",0),"uCenter2",new G.l("vec2","",0),"uCutOff",new G.l("float","",0),"uShininess",new G.l("float","",0),"uShadowBias",new G.l("float","",0),"uOpacity",new G.l("float","",0),"uColor",new G.l("vec3","",0),"uAmbientDiffuse",new G.l("vec3","",0),"uColorEmissive",new G.l("vec3","",0),"uColorSpecular",new G.l("vec3","",0),"uColorDiffuse",new G.l("vec3","",0),"uColorAlpha",new G.l("vec4","",0),"uColorAlpha2",new G.l("vec4","",0),"uEyePosition",new G.l("vec3","",0),"uMaterial",new G.l("mat4","",0),"uRange",new G.l("vec2","",0),"uDirection",new G.l("vec2","",0),"uBoneMatrices",new G.l("mat4","",128),"uLightDescs",new G.l("mat4","",4),"uLightCount",new G.l("float","",0),"uLightTypes",new G.l("float","",4),"uBumpScale",new G.l("float","for bump maps",0),"uNormalScale",new G.l("float","for normal maps",0)])})
lazy($,"kU","$get$kU",function(){var t=new G.dC(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"kV","$get$kV",function(){var t=new G.dC(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.c=!0
return t})
lazy($,"kD","$get$kD",function(){return G.fa("empty-mat")})
lazy($,"kr","$get$kr",function(){return T.E(0.4,0.4,0.4)})
lazy($,"kq","$get$kq",function(){return T.E(0.2,0.2,0.2)})
lazy($,"ko","$get$ko",function(){return T.E(0,0,0)})
lazy($,"kp","$get$kp",function(){return T.E(0,0,1)})
lazy($,"ks","$get$ks",function(){return T.E(0,0,0.5)})
lazy($,"kt","$get$kt",function(){return T.E(1,1,0)})
lazy($,"lM","$get$lM",function(){var t=new G.ar("ShadowMapV",null,[],[],[],[],0,P.D())
t.aB(["aPosition"])
t.a3(["uLightPerspectiveViewMatrix","uModelMatrix"])
t.a4(["    gl_Position = uLightPerspectiveViewMatrix * uModelMatrix *\n                  vec4(aPosition, 1.0);\n    "])
return t})
lazy($,"lL","$get$lL",function(){var t=new G.ar("ShadowMapF",null,[],[],[],[],0,P.D())
t.a4(["oFragColor.r = 1.0;"])
return t})
lazy($,"lU","$get$lU",function(){var t=new G.ar("copyV",null,[],[],[],[],0,P.D())
t.aB(["aPosition","aTexUV"])
t.aD(["vTexUV"])
t.a4(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"lT","$get$lT",function(){var t=new G.ar("copyF",null,[],[],[],[],0,P.D())
t.aD(["vTexUV"])
t.a3(["uTexture","uCutOff","uCameraFar","uCameraNear"])
t.a4(["   float d = texture(uTexture,  vTexUV).x;\n   float near = uCameraNear;\n   float far = uCameraFar;\n   float gray = (2.0 * near) / (far + near - d * (far - near));\n   oFragColor.rgb = vec3(gray);\n   // oFragColor.rgb = vec3(d >= uCutOff ? d : 0.0);\n   // oFragColor.rgb = vec3(d);\n"])
return t})
lazy($,"lP","$get$lP",function(){var t=new G.ar("SolidColor",null,[],[],[],[],0,P.D())
t.aB(["aPosition"])
t.a3(["uPerspectiveViewMatrix","uModelMatrix"])
t.a4(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lO","$get$lO",function(){var t=new G.ar("SolidColorF",null,[],[],[],[],0,P.D())
t.a3(["uColor"])
t.a4(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"lc","$get$lc",function(){return[T.E(0,0,1),T.E(0,0,-1),T.E(0,1,0),T.E(0,-1,0),T.E(1,0,0),T.E(-1,0,0)]})
lazy($,"kF","$get$kF",function(){return[new G.z(0,11,5),new G.z(0,5,1),new G.z(0,1,7),new G.z(0,7,10),new G.z(0,10,11),new G.z(1,5,9),new G.z(5,11,4),new G.z(11,10,2),new G.z(10,7,6),new G.z(7,1,8),new G.z(3,9,4),new G.z(3,4,2),new G.z(3,2,6),new G.z(3,6,8),new G.z(3,8,9),new G.z(4,9,5),new G.z(2,4,11),new G.z(6,2,10),new G.z(8,6,7),new G.z(9,8,1)]})
lazy($,"lR","$get$lR",function(){return(1+P.ot(5))/2})
lazy($,"jx","$get$jx",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lR()
s=T.E(-1,t,0)
s.C(0)
r=T.E(1,t,0)
r.C(0)
q=T.E(-1,-t,0)
q.C(0)
p=T.E(1,-t,0)
p.C(0)
o=T.E(0,-1,t)
o.C(0)
n=T.E(0,1,t)
n.C(0)
m=T.E(0,-1,-t)
m.C(0)
l=T.E(0,1,-t)
l.C(0)
k=T.E(t,0,-1)
k.C(0)
j=T.E(t,0,1)
j.C(0)
i=T.E(-t,0,-1)
i.C(0)
t=T.E(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"jb","$get$jb",function(){return T.la()})
lazy($,"jY","$get$jY",function(){return T.la()})
lazy($,"lD","$get$lD",function(){var t=new G.ar("LightBlinnPhongShadowV",null,[],[],[],[],0,P.D())
t.aB(["aPosition","aNormal"])
t.aD(["vPosition","vNormal","vPositionFromLight"])
t.a3(["uPerspectiveViewMatrix","uLightPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.a4(["        vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n        vPositionFromLight = uLightPerspectiveViewMatrix * pos;\n        gl_Position = uPerspectiveViewMatrix * pos;\n        vPosition = pos.xyz;\n        vNormal = uNormalMatrix * aNormal;\n        "])
return t})
lazy($,"lB","$get$lB",function(){var t=new G.ar("LightBlinnPhongShadowF",null,[],[],[],[],0,P.D())
t.aD(["vPosition","vNormal","vPositionFromLight"])
t.a3(["uLightDescs","uLightTypes","uShininess"])
t.a3(["uShadowMap","uEyePosition","uColor","uShadowBias"])
t.bD(["\n    vec3 depth = vPositionFromLight.xyz / vPositionFromLight.w;\n\t\t// depth is in [-1, 1] but we want [0, 1] for the texture lookup\n\t\tdepth = 0.5 * depth + vec3(0.5);\n\n    float shadow = GetShadow(depth, uShadowMap, 0.001, 0.001);\n\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n    if (shadow > 0.0) {\n        acc = CombinedLight(vPosition, vNormal, uEyePosition,\n                            uLightDescs, uLightTypes, uShininess);\n    }\n\n    oFragColor.rgb = shadow * acc.diffuse +\n                       shadow * acc.specular +\n                       uColor;\n    oFragColor.a = 1.0;\n    // if ( oFragColor.r != 66.0)  gl_FragColor.rgb = vec3(shadow);\n\n      "],["","// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n","\nfloat GetShadow(vec3 depth, sampler2DShadow shadowMap, float bias1, float bias2) {\n    depth.z = depth.z - bias1;\n    return texture(shadowMap, depth);\n    //return 1.0 - smoothstep(bias1, bias2, depth.z - d);\n}\n"])
return t})
lazy($,"lI","$get$lI",function(){return T.E(11,20,0)})
lazy($,"ls","$get$ls",function(){return T.E(0,-30,0)})
lazy($,"aH","$get$aH",function(){var t,s,r,q,p,o
t=$.$get$ls()
s=$.$get$kp()
r=$.$get$ko()
q=T.fb()
p=T.fb()
o=$.$get$lI()
return P.aL(["idDirectional",new G.aY(t,s,r,40,q,p,1,"dir",!1,!0),"idSpot",new G.as(o,t,s,r,40,0.5235987755982988,0.5,1,0.5,44,T.fb(),T.fb(),2,"spot",!1,!0),"idPoint",new G.b4(o,$.$get$ks(),s,40,3,"point",!1,!0)])})
lazy($,"lE","$get$lE",function(){var t=G.fa("matGray")
t.G("uColor",$.$get$kr())
t.G("uShininess",10)
return t})
lazy($,"lF","$get$lF",function(){var t=G.fa("objects")
t.G("uColor",$.$get$kq())
t.G("uShininess",10)
return t})
lazy($,"lC","$get$lC",function(){var t=G.fa("light")
t.G("uColor",$.$get$kt())
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
mangledGlobalNames:{o:"int",S:"double",a0:"num",v:"String",aG:"bool",b3:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.u},{func:1,ret:P.aG,args:[W.a9,P.v,P.v,W.c4]},{func:1,v:true,args:[P.r],opt:[P.bX]},{func:1,ret:P.o,args:[P.N,P.N]},{func:1,ret:P.v,args:[W.j]},{func:1,v:true,args:[W.k]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bP,ArrayBufferView:H.bp,DataView:H.fg,Float32Array:H.dj,Float64Array:H.fh,Int16Array:H.fi,Int32Array:H.fj,Int8Array:H.fk,Uint16Array:H.fl,Uint32Array:H.fm,Uint8ClampedArray:H.dn,CanvasPixelArray:H.dn,Uint8Array:H.fn,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLKeygenElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMenuItemElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.e_,HTMLAreaElement:W.e0,AudioTrack:W.a7,AudioTrackList:W.e3,Blob:W.ci,HTMLBodyElement:W.aW,HTMLCanvasElement:W.cj,CanvasRenderingContext2D:W.e5,CDATASection:W.aX,CharacterData:W.aX,Comment:W.aX,ProcessingInstruction:W.aX,Text:W.aX,CompositorWorker:W.e8,CSSCharsetRule:W.B,CSSFontFaceRule:W.B,CSSGroupingRule:W.B,CSSImportRule:W.B,CSSKeyframeRule:W.B,MozCSSKeyframeRule:W.B,WebKitCSSKeyframeRule:W.B,CSSKeyframesRule:W.B,MozCSSKeyframesRule:W.B,WebKitCSSKeyframesRule:W.B,CSSMediaRule:W.B,CSSNamespaceRule:W.B,CSSPageRule:W.B,CSSRule:W.B,CSSStyleRule:W.B,CSSSupportsRule:W.B,CSSViewportRule:W.B,CSSStyleDeclaration:W.bj,MSStyleCSSProperties:W.bj,CSS2Properties:W.bj,DataTransferItemList:W.eb,DeviceAcceleration:W.ec,HTMLDivElement:W.cl,XMLDocument:W.bB,Document:W.bB,DocumentFragment:W.cm,ShadowRoot:W.cm,DOMException:W.ed,DOMImplementation:W.cn,DOMPoint:W.ee,DOMPointReadOnly:W.co,DOMRectReadOnly:W.cp,DOMStringList:W.ef,DOMTokenList:W.eg,Element:W.a9,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BatteryManager:W.j,CanvasCaptureMediaStreamTrack:W.j,CrossOriginServiceWorkerClient:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,NetworkInformation:W.j,Notification:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationReceiver:W.j,PresentationRequest:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,ServicePortCollection:W.j,ServiceWorkerContainer:W.j,ServiceWorkerRegistration:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioContext:W.j,webkitAudioContext:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioSourceNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OfflineAudioContext:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aa,FileList:W.eE,FileWriter:W.eF,HTMLFormElement:W.eJ,Gamepad:W.ab,HTMLHeadElement:W.cw,History:W.eM,HTMLCollection:W.bK,HTMLFormControlsCollection:W.bK,HTMLOptionsCollection:W.bK,HTMLDocument:W.cx,XMLHttpRequest:W.eN,XMLHttpRequestUpload:W.bL,XMLHttpRequestEventTarget:W.bL,HTMLInputElement:W.bm,KeyboardEvent:W.b2,Location:W.f4,MediaList:W.fc,MIDIOutput:W.fd,MIDIInput:W.bO,MIDIPort:W.bO,MimeType:W.ac,MimeTypeArray:W.fe,PointerEvent:W.O,MouseEvent:W.O,DragEvent:W.O,Navigator:W.fo,Attr:W.u,Node:W.u,NodeIterator:W.dp,NodeList:W.bU,RadioNodeList:W.bU,Path2D:W.fx,Perspective:W.fA,Plugin:W.ad,PluginArray:W.fC,PositionValue:W.fF,PresentationConnection:W.fG,Range:W.dv,Rotation:W.fS,RTCDataChannel:W.dx,DataChannel:W.dx,HTMLSelectElement:W.fU,SharedWorker:W.fY,SourceBuffer:W.ae,SourceBufferList:W.fZ,SpeechGrammar:W.af,SpeechGrammarList:W.h0,SpeechRecognitionResult:W.ag,Storage:W.h5,CSSStyleSheet:W.a3,StyleSheet:W.a3,CalcLength:W.at,KeywordValue:W.at,LengthValue:W.at,NumberValue:W.at,SimpleLength:W.at,TransformValue:W.at,StyleValue:W.at,HTMLTableElement:W.dA,HTMLTableRowElement:W.hd,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.bZ,TextTrack:W.ah,TextTrackCue:W.a4,VTTCue:W.a4,TextTrackCueList:W.hh,TextTrackList:W.hi,TimeRanges:W.hj,Touch:W.ai,TouchEvent:W.b8,TouchList:W.hn,TrackDefaultList:W.ho,Matrix:W.br,Skew:W.br,TransformComponent:W.br,Translation:W.hq,TreeWalker:W.dF,CompositionEvent:W.aP,FocusEvent:W.aP,TextEvent:W.aP,SVGZoomEvent:W.aP,UIEvent:W.aP,URL:W.hw,VideoTrackList:W.hy,VTTRegionList:W.hB,WebSocket:W.hC,WheelEvent:W.ba,Window:W.c1,DOMWindow:W.c1,Worker:W.hF,CompositorWorkerGlobalScope:W.bb,DedicatedWorkerGlobalScope:W.bb,ServiceWorkerGlobalScope:W.bb,SharedWorkerGlobalScope:W.bb,WorkerGlobalScope:W.bb,ClientRect:W.hN,ClientRectList:W.dJ,DOMRectList:W.dJ,CSSRuleList:W.hP,DocumentType:W.hR,DOMRect:W.hS,GamepadList:W.i8,HTMLFrameSetElement:W.i9,NamedNodeMap:W.dM,MozNamedAttrMap:W.dM,ServiceWorker:W.it,SpeechRecognitionResultList:W.iw,StyleSheetList:W.ix,WorkerLocation:W.iE,WorkerNavigator:W.iF,SVGAElement:P.dZ,SVGAnimateElement:P.aV,SVGAnimateMotionElement:P.aV,SVGAnimateTransformElement:P.aV,SVGAnimationElement:P.aV,SVGSetElement:P.aV,SVGFEBlendElement:P.em,SVGFEColorMatrixElement:P.en,SVGFEComponentTransferElement:P.eo,SVGFECompositeElement:P.ep,SVGFEConvolveMatrixElement:P.eq,SVGFEDiffuseLightingElement:P.er,SVGFEDisplacementMapElement:P.es,SVGFEFloodElement:P.et,SVGFEGaussianBlurElement:P.eu,SVGFEImageElement:P.ev,SVGFEMergeElement:P.ew,SVGFEMorphologyElement:P.ex,SVGFEOffsetElement:P.ey,SVGFEPointLightElement:P.ez,SVGFESpecularLightingElement:P.eA,SVGFESpotLightElement:P.eB,SVGFETileElement:P.eC,SVGFETurbulenceElement:P.eD,SVGFilterElement:P.eG,SVGForeignObjectElement:P.eI,SVGCircleElement:P.ao,SVGEllipseElement:P.ao,SVGLineElement:P.ao,SVGPathElement:P.ao,SVGPolygonElement:P.ao,SVGPolylineElement:P.ao,SVGGeometryElement:P.ao,SVGClipPathElement:P.aK,SVGDefsElement:P.aK,SVGGElement:P.aK,SVGSwitchElement:P.aK,SVGGraphicsElement:P.aK,SVGImageElement:P.eP,SVGLength:P.az,SVGLengthList:P.eZ,SVGMarkerElement:P.f7,SVGMaskElement:P.f8,SVGNumber:P.aB,SVGNumberList:P.fr,SVGPatternElement:P.fy,SVGPoint:P.fD,SVGPointList:P.fE,SVGRect:P.fK,SVGRectElement:P.fL,SVGScriptElement:P.bW,SVGStringList:P.ha,SVGDescElement:P.M,SVGDiscardElement:P.M,SVGFEDistantLightElement:P.M,SVGFEFuncAElement:P.M,SVGFEFuncBElement:P.M,SVGFEFuncGElement:P.M,SVGFEFuncRElement:P.M,SVGFEMergeNodeElement:P.M,SVGMetadataElement:P.M,SVGStopElement:P.M,SVGStyleElement:P.M,SVGTitleElement:P.M,SVGComponentTransferFunctionElement:P.M,SVGElement:P.M,SVGSVGElement:P.hb,SVGSymbolElement:P.hc,SVGTextContentElement:P.dB,SVGTextPathElement:P.hg,SVGTSpanElement:P.c_,SVGTextElement:P.c_,SVGTextPositioningElement:P.c_,SVGTransform:P.aC,SVGTransformList:P.hp,SVGUseElement:P.hx,SVGViewElement:P.hz,SVGViewSpec:P.hA,SVGLinearGradientElement:P.c3,SVGRadialGradientElement:P.c3,SVGGradientElement:P.c3,SVGCursorElement:P.ip,SVGFEDropShadowElement:P.iq,SVGMPathElement:P.ir,AudioBuffer:P.e2,WebGLRenderingContext:P.fQ,WebGL2RenderingContext:P.fR,WebGL2RenderingContextBase:P.iD,SQLResultSetRowList:P.h1})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
W.bF.$nativeSuperclassTag="EventTarget"
W.bI.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bH.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"
W.bG.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lQ(L.lN(),b)},[])
else (function(b){H.lQ(L.lN(),b)})([])})})()