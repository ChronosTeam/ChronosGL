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
return d?function(e){if(t===null)t=H.jF(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jF(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jF(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={je:function je(a){this.a=a},
jl:function(a,b,c,d){if(!!a.$isk)return new H.e8(a,b,[c,d])
return new H.cl(a,b,[c,d])},
eL:function(){return new P.b5("No element")},
mA:function(){return new P.b5("Too many elements")},
mz:function(){return new P.b5("Too few elements")},
mR:function(a,b){H.cz(a,0,J.bh(a)-1,b)},
cz:function(a,b,c,d){if(c-b<=32)H.mQ(a,b,c,d)
else H.mP(a,b,c,d)},
mQ:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.R(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a6(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mP:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.R(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a6(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a6(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a6(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a6(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a6(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a6(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a6(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a6(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a6(a5.$2(j,i),0)){h=i
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
H.cz(a2,a3,g-2,a5)
H.cz(a2,f+2,a4,a5)
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
break}}H.cz(a2,g,f,a5)}else H.cz(a2,g,f,a5)},
k:function k(){},
aZ:function aZ(){},
cj:function cj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
e8:function e8(a,b,c){this.a=a
this.b=b
this.$ti=c},
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bp:function bp(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.$ti=c},
aX:function aX(){},
dA:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.am()
return t},
it:function(){++u.globalState.f.b},
iJ:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lm:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$ish)throw H.c(P.j6("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.i_(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kn()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hz(P.jk(null,H.aM),0)
q=P.x
s.seL(new H.a9(0,null,null,null,null,null,0,[q,H.b7]))
s.seO(new H.a9(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hZ()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mu,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n2)}if(u.globalState.x)return
o=H.l_()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.bd(a,{func:1,args:[P.M]}))o.af(new H.iT(t,a))
else if(H.bd(a,{func:1,args:[P.M,P.M]}))o.af(new H.iU(t,a))
else o.af(a)
u.globalState.f.am()},
n2:function(a){var t=P.aC(["command","print","msg",a])
return new H.a1(!0,P.b8(null,P.x)).J(t)},
l_:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.b7(t,new H.a9(0,null,null,null,null,null,0,[s,H.cx]),P.aD(null,null,null,s),u.createNewIsolate(),new H.cx(0,null,!1),new H.ar(H.lk()),new H.ar(H.lk()),!1,!1,[],P.aD(null,null,null,null),null,null,!1,!0,P.aD(null,null,null,null))
t.dB()
return t},
mw:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mx()
return},
mx:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
mu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aL(!0,[]).V(b.data)
s=J.R(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nx(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aL(!0,[]).V(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aL(!0,[]).V(s.h(t,"replyTo"))
k=H.l_()
u.globalState.f.a.S(0,new H.aM(k,new H.eI(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.am()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lW(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.am()
break
case"close":u.globalState.ch.al(0,$.$get$ko().h(0,a))
a.terminate()
u.globalState.f.am()
break
case"log":H.mt(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aC(["command","print","msg",t])
j=new H.a1(!0,P.b8(null,P.x)).J(j)
s.toString
self.postMessage(j)}else P.a5(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mt:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aC(["command","log","msg",a])
r=new H.a1(!0,P.b8(null,P.x)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.K(q)
t=H.ah(q)
s=P.c5(t)
throw H.c(s)}},
mv:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kz=$.kz+("_"+s)
$.kA=$.kA+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.F(0,["spawned",new H.b9(s,r),q,t.r])
r=new H.eJ(t,d,a,c,b)
if(e){t.bT(q,q)
u.globalState.f.a.S(0,new H.aM(t,r,"start isolate"))}else r.$0()},
mS:function(a,b){var t=new H.h1(!0,!1,null,0)
t.dr(a,b)
return t},
n4:function(a){return new H.aL(!0,[]).V(new H.a1(!1,P.b8(null,P.x)).J(a))},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
i_:function i_(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b7:function b7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hU:function hU(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(){},
eI:function eI(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hu:function hu(){},
b9:function b9(a,b){this.b=a
this.a=b},
i1:function i1(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c){this.b=a
this.c=b
this.a=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
a1:function a1(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
nr:function(a){return u.types[a]},
nz:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$isr},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bi(a)
if(typeof t!=="string")throw H.c(H.J(a))
return t},
mN:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ay(t)
s=t[0]
r=t[1]
return new H.fy(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aE:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
kx:function(a,b){var t=P.jb(a,null,null)
throw H.c(t)},
jo:function(a,b,c){var t,s
if(typeof a!=="string")H.D(H.J(a))
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.kx(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.kx(a,c)},
kw:function(a,b){var t=P.jb("Invalid double",a,null)
throw H.c(t)},
aF:function(a,b){var t,s
if(typeof a!=="string")H.D(H.J(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kw(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.m2(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kw(a,b)}return t},
bt:function(a){var t,s,r,q,p,o,n,m,l
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.q(a).$isaJ){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.a9(q,0)===36)q=C.h.d6(q,1)
l=H.dB(H.iw(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
O:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mL:function(a){return a.b?H.O(a).getUTCFullYear()+0:H.O(a).getFullYear()+0},
mJ:function(a){return a.b?H.O(a).getUTCMonth()+1:H.O(a).getMonth()+1},
mF:function(a){return a.b?H.O(a).getUTCDate()+0:H.O(a).getDate()+0},
mG:function(a){return a.b?H.O(a).getUTCHours()+0:H.O(a).getHours()+0},
mI:function(a){return a.b?H.O(a).getUTCMinutes()+0:H.O(a).getMinutes()+0},
mK:function(a){return a.b?H.O(a).getUTCSeconds()+0:H.O(a).getSeconds()+0},
mH:function(a){return a.b?H.O(a).getUTCMilliseconds()+0:H.O(a).getMilliseconds()+0},
ky:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.J(a))
return a[b]},
ao:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a7(!0,b,"index",null)
t=J.bh(a)
if(b<0||C.b.cQ(b,t))return P.A(b,a,"index",null,t)
return P.fv(b,"index",null)},
J:function(a){return new P.a7(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.b2()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ln})
t.name=""}else t.toString=H.ln
return t},
ln:function(){return J.bi(this.dartException)},
D:function(a){throw H.c(a)},
H:function(a){throw H.c(P.aj(a))},
ad:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h7(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h8:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kN:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kv:function(a,b){return new H.fg(a,b==null?null:b.method)},
jg:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eP(a,s,t?null:b.receiver)},
K:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aW(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jg(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kv(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kH()
o=$.$get$kI()
n=$.$get$kJ()
m=$.$get$kK()
l=$.$get$kO()
k=$.$get$kP()
j=$.$get$kM()
$.$get$kL()
i=$.$get$kR()
h=$.$get$kQ()
g=p.M(s)
if(g!=null)return t.$1(H.jg(s,g))
else{g=o.M(s)
if(g!=null){g.method="call"
return t.$1(H.jg(s,g))}else{g=n.M(s)
if(g==null){g=m.M(s)
if(g==null){g=l.M(s)
if(g==null){g=k.M(s)
if(g==null){g=j.M(s)
if(g==null){g=m.M(s)
if(g==null){g=i.M(s)
if(g==null){g=h.M(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kv(s,g))}}return t.$1(new H.hc(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cC()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a7(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cC()
return a},
ah:function(a){var t
if(a==null)return new H.de(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.de(a,null)},
nD:function(a){if(a==null||typeof a!='object')return J.bg(a)
else return H.aE(a)},
np:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
ny:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dA(b,new H.iE(a))
case 1:return H.dA(b,new H.iF(a,d))
case 2:return H.dA(b,new H.iG(a,d,e))
case 3:return H.dA(b,new H.iH(a,d,e,f))
case 4:return H.dA(b,new H.iI(a,d,e,f,g))}throw H.c(P.c5("Unsupported number of arguments for wrapped closure"))},
aO:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ny)
a.$identity=t
return t},
me:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$ish){t.$reflectionInfo=c
r=H.mN(t).r}else r=c
q=d?Object.create(new H.fK().constructor.prototype):Object.create(new H.bj(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k8(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nr,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k5:H.j7
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k8(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mb:function(a,b,c,d){var t=H.j7
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k8:function(a,b,c){var t,s,r,q
if(c)return H.md(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mb(s,b==null?r!=null:b!==r,t,b)
return q},
mc:function(a,b,c,d){var t,s
t=H.j7
s=H.k5
switch(b?-1:a){case 0:throw H.c(H.mO("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
md:function(a,b){var t,s,r,q
t=$.k6
if(t==null){t=H.k3("self")
$.k6=t}t=$.k4
if(t==null){t=H.k3("receiver")
$.k4=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mc(r,b==null?q!=null:b!==q,s,b)
return t},
jF:function(a,b,c,d,e,f){var t,s
t=J.ay(b)
s=!!J.q(c).$ish?J.ay(c):c
return H.me(a,t,s,!!d,e,f)},
j7:function(a){return a.a},
k5:function(a){return a.c},
k3:function(a){var t,s,r,q,p
t=new H.bj("self","target","receiver","name")
s=J.ay(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
o4:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ae(a,"String"))},
o_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ae(a,"double"))},
o3:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ae(a,"num"))},
nh:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ae(a,"bool"))},
nx:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ae(a,"int"))},
nF:function(a,b){throw H.c(H.ae(a,b.substring(3)))},
nE:function(a,b){var t=J.R(b)
throw H.c(H.k7(a,t.aG(b,3,t.gj(b))))},
jJ:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.nF(a,b)},
ai:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.nE(a,b)},
o2:function(a){if(a==null)return a
if(!!J.q(a).$ish)return a
throw H.c(H.ae(a,"List"))},
jG:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
bd:function(a,b){var t,s
if(a==null)return!1
t=H.jG(a)
if(t==null)s=!1
else s=H.lg(t,b)
return s},
o0:function(a,b){var t,s
if(a==null)return a
if($.jC)return a
$.jC=!0
try{if(H.bd(a,b))return a
t=H.iN(b,null)
s=H.ae(a,t)
throw H.c(s)}finally{$.jC=!1}},
ae:function(a,b){return new H.h9("TypeError: "+H.e(P.c4(a))+": type '"+H.l5(a)+"' is not a subtype of type '"+b+"'")},
k7:function(a,b){return new H.dP("CastError: "+H.e(P.c4(a))+": type '"+H.l5(a)+"' is not a subtype of type '"+b+"'")},
l5:function(a){var t
if(a instanceof H.at){t=H.jG(a)
if(t!=null)return H.iN(t,null)
return"Closure"}return H.bt(a)},
V:function(a){if(!0===a)return!1
if(!!J.q(a).$isjc)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ae(a,"bool"))},
a2:function(a){throw H.c(new H.ho(a))},
b:function(a){if(H.V(a))throw H.c(P.ma(null))},
nO:function(a){throw H.c(new P.e_(a))},
mO:function(a){return new H.fC(a)},
lk:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
le:function(a){return u.getIsolateTag(a)},
G:function(a){return new H.am(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iw:function(a){if(a==null)return
return a.$ti},
lf:function(a,b){return H.jN(a["$as"+H.e(b)],H.iw(a))},
a3:function(a,b,c){var t,s
t=H.lf(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ap:function(a,b){var t,s
t=H.iw(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iN:function(a,b){var t=H.bf(a,b)
return t},
bf:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dB(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bf(t,b)
return H.n6(a,b)}return"unknown-reified-type"},
n6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bf(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bf(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bf(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.no(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bf(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dB:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bv("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bf(o,c)}return p?"":"<"+s.k(0)+">"},
ix:function(a){var t,s,r
if(a instanceof H.at){t=H.jG(a)
if(t!=null)return H.iN(t,null)}s=J.q(a).constructor.name
if(a==null)return s
r=H.dB(a.$ti,0,null)
return s+r},
jN:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jK(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jK(a,null,b)
return b},
bR:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iw(a)
s=J.q(a)
if(s[b]==null)return!1
return H.l9(H.jN(s[d],t),c)},
dC:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bR(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dB(c,0,null)
throw H.c(H.k7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nX:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bR(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dB(c,0,null)
throw H.c(H.ae(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
l9:function(a,b){var t,s,r,q,p
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
if(!H.U(r,b[p]))return!1}return!0},
nY:function(a,b,c){return H.jK(a,b,H.lf(b,c))},
U:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="M")return!0
if('func' in b)return H.lg(a,b)
if('func' in a)return b.name==="jc"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iN(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l9(H.jN(o,t),r)},
l8:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.U(o,n)||H.U(n,o)))return!1}return!0},
nd:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ay(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.U(p,o)||H.U(o,p)))return!1}return!0},
lg:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.U(t,s)||H.U(s,t)))return!1}r=a.args
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
if(n===m){if(!H.l8(r,q,!1))return!1
if(!H.l8(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.U(g,f)||H.U(f,g)))return!1}}return H.nd(a.named,b.named)},
jK:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
o5:function(a){var t=$.jH
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
o1:function(a){return H.aE(a)},
nZ:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nA:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.jH.$1(a)
s=$.is[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iD[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l7.$2(a,t)
if(t!=null){s=$.is[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iD[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iM(r)
$.is[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iD[t]=r
return r}if(p==="-"){o=H.iM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.li(a,r)
if(p==="*")throw H.c(P.ju(t))
if(u.leafTags[t]===true){o=H.iM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.li(a,r)},
li:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jL(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iM:function(a){return J.jL(a,!1,null,!!a.$isr)},
nC:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iM(t)
else return J.jL(t,c,null,null)},
nv:function(){if(!0===$.jI)return
$.jI=!0
H.nw()},
nw:function(){var t,s,r,q,p,o,n,m
$.is=Object.create(null)
$.iD=Object.create(null)
H.nu()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lj.$1(p)
if(o!=null){n=H.nC(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nu:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.bc(C.O,H.bc(C.T,H.bc(C.y,H.bc(C.y,H.bc(C.S,H.bc(C.P,H.bc(C.Q(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jH=new H.iA(p)
$.l7=new H.iB(o)
$.lj=new H.iC(n)},
bc:function(a,b){return a(b)||b},
kr:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.c(P.jb("Illegal RegExp pattern ("+String(q)+")",a,null))},
n3:function(a,b){var t=new H.i0(a,b)
t.dD(a,b)
return t},
nJ:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
nL:function(a,b,c,d){var t,s,r
t=b.dQ(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.nN(a,r,r+s[0].length,c)},
nK:function(a,b,c){var t,s
t=b.gbL()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
nM:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.nL(a,b,c,d)},
nN:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fy:function fy(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h7:function h7(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fg:function fg(a,b){this.a=a
this.b=b},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
hc:function hc(a){this.a=a},
iV:function iV(a){this.a=a},
de:function de(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
at:function at(){},
fX:function fX(){},
fK:function fK(){},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h9:function h9(a){this.a=a},
dP:function dP(a){this.a=a},
fC:function fC(a){this.a=a},
ho:function ho(a){this.a=a},
am:function am(a,b){this.a=a
this.b=b},
a9:function a9(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eO:function eO(a){this.a=a},
eR:function eR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a,b){this.a=a
this.$ti=b},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i0:function i0(a,b){this.a=a
this.b=b},
ij:function(a){var t,s,r
if(!!J.q(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
af:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ao(b,a))},
br:function br(){},
b1:function b1(){},
f6:function f6(){},
co:function co(){},
cp:function cp(){},
cq:function cq(){},
cn:function cn(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
cr:function cr(){},
fd:function fd(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
bH:function bH(){},
no:function(a){return J.ay(H.B(a?Object.keys(a):[],[null]))},
be:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cg.prototype
return J.cf.prototype}if(typeof a=="string")return J.az.prototype
if(a==null)return J.ch.prototype
if(typeof a=="boolean")return J.eM.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.C)return a
return J.iv(a)},
jL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iv:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jI==null){H.nv()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.ju("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jf()]
if(p!=null)return p
p=H.nA(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,$.$get$jf(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ay:function(a){a.fixed$length=Array
return a},
kq:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mB:function(a,b){var t,s
for(t=a.length;b<t;){s=C.h.a9(a,b)
if(s!==32&&s!==13&&!J.kq(s))break;++b}return b},
mC:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.h.c4(a,t)
if(s!==32&&s!==13&&!J.kq(s))break}return b},
R:function(a){if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.C)return a
return J.iv(a)},
aP:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.C)return a
return J.iv(a)},
ld:function(a){if(typeof a=="number")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
nq:function(a){if(typeof a=="number")return J.aY.prototype
if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
iu:function(a){if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.C)return a
return J.iv(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).w(a,b)},
a6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ld(a).aD(a,b)},
lo:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ld(a).aE(a,b)},
aQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nz(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.R(a).h(a,b)},
lp:function(a,b,c){return J.aP(a).i(a,b,c)},
lq:function(a,b,c,d){return J.i(a).dG(a,b,c,d)},
jO:function(a,b){return J.iu(a).a9(a,b)},
iW:function(a,b){return J.i(a).dY(a,b)},
lr:function(a,b,c){return J.i(a).dZ(a,b,c)},
jP:function(a,b){return J.i(a).bS(a,b)},
iX:function(a,b){return J.i(a).N(a,b)},
jQ:function(a,b,c){return J.i(a).bV(a,b,c)},
ls:function(a,b){return J.i(a).ec(a,b)},
iY:function(a,b,c){return J.i(a).bW(a,b,c)},
iZ:function(a,b,c){return J.i(a).bX(a,b,c)},
dD:function(a,b,c){return J.i(a).bY(a,b,c)},
dE:function(a,b){return J.i(a).ef(a,b)},
lt:function(a,b){return J.i(a).bZ(a,b)},
lu:function(a,b,c){return J.i(a).c_(a,b,c)},
jR:function(a,b,c,d){return J.i(a).c0(a,b,c,d)},
lv:function(a,b){return J.i(a).c1(a,b)},
lw:function(a,b){return J.aP(a).c2(a,b)},
lx:function(a,b,c,d,e){return J.i(a).c3(a,b,c,d,e)},
ly:function(a,b){return J.nq(a).O(a,b)},
j_:function(a,b,c){return J.R(a).ek(a,b,c)},
j0:function(a){return J.i(a).c6(a)},
lz:function(a){return J.i(a).c7(a)},
lA:function(a){return J.i(a).c8(a)},
lB:function(a){return J.i(a).ca(a)},
lC:function(a){return J.i(a).ep(a)},
lD:function(a,b){return J.i(a).cc(a,b)},
j1:function(a,b){return J.i(a).cd(a,b)},
lE:function(a,b,c,d){return J.i(a).ce(a,b,c,d)},
lF:function(a,b,c,d,e){return J.i(a).ex(a,b,c,d,e)},
lG:function(a,b,c,d,e){return J.i(a).cf(a,b,c,d,e)},
lH:function(a,b,c,d,e,f){return J.i(a).ey(a,b,c,d,e,f)},
lI:function(a,b){return J.aP(a).t(a,b)},
dF:function(a,b){return J.i(a).cg(a,b)},
lJ:function(a,b){return J.i(a).ci(a,b)},
lK:function(a){return J.i(a).ez(a)},
jS:function(a,b){return J.aP(a).ag(a,b)},
jT:function(a,b,c,d,e,f){return J.i(a).cl(a,b,c,d,e,f)},
lL:function(a){return J.i(a).geb(a)},
bg:function(a){return J.q(a).gu(a)},
aR:function(a){return J.aP(a).gv(a)},
bh:function(a){return J.R(a).gj(a)},
lM:function(a){return J.i(a).gb3(a)},
lN:function(a){return J.q(a).gA(a)},
lO:function(a){return J.i(a).gf_(a)},
lP:function(a){return J.i(a).gaA(a)},
j2:function(a){return J.i(a).gm(a)},
j3:function(a){return J.i(a).gn(a)},
jU:function(a){return J.i(a).gD(a)},
j4:function(a,b){return J.i(a).a4(a,b)},
lQ:function(a){return J.i(a).aC(a)},
lR:function(a){return J.i(a).b9(a)},
lS:function(a,b){return J.i(a).ba(a,b)},
lT:function(a,b,c){return J.i(a).bb(a,b,c)},
jV:function(a,b,c){return J.i(a).be(a,b,c)},
lU:function(a,b){return J.i(a).cn(a,b)},
lV:function(a,b){return J.aP(a).cp(a,b)},
jW:function(a){return J.aP(a).eU(a)},
lW:function(a,b){return J.i(a).F(a,b)},
lX:function(a,b){return J.iu(a).d4(a,b)},
lY:function(a,b,c,d){return J.i(a).bj(a,b,c,d)},
lZ:function(a,b,c,d){return J.i(a).cu(a,b,c,d)},
dG:function(a,b,c,d){return J.i(a).cv(a,b,c,d)},
m_:function(a,b,c,d,e,f){return J.i(a).f0(a,b,c,d,e,f)},
m0:function(a){return J.iu(a).f3(a)},
bi:function(a){return J.q(a).k(a)},
m1:function(a,b,c,d){return J.i(a).f5(a,b,c,d)},
m2:function(a){return J.iu(a).f6(a)},
m3:function(a,b,c){return J.i(a).cz(a,b,c)},
m4:function(a,b,c){return J.i(a).cA(a,b,c)},
j5:function(a,b,c){return J.i(a).cB(a,b,c)},
m5:function(a,b,c){return J.i(a).cC(a,b,c)},
jX:function(a,b,c){return J.i(a).cD(a,b,c)},
jY:function(a,b,c){return J.i(a).cE(a,b,c)},
jZ:function(a,b,c){return J.i(a).cF(a,b,c)},
k_:function(a,b,c,d){return J.i(a).cG(a,b,c,d)},
k0:function(a,b,c,d){return J.i(a).cH(a,b,c,d)},
m6:function(a,b){return J.i(a).cJ(a,b)},
m7:function(a,b,c){return J.i(a).f7(a,b,c)},
m8:function(a,b,c,d,e,f,g){return J.i(a).cL(a,b,c,d,e,f,g)},
m9:function(a,b,c,d,e){return J.i(a).cN(a,b,c,d,e)},
a:function a(){},
eM:function eM(){},
ch:function ch(){},
bo:function bo(){},
fq:function fq(){},
aJ:function aJ(){},
aA:function aA(){},
ax:function ax(a){this.$ti=a},
jd:function jd(a){this.$ti=a},
dK:function dK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
cg:function cg(){},
cf:function cf(){},
az:function az(){}},P={
mV:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.ne()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aO(new P.hq(t),1)).observe(s,{childList:true})
return new P.hp(t,s,r)}else if(self.setImmediate!=null)return P.nf()
return P.ng()},
mW:function(a){H.it()
self.scheduleImmediate(H.aO(new P.hr(a),0))},
mX:function(a){H.it()
self.setImmediate(H.aO(new P.hs(a),0))},
mY:function(a){P.jr(C.v,a)},
jr:function(a,b){var t=C.b.I(a.a,1000)
return H.mS(t<0?0:t,b)},
n9:function(a,b){if(H.bd(a,{func:1,args:[P.M,P.M]})){b.toString
return a}else{b.toString
return a}},
mp:function(a,b,c){var t
if(a==null)a=new P.b2()
t=$.v
if(t!==C.d)t.toString
t=new P.I(0,t,null,[c])
t.bA(a,b)
return t},
mq:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.I(0,$.v,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eD(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b7(new P.eC(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.I(0,$.v,null,[null])
l.bz(C.A)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.K(j)
n=H.ah(j)
if(t.b===0||!1)return P.mp(o,n,null)
else{t.c=o
t.d=n}}return s},
kX:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.I))
H.b(b.a===0)
b.a=1
try{a.b7(new P.hJ(b),new P.hK(b))}catch(r){t=H.K(r)
s=H.ah(r)
P.nG(new P.hL(b,t,s))}},
hI:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.av()
b.aL(a)
P.b6(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bM(r)}},
b6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ik(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b6(t.a,b)}s=t.a
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
P.ik(null,null,p,o,s)
return}s=$.v
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.v
H.b(l==null?s!=null:l!==s)
j=$.v
$.v=l
i=j}else i=null
s=b.c
if(s===8)new P.hQ(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hP(r,b,m).$0()}else if((s&2)!==0)new P.hO(t,r,b).$0()
if(i!=null){H.b(!0)
$.v=i}s=r.b
if(!!J.q(s).$isZ){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aw(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hI(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aw(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
n8:function(){var t,s
for(;t=$.ba,t!=null;){$.bP=null
s=t.b
$.ba=s
if(s==null)$.bO=null
t.a.$0()}},
nc:function(){$.jD=!0
try{P.n8()}finally{$.bP=null
$.jD=!1
if($.ba!=null)$.$get$jy().$1(P.la())}},
l4:function(a){var t=new P.cO(a,null)
if($.ba==null){$.bO=t
$.ba=t
if(!$.jD)$.$get$jy().$1(P.la())}else{$.bO.b=t
$.bO=t}},
nb:function(a){var t,s,r
t=$.ba
if(t==null){P.l4(a)
$.bP=$.bO
return}s=new P.cO(a,null)
r=$.bP
if(r==null){s.b=t
$.bP=s
$.ba=s}else{s.b=r.b
r.b=s
$.bP=s
if(s.b==null)$.bO=s}},
nG:function(a){var t=$.v
if(C.d===t){P.bb(null,null,C.d,a)
return}t.toString
P.bb(null,null,t,t.aZ(a))},
mT:function(a,b){var t=$.v
if(t===C.d){t.toString
return P.jr(a,b)}return P.jr(a,t.aZ(b))},
jx:function(a){var t,s
H.b(a!=null)
t=$.v
H.b(a==null?t!=null:a!==t)
s=$.v
$.v=a
return s},
ik:function(a,b,c,d,e){var t={}
t.a=d
P.nb(new P.il(t,e))},
l2:function(a,b,c,d){var t,s
if($.v===c)return d.$0()
t=P.jx(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.v=s}},
l3:function(a,b,c,d,e){var t,s
if($.v===c)return d.$1(e)
t=P.jx(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
na:function(a,b,c,d,e,f){var t,s
if($.v===c)return d.$2(e,f)
t=P.jx(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
bb:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aZ(d):c.ed(d)
P.l4(d)},
hq:function hq(a){this.a=a},
hp:function hp(a,b,c){this.a=a
this.b=b
this.c=c},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
Z:function Z(){},
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
j8:function j8(){},
hv:function hv(){},
cP:function cP(a,b){this.a=a
this.$ti=b},
id:function id(a,b){this.a=a
this.$ti=b},
cX:function cX(a,b,c,d,e,f){var _=this
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
hF:function hF(a,b){this.a=a
this.b=b},
hN:function hN(a,b){this.a=a
this.b=b},
hJ:function hJ(a){this.a=a},
hK:function hK(a){this.a=a},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
hH:function hH(a,b){this.a=a
this.b=b},
hM:function hM(a,b){this.a=a
this.b=b},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
hQ:function hQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hR:function hR(a){this.a=a},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b){this.a=a
this.b=b},
fP:function fP(){},
fR:function fR(a){this.a=a},
fS:function fS(a,b){this.a=a
this.b=b},
fQ:function fQ(){},
jq:function jq(){},
aS:function aS(a,b){this.a=a
this.b=b},
ii:function ii(){},
il:function il(a,b){this.a=a
this.b=b},
i3:function i3(){},
i5:function i5(a,b){this.a=a
this.b=b},
i4:function i4(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
ks:function(a,b){return new H.a9(0,null,null,null,null,null,0,[a,b])},
F:function(){return new H.a9(0,null,null,null,null,null,0,[null,null])},
aC:function(a){return H.np(a,new H.a9(0,null,null,null,null,null,0,[null,null]))},
b8:function(a,b){return new P.hX(0,null,null,null,null,null,0,[a,b])},
aD:function(a,b,c,d){return new P.hV(0,null,null,null,null,null,0,[d])},
jB:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
my:function(a,b,c){var t,s
if(P.jE(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bQ()
C.a.l(s,a)
try{P.n7(a,t)}finally{H.b(C.a.gb0(s)===a)
s.pop()}s=P.kF(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eK:function(a,b,c){var t,s,r
if(P.jE(a))return b+"..."+c
t=new P.bv(b)
s=$.$get$bQ()
C.a.l(s,a)
try{r=t
r.a=P.kF(r.ga_(),a,", ")}finally{H.b(C.a.gb0(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
jE:function(a){var t,s
for(t=0;s=$.$get$bQ(),t<s.length;++t)if(a===s[t])return!0
return!1},
n7:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.e(t.gq(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq(t);++r
if(!t.p()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gq(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gq(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.e(n)
p=H.e(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
jj:function(a,b){var t,s
t=P.aD(null,null,null,b)
for(s=J.aR(a);s.p();)t.l(0,s.gq(s))
return t},
ku:function(a){var t,s,r
t={}
if(P.jE(a))return"{...}"
s=new P.bv("")
try{C.a.l($.$get$bQ(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
J.jS(a,new P.eY(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$bQ()
H.b(C.a.gb0(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
jk:function(a,b){var t=new P.eU(null,0,0,0,[b])
t.dk(a,b)
return t},
hX:function hX(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hV:function hV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
bC:function bC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hT:function hT(){},
ji:function ji(){},
ci:function ci(){},
l:function l(){},
ck:function ck(){},
eY:function eY(a,b){this.a=a
this.b=b},
b0:function b0(){},
eU:function eU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hY:function hY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fF:function fF(){},
fE:function fE(){},
bD:function bD(){},
ml:function(a){var t=J.q(a)
if(!!t.$isat)return t.k(a)
return"Instance of '"+H.bt(a)+"'"},
kt:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.aR(a);s.p();)C.a.l(t,s.gq(s))
return t},
kC:function(a,b,c){return new H.eN(a,H.kr(a,!1,!0,!1),null,null)},
kF:function(a,b,c){var t=J.aR(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
mf:function(a,b){return J.ly(a,b)},
mg:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bZ:function(a){if(a>=10)return""+a
return"0"+a},
kg:function(a,b,c,d,e,f){return new P.aw(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bi(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ml(a)},
ma:function(a){return new P.bW(a)},
j6:function(a){return new P.a7(!1,null,null,a)},
k1:function(a,b,c){return new P.a7(!0,a,b,c)},
fv:function(a,b,c){return new P.cw(null,null,!0,a,b,"Value not in range")},
aG:function(a,b,c,d,e){return new P.cw(b,c,!0,a,d,"Invalid value")},
kB:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.aG(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.aG(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.bh(b)
return new P.eH(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.hd(a)},
ju:function(a){return new P.hb(a)},
cD:function(a){return new P.b5(a)},
aj:function(a){return new P.dR(a)},
c5:function(a){return new P.hE(a)},
jb:function(a,b,c){return new P.eB(a,b,c)},
a5:function(a){H.be(H.e(a))},
ag:function ag(){},
E:function E(){},
au:function au(a,b){this.a=a
this.b=b},
W:function W(){},
aw:function aw(a){this.a=a},
e6:function e6(){},
e7:function e7(){},
aW:function aW(){},
bW:function bW(a){this.a=a},
b2:function b2(){},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cw:function cw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eH:function eH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hd:function hd(a){this.a=a},
hb:function hb(a){this.a=a},
b5:function b5(a){this.a=a},
dR:function dR(a){this.a=a},
cC:function cC(){},
e_:function e_(a){this.a=a},
ja:function ja(){},
hE:function hE(a){this.a=a},
eB:function eB(a,b,c){this.a=a
this.b=b
this.c=c},
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
S:function S(){},
ce:function ce(){},
h:function h(){},
b_:function b_(){},
M:function M(){},
a4:function a4(){},
C:function C(){},
jp:function jp(){},
b4:function b4(){},
n:function n(){},
bv:function bv(a){this.a=a},
jt:function jt(){},
iq:function(a){var t,s,r,q,p
if(a==null)return
t=P.F()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nk:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jS(a,new P.im(t))
return t},
nl:function(a){var t,s
t=new P.I(0,$.v,null,[null])
s=new P.cP(t,[null])
a.then(H.aO(new P.io(s),1))["catch"](H.aO(new P.ip(s),1))
return t},
kf:function(){var t=$.ke
if(t==null){t=J.j_(window.navigator.userAgent,"Opera",0)
$.ke=t}return t},
mi:function(){var t,s
t=$.kb
if(t!=null)return t
s=$.kc
if(s==null){s=J.j_(window.navigator.userAgent,"Firefox",0)
$.kc=s}if(s)t="-moz-"
else{s=$.kd
if(s==null){s=!P.kf()&&J.j_(window.navigator.userAgent,"Trident/",0)
$.kd=s}if(s)t="-ms-"
else t=P.kf()?"-o-":"-webkit-"}$.kb=t
return t},
hl:function hl(){},
hn:function hn(a,b){this.a=a
this.b=b},
im:function im(a){this.a=a},
hm:function hm(a,b,c){this.a=a
this.b=b
this.c=c},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
i2:function i2(){},
T:function T(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
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
ex:function ex(){},
ez:function ez(){},
a_:function a_(){},
a8:function a8(){},
eG:function eG(){},
eQ:function eQ(){},
f_:function f_(){},
fh:function fh(){},
fo:function fo(){},
fs:function fs(){},
ft:function ft(){},
fw:function fw(){},
fx:function fx(){},
bu:function bu(){},
fT:function fT(){},
u:function u(){},
fU:function fU(){},
bx:function bx(){},
by:function by(){},
h6:function h6(){},
hf:function hf(){},
d_:function d_(){},
d0:function d0(){},
d6:function d6(){},
d7:function d7(){},
dg:function dg(){},
dh:function dh(){},
dm:function dm(){},
dn:function dn(){},
dL:function dL(){},
dM:function dM(){},
aT:function aT(){},
fi:function fi(){},
fA:function fA(){},
fB:function fB(){},
fJ:function fJ(){},
dc:function dc(){},
dd:function dd(){}},W={
nn:function(){return document},
mj:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).L(t,a,b,c)
s.toString
t=new H.cN(new W.P(s),new W.e9(),[W.p])
return t.gZ(t)},
mk:function(a){return"wheel"},
bk:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lO(a)
if(typeof s==="string")t=a.tagName}catch(r){H.K(r)}return t},
mZ:function(a,b){return document.createElement(a)},
aN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a0:function(a,b,c,d,e){var t=W.l6(new W.hD(c))
t=new W.hC(0,a,b,t,!1,[e])
t.dz(a,b,c,!1,e)
return t},
kY:function(a){var t,s
t=document.createElement("a")
s=new W.i7(t,window.location)
s=new W.bB(s)
s.dA(a)
return s},
n0:function(a,b,c,d){return!0},
n1:function(a,b,c,d){var t,s,r,q,p
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
l1:function(){var t=P.n
t=new W.ie(P.jj(C.q,t),P.aD(null,null,null,t),P.aD(null,null,null,t),P.aD(null,null,null,t),null)
t.dE(null,new H.bp(C.q,new W.ig(),[H.ap(C.q,0),null]),["TEMPLATE"],null)
return t},
n5:function(a){var t
if(!!J.q(a).$isav)return a
t=new P.hm([],[],!1)
t.c=!0
return t.b8(a)},
l6:function(a){var t=$.v
if(t===C.d)return a
return t.ee(a)},
j:function j(){},
bV:function bV(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
aq:function aq(){},
bX:function bX(){},
dO:function dO(){},
as:function as(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
aU:function aU(){},
dW:function dW(){},
X:function X(){},
aV:function aV(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
c_:function c_(){},
av:function av(){},
e2:function e2(){},
c0:function c0(){},
e3:function e3(){},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
e4:function e4(){},
e5:function e5(){},
Y:function Y(){},
e9:function e9(){},
f:function f(){},
d:function d(){},
ev:function ev(){},
ew:function ew(){},
eA:function eA(){},
eE:function eE(){},
cb:function cb(){},
eF:function eF(){},
bl:function bl(){},
cc:function cc(){},
cd:function cd(){},
bm:function bm(){},
bn:function bn(){},
aB:function aB(){},
eW:function eW(){},
eX:function eX(){},
f1:function f1(){},
f3:function f3(){},
bq:function bq(){},
f4:function f4(){},
L:function L(){},
P:function P(a){this.a=a},
p:function p(){},
cs:function cs(){},
bs:function bs(){},
ab:function ab(){},
fr:function fr(){},
fu:function fu(){},
cv:function cv(){},
cy:function cy(){},
fD:function fD(){},
al:function al(){},
fG:function fG(){},
fI:function fI(){},
ac:function ac(){},
fN:function fN(){},
fO:function fO(a){this.a=a},
cF:function cF(){},
fV:function fV(){},
fW:function fW(){},
bw:function bw(){},
fY:function fY(){},
fZ:function fZ(){},
h0:function h0(){},
aH:function aH(){},
h4:function h4(){},
h5:function h5(){},
cL:function cL(){},
aI:function aI(){},
he:function he(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
aK:function aK(){},
bA:function bA(){},
hk:function hk(a){this.a=a},
jw:function jw(){},
hw:function hw(){},
hx:function hx(){},
hS:function hS(){},
d3:function d3(){},
ia:function ia(){},
ib:function ib(){},
ht:function ht(){},
hy:function hy(a){this.a=a},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hC:function hC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hD:function hD(a){this.a=a},
bB:function bB(a){this.a=a},
m:function m(){},
cu:function cu(a){this.a=a},
ff:function ff(a){this.a=a},
fe:function fe(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(){},
i8:function i8(){},
i9:function i9(){},
ie:function ie(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ig:function ig(){},
ic:function ic(){},
c7:function c7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ct:function ct(){},
jm:function jm(){},
jv:function jv(){},
i7:function i7(a,b){this.a=a
this.b=b},
dp:function dp(a){this.a=a},
ih:function ih(a){this.a=a},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cY:function cY(){},
cZ:function cZ(){},
d1:function d1(){},
d2:function d2(){},
d4:function d4(){},
d5:function d5(){},
d8:function d8(){},
d9:function d9(){},
bJ:function bJ(){},
bK:function bK(){},
da:function da(){},
db:function db(){},
df:function df(){},
di:function di(){},
dj:function dj(){},
bL:function bL(){},
bM:function bM(){},
dk:function dk(){},
dl:function dl(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){}},B={
nH:function(a){var t,s
t=document
s=W.aB
W.a0(t,"keydown",new B.iO(),!1,s)
W.a0(t,"keyup",new B.iP(),!1,s)
if(!$.nI)W.a0(t,"mousemove",new B.iQ(),!1,W.L)
s=W.L
W.a0(t,"mousedown",new B.iR(),!1,s)
W.a0(t,"mouseup",new B.iS(),!1,s)},
mE:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$ir()
r=$.$get$bS()
q=new T.aa(new Float32Array(16))
q.ap()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fj(a,b,c,0,new T.y(t),-0.02,s,r,q,new T.y(p),new T.y(o),new T.y(n),new T.y(new Float32Array(3)),"camera:orbit",!1,!0)
t.dl(a,b,c,d)
return t},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
iS:function iS(){},
fj:function fj(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fk:function fk(a){this.a=a},
fl:function fl(a){this.a=a},
fm:function fm(){},
fn:function fn(a){this.a=a}},G={
mU:function(a){var t,s,r
t=H.B(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ak(t,"\n")},
kW:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.c9(a,b)
t.bh(a,s,c)
t.c5(a,s)
r=t.bd(a,s,35713)
if(r!=null&&!r){q=t.bc(a,s)
P.a5("E:Compilation failed:")
P.a5("E:"+G.mU(c))
P.a5("E:Failure:")
P.a5(C.h.W("E:",q))
throw H.c(q)}return s},
kk:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])
b[t+2]=J.jU(a[s])}return b},
mn:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])}return b},
mo:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j2(a[s])
b[t+1]=J.j3(a[s])
b[t+2]=J.jU(a[s])
b[t+3]=J.lP(a[s])}return b},
mm:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aQ(a[s],0)
b[t+1]=J.aQ(a[s],1)
b[t+2]=J.aQ(a[s],2)
b[t+3]=J.aQ(a[s],3)}return b},
n_:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gC(t),s=s.gv(s),r=b.x,q=[[P.h,P.x]],p=[P.W],o=[T.an],n=[T.y],m=[T.N];s.p();){l=s.gq(s)
if(!r.E(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.lb>0)H.be("I: "+l)
continue}k=t.h(0,l)
switch($.$get$Q().h(0,l).a){case"vec2":b.a8(l,G.mn(H.dC(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.a8(l,G.kk(H.dC(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.a8(l,G.mo(H.dC(k,"$ish",o,"$ash"),null),4)
break
case"float":b.a8(l,new Float32Array(H.ij(H.dC(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.a8(l,G.mm(H.dC(k,"$ish",q,"$ash"),null),4)
break
default:if(H.V(!1))H.a2("unknown type for "+H.e(l)+" ["+J.lN(k[0]).k(0)+"] ["+new H.am(H.ix(k),null).k(0)+"] "+H.e(k))}}},
kl:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.F()
q=J.lC(t.a)
p=new G.f2(t,q,4,r,s,null,0,-1,null,null,P.F(),"meshdata:"+a,!1,!0)
o=G.kk(c.d,null)
r.i(0,"aPosition",J.j0(t.a))
p.ch=o
p.bq("aPosition",o,3)
n=$.$get$Q().h(0,"aPosition")
if(n==null)H.D("Unknown canonical aPosition")
H.b(s.E(0,"aPosition"))
m=s.h(0,"aPosition")
J.dE(t.a,q)
t.cj(0,m,0)
t.cM(0,r.h(0,"aPosition"),m,n.br(),5126,!1,0,0)
s=c.di()
p.y=J.j0(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saR(new Uint8Array(H.ij(s)))
p.Q=5121}else if(r<196608){p.saR(new Uint16Array(H.ij(s)))
p.Q=5123}else{p.saR(new Uint32Array(H.ij(s)))
p.Q=5125}J.dE(t.a,q)
s=p.y
r=p.cx
q=J.q(r)
H.b(!!q.$iskT||!!q.$iskU||!!q.$iskV)
J.iY(t.a,34963,s)
J.jR(t.a,34963,r,35048)
G.n_(c,p)
return p},
kD:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aD(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.lA(b.a)
o=G.kW(b.a,35633,s)
J.jQ(b.a,p,o)
n=G.kW(b.a,35632,r)
J.jQ(b.a,p,n)
if(q.length>0)J.m1(b.a,p,q,35980)
J.lU(b.a,p)
if(!J.lT(b.a,p,35714))H.D(J.lS(b.a,p))
t=new G.fz(b,c,d,p,P.jj(c.c,null),P.F(),P.F(),t,null,a,!1,!0)
t.dm(a,b,c,d)
return t},
kS:function(a,b,c,d,e,f){var t=new G.ha(c,d,e,b,J.lB(a.a),3553,a,f)
t.ds(a,b,c,d,e,f)
return t},
f5:function f5(){},
cM:function cM(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dN:function dN(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
c8:function c8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
et:function et(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ca:function ca(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
f2:function f2(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fp:function fp(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fz:function fz(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fH:function fH(){},
h_:function h_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bz:function bz(){},
ha:function ha(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={fL:function fL(){},fM:function fM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mD:function(a){var t,s
t=new P.I(0,$.v,null,[null])
s=new XMLHttpRequest()
C.w.eS(s,"GET",a)
W.a0(s,"loadend",new D.eV(new P.cP(t,[null]),s),!1,W.nV)
C.w.F(s,"")
return t},
eV:function eV(a,b){this.a=a
this.b=b}},A={
iy:function(a){var t,s
t=C.X.eB(a,0,new A.iz())
s=536870911&t+(C.b.cO(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iz:function iz(){}},T={aa:function aa(a){this.a=a},N:function N(a){this.a=a},y:function y(a){this.a=a},an:function an(a){this.a=a}},S={
nB:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t={}
s=document
r=new R.fM(0,0,null,null,null,null)
r.dq(C.m.cS(s,"stats"),"blue","gray")
q=C.m.cq(s,"#webgl-canvas")
p=q.clientWidth
o=q.clientHeight
q.width=p
q.height=o
n=new G.dQ(null,q)
s=(q&&C.J).cR(q,"webgl2",P.aC(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
n.a=s
if(s==null)H.D(P.c5('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+H.e(J.lQ(s))
if($.lb>0)P.a5("I: "+m)
J.lx(s,0,0,0,1)
J.dF(s,2929)
l=B.mE(15,-45,0.3,q)
s=new T.aa(new Float32Array(16))
s.ap()
m=new T.aa(new Float32Array(16))
m.ap()
k=new G.fp(l,50,1,0.1,2520,s,m,new T.aa(new Float32Array(16)),P.F(),"perspective",!1,!0)
k.bt()
k.de(p,o)
s=$.$get$kG()
m=G.kS(n,"frame::color",p,o,32856,s)
s=G.kS(n,"frame::depth",p,o,33190,s)
j=new G.c8(n,null,m,s,null)
j.dh(n,m,s,null,!1)
i=new G.b3("Plane2GreyV",null,[],[],[],[],0,P.F())
i.bl(["aPosition","aNormal"])
i.aq(["vColor"])
i.bo(["uPerspectiveViewMatrix","uModelMatrix"])
i.aK(["float d = sin(dot( aPosition, aNormal)) / 2.0 + 0.5;","vColor = vec3(d,d,d);","gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
h=new G.b3("Plane2GreyF",null,[],[],[],[],0,P.F())
h.aq(["vColor"])
h.aK(["oFragColor = vec4(vColor, 1.0);"])
g=[i,h]
f=G.kD("grey",n,g[0],g[1])
h=new G.b3("SobelV",null,[],[],[],[],0,P.F())
h.bl(["aPosition","aTexUV"])
h.aq(["vTexUV"])
h.aK(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
i=new G.b3("SobelF",null,[],[],[],[],0,P.F())
i.aq(["vTexUV"])
i.bo(["uTexture","uCanvasSize"])
H.b(i.b==null)
i.b=i.bu(!1,["  float lum(vec4 c) {\n    return dot(c.xyz, vec3(0.3, 0.59, 0.11));\n  }\n\n\n  float sobel() {\n      vec2 imageIncrement = vec2(1.0/uCanvasSize.x,1.0/uCanvasSize.y);\n      float t00 = lum(texture(uTexture, vTexUV + imageIncrement * vec2(-1, -1)));\n      float t10 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 0, -1)));\n      float t20 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 1, -1)));\n      float t01 = lum(texture(uTexture, vTexUV + imageIncrement * vec2(-1,  0)));\n      float t21 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 1,  0)));\n      float t02 = lum(texture(uTexture, vTexUV + imageIncrement * vec2(-1,  1)));\n      float t12 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 0,  1)));\n      float t22 = lum(texture(uTexture, vTexUV + imageIncrement * vec2( 1,  1)));\n      vec2 grad;\n      grad.x = t00 + 2.0 * t01 + t02 - t20 - 2.0 * t21 - t22;\n      grad.y = t00 + 2.0 * t10 + t20 - t02 - 2.0 * t12 - t22;\n      return length(grad);\n  } \n\n  void main(void) {\n      float len = sobel();\n      oFragColor = vec4(len, len, len, 1.0); //\n  }\n  "],null)
e=[h,i]
d=G.kD("ssao",n,e[0],e[1])
c=new G.cM(P.F(),"plain",!1,!0)
i=C.b.W(0,p)
h=C.b.W(0,o)
b=new T.N(new Float32Array(2))
b.a6(i,h)
c.R("uCanvasSize",b)
c.R("uDepthMap",s)
c.R("uTexture",m)
s=new T.y(new Float32Array(3))
s.P(-1,-1,0)
m=new T.y(new Float32Array(3))
m.P(1,-1,0)
i=new T.y(new Float32Array(3))
i.P(1,1,0)
h=new T.y(new Float32Array(3))
h.P(-1,1,0)
b=new T.N(new Float32Array(2))
b.a6(0,0)
a=new T.N(new Float32Array(2))
a.a6(1,0)
a0=new T.N(new Float32Array(2))
a0.a6(1,1)
a1=new T.N(new Float32Array(2))
a1.a6(0,1)
a2=new T.y(new Float32Array(3))
a2.P(0,0,1)
a3=new G.ca(!1,[],[],[],P.F())
a3.ar("aTexUV")
a3.bp([s,m,i,h])
a3.bm("aTexUV",[b,a,a0,a1])
a3.ar("aNormal")
a3.bn("aNormal",[a2,a2,a2,a2])
a4=G.kl("quad",d,a3)
t.a=null
a5=new G.f0(P.F(),"mat",!1,!0)
a5.R("cDepthTest",!0)
a5.R("cDepthWrite",!0)
a5.R("cBlendEquation",$.$get$k2())
a5.R("cStencilFunc",$.$get$kE())
s=new Float32Array(16)
m=new T.aa(s)
m.ap()
a6=Math.cos(1.5707963267948966)
a7=Math.sin(1.5707963267948966)
i=s[4]
h=s[8]
b=s[5]
a=s[9]
a0=s[6]
a1=s[10]
a8=s[7]
a9=s[11]
b0=-a7
s[4]=i*a6+h*a7
s[5]=b*a6+a*a7
s[6]=a0*a6+a1*a7
s[7]=a8*a6+a9*a7
s[8]=i*b0+h*a6
s[9]=b*b0+a*a6
s[10]=a0*b0+a1*a6
s[11]=a8*b0+a9*a6
a5.R("uModelMatrix",m)
t.b=0
P.mq([D.mD("../ct_logo.obj")],null,!1).b6(new S.iL(t,f,new S.iK(t,l,j,p,o,f,k,a5,new G.c8(n,null,null,null,null),d,a4,c,r)))},
iK:function iK(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
iL:function iL(a,b,c){this.a=a
this.b=b
this.c=c}},Y={
mr:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.ca(!1,[],[],[],P.F())
t.ar("aTexUV")
t.ar("aNormal")
s=P.F()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.kC("\\s+",!0,!1)
l=P.kC("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.H)(r),++j){i=r[j]
i.toString
h=H.nK(i,m," ")
g=H.nM(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
h=f[0]
if(J.z(h,"g"))s.i(0,f[1],q.length)
else if(J.z(h,"v")){h=H.aF(f[1],null)
e=H.aF(f[2],null)
d=H.aF(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.y(c))}else if(J.z(h,"vt")){h=H.aF(f[1],null)
e=H.aF(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.N(d))}else if(J.z(h,"vn")){h=H.aF(f[1],null)
e=H.aF(f[2],null)
d=H.aF(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.y(c))}else if(J.z(h,"f")){h=f.length
if(h!==4&&h!==5){H.be("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.lX(f[a1],"/")
H.b(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.jo(a2[0],null,null)-1
a4=J.z(a2[1],"")?-1:H.jo(a2[1],null,null)-1
a5=J.z(a2[2],"")?-1:H.jo(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.y(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.be("problem uv "+a1+" "+a4)
C.a.l(a0,new T.N(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.be("problem normals "+a1+" "+a5)
C.a.l(a,new T.y(new Float32Array(3)))}}if(h===4)t.dd(b)
else t.bp(b)
t.bn("aNormal",a)
t.bm("aTexUV",a0)}}P.a5("loaded ("+P.kg(0,0,0,Date.now()-new P.au(n,!1).a,0,0).k(0)+") "+t.k(0))
return t}}
var v=[C,H,J,P,W,B,G,R,D,A,T,S,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.je.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aE(a)},
k:function(a){return"Instance of '"+H.bt(a)+"'"},
gA:function(a){return new H.am(H.ix(a),null)}}
J.eM.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.ar},
$isag:1}
J.ch.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.al},
$isM:1}
J.bo.prototype={
gu:function(a){return 0},
gA:function(a){return C.ak},
k:function(a){return String(a)},
$iskp:1}
J.fq.prototype={}
J.aJ.prototype={}
J.aA.prototype={
k:function(a){var t=a[$.$get$ka()]
return t==null?this.d9(a):J.bi(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjc:1}
J.ax.prototype={
l:function(a,b){if(!!a.fixed$length)H.D(P.t("add"))
a.push(b)},
K:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.D(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.H)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.D(P.aj(a)))
a.push(q)}},
cp:function(a,b){return new H.bp(a,b,[H.ap(a,0),null])},
ak:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
geA:function(a){if(a.length>0)return a[0]
throw H.c(H.eL())},
gb0:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eL())},
bg:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.D(P.t("setRange"))
P.kB(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.aG(e,0,null,"skipCount",null))
s=J.R(d)
if(e+t>s.gj(d))throw H.c(H.mz())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bU:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.aj(a))}return!1},
d3:function(a,b){if(!!a.immutable$list)H.D(P.t("sort"))
H.mR(a,P.nm())},
aF:function(a){return this.d3(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.z(a[t],b))return!0
return!1},
k:function(a){return P.eK(a,"[","]")},
gv:function(a){return new J.dK(a,a.length,0,null,[H.ap(a,0)])},
gu:function(a){return H.aE(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.D(P.t("set length"))
if(b<0)throw H.c(P.aG(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ao(a,b))
if(b>=a.length||b<0)throw H.c(H.ao(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.D(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.ao(a,b))
if(b>=a.length||b<0)throw H.c(H.ao(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isk:1,
$ish:1}
J.jd.prototype={}
J.dK.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.H(t))
r=this.c
if(r>=s){this.sbv(null)
return!1}this.sbv(t[r]);++this.c
return!0},
sbv:function(a){this.d=a}}
J.aY.prototype={
O:function(a,b){var t
if(typeof b!=="number")throw H.c(H.J(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gay(b)
if(this.gay(a)===t)return 0
if(this.gay(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gay:function(a){return a===0?1/a<0:a<0},
eg:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
eh:function(a,b,c){if(this.O(b,c)>0)throw H.c(H.J(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
f4:function(a,b){var t
if(b>20)throw H.c(P.aG(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gay(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
W:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a+b},
a7:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a-b},
cP:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a*b},
aI:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bQ(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bQ(a,b)},
bQ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aW:function(a,b){var t
if(a>0)t=this.e3(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e3:function(a,b){return b>31?0:a>>>b},
cO:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return(a&b)>>>0},
dc:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return(a^b)>>>0},
aE:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a<b},
aD:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a>b},
cQ:function(a,b){if(typeof b!=="number")throw H.c(H.J(b))
return a>=b},
gA:function(a){return C.au},
$isE:1,
$asE:function(){return[P.a4]},
$isW:1,
$isa4:1}
J.cg.prototype={
gA:function(a){return C.at},
$isx:1}
J.cf.prototype={
gA:function(a){return C.as}}
J.az.prototype={
c4:function(a,b){if(b<0)throw H.c(H.ao(a,b))
if(b>=a.length)H.D(H.ao(a,b))
return a.charCodeAt(b)},
a9:function(a,b){if(b>=a.length)throw H.c(H.ao(a,b))
return a.charCodeAt(b)},
W:function(a,b){if(typeof b!=="string")throw H.c(P.k1(b,null,null))
return a+b},
d4:function(a,b){var t=H.B(a.split(b),[P.n])
return t},
d5:function(a,b,c){var t
if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bi:function(a,b){return this.d5(a,b,0)},
aG:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fv(b,null,null))
if(b>c)throw H.c(P.fv(b,null,null))
if(c>a.length)throw H.c(P.fv(c,null,null))
return a.substring(b,c)},
d6:function(a,b){return this.aG(a,b,null)},
f3:function(a){return a.toLowerCase()},
f6:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a9(t,0)===133){r=J.mB(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.c4(t,q)===133?J.mC(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ek:function(a,b,c){if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
return H.nJ(a,b,c)},
O:function(a,b){var t
if(typeof b!=="string")throw H.c(H.J(b))
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
gA:function(a){return C.am},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.ao(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isE:1,
$asE:function(){return[P.n]},
$isn:1}
H.k.prototype={}
H.aZ.prototype={
gv:function(a){return new H.cj(this,this.gj(this),0,null,[H.a3(this,"aZ",0)])},
aB:function(a,b){return this.d8(0,b)},
f2:function(a,b){var t,s
t=H.B([],[H.a3(this,"aZ",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f1:function(a){return this.f2(a,!0)}}
H.cj.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.R(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.aj(t))
q=this.c
if(q>=r){this.sab(null)
return!1}this.sab(s.t(t,q));++this.c
return!0},
sab:function(a){this.d=a}}
H.cl.prototype={
gv:function(a){return new H.eZ(null,J.aR(this.a),this.b,this.$ti)},
gj:function(a){return J.bh(this.a)},
$asS:function(a,b){return[b]}}
H.e8.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.eZ.prototype={
p:function(){var t=this.b
if(t.p()){this.sab(this.c.$1(t.gq(t)))
return!0}this.sab(null)
return!1},
gq:function(a){return this.a},
sab:function(a){this.a=a},
$asce:function(a,b){return[b]}}
H.bp.prototype={
gj:function(a){return J.bh(this.a)},
t:function(a,b){return this.b.$1(J.lI(this.a,b))},
$ask:function(a,b){return[b]},
$asaZ:function(a,b){return[b]},
$asS:function(a,b){return[b]}}
H.cN.prototype={
gv:function(a){return new H.hj(J.aR(this.a),this.b,this.$ti)}}
H.hj.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aX.prototype={}
H.iT.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iU.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.i_.prototype={
seL:function(a){this.z=a},
seO:function(a){this.ch=a}}
H.b7.prototype={
dB:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dH(s,t)},
bT:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aY()},
eW:function(a){var t,s,r,q,p
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
if(q===r.c)r.bJ();++r.d}this.y=!1}this.aY()},
e7:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eV:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(P.t("removeRange"))
P.kB(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d0:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eF:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.F(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jk(null,null)
this.cx=t}t.S(0,new H.hU(a,c))},
eE:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.az()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jk(null,null)
this.cx=t}t.S(0,this.geM())},
eG:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a5(a)
if(b!=null)P.a5(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bi(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bC(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.F(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.K(o)
p=H.ah(o)
this.eG(q,p)
if(this.db){this.az()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nh(r)
u.globalState.d=H.jJ(t,"$isb7")
if(t!=null)$=t.geK()
if(this.cx!=null)for(;n=this.cx,!n.gaj(n);)this.cx.cr().$0()}return s},
co:function(a){return this.b.h(0,a)},
dH:function(a,b){var t=this.b
if(t.E(0,a))throw H.c(P.c5("Registry: ports must be registered only once."))
t.i(0,a,b)},
aY:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.az()},
az:function(){var t,s,r
t=this.cx
if(t!=null)t.U(0)
for(t=this.b,s=t.gcK(t),s=s.gv(s);s.p();)s.gq(s).dJ()
t.U(0)
this.c.U(0)
u.globalState.z.al(0,this.a)
this.dx.U(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].F(0,t[r+1])
this.ch=null}},
geK:function(){return this.d},
gel:function(){return this.e}}
H.hU.prototype={
$0:function(){this.a.F(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hz.prototype={
er:function(){var t=this.a
if(t.b===t.c)return
return t.cr()},
ct:function(){var t,s,r
t=this.er()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaj(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.c5("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaj(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aC(["command","close"])
r=new H.a1(!0,P.b8(null,P.x)).J(r)
s.toString
self.postMessage(r)}return!1}t.eT()
return!0},
bO:function(){if(self.window!=null)new H.hA(this).$0()
else for(;this.ct(););},
am:function(){var t,s,r,q,p
if(!u.globalState.x)this.bO()
else try{this.bO()}catch(r){t=H.K(r)
s=H.ah(r)
q=u.globalState.Q
p=P.aC(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a1(!0,P.b8(null,P.x)).J(p)
q.toString
self.postMessage(p)}}}
H.hA.prototype={
$0:function(){if(!this.a.ct())return
P.mT(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aM.prototype={
eT:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.hZ.prototype={}
H.eI.prototype={
$0:function(){H.mv(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eJ.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bd(s,{func:1,args:[P.M,P.M]}))s.$2(this.e,this.d)
else if(H.bd(s,{func:1,args:[P.M]}))s.$1(this.e)
else s.$0()}t.aY()},
$S:function(){return{func:1,v:true}}}
H.hu.prototype={}
H.b9.prototype={
F:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n4(b)
if(t.gel()===s){s=J.R(r)
switch(s.h(r,0)){case"pause":t.bT(s.h(r,1),s.h(r,2))
break
case"resume":t.eW(s.h(r,1))
break
case"add-ondone":t.e7(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eV(s.h(r,1))
break
case"set-errors-fatal":t.d0(s.h(r,1),s.h(r,2))
break
case"ping":t.eF(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eE(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.al(0,s)
break}return}u.globalState.f.a.S(0,new H.aM(t,new H.i1(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b9){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.i1.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dF(0,this.b)},
$S:function(){return{func:1}}}
H.bN.prototype={
F:function(a,b){var t,s,r
t=P.aC(["command","message","port",this,"msg",b])
s=new H.a1(!0,P.b8(null,P.x)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bN){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.dc((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cx.prototype={
dJ:function(){this.c=!0
this.b=null},
dF:function(a,b){if(this.c)return
this.b.$1(b)},
$ismM:1}
H.h1.prototype={
dr:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.aM(s,new H.h2(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.it()
this.c=self.setTimeout(H.aO(new H.h3(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.h2.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h3.prototype={
$0:function(){var t=this.a
t.c=null
H.iJ()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gu:function(a){var t=this.a
t=C.b.aW(t,0)^C.b.I(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ar){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a1.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.q(a)
if(!!t.$isbr)return["buffer",a]
if(!!t.$isb1)return["typed",a]
if(!!t.$iso)return this.cX(a)
if(!!t.$isms){r=this.gcU()
q=t.gC(a)
q=H.jl(q,r,H.a3(q,"S",0),null)
q=P.kt(q,!0,H.a3(q,"S",0))
t=t.gcK(a)
t=H.jl(t,r,H.a3(t,"S",0),null)
return["map",q,P.kt(t,!0,H.a3(t,"S",0))]}if(!!t.$iskp)return this.cY(a)
if(!!t.$isa)this.cI(a)
if(!!t.$ismM)this.an(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb9)return this.cZ(a)
if(!!t.$isbN)return this.d_(a)
if(!!t.$isat){p=a.$static_name
if(p==null)this.an(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.C))this.cI(a)
return["dart",u.classIdExtractor(a),this.cW(u.classFieldsExtractor(a))]},
an:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cI:function(a){return this.an(a,null)},
cX:function(a){var t
H.b(typeof a!=="string")
t=this.cV(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.an(a,"Can't serialize indexable: ")},
cV:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
cW:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
cY:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.an(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
d_:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cZ:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aL.prototype={
V:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.j6("Bad serialized message: "+H.e(a)))
switch(C.a.geA(a)){case"ref":H.b(J.z(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.z(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.z(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.z(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.ay(H.B(this.ae(t),[null]))
case"extendable":H.b(J.z(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.B(this.ae(t),[null])
case"mutable":H.b(J.z(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.b(J.z(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.ay(H.B(this.ae(t),[null]))
case"map":return this.ev(a)
case"sendport":return this.ew(a)
case"raw sendport":H.b(J.z(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eu(a)
case"function":H.b(J.z(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.z(a[0],"capability"))
return new H.ar(a[1])
case"dart":H.b(J.z(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ae(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.V(a[t]))
return a},
ev:function(a){var t,s,r,q,p
H.b(J.z(a[0],"map"))
t=a[1]
s=a[2]
r=P.F()
C.a.l(this.b,r)
t=J.lV(t,this.ges()).f1(0)
for(q=J.R(s),p=0;p<t.length;++p)r.i(0,t[p],this.V(q.h(s,p)))
return r},
ew:function(a){var t,s,r,q,p,o,n
H.b(J.z(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.co(r)
if(o==null)return
n=new H.b9(o,s)}else n=new H.bN(t,r,s)
C.a.l(this.b,n)
return n},
eu:function(a){var t,s,r,q,p,o
H.b(J.z(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.R(t),p=J.R(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.V(p.h(s,o))
return r}}
H.fy.prototype={}
H.h7.prototype={
M:function(a){var t,s,r
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
H.fg.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eP.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.hc.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iV.prototype={
$1:function(a){if(!!J.q(a).$isaW)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.de.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb4:1}
H.iE.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iG.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.at.prototype={
k:function(a){return"Closure '"+H.bt(this).trim()+"'"},
$isjc:1,
gf8:function(){return this},
$D:null}
H.fX.prototype={}
H.fK.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bj.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bj))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aE(this.a)
else s=typeof t!=="object"?J.bg(t):H.aE(t)
return(s^H.aE(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bt(t)+"'")}}
H.h9.prototype={
k:function(a){return this.a}}
H.dP.prototype={
k:function(a){return this.a}}
H.fC.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.ho.prototype={
k:function(a){return C.h.W("Assertion failed: ",P.c4(this.a))}}
H.am.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.bg(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.am){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a9.prototype={
gj:function(a){return this.a},
gaj:function(a){return this.a===0},
gC:function(a){return new H.eS(this,[H.ap(this,0)])},
gcK:function(a){return H.jl(this.gC(this),new H.eO(this),H.ap(this,0),H.ap(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bG(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bG(s,b)}else return this.eH(b)},
eH:function(a){var t=this.d
if(t==null)return!1
return this.ai(this.au(t,this.ah(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ac(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ac(r,b)
return s==null?null:s.b}else return this.eI(b)},
eI:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.au(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aT()
this.b=t}this.bx(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aT()
this.c=s}this.bx(s,b,c)}else{r=this.d
if(r==null){r=this.aT()
this.d=r}q=this.ah(b)
p=this.au(r,q)
if(p==null)this.aV(r,q,[this.aU(b,c)])
else{o=this.ai(p,b)
if(o>=0)p[o].b=c
else p.push(this.aU(b,c))}}},
al:function(a,b){if(typeof b==="string")return this.bN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bN(this.c,b)
else return this.eJ(b)},
eJ:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.au(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bR(q)
return q.b},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aS()}},
ag:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.aj(this))
t=t.c}},
bx:function(a,b,c){var t=this.ac(a,b)
if(t==null)this.aV(a,b,this.aU(b,c))
else t.b=c},
bN:function(a,b){var t
if(a==null)return
t=this.ac(a,b)
if(t==null)return
this.bR(t)
this.bH(a,b)
return t.b},
aS:function(){this.r=this.r+1&67108863},
aU:function(a,b){var t,s
t=new H.eR(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aS()
return t},
bR:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aS()},
ah:function(a){return J.bg(a)&0x3ffffff},
ai:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
k:function(a){return P.ku(this)},
ac:function(a,b){return a[b]},
au:function(a,b){return a[b]},
aV:function(a,b,c){H.b(c!=null)
a[b]=c},
bH:function(a,b){delete a[b]},
bG:function(a,b){return this.ac(a,b)!=null},
aT:function(){var t=Object.create(null)
this.aV(t,"<non-identifier-key>",t)
this.bH(t,"<non-identifier-key>")
return t},
$isms:1}
H.eO.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eR.prototype={}
H.eS.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eT(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eT.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aj(t))
else{t=this.c
if(t==null){this.sbw(null)
return!1}else{this.sbw(t.a)
this.c=this.c.c
return!0}}},
sbw:function(a){this.d=a}}
H.iA.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.iC.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.eN.prototype={
k:function(a){return"RegExp/"+this.a+"/"},
gbL:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.kr(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dQ:function(a,b){var t,s
t=this.gbL()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.n3(this,s)}}
H.i0.prototype={
dD:function(a,b){var t,s
t=this.b
s=t.input
H.b(typeof s==="string")
t=t.index
H.b(typeof t==="number"&&Math.floor(t)===t)},
h:function(a,b){return this.b[b]}}
H.br.prototype={
gA:function(a){return C.ad},
$isbr:1}
H.b1.prototype={$isb1:1}
H.f6.prototype={
gA:function(a){return C.ae}}
H.co.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.cp.prototype={
h:function(a,b){H.af(b,a,a.length)
return a[b]},
i:function(a,b,c){H.af(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.W]},
$asaX:function(){return[P.W]},
$asl:function(){return[P.W]},
$ish:1,
$ash:function(){return[P.W]}}
H.cq.prototype={
i:function(a,b,c){H.af(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.x]},
$asaX:function(){return[P.x]},
$asl:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]}}
H.cn.prototype={
gA:function(a){return C.af},
$isey:1}
H.f7.prototype={
gA:function(a){return C.ag}}
H.f8.prototype={
gA:function(a){return C.ah},
h:function(a,b){H.af(b,a,a.length)
return a[b]}}
H.f9.prototype={
gA:function(a){return C.ai},
h:function(a,b){H.af(b,a,a.length)
return a[b]},
$iskm:1}
H.fa.prototype={
gA:function(a){return C.aj},
h:function(a,b){H.af(b,a,a.length)
return a[b]}}
H.fb.prototype={
gA:function(a){return C.an},
h:function(a,b){H.af(b,a,a.length)
return a[b]},
$iskT:1}
H.fc.prototype={
gA:function(a){return C.ao},
h:function(a,b){H.af(b,a,a.length)
return a[b]},
$iskU:1}
H.cr.prototype={
gA:function(a){return C.ap},
gj:function(a){return a.length},
h:function(a,b){H.af(b,a,a.length)
return a[b]}}
H.fd.prototype={
gA:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){H.af(b,a,a.length)
return a[b]},
$iskV:1}
H.bE.prototype={}
H.bF.prototype={}
H.bG.prototype={}
H.bH.prototype={}
P.hq.prototype={
$1:function(a){var t,s
H.iJ()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hp.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.it()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hr.prototype={
$0:function(){H.iJ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hs.prototype={
$0:function(){H.iJ()
this.a.$0()},
$S:function(){return{func:1}}}
P.Z.prototype={}
P.eD.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.H(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.H(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eC.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bF(r)}else if(t.b===0&&!this.e)this.c.H(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.j8.prototype={}
P.hv.prototype={
ej:function(a,b){if(a==null)a=new P.b2()
if(this.a.a!==0)throw H.c(P.cD("Future already completed"))
$.v.toString
this.H(a,b)},
ei:function(a){return this.ej(a,null)}}
P.cP.prototype={
ax:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cD("Future already completed"))
t.bz(b)},
H:function(a,b){this.a.bA(a,b)}}
P.id.prototype={
ax:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cD("Future already completed"))
t.aO(b)},
H:function(a,b){this.a.H(a,b)}}
P.cX.prototype={
eP:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b5(this.d,a.a)},
eD:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bd(s,{func:1,args:[P.C,P.b4]}))return t.eX(s,a.a,a.b)
else return t.b5(s,a.a)}}
P.I.prototype={
b7:function(a,b){var t,s,r
t=$.v
if(t!==C.d){t.toString
if(b!=null)b=P.n9(b,t)}s=new P.I(0,t,null,[null])
r=b==null?1:3
this.by(new P.cX(null,s,r,a,b,[H.ap(this,0),null]))
return s},
b6:function(a){return this.b7(a,null)},
aL:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
by:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jJ(this.c,"$iscX")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.by(a)
return}this.aL(t)}H.b(this.a>=4)
t=this.b
t.toString
P.bb(null,null,t,new P.hF(this,a))}},
bM:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bM(a)
return}this.aL(s)}H.b(this.a>=4)
t.a=this.aw(a)
s=this.b
s.toString
P.bb(null,null,s,new P.hN(t,this))}},
av:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aw(t)},
aw:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aO:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.bR(a,"$isZ",t,"$asZ")
if(s){t=H.bR(a,"$isI",t,null)
if(t)P.hI(a,this)
else P.kX(a,this)}else{r=this.av()
H.b(this.a<4)
this.a=4
this.c=a
P.b6(this,r)}},
bF:function(a){var t
H.b(this.a<4)
H.b(!J.q(a).$isZ)
t=this.av()
H.b(this.a<4)
this.a=4
this.c=a
P.b6(this,t)},
H:function(a,b){var t
H.b(this.a<4)
t=this.av()
H.b(this.a<4)
this.a=8
this.c=new P.aS(a,b)
P.b6(this,t)},
dL:function(a){return this.H(a,null)},
bz:function(a){var t
H.b(this.a<4)
t=H.bR(a,"$isZ",this.$ti,"$asZ")
if(t){this.dI(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bb(null,null,t,new P.hH(this,a))},
dI:function(a){var t=H.bR(a,"$isI",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bb(null,null,t,new P.hM(this,a))}else P.hI(a,this)
return}P.kX(a,this)},
bA:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.bb(null,null,t,new P.hG(this,a,b))},
$isZ:1,
gaX:function(){return this.a},
ge0:function(){return this.c}}
P.hF.prototype={
$0:function(){P.b6(this.a,this.b)},
$S:function(){return{func:1}}}
P.hN.prototype={
$0:function(){P.b6(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hJ.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aO(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hK.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.H(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hL.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.hH.prototype={
$0:function(){this.a.bF(this.b)},
$S:function(){return{func:1}}}
P.hM.prototype={
$0:function(){P.hI(this.b,this.a)},
$S:function(){return{func:1}}}
P.hG.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cs(q.d)}catch(n){s=H.K(n)
r=H.ah(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aS(s,r)
p.a=!0
return}if(!!J.q(t).$isZ){if(t instanceof P.I&&t.gaX()>=4){if(t.gaX()===8){q=t
H.b(q.gaX()===8)
p=this.b
p.b=q.ge0()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.b6(new P.hR(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hR.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hP.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b5(r.d,this.c)}catch(q){t=H.K(q)
s=H.ah(q)
r=this.a
r.b=new P.aS(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hO.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eP(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eD(t)
p.a=!1}}catch(o){s=H.K(o)
r=H.ah(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aS(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cO.prototype={}
P.fP.prototype={
gj:function(a){var t,s
t={}
s=new P.I(0,$.v,null,[P.x])
t.a=0
this.eN(new P.fR(t),!0,new P.fS(t,s),s.gdK())
return s}}
P.fR.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fS.prototype={
$0:function(){this.b.aO(this.a.a)},
$S:function(){return{func:1}}}
P.fQ.prototype={}
P.jq.prototype={}
P.aS.prototype={
k:function(a){return H.e(this.a)},
$isaW:1}
P.ii.prototype={}
P.il.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b2()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.i3.prototype={
eY:function(a){var t,s,r
try{if(C.d===$.v){a.$0()
return}P.l2(null,null,this,a)}catch(r){t=H.K(r)
s=H.ah(r)
P.ik(null,null,this,t,s)}},
eZ:function(a,b){var t,s,r
try{if(C.d===$.v){a.$1(b)
return}P.l3(null,null,this,a,b)}catch(r){t=H.K(r)
s=H.ah(r)
P.ik(null,null,this,t,s)}},
ed:function(a){return new P.i5(this,a)},
aZ:function(a){return new P.i4(this,a)},
ee:function(a){return new P.i6(this,a)},
h:function(a,b){return},
cs:function(a){if($.v===C.d)return a.$0()
return P.l2(null,null,this,a)},
b5:function(a,b){if($.v===C.d)return a.$1(b)
return P.l3(null,null,this,a,b)},
eX:function(a,b,c){if($.v===C.d)return a.$2(b,c)
return P.na(null,null,this,a,b,c)}}
P.i5.prototype={
$0:function(){return this.a.cs(this.b)},
$S:function(){return{func:1}}}
P.i4.prototype={
$0:function(){return this.a.eY(this.b)},
$S:function(){return{func:1}}}
P.i6.prototype={
$1:function(a){return this.a.eZ(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hX.prototype={
ah:function(a){return H.nD(a)&0x3ffffff},
ai:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hV.prototype={
gv:function(a){var t=new P.bC(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dM(b)},
dM:function(a){var t=this.d
if(t==null)return!1
return this.at(t[this.as(a)],a)>=0},
co:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dV(a)},
dV:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return
return J.aQ(s,r).gdO()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jB()
this.b=t}return this.bC(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jB()
this.c=s}return this.bC(s,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jB()
this.d=t}s=this.as(b)
r=t[s]
if(r==null){q=[this.aN(b)]
H.b(q!=null)
t[s]=q}else{if(this.at(r,b)>=0)return!1
r.push(this.aN(b))}return!0},
al:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bD(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bD(this.c,b)
else return this.dW(0,b)},
dW:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.as(b)]
r=this.at(s,b)
if(r<0)return!1
this.bE(s.splice(r,1)[0])
return!0},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aM()}},
bC:function(a,b){var t
if(a[b]!=null)return!1
t=this.aN(b)
H.b(!0)
a[b]=t
return!0},
bD:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bE(t)
delete a[b]
return!0},
aM:function(){this.r=this.r+1&67108863},
aN:function(a){var t,s
t=new P.hW(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aM()
return t},
bE:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aM()},
as:function(a){return J.bg(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1}}
P.hW.prototype={
gdO:function(){return this.a}}
P.bC.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aj(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.hT.prototype={}
P.ji.prototype={$isk:1}
P.ci.prototype={$isk:1,$ish:1}
P.l.prototype={
gv:function(a){return new H.cj(a,this.gj(a),0,null,[H.a3(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
cp:function(a,b){return new H.bp(a,b,[H.a3(a,"l",0),null])},
eB:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.aj(a))}return s},
k:function(a){return P.eK(a,"[","]")}}
P.ck.prototype={}
P.eY.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b0.prototype={
ag:function(a,b){var t,s
for(t=J.aR(this.gC(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.bh(this.gC(a))},
k:function(a){return P.ku(a)}}
P.eU.prototype={
dk:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbP(H.B(t,[b]))},
gv:function(a){return new P.hY(this,this.c,this.d,this.b,null,this.$ti)},
gaj:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.D(P.A(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
U:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eK(this,"{","}")},
cr:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eL());++this.d
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
if(this.b===t)this.bJ();++this.d},
bJ:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bg(s,0,q,t,r)
C.a.bg(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbP(s)},
sbP:function(a){this.a=a}}
P.hY.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(P.aj(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fF.prototype={
K:function(a,b){var t
for(t=J.aR(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eK(this,"{","}")},
$isk:1}
P.fE.prototype={}
P.bD.prototype={}
P.ag.prototype={}
P.E.prototype={}
P.au.prototype={
geQ:function(){return this.a},
df:function(a,b){var t
if(Math.abs(this.a)<=864e13)t=!1
else t=!0
if(t)throw H.c(P.j6("DateTime is outside valid range: "+this.geQ()))},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.b.O(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aW(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mg(H.mL(this))
s=P.bZ(H.mJ(this))
r=P.bZ(H.mF(this))
q=P.bZ(H.mG(this))
p=P.bZ(H.mI(this))
o=P.bZ(H.mK(this))
n=P.mh(H.mH(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.au]}}
P.W.prototype={}
P.aw.prototype={
aE:function(a,b){return C.b.aE(this.a,b.gdN())},
aD:function(a,b){return C.b.aD(this.a,b.gdN())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aw))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.b.O(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e7()
s=this.a
if(s<0)return"-"+new P.aw(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.e6().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isE:1,
$asE:function(){return[P.aw]}}
P.e6.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.e7.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.aW.prototype={}
P.bW.prototype={
k:function(a){return"Assertion failed"}}
P.b2.prototype={
k:function(a){return"Throw of null."}}
P.a7.prototype={
gaQ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaP:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaQ()+s+r
if(!this.a)return q
p=this.gaP()
o=P.c4(this.b)
return q+p+": "+H.e(o)}}
P.cw.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eH.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){H.b(this.a)
if(J.lo(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.hd.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.hb.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b5.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dR.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.c4(t))+"."}}
P.cC.prototype={
k:function(a){return"Stack Overflow"},
$isaW:1}
P.e_.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.ja.prototype={}
P.hE.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.eB.prototype={
k:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.e(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.h.aG(r,0,75)+"..."
return s+"\n"+r}}
P.ea.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.k1(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ky(b,"expando$values")
return s==null?null:H.ky(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.S.prototype={
aB:function(a,b){return new H.cN(this,b,[H.a3(this,"S",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
gZ:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.c(H.eL())
s=t.gq(t)
if(t.p())throw H.c(H.mA())
return s},
t:function(a,b){var t,s,r
if(b<0)H.D(P.aG(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.A(b,this,"index",null,s))},
k:function(a){return P.my(this,"(",")")}}
P.ce.prototype={}
P.h.prototype={$isk:1}
P.b_.prototype={}
P.M.prototype={
gu:function(a){return P.C.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.a4.prototype={$isE:1,
$asE:function(){return[P.a4]}}
P.C.prototype={constructor:P.C,$isC:1,
w:function(a,b){return this===b},
gu:function(a){return H.aE(this)},
k:function(a){return"Instance of '"+H.bt(this)+"'"},
gA:function(a){return new H.am(H.ix(this),null)},
toString:function(){return this.k(this)}}
P.jp.prototype={}
P.b4.prototype={}
P.n.prototype={$isE:1,
$asE:function(){return[P.n]}}
P.bv.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
P.jt.prototype={}
W.j.prototype={}
W.bV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dH.prototype={
gj:function(a){return a.length}}
W.dI.prototype={
k:function(a){return String(a)}}
W.dJ.prototype={
k:function(a){return String(a)}}
W.aq.prototype={$isaq:1}
W.bX.prototype={
cR:function(a,b,c){var t=this.dR(a,b,P.nk(c,null))
return t},
dR:function(a,b,c){return a.getContext(b,c)}}
W.dO.prototype={
aC:function(a){return P.iq(a.getContextAttributes())}}
W.as.prototype={
gj:function(a){return a.length}}
W.dS.prototype={
gj:function(a){return a.length}}
W.dT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.aU.prototype={
bB:function(a,b){var t,s
t=$.$get$k9()
s=t[b]
if(typeof s==="string")return s
s=this.e4(a,b)
t[b]=s
return s},
e4:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mi()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dW.prototype={}
W.X.prototype={}
W.aV.prototype={}
W.dX.prototype={
gj:function(a){return a.length}}
W.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dZ.prototype={
gj:function(a){return a.length}}
W.e0.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.c_.prototype={}
W.av.prototype={
e8:function(a,b){return a.adoptNode(b)},
cS:function(a,b){return a.getElementById(b)},
cq:function(a,b){return a.querySelector(b)},
$isav:1}
W.e2.prototype={
k:function(a){return String(a)}}
W.c0.prototype={
eo:function(a,b){return a.createHTMLDocument(b)}}
W.e3.prototype={
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.c1.prototype={
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.c2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.T]},
$isk:1,
$ask:function(){return[P.T]},
$isr:1,
$asr:function(){return[P.T]},
$asl:function(){return[P.T]},
$ish:1,
$ash:function(){return[P.T]},
$asm:function(){return[P.T]}}
W.c3.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga3(a))+" x "+H.e(this.ga1(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isT)return!1
return a.left===t.gcm(b)&&a.top===t.gcw(b)&&this.ga3(a)===t.ga3(b)&&this.ga1(a)===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga3(a)
q=this.ga1(a)
return W.l0(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gcm:function(a){return a.left},
gcw:function(a){return a.top},
ga3:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isT:1,
$asT:function(){}}
W.e4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.n]},
$isk:1,
$ask:function(){return[P.n]},
$isr:1,
$asr:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
W.e5.prototype={
gj:function(a){return a.length}}
W.Y.prototype={
geb:function(a){return new W.hy(a)},
k:function(a){return a.localName},
L:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.ki
if(t==null){t=H.B([],[W.ct])
s=new W.cu(t)
C.a.l(t,W.kY(null))
C.a.l(t,W.l1())
$.ki=s
d=s}else d=t
t=$.kh
if(t==null){t=new W.dp(d)
$.kh=t
c=t}else{t.a=d
c=t}}if($.ak==null){t=document
s=t.implementation
s=(s&&C.K).eo(s,"")
$.ak=s
$.j9=s.createRange()
s=$.ak
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ak.head;(t&&C.L).N(t,r)}t=$.ak
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jJ(s,"$isaq")}t=$.ak
if(!!this.$isaq)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ak.body;(t&&C.o).N(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.W,a.tagName)){t=$.j9;(t&&C.D).cT(t,q)
t=$.j9
p=(t&&C.D).em(t,b)}else{q.innerHTML=b
p=$.ak.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.N(p,s)}t=$.ak.body
if(q==null?t!=null:q!==t)J.jW(q)
c.bf(p)
C.m.e8(document,p)
return p},
en:function(a,b,c){return this.L(a,b,c,null)},
d2:function(a,b,c,d){a.textContent=null
this.N(a,this.L(a,b,c,d))},
d1:function(a,b){return this.d2(a,b,null,null)},
a4:function(a,b){return a.getAttribute(b)},
dX:function(a,b){return a.removeAttribute(b)},
$isY:1,
gf_:function(a){return a.tagName}}
W.e9.prototype={
$1:function(a){return!!J.q(a).$isY},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={}
W.d.prototype={
dG:function(a,b,c,d){return a.addEventListener(b,H.aO(c,1),!1)}}
W.ev.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c6]},
$isk:1,
$ask:function(){return[W.c6]},
$isr:1,
$asr:function(){return[W.c6]},
$asl:function(){return[W.c6]},
$ish:1,
$ash:function(){return[W.c6]},
$asm:function(){return[W.c6]}}
W.ew.prototype={
gj:function(a){return a.length}}
W.eA.prototype={
gj:function(a){return a.length}}
W.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.cb.prototype={}
W.eF.prototype={
gj:function(a){return a.length}}
W.bl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.p]},
$isk:1,
$ask:function(){return[W.p]},
$isr:1,
$asr:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.cc.prototype={}
W.cd.prototype={
fb:function(a,b,c,d,e,f){return a.open(b,c)},
eS:function(a,b,c){return a.open(b,c)},
F:function(a,b){return a.send(b)}}
W.bm.prototype={}
W.bn.prototype={$isbn:1}
W.aB.prototype={$isaB:1}
W.eW.prototype={
k:function(a){return String(a)}}
W.eX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.f1.prototype={
gj:function(a){return a.length}}
W.f3.prototype={
f9:function(a,b,c){return a.send(b,c)},
F:function(a,b){return a.send(b)}}
W.bq.prototype={}
W.f4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cm]},
$isk:1,
$ask:function(){return[W.cm]},
$isr:1,
$asr:function(){return[W.cm]},
$asl:function(){return[W.cm]},
$ish:1,
$ash:function(){return[W.cm]},
$asm:function(){return[W.cm]}}
W.L.prototype={$isL:1}
W.P.prototype={
gZ:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cD("No elements"))
if(s>1)throw H.c(P.cD("More than one element"))
return t.firstChild},
K:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.N(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lr(t,c,C.B.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.c7(t,t.length,-1,null,[H.a3(t,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.B.h(this.a.childNodes,b)},
$ask:function(){return[W.p]},
$asci:function(){return[W.p]},
$asl:function(){return[W.p]},
$ash:function(){return[W.p]},
$asbD:function(){return[W.p]}}
W.p.prototype={
eU:function(a){var t=a.parentNode
if(t!=null)J.iW(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d7(a):t},
N:function(a,b){return a.appendChild(b)},
dY:function(a,b){return a.removeChild(b)},
dZ:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
gb3:function(a){return a.previousSibling}}
W.cs.prototype={
b4:function(a){return a.previousNode()}}
W.bs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.p]},
$isk:1,
$ask:function(){return[W.p]},
$isr:1,
$asr:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.ab.prototype={
gj:function(a){return a.length}}
W.fr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ab]},
$isk:1,
$ask:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$asl:function(){return[W.ab]},
$ish:1,
$ash:function(){return[W.ab]},
$asm:function(){return[W.ab]}}
W.fu.prototype={
F:function(a,b){return a.send(b)}}
W.cv.prototype={
em:function(a,b){return a.createContextualFragment(b)},
cT:function(a,b){return a.selectNodeContents(b)}}
W.cy.prototype={
F:function(a,b){return a.send(b)}}
W.fD.prototype={
gj:function(a){return a.length}}
W.al.prototype={}
W.fG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cA]},
$isk:1,
$ask:function(){return[W.cA]},
$isr:1,
$asr:function(){return[W.cA]},
$asl:function(){return[W.cA]},
$ish:1,
$ash:function(){return[W.cA]},
$asm:function(){return[W.cA]}}
W.fI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cB]},
$isk:1,
$ask:function(){return[W.cB]},
$isr:1,
$asr:function(){return[W.cB]},
$asl:function(){return[W.cB]},
$ish:1,
$ash:function(){return[W.cB]},
$asm:function(){return[W.cB]}}
W.ac.prototype={
gj:function(a){return a.length}}
W.fN.prototype={
h:function(a,b){return this.bI(a,b)},
ag:function(a,b){var t,s
for(t=0;!0;++t){s=this.dU(a,t)
if(s==null)return
b.$2(s,this.bI(a,s))}},
gC:function(a){var t=H.B([],[P.n])
this.ag(a,new W.fO(t))
return t},
gj:function(a){return a.length},
bI:function(a,b){return a.getItem(b)},
dU:function(a,b){return a.key(b)},
$asb0:function(){return[P.n,P.n]}}
W.fO.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cF.prototype={
L:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=W.mj("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.P(s).K(0,new W.P(t))
return s}}
W.fV.prototype={
L:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.L(t.createElement("table"),b,c,d)
t.toString
t=new W.P(t)
r=t.gZ(t)
r.toString
t=new W.P(r)
q=t.gZ(t)
s.toString
q.toString
new W.P(s).K(0,new W.P(q))
return s}}
W.fW.prototype={
L:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.L(t.createElement("table"),b,c,d)
t.toString
t=new W.P(t)
r=t.gZ(t)
s.toString
r.toString
new W.P(s).K(0,new W.P(r))
return s}}
W.bw.prototype={$isbw:1}
W.fY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cH]},
$isk:1,
$ask:function(){return[W.cH]},
$isr:1,
$asr:function(){return[W.cH]},
$asl:function(){return[W.cH]},
$ish:1,
$ash:function(){return[W.cH]},
$asm:function(){return[W.cH]}}
W.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cG]},
$isk:1,
$ask:function(){return[W.cG]},
$isr:1,
$asr:function(){return[W.cG]},
$asl:function(){return[W.cG]},
$ish:1,
$ash:function(){return[W.cG]},
$asm:function(){return[W.cG]}}
W.h0.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$isaH:1}
W.h4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cK]},
$isk:1,
$ask:function(){return[W.cK]},
$isr:1,
$asr:function(){return[W.cK]},
$asl:function(){return[W.cK]},
$ish:1,
$ash:function(){return[W.cK]},
$asm:function(){return[W.cK]}}
W.h5.prototype={
gj:function(a){return a.length}}
W.cL.prototype={
b4:function(a){return a.previousNode()}}
W.aI.prototype={}
W.he.prototype={
k:function(a){return String(a)}}
W.hg.prototype={
gm:function(a){return a.x},
gD:function(a){return a.z}}
W.hh.prototype={
gj:function(a){return a.length}}
W.hi.prototype={
F:function(a,b){return a.send(b)}}
W.aK.prototype={
geq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaK:1}
W.bA.prototype={
gea:function(a){var t,s
t=P.a4
s=new P.I(0,$.v,null,[t])
this.dP(a)
this.e_(a,W.l6(new W.hk(new P.id(s,[t]))))
return s},
e_:function(a,b){return a.requestAnimationFrame(H.aO(b,1))},
dP:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hk.prototype={
$1:function(a){this.a.ax(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jw.prototype={}
W.hw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bY]},
$isk:1,
$ask:function(){return[W.bY]},
$isr:1,
$asr:function(){return[W.bY]},
$asl:function(){return[W.bY]},
$ish:1,
$ash:function(){return[W.bY]},
$asm:function(){return[W.bY]}}
W.hx.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
w:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isT)return!1
return a.left===t.gcm(b)&&a.top===t.gcw(b)&&a.width===t.ga3(b)&&a.height===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.l0(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
ga3:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c9]},
$isk:1,
$ask:function(){return[W.c9]},
$isr:1,
$asr:function(){return[W.c9]},
$asl:function(){return[W.c9]},
$ish:1,
$ash:function(){return[W.c9]},
$asm:function(){return[W.c9]}}
W.d3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.p]},
$isk:1,
$ask:function(){return[W.p]},
$isr:1,
$asr:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.ia.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ac]},
$isk:1,
$ask:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$asl:function(){return[W.ac]},
$ish:1,
$ash:function(){return[W.ac]},
$asm:function(){return[W.ac]}}
W.ib.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cE]},
$isk:1,
$ask:function(){return[W.cE]},
$isr:1,
$asr:function(){return[W.cE]},
$asl:function(){return[W.cE]},
$ish:1,
$ash:function(){return[W.cE]},
$asm:function(){return[W.cE]}}
W.ht.prototype={
ag:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.H)(t),++p){o=t[p]
b.$2(o,q.a4(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asck:function(){return[P.n,P.n]},
$asb0:function(){return[P.n,P.n]},
gdS:function(){return this.a}}
W.hy.prototype={
h:function(a,b){return J.j4(this.a,b)},
gj:function(a){return this.gC(this).length}}
W.hB.prototype={
eN:function(a,b,c,d){return W.a0(this.a,this.b,a,!1,H.ap(this,0))}}
W.jz.prototype={}
W.hC.prototype={
dz:function(a,b,c,d,e){this.e6()},
e6:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lq(r,this.c,t,!1)}}}
W.hD.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bB.prototype={
dA:function(a){var t,s
t=$.$get$jA()
if(t.gaj(t)){for(s=0;s<262;++s)t.i(0,C.V[s],W.ns())
for(s=0;s<12;++s)t.i(0,C.r[s],W.nt())}},
a0:function(a){return $.$get$kZ().B(0,W.bk(a))},
T:function(a,b,c){var t,s,r
t=W.bk(a)
s=$.$get$jA()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gv:function(a){return new W.c7(a,this.gj(a),-1,null,[H.a3(a,"m",0)])}}
W.cu.prototype={
a0:function(a){return C.a.bU(this.a,new W.ff(a))},
T:function(a,b,c){return C.a.bU(this.a,new W.fe(a,b,c))}}
W.ff.prototype={
$1:function(a){return a.a0(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fe.prototype={
$1:function(a){return a.T(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bI.prototype={
dE:function(a,b,c,d){var t,s,r
this.a.K(0,c)
t=b.aB(0,new W.i8())
s=b.aB(0,new W.i9())
this.b.K(0,t)
r=this.c
r.K(0,C.A)
r.K(0,s)},
a0:function(a){return this.a.B(0,W.bk(a))},
T:function(a,b,c){var t,s
t=W.bk(a)
s=this.c
if(s.B(0,H.e(t)+"::"+b))return this.d.e9(c)
else if(s.B(0,"*::"+b))return this.d.e9(c)
else{s=this.b
if(s.B(0,H.e(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.e(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1}}
W.i8.prototype={
$1:function(a){return!C.a.B(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i9.prototype={
$1:function(a){return C.a.B(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ie.prototype={
T:function(a,b,c){if(this.da(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j4(a,"template")==="")return this.e.B(0,b)
return!1}}
W.ig.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.ic.prototype={
a0:function(a){var t=J.q(a)
if(!!t.$isbu)return!1
t=!!t.$isu
if(t&&W.bk(a)==="foreignObject")return!1
if(t)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.h.bi(b,"on"))return!1
return this.a0(a)}}
W.c7.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbK(J.aQ(this.a,t))
this.c=t
return!0}this.sbK(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbK:function(a){this.d=a}}
W.ct.prototype={}
W.jm.prototype={}
W.jv.prototype={}
W.i7.prototype={}
W.dp.prototype={
bf:function(a){new W.ih(this).$2(a,null)},
ad:function(a,b){if(b==null)J.jW(a)
else J.iW(b,a)},
e2:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lL(a)
r=J.j4(s.gdS(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.K(n)}p="element unprintable"
try{p=J.bi(a)}catch(n){H.K(n)}try{o=W.bk(a)
this.e1(a,b,t,p,o,s,r)}catch(n){if(H.K(n) instanceof P.a7)throw n
else{this.ad(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e1:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ad(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a0(a)){this.ad(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.T(a,"is",g)){this.ad(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gC(f)
s=H.B(t.slice(0),[H.ap(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.T(a,J.m0(p),q.a4(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a4(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a4(t,p)
q.dX(t,p)}}if(!!J.q(a).$isbw)this.bf(a.content)}}
W.ih.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e2(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ad(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lM(t)}catch(q){H.K(q)
r=t
J.iW(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.p,W.p]}}}
W.cQ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d1.prototype={}
W.d2.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.bJ.prototype={}
W.bK.prototype={}
W.da.prototype={}
W.db.prototype={}
W.df.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.bL.prototype={}
W.bM.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
P.hl.prototype={
ck:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
b8:function(a){var t,s,r,q,p,o,n,m,l,k
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.au(s,!0)
r.df(s,!0)
return r}if(a instanceof RegExp)throw H.c(P.ju("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.nl(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.ck(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.F()
t.a=o
r[p]=o
this.eC(a,new P.hn(t,this))
return t.a}if(a instanceof Array){n=a
p=this.ck(n)
r=this.b
o=r[p]
if(o!=null)return o
m=J.R(n)
l=m.gj(n)
o=this.c?new Array(l):n
r[p]=o
for(r=J.aP(o),k=0;k<l;++k)r.i(o,k,this.b8(m.h(n,k)))
return o}return a}}
P.hn.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b8(b)
J.lp(t,a,s)
return s},
$S:function(a,b){return{func:1,args:[,,]}}}
P.im.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hm.prototype={
eC:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.H)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.io.prototype={
$1:function(a){return this.a.ax(0,a)},
$S:function(a){return{func:1,args:[,]}}}
P.ip.prototype={
$1:function(a){return this.a.ei(a)},
$S:function(a){return{func:1,args:[,]}}}
P.i2.prototype={}
P.T.prototype={}
P.eb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ec.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ed.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ee.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ef.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ei.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a_.prototype={}
P.a8.prototype={}
P.eG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jh]},
$asl:function(){return[P.jh]},
$ish:1,
$ash:function(){return[P.jh]},
$asm:function(){return[P.jh]}}
P.f_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jn]},
$asl:function(){return[P.jn]},
$ish:1,
$ash:function(){return[P.jn]},
$asm:function(){return[P.jn]}}
P.fo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fs.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ft.prototype={
gj:function(a){return a.length}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bu.prototype={$isbu:1}
P.fT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
P.u.prototype={
L:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.ct])
C.a.l(t,W.kY(null))
C.a.l(t,W.l1())
C.a.l(t,new W.ic())
c=new W.dp(new W.cu(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).en(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.P(q)
o=t.gZ(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.N(p,r)
return p},
$isu:1}
P.fU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bx.prototype={}
P.by.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.js]},
$asl:function(){return[P.js]},
$ish:1,
$ash:function(){return[P.js]},
$asm:function(){return[P.js]}}
P.hf.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.d_.prototype={}
P.d0.prototype={}
P.d6.prototype={}
P.d7.prototype={}
P.dg.prototype={}
P.dh.prototype={}
P.dm.prototype={}
P.dn.prototype={}
P.dL.prototype={
gj:function(a){return a.length}}
P.dM.prototype={
gj:function(a){return a.length}}
P.aT.prototype={}
P.fi.prototype={
gj:function(a){return a.length}}
P.fA.prototype={
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c1:function(a,b){return a.checkFramebufferStatus(b)},
c2:function(a,b){return a.clear(b)},
c3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c5:function(a,b){return a.compileShader(b)},
c6:function(a){return a.createBuffer()},
c7:function(a){return a.createFramebuffer()},
c8:function(a){return a.createProgram()},
c9:function(a,b){return a.createShader(b)},
ca:function(a){return a.createTexture()},
cc:function(a,b){return a.depthMask(b)},
cd:function(a,b){return a.disable(b)},
ce:function(a,b,c,d){return a.drawArrays(b,c,d)},
cf:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cg:function(a,b){return a.enable(b)},
ci:function(a,b){return a.enableVertexAttribArray(b)},
cl:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aC:function(a){return P.iq(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cu:function(a,b,c,d){return a.texParameterf(b,c,d)},
cv:function(a,b,c,d){return a.texParameteri(b,c,d)},
cz:function(a,b,c){return a.uniform1f(b,c)},
cA:function(a,b,c){return a.uniform1fv(b,c)},
cB:function(a,b,c){return a.uniform1i(b,c)},
cC:function(a,b,c){return a.uniform1iv(b,c)},
cD:function(a,b,c){return a.uniform2fv(b,c)},
cE:function(a,b,c){return a.uniform3fv(b,c)},
cF:function(a,b,c){return a.uniform4fv(b,c)},
cG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cJ:function(a,b){return a.useProgram(b)},
cL:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cN:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fB.prototype={
ec:function(a,b){return a.beginTransformFeedback(b)},
ef:function(a,b){return a.bindVertexArray(b)},
ep:function(a){return a.createVertexArray()},
ex:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ey:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ez:function(a){return a.endTransformFeedback()},
f0:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
f5:function(a,b,c,d){this.e5(a,b,c,d)
return},
e5:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f7:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c1:function(a,b){return a.checkFramebufferStatus(b)},
c2:function(a,b){return a.clear(b)},
c3:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c5:function(a,b){return a.compileShader(b)},
c6:function(a){return a.createBuffer()},
c7:function(a){return a.createFramebuffer()},
c8:function(a){return a.createProgram()},
c9:function(a,b){return a.createShader(b)},
ca:function(a){return a.createTexture()},
cc:function(a,b){return a.depthMask(b)},
cd:function(a,b){return a.disable(b)},
ce:function(a,b,c,d){return a.drawArrays(b,c,d)},
cf:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cg:function(a,b){return a.enable(b)},
ci:function(a,b){return a.enableVertexAttribArray(b)},
cl:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aC:function(a){return P.iq(a.getContextAttributes())},
b9:function(a){return a.getError()},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cn:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cu:function(a,b,c,d){return a.texParameterf(b,c,d)},
cv:function(a,b,c,d){return a.texParameteri(b,c,d)},
cz:function(a,b,c){return a.uniform1f(b,c)},
cA:function(a,b,c){return a.uniform1fv(b,c)},
cB:function(a,b,c){return a.uniform1i(b,c)},
cC:function(a,b,c){return a.uniform1iv(b,c)},
cD:function(a,b,c){return a.uniform2fv(b,c)},
cE:function(a,b,c){return a.uniform3fv(b,c)},
cF:function(a,b,c){return a.uniform4fv(b,c)},
cG:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cH:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cJ:function(a,b){return a.useProgram(b)},
cL:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cN:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fJ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return P.iq(this.dT(a,b))},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dT:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.b_]},
$asl:function(){return[P.b_]},
$ish:1,
$ash:function(){return[P.b_]},
$asm:function(){return[P.b_]}}
P.dc.prototype={}
P.dd.prototype={}
B.iO.prototype={
$1:function(a){$.$get$ir().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aB]}}}
B.iP.prototype={
$1:function(a){$.$get$ir().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aB]}}}
B.iQ.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.ni=t
$.nj=C.b.a7(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jM=s-C.b.I(window.innerWidth,2)
$.lh=-(t-C.b.I(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.L]}}}
B.iR.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bT=t-C.b.I(window.innerWidth,2)
$.bU=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$bS().i(0,"right",!0)
else $.$get$bS().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.L]}}}
B.iS.prototype={
$1:function(a){if(a.button===2)$.$get$bS().i(0,"right",null)
else $.$get$bS().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.L]}}}
B.fj.prototype={
dl:function(a,b,c,d){var t
W.a0(d,W.mk(d),new B.fk(this),!1,W.aK)
W.a0(d,"mousemove",new B.fl(this),!1,W.L)
t=W.aH
W.a0(d,"touchstart",new B.fm(),!1,t)
W.a0(d,"touchmove",new B.fn(this),!1,t)
B.nH(null)}}
B.fk.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.av.geq(a)*r.k3
if(C.c.a7(r.fy,t)>0)r.fy=C.c.a7(r.fy,t)}catch(q){s=H.K(q)
P.a5(s)}},
$S:function(a){return{func:1,args:[W.aK]}}}
B.fl.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a7($.jM,$.bT)*0.01
s=t.id
r=$.bU
q=$.lh
t.id=s+(r-q)*0.01
$.bT=$.jM
$.bU=q}},
$S:function(a){return{func:1,args:[W.L]}}}
B.fm.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a2(t.clientX)
C.c.a2(t.clientY)
$.bT=s
C.c.a2(t.clientX)
$.bU=C.c.a2(t.clientY)},
$S:function(a){return{func:1,args:[W.aH]}}}
B.fn.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a2(t.clientX)
t=C.c.a2(t.clientY)
r=this.a
r.go=r.go+C.b.a7(s,$.bT)*0.01
r.id=r.id+($.bU-t)*0.01
$.bT=s
$.bU=t},
$S:function(a){return{func:1,args:[W.aH]}}}
G.f5.prototype={}
G.cM.prototype={
R:function(a,b){var t=this.d
if(H.V(!t.E(0,a)))H.a2("uniform "+a+" already set")
t.i(0,a,b)},
bs:function(){return this.d},
k:function(a){var t,s,r,q
t=H.B(["{"+new H.am(H.ix(this),null).k(0)+"}["+this.a+"]"],[P.n])
for(s=this.d,r=s.gC(s),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ak(t,"\n")}}
G.dN.prototype={}
G.dQ.prototype={
cj:function(a,b,c){J.lJ(this.a,b)
if(c>0)J.m7(this.a,b,c)},
cM:function(a,b,c,d,e,f,g,h){J.iY(this.a,34962,b)
J.m8(this.a,c,d,e,!1,g,h)}}
G.c8.prototype={
dh:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.lz(t.a)
this.b=s
J.iZ(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.jT(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.jT(t.a,36160,36096,3553,s,0)}r=J.lv(t.a,36160)
s=r===36053
if(H.V(s))H.a2("framebuffer error: "+H.e(r))
if(!s)throw H.c("Error Incomplete Framebuffer: "+H.e(r))
J.iZ(t.a,36160,null)},
bk:function(a,b,c,d,e){var t,s
t=this.a
s=this.b
J.iZ(t.a,36160,s)
H.b(d>0&&e>0)
J.m9(t.a,b,c,d,e)
if(a!==0)J.lw(t.a,a)}}
G.et.prototype={}
G.eu.prototype={}
G.ca.prototype={
ar:function(a){var t=this.e
H.b(!t.E(0,a))
H.b(C.h.bi(a,"a"))
switch($.$get$Q().h(0,a).a){case"vec2":t.i(0,a,H.B([],[T.N]))
break
case"vec3":t.i(0,a,H.B([],[T.y]))
break
case"vec4":t.i(0,a,H.B([],[T.an]))
break
case"float":t.i(0,a,H.B([],[P.W]))
break
case"uvec4":t.i(0,a,H.B([],[[P.h,P.x]]))
break
default:if(H.V(!1))H.a2("unknown type for "+a)}},
dd:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.et(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.H)(a),++q){p=a[q]
o=new T.y(new Float32Array(3))
o.Y(p)
C.a.l(t,o)}},
bm:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.H)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.N(o))}},
bn:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.H)(b),++q){p=b[q]
o=new T.y(new Float32Array(3))
o.Y(p)
r.l(t,o)}},
bp:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.eu(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.H)(a),++q){p=a[q]
o=new T.y(new Float32Array(3))
o.Y(p)
C.a.l(t,o)}},
di:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.B(r,[P.x])
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
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gC(s),r=r.gv(r);r.p();){q=r.gq(r)
p=$.$get$Q().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ak(t," ")}}
G.cJ.prototype={}
G.cI.prototype={}
G.f0.prototype={}
G.f2.prototype={
bq:function(a,b,c){var t,s
if(C.h.a9(a,0)===105){if(H.V(C.b.aI(b.length,c)===this.z))H.a2("ChangeAttribute "+this.z)}else{t=C.b.aI(b.length,c)
if(H.V(t===(this.ch.length/3|0)))H.a2("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iY(t.a,34962,s)
J.jR(t.a,34962,b,35048)},
dj:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a8:function(a,b,c){var t,s,r,q,p,o
t=J.jO(a,0)===105
if(t&&this.z===0)this.z=C.b.aI(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.j0(r.a))
this.bq(a,b,c)
q=$.$get$Q().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.V(p.E(0,a)))H.a2("unexpected attribute "+a)
o=p.h(0,a)
J.dE(r.a,this.e)
r.cj(0,o,t?1:0)
r.cM(0,s.h(0,a),o,q.br(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gC(t),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ak(s,"  ")},
saR:function(a){this.cx=a}}
G.fp.prototype={
de:function(a,b){var t=C.b.cP(a,b)
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
bs:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.y(new Float32Array(3))
o.P(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.Y(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.q(n)
r=!!s.$isan
k=r?s.gaA(n):1
if(!!s.$isy){j=s.gm(n)
m=s.gn(n)
l=s.gD(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gD(n)
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
a3.Y(this.db)
a3.eR(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fz.prototype={
dm:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
r.i(0,n,J.jV(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
r.i(0,n,J.jV(q.a,p,n))}},
dt:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gv(s);s.p();){q=s.gq(s)
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bC(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dw:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gC(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.jO(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.be("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$Q().h(0,n)
if(l==null)H.D("unknown "+n)
H.b(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j5(r.a,k,m)
else if(!!J.q(m).$iskm)J.m5(r.a,k,m)
break
case"float":if(l.c===0)J.m3(r.a,k,m)
else if(!!J.q(m).$isey)J.m4(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ai(m,"$isaa").a
J.k0(r.a,k,!1,n)}else if(!!J.q(m).$isey)J.k0(r.a,k,!1,m)
else if(H.V(!1))H.a2("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.N.gfa(H.ai(m,"$isnU"))
J.k_(r.a,k,!1,n)}else if(!!J.q(m).$isey)J.k_(r.a,k,!1,m)
else if(H.V(!1))H.a2("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jZ(j,k,H.ai(m,"$isan").a)
else J.jZ(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jY(j,k,H.ai(m,"$isy").a)
else J.jY(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jX(j,k,H.ai(m,"$isN").a)
else J.jX(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.W(33984,this.ch)
J.jP(r.a,n)
n=H.ai(m,"$isbz").b
J.dD(r.a,3553,n)
n=this.ch
J.j5(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.W(33984,this.ch)
J.jP(r.a,n)
n=H.ai(m,"$isbz").b
J.dD(r.a,34067,n)
n=this.ch
J.j5(r.a,k,n)
this.ch=this.ch+1
break
default:H.be("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.z(m,!0)
j=r.a
if(n)J.dF(j,2929)
else J.j1(j,2929)
break
case"cStencilFunc":H.ai(m,"$iscJ")
n=m.a
j=r.a
if(n===1281)J.j1(j,2960)
else{J.dF(j,2960)
j=m.b
i=m.c
J.lY(r.a,n,j,i)}break
case"cDepthWrite":J.lD(r.a,m)
break
case"cBlendEquation":H.ai(m,"$iscI")
n=m.a
j=r.a
if(n===1281)J.j1(j,3042)
else{J.dF(j,3042)
j=m.b
i=m.c
J.lu(r.a,j,i)
J.lt(r.a,n)}break}++o
break}}h=P.kg(0,0,0,Date.now()-new P.au(t,!1).a,0,0)
""+o
h.k(0)},
dg:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.m6(t.a,this.r)
this.ch=0
this.z.U(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.H)(b),++r){q=b[r]
this.dw(q.a,q.bs())}s=this.Q
s.U(0)
for(p=a.cy,p=p.gC(p),p=p.gv(p);p.p();)s.l(0,p.gq(p))
o=this.dt()
if(o.length!==0)P.a5("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
s=a.d
p=a.e
J.dE(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.dj()
m=a.Q
l=a.z
if(n)J.ls(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.lH(k,p,s,m,0,l)
else J.lG(k,p,s,m,0)}else{m=t.a
if(l>1)J.lF(m,p,0,s,l)
else J.lE(m,p,0,s)}if(n)J.lK(t.a)},
aJ:function(a,b){return this.dg(a,b,null)}}
G.w.prototype={
br:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.b3.prototype={
bl:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<2;++r){q=a[r]
H.b($.$get$Q().E(0,q))
H.b(!C.a.B(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aF(t)},
bo:function(a){var t,s,r
H.b(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.V($.$get$Q().E(0,r)))H.a2("missing uniform "+r)
H.b(!C.a.B(t,r))
C.a.l(t,r)}C.a.aF(t)},
aq:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$Q().E(0,r))
H.b(!C.a.B(t,r))
C.a.l(t,r)}C.a.aF(t)},
dn:function(a,b){H.b(this.b==null)
this.b=this.bu(!0,a,b)},
aK:function(a){return this.dn(a,null)},
bu:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
m=$.$get$Q().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.K(q,b)
if(a)C.a.l(q,"}")
return C.a.ak(q,"\n")}}
G.fH.prototype={}
G.h_.prototype={}
G.bz.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ha.prototype={
ds:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.dD(t.a,s,this.b)
J.m_(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.lZ(t.a,s,34046,q)
q=r.r
J.dG(t.a,s,10240,q)
q=r.f
J.dG(t.a,s,10241,q)
if(r.b){J.dG(t.a,s,10242,33071)
J.dG(t.a,s,10243,33071)}r.c
p=J.lR(t.a)
if(H.V(p===0))H.a2("texture error "+H.e(p))
J.dD(t.a,s,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"}}
R.fL.prototype={
dq:function(a,b,c){var t,s,r
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
J.iX(this.a,s)
r=this.dC(b,c,90,30)
this.d=r
J.iX(this.a,r)
t=t.createElement("div")
this.c=t
J.iX(this.a,t)},
dC:function(a,b,c,d){var t,s,r,q,p
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
p=(r&&C.u).bB(r,"float")
r.setProperty(p,"left","")
p=C.u.bB(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.N(t,s)}return t}}
R.fM.prototype={
dv:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.f4(s,2)+" fps"
t=this.c;(t&&C.p).d1(t,b)
r=C.b.I(30*C.x.eg(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).N(t,q)},
du:function(a){return this.dv(a,"")}}
D.eV.prototype={
$1:function(a){this.a.ax(0,W.n5(this.b.response))},
$S:function(a){return{func:1,args:[,]}}}
A.iz.prototype={
$2:function(a,b){var t=536870911&a+J.bg(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.C]}}}
T.aa.prototype={
a5:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
Y:function(a){var t,s
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
k:function(a){return"[0] "+this.ao(0).k(0)+"\n[1] "+this.ao(1).k(0)+"\n[2] "+this.ao(2).k(0)+"\n[3] "+this.ao(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aa){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.iy(this.a)},
ao:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.an(t)},
ap:function(){var t=this.a
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
eR:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.N.prototype={
a6:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.N){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.iy(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.y.prototype={
P:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
Y:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.y){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.iy(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb1())},
gb1:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b2:function(a){var t,s,r
t=Math.sqrt(this.gb1())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b_:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cb:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.y(new Float32Array(3))
t.P(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]}}
T.an.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.an){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.iy(this.a)},
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
gD:function(a){return this.a[2]},
gaA:function(a){return this.a[3]}}
S.iK.prototype={
$1:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t=this.a
t.b=b6+0
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
s.id=0}r=C.c.eh(s.id,-1.4707963267948965,1.4707963267948965)
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
l=m[12]
k=m[13]
j=m[14]
i=new T.y(new Float32Array(3))
i.P(0,1,0)
r=s.e
q=r.a
q[0]=m[12]
q[1]=m[13]
q[2]=m[14]
q=new Float32Array(3)
h=new T.y(q)
h.Y(r)
q[0]=q[0]-p[0]
q[1]=q[1]-p[1]
q[2]=q[2]-p[2]
h.b2(0)
g=i.cb(h)
g.b2(0)
f=h.cb(g)
f.b2(0)
p=g.b_(r)
n=f.b_(r)
r=h.b_(r)
e=g.a
d=e[0]
c=f.a
b=c[0]
a=q[0]
a0=e[1]
a1=c[1]
a2=q[1]
e=e[2]
c=c[2]
q=q[2]
m[15]=1
m[14]=-r
m[13]=-n
m[12]=-p
m[11]=0
m[10]=q
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
m[12]=l
m[13]=k
m[14]=j
d=s.f
b=d.a
b[0]=m[2]
b[1]=m[6]
b[2]=m[10]
s=-s.k1
a3=Math.sqrt(d.gb1())
l=b[0]/a3
k=b[1]/a3
j=b[2]/a3
a4=Math.cos(s)
a5=Math.sin(s)
a6=1-a4
a7=l*l*a6+a4
s=j*a5
a8=l*k*a6-s
b=k*a5
a9=l*j*a6+b
b0=k*l*a6+s
b1=k*k*a6+a4
s=l*a5
b2=k*j*a6-s
b3=j*l*a6-b
b4=j*k*a6+s
b5=j*j*a6+a4
s=m[0]
b=m[4]
d=m[8]
a=m[1]
a0=m[5]
a1=m[9]
a2=m[2]
e=m[6]
c=m[10]
q=m[3]
p=m[7]
n=m[11]
m[0]=s*a7+b*b0+d*b3
m[1]=a*a7+a0*b0+a1*b3
m[2]=a2*a7+e*b0+c*b3
m[3]=q*a7+p*b0+n*b3
m[4]=s*a8+b*b1+d*b4
m[5]=a*a8+a0*b1+a1*b4
m[6]=a2*a8+e*b1+c*b4
m[7]=q*a8+p*b1+n*b4
m[8]=s*a9+b*b2+d*b5
m[9]=a*a9+a0*b2+a1*b5
m[10]=a2*a9+e*b2+c*b5
m[11]=q*a9+p*b2+n*b5
s=this.f
r=this.r
q=this.x
if($.$get$lc().checked){p=this.d
n=this.e
this.c.bk(17664,0,0,p,n)
s.aJ(t.a,[r,q])
this.y.bk(17664,0,0,p,n)
this.z.aJ(this.Q,[this.ch])}else s.aJ(t.a,[r,q])
C.aw.gea(window).b6(this)
this.cx.du(t.b)},
$S:function(a){return{func:1,v:true,args:[P.a4]}}}
S.iL.prototype={
$1:function(a){this.a.a=G.kl("",this.b,Y.mr(J.aQ(a,0)))
this.c.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.d7=J.a.prototype.k
J.bo.prototype.d9=J.bo.prototype.k
P.S.prototype.d8=P.S.prototype.aB
W.Y.prototype.aH=W.Y.prototype.L
W.bI.prototype.da=W.bI.prototype.T;(function installTearOffs(){installTearOff(H.b7.prototype,"geM",0,0,0,null,["$0"],["az"],0)
installTearOff(H.a1.prototype,"gcU",0,0,0,null,["$1"],["J"],2)
installTearOff(H.aL.prototype,"ges",0,0,0,null,["$1"],["V"],2)
installTearOff(P,"ne",1,0,0,null,["$1"],["mW"],1)
installTearOff(P,"nf",1,0,0,null,["$1"],["mX"],1)
installTearOff(P,"ng",1,0,0,null,["$1"],["mY"],1)
installTearOff(P,"la",1,0,0,null,["$0"],["nc"],0)
installTearOff(P.I.prototype,"gdK",0,0,0,null,["$2","$1"],["H","dL"],5)
installTearOff(P,"nm",1,0,0,null,["$2"],["mf"],6)
installTearOff(W,"ns",1,0,0,null,["$4"],["n0"],4)
installTearOff(W,"nt",1,0,0,null,["$4"],["n1"],4)
installTearOff(W.cs.prototype,"gb3",0,1,0,null,["$0"],["b4"],3)
installTearOff(W.cL.prototype,"gb3",0,1,0,null,["$0"],["b4"],3)
installTearOff(S,"ll",1,0,0,null,["$0"],["nB"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.je,t)
inherit(J.a,t)
inherit(J.dK,t)
inherit(P.S,t)
inherit(H.cj,t)
inherit(P.ce,t)
inherit(H.aX,t)
inherit(H.at,t)
inherit(H.i_,t)
inherit(H.b7,t)
inherit(H.hz,t)
inherit(H.aM,t)
inherit(H.hZ,t)
inherit(H.hu,t)
inherit(H.cx,t)
inherit(H.h1,t)
inherit(H.ar,t)
inherit(H.a1,t)
inherit(H.aL,t)
inherit(H.fy,t)
inherit(H.h7,t)
inherit(P.aW,t)
inherit(H.de,t)
inherit(H.am,t)
inherit(P.b0,t)
inherit(H.eR,t)
inherit(H.eT,t)
inherit(H.eN,t)
inherit(H.i0,t)
inherit(P.Z,t)
inherit(P.j8,t)
inherit(P.hv,t)
inherit(P.cX,t)
inherit(P.I,t)
inherit(P.cO,t)
inherit(P.fP,t)
inherit(P.fQ,t)
inherit(P.jq,t)
inherit(P.aS,t)
inherit(P.ii,t)
inherit(P.fF,t)
inherit(P.hW,t)
inherit(P.bC,t)
inherit(P.ji,t)
inherit(P.bD,t)
inherit(P.l,t)
inherit(P.hY,t)
inherit(P.ag,t)
inherit(P.E,t)
inherit(P.au,t)
inherit(P.a4,t)
inherit(P.aw,t)
inherit(P.cC,t)
inherit(P.ja,t)
inherit(P.hE,t)
inherit(P.eB,t)
inherit(P.ea,t)
inherit(P.h,t)
inherit(P.b_,t)
inherit(P.M,t)
inherit(P.jp,t)
inherit(P.b4,t)
inherit(P.n,t)
inherit(P.bv,t)
inherit(P.jt,t)
inherit(W.dW,t)
inherit(W.bB,t)
inherit(W.m,t)
inherit(W.cu,t)
inherit(W.bI,t)
inherit(W.ic,t)
inherit(W.c7,t)
inherit(W.ct,t)
inherit(W.jm,t)
inherit(W.jv,t)
inherit(W.i7,t)
inherit(W.dp,t)
inherit(P.hl,t)
inherit(P.i2,t)
inherit(G.f5,t)
inherit(G.dQ,t)
inherit(G.c8,t)
inherit(G.et,t)
inherit(G.eu,t)
inherit(G.ca,t)
inherit(G.cJ,t)
inherit(G.cI,t)
inherit(G.w,t)
inherit(G.b3,t)
inherit(G.h_,t)
inherit(G.bz,t)
inherit(R.fL,t)
inherit(T.aa,t)
inherit(T.N,t)
inherit(T.y,t)
inherit(T.an,t)
t=J.a
inherit(J.eM,t)
inherit(J.ch,t)
inherit(J.bo,t)
inherit(J.ax,t)
inherit(J.aY,t)
inherit(J.az,t)
inherit(H.br,t)
inherit(H.b1,t)
inherit(W.d,t)
inherit(W.dH,t)
inherit(W.dO,t)
inherit(W.aV,t)
inherit(W.X,t)
inherit(W.cQ,t)
inherit(W.e0,t)
inherit(W.e1,t)
inherit(W.e2,t)
inherit(W.c0,t)
inherit(W.c1,t)
inherit(W.cR,t)
inherit(W.c3,t)
inherit(W.cT,t)
inherit(W.e5,t)
inherit(W.f,t)
inherit(W.cV,t)
inherit(W.eF,t)
inherit(W.cY,t)
inherit(W.eW,t)
inherit(W.f1,t)
inherit(W.d1,t)
inherit(W.cs,t)
inherit(W.d4,t)
inherit(W.ab,t)
inherit(W.d8,t)
inherit(W.cv,t)
inherit(W.da,t)
inherit(W.ac,t)
inherit(W.df,t)
inherit(W.di,t)
inherit(W.h0,t)
inherit(W.dk,t)
inherit(W.h5,t)
inherit(W.cL,t)
inherit(W.he,t)
inherit(W.hg,t)
inherit(W.dq,t)
inherit(W.ds,t)
inherit(W.du,t)
inherit(W.dw,t)
inherit(W.dy,t)
inherit(P.d_,t)
inherit(P.d6,t)
inherit(P.fs,t)
inherit(P.ft,t)
inherit(P.fw,t)
inherit(P.dg,t)
inherit(P.dm,t)
inherit(P.dL,t)
inherit(P.fA,t)
inherit(P.fB,t)
inherit(P.dc,t)
t=J.bo
inherit(J.fq,t)
inherit(J.aJ,t)
inherit(J.aA,t)
inherit(J.jd,J.ax)
t=J.aY
inherit(J.cg,t)
inherit(J.cf,t)
t=P.S
inherit(H.k,t)
inherit(H.cl,t)
inherit(H.cN,t)
t=H.k
inherit(H.aZ,t)
inherit(H.eS,t)
inherit(H.e8,H.cl)
t=P.ce
inherit(H.eZ,t)
inherit(H.hj,t)
t=H.aZ
inherit(H.bp,t)
inherit(P.eU,t)
t=H.at
inherit(H.iT,t)
inherit(H.iU,t)
inherit(H.hU,t)
inherit(H.hA,t)
inherit(H.eI,t)
inherit(H.eJ,t)
inherit(H.i1,t)
inherit(H.h2,t)
inherit(H.h3,t)
inherit(H.iV,t)
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.fX,t)
inherit(H.eO,t)
inherit(H.iA,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(P.hq,t)
inherit(P.hp,t)
inherit(P.hr,t)
inherit(P.hs,t)
inherit(P.eD,t)
inherit(P.eC,t)
inherit(P.hF,t)
inherit(P.hN,t)
inherit(P.hJ,t)
inherit(P.hK,t)
inherit(P.hL,t)
inherit(P.hH,t)
inherit(P.hM,t)
inherit(P.hG,t)
inherit(P.hQ,t)
inherit(P.hR,t)
inherit(P.hP,t)
inherit(P.hO,t)
inherit(P.fR,t)
inherit(P.fS,t)
inherit(P.il,t)
inherit(P.i5,t)
inherit(P.i4,t)
inherit(P.i6,t)
inherit(P.eY,t)
inherit(P.e6,t)
inherit(P.e7,t)
inherit(W.e9,t)
inherit(W.fO,t)
inherit(W.hk,t)
inherit(W.hD,t)
inherit(W.ff,t)
inherit(W.fe,t)
inherit(W.i8,t)
inherit(W.i9,t)
inherit(W.ig,t)
inherit(W.ih,t)
inherit(P.hn,t)
inherit(P.im,t)
inherit(P.io,t)
inherit(P.ip,t)
inherit(B.iO,t)
inherit(B.iP,t)
inherit(B.iQ,t)
inherit(B.iR,t)
inherit(B.iS,t)
inherit(B.fk,t)
inherit(B.fl,t)
inherit(B.fm,t)
inherit(B.fn,t)
inherit(D.eV,t)
inherit(A.iz,t)
inherit(S.iK,t)
inherit(S.iL,t)
t=H.hu
inherit(H.b9,t)
inherit(H.bN,t)
t=P.aW
inherit(H.fg,t)
inherit(H.eP,t)
inherit(H.hc,t)
inherit(H.h9,t)
inherit(H.dP,t)
inherit(H.fC,t)
inherit(P.bW,t)
inherit(P.b2,t)
inherit(P.a7,t)
inherit(P.hd,t)
inherit(P.hb,t)
inherit(P.b5,t)
inherit(P.dR,t)
inherit(P.e_,t)
t=H.fX
inherit(H.fK,t)
inherit(H.bj,t)
inherit(H.ho,P.bW)
inherit(P.ck,P.b0)
t=P.ck
inherit(H.a9,t)
inherit(W.ht,t)
t=H.b1
inherit(H.f6,t)
inherit(H.co,t)
t=H.co
inherit(H.bE,t)
inherit(H.bG,t)
inherit(H.bF,H.bE)
inherit(H.cp,H.bF)
inherit(H.bH,H.bG)
inherit(H.cq,H.bH)
t=H.cp
inherit(H.cn,t)
inherit(H.f7,t)
t=H.cq
inherit(H.f8,t)
inherit(H.f9,t)
inherit(H.fa,t)
inherit(H.fb,t)
inherit(H.fc,t)
inherit(H.cr,t)
inherit(H.fd,t)
t=P.hv
inherit(P.cP,t)
inherit(P.id,t)
inherit(P.i3,P.ii)
inherit(P.hX,H.a9)
inherit(P.fE,P.fF)
inherit(P.hT,P.fE)
inherit(P.hV,P.hT)
inherit(P.ci,P.bD)
t=P.a4
inherit(P.W,t)
inherit(P.x,t)
t=P.a7
inherit(P.cw,t)
inherit(P.eH,t)
t=W.d
inherit(W.p,t)
inherit(W.al,t)
inherit(W.ew,t)
inherit(W.bm,t)
inherit(W.bq,t)
inherit(W.fu,t)
inherit(W.cy,t)
inherit(W.bJ,t)
inherit(W.bL,t)
inherit(W.hh,t)
inherit(W.hi,t)
inherit(W.bA,t)
inherit(W.jw,t)
inherit(P.dM,t)
inherit(P.aT,t)
t=W.p
inherit(W.Y,t)
inherit(W.as,t)
inherit(W.av,t)
t=W.Y
inherit(W.j,t)
inherit(P.u,t)
t=W.al
inherit(W.bV,t)
inherit(W.eE,t)
inherit(W.eX,t)
t=W.j
inherit(W.dI,t)
inherit(W.dJ,t)
inherit(W.aq,t)
inherit(W.bX,t)
inherit(W.c_,t)
inherit(W.eA,t)
inherit(W.cb,t)
inherit(W.bn,t)
inherit(W.fD,t)
inherit(W.cF,t)
inherit(W.fV,t)
inherit(W.fW,t)
inherit(W.bw,t)
t=W.aV
inherit(W.dS,t)
inherit(W.dU,t)
inherit(W.dV,t)
inherit(W.dY,t)
t=W.X
inherit(W.dT,t)
inherit(W.dX,t)
inherit(W.dZ,t)
inherit(W.aU,W.cQ)
inherit(W.e3,W.c1)
inherit(W.cS,W.cR)
inherit(W.c2,W.cS)
inherit(W.cU,W.cT)
inherit(W.e4,W.cU)
inherit(W.cW,W.cV)
inherit(W.ev,W.cW)
inherit(W.cZ,W.cY)
inherit(W.bl,W.cZ)
inherit(W.cc,W.av)
inherit(W.cd,W.bm)
inherit(W.aI,W.f)
t=W.aI
inherit(W.aB,t)
inherit(W.L,t)
inherit(W.aH,t)
inherit(W.f3,W.bq)
inherit(W.d2,W.d1)
inherit(W.f4,W.d2)
inherit(W.P,P.ci)
inherit(W.d5,W.d4)
inherit(W.bs,W.d5)
inherit(W.d9,W.d8)
inherit(W.fr,W.d9)
inherit(W.bK,W.bJ)
inherit(W.fG,W.bK)
inherit(W.db,W.da)
inherit(W.fI,W.db)
inherit(W.fN,W.df)
inherit(W.dj,W.di)
inherit(W.fY,W.dj)
inherit(W.bM,W.bL)
inherit(W.fZ,W.bM)
inherit(W.dl,W.dk)
inherit(W.h4,W.dl)
inherit(W.aK,W.L)
inherit(W.dr,W.dq)
inherit(W.hw,W.dr)
inherit(W.hx,W.c3)
inherit(W.dt,W.ds)
inherit(W.hS,W.dt)
inherit(W.dv,W.du)
inherit(W.d3,W.dv)
inherit(W.dx,W.dw)
inherit(W.ia,W.dx)
inherit(W.dz,W.dy)
inherit(W.ib,W.dz)
inherit(W.hy,W.ht)
inherit(W.hB,P.fP)
inherit(W.jz,W.hB)
inherit(W.hC,P.fQ)
inherit(W.ie,W.bI)
inherit(P.hm,P.hl)
inherit(P.T,P.i2)
t=P.u
inherit(P.eb,t)
inherit(P.ec,t)
inherit(P.ed,t)
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
inherit(P.ex,t)
inherit(P.a8,t)
inherit(P.f_,t)
inherit(P.fo,t)
inherit(P.bu,t)
t=P.a8
inherit(P.ez,t)
inherit(P.a_,t)
inherit(P.eG,t)
inherit(P.fU,t)
inherit(P.bx,t)
inherit(P.hf,t)
inherit(P.d0,P.d_)
inherit(P.eQ,P.d0)
inherit(P.d7,P.d6)
inherit(P.fh,P.d7)
inherit(P.fx,P.a_)
inherit(P.dh,P.dg)
inherit(P.fT,P.dh)
inherit(P.by,P.bx)
inherit(P.dn,P.dm)
inherit(P.h6,P.dn)
inherit(P.fi,P.aT)
inherit(P.dd,P.dc)
inherit(P.fJ,P.dd)
t=G.f5
inherit(G.fH,t)
inherit(G.cM,t)
inherit(G.f2,t)
inherit(G.fz,t)
inherit(G.dN,G.fH)
inherit(B.fj,G.dN)
t=G.cM
inherit(G.f0,t)
inherit(G.fp,t)
inherit(G.ha,G.bz)
inherit(R.fM,R.fL)
mixin(H.bE,P.l)
mixin(H.bF,H.aX)
mixin(H.bG,P.l)
mixin(H.bH,H.aX)
mixin(P.bD,P.l)
mixin(W.cQ,W.dW)
mixin(W.cR,P.l)
mixin(W.cS,W.m)
mixin(W.cT,P.l)
mixin(W.cU,W.m)
mixin(W.cV,P.l)
mixin(W.cW,W.m)
mixin(W.cY,P.l)
mixin(W.cZ,W.m)
mixin(W.d1,P.l)
mixin(W.d2,W.m)
mixin(W.d4,P.l)
mixin(W.d5,W.m)
mixin(W.d8,P.l)
mixin(W.d9,W.m)
mixin(W.bJ,P.l)
mixin(W.bK,W.m)
mixin(W.da,P.l)
mixin(W.db,W.m)
mixin(W.df,P.b0)
mixin(W.di,P.l)
mixin(W.dj,W.m)
mixin(W.bL,P.l)
mixin(W.bM,W.m)
mixin(W.dk,P.l)
mixin(W.dl,W.m)
mixin(W.dq,P.l)
mixin(W.dr,W.m)
mixin(W.ds,P.l)
mixin(W.dt,W.m)
mixin(W.du,P.l)
mixin(W.dv,W.m)
mixin(W.dw,P.l)
mixin(W.dx,W.m)
mixin(W.dy,P.l)
mixin(W.dz,W.m)
mixin(P.d_,P.l)
mixin(P.d0,W.m)
mixin(P.d6,P.l)
mixin(P.d7,W.m)
mixin(P.dg,P.l)
mixin(P.dh,W.m)
mixin(P.dm,P.l)
mixin(P.dn,W.m)
mixin(P.dc,P.l)
mixin(P.dd,W.m)})();(function constants(){C.o=W.aq.prototype
C.J=W.bX.prototype
C.u=W.aU.prototype
C.p=W.c_.prototype
C.K=W.c0.prototype
C.L=W.cb.prototype
C.m=W.cc.prototype
C.w=W.cd.prototype
C.M=J.a.prototype
C.a=J.ax.prototype
C.x=J.cf.prototype
C.b=J.cg.prototype
C.N=J.ch.prototype
C.c=J.aY.prototype
C.h=J.az.prototype
C.U=J.aA.prototype
C.X=H.cn.prototype
C.B=W.bs.prototype
C.C=J.fq.prototype
C.D=W.cv.prototype
C.I=W.cF.prototype
C.t=J.aJ.prototype
C.av=W.aK.prototype
C.aw=W.bA.prototype
C.d=new P.i3()
C.v=new P.aw(0)
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
C.y=function(hooks) { return hooks; }

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
C.z=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.A=makeConstList([])
C.q=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.n])
C.r=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.Y=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.Z=new G.w("vec4","delta from light",0)
C.n=new G.w("","",0)
C.E=new G.w("vec3","vertex coordinates",0)
C.a_=new G.w("vec3","vertex binormals",0)
C.F=new G.w("vec4","for wireframe",0)
C.a0=new G.w("vec4","per vertex color",0)
C.a1=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.a3=new G.w("mat4","",4)
C.a2=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.a4=new G.w("float","",4)
C.a5=new G.w("float","depth for shadowmaps",0)
C.i=new G.w("sampler2D","",0)
C.a6=new G.w("float","for bump maps",0)
C.a7=new G.w("vec2","texture uvs",0)
C.a8=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.a9=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.aa=new G.w("vec3","vertex normals",0)
C.ab=new G.w("sampler2DShadow","",0)
C.G=new G.w("vec3","per vertex color",0)
C.H=new G.w("mat3","",0)
C.ac=new G.w("vec3","vertex tangents",0)
C.ad=H.G("nP")
C.ae=H.G("nQ")
C.af=H.G("ey")
C.ag=H.G("nR")
C.ah=H.G("nS")
C.ai=H.G("km")
C.aj=H.G("nT")
C.ak=H.G("kp")
C.al=H.G("M")
C.am=H.G("n")
C.an=H.G("kT")
C.ao=H.G("kU")
C.ap=H.G("nW")
C.aq=H.G("kV")
C.ar=H.G("ag")
C.as=H.G("W")
C.at=H.G("x")
C.au=H.G("a4")})();(function staticFields(){$.kz="$cachedFunction"
$.kA="$cachedInvocation"
$.k6=null
$.k4=null
$.jC=!1
$.jH=null
$.l7=null
$.lj=null
$.is=null
$.iD=null
$.jI=null
$.ba=null
$.bO=null
$.bP=null
$.jD=!1
$.v=C.d
$.kj=0
$.ak=null
$.j9=null
$.ki=null
$.kh=null
$.ke=null
$.kd=null
$.kc=null
$.kb=null
$.ni=0
$.nj=0
$.jM=0
$.lh=0
$.bT=0
$.bU=0
$.nI=!1
$.lb=0})();(function lazyInitializers(){lazy($,"ka","$get$ka",function(){return H.le("_$dart_dartClosure")})
lazy($,"jf","$get$jf",function(){return H.le("_$dart_js")})
lazy($,"kn","$get$kn",function(){return H.mw()})
lazy($,"ko","$get$ko",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kj
$.kj=t+1
t="expando$key$"+t}return new P.ea(t,null,[P.x])})
lazy($,"kH","$get$kH",function(){return H.ad(H.h8({
toString:function(){return"$receiver$"}}))})
lazy($,"kI","$get$kI",function(){return H.ad(H.h8({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kJ","$get$kJ",function(){return H.ad(H.h8(null))})
lazy($,"kK","$get$kK",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kO","$get$kO",function(){return H.ad(H.h8(void 0))})
lazy($,"kP","$get$kP",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kM","$get$kM",function(){return H.ad(H.kN(null))})
lazy($,"kL","$get$kL",function(){return H.ad(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kR","$get$kR",function(){return H.ad(H.kN(void 0))})
lazy($,"kQ","$get$kQ",function(){return H.ad(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jy","$get$jy",function(){return P.mV()})
lazy($,"bQ","$get$bQ",function(){return[]})
lazy($,"k9","$get$k9",function(){return{}})
lazy($,"kZ","$get$kZ",function(){return P.jj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jA","$get$jA",function(){return P.F()})
lazy($,"ir","$get$ir",function(){return P.ks(P.x,P.ag)})
lazy($,"bS","$get$bS",function(){return P.ks(P.n,P.ag)})
lazy($,"kE","$get$kE",function(){return new G.cJ(1281,0,4294967295)})
lazy($,"k2","$get$k2",function(){return new G.cI(1281,1281,1281)})
lazy($,"Q","$get$Q",function(){return P.aC(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.G,"aColorAlpha",C.a0,"aPosition",C.E,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.F,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.G,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.E,"vPositionFromLight",C.Z,"vCenter",C.F,"vDepth",C.a5,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ab,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a9,"uAnimationTable",C.i,"uTime",C.a8,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.f,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1])})
lazy($,"kG","$get$kG",function(){var t=new G.h_(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"lc","$get$lc",function(){return H.ai(C.m.cq(W.nn(),"#activate"),"$isbn")})})()
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
mangledGlobalNames:{x:"int",W:"double",a4:"num",n:"String",ag:"bool",M:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.ag,args:[W.Y,P.n,P.n,W.bB]},{func:1,v:true,args:[P.C],opt:[P.b4]},{func:1,ret:P.x,args:[P.E,P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.br,ArrayBufferView:H.b1,DataView:H.f6,Float32Array:H.cn,Float64Array:H.f7,Int16Array:H.f8,Int32Array:H.f9,Int8Array:H.fa,Uint16Array:H.fb,Uint32Array:H.fc,Uint8ClampedArray:H.cr,CanvasPixelArray:H.cr,Uint8Array:H.fd,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.bV,LinearAccelerationSensor:W.bV,AccessibleNodeList:W.dH,HTMLAnchorElement:W.dI,HTMLAreaElement:W.dJ,HTMLBodyElement:W.aq,HTMLCanvasElement:W.bX,CanvasRenderingContext2D:W.dO,CDATASection:W.as,CharacterData:W.as,Comment:W.as,ProcessingInstruction:W.as,Text:W.as,CSSPerspective:W.dS,CSSPositionValue:W.dT,CSSRotation:W.dU,CSSScale:W.dV,CSSStyleDeclaration:W.aU,MSStyleCSSProperties:W.aU,CSS2Properties:W.aU,CSSImageValue:W.X,CSSKeywordValue:W.X,CSSNumericValue:W.X,CSSResourceValue:W.X,CSSUnitValue:W.X,CSSURLImageValue:W.X,CSSStyleValue:W.X,CSSMatrixComponent:W.aV,CSSSkew:W.aV,CSSTransformComponent:W.aV,CSSTransformValue:W.dX,CSSTranslation:W.dY,CSSUnparsedValue:W.dZ,DataTransferItemList:W.e0,DeviceAcceleration:W.e1,HTMLDivElement:W.c_,XMLDocument:W.av,Document:W.av,DOMException:W.e2,DOMImplementation:W.c0,DOMPoint:W.e3,DOMPointReadOnly:W.c1,ClientRectList:W.c2,DOMRectList:W.c2,DOMRectReadOnly:W.c3,DOMStringList:W.e4,DOMTokenList:W.e5,Element:W.Y,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.ev,FileWriter:W.ew,HTMLFormElement:W.eA,Gyroscope:W.eE,HTMLHeadElement:W.cb,History:W.eF,HTMLCollection:W.bl,HTMLFormControlsCollection:W.bl,HTMLOptionsCollection:W.bl,HTMLDocument:W.cc,XMLHttpRequest:W.cd,XMLHttpRequestUpload:W.bm,XMLHttpRequestEventTarget:W.bm,HTMLInputElement:W.bn,KeyboardEvent:W.aB,Location:W.eW,Magnetometer:W.eX,MediaList:W.f1,MIDIOutput:W.f3,MIDIInput:W.bq,MIDIPort:W.bq,MimeTypeArray:W.f4,PointerEvent:W.L,MouseEvent:W.L,DragEvent:W.L,DocumentFragment:W.p,ShadowRoot:W.p,Attr:W.p,DocumentType:W.p,Node:W.p,NodeIterator:W.cs,NodeList:W.bs,RadioNodeList:W.bs,Plugin:W.ab,PluginArray:W.fr,PresentationConnection:W.fu,Range:W.cv,RTCDataChannel:W.cy,DataChannel:W.cy,HTMLSelectElement:W.fD,AbsoluteOrientationSensor:W.al,AmbientLightSensor:W.al,OrientationSensor:W.al,RelativeOrientationSensor:W.al,Sensor:W.al,SourceBufferList:W.fG,SpeechGrammarList:W.fI,SpeechRecognitionResult:W.ac,Storage:W.fN,HTMLTableElement:W.cF,HTMLTableRowElement:W.fV,HTMLTableSectionElement:W.fW,HTMLTemplateElement:W.bw,TextTrackCueList:W.fY,TextTrackList:W.fZ,TimeRanges:W.h0,TouchEvent:W.aH,TouchList:W.h4,TrackDefaultList:W.h5,TreeWalker:W.cL,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,UIEvent:W.aI,URL:W.he,VRStageBoundsPoint:W.hg,VideoTrackList:W.hh,WebSocket:W.hi,WheelEvent:W.aK,Window:W.bA,DOMWindow:W.bA,CSSRuleList:W.hw,DOMRect:W.hx,GamepadList:W.hS,NamedNodeMap:W.d3,MozNamedAttrMap:W.d3,SpeechRecognitionResultList:W.ia,StyleSheetList:W.ib,SVGFEBlendElement:P.eb,SVGFEColorMatrixElement:P.ec,SVGFEComponentTransferElement:P.ed,SVGFECompositeElement:P.ee,SVGFEConvolveMatrixElement:P.ef,SVGFEDiffuseLightingElement:P.eg,SVGFEDisplacementMapElement:P.eh,SVGFEFloodElement:P.ei,SVGFEGaussianBlurElement:P.ej,SVGFEImageElement:P.ek,SVGFEMergeElement:P.el,SVGFEMorphologyElement:P.em,SVGFEOffsetElement:P.en,SVGFEPointLightElement:P.eo,SVGFESpecularLightingElement:P.ep,SVGFESpotLightElement:P.eq,SVGFETileElement:P.er,SVGFETurbulenceElement:P.es,SVGFilterElement:P.ex,SVGForeignObjectElement:P.ez,SVGCircleElement:P.a_,SVGEllipseElement:P.a_,SVGLineElement:P.a_,SVGPathElement:P.a_,SVGPolygonElement:P.a_,SVGPolylineElement:P.a_,SVGGeometryElement:P.a_,SVGAElement:P.a8,SVGClipPathElement:P.a8,SVGDefsElement:P.a8,SVGGElement:P.a8,SVGSwitchElement:P.a8,SVGGraphicsElement:P.a8,SVGImageElement:P.eG,SVGLengthList:P.eQ,SVGMaskElement:P.f_,SVGNumberList:P.fh,SVGPatternElement:P.fo,SVGPoint:P.fs,SVGPointList:P.ft,SVGRect:P.fw,SVGRectElement:P.fx,SVGScriptElement:P.bu,SVGStringList:P.fT,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEMergeNodeElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMetadataElement:P.u,SVGRadialGradientElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGSymbolElement:P.u,SVGTitleElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGElement:P.u,SVGSVGElement:P.fU,SVGTextPathElement:P.bx,SVGTextContentElement:P.bx,SVGTSpanElement:P.by,SVGTextElement:P.by,SVGTextPositioningElement:P.by,SVGTransformList:P.h6,SVGUseElement:P.hf,AudioBuffer:P.dL,AudioTrackList:P.dM,AudioContext:P.aT,webkitAudioContext:P.aT,BaseAudioContext:P.aT,OfflineAudioContext:P.fi,WebGLRenderingContext:P.fA,WebGL2RenderingContext:P.fB,SQLResultSetRowList:P.fJ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.co.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.cp.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.cq.$nativeSuperclassTag="ArrayBufferView"
W.bJ.$nativeSuperclassTag="EventTarget"
W.bK.$nativeSuperclassTag="EventTarget"
W.bL.$nativeSuperclassTag="EventTarget"
W.bM.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lm(S.ll(),b)},[])
else (function(b){H.lm(S.ll(),b)})([])})})()