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
a[c]=function(){a[c]=function(){H.nl(b)}
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
return d?function(e){if(t===null)t=H.jn(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jn(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jn(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iZ:function iZ(a){this.a=a},
j5:function(a,b,c,d){if(!!a.$isk)return new H.e1(a,b,[c,d])
return new H.ce(a,b,[c,d])},
eF:function(){return new P.aY("No element")},
mg:function(){return new P.aY("Too many elements")},
mf:function(){return new P.aY("Too few elements")},
mu:function(a,b){H.cv(a,0,J.b8(a)-1,b)},
cv:function(a,b,c,d){if(c-b<=32)H.mt(a,b,c,d)
else H.ms(a,b,c,d)},
mt:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.R(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a4(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
ms:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.H(t+1,6)
r=a3+s
q=a4-s
p=C.b.H(a3+a4,2)
o=p-s
n=p+s
t=J.R(a2)
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
if(J.B(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
if(g<r&&f>q){for(;J.B(a5.$2(t.h(a2,g),l),0);)++g
for(;J.B(a5.$2(t.h(a2,f),j),0);)--f
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
k:function k(){},
aT:function aT(){},
cc:function cc(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ce:function ce(a,b,c){this.a=a
this.b=b
this.$ti=c},
e1:function e1(a,b,c){this.a=a
this.b=b
this.$ti=c},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bg:function bg(a,b,c){this.a=a
this.b=b
this.$ti=c},
cI:function cI(a,b,c){this.a=a
this.b=b
this.$ti=c},
he:function he(a,b,c){this.a=a
this.b=b
this.$ti=c},
aR:function aR(){},
du:function(a,b){var t=a.ah(b)
if(!u.globalState.d.cy)u.globalState.f.an()
return t},
ig:function(){++u.globalState.f.b},
iv:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
l6:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$ish)throw H.c(P.jK("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hP(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.hr(P.j4(null,H.aI),0)
q=P.x
s.seD(new H.a6(0,null,null,null,null,null,0,[q,H.aZ]))
s.seG(new H.a6(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hO()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.ma,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mI)}if(u.globalState.x)return
o=H.kG()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.b4(a,{func:1,args:[P.H]}))o.ah(new H.iF(t,a))
else if(H.b4(a,{func:1,args:[P.H,P.H]}))o.ah(new H.iG(t,a))
else o.ah(a)
u.globalState.f.an()},
mI:function(a){var t=P.ay(["command","print","msg",a])
return new H.a0(!0,P.b_(null,P.x)).I(t)},
kG:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.aZ(t,new H.a6(0,null,null,null,null,null,0,[s,H.cs]),P.az(null,null,null,s),u.createNewIsolate(),new H.cs(0,null,!1),new H.aq(H.l5()),new H.aq(H.l5()),!1,!1,[],P.az(null,null,null,null),null,null,!1,!0,P.az(null,null,null,null))
t.dt()
return t},
mc:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.md()
return},
md:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.r('Cannot extract URI from "'+t+'"'))},
ma:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aH(!0,[]).X(b.data)
s=J.R(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n8(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aH(!0,[]).X(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aH(!0,[]).X(s.h(t,"replyTo"))
k=H.kG()
u.globalState.f.a.U(0,new H.aI(k,new H.eC(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.an()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lG(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.an()
break
case"close":u.globalState.ch.am(0,$.$get$k6().h(0,a))
a.terminate()
u.globalState.f.an()
break
case"log":H.m9(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.ay(["command","print","msg",t])
j=new H.a0(!0,P.b_(null,P.x)).I(j)
s.toString
self.postMessage(j)}else P.a3(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
m9:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.ay(["command","log","msg",a])
r=new H.a0(!0,P.b_(null,P.x)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.J(q)
t=H.am(q)
s=P.c2(t)
throw H.c(s)}},
mb:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kf=$.kf+("_"+s)
$.kg=$.kg+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.b0(s,r),q,t.r])
r=new H.eD(t,d,a,c,b)
if(e){t.bL(q,q)
u.globalState.f.a.U(0,new H.aI(t,r,"start isolate"))}else r.$0()},
mv:function(a,b){var t=new H.fY(!0,!1,null,0)
t.dk(a,b)
return t},
mJ:function(a){return new H.aH(!0,[]).X(new H.a0(!1,P.b_(null,P.x)).I(a))},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b){this.a=a
this.b=b},
hP:function hP(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aZ:function aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(){},
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
b0:function b0(a,b){this.b=a
this.a=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
bG:function bG(a,b,c){this.b=a
this.c=b
this.a=c},
cs:function cs(a,b,c){this.a=a
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
aq:function aq(a){this.a=a},
a0:function a0(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
n2:function(a){return u.types[a]},
na:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isq},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b9(a)
if(typeof t!=="string")throw H.c(H.N(a))
return t},
mq:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.ai(t)
s=t[0]
r=t[1]
return new H.fr(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aB:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bk:function(a){var t,s,r,q,p,o,n,m,l
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.N||!!J.t(a).$isaF){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aH(q,0)===36)q=C.i.cY(q,1)
l=H.dw(H.ii(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
L:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mo:function(a){return a.b?H.L(a).getUTCFullYear()+0:H.L(a).getFullYear()+0},
mm:function(a){return a.b?H.L(a).getUTCMonth()+1:H.L(a).getMonth()+1},
mi:function(a){return a.b?H.L(a).getUTCDate()+0:H.L(a).getDate()+0},
mj:function(a){return a.b?H.L(a).getUTCHours()+0:H.L(a).getHours()+0},
ml:function(a){return a.b?H.L(a).getUTCMinutes()+0:H.L(a).getMinutes()+0},
mn:function(a){return a.b?H.L(a).getUTCSeconds()+0:H.L(a).getSeconds()+0},
mk:function(a){return a.b?H.L(a).getUTCMilliseconds()+0:H.L(a).getMilliseconds()+0},
ke:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.N(a))
return a[b]},
b3:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.W(!0,b,"index",null)
t=J.b8(a)
if(b<0||C.b.b4(b,t))return P.y(b,a,"index",null,t)
return P.fo(b,"index",null)},
N:function(a){return new P.W(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.cp()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l7})
t.name=""}else t.toString=H.l7
return t},
l7:function(){return J.b9(this.dartException)},
F:function(a){throw H.c(a)},
I:function(a){throw H.c(P.ag(a))},
a9:function(a){var t,s,r,q,p,o
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
ks:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kd:function(a,b){return new H.f9(a,b==null?null:b.method)},
j0:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eJ(a,s,t?null:b.receiver)},
J:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iH(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aT(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j0(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kd(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$km()
o=$.$get$kn()
n=$.$get$ko()
m=$.$get$kp()
l=$.$get$kt()
k=$.$get$ku()
j=$.$get$kr()
$.$get$kq()
i=$.$get$kw()
h=$.$get$kv()
g=p.L(s)
if(g!=null)return t.$1(H.j0(s,g))
else{g=o.L(s)
if(g!=null){g.method="call"
return t.$1(H.j0(s,g))}else{g=n.L(s)
if(g==null){g=m.L(s)
if(g==null){g=l.L(s)
if(g==null){g=k.L(s)
if(g==null){g=j.L(s)
if(g==null){g=m.L(s)
if(g==null){g=i.L(s)
if(g==null){g=h.L(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kd(s,g))}}return t.$1(new H.h7(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cy()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.W(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cy()
return a},
am:function(a){var t
if(a==null)return new H.d8(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d8(a,null)},
ne:function(a){if(a==null||typeof a!='object')return J.b7(a)
else return H.aB(a)},
n0:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.i(0,p,a[q])}return b},
n9:function(a,b,c,d,e,f,g){switch(c){case 0:return H.du(b,new H.iq(a))
case 1:return H.du(b,new H.ir(a,d))
case 2:return H.du(b,new H.is(a,d,e))
case 3:return H.du(b,new H.it(a,d,e,f))
case 4:return H.du(b,new H.iu(a,d,e,f,g))}throw H.c(P.c2("Unsupported number of arguments for wrapped closure"))},
bK:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n9)
a.$identity=t
return t},
lY:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$ish){t.$reflectionInfo=c
r=H.mq(t).r}else r=c
q=d?Object.create(new H.fG().constructor.prototype):Object.create(new H.ba(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jS(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.n2,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jP:H.iT
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jS(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lV:function(a,b,c,d){var t=H.iT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jS:function(a,b,c){var t,s,r,q
if(c)return H.lX(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lV(s,b==null?r!=null:b!==r,t,b)
return q},
lW:function(a,b,c,d){var t,s
t=H.iT
s=H.jP
switch(b?-1:a){case 0:throw H.c(H.mr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lX:function(a,b){var t,s,r,q
t=$.jQ
if(t==null){t=H.jN("self")
$.jQ=t}t=$.jO
if(t==null){t=H.jN("receiver")
$.jO=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lW(r,b==null?q!=null:b!==q,s,b)
return t},
jn:function(a,b,c,d,e,f){var t,s
t=J.ai(b)
s=!!J.t(c).$ish?J.ai(c):c
return H.lY(a,t,s,!!d,e,f)},
iT:function(a){return a.a},
jP:function(a){return a.c},
jN:function(a){var t,s,r,q,p
t=new H.ba("self","target","receiver","name")
s=J.ai(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nA:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aa(a,"String"))},
nv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aa(a,"double"))},
nz:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aa(a,"num"))},
mV:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aa(a,"bool"))},
n8:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aa(a,"int"))},
ng:function(a,b){throw H.c(H.aa(a,b.substring(3)))},
nf:function(a,b){var t=J.R(b)
throw H.c(H.jR(a,t.bi(b,3,t.gj(b))))},
jr:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.ng(a,b)},
ao:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.nf(a,b)},
ny:function(a){if(a==null)return a
if(!!J.t(a).$ish)return a
throw H.c(H.aa(a,"List"))},
jo:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
b4:function(a,b){var t,s
if(a==null)return!1
t=H.jo(a)
if(t==null)s=!1
else s=H.l_(t,b)
return s},
nw:function(a,b){var t,s
if(a==null)return a
if($.jk)return a
$.jk=!0
try{if(H.b4(a,b))return a
t=H.iz(b,null)
s=H.aa(a,t)
throw H.c(s)}finally{$.jk=!1}},
aa:function(a,b){return new H.h5("TypeError: "+H.e(P.c1(a))+": type '"+H.kM(a)+"' is not a subtype of type '"+b+"'")},
jR:function(a,b){return new H.dH("CastError: "+H.e(P.c1(a))+": type '"+H.kM(a)+"' is not a subtype of type '"+b+"'")},
kM:function(a){var t
if(a instanceof H.as){t=H.jo(a)
if(t!=null)return H.iz(t,null)
return"Closure"}return H.bk(a)},
ae:function(a){if(!0===a)return!1
if(!!J.t(a).$isiX)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.aa(a,"bool"))},
al:function(a){throw H.c(new H.hg(a))},
b:function(a){if(H.ae(a))throw H.c(P.lU(null))},
nl:function(a){throw H.c(new P.dS(a))},
mr:function(a){return new H.fw(a)},
l5:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kY:function(a){return u.getIsolateTag(a)},
E:function(a){return new H.ak(a,null)},
A:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ii:function(a){if(a==null)return
return a.$ti},
kZ:function(a,b){return H.jv(a["$as"+H.e(b)],H.ii(a))},
a1:function(a,b,c){var t,s
t=H.kZ(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
an:function(a,b){var t,s
t=H.ii(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iz:function(a,b){var t=H.b5(a,b)
return t},
b5:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dw(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b5(t,b)
return H.mK(a,b)}return"unknown-reified-type"},
mK:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b5(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b5(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b5(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n_(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b5(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dw:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bn("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b5(o,c)}return p?"":"<"+s.k(0)+">"},
ij:function(a){var t,s,r
if(a instanceof H.as){t=H.jo(a)
if(t!=null)return H.iz(t,null)}s=J.t(a).constructor.name
if(a==null)return s
r=H.dw(a.$ti,0,null)
return s+r},
jv:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.js(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.js(a,null,b)
return b},
ia:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ii(a)
s=J.t(a)
if(s[b]==null)return!1
return H.kQ(H.jv(s[d],t),c)},
dx:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ia(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dw(c,0,null)
throw H.c(H.jR(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
ns:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ia(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dw(c,0,null)
throw H.c(H.aa(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
kQ:function(a,b){var t,s,r,q,p
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
if(!H.S(r,b[p]))return!1}return!0},
nt:function(a,b,c){return H.js(a,b,H.kZ(b,c))},
S:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="H")return!0
if('func' in b)return H.l_(a,b)
if('func' in a)return b.name==="iX"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iz(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kQ(H.jv(o,t),r)},
kP:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.S(o,n)||H.S(n,o)))return!1}return!0},
mR:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.ai(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.S(p,o)||H.S(o,p)))return!1}return!0},
l_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.S(t,s)||H.S(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kP(r,q,!1))return!1
if(!H.kP(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.S(g,f)||H.S(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.S(g,f)||H.S(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.S(g,f)||H.S(f,g)))return!1}}return H.mR(a.named,b.named)},
js:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nB:function(a){var t=$.jp
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nx:function(a){return H.aB(a)},
nu:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nb:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.jp.$1(a)
s=$.ie[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ip[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kO.$2(a,t)
if(t!=null){s=$.ie[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.ip[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.ix(r)
$.ie[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.ip[t]=r
return r}if(p==="-"){o=H.ix(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l1(a,r)
if(p==="*")throw H.c(P.kA(t))
if(u.leafTags[t]===true){o=H.ix(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l1(a,r)},
l1:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jt(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ix:function(a){return J.jt(a,!1,null,!!a.$isq)},
nd:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.ix(t)
else return J.jt(t,c,null,null)},
n6:function(){if(!0===$.jq)return
$.jq=!0
H.n7()},
n7:function(){var t,s,r,q,p,o,n,m
$.ie=Object.create(null)
$.ip=Object.create(null)
H.n5()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l4.$1(p)
if(o!=null){n=H.nd(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
n5:function(){var t,s,r,q,p,o,n
t=C.R()
t=H.b2(C.O,H.b2(C.T,H.b2(C.A,H.b2(C.A,H.b2(C.S,H.b2(C.P,H.b2(C.Q(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jp=new H.il(p)
$.kO=new H.im(o)
$.l4=new H.io(n)},
b2:function(a,b){return a(b)||b},
nk:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fr:function fr(a,b,c,d,e,f,g,h){var _=this
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
f9:function f9(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a){this.a=a},
iH:function iH(a){this.a=a},
d8:function d8(a,b){this.a=a
this.b=b},
iq:function iq(a){this.a=a},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
it:function it(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iu:function iu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
as:function as(){},
fT:function fT(){},
fG:function fG(){},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h5:function h5(a){this.a=a},
dH:function dH(a){this.a=a},
fw:function fw(a){this.a=a},
hg:function hg(a){this.a=a},
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
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
i6:function(a){var t,s,r
if(!!J.t(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b3(b,a))},
bi:function bi(){},
aW:function aW(){},
f_:function f_(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
cg:function cg(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
ck:function ck(){},
f6:function f6(){},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
n_:function(a){return J.ai(H.A(a?Object.keys(a):[],[null]))},
iy:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ca.prototype
return J.c9.prototype}if(typeof a=="string")return J.av.prototype
if(a==null)return J.eH.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.C)return a
return J.ih(a)},
jt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ih:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jq==null){H.n6()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kA("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j_()]
if(p!=null)return p
p=H.nb(a)
if(p!=null)return p
if(typeof a=="function")return C.U
s=Object.getPrototypeOf(a)
if(s==null)return C.D
if(s===Object.prototype)return C.D
if(typeof q=="function"){Object.defineProperty(q,$.$get$j_(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
ai:function(a){a.fixed$length=Array
return a},
R:function(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.C)return a
return J.ih(a)},
bM:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.C)return a
return J.ih(a)},
kW:function(a){if(typeof a=="number")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aF.prototype
return a},
n1:function(a){if(typeof a=="number")return J.aS.prototype
if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aF.prototype
return a},
kX:function(a){if(typeof a=="string")return J.av.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aF.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aw.prototype
return a}if(a instanceof P.C)return a
return J.ih(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).v(a,b)},
a4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kW(a).R(a,b)},
l9:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kW(a).Z(a,b)},
b6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.na(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.R(a).h(a,b)},
la:function(a,b,c,d){return J.i(a).dz(a,b,c,d)},
jw:function(a,b){return J.kX(a).aH(a,b)},
iI:function(a,b){return J.i(a).dQ(a,b)},
lb:function(a,b,c){return J.i(a).dR(a,b,c)},
jx:function(a,b){return J.i(a).bK(a,b)},
iJ:function(a,b){return J.i(a).N(a,b)},
jy:function(a,b,c){return J.i(a).bN(a,b,c)},
lc:function(a,b){return J.i(a).e4(a,b)},
iK:function(a,b,c){return J.i(a).bO(a,b,c)},
ld:function(a,b,c){return J.i(a).bP(a,b,c)},
bP:function(a,b,c){return J.i(a).bQ(a,b,c)},
dy:function(a,b){return J.i(a).e7(a,b)},
le:function(a,b){return J.i(a).bR(a,b)},
lf:function(a,b,c){return J.i(a).bS(a,b,c)},
jz:function(a,b,c,d){return J.i(a).bT(a,b,c,d)},
lg:function(a,b){return J.bM(a).bU(a,b)},
lh:function(a,b,c,d,e){return J.i(a).bV(a,b,c,d,e)},
li:function(a,b){return J.n1(a).O(a,b)},
iL:function(a,b,c){return J.R(a).eb(a,b,c)},
iM:function(a){return J.i(a).bX(a)},
lj:function(a){return J.i(a).bY(a)},
lk:function(a){return J.i(a).c0(a)},
ll:function(a){return J.i(a).eh(a)},
lm:function(a,b){return J.i(a).c2(a,b)},
iN:function(a,b){return J.i(a).c3(a,b)},
ln:function(a,b,c,d){return J.i(a).c4(a,b,c,d)},
lo:function(a,b,c,d,e){return J.i(a).eo(a,b,c,d,e)},
lp:function(a,b,c,d,e){return J.i(a).c5(a,b,c,d,e)},
lq:function(a,b,c,d,e,f){return J.i(a).ep(a,b,c,d,e,f)},
lr:function(a,b){return J.bM(a).t(a,b)},
dz:function(a,b){return J.i(a).c6(a,b)},
ls:function(a,b){return J.i(a).c7(a,b)},
lt:function(a){return J.i(a).eq(a)},
jA:function(a,b){return J.bM(a).ai(a,b)},
lu:function(a){return J.i(a).ge3(a)},
b7:function(a){return J.t(a).gu(a)},
aK:function(a){return J.bM(a).gw(a)},
b8:function(a){return J.R(a).gj(a)},
lv:function(a){return J.i(a).gb0(a)},
lw:function(a){return J.t(a).gA(a)},
lx:function(a){return J.i(a).geS(a)},
ly:function(a){return J.i(a).gaA(a)},
iO:function(a){return J.i(a).gm(a)},
iP:function(a){return J.i(a).gn(a)},
jB:function(a){return J.i(a).gD(a)},
iQ:function(a,b){return J.i(a).a9(a,b)},
lz:function(a){return J.i(a).aC(a)},
lA:function(a){return J.i(a).b6(a)},
lB:function(a,b){return J.i(a).b7(a,b)},
lC:function(a,b,c){return J.i(a).b8(a,b,c)},
jC:function(a,b,c){return J.i(a).bb(a,b,c)},
lD:function(a,b){return J.i(a).ca(a,b)},
lE:function(a,b){return J.bM(a).cc(a,b)},
lF:function(a,b,c){return J.i(a).ce(a,b,c)},
jD:function(a){return J.bM(a).eL(a)},
lG:function(a,b){return J.i(a).G(a,b)},
lH:function(a,b,c,d){return J.i(a).bh(a,b,c,d)},
lI:function(a,b,c,d,e,f,g){return J.i(a).ck(a,b,c,d,e,f,g)},
lJ:function(a,b,c,d){return J.i(a).cl(a,b,c,d)},
jE:function(a,b,c,d){return J.i(a).cm(a,b,c,d)},
lK:function(a){return J.kX(a).eV(a)},
b9:function(a){return J.t(a).k(a)},
lL:function(a,b,c,d){return J.i(a).eX(a,b,c,d)},
lM:function(a,b,c){return J.i(a).cq(a,b,c)},
lN:function(a,b,c){return J.i(a).cr(a,b,c)},
iR:function(a,b,c){return J.i(a).cs(a,b,c)},
lO:function(a,b,c){return J.i(a).ct(a,b,c)},
jF:function(a,b,c){return J.i(a).cu(a,b,c)},
jG:function(a,b,c){return J.i(a).cv(a,b,c)},
jH:function(a,b,c){return J.i(a).cw(a,b,c)},
jI:function(a,b,c,d){return J.i(a).cz(a,b,c,d)},
jJ:function(a,b,c,d){return J.i(a).cA(a,b,c,d)},
lP:function(a,b){return J.i(a).cC(a,b)},
lQ:function(a,b,c){return J.i(a).eY(a,b,c)},
lR:function(a,b,c,d,e,f,g){return J.i(a).cE(a,b,c,d,e,f,g)},
lS:function(a,b,c,d,e){return J.i(a).cG(a,b,c,d,e)},
a:function a(){},
eG:function eG(){},
eH:function eH(){},
bf:function bf(){},
fj:function fj(){},
aF:function aF(){},
aw:function aw(){},
au:function au(a){this.$ti=a},
iY:function iY(a){this.$ti=a},
dD:function dD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aS:function aS(){},
ca:function ca(){},
c9:function c9(){},
av:function av(){}},P={
mz:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mS()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bK(new P.hi(t),1)).observe(s,{childList:true})
return new P.hh(t,s,r)}else if(self.setImmediate!=null)return P.mT()
return P.mU()},
mA:function(a){H.ig()
self.scheduleImmediate(H.bK(new P.hj(a),0))},
mB:function(a){H.ig()
self.setImmediate(H.bK(new P.hk(a),0))},
mC:function(a){P.ja(C.y,a)},
ja:function(a,b){var t=C.b.H(a.a,1000)
return H.mv(t<0?0:t,b)},
mN:function(a,b){if(H.b4(a,{func:1,args:[P.H,P.H]})){b.toString
return a}else{b.toString
return a}},
mE:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ac))
H.b(b.a===0)
b.a=1
try{a.co(new P.hy(b),new P.hz(b))}catch(r){t=H.J(r)
s=H.am(r)
P.nh(new P.hA(b,t,s))}},
kD:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aR()
b.aG(a)
P.bt(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bE(r)}},
bt:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.i7(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bt(t.a,b)}s=t.a
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
P.i7(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.hE(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hD(r,b,m).$0()}else if((s&2)!==0)new P.hC(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.t(s).$iseu){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.av(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kD(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.av(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mM:function(){var t,s
for(;t=$.b1,t!=null;){$.bI=null
s=t.b
$.b1=s
if(s==null)$.bH=null
t.a.$0()}},
mQ:function(){$.jl=!0
try{P.mM()}finally{$.bI=null
$.jl=!1
if($.b1!=null)$.$get$jg().$1(P.kR())}},
kL:function(a){var t=new P.cJ(a,null)
if($.b1==null){$.bH=t
$.b1=t
if(!$.jl)$.$get$jg().$1(P.kR())}else{$.bH.b=t
$.bH=t}},
mP:function(a){var t,s,r
t=$.b1
if(t==null){P.kL(a)
$.bI=$.bH
return}s=new P.cJ(a,null)
r=$.bI
if(r==null){s.b=t
$.bI=s
$.b1=s}else{s.b=r.b
r.b=s
$.bI=s
if(s.b==null)$.bH=s}},
nh:function(a){var t=$.z
if(C.f===t){P.i9(null,null,C.f,a)
return}t.toString
P.i9(null,null,t,t.aX(a))},
mw:function(a,b){var t=$.z
if(t===C.f){t.toString
return P.ja(a,b)}return P.ja(a,t.aX(b))},
jf:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
i7:function(a,b,c,d,e){var t={}
t.a=d
P.mP(new P.i8(t,e))},
kJ:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.jf(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
kK:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.jf(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
mO:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.jf(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
i9:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aX(d):c.e5(d)
P.kL(d)},
hi:function hi(a){this.a=a},
hh:function hh(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
iU:function iU(){},
hn:function hn(){},
i1:function i1(a,b){this.a=a
this.$ti=b},
cR:function cR(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ac:function ac(a,b,c,d){var _=this
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
cJ:function cJ(a,b){this.a=a
this.b=b},
fL:function fL(){},
fN:function fN(a){this.a=a},
fO:function fO(a,b){this.a=a
this.b=b},
fM:function fM(){},
j9:function j9(){},
aL:function aL(a,b){this.a=a
this.b=b},
i5:function i5(){},
i8:function i8(a,b){this.a=a
this.b=b},
hS:function hS(){},
hU:function hU(a,b){this.a=a
this.b=b},
hT:function hT(a,b){this.a=a
this.b=b},
hV:function hV(a,b){this.a=a
this.b=b},
k8:function(a,b){return new H.a6(0,null,null,null,null,null,0,[a,b])},
T:function(){return new H.a6(0,null,null,null,null,null,0,[null,null])},
ay:function(a){return H.n0(a,new H.a6(0,null,null,null,null,null,0,[null,null]))},
b_:function(a,b){return new P.hM(0,null,null,null,null,null,0,[a,b])},
az:function(a,b,c,d){return new P.hK(0,null,null,null,null,null,0,[d])},
jj:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
me:function(a,b,c){var t,s
if(P.jm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bJ()
C.a.l(s,a)
try{P.mL(a,t)}finally{H.b(C.a.gaz(s)===a)
s.pop()}s=P.kk(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eE:function(a,b,c){var t,s,r
if(P.jm(a))return b+"..."+c
t=new P.bn(b)
s=$.$get$bJ()
C.a.l(s,a)
try{r=t
r.a=P.kk(r.ga3(),a,", ")}finally{H.b(C.a.gaz(s)===a)
s.pop()}s=t
s.a=s.ga3()+c
s=t.ga3()
return s.charCodeAt(0)==0?s:s},
jm:function(a){var t,s
for(t=0;s=$.$get$bJ(),t<s.length;++t)if(a===s[t])return!0
return!1},
mL:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
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
j3:function(a,b){var t,s
t=P.az(null,null,null,b)
for(s=J.aK(a);s.p();)t.l(0,s.gq(s))
return t},
ka:function(a){var t,s,r
t={}
if(P.jm(a))return"{...}"
s=new P.bn("")
try{C.a.l($.$get$bJ(),a)
r=s
r.a=r.ga3()+"{"
t.a=!0
J.jA(a,new P.eR(t,s))
t=s
t.a=t.ga3()+"}"}finally{t=$.$get$bJ()
H.b(C.a.gaz(t)===a)
t.pop()}t=s.ga3()
return t.charCodeAt(0)==0?t:t},
j4:function(a,b){var t=new P.eO(null,0,0,0,[b])
t.dc(a,b)
return t},
hM:function hM(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hK:function hK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
bv:function bv(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hH:function hH(){},
j2:function j2(){},
cb:function cb(){},
l:function l(){},
cd:function cd(){},
eR:function eR(a,b){this.a=a
this.b=b},
aV:function aV(){},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hN:function hN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fz:function fz(){},
fy:function fy(){},
bw:function bw(){},
m4:function(a){var t=J.t(a)
if(!!t.$isas)return t.k(a)
return"Instance of '"+H.bk(a)+"'"},
k9:function(a,b,c){var t,s
t=H.A([],[c])
for(s=J.aK(a);s.p();)C.a.l(t,s.gq(s))
if(b)return t
return J.ai(t)},
kk:function(a,b,c){var t=J.aK(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
lZ:function(a,b){return J.li(a,b)},
m_:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
m0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bW:function(a){if(a>=10)return""+a
return"0"+a},
k_:function(a,b,c,d,e,f){return new P.at(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c1:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b9(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m4(a)},
lU:function(a){return new P.bR(a)},
jK:function(a){return new P.W(!1,null,null,a)},
iS:function(a,b,c){return new P.W(!0,a,b,c)},
lT:function(a){return new P.W(!1,null,a,"Must not be null")},
fo:function(a,b,c){return new P.cr(null,null,!0,a,b,"Value not in range")},
aC:function(a,b,c,d,e){return new P.cr(b,c,!0,a,d,"Invalid value")},
kh:function(a,b,c,d,e,f){if(C.b.R(0,a)||C.b.R(a,c))throw H.c(P.aC(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.R(b,c))throw H.c(P.aC(b,a,c,"end",f))
return b}return c},
y:function(a,b,c,d,e){var t=e!=null?e:J.b8(b)
return new P.eB(b,t,!0,a,c,"Index out of range")},
r:function(a){return new P.h8(a)},
kA:function(a){return new P.h6(a)},
j8:function(a){return new P.aY(a)},
ag:function(a){return new P.dJ(a)},
c2:function(a){return new P.hw(a)},
a3:function(a){H.iy(H.e(a))},
af:function af(){},
D:function D(){},
aP:function aP(a,b){this.a=a
this.b=b},
V:function V(){},
at:function at(a){this.a=a},
e_:function e_(){},
e0:function e0(){},
aQ:function aQ(){},
bR:function bR(a){this.a=a},
cp:function cp(){},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cr:function cr(a,b,c,d,e,f){var _=this
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
aY:function aY(a){this.a=a},
dJ:function dJ(a){this.a=a},
cy:function cy(){},
dS:function dS(a){this.a=a},
iW:function iW(){},
hw:function hw(a){this.a=a},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
O:function O(){},
c8:function c8(){},
h:function h(){},
aU:function aU(){},
H:function H(){},
a2:function a2(){},
C:function C(){},
aX:function aX(){},
n:function n(){},
bn:function bn(a){this.a=a},
jc:function jc(){},
ic:function(a){var t,s,r,q,p
if(a==null)return
t=P.T()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.I)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mY:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jA(a,new P.ib(t))
return t},
jZ:function(){var t=$.jY
if(t==null){t=J.iL(window.navigator.userAgent,"Opera",0)
$.jY=t}return t},
m1:function(){var t,s
t=$.jV
if(t!=null)return t
s=$.jW
if(s==null){s=J.iL(window.navigator.userAgent,"Firefox",0)
$.jW=s}if(s)t="-moz-"
else{s=$.jX
if(s==null){s=!P.jZ()&&J.iL(window.navigator.userAgent,"Trident/",0)
$.jX=s}if(s)t="-ms-"
else t=P.jZ()?"-o-":"-webkit-"}$.jV=t
return t},
ib:function ib(a){this.a=a},
hJ:function hJ(){},
hR:function hR(){},
P:function P(){},
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
ep:function ep(){},
er:function er(){},
Z:function Z(){},
a5:function a5(){},
ez:function ez(){},
eK:function eK(){},
eT:function eT(){},
fa:function fa(){},
fh:function fh(){},
fl:function fl(){},
fm:function fm(){},
fp:function fp(){},
fq:function fq(){},
bm:function bm(){},
fP:function fP(){},
u:function u(){},
fQ:function fQ(){},
bp:function bp(){},
bq:function bq(){},
h2:function h2(){},
ha:function ha(){},
cU:function cU(){},
cV:function cV(){},
d0:function d0(){},
d1:function d1(){},
da:function da(){},
db:function db(){},
dg:function dg(){},
dh:function dh(){},
dE:function dE(){},
dF:function dF(){},
aM:function aM(){},
fb:function fb(){},
fu:function fu(){},
fv:function fv(){},
fF:function fF(){},
d6:function d6(){},
d7:function d7(){}},W={
m2:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).K(t,a,b,c)
s.toString
t=new H.cI(new W.M(s),new W.e2(),[W.p])
return t.ga1(t)},
m3:function(a){return"wheel"},
bc:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lx(a)
if(typeof s==="string")t=a.tagName}catch(r){H.J(r)}return t},
mD:function(a,b){return document.createElement(a)},
aJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kH:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a_:function(a,b,c,d,e){var t=c==null?null:W.kN(new W.hv(c))
t=new W.hu(0,a,b,t,!1,[e])
t.dr(a,b,c,!1,e)
return t},
kE:function(a){var t,s
t=document.createElement("a")
s=new W.hW(t,window.location)
s=new W.bu(s)
s.ds(a)
return s},
mG:function(a,b,c,d){return!0},
mH:function(a,b,c,d){var t,s,r,q,p
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
kI:function(){var t=P.n
t=new W.i2(P.j3(C.t,t),P.az(null,null,null,t),P.az(null,null,null,t),P.az(null,null,null,t),null)
t.dv(null,new H.bg(C.t,new W.i3(),[H.an(C.t,0),null]),["TEMPLATE"],null)
return t},
kN:function(a){var t=$.z
if(t===C.f)return a
return t.e6(a)},
j:function j(){},
bQ:function bQ(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
ap:function ap(){},
bS:function bS(){},
bT:function bT(){},
bU:function bU(){},
ar:function ar(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
aN:function aN(){},
dO:function dO(){},
X:function X(){},
aO:function aO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
bX:function bX(){},
bb:function bb(){},
dV:function dV(){},
bY:function bY(){},
dW:function dW(){},
bZ:function bZ(){},
c_:function c_(){},
c0:function c0(){},
dX:function dX(){},
dY:function dY(){},
Y:function Y(){},
e2:function e2(){},
f:function f(){},
d:function d(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
ew:function ew(){},
c6:function c6(){},
ex:function ex(){},
bd:function bd(){},
c7:function c7(){},
ey:function ey(){},
be:function be(){},
ax:function ax(){},
eP:function eP(){},
eQ:function eQ(){},
eV:function eV(){},
eX:function eX(){},
bh:function bh(){},
eY:function eY(){},
G:function G(){},
M:function M(a){this.a=a},
p:function p(){},
cm:function cm(){},
bj:function bj(){},
a7:function a7(){},
fk:function fk(){},
fn:function fn(){},
cq:function cq(){},
cu:function cu(){},
fx:function fx(){},
aj:function aj(){},
fC:function fC(){},
fE:function fE(){},
a8:function a8(){},
fJ:function fJ(){},
fK:function fK(a){this.a=a},
cA:function cA(){},
fR:function fR(){},
fS:function fS(){},
bo:function bo(){},
fU:function fU(){},
fV:function fV(){},
fX:function fX(){},
aD:function aD(){},
h0:function h0(){},
h1:function h1(){},
cG:function cG(){},
aE:function aE(){},
h9:function h9(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(){},
aG:function aG(){},
bs:function bs(){},
hf:function hf(a){this.a=a},
je:function je(){},
ho:function ho(){},
hp:function hp(){},
hG:function hG(){},
cY:function cY(){},
hZ:function hZ(){},
i_:function i_(){},
hl:function hl(){},
hq:function hq(a){this.a=a},
ht:function ht(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jh:function jh(a,b,c,d){var _=this
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
bu:function bu(a){this.a=a},
m:function m(){},
co:function co(a){this.a=a},
f8:function f8(a){this.a=a},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
bB:function bB(){},
hX:function hX(){},
hY:function hY(){},
i2:function i2(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i3:function i3(){},
i0:function i0(){},
c4:function c4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cn:function cn(){},
j6:function j6(){},
jd:function jd(){},
hW:function hW(a,b){this.a=a
this.b=b},
di:function di(a){this.a=a},
i4:function i4(a){this.a=a},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cS:function cS(){},
cT:function cT(){},
cW:function cW(){},
cX:function cX(){},
cZ:function cZ(){},
d_:function d_(){},
d2:function d2(){},
d3:function d3(){},
bC:function bC(){},
bD:function bD(){},
d4:function d4(){},
d5:function d5(){},
d9:function d9(){},
dc:function dc(){},
dd:function dd(){},
bE:function bE(){},
bF:function bF(){},
de:function de(){},
df:function df(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){}},B={
ni:function(a){var t,s
t=document
s=W.ax
W.a_(t,"keydown",new B.iA(),!1,s)
W.a_(t,"keyup",new B.iB(),!1,s)
if(!$.nj)W.a_(t,"mousemove",new B.iC(),!1,W.G)
s=W.G
W.a_(t,"mousedown",new B.iD(),!1,s)
W.a_(t,"mouseup",new B.iE(),!1,s)},
mh:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$id()
r=$.$get$bL()
q=new T.K(new Float32Array(16))
q.S()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fc(a,b,c,0,new T.v(t),-0.02,s,r,q,new T.v(p),new T.v(o),new T.v(n),new T.v(new Float32Array(3)),"camera:orbit",!1,!0)
t.de(a,b,c,d)
return t},
iA:function iA(){},
iB:function iB(){},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
fc:function fc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
ff:function ff(){},
fg:function fg(a){this.a=a}},G={
my:function(a){var t,s,r
t=H.A(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.a6(t,"\n")},
kC:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.c_(a,b)
t.be(a,s,c)
t.bW(a,s)
r=t.ba(a,s,35713)
if(r!=null&&!r){q=t.b9(a,s)
P.a3("E:Compilation failed:")
P.a3("E:"+G.my(c))
P.a3("E:Failure:")
P.a3(C.i.a0("E:",q))
throw H.c(q)}return s},
kl:function(a,b,c){return new G.cD(a,b,c)},
kb:function(a,b){var t=new G.eU(P.T(),a,!1,!0)
t.dd(a,b)
return t},
k3:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iO(a[s])
b[t+1]=J.iP(a[s])
b[t+2]=J.jB(a[s])}return b},
m6:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iO(a[s])
b[t+1]=J.iP(a[s])}return b},
m7:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iO(a[s])
b[t+1]=J.iP(a[s])
b[t+2]=J.jB(a[s])
b[t+3]=J.ly(a[s])}return b},
m5:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b6(a[s],0)
b[t+1]=J.b6(a[s],1)
b[t+2]=J.b6(a[s],2)
b[t+3]=J.b6(a[s],3)}return b},
kc:function(a,b,c,d){return new G.eW(b,J.ll(b.a),c,P.T(),d,null,0,-1,null,null,P.T(),"meshdata:"+a,!1,!0)},
mF:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gC(t),s=s.gw(s),r=b.x,q=[[P.h,P.x]],p=[P.V],o=[T.ab],n=[T.v],m=[T.U];s.p();){l=s.gq(s)
if(!r.E(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.kV>0)H.iy("I: "+l)
continue}k=t.h(0,l)
switch($.$get$Q().h(0,l).a){case"vec2":b.ab(l,G.m6(H.dx(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.ab(l,G.k3(H.dx(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.ab(l,G.m7(H.dx(k,"$ish",o,"$ash"),null),4)
break
case"float":b.ab(l,new Float32Array(H.i6(H.dx(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.ab(l,G.m5(H.dx(k,"$ish",q,"$ash"),null),4)
break
default:if(H.ae(!1))H.al("unknown type for "+H.e(l)+" ["+J.lw(k[0]).k(0)+"] ["+new H.ak(H.ij(k),null).k(0)+"] "+H.e(k))}}},
ki:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.az(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.lj(b.a)
o=G.kC(b.a,35633,s)
J.jy(b.a,p,o)
n=G.kC(b.a,35632,r)
J.jy(b.a,p,n)
if(q.length>0)J.lL(b.a,p,q,35980)
J.lD(b.a,p)
if(!J.lC(b.a,p,35714))H.F(J.lB(b.a,p))
t=new G.ft(b,c,d,p,P.j3(c.c,null),P.T(),P.T(),t,null,a,!1,!0)
t.dg(a,b,c,d)
return t},
fB:function(a){return new G.fA(a,null,[],[],[],[],0,P.T())},
eZ:function eZ(){},
cH:function cH(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dG:function dG(){},
dI:function dI(a,b){this.a=a
this.b=b},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
em:function em(a,b,c,d){var _=this
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
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eW:function eW(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fi:function fi(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
dZ:function dZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
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
fD:function fD(){},
fW:function fW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
br:function br(){},
eA:function eA(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mx:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$kB().eI()-0.5)*c
s=G.kc(t,a.d,0,a.e.x)
s.bk(r)
return s},
ct:function ct(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
fH:function fH(){},
fI:function fI(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kU:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.M(c)
s=b.d
t.cd(0,s)
r=b.cx
H.e(b)
q=C.a.gaz(e)
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
p.ed(new T.aA(o))
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
a.d8(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.I)(s),++l)A.kU(a,s[l],t,d,e)},
cl:function cl(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bl:function bl(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fs:function fs(){},
dv:function(a){var t,s
t=C.Y.eu(a,0,new A.ik())
s=536870911&t+(C.b.cH(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ik:function ik(){}},T={aA:function aA(a){this.a=a},K:function K(a){this.a=a},U:function U(a){this.a=a},v:function v(a){this.a=a},ab:function ab(a){this.a=a}},Y={
nc:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t={}
s=document
r=new R.fI(0,0,null,null,null,null)
r.dj(C.r.cK(s,"stats"),"blue","gray")
q=C.r.eK(s,"#webgl-canvas")
p=new G.dI(null,q)
o=(q&&C.w).b5(q,"webgl2",P.ay(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!0,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.F(P.c2('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.lz(o))
if($.kV>0)P.a3("I: "+n)
J.lh(o,0,0,0,1)
J.dz(o,2929)
m=B.mh(25,10,0,q)
o=new T.K(new Float32Array(16))
o.S()
n=new T.K(new Float32Array(16))
n.S()
l=new G.fi(m,50,1,0.1,1000,o,n,new T.K(new Float32Array(16)),P.T(),"perspective",!1,!0)
l.bq()
o=H.A([],[A.bl])
k=new R.ct(q,l,null,p,o,17664,0,0,0,0,"main",!1,!0)
k.df("main",p,null)
k.cg(null)
W.a_(window,"resize",k.geO(),!1,W.f)
n=k.r|=256
k.r=n&4294950911
n=G.ki("blur",p,$.$get$kS(),$.$get$kT())
j=[]
H.b(!0)
C.a.l(o,new A.bl(n,[l],j,"blur",!1,!0))
i=G.kb("blur",$.$get$jM())
h=new Float32Array(4)
h[3]=0.04
h[2]=0
h[1]=0
h[0]=0
i.a_("uColorAlpha",new T.ab(h))
h=new T.v(new Float32Array(3))
h.T(-1,-1,0)
g=new T.v(new Float32Array(3))
g.T(1,-1,0)
f=new T.v(new Float32Array(3))
f.T(1,1,0)
e=new T.v(new Float32Array(3))
e.T(-1,1,0)
d=new T.U(new Float32Array(2))
d.ap(0,0)
c=new T.U(new Float32Array(2))
c.ap(1,0)
b=new T.U(new Float32Array(2))
b.ap(1,1)
a=new T.U(new Float32Array(2))
a.ap(0,1)
a0=new T.v(new Float32Array(3))
a0.T(0,0,1)
a1=[]
a2=new G.ev(!1,[],[],a1,P.T())
a2.bm("aTexUV")
a2.d5([h,g,f,e])
a2.d3("aTexUV",[d,c,b,a])
a2.bm("aNormal")
a2.d4("aNormal",[a0,a0,a0,a0])
a3=G.kc("quad",n.d,4,n.e.x)
a3.bk(G.k3(a1,null))
n=a2.d9()
h=a3.d
a3.y=J.iM(h.a)
H.b(a3.ch!=null)
g=a3.ch.length
if(g<768){a3.saN(new Uint8Array(H.i6(n)))
a3.Q=5121}else if(g<196608){a3.saN(new Uint16Array(H.i6(n)))
a3.Q=5123}else{a3.saN(new Uint32Array(H.i6(n)))
a3.Q=5125}J.dy(h.a,a3.e)
n=a3.y
g=a3.cx
f=J.t(g)
H.b(!!f.$iskx||!!f.$isky||!!f.$iskz)
J.iK(h.a,34963,n)
J.jz(h.a,34963,g,35048)
G.mF(a2,a3)
n=new Float32Array(9)
h=new T.K(new Float32Array(16))
h.S()
g=new T.K(new Float32Array(16))
g.S()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
H.b(!0)
C.a.l(j,new A.cl(i,a3,[],new T.aA(n),h,g,new T.v(f),new T.v(e),new T.v(d),new T.v(c),"",!1,!0))
c=G.ki("stars",p,$.$get$l3(),$.$get$l2())
d=[]
n=c.d
a4=G.kb("stars",$.$get$jL())
a5=s.createElement("canvas")
a5.width=64
a5.height=64
a6=C.w.cJ(a5,"2d")
a7=(a6&&C.p).bZ(a6,32,32,1,32,32,22);(a7&&C.m).aw(a7,0,"gray")
C.m.aw(a7,1,"black")
a6.fillStyle=a7
C.p.er(a6,0,0,64,64)
a7=C.p.bZ(a6,32,32,1,32,32,6);(a7&&C.m).aw(a7,0,"white")
C.m.aw(a7,1,"gray")
a6.globalAlpha=0.9
a6.fillStyle=a7
a6.arc(32,32,4,0,6.283185307179586,!1)
a6.fill("nonzero")
s=new G.fW(!1,!1,!1,!0,1,9729,9729)
j=J.lk(n.a)
h=new G.eA(a5,"Utils::Particles",j,3553,n,s)
J.bP(n.a,3553,j)
J.lF(n.a,37440,1)
h.di(a5)
s.da(n,3553)
H.b(J.lA(n.a)===0)
J.bP(n.a,3553,null)
a4.a_("uTexture",h)
a4.a_("uPointSize",1000)
a3=R.mx(c,2000,100)
s=new Float32Array(9)
n=new T.K(new Float32Array(16))
n.S()
j=new T.K(new Float32Array(16))
j.S()
h=new Float32Array(3)
g=new Float32Array(3)
f=new Float32Array(3)
e=new Float32Array(3)
H.b(!0)
C.a.l(d,new A.cl(a4,a3,[],new T.aA(s),n,j,new T.v(h),new T.v(g),new T.v(f),new T.v(e),a3.a,!1,!0))
H.b(!0)
C.a.l(o,new A.bl(c,[l],d,"stars",!1,!0))
t.a=0
new Y.iw(t,m,k,r).$1(0)},
iw:function iw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,T,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.iZ.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aB(a)},
k:function(a){return"Instance of '"+H.bk(a)+"'"},
gA:function(a){return new H.ak(H.ij(a),null)}}
J.eG.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.as},
$isaf:1}
J.eH.prototype={
v:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.am},
$isH:1}
J.bf.prototype={
gu:function(a){return 0},
gA:function(a){return C.al},
k:function(a){return String(a)},
$isk7:1}
J.fj.prototype={}
J.aF.prototype={}
J.aw.prototype={
k:function(a){var t=a[$.$get$jU()]
return t==null?this.d0(a):J.b9(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiX:1}
J.au.prototype={
l:function(a,b){if(!!a.fixed$length)H.F(P.r("add"))
a.push(b)},
J:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.F(P.r("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.I)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.F(P.ag(a)))
a.push(q)}},
cc:function(a,b){return new H.bg(a,b,[H.an(a,0),null])},
a6:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
ges:function(a){if(a.length>0)return a[0]
throw H.c(H.eF())},
gaz:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eF())},
bd:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.F(P.r("setRange"))
P.kh(b,c,a.length,null,null,null)
t=C.b.a2(c,b)
if(t===0)return
if(e<0)H.F(P.aC(e,0,null,"skipCount",null))
s=J.R(d)
if(C.b.R(e+t,s.gj(d)))throw H.c(H.mf())
if(C.b.Z(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bM:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.ag(a))}return!1},
cW:function(a,b){if(!!a.immutable$list)H.F(P.r("sort"))
H.mu(a,P.mZ())},
bf:function(a){return this.cW(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.B(a[t],b))return!0
return!1},
k:function(a){return P.eE(a,"[","]")},
gw:function(a){return new J.dD(a,a.length,0,null,[H.an(a,0)])},
gu:function(a){return H.aB(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.F(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iS(b,"newLength",null))
if(b<0)throw H.c(P.aC(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b3(a,b))
if(b>=a.length||b<0)throw H.c(H.b3(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.F(P.r("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b3(a,b))
if(b>=a.length||b<0)throw H.c(H.b3(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isk:1,
$ish:1}
J.iY.prototype={}
J.dD.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.I(t))
r=this.c
if(r>=s){this.sbr(null)
return!1}this.sbr(t[r]);++this.c
return!0},
sbr:function(a){this.d=a}}
J.aS.prototype={
O:function(a,b){var t
if(typeof b!=="number")throw H.c(H.N(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gax(b)
if(this.gax(a)===t)return 0
if(this.gax(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gax:function(a){return a===0?1/a<0:a<0},
e8:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.r(""+a+".ceil()"))},
a7:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.r(""+a+".round()"))},
e9:function(a,b,c){if(this.O(b,c)>0)throw H.c(H.N(b))
if(this.O(a,b)<0)return b
if(this.O(a,c)>0)return c
return a},
eW:function(a,b){var t
if(b>20)throw H.c(P.aC(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gax(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a0:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a+b},
a2:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a-b},
cI:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a*b},
aE:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bI(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bI(a,b)},
bI:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.r("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aT:function(a,b){var t
if(a>0)t=this.dW(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dW:function(a,b){return b>31?0:a>>>b},
cH:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return(a&b)>>>0},
d2:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return(a^b)>>>0},
Z:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a<b},
R:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a>b},
b4:function(a,b){if(typeof b!=="number")throw H.c(H.N(b))
return a>=b},
gA:function(a){return C.av},
$isD:1,
$asD:function(){return[P.a2]},
$isV:1,
$isa2:1}
J.ca.prototype={
gA:function(a){return C.au},
$isx:1}
J.c9.prototype={
gA:function(a){return C.at}}
J.av.prototype={
aH:function(a,b){if(b>=a.length)throw H.c(H.b3(a,b))
return a.charCodeAt(b)},
a0:function(a,b){if(typeof b!=="string")throw H.c(P.iS(b,null,null))
return a+b},
cX:function(a,b,c){var t
if(c>a.length)throw H.c(P.aC(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bg:function(a,b){return this.cX(a,b,0)},
bi:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fo(b,null,null))
if(b>c)throw H.c(P.fo(b,null,null))
if(c>a.length)throw H.c(P.fo(c,null,null))
return a.substring(b,c)},
cY:function(a,b){return this.bi(a,b,null)},
eV:function(a){return a.toLowerCase()},
eb:function(a,b,c){if(c>a.length)throw H.c(P.aC(c,0,a.length,null,null))
return H.nk(a,b,c)},
O:function(a,b){var t
if(typeof b!=="string")throw H.c(H.N(b))
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
gA:function(a){return C.an},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b3(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isD:1,
$asD:function(){return[P.n]},
$isn:1}
H.k.prototype={}
H.aT.prototype={
gw:function(a){return new H.cc(this,this.gj(this),0,null,[H.a1(this,"aT",0)])},
aB:function(a,b){return this.d_(0,b)},
eU:function(a,b){var t,s
t=H.A([],[H.a1(this,"aT",0)])
C.a.sj(t,this.gj(this))
for(s=0;C.b.Z(s,this.gj(this));++s)t[s]=this.t(0,s)
return t},
eT:function(a){return this.eU(a,!0)}}
H.cc.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.R(t)
r=s.gj(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.ag(t))
if(C.b.b4(this.c,r)){this.sad(null)
return!1}this.sad(s.t(t,this.c));++this.c
return!0},
sad:function(a){this.d=a}}
H.ce.prototype={
gw:function(a){return new H.eS(null,J.aK(this.a),this.b,this.$ti)},
gj:function(a){return J.b8(this.a)},
$asO:function(a,b){return[b]}}
H.e1.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.eS.prototype={
p:function(){var t=this.b
if(t.p()){this.sad(this.c.$1(t.gq(t)))
return!0}this.sad(null)
return!1},
gq:function(a){return this.a},
sad:function(a){this.a=a},
$asc8:function(a,b){return[b]}}
H.bg.prototype={
gj:function(a){return J.b8(this.a)},
t:function(a,b){return this.b.$1(J.lr(this.a,b))},
$ask:function(a,b){return[b]},
$asaT:function(a,b){return[b]},
$asO:function(a,b){return[b]}}
H.cI.prototype={
gw:function(a){return new H.he(J.aK(this.a),this.b,this.$ti)}}
H.he.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aR.prototype={}
H.iF.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iG.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hP.prototype={
seD:function(a){this.z=a},
seG:function(a){this.ch=a}}
H.aZ.prototype={
dt:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dA(s,t)},
bL:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aW()},
eN:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.am(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bC();++r.d}this.y=!1}this.aW()},
e_:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eM:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.F(P.r("removeRange"))
P.kh(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cT:function(a,b){if(!this.r.v(0,a))return
this.db=b},
ex:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j4(null,null)
this.cx=t}t.U(0,new H.hI(a,c))},
ew:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ay()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j4(null,null)
this.cx=t}t.U(0,this.geE())},
ey:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a3(a)
if(b!=null)P.a3(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b9(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bv(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.G(0,s)},
ah:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.J(o)
p=H.am(o)
this.ey(q,p)
if(this.db){this.ay()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mV(r)
u.globalState.d=H.jr(t,"$isaZ")
if(t!=null)$=t.geC()
if(this.cx!=null)for(;n=this.cx,!n.gal(n);)this.cx.cf().$0()}return s},
cb:function(a){return this.b.h(0,a)},
dA:function(a,b){var t=this.b
if(t.E(0,a))throw H.c(P.c2("Registry: ports must be registered only once."))
t.i(0,a,b)},
aW:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ay()},
ay:function(){var t,s,r
t=this.cx
if(t!=null)t.W(0)
for(t=this.b,s=t.gcD(t),s=s.gw(s);s.p();)s.gq(s).dB()
t.W(0)
this.c.W(0)
u.globalState.z.am(0,this.a)
this.dx.W(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
geC:function(){return this.d},
gec:function(){return this.e}}
H.hI.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hr.prototype={
ej:function(){var t=this.a
if(t.b===t.c)return
return t.cf()},
cj:function(){var t,s,r
t=this.ej()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gal(s)}else s=!1
else s=!1
else s=!1
if(s)H.F(P.c2("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gal(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.ay(["command","close"])
r=new H.a0(!0,P.b_(null,P.x)).I(r)
s.toString
self.postMessage(r)}return!1}t.eJ()
return!0},
bG:function(){if(self.window!=null)new H.hs(this).$0()
else for(;this.cj(););},
an:function(){var t,s,r,q,p
if(!u.globalState.x)this.bG()
else try{this.bG()}catch(r){t=H.J(r)
s=H.am(r)
q=u.globalState.Q
p=P.ay(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a0(!0,P.b_(null,P.x)).I(p)
q.toString
self.postMessage(p)}}}
H.hs.prototype={
$0:function(){if(!this.a.cj())return
P.mw(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.aI.prototype={
eJ:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ah(this.b)}}
H.hO.prototype={}
H.eC.prototype={
$0:function(){H.mb(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eD.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b4(s,{func:1,args:[P.H,P.H]}))s.$2(this.e,this.d)
else if(H.b4(s,{func:1,args:[P.H]}))s.$1(this.e)
else s.$0()}t.aW()},
$S:function(){return{func:1,v:true}}}
H.hm.prototype={}
H.b0.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mJ(b)
if(t.gec()===s){s=J.R(r)
switch(s.h(r,0)){case"pause":t.bL(s.h(r,1),s.h(r,2))
break
case"resume":t.eN(s.h(r,1))
break
case"add-ondone":t.e_(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eM(s.h(r,1))
break
case"set-errors-fatal":t.cT(s.h(r,1),s.h(r,2))
break
case"ping":t.ex(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ew(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.U(0,new H.aI(t,new H.hQ(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b0){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hQ.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dw(0,this.b)},
$S:function(){return{func:1}}}
H.bG.prototype={
G:function(a,b){var t,s,r
t=P.ay(["command","message","port",this,"msg",b])
s=new H.a0(!0,P.b_(null,P.x)).I(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bG){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.d2((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cs.prototype={
dB:function(){this.c=!0
this.b=null},
dw:function(a,b){if(this.c)return
this.b.$1(b)},
$ismp:1}
H.fY.prototype={
dk:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.U(0,new H.aI(s,new H.fZ(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.ig()
this.c=self.setTimeout(H.bK(new H.h_(this,b),0),a)}else{H.b(a>0)
throw H.c(P.r("Timer greater than 0."))}}}
H.fZ.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h_.prototype={
$0:function(){var t=this.a
t.c=null
H.iv()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aq.prototype={
gu:function(a){var t=this.a
t=C.b.aT(t,0)^C.b.H(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aq){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a0.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.t(a)
if(!!t.$isbi)return["buffer",a]
if(!!t.$isaW)return["typed",a]
if(!!t.$iso)return this.cP(a)
if(!!t.$ism8){r=this.gcM()
q=t.gC(a)
q=H.j5(q,r,H.a1(q,"O",0),null)
q=P.k9(q,!0,H.a1(q,"O",0))
t=t.gcD(a)
t=H.j5(t,r,H.a1(t,"O",0),null)
return["map",q,P.k9(t,!0,H.a1(t,"O",0))]}if(!!t.$isk7)return this.cQ(a)
if(!!t.$isa)this.cB(a)
if(!!t.$ismp)this.ao(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb0)return this.cR(a)
if(!!t.$isbG)return this.cS(a)
if(!!t.$isas){p=a.$static_name
if(p==null)this.ao(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaq)return["capability",a.a]
if(!(a instanceof P.C))this.cB(a)
return["dart",u.classIdExtractor(a),this.cO(u.classFieldsExtractor(a))]},
ao:function(a,b){throw H.c(P.r((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cB:function(a){return this.ao(a,null)},
cP:function(a){var t
H.b(typeof a!=="string")
t=this.cN(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ao(a,"Can't serialize indexable: ")},
cN:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cO:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
cQ:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ao(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
cS:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cR:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aH.prototype={
X:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.jK("Bad serialized message: "+H.e(a)))
switch(C.a.ges(a)){case"ref":H.b(J.B(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.B(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.b(J.B(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.b(J.B(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
return J.ai(H.A(this.ag(t),[null]))
case"extendable":H.b(J.B(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.A(this.ag(t),[null])
case"mutable":H.b(J.B(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ag(t)
case"const":H.b(J.B(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.ai(H.A(this.ag(t),[null]))
case"map":return this.em(a)
case"sendport":return this.en(a)
case"raw sendport":H.b(J.B(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.el(a)
case"function":H.b(J.B(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.b(J.B(a[0],"capability"))
return new H.aq(a[1])
case"dart":H.b(J.B(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.l(this.b,q)
this.ag(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ag:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.X(a[t]))
return a},
em:function(a){var t,s,r,q,p
H.b(J.B(a[0],"map"))
t=a[1]
s=a[2]
r=P.T()
C.a.l(this.b,r)
t=J.lE(t,this.gek()).eT(0)
for(q=J.R(s),p=0;p<t.length;++p)r.i(0,t[p],this.X(q.h(s,p)))
return r},
en:function(a){var t,s,r,q,p,o,n
H.b(J.B(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cb(r)
if(o==null)return
n=new H.b0(o,s)}else n=new H.bG(t,r,s)
C.a.l(this.b,n)
return n},
el:function(a){var t,s,r,q,p,o
H.b(J.B(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.R(t),p=J.R(s),o=0;C.b.Z(o,q.gj(t));++o)r[q.h(t,o)]=this.X(p.h(s,o))
return r}}
H.fr.prototype={}
H.h3.prototype={
L:function(a){var t,s,r
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
H.f9.prototype={
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
H.h7.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iH.prototype={
$1:function(a){if(!!J.t(a).$isaQ)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.d8.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaX:1}
H.iq.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.ir.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.is.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.it.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iu.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.as.prototype={
k:function(a){return"Closure '"+H.bk(this).trim()+"'"},
$isiX:1,
geZ:function(){return this},
$D:null}
H.fT.prototype={}
H.fG.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.ba.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.ba))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aB(this.a)
else s=typeof t!=="object"?J.b7(t):H.aB(t)
return(s^H.aB(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bk(t)+"'")}}
H.h5.prototype={
k:function(a){return this.a}}
H.dH.prototype={
k:function(a){return this.a}}
H.fw.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hg.prototype={
k:function(a){return C.i.a0("Assertion failed: ",P.c1(this.a))}}
H.ak.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.b7(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ak){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a6.prototype={
gj:function(a){return this.a},
gal:function(a){return this.a===0},
gC:function(a){return new H.eM(this,[H.an(this,0)])},
gcD:function(a){return H.j5(this.gC(this),new H.eI(this),H.an(this,0),H.an(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bz(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bz(s,b)}else return this.ez(b)},
ez:function(a){var t=this.d
if(t==null)return!1
return this.ak(this.au(t,this.aj(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ae(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ae(r,b)
return s==null?null:s.b}else return this.eA(b)},
eA:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.au(t,this.aj(a))
r=this.ak(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aP()
this.b=t}this.bt(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aP()
this.c=s}this.bt(s,b,c)}else{r=this.d
if(r==null){r=this.aP()
this.d=r}q=this.aj(b)
p=this.au(r,q)
if(p==null)this.aS(r,q,[this.aQ(b,c)])
else{o=this.ak(p,b)
if(o>=0)p[o].b=c
else p.push(this.aQ(b,c))}}},
am:function(a,b){if(typeof b==="string")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.eB(b)},
eB:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.au(t,this.aj(a))
r=this.ak(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bJ(q)
return q.b},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aO()}},
ai:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.ag(this))
t=t.c}},
bt:function(a,b,c){var t=this.ae(a,b)
if(t==null)this.aS(a,b,this.aQ(b,c))
else t.b=c},
bF:function(a,b){var t
if(a==null)return
t=this.ae(a,b)
if(t==null)return
this.bJ(t)
this.bA(a,b)
return t.b},
aO:function(){this.r=this.r+1&67108863},
aQ:function(a,b){var t,s
t=new H.eL(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aO()
return t},
bJ:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aO()},
aj:function(a){return J.b7(a)&0x3ffffff},
ak:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1},
k:function(a){return P.ka(this)},
ae:function(a,b){return a[b]},
au:function(a,b){return a[b]},
aS:function(a,b,c){H.b(c!=null)
a[b]=c},
bA:function(a,b){delete a[b]},
bz:function(a,b){return this.ae(a,b)!=null},
aP:function(){var t=Object.create(null)
this.aS(t,"<non-identifier-key>",t)
this.bA(t,"<non-identifier-key>")
return t},
$ism8:1}
H.eI.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eL.prototype={}
H.eM.prototype={
gj:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eN(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eN.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ag(t))
else{t=this.c
if(t==null){this.sbs(null)
return!1}else{this.sbs(t.a)
this.c=this.c.c
return!0}}},
sbs:function(a){this.d=a}}
H.il.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.im.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.io.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.bi.prototype={
gA:function(a){return C.ae},
$isbi:1}
H.aW.prototype={$isaW:1}
H.f_.prototype={
gA:function(a){return C.af}}
H.ch.prototype={
gj:function(a){return a.length},
$iso:1,
$aso:function(){},
$isq:1,
$asq:function(){}}
H.ci.prototype={
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.V]},
$asaR:function(){return[P.V]},
$asl:function(){return[P.V]},
$ish:1,
$ash:function(){return[P.V]}}
H.cj.prototype={
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
$isk:1,
$ask:function(){return[P.x]},
$asaR:function(){return[P.x]},
$asl:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]}}
H.cg.prototype={
gA:function(a){return C.ag},
$iseq:1}
H.f0.prototype={
gA:function(a){return C.ah}}
H.f1.prototype={
gA:function(a){return C.ai},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f2.prototype={
gA:function(a){return C.aj},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isk4:1}
H.f3.prototype={
gA:function(a){return C.ak},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f4.prototype={
gA:function(a){return C.ao},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskx:1}
H.f5.prototype={
gA:function(a){return C.ap},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isky:1}
H.ck.prototype={
gA:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f6.prototype={
gA:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskz:1}
H.bx.prototype={}
H.by.prototype={}
H.bz.prototype={}
H.bA.prototype={}
P.hi.prototype={
$1:function(a){var t,s
H.iv()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hh.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.ig()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hj.prototype={
$0:function(){H.iv()
this.a.$0()},
$S:function(){return{func:1}}}
P.hk.prototype={
$0:function(){H.iv()
this.a.$0()},
$S:function(){return{func:1}}}
P.iU.prototype={}
P.hn.prototype={}
P.i1.prototype={
ea:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.j8("Future already completed"))
t.aK(b)}}
P.cR.prototype={
eH:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b2(this.d,a.a)},
ev:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b4(s,{func:1,args:[P.C,P.aX]}))return t.eP(s,a.a,a.b)
else return t.b2(s,a.a)}}
P.ac.prototype={
co:function(a,b){var t,s,r
t=$.z
if(t!==C.f){t.toString
if(b!=null)b=P.mN(b,t)}s=new P.ac(0,t,null,[null])
r=b==null?1:3
this.bu(new P.cR(null,s,r,a,b,[H.an(this,0),null]))
return s},
cn:function(a){return this.co(a,null)},
aG:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bu:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jr(this.c,"$iscR")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bu(a)
return}this.aG(t)}H.b(this.a>=4)
t=this.b
t.toString
P.i9(null,null,t,new P.hx(this,a))}},
bE:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bE(a)
return}this.aG(s)}H.b(this.a>=4)
t.a=this.av(a)
s=this.b
s.toString
P.i9(null,null,s,new P.hB(t,this))}},
aR:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.av(t)},
av:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aK:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.ia(a,"$iseu",t,"$aseu")
if(s){t=H.ia(a,"$isac",t,null)
if(t)P.kD(a,this)
else P.mE(a,this)}else{r=this.aR()
H.b(this.a<4)
this.a=4
this.c=a
P.bt(this,r)}},
ar:function(a,b){var t
H.b(this.a<4)
t=this.aR()
H.b(this.a<4)
this.a=8
this.c=new P.aL(a,b)
P.bt(this,t)},
dD:function(a){return this.ar(a,null)},
$iseu:1,
gaU:function(){return this.a},
gdT:function(){return this.c}}
P.hx.prototype={
$0:function(){P.bt(this.a,this.b)},
$S:function(){return{func:1}}}
P.hB.prototype={
$0:function(){P.bt(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hy.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aK(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hz.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.ar(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hA.prototype={
$0:function(){this.a.ar(this.b,this.c)},
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
t=q.b.b.ci(q.d)}catch(n){s=H.J(n)
r=H.am(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aL(s,r)
p.a=!0
return}if(!!J.t(t).$iseu){if(t instanceof P.ac&&t.gaU()>=4){if(t.gaU()===8){q=t
H.b(q.gaU()===8)
p=this.b
p.b=q.gdT()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cn(new P.hF(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hF.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hD.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b2(r.d,this.c)}catch(q){t=H.J(q)
s=H.am(q)
r=this.a
r.b=new P.aL(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hC.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eH(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ev(t)
p.a=!1}}catch(o){s=H.J(o)
r=H.am(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aL(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cJ.prototype={}
P.fL.prototype={
gj:function(a){var t,s
t={}
s=new P.ac(0,$.z,null,[P.x])
t.a=0
this.eF(new P.fN(t),!0,new P.fO(t,s),s.gdC())
return s}}
P.fN.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fO.prototype={
$0:function(){this.b.aK(this.a.a)},
$S:function(){return{func:1}}}
P.fM.prototype={}
P.j9.prototype={}
P.aL.prototype={
k:function(a){return H.e(this.a)},
$isaQ:1}
P.i5.prototype={}
P.i8.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cp()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hS.prototype={
eQ:function(a){var t,s,r
try{if(C.f===$.z){a.$0()
return}P.kJ(null,null,this,a)}catch(r){t=H.J(r)
s=H.am(r)
P.i7(null,null,this,t,s)}},
eR:function(a,b){var t,s,r
try{if(C.f===$.z){a.$1(b)
return}P.kK(null,null,this,a,b)}catch(r){t=H.J(r)
s=H.am(r)
P.i7(null,null,this,t,s)}},
e5:function(a){return new P.hU(this,a)},
aX:function(a){return new P.hT(this,a)},
e6:function(a){return new P.hV(this,a)},
h:function(a,b){return},
ci:function(a){if($.z===C.f)return a.$0()
return P.kJ(null,null,this,a)},
b2:function(a,b){if($.z===C.f)return a.$1(b)
return P.kK(null,null,this,a,b)},
eP:function(a,b,c){if($.z===C.f)return a.$2(b,c)
return P.mO(null,null,this,a,b,c)}}
P.hU.prototype={
$0:function(){return this.a.ci(this.b)},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){return this.a.eQ(this.b)},
$S:function(){return{func:1}}}
P.hV.prototype={
$1:function(a){return this.a.eR(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hM.prototype={
aj:function(a){return H.ne(a)&0x3ffffff},
ak:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hK.prototype={
gw:function(a){var t=new P.bv(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dE(b)},
dE:function(a){var t=this.d
if(t==null)return!1
return this.at(t[this.as(a)],a)>=0},
cb:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dN(a)},
dN:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.as(a)]
r=this.at(s,a)
if(r<0)return
return J.b6(s,r).gdG()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jj()
this.b=t}return this.bw(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jj()
this.c=s}return this.bw(s,b)}else return this.U(0,b)},
U:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jj()
this.d=t}s=this.as(b)
r=t[s]
if(r==null){q=[this.aJ(b)]
H.b(q!=null)
t[s]=q}else{if(this.at(r,b)>=0)return!1
r.push(this.aJ(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bx(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bx(this.c,b)
else return this.dO(0,b)},
dO:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.as(b)]
r=this.at(s,b)
if(r<0)return!1
this.by(s.splice(r,1)[0])
return!0},
W:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aI()}},
bw:function(a,b){var t
if(a[b]!=null)return!1
t=this.aJ(b)
H.b(!0)
a[b]=t
return!0},
bx:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.by(t)
delete a[b]
return!0},
aI:function(){this.r=this.r+1&67108863},
aJ:function(a){var t,s
t=new P.hL(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aI()
return t},
by:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aI()},
as:function(a){return J.b7(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1}}
P.hL.prototype={
gdG:function(){return this.a}}
P.bv.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.ag(t))
else{t=this.c
if(t==null){this.sac(null)
return!1}else{this.sac(t.a)
this.c=this.c.b
return!0}}},
sac:function(a){this.d=a}}
P.hH.prototype={}
P.j2.prototype={$isk:1}
P.cb.prototype={$isk:1,$ish:1}
P.l.prototype={
gw:function(a){return new H.cc(a,this.gj(a),0,null,[H.a1(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
cc:function(a,b){return new H.bg(a,b,[H.a1(a,"l",0),null])},
eu:function(a,b,c){var t,s,r,q
t=this.gj(a)
for(s=b,r=0;C.b.Z(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gj(a)
if(t==null?q!=null:t!==q)throw H.c(P.ag(a))}return s},
k:function(a){return P.eE(a,"[","]")}}
P.cd.prototype={}
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
P.aV.prototype={
ai:function(a,b){var t,s
for(t=J.aK(this.gC(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.b8(this.gC(a))},
k:function(a){return P.ka(a)}}
P.eO.prototype={
dc:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbH(H.A(t,[b]))},
gw:function(a){return new P.hN(this,this.c,this.d,this.b,null,this.$ti)},
gal:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=this.gj(this)
if(C.b.R(0,b)||b>=t)H.F(P.y(b,this,"index",null,t))
return this.a[(C.b.a0(this.b,b)&this.a.length-1)>>>0]},
W:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eE(this,"{","}")},
cf:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eF());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
U:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bC();++this.d},
bC:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.A(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bd(s,0,q,t,r)
C.a.bd(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbH(s)},
sbH:function(a){this.a=a}}
P.hN.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.F(P.ag(t))
s=this.d
if(s===this.b){this.sac(null)
return!1}this.sac(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sac:function(a){this.e=a}}
P.fz.prototype={
J:function(a,b){var t
for(t=J.aK(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eE(this,"{","}")},
$isk:1}
P.fy.prototype={}
P.bw.prototype={}
P.af.prototype={}
P.D.prototype={}
P.aP.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a&&this.b===b.b},
O:function(a,b){return C.b.O(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aT(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m_(H.mo(this))
s=P.bW(H.mm(this))
r=P.bW(H.mi(this))
q=P.bW(H.mj(this))
p=P.bW(H.ml(this))
o=P.bW(H.mn(this))
n=P.m0(H.mk(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isD:1,
$asD:function(){return[P.aP]}}
P.V.prototype={}
P.at.prototype={
Z:function(a,b){return C.b.Z(this.a,b.gdF())},
R:function(a,b){return C.b.R(this.a,b.gdF())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.at))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
O:function(a,b){return C.b.O(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.e0()
s=this.a
if(s<0)return"-"+new P.at(0-s).k(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.e_().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isD:1,
$asD:function(){return[P.at]}}
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
P.aQ.prototype={}
P.bR.prototype={
k:function(a){return"Assertion failed"}}
P.cp.prototype={
k:function(a){return"Throw of null."}}
P.W.prototype={
gaM:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaL:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaM()+s+r
if(!this.a)return q
p=this.gaL()
o=P.c1(this.b)
return q+p+": "+H.e(o)}}
P.cr.prototype={
gaM:function(){return"RangeError"},
gaL:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eB.prototype={
gaM:function(){return"RangeError"},
gaL:function(){H.b(this.a)
if(J.l9(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.h8.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.h6.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aY.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dJ.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.c1(t))+"."}}
P.cy.prototype={
k:function(a){return"Stack Overflow"},
$isaQ:1}
P.dS.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iW.prototype={}
P.hw.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.e3.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.F(P.iS(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ke(b,"expando$values")
return s==null?null:H.ke(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.O.prototype={
aB:function(a,b){return new H.cI(this,b,[H.a1(this,"O",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga1:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.c(H.eF())
s=t.gq(t)
if(t.p())throw H.c(H.mg())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.lT("index"))
if(b<0)H.F(P.aC(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.y(b,this,"index",null,s))},
k:function(a){return P.me(this,"(",")")}}
P.c8.prototype={}
P.h.prototype={$isk:1}
P.aU.prototype={}
P.H.prototype={
gu:function(a){return P.C.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.a2.prototype={$isD:1,
$asD:function(){return[P.a2]}}
P.C.prototype={constructor:P.C,$isC:1,
v:function(a,b){return this===b},
gu:function(a){return H.aB(this)},
k:function(a){return"Instance of '"+H.bk(this)+"'"},
gA:function(a){return new H.ak(H.ij(this),null)},
toString:function(){return this.k(this)}}
P.aX.prototype={}
P.n.prototype={$isD:1,
$asD:function(){return[P.n]}}
P.bn.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga3:function(){return this.a}}
P.jc.prototype={}
W.j.prototype={}
W.bQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dA.prototype={
gj:function(a){return a.length}}
W.dB.prototype={
k:function(a){return String(a)}}
W.dC.prototype={
k:function(a){return String(a)}}
W.ap.prototype={$isap:1}
W.bS.prototype={
b5:function(a,b,c){if(c!=null)return this.dI(a,b,P.mY(c,null))
return this.dJ(a,b)},
cJ:function(a,b){return this.b5(a,b,null)},
dI:function(a,b,c){return a.getContext(b,c)},
dJ:function(a,b){return a.getContext(b)}}
W.bT.prototype={
aw:function(a,b,c){return a.addColorStop(b,c)}}
W.bU.prototype={
bZ:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
er:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aC:function(a){return P.ic(a.getContextAttributes())}}
W.ar.prototype={
gj:function(a){return a.length}}
W.dK.prototype={
gj:function(a){return a.length}}
W.dL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dN.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.aN.prototype={
bv:function(a,b){var t,s
t=$.$get$jT()
s=t[b]
if(typeof s==="string")return s
s=this.dX(a,b)
t[b]=s
return s},
dX:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m1()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dO.prototype={}
W.X.prototype={}
W.aO.prototype={}
W.dP.prototype={
gj:function(a){return a.length}}
W.dQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.dR.prototype={
gj:function(a){return a.length}}
W.dT.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bX.prototype={}
W.bb.prototype={
e0:function(a,b){return a.adoptNode(b)},
cK:function(a,b){return a.getElementById(b)},
eK:function(a,b){return a.querySelector(b)}}
W.dV.prototype={
k:function(a){return String(a)}}
W.bY.prototype={
eg:function(a,b){return a.createHTMLDocument(b)}}
W.dW.prototype={
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.bZ.prototype={
gaA:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.c_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.P]},
$isk:1,
$ask:function(){return[P.P]},
$isq:1,
$asq:function(){return[P.P]},
$asl:function(){return[P.P]},
$ish:1,
$ash:function(){return[P.P]},
$asm:function(){return[P.P]}}
W.c0.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga8(a))+" x "+H.e(this.ga5(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isP)return!1
return a.left===t.gc9(b)&&a.top===t.gcp(b)&&this.ga8(a)===t.ga8(b)&&this.ga5(a)===t.ga5(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga8(a)
q=this.ga5(a)
return W.kH(W.aJ(W.aJ(W.aJ(W.aJ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga5:function(a){return a.height},
gc9:function(a){return a.left},
gcp:function(a){return a.top},
ga8:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isP:1,
$asP:function(){}}
W.dX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.n]},
$isk:1,
$ask:function(){return[P.n]},
$isq:1,
$asq:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
W.dY.prototype={
gj:function(a){return a.length}}
W.Y.prototype={
ge3:function(a){return new W.hq(a)},
k:function(a){return a.localName},
K:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k1
if(t==null){t=H.A([],[W.cn])
s=new W.co(t)
C.a.l(t,W.kE(null))
C.a.l(t,W.kI())
$.k1=s
d=s}else d=t
t=$.k0
if(t==null){t=new W.di(d)
$.k0=t
c=t}else{t.a=d
c=t}}if($.ah==null){t=document
s=t.implementation
s=(s&&C.L).eg(s,"")
$.ah=s
$.iV=s.createRange()
s=$.ah
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ah.head;(t&&C.M).N(t,r)}t=$.ah
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jr(s,"$isap")}t=$.ah
if(!!this.$isap)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ah.body;(t&&C.o).N(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.W,a.tagName)){t=$.iV;(t&&C.E).cL(t,q)
t=$.iV
p=(t&&C.E).ee(t,b)}else{q.innerHTML=b
p=$.ah.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.N(p,s)}t=$.ah.body
if(q==null?t!=null:q!==t)J.jD(q)
c.bc(p)
C.r.e0(document,p)
return p},
ef:function(a,b,c){return this.K(a,b,c,null)},
cV:function(a,b,c,d){a.textContent=null
this.N(a,this.K(a,b,c,d))},
cU:function(a,b){return this.cV(a,b,null,null)},
a9:function(a,b){return a.getAttribute(b)},
dP:function(a,b){return a.removeAttribute(b)},
$isY:1,
geS:function(a){return a.tagName}}
W.e2.prototype={
$1:function(a){return!!J.t(a).$isY},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dz:function(a,b,c,d){return a.addEventListener(b,H.bK(c,1),!1)}}
W.en.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.c3]},
$isk:1,
$ask:function(){return[W.c3]},
$isq:1,
$asq:function(){return[W.c3]},
$asl:function(){return[W.c3]},
$ish:1,
$ash:function(){return[W.c3]},
$asm:function(){return[W.c3]}}
W.eo.prototype={
gj:function(a){return a.length}}
W.es.prototype={
gj:function(a){return a.length}}
W.ew.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.c6.prototype={}
W.ex.prototype={
gj:function(a){return a.length}}
W.bd.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.p]},
$isk:1,
$ask:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.c7.prototype={}
W.ey.prototype={
G:function(a,b){return a.send(b)}}
W.be.prototype={}
W.ax.prototype={$isax:1}
W.eP.prototype={
k:function(a){return String(a)}}
W.eQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gD:function(a){return a.z}}
W.eV.prototype={
gj:function(a){return a.length}}
W.eX.prototype={
f_:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bh.prototype={}
W.eY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cf]},
$isk:1,
$ask:function(){return[W.cf]},
$isq:1,
$asq:function(){return[W.cf]},
$asl:function(){return[W.cf]},
$ish:1,
$ash:function(){return[W.cf]},
$asm:function(){return[W.cf]}}
W.G.prototype={$isG:1}
W.M.prototype={
ga1:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.j8("No elements"))
if(s>1)throw H.c(P.j8("More than one element"))
return t.firstChild},
J:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.N(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lb(t,c,C.C.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.c4(t,t.length,-1,null,[H.a1(t,"m",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.C.h(this.a.childNodes,b)},
$ask:function(){return[W.p]},
$ascb:function(){return[W.p]},
$asl:function(){return[W.p]},
$ash:function(){return[W.p]},
$asbw:function(){return[W.p]}}
W.p.prototype={
eL:function(a){var t=a.parentNode
if(t!=null)J.iI(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.cZ(a):t},
N:function(a,b){return a.appendChild(b)},
dQ:function(a,b){return a.removeChild(b)},
dR:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
gb0:function(a){return a.previousSibling}}
W.cm.prototype={
b1:function(a){return a.previousNode()}}
W.bj.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.p]},
$isk:1,
$ask:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.a7.prototype={
gj:function(a){return a.length}}
W.fk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a7]},
$isk:1,
$ask:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$asl:function(){return[W.a7]},
$ish:1,
$ash:function(){return[W.a7]},
$asm:function(){return[W.a7]}}
W.fn.prototype={
G:function(a,b){return a.send(b)}}
W.cq.prototype={
ee:function(a,b){return a.createContextualFragment(b)},
cL:function(a,b){return a.selectNodeContents(b)}}
W.cu.prototype={
G:function(a,b){return a.send(b)}}
W.fx.prototype={
gj:function(a){return a.length}}
W.aj.prototype={}
W.fC.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cw]},
$isk:1,
$ask:function(){return[W.cw]},
$isq:1,
$asq:function(){return[W.cw]},
$asl:function(){return[W.cw]},
$ish:1,
$ash:function(){return[W.cw]},
$asm:function(){return[W.cw]}}
W.fE.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cx]},
$isk:1,
$ask:function(){return[W.cx]},
$isq:1,
$asq:function(){return[W.cx]},
$asl:function(){return[W.cx]},
$ish:1,
$ash:function(){return[W.cx]},
$asm:function(){return[W.cx]}}
W.a8.prototype={
gj:function(a){return a.length}}
W.fJ.prototype={
h:function(a,b){return this.bB(a,b)},
ai:function(a,b){var t,s
for(t=0;!0;++t){s=this.dM(a,t)
if(s==null)return
b.$2(s,this.bB(a,s))}},
gC:function(a){var t=H.A([],[P.n])
this.ai(a,new W.fK(t))
return t},
gj:function(a){return a.length},
bB:function(a,b){return a.getItem(b)},
dM:function(a,b){return a.key(b)},
$asaV:function(){return[P.n,P.n]}}
W.fK.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cA.prototype={
K:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=W.m2("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.M(s).J(0,new W.M(t))
return s}}
W.fR.prototype={
K:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.K(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.ga1(t)
r.toString
t=new W.M(r)
q=t.ga1(t)
s.toString
q.toString
new W.M(s).J(0,new W.M(q))
return s}}
W.fS.prototype={
K:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.J.K(t.createElement("table"),b,c,d)
t.toString
t=new W.M(t)
r=t.ga1(t)
s.toString
r.toString
new W.M(s).J(0,new W.M(r))
return s}}
W.bo.prototype={$isbo:1}
W.fU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cC]},
$isk:1,
$ask:function(){return[W.cC]},
$isq:1,
$asq:function(){return[W.cC]},
$asl:function(){return[W.cC]},
$ish:1,
$ash:function(){return[W.cC]},
$asm:function(){return[W.cC]}}
W.fV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cB]},
$isk:1,
$ask:function(){return[W.cB]},
$isq:1,
$asq:function(){return[W.cB]},
$asl:function(){return[W.cB]},
$ish:1,
$ash:function(){return[W.cB]},
$asm:function(){return[W.cB]}}
W.fX.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$isaD:1}
W.h0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cF]},
$isk:1,
$ask:function(){return[W.cF]},
$isq:1,
$asq:function(){return[W.cF]},
$asl:function(){return[W.cF]},
$ish:1,
$ash:function(){return[W.cF]},
$asm:function(){return[W.cF]}}
W.h1.prototype={
gj:function(a){return a.length}}
W.cG.prototype={
b1:function(a){return a.previousNode()}}
W.aE.prototype={}
W.h9.prototype={
k:function(a){return String(a)}}
W.hb.prototype={
gm:function(a){return a.x},
gD:function(a){return a.z}}
W.hc.prototype={
gj:function(a){return a.length}}
W.hd.prototype={
G:function(a,b){return a.send(b)}}
W.aG.prototype={
gei:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
$isaG:1}
W.bs.prototype={
ge2:function(a){var t,s
t=P.a2
s=new P.ac(0,$.z,null,[t])
this.dH(a)
this.dS(a,W.kN(new W.hf(new P.i1(s,[t]))))
return s},
dS:function(a,b){return a.requestAnimationFrame(H.bK(b,1))},
dH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hf.prototype={
$1:function(a){this.a.ea(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.je.prototype={}
W.ho.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.bV]},
$isk:1,
$ask:function(){return[W.bV]},
$isq:1,
$asq:function(){return[W.bV]},
$asl:function(){return[W.bV]},
$ish:1,
$ash:function(){return[W.bV]},
$asm:function(){return[W.bV]}}
W.hp.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
v:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isP)return!1
return a.left===t.gc9(b)&&a.top===t.gcp(b)&&a.width===t.ga8(b)&&a.height===t.ga5(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kH(W.aJ(W.aJ(W.aJ(W.aJ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga5:function(a){return a.height},
ga8:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.c5]},
$isk:1,
$ask:function(){return[W.c5]},
$isq:1,
$asq:function(){return[W.c5]},
$asl:function(){return[W.c5]},
$ish:1,
$ash:function(){return[W.c5]},
$asm:function(){return[W.c5]}}
W.cY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.p]},
$isk:1,
$ask:function(){return[W.p]},
$isq:1,
$asq:function(){return[W.p]},
$asl:function(){return[W.p]},
$ish:1,
$ash:function(){return[W.p]},
$asm:function(){return[W.p]}}
W.hZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a8]},
$isk:1,
$ask:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$asl:function(){return[W.a8]},
$ish:1,
$ash:function(){return[W.a8]},
$asm:function(){return[W.a8]}}
W.i_.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.cz]},
$isk:1,
$ask:function(){return[W.cz]},
$isq:1,
$asq:function(){return[W.cz]},
$asl:function(){return[W.cz]},
$ish:1,
$ash:function(){return[W.cz]},
$asm:function(){return[W.cz]}}
W.hl.prototype={
ai:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.I)(t),++p){o=t[p]
b.$2(o,q.a9(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.A([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$ascd:function(){return[P.n,P.n]},
$asaV:function(){return[P.n,P.n]},
gdK:function(){return this.a}}
W.hq.prototype={
h:function(a,b){return J.iQ(this.a,b)},
gj:function(a){return this.gC(this).length}}
W.ht.prototype={
eF:function(a,b,c,d){return W.a_(this.a,this.b,a,!1,H.an(this,0))}}
W.jh.prototype={}
W.hu.prototype={
dr:function(a,b,c,d,e){this.dZ()},
dZ:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.la(r,this.c,t,!1)}}}
W.hv.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bu.prototype={
ds:function(a){var t,s
t=$.$get$ji()
if(t.gal(t)){for(s=0;s<262;++s)t.i(0,C.V[s],W.n3())
for(s=0;s<12;++s)t.i(0,C.u[s],W.n4())}},
a4:function(a){return $.$get$kF().B(0,W.bc(a))},
V:function(a,b,c){var t,s,r
t=W.bc(a)
s=$.$get$ji()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gw:function(a){return new W.c4(a,this.gj(a),-1,null,[H.a1(a,"m",0)])}}
W.co.prototype={
a4:function(a){return C.a.bM(this.a,new W.f8(a))},
V:function(a,b,c){return C.a.bM(this.a,new W.f7(a,b,c))}}
W.f8.prototype={
$1:function(a){return a.a4(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.f7.prototype={
$1:function(a){return a.V(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bB.prototype={
dv:function(a,b,c,d){var t,s,r
this.a.J(0,c)
t=b.aB(0,new W.hX())
s=b.aB(0,new W.hY())
this.b.J(0,t)
r=this.c
r.J(0,C.X)
r.J(0,s)},
a4:function(a){return this.a.B(0,W.bc(a))},
V:function(a,b,c){var t,s
t=W.bc(a)
s=this.c
if(s.B(0,H.e(t)+"::"+b))return this.d.e1(c)
else if(s.B(0,"*::"+b))return this.d.e1(c)
else{s=this.b
if(s.B(0,H.e(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.e(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1}}
W.hX.prototype={
$1:function(a){return!C.a.B(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hY.prototype={
$1:function(a){return C.a.B(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i2.prototype={
V:function(a,b,c){if(this.d1(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iQ(a,"template")==="")return this.e.B(0,b)
return!1}}
W.i3.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.i0.prototype={
a4:function(a){var t=J.t(a)
if(!!t.$isbm)return!1
t=!!t.$isu
if(t&&W.bc(a)==="foreignObject")return!1
if(t)return!0
return!1},
V:function(a,b,c){if(b==="is"||C.i.bg(b,"on"))return!1
return this.a4(a)}}
W.c4.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbD(J.b6(this.a,t))
this.c=t
return!0}this.sbD(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbD:function(a){this.d=a}}
W.cn.prototype={}
W.j6.prototype={}
W.jd.prototype={}
W.hW.prototype={}
W.di.prototype={
bc:function(a){new W.i4(this).$2(a,null)},
af:function(a,b){if(b==null)J.jD(a)
else J.iI(b,a)},
dV:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lu(a)
r=J.iQ(s.gdK(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.J(n)}p="element unprintable"
try{p=J.b9(a)}catch(n){H.J(n)}try{o=W.bc(a)
this.dU(a,b,t,p,o,s,r)}catch(n){if(H.J(n) instanceof P.W)throw n
else{this.af(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dU:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.af(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.a4(a)){this.af(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.V(a,"is",g)){this.af(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gC(f)
s=H.A(t.slice(0),[H.an(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.V(a,J.lK(p),q.a9(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a9(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a9(t,p)
q.dP(t,p)}}if(!!J.t(a).$isbo)this.bc(a.content)}}
W.i4.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dV(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.af(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lv(t)}catch(q){H.J(q)
r=t
J.iI(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.p,W.p]}}}
W.cK.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.bC.prototype={}
W.bD.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d9.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.bE.prototype={}
W.bF.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
P.ib.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hJ.prototype={
eI:function(){return Math.random()}}
P.hR.prototype={}
P.P.prototype={}
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
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.Z.prototype={}
P.a5.prototype={}
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j1]},
$asl:function(){return[P.j1]},
$ish:1,
$ash:function(){return[P.j1]},
$asm:function(){return[P.j1]}}
P.eT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fa.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j7]},
$asl:function(){return[P.j7]},
$ish:1,
$ash:function(){return[P.j7]},
$asm:function(){return[P.j7]}}
P.fh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fm.prototype={
gj:function(a){return a.length}}
P.fp.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bm.prototype={$isbm:1}
P.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
P.u.prototype={
K:function(a,b,c,d){var t,s,r,q,p,o
t=H.A([],[W.cn])
C.a.l(t,W.kE(null))
C.a.l(t,W.kI())
C.a.l(t,new W.i0())
c=new W.di(new W.co(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).ef(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.M(q)
o=t.ga1(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.N(p,r)
return p},
$isu:1}
P.fQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bp.prototype={}
P.bq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.Y(a,b)},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
Y:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.jb]},
$asl:function(){return[P.jb]},
$ish:1,
$ash:function(){return[P.jb]},
$asm:function(){return[P.jb]}}
P.ha.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cU.prototype={}
P.cV.prototype={}
P.d0.prototype={}
P.d1.prototype={}
P.da.prototype={}
P.db.prototype={}
P.dg.prototype={}
P.dh.prototype={}
P.dE.prototype={
gj:function(a){return a.length}}
P.dF.prototype={
gj:function(a){return a.length}}
P.aM.prototype={}
P.fb.prototype={
gj:function(a){return a.length}}
P.fu.prototype={
bK:function(a,b){return a.activeTexture(b)},
bN:function(a,b,c){return a.attachShader(b,c)},
bO:function(a,b,c){return a.bindBuffer(b,c)},
bP:function(a,b,c){return a.bindFramebuffer(b,c)},
bQ:function(a,b,c){return a.bindTexture(b,c)},
bR:function(a,b){return a.blendEquation(b)},
bS:function(a,b,c){return a.blendFunc(b,c)},
bT:function(a,b,c,d){return a.bufferData(b,c,d)},
bU:function(a,b){return a.clear(b)},
bV:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bW:function(a,b){return a.compileShader(b)},
bX:function(a){return a.createBuffer()},
bY:function(a){return a.createProgram()},
c_:function(a,b){return a.createShader(b)},
c0:function(a){return a.createTexture()},
c2:function(a,b){return a.depthMask(b)},
c3:function(a,b){return a.disable(b)},
c4:function(a,b,c,d){return a.drawArrays(b,c,d)},
c5:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c6:function(a,b){return a.enable(b)},
c7:function(a,b){return a.enableVertexAttribArray(b)},
aC:function(a){return P.ic(a.getContextAttributes())},
b6:function(a){return a.getError()},
b7:function(a,b){return a.getProgramInfoLog(b)},
b8:function(a,b,c){return a.getProgramParameter(b,c)},
b9:function(a,b){return a.getShaderInfoLog(b)},
ba:function(a,b,c){return a.getShaderParameter(b,c)},
bb:function(a,b,c){return a.getUniformLocation(b,c)},
ca:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
be:function(a,b,c){return a.shaderSource(b,c)},
bh:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b3:function(a,b,c,d,e,f,g,h,i,j){this.aV(a,b,c,d,e,f,g)
return},
ck:function(a,b,c,d,e,f,g){return this.b3(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cl:function(a,b,c,d){return a.texParameterf(b,c,d)},
cm:function(a,b,c,d){return a.texParameteri(b,c,d)},
cq:function(a,b,c){return a.uniform1f(b,c)},
cr:function(a,b,c){return a.uniform1fv(b,c)},
cs:function(a,b,c){return a.uniform1i(b,c)},
ct:function(a,b,c){return a.uniform1iv(b,c)},
cu:function(a,b,c){return a.uniform2fv(b,c)},
cv:function(a,b,c){return a.uniform3fv(b,c)},
cw:function(a,b,c){return a.uniform4fv(b,c)},
cz:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cC:function(a,b){return a.useProgram(b)},
cE:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cG:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fv.prototype={
e4:function(a,b){return a.beginTransformFeedback(b)},
e7:function(a,b){return a.bindVertexArray(b)},
eh:function(a){return a.createVertexArray()},
eo:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ep:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eq:function(a){return a.endTransformFeedback()},
eX:function(a,b,c,d){this.dY(a,b,c,d)
return},
dY:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eY:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bK:function(a,b){return a.activeTexture(b)},
bN:function(a,b,c){return a.attachShader(b,c)},
bO:function(a,b,c){return a.bindBuffer(b,c)},
bP:function(a,b,c){return a.bindFramebuffer(b,c)},
bQ:function(a,b,c){return a.bindTexture(b,c)},
bR:function(a,b){return a.blendEquation(b)},
bS:function(a,b,c){return a.blendFunc(b,c)},
bT:function(a,b,c,d){return a.bufferData(b,c,d)},
bU:function(a,b){return a.clear(b)},
bV:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bW:function(a,b){return a.compileShader(b)},
bX:function(a){return a.createBuffer()},
bY:function(a){return a.createProgram()},
c_:function(a,b){return a.createShader(b)},
c0:function(a){return a.createTexture()},
c2:function(a,b){return a.depthMask(b)},
c3:function(a,b){return a.disable(b)},
c4:function(a,b,c,d){return a.drawArrays(b,c,d)},
c5:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c6:function(a,b){return a.enable(b)},
c7:function(a,b){return a.enableVertexAttribArray(b)},
aC:function(a){return P.ic(a.getContextAttributes())},
b6:function(a){return a.getError()},
b7:function(a,b){return a.getProgramInfoLog(b)},
b8:function(a,b,c){return a.getProgramParameter(b,c)},
b9:function(a,b){return a.getShaderInfoLog(b)},
ba:function(a,b,c){return a.getShaderParameter(b,c)},
bb:function(a,b,c){return a.getUniformLocation(b,c)},
ca:function(a,b){return a.linkProgram(b)},
ce:function(a,b,c){return a.pixelStorei(b,c)},
be:function(a,b,c){return a.shaderSource(b,c)},
bh:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b3:function(a,b,c,d,e,f,g,h,i,j){this.aV(a,b,c,d,e,f,g)
return},
ck:function(a,b,c,d,e,f,g){return this.b3(a,b,c,d,e,f,g,null,null,null)},
aV:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cl:function(a,b,c,d){return a.texParameterf(b,c,d)},
cm:function(a,b,c,d){return a.texParameteri(b,c,d)},
cq:function(a,b,c){return a.uniform1f(b,c)},
cr:function(a,b,c){return a.uniform1fv(b,c)},
cs:function(a,b,c){return a.uniform1i(b,c)},
ct:function(a,b,c){return a.uniform1iv(b,c)},
cu:function(a,b,c){return a.uniform2fv(b,c)},
cv:function(a,b,c){return a.uniform3fv(b,c)},
cw:function(a,b,c){return a.uniform4fv(b,c)},
cz:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cA:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cC:function(a,b){return a.useProgram(b)},
cE:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cG:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.ic(this.dL(a,b))},
i:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dL:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.aU]},
$asl:function(){return[P.aU]},
$ish:1,
$ash:function(){return[P.aU]},
$asm:function(){return[P.aU]}}
P.d6.prototype={}
P.d7.prototype={}
B.iA.prototype={
$1:function(a){$.$get$id().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.ax]}}}
B.iB.prototype={
$1:function(a){$.$get$id().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.ax]}}}
B.iC.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mW=t
$.mX=C.b.a2(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.ju=s-C.b.H(window.innerWidth,2)
$.l0=-(t-C.b.H(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.G]}}}
B.iD.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bN=t-C.b.H(window.innerWidth,2)
$.bO=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$bL().i(0,"right",!0)
else $.$get$bL().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.G]}}}
B.iE.prototype={
$1:function(a){if(a.button===2)$.$get$bL().i(0,"right",null)
else $.$get$bL().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.G]}}}
B.fc.prototype={
de:function(a,b,c,d){var t
d.toString
W.a_(d,W.m3(d),new B.fd(this),!1,W.aG)
W.a_(d,"mousemove",new B.fe(this),!1,W.G)
t=W.aD
W.a_(d,"touchstart",new B.ff(),!1,t)
W.a_(d,"touchmove",new B.fg(this),!1,t)
B.ni(null)}}
B.fd.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.gei(a)*r.k3
if(C.c.a2(r.fy,t)>0)r.fy=C.c.a2(r.fy,t)}catch(q){s=H.J(q)
P.a3(s)}},
$S:function(a){return{func:1,args:[W.aG]}}}
B.fe.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a2($.ju,$.bN)*0.01
s=t.id
r=$.bO
q=$.l0
t.id=s+(r-q)*0.01
$.bN=$.ju
$.bO=q}},
$S:function(a){return{func:1,args:[W.G]}}}
B.ff.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a7(t.clientX)
C.c.a7(t.clientY)
$.bN=s
C.c.a7(t.clientX)
$.bO=C.c.a7(t.clientY)},
$S:function(a){return{func:1,args:[W.aD]}}}
B.fg.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a7(t.clientX)
t=C.c.a7(t.clientY)
r=this.a
r.go=r.go+C.b.a2(s,$.bN)*0.01
r.id=r.id+($.bO-t)*0.01
$.bN=s
$.bO=t},
$S:function(a){return{func:1,args:[W.aD]}}}
G.eZ.prototype={}
G.cH.prototype={
a_:function(a,b){var t=this.d
if(H.ae(!t.E(0,a)))H.al("uniform "+a+" already set")
t.i(0,a,b)},
bp:function(){return this.d},
k:function(a){var t,s,r,q
t=H.A(["{"+new H.ak(H.ij(this),null).k(0)+"}["+this.a+"]"],[P.n])
for(s=this.d,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.a6(t,"\n")}}
G.dG.prototype={}
G.dI.prototype={
c8:function(a,b,c){J.ls(this.a,b)
if(c>0)J.lQ(this.a,b,c)},
cF:function(a,b,c,d,e,f,g,h){J.iK(this.a,34962,b)
J.lR(this.a,c,d,e,!1,g,h)}}
G.et.prototype={}
G.em.prototype={}
G.ev.prototype={
bm:function(a){var t=this.e
H.b(!t.E(0,a))
H.b(C.i.bg(a,"a"))
switch($.$get$Q().h(0,a).a){case"vec2":t.i(0,a,H.A([],[T.U]))
break
case"vec3":t.i(0,a,H.A([],[T.v]))
break
case"vec4":t.i(0,a,H.A([],[T.ab]))
break
case"float":t.i(0,a,H.A([],[P.V]))
break
case"uvec4":t.i(0,a,H.A([],[[P.h,P.x]]))
break
default:if(H.ae(!1))H.al("unknown type for "+a)}},
d3:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.U(p))}},
d4:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<4;++r){q=b[r]
p=new T.v(new Float32Array(3))
p.M(q)
s.l(t,p)}},
d5:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.l(this.c,new G.em(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.v(new Float32Array(3))
p.M(q)
C.a.l(t,p)}},
d9:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.A(s,[P.x])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gf0(o)
r[q+1]=o.gf1(o)
r[q+2]=o.gf2(o)
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
for(s=this.e,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq(r)
p=$.$get$Q().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.a6(t," ")}}
G.cE.prototype={}
G.cD.prototype={}
G.eU.prototype={
dd:function(a,b){this.a_("cDepthTest",!0)
this.a_("cDepthWrite",!1)
this.a_("cBlendEquation",b)
this.a_("cStencilFunc",$.$get$kj())}}
G.eW.prototype={
bl:function(a,b,c){var t,s
if(C.i.aH(a,0)===105){if(H.ae(C.b.aE(b.length,c)===this.z))H.al("ChangeAttribute "+this.z)}else{t=C.b.aE(b.length,c)
if(H.ae(t===(this.ch.length/3|0)))H.al("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iK(t.a,34962,s)
J.jz(t.a,34962,b,35048)},
bn:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ab:function(a,b,c){var t,s,r,q,p,o
t=J.jw(a,0)===105
if(t&&this.z===0)this.z=C.b.aE(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iM(r.a))
this.bl(a,b,c)
q=$.$get$Q().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ae(p.E(0,a)))H.al("unexpected attribute "+a)
o=p.h(0,a)
J.dy(r.a,this.e)
r.c8(0,o,t?1:0)
r.cF(0,s.h(0,a),o,q.bo(),5126,!1,0,0)},
bk:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.iM(s.a))
this.ch=a
this.bl("aPosition",a,3)
r=$.$get$Q().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.E(0,"aPosition"))
p=q.h(0,"aPosition")
J.dy(s.a,this.e)
s.c8(0,p,0)
s.cF(0,t.h(0,"aPosition"),p,r.bo(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gC(t),r=r.gw(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.a6(s,"  ")},
saN:function(a){this.cx=a}}
G.fi.prototype={
d6:function(a,b){var t=C.b.cI(a,b)
if(this.z===t)return
this.z=t
this.bq()},
bq:function(){var t,s,r,q,p,o,n
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
bp:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.v(new Float32Array(3))
o.T(r,q,p)
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
s=J.t(n)
r=!!s.$isab
k=r?s.gaA(n):1
if(!!s.$isv){j=s.gm(n)
m=s.gn(n)
l=s.gD(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gD(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.F(t[0],n)
r=C.c.F(t[4],m)
q=C.c.F(t[8],l)
i=t[12]
h=C.c.F(t[1],n)
g=C.c.F(t[5],m)
f=C.c.F(t[9],l)
e=t[13]
d=C.c.F(t[2],n)
c=C.c.F(t[6],m)
b=C.c.F(t[10],l)
a=t[14]
a0=C.c.F(t[3],n)
a1=C.c.F(t[7],m)
a2=C.c.F(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.M(this.db)
a3.cd(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.dZ.prototype={
k:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.ft.prototype={
dg:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
r.i(0,n,J.jC(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
r.i(0,n,J.jC(q.a,p,n))}},
dl:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gw(s);s.p();){q=s.gq(s)
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bv(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dn:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gC(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.jw(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.iy("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$Q().h(0,n)
if(l==null)H.F("unknown "+n)
H.b(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iR(r.a,k,m)
else if(!!J.t(m).$isk4)J.lO(r.a,k,m)
break
case"float":if(l.c===0)J.lM(r.a,k,m)
else if(!!J.t(m).$iseq)J.lN(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ao(m,"$isK").a
J.jJ(r.a,k,!1,n)}else if(!!J.t(m).$iseq)J.jJ(r.a,k,!1,m)
else if(H.ae(!1))H.al("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.ao(m,"$isaA").a
J.jI(r.a,k,!1,n)}else if(!!J.t(m).$iseq)J.jI(r.a,k,!1,m)
else if(H.ae(!1))H.al("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jH(j,k,H.ao(m,"$isab").a)
else J.jH(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jG(j,k,H.ao(m,"$isv").a)
else J.jG(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jF(j,k,H.ao(m,"$isU").a)
else J.jF(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a0(33984,this.ch)
J.jx(r.a,n)
n=H.ao(m,"$isbr").b
J.bP(r.a,3553,n)
n=this.ch
J.iR(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a0(33984,this.ch)
J.jx(r.a,n)
n=H.ao(m,"$isbr").b
J.bP(r.a,34067,n)
n=this.ch
J.iR(r.a,k,n)
this.ch=this.ch+1
break
default:H.iy("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.B(m,!0)
j=r.a
if(n)J.dz(j,2929)
else J.iN(j,2929)
break
case"cStencilFunc":H.ao(m,"$iscE")
n=m.a
j=r.a
if(n===1281)J.iN(j,2960)
else{J.dz(j,2960)
j=m.b
i=m.c
J.lH(r.a,n,j,i)}break
case"cDepthWrite":J.lm(r.a,m)
break
case"cBlendEquation":H.ao(m,"$iscD")
n=m.a
j=r.a
if(n===1281)J.iN(j,3042)
else{J.dz(j,3042)
j=m.b
i=m.c
J.lf(r.a,j,i)
J.le(r.a,n)}break}++o
break}}h=P.k_(0,0,0,Date.now()-new P.aP(t,!1).a,0,0)
""+o
h.k(0)},
d8:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.lP(s.a,this.r)
this.ch=0
this.z.W(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.I)(b),++q){p=b[q]
this.dn(p.a,p.bp())}r=this.Q
r.W(0)
for(o=a.cy,o=o.gC(o),o=o.gw(o);o.p();)r.l(0,o.gq(o))
n=this.dl()
if(n.length!==0)P.a3("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(n)))
J.dy(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bn()
l=a.Q
k=a.z
if(m)J.lc(s.a,r)
if(l!==-1){j=s.a
if(k>1)J.lq(j,r,o,l,0,k)
else J.lp(j,r,o,l,0)}else{l=s.a
if(k>1)J.lo(l,r,0,o,k)
else J.ln(l,r,0,o)}if(m)J.lt(s.a)
C.a.l(c,new G.dZ(this.a,a.z,a.bn(),r,P.k_(0,0,0,Date.now()-new P.aP(t,!1).a,0,0)))}}
G.w.prototype={
bo:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fA.prototype={
bj:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$Q().E(0,q))
H.b(!C.a.B(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.bf(t)},
aF:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.I)(a),++r){q=a[r]
if(H.ae($.$get$Q().E(0,q)))H.al("missing uniform "+q)
H.b(!C.a.B(s,q))
C.a.l(s,q)}C.a.bf(s)},
dh:function(a,b){H.b(this.b==null)
this.b=this.dq(!0,a,b)},
aq:function(a){return this.dh(a,null)},
dq:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
m=$.$get$Q().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$Q().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){k=t[o]
m=$.$get$Q().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.J(q,b)
C.a.l(q,"}")
return C.a.a6(q,"\n")}}
G.fD.prototype={}
G.fW.prototype={
da:function(a,b){var t=this.e
if(t!==1)J.lJ(a.a,b,34046,t)
J.jE(a.a,b,10240,this.r)
J.jE(a.a,b,10241,this.f)}}
G.br.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eA.prototype={
di:function(a){var t,s
t=this.d
s=this.c
J.bP(t.a,s,this.b)
J.lI(t.a,s,0,6408,6408,5121,a)}}
R.ct.prototype={
cg:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a3("size change "+H.e(s)+" "+H.e(r))
this.dx.d6(s,r)
this.z=s
this.Q=r}}
R.fH.prototype={
dj:function(a,b,c){var t,s,r
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
J.iJ(this.a,s)
r=this.du(b,c,90,30)
this.d=r
J.iJ(this.a,r)
t=t.createElement("div")
this.c=t
J.iJ(this.a,t)},
du:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mD("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bv(r,"float")
r.setProperty(p,"left","")
p=C.x.bv(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.N(t,s)}return t}}
R.fI.prototype={
dm:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.eW(s,2)+" fps"
t=this.c;(t&&C.q).cU(t,b)
r=C.b.H(30*C.z.e8(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).N(t,q)}}
A.cl.prototype={
k:function(a){return"NODE["+this.a+"]"}}
A.bl.prototype={}
A.fs.prototype={
df:function(a,b,c){if(this.d==null)this.d=new G.et(this.e,null,null,null,null)},
d7:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.ld(p.a,36160,t)
H.b(r>0&&q>0)
J.lS(p.a,this.x,this.y,r,q)
if(s!==0)J.lg(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.I)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.cH(P.T(),"transforms",!1,!0))
l=new T.K(new Float32Array(16))
l.S()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.I)(r),++k)A.kU(p,r[k],l,a,m)
m.pop()}}}
A.ik.prototype={
$2:function(a,b){var t=536870911&a+J.b7(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.C]}}}
T.aA.prototype={
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
k:function(a){return"[0] "+this.P(0).k(0)+"\n[1] "+this.P(1).k(0)+"\n[2] "+this.P(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aA){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dv(this.a)},
P:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.v(t)},
ed:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
T.K.prototype={
aa:function(a,b,c){H.b(a<4)
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
k:function(a){return"[0] "+this.P(0).k(0)+"\n[1] "+this.P(1).k(0)+"\n[2] "+this.P(2).k(0)+"\n[3] "+this.P(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.K){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dv(this.a)},
P:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ab(t)},
S:function(){var t=this.a
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
cd:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.U.prototype={
ap:function(a,b){var t=this.a
t[0]=a
t[1]=b},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.U){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dv(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.v.prototype={
T:function(a,b,c){var t=this.a
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
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.v){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dv(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gaZ())},
gaZ:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
b_:function(a){var t,s,r
t=Math.sqrt(this.gaZ())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aY:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c1:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.v(new Float32Array(3))
t.T(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gD:function(a){return this.a[2]}}
T.ab.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ab){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dv(this.a)},
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
Y.iw.prototype={
$1:function(b9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
t=this.a
t.a=b9+0
s=this.b
s.go+=0.005
r=s.k4
if(r.h(0,37)!=null)s.go+=0.03
else if(r.h(0,39)!=null)s.go-=0.03
if(r.h(0,38)!=null)s.id+=0.03
else if(r.h(0,40)!=null)s.id-=0.03
if(r.h(0,33)!=null)s.fy*=0.99
else if(r.h(0,34)!=null)s.fy*=1.01
if(r.h(0,32)!=null){s.go=0
s.id=0}r=C.c.e9(s.id,-1.4707963267948965,1.4707963267948965)
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
i=new T.v(new Float32Array(3))
i.T(0,1,0)
r=s.e
q=r.a
q[0]=m[12]
q[1]=m[13]
q[2]=m[14]
q=new Float32Array(3)
h=new T.v(q)
h.M(r)
q[0]=q[0]-p[0]
q[1]=q[1]-p[1]
q[2]=q[2]-p[2]
h.b_(0)
g=i.c1(h)
g.b_(0)
f=h.c1(g)
f.b_(0)
p=g.aY(r)
n=f.aY(r)
r=h.aY(r)
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
a3=Math.sqrt(d.gaZ())
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
b6=[]
this.c.d7(b6)
b7=[]
for(s=b6.length,b8=0;b8<b6.length;b6.length===s||(0,H.I)(b6),++b8)C.a.l(b7,b6[b8].k(0))
C.ax.ge2(window).cn(this)
this.d.dm(t.a,C.a.a6(b7,"<br>"))},
$S:function(a){return{func:1,v:true,args:[P.a2]}}}
J.a.prototype.cZ=J.a.prototype.k
J.bf.prototype.d0=J.bf.prototype.k
P.O.prototype.d_=P.O.prototype.aB
W.Y.prototype.aD=W.Y.prototype.K
W.bB.prototype.d1=W.bB.prototype.V;(function installTearOffs(){installTearOff(H.aZ.prototype,"geE",0,0,0,null,["$0"],["ay"],0)
installTearOff(H.a0.prototype,"gcM",0,0,0,null,["$1"],["I"],2)
installTearOff(H.aH.prototype,"gek",0,0,0,null,["$1"],["X"],2)
installTearOff(P,"mS",1,0,0,null,["$1"],["mA"],1)
installTearOff(P,"mT",1,0,0,null,["$1"],["mB"],1)
installTearOff(P,"mU",1,0,0,null,["$1"],["mC"],1)
installTearOff(P,"kR",1,0,0,null,["$0"],["mQ"],0)
installTearOff(P.ac.prototype,"gdC",0,0,0,null,["$2","$1"],["ar","dD"],5)
installTearOff(P,"mZ",1,0,0,null,["$2"],["lZ"],7)
installTearOff(W,"n3",1,0,0,null,["$4"],["mG"],4)
installTearOff(W,"n4",1,0,0,null,["$4"],["mH"],4)
installTearOff(W.cm.prototype,"gb0",0,1,0,null,["$0"],["b1"],3)
installTearOff(W.cG.prototype,"gb0",0,1,0,null,["$0"],["b1"],3)
installTearOff(R.ct.prototype,"geO",0,0,0,null,["$1"],["cg"],6)
installTearOff(Y,"l8",1,0,0,null,["$0"],["nc"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.iZ,t)
inherit(J.a,t)
inherit(J.dD,t)
inherit(P.O,t)
inherit(H.cc,t)
inherit(P.c8,t)
inherit(H.aR,t)
inherit(H.as,t)
inherit(H.hP,t)
inherit(H.aZ,t)
inherit(H.hr,t)
inherit(H.aI,t)
inherit(H.hO,t)
inherit(H.hm,t)
inherit(H.cs,t)
inherit(H.fY,t)
inherit(H.aq,t)
inherit(H.a0,t)
inherit(H.aH,t)
inherit(H.fr,t)
inherit(H.h3,t)
inherit(P.aQ,t)
inherit(H.d8,t)
inherit(H.ak,t)
inherit(P.aV,t)
inherit(H.eL,t)
inherit(H.eN,t)
inherit(P.iU,t)
inherit(P.hn,t)
inherit(P.cR,t)
inherit(P.ac,t)
inherit(P.cJ,t)
inherit(P.fL,t)
inherit(P.fM,t)
inherit(P.j9,t)
inherit(P.aL,t)
inherit(P.i5,t)
inherit(P.fz,t)
inherit(P.hL,t)
inherit(P.bv,t)
inherit(P.j2,t)
inherit(P.bw,t)
inherit(P.l,t)
inherit(P.hN,t)
inherit(P.af,t)
inherit(P.D,t)
inherit(P.aP,t)
inherit(P.a2,t)
inherit(P.at,t)
inherit(P.cy,t)
inherit(P.iW,t)
inherit(P.hw,t)
inherit(P.e3,t)
inherit(P.h,t)
inherit(P.aU,t)
inherit(P.H,t)
inherit(P.aX,t)
inherit(P.n,t)
inherit(P.bn,t)
inherit(P.jc,t)
inherit(W.dO,t)
inherit(W.bu,t)
inherit(W.m,t)
inherit(W.co,t)
inherit(W.bB,t)
inherit(W.i0,t)
inherit(W.c4,t)
inherit(W.cn,t)
inherit(W.j6,t)
inherit(W.jd,t)
inherit(W.hW,t)
inherit(W.di,t)
inherit(P.hJ,t)
inherit(P.hR,t)
inherit(G.eZ,t)
inherit(G.dI,t)
inherit(G.et,t)
inherit(G.em,t)
inherit(G.ev,t)
inherit(G.cE,t)
inherit(G.cD,t)
inherit(G.dZ,t)
inherit(G.w,t)
inherit(G.fA,t)
inherit(G.fW,t)
inherit(G.br,t)
inherit(R.fH,t)
inherit(T.aA,t)
inherit(T.K,t)
inherit(T.U,t)
inherit(T.v,t)
inherit(T.ab,t)
t=J.a
inherit(J.eG,t)
inherit(J.eH,t)
inherit(J.bf,t)
inherit(J.au,t)
inherit(J.aS,t)
inherit(J.av,t)
inherit(H.bi,t)
inherit(H.aW,t)
inherit(W.d,t)
inherit(W.dA,t)
inherit(W.bT,t)
inherit(W.bU,t)
inherit(W.aO,t)
inherit(W.X,t)
inherit(W.cK,t)
inherit(W.dT,t)
inherit(W.dU,t)
inherit(W.dV,t)
inherit(W.bY,t)
inherit(W.bZ,t)
inherit(W.cL,t)
inherit(W.c0,t)
inherit(W.cN,t)
inherit(W.dY,t)
inherit(W.f,t)
inherit(W.cP,t)
inherit(W.ex,t)
inherit(W.cS,t)
inherit(W.eP,t)
inherit(W.eV,t)
inherit(W.cW,t)
inherit(W.cm,t)
inherit(W.cZ,t)
inherit(W.a7,t)
inherit(W.d2,t)
inherit(W.cq,t)
inherit(W.d4,t)
inherit(W.a8,t)
inherit(W.d9,t)
inherit(W.dc,t)
inherit(W.fX,t)
inherit(W.de,t)
inherit(W.h1,t)
inherit(W.cG,t)
inherit(W.h9,t)
inherit(W.hb,t)
inherit(W.dj,t)
inherit(W.dl,t)
inherit(W.dn,t)
inherit(W.dq,t)
inherit(W.ds,t)
inherit(P.cU,t)
inherit(P.d0,t)
inherit(P.fl,t)
inherit(P.fm,t)
inherit(P.fp,t)
inherit(P.da,t)
inherit(P.dg,t)
inherit(P.dE,t)
inherit(P.fu,t)
inherit(P.fv,t)
inherit(P.d6,t)
t=J.bf
inherit(J.fj,t)
inherit(J.aF,t)
inherit(J.aw,t)
inherit(J.iY,J.au)
t=J.aS
inherit(J.ca,t)
inherit(J.c9,t)
t=P.O
inherit(H.k,t)
inherit(H.ce,t)
inherit(H.cI,t)
t=H.k
inherit(H.aT,t)
inherit(H.eM,t)
inherit(H.e1,H.ce)
t=P.c8
inherit(H.eS,t)
inherit(H.he,t)
t=H.aT
inherit(H.bg,t)
inherit(P.eO,t)
t=H.as
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.hI,t)
inherit(H.hs,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.hQ,t)
inherit(H.fZ,t)
inherit(H.h_,t)
inherit(H.iH,t)
inherit(H.iq,t)
inherit(H.ir,t)
inherit(H.is,t)
inherit(H.it,t)
inherit(H.iu,t)
inherit(H.fT,t)
inherit(H.eI,t)
inherit(H.il,t)
inherit(H.im,t)
inherit(H.io,t)
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
inherit(P.fN,t)
inherit(P.fO,t)
inherit(P.i8,t)
inherit(P.hU,t)
inherit(P.hT,t)
inherit(P.hV,t)
inherit(P.eR,t)
inherit(P.e_,t)
inherit(P.e0,t)
inherit(W.e2,t)
inherit(W.fK,t)
inherit(W.hf,t)
inherit(W.hv,t)
inherit(W.f8,t)
inherit(W.f7,t)
inherit(W.hX,t)
inherit(W.hY,t)
inherit(W.i3,t)
inherit(W.i4,t)
inherit(P.ib,t)
inherit(B.iA,t)
inherit(B.iB,t)
inherit(B.iC,t)
inherit(B.iD,t)
inherit(B.iE,t)
inherit(B.fd,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(A.ik,t)
inherit(Y.iw,t)
t=H.hm
inherit(H.b0,t)
inherit(H.bG,t)
t=P.aQ
inherit(H.f9,t)
inherit(H.eJ,t)
inherit(H.h7,t)
inherit(H.h5,t)
inherit(H.dH,t)
inherit(H.fw,t)
inherit(P.bR,t)
inherit(P.cp,t)
inherit(P.W,t)
inherit(P.h8,t)
inherit(P.h6,t)
inherit(P.aY,t)
inherit(P.dJ,t)
inherit(P.dS,t)
t=H.fT
inherit(H.fG,t)
inherit(H.ba,t)
inherit(H.hg,P.bR)
inherit(P.cd,P.aV)
t=P.cd
inherit(H.a6,t)
inherit(W.hl,t)
t=H.aW
inherit(H.f_,t)
inherit(H.ch,t)
t=H.ch
inherit(H.bx,t)
inherit(H.bz,t)
inherit(H.by,H.bx)
inherit(H.ci,H.by)
inherit(H.bA,H.bz)
inherit(H.cj,H.bA)
t=H.ci
inherit(H.cg,t)
inherit(H.f0,t)
t=H.cj
inherit(H.f1,t)
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.ck,t)
inherit(H.f6,t)
inherit(P.i1,P.hn)
inherit(P.hS,P.i5)
inherit(P.hM,H.a6)
inherit(P.fy,P.fz)
inherit(P.hH,P.fy)
inherit(P.hK,P.hH)
inherit(P.cb,P.bw)
t=P.a2
inherit(P.V,t)
inherit(P.x,t)
t=P.W
inherit(P.cr,t)
inherit(P.eB,t)
t=W.d
inherit(W.p,t)
inherit(W.aj,t)
inherit(W.eo,t)
inherit(W.be,t)
inherit(W.bh,t)
inherit(W.fn,t)
inherit(W.cu,t)
inherit(W.bC,t)
inherit(W.bE,t)
inherit(W.hc,t)
inherit(W.hd,t)
inherit(W.bs,t)
inherit(W.je,t)
inherit(P.dF,t)
inherit(P.aM,t)
t=W.p
inherit(W.Y,t)
inherit(W.ar,t)
inherit(W.bb,t)
t=W.Y
inherit(W.j,t)
inherit(P.u,t)
t=W.aj
inherit(W.bQ,t)
inherit(W.ew,t)
inherit(W.eQ,t)
t=W.j
inherit(W.dB,t)
inherit(W.dC,t)
inherit(W.ap,t)
inherit(W.bS,t)
inherit(W.bX,t)
inherit(W.es,t)
inherit(W.c6,t)
inherit(W.fx,t)
inherit(W.cA,t)
inherit(W.fR,t)
inherit(W.fS,t)
inherit(W.bo,t)
t=W.aO
inherit(W.dK,t)
inherit(W.dM,t)
inherit(W.dN,t)
inherit(W.dQ,t)
t=W.X
inherit(W.dL,t)
inherit(W.dP,t)
inherit(W.dR,t)
inherit(W.aN,W.cK)
inherit(W.dW,W.bZ)
inherit(W.cM,W.cL)
inherit(W.c_,W.cM)
inherit(W.cO,W.cN)
inherit(W.dX,W.cO)
inherit(W.cQ,W.cP)
inherit(W.en,W.cQ)
inherit(W.cT,W.cS)
inherit(W.bd,W.cT)
inherit(W.c7,W.bb)
inherit(W.ey,W.be)
inherit(W.aE,W.f)
t=W.aE
inherit(W.ax,t)
inherit(W.G,t)
inherit(W.aD,t)
inherit(W.eX,W.bh)
inherit(W.cX,W.cW)
inherit(W.eY,W.cX)
inherit(W.M,P.cb)
inherit(W.d_,W.cZ)
inherit(W.bj,W.d_)
inherit(W.d3,W.d2)
inherit(W.fk,W.d3)
inherit(W.bD,W.bC)
inherit(W.fC,W.bD)
inherit(W.d5,W.d4)
inherit(W.fE,W.d5)
inherit(W.fJ,W.d9)
inherit(W.dd,W.dc)
inherit(W.fU,W.dd)
inherit(W.bF,W.bE)
inherit(W.fV,W.bF)
inherit(W.df,W.de)
inherit(W.h0,W.df)
inherit(W.aG,W.G)
inherit(W.dk,W.dj)
inherit(W.ho,W.dk)
inherit(W.hp,W.c0)
inherit(W.dm,W.dl)
inherit(W.hG,W.dm)
inherit(W.dp,W.dn)
inherit(W.cY,W.dp)
inherit(W.dr,W.dq)
inherit(W.hZ,W.dr)
inherit(W.dt,W.ds)
inherit(W.i_,W.dt)
inherit(W.hq,W.hl)
inherit(W.ht,P.fL)
inherit(W.jh,W.ht)
inherit(W.hu,P.fM)
inherit(W.i2,W.bB)
inherit(P.P,P.hR)
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
inherit(P.ep,t)
inherit(P.a5,t)
inherit(P.eT,t)
inherit(P.fh,t)
inherit(P.bm,t)
t=P.a5
inherit(P.er,t)
inherit(P.Z,t)
inherit(P.ez,t)
inherit(P.fQ,t)
inherit(P.bp,t)
inherit(P.ha,t)
inherit(P.cV,P.cU)
inherit(P.eK,P.cV)
inherit(P.d1,P.d0)
inherit(P.fa,P.d1)
inherit(P.fq,P.Z)
inherit(P.db,P.da)
inherit(P.fP,P.db)
inherit(P.bq,P.bp)
inherit(P.dh,P.dg)
inherit(P.h2,P.dh)
inherit(P.fb,P.aM)
inherit(P.d7,P.d6)
inherit(P.fF,P.d7)
t=G.eZ
inherit(G.fD,t)
inherit(G.cH,t)
inherit(G.eW,t)
inherit(G.ft,t)
inherit(A.fs,t)
inherit(A.bl,t)
t=G.fD
inherit(G.dG,t)
inherit(A.cl,t)
inherit(B.fc,G.dG)
t=G.cH
inherit(G.eU,t)
inherit(G.fi,t)
inherit(G.eA,G.br)
inherit(R.ct,A.fs)
inherit(R.fI,R.fH)
mixin(H.bx,P.l)
mixin(H.by,H.aR)
mixin(H.bz,P.l)
mixin(H.bA,H.aR)
mixin(P.bw,P.l)
mixin(W.cK,W.dO)
mixin(W.cL,P.l)
mixin(W.cM,W.m)
mixin(W.cN,P.l)
mixin(W.cO,W.m)
mixin(W.cP,P.l)
mixin(W.cQ,W.m)
mixin(W.cS,P.l)
mixin(W.cT,W.m)
mixin(W.cW,P.l)
mixin(W.cX,W.m)
mixin(W.cZ,P.l)
mixin(W.d_,W.m)
mixin(W.d2,P.l)
mixin(W.d3,W.m)
mixin(W.bC,P.l)
mixin(W.bD,W.m)
mixin(W.d4,P.l)
mixin(W.d5,W.m)
mixin(W.d9,P.aV)
mixin(W.dc,P.l)
mixin(W.dd,W.m)
mixin(W.bE,P.l)
mixin(W.bF,W.m)
mixin(W.de,P.l)
mixin(W.df,W.m)
mixin(W.dj,P.l)
mixin(W.dk,W.m)
mixin(W.dl,P.l)
mixin(W.dm,W.m)
mixin(W.dn,P.l)
mixin(W.dp,W.m)
mixin(W.dq,P.l)
mixin(W.dr,W.m)
mixin(W.ds,P.l)
mixin(W.dt,W.m)
mixin(P.cU,P.l)
mixin(P.cV,W.m)
mixin(P.d0,P.l)
mixin(P.d1,W.m)
mixin(P.da,P.l)
mixin(P.db,W.m)
mixin(P.dg,P.l)
mixin(P.dh,W.m)
mixin(P.d6,P.l)
mixin(P.d7,W.m)})();(function constants(){C.o=W.ap.prototype
C.w=W.bS.prototype
C.m=W.bT.prototype
C.p=W.bU.prototype
C.x=W.aN.prototype
C.q=W.bX.prototype
C.L=W.bY.prototype
C.M=W.c6.prototype
C.r=W.c7.prototype
C.N=J.a.prototype
C.a=J.au.prototype
C.z=J.c9.prototype
C.b=J.ca.prototype
C.c=J.aS.prototype
C.i=J.av.prototype
C.U=J.aw.prototype
C.Y=H.cg.prototype
C.C=W.bj.prototype
C.D=J.fj.prototype
C.E=W.cq.prototype
C.J=W.cA.prototype
C.v=J.aF.prototype
C.aw=W.aG.prototype
C.ax=W.bs.prototype
C.K=new P.hJ()
C.f=new P.hS()
C.y=new P.at(0)
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
C.A=function(hooks) { return hooks; }

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
C.B=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.V=H.A(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.W=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.X=makeConstList([])
C.t=H.A(makeConstList(["bind","if","ref","repeat","syntax"]),[P.n])
C.u=H.A(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.Z=new G.w("vec3","vertex btangents",0)
C.d=new G.w("vec3","",0)
C.a_=new G.w("vec4","delta from light",0)
C.n=new G.w("","",0)
C.F=new G.w("vec3","vertex coordinates",0)
C.a0=new G.w("vec3","vertex binormals",0)
C.G=new G.w("vec4","for wireframe",0)
C.a1=new G.w("vec4","per vertex color",0)
C.a2=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.a4=new G.w("mat4","",4)
C.a3=new G.w("mat4","",128)
C.e=new G.w("float","",0)
C.a5=new G.w("float","",4)
C.a6=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a7=new G.w("float","for bump maps",0)
C.a8=new G.w("vec2","texture uvs",0)
C.a9=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.aa=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.ab=new G.w("vec3","vertex normals",0)
C.ac=new G.w("sampler2DShadow","",0)
C.H=new G.w("vec3","per vertex color",0)
C.I=new G.w("mat3","",0)
C.ad=new G.w("vec3","vertex tangents",0)
C.ae=H.E("nm")
C.af=H.E("nn")
C.ag=H.E("eq")
C.ah=H.E("no")
C.ai=H.E("np")
C.aj=H.E("k4")
C.ak=H.E("nq")
C.al=H.E("k7")
C.am=H.E("H")
C.an=H.E("n")
C.ao=H.E("kx")
C.ap=H.E("ky")
C.aq=H.E("nr")
C.ar=H.E("kz")
C.as=H.E("af")
C.at=H.E("V")
C.au=H.E("x")
C.av=H.E("a2")})();(function staticFields(){$.kf="$cachedFunction"
$.kg="$cachedInvocation"
$.jQ=null
$.jO=null
$.jk=!1
$.jp=null
$.kO=null
$.l4=null
$.ie=null
$.ip=null
$.jq=null
$.b1=null
$.bH=null
$.bI=null
$.jl=!1
$.z=C.f
$.k2=0
$.ah=null
$.iV=null
$.k1=null
$.k0=null
$.jY=null
$.jX=null
$.jW=null
$.jV=null
$.mW=0
$.mX=0
$.ju=0
$.l0=0
$.bN=0
$.bO=0
$.nj=!1
$.kV=0})();(function lazyInitializers(){lazy($,"jU","$get$jU",function(){return H.kY("_$dart_dartClosure")})
lazy($,"j_","$get$j_",function(){return H.kY("_$dart_js")})
lazy($,"k5","$get$k5",function(){return H.mc()})
lazy($,"k6","$get$k6",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k2
$.k2=t+1
t="expando$key$"+t}return new P.e3(t,null,[P.x])})
lazy($,"km","$get$km",function(){return H.a9(H.h4({
toString:function(){return"$receiver$"}}))})
lazy($,"kn","$get$kn",function(){return H.a9(H.h4({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ko","$get$ko",function(){return H.a9(H.h4(null))})
lazy($,"kp","$get$kp",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kt","$get$kt",function(){return H.a9(H.h4(void 0))})
lazy($,"ku","$get$ku",function(){return H.a9(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kr","$get$kr",function(){return H.a9(H.ks(null))})
lazy($,"kq","$get$kq",function(){return H.a9(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kw","$get$kw",function(){return H.a9(H.ks(void 0))})
lazy($,"kv","$get$kv",function(){return H.a9(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jg","$get$jg",function(){return P.mz()})
lazy($,"bJ","$get$bJ",function(){return[]})
lazy($,"jT","$get$jT",function(){return{}})
lazy($,"kF","$get$kF",function(){return P.j3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"ji","$get$ji",function(){return P.T()})
lazy($,"id","$get$id",function(){return P.k8(P.x,P.af)})
lazy($,"bL","$get$bL",function(){return P.k8(P.n,P.af)})
lazy($,"kj","$get$kj",function(){return new G.cE(1281,0,4294967295)})
lazy($,"jM","$get$jM",function(){return G.kl(32774,770,771)})
lazy($,"jL","$get$jL",function(){return G.kl(32774,770,769)})
lazy($,"Q","$get$Q",function(){return P.ay(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.H,"aColorAlpha",C.a1,"aPosition",C.F,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.G,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.H,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.F,"vPositionFromLight",C.a_,"vCenter",C.G,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.I,"uConvolutionMatrix",C.I,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.e,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kB","$get$kB",function(){return C.K})
lazy($,"l3","$get$l3",function(){var t=G.fB("PointSpritesV")
t.bj(["aPosition"])
t.aF(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.aq(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"l2","$get$l2",function(){var t=G.fB("PointSpritesF")
t.aF(["uTexture"])
t.aq(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kS","$get$kS",function(){var t=G.fB("bluredV")
t.bj(["aPosition"])
t.aq(["gl_Position = vec4(aPosition, 1.0);"])
return t})
lazy($,"kT","$get$kT",function(){var t=G.fB("bluredF")
t.aF(["uColorAlpha"])
t.aq(["oFragColor = uColorAlpha;"])
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
mangledGlobalNames:{x:"int",V:"double",a2:"num",n:"String",af:"bool",H:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.af,args:[W.Y,P.n,P.n,W.bu]},{func:1,v:true,args:[P.C],opt:[P.aX]},{func:1,v:true,args:[W.f]},{func:1,ret:P.x,args:[P.D,P.D]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bi,ArrayBufferView:H.aW,DataView:H.f_,Float32Array:H.cg,Float64Array:H.f0,Int16Array:H.f1,Int32Array:H.f2,Int8Array:H.f3,Uint16Array:H.f4,Uint32Array:H.f5,Uint8ClampedArray:H.ck,CanvasPixelArray:H.ck,Uint8Array:H.f6,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.bQ,LinearAccelerationSensor:W.bQ,AccessibleNodeList:W.dA,HTMLAnchorElement:W.dB,HTMLAreaElement:W.dC,HTMLBodyElement:W.ap,HTMLCanvasElement:W.bS,CanvasGradient:W.bT,CanvasRenderingContext2D:W.bU,CDATASection:W.ar,CharacterData:W.ar,Comment:W.ar,ProcessingInstruction:W.ar,Text:W.ar,CSSPerspective:W.dK,CSSPositionValue:W.dL,CSSRotation:W.dM,CSSScale:W.dN,CSSStyleDeclaration:W.aN,MSStyleCSSProperties:W.aN,CSS2Properties:W.aN,CSSImageValue:W.X,CSSKeywordValue:W.X,CSSNumericValue:W.X,CSSResourceValue:W.X,CSSUnitValue:W.X,CSSURLImageValue:W.X,CSSStyleValue:W.X,CSSMatrixComponent:W.aO,CSSSkew:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.dP,CSSTranslation:W.dQ,CSSUnparsedValue:W.dR,DataTransferItemList:W.dT,DeviceAcceleration:W.dU,HTMLDivElement:W.bX,XMLDocument:W.bb,Document:W.bb,DOMException:W.dV,DOMImplementation:W.bY,DOMPoint:W.dW,DOMPointReadOnly:W.bZ,ClientRectList:W.c_,DOMRectList:W.c_,DOMRectReadOnly:W.c0,DOMStringList:W.dX,DOMTokenList:W.dY,Element:W.Y,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.en,FileWriter:W.eo,HTMLFormElement:W.es,Gyroscope:W.ew,HTMLHeadElement:W.c6,History:W.ex,HTMLCollection:W.bd,HTMLFormControlsCollection:W.bd,HTMLOptionsCollection:W.bd,HTMLDocument:W.c7,XMLHttpRequest:W.ey,XMLHttpRequestUpload:W.be,XMLHttpRequestEventTarget:W.be,KeyboardEvent:W.ax,Location:W.eP,Magnetometer:W.eQ,MediaList:W.eV,MIDIOutput:W.eX,MIDIInput:W.bh,MIDIPort:W.bh,MimeTypeArray:W.eY,PointerEvent:W.G,MouseEvent:W.G,DragEvent:W.G,DocumentFragment:W.p,ShadowRoot:W.p,Attr:W.p,DocumentType:W.p,Node:W.p,NodeIterator:W.cm,NodeList:W.bj,RadioNodeList:W.bj,Plugin:W.a7,PluginArray:W.fk,PresentationConnection:W.fn,Range:W.cq,RTCDataChannel:W.cu,DataChannel:W.cu,HTMLSelectElement:W.fx,AbsoluteOrientationSensor:W.aj,AmbientLightSensor:W.aj,OrientationSensor:W.aj,RelativeOrientationSensor:W.aj,Sensor:W.aj,SourceBufferList:W.fC,SpeechGrammarList:W.fE,SpeechRecognitionResult:W.a8,Storage:W.fJ,HTMLTableElement:W.cA,HTMLTableRowElement:W.fR,HTMLTableSectionElement:W.fS,HTMLTemplateElement:W.bo,TextTrackCueList:W.fU,TextTrackList:W.fV,TimeRanges:W.fX,TouchEvent:W.aD,TouchList:W.h0,TrackDefaultList:W.h1,TreeWalker:W.cG,CompositionEvent:W.aE,FocusEvent:W.aE,TextEvent:W.aE,UIEvent:W.aE,URL:W.h9,VRStageBoundsPoint:W.hb,VideoTrackList:W.hc,WebSocket:W.hd,WheelEvent:W.aG,Window:W.bs,DOMWindow:W.bs,CSSRuleList:W.ho,DOMRect:W.hp,GamepadList:W.hG,NamedNodeMap:W.cY,MozNamedAttrMap:W.cY,SpeechRecognitionResultList:W.hZ,StyleSheetList:W.i_,SVGFEBlendElement:P.e4,SVGFEColorMatrixElement:P.e5,SVGFEComponentTransferElement:P.e6,SVGFECompositeElement:P.e7,SVGFEConvolveMatrixElement:P.e8,SVGFEDiffuseLightingElement:P.e9,SVGFEDisplacementMapElement:P.ea,SVGFEFloodElement:P.eb,SVGFEGaussianBlurElement:P.ec,SVGFEImageElement:P.ed,SVGFEMergeElement:P.ee,SVGFEMorphologyElement:P.ef,SVGFEOffsetElement:P.eg,SVGFEPointLightElement:P.eh,SVGFESpecularLightingElement:P.ei,SVGFESpotLightElement:P.ej,SVGFETileElement:P.ek,SVGFETurbulenceElement:P.el,SVGFilterElement:P.ep,SVGForeignObjectElement:P.er,SVGCircleElement:P.Z,SVGEllipseElement:P.Z,SVGLineElement:P.Z,SVGPathElement:P.Z,SVGPolygonElement:P.Z,SVGPolylineElement:P.Z,SVGGeometryElement:P.Z,SVGAElement:P.a5,SVGClipPathElement:P.a5,SVGDefsElement:P.a5,SVGGElement:P.a5,SVGSwitchElement:P.a5,SVGGraphicsElement:P.a5,SVGImageElement:P.ez,SVGLengthList:P.eK,SVGMaskElement:P.eT,SVGNumberList:P.fa,SVGPatternElement:P.fh,SVGPoint:P.fl,SVGPointList:P.fm,SVGRect:P.fp,SVGRectElement:P.fq,SVGScriptElement:P.bm,SVGStringList:P.fP,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEMergeNodeElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMetadataElement:P.u,SVGRadialGradientElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGSymbolElement:P.u,SVGTitleElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGElement:P.u,SVGSVGElement:P.fQ,SVGTextPathElement:P.bp,SVGTextContentElement:P.bp,SVGTSpanElement:P.bq,SVGTextElement:P.bq,SVGTextPositioningElement:P.bq,SVGTransformList:P.h2,SVGUseElement:P.ha,AudioBuffer:P.dE,AudioTrackList:P.dF,AudioContext:P.aM,webkitAudioContext:P.aM,BaseAudioContext:P.aM,OfflineAudioContext:P.fb,WebGLRenderingContext:P.fu,WebGL2RenderingContext:P.fv,SQLResultSetRowList:P.fF})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.bA.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
W.bC.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"
W.bE.$nativeSuperclassTag="EventTarget"
W.bF.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l6(Y.l8(),b)},[])
else (function(b){H.l6(Y.l8(),b)})([])})})()