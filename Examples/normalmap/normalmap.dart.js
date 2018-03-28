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
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.ou(b)}
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
return d?function(e){if(t===null)t=H.k4(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.k4(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.k4(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jF:function jF(a){this.a=a},
jN:function(a,b,c,d){if(!!J.p(a).$isj)return new H.ep(a,b,[c,d])
return new H.cB(a,b,[c,d])},
cv:function(){return new P.bc("No element")},
ng:function(){return new P.bc("Too many elements")},
nf:function(){return new P.bc("Too few elements")},
nv:function(a,b){H.cQ(a,0,J.an(a)-1,b)},
cQ:function(a,b,c,d){if(c-b<=32)H.nu(a,b,c,d)
else H.nt(a,b,c,d)},
nu:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.D(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ac(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
nt:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.F(t+1,6)
r=a3+s
q=a4-s
p=C.b.F(a3+a4,2)
o=p-s
n=p+s
t=J.D(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ac(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ac(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ac(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ac(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ac(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ac(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ac(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ac(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ac(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.E(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cQ(a2,a3,g-2,a5)
H.cQ(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.E(a5.$2(t.h(a2,g),l),0);)++g
for(;J.E(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cQ(a2,g,f,a5)}else H.cQ(a2,g,f,a5)},
j:function j(){},
aJ:function aJ(){},
cA:function cA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cB:function cB(a,b,c){this.a=a
this.b=b
this.$ti=c},
ep:function ep(a,b,c){this.a=a
this.b=b
this.$ti=c},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bw:function bw(a,b,c){this.a=a
this.b=b
this.$ti=c},
d4:function d4(a,b,c){this.a=a
this.b=b
this.$ti=c},
hK:function hK(a,b,c){this.a=a
this.b=b
this.$ti=c},
b3:function b3(){},
dQ:function(a,b){var t=a.at(b)
if(!u.globalState.d.cy)u.globalState.f.az()
return t},
iY:function(){++u.globalState.f.b},
jb:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lX:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.p(s).$ish)throw H.c(P.c9("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.iv(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kW()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.i0(P.jL(null,H.aS),0)
q=P.x
s.sf6(new H.af(0,null,null,null,null,null,0,[q,H.bf]))
s.sf9(new H.af(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.iu()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.na,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nL)}if(u.globalState.x)return
o=H.ls()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.bm(a,{func:1,args:[P.M]}))o.at(new H.jl(t,a))
else if(H.bm(a,{func:1,args:[P.M,P.M]}))o.at(new H.jm(t,a))
else o.at(a)
u.globalState.f.az()},
nL:function(a){var t=P.aH(["command","print","msg",a])
return new H.a7(!0,P.bg(null,P.x)).N(t)},
ls:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.bf(t,new H.af(0,null,null,null,null,null,0,[s,H.cN]),P.aI(null,null,null,s),u.createNewIsolate(),new H.cN(0,null,!1),new H.ay(H.lT()),new H.ay(H.lT()),!1,!1,[],P.aI(null,null,null,null),null,null,!1,!0,P.aI(null,null,null,null))
t.dS()
return t},
nc:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.nd()
return},
nd:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
na:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aR(!0,[]).a3(b.data)
s=J.D(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.og(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aR(!0,[]).a3(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aR(!0,[]).a3(s.h(t,"replyTo"))
k=H.ls()
u.globalState.f.a.a_(0,new H.aS(k,new H.f0(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.az()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.mz(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.az()
break
case"close":u.globalState.ch.ay(0,$.$get$kX().h(0,a))
a.terminate()
u.globalState.f.az()
break
case"log":H.n9(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aH(["command","print","msg",t])
j=new H.a7(!0,P.bg(null,P.x)).N(j)
s.toString
self.postMessage(j)}else P.R(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
n9:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aH(["command","log","msg",a])
r=new H.a7(!0,P.bg(null,P.x)).N(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.L(q)
t=H.a9(q)
s=P.cn(t)
throw H.c(s)}},
nb:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.l4=$.l4+("_"+s)
$.l5=$.l5+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.bh(s,r),q,t.r])
r=new H.f1(t,d,a,c,b)
if(e){t.c4(q,q)
u.globalState.f.a.a_(0,new H.aS(t,r,"start isolate"))}else r.$0()},
nw:function(a,b){var t=new H.ht(!0,!1,null,0)
t.dK(a,b)
return t},
nN:function(a){return new H.aR(!0,[]).a3(new H.a7(!1,P.bg(null,P.x)).N(a))},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(a,b){this.a=a
this.b=b},
iv:function iv(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m},
bf:function bf(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j
_.Q=k
_.ch=l
_.cx=m
_.cy=n
_.db=o
_.dx=p},
im:function im(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
i1:function i1(a){this.a=a},
aS:function aS(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(){},
f0:function f0(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f1:function f1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hV:function hV(){},
bh:function bh(a,b){this.b=a
this.a=b},
iw:function iw(a,b){this.a=a
this.b=b},
c_:function c_(a,b,c){this.b=a
this.c=b
this.a=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(a,b){this.a=a
this.b=b},
ay:function ay(a){this.a=a},
a7:function a7(a,b){this.a=a
this.b=b},
aR:function aR(a,b){this.a=a
this.b=b},
oa:function(a){return u.types[a]},
oi:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.p(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bp(a)
if(typeof t!=="string")throw H.c(H.N(a))
return t},
nr:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.aq(t)
s=t[0]
r=t[1]
return new H.fV(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aL:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bC:function(a){var t,s,r,q,p,o,n,m,l
t=J.p(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.p(a).$isaP){p=C.A(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aV(q,0)===36)q=C.i.dk(q,1)
l=H.dS(H.j_(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
T:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
np:function(a){return a.b?H.T(a).getUTCFullYear()+0:H.T(a).getFullYear()+0},
nn:function(a){return a.b?H.T(a).getUTCMonth()+1:H.T(a).getMonth()+1},
nj:function(a){return a.b?H.T(a).getUTCDate()+0:H.T(a).getDate()+0},
nk:function(a){return a.b?H.T(a).getUTCHours()+0:H.T(a).getHours()+0},
nm:function(a){return a.b?H.T(a).getUTCMinutes()+0:H.T(a).getMinutes()+0},
no:function(a){return a.b?H.T(a).getUTCSeconds()+0:H.T(a).getSeconds()+0},
nl:function(a){return a.b?H.T(a).getUTCMilliseconds()+0:H.T(a).getMilliseconds()+0},
l3:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.N(a))
return a[b]},
bl:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a3(!0,b,"index",null)
t=J.an(a)
if(b<0||C.b.bl(b,t))return P.B(b,a,"index",null,t)
return P.fS(b,"index",null)},
N:function(a){return new P.a3(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.ba()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lZ})
t.name=""}else t.toString=H.lZ
return t},
lZ:function(){return J.bp(this.dartException)},
K:function(a){throw H.c(a)},
A:function(a){throw H.c(P.ad(a))},
ai:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hz(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hA:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
lf:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
l2:function(a,b){return new H.fD(a,b==null?null:b.method)},
jH:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f6(a,s,t?null:b.receiver)},
L:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b4(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jH(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.l2(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$l9()
o=$.$get$la()
n=$.$get$lb()
m=$.$get$lc()
l=$.$get$lg()
k=$.$get$lh()
j=$.$get$le()
$.$get$ld()
i=$.$get$lj()
h=$.$get$li()
g=p.T(s)
if(g!=null)return t.$1(H.jH(s,g))
else{g=o.T(s)
if(g!=null){g.method="call"
return t.$1(H.jH(s,g))}else{g=n.T(s)
if(g==null){g=m.T(s)
if(g==null){g=l.T(s)
if(g==null){g=k.T(s)
if(g==null){g=j.T(s)
if(g==null){g=m.T(s)
if(g==null){g=i.T(s)
if(g==null){g=h.T(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.l2(s,g))}}return t.$1(new H.hD(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cT()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a3(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cT()
return a},
a9:function(a){var t
if(a==null)return new H.dv(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dv(a,null)},
om:function(a){if(a==null||typeof a!='object')return J.bo(a)
else return H.aL(a)},
o8:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
oh:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dQ(b,new H.j6(a))
case 1:return H.dQ(b,new H.j7(a,d))
case 2:return H.dQ(b,new H.j8(a,d,e))
case 3:return H.dQ(b,new H.j9(a,d,e,f))
case 4:return H.dQ(b,new H.ja(a,d,e,f,g))}throw H.c(P.cn("Unsupported number of arguments for wrapped closure"))},
au:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.oh)
a.$identity=t
return t},
mR:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.p(c).$ish){t.$reflectionInfo=c
r=H.nr(t).r}else r=c
q=d?Object.create(new H.ha().constructor.prototype):Object.create(new H.bq(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kB(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.oa,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.ky:H.jz
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kB(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mO:function(a,b,c,d){var t=H.jz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kB:function(a,b,c){var t,s,r,q
if(c)return H.mQ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mO(s,b==null?r!=null:b!==r,t,b)
return q},
mP:function(a,b,c,d){var t,s
t=H.jz
s=H.ky
switch(b?-1:a){case 0:throw H.c(H.ns("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mQ:function(a,b){var t,s,r,q
t=$.kz
if(t==null){t=H.kw("self")
$.kz=t}t=$.kx
if(t==null){t=H.kw("receiver")
$.kx=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mP(r,b==null?q!=null:b!==q,s,b)
return t},
k4:function(a,b,c,d,e,f){var t,s
t=J.aq(b)
s=!!J.p(c).$ish?J.aq(c):c
return H.mR(a,t,s,!!d,e,f)},
jz:function(a){return a.a},
ky:function(a){return a.c},
kw:function(a){var t,s,r,q,p
t=new H.bq("self","target","receiver","name")
s=J.aq(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
oK:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aj(a,"String"))},
oF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aj(a,"double"))},
oJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aj(a,"num"))},
o1:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aj(a,"bool"))},
og:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aj(a,"int"))},
oo:function(a,b){throw H.c(H.aj(a,b.substring(3)))},
on:function(a,b){var t=J.D(b)
throw H.c(H.kA(a,t.bx(b,3,t.gi(b))))},
k9:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.p(a)[b])return a
H.oo(a,b)},
av:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.p(a)[b]
else t=!0
if(t)return a
H.on(a,b)},
oI:function(a){if(a==null)return a
if(!!J.p(a).$ish)return a
throw H.c(H.aj(a,"List"))},
k5:function(a){var t=J.p(a)
return"$S" in t?t.$S():null},
bm:function(a,b){var t,s
if(a==null)return!1
t=H.k5(a)
if(t==null)s=!1
else s=H.lN(t,b)
return s},
oG:function(a,b){var t,s
if(a==null)return a
if($.k1)return a
$.k1=!0
try{if(H.bm(a,b))return a
t=H.jf(b,null)
s=H.aj(a,t)
throw H.c(s)}finally{$.k1=!1}},
aj:function(a,b){return new H.hB("TypeError: "+H.e(P.cm(a))+": type '"+H.ly(a)+"' is not a subtype of type '"+b+"'")},
kA:function(a,b){return new H.e3("CastError: "+H.e(P.cm(a))+": type '"+H.ly(a)+"' is not a subtype of type '"+b+"'")},
ly:function(a){var t
if(a instanceof H.aA){t=H.k5(a)
if(t!=null)return H.jf(t,null)
return"Closure"}return H.bC(a)},
a8:function(a){if(!0===a)return!1
if(!!J.p(a).$isjD)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.aj(a,"bool"))},
al:function(a){throw H.c(new H.hP(a))},
b:function(a){if(H.a8(a))throw H.c(P.mN(null))},
ou:function(a){throw H.c(new P.ee(a))},
ns:function(a){return new H.h_(a)},
lT:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lL:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.at(a,null)},
z:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
j_:function(a){if(a==null)return
return a.$ti},
lM:function(a,b){return H.kf(a["$as"+H.e(b)],H.j_(a))},
Z:function(a,b,c){var t,s
t=H.lM(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aa:function(a,b){var t,s
t=H.j_(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
jf:function(a,b){var t=H.bn(a,b)
return t},
bn:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dS(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bn(t,b)
return H.nQ(a,b)}return"unknown-reified-type"},
nQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bn(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bn(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bn(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.o7(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bn(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dS:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bG("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bn(o,c)}return p?"":"<"+s.l(0)+">"},
j0:function(a){var t,s,r
if(a instanceof H.aA){t=H.k5(a)
if(t!=null)return H.jf(t,null)}s=J.p(a).constructor.name
if(a==null)return s
r=H.dS(a.$ti,0,null)
return s+r},
kf:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.ka(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.ka(a,null,b)
return b},
c3:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.j_(a)
s=J.p(a)
if(s[b]==null)return!1
return H.lC(H.kf(s[d],t),c)},
dU:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c3(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dS(c,0,null)
throw H.c(H.kA(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
oC:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c3(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dS(c,0,null)
throw H.c(H.aj(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lC:function(a,b){var t,s,r,q,p
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
if(!H.a_(r,b[p]))return!1}return!0},
oD:function(a,b,c){return H.ka(a,b,H.lM(b,c))},
a_:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="M")return!0
if('func' in b)return H.lN(a,b)
if('func' in a)return b.name==="jD"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.jf(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lC(H.kf(o,t),r)},
lB:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a_(o,n)||H.a_(n,o)))return!1}return!0},
nY:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.aq(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.a_(p,o)||H.a_(o,p)))return!1}return!0},
lN:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a_(t,s)||H.a_(s,t)))return!1}r=a.args
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
if(n===m){if(!H.lB(r,q,!1))return!1
if(!H.lB(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.a_(g,f)||H.a_(f,g)))return!1}}return H.nY(a.named,b.named)},
ka:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oL:function(a){var t=$.k7
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
oH:function(a){return H.aL(a)},
oE:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oj:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.k7.$1(a)
s=$.iX[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j5[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.lA.$2(a,t)
if(t!=null){s=$.iX[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.j5[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.je(r)
$.iX[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.j5[t]=r
return r}if(p==="-"){o=H.je(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lR(a,r)
if(p==="*")throw H.c(P.jV(t))
if(u.leafTags[t]===true){o=H.je(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lR(a,r)},
lR:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.kb(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
je:function(a){return J.kb(a,!1,null,!!a.$ist)},
ol:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.je(t)
else return J.kb(t,c,null,null)},
oe:function(){if(!0===$.k8)return
$.k8=!0
H.of()},
of:function(){var t,s,r,q,p,o,n,m
$.iX=Object.create(null)
$.j5=Object.create(null)
H.od()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lS.$1(p)
if(o!=null){n=H.ol(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
od:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.bk(C.O,H.bk(C.T,H.bk(C.z,H.bk(C.z,H.bk(C.S,H.bk(C.P,H.bk(C.Q(C.A),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.k7=new H.j2(p)
$.lA=new H.j3(o)
$.lS=new H.j4(n)},
bk:function(a,b){return a(b)||b},
ot:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fV:function fV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hz:function hz(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fD:function fD(a,b){this.a=a
this.b=b},
f6:function f6(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a){this.a=a},
jn:function jn(a){this.a=a},
dv:function dv(a,b){this.a=a
this.b=b},
j6:function j6(a){this.a=a},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aA:function aA(){},
ho:function ho(){},
ha:function ha(){},
bq:function bq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hB:function hB(a){this.a=a},
e3:function e3(a){this.a=a},
h_:function h_(a){this.a=a},
hP:function hP(a){this.a=a},
at:function at(a,b){this.a=a
this.b=b},
af:function af(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
f5:function f5(a){this.a=a},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fc:function fc(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
iP:function(a){var t,s,r
if(!!J.p(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ak:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bl(b,a))},
bz:function bz(){},
b9:function b9(){},
ft:function ft(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cD:function cD(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){},
cH:function cH(){},
fA:function fA(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
o7:function(a){return J.aq(H.z(a?Object.keys(a):[],[null]))},
dT:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
p:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cy.prototype
return J.cx.prototype}if(typeof a=="string")return J.aE.prototype
if(a==null)return J.f4.prototype
if(typeof a=="boolean")return J.f3.prototype
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.C)return a
return J.iZ(a)},
kb:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iZ:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.k8==null){H.oe()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jV("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jG()]
if(p!=null)return p
p=H.oj(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,$.$get$jG(),{value:C.u,enumerable:false,writable:true,configurable:true})
return C.u}return C.u},
aq:function(a){a.fixed$length=Array
return a},
D:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.C)return a
return J.iZ(a)},
aU:function(a){if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.C)return a
return J.iZ(a)},
k6:function(a){if(typeof a=="number")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aP.prototype
return a},
o9:function(a){if(typeof a=="number")return J.b7.prototype
if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aP.prototype
return a},
lK:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aP.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.C)return a
return J.iZ(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.p(a).w(a,b)},
ac:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k6(a).Z(a,b)},
m0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k6(a).I(a,b)},
aV:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oi(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.D(a).h(a,b)},
m1:function(a,b,c){return J.aU(a).j(a,b,c)},
m2:function(a,b,c,d){return J.i(a).dW(a,b,c,d)},
kh:function(a,b){return J.lK(a).aV(a,b)},
jo:function(a,b){return J.i(a).ed(a,b)},
m3:function(a,b,c,d){return J.i(a).ee(a,b,c,d)},
m4:function(a,b,c){return J.i(a).ef(a,b,c)},
ki:function(a,b){return J.i(a).c3(a,b)},
jp:function(a,b){return J.i(a).V(a,b)},
kj:function(a,b,c){return J.i(a).c6(a,b,c)},
m5:function(a,b){return J.i(a).ev(a,b)},
jq:function(a,b,c){return J.i(a).c7(a,b,c)},
m6:function(a,b,c){return J.i(a).c8(a,b,c)},
c7:function(a,b,c){return J.i(a).c9(a,b,c)},
dV:function(a,b){return J.i(a).ey(a,b)},
m7:function(a,b){return J.i(a).ca(a,b)},
m8:function(a,b,c){return J.i(a).cb(a,b,c)},
kk:function(a,b,c,d){return J.i(a).cc(a,b,c,d)},
m9:function(a,b){return J.aU(a).cd(a,b)},
ma:function(a,b,c,d,e){return J.i(a).ce(a,b,c,d,e)},
mb:function(a,b){return J.o9(a).W(a,b)},
jr:function(a,b,c){return J.D(a).eE(a,b,c)},
js:function(a){return J.i(a).cg(a)},
mc:function(a){return J.i(a).ci(a)},
md:function(a){return J.i(a).ck(a)},
me:function(a){return J.i(a).eK(a)},
mf:function(a,b){return J.i(a).cm(a,b)},
jt:function(a,b){return J.i(a).cn(a,b)},
mg:function(a,b,c,d){return J.i(a).co(a,b,c,d)},
mh:function(a,b,c,d,e){return J.i(a).eU(a,b,c,d,e)},
mi:function(a,b,c,d,e){return J.i(a).cp(a,b,c,d,e)},
mj:function(a,b,c,d,e,f){return J.i(a).eV(a,b,c,d,e,f)},
mk:function(a,b){return J.aU(a).t(a,b)},
dW:function(a,b){return J.i(a).cq(a,b)},
ml:function(a,b){return J.i(a).cr(a,b)},
mm:function(a){return J.i(a).eW(a)},
kl:function(a,b){return J.aU(a).a6(a,b)},
mn:function(a){return J.i(a).geu(a)},
bo:function(a){return J.p(a).gu(a)},
aW:function(a){return J.aU(a).gv(a)},
an:function(a){return J.D(a).gi(a)},
mo:function(a){return J.i(a).gbf(a)},
mp:function(a){return J.p(a).gB(a)},
mq:function(a){return J.i(a).gfm(a)},
mr:function(a){return J.i(a).gaM(a)},
ju:function(a){return J.i(a).gm(a)},
jv:function(a){return J.i(a).gn(a)},
km:function(a){return J.i(a).gG(a)},
jw:function(a,b){return J.i(a).ag(a,b)},
ms:function(a){return J.i(a).aO(a)},
mt:function(a){return J.i(a).bm(a)},
mu:function(a,b){return J.i(a).bn(a,b)},
mv:function(a,b,c){return J.i(a).bo(a,b,c)},
kn:function(a,b,c){return J.i(a).br(a,b,c)},
mw:function(a,b){return J.i(a).cw(a,b)},
mx:function(a,b){return J.aU(a).cC(a,b)},
my:function(a,b,c){return J.i(a).cE(a,b,c)},
ko:function(a){return J.aU(a).ff(a)},
mz:function(a,b){return J.i(a).J(a,b)},
mA:function(a,b,c,d){return J.i(a).bw(a,b,c,d)},
mB:function(a,b,c,d,e,f,g){return J.i(a).cJ(a,b,c,d,e,f,g)},
mC:function(a,b,c,d){return J.i(a).cK(a,b,c,d)},
kp:function(a,b,c,d){return J.i(a).cL(a,b,c,d)},
aX:function(a){return J.k6(a).fn(a)},
mD:function(a){return J.lK(a).fq(a)},
bp:function(a){return J.p(a).l(a)},
mE:function(a,b,c,d){return J.i(a).ft(a,b,c,d)},
mF:function(a,b,c){return J.i(a).cN(a,b,c)},
mG:function(a,b,c){return J.i(a).cO(a,b,c)},
jx:function(a,b,c){return J.i(a).cP(a,b,c)},
mH:function(a,b,c){return J.i(a).cQ(a,b,c)},
kq:function(a,b,c){return J.i(a).cR(a,b,c)},
kr:function(a,b,c){return J.i(a).cS(a,b,c)},
ks:function(a,b,c){return J.i(a).cT(a,b,c)},
kt:function(a,b,c,d){return J.i(a).cU(a,b,c,d)},
ku:function(a,b,c,d){return J.i(a).cV(a,b,c,d)},
mI:function(a,b){return J.i(a).cX(a,b)},
mJ:function(a,b,c){return J.i(a).fu(a,b,c)},
mK:function(a,b,c,d,e,f,g){return J.i(a).cZ(a,b,c,d,e,f,g)},
mL:function(a,b,c,d,e){return J.i(a).d0(a,b,c,d,e)},
a:function a(){},
f3:function f3(){},
f4:function f4(){},
bu:function bu(){},
fN:function fN(){},
aP:function aP(){},
aF:function aF(){},
aD:function aD(a){this.$ti=a},
jE:function jE(a){this.$ti=a},
ca:function ca(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
cy:function cy(){},
cx:function cx(){},
aE:function aE(){}},P={
nz:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nZ()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.au(new P.hR(t),1)).observe(s,{childList:true})
return new P.hQ(t,s,r)}else if(self.setImmediate!=null)return P.o_()
return P.o0()},
nA:function(a){H.iY()
self.scheduleImmediate(H.au(new P.hS(a),0))},
nB:function(a){H.iY()
self.setImmediate(H.au(new P.hT(a),0))},
nC:function(a){P.jS(C.w,a)},
jS:function(a,b){var t=C.b.F(a.a,1000)
return H.nw(t<0?0:t,b)},
nU:function(a,b){if(H.bm(a,{func:1,args:[P.M,P.M]})){b.toString
return a}else{b.toString
return a}},
n3:function(a,b,c){var t
if(a==null)a=new P.ba()
t=$.v
if(t!==C.d)t.toString
t=new P.G(0,t,null,[c])
t.bM(a,b)
return t},
n4:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.G(0,$.v,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eU(t,b,!1,s)
try{for(m=0,l=0;m<4;++m){q=a[m]
p=l
q.bj(new P.eT(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.G(0,$.v,null,[null])
l.bL(C.B)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.L(j)
n=H.a9(j)
if(t.b===0||!1)return P.n3(o,n,null)
else{t.c=o
t.d=n}}return s},
nO:function(a,b,c){$.v.toString
a.K(b,c)},
nG:function(a,b){var t=new P.G(0,$.v,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
lp:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.G))
H.b(b.a===0)
b.a=1
try{a.bj(new P.ia(b),new P.ib(b))}catch(r){t=H.L(r)
s=H.a9(r)
P.op(new P.ic(b,t,s))}},
i9:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aF()
b.aU(a)
P.be(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bY(r)}},
be:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iQ(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.be(t.a,b)}s=t.a
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
P.iQ(null,null,p,o,s)
return}s=$.v
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.v
H.b(l==null?s!=null:l!==s)
j=$.v
$.v=l
i=j}else i=null
s=b.c
if(s===8)new P.ii(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.ih(r,b,m).$0()}else if((s&2)!==0)new P.ig(t,r,b).$0()
if(i!=null){H.b(!0)
$.v=i}s=r.b
if(!!J.p(s).$isa0){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aG(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.i9(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aG(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nS:function(){var t,s
for(;t=$.bi,t!=null;){$.c1=null
s=t.b
$.bi=s
if(s==null)$.c0=null
t.a.$0()}},
nX:function(){$.k2=!0
try{P.nS()}finally{$.c1=null
$.k2=!1
if($.bi!=null)$.$get$jZ().$1(P.lD())}},
lx:function(a){var t=new P.d5(a,null)
if($.bi==null){$.c0=t
$.bi=t
if(!$.k2)$.$get$jZ().$1(P.lD())}else{$.c0.b=t
$.c0=t}},
nW:function(a){var t,s,r
t=$.bi
if(t==null){P.lx(a)
$.c1=$.c0
return}s=new P.d5(a,null)
r=$.c1
if(r==null){s.b=t
$.c1=s
$.bi=s}else{s.b=r.b
r.b=s
$.c1=s
if(s.b==null)$.c0=s}},
op:function(a){var t=$.v
if(C.d===t){P.bj(null,null,C.d,a)
return}t.toString
P.bj(null,null,t,t.bc(a))},
nM:function(a,b,c){var t=a.ez(0)
if(!!J.p(t).$isa0&&t!==$.$get$kR())t.fv(new P.iN(b,c))
else b.an(c)},
nx:function(a,b){var t=$.v
if(t===C.d){t.toString
return P.jS(a,b)}return P.jS(a,t.bc(b))},
jY:function(a){var t,s
H.b(a!=null)
t=$.v
H.b(a==null?t!=null:a!==t)
s=$.v
$.v=a
return s},
iQ:function(a,b,c,d,e){var t={}
t.a=d
P.nW(new P.iR(t,e))},
lv:function(a,b,c,d){var t,s
if($.v===c)return d.$0()
t=P.jY(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.v=s}},
lw:function(a,b,c,d,e){var t,s
if($.v===c)return d.$1(e)
t=P.jY(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
nV:function(a,b,c,d,e,f){var t,s
if($.v===c)return d.$2(e,f)
t=P.jY(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
bj:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.bc(d):c.ew(d)
P.lx(d)},
hR:function hR(a){this.a=a},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
a0:function a0(){},
eU:function eU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jA:function jA(){},
hW:function hW(){},
bM:function bM(a,b){this.a=a
this.$ti=b},
iI:function iI(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
G:function G(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i6:function i6(a,b){this.a=a
this.b=b},
ie:function ie(a,b){this.a=a
this.b=b},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a,b,c){this.a=a
this.b=b
this.c=c},
i8:function i8(a,b){this.a=a
this.b=b},
id:function id(a,b){this.a=a
this.b=b},
i7:function i7(a,b,c){this.a=a
this.b=b
this.c=c},
ii:function ii(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ij:function ij(a){this.a=a},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c},
ig:function ig(a,b,c){this.a=a
this.b=b
this.c=c},
d5:function d5(a,b){this.a=a
this.b=b},
bF:function bF(){},
hi:function hi(a){this.a=a},
hj:function hj(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a){this.a=a},
hf:function hf(){},
cV:function cV(){},
iN:function iN(a,b){this.a=a
this.b=b},
jR:function jR(){},
aY:function aY(a,b){this.a=a
this.b=b},
iM:function iM(){},
iR:function iR(a,b){this.a=a
this.b=b},
iy:function iy(){},
iA:function iA(a,b){this.a=a
this.b=b},
iz:function iz(a,b){this.a=a
this.b=b},
iB:function iB(a,b){this.a=a
this.b=b},
kZ:function(a,b){return new H.af(0,null,null,null,null,null,0,[a,b])},
O:function(){return new H.af(0,null,null,null,null,null,0,[null,null])},
aH:function(a){return H.o8(a,new H.af(0,null,null,null,null,null,0,[null,null]))},
bg:function(a,b){return new P.is(0,null,null,null,null,null,0,[a,b])},
aI:function(a,b,c,d){return new P.iq(0,null,null,null,null,null,0,[d])},
k0:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ne:function(a,b,c){var t,s
if(P.k3(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c2()
C.a.k(s,a)
try{P.nR(a,t)}finally{H.b(C.a.gaK(s)===a)
s.pop()}s=P.l8(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
f2:function(a,b,c){var t,s,r
if(P.k3(a))return b+"..."+c
t=new P.bG(b)
s=$.$get$c2()
C.a.k(s,a)
try{r=t
r.a=P.l8(r.gab(),a,", ")}finally{H.b(C.a.gaK(s)===a)
s.pop()}s=t
s.a=s.gab()+c
s=t.gab()
return s.charCodeAt(0)==0?s:s},
k3:function(a){var t,s
for(t=0;s=$.$get$c2(),t<s.length;++t)if(a===s[t])return!0
return!1},
nR:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.e(t.gq(t))
C.a.k(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq(t);++r
if(!t.p()){if(r<=4){C.a.k(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gq(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gq(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.k(b,"...")
return}}o=H.e(n)
p=H.e(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.k(b,k)
C.a.k(b,o)
C.a.k(b,p)},
jK:function(a,b){var t,s
t=P.aI(null,null,null,b)
for(s=J.aW(a);s.p();)t.k(0,s.gq(s))
return t},
l0:function(a){var t,s,r
t={}
if(P.k3(a))return"{...}"
s=new P.bG("")
try{C.a.k($.$get$c2(),a)
r=s
r.a=r.gab()+"{"
t.a=!0
J.kl(a,new P.fj(t,s))
t=s
t.a=t.gab()+"}"}finally{t=$.$get$c2()
H.b(C.a.gaK(t)===a)
t.pop()}t=s.gab()
return t.charCodeAt(0)==0?t:t},
jL:function(a,b){var t=new P.fe(null,0,0,0,[b])
t.dD(a,b)
return t},
is:function is(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
iq:function iq(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
bP:function bP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
il:function il(){},
jJ:function jJ(){},
cz:function cz(){},
l:function l(){},
bv:function bv(){},
fj:function fj(a,b){this.a=a
this.b=b},
aK:function aK(){},
fe:function fe(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
it:function it(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
h2:function h2(){},
h1:function h1(){},
bQ:function bQ(){},
nT:function(a,b){var t,s,r,q
if(typeof a!=="string")throw H.c(H.N(a))
t=null
try{t=JSON.parse(a)}catch(r){s=H.L(r)
q=String(s)
throw H.c(new P.eR(q,null,null))}q=P.iO(t)
return q},
iO:function(a){var t
if(a==null)return
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new P.io(a,Object.create(null),null)
for(t=0;t<a.length;++t)a[t]=P.iO(a[t])
return a},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
ip:function ip(a){this.a=a},
cc:function cc(){},
cd:function cd(){},
f7:function f7(a,b){this.a=a
this.b=b},
f8:function f8(a){this.a=a},
n_:function(a){var t=J.p(a)
if(!!t.$isaA)return t.l(a)
return"Instance of '"+H.bC(a)+"'"},
l_:function(a,b,c){var t,s
t=H.z([],[c])
for(s=J.aW(a);s.p();)C.a.k(t,s.gq(s))
if(b)return t
return J.aq(t)},
l8:function(a,b,c){var t=J.aW(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
mS:function(a,b){return J.mb(a,b)},
mU:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
mX:function(a,b,c,d,e,f){return new P.aC(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
cm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bp(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n_(a)},
mN:function(a){return new P.cb(a)},
c9:function(a){return new P.a3(!1,null,null,a)},
jy:function(a,b,c){return new P.a3(!0,a,b,c)},
mM:function(a){return new P.a3(!1,null,a,"Must not be null")},
fS:function(a,b,c){return new P.cM(null,null,!0,a,b,"Value not in range")},
aM:function(a,b,c,d,e){return new P.cM(b,c,!0,a,d,"Invalid value")},
jQ:function(a,b,c,d,e,f){if(C.b.Z(0,a)||C.b.Z(a,c))throw H.c(P.aM(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.Z(b,c))throw H.c(P.aM(b,a,c,"end",f))
return b}return c},
B:function(a,b,c,d,e){var t=e!=null?e:J.an(b)
return new P.f_(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.hE(a)},
jV:function(a){return new P.hC(a)},
cU:function(a){return new P.bc(a)},
ad:function(a){return new P.e5(a)},
cn:function(a){return new P.i5(a)},
R:function(a){H.dT(H.e(a))},
am:function am(){},
H:function H(){},
b1:function b1(a,b){this.a=a
this.b=b},
Y:function Y(){},
aC:function aC(a){this.a=a},
en:function en(){},
eo:function eo(){},
b2:function b2(){},
cb:function cb(a){this.a=a},
ba:function ba(){},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cM:function cM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f_:function f_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hE:function hE(a){this.a=a},
hC:function hC(a){this.a=a},
bc:function bc(a){this.a=a},
e5:function e5(a){this.a=a},
cT:function cT(){},
ee:function ee(a){this.a=a},
jC:function jC(){},
i5:function i5(a){this.a=a},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
er:function er(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
S:function S(){},
cw:function cw(){},
h:function h(){},
b8:function b8(){},
M:function M(){},
ab:function ab(){},
C:function C(){},
bb:function bb(){},
m:function m(){},
bG:function bG(a){this.a=a},
jU:function jU(){},
lG:function(a){return a},
iV:function(a){var t,s,r,q,p
if(a==null)return
t=P.O()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.A)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
o4:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.kl(a,new P.iS(t))
return t},
o5:function(a){var t,s
t=new P.G(0,$.v,null,[null])
s=new P.bM(t,[null])
a.then(H.au(new P.iT(s),1))["catch"](H.au(new P.iU(s),1))
return t},
kM:function(){var t=$.kL
if(t==null){t=J.jr(window.navigator.userAgent,"Opera",0)
$.kL=t}return t},
mW:function(){var t,s
t=$.kI
if(t!=null)return t
s=$.kJ
if(s==null){s=J.jr(window.navigator.userAgent,"Firefox",0)
$.kJ=s}if(s)t="-moz-"
else{s=$.kK
if(s==null){s=!P.kM()&&J.jr(window.navigator.userAgent,"Trident/",0)
$.kK=s}if(s)t="-ms-"
else t=P.kM()?"-o-":"-webkit-"}$.kI=t
return t},
hM:function hM(){},
hO:function hO(a,b){this.a=a
this.b=b},
iS:function iS(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
os:function(a){return Math.sqrt(a)},
ix:function ix(){},
W:function W(){},
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
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eN:function eN(){},
eP:function eP(){},
a6:function a6(){},
ae:function ae(){},
eY:function eY(){},
f9:function f9(){},
fl:function fl(){},
fn:function fn(){},
fE:function fE(){},
fL:function fL(){},
fP:function fP(){},
fQ:function fQ(){},
fT:function fT(){},
fU:function fU(){},
bE:function bE(){},
hk:function hk(){},
w:function w(){},
hl:function hl(){},
bI:function bI(){},
bJ:function bJ(){},
hy:function hy(){},
hG:function hG(){},
df:function df(){},
dg:function dg(){},
dm:function dm(){},
dn:function dn(){},
dx:function dx(){},
dy:function dy(){},
dD:function dD(){},
dE:function dE(){},
e_:function e_(){},
e0:function e0(){},
aZ:function aZ(){},
fF:function fF(){},
fY:function fY(){},
fZ:function fZ(){},
h9:function h9(){},
dt:function dt(){},
du:function du(){}},W={
mY:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).S(t,a,b,c)
s.toString
t=new H.d4(new W.U(s),new W.eq(),[W.r])
return t.ga8(t)},
mZ:function(a){return"wheel"},
br:function(a){var t,s,r
t="element tag unavailable"
try{s=J.mq(a)
if(typeof s==="string")t=a.tagName}catch(r){H.L(r)}return t},
nD:function(a,b){return document.createElement(a)},
aT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lt:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a2:function(a,b,c,d,e){var t=c==null?null:W.lz(new W.i4(c))
t=new W.i3(0,a,b,t,!1,[e])
t.dQ(a,b,c,!1,e)
return t},
lq:function(a){var t,s
t=document.createElement("a")
s=new W.iC(t,window.location)
s=new W.bO(s)
s.dR(a)
return s},
nI:function(a,b,c,d){return!0},
nJ:function(a,b,c,d){var t,s,r,q,p
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
lu:function(){var t=P.m
t=new W.iJ(P.jK(C.q,t),P.aI(null,null,null,t),P.aI(null,null,null,t),P.aI(null,null,null,t),null)
t.dU(null,new H.bw(C.q,new W.iK(),[H.aa(C.q,0),null]),["TEMPLATE"],null)
return t},
nP:function(a){var t
if(!!J.p(a).$isaB)return a
t=new P.hN([],[],!1)
t.c=!0
return t.bk(a)},
lz:function(a){var t=$.v
if(t===C.d)return a
return t.ex(a)},
k:function k(){},
c8:function c8(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
aw:function aw(){},
ax:function ax(){},
e2:function e2(){},
az:function az(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
b_:function b_(){},
ea:function ea(){},
a4:function a4(){},
b0:function b0(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
cg:function cg(){},
aB:function aB(){},
ei:function ei(){},
ch:function ch(){},
ej:function ej(){},
ci:function ci(){},
ek:function ek(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
el:function el(){},
em:function em(){},
a5:function a5(){},
eq:function eq(){},
f:function f(){},
d:function d(){},
eL:function eL(){},
eM:function eM(){},
eQ:function eQ(){},
eV:function eV(){},
cs:function cs(){},
eW:function eW(){},
bs:function bs(){},
ct:function ct(){},
cu:function cu(){},
bt:function bt(){},
b4:function b4(){},
b5:function b5(){},
b6:function b6(){},
aG:function aG(){},
fh:function fh(){},
fi:function fi(){},
bx:function bx(){},
fo:function fo(){},
fq:function fq(){},
by:function by(){},
fr:function fr(){},
P:function P(){},
U:function U(a){this.a=a},
r:function r(){},
cI:function cI(){},
bB:function bB(){},
ag:function ag(){},
fO:function fO(){},
fR:function fR(){},
cL:function cL(){},
cP:function cP(){},
h0:function h0(){},
as:function as(){},
h5:function h5(){},
h7:function h7(){},
ah:function ah(){},
hd:function hd(){},
he:function he(a){this.a=a},
cX:function cX(){},
hm:function hm(){},
hn:function hn(){},
bH:function bH(){},
hp:function hp(){},
hq:function hq(){},
hs:function hs(){},
aN:function aN(){},
hw:function hw(){},
hx:function hx(){},
d2:function d2(){},
aO:function aO(){},
hF:function hF(){},
hH:function hH(){},
bd:function bd(){},
hI:function hI(){},
hJ:function hJ(){},
aQ:function aQ(){},
bL:function bL(){},
hL:function hL(a){this.a=a},
jX:function jX(){},
hX:function hX(){},
hY:function hY(){},
ik:function ik(){},
dj:function dj(){},
iF:function iF(){},
iG:function iG(){},
hU:function hU(){},
hZ:function hZ(a){this.a=a},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i3:function i3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
i4:function i4(a){this.a=a},
bO:function bO(a){this.a=a},
n:function n(){},
cK:function cK(a){this.a=a},
fC:function fC(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(){},
iD:function iD(){},
iE:function iE(){},
iJ:function iJ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iK:function iK(){},
iH:function iH(){},
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cJ:function cJ(){},
jO:function jO(){},
jW:function jW(){},
iC:function iC(a,b){this.a=a
this.b=b},
dF:function dF(a){this.a=a},
iL:function iL(a){this.a=a},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
dh:function dh(){},
di:function di(){},
dk:function dk(){},
dl:function dl(){},
dp:function dp(){},
dq:function dq(){},
bW:function bW(){},
bX:function bX(){},
dr:function dr(){},
ds:function ds(){},
dw:function dw(){},
dz:function dz(){},
dA:function dA(){},
bY:function bY(){},
bZ:function bZ(){},
dB:function dB(){},
dC:function dC(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){}},B={
oq:function(a){var t,s
t=document
s=W.aG
W.a2(t,"keydown",new B.jg(),!1,s)
W.a2(t,"keyup",new B.jh(),!1,s)
if(!$.or)W.a2(t,"mousemove",new B.ji(),!1,W.P)
s=W.P
W.a2(t,"mousedown",new B.jj(),!1,s)
W.a2(t,"mouseup",new B.jk(),!1,s)},
ni:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iW()
r=$.$get$c4()
q=new T.I(new Float32Array(16))
q.O()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fG(a,b,c,0,new T.o(t),-0.02,s,r,q,new T.o(p),new T.o(o),new T.o(n),new T.o(new Float32Array(3)),"camera:orbit",!1,!0)
t.dF(a,b,c,d)
return t},
jg:function jg(){},
jh:function jh(){},
ji:function ji(){},
jj:function jj(){},
jk:function jk(){},
fG:function fG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=e
_.k3=f
_.k4=g
_.r1=h
_.d=i
_.e=j
_.f=k
_.r=l
_.x=m
_.a=n
_.b=o
_.c=p},
fH:function fH(a){this.a=a},
fI:function fI(a){this.a=a},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
n5:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.L(t,$.$get$kT())
C.a.L(s,$.$get$kU())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.A)(t),++o){n=t[o]
m=J.i(n)
l=C.a.h(s,m.gU(n))
k=new T.o(new Float32Array(3))
k.C(l)
k.k(0,C.a.h(s,m.gR(n)))
k.a7(0,0.5)
k.E(0)
l=C.a.h(s,m.gR(n))
j=new T.o(new Float32Array(3))
j.C(l)
j.k(0,C.a.h(s,m.ga1(n)))
j.a7(0,0.5)
j.E(0)
l=C.a.h(s,m.ga1(n))
i=new T.o(new Float32Array(3))
i.C(l)
i.k(0,C.a.h(s,m.gU(n)))
i.a7(0,0.5)
i.E(0)
h=s.length
C.a.k(s,k)
g=s.length
C.a.k(s,j)
f=s.length
C.a.k(s,i)
C.a.k(q,new G.ap(m.gU(n),h,f))
C.a.k(q,new G.ap(m.gR(n),g,h))
C.a.k(q,new G.ap(m.ga1(n),f,g))
C.a.k(q,new G.ap(h,g,f))}}e=new G.cr(!1,[],[],[],P.O())
e.aa("aTexUV")
e.aa("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.A)(t),++o){n=t[o]
m=J.i(n)
d=C.a.h(s,m.gU(n))
H.b(Math.sqrt(d.gX())<1.01&&Math.sqrt(d.gX())>0.99)
c=C.a.h(s,m.gR(n))
H.b(Math.sqrt(c.gX())<1.01&&Math.sqrt(c.gX())>0.99)
b=C.a.h(s,m.ga1(n))
H.b(Math.sqrt(b.gX())<1.01&&Math.sqrt(b.gX())>0.99)
m=d.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a=new Float32Array(2)
a[0]=0.5*(1+l*0.3183098861837907)
a[1]=m*0.3183098861837907
m=c.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a0=new Float32Array(2)
a0[0]=0.5*(1+l*0.3183098861837907)
a0[1]=m*0.3183098861837907
m=b.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a1=new Float32Array(2)
a1[0]=0.5*(1+l*0.3183098861837907)
a1[1]=m*0.3183098861837907
e.bA("aNormal",[d,c,b])
m=new T.o(new Float32Array(3))
m.C(d)
m.a7(0,a4)
l=new T.o(new Float32Array(3))
l.C(c)
l.a7(0,a4)
a2=new T.o(new Float32Array(3))
a2.C(b)
a2.a7(0,a4)
e.bD([m,l,a2])
e.bz("aTexUV",[new T.X(a),new T.X(a0),new T.X(a1)])}return e}},G={
ny:function(a){var t,s,r
t=H.z(a.split("\n"),[P.m])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ax(t,"\n")},
lo:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.cj(a,b)
t.bu(a,s,c)
t.cf(a,s)
r=t.bq(a,s,35713)
if(r!=null&&!r){q=t.bp(a,s)
P.R("E:Compilation failed:")
P.R("E:"+G.ny(c))
P.R("E:Failure:")
P.R(C.i.a4("E:",q))
throw H.c(q)}return s},
F:function(a,b,c){return new G.ap(a,b,c)},
n6:function(a,b,c){var t,s,r,q,p,o
C.t.ct(a,0,a.length,0)
C.t.ct(b,0,4,0)
for(t=c.length,s=0,r=0;r<c.length;c.length===t||(0,H.A)(c),++r){q=c[r]
p=s*16
o=q.x.a
a[p]=o[0]
a[p+1]=o[1]
a[p+2]=o[2]
o=q.y.a
a[p+4]=o[0]
a[p+5]=o[1]
a[p+6]=o[2]
o=q.z.a
a[p+8]=o[0]
a[p+9]=o[1]
a[p+10]=o[2]
o=q.Q.a
a[p+12]=o[0]
a[p+13]=o[1]
a[p+14]=o[2]
a[p+7]=q.ch
a[p+11]=Math.cos(q.cx)
a[p+15]=q.cy
b[s]=q.d;++s}},
l1:function(a){var t=new G.fm(P.O(),a,!1,!0)
t.dE(a)
return t},
kQ:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ju(a[s])
b[t+1]=J.jv(a[s])
b[t+2]=J.km(a[s])}return b},
n1:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ju(a[s])
b[t+1]=J.jv(a[s])}return b},
n2:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ju(a[s])
b[t+1]=J.jv(a[s])
b[t+2]=J.km(a[s])
b[t+3]=J.mr(a[s])}return b},
n0:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aV(a[s],0)
b[t+1]=J.aV(a[s],1)
b[t+2]=J.aV(a[s],2)
b[t+3]=J.aV(a[s],3)}return b},
nH:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gA(t),s=s.gv(s),r=b.x,q=[[P.h,P.x]],p=[P.Y],o=[T.a1],n=[T.o],m=[T.X];s.p();){l=s.gq(s)
if(!r.H(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.lJ>0)H.dT("I: "+l)
continue}k=t.h(0,l)
switch($.$get$V().h(0,l).a){case"vec2":b.ak(l,G.n1(H.dU(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.ak(l,G.kQ(H.dU(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.ak(l,G.n2(H.dU(k,"$ish",o,"$ash"),null),4)
break
case"float":b.ak(l,new Float32Array(H.iP(H.dU(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.ak(l,G.n0(H.dU(k,"$ish",q,"$ash"),null),4)
break
default:if(H.a8(!1))H.al("unknown type for "+H.e(l)+" ["+J.mp(k[0]).l(0)+"] ["+new H.at(H.j0(k),null).l(0)+"] "+H.e(k))}}},
kS:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.O()
q=J.me(t.a)
p=new G.fp(t,q,4,r,s,null,0,-1,null,null,P.O(),C.i.a4("meshdata:",a),!1,!0)
o=G.kQ(c.d,null)
r.j(0,"aPosition",J.js(t.a))
p.ch=o
p.bE("aPosition",o,3)
n=$.$get$V().h(0,"aPosition")
if(n==null)H.K("Unknown canonical aPosition")
H.b(s.H(0,"aPosition"))
m=s.h(0,"aPosition")
J.dV(t.a,q)
t.cs(0,m,0)
t.d_(0,r.h(0,"aPosition"),m,n.bF(),5126,!1,0,0)
s=c.dA()
p.y=J.js(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.sb_(new Uint8Array(H.iP(s)))
p.Q=5121}else if(r<196608){p.sb_(new Uint16Array(H.iP(s)))
p.Q=5123}else{p.sb_(new Uint32Array(H.iP(s)))
p.Q=5125}J.dV(t.a,q)
s=p.y
r=p.cx
q=J.p(r)
H.b(!!q.$islk||!!q.$isll||!!q.$islm)
J.jq(t.a,34963,s)
J.kk(t.a,34963,r,35048)
G.nH(c,p)
return p},
l6:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aI(null,null,null,P.m)
s=c.b
r=d.b
q=c.f
p=J.mc(b.a)
o=G.lo(b.a,35633,s)
J.kj(b.a,p,o)
n=G.lo(b.a,35632,r)
J.kj(b.a,p,n)
if(q.length>0)J.mE(b.a,p,q,35980)
J.mw(b.a,p)
if(!J.mv(b.a,p,35714))H.K(J.mu(b.a,p))
t=new G.fX(b,c,d,p,P.jK(c.c,null),P.O(),P.O(),t,null,a,!1,!0)
t.dH(a,b,c,d)
return t},
h4:function(a){return new G.h3(a,null,[],[],[],[],0,P.O())},
fs:function fs(){},
d3:function d3(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e1:function e1(){},
e4:function e4(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ap:function ap(a,b,c){this.a=a
this.b=b
this.c=c},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fa:function fa(){},
h8:function h8(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.dx=i
_.dy=j
_.fr=k
_.fx=l
_.d=m
_.a=n
_.b=o
_.c=p},
eX:function eX(a,b,c,d,e,f,g){var _=this
_.x=a
_.y=b
_.z=c
_.d=d
_.a=e
_.b=f
_.c=g},
d0:function d0(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
fp:function fp(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.ch=i
_.cx=j
_.cy=k
_.a=l
_.b=m
_.c=n},
fM:function fM(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
_.b=k
_.c=l},
fX:function fX(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.ch=i
_.a=j
_.b=k
_.c=l},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
h3:function h3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h6:function h6(){},
hr:function hr(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bK:function bK(){},
eZ:function eZ(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={cO:function cO(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.db=a
_.dx=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j
_.a=k
_.b=l
_.c=m},hb:function hb(){},hc:function hc(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
lH:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.C(c)
s=b.d
t.cD(0,s)
r=b.ch
if(r!=null&&b.cx!=null){H.e(b)
q=C.a.gaK(e)
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
p.eG(new T.ar(o))
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
C.a.k(e,r)
a.dz(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.A)(s),++l)A.lH(a,s[l],t,d,e)},
bA:function bA(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
_.ch=a
_.cx=b
_.cy=c
_.db=d
_.dx=e
_.d=f
_.e=g
_.f=h
_.r=i
_.x=j
_.a=k
_.b=l
_.c=m},
bD:function bD(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fW:function fW(){},
dR:function(a){var t,s
t=C.t.eX(a,0,new A.j1())
s=536870911&t+(C.b.d1(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
j1:function j1(){}},D={
nh:function(a){var t,s
t=new P.G(0,$.v,null,[null])
s=new XMLHttpRequest()
C.x.fc(s,"GET",a)
W.a2(s,"loadend",new D.fg(new P.bM(t,[null]),s),!1,W.oA)
C.x.J(s,"")
return t},
jM:function(a){var t,s,r
t=new P.G(0,$.v,null,[null])
s=document.createElement("img")
r=new W.i_(s,"load",!1,[W.f])
r.gbe(r).aL(new D.ff(new P.bM(t,[null]),s))
s.src=a
return t},
fg:function fg(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b}},T={
Q:function(a,b,c){var t=new T.o(new Float32Array(3))
t.ai(a,b,c)
return t},
ln:function(a){var t=new Float32Array(3)
t[2]=a
t[1]=a
t[0]=a
return new T.o(t)},
ar:function ar(a){this.a=a},
I:function I(a){this.a=a},
X:function X(a){this.a=a},
o:function o(a){this.a=a},
a1:function a1(a){this.a=a}},Q={
ok:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t={}
s=document
r=new R.hc(0,0,null,null,null,null)
r.dJ(C.p.d4(s,"stats"),"blue","gray")
q=C.p.fe(s,"#webgl-canvas")
p=new G.e4(null,q)
s=(q&&C.K).d3(q,"webgl2",P.aH(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.K(P.cn('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.ms(s))
if($.lJ>0)P.R("I: "+o)
J.ma(s,0,0,0,1)
J.dW(s,2929)
n=B.ni(0.5,0,0,q)
s=new T.I(new Float32Array(16))
s.O()
o=new T.I(new Float32Array(16))
o.O()
m=new G.fM(n,50,1,0.1,100,s,o,new T.I(new Float32Array(16)),P.O(),"perspective",!1,!0)
m.bH()
s=[]
o=new Float32Array(64)
l=new G.eX(s,o,new Float32Array(4),P.O(),"illumination",!1,!0)
o=$.$get$ke()
k=$.$get$lE()
j=$.$get$lF()
i=new Float32Array(16)
C.a.k(s,new G.h8(o,o,k,j,50,0.95,2,1,1,50,new T.I(i),new T.I(new Float32Array(16)),2,"spot",!1,!0))
s=H.z([],[A.bD])
h=new R.cO(q,m,null,p,s,17664,0,0,0,0,"main",!1,!0)
h.dG("main",p,null)
h.cG(null)
W.a2(window,"resize",h.gfi(),!1,W.f)
o=G.l6("Fixed",p,$.$get$lV(),$.$get$lU())
k=[]
H.b(!0)
C.a.k(s,new A.bD(o,[m,l],k,"Fixed",!1,!0))
g=G.l1("light")
g.P("uColor",$.$get$kD())
g.P("uShininess",25)
o=G.kS("icosahedron-4",o,B.n5(4,0.1,!0))
j=new Float32Array(9)
i=new T.I(new Float32Array(16))
i.O()
f=new Float32Array(16)
e=new T.I(f)
e.O()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
a0=$.$get$ke().a
f[12]=a0[0]
f[13]=a0[1]
f[14]=a0[2]
H.b(!0)
C.a.k(k,new A.bA(g,o,[],new T.ar(j),i,e,new T.o(d),new T.o(c),new T.o(b),new T.o(a),"pointLight",!1,!0))
a=G.l6("main",p,$.$get$m_(),$.$get$lI())
a1=new A.bD(a,[m,l],[],"main",!1,!0)
H.b(!0)
C.a.k(s,a1)
t.a=0
a2=G.l1("mat")
a2.P("uColor",$.$get$kC())
a2.P("uShininess",25)
P.n4([D.nh($.$get$kc()),D.jM($.$get$kg()),D.jM($.$get$lW()),D.jM($.$get$lP())],null,!1).aL(new Q.jd(p,a2,a1,new Q.jc(t,n,h,r)))},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},Y={
nF:function(a){var t,s,r,q
t=J.D(a)
s=new Array(t.gi(a))
s.fixed$length=Array
r=H.z(s,[P.Y])
for(q=0;C.b.I(q,t.gi(a));++q){s=t.h(a,q)
if(typeof s==="number"&&Math.floor(s)===s)r[q]=J.aX(t.h(a,q))
else{s=t.h(a,q)
if(typeof s==="number")r[q]=t.h(a,q)
else if(H.a8(!1))H.al("bad numeric type ["+H.e(t.h(a,q))+"]")}}return r},
nK:function(a){var t,s,r,q
t=J.D(a)
s=new Array(t.gi(a))
s.fixed$length=Array
r=H.z(s,[P.x])
for(q=0;C.b.I(q,t.gi(a));++q)r[q]=t.h(a,q)
return r},
nE:function(a){var t,s,r,q,p
t=J.D(a)
s=t.h(a,"skinIndices")
r=t.h(a,"skinWeights")
if(s==null||J.an(s)===0)return 0
t=C.c.F(J.an(t.h(a,"vertices")),3)
q=J.D(s)
p=C.b.aj(q.gi(s),t)
t*=p
H.b(t===q.gi(s))
H.b(t===J.an(r))
H.b(p<=4)
P.R("Skin multiplier is "+p)
return p},
n7:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t=[]
s=Y.nE(b2)
r=J.D(b2)
q=Y.nK(r.h(b2,"faces"))
p=q.length
P.R("faces: "+p)
o=Y.kE(r.h(b2,"vertices"))
n=Y.kE(r.h(b2,"normals"))
m=s===0
l=m?null:Y.kF(s,r.h(b2,"skinIndices"))
k=m?null:Y.kF(s,Y.nF(r.h(b2,"skinWeights")))
if(k!=null)for(m=k.length,j=0;j<m;++j){i=k[j]
h=i.a
g=h[0]+h[1]+h[2]+h[3]
if(g<0.98||g>1.02)H.dT("bad vector: "+H.e(i))}f=Y.mT(J.aV(r.h(b2,"uvs"),0))
for(r=s>0,m=f.length>0,h=n.length>0,e=o.length,d=0;d<p;){c=d+1
b=q[d]
g=(b&1)===0?3:4
a=[]
for(d=c,a0=0;a0<g;++a0,d=c){c=d+1
C.a.k(a,q[d])}if((b&2)!==0){c=d+1
a1=q[d]
d=c}else a1=0
a2=[]
if((b&8)!==0)for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.k(a2,C.a.h(f,q[d]))}a3=[]
if((b&16)!==0){c=d+1
a4=C.a.h(n,q[d])
for(a0=0;a0<g;++a0)C.a.k(a3,a4)
d=c}if((b&32)!==0)for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.k(a3,C.a.h(n,q[d]))}a5=[]
if((b&64)!==0){H.b(!1)
c=d+1
a6=q[d]
for(a0=0;a0<g;++a0)C.a.k(a5,a6)
d=c}if((b&128)!==0){H.b(!1)
for(a0=0;a0<g;++a0,d=c){c=d+1
C.a.k(a5,q[d])}}for(;C.b.d5(t.length,a1);){a7=new G.cr(!1,[],[],[],P.O())
if(h)a7.aa("aNormal")
if(m)a7.aa("aTexUV")
if(r){a7.aa("aBoneIndex")
a7.aa("aBoneWeight")}C.a.k(t,a7)}a7=C.a.h(t,a1)
a8=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.A)(a),++j)C.a.k(a8,C.a.h(o,a[j]))
if(g===3)a7.bD(a8)
else{H.b(g===4)
a7.ds(a8)}if(a2.length>0)a7.bz("aTexUV",a2)
if(a3.length>0)a7.bA("aNormal",a3)
if(r){H.b(e===l.length)
H.b(e===k.length)
b0=[]
b1=[]
for(a9=a.length,j=0;j<a.length;a.length===a9||(0,H.A)(a),++j){c=a[j]
C.a.k(b0,C.a.h(l,c))
C.a.k(b1,C.a.h(k,c))}a7.bB("aBoneIndex",b0)
a7.bB("aBoneWeight",b1)}}P.R("out: "+t.length+" "+t[0].l(0))
return t},
kE:function(a){var t,s,r,q,p,o,n,m
t=J.D(a)
s=new Array(C.b.F(t.gi(a),3))
s.fixed$length=Array
r=H.z(s,[T.o])
for(q=0;C.b.I(q,t.gi(a));q+=3){s=C.b.F(q,3)
p=J.aX(t.h(a,q))
o=J.aX(t.h(a,q+1))
n=J.aX(t.h(a,q+2))
m=new Float32Array(3)
m[0]=p
m[1]=o
m[2]=n
r[s]=new T.o(m)}return r},
mT:function(a){var t,s,r,q,p,o,n
t=J.D(a)
s=new Array(C.b.F(t.gi(a),2))
s.fixed$length=Array
r=H.z(s,[T.X])
for(q=0;C.b.I(q,t.gi(a));q+=2){s=C.b.F(q,2)
p=J.aX(t.h(a,q))
o=J.aX(t.h(a,q+1))
n=new Float32Array(2)
n[0]=p
n[1]=o
r[s]=new T.X(n)}return r},
kF:function(a,b){var t,s,r,q,p,o
t=J.D(b)
s=new Array(C.b.aj(t.gi(b),a))
s.fixed$length=Array
r=H.z(s,[T.a1])
for(q=0,p=0;C.b.I(q,t.gi(b));q+=a,++p){s=new Float32Array(4)
for(o=0;o<a;++o)s[o]=J.aX(t.h(b,q+o))
r[p]=new T.a1(s)}return r}}
var v=[C,H,J,P,W,B,G,R,A,D,T,Q,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jF.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aL(a)},
l:function(a){return"Instance of '"+H.bC(a)+"'"},
gB:function(a){return new H.at(H.j0(a),null)}}
J.f3.prototype={
l:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gB:function(a){return C.as},
$isam:1}
J.f4.prototype={
w:function(a,b){return null==b},
l:function(a){return"null"},
gu:function(a){return 0},
gB:function(a){return C.am},
$isM:1}
J.bu.prototype={
gu:function(a){return 0},
gB:function(a){return C.al},
l:function(a){return String(a)},
$iskY:1}
J.fN.prototype={}
J.aP.prototype={}
J.aF.prototype={
l:function(a){var t=a[$.$get$kH()]
return t==null?this.dn(a):J.bp(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjD:1}
J.aD.prototype={
k:function(a,b){if(!!a.fixed$length)H.K(P.u("add"))
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.K(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.A)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.K(P.ad(a)))
a.push(q)}},
cC:function(a,b){return new H.bw(a,b,[H.aa(a,0),null])},
ax:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gbe:function(a){if(a.length>0)return a[0]
throw H.c(H.cv())},
gaK:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.cv())},
bt:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.K(P.u("setRange"))
P.jQ(b,c,a.length,null,null,null)
t=C.b.a9(c,b)
if(t===0)return
if(e<0)H.K(P.aM(e,0,null,"skipCount",null))
s=J.D(d)
if(C.b.Z(e+t,s.gi(d)))throw H.c(H.nf())
if(C.b.I(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
c5:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ad(a))}return!1},
di:function(a,b){if(!!a.immutable$list)H.K(P.u("sort"))
H.nv(a,P.o6())},
aP:function(a){return this.di(a,null)},
D:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
l:function(a){return P.f2(a,"[","]")},
gv:function(a){return new J.ca(a,a.length,0,null,[H.aa(a,0)])},
gu:function(a){return H.aL(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.K(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jy(b,"newLength",null))
if(b<0)throw H.c(P.aM(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bl(a,b))
if(b>=a.length||b<0)throw H.c(H.bl(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.K(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bl(a,b))
if(b>=a.length||b<0)throw H.c(H.bl(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isj:1,
$ish:1}
J.jE.prototype={}
J.ca.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.A(t))
r=this.c
if(r>=s){this.sbI(null)
return!1}this.sbI(t[r]);++this.c
return!0},
sbI:function(a){this.d=a}}
J.b7.prototype={
W:function(a,b){var t
if(typeof b!=="number")throw H.c(H.N(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaI(b)
if(this.gaI(a)===t)return 0
if(this.gaI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaI:function(a){return a===0?1/a<0:a<0},
eA:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
eB:function(a,b,c){if(this.W(b,c)>0)throw H.c(H.N(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
fn:function(a){return a},
fs:function(a,b){var t
if(b>20)throw H.c(P.aM(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaI(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a4:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a-b},
d2:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a/b},
M:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a*b},
aj:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c1(a,b)},
F:function(a,b){return(a|0)===a?a/b|0:this.c1(a,b)},
c1:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
b4:function(a,b){var t
if(a>0)t=this.ek(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
ek:function(a,b){return b>31?0:a>>>b},
d1:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return(a&b)>>>0},
dr:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return(a^b)>>>0},
I:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a<b},
Z:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a>b},
d5:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a<=b},
bl:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a>=b},
gB:function(a){return C.av},
$isH:1,
$asH:function(){return[P.ab]},
$isY:1,
$isab:1}
J.cy.prototype={
gB:function(a){return C.au},
$isx:1}
J.cx.prototype={
gB:function(a){return C.at}}
J.aE.prototype={
aV:function(a,b){if(b>=a.length)throw H.c(H.bl(a,b))
return a.charCodeAt(b)},
a4:function(a,b){if(typeof b!=="string")throw H.c(P.jy(b,null,null))
return a+b},
dj:function(a,b,c){var t
if(c>a.length)throw H.c(P.aM(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bv:function(a,b){return this.dj(a,b,0)},
bx:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fS(b,null,null))
if(b>c)throw H.c(P.fS(b,null,null))
if(c>a.length)throw H.c(P.fS(c,null,null))
return a.substring(b,c)},
dk:function(a,b){return this.bx(a,b,null)},
fq:function(a){return a.toLowerCase()},
eE:function(a,b,c){if(c>a.length)throw H.c(P.aM(c,0,a.length,null,null))
return H.ot(a,b,c)},
W:function(a,b){var t
if(typeof b!=="string")throw H.c(H.N(b))
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
gB:function(a){return C.an},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bl(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isH:1,
$asH:function(){return[P.m]},
$ism:1}
H.j.prototype={}
H.aJ.prototype={
gv:function(a){return new H.cA(this,this.gi(this),0,null,[H.Z(this,"aJ",0)])},
aN:function(a,b){return this.dm(0,b)},
fp:function(a,b){var t,s
t=H.z([],[H.Z(this,"aJ",0)])
C.a.si(t,this.gi(this))
for(s=0;C.b.I(s,this.gi(this));++s)t[s]=this.t(0,s)
return t},
fo:function(a){return this.fp(a,!0)}}
H.cA.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.D(t)
r=s.gi(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.ad(t))
if(C.b.bl(this.c,r)){this.sao(null)
return!1}this.sao(s.t(t,this.c));++this.c
return!0},
sao:function(a){this.d=a}}
H.cB.prototype={
gv:function(a){return new H.fk(null,J.aW(this.a),this.b,this.$ti)},
gi:function(a){return J.an(this.a)},
$asS:function(a,b){return[b]}}
H.ep.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.fk.prototype={
p:function(){var t=this.b
if(t.p()){this.sao(this.c.$1(t.gq(t)))
return!0}this.sao(null)
return!1},
gq:function(a){return this.a},
sao:function(a){this.a=a},
$ascw:function(a,b){return[b]}}
H.bw.prototype={
gi:function(a){return J.an(this.a)},
t:function(a,b){return this.b.$1(J.mk(this.a,b))},
$asj:function(a,b){return[b]},
$asaJ:function(a,b){return[b]},
$asS:function(a,b){return[b]}}
H.d4.prototype={
gv:function(a){return new H.hK(J.aW(this.a),this.b,this.$ti)}}
H.hK.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.b3.prototype={}
H.jl.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jm.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.iv.prototype={
sf6:function(a){this.z=a},
sf9:function(a){this.ch=a}}
H.bf.prototype={
dS:function(){var t,s
t=this.e
s=t.a
this.c.k(0,s)
this.dX(s,t)},
c4:function(a,b){if(!this.f.w(0,a))return
if(this.Q.k(0,b)&&!this.y)this.y=!0
this.bb()},
fh:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ay(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bW();++r.d}this.y=!1}this.bb()},
ep:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).k(r,a)
t=this.ch;(t&&C.a).k(t,b)},
fg:function(a){var t,s,r
if(this.ch==null)return
for(t=J.p(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.K(P.u("removeRange"))
P.jQ(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
df:function(a,b){if(!this.r.w(0,a))return
this.db=b},
f0:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jL(null,null)
this.cx=t}t.a_(0,new H.im(a,c))},
f_:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aJ()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jL(null,null)
this.cx=t}t.a_(0,this.gf7())},
f1:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.R(a)
if(b!=null)P.R(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bp(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bP(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.J(0,s)},
at:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.L(o)
p=H.a9(o)
this.f1(q,p)
if(this.db){this.aJ()
if(this===u.globalState.e)throw o}}finally{this.cy=H.o1(r)
u.globalState.d=H.k9(t,"$isbf")
if(t!=null)$=t.gf5()
if(this.cx!=null)for(;n=this.cx,!n.gaw(n);)this.cx.cF().$0()}return s},
cB:function(a){return this.b.h(0,a)},
dX:function(a,b){var t=this.b
if(t.H(0,a))throw H.c(P.cn("Registry: ports must be registered only once."))
t.j(0,a,b)},
bb:function(){var t=this.b
if(t.gi(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aJ()},
aJ:function(){var t,s,r
t=this.cx
if(t!=null)t.a2(0)
for(t=this.b,s=t.gcY(t),s=s.gv(s);s.p();)s.gq(s).dZ()
t.a2(0)
this.c.a2(0)
u.globalState.z.ay(0,this.a)
this.dx.a2(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
gf5:function(){return this.d},
geF:function(){return this.e}}
H.im.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.i0.prototype={
eP:function(){var t=this.a
if(t.b===t.c)return
return t.cF()},
cI:function(){var t,s,r
t=this.eP()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.H(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaw(s)}else s=!1
else s=!1
else s=!1
if(s)H.K(P.cn("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaw(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aH(["command","close"])
r=new H.a7(!0,P.bg(null,P.x)).N(r)
s.toString
self.postMessage(r)}return!1}t.fd()
return!0},
c_:function(){if(self.window!=null)new H.i1(this).$0()
else for(;this.cI(););},
az:function(){var t,s,r,q,p
if(!u.globalState.x)this.c_()
else try{this.c_()}catch(r){t=H.L(r)
s=H.a9(r)
q=u.globalState.Q
p=P.aH(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a7(!0,P.bg(null,P.x)).N(p)
q.toString
self.postMessage(p)}}}
H.i1.prototype={
$0:function(){if(!this.a.cI())return
P.nx(C.w,this)},
$S:function(){return{func:1,v:true}}}
H.aS.prototype={
fd:function(){var t=this.a
if(t.y){C.a.k(t.z,this)
return}t.at(this.b)}}
H.iu.prototype={}
H.f0.prototype={
$0:function(){H.nb(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.f1.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bm(s,{func:1,args:[P.M,P.M]}))s.$2(this.e,this.d)
else if(H.bm(s,{func:1,args:[P.M]}))s.$1(this.e)
else s.$0()}t.bb()},
$S:function(){return{func:1,v:true}}}
H.hV.prototype={}
H.bh.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.nN(b)
if(t.geF()===s){s=J.D(r)
switch(s.h(r,0)){case"pause":t.c4(s.h(r,1),s.h(r,2))
break
case"resume":t.fh(s.h(r,1))
break
case"add-ondone":t.ep(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.fg(s.h(r,1))
break
case"set-errors-fatal":t.df(s.h(r,1),s.h(r,2))
break
case"ping":t.f0(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.f_(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.k(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ay(0,s)
break}return}u.globalState.f.a.a_(0,new H.aS(t,new H.iw(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bh){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.iw.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dV(0,this.b)},
$S:function(){return{func:1}}}
H.c_.prototype={
J:function(a,b){var t,s,r
t=P.aH(["command","message","port",this,"msg",b])
s=new H.a7(!0,P.bg(null,P.x)).N(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c_){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.dr((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cN.prototype={
dZ:function(){this.c=!0
this.b=null},
dV:function(a,b){if(this.c)return
this.b.$1(b)},
$isnq:1}
H.ht.prototype={
dK:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.a_(0,new H.aS(s,new H.hu(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iY()
this.c=self.setTimeout(H.au(new H.hv(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.hu.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hv.prototype={
$0:function(){var t=this.a
t.c=null
H.jb()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ay.prototype={
gu:function(a){var t=this.a
t=C.b.b4(t,0)^C.b.F(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ay){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a7.prototype={
N:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gi(t))
t=J.p(a)
if(!!t.$isbz)return["buffer",a]
if(!!t.$isb9)return["typed",a]
if(!!t.$isq)return this.da(a)
if(!!t.$isn8){r=this.gd7()
q=t.gA(a)
q=H.jN(q,r,H.Z(q,"S",0),null)
q=P.l_(q,!0,H.Z(q,"S",0))
t=t.gcY(a)
t=H.jN(t,r,H.Z(t,"S",0),null)
return["map",q,P.l_(t,!0,H.Z(t,"S",0))]}if(!!t.$iskY)return this.dc(a)
if(!!t.$isa)this.cW(a)
if(!!t.$isnq)this.aA(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbh)return this.dd(a)
if(!!t.$isc_)return this.de(a)
if(!!t.$isaA){p=a.$static_name
if(p==null)this.aA(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isay)return["capability",a.a]
if(!(a instanceof P.C))this.cW(a)
return["dart",u.classIdExtractor(a),this.d9(u.classFieldsExtractor(a))]},
aA:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cW:function(a){return this.aA(a,null)},
da:function(a){var t
H.b(typeof a!=="string")
t=this.d8(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.aA(a,"Can't serialize indexable: ")},
d8:function(a){var t,s
t=[]
C.a.si(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.N(a[s])
return t},
d9:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.N(a[t]))
return a},
dc:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.aA(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.si(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.N(a[t[r]])
return["js-object",t,s]},
de:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dd:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aR.prototype={
a3:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.c9("Bad serialized message: "+H.e(a)))
switch(C.a.gbe(a)){case"ref":H.b(J.E(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.E(a[0],"buffer"))
t=a[1]
C.a.k(this.b,t)
return t
case"typed":H.b(J.E(a[0],"typed"))
t=a[1]
C.a.k(this.b,t)
return t
case"fixed":H.b(J.E(a[0],"fixed"))
t=a[1]
C.a.k(this.b,t)
return J.aq(H.z(this.as(t),[null]))
case"extendable":H.b(J.E(a[0],"extendable"))
t=a[1]
C.a.k(this.b,t)
return H.z(this.as(t),[null])
case"mutable":H.b(J.E(a[0],"mutable"))
t=a[1]
C.a.k(this.b,t)
return this.as(t)
case"const":H.b(J.E(a[0],"const"))
t=a[1]
C.a.k(this.b,t)
return J.aq(H.z(this.as(t),[null]))
case"map":return this.eS(a)
case"sendport":return this.eT(a)
case"raw sendport":H.b(J.E(a[0],"raw sendport"))
t=a[1]
C.a.k(this.b,t)
return t
case"js-object":return this.eR(a)
case"function":H.b(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.k(this.b,t)
return t
case"capability":H.b(J.E(a[0],"capability"))
return new H.ay(a[1])
case"dart":H.b(J.E(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.k(this.b,q)
this.as(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
as:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a3(a[t]))
return a},
eS:function(a){var t,s,r,q,p
H.b(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.O()
C.a.k(this.b,r)
t=J.mx(t,this.geQ()).fo(0)
for(q=J.D(s),p=0;p<t.length;++p)r.j(0,t[p],this.a3(q.h(s,p)))
return r},
eT:function(a){var t,s,r,q,p,o,n
H.b(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cB(r)
if(o==null)return
n=new H.bh(o,s)}else n=new H.c_(t,r,s)
C.a.k(this.b,n)
return n},
eR:function(a){var t,s,r,q,p,o
H.b(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.k(this.b,r)
for(q=J.D(t),p=J.D(s),o=0;C.b.I(o,q.gi(t));++o)r[q.h(t,o)]=this.a3(p.h(s,o))
return r}}
H.fV.prototype={}
H.hz.prototype={
T:function(a){var t,s,r
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
H.fD.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.f6.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.hD.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jn.prototype={
$1:function(a){if(!!J.p(a).$isb2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dv.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isbb:1}
H.j6.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.j7.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.j8.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.j9.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ja.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aA.prototype={
l:function(a){return"Closure '"+H.bC(this).trim()+"'"},
$isjD:1,
gfw:function(){return this},
$D:null}
H.ho.prototype={}
H.ha.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bq.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bq))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aL(this.a)
else s=typeof t!=="object"?J.bo(t):H.aL(t)
return(s^H.aL(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bC(t)+"'")}}
H.hB.prototype={
l:function(a){return this.a}}
H.e3.prototype={
l:function(a){return this.a}}
H.h_.prototype={
l:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hP.prototype={
l:function(a){return C.i.a4("Assertion failed: ",P.cm(this.a))}}
H.at.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.bo(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.at){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.af.prototype={
gi:function(a){return this.a},
gaw:function(a){return this.a===0},
gA:function(a){return new H.fc(this,[H.aa(this,0)])},
gcY:function(a){return H.jN(this.gA(this),new H.f5(this),H.aa(this,0),H.aa(this,1))},
H:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bT(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bT(s,b)}else return this.f2(b)},
f2:function(a){var t=this.d
if(t==null)return!1
return this.av(this.aE(t,this.au(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ap(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ap(r,b)
return s==null?null:s.b}else return this.f3(b)},
f3:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aE(t,this.au(a))
r=this.av(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b1()
this.b=t}this.bK(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b1()
this.c=s}this.bK(s,b,c)}else{r=this.d
if(r==null){r=this.b1()
this.d=r}q=this.au(b)
p=this.aE(r,q)
if(p==null)this.b3(r,q,[this.b2(b,c)])
else{o=this.av(p,b)
if(o>=0)p[o].b=c
else p.push(this.b2(b,c))}}},
ay:function(a,b){if(typeof b==="string")return this.bZ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bZ(this.c,b)
else return this.f4(b)},
f4:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aE(t,this.au(a))
r=this.av(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.c2(q)
return q.b},
a2:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b0()}},
a6:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ad(this))
t=t.c}},
bK:function(a,b,c){var t=this.ap(a,b)
if(t==null)this.b3(a,b,this.b2(b,c))
else t.b=c},
bZ:function(a,b){var t
if(a==null)return
t=this.ap(a,b)
if(t==null)return
this.c2(t)
this.bU(a,b)
return t.b},
b0:function(){this.r=this.r+1&67108863},
b2:function(a,b){var t,s
t=new H.fb(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.b0()
return t},
c2:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.b0()},
au:function(a){return J.bo(a)&0x3ffffff},
av:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
l:function(a){return P.l0(this)},
ap:function(a,b){return a[b]},
aE:function(a,b){return a[b]},
b3:function(a,b,c){H.b(c!=null)
a[b]=c},
bU:function(a,b){delete a[b]},
bT:function(a,b){return this.ap(a,b)!=null},
b1:function(){var t=Object.create(null)
this.b3(t,"<non-identifier-key>",t)
this.bU(t,"<non-identifier-key>")
return t},
$isn8:1}
H.f5.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.fb.prototype={}
H.fc.prototype={
gi:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.fd(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.fd.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ad(t))
else{t=this.c
if(t==null){this.sbJ(null)
return!1}else{this.sbJ(t.a)
this.c=this.c.c
return!0}}},
sbJ:function(a){this.d=a}}
H.j2.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.j3.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.m]}}}
H.j4.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.m]}}}
H.bz.prototype={
gB:function(a){return C.ae},
$isbz:1}
H.b9.prototype={$isb9:1}
H.ft.prototype={
gB:function(a){return C.af}}
H.cE.prototype={
gi:function(a){return a.length},
$isq:1,
$asq:function(){},
$ist:1,
$ast:function(){}}
H.cF.prototype={
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ak(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.Y]},
$asb3:function(){return[P.Y]},
$asl:function(){return[P.Y]},
$ish:1,
$ash:function(){return[P.Y]}}
H.cG.prototype={
j:function(a,b,c){H.ak(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.x]},
$asb3:function(){return[P.x]},
$asl:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]}}
H.cD.prototype={
gB:function(a){return C.ag},
$iseO:1}
H.fu.prototype={
gB:function(a){return C.ah}}
H.fv.prototype={
gB:function(a){return C.ai},
h:function(a,b){H.ak(b,a,a.length)
return a[b]}}
H.fw.prototype={
gB:function(a){return C.aj},
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
$iskV:1}
H.fx.prototype={
gB:function(a){return C.ak},
h:function(a,b){H.ak(b,a,a.length)
return a[b]}}
H.fy.prototype={
gB:function(a){return C.ao},
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
$islk:1}
H.fz.prototype={
gB:function(a){return C.ap},
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
$isll:1}
H.cH.prototype={
gB:function(a){return C.aq},
gi:function(a){return a.length},
h:function(a,b){H.ak(b,a,a.length)
return a[b]}}
H.fA.prototype={
gB:function(a){return C.ar},
gi:function(a){return a.length},
h:function(a,b){H.ak(b,a,a.length)
return a[b]},
$islm:1}
H.bR.prototype={}
H.bS.prototype={}
H.bT.prototype={}
H.bU.prototype={}
P.hR.prototype={
$1:function(a){var t,s
H.jb()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hQ.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iY()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hS.prototype={
$0:function(){H.jb()
this.a.$0()},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){H.jb()
this.a.$0()},
$S:function(){return{func:1}}}
P.a0.prototype={}
P.eU.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.K(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.K(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eT.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bS(r)}else if(t.b===0&&!this.e)this.c.K(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.jA.prototype={}
P.hW.prototype={
eD:function(a,b){if(a==null)a=new P.ba()
if(this.a.a!==0)throw H.c(P.cU("Future already completed"))
$.v.toString
this.K(a,b)},
eC:function(a){return this.eD(a,null)}}
P.bM.prototype={
ar:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cU("Future already completed"))
t.bL(b)},
K:function(a,b){this.a.bM(a,b)}}
P.iI.prototype={
ar:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cU("Future already completed"))
t.an(b)},
K:function(a,b){this.a.K(a,b)}}
P.bN.prototype={
fa:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bh(this.d,a.a)},
eZ:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bm(s,{func:1,args:[P.C,P.bb]}))return t.fj(s,a.a,a.b)
else return t.bh(s,a.a)}}
P.G.prototype={
bj:function(a,b){var t,s,r
t=$.v
if(t!==C.d){t.toString
if(b!=null)b=P.nU(b,t)}s=new P.G(0,t,null,[null])
r=b==null?1:3
this.aT(new P.bN(null,s,r,a,b,[H.aa(this,0),null]))
return s},
aL:function(a){return this.bj(a,null)},
fv:function(a){var t,s
t=$.v
s=new P.G(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.aa(this,0)
this.aT(new P.bN(null,s,8,a,null,[t,t]))
return s},
aU:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aT:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.k9(this.c,"$isbN")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aT(a)
return}this.aU(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bj(null,null,t,new P.i6(this,a))}},
bY:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bY(a)
return}this.aU(s)}H.b(this.a>=4)
t.a=this.aG(a)
s=this.b
s.toString
P.bj(null,null,s,new P.ie(t,this))}},
aF:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aG(t)},
aG:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
an:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.c3(a,"$isa0",t,"$asa0")
if(s){t=H.c3(a,"$isG",t,null)
if(t)P.i9(a,this)
else P.lp(a,this)}else{r=this.aF()
H.b(this.a<4)
this.a=4
this.c=a
P.be(this,r)}},
bS:function(a){var t
H.b(this.a<4)
H.b(!J.p(a).$isa0)
t=this.aF()
H.b(this.a<4)
this.a=4
this.c=a
P.be(this,t)},
K:function(a,b){var t
H.b(this.a<4)
t=this.aF()
H.b(this.a<4)
this.a=8
this.c=new P.aY(a,b)
P.be(this,t)},
e_:function(a){return this.K(a,null)},
bL:function(a){var t
H.b(this.a<4)
t=H.c3(a,"$isa0",this.$ti,"$asa0")
if(t){this.dY(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bj(null,null,t,new P.i8(this,a))},
dY:function(a){var t=H.c3(a,"$isG",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bj(null,null,t,new P.id(this,a))}else P.i9(a,this)
return}P.lp(a,this)},
bM:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bj(null,null,t,new P.i7(this,a,b))},
$isa0:1,
gb5:function(){return this.a},
geh:function(){return this.c}}
P.i6.prototype={
$0:function(){P.be(this.a,this.b)},
$S:function(){return{func:1}}}
P.ie.prototype={
$0:function(){P.be(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.ia.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.an(a)},
$S:function(a){return{func:1,args:[,]}}}
P.ib.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.K(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.ic.prototype={
$0:function(){this.a.K(this.b,this.c)},
$S:function(){return{func:1}}}
P.i8.prototype={
$0:function(){this.a.bS(this.b)},
$S:function(){return{func:1}}}
P.id.prototype={
$0:function(){P.i9(this.b,this.a)},
$S:function(){return{func:1}}}
P.i7.prototype={
$0:function(){this.a.K(this.b,this.c)},
$S:function(){return{func:1}}}
P.ii.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cH(q.d)}catch(n){s=H.L(n)
r=H.a9(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aY(s,r)
p.a=!0
return}if(!!J.p(t).$isa0){if(t instanceof P.G&&t.gb5()>=4){if(t.gb5()===8){q=t
H.b(q.gb5()===8)
p=this.b
p.b=q.geh()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aL(new P.ij(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.ij.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.ih.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bh(r.d,this.c)}catch(q){t=H.L(q)
s=H.a9(q)
r=this.a
r.b=new P.aY(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.ig.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.fa(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eZ(t)
p.a=!1}}catch(o){s=H.L(o)
r=H.a9(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aY(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.d5.prototype={}
P.bF.prototype={
gi:function(a){var t,s
t={}
s=new P.G(0,$.v,null,[P.x])
t.a=0
this.cz(new P.hi(t),!0,new P.hj(t,s),s.gbR())
return s},
gbe:function(a){var t,s
t={}
s=new P.G(0,$.v,null,[H.Z(this,"bF",0)])
t.a=null
t.a=this.cz(new P.hg(t,this,s),!0,new P.hh(s),s.gbR())
return s}}
P.hi.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.hj.prototype={
$0:function(){this.b.an(this.a.a)},
$S:function(){return{func:1}}}
P.hg.prototype={
$1:function(a){P.nM(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.Z(this.b,"bF",0)]}}}
P.hh.prototype={
$0:function(){var t,s,r,q
try{r=H.cv()
throw H.c(r)}catch(q){t=H.L(q)
s=H.a9(q)
P.nO(this.a,t,s)}},
$S:function(){return{func:1}}}
P.hf.prototype={}
P.cV.prototype={}
P.iN.prototype={
$0:function(){return this.a.an(this.b)},
$S:function(){return{func:1}}}
P.jR.prototype={}
P.aY.prototype={
l:function(a){return H.e(this.a)},
$isb2:1}
P.iM.prototype={}
P.iR.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.ba()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.iy.prototype={
fk:function(a){var t,s,r
try{if(C.d===$.v){a.$0()
return}P.lv(null,null,this,a)}catch(r){t=H.L(r)
s=H.a9(r)
P.iQ(null,null,this,t,s)}},
fl:function(a,b){var t,s,r
try{if(C.d===$.v){a.$1(b)
return}P.lw(null,null,this,a,b)}catch(r){t=H.L(r)
s=H.a9(r)
P.iQ(null,null,this,t,s)}},
ew:function(a){return new P.iA(this,a)},
bc:function(a){return new P.iz(this,a)},
ex:function(a){return new P.iB(this,a)},
h:function(a,b){return},
cH:function(a){if($.v===C.d)return a.$0()
return P.lv(null,null,this,a)},
bh:function(a,b){if($.v===C.d)return a.$1(b)
return P.lw(null,null,this,a,b)},
fj:function(a,b,c){if($.v===C.d)return a.$2(b,c)
return P.nV(null,null,this,a,b,c)}}
P.iA.prototype={
$0:function(){return this.a.cH(this.b)},
$S:function(){return{func:1}}}
P.iz.prototype={
$0:function(){return this.a.fk(this.b)},
$S:function(){return{func:1}}}
P.iB.prototype={
$1:function(a){return this.a.fl(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.is.prototype={
au:function(a){return H.om(a)&0x3ffffff},
av:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.iq.prototype={
gv:function(a){var t=new P.bP(this,this.r,null,null,[null])
t.c=this.e
return t},
gi:function(a){return this.a},
D:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.e0(b)},
e0:function(a){var t=this.d
if(t==null)return!1
return this.aD(t[this.aB(a)],a)>=0},
cB:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.D(0,a)?a:null
else return this.e8(a)},
e8:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aB(a)]
r=this.aD(s,a)
if(r<0)return
return J.aV(s,r).ge2()},
k:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.k0()
this.b=t}return this.bO(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.k0()
this.c=s}return this.bO(s,b)}else return this.a_(0,b)},
a_:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.k0()
this.d=t}s=this.aB(b)
r=t[s]
if(r==null){q=[this.aX(b)]
H.b(q!=null)
t[s]=q}else{if(this.aD(r,b)>=0)return!1
r.push(this.aX(b))}return!0},
ay:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bP(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bP(this.c,b)
else return this.eb(0,b)},
eb:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aB(b)]
r=this.aD(s,b)
if(r<0)return!1
this.bQ(s.splice(r,1)[0])
return!0},
a2:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aW()}},
bO:function(a,b){var t
if(a[b]!=null)return!1
t=this.aX(b)
H.b(!0)
a[b]=t
return!0},
bP:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bQ(t)
delete a[b]
return!0},
aW:function(){this.r=this.r+1&67108863},
aX:function(a){var t,s
t=new P.ir(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aW()
return t},
bQ:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aW()},
aB:function(a){return J.bo(a)&0x3ffffff},
aD:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1}}
P.ir.prototype={
ge2:function(){return this.a}}
P.bP.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ad(t))
else{t=this.c
if(t==null){this.sam(null)
return!1}else{this.sam(t.a)
this.c=this.c.b
return!0}}},
sam:function(a){this.d=a}}
P.il.prototype={}
P.jJ.prototype={$isj:1}
P.cz.prototype={$isj:1,$ish:1}
P.l.prototype={
gv:function(a){return new H.cA(a,this.gi(a),0,null,[H.Z(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
cC:function(a,b){return new H.bw(a,b,[H.Z(a,"l",0),null])},
eX:function(a,b,c){var t,s,r,q
t=this.gi(a)
for(s=b,r=0;C.b.I(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gi(a)
if(t==null?q!=null:t!==q)throw H.c(P.ad(a))}return s},
ct:function(a,b,c,d){var t
P.jQ(b,c,this.gi(a),null,null,null)
for(t=b;t<c;++t)this.j(a,t,d)},
l:function(a){return P.f2(a,"[","]")}}
P.bv.prototype={}
P.fj.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aK.prototype={
a6:function(a,b){var t,s
for(t=J.aW(this.gA(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gi:function(a){return J.an(this.gA(a))},
l:function(a){return P.l0(a)}}
P.fe.prototype={
dD:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sc0(H.z(t,[b]))},
gv:function(a){return new P.it(this,this.c,this.d,this.b,null,this.$ti)},
gaw:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=this.gi(this)
if(C.b.Z(0,b)||b>=t)H.K(P.B(b,this,"index",null,t))
return this.a[(C.b.a4(this.b,b)&this.a.length-1)>>>0]},
a2:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.f2(this,"{","}")},
cF:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.cv());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
a_:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bW();++this.d},
bW:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.z(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bt(s,0,q,t,r)
C.a.bt(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sc0(s)},
sc0:function(a){this.a=a}}
P.it.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.K(P.ad(t))
s=this.d
if(s===this.b){this.sam(null)
return!1}this.sam(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sam:function(a){this.e=a}}
P.h2.prototype={
L:function(a,b){var t
for(t=J.aW(b);t.p();)this.k(0,t.gq(t))},
l:function(a){return P.f2(this,"{","}")},
$isj:1}
P.h1.prototype={}
P.bQ.prototype={}
P.io.prototype={
h:function(a,b){var t,s
t=this.b
if(t==null)return this.gaH().h(0,b)
else if(typeof b!=="string")return
else{s=t[b]
return typeof s=="undefined"?this.ea(b):s}},
gi:function(a){var t
if(this.b==null){t=this.gaH()
t=t.gi(t)}else t=this.aC().length
return t},
gA:function(a){var t
if(this.b==null){t=this.gaH()
return t.gA(t)}return new P.ip(this)},
a6:function(a,b){var t,s,r,q
if(this.b==null)return this.gaH().a6(0,b)
t=this.aC()
for(s=0;s<t.length;++s){r=t[s]
q=this.b[r]
if(typeof q=="undefined"){q=P.iO(this.a[r])
this.b[r]=q}b.$2(r,q)
if(t!==this.c)throw H.c(P.ad(this))}},
gaH:function(){H.b(this.b==null)
return this.c},
aC:function(){H.b(this.b!=null)
var t=this.c
if(t==null){t=Object.keys(this.a)
this.c=t}return t},
ea:function(a){var t
if(!Object.prototype.hasOwnProperty.call(this.a,a))return
t=P.iO(this.a[a])
return this.b[a]=t},
$asbv:function(){return[P.m,null]},
$asaK:function(){return[P.m,null]}}
P.ip.prototype={
gi:function(a){var t=this.a
return t.gi(t)},
t:function(a,b){var t=this.a
return t.b==null?t.gA(t).t(0,b):C.a.h(t.aC(),b)},
gv:function(a){var t=this.a
if(t.b==null){t=t.gA(t)
t=t.gv(t)}else{t=t.aC()
t=new J.ca(t,t.length,0,null,[H.aa(t,0)])}return t},
$asj:function(){return[P.m]},
$asaJ:function(){return[P.m]},
$asS:function(){return[P.m]}}
P.cc.prototype={}
P.cd.prototype={}
P.f7.prototype={
eM:function(a,b,c){var t=P.nT(b,this.geN().a)
return t},
eL:function(a,b){return this.eM(a,b,null)},
geN:function(){return C.W},
$ascc:function(){return[P.C,P.m]}}
P.f8.prototype={
$ascV:function(){return[P.m,P.C]},
$ascd:function(){return[P.m,P.C]}}
P.am.prototype={}
P.H.prototype={}
P.b1.prototype={
gfb:function(){return this.a},
du:function(a,b){var t
if(Math.abs(this.a)<=864e13)t=!1
else t=!0
if(t)throw H.c(P.c9("DateTime is outside valid range: "+this.gfb()))},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.b1))return!1
return this.a===b.a&&this.b===b.b},
W:function(a,b){return C.b.W(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.b4(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.mU(H.np(this))
s=P.cf(H.nn(this))
r=P.cf(H.nj(this))
q=P.cf(H.nk(this))
p=P.cf(H.nm(this))
o=P.cf(H.no(this))
n=P.mV(H.nl(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isH:1,
$asH:function(){return[P.b1]}}
P.Y.prototype={}
P.aC.prototype={
I:function(a,b){return C.b.I(this.a,b.ge1())},
Z:function(a,b){return C.b.Z(this.a,b.ge1())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aC))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
W:function(a,b){return C.b.W(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.eo()
s=this.a
if(s<0)return"-"+new P.aC(0-s).l(0)
r=t.$1(C.b.F(s,6e7)%60)
q=t.$1(C.b.F(s,1e6)%60)
p=new P.en().$1(s%1e6)
return""+C.b.F(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isH:1,
$asH:function(){return[P.aC]}}
P.en.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.m,args:[P.x]}}}
P.eo.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.m,args:[P.x]}}}
P.b2.prototype={}
P.cb.prototype={
l:function(a){return"Assertion failed"}}
P.ba.prototype={
l:function(a){return"Throw of null."}}
P.a3.prototype={
gaZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaY:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaZ()+s+r
if(!this.a)return q
p=this.gaY()
o=P.cm(this.b)
return q+p+": "+H.e(o)}}
P.cM.prototype={
gaZ:function(){return"RangeError"},
gaY:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.f_.prototype={
gaZ:function(){return"RangeError"},
gaY:function(){H.b(this.a)
if(J.m0(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gi:function(a){return this.f}}
P.hE.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.hC.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bc.prototype={
l:function(a){return"Bad state: "+this.a}}
P.e5.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.cm(t))+"."}}
P.cT.prototype={
l:function(a){return"Stack Overflow"},
$isb2:1}
P.ee.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jC.prototype={}
P.i5.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.eR.prototype={
l:function(a){var t,s
t=this.a
s=""!==t?"FormatException: "+t:"FormatException"
return s}}
P.er.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.K(P.jy(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.l3(b,"expando$values")
return s==null?null:H.l3(s,t)},
l:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.S.prototype={
aN:function(a,b){return new H.d4(this,b,[H.Z(this,"S",0)])},
gi:function(a){var t,s
H.b(!this.$isj)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
ga8:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.c(H.cv())
s=t.gq(t)
if(t.p())throw H.c(H.ng())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.mM("index"))
if(b<0)H.K(P.aM(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.B(b,this,"index",null,s))},
l:function(a){return P.ne(this,"(",")")}}
P.cw.prototype={}
P.h.prototype={$isj:1}
P.b8.prototype={}
P.M.prototype={
gu:function(a){return P.C.prototype.gu.call(this,this)},
l:function(a){return"null"}}
P.ab.prototype={$isH:1,
$asH:function(){return[P.ab]}}
P.C.prototype={constructor:P.C,$isC:1,
w:function(a,b){return this===b},
gu:function(a){return H.aL(this)},
l:function(a){return"Instance of '"+H.bC(this)+"'"},
gB:function(a){return new H.at(H.j0(this),null)},
toString:function(){return this.l(this)}}
P.bb.prototype={}
P.m.prototype={$isH:1,
$asH:function(){return[P.m]}}
P.bG.prototype={
gi:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gab:function(){return this.a}}
P.jU.prototype={}
W.k.prototype={}
W.c8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dX.prototype={
gi:function(a){return a.length}}
W.dY.prototype={
l:function(a){return String(a)}}
W.dZ.prototype={
l:function(a){return String(a)}}
W.aw.prototype={$isaw:1}
W.ax.prototype={
d3:function(a,b,c){var t=this.e4(a,b,P.o4(c,null))
return t},
e4:function(a,b,c){return a.getContext(b,c)},
$isax:1}
W.e2.prototype={
aO:function(a){return P.iV(a.getContextAttributes())}}
W.az.prototype={
gi:function(a){return a.length}}
W.e6.prototype={
gi:function(a){return a.length}}
W.e7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.e8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.b_.prototype={
bN:function(a,b){var t,s
t=$.$get$kG()
s=t[b]
if(typeof s==="string")return s
s=this.el(a,b)
t[b]=s
return s},
el:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mW()+b
if(t in a)return t
return b},
gi:function(a){return a.length}}
W.ea.prototype={}
W.a4.prototype={}
W.b0.prototype={}
W.eb.prototype={
gi:function(a){return a.length}}
W.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.ed.prototype={
gi:function(a){return a.length}}
W.ef.prototype={
h:function(a,b){return a[b]},
gi:function(a){return a.length}}
W.eg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.cg.prototype={}
W.aB.prototype={
eq:function(a,b){return a.adoptNode(b)},
d4:function(a,b){return a.getElementById(b)},
fe:function(a,b){return a.querySelector(b)},
$isaB:1}
W.ei.prototype={
l:function(a){return String(a)}}
W.ch.prototype={
eJ:function(a,b){return a.createHTMLDocument(b)}}
W.ej.prototype={
gU:function(a){return a.a},
gR:function(a){return a.b},
ga1:function(a){return a.c}}
W.ci.prototype={
gU:function(a){return a.a},
gR:function(a){return a.b},
ga1:function(a){return a.c}}
W.ek.prototype={
gaM:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.cj.prototype={
gaM:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.ck.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.W]},
$isj:1,
$asj:function(){return[P.W]},
$ist:1,
$ast:function(){return[P.W]},
$asl:function(){return[P.W]},
$ish:1,
$ash:function(){return[P.W]},
$asn:function(){return[P.W]}}
W.cl.prototype={
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaf(a))+" x "+H.e(this.gad(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isW)return!1
return a.left===t.gcv(b)&&a.top===t.gcM(b)&&this.gaf(a)===t.gaf(b)&&this.gad(a)===t.gad(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gaf(a)
q=this.gad(a)
return W.lt(W.aT(W.aT(W.aT(W.aT(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gad:function(a){return a.height},
gcv:function(a){return a.left},
gcM:function(a){return a.top},
gaf:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isW:1,
$asW:function(){}}
W.el.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.m]},
$isj:1,
$asj:function(){return[P.m]},
$ist:1,
$ast:function(){return[P.m]},
$asl:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$asn:function(){return[P.m]}}
W.em.prototype={
gi:function(a){return a.length}}
W.a5.prototype={
geu:function(a){return new W.hZ(a)},
l:function(a){return a.localName},
S:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kO
if(t==null){t=H.z([],[W.cJ])
s=new W.cK(t)
C.a.k(t,W.lq(null))
C.a.k(t,W.lu())
$.kO=s
d=s}else d=t
t=$.kN
if(t==null){t=new W.dF(d)
$.kN=t
c=t}else{t.a=d
c=t}}if($.ao==null){t=document
s=t.implementation
s=(s&&C.L).eJ(s,"")
$.ao=s
$.jB=s.createRange()
s=$.ao
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ao.head;(t&&C.M).V(t,r)}t=$.ao
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.k9(s,"$isaw")}t=$.ao
if(!!this.$isaw)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ao.body;(t&&C.n).V(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.Y,a.tagName)){t=$.jB;(t&&C.E).d6(t,q)
t=$.jB
p=(t&&C.E).eH(t,b)}else{q.innerHTML=b
p=$.ao.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.V(p,s)}t=$.ao.body
if(q==null?t!=null:q!==t)J.ko(q)
c.bs(p)
C.p.eq(document,p)
return p},
eI:function(a,b,c){return this.S(a,b,c,null)},
dh:function(a,b,c,d){a.textContent=null
this.V(a,this.S(a,b,c,d))},
dg:function(a,b){return this.dh(a,b,null,null)},
ag:function(a,b){return a.getAttribute(b)},
ec:function(a,b){return a.removeAttribute(b)},
$isa5:1,
gfm:function(a){return a.tagName}}
W.eq.prototype={
$1:function(a){return!!J.p(a).$isa5},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dW:function(a,b,c,d){return a.addEventListener(b,H.au(c,1),!1)},
ee:function(a,b,c,d){return a.removeEventListener(b,H.au(c,1),!1)}}
W.eL.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.co]},
$isj:1,
$asj:function(){return[W.co]},
$ist:1,
$ast:function(){return[W.co]},
$asl:function(){return[W.co]},
$ish:1,
$ash:function(){return[W.co]},
$asn:function(){return[W.co]}}
W.eM.prototype={
gi:function(a){return a.length}}
W.eQ.prototype={
gi:function(a){return a.length}}
W.eV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.cs.prototype={}
W.eW.prototype={
gi:function(a){return a.length}}
W.bs.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ct.prototype={}
W.cu.prototype={
fA:function(a,b,c,d,e,f){return a.open(b,c)},
fc:function(a,b,c){return a.open(b,c)},
J:function(a,b){return a.send(b)}}
W.bt.prototype={}
W.b4.prototype={$isb4:1}
W.b5.prototype={$isb5:1}
W.b6.prototype={$isb6:1}
W.aG.prototype={$isaG:1}
W.fh.prototype={
l:function(a){return String(a)}}
W.fi.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.bx.prototype={}
W.fo.prototype={
gi:function(a){return a.length}}
W.fq.prototype={
fz:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.by.prototype={}
W.fr.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cC]},
$isj:1,
$asj:function(){return[W.cC]},
$ist:1,
$ast:function(){return[W.cC]},
$asl:function(){return[W.cC]},
$ish:1,
$ash:function(){return[W.cC]},
$asn:function(){return[W.cC]}}
W.P.prototype={$isP:1}
W.U.prototype={
ga8:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cU("No elements"))
if(s>1)throw H.c(P.cU("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.V(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.m4(t,c,C.C.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.cp(t,t.length,-1,null,[H.Z(t,"n",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){return C.C.h(this.a.childNodes,b)},
$asj:function(){return[W.r]},
$ascz:function(){return[W.r]},
$asl:function(){return[W.r]},
$ash:function(){return[W.r]},
$asbQ:function(){return[W.r]}}
W.r.prototype={
ff:function(a){var t=a.parentNode
if(t!=null)J.jo(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.dl(a):t},
V:function(a,b){return a.appendChild(b)},
ed:function(a,b){return a.removeChild(b)},
ef:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gbf:function(a){return a.previousSibling}}
W.cI.prototype={
bg:function(a){return a.previousNode()}}
W.bB.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ag.prototype={
gi:function(a){return a.length}}
W.fO.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ag]},
$isj:1,
$asj:function(){return[W.ag]},
$ist:1,
$ast:function(){return[W.ag]},
$asl:function(){return[W.ag]},
$ish:1,
$ash:function(){return[W.ag]},
$asn:function(){return[W.ag]}}
W.fR.prototype={
J:function(a,b){return a.send(b)}}
W.cL.prototype={
eH:function(a,b){return a.createContextualFragment(b)},
d6:function(a,b){return a.selectNodeContents(b)}}
W.cP.prototype={
J:function(a,b){return a.send(b)}}
W.h0.prototype={
gi:function(a){return a.length}}
W.as.prototype={}
W.h5.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cR]},
$isj:1,
$asj:function(){return[W.cR]},
$ist:1,
$ast:function(){return[W.cR]},
$asl:function(){return[W.cR]},
$ish:1,
$ash:function(){return[W.cR]},
$asn:function(){return[W.cR]}}
W.h7.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cS]},
$isj:1,
$asj:function(){return[W.cS]},
$ist:1,
$ast:function(){return[W.cS]},
$asl:function(){return[W.cS]},
$ish:1,
$ash:function(){return[W.cS]},
$asn:function(){return[W.cS]}}
W.ah.prototype={
gi:function(a){return a.length}}
W.hd.prototype={
h:function(a,b){return this.bV(a,b)},
a6:function(a,b){var t,s
for(t=0;!0;++t){s=this.e7(a,t)
if(s==null)return
b.$2(s,this.bV(a,s))}},
gA:function(a){var t=H.z([],[P.m])
this.a6(a,new W.he(t))
return t},
gi:function(a){return a.length},
bV:function(a,b){return a.getItem(b)},
e7:function(a,b){return a.key(b)},
$asaK:function(){return[P.m,P.m]}}
W.he.prototype={
$2:function(a,b){return C.a.k(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cX.prototype={
S:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=W.mY("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.U(s).L(0,new W.U(t))
return s}}
W.hm.prototype={
S:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.S(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga8(t)
r.toString
t=new W.U(r)
q=t.ga8(t)
s.toString
q.toString
new W.U(s).L(0,new W.U(q))
return s}}
W.hn.prototype={
S:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aQ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.S(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga8(t)
s.toString
r.toString
new W.U(s).L(0,new W.U(r))
return s}}
W.bH.prototype={$isbH:1}
W.hp.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cZ]},
$isj:1,
$asj:function(){return[W.cZ]},
$ist:1,
$ast:function(){return[W.cZ]},
$asl:function(){return[W.cZ]},
$ish:1,
$ash:function(){return[W.cZ]},
$asn:function(){return[W.cZ]}}
W.hq.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cY]},
$isj:1,
$asj:function(){return[W.cY]},
$ist:1,
$ast:function(){return[W.cY]},
$asl:function(){return[W.cY]},
$ish:1,
$ash:function(){return[W.cY]},
$asn:function(){return[W.cY]}}
W.hs.prototype={
gi:function(a){return a.length}}
W.aN.prototype={$isaN:1}
W.hw.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.d1]},
$isj:1,
$asj:function(){return[W.d1]},
$ist:1,
$ast:function(){return[W.d1]},
$asl:function(){return[W.d1]},
$ish:1,
$ash:function(){return[W.d1]},
$asn:function(){return[W.d1]}}
W.hx.prototype={
gi:function(a){return a.length}}
W.d2.prototype={
bg:function(a){return a.previousNode()}}
W.aO.prototype={}
W.hF.prototype={
l:function(a){return String(a)}}
W.hH.prototype={
gm:function(a){return a.x},
gG:function(a){return a.z}}
W.bd.prototype={$isbd:1}
W.hI.prototype={
gi:function(a){return a.length}}
W.hJ.prototype={
J:function(a,b){return a.send(b)}}
W.aQ.prototype={
geO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaQ:1}
W.bL.prototype={
ges:function(a){var t,s
t=P.ab
s=new P.G(0,$.v,null,[t])
this.e3(a)
this.eg(a,W.lz(new W.hL(new P.iI(s,[t]))))
return s},
eg:function(a,b){return a.requestAnimationFrame(H.au(b,1))},
e3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hL.prototype={
$1:function(a){this.a.ar(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jX.prototype={}
W.hX.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ce]},
$isj:1,
$asj:function(){return[W.ce]},
$ist:1,
$ast:function(){return[W.ce]},
$asl:function(){return[W.ce]},
$ish:1,
$ash:function(){return[W.ce]},
$asn:function(){return[W.ce]}}
W.hY.prototype={
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
w:function(a,b){var t
if(b==null)return!1
t=J.p(b)
if(!t.$isW)return!1
return a.left===t.gcv(b)&&a.top===t.gcM(b)&&a.width===t.gaf(b)&&a.height===t.gad(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.lt(W.aT(W.aT(W.aT(W.aT(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gad:function(a){return a.height},
gaf:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.ik.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cq]},
$isj:1,
$asj:function(){return[W.cq]},
$ist:1,
$ast:function(){return[W.cq]},
$asl:function(){return[W.cq]},
$ish:1,
$ash:function(){return[W.cq]},
$asn:function(){return[W.cq]}}
W.dj.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asl:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.iF.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ah]},
$isj:1,
$asj:function(){return[W.ah]},
$ist:1,
$ast:function(){return[W.ah]},
$asl:function(){return[W.ah]},
$ish:1,
$ash:function(){return[W.ah]},
$asn:function(){return[W.ah]}}
W.iG.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cW]},
$isj:1,
$asj:function(){return[W.cW]},
$ist:1,
$ast:function(){return[W.cW]},
$asl:function(){return[W.cW]},
$ish:1,
$ash:function(){return[W.cW]},
$asn:function(){return[W.cW]}}
W.hU.prototype={
a6:function(a,b){var t,s,r,q,p,o
for(t=this.gA(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.A)(t),++p){o=t[p]
b.$2(o,q.ag(r,o))}},
gA:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.z([],[P.m])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.k(s,p.name)}return s},
$asbv:function(){return[P.m,P.m]},
$asaK:function(){return[P.m,P.m]},
ge5:function(){return this.a}}
W.hZ.prototype={
h:function(a,b){return J.jw(this.a,b)},
gi:function(a){return this.gA(this).length}}
W.i2.prototype={
cz:function(a,b,c,d){return W.a2(this.a,this.b,a,!1,H.aa(this,0))}}
W.i_.prototype={}
W.i3.prototype={
dQ:function(a,b,c,d,e){this.en()},
ez:function(a){if(this.b==null)return
this.eo()
this.b=null
this.se9(null)
return},
en:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.m2(r,this.c,t,!1)}},
eo:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.m3(r,this.c,t,!1)}},
se9:function(a){this.d=a}}
W.i4.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bO.prototype={
dR:function(a){var t,s
t=$.$get$k_()
if(t.gaw(t)){for(s=0;s<262;++s)t.j(0,C.X[s],W.ob())
for(s=0;s<12;++s)t.j(0,C.r[s],W.oc())}},
ac:function(a){return $.$get$lr().D(0,W.br(a))},
a0:function(a,b,c){var t,s,r
t=W.br(a)
s=$.$get$k_()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gv:function(a){return new W.cp(a,this.gi(a),-1,null,[H.Z(a,"n",0)])}}
W.cK.prototype={
ac:function(a){return C.a.c5(this.a,new W.fC(a))},
a0:function(a,b,c){return C.a.c5(this.a,new W.fB(a,b,c))}}
W.fC.prototype={
$1:function(a){return a.ac(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fB.prototype={
$1:function(a){return a.a0(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bV.prototype={
dU:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aN(0,new W.iD())
s=b.aN(0,new W.iE())
this.b.L(0,t)
r=this.c
r.L(0,C.B)
r.L(0,s)},
ac:function(a){return this.a.D(0,W.br(a))},
a0:function(a,b,c){var t,s
t=W.br(a)
s=this.c
if(s.D(0,H.e(t)+"::"+b))return this.d.er(c)
else if(s.D(0,"*::"+b))return this.d.er(c)
else{s=this.b
if(s.D(0,H.e(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.e(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1}}
W.iD.prototype={
$1:function(a){return!C.a.D(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iE.prototype={
$1:function(a){return C.a.D(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.iJ.prototype={
a0:function(a,b,c){if(this.dq(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jw(a,"template")==="")return this.e.D(0,b)
return!1}}
W.iK.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.iH.prototype={
ac:function(a){var t=J.p(a)
if(!!t.$isbE)return!1
t=!!t.$isw
if(t&&W.br(a)==="foreignObject")return!1
if(t)return!0
return!1},
a0:function(a,b,c){if(b==="is"||C.i.bv(b,"on"))return!1
return this.ac(a)}}
W.cp.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbX(J.aV(this.a,t))
this.c=t
return!0}this.sbX(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbX:function(a){this.d=a}}
W.cJ.prototype={}
W.jO.prototype={}
W.jW.prototype={}
W.iC.prototype={}
W.dF.prototype={
bs:function(a){new W.iL(this).$2(a,null)},
aq:function(a,b){if(b==null)J.ko(a)
else J.jo(b,a)},
ej:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.mn(a)
r=J.jw(s.ge5(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.L(n)}p="element unprintable"
try{p=J.bp(a)}catch(n){H.L(n)}try{o=W.br(a)
this.ei(a,b,t,p,o,s,r)}catch(n){if(H.L(n) instanceof P.a3)throw n
else{this.aq(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
ei:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aq(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.ac(a)){this.aq(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.a0(a,"is",g)){this.aq(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gA(f)
s=H.z(t.slice(0),[H.aa(t,0)])
for(r=f.gA(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.a0(a,J.mD(p),q.ag(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.ag(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ag(t,p)
q.ec(t,p)}}if(!!J.p(a).$isbH)this.bs(a.content)}}
W.iL.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.ej(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.aq(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.mo(t)}catch(q){H.L(q)
r=t
J.jo(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.bW.prototype={}
W.bX.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dw.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.bY.prototype={}
W.bZ.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dP.prototype={}
P.hM.prototype={
cu:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.k(t,a)
C.a.k(this.b,null)
return s},
bk:function(a){var t,s,r,q,p,o,n,m,l,k
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.b1(s,!0)
r.du(s,!0)
return r}if(a instanceof RegExp)throw H.c(P.jV("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.o5(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cu(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.O()
t.a=o
r[p]=o
this.eY(a,new P.hO(t,this))
return t.a}if(a instanceof Array){n=a
p=this.cu(n)
r=this.b
o=r[p]
if(o!=null)return o
m=J.D(n)
l=m.gi(n)
o=this.c?new Array(l):n
r[p]=o
for(r=J.aU(o),k=0;C.b.I(k,l);++k)r.j(o,k,this.bk(m.h(n,k)))
return o}return a}}
P.hO.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.bk(b)
J.m1(t,a,s)
return s},
$S:function(a,b){return{func:1,args:[,,]}}}
P.iS.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hN.prototype={
eY:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.A)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iT.prototype={
$1:function(a){return this.a.ar(0,a)},
$S:function(a){return{func:1,args:[,]}}}
P.iU.prototype={
$1:function(a){return this.a.eC(a)},
$S:function(a){return{func:1,args:[,]}}}
P.ix.prototype={}
P.W.prototype={}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.eG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a6.prototype={}
P.ae.prototype={}
P.eY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f9.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a5(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a5:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jI]},
$asl:function(){return[P.jI]},
$ish:1,
$ash:function(){return[P.jI]},
$asn:function(){return[P.jI]}}
P.fl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fn.prototype={
gU:function(a){return a.a},
gR:function(a){return a.b},
ga1:function(a){return a.c}}
P.fE.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a5(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a5:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jP]},
$asl:function(){return[P.jP]},
$ish:1,
$ash:function(){return[P.jP]},
$asn:function(){return[P.jP]}}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fQ.prototype={
gi:function(a){return a.length}}
P.fT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bE.prototype={$isbE:1}
P.hk.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a5(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a5:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.m]},
$asl:function(){return[P.m]},
$ish:1,
$ash:function(){return[P.m]},
$asn:function(){return[P.m]}}
P.w.prototype={
S:function(a,b,c,d){var t,s,r,q,p,o
t=H.z([],[W.cJ])
C.a.k(t,W.lq(null))
C.a.k(t,W.lu())
C.a.k(t,new W.iH())
c=new W.dF(new W.cK(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).eI(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.U(q)
o=t.ga8(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.V(p,r)
return p},
$isw:1}
P.hl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bI.prototype={}
P.bJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hy.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return this.a5(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a5:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jT]},
$asl:function(){return[P.jT]},
$ish:1,
$ash:function(){return[P.jT]},
$asn:function(){return[P.jT]}}
P.hG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.df.prototype={}
P.dg.prototype={}
P.dm.prototype={}
P.dn.prototype={}
P.dx.prototype={}
P.dy.prototype={}
P.dD.prototype={}
P.dE.prototype={}
P.e_.prototype={
gi:function(a){return a.length}}
P.e0.prototype={
gi:function(a){return a.length}}
P.aZ.prototype={}
P.fF.prototype={
gi:function(a){return a.length}}
P.fY.prototype={
c3:function(a,b){return a.activeTexture(b)},
c6:function(a,b,c){return a.attachShader(b,c)},
c7:function(a,b,c){return a.bindBuffer(b,c)},
c8:function(a,b,c){return a.bindFramebuffer(b,c)},
c9:function(a,b,c){return a.bindTexture(b,c)},
ca:function(a,b){return a.blendEquation(b)},
cb:function(a,b,c){return a.blendFunc(b,c)},
cc:function(a,b,c,d){return a.bufferData(b,c,d)},
cd:function(a,b){return a.clear(b)},
ce:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createProgram()},
cj:function(a,b){return a.createShader(b)},
ck:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aO:function(a){return P.iV(a.getContextAttributes())},
bm:function(a){return a.getError()},
bn:function(a,b){return a.getProgramInfoLog(b)},
bo:function(a,b,c){return a.getProgramParameter(b,c)},
bp:function(a,b){return a.getShaderInfoLog(b)},
bq:function(a,b,c){return a.getShaderParameter(b,c)},
br:function(a,b,c){return a.getUniformLocation(b,c)},
cw:function(a,b){return a.linkProgram(b)},
cE:function(a,b,c){return a.pixelStorei(b,c)},
bu:function(a,b,c){return a.shaderSource(b,c)},
bw:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bi:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.p(g)
if(!!t.$isb5)s=!0
else s=!1
if(s){this.b6(a,b,c,d,e,f,P.lG(g))
return}if(!!t.$isb6)s=!0
else s=!1
if(s){this.b7(a,b,c,d,e,f,g)
return}if(!!t.$isax)s=!0
else s=!1
if(s){this.b8(a,b,c,d,e,f,g)
return}if(!!t.$isbd)s=!0
else s=!1
if(s){this.b9(a,b,c,d,e,f,g)
return}if(!!t.$isb4)t=!0
else t=!1
if(t){this.ba(a,b,c,d,e,f,g)
return}throw H.c(P.c9("Incorrect number or type of arguments"))},
cJ:function(a,b,c,d,e,f,g){return this.bi(a,b,c,d,e,f,g,null,null,null)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ba:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cK:function(a,b,c,d){return a.texParameterf(b,c,d)},
cL:function(a,b,c,d){return a.texParameteri(b,c,d)},
cN:function(a,b,c){return a.uniform1f(b,c)},
cO:function(a,b,c){return a.uniform1fv(b,c)},
cP:function(a,b,c){return a.uniform1i(b,c)},
cQ:function(a,b,c){return a.uniform1iv(b,c)},
cR:function(a,b,c){return a.uniform2fv(b,c)},
cS:function(a,b,c){return a.uniform3fv(b,c)},
cT:function(a,b,c){return a.uniform4fv(b,c)},
cU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cX:function(a,b){return a.useProgram(b)},
cZ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d0:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fZ.prototype={
ev:function(a,b){return a.beginTransformFeedback(b)},
ey:function(a,b){return a.bindVertexArray(b)},
eK:function(a){return a.createVertexArray()},
eU:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eV:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eW:function(a){return a.endTransformFeedback()},
ft:function(a,b,c,d){this.em(a,b,c,d)
return},
em:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fu:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c3:function(a,b){return a.activeTexture(b)},
c6:function(a,b,c){return a.attachShader(b,c)},
c7:function(a,b,c){return a.bindBuffer(b,c)},
c8:function(a,b,c){return a.bindFramebuffer(b,c)},
c9:function(a,b,c){return a.bindTexture(b,c)},
ca:function(a,b){return a.blendEquation(b)},
cb:function(a,b,c){return a.blendFunc(b,c)},
cc:function(a,b,c,d){return a.bufferData(b,c,d)},
cd:function(a,b){return a.clear(b)},
ce:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cf:function(a,b){return a.compileShader(b)},
cg:function(a){return a.createBuffer()},
ci:function(a){return a.createProgram()},
cj:function(a,b){return a.createShader(b)},
ck:function(a){return a.createTexture()},
cm:function(a,b){return a.depthMask(b)},
cn:function(a,b){return a.disable(b)},
co:function(a,b,c,d){return a.drawArrays(b,c,d)},
cp:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cq:function(a,b){return a.enable(b)},
cr:function(a,b){return a.enableVertexAttribArray(b)},
aO:function(a){return P.iV(a.getContextAttributes())},
bm:function(a){return a.getError()},
bn:function(a,b){return a.getProgramInfoLog(b)},
bo:function(a,b,c){return a.getProgramParameter(b,c)},
bp:function(a,b){return a.getShaderInfoLog(b)},
bq:function(a,b,c){return a.getShaderParameter(b,c)},
br:function(a,b,c){return a.getUniformLocation(b,c)},
cw:function(a,b){return a.linkProgram(b)},
cE:function(a,b,c){return a.pixelStorei(b,c)},
bu:function(a,b,c){return a.shaderSource(b,c)},
bw:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bi:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.p(g)
if(!!t.$isb5)s=!0
else s=!1
if(s){this.b6(a,b,c,d,e,f,P.lG(g))
return}if(!!t.$isb6)s=!0
else s=!1
if(s){this.b7(a,b,c,d,e,f,g)
return}if(!!t.$isax)s=!0
else s=!1
if(s){this.b8(a,b,c,d,e,f,g)
return}if(!!t.$isbd)s=!0
else s=!1
if(s){this.b9(a,b,c,d,e,f,g)
return}if(!!t.$isb4)t=!0
else t=!1
if(t){this.ba(a,b,c,d,e,f,g)
return}throw H.c(P.c9("Incorrect number or type of arguments"))},
cJ:function(a,b,c,d,e,f,g){return this.bi(a,b,c,d,e,f,g,null,null,null)},
b6:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b7:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b8:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b9:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
ba:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cK:function(a,b,c,d){return a.texParameterf(b,c,d)},
cL:function(a,b,c,d){return a.texParameteri(b,c,d)},
cN:function(a,b,c){return a.uniform1f(b,c)},
cO:function(a,b,c){return a.uniform1fv(b,c)},
cP:function(a,b,c){return a.uniform1i(b,c)},
cQ:function(a,b,c){return a.uniform1iv(b,c)},
cR:function(a,b,c){return a.uniform2fv(b,c)},
cS:function(a,b,c){return a.uniform3fv(b,c)},
cT:function(a,b,c){return a.uniform4fv(b,c)},
cU:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cV:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cX:function(a,b){return a.useProgram(b)},
cZ:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
d0:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h9.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.B(b,a,null,null,null))
return P.iV(this.e6(a,b))},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
e6:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.b8]},
$asl:function(){return[P.b8]},
$ish:1,
$ash:function(){return[P.b8]},
$asn:function(){return[P.b8]}}
P.dt.prototype={}
P.du.prototype={}
B.jg.prototype={
$1:function(a){$.$get$iW().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aG]}}}
B.jh.prototype={
$1:function(a){$.$get$iW().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aG]}}}
B.ji.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.o2=t
$.o3=C.b.a9(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.kd=s-C.b.F(window.innerWidth,2)
$.lO=-(t-C.b.F(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.P]}}}
B.jj.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c5=t-C.b.F(window.innerWidth,2)
$.c6=-(s-C.b.F(window.innerHeight,2))
if(a.button===2)$.$get$c4().j(0,"right",!0)
else $.$get$c4().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.P]}}}
B.jk.prototype={
$1:function(a){if(a.button===2)$.$get$c4().j(0,"right",null)
else $.$get$c4().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.P]}}}
B.fG.prototype={
dF:function(a,b,c,d){var t
d.toString
W.a2(d,W.mZ(d),new B.fH(this),!1,W.aQ)
W.a2(d,"mousemove",new B.fI(this),!1,W.P)
t=W.aN
W.a2(d,"touchstart",new B.fJ(),!1,t)
W.a2(d,"touchmove",new B.fK(this),!1,t)
B.oq(null)}}
B.fH.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.geO(a)*r.k3
if(C.c.a9(r.fy,t)>0)r.fy=C.c.a9(r.fy,t)}catch(q){s=H.L(q)
P.R(s)}},
$S:function(a){return{func:1,args:[W.aQ]}}}
B.fI.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a9($.kd,$.c5)*0.01
s=t.id
r=$.c6
q=$.lO
t.id=s+(r-q)*0.01
$.c5=$.kd
$.c6=q}},
$S:function(a){return{func:1,args:[W.P]}}}
B.fJ.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ae(t.clientX)
C.c.ae(t.clientY)
$.c5=s
C.c.ae(t.clientX)
$.c6=C.c.ae(t.clientY)},
$S:function(a){return{func:1,args:[W.aN]}}}
B.fK.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ae(t.clientX)
t=C.c.ae(t.clientY)
r=this.a
r.go=r.go+C.b.a9(s,$.c5)*0.01
r.id=r.id+($.c6-t)*0.01
$.c5=s
$.c6=t},
$S:function(a){return{func:1,args:[W.aN]}}}
G.fs.prototype={}
G.d3.prototype={
P:function(a,b){var t=this.d
if(H.a8(!t.H(0,a)))H.al("uniform "+a+" already set")
t.j(0,a,b)},
aR:function(){return this.d},
l:function(a){var t,s,r,q
t=H.z(["{"+new H.at(H.j0(this),null).l(0)+"}["+this.a+"]"],[P.m])
for(s=this.d,r=s.gA(s),r=r.gv(r);r.p();){q=r.gq(r)
C.a.k(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ax(t,"\n")}}
G.e1.prototype={}
G.e4.prototype={
cs:function(a,b,c){J.ml(this.a,b)
if(c>0)J.mJ(this.a,b,c)},
d_:function(a,b,c,d,e,f,g,h){J.jq(this.a,34962,b)
J.mK(this.a,c,d,e,!1,g,h)}}
G.eS.prototype={}
G.ap.prototype={
gU:function(a){return this.a},
gR:function(a){return this.b},
ga1:function(a){return this.c}}
G.eK.prototype={
gU:function(a){return this.a},
gR:function(a){return this.b},
ga1:function(a){return this.c}}
G.cr.prototype={
aa:function(a){var t=this.e
H.b(!t.H(0,a))
H.b(C.i.bv(a,"a"))
switch($.$get$V().h(0,a).a){case"vec2":t.j(0,a,H.z([],[T.X]))
break
case"vec3":t.j(0,a,H.z([],[T.o]))
break
case"vec4":t.j(0,a,H.z([],[T.a1]))
break
case"float":t.j(0,a,H.z([],[P.Y]))
break
case"uvec4":t.j(0,a,H.z([],[[P.h,P.x]]))
break
default:if(H.a8(!1))H.al("unknown type for "+a)}},
bD:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.k(this.b,new G.ap(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.A)(a),++q){p=a[q]
p.toString
o=new T.o(new Float32Array(3))
o.C(p)
C.a.k(t,o)}},
bz:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.A)(b),++q){p=b[q]
p.toString
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.k(t,new T.X(o))}},
bA:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.A)(b),++q){p=b[q]
p.toString
o=new T.o(new Float32Array(3))
o.C(p)
r.k(t,o)}},
bB:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.A)(b),++q){p=b[q]
p.toString
o=new T.a1(new Float32Array(4))
o.C(p)
r.k(t,o)}},
ds:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.k(this.c,new G.eK(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.A)(a),++q){p=a[q]
p.toString
o=new T.o(new Float32Array(3))
o.C(p)
C.a.k(t,o)}},
dA:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.z(r,[P.x])
for(r=t.length,p=0,o=0;o<r;++o){n=t[o]
q[p]=n.a
q[p+1]=n.b
q[p+2]=n.c
p+=3}for(t=s.length,o=0;o<t;++o){m=s[o]
r=m.a
q[p]=r
q[p+1]=m.b
l=m.c
q[p+2]=l
q[p+3]=r
q[p+4]=l
q[p+5]=m.d
p+=6}H.b(p===q.length)
return q},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gA(s),r=r.gv(r);r.p();){q=r.gq(r)
p=$.$get$V().h(0,q).a
C.a.k(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ax(t," ")}}
G.fa.prototype={}
G.h8.prototype={
l:function(a){return"SL: p:"+H.e(this.x)+"  d:"+H.e(this.y)+"  r:"+this.ch+"  a:"+H.e(this.cx)}}
G.eX.prototype={
aR:function(){var t,s,r
t=this.y
s=this.z
G.n6(t,s,this.x)
r=this.d
r.j(0,"uLightDescs",t)
r.j(0,"uLightTypes",s)
return r}}
G.d0.prototype={}
G.d_.prototype={}
G.fm.prototype={
dE:function(a){this.P("cDepthTest",!0)
this.P("cDepthWrite",!0)
this.P("cBlendEquation",$.$get$kv())
this.P("cStencilFunc",$.$get$l7())}}
G.fp.prototype={
bE:function(a,b,c){var t,s
if(C.i.aV(a,0)===105){if(H.a8(C.b.aj(b.length,c)===this.z))H.al("ChangeAttribute "+this.z)}else{t=C.b.aj(b.length,c)
if(H.a8(t===(this.ch.length/3|0)))H.al("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.jq(t.a,34962,s)
J.kk(t.a,34962,b,35048)},
dB:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ak:function(a,b,c){var t,s,r,q,p,o
t=J.kh(a,0)===105
if(t&&this.z===0)this.z=C.b.aj(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.js(r.a))
this.bE(a,b,c)
q=$.$get$V().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.a8(p.H(0,a)))H.al("unexpected attribute "+a)
o=p.h(0,a)
J.dV(r.a,this.e)
r.cs(0,o,t?1:0)
r.d_(0,s.h(0,a),o,q.bF(),5126,!1,0,0)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gA(t),r=r.gv(r);r.p();){q=r.gq(r)
C.a.k(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ax(s,"  ")},
sb_:function(a){this.cx=a}}
G.fM.prototype={
dt:function(a,b){var t=C.b.d2(a,b)
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
t.ah(0,0,1/(p*s))
t.ah(1,1,1/p)
t.ah(2,2,(q+r)/o)
t.ah(3,2,-1)
t.ah(2,3,2*r*q/o)},
aR:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.o(new Float32Array(3))
o.ai(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.C(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.p(n)
r=!!s.$isa1
k=r?s.gaM(n):1
if(!!s.$iso){j=s.gm(n)
m=s.gn(n)
l=s.gG(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gG(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.M(t[0],n)
r=C.c.M(t[4],m)
q=C.c.M(t[8],l)
i=t[12]
h=C.c.M(t[1],n)
g=C.c.M(t[5],m)
f=C.c.M(t[9],l)
e=t[13]
d=C.c.M(t[2],n)
c=C.c.M(t[6],m)
b=C.c.M(t[10],l)
a=t[14]
a0=C.c.M(t[3],n)
a1=C.c.M(t[7],m)
a2=C.c.M(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.C(this.db)
a3.cD(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fX.prototype={
dH:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){n=t[o]
r.j(0,n,J.kn(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){n=t[o]
r.j(0,n,J.kn(q.a,p,n))}},
dL:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gi(t)===s.gi(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gA(s),s=s.gv(s);s.p();){q=s.gq(s)
if(!t.H(0,q))C.a.k(r,q)}for(t=this.x,s=new P.bP(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.D(0,q))C.a.k(r,q)}return r},
dO:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gA(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.kh(n,0)){case 117:if(q.H(0,n)){m=b.h(0,n)
if(p.H(0,n))H.dT("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$V().h(0,n)
if(l==null)H.K("unknown "+n)
H.b(q.H(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jx(r.a,k,m)
else if(!!J.p(m).$iskV)J.mH(r.a,k,m)
break
case"float":if(l.c===0)J.mF(r.a,k,m)
else if(!!J.p(m).$iseO)J.mG(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.av(m,"$isI").a
J.ku(r.a,k,!1,n)}else if(!!J.p(m).$iseO)J.ku(r.a,k,!1,m)
else if(H.a8(!1))H.al("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.av(m,"$isar").a
J.kt(r.a,k,!1,n)}else if(!!J.p(m).$iseO)J.kt(r.a,k,!1,m)
else if(H.a8(!1))H.al("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.ks(j,k,H.av(m,"$isa1").a)
else J.ks(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.kr(j,k,H.av(m,"$iso").a)
else J.kr(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.kq(j,k,H.av(m,"$isX").a)
else J.kq(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a4(33984,this.ch)
J.ki(r.a,n)
n=H.av(m,"$isbK").b
J.c7(r.a,3553,n)
n=this.ch
J.jx(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a4(33984,this.ch)
J.ki(r.a,n)
n=H.av(m,"$isbK").b
J.c7(r.a,34067,n)
n=this.ch
J.jx(r.a,k,n)
this.ch=this.ch+1
break
default:H.dT("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.E(m,!0)
j=r.a
if(n)J.dW(j,2929)
else J.jt(j,2929)
break
case"cStencilFunc":H.av(m,"$isd0")
n=m.a
j=r.a
if(n===1281)J.jt(j,2960)
else{J.dW(j,2960)
j=m.b
i=m.c
J.mA(r.a,n,j,i)}break
case"cDepthWrite":J.mf(r.a,m)
break
case"cBlendEquation":H.av(m,"$isd_")
n=m.a
j=r.a
if(n===1281)J.jt(j,3042)
else{J.dW(j,3042)
j=m.b
i=m.c
J.m8(r.a,j,i)
J.m7(r.a,n)}break}++o
break}}h=P.mX(0,0,0,Date.now()-new P.b1(t,!1).a,0,0)
""+o
h.l(0)},
dz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.mI(t.a,this.r)
this.ch=0
this.z.a2(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.A)(b),++r){q=b[r]
this.dO(q.a,q.aR())}s=this.Q
s.a2(0)
for(p=a.cy,p=p.gA(p),p=p.gv(p);p.p();)s.k(0,p.gq(p))
o=this.dL()
if(o.length!==0)P.R("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
s=a.d
p=a.e
J.dV(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dB()
m=a.Q
l=a.z
if(n)J.m5(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.mj(k,p,s,m,0,l)
else J.mi(k,p,s,m,0)}else{m=t.a
if(l>1)J.mh(m,p,0,s,l)
else J.mg(m,p,0,s)}if(n)J.mm(t.a)}}
G.y.prototype={
bF:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.h3.prototype={
by:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.A)(a),++q){p=a[q]
H.b($.$get$V().H(0,p))
H.b(!C.a.D(s,p))
C.a.k(s,p)
r.j(0,p,this.r);++this.r}C.a.aP(s)},
al:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.A)(a),++r){q=a[r]
if(H.a8($.$get$V().H(0,q)))H.al("missing uniform "+q)
H.b(!C.a.D(s,q))
C.a.k(s,q)}C.a.aP(s)},
bC:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<3;++s){r=a[s]
H.b($.$get$V().H(0,r))
H.b(!C.a.D(t,r))
C.a.k(t,r)}C.a.aP(t)},
bG:function(a,b){H.b(this.b==null)
this.b=this.dP(!0,a,b)},
aS:function(a){return this.bG(a,null)},
dP:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){n=t[o]
m=$.$get$V().h(0,n)
C.a.k(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.k(q,"")
l=r?"in":"out"
if(r)C.a.k(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.k(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.k(q,l+" "+m.a+" "+H.e(k)+";")}C.a.k(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.k(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.k(q,"")
if(c!=null)C.a.L(q,c)
C.a.k(q,"void main(void) {")
C.a.L(q,b)
C.a.k(q,"}")
return C.a.ax(q,"\n")}}
G.h6.prototype={
f8:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a1=new T.o(new Float32Array(3))
a1.ai(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(3)
n=new T.o(o)
n.C(p)
m=a0.a
o[0]=o[0]-m[0]
o[1]=o[1]-m[1]
o[2]=o[2]-m[2]
n.E(0)
l=a1.cl(n)
l.E(0)
k=n.cl(l)
k.E(0)
j=l.bd(p)
i=k.bd(p)
p=n.bd(p)
h=l.a
g=h[0]
f=k.a
e=f[0]
d=o[0]
c=h[1]
b=f[1]
a=o[1]
h=h[2]
f=f[2]
o=o[2]
t[15]=1
t[14]=-p
t[13]=-i
t[12]=-j
t[11]=0
t[10]=o
t[9]=f
t[8]=h
t[7]=0
t[6]=a
t[5]=b
t[4]=c
t[3]=0
t[2]=d
t[1]=e
t[0]=g
t[12]=s
t[13]=r
t[14]=q},
cA:function(a){return this.f8(a,null)}}
G.hr.prototype={
dC:function(a,b){var t=this.e
if(t!==1)J.mC(a.a,b,34046,t)
J.kp(a.a,b,10240,this.r)
J.kp(a.a,b,10241,this.f)}}
G.bK.prototype={
l:function(a){return"Texture["+H.e(this.a)+", "+this.c+"]"}}
G.eZ.prototype={
dI:function(a){var t,s
t=this.d
s=this.c
J.c7(t.a,s,this.b)
J.mB(t.a,s,0,6408,6408,5121,a)}}
R.cO.prototype={
cG:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.R("size change "+H.e(s)+" "+H.e(r))
this.dx.dt(s,r)
this.z=s
this.Q=r}}
R.hb.prototype={
dJ:function(a,b,c){var t,s,r
if(a==null)throw H.c("no element provided")
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
J.jp(this.a,s)
r=this.dT(b,c,90,30)
this.d=r
J.jp(this.a,r)
t=t.createElement("div")
this.c=t
J.jp(this.a,t)},
dT:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nD("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.v).bN(r,"float")
r.setProperty(p,"left","")
p=C.v.bN(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.V(t,s)}return t}}
R.hc.prototype={
dN:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.y.fs(s,2)+" fps"
t=this.c;(t&&C.o).dg(t,b)
r=C.b.F(30*C.y.eA(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).V(t,q)},
dM:function(a){return this.dN(a,"")}}
A.bA.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bD.prototype={}
A.fW.prototype={
dG:function(a,b,c){if(this.d==null)this.d=new G.eS(this.e,null,null,null,null)},
dw:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.m6(p.a,36160,t)
H.b(r>0&&q>0)
J.mL(p.a,this.x,this.y,r,q)
if(s!==0)J.m9(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.A)(t),++o){n=t[o]
m=n.e
C.a.k(m,new G.d3(P.O(),"transforms",!1,!0))
l=new T.I(new Float32Array(16))
l.O()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.A)(r),++k)A.lH(p,r[k],l,a,m)
m.pop()}},
dv:function(){return this.dw(null)}}
D.fg.prototype={
$1:function(a){this.a.ar(0,C.V.eL(0,W.nP(this.b.response)))},
$S:function(a){return{func:1,args:[,]}}}
D.ff.prototype={
$1:function(a){return this.a.ar(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
A.j1.prototype={
$2:function(a,b){var t=536870911&a+J.bo(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.C]}}}
T.ar.prototype={
C:function(a){var t,s
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
l:function(a){return"[0] "+this.Y(0).l(0)+"\n[1] "+this.Y(1).l(0)+"\n[2] "+this.Y(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ar){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dR(this.a)},
Y:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.o(t)},
eG:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.C(a)
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
T.I.prototype={
ah:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
C:function(a){var t,s
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
l:function(a){return"[0] "+this.Y(0).l(0)+"\n[1] "+this.Y(1).l(0)+"\n[2] "+this.Y(2).l(0)+"\n[3] "+this.Y(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.I){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dR(this.a)},
Y:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.a1(t)},
O:function(){var t=this.a
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
cD:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.X.prototype={
l:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.X){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dR(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.o.prototype={
ai:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
C:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dR(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){return Math.sqrt(this.gX())},
gX:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
E:function(a){var t,s,r
t=Math.sqrt(this.gX())
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
cl:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.o(new Float32Array(3))
t.ai(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
k:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
a7:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gR:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]}}
T.a1.prototype={
C:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a1){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dR(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gR:function(a){return this.a[2]},
gU:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]},
gaM:function(a){return this.a[3]}}
Q.jc.prototype={
$1:function(b1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t=this.a
t.a=b1+0
s=this.b
s.go+=0.001
r=s.k4
if(r.h(0,37)!=null)s.go+=0.03
else if(r.h(0,39)!=null)s.go-=0.03
if(r.h(0,38)!=null)s.id+=0.03
else if(r.h(0,40)!=null)s.id-=0.03
if(r.h(0,33)!=null)s.fy*=0.99
else if(r.h(0,34)!=null)s.fy*=1.01
if(r.h(0,32)!=null){s.go=0
s.id=0}r=C.c.eB(s.id,-1.4707963267948965,1.4707963267948965)
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
p=s.k2
r=p.a
m[12]=m[12]+r[0]
m[13]=m[13]+r[1]
m[14]=m[14]+r[2]
s.cA(p)
p=s.f
r=p.a
r[0]=m[2]
r[1]=m[6]
r[2]=m[10]
s=-s.k1
l=Math.sqrt(p.gX())
k=r[0]/l
j=r[1]/l
i=r[2]/l
h=Math.cos(s)
g=Math.sin(s)
f=1-h
e=k*k*f+h
s=i*g
d=k*j*f-s
r=j*g
c=k*i*f+r
b=j*k*f+s
a=j*j*f+h
s=k*g
a0=j*i*f-s
a1=i*k*f-r
a2=i*j*f+s
a3=i*i*f+h
s=m[0]
r=m[4]
p=m[8]
q=m[1]
n=m[5]
a4=m[9]
a5=m[2]
a6=m[6]
a7=m[10]
a8=m[3]
a9=m[7]
b0=m[11]
m[0]=s*e+r*b+p*a1
m[1]=q*e+n*b+a4*a1
m[2]=a5*e+a6*b+a7*a1
m[3]=a8*e+a9*b+b0*a1
m[4]=s*d+r*a+p*a2
m[5]=q*d+n*a+a4*a2
m[6]=a5*d+a6*a+a7*a2
m[7]=a8*d+a9*a+b0*a2
m[8]=s*c+r*a0+p*a3
m[9]=q*c+n*a0+a4*a3
m[10]=a5*c+a6*a0+a7*a3
m[11]=a8*c+a9*a0+b0*a3
this.c.dv()
C.ax.ges(window).aL(this)
this.d.dM(t.a)},
$S:function(a){return{func:1,v:true,args:[P.ab]}}}
Q.jd.prototype={
$1:function(a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.a
s=$.$get$kg()
r=J.D(a0)
q=r.h(a0,1)
p=new G.hr(!1,!1,!1,!0,1,9729,9729)
o=J.md(t.a)
n=new G.eZ(q,s,o,3553,t,p)
J.c7(t.a,3553,o)
J.my(t.a,37440,1)
n.dI(q)
p.dC(t,3553)
H.b(J.mt(t.a)===0)
J.c7(t.a,3553,null)
t=this.b
t.P("uTexture",n)
t.P("uNormalScale",0.8)
m=Y.n7(r.h(a0,0))
P.R(m[0])
r=this.c
l=G.kS($.$get$kc(),r.d,m[0])
s=new Float32Array(9)
q=new T.I(new Float32Array(16))
q.O()
p=new T.I(new Float32Array(16))
p.O()
o=new Float32Array(3)
k=new Float32Array(3)
j=new Float32Array(3)
i=new Float32Array(3)
h=[]
g=new Float32Array(9)
f=new T.I(new Float32Array(16))
f.O()
e=new T.I(new Float32Array(16))
e.O()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a=new A.bA(null,null,h,new T.ar(g),f,e,new T.o(d),new T.o(c),new T.o(b),new T.o(new Float32Array(3)),"wrapper",!1,!0)
C.a.k(h,new A.bA(t,l,[],new T.ar(s),q,p,new T.o(o),new T.o(k),new T.o(j),new T.o(i),l.a,!1,!0))
t=new T.o(new Float32Array(3))
t.ai(100,0,0)
a.cA(t)
H.b(!0)
C.a.k(r.f,a)
this.d.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.dl=J.a.prototype.l
J.bu.prototype.dn=J.bu.prototype.l
P.S.prototype.dm=P.S.prototype.aN
W.a5.prototype.aQ=W.a5.prototype.S
W.bV.prototype.dq=W.bV.prototype.a0;(function installTearOffs(){installTearOff(H.bf.prototype,"gf7",0,0,0,null,["$0"],["aJ"],0)
installTearOff(H.a7.prototype,"gd7",0,0,0,null,["$1"],["N"],2)
installTearOff(H.aR.prototype,"geQ",0,0,0,null,["$1"],["a3"],2)
installTearOff(P,"nZ",1,0,0,null,["$1"],["nA"],1)
installTearOff(P,"o_",1,0,0,null,["$1"],["nB"],1)
installTearOff(P,"o0",1,0,0,null,["$1"],["nC"],1)
installTearOff(P,"lD",1,0,0,null,["$0"],["nX"],0)
installTearOff(P.G.prototype,"gbR",0,0,0,null,["$2","$1"],["K","e_"],5)
installTearOff(P,"o6",1,0,0,null,["$2"],["mS"],7)
installTearOff(W,"ob",1,0,0,null,["$4"],["nI"],4)
installTearOff(W,"oc",1,0,0,null,["$4"],["nJ"],4)
installTearOff(W.cI.prototype,"gbf",0,1,0,null,["$0"],["bg"],3)
installTearOff(W.d2.prototype,"gbf",0,1,0,null,["$0"],["bg"],3)
installTearOff(R.cO.prototype,"gfi",0,0,0,null,["$1"],["cG"],6)
installTearOff(Q,"lQ",1,0,0,null,["$0"],["ok"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.jF,t)
inherit(J.a,t)
inherit(J.ca,t)
inherit(P.S,t)
inherit(H.cA,t)
inherit(P.cw,t)
inherit(H.b3,t)
inherit(H.aA,t)
inherit(H.iv,t)
inherit(H.bf,t)
inherit(H.i0,t)
inherit(H.aS,t)
inherit(H.iu,t)
inherit(H.hV,t)
inherit(H.cN,t)
inherit(H.ht,t)
inherit(H.ay,t)
inherit(H.a7,t)
inherit(H.aR,t)
inherit(H.fV,t)
inherit(H.hz,t)
inherit(P.b2,t)
inherit(H.dv,t)
inherit(H.at,t)
inherit(P.aK,t)
inherit(H.fb,t)
inherit(H.fd,t)
inherit(P.a0,t)
inherit(P.jA,t)
inherit(P.hW,t)
inherit(P.bN,t)
inherit(P.G,t)
inherit(P.d5,t)
inherit(P.bF,t)
inherit(P.hf,t)
inherit(P.cV,t)
inherit(P.jR,t)
inherit(P.aY,t)
inherit(P.iM,t)
inherit(P.h2,t)
inherit(P.ir,t)
inherit(P.bP,t)
inherit(P.jJ,t)
inherit(P.bQ,t)
inherit(P.l,t)
inherit(P.it,t)
inherit(P.cc,t)
inherit(P.am,t)
inherit(P.H,t)
inherit(P.b1,t)
inherit(P.ab,t)
inherit(P.aC,t)
inherit(P.cT,t)
inherit(P.jC,t)
inherit(P.i5,t)
inherit(P.eR,t)
inherit(P.er,t)
inherit(P.h,t)
inherit(P.b8,t)
inherit(P.M,t)
inherit(P.bb,t)
inherit(P.m,t)
inherit(P.bG,t)
inherit(P.jU,t)
inherit(W.ea,t)
inherit(W.bO,t)
inherit(W.n,t)
inherit(W.cK,t)
inherit(W.bV,t)
inherit(W.iH,t)
inherit(W.cp,t)
inherit(W.cJ,t)
inherit(W.jO,t)
inherit(W.jW,t)
inherit(W.iC,t)
inherit(W.dF,t)
inherit(P.hM,t)
inherit(P.ix,t)
inherit(G.fs,t)
inherit(G.e4,t)
inherit(G.eS,t)
inherit(G.ap,t)
inherit(G.eK,t)
inherit(G.cr,t)
inherit(G.d0,t)
inherit(G.d_,t)
inherit(G.y,t)
inherit(G.h3,t)
inherit(G.hr,t)
inherit(G.bK,t)
inherit(R.hb,t)
inherit(T.ar,t)
inherit(T.I,t)
inherit(T.X,t)
inherit(T.o,t)
inherit(T.a1,t)
t=J.a
inherit(J.f3,t)
inherit(J.f4,t)
inherit(J.bu,t)
inherit(J.aD,t)
inherit(J.b7,t)
inherit(J.aE,t)
inherit(H.bz,t)
inherit(H.b9,t)
inherit(W.d,t)
inherit(W.dX,t)
inherit(W.e2,t)
inherit(W.b0,t)
inherit(W.a4,t)
inherit(W.d6,t)
inherit(W.ef,t)
inherit(W.eg,t)
inherit(W.ei,t)
inherit(W.ch,t)
inherit(W.ci,t)
inherit(W.cj,t)
inherit(W.d7,t)
inherit(W.cl,t)
inherit(W.d9,t)
inherit(W.em,t)
inherit(W.f,t)
inherit(W.db,t)
inherit(W.eW,t)
inherit(W.dd,t)
inherit(W.b4,t)
inherit(W.b5,t)
inherit(W.fh,t)
inherit(W.fo,t)
inherit(W.dh,t)
inherit(W.cI,t)
inherit(W.dk,t)
inherit(W.ag,t)
inherit(W.dp,t)
inherit(W.cL,t)
inherit(W.dr,t)
inherit(W.ah,t)
inherit(W.dw,t)
inherit(W.dz,t)
inherit(W.hs,t)
inherit(W.dB,t)
inherit(W.hx,t)
inherit(W.d2,t)
inherit(W.hF,t)
inherit(W.hH,t)
inherit(W.dG,t)
inherit(W.dI,t)
inherit(W.dK,t)
inherit(W.dM,t)
inherit(W.dO,t)
inherit(P.df,t)
inherit(P.fn,t)
inherit(P.dm,t)
inherit(P.fP,t)
inherit(P.fQ,t)
inherit(P.fT,t)
inherit(P.dx,t)
inherit(P.dD,t)
inherit(P.e_,t)
inherit(P.fY,t)
inherit(P.fZ,t)
inherit(P.dt,t)
t=J.bu
inherit(J.fN,t)
inherit(J.aP,t)
inherit(J.aF,t)
inherit(J.jE,J.aD)
t=J.b7
inherit(J.cy,t)
inherit(J.cx,t)
t=P.S
inherit(H.j,t)
inherit(H.cB,t)
inherit(H.d4,t)
t=H.j
inherit(H.aJ,t)
inherit(H.fc,t)
inherit(H.ep,H.cB)
t=P.cw
inherit(H.fk,t)
inherit(H.hK,t)
t=H.aJ
inherit(H.bw,t)
inherit(P.fe,t)
inherit(P.ip,t)
t=H.aA
inherit(H.jl,t)
inherit(H.jm,t)
inherit(H.im,t)
inherit(H.i1,t)
inherit(H.f0,t)
inherit(H.f1,t)
inherit(H.iw,t)
inherit(H.hu,t)
inherit(H.hv,t)
inherit(H.jn,t)
inherit(H.j6,t)
inherit(H.j7,t)
inherit(H.j8,t)
inherit(H.j9,t)
inherit(H.ja,t)
inherit(H.ho,t)
inherit(H.f5,t)
inherit(H.j2,t)
inherit(H.j3,t)
inherit(H.j4,t)
inherit(P.hR,t)
inherit(P.hQ,t)
inherit(P.hS,t)
inherit(P.hT,t)
inherit(P.eU,t)
inherit(P.eT,t)
inherit(P.i6,t)
inherit(P.ie,t)
inherit(P.ia,t)
inherit(P.ib,t)
inherit(P.ic,t)
inherit(P.i8,t)
inherit(P.id,t)
inherit(P.i7,t)
inherit(P.ii,t)
inherit(P.ij,t)
inherit(P.ih,t)
inherit(P.ig,t)
inherit(P.hi,t)
inherit(P.hj,t)
inherit(P.hg,t)
inherit(P.hh,t)
inherit(P.iN,t)
inherit(P.iR,t)
inherit(P.iA,t)
inherit(P.iz,t)
inherit(P.iB,t)
inherit(P.fj,t)
inherit(P.en,t)
inherit(P.eo,t)
inherit(W.eq,t)
inherit(W.he,t)
inherit(W.hL,t)
inherit(W.i4,t)
inherit(W.fC,t)
inherit(W.fB,t)
inherit(W.iD,t)
inherit(W.iE,t)
inherit(W.iK,t)
inherit(W.iL,t)
inherit(P.hO,t)
inherit(P.iS,t)
inherit(P.iT,t)
inherit(P.iU,t)
inherit(B.jg,t)
inherit(B.jh,t)
inherit(B.ji,t)
inherit(B.jj,t)
inherit(B.jk,t)
inherit(B.fH,t)
inherit(B.fI,t)
inherit(B.fJ,t)
inherit(B.fK,t)
inherit(D.fg,t)
inherit(D.ff,t)
inherit(A.j1,t)
inherit(Q.jc,t)
inherit(Q.jd,t)
t=H.hV
inherit(H.bh,t)
inherit(H.c_,t)
t=P.b2
inherit(H.fD,t)
inherit(H.f6,t)
inherit(H.hD,t)
inherit(H.hB,t)
inherit(H.e3,t)
inherit(H.h_,t)
inherit(P.cb,t)
inherit(P.ba,t)
inherit(P.a3,t)
inherit(P.hE,t)
inherit(P.hC,t)
inherit(P.bc,t)
inherit(P.e5,t)
inherit(P.ee,t)
t=H.ho
inherit(H.ha,t)
inherit(H.bq,t)
inherit(H.hP,P.cb)
inherit(P.bv,P.aK)
t=P.bv
inherit(H.af,t)
inherit(P.io,t)
inherit(W.hU,t)
t=H.b9
inherit(H.ft,t)
inherit(H.cE,t)
t=H.cE
inherit(H.bR,t)
inherit(H.bT,t)
inherit(H.bS,H.bR)
inherit(H.cF,H.bS)
inherit(H.bU,H.bT)
inherit(H.cG,H.bU)
t=H.cF
inherit(H.cD,t)
inherit(H.fu,t)
t=H.cG
inherit(H.fv,t)
inherit(H.fw,t)
inherit(H.fx,t)
inherit(H.fy,t)
inherit(H.fz,t)
inherit(H.cH,t)
inherit(H.fA,t)
t=P.hW
inherit(P.bM,t)
inherit(P.iI,t)
inherit(P.iy,P.iM)
inherit(P.is,H.af)
inherit(P.h1,P.h2)
inherit(P.il,P.h1)
inherit(P.iq,P.il)
inherit(P.cz,P.bQ)
inherit(P.cd,P.cV)
inherit(P.f7,P.cc)
inherit(P.f8,P.cd)
t=P.ab
inherit(P.Y,t)
inherit(P.x,t)
t=P.a3
inherit(P.cM,t)
inherit(P.f_,t)
t=W.d
inherit(W.r,t)
inherit(W.as,t)
inherit(W.eM,t)
inherit(W.bt,t)
inherit(W.by,t)
inherit(W.fR,t)
inherit(W.cP,t)
inherit(W.bW,t)
inherit(W.bY,t)
inherit(W.hI,t)
inherit(W.hJ,t)
inherit(W.bL,t)
inherit(W.jX,t)
inherit(P.e0,t)
inherit(P.aZ,t)
t=W.r
inherit(W.a5,t)
inherit(W.az,t)
inherit(W.aB,t)
t=W.a5
inherit(W.k,t)
inherit(P.w,t)
t=W.as
inherit(W.c8,t)
inherit(W.eV,t)
inherit(W.fi,t)
t=W.k
inherit(W.dY,t)
inherit(W.dZ,t)
inherit(W.aw,t)
inherit(W.ax,t)
inherit(W.cg,t)
inherit(W.eQ,t)
inherit(W.cs,t)
inherit(W.b6,t)
inherit(W.bx,t)
inherit(W.h0,t)
inherit(W.cX,t)
inherit(W.hm,t)
inherit(W.hn,t)
inherit(W.bH,t)
t=W.b0
inherit(W.e6,t)
inherit(W.e8,t)
inherit(W.e9,t)
inherit(W.ec,t)
t=W.a4
inherit(W.e7,t)
inherit(W.eb,t)
inherit(W.ed,t)
inherit(W.b_,W.d6)
inherit(W.ej,W.ci)
inherit(W.ek,W.cj)
inherit(W.d8,W.d7)
inherit(W.ck,W.d8)
inherit(W.da,W.d9)
inherit(W.el,W.da)
inherit(W.dc,W.db)
inherit(W.eL,W.dc)
inherit(W.de,W.dd)
inherit(W.bs,W.de)
inherit(W.ct,W.aB)
inherit(W.cu,W.bt)
inherit(W.aO,W.f)
t=W.aO
inherit(W.aG,t)
inherit(W.P,t)
inherit(W.aN,t)
inherit(W.fq,W.by)
inherit(W.di,W.dh)
inherit(W.fr,W.di)
inherit(W.U,P.cz)
inherit(W.dl,W.dk)
inherit(W.bB,W.dl)
inherit(W.dq,W.dp)
inherit(W.fO,W.dq)
inherit(W.bX,W.bW)
inherit(W.h5,W.bX)
inherit(W.ds,W.dr)
inherit(W.h7,W.ds)
inherit(W.hd,W.dw)
inherit(W.dA,W.dz)
inherit(W.hp,W.dA)
inherit(W.bZ,W.bY)
inherit(W.hq,W.bZ)
inherit(W.dC,W.dB)
inherit(W.hw,W.dC)
inherit(W.bd,W.bx)
inherit(W.aQ,W.P)
inherit(W.dH,W.dG)
inherit(W.hX,W.dH)
inherit(W.hY,W.cl)
inherit(W.dJ,W.dI)
inherit(W.ik,W.dJ)
inherit(W.dL,W.dK)
inherit(W.dj,W.dL)
inherit(W.dN,W.dM)
inherit(W.iF,W.dN)
inherit(W.dP,W.dO)
inherit(W.iG,W.dP)
inherit(W.hZ,W.hU)
inherit(W.i2,P.bF)
inherit(W.i_,W.i2)
inherit(W.i3,P.hf)
inherit(W.iJ,W.bV)
inherit(P.hN,P.hM)
inherit(P.W,P.ix)
t=P.w
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
inherit(P.eF,t)
inherit(P.eG,t)
inherit(P.eH,t)
inherit(P.eI,t)
inherit(P.eJ,t)
inherit(P.eN,t)
inherit(P.ae,t)
inherit(P.fl,t)
inherit(P.fL,t)
inherit(P.bE,t)
t=P.ae
inherit(P.eP,t)
inherit(P.a6,t)
inherit(P.eY,t)
inherit(P.hl,t)
inherit(P.bI,t)
inherit(P.hG,t)
inherit(P.dg,P.df)
inherit(P.f9,P.dg)
inherit(P.dn,P.dm)
inherit(P.fE,P.dn)
inherit(P.fU,P.a6)
inherit(P.dy,P.dx)
inherit(P.hk,P.dy)
inherit(P.bJ,P.bI)
inherit(P.dE,P.dD)
inherit(P.hy,P.dE)
inherit(P.fF,P.aZ)
inherit(P.du,P.dt)
inherit(P.h9,P.du)
t=G.fs
inherit(G.h6,t)
inherit(G.d3,t)
inherit(G.fa,t)
inherit(G.fp,t)
inherit(G.fX,t)
inherit(A.fW,t)
inherit(A.bD,t)
t=G.h6
inherit(G.e1,t)
inherit(A.bA,t)
inherit(B.fG,G.e1)
inherit(G.h8,G.fa)
t=G.d3
inherit(G.eX,t)
inherit(G.fm,t)
inherit(G.fM,t)
inherit(G.eZ,G.bK)
inherit(R.cO,A.fW)
inherit(R.hc,R.hb)
mixin(H.bR,P.l)
mixin(H.bS,H.b3)
mixin(H.bT,P.l)
mixin(H.bU,H.b3)
mixin(P.bQ,P.l)
mixin(W.d6,W.ea)
mixin(W.d7,P.l)
mixin(W.d8,W.n)
mixin(W.d9,P.l)
mixin(W.da,W.n)
mixin(W.db,P.l)
mixin(W.dc,W.n)
mixin(W.dd,P.l)
mixin(W.de,W.n)
mixin(W.dh,P.l)
mixin(W.di,W.n)
mixin(W.dk,P.l)
mixin(W.dl,W.n)
mixin(W.dp,P.l)
mixin(W.dq,W.n)
mixin(W.bW,P.l)
mixin(W.bX,W.n)
mixin(W.dr,P.l)
mixin(W.ds,W.n)
mixin(W.dw,P.aK)
mixin(W.dz,P.l)
mixin(W.dA,W.n)
mixin(W.bY,P.l)
mixin(W.bZ,W.n)
mixin(W.dB,P.l)
mixin(W.dC,W.n)
mixin(W.dG,P.l)
mixin(W.dH,W.n)
mixin(W.dI,P.l)
mixin(W.dJ,W.n)
mixin(W.dK,P.l)
mixin(W.dL,W.n)
mixin(W.dM,P.l)
mixin(W.dN,W.n)
mixin(W.dO,P.l)
mixin(W.dP,W.n)
mixin(P.df,P.l)
mixin(P.dg,W.n)
mixin(P.dm,P.l)
mixin(P.dn,W.n)
mixin(P.dx,P.l)
mixin(P.dy,W.n)
mixin(P.dD,P.l)
mixin(P.dE,W.n)
mixin(P.dt,P.l)
mixin(P.du,W.n)})();(function constants(){C.n=W.aw.prototype
C.K=W.ax.prototype
C.v=W.b_.prototype
C.o=W.cg.prototype
C.L=W.ch.prototype
C.M=W.cs.prototype
C.p=W.ct.prototype
C.x=W.cu.prototype
C.N=J.a.prototype
C.a=J.aD.prototype
C.y=J.cx.prototype
C.b=J.cy.prototype
C.c=J.b7.prototype
C.i=J.aE.prototype
C.U=J.aF.prototype
C.t=H.cD.prototype
C.C=W.bB.prototype
C.D=J.fN.prototype
C.E=W.cL.prototype
C.J=W.cX.prototype
C.u=J.aP.prototype
C.aw=W.aQ.prototype
C.ax=W.bL.prototype
C.d=new P.iy()
C.w=new P.aC(0)
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
C.z=function(hooks) { return hooks; }

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
C.A=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=new P.f7(null,null)
C.W=new P.f8(null)
C.X=H.z(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.Y=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.B=makeConstList([])
C.q=H.z(makeConstList(["bind","if","ref","repeat","syntax"]),[P.m])
C.r=H.z(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.Z=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.a_=new G.y("vec4","delta from light",0)
C.m=new G.y("","",0)
C.F=new G.y("vec3","vertex coordinates",0)
C.a0=new G.y("vec3","vertex binormals",0)
C.G=new G.y("vec4","for wireframe",0)
C.a1=new G.y("vec4","per vertex color",0)
C.a2=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.a4=new G.y("mat4","",4)
C.a3=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.a5=new G.y("float","",4)
C.a6=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a7=new G.y("float","for bump maps",0)
C.a8=new G.y("vec2","texture uvs",0)
C.a9=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.aa=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.ab=new G.y("vec3","vertex normals",0)
C.ac=new G.y("sampler2DShadow","",0)
C.H=new G.y("vec3","per vertex color",0)
C.I=new G.y("mat3","",0)
C.ad=new G.y("vec3","vertex tangents",0)
C.ae=H.J("ov")
C.af=H.J("ow")
C.ag=H.J("eO")
C.ah=H.J("ox")
C.ai=H.J("oy")
C.aj=H.J("kV")
C.ak=H.J("oz")
C.al=H.J("kY")
C.am=H.J("M")
C.an=H.J("m")
C.ao=H.J("lk")
C.ap=H.J("ll")
C.aq=H.J("oB")
C.ar=H.J("lm")
C.as=H.J("am")
C.at=H.J("Y")
C.au=H.J("x")
C.av=H.J("ab")})();(function staticFields(){$.l4="$cachedFunction"
$.l5="$cachedInvocation"
$.kz=null
$.kx=null
$.k1=!1
$.k7=null
$.lA=null
$.lS=null
$.iX=null
$.j5=null
$.k8=null
$.bi=null
$.c0=null
$.c1=null
$.k2=!1
$.v=C.d
$.kP=0
$.ao=null
$.jB=null
$.kO=null
$.kN=null
$.kL=null
$.kK=null
$.kJ=null
$.kI=null
$.o2=0
$.o3=0
$.kd=0
$.lO=0
$.c5=0
$.c6=0
$.or=!1
$.lJ=0
$.eh="../asset/leeperrysmith/"})();(function lazyInitializers(){lazy($,"kH","$get$kH",function(){return H.lL("_$dart_dartClosure")})
lazy($,"jG","$get$jG",function(){return H.lL("_$dart_js")})
lazy($,"kW","$get$kW",function(){return H.nc()})
lazy($,"kX","$get$kX",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kP
$.kP=t+1
t="expando$key$"+t}return new P.er(t,null,[P.x])})
lazy($,"l9","$get$l9",function(){return H.ai(H.hA({
toString:function(){return"$receiver$"}}))})
lazy($,"la","$get$la",function(){return H.ai(H.hA({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"lb","$get$lb",function(){return H.ai(H.hA(null))})
lazy($,"lc","$get$lc",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"lg","$get$lg",function(){return H.ai(H.hA(void 0))})
lazy($,"lh","$get$lh",function(){return H.ai(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"le","$get$le",function(){return H.ai(H.lf(null))})
lazy($,"ld","$get$ld",function(){return H.ai(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"lj","$get$lj",function(){return H.ai(H.lf(void 0))})
lazy($,"li","$get$li",function(){return H.ai(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jZ","$get$jZ",function(){return P.nz()})
lazy($,"kR","$get$kR",function(){return P.nG(null,P.M)})
lazy($,"c2","$get$c2",function(){return[]})
lazy($,"kG","$get$kG",function(){return{}})
lazy($,"lr","$get$lr",function(){return P.jK(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"k_","$get$k_",function(){return P.O()})
lazy($,"iW","$get$iW",function(){return P.kZ(P.x,P.am)})
lazy($,"c4","$get$c4",function(){return P.kZ(P.m,P.am)})
lazy($,"l7","$get$l7",function(){return new G.d0(1281,0,4294967295)})
lazy($,"kv","$get$kv",function(){return new G.d_(1281,1281,1281)})
lazy($,"V","$get$V",function(){return P.aH(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.f,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kC","$get$kC",function(){return T.Q(0.4,0.4,0.4)})
lazy($,"kD","$get$kD",function(){return T.Q(1,1,0)})
lazy($,"lV","$get$lV",function(){var t=G.h4("SolidColor")
t.by(["aPosition"])
t.al(["uPerspectiveViewMatrix","uModelMatrix"])
t.aS(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lU","$get$lU",function(){var t=G.h4("SolidColorF")
t.al(["uColor"])
t.aS(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kT","$get$kT",function(){return[G.F(0,11,5),G.F(0,5,1),G.F(0,1,7),G.F(0,7,10),G.F(0,10,11),G.F(1,5,9),G.F(5,11,4),G.F(11,10,2),G.F(10,7,6),G.F(7,1,8),G.F(3,9,4),G.F(3,4,2),G.F(3,2,6),G.F(3,6,8),G.F(3,8,9),G.F(4,9,5),G.F(2,4,11),G.F(6,2,10),G.F(8,6,7),G.F(9,8,1)]})
lazy($,"lY","$get$lY",function(){return(1+P.os(5))/2})
lazy($,"kU","$get$kU",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lY()
s=T.Q(-1,t,0)
s.E(0)
r=T.Q(1,t,0)
r.E(0)
q=T.Q(-1,-t,0)
q.E(0)
p=T.Q(1,-t,0)
p.E(0)
o=T.Q(0,-1,t)
o.E(0)
n=T.Q(0,1,t)
n.E(0)
m=T.Q(0,-1,-t)
m.E(0)
l=T.Q(0,1,-t)
l.E(0)
k=T.Q(t,0,-1)
k.E(0)
j=T.Q(t,0,1)
j.E(0)
i=T.Q(-t,0,-1)
i.E(0)
t=T.Q(-t,0,1)
t.E(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"kc","$get$kc",function(){return $.eh+"LeePerrySmith.js"})
lazy($,"lP","$get$lP",function(){return $.eh+"Infinite-Level_02_Tangent_SmoothUV.jpg"})
lazy($,"kg","$get$kg",function(){return $.eh+"Map-COL.jpg"})
lazy($,"lW","$get$lW",function(){return $.eh+"Map-SPEC.jpg"})
lazy($,"m_","$get$m_",function(){var t=G.h4("LightBlinnPhongV")
t.by(["aPosition","aNormal","aTexUV"])
t.bC(["vPosition","vNormal","vTexUV"])
t.al(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.aS(["        vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n        gl_Position = uPerspectiveViewMatrix * pos;\n        vPosition = pos.xyz;\n        vNormal = uNormalMatrix * aNormal;\n        vTexUV = aTexUV;\n"])
return t})
lazy($,"lI","$get$lI",function(){var t=G.h4("LightBlinnPhongF")
t.bC(["vPosition","vNormal","vTexUV"])
t.al(["uLightDescs","uLightTypes","uShininess"])
t.al(["uEyePosition","uColor","uTexture"])
t.bG(["ColorComponents acc = CombinedLight(vPosition - uEyePosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\nvec4 diffuseMap = texture(uTexture, vTexUV );\n\noFragColor.rgb = diffuseMap.rgb + acc.diffuse + acc.specular + uColor;\noFragColor.a = 1.0;\n\n"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"ke","$get$ke",function(){return T.Q(0.5,1,0)})
lazy($,"lE","$get$lE",function(){return T.ln(0.866)})
lazy($,"lF","$get$lF",function(){return T.ln(0.133)})})()
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
mangledGlobalNames:{x:"int",Y:"double",ab:"num",m:"String",am:"bool",M:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.am,args:[W.a5,P.m,P.m,W.bO]},{func:1,v:true,args:[P.C],opt:[P.bb]},{func:1,v:true,args:[W.f]},{func:1,ret:P.x,args:[P.H,P.H]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bz,ArrayBufferView:H.b9,DataView:H.ft,Float32Array:H.cD,Float64Array:H.fu,Int16Array:H.fv,Int32Array:H.fw,Int8Array:H.fx,Uint16Array:H.fy,Uint32Array:H.fz,Uint8ClampedArray:H.cH,CanvasPixelArray:H.cH,Uint8Array:H.fA,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,Accelerometer:W.c8,LinearAccelerationSensor:W.c8,AccessibleNodeList:W.dX,HTMLAnchorElement:W.dY,HTMLAreaElement:W.dZ,HTMLBodyElement:W.aw,HTMLCanvasElement:W.ax,CanvasRenderingContext2D:W.e2,CDATASection:W.az,CharacterData:W.az,Comment:W.az,ProcessingInstruction:W.az,Text:W.az,CSSPerspective:W.e6,CSSPositionValue:W.e7,CSSRotation:W.e8,CSSScale:W.e9,CSSStyleDeclaration:W.b_,MSStyleCSSProperties:W.b_,CSS2Properties:W.b_,CSSImageValue:W.a4,CSSKeywordValue:W.a4,CSSNumericValue:W.a4,CSSResourceValue:W.a4,CSSUnitValue:W.a4,CSSURLImageValue:W.a4,CSSStyleValue:W.a4,CSSMatrixComponent:W.b0,CSSSkew:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.eb,CSSTranslation:W.ec,CSSUnparsedValue:W.ed,DataTransferItemList:W.ef,DeviceAcceleration:W.eg,HTMLDivElement:W.cg,XMLDocument:W.aB,Document:W.aB,DOMException:W.ei,DOMImplementation:W.ch,DOMMatrix:W.ej,DOMMatrixReadOnly:W.ci,DOMPoint:W.ek,DOMPointReadOnly:W.cj,ClientRectList:W.ck,DOMRectList:W.ck,DOMRectReadOnly:W.cl,DOMStringList:W.el,DOMTokenList:W.em,Element:W.a5,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.eL,FileWriter:W.eM,HTMLFormElement:W.eQ,Gyroscope:W.eV,HTMLHeadElement:W.cs,History:W.eW,HTMLCollection:W.bs,HTMLFormControlsCollection:W.bs,HTMLOptionsCollection:W.bs,HTMLDocument:W.ct,XMLHttpRequest:W.cu,XMLHttpRequestUpload:W.bt,XMLHttpRequestEventTarget:W.bt,ImageBitmap:W.b4,ImageData:W.b5,HTMLImageElement:W.b6,KeyboardEvent:W.aG,Location:W.fh,Magnetometer:W.fi,HTMLAudioElement:W.bx,HTMLMediaElement:W.bx,MediaList:W.fo,MIDIOutput:W.fq,MIDIInput:W.by,MIDIPort:W.by,MimeTypeArray:W.fr,PointerEvent:W.P,MouseEvent:W.P,DragEvent:W.P,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cI,NodeList:W.bB,RadioNodeList:W.bB,Plugin:W.ag,PluginArray:W.fO,PresentationConnection:W.fR,Range:W.cL,RTCDataChannel:W.cP,DataChannel:W.cP,HTMLSelectElement:W.h0,AbsoluteOrientationSensor:W.as,AmbientLightSensor:W.as,OrientationSensor:W.as,RelativeOrientationSensor:W.as,Sensor:W.as,SourceBufferList:W.h5,SpeechGrammarList:W.h7,SpeechRecognitionResult:W.ah,Storage:W.hd,HTMLTableElement:W.cX,HTMLTableRowElement:W.hm,HTMLTableSectionElement:W.hn,HTMLTemplateElement:W.bH,TextTrackCueList:W.hp,TextTrackList:W.hq,TimeRanges:W.hs,TouchEvent:W.aN,TouchList:W.hw,TrackDefaultList:W.hx,TreeWalker:W.d2,CompositionEvent:W.aO,FocusEvent:W.aO,TextEvent:W.aO,UIEvent:W.aO,URL:W.hF,VRStageBoundsPoint:W.hH,HTMLVideoElement:W.bd,VideoTrackList:W.hI,WebSocket:W.hJ,WheelEvent:W.aQ,Window:W.bL,DOMWindow:W.bL,CSSRuleList:W.hX,DOMRect:W.hY,GamepadList:W.ik,NamedNodeMap:W.dj,MozNamedAttrMap:W.dj,SpeechRecognitionResultList:W.iF,StyleSheetList:W.iG,SVGFEBlendElement:P.es,SVGFEColorMatrixElement:P.et,SVGFEComponentTransferElement:P.eu,SVGFECompositeElement:P.ev,SVGFEConvolveMatrixElement:P.ew,SVGFEDiffuseLightingElement:P.ex,SVGFEDisplacementMapElement:P.ey,SVGFEFloodElement:P.ez,SVGFEGaussianBlurElement:P.eA,SVGFEImageElement:P.eB,SVGFEMergeElement:P.eC,SVGFEMorphologyElement:P.eD,SVGFEOffsetElement:P.eE,SVGFEPointLightElement:P.eF,SVGFESpecularLightingElement:P.eG,SVGFESpotLightElement:P.eH,SVGFETileElement:P.eI,SVGFETurbulenceElement:P.eJ,SVGFilterElement:P.eN,SVGForeignObjectElement:P.eP,SVGCircleElement:P.a6,SVGEllipseElement:P.a6,SVGLineElement:P.a6,SVGPathElement:P.a6,SVGPolygonElement:P.a6,SVGPolylineElement:P.a6,SVGGeometryElement:P.a6,SVGAElement:P.ae,SVGClipPathElement:P.ae,SVGDefsElement:P.ae,SVGGElement:P.ae,SVGSwitchElement:P.ae,SVGGraphicsElement:P.ae,SVGImageElement:P.eY,SVGLengthList:P.f9,SVGMaskElement:P.fl,SVGMatrix:P.fn,SVGNumberList:P.fE,SVGPatternElement:P.fL,SVGPoint:P.fP,SVGPointList:P.fQ,SVGRect:P.fT,SVGRectElement:P.fU,SVGScriptElement:P.bE,SVGStringList:P.hk,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.hl,SVGTextPathElement:P.bI,SVGTextContentElement:P.bI,SVGTSpanElement:P.bJ,SVGTextElement:P.bJ,SVGTextPositioningElement:P.bJ,SVGTransformList:P.hy,SVGUseElement:P.hG,AudioBuffer:P.e_,AudioTrackList:P.e0,AudioContext:P.aZ,webkitAudioContext:P.aZ,BaseAudioContext:P.aZ,OfflineAudioContext:P.fF,WebGLRenderingContext:P.fY,WebGL2RenderingContext:P.fZ,SQLResultSetRowList:P.h9})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
H.bU.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
W.bW.$nativeSuperclassTag="EventTarget"
W.bX.$nativeSuperclassTag="EventTarget"
W.bY.$nativeSuperclassTag="EventTarget"
W.bZ.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lX(Q.lQ(),b)},[])
else (function(b){H.lX(Q.lQ(),b)})([])})})()