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
a[c]=function(){a[c]=function(){H.nv(b)}
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
return d?function(e){if(t===null)t=H.jq(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jq(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jq(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j1:function j1(a){this.a=a},
j8:function(a,b,c,d){if(!!a.$isk)return new H.e4(a,b,[c,d])
return new H.ci(a,b,[c,d])},
eI:function(){return new P.b0("No element")},
mq:function(){return new P.b0("Too many elements")},
mp:function(){return new P.b0("Too few elements")},
mE:function(a,b){H.cA(a,0,J.aO(a)-1,b)},
cA:function(a,b,c,d){if(c-b<=32)H.mD(a,b,c,d)
else H.mC(a,b,c,d)},
mD:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.T(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a4(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mC:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.J(t+1,6)
r=a3+s
q=a4-s
p=C.b.J(a3+a4,2)
o=p-s
n=p+s
t=J.T(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a4(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a4(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a4(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a4(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a4(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a4(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a4(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a4(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a4(a5.$2(j,i),0)){h=i
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
H.cA(a2,a3,g-2,a5)
H.cA(a2,f+2,a4,a5)
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
break}}H.cA(a2,g,f,a5)}else H.cA(a2,g,f,a5)},
k:function k(){},
aW:function aW(){},
cg:function cg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ci:function ci(a,b,c){this.a=a
this.b=b
this.$ti=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eV:function eV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bj:function bj(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b,c){this.a=a
this.b=b
this.$ti=c},
hf:function hf(a,b,c){this.a=a
this.b=b
this.$ti=c},
aU:function aU(){},
dz:function(a,b){var t=a.al(b)
if(!u.globalState.d.cy)u.globalState.f.as()
return t},
ih:function(){++u.globalState.f.b},
iw:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lc:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$ish)throw H.c(P.jN("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hQ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k7()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hs(P.j7(null,H.aL),0)
q=P.y
s.seP(new H.a6(0,null,null,null,null,null,0,[q,H.b1]))
s.seS(new H.a6(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hP()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mk,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mS)}if(u.globalState.x)return
o=H.kH()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.b6(a,{func:1,args:[P.J]}))o.al(new H.iI(t,a))
else if(H.b6(a,{func:1,args:[P.J,P.J]}))o.al(new H.iJ(t,a))
else o.al(a)
u.globalState.f.as()},
mS:function(a){var t=P.az(["command","print","msg",a])
return new H.a0(!0,P.b2(null,P.y)).K(t)},
kH:function(){var t,s
t=u.globalState.a++
s=P.y
t=new H.b1(t,new H.a6(0,null,null,null,null,null,0,[s,H.cx]),P.aA(null,null,null,s),u.createNewIsolate(),new H.cx(0,null,!1),new H.ar(H.lb()),new H.ar(H.lb()),!1,!1,[],P.aA(null,null,null,null),null,null,!1,!0,P.aA(null,null,null,null))
t.dF()
return t},
mm:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mn()
return},
mn:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.r('Cannot extract URI from "'+t+'"'))},
mk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aK(!0,[]).a0(b.data)
s=J.T(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.ni(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aK(!0,[]).a0(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aK(!0,[]).a0(s.h(t,"replyTo"))
k=H.kH()
u.globalState.f.a.Y(0,new H.aL(k,new H.eF(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.as()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lN(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.as()
break
case"close":u.globalState.ch.a1(0,$.$get$k8().h(0,a))
a.terminate()
u.globalState.f.as()
break
case"log":H.mj(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.az(["command","print","msg",t])
j=new H.a0(!0,P.b2(null,P.y)).K(j)
s.toString
self.postMessage(j)}else P.a3(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mj:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.az(["command","log","msg",a])
r=new H.a0(!0,P.b2(null,P.y)).K(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.K(q)
t=H.ao(q)
s=P.c6(t)
throw H.c(s)}},
ml:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kg=$.kg+("_"+s)
$.kh=$.kh+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.I(0,["spawned",new H.b3(s,r),q,t.r])
r=new H.eG(t,d,a,c,b)
if(e){t.bR(q,q)
u.globalState.f.a.Y(0,new H.aL(t,r,"start isolate"))}else r.$0()},
mF:function(a,b){var t=new H.fZ(!0,!1,null,0)
t.dv(a,b)
return t},
mT:function(a){return new H.aK(!0,[]).a0(new H.a0(!1,P.b2(null,P.y)).K(a))},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b1:function b1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hJ:function hJ(a,b){this.a=a
this.b=b},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(a){this.a=a},
aL:function aL(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(){},
eF:function eF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hn:function hn(){},
b3:function b3(a,b){this.b=a
this.a=b},
hR:function hR(a,b){this.a=a
this.b=b},
bK:function bK(a,b,c){this.b=a
this.c=b
this.a=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
fZ:function fZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h_:function h_(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
ar:function ar(a){this.a=a},
a0:function a0(a,b){this.a=a
this.b=b},
aK:function aK(a,b){this.a=a
this.b=b},
nc:function(a){return u.types[a]},
nk:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bb(a)
if(typeof t!=="string")throw H.c(H.P(a))
return t},
mA:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.aj(t)
s=t[0]
r=t[1]
return new H.ft(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aC:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bn:function(a){var t,s,r,q,p,o,n,m,l
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.u(a).$isaI){p=C.C(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aN(q,0)===36)q=C.i.d5(q,1)
l=H.dB(H.ij(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
M:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
my:function(a){return a.b?H.M(a).getUTCFullYear()+0:H.M(a).getFullYear()+0},
mw:function(a){return a.b?H.M(a).getUTCMonth()+1:H.M(a).getMonth()+1},
ms:function(a){return a.b?H.M(a).getUTCDate()+0:H.M(a).getDate()+0},
mt:function(a){return a.b?H.M(a).getUTCHours()+0:H.M(a).getHours()+0},
mv:function(a){return a.b?H.M(a).getUTCMinutes()+0:H.M(a).getMinutes()+0},
mx:function(a){return a.b?H.M(a).getUTCSeconds()+0:H.M(a).getSeconds()+0},
mu:function(a){return a.b?H.M(a).getUTCMilliseconds()+0:H.M(a).getMilliseconds()+0},
kf:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.P(a))
return a[b]},
aN:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.X(!0,b,"index",null)
t=J.aO(a)
if(b<0||C.b.ba(b,t))return P.z(b,a,"index",null,t)
return P.fq(b,"index",null)},
P:function(a){return new P.X(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.cu()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ld})
t.name=""}else t.toString=H.ld
return t},
ld:function(){return J.bb(this.dartException)},
G:function(a){throw H.c(a)},
H:function(a){throw H.c(P.ah(a))},
a9:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ks:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ke:function(a,b){return new H.fb(a,b==null?null:b.method)},
j3:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eM(a,s,t?null:b.receiver)},
K:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iK(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aZ(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j3(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.ke(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$km()
o=$.$get$kn()
n=$.$get$ko()
m=$.$get$kp()
l=$.$get$kt()
k=$.$get$ku()
j=$.$get$kr()
$.$get$kq()
i=$.$get$kw()
h=$.$get$kv()
g=p.O(s)
if(g!=null)return t.$1(H.j3(s,g))
else{g=o.O(s)
if(g!=null){g.method="call"
return t.$1(H.j3(s,g))}else{g=n.O(s)
if(g==null){g=m.O(s)
if(g==null){g=l.O(s)
if(g==null){g=k.O(s)
if(g==null){g=j.O(s)
if(g==null){g=m.O(s)
if(g==null){g=i.O(s)
if(g==null){g=h.O(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.ke(s,g))}}return t.$1(new H.h8(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cD()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.X(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cD()
return a},
ao:function(a){var t
if(a==null)return new H.dd(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dd(a,null)},
no:function(a){if(a==null||typeof a!='object')return J.ba(a)
else return H.aC(a)},
na:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
nj:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dz(b,new H.ir(a))
case 1:return H.dz(b,new H.is(a,d))
case 2:return H.dz(b,new H.it(a,d,e))
case 3:return H.dz(b,new H.iu(a,d,e,f))
case 4:return H.dz(b,new H.iv(a,d,e,f,g))}throw H.c(P.c6("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nj)
a.$identity=t
return t},
m5:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$ish){t.$reflectionInfo=c
r=H.mA(t).r}else r=c
q=d?Object.create(new H.fH().constructor.prototype):Object.create(new H.bc(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jV(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nc,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jS:H.iW
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jV(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m2:function(a,b,c,d){var t=H.iW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jV:function(a,b,c){var t,s,r,q
if(c)return H.m4(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m2(s,b==null?r!=null:b!==r,t,b)
return q},
m3:function(a,b,c,d){var t,s
t=H.iW
s=H.jS
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
m4:function(a,b){var t,s,r,q
t=$.jT
if(t==null){t=H.jQ("self")
$.jT=t}t=$.jR
if(t==null){t=H.jQ("receiver")
$.jR=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m3(r,b==null?q!=null:b!==q,s,b)
return t},
jq:function(a,b,c,d,e,f){var t,s
t=J.aj(b)
s=!!J.u(c).$ish?J.aj(c):c
return H.m5(a,t,s,!!d,e,f)},
iW:function(a){return a.a},
jS:function(a){return a.c},
jQ:function(a){var t,s,r,q,p
t=new H.bc("self","target","receiver","name")
s=J.aj(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nK:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aa(a,"String"))},
nF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aa(a,"double"))},
nJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aa(a,"num"))},
n4:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aa(a,"bool"))},
ni:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aa(a,"int"))},
nq:function(a,b){throw H.c(H.aa(a,b.substring(3)))},
np:function(a,b){var t=J.T(b)
throw H.c(H.jU(a,t.bq(b,3,t.gj(b))))},
ju:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.nq(a,b)},
af:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.u(a)[b]
else t=!0
if(t)return a
H.np(a,b)},
nI:function(a){if(a==null)return a
if(!!J.u(a).$ish)return a
throw H.c(H.aa(a,"List"))},
jr:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
b6:function(a,b){var t,s
if(a==null)return!1
t=H.jr(a)
if(t==null)s=!1
else s=H.kZ(t,b)
return s},
nG:function(a,b){var t,s
if(a==null)return a
if($.jn)return a
$.jn=!0
try{if(H.b6(a,b))return a
t=H.iC(b,null)
s=H.aa(a,t)
throw H.c(s)}finally{$.jn=!1}},
aa:function(a,b){return new H.h6("TypeError: "+H.e(P.c5(a))+": type '"+H.kN(a)+"' is not a subtype of type '"+b+"'")},
jU:function(a,b){return new H.dL("CastError: "+H.e(P.c5(a))+": type '"+H.kN(a)+"' is not a subtype of type '"+b+"'")},
kN:function(a){var t
if(a instanceof H.at){t=H.jr(a)
if(t!=null)return H.iC(t,null)
return"Closure"}return H.bn(a)},
ad:function(a){if(!0===a)return!1
if(!!J.u(a).$isj_)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.aa(a,"bool"))},
an:function(a){throw H.c(new H.hh(a))},
b:function(a){if(H.ad(a))throw H.c(P.m1(null))},
nv:function(a){throw H.c(new P.dW(a))},
mB:function(a){return new H.fz(a)},
lb:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kX:function(a){return u.getIsolateTag(a)},
F:function(a){return new H.al(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ij:function(a){if(a==null)return
return a.$ti},
kY:function(a,b){return H.jy(a["$as"+H.e(b)],H.ij(a))},
a1:function(a,b,c){var t,s
t=H.kY(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ap:function(a,b){var t,s
t=H.ij(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iC:function(a,b){var t=H.b8(a,b)
return t},
b8:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dB(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b8(t,b)
return H.mU(a,b)}return"unknown-reified-type"},
mU:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b8(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b8(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b8(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n9(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b8(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dB:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bq("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b8(o,c)}return p?"":"<"+s.k(0)+">"},
ik:function(a){var t,s,r
if(a instanceof H.at){t=H.jr(a)
if(t!=null)return H.iC(t,null)}s=J.u(a).constructor.name
if(a==null)return s
r=H.dB(a.$ti,0,null)
return s+r},
jy:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jv(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jv(a,null,b)
return b},
ib:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ij(a)
s=J.u(a)
if(s[b]==null)return!1
return H.kR(H.jy(s[d],t),c)},
dC:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ib(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dB(c,0,null)
throw H.c(H.jU(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nC:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ib(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dB(c,0,null)
throw H.c(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
kR:function(a,b){var t,s,r,q,p
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
nD:function(a,b,c){return H.jv(a,b,H.kY(b,c))},
U:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="J")return!0
if('func' in b)return H.kZ(a,b)
if('func' in a)return b.name==="j_"||b.name==="D"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iC(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kR(H.jy(o,t),r)},
kQ:function(a,b,c){var t,s,r,q,p,o,n
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
n0:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.aj(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.U(p,o)||H.U(o,p)))return!1}return!0},
kZ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kQ(r,q,!1))return!1
if(!H.kQ(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
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
if(!(H.U(g,f)||H.U(f,g)))return!1}}return H.n0(a.named,b.named)},
jv:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nL:function(a){var t=$.js
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nH:function(a){return H.aC(a)},
nE:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nl:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.D))
t=$.js.$1(a)
s=$.ig[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iq[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kP.$2(a,t)
if(t!=null){s=$.ig[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iq[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iA(r)
$.ig[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iq[t]=r
return r}if(p==="-"){o=H.iA(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l0(a,r)
if(p==="*")throw H.c(P.kA(t))
if(u.leafTags[t]===true){o=H.iA(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l0(a,r)},
l0:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jw(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iA:function(a){return J.jw(a,!1,null,!!a.$ist)},
nn:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iA(t)
else return J.jw(t,c,null,null)},
ng:function(){if(!0===$.jt)return
$.jt=!0
H.nh()},
nh:function(){var t,s,r,q,p,o,n,m
$.ig=Object.create(null)
$.iq=Object.create(null)
H.nf()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.la.$1(p)
if(o!=null){n=H.nn(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nf:function(){var t,s,r,q,p,o,n
t=C.S()
t=H.b5(C.P,H.b5(C.U,H.b5(C.B,H.b5(C.B,H.b5(C.T,H.b5(C.Q,H.b5(C.R(C.C),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.js=new H.im(p)
$.kP=new H.io(o)
$.la=new H.ip(n)},
b5:function(a,b){return a(b)||b},
nu:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
ft:function ft(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h4:function h4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fb:function fb(a,b){this.a=a
this.b=b},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
iK:function iK(a){this.a=a},
dd:function dd(a,b){this.a=a
this.b=b},
ir:function ir(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iv:function iv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
at:function at(){},
fU:function fU(){},
fH:function fH(){},
bc:function bc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h6:function h6(a){this.a=a},
dL:function dL(a){this.a=a},
fz:function fz(a){this.a=a},
hh:function hh(a){this.a=a},
al:function al(a,b){this.a=a
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
eL:function eL(a){this.a=a},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eP:function eP(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
i7:function(a){var t,s,r
if(!!J.u(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.aN(b,a))},
bl:function bl(){},
aZ:function aZ(){},
f1:function f1(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
cl:function cl(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
cp:function cp(){},
f8:function f8(){},
bB:function bB(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
n9:function(a){return J.aj(H.B(a?Object.keys(a):[],[null]))},
iB:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ce.prototype
return J.cd.prototype}if(typeof a=="string")return J.aw.prototype
if(a==null)return J.eK.prototype
if(typeof a=="boolean")return J.eJ.prototype
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.D)return a
return J.ii(a)},
jw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ii:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jt==null){H.ng()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kA("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j2()]
if(p!=null)return p
p=H.nl(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$j2(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
aj:function(a){a.fixed$length=Array
return a},
T:function(a){if(typeof a=="string")return J.aw.prototype
if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.D)return a
return J.ii(a)},
b7:function(a){if(a==null)return a
if(a.constructor==Array)return J.av.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.D)return a
return J.ii(a)},
kV:function(a){if(typeof a=="number")return J.aV.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aI.prototype
return a},
nb:function(a){if(typeof a=="number")return J.aV.prototype
if(typeof a=="string")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aI.prototype
return a},
kW:function(a){if(typeof a=="string")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.D))return J.aI.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.D)return a
return J.ii(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).A(a,b)},
a4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kV(a).U(a,b)},
le:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kV(a).a3(a,b)},
b9:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nk(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.T(a).h(a,b)},
lf:function(a,b,c){return J.b7(a).i(a,b,c)},
jz:function(a,b){return J.kW(a).aN(a,b)},
iL:function(a,b){return J.i(a).e_(a,b)},
lg:function(a,b,c){return J.i(a).e0(a,b,c)},
jA:function(a,b){return J.i(a).bP(a,b)},
lh:function(a,b,c,d){return J.i(a).bQ(a,b,c,d)},
iM:function(a,b){return J.i(a).R(a,b)},
jB:function(a,b,c){return J.i(a).bT(a,b,c)},
li:function(a,b){return J.i(a).eg(a,b)},
iN:function(a,b,c){return J.i(a).bU(a,b,c)},
lj:function(a,b,c){return J.i(a).bV(a,b,c)},
bS:function(a,b,c){return J.i(a).bW(a,b,c)},
dD:function(a,b){return J.i(a).ej(a,b)},
lk:function(a,b){return J.i(a).bX(a,b)},
ll:function(a,b,c){return J.i(a).bY(a,b,c)},
jC:function(a,b,c,d){return J.i(a).bZ(a,b,c,d)},
lm:function(a,b){return J.b7(a).c_(a,b)},
ln:function(a,b,c,d,e){return J.i(a).c0(a,b,c,d,e)},
lo:function(a,b){return J.nb(a).S(a,b)},
iO:function(a,b,c){return J.T(a).en(a,b,c)},
iP:function(a){return J.i(a).c2(a)},
lp:function(a){return J.i(a).c3(a)},
lq:function(a){return J.i(a).c6(a)},
lr:function(a){return J.i(a).eu(a)},
ls:function(a,b){return J.i(a).c8(a,b)},
iQ:function(a,b){return J.i(a).c9(a,b)},
lt:function(a,b,c,d){return J.i(a).ca(a,b,c,d)},
lu:function(a,b,c,d,e){return J.i(a).eB(a,b,c,d,e)},
lv:function(a,b,c,d,e){return J.i(a).cb(a,b,c,d,e)},
lw:function(a,b,c,d,e,f){return J.i(a).eC(a,b,c,d,e,f)},
lx:function(a,b){return J.b7(a).t(a,b)},
bT:function(a,b){return J.i(a).cc(a,b)},
ly:function(a,b){return J.i(a).cd(a,b)},
lz:function(a){return J.i(a).eD(a)},
jD:function(a,b){return J.b7(a).am(a,b)},
lA:function(a){return J.i(a).gef(a)},
ba:function(a){return J.u(a).gw(a)},
ag:function(a){return J.b7(a).gB(a)},
lB:function(a){return J.i(a).gE(a)},
aO:function(a){return J.T(a).gj(a)},
lC:function(a){return J.i(a).gb6(a)},
lD:function(a){return J.u(a).gC(a)},
lE:function(a){return J.i(a).gf2(a)},
lF:function(a){return J.i(a).gaF(a)},
iR:function(a){return J.i(a).gm(a)},
iS:function(a){return J.i(a).gn(a)},
jE:function(a){return J.i(a).gF(a)},
iT:function(a,b){return J.i(a).ad(a,b)},
lG:function(a){return J.i(a).aH(a)},
lH:function(a){return J.i(a).bd(a)},
lI:function(a,b){return J.i(a).be(a,b)},
lJ:function(a,b,c){return J.i(a).bf(a,b,c)},
jF:function(a,b,c){return J.i(a).bi(a,b,c)},
lK:function(a,b){return J.i(a).cg(a,b)},
lL:function(a,b){return J.b7(a).cj(a,b)},
lM:function(a,b,c){return J.i(a).cl(a,b,c)},
jG:function(a){return J.b7(a).eW(a)},
lN:function(a,b){return J.i(a).I(a,b)},
lO:function(a,b,c){return J.i(a).d_(a,b,c)},
lP:function(a,b,c,d){return J.i(a).bp(a,b,c,d)},
lQ:function(a,b,c,d,e,f,g){return J.i(a).cr(a,b,c,d,e,f,g)},
lR:function(a,b,c,d){return J.i(a).cs(a,b,c,d)},
jH:function(a,b,c,d){return J.i(a).ct(a,b,c,d)},
lS:function(a){return J.kW(a).f5(a)},
bb:function(a){return J.u(a).k(a)},
lT:function(a,b,c,d){return J.i(a).f7(a,b,c,d)},
lU:function(a,b,c){return J.i(a).cz(a,b,c)},
lV:function(a,b,c){return J.i(a).cA(a,b,c)},
iU:function(a,b,c){return J.i(a).cB(a,b,c)},
lW:function(a,b,c){return J.i(a).cC(a,b,c)},
jI:function(a,b,c){return J.i(a).cD(a,b,c)},
jJ:function(a,b,c){return J.i(a).cE(a,b,c)},
jK:function(a,b,c){return J.i(a).cF(a,b,c)},
jL:function(a,b,c,d){return J.i(a).cG(a,b,c,d)},
jM:function(a,b,c,d){return J.i(a).cH(a,b,c,d)},
lX:function(a,b){return J.i(a).cJ(a,b)},
lY:function(a,b,c){return J.i(a).f8(a,b,c)},
lZ:function(a,b,c,d,e,f,g){return J.i(a).cL(a,b,c,d,e,f,g)},
m_:function(a,b,c,d,e){return J.i(a).cN(a,b,c,d,e)},
a:function a(){},
eJ:function eJ(){},
eK:function eK(){},
bi:function bi(){},
fl:function fl(){},
aI:function aI(){},
ax:function ax(){},
av:function av(a){this.$ti=a},
j0:function j0(a){this.$ti=a},
dH:function dH(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aV:function aV(){},
ce:function ce(){},
cd:function cd(){},
aw:function aw(){}},P={
mJ:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n1()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bO(new P.hj(t),1)).observe(s,{childList:true})
return new P.hi(t,s,r)}else if(self.setImmediate!=null)return P.n2()
return P.n3()},
mK:function(a){H.ih()
self.scheduleImmediate(H.bO(new P.hk(a),0))},
mL:function(a){H.ih()
self.setImmediate(H.bO(new P.hl(a),0))},
mM:function(a){P.jd(C.z,a)},
jd:function(a,b){var t=C.b.J(a.a,1000)
return H.mF(t<0?0:t,b)},
mX:function(a,b){if(H.b6(a,{func:1,args:[P.J,P.J]})){b.toString
return a}else{b.toString
return a}},
mO:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ab))
H.b(b.a===0)
b.a=1
try{a.cv(new P.hz(b),new P.hA(b))}catch(r){t=H.K(r)
s=H.ao(r)
P.nr(new P.hB(b,t,s))}},
kE:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aX()
b.aM(a)
P.bx(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bJ(r)}},
bx:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.i8(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bx(t.a,b)}s=t.a
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
P.i8(null,null,p,o,s)
return}s=$.A
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.A
H.b(l==null?s!=null:l!==s)
j=$.A
$.A=l
i=j}else i=null
s=b.c
if(s===8)new P.hF(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hE(r,b,m).$0()}else if((s&2)!==0)new P.hD(t,r,b).$0()
if(i!=null){H.b(!0)
$.A=i}s=r.b
if(!!J.u(s).$isex){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aA(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kE(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aA(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mW:function(){var t,s
for(;t=$.b4,t!=null;){$.bM=null
s=t.b
$.b4=s
if(s==null)$.bL=null
t.a.$0()}},
n_:function(){$.jo=!0
try{P.mW()}finally{$.bM=null
$.jo=!1
if($.b4!=null)$.$get$jj().$1(P.kS())}},
kM:function(a){var t=new P.cO(a,null)
if($.b4==null){$.bL=t
$.b4=t
if(!$.jo)$.$get$jj().$1(P.kS())}else{$.bL.b=t
$.bL=t}},
mZ:function(a){var t,s,r
t=$.b4
if(t==null){P.kM(a)
$.bM=$.bL
return}s=new P.cO(a,null)
r=$.bM
if(r==null){s.b=t
$.bM=s
$.b4=s}else{s.b=r.b
r.b=s
$.bM=s
if(s.b==null)$.bL=s}},
nr:function(a){var t=$.A
if(C.f===t){P.ia(null,null,C.f,a)
return}t.toString
P.ia(null,null,t,t.b2(a))},
mG:function(a,b){var t=$.A
if(t===C.f){t.toString
return P.jd(a,b)}return P.jd(a,t.b2(b))},
ji:function(a){var t,s
H.b(a!=null)
t=$.A
H.b(a==null?t!=null:a!==t)
s=$.A
$.A=a
return s},
i8:function(a,b,c,d,e){var t={}
t.a=d
P.mZ(new P.i9(t,e))},
kK:function(a,b,c,d){var t,s
if($.A===c)return d.$0()
t=P.ji(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.A=s}},
kL:function(a,b,c,d,e){var t,s
if($.A===c)return d.$1(e)
t=P.ji(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.A=s}},
mY:function(a,b,c,d,e,f){var t,s
if($.A===c)return d.$2(e,f)
t=P.ji(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.A=s}},
ia:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b2(d):c.eh(d)
P.kM(d)},
hj:function hj(a){this.a=a},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
iX:function iX(){},
ho:function ho(){},
i2:function i2(a,b){this.a=a
this.$ti=b},
cW:function cW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hy:function hy(a,b){this.a=a
this.b=b},
hC:function hC(a,b){this.a=a
this.b=b},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
hB:function hB(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hG:function hG(a){this.a=a},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
cO:function cO(a,b){this.a=a
this.b=b},
fM:function fM(){},
fO:function fO(a){this.a=a},
fP:function fP(a,b){this.a=a
this.b=b},
fN:function fN(){},
jc:function jc(){},
aP:function aP(a,b){this.a=a
this.b=b},
i6:function i6(){},
i9:function i9(a,b){this.a=a
this.b=b},
hT:function hT(){},
hV:function hV(a,b){this.a=a
this.b=b},
hU:function hU(a,b){this.a=a
this.b=b},
hW:function hW(a,b){this.a=a
this.b=b},
ka:function(a,b){return new H.a6(0,null,null,null,null,null,0,[a,b])},
R:function(){return new H.a6(0,null,null,null,null,null,0,[null,null])},
az:function(a){return H.na(a,new H.a6(0,null,null,null,null,null,0,[null,null]))},
b2:function(a,b){return new P.hN(0,null,null,null,null,null,0,[a,b])},
aA:function(a,b,c,d){return new P.hL(0,null,null,null,null,null,0,[d])},
jm:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mo:function(a,b,c){var t,s
if(P.jp(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bN()
C.a.l(s,a)
try{P.mV(a,t)}finally{H.b(C.a.gaE(s)===a)
s.pop()}s=P.kk(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eH:function(a,b,c){var t,s,r
if(P.jp(a))return b+"..."+c
t=new P.bq(b)
s=$.$get$bN()
C.a.l(s,a)
try{r=t
r.a=P.kk(r.ga8(),a,", ")}finally{H.b(C.a.gaE(s)===a)
s.pop()}s=t
s.a=s.ga8()+c
s=t.ga8()
return s.charCodeAt(0)==0?s:s},
jp:function(a){var t,s
for(t=0;s=$.$get$bN(),t<s.length;++t)if(a===s[t])return!0
return!1},
mV:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gB(a)
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
j6:function(a,b){var t,s
t=P.aA(null,null,null,b)
for(s=J.ag(a);s.p();)t.l(0,s.gq(s))
return t},
kc:function(a){var t,s,r
t={}
if(P.jp(a))return"{...}"
s=new P.bq("")
try{C.a.l($.$get$bN(),a)
r=s
r.a=r.ga8()+"{"
t.a=!0
J.jD(a,new P.eU(t,s))
t=s
t.a=t.ga8()+"}"}finally{t=$.$get$bN()
H.b(C.a.gaE(t)===a)
t.pop()}t=s.ga8()
return t.charCodeAt(0)==0?t:t},
j7:function(a,b){var t=new P.eR(null,0,0,0,[b])
t.dm(a,b)
return t},
hN:function hN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hL:function hL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hI:function hI(){},
j5:function j5(){},
cf:function cf(){},
l:function l(){},
ch:function ch(){},
eU:function eU(a,b){this.a=a
this.b=b},
aY:function aY(){},
eR:function eR(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hO:function hO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fB:function fB(){},
fA:function fA(){},
bA:function bA(){},
me:function(a){var t=J.u(a)
if(!!t.$isat)return t.k(a)
return"Instance of '"+H.bn(a)+"'"},
kb:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.ag(a);s.p();)C.a.l(t,s.gq(s))
if(b)return t
return J.aj(t)},
kk:function(a,b,c){var t=J.ag(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
m6:function(a,b){return J.lo(a,b)},
m8:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
m9:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c_:function(a){if(a>=10)return""+a
return"0"+a},
mb:function(a,b,c,d,e,f){return new P.au(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c5:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bb(a)
if(typeof a==="string")return JSON.stringify(a)
return P.me(a)},
m1:function(a){return new P.bV(a)},
jN:function(a){return new P.X(!1,null,null,a)},
iV:function(a,b,c){return new P.X(!0,a,b,c)},
m0:function(a){return new P.X(!1,null,a,"Must not be null")},
fq:function(a,b,c){return new P.cw(null,null,!0,a,b,"Value not in range")},
aD:function(a,b,c,d,e){return new P.cw(b,c,!0,a,d,"Invalid value")},
ki:function(a,b,c,d,e,f){if(C.b.U(0,a)||C.b.U(a,c))throw H.c(P.aD(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.U(b,c))throw H.c(P.aD(b,a,c,"end",f))
return b}return c},
z:function(a,b,c,d,e){var t=e!=null?e:J.aO(b)
return new P.eE(b,t,!0,a,c,"Index out of range")},
r:function(a){return new P.h9(a)},
kA:function(a){return new P.h7(a)},
jb:function(a){return new P.b0(a)},
ah:function(a){return new P.dN(a)},
c6:function(a){return new P.hx(a)},
a3:function(a){H.iB(H.e(a))},
ae:function ae(){},
E:function E(){},
bd:function bd(a,b){this.a=a
this.b=b},
W:function W(){},
au:function au(a){this.a=a},
e2:function e2(){},
e3:function e3(){},
aT:function aT(){},
bV:function bV(a){this.a=a},
cu:function cu(){},
X:function X(a,b,c,d){var _=this
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
eE:function eE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h9:function h9(a){this.a=a},
h7:function h7(a){this.a=a},
b0:function b0(a){this.a=a},
dN:function dN(a){this.a=a},
cD:function cD(){},
dW:function dW(a){this.a=a},
iZ:function iZ(){},
hx:function hx(a){this.a=a},
e6:function e6(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
Q:function Q(){},
cc:function cc(){},
h:function h(){},
aX:function aX(){},
J:function J(){},
a2:function a2(){},
D:function D(){},
b_:function b_(){},
o:function o(){},
bq:function bq(a){this.a=a},
jf:function jf(){},
id:function(a){var t,s,r,q,p
if(a==null)return
t=P.R()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
n7:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jD(a,new P.ic(t))
return t},
k1:function(){var t=$.k0
if(t==null){t=J.iO(window.navigator.userAgent,"Opera",0)
$.k0=t}return t},
ma:function(){var t,s
t=$.jY
if(t!=null)return t
s=$.jZ
if(s==null){s=J.iO(window.navigator.userAgent,"Firefox",0)
$.jZ=s}if(s)t="-moz-"
else{s=$.k_
if(s==null){s=!P.k1()&&J.iO(window.navigator.userAgent,"Trident/",0)
$.k_=s}if(s)t="-ms-"
else t=P.k1()?"-o-":"-webkit-"}$.jY=t
return t},
ic:function ic(a){this.a=a},
hK:function hK(){},
hS:function hS(){},
S:function S(){},
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
eo:function eo(){},
es:function es(){},
eu:function eu(){},
a_:function a_(){},
a5:function a5(){},
eC:function eC(){},
eN:function eN(){},
eW:function eW(){},
fc:function fc(){},
fj:function fj(){},
fn:function fn(){},
fo:function fo(){},
fr:function fr(){},
fs:function fs(){},
bo:function bo(){},
fQ:function fQ(){},
v:function v(){},
fR:function fR(){},
bs:function bs(){},
bt:function bt(){},
h3:function h3(){},
hb:function hb(){},
cZ:function cZ(){},
d_:function d_(){},
d5:function d5(){},
d6:function d6(){},
df:function df(){},
dg:function dg(){},
dl:function dl(){},
dm:function dm(){},
dI:function dI(){},
dJ:function dJ(){},
aQ:function aQ(){},
fd:function fd(){},
fx:function fx(){},
fy:function fy(){},
fG:function fG(){},
db:function db(){},
dc:function dc(){}},W={
mc:function(a,b,c){var t,s
t=document.body
s=(t&&C.q).N(t,a,b,c)
s.toString
t=new H.cN(new W.N(s),new W.e5(),[W.q])
return t.ga5(t)},
md:function(a){return"wheel"},
bf:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lE(a)
if(typeof s==="string")t=a.tagName}catch(r){H.K(r)}return t},
mN:function(a,b){return document.createElement(a)},
aM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
V:function(a,b,c,d,e){var t=c==null?null:W.kO(new W.hw(c))
t=new W.hv(0,a,b,t,!1,[e])
t.dD(a,b,c,!1,e)
return t},
kF:function(a){var t,s
t=document.createElement("a")
s=new W.hX(t,window.location)
s=new W.by(s)
s.dE(a)
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
kJ:function(){var t=P.o
t=new W.i3(P.j6(C.u,t),P.aA(null,null,null,t),P.aA(null,null,null,t),P.aA(null,null,null,t),null)
t.dH(null,new H.bj(C.u,new W.i4(),[H.ap(C.u,0),null]),["TEMPLATE"],null)
return t},
kO:function(a){var t=$.A
if(t===C.f)return a
return t.ei(a)},
j:function j(){},
bU:function bU(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
aq:function aq(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
as:function as(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
aR:function aR(){},
dS:function dS(){},
Y:function Y(){},
aS:function aS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
c0:function c0(){},
be:function be(){},
dZ:function dZ(){},
c1:function c1(){},
e_:function e_(){},
c2:function c2(){},
c3:function c3(){},
c4:function c4(){},
e0:function e0(){},
e1:function e1(){},
Z:function Z(){},
e5:function e5(){},
f:function f(){},
d:function d(){},
eq:function eq(){},
er:function er(){},
ev:function ev(){},
ez:function ez(){},
ca:function ca(){},
eA:function eA(){},
bg:function bg(){},
cb:function cb(){},
eB:function eB(){},
bh:function bh(){},
ay:function ay(){},
eS:function eS(){},
eT:function eT(){},
eX:function eX(){},
eZ:function eZ(){},
bk:function bk(){},
f_:function f_(){},
I:function I(){},
N:function N(a){this.a=a},
q:function q(){},
cr:function cr(){},
bm:function bm(){},
a7:function a7(){},
fm:function fm(){},
fp:function fp(){},
cv:function cv(){},
cz:function cz(){},
bp:function bp(){},
ak:function ak(){},
fD:function fD(){},
fF:function fF(){},
a8:function a8(){},
fK:function fK(){},
fL:function fL(a){this.a=a},
cF:function cF(){},
fS:function fS(){},
fT:function fT(){},
br:function br(){},
fV:function fV(){},
fW:function fW(){},
fY:function fY(){},
aG:function aG(){},
h1:function h1(){},
h2:function h2(){},
cL:function cL(){},
aH:function aH(){},
ha:function ha(){},
hc:function hc(){},
hd:function hd(){},
he:function he(){},
aJ:function aJ(){},
bw:function bw(){},
hg:function hg(a){this.a=a},
jh:function jh(){},
hp:function hp(){},
hq:function hq(){},
hH:function hH(){},
d2:function d2(){},
i_:function i_(){},
i0:function i0(){},
hm:function hm(){},
hr:function hr(a){this.a=a},
hu:function hu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jk:function jk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hv:function hv(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hw:function hw(a){this.a=a},
by:function by(a){this.a=a},
n:function n(){},
ct:function ct(a){this.a=a},
fa:function fa(a){this.a=a},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(){},
hY:function hY(){},
hZ:function hZ(){},
i3:function i3(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i4:function i4(){},
i1:function i1(){},
c8:function c8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cs:function cs(){},
j9:function j9(){},
jg:function jg(){},
hX:function hX(a,b){this.a=a
this.b=b},
dn:function dn(a){this.a=a},
i5:function i5(a){this.a=a},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cX:function cX(){},
cY:function cY(){},
d0:function d0(){},
d1:function d1(){},
d3:function d3(){},
d4:function d4(){},
d7:function d7(){},
d8:function d8(){},
bG:function bG(){},
bH:function bH(){},
d9:function d9(){},
da:function da(){},
de:function de(){},
dh:function dh(){},
di:function di(){},
bI:function bI(){},
bJ:function bJ(){},
dj:function dj(){},
dk:function dk(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){}},B={
ns:function(a){var t,s
t=document
s=W.ay
W.V(t,"keydown",new B.iD(),!1,s)
W.V(t,"keyup",new B.iE(),!1,s)
if(!$.nt)W.V(t,"mousemove",new B.iF(),!1,W.I)
s=W.I
W.V(t,"mousedown",new B.iG(),!1,s)
W.V(t,"mouseup",new B.iH(),!1,s)},
mr:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$ie()
r=$.$get$bP()
q=new T.L(new Float32Array(16))
q.V()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fe(a,b,c,0,new T.m(t),-0.02,s,r,q,new T.m(p),new T.m(o),new T.m(n),new T.m(new Float32Array(3)),"camera:orbit",!1,!0)
t.dn(a,b,c,d)
return t},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
iH:function iH(){},
fe:function fe(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ff:function ff(a){this.a=a},
fg:function fg(a){this.a=a},
fh:function fh(){},
fi:function fi(a){this.a=a},
m7:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.m(new Float32Array(3))
r.u(t,s,d8)
q=new T.m(new Float32Array(3))
q.u(d6,s,d8)
p=new T.m(new Float32Array(3))
p.u(d6,d7,d8)
o=new T.m(new Float32Array(3))
o.u(t,d7,d8)
n=-d8
m=new T.m(new Float32Array(3))
m.u(t,s,n)
l=new T.m(new Float32Array(3))
l.u(t,d7,n)
k=new T.m(new Float32Array(3))
k.u(d6,d7,n)
j=new T.m(new Float32Array(3))
j.u(d6,s,n)
i=new T.m(new Float32Array(3))
i.u(t,d7,n)
h=new T.m(new Float32Array(3))
h.u(t,d7,d8)
g=new T.m(new Float32Array(3))
g.u(d6,d7,d8)
f=new T.m(new Float32Array(3))
f.u(d6,d7,n)
e=new T.m(new Float32Array(3))
e.u(d6,s,d8)
d=new T.m(new Float32Array(3))
d.u(t,s,d8)
c=new T.m(new Float32Array(3))
c.u(t,s,n)
b=new T.m(new Float32Array(3))
b.u(d6,s,n)
a=new T.m(new Float32Array(3))
a.u(d6,s,n)
a0=new T.m(new Float32Array(3))
a0.u(d6,d7,n)
a1=new T.m(new Float32Array(3))
a1.u(d6,d7,d8)
a2=new T.m(new Float32Array(3))
a2.u(d6,s,d8)
a3=new T.m(new Float32Array(3))
a3.u(t,s,n)
a4=new T.m(new Float32Array(3))
a4.u(t,s,d8)
s=new T.m(new Float32Array(3))
s.u(t,d7,d8)
a5=new T.m(new Float32Array(3))
a5.u(t,d7,n)
t=new T.w(new Float32Array(2))
t.v(d3,d5)
n=new T.w(new Float32Array(2))
n.v(d2,d5)
a6=new T.w(new Float32Array(2))
a6.v(d2,d4)
a7=new T.w(new Float32Array(2))
a7.v(d3,d4)
a8=new T.w(new Float32Array(2))
a8.v(d2,d5)
a9=new T.w(new Float32Array(2))
a9.v(d2,d4)
b0=new T.w(new Float32Array(2))
b0.v(d3,d4)
b1=new T.w(new Float32Array(2))
b1.v(d3,d5)
b2=new T.w(new Float32Array(2))
b2.v(d3,d4)
b3=new T.w(new Float32Array(2))
b3.v(d3,d5)
b4=new T.w(new Float32Array(2))
b4.v(d2,d5)
b5=new T.w(new Float32Array(2))
b5.v(d2,d4)
b6=new T.w(new Float32Array(2))
b6.v(d2,d4)
b7=new T.w(new Float32Array(2))
b7.v(d3,d4)
b8=new T.w(new Float32Array(2))
b8.v(d3,d5)
b9=new T.w(new Float32Array(2))
b9.v(d2,d5)
c0=new T.w(new Float32Array(2))
c0.v(d2,d5)
c1=new T.w(new Float32Array(2))
c1.v(d2,d4)
c2=new T.w(new Float32Array(2))
c2.v(d3,d4)
c3=new T.w(new Float32Array(2))
c3.v(d3,d5)
c4=new T.w(new Float32Array(2))
c4.v(d3,d5)
c5=new T.w(new Float32Array(2))
c5.v(d2,d5)
c6=new T.w(new Float32Array(2))
c6.v(d2,d4)
c7=new T.w(new Float32Array(2))
c7.v(d3,d4)
c8=new G.ey(!1,[],[],[],P.R())
c8.bs("aTexUV")
c8.bs("aNormal")
c8.de(6)
c8.av([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.dc("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$kD(),c9<6;++c9){d0=t[c9]
c8.dd("aNormal",[d0,d0,d0,d0])}return c8}},G={
mI:function(a){var t,s,r
t=H.B(a.split("\n"),[P.o])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.aq(t,"\n")},
kC:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.c5(a,b)
t.bn(a,s,c)
t.c1(a,s)
r=t.bh(a,s,35713)
if(r!=null&&!r){q=t.bg(a,s)
P.a3("E:Compilation failed:")
P.a3("E:"+G.mI(c))
P.a3("E:Failure:")
P.a3(C.i.a4("E:",q))
throw H.c(q)}return s},
kl:function(a,b,c){return new G.cI(a,b,c)},
k5:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iR(a[s])
b[t+1]=J.iS(a[s])
b[t+2]=J.jE(a[s])}return b},
mg:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iR(a[s])
b[t+1]=J.iS(a[s])}return b},
mh:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iR(a[s])
b[t+1]=J.iS(a[s])
b[t+2]=J.jE(a[s])
b[t+3]=J.lF(a[s])}return b},
mf:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b9(a[s],0)
b[t+1]=J.b9(a[s],1)
b[t+2]=J.b9(a[s],2)
b[t+3]=J.b9(a[s],3)}return b},
kd:function(a,b,c,d){return new G.eY(b,J.lr(b.a),c,P.R(),d,null,0,-1,null,null,P.R(),"meshdata:"+a,!1,!0)},
mP:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gE(t),s=s.gB(s),r=b.x,q=[[P.h,P.y]],p=[P.W],o=[T.am],n=[T.m],m=[T.w];s.p();){l=s.gq(s)
if(!r.G(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.kU>0)H.iB("I: "+l)
continue}k=t.h(0,l)
switch($.$get$O().h(0,l).a){case"vec2":b.af(l,G.mg(H.dC(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.af(l,G.k5(H.dC(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.af(l,G.mh(H.dC(k,"$ish",o,"$ash"),null),4)
break
case"float":b.af(l,new Float32Array(H.i7(H.dC(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.af(l,G.mf(H.dC(k,"$ish",q,"$ash"),null),4)
break
default:if(H.ad(!1))H.an("unknown type for "+H.e(l)+" ["+J.lD(k[0]).k(0)+"] ["+new H.al(H.ik(k),null).k(0)+"] "+H.e(k))}}},
fw:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aA(null,null,null,P.o)
s=c.b
r=d.b
q=c.f
p=J.lp(b.a)
o=G.kC(b.a,35633,s)
J.jB(b.a,p,o)
n=G.kC(b.a,35632,r)
J.jB(b.a,p,n)
if(q.length>0)J.lT(b.a,p,q,35980)
J.lK(b.a,p)
if(!J.lJ(b.a,p,35714))H.G(J.lI(b.a,p))
t=new G.fv(b,c,d,p,P.j6(c.c,null),P.R(),P.R(),t,null,a,!1,!0)
t.dr(a,b,c,d)
return t},
aF:function(a){return new G.fC(a,null,[],[],[],[],0,P.R())},
f0:function f0(){},
cM:function cM(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dK:function dK(){},
dM:function dM(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ep:function ep(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ey:function ey(a,b,c,d,e){var _=this
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
cj:function cj(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eY:function eY(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fk:function fk(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fv:function fv(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fC:function fC(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fE:function fE(){},
fX:function fX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bu:function bu(){},
eD:function eD(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mH:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$kB().eU()-0.5)*c
s=G.kd(t,a.d,0,a.e.x)
s.av(r)
return s},
cy:function cy(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.c=m},
fI:function fI(){},
fJ:function fJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kT:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.P(c)
s=b.d
t.ck(0,s)
r=b.cx
H.e(b)
q=C.a.gaE(e)
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
p.ep(new T.aB(o))
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
C.a.l(e,b.ch)
a.di(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.H)(s),++l)A.kT(a,s[l],t,d,e)},
cq:function cq(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aE:function aE(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fu:function fu(){},
dA:function(a){var t,s
t=C.j.eG(a,0,new A.il())
s=536870911&t+(C.b.cO(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
il:function il(){}},T={
bv:function(a,b,c){var t=new T.m(new Float32Array(3))
t.u(a,b,c)
return t},
aB:function aB(a){this.a=a},
L:function L(a){this.a=a},
w:function w(a){this.a=a},
m:function m(a){this.a=a},
am:function am(a){this.a=a}},Q={
nm:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t={}
s=document
r=new R.fJ(0,0,null,null,null,null)
r.du(C.k.cR(s,"stats"),"blue","gray")
q=C.k.cm(s,"#webgl-canvas")
p=new G.dM(null,q)
o=(q&&C.x).bc(q,"webgl2",P.az(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.G(P.c6('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.lG(o))
if($.kU>0)P.a3("I: "+n)
J.ln(o,0,0,0,1)
J.bT(o,2929)
J.bT(o,2884)
m=B.mr(65,0,0,q)
o=new T.L(new Float32Array(16))
o.V()
n=new T.L(new Float32Array(16))
n.V()
l=new G.fk(m,50,1,0.1,1000,o,n,new T.L(new Float32Array(16)),P.R(),"perspective",!1,!0)
l.bv()
o=H.B([],[A.aE])
k=new R.cy(q,l,null,p,o,17664,0,0,0,0,"main",!1,!0)
k.dq("main",p,null)
k.co(null)
n=W.f
W.V(window,"resize",k.geZ(),!1,n)
j=G.fw("plasma1",p,$.$get$l4(),$.$get$l1())
i=G.fw("plasma2",p,$.$get$l5(),$.$get$l2())
h=G.fw("plasma3",p,$.$get$l6(),$.$get$l3())
g=[new A.aE(j,[l],[],"plasma1",!1,!0),new A.aE(i,[l],[],"plasma2",!1,!0),new A.aE(h,[l],[],"plasma3",!1,!0)]
for(f=0;f<3;++f){e=g[f]
H.b(!0)
C.a.l(o,e)}d=new G.cj(P.R(),"mat",!1,!0)
d.L("cDepthTest",!0)
d.L("cDepthWrite",!0)
d.L("cBlendEquation",$.$get$jP())
j=$.$get$kj()
d.L("cStencilFunc",j)
i=g[0].d
c=B.m7(!0,1,0,1,0,10,10,10)
b=G.kd("cube",i.d,4,i.e.x)
b.av(G.k5(c.d,null))
i=c.dj()
h=b.d
b.y=J.iP(h.a)
H.b(b.ch!=null)
a=b.ch.length
if(a<768){b.saT(new Uint8Array(H.i7(i)))
b.Q=5121}else if(a<196608){b.saT(new Uint16Array(H.i7(i)))
b.Q=5123}else{b.saT(new Uint32Array(H.i7(i)))
b.Q=5125}J.dD(h.a,b.e)
i=b.y
a=b.cx
a0=J.u(a)
H.b(!!a0.$iskx||!!a0.$isky||!!a0.$iskz)
J.iN(h.a,34963,i)
J.jC(h.a,34963,a,35048)
G.mP(c,b)
i=new Float32Array(9)
h=new T.L(new Float32Array(16))
h.V()
a=new Float32Array(16)
a0=new T.L(a)
a0.V()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
a5=new T.m(a4)
a6=new A.cq(d,b,[],new T.aB(i),h,a0,new T.m(a1),new T.m(a2),new T.m(a3),a5,b.a,!1,!0)
a6.bl(0,0,0)
a4[0]=a[0]
a4[1]=a[4]
a4[2]=a[8]
a0.ar(0,a5,-1)
a0.ar(0,a6.bj(),-0.7)
t.a=0
a0=g[0]
H.b(!0)
C.a.l(a0.f,a6)
C.k.eb(s,"keypress",new Q.iy(t,g,a6))
a7=H.af(C.k.cm(s,"#myselect"),"$isbp")
a7.toString
W.V(a7,"change",new Q.iz(t,g,a6,a7),!1,n)
n=G.fw("stars",p,$.$get$l9(),$.$get$l8())
a0=[]
i=n.d
h=$.$get$jO()
a8=new G.cj(P.R(),"stars",!1,!0)
a8.L("cDepthTest",!0)
a8.L("cDepthWrite",!1)
a8.L("cBlendEquation",h)
a8.L("cStencilFunc",j)
a9=s.createElement("canvas")
a9.width=64
a9.height=64
b0=C.x.cQ(a9,"2d")
b1=(b0&&C.r).c4(b0,32,32,1,32,32,22);(b1&&C.o).aB(b1,0,"gray")
C.o.aB(b1,1,"black")
b0.fillStyle=b1
C.r.eE(b0,0,0,64,64)
b1=C.r.c4(b0,32,32,1,32,32,6);(b1&&C.o).aB(b1,0,"white")
C.o.aB(b1,1,"gray")
b0.globalAlpha=0.9
b0.fillStyle=b1
b0.arc(32,32,4,0,6.283185307179586,!1)
b0.fill("nonzero")
s=new G.fX(!1,!1,!1,!0,1,9729,9729)
j=J.lq(i.a)
h=new G.eD(a9,"Utils::Particles",j,3553,i,s)
J.bS(i.a,3553,j)
J.lM(i.a,37440,1)
h.dt(a9)
s.dl(i,3553)
H.b(J.lH(i.a)===0)
J.bS(i.a,3553,null)
a8.L("uTexture",h)
a8.L("uPointSize",1000)
b=R.mH(n,2000,100)
s=new Float32Array(9)
j=new T.L(new Float32Array(16))
j.V()
i=new T.L(new Float32Array(16))
i.V()
h=new Float32Array(3)
a=new Float32Array(3)
a1=new Float32Array(3)
a2=new Float32Array(3)
H.b(!0)
C.a.l(a0,new A.cq(a8,b,[],new T.aB(s),j,i,new T.m(h),new T.m(a),new T.m(a1),new T.m(a2),b.a,!1,!0))
H.b(!0)
C.a.l(o,new A.aE(n,[l],a0,"stars",!1,!0))
t.b=0
new Q.ix(t,m,a6,d,k,r).$1(0)},
iy:function iy(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ix:function ix(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f}}
var v=[C,H,J,P,W,B,G,R,A,T,Q]
setFunctionNamesIfNecessary(v)
var $={}
H.j1.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.aC(a)},
k:function(a){return"Instance of '"+H.bn(a)+"'"},
gC:function(a){return new H.al(H.ik(a),null)}}
J.eJ.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gC:function(a){return C.as},
$isae:1}
J.eK.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gC:function(a){return C.am},
$isJ:1}
J.bi.prototype={
gw:function(a){return 0},
gC:function(a){return C.al},
k:function(a){return String(a)},
$isk9:1}
J.fl.prototype={}
J.aI.prototype={}
J.ax.prototype={
k:function(a){var t=a[$.$get$jX()]
return t==null?this.d8(a):J.bb(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj_:1}
J.av.prototype={
l:function(a,b){if(!!a.fixed$length)H.G(P.r("add"))
a.push(b)},
a1:function(a,b){var t
if(!!a.fixed$length)H.G(P.r("remove"))
for(t=0;t<a.length;++t)if(J.C(a[t],b)){a.splice(t,1)
return!0}return!1},
M:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.G(P.r("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.H)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.G(P.ah(a)))
a.push(q)}},
cj:function(a,b){return new H.bj(a,b,[H.ap(a,0),null])},
aq:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
geF:function(a){if(a.length>0)return a[0]
throw H.c(H.eI())},
gaE:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eI())},
bm:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.G(P.r("setRange"))
P.ki(b,c,a.length,null,null,null)
t=C.b.a6(c,b)
if(t===0)return
if(e<0)H.G(P.aD(e,0,null,"skipCount",null))
s=J.T(d)
if(C.b.U(e+t,s.gj(d)))throw H.c(H.mp())
if(C.b.a3(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bS:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ah(a))}return!1},
d3:function(a,b){if(!!a.immutable$list)H.G(P.r("sort"))
H.mE(a,P.n8())},
aJ:function(a){return this.d3(a,null)},
D:function(a,b){var t
for(t=0;t<a.length;++t)if(J.C(a[t],b))return!0
return!1},
k:function(a){return P.eH(a,"[","]")},
gB:function(a){return new J.dH(a,a.length,0,null,[H.ap(a,0)])},
gw:function(a){return H.aC(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.G(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iV(b,"newLength",null))
if(b<0)throw H.c(P.aD(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aN(a,b))
if(b>=a.length||b<0)throw H.c(H.aN(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.G(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aN(a,b))
if(b>=a.length||b<0)throw H.c(H.aN(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isk:1,
$ish:1}
J.j0.prototype={}
J.dH.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.H(t))
r=this.c
if(r>=s){this.sbw(null)
return!1}this.sbw(t[r]);++this.c
return!0},
sbw:function(a){this.d=a}}
J.aV.prototype={
S:function(a,b){var t
if(typeof b!=="number")throw H.c(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaC(b)
if(this.gaC(a)===t)return 0
if(this.gaC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaC:function(a){return a===0?1/a<0:a<0},
ek:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.r(""+a+".ceil()"))},
ab:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.r(""+a+".round()"))},
el:function(a,b,c){if(this.S(b,c)>0)throw H.c(H.P(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
f6:function(a,b){var t
if(b>20)throw H.c(P.aD(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaC(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a4:function(a,b){if(typeof b!=="number")throw H.c(H.P(b))
return a+b},
a6:function(a,b){if(typeof b!=="number")throw H.c(H.P(b))
return a-b},
cP:function(a,b){if(typeof b!=="number")throw H.c(H.P(b))
return a/b},
H:function(a,b){if(typeof b!=="number")throw H.c(H.P(b))
return a*b},
aI:function(a,b){var t=a%b
if(t===0)return 0
if(t>0)return t
if(b<0)return t-b
else return t+b},
aL:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bN(a,b)},
J:function(a,b){return(a|0)===a?a/b|0:this.bN(a,b)},
bN:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.r("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aZ:function(a,b){var t
if(a>0)t=this.e6(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e6:function(a,b){return b>31?0:a>>>b},
cO:function(a,b){if(typeof b!=="number")throw H.c(H.P(b))
return(a&b)>>>0},
da:function(a,b){if(typeof b!=="number")throw H.c(H.P(b))
return(a^b)>>>0},
a3:function(a,b){if(typeof b!=="number")throw H.c(H.P(b))
return a<b},
U:function(a,b){if(typeof b!=="number")throw H.c(H.P(b))
return a>b},
ba:function(a,b){if(typeof b!=="number")throw H.c(H.P(b))
return a>=b},
gC:function(a){return C.av},
$isE:1,
$asE:function(){return[P.a2]},
$isW:1,
$isa2:1}
J.ce.prototype={
gC:function(a){return C.au},
$isy:1}
J.cd.prototype={
gC:function(a){return C.at}}
J.aw.prototype={
aN:function(a,b){if(b>=a.length)throw H.c(H.aN(a,b))
return a.charCodeAt(b)},
a4:function(a,b){if(typeof b!=="string")throw H.c(P.iV(b,null,null))
return a+b},
d4:function(a,b,c){var t
if(c>a.length)throw H.c(P.aD(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bo:function(a,b){return this.d4(a,b,0)},
bq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fq(b,null,null))
if(b>c)throw H.c(P.fq(b,null,null))
if(c>a.length)throw H.c(P.fq(c,null,null))
return a.substring(b,c)},
d5:function(a,b){return this.bq(a,b,null)},
f5:function(a){return a.toLowerCase()},
en:function(a,b,c){if(c>a.length)throw H.c(P.aD(c,0,a.length,null,null))
return H.nu(a,b,c)},
S:function(a,b){var t
if(typeof b!=="string")throw H.c(H.P(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gw:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gC:function(a){return C.an},
gj:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.aN(a,b))
if(b>=a.length||!1)throw H.c(H.aN(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isE:1,
$asE:function(){return[P.o]},
$iso:1}
H.k.prototype={}
H.aW.prototype={
gB:function(a){return new H.cg(this,this.gj(this),0,null,[H.a1(this,"aW",0)])},
aG:function(a,b){return this.d7(0,b)},
f4:function(a,b){var t,s
t=H.B([],[H.a1(this,"aW",0)])
C.a.sj(t,this.gj(this))
for(s=0;C.b.a3(s,this.gj(this));++s)t[s]=this.t(0,s)
return t},
f3:function(a){return this.f4(a,!0)}}
H.cg.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.T(t)
r=s.gj(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.ah(t))
if(C.b.ba(this.c,r)){this.sah(null)
return!1}this.sah(s.t(t,this.c));++this.c
return!0},
sah:function(a){this.d=a}}
H.ci.prototype={
gB:function(a){return new H.eV(null,J.ag(this.a),this.b,this.$ti)},
gj:function(a){return J.aO(this.a)},
$asQ:function(a,b){return[b]}}
H.e4.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.eV.prototype={
p:function(){var t=this.b
if(t.p()){this.sah(this.c.$1(t.gq(t)))
return!0}this.sah(null)
return!1},
gq:function(a){return this.a},
sah:function(a){this.a=a},
$ascc:function(a,b){return[b]}}
H.bj.prototype={
gj:function(a){return J.aO(this.a)},
t:function(a,b){return this.b.$1(J.lx(this.a,b))},
$ask:function(a,b){return[b]},
$asaW:function(a,b){return[b]},
$asQ:function(a,b){return[b]}}
H.cN.prototype={
gB:function(a){return new H.hf(J.ag(this.a),this.b,this.$ti)}}
H.hf.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aU.prototype={}
H.iI.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iJ.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hQ.prototype={
seP:function(a){this.z=a},
seS:function(a){this.ch=a}}
H.b1.prototype={
dF:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dK(s,t)},
bR:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b1()},
eY:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.a1(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bH();++r.d}this.y=!1}this.b1()},
ea:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eX:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(P.r("removeRange"))
P.ki(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d0:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eJ:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.I(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j7(null,null)
this.cx=t}t.Y(0,new H.hJ(a,c))},
eI:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aD()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j7(null,null)
this.cx=t}t.Y(0,this.geQ())},
eK:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a3(a)
if(b!=null)P.a3(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bb(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bz(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.I(0,s)},
al:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.K(o)
p=H.ao(o)
this.eK(q,p)
if(this.db){this.aD()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n4(r)
u.globalState.d=H.ju(t,"$isb1")
if(t!=null)$=t.geO()
if(this.cx!=null)for(;n=this.cx,!n.gap(n);)this.cx.cn().$0()}return s},
ci:function(a){return this.b.h(0,a)},
dK:function(a,b){var t=this.b
if(t.G(0,a))throw H.c(P.c6("Registry: ports must be registered only once."))
t.i(0,a,b)},
b1:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aD()},
aD:function(){var t,s,r
t=this.cx
if(t!=null)t.a_(0)
for(t=this.b,s=t.gcK(t),s=s.gB(s);s.p();)s.gq(s).dL()
t.a_(0)
this.c.a_(0)
u.globalState.z.a1(0,this.a)
this.dx.a_(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].I(0,t[r+1])
this.ch=null}},
geO:function(){return this.d},
geo:function(){return this.e}}
H.hJ.prototype={
$0:function(){this.a.I(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hs.prototype={
ew:function(){var t=this.a
if(t.b===t.c)return
return t.cn()},
cq:function(){var t,s,r
t=this.ew()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gap(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.c6("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gap(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.az(["command","close"])
r=new H.a0(!0,P.b2(null,P.y)).K(r)
s.toString
self.postMessage(r)}return!1}t.eV()
return!0},
bL:function(){if(self.window!=null)new H.ht(this).$0()
else for(;this.cq(););},
as:function(){var t,s,r,q,p
if(!u.globalState.x)this.bL()
else try{this.bL()}catch(r){t=H.K(r)
s=H.ao(r)
q=u.globalState.Q
p=P.az(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a0(!0,P.b2(null,P.y)).K(p)
q.toString
self.postMessage(p)}}}
H.ht.prototype={
$0:function(){if(!this.a.cq())return
P.mG(C.z,this)},
$S:function(){return{func:1,v:true}}}
H.aL.prototype={
eV:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.al(this.b)}}
H.hP.prototype={}
H.eF.prototype={
$0:function(){H.ml(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eG.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b6(s,{func:1,args:[P.J,P.J]}))s.$2(this.e,this.d)
else if(H.b6(s,{func:1,args:[P.J]}))s.$1(this.e)
else s.$0()}t.b1()},
$S:function(){return{func:1,v:true}}}
H.hn.prototype={}
H.b3.prototype={
I:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mT(b)
if(t.geo()===s){s=J.T(r)
switch(s.h(r,0)){case"pause":t.bR(s.h(r,1),s.h(r,2))
break
case"resume":t.eY(s.h(r,1))
break
case"add-ondone":t.ea(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eX(s.h(r,1))
break
case"set-errors-fatal":t.d0(s.h(r,1),s.h(r,2))
break
case"ping":t.eJ(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eI(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.a1(0,s)
break}return}u.globalState.f.a.Y(0,new H.aL(t,new H.hR(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b3){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.hR.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dI(0,this.b)},
$S:function(){return{func:1}}}
H.bK.prototype={
I:function(a,b){var t,s,r
t=P.az(["command","message","port",this,"msg",b])
s=new H.a0(!0,P.b2(null,P.y)).K(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
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
gw:function(a){return C.b.da((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cx.prototype={
dL:function(){this.c=!0
this.b=null},
dI:function(a,b){if(this.c)return
this.b.$1(b)},
$ismz:1}
H.fZ.prototype={
dv:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Y(0,new H.aL(s,new H.h_(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.ih()
this.c=self.setTimeout(H.bO(new H.h0(this,b),0),a)}else{H.b(a>0)
throw H.c(P.r("Timer greater than 0."))}}}
H.h_.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h0.prototype={
$0:function(){var t=this.a
t.c=null
H.iw()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ar.prototype={
gw:function(a){var t=this.a
t=C.b.aZ(t,0)^C.b.J(t,4294967296)
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
H.a0.prototype={
K:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.u(a)
if(!!t.$isbl)return["buffer",a]
if(!!t.$isaZ)return["typed",a]
if(!!t.$isp)return this.cW(a)
if(!!t.$ismi){r=this.gcT()
q=t.gE(a)
q=H.j8(q,r,H.a1(q,"Q",0),null)
q=P.kb(q,!0,H.a1(q,"Q",0))
t=t.gcK(a)
t=H.j8(t,r,H.a1(t,"Q",0),null)
return["map",q,P.kb(t,!0,H.a1(t,"Q",0))]}if(!!t.$isk9)return this.cX(a)
if(!!t.$isa)this.cI(a)
if(!!t.$ismz)this.at(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb3)return this.cY(a)
if(!!t.$isbK)return this.cZ(a)
if(!!t.$isat){p=a.$static_name
if(p==null)this.at(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isar)return["capability",a.a]
if(!(a instanceof P.D))this.cI(a)
return["dart",u.classIdExtractor(a),this.cV(u.classFieldsExtractor(a))]},
at:function(a,b){throw H.c(P.r((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cI:function(a){return this.at(a,null)},
cW:function(a){var t
H.b(typeof a!=="string")
t=this.cU(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.at(a,"Can't serialize indexable: ")},
cU:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.K(a[s])
return t},
cV:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.K(a[t]))
return a},
cX:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.at(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.K(a[t[r]])
return["js-object",t,s]},
cZ:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cY:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aK.prototype={
a0:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.jN("Bad serialized message: "+H.e(a)))
switch(C.a.geF(a)){case"ref":H.b(J.C(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.C(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.C(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.C(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.aj(H.B(this.ak(t),[null]))
case"extendable":H.b(J.C(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.B(this.ak(t),[null])
case"mutable":H.b(J.C(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ak(t)
case"const":H.b(J.C(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.aj(H.B(this.ak(t),[null]))
case"map":return this.ez(a)
case"sendport":return this.eA(a)
case"raw sendport":H.b(J.C(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ey(a)
case"function":H.b(J.C(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.C(a[0],"capability"))
return new H.ar(a[1])
case"dart":H.b(J.C(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ak(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ak:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.a0(a[t]))
return a},
ez:function(a){var t,s,r,q,p
H.b(J.C(a[0],"map"))
t=a[1]
s=a[2]
r=P.R()
C.a.l(this.b,r)
t=J.lL(t,this.gex()).f3(0)
for(q=J.T(s),p=0;p<t.length;++p)r.i(0,t[p],this.a0(q.h(s,p)))
return r},
eA:function(a){var t,s,r,q,p,o,n
H.b(J.C(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ci(r)
if(o==null)return
n=new H.b3(o,s)}else n=new H.bK(t,r,s)
C.a.l(this.b,n)
return n},
ey:function(a){var t,s,r,q,p,o
H.b(J.C(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.T(t),p=J.T(s),o=0;C.b.a3(o,q.gj(t));++o)r[q.h(t,o)]=this.a0(p.h(s,o))
return r}}
H.ft.prototype={}
H.h4.prototype={
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
H.fb.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eM.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.h8.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iK.prototype={
$1:function(a){if(!!J.u(a).$isaT)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dd.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb_:1}
H.ir.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.is.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.it.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iu.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iv.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.at.prototype={
k:function(a){return"Closure '"+H.bn(this).trim()+"'"},
$isj_:1,
gf9:function(){return this},
$D:null}
H.fU.prototype={}
H.fH.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bc.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bc))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aC(this.a)
else s=typeof t!=="object"?J.ba(t):H.aC(t)
return(s^H.aC(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bn(t)+"'")}}
H.h6.prototype={
k:function(a){return this.a}}
H.dL.prototype={
k:function(a){return this.a}}
H.fz.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hh.prototype={
k:function(a){return C.i.a4("Assertion failed: ",P.c5(this.a))}}
H.al.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.ba(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.al){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a6.prototype={
gj:function(a){return this.a},
gap:function(a){return this.a===0},
gE:function(a){return new H.eP(this,[H.ap(this,0)])},
gcK:function(a){return H.j8(this.gE(this),new H.eL(this),H.ap(this,0),H.ap(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bE(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bE(s,b)}else return this.eL(b)},
eL:function(a){var t=this.d
if(t==null)return!1
return this.ao(this.az(t,this.an(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ai(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ai(r,b)
return s==null?null:s.b}else return this.eM(b)},
eM:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.az(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aV()
this.b=t}this.by(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aV()
this.c=s}this.by(s,b,c)}else{r=this.d
if(r==null){r=this.aV()
this.d=r}q=this.an(b)
p=this.az(r,q)
if(p==null)this.aY(r,q,[this.aW(b,c)])
else{o=this.ao(p,b)
if(o>=0)p[o].b=c
else p.push(this.aW(b,c))}}},
a1:function(a,b){if(typeof b==="string")return this.bK(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bK(this.c,b)
else return this.eN(b)},
eN:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.az(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bO(q)
return q.b},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aU()}},
am:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ah(this))
t=t.c}},
by:function(a,b,c){var t=this.ai(a,b)
if(t==null)this.aY(a,b,this.aW(b,c))
else t.b=c},
bK:function(a,b){var t
if(a==null)return
t=this.ai(a,b)
if(t==null)return
this.bO(t)
this.bF(a,b)
return t.b},
aU:function(){this.r=this.r+1&67108863},
aW:function(a,b){var t,s
t=new H.eO(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aU()
return t},
bO:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aU()},
an:function(a){return J.ba(a)&0x3ffffff},
ao:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1},
k:function(a){return P.kc(this)},
ai:function(a,b){return a[b]},
az:function(a,b){return a[b]},
aY:function(a,b,c){H.b(c!=null)
a[b]=c},
bF:function(a,b){delete a[b]},
bE:function(a,b){return this.ai(a,b)!=null},
aV:function(){var t=Object.create(null)
this.aY(t,"<non-identifier-key>",t)
this.bF(t,"<non-identifier-key>")
return t},
$ismi:1}
H.eL.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eO.prototype={}
H.eP.prototype={
gj:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.eQ(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eQ.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.sbx(null)
return!1}else{this.sbx(t.a)
this.c=this.c.c
return!0}}},
sbx:function(a){this.d=a}}
H.im.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.io.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.o]}}}
H.ip.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.o]}}}
H.bl.prototype={
gC:function(a){return C.ae},
$isbl:1}
H.aZ.prototype={$isaZ:1}
H.f1.prototype={
gC:function(a){return C.af}}
H.cm.prototype={
gj:function(a){return a.length},
$isp:1,
$asp:function(){},
$ist:1,
$ast:function(){}}
H.cn.prototype={
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ac(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.W]},
$asaU:function(){return[P.W]},
$asl:function(){return[P.W]},
$ish:1,
$ash:function(){return[P.W]}}
H.co.prototype={
i:function(a,b,c){H.ac(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.y]},
$asaU:function(){return[P.y]},
$asl:function(){return[P.y]},
$ish:1,
$ash:function(){return[P.y]}}
H.cl.prototype={
gC:function(a){return C.ag},
$iset:1}
H.f2.prototype={
gC:function(a){return C.ah}}
H.f3.prototype={
gC:function(a){return C.ai},
h:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f4.prototype={
gC:function(a){return C.aj},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$isk6:1}
H.f5.prototype={
gC:function(a){return C.ak},
h:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f6.prototype={
gC:function(a){return C.ao},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$iskx:1}
H.f7.prototype={
gC:function(a){return C.ap},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$isky:1}
H.cp.prototype={
gC:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f8.prototype={
gC:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){H.ac(b,a,a.length)
return a[b]},
$iskz:1}
H.bB.prototype={}
H.bC.prototype={}
H.bD.prototype={}
H.bE.prototype={}
P.hj.prototype={
$1:function(a){var t,s
H.iw()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hi.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.ih()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hk.prototype={
$0:function(){H.iw()
this.a.$0()},
$S:function(){return{func:1}}}
P.hl.prototype={
$0:function(){H.iw()
this.a.$0()},
$S:function(){return{func:1}}}
P.iX.prototype={}
P.ho.prototype={}
P.i2.prototype={
em:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.jb("Future already completed"))
t.aQ(b)}}
P.cW.prototype={
eT:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b8(this.d,a.a)},
eH:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b6(s,{func:1,args:[P.D,P.b_]}))return t.f_(s,a.a,a.b)
else return t.b8(s,a.a)}}
P.ab.prototype={
cv:function(a,b){var t,s,r
t=$.A
if(t!==C.f){t.toString
if(b!=null)b=P.mX(b,t)}s=new P.ab(0,t,null,[null])
r=b==null?1:3
this.bz(new P.cW(null,s,r,a,b,[H.ap(this,0),null]))
return s},
cu:function(a){return this.cv(a,null)},
aM:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bz:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.ju(this.c,"$iscW")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bz(a)
return}this.aM(t)}H.b(this.a>=4)
t=this.b
t.toString
P.ia(null,null,t,new P.hy(this,a))}},
bJ:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bJ(a)
return}this.aM(s)}H.b(this.a>=4)
t.a=this.aA(a)
s=this.b
s.toString
P.ia(null,null,s,new P.hC(t,this))}},
aX:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aA(t)},
aA:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aQ:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.ib(a,"$isex",t,"$asex")
if(s){t=H.ib(a,"$isab",t,null)
if(t)P.kE(a,this)
else P.mO(a,this)}else{r=this.aX()
H.b(this.a<4)
this.a=4
this.c=a
P.bx(this,r)}},
aw:function(a,b){var t
H.b(this.a<4)
t=this.aX()
H.b(this.a<4)
this.a=8
this.c=new P.aP(a,b)
P.bx(this,t)},
dN:function(a){return this.aw(a,null)},
$isex:1,
gb_:function(){return this.a},
ge2:function(){return this.c}}
P.hy.prototype={
$0:function(){P.bx(this.a,this.b)},
$S:function(){return{func:1}}}
P.hC.prototype={
$0:function(){P.bx(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hz.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aQ(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hA.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.aw(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hB.prototype={
$0:function(){this.a.aw(this.b,this.c)},
$S:function(){return{func:1}}}
P.hF.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cp(q.d)}catch(n){s=H.K(n)
r=H.ao(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aP(s,r)
p.a=!0
return}if(!!J.u(t).$isex){if(t instanceof P.ab&&t.gb_()>=4){if(t.gb_()===8){q=t
H.b(q.gb_()===8)
p=this.b
p.b=q.ge2()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cu(new P.hG(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hG.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hE.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b8(r.d,this.c)}catch(q){t=H.K(q)
s=H.ao(q)
r=this.a
r.b=new P.aP(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hD.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eT(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eH(t)
p.a=!1}}catch(o){s=H.K(o)
r=H.ao(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aP(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cO.prototype={}
P.fM.prototype={
gj:function(a){var t,s
t={}
s=new P.ab(0,$.A,null,[P.y])
t.a=0
this.eR(new P.fO(t),!0,new P.fP(t,s),s.gdM())
return s}}
P.fO.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fP.prototype={
$0:function(){this.b.aQ(this.a.a)},
$S:function(){return{func:1}}}
P.fN.prototype={}
P.jc.prototype={}
P.aP.prototype={
k:function(a){return H.e(this.a)},
$isaT:1}
P.i6.prototype={}
P.i9.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cu()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hT.prototype={
f0:function(a){var t,s,r
try{if(C.f===$.A){a.$0()
return}P.kK(null,null,this,a)}catch(r){t=H.K(r)
s=H.ao(r)
P.i8(null,null,this,t,s)}},
f1:function(a,b){var t,s,r
try{if(C.f===$.A){a.$1(b)
return}P.kL(null,null,this,a,b)}catch(r){t=H.K(r)
s=H.ao(r)
P.i8(null,null,this,t,s)}},
eh:function(a){return new P.hV(this,a)},
b2:function(a){return new P.hU(this,a)},
ei:function(a){return new P.hW(this,a)},
h:function(a,b){return},
cp:function(a){if($.A===C.f)return a.$0()
return P.kK(null,null,this,a)},
b8:function(a,b){if($.A===C.f)return a.$1(b)
return P.kL(null,null,this,a,b)},
f_:function(a,b,c){if($.A===C.f)return a.$2(b,c)
return P.mY(null,null,this,a,b,c)}}
P.hV.prototype={
$0:function(){return this.a.cp(this.b)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){return this.a.f0(this.b)},
$S:function(){return{func:1}}}
P.hW.prototype={
$1:function(a){return this.a.f1(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hN.prototype={
an:function(a){return H.no(a)&0x3ffffff},
ao:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hL.prototype={
gB:function(a){var t=new P.bz(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
D:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dO(b)},
dO:function(a){var t=this.d
if(t==null)return!1
return this.ay(t[this.ax(a)],a)>=0},
ci:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.D(0,a)?a:null
else return this.dX(a)},
dX:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ax(a)]
r=this.ay(s,a)
if(r<0)return
return J.b9(s,r).gdQ()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jm()
this.b=t}return this.bB(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jm()
this.c=s}return this.bB(s,b)}else return this.Y(0,b)},
Y:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jm()
this.d=t}s=this.ax(b)
r=t[s]
if(r==null){q=[this.aP(b)]
H.b(q!=null)
t[s]=q}else{if(this.ay(r,b)>=0)return!1
r.push(this.aP(b))}return!0},
a1:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.dY(0,b)},
dY:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ax(b)]
r=this.ay(s,b)
if(r<0)return!1
this.bD(s.splice(r,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aO()}},
bB:function(a,b){var t
if(a[b]!=null)return!1
t=this.aP(b)
H.b(!0)
a[b]=t
return!0},
bC:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bD(t)
delete a[b]
return!0},
aO:function(){this.r=this.r+1&67108863},
aP:function(a){var t,s
t=new P.hM(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aO()
return t},
bD:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aO()},
ax:function(a){return J.ba(a)&0x3ffffff},
ay:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.C(a[s].a,b))return s
return-1}}
P.hM.prototype={
gdQ:function(){return this.a}}
P.bz.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ah(t))
else{t=this.c
if(t==null){this.sag(null)
return!1}else{this.sag(t.a)
this.c=this.c.b
return!0}}},
sag:function(a){this.d=a}}
P.hI.prototype={}
P.j5.prototype={$isk:1}
P.cf.prototype={$isk:1,$ish:1}
P.l.prototype={
gB:function(a){return new H.cg(a,this.gj(a),0,null,[H.a1(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
cj:function(a,b){return new H.bj(a,b,[H.a1(a,"l",0),null])},
eG:function(a,b,c){var t,s,r,q
t=this.gj(a)
for(s=b,r=0;C.b.a3(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gj(a)
if(t==null?q!=null:t!==q)throw H.c(P.ah(a))}return s},
k:function(a){return P.eH(a,"[","]")}}
P.ch.prototype={}
P.eU.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aY.prototype={
am:function(a,b){var t,s
for(t=J.ag(this.gE(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.aO(this.gE(a))},
k:function(a){return P.kc(a)}}
P.eR.prototype={
dm:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbM(H.B(t,[b]))},
gB:function(a){return new P.hO(this,this.c,this.d,this.b,null,this.$ti)},
gap:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=this.gj(this)
if(C.b.U(0,b)||b>=t)H.G(P.z(b,this,"index",null,t))
return this.a[(C.b.a4(this.b,b)&this.a.length-1)>>>0]},
a_:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eH(this,"{","}")},
cn:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eI());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
Y:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bH();++this.d},
bH:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bm(s,0,q,t,r)
C.a.bm(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbM(s)},
sbM:function(a){this.a=a}}
P.hO.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(P.ah(t))
s=this.d
if(s===this.b){this.sag(null)
return!1}this.sag(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sag:function(a){this.e=a}}
P.fB.prototype={
M:function(a,b){var t
for(t=J.ag(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eH(this,"{","}")},
$isk:1}
P.fA.prototype={}
P.bA.prototype={}
P.ae.prototype={}
P.E.prototype={}
P.bd.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bd))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aZ(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m8(H.my(this))
s=P.c_(H.mw(this))
r=P.c_(H.ms(this))
q=P.c_(H.mt(this))
p=P.c_(H.mv(this))
o=P.c_(H.mx(this))
n=P.m9(H.mu(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isE:1,
$asE:function(){return[P.bd]}}
P.W.prototype={}
P.au.prototype={
a3:function(a,b){return C.b.a3(this.a,b.gdP())},
U:function(a,b){return C.b.U(this.a,b.gdP())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.au))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e3()
s=this.a
if(s<0)return"-"+new P.au(0-s).k(0)
r=t.$1(C.b.J(s,6e7)%60)
q=t.$1(C.b.J(s,1e6)%60)
p=new P.e2().$1(s%1e6)
return""+C.b.J(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isE:1,
$asE:function(){return[P.au]}}
P.e2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.y]}}}
P.e3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.y]}}}
P.aT.prototype={}
P.bV.prototype={
k:function(a){return"Assertion failed"}}
P.cu.prototype={
k:function(a){return"Throw of null."}}
P.X.prototype={
gaS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaR:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaS()+s+r
if(!this.a)return q
p=this.gaR()
o=P.c5(this.b)
return q+p+": "+H.e(o)}}
P.cw.prototype={
gaS:function(){return"RangeError"},
gaR:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eE.prototype={
gaS:function(){return"RangeError"},
gaR:function(){H.b(this.a)
if(J.le(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.h9.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.h7.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b0.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dN.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.c5(t))+"."}}
P.cD.prototype={
k:function(a){return"Stack Overflow"},
$isaT:1}
P.dW.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iZ.prototype={}
P.hx.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.e6.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.iV(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kf(b,"expando$values")
return s==null?null:H.kf(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.y.prototype={}
P.Q.prototype={
aG:function(a,b){return new H.cN(this,b,[H.a1(this,"Q",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gB(this)
for(s=0;t.p();)++s
return s},
ga5:function(a){var t,s
t=this.gB(this)
if(!t.p())throw H.c(H.eI())
s=t.gq(t)
if(t.p())throw H.c(H.mq())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.m0("index"))
if(b<0)H.G(P.aD(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.z(b,this,"index",null,s))},
k:function(a){return P.mo(this,"(",")")}}
P.cc.prototype={}
P.h.prototype={$isk:1}
P.aX.prototype={}
P.J.prototype={
gw:function(a){return P.D.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.a2.prototype={$isE:1,
$asE:function(){return[P.a2]}}
P.D.prototype={constructor:P.D,$isD:1,
A:function(a,b){return this===b},
gw:function(a){return H.aC(this)},
k:function(a){return"Instance of '"+H.bn(this)+"'"},
gC:function(a){return new H.al(H.ik(this),null)},
toString:function(){return this.k(this)}}
P.b_.prototype={}
P.o.prototype={$isE:1,
$asE:function(){return[P.o]}}
P.bq.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga8:function(){return this.a}}
P.jf.prototype={}
W.j.prototype={}
W.bU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dE.prototype={
gj:function(a){return a.length}}
W.dF.prototype={
k:function(a){return String(a)}}
W.dG.prototype={
k:function(a){return String(a)}}
W.aq.prototype={$isaq:1}
W.bW.prototype={
bc:function(a,b,c){if(c!=null)return this.dS(a,b,P.n7(c,null))
return this.dT(a,b)},
cQ:function(a,b){return this.bc(a,b,null)},
dS:function(a,b,c){return a.getContext(b,c)},
dT:function(a,b){return a.getContext(b)}}
W.bX.prototype={
aB:function(a,b,c){return a.addColorStop(b,c)}}
W.bY.prototype={
c4:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eE:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aH:function(a){return P.id(a.getContextAttributes())}}
W.as.prototype={
gj:function(a){return a.length}}
W.dO.prototype={
gj:function(a){return a.length}}
W.dP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.aR.prototype={
bA:function(a,b){var t,s
t=$.$get$jW()
s=t[b]
if(typeof s==="string")return s
s=this.e7(a,b)
t[b]=s
return s},
e7:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.ma()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dS.prototype={}
W.Y.prototype={}
W.aS.prototype={}
W.dT.prototype={
gj:function(a){return a.length}}
W.dU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dV.prototype={
gj:function(a){return a.length}}
W.dX.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c0.prototype={}
W.be.prototype={
ec:function(a,b){return a.adoptNode(b)},
cR:function(a,b){return a.getElementById(b)},
cm:function(a,b){return a.querySelector(b)}}
W.dZ.prototype={
k:function(a){return String(a)}}
W.c1.prototype={
es:function(a,b){return a.createHTMLDocument(b)}}
W.e_.prototype={
gaF:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c2.prototype={
gaF:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.S]},
$isk:1,
$ask:function(){return[P.S]},
$ist:1,
$ast:function(){return[P.S]},
$asl:function(){return[P.S]},
$ish:1,
$ash:function(){return[P.S]},
$asn:function(){return[P.S]}}
W.c4.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gac(a))+" x "+H.e(this.gaa(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isS)return!1
return a.left===t.gcf(b)&&a.top===t.gcw(b)&&this.gac(a)===t.gac(b)&&this.gaa(a)===t.gaa(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gac(a)
q=this.gaa(a)
return W.kI(W.aM(W.aM(W.aM(W.aM(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaa:function(a){return a.height},
gcf:function(a){return a.left},
gcw:function(a){return a.top},
gac:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isS:1,
$asS:function(){}}
W.e0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.o]},
$isk:1,
$ask:function(){return[P.o]},
$ist:1,
$ast:function(){return[P.o]},
$asl:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asn:function(){return[P.o]}}
W.e1.prototype={
gj:function(a){return a.length}}
W.Z.prototype={
gef:function(a){return new W.hr(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k3
if(t==null){t=H.B([],[W.cs])
s=new W.ct(t)
C.a.l(t,W.kF(null))
C.a.l(t,W.kJ())
$.k3=s
d=s}else d=t
t=$.k2
if(t==null){t=new W.dn(d)
$.k2=t
c=t}else{t.a=d
c=t}}if($.ai==null){t=document
s=t.implementation
s=(s&&C.M).es(s,"")
$.ai=s
$.iY=s.createRange()
s=$.ai
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ai.head;(t&&C.N).R(t,r)}t=$.ai
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.ju(s,"$isaq")}t=$.ai
if(!!this.$isaq)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ai.body;(t&&C.q).R(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.X,a.tagName)){t=$.iY;(t&&C.F).cS(t,q)
t=$.iY
p=(t&&C.F).eq(t,b)}else{q.innerHTML=b
p=$.ai.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.R(p,s)}t=$.ai.body
if(q==null?t!=null:q!==t)J.jG(q)
c.bk(p)
C.k.ec(document,p)
return p},
er:function(a,b,c){return this.N(a,b,c,null)},
d2:function(a,b,c,d){a.textContent=null
this.R(a,this.N(a,b,c,d))},
d1:function(a,b){return this.d2(a,b,null,null)},
ad:function(a,b){return a.getAttribute(b)},
dZ:function(a,b){return a.removeAttribute(b)},
d_:function(a,b,c){return a.setAttribute(b,c)},
$isZ:1,
gf2:function(a){return a.tagName}}
W.e5.prototype={
$1:function(a){return!!J.u(a).$isZ},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
bQ:function(a,b,c,d){if(c!=null)this.dJ(a,b,c,d)},
eb:function(a,b,c){return this.bQ(a,b,c,null)},
dJ:function(a,b,c,d){return a.addEventListener(b,H.bO(c,1),d)}}
W.eq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.c7]},
$isk:1,
$ask:function(){return[W.c7]},
$ist:1,
$ast:function(){return[W.c7]},
$asl:function(){return[W.c7]},
$ish:1,
$ash:function(){return[W.c7]},
$asn:function(){return[W.c7]}}
W.er.prototype={
gj:function(a){return a.length}}
W.ev.prototype={
gj:function(a){return a.length}}
W.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.ca.prototype={}
W.eA.prototype={
gj:function(a){return a.length}}
W.bg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$ist:1,
$ast:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.cb.prototype={}
W.eB.prototype={
I:function(a,b){return a.send(b)}}
W.bh.prototype={}
W.ay.prototype={$isay:1}
W.eS.prototype={
k:function(a){return String(a)}}
W.eT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.eX.prototype={
gj:function(a){return a.length}}
W.eZ.prototype={
fa:function(a,b,c){return a.send(b,c)},
I:function(a,b){return a.send(b)}}
W.bk.prototype={}
W.f_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ck]},
$isk:1,
$ask:function(){return[W.ck]},
$ist:1,
$ast:function(){return[W.ck]},
$asl:function(){return[W.ck]},
$ish:1,
$ash:function(){return[W.ck]},
$asn:function(){return[W.ck]}}
W.I.prototype={$isI:1}
W.N.prototype={
ga5:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.jb("No elements"))
if(s>1)throw H.c(P.jb("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.R(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lg(t,c,C.D.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.c8(t,t.length,-1,null,[H.a1(t,"n",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$ask:function(){return[W.q]},
$ascf:function(){return[W.q]},
$asl:function(){return[W.q]},
$ash:function(){return[W.q]},
$asbA:function(){return[W.q]}}
W.q.prototype={
eW:function(a){var t=a.parentNode
if(t!=null)J.iL(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d6(a):t},
R:function(a,b){return a.appendChild(b)},
e_:function(a,b){return a.removeChild(b)},
e0:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
gb6:function(a){return a.previousSibling}}
W.cr.prototype={
b7:function(a){return a.previousNode()}}
W.bm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$ist:1,
$ast:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.a7.prototype={
gj:function(a){return a.length}}
W.fm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a7]},
$isk:1,
$ask:function(){return[W.a7]},
$ist:1,
$ast:function(){return[W.a7]},
$asl:function(){return[W.a7]},
$ish:1,
$ash:function(){return[W.a7]},
$asn:function(){return[W.a7]}}
W.fp.prototype={
I:function(a,b){return a.send(b)}}
W.cv.prototype={
eq:function(a,b){return a.createContextualFragment(b)},
cS:function(a,b){return a.selectNodeContents(b)}}
W.cz.prototype={
I:function(a,b){return a.send(b)}}
W.bp.prototype={$isbp:1,
gj:function(a){return a.length}}
W.ak.prototype={}
W.fD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cB]},
$isk:1,
$ask:function(){return[W.cB]},
$ist:1,
$ast:function(){return[W.cB]},
$asl:function(){return[W.cB]},
$ish:1,
$ash:function(){return[W.cB]},
$asn:function(){return[W.cB]}}
W.fF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cC]},
$isk:1,
$ask:function(){return[W.cC]},
$ist:1,
$ast:function(){return[W.cC]},
$asl:function(){return[W.cC]},
$ish:1,
$ash:function(){return[W.cC]},
$asn:function(){return[W.cC]}}
W.a8.prototype={
gj:function(a){return a.length}}
W.fK.prototype={
h:function(a,b){return this.bG(a,b)},
i:function(a,b,c){this.e5(a,b,c)},
am:function(a,b){var t,s
for(t=0;!0;++t){s=this.dW(a,t)
if(s==null)return
b.$2(s,this.bG(a,s))}},
gE:function(a){var t=H.B([],[P.o])
this.am(a,new W.fL(t))
return t},
gj:function(a){return a.length},
bG:function(a,b){return a.getItem(b)},
dW:function(a,b){return a.key(b)},
e5:function(a,b,c){return a.setItem(b,c)},
$asaY:function(){return[P.o,P.o]}}
W.fL.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cF.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=W.mc("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.N(s).M(0,new W.N(t))
return s}}
W.fS.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.N(t)
r=t.ga5(t)
r.toString
t=new W.N(r)
q=t.ga5(t)
s.toString
q.toString
new W.N(s).M(0,new W.N(q))
return s}}
W.fT.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aK(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.N(t)
r=t.ga5(t)
s.toString
r.toString
new W.N(s).M(0,new W.N(r))
return s}}
W.br.prototype={$isbr:1}
W.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cH]},
$isk:1,
$ask:function(){return[W.cH]},
$ist:1,
$ast:function(){return[W.cH]},
$asl:function(){return[W.cH]},
$ish:1,
$ash:function(){return[W.cH]},
$asn:function(){return[W.cH]}}
W.fW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cG]},
$isk:1,
$ask:function(){return[W.cG]},
$ist:1,
$ast:function(){return[W.cG]},
$asl:function(){return[W.cG]},
$ish:1,
$ash:function(){return[W.cG]},
$asn:function(){return[W.cG]}}
W.fY.prototype={
gj:function(a){return a.length}}
W.aG.prototype={$isaG:1}
W.h1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cK]},
$isk:1,
$ask:function(){return[W.cK]},
$ist:1,
$ast:function(){return[W.cK]},
$asl:function(){return[W.cK]},
$ish:1,
$ash:function(){return[W.cK]},
$asn:function(){return[W.cK]}}
W.h2.prototype={
gj:function(a){return a.length}}
W.cL.prototype={
b7:function(a){return a.previousNode()}}
W.aH.prototype={}
W.ha.prototype={
k:function(a){return String(a)}}
W.hc.prototype={
gm:function(a){return a.x},
gF:function(a){return a.z}}
W.hd.prototype={
gj:function(a){return a.length}}
W.he.prototype={
I:function(a,b){return a.send(b)}}
W.aJ.prototype={
gev:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
$isaJ:1}
W.bw.prototype={
gee:function(a){var t,s
t=P.a2
s=new P.ab(0,$.A,null,[t])
this.dR(a)
this.e1(a,W.kO(new W.hg(new P.i2(s,[t]))))
return s},
e1:function(a,b){return a.requestAnimationFrame(H.bO(b,1))},
dR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hg.prototype={
$1:function(a){this.a.em(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jh.prototype={}
W.hp.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.bZ]},
$isk:1,
$ask:function(){return[W.bZ]},
$ist:1,
$ast:function(){return[W.bZ]},
$asl:function(){return[W.bZ]},
$ish:1,
$ash:function(){return[W.bZ]},
$asn:function(){return[W.bZ]}}
W.hq.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
A:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isS)return!1
return a.left===t.gcf(b)&&a.top===t.gcw(b)&&a.width===t.gac(b)&&a.height===t.gaa(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kI(W.aM(W.aM(W.aM(W.aM(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaa:function(a){return a.height},
gac:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.c9]},
$isk:1,
$ask:function(){return[W.c9]},
$ist:1,
$ast:function(){return[W.c9]},
$asl:function(){return[W.c9]},
$ish:1,
$ash:function(){return[W.c9]},
$asn:function(){return[W.c9]}}
W.d2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$ist:1,
$ast:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asn:function(){return[W.q]}}
W.i_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a8]},
$isk:1,
$ask:function(){return[W.a8]},
$ist:1,
$ast:function(){return[W.a8]},
$asl:function(){return[W.a8]},
$ish:1,
$ash:function(){return[W.a8]},
$asn:function(){return[W.a8]}}
W.i0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cE]},
$isk:1,
$ask:function(){return[W.cE]},
$ist:1,
$ast:function(){return[W.cE]},
$asl:function(){return[W.cE]},
$ish:1,
$ash:function(){return[W.cE]},
$asn:function(){return[W.cE]}}
W.hm.prototype={
am:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.H)(t),++p){o=t[p]
b.$2(o,q.ad(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.o])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asch:function(){return[P.o,P.o]},
$asaY:function(){return[P.o,P.o]},
gdU:function(){return this.a}}
W.hr.prototype={
h:function(a,b){return J.iT(this.a,b)},
i:function(a,b,c){J.lO(this.a,b,c)},
gj:function(a){return this.gE(this).length}}
W.hu.prototype={
eR:function(a,b,c,d){return W.V(this.a,this.b,a,!1,H.ap(this,0))}}
W.jk.prototype={}
W.hv.prototype={
dD:function(a,b,c,d,e){this.e9()},
e9:function(){var t=this.d
if(t!=null&&this.a<=0)J.lh(this.b,this.c,t,!1)}}
W.hw.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.by.prototype={
dE:function(a){var t,s
t=$.$get$jl()
if(t.gap(t)){for(s=0;s<262;++s)t.i(0,C.W[s],W.nd())
for(s=0;s<12;++s)t.i(0,C.v[s],W.ne())}},
a9:function(a){return $.$get$kG().D(0,W.bf(a))},
Z:function(a,b,c){var t,s,r
t=W.bf(a)
s=$.$get$jl()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gB:function(a){return new W.c8(a,this.gj(a),-1,null,[H.a1(a,"n",0)])}}
W.ct.prototype={
a9:function(a){return C.a.bS(this.a,new W.fa(a))},
Z:function(a,b,c){return C.a.bS(this.a,new W.f9(a,b,c))}}
W.fa.prototype={
$1:function(a){return a.a9(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.f9.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bF.prototype={
dH:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.aG(0,new W.hY())
s=b.aG(0,new W.hZ())
this.b.M(0,t)
r=this.c
r.M(0,C.Y)
r.M(0,s)},
a9:function(a){return this.a.D(0,W.bf(a))},
Z:function(a,b,c){var t,s
t=W.bf(a)
s=this.c
if(s.D(0,H.e(t)+"::"+b))return this.d.ed(c)
else if(s.D(0,"*::"+b))return this.d.ed(c)
else{s=this.b
if(s.D(0,H.e(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.e(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1}}
W.hY.prototype={
$1:function(a){return!C.a.D(C.v,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hZ.prototype={
$1:function(a){return C.a.D(C.v,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i3.prototype={
Z:function(a,b,c){if(this.d9(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iT(a,"template")==="")return this.e.D(0,b)
return!1}}
W.i4.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.i1.prototype={
a9:function(a){var t=J.u(a)
if(!!t.$isbo)return!1
t=!!t.$isv
if(t&&W.bf(a)==="foreignObject")return!1
if(t)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.i.bo(b,"on"))return!1
return this.a9(a)}}
W.c8.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbI(J.b9(this.a,t))
this.c=t
return!0}this.sbI(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbI:function(a){this.d=a}}
W.cs.prototype={}
W.j9.prototype={}
W.jg.prototype={}
W.hX.prototype={}
W.dn.prototype={
bk:function(a){new W.i5(this).$2(a,null)},
aj:function(a,b){if(b==null)J.jG(a)
else J.iL(b,a)},
e4:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lA(a)
r=J.iT(s.gdU(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.K(n)}p="element unprintable"
try{p=J.bb(a)}catch(n){H.K(n)}try{o=W.bf(a)
this.e3(a,b,t,p,o,s,r)}catch(n){if(H.K(n) instanceof P.X)throw n
else{this.aj(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e3:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aj(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a9(a)){this.aj(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.Z(a,"is",g)){this.aj(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gE(f)
s=H.B(t.slice(0),[H.ap(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.Z(a,J.lS(p),q.ad(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.ad(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ad(t,p)
q.dZ(t,p)}}if(!!J.u(a).$isbr)this.bk(a.content)}}
W.i5.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e4(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.aj(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lC(t)}catch(q){H.K(q)
r=t
J.iL(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.q,W.q]}}}
W.cP.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.bG.prototype={}
W.bH.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.de.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.bI.prototype={}
W.bJ.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
P.ic.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hK.prototype={
eU:function(){return Math.random()}}
P.hS.prototype={}
P.S.prototype={}
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
gn:function(a){return a.y}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
P.el.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
P.en.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a_.prototype={}
P.a5.prototype={}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a2(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j4]},
$asl:function(){return[P.j4]},
$ish:1,
$ash:function(){return[P.j4]},
$asn:function(){return[P.j4]}}
P.eW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a2(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.ja]},
$asl:function(){return[P.ja]},
$ish:1,
$ash:function(){return[P.ja]},
$asn:function(){return[P.ja]}}
P.fj.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fo.prototype={
gj:function(a){return a.length}}
P.fr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fs.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bo.prototype={$isbo:1}
P.fQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a2(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.o]},
$asl:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asn:function(){return[P.o]}}
P.v.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.cs])
C.a.l(t,W.kF(null))
C.a.l(t,W.kJ())
C.a.l(t,new W.i1())
c=new W.dn(new W.ct(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.q).er(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.N(q)
o=t.ga5(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.R(p,r)
return p},
$isv:1}
P.fR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bs.prototype={}
P.bt.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h3.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a2(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.je]},
$asl:function(){return[P.je]},
$ish:1,
$ash:function(){return[P.je]},
$asn:function(){return[P.je]}}
P.hb.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cZ.prototype={}
P.d_.prototype={}
P.d5.prototype={}
P.d6.prototype={}
P.df.prototype={}
P.dg.prototype={}
P.dl.prototype={}
P.dm.prototype={}
P.dI.prototype={
gj:function(a){return a.length}}
P.dJ.prototype={
gj:function(a){return a.length}}
P.aQ.prototype={}
P.fd.prototype={
gj:function(a){return a.length}}
P.fx.prototype={
bP:function(a,b){return a.activeTexture(b)},
bT:function(a,b,c){return a.attachShader(b,c)},
bU:function(a,b,c){return a.bindBuffer(b,c)},
bV:function(a,b,c){return a.bindFramebuffer(b,c)},
bW:function(a,b,c){return a.bindTexture(b,c)},
bX:function(a,b){return a.blendEquation(b)},
bY:function(a,b,c){return a.blendFunc(b,c)},
bZ:function(a,b,c,d){return a.bufferData(b,c,d)},
c_:function(a,b){return a.clear(b)},
c0:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c1:function(a,b){return a.compileShader(b)},
c2:function(a){return a.createBuffer()},
c3:function(a){return a.createProgram()},
c5:function(a,b){return a.createShader(b)},
c6:function(a){return a.createTexture()},
c8:function(a,b){return a.depthMask(b)},
c9:function(a,b){return a.disable(b)},
ca:function(a,b,c,d){return a.drawArrays(b,c,d)},
cb:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cc:function(a,b){return a.enable(b)},
cd:function(a,b){return a.enableVertexAttribArray(b)},
aH:function(a){return P.id(a.getContextAttributes())},
bd:function(a){return a.getError()},
be:function(a,b){return a.getProgramInfoLog(b)},
bf:function(a,b,c){return a.getProgramParameter(b,c)},
bg:function(a,b){return a.getShaderInfoLog(b)},
bh:function(a,b,c){return a.getShaderParameter(b,c)},
bi:function(a,b,c){return a.getUniformLocation(b,c)},
cg:function(a,b){return a.linkProgram(b)},
cl:function(a,b,c){return a.pixelStorei(b,c)},
bn:function(a,b,c){return a.shaderSource(b,c)},
bp:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b9:function(a,b,c,d,e,f,g,h,i,j){this.b0(a,b,c,d,e,f,g)
return},
cr:function(a,b,c,d,e,f,g){return this.b9(a,b,c,d,e,f,g,null,null,null)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
P.fy.prototype={
eg:function(a,b){return a.beginTransformFeedback(b)},
ej:function(a,b){return a.bindVertexArray(b)},
eu:function(a){return a.createVertexArray()},
eB:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eC:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eD:function(a){return a.endTransformFeedback()},
f7:function(a,b,c,d){this.e8(a,b,c,d)
return},
e8:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f8:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bP:function(a,b){return a.activeTexture(b)},
bT:function(a,b,c){return a.attachShader(b,c)},
bU:function(a,b,c){return a.bindBuffer(b,c)},
bV:function(a,b,c){return a.bindFramebuffer(b,c)},
bW:function(a,b,c){return a.bindTexture(b,c)},
bX:function(a,b){return a.blendEquation(b)},
bY:function(a,b,c){return a.blendFunc(b,c)},
bZ:function(a,b,c,d){return a.bufferData(b,c,d)},
c_:function(a,b){return a.clear(b)},
c0:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c1:function(a,b){return a.compileShader(b)},
c2:function(a){return a.createBuffer()},
c3:function(a){return a.createProgram()},
c5:function(a,b){return a.createShader(b)},
c6:function(a){return a.createTexture()},
c8:function(a,b){return a.depthMask(b)},
c9:function(a,b){return a.disable(b)},
ca:function(a,b,c,d){return a.drawArrays(b,c,d)},
cb:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cc:function(a,b){return a.enable(b)},
cd:function(a,b){return a.enableVertexAttribArray(b)},
aH:function(a){return P.id(a.getContextAttributes())},
bd:function(a){return a.getError()},
be:function(a,b){return a.getProgramInfoLog(b)},
bf:function(a,b,c){return a.getProgramParameter(b,c)},
bg:function(a,b){return a.getShaderInfoLog(b)},
bh:function(a,b,c){return a.getShaderParameter(b,c)},
bi:function(a,b,c){return a.getUniformLocation(b,c)},
cg:function(a,b){return a.linkProgram(b)},
cl:function(a,b,c){return a.pixelStorei(b,c)},
bn:function(a,b,c){return a.shaderSource(b,c)},
bp:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b9:function(a,b,c,d,e,f,g,h,i,j){this.b0(a,b,c,d,e,f,g)
return},
cr:function(a,b,c,d,e,f,g){return this.b9(a,b,c,d,e,f,g,null,null,null)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cs:function(a,b,c,d){return a.texParameterf(b,c,d)},
ct:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
P.fG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return P.id(this.dV(a,b))},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dV:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.aX]},
$asl:function(){return[P.aX]},
$ish:1,
$ash:function(){return[P.aX]},
$asn:function(){return[P.aX]}}
P.db.prototype={}
P.dc.prototype={}
B.iD.prototype={
$1:function(a){$.$get$ie().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.ay]}}}
B.iE.prototype={
$1:function(a){$.$get$ie().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.ay]}}}
B.iF.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.n5=t
$.n6=C.b.a6(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jx=s-C.b.J(window.innerWidth,2)
$.l_=-(t-C.b.J(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.I]}}}
B.iG.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bQ=t-C.b.J(window.innerWidth,2)
$.bR=-(s-C.b.J(window.innerHeight,2))
if(a.button===2)$.$get$bP().i(0,"right",!0)
else $.$get$bP().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.I]}}}
B.iH.prototype={
$1:function(a){if(a.button===2)$.$get$bP().i(0,"right",null)
else $.$get$bP().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.I]}}}
B.fe.prototype={
dn:function(a,b,c,d){var t
d.toString
W.V(d,W.md(d),new B.ff(this),!1,W.aJ)
W.V(d,"mousemove",new B.fg(this),!1,W.I)
t=W.aG
W.V(d,"touchstart",new B.fh(),!1,t)
W.V(d,"touchmove",new B.fi(this),!1,t)
B.ns(null)}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.gev(a)*r.k3
if(C.c.a6(r.fy,t)>0)r.fy=C.c.a6(r.fy,t)}catch(q){s=H.K(q)
P.a3(s)}},
$S:function(a){return{func:1,args:[W.aJ]}}}
B.fg.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a6($.jx,$.bQ)*0.01
s=t.id
r=$.bR
q=$.l_
t.id=s+(r-q)*0.01
$.bQ=$.jx
$.bR=q}},
$S:function(a){return{func:1,args:[W.I]}}}
B.fh.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ab(t.clientX)
C.c.ab(t.clientY)
$.bQ=s
C.c.ab(t.clientX)
$.bR=C.c.ab(t.clientY)},
$S:function(a){return{func:1,args:[W.aG]}}}
B.fi.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ab(t.clientX)
t=C.c.ab(t.clientY)
r=this.a
r.go=r.go+C.b.a6(s,$.bQ)*0.01
r.id=r.id+($.bR-t)*0.01
$.bQ=s
$.bR=t},
$S:function(a){return{func:1,args:[W.aG]}}}
G.f0.prototype={}
G.cM.prototype={
L:function(a,b){var t=this.d
if(H.ad(!t.G(0,a)))H.an("uniform "+a+" already set")
t.i(0,a,b)},
bu:function(){return this.d},
k:function(a){var t,s,r,q
t=H.B(["{"+new H.al(H.ik(this),null).k(0)+"}["+this.a+"]"],[P.o])
for(s=this.d,r=s.gE(s),r=r.gB(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.aq(t,"\n")}}
G.dK.prototype={}
G.dM.prototype={
ce:function(a,b,c){J.ly(this.a,b)
if(c>0)J.lY(this.a,b,c)},
cM:function(a,b,c,d,e,f,g,h){J.iN(this.a,34962,b)
J.lZ(this.a,c,d,e,!1,g,h)}}
G.ew.prototype={}
G.ep.prototype={}
G.ey.prototype={
bs:function(a){var t=this.e
H.b(!t.G(0,a))
H.b(C.i.bo(a,"a"))
switch($.$get$O().h(0,a).a){case"vec2":t.i(0,a,H.B([],[T.w]))
break
case"vec3":t.i(0,a,H.B([],[T.m]))
break
case"vec4":t.i(0,a,H.B([],[T.am]))
break
case"float":t.i(0,a,H.B([],[P.W]))
break
case"uvec4":t.i(0,a,H.B([],[[P.h,P.y]]))
break
default:if(H.ad(!1))H.an("unknown type for "+a)}},
de:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.ep(t,t+1,t+2,t+3))},
av:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.m(new Float32Array(3))
q.P(r)
C.a.l(t,q)}},
dc:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<24;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.w(p))}},
dd:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.m(new Float32Array(3))
p.P(q)
s.l(t,p)}},
dj:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.B(s,[P.y])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gfb(o)
r[q+1]=o.gfc(o)
r[q+2]=o.gfd(o)
q+=3}for(s=t.length,p=0;p<s;++p){n=t[p]
m=n.a
r[q]=m
r[q+1]=n.b
l=n.c
r[q+2]=l
r[q+3]=m
r[q+4]=l
r[q+5]=n.d
q+=6}H.b(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gB(r);r.p();){q=r.gq(r)
p=$.$get$O().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.aq(t," ")}}
G.cJ.prototype={}
G.cI.prototype={}
G.cj.prototype={}
G.eY.prototype={
br:function(a,b,c){var t,s
if(C.i.aN(a,0)===105){if(H.ad(C.b.aL(b.length,c)===this.z))H.an("ChangeAttribute "+this.z)}else{t=C.b.aL(b.length,c)
if(H.ad(t===(this.ch.length/3|0)))H.an("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}J.lf(this.cy,a,b)
t=this.d
s=this.r.h(0,a)
J.iN(t.a,34962,s)
J.jC(t.a,34962,b,35048)},
dk:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
af:function(a,b,c){var t,s,r,q,p,o
t=J.jz(a,0)===105
if(t&&this.z===0)this.z=C.b.aL(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iP(r.a))
this.br(a,b,c)
q=$.$get$O().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ad(p.G(0,a)))H.an("unexpected attribute "+a)
o=p.h(0,a)
J.dD(r.a,this.e)
r.ce(0,o,t?1:0)
r.cM(0,s.h(0,a),o,q.bt(),5126,!1,0,0)},
av:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.iP(s.a))
this.ch=a
this.br("aPosition",a,3)
r=$.$get$O().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.G(0,"aPosition"))
p=q.h(0,"aPosition")
J.dD(s.a,this.e)
s.ce(0,p,0)
s.cM(0,t.h(0,"aPosition"),p,r.bt(),5126,!1,0,0)},
k:function(a){var t,s,r,q,p
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=J.i(t),q=J.ag(r.gE(t));q.p();){p=q.gq(q)
C.a.l(s,H.e(p)+":"+H.e(J.aO(r.h(t,p))))}return"MESH["+this.a+"] "+C.a.aq(s,"  ")},
saT:function(a){this.cx=a}}
G.fk.prototype={
df:function(a,b){var t=C.b.cP(a,b)
if(this.z===t)return
this.z=t
this.bv()},
bv:function(){var t,s,r,q,p,o,n
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
t.ae(0,0,1/(p*s))
t.ae(1,1,1/p)
t.ae(2,2,(q+r)/o)
t.ae(3,2,-1)
t.ae(2,3,2*r*q/o)},
bu:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.m(new Float32Array(3))
o.u(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.P(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.u(n)
r=!!s.$isam
k=r?s.gaF(n):1
if(!!s.$ism){j=s.gm(n)
m=s.gn(n)
l=s.gF(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gF(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.H(t[0],n)
r=C.c.H(t[4],m)
q=C.c.H(t[8],l)
i=t[12]
h=C.c.H(t[1],n)
g=C.c.H(t[5],m)
f=C.c.H(t[9],l)
e=t[13]
d=C.c.H(t[2],n)
c=C.c.H(t[6],m)
b=C.c.H(t[10],l)
a=t[14]
a0=C.c.H(t[3],n)
a1=C.c.H(t[7],m)
a2=C.c.H(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.P(this.db)
a3.ck(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fv.prototype={
dr:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
r.i(0,n,J.jF(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
r.i(0,n,J.jF(q.a,p,n))}},
dw:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gB(s);s.p();){q=s.gq(s)
if(!t.G(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bz(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.D(0,q))C.a.l(r,q)}return r},
dB:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.jz(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.iB("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$O().h(0,n)
if(l==null)H.G("unknown "+n)
H.b(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iU(r.a,k,m)
else if(!!J.u(m).$isk6)J.lW(r.a,k,m)
break
case"float":if(l.c===0)J.lU(r.a,k,m)
else if(!!J.u(m).$iset)J.lV(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.af(m,"$isL").a
J.jM(r.a,k,!1,n)}else if(!!J.u(m).$iset)J.jM(r.a,k,!1,m)
else if(H.ad(!1))H.an("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.af(m,"$isaB").a
J.jL(r.a,k,!1,n)}else if(!!J.u(m).$iset)J.jL(r.a,k,!1,m)
else if(H.ad(!1))H.an("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jK(j,k,H.af(m,"$isam").a)
else J.jK(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jJ(j,k,H.af(m,"$ism").a)
else J.jJ(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jI(j,k,H.af(m,"$isw").a)
else J.jI(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a4(33984,this.ch)
J.jA(r.a,n)
n=H.af(m,"$isbu").b
J.bS(r.a,3553,n)
n=this.ch
J.iU(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a4(33984,this.ch)
J.jA(r.a,n)
n=H.af(m,"$isbu").b
J.bS(r.a,34067,n)
n=this.ch
J.iU(r.a,k,n)
this.ch=this.ch+1
break
default:H.iB("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.C(m,!0)
j=r.a
if(n)J.bT(j,2929)
else J.iQ(j,2929)
break
case"cStencilFunc":H.af(m,"$iscJ")
n=m.a
j=r.a
if(n===1281)J.iQ(j,2960)
else{J.bT(j,2960)
j=m.b
i=m.c
J.lP(r.a,n,j,i)}break
case"cDepthWrite":J.ls(r.a,m)
break
case"cBlendEquation":H.af(m,"$iscI")
n=m.a
j=r.a
if(n===1281)J.iQ(j,3042)
else{J.bT(j,3042)
j=m.b
i=m.c
J.ll(r.a,j,i)
J.lk(r.a,n)}break}++o
break}}h=P.mb(0,0,0,Date.now()-new P.bd(t,!1).a,0,0)
""+o
h.k(0)},
di:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lX(t.a,this.r)
this.ch=0
this.z.a_(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.H)(b),++r){q=b[r]
this.dB(q.a,q.bu())}s=this.Q
s.a_(0)
for(p=J.ag(J.lB(a.cy));p.p();)s.l(0,p.gq(p))
o=this.dw()
if(o.length!==0)P.a3("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dD(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.dk()
m=a.Q
l=a.z
if(n)J.li(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.lw(k,s,p,m,0,l)
else J.lv(k,s,p,m,0)}else{m=t.a
if(l>1)J.lu(m,s,0,p,l)
else J.lt(m,s,0,p)}if(n)J.lz(t.a)}}
G.x.prototype={
bt:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fC.prototype={
au:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.H)(a),++q){p=a[q]
H.b($.$get$O().G(0,p))
H.b(!C.a.D(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aJ(s)},
W:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.H)(a),++r){q=a[r]
if(H.ad($.$get$O().G(0,q)))H.an("missing uniform "+q)
H.b(!C.a.D(s,q))
C.a.l(s,q)}C.a.aJ(s)},
a7:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$O().G(0,r))
H.b(!C.a.D(t,r))
C.a.l(t,r)}C.a.aJ(t)},
ds:function(a,b){H.b(this.b==null)
this.b=this.dC(!0,a,b)},
X:function(a){return this.ds(a,null)},
dC:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
m=$.$get$O().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$O().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.M(q,b)
C.a.l(q,"}")
return C.a.aq(q,"\n")}}
G.fE.prototype={
bb:function(){var t,s,r
t=this.f
s=this.d.a
r=t.a
r[0]=s[2]
r[1]=s[6]
r[2]=s[10]
return t},
bj:function(){var t,s,r
t=this.r
s=this.d.a
r=t.a
r[0]=s[1]
r[1]=s[5]
r[2]=s[9]
return t},
bl:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.fX.prototype={
dl:function(a,b){var t=this.e
if(t!==1)J.lR(a.a,b,34046,t)
J.jH(a.a,b,10240,this.r)
J.jH(a.a,b,10241,this.f)}}
G.bu.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eD.prototype={
dt:function(a){var t,s
t=this.d
s=this.c
J.bS(t.a,s,this.b)
J.lQ(t.a,s,0,6408,6408,5121,a)}}
R.cy.prototype={
co:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a3("size change "+H.e(s)+" "+H.e(r))
this.dx.df(s,r)
this.z=s
this.Q=r}}
R.fI.prototype={
du:function(a,b,c){var t,s,r
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
J.iM(this.a,s)
r=this.dG(b,c,90,30)
this.d=r
J.iM(this.a,r)
t=t.createElement("div")
this.c=t
J.iM(this.a,t)},
dG:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mN("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.y).bA(r,"float")
r.setProperty(p,"left","")
p=C.y.bA(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.t.R(t,s)}return t}}
R.fJ.prototype={
dA:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.f6(s,2)+" fps"
t=this.c;(t&&C.t).d1(t,b)
r=C.b.J(30*C.A.ek(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.t).R(t,q)},
dz:function(a){return this.dA(a,"")}}
A.cq.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.aE.prototype={}
A.fu.prototype={
dq:function(a,b,c){if(this.d==null)this.d=new G.ew(this.e,null,null,null,null)},
dh:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lj(p.a,36160,t)
H.b(r>0&&q>0)
J.m_(p.a,this.x,this.y,r,q)
if(s!==0)J.lm(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.cM(P.R(),"transforms",!1,!0))
l=new T.L(new Float32Array(16))
l.V()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.H)(r),++k)A.kT(p,r[k],l,a,m)
m.pop()}},
dg:function(){return this.dh(null)}}
A.il.prototype={
$2:function(a,b){var t=536870911&a+J.ba(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.y,P.D]}}}
T.aB.prototype={
P:function(a){var t,s
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
k:function(a){return"[0] "+this.T(0).k(0)+"\n[1] "+this.T(1).k(0)+"\n[2] "+this.T(2).k(0)+"\n"},
h:function(a,b){return C.j.h(this.a,b)},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aB){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.dA(this.a)},
T:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.m(t)},
ep:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.P(a)
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
ae:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
P:function(a){var t,s
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
k:function(a){return"[0] "+this.T(0).k(0)+"\n[1] "+this.T(1).k(0)+"\n[2] "+this.T(2).k(0)+"\n[3] "+this.T(3).k(0)+"\n"},
h:function(a,b){return C.j.h(this.a,b)},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.L){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.dA(this.a)},
T:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.am(t)},
ar:function(b0,b1,b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9
t=Math.sqrt(b1.gb4())
s=b1.a
r=s[0]/t
q=s[1]/t
p=s[2]/t
o=Math.cos(b2)
n=Math.sin(b2)
m=1-o
l=r*r*m+o
k=p*n
j=r*q*m-k
i=q*n
h=r*p*m+i
g=q*r*m+k
f=q*q*m+o
k=r*n
e=q*p*m-k
d=p*r*m-i
c=p*q*m+k
b=p*p*m+o
k=this.a
i=k[0]
a=k[4]
a0=k[8]
a1=k[1]
a2=k[5]
a3=k[9]
a4=k[2]
a5=k[6]
a6=k[10]
a7=k[3]
a8=k[7]
a9=k[11]
k[0]=i*l+a*g+a0*d
k[1]=a1*l+a2*g+a3*d
k[2]=a4*l+a5*g+a6*d
k[3]=a7*l+a8*g+a9*d
k[4]=i*j+a*f+a0*c
k[5]=a1*j+a2*f+a3*c
k[6]=a4*j+a5*f+a6*c
k[7]=a7*j+a8*f+a9*c
k[8]=i*h+a*e+a0*b
k[9]=a1*h+a2*e+a3*b
k[10]=a4*h+a5*e+a6*b
k[11]=a7*h+a8*e+a9*b},
V:function(){var t=this.a
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
ck:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.w.prototype={
v:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.w){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dA(this.a)},
h:function(a,b){return C.j.h(this.a,b)},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.m.prototype={
u:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
P:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.dA(this.a)},
h:function(a,b){return C.j.h(this.a,b)},
gj:function(a){return Math.sqrt(this.gb4())},
gb4:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b5:function(a){var t,s,r
t=Math.sqrt(this.gb4())
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
c7:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.m(new Float32Array(3))
t.u(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]}}
T.am.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.am){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dA(this.a)},
h:function(a,b){return C.j.h(this.a,b)},
gj:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gaF:function(a){return this.a[3]}}
Q.iy.prototype={
$1:function(a){var t,s,r
t=this.b
s=this.a
r=this.c
C.a.a1(t[C.b.aI(s.a,3)].f,r)
t=t[C.b.aI(s.a+1,3)]
H.b(!0)
C.a.l(t.f,r)
s.a=C.b.aI(s.a+1,3)},
$S:function(a){return{func:1,args:[,]}}}
Q.iz.prototype={
$1:function(a){var t,s,r,q
t=this.b
s=this.a
r=this.c
C.a.a1(C.a.h(t,s.a).f,r)
q=this.d.selectedIndex
s.a=q
t=C.a.h(t,q)
H.b(!0)
C.a.l(t.f,r)},
$S:function(a){return{func:1,args:[W.f]}}}
Q.ix.prototype={
$1:function(a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4
t=this.a
s=t.b
t.b=a5+0
r=this.b
r.go+=0.001
q=r.k4
if(q.h(0,37)!=null)r.go+=0.03
else if(q.h(0,39)!=null)r.go-=0.03
if(q.h(0,38)!=null)r.id+=0.03
else if(q.h(0,40)!=null)r.id-=0.03
if(q.h(0,33)!=null)r.fy*=0.99
else if(q.h(0,34)!=null)r.fy*=1.01
if(q.h(0,32)!=null){r.go=0
r.id=0}q=C.c.el(r.id,-1.4707963267948965,1.4707963267948965)
r.id=q
p=r.fy
o=r.go
n=p*Math.cos(q)
r.bl(n*Math.cos(o),p*Math.sin(q),n*Math.sin(o))
o=r.d
q=o.a
p=r.k2.a
q[12]=q[12]+p[0]
q[13]=q[13]+p[1]
q[14]=q[14]+p[2]
m=q[12]
l=q[13]
k=q[14]
j=new T.m(new Float32Array(3))
j.u(0,1,0)
i=r.e
h=i.a
h[0]=q[12]
h[1]=q[13]
h[2]=q[14]
h=new Float32Array(3)
g=new T.m(h)
g.P(i)
h[0]=h[0]-p[0]
h[1]=h[1]-p[1]
h[2]=h[2]-p[2]
g.b5(0)
f=j.c7(g)
f.b5(0)
e=g.c7(f)
e.b5(0)
p=f.b3(i)
d=e.b3(i)
i=g.b3(i)
c=f.a
b=c[0]
a=e.a
a0=a[0]
a1=h[0]
a2=c[1]
a3=a[1]
a4=h[1]
c=c[2]
a=a[2]
h=h[2]
q[15]=1
q[14]=-i
q[13]=-d
q[12]=-p
q[11]=0
q[10]=h
q[9]=a
q[8]=c
q[7]=0
q[6]=a4
q[5]=a3
q[4]=a2
q[3]=0
q[2]=a1
q[1]=a0
q[0]=b
q[12]=m
q[13]=l
q[14]=k
o.ar(0,r.bb(),-r.k1)
r=this.c
o=r.d
s=-((a5-s)*0.0005)
o.ar(0,r.bb(),s)
o.ar(0,r.bj(),s)
this.d.d.i(0,"uTime",a5/1000)
this.e.dg()
C.ax.gee(window).cu(this)
this.f.dz(t.b)},
$S:function(a){return{func:1,v:true,args:[P.a2]}}}
J.a.prototype.d6=J.a.prototype.k
J.bi.prototype.d8=J.bi.prototype.k
P.Q.prototype.d7=P.Q.prototype.aG
W.Z.prototype.aK=W.Z.prototype.N
W.bF.prototype.d9=W.bF.prototype.Z;(function installTearOffs(){installTearOff(H.b1.prototype,"geQ",0,0,0,null,["$0"],["aD"],0)
installTearOff(H.a0.prototype,"gcT",0,0,0,null,["$1"],["K"],2)
installTearOff(H.aK.prototype,"gex",0,0,0,null,["$1"],["a0"],2)
installTearOff(P,"n1",1,0,0,null,["$1"],["mK"],1)
installTearOff(P,"n2",1,0,0,null,["$1"],["mL"],1)
installTearOff(P,"n3",1,0,0,null,["$1"],["mM"],1)
installTearOff(P,"kS",1,0,0,null,["$0"],["n_"],0)
installTearOff(P.ab.prototype,"gdM",0,0,0,null,["$2","$1"],["aw","dN"],5)
installTearOff(P,"n8",1,0,0,null,["$2"],["m6"],7)
installTearOff(W,"nd",1,0,0,null,["$4"],["mQ"],4)
installTearOff(W,"ne",1,0,0,null,["$4"],["mR"],4)
installTearOff(W.cr.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(W.cL.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(R.cy.prototype,"geZ",0,0,0,null,["$1"],["co"],6)
installTearOff(Q,"l7",1,0,0,null,["$0"],["nm"],0)})();(function inheritance(){inherit(P.D,null)
var t=P.D
inherit(H.j1,t)
inherit(J.a,t)
inherit(J.dH,t)
inherit(P.Q,t)
inherit(H.cg,t)
inherit(P.cc,t)
inherit(H.aU,t)
inherit(H.at,t)
inherit(H.hQ,t)
inherit(H.b1,t)
inherit(H.hs,t)
inherit(H.aL,t)
inherit(H.hP,t)
inherit(H.hn,t)
inherit(H.cx,t)
inherit(H.fZ,t)
inherit(H.ar,t)
inherit(H.a0,t)
inherit(H.aK,t)
inherit(H.ft,t)
inherit(H.h4,t)
inherit(P.aT,t)
inherit(H.dd,t)
inherit(H.al,t)
inherit(P.aY,t)
inherit(H.eO,t)
inherit(H.eQ,t)
inherit(P.iX,t)
inherit(P.ho,t)
inherit(P.cW,t)
inherit(P.ab,t)
inherit(P.cO,t)
inherit(P.fM,t)
inherit(P.fN,t)
inherit(P.jc,t)
inherit(P.aP,t)
inherit(P.i6,t)
inherit(P.fB,t)
inherit(P.hM,t)
inherit(P.bz,t)
inherit(P.j5,t)
inherit(P.bA,t)
inherit(P.l,t)
inherit(P.hO,t)
inherit(P.ae,t)
inherit(P.E,t)
inherit(P.bd,t)
inherit(P.a2,t)
inherit(P.au,t)
inherit(P.cD,t)
inherit(P.iZ,t)
inherit(P.hx,t)
inherit(P.e6,t)
inherit(P.h,t)
inherit(P.aX,t)
inherit(P.J,t)
inherit(P.b_,t)
inherit(P.o,t)
inherit(P.bq,t)
inherit(P.jf,t)
inherit(W.dS,t)
inherit(W.by,t)
inherit(W.n,t)
inherit(W.ct,t)
inherit(W.bF,t)
inherit(W.i1,t)
inherit(W.c8,t)
inherit(W.cs,t)
inherit(W.j9,t)
inherit(W.jg,t)
inherit(W.hX,t)
inherit(W.dn,t)
inherit(P.hK,t)
inherit(P.hS,t)
inherit(G.f0,t)
inherit(G.dM,t)
inherit(G.ew,t)
inherit(G.ep,t)
inherit(G.ey,t)
inherit(G.cJ,t)
inherit(G.cI,t)
inherit(G.x,t)
inherit(G.fC,t)
inherit(G.fX,t)
inherit(G.bu,t)
inherit(R.fI,t)
inherit(T.aB,t)
inherit(T.L,t)
inherit(T.w,t)
inherit(T.m,t)
inherit(T.am,t)
t=J.a
inherit(J.eJ,t)
inherit(J.eK,t)
inherit(J.bi,t)
inherit(J.av,t)
inherit(J.aV,t)
inherit(J.aw,t)
inherit(H.bl,t)
inherit(H.aZ,t)
inherit(W.d,t)
inherit(W.dE,t)
inherit(W.bX,t)
inherit(W.bY,t)
inherit(W.aS,t)
inherit(W.Y,t)
inherit(W.cP,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.dZ,t)
inherit(W.c1,t)
inherit(W.c2,t)
inherit(W.cQ,t)
inherit(W.c4,t)
inherit(W.cS,t)
inherit(W.e1,t)
inherit(W.f,t)
inherit(W.cU,t)
inherit(W.eA,t)
inherit(W.cX,t)
inherit(W.eS,t)
inherit(W.eX,t)
inherit(W.d0,t)
inherit(W.cr,t)
inherit(W.d3,t)
inherit(W.a7,t)
inherit(W.d7,t)
inherit(W.cv,t)
inherit(W.d9,t)
inherit(W.a8,t)
inherit(W.de,t)
inherit(W.dh,t)
inherit(W.fY,t)
inherit(W.dj,t)
inherit(W.h2,t)
inherit(W.cL,t)
inherit(W.ha,t)
inherit(W.hc,t)
inherit(W.dp,t)
inherit(W.dr,t)
inherit(W.dt,t)
inherit(W.dv,t)
inherit(W.dx,t)
inherit(P.cZ,t)
inherit(P.d5,t)
inherit(P.fn,t)
inherit(P.fo,t)
inherit(P.fr,t)
inherit(P.df,t)
inherit(P.dl,t)
inherit(P.dI,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.db,t)
t=J.bi
inherit(J.fl,t)
inherit(J.aI,t)
inherit(J.ax,t)
inherit(J.j0,J.av)
t=J.aV
inherit(J.ce,t)
inherit(J.cd,t)
t=P.Q
inherit(H.k,t)
inherit(H.ci,t)
inherit(H.cN,t)
t=H.k
inherit(H.aW,t)
inherit(H.eP,t)
inherit(H.e4,H.ci)
t=P.cc
inherit(H.eV,t)
inherit(H.hf,t)
t=H.aW
inherit(H.bj,t)
inherit(P.eR,t)
t=H.at
inherit(H.iI,t)
inherit(H.iJ,t)
inherit(H.hJ,t)
inherit(H.ht,t)
inherit(H.eF,t)
inherit(H.eG,t)
inherit(H.hR,t)
inherit(H.h_,t)
inherit(H.h0,t)
inherit(H.iK,t)
inherit(H.ir,t)
inherit(H.is,t)
inherit(H.it,t)
inherit(H.iu,t)
inherit(H.iv,t)
inherit(H.fU,t)
inherit(H.eL,t)
inherit(H.im,t)
inherit(H.io,t)
inherit(H.ip,t)
inherit(P.hj,t)
inherit(P.hi,t)
inherit(P.hk,t)
inherit(P.hl,t)
inherit(P.hy,t)
inherit(P.hC,t)
inherit(P.hz,t)
inherit(P.hA,t)
inherit(P.hB,t)
inherit(P.hF,t)
inherit(P.hG,t)
inherit(P.hE,t)
inherit(P.hD,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.i9,t)
inherit(P.hV,t)
inherit(P.hU,t)
inherit(P.hW,t)
inherit(P.eU,t)
inherit(P.e2,t)
inherit(P.e3,t)
inherit(W.e5,t)
inherit(W.fL,t)
inherit(W.hg,t)
inherit(W.hw,t)
inherit(W.fa,t)
inherit(W.f9,t)
inherit(W.hY,t)
inherit(W.hZ,t)
inherit(W.i4,t)
inherit(W.i5,t)
inherit(P.ic,t)
inherit(B.iD,t)
inherit(B.iE,t)
inherit(B.iF,t)
inherit(B.iG,t)
inherit(B.iH,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(B.fi,t)
inherit(A.il,t)
inherit(Q.iy,t)
inherit(Q.iz,t)
inherit(Q.ix,t)
t=H.hn
inherit(H.b3,t)
inherit(H.bK,t)
t=P.aT
inherit(H.fb,t)
inherit(H.eM,t)
inherit(H.h8,t)
inherit(H.h6,t)
inherit(H.dL,t)
inherit(H.fz,t)
inherit(P.bV,t)
inherit(P.cu,t)
inherit(P.X,t)
inherit(P.h9,t)
inherit(P.h7,t)
inherit(P.b0,t)
inherit(P.dN,t)
inherit(P.dW,t)
t=H.fU
inherit(H.fH,t)
inherit(H.bc,t)
inherit(H.hh,P.bV)
inherit(P.ch,P.aY)
t=P.ch
inherit(H.a6,t)
inherit(W.hm,t)
t=H.aZ
inherit(H.f1,t)
inherit(H.cm,t)
t=H.cm
inherit(H.bB,t)
inherit(H.bD,t)
inherit(H.bC,H.bB)
inherit(H.cn,H.bC)
inherit(H.bE,H.bD)
inherit(H.co,H.bE)
t=H.cn
inherit(H.cl,t)
inherit(H.f2,t)
t=H.co
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.cp,t)
inherit(H.f8,t)
inherit(P.i2,P.ho)
inherit(P.hT,P.i6)
inherit(P.hN,H.a6)
inherit(P.fA,P.fB)
inherit(P.hI,P.fA)
inherit(P.hL,P.hI)
inherit(P.cf,P.bA)
t=P.a2
inherit(P.W,t)
inherit(P.y,t)
t=P.X
inherit(P.cw,t)
inherit(P.eE,t)
t=W.d
inherit(W.q,t)
inherit(W.ak,t)
inherit(W.er,t)
inherit(W.bh,t)
inherit(W.bk,t)
inherit(W.fp,t)
inherit(W.cz,t)
inherit(W.bG,t)
inherit(W.bI,t)
inherit(W.hd,t)
inherit(W.he,t)
inherit(W.bw,t)
inherit(W.jh,t)
inherit(P.dJ,t)
inherit(P.aQ,t)
t=W.q
inherit(W.Z,t)
inherit(W.as,t)
inherit(W.be,t)
t=W.Z
inherit(W.j,t)
inherit(P.v,t)
t=W.ak
inherit(W.bU,t)
inherit(W.ez,t)
inherit(W.eT,t)
t=W.j
inherit(W.dF,t)
inherit(W.dG,t)
inherit(W.aq,t)
inherit(W.bW,t)
inherit(W.c0,t)
inherit(W.ev,t)
inherit(W.ca,t)
inherit(W.bp,t)
inherit(W.cF,t)
inherit(W.fS,t)
inherit(W.fT,t)
inherit(W.br,t)
t=W.aS
inherit(W.dO,t)
inherit(W.dQ,t)
inherit(W.dR,t)
inherit(W.dU,t)
t=W.Y
inherit(W.dP,t)
inherit(W.dT,t)
inherit(W.dV,t)
inherit(W.aR,W.cP)
inherit(W.e_,W.c2)
inherit(W.cR,W.cQ)
inherit(W.c3,W.cR)
inherit(W.cT,W.cS)
inherit(W.e0,W.cT)
inherit(W.cV,W.cU)
inherit(W.eq,W.cV)
inherit(W.cY,W.cX)
inherit(W.bg,W.cY)
inherit(W.cb,W.be)
inherit(W.eB,W.bh)
inherit(W.aH,W.f)
t=W.aH
inherit(W.ay,t)
inherit(W.I,t)
inherit(W.aG,t)
inherit(W.eZ,W.bk)
inherit(W.d1,W.d0)
inherit(W.f_,W.d1)
inherit(W.N,P.cf)
inherit(W.d4,W.d3)
inherit(W.bm,W.d4)
inherit(W.d8,W.d7)
inherit(W.fm,W.d8)
inherit(W.bH,W.bG)
inherit(W.fD,W.bH)
inherit(W.da,W.d9)
inherit(W.fF,W.da)
inherit(W.fK,W.de)
inherit(W.di,W.dh)
inherit(W.fV,W.di)
inherit(W.bJ,W.bI)
inherit(W.fW,W.bJ)
inherit(W.dk,W.dj)
inherit(W.h1,W.dk)
inherit(W.aJ,W.I)
inherit(W.dq,W.dp)
inherit(W.hp,W.dq)
inherit(W.hq,W.c4)
inherit(W.ds,W.dr)
inherit(W.hH,W.ds)
inherit(W.du,W.dt)
inherit(W.d2,W.du)
inherit(W.dw,W.dv)
inherit(W.i_,W.dw)
inherit(W.dy,W.dx)
inherit(W.i0,W.dy)
inherit(W.hr,W.hm)
inherit(W.hu,P.fM)
inherit(W.jk,W.hu)
inherit(W.hv,P.fN)
inherit(W.i3,W.bF)
inherit(P.S,P.hS)
t=P.v
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
inherit(P.eo,t)
inherit(P.es,t)
inherit(P.a5,t)
inherit(P.eW,t)
inherit(P.fj,t)
inherit(P.bo,t)
t=P.a5
inherit(P.eu,t)
inherit(P.a_,t)
inherit(P.eC,t)
inherit(P.fR,t)
inherit(P.bs,t)
inherit(P.hb,t)
inherit(P.d_,P.cZ)
inherit(P.eN,P.d_)
inherit(P.d6,P.d5)
inherit(P.fc,P.d6)
inherit(P.fs,P.a_)
inherit(P.dg,P.df)
inherit(P.fQ,P.dg)
inherit(P.bt,P.bs)
inherit(P.dm,P.dl)
inherit(P.h3,P.dm)
inherit(P.fd,P.aQ)
inherit(P.dc,P.db)
inherit(P.fG,P.dc)
t=G.f0
inherit(G.fE,t)
inherit(G.cM,t)
inherit(G.eY,t)
inherit(G.fv,t)
inherit(A.fu,t)
inherit(A.aE,t)
t=G.fE
inherit(G.dK,t)
inherit(A.cq,t)
inherit(B.fe,G.dK)
t=G.cM
inherit(G.cj,t)
inherit(G.fk,t)
inherit(G.eD,G.bu)
inherit(R.cy,A.fu)
inherit(R.fJ,R.fI)
mixin(H.bB,P.l)
mixin(H.bC,H.aU)
mixin(H.bD,P.l)
mixin(H.bE,H.aU)
mixin(P.bA,P.l)
mixin(W.cP,W.dS)
mixin(W.cQ,P.l)
mixin(W.cR,W.n)
mixin(W.cS,P.l)
mixin(W.cT,W.n)
mixin(W.cU,P.l)
mixin(W.cV,W.n)
mixin(W.cX,P.l)
mixin(W.cY,W.n)
mixin(W.d0,P.l)
mixin(W.d1,W.n)
mixin(W.d3,P.l)
mixin(W.d4,W.n)
mixin(W.d7,P.l)
mixin(W.d8,W.n)
mixin(W.bG,P.l)
mixin(W.bH,W.n)
mixin(W.d9,P.l)
mixin(W.da,W.n)
mixin(W.de,P.aY)
mixin(W.dh,P.l)
mixin(W.di,W.n)
mixin(W.bI,P.l)
mixin(W.bJ,W.n)
mixin(W.dj,P.l)
mixin(W.dk,W.n)
mixin(W.dp,P.l)
mixin(W.dq,W.n)
mixin(W.dr,P.l)
mixin(W.ds,W.n)
mixin(W.dt,P.l)
mixin(W.du,W.n)
mixin(W.dv,P.l)
mixin(W.dw,W.n)
mixin(W.dx,P.l)
mixin(W.dy,W.n)
mixin(P.cZ,P.l)
mixin(P.d_,W.n)
mixin(P.d5,P.l)
mixin(P.d6,W.n)
mixin(P.df,P.l)
mixin(P.dg,W.n)
mixin(P.dl,P.l)
mixin(P.dm,W.n)
mixin(P.db,P.l)
mixin(P.dc,W.n)})();(function constants(){C.q=W.aq.prototype
C.x=W.bW.prototype
C.o=W.bX.prototype
C.r=W.bY.prototype
C.y=W.aR.prototype
C.t=W.c0.prototype
C.M=W.c1.prototype
C.N=W.ca.prototype
C.k=W.cb.prototype
C.O=J.a.prototype
C.a=J.av.prototype
C.A=J.cd.prototype
C.b=J.ce.prototype
C.c=J.aV.prototype
C.i=J.aw.prototype
C.V=J.ax.prototype
C.j=H.cl.prototype
C.D=W.bm.prototype
C.E=J.fl.prototype
C.F=W.cv.prototype
C.K=W.cF.prototype
C.w=J.aI.prototype
C.aw=W.aJ.prototype
C.ax=W.bw.prototype
C.L=new P.hK()
C.f=new P.hT()
C.z=new P.au(0)
C.P=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.Q=function(hooks) {
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
C.B=function(hooks) { return hooks; }

C.R=function(getTagFallback) {
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
C.S=function() {
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
C.T=function(hooks) {
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
C.U=function(hooks) {
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
C.C=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.W=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Y=makeConstList([])
C.u=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.o])
C.v=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.Z=new G.x("vec3","vertex btangents",0)
C.d=new G.x("vec3","",0)
C.a_=new G.x("vec4","delta from light",0)
C.p=new G.x("","",0)
C.G=new G.x("vec3","vertex coordinates",0)
C.a0=new G.x("vec3","vertex binormals",0)
C.H=new G.x("vec4","for wireframe",0)
C.a1=new G.x("vec4","per vertex color",0)
C.a2=new G.x("float","for normal maps",0)
C.l=new G.x("mat4","",0)
C.a4=new G.x("mat4","",4)
C.a3=new G.x("mat4","",128)
C.e=new G.x("float","",0)
C.a5=new G.x("float","",4)
C.a6=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.a7=new G.x("float","for bump maps",0)
C.a8=new G.x("vec2","texture uvs",0)
C.a9=new G.x("float","time since program start in sec",0)
C.m=new G.x("vec2","",0)
C.aa=new G.x("samplerCube","",0)
C.n=new G.x("vec4","",0)
C.ab=new G.x("vec3","vertex normals",0)
C.ac=new G.x("sampler2DShadow","",0)
C.I=new G.x("vec3","per vertex color",0)
C.J=new G.x("mat3","",0)
C.ad=new G.x("vec3","vertex tangents",0)
C.ae=H.F("nw")
C.af=H.F("nx")
C.ag=H.F("et")
C.ah=H.F("ny")
C.ai=H.F("nz")
C.aj=H.F("k6")
C.ak=H.F("nA")
C.al=H.F("k9")
C.am=H.F("J")
C.an=H.F("o")
C.ao=H.F("kx")
C.ap=H.F("ky")
C.aq=H.F("nB")
C.ar=H.F("kz")
C.as=H.F("ae")
C.at=H.F("W")
C.au=H.F("y")
C.av=H.F("a2")})();(function staticFields(){$.kg="$cachedFunction"
$.kh="$cachedInvocation"
$.jT=null
$.jR=null
$.jn=!1
$.js=null
$.kP=null
$.la=null
$.ig=null
$.iq=null
$.jt=null
$.b4=null
$.bL=null
$.bM=null
$.jo=!1
$.A=C.f
$.k4=0
$.ai=null
$.iY=null
$.k3=null
$.k2=null
$.k0=null
$.k_=null
$.jZ=null
$.jY=null
$.n5=0
$.n6=0
$.jx=0
$.l_=0
$.bQ=0
$.bR=0
$.nt=!1
$.kU=0})();(function lazyInitializers(){lazy($,"jX","$get$jX",function(){return H.kX("_$dart_dartClosure")})
lazy($,"j2","$get$j2",function(){return H.kX("_$dart_js")})
lazy($,"k7","$get$k7",function(){return H.mm()})
lazy($,"k8","$get$k8",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k4
$.k4=t+1
t="expando$key$"+t}return new P.e6(t,null,[P.y])})
lazy($,"km","$get$km",function(){return H.a9(H.h5({
toString:function(){return"$receiver$"}}))})
lazy($,"kn","$get$kn",function(){return H.a9(H.h5({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ko","$get$ko",function(){return H.a9(H.h5(null))})
lazy($,"kp","$get$kp",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kt","$get$kt",function(){return H.a9(H.h5(void 0))})
lazy($,"ku","$get$ku",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kr","$get$kr",function(){return H.a9(H.ks(null))})
lazy($,"kq","$get$kq",function(){return H.a9(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kw","$get$kw",function(){return H.a9(H.ks(void 0))})
lazy($,"kv","$get$kv",function(){return H.a9(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jj","$get$jj",function(){return P.mJ()})
lazy($,"bN","$get$bN",function(){return[]})
lazy($,"jW","$get$jW",function(){return{}})
lazy($,"kG","$get$kG",function(){return P.j6(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jl","$get$jl",function(){return P.R()})
lazy($,"ie","$get$ie",function(){return P.ka(P.y,P.ae)})
lazy($,"bP","$get$bP",function(){return P.ka(P.o,P.ae)})
lazy($,"kj","$get$kj",function(){return new G.cJ(1281,0,4294967295)})
lazy($,"jP","$get$jP",function(){return G.kl(1281,1281,1281)})
lazy($,"jO","$get$jO",function(){return G.kl(32774,770,769)})
lazy($,"O","$get$O",function(){return P.az(["cBlendEquation",C.p,"cDepthWrite",C.p,"cDepthTest",C.p,"cStencilFunc",C.p,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.e,"aBoneIndex",C.n,"aBoneWeight",C.n,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.n,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.I,"vTexUV",C.m,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.l,"uModelMatrix",C.l,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.l,"uLightPerspectiveViewMatrix",C.l,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.m,"uCenter2",C.m,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.n,"uColorAlpha2",C.n,"uEyePosition",C.d,"uMaterial",C.l,"uRange",C.m,"uDirection",C.m,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.e,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kB","$get$kB",function(){return C.L})
lazy($,"l9","$get$l9",function(){var t=G.aF("PointSpritesV")
t.au(["aPosition"])
t.W(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.X(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"l8","$get$l8",function(){var t=G.aF("PointSpritesF")
t.W(["uTexture"])
t.X(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kD","$get$kD",function(){return[T.bv(0,0,1),T.bv(0,0,-1),T.bv(0,1,0),T.bv(0,-1,0),T.bv(1,0,0),T.bv(-1,0,0)]})
lazy($,"l4","$get$l4",function(){var t=G.aF("Plasma1V")
t.au(["aPosition","aTexUV"])
t.W(["uPerspectiveViewMatrix","uModelMatrix"])
t.a7(["vTexUV"])
t.X(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"l1","$get$l1",function(){var t=G.aF("Plasma1F")
t.a7(["vTexUV"])
t.W(["uTime"])
t.X(["    #define PI 3.1415926535897932384626433832795\n    float u_time = uTime * 5.0;\n    vec2 u_k = vec2(10.0,10.0);\n\n    float v = 0.0;\n    vec2 c = vTexUV * u_k - u_k/2.0;\n    v += sin((c.x+u_time));\n    v += sin((c.y+u_time)/2.0);\n    v += sin((c.x+c.y+u_time)/2.0);\n    c += u_k/2.0 * vec2(sin(u_time/3.0), cos(u_time/2.0));\n    v += sin(sqrt(c.x*c.x+c.y*c.y+1.0)+u_time);\n    v = v / 2.0;\n    vec3 col1 = vec3(1.0, sin(PI*v), cos(PI*v));\n    vec3 col2 = vec3(sin(PI*v), cos(PI*v), -1.0);\n    vec3 col = mix(col1, col2, sin(u_time)*.5+.5);\n    oFragColor = vec4(col*.5 + .5, 1.0);\n"])
return t})
lazy($,"l5","$get$l5",function(){var t=G.aF("Plasma2V")
t.au(["aPosition","aTexUV"])
t.W(["uPerspectiveViewMatrix","uModelMatrix"])
t.a7(["vTexUV"])
t.X(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"l2","$get$l2",function(){var t=G.aF("Plasma2F")
t.a7(["vTexUV"])
t.W(["uTime"])
t.X(["    float x = vTexUV.x;\n    float y = vTexUV.y;\n    float v = sin(x * cos(uTime/15.0) * 120.0) +\n              cos(y * sin(uTime/10.0) * 120.0) +\n              sin(sqrt(y * y + x * x) * 40.0);\n    oFragColor = vec4(1, v,1,1);\n  "])
return t})
lazy($,"l6","$get$l6",function(){var t=G.aF("Plasma3V")
t.au(["aPosition","aTexUV"])
t.W(["uPerspectiveViewMatrix","uModelMatrix"])
t.a7(["vTexUV"])
t.X(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"l3","$get$l3",function(){var t=G.aF("Plasma3F")
t.a7(["vTexUV"])
t.W(["uTime"])
t.X(["    float x = vTexUV.x*1000.0; // gl_FragCoord.x;\n    float y = vTexUV.y*1000.0; // gl_FragCoord.y;\n    float time = uTime;\n    float mov0 = x+y+cos(sin(time)*2.)*100.+sin(x/100.)*1000.;\n    float mov1 = y / 720.0 / 0.2 + time;\n    float mov2 = x / 1280.0 / 0.2;\n    float c1 = abs(sin(mov1+time)/2.+mov2/2.-mov1-mov2+time);\n    float c2 = abs(sin(c1+sin(mov0/1000.+time)+sin(y/40.+time)+sin((x+y)/100.)*3.));\n    float c3 = abs(sin(c2+cos(mov1+mov2+c2)+cos(mov2)+sin(x/1000.)));\n    oFragColor = vec4( c1,c2,c3,1.0);\n  "])
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
mangledGlobalNames:{y:"int",W:"double",a2:"num",o:"String",ae:"bool",J:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.ae,args:[W.Z,P.o,P.o,W.by]},{func:1,v:true,args:[P.D],opt:[P.b_]},{func:1,v:true,args:[W.f]},{func:1,ret:P.y,args:[P.E,P.E]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bl,ArrayBufferView:H.aZ,DataView:H.f1,Float32Array:H.cl,Float64Array:H.f2,Int16Array:H.f3,Int32Array:H.f4,Int8Array:H.f5,Uint16Array:H.f6,Uint32Array:H.f7,Uint8ClampedArray:H.cp,CanvasPixelArray:H.cp,Uint8Array:H.f8,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.bU,LinearAccelerationSensor:W.bU,AccessibleNodeList:W.dE,HTMLAnchorElement:W.dF,HTMLAreaElement:W.dG,HTMLBodyElement:W.aq,HTMLCanvasElement:W.bW,CanvasGradient:W.bX,CanvasRenderingContext2D:W.bY,CDATASection:W.as,CharacterData:W.as,Comment:W.as,ProcessingInstruction:W.as,Text:W.as,CSSPerspective:W.dO,CSSPositionValue:W.dP,CSSRotation:W.dQ,CSSScale:W.dR,CSSStyleDeclaration:W.aR,MSStyleCSSProperties:W.aR,CSS2Properties:W.aR,CSSImageValue:W.Y,CSSKeywordValue:W.Y,CSSNumericValue:W.Y,CSSResourceValue:W.Y,CSSUnitValue:W.Y,CSSURLImageValue:W.Y,CSSStyleValue:W.Y,CSSMatrixComponent:W.aS,CSSSkew:W.aS,CSSTransformComponent:W.aS,CSSTransformValue:W.dT,CSSTranslation:W.dU,CSSUnparsedValue:W.dV,DataTransferItemList:W.dX,DeviceAcceleration:W.dY,HTMLDivElement:W.c0,XMLDocument:W.be,Document:W.be,DOMException:W.dZ,DOMImplementation:W.c1,DOMPoint:W.e_,DOMPointReadOnly:W.c2,ClientRectList:W.c3,DOMRectList:W.c3,DOMRectReadOnly:W.c4,DOMStringList:W.e0,DOMTokenList:W.e1,Element:W.Z,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.eq,FileWriter:W.er,HTMLFormElement:W.ev,Gyroscope:W.ez,HTMLHeadElement:W.ca,History:W.eA,HTMLCollection:W.bg,HTMLFormControlsCollection:W.bg,HTMLOptionsCollection:W.bg,HTMLDocument:W.cb,XMLHttpRequest:W.eB,XMLHttpRequestUpload:W.bh,XMLHttpRequestEventTarget:W.bh,KeyboardEvent:W.ay,Location:W.eS,Magnetometer:W.eT,MediaList:W.eX,MIDIOutput:W.eZ,MIDIInput:W.bk,MIDIPort:W.bk,MimeTypeArray:W.f_,PointerEvent:W.I,MouseEvent:W.I,DragEvent:W.I,DocumentFragment:W.q,ShadowRoot:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeIterator:W.cr,NodeList:W.bm,RadioNodeList:W.bm,Plugin:W.a7,PluginArray:W.fm,PresentationConnection:W.fp,Range:W.cv,RTCDataChannel:W.cz,DataChannel:W.cz,HTMLSelectElement:W.bp,AbsoluteOrientationSensor:W.ak,AmbientLightSensor:W.ak,OrientationSensor:W.ak,RelativeOrientationSensor:W.ak,Sensor:W.ak,SourceBufferList:W.fD,SpeechGrammarList:W.fF,SpeechRecognitionResult:W.a8,Storage:W.fK,HTMLTableElement:W.cF,HTMLTableRowElement:W.fS,HTMLTableSectionElement:W.fT,HTMLTemplateElement:W.br,TextTrackCueList:W.fV,TextTrackList:W.fW,TimeRanges:W.fY,TouchEvent:W.aG,TouchList:W.h1,TrackDefaultList:W.h2,TreeWalker:W.cL,CompositionEvent:W.aH,FocusEvent:W.aH,TextEvent:W.aH,UIEvent:W.aH,URL:W.ha,VRStageBoundsPoint:W.hc,VideoTrackList:W.hd,WebSocket:W.he,WheelEvent:W.aJ,Window:W.bw,DOMWindow:W.bw,CSSRuleList:W.hp,DOMRect:W.hq,GamepadList:W.hH,NamedNodeMap:W.d2,MozNamedAttrMap:W.d2,SpeechRecognitionResultList:W.i_,StyleSheetList:W.i0,SVGFEBlendElement:P.e7,SVGFEColorMatrixElement:P.e8,SVGFEComponentTransferElement:P.e9,SVGFECompositeElement:P.ea,SVGFEConvolveMatrixElement:P.eb,SVGFEDiffuseLightingElement:P.ec,SVGFEDisplacementMapElement:P.ed,SVGFEFloodElement:P.ee,SVGFEGaussianBlurElement:P.ef,SVGFEImageElement:P.eg,SVGFEMergeElement:P.eh,SVGFEMorphologyElement:P.ei,SVGFEOffsetElement:P.ej,SVGFEPointLightElement:P.ek,SVGFESpecularLightingElement:P.el,SVGFESpotLightElement:P.em,SVGFETileElement:P.en,SVGFETurbulenceElement:P.eo,SVGFilterElement:P.es,SVGForeignObjectElement:P.eu,SVGCircleElement:P.a_,SVGEllipseElement:P.a_,SVGLineElement:P.a_,SVGPathElement:P.a_,SVGPolygonElement:P.a_,SVGPolylineElement:P.a_,SVGGeometryElement:P.a_,SVGAElement:P.a5,SVGClipPathElement:P.a5,SVGDefsElement:P.a5,SVGGElement:P.a5,SVGSwitchElement:P.a5,SVGGraphicsElement:P.a5,SVGImageElement:P.eC,SVGLengthList:P.eN,SVGMaskElement:P.eW,SVGNumberList:P.fc,SVGPatternElement:P.fj,SVGPoint:P.fn,SVGPointList:P.fo,SVGRect:P.fr,SVGRectElement:P.fs,SVGScriptElement:P.bo,SVGStringList:P.fQ,SVGAnimateElement:P.v,SVGAnimateMotionElement:P.v,SVGAnimateTransformElement:P.v,SVGAnimationElement:P.v,SVGDescElement:P.v,SVGDiscardElement:P.v,SVGFEDistantLightElement:P.v,SVGFEFuncAElement:P.v,SVGFEFuncBElement:P.v,SVGFEFuncGElement:P.v,SVGFEFuncRElement:P.v,SVGFEMergeNodeElement:P.v,SVGLinearGradientElement:P.v,SVGMarkerElement:P.v,SVGMetadataElement:P.v,SVGRadialGradientElement:P.v,SVGSetElement:P.v,SVGStopElement:P.v,SVGStyleElement:P.v,SVGSymbolElement:P.v,SVGTitleElement:P.v,SVGViewElement:P.v,SVGGradientElement:P.v,SVGComponentTransferFunctionElement:P.v,SVGFEDropShadowElement:P.v,SVGMPathElement:P.v,SVGElement:P.v,SVGSVGElement:P.fR,SVGTextPathElement:P.bs,SVGTextContentElement:P.bs,SVGTSpanElement:P.bt,SVGTextElement:P.bt,SVGTextPositioningElement:P.bt,SVGTransformList:P.h3,SVGUseElement:P.hb,AudioBuffer:P.dI,AudioTrackList:P.dJ,AudioContext:P.aQ,webkitAudioContext:P.aQ,BaseAudioContext:P.aQ,OfflineAudioContext:P.fd,WebGLRenderingContext:P.fx,WebGL2RenderingContext:P.fy,SQLResultSetRowList:P.fG})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.co.$nativeSuperclassTag="ArrayBufferView"
W.bG.$nativeSuperclassTag="EventTarget"
W.bH.$nativeSuperclassTag="EventTarget"
W.bI.$nativeSuperclassTag="EventTarget"
W.bJ.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lc(Q.l7(),b)},[])
else (function(b){H.lc(Q.l7(),b)})([])})})()