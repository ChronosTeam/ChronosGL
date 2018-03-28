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
a[c]=function(){a[c]=function(){H.nT(b)}
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
return d?function(e){if(t===null)t=H.jP(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jP(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jP(this,a,b,true,[],d).prototype
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
jy:function(a,b,c,d){if(!!a.$isk)return new H.el(a,b,[c,d])
return new H.ct(a,b,[c,d])},
cm:function(){return new P.b5("No element")},
mM:function(){return new P.b5("Too many elements")},
mL:function(){return new P.b5("Too few elements")},
n0:function(a,b){H.cK(a,0,J.bl(a)-1,b)},
cK:function(a,b,c,d){if(c-b<=32)H.n_(a,b,c,d)
else H.mZ(a,b,c,d)},
n_:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.R(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aa(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mZ:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.K(t+1,6)
r=a3+s
q=a4-s
p=C.b.K(a3+a4,2)
o=p-s
n=p+s
t=J.R(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.aa(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.aa(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.aa(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.aa(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aa(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.aa(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.aa(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.aa(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aa(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.D(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cK(a2,a3,g-2,a5)
H.cK(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.D(a5.$2(t.h(a2,g),l),0);)++g
for(;J.D(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cK(a2,g,f,a5)}else H.cK(a2,g,f,a5)},
k:function k(){},
b_:function b_(){},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ct:function ct(a,b,c){this.a=a
this.b=b
this.$ti=c},
el:function el(a,b,c){this.a=a
this.b=b
this.$ti=c},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bv:function bv(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
hA:function hA(a,b,c){this.a=a
this.b=b
this.$ti=c},
aY:function aY(){},
dL:function(a,b){var t=a.am(b)
if(!u.globalState.d.cy)u.globalState.f.ar()
return t},
iJ:function(){++u.globalState.f.b},
iX:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lz:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.q(s).$ish)throw H.c(P.dV("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.ie(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kx()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hO(P.jx(null,H.aO),0)
q=P.z
s.seT(new H.ac(0,null,null,null,null,null,0,[q,H.ba]))
s.seV(new H.ac(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.id()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mG,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.ne)}if(u.globalState.x)return
o=H.l5()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.bh(a,{func:1,args:[P.K]}))o.am(new H.j7(t,a))
else if(H.bh(a,{func:1,args:[P.K,P.K]}))o.am(new H.j8(t,a))
else o.am(a)
u.globalState.f.ar()},
ne:function(a){var t=P.an(["command","print","msg",a])
return new H.a6(!0,P.bb(null,P.z)).L(t)},
l5:function(){var t,s
t=u.globalState.a++
s=P.z
t=new H.ba(t,new H.ac(0,null,null,null,null,null,0,[s,H.cH]),P.aE(null,null,null,s),u.createNewIsolate(),new H.cH(0,null,!1),new H.av(H.lw()),new H.av(H.lw()),!1,!1,[],P.aE(null,null,null,null),null,null,!1,!0,P.aE(null,null,null,null))
t.dG()
return t},
mI:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mJ()
return},
mJ:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
mG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aN(!0,[]).a_(b.data)
s=J.R(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nG(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aN(!0,[]).a_(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aN(!0,[]).a_(s.h(t,"replyTo"))
k=H.l5()
u.globalState.f.a.X(0,new H.aO(k,new H.eU(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ar()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.m8(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ar()
break
case"close":u.globalState.ch.aq(0,$.$get$ky().h(0,a))
a.terminate()
u.globalState.f.ar()
break
case"log":H.mF(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.an(["command","print","msg",t])
j=new H.a6(!0,P.bb(null,P.z)).L(j)
s.toString
self.postMessage(j)}else P.X(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mF:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.an(["command","log","msg",a])
r=new H.a6(!0,P.bb(null,P.z)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.J(q)
t=H.a7(q)
s=P.cf(t)
throw H.c(s)}},
mH:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kG=$.kG+("_"+s)
$.kH=$.kH+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.bc(s,r),q,t.r])
r=new H.eV(t,d,a,c,b)
if(e){t.bW(q,q)
u.globalState.f.a.X(0,new H.aO(t,r,"start isolate"))}else r.$0()},
n2:function(a,b){var t=new H.hj(!0,!1,null,0)
t.dz(a,b)
return t},
ng:function(a){return new H.aN(!0,[]).a_(new H.a6(!1,P.bb(null,P.z)).L(a))},
j7:function j7(a,b){this.a=a
this.b=b},
j8:function j8(a,b){this.a=a
this.b=b},
ie:function ie(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
ba:function ba(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
i8:function i8(a,b){this.a=a
this.b=b},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a){this.a=a},
aO:function aO(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(){},
eU:function eU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hI:function hI(){},
bc:function bc(a,b){this.b=a
this.a=b},
ig:function ig(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c){this.b=a
this.c=b
this.a=c},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(a,b){this.a=a
this.b=b},
av:function av(a){this.a=a},
a6:function a6(a,b){this.a=a
this.b=b},
aN:function aN(a,b){this.a=a
this.b=b},
nA:function(a){return u.types[a]},
nI:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.q(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bm(a)
if(typeof t!=="string")throw H.c(H.Q(a))
return t},
mX:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.am(t)
s=t[0]
r=t[1]
return new H.fN(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aH:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bA:function(a){var t,s,r,q,p,o,n,m,l
t=J.q(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.M||!!J.q(a).$isaL){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aN(q,0)===36)q=C.i.d9(q,1)
l=H.dN(H.iL(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
N:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mV:function(a){return a.b?H.N(a).getUTCFullYear()+0:H.N(a).getFullYear()+0},
mT:function(a){return a.b?H.N(a).getUTCMonth()+1:H.N(a).getMonth()+1},
mP:function(a){return a.b?H.N(a).getUTCDate()+0:H.N(a).getDate()+0},
mQ:function(a){return a.b?H.N(a).getUTCHours()+0:H.N(a).getHours()+0},
mS:function(a){return a.b?H.N(a).getUTCMinutes()+0:H.N(a).getMinutes()+0},
mU:function(a){return a.b?H.N(a).getUTCSeconds()+0:H.N(a).getSeconds()+0},
mR:function(a){return a.b?H.N(a).getUTCMilliseconds()+0:H.N(a).getMilliseconds()+0},
kF:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.Q(a))
return a[b]},
bg:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a1(!0,b,"index",null)
t=J.bl(a)
if(b<0||C.b.bb(b,t))return P.A(b,a,"index",null,t)
return P.fK(b,"index",null)},
Q:function(a){return new P.a1(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.b3()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lA})
t.name=""}else t.toString=H.lA
return t},
lA:function(){return J.bm(this.dartException)},
I:function(a){throw H.c(a)},
H:function(a){throw H.c(P.ak(a))},
af:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hp(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hq:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kT:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kE:function(a,b){return new H.fv(a,b==null?null:b.method)},
jt:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.f_(a,s,t?null:b.receiver)},
J:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.j9(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jt(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kE(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kN()
o=$.$get$kO()
n=$.$get$kP()
m=$.$get$kQ()
l=$.$get$kU()
k=$.$get$kV()
j=$.$get$kS()
$.$get$kR()
i=$.$get$kX()
h=$.$get$kW()
g=p.P(s)
if(g!=null)return t.$1(H.jt(s,g))
else{g=o.P(s)
if(g!=null){g.method="call"
return t.$1(H.jt(s,g))}else{g=n.P(s)
if(g==null){g=m.P(s)
if(g==null){g=l.P(s)
if(g==null){g=k.P(s)
if(g==null){g=j.P(s)
if(g==null){g=m.P(s)
if(g==null){g=i.P(s)
if(g==null){g=h.P(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kE(s,g))}}return t.$1(new H.ht(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cN()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a1(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cN()
return a},
a7:function(a){var t
if(a==null)return new H.dq(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dq(a,null)},
nM:function(a){if(a==null||typeof a!='object')return J.bk(a)
else return H.aH(a)},
ny:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
nH:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dL(b,new H.iS(a))
case 1:return H.dL(b,new H.iT(a,d))
case 2:return H.dL(b,new H.iU(a,d,e))
case 3:return H.dL(b,new H.iV(a,d,e,f))
case 4:return H.dL(b,new H.iW(a,d,e,f,g))}throw H.c(P.cf("Unsupported number of arguments for wrapped closure"))},
as:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nH)
a.$identity=t
return t},
mq:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.q(c).$ish){t.$reflectionInfo=c
r=H.mX(t).r}else r=c
q=d?Object.create(new H.h1().constructor.prototype):Object.create(new H.bn(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kg(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nA,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.kd:H.jl
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kg(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mn:function(a,b,c,d){var t=H.jl
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kg:function(a,b,c){var t,s,r,q
if(c)return H.mp(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mn(s,b==null?r!=null:b!==r,t,b)
return q},
mo:function(a,b,c,d){var t,s
t=H.jl
s=H.kd
switch(b?-1:a){case 0:throw H.c(H.mY("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mp:function(a,b){var t,s,r,q
t=$.ke
if(t==null){t=H.kb("self")
$.ke=t}t=$.kc
if(t==null){t=H.kb("receiver")
$.kc=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mo(r,b==null?q!=null:b!==q,s,b)
return t},
jP:function(a,b,c,d,e,f){var t,s
t=J.am(b)
s=!!J.q(c).$ish?J.am(c):c
return H.mq(a,t,s,!!d,e,f)},
jl:function(a){return a.a},
kd:function(a){return a.c},
kb:function(a){var t,s,r,q,p
t=new H.bn("self","target","receiver","name")
s=J.am(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
o7:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ag(a,"String"))},
o2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ag(a,"double"))},
o6:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ag(a,"num"))},
ns:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ag(a,"bool"))},
nG:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ag(a,"int"))},
nO:function(a,b){throw H.c(H.ag(a,b.substring(3)))},
nN:function(a,b){var t=J.R(b)
throw H.c(H.kf(a,t.bo(b,3,t.gj(b))))},
jT:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.q(a)[b])return a
H.nO(a,b)},
at:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.q(a)[b]
else t=!0
if(t)return a
H.nN(a,b)},
o5:function(a){if(a==null)return a
if(!!J.q(a).$ish)return a
throw H.c(H.ag(a,"List"))},
jQ:function(a){var t=J.q(a)
return"$S" in t?t.$S():null},
bh:function(a,b){var t,s
if(a==null)return!1
t=H.jQ(a)
if(t==null)s=!1
else s=H.ls(t,b)
return s},
o3:function(a,b){var t,s
if(a==null)return a
if($.jM)return a
$.jM=!0
try{if(H.bh(a,b))return a
t=H.j1(b,null)
s=H.ag(a,t)
throw H.c(s)}finally{$.jM=!1}},
ag:function(a,b){return new H.hr("TypeError: "+H.e(P.ce(a))+": type '"+H.lc(a)+"' is not a subtype of type '"+b+"'")},
kf:function(a,b){return new H.e0("CastError: "+H.e(P.ce(a))+": type '"+H.lc(a)+"' is not a subtype of type '"+b+"'")},
lc:function(a){var t
if(a instanceof H.ax){t=H.jQ(a)
if(t!=null)return H.j1(t,null)
return"Closure"}return H.bA(a)},
ai:function(a){if(!0===a)return!1
if(!!J.q(a).$isjp)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ag(a,"bool"))},
ar:function(a){throw H.c(new H.hC(a))},
b:function(a){if(H.ai(a))throw H.c(P.mm(null))},
nT:function(a){throw H.c(new P.eb(a))},
mY:function(a){return new H.fS(a)},
lw:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lq:function(a){return u.getIsolateTag(a)},
G:function(a){return new H.ap(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iL:function(a){if(a==null)return
return a.$ti},
lr:function(a,b){return H.jX(a["$as"+H.e(b)],H.iL(a))},
V:function(a,b,c){var t,s
t=H.lr(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
a8:function(a,b){var t,s
t=H.iL(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
j1:function(a,b){var t=H.bi(a,b)
return t},
bi:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dN(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bi(t,b)
return H.ni(a,b)}return"unknown-reified-type"},
ni:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bi(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bi(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bi(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nx(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bi(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dN:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bE("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bi(o,c)}return p?"":"<"+s.k(0)+">"},
iM:function(a){var t,s,r
if(a instanceof H.ax){t=H.jQ(a)
if(t!=null)return H.j1(t,null)}s=J.q(a).constructor.name
if(a==null)return s
r=H.dN(a.$ti,0,null)
return s+r},
jX:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jU(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jU(a,null,b)
return b},
c_:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iL(a)
s=J.q(a)
if(s[b]==null)return!1
return H.lg(H.jX(s[d],t),c)},
dO:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c_(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dN(c,0,null)
throw H.c(H.kf(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
o_:function(a,b,c,d){var t,s
if(a==null)return a
t=H.c_(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dN(c,0,null)
throw H.c(H.ag(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
lg:function(a,b){var t,s,r,q,p
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
o0:function(a,b,c){return H.jU(a,b,H.lr(b,c))},
W:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="K")return!0
if('func' in b)return H.ls(a,b)
if('func' in a)return b.name==="jp"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.j1(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.lg(H.jX(o,t),r)},
lf:function(a,b,c){var t,s,r,q,p,o,n
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
no:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.am(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.W(p,o)||H.W(o,p)))return!1}return!0},
ls:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.lf(r,q,!1))return!1
if(!H.lf(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
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
if(!(H.W(g,f)||H.W(f,g)))return!1}}return H.no(a.named,b.named)},
jU:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
o8:function(a){var t=$.jR
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
o4:function(a){return H.aH(a)},
o1:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nJ:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.jR.$1(a)
s=$.iI[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iR[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.le.$2(a,t)
if(t!=null){s=$.iI[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iR[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.j_(r)
$.iI[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iR[t]=r
return r}if(p==="-"){o=H.j_(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lu(a,r)
if(p==="*")throw H.c(P.jF(t))
if(u.leafTags[t]===true){o=H.j_(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lu(a,r)},
lu:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jV(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
j_:function(a){return J.jV(a,!1,null,!!a.$ist)},
nL:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.j_(t)
else return J.jV(t,c,null,null)},
nE:function(){if(!0===$.jS)return
$.jS=!0
H.nF()},
nF:function(){var t,s,r,q,p,o,n,m
$.iI=Object.create(null)
$.iR=Object.create(null)
H.nD()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lv.$1(p)
if(o!=null){n=H.nL(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nD:function(){var t,s,r,q,p,o,n
t=C.Q()
t=H.bf(C.N,H.bf(C.S,H.bf(C.x,H.bf(C.x,H.bf(C.R,H.bf(C.O,H.bf(C.P(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jR=new H.iO(p)
$.le=new H.iP(o)
$.lv=new H.iQ(n)},
bf:function(a,b){return a(b)||b},
nS:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fN:function fN(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hp:function hp(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fv:function fv(a,b){this.a=a
this.b=b},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a){this.a=a},
j9:function j9(a){this.a=a},
dq:function dq(a,b){this.a=a
this.b=b},
iS:function iS(a){this.a=a},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iW:function iW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ax:function ax(){},
hf:function hf(){},
h1:function h1(){},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hr:function hr(a){this.a=a},
e0:function e0(a){this.a=a},
fS:function fS(a){this.a=a},
hC:function hC(a){this.a=a},
ap:function ap(a,b){this.a=a
this.b=b},
ac:function ac(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eZ:function eZ(a){this.a=a},
f1:function f1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f2:function f2(a,b){this.a=a
this.$ti=b},
f3:function f3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
iC:function(a){var t,s,r
if(!!J.q(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bg(b,a))},
b2:function b2(){},
aG:function aG(){},
fj:function fj(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cv:function cv(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
cz:function cz(){},
fq:function fq(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
bQ:function bQ(){},
nx:function(a){return J.am(H.B(a?Object.keys(a):[],[null]))},
j0:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cp.prototype
return J.co.prototype}if(typeof a=="string")return J.aB.prototype
if(a==null)return J.eY.prototype
if(typeof a=="boolean")return J.eX.prototype
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.C)return a
return J.iK(a)},
jV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iK:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jS==null){H.nE()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.jF("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$js()]
if(p!=null)return p
p=H.nJ(a)
if(p!=null)return p
if(typeof a=="function")return C.T
s=Object.getPrototypeOf(a)
if(s==null)return C.B
if(s===Object.prototype)return C.B
if(typeof q=="function"){Object.defineProperty(q,$.$get$js(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
am:function(a){a.fixed$length=Array
return a},
R:function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.C)return a
return J.iK(a)},
c1:function(a){if(a==null)return a
if(a.constructor==Array)return J.aA.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.C)return a
return J.iK(a)},
lo:function(a){if(typeof a=="number")return J.aZ.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aL.prototype
return a},
nz:function(a){if(typeof a=="number")return J.aZ.prototype
if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aL.prototype
return a},
lp:function(a){if(typeof a=="string")return J.aB.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aL.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aC.prototype
return a}if(a instanceof P.C)return a
return J.iK(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.q(a).A(a,b)},
aa:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lo(a).U(a,b)},
lB:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lo(a).V(a,b)},
aQ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nI(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.R(a).h(a,b)},
lC:function(a,b,c,d){return J.i(a).dK(a,b,c,d)},
jY:function(a,b){return J.lp(a).aN(a,b)},
ja:function(a,b){return J.i(a).e1(a,b)},
lD:function(a,b,c,d){return J.i(a).e2(a,b,c,d)},
lE:function(a,b,c){return J.i(a).e3(a,b,c)},
jZ:function(a,b){return J.i(a).bV(a,b)},
jb:function(a,b){return J.i(a).R(a,b)},
k_:function(a,b,c){return J.i(a).bY(a,b,c)},
lF:function(a,b){return J.i(a).ej(a,b)},
jc:function(a,b,c){return J.i(a).bZ(a,b,c)},
lG:function(a,b,c){return J.i(a).c_(a,b,c)},
bj:function(a,b,c){return J.i(a).c0(a,b,c)},
dP:function(a,b){return J.i(a).em(a,b)},
lH:function(a,b){return J.i(a).c1(a,b)},
lI:function(a,b,c){return J.i(a).c2(a,b,c)},
k0:function(a,b,c,d){return J.i(a).c3(a,b,c,d)},
lJ:function(a,b){return J.c1(a).c4(a,b)},
lK:function(a,b,c,d,e){return J.i(a).c5(a,b,c,d,e)},
lL:function(a,b){return J.nz(a).S(a,b)},
jd:function(a,b,c){return J.R(a).es(a,b,c)},
je:function(a){return J.i(a).c7(a)},
lM:function(a){return J.i(a).c8(a)},
lN:function(a){return J.i(a).ca(a)},
lO:function(a){return J.i(a).eA(a)},
lP:function(a,b){return J.i(a).cc(a,b)},
jf:function(a,b){return J.i(a).cd(a,b)},
lQ:function(a,b,c,d){return J.i(a).ce(a,b,c,d)},
lR:function(a,b,c,d,e){return J.i(a).eH(a,b,c,d,e)},
lS:function(a,b,c,d,e){return J.i(a).cf(a,b,c,d,e)},
lT:function(a,b,c,d,e,f){return J.i(a).eI(a,b,c,d,e,f)},
lU:function(a,b){return J.c1(a).u(a,b)},
dQ:function(a,b){return J.i(a).cg(a,b)},
lV:function(a,b){return J.i(a).ci(a,b)},
lW:function(a){return J.i(a).eJ(a)},
k1:function(a,b){return J.c1(a).a7(a,b)},
lX:function(a){return J.i(a).gei(a)},
bk:function(a){return J.q(a).gw(a)},
aR:function(a){return J.c1(a).gB(a)},
bl:function(a){return J.R(a).gj(a)},
lY:function(a){return J.i(a).gb5(a)},
lZ:function(a){return J.q(a).gC(a)},
m_:function(a){return J.i(a).gf5(a)},
m0:function(a){return J.i(a).gaF(a)},
jg:function(a){return J.i(a).gm(a)},
jh:function(a){return J.i(a).gn(a)},
k2:function(a){return J.i(a).gF(a)},
ji:function(a,b){return J.i(a).ac(a,b)},
m1:function(a){return J.i(a).aH(a)},
m2:function(a){return J.i(a).bc(a)},
m3:function(a,b){return J.i(a).bd(a,b)},
m4:function(a,b,c){return J.i(a).be(a,b,c)},
k3:function(a,b,c){return J.i(a).bh(a,b,c)},
m5:function(a,b){return J.i(a).cm(a,b)},
m6:function(a,b){return J.c1(a).cp(a,b)},
m7:function(a,b,c){return J.i(a).cr(a,b,c)},
k4:function(a){return J.c1(a).eZ(a)},
m8:function(a,b){return J.i(a).J(a,b)},
m9:function(a,b,c,d){return J.i(a).bn(a,b,c,d)},
ma:function(a,b,c,d,e,f,g){return J.i(a).cw(a,b,c,d,e,f,g)},
mb:function(a,b,c,d){return J.i(a).cz(a,b,c,d)},
dR:function(a,b,c,d){return J.i(a).cA(a,b,c,d)},
mc:function(a){return J.lp(a).f8(a)},
bm:function(a){return J.q(a).k(a)},
md:function(a,b,c,d){return J.i(a).fa(a,b,c,d)},
me:function(a,b,c){return J.i(a).cC(a,b,c)},
mf:function(a,b,c){return J.i(a).cD(a,b,c)},
jj:function(a,b,c){return J.i(a).cE(a,b,c)},
mg:function(a,b,c){return J.i(a).cF(a,b,c)},
k5:function(a,b,c){return J.i(a).cG(a,b,c)},
k6:function(a,b,c){return J.i(a).cH(a,b,c)},
k7:function(a,b,c){return J.i(a).cI(a,b,c)},
k8:function(a,b,c,d){return J.i(a).cJ(a,b,c,d)},
k9:function(a,b,c,d){return J.i(a).cK(a,b,c,d)},
mh:function(a,b){return J.i(a).cM(a,b)},
mi:function(a,b,c){return J.i(a).fb(a,b,c)},
mj:function(a,b,c,d,e,f,g){return J.i(a).cO(a,b,c,d,e,f,g)},
mk:function(a,b,c,d,e){return J.i(a).cQ(a,b,c,d,e)},
a:function a(){},
eX:function eX(){},
eY:function eY(){},
bu:function bu(){},
fF:function fF(){},
aL:function aL(){},
aC:function aC(){},
aA:function aA(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
cp:function cp(){},
co:function co(){},
aB:function aB(){}},P={
n5:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.np()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.as(new P.hE(t),1)).observe(s,{childList:true})
return new P.hD(t,s,r)}else if(self.setImmediate!=null)return P.nq()
return P.nr()},
n6:function(a){H.iJ()
self.scheduleImmediate(H.as(new P.hF(a),0))},
n7:function(a){H.iJ()
self.setImmediate(H.as(new P.hG(a),0))},
n8:function(a){P.jC(C.v,a)},
jC:function(a,b){var t=C.b.K(a.a,1000)
return H.n2(t<0?0:t,b)},
l8:function(a,b){if(H.bh(a,{func:1,args:[P.K,P.K]})){b.toString
return a}else{b.toString
return a}},
mC:function(a,b,c){var t
if(a==null)a=new P.b3()
t=$.w
if(t!==C.d)t.toString
t=new P.E(0,t,null,[c])
t.bD(a,b)
return t},
mD:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.E(0,$.w,null,[P.h])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eN(t,b,!1,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b9(new P.eM(t,p,s,b,!1),r)
l=++t.b}if(l===0){l=new P.E(0,$.w,null,[null])
l.bC(C.z)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.J(j)
n=H.a7(j)
if(t.b===0||!1)return P.mC(o,n,null)
else{t.c=o
t.d=n}}return s},
nh:function(a,b,c){$.w.toString
a.H(b,c)},
na:function(a,b){var t=new P.E(0,$.w,null,[b])
H.b(!0)
t.a=4
t.c=a
return t},
l2:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.E))
H.b(b.a===0)
b.a=1
try{a.b9(new P.hY(b),new P.hZ(b))}catch(r){t=H.J(r)
s=H.a7(r)
P.nP(new P.i_(b,t,s))}},
hX:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aA()
b.aM(a)
P.b9(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bP(r)}},
b9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iD(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.b9(t.a,b)}s=t.a
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
P.iD(null,null,p,o,s)
return}s=$.w
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.w
H.b(l==null?s!=null:l!==s)
j=$.w
$.w=l
i=j}else i=null
s=b.c
if(s===8)new P.i4(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.i3(r,b,m).$0()}else if((s&2)!==0)new P.i2(t,r,b).$0()
if(i!=null){H.b(!0)
$.w=i}s=r.b
if(!!J.q(s).$isZ){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aB(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hX(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aB(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nk:function(){var t,s
for(;t=$.bd,t!=null;){$.bY=null
s=t.b
$.bd=s
if(s==null)$.bX=null
t.a.$0()}},
nn:function(){$.jN=!0
try{P.nk()}finally{$.bY=null
$.jN=!1
if($.bd!=null)$.$get$jJ().$1(P.lh())}},
lb:function(a){var t=new P.d_(a,null)
if($.bd==null){$.bX=t
$.bd=t
if(!$.jN)$.$get$jJ().$1(P.lh())}else{$.bX.b=t
$.bX=t}},
nm:function(a){var t,s,r
t=$.bd
if(t==null){P.lb(a)
$.bY=$.bX
return}s=new P.d_(a,null)
r=$.bY
if(r==null){s.b=t
$.bY=s
$.bd=s}else{s.b=r.b
r.b=s
$.bY=s
if(s.b==null)$.bX=s}},
nP:function(a){var t=$.w
if(C.d===t){P.be(null,null,C.d,a)
return}t.toString
P.be(null,null,t,t.b0(a))},
nf:function(a,b,c){var t=a.en(0)
if(!!J.q(t).$isZ&&t!==$.$get$ku())t.fc(new P.iB(b,c))
else b.ag(c)},
n3:function(a,b){var t=$.w
if(t===C.d){t.toString
return P.jC(a,b)}return P.jC(a,t.b0(b))},
jI:function(a){var t,s
H.b(a!=null)
t=$.w
H.b(a==null?t!=null:a!==t)
s=$.w
$.w=a
return s},
iD:function(a,b,c,d,e){var t={}
t.a=d
P.nm(new P.iE(t,e))},
l9:function(a,b,c,d){var t,s
if($.w===c)return d.$0()
t=P.jI(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.w=s}},
la:function(a,b,c,d,e){var t,s
if($.w===c)return d.$1(e)
t=P.jI(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.w=s}},
nl:function(a,b,c,d,e,f){var t,s
if($.w===c)return d.$2(e,f)
t=P.jI(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.w=s}},
be:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b0(d):c.ek(d)
P.lb(d)},
hE:function hE(a){this.a=a},
hD:function hD(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(a){this.a=a},
hG:function hG(a){this.a=a},
Z:function Z(){},
eN:function eN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jm:function jm(){},
hJ:function hJ(){},
d0:function d0(a,b){this.a=a
this.$ti=b},
iw:function iw(a,b){this.a=a
this.$ti=b},
b8:function b8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hU:function hU(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
hY:function hY(a){this.a=a},
hZ:function hZ(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
hW:function hW(a,b){this.a=a
this.b=b},
i0:function i0(a,b){this.a=a
this.b=b},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i5:function i5(a){this.a=a},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
i2:function i2(a,b,c){this.a=a
this.b=b
this.c=c},
d_:function d_(a,b){this.a=a
this.b=b},
bD:function bD(){},
h9:function h9(a){this.a=a},
ha:function ha(a,b){this.a=a
this.b=b},
h7:function h7(a,b,c){this.a=a
this.b=b
this.c=c},
h8:function h8(a){this.a=a},
h6:function h6(){},
iB:function iB(a,b){this.a=a
this.b=b},
jB:function jB(){},
aS:function aS(a,b){this.a=a
this.b=b},
iA:function iA(){},
iE:function iE(a,b){this.a=a
this.b=b},
ii:function ii(){},
ik:function ik(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
il:function il(a,b){this.a=a
this.b=b},
kA:function(a,b){return new H.ac(0,null,null,null,null,null,0,[a,b])},
T:function(){return new H.ac(0,null,null,null,null,null,0,[null,null])},
an:function(a){return H.ny(a,new H.ac(0,null,null,null,null,null,0,[null,null]))},
bb:function(a,b){return new P.ib(0,null,null,null,null,null,0,[a,b])},
aE:function(a,b,c,d){return new P.i9(0,null,null,null,null,null,0,[d])},
jL:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mK:function(a,b,c){var t,s
if(P.jO(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bZ()
C.a.l(s,a)
try{P.nj(a,t)}finally{H.b(C.a.gaE(s)===a)
s.pop()}s=P.kL(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eW:function(a,b,c){var t,s,r
if(P.jO(a))return b+"..."+c
t=new P.bE(b)
s=$.$get$bZ()
C.a.l(s,a)
try{r=t
r.a=P.kL(r.ga5(),a,", ")}finally{H.b(C.a.gaE(s)===a)
s.pop()}s=t
s.a=s.ga5()+c
s=t.ga5()
return s.charCodeAt(0)==0?s:s},
jO:function(a){var t,s
for(t=0;s=$.$get$bZ(),t<s.length;++t)if(a===s[t])return!0
return!1},
nj:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gB(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.e(t.gt(t))
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt(t);++r
if(!t.p()){if(r<=4){C.a.l(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gt(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gt(t);++r
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
jw:function(a,b){var t,s
t=P.aE(null,null,null,b)
for(s=J.aR(a);s.p();)t.l(0,s.gt(s))
return t},
kC:function(a){var t,s,r
t={}
if(P.jO(a))return"{...}"
s=new P.bE("")
try{C.a.l($.$get$bZ(),a)
r=s
r.a=r.ga5()+"{"
t.a=!0
J.k1(a,new P.fa(t,s))
t=s
t.a=t.ga5()+"}"}finally{t=$.$get$bZ()
H.b(C.a.gaE(t)===a)
t.pop()}t=s.ga5()
return t.charCodeAt(0)==0?t:t},
jx:function(a,b){var t=new P.f4(null,0,0,0,[b])
t.dq(a,b)
return t},
ib:function ib(a,b,c,d,e,f,g,h){var _=this
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
bL:function bL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i7:function i7(){},
jv:function jv(){},
cq:function cq(){},
m:function m(){},
cs:function cs(){},
fa:function fa(a,b){this.a=a
this.b=b},
b0:function b0(){},
f4:function f4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ic:function ic(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fV:function fV(){},
fU:function fU(){},
bM:function bM(){},
my:function(a){var t=J.q(a)
if(!!t.$isax)return t.k(a)
return"Instance of '"+H.bA(a)+"'"},
kB:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.aR(a);s.p();)C.a.l(t,s.gt(s))
if(b)return t
return J.am(t)},
kL:function(a,b,c){var t=J.aR(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gt(t))
while(t.p())}else{a+=H.e(t.gt(t))
for(;t.p();)a=a+c+H.e(t.gt(t))}return a},
mr:function(a,b){return J.lL(a,b)},
mt:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mu:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c8:function(a){if(a>=10)return""+a
return"0"+a},
kp:function(a,b,c,d,e,f){return new P.az(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ce:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bm(a)
if(typeof a==="string")return JSON.stringify(a)
return P.my(a)},
mm:function(a){return new P.c5(a)},
dV:function(a){return new P.a1(!1,null,null,a)},
jk:function(a,b,c){return new P.a1(!0,a,b,c)},
ml:function(a){return new P.a1(!1,null,a,"Must not be null")},
fK:function(a,b,c){return new P.cG(null,null,!0,a,b,"Value not in range")},
aI:function(a,b,c,d,e){return new P.cG(b,c,!0,a,d,"Invalid value")},
kI:function(a,b,c,d,e,f){if(C.b.U(0,a)||C.b.U(a,c))throw H.c(P.aI(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.U(b,c))throw H.c(P.aI(b,a,c,"end",f))
return b}return c},
A:function(a,b,c,d,e){var t=e!=null?e:J.bl(b)
return new P.eT(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.hu(a)},
jF:function(a){return new P.hs(a)},
cO:function(a){return new P.b5(a)},
ak:function(a){return new P.e2(a)},
cf:function(a){return new P.hT(a)},
X:function(a){H.j0(H.e(a))},
aj:function aj(){},
F:function F(){},
ay:function ay(a,b){this.a=a
this.b=b},
a0:function a0(){},
az:function az(a){this.a=a},
ej:function ej(){},
ek:function ek(){},
aX:function aX(){},
c5:function c5(a){this.a=a},
b3:function b3(){},
a1:function a1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cG:function cG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eT:function eT(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hu:function hu(a){this.a=a},
hs:function hs(a){this.a=a},
b5:function b5(a){this.a=a},
e2:function e2(a){this.a=a},
cN:function cN(){},
eb:function eb(a){this.a=a},
jo:function jo(){},
hT:function hT(a){this.a=a},
en:function en(a,b,c){this.a=a
this.b=b
this.$ti=c},
z:function z(){},
S:function S(){},
cn:function cn(){},
h:function h(){},
a_:function a_(){},
K:function K(){},
a9:function a9(){},
C:function C(){},
b4:function b4(){},
o:function o(){},
bE:function bE(a){this.a=a},
jE:function jE(){},
iG:function(a){var t,s,r,q,p
if(a==null)return
t=P.T()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.H)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nv:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.k1(a,new P.iF(t))
return t},
ko:function(){var t=$.kn
if(t==null){t=J.jd(window.navigator.userAgent,"Opera",0)
$.kn=t}return t},
mv:function(){var t,s
t=$.kk
if(t!=null)return t
s=$.kl
if(s==null){s=J.jd(window.navigator.userAgent,"Firefox",0)
$.kl=s}if(s)t="-moz-"
else{s=$.km
if(s==null){s=!P.ko()&&J.jd(window.navigator.userAgent,"Trident/",0)
$.km=s}if(s)t="-ms-"
else t=P.ko()?"-o-":"-webkit-"}$.kk=t
return t},
ir:function ir(){},
it:function it(a,b){this.a=a
this.b=b},
iF:function iF(a){this.a=a},
is:function is(a,b){this.a=a
this.b=b},
ih:function ih(){},
U:function U(){},
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
eE:function eE(){},
eF:function eF(){},
eH:function eH(){},
eJ:function eJ(){},
a4:function a4(){},
ab:function ab(){},
eR:function eR(){},
f0:function f0(){},
fc:function fc(){},
fw:function fw(){},
fD:function fD(){},
fH:function fH(){},
fI:function fI(){},
fL:function fL(){},
fM:function fM(){},
bC:function bC(){},
hb:function hb(){},
x:function x(){},
hc:function hc(){},
bG:function bG(){},
bH:function bH(){},
ho:function ho(){},
hw:function hw(){},
da:function da(){},
db:function db(){},
dh:function dh(){},
di:function di(){},
ds:function ds(){},
dt:function dt(){},
dy:function dy(){},
dz:function dz(){},
dX:function dX(){},
dY:function dY(){},
aT:function aT(){},
fx:function fx(){},
fQ:function fQ(){},
fR:function fR(){},
h0:function h0(){},
dn:function dn(){},
dp:function dp(){}},W={
mw:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).O(t,a,b,c)
s.toString
t=new H.cZ(new W.O(s),new W.em(),[W.r])
return t.ga2(t)},
mx:function(a){return"wheel"},
bp:function(a){var t,s,r
t="element tag unavailable"
try{s=J.m_(a)
if(typeof s==="string")t=a.tagName}catch(r){H.J(r)}return t},
n9:function(a,b){return document.createElement(a)},
aP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l6:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a5:function(a,b,c,d,e){var t=c==null?null:W.ld(new W.hS(c))
t=new W.hR(0,a,b,t,!1,[e])
t.dE(a,b,c,!1,e)
return t},
l3:function(a){var t,s
t=document.createElement("a")
s=new W.im(t,window.location)
s=new W.bK(s)
s.dF(a)
return s},
nc:function(a,b,c,d){return!0},
nd:function(a,b,c,d){var t,s,r,q,p
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
l7:function(){var t=P.o
t=new W.ix(P.jw(C.q,t),P.aE(null,null,null,t),P.aE(null,null,null,t),P.aE(null,null,null,t),null)
t.dI(null,new H.bv(C.q,new W.iy(),[H.a8(C.q,0),null]),["TEMPLATE"],null)
return t},
ld:function(a){var t=$.w
if(t===C.d)return a
return t.el(a)},
j:function j(){},
c4:function c4(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
aU:function aU(){},
au:function au(){},
c6:function c6(){},
e_:function e_(){},
aw:function aw(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
aV:function aV(){},
e7:function e7(){},
a2:function a2(){},
aW:function aW(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
ec:function ec(){},
ed:function ed(){},
c9:function c9(){},
bo:function bo(){},
ee:function ee(){},
ca:function ca(){},
ef:function ef(){},
cb:function cb(){},
cc:function cc(){},
cd:function cd(){},
eg:function eg(){},
eh:function eh(){},
a3:function a3(){},
em:function em(){},
f:function f(){},
d:function d(){},
Y:function Y(){},
bq:function bq(){},
eG:function eG(){},
eK:function eK(){},
eO:function eO(){},
ck:function ck(){},
eP:function eP(){},
br:function br(){},
cl:function cl(){},
eQ:function eQ(){},
bs:function bs(){},
bt:function bt(){},
aD:function aD(){},
f5:function f5(){},
f6:function f6(){},
bw:function bw(){},
fe:function fe(){},
b1:function b1(){},
fg:function fg(){},
bx:function bx(){},
fh:function fh(){},
L:function L(){},
cA:function cA(){},
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
by:function by(){},
O:function O(a){this.a=a},
r:function r(){},
cC:function cC(){},
bz:function bz(){},
ad:function ad(){},
fG:function fG(){},
fJ:function fJ(){},
cF:function cF(){},
cJ:function cJ(){},
fT:function fT(){},
ao:function ao(){},
fY:function fY(){},
h_:function h_(){},
ae:function ae(){},
h4:function h4(){},
h5:function h5(a){this.a=a},
cQ:function cQ(){},
hd:function hd(){},
he:function he(){},
bF:function bF(){},
hg:function hg(){},
hh:function hh(){},
hi:function hi(){},
aJ:function aJ(){},
hm:function hm(){},
hn:function hn(){},
cX:function cX(){},
aK:function aK(){},
hv:function hv(){},
hx:function hx(){},
b7:function b7(){},
hy:function hy(){},
hz:function hz(){},
aM:function aM(){},
bJ:function bJ(){},
hB:function hB(a){this.a=a},
jH:function jH(){},
hK:function hK(){},
hL:function hL(){},
i6:function i6(){},
de:function de(){},
iq:function iq(){},
iu:function iu(){},
hH:function hH(){},
hM:function hM(a){this.a=a},
hQ:function hQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hN:function hN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hR:function hR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hS:function hS(a){this.a=a},
bK:function bK(a){this.a=a},
n:function n(){},
cE:function cE(a){this.a=a},
fu:function fu(a){this.a=a},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(){},
io:function io(){},
ip:function ip(){},
ix:function ix(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iy:function iy(){},
iv:function iv(){},
ch:function ch(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cD:function cD(){},
jz:function jz(){},
jG:function jG(){},
im:function im(a,b){this.a=a
this.b=b},
dA:function dA(a){this.a=a},
iz:function iz(a){this.a=a},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
dc:function dc(){},
dd:function dd(){},
df:function df(){},
dg:function dg(){},
dj:function dj(){},
dk:function dk(){},
bS:function bS(){},
bT:function bT(){},
dl:function dl(){},
dm:function dm(){},
dr:function dr(){},
du:function du(){},
dv:function dv(){},
bU:function bU(){},
bV:function bV(){},
dw:function dw(){},
dx:function dx(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){}},B={
nQ:function(a){var t,s
t=document
s=W.aD
W.a5(t,"keydown",new B.j2(),!1,s)
W.a5(t,"keyup",new B.j3(),!1,s)
if(!$.nR)W.a5(t,"mousemove",new B.j4(),!1,W.L)
s=W.L
W.a5(t,"mousedown",new B.j5(),!1,s)
W.a5(t,"mouseup",new B.j6(),!1,s)},
mO:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$iH()
r=$.$get$c0()
q=new T.M(new Float32Array(16))
q.W()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fy(a,b,c,0,new T.l(t),-0.02,s,r,q,new T.l(p),new T.l(o),new T.l(n),new T.l(new Float32Array(3)),"camera:orbit",!1,!0)
t.ds(a,b,c,d)
return t},
j2:function j2(){},
j3:function j3(){},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
fy:function fy(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fz:function fz(a){this.a=a},
fA:function fA(a){this.a=a},
fB:function fB(){},
fC:function fC(a){this.a=a},
ms:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.l(new Float32Array(3))
r.q(t,s,d8)
q=new T.l(new Float32Array(3))
q.q(d6,s,d8)
p=new T.l(new Float32Array(3))
p.q(d6,d7,d8)
o=new T.l(new Float32Array(3))
o.q(t,d7,d8)
n=-d8
m=new T.l(new Float32Array(3))
m.q(t,s,n)
l=new T.l(new Float32Array(3))
l.q(t,d7,n)
k=new T.l(new Float32Array(3))
k.q(d6,d7,n)
j=new T.l(new Float32Array(3))
j.q(d6,s,n)
i=new T.l(new Float32Array(3))
i.q(t,d7,n)
h=new T.l(new Float32Array(3))
h.q(t,d7,d8)
g=new T.l(new Float32Array(3))
g.q(d6,d7,d8)
f=new T.l(new Float32Array(3))
f.q(d6,d7,n)
e=new T.l(new Float32Array(3))
e.q(d6,s,d8)
d=new T.l(new Float32Array(3))
d.q(t,s,d8)
c=new T.l(new Float32Array(3))
c.q(t,s,n)
b=new T.l(new Float32Array(3))
b.q(d6,s,n)
a=new T.l(new Float32Array(3))
a.q(d6,s,n)
a0=new T.l(new Float32Array(3))
a0.q(d6,d7,n)
a1=new T.l(new Float32Array(3))
a1.q(d6,d7,d8)
a2=new T.l(new Float32Array(3))
a2.q(d6,s,d8)
a3=new T.l(new Float32Array(3))
a3.q(t,s,n)
a4=new T.l(new Float32Array(3))
a4.q(t,s,d8)
s=new T.l(new Float32Array(3))
s.q(t,d7,d8)
a5=new T.l(new Float32Array(3))
a5.q(t,d7,n)
t=new T.v(new Float32Array(2))
t.v(d3,d5)
n=new T.v(new Float32Array(2))
n.v(d2,d5)
a6=new T.v(new Float32Array(2))
a6.v(d2,d4)
a7=new T.v(new Float32Array(2))
a7.v(d3,d4)
a8=new T.v(new Float32Array(2))
a8.v(d2,d5)
a9=new T.v(new Float32Array(2))
a9.v(d2,d4)
b0=new T.v(new Float32Array(2))
b0.v(d3,d4)
b1=new T.v(new Float32Array(2))
b1.v(d3,d5)
b2=new T.v(new Float32Array(2))
b2.v(d3,d4)
b3=new T.v(new Float32Array(2))
b3.v(d3,d5)
b4=new T.v(new Float32Array(2))
b4.v(d2,d5)
b5=new T.v(new Float32Array(2))
b5.v(d2,d4)
b6=new T.v(new Float32Array(2))
b6.v(d2,d4)
b7=new T.v(new Float32Array(2))
b7.v(d3,d4)
b8=new T.v(new Float32Array(2))
b8.v(d3,d5)
b9=new T.v(new Float32Array(2))
b9.v(d2,d5)
c0=new T.v(new Float32Array(2))
c0.v(d2,d5)
c1=new T.v(new Float32Array(2))
c1.v(d2,d4)
c2=new T.v(new Float32Array(2))
c2.v(d3,d4)
c3=new T.v(new Float32Array(2))
c3.v(d3,d5)
c4=new T.v(new Float32Array(2))
c4.v(d3,d5)
c5=new T.v(new Float32Array(2))
c5.v(d2,d5)
c6=new T.v(new Float32Array(2))
c6.v(d2,d4)
c7=new T.v(new Float32Array(2))
c7.v(d3,d4)
c8=new G.cj(!1,[],[],[],P.T())
c8.au("aTexUV")
c8.au("aNormal")
c8.dg(6)
c8.dh([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.bq("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$l1(),c9<6;++c9){d0=t[c9]
c8.br("aNormal",[d0,d0,d0,d0])}return c8}},G={
n4:function(a){var t,s,r
t=H.B(a.split("\n"),[P.o])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.a9(t,"\n")},
l0:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.c9(a,b)
t.bl(a,s,c)
t.c6(a,s)
r=t.bg(a,s,35713)
if(r!=null&&!r){q=t.bf(a,s)
P.X("E:Compilation failed:")
P.X("E:"+G.n4(c))
P.X("E:Failure:")
P.X(C.i.a1("E:",q))
throw H.c(q)}return s},
kD:function(a){var t=new G.fd(P.T(),a,!1,!0)
t.dr(a)
return t},
kt:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.k2(a[s])}return b},
mA:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])}return b},
mB:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.k2(a[s])
b[t+3]=J.m0(a[s])}return b},
mz:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aQ(a[s],0)
b[t+1]=J.aQ(a[s],1)
b[t+2]=J.aQ(a[s],2)
b[t+3]=J.aQ(a[s],3)}return b},
nb:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gE(t),s=s.gB(s),r=b.x,q=[[P.h,P.z]],p=[P.a0],o=[T.aq],n=[T.l],m=[T.v];s.p();){l=s.gt(s)
if(!r.G(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.ln>0)H.j0("I: "+l)
continue}k=t.h(0,l)
switch($.$get$P().h(0,l).a){case"vec2":b.ae(l,G.mA(H.dO(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.ae(l,G.kt(H.dO(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.ae(l,G.mB(H.dO(k,"$ish",o,"$ash"),null),4)
break
case"float":b.ae(l,new Float32Array(H.iC(H.dO(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.ae(l,G.mz(H.dO(k,"$ish",q,"$ash"),null),4)
break
default:if(H.ai(!1))H.ar("unknown type for "+H.e(l)+" ["+J.lZ(k[0]).k(0)+"] ["+new H.ap(H.iM(k),null).k(0)+"] "+H.e(k))}}},
kv:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.T()
q=J.lO(t.a)
p=new G.ff(t,q,4,r,s,null,0,-1,null,null,P.T(),"meshdata:"+a,!1,!0)
o=G.kt(c.d,null)
r.i(0,"aPosition",J.je(t.a))
p.ch=o
p.bt("aPosition",o,3)
n=$.$get$P().h(0,"aPosition")
if(n==null)H.I("Unknown canonical aPosition")
H.b(s.G(0,"aPosition"))
m=s.h(0,"aPosition")
J.dP(t.a,q)
t.cj(0,m,0)
t.cP(0,r.h(0,"aPosition"),m,n.bv(),5126,!1,0,0)
s=c.dm()
p.y=J.je(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saS(new Uint8Array(H.iC(s)))
p.Q=5121}else if(r<196608){p.saS(new Uint16Array(H.iC(s)))
p.Q=5123}else{p.saS(new Uint32Array(H.iC(s)))
p.Q=5125}J.dP(t.a,q)
s=p.y
r=p.cx
q=J.q(r)
H.b(!!q.$iskY||!!q.$iskZ||!!q.$isl_)
J.jc(t.a,34963,s)
J.k0(t.a,34963,r,35048)
G.nb(c,p)
return p},
kJ:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aE(null,null,null,P.o)
s=c.b
r=d.b
q=c.f
p=J.lM(b.a)
o=G.l0(b.a,35633,s)
J.k_(b.a,p,o)
n=G.l0(b.a,35632,r)
J.k_(b.a,p,n)
if(q.length>0)J.md(b.a,p,q,35980)
J.m5(b.a,p)
if(!J.m4(b.a,p,35714))H.I(J.m3(b.a,p))
t=new G.fP(b,c,d,p,P.jw(c.c,null),P.T(),P.T(),t,null,a,!1,!0)
t.du(a,b,c,d)
return t},
fX:function(a){return new G.fW(a,null,[],[],[],[],0,P.T())},
n1:function(){return new G.cT(!1,!1,!1,!0,1,9729,9729)},
fi:function fi(){},
cY:function cY(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dZ:function dZ(){},
e1:function e1(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cg:function cg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
cU:function cU(a,b,c){this.a=a
this.b=b
this.c=c},
fd:function fd(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
ff:function ff(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fE:function fE(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
ei:function ei(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
fP:function fP(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fW:function fW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fZ:function fZ(){},
cT:function cT(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bI:function bI(){},
eS:function eS(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={cI:function cI(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
_.c=m},h2:function h2(){},h3:function h3(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
ll:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.M(c)
s=b.d
t.cq(0,s)
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
p.ev(new T.aF(o))
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
a.dl(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.H)(s),++l)A.ll(a,s[l],t,d,e)},
cB:function cB(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bB:function bB(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fO:function fO(){},
dM:function(a){var t,s
t=C.W.eK(a,0,new A.iN())
s=536870911&t+(C.b.cR(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iN:function iN(){}},D={
mN:function(){var t,s,r,q,p,o
t=new P.E(0,$.w,null,[null])
s=new P.d0(t,[null])
r=window.navigator
r=(r&&C.X).cV(r,!0).as(new D.f8(s))
q=new D.f9(s)
p=H.a8(r,0)
o=$.w
if(o!==C.d)q=P.l8(q,o)
r.aw(new P.b8(null,new P.E(0,o,null,[p]),2,null,q,[p,p]))
return t},
f8:function f8(a){this.a=a},
f7:function f7(a,b){this.a=a
this.b=b},
f9:function f9(a){this.a=a}},T={
b6:function(a,b,c){var t=new T.l(new Float32Array(3))
t.q(a,b,c)
return t},
aF:function aF(a){this.a=a},
M:function M(a){this.a=a},
v:function v(a){this.a=a},
l:function l(a){this.a=a},
aq:function aq(a){this.a=a}},U={
nK:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t={}
s=document
r=new R.h3(0,0,null,null,null,null)
r.dw(C.p.cU(s,"stats"),"blue","gray")
q=C.p.eY(s,"#webgl-canvas")
p=new G.e1(null,q)
s=(q&&C.J).cT(q,"webgl2",P.an(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.I(P.cf('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.m1(s))
if($.ln>0)P.X("I: "+o)
J.lK(s,0,0,0,1)
J.dQ(s,2929)
n=B.mO(15,10,0,q)
s=new T.M(new Float32Array(16))
s.W()
o=new T.M(new Float32Array(16))
o.W()
m=new G.fE(n,50,1,0.1,1000,s,o,new T.M(new Float32Array(16)),P.T(),"perspective",!1,!0)
m.by()
s=H.B([],[A.bB])
l=new R.cI(q,m,null,p,s,17664,0,0,0,0,"main",!1,!0)
l.dt("main",p,null)
l.ct(null)
W.a5(window,"resize",l.gf1(),!1,W.f)
o=G.kJ("bg",p,$.$get$lk(),$.$get$lj())
k=[]
H.b(!0)
C.a.l(s,new A.bB(o,[],k,"bg",!1,!0))
j=G.kD("bg")
j.d.i(0,"cDepthWrite",!1)
i=new T.l(new Float32Array(3))
i.q(-1,-1,0)
h=new T.l(new Float32Array(3))
h.q(1,-1,0)
g=new T.l(new Float32Array(3))
g.q(1,1,0)
f=new T.l(new Float32Array(3))
f.q(-1,1,0)
e=new T.v(new Float32Array(2))
e.v(0,0)
d=new T.v(new Float32Array(2))
d.v(1,0)
c=new T.v(new Float32Array(2))
c.v(1,1)
b=new T.v(new Float32Array(2))
b.v(0,1)
a=new T.l(new Float32Array(3))
a.q(0,0,1)
a0=new G.cj(!1,[],[],[],P.T())
a0.au("aTexUV")
a0.di([i,h,g,f])
a0.bq("aTexUV",[e,d,c,b])
a0.au("aNormal")
a0.br("aNormal",[a,a,a,a])
o=G.kv("quad",o,a0)
i=new Float32Array(9)
h=new T.M(new Float32Array(16))
h.W()
g=new T.M(new Float32Array(16))
g.W()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
H.b(!0)
C.a.l(k,new A.cB(j,o,[],new T.aF(i),h,g,new T.l(f),new T.l(e),new T.l(d),new T.l(c),"bg",!1,!0))
c=G.kJ("solid",p,$.$get$ly(),$.$get$lx())
d=[]
H.b(!0)
C.a.l(s,new A.bB(c,[m],d,"objects",!1,!0))
a1=G.kD("cube")
a1.a4("uColor",$.$get$kh())
s=G.kv("cube",c,B.ms(!0,1,0,1,0,0.2,0.2,0.2))
o=new Float32Array(9)
k=new T.M(new Float32Array(16))
k.W()
i=new T.M(new Float32Array(16))
i.W()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
a2=new A.cB(a1,s,[],new T.aF(o),k,i,new T.l(h),new T.l(g),new T.l(f),new T.l(new Float32Array(3)),"cube",!1,!0)
a2.bj(-5,0,-5)
H.b(!0)
C.a.l(d,a2)
t.a=null
t.b=null
t.c=0
P.mD([D.mN()],null,!1).as(new U.iZ(t,p,j,new U.iY(t,n,a2,l,r)))},
iY:function iY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,D,T,U]
setFunctionNamesIfNecessary(v)
var $={}
H.jr.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.aH(a)},
k:function(a){return"Instance of '"+H.bA(a)+"'"},
gC:function(a){return new H.ap(H.iM(a),null)}}
J.eX.prototype={
k:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gC:function(a){return C.ar},
$isaj:1}
J.eY.prototype={
A:function(a,b){return null==b},
k:function(a){return"null"},
gw:function(a){return 0},
gC:function(a){return C.al},
$isK:1}
J.bu.prototype={
gw:function(a){return 0},
gC:function(a){return C.ak},
k:function(a){return String(a)},
$iskz:1}
J.fF.prototype={}
J.aL.prototype={}
J.aC.prototype={
k:function(a){var t=a[$.$get$kj()]
return t==null?this.dd(a):J.bm(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjp:1}
J.aA.prototype={
l:function(a,b){if(!!a.fixed$length)H.I(P.u("add"))
a.push(b)},
N:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.I(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.H)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.I(P.ak(a)))
a.push(q)}},
cp:function(a,b){return new H.bv(a,b,[H.a8(a,0),null])},
a9:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
gb2:function(a){if(a.length>0)return a[0]
throw H.c(H.cm())},
gaE:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.cm())},
bk:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.I(P.u("setRange"))
P.kI(b,c,a.length,null,null,null)
t=C.b.a3(c,b)
if(t===0)return
if(e<0)H.I(P.aI(e,0,null,"skipCount",null))
s=J.R(d)
if(C.b.U(e+t,s.gj(d)))throw H.c(H.mL())
if(C.b.V(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bX:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ak(a))}return!1},
d7:function(a,b){if(!!a.immutable$list)H.I(P.u("sort"))
H.n0(a,P.nw())},
aI:function(a){return this.d7(a,null)},
D:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
k:function(a){return P.eW(a,"[","]")},
gB:function(a){return new J.dW(a,a.length,0,null,[H.a8(a,0)])},
gw:function(a){return H.aH(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.I(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jk(b,"newLength",null))
if(b<0)throw H.c(P.aI(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bg(a,b))
if(b>=a.length||b<0)throw H.c(H.bg(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.I(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bg(a,b))
if(b>=a.length||b<0)throw H.c(H.bg(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isk:1,
$ish:1}
J.jq.prototype={}
J.dW.prototype={
gt:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.H(t))
r=this.c
if(r>=s){this.sbz(null)
return!1}this.sbz(t[r]);++this.c
return!0},
sbz:function(a){this.d=a}}
J.aZ.prototype={
S:function(a,b){var t
if(typeof b!=="number")throw H.c(H.Q(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaC(b)
if(this.gaC(a)===t)return 0
if(this.gaC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaC:function(a){return a===0?1/a<0:a<0},
eo:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
aa:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
ep:function(a,b,c){if(this.S(b,c)>0)throw H.c(H.Q(b))
if(this.S(a,b)<0)return b
if(this.S(a,c)>0)return c
return a},
f9:function(a,b){var t
if(b>20)throw H.c(P.aI(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaC(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a1:function(a,b){if(typeof b!=="number")throw H.c(H.Q(b))
return a+b},
a3:function(a,b){if(typeof b!=="number")throw H.c(H.Q(b))
return a-b},
cS:function(a,b){if(typeof b!=="number")throw H.c(H.Q(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.c(H.Q(b))
return a*b},
aK:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bT(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.bT(a,b)},
bT:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=this.e8(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e8:function(a,b){return b>31?0:a>>>b},
cR:function(a,b){if(typeof b!=="number")throw H.c(H.Q(b))
return(a&b)>>>0},
df:function(a,b){if(typeof b!=="number")throw H.c(H.Q(b))
return(a^b)>>>0},
V:function(a,b){if(typeof b!=="number")throw H.c(H.Q(b))
return a<b},
U:function(a,b){if(typeof b!=="number")throw H.c(H.Q(b))
return a>b},
bb:function(a,b){if(typeof b!=="number")throw H.c(H.Q(b))
return a>=b},
gC:function(a){return C.au},
$isF:1,
$asF:function(){return[P.a9]},
$isa0:1,
$isa9:1}
J.cp.prototype={
gC:function(a){return C.at},
$isz:1}
J.co.prototype={
gC:function(a){return C.as}}
J.aB.prototype={
aN:function(a,b){if(b>=a.length)throw H.c(H.bg(a,b))
return a.charCodeAt(b)},
a1:function(a,b){if(typeof b!=="string")throw H.c(P.jk(b,null,null))
return a+b},
d8:function(a,b,c){var t
if(c>a.length)throw H.c(P.aI(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bm:function(a,b){return this.d8(a,b,0)},
bo:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fK(b,null,null))
if(b>c)throw H.c(P.fK(b,null,null))
if(c>a.length)throw H.c(P.fK(c,null,null))
return a.substring(b,c)},
d9:function(a,b){return this.bo(a,b,null)},
f8:function(a){return a.toLowerCase()},
es:function(a,b,c){if(c>a.length)throw H.c(P.aI(c,0,a.length,null,null))
return H.nS(a,b,c)},
S:function(a,b){var t
if(typeof b!=="string")throw H.c(H.Q(b))
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
gC:function(a){return C.am},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.bg(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isF:1,
$asF:function(){return[P.o]},
$iso:1}
H.k.prototype={}
H.b_.prototype={
gB:function(a){return new H.cr(this,this.gj(this),0,null,[H.V(this,"b_",0)])},
aG:function(a,b){return this.dc(0,b)},
f7:function(a,b){var t,s
t=H.B([],[H.V(this,"b_",0)])
C.a.sj(t,this.gj(this))
for(s=0;C.b.V(s,this.gj(this));++s)t[s]=this.u(0,s)
return t},
f6:function(a){return this.f7(a,!0)}}
H.cr.prototype={
gt:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.R(t)
r=s.gj(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.ak(t))
if(C.b.bb(this.c,r)){this.sah(null)
return!1}this.sah(s.u(t,this.c));++this.c
return!0},
sah:function(a){this.d=a}}
H.ct.prototype={
gB:function(a){return new H.fb(null,J.aR(this.a),this.b,this.$ti)},
gj:function(a){return J.bl(this.a)},
$asS:function(a,b){return[b]}}
H.el.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.fb.prototype={
p:function(){var t=this.b
if(t.p()){this.sah(this.c.$1(t.gt(t)))
return!0}this.sah(null)
return!1},
gt:function(a){return this.a},
sah:function(a){this.a=a},
$ascn:function(a,b){return[b]}}
H.bv.prototype={
gj:function(a){return J.bl(this.a)},
u:function(a,b){return this.b.$1(J.lU(this.a,b))},
$ask:function(a,b){return[b]},
$asb_:function(a,b){return[b]},
$asS:function(a,b){return[b]}}
H.cZ.prototype={
gB:function(a){return new H.hA(J.aR(this.a),this.b,this.$ti)}}
H.hA.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gt(t)))return!0
return!1},
gt:function(a){var t=this.a
return t.gt(t)}}
H.aY.prototype={}
H.j7.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.j8.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ie.prototype={
seT:function(a){this.z=a},
seV:function(a){this.ch=a}}
H.ba.prototype={
dG:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dL(s,t)},
bW:function(a,b){if(!this.f.A(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b_()},
f0:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.aq(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bN();++r.d}this.y=!1}this.b_()},
ed:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
f_:function(a){var t,s,r
if(this.ch==null)return
for(t=J.q(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.I(P.u("removeRange"))
P.kI(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d4:function(a,b){if(!this.r.A(0,a))return
this.db=b},
eN:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jx(null,null)
this.cx=t}t.X(0,new H.i8(a,c))},
eM:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aD()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.jx(null,null)
this.cx=t}t.X(0,this.geU())},
eO:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.X(a)
if(b!=null)P.X(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bm(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bL(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.J(0,s)},
am:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.J(o)
p=H.a7(o)
this.eO(q,p)
if(this.db){this.aD()
if(this===u.globalState.e)throw o}}finally{this.cy=H.ns(r)
u.globalState.d=H.jT(t,"$isba")
if(t!=null)$=t.geS()
if(this.cx!=null)for(;n=this.cx,!n.gap(n);)this.cx.cs().$0()}return s},
co:function(a){return this.b.h(0,a)},
dL:function(a,b){var t=this.b
if(t.G(0,a))throw H.c(P.cf("Registry: ports must be registered only once."))
t.i(0,a,b)},
b_:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aD()},
aD:function(){var t,s,r
t=this.cx
if(t!=null)t.Z(0)
for(t=this.b,s=t.gcN(t),s=s.gB(s);s.p();)s.gt(s).dN()
t.Z(0)
this.c.Z(0)
u.globalState.z.aq(0,this.a)
this.dx.Z(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
geS:function(){return this.d},
geu:function(){return this.e}}
H.i8.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hO.prototype={
eC:function(){var t=this.a
if(t.b===t.c)return
return t.cs()},
cv:function(){var t,s,r
t=this.eC()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gap(s)}else s=!1
else s=!1
else s=!1
if(s)H.I(P.cf("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gap(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.an(["command","close"])
r=new H.a6(!0,P.bb(null,P.z)).L(r)
s.toString
self.postMessage(r)}return!1}t.eX()
return!0},
bR:function(){if(self.window!=null)new H.hP(this).$0()
else for(;this.cv(););},
ar:function(){var t,s,r,q,p
if(!u.globalState.x)this.bR()
else try{this.bR()}catch(r){t=H.J(r)
s=H.a7(r)
q=u.globalState.Q
p=P.an(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a6(!0,P.bb(null,P.z)).L(p)
q.toString
self.postMessage(p)}}}
H.hP.prototype={
$0:function(){if(!this.a.cv())return
P.n3(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aO.prototype={
eX:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.am(this.b)}}
H.id.prototype={}
H.eU.prototype={
$0:function(){H.mH(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eV.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.bh(s,{func:1,args:[P.K,P.K]}))s.$2(this.e,this.d)
else if(H.bh(s,{func:1,args:[P.K]}))s.$1(this.e)
else s.$0()}t.b_()},
$S:function(){return{func:1,v:true}}}
H.hI.prototype={}
H.bc.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.ng(b)
if(t.geu()===s){s=J.R(r)
switch(s.h(r,0)){case"pause":t.bW(s.h(r,1),s.h(r,2))
break
case"resume":t.f0(s.h(r,1))
break
case"add-ondone":t.ed(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.f_(s.h(r,1))
break
case"set-errors-fatal":t.d4(s.h(r,1),s.h(r,2))
break
case"ping":t.eN(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eM(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aq(0,s)
break}return}u.globalState.f.a.X(0,new H.aO(t,new H.ig(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bc){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.ig.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dJ(0,this.b)},
$S:function(){return{func:1}}}
H.bW.prototype={
J:function(a,b){var t,s,r
t=P.an(["command","message","port",this,"msg",b])
s=new H.a6(!0,P.bb(null,P.z)).L(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bW){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.df((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cH.prototype={
dN:function(){this.c=!0
this.b=null},
dJ:function(a,b){if(this.c)return
this.b.$1(b)},
$ismW:1}
H.hj.prototype={
dz:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.X(0,new H.aO(s,new H.hk(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iJ()
this.c=self.setTimeout(H.as(new H.hl(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.hk.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hl.prototype={
$0:function(){var t=this.a
t.c=null
H.iX()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.av.prototype={
gw:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.av){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a6.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.q(a)
if(!!t.$isb2)return["buffer",a]
if(!!t.$isaG)return["typed",a]
if(!!t.$isp)return this.d0(a)
if(!!t.$ismE){r=this.gcY()
q=t.gE(a)
q=H.jy(q,r,H.V(q,"S",0),null)
q=P.kB(q,!0,H.V(q,"S",0))
t=t.gcN(a)
t=H.jy(t,r,H.V(t,"S",0),null)
return["map",q,P.kB(t,!0,H.V(t,"S",0))]}if(!!t.$iskz)return this.d1(a)
if(!!t.$isa)this.cL(a)
if(!!t.$ismW)this.at(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbc)return this.d2(a)
if(!!t.$isbW)return this.d3(a)
if(!!t.$isax){p=a.$static_name
if(p==null)this.at(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isav)return["capability",a.a]
if(!(a instanceof P.C))this.cL(a)
return["dart",u.classIdExtractor(a),this.d_(u.classFieldsExtractor(a))]},
at:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cL:function(a){return this.at(a,null)},
d0:function(a){var t
H.b(typeof a!=="string")
t=this.cZ(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.at(a,"Can't serialize indexable: ")},
cZ:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
d_:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
d1:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.at(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
d3:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d2:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aN.prototype={
a_:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.dV("Bad serialized message: "+H.e(a)))
switch(C.a.gb2(a)){case"ref":H.b(J.D(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.D(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.D(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.D(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.am(H.B(this.al(t),[null]))
case"extendable":H.b(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.B(this.al(t),[null])
case"mutable":H.b(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.al(t)
case"const":H.b(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.am(H.B(this.al(t),[null]))
case"map":return this.eF(a)
case"sendport":return this.eG(a)
case"raw sendport":H.b(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eE(a)
case"function":H.b(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.D(a[0],"capability"))
return new H.av(a[1])
case"dart":H.b(J.D(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.al(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
al:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.a_(a[t]))
return a},
eF:function(a){var t,s,r,q,p
H.b(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.T()
C.a.l(this.b,r)
t=J.m6(t,this.geD()).f6(0)
for(q=J.R(s),p=0;p<t.length;++p)r.i(0,t[p],this.a_(q.h(s,p)))
return r},
eG:function(a){var t,s,r,q,p,o,n
H.b(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.co(r)
if(o==null)return
n=new H.bc(o,s)}else n=new H.bW(t,r,s)
C.a.l(this.b,n)
return n},
eE:function(a){var t,s,r,q,p,o
H.b(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.R(t),p=J.R(s),o=0;C.b.V(o,q.gj(t));++o)r[q.h(t,o)]=this.a_(p.h(s,o))
return r}}
H.fN.prototype={}
H.hp.prototype={
P:function(a){var t,s,r
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
H.fv.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.f_.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.ht.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.j9.prototype={
$1:function(a){if(!!J.q(a).$isaX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.dq.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb4:1}
H.iS.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iT.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iU.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iV.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iW.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.ax.prototype={
k:function(a){return"Closure '"+H.bA(this).trim()+"'"},
$isjp:1,
gfd:function(){return this},
$D:null}
H.hf.prototype={}
H.h1.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bn.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aH(this.a)
else s=typeof t!=="object"?J.bk(t):H.aH(t)
return(s^H.aH(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bA(t)+"'")}}
H.hr.prototype={
k:function(a){return this.a}}
H.e0.prototype={
k:function(a){return this.a}}
H.fS.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hC.prototype={
k:function(a){return C.i.a1("Assertion failed: ",P.ce(this.a))}}
H.ap.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.bk(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ap){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ac.prototype={
gj:function(a){return this.a},
gap:function(a){return this.a===0},
gE:function(a){return new H.f2(this,[H.a8(this,0)])},
gcN:function(a){return H.jy(this.gE(this),new H.eZ(this),H.a8(this,0),H.a8(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bK(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bK(s,b)}else return this.eP(b)},
eP:function(a){var t=this.d
if(t==null)return!1
return this.ao(this.az(t,this.an(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ai(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ai(r,b)
return s==null?null:s.b}else return this.eQ(b)},
eQ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.az(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aU()
this.b=t}this.bB(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aU()
this.c=s}this.bB(s,b,c)}else{r=this.d
if(r==null){r=this.aU()
this.d=r}q=this.an(b)
p=this.az(r,q)
if(p==null)this.aW(r,q,[this.aV(b,c)])
else{o=this.ao(p,b)
if(o>=0)p[o].b=c
else p.push(this.aV(b,c))}}},
aq:function(a,b){if(typeof b==="string")return this.bQ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bQ(this.c,b)
else return this.eR(b)},
eR:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.az(t,this.an(a))
r=this.ao(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bU(q)
return q.b},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aT()}},
a7:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ak(this))
t=t.c}},
bB:function(a,b,c){var t=this.ai(a,b)
if(t==null)this.aW(a,b,this.aV(b,c))
else t.b=c},
bQ:function(a,b){var t
if(a==null)return
t=this.ai(a,b)
if(t==null)return
this.bU(t)
this.bL(a,b)
return t.b},
aT:function(){this.r=this.r+1&67108863},
aV:function(a,b){var t,s
t=new H.f1(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aT()
return t},
bU:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aT()},
an:function(a){return J.bk(a)&0x3ffffff},
ao:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
k:function(a){return P.kC(this)},
ai:function(a,b){return a[b]},
az:function(a,b){return a[b]},
aW:function(a,b,c){H.b(c!=null)
a[b]=c},
bL:function(a,b){delete a[b]},
bK:function(a,b){return this.ai(a,b)!=null},
aU:function(){var t=Object.create(null)
this.aW(t,"<non-identifier-key>",t)
this.bL(t,"<non-identifier-key>")
return t},
$ismE:1}
H.eZ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.f1.prototype={}
H.f2.prototype={
gj:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.f3(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f3.prototype={
gt:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ak(t))
else{t=this.c
if(t==null){this.sbA(null)
return!1}else{this.sbA(t.a)
this.c=this.c.c
return!0}}},
sbA:function(a){this.d=a}}
H.iO.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.o]}}}
H.iQ.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.o]}}}
H.b2.prototype={
gC:function(a){return C.ad},
$isb2:1}
H.aG.prototype={$isaG:1}
H.fj.prototype={
gC:function(a){return C.ae}}
H.cw.prototype={
gj:function(a){return a.length},
$isp:1,
$asp:function(){},
$ist:1,
$ast:function(){}}
H.cx.prototype={
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ah(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.a0]},
$asaY:function(){return[P.a0]},
$asm:function(){return[P.a0]},
$ish:1,
$ash:function(){return[P.a0]}}
H.cy.prototype={
i:function(a,b,c){H.ah(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.z]},
$asaY:function(){return[P.z]},
$asm:function(){return[P.z]},
$ish:1,
$ash:function(){return[P.z]}}
H.cv.prototype={
gC:function(a){return C.af},
$iseI:1}
H.fk.prototype={
gC:function(a){return C.ag}}
H.fl.prototype={
gC:function(a){return C.ah},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.fm.prototype={
gC:function(a){return C.ai},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskw:1}
H.fn.prototype={
gC:function(a){return C.aj},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.fo.prototype={
gC:function(a){return C.an},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskY:1}
H.fp.prototype={
gC:function(a){return C.ao},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskZ:1}
H.cz.prototype={
gC:function(a){return C.ap},
gj:function(a){return a.length},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.fq.prototype={
gC:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$isl_:1}
H.bN.prototype={}
H.bO.prototype={}
H.bP.prototype={}
H.bQ.prototype={}
P.hE.prototype={
$1:function(a){var t,s
H.iX()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hD.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iJ()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hF.prototype={
$0:function(){H.iX()
this.a.$0()},
$S:function(){return{func:1}}}
P.hG.prototype={
$0:function(){H.iX()
this.a.$0()},
$S:function(){return{func:1}}}
P.Z.prototype={}
P.eN.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.c)this.d.H(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.c)this.d.H(t.c,t.d)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.eM.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.b]=a
if(s===0)this.c.bJ(r)}else if(t.b===0&&!this.e)this.c.H(t.c,t.d)},
$S:function(a){return{func:1,args:[,]}}}
P.jm.prototype={}
P.hJ.prototype={
er:function(a,b){if(a==null)a=new P.b3()
if(this.a.a!==0)throw H.c(P.cO("Future already completed"))
$.w.toString
this.H(a,b)},
eq:function(a){return this.er(a,null)}}
P.d0.prototype={
ak:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cO("Future already completed"))
t.bC(b)},
H:function(a,b){this.a.bD(a,b)}}
P.iw.prototype={
ak:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.cO("Future already completed"))
t.ag(b)},
H:function(a,b){this.a.H(a,b)}}
P.b8.prototype={
eW:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b7(this.d,a.a)},
eL:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.bh(s,{func:1,args:[P.C,P.b4]}))return t.f2(s,a.a,a.b)
else return t.b7(s,a.a)}}
P.E.prototype={
b9:function(a,b){var t,s,r
t=$.w
if(t!==C.d){t.toString
if(b!=null)b=P.l8(b,t)}s=new P.E(0,t,null,[null])
r=b==null?1:3
this.aw(new P.b8(null,s,r,a,b,[H.a8(this,0),null]))
return s},
as:function(a){return this.b9(a,null)},
fc:function(a){var t,s
t=$.w
s=new P.E(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.a8(this,0)
this.aw(new P.b8(null,s,8,a,null,[t,t]))
return s},
aM:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
aw:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jT(this.c,"$isb8")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.aw(a)
return}this.aM(t)}H.b(this.a>=4)
t=this.b
t.toString
P.be(null,null,t,new P.hU(this,a))}},
bP:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bP(a)
return}this.aM(s)}H.b(this.a>=4)
t.a=this.aB(a)
s=this.b
s.toString
P.be(null,null,s,new P.i1(t,this))}},
aA:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aB(t)},
aB:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ag:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.c_(a,"$isZ",t,"$asZ")
if(s){t=H.c_(a,"$isE",t,null)
if(t)P.hX(a,this)
else P.l2(a,this)}else{r=this.aA()
H.b(this.a<4)
this.a=4
this.c=a
P.b9(this,r)}},
bJ:function(a){var t
H.b(this.a<4)
H.b(!J.q(a).$isZ)
t=this.aA()
H.b(this.a<4)
this.a=4
this.c=a
P.b9(this,t)},
H:function(a,b){var t
H.b(this.a<4)
t=this.aA()
H.b(this.a<4)
this.a=8
this.c=new P.aS(a,b)
P.b9(this,t)},
dO:function(a){return this.H(a,null)},
bC:function(a){var t
H.b(this.a<4)
t=H.c_(a,"$isZ",this.$ti,"$asZ")
if(t){this.dM(a)
return}H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.be(null,null,t,new P.hW(this,a))},
dM:function(a){var t=H.c_(a,"$isE",this.$ti,null)
if(t){if(a.a===8){H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.be(null,null,t,new P.i0(this,a))}else P.hX(a,this)
return}P.l2(a,this)},
bD:function(a,b){var t
H.b(this.a<4)
H.b(this.a===0)
this.a=1
t=this.b
t.toString
P.be(null,null,t,new P.hV(this,a,b))},
$isZ:1,
gaY:function(){return this.a},
ge5:function(){return this.c}}
P.hU.prototype={
$0:function(){P.b9(this.a,this.b)},
$S:function(){return{func:1}}}
P.i1.prototype={
$0:function(){P.b9(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hY.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.ag(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hZ.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.H(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.i_.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.hW.prototype={
$0:function(){this.a.bJ(this.b)},
$S:function(){return{func:1}}}
P.i0.prototype={
$0:function(){P.hX(this.b,this.a)},
$S:function(){return{func:1}}}
P.hV.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.i4.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cu(q.d)}catch(n){s=H.J(n)
r=H.a7(n)
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
return}if(!!J.q(t).$isZ){if(t instanceof P.E&&t.gaY()>=4){if(t.gaY()===8){q=t
H.b(q.gaY()===8)
p=this.b
p.b=q.ge5()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.as(new P.i5(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i5.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.i3.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b7(r.d,this.c)}catch(q){t=H.J(q)
s=H.a7(q)
r=this.a
r.b=new P.aS(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i2.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eW(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eL(t)
p.a=!1}}catch(o){s=H.J(o)
r=H.a7(o)
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
P.d_.prototype={}
P.bD.prototype={
gj:function(a){var t,s
t={}
s=new P.E(0,$.w,null,[P.z])
t.a=0
this.cn(new P.h9(t),!0,new P.ha(t,s),s.gbI())
return s},
gb2:function(a){var t,s
t={}
s=new P.E(0,$.w,null,[H.V(this,"bD",0)])
t.a=null
t.a=this.cn(new P.h7(t,this,s),!0,new P.h8(s),s.gbI())
return s}}
P.h9.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.ha.prototype={
$0:function(){this.b.ag(this.a.a)},
$S:function(){return{func:1}}}
P.h7.prototype={
$1:function(a){P.nf(this.a.a,this.c,a)},
$S:function(a){return{func:1,args:[H.V(this.b,"bD",0)]}}}
P.h8.prototype={
$0:function(){var t,s,r,q
try{r=H.cm()
throw H.c(r)}catch(q){t=H.J(q)
s=H.a7(q)
P.nh(this.a,t,s)}},
$S:function(){return{func:1}}}
P.h6.prototype={}
P.iB.prototype={
$0:function(){return this.a.ag(this.b)},
$S:function(){return{func:1}}}
P.jB.prototype={}
P.aS.prototype={
k:function(a){return H.e(this.a)},
$isaX:1}
P.iA.prototype={}
P.iE.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.b3()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ii.prototype={
f3:function(a){var t,s,r
try{if(C.d===$.w){a.$0()
return}P.l9(null,null,this,a)}catch(r){t=H.J(r)
s=H.a7(r)
P.iD(null,null,this,t,s)}},
f4:function(a,b){var t,s,r
try{if(C.d===$.w){a.$1(b)
return}P.la(null,null,this,a,b)}catch(r){t=H.J(r)
s=H.a7(r)
P.iD(null,null,this,t,s)}},
ek:function(a){return new P.ik(this,a)},
b0:function(a){return new P.ij(this,a)},
el:function(a){return new P.il(this,a)},
h:function(a,b){return},
cu:function(a){if($.w===C.d)return a.$0()
return P.l9(null,null,this,a)},
b7:function(a,b){if($.w===C.d)return a.$1(b)
return P.la(null,null,this,a,b)},
f2:function(a,b,c){if($.w===C.d)return a.$2(b,c)
return P.nl(null,null,this,a,b,c)}}
P.ik.prototype={
$0:function(){return this.a.cu(this.b)},
$S:function(){return{func:1}}}
P.ij.prototype={
$0:function(){return this.a.f3(this.b)},
$S:function(){return{func:1}}}
P.il.prototype={
$1:function(a){return this.a.f4(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.ib.prototype={
an:function(a){return H.nM(a)&0x3ffffff},
ao:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i9.prototype={
gB:function(a){var t=new P.bL(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
D:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dP(b)},
dP:function(a){var t=this.d
if(t==null)return!1
return this.ay(t[this.ax(a)],a)>=0},
co:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.D(0,a)?a:null
else return this.dY(a)},
dY:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ax(a)]
r=this.ay(s,a)
if(r<0)return
return J.aQ(s,r).gdR()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jL()
this.b=t}return this.bF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jL()
this.c=s}return this.bF(s,b)}else return this.X(0,b)},
X:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jL()
this.d=t}s=this.ax(b)
r=t[s]
if(r==null){q=[this.aP(b)]
H.b(q!=null)
t[s]=q}else{if(this.ay(r,b)>=0)return!1
r.push(this.aP(b))}return!0},
aq:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bG(this.c,b)
else return this.e_(0,b)},
e_:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ax(b)]
r=this.ay(s,b)
if(r<0)return!1
this.bH(s.splice(r,1)[0])
return!0},
Z:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aO()}},
bF:function(a,b){var t
if(a[b]!=null)return!1
t=this.aP(b)
H.b(!0)
a[b]=t
return!0},
bG:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bH(t)
delete a[b]
return!0},
aO:function(){this.r=this.r+1&67108863},
aP:function(a){var t,s
t=new P.ia(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aO()
return t},
bH:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aO()},
ax:function(a){return J.bk(a)&0x3ffffff},
ay:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1}}
P.ia.prototype={
gdR:function(){return this.a}}
P.bL.prototype={
gt:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ak(t))
else{t=this.c
if(t==null){this.saf(null)
return!1}else{this.saf(t.a)
this.c=this.c.b
return!0}}},
saf:function(a){this.d=a}}
P.i7.prototype={}
P.jv.prototype={$isk:1}
P.cq.prototype={$isk:1,$ish:1}
P.m.prototype={
gB:function(a){return new H.cr(a,this.gj(a),0,null,[H.V(a,"m",0)])},
u:function(a,b){return this.h(a,b)},
cp:function(a,b){return new H.bv(a,b,[H.V(a,"m",0),null])},
eK:function(a,b,c){var t,s,r,q
t=this.gj(a)
for(s=b,r=0;C.b.V(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gj(a)
if(t==null?q!=null:t!==q)throw H.c(P.ak(a))}return s},
k:function(a){return P.eW(a,"[","]")}}
P.cs.prototype={}
P.fa.prototype={
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
a7:function(a,b){var t,s
for(t=J.aR(this.gE(a));t.p();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.bl(this.gE(a))},
k:function(a){return P.kC(a)},
$isa_:1}
P.f4.prototype={
dq:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbS(H.B(t,[b]))},
gB:function(a){return new P.ic(this,this.c,this.d,this.b,null,this.$ti)},
gap:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=this.gj(this)
if(C.b.U(0,b)||b>=t)H.I(P.A(b,this,"index",null,t))
return this.a[(C.b.a1(this.b,b)&this.a.length-1)>>>0]},
Z:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eW(this,"{","}")},
cs:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.cm());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
X:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bN();++this.d},
bN:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bk(s,0,q,t,r)
C.a.bk(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbS(s)},
sbS:function(a){this.a=a}}
P.ic.prototype={
gt:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.I(P.ak(t))
s=this.d
if(s===this.b){this.saf(null)
return!1}this.saf(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saf:function(a){this.e=a}}
P.fV.prototype={
N:function(a,b){var t
for(t=J.aR(b);t.p();)this.l(0,t.gt(t))},
k:function(a){return P.eW(this,"{","}")},
$isk:1}
P.fU.prototype={}
P.bM.prototype={}
P.aj.prototype={}
P.F.prototype={}
P.ay.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.ay))return!1
return this.a===b.a&&this.b===b.b},
S:function(a,b){return C.b.S(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aX(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mt(H.mV(this))
s=P.c8(H.mT(this))
r=P.c8(H.mP(this))
q=P.c8(H.mQ(this))
p=P.c8(H.mS(this))
o=P.c8(H.mU(this))
n=P.mu(H.mR(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isF:1,
$asF:function(){return[P.ay]}}
P.a0.prototype={}
P.az.prototype={
V:function(a,b){return C.b.V(this.a,b.gdQ())},
U:function(a,b){return C.b.U(this.a,b.gdQ())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.az))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
S:function(a,b){return C.b.S(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ek()
s=this.a
if(s<0)return"-"+new P.az(0-s).k(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.ej().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isF:1,
$asF:function(){return[P.az]}}
P.ej.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.z]}}}
P.ek.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.o,args:[P.z]}}}
P.aX.prototype={}
P.c5.prototype={
k:function(a){return"Assertion failed"}}
P.b3.prototype={
k:function(a){return"Throw of null."}}
P.a1.prototype={
gaR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaQ:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaR()+s+r
if(!this.a)return q
p=this.gaQ()
o=P.ce(this.b)
return q+p+": "+H.e(o)}}
P.cG.prototype={
gaR:function(){return"RangeError"},
gaQ:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eT.prototype={
gaR:function(){return"RangeError"},
gaQ:function(){H.b(this.a)
if(J.lB(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.hu.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.hs.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b5.prototype={
k:function(a){return"Bad state: "+this.a}}
P.e2.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.ce(t))+"."}}
P.cN.prototype={
k:function(a){return"Stack Overflow"},
$isaX:1}
P.eb.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.jo.prototype={}
P.hT.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.en.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.I(P.jk(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kF(b,"expando$values")
return s==null?null:H.kF(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.z.prototype={}
P.S.prototype={
aG:function(a,b){return new H.cZ(this,b,[H.V(this,"S",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gB(this)
for(s=0;t.p();)++s
return s},
ga2:function(a){var t,s
t=this.gB(this)
if(!t.p())throw H.c(H.cm())
s=t.gt(t)
if(t.p())throw H.c(H.mM())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ml("index"))
if(b<0)H.I(P.aI(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.p();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.A(b,this,"index",null,s))},
k:function(a){return P.mK(this,"(",")")}}
P.cn.prototype={}
P.h.prototype={$isk:1}
P.a_.prototype={}
P.K.prototype={
gw:function(a){return P.C.prototype.gw.call(this,this)},
k:function(a){return"null"}}
P.a9.prototype={$isF:1,
$asF:function(){return[P.a9]}}
P.C.prototype={constructor:P.C,$isC:1,
A:function(a,b){return this===b},
gw:function(a){return H.aH(this)},
k:function(a){return"Instance of '"+H.bA(this)+"'"},
gC:function(a){return new H.ap(H.iM(this),null)},
toString:function(){return this.k(this)}}
P.b4.prototype={}
P.o.prototype={$isF:1,
$asF:function(){return[P.o]}}
P.bE.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga5:function(){return this.a}}
P.jE.prototype={}
W.j.prototype={}
W.c4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dS.prototype={
gj:function(a){return a.length}}
W.dT.prototype={
k:function(a){return String(a)}}
W.dU.prototype={
k:function(a){return String(a)}}
W.aU.prototype={$isaU:1}
W.au.prototype={$isau:1}
W.c6.prototype={
cT:function(a,b,c){var t=this.dT(a,b,P.nv(c,null))
return t},
dT:function(a,b,c){return a.getContext(b,c)}}
W.e_.prototype={
aH:function(a){return P.iG(a.getContextAttributes())}}
W.aw.prototype={
gj:function(a){return a.length}}
W.e3.prototype={
gj:function(a){return a.length}}
W.e4.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.e6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.aV.prototype={
bE:function(a,b){var t,s
t=$.$get$ki()
s=t[b]
if(typeof s==="string")return s
s=this.e9(a,b)
t[b]=s
return s},
e9:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mv()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e7.prototype={}
W.a2.prototype={}
W.aW.prototype={}
W.e8.prototype={
gj:function(a){return a.length}}
W.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.ea.prototype={
gj:function(a){return a.length}}
W.ec.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.ed.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c9.prototype={}
W.bo.prototype={
ee:function(a,b){return a.adoptNode(b)},
cU:function(a,b){return a.getElementById(b)},
eY:function(a,b){return a.querySelector(b)}}
W.ee.prototype={
k:function(a){return String(a)}}
W.ca.prototype={
ez:function(a,b){return a.createHTMLDocument(b)}}
W.ef.prototype={
gaF:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.cb.prototype={
gaF:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.cc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.U]},
$isk:1,
$ask:function(){return[P.U]},
$ist:1,
$ast:function(){return[P.U]},
$asm:function(){return[P.U]},
$ish:1,
$ash:function(){return[P.U]},
$asn:function(){return[P.U]}}
W.cd.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gab(a))+" x "+H.e(this.ga8(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isU)return!1
return a.left===t.gcl(b)&&a.top===t.gcB(b)&&this.gab(a)===t.gab(b)&&this.ga8(a)===t.ga8(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gab(a)
q=this.ga8(a)
return W.l6(W.aP(W.aP(W.aP(W.aP(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga8:function(a){return a.height},
gcl:function(a){return a.left},
gcB:function(a){return a.top},
gab:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isU:1,
$asU:function(){}}
W.eg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.o]},
$isk:1,
$ask:function(){return[P.o]},
$ist:1,
$ast:function(){return[P.o]},
$asm:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asn:function(){return[P.o]}}
W.eh.prototype={
gj:function(a){return a.length}}
W.a3.prototype={
gei:function(a){return new W.hM(a)},
k:function(a){return a.localName},
O:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kr
if(t==null){t=H.B([],[W.cD])
s=new W.cE(t)
C.a.l(t,W.l3(null))
C.a.l(t,W.l7())
$.kr=s
d=s}else d=t
t=$.kq
if(t==null){t=new W.dA(d)
$.kq=t
c=t}else{t.a=d
c=t}}if($.al==null){t=document
s=t.implementation
s=(s&&C.K).ez(s,"")
$.al=s
$.jn=s.createRange()
s=$.al
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.al.head;(t&&C.L).R(t,r)}t=$.al
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jT(s,"$isau")}t=$.al
if(!!this.$isau)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.al.body;(t&&C.n).R(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.D(C.V,a.tagName)){t=$.jn;(t&&C.C).cX(t,q)
t=$.jn
p=(t&&C.C).ex(t,b)}else{q.innerHTML=b
p=$.al.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.R(p,s)}t=$.al.body
if(q==null?t!=null:q!==t)J.k4(q)
c.bi(p)
C.p.ee(document,p)
return p},
ey:function(a,b,c){return this.O(a,b,c,null)},
d6:function(a,b,c,d){a.textContent=null
this.R(a,this.O(a,b,c,d))},
d5:function(a,b){return this.d6(a,b,null,null)},
ac:function(a,b){return a.getAttribute(b)},
e0:function(a,b){return a.removeAttribute(b)},
$isa3:1,
gf5:function(a){return a.tagName}}
W.em.prototype={
$1:function(a){return!!J.q(a).$isa3},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dK:function(a,b,c,d){return a.addEventListener(b,H.as(c,1),!1)},
e2:function(a,b,c,d){return a.removeEventListener(b,H.as(c,1),!1)}}
W.Y.prototype={$isY:1}
W.bq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.Y]},
$isk:1,
$ask:function(){return[W.Y]},
$ist:1,
$ast:function(){return[W.Y]},
$asm:function(){return[W.Y]},
$ish:1,
$ash:function(){return[W.Y]},
$isbq:1,
$asn:function(){return[W.Y]}}
W.eG.prototype={
gj:function(a){return a.length}}
W.eK.prototype={
gj:function(a){return a.length}}
W.eO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.ck.prototype={}
W.eP.prototype={
gj:function(a){return a.length}}
W.br.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.cl.prototype={}
W.eQ.prototype={
J:function(a,b){return a.send(b)}}
W.bs.prototype={}
W.bt.prototype={$isbt:1}
W.aD.prototype={$isaD:1}
W.f5.prototype={
k:function(a){return String(a)}}
W.f6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.bw.prototype={}
W.fe.prototype={
gj:function(a){return a.length}}
W.b1.prototype={$isb1:1}
W.fg.prototype={
fe:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.bx.prototype={}
W.fh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cu]},
$isk:1,
$ask:function(){return[W.cu]},
$ist:1,
$ast:function(){return[W.cu]},
$asm:function(){return[W.cu]},
$ish:1,
$ash:function(){return[W.cu]},
$asn:function(){return[W.cu]}}
W.L.prototype={$isL:1}
W.cA.prototype={
cW:function(a,b,c){var t,s,r,q
t=W.b1
s=new P.E(0,$.w,null,[t])
r=new P.d0(s,[t])
q=P.an(["audio",!1,"video",!0])
if(!a.getUserMedia)a.getUserMedia=a.getUserMedia||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia
this.dU(a,new P.is([],[]).ba(q),new W.fr(r),new W.fs(r))
return s},
cV:function(a,b){return this.cW(a,!1,b)},
dU:function(a,b,c,d){return a.getUserMedia(b,H.as(c,1),H.as(d,1))}}
W.fr.prototype={
$1:function(a){this.a.ak(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.fs.prototype={
$1:function(a){this.a.eq(a)},
$S:function(a){return{func:1,args:[,]}}}
W.by.prototype={}
W.O.prototype={
ga2:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.cO("No elements"))
if(s>1)throw H.c(P.cO("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.R(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lE(t,c,C.A.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.ch(t,t.length,-1,null,[H.V(t,"n",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.A.h(this.a.childNodes,b)},
$ask:function(){return[W.r]},
$ascq:function(){return[W.r]},
$asm:function(){return[W.r]},
$ash:function(){return[W.r]},
$asbM:function(){return[W.r]}}
W.r.prototype={
eZ:function(a){var t=a.parentNode
if(t!=null)J.ja(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.da(a):t},
R:function(a,b){return a.appendChild(b)},
e1:function(a,b){return a.removeChild(b)},
e3:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gb5:function(a){return a.previousSibling}}
W.cC.prototype={
b6:function(a){return a.previousNode()}}
W.bz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ad.prototype={
gj:function(a){return a.length}}
W.fG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ad]},
$isk:1,
$ask:function(){return[W.ad]},
$ist:1,
$ast:function(){return[W.ad]},
$asm:function(){return[W.ad]},
$ish:1,
$ash:function(){return[W.ad]},
$asn:function(){return[W.ad]}}
W.fJ.prototype={
J:function(a,b){return a.send(b)}}
W.cF.prototype={
ex:function(a,b){return a.createContextualFragment(b)},
cX:function(a,b){return a.selectNodeContents(b)}}
W.cJ.prototype={
J:function(a,b){return a.send(b)}}
W.fT.prototype={
gj:function(a){return a.length}}
W.ao.prototype={}
W.fY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cL]},
$isk:1,
$ask:function(){return[W.cL]},
$ist:1,
$ast:function(){return[W.cL]},
$asm:function(){return[W.cL]},
$ish:1,
$ash:function(){return[W.cL]},
$asn:function(){return[W.cL]}}
W.h_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cM]},
$isk:1,
$ask:function(){return[W.cM]},
$ist:1,
$ast:function(){return[W.cM]},
$asm:function(){return[W.cM]},
$ish:1,
$ash:function(){return[W.cM]},
$asn:function(){return[W.cM]}}
W.ae.prototype={
gj:function(a){return a.length}}
W.h4.prototype={
h:function(a,b){return this.bM(a,b)},
a7:function(a,b){var t,s
for(t=0;!0;++t){s=this.dX(a,t)
if(s==null)return
b.$2(s,this.bM(a,s))}},
gE:function(a){var t=H.B([],[P.o])
this.a7(a,new W.h5(t))
return t},
gj:function(a){return a.length},
bM:function(a,b){return a.getItem(b)},
dX:function(a,b){return a.key(b)},
$asb0:function(){return[P.o,P.o]},
$isa_:1,
$asa_:function(){return[P.o,P.o]}}
W.h5.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cQ.prototype={
O:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=W.mw("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.O(s).N(0,new W.O(t))
return s}}
W.hd.prototype={
O:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.O(t.createElement("table"),b,c,d)
t.toString
t=new W.O(t)
r=t.ga2(t)
r.toString
t=new W.O(r)
q=t.ga2(t)
s.toString
q.toString
new W.O(s).N(0,new W.O(q))
return s}}
W.he.prototype={
O:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aJ(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.H.O(t.createElement("table"),b,c,d)
t.toString
t=new W.O(t)
r=t.ga2(t)
s.toString
r.toString
new W.O(s).N(0,new W.O(r))
return s}}
W.bF.prototype={$isbF:1}
W.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cS]},
$isk:1,
$ask:function(){return[W.cS]},
$ist:1,
$ast:function(){return[W.cS]},
$asm:function(){return[W.cS]},
$ish:1,
$ash:function(){return[W.cS]},
$asn:function(){return[W.cS]}}
W.hh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cR]},
$isk:1,
$ask:function(){return[W.cR]},
$ist:1,
$ast:function(){return[W.cR]},
$asm:function(){return[W.cR]},
$ish:1,
$ash:function(){return[W.cR]},
$asn:function(){return[W.cR]}}
W.hi.prototype={
gj:function(a){return a.length}}
W.aJ.prototype={$isaJ:1}
W.hm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cW]},
$isk:1,
$ask:function(){return[W.cW]},
$ist:1,
$ast:function(){return[W.cW]},
$asm:function(){return[W.cW]},
$ish:1,
$ash:function(){return[W.cW]},
$asn:function(){return[W.cW]}}
W.hn.prototype={
gj:function(a){return a.length}}
W.cX.prototype={
b6:function(a){return a.previousNode()}}
W.aK.prototype={}
W.hv.prototype={
k:function(a){return String(a)}}
W.hx.prototype={
gm:function(a){return a.x},
gF:function(a){return a.z}}
W.b7.prototype={$isb7:1}
W.hy.prototype={
gj:function(a){return a.length}}
W.hz.prototype={
J:function(a,b){return a.send(b)}}
W.aM.prototype={
geB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaM:1}
W.bJ.prototype={
geh:function(a){var t,s
t=P.a9
s=new P.E(0,$.w,null,[t])
this.dS(a)
this.e4(a,W.ld(new W.hB(new P.iw(s,[t]))))
return s},
e4:function(a,b){return a.requestAnimationFrame(H.as(b,1))},
dS:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
ef:function(a,b){return a.alert(b)}}
W.hB.prototype={
$1:function(a){this.a.ak(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jH.prototype={}
W.hK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.c7]},
$isk:1,
$ask:function(){return[W.c7]},
$ist:1,
$ast:function(){return[W.c7]},
$asm:function(){return[W.c7]},
$ish:1,
$ash:function(){return[W.c7]},
$asn:function(){return[W.c7]}}
W.hL.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
A:function(a,b){var t
if(b==null)return!1
t=J.q(b)
if(!t.$isU)return!1
return a.left===t.gcl(b)&&a.top===t.gcB(b)&&a.width===t.gab(b)&&a.height===t.ga8(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.l6(W.aP(W.aP(W.aP(W.aP(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga8:function(a){return a.height},
gab:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ci]},
$isk:1,
$ask:function(){return[W.ci]},
$ist:1,
$ast:function(){return[W.ci]},
$asm:function(){return[W.ci]},
$ish:1,
$ash:function(){return[W.ci]},
$asn:function(){return[W.ci]}}
W.de.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.r]},
$isk:1,
$ask:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$ish:1,
$ash:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.iq.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ae]},
$isk:1,
$ask:function(){return[W.ae]},
$ist:1,
$ast:function(){return[W.ae]},
$asm:function(){return[W.ae]},
$ish:1,
$ash:function(){return[W.ae]},
$asn:function(){return[W.ae]}}
W.iu.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cP]},
$isk:1,
$ask:function(){return[W.cP]},
$ist:1,
$ast:function(){return[W.cP]},
$asm:function(){return[W.cP]},
$ish:1,
$ash:function(){return[W.cP]},
$asn:function(){return[W.cP]}}
W.hH.prototype={
a7:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.H)(t),++p){o=t[p]
b.$2(o,q.ac(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.o])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$ascs:function(){return[P.o,P.o]},
$asb0:function(){return[P.o,P.o]},
$asa_:function(){return[P.o,P.o]},
gdV:function(){return this.a}}
W.hM.prototype={
h:function(a,b){return J.ji(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hQ.prototype={
cn:function(a,b,c,d){return W.a5(this.a,this.b,a,!1,H.a8(this,0))}}
W.hN.prototype={}
W.hR.prototype={
dE:function(a,b,c,d,e){this.eb()},
en:function(a){if(this.b==null)return
this.ec()
this.b=null
this.sdZ(null)
return},
eb:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lC(r,this.c,t,!1)}},
ec:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.lD(r,this.c,t,!1)}},
sdZ:function(a){this.d=a}}
W.hS.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bK.prototype={
dF:function(a){var t,s
t=$.$get$jK()
if(t.gap(t)){for(s=0;s<262;++s)t.i(0,C.U[s],W.nB())
for(s=0;s<12;++s)t.i(0,C.r[s],W.nC())}},
a6:function(a){return $.$get$l4().D(0,W.bp(a))},
Y:function(a,b,c){var t,s,r
t=W.bp(a)
s=$.$get$jK()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gB:function(a){return new W.ch(a,this.gj(a),-1,null,[H.V(a,"n",0)])}}
W.cE.prototype={
a6:function(a){return C.a.bX(this.a,new W.fu(a))},
Y:function(a,b,c){return C.a.bX(this.a,new W.ft(a,b,c))}}
W.fu.prototype={
$1:function(a){return a.a6(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.ft.prototype={
$1:function(a){return a.Y(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bR.prototype={
dI:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aG(0,new W.io())
s=b.aG(0,new W.ip())
this.b.N(0,t)
r=this.c
r.N(0,C.z)
r.N(0,s)},
a6:function(a){return this.a.D(0,W.bp(a))},
Y:function(a,b,c){var t,s
t=W.bp(a)
s=this.c
if(s.D(0,H.e(t)+"::"+b))return this.d.eg(c)
else if(s.D(0,"*::"+b))return this.d.eg(c)
else{s=this.b
if(s.D(0,H.e(t)+"::"+b))return!0
else if(s.D(0,"*::"+b))return!0
else if(s.D(0,H.e(t)+"::*"))return!0
else if(s.D(0,"*::*"))return!0}return!1}}
W.io.prototype={
$1:function(a){return!C.a.D(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ip.prototype={
$1:function(a){return C.a.D(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ix.prototype={
Y:function(a,b,c){if(this.de(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ji(a,"template")==="")return this.e.D(0,b)
return!1}}
W.iy.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.iv.prototype={
a6:function(a){var t=J.q(a)
if(!!t.$isbC)return!1
t=!!t.$isx
if(t&&W.bp(a)==="foreignObject")return!1
if(t)return!0
return!1},
Y:function(a,b,c){if(b==="is"||C.i.bm(b,"on"))return!1
return this.a6(a)}}
W.ch.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbO(J.aQ(this.a,t))
this.c=t
return!0}this.sbO(null)
this.c=s
return!1},
gt:function(a){return this.d},
sbO:function(a){this.d=a}}
W.cD.prototype={}
W.jz.prototype={}
W.jG.prototype={}
W.im.prototype={}
W.dA.prototype={
bi:function(a){new W.iz(this).$2(a,null)},
aj:function(a,b){if(b==null)J.k4(a)
else J.ja(b,a)},
e7:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lX(a)
r=J.ji(s.gdV(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.J(n)}p="element unprintable"
try{p=J.bm(a)}catch(n){H.J(n)}try{o=W.bp(a)
this.e6(a,b,t,p,o,s,r)}catch(n){if(H.J(n) instanceof P.a1)throw n
else{this.aj(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e6:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aj(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a6(a)){this.aj(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.Y(a,"is",g)){this.aj(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gE(f)
s=H.B(t.slice(0),[H.a8(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.Y(a,J.mc(p),q.ac(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.ac(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ac(t,p)
q.e0(t,p)}}if(!!J.q(a).$isbF)this.bi(a.content)}}
W.iz.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e7(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.aj(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lY(t)}catch(q){H.J(q)
r=t
J.ja(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.d1.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.bS.prototype={}
W.bT.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dr.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.bU.prototype={}
W.bV.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
P.ir.prototype={
ck:function(a){var t,s,r
t=this.a
s=t.length
for(r=0;r<s;++r)if(t[r]===a)return r
C.a.l(t,a)
C.a.l(this.b,null)
return s},
ba:function(a){var t,s,r,q,p
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
s=J.q(a)
if(!!s.$isay)return new Date(a.a)
if(!!s.$isY)return a
if(!!s.$isaU)return a
if(!!s.$isbq)return a
if(!!s.$isbt)return a
if(!!s.$isb2||!!s.$isaG)return a
if(!!s.$isa_){r=this.ck(a)
q=this.b
p=q[r]
t.a=p
if(p!=null)return p
p={}
t.a=p
q[r]=p
s.a7(a,new P.it(t,this))
return t.a}if(!!s.$ish){r=this.ck(a)
p=this.b[r]
if(p!=null)return p
return this.ew(a,r)}throw H.c(P.jF("structured clone of other type"))},
ew:function(a,b){var t,s,r,q
t=J.R(a)
s=t.gj(a)
r=new Array(s)
this.b[b]=r
for(q=0;C.b.V(q,s);++q)r[q]=this.ba(t.h(a,q))
return r}}
P.it.prototype={
$2:function(a,b){this.a.a[a]=this.b.ba(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.iF.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.is.prototype={}
P.ih.prototype={}
P.U.prototype={}
P.eo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gF:function(a){return a.z}}
P.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
P.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a4.prototype={}
P.ab.prototype={}
P.eR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.ju]},
$asm:function(){return[P.ju]},
$ish:1,
$ash:function(){return[P.ju]},
$asn:function(){return[P.ju]}}
P.fc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fw.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jA]},
$asm:function(){return[P.jA]},
$ish:1,
$ash:function(){return[P.jA]},
$asn:function(){return[P.jA]}}
P.fD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fI.prototype={
gj:function(a){return a.length}}
P.fL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bC.prototype={$isbC:1}
P.hb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.o]},
$asm:function(){return[P.o]},
$ish:1,
$ash:function(){return[P.o]},
$asn:function(){return[P.o]}}
P.x.prototype={
O:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.cD])
C.a.l(t,W.l3(null))
C.a.l(t,W.l7())
C.a.l(t,new W.iv())
c=new W.dA(new W.cE(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).ey(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.O(q)
o=t.ga2(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.R(p,r)
return p},
$isx:1}
P.hc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bG.prototype={}
P.bH.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ho.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return this.a0(a,b)},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a0:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jD]},
$asm:function(){return[P.jD]},
$ish:1,
$ash:function(){return[P.jD]},
$asn:function(){return[P.jD]}}
P.hw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.da.prototype={}
P.db.prototype={}
P.dh.prototype={}
P.di.prototype={}
P.ds.prototype={}
P.dt.prototype={}
P.dy.prototype={}
P.dz.prototype={}
P.dX.prototype={
gj:function(a){return a.length}}
P.dY.prototype={
gj:function(a){return a.length}}
P.aT.prototype={}
P.fx.prototype={
gj:function(a){return a.length}}
P.fQ.prototype={
bV:function(a,b){return a.activeTexture(b)},
bY:function(a,b,c){return a.attachShader(b,c)},
bZ:function(a,b,c){return a.bindBuffer(b,c)},
c_:function(a,b,c){return a.bindFramebuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c3:function(a,b,c,d){return a.bufferData(b,c,d)},
c4:function(a,b){return a.clear(b)},
c5:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c6:function(a,b){return a.compileShader(b)},
c7:function(a){return a.createBuffer()},
c8:function(a){return a.createProgram()},
c9:function(a,b){return a.createShader(b)},
ca:function(a){return a.createTexture()},
cc:function(a,b){return a.depthMask(b)},
cd:function(a,b){return a.disable(b)},
ce:function(a,b,c,d){return a.drawArrays(b,c,d)},
cf:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cg:function(a,b){return a.enable(b)},
ci:function(a,b){return a.enableVertexAttribArray(b)},
aH:function(a){return P.iG(a.getContextAttributes())},
bc:function(a){return a.getError()},
bd:function(a,b){return a.getProgramInfoLog(b)},
be:function(a,b,c){return a.getProgramParameter(b,c)},
bf:function(a,b){return a.getShaderInfoLog(b)},
bg:function(a,b,c){return a.getShaderParameter(b,c)},
bh:function(a,b,c){return a.getUniformLocation(b,c)},
cm:function(a,b){return a.linkProgram(b)},
cr:function(a,b,c){return a.pixelStorei(b,c)},
bl:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b8:function(a,b,c,d,e,f,g,h,i,j){var t
if(!!J.q(g).$isb7)t=!0
else t=!1
if(t){this.aZ(a,b,c,d,e,f,g)
return}throw H.c(P.dV("Incorrect number or type of arguments"))},
cw:function(a,b,c,d,e,f,g){return this.b8(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cz:function(a,b,c,d){return a.texParameterf(b,c,d)},
cA:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fR.prototype={
ej:function(a,b){return a.beginTransformFeedback(b)},
em:function(a,b){return a.bindVertexArray(b)},
eA:function(a){return a.createVertexArray()},
eH:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eI:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eJ:function(a){return a.endTransformFeedback()},
fa:function(a,b,c,d){this.ea(a,b,c,d)
return},
ea:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fb:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bV:function(a,b){return a.activeTexture(b)},
bY:function(a,b,c){return a.attachShader(b,c)},
bZ:function(a,b,c){return a.bindBuffer(b,c)},
c_:function(a,b,c){return a.bindFramebuffer(b,c)},
c0:function(a,b,c){return a.bindTexture(b,c)},
c1:function(a,b){return a.blendEquation(b)},
c2:function(a,b,c){return a.blendFunc(b,c)},
c3:function(a,b,c,d){return a.bufferData(b,c,d)},
c4:function(a,b){return a.clear(b)},
c5:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c6:function(a,b){return a.compileShader(b)},
c7:function(a){return a.createBuffer()},
c8:function(a){return a.createProgram()},
c9:function(a,b){return a.createShader(b)},
ca:function(a){return a.createTexture()},
cc:function(a,b){return a.depthMask(b)},
cd:function(a,b){return a.disable(b)},
ce:function(a,b,c,d){return a.drawArrays(b,c,d)},
cf:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cg:function(a,b){return a.enable(b)},
ci:function(a,b){return a.enableVertexAttribArray(b)},
aH:function(a){return P.iG(a.getContextAttributes())},
bc:function(a){return a.getError()},
bd:function(a,b){return a.getProgramInfoLog(b)},
be:function(a,b,c){return a.getProgramParameter(b,c)},
bf:function(a,b){return a.getShaderInfoLog(b)},
bg:function(a,b,c){return a.getShaderParameter(b,c)},
bh:function(a,b,c){return a.getUniformLocation(b,c)},
cm:function(a,b){return a.linkProgram(b)},
cr:function(a,b,c){return a.pixelStorei(b,c)},
bl:function(a,b,c){return a.shaderSource(b,c)},
bn:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b8:function(a,b,c,d,e,f,g,h,i,j){var t
if(!!J.q(g).$isb7)t=!0
else t=!1
if(t){this.aZ(a,b,c,d,e,f,g)
return}throw H.c(P.dV("Incorrect number or type of arguments"))},
cw:function(a,b,c,d,e,f,g){return this.b8(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cz:function(a,b,c,d){return a.texParameterf(b,c,d)},
cA:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cQ:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.A(b,a,null,null,null))
return P.iG(this.dW(a,b))},
i:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dW:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.a_]},
$asm:function(){return[P.a_]},
$ish:1,
$ash:function(){return[P.a_]},
$asn:function(){return[P.a_]}}
P.dn.prototype={}
P.dp.prototype={}
B.j2.prototype={
$1:function(a){$.$get$iH().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aD]}}}
B.j3.prototype={
$1:function(a){$.$get$iH().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aD]}}}
B.j4.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nt=t
$.nu=C.b.a3(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jW=s-C.b.K(window.innerWidth,2)
$.lt=-(t-C.b.K(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.L]}}}
B.j5.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c2=t-C.b.K(window.innerWidth,2)
$.c3=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$c0().i(0,"right",!0)
else $.$get$c0().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.L]}}}
B.j6.prototype={
$1:function(a){if(a.button===2)$.$get$c0().i(0,"right",null)
else $.$get$c0().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.L]}}}
B.fy.prototype={
ds:function(a,b,c,d){var t
d.toString
W.a5(d,W.mx(d),new B.fz(this),!1,W.aM)
W.a5(d,"mousemove",new B.fA(this),!1,W.L)
t=W.aJ
W.a5(d,"touchstart",new B.fB(),!1,t)
W.a5(d,"touchmove",new B.fC(this),!1,t)
B.nQ(null)}}
B.fz.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.av.geB(a)*r.k3
if(C.c.a3(r.fy,t)>0)r.fy=C.c.a3(r.fy,t)}catch(q){s=H.J(q)
P.X(s)}},
$S:function(a){return{func:1,args:[W.aM]}}}
B.fA.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a3($.jW,$.c2)*0.01
s=t.id
r=$.c3
q=$.lt
t.id=s+(r-q)*0.01
$.c2=$.jW
$.c3=q}},
$S:function(a){return{func:1,args:[W.L]}}}
B.fB.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.aa(t.clientX)
C.c.aa(t.clientY)
$.c2=s
C.c.aa(t.clientX)
$.c3=C.c.aa(t.clientY)},
$S:function(a){return{func:1,args:[W.aJ]}}}
B.fC.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.aa(t.clientX)
t=C.c.aa(t.clientY)
r=this.a
r.go=r.go+C.b.a3(s,$.c2)*0.01
r.id=r.id+($.c3-t)*0.01
$.c2=s
$.c3=t},
$S:function(a){return{func:1,args:[W.aJ]}}}
G.fi.prototype={}
G.cY.prototype={
a4:function(a,b){var t=this.d
if(H.ai(!t.G(0,a)))H.ar("uniform "+a+" already set")
t.i(0,a,b)},
bw:function(){return this.d},
k:function(a){var t,s,r,q
t=H.B(["{"+new H.ap(H.iM(this),null).k(0)+"}["+this.a+"]"],[P.o])
for(s=this.d,r=s.gE(s),r=r.gB(r);r.p();){q=r.gt(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.a9(t,"\n")}}
G.dZ.prototype={}
G.e1.prototype={
cj:function(a,b,c){J.lV(this.a,b)
if(c>0)J.mi(this.a,b,c)},
cP:function(a,b,c,d,e,f,g,h){J.jc(this.a,34962,b)
J.mj(this.a,c,d,e,!1,g,h)}}
G.eL.prototype={}
G.cg.prototype={}
G.cj.prototype={
au:function(a){var t=this.e
H.b(!t.G(0,a))
H.b(C.i.bm(a,"a"))
switch($.$get$P().h(0,a).a){case"vec2":t.i(0,a,H.B([],[T.v]))
break
case"vec3":t.i(0,a,H.B([],[T.l]))
break
case"vec4":t.i(0,a,H.B([],[T.aq]))
break
case"float":t.i(0,a,H.B([],[P.a0]))
break
case"uvec4":t.i(0,a,H.B([],[[P.h,P.z]]))
break
default:if(H.ai(!1))H.ar("unknown type for "+a)}},
dg:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.l(s,new G.cg(t,t+1,t+2,t+3))},
dh:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.l(new Float32Array(3))
q.M(r)
C.a.l(t,q)}},
bq:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.H)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.v(o))}},
br:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.l(new Float32Array(3))
p.M(q)
s.l(t,p)}},
di:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.cg(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.l(new Float32Array(3))
p.M(q)
C.a.l(t,p)}},
dm:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.B(s,[P.z])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gff(o)
r[q+1]=o.gfg(o)
r[q+2]=o.gfh(o)
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
for(s=this.e,r=s.gE(s),r=r.gB(r);r.p();){q=r.gt(r)
p=$.$get$P().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a9(t," ")}}
G.cV.prototype={}
G.cU.prototype={}
G.fd.prototype={
dr:function(a){this.a4("cDepthTest",!0)
this.a4("cDepthWrite",!0)
this.a4("cBlendEquation",$.$get$ka())
this.a4("cStencilFunc",$.$get$kK())}}
G.ff.prototype={
bt:function(a,b,c){var t,s
if(C.i.aN(a,0)===105){if(H.ai(C.b.aK(b.length,c)===this.z))H.ar("ChangeAttribute "+this.z)}else{t=C.b.aK(b.length,c)
if(H.ai(t===(this.ch.length/3|0)))H.ar("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.jc(t.a,34962,s)
J.k0(t.a,34962,b,35048)},
bu:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ae:function(a,b,c){var t,s,r,q,p,o
t=J.jY(a,0)===105
if(t&&this.z===0)this.z=C.b.aK(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.je(r.a))
this.bt(a,b,c)
q=$.$get$P().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ai(p.G(0,a)))H.ar("unexpected attribute "+a)
o=p.h(0,a)
J.dP(r.a,this.e)
r.cj(0,o,t?1:0)
r.cP(0,s.h(0,a),o,q.bv(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gB(r);r.p();){q=r.gt(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.a9(s,"  ")},
saS:function(a){this.cx=a}}
G.fE.prototype={
dj:function(a,b){var t=C.b.cS(a,b)
if(this.z===t)return
this.z=t
this.by()},
by:function(){var t,s,r,q,p,o,n
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
t.ad(0,0,1/(p*s))
t.ad(1,1,1/p)
t.ad(2,2,(q+r)/o)
t.ad(3,2,-1)
t.ad(2,3,2*r*q/o)},
bw:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.l(new Float32Array(3))
o.q(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.M(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.q(n)
r=!!s.$isaq
k=r?s.gaF(n):1
if(!!s.$isl){j=s.gm(n)
m=s.gn(n)
l=s.gF(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gF(n)
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
a3.M(this.db)
a3.cq(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.ei.prototype={
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fP.prototype={
du:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
r.i(0,n,J.k3(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
r.i(0,n,J.k3(q.a,p,n))}},
dA:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gB(s);s.p();){q=s.gt(s)
if(!t.G(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bL(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.D(0,q))C.a.l(r,q)}return r},
dC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gt(s)
switch(J.jY(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.j0("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$P().h(0,n)
if(l==null)H.I("unknown "+n)
H.b(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jj(r.a,k,m)
else if(!!J.q(m).$iskw)J.mg(r.a,k,m)
break
case"float":if(l.c===0)J.me(r.a,k,m)
else if(!!J.q(m).$iseI)J.mf(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.at(m,"$isM").a
J.k9(r.a,k,!1,n)}else if(!!J.q(m).$iseI)J.k9(r.a,k,!1,m)
else if(H.ai(!1))H.ar("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.at(m,"$isaF").a
J.k8(r.a,k,!1,n)}else if(!!J.q(m).$iseI)J.k8(r.a,k,!1,m)
else if(H.ai(!1))H.ar("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.k7(j,k,H.at(m,"$isaq").a)
else J.k7(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.k6(j,k,H.at(m,"$isl").a)
else J.k6(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.k5(j,k,H.at(m,"$isv").a)
else J.k5(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a1(33984,this.ch)
J.jZ(r.a,n)
n=H.at(m,"$isbI").b
J.bj(r.a,3553,n)
n=this.ch
J.jj(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a1(33984,this.ch)
J.jZ(r.a,n)
n=H.at(m,"$isbI").b
J.bj(r.a,34067,n)
n=this.ch
J.jj(r.a,k,n)
this.ch=this.ch+1
break
default:H.j0("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.D(m,!0)
j=r.a
if(n)J.dQ(j,2929)
else J.jf(j,2929)
break
case"cStencilFunc":H.at(m,"$iscV")
n=m.a
j=r.a
if(n===1281)J.jf(j,2960)
else{J.dQ(j,2960)
j=m.b
i=m.c
J.m9(r.a,n,j,i)}break
case"cDepthWrite":J.lP(r.a,m)
break
case"cBlendEquation":H.at(m,"$iscU")
n=m.a
j=r.a
if(n===1281)J.jf(j,3042)
else{J.dQ(j,3042)
j=m.b
i=m.c
J.lI(r.a,j,i)
J.lH(r.a,n)}break}++o
break}}h=P.kp(0,0,0,Date.now()-new P.ay(t,!1).a,0,0)
""+o
h.k(0)},
dl:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.mh(s.a,this.r)
this.ch=0
this.z.Z(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.H)(b),++q){p=b[q]
this.dC(p.a,p.bw())}r=this.Q
r.Z(0)
for(o=a.cy,o=o.gE(o),o=o.gB(o);o.p();)r.l(0,o.gt(o))
n=this.dA()
if(n.length!==0)P.X("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(n)))
J.dP(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bu()
l=a.Q
k=a.z
if(m)J.lF(s.a,r)
if(l!==-1){j=s.a
if(k>1)J.lT(j,r,o,l,0,k)
else J.lS(j,r,o,l,0)}else{l=s.a
if(k>1)J.lR(l,r,0,o,k)
else J.lQ(l,r,0,o)}if(m)J.lW(s.a)
C.a.l(c,new G.ei(this.a,a.z,a.bu(),r,P.kp(0,0,0,Date.now()-new P.ay(t,!1).a,0,0)))}}
G.y.prototype={
bv:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fW.prototype={
bp:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.H)(a),++q){p=a[q]
H.b($.$get$P().G(0,p))
H.b(!C.a.D(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aI(s)},
aL:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.H)(a),++r){q=a[r]
if(H.ai($.$get$P().G(0,q)))H.ar("missing uniform "+q)
H.b(!C.a.D(s,q))
C.a.l(s,q)}C.a.aI(s)},
bs:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$P().G(0,r))
H.b(!C.a.D(t,r))
C.a.l(t,r)}C.a.aI(t)},
dv:function(a,b){H.b(this.b==null)
this.b=this.dD(!0,a,b)},
av:function(a){return this.dv(a,null)},
dD:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
m=$.$get$P().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){k=t[o]
m=$.$get$P().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.N(q,b)
C.a.l(q,"}")
return C.a.a9(q,"\n")}}
G.fZ.prototype={
bj:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.cT.prototype={
dn:function(a,b){var t=this.e
if(t!==1)J.mb(a.a,b,34046,t)
J.dR(a.a,b,10240,this.r)
J.dR(a.a,b,10241,this.f)
if(this.b){J.dR(a.a,b,10242,33071)
J.dR(a.a,b,10243,33071)}}}
G.bI.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eS.prototype={
bx:function(a){var t,s
t=this.d
s=this.c
J.bj(t.a,s,this.b)
J.ma(t.a,s,0,6408,6408,5121,a)}}
R.cI.prototype={
ct:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.X("size change "+H.e(s)+" "+H.e(r))
this.dx.dj(s,r)
this.z=s
this.Q=r}}
R.h2.prototype={
dw:function(a,b,c){var t,s,r
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
J.jb(this.a,s)
r=this.dH(b,c,90,30)
this.d=r
J.jb(this.a,r)
t=t.createElement("div")
this.c=t
J.jb(this.a,t)},
dH:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.n9("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bE(r,"float")
r.setProperty(p,"left","")
p=C.u.bE(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.R(t,s)}return t}}
R.h3.prototype={
dB:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.f9(s,2)+" fps"
t=this.c;(t&&C.o).d5(t,b)
r=C.b.K(30*C.w.eo(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).R(t,q)}}
A.cB.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.bB.prototype={}
A.fO.prototype={
dt:function(a,b,c){if(this.d==null)this.d=new G.eL(this.e,null,null,null,null)},
dk:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lG(p.a,36160,t)
H.b(r>0&&q>0)
J.mk(p.a,this.x,this.y,r,q)
if(s!==0)J.lJ(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.H)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.cY(P.T(),"transforms",!1,!0))
l=new T.M(new Float32Array(16))
l.W()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.H)(r),++k)A.ll(p,r[k],l,a,m)
m.pop()}}}
D.f8.prototype={
$1:function(a){var t,s
t=document.createElement("video")
t.autoplay=!0
s=new W.hN(t,"playing",!1,[W.f])
s.gb2(s).as(new D.f7(this.a,t))
t.srcObject=a},
$S:function(a){return{func:1,args:[W.b1]}}}
D.f7.prototype={
$1:function(a){return this.a.ak(0,this.b)},
$S:function(a){return{func:1,args:[,]}}}
D.f9.prototype={
$1:function(a){P.X("E:"+("Camera open error "+H.e(a)))
this.a.ak(0,null)},
$S:function(a){return{func:1,args:[P.C]}}}
A.iN.prototype={
$2:function(a,b){var t=536870911&a+J.bk(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.z,P.C]}}}
T.aF.prototype={
M:function(a){var t,s
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
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aF){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.dM(this.a)},
T:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.l(t)},
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
if(g===0){this.M(a)
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
T.M.prototype={
ad:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
M:function(a){var t,s
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
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.M){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.dM(this.a)},
T:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aq(t)},
W:function(){var t=this.a
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
cq:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.v.prototype={
v:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.v){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dM(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.l.prototype={
q:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
M:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.l){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.dM(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb3())},
gb3:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b4:function(a){var t,s,r
t=Math.sqrt(this.gb3())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b1:function(a){var t,s
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
t=new T.l(new Float32Array(3))
t.q(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]}}
T.aq.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aq){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dM(this.a)},
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
gF:function(a){return this.a[2]},
gaF:function(a){return this.a[3]}}
U.iY.prototype={
$1:function(c3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2
s=this.a
s.c=c3+0
r=this.b
q=r.k4
if(q.h(0,37)!=null)r.go+=0.03
else if(q.h(0,39)!=null)r.go-=0.03
if(q.h(0,38)!=null)r.id+=0.03
else if(q.h(0,40)!=null)r.id-=0.03
if(q.h(0,33)!=null)r.fy*=0.99
else if(q.h(0,34)!=null)r.fy*=1.01
if(q.h(0,32)!=null){r.go=0
r.id=0}q=C.c.ep(r.id,-1.4707963267948965,1.4707963267948965)
r.id=q
p=r.fy
o=r.go
n=p*Math.cos(q)
r.bj(n*Math.cos(o),p*Math.sin(q),n*Math.sin(o))
o=r.d.a
q=r.k2.a
o[12]=o[12]+q[0]
o[13]=o[13]+q[1]
o[14]=o[14]+q[2]
m=o[12]
l=o[13]
k=o[14]
j=new T.l(new Float32Array(3))
j.q(0,1,0)
p=r.e
i=p.a
i[0]=o[12]
i[1]=o[13]
i[2]=o[14]
i=new Float32Array(3)
h=new T.l(i)
h.M(p)
i[0]=i[0]-q[0]
i[1]=i[1]-q[1]
i[2]=i[2]-q[2]
h.b4(0)
g=j.cb(h)
g.b4(0)
f=h.cb(g)
f.b4(0)
q=g.b1(p)
e=f.b1(p)
p=h.b1(p)
d=g.a
c=d[0]
b=f.a
a=b[0]
a0=i[0]
a1=d[1]
a2=b[1]
a3=i[1]
d=d[2]
b=b[2]
i=i[2]
o[15]=1
o[14]=-p
o[13]=-e
o[12]=-q
o[11]=0
o[10]=i
o[9]=b
o[8]=d
o[7]=0
o[6]=a3
o[5]=a2
o[4]=a1
o[3]=0
o[2]=a0
o[1]=a
o[0]=c
o[12]=m
o[13]=l
o[14]=k
c=r.f
a=c.a
a[0]=o[2]
a[1]=o[6]
a[2]=o[10]
r=-r.k1
a4=Math.sqrt(c.gb3())
m=a[0]/a4
l=a[1]/a4
k=a[2]/a4
a5=Math.cos(r)
a6=Math.sin(r)
a7=1-a5
a8=m*m*a7+a5
r=k*a6
a9=m*l*a7-r
a=l*a6
b0=m*k*a7+a
b1=l*m*a7+r
b2=l*l*a7+a5
r=m*a6
b3=l*k*a7-r
b4=k*m*a7-a
b5=k*l*a7+r
b6=k*k*a7+a5
r=o[0]
a=o[4]
c=o[8]
a0=o[1]
a1=o[5]
a2=o[9]
a3=o[2]
d=o[6]
b=o[10]
i=o[3]
q=o[7]
e=o[11]
o[0]=r*a8+a*b1+c*b4
o[1]=a0*a8+a1*b1+a2*b4
o[2]=a3*a8+d*b1+b*b4
o[3]=i*a8+q*b1+e*b4
o[4]=r*a9+a*b2+c*b5
o[5]=a0*a9+a1*b2+a2*b5
o[6]=a3*a9+d*b2+b*b5
o[7]=i*a9+q*b2+e*b5
o[8]=r*b0+a*b3+c*b6
o[9]=a0*b0+a1*b3+a2*b6
o[10]=a3*b0+d*b3+b*b6
o[11]=i*b0+q*b3+e*b6
b7=Math.cos(0.01)
b8=Math.sin(0.01)
e=this.c.d.a
q=e[4]
i=e[8]
o=e[5]
b=e[9]
d=e[6]
a3=e[10]
a2=e[7]
a1=e[11]
a0=-b8
e[4]=q*b7+i*b8
e[5]=o*b7+b*b8
e[6]=d*b7+a3*b8
e[7]=a2*b7+a1*b8
e[8]=q*a0+i*b7
e[9]=o*a0+b*b7
e[10]=d*a0+a3*b7
e[11]=a2*a0+a1*b7
b7=Math.cos(0.01)
b8=Math.sin(0.01)
a1=e[0]
a0=e[8]
a2=-b8
a3=e[1]
d=e[9]
b=e[2]
o=e[10]
i=e[3]
q=e[11]
e[0]=a1*b7+a0*a2
e[1]=a3*b7+d*a2
e[2]=b*b7+o*a2
e[3]=i*b7+q*a2
e[8]=a1*b8+a0*b7
e[9]=a3*b8+d*b7
e[10]=b*b8+o*b7
e[11]=i*b8+q*b7
try{r=s.b
r.bx(r.f)
q=r.d
r=r.c
J.bj(q.a,r,null)}catch(b9){t=H.J(b9)
P.X(t)}c0=[]
this.d.dk(c0)
c1=[]
for(r=c0.length,c2=0;c2<c0.length;c0.length===r||(0,H.H)(c0),++c2)C.a.l(c1,c0[c2].k(0))
this.e.dB(s.c,C.a.a9(c1,"<br>"))
C.I.geh(window).as(this)},
$S:function(a){return{func:1,v:true,args:[P.a9]}}}
U.iZ.prototype={
$1:function(a){var t,s,r,q,p,o,n
t=J.aQ(a,0)
s=this.a
s.a=t
if(t==null)C.I.ef(window,"Could not access camera - do you have a camera installed?")
r=this.b
q=s.a
p=$.$get$kM()
if(p==null)p=new G.cT(!1,!1,!1,!0,1,9729,9729)
o=J.lN(r.a)
n=new G.eS(q,"video",o,3553,r,p)
J.bj(r.a,3553,o)
J.m7(r.a,37440,1)
n.bx(q)
p.dn(r,3553)
H.b(J.m2(r.a)===0)
J.bj(r.a,3553,null)
s.b=n
this.c.a4("uTexture",n)
this.d.$1(0)},
$S:function(a){return{func:1,args:[P.h]}}}
J.a.prototype.da=J.a.prototype.k
J.bu.prototype.dd=J.bu.prototype.k
P.S.prototype.dc=P.S.prototype.aG
W.a3.prototype.aJ=W.a3.prototype.O
W.bR.prototype.de=W.bR.prototype.Y;(function installTearOffs(){installTearOff(H.ba.prototype,"geU",0,0,0,null,["$0"],["aD"],0)
installTearOff(H.a6.prototype,"gcY",0,0,0,null,["$1"],["L"],2)
installTearOff(H.aN.prototype,"geD",0,0,0,null,["$1"],["a_"],2)
installTearOff(P,"np",1,0,0,null,["$1"],["n6"],1)
installTearOff(P,"nq",1,0,0,null,["$1"],["n7"],1)
installTearOff(P,"nr",1,0,0,null,["$1"],["n8"],1)
installTearOff(P,"lh",1,0,0,null,["$0"],["nn"],0)
installTearOff(P.E.prototype,"gbI",0,0,0,null,["$2","$1"],["H","dO"],5)
installTearOff(P,"nw",1,0,0,null,["$2"],["mr"],7)
installTearOff(W,"nB",1,0,0,null,["$4"],["nc"],4)
installTearOff(W,"nC",1,0,0,null,["$4"],["nd"],4)
installTearOff(W.cC.prototype,"gb5",0,1,0,null,["$0"],["b6"],3)
installTearOff(W.cX.prototype,"gb5",0,1,0,null,["$0"],["b6"],3)
installTearOff(R.cI.prototype,"gf1",0,0,0,null,["$1"],["ct"],6)
installTearOff(U,"li",1,0,0,null,["$0"],["nK"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.jr,t)
inherit(J.a,t)
inherit(J.dW,t)
inherit(P.S,t)
inherit(H.cr,t)
inherit(P.cn,t)
inherit(H.aY,t)
inherit(H.ax,t)
inherit(H.ie,t)
inherit(H.ba,t)
inherit(H.hO,t)
inherit(H.aO,t)
inherit(H.id,t)
inherit(H.hI,t)
inherit(H.cH,t)
inherit(H.hj,t)
inherit(H.av,t)
inherit(H.a6,t)
inherit(H.aN,t)
inherit(H.fN,t)
inherit(H.hp,t)
inherit(P.aX,t)
inherit(H.dq,t)
inherit(H.ap,t)
inherit(P.b0,t)
inherit(H.f1,t)
inherit(H.f3,t)
inherit(P.Z,t)
inherit(P.jm,t)
inherit(P.hJ,t)
inherit(P.b8,t)
inherit(P.E,t)
inherit(P.d_,t)
inherit(P.bD,t)
inherit(P.h6,t)
inherit(P.jB,t)
inherit(P.aS,t)
inherit(P.iA,t)
inherit(P.fV,t)
inherit(P.ia,t)
inherit(P.bL,t)
inherit(P.jv,t)
inherit(P.bM,t)
inherit(P.m,t)
inherit(P.ic,t)
inherit(P.aj,t)
inherit(P.F,t)
inherit(P.ay,t)
inherit(P.a9,t)
inherit(P.az,t)
inherit(P.cN,t)
inherit(P.jo,t)
inherit(P.hT,t)
inherit(P.en,t)
inherit(P.h,t)
inherit(P.a_,t)
inherit(P.K,t)
inherit(P.b4,t)
inherit(P.o,t)
inherit(P.bE,t)
inherit(P.jE,t)
inherit(W.e7,t)
inherit(W.bK,t)
inherit(W.n,t)
inherit(W.cE,t)
inherit(W.bR,t)
inherit(W.iv,t)
inherit(W.ch,t)
inherit(W.cD,t)
inherit(W.jz,t)
inherit(W.jG,t)
inherit(W.im,t)
inherit(W.dA,t)
inherit(P.ir,t)
inherit(P.ih,t)
inherit(G.fi,t)
inherit(G.e1,t)
inherit(G.eL,t)
inherit(G.cg,t)
inherit(G.cj,t)
inherit(G.cV,t)
inherit(G.cU,t)
inherit(G.ei,t)
inherit(G.y,t)
inherit(G.fW,t)
inherit(G.cT,t)
inherit(G.bI,t)
inherit(R.h2,t)
inherit(T.aF,t)
inherit(T.M,t)
inherit(T.v,t)
inherit(T.l,t)
inherit(T.aq,t)
t=J.a
inherit(J.eX,t)
inherit(J.eY,t)
inherit(J.bu,t)
inherit(J.aA,t)
inherit(J.aZ,t)
inherit(J.aB,t)
inherit(H.b2,t)
inherit(H.aG,t)
inherit(W.d,t)
inherit(W.dS,t)
inherit(W.aU,t)
inherit(W.e_,t)
inherit(W.aW,t)
inherit(W.a2,t)
inherit(W.d1,t)
inherit(W.ec,t)
inherit(W.ed,t)
inherit(W.ee,t)
inherit(W.ca,t)
inherit(W.cb,t)
inherit(W.d2,t)
inherit(W.cd,t)
inherit(W.d4,t)
inherit(W.eh,t)
inherit(W.f,t)
inherit(W.d6,t)
inherit(W.eP,t)
inherit(W.d8,t)
inherit(W.bt,t)
inherit(W.f5,t)
inherit(W.fe,t)
inherit(W.dc,t)
inherit(W.by,t)
inherit(W.cC,t)
inherit(W.df,t)
inherit(W.ad,t)
inherit(W.dj,t)
inherit(W.cF,t)
inherit(W.dl,t)
inherit(W.ae,t)
inherit(W.dr,t)
inherit(W.du,t)
inherit(W.hi,t)
inherit(W.dw,t)
inherit(W.hn,t)
inherit(W.cX,t)
inherit(W.hv,t)
inherit(W.hx,t)
inherit(W.dB,t)
inherit(W.dD,t)
inherit(W.dF,t)
inherit(W.dH,t)
inherit(W.dJ,t)
inherit(P.da,t)
inherit(P.dh,t)
inherit(P.fH,t)
inherit(P.fI,t)
inherit(P.fL,t)
inherit(P.ds,t)
inherit(P.dy,t)
inherit(P.dX,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.dn,t)
t=J.bu
inherit(J.fF,t)
inherit(J.aL,t)
inherit(J.aC,t)
inherit(J.jq,J.aA)
t=J.aZ
inherit(J.cp,t)
inherit(J.co,t)
t=P.S
inherit(H.k,t)
inherit(H.ct,t)
inherit(H.cZ,t)
t=H.k
inherit(H.b_,t)
inherit(H.f2,t)
inherit(H.el,H.ct)
t=P.cn
inherit(H.fb,t)
inherit(H.hA,t)
t=H.b_
inherit(H.bv,t)
inherit(P.f4,t)
t=H.ax
inherit(H.j7,t)
inherit(H.j8,t)
inherit(H.i8,t)
inherit(H.hP,t)
inherit(H.eU,t)
inherit(H.eV,t)
inherit(H.ig,t)
inherit(H.hk,t)
inherit(H.hl,t)
inherit(H.j9,t)
inherit(H.iS,t)
inherit(H.iT,t)
inherit(H.iU,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.hf,t)
inherit(H.eZ,t)
inherit(H.iO,t)
inherit(H.iP,t)
inherit(H.iQ,t)
inherit(P.hE,t)
inherit(P.hD,t)
inherit(P.hF,t)
inherit(P.hG,t)
inherit(P.eN,t)
inherit(P.eM,t)
inherit(P.hU,t)
inherit(P.i1,t)
inherit(P.hY,t)
inherit(P.hZ,t)
inherit(P.i_,t)
inherit(P.hW,t)
inherit(P.i0,t)
inherit(P.hV,t)
inherit(P.i4,t)
inherit(P.i5,t)
inherit(P.i3,t)
inherit(P.i2,t)
inherit(P.h9,t)
inherit(P.ha,t)
inherit(P.h7,t)
inherit(P.h8,t)
inherit(P.iB,t)
inherit(P.iE,t)
inherit(P.ik,t)
inherit(P.ij,t)
inherit(P.il,t)
inherit(P.fa,t)
inherit(P.ej,t)
inherit(P.ek,t)
inherit(W.em,t)
inherit(W.fr,t)
inherit(W.fs,t)
inherit(W.h5,t)
inherit(W.hB,t)
inherit(W.hS,t)
inherit(W.fu,t)
inherit(W.ft,t)
inherit(W.io,t)
inherit(W.ip,t)
inherit(W.iy,t)
inherit(W.iz,t)
inherit(P.it,t)
inherit(P.iF,t)
inherit(B.j2,t)
inherit(B.j3,t)
inherit(B.j4,t)
inherit(B.j5,t)
inherit(B.j6,t)
inherit(B.fz,t)
inherit(B.fA,t)
inherit(B.fB,t)
inherit(B.fC,t)
inherit(D.f8,t)
inherit(D.f7,t)
inherit(D.f9,t)
inherit(A.iN,t)
inherit(U.iY,t)
inherit(U.iZ,t)
t=H.hI
inherit(H.bc,t)
inherit(H.bW,t)
t=P.aX
inherit(H.fv,t)
inherit(H.f_,t)
inherit(H.ht,t)
inherit(H.hr,t)
inherit(H.e0,t)
inherit(H.fS,t)
inherit(P.c5,t)
inherit(P.b3,t)
inherit(P.a1,t)
inherit(P.hu,t)
inherit(P.hs,t)
inherit(P.b5,t)
inherit(P.e2,t)
inherit(P.eb,t)
t=H.hf
inherit(H.h1,t)
inherit(H.bn,t)
inherit(H.hC,P.c5)
inherit(P.cs,P.b0)
t=P.cs
inherit(H.ac,t)
inherit(W.hH,t)
t=H.aG
inherit(H.fj,t)
inherit(H.cw,t)
t=H.cw
inherit(H.bN,t)
inherit(H.bP,t)
inherit(H.bO,H.bN)
inherit(H.cx,H.bO)
inherit(H.bQ,H.bP)
inherit(H.cy,H.bQ)
t=H.cx
inherit(H.cv,t)
inherit(H.fk,t)
t=H.cy
inherit(H.fl,t)
inherit(H.fm,t)
inherit(H.fn,t)
inherit(H.fo,t)
inherit(H.fp,t)
inherit(H.cz,t)
inherit(H.fq,t)
t=P.hJ
inherit(P.d0,t)
inherit(P.iw,t)
inherit(P.ii,P.iA)
inherit(P.ib,H.ac)
inherit(P.fU,P.fV)
inherit(P.i7,P.fU)
inherit(P.i9,P.i7)
inherit(P.cq,P.bM)
t=P.a9
inherit(P.a0,t)
inherit(P.z,t)
t=P.a1
inherit(P.cG,t)
inherit(P.eT,t)
t=W.d
inherit(W.r,t)
inherit(W.ao,t)
inherit(W.eG,t)
inherit(W.bs,t)
inherit(W.b1,t)
inherit(W.bx,t)
inherit(W.fJ,t)
inherit(W.cJ,t)
inherit(W.bS,t)
inherit(W.bU,t)
inherit(W.hy,t)
inherit(W.hz,t)
inherit(W.bJ,t)
inherit(W.jH,t)
inherit(P.dY,t)
inherit(P.aT,t)
t=W.r
inherit(W.a3,t)
inherit(W.aw,t)
inherit(W.bo,t)
t=W.a3
inherit(W.j,t)
inherit(P.x,t)
t=W.ao
inherit(W.c4,t)
inherit(W.eO,t)
inherit(W.f6,t)
t=W.j
inherit(W.dT,t)
inherit(W.dU,t)
inherit(W.au,t)
inherit(W.c6,t)
inherit(W.c9,t)
inherit(W.eK,t)
inherit(W.ck,t)
inherit(W.bw,t)
inherit(W.fT,t)
inherit(W.cQ,t)
inherit(W.hd,t)
inherit(W.he,t)
inherit(W.bF,t)
t=W.aW
inherit(W.e3,t)
inherit(W.e5,t)
inherit(W.e6,t)
inherit(W.e9,t)
t=W.a2
inherit(W.e4,t)
inherit(W.e8,t)
inherit(W.ea,t)
inherit(W.aV,W.d1)
inherit(W.ef,W.cb)
inherit(W.d3,W.d2)
inherit(W.cc,W.d3)
inherit(W.d5,W.d4)
inherit(W.eg,W.d5)
inherit(W.Y,W.aU)
inherit(W.d7,W.d6)
inherit(W.bq,W.d7)
inherit(W.d9,W.d8)
inherit(W.br,W.d9)
inherit(W.cl,W.bo)
inherit(W.eQ,W.bs)
inherit(W.aK,W.f)
t=W.aK
inherit(W.aD,t)
inherit(W.L,t)
inherit(W.aJ,t)
inherit(W.fg,W.bx)
inherit(W.dd,W.dc)
inherit(W.fh,W.dd)
inherit(W.cA,W.by)
inherit(W.O,P.cq)
inherit(W.dg,W.df)
inherit(W.bz,W.dg)
inherit(W.dk,W.dj)
inherit(W.fG,W.dk)
inherit(W.bT,W.bS)
inherit(W.fY,W.bT)
inherit(W.dm,W.dl)
inherit(W.h_,W.dm)
inherit(W.h4,W.dr)
inherit(W.dv,W.du)
inherit(W.hg,W.dv)
inherit(W.bV,W.bU)
inherit(W.hh,W.bV)
inherit(W.dx,W.dw)
inherit(W.hm,W.dx)
inherit(W.b7,W.bw)
inherit(W.aM,W.L)
inherit(W.dC,W.dB)
inherit(W.hK,W.dC)
inherit(W.hL,W.cd)
inherit(W.dE,W.dD)
inherit(W.i6,W.dE)
inherit(W.dG,W.dF)
inherit(W.de,W.dG)
inherit(W.dI,W.dH)
inherit(W.iq,W.dI)
inherit(W.dK,W.dJ)
inherit(W.iu,W.dK)
inherit(W.hM,W.hH)
inherit(W.hQ,P.bD)
inherit(W.hN,W.hQ)
inherit(W.hR,P.h6)
inherit(W.ix,W.bR)
inherit(P.is,P.ir)
inherit(P.U,P.ih)
t=P.x
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
inherit(P.eE,t)
inherit(P.eF,t)
inherit(P.eH,t)
inherit(P.ab,t)
inherit(P.fc,t)
inherit(P.fD,t)
inherit(P.bC,t)
t=P.ab
inherit(P.eJ,t)
inherit(P.a4,t)
inherit(P.eR,t)
inherit(P.hc,t)
inherit(P.bG,t)
inherit(P.hw,t)
inherit(P.db,P.da)
inherit(P.f0,P.db)
inherit(P.di,P.dh)
inherit(P.fw,P.di)
inherit(P.fM,P.a4)
inherit(P.dt,P.ds)
inherit(P.hb,P.dt)
inherit(P.bH,P.bG)
inherit(P.dz,P.dy)
inherit(P.ho,P.dz)
inherit(P.fx,P.aT)
inherit(P.dp,P.dn)
inherit(P.h0,P.dp)
t=G.fi
inherit(G.fZ,t)
inherit(G.cY,t)
inherit(G.ff,t)
inherit(G.fP,t)
inherit(A.fO,t)
inherit(A.bB,t)
t=G.fZ
inherit(G.dZ,t)
inherit(A.cB,t)
inherit(B.fy,G.dZ)
t=G.cY
inherit(G.fd,t)
inherit(G.fE,t)
inherit(G.eS,G.bI)
inherit(R.cI,A.fO)
inherit(R.h3,R.h2)
mixin(H.bN,P.m)
mixin(H.bO,H.aY)
mixin(H.bP,P.m)
mixin(H.bQ,H.aY)
mixin(P.bM,P.m)
mixin(W.d1,W.e7)
mixin(W.d2,P.m)
mixin(W.d3,W.n)
mixin(W.d4,P.m)
mixin(W.d5,W.n)
mixin(W.d6,P.m)
mixin(W.d7,W.n)
mixin(W.d8,P.m)
mixin(W.d9,W.n)
mixin(W.dc,P.m)
mixin(W.dd,W.n)
mixin(W.df,P.m)
mixin(W.dg,W.n)
mixin(W.dj,P.m)
mixin(W.dk,W.n)
mixin(W.bS,P.m)
mixin(W.bT,W.n)
mixin(W.dl,P.m)
mixin(W.dm,W.n)
mixin(W.dr,P.b0)
mixin(W.du,P.m)
mixin(W.dv,W.n)
mixin(W.bU,P.m)
mixin(W.bV,W.n)
mixin(W.dw,P.m)
mixin(W.dx,W.n)
mixin(W.dB,P.m)
mixin(W.dC,W.n)
mixin(W.dD,P.m)
mixin(W.dE,W.n)
mixin(W.dF,P.m)
mixin(W.dG,W.n)
mixin(W.dH,P.m)
mixin(W.dI,W.n)
mixin(W.dJ,P.m)
mixin(W.dK,W.n)
mixin(P.da,P.m)
mixin(P.db,W.n)
mixin(P.dh,P.m)
mixin(P.di,W.n)
mixin(P.ds,P.m)
mixin(P.dt,W.n)
mixin(P.dy,P.m)
mixin(P.dz,W.n)
mixin(P.dn,P.m)
mixin(P.dp,W.n)})();(function constants(){C.n=W.au.prototype
C.J=W.c6.prototype
C.u=W.aV.prototype
C.o=W.c9.prototype
C.K=W.ca.prototype
C.L=W.ck.prototype
C.p=W.cl.prototype
C.M=J.a.prototype
C.a=J.aA.prototype
C.w=J.co.prototype
C.b=J.cp.prototype
C.c=J.aZ.prototype
C.i=J.aB.prototype
C.T=J.aC.prototype
C.W=H.cv.prototype
C.X=W.cA.prototype
C.A=W.bz.prototype
C.B=J.fF.prototype
C.C=W.cF.prototype
C.H=W.cQ.prototype
C.t=J.aL.prototype
C.av=W.aM.prototype
C.I=W.bJ.prototype
C.d=new P.ii()
C.v=new P.az(0)
C.N=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.O=function(hooks) {
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

C.P=function(getTagFallback) {
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
C.Q=function() {
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
C.R=function(hooks) {
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
C.S=function(hooks) {
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
C.U=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.V=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.z=makeConstList([])
C.q=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.o])
C.r=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.Y=new G.y("vec3","vertex btangents",0)
C.e=new G.y("vec3","",0)
C.Z=new G.y("vec4","delta from light",0)
C.m=new G.y("","",0)
C.D=new G.y("vec3","vertex coordinates",0)
C.a_=new G.y("vec3","vertex binormals",0)
C.E=new G.y("vec4","for wireframe",0)
C.a0=new G.y("vec4","per vertex color",0)
C.a1=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.a3=new G.y("mat4","",4)
C.a2=new G.y("mat4","",128)
C.f=new G.y("float","",0)
C.a4=new G.y("float","",4)
C.a5=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a6=new G.y("float","for bump maps",0)
C.a7=new G.y("vec2","texture uvs",0)
C.a8=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.a9=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.aa=new G.y("vec3","vertex normals",0)
C.ab=new G.y("sampler2DShadow","",0)
C.F=new G.y("vec3","per vertex color",0)
C.G=new G.y("mat3","",0)
C.ac=new G.y("vec3","vertex tangents",0)
C.ad=H.G("nU")
C.ae=H.G("nV")
C.af=H.G("eI")
C.ag=H.G("nW")
C.ah=H.G("nX")
C.ai=H.G("kw")
C.aj=H.G("nY")
C.ak=H.G("kz")
C.al=H.G("K")
C.am=H.G("o")
C.an=H.G("kY")
C.ao=H.G("kZ")
C.ap=H.G("nZ")
C.aq=H.G("l_")
C.ar=H.G("aj")
C.as=H.G("a0")
C.at=H.G("z")
C.au=H.G("a9")})();(function staticFields(){$.kG="$cachedFunction"
$.kH="$cachedInvocation"
$.ke=null
$.kc=null
$.jM=!1
$.jR=null
$.le=null
$.lv=null
$.iI=null
$.iR=null
$.jS=null
$.bd=null
$.bX=null
$.bY=null
$.jN=!1
$.w=C.d
$.ks=0
$.al=null
$.jn=null
$.kr=null
$.kq=null
$.kn=null
$.km=null
$.kl=null
$.kk=null
$.nt=0
$.nu=0
$.jW=0
$.lt=0
$.c2=0
$.c3=0
$.nR=!1
$.ln=0})();(function lazyInitializers(){lazy($,"kj","$get$kj",function(){return H.lq("_$dart_dartClosure")})
lazy($,"js","$get$js",function(){return H.lq("_$dart_js")})
lazy($,"kx","$get$kx",function(){return H.mI()})
lazy($,"ky","$get$ky",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ks
$.ks=t+1
t="expando$key$"+t}return new P.en(t,null,[P.z])})
lazy($,"kN","$get$kN",function(){return H.af(H.hq({
toString:function(){return"$receiver$"}}))})
lazy($,"kO","$get$kO",function(){return H.af(H.hq({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kP","$get$kP",function(){return H.af(H.hq(null))})
lazy($,"kQ","$get$kQ",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kU","$get$kU",function(){return H.af(H.hq(void 0))})
lazy($,"kV","$get$kV",function(){return H.af(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kS","$get$kS",function(){return H.af(H.kT(null))})
lazy($,"kR","$get$kR",function(){return H.af(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kX","$get$kX",function(){return H.af(H.kT(void 0))})
lazy($,"kW","$get$kW",function(){return H.af(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jJ","$get$jJ",function(){return P.n5()})
lazy($,"ku","$get$ku",function(){return P.na(null,P.K)})
lazy($,"bZ","$get$bZ",function(){return[]})
lazy($,"ki","$get$ki",function(){return{}})
lazy($,"l4","$get$l4",function(){return P.jw(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jK","$get$jK",function(){return P.T()})
lazy($,"iH","$get$iH",function(){return P.kA(P.z,P.aj)})
lazy($,"c0","$get$c0",function(){return P.kA(P.o,P.aj)})
lazy($,"kK","$get$kK",function(){return new G.cV(1281,0,4294967295)})
lazy($,"ka","$get$ka",function(){return new G.cU(1281,1281,1281)})
lazy($,"P","$get$P",function(){return P.an(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.F,"aColorAlpha",C.a0,"aPosition",C.D,"aTexUV",C.a7,"aNormal",C.aa,"aBinormal",C.a_,"aCenter",C.E,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ac,"aBitangent",C.Y,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.F,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.D,"vPositionFromLight",C.Z,"vCenter",C.E,"vDepth",C.a5,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.G,"uConvolutionMatrix",C.G,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ab,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a9,"uAnimationTable",C.h,"uTime",C.a8,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a2,"uLightDescs",C.a3,"uLightCount",C.f,"uLightTypes",C.a4,"uBumpScale",C.a6,"uNormalScale",C.a1])})
lazy($,"kM","$get$kM",function(){var t=G.n1()
t.b=!0
return t})
lazy($,"kh","$get$kh",function(){return T.b6(1,0,0)})
lazy($,"lm","$get$lm",function(){var t=G.fX("uv-passthru")
t.bp(["aPosition","aTexUV"])
t.bs(["vTexUV"])
t.av(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"lk","$get$lk",function(){return $.$get$lm()})
lazy($,"lj","$get$lj",function(){var t=G.fX("copyF")
t.bs(["vTexUV"])
t.aL(["uTexture"])
t.av(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"ly","$get$ly",function(){var t=G.fX("SolidColor")
t.bp(["aPosition"])
t.aL(["uPerspectiveViewMatrix","uModelMatrix"])
t.av(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lx","$get$lx",function(){var t=G.fX("SolidColorF")
t.aL(["uColor"])
t.av(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"l1","$get$l1",function(){return[T.b6(0,0,1),T.b6(0,0,-1),T.b6(0,1,0),T.b6(0,-1,0),T.b6(1,0,0),T.b6(-1,0,0)]})})()
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
mangledGlobalNames:{z:"int",a0:"double",a9:"num",o:"String",aj:"bool",K:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.aj,args:[W.a3,P.o,P.o,W.bK]},{func:1,v:true,args:[P.C],opt:[P.b4]},{func:1,v:true,args:[W.f]},{func:1,ret:P.z,args:[P.F,P.F]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,NavigatorAutomationInformation:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.b2,ArrayBufferView:H.aG,DataView:H.fj,Float32Array:H.cv,Float64Array:H.fk,Int16Array:H.fl,Int32Array:H.fm,Int8Array:H.fn,Uint16Array:H.fo,Uint32Array:H.fp,Uint8ClampedArray:H.cz,CanvasPixelArray:H.cz,Uint8Array:H.fq,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.c4,LinearAccelerationSensor:W.c4,AccessibleNodeList:W.dS,HTMLAnchorElement:W.dT,HTMLAreaElement:W.dU,Blob:W.aU,HTMLBodyElement:W.au,HTMLCanvasElement:W.c6,CanvasRenderingContext2D:W.e_,CDATASection:W.aw,CharacterData:W.aw,Comment:W.aw,ProcessingInstruction:W.aw,Text:W.aw,CSSPerspective:W.e3,CSSPositionValue:W.e4,CSSRotation:W.e5,CSSScale:W.e6,CSSStyleDeclaration:W.aV,MSStyleCSSProperties:W.aV,CSS2Properties:W.aV,CSSImageValue:W.a2,CSSKeywordValue:W.a2,CSSNumericValue:W.a2,CSSResourceValue:W.a2,CSSUnitValue:W.a2,CSSURLImageValue:W.a2,CSSStyleValue:W.a2,CSSMatrixComponent:W.aW,CSSSkew:W.aW,CSSTransformComponent:W.aW,CSSTransformValue:W.e8,CSSTranslation:W.e9,CSSUnparsedValue:W.ea,DataTransferItemList:W.ec,DeviceAcceleration:W.ed,HTMLDivElement:W.c9,XMLDocument:W.bo,Document:W.bo,DOMException:W.ee,DOMImplementation:W.ca,DOMPoint:W.ef,DOMPointReadOnly:W.cb,ClientRectList:W.cc,DOMRectList:W.cc,DOMRectReadOnly:W.cd,DOMStringList:W.eg,DOMTokenList:W.eh,Element:W.a3,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.Y,FileList:W.bq,FileWriter:W.eG,HTMLFormElement:W.eK,Gyroscope:W.eO,HTMLHeadElement:W.ck,History:W.eP,HTMLCollection:W.br,HTMLFormControlsCollection:W.br,HTMLOptionsCollection:W.br,HTMLDocument:W.cl,XMLHttpRequest:W.eQ,XMLHttpRequestUpload:W.bs,XMLHttpRequestEventTarget:W.bs,ImageData:W.bt,KeyboardEvent:W.aD,Location:W.f5,Magnetometer:W.f6,HTMLAudioElement:W.bw,HTMLMediaElement:W.bw,MediaList:W.fe,MediaStream:W.b1,MIDIOutput:W.fg,MIDIInput:W.bx,MIDIPort:W.bx,MimeTypeArray:W.fh,PointerEvent:W.L,MouseEvent:W.L,DragEvent:W.L,Navigator:W.cA,WorkerNavigator:W.by,NavigatorConcurrentHardware:W.by,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cC,NodeList:W.bz,RadioNodeList:W.bz,Plugin:W.ad,PluginArray:W.fG,PresentationConnection:W.fJ,Range:W.cF,RTCDataChannel:W.cJ,DataChannel:W.cJ,HTMLSelectElement:W.fT,AbsoluteOrientationSensor:W.ao,AmbientLightSensor:W.ao,OrientationSensor:W.ao,RelativeOrientationSensor:W.ao,Sensor:W.ao,SourceBufferList:W.fY,SpeechGrammarList:W.h_,SpeechRecognitionResult:W.ae,Storage:W.h4,HTMLTableElement:W.cQ,HTMLTableRowElement:W.hd,HTMLTableSectionElement:W.he,HTMLTemplateElement:W.bF,TextTrackCueList:W.hg,TextTrackList:W.hh,TimeRanges:W.hi,TouchEvent:W.aJ,TouchList:W.hm,TrackDefaultList:W.hn,TreeWalker:W.cX,CompositionEvent:W.aK,FocusEvent:W.aK,TextEvent:W.aK,UIEvent:W.aK,URL:W.hv,VRStageBoundsPoint:W.hx,HTMLVideoElement:W.b7,VideoTrackList:W.hy,WebSocket:W.hz,WheelEvent:W.aM,Window:W.bJ,DOMWindow:W.bJ,CSSRuleList:W.hK,DOMRect:W.hL,GamepadList:W.i6,NamedNodeMap:W.de,MozNamedAttrMap:W.de,SpeechRecognitionResultList:W.iq,StyleSheetList:W.iu,SVGFEBlendElement:P.eo,SVGFEColorMatrixElement:P.ep,SVGFEComponentTransferElement:P.eq,SVGFECompositeElement:P.er,SVGFEConvolveMatrixElement:P.es,SVGFEDiffuseLightingElement:P.et,SVGFEDisplacementMapElement:P.eu,SVGFEFloodElement:P.ev,SVGFEGaussianBlurElement:P.ew,SVGFEImageElement:P.ex,SVGFEMergeElement:P.ey,SVGFEMorphologyElement:P.ez,SVGFEOffsetElement:P.eA,SVGFEPointLightElement:P.eB,SVGFESpecularLightingElement:P.eC,SVGFESpotLightElement:P.eD,SVGFETileElement:P.eE,SVGFETurbulenceElement:P.eF,SVGFilterElement:P.eH,SVGForeignObjectElement:P.eJ,SVGCircleElement:P.a4,SVGEllipseElement:P.a4,SVGLineElement:P.a4,SVGPathElement:P.a4,SVGPolygonElement:P.a4,SVGPolylineElement:P.a4,SVGGeometryElement:P.a4,SVGAElement:P.ab,SVGClipPathElement:P.ab,SVGDefsElement:P.ab,SVGGElement:P.ab,SVGSwitchElement:P.ab,SVGGraphicsElement:P.ab,SVGImageElement:P.eR,SVGLengthList:P.f0,SVGMaskElement:P.fc,SVGNumberList:P.fw,SVGPatternElement:P.fD,SVGPoint:P.fH,SVGPointList:P.fI,SVGRect:P.fL,SVGRectElement:P.fM,SVGScriptElement:P.bC,SVGStringList:P.hb,SVGAnimateElement:P.x,SVGAnimateMotionElement:P.x,SVGAnimateTransformElement:P.x,SVGAnimationElement:P.x,SVGDescElement:P.x,SVGDiscardElement:P.x,SVGFEDistantLightElement:P.x,SVGFEFuncAElement:P.x,SVGFEFuncBElement:P.x,SVGFEFuncGElement:P.x,SVGFEFuncRElement:P.x,SVGFEMergeNodeElement:P.x,SVGLinearGradientElement:P.x,SVGMarkerElement:P.x,SVGMetadataElement:P.x,SVGRadialGradientElement:P.x,SVGSetElement:P.x,SVGStopElement:P.x,SVGStyleElement:P.x,SVGSymbolElement:P.x,SVGTitleElement:P.x,SVGViewElement:P.x,SVGGradientElement:P.x,SVGComponentTransferFunctionElement:P.x,SVGFEDropShadowElement:P.x,SVGMPathElement:P.x,SVGElement:P.x,SVGSVGElement:P.hc,SVGTextPathElement:P.bG,SVGTextContentElement:P.bG,SVGTSpanElement:P.bH,SVGTextElement:P.bH,SVGTextPositioningElement:P.bH,SVGTransformList:P.ho,SVGUseElement:P.hw,AudioBuffer:P.dX,AudioTrackList:P.dY,AudioContext:P.aT,webkitAudioContext:P.aT,BaseAudioContext:P.aT,OfflineAudioContext:P.fx,WebGLRenderingContext:P.fQ,WebGL2RenderingContext:P.fR,SQLResultSetRowList:P.h0})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,NavigatorAutomationInformation:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,KeyboardEvent:true,Location:true,Magnetometer:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MediaStream:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,WorkerNavigator:true,NavigatorConcurrentHardware:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,HTMLVideoElement:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
W.bS.$nativeSuperclassTag="EventTarget"
W.bT.$nativeSuperclassTag="EventTarget"
W.bU.$nativeSuperclassTag="EventTarget"
W.bV.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lz(U.li(),b)},[])
else (function(b){H.lz(U.li(),b)})([])})})()