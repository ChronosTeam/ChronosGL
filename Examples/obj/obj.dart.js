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
return d?function(e){if(t===null)t=H.jy(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jy(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jy(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j7:function j7(a){this.a=a},
je:function(a,b,c,d){if(!!a.$isj)return new H.e1(a,b,[c,d])
return new H.cg(a,b,[c,d])},
eF:function(){return new P.b3("No element")},
mm:function(){return new P.b3("Too many elements")},
ml:function(){return new P.b3("Too few elements")},
mE:function(a,b){H.cv(a,0,J.bg(a)-1,b)},
cv:function(a,b,c,d){if(c-b<=32)H.mD(a,b,c,d)
else H.mC(a,b,c,d)},
mD:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.P(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a3(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mC:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.I(t+1,6)
r=a3+s
q=a4-s
p=C.b.I(a3+a4,2)
o=p-s
n=p+s
t=J.P(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a3(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a3(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a3(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a3(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a3(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a3(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a3(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a3(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a3(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.y(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cv(a2,a3,g-2,a5)
H.cv(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.y(a5.$2(t.h(a2,g),l),0);)++g
for(;J.y(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cv(a2,g,f,a5)}else H.cv(a2,g,f,a5)},
j:function j(){},
aY:function aY(){},
ce:function ce(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cg:function cg(a,b,c){this.a=a
this.b=b
this.$ti=c},
e1:function e1(a,b,c){this.a=a
this.b=b
this.$ti=c},
eT:function eT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bn:function bn(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
hd:function hd(a,b,c){this.a=a
this.b=b
this.$ti=c},
aW:function aW(){},
dv:function(a,b){var t=a.ad(b)
if(!u.globalState.d.cy)u.globalState.f.ak()
return t},
im:function(){++u.globalState.f.b},
iD:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lf:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$ish)throw H.c(P.j_("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hU(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kg()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.ht(P.jd(null,H.aM),0)
q=P.x
s.sey(new H.a6(0,null,null,null,null,null,0,[q,H.b5]))
s.seB(new H.a6(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hT()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mg,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mS)}if(u.globalState.x)return
o=H.kR()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.bb(a,{func:1,args:[P.L]}))o.ad(new H.iN(t,a))
else if(H.bb(a,{func:1,args:[P.L,P.L]}))o.ad(new H.iO(t,a))
else o.ad(a)
u.globalState.f.ak()},
mS:function(a){var t=P.aC(["command","print","msg",a])
return new H.a0(!0,P.b6(null,P.x)).J(t)},
kR:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.b5(t,new H.a6(0,null,null,null,null,null,0,[s,H.ct]),P.aD(null,null,null,s),u.createNewIsolate(),new H.ct(0,null,!1),new H.ar(H.le()),new H.ar(H.le()),!1,!1,[],P.aD(null,null,null,null),null,null,!1,!0,P.aD(null,null,null,null))
t.dk()
return t},
mi:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mj()
return},
mj:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
mg:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aL(!0,[]).T(b.data)
s=J.P(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nl(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aL(!0,[]).T(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aL(!0,[]).T(s.h(t,"replyTo"))
k=H.kR()
u.globalState.f.a.P(0,new H.aM(k,new H.eC(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ak()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lK(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ak()
break
case"close":u.globalState.ch.aj(0,$.$get$kh().h(0,a))
a.terminate()
u.globalState.f.ak()
break
case"log":H.mf(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aC(["command","print","msg",t])
j=new H.a0(!0,P.b6(null,P.x)).J(j)
s.toString
self.postMessage(j)}else P.W(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mf:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aC(["command","log","msg",a])
r=new H.a0(!0,P.b6(null,P.x)).J(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.J(q)
t=H.ag(q)
s=P.c2(t)
throw H.c(s)}},
mh:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.ks=$.ks+("_"+s)
$.kt=$.kt+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.F(0,["spawned",new H.b7(s,r),q,t.r])
r=new H.eD(t,d,a,c,b)
if(e){t.bI(q,q)
u.globalState.f.a.P(0,new H.aM(t,r,"start isolate"))}else r.$0()},
mG:function(a,b){var t=new H.fW(!0,!1,null,0)
t.dc(a,b)
return t},
mU:function(a){return new H.aL(!0,[]).T(new H.a0(!1,P.b6(null,P.x)).J(a))},
iN:function iN(a,b){this.a=a
this.b=b},
iO:function iO(a,b){this.a=a
this.b=b},
hU:function hU(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b5:function b5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hO:function hO(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(){},
eC:function eC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ho:function ho(){},
b7:function b7(a,b){this.b=a
this.a=b},
hW:function hW(a,b){this.a=a
this.b=b},
bK:function bK(a,b,c){this.b=a
this.c=b
this.a=c},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
a0:function a0(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
nf:function(a){return u.types[a]},
nn:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$isr},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bh(a)
if(typeof t!=="string")throw H.c(H.H(a))
return t},
mz:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ay(t)
s=t[0]
r=t[1]
return new H.fs(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aE:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
kq:function(a,b){var t=P.j4(a,null,null)
throw H.c(t)},
jh:function(a,b,c){var t,s
if(typeof a!=="string")H.D(H.H(a))
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.kq(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.kq(a,c)},
kp:function(a,b){var t=P.j4("Invalid double",a,null)
throw H.c(t)},
aF:function(a,b){var t,s
if(typeof a!=="string")H.D(H.H(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kp(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.lP(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kp(a,b)}return t},
br:function(a){var t,s,r,q,p,o,n,m,l
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.q(a).$isaJ){p=C.z(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.h.a7(q,0)===36)q=C.h.cO(q,1)
l=H.dw(H.iq(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
M:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mx:function(a){return a.b?H.M(a).getUTCFullYear()+0:H.M(a).getFullYear()+0},
mv:function(a){return a.b?H.M(a).getUTCMonth()+1:H.M(a).getMonth()+1},
mr:function(a){return a.b?H.M(a).getUTCDate()+0:H.M(a).getDate()+0},
ms:function(a){return a.b?H.M(a).getUTCHours()+0:H.M(a).getHours()+0},
mu:function(a){return a.b?H.M(a).getUTCMinutes()+0:H.M(a).getMinutes()+0},
mw:function(a){return a.b?H.M(a).getUTCSeconds()+0:H.M(a).getSeconds()+0},
mt:function(a){return a.b?H.M(a).getUTCMilliseconds()+0:H.M(a).getMilliseconds()+0},
kr:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.H(a))
return a[b]},
an:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a4(!0,b,"index",null)
t=J.bg(a)
if(b<0||C.b.cv(b,t))return P.z(b,a,"index",null,t)
return P.fp(b,"index",null)},
H:function(a){return new P.a4(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.b1()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lg})
t.name=""}else t.toString=H.lg
return t},
lg:function(){return J.bh(this.dartException)},
D:function(a){throw H.c(a)},
I:function(a){throw H.c(P.ah(a))},
aa:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kF:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ko:function(a,b){return new H.fa(a,b==null?null:b.method)},
j9:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eJ(a,s,t?null:b.receiver)},
J:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iP(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aR(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j9(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.ko(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kz()
o=$.$get$kA()
n=$.$get$kB()
m=$.$get$kC()
l=$.$get$kG()
k=$.$get$kH()
j=$.$get$kE()
$.$get$kD()
i=$.$get$kJ()
h=$.$get$kI()
g=p.M(s)
if(g!=null)return t.$1(H.j9(s,g))
else{g=o.M(s)
if(g!=null){g.method="call"
return t.$1(H.j9(s,g))}else{g=n.M(s)
if(g==null){g=m.M(s)
if(g==null){g=l.M(s)
if(g==null){g=k.M(s)
if(g==null){g=j.M(s)
if(g==null){g=m.M(s)
if(g==null){g=i.M(s)
if(g==null){g=h.M(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.ko(s,g))}}return t.$1(new H.h6(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cy()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a4(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cy()
return a},
ag:function(a){var t
if(a==null)return new H.d9(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d9(a,null)},
nr:function(a){if(a==null||typeof a!='object')return J.bf(a)
else return H.aE(a)},
nd:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
nm:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dv(b,new H.iy(a))
case 1:return H.dv(b,new H.iz(a,d))
case 2:return H.dv(b,new H.iA(a,d,e))
case 3:return H.dv(b,new H.iB(a,d,e,f))
case 4:return H.dv(b,new H.iC(a,d,e,f,g))}throw H.c(P.c2("Unsupported number of arguments for wrapped closure"))},
aO:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nm)
a.$identity=t
return t},
m0:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$ish){t.$reflectionInfo=c
r=H.mz(t).r}else r=c
q=d?Object.create(new H.fF().constructor.prototype):Object.create(new H.bi(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k1(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nf,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jZ:H.j0
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k1(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lY:function(a,b,c,d){var t=H.j0
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k1:function(a,b,c){var t,s,r,q
if(c)return H.m_(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lY(s,b==null?r!=null:b!==r,t,b)
return q},
lZ:function(a,b,c,d){var t,s
t=H.j0
s=H.jZ
switch(b?-1:a){case 0:throw H.c(H.mB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
m_:function(a,b){var t,s,r,q
t=$.k_
if(t==null){t=H.jX("self")
$.k_=t}t=$.jY
if(t==null){t=H.jX("receiver")
$.jY=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lZ(r,b==null?q!=null:b!==q,s,b)
return t},
jy:function(a,b,c,d,e,f){var t,s
t=J.ay(b)
s=!!J.q(c).$ish?J.ay(c):c
return H.m0(a,t,s,!!d,e,f)},
j0:function(a){return a.a},
jZ:function(a){return a.c},
jX:function(a){var t,s,r,q,p
t=new H.bi("self","target","receiver","name")
s=J.ay(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nT:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ab(a,"String"))},
nO:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ab(a,"double"))},
nS:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ab(a,"num"))},
n6:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ab(a,"bool"))},
nl:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
nt:function(a,b){throw H.c(H.ab(a,b.substring(3)))},
ns:function(a,b){var t=J.P(b)
throw H.c(H.k0(a,t.aD(b,3,t.gj(b))))},
jC:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.nt(a,b)},
ap:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.ns(a,b)},
nR:function(a){if(a==null)return a
if(!!J.q(a).$ish)return a
throw H.c(H.ab(a,"List"))},
jz:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
bb:function(a,b){var t,s
if(a==null)return!1
t=H.jz(a)
if(t==null)s=!1
else s=H.l8(t,b)
return s},
nP:function(a,b){var t,s
if(a==null)return a
if($.jv)return a
$.jv=!0
try{if(H.bb(a,b))return a
t=H.iH(b,null)
s=H.ab(a,t)
throw H.c(s)}finally{$.jv=!1}},
ab:function(a,b){return new H.h3("TypeError: "+H.e(P.c1(a))+": type '"+H.kX(a)+"' is not a subtype of type '"+b+"'")},
k0:function(a,b){return new H.dI("CastError: "+H.e(P.c1(a))+": type '"+H.kX(a)+"' is not a subtype of type '"+b+"'")},
kX:function(a){var t
if(a instanceof H.at){t=H.jz(a)
if(t!=null)return H.iH(t,null)
return"Closure"}return H.br(a)},
ae:function(a){if(!0===a)return!1
if(!!J.q(a).$isj5)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ab(a,"bool"))},
am:function(a){throw H.c(new H.hi(a))},
b:function(a){if(H.ae(a))throw H.c(P.lX(null))},
nC:function(a){throw H.c(new P.dT(a))},
mB:function(a){return new H.fw(a)},
le:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l6:function(a){return u.getIsolateTag(a)},
F:function(a){return new H.ak(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iq:function(a){if(a==null)return
return a.$ti},
l7:function(a,b){return H.jG(a["$as"+H.e(b)],H.iq(a))},
a1:function(a,b,c){var t,s
t=H.l7(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ao:function(a,b){var t,s
t=H.iq(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iH:function(a,b){var t=H.be(a,b)
return t},
be:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dw(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.be(t,b)
return H.mW(a,b)}return"unknown-reified-type"},
mW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.be(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.be(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.be(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nc(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.be(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dw:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bt("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.be(o,c)}return p?"":"<"+s.k(0)+">"},
ir:function(a){var t,s,r
if(a instanceof H.at){t=H.jz(a)
if(t!=null)return H.iH(t,null)}s=J.q(a).constructor.name
if(a==null)return s
r=H.dw(a.$ti,0,null)
return s+r},
jG:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jD(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jD(a,null,b)
return b},
bO:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iq(a)
s=J.q(a)
if(s[b]==null)return!1
return H.l0(H.jG(s[d],t),c)},
dx:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bO(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dw(c,0,null)
throw H.c(H.k0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nL:function(a,b,c,d){var t,s
if(a==null)return a
t=H.bO(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dw(c,0,null)
throw H.c(H.ab(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
l0:function(a,b){var t,s,r,q,p
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
if(!H.T(r,b[p]))return!1}return!0},
nM:function(a,b,c){return H.jD(a,b,H.l7(b,c))},
T:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="L")return!0
if('func' in b)return H.l8(a,b)
if('func' in a)return b.name==="j5"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iH(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l0(H.jG(o,t),r)},
l_:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.T(o,n)||H.T(n,o)))return!1}return!0},
n2:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ay(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.T(p,o)||H.T(o,p)))return!1}return!0},
l8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.T(t,s)||H.T(s,t)))return!1}r=a.args
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
if(n===m){if(!H.l_(r,q,!1))return!1
if(!H.l_(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.T(g,f)||H.T(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.T(g,f)||H.T(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.T(g,f)||H.T(f,g)))return!1}}return H.n2(a.named,b.named)},
jD:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nU:function(a){var t=$.jA
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nQ:function(a){return H.aE(a)},
nN:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
no:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.jA.$1(a)
s=$.il[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ix[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kZ.$2(a,t)
if(t!=null){s=$.il[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ix[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iG(r)
$.il[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ix[t]=r
return r}if(p==="-"){o=H.iG(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lc(a,r)
if(p==="*")throw H.c(P.jn(t))
if(u.leafTags[t]===true){o=H.iG(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lc(a,r)},
lc:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jE(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iG:function(a){return J.jE(a,!1,null,!!a.$isr)},
nq:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iG(t)
else return J.jE(t,c,null,null)},
nj:function(){if(!0===$.jB)return
$.jB=!0
H.nk()},
nk:function(){var t,s,r,q,p,o,n,m
$.il=Object.create(null)
$.ix=Object.create(null)
H.ni()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ld.$1(p)
if(o!=null){n=H.nq(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ni:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.ba(C.O,H.ba(C.T,H.ba(C.y,H.ba(C.y,H.ba(C.S,H.ba(C.P,H.ba(C.Q(C.z),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jA=new H.iu(p)
$.kZ=new H.iv(o)
$.ld=new H.iw(n)},
ba:function(a,b){return a(b)||b},
kk:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.c(P.j4("Illegal RegExp pattern ("+String(q)+")",a,null))},
mT:function(a,b){var t=new H.hV(a,b)
t.dm(a,b)
return t},
nx:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
nz:function(a,b,c,d){var t,s,r
t=b.dD(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.nB(a,r,r+s[0].length,c)},
ny:function(a,b,c){var t,s
t=b.gbA()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
nA:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.nz(a,b,c,d)},
nB:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fs:function fs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h1:function h1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fa:function fa(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a){this.a=a},
iP:function iP(a){this.a=a},
d9:function d9(a,b){this.a=a
this.b=b},
iy:function iy(a){this.a=a},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iC:function iC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
at:function at(){},
fS:function fS(){},
fF:function fF(){},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h3:function h3(a){this.a=a},
dI:function dI(a){this.a=a},
fw:function fw(a){this.a=a},
hi:function hi(a){this.a=a},
ak:function ak(a,b){this.a=a
this.b=b},
a6:function a6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eI:function eI(a){this.a=a},
eL:function eL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a,b){this.a=a
this.$ti=b},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hV:function hV(a,b){this.a=a
this.b=b},
ic:function(a){var t,s,r
if(!!J.q(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.an(b,a))},
bp:function bp(){},
b0:function b0(){},
f0:function f0(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
ci:function ci(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
cm:function cm(){},
f7:function f7(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
nc:function(a){return J.ay(H.B(a?Object.keys(a):[],[null]))},
bd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cb.prototype
return J.ca.prototype}if(typeof a=="string")return J.az.prototype
if(a==null)return J.cc.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.C)return a
return J.ip(a)},
jE:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ip:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jB==null){H.nj()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jn("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j8()]
if(p!=null)return p
p=H.no(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.C
if(s===Object.prototype)return C.C
if(typeof q=="function"){Object.defineProperty(q,$.$get$j8(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ay:function(a){a.fixed$length=Array
return a},
kj:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mn:function(a,b){var t,s
for(t=a.length;b<t;){s=C.h.a7(a,b)
if(s!==32&&s!==13&&!J.kj(s))break;++b}return b},
mo:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.h.bR(a,t)
if(s!==32&&s!==13&&!J.kj(s))break}return b},
P:function(a){if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.C)return a
return J.ip(a)},
bc:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.C)return a
return J.ip(a)},
l5:function(a){if(typeof a=="number")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
ne:function(a){if(typeof a=="number")return J.aX.prototype
if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
io:function(a){if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aJ.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.C)return a
return J.ip(a)},
y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).w(a,b)},
a3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l5(a).aA(a,b)},
lh:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l5(a).aB(a,b)},
aP:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nn(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.P(a).h(a,b)},
li:function(a,b,c){return J.bc(a).i(a,b,c)},
lj:function(a,b,c,d){return J.k(a).dr(a,b,c,d)},
jH:function(a,b){return J.io(a).a7(a,b)},
iQ:function(a,b){return J.k(a).dL(a,b)},
lk:function(a,b,c){return J.k(a).dM(a,b,c)},
jI:function(a,b){return J.k(a).bH(a,b)},
iR:function(a,b){return J.k(a).N(a,b)},
jJ:function(a,b,c){return J.k(a).bK(a,b,c)},
ll:function(a,b){return J.k(a).e_(a,b)},
iS:function(a,b,c){return J.k(a).bL(a,b,c)},
jK:function(a,b,c){return J.k(a).bM(a,b,c)},
dy:function(a,b){return J.k(a).e2(a,b)},
lm:function(a,b){return J.k(a).bN(a,b)},
ln:function(a,b,c){return J.k(a).bO(a,b,c)},
jL:function(a,b,c,d){return J.k(a).bP(a,b,c,d)},
lo:function(a,b,c,d,e){return J.k(a).bQ(a,b,c,d,e)},
lp:function(a,b){return J.ne(a).O(a,b)},
iT:function(a,b,c){return J.P(a).e7(a,b,c)},
iU:function(a){return J.k(a).bT(a)},
lq:function(a){return J.k(a).bU(a)},
lr:function(a){return J.k(a).ec(a)},
ls:function(a,b){return J.k(a).bX(a,b)},
iV:function(a,b){return J.k(a).bY(a,b)},
lt:function(a,b,c,d){return J.k(a).bZ(a,b,c,d)},
lu:function(a,b,c,d,e){return J.k(a).ej(a,b,c,d,e)},
lv:function(a,b,c,d,e){return J.k(a).c_(a,b,c,d,e)},
lw:function(a,b,c,d,e,f){return J.k(a).ek(a,b,c,d,e,f)},
lx:function(a,b){return J.bc(a).t(a,b)},
dz:function(a,b){return J.k(a).c0(a,b)},
ly:function(a,b){return J.k(a).c1(a,b)},
lz:function(a){return J.k(a).el(a)},
jM:function(a,b){return J.bc(a).ae(a,b)},
lA:function(a){return J.k(a).gdZ(a)},
bf:function(a){return J.q(a).gu(a)},
aQ:function(a){return J.bc(a).gv(a)},
bg:function(a){return J.P(a).gj(a)},
lB:function(a){return J.k(a).gaY(a)},
lC:function(a){return J.q(a).gA(a)},
lD:function(a){return J.k(a).geP(a)},
lE:function(a){return J.k(a).gax(a)},
iW:function(a){return J.k(a).gm(a)},
iX:function(a){return J.k(a).gn(a)},
jN:function(a){return J.k(a).gD(a)},
iY:function(a,b){return J.k(a).a3(a,b)},
lF:function(a){return J.k(a).az(a)},
lG:function(a,b){return J.k(a).b3(a,b)},
lH:function(a,b,c){return J.k(a).b4(a,b,c)},
jO:function(a,b,c){return J.k(a).b7(a,b,c)},
lI:function(a,b){return J.k(a).c5(a,b)},
lJ:function(a,b){return J.bc(a).c7(a,b)},
jP:function(a){return J.bc(a).eI(a)},
lK:function(a,b){return J.k(a).F(a,b)},
lL:function(a,b){return J.io(a).cM(a,b)},
lM:function(a,b,c,d){return J.k(a).bc(a,b,c,d)},
lN:function(a){return J.io(a).eS(a)},
bh:function(a){return J.q(a).k(a)},
lO:function(a,b,c,d){return J.k(a).eU(a,b,c,d)},
lP:function(a){return J.io(a).eV(a)},
lQ:function(a,b,c){return J.k(a).cd(a,b,c)},
lR:function(a,b,c){return J.k(a).ce(a,b,c)},
iZ:function(a,b,c){return J.k(a).cf(a,b,c)},
lS:function(a,b,c){return J.k(a).cg(a,b,c)},
jQ:function(a,b,c){return J.k(a).ci(a,b,c)},
jR:function(a,b,c){return J.k(a).cj(a,b,c)},
jS:function(a,b,c){return J.k(a).ck(a,b,c)},
jT:function(a,b,c,d){return J.k(a).cl(a,b,c,d)},
jU:function(a,b,c,d){return J.k(a).cm(a,b,c,d)},
lT:function(a,b){return J.k(a).co(a,b)},
lU:function(a,b,c){return J.k(a).eW(a,b,c)},
lV:function(a,b,c,d,e,f,g){return J.k(a).cq(a,b,c,d,e,f,g)},
lW:function(a,b,c,d,e){return J.k(a).cs(a,b,c,d,e)},
a:function a(){},
eG:function eG(){},
cc:function cc(){},
bm:function bm(){},
fk:function fk(){},
aJ:function aJ(){},
aA:function aA(){},
ax:function ax(a){this.$ti=a},
j6:function j6(a){this.$ti=a},
dD:function dD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aX:function aX(){},
cb:function cb(){},
ca:function ca(){},
az:function az(){}},P={
mK:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n3()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.aO(new P.hk(t),1)).observe(s,{childList:true})
return new P.hj(t,s,r)}else if(self.setImmediate!=null)return P.n4()
return P.n5()},
mL:function(a){H.im()
self.scheduleImmediate(H.aO(new P.hl(a),0))},
mM:function(a){H.im()
self.setImmediate(H.aO(new P.hm(a),0))},
mN:function(a){P.jk(C.v,a)},
jk:function(a,b){var t=C.b.I(a.a,1000)
return H.mG(t<0?0:t,b)},
mZ:function(a,b){if(H.bb(a,{func:1,args:[P.L,P.L]})){b.toString
return a}else{b.toString
return a}},
mb:function(a,b,c){var t
if(a==null)a=new P.b1()
t=$.v
if(t!==C.d)t.toString
t=new P.G(0,t,null,[c])
t.bp(a,b)
return t},
mc:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.G(0,$.v,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.ew(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b1(new P.ev(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.G(0,$.v,null,[null])
l.bo(C.A)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.J(j)
n=H.ag(j)
if(t.b===0||!1)return P.mb(o,n,null)
else{t.c=o
t.d=n}}return s},
kO:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.G))
H.b(b.a===0)
b.a=1
try{a.b1(new P.hD(b),new P.hE(b))}catch(r){t=H.J(r)
s=H.ag(r)
P.nu(new P.hF(b,t,s))}},
hC:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.as()
b.aG(a)
P.b4(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bB(r)}},
b4:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.id(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b4(t.a,b)}s=t.a
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
P.id(null,null,p,o,s)
return}s=$.v
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.v
H.b(l==null?s!=null:l!==s)
j=$.v
$.v=l
i=j}else i=null
s=b.c
if(s===8)new P.hK(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hJ(r,b,m).$0()}else if((s&2)!==0)new P.hI(t,r,b).$0()
if(i!=null){H.b(!0)
$.v=i}s=r.b
if(!!J.q(s).$isZ){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.at(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hC(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.at(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mY:function(){var t,s
for(;t=$.b8,t!=null;){$.bM=null
s=t.b
$.b8=s
if(s==null)$.bL=null
t.a.$0()}},
n1:function(){$.jw=!0
try{P.mY()}finally{$.bM=null
$.jw=!1
if($.b8!=null)$.$get$jr().$1(P.l1())}},
kW:function(a){var t=new P.cJ(a,null)
if($.b8==null){$.bL=t
$.b8=t
if(!$.jw)$.$get$jr().$1(P.l1())}else{$.bL.b=t
$.bL=t}},
n0:function(a){var t,s,r
t=$.b8
if(t==null){P.kW(a)
$.bM=$.bL
return}s=new P.cJ(a,null)
r=$.bM
if(r==null){s.b=t
$.bM=s
$.b8=s}else{s.b=r.b
r.b=s
$.bM=s
if(s.b==null)$.bL=s}},
nu:function(a){var t=$.v
if(C.d===t){P.b9(null,null,C.d,a)
return}t.toString
P.b9(null,null,t,t.aU(a))},
mH:function(a,b){var t=$.v
if(t===C.d){t.toString
return P.jk(a,b)}return P.jk(a,t.aU(b))},
jq:function(a){var t,s
H.b(a!=null)
t=$.v
H.b(a==null?t!=null:a!==t)
s=$.v
$.v=a
return s},
id:function(a,b,c,d,e){var t={}
t.a=d
P.n0(new P.ie(t,e))},
kU:function(a,b,c,d){var t,s
if($.v===c)return d.$0()
t=P.jq(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.v=s}},
kV:function(a,b,c,d,e){var t,s
if($.v===c)return d.$1(e)
t=P.jq(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
n_:function(a,b,c,d,e,f){var t,s
if($.v===c)return d.$2(e,f)
t=P.jq(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.v=s}},
b9:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aU(d):c.e0(d)
P.kW(d)},
hk:function hk(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
Z:function Z(){},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ev:function ev(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
j1:function j1(){},
hp:function hp(){},
cK:function cK(a,b){this.a=a
this.$ti=b},
i7:function i7(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b,c,d,e,f){var _=this
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
hz:function hz(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a,b){this.a=a
this.b=b},
hG:function hG(a,b){this.a=a
this.b=b},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(a,b){this.a=a
this.b=b},
fK:function fK(){},
fM:function fM(a){this.a=a},
fN:function fN(a,b){this.a=a
this.b=b},
fL:function fL(){},
jj:function jj(){},
aR:function aR(a,b){this.a=a
this.b=b},
ib:function ib(){},
ie:function ie(a,b){this.a=a
this.b=b},
hY:function hY(){},
i_:function i_(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
kl:function(a,b){return new H.a6(0,null,null,null,null,null,0,[a,b])},
R:function(){return new H.a6(0,null,null,null,null,null,0,[null,null])},
aC:function(a){return H.nd(a,new H.a6(0,null,null,null,null,null,0,[null,null]))},
b6:function(a,b){return new P.hR(0,null,null,null,null,null,0,[a,b])},
aD:function(a,b,c,d){return new P.hP(0,null,null,null,null,null,0,[d])},
ju:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mk:function(a,b,c){var t,s
if(P.jx(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bN()
C.a.l(s,a)
try{P.mX(a,t)}finally{H.b(C.a.gaW(s)===a)
s.pop()}s=P.ky(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eE:function(a,b,c){var t,s,r
if(P.jx(a))return b+"..."+c
t=new P.bt(b)
s=$.$get$bN()
C.a.l(s,a)
try{r=t
r.a=P.ky(r.gY(),a,", ")}finally{H.b(C.a.gaW(s)===a)
s.pop()}s=t
s.a=s.gY()+c
s=t.gY()
return s.charCodeAt(0)==0?s:s},
jx:function(a){var t,s
for(t=0;s=$.$get$bN(),t<s.length;++t)if(a===s[t])return!0
return!1},
mX:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
jc:function(a,b){var t,s
t=P.aD(null,null,null,b)
for(s=J.aQ(a);s.p();)t.l(0,s.gq(s))
return t},
kn:function(a){var t,s,r
t={}
if(P.jx(a))return"{...}"
s=new P.bt("")
try{C.a.l($.$get$bN(),a)
r=s
r.a=r.gY()+"{"
t.a=!0
J.jM(a,new P.eS(t,s))
t=s
t.a=t.gY()+"}"}finally{t=$.$get$bN()
H.b(C.a.gaW(t)===a)
t.pop()}t=s.gY()
return t.charCodeAt(0)==0?t:t},
jd:function(a,b){var t=new P.eO(null,0,0,0,[b])
t.d6(a,b)
return t},
hR:function hR(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hP:function hP(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hQ:function hQ(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hN:function hN(){},
jb:function jb(){},
cd:function cd(){},
l:function l(){},
cf:function cf(){},
eS:function eS(a,b){this.a=a
this.b=b},
b_:function b_(){},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hS:function hS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fz:function fz(){},
fy:function fy(){},
bA:function bA(){},
m7:function(a){var t=J.q(a)
if(!!t.$isat)return t.k(a)
return"Instance of '"+H.br(a)+"'"},
km:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.aQ(a);s.p();)C.a.l(t,s.gq(s))
return t},
kv:function(a,b,c){return new H.eH(a,H.kk(a,!1,!0,!1),null,null)},
ky:function(a,b,c){var t=J.aQ(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
m1:function(a,b){return J.lp(a,b)},
m2:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
m3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bW:function(a){if(a>=10)return""+a
return"0"+a},
ka:function(a,b,c,d,e,f){return new P.aw(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bh(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m7(a)},
lX:function(a){return new P.bT(a)},
j_:function(a){return new P.a4(!1,null,null,a)},
jV:function(a,b,c){return new P.a4(!0,a,b,c)},
fp:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
aG:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
ku:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.aG(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.aG(b,a,c,"end",f))
return b},
z:function(a,b,c,d,e){var t=e!=null?e:J.bg(b)
return new P.eB(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.h7(a)},
jn:function(a){return new P.h5(a)},
cz:function(a){return new P.b3(a)},
ah:function(a){return new P.dK(a)},
c2:function(a){return new P.hy(a)},
j4:function(a,b,c){return new P.eu(a,b,c)},
W:function(a){H.bd(H.e(a))},
af:function af(){},
E:function E(){},
au:function au(a,b){this.a=a
this.b=b},
V:function V(){},
aw:function aw(a){this.a=a},
e_:function e_(){},
e0:function e0(){},
aV:function aV(){},
bT:function bT(a){this.a=a},
b1:function b1(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cs:function cs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eB:function eB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h7:function h7(a){this.a=a},
h5:function h5(a){this.a=a},
b3:function b3(a){this.a=a},
dK:function dK(a){this.a=a},
cy:function cy(){},
dT:function dT(a){this.a=a},
j3:function j3(){},
hy:function hy(a){this.a=a},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
Q:function Q(){},
c9:function c9(){},
h:function h(){},
aZ:function aZ(){},
L:function L(){},
a2:function a2(){},
C:function C(){},
ji:function ji(){},
b2:function b2(){},
n:function n(){},
bt:function bt(a){this.a=a},
jm:function jm(){},
ij:function(a){var t,s,r,q,p
if(a==null)return
t=P.R()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
n9:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jM(a,new P.ig(t))
return t},
na:function(a){var t,s
t=new P.G(0,$.v,null,[null])
s=new P.cK(t,[null])
a.then(H.aO(new P.ih(s),1))["catch"](H.aO(new P.ii(s),1))
return t},
k9:function(){var t=$.k8
if(t==null){t=J.iT(window.navigator.userAgent,"Opera",0)
$.k8=t}return t},
m4:function(){var t,s
t=$.k5
if(t!=null)return t
s=$.k6
if(s==null){s=J.iT(window.navigator.userAgent,"Firefox",0)
$.k6=s}if(s)t="-moz-"
else{s=$.k7
if(s==null){s=!P.k9()&&J.iT(window.navigator.userAgent,"Trident/",0)
$.k7=s}if(s)t="-ms-"
else t=P.k9()?"-o-":"-webkit-"}$.k5=t
return t},
hf:function hf(){},
hh:function hh(a,b){this.a=a
this.b=b},
ig:function ig(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
hX:function hX(){},
S:function S(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
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
eq:function eq(){},
es:function es(){},
a_:function a_(){},
a5:function a5(){},
eA:function eA(){},
eK:function eK(){},
eU:function eU(){},
fb:function fb(){},
fi:function fi(){},
fm:function fm(){},
fn:function fn(){},
fq:function fq(){},
fr:function fr(){},
bs:function bs(){},
fO:function fO(){},
u:function u(){},
fP:function fP(){},
bv:function bv(){},
bw:function bw(){},
h0:function h0(){},
h9:function h9(){},
cV:function cV(){},
cW:function cW(){},
d1:function d1(){},
d2:function d2(){},
db:function db(){},
dc:function dc(){},
dh:function dh(){},
di:function di(){},
dE:function dE(){},
dF:function dF(){},
aS:function aS(){},
fc:function fc(){},
fu:function fu(){},
fv:function fv(){},
fE:function fE(){},
d7:function d7(){},
d8:function d8(){}},W={
m5:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).L(t,a,b,c)
s.toString
t=new H.cI(new W.N(s),new W.e2(),[W.p])
return t.gW(t)},
m6:function(a){return"wheel"},
bj:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lD(a)
if(typeof s==="string")t=a.tagName}catch(r){H.J(r)}return t},
mO:function(a,b){return document.createElement(a)},
aN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kS:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
U:function(a,b,c,d,e){var t=W.kY(new W.hx(c))
t=new W.hw(0,a,b,t,!1,[e])
t.di(a,b,c,!1,e)
return t},
kP:function(a){var t,s
t=document.createElement("a")
s=new W.i1(t,window.location)
s=new W.by(s)
s.dj(a)
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
kT:function(){var t=P.n
t=new W.i8(P.jc(C.q,t),P.aD(null,null,null,t),P.aD(null,null,null,t),P.aD(null,null,null,t),null)
t.dn(null,new H.bn(C.q,new W.i9(),[H.ao(C.q,0),null]),["TEMPLATE"],null)
return t},
mV:function(a){var t
if(!!J.q(a).$isav)return a
t=new P.hg([],[],!1)
t.c=!0
return t.b2(a)},
kY:function(a){var t=$.v
if(t===C.d)return a
return t.e1(a)},
i:function i(){},
bS:function bS(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
aq:function aq(){},
bU:function bU(){},
dH:function dH(){},
as:function as(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
aT:function aT(){},
dP:function dP(){},
X:function X(){},
aU:function aU(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dU:function dU(){},
dV:function dV(){},
bX:function bX(){},
av:function av(){},
dW:function dW(){},
bY:function bY(){},
dX:function dX(){},
bZ:function bZ(){},
c_:function c_(){},
c0:function c0(){},
dY:function dY(){},
dZ:function dZ(){},
Y:function Y(){},
e2:function e2(){},
f:function f(){},
d:function d(){},
eo:function eo(){},
ep:function ep(){},
et:function et(){},
ey:function ey(){},
c6:function c6(){},
ez:function ez(){},
bk:function bk(){},
c7:function c7(){},
c8:function c8(){},
bl:function bl(){},
aB:function aB(){},
eQ:function eQ(){},
eR:function eR(){},
eW:function eW(){},
eY:function eY(){},
bo:function bo(){},
eZ:function eZ(){},
K:function K(){},
N:function N(a){this.a=a},
p:function p(){},
cn:function cn(){},
bq:function bq(){},
a8:function a8(){},
fl:function fl(){},
fo:function fo(){},
cr:function cr(){},
cu:function cu(){},
fx:function fx(){},
aj:function aj(){},
fB:function fB(){},
fD:function fD(){},
a9:function a9(){},
fI:function fI(){},
fJ:function fJ(a){this.a=a},
cB:function cB(){},
fQ:function fQ(){},
fR:function fR(){},
bu:function bu(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
aH:function aH(){},
fZ:function fZ(){},
h_:function h_(){},
cH:function cH(){},
aI:function aI(){},
h8:function h8(){},
ha:function ha(){},
hb:function hb(){},
hc:function hc(){},
aK:function aK(){},
bx:function bx(){},
he:function he(a){this.a=a},
jp:function jp(){},
hq:function hq(){},
hr:function hr(){},
hM:function hM(){},
cZ:function cZ(){},
i4:function i4(){},
i5:function i5(){},
hn:function hn(){},
hs:function hs(a){this.a=a},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
js:function js(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hw:function hw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hx:function hx(a){this.a=a},
by:function by(a){this.a=a},
m:function m(){},
cp:function cp(a){this.a=a},
f9:function f9(a){this.a=a},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
i2:function i2(){},
i3:function i3(){},
i8:function i8(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i9:function i9(){},
i6:function i6(){},
c4:function c4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
co:function co(){},
jf:function jf(){},
jo:function jo(){},
i1:function i1(a,b){this.a=a
this.b=b},
dj:function dj(a){this.a=a},
ia:function ia(a){this.a=a},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cT:function cT(){},
cU:function cU(){},
cX:function cX(){},
cY:function cY(){},
d_:function d_(){},
d0:function d0(){},
d3:function d3(){},
d4:function d4(){},
bG:function bG(){},
bH:function bH(){},
d5:function d5(){},
d6:function d6(){},
da:function da(){},
dd:function dd(){},
de:function de(){},
bI:function bI(){},
bJ:function bJ(){},
df:function df(){},
dg:function dg(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){}},B={
nv:function(a){var t,s
t=document
s=W.aB
W.U(t,"keydown",new B.iI(),!1,s)
W.U(t,"keyup",new B.iJ(),!1,s)
if(!$.nw)W.U(t,"mousemove",new B.iK(),!1,W.K)
s=W.K
W.U(t,"mousedown",new B.iL(),!1,s)
W.U(t,"mouseup",new B.iM(),!1,s)},
mq:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$ik()
r=$.$get$bP()
q=new T.a7(new Float32Array(16))
q.an()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fd(a,b,c,0,new T.A(t),-0.02,s,r,q,new T.A(p),new T.A(o),new T.A(n),new T.A(new Float32Array(3)),"camera:orbit",!1,!0)
t.d7(a,b,c,d)
return t},
iI:function iI(){},
iJ:function iJ(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
fd:function fd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fe:function fe(a){this.a=a},
ff:function ff(a){this.a=a},
fg:function fg(){},
fh:function fh(a){this.a=a}},G={
mJ:function(a){var t,s,r
t=H.B(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ai(t,"\n")},
kN:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bV(a,b)
t.ba(a,s,c)
t.bS(a,s)
r=t.b6(a,s,35713)
if(r!=null&&!r){q=t.b5(a,s)
P.W("E:Compilation failed:")
P.W("E:"+G.mJ(c))
P.W("E:Failure:")
P.W(C.h.a2("E:",q))
throw H.c(q)}return s},
ke:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iW(a[s])
b[t+1]=J.iX(a[s])
b[t+2]=J.jN(a[s])}return b},
m9:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iW(a[s])
b[t+1]=J.iX(a[s])}return b},
ma:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iW(a[s])
b[t+1]=J.iX(a[s])
b[t+2]=J.jN(a[s])
b[t+3]=J.lE(a[s])}return b},
m8:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aP(a[s],0)
b[t+1]=J.aP(a[s],1)
b[t+2]=J.aP(a[s],2)
b[t+3]=J.aP(a[s],3)}return b},
mP:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gC(t),s=s.gv(s),r=b.x,q=[[P.h,P.x]],p=[P.V],o=[T.al],n=[T.A],m=[T.ac];s.p();){l=s.gq(s)
if(!r.E(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.l4>0)H.bd("I: "+l)
continue}k=t.h(0,l)
switch($.$get$O().h(0,l).a){case"vec2":b.a6(l,G.m9(H.dx(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.a6(l,G.ke(H.dx(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.a6(l,G.ma(H.dx(k,"$ish",o,"$ash"),null),4)
break
case"float":b.a6(l,new Float32Array(H.ic(H.dx(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.a6(l,G.m8(H.dx(k,"$ish",q,"$ash"),null),4)
break
default:if(H.ae(!1))H.am("unknown type for "+H.e(l)+" ["+J.lC(k[0]).k(0)+"] ["+new H.ak(H.ir(k),null).k(0)+"] "+H.e(k))}}},
mA:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aD(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.lq(b.a)
o=G.kN(b.a,35633,s)
J.jJ(b.a,p,o)
n=G.kN(b.a,35632,r)
J.jJ(b.a,p,n)
if(q.length>0)J.lO(b.a,p,q,35980)
J.lI(b.a,p)
if(!J.lH(b.a,p,35714))H.D(J.lG(b.a,p))
t=new G.ft(b,c,d,p,P.jc(c.c,null),P.R(),P.R(),t,null,a,!1,!0)
t.d8(a,b,c,d)
return t},
kw:function(a){return new G.fA(a,null,[],[],[],[],0,P.R())},
f_:function f_(){},
h4:function h4(){},
dG:function dG(){},
dJ:function dJ(a,b){this.a=a
this.b=b},
em:function em(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eX:function eX(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fj:function fj(){},
ft:function ft(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fA:function fA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fC:function fC(){}},R={cq:function cq(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
_.fy=a
_.go=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=g
_.cx=h
_.cy=i
_.db=j
_.d=k
_.a=l
_.b=m
_.c=n},fG:function fG(){},fH:function fH(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mp:function(a){var t,s
t=new P.G(0,$.v,null,[null])
s=new XMLHttpRequest()
C.w.eF(s,"GET",a)
W.U(s,"loadend",new D.eP(new P.cK(t,[null]),s),!1,W.nJ)
C.w.F(s,"")
return t},
eP:function eP(a,b){this.a=a
this.b=b}},A={
is:function(a){var t,s
t=C.X.en(a,0,new A.it())
s=536870911&t+(C.b.ct(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
it:function it(){}},T={
mI:function(a,b,c){var t=new T.A(new Float32Array(3))
t.ao(a,b,c)
return t},
a7:function a7(a){this.a=a},
ac:function ac(a){this.a=a},
A:function A(a){this.a=a},
al:function al(a){this.a=a},
np:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t={}
s=document
r=new R.fH(0,0,null,null,null,null)
r.da(C.p.cz(s,"stats"),"blue","gray")
q=C.p.eH(s,"#webgl-canvas")
p=new G.dJ(null,q)
s=(q&&C.J).cw(q,"webgl2",P.aC(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.D(P.c2('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.lF(s))
if($.l4>0)P.W("I: "+o)
J.lo(s,0,0,0,1)
J.dz(s,2929)
n=B.mq(25,0,0,q)
s=new T.a7(new Float32Array(16))
s.an()
o=new T.a7(new Float32Array(16))
o.an()
m=new R.cq(q,p,n,50,1,0.1,1000,s,o,new T.a7(new Float32Array(16)),P.R(),"perspective",!1,!0)
m.bj()
m.c9(null)
W.U(window,"resize",m.geL(),!1,W.f)
l=G.mA("demo",p,$.$get$l3(),$.$get$l2())
t.a=null
k=new G.eV(P.R(),"mat",!1,!0)
k.X("cDepthTest",!0)
k.X("cDepthWrite",!0)
k.X("cBlendEquation",$.$get$jW())
k.X("cStencilFunc",$.$get$kx())
k.X("uColor",$.$get$k2())
s=new Float32Array(16)
o=new T.a7(s)
o.an()
j=Math.cos(1.5707963267948966)
i=Math.sin(1.5707963267948966)
h=s[4]
g=s[8]
f=s[5]
e=s[9]
d=s[6]
c=s[10]
b=s[7]
a=s[11]
a0=-i
s[4]=h*j+g*i
s[5]=f*j+e*i
s[6]=d*j+c*i
s[7]=b*j+a*i
s[8]=h*a0+g*j
s[9]=f*a0+e*j
s[10]=d*a0+c*j
s[11]=b*a0+a*j
k.X("uModelMatrix",o)
t.b=0
P.mc([D.mp($.l9)],null,!1).b0(new T.iF(t,l,new T.iE(t,n,l,m,k,r)))},
iE:function iE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
iF:function iF(a,b,c){this.a=a
this.b=b
this.c=c}},Y={
md:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.ex(!1,[],[],[],P.R())
t.bf("aTexUV")
t.bf("aNormal")
s=P.R()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.kv("\\s+",!0,!1)
l=P.kv("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.I)(r),++j){i=r[j]
i.toString
h=H.ny(i,m," ")
g=H.nA(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
h=f[0]
if(J.y(h,"g"))s.i(0,f[1],q.length)
else if(J.y(h,"v")){h=H.aF(f[1],null)
e=H.aF(f[2],null)
d=H.aF(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.A(c))}else if(J.y(h,"vt")){h=H.aF(f[1],null)
e=H.aF(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.ac(d))}else if(J.y(h,"vn")){h=H.aF(f[1],null)
e=H.aF(f[2],null)
d=H.aF(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.A(c))}else if(J.y(h,"f")){h=f.length
if(h!==4&&h!==5){H.bd("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.lL(f[a1],"/")
H.b(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.jh(a2[0],null,null)-1
a4=J.y(a2[1],"")?-1:H.jh(a2[1],null,null)-1
a5=J.y(a2[2],"")?-1:H.jh(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.A(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.bd("problem uv "+a1+" "+a4)
C.a.l(a0,new T.ac(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.bd("problem normals "+a1+" "+a5)
C.a.l(a,new T.A(new Float32Array(3)))}}if(h===4)t.cY(b)
else t.cZ(b)
t.cW("aNormal",a)
t.cV("aTexUV",a0)}}P.W("loaded ("+P.ka(0,0,0,Date.now()-new P.au(n,!1).a,0,0).k(0)+") "+t.k(0))
return t}}
var v=[C,H,J,P,W,B,G,R,D,A,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.j7.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aE(a)},
k:function(a){return"Instance of '"+H.br(a)+"'"},
gA:function(a){return new H.ak(H.ir(a),null)}}
J.eG.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.ar},
$isaf:1}
J.cc.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.al},
$isL:1}
J.bm.prototype={
gu:function(a){return 0},
gA:function(a){return C.ak},
k:function(a){return String(a)},
$iski:1}
J.fk.prototype={}
J.aJ.prototype={}
J.aA.prototype={
k:function(a){var t=a[$.$get$k4()]
return t==null?this.cR(a):J.bh(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj5:1}
J.ax.prototype={
l:function(a,b){if(!!a.fixed$length)H.D(P.t("add"))
a.push(b)},
K:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.D(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.I)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.D(P.ah(a)))
a.push(q)}},
c7:function(a,b){return new H.bn(a,b,[H.ao(a,0),null])},
ai:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gem:function(a){if(a.length>0)return a[0]
throw H.c(H.eF())},
gaW:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eF())},
b9:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.D(P.t("setRange"))
P.ku(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.D(P.aG(e,0,null,"skipCount",null))
s=J.P(d)
if(e+t>s.gj(d))throw H.c(H.ml())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bJ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ah(a))}return!1},
cL:function(a,b){if(!!a.immutable$list)H.D(P.t("sort"))
H.mE(a,P.nb())},
aC:function(a){return this.cL(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.y(a[t],b))return!0
return!1},
k:function(a){return P.eE(a,"[","]")},
gv:function(a){return new J.dD(a,a.length,0,null,[H.ao(a,0)])},
gu:function(a){return H.aE(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.D(P.t("set length"))
if(b<0)throw H.c(P.aG(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.an(a,b))
if(b>=a.length||b<0)throw H.c(H.an(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.D(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.an(a,b))
if(b>=a.length||b<0)throw H.c(H.an(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isj:1,
$ish:1}
J.j6.prototype={}
J.dD.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.I(t))
r=this.c
if(r>=s){this.sbk(null)
return!1}this.sbk(t[r]);++this.c
return!0},
sbk:function(a){this.d=a}}
J.aX.prototype={
O:function(a,b){var t
if(typeof b!=="number")throw H.c(H.H(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gav(b)
if(this.gav(a)===t)return 0
if(this.gav(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gav:function(a){return a===0?1/a<0:a<0},
e3:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
e4:function(a,b,c){if(this.O(b,c)>0)throw H.c(H.H(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
eT:function(a,b){var t
if(b>20)throw H.c(P.aG(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gav(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a2:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a+b},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a-b},
cu:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a*b},
aF:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bF(a,b)},
I:function(a,b){return(a|0)===a?a/b|0:this.bF(a,b)},
bF:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aR:function(a,b){var t
if(a>0)t=this.dR(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dR:function(a,b){return b>31?0:a>>>b},
ct:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return(a&b)>>>0},
cT:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return(a^b)>>>0},
aB:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a<b},
aA:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a>b},
cv:function(a,b){if(typeof b!=="number")throw H.c(H.H(b))
return a>=b},
gA:function(a){return C.au},
$isE:1,
$asE:function(){return[P.a2]},
$isV:1,
$isa2:1}
J.cb.prototype={
gA:function(a){return C.at},
$isx:1}
J.ca.prototype={
gA:function(a){return C.as}}
J.az.prototype={
bR:function(a,b){if(b<0)throw H.c(H.an(a,b))
if(b>=a.length)H.D(H.an(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(b>=a.length)throw H.c(H.an(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.c(P.jV(b,null,null))
return a+b},
cM:function(a,b){var t=H.B(a.split(b),[P.n])
return t},
cN:function(a,b,c){var t
if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bb:function(a,b){return this.cN(a,b,0)},
aD:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fp(b,null,null))
if(b>c)throw H.c(P.fp(b,null,null))
if(c>a.length)throw H.c(P.fp(c,null,null))
return a.substring(b,c)},
cO:function(a,b){return this.aD(a,b,null)},
eS:function(a){return a.toLowerCase()},
eV:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.a7(t,0)===133){r=J.mn(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.bR(t,q)===133?J.mo(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
e7:function(a,b,c){if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
return H.nx(a,b,c)},
O:function(a,b){var t
if(typeof b!=="string")throw H.c(H.H(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.an(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isE:1,
$asE:function(){return[P.n]},
$isn:1}
H.j.prototype={}
H.aY.prototype={
gv:function(a){return new H.ce(this,this.gj(this),0,null,[H.a1(this,"aY",0)])},
ay:function(a,b){return this.cQ(0,b)},
eR:function(a,b){var t,s
t=H.B([],[H.a1(this,"aY",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
eQ:function(a){return this.eR(a,!0)}}
H.ce.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.P(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.ah(t))
q=this.c
if(q>=r){this.sa9(null)
return!1}this.sa9(s.t(t,q));++this.c
return!0},
sa9:function(a){this.d=a}}
H.cg.prototype={
gv:function(a){return new H.eT(null,J.aQ(this.a),this.b,this.$ti)},
gj:function(a){return J.bg(this.a)},
$asQ:function(a,b){return[b]}}
H.e1.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.eT.prototype={
p:function(){var t=this.b
if(t.p()){this.sa9(this.c.$1(t.gq(t)))
return!0}this.sa9(null)
return!1},
gq:function(a){return this.a},
sa9:function(a){this.a=a},
$asc9:function(a,b){return[b]}}
H.bn.prototype={
gj:function(a){return J.bg(this.a)},
t:function(a,b){return this.b.$1(J.lx(this.a,b))},
$asj:function(a,b){return[b]},
$asaY:function(a,b){return[b]},
$asQ:function(a,b){return[b]}}
H.cI.prototype={
gv:function(a){return new H.hd(J.aQ(this.a),this.b,this.$ti)}}
H.hd.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aW.prototype={}
H.iN.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iO.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hU.prototype={
sey:function(a){this.z=a},
seB:function(a){this.ch=a}}
H.b5.prototype={
dk:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.ds(s,t)},
bI:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aT()},
eK:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.aj(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.by();++r.d}this.y=!1}this.aT()},
dV:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eJ:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.D(P.t("removeRange"))
P.ku(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cI:function(a,b){if(!this.r.w(0,a))return
this.db=b},
er:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.F(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jd(null,null)
this.cx=t}t.P(0,new H.hO(a,c))},
eq:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aw()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jd(null,null)
this.cx=t}t.P(0,this.gez())},
es:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.W(a)
if(b!=null)P.W(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bh(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bz(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.F(0,s)},
ad:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.J(o)
p=H.ag(o)
this.es(q,p)
if(this.db){this.aw()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n6(r)
u.globalState.d=H.jC(t,"$isb5")
if(t!=null)$=t.gex()
if(this.cx!=null)for(;n=this.cx,!n.gah(n);)this.cx.c8().$0()}return s},
c6:function(a){return this.b.h(0,a)},
ds:function(a,b){var t=this.b
if(t.E(0,a))throw H.c(P.c2("Registry: ports must be registered only once."))
t.i(0,a,b)},
aT:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aw()},
aw:function(){var t,s,r
t=this.cx
if(t!=null)t.S(0)
for(t=this.b,s=t.gcp(t),s=s.gv(s);s.p();)s.gq(s).du()
t.S(0)
this.c.S(0)
u.globalState.z.aj(0,this.a)
this.dx.S(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].F(0,t[r+1])
this.ch=null}},
gex:function(){return this.d},
ge8:function(){return this.e}}
H.hO.prototype={
$0:function(){this.a.F(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.ht.prototype={
ee:function(){var t=this.a
if(t.b===t.c)return
return t.c8()},
cb:function(){var t,s,r
t=this.ee()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gah(s)}else s=!1
else s=!1
else s=!1
if(s)H.D(P.c2("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gah(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aC(["command","close"])
r=new H.a0(!0,P.b6(null,P.x)).J(r)
s.toString
self.postMessage(r)}return!1}t.eG()
return!0},
bD:function(){if(self.window!=null)new H.hu(this).$0()
else for(;this.cb(););},
ak:function(){var t,s,r,q,p
if(!u.globalState.x)this.bD()
else try{this.bD()}catch(r){t=H.J(r)
s=H.ag(r)
q=u.globalState.Q
p=P.aC(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a0(!0,P.b6(null,P.x)).J(p)
q.toString
self.postMessage(p)}}}
H.hu.prototype={
$0:function(){if(!this.a.cb())return
P.mH(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aM.prototype={
eG:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ad(this.b)}}
H.hT.prototype={}
H.eC.prototype={
$0:function(){H.mh(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eD.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bb(s,{func:1,args:[P.L,P.L]}))s.$2(this.e,this.d)
else if(H.bb(s,{func:1,args:[P.L]}))s.$1(this.e)
else s.$0()}t.aT()},
$S:function(){return{func:1,v:true}}}
H.ho.prototype={}
H.b7.prototype={
F:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mU(b)
if(t.ge8()===s){s=J.P(r)
switch(s.h(r,0)){case"pause":t.bI(s.h(r,1),s.h(r,2))
break
case"resume":t.eK(s.h(r,1))
break
case"add-ondone":t.dV(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eJ(s.h(r,1))
break
case"set-errors-fatal":t.cI(s.h(r,1),s.h(r,2))
break
case"ping":t.er(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eq(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aj(0,s)
break}return}u.globalState.f.a.P(0,new H.aM(t,new H.hW(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b7){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hW.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dq(0,this.b)},
$S:function(){return{func:1}}}
H.bK.prototype={
F:function(a,b){var t,s,r
t=P.aC(["command","message","port",this,"msg",b])
s=new H.a0(!0,P.b6(null,P.x)).J(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bK){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cT((this.b<<16^this.a<<8)>>>0,this.c)}}
H.ct.prototype={
du:function(){this.c=!0
this.b=null},
dq:function(a,b){if(this.c)return
this.b.$1(b)},
$ismy:1}
H.fW.prototype={
dc:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.P(0,new H.aM(s,new H.fX(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.im()
this.c=self.setTimeout(H.aO(new H.fY(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.fX.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fY.prototype={
$0:function(){var t=this.a
t.c=null
H.iD()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gu:function(a){var t=this.a
t=C.b.aR(t,0)^C.b.I(t,4294967296)
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
H.a0.prototype={
J:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.q(a)
if(!!t.$isbp)return["buffer",a]
if(!!t.$isb0)return["typed",a]
if(!!t.$iso)return this.cE(a)
if(!!t.$isme){r=this.gcB()
q=t.gC(a)
q=H.je(q,r,H.a1(q,"Q",0),null)
q=P.km(q,!0,H.a1(q,"Q",0))
t=t.gcp(a)
t=H.je(t,r,H.a1(t,"Q",0),null)
return["map",q,P.km(t,!0,H.a1(t,"Q",0))]}if(!!t.$iski)return this.cF(a)
if(!!t.$isa)this.cn(a)
if(!!t.$ismy)this.al(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb7)return this.cG(a)
if(!!t.$isbK)return this.cH(a)
if(!!t.$isat){p=a.$static_name
if(p==null)this.al(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.C))this.cn(a)
return["dart",u.classIdExtractor(a),this.cD(u.classFieldsExtractor(a))]},
al:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cn:function(a){return this.al(a,null)},
cE:function(a){var t
H.b(typeof a!=="string")
t=this.cC(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.al(a,"Can't serialize indexable: ")},
cC:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.J(a[s])
return t},
cD:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.J(a[t]))
return a},
cF:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.al(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.J(a[t[r]])
return["js-object",t,s]},
cH:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cG:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aL.prototype={
T:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.j_("Bad serialized message: "+H.e(a)))
switch(C.a.gem(a)){case"ref":H.b(J.y(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.y(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.y(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.y(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.ay(H.B(this.ac(t),[null]))
case"extendable":H.b(J.y(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.B(this.ac(t),[null])
case"mutable":H.b(J.y(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ac(t)
case"const":H.b(J.y(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.ay(H.B(this.ac(t),[null]))
case"map":return this.eh(a)
case"sendport":return this.ei(a)
case"raw sendport":H.b(J.y(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eg(a)
case"function":H.b(J.y(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.y(a[0],"capability"))
return new H.ar(a[1])
case"dart":H.b(J.y(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ac(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ac:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.T(a[t]))
return a},
eh:function(a){var t,s,r,q,p
H.b(J.y(a[0],"map"))
t=a[1]
s=a[2]
r=P.R()
C.a.l(this.b,r)
t=J.lJ(t,this.gef()).eQ(0)
for(q=J.P(s),p=0;p<t.length;++p)r.i(0,t[p],this.T(q.h(s,p)))
return r},
ei:function(a){var t,s,r,q,p,o,n
H.b(J.y(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c6(r)
if(o==null)return
n=new H.b7(o,s)}else n=new H.bK(t,r,s)
C.a.l(this.b,n)
return n},
eg:function(a){var t,s,r,q,p,o
H.b(J.y(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.P(t),p=J.P(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.T(p.h(s,o))
return r}}
H.fs.prototype={}
H.h1.prototype={
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
H.fa.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eJ.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.h6.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iP.prototype={
$1:function(a){if(!!J.q(a).$isaV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.d9.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb2:1}
H.iy.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iz.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iA.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iB.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iC.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.at.prototype={
k:function(a){return"Closure '"+H.br(this).trim()+"'"},
$isj5:1,
geX:function(){return this},
$D:null}
H.fS.prototype={}
H.fF.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bi.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bi))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aE(this.a)
else s=typeof t!=="object"?J.bf(t):H.aE(t)
return(s^H.aE(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.br(t)+"'")}}
H.h3.prototype={
k:function(a){return this.a}}
H.dI.prototype={
k:function(a){return this.a}}
H.fw.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hi.prototype={
k:function(a){return C.h.a2("Assertion failed: ",P.c1(this.a))}}
H.ak.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.bf(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ak){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a6.prototype={
gj:function(a){return this.a},
gah:function(a){return this.a===0},
gC:function(a){return new H.eM(this,[H.ao(this,0)])},
gcp:function(a){return H.je(this.gC(this),new H.eI(this),H.ao(this,0),H.ao(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bv(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bv(s,b)}else return this.eu(b)},
eu:function(a){var t=this.d
if(t==null)return!1
return this.ag(this.ar(t,this.af(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aa(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aa(r,b)
return s==null?null:s.b}else return this.ev(b)},
ev:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ar(t,this.af(a))
r=this.ag(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aO()
this.b=t}this.bm(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aO()
this.c=s}this.bm(s,b,c)}else{r=this.d
if(r==null){r=this.aO()
this.d=r}q=this.af(b)
p=this.ar(r,q)
if(p==null)this.aQ(r,q,[this.aP(b,c)])
else{o=this.ag(p,b)
if(o>=0)p[o].b=c
else p.push(this.aP(b,c))}}},
aj:function(a,b){if(typeof b==="string")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.ew(b)},
ew:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ar(t,this.af(a))
r=this.ag(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bG(q)
return q.b},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aN()}},
ae:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ah(this))
t=t.c}},
bm:function(a,b,c){var t=this.aa(a,b)
if(t==null)this.aQ(a,b,this.aP(b,c))
else t.b=c},
bC:function(a,b){var t
if(a==null)return
t=this.aa(a,b)
if(t==null)return
this.bG(t)
this.bw(a,b)
return t.b},
aN:function(){this.r=this.r+1&67108863},
aP:function(a,b){var t,s
t=new H.eL(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aN()
return t},
bG:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aN()},
af:function(a){return J.bf(a)&0x3ffffff},
ag:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.y(a[s].a,b))return s
return-1},
k:function(a){return P.kn(this)},
aa:function(a,b){return a[b]},
ar:function(a,b){return a[b]},
aQ:function(a,b,c){H.b(c!=null)
a[b]=c},
bw:function(a,b){delete a[b]},
bv:function(a,b){return this.aa(a,b)!=null},
aO:function(){var t=Object.create(null)
this.aQ(t,"<non-identifier-key>",t)
this.bw(t,"<non-identifier-key>")
return t},
$isme:1}
H.eI.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eL.prototype={}
H.eM.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eN(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eN.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.sbl(null)
return!1}else{this.sbl(t.a)
this.c=this.c.c
return!0}}},
sbl:function(a){this.d=a}}
H.iu.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iv.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.iw.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.eH.prototype={
k:function(a){return"RegExp/"+this.a+"/"},
gbA:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.kk(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dD:function(a,b){var t,s
t=this.gbA()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.mT(this,s)}}
H.hV.prototype={
dm:function(a,b){var t,s
t=this.b
s=t.input
H.b(typeof s==="string")
t=t.index
H.b(typeof t==="number"&&Math.floor(t)===t)},
h:function(a,b){return this.b[b]}}
H.bp.prototype={
gA:function(a){return C.ad},
$isbp:1}
H.b0.prototype={$isb0:1}
H.f0.prototype={
gA:function(a){return C.ae}}
H.cj.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.ck.prototype={
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.V]},
$asaW:function(){return[P.V]},
$asl:function(){return[P.V]},
$ish:1,
$ash:function(){return[P.V]}}
H.cl.prototype={
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.x]},
$asaW:function(){return[P.x]},
$asl:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]}}
H.ci.prototype={
gA:function(a){return C.af},
$iser:1}
H.f1.prototype={
gA:function(a){return C.ag}}
H.f2.prototype={
gA:function(a){return C.ah},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f3.prototype={
gA:function(a){return C.ai},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskf:1}
H.f4.prototype={
gA:function(a){return C.aj},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f5.prototype={
gA:function(a){return C.an},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskK:1}
H.f6.prototype={
gA:function(a){return C.ao},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskL:1}
H.cm.prototype={
gA:function(a){return C.ap},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f7.prototype={
gA:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskM:1}
H.bB.prototype={}
H.bC.prototype={}
H.bD.prototype={}
H.bE.prototype={}
P.hk.prototype={
$1:function(a){var t,s
H.iD()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hj.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.im()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hl.prototype={
$0:function(){H.iD()
this.a.$0()},
$S:function(){return{func:1}}}
P.hm.prototype={
$0:function(){H.iD()
this.a.$0()},
$S:function(){return{func:1}}}
P.Z.prototype={}
P.ew.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.H(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.H(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.ev.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bu(r)}else if(t.b===0&&!this.e)this.c.H(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.j1.prototype={}
P.hp.prototype={
e6:function(a,b){if(a==null)a=new P.b1()
if(this.a.a!==0)throw H.c(P.cz("Future already completed"))
$.v.toString
this.H(a,b)},
e5:function(a){return this.e6(a,null)}}
P.cK.prototype={
au:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cz("Future already completed"))
t.bo(b)},
H:function(a,b){this.a.bp(a,b)}}
P.i7.prototype={
au:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cz("Future already completed"))
t.aJ(b)},
H:function(a,b){this.a.H(a,b)}}
P.cS.prototype={
eC:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b_(this.d,a.a)},
ep:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bb(s,{func:1,args:[P.C,P.b2]}))return t.eM(s,a.a,a.b)
else return t.b_(s,a.a)}}
P.G.prototype={
b1:function(a,b){var t,s,r
t=$.v
if(t!==C.d){t.toString
if(b!=null)b=P.mZ(b,t)}s=new P.G(0,t,null,[null])
r=b==null?1:3
this.bn(new P.cS(null,s,r,a,b,[H.ao(this,0),null]))
return s},
b0:function(a){return this.b1(a,null)},
aG:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bn:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jC(this.c,"$iscS")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bn(a)
return}this.aG(t)}H.b(this.a>=4)
t=this.b
t.toString
P.b9(null,null,t,new P.hz(this,a))}},
bB:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bB(a)
return}this.aG(s)}H.b(this.a>=4)
t.a=this.at(a)
s=this.b
s.toString
P.b9(null,null,s,new P.hH(t,this))}},
as:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.at(t)},
at:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aJ:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.bO(a,"$isZ",t,"$asZ")
if(s){t=H.bO(a,"$isG",t,null)
if(t)P.hC(a,this)
else P.kO(a,this)}else{r=this.as()
H.b(this.a<4)
this.a=4
this.c=a
P.b4(this,r)}},
bu:function(a){var t
H.b(this.a<4)
H.b(!J.q(a).$isZ)
t=this.as()
H.b(this.a<4)
this.a=4
this.c=a
P.b4(this,t)},
H:function(a,b){var t
H.b(this.a<4)
t=this.as()
H.b(this.a<4)
this.a=8
this.c=new P.aR(a,b)
P.b4(this,t)},
dw:function(a){return this.H(a,null)},
bo:function(a){var t
H.b(this.a<4)
t=H.bO(a,"$isZ",this.$ti,"$asZ")
if(t){this.dt(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b9(null,null,t,new P.hB(this,a))},
dt:function(a){var t=H.bO(a,"$isG",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b9(null,null,t,new P.hG(this,a))}else P.hC(a,this)
return}P.kO(a,this)},
bp:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.b9(null,null,t,new P.hA(this,a,b))},
$isZ:1,
gaS:function(){return this.a},
gdO:function(){return this.c}}
P.hz.prototype={
$0:function(){P.b4(this.a,this.b)},
$S:function(){return{func:1}}}
P.hH.prototype={
$0:function(){P.b4(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hD.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aJ(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hE.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.H(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hF.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.hB.prototype={
$0:function(){this.a.bu(this.b)},
$S:function(){return{func:1}}}
P.hG.prototype={
$0:function(){P.hC(this.b,this.a)},
$S:function(){return{func:1}}}
P.hA.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.ca(q.d)}catch(n){s=H.J(n)
r=H.ag(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aR(s,r)
p.a=!0
return}if(!!J.q(t).$isZ){if(t instanceof P.G&&t.gaS()>=4){if(t.gaS()===8){q=t
H.b(q.gaS()===8)
p=this.b
p.b=q.gdO()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.b0(new P.hL(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hL.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hJ.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b_(r.d,this.c)}catch(q){t=H.J(q)
s=H.ag(q)
r=this.a
r.b=new P.aR(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hI.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eC(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ep(t)
p.a=!1}}catch(o){s=H.J(o)
r=H.ag(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aR(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cJ.prototype={}
P.fK.prototype={
gj:function(a){var t,s
t={}
s=new P.G(0,$.v,null,[P.x])
t.a=0
this.eA(new P.fM(t),!0,new P.fN(t,s),s.gdv())
return s}}
P.fM.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fN.prototype={
$0:function(){this.b.aJ(this.a.a)},
$S:function(){return{func:1}}}
P.fL.prototype={}
P.jj.prototype={}
P.aR.prototype={
k:function(a){return H.e(this.a)},
$isaV:1}
P.ib.prototype={}
P.ie.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b1()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hY.prototype={
eN:function(a){var t,s,r
try{if(C.d===$.v){a.$0()
return}P.kU(null,null,this,a)}catch(r){t=H.J(r)
s=H.ag(r)
P.id(null,null,this,t,s)}},
eO:function(a,b){var t,s,r
try{if(C.d===$.v){a.$1(b)
return}P.kV(null,null,this,a,b)}catch(r){t=H.J(r)
s=H.ag(r)
P.id(null,null,this,t,s)}},
e0:function(a){return new P.i_(this,a)},
aU:function(a){return new P.hZ(this,a)},
e1:function(a){return new P.i0(this,a)},
h:function(a,b){return},
ca:function(a){if($.v===C.d)return a.$0()
return P.kU(null,null,this,a)},
b_:function(a,b){if($.v===C.d)return a.$1(b)
return P.kV(null,null,this,a,b)},
eM:function(a,b,c){if($.v===C.d)return a.$2(b,c)
return P.n_(null,null,this,a,b,c)}}
P.i_.prototype={
$0:function(){return this.a.ca(this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){return this.a.eN(this.b)},
$S:function(){return{func:1}}}
P.i0.prototype={
$1:function(a){return this.a.eO(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hR.prototype={
af:function(a){return H.nr(a)&0x3ffffff},
ag:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hP.prototype={
gv:function(a){var t=new P.bz(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dz(b)},
dz:function(a){var t=this.d
if(t==null)return!1
return this.aq(t[this.ap(a)],a)>=0},
c6:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dI(a)},
dI:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ap(a)]
r=this.aq(s,a)
if(r<0)return
return J.aP(s,r).gdB()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ju()
this.b=t}return this.br(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ju()
this.c=s}return this.br(s,b)}else return this.P(0,b)},
P:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ju()
this.d=t}s=this.ap(b)
r=t[s]
if(r==null){q=[this.aI(b)]
H.b(q!=null)
t[s]=q}else{if(this.aq(r,b)>=0)return!1
r.push(this.aI(b))}return!0},
aj:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.dJ(0,b)},
dJ:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ap(b)]
r=this.aq(s,b)
if(r<0)return!1
this.bt(s.splice(r,1)[0])
return!0},
S:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aH()}},
br:function(a,b){var t
if(a[b]!=null)return!1
t=this.aI(b)
H.b(!0)
a[b]=t
return!0},
bs:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bt(t)
delete a[b]
return!0},
aH:function(){this.r=this.r+1&67108863},
aI:function(a){var t,s
t=new P.hQ(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aH()
return t},
bt:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aH()},
ap:function(a){return J.bf(a)&0x3ffffff},
aq:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.y(a[s].a,b))return s
return-1}}
P.hQ.prototype={
gdB:function(){return this.a}}
P.bz.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.sa8(null)
return!1}else{this.sa8(t.a)
this.c=this.c.b
return!0}}},
sa8:function(a){this.d=a}}
P.hN.prototype={}
P.jb.prototype={$isj:1}
P.cd.prototype={$isj:1,$ish:1}
P.l.prototype={
gv:function(a){return new H.ce(a,this.gj(a),0,null,[H.a1(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
c7:function(a,b){return new H.bn(a,b,[H.a1(a,"l",0),null])},
en:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.ah(a))}return s},
k:function(a){return P.eE(a,"[","]")}}
P.cf.prototype={}
P.eS.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.b_.prototype={
ae:function(a,b){var t,s
for(t=J.aQ(this.gC(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.bg(this.gC(a))},
k:function(a){return P.kn(a)}}
P.eO.prototype={
d6:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbE(H.B(t,[b]))},
gv:function(a){return new P.hS(this,this.c,this.d,this.b,null,this.$ti)},
gah:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.D(P.z(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
S:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eE(this,"{","}")},
c8:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eF());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
P:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.by();++this.d},
by:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b9(s,0,q,t,r)
C.a.b9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbE(s)},
sbE:function(a){this.a=a}}
P.hS.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.D(P.ah(t))
s=this.d
if(s===this.b){this.sa8(null)
return!1}this.sa8(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa8:function(a){this.e=a}}
P.fz.prototype={
K:function(a,b){var t
for(t=J.aQ(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eE(this,"{","}")},
$isj:1}
P.fy.prototype={}
P.bA.prototype={}
P.af.prototype={}
P.E.prototype={}
P.au.prototype={
geD:function(){return this.a},
d0:function(a,b){var t
if(Math.abs(this.a)<=864e13)t=!1
else t=!0
if(t)throw H.c(P.j_("DateTime is outside valid range: "+this.geD()))},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.b.O(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aR(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m2(H.mx(this))
s=P.bW(H.mv(this))
r=P.bW(H.mr(this))
q=P.bW(H.ms(this))
p=P.bW(H.mu(this))
o=P.bW(H.mw(this))
n=P.m3(H.mt(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.au]}}
P.V.prototype={}
P.aw.prototype={
aB:function(a,b){return C.b.aB(this.a,b.gdA())},
aA:function(a,b){return C.b.aA(this.a,b.gdA())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aw))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.b.O(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e0()
s=this.a
if(s<0)return"-"+new P.aw(0-s).k(0)
r=t.$1(C.b.I(s,6e7)%60)
q=t.$1(C.b.I(s,1e6)%60)
p=new P.e_().$1(s%1e6)
return""+C.b.I(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isE:1,
$asE:function(){return[P.aw]}}
P.e_.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.e0.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.aV.prototype={}
P.bT.prototype={
k:function(a){return"Assertion failed"}}
P.b1.prototype={
k:function(a){return"Throw of null."}}
P.a4.prototype={
gaL:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaK:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaL()+s+r
if(!this.a)return q
p=this.gaK()
o=P.c1(this.b)
return q+p+": "+H.e(o)}}
P.cs.prototype={
gaL:function(){return"RangeError"},
gaK:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eB.prototype={
gaL:function(){return"RangeError"},
gaK:function(){H.b(this.a)
if(J.lh(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.h7.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.h5.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b3.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dK.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.c1(t))+"."}}
P.cy.prototype={
k:function(a){return"Stack Overflow"},
$isaV:1}
P.dT.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.j3.prototype={}
P.hy.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.eu.prototype={
k:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.e(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.h.aD(r,0,75)+"..."
return s+"\n"+r}}
P.e3.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.D(P.jV(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kr(b,"expando$values")
return s==null?null:H.kr(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.Q.prototype={
ay:function(a,b){return new H.cI(this,b,[H.a1(this,"Q",0)])},
gj:function(a){var t,s
H.b(!this.$isj)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
gW:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.c(H.eF())
s=t.gq(t)
if(t.p())throw H.c(H.mm())
return s},
t:function(a,b){var t,s,r
if(b<0)H.D(P.aG(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.z(b,this,"index",null,s))},
k:function(a){return P.mk(this,"(",")")}}
P.c9.prototype={}
P.h.prototype={$isj:1}
P.aZ.prototype={}
P.L.prototype={
gu:function(a){return P.C.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.a2.prototype={$isE:1,
$asE:function(){return[P.a2]}}
P.C.prototype={constructor:P.C,$isC:1,
w:function(a,b){return this===b},
gu:function(a){return H.aE(this)},
k:function(a){return"Instance of '"+H.br(this)+"'"},
gA:function(a){return new H.ak(H.ir(this),null)},
toString:function(){return this.k(this)}}
P.ji.prototype={}
P.b2.prototype={}
P.n.prototype={$isE:1,
$asE:function(){return[P.n]}}
P.bt.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gY:function(){return this.a}}
P.jm.prototype={}
W.i.prototype={}
W.bS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dA.prototype={
gj:function(a){return a.length}}
W.dB.prototype={
k:function(a){return String(a)}}
W.dC.prototype={
k:function(a){return String(a)}}
W.aq.prototype={$isaq:1}
W.bU.prototype={
cw:function(a,b,c){var t=this.dE(a,b,P.n9(c,null))
return t},
dE:function(a,b,c){return a.getContext(b,c)}}
W.dH.prototype={
az:function(a){return P.ij(a.getContextAttributes())}}
W.as.prototype={
gj:function(a){return a.length}}
W.dL.prototype={
gj:function(a){return a.length}}
W.dM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.aT.prototype={
bq:function(a,b){var t,s
t=$.$get$k3()
s=t[b]
if(typeof s==="string")return s
s=this.dS(a,b)
t[b]=s
return s},
dS:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m4()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dP.prototype={}
W.X.prototype={}
W.aU.prototype={}
W.dQ.prototype={
gj:function(a){return a.length}}
W.dR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dS.prototype={
gj:function(a){return a.length}}
W.dU.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bX.prototype={}
W.av.prototype={
dW:function(a,b){return a.adoptNode(b)},
cz:function(a,b){return a.getElementById(b)},
eH:function(a,b){return a.querySelector(b)},
$isav:1}
W.dW.prototype={
k:function(a){return String(a)}}
W.bY.prototype={
eb:function(a,b){return a.createHTMLDocument(b)}}
W.dX.prototype={
gax:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bZ.prototype={
gax:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.c_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.S]},
$isj:1,
$asj:function(){return[P.S]},
$isr:1,
$asr:function(){return[P.S]},
$asl:function(){return[P.S]},
$ish:1,
$ash:function(){return[P.S]},
$asm:function(){return[P.S]}}
W.c0.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga1(a))+" x "+H.e(this.ga_(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isS)return!1
return a.left===t.gc4(b)&&a.top===t.gcc(b)&&this.ga1(a)===t.ga1(b)&&this.ga_(a)===t.ga_(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga1(a)
q=this.ga_(a)
return W.kS(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga_:function(a){return a.height},
gc4:function(a){return a.left},
gcc:function(a){return a.top},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isS:1,
$asS:function(){}}
W.dY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.n]},
$isj:1,
$asj:function(){return[P.n]},
$isr:1,
$asr:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
W.dZ.prototype={
gj:function(a){return a.length}}
W.Y.prototype={
gdZ:function(a){return new W.hs(a)},
k:function(a){return a.localName},
L:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kc
if(t==null){t=H.B([],[W.co])
s=new W.cp(t)
C.a.l(t,W.kP(null))
C.a.l(t,W.kT())
$.kc=s
d=s}else d=t
t=$.kb
if(t==null){t=new W.dj(d)
$.kb=t
c=t}else{t.a=d
c=t}}if($.ai==null){t=document
s=t.implementation
s=(s&&C.K).eb(s,"")
$.ai=s
$.j2=s.createRange()
s=$.ai
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ai.head;(t&&C.L).N(t,r)}t=$.ai
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jC(s,"$isaq")}t=$.ai
if(!!this.$isaq)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ai.body;(t&&C.n).N(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.W,a.tagName)){t=$.j2;(t&&C.D).cA(t,q)
t=$.j2
p=(t&&C.D).e9(t,b)}else{q.innerHTML=b
p=$.ai.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.N(p,s)}t=$.ai.body
if(q==null?t!=null:q!==t)J.jP(q)
c.b8(p)
C.p.dW(document,p)
return p},
ea:function(a,b,c){return this.L(a,b,c,null)},
cK:function(a,b,c,d){a.textContent=null
this.N(a,this.L(a,b,c,d))},
cJ:function(a,b){return this.cK(a,b,null,null)},
a3:function(a,b){return a.getAttribute(b)},
dK:function(a,b){return a.removeAttribute(b)},
$isY:1,
geP:function(a){return a.tagName}}
W.e2.prototype={
$1:function(a){return!!J.q(a).$isY},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dr:function(a,b,c,d){return a.addEventListener(b,H.aO(c,1),!1)}}
W.eo.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c3]},
$isj:1,
$asj:function(){return[W.c3]},
$isr:1,
$asr:function(){return[W.c3]},
$asl:function(){return[W.c3]},
$ish:1,
$ash:function(){return[W.c3]},
$asm:function(){return[W.c3]}}
W.ep.prototype={
gj:function(a){return a.length}}
W.et.prototype={
gj:function(a){return a.length}}
W.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.c6.prototype={}
W.ez.prototype={
gj:function(a){return a.length}}
W.bk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.p]},
$isj:1,
$asj:function(){return[W.p]},
$isr:1,
$asr:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.c7.prototype={}
W.c8.prototype={
f_:function(a,b,c,d,e,f){return a.open(b,c)},
eF:function(a,b,c){return a.open(b,c)},
F:function(a,b){return a.send(b)}}
W.bl.prototype={}
W.aB.prototype={$isaB:1}
W.eQ.prototype={
k:function(a){return String(a)}}
W.eR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.eW.prototype={
gj:function(a){return a.length}}
W.eY.prototype={
eY:function(a,b,c){return a.send(b,c)},
F:function(a,b){return a.send(b)}}
W.bo.prototype={}
W.eZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ch]},
$isj:1,
$asj:function(){return[W.ch]},
$isr:1,
$asr:function(){return[W.ch]},
$asl:function(){return[W.ch]},
$ish:1,
$ash:function(){return[W.ch]},
$asm:function(){return[W.ch]}}
W.K.prototype={$isK:1}
W.N.prototype={
gW:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cz("No elements"))
if(s>1)throw H.c(P.cz("More than one element"))
return t.firstChild},
K:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.N(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lk(t,c,C.B.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.c4(t,t.length,-1,null,[H.a1(t,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.B.h(this.a.childNodes,b)},
$asj:function(){return[W.p]},
$ascd:function(){return[W.p]},
$asl:function(){return[W.p]},
$ash:function(){return[W.p]},
$asbA:function(){return[W.p]}}
W.p.prototype={
eI:function(a){var t=a.parentNode
if(t!=null)J.iQ(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cP(a):t},
N:function(a,b){return a.appendChild(b)},
dL:function(a,b){return a.removeChild(b)},
dM:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
gaY:function(a){return a.previousSibling}}
W.cn.prototype={
aZ:function(a){return a.previousNode()}}
W.bq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.p]},
$isj:1,
$asj:function(){return[W.p]},
$isr:1,
$asr:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.a8.prototype={
gj:function(a){return a.length}}
W.fl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a8]},
$isj:1,
$asj:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$asl:function(){return[W.a8]},
$ish:1,
$ash:function(){return[W.a8]},
$asm:function(){return[W.a8]}}
W.fo.prototype={
F:function(a,b){return a.send(b)}}
W.cr.prototype={
e9:function(a,b){return a.createContextualFragment(b)},
cA:function(a,b){return a.selectNodeContents(b)}}
W.cu.prototype={
F:function(a,b){return a.send(b)}}
W.fx.prototype={
gj:function(a){return a.length}}
W.aj.prototype={}
W.fB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cw]},
$isj:1,
$asj:function(){return[W.cw]},
$isr:1,
$asr:function(){return[W.cw]},
$asl:function(){return[W.cw]},
$ish:1,
$ash:function(){return[W.cw]},
$asm:function(){return[W.cw]}}
W.fD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cx]},
$isj:1,
$asj:function(){return[W.cx]},
$isr:1,
$asr:function(){return[W.cx]},
$asl:function(){return[W.cx]},
$ish:1,
$ash:function(){return[W.cx]},
$asm:function(){return[W.cx]}}
W.a9.prototype={
gj:function(a){return a.length}}
W.fI.prototype={
h:function(a,b){return this.bx(a,b)},
ae:function(a,b){var t,s
for(t=0;!0;++t){s=this.dH(a,t)
if(s==null)return
b.$2(s,this.bx(a,s))}},
gC:function(a){var t=H.B([],[P.n])
this.ae(a,new W.fJ(t))
return t},
gj:function(a){return a.length},
bx:function(a,b){return a.getItem(b)},
dH:function(a,b){return a.key(b)},
$asb_:function(){return[P.n,P.n]}}
W.fJ.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cB.prototype={
L:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=W.m5("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.N(s).K(0,new W.N(t))
return s}}
W.fQ.prototype={
L:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.L(t.createElement("table"),b,c,d)
t.toString
t=new W.N(t)
r=t.gW(t)
r.toString
t=new W.N(r)
q=t.gW(t)
s.toString
q.toString
new W.N(s).K(0,new W.N(q))
return s}}
W.fR.prototype={
L:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aE(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.I.L(t.createElement("table"),b,c,d)
t.toString
t=new W.N(t)
r=t.gW(t)
s.toString
r.toString
new W.N(s).K(0,new W.N(r))
return s}}
W.bu.prototype={$isbu:1}
W.fT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cD]},
$isj:1,
$asj:function(){return[W.cD]},
$isr:1,
$asr:function(){return[W.cD]},
$asl:function(){return[W.cD]},
$ish:1,
$ash:function(){return[W.cD]},
$asm:function(){return[W.cD]}}
W.fU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cC]},
$isj:1,
$asj:function(){return[W.cC]},
$isr:1,
$asr:function(){return[W.cC]},
$asl:function(){return[W.cC]},
$ish:1,
$ash:function(){return[W.cC]},
$asm:function(){return[W.cC]}}
W.fV.prototype={
gj:function(a){return a.length}}
W.aH.prototype={$isaH:1}
W.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cG]},
$isj:1,
$asj:function(){return[W.cG]},
$isr:1,
$asr:function(){return[W.cG]},
$asl:function(){return[W.cG]},
$ish:1,
$ash:function(){return[W.cG]},
$asm:function(){return[W.cG]}}
W.h_.prototype={
gj:function(a){return a.length}}
W.cH.prototype={
aZ:function(a){return a.previousNode()}}
W.aI.prototype={}
W.h8.prototype={
k:function(a){return String(a)}}
W.ha.prototype={
gm:function(a){return a.x},
gD:function(a){return a.z}}
W.hb.prototype={
gj:function(a){return a.length}}
W.hc.prototype={
F:function(a,b){return a.send(b)}}
W.aK.prototype={
ged:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaK:1}
W.bx.prototype={
gdY:function(a){var t,s
t=P.a2
s=new P.G(0,$.v,null,[t])
this.dC(a)
this.dN(a,W.kY(new W.he(new P.i7(s,[t]))))
return s},
dN:function(a,b){return a.requestAnimationFrame(H.aO(b,1))},
dC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.he.prototype={
$1:function(a){this.a.au(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jp.prototype={}
W.hq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bV]},
$isj:1,
$asj:function(){return[W.bV]},
$isr:1,
$asr:function(){return[W.bV]},
$asl:function(){return[W.bV]},
$ish:1,
$ash:function(){return[W.bV]},
$asm:function(){return[W.bV]}}
W.hr.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
w:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isS)return!1
return a.left===t.gc4(b)&&a.top===t.gcc(b)&&a.width===t.ga1(b)&&a.height===t.ga_(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kS(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga_:function(a){return a.height},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c5]},
$isj:1,
$asj:function(){return[W.c5]},
$isr:1,
$asr:function(){return[W.c5]},
$asl:function(){return[W.c5]},
$ish:1,
$ash:function(){return[W.c5]},
$asm:function(){return[W.c5]}}
W.cZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.p]},
$isj:1,
$asj:function(){return[W.p]},
$isr:1,
$asr:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.i4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a9]},
$isj:1,
$asj:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$asl:function(){return[W.a9]},
$ish:1,
$ash:function(){return[W.a9]},
$asm:function(){return[W.a9]}}
W.i5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cA]},
$isj:1,
$asj:function(){return[W.cA]},
$isr:1,
$asr:function(){return[W.cA]},
$asl:function(){return[W.cA]},
$ish:1,
$ash:function(){return[W.cA]},
$asm:function(){return[W.cA]}}
W.hn.prototype={
ae:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.I)(t),++p){o=t[p]
b.$2(o,q.a3(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$ascf:function(){return[P.n,P.n]},
$asb_:function(){return[P.n,P.n]},
gdF:function(){return this.a}}
W.hs.prototype={
h:function(a,b){return J.iY(this.a,b)},
gj:function(a){return this.gC(this).length}}
W.hv.prototype={
eA:function(a,b,c,d){return W.U(this.a,this.b,a,!1,H.ao(this,0))}}
W.js.prototype={}
W.hw.prototype={
di:function(a,b,c,d,e){this.dU()},
dU:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lj(r,this.c,t,!1)}}}
W.hx.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.by.prototype={
dj:function(a){var t,s
t=$.$get$jt()
if(t.gah(t)){for(s=0;s<262;++s)t.i(0,C.V[s],W.ng())
for(s=0;s<12;++s)t.i(0,C.r[s],W.nh())}},
Z:function(a){return $.$get$kQ().B(0,W.bj(a))},
R:function(a,b,c){var t,s,r
t=W.bj(a)
s=$.$get$jt()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gv:function(a){return new W.c4(a,this.gj(a),-1,null,[H.a1(a,"m",0)])}}
W.cp.prototype={
Z:function(a){return C.a.bJ(this.a,new W.f9(a))},
R:function(a,b,c){return C.a.bJ(this.a,new W.f8(a,b,c))}}
W.f9.prototype={
$1:function(a){return a.Z(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.f8.prototype={
$1:function(a){return a.R(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bF.prototype={
dn:function(a,b,c,d){var t,s,r
this.a.K(0,c)
t=b.ay(0,new W.i2())
s=b.ay(0,new W.i3())
this.b.K(0,t)
r=this.c
r.K(0,C.A)
r.K(0,s)},
Z:function(a){return this.a.B(0,W.bj(a))},
R:function(a,b,c){var t,s
t=W.bj(a)
s=this.c
if(s.B(0,H.e(t)+"::"+b))return this.d.dX(c)
else if(s.B(0,"*::"+b))return this.d.dX(c)
else{s=this.b
if(s.B(0,H.e(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.e(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1}}
W.i2.prototype={
$1:function(a){return!C.a.B(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i3.prototype={
$1:function(a){return C.a.B(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i8.prototype={
R:function(a,b,c){if(this.cS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iY(a,"template")==="")return this.e.B(0,b)
return!1}}
W.i9.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.i6.prototype={
Z:function(a){var t=J.q(a)
if(!!t.$isbs)return!1
t=!!t.$isu
if(t&&W.bj(a)==="foreignObject")return!1
if(t)return!0
return!1},
R:function(a,b,c){if(b==="is"||C.h.bb(b,"on"))return!1
return this.Z(a)}}
W.c4.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbz(J.aP(this.a,t))
this.c=t
return!0}this.sbz(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbz:function(a){this.d=a}}
W.co.prototype={}
W.jf.prototype={}
W.jo.prototype={}
W.i1.prototype={}
W.dj.prototype={
b8:function(a){new W.ia(this).$2(a,null)},
ab:function(a,b){if(b==null)J.jP(a)
else J.iQ(b,a)},
dQ:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lA(a)
r=J.iY(s.gdF(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.J(n)}p="element unprintable"
try{p=J.bh(a)}catch(n){H.J(n)}try{o=W.bj(a)
this.dP(a,b,t,p,o,s,r)}catch(n){if(H.J(n) instanceof P.a4)throw n
else{this.ab(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dP:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ab(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.Z(a)){this.ab(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.R(a,"is",g)){this.ab(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gC(f)
s=H.B(t.slice(0),[H.ao(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.R(a,J.lN(p),q.a3(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a3(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a3(t,p)
q.dK(t,p)}}if(!!J.q(a).$isbu)this.b8(a.content)}}
W.ia.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ab(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lB(t)}catch(q){H.J(q)
r=t
J.iQ(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.p,W.p]}}}
W.cL.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.d_.prototype={}
W.d0.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.bG.prototype={}
W.bH.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.da.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.bI.prototype={}
W.bJ.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
P.hf.prototype={
c3:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
b2:function(a){var t,s,r,q,p,o,n,m,l,k
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.au(s,!0)
r.d0(s,!0)
return r}if(a instanceof RegExp)throw H.c(P.jn("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.na(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.c3(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.R()
t.a=o
r[p]=o
this.eo(a,new P.hh(t,this))
return t.a}if(a instanceof Array){n=a
p=this.c3(n)
r=this.b
o=r[p]
if(o!=null)return o
m=J.P(n)
l=m.gj(n)
o=this.c?new Array(l):n
r[p]=o
for(r=J.bc(o),k=0;k<l;++k)r.i(o,k,this.b2(m.h(n,k)))
return o}return a}}
P.hh.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b2(b)
J.li(t,a,s)
return s},
$S:function(a,b){return{func:1,args:[,,]}}}
P.ig.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hg.prototype={
eo:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.I)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.ih.prototype={
$1:function(a){return this.a.au(0,a)},
$S:function(a){return{func:1,args:[,]}}}
P.ii.prototype={
$1:function(a){return this.a.e5(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hX.prototype={}
P.S.prototype={}
P.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e8.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ea.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.ei.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a_.prototype={}
P.a5.prototype={}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.ja]},
$asl:function(){return[P.ja]},
$ish:1,
$ash:function(){return[P.ja]},
$asm:function(){return[P.ja]}}
P.eU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jg]},
$asl:function(){return[P.jg]},
$ish:1,
$ash:function(){return[P.jg]},
$asm:function(){return[P.jg]}}
P.fi.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fm.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fn.prototype={
gj:function(a){return a.length}}
P.fq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bs.prototype={$isbs:1}
P.fO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
P.u.prototype={
L:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.co])
C.a.l(t,W.kP(null))
C.a.l(t,W.kT())
C.a.l(t,new W.i6())
c=new W.dj(new W.cp(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).ea(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.N(q)
o=t.gW(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.N(p,r)
return p},
$isu:1}
P.fP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bv.prototype={}
P.bw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.U(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
U:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.jl]},
$asl:function(){return[P.jl]},
$ish:1,
$ash:function(){return[P.jl]},
$asm:function(){return[P.jl]}}
P.h9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cV.prototype={}
P.cW.prototype={}
P.d1.prototype={}
P.d2.prototype={}
P.db.prototype={}
P.dc.prototype={}
P.dh.prototype={}
P.di.prototype={}
P.dE.prototype={
gj:function(a){return a.length}}
P.dF.prototype={
gj:function(a){return a.length}}
P.aS.prototype={}
P.fc.prototype={
gj:function(a){return a.length}}
P.fu.prototype={
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bS:function(a,b){return a.compileShader(b)},
bT:function(a){return a.createBuffer()},
bU:function(a){return a.createProgram()},
bV:function(a,b){return a.createShader(b)},
bX:function(a,b){return a.depthMask(b)},
bY:function(a,b){return a.disable(b)},
bZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
c_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c0:function(a,b){return a.enable(b)},
c1:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.ij(a.getContextAttributes())},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fv.prototype={
e_:function(a,b){return a.beginTransformFeedback(b)},
e2:function(a,b){return a.bindVertexArray(b)},
ec:function(a){return a.createVertexArray()},
ej:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ek:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
el:function(a){return a.endTransformFeedback()},
eU:function(a,b,c,d){this.dT(a,b,c,d)
return},
dT:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eW:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bH:function(a,b){return a.activeTexture(b)},
bK:function(a,b,c){return a.attachShader(b,c)},
bL:function(a,b,c){return a.bindBuffer(b,c)},
bM:function(a,b,c){return a.bindTexture(b,c)},
bN:function(a,b){return a.blendEquation(b)},
bO:function(a,b,c){return a.blendFunc(b,c)},
bP:function(a,b,c,d){return a.bufferData(b,c,d)},
bQ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bS:function(a,b){return a.compileShader(b)},
bT:function(a){return a.createBuffer()},
bU:function(a){return a.createProgram()},
bV:function(a,b){return a.createShader(b)},
bX:function(a,b){return a.depthMask(b)},
bY:function(a,b){return a.disable(b)},
bZ:function(a,b,c,d){return a.drawArrays(b,c,d)},
c_:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c0:function(a,b){return a.enable(b)},
c1:function(a,b){return a.enableVertexAttribArray(b)},
az:function(a){return P.ij(a.getContextAttributes())},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c5:function(a,b){return a.linkProgram(b)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cd:function(a,b,c){return a.uniform1f(b,c)},
ce:function(a,b,c){return a.uniform1fv(b,c)},
cf:function(a,b,c){return a.uniform1i(b,c)},
cg:function(a,b,c){return a.uniform1iv(b,c)},
ci:function(a,b,c){return a.uniform2fv(b,c)},
cj:function(a,b,c){return a.uniform3fv(b,c)},
ck:function(a,b,c){return a.uniform4fv(b,c)},
cl:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cm:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
co:function(a,b){return a.useProgram(b)},
cq:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cs:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return P.ij(this.dG(a,b))},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dG:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.aZ]},
$asl:function(){return[P.aZ]},
$ish:1,
$ash:function(){return[P.aZ]},
$asm:function(){return[P.aZ]}}
P.d7.prototype={}
P.d8.prototype={}
B.iI.prototype={
$1:function(a){$.$get$ik().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aB]}}}
B.iJ.prototype={
$1:function(a){$.$get$ik().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aB]}}}
B.iK.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.n7=t
$.n8=C.b.a5(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jF=s-C.b.I(window.innerWidth,2)
$.la=-(t-C.b.I(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.K]}}}
B.iL.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bQ=t-C.b.I(window.innerWidth,2)
$.bR=-(s-C.b.I(window.innerHeight,2))
if(a.button===2)$.$get$bP().i(0,"right",!0)
else $.$get$bP().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.K]}}}
B.iM.prototype={
$1:function(a){if(a.button===2)$.$get$bP().i(0,"right",null)
else $.$get$bP().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.K]}}}
B.fd.prototype={
d7:function(a,b,c,d){var t
d.toString
W.U(d,W.m6(d),new B.fe(this),!1,W.aK)
W.U(d,"mousemove",new B.ff(this),!1,W.K)
t=W.aH
W.U(d,"touchstart",new B.fg(),!1,t)
W.U(d,"touchmove",new B.fh(this),!1,t)
B.nv(null)}}
B.fe.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.av.ged(a)*r.k3
if(C.c.a5(r.fy,t)>0)r.fy=C.c.a5(r.fy,t)}catch(q){s=H.J(q)
P.W(s)}},
$S:function(a){return{func:1,args:[W.aK]}}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a5($.jF,$.bQ)*0.01
s=t.id
r=$.bR
q=$.la
t.id=s+(r-q)*0.01
$.bQ=$.jF
$.bR=q}},
$S:function(a){return{func:1,args:[W.K]}}}
B.fg.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a0(t.clientX)
C.c.a0(t.clientY)
$.bQ=s
C.c.a0(t.clientX)
$.bR=C.c.a0(t.clientY)},
$S:function(a){return{func:1,args:[W.aH]}}}
B.fh.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a0(t.clientX)
t=C.c.a0(t.clientY)
r=this.a
r.go=r.go+C.b.a5(s,$.bQ)*0.01
r.id=r.id+($.bR-t)*0.01
$.bQ=s
$.bR=t},
$S:function(a){return{func:1,args:[W.aH]}}}
G.f_.prototype={}
G.h4.prototype={
X:function(a,b){var t=this.d
if(H.ae(!t.E(0,a)))H.am("uniform "+a+" already set")
t.i(0,a,b)},
bh:function(){return this.d},
k:function(a){var t,s,r,q
t=H.B(["{"+new H.ak(H.ir(this),null).k(0)+"}["+this.a+"]"],[P.n])
for(s=this.d,r=s.gC(s),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ai(t,"\n")}}
G.dG.prototype={}
G.dJ.prototype={
c2:function(a,b,c){J.ly(this.a,b)
if(c>0)J.lU(this.a,b,c)},
cr:function(a,b,c,d,e,f,g,h){J.iS(this.a,34962,b)
J.lV(this.a,c,d,e,!1,g,h)}}
G.em.prototype={}
G.en.prototype={}
G.ex.prototype={
bf:function(a){var t=this.e
H.b(!t.E(0,a))
H.b(C.h.bb(a,"a"))
switch($.$get$O().h(0,a).a){case"vec2":t.i(0,a,H.B([],[T.ac]))
break
case"vec3":t.i(0,a,H.B([],[T.A]))
break
case"vec4":t.i(0,a,H.B([],[T.al]))
break
case"float":t.i(0,a,H.B([],[P.V]))
break
case"uvec4":t.i(0,a,H.B([],[[P.h,P.x]]))
break
default:if(H.ae(!1))H.am("unknown type for "+a)}},
cY:function(a){var t,s,r,q,p,o
H.b(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.em(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.I)(a),++q){p=a[q]
o=new T.A(new Float32Array(3))
o.V(p)
C.a.l(t,o)}},
cV:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.I)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.ac(o))}},
cW:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.I)(b),++q){p=b[q]
o=new T.A(new Float32Array(3))
o.V(p)
r.l(t,o)}},
cZ:function(a){var t,s,r,q,p,o
H.b(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.en(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.I)(a),++q){p=a[q]
o=new T.A(new Float32Array(3))
o.V(p)
C.a.l(t,o)}},
d3:function(){var t,s,r,q,p,o,n,m,l
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
p=$.$get$O().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ai(t," ")}}
G.cF.prototype={}
G.cE.prototype={}
G.eV.prototype={}
G.eX.prototype={
be:function(a,b,c){var t,s
if(C.h.a7(a,0)===105){if(H.ae(C.b.aF(b.length,c)===this.z))H.am("ChangeAttribute "+this.z)}else{t=C.b.aF(b.length,c)
if(H.ae(t===(this.ch.length/3|0)))H.am("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iS(t.a,34962,s)
J.jL(t.a,34962,b,35048)},
d4:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a6:function(a,b,c){var t,s,r,q,p,o
t=J.jH(a,0)===105
if(t&&this.z===0)this.z=C.b.aF(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iU(r.a))
this.be(a,b,c)
q=$.$get$O().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ae(p.E(0,a)))H.am("unexpected attribute "+a)
o=p.h(0,a)
J.dy(r.a,this.e)
r.c2(0,o,t?1:0)
r.cr(0,s.h(0,a),o,q.bg(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gC(t),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ai(s,"  ")},
saM:function(a){this.cx=a}}
G.fj.prototype={
d_:function(a,b){var t=C.b.cu(a,b)
if(this.z===t)return
this.z=t
this.bj()},
bj:function(){var t,s,r,q,p,o,n
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
t.a4(0,0,1/(p*s))
t.a4(1,1,1/p)
t.a4(2,2,(q+r)/o)
t.a4(3,2,-1)
t.a4(2,3,2*r*q/o)},
bh:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.A(new Float32Array(3))
o.ao(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.V(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.q(n)
r=!!s.$isal
k=r?s.gax(n):1
if(!!s.$isA){j=s.gm(n)
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
a3.V(this.db)
a3.eE(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ft.prototype={
d8:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
r.i(0,n,J.jO(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
r.i(0,n,J.jO(q.a,p,n))}},
dd:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gv(s);s.p();){q=s.gq(s)
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bz(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dg:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gC(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.jH(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.bd("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$O().h(0,n)
if(l==null)H.D("unknown "+n)
H.b(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iZ(r.a,k,m)
else if(!!J.q(m).$iskf)J.lS(r.a,k,m)
break
case"float":if(l.c===0)J.lQ(r.a,k,m)
else if(!!J.q(m).$iser)J.lR(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ap(m,"$isa7").a
J.jU(r.a,k,!1,n)}else if(!!J.q(m).$iser)J.jU(r.a,k,!1,m)
else if(H.ae(!1))H.am("bad unform: "+n)
break
case"mat3":if(l.c===0){n=C.N.geZ(H.ap(m,"$isnI"))
J.jT(r.a,k,!1,n)}else if(!!J.q(m).$iser)J.jT(r.a,k,!1,m)
else if(H.ae(!1))H.am("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jS(j,k,H.ap(m,"$isal").a)
else J.jS(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jR(j,k,H.ap(m,"$isA").a)
else J.jR(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jQ(j,k,H.ap(m,"$isac").a)
else J.jQ(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a2(33984,this.ch)
J.jI(r.a,n)
n=H.ap(m,"$ismF").d5()
J.jK(r.a,3553,n)
n=this.ch
J.iZ(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a2(33984,this.ch)
J.jI(r.a,n)
n=H.ap(m,"$ismF").d5()
J.jK(r.a,34067,n)
n=this.ch
J.iZ(r.a,k,n)
this.ch=this.ch+1
break
default:H.bd("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.y(m,!0)
j=r.a
if(n)J.dz(j,2929)
else J.iV(j,2929)
break
case"cStencilFunc":H.ap(m,"$iscF")
n=m.a
j=r.a
if(n===1281)J.iV(j,2960)
else{J.dz(j,2960)
j=m.b
i=m.c
J.lM(r.a,n,j,i)}break
case"cDepthWrite":J.ls(r.a,m)
break
case"cBlendEquation":H.ap(m,"$iscE")
n=m.a
j=r.a
if(n===1281)J.iV(j,3042)
else{J.dz(j,3042)
j=m.b
i=m.c
J.ln(r.a,j,i)
J.lm(r.a,n)}break}++o
break}}h=P.ka(0,0,0,Date.now()-new P.au(t,!1).a,0,0)
""+o
h.k(0)},
d2:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lT(t.a,this.r)
this.ch=0
this.z.S(0)
for(s=0;s<2;++s){r=b[s]
this.dg(r.a,r.bh())}q=this.Q
q.S(0)
for(p=a.cy,p=p.gC(p),p=p.gv(p);p.p();)q.l(0,p.gq(p))
o=this.dd()
if(o.length!==0)P.W("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
q=a.d
p=a.e
J.dy(q.a,p)
n=this.e.f.length>0
p=a.f
q=a.d4()
m=a.Q
l=a.z
if(n)J.ll(t.a,p)
if(m!==-1){k=t.a
if(l>1)J.lw(k,p,q,m,0,l)
else J.lv(k,p,q,m,0)}else{m=t.a
if(l>1)J.lu(m,p,0,q,l)
else J.lt(m,p,0,q)}if(n)J.lz(t.a)},
d1:function(a,b){return this.d2(a,b,null)}}
G.w.prototype={
bg:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fA.prototype={
cU:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$O().E(0,q))
H.b(!C.a.B(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.aC(t)},
cX:function(a){var t,s,r
H.b(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.ae($.$get$O().E(0,r)))H.am("missing uniform "+r)
H.b(!C.a.B(t,r))
C.a.l(t,r)}C.a.aC(t)},
bd:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$O().E(0,r))
H.b(!C.a.B(t,r))
C.a.l(t,r)}C.a.aC(t)},
bi:function(a,b){H.b(this.b==null)
this.b=this.dh(!0,a,b)},
d9:function(a){return this.bi(a,null)},
dh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
m=$.$get$O().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
if(c!=null)C.a.K(q,c)
C.a.l(q,"void main(void) {")
C.a.K(q,b)
C.a.l(q,"}")
return C.a.ai(q,"\n")}}
G.fC.prototype={}
R.cq.prototype={
c9:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.W("size change "+H.e(s)+" "+H.e(r))
this.d_(s,r)
J.lW(this.go.a,0,0,s,r)}}
R.fG.prototype={
da:function(a,b,c){var t,s,r
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
J.iR(this.a,s)
r=this.dl(b,c,90,30)
this.d=r
J.iR(this.a,r)
t=t.createElement("div")
this.c=t
J.iR(this.a,t)},
dl:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mO("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bq(r,"float")
r.setProperty(p,"left","")
p=C.u.bq(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.N(t,s)}return t}}
R.fH.prototype={
df:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.x.eT(s,2)+" fps"
t=this.c;(t&&C.o).cJ(t,b)
r=C.b.I(30*C.x.e3(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).N(t,q)},
de:function(a){return this.df(a,"")}}
D.eP.prototype={
$1:function(a){this.a.au(0,W.mV(this.b.response))},
$S:function(a){return{func:1,args:[,]}}}
A.it.prototype={
$2:function(a,b){var t=536870911&a+J.bf(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.C]}}}
T.a7.prototype={
a4:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
V:function(a){var t,s
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
k:function(a){return"[0] "+this.am(0).k(0)+"\n[1] "+this.am(1).k(0)+"\n[2] "+this.am(2).k(0)+"\n[3] "+this.am(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a7){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.is(this.a)},
am:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.al(t)},
an:function(){var t=this.a
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
eE:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.ac.prototype={
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ac){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.is(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.A.prototype={
ao:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
V:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.A){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.is(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
aX:function(a){var t,s,r,q,p,o
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=Math.sqrt(s*s+r*r+q*q)
if(p===0)return 0
o=1/p
t[0]=t[0]*o
t[1]=t[1]*o
t[2]=t[2]*o
return p},
aV:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bW:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.A(new Float32Array(3))
t.ao(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]}}
T.al.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.al){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.is(this.a)},
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
gax:function(a){return this.a[3]}}
T.iE.prototype={
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
s.id=0}r=C.c.e4(s.id,-1.4707963267948965,1.4707963267948965)
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
i=new T.A(new Float32Array(3))
i.ao(0,1,0)
r=s.e
q=r.a
q[0]=m[12]
q[1]=m[13]
q[2]=m[14]
q=new Float32Array(3)
h=new T.A(q)
h.V(r)
q[0]=q[0]-p[0]
q[1]=q[1]-p[1]
q[2]=q[2]-p[2]
h.aX(0)
g=i.bW(h)
g.aX(0)
f=h.bW(g)
f.aX(0)
p=g.aV(r)
n=f.aV(r)
r=h.aV(r)
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
d=s.f.a
d[0]=m[2]
d[1]=m[6]
d[2]=m[10]
s=-s.k1
b=d[0]
a=d[1]
a0=d[2]
a3=Math.sqrt(b*b+a*a+a0*a0)
l=d[0]/a3
k=d[1]/a3
j=d[2]/a3
a4=Math.cos(s)
a5=Math.sin(s)
a6=1-a4
a7=l*l*a6+a4
s=j*a5
a8=l*k*a6-s
d=k*a5
a9=l*j*a6+d
b0=k*l*a6+s
b1=k*k*a6+a4
s=l*a5
b2=k*j*a6-s
b3=j*l*a6-d
b4=j*k*a6+s
b5=j*j*a6+a4
s=m[0]
d=m[4]
a0=m[8]
a=m[1]
b=m[5]
a1=m[9]
a2=m[2]
e=m[6]
c=m[10]
q=m[3]
p=m[7]
n=m[11]
m[0]=s*a7+d*b0+a0*b3
m[1]=a*a7+b*b0+a1*b3
m[2]=a2*a7+e*b0+c*b3
m[3]=q*a7+p*b0+n*b3
m[4]=s*a8+d*b1+a0*b4
m[5]=a*a8+b*b1+a1*b4
m[6]=a2*a8+e*b1+c*b4
m[7]=q*a8+p*b1+n*b4
m[8]=s*a9+d*b2+a0*b5
m[9]=a*a9+b*b2+a1*b5
m[10]=a2*a9+e*b2+c*b5
m[11]=q*a9+p*b2+n*b5
this.c.d1(t.a,[this.d,this.e])
C.aw.gdY(window).b0(this)
this.f.de(t.b)},
$S:function(a){return{func:1,v:true,args:[P.a2]}}}
T.iF.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l
t=Y.md(J.aP(a,0))
s=$.l9
r=this.b
q=r.d
r=r.e.x
p=P.R()
o=J.lr(q.a)
n=new G.eX(q,o,4,p,r,null,0,-1,null,null,P.R(),"meshdata:"+s,!1,!0)
s=G.ke(t.d,null)
p.i(0,"aPosition",J.iU(q.a))
n.ch=s
n.be("aPosition",s,3)
m=$.$get$O().h(0,"aPosition")
if(m==null)H.D("Unknown canonical aPosition")
H.b(r.E(0,"aPosition"))
l=r.h(0,"aPosition")
J.dy(q.a,o)
q.c2(0,l,0)
q.cr(0,p.h(0,"aPosition"),l,m.bg(),5126,!1,0,0)
s=t.d3()
n.y=J.iU(q.a)
H.b(n.ch!=null)
r=n.ch.length
if(r<768){n.saM(new Uint8Array(H.ic(s)))
n.Q=5121}else if(r<196608){n.saM(new Uint16Array(H.ic(s)))
n.Q=5123}else{n.saM(new Uint32Array(H.ic(s)))
n.Q=5125}J.dy(q.a,o)
s=n.y
r=n.cx
p=J.q(r)
H.b(!!p.$iskK||!!p.$iskL||!!p.$iskM)
J.iS(q.a,34963,s)
J.jL(q.a,34963,r,35048)
G.mP(t,n)
this.a.a=n
this.c.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.cP=J.a.prototype.k
J.bm.prototype.cR=J.bm.prototype.k
P.Q.prototype.cQ=P.Q.prototype.ay
W.Y.prototype.aE=W.Y.prototype.L
W.bF.prototype.cS=W.bF.prototype.R;(function installTearOffs(){installTearOff(H.b5.prototype,"gez",0,0,0,null,["$0"],["aw"],0)
installTearOff(H.a0.prototype,"gcB",0,0,0,null,["$1"],["J"],2)
installTearOff(H.aL.prototype,"gef",0,0,0,null,["$1"],["T"],2)
installTearOff(P,"n3",1,0,0,null,["$1"],["mL"],1)
installTearOff(P,"n4",1,0,0,null,["$1"],["mM"],1)
installTearOff(P,"n5",1,0,0,null,["$1"],["mN"],1)
installTearOff(P,"l1",1,0,0,null,["$0"],["n1"],0)
installTearOff(P.G.prototype,"gdv",0,0,0,null,["$2","$1"],["H","dw"],5)
installTearOff(P,"nb",1,0,0,null,["$2"],["m1"],7)
installTearOff(W,"ng",1,0,0,null,["$4"],["mQ"],4)
installTearOff(W,"nh",1,0,0,null,["$4"],["mR"],4)
installTearOff(W.cn.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(W.cH.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(R.cq.prototype,"geL",0,0,0,null,["$1"],["c9"],6)
installTearOff(T,"lb",1,0,0,null,["$0"],["np"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.j7,t)
inherit(J.a,t)
inherit(J.dD,t)
inherit(P.Q,t)
inherit(H.ce,t)
inherit(P.c9,t)
inherit(H.aW,t)
inherit(H.at,t)
inherit(H.hU,t)
inherit(H.b5,t)
inherit(H.ht,t)
inherit(H.aM,t)
inherit(H.hT,t)
inherit(H.ho,t)
inherit(H.ct,t)
inherit(H.fW,t)
inherit(H.ar,t)
inherit(H.a0,t)
inherit(H.aL,t)
inherit(H.fs,t)
inherit(H.h1,t)
inherit(P.aV,t)
inherit(H.d9,t)
inherit(H.ak,t)
inherit(P.b_,t)
inherit(H.eL,t)
inherit(H.eN,t)
inherit(H.eH,t)
inherit(H.hV,t)
inherit(P.Z,t)
inherit(P.j1,t)
inherit(P.hp,t)
inherit(P.cS,t)
inherit(P.G,t)
inherit(P.cJ,t)
inherit(P.fK,t)
inherit(P.fL,t)
inherit(P.jj,t)
inherit(P.aR,t)
inherit(P.ib,t)
inherit(P.fz,t)
inherit(P.hQ,t)
inherit(P.bz,t)
inherit(P.jb,t)
inherit(P.bA,t)
inherit(P.l,t)
inherit(P.hS,t)
inherit(P.af,t)
inherit(P.E,t)
inherit(P.au,t)
inherit(P.a2,t)
inherit(P.aw,t)
inherit(P.cy,t)
inherit(P.j3,t)
inherit(P.hy,t)
inherit(P.eu,t)
inherit(P.e3,t)
inherit(P.h,t)
inherit(P.aZ,t)
inherit(P.L,t)
inherit(P.ji,t)
inherit(P.b2,t)
inherit(P.n,t)
inherit(P.bt,t)
inherit(P.jm,t)
inherit(W.dP,t)
inherit(W.by,t)
inherit(W.m,t)
inherit(W.cp,t)
inherit(W.bF,t)
inherit(W.i6,t)
inherit(W.c4,t)
inherit(W.co,t)
inherit(W.jf,t)
inherit(W.jo,t)
inherit(W.i1,t)
inherit(W.dj,t)
inherit(P.hf,t)
inherit(P.hX,t)
inherit(G.f_,t)
inherit(G.dJ,t)
inherit(G.em,t)
inherit(G.en,t)
inherit(G.ex,t)
inherit(G.cF,t)
inherit(G.cE,t)
inherit(G.w,t)
inherit(G.fA,t)
inherit(R.fG,t)
inherit(T.a7,t)
inherit(T.ac,t)
inherit(T.A,t)
inherit(T.al,t)
t=J.a
inherit(J.eG,t)
inherit(J.cc,t)
inherit(J.bm,t)
inherit(J.ax,t)
inherit(J.aX,t)
inherit(J.az,t)
inherit(H.bp,t)
inherit(H.b0,t)
inherit(W.d,t)
inherit(W.dA,t)
inherit(W.dH,t)
inherit(W.aU,t)
inherit(W.X,t)
inherit(W.cL,t)
inherit(W.dU,t)
inherit(W.dV,t)
inherit(W.dW,t)
inherit(W.bY,t)
inherit(W.bZ,t)
inherit(W.cM,t)
inherit(W.c0,t)
inherit(W.cO,t)
inherit(W.dZ,t)
inherit(W.f,t)
inherit(W.cQ,t)
inherit(W.ez,t)
inherit(W.cT,t)
inherit(W.eQ,t)
inherit(W.eW,t)
inherit(W.cX,t)
inherit(W.cn,t)
inherit(W.d_,t)
inherit(W.a8,t)
inherit(W.d3,t)
inherit(W.cr,t)
inherit(W.d5,t)
inherit(W.a9,t)
inherit(W.da,t)
inherit(W.dd,t)
inherit(W.fV,t)
inherit(W.df,t)
inherit(W.h_,t)
inherit(W.cH,t)
inherit(W.h8,t)
inherit(W.ha,t)
inherit(W.dk,t)
inherit(W.dm,t)
inherit(W.dp,t)
inherit(W.dr,t)
inherit(W.dt,t)
inherit(P.cV,t)
inherit(P.d1,t)
inherit(P.fm,t)
inherit(P.fn,t)
inherit(P.fq,t)
inherit(P.db,t)
inherit(P.dh,t)
inherit(P.dE,t)
inherit(P.fu,t)
inherit(P.fv,t)
inherit(P.d7,t)
t=J.bm
inherit(J.fk,t)
inherit(J.aJ,t)
inherit(J.aA,t)
inherit(J.j6,J.ax)
t=J.aX
inherit(J.cb,t)
inherit(J.ca,t)
t=P.Q
inherit(H.j,t)
inherit(H.cg,t)
inherit(H.cI,t)
t=H.j
inherit(H.aY,t)
inherit(H.eM,t)
inherit(H.e1,H.cg)
t=P.c9
inherit(H.eT,t)
inherit(H.hd,t)
t=H.aY
inherit(H.bn,t)
inherit(P.eO,t)
t=H.at
inherit(H.iN,t)
inherit(H.iO,t)
inherit(H.hO,t)
inherit(H.hu,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.hW,t)
inherit(H.fX,t)
inherit(H.fY,t)
inherit(H.iP,t)
inherit(H.iy,t)
inherit(H.iz,t)
inherit(H.iA,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(H.fS,t)
inherit(H.eI,t)
inherit(H.iu,t)
inherit(H.iv,t)
inherit(H.iw,t)
inherit(P.hk,t)
inherit(P.hj,t)
inherit(P.hl,t)
inherit(P.hm,t)
inherit(P.ew,t)
inherit(P.ev,t)
inherit(P.hz,t)
inherit(P.hH,t)
inherit(P.hD,t)
inherit(P.hE,t)
inherit(P.hF,t)
inherit(P.hB,t)
inherit(P.hG,t)
inherit(P.hA,t)
inherit(P.hK,t)
inherit(P.hL,t)
inherit(P.hJ,t)
inherit(P.hI,t)
inherit(P.fM,t)
inherit(P.fN,t)
inherit(P.ie,t)
inherit(P.i_,t)
inherit(P.hZ,t)
inherit(P.i0,t)
inherit(P.eS,t)
inherit(P.e_,t)
inherit(P.e0,t)
inherit(W.e2,t)
inherit(W.fJ,t)
inherit(W.he,t)
inherit(W.hx,t)
inherit(W.f9,t)
inherit(W.f8,t)
inherit(W.i2,t)
inherit(W.i3,t)
inherit(W.i9,t)
inherit(W.ia,t)
inherit(P.hh,t)
inherit(P.ig,t)
inherit(P.ih,t)
inherit(P.ii,t)
inherit(B.iI,t)
inherit(B.iJ,t)
inherit(B.iK,t)
inherit(B.iL,t)
inherit(B.iM,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(D.eP,t)
inherit(A.it,t)
inherit(T.iE,t)
inherit(T.iF,t)
t=H.ho
inherit(H.b7,t)
inherit(H.bK,t)
t=P.aV
inherit(H.fa,t)
inherit(H.eJ,t)
inherit(H.h6,t)
inherit(H.h3,t)
inherit(H.dI,t)
inherit(H.fw,t)
inherit(P.bT,t)
inherit(P.b1,t)
inherit(P.a4,t)
inherit(P.h7,t)
inherit(P.h5,t)
inherit(P.b3,t)
inherit(P.dK,t)
inherit(P.dT,t)
t=H.fS
inherit(H.fF,t)
inherit(H.bi,t)
inherit(H.hi,P.bT)
inherit(P.cf,P.b_)
t=P.cf
inherit(H.a6,t)
inherit(W.hn,t)
t=H.b0
inherit(H.f0,t)
inherit(H.cj,t)
t=H.cj
inherit(H.bB,t)
inherit(H.bD,t)
inherit(H.bC,H.bB)
inherit(H.ck,H.bC)
inherit(H.bE,H.bD)
inherit(H.cl,H.bE)
t=H.ck
inherit(H.ci,t)
inherit(H.f1,t)
t=H.cl
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.cm,t)
inherit(H.f7,t)
t=P.hp
inherit(P.cK,t)
inherit(P.i7,t)
inherit(P.hY,P.ib)
inherit(P.hR,H.a6)
inherit(P.fy,P.fz)
inherit(P.hN,P.fy)
inherit(P.hP,P.hN)
inherit(P.cd,P.bA)
t=P.a2
inherit(P.V,t)
inherit(P.x,t)
t=P.a4
inherit(P.cs,t)
inherit(P.eB,t)
t=W.d
inherit(W.p,t)
inherit(W.aj,t)
inherit(W.ep,t)
inherit(W.bl,t)
inherit(W.bo,t)
inherit(W.fo,t)
inherit(W.cu,t)
inherit(W.bG,t)
inherit(W.bI,t)
inherit(W.hb,t)
inherit(W.hc,t)
inherit(W.bx,t)
inherit(W.jp,t)
inherit(P.dF,t)
inherit(P.aS,t)
t=W.p
inherit(W.Y,t)
inherit(W.as,t)
inherit(W.av,t)
t=W.Y
inherit(W.i,t)
inherit(P.u,t)
t=W.aj
inherit(W.bS,t)
inherit(W.ey,t)
inherit(W.eR,t)
t=W.i
inherit(W.dB,t)
inherit(W.dC,t)
inherit(W.aq,t)
inherit(W.bU,t)
inherit(W.bX,t)
inherit(W.et,t)
inherit(W.c6,t)
inherit(W.fx,t)
inherit(W.cB,t)
inherit(W.fQ,t)
inherit(W.fR,t)
inherit(W.bu,t)
t=W.aU
inherit(W.dL,t)
inherit(W.dN,t)
inherit(W.dO,t)
inherit(W.dR,t)
t=W.X
inherit(W.dM,t)
inherit(W.dQ,t)
inherit(W.dS,t)
inherit(W.aT,W.cL)
inherit(W.dX,W.bZ)
inherit(W.cN,W.cM)
inherit(W.c_,W.cN)
inherit(W.cP,W.cO)
inherit(W.dY,W.cP)
inherit(W.cR,W.cQ)
inherit(W.eo,W.cR)
inherit(W.cU,W.cT)
inherit(W.bk,W.cU)
inherit(W.c7,W.av)
inherit(W.c8,W.bl)
inherit(W.aI,W.f)
t=W.aI
inherit(W.aB,t)
inherit(W.K,t)
inherit(W.aH,t)
inherit(W.eY,W.bo)
inherit(W.cY,W.cX)
inherit(W.eZ,W.cY)
inherit(W.N,P.cd)
inherit(W.d0,W.d_)
inherit(W.bq,W.d0)
inherit(W.d4,W.d3)
inherit(W.fl,W.d4)
inherit(W.bH,W.bG)
inherit(W.fB,W.bH)
inherit(W.d6,W.d5)
inherit(W.fD,W.d6)
inherit(W.fI,W.da)
inherit(W.de,W.dd)
inherit(W.fT,W.de)
inherit(W.bJ,W.bI)
inherit(W.fU,W.bJ)
inherit(W.dg,W.df)
inherit(W.fZ,W.dg)
inherit(W.aK,W.K)
inherit(W.dl,W.dk)
inherit(W.hq,W.dl)
inherit(W.hr,W.c0)
inherit(W.dn,W.dm)
inherit(W.hM,W.dn)
inherit(W.dq,W.dp)
inherit(W.cZ,W.dq)
inherit(W.ds,W.dr)
inherit(W.i4,W.ds)
inherit(W.du,W.dt)
inherit(W.i5,W.du)
inherit(W.hs,W.hn)
inherit(W.hv,P.fK)
inherit(W.js,W.hv)
inherit(W.hw,P.fL)
inherit(W.i8,W.bF)
inherit(P.hg,P.hf)
inherit(P.S,P.hX)
t=P.u
inherit(P.e4,t)
inherit(P.e5,t)
inherit(P.e6,t)
inherit(P.e7,t)
inherit(P.e8,t)
inherit(P.e9,t)
inherit(P.ea,t)
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
inherit(P.eq,t)
inherit(P.a5,t)
inherit(P.eU,t)
inherit(P.fi,t)
inherit(P.bs,t)
t=P.a5
inherit(P.es,t)
inherit(P.a_,t)
inherit(P.eA,t)
inherit(P.fP,t)
inherit(P.bv,t)
inherit(P.h9,t)
inherit(P.cW,P.cV)
inherit(P.eK,P.cW)
inherit(P.d2,P.d1)
inherit(P.fb,P.d2)
inherit(P.fr,P.a_)
inherit(P.dc,P.db)
inherit(P.fO,P.dc)
inherit(P.bw,P.bv)
inherit(P.di,P.dh)
inherit(P.h0,P.di)
inherit(P.fc,P.aS)
inherit(P.d8,P.d7)
inherit(P.fE,P.d8)
t=G.f_
inherit(G.fC,t)
inherit(G.h4,t)
inherit(G.eX,t)
inherit(G.ft,t)
inherit(G.dG,G.fC)
inherit(B.fd,G.dG)
t=G.h4
inherit(G.eV,t)
inherit(G.fj,t)
inherit(R.cq,G.fj)
inherit(R.fH,R.fG)
mixin(H.bB,P.l)
mixin(H.bC,H.aW)
mixin(H.bD,P.l)
mixin(H.bE,H.aW)
mixin(P.bA,P.l)
mixin(W.cL,W.dP)
mixin(W.cM,P.l)
mixin(W.cN,W.m)
mixin(W.cO,P.l)
mixin(W.cP,W.m)
mixin(W.cQ,P.l)
mixin(W.cR,W.m)
mixin(W.cT,P.l)
mixin(W.cU,W.m)
mixin(W.cX,P.l)
mixin(W.cY,W.m)
mixin(W.d_,P.l)
mixin(W.d0,W.m)
mixin(W.d3,P.l)
mixin(W.d4,W.m)
mixin(W.bG,P.l)
mixin(W.bH,W.m)
mixin(W.d5,P.l)
mixin(W.d6,W.m)
mixin(W.da,P.b_)
mixin(W.dd,P.l)
mixin(W.de,W.m)
mixin(W.bI,P.l)
mixin(W.bJ,W.m)
mixin(W.df,P.l)
mixin(W.dg,W.m)
mixin(W.dk,P.l)
mixin(W.dl,W.m)
mixin(W.dm,P.l)
mixin(W.dn,W.m)
mixin(W.dp,P.l)
mixin(W.dq,W.m)
mixin(W.dr,P.l)
mixin(W.ds,W.m)
mixin(W.dt,P.l)
mixin(W.du,W.m)
mixin(P.cV,P.l)
mixin(P.cW,W.m)
mixin(P.d1,P.l)
mixin(P.d2,W.m)
mixin(P.db,P.l)
mixin(P.dc,W.m)
mixin(P.dh,P.l)
mixin(P.di,W.m)
mixin(P.d7,P.l)
mixin(P.d8,W.m)})();(function constants(){C.n=W.aq.prototype
C.J=W.bU.prototype
C.u=W.aT.prototype
C.o=W.bX.prototype
C.K=W.bY.prototype
C.L=W.c6.prototype
C.p=W.c7.prototype
C.w=W.c8.prototype
C.M=J.a.prototype
C.a=J.ax.prototype
C.x=J.ca.prototype
C.b=J.cb.prototype
C.N=J.cc.prototype
C.c=J.aX.prototype
C.h=J.az.prototype
C.U=J.aA.prototype
C.X=H.ci.prototype
C.B=W.bq.prototype
C.C=J.fk.prototype
C.D=W.cr.prototype
C.I=W.cB.prototype
C.t=J.aJ.prototype
C.av=W.aK.prototype
C.aw=W.bx.prototype
C.d=new P.hY()
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
C.m=new G.w("","",0)
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
C.ad=H.F("nD")
C.ae=H.F("nE")
C.af=H.F("er")
C.ag=H.F("nF")
C.ah=H.F("nG")
C.ai=H.F("kf")
C.aj=H.F("nH")
C.ak=H.F("ki")
C.al=H.F("L")
C.am=H.F("n")
C.an=H.F("kK")
C.ao=H.F("kL")
C.ap=H.F("nK")
C.aq=H.F("kM")
C.ar=H.F("af")
C.as=H.F("V")
C.at=H.F("x")
C.au=H.F("a2")})();(function staticFields(){$.ks="$cachedFunction"
$.kt="$cachedInvocation"
$.k_=null
$.jY=null
$.jv=!1
$.jA=null
$.kZ=null
$.ld=null
$.il=null
$.ix=null
$.jB=null
$.b8=null
$.bL=null
$.bM=null
$.jw=!1
$.v=C.d
$.kd=0
$.ai=null
$.j2=null
$.kc=null
$.kb=null
$.k8=null
$.k7=null
$.k6=null
$.k5=null
$.n7=0
$.n8=0
$.jF=0
$.la=0
$.bQ=0
$.bR=0
$.nw=!1
$.l4=0
$.l9="../ct_logo.obj"})();(function lazyInitializers(){lazy($,"k4","$get$k4",function(){return H.l6("_$dart_dartClosure")})
lazy($,"j8","$get$j8",function(){return H.l6("_$dart_js")})
lazy($,"kg","$get$kg",function(){return H.mi()})
lazy($,"kh","$get$kh",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kd
$.kd=t+1
t="expando$key$"+t}return new P.e3(t,null,[P.x])})
lazy($,"kz","$get$kz",function(){return H.aa(H.h2({
toString:function(){return"$receiver$"}}))})
lazy($,"kA","$get$kA",function(){return H.aa(H.h2({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kB","$get$kB",function(){return H.aa(H.h2(null))})
lazy($,"kC","$get$kC",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kG","$get$kG",function(){return H.aa(H.h2(void 0))})
lazy($,"kH","$get$kH",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kE","$get$kE",function(){return H.aa(H.kF(null))})
lazy($,"kD","$get$kD",function(){return H.aa(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kJ","$get$kJ",function(){return H.aa(H.kF(void 0))})
lazy($,"kI","$get$kI",function(){return H.aa(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jr","$get$jr",function(){return P.mK()})
lazy($,"bN","$get$bN",function(){return[]})
lazy($,"k3","$get$k3",function(){return{}})
lazy($,"kQ","$get$kQ",function(){return P.jc(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jt","$get$jt",function(){return P.R()})
lazy($,"ik","$get$ik",function(){return P.kl(P.x,P.af)})
lazy($,"bP","$get$bP",function(){return P.kl(P.n,P.af)})
lazy($,"kx","$get$kx",function(){return new G.cF(1281,0,4294967295)})
lazy($,"jW","$get$jW",function(){return new G.cE(1281,1281,1281)})
lazy($,"O","$get$O",function(){return P.aC(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.G,"aColorAlpha",C.a0,"aPosition",C.E,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.F,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.G,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.E,"vPositionFromLight",C.Z,"vCenter",C.F,"vDepth",C.a5,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.H,"uConvolutionMatrix",C.H,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ab,"uTexture",C.i,"uTexture2",C.i,"uTexture3",C.i,"uTexture4",C.i,"uSpecularMap",C.i,"uNormalMap",C.i,"uBumpMap",C.i,"uDepthMap",C.i,"uCubeTexture",C.a9,"uAnimationTable",C.i,"uTime",C.a8,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.f,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1])})
lazy($,"k2","$get$k2",function(){return T.mI(0.8,0.8,0.8)})
lazy($,"l3","$get$l3",function(){var t=G.kw("FixedVertexColorV")
t.cU(["aPosition"])
t.cX(["uPerspectiveViewMatrix","uModelMatrix"])
t.bd(["vColor"])
t.bi(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"l2","$get$l2",function(){var t=G.kw("FixedVertexColorF")
t.bd(["vColor"])
t.d9(["oFragColor = vec4( vColor, 1.0 );"])
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
mangledGlobalNames:{x:"int",V:"double",a2:"num",n:"String",af:"bool",L:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.af,args:[W.Y,P.n,P.n,W.by]},{func:1,v:true,args:[P.C],opt:[P.b2]},{func:1,v:true,args:[W.f]},{func:1,ret:P.x,args:[P.E,P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bp,ArrayBufferView:H.b0,DataView:H.f0,Float32Array:H.ci,Float64Array:H.f1,Int16Array:H.f2,Int32Array:H.f3,Int8Array:H.f4,Uint16Array:H.f5,Uint32Array:H.f6,Uint8ClampedArray:H.cm,CanvasPixelArray:H.cm,Uint8Array:H.f7,HTMLAudioElement:W.i,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLInputElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMediaElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLVideoElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,Accelerometer:W.bS,LinearAccelerationSensor:W.bS,AccessibleNodeList:W.dA,HTMLAnchorElement:W.dB,HTMLAreaElement:W.dC,HTMLBodyElement:W.aq,HTMLCanvasElement:W.bU,CanvasRenderingContext2D:W.dH,CDATASection:W.as,CharacterData:W.as,Comment:W.as,ProcessingInstruction:W.as,Text:W.as,CSSPerspective:W.dL,CSSPositionValue:W.dM,CSSRotation:W.dN,CSSScale:W.dO,CSSStyleDeclaration:W.aT,MSStyleCSSProperties:W.aT,CSS2Properties:W.aT,CSSImageValue:W.X,CSSKeywordValue:W.X,CSSNumericValue:W.X,CSSResourceValue:W.X,CSSUnitValue:W.X,CSSURLImageValue:W.X,CSSStyleValue:W.X,CSSMatrixComponent:W.aU,CSSSkew:W.aU,CSSTransformComponent:W.aU,CSSTransformValue:W.dQ,CSSTranslation:W.dR,CSSUnparsedValue:W.dS,DataTransferItemList:W.dU,DeviceAcceleration:W.dV,HTMLDivElement:W.bX,XMLDocument:W.av,Document:W.av,DOMException:W.dW,DOMImplementation:W.bY,DOMPoint:W.dX,DOMPointReadOnly:W.bZ,ClientRectList:W.c_,DOMRectList:W.c_,DOMRectReadOnly:W.c0,DOMStringList:W.dY,DOMTokenList:W.dZ,Element:W.Y,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.eo,FileWriter:W.ep,HTMLFormElement:W.et,Gyroscope:W.ey,HTMLHeadElement:W.c6,History:W.ez,HTMLCollection:W.bk,HTMLFormControlsCollection:W.bk,HTMLOptionsCollection:W.bk,HTMLDocument:W.c7,XMLHttpRequest:W.c8,XMLHttpRequestUpload:W.bl,XMLHttpRequestEventTarget:W.bl,KeyboardEvent:W.aB,Location:W.eQ,Magnetometer:W.eR,MediaList:W.eW,MIDIOutput:W.eY,MIDIInput:W.bo,MIDIPort:W.bo,MimeTypeArray:W.eZ,PointerEvent:W.K,MouseEvent:W.K,DragEvent:W.K,DocumentFragment:W.p,ShadowRoot:W.p,Attr:W.p,DocumentType:W.p,Node:W.p,NodeIterator:W.cn,NodeList:W.bq,RadioNodeList:W.bq,Plugin:W.a8,PluginArray:W.fl,PresentationConnection:W.fo,Range:W.cr,RTCDataChannel:W.cu,DataChannel:W.cu,HTMLSelectElement:W.fx,AbsoluteOrientationSensor:W.aj,AmbientLightSensor:W.aj,OrientationSensor:W.aj,RelativeOrientationSensor:W.aj,Sensor:W.aj,SourceBufferList:W.fB,SpeechGrammarList:W.fD,SpeechRecognitionResult:W.a9,Storage:W.fI,HTMLTableElement:W.cB,HTMLTableRowElement:W.fQ,HTMLTableSectionElement:W.fR,HTMLTemplateElement:W.bu,TextTrackCueList:W.fT,TextTrackList:W.fU,TimeRanges:W.fV,TouchEvent:W.aH,TouchList:W.fZ,TrackDefaultList:W.h_,TreeWalker:W.cH,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,UIEvent:W.aI,URL:W.h8,VRStageBoundsPoint:W.ha,VideoTrackList:W.hb,WebSocket:W.hc,WheelEvent:W.aK,Window:W.bx,DOMWindow:W.bx,CSSRuleList:W.hq,DOMRect:W.hr,GamepadList:W.hM,NamedNodeMap:W.cZ,MozNamedAttrMap:W.cZ,SpeechRecognitionResultList:W.i4,StyleSheetList:W.i5,SVGFEBlendElement:P.e4,SVGFEColorMatrixElement:P.e5,SVGFEComponentTransferElement:P.e6,SVGFECompositeElement:P.e7,SVGFEConvolveMatrixElement:P.e8,SVGFEDiffuseLightingElement:P.e9,SVGFEDisplacementMapElement:P.ea,SVGFEFloodElement:P.eb,SVGFEGaussianBlurElement:P.ec,SVGFEImageElement:P.ed,SVGFEMergeElement:P.ee,SVGFEMorphologyElement:P.ef,SVGFEOffsetElement:P.eg,SVGFEPointLightElement:P.eh,SVGFESpecularLightingElement:P.ei,SVGFESpotLightElement:P.ej,SVGFETileElement:P.ek,SVGFETurbulenceElement:P.el,SVGFilterElement:P.eq,SVGForeignObjectElement:P.es,SVGCircleElement:P.a_,SVGEllipseElement:P.a_,SVGLineElement:P.a_,SVGPathElement:P.a_,SVGPolygonElement:P.a_,SVGPolylineElement:P.a_,SVGGeometryElement:P.a_,SVGAElement:P.a5,SVGClipPathElement:P.a5,SVGDefsElement:P.a5,SVGGElement:P.a5,SVGSwitchElement:P.a5,SVGGraphicsElement:P.a5,SVGImageElement:P.eA,SVGLengthList:P.eK,SVGMaskElement:P.eU,SVGNumberList:P.fb,SVGPatternElement:P.fi,SVGPoint:P.fm,SVGPointList:P.fn,SVGRect:P.fq,SVGRectElement:P.fr,SVGScriptElement:P.bs,SVGStringList:P.fO,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEMergeNodeElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMetadataElement:P.u,SVGRadialGradientElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGSymbolElement:P.u,SVGTitleElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGElement:P.u,SVGSVGElement:P.fP,SVGTextPathElement:P.bv,SVGTextContentElement:P.bv,SVGTSpanElement:P.bw,SVGTextElement:P.bw,SVGTextPositioningElement:P.bw,SVGTransformList:P.h0,SVGUseElement:P.h9,AudioBuffer:P.dE,AudioTrackList:P.dF,AudioContext:P.aS,webkitAudioContext:P.aS,BaseAudioContext:P.aS,OfflineAudioContext:P.fc,WebGLRenderingContext:P.fu,WebGL2RenderingContext:P.fv,SQLResultSetRowList:P.fE})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.cl.$nativeSuperclassTag="ArrayBufferView"
W.bG.$nativeSuperclassTag="EventTarget"
W.bH.$nativeSuperclassTag="EventTarget"
W.bI.$nativeSuperclassTag="EventTarget"
W.bJ.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lf(T.lb(),b)},[])
else (function(b){H.lf(T.lb(),b)})([])})})()