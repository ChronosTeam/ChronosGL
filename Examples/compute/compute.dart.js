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
a[c]=function(){a[c]=function(){H.lM(b)}
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
return d?function(e){if(t===null)t=H.i5(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.i5(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.i5(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={hJ:function hJ(a){this.a=a},
hQ:function(a,b,c,d){if(!!a.$isj)return new H.dx(a,b,[c,d])
return new H.bO(a,b,[c,d])},
e7:function(){return new P.aB("No element")},
kM:function(){return new P.aB("Too many elements")},
kL:function(){return new P.aB("Too few elements")},
l_:function(a,b){H.c2(a,0,J.aO(a)-1,b)},
c2:function(a,b,c,d){if(c-b<=32)H.kZ(a,b,c,d)
else H.kY(a,b,c,d)},
kZ:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.U(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.W(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
kY:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.S(t+1,6)
r=a3+s
q=a4-s
p=C.b.S(a3+a4,2)
o=p-s
n=p+s
t=J.U(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.W(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.W(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.W(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.W(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.W(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.W(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.W(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.W(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.W(a5.$2(j,i),0)){h=i
i=j
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.y(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.c2(a2,a3,g-2,a5)
H.c2(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.y(a5.$2(t.h(a2,g),l),0);)++g
for(;J.y(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.c2(a2,g,f,a5)}else H.c2(a2,g,f,a5)},
j:function j(){},
ax:function ax(){},
bM:function bM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bO:function bO(a,b,c){this.a=a
this.b=b
this.$ti=c},
dx:function dx(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b_:function b_(a,b,c){this.a=a
this.b=b
this.$ti=c},
cd:function cd(a,b,c){this.a=a
this.b=b
this.$ti=c},
fu:function fu(a,b,c){this.a=a
this.b=b
this.$ti=c},
aw:function aw(){},
cY:function(a,b){var t=a.ab(b)
if(!u.globalState.d.cy)u.globalState.f.ag()
return t},
ha:function(){++u.globalState.f.b},
ho:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
jx:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.u(s).$isf)throw H.b(P.it("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.fQ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$iF()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.fF(P.hP(null,H.ao),0)
q=P.v
s.sdJ(new H.a4(0,null,null,null,null,null,0,[q,H.aD]))
s.sdL(new H.a4(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.fP()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.kG,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ld)}if(u.globalState.x)return
o=H.ja()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.cZ(a,{func:1,args:[P.H]}))o.ab(new H.hs(t,a))
else if(H.cZ(a,{func:1,args:[P.H,P.H]}))o.ab(new H.ht(t,a))
else o.ab(a)
u.globalState.f.ag()},
ld:function(a){var t=P.ai(["command","print","msg",a])
return new H.S(!0,P.aE(null,P.v)).F(t)},
ja:function(){var t,s
t=u.globalState.a++
s=P.v
t=new H.aD(t,new H.a4(0,null,null,null,null,null,0,[s,H.c0]),P.aj(null,null,null,s),u.createNewIsolate(),new H.c0(0,null,!1),new H.ab(H.jw()),new H.ab(H.jw()),!1,!1,[],P.aj(null,null,null,null),null,null,!1,!0,P.aj(null,null,null,null))
t.cP()
return t},
kI:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.kJ()
return},
kJ:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.b(P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.b(P.r('Cannot extract URI from "'+t+'"'))},
kG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.an(!0,[]).O(b.data)
s=J.U(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.lE(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.an(!0,[]).O(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.an(!0,[]).O(s.h(t,"replyTo"))
k=H.ja()
u.globalState.f.a.L(0,new H.ao(k,new H.e4(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ag()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.k8(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ag()
break
case"close":u.globalState.ch.af(0,$.$get$iG().h(0,a))
a.terminate()
u.globalState.f.ag()
break
case"log":H.kF(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ai(["command","print","msg",t])
j=new H.S(!0,P.aE(null,P.v)).F(j)
s.toString
self.postMessage(j)}else P.F(s.h(t,"msg"))
break
case"error":throw H.b(s.h(t,"msg"))}},
kF:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ai(["command","log","msg",a])
r=new H.S(!0,P.aE(null,P.v)).F(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.a9(q)
t=H.hd(q)
s=P.bC(t)
throw H.b(s)}},
kH:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.iM=$.iM+("_"+s)
$.iN=$.iN+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.E(0,["spawned",new H.aF(s,r),q,t.r])
r=new H.e5(t,d,a,c,b)
if(e){t.bl(q,q)
u.globalState.f.a.L(0,new H.ao(t,r,"start isolate"))}else r.$0()},
l1:function(a,b){var t=new H.fc(!0,!1,null,0)
t.cJ(a,b)
return t},
lf:function(a){return new H.an(!0,[]).O(new H.S(!1,P.aE(null,P.v)).F(a))},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
fQ:function fQ(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aD:function aD(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fK:function fK(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(a){this.a=a},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
fP:function fP(){},
e4:function e4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
e5:function e5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fB:function fB(){},
aF:function aF(a,b){this.b=a
this.a=b},
fR:function fR(a,b){this.a=a
this.b=b},
bm:function bm(a,b,c){this.b=a
this.c=b
this.a=c},
c0:function c0(a,b,c){this.a=a
this.b=b
this.c=c},
fc:function fc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
ab:function ab(a){this.a=a},
S:function S(a,b){this.a=a
this.b=b},
an:function an(a,b){this.a=a
this.b=b},
ly:function(a){return u.types[a]},
lG:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.u(a).$isp},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aP(a)
if(typeof t!=="string")throw H.b(H.T(a))
return t},
kV:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.a3(t)
s=t[0]
r=t[1]
return new H.eO(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
ak:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
b3:function(a){var t,s,r,q,p,o,n,m,l
t=J.u(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.H||!!J.u(a).$isam){p=C.v(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.f.as(q,0)===36)q=C.f.co(q,1)
l=H.d_(H.hc(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
D:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kT:function(a){return a.b?H.D(a).getUTCFullYear()+0:H.D(a).getFullYear()+0},
kR:function(a){return a.b?H.D(a).getUTCMonth()+1:H.D(a).getMonth()+1},
kN:function(a){return a.b?H.D(a).getUTCDate()+0:H.D(a).getDate()+0},
kO:function(a){return a.b?H.D(a).getUTCHours()+0:H.D(a).getHours()+0},
kQ:function(a){return a.b?H.D(a).getUTCMinutes()+0:H.D(a).getMinutes()+0},
kS:function(a){return a.b?H.D(a).getUTCSeconds()+0:H.D(a).getSeconds()+0},
kP:function(a){return a.b?H.D(a).getUTCMilliseconds()+0:H.D(a).getMilliseconds()+0},
iL:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.b(H.T(a))
return a[b]},
aJ:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.N(!0,b,"index",null)
t=J.aO(a)
if(b<0||C.b.aJ(b,t))return P.w(b,a,"index",null,t)
return P.eL(b,"index",null)},
T:function(a){return new P.N(!0,a,null,null)},
b:function(a){var t
if(a==null)a=new P.bY()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.jy})
t.name=""}else t.toString=H.jy
return t},
jy:function(){return J.aP(this.dartException)},
C:function(a){throw H.b(a)},
d1:function(a){throw H.b(P.a1(a))},
a_:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fi(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fj:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
iZ:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iK:function(a,b){return new H.eC(a,b==null?null:b.method)},
hL:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.ec(a,s,t?null:b.receiver)},
a9:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.hu(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aD(r,16)&8191)===10)switch(q){case 438:return t.$1(H.hL(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.iK(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$iT()
o=$.$get$iU()
n=$.$get$iV()
m=$.$get$iW()
l=$.$get$j_()
k=$.$get$j0()
j=$.$get$iY()
$.$get$iX()
i=$.$get$j2()
h=$.$get$j1()
g=p.J(s)
if(g!=null)return t.$1(H.hL(s,g))
else{g=o.J(s)
if(g!=null){g.method="call"
return t.$1(H.hL(s,g))}else{g=n.J(s)
if(g==null){g=m.J(s)
if(g==null){g=l.J(s)
if(g==null){g=k.J(s)
if(g==null){g=j.J(s)
if(g==null){g=m.J(s)
if(g==null){g=i.J(s)
if(g==null){g=h.J(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.iK(s,g))}}return t.$1(new H.fn(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.c5()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.N(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.c5()
return a},
hd:function(a){var t
if(a==null)return new H.cD(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.cD(a,null)},
lK:function(a){if(a==null||typeof a!='object')return J.aN(a)
else return H.ak(a)},
lw:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.j(0,p,a[q])}return b},
lF:function(a,b,c,d,e,f,g){switch(c){case 0:return H.cY(b,new H.hj(a))
case 1:return H.cY(b,new H.hk(a,d))
case 2:return H.cY(b,new H.hl(a,d,e))
case 3:return H.cY(b,new H.hm(a,d,e,f))
case 4:return H.cY(b,new H.hn(a,d,e,f,g))}throw H.b(P.bC("Unsupported number of arguments for wrapped closure"))},
h6:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.lF)
a.$identity=t
return t},
kr:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.u(c).$isf){t.$reflectionInfo=c
r=H.kV(t).r}else r=c
q=d?Object.create(new H.f_().constructor.prototype):Object.create(new H.aQ(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.iy(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.ly,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.iw:H.hE
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.b("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.iy(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
ko:function(a,b,c,d){var t=H.hE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
iy:function(a,b,c){var t,s,r,q
if(c)return H.kq(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.ko(s,b==null?r!=null:b!==r,t,b)
return q},
kp:function(a,b,c,d){var t,s
t=H.hE
s=H.iw
switch(b?-1:a){case 0:throw H.b(H.kX("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kq:function(a,b){var t,s,r,q
t=$.ix
if(t==null){t=H.iu("self")
$.ix=t}t=$.iv
if(t==null){t=H.iu("receiver")
$.iv=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kp(r,b==null?q!=null:b!==q,s,b)
return t},
i5:function(a,b,c,d,e,f){var t,s
t=J.a3(b)
s=!!J.u(c).$isf?J.a3(c):c
return H.kr(a,t,s,!!d,e,f)},
hE:function(a){return a.a},
iw:function(a){return a.c},
iu:function(a){var t,s,r,q,p
t=new H.aQ("self","target","receiver","name")
s=J.a3(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
m1:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.b(H.a7(a,"String"))},
m0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.b(H.a7(a,"num"))},
ls:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.b(H.a7(a,"bool"))},
lE:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.b(H.a7(a,"int"))},
lL:function(a,b){throw H.b(H.a7(a,b.substring(3)))},
js:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.u(a)[b])return a
H.lL(a,b)},
m_:function(a){if(a==null)return a
if(!!J.u(a).$isf)return a
throw H.b(H.a7(a,"List"))},
i6:function(a){var t=J.u(a)
return"$S" in t?t.$S():null},
cZ:function(a,b){var t,s
if(a==null)return!1
t=H.i6(a)
if(t==null)s=!1
else s=H.jt(t,b)
return s},
lY:function(a,b){var t,s
if(a==null)return a
if($.i2)return a
$.i2=!0
try{if(H.cZ(a,b))return a
t=H.hr(b,null)
s=H.a7(a,t)
throw H.b(s)}finally{$.i2=!1}},
a7:function(a,b){return new H.fk("TypeError: "+H.e(P.bB(a))+": type '"+H.jd(a)+"' is not a subtype of type '"+b+"'")},
kn:function(a,b){return new H.dc("CastError: "+H.e(P.bB(a))+": type '"+H.jd(a)+"' is not a subtype of type '"+b+"'")},
jd:function(a){var t
if(a instanceof H.ad){t=H.i6(a)
if(t!=null)return H.hr(t,null)
return"Closure"}return H.b3(a)},
aq:function(a){if(!0===a)return!1
if(!!J.u(a).$ishH)a=a.$0()
if(typeof a==="boolean")return!a
throw H.b(H.a7(a,"bool"))},
aI:function(a){throw H.b(new H.fv(a))},
d:function(a){if(H.aq(a))throw H.b(P.km(null))},
lM:function(a){throw H.b(new P.dn(a))},
kX:function(a){return new H.eS(a)},
jw:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
jp:function(a){return u.getIsolateTag(a)},
B:function(a){return new H.al(a,null)},
x:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hc:function(a){if(a==null)return
return a.$ti},
jq:function(a,b){return H.ic(a["$as"+H.e(b)],H.hc(a))},
V:function(a,b,c){var t,s
t=H.jq(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aK:function(a,b){var t,s
t=H.hc(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
hr:function(a,b){var t=H.aL(a,b)
return t},
aL:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.d_(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aL(t,b)
return H.lg(a,b)}return"unknown-reified-type"},
lg:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aL(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aL(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lv(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aL(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
d_:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.b6("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aL(o,c)}return p?"":"<"+s.k(0)+">"},
i7:function(a){var t,s,r
if(a instanceof H.ad){t=H.i6(a)
if(t!=null)return H.hr(t,null)}s=J.u(a).constructor.name
if(a==null)return s
r=H.d_(a.$ti,0,null)
return s+r},
ic:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.ia(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.ia(a,null,b)
return b},
ji:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hc(a)
s=J.u(a)
if(s[b]==null)return!1
return H.jg(H.ic(s[d],t),c)},
d0:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ji(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.d_(c,0,null)
throw H.b(H.kn(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lV:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ji(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.d_(c,0,null)
throw H.b(H.a7(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
jg:function(a,b){var t,s,r,q,p
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
if(!H.K(r,b[p]))return!1}return!0},
lW:function(a,b,c){return H.ia(a,b,H.jq(b,c))},
K:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="H")return!0
if('func' in b)return H.jt(a,b)
if('func' in a)return b.name==="hH"||b.name==="A"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.hr(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jg(H.ic(o,t),r)},
jf:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.K(o,n)||H.K(n,o)))return!1}return!0},
lo:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.d(typeof a=='object')
H.d(typeof b=='object')
t=J.a3(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.K(p,o)||H.K(o,p)))return!1}return!0},
jt:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.K(t,s)||H.K(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jf(r,q,!1))return!1
if(!H.jf(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.K(g,f)||H.K(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.K(g,f)||H.K(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.K(g,f)||H.K(f,g)))return!1}}return H.lo(a.named,b.named)},
ia:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
m2:function(a){var t=$.i8
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
lZ:function(a){return H.ak(a)},
lX:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lH:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.A))
t=$.i8.$1(a)
s=$.h9[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hi[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.je.$2(a,t)
if(t!=null){s=$.h9[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.hi[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.hp(r)
$.h9[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.hi[t]=r
return r}if(p==="-"){o=H.hp(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.ju(a,r)
if(p==="*")throw H.b(P.j6(t))
if(u.leafTags[t]===true){o=H.hp(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.ju(a,r)},
ju:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ib(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
hp:function(a){return J.ib(a,!1,null,!!a.$isp)},
lJ:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.hp(t)
else return J.ib(t,c,null,null)},
lC:function(){if(!0===$.i9)return
$.i9=!0
H.lD()},
lD:function(){var t,s,r,q,p,o,n,m
$.h9=Object.create(null)
$.hi=Object.create(null)
H.lB()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.jv.$1(p)
if(o!=null){n=H.lJ(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
lB:function(){var t,s,r,q,p,o,n
t=C.L()
t=H.aH(C.I,H.aH(C.N,H.aH(C.u,H.aH(C.u,H.aH(C.M,H.aH(C.J,H.aH(C.K(C.v),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.i8=new H.hf(p)
$.je=new H.hg(o)
$.jv=new H.hh(n)},
aH:function(a,b){return a(b)||b},
eO:function eO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fi:function fi(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eC:function eC(a,b){this.a=a
this.b=b},
ec:function ec(a,b,c){this.a=a
this.b=b
this.c=c},
fn:function fn(a){this.a=a},
hu:function hu(a){this.a=a},
cD:function cD(a,b){this.a=a
this.b=b},
hj:function hj(a){this.a=a},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hm:function hm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ad:function ad(){},
f6:function f6(){},
f_:function f_(){},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(a){this.a=a},
dc:function dc(a){this.a=a},
eS:function eS(a){this.a=a},
fv:function fv(a){this.a=a},
al:function al(a,b){this.a=a
this.b=b},
a4:function a4(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eb:function eb(a){this.a=a},
ee:function ee(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ef:function ef(a,b){this.a=a
this.$ti=b},
eg:function eg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hf:function hf(a){this.a=a},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
h4:function(a){var t,s,r
if(!!J.u(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
a0:function(a,b,c){if(a>>>0!==a||a>=c)throw H.b(H.aJ(b,a))},
b1:function b1(){},
aA:function aA(){},
es:function es(){},
bR:function bR(){},
bS:function bS(){},
bT:function bT(){},
bQ:function bQ(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
bU:function bU(){},
ez:function ez(){},
bd:function bd(){},
be:function be(){},
bf:function bf(){},
bg:function bg(){},
lv:function(a){return J.a3(H.x(a?Object.keys(a):[],[null]))},
hq:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
u:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bK.prototype
return J.e9.prototype}if(typeof a=="string")return J.ag.prototype
if(a==null)return J.ea.prototype
if(typeof a=="boolean")return J.e8.prototype
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.A)return a
return J.hb(a)},
ib:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hb:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.i9==null){H.lC()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.b(P.j6("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$hK()]
if(p!=null)return p
p=H.lH(a)
if(p!=null)return p
if(typeof a=="function")return C.O
s=Object.getPrototypeOf(a)
if(s==null)return C.x
if(s===Object.prototype)return C.x
if(typeof q=="function"){Object.defineProperty(q,$.$get$hK(),{value:C.r,enumerable:false,writable:true,configurable:true})
return C.r}return C.r},
a3:function(a){a.fixed$length=Array
return a},
U:function(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.A)return a
return J.hb(a)},
bq:function(a){if(a==null)return a
if(a.constructor==Array)return J.af.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.A)return a
return J.hb(a)},
jn:function(a){if(typeof a=="number")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.am.prototype
return a},
lx:function(a){if(typeof a=="number")return J.aY.prototype
if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.am.prototype
return a},
jo:function(a){if(typeof a=="string")return J.ag.prototype
if(a==null)return a
if(!(a instanceof P.A))return J.am.prototype
return a},
h:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ah.prototype
return a}if(a instanceof P.A)return a
return J.hb(a)},
y:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.u(a).A(a,b)},
W:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.jn(a).K(a,b)},
jz:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.jn(a).R(a,b)},
aM:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lG(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.U(a).h(a,b)},
jA:function(a,b){return J.jo(a).as(a,b)},
hv:function(a,b){return J.h(a).d3(a,b)},
jB:function(a,b,c){return J.h(a).d4(a,b,c)},
id:function(a,b){return J.h(a).bk(a,b)},
ie:function(a,b,c){return J.h(a).bn(a,b,c)},
jC:function(a,b){return J.h(a).de(a,b)},
hw:function(a,b,c){return J.h(a).bo(a,b,c)},
as:function(a,b,c){return J.h(a).bp(a,b,c)},
d2:function(a,b,c){return J.h(a).bq(a,b,c)},
d3:function(a,b){return J.h(a).dg(a,b)},
jD:function(a,b){return J.h(a).br(a,b)},
jE:function(a,b,c){return J.h(a).bs(a,b,c)},
ig:function(a,b,c,d){return J.h(a).bt(a,b,c,d)},
jF:function(a,b){return J.h(a).bu(a,b)},
jG:function(a,b){return J.bq(a).bv(a,b)},
jH:function(a,b,c,d,e){return J.h(a).bw(a,b,c,d,e)},
jI:function(a,b){return J.lx(a).Y(a,b)},
hx:function(a){return J.h(a).by(a)},
jJ:function(a){return J.h(a).bz(a)},
jK:function(a){return J.h(a).bA(a)},
jL:function(a){return J.h(a).bC(a)},
jM:function(a){return J.h(a).dl(a)},
jN:function(a,b){return J.h(a).bD(a,b)},
jO:function(a,b){return J.h(a).bE(a,b)},
jP:function(a,b,c,d){return J.h(a).bF(a,b,c,d)},
jQ:function(a,b,c,d,e){return J.h(a).dt(a,b,c,d,e)},
jR:function(a,b,c,d,e){return J.h(a).bG(a,b,c,d,e)},
jS:function(a,b,c,d,e,f){return J.h(a).du(a,b,c,d,e,f)},
jT:function(a,b){return J.bq(a).t(a,b)},
hy:function(a,b){return J.h(a).bH(a,b)},
jU:function(a,b){return J.h(a).bI(a,b)},
jV:function(a){return J.h(a).dv(a)},
jW:function(a,b){return J.bq(a).Z(a,b)},
ih:function(a,b,c,d,e,f){return J.h(a).bK(a,b,c,d,e,f)},
jX:function(a){return J.h(a).gdd(a)},
aN:function(a){return J.u(a).gu(a)},
at:function(a){return J.bq(a).gv(a)},
aO:function(a){return J.U(a).gi(a)},
jY:function(a){return J.h(a).gaH(a)},
jZ:function(a){return J.u(a).gw(a)},
k_:function(a){return J.h(a).gdR(a)},
k0:function(a){return J.h(a).gc8(a)},
hz:function(a){return J.h(a).gm(a)},
hA:function(a){return J.h(a).gn(a)},
ii:function(a){return J.h(a).gD(a)},
hB:function(a,b){return J.h(a).a1(a,b)},
k1:function(a){return J.h(a).aq(a)},
k2:function(a){return J.h(a).aK(a)},
k3:function(a,b){return J.h(a).aL(a,b)},
ij:function(a,b){return J.h(a).aM(a,b)},
k4:function(a,b){return J.h(a).aN(a,b)},
k5:function(a,b,c){return J.h(a).aO(a,b,c)},
ik:function(a,b,c){return J.h(a).aR(a,b,c)},
k6:function(a,b){return J.h(a).bL(a,b)},
k7:function(a,b){return J.bq(a).bN(a,b)},
il:function(a,b,c,d,e,f,g,h){return J.h(a).bP(a,b,c,d,e,f,g,h)},
im:function(a){return J.bq(a).dN(a)},
k8:function(a,b){return J.h(a).E(a,b)},
k9:function(a,b,c,d){return J.h(a).aX(a,b,c,d)},
ka:function(a,b,c,d){return J.h(a).bS(a,b,c,d)},
d4:function(a,b,c,d){return J.h(a).bT(a,b,c,d)},
kb:function(a,b,c,d,e,f){return J.h(a).dS(a,b,c,d,e,f)},
kc:function(a){return J.jo(a).dV(a)},
aP:function(a){return J.u(a).k(a)},
kd:function(a,b,c,d){return J.h(a).dW(a,b,c,d)},
ke:function(a,b,c){return J.h(a).bU(a,b,c)},
kf:function(a,b,c){return J.h(a).bV(a,b,c)},
hC:function(a,b,c){return J.h(a).bW(a,b,c)},
kg:function(a,b,c){return J.h(a).bX(a,b,c)},
io:function(a,b,c){return J.h(a).bY(a,b,c)},
ip:function(a,b,c){return J.h(a).bZ(a,b,c)},
iq:function(a,b,c){return J.h(a).c_(a,b,c)},
ir:function(a,b,c,d){return J.h(a).c0(a,b,c,d)},
is:function(a,b,c,d){return J.h(a).c1(a,b,c,d)},
kh:function(a,b){return J.h(a).c3(a,b)},
ki:function(a,b,c){return J.h(a).dX(a,b,c)},
kj:function(a,b,c,d,e,f,g){return J.h(a).c5(a,b,c,d,e,f,g)},
kk:function(a,b,c,d,e){return J.h(a).c7(a,b,c,d,e)},
a:function a(){},
e8:function e8(){},
ea:function ea(){},
aZ:function aZ(){},
eG:function eG(){},
am:function am(){},
ah:function ah(){},
af:function af(a){this.$ti=a},
hI:function hI(a){this.$ti=a},
d8:function d8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
bK:function bK(){},
e9:function e9(){},
ag:function ag(){}},P={
l5:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lp()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.h6(new P.fx(t),1)).observe(s,{childList:true})
return new P.fw(t,s,r)}else if(self.setImmediate!=null)return P.lq()
return P.lr()},
l6:function(a){H.ha()
self.scheduleImmediate(H.h6(new P.fy(a),0))},
l7:function(a){H.ha()
self.setImmediate(H.h6(new P.fz(a),0))},
l8:function(a){P.hU(C.t,a)},
hU:function(a,b){var t=C.b.S(a.a,1000)
return H.l1(t<0?0:t,b)},
li:function(){var t,s
for(;t=$.aG,t!=null;){$.bo=null
s=t.b
$.aG=s
if(s==null)$.bn=null
t.a.$0()}},
ln:function(){$.i3=!0
try{P.li()}finally{$.bo=null
$.i3=!1
if($.aG!=null)$.$get$i_().$1(P.jh())}},
ll:function(a){var t=new P.ce(a,null)
if($.aG==null){$.bn=t
$.aG=t
if(!$.i3)$.$get$i_().$1(P.jh())}else{$.bn.b=t
$.bn=t}},
lm:function(a){var t,s,r
t=$.aG
if(t==null){P.ll(a)
$.bo=$.bn
return}s=new P.ce(a,null)
r=$.bo
if(r==null){s.b=t
$.bo=s
$.aG=s}else{s.b=r.b
r.b=s
$.bo=s
if(s.b==null)$.bn=s}},
l2:function(a,b){var t=$.aC
if(t===C.n){t.toString
return P.hU(a,b)}return P.hU(a,t.df(b))},
l3:function(a){var t,s
H.d(a!=null)
t=$.aC
H.d(a==null?t!=null:a!==t)
s=$.aC
$.aC=a
return s},
lj:function(a,b,c,d,e){var t={}
t.a=d
P.lm(new P.h5(t,e))},
lk:function(a,b,c,d){var t,s
if($.aC===c)return d.$0()
t=P.l3(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.aC=s}},
fx:function fx(a){this.a=a},
fw:function fw(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
ce:function ce(a,b){this.a=a
this.b=b},
hT:function hT(){},
h3:function h3(){},
h5:function h5(a,b){this.a=a
this.b=b},
fT:function fT(){},
fU:function fU(a,b){this.a=a
this.b=b},
a5:function(){return new H.a4(0,null,null,null,null,null,0,[null,null])},
ai:function(a){return H.lw(a,new H.a4(0,null,null,null,null,null,0,[null,null]))},
aE:function(a,b){return new P.fN(0,null,null,null,null,null,0,[a,b])},
aj:function(a,b,c,d){return new P.fL(0,null,null,null,null,null,0,[d])},
i1:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
kK:function(a,b,c){var t,s
if(P.i4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bp()
C.a.l(s,a)
try{P.lh(a,t)}finally{H.d(C.a.gaG(s)===a)
s.pop()}s=P.iR(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
e6:function(a,b,c){var t,s,r
if(P.i4(a))return b+"..."+c
t=new P.b6(b)
s=$.$get$bp()
C.a.l(s,a)
try{r=t
r.a=P.iR(r.gV(),a,", ")}finally{H.d(C.a.gaG(s)===a)
s.pop()}s=t
s.a=s.gV()+c
s=t.gV()
return s.charCodeAt(0)==0?s:s},
i4:function(a){var t,s
for(t=0;s=$.$get$bp(),t<s.length;++t)if(a===s[t])return!0
return!1},
lh:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
H.d(r<100)
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
hO:function(a,b){var t,s
t=P.aj(null,null,null,b)
for(s=J.at(a);s.p();)t.l(0,s.gq(s))
return t},
iJ:function(a){var t,s,r
t={}
if(P.i4(a))return"{...}"
s=new P.b6("")
try{C.a.l($.$get$bp(),a)
r=s
r.a=r.gV()+"{"
t.a=!0
J.jW(a,new P.ek(t,s))
t=s
t.a=t.gV()+"}"}finally{t=$.$get$bp()
H.d(C.a.gaG(t)===a)
t.pop()}t=s.gV()
return t.charCodeAt(0)==0?t:t},
hP:function(a,b){var t=new P.eh(null,0,0,0,[b])
t.cG(a,b)
return t},
fN:function fN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fL:function fL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
fM:function fM(a,b,c){this.a=a
this.b=b
this.c=c},
bb:function bb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fJ:function fJ(){},
hN:function hN(){},
bL:function bL(){},
k:function k(){},
bN:function bN(){},
ek:function ek(a,b){this.a=a
this.b=b},
az:function az(){},
eh:function eh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
fO:function fO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
eV:function eV(){},
eU:function eU(){},
bc:function bc(){},
kx:function(a){var t=J.u(a)
if(!!t.$isad)return t.k(a)
return"Instance of '"+H.b3(a)+"'"},
iI:function(a,b,c){var t,s
t=H.x([],[c])
for(s=J.at(a);s.p();)C.a.l(t,s.gq(s))
if(b)return t
return J.a3(t)},
iR:function(a,b,c){var t=J.at(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
ks:function(a,b){return J.jI(a,b)},
kt:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
ku:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bv:function(a){if(a>=10)return""+a
return"0"+a},
kv:function(a,b,c,d,e,f){return new P.ae(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
bB:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aP(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kx(a)},
km:function(a){return new P.bs(a)},
it:function(a){return new P.N(!1,null,null,a)},
hD:function(a,b,c){return new P.N(!0,a,b,c)},
kl:function(a){return new P.N(!1,null,a,"Must not be null")},
eL:function(a,b,c){return new P.c_(null,null,!0,a,b,"Value not in range")},
b4:function(a,b,c,d,e){return new P.c_(b,c,!0,a,d,"Invalid value")},
iO:function(a,b,c,d,e,f){if(C.b.K(0,a)||C.b.K(a,c))throw H.b(P.b4(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.K(b,c))throw H.b(P.b4(b,a,c,"end",f))
return b}return c},
w:function(a,b,c,d,e){var t=e!=null?e:J.aO(b)
return new P.e3(b,t,!0,a,c,"Index out of range")},
r:function(a){return new P.fo(a)},
j6:function(a){return new P.fm(a)},
iQ:function(a){return new P.aB(a)},
a1:function(a){return new P.de(a)},
bC:function(a){return new P.fH(a)},
F:function(a){H.hq(H.e(a))},
ar:function ar(){},
z:function z(){},
aS:function aS(a,b){this.a=a
this.b=b},
M:function M(){},
ae:function ae(a){this.a=a},
dv:function dv(){},
dw:function dw(){},
aV:function aV(){},
bs:function bs(a){this.a=a},
bY:function bY(){},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
e3:function e3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fo:function fo(a){this.a=a},
fm:function fm(a){this.a=a},
aB:function aB(a){this.a=a},
de:function de(a){this.a=a},
c5:function c5(){},
dn:function dn(a){this.a=a},
hG:function hG(){},
fH:function fH(a){this.a=a},
dz:function dz(a,b,c){this.a=a
this.b=b
this.$ti=c},
v:function v(){},
G:function G(){},
bJ:function bJ(){},
f:function f(){},
ay:function ay(){},
H:function H(){},
a8:function a8(){},
A:function A(){},
n:function n(){},
b6:function b6(a){this.a=a},
hW:function hW(){},
h8:function(a){var t,s,r,q,p
if(a==null)return
t=P.a5()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.d1)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
lt:function(a,b){var t={}
a.Z(0,new P.h7(t))
return t},
h7:function h7(a){this.a=a},
fS:function fS(){},
I:function I(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dV:function dV(){},
dW:function dW(){},
Q:function Q(){},
X:function X(){},
e2:function e2(){},
ed:function ed(){},
em:function em(){},
eD:function eD(){},
eF:function eF(){},
eI:function eI(){},
eJ:function eJ(){},
eM:function eM(){},
eN:function eN(){},
b5:function b5(){},
f2:function f2(){},
q:function q(){},
f3:function f3(){},
b8:function b8(){},
b9:function b9(){},
fh:function fh(){},
fq:function fq(){},
co:function co(){},
cp:function cp(){},
cv:function cv(){},
cw:function cw(){},
cF:function cF(){},
cG:function cG(){},
cL:function cL(){},
cM:function cM(){},
d9:function d9(){},
da:function da(){},
au:function au(){},
eE:function eE(){},
eQ:function eQ(){},
eR:function eR(){},
eZ:function eZ(){},
cB:function cB(){},
cC:function cC(){}},W={
kw:function(a,b,c){var t,s
t=document.body
s=(t&&C.m).I(t,a,b,c)
s.toString
t=new H.cd(new W.E(s),new W.dy(),[W.o])
return t.gU(t)},
aU:function(a){var t,s,r
t="element tag unavailable"
try{s=J.k_(a)
if(typeof s==="string")t=a.tagName}catch(r){H.a9(r)}return t},
ap:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jb:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j8:function(a){var t,s
t=document.createElement("a")
s=new W.fV(t,window.location)
s=new W.ba(s)
s.cO(a)
return s},
lb:function(a,b,c,d){return!0},
lc:function(a,b,c,d){var t,s,r,q,p
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
jc:function(){var t=P.n
t=new W.h0(P.hO(C.p,t),P.aj(null,null,null,t),P.aj(null,null,null,t),P.aj(null,null,null,t),null)
t.cQ(null,new H.b_(C.p,new W.h1(),[H.aK(C.p,0),null]),["TEMPLATE"],null)
return t},
i:function i(){},
br:function br(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
aa:function aa(){},
bt:function bt(){},
db:function db(){},
ac:function ac(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
aR:function aR(){},
dj:function dj(){},
O:function O(){},
av:function av(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dp:function dp(){},
dq:function dq(){},
bw:function bw(){},
aT:function aT(){},
dr:function dr(){},
bx:function bx(){},
ds:function ds(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
dt:function dt(){},
du:function du(){},
P:function P(){},
dy:function dy(){},
c:function c(){},
dT:function dT(){},
dU:function dU(){},
dX:function dX(){},
e_:function e_(){},
bH:function bH(){},
e0:function e0(){},
aW:function aW(){},
bI:function bI(){},
e1:function e1(){},
aX:function aX(){},
ei:function ei(){},
ej:function ej(){},
en:function en(){},
ep:function ep(){},
b0:function b0(){},
eq:function eq(){},
E:function E(a){this.a=a},
o:function o(){},
bV:function bV(){},
b2:function b2(){},
Y:function Y(){},
eH:function eH(){},
eK:function eK(){},
bZ:function bZ(){},
c1:function c1(){},
eT:function eT(){},
a6:function a6(){},
eX:function eX(){},
eY:function eY(){},
Z:function Z(){},
f0:function f0(){},
f1:function f1(a){this.a=a},
c7:function c7(){},
f4:function f4(){},
f5:function f5(){},
b7:function b7(){},
f7:function f7(){},
f8:function f8(){},
fb:function fb(){},
ff:function ff(){},
fg:function fg(){},
cb:function cb(){},
fp:function fp(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
hZ:function hZ(){},
fC:function fC(){},
fD:function fD(){},
fI:function fI(){},
cs:function cs(){},
fY:function fY(){},
fZ:function fZ(){},
fA:function fA(){},
fE:function fE(a){this.a=a},
ba:function ba(a){this.a=a},
l:function l(){},
bX:function bX(a){this.a=a},
eB:function eB(a){this.a=a},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(){},
fW:function fW(){},
fX:function fX(){},
h0:function h0(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
h1:function h1(){},
h_:function h_(){},
bE:function bE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bW:function bW(){},
hR:function hR(){},
hY:function hY(){},
fV:function fV(a,b){this.a=a
this.b=b},
cN:function cN(a){this.a=a},
h2:function h2(a){this.a=a},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
cq:function cq(){},
cr:function cr(){},
ct:function ct(){},
cu:function cu(){},
cx:function cx(){},
cy:function cy(){},
bi:function bi(){},
bj:function bj(){},
cz:function cz(){},
cA:function cA(){},
cE:function cE(){},
cH:function cH(){},
cI:function cI(){},
bk:function bk(){},
bl:function bl(){},
cJ:function cJ(){},
cK:function cK(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){}},G={
l4:function(a){var t,s,r
t=H.x(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.an(t,"\n")},
j7:function(a,b,c){var t,s,r,q
t=J.h(a)
s=t.bB(a,b)
t.aV(a,s,c)
t.bx(a,s)
r=t.aQ(a,s,35713)
if(r!=null&&!r){q=t.aP(a,s)
P.F("E:Compilation failed:")
P.F("E:"+G.l4(c))
P.F("E:Failure:")
P.F(C.f.T("E:",q))
throw H.b(q)}return s},
l0:function(a){switch(a){case 6409:return 1
case 6410:return 2
case 6407:return 3
case 6408:return 4
default:H.d(!1)
return-1}},
l9:function(a){switch(a){case 6409:return"GL_LUMINANCE"
case 6410:return"GL_LUMINANCE_ALPHA"
case 6407:return"GL_RGB"
case 6408:return"GL_RGBA"
default:return H.e(a)}},
le:function(a){switch(a){case 5121:return"GL_UNSIGNED_BYTE"
default:return H.e(a)}},
iE:function(a){var t=new G.dY(J.ij(a.a,35739),null,J.ij(a.a,35738))
t.cC(a)
return t},
kD:function(a,b,c,d,e){var t=new G.bF(a,null,b,c,d)
t.b1(a,b,c,d,!1)
return t},
iD:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.hz(a[s])
b[t+1]=J.hA(a[s])
b[t+2]=J.ii(a[s])}return b},
kB:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.hz(a[s])
b[t+1]=J.hA(a[s])}return b},
kC:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.hz(a[s])
b[t+1]=J.hA(a[s])
b[t+2]=J.ii(a[s])
b[t+3]=J.k0(a[s])}return b},
kA:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aM(a[s],0)
b[t+1]=J.aM(a[s],1)
b[t+2]=J.aM(a[s],2)
b[t+3]=J.aM(a[s],3)}return b},
la:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gC(t),s=s.gv(s),r=b.x,q=[[P.f,P.v]],p=[P.M],o=[T.cc],n=[T.J],m=[T.R];s.p();){l=s.gq(s)
if(!r.G(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.jm>0)H.hq("I: "+l)
continue}k=t.h(0,l)
switch($.$get$L().h(0,l).a){case"vec2":b.a5(l,G.kB(H.d0(k,"$isf",m,"$asf"),null),2)
break
case"vec3":b.a5(l,G.iD(H.d0(k,"$isf",n,"$asf"),null),3)
break
case"vec4":b.a5(l,G.kC(H.d0(k,"$isf",o,"$asf"),null),4)
break
case"float":b.a5(l,new Float32Array(H.h4(H.d0(k,"$isf",p,"$asf"))),1)
break
case"uvec4":b.a5(l,G.kA(H.d0(k,"$isf",q,"$asf"),null),4)
break
default:if(H.aq(!1))H.aI("unknown type for "+H.e(l)+" ["+J.jZ(k[0]).k(0)+"] ["+new H.al(H.i7(k),null).k(0)+"] "+H.e(k))}}},
kW:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aj(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.jK(b.a)
o=G.j7(b.a,35633,s)
J.ie(b.a,p,o)
n=G.j7(b.a,35632,r)
J.ie(b.a,p,n)
if(q.length>0)J.kd(b.a,p,q,35980)
J.k6(b.a,p)
if(!J.k5(b.a,p,35714))H.C(J.k4(b.a,p))
t=new G.eP(b,c,d,p,P.hO(c.c,null),P.a5(),P.a5(),t,null,a,!1,!0)
t.cH(a,b,c,d)
return t},
iP:function(a){return new G.eW(a,null,[],[],[],[],0,P.a5())},
hX:function(a,b,c,d,e,f){var t=new G.fl(c,d,e,b,J.jL(a.a),3553,a,f)
t.cK(a,b,c,d,e,f)
return t},
er:function er(){},
dd:function dd(a,b){this.a=a
this.b=b},
dY:function dY(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dS:function dS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dZ:function dZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eo:function eo(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
eP:function eP(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
eW:function eW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fa:function fa(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
f9:function f9(){},
fl:function fl(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},A={
jr:function(a){var t,s
t=C.S.dA(a,0,new A.he())
s=536870911&t+(C.b.c9(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
he:function he(){}},T={R:function R(a){this.a=a},J:function J(a){this.a=a},cc:function cc(){}},B={
ky:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
J.as(t.a,36160,s)
r=G.iE(t)
P.F("READ FORMAT "+r.k(0))
s=r.c
H.d(s===5121)
q=r.b
p=new Uint8Array(q*b*c)
J.il(t.a,0,0,b,c,r.a,s,p)
J.as(t.a,36160,null)
t=p.length
s=b*c
o=C.b.a4(t,s)
P.F("Buffer length: "+t+" channels: "+o)
for(n=0,m=0,l=0,k=0;k<t;k+=o){n+=p[k]
m+=p[k+1]
l+=p[k+2]}return H.e(n/s)+" "+H.e(m/s)+" "+H.e(l/s)},
kz:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
t=a.a
s=a.b
J.as(t.a,36160,s)
r=G.iE(t)
P.F("READ FORMAT "+r.k(0))
if(r.c!==5126)P.F("unexpcted non float type: "+r.k(0))
s=r.b
q=new Float32Array(s*b*c)
J.il(t.a,0,0,b,c,r.a,5126,q)
J.as(t.a,36160,null)
t=q.length
s=b*c
p=C.b.a4(t,s)
P.F("Buffer length: "+t+" channels: "+p)
for(o=0,n=0,m=0,l=0,k=0;k<t;k+=p){o+=q[k]
n+=q[k+1]
m+=q[k+2]
l+=q[k+3]}return H.e(o/s)+" "+H.e(n/s)+" "+H.e(m/s)+" "+H.e(l/s)},
lI:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=document
s=C.o.bO(t,"#results")
r=C.o.bO(t,"#webgl-canvas")
r.width=500
r.height=500
q=new G.dd(null,r)
t=(r&&C.E).ca(r,"webgl2",P.ai(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=t
if(t==null)H.C(P.bC('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
p="ChronosGL Config: "+H.e(J.k1(t))
if($.jm>0)P.F("I: "+p)
J.jH(t,0,0,0,1)
J.hy(t,2929)
o=G.kW("program",q,$.$get$jk(),$.$get$jj())
t=new T.J(new Float32Array(3))
t.a3(-1,-1,0)
p=new T.J(new Float32Array(3))
p.a3(1,-1,0)
n=new T.J(new Float32Array(3))
n.a3(1,1,0)
m=new T.J(new Float32Array(3))
m.a3(-1,1,0)
l=new T.R(new Float32Array(2))
l.ai(0,0)
k=new T.R(new Float32Array(2))
k.ai(1,0)
j=new T.R(new Float32Array(2))
j.ai(1,1)
i=new T.R(new Float32Array(2))
i.ai(0,1)
h=new T.J(new Float32Array(3))
h.a3(0,0,1)
g=[]
f=new G.dZ(!1,[],[],g,P.a5())
f.b0("aTexUV")
f.cA([t,p,n,m])
f.cw("aTexUV",[l,k,j,i])
f.b0("aNormal")
f.cz("aNormal",[h,h,h,h])
t=o.d
p=o.e.x
n=P.a5()
m=J.jM(t.a)
e=new G.eo(t,m,4,n,p,null,0,-1,null,null,P.a5(),"meshdata:quad",!1,!0)
g=G.iD(g,null)
n.j(0,"aPosition",J.hx(t.a))
e.ch=g
e.aZ("aPosition",g,3)
d=$.$get$L().h(0,"aPosition")
if(d==null)H.C("Unknown canonical aPosition")
H.d(p.G(0,"aPosition"))
c=p.h(0,"aPosition")
J.d3(t.a,m)
t.bJ(0,c,0)
t.c6(0,n.h(0,"aPosition"),c,d.b2(),5126,!1,0,0)
p=f.cD()
e.y=J.hx(t.a)
H.d(e.ch!=null)
n=e.ch.length
if(n<768){e.sax(new Uint8Array(H.h4(p)))
e.Q=5121}else if(n<196608){e.sax(new Uint16Array(H.h4(p)))
e.Q=5123}else{e.sax(new Uint32Array(H.h4(p)))
e.Q=5125}J.d3(t.a,m)
p=e.y
n=e.cx
m=J.u(n)
H.d(!!m.$isj3||!!m.$isj4||!!m.$isj5)
J.hw(t.a,34963,p)
J.ig(t.a,34963,n,35048)
G.la(f,e)
t=$.$get$iS()
p=G.hX(q,"frame::color",500,500,32856,t)
n=G.hX(q,"frame::depth",500,500,33190,t)
b=new G.bF(q,null,p,n,null)
b.b1(q,p,n,null,!1);(s&&C.h).a2(s,s.innerHTML+"<h3>Drawing into default format FB</h3>")
b.aY(17664,0,0,500,500)
o.b_(e,[])
C.h.a2(s,s.innerHTML+(B.ky(b,500,500)+"\n"))
C.h.a2(s,s.innerHTML+"<h3>Drawing into float format FB</h3>")
if(J.k3(q.a,"EXT_color_buffer_float")==null)C.h.a2(s,s.innerHTML+"extension not available: EXT_color_buffer_float")
b=G.kD(q,G.hX(q,"float",500,500,34836,t),null,null,!1)
b.aY(17664,0,0,500,500)
o.b_(e,[])
C.h.a2(s,s.innerHTML+(B.kz(b,500,500)+"\n"))}}
var v=[C,H,J,P,W,G,A,T,B]
setFunctionNamesIfNecessary(v)
var $={}
H.hJ.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gu:function(a){return H.ak(a)},
k:function(a){return"Instance of '"+H.b3(a)+"'"},
gw:function(a){return new H.al(H.i7(a),null)}}
J.e8.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.am},
$isar:1}
J.ea.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.ag},
$isH:1}
J.aZ.prototype={
gu:function(a){return 0},
gw:function(a){return C.af},
k:function(a){return String(a)},
$isiH:1}
J.eG.prototype={}
J.am.prototype={}
J.ah.prototype={
k:function(a){var t=a[$.$get$iz()]
return t==null?this.cs(a):J.aP(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ishH:1}
J.af.prototype={
l:function(a,b){if(!!a.fixed$length)H.C(P.r("add"))
a.push(b)},
H:function(a,b){var t,s,r,q
t=a.length
if(!!a.fixed$length)H.C(P.r("addAll"))
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.d(t===a.length||H.C(P.a1(a)))
a.push(r)}},
bN:function(a,b){return new H.b_(a,b,[H.aK(a,0),null])},
an:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gdz:function(a){if(a.length>0)return a[0]
throw H.b(H.e7())},
gaG:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.b(H.e7())},
aU:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.C(P.r("setRange"))
P.iO(b,c,a.length,null,null,null)
t=C.b.cn(c,b)
if(t===0)return
if(e<0)H.C(P.b4(e,0,null,"skipCount",null))
s=J.U(d)
if(C.b.K(e+t,s.gi(d)))throw H.b(H.kL())
if(C.b.R(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bm:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.b(P.a1(a))}return!1},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.y(a[t],b))return!0
return!1},
k:function(a){return P.e6(a,"[","]")},
gv:function(a){return new J.d8(a,a.length,0,null,[H.aK(a,0)])},
gu:function(a){return H.ak(a)},
gi:function(a){return a.length},
si:function(a,b){if(!!a.fixed$length)H.C(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.hD(b,"newLength",null))
if(b<0)throw H.b(P.b4(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aJ(a,b))
if(b>=a.length||b<0)throw H.b(H.aJ(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.C(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(H.aJ(a,b))
if(b>=a.length||b<0)throw H.b(H.aJ(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isj:1,
$isf:1}
J.hI.prototype={}
J.d8.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.b(H.d1(t))
r=this.c
if(r>=s){this.sb4(null)
return!1}this.sb4(t[r]);++this.c
return!0},
sb4:function(a){this.d=a}}
J.aY.prototype={
Y:function(a,b){var t
if(typeof b!=="number")throw H.b(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaF(b)
if(this.gaF(a)===t)return 0
if(this.gaF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaF:function(a){return a===0?1/a<0:a<0},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
T:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a+b},
cn:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a-b},
a4:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bi(a,b)},
S:function(a,b){return(a|0)===a?a/b|0:this.bi(a,b)},
bi:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.b(P.r("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aD:function(a,b){var t
if(a>0)t=this.d7(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
d7:function(a,b){return b>31?0:a>>>b},
c9:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return(a&b)>>>0},
cu:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return(a^b)>>>0},
R:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a<b},
K:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a>b},
aJ:function(a,b){if(typeof b!=="number")throw H.b(H.T(b))
return a>=b},
gw:function(a){return C.ap},
$isz:1,
$asz:function(){return[P.a8]},
$isM:1,
$isa8:1}
J.bK.prototype={
gw:function(a){return C.ao},
$isv:1}
J.e9.prototype={
gw:function(a){return C.an}}
J.ag.prototype={
as:function(a,b){if(b>=a.length)throw H.b(H.aJ(a,b))
return a.charCodeAt(b)},
T:function(a,b){if(typeof b!=="string")throw H.b(P.hD(b,null,null))
return a+b},
cm:function(a,b,c){var t
if(c>a.length)throw H.b(P.b4(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
aW:function(a,b){return this.cm(a,b,0)},
cp:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.b(P.eL(b,null,null))
if(b>c)throw H.b(P.eL(b,null,null))
if(c>a.length)throw H.b(P.eL(c,null,null))
return a.substring(b,c)},
co:function(a,b){return this.cp(a,b,null)},
dV:function(a){return a.toLowerCase()},
Y:function(a,b){var t
if(typeof b!=="string")throw H.b(H.T(b))
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
gw:function(a){return C.ah},
gi:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.b(H.aJ(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isz:1,
$asz:function(){return[P.n]},
$isn:1}
H.j.prototype={}
H.ax.prototype={
gv:function(a){return new H.bM(this,this.gi(this),0,null,[H.V(this,"ax",0)])},
ap:function(a,b){return this.cr(0,b)},
dU:function(a,b){var t,s
t=H.x([],[H.V(this,"ax",0)])
C.a.si(t,this.gi(this))
for(s=0;C.b.R(s,this.gi(this));++s)t[s]=this.t(0,s)
return t},
dT:function(a){return this.dU(a,!0)}}
H.bM.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.U(t)
r=s.gi(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.b(P.a1(t))
if(C.b.aJ(this.c,r)){this.sa7(null)
return!1}this.sa7(s.t(t,this.c));++this.c
return!0},
sa7:function(a){this.d=a}}
H.bO.prototype={
gv:function(a){return new H.el(null,J.at(this.a),this.b,this.$ti)},
gi:function(a){return J.aO(this.a)},
$asG:function(a,b){return[b]}}
H.dx.prototype={$isj:1,
$asj:function(a,b){return[b]}}
H.el.prototype={
p:function(){var t=this.b
if(t.p()){this.sa7(this.c.$1(t.gq(t)))
return!0}this.sa7(null)
return!1},
gq:function(a){return this.a},
sa7:function(a){this.a=a},
$asbJ:function(a,b){return[b]}}
H.b_.prototype={
gi:function(a){return J.aO(this.a)},
t:function(a,b){return this.b.$1(J.jT(this.a,b))},
$asj:function(a,b){return[b]},
$asax:function(a,b){return[b]},
$asG:function(a,b){return[b]}}
H.cd.prototype={
gv:function(a){return new H.fu(J.at(this.a),this.b,this.$ti)}}
H.fu.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aw.prototype={}
H.hs.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ht.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.fQ.prototype={
sdJ:function(a){this.z=a},
sdL:function(a){this.ch=a}}
H.aD.prototype={
cP:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.cS(s,t)},
bl:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aE()},
dP:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.af(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bd();++r.d}this.y=!1}this.aE()},
d9:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
dO:function(a){var t,s,r
if(this.ch==null)return
for(t=J.u(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.C(P.r("removeRange"))
P.iO(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
ck:function(a,b){if(!this.r.A(0,a))return
this.db=b},
dD:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.E(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.hP(null,null)
this.cx=t}t.L(0,new H.fK(a,c))},
dC:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ao()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.hP(null,null)
this.cx=t}t.L(0,this.gdK())},
dE:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.F(a)
if(b!=null)P.F(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aP(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bb(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.E(0,s)},
ab:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.a9(o)
p=H.hd(o)
this.dE(q,p)
if(this.db){this.ao()
if(this===u.globalState.e)throw o}}finally{this.cy=H.ls(r)
u.globalState.d=H.js(t,"$isaD")
if(t!=null)$=t.gdI()
if(this.cx!=null)for(;n=this.cx,!n.gae(n);)this.cx.bQ().$0()}return s},
bM:function(a){return this.b.h(0,a)},
cS:function(a,b){var t=this.b
if(t.G(0,a))throw H.b(P.bC("Registry: ports must be registered only once."))
t.j(0,a,b)},
aE:function(){var t=this.b
if(t.gi(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.ao()},
ao:function(){var t,s,r
t=this.cx
if(t!=null)t.N(0)
for(t=this.b,s=t.gc4(t),s=s.gv(s);s.p();)s.gq(s).cT()
t.N(0)
this.c.N(0)
u.globalState.z.af(0,this.a)
this.dx.N(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].E(0,t[r+1])
this.ch=null}},
gdI:function(){return this.d},
gdh:function(){return this.e}}
H.fK.prototype={
$0:function(){this.a.E(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.fF.prototype={
dm:function(){var t=this.a
if(t.b===t.c)return
return t.bQ()},
bR:function(){var t,s,r
t=this.dm()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gae(s)}else s=!1
else s=!1
else s=!1
if(s)H.C(P.bC("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gae(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ai(["command","close"])
r=new H.S(!0,P.aE(null,P.v)).F(r)
s.toString
self.postMessage(r)}return!1}t.dM()
return!0},
bg:function(){if(self.window!=null)new H.fG(this).$0()
else for(;this.bR(););},
ag:function(){var t,s,r,q,p
if(!u.globalState.x)this.bg()
else try{this.bg()}catch(r){t=H.a9(r)
s=H.hd(r)
q=u.globalState.Q
p=P.ai(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.S(!0,P.aE(null,P.v)).F(p)
q.toString
self.postMessage(p)}}}
H.fG.prototype={
$0:function(){if(!this.a.bR())return
P.l2(C.t,this)},
$S:function(){return{func:1,v:true}}}
H.ao.prototype={
dM:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ab(this.b)}}
H.fP.prototype={}
H.e4.prototype={
$0:function(){H.kH(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.e5.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.cZ(s,{func:1,args:[P.H,P.H]}))s.$2(this.e,this.d)
else if(H.cZ(s,{func:1,args:[P.H]}))s.$1(this.e)
else s.$0()}t.aE()},
$S:function(){return{func:1,v:true}}}
H.fB.prototype={}
H.aF.prototype={
E:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lf(b)
if(t.gdh()===s){s=J.U(r)
switch(s.h(r,0)){case"pause":t.bl(s.h(r,1),s.h(r,2))
break
case"resume":t.dP(s.h(r,1))
break
case"add-ondone":t.d9(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.dO(s.h(r,1))
break
case"set-errors-fatal":t.ck(s.h(r,1),s.h(r,2))
break
case"ping":t.dD(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dC(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.af(0,s)
break}return}u.globalState.f.a.L(0,new H.ao(t,new H.fR(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aF){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.fR.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.cR(0,this.b)},
$S:function(){return{func:1}}}
H.bm.prototype={
E:function(a,b){var t,s,r
t=P.ai(["command","message","port",this,"msg",b])
s=new H.S(!0,P.aE(null,P.v)).F(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bm){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.cu((this.b<<16^this.a<<8)>>>0,this.c)}}
H.c0.prototype={
cT:function(){this.c=!0
this.b=null},
cR:function(a,b){if(this.c)return
this.b.$1(b)},
$iskU:1}
H.fc.prototype={
cJ:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.L(0,new H.ao(s,new H.fd(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.ha()
this.c=self.setTimeout(H.h6(new H.fe(this,b),0),a)}else{H.d(a>0)
throw H.b(P.r("Timer greater than 0."))}}}
H.fd.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fe.prototype={
$0:function(){var t=this.a
t.c=null
H.ho()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ab.prototype={
gu:function(a){var t=this.a
t=C.b.aD(t,0)^C.b.S(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ab){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.S.prototype={
F:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gi(t))
t=J.u(a)
if(!!t.$isb1)return["buffer",a]
if(!!t.$isaA)return["typed",a]
if(!!t.$ism)return this.cf(a)
if(!!t.$iskE){r=this.gcc()
q=t.gC(a)
q=H.hQ(q,r,H.V(q,"G",0),null)
q=P.iI(q,!0,H.V(q,"G",0))
t=t.gc4(a)
t=H.hQ(t,r,H.V(t,"G",0),null)
return["map",q,P.iI(t,!0,H.V(t,"G",0))]}if(!!t.$isiH)return this.cg(a)
if(!!t.$isa)this.c2(a)
if(!!t.$iskU)this.ah(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isaF)return this.ci(a)
if(!!t.$isbm)return this.cj(a)
if(!!t.$isad){p=a.$static_name
if(p==null)this.ah(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isab)return["capability",a.a]
if(!(a instanceof P.A))this.c2(a)
return["dart",u.classIdExtractor(a),this.ce(u.classFieldsExtractor(a))]},
ah:function(a,b){throw H.b(P.r((b==null?"Can't transmit:":b)+" "+H.e(a)))},
c2:function(a){return this.ah(a,null)},
cf:function(a){var t
H.d(typeof a!=="string")
t=this.cd(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ah(a,"Can't serialize indexable: ")},
cd:function(a){var t,s
t=[]
C.a.si(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.F(a[s])
return t},
ce:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.F(a[t]))
return a},
cg:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ah(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.si(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.F(a[t[r]])
return["js-object",t,s]},
cj:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
ci:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.an.prototype={
O:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.b(P.it("Bad serialized message: "+H.e(a)))
switch(C.a.gdz(a)){case"ref":H.d(J.y(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.y(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.y(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.y(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.a3(H.x(this.aa(t),[null]))
case"extendable":H.d(J.y(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.x(this.aa(t),[null])
case"mutable":H.d(J.y(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.aa(t)
case"const":H.d(J.y(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.a3(H.x(this.aa(t),[null]))
case"map":return this.dr(a)
case"sendport":return this.ds(a)
case"raw sendport":H.d(J.y(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dq(a)
case"function":H.d(J.y(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.y(a[0],"capability"))
return new H.ab(a[1])
case"dart":H.d(J.y(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.aa(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.b("couldn't deserialize: "+H.e(a))}},
aa:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.O(a[t]))
return a},
dr:function(a){var t,s,r,q,p
H.d(J.y(a[0],"map"))
t=a[1]
s=a[2]
r=P.a5()
C.a.l(this.b,r)
t=J.k7(t,this.gdn()).dT(0)
for(q=J.U(s),p=0;p<t.length;++p)r.j(0,t[p],this.O(q.h(s,p)))
return r},
ds:function(a){var t,s,r,q,p,o,n
H.d(J.y(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bM(r)
if(o==null)return
n=new H.aF(o,s)}else n=new H.bm(t,r,s)
C.a.l(this.b,n)
return n},
dq:function(a){var t,s,r,q,p,o
H.d(J.y(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.U(t),p=J.U(s),o=0;C.b.R(o,q.gi(t));++o)r[q.h(t,o)]=this.O(p.h(s,o))
return r}}
H.eO.prototype={}
H.fi.prototype={
J:function(a){var t,s,r
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
H.eC.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.ec.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.fn.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.hu.prototype={
$1:function(a){if(!!J.u(a).$isaV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.cD.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.hj.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.hk.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.hl.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.hm.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.hn.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ad.prototype={
k:function(a){return"Closure '"+H.b3(this).trim()+"'"},
$ishH:1,
gdY:function(){return this},
$D:null}
H.f6.prototype={}
H.f_.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.aQ.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.aQ))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.ak(this.a)
else s=typeof t!=="object"?J.aN(t):H.ak(t)
return(s^H.ak(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.b3(t)+"'")}}
H.fk.prototype={
k:function(a){return this.a}}
H.dc.prototype={
k:function(a){return this.a}}
H.eS.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.fv.prototype={
k:function(a){return C.f.T("Assertion failed: ",P.bB(this.a))}}
H.al.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.aN(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.al){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a4.prototype={
gi:function(a){return this.a},
gae:function(a){return this.a===0},
gC:function(a){return new H.ef(this,[H.aK(this,0)])},
gc4:function(a){return H.hQ(this.gC(this),new H.eb(this),H.aK(this,0),H.aK(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.ba(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.ba(s,b)}else return this.dF(b)},
dF:function(a){var t=this.d
if(t==null)return!1
return this.ad(this.am(t,this.ac(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a8(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a8(r,b)
return s==null?null:s.b}else return this.dG(b)},
dG:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.am(t,this.ac(a))
r=this.ad(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.az()
this.b=t}this.b6(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.az()
this.c=s}this.b6(s,b,c)}else{r=this.d
if(r==null){r=this.az()
this.d=r}q=this.ac(b)
p=this.am(r,q)
if(p==null)this.aC(r,q,[this.aA(b,c)])
else{o=this.ad(p,b)
if(o>=0)p[o].b=c
else p.push(this.aA(b,c))}}},
af:function(a,b){if(typeof b==="string")return this.bf(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bf(this.c,b)
else return this.dH(b)},
dH:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.am(t,this.ac(a))
r=this.ad(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bj(q)
return q.b},
N:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.ay()}},
Z:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.b(P.a1(this))
t=t.c}},
b6:function(a,b,c){var t=this.a8(a,b)
if(t==null)this.aC(a,b,this.aA(b,c))
else t.b=c},
bf:function(a,b){var t
if(a==null)return
t=this.a8(a,b)
if(t==null)return
this.bj(t)
this.bb(a,b)
return t.b},
ay:function(){this.r=this.r+1&67108863},
aA:function(a,b){var t,s
t=new H.ee(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.ay()
return t},
bj:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.ay()},
ac:function(a){return J.aN(a)&0x3ffffff},
ad:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.y(a[s].a,b))return s
return-1},
k:function(a){return P.iJ(this)},
a8:function(a,b){return a[b]},
am:function(a,b){return a[b]},
aC:function(a,b,c){H.d(c!=null)
a[b]=c},
bb:function(a,b){delete a[b]},
ba:function(a,b){return this.a8(a,b)!=null},
az:function(){var t=Object.create(null)
this.aC(t,"<non-identifier-key>",t)
this.bb(t,"<non-identifier-key>")
return t},
$iskE:1}
H.eb.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.ee.prototype={}
H.ef.prototype={
gi:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eg(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eg.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.b(P.a1(t))
else{t=this.c
if(t==null){this.sb5(null)
return!1}else{this.sb5(t.a)
this.c=this.c.c
return!0}}},
sb5:function(a){this.d=a}}
H.hf.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.hg.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.hh.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.b1.prototype={
gw:function(a){return C.a8},
$isb1:1}
H.aA.prototype={$isaA:1}
H.es.prototype={
gw:function(a){return C.a9}}
H.bR.prototype={
gi:function(a){return a.length},
$ism:1,
$asm:function(){},
$isp:1,
$asp:function(){}}
H.bS.prototype={
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
j:function(a,b,c){H.a0(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.M]},
$asaw:function(){return[P.M]},
$ask:function(){return[P.M]},
$isf:1,
$asf:function(){return[P.M]}}
H.bT.prototype={
j:function(a,b,c){H.a0(b,a,a.length)
a[b]=c},
$isj:1,
$asj:function(){return[P.v]},
$asaw:function(){return[P.v]},
$ask:function(){return[P.v]},
$isf:1,
$asf:function(){return[P.v]}}
H.bQ.prototype={
gw:function(a){return C.aa}}
H.et.prototype={
gw:function(a){return C.ab}}
H.eu.prototype={
gw:function(a){return C.ac},
h:function(a,b){H.a0(b,a,a.length)
return a[b]}}
H.ev.prototype={
gw:function(a){return C.ad},
h:function(a,b){H.a0(b,a,a.length)
return a[b]}}
H.ew.prototype={
gw:function(a){return C.ae},
h:function(a,b){H.a0(b,a,a.length)
return a[b]}}
H.ex.prototype={
gw:function(a){return C.ai},
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
$isj3:1}
H.ey.prototype={
gw:function(a){return C.aj},
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
$isj4:1}
H.bU.prototype={
gw:function(a){return C.ak},
gi:function(a){return a.length},
h:function(a,b){H.a0(b,a,a.length)
return a[b]}}
H.ez.prototype={
gw:function(a){return C.al},
gi:function(a){return a.length},
h:function(a,b){H.a0(b,a,a.length)
return a[b]},
$isj5:1}
H.bd.prototype={}
H.be.prototype={}
H.bf.prototype={}
H.bg.prototype={}
P.fx.prototype={
$1:function(a){var t,s
H.ho()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.fw.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null)
H.ha()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.fy.prototype={
$0:function(){H.ho()
this.a.$0()},
$S:function(){return{func:1}}}
P.fz.prototype={
$0:function(){H.ho()
this.a.$0()},
$S:function(){return{func:1}}}
P.ce.prototype={}
P.hT.prototype={}
P.h3.prototype={}
P.h5.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bY()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.b(t)
r=H.b(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.fT.prototype={
dQ:function(a){var t,s,r
try{if(C.n===$.aC){a.$0()
return}P.lk(null,null,this,a)}catch(r){t=H.a9(r)
s=H.hd(r)
P.lj(null,null,this,t,s)}},
df:function(a){return new P.fU(this,a)},
h:function(a,b){return}}
P.fU.prototype={
$0:function(){return this.a.dQ(this.b)},
$S:function(){return{func:1}}}
P.fN.prototype={
ac:function(a){return H.lK(a)&0x3ffffff},
ad:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.fL.prototype={
gv:function(a){var t=new P.bb(this,this.r,null,null,[null])
t.c=this.e
return t},
gi:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.cU(b)},
cU:function(a){var t=this.d
if(t==null)return!1
return this.al(t[this.ak(a)],a)>=0},
bM:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.d0(a)},
d0:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ak(a)]
r=this.al(s,a)
if(r<0)return
return J.aM(s,r).gcW()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.i1()
this.b=t}return this.b7(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.i1()
this.c=s}return this.b7(s,b)}else return this.L(0,b)},
L:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.i1()
this.d=t}s=this.ak(b)
r=t[s]
if(r==null){q=[this.au(b)]
H.d(q!=null)
t[s]=q}else{if(this.al(r,b)>=0)return!1
r.push(this.au(b))}return!0},
af:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.b8(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.b8(this.c,b)
else return this.d1(0,b)},
d1:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ak(b)]
r=this.al(s,b)
if(r<0)return!1
this.b9(s.splice(r,1)[0])
return!0},
N:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.at()}},
b7:function(a,b){var t
if(a[b]!=null)return!1
t=this.au(b)
H.d(!0)
a[b]=t
return!0},
b8:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.b9(t)
delete a[b]
return!0},
at:function(){this.r=this.r+1&67108863},
au:function(a){var t,s
t=new P.fM(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.at()
return t},
b9:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.at()},
ak:function(a){return J.aN(a)&0x3ffffff},
al:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.y(a[s].a,b))return s
return-1}}
P.fM.prototype={
gcW:function(){return this.a}}
P.bb.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.b(P.a1(t))
else{t=this.c
if(t==null){this.sa6(null)
return!1}else{this.sa6(t.a)
this.c=this.c.b
return!0}}},
sa6:function(a){this.d=a}}
P.fJ.prototype={}
P.hN.prototype={$isj:1}
P.bL.prototype={$isj:1,$isf:1}
P.k.prototype={
gv:function(a){return new H.bM(a,this.gi(a),0,null,[H.V(a,"k",0)])},
t:function(a,b){return this.h(a,b)},
bN:function(a,b){return new H.b_(a,b,[H.V(a,"k",0),null])},
dA:function(a,b,c){var t,s,r,q
t=this.gi(a)
for(s=b,r=0;C.b.R(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gi(a)
if(t==null?q!=null:t!==q)throw H.b(P.a1(a))}return s},
k:function(a){return P.e6(a,"[","]")}}
P.bN.prototype={}
P.ek.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.az.prototype={
Z:function(a,b){var t,s
for(t=J.at(this.gC(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gi:function(a){return J.aO(this.gC(a))},
k:function(a){return P.iJ(a)}}
P.eh.prototype={
cG:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbh(H.x(t,[b]))},
gv:function(a){return new P.fO(this,this.c,this.d,this.b,null,this.$ti)},
gae:function(a){return this.b===this.c},
gi:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=this.gi(this)
if(C.b.K(0,b)||b>=t)H.C(P.w(b,this,"index",null,t))
return this.a[(C.b.T(this.b,b)&this.a.length-1)>>>0]},
N:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.e6(this,"{","}")},
bQ:function(){var t,s,r
t=this.b
if(t===this.c)throw H.b(H.e7());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
L:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bd();++this.d},
bd:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.x(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.aU(s,0,q,t,r)
C.a.aU(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbh(s)},
sbh:function(a){this.a=a}}
P.fO.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.C(P.a1(t))
s=this.d
if(s===this.b){this.sa6(null)
return!1}this.sa6(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa6:function(a){this.e=a}}
P.eV.prototype={
H:function(a,b){var t
for(t=J.at(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.e6(this,"{","}")},
$isj:1}
P.eU.prototype={}
P.bc.prototype={}
P.ar.prototype={}
P.z.prototype={}
P.aS.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aS))return!1
return this.a===b.a&&this.b===b.b},
Y:function(a,b){return C.b.Y(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aD(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.kt(H.kT(this))
s=P.bv(H.kR(this))
r=P.bv(H.kN(this))
q=P.bv(H.kO(this))
p=P.bv(H.kQ(this))
o=P.bv(H.kS(this))
n=P.ku(H.kP(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isz:1,
$asz:function(){return[P.aS]}}
P.M.prototype={}
P.ae.prototype={
R:function(a,b){return C.b.R(this.a,b.gcV())},
K:function(a,b){return C.b.K(this.a,b.gcV())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.ae))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
Y:function(a,b){return C.b.Y(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dw()
s=this.a
if(s<0)return"-"+new P.ae(0-s).k(0)
r=t.$1(C.b.S(s,6e7)%60)
q=t.$1(C.b.S(s,1e6)%60)
p=new P.dv().$1(s%1e6)
return""+C.b.S(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isz:1,
$asz:function(){return[P.ae]}}
P.dv.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.v]}}}
P.dw.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.v]}}}
P.aV.prototype={}
P.bs.prototype={
k:function(a){return"Assertion failed"}}
P.bY.prototype={
k:function(a){return"Throw of null."}}
P.N.prototype={
gaw:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gav:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaw()+s+r
if(!this.a)return q
p=this.gav()
o=P.bB(this.b)
return q+p+": "+H.e(o)}}
P.c_.prototype={
gaw:function(){return"RangeError"},
gav:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.e3.prototype={
gaw:function(){return"RangeError"},
gav:function(){H.d(this.a)
if(J.jz(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gi:function(a){return this.f}}
P.fo.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.fm.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aB.prototype={
k:function(a){return"Bad state: "+this.a}}
P.de.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.bB(t))+"."}}
P.c5.prototype={
k:function(a){return"Stack Overflow"},
$isaV:1}
P.dn.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hG.prototype={}
P.fH.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.dz.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.C(P.hD(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.iL(b,"expando$values")
return s==null?null:H.iL(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.v.prototype={}
P.G.prototype={
ap:function(a,b){return new H.cd(this,b,[H.V(this,"G",0)])},
gi:function(a){var t,s
H.d(!this.$isj)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
gU:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.b(H.e7())
s=t.gq(t)
if(t.p())throw H.b(H.kM())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.b(P.kl("index"))
if(b<0)H.C(P.b4(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.b(P.w(b,this,"index",null,s))},
k:function(a){return P.kK(this,"(",")")}}
P.bJ.prototype={}
P.f.prototype={$isj:1}
P.ay.prototype={}
P.H.prototype={
gu:function(a){return P.A.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.a8.prototype={$isz:1,
$asz:function(){return[P.a8]}}
P.A.prototype={constructor:P.A,$isA:1,
A:function(a,b){return this===b},
gu:function(a){return H.ak(this)},
k:function(a){return"Instance of '"+H.b3(this)+"'"},
gw:function(a){return new H.al(H.i7(this),null)},
toString:function(){return this.k(this)}}
P.n.prototype={$isz:1,
$asz:function(){return[P.n]}}
P.b6.prototype={
gi:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gV:function(){return this.a}}
P.hW.prototype={}
W.i.prototype={}
W.br.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.d5.prototype={
gi:function(a){return a.length}}
W.d6.prototype={
k:function(a){return String(a)}}
W.d7.prototype={
k:function(a){return String(a)}}
W.aa.prototype={$isaa:1}
W.bt.prototype={
ca:function(a,b,c){var t=this.cX(a,b,P.lt(c,null))
return t},
cX:function(a,b,c){return a.getContext(b,c)}}
W.db.prototype={
aq:function(a){return P.h8(a.getContextAttributes())}}
W.ac.prototype={
gi:function(a){return a.length}}
W.df.prototype={
gi:function(a){return a.length}}
W.dg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.di.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.aR.prototype={
gi:function(a){return a.length}}
W.dj.prototype={}
W.O.prototype={}
W.av.prototype={}
W.dk.prototype={
gi:function(a){return a.length}}
W.dl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dm.prototype={
gi:function(a){return a.length}}
W.dp.prototype={
h:function(a,b){return a[b]},
gi:function(a){return a.length}}
W.dq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bw.prototype={}
W.aT.prototype={
da:function(a,b){return a.adoptNode(b)},
bO:function(a,b){return a.querySelector(b)}}
W.dr.prototype={
k:function(a){return String(a)}}
W.bx.prototype={
dk:function(a,b){return a.createHTMLDocument(b)}}
W.ds.prototype={
gc8:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.by.prototype={
gc8:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bz.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.I]},
$isj:1,
$asj:function(){return[P.I]},
$isp:1,
$asp:function(){return[P.I]},
$ask:function(){return[P.I]},
$isf:1,
$asf:function(){return[P.I]},
$asl:function(){return[P.I]}}
W.bA.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga0(a))+" x "+H.e(this.ga_(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isI)return!1
return a.left===b.left&&a.top===b.top&&this.ga0(a)===t.ga0(b)&&this.ga_(a)===t.ga_(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga0(a)
q=this.ga_(a)
return W.jb(W.ap(W.ap(W.ap(W.ap(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga_:function(a){return a.height},
ga0:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isI:1,
$asI:function(){}}
W.dt.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.n]},
$isj:1,
$asj:function(){return[P.n]},
$isp:1,
$asp:function(){return[P.n]},
$ask:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$asl:function(){return[P.n]}}
W.du.prototype={
gi:function(a){return a.length}}
W.P.prototype={
gdd:function(a){return new W.fE(a)},
k:function(a){return a.localName},
I:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.iB
if(t==null){t=H.x([],[W.bW])
s=new W.bX(t)
C.a.l(t,W.j8(null))
C.a.l(t,W.jc())
$.iB=s
d=s}else d=t
t=$.iA
if(t==null){t=new W.cN(d)
$.iA=t
c=t}else{t.a=d
c=t}}if($.a2==null){t=document
s=t.implementation
s=(s&&C.F).dk(s,"")
$.a2=s
$.hF=s.createRange()
s=$.a2
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.a2.head;(t&&C.G).X(t,r)}t=$.a2
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.js(s,"$isaa")}t=$.a2
if(!!this.$isaa)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.a2.body;(t&&C.m).X(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.Q,a.tagName)){t=$.hF;(t&&C.y).cb(t,q)
t=$.hF
p=(t&&C.y).di(t,b)}else{q.innerHTML=b
p=$.a2.createDocumentFragment()
for(t=J.h(p);s=q.firstChild,s!=null;)t.X(p,s)}t=$.a2.body
if(q==null?t!=null:q!==t)J.im(q)
c.aS(p)
C.o.da(document,p)
return p},
dj:function(a,b,c){return this.I(a,b,c,null)},
cl:function(a,b,c,d){a.textContent=null
this.X(a,this.I(a,b,c,d))},
a2:function(a,b){return this.cl(a,b,null,null)},
a1:function(a,b){return a.getAttribute(b)},
d2:function(a,b){return a.removeAttribute(b)},
$isP:1,
gdR:function(a){return a.tagName}}
W.dy.prototype={
$1:function(a){return!!J.u(a).$isP},
$S:function(a){return{func:1,args:[,]}}}
W.c.prototype={}
W.dT.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.bD]},
$isj:1,
$asj:function(){return[W.bD]},
$isp:1,
$asp:function(){return[W.bD]},
$ask:function(){return[W.bD]},
$isf:1,
$asf:function(){return[W.bD]},
$asl:function(){return[W.bD]}}
W.dU.prototype={
gi:function(a){return a.length}}
W.dX.prototype={
gi:function(a){return a.length}}
W.e_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bH.prototype={}
W.e0.prototype={
gi:function(a){return a.length}}
W.aW.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.o]},
$isj:1,
$asj:function(){return[W.o]},
$isp:1,
$asp:function(){return[W.o]},
$ask:function(){return[W.o]},
$isf:1,
$asf:function(){return[W.o]},
$asl:function(){return[W.o]}}
W.bI.prototype={}
W.e1.prototype={
E:function(a,b){return a.send(b)}}
W.aX.prototype={}
W.ei.prototype={
k:function(a){return String(a)}}
W.ej.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.en.prototype={
gi:function(a){return a.length}}
W.ep.prototype={
dZ:function(a,b,c){return a.send(b,c)},
E:function(a,b){return a.send(b)}}
W.b0.prototype={}
W.eq.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.bP]},
$isj:1,
$asj:function(){return[W.bP]},
$isp:1,
$asp:function(){return[W.bP]},
$ask:function(){return[W.bP]},
$isf:1,
$asf:function(){return[W.bP]},
$asl:function(){return[W.bP]}}
W.E.prototype={
gU:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.b(P.iQ("No elements"))
if(s>1)throw H.b(P.iQ("More than one element"))
return t.firstChild},
H:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.h(s),p=0;p<r;++p)q.X(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.jB(t,c,C.w.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.bE(t,t.length,-1,null,[H.V(t,"l",0)])},
gi:function(a){return this.a.childNodes.length},
h:function(a,b){return C.w.h(this.a.childNodes,b)},
$asj:function(){return[W.o]},
$asbL:function(){return[W.o]},
$ask:function(){return[W.o]},
$asf:function(){return[W.o]},
$asbc:function(){return[W.o]}}
W.o.prototype={
dN:function(a){var t=a.parentNode
if(t!=null)J.hv(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cq(a):t},
X:function(a,b){return a.appendChild(b)},
d3:function(a,b){return a.removeChild(b)},
d4:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
gaH:function(a){return a.previousSibling}}
W.bV.prototype={
aI:function(a){return a.previousNode()}}
W.b2.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.o]},
$isj:1,
$asj:function(){return[W.o]},
$isp:1,
$asp:function(){return[W.o]},
$ask:function(){return[W.o]},
$isf:1,
$asf:function(){return[W.o]},
$asl:function(){return[W.o]}}
W.Y.prototype={
gi:function(a){return a.length}}
W.eH.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.Y]},
$isj:1,
$asj:function(){return[W.Y]},
$isp:1,
$asp:function(){return[W.Y]},
$ask:function(){return[W.Y]},
$isf:1,
$asf:function(){return[W.Y]},
$asl:function(){return[W.Y]}}
W.eK.prototype={
E:function(a,b){return a.send(b)}}
W.bZ.prototype={
di:function(a,b){return a.createContextualFragment(b)},
cb:function(a,b){return a.selectNodeContents(b)}}
W.c1.prototype={
E:function(a,b){return a.send(b)}}
W.eT.prototype={
gi:function(a){return a.length}}
W.a6.prototype={}
W.eX.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.c3]},
$isj:1,
$asj:function(){return[W.c3]},
$isp:1,
$asp:function(){return[W.c3]},
$ask:function(){return[W.c3]},
$isf:1,
$asf:function(){return[W.c3]},
$asl:function(){return[W.c3]}}
W.eY.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.c4]},
$isj:1,
$asj:function(){return[W.c4]},
$isp:1,
$asp:function(){return[W.c4]},
$ask:function(){return[W.c4]},
$isf:1,
$asf:function(){return[W.c4]},
$asl:function(){return[W.c4]}}
W.Z.prototype={
gi:function(a){return a.length}}
W.f0.prototype={
h:function(a,b){return this.bc(a,b)},
Z:function(a,b){var t,s
for(t=0;!0;++t){s=this.d_(a,t)
if(s==null)return
b.$2(s,this.bc(a,s))}},
gC:function(a){var t=H.x([],[P.n])
this.Z(a,new W.f1(t))
return t},
gi:function(a){return a.length},
bc:function(a,b){return a.getItem(b)},
d_:function(a,b){return a.key(b)},
$asaz:function(){return[P.n,P.n]}}
W.f1.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.c7.prototype={
I:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
t=W.kw("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.E(s).H(0,new W.E(t))
return s}}
W.f4.prototype={
I:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.D.I(t.createElement("table"),b,c,d)
t.toString
t=new W.E(t)
r=t.gU(t)
r.toString
t=new W.E(r)
q=t.gU(t)
s.toString
q.toString
new W.E(s).H(0,new W.E(q))
return s}}
W.f5.prototype={
I:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.ar(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.D.I(t.createElement("table"),b,c,d)
t.toString
t=new W.E(t)
r=t.gU(t)
s.toString
r.toString
new W.E(s).H(0,new W.E(r))
return s}}
W.b7.prototype={$isb7:1}
W.f7.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.c9]},
$isj:1,
$asj:function(){return[W.c9]},
$isp:1,
$asp:function(){return[W.c9]},
$ask:function(){return[W.c9]},
$isf:1,
$asf:function(){return[W.c9]},
$asl:function(){return[W.c9]}}
W.f8.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.c8]},
$isj:1,
$asj:function(){return[W.c8]},
$isp:1,
$asp:function(){return[W.c8]},
$ask:function(){return[W.c8]},
$isf:1,
$asf:function(){return[W.c8]},
$asl:function(){return[W.c8]}}
W.fb.prototype={
gi:function(a){return a.length}}
W.ff.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.ca]},
$isj:1,
$asj:function(){return[W.ca]},
$isp:1,
$asp:function(){return[W.ca]},
$ask:function(){return[W.ca]},
$isf:1,
$asf:function(){return[W.ca]},
$asl:function(){return[W.ca]}}
W.fg.prototype={
gi:function(a){return a.length}}
W.cb.prototype={
aI:function(a){return a.previousNode()}}
W.fp.prototype={
k:function(a){return String(a)}}
W.fr.prototype={
gm:function(a){return a.x},
gD:function(a){return a.z}}
W.fs.prototype={
gi:function(a){return a.length}}
W.ft.prototype={
E:function(a,b){return a.send(b)}}
W.hZ.prototype={}
W.fC.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.bu]},
$isj:1,
$asj:function(){return[W.bu]},
$isp:1,
$asp:function(){return[W.bu]},
$ask:function(){return[W.bu]},
$isf:1,
$asf:function(){return[W.bu]},
$asl:function(){return[W.bu]}}
W.fD.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
A:function(a,b){var t
if(b==null)return!1
t=J.u(b)
if(!t.$isI)return!1
return a.left===b.left&&a.top===b.top&&a.width===t.ga0(b)&&a.height===t.ga_(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.jb(W.ap(W.ap(W.ap(W.ap(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga_:function(a){return a.height},
ga0:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fI.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.bG]},
$isj:1,
$asj:function(){return[W.bG]},
$isp:1,
$asp:function(){return[W.bG]},
$ask:function(){return[W.bG]},
$isf:1,
$asf:function(){return[W.bG]},
$asl:function(){return[W.bG]}}
W.cs.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.o]},
$isj:1,
$asj:function(){return[W.o]},
$isp:1,
$asp:function(){return[W.o]},
$ask:function(){return[W.o]},
$isf:1,
$asf:function(){return[W.o]},
$asl:function(){return[W.o]}}
W.fY.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.Z]},
$isj:1,
$asj:function(){return[W.Z]},
$isp:1,
$asp:function(){return[W.Z]},
$ask:function(){return[W.Z]},
$isf:1,
$asf:function(){return[W.Z]},
$asl:function(){return[W.Z]}}
W.fZ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.c6]},
$isj:1,
$asj:function(){return[W.c6]},
$isp:1,
$asp:function(){return[W.c6]},
$ask:function(){return[W.c6]},
$isf:1,
$asf:function(){return[W.c6]},
$asl:function(){return[W.c6]}}
W.fA.prototype={
Z:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.h(r),p=0;p<t.length;t.length===s||(0,H.d1)(t),++p){o=t[p]
b.$2(o,q.a1(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.x([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$asbN:function(){return[P.n,P.n]},
$asaz:function(){return[P.n,P.n]},
gcY:function(){return this.a}}
W.fE.prototype={
h:function(a,b){return J.hB(this.a,b)},
gi:function(a){return this.gC(this).length}}
W.ba.prototype={
cO:function(a){var t,s
t=$.$get$i0()
if(t.gae(t)){for(s=0;s<262;++s)t.j(0,C.P[s],W.lz())
for(s=0;s<12;++s)t.j(0,C.q[s],W.lA())}},
W:function(a){return $.$get$j9().B(0,W.aU(a))},
M:function(a,b,c){var t,s,r
t=W.aU(a)
s=$.$get$i0()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.l.prototype={
gv:function(a){return new W.bE(a,this.gi(a),-1,null,[H.V(a,"l",0)])}}
W.bX.prototype={
W:function(a){return C.a.bm(this.a,new W.eB(a))},
M:function(a,b,c){return C.a.bm(this.a,new W.eA(a,b,c))}}
W.eB.prototype={
$1:function(a){return a.W(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.eA.prototype={
$1:function(a){return a.M(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bh.prototype={
cQ:function(a,b,c,d){var t,s,r
this.a.H(0,c)
t=b.ap(0,new W.fW())
s=b.ap(0,new W.fX())
this.b.H(0,t)
r=this.c
r.H(0,C.R)
r.H(0,s)},
W:function(a){return this.a.B(0,W.aU(a))},
M:function(a,b,c){var t,s
t=W.aU(a)
s=this.c
if(s.B(0,H.e(t)+"::"+b))return this.d.dc(c)
else if(s.B(0,"*::"+b))return this.d.dc(c)
else{s=this.b
if(s.B(0,H.e(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.e(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1}}
W.fW.prototype={
$1:function(a){return!C.a.B(C.q,a)},
$S:function(a){return{func:1,args:[,]}}}
W.fX.prototype={
$1:function(a){return C.a.B(C.q,a)},
$S:function(a){return{func:1,args:[,]}}}
W.h0.prototype={
M:function(a,b,c){if(this.ct(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.hB(a,"template")==="")return this.e.B(0,b)
return!1}}
W.h1.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.h_.prototype={
W:function(a){var t=J.u(a)
if(!!t.$isb5)return!1
t=!!t.$isq
if(t&&W.aU(a)==="foreignObject")return!1
if(t)return!0
return!1},
M:function(a,b,c){if(b==="is"||C.f.aW(b,"on"))return!1
return this.W(a)}}
W.bE.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbe(J.aM(this.a,t))
this.c=t
return!0}this.sbe(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbe:function(a){this.d=a}}
W.bW.prototype={}
W.hR.prototype={}
W.hY.prototype={}
W.fV.prototype={}
W.cN.prototype={
aS:function(a){new W.h2(this).$2(a,null)},
a9:function(a,b){if(b==null)J.im(a)
else J.hv(b,a)},
d6:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.jX(a)
r=J.hB(s.gcY(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.a9(n)}p="element unprintable"
try{p=J.aP(a)}catch(n){H.a9(n)}try{o=W.aU(a)
this.d5(a,b,t,p,o,s,r)}catch(n){if(H.a9(n) instanceof P.N)throw n
else{this.a9(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
d5:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.a9(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.W(a)){this.a9(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.M(a,"is",g)){this.a9(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gC(f)
s=H.x(t.slice(0),[H.aK(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.h(t);r>=0;--r){p=s[r]
if(!this.a.M(a,J.kc(p),q.a1(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a1(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a1(t,p)
q.d2(t,p)}}if(!!J.u(a).$isb7)this.aS(a.content)}}
W.h2.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.d6(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.a9(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.jY(t)}catch(q){H.a9(q)
r=t
J.hv(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.o,W.o]}}}
W.cf.prototype={}
W.cg.prototype={}
W.ch.prototype={}
W.ci.prototype={}
W.cj.prototype={}
W.ck.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.cn.prototype={}
W.cq.prototype={}
W.cr.prototype={}
W.ct.prototype={}
W.cu.prototype={}
W.cx.prototype={}
W.cy.prototype={}
W.bi.prototype={}
W.bj.prototype={}
W.cz.prototype={}
W.cA.prototype={}
W.cE.prototype={}
W.cH.prototype={}
W.cI.prototype={}
W.bk.prototype={}
W.bl.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cX.prototype={}
P.h7.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.fS.prototype={}
P.I.prototype={}
P.dA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dG.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
P.dQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.Q.prototype={}
P.X.prototype={}
P.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ed.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return this.P(a,b)},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.hM]},
$ask:function(){return[P.hM]},
$isf:1,
$asf:function(){return[P.hM]},
$asl:function(){return[P.hM]}}
P.em.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return this.P(a,b)},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.hS]},
$ask:function(){return[P.hS]},
$isf:1,
$asf:function(){return[P.hS]},
$asl:function(){return[P.hS]}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eJ.prototype={
gi:function(a){return a.length}}
P.eM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.b5.prototype={$isb5:1}
P.f2.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return this.P(a,b)},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.n]},
$ask:function(){return[P.n]},
$isf:1,
$asf:function(){return[P.n]},
$asl:function(){return[P.n]}}
P.q.prototype={
I:function(a,b,c,d){var t,s,r,q,p,o
t=H.x([],[W.bW])
C.a.l(t,W.j8(null))
C.a.l(t,W.jc())
C.a.l(t,new W.h_())
c=new W.cN(new W.bX(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.m).dj(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.E(q)
o=t.gU(t)
for(t=J.h(p);r=o.firstChild,r!=null;)t.X(p,r)
return p},
$isq:1}
P.f3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.b8.prototype={}
P.b9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return this.P(a,b)},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
P:function(a,b){return a.getItem(b)},
$isj:1,
$asj:function(){return[P.hV]},
$ask:function(){return[P.hV]},
$isf:1,
$asf:function(){return[P.hV]},
$asl:function(){return[P.hV]}}
P.fq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.co.prototype={}
P.cp.prototype={}
P.cv.prototype={}
P.cw.prototype={}
P.cF.prototype={}
P.cG.prototype={}
P.cL.prototype={}
P.cM.prototype={}
P.d9.prototype={
gi:function(a){return a.length}}
P.da.prototype={
gi:function(a){return a.length}}
P.au.prototype={}
P.eE.prototype={
gi:function(a){return a.length}}
P.eQ.prototype={
bk:function(a,b){return a.activeTexture(b)},
bn:function(a,b,c){return a.attachShader(b,c)},
bo:function(a,b,c){return a.bindBuffer(b,c)},
bp:function(a,b,c){return a.bindFramebuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bu:function(a,b){return a.checkFramebufferStatus(b)},
bv:function(a,b){return a.clear(b)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createFramebuffer()},
bA:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bD:function(a,b){return a.depthMask(b)},
bE:function(a,b){return a.disable(b)},
bF:function(a,b,c,d){return a.drawArrays(b,c,d)},
bG:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bH:function(a,b){return a.enable(b)},
bI:function(a,b){return a.enableVertexAttribArray(b)},
bK:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aq:function(a){return P.h8(a.getContextAttributes())},
aK:function(a){return a.getError()},
aL:function(a,b){return a.getExtension(b)},
aM:function(a,b){return a.getParameter(b)},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aB:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bS:function(a,b,c,d){return a.texParameterf(b,c,d)},
bT:function(a,b,c,d){return a.texParameteri(b,c,d)},
bU:function(a,b,c){return a.uniform1f(b,c)},
bV:function(a,b,c){return a.uniform1fv(b,c)},
bW:function(a,b,c){return a.uniform1i(b,c)},
bX:function(a,b,c){return a.uniform1iv(b,c)},
bY:function(a,b,c){return a.uniform2fv(b,c)},
bZ:function(a,b,c){return a.uniform3fv(b,c)},
c_:function(a,b,c){return a.uniform4fv(b,c)},
c0:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c1:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c3:function(a,b){return a.useProgram(b)},
c5:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c7:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
bP:function(a,b,c,d,e,f,g,h){this.aB(a,b,c,d,e,f,g,h)}}
P.eR.prototype={
de:function(a,b){return a.beginTransformFeedback(b)},
dg:function(a,b){return a.bindVertexArray(b)},
dl:function(a){return a.createVertexArray()},
dt:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
du:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dv:function(a){return a.endTransformFeedback()},
dS:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
dW:function(a,b,c,d){this.d8(a,b,c,d)
return},
d8:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
dX:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bk:function(a,b){return a.activeTexture(b)},
bn:function(a,b,c){return a.attachShader(b,c)},
bo:function(a,b,c){return a.bindBuffer(b,c)},
bp:function(a,b,c){return a.bindFramebuffer(b,c)},
bq:function(a,b,c){return a.bindTexture(b,c)},
br:function(a,b){return a.blendEquation(b)},
bs:function(a,b,c){return a.blendFunc(b,c)},
bt:function(a,b,c,d){return a.bufferData(b,c,d)},
bu:function(a,b){return a.checkFramebufferStatus(b)},
bv:function(a,b){return a.clear(b)},
bw:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bx:function(a,b){return a.compileShader(b)},
by:function(a){return a.createBuffer()},
bz:function(a){return a.createFramebuffer()},
bA:function(a){return a.createProgram()},
bB:function(a,b){return a.createShader(b)},
bC:function(a){return a.createTexture()},
bD:function(a,b){return a.depthMask(b)},
bE:function(a,b){return a.disable(b)},
bF:function(a,b,c,d){return a.drawArrays(b,c,d)},
bG:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bH:function(a,b){return a.enable(b)},
bI:function(a,b){return a.enableVertexAttribArray(b)},
bK:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aq:function(a){return P.h8(a.getContextAttributes())},
aK:function(a){return a.getError()},
aL:function(a,b){return a.getExtension(b)},
aM:function(a,b){return a.getParameter(b)},
aN:function(a,b){return a.getProgramInfoLog(b)},
aO:function(a,b,c){return a.getProgramParameter(b,c)},
aP:function(a,b){return a.getShaderInfoLog(b)},
aQ:function(a,b,c){return a.getShaderParameter(b,c)},
aR:function(a,b,c){return a.getUniformLocation(b,c)},
bL:function(a,b){return a.linkProgram(b)},
aB:function(a,b,c,d,e,f,g,h){return a.readPixels(b,c,d,e,f,g,h)},
aV:function(a,b,c){return a.shaderSource(b,c)},
aX:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bS:function(a,b,c,d){return a.texParameterf(b,c,d)},
bT:function(a,b,c,d){return a.texParameteri(b,c,d)},
bU:function(a,b,c){return a.uniform1f(b,c)},
bV:function(a,b,c){return a.uniform1fv(b,c)},
bW:function(a,b,c){return a.uniform1i(b,c)},
bX:function(a,b,c){return a.uniform1iv(b,c)},
bY:function(a,b,c){return a.uniform2fv(b,c)},
bZ:function(a,b,c){return a.uniform3fv(b,c)},
c_:function(a,b,c){return a.uniform4fv(b,c)},
c0:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
c1:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
c3:function(a,b){return a.useProgram(b)},
c5:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
c7:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
bP:function(a,b,c,d,e,f,g,h){this.aB(a,b,c,d,e,f,g,h)}}
P.eZ.prototype={
gi:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.b(P.w(b,a,null,null,null))
return P.h8(this.cZ(a,b))},
j:function(a,b,c){throw H.b(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
cZ:function(a,b){return a.item(b)},
$isj:1,
$asj:function(){return[P.ay]},
$ask:function(){return[P.ay]},
$isf:1,
$asf:function(){return[P.ay]},
$asl:function(){return[P.ay]}}
P.cB.prototype={}
P.cC.prototype={}
G.er.prototype={}
G.dd.prototype={
bJ:function(a,b,c){J.jU(this.a,b)
if(c>0)J.ki(this.a,b,c)},
c6:function(a,b,c,d,e,f,g,h){J.hw(this.a,34962,b)
J.kj(this.a,c,d,e,!1,g,h)}}
G.dY.prototype={
cC:function(a){this.b=G.l0(this.a)},
k:function(a){return"FB-FMT: "+G.l9(this.a)+" ["+H.e(this.b)+"] "+G.le(this.c)}}
G.bF.prototype={
b1:function(a,b,c,d,e){var t,s,r
t=this.a
s=J.jJ(t.a)
this.b=s
J.as(t.a,36160,s)
s=this.c
if(s!=null){s=s.b
J.ih(t.a,36160,36064,3553,s,0)}s=this.d
if(s!=null){s=s.b
J.ih(t.a,36160,36096,3553,s,0)}r=J.jF(t.a,36160)
s=r===36053
if(H.aq(s))H.aI("framebuffer error: "+H.e(r))
if(!s)throw H.b("Error Incomplete Framebuffer: "+H.e(r))
J.as(t.a,36160,null)},
aY:function(a,b,c,d,e){var t,s
t=this.a
s=this.b
J.as(t.a,36160,s)
H.d(d>0&&e>0)
J.kk(t.a,b,c,d,e)
if(a!==0)J.jG(t.a,a)}}
G.dS.prototype={}
G.dZ.prototype={
b0:function(a){var t=this.e
H.d(!t.G(0,a))
H.d(C.f.aW(a,"a"))
switch($.$get$L().h(0,a).a){case"vec2":t.j(0,a,H.x([],[T.R]))
break
case"vec3":t.j(0,a,H.x([],[T.J]))
break
case"vec4":t.j(0,a,H.x([],[T.cc]))
break
case"float":t.j(0,a,H.x([],[P.M]))
break
case"uvec4":t.j(0,a,H.x([],[[P.f,P.v]]))
break
default:if(H.aq(!1))H.aI("unknown type for "+a)}},
cw:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.R(p))}},
cz:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.J(new Float32Array(3))
p.aT(q)
s.l(t,p)}},
cA:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.dS(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.J(new Float32Array(3))
p.aT(q)
C.a.l(t,p)}},
cD:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.x(s,[P.v])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.ge1(o)
r[q+1]=o.ge2(o)
r[q+2]=o.ge3(o)
q+=3}for(s=t.length,p=0;p<s;++p){n=t[p]
m=n.a
r[q]=m
r[q+1]=n.b
l=n.c
r[q+2]=l
r[q+3]=m
r[q+4]=l
r[q+5]=n.d
q+=6}H.d(q===r.length)
return r},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gC(s),r=r.gv(r);r.p();){q=r.gq(r)
p=$.$get$L().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.an(t," ")}}
G.eo.prototype={
aZ:function(a,b,c){var t,s
if(C.f.as(a,0)===105){if(H.aq(C.b.a4(b.length,c)===this.z))H.aI("ChangeAttribute "+this.z)}else{t=C.b.a4(b.length,c)
if(H.aq(t===(this.ch.length/3|0)))H.aI("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.hw(t.a,34962,s)
J.ig(t.a,34962,b,35048)},
cE:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a5:function(a,b,c){var t,s,r,q,p,o
t=J.jA(a,0)===105
if(t&&this.z===0)this.z=C.b.a4(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.hx(r.a))
this.aZ(a,b,c)
q=$.$get$L().h(0,a)
if(q==null)throw H.b("Unknown canonical "+a)
p=this.x
if(H.aq(p.G(0,a)))H.aI("unexpected attribute "+a)
o=p.h(0,a)
J.d3(r.a,this.e)
r.bJ(0,o,t?1:0)
r.c6(0,s.h(0,a),o,q.b2(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gC(t),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.an(s,"  ")},
sax:function(a){this.cx=a}}
G.eP.prototype={
cH:function(a,b,c,d){var t,s,r,q,p,o
for(t=this.e.d,s=this.y,r=this.d,q=this.r,p=0;!1;++p){o=t[p]
s.j(0,o,J.ik(r.a,q,o))}for(t=this.f.d,p=0;!1;++p){o=t[p]
s.j(0,o,J.ik(r.a,q,o))}},
cL:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gi(t)===s.gi(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gv(s);s.p();){q=s.gq(s)
if(!t.G(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bb(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
cM:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=Date.now()
for(s=b.gC(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(n.e4(0,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.hq("E:"+(H.e(n)+" : group ["+H.e(a)+"] overwrites ["+H.e(n)+"]"))
p.j(0,n,a)
l=$.$get$L().h(0,n)
if(l==null)H.C("unknown "+H.e(n))
H.d(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.hC(r.a,k,m)
else J.kg(r.a,k,m)
break
case"float":if(l.c===0)J.ke(r.a,k,m)
else J.kf(r.a,k,m)
break
case"mat4":if(l.c===0){j=m.gaj(m)
J.is(r.a,k,!1,j)}else J.is(r.a,k,!1,m)
break
case"mat3":if(l.c===0){j=m.gaj(m)
J.ir(r.a,k,!1,j)}else J.ir(r.a,k,!1,m)
break
case"vec4":if(l.c===0){j=m.gaj(m)
J.iq(r.a,k,j)}else J.iq(r.a,k,m)
break
case"vec3":if(l.c===0){j=m.gaj(m)
J.ip(r.a,k,j)}else J.ip(r.a,k,m)
break
case"vec2":if(l.c===0){j=m.gaj(m)
J.io(r.a,k,j)}else J.io(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.T(33984,this.ch)
J.id(r.a,j)
j=m.cF()
J.d2(r.a,3553,j)
j=this.ch
J.hC(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(!1)
j=C.b.T(33984,this.ch)
J.id(r.a,j)
j=m.cF()
J.d2(r.a,34067,j)
j=this.ch
J.hC(r.a,k,j)
this.ch=this.ch+1
break
default:H.hq("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:i=b.h(0,n)
switch(n){case"cDepthTest":J.jO(r.a,2929)
break
case"cStencilFunc":i.gdB()
J.hy(r.a,2960)
j=i.gdB()
h=i.ge8(i)
g=i.ge6(i)
J.k9(r.a,j,h,g)
break
case"cDepthWrite":J.jN(r.a,i)
break
case"cBlendEquation":i.gdw()
J.hy(r.a,3042)
j=i.ge_()
h=i.ge5()
J.jE(r.a,j,h)
h=i.gdw()
J.jD(r.a,h)
break}++o
break}}f=P.kv(0,0,0,Date.now()-new P.aS(t,!1).a,0,0)
""+o
f.k(0)},
cB:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.kh(t.a,this.r)
this.ch=0
this.z.N(0)
for(s=0;!1;++s){r=b[s]
this.cM(r.ge7(r),r.e0())}q=this.Q
q.N(0)
for(p=a.cy,p=p.gC(p),p=p.gv(p);p.p();)q.l(0,p.gq(p))
o=this.cL()
if(o.length!==0)P.F("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.d3(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.cE()
m=a.Q
l=a.z
if(n)J.jC(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.jS(k,q,p,m,0,l)
else J.jR(k,q,p,m,0)}else{m=t.a
if(l>1)J.jQ(m,q,0,p,l)
else J.jP(m,q,0,p)}if(n)J.jV(t.a)},
b_:function(a,b){return this.cB(a,b,null)}}
G.t.prototype={
b2:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.eW.prototype={
cv:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$L().G(0,q))
H.d(!C.a.B(t,q))
C.a.l(t,q)
s.j(0,q,this.r);++this.r}H.l_(t,P.lu())},
cI:function(a,b){H.d(this.b==null)
this.b=this.cN(!0,a,b)},
b3:function(a){return this.cI(a,null)},
cN:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.d1)(t),++o){n=t[o]
m=$.$get$L().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$L().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.d1)(t),++o){k=t[o]
m=$.$get$L().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,o=0;!1;++o){k=t[o]
m=$.$get$L().h(0,k)
s=m.c
j=s===0?"":"["+s+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.H(q,b)
C.a.l(q,"}")
return C.a.an(q,"\n")}}
G.fa.prototype={}
G.f9.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.fl.prototype={
cK:function(a,b,c,d,e,f){var t,s,r,q,p
t=this.d
s=this.c
J.d2(t.a,s,this.b)
J.kb(t.a,3553,1,this.x,this.f,this.r)
r=this.e
q=r.e
if(q!==1)J.ka(t.a,s,34046,q)
q=r.r
J.d4(t.a,s,10240,q)
q=r.f
J.d4(t.a,s,10241,q)
if(r.b){J.d4(t.a,s,10242,33071)
J.d4(t.a,s,10243,33071)}r.c
p=J.k2(t.a)
if(H.aq(p===0))H.aI("texture error "+H.e(p))
J.d2(t.a,s,null)},
k:function(a){return"TypedTexture["+this.a+", "+this.x+", "+this.f+" X "+this.r+"]"}}
A.he.prototype={
$2:function(a,b){var t=536870911&a+J.aN(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.v,P.A]}}}
T.R.prototype={
ai:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.R){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.jr(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.J.prototype={
a3:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
aT:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.J){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.jr(this.a)},
h:function(a,b){return this.a[b]},
gi:function(a){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]}}
T.cc.prototype={}
J.a.prototype.cq=J.a.prototype.k
J.aZ.prototype.cs=J.aZ.prototype.k
P.G.prototype.cr=P.G.prototype.ap
W.P.prototype.ar=W.P.prototype.I
W.bh.prototype.ct=W.bh.prototype.M;(function installTearOffs(){installTearOff(H.aD.prototype,"gdK",0,0,0,null,["$0"],["ao"],0)
installTearOff(H.S.prototype,"gcc",0,0,0,null,["$1"],["F"],2)
installTearOff(H.an.prototype,"gdn",0,0,0,null,["$1"],["O"],2)
installTearOff(P,"lp",1,0,0,null,["$1"],["l6"],1)
installTearOff(P,"lq",1,0,0,null,["$1"],["l7"],1)
installTearOff(P,"lr",1,0,0,null,["$1"],["l8"],1)
installTearOff(P,"jh",1,0,0,null,["$0"],["ln"],0)
installTearOff(P,"lu",1,0,0,null,["$2"],["ks"],5)
installTearOff(W,"lz",1,0,0,null,["$4"],["lb"],4)
installTearOff(W,"lA",1,0,0,null,["$4"],["lc"],4)
installTearOff(W.bV.prototype,"gaH",0,1,0,null,["$0"],["aI"],3)
installTearOff(W.cb.prototype,"gaH",0,1,0,null,["$0"],["aI"],3)
installTearOff(B,"jl",1,0,0,null,["$0"],["lI"],0)})();(function inheritance(){inherit(P.A,null)
var t=P.A
inherit(H.hJ,t)
inherit(J.a,t)
inherit(J.d8,t)
inherit(P.G,t)
inherit(H.bM,t)
inherit(P.bJ,t)
inherit(H.aw,t)
inherit(H.ad,t)
inherit(H.fQ,t)
inherit(H.aD,t)
inherit(H.fF,t)
inherit(H.ao,t)
inherit(H.fP,t)
inherit(H.fB,t)
inherit(H.c0,t)
inherit(H.fc,t)
inherit(H.ab,t)
inherit(H.S,t)
inherit(H.an,t)
inherit(H.eO,t)
inherit(H.fi,t)
inherit(P.aV,t)
inherit(H.cD,t)
inherit(H.al,t)
inherit(P.az,t)
inherit(H.ee,t)
inherit(H.eg,t)
inherit(P.ce,t)
inherit(P.hT,t)
inherit(P.h3,t)
inherit(P.eV,t)
inherit(P.fM,t)
inherit(P.bb,t)
inherit(P.hN,t)
inherit(P.bc,t)
inherit(P.k,t)
inherit(P.fO,t)
inherit(P.ar,t)
inherit(P.z,t)
inherit(P.aS,t)
inherit(P.a8,t)
inherit(P.ae,t)
inherit(P.c5,t)
inherit(P.hG,t)
inherit(P.fH,t)
inherit(P.dz,t)
inherit(P.f,t)
inherit(P.ay,t)
inherit(P.H,t)
inherit(P.n,t)
inherit(P.b6,t)
inherit(P.hW,t)
inherit(W.dj,t)
inherit(W.ba,t)
inherit(W.l,t)
inherit(W.bX,t)
inherit(W.bh,t)
inherit(W.h_,t)
inherit(W.bE,t)
inherit(W.bW,t)
inherit(W.hR,t)
inherit(W.hY,t)
inherit(W.fV,t)
inherit(W.cN,t)
inherit(P.fS,t)
inherit(G.er,t)
inherit(G.dd,t)
inherit(G.dY,t)
inherit(G.bF,t)
inherit(G.dS,t)
inherit(G.dZ,t)
inherit(G.t,t)
inherit(G.eW,t)
inherit(G.fa,t)
inherit(G.f9,t)
inherit(T.R,t)
inherit(T.J,t)
inherit(T.cc,t)
t=J.a
inherit(J.e8,t)
inherit(J.ea,t)
inherit(J.aZ,t)
inherit(J.af,t)
inherit(J.aY,t)
inherit(J.ag,t)
inherit(H.b1,t)
inherit(H.aA,t)
inherit(W.c,t)
inherit(W.d5,t)
inherit(W.db,t)
inherit(W.av,t)
inherit(W.O,t)
inherit(W.cf,t)
inherit(W.dp,t)
inherit(W.dq,t)
inherit(W.dr,t)
inherit(W.bx,t)
inherit(W.by,t)
inherit(W.cg,t)
inherit(W.bA,t)
inherit(W.ci,t)
inherit(W.du,t)
inherit(W.ck,t)
inherit(W.e0,t)
inherit(W.cm,t)
inherit(W.ei,t)
inherit(W.en,t)
inherit(W.cq,t)
inherit(W.bV,t)
inherit(W.ct,t)
inherit(W.Y,t)
inherit(W.cx,t)
inherit(W.bZ,t)
inherit(W.cz,t)
inherit(W.Z,t)
inherit(W.cE,t)
inherit(W.cH,t)
inherit(W.fb,t)
inherit(W.cJ,t)
inherit(W.fg,t)
inherit(W.cb,t)
inherit(W.fp,t)
inherit(W.fr,t)
inherit(W.cO,t)
inherit(W.cQ,t)
inherit(W.cS,t)
inherit(W.cU,t)
inherit(W.cW,t)
inherit(P.co,t)
inherit(P.cv,t)
inherit(P.eI,t)
inherit(P.eJ,t)
inherit(P.eM,t)
inherit(P.cF,t)
inherit(P.cL,t)
inherit(P.d9,t)
inherit(P.eQ,t)
inherit(P.eR,t)
inherit(P.cB,t)
t=J.aZ
inherit(J.eG,t)
inherit(J.am,t)
inherit(J.ah,t)
inherit(J.hI,J.af)
t=J.aY
inherit(J.bK,t)
inherit(J.e9,t)
t=P.G
inherit(H.j,t)
inherit(H.bO,t)
inherit(H.cd,t)
t=H.j
inherit(H.ax,t)
inherit(H.ef,t)
inherit(H.dx,H.bO)
t=P.bJ
inherit(H.el,t)
inherit(H.fu,t)
t=H.ax
inherit(H.b_,t)
inherit(P.eh,t)
t=H.ad
inherit(H.hs,t)
inherit(H.ht,t)
inherit(H.fK,t)
inherit(H.fG,t)
inherit(H.e4,t)
inherit(H.e5,t)
inherit(H.fR,t)
inherit(H.fd,t)
inherit(H.fe,t)
inherit(H.hu,t)
inherit(H.hj,t)
inherit(H.hk,t)
inherit(H.hl,t)
inherit(H.hm,t)
inherit(H.hn,t)
inherit(H.f6,t)
inherit(H.eb,t)
inherit(H.hf,t)
inherit(H.hg,t)
inherit(H.hh,t)
inherit(P.fx,t)
inherit(P.fw,t)
inherit(P.fy,t)
inherit(P.fz,t)
inherit(P.h5,t)
inherit(P.fU,t)
inherit(P.ek,t)
inherit(P.dv,t)
inherit(P.dw,t)
inherit(W.dy,t)
inherit(W.f1,t)
inherit(W.eB,t)
inherit(W.eA,t)
inherit(W.fW,t)
inherit(W.fX,t)
inherit(W.h1,t)
inherit(W.h2,t)
inherit(P.h7,t)
inherit(A.he,t)
t=H.fB
inherit(H.aF,t)
inherit(H.bm,t)
t=P.aV
inherit(H.eC,t)
inherit(H.ec,t)
inherit(H.fn,t)
inherit(H.fk,t)
inherit(H.dc,t)
inherit(H.eS,t)
inherit(P.bs,t)
inherit(P.bY,t)
inherit(P.N,t)
inherit(P.fo,t)
inherit(P.fm,t)
inherit(P.aB,t)
inherit(P.de,t)
inherit(P.dn,t)
t=H.f6
inherit(H.f_,t)
inherit(H.aQ,t)
inherit(H.fv,P.bs)
inherit(P.bN,P.az)
t=P.bN
inherit(H.a4,t)
inherit(W.fA,t)
t=H.aA
inherit(H.es,t)
inherit(H.bR,t)
t=H.bR
inherit(H.bd,t)
inherit(H.bf,t)
inherit(H.be,H.bd)
inherit(H.bS,H.be)
inherit(H.bg,H.bf)
inherit(H.bT,H.bg)
t=H.bS
inherit(H.bQ,t)
inherit(H.et,t)
t=H.bT
inherit(H.eu,t)
inherit(H.ev,t)
inherit(H.ew,t)
inherit(H.ex,t)
inherit(H.ey,t)
inherit(H.bU,t)
inherit(H.ez,t)
inherit(P.fT,P.h3)
inherit(P.fN,H.a4)
inherit(P.eU,P.eV)
inherit(P.fJ,P.eU)
inherit(P.fL,P.fJ)
inherit(P.bL,P.bc)
t=P.a8
inherit(P.M,t)
inherit(P.v,t)
t=P.N
inherit(P.c_,t)
inherit(P.e3,t)
t=W.c
inherit(W.o,t)
inherit(W.a6,t)
inherit(W.dU,t)
inherit(W.aX,t)
inherit(W.b0,t)
inherit(W.eK,t)
inherit(W.c1,t)
inherit(W.bi,t)
inherit(W.bk,t)
inherit(W.fs,t)
inherit(W.ft,t)
inherit(W.hZ,t)
inherit(P.da,t)
inherit(P.au,t)
t=W.o
inherit(W.P,t)
inherit(W.ac,t)
inherit(W.aT,t)
t=W.P
inherit(W.i,t)
inherit(P.q,t)
t=W.a6
inherit(W.br,t)
inherit(W.e_,t)
inherit(W.ej,t)
t=W.i
inherit(W.d6,t)
inherit(W.d7,t)
inherit(W.aa,t)
inherit(W.bt,t)
inherit(W.bw,t)
inherit(W.dX,t)
inherit(W.bH,t)
inherit(W.eT,t)
inherit(W.c7,t)
inherit(W.f4,t)
inherit(W.f5,t)
inherit(W.b7,t)
t=W.av
inherit(W.df,t)
inherit(W.dh,t)
inherit(W.di,t)
inherit(W.dl,t)
t=W.O
inherit(W.dg,t)
inherit(W.dk,t)
inherit(W.dm,t)
inherit(W.aR,W.cf)
inherit(W.ds,W.by)
inherit(W.ch,W.cg)
inherit(W.bz,W.ch)
inherit(W.cj,W.ci)
inherit(W.dt,W.cj)
inherit(W.cl,W.ck)
inherit(W.dT,W.cl)
inherit(W.cn,W.cm)
inherit(W.aW,W.cn)
inherit(W.bI,W.aT)
inherit(W.e1,W.aX)
inherit(W.ep,W.b0)
inherit(W.cr,W.cq)
inherit(W.eq,W.cr)
inherit(W.E,P.bL)
inherit(W.cu,W.ct)
inherit(W.b2,W.cu)
inherit(W.cy,W.cx)
inherit(W.eH,W.cy)
inherit(W.bj,W.bi)
inherit(W.eX,W.bj)
inherit(W.cA,W.cz)
inherit(W.eY,W.cA)
inherit(W.f0,W.cE)
inherit(W.cI,W.cH)
inherit(W.f7,W.cI)
inherit(W.bl,W.bk)
inherit(W.f8,W.bl)
inherit(W.cK,W.cJ)
inherit(W.ff,W.cK)
inherit(W.cP,W.cO)
inherit(W.fC,W.cP)
inherit(W.fD,W.bA)
inherit(W.cR,W.cQ)
inherit(W.fI,W.cR)
inherit(W.cT,W.cS)
inherit(W.cs,W.cT)
inherit(W.cV,W.cU)
inherit(W.fY,W.cV)
inherit(W.cX,W.cW)
inherit(W.fZ,W.cX)
inherit(W.fE,W.fA)
inherit(W.h0,W.bh)
inherit(P.I,P.fS)
t=P.q
inherit(P.dA,t)
inherit(P.dB,t)
inherit(P.dC,t)
inherit(P.dD,t)
inherit(P.dE,t)
inherit(P.dF,t)
inherit(P.dG,t)
inherit(P.dH,t)
inherit(P.dI,t)
inherit(P.dJ,t)
inherit(P.dK,t)
inherit(P.dL,t)
inherit(P.dM,t)
inherit(P.dN,t)
inherit(P.dO,t)
inherit(P.dP,t)
inherit(P.dQ,t)
inherit(P.dR,t)
inherit(P.dV,t)
inherit(P.X,t)
inherit(P.em,t)
inherit(P.eF,t)
inherit(P.b5,t)
t=P.X
inherit(P.dW,t)
inherit(P.Q,t)
inherit(P.e2,t)
inherit(P.f3,t)
inherit(P.b8,t)
inherit(P.fq,t)
inherit(P.cp,P.co)
inherit(P.ed,P.cp)
inherit(P.cw,P.cv)
inherit(P.eD,P.cw)
inherit(P.eN,P.Q)
inherit(P.cG,P.cF)
inherit(P.f2,P.cG)
inherit(P.b9,P.b8)
inherit(P.cM,P.cL)
inherit(P.fh,P.cM)
inherit(P.eE,P.au)
inherit(P.cC,P.cB)
inherit(P.eZ,P.cC)
t=G.er
inherit(G.eo,t)
inherit(G.eP,t)
inherit(G.fl,G.f9)
mixin(H.bd,P.k)
mixin(H.be,H.aw)
mixin(H.bf,P.k)
mixin(H.bg,H.aw)
mixin(P.bc,P.k)
mixin(W.cf,W.dj)
mixin(W.cg,P.k)
mixin(W.ch,W.l)
mixin(W.ci,P.k)
mixin(W.cj,W.l)
mixin(W.ck,P.k)
mixin(W.cl,W.l)
mixin(W.cm,P.k)
mixin(W.cn,W.l)
mixin(W.cq,P.k)
mixin(W.cr,W.l)
mixin(W.ct,P.k)
mixin(W.cu,W.l)
mixin(W.cx,P.k)
mixin(W.cy,W.l)
mixin(W.bi,P.k)
mixin(W.bj,W.l)
mixin(W.cz,P.k)
mixin(W.cA,W.l)
mixin(W.cE,P.az)
mixin(W.cH,P.k)
mixin(W.cI,W.l)
mixin(W.bk,P.k)
mixin(W.bl,W.l)
mixin(W.cJ,P.k)
mixin(W.cK,W.l)
mixin(W.cO,P.k)
mixin(W.cP,W.l)
mixin(W.cQ,P.k)
mixin(W.cR,W.l)
mixin(W.cS,P.k)
mixin(W.cT,W.l)
mixin(W.cU,P.k)
mixin(W.cV,W.l)
mixin(W.cW,P.k)
mixin(W.cX,W.l)
mixin(P.co,P.k)
mixin(P.cp,W.l)
mixin(P.cv,P.k)
mixin(P.cw,W.l)
mixin(P.cF,P.k)
mixin(P.cG,W.l)
mixin(P.cL,P.k)
mixin(P.cM,W.l)
mixin(P.cB,P.k)
mixin(P.cC,W.l)})();(function constants(){C.m=W.aa.prototype
C.E=W.bt.prototype
C.h=W.bw.prototype
C.F=W.bx.prototype
C.G=W.bH.prototype
C.o=W.bI.prototype
C.H=J.a.prototype
C.a=J.af.prototype
C.b=J.bK.prototype
C.f=J.ag.prototype
C.O=J.ah.prototype
C.S=H.bQ.prototype
C.w=W.b2.prototype
C.x=J.eG.prototype
C.y=W.bZ.prototype
C.D=W.c7.prototype
C.r=J.am.prototype
C.n=new P.fT()
C.t=new P.ae(0)
C.I=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.J=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.K=function(getTagFallback) {
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
C.L=function() {
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
C.M=function(hooks) {
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
C.N=function(hooks) {
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
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.P=H.x(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.Q=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.R=makeConstList([])
C.p=H.x(makeConstList(["bind","if","ref","repeat","syntax"]),[P.n])
C.q=H.x(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.T=new G.t("vec3","vertex btangents",0)
C.c=new G.t("vec3","",0)
C.U=new G.t("vec4","delta from light",0)
C.l=new G.t("","",0)
C.z=new G.t("vec3","vertex coordinates",0)
C.V=new G.t("vec3","vertex binormals",0)
C.A=new G.t("vec4","for wireframe",0)
C.W=new G.t("vec4","per vertex color",0)
C.X=new G.t("float","for normal maps",0)
C.i=new G.t("mat4","",0)
C.Z=new G.t("mat4","",4)
C.Y=new G.t("mat4","",128)
C.d=new G.t("float","",0)
C.a_=new G.t("float","",4)
C.a0=new G.t("float","depth for shadowmaps",0)
C.e=new G.t("sampler2D","",0)
C.a1=new G.t("float","for bump maps",0)
C.a2=new G.t("vec2","texture uvs",0)
C.a3=new G.t("float","time since program start in sec",0)
C.j=new G.t("vec2","",0)
C.a4=new G.t("samplerCube","",0)
C.k=new G.t("vec4","",0)
C.a5=new G.t("vec3","vertex normals",0)
C.a6=new G.t("sampler2DShadow","",0)
C.B=new G.t("vec3","per vertex color",0)
C.C=new G.t("mat3","",0)
C.a7=new G.t("vec3","vertex tangents",0)
C.a8=H.B("lN")
C.a9=H.B("lO")
C.aa=H.B("lP")
C.ab=H.B("lQ")
C.ac=H.B("lR")
C.ad=H.B("lS")
C.ae=H.B("lT")
C.af=H.B("iH")
C.ag=H.B("H")
C.ah=H.B("n")
C.ai=H.B("j3")
C.aj=H.B("j4")
C.ak=H.B("lU")
C.al=H.B("j5")
C.am=H.B("ar")
C.an=H.B("M")
C.ao=H.B("v")
C.ap=H.B("a8")})();(function staticFields(){$.iM="$cachedFunction"
$.iN="$cachedInvocation"
$.ix=null
$.iv=null
$.i2=!1
$.i8=null
$.je=null
$.jv=null
$.h9=null
$.hi=null
$.i9=null
$.aG=null
$.bn=null
$.bo=null
$.i3=!1
$.aC=C.n
$.iC=0
$.a2=null
$.hF=null
$.iB=null
$.iA=null
$.jm=0})();(function lazyInitializers(){lazy($,"iz","$get$iz",function(){return H.jp("_$dart_dartClosure")})
lazy($,"hK","$get$hK",function(){return H.jp("_$dart_js")})
lazy($,"iF","$get$iF",function(){return H.kI()})
lazy($,"iG","$get$iG",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.iC
$.iC=t+1
t="expando$key$"+t}return new P.dz(t,null,[P.v])})
lazy($,"iT","$get$iT",function(){return H.a_(H.fj({
toString:function(){return"$receiver$"}}))})
lazy($,"iU","$get$iU",function(){return H.a_(H.fj({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"iV","$get$iV",function(){return H.a_(H.fj(null))})
lazy($,"iW","$get$iW",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"j_","$get$j_",function(){return H.a_(H.fj(void 0))})
lazy($,"j0","$get$j0",function(){return H.a_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"iY","$get$iY",function(){return H.a_(H.iZ(null))})
lazy($,"iX","$get$iX",function(){return H.a_(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"j2","$get$j2",function(){return H.a_(H.iZ(void 0))})
lazy($,"j1","$get$j1",function(){return H.a_(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"i_","$get$i_",function(){return P.l5()})
lazy($,"bp","$get$bp",function(){return[]})
lazy($,"j9","$get$j9",function(){return P.hO(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"i0","$get$i0",function(){return P.a5()})
lazy($,"L","$get$L",function(){return P.ai(["cBlendEquation",C.l,"cDepthWrite",C.l,"cDepthTest",C.l,"cStencilFunc",C.l,"tPosition",C.c,"tSpeed",C.c,"tForce",C.c,"aColors",C.B,"aColorAlpha",C.W,"aPosition",C.z,"aTexUV",C.a2,"aNormal",C.a5,"aBinormal",C.V,"aCenter",C.A,"aPointSize",C.d,"aBoneIndex",C.k,"aBoneWeight",C.k,"aTangent",C.a7,"aBitangent",C.T,"iaRotation",C.k,"iaTranslation",C.c,"iaScale",C.c,"vColor",C.B,"vTexUV",C.j,"vLightWeighting",C.c,"vNormal",C.c,"vPosition",C.z,"vPositionFromLight",C.U,"vCenter",C.A,"vDepth",C.a0,"uTransformationMatrix",C.i,"uModelMatrix",C.i,"uNormalMatrix",C.C,"uConvolutionMatrix",C.C,"uPerspectiveViewMatrix",C.i,"uLightPerspectiveViewMatrix",C.i,"uShadowMap",C.a6,"uTexture",C.e,"uTexture2",C.e,"uTexture3",C.e,"uTexture4",C.e,"uSpecularMap",C.e,"uNormalMap",C.e,"uBumpMap",C.e,"uDepthMap",C.e,"uCubeTexture",C.a4,"uAnimationTable",C.e,"uTime",C.a3,"uCameraNear",C.d,"uCameraFar",C.d,"uFogNear",C.d,"uFogFar",C.d,"uPointSize",C.d,"uScale",C.d,"uAngle",C.d,"uCanvasSize",C.j,"uCenter2",C.j,"uCutOff",C.d,"uShininess",C.d,"uShadowBias",C.d,"uOpacity",C.d,"uColor",C.c,"uAmbientDiffuse",C.c,"uColorEmissive",C.c,"uColorSpecular",C.c,"uColorDiffuse",C.c,"uColorAlpha",C.k,"uColorAlpha2",C.k,"uEyePosition",C.c,"uMaterial",C.i,"uRange",C.j,"uDirection",C.j,"uBoneMatrices",C.Y,"uLightDescs",C.Z,"uLightCount",C.d,"uLightTypes",C.a_,"uBumpScale",C.a1,"uNormalScale",C.X])})
lazy($,"iS","$get$iS",function(){var t=new G.fa(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"jk","$get$jk",function(){var t=G.iP("computeVertexShader")
t.cv(["aPosition"])
t.b3(["gl_Position = vec4(aPosition, 1.0);"])
return t})
lazy($,"jj","$get$jj",function(){var t=G.iP("computeFragmentShader")
t.b3(["oFragColor.b = gl_FragCoord.x / 500.0;\noFragColor.g = gl_FragCoord.y / 500.0;\noFragColor.r = 0.0;\n    "])
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
mangledGlobalNames:{v:"int",M:"double",a8:"num",n:"String",ar:"bool",H:"Null",f:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.o},{func:1,ret:P.ar,args:[W.P,P.n,P.n,W.ba]},{func:1,ret:P.v,args:[P.z,P.z]}],
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
setOrUpdateInterceptorsByTag({AbortPaymentEvent:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationEvent:J.a,AnimationPlaybackEvent:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,ApplicationCacheErrorEvent:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchClickEvent:J.a,BackgroundFetchEvent:J.a,BackgroundFetchFailEvent:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BackgroundFetchedEvent:J.a,BarProp:J.a,BarcodeDetector:J.a,BeforeInstallPromptEvent:J.a,BeforeUnloadEvent:J.a,Blob:J.a,BlobEvent:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanMakePaymentEvent:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,ClipboardEvent:J.a,CloseEvent:J.a,CompositionEvent:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,CustomEvent:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceMotionEvent:J.a,DeviceOrientationEvent:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,ErrorEvent:J.a,Event:J.a,InputEvent:J.a,ExtendableEvent:J.a,ExtendableMessageEvent:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FetchEvent:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FocusEvent:J.a,FontFace:J.a,FontFaceSetLoadEvent:J.a,FontFaceSource:J.a,ForeignFetchEvent:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadEvent:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,HashChangeEvent:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,InstallEvent:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyboardEvent:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaEncryptedEvent:J.a,MediaError:J.a,MediaKeyMessageEvent:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaQueryListEvent:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MediaStreamEvent:J.a,MediaStreamTrackEvent:J.a,MemoryInfo:J.a,MessageChannel:J.a,MessageEvent:J.a,Metadata:J.a,MIDIConnectionEvent:J.a,MIDIInputMap:J.a,MIDIMessageEvent:J.a,MIDIOutputMap:J.a,MimeType:J.a,MouseEvent:J.a,DragEvent:J.a,MutationEvent:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,NotificationEvent:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PageTransitionEvent:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentRequestEvent:J.a,PaymentRequestUpdateEvent:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PointerEvent:J.a,PopStateEvent:J.a,PositionError:J.a,Presentation:J.a,PresentationConnectionAvailableEvent:J.a,PresentationConnectionCloseEvent:J.a,PresentationReceiver:J.a,ProgressEvent:J.a,PromiseRejectionEvent:J.a,PublicKeyCredential:J.a,PushEvent:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCDataChannelEvent:J.a,RTCDTMFToneChangeEvent:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCPeerConnectionIceEvent:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,RTCTrackEvent:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,SecurityPolicyViolationEvent:J.a,Selection:J.a,SensorErrorEvent:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechRecognitionError:J.a,SpeechRecognitionEvent:J.a,SpeechSynthesisEvent:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageEvent:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncEvent:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextEvent:J.a,TextMetrics:J.a,Touch:J.a,TouchEvent:J.a,TrackDefault:J.a,TrackEvent:J.a,TransitionEvent:J.a,WebKitTransitionEvent:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UIEvent:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDeviceEvent:J.a,VRDisplayCapabilities:J.a,VRDisplayEvent:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRSessionEvent:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WheelEvent:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoInterfaceRequestEvent:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,ResourceProgressEvent:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBConnectionEvent:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,IDBVersionChangeEvent:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioProcessingEvent:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,OfflineAudioCompletionEvent:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLContextEvent:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.b1,ArrayBufferView:H.aA,DataView:H.es,Float32Array:H.bQ,Float64Array:H.et,Int16Array:H.eu,Int32Array:H.ev,Int8Array:H.ew,Uint16Array:H.ex,Uint32Array:H.ey,Uint8ClampedArray:H.bU,CanvasPixelArray:H.bU,Uint8Array:H.ez,HTMLAudioElement:W.i,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLInputElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMediaElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLVideoElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,Accelerometer:W.br,LinearAccelerationSensor:W.br,AccessibleNodeList:W.d5,HTMLAnchorElement:W.d6,HTMLAreaElement:W.d7,HTMLBodyElement:W.aa,HTMLCanvasElement:W.bt,CanvasRenderingContext2D:W.db,CDATASection:W.ac,CharacterData:W.ac,Comment:W.ac,ProcessingInstruction:W.ac,Text:W.ac,CSSPerspective:W.df,CSSPositionValue:W.dg,CSSRotation:W.dh,CSSScale:W.di,CSSStyleDeclaration:W.aR,MSStyleCSSProperties:W.aR,CSS2Properties:W.aR,CSSImageValue:W.O,CSSKeywordValue:W.O,CSSNumericValue:W.O,CSSResourceValue:W.O,CSSUnitValue:W.O,CSSURLImageValue:W.O,CSSStyleValue:W.O,CSSMatrixComponent:W.av,CSSSkew:W.av,CSSTransformComponent:W.av,CSSTransformValue:W.dk,CSSTranslation:W.dl,CSSUnparsedValue:W.dm,DataTransferItemList:W.dp,DeviceAcceleration:W.dq,HTMLDivElement:W.bw,XMLDocument:W.aT,Document:W.aT,DOMException:W.dr,DOMImplementation:W.bx,DOMPoint:W.ds,DOMPointReadOnly:W.by,ClientRectList:W.bz,DOMRectList:W.bz,DOMRectReadOnly:W.bA,DOMStringList:W.dt,DOMTokenList:W.du,Element:W.P,AccessibleNode:W.c,Animation:W.c,ApplicationCache:W.c,DOMApplicationCache:W.c,OfflineResourceList:W.c,BackgroundFetchRegistration:W.c,BatteryManager:W.c,BroadcastChannel:W.c,CanvasCaptureMediaStreamTrack:W.c,DedicatedWorkerGlobalScope:W.c,EventSource:W.c,FileReader:W.c,FontFaceSet:W.c,MediaDevices:W.c,MediaKeySession:W.c,MediaQueryList:W.c,MediaRecorder:W.c,MediaSource:W.c,MediaStream:W.c,MediaStreamTrack:W.c,MessagePort:W.c,MIDIAccess:W.c,NetworkInformation:W.c,Notification:W.c,OffscreenCanvas:W.c,PaymentRequest:W.c,Performance:W.c,PermissionStatus:W.c,PresentationAvailability:W.c,PresentationConnectionList:W.c,PresentationRequest:W.c,RemotePlayback:W.c,RTCDTMFSender:W.c,RTCPeerConnection:W.c,webkitRTCPeerConnection:W.c,mozRTCPeerConnection:W.c,ScreenOrientation:W.c,ServiceWorkerContainer:W.c,ServiceWorkerGlobalScope:W.c,ServiceWorkerRegistration:W.c,SharedWorker:W.c,SharedWorkerGlobalScope:W.c,SourceBuffer:W.c,SpeechRecognition:W.c,SpeechSynthesis:W.c,SpeechSynthesisUtterance:W.c,TextTrack:W.c,TextTrackCue:W.c,VR:W.c,VRDevice:W.c,VRDisplay:W.c,VRSession:W.c,VisualViewport:W.c,VTTCue:W.c,Window:W.c,DOMWindow:W.c,Worker:W.c,WorkerGlobalScope:W.c,WorkerPerformance:W.c,BluetoothDevice:W.c,BluetoothRemoteGATTCharacteristic:W.c,Clipboard:W.c,MojoInterfaceInterceptor:W.c,ServiceWorker:W.c,USB:W.c,IDBDatabase:W.c,IDBOpenDBRequest:W.c,IDBVersionChangeRequest:W.c,IDBRequest:W.c,IDBTransaction:W.c,AnalyserNode:W.c,RealtimeAnalyserNode:W.c,AudioBufferSourceNode:W.c,AudioDestinationNode:W.c,AudioNode:W.c,AudioScheduledSourceNode:W.c,AudioWorkletNode:W.c,BiquadFilterNode:W.c,ChannelMergerNode:W.c,AudioChannelMerger:W.c,ChannelSplitterNode:W.c,AudioChannelSplitter:W.c,ConstantSourceNode:W.c,ConvolverNode:W.c,DelayNode:W.c,DynamicsCompressorNode:W.c,GainNode:W.c,AudioGainNode:W.c,IIRFilterNode:W.c,MediaElementAudioSourceNode:W.c,MediaStreamAudioDestinationNode:W.c,MediaStreamAudioSourceNode:W.c,OscillatorNode:W.c,Oscillator:W.c,PannerNode:W.c,AudioPannerNode:W.c,webkitAudioPannerNode:W.c,ScriptProcessorNode:W.c,JavaScriptAudioNode:W.c,StereoPannerNode:W.c,WaveShaperNode:W.c,EventTarget:W.c,FileList:W.dT,FileWriter:W.dU,HTMLFormElement:W.dX,Gyroscope:W.e_,HTMLHeadElement:W.bH,History:W.e0,HTMLCollection:W.aW,HTMLFormControlsCollection:W.aW,HTMLOptionsCollection:W.aW,HTMLDocument:W.bI,XMLHttpRequest:W.e1,XMLHttpRequestUpload:W.aX,XMLHttpRequestEventTarget:W.aX,Location:W.ei,Magnetometer:W.ej,MediaList:W.en,MIDIOutput:W.ep,MIDIInput:W.b0,MIDIPort:W.b0,MimeTypeArray:W.eq,DocumentFragment:W.o,ShadowRoot:W.o,Attr:W.o,DocumentType:W.o,Node:W.o,NodeIterator:W.bV,NodeList:W.b2,RadioNodeList:W.b2,Plugin:W.Y,PluginArray:W.eH,PresentationConnection:W.eK,Range:W.bZ,RTCDataChannel:W.c1,DataChannel:W.c1,HTMLSelectElement:W.eT,AbsoluteOrientationSensor:W.a6,AmbientLightSensor:W.a6,OrientationSensor:W.a6,RelativeOrientationSensor:W.a6,Sensor:W.a6,SourceBufferList:W.eX,SpeechGrammarList:W.eY,SpeechRecognitionResult:W.Z,Storage:W.f0,HTMLTableElement:W.c7,HTMLTableRowElement:W.f4,HTMLTableSectionElement:W.f5,HTMLTemplateElement:W.b7,TextTrackCueList:W.f7,TextTrackList:W.f8,TimeRanges:W.fb,TouchList:W.ff,TrackDefaultList:W.fg,TreeWalker:W.cb,URL:W.fp,VRStageBoundsPoint:W.fr,VideoTrackList:W.fs,WebSocket:W.ft,CSSRuleList:W.fC,DOMRect:W.fD,GamepadList:W.fI,NamedNodeMap:W.cs,MozNamedAttrMap:W.cs,SpeechRecognitionResultList:W.fY,StyleSheetList:W.fZ,SVGFEBlendElement:P.dA,SVGFEColorMatrixElement:P.dB,SVGFEComponentTransferElement:P.dC,SVGFECompositeElement:P.dD,SVGFEConvolveMatrixElement:P.dE,SVGFEDiffuseLightingElement:P.dF,SVGFEDisplacementMapElement:P.dG,SVGFEFloodElement:P.dH,SVGFEGaussianBlurElement:P.dI,SVGFEImageElement:P.dJ,SVGFEMergeElement:P.dK,SVGFEMorphologyElement:P.dL,SVGFEOffsetElement:P.dM,SVGFEPointLightElement:P.dN,SVGFESpecularLightingElement:P.dO,SVGFESpotLightElement:P.dP,SVGFETileElement:P.dQ,SVGFETurbulenceElement:P.dR,SVGFilterElement:P.dV,SVGForeignObjectElement:P.dW,SVGCircleElement:P.Q,SVGEllipseElement:P.Q,SVGLineElement:P.Q,SVGPathElement:P.Q,SVGPolygonElement:P.Q,SVGPolylineElement:P.Q,SVGGeometryElement:P.Q,SVGAElement:P.X,SVGClipPathElement:P.X,SVGDefsElement:P.X,SVGGElement:P.X,SVGSwitchElement:P.X,SVGGraphicsElement:P.X,SVGImageElement:P.e2,SVGLengthList:P.ed,SVGMaskElement:P.em,SVGNumberList:P.eD,SVGPatternElement:P.eF,SVGPoint:P.eI,SVGPointList:P.eJ,SVGRect:P.eM,SVGRectElement:P.eN,SVGScriptElement:P.b5,SVGStringList:P.f2,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEMergeNodeElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMetadataElement:P.q,SVGRadialGradientElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSymbolElement:P.q,SVGTitleElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGSVGElement:P.f3,SVGTextPathElement:P.b8,SVGTextContentElement:P.b8,SVGTSpanElement:P.b9,SVGTextElement:P.b9,SVGTextPositioningElement:P.b9,SVGTransformList:P.fh,SVGUseElement:P.fq,AudioBuffer:P.d9,AudioTrackList:P.da,AudioContext:P.au,webkitAudioContext:P.au,BaseAudioContext:P.au,OfflineAudioContext:P.eE,WebGLRenderingContext:P.eQ,WebGL2RenderingContext:P.eR,SQLResultSetRowList:P.eZ})
setOrUpdateLeafTags({AbortPaymentEvent:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationEvent:true,AnimationPlaybackEvent:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,ApplicationCacheErrorEvent:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BackgroundFetchedEvent:true,BarProp:true,BarcodeDetector:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,Blob:true,BlobEvent:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanMakePaymentEvent:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,ClipboardEvent:true,CloseEvent:true,CompositionEvent:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,CustomEvent:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,ErrorEvent:true,Event:true,InputEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,External:true,FaceDetector:true,FederatedCredential:true,FetchEvent:true,File:true,FileEntry:true,DOMFileSystem:true,FocusEvent:true,FontFace:true,FontFaceSetLoadEvent:true,FontFaceSource:true,ForeignFetchEvent:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadEvent:true,GamepadPose:true,Geolocation:true,Position:true,HashChangeEvent:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,InstallEvent:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyboardEvent:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaEncryptedEvent:true,MediaError:true,MediaKeyMessageEvent:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaQueryListEvent:true,MediaSession:true,MediaSettingsRange:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MemoryInfo:true,MessageChannel:true,MessageEvent:true,Metadata:true,MIDIConnectionEvent:true,MIDIInputMap:true,MIDIMessageEvent:true,MIDIOutputMap:true,MimeType:true,MouseEvent:true,DragEvent:true,MutationEvent:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,NotificationEvent:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PageTransitionEvent:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PointerEvent:true,PopStateEvent:true,PositionError:true,Presentation:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PresentationReceiver:true,ProgressEvent:true,PromiseRejectionEvent:true,PublicKeyCredential:true,PushEvent:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCPeerConnectionIceEvent:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,RTCTrackEvent:true,Screen:true,ScrollState:true,ScrollTimeline:true,SecurityPolicyViolationEvent:true,Selection:true,SensorErrorEvent:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,SpeechSynthesisVoice:true,StaticRange:true,StorageEvent:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncEvent:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextEvent:true,TextMetrics:true,Touch:true,TouchEvent:true,TrackDefault:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UIEvent:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDeviceEvent:true,VRDisplayCapabilities:true,VRDisplayEvent:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRSessionEvent:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WheelEvent:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoInterfaceRequestEvent:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,ResourceProgressEvent:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBConnectionEvent:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,IDBVersionChangeEvent:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioProcessingEvent:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,OfflineAudioCompletionEvent:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLContextEvent:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Window:true,DOMWindow:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.bR.$nativeSuperclassTag="ArrayBufferView"
H.bd.$nativeSuperclassTag="ArrayBufferView"
H.be.$nativeSuperclassTag="ArrayBufferView"
H.bS.$nativeSuperclassTag="ArrayBufferView"
H.bf.$nativeSuperclassTag="ArrayBufferView"
H.bg.$nativeSuperclassTag="ArrayBufferView"
H.bT.$nativeSuperclassTag="ArrayBufferView"
W.bi.$nativeSuperclassTag="EventTarget"
W.bj.$nativeSuperclassTag="EventTarget"
W.bk.$nativeSuperclassTag="EventTarget"
W.bl.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.jx(B.jl(),b)},[])
else (function(b){H.jx(B.jl(),b)})([])})})()