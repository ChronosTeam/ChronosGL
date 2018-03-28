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
a[c]=function(){a[c]=function(){H.ni(b)}
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
return d?function(e){if(t===null)t=H.jm(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jm(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jm(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iY:function iY(a){this.a=a},
j4:function(a,b,c,d){if(!!a.$isk)return new H.e3(a,b,[c,d])
return new H.cf(a,b,[c,d])},
eF:function(){return new P.b_("No element")},
mc:function(){return new P.b_("Too many elements")},
mb:function(){return new P.b_("Too few elements")},
mq:function(a,b){H.cw(a,0,J.ba(a)-1,b)},
cw:function(a,b,c,d){if(c-b<=32)H.mp(a,b,c,d)
else H.mo(a,b,c,d)},
mp:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.V(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a6(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mo:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.M(t+1,6)
r=a3+s
q=a4-s
p=C.b.M(a3+a4,2)
o=p-s
n=p+s
t=J.V(a2)
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
if(J.C(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cw(a2,a3,g-2,a5)
H.cw(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.C(a5.$2(t.h(a2,g),l),0);)++g
for(;J.C(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cw(a2,g,f,a5)}else H.cw(a2,g,f,a5)},
k:function k(){},
aV:function aV(){},
cd:function cd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cf:function cf(a,b,c){this.a=a
this.b=b
this.$ti=c},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bj:function bj(a,b,c){this.a=a
this.b=b
this.$ti=c},
cJ:function cJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
he:function he(a,b,c){this.a=a
this.b=b
this.$ti=c},
aT:function aT(){},
dv:function(a,b){var t=a.am(b)
if(!u.globalState.d.cy)u.globalState.f.at()
return t},
ie:function(){++u.globalState.f.b},
iu:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
l4:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$ish)throw H.c(P.jJ("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hO(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k5()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hr(P.j3(null,H.aL),0)
q=P.y
s.sey(new H.a8(0,null,null,null,null,null,0,[q,H.b0]))
s.seB(new H.a8(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hN()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m6,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mE)}if(u.globalState.x)return
o=H.kD()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.b6(a,{func:1,args:[P.L]}))o.am(new H.iE(t,a))
else if(H.b6(a,{func:1,args:[P.L,P.L]}))o.am(new H.iF(t,a))
else o.am(a)
u.globalState.f.at()},
mE:function(a){var t=P.aB(["command","print","msg",a])
return new H.a2(!0,P.b1(null,P.y)).N(t)},
kD:function(){var t,s
t=u.globalState.a++
s=P.y
t=new H.b0(t,new H.a8(0,null,null,null,null,null,0,[s,H.ct]),P.aC(null,null,null,s),u.createNewIsolate(),new H.ct(0,null,!1),new H.at(H.l0()),new H.at(H.l0()),!1,!1,[],P.aC(null,null,null,null),null,null,!1,!0,P.aC(null,null,null,null))
t.dq()
return t},
m8:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m9()
return},
m9:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.t('Cannot extract URI from "'+t+'"'))},
m6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aK(!0,[]).a3(b.data)
s=J.V(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n4(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aK(!0,[]).a3(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aK(!0,[]).a3(s.h(t,"replyTo"))
k=H.kD()
u.globalState.f.a.a_(0,new H.aL(k,new H.eC(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.at()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lB(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.at()
break
case"close":u.globalState.ch.as(0,$.$get$k6().h(0,a))
a.terminate()
u.globalState.f.at()
break
case"log":H.m5(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aB(["command","print","msg",t])
j=new H.a2(!0,P.b1(null,P.y)).N(j)
s.toString
self.postMessage(j)}else P.a5(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
m5:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aB(["command","log","msg",a])
r=new H.a2(!0,P.b1(null,P.y)).N(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.M(q)
t=H.ap(q)
s=P.c2(t)
throw H.c(s)}},
m7:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kd=$.kd+("_"+s)
$.ke=$.ke+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.L(0,["spawned",new H.b2(s,r),q,t.r])
r=new H.eD(t,d,a,c,b)
if(e){t.bM(q,q)
u.globalState.f.a.a_(0,new H.aL(t,r,"start isolate"))}else r.$0()},
ms:function(a,b){var t=new H.fY(!0,!1,null,0)
t.dg(a,b)
return t},
mF:function(a){return new H.aK(!0,[]).a3(new H.a2(!1,P.b1(null,P.y)).N(a))},
iE:function iE(a,b){this.a=a
this.b=b},
iF:function iF(a,b){this.a=a
this.b=b},
hO:function hO(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b0:function b0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hI:function hI(a,b){this.a=a
this.b=b},
hr:function hr(a,b){this.a=a
this.b=b},
hs:function hs(a){this.a=a},
aL:function aL(a,b,c){this.a=a
this.b=b
this.c=c},
hN:function hN(){},
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
hm:function hm(){},
b2:function b2(a,b){this.b=a
this.a=b},
hP:function hP(a,b){this.a=a
this.b=b},
bI:function bI(a,b,c){this.b=a
this.c=b
this.a=c},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
fY:function fY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fZ:function fZ(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
at:function at(a){this.a=a},
a2:function a2(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
mZ:function(a){return u.types[a]},
n6:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$isr},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bb(a)
if(typeof t!=="string")throw H.c(H.R(a))
return t},
mm:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ak(t)
s=t[0]
r=t[1]
return new H.fs(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aE:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bn:function(a){var t,s,r,q,p,o,n,m,l
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.v(a).$isaI){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aO(q,0)===36)q=C.i.cV(q,1)
l=H.dx(H.ih(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
O:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mk:function(a){return a.b?H.O(a).getUTCFullYear()+0:H.O(a).getFullYear()+0},
mi:function(a){return a.b?H.O(a).getUTCMonth()+1:H.O(a).getMonth()+1},
me:function(a){return a.b?H.O(a).getUTCDate()+0:H.O(a).getDate()+0},
mf:function(a){return a.b?H.O(a).getUTCHours()+0:H.O(a).getHours()+0},
mh:function(a){return a.b?H.O(a).getUTCMinutes()+0:H.O(a).getMinutes()+0},
mj:function(a){return a.b?H.O(a).getUTCSeconds()+0:H.O(a).getSeconds()+0},
mg:function(a){return a.b?H.O(a).getUTCMilliseconds()+0:H.O(a).getMilliseconds()+0},
kc:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.R(a))
return a[b]},
b5:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.Y(!0,b,"index",null)
t=J.ba(a)
if(b<0||C.b.b7(b,t))return P.z(b,a,"index",null,t)
return P.fp(b,"index",null)},
R:function(a){return new P.Y(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.cq()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l6})
t.name=""}else t.toString=H.l6
return t},
l6:function(){return J.bb(this.dartException)},
J:function(a){throw H.c(a)},
F:function(a){throw H.c(P.ah(a))},
ab:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h4:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kp:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kb:function(a,b){return new H.fa(a,b==null?null:b.method)},
j_:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eJ(a,s,t?null:b.receiver)},
M:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b_(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j_(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kb(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kj()
o=$.$get$kk()
n=$.$get$kl()
m=$.$get$km()
l=$.$get$kq()
k=$.$get$kr()
j=$.$get$ko()
$.$get$kn()
i=$.$get$kt()
h=$.$get$ks()
g=p.R(s)
if(g!=null)return t.$1(H.j_(s,g))
else{g=o.R(s)
if(g!=null){g.method="call"
return t.$1(H.j_(s,g))}else{g=n.R(s)
if(g==null){g=m.R(s)
if(g==null){g=l.R(s)
if(g==null){g=k.R(s)
if(g==null){g=j.R(s)
if(g==null){g=m.R(s)
if(g==null){g=i.R(s)
if(g==null){g=h.R(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kb(s,g))}}return t.$1(new H.h7(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cz()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.Y(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cz()
return a},
ap:function(a){var t
if(a==null)return new H.d9(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d9(a,null)},
na:function(a){if(a==null||typeof a!='object')return J.b9(a)
else return H.aE(a)},
mX:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
n5:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dv(b,new H.ip(a))
case 1:return H.dv(b,new H.iq(a,d))
case 2:return H.dv(b,new H.ir(a,d,e))
case 3:return H.dv(b,new H.is(a,d,e,f))
case 4:return H.dv(b,new H.it(a,d,e,f,g))}throw H.c(P.c2("Unsupported number of arguments for wrapped closure"))},
bM:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n5)
a.$identity=t
return t},
lR:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$ish){t.$reflectionInfo=c
r=H.mm(t).r}else r=c
q=d?Object.create(new H.fH().constructor.prototype):Object.create(new H.bc(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jQ(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mZ,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jN:H.iS
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jQ(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lO:function(a,b,c,d){var t=H.iS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jQ:function(a,b,c){var t,s,r,q
if(c)return H.lQ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lO(s,b==null?r!=null:b!==r,t,b)
return q},
lP:function(a,b,c,d){var t,s
t=H.iS
s=H.jN
switch(b?-1:a){case 0:throw H.c(H.mn("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lQ:function(a,b){var t,s,r,q
t=$.jO
if(t==null){t=H.jL("self")
$.jO=t}t=$.jM
if(t==null){t=H.jL("receiver")
$.jM=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lP(r,b==null?q!=null:b!==q,s,b)
return t},
jm:function(a,b,c,d,e,f){var t,s
t=J.ak(b)
s=!!J.v(c).$ish?J.ak(c):c
return H.lR(a,t,s,!!d,e,f)},
iS:function(a){return a.a},
jN:function(a){return a.c},
jL:function(a){var t,s,r,q,p
t=new H.bc("self","target","receiver","name")
s=J.ak(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nx:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ac(a,"String"))},
ns:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ac(a,"double"))},
nw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ac(a,"num"))},
mR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ac(a,"bool"))},
n4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ac(a,"int"))},
nc:function(a,b){throw H.c(H.ac(a,b.substring(3)))},
nb:function(a,b){var t=J.V(b)
throw H.c(H.jP(a,t.bi(b,3,t.gj(b))))},
jq:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.nc(a,b)},
ar:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.nb(a,b)},
nv:function(a){if(a==null)return a
if(!!J.v(a).$ish)return a
throw H.c(H.ac(a,"List"))},
jn:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
b6:function(a,b){var t,s
if(a==null)return!1
t=H.jn(a)
if(t==null)s=!1
else s=H.kX(t,b)
return s},
nt:function(a,b){var t,s
if(a==null)return a
if($.jj)return a
$.jj=!0
try{if(H.b6(a,b))return a
t=H.iy(b,null)
s=H.ac(a,t)
throw H.c(s)}finally{$.jj=!1}},
ac:function(a,b){return new H.h5("TypeError: "+H.e(P.c1(a))+": type '"+H.kJ(a)+"' is not a subtype of type '"+b+"'")},
jP:function(a,b){return new H.dJ("CastError: "+H.e(P.c1(a))+": type '"+H.kJ(a)+"' is not a subtype of type '"+b+"'")},
kJ:function(a){var t
if(a instanceof H.av){t=H.jn(a)
if(t!=null)return H.iy(t,null)
return"Closure"}return H.bn(a)},
af:function(a){if(!0===a)return!1
if(!!J.v(a).$isiW)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ac(a,"bool"))},
ao:function(a){throw H.c(new H.hg(a))},
b:function(a){if(H.af(a))throw H.c(P.lN(null))},
ni:function(a){throw H.c(new P.dU(a))},
mn:function(a){return new H.fx(a)},
l0:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kV:function(a){return u.getIsolateTag(a)},
I:function(a){return new H.am(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ih:function(a){if(a==null)return
return a.$ti},
kW:function(a,b){return H.ju(a["$as"+H.e(b)],H.ih(a))},
a3:function(a,b,c){var t,s
t=H.kW(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aq:function(a,b){var t,s
t=H.ih(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iy:function(a,b){var t=H.b7(a,b)
return t},
b7:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dx(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b7(t,b)
return H.mG(a,b)}return"unknown-reified-type"},
mG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b7(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b7(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b7(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mW(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b7(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dx:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bq("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b7(o,c)}return p?"":"<"+s.l(0)+">"},
ii:function(a){var t,s,r
if(a instanceof H.av){t=H.jn(a)
if(t!=null)return H.iy(t,null)}s=J.v(a).constructor.name
if(a==null)return s
r=H.dx(a.$ti,0,null)
return s+r},
ju:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jr(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jr(a,null,b)
return b},
i9:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ih(a)
s=J.v(a)
if(s[b]==null)return!1
return H.kN(H.ju(s[d],t),c)},
dy:function(a,b,c,d){var t,s
if(a==null)return a
t=H.i9(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dx(c,0,null)
throw H.c(H.jP(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
np:function(a,b,c,d){var t,s
if(a==null)return a
t=H.i9(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dx(c,0,null)
throw H.c(H.ac(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
kN:function(a,b){var t,s,r,q,p
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
if(!H.W(r,b[p]))return!1}return!0},
nq:function(a,b,c){return H.jr(a,b,H.kW(b,c))},
W:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="L")return!0
if('func' in b)return H.kX(a,b)
if('func' in a)return b.name==="iW"||b.name==="D"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iy(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kN(H.ju(o,t),r)},
kM:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.W(o,n)||H.W(n,o)))return!1}return!0},
mN:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ak(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.W(p,o)||H.W(o,p)))return!1}return!0},
kX:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.W(t,s)||H.W(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kM(r,q,!1))return!1
if(!H.kM(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.W(g,f)||H.W(f,g)))return!1}}return H.mN(a.named,b.named)},
jr:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
ny:function(a){var t=$.jo
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nu:function(a){return H.aE(a)},
nr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n7:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.D))
t=$.jo.$1(a)
s=$.id[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.io[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kL.$2(a,t)
if(t!=null){s=$.id[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.io[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iw(r)
$.id[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.io[t]=r
return r}if(p==="-"){o=H.iw(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kZ(a,r)
if(p==="*")throw H.c(P.kx(t))
if(u.leafTags[t]===true){o=H.iw(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kZ(a,r)},
kZ:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.js(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iw:function(a){return J.js(a,!1,null,!!a.$isr)},
n9:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iw(t)
else return J.js(t,c,null,null)},
n2:function(){if(!0===$.jp)return
$.jp=!0
H.n3()},
n3:function(){var t,s,r,q,p,o,n,m
$.id=Object.create(null)
$.io=Object.create(null)
H.n1()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l_.$1(p)
if(o!=null){n=H.n9(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n1:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.b4(C.L,H.b4(C.Q,H.b4(C.x,H.b4(C.x,H.b4(C.P,H.b4(C.M,H.b4(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jo=new H.ik(p)
$.kL=new H.il(o)
$.l_=new H.im(n)},
b4:function(a,b){return a(b)||b},
nh:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fs:function fs(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h3:function h3(a,b,c,d,e,f){var _=this
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
h7:function h7(a){this.a=a},
iG:function iG(a){this.a=a},
d9:function d9(a,b){this.a=a
this.b=b},
ip:function ip(a){this.a=a},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
it:function it(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
av:function av(){},
fU:function fU(){},
fH:function fH(){},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(a){this.a=a},
dJ:function dJ(a){this.a=a},
fx:function fx(a){this.a=a},
hg:function hg(a){this.a=a},
am:function am(a,b){this.a=a
this.b=b},
a8:function a8(a,b,c,d,e,f,g,h){var _=this
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
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
i5:function(a){var t,s,r
if(!!J.v(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ae:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b5(b,a))},
bl:function bl(){},
aY:function aY(){},
f0:function f0(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
ch:function ch(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
cl:function cl(){},
f7:function f7(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
mW:function(a){return J.ak(H.B(a?Object.keys(a):[],[null]))},
ix:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cb.prototype
return J.ca.prototype}if(typeof a=="string")return J.ay.prototype
if(a==null)return J.eH.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.D)return a
return J.ig(a)},
js:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ig:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jp==null){H.n2()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kx("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iZ()]
if(p!=null)return p
p=H.n7(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$iZ(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ak:function(a){a.fixed$length=Array
return a},
V:function(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.D)return a
return J.ig(a)},
bO:function(a){if(a==null)return a
if(a.constructor==Array)return J.ax.prototype
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.D)return a
return J.ig(a)},
kT:function(a){if(typeof a=="number")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aI.prototype
return a},
mY:function(a){if(typeof a=="number")return J.aU.prototype
if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aI.prototype
return a},
kU:function(a){if(typeof a=="string")return J.ay.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aI.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.az.prototype
return a}if(a instanceof P.D)return a
return J.ig(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).B(a,b)},
a6:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kT(a).X(a,b)},
l7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kT(a).a5(a,b)},
b8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n6(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.V(a).h(a,b)},
l8:function(a,b,c,d){return J.j(a).du(a,b,c,d)},
jv:function(a,b){return J.kU(a).aO(a,b)},
iH:function(a,b){return J.j(a).dM(a,b)},
l9:function(a,b,c){return J.j(a).dN(a,b,c)},
jw:function(a,b){return J.j(a).bL(a,b)},
iI:function(a,b){return J.j(a).T(a,b)},
jx:function(a,b,c){return J.j(a).bO(a,b,c)},
la:function(a,b){return J.j(a).e0(a,b)},
iJ:function(a,b,c){return J.j(a).bP(a,b,c)},
lb:function(a,b,c){return J.j(a).bQ(a,b,c)},
jy:function(a,b,c){return J.j(a).bR(a,b,c)},
dz:function(a,b){return J.j(a).e3(a,b)},
lc:function(a,b){return J.j(a).bS(a,b)},
ld:function(a,b,c){return J.j(a).bT(a,b,c)},
jz:function(a,b,c,d){return J.j(a).bU(a,b,c,d)},
le:function(a,b){return J.bO(a).bV(a,b)},
lf:function(a,b,c,d,e){return J.j(a).bW(a,b,c,d,e)},
lg:function(a,b){return J.mY(a).U(a,b)},
iK:function(a,b,c){return J.V(a).e7(a,b,c)},
iL:function(a){return J.j(a).bY(a)},
lh:function(a){return J.j(a).bZ(a)},
li:function(a){return J.j(a).ed(a)},
lj:function(a,b){return J.j(a).c1(a,b)},
iM:function(a,b){return J.j(a).c2(a,b)},
lk:function(a,b,c,d){return J.j(a).c3(a,b,c,d)},
ll:function(a,b,c,d,e){return J.j(a).ek(a,b,c,d,e)},
lm:function(a,b,c,d,e){return J.j(a).c4(a,b,c,d,e)},
ln:function(a,b,c,d,e,f){return J.j(a).el(a,b,c,d,e,f)},
lo:function(a,b){return J.bO(a).t(a,b)},
dA:function(a,b){return J.j(a).c5(a,b)},
lp:function(a,b){return J.j(a).c6(a,b)},
lq:function(a){return J.j(a).em(a)},
jA:function(a,b){return J.bO(a).an(a,b)},
lr:function(a){return J.j(a).ge_(a)},
b9:function(a){return J.v(a).gA(a)},
aN:function(a){return J.bO(a).gC(a)},
ba:function(a){return J.V(a).gj(a)},
ls:function(a){return J.j(a).gb4(a)},
lt:function(a){return J.v(a).gD(a)},
lu:function(a){return J.j(a).geM(a)},
lv:function(a){return J.j(a).gaG(a)},
iN:function(a){return J.j(a).gm(a)},
iO:function(a){return J.j(a).gn(a)},
jB:function(a){return J.j(a).gI(a)},
iP:function(a,b){return J.j(a).ae(a,b)},
lw:function(a){return J.j(a).aI(a)},
lx:function(a,b){return J.j(a).b8(a,b)},
ly:function(a,b,c){return J.j(a).b9(a,b,c)},
jC:function(a,b,c){return J.j(a).bc(a,b,c)},
lz:function(a,b){return J.j(a).c9(a,b)},
lA:function(a,b){return J.bO(a).cb(a,b)},
jD:function(a){return J.bO(a).eF(a)},
lB:function(a,b){return J.j(a).L(a,b)},
lC:function(a,b,c,d){return J.j(a).bh(a,b,c,d)},
lD:function(a){return J.kU(a).eP(a)},
bb:function(a){return J.v(a).l(a)},
lE:function(a,b,c,d){return J.j(a).eR(a,b,c,d)},
lF:function(a,b,c){return J.j(a).cl(a,b,c)},
lG:function(a,b,c){return J.j(a).cm(a,b,c)},
iQ:function(a,b,c){return J.j(a).cn(a,b,c)},
lH:function(a,b,c){return J.j(a).co(a,b,c)},
jE:function(a,b,c){return J.j(a).cp(a,b,c)},
jF:function(a,b,c){return J.j(a).cq(a,b,c)},
jG:function(a,b,c){return J.j(a).cr(a,b,c)},
jH:function(a,b,c,d){return J.j(a).cs(a,b,c,d)},
jI:function(a,b,c,d){return J.j(a).ct(a,b,c,d)},
lI:function(a,b){return J.j(a).cv(a,b)},
lJ:function(a,b,c){return J.j(a).eS(a,b,c)},
lK:function(a,b,c,d,e,f,g){return J.j(a).cz(a,b,c,d,e,f,g)},
lL:function(a,b,c,d,e){return J.j(a).cB(a,b,c,d,e)},
a:function a(){},
eG:function eG(){},
eH:function eH(){},
bi:function bi(){},
fk:function fk(){},
aI:function aI(){},
az:function az(){},
ax:function ax(a){this.$ti=a},
iX:function iX(a){this.$ti=a},
dE:function dE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aU:function aU(){},
cb:function cb(){},
ca:function ca(){},
ay:function ay(){}},P={
mv:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mO()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bM(new P.hi(t),1)).observe(s,{childList:true})
return new P.hh(t,s,r)}else if(self.setImmediate!=null)return P.mP()
return P.mQ()},
mw:function(a){H.ie()
self.scheduleImmediate(H.bM(new P.hj(a),0))},
mx:function(a){H.ie()
self.setImmediate(H.bM(new P.hk(a),0))},
my:function(a){P.j9(C.v,a)},
j9:function(a,b){var t=C.b.M(a.a,1000)
return H.ms(t<0?0:t,b)},
mJ:function(a,b){if(H.b6(a,{func:1,args:[P.L,P.L]})){b.toString
return a}else{b.toString
return a}},
mA:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ad))
H.b(b.a===0)
b.a=1
try{a.cj(new P.hy(b),new P.hz(b))}catch(r){t=H.M(r)
s=H.ap(r)
P.nd(new P.hA(b,t,s))}},
kA:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aY()
b.aN(a)
P.bv(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bF(r)}},
bv:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.i6(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bv(t.a,b)}s=t.a
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
P.i6(null,null,p,o,s)
return}s=$.A
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.A
H.b(l==null?s!=null:l!==s)
j=$.A
$.A=l
i=j}else i=null
s=b.c
if(s===8)new P.hE(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hD(r,b,m).$0()}else if((s&2)!==0)new P.hC(t,r,b).$0()
if(i!=null){H.b(!0)
$.A=i}s=r.b
if(!!J.v(s).$isew){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aC(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kA(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aC(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mI:function(){var t,s
for(;t=$.b3,t!=null;){$.bK=null
s=t.b
$.b3=s
if(s==null)$.bJ=null
t.a.$0()}},
mM:function(){$.jk=!0
try{P.mI()}finally{$.bK=null
$.jk=!1
if($.b3!=null)$.$get$jf().$1(P.kO())}},
kI:function(a){var t=new P.cK(a,null)
if($.b3==null){$.bJ=t
$.b3=t
if(!$.jk)$.$get$jf().$1(P.kO())}else{$.bJ.b=t
$.bJ=t}},
mL:function(a){var t,s,r
t=$.b3
if(t==null){P.kI(a)
$.bK=$.bJ
return}s=new P.cK(a,null)
r=$.bK
if(r==null){s.b=t
$.bK=s
$.b3=s}else{s.b=r.b
r.b=s
$.bK=s
if(s.b==null)$.bJ=s}},
nd:function(a){var t=$.A
if(C.f===t){P.i8(null,null,C.f,a)
return}t.toString
P.i8(null,null,t,t.b2(a))},
mt:function(a,b){var t=$.A
if(t===C.f){t.toString
return P.j9(a,b)}return P.j9(a,t.b2(b))},
je:function(a){var t,s
H.b(a!=null)
t=$.A
H.b(a==null?t!=null:a!==t)
s=$.A
$.A=a
return s},
i6:function(a,b,c,d,e){var t={}
t.a=d
P.mL(new P.i7(t,e))},
kG:function(a,b,c,d){var t,s
if($.A===c)return d.$0()
t=P.je(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.A=s}},
kH:function(a,b,c,d,e){var t,s
if($.A===c)return d.$1(e)
t=P.je(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.A=s}},
mK:function(a,b,c,d,e,f){var t,s
if($.A===c)return d.$2(e,f)
t=P.je(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.A=s}},
i8:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b2(d):c.e1(d)
P.kI(d)},
hi:function hi(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
iT:function iT(){},
hn:function hn(){},
i0:function i0(a,b){this.a=a
this.$ti=b},
cS:function cS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hx:function hx(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a},
hz:function hz(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hF:function hF(a){this.a=a},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a,b){this.a=a
this.b=b},
fM:function fM(){},
fO:function fO(a){this.a=a},
fP:function fP(a,b){this.a=a
this.b=b},
fN:function fN(){},
j8:function j8(){},
aO:function aO(a,b){this.a=a
this.b=b},
i4:function i4(){},
i7:function i7(a,b){this.a=a
this.b=b},
hR:function hR(){},
hT:function hT(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
k8:function(a,b){return new H.a8(0,null,null,null,null,null,0,[a,b])},
T:function(){return new H.a8(0,null,null,null,null,null,0,[null,null])},
aB:function(a){return H.mX(a,new H.a8(0,null,null,null,null,null,0,[null,null]))},
b1:function(a,b){return new P.hL(0,null,null,null,null,null,0,[a,b])},
aC:function(a,b,c,d){return new P.hJ(0,null,null,null,null,null,0,[d])},
ji:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ma:function(a,b,c){var t,s
if(P.jl(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bL()
C.a.k(s,a)
try{P.mH(a,t)}finally{H.b(C.a.gaF(s)===a)
s.pop()}s=P.ki(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eE:function(a,b,c){var t,s,r
if(P.jl(a))return b+"..."+c
t=new P.bq(b)
s=$.$get$bL()
C.a.k(s,a)
try{r=t
r.a=P.ki(r.ga9(),a,", ")}finally{H.b(C.a.gaF(s)===a)
s.pop()}s=t
s.a=s.ga9()+c
s=t.ga9()
return s.charCodeAt(0)==0?s:s},
jl:function(a){var t,s
for(t=0;s=$.$get$bL(),t<s.length;++t)if(a===s[t])return!0
return!1},
mH:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gC(a)
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
j2:function(a,b){var t,s
t=P.aC(null,null,null,b)
for(s=J.aN(a);s.p();)t.k(0,s.gq(s))
return t},
ka:function(a){var t,s,r
t={}
if(P.jl(a))return"{...}"
s=new P.bq("")
try{C.a.k($.$get$bL(),a)
r=s
r.a=r.ga9()+"{"
t.a=!0
J.jA(a,new P.eR(t,s))
t=s
t.a=t.ga9()+"}"}finally{t=$.$get$bL()
H.b(C.a.gaF(t)===a)
t.pop()}t=s.ga9()
return t.charCodeAt(0)==0?t:t},
j3:function(a,b){var t=new P.eO(null,0,0,0,[b])
t.da(a,b)
return t},
hL:function hL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hJ:function hJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
bx:function bx(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hH:function hH(){},
j1:function j1(){},
cc:function cc(){},
m:function m(){},
ce:function ce(){},
eR:function eR(a,b){this.a=a
this.b=b},
aX:function aX(){},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hM:function hM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fA:function fA(){},
fz:function fz(){},
by:function by(){},
m_:function(a){var t=J.v(a)
if(!!t.$isav)return t.l(a)
return"Instance of '"+H.bn(a)+"'"},
k9:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.aN(a);s.p();)C.a.k(t,s.gq(s))
if(b)return t
return J.ak(t)},
ki:function(a,b,c){var t=J.aN(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
lS:function(a,b){return J.lg(a,b)},
lU:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
lV:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bV:function(a){if(a>=10)return""+a
return"0"+a},
lX:function(a,b,c,d,e,f){return new P.aw(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bb(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m_(a)},
lN:function(a){return new P.bS(a)},
jJ:function(a){return new P.Y(!1,null,null,a)},
iR:function(a,b,c){return new P.Y(!0,a,b,c)},
lM:function(a){return new P.Y(!1,null,a,"Must not be null")},
fp:function(a,b,c){return new P.cs(null,null,!0,a,b,"Value not in range")},
aF:function(a,b,c,d,e){return new P.cs(b,c,!0,a,d,"Invalid value")},
kf:function(a,b,c,d,e,f){if(C.b.X(0,a)||C.b.X(a,c))throw H.c(P.aF(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.X(b,c))throw H.c(P.aF(b,a,c,"end",f))
return b}return c},
z:function(a,b,c,d,e){var t=e!=null?e:J.ba(b)
return new P.eB(b,t,!0,a,c,"Index out of range")},
t:function(a){return new P.h8(a)},
kx:function(a){return new P.h6(a)},
j7:function(a){return new P.b_(a)},
ah:function(a){return new P.dL(a)},
c2:function(a){return new P.hw(a)},
a5:function(a){H.ix(H.e(a))},
ag:function ag(){},
G:function G(){},
bd:function bd(a,b){this.a=a
this.b=b},
X:function X(){},
aw:function aw(a){this.a=a},
e1:function e1(){},
e2:function e2(){},
aS:function aS(){},
bS:function bS(a){this.a=a},
cq:function cq(){},
Y:function Y(a,b,c,d){var _=this
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
h8:function h8(a){this.a=a},
h6:function h6(a){this.a=a},
b_:function b_(a){this.a=a},
dL:function dL(a){this.a=a},
cz:function cz(){},
dU:function dU(a){this.a=a},
iV:function iV(){},
hw:function hw(a){this.a=a},
e5:function e5(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
S:function S(){},
c9:function c9(){},
h:function h(){},
aW:function aW(){},
L:function L(){},
a4:function a4(){},
D:function D(){},
aZ:function aZ(){},
o:function o(){},
bq:function bq(a){this.a=a},
jb:function jb(){},
ib:function(a){var t,s,r,q,p
if(a==null)return
t=P.T()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mU:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jA(a,new P.ia(t))
return t},
jX:function(){var t=$.jW
if(t==null){t=J.iK(window.navigator.userAgent,"Opera",0)
$.jW=t}return t},
lW:function(){var t,s
t=$.jT
if(t!=null)return t
s=$.jU
if(s==null){s=J.iK(window.navigator.userAgent,"Firefox",0)
$.jU=s}if(s)t="-moz-"
else{s=$.jV
if(s==null){s=!P.jX()&&J.iK(window.navigator.userAgent,"Trident/",0)
$.jV=s}if(s)t="-ms-"
else t=P.jX()?"-o-":"-webkit-"}$.jT=t
return t},
ia:function ia(a){this.a=a},
ng:function(a){return Math.sqrt(a)},
hQ:function hQ(){},
U:function U(){},
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
em:function em(){},
en:function en(){},
er:function er(){},
et:function et(){},
a0:function a0(){},
a7:function a7(){},
eA:function eA(){},
eK:function eK(){},
eT:function eT(){},
eV:function eV(){},
fb:function fb(){},
fi:function fi(){},
fm:function fm(){},
fn:function fn(){},
fq:function fq(){},
fr:function fr(){},
bp:function bp(){},
fQ:function fQ(){},
w:function w(){},
fR:function fR(){},
bs:function bs(){},
bt:function bt(){},
h2:function h2(){},
ha:function ha(){},
cV:function cV(){},
cW:function cW(){},
d1:function d1(){},
d2:function d2(){},
db:function db(){},
dc:function dc(){},
dh:function dh(){},
di:function di(){},
dF:function dF(){},
dG:function dG(){},
aP:function aP(){},
fc:function fc(){},
fv:function fv(){},
fw:function fw(){},
fG:function fG(){},
d7:function d7(){},
d8:function d8(){}},W={
lY:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).P(t,a,b,c)
s.toString
t=new H.cJ(new W.P(s),new W.e4(),[W.q])
return t.ga7(t)},
lZ:function(a){return"wheel"},
bf:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lu(a)
if(typeof s==="string")t=a.tagName}catch(r){H.M(r)}return t},
mz:function(a,b){return document.createElement(a)},
aM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a1:function(a,b,c,d,e){var t=c==null?null:W.kK(new W.hv(c))
t=new W.hu(0,a,b,t,!1,[e])
t.dm(a,b,c,!1,e)
return t},
kB:function(a){var t,s
t=document.createElement("a")
s=new W.hV(t,window.location)
s=new W.bw(s)
s.dn(a)
return s},
mC:function(a,b,c,d){return!0},
mD:function(a,b,c,d){var t,s,r,q,p
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
kF:function(){var t=P.o
t=new W.i1(P.j2(C.q,t),P.aC(null,null,null,t),P.aC(null,null,null,t),P.aC(null,null,null,t),null)
t.ds(null,new H.bj(C.q,new W.i2(),[H.aq(C.q,0),null]),["TEMPLATE"],null)
return t},
kK:function(a){var t=$.A
if(t===C.f)return a
return t.e2(a)},
i:function i(){},
bR:function bR(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
as:function as(){},
bT:function bT(){},
dI:function dI(){},
au:function au(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
aQ:function aQ(){},
dQ:function dQ(){},
Z:function Z(){},
aR:function aR(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
bW:function bW(){},
be:function be(){},
dX:function dX(){},
bX:function bX(){},
dY:function dY(){},
bY:function bY(){},
dZ:function dZ(){},
bZ:function bZ(){},
c_:function c_(){},
c0:function c0(){},
e_:function e_(){},
e0:function e0(){},
a_:function a_(){},
e4:function e4(){},
f:function f(){},
d:function d(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
ex:function ex(){},
c7:function c7(){},
ey:function ey(){},
bg:function bg(){},
c8:function c8(){},
ez:function ez(){},
bh:function bh(){},
aA:function aA(){},
eP:function eP(){},
eQ:function eQ(){},
eW:function eW(){},
eY:function eY(){},
bk:function bk(){},
eZ:function eZ(){},
K:function K(){},
P:function P(a){this.a=a},
q:function q(){},
cn:function cn(){},
bm:function bm(){},
a9:function a9(){},
fl:function fl(){},
fo:function fo(){},
cr:function cr(){},
cv:function cv(){},
fy:function fy(){},
al:function al(){},
fD:function fD(){},
fF:function fF(){},
aa:function aa(){},
fK:function fK(){},
fL:function fL(a){this.a=a},
cB:function cB(){},
fS:function fS(){},
fT:function fT(){},
br:function br(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
aG:function aG(){},
h0:function h0(){},
h1:function h1(){},
cH:function cH(){},
aH:function aH(){},
h9:function h9(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
aJ:function aJ(){},
bu:function bu(){},
hf:function hf(a){this.a=a},
jd:function jd(){},
ho:function ho(){},
hp:function hp(){},
hG:function hG(){},
cZ:function cZ(){},
hY:function hY(){},
hZ:function hZ(){},
hl:function hl(){},
hq:function hq(a){this.a=a},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jg:function jg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hu:function hu(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hv:function hv(a){this.a=a},
bw:function bw(a){this.a=a},
n:function n(){},
cp:function cp(a){this.a=a},
f9:function f9(a){this.a=a},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
bD:function bD(){},
hW:function hW(){},
hX:function hX(){},
i1:function i1(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i2:function i2(){},
i_:function i_(){},
c4:function c4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
co:function co(){},
j5:function j5(){},
jc:function jc(){},
hV:function hV(a,b){this.a=a
this.b=b},
dj:function dj(a){this.a=a},
i3:function i3(a){this.a=a},
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
bE:function bE(){},
bF:function bF(){},
d5:function d5(){},
d6:function d6(){},
da:function da(){},
dd:function dd(){},
de:function de(){},
bG:function bG(){},
bH:function bH(){},
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
ne:function(a){var t,s
t=document
s=W.aA
W.a1(t,"keydown",new B.iz(),!1,s)
W.a1(t,"keyup",new B.iA(),!1,s)
if(!$.nf)W.a1(t,"mousemove",new B.iB(),!1,W.K)
s=W.K
W.a1(t,"mousedown",new B.iC(),!1,s)
W.a1(t,"mouseup",new B.iD(),!1,s)},
md:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$ic()
r=$.$get$bN()
q=new T.N(new Float32Array(16))
q.Z()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fd(a,b,c,0,new T.l(t),-0.02,s,r,q,new T.l(p),new T.l(o),new T.l(n),new T.l(new Float32Array(3)),"camera:orbit",!1,!0)
t.dc(a,b,c,d)
return t},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
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
fh:function fh(a){this.a=a},
lT:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.l(new Float32Array(3))
r.u(t,s,d8)
q=new T.l(new Float32Array(3))
q.u(d6,s,d8)
p=new T.l(new Float32Array(3))
p.u(d6,d7,d8)
o=new T.l(new Float32Array(3))
o.u(t,d7,d8)
n=-d8
m=new T.l(new Float32Array(3))
m.u(t,s,n)
l=new T.l(new Float32Array(3))
l.u(t,d7,n)
k=new T.l(new Float32Array(3))
k.u(d6,d7,n)
j=new T.l(new Float32Array(3))
j.u(d6,s,n)
i=new T.l(new Float32Array(3))
i.u(t,d7,n)
h=new T.l(new Float32Array(3))
h.u(t,d7,d8)
g=new T.l(new Float32Array(3))
g.u(d6,d7,d8)
f=new T.l(new Float32Array(3))
f.u(d6,d7,n)
e=new T.l(new Float32Array(3))
e.u(d6,s,d8)
d=new T.l(new Float32Array(3))
d.u(t,s,d8)
c=new T.l(new Float32Array(3))
c.u(t,s,n)
b=new T.l(new Float32Array(3))
b.u(d6,s,n)
a=new T.l(new Float32Array(3))
a.u(d6,s,n)
a0=new T.l(new Float32Array(3))
a0.u(d6,d7,n)
a1=new T.l(new Float32Array(3))
a1.u(d6,d7,d8)
a2=new T.l(new Float32Array(3))
a2.u(d6,s,d8)
a3=new T.l(new Float32Array(3))
a3.u(t,s,n)
a4=new T.l(new Float32Array(3))
a4.u(t,s,d8)
s=new T.l(new Float32Array(3))
s.u(t,d7,d8)
a5=new T.l(new Float32Array(3))
a5.u(t,d7,n)
t=new T.u(new Float32Array(2))
t.v(d3,d5)
n=new T.u(new Float32Array(2))
n.v(d2,d5)
a6=new T.u(new Float32Array(2))
a6.v(d2,d4)
a7=new T.u(new Float32Array(2))
a7.v(d3,d4)
a8=new T.u(new Float32Array(2))
a8.v(d2,d5)
a9=new T.u(new Float32Array(2))
a9.v(d2,d4)
b0=new T.u(new Float32Array(2))
b0.v(d3,d4)
b1=new T.u(new Float32Array(2))
b1.v(d3,d5)
b2=new T.u(new Float32Array(2))
b2.v(d3,d4)
b3=new T.u(new Float32Array(2))
b3.v(d3,d5)
b4=new T.u(new Float32Array(2))
b4.v(d2,d5)
b5=new T.u(new Float32Array(2))
b5.v(d2,d4)
b6=new T.u(new Float32Array(2))
b6.v(d2,d4)
b7=new T.u(new Float32Array(2))
b7.v(d3,d4)
b8=new T.u(new Float32Array(2))
b8.v(d3,d5)
b9=new T.u(new Float32Array(2))
b9.v(d2,d5)
c0=new T.u(new Float32Array(2))
c0.v(d2,d5)
c1=new T.u(new Float32Array(2))
c1.v(d2,d4)
c2=new T.u(new Float32Array(2))
c2.v(d3,d4)
c3=new T.u(new Float32Array(2))
c3.v(d3,d5)
c4=new T.u(new Float32Array(2))
c4.v(d3,d5)
c5=new T.u(new Float32Array(2))
c5.v(d2,d5)
c6=new T.u(new Float32Array(2))
c6.v(d2,d4)
c7=new T.u(new Float32Array(2))
c7.v(d3,d4)
c8=new G.c6(!1,[],[],[],P.T())
c8.aw("aTexUV")
c8.aw("aNormal")
c8.d0(6)
c8.d1([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.bk("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$kz(),c9<6;++c9){d0=t[c9]
c8.bl("aNormal",[d0,d0,d0,d0])}return c8},
m3:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.K(t,$.$get$k2())
C.a.K(s,$.$get$k3())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.F)(t),++o){n=t[o]
m=J.j(n)
l=C.a.h(s,m.gS(n))
k=new T.l(new Float32Array(3))
k.E(l)
k.k(0,C.a.h(s,m.gO(n)))
k.Y(0,0.5)
k.G(0)
l=C.a.h(s,m.gO(n))
j=new T.l(new Float32Array(3))
j.E(l)
j.k(0,C.a.h(s,m.ga1(n)))
j.Y(0,0.5)
j.G(0)
l=C.a.h(s,m.ga1(n))
i=new T.l(new Float32Array(3))
i.E(l)
i.k(0,C.a.h(s,m.gS(n)))
i.Y(0,0.5)
i.G(0)
h=s.length
C.a.k(s,k)
g=s.length
C.a.k(s,j)
f=s.length
C.a.k(s,i)
C.a.k(q,new G.aj(m.gS(n),h,f))
C.a.k(q,new G.aj(m.gO(n),g,h))
C.a.k(q,new G.aj(m.ga1(n),f,g))
C.a.k(q,new G.aj(h,g,f))}}e=new G.c6(!1,[],[],[],P.T())
e.aw("aTexUV")
e.aw("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.F)(t),++o){n=t[o]
m=J.j(n)
d=C.a.h(s,m.gS(n))
H.b(Math.sqrt(d.gV())<1.01&&Math.sqrt(d.gV())>0.99)
c=C.a.h(s,m.gO(n))
H.b(Math.sqrt(c.gV())<1.01&&Math.sqrt(c.gV())>0.99)
b=C.a.h(s,m.ga1(n))
H.b(Math.sqrt(b.gV())<1.01&&Math.sqrt(b.gV())>0.99)
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
e.bl("aNormal",[d,c,b])
m=new T.l(new Float32Array(3))
m.E(d)
m.Y(0,a4)
l=new T.l(new Float32Array(3))
l.E(c)
l.Y(0,a4)
a2=new T.l(new Float32Array(3))
a2.E(b)
a2.Y(0,a4)
e.d2([m,l,a2])
e.bk("aTexUV",[new T.u(a),new T.u(a0),new T.u(a1)])}return e}},G={
mu:function(a){var t,s,r
t=H.B(a.split("\n"),[P.o])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ar(t,"\n")},
ky:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.c_(a,b)
t.bf(a,s,c)
t.bX(a,s)
r=t.bb(a,s,35713)
if(r!=null&&!r){q=t.ba(a,s)
P.a5("E:Compilation failed:")
P.a5("E:"+G.mu(c))
P.a5("E:Failure:")
P.a5(C.i.a6("E:",q))
throw H.c(q)}return s},
E:function(a,b,c){return new G.aj(a,b,c)},
k0:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iN(a[s])
b[t+1]=J.iO(a[s])
b[t+2]=J.jB(a[s])}return b},
m1:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iN(a[s])
b[t+1]=J.iO(a[s])}return b},
m2:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iN(a[s])
b[t+1]=J.iO(a[s])
b[t+2]=J.jB(a[s])
b[t+3]=J.lv(a[s])}return b},
m0:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b8(a[s],0)
b[t+1]=J.b8(a[s],1)
b[t+2]=J.b8(a[s],2)
b[t+3]=J.b8(a[s],3)}return b},
mB:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gH(t),s=s.gC(s),r=b.x,q=[[P.h,P.y]],p=[P.X],o=[T.an],n=[T.l],m=[T.u];s.p();){l=s.gq(s)
if(!r.J(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.kS>0)H.ix("I: "+l)
continue}k=t.h(0,l)
switch($.$get$Q().h(0,l).a){case"vec2":b.ag(l,G.m1(H.dy(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.ag(l,G.k0(H.dy(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.ag(l,G.m2(H.dy(k,"$ish",o,"$ash"),null),4)
break
case"float":b.ag(l,new Float32Array(H.i5(H.dy(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.ag(l,G.m0(H.dy(k,"$ish",q,"$ash"),null),4)
break
default:if(H.af(!1))H.ao("unknown type for "+H.e(l)+" ["+J.lt(k[0]).l(0)+"] ["+new H.am(H.ii(k),null).l(0)+"] "+H.e(k))}}},
k1:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.T()
q=J.li(t.a)
p=new G.eX(t,q,4,r,s,null,0,-1,null,null,P.T(),"meshdata:"+a,!1,!0)
o=G.k0(c.d,null)
r.i(0,"aPosition",J.iL(t.a))
p.ch=o
p.bn("aPosition",o,3)
n=$.$get$Q().h(0,"aPosition")
if(n==null)H.J("Unknown canonical aPosition")
H.b(s.J(0,"aPosition"))
m=s.h(0,"aPosition")
J.dz(t.a,q)
t.c7(0,m,0)
t.cA(0,r.h(0,"aPosition"),m,n.bo(),5126,!1,0,0)
s=c.d7()
p.y=J.iL(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saU(new Uint8Array(H.i5(s)))
p.Q=5121}else if(r<196608){p.saU(new Uint16Array(H.i5(s)))
p.Q=5123}else{p.saU(new Uint32Array(H.i5(s)))
p.Q=5125}J.dz(t.a,q)
s=p.y
r=p.cx
q=J.v(r)
H.b(!!q.$isku||!!q.$iskv||!!q.$iskw)
J.iJ(t.a,34963,s)
J.jz(t.a,34963,r,35048)
G.mB(c,p)
return p},
kg:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aC(null,null,null,P.o)
s=c.b
r=d.b
q=c.f
p=J.lh(b.a)
o=G.ky(b.a,35633,s)
J.jx(b.a,p,o)
n=G.ky(b.a,35632,r)
J.jx(b.a,p,n)
if(q.length>0)J.lE(b.a,p,q,35980)
J.lz(b.a,p)
if(!J.ly(b.a,p,35714))H.J(J.lx(b.a,p))
t=new G.fu(b,c,d,p,P.j2(c.c,null),P.T(),P.T(),t,null,a,!1,!0)
t.de(a,b,c,d)
return t},
fC:function(a){return new G.fB(a,null,[],[],[],[],0,P.T())},
f_:function f_(){},
cI:function cI(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dH:function dH(){},
dK:function dK(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aj:function aj(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e){var _=this
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
eU:function eU(a,b,c,d){var _=this
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
fj:function fj(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fu:function fu(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
fB:function fB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fE:function fE(){}},R={cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.c=m},fI:function fI(){},fJ:function fJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kR:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.E(c)
s=b.d
t.cc(0,s)
r=b.cx
H.e(b)
q=C.a.gaF(e)
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
p.e9(new T.aD(o))
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
C.a.k(e,b.ch)
a.d6(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.F)(s),++l)A.kR(a,s[l],t,d,e)},
cm:function cm(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bo:function bo(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
ft:function ft(){},
dw:function(a){var t,s
t=C.V.eo(a,0,new A.ij())
s=536870911&t+(C.b.cC(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ij:function ij(){}},T={
H:function(a,b,c){var t=new T.l(new Float32Array(3))
t.u(a,b,c)
return t},
aD:function aD(a){this.a=a},
N:function N(a){this.a=a},
u:function u(a){this.a=a},
l:function l(a){this.a=a},
an:function an(a){this.a=a}},Q={
n8:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
t={}
s=document
r=new R.fJ(0,0,null,null,null,null)
r.df(C.p.cF(s,"stats"),"blue","gray")
q=C.p.eE(s,"#webgl-canvas")
p=q.clientWidth
o=q.clientHeight
q.width=p
q.height=o
n=new G.dK(null,q)
s=(q&&C.H).cE(q,"webgl2",P.aB(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
n.a=s
if(s==null)H.J(P.c2('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+H.e(J.lw(s))
if($.kS>0)P.a5("I: "+m)
J.lf(s,0,0,0,1)
J.dA(s,2929)
l=B.md(25,0,0,q)
s=new T.N(new Float32Array(16))
s.Z()
m=new T.N(new Float32Array(16))
m.Z()
k=new G.fj(l,50,1,0.1,1000,s,m,new T.N(new Float32Array(16)),P.T(),"perspective",!1,!0)
k.br()
s=H.B([],[A.bo])
j=new R.cu(q,k,null,n,s,17664,0,0,0,0,"main",!1,!0)
j.dd("main",n,null)
j.ce(null)
W.a1(window,"resize",j.geI(),!1,W.f)
m=G.kg("building",n,$.$get$l2(),$.$get$l1())
i=new A.bo(m,[k],[],"building",!1,!0)
H.b(!0)
C.a.k(s,i)
m=G.kg("sky",n,$.$get$kQ(),$.$get$kP())
h=[]
H.b(!0)
C.a.k(s,new A.bo(m,[k],h,"sky",!1,!0))
g=new G.eU(P.T(),"mat",!1,!0)
g.ax("cDepthTest",!0)
g.ax("cDepthWrite",!0)
g.ax("cBlendEquation",$.$get$jK())
g.ax("cStencilFunc",$.$get$kh())
f=G.k1("icosahedron-3",m,B.m3(3,1,!0))
s=new Float32Array(9)
m=new T.N(new Float32Array(16))
m.Z()
e=new T.N(new Float32Array(16))
e.Z()
d=new Float32Array(3)
c=new Float32Array(3)
b=new Float32Array(3)
a=new Float32Array(3)
e.Y(0,100)
H.b(!0)
C.a.k(h,new A.cm(g,f,[],new T.aD(s),m,e,new T.l(d),new T.l(c),new T.l(b),new T.l(a),f.a,!1,!0))
a0=new T.u(new Float32Array(2))
a0.v(0.01,0.01)
a1=B.lT(!0,0.99,0.01,0.99,0.01,1,2,1)
a2=a1.e.h(0,"aTexUV")
for(a3=8;a3<16;++a3)a2[a3].E(a0)
a4=G.k1("house",i.d,a1)
for(s=i.f,m=a4.a,a5=-10;a5<10;a5+=4)for(a6=-10;a6<10;a6+=4){h=new Float32Array(9)
e=new T.N(new Float32Array(16))
e.Z()
d=new Float32Array(16)
c=new T.N(d)
c.Z()
b=new Float32Array(3)
a=new Float32Array(3)
a7=new Float32Array(3)
a8=new Float32Array(3)
d[12]=a5
d[13]=0
d[14]=a6
H.b(!0)
C.a.k(s,new A.cm(g,a4,[],new T.aD(h),e,c,new T.l(b),new T.l(a),new T.l(a7),new T.l(a8),m,!1,!0))}t.a=0
new Q.iv(t,l,j,r).$1(0)},
iv:function iv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,T,Q]
setFunctionNamesIfNecessary(v)
var $={}
H.iY.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gA:function(a){return H.aE(a)},
l:function(a){return"Instance of '"+H.bn(a)+"'"},
gD:function(a){return new H.am(H.ii(a),null)}}
J.eG.prototype={
l:function(a){return String(a)},
gA:function(a){return a?519018:218159},
gD:function(a){return C.ap},
$isag:1}
J.eH.prototype={
B:function(a,b){return null==b},
l:function(a){return"null"},
gA:function(a){return 0},
gD:function(a){return C.aj},
$isL:1}
J.bi.prototype={
gA:function(a){return 0},
gD:function(a){return C.ai},
l:function(a){return String(a)},
$isk7:1}
J.fk.prototype={}
J.aI.prototype={}
J.az.prototype={
l:function(a){var t=a[$.$get$jS()]
return t==null?this.cY(a):J.bb(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiW:1}
J.ax.prototype={
k:function(a,b){if(!!a.fixed$length)H.J(P.t("add"))
a.push(b)},
K:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.J(P.t("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.J(P.ah(a)))
a.push(q)}},
cb:function(a,b){return new H.bj(a,b,[H.aq(a,0),null])},
ar:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gen:function(a){if(a.length>0)return a[0]
throw H.c(H.eF())},
gaF:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eF())},
be:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.J(P.t("setRange"))
P.kf(b,c,a.length,null,null,null)
t=C.b.a8(c,b)
if(t===0)return
if(e<0)H.J(P.aF(e,0,null,"skipCount",null))
s=J.V(d)
if(C.b.X(e+t,s.gj(d)))throw H.c(H.mb())
if(C.b.a5(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bN:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ah(a))}return!1},
cT:function(a,b){if(!!a.immutable$list)H.J(P.t("sort"))
H.mq(a,P.mV())},
aJ:function(a){return this.cT(a,null)},
F:function(a,b){var t
for(t=0;t<a.length;++t)if(J.C(a[t],b))return!0
return!1},
l:function(a){return P.eE(a,"[","]")},
gC:function(a){return new J.dE(a,a.length,0,null,[H.aq(a,0)])},
gA:function(a){return H.aE(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.J(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iR(b,"newLength",null))
if(b<0)throw H.c(P.aF(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b5(a,b))
if(b>=a.length||b<0)throw H.c(H.b5(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.J(P.t("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b5(a,b))
if(b>=a.length||b<0)throw H.c(H.b5(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isk:1,
$ish:1}
J.iX.prototype={}
J.dE.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.F(t))
r=this.c
if(r>=s){this.sbs(null)
return!1}this.sbs(t[r]);++this.c
return!0},
sbs:function(a){this.d=a}}
J.aU.prototype={
U:function(a,b){var t
if(typeof b!=="number")throw H.c(H.R(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaD(b)
if(this.gaD(a)===t)return 0
if(this.gaD(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaD:function(a){return a===0?1/a<0:a<0},
e4:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.t(""+a+".ceil()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
e5:function(a,b,c){if(this.U(b,c)>0)throw H.c(H.R(b))
if(this.U(a,b)<0)return b
if(this.U(a,c)>0)return c
return a},
eQ:function(a,b){var t
if(b>20)throw H.c(P.aF(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaD(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
a6:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a-b},
cD:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a/b},
w:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a*b},
aL:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bJ(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.bJ(a,b)},
bJ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.t("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
b_:function(a,b){var t
if(a>0)t=this.dS(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dS:function(a,b){return b>31?0:a>>>b},
cC:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return(a&b)>>>0},
d_:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return(a^b)>>>0},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a<b},
X:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a>b},
b7:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a>=b},
gD:function(a){return C.as},
$isG:1,
$asG:function(){return[P.a4]},
$isX:1,
$isa4:1}
J.cb.prototype={
gD:function(a){return C.ar},
$isy:1}
J.ca.prototype={
gD:function(a){return C.aq}}
J.ay.prototype={
aO:function(a,b){if(b>=a.length)throw H.c(H.b5(a,b))
return a.charCodeAt(b)},
a6:function(a,b){if(typeof b!=="string")throw H.c(P.iR(b,null,null))
return a+b},
cU:function(a,b,c){var t
if(c>a.length)throw H.c(P.aF(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bg:function(a,b){return this.cU(a,b,0)},
bi:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fp(b,null,null))
if(b>c)throw H.c(P.fp(b,null,null))
if(c>a.length)throw H.c(P.fp(c,null,null))
return a.substring(b,c)},
cV:function(a,b){return this.bi(a,b,null)},
eP:function(a){return a.toLowerCase()},
e7:function(a,b,c){if(c>a.length)throw H.c(P.aF(c,0,a.length,null,null))
return H.nh(a,b,c)},
U:function(a,b){var t
if(typeof b!=="string")throw H.c(H.R(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
l:function(a){return a},
gA:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gD:function(a){return C.ak},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b5(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isG:1,
$asG:function(){return[P.o]},
$iso:1}
H.k.prototype={}
H.aV.prototype={
gC:function(a){return new H.cd(this,this.gj(this),0,null,[H.a3(this,"aV",0)])},
aH:function(a,b){return this.cX(0,b)},
eO:function(a,b){var t,s
t=H.B([],[H.a3(this,"aV",0)])
C.a.sj(t,this.gj(this))
for(s=0;C.b.a5(s,this.gj(this));++s)t[s]=this.t(0,s)
return t},
eN:function(a){return this.eO(a,!0)}}
H.cd.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.V(t)
r=s.gj(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.ah(t))
if(C.b.b7(this.c,r)){this.sai(null)
return!1}this.sai(s.t(t,this.c));++this.c
return!0},
sai:function(a){this.d=a}}
H.cf.prototype={
gC:function(a){return new H.eS(null,J.aN(this.a),this.b,this.$ti)},
gj:function(a){return J.ba(this.a)},
$asS:function(a,b){return[b]}}
H.e3.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.eS.prototype={
p:function(){var t=this.b
if(t.p()){this.sai(this.c.$1(t.gq(t)))
return!0}this.sai(null)
return!1},
gq:function(a){return this.a},
sai:function(a){this.a=a},
$asc9:function(a,b){return[b]}}
H.bj.prototype={
gj:function(a){return J.ba(this.a)},
t:function(a,b){return this.b.$1(J.lo(this.a,b))},
$ask:function(a,b){return[b]},
$asaV:function(a,b){return[b]},
$asS:function(a,b){return[b]}}
H.cJ.prototype={
gC:function(a){return new H.he(J.aN(this.a),this.b,this.$ti)}}
H.he.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aT.prototype={}
H.iE.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hO.prototype={
sey:function(a){this.z=a},
seB:function(a){this.ch=a}}
H.b0.prototype={
dq:function(){var t,s
t=this.e
s=t.a
this.c.k(0,s)
this.dv(s,t)},
bM:function(a,b){if(!this.f.B(0,a))return
if(this.Q.k(0,b)&&!this.y)this.y=!0
this.b1()},
eH:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.as(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bD();++r.d}this.y=!1}this.b1()},
dW:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).k(r,a)
t=this.ch;(t&&C.a).k(t,b)},
eG:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.J(P.t("removeRange"))
P.kf(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cP:function(a,b){if(!this.r.B(0,a))return
this.db=b},
er:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.L(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j3(null,null)
this.cx=t}t.a_(0,new H.hI(a,c))},
eq:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aE()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j3(null,null)
this.cx=t}t.a_(0,this.gez())},
es:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a5(a)
if(b!=null)P.a5(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bb(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bx(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.L(0,s)},
am:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.M(o)
p=H.ap(o)
this.es(q,p)
if(this.db){this.aE()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mR(r)
u.globalState.d=H.jq(t,"$isb0")
if(t!=null)$=t.gex()
if(this.cx!=null)for(;n=this.cx,!n.gaq(n);)this.cx.cd().$0()}return s},
ca:function(a){return this.b.h(0,a)},
dv:function(a,b){var t=this.b
if(t.J(0,a))throw H.c(P.c2("Registry: ports must be registered only once."))
t.i(0,a,b)},
b1:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aE()},
aE:function(){var t,s,r
t=this.cx
if(t!=null)t.a2(0)
for(t=this.b,s=t.gcw(t),s=s.gC(s);s.p();)s.gq(s).dw()
t.a2(0)
this.c.a2(0)
u.globalState.z.as(0,this.a)
this.dx.a2(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].L(0,t[r+1])
this.ch=null}},
gex:function(){return this.d},
ge8:function(){return this.e}}
H.hI.prototype={
$0:function(){this.a.L(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hr.prototype={
ef:function(){var t=this.a
if(t.b===t.c)return
return t.cd()},
cg:function(){var t,s,r
t=this.ef()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.J(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaq(s)}else s=!1
else s=!1
else s=!1
if(s)H.J(P.c2("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaq(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aB(["command","close"])
r=new H.a2(!0,P.b1(null,P.y)).N(r)
s.toString
self.postMessage(r)}return!1}t.eD()
return!0},
bH:function(){if(self.window!=null)new H.hs(this).$0()
else for(;this.cg(););},
at:function(){var t,s,r,q,p
if(!u.globalState.x)this.bH()
else try{this.bH()}catch(r){t=H.M(r)
s=H.ap(r)
q=u.globalState.Q
p=P.aB(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a2(!0,P.b1(null,P.y)).N(p)
q.toString
self.postMessage(p)}}}
H.hs.prototype={
$0:function(){if(!this.a.cg())return
P.mt(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aL.prototype={
eD:function(){var t=this.a
if(t.y){C.a.k(t.z,this)
return}t.am(this.b)}}
H.hN.prototype={}
H.eC.prototype={
$0:function(){H.m7(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eD.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b6(s,{func:1,args:[P.L,P.L]}))s.$2(this.e,this.d)
else if(H.b6(s,{func:1,args:[P.L]}))s.$1(this.e)
else s.$0()}t.b1()},
$S:function(){return{func:1,v:true}}}
H.hm.prototype={}
H.b2.prototype={
L:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mF(b)
if(t.ge8()===s){s=J.V(r)
switch(s.h(r,0)){case"pause":t.bM(s.h(r,1),s.h(r,2))
break
case"resume":t.eH(s.h(r,1))
break
case"add-ondone":t.dW(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eG(s.h(r,1))
break
case"set-errors-fatal":t.cP(s.h(r,1),s.h(r,2))
break
case"ping":t.er(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eq(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.k(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.as(0,s)
break}return}u.globalState.f.a.a_(0,new H.aL(t,new H.hP(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b2){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gA:function(a){return this.b.a}}
H.hP.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dt(0,this.b)},
$S:function(){return{func:1}}}
H.bI.prototype={
L:function(a,b){var t,s,r
t=P.aB(["command","message","port",this,"msg",b])
s=new H.a2(!0,P.b1(null,P.y)).N(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bI){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){return C.b.d_((this.b<<16^this.a<<8)>>>0,this.c)}}
H.ct.prototype={
dw:function(){this.c=!0
this.b=null},
dt:function(a,b){if(this.c)return
this.b.$1(b)},
$isml:1}
H.fY.prototype={
dg:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.a_(0,new H.aL(s,new H.fZ(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.ie()
this.c=self.setTimeout(H.bM(new H.h_(this,b),0),a)}else{H.b(a>0)
throw H.c(P.t("Timer greater than 0."))}}}
H.fZ.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h_.prototype={
$0:function(){var t=this.a
t.c=null
H.iu()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.at.prototype={
gA:function(a){var t=this.a
t=C.b.b_(t,0)^C.b.M(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.at){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a2.prototype={
N:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.v(a)
if(!!t.$isbl)return["buffer",a]
if(!!t.$isaY)return["typed",a]
if(!!t.$isp)return this.cL(a)
if(!!t.$ism4){r=this.gcI()
q=t.gH(a)
q=H.j4(q,r,H.a3(q,"S",0),null)
q=P.k9(q,!0,H.a3(q,"S",0))
t=t.gcw(a)
t=H.j4(t,r,H.a3(t,"S",0),null)
return["map",q,P.k9(t,!0,H.a3(t,"S",0))]}if(!!t.$isk7)return this.cM(a)
if(!!t.$isa)this.cu(a)
if(!!t.$isml)this.au(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb2)return this.cN(a)
if(!!t.$isbI)return this.cO(a)
if(!!t.$isav){p=a.$static_name
if(p==null)this.au(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isat)return["capability",a.a]
if(!(a instanceof P.D))this.cu(a)
return["dart",u.classIdExtractor(a),this.cK(u.classFieldsExtractor(a))]},
au:function(a,b){throw H.c(P.t((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cu:function(a){return this.au(a,null)},
cL:function(a){var t
H.b(typeof a!=="string")
t=this.cJ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.au(a,"Can't serialize indexable: ")},
cJ:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.N(a[s])
return t},
cK:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.N(a[t]))
return a},
cM:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.au(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.N(a[t[r]])
return["js-object",t,s]},
cO:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cN:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aK.prototype={
a3:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.jJ("Bad serialized message: "+H.e(a)))
switch(C.a.gen(a)){case"ref":H.b(J.C(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.C(a[0],"buffer"))
t=a[1]
C.a.k(this.b,t)
return t
case"typed":H.b(J.C(a[0],"typed"))
t=a[1]
C.a.k(this.b,t)
return t
case"fixed":H.b(J.C(a[0],"fixed"))
t=a[1]
C.a.k(this.b,t)
return J.ak(H.B(this.al(t),[null]))
case"extendable":H.b(J.C(a[0],"extendable"))
t=a[1]
C.a.k(this.b,t)
return H.B(this.al(t),[null])
case"mutable":H.b(J.C(a[0],"mutable"))
t=a[1]
C.a.k(this.b,t)
return this.al(t)
case"const":H.b(J.C(a[0],"const"))
t=a[1]
C.a.k(this.b,t)
return J.ak(H.B(this.al(t),[null]))
case"map":return this.ei(a)
case"sendport":return this.ej(a)
case"raw sendport":H.b(J.C(a[0],"raw sendport"))
t=a[1]
C.a.k(this.b,t)
return t
case"js-object":return this.eh(a)
case"function":H.b(J.C(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.k(this.b,t)
return t
case"capability":H.b(J.C(a[0],"capability"))
return new H.at(a[1])
case"dart":H.b(J.C(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.k(this.b,q)
this.al(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
al:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.a3(a[t]))
return a},
ei:function(a){var t,s,r,q,p
H.b(J.C(a[0],"map"))
t=a[1]
s=a[2]
r=P.T()
C.a.k(this.b,r)
t=J.lA(t,this.geg()).eN(0)
for(q=J.V(s),p=0;p<t.length;++p)r.i(0,t[p],this.a3(q.h(s,p)))
return r},
ej:function(a){var t,s,r,q,p,o,n
H.b(J.C(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ca(r)
if(o==null)return
n=new H.b2(o,s)}else n=new H.bI(t,r,s)
C.a.k(this.b,n)
return n},
eh:function(a){var t,s,r,q,p,o
H.b(J.C(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.k(this.b,r)
for(q=J.V(t),p=J.V(s),o=0;C.b.a5(o,q.gj(t));++o)r[q.h(t,o)]=this.a3(p.h(s,o))
return r}}
H.fs.prototype={}
H.h3.prototype={
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
H.fa.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eJ.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.h7.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iG.prototype={
$1:function(a){if(!!J.v(a).$isaS)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.d9.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaZ:1}
H.ip.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iq.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ir.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.is.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.it.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.av.prototype={
l:function(a){return"Closure '"+H.bn(this).trim()+"'"},
$isiW:1,
geT:function(){return this},
$D:null}
H.fU.prototype={}
H.fH.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bc.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var t,s
t=this.c
if(t==null)s=H.aE(this.a)
else s=typeof t!=="object"?J.b9(t):H.aE(t)
return(s^H.aE(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bn(t)+"'")}}
H.h5.prototype={
l:function(a){return this.a}}
H.dJ.prototype={
l:function(a){return this.a}}
H.fx.prototype={
l:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hg.prototype={
l:function(a){return C.i.a6("Assertion failed: ",P.c1(this.a))}}
H.am.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gA:function(a){return J.b9(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.am){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a8.prototype={
gj:function(a){return this.a},
gaq:function(a){return this.a===0},
gH:function(a){return new H.eM(this,[H.aq(this,0)])},
gcw:function(a){return H.j4(this.gH(this),new H.eI(this),H.aq(this,0),H.aq(this,1))},
J:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bA(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bA(s,b)}else return this.eu(b)},
eu:function(a){var t=this.d
if(t==null)return!1
return this.ap(this.aB(t,this.ao(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.aj(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.aj(r,b)
return s==null?null:s.b}else return this.ev(b)},
ev:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aB(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aW()
this.b=t}this.bu(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aW()
this.c=s}this.bu(s,b,c)}else{r=this.d
if(r==null){r=this.aW()
this.d=r}q=this.ao(b)
p=this.aB(r,q)
if(p==null)this.aZ(r,q,[this.aX(b,c)])
else{o=this.ap(p,b)
if(o>=0)p[o].b=c
else p.push(this.aX(b,c))}}},
as:function(a,b){if(typeof b==="string")return this.bG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bG(this.c,b)
else return this.ew(b)},
ew:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aB(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bK(q)
return q.b},
a2:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aV()}},
an:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ah(this))
t=t.c}},
bu:function(a,b,c){var t=this.aj(a,b)
if(t==null)this.aZ(a,b,this.aX(b,c))
else t.b=c},
bG:function(a,b){var t
if(a==null)return
t=this.aj(a,b)
if(t==null)return
this.bK(t)
this.bB(a,b)
return t.b},
aV:function(){this.r=this.r+1&67108863},
aX:function(a,b){var t,s
t=new H.eL(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aV()
return t},
bK:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aV()},
ao:function(a){return J.b9(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
l:function(a){return P.ka(this)},
aj:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
aZ:function(a,b,c){H.b(c!=null)
a[b]=c},
bB:function(a,b){delete a[b]},
bA:function(a,b){return this.aj(a,b)!=null},
aW:function(){var t=Object.create(null)
this.aZ(t,"<non-identifier-key>",t)
this.bB(t,"<non-identifier-key>")
return t},
$ism4:1}
H.eI.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eL.prototype={}
H.eM.prototype={
gj:function(a){return this.a.a},
gC:function(a){var t,s
t=this.a
s=new H.eN(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eN.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.sbt(null)
return!1}else{this.sbt(t.a)
this.c=this.c.c
return!0}}},
sbt:function(a){this.d=a}}
H.ik.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.il.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.o]}}}
H.im.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.o]}}}
H.bl.prototype={
gD:function(a){return C.ab},
$isbl:1}
H.aY.prototype={$isaY:1}
H.f0.prototype={
gD:function(a){return C.ac}}
H.ci.prototype={
gj:function(a){return a.length},
$isp:1,
$asp:function(){},
$isr:1,
$asr:function(){}}
H.cj.prototype={
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ae(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.X]},
$asaT:function(){return[P.X]},
$asm:function(){return[P.X]},
$ish:1,
$ash:function(){return[P.X]}}
H.ck.prototype={
i:function(a,b,c){H.ae(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.y]},
$asaT:function(){return[P.y]},
$asm:function(){return[P.y]},
$ish:1,
$ash:function(){return[P.y]}}
H.ch.prototype={
gD:function(a){return C.ad},
$ises:1}
H.f1.prototype={
gD:function(a){return C.ae}}
H.f2.prototype={
gD:function(a){return C.af},
h:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.f3.prototype={
gD:function(a){return C.ag},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$isk4:1}
H.f4.prototype={
gD:function(a){return C.ah},
h:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.f5.prototype={
gD:function(a){return C.al},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$isku:1}
H.f6.prototype={
gD:function(a){return C.am},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$iskv:1}
H.cl.prototype={
gD:function(a){return C.an},
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]}}
H.f7.prototype={
gD:function(a){return C.ao},
gj:function(a){return a.length},
h:function(a,b){H.ae(b,a,a.length)
return a[b]},
$iskw:1}
H.bz.prototype={}
H.bA.prototype={}
H.bB.prototype={}
H.bC.prototype={}
P.hi.prototype={
$1:function(a){var t,s
H.iu()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hh.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.ie()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hj.prototype={
$0:function(){H.iu()
this.a.$0()},
$S:function(){return{func:1}}}
P.hk.prototype={
$0:function(){H.iu()
this.a.$0()},
$S:function(){return{func:1}}}
P.iT.prototype={}
P.hn.prototype={}
P.i0.prototype={
e6:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.j7("Future already completed"))
t.aR(b)}}
P.cS.prototype={
eC:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b6(this.d,a.a)},
ep:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b6(s,{func:1,args:[P.D,P.aZ]}))return t.eJ(s,a.a,a.b)
else return t.b6(s,a.a)}}
P.ad.prototype={
cj:function(a,b){var t,s,r
t=$.A
if(t!==C.f){t.toString
if(b!=null)b=P.mJ(b,t)}s=new P.ad(0,t,null,[null])
r=b==null?1:3
this.bv(new P.cS(null,s,r,a,b,[H.aq(this,0),null]))
return s},
ci:function(a){return this.cj(a,null)},
aN:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bv:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jq(this.c,"$iscS")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bv(a)
return}this.aN(t)}H.b(this.a>=4)
t=this.b
t.toString
P.i8(null,null,t,new P.hx(this,a))}},
bF:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bF(a)
return}this.aN(s)}H.b(this.a>=4)
t.a=this.aC(a)
s=this.b
s.toString
P.i8(null,null,s,new P.hB(t,this))}},
aY:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aC(t)},
aC:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aR:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.i9(a,"$isew",t,"$asew")
if(s){t=H.i9(a,"$isad",t,null)
if(t)P.kA(a,this)
else P.mA(a,this)}else{r=this.aY()
H.b(this.a<4)
this.a=4
this.c=a
P.bv(this,r)}},
ay:function(a,b){var t
H.b(this.a<4)
t=this.aY()
H.b(this.a<4)
this.a=8
this.c=new P.aO(a,b)
P.bv(this,t)},
dA:function(a){return this.ay(a,null)},
$isew:1,
gb0:function(){return this.a},
gdP:function(){return this.c}}
P.hx.prototype={
$0:function(){P.bv(this.a,this.b)},
$S:function(){return{func:1}}}
P.hB.prototype={
$0:function(){P.bv(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hy.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aR(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hz.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.ay(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hA.prototype={
$0:function(){this.a.ay(this.b,this.c)},
$S:function(){return{func:1}}}
P.hE.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cf(q.d)}catch(n){s=H.M(n)
r=H.ap(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aO(s,r)
p.a=!0
return}if(!!J.v(t).$isew){if(t instanceof P.ad&&t.gb0()>=4){if(t.gb0()===8){q=t
H.b(q.gb0()===8)
p=this.b
p.b=q.gdP()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ci(new P.hF(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hF.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hD.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b6(r.d,this.c)}catch(q){t=H.M(q)
s=H.ap(q)
r=this.a
r.b=new P.aO(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hC.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eC(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ep(t)
p.a=!1}}catch(o){s=H.M(o)
r=H.ap(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aO(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cK.prototype={}
P.fM.prototype={
gj:function(a){var t,s
t={}
s=new P.ad(0,$.A,null,[P.y])
t.a=0
this.eA(new P.fO(t),!0,new P.fP(t,s),s.gdz())
return s}}
P.fO.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fP.prototype={
$0:function(){this.b.aR(this.a.a)},
$S:function(){return{func:1}}}
P.fN.prototype={}
P.j8.prototype={}
P.aO.prototype={
l:function(a){return H.e(this.a)},
$isaS:1}
P.i4.prototype={}
P.i7.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cq()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.hR.prototype={
eK:function(a){var t,s,r
try{if(C.f===$.A){a.$0()
return}P.kG(null,null,this,a)}catch(r){t=H.M(r)
s=H.ap(r)
P.i6(null,null,this,t,s)}},
eL:function(a,b){var t,s,r
try{if(C.f===$.A){a.$1(b)
return}P.kH(null,null,this,a,b)}catch(r){t=H.M(r)
s=H.ap(r)
P.i6(null,null,this,t,s)}},
e1:function(a){return new P.hT(this,a)},
b2:function(a){return new P.hS(this,a)},
e2:function(a){return new P.hU(this,a)},
h:function(a,b){return},
cf:function(a){if($.A===C.f)return a.$0()
return P.kG(null,null,this,a)},
b6:function(a,b){if($.A===C.f)return a.$1(b)
return P.kH(null,null,this,a,b)},
eJ:function(a,b,c){if($.A===C.f)return a.$2(b,c)
return P.mK(null,null,this,a,b,c)}}
P.hT.prototype={
$0:function(){return this.a.cf(this.b)},
$S:function(){return{func:1}}}
P.hS.prototype={
$0:function(){return this.a.eK(this.b)},
$S:function(){return{func:1}}}
P.hU.prototype={
$1:function(a){return this.a.eL(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hL.prototype={
ao:function(a){return H.na(a)&0x3ffffff},
ap:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hJ.prototype={
gC:function(a){var t=new P.bx(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
F:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dB(b)},
dB:function(a){var t=this.d
if(t==null)return!1
return this.aA(t[this.az(a)],a)>=0},
ca:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.F(0,a)?a:null
else return this.dJ(a)},
dJ:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.az(a)]
r=this.aA(s,a)
if(r<0)return
return J.b8(s,r).gdD()},
k:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.ji()
this.b=t}return this.bx(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.ji()
this.c=s}return this.bx(s,b)}else return this.a_(0,b)},
a_:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ji()
this.d=t}s=this.az(b)
r=t[s]
if(r==null){q=[this.aQ(b)]
H.b(q!=null)
t[s]=q}else{if(this.aA(r,b)>=0)return!1
r.push(this.aQ(b))}return!0},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.by(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.by(this.c,b)
else return this.dK(0,b)},
dK:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.az(b)]
r=this.aA(s,b)
if(r<0)return!1
this.bz(s.splice(r,1)[0])
return!0},
a2:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aP()}},
bx:function(a,b){var t
if(a[b]!=null)return!1
t=this.aQ(b)
H.b(!0)
a[b]=t
return!0},
by:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bz(t)
delete a[b]
return!0},
aP:function(){this.r=this.r+1&67108863},
aQ:function(a){var t,s
t=new P.hK(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aP()
return t},
bz:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aP()},
az:function(a){return J.b9(a)&0x3ffffff},
aA:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1}}
P.hK.prototype={
gdD:function(){return this.a}}
P.bx.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.sah(null)
return!1}else{this.sah(t.a)
this.c=this.c.b
return!0}}},
sah:function(a){this.d=a}}
P.hH.prototype={}
P.j1.prototype={$isk:1}
P.cc.prototype={$isk:1,$ish:1}
P.m.prototype={
gC:function(a){return new H.cd(a,this.gj(a),0,null,[H.a3(a,"m",0)])},
t:function(a,b){return this.h(a,b)},
cb:function(a,b){return new H.bj(a,b,[H.a3(a,"m",0),null])},
eo:function(a,b,c){var t,s,r,q
t=this.gj(a)
for(s=b,r=0;C.b.a5(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gj(a)
if(t==null?q!=null:t!==q)throw H.c(P.ah(a))}return s},
l:function(a){return P.eE(a,"[","]")}}
P.ce.prototype={}
P.eR.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aX.prototype={
an:function(a,b){var t,s
for(t=J.aN(this.gH(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.ba(this.gH(a))},
l:function(a){return P.ka(a)}}
P.eO.prototype={
da:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbI(H.B(t,[b]))},
gC:function(a){return new P.hM(this,this.c,this.d,this.b,null,this.$ti)},
gaq:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=this.gj(this)
if(C.b.X(0,b)||b>=t)H.J(P.z(b,this,"index",null,t))
return this.a[(C.b.a6(this.b,b)&this.a.length-1)>>>0]},
a2:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eE(this,"{","}")},
cd:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eF());++this.d
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
if(this.b===t)this.bD();++this.d},
bD:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.be(s,0,q,t,r)
C.a.be(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbI(s)},
sbI:function(a){this.a=a}}
P.hM.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.J(P.ah(t))
s=this.d
if(s===this.b){this.sah(null)
return!1}this.sah(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sah:function(a){this.e=a}}
P.fA.prototype={
K:function(a,b){var t
for(t=J.aN(b);t.p();)this.k(0,t.gq(t))},
l:function(a){return P.eE(this,"{","}")},
$isk:1}
P.fz.prototype={}
P.by.prototype={}
P.ag.prototype={}
P.G.prototype={}
P.bd.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bd))return!1
return this.a===b.a&&this.b===b.b},
U:function(a,b){return C.b.U(this.a,b.a)},
gA:function(a){var t=this.a
return(t^C.b.b_(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.lU(H.mk(this))
s=P.bV(H.mi(this))
r=P.bV(H.me(this))
q=P.bV(H.mf(this))
p=P.bV(H.mh(this))
o=P.bV(H.mj(this))
n=P.lV(H.mg(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isG:1,
$asG:function(){return[P.bd]}}
P.X.prototype={}
P.aw.prototype={
a5:function(a,b){return C.b.a5(this.a,b.gdC())},
X:function(a,b){return C.b.X(this.a,b.gdC())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aw))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
U:function(a,b){return C.b.U(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.e2()
s=this.a
if(s<0)return"-"+new P.aw(0-s).l(0)
r=t.$1(C.b.M(s,6e7)%60)
q=t.$1(C.b.M(s,1e6)%60)
p=new P.e1().$1(s%1e6)
return""+C.b.M(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isG:1,
$asG:function(){return[P.aw]}}
P.e1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.y]}}}
P.e2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.y]}}}
P.aS.prototype={}
P.bS.prototype={
l:function(a){return"Assertion failed"}}
P.cq.prototype={
l:function(a){return"Throw of null."}}
P.Y.prototype={
gaT:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaS:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaT()+s+r
if(!this.a)return q
p=this.gaS()
o=P.c1(this.b)
return q+p+": "+H.e(o)}}
P.cs.prototype={
gaT:function(){return"RangeError"},
gaS:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eB.prototype={
gaT:function(){return"RangeError"},
gaS:function(){H.b(this.a)
if(J.l7(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.h8.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.h6.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b_.prototype={
l:function(a){return"Bad state: "+this.a}}
P.dL.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.c1(t))+"."}}
P.cz.prototype={
l:function(a){return"Stack Overflow"},
$isaS:1}
P.dU.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iV.prototype={}
P.hw.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.e5.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.J(P.iR(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kc(b,"expando$values")
return s==null?null:H.kc(s,t)},
l:function(a){return"Expando:"+H.e(this.b)}}
P.y.prototype={}
P.S.prototype={
aH:function(a,b){return new H.cJ(this,b,[H.a3(this,"S",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gC(this)
for(s=0;t.p();)++s
return s},
ga7:function(a){var t,s
t=this.gC(this)
if(!t.p())throw H.c(H.eF())
s=t.gq(t)
if(t.p())throw H.c(H.mc())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.lM("index"))
if(b<0)H.J(P.aF(b,0,null,"index",null))
for(t=this.gC(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.z(b,this,"index",null,s))},
l:function(a){return P.ma(this,"(",")")}}
P.c9.prototype={}
P.h.prototype={$isk:1}
P.aW.prototype={}
P.L.prototype={
gA:function(a){return P.D.prototype.gA.call(this,this)},
l:function(a){return"null"}}
P.a4.prototype={$isG:1,
$asG:function(){return[P.a4]}}
P.D.prototype={constructor:P.D,$isD:1,
B:function(a,b){return this===b},
gA:function(a){return H.aE(this)},
l:function(a){return"Instance of '"+H.bn(this)+"'"},
gD:function(a){return new H.am(H.ii(this),null)},
toString:function(){return this.l(this)}}
P.aZ.prototype={}
P.o.prototype={$isG:1,
$asG:function(){return[P.o]}}
P.bq.prototype={
gj:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga9:function(){return this.a}}
P.jb.prototype={}
W.i.prototype={}
W.bR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.dB.prototype={
gj:function(a){return a.length}}
W.dC.prototype={
l:function(a){return String(a)}}
W.dD.prototype={
l:function(a){return String(a)}}
W.as.prototype={$isas:1}
W.bT.prototype={
cE:function(a,b,c){var t=this.dF(a,b,P.mU(c,null))
return t},
dF:function(a,b,c){return a.getContext(b,c)}}
W.dI.prototype={
aI:function(a){return P.ib(a.getContextAttributes())}}
W.au.prototype={
gj:function(a){return a.length}}
W.dM.prototype={
gj:function(a){return a.length}}
W.dN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.dP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.aQ.prototype={
bw:function(a,b){var t,s
t=$.$get$jR()
s=t[b]
if(typeof s==="string")return s
s=this.dT(a,b)
t[b]=s
return s},
dT:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lW()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dQ.prototype={}
W.Z.prototype={}
W.aR.prototype={}
W.dR.prototype={
gj:function(a){return a.length}}
W.dS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.dT.prototype={
gj:function(a){return a.length}}
W.dV.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.bW.prototype={}
W.be.prototype={
dX:function(a,b){return a.adoptNode(b)},
cF:function(a,b){return a.getElementById(b)},
eE:function(a,b){return a.querySelector(b)}}
W.dX.prototype={
l:function(a){return String(a)}}
W.bX.prototype={
ec:function(a,b){return a.createHTMLDocument(b)}}
W.dY.prototype={
gS:function(a){return a.a},
gO:function(a){return a.b},
ga1:function(a){return a.c}}
W.bY.prototype={
gS:function(a){return a.a},
gO:function(a){return a.b},
ga1:function(a){return a.c}}
W.dZ.prototype={
gaG:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.bZ.prototype={
gaG:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.c_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.U]},
$isk:1,
$ask:function(){return[P.U]},
$isr:1,
$asr:function(){return[P.U]},
$asm:function(){return[P.U]},
$ish:1,
$ash:function(){return[P.U]},
$asn:function(){return[P.U]}}
W.c0.prototype={
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gad(a))+" x "+H.e(this.gab(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isU)return!1
return a.left===t.gc8(b)&&a.top===t.gck(b)&&this.gad(a)===t.gad(b)&&this.gab(a)===t.gab(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gad(a)
q=this.gab(a)
return W.kE(W.aM(W.aM(W.aM(W.aM(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gab:function(a){return a.height},
gc8:function(a){return a.left},
gck:function(a){return a.top},
gad:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isU:1,
$asU:function(){}}
W.e_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.o]},
$isk:1,
$ask:function(){return[P.o]},
$isr:1,
$asr:function(){return[P.o]},
$asm:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asn:function(){return[P.o]}}
W.e0.prototype={
gj:function(a){return a.length}}
W.a_.prototype={
ge_:function(a){return new W.hq(a)},
l:function(a){return a.localName},
P:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jZ
if(t==null){t=H.B([],[W.co])
s=new W.cp(t)
C.a.k(t,W.kB(null))
C.a.k(t,W.kF())
$.jZ=s
d=s}else d=t
t=$.jY
if(t==null){t=new W.dj(d)
$.jY=t
c=t}else{t.a=d
c=t}}if($.ai==null){t=document
s=t.implementation
s=(s&&C.I).ec(s,"")
$.ai=s
$.iU=s.createRange()
s=$.ai
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ai.head;(t&&C.J).T(t,r)}t=$.ai
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jq(s,"$isas")}t=$.ai
if(!!this.$isas)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ai.body;(t&&C.n).T(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.F(C.T,a.tagName)){t=$.iU;(t&&C.B).cH(t,q)
t=$.iU
p=(t&&C.B).ea(t,b)}else{q.innerHTML=b
p=$.ai.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.T(p,s)}t=$.ai.body
if(q==null?t!=null:q!==t)J.jD(q)
c.bd(p)
C.p.dX(document,p)
return p},
eb:function(a,b,c){return this.P(a,b,c,null)},
cR:function(a,b,c,d){a.textContent=null
this.T(a,this.P(a,b,c,d))},
cQ:function(a,b){return this.cR(a,b,null,null)},
ae:function(a,b){return a.getAttribute(b)},
dL:function(a,b){return a.removeAttribute(b)},
$isa_:1,
geM:function(a){return a.tagName}}
W.e4.prototype={
$1:function(a){return!!J.v(a).$isa_},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
du:function(a,b,c,d){return a.addEventListener(b,H.bM(c,1),!1)}}
W.ep.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.c3]},
$isk:1,
$ask:function(){return[W.c3]},
$isr:1,
$asr:function(){return[W.c3]},
$asm:function(){return[W.c3]},
$ish:1,
$ash:function(){return[W.c3]},
$asn:function(){return[W.c3]}}
W.eq.prototype={
gj:function(a){return a.length}}
W.eu.prototype={
gj:function(a){return a.length}}
W.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.c7.prototype={}
W.ey.prototype={
gj:function(a){return a.length}}
W.bg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asm:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.c8.prototype={}
W.ez.prototype={
L:function(a,b){return a.send(b)}}
W.bh.prototype={}
W.aA.prototype={$isaA:1}
W.eP.prototype={
l:function(a){return String(a)}}
W.eQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
W.eW.prototype={
gj:function(a){return a.length}}
W.eY.prototype={
eU:function(a,b,c){return a.send(b,c)},
L:function(a,b){return a.send(b)}}
W.bk.prototype={}
W.eZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cg]},
$isk:1,
$ask:function(){return[W.cg]},
$isr:1,
$asr:function(){return[W.cg]},
$asm:function(){return[W.cg]},
$ish:1,
$ash:function(){return[W.cg]},
$asn:function(){return[W.cg]}}
W.K.prototype={$isK:1}
W.P.prototype={
ga7:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.j7("No elements"))
if(s>1)throw H.c(P.j7("More than one element"))
return t.firstChild},
K:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.T(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l9(t,c,C.z.h(t.childNodes,b))},
gC:function(a){var t=this.a.childNodes
return new W.c4(t,t.length,-1,null,[H.a3(t,"n",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$ask:function(){return[W.q]},
$ascc:function(){return[W.q]},
$asm:function(){return[W.q]},
$ash:function(){return[W.q]},
$asby:function(){return[W.q]}}
W.q.prototype={
eF:function(a){var t=a.parentNode
if(t!=null)J.iH(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.cW(a):t},
T:function(a,b){return a.appendChild(b)},
dM:function(a,b){return a.removeChild(b)},
dN:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
gb4:function(a){return a.previousSibling}}
W.cn.prototype={
b5:function(a){return a.previousNode()}}
W.bm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asm:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.a9.prototype={
gj:function(a){return a.length}}
W.fl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a9]},
$isk:1,
$ask:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$asm:function(){return[W.a9]},
$ish:1,
$ash:function(){return[W.a9]},
$asn:function(){return[W.a9]}}
W.fo.prototype={
L:function(a,b){return a.send(b)}}
W.cr.prototype={
ea:function(a,b){return a.createContextualFragment(b)},
cH:function(a,b){return a.selectNodeContents(b)}}
W.cv.prototype={
L:function(a,b){return a.send(b)}}
W.fy.prototype={
gj:function(a){return a.length}}
W.al.prototype={}
W.fD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cx]},
$isk:1,
$ask:function(){return[W.cx]},
$isr:1,
$asr:function(){return[W.cx]},
$asm:function(){return[W.cx]},
$ish:1,
$ash:function(){return[W.cx]},
$asn:function(){return[W.cx]}}
W.fF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cy]},
$isk:1,
$ask:function(){return[W.cy]},
$isr:1,
$asr:function(){return[W.cy]},
$asm:function(){return[W.cy]},
$ish:1,
$ash:function(){return[W.cy]},
$asn:function(){return[W.cy]}}
W.aa.prototype={
gj:function(a){return a.length}}
W.fK.prototype={
h:function(a,b){return this.bC(a,b)},
an:function(a,b){var t,s
for(t=0;!0;++t){s=this.dI(a,t)
if(s==null)return
b.$2(s,this.bC(a,s))}},
gH:function(a){var t=H.B([],[P.o])
this.an(a,new W.fL(t))
return t},
gj:function(a){return a.length},
bC:function(a,b){return a.getItem(b)},
dI:function(a,b){return a.key(b)},
$asaX:function(){return[P.o,P.o]}}
W.fL.prototype={
$2:function(a,b){return C.a.k(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cB.prototype={
P:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=W.lY("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.P(s).K(0,new W.P(t))
return s}}
W.fS.prototype={
P:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.P(t.createElement("table"),b,c,d)
t.toString
t=new W.P(t)
r=t.ga7(t)
r.toString
t=new W.P(r)
q=t.ga7(t)
s.toString
q.toString
new W.P(s).K(0,new W.P(q))
return s}}
W.fT.prototype={
P:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.P(t.createElement("table"),b,c,d)
t.toString
t=new W.P(t)
r=t.ga7(t)
s.toString
r.toString
new W.P(s).K(0,new W.P(r))
return s}}
W.br.prototype={$isbr:1}
W.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cD]},
$isk:1,
$ask:function(){return[W.cD]},
$isr:1,
$asr:function(){return[W.cD]},
$asm:function(){return[W.cD]},
$ish:1,
$ash:function(){return[W.cD]},
$asn:function(){return[W.cD]}}
W.fW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cC]},
$isk:1,
$ask:function(){return[W.cC]},
$isr:1,
$asr:function(){return[W.cC]},
$asm:function(){return[W.cC]},
$ish:1,
$ash:function(){return[W.cC]},
$asn:function(){return[W.cC]}}
W.fX.prototype={
gj:function(a){return a.length}}
W.aG.prototype={$isaG:1}
W.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cG]},
$isk:1,
$ask:function(){return[W.cG]},
$isr:1,
$asr:function(){return[W.cG]},
$asm:function(){return[W.cG]},
$ish:1,
$ash:function(){return[W.cG]},
$asn:function(){return[W.cG]}}
W.h1.prototype={
gj:function(a){return a.length}}
W.cH.prototype={
b5:function(a){return a.previousNode()}}
W.aH.prototype={}
W.h9.prototype={
l:function(a){return String(a)}}
W.hb.prototype={
gm:function(a){return a.x},
gI:function(a){return a.z}}
W.hc.prototype={
gj:function(a){return a.length}}
W.hd.prototype={
L:function(a,b){return a.send(b)}}
W.aJ.prototype={
gee:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
$isaJ:1}
W.bu.prototype={
gdZ:function(a){var t,s
t=P.a4
s=new P.ad(0,$.A,null,[t])
this.dE(a)
this.dO(a,W.kK(new W.hf(new P.i0(s,[t]))))
return s},
dO:function(a,b){return a.requestAnimationFrame(H.bM(b,1))},
dE:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hf.prototype={
$1:function(a){this.a.e6(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jd.prototype={}
W.ho.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.bU]},
$isk:1,
$ask:function(){return[W.bU]},
$isr:1,
$asr:function(){return[W.bU]},
$asm:function(){return[W.bU]},
$ish:1,
$ash:function(){return[W.bU]},
$asn:function(){return[W.bU]}}
W.hp.prototype={
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isU)return!1
return a.left===t.gc8(b)&&a.top===t.gck(b)&&a.width===t.gad(b)&&a.height===t.gab(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kE(W.aM(W.aM(W.aM(W.aM(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gab:function(a){return a.height},
gad:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.c5]},
$isk:1,
$ask:function(){return[W.c5]},
$isr:1,
$asr:function(){return[W.c5]},
$asm:function(){return[W.c5]},
$ish:1,
$ash:function(){return[W.c5]},
$asn:function(){return[W.c5]}}
W.cZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asm:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.hY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.aa]},
$isk:1,
$ask:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$asm:function(){return[W.aa]},
$ish:1,
$ash:function(){return[W.aa]},
$asn:function(){return[W.aa]}}
W.hZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cA]},
$isk:1,
$ask:function(){return[W.cA]},
$isr:1,
$asr:function(){return[W.cA]},
$asm:function(){return[W.cA]},
$ish:1,
$ash:function(){return[W.cA]},
$asn:function(){return[W.cA]}}
W.hl.prototype={
an:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.F)(t),++p){o=t[p]
b.$2(o,q.ae(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.o])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.k(s,p.name)}return s},
$asce:function(){return[P.o,P.o]},
$asaX:function(){return[P.o,P.o]},
gdG:function(){return this.a}}
W.hq.prototype={
h:function(a,b){return J.iP(this.a,b)},
gj:function(a){return this.gH(this).length}}
W.ht.prototype={
eA:function(a,b,c,d){return W.a1(this.a,this.b,a,!1,H.aq(this,0))}}
W.jg.prototype={}
W.hu.prototype={
dm:function(a,b,c,d,e){this.dV()},
dV:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l8(r,this.c,t,!1)}}}
W.hv.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bw.prototype={
dn:function(a){var t,s
t=$.$get$jh()
if(t.gaq(t)){for(s=0;s<262;++s)t.i(0,C.S[s],W.n_())
for(s=0;s<12;++s)t.i(0,C.r[s],W.n0())}},
aa:function(a){return $.$get$kC().F(0,W.bf(a))},
a0:function(a,b,c){var t,s,r
t=W.bf(a)
s=$.$get$jh()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gC:function(a){return new W.c4(a,this.gj(a),-1,null,[H.a3(a,"n",0)])}}
W.cp.prototype={
aa:function(a){return C.a.bN(this.a,new W.f9(a))},
a0:function(a,b,c){return C.a.bN(this.a,new W.f8(a,b,c))}}
W.f9.prototype={
$1:function(a){return a.aa(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.f8.prototype={
$1:function(a){return a.a0(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bD.prototype={
ds:function(a,b,c,d){var t,s,r
this.a.K(0,c)
t=b.aH(0,new W.hW())
s=b.aH(0,new W.hX())
this.b.K(0,t)
r=this.c
r.K(0,C.U)
r.K(0,s)},
aa:function(a){return this.a.F(0,W.bf(a))},
a0:function(a,b,c){var t,s
t=W.bf(a)
s=this.c
if(s.F(0,H.e(t)+"::"+b))return this.d.dY(c)
else if(s.F(0,"*::"+b))return this.d.dY(c)
else{s=this.b
if(s.F(0,H.e(t)+"::"+b))return!0
else if(s.F(0,"*::"+b))return!0
else if(s.F(0,H.e(t)+"::*"))return!0
else if(s.F(0,"*::*"))return!0}return!1}}
W.hW.prototype={
$1:function(a){return!C.a.F(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hX.prototype={
$1:function(a){return C.a.F(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i1.prototype={
a0:function(a,b,c){if(this.cZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iP(a,"template")==="")return this.e.F(0,b)
return!1}}
W.i2.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.i_.prototype={
aa:function(a){var t=J.v(a)
if(!!t.$isbp)return!1
t=!!t.$isw
if(t&&W.bf(a)==="foreignObject")return!1
if(t)return!0
return!1},
a0:function(a,b,c){if(b==="is"||C.i.bg(b,"on"))return!1
return this.aa(a)}}
W.c4.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbE(J.b8(this.a,t))
this.c=t
return!0}this.sbE(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbE:function(a){this.d=a}}
W.co.prototype={}
W.j5.prototype={}
W.jc.prototype={}
W.hV.prototype={}
W.dj.prototype={
bd:function(a){new W.i3(this).$2(a,null)},
ak:function(a,b){if(b==null)J.jD(a)
else J.iH(b,a)},
dR:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lr(a)
r=J.iP(s.gdG(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.M(n)}p="element unprintable"
try{p=J.bb(a)}catch(n){H.M(n)}try{o=W.bf(a)
this.dQ(a,b,t,p,o,s,r)}catch(n){if(H.M(n) instanceof P.Y)throw n
else{this.ak(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dQ:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ak(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.aa(a)){this.ak(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.a0(a,"is",g)){this.ak(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gH(f)
s=H.B(t.slice(0),[H.aq(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.a0(a,J.lD(p),q.ae(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.ae(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ae(t,p)
q.dL(t,p)}}if(!!J.v(a).$isbr)this.bd(a.content)}}
W.i3.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dR(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ak(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.ls(t)}catch(q){H.M(q)
r=t
J.iH(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.q,W.q]}}}
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
W.bE.prototype={}
W.bF.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.da.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.bG.prototype={}
W.bH.prototype={}
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
P.ia.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hQ.prototype={}
P.U.prototype={}
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
gn:function(a){return a.y}}
P.ei.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gI:function(a){return a.z}}
P.em.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a0.prototype={}
P.a7.prototype={}
P.eA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a4(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a4:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j0]},
$asm:function(){return[P.j0]},
$ish:1,
$ash:function(){return[P.j0]},
$asn:function(){return[P.j0]}}
P.eT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eV.prototype={
gS:function(a){return a.a},
gO:function(a){return a.b},
ga1:function(a){return a.c}}
P.fb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a4(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a4:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j6]},
$asm:function(){return[P.j6]},
$ish:1,
$ash:function(){return[P.j6]},
$asn:function(){return[P.j6]}}
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
P.bp.prototype={$isbp:1}
P.fQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a4(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a4:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.o]},
$asm:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asn:function(){return[P.o]}}
P.w.prototype={
P:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.co])
C.a.k(t,W.kB(null))
C.a.k(t,W.kF())
C.a.k(t,new W.i_())
c=new W.dj(new W.cp(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).eb(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.P(q)
o=t.ga7(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.T(p,r)
return p},
$isw:1}
P.fR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bs.prototype={}
P.bt.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a4(a,b)},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a4:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.ja]},
$asm:function(){return[P.ja]},
$ish:1,
$ash:function(){return[P.ja]},
$asn:function(){return[P.ja]}}
P.ha.prototype={
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
P.dF.prototype={
gj:function(a){return a.length}}
P.dG.prototype={
gj:function(a){return a.length}}
P.aP.prototype={}
P.fc.prototype={
gj:function(a){return a.length}}
P.fv.prototype={
bL:function(a,b){return a.activeTexture(b)},
bO:function(a,b,c){return a.attachShader(b,c)},
bP:function(a,b,c){return a.bindBuffer(b,c)},
bQ:function(a,b,c){return a.bindFramebuffer(b,c)},
bR:function(a,b,c){return a.bindTexture(b,c)},
bS:function(a,b){return a.blendEquation(b)},
bT:function(a,b,c){return a.blendFunc(b,c)},
bU:function(a,b,c,d){return a.bufferData(b,c,d)},
bV:function(a,b){return a.clear(b)},
bW:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bX:function(a,b){return a.compileShader(b)},
bY:function(a){return a.createBuffer()},
bZ:function(a){return a.createProgram()},
c_:function(a,b){return a.createShader(b)},
c1:function(a,b){return a.depthMask(b)},
c2:function(a,b){return a.disable(b)},
c3:function(a,b,c,d){return a.drawArrays(b,c,d)},
c4:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c5:function(a,b){return a.enable(b)},
c6:function(a,b){return a.enableVertexAttribArray(b)},
aI:function(a){return P.ib(a.getContextAttributes())},
b8:function(a,b){return a.getProgramInfoLog(b)},
b9:function(a,b,c){return a.getProgramParameter(b,c)},
ba:function(a,b){return a.getShaderInfoLog(b)},
bb:function(a,b,c){return a.getShaderParameter(b,c)},
bc:function(a,b,c){return a.getUniformLocation(b,c)},
c9:function(a,b){return a.linkProgram(b)},
bf:function(a,b,c){return a.shaderSource(b,c)},
bh:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cl:function(a,b,c){return a.uniform1f(b,c)},
cm:function(a,b,c){return a.uniform1fv(b,c)},
cn:function(a,b,c){return a.uniform1i(b,c)},
co:function(a,b,c){return a.uniform1iv(b,c)},
cp:function(a,b,c){return a.uniform2fv(b,c)},
cq:function(a,b,c){return a.uniform3fv(b,c)},
cr:function(a,b,c){return a.uniform4fv(b,c)},
cs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ct:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cv:function(a,b){return a.useProgram(b)},
cz:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fw.prototype={
e0:function(a,b){return a.beginTransformFeedback(b)},
e3:function(a,b){return a.bindVertexArray(b)},
ed:function(a){return a.createVertexArray()},
ek:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
el:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
em:function(a){return a.endTransformFeedback()},
eR:function(a,b,c,d){this.dU(a,b,c,d)
return},
dU:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eS:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bL:function(a,b){return a.activeTexture(b)},
bO:function(a,b,c){return a.attachShader(b,c)},
bP:function(a,b,c){return a.bindBuffer(b,c)},
bQ:function(a,b,c){return a.bindFramebuffer(b,c)},
bR:function(a,b,c){return a.bindTexture(b,c)},
bS:function(a,b){return a.blendEquation(b)},
bT:function(a,b,c){return a.blendFunc(b,c)},
bU:function(a,b,c,d){return a.bufferData(b,c,d)},
bV:function(a,b){return a.clear(b)},
bW:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bX:function(a,b){return a.compileShader(b)},
bY:function(a){return a.createBuffer()},
bZ:function(a){return a.createProgram()},
c_:function(a,b){return a.createShader(b)},
c1:function(a,b){return a.depthMask(b)},
c2:function(a,b){return a.disable(b)},
c3:function(a,b,c,d){return a.drawArrays(b,c,d)},
c4:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c5:function(a,b){return a.enable(b)},
c6:function(a,b){return a.enableVertexAttribArray(b)},
aI:function(a){return P.ib(a.getContextAttributes())},
b8:function(a,b){return a.getProgramInfoLog(b)},
b9:function(a,b,c){return a.getProgramParameter(b,c)},
ba:function(a,b){return a.getShaderInfoLog(b)},
bb:function(a,b,c){return a.getShaderParameter(b,c)},
bc:function(a,b,c){return a.getUniformLocation(b,c)},
c9:function(a,b){return a.linkProgram(b)},
bf:function(a,b,c){return a.shaderSource(b,c)},
bh:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cl:function(a,b,c){return a.uniform1f(b,c)},
cm:function(a,b,c){return a.uniform1fv(b,c)},
cn:function(a,b,c){return a.uniform1i(b,c)},
co:function(a,b,c){return a.uniform1iv(b,c)},
cp:function(a,b,c){return a.uniform2fv(b,c)},
cq:function(a,b,c){return a.uniform3fv(b,c)},
cr:function(a,b,c){return a.uniform4fv(b,c)},
cs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ct:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cv:function(a,b){return a.useProgram(b)},
cz:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cB:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return P.ib(this.dH(a,b))},
i:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dH:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.aW]},
$asm:function(){return[P.aW]},
$ish:1,
$ash:function(){return[P.aW]},
$asn:function(){return[P.aW]}}
P.d7.prototype={}
P.d8.prototype={}
B.iz.prototype={
$1:function(a){$.$get$ic().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aA]}}}
B.iA.prototype={
$1:function(a){$.$get$ic().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aA]}}}
B.iB.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mS=t
$.mT=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jt=s-C.b.M(window.innerWidth,2)
$.kY=-(t-C.b.M(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.K]}}}
B.iC.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bP=t-C.b.M(window.innerWidth,2)
$.bQ=-(s-C.b.M(window.innerHeight,2))
if(a.button===2)$.$get$bN().i(0,"right",!0)
else $.$get$bN().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.K]}}}
B.iD.prototype={
$1:function(a){if(a.button===2)$.$get$bN().i(0,"right",null)
else $.$get$bN().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.K]}}}
B.fd.prototype={
dc:function(a,b,c,d){var t
W.a1(d,W.lZ(d),new B.fe(this),!1,W.aJ)
W.a1(d,"mousemove",new B.ff(this),!1,W.K)
t=W.aG
W.a1(d,"touchstart",new B.fg(),!1,t)
W.a1(d,"touchmove",new B.fh(this),!1,t)
B.ne(null)}}
B.fe.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.gee(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=C.c.a8(r.fy,t)}catch(q){s=H.M(q)
P.a5(s)}},
$S:function(a){return{func:1,args:[W.aJ]}}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a8($.jt,$.bP)*0.01
s=t.id
r=$.bQ
q=$.kY
t.id=s+(r-q)*0.01
$.bP=$.jt
$.bQ=q}},
$S:function(a){return{func:1,args:[W.K]}}}
B.fg.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ac(t.clientX)
C.c.ac(t.clientY)
$.bP=s
C.c.ac(t.clientX)
$.bQ=C.c.ac(t.clientY)},
$S:function(a){return{func:1,args:[W.aG]}}}
B.fh.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ac(t.clientX)
t=C.c.ac(t.clientY)
r=this.a
r.go=r.go+C.b.a8(s,$.bP)*0.01
r.id=r.id+($.bQ-t)*0.01
$.bP=s
$.bQ=t},
$S:function(a){return{func:1,args:[W.aG]}}}
G.f_.prototype={}
G.cI.prototype={
ax:function(a,b){var t=this.d
if(H.af(!t.J(0,a)))H.ao("uniform "+a+" already set")
t.i(0,a,b)},
bp:function(){return this.d},
l:function(a){var t,s,r,q
t=H.B(["{"+new H.am(H.ii(this),null).l(0)+"}["+this.a+"]"],[P.o])
for(s=this.d,r=s.gH(s),r=r.gC(r);r.p();){q=r.gq(r)
C.a.k(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ar(t,"\n")}}
G.dH.prototype={}
G.dK.prototype={
c7:function(a,b,c){J.lp(this.a,b)
if(c>0)J.lJ(this.a,b,c)},
cA:function(a,b,c,d,e,f,g,h){J.iJ(this.a,34962,b)
J.lK(this.a,c,d,e,!1,g,h)}}
G.ev.prototype={}
G.aj.prototype={
gS:function(a){return this.a},
gO:function(a){return this.b},
ga1:function(a){return this.c}}
G.eo.prototype={
gS:function(a){return this.a},
gO:function(a){return this.b},
ga1:function(a){return this.c}}
G.c6.prototype={
aw:function(a){var t=this.e
H.b(!t.J(0,a))
H.b(C.i.bg(a,"a"))
switch($.$get$Q().h(0,a).a){case"vec2":t.i(0,a,H.B([],[T.u]))
break
case"vec3":t.i(0,a,H.B([],[T.l]))
break
case"vec4":t.i(0,a,H.B([],[T.an]))
break
case"float":t.i(0,a,H.B([],[P.X]))
break
case"uvec4":t.i(0,a,H.B([],[[P.h,P.y]]))
break
default:if(H.af(!1))H.ao("unknown type for "+a)}},
d0:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.k(s,new G.eo(t,t+1,t+2,t+3))},
d1:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.l(new Float32Array(3))
q.E(r)
C.a.k(t,q)}},
d2:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.k(this.b,new G.aj(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.l(new Float32Array(3))
p.E(q)
C.a.k(t,p)}},
bk:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.k(t,new T.u(o))}},
bl:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new T.l(new Float32Array(3))
o.E(p)
r.k(t,o)}},
d7:function(){var t,s,r,q,p,o,n,m,l
t=this.b
H.b(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.B(r,[P.y])
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
for(s=this.e,r=s.gH(s),r=r.gC(r);r.p();){q=r.gq(r)
p=$.$get$Q().h(0,q).a
C.a.k(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ar(t," ")}}
G.cF.prototype={}
G.cE.prototype={}
G.eU.prototype={}
G.eX.prototype={
bn:function(a,b,c){var t,s
if(C.i.aO(a,0)===105){if(H.af(C.b.aL(b.length,c)===this.z))H.ao("ChangeAttribute "+this.z)}else{t=C.b.aL(b.length,c)
if(H.af(t===(this.ch.length/3|0)))H.ao("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iJ(t.a,34962,s)
J.jz(t.a,34962,b,35048)},
d8:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ag:function(a,b,c){var t,s,r,q,p,o
t=J.jv(a,0)===105
if(t&&this.z===0)this.z=C.b.aL(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iL(r.a))
this.bn(a,b,c)
q=$.$get$Q().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.af(p.J(0,a)))H.ao("unexpected attribute "+a)
o=p.h(0,a)
J.dz(r.a,this.e)
r.c7(0,o,t?1:0)
r.cA(0,s.h(0,a),o,q.bo(),5126,!1,0,0)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gH(t),r=r.gC(r);r.p();){q=r.gq(r)
C.a.k(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ar(s,"  ")},
saU:function(a){this.cx=a}}
G.fj.prototype={
d3:function(a,b){var t=C.b.cD(a,b)
if(this.z===t)return
this.z=t
this.br()},
br:function(){var t,s,r,q,p,o,n
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
t.af(0,0,1/(p*s))
t.af(1,1,1/p)
t.af(2,2,(q+r)/o)
t.af(3,2,-1)
t.af(2,3,2*r*q/o)},
bp:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.l(new Float32Array(3))
o.u(r,q,p)
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
s=J.v(n)
r=!!s.$isan
k=r?s.gaG(n):1
if(!!s.$isl){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gI(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.w(t[0],n)
r=C.c.w(t[4],m)
q=C.c.w(t[8],l)
i=t[12]
h=C.c.w(t[1],n)
g=C.c.w(t[5],m)
f=C.c.w(t[9],l)
e=t[13]
d=C.c.w(t[2],n)
c=C.c.w(t[6],m)
b=C.c.w(t[10],l)
a=t[14]
a0=C.c.w(t[3],n)
a1=C.c.w(t[7],m)
a2=C.c.w(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.E(this.db)
a3.cc(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fu.prototype={
de:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
r.i(0,n,J.jC(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
r.i(0,n,J.jC(q.a,p,n))}},
dh:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gC(s);s.p();){q=s.gq(s)
if(!t.J(0,q))C.a.k(r,q)}for(t=this.x,s=new P.bx(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.F(0,q))C.a.k(r,q)}return r},
dk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gC(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.jv(n,0)){case 117:if(q.J(0,n)){m=b.h(0,n)
if(p.J(0,n))H.ix("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$Q().h(0,n)
if(l==null)H.J("unknown "+n)
H.b(q.J(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iQ(r.a,k,m)
else if(!!J.v(m).$isk4)J.lH(r.a,k,m)
break
case"float":if(l.c===0)J.lF(r.a,k,m)
else if(!!J.v(m).$ises)J.lG(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ar(m,"$isN").a
J.jI(r.a,k,!1,n)}else if(!!J.v(m).$ises)J.jI(r.a,k,!1,m)
else if(H.af(!1))H.ao("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.ar(m,"$isaD").a
J.jH(r.a,k,!1,n)}else if(!!J.v(m).$ises)J.jH(r.a,k,!1,m)
else if(H.af(!1))H.ao("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jG(j,k,H.ar(m,"$isan").a)
else J.jG(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jF(j,k,H.ar(m,"$isl").a)
else J.jF(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jE(j,k,H.ar(m,"$isu").a)
else J.jE(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a6(33984,this.ch)
J.jw(r.a,n)
n=H.ar(m,"$ismr").d9()
J.jy(r.a,3553,n)
n=this.ch
J.iQ(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a6(33984,this.ch)
J.jw(r.a,n)
n=H.ar(m,"$ismr").d9()
J.jy(r.a,34067,n)
n=this.ch
J.iQ(r.a,k,n)
this.ch=this.ch+1
break
default:H.ix("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.C(m,!0)
j=r.a
if(n)J.dA(j,2929)
else J.iM(j,2929)
break
case"cStencilFunc":H.ar(m,"$iscF")
n=m.a
j=r.a
if(n===1281)J.iM(j,2960)
else{J.dA(j,2960)
j=m.b
i=m.c
J.lC(r.a,n,j,i)}break
case"cDepthWrite":J.lj(r.a,m)
break
case"cBlendEquation":H.ar(m,"$iscE")
n=m.a
j=r.a
if(n===1281)J.iM(j,3042)
else{J.dA(j,3042)
j=m.b
i=m.c
J.ld(r.a,j,i)
J.lc(r.a,n)}break}++o
break}}h=P.lX(0,0,0,Date.now()-new P.bd(t,!1).a,0,0)
""+o
h.l(0)},
d6:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lI(t.a,this.r)
this.ch=0
this.z.a2(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r){q=b[r]
this.dk(q.a,q.bp())}s=this.Q
s.a2(0)
for(p=a.cy,p=p.gH(p),p=p.gC(p);p.p();)s.k(0,p.gq(p))
o=this.dh()
if(o.length!==0)P.a5("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dz(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.d8()
m=a.Q
l=a.z
if(n)J.la(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.ln(k,s,p,m,0,l)
else J.lm(k,s,p,m,0)}else{m=t.a
if(l>1)J.ll(m,s,0,p,l)
else J.lk(m,s,0,p)}if(n)J.lq(t.a)}}
G.x.prototype={
bo:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fB.prototype={
bj:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.F)(a),++q){p=a[q]
H.b($.$get$Q().J(0,p))
H.b(!C.a.F(s,p))
C.a.k(s,p)
r.i(0,p,this.r);++this.r}C.a.aJ(s)},
bm:function(a){var t,s,r
H.b(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.af($.$get$Q().J(0,r)))H.ao("missing uniform "+r)
H.b(!C.a.F(t,r))
C.a.k(t,r)}C.a.aJ(t)},
av:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.e,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=a[r]
H.b($.$get$Q().J(0,q))
H.b(!C.a.F(s,q))
C.a.k(s,q)}C.a.aJ(s)},
bq:function(a,b){H.b(this.b==null)
this.b=this.dl(!0,a,b)},
aM:function(a){return this.bq(a,null)},
dl:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=$.$get$Q().h(0,n)
C.a.k(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.k(q,"")
l=r?"in":"out"
if(r)C.a.k(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
C.a.k(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
C.a.k(q,l+" "+m.a+" "+H.e(k)+";")}C.a.k(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.k(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.k(q,"")
if(c!=null)C.a.K(q,c)
C.a.k(q,"void main(void) {")
C.a.K(q,b)
C.a.k(q,"}")
return C.a.ar(q,"\n")}}
G.fE.prototype={
cS:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
R.cu.prototype={
ce:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a5("size change "+H.e(s)+" "+H.e(r))
this.dx.d3(s,r)
this.z=s
this.Q=r}}
R.fI.prototype={
df:function(a,b,c){var t,s,r
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
J.iI(this.a,s)
r=this.dr(b,c,90,30)
this.d=r
J.iI(this.a,r)
t=t.createElement("div")
this.c=t
J.iI(this.a,t)},
dr:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mz("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bw(r,"float")
r.setProperty(p,"left","")
p=C.u.bw(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.T(t,s)}return t}}
R.fJ.prototype={
dj:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eQ(s,2)+" fps"
t=this.c;(t&&C.o).cQ(t,b)
r=C.b.M(30*C.w.e4(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).T(t,q)},
di:function(a){return this.dj(a,"")}}
A.cm.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bo.prototype={}
A.ft.prototype={
dd:function(a,b,c){if(this.d==null)this.d=new G.ev(this.e,null,null,null,null)},
d5:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lb(p.a,36160,t)
H.b(r>0&&q>0)
J.lL(p.a,this.x,this.y,r,q)
if(s!==0)J.le(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=n.e
C.a.k(m,new G.cI(P.T(),"transforms",!1,!0))
l=new T.N(new Float32Array(16))
l.Z()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.F)(r),++k)A.kR(p,r[k],l,a,m)
m.pop()}},
d4:function(){return this.d5(null)}}
A.ij.prototype={
$2:function(a,b){var t=536870911&a+J.b9(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.y,P.D]}}}
T.aD.prototype={
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
l:function(a){return"[0] "+this.W(0).l(0)+"\n[1] "+this.W(1).l(0)+"\n[2] "+this.W(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aD){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gA:function(a){return A.dw(this.a)},
W:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.l(t)},
e9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.N.prototype={
af:function(a,b,c){H.b(a<4)
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
l:function(a){return"[0] "+this.W(0).l(0)+"\n[1] "+this.W(1).l(0)+"\n[2] "+this.W(2).l(0)+"\n[3] "+this.W(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.N){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gA:function(a){return A.dw(this.a)},
W:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.an(t)},
cG:function(a,b,c,d){var t,s,r,q
if(typeof b==="number"){t=b
s=t
r=s}else{r=null
s=null
t=null}q=this.a
q[0]=C.c.w(q[0],r)
q[1]=C.c.w(q[1],r)
q[2]=C.c.w(q[2],r)
q[3]=C.c.w(q[3],r)
q[4]=C.c.w(q[4],s)
q[5]=C.c.w(q[5],s)
q[6]=C.c.w(q[6],s)
q[7]=C.c.w(q[7],s)
q[8]=C.c.w(q[8],t)
q[9]=C.c.w(q[9],t)
q[10]=C.c.w(q[10],t)
q[11]=C.c.w(q[11],t)
q[12]=q[12]
q[13]=q[13]
q[14]=q[14]
q[15]=q[15]},
Y:function(a,b){return this.cG(a,b,null,null)},
Z:function(){var t=this.a
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
cc:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.u.prototype={
v:function(a,b){var t=this.a
t[0]=a
t[1]=b},
E:function(a){var t,s
t=a.a
s=this.a
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.u){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gA:function(a){return A.dw(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.l.prototype={
u:function(a,b,c){var t=this.a
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
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.l){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gA:function(a){return A.dw(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gV())},
gV:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
G:function(a){var t,s,r
t=Math.sqrt(this.gV())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b3:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c0:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.l(new Float32Array(3))
t.u(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
k:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
Y:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gO:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]}}
T.an.prototype={
E:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.an){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gA:function(a){return A.dw(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gO:function(a){return this.a[2]},
gS:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gI:function(a){return this.a[2]},
gaG:function(a){return this.a[3]}}
Q.iv.prototype={
$1:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t=this.a
t.a=b6+0
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
s.id=0}r=C.c.e5(s.id,-1.4707963267948965,1.4707963267948965)
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.cS(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.d.a
r=s.k2.a
p[12]=p[12]+r[0]
p[13]=p[13]+r[1]
p[14]=p[14]+r[2]
n=p[12]
m=p[13]
l=p[14]
k=new T.l(new Float32Array(3))
k.u(0,1,0)
q=s.e
j=q.a
j[0]=p[12]
j[1]=p[13]
j[2]=p[14]
j=new Float32Array(3)
i=new T.l(j)
i.E(q)
j[0]=j[0]-r[0]
j[1]=j[1]-r[1]
j[2]=j[2]-r[2]
i.G(0)
h=k.c0(i)
h.G(0)
g=i.c0(h)
g.G(0)
r=h.b3(q)
f=g.b3(q)
q=i.b3(q)
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
p[15]=1
p[14]=-q
p[13]=-f
p[12]=-r
p[11]=0
p[10]=j
p[9]=c
p[8]=e
p[7]=0
p[6]=a2
p[5]=a1
p[4]=a0
p[3]=0
p[2]=a
p[1]=b
p[0]=d
p[12]=n
p[13]=m
p[14]=l
d=s.f
b=d.a
b[0]=p[2]
b[1]=p[6]
b[2]=p[10]
s=-s.k1
a3=Math.sqrt(d.gV())
n=b[0]/a3
m=b[1]/a3
l=b[2]/a3
a4=Math.cos(s)
a5=Math.sin(s)
a6=1-a4
a7=n*n*a6+a4
s=l*a5
a8=n*m*a6-s
b=m*a5
a9=n*l*a6+b
b0=m*n*a6+s
b1=m*m*a6+a4
s=n*a5
b2=m*l*a6-s
b3=l*n*a6-b
b4=l*m*a6+s
b5=l*l*a6+a4
s=p[0]
b=p[4]
d=p[8]
a=p[1]
a0=p[5]
a1=p[9]
a2=p[2]
e=p[6]
c=p[10]
j=p[3]
r=p[7]
f=p[11]
p[0]=s*a7+b*b0+d*b3
p[1]=a*a7+a0*b0+a1*b3
p[2]=a2*a7+e*b0+c*b3
p[3]=j*a7+r*b0+f*b3
p[4]=s*a8+b*b1+d*b4
p[5]=a*a8+a0*b1+a1*b4
p[6]=a2*a8+e*b1+c*b4
p[7]=j*a8+r*b1+f*b4
p[8]=s*a9+b*b2+d*b5
p[9]=a*a9+a0*b2+a1*b5
p[10]=a2*a9+e*b2+c*b5
p[11]=j*a9+r*b2+f*b5
this.c.d4()
C.au.gdZ(window).ci(this)
this.d.di(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a4]}}}
J.a.prototype.cW=J.a.prototype.l
J.bi.prototype.cY=J.bi.prototype.l
P.S.prototype.cX=P.S.prototype.aH
W.a_.prototype.aK=W.a_.prototype.P
W.bD.prototype.cZ=W.bD.prototype.a0;(function installTearOffs(){installTearOff(H.b0.prototype,"gez",0,0,0,null,["$0"],["aE"],0)
installTearOff(H.a2.prototype,"gcI",0,0,0,null,["$1"],["N"],2)
installTearOff(H.aK.prototype,"geg",0,0,0,null,["$1"],["a3"],2)
installTearOff(P,"mO",1,0,0,null,["$1"],["mw"],1)
installTearOff(P,"mP",1,0,0,null,["$1"],["mx"],1)
installTearOff(P,"mQ",1,0,0,null,["$1"],["my"],1)
installTearOff(P,"kO",1,0,0,null,["$0"],["mM"],0)
installTearOff(P.ad.prototype,"gdz",0,0,0,null,["$2","$1"],["ay","dA"],5)
installTearOff(P,"mV",1,0,0,null,["$2"],["lS"],7)
installTearOff(W,"n_",1,0,0,null,["$4"],["mC"],4)
installTearOff(W,"n0",1,0,0,null,["$4"],["mD"],4)
installTearOff(W.cn.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(W.cH.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(R.cu.prototype,"geI",0,0,0,null,["$1"],["ce"],6)
installTearOff(Q,"l3",1,0,0,null,["$0"],["n8"],0)})();(function inheritance(){inherit(P.D,null)
var t=P.D
inherit(H.iY,t)
inherit(J.a,t)
inherit(J.dE,t)
inherit(P.S,t)
inherit(H.cd,t)
inherit(P.c9,t)
inherit(H.aT,t)
inherit(H.av,t)
inherit(H.hO,t)
inherit(H.b0,t)
inherit(H.hr,t)
inherit(H.aL,t)
inherit(H.hN,t)
inherit(H.hm,t)
inherit(H.ct,t)
inherit(H.fY,t)
inherit(H.at,t)
inherit(H.a2,t)
inherit(H.aK,t)
inherit(H.fs,t)
inherit(H.h3,t)
inherit(P.aS,t)
inherit(H.d9,t)
inherit(H.am,t)
inherit(P.aX,t)
inherit(H.eL,t)
inherit(H.eN,t)
inherit(P.iT,t)
inherit(P.hn,t)
inherit(P.cS,t)
inherit(P.ad,t)
inherit(P.cK,t)
inherit(P.fM,t)
inherit(P.fN,t)
inherit(P.j8,t)
inherit(P.aO,t)
inherit(P.i4,t)
inherit(P.fA,t)
inherit(P.hK,t)
inherit(P.bx,t)
inherit(P.j1,t)
inherit(P.by,t)
inherit(P.m,t)
inherit(P.hM,t)
inherit(P.ag,t)
inherit(P.G,t)
inherit(P.bd,t)
inherit(P.a4,t)
inherit(P.aw,t)
inherit(P.cz,t)
inherit(P.iV,t)
inherit(P.hw,t)
inherit(P.e5,t)
inherit(P.h,t)
inherit(P.aW,t)
inherit(P.L,t)
inherit(P.aZ,t)
inherit(P.o,t)
inherit(P.bq,t)
inherit(P.jb,t)
inherit(W.dQ,t)
inherit(W.bw,t)
inherit(W.n,t)
inherit(W.cp,t)
inherit(W.bD,t)
inherit(W.i_,t)
inherit(W.c4,t)
inherit(W.co,t)
inherit(W.j5,t)
inherit(W.jc,t)
inherit(W.hV,t)
inherit(W.dj,t)
inherit(P.hQ,t)
inherit(G.f_,t)
inherit(G.dK,t)
inherit(G.ev,t)
inherit(G.aj,t)
inherit(G.eo,t)
inherit(G.c6,t)
inherit(G.cF,t)
inherit(G.cE,t)
inherit(G.x,t)
inherit(G.fB,t)
inherit(R.fI,t)
inherit(T.aD,t)
inherit(T.N,t)
inherit(T.u,t)
inherit(T.l,t)
inherit(T.an,t)
t=J.a
inherit(J.eG,t)
inherit(J.eH,t)
inherit(J.bi,t)
inherit(J.ax,t)
inherit(J.aU,t)
inherit(J.ay,t)
inherit(H.bl,t)
inherit(H.aY,t)
inherit(W.d,t)
inherit(W.dB,t)
inherit(W.dI,t)
inherit(W.aR,t)
inherit(W.Z,t)
inherit(W.cL,t)
inherit(W.dV,t)
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.bX,t)
inherit(W.bY,t)
inherit(W.bZ,t)
inherit(W.cM,t)
inherit(W.c0,t)
inherit(W.cO,t)
inherit(W.e0,t)
inherit(W.f,t)
inherit(W.cQ,t)
inherit(W.ey,t)
inherit(W.cT,t)
inherit(W.eP,t)
inherit(W.eW,t)
inherit(W.cX,t)
inherit(W.cn,t)
inherit(W.d_,t)
inherit(W.a9,t)
inherit(W.d3,t)
inherit(W.cr,t)
inherit(W.d5,t)
inherit(W.aa,t)
inherit(W.da,t)
inherit(W.dd,t)
inherit(W.fX,t)
inherit(W.df,t)
inherit(W.h1,t)
inherit(W.cH,t)
inherit(W.h9,t)
inherit(W.hb,t)
inherit(W.dk,t)
inherit(W.dm,t)
inherit(W.dp,t)
inherit(W.dr,t)
inherit(W.dt,t)
inherit(P.cV,t)
inherit(P.eV,t)
inherit(P.d1,t)
inherit(P.fm,t)
inherit(P.fn,t)
inherit(P.fq,t)
inherit(P.db,t)
inherit(P.dh,t)
inherit(P.dF,t)
inherit(P.fv,t)
inherit(P.fw,t)
inherit(P.d7,t)
t=J.bi
inherit(J.fk,t)
inherit(J.aI,t)
inherit(J.az,t)
inherit(J.iX,J.ax)
t=J.aU
inherit(J.cb,t)
inherit(J.ca,t)
t=P.S
inherit(H.k,t)
inherit(H.cf,t)
inherit(H.cJ,t)
t=H.k
inherit(H.aV,t)
inherit(H.eM,t)
inherit(H.e3,H.cf)
t=P.c9
inherit(H.eS,t)
inherit(H.he,t)
t=H.aV
inherit(H.bj,t)
inherit(P.eO,t)
t=H.av
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.hI,t)
inherit(H.hs,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.hP,t)
inherit(H.fZ,t)
inherit(H.h_,t)
inherit(H.iG,t)
inherit(H.ip,t)
inherit(H.iq,t)
inherit(H.ir,t)
inherit(H.is,t)
inherit(H.it,t)
inherit(H.fU,t)
inherit(H.eI,t)
inherit(H.ik,t)
inherit(H.il,t)
inherit(H.im,t)
inherit(P.hi,t)
inherit(P.hh,t)
inherit(P.hj,t)
inherit(P.hk,t)
inherit(P.hx,t)
inherit(P.hB,t)
inherit(P.hy,t)
inherit(P.hz,t)
inherit(P.hA,t)
inherit(P.hE,t)
inherit(P.hF,t)
inherit(P.hD,t)
inherit(P.hC,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.i7,t)
inherit(P.hT,t)
inherit(P.hS,t)
inherit(P.hU,t)
inherit(P.eR,t)
inherit(P.e1,t)
inherit(P.e2,t)
inherit(W.e4,t)
inherit(W.fL,t)
inherit(W.hf,t)
inherit(W.hv,t)
inherit(W.f9,t)
inherit(W.f8,t)
inherit(W.hW,t)
inherit(W.hX,t)
inherit(W.i2,t)
inherit(W.i3,t)
inherit(P.ia,t)
inherit(B.iz,t)
inherit(B.iA,t)
inherit(B.iB,t)
inherit(B.iC,t)
inherit(B.iD,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(A.ij,t)
inherit(Q.iv,t)
t=H.hm
inherit(H.b2,t)
inherit(H.bI,t)
t=P.aS
inherit(H.fa,t)
inherit(H.eJ,t)
inherit(H.h7,t)
inherit(H.h5,t)
inherit(H.dJ,t)
inherit(H.fx,t)
inherit(P.bS,t)
inherit(P.cq,t)
inherit(P.Y,t)
inherit(P.h8,t)
inherit(P.h6,t)
inherit(P.b_,t)
inherit(P.dL,t)
inherit(P.dU,t)
t=H.fU
inherit(H.fH,t)
inherit(H.bc,t)
inherit(H.hg,P.bS)
inherit(P.ce,P.aX)
t=P.ce
inherit(H.a8,t)
inherit(W.hl,t)
t=H.aY
inherit(H.f0,t)
inherit(H.ci,t)
t=H.ci
inherit(H.bz,t)
inherit(H.bB,t)
inherit(H.bA,H.bz)
inherit(H.cj,H.bA)
inherit(H.bC,H.bB)
inherit(H.ck,H.bC)
t=H.cj
inherit(H.ch,t)
inherit(H.f1,t)
t=H.ck
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.cl,t)
inherit(H.f7,t)
inherit(P.i0,P.hn)
inherit(P.hR,P.i4)
inherit(P.hL,H.a8)
inherit(P.fz,P.fA)
inherit(P.hH,P.fz)
inherit(P.hJ,P.hH)
inherit(P.cc,P.by)
t=P.a4
inherit(P.X,t)
inherit(P.y,t)
t=P.Y
inherit(P.cs,t)
inherit(P.eB,t)
t=W.d
inherit(W.q,t)
inherit(W.al,t)
inherit(W.eq,t)
inherit(W.bh,t)
inherit(W.bk,t)
inherit(W.fo,t)
inherit(W.cv,t)
inherit(W.bE,t)
inherit(W.bG,t)
inherit(W.hc,t)
inherit(W.hd,t)
inherit(W.bu,t)
inherit(W.jd,t)
inherit(P.dG,t)
inherit(P.aP,t)
t=W.q
inherit(W.a_,t)
inherit(W.au,t)
inherit(W.be,t)
t=W.a_
inherit(W.i,t)
inherit(P.w,t)
t=W.al
inherit(W.bR,t)
inherit(W.ex,t)
inherit(W.eQ,t)
t=W.i
inherit(W.dC,t)
inherit(W.dD,t)
inherit(W.as,t)
inherit(W.bT,t)
inherit(W.bW,t)
inherit(W.eu,t)
inherit(W.c7,t)
inherit(W.fy,t)
inherit(W.cB,t)
inherit(W.fS,t)
inherit(W.fT,t)
inherit(W.br,t)
t=W.aR
inherit(W.dM,t)
inherit(W.dO,t)
inherit(W.dP,t)
inherit(W.dS,t)
t=W.Z
inherit(W.dN,t)
inherit(W.dR,t)
inherit(W.dT,t)
inherit(W.aQ,W.cL)
inherit(W.dY,W.bY)
inherit(W.dZ,W.bZ)
inherit(W.cN,W.cM)
inherit(W.c_,W.cN)
inherit(W.cP,W.cO)
inherit(W.e_,W.cP)
inherit(W.cR,W.cQ)
inherit(W.ep,W.cR)
inherit(W.cU,W.cT)
inherit(W.bg,W.cU)
inherit(W.c8,W.be)
inherit(W.ez,W.bh)
inherit(W.aH,W.f)
t=W.aH
inherit(W.aA,t)
inherit(W.K,t)
inherit(W.aG,t)
inherit(W.eY,W.bk)
inherit(W.cY,W.cX)
inherit(W.eZ,W.cY)
inherit(W.P,P.cc)
inherit(W.d0,W.d_)
inherit(W.bm,W.d0)
inherit(W.d4,W.d3)
inherit(W.fl,W.d4)
inherit(W.bF,W.bE)
inherit(W.fD,W.bF)
inherit(W.d6,W.d5)
inherit(W.fF,W.d6)
inherit(W.fK,W.da)
inherit(W.de,W.dd)
inherit(W.fV,W.de)
inherit(W.bH,W.bG)
inherit(W.fW,W.bH)
inherit(W.dg,W.df)
inherit(W.h0,W.dg)
inherit(W.aJ,W.K)
inherit(W.dl,W.dk)
inherit(W.ho,W.dl)
inherit(W.hp,W.c0)
inherit(W.dn,W.dm)
inherit(W.hG,W.dn)
inherit(W.dq,W.dp)
inherit(W.cZ,W.dq)
inherit(W.ds,W.dr)
inherit(W.hY,W.ds)
inherit(W.du,W.dt)
inherit(W.hZ,W.du)
inherit(W.hq,W.hl)
inherit(W.ht,P.fM)
inherit(W.jg,W.ht)
inherit(W.hu,P.fN)
inherit(W.i1,W.bD)
inherit(P.U,P.hQ)
t=P.w
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
inherit(P.em,t)
inherit(P.en,t)
inherit(P.er,t)
inherit(P.a7,t)
inherit(P.eT,t)
inherit(P.fi,t)
inherit(P.bp,t)
t=P.a7
inherit(P.et,t)
inherit(P.a0,t)
inherit(P.eA,t)
inherit(P.fR,t)
inherit(P.bs,t)
inherit(P.ha,t)
inherit(P.cW,P.cV)
inherit(P.eK,P.cW)
inherit(P.d2,P.d1)
inherit(P.fb,P.d2)
inherit(P.fr,P.a0)
inherit(P.dc,P.db)
inherit(P.fQ,P.dc)
inherit(P.bt,P.bs)
inherit(P.di,P.dh)
inherit(P.h2,P.di)
inherit(P.fc,P.aP)
inherit(P.d8,P.d7)
inherit(P.fG,P.d8)
t=G.f_
inherit(G.fE,t)
inherit(G.cI,t)
inherit(G.eX,t)
inherit(G.fu,t)
inherit(A.ft,t)
inherit(A.bo,t)
t=G.fE
inherit(G.dH,t)
inherit(A.cm,t)
inherit(B.fd,G.dH)
t=G.cI
inherit(G.eU,t)
inherit(G.fj,t)
inherit(R.cu,A.ft)
inherit(R.fJ,R.fI)
mixin(H.bz,P.m)
mixin(H.bA,H.aT)
mixin(H.bB,P.m)
mixin(H.bC,H.aT)
mixin(P.by,P.m)
mixin(W.cL,W.dQ)
mixin(W.cM,P.m)
mixin(W.cN,W.n)
mixin(W.cO,P.m)
mixin(W.cP,W.n)
mixin(W.cQ,P.m)
mixin(W.cR,W.n)
mixin(W.cT,P.m)
mixin(W.cU,W.n)
mixin(W.cX,P.m)
mixin(W.cY,W.n)
mixin(W.d_,P.m)
mixin(W.d0,W.n)
mixin(W.d3,P.m)
mixin(W.d4,W.n)
mixin(W.bE,P.m)
mixin(W.bF,W.n)
mixin(W.d5,P.m)
mixin(W.d6,W.n)
mixin(W.da,P.aX)
mixin(W.dd,P.m)
mixin(W.de,W.n)
mixin(W.bG,P.m)
mixin(W.bH,W.n)
mixin(W.df,P.m)
mixin(W.dg,W.n)
mixin(W.dk,P.m)
mixin(W.dl,W.n)
mixin(W.dm,P.m)
mixin(W.dn,W.n)
mixin(W.dp,P.m)
mixin(W.dq,W.n)
mixin(W.dr,P.m)
mixin(W.ds,W.n)
mixin(W.dt,P.m)
mixin(W.du,W.n)
mixin(P.cV,P.m)
mixin(P.cW,W.n)
mixin(P.d1,P.m)
mixin(P.d2,W.n)
mixin(P.db,P.m)
mixin(P.dc,W.n)
mixin(P.dh,P.m)
mixin(P.di,W.n)
mixin(P.d7,P.m)
mixin(P.d8,W.n)})();(function constants(){C.n=W.as.prototype
C.H=W.bT.prototype
C.u=W.aQ.prototype
C.o=W.bW.prototype
C.I=W.bX.prototype
C.J=W.c7.prototype
C.p=W.c8.prototype
C.K=J.a.prototype
C.a=J.ax.prototype
C.w=J.ca.prototype
C.b=J.cb.prototype
C.c=J.aU.prototype
C.i=J.ay.prototype
C.R=J.az.prototype
C.V=H.ch.prototype
C.z=W.bm.prototype
C.A=J.fk.prototype
C.B=W.cr.prototype
C.G=W.cB.prototype
C.t=J.aI.prototype
C.at=W.aJ.prototype
C.au=W.bu.prototype
C.f=new P.hR()
C.v=new P.aw(0)
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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

C.N=function(getTagFallback) {
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
C.O=function() {
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
C.P=function(hooks) {
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
C.Q=function(hooks) {
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
C.S=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.T=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.U=makeConstList([])
C.q=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.o])
C.r=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.W=new G.x("vec3","vertex btangents",0)
C.d=new G.x("vec3","",0)
C.X=new G.x("vec4","delta from light",0)
C.m=new G.x("","",0)
C.C=new G.x("vec3","vertex coordinates",0)
C.Y=new G.x("vec3","vertex binormals",0)
C.D=new G.x("vec4","for wireframe",0)
C.Z=new G.x("vec4","per vertex color",0)
C.a_=new G.x("float","for normal maps",0)
C.j=new G.x("mat4","",0)
C.a1=new G.x("mat4","",4)
C.a0=new G.x("mat4","",128)
C.e=new G.x("float","",0)
C.a2=new G.x("float","",4)
C.a3=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.a4=new G.x("float","for bump maps",0)
C.a5=new G.x("vec2","texture uvs",0)
C.a6=new G.x("float","time since program start in sec",0)
C.k=new G.x("vec2","",0)
C.a7=new G.x("samplerCube","",0)
C.l=new G.x("vec4","",0)
C.a8=new G.x("vec3","vertex normals",0)
C.a9=new G.x("sampler2DShadow","",0)
C.E=new G.x("vec3","per vertex color",0)
C.F=new G.x("mat3","",0)
C.aa=new G.x("vec3","vertex tangents",0)
C.ab=H.I("nj")
C.ac=H.I("nk")
C.ad=H.I("es")
C.ae=H.I("nl")
C.af=H.I("nm")
C.ag=H.I("k4")
C.ah=H.I("nn")
C.ai=H.I("k7")
C.aj=H.I("L")
C.ak=H.I("o")
C.al=H.I("ku")
C.am=H.I("kv")
C.an=H.I("no")
C.ao=H.I("kw")
C.ap=H.I("ag")
C.aq=H.I("X")
C.ar=H.I("y")
C.as=H.I("a4")})();(function staticFields(){$.kd="$cachedFunction"
$.ke="$cachedInvocation"
$.jO=null
$.jM=null
$.jj=!1
$.jo=null
$.kL=null
$.l_=null
$.id=null
$.io=null
$.jp=null
$.b3=null
$.bJ=null
$.bK=null
$.jk=!1
$.A=C.f
$.k_=0
$.ai=null
$.iU=null
$.jZ=null
$.jY=null
$.jW=null
$.jV=null
$.jU=null
$.jT=null
$.mS=0
$.mT=0
$.jt=0
$.kY=0
$.bP=0
$.bQ=0
$.nf=!1
$.kS=0})();(function lazyInitializers(){lazy($,"jS","$get$jS",function(){return H.kV("_$dart_dartClosure")})
lazy($,"iZ","$get$iZ",function(){return H.kV("_$dart_js")})
lazy($,"k5","$get$k5",function(){return H.m8()})
lazy($,"k6","$get$k6",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k_
$.k_=t+1
t="expando$key$"+t}return new P.e5(t,null,[P.y])})
lazy($,"kj","$get$kj",function(){return H.ab(H.h4({
toString:function(){return"$receiver$"}}))})
lazy($,"kk","$get$kk",function(){return H.ab(H.h4({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kl","$get$kl",function(){return H.ab(H.h4(null))})
lazy($,"km","$get$km",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kq","$get$kq",function(){return H.ab(H.h4(void 0))})
lazy($,"kr","$get$kr",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"ko","$get$ko",function(){return H.ab(H.kp(null))})
lazy($,"kn","$get$kn",function(){return H.ab(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kt","$get$kt",function(){return H.ab(H.kp(void 0))})
lazy($,"ks","$get$ks",function(){return H.ab(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jf","$get$jf",function(){return P.mv()})
lazy($,"bL","$get$bL",function(){return[]})
lazy($,"jR","$get$jR",function(){return{}})
lazy($,"kC","$get$kC",function(){return P.j2(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jh","$get$jh",function(){return P.T()})
lazy($,"ic","$get$ic",function(){return P.k8(P.y,P.ag)})
lazy($,"bN","$get$bN",function(){return P.k8(P.o,P.ag)})
lazy($,"kh","$get$kh",function(){return new G.cF(1281,0,4294967295)})
lazy($,"jK","$get$jK",function(){return new G.cE(1281,1281,1281)})
lazy($,"Q","$get$Q",function(){return P.aB(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"kQ","$get$kQ",function(){var t=G.fC("FixedVertexColorV")
t.bj(["aPosition"])
t.bm(["uPerspectiveViewMatrix","uModelMatrix"])
t.av(["vColor"])
t.bq(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"kP","$get$kP",function(){var t=G.fC("FixedVertexColorF")
t.av(["vColor"])
t.aM(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"kz","$get$kz",function(){return[T.H(0,0,1),T.H(0,0,-1),T.H(0,1,0),T.H(0,-1,0),T.H(1,0,0),T.H(-1,0,0)]})
lazy($,"k2","$get$k2",function(){return[G.E(0,11,5),G.E(0,5,1),G.E(0,1,7),G.E(0,7,10),G.E(0,10,11),G.E(1,5,9),G.E(5,11,4),G.E(11,10,2),G.E(10,7,6),G.E(7,1,8),G.E(3,9,4),G.E(3,4,2),G.E(3,2,6),G.E(3,6,8),G.E(3,8,9),G.E(4,9,5),G.E(2,4,11),G.E(6,2,10),G.E(8,6,7),G.E(9,8,1)]})
lazy($,"l5","$get$l5",function(){return(1+P.ng(5))/2})
lazy($,"k3","$get$k3",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$l5()
s=T.H(-1,t,0)
s.G(0)
r=T.H(1,t,0)
r.G(0)
q=T.H(-1,-t,0)
q.G(0)
p=T.H(1,-t,0)
p.G(0)
o=T.H(0,-1,t)
o.G(0)
n=T.H(0,1,t)
n.G(0)
m=T.H(0,-1,-t)
m.G(0)
l=T.H(0,1,-t)
l.G(0)
k=T.H(t,0,-1)
k.G(0)
j=T.H(t,0,1)
j.G(0)
i=T.H(-t,0,-1)
i.G(0)
t=T.H(-t,0,1)
t.G(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"l2","$get$l2",function(){var t=G.fC("SkyScraperV")
t.bj(["aPosition","aTexUV"])
t.av(["vPosition","vTexUV"])
t.bm(["uPerspectiveViewMatrix","uModelMatrix"])
t.aM(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vPosition = aPosition;","vTexUV = aTexUV;"])
return t})
lazy($,"l1","$get$l1",function(){var t=G.fC("SkyScraperF")
t.av(["vPosition","vTexUV"])
t.aM(["      // the step finds the windows\n      // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts\n      // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the\n      // artifacts on the right side\n      float s1 = step(mod(vTexUV.x*11.+1., 2.), 1.);\n      float s2 = step(mod(vTexUV.y*21.+1., 2.), 1.);\n      float s3 = step( s1+s2, 1.1);\n\n      oFragColor = vec4( 1.-s3, 1.-s3, 1.-s3, 1. );\n\n      //gl_FragColor = vec4( mod(vPosition.x*10.0,2.0) ,\n      //                       mod(vPosition.y*20.0,2.0),\n      //                       mod(vPosition.z*10.0,2.0), 1. );\n"])
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
mangledGlobalNames:{y:"int",X:"double",a4:"num",o:"String",ag:"bool",L:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.ag,args:[W.a_,P.o,P.o,W.bw]},{func:1,v:true,args:[P.D],opt:[P.aZ]},{func:1,v:true,args:[W.f]},{func:1,ret:P.y,args:[P.G,P.G]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bl,ArrayBufferView:H.aY,DataView:H.f0,Float32Array:H.ch,Float64Array:H.f1,Int16Array:H.f2,Int32Array:H.f3,Int8Array:H.f4,Uint16Array:H.f5,Uint32Array:H.f6,Uint8ClampedArray:H.cl,CanvasPixelArray:H.cl,Uint8Array:H.f7,HTMLAudioElement:W.i,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLInputElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMediaElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLVideoElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,Accelerometer:W.bR,LinearAccelerationSensor:W.bR,AccessibleNodeList:W.dB,HTMLAnchorElement:W.dC,HTMLAreaElement:W.dD,HTMLBodyElement:W.as,HTMLCanvasElement:W.bT,CanvasRenderingContext2D:W.dI,CDATASection:W.au,CharacterData:W.au,Comment:W.au,ProcessingInstruction:W.au,Text:W.au,CSSPerspective:W.dM,CSSPositionValue:W.dN,CSSRotation:W.dO,CSSScale:W.dP,CSSStyleDeclaration:W.aQ,MSStyleCSSProperties:W.aQ,CSS2Properties:W.aQ,CSSImageValue:W.Z,CSSKeywordValue:W.Z,CSSNumericValue:W.Z,CSSResourceValue:W.Z,CSSUnitValue:W.Z,CSSURLImageValue:W.Z,CSSStyleValue:W.Z,CSSMatrixComponent:W.aR,CSSSkew:W.aR,CSSTransformComponent:W.aR,CSSTransformValue:W.dR,CSSTranslation:W.dS,CSSUnparsedValue:W.dT,DataTransferItemList:W.dV,DeviceAcceleration:W.dW,HTMLDivElement:W.bW,XMLDocument:W.be,Document:W.be,DOMException:W.dX,DOMImplementation:W.bX,DOMMatrix:W.dY,DOMMatrixReadOnly:W.bY,DOMPoint:W.dZ,DOMPointReadOnly:W.bZ,ClientRectList:W.c_,DOMRectList:W.c_,DOMRectReadOnly:W.c0,DOMStringList:W.e_,DOMTokenList:W.e0,Element:W.a_,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.ep,FileWriter:W.eq,HTMLFormElement:W.eu,Gyroscope:W.ex,HTMLHeadElement:W.c7,History:W.ey,HTMLCollection:W.bg,HTMLFormControlsCollection:W.bg,HTMLOptionsCollection:W.bg,HTMLDocument:W.c8,XMLHttpRequest:W.ez,XMLHttpRequestUpload:W.bh,XMLHttpRequestEventTarget:W.bh,KeyboardEvent:W.aA,Location:W.eP,Magnetometer:W.eQ,MediaList:W.eW,MIDIOutput:W.eY,MIDIInput:W.bk,MIDIPort:W.bk,MimeTypeArray:W.eZ,PointerEvent:W.K,MouseEvent:W.K,DragEvent:W.K,DocumentFragment:W.q,ShadowRoot:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeIterator:W.cn,NodeList:W.bm,RadioNodeList:W.bm,Plugin:W.a9,PluginArray:W.fl,PresentationConnection:W.fo,Range:W.cr,RTCDataChannel:W.cv,DataChannel:W.cv,HTMLSelectElement:W.fy,AbsoluteOrientationSensor:W.al,AmbientLightSensor:W.al,OrientationSensor:W.al,RelativeOrientationSensor:W.al,Sensor:W.al,SourceBufferList:W.fD,SpeechGrammarList:W.fF,SpeechRecognitionResult:W.aa,Storage:W.fK,HTMLTableElement:W.cB,HTMLTableRowElement:W.fS,HTMLTableSectionElement:W.fT,HTMLTemplateElement:W.br,TextTrackCueList:W.fV,TextTrackList:W.fW,TimeRanges:W.fX,TouchEvent:W.aG,TouchList:W.h0,TrackDefaultList:W.h1,TreeWalker:W.cH,CompositionEvent:W.aH,FocusEvent:W.aH,TextEvent:W.aH,UIEvent:W.aH,URL:W.h9,VRStageBoundsPoint:W.hb,VideoTrackList:W.hc,WebSocket:W.hd,WheelEvent:W.aJ,Window:W.bu,DOMWindow:W.bu,CSSRuleList:W.ho,DOMRect:W.hp,GamepadList:W.hG,NamedNodeMap:W.cZ,MozNamedAttrMap:W.cZ,SpeechRecognitionResultList:W.hY,StyleSheetList:W.hZ,SVGFEBlendElement:P.e6,SVGFEColorMatrixElement:P.e7,SVGFEComponentTransferElement:P.e8,SVGFECompositeElement:P.e9,SVGFEConvolveMatrixElement:P.ea,SVGFEDiffuseLightingElement:P.eb,SVGFEDisplacementMapElement:P.ec,SVGFEFloodElement:P.ed,SVGFEGaussianBlurElement:P.ee,SVGFEImageElement:P.ef,SVGFEMergeElement:P.eg,SVGFEMorphologyElement:P.eh,SVGFEOffsetElement:P.ei,SVGFEPointLightElement:P.ej,SVGFESpecularLightingElement:P.ek,SVGFESpotLightElement:P.el,SVGFETileElement:P.em,SVGFETurbulenceElement:P.en,SVGFilterElement:P.er,SVGForeignObjectElement:P.et,SVGCircleElement:P.a0,SVGEllipseElement:P.a0,SVGLineElement:P.a0,SVGPathElement:P.a0,SVGPolygonElement:P.a0,SVGPolylineElement:P.a0,SVGGeometryElement:P.a0,SVGAElement:P.a7,SVGClipPathElement:P.a7,SVGDefsElement:P.a7,SVGGElement:P.a7,SVGSwitchElement:P.a7,SVGGraphicsElement:P.a7,SVGImageElement:P.eA,SVGLengthList:P.eK,SVGMaskElement:P.eT,SVGMatrix:P.eV,SVGNumberList:P.fb,SVGPatternElement:P.fi,SVGPoint:P.fm,SVGPointList:P.fn,SVGRect:P.fq,SVGRectElement:P.fr,SVGScriptElement:P.bp,SVGStringList:P.fQ,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.fR,SVGTextPathElement:P.bs,SVGTextContentElement:P.bs,SVGTSpanElement:P.bt,SVGTextElement:P.bt,SVGTextPositioningElement:P.bt,SVGTransformList:P.h2,SVGUseElement:P.ha,AudioBuffer:P.dF,AudioTrackList:P.dG,AudioContext:P.aP,webkitAudioContext:P.aP,BaseAudioContext:P.aP,OfflineAudioContext:P.fc,WebGLRenderingContext:P.fv,WebGL2RenderingContext:P.fw,SQLResultSetRowList:P.fG})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
W.bE.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"
W.bG.$nativeSuperclassTag="EventTarget"
W.bH.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l4(Q.l3(),b)},[])
else (function(b){H.l4(Q.l3(),b)})([])})})()