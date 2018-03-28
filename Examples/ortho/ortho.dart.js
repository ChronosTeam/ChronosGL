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
return d?function(e){if(t===null)t=H.jp(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jp(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jp(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j0:function j0(a){this.a=a},
j7:function(a,b,c,d){if(!!a.$isl)return new H.e4(a,b,[c,d])
return new H.ch(a,b,[c,d])},
eG:function(){return new P.b1("No element")},
mk:function(){return new P.b1("Too many elements")},
mj:function(){return new P.b1("Too few elements")},
mC:function(a,b){H.cx(a,0,J.bc(a)-1,b)},
cx:function(a,b,c,d){if(c-b<=32)H.mB(a,b,c,d)
else H.mA(a,b,c,d)},
mB:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.W(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a8(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
mA:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.J(t+1,6)
r=a3+s
q=a4-s
p=C.b.J(a3+a4,2)
o=p-s
n=p+s
t=J.W(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.a8(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.a8(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.a8(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.a8(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a8(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.a8(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.a8(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.a8(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.a8(a5.$2(j,i),0)){h=i
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
H.cx(a2,a3,g-2,a5)
H.cx(a2,f+2,a4,a5)
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
break}}H.cx(a2,g,f,a5)}else H.cx(a2,g,f,a5)},
l:function l(){},
aX:function aX(){},
cf:function cf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ch:function ch(a,b,c){this.a=a
this.b=b
this.$ti=c},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
eT:function eT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bm:function bm(a,b,c){this.a=a
this.b=b
this.$ti=c},
cK:function cK(a,b,c){this.a=a
this.b=b
this.$ti=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.$ti=c},
aU:function aU(){},
dw:function(a,b){var t=a.aq(b)
if(!u.globalState.d.cy)u.globalState.f.ax()
return t},
ih:function(){++u.globalState.f.b},
iw:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
lb:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isi)throw H.c(P.jM("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hQ(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kc()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.ht(P.j6(null,H.aM),0)
q=P.y
s.seC(new H.aa(0,null,null,null,null,null,0,[q,H.b2]))
s.seF(new H.aa(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hP()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.me,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mR)}if(u.globalState.x)return
o=H.kM()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.b8(a,{func:1,args:[P.N]}))o.aq(new H.iH(t,a))
else if(H.b8(a,{func:1,args:[P.N,P.N]}))o.aq(new H.iI(t,a))
else o.aq(a)
u.globalState.f.ax()},
mR:function(a){var t=P.aC(["command","print","msg",a])
return new H.a4(!0,P.b3(null,P.y)).P(t)},
kM:function(){var t,s
t=u.globalState.a++
s=P.y
t=new H.b2(t,new H.aa(0,null,null,null,null,null,0,[s,H.cv]),P.aD(null,null,null,s),u.createNewIsolate(),new H.cv(0,null,!1),new H.au(H.l8()),new H.au(H.l8()),!1,!1,[],P.aD(null,null,null,null),null,null,!1,!0,P.aD(null,null,null,null))
t.du()
return t},
mg:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mh()
return},
mh:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
me:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aL(!0,[]).a4(b.data)
s=J.W(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nh(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aL(!0,[]).a4(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aL(!0,[]).a4(s.h(t,"replyTo"))
k=H.kM()
u.globalState.f.a.a0(0,new H.aM(k,new H.eD(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.ax()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lI(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.ax()
break
case"close":u.globalState.ch.aw(0,$.$get$kd().h(0,a))
a.terminate()
u.globalState.f.ax()
break
case"log":H.md(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aC(["command","print","msg",t])
j=new H.a4(!0,P.b3(null,P.y)).P(j)
s.toString
self.postMessage(j)}else P.a7(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
md:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aC(["command","log","msg",a])
r=new H.a4(!0,P.b3(null,P.y)).P(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.aq(q)
s=P.c5(t)
throw H.c(s)}},
mf:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kk=$.kk+("_"+s)
$.kl=$.kl+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.M(0,["spawned",new H.b4(s,r),q,t.r])
r=new H.eE(t,d,a,c,b)
if(e){t.bT(q,q)
u.globalState.f.a.a0(0,new H.aM(t,r,"start isolate"))}else r.$0()},
mE:function(a,b){var t=new H.h_(!0,!1,null,0)
t.dk(a,b)
return t},
mS:function(a){return new H.aL(!0,[]).a4(new H.a4(!1,P.b3(null,P.y)).P(a))},
iH:function iH(a,b){this.a=a
this.b=b},
iI:function iI(a,b){this.a=a
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
b2:function b2(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hK:function hK(a,b){this.a=a
this.b=b},
ht:function ht(a,b){this.a=a
this.b=b},
hu:function hu(a){this.a=a},
aM:function aM(a,b,c){this.a=a
this.b=b
this.c=c},
hP:function hP(){},
eD:function eD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eE:function eE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ho:function ho(){},
b4:function b4(a,b){this.b=a
this.a=b},
hR:function hR(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c){this.b=a
this.c=b
this.a=c},
cv:function cv(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
au:function au(a){this.a=a},
a4:function a4(a,b){this.a=a
this.b=b},
aL:function aL(a,b){this.a=a
this.b=b},
nb:function(a){return u.types[a]},
nj:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bd(a)
if(typeof t!=="string")throw H.c(H.R(a))
return t},
mw:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.al(t)
s=t[0]
r=t[1]
return new H.fu(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aF:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bq:function(a){var t,s,r,q,p,o,n,m,l
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.v(a).$isaJ){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aT(q,0)===36)q=C.i.cX(q,1)
l=H.dy(H.ij(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
P:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mu:function(a){return a.b?H.P(a).getUTCFullYear()+0:H.P(a).getFullYear()+0},
ms:function(a){return a.b?H.P(a).getUTCMonth()+1:H.P(a).getMonth()+1},
mo:function(a){return a.b?H.P(a).getUTCDate()+0:H.P(a).getDate()+0},
mp:function(a){return a.b?H.P(a).getUTCHours()+0:H.P(a).getHours()+0},
mr:function(a){return a.b?H.P(a).getUTCMinutes()+0:H.P(a).getMinutes()+0},
mt:function(a){return a.b?H.P(a).getUTCSeconds()+0:H.P(a).getSeconds()+0},
mq:function(a){return a.b?H.P(a).getUTCMilliseconds()+0:H.P(a).getMilliseconds()+0},
kj:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.R(a))
return a[b]},
b7:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.Y(!0,b,"index",null)
t=J.bc(a)
if(b<0||C.b.be(b,t))return P.z(b,a,"index",null,t)
return P.fr(b,"index",null)},
R:function(a){return new P.Y(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.cs()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ld})
t.name=""}else t.toString=H.ld
return t},
ld:function(){return J.bd(this.dartException)},
K:function(a){throw H.c(a)},
G:function(a){throw H.c(P.aj(a))},
ad:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h5(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h6:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ky:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ki:function(a,b){return new H.fb(a,b==null?null:b.method)},
j2:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eK(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b4(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j2(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.ki(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$ks()
o=$.$get$kt()
n=$.$get$ku()
m=$.$get$kv()
l=$.$get$kz()
k=$.$get$kA()
j=$.$get$kx()
$.$get$kw()
i=$.$get$kC()
h=$.$get$kB()
g=p.U(s)
if(g!=null)return t.$1(H.j2(s,g))
else{g=o.U(s)
if(g!=null){g.method="call"
return t.$1(H.j2(s,g))}else{g=n.U(s)
if(g==null){g=m.U(s)
if(g==null){g=l.U(s)
if(g==null){g=k.U(s)
if(g==null){g=j.U(s)
if(g==null){g=m.U(s)
if(g==null){g=i.U(s)
if(g==null){g=h.U(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.ki(s,g))}}return t.$1(new H.h9(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cA()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.Y(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cA()
return a},
aq:function(a){var t
if(a==null)return new H.da(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.da(a,null)},
nn:function(a){if(a==null||typeof a!='object')return J.bb(a)
else return H.aF(a)},
n9:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
ni:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dw(b,new H.ir(a))
case 1:return H.dw(b,new H.is(a,d))
case 2:return H.dw(b,new H.it(a,d,e))
case 3:return H.dw(b,new H.iu(a,d,e,f))
case 4:return H.dw(b,new H.iv(a,d,e,f,g))}throw H.c(P.c5("Unsupported number of arguments for wrapped closure"))},
bP:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.ni)
a.$identity=t
return t},
lY:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isi){t.$reflectionInfo=c
r=H.mw(t).r}else r=c
q=d?Object.create(new H.fJ().constructor.prototype):Object.create(new H.be(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jT(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nb,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jQ:H.iV
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jT(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lV:function(a,b,c,d){var t=H.iV
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jT:function(a,b,c){var t,s,r,q
if(c)return H.lX(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lV(s,b==null?r!=null:b!==r,t,b)
return q},
lW:function(a,b,c,d){var t,s
t=H.iV
s=H.jQ
switch(b?-1:a){case 0:throw H.c(H.my("Intercepted function with no arguments."))
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
t=$.jR
if(t==null){t=H.jO("self")
$.jR=t}t=$.jP
if(t==null){t=H.jO("receiver")
$.jP=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lW(r,b==null?q!=null:b!==q,s,b)
return t},
jp:function(a,b,c,d,e,f){var t,s
t=J.al(b)
s=!!J.v(c).$isi?J.al(c):c
return H.lY(a,t,s,!!d,e,f)},
iV:function(a){return a.a},
jQ:function(a){return a.c},
jO:function(a){var t,s,r,q,p
t=new H.be("self","target","receiver","name")
s=J.al(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nK:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ae(a,"String"))},
nF:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ae(a,"double"))},
nJ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ae(a,"num"))},
n3:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ae(a,"bool"))},
nh:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ae(a,"int"))},
np:function(a,b){throw H.c(H.ae(a,b.substring(3)))},
no:function(a,b){var t=J.W(b)
throw H.c(H.jS(a,t.bs(b,3,t.gk(b))))},
jt:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.np(a,b)},
as:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.no(a,b)},
nI:function(a){if(a==null)return a
if(!!J.v(a).$isi)return a
throw H.c(H.ae(a,"List"))},
jq:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
b8:function(a,b){var t,s
if(a==null)return!1
t=H.jq(a)
if(t==null)s=!1
else s=H.l3(t,b)
return s},
nG:function(a,b){var t,s
if(a==null)return a
if($.jm)return a
$.jm=!0
try{if(H.b8(a,b))return a
t=H.iB(b,null)
s=H.ae(a,t)
throw H.c(s)}finally{$.jm=!1}},
ae:function(a,b){return new H.h7("TypeError: "+H.e(P.c4(a))+": type '"+H.kS(a)+"' is not a subtype of type '"+b+"'")},
jS:function(a,b){return new H.dK("CastError: "+H.e(P.c4(a))+": type '"+H.kS(a)+"' is not a subtype of type '"+b+"'")},
kS:function(a){var t
if(a instanceof H.aw){t=H.jq(a)
if(t!=null)return H.iB(t,null)
return"Closure"}return H.bq(a)},
ah:function(a){if(!0===a)return!1
if(!!J.v(a).$isiZ)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ae(a,"bool"))},
ap:function(a){throw H.c(new H.hi(a))},
b:function(a){if(H.ah(a))throw H.c(P.lU(null))},
nv:function(a){throw H.c(new P.dV(a))},
my:function(a){return new H.fz(a)},
l8:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l1:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.an(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ij:function(a){if(a==null)return
return a.$ti},
l2:function(a,b){return H.jx(a["$as"+H.e(b)],H.ij(a))},
a5:function(a,b,c){var t,s
t=H.l2(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ar:function(a,b){var t,s
t=H.ij(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iB:function(a,b){var t=H.b9(a,b)
return t},
b9:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dy(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b9(t,b)
return H.mT(a,b)}return"unknown-reified-type"},
mT:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b9(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b9(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b9(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.n8(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b9(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dy:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bt("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b9(o,c)}return p?"":"<"+s.l(0)+">"},
ik:function(a){var t,s,r
if(a instanceof H.aw){t=H.jq(a)
if(t!=null)return H.iB(t,null)}s=J.v(a).constructor.name
if(a==null)return s
r=H.dy(a.$ti,0,null)
return s+r},
jx:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.ju(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.ju(a,null,b)
return b},
ib:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ij(a)
s=J.v(a)
if(s[b]==null)return!1
return H.kW(H.jx(s[d],t),c)},
dz:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ib(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dy(c,0,null)
throw H.c(H.jS(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nC:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ib(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dy(c,0,null)
throw H.c(H.ae(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
kW:function(a,b){var t,s,r,q,p
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
if(!H.X(r,b[p]))return!1}return!0},
nD:function(a,b,c){return H.ju(a,b,H.l2(b,c))},
X:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="N")return!0
if('func' in b)return H.l3(a,b)
if('func' in a)return b.name==="iZ"||b.name==="F"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iB(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kW(H.jx(o,t),r)},
kV:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.X(o,n)||H.X(n,o)))return!1}return!0},
n_:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.al(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.X(p,o)||H.X(o,p)))return!1}return!0},
l3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.X(t,s)||H.X(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kV(r,q,!1))return!1
if(!H.kV(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.X(g,f)||H.X(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.X(g,f)||H.X(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.X(g,f)||H.X(f,g)))return!1}}return H.n_(a.named,b.named)},
ju:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nL:function(a){var t=$.jr
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nH:function(a){return H.aF(a)},
nE:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nk:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.F))
t=$.jr.$1(a)
s=$.ig[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iq[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kU.$2(a,t)
if(t!=null){s=$.ig[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iq[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iz(r)
$.ig[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iq[t]=r
return r}if(p==="-"){o=H.iz(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l6(a,r)
if(p==="*")throw H.c(P.kG(t))
if(u.leafTags[t]===true){o=H.iz(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l6(a,r)},
l6:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jv(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iz:function(a){return J.jv(a,!1,null,!!a.$ist)},
nm:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iz(t)
else return J.jv(t,c,null,null)},
nf:function(){if(!0===$.js)return
$.js=!0
H.ng()},
ng:function(){var t,s,r,q,p,o,n,m
$.ig=Object.create(null)
$.iq=Object.create(null)
H.ne()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l7.$1(p)
if(o!=null){n=H.nm(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
ne:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.b6(C.L,H.b6(C.Q,H.b6(C.x,H.b6(C.x,H.b6(C.P,H.b6(C.M,H.b6(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jr=new H.im(p)
$.kU=new H.io(o)
$.l7=new H.ip(n)},
b6:function(a,b){return a(b)||b},
nu:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fu:function fu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h5:function h5(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fb:function fb(a,b){this.a=a
this.b=b},
eK:function eK(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a){this.a=a},
iJ:function iJ(a){this.a=a},
da:function da(a,b){this.a=a
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
aw:function aw(){},
fW:function fW(){},
fJ:function fJ(){},
be:function be(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h7:function h7(a){this.a=a},
dK:function dK(a){this.a=a},
fz:function fz(a){this.a=a},
hi:function hi(a){this.a=a},
an:function an(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eJ:function eJ(a){this.a=a},
eM:function eM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
ip:function ip(a){this.a=a},
i7:function(a){var t,s,r
if(!!J.v(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ag:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b7(b,a))},
bo:function bo(){},
b_:function b_(){},
f1:function f1(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
ck:function ck(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
co:function co(){},
f8:function f8(){},
bC:function bC(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
n8:function(a){return J.al(H.B(a?Object.keys(a):[],[null]))},
iA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cd.prototype
return J.cc.prototype}if(typeof a=="string")return J.az.prototype
if(a==null)return J.eI.prototype
if(typeof a=="boolean")return J.eH.prototype
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.F)return a
return J.ii(a)},
jv:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ii:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.js==null){H.nf()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kG("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j1()]
if(p!=null)return p
p=H.nk(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$j1(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
al:function(a){a.fixed$length=Array
return a},
W:function(a){if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.F)return a
return J.ii(a)},
bR:function(a){if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.F)return a
return J.ii(a)},
l_:function(a){if(typeof a=="number")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.aJ.prototype
return a},
na:function(a){if(typeof a=="number")return J.aW.prototype
if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.aJ.prototype
return a},
l0:function(a){if(typeof a=="string")return J.az.prototype
if(a==null)return a
if(!(a instanceof P.F))return J.aJ.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aA.prototype
return a}if(a instanceof P.F)return a
return J.ii(a)},
E:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).B(a,b)},
a8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l_(a).a_(a,b)},
le:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l_(a).a6(a,b)},
ba:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nj(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.W(a).h(a,b)},
lf:function(a,b,c,d){return J.k(a).dA(a,b,c,d)},
jy:function(a,b){return J.l0(a).aT(a,b)},
iK:function(a,b){return J.k(a).dQ(a,b)},
lg:function(a,b,c){return J.k(a).dR(a,b,c)},
jz:function(a,b){return J.k(a).bS(a,b)},
iL:function(a,b){return J.k(a).X(a,b)},
jA:function(a,b,c){return J.k(a).bV(a,b,c)},
lh:function(a,b){return J.k(a).e4(a,b)},
iM:function(a,b,c){return J.k(a).bW(a,b,c)},
li:function(a,b,c){return J.k(a).bX(a,b,c)},
jB:function(a,b,c){return J.k(a).bY(a,b,c)},
dA:function(a,b){return J.k(a).e7(a,b)},
lj:function(a,b){return J.k(a).bZ(a,b)},
lk:function(a,b,c){return J.k(a).c_(a,b,c)},
jC:function(a,b,c,d){return J.k(a).c0(a,b,c,d)},
ll:function(a,b){return J.bR(a).c1(a,b)},
lm:function(a,b,c,d,e){return J.k(a).c2(a,b,c,d,e)},
ln:function(a,b){return J.na(a).Y(a,b)},
iN:function(a,b,c){return J.W(a).eb(a,b,c)},
iO:function(a){return J.k(a).c4(a)},
lo:function(a){return J.k(a).c5(a)},
lp:function(a){return J.k(a).eh(a)},
lq:function(a,b){return J.k(a).c8(a,b)},
iP:function(a,b){return J.k(a).c9(a,b)},
lr:function(a,b,c,d){return J.k(a).ca(a,b,c,d)},
ls:function(a,b,c,d,e){return J.k(a).eo(a,b,c,d,e)},
lt:function(a,b,c,d,e){return J.k(a).cb(a,b,c,d,e)},
lu:function(a,b,c,d,e,f){return J.k(a).ep(a,b,c,d,e,f)},
lv:function(a,b){return J.bR(a).u(a,b)},
dB:function(a,b){return J.k(a).cc(a,b)},
lw:function(a,b){return J.k(a).cd(a,b)},
lx:function(a){return J.k(a).eq(a)},
jD:function(a,b){return J.bR(a).ar(a,b)},
ly:function(a){return J.k(a).ge3(a)},
bb:function(a){return J.v(a).gA(a)},
aO:function(a){return J.bR(a).gC(a)},
bc:function(a){return J.W(a).gk(a)},
lz:function(a){return J.k(a).gba(a)},
lA:function(a){return J.v(a).gE(a)},
lB:function(a){return J.k(a).geP(a)},
lC:function(a){return J.k(a).gaJ(a)},
iQ:function(a){return J.k(a).gm(a)},
iR:function(a){return J.k(a).gn(a)},
jE:function(a){return J.k(a).gF(a)},
iS:function(a,b){return J.k(a).ai(a,b)},
lD:function(a){return J.k(a).aL(a)},
lE:function(a,b){return J.k(a).bf(a,b)},
lF:function(a,b,c){return J.k(a).bg(a,b,c)},
jF:function(a,b,c){return J.k(a).bj(a,b,c)},
lG:function(a,b){return J.k(a).cg(a,b)},
lH:function(a,b){return J.bR(a).cj(a,b)},
jG:function(a){return J.bR(a).eJ(a)},
lI:function(a,b){return J.k(a).M(a,b)},
lJ:function(a,b,c,d){return J.k(a).br(a,b,c,d)},
lK:function(a){return J.l0(a).eS(a)},
bd:function(a){return J.v(a).l(a)},
lL:function(a,b,c,d){return J.k(a).eU(a,b,c,d)},
lM:function(a,b,c){return J.k(a).cq(a,b,c)},
lN:function(a,b,c){return J.k(a).cr(a,b,c)},
iT:function(a,b,c){return J.k(a).cs(a,b,c)},
lO:function(a,b,c){return J.k(a).ct(a,b,c)},
jH:function(a,b,c){return J.k(a).cu(a,b,c)},
jI:function(a,b,c){return J.k(a).cv(a,b,c)},
jJ:function(a,b,c){return J.k(a).cw(a,b,c)},
jK:function(a,b,c,d){return J.k(a).cz(a,b,c,d)},
jL:function(a,b,c,d){return J.k(a).cA(a,b,c,d)},
lP:function(a,b){return J.k(a).cC(a,b)},
lQ:function(a,b,c){return J.k(a).eV(a,b,c)},
lR:function(a,b,c,d,e,f,g){return J.k(a).cE(a,b,c,d,e,f,g)},
lS:function(a,b,c,d,e){return J.k(a).cG(a,b,c,d,e)},
a:function a(){},
eH:function eH(){},
eI:function eI(){},
bl:function bl(){},
fm:function fm(){},
aJ:function aJ(){},
aA:function aA(){},
ay:function ay(a){this.$ti=a},
j_:function j_(a){this.$ti=a},
dF:function dF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aW:function aW(){},
cd:function cd(){},
cc:function cc(){},
az:function az(){}},P={
mI:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n0()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bP(new P.hk(t),1)).observe(s,{childList:true})
return new P.hj(t,s,r)}else if(self.setImmediate!=null)return P.n1()
return P.n2()},
mJ:function(a){H.ih()
self.scheduleImmediate(H.bP(new P.hl(a),0))},
mK:function(a){H.ih()
self.setImmediate(H.bP(new P.hm(a),0))},
mL:function(a){P.jc(C.v,a)},
jc:function(a,b){var t=C.b.J(a.a,1000)
return H.mE(t<0?0:t,b)},
mW:function(a,b){if(H.b8(a,{func:1,args:[P.N,P.N]})){b.toString
return a}else{b.toString
return a}},
mN:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.af))
H.b(b.a===0)
b.a=1
try{a.co(new P.hA(b),new P.hB(b))}catch(r){t=H.O(r)
s=H.aq(r)
P.nq(new P.hC(b,t,s))}},
kJ:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.b2()
b.aS(a)
P.by(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bM(r)}},
by:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.by(t.a,b)}s=t.a
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
if(s===8)new P.hG(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hF(r,b,m).$0()}else if((s&2)!==0)new P.hE(t,r,b).$0()
if(i!=null){H.b(!0)
$.A=i}s=r.b
if(!!J.v(s).$isew){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aE(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kJ(s,o)
return}}g=b.b
H.b(g.a<4)
h=g.c
g.c=null
b=g.aE(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.b(!o)
g.a=4
g.c=p}else{H.b(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mV:function(){var t,s
for(;t=$.b5,t!=null;){$.bN=null
s=t.b
$.b5=s
if(s==null)$.bM=null
t.a.$0()}},
mZ:function(){$.jn=!0
try{P.mV()}finally{$.bN=null
$.jn=!1
if($.b5!=null)$.$get$ji().$1(P.kX())}},
kR:function(a){var t=new P.cL(a,null)
if($.b5==null){$.bM=t
$.b5=t
if(!$.jn)$.$get$ji().$1(P.kX())}else{$.bM.b=t
$.bM=t}},
mY:function(a){var t,s,r
t=$.b5
if(t==null){P.kR(a)
$.bN=$.bM
return}s=new P.cL(a,null)
r=$.bN
if(r==null){s.b=t
$.bN=s
$.b5=s}else{s.b=r.b
r.b=s
$.bN=s
if(s.b==null)$.bM=s}},
nq:function(a){var t=$.A
if(C.f===t){P.ia(null,null,C.f,a)
return}t.toString
P.ia(null,null,t,t.b7(a))},
mF:function(a,b){var t=$.A
if(t===C.f){t.toString
return P.jc(a,b)}return P.jc(a,t.b7(b))},
jh:function(a){var t,s
H.b(a!=null)
t=$.A
H.b(a==null?t!=null:a!==t)
s=$.A
$.A=a
return s},
i8:function(a,b,c,d,e){var t={}
t.a=d
P.mY(new P.i9(t,e))},
kP:function(a,b,c,d){var t,s
if($.A===c)return d.$0()
t=P.jh(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.A=s}},
kQ:function(a,b,c,d,e){var t,s
if($.A===c)return d.$1(e)
t=P.jh(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.A=s}},
mX:function(a,b,c,d,e,f){var t,s
if($.A===c)return d.$2(e,f)
t=P.jh(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.A=s}},
ia:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b7(d):c.e5(d)
P.kR(d)},
hk:function hk(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
iW:function iW(){},
hp:function hp(){},
i2:function i2(a,b){this.a=a
this.$ti=b},
cT:function cT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hz:function hz(a,b){this.a=a
this.b=b},
hD:function hD(a,b){this.a=a
this.b=b},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
hG:function hG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hH:function hH(a){this.a=a},
hF:function hF(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
cL:function cL(a,b){this.a=a
this.b=b},
fO:function fO(){},
fQ:function fQ(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fP:function fP(){},
jb:function jb(){},
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
kf:function(a,b){return new H.aa(0,null,null,null,null,null,0,[a,b])},
L:function(){return new H.aa(0,null,null,null,null,null,0,[null,null])},
aC:function(a){return H.n9(a,new H.aa(0,null,null,null,null,null,0,[null,null]))},
b3:function(a,b){return new P.hN(0,null,null,null,null,null,0,[a,b])},
aD:function(a,b,c,d){return new P.hL(0,null,null,null,null,null,0,[d])},
jl:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mi:function(a,b,c){var t,s
if(P.jo(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bO()
C.a.i(s,a)
try{P.mU(a,t)}finally{H.b(C.a.gaI(s)===a)
s.pop()}s=P.kr(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eF:function(a,b,c){var t,s,r
if(P.jo(a))return b+"..."+c
t=new P.bt(b)
s=$.$get$bO()
C.a.i(s,a)
try{r=t
r.a=P.kr(r.gad(),a,", ")}finally{H.b(C.a.gaI(s)===a)
s.pop()}s=t
s.a=s.gad()+c
s=t.gad()
return s.charCodeAt(0)==0?s:s},
jo:function(a){var t,s
for(t=0;s=$.$get$bO(),t<s.length;++t)if(a===s[t])return!0
return!1},
mU:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gC(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.e(t.gt(t))
C.a.i(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt(t);++r
if(!t.p()){if(r<=4){C.a.i(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gt(t);++r
H.b(r<100)
for(;t.p();n=m,m=l){l=t.gt(t);++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.e(n)
p=H.e(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
j5:function(a,b){var t,s
t=P.aD(null,null,null,b)
for(s=J.aO(a);s.p();)t.i(0,s.gt(s))
return t},
kh:function(a){var t,s,r
t={}
if(P.jo(a))return"{...}"
s=new P.bt("")
try{C.a.i($.$get$bO(),a)
r=s
r.a=r.gad()+"{"
t.a=!0
J.jD(a,new P.eS(t,s))
t=s
t.a=t.gad()+"}"}finally{t=$.$get$bO()
H.b(C.a.gaI(t)===a)
t.pop()}t=s.gad()
return t.charCodeAt(0)==0?t:t},
j6:function(a,b){var t=new P.eP(null,0,0,0,[b])
t.dd(a,b)
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
bA:function bA(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hJ:function hJ(){},
j4:function j4(){},
ce:function ce(){},
m:function m(){},
cg:function cg(){},
eS:function eS(a,b){this.a=a
this.b=b},
aZ:function aZ(){},
eP:function eP(a,b,c,d,e){var _=this
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
fC:function fC(){},
fB:function fB(){},
bB:function bB(){},
m7:function(a){var t=J.v(a)
if(!!t.$isaw)return t.l(a)
return"Instance of '"+H.bq(a)+"'"},
kg:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.aO(a);s.p();)C.a.i(t,s.gt(s))
if(b)return t
return J.al(t)},
kr:function(a,b,c){var t=J.aO(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gt(t))
while(t.p())}else{a+=H.e(t.gt(t))
for(;t.p();)a=a+c+H.e(t.gt(t))}return a},
lZ:function(a,b){return J.ln(a,b)},
m1:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
m2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bY:function(a){if(a>=10)return""+a
return"0"+a},
m4:function(a,b,c,d,e,f){return new P.ax(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c4:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bd(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m7(a)},
lU:function(a){return new P.bV(a)},
jM:function(a){return new P.Y(!1,null,null,a)},
iU:function(a,b,c){return new P.Y(!0,a,b,c)},
lT:function(a){return new P.Y(!1,null,a,"Must not be null")},
fr:function(a,b,c){return new P.cu(null,null,!0,a,b,"Value not in range")},
aG:function(a,b,c,d,e){return new P.cu(b,c,!0,a,d,"Invalid value")},
km:function(a,b,c,d,e,f){if(C.b.a_(0,a)||C.b.a_(a,c))throw H.c(P.aG(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.a_(b,c))throw H.c(P.aG(b,a,c,"end",f))
return b}return c},
z:function(a,b,c,d,e){var t=e!=null?e:J.bc(b)
return new P.eC(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.ha(a)},
kG:function(a){return new P.h8(a)},
ja:function(a){return new P.b1(a)},
aj:function(a){return new P.dM(a)},
c5:function(a){return new P.hy(a)},
a7:function(a){H.iA(H.e(a))},
ai:function ai(){},
I:function I(){},
bf:function bf(a,b){this.a=a
this.b=b},
V:function V(){},
ax:function ax(a){this.a=a},
e2:function e2(){},
e3:function e3(){},
aT:function aT(){},
bV:function bV(a){this.a=a},
cs:function cs(){},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eC:function eC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ha:function ha(a){this.a=a},
h8:function h8(a){this.a=a},
b1:function b1(a){this.a=a},
dM:function dM(a){this.a=a},
cA:function cA(){},
dV:function dV(a){this.a=a},
iY:function iY(){},
hy:function hy(a){this.a=a},
e6:function e6(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
S:function S(){},
cb:function cb(){},
i:function i(){},
aY:function aY(){},
N:function N(){},
a6:function a6(){},
F:function F(){},
b0:function b0(){},
o:function o(){},
bt:function bt(a){this.a=a},
je:function je(){},
id:function(a){var t,s,r,q,p
if(a==null)return
t=P.L()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
n6:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jD(a,new P.ic(t))
return t},
k4:function(){var t=$.k3
if(t==null){t=J.iN(window.navigator.userAgent,"Opera",0)
$.k3=t}return t},
m3:function(){var t,s
t=$.k0
if(t!=null)return t
s=$.k1
if(s==null){s=J.iN(window.navigator.userAgent,"Firefox",0)
$.k1=s}if(s)t="-moz-"
else{s=$.k2
if(s==null){s=!P.k4()&&J.iN(window.navigator.userAgent,"Trident/",0)
$.k2=s}if(s)t="-ms-"
else t=P.k4()?"-o-":"-webkit-"}$.k0=t
return t},
ic:function ic(a){this.a=a},
nt:function(a){return Math.sqrt(a)},
hS:function hS(){},
T:function T(){},
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
er:function er(){},
et:function et(){},
a1:function a1(){},
a9:function a9(){},
eB:function eB(){},
eL:function eL(){},
eU:function eU(){},
eW:function eW(){},
fc:function fc(){},
fk:function fk(){},
fo:function fo(){},
fp:function fp(){},
fs:function fs(){},
ft:function ft(){},
bs:function bs(){},
fS:function fS(){},
w:function w(){},
fT:function fT(){},
bv:function bv(){},
bw:function bw(){},
h4:function h4(){},
hc:function hc(){},
cW:function cW(){},
cX:function cX(){},
d2:function d2(){},
d3:function d3(){},
dc:function dc(){},
dd:function dd(){},
di:function di(){},
dj:function dj(){},
dG:function dG(){},
dH:function dH(){},
aQ:function aQ(){},
fd:function fd(){},
fx:function fx(){},
fy:function fy(){},
fI:function fI(){},
d8:function d8(){},
d9:function d9(){}},W={
m5:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).S(t,a,b,c)
s.toString
t=new H.cK(new W.Q(s),new W.e5(),[W.r])
return t.gab(t)},
m6:function(a){return"wheel"},
bh:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lB(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
mM:function(a,b){return document.createElement(a)},
aN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a3:function(a,b,c,d,e){var t=c==null?null:W.kT(new W.hx(c))
t=new W.hw(0,a,b,t,!1,[e])
t.ds(a,b,c,!1,e)
return t},
kK:function(a){var t,s
t=document.createElement("a")
s=new W.hX(t,window.location)
s=new W.bz(s)
s.dt(a)
return s},
mP:function(a,b,c,d){return!0},
mQ:function(a,b,c,d){var t,s,r,q,p
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
kO:function(){var t=P.o
t=new W.i3(P.j5(C.q,t),P.aD(null,null,null,t),P.aD(null,null,null,t),P.aD(null,null,null,t),null)
t.dw(null,new H.bm(C.q,new W.i4(),[H.ar(C.q,0),null]),["TEMPLATE"],null)
return t},
kT:function(a){var t=$.A
if(t===C.f)return a
return t.e6(a)},
j:function j(){},
bU:function bU(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
at:function at(){},
bW:function bW(){},
dJ:function dJ(){},
av:function av(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
aR:function aR(){},
dR:function dR(){},
Z:function Z(){},
aS:function aS(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dW:function dW(){},
dX:function dX(){},
bZ:function bZ(){},
bg:function bg(){},
dY:function dY(){},
c_:function c_(){},
dZ:function dZ(){},
c0:function c0(){},
e_:function e_(){},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){},
e0:function e0(){},
e1:function e1(){},
a_:function a_(){},
e5:function e5(){},
h:function h(){},
d:function d(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
ey:function ey(){},
c9:function c9(){},
ez:function ez(){},
bj:function bj(){},
ca:function ca(){},
eA:function eA(){},
bk:function bk(){},
aB:function aB(){},
eQ:function eQ(){},
eR:function eR(){},
eX:function eX(){},
eZ:function eZ(){},
bn:function bn(){},
f_:function f_(){},
M:function M(){},
Q:function Q(a){this.a=a},
r:function r(){},
cp:function cp(){},
bp:function bp(){},
ab:function ab(){},
fn:function fn(){},
fq:function fq(){},
ct:function ct(){},
cw:function cw(){},
fA:function fA(){},
am:function am(){},
fF:function fF(){},
fH:function fH(){},
ac:function ac(){},
fM:function fM(){},
fN:function fN(a){this.a=a},
cC:function cC(){},
fU:function fU(){},
fV:function fV(){},
bu:function bu(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
aH:function aH(){},
h2:function h2(){},
h3:function h3(){},
cI:function cI(){},
aI:function aI(){},
hb:function hb(){},
hd:function hd(){},
he:function he(){},
hf:function hf(){},
aK:function aK(){},
bx:function bx(){},
hh:function hh(a){this.a=a},
jg:function jg(){},
hq:function hq(){},
hr:function hr(){},
hI:function hI(){},
d_:function d_(){},
i_:function i_(){},
i0:function i0(){},
hn:function hn(){},
hs:function hs(a){this.a=a},
hv:function hv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jj:function jj(a,b,c,d){var _=this
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
bz:function bz(a){this.a=a},
n:function n(){},
cr:function cr(a){this.a=a},
fa:function fa(a){this.a=a},
f9:function f9(a,b,c){this.a=a
this.b=b
this.c=c},
bG:function bG(){},
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
c7:function c7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cq:function cq(){},
j8:function j8(){},
jf:function jf(){},
hX:function hX(a,b){this.a=a
this.b=b},
dk:function dk(a){this.a=a},
i5:function i5(a){this.a=a},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cU:function cU(){},
cV:function cV(){},
cY:function cY(){},
cZ:function cZ(){},
d0:function d0(){},
d1:function d1(){},
d4:function d4(){},
d5:function d5(){},
bH:function bH(){},
bI:function bI(){},
d6:function d6(){},
d7:function d7(){},
db:function db(){},
de:function de(){},
df:function df(){},
bJ:function bJ(){},
bK:function bK(){},
dg:function dg(){},
dh:function dh(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){}},B={
nr:function(a){var t,s
t=document
s=W.aB
W.a3(t,"keydown",new B.iC(),!1,s)
W.a3(t,"keyup",new B.iD(),!1,s)
if(!$.ns)W.a3(t,"mousemove",new B.iE(),!1,W.M)
s=W.M
W.a3(t,"mousedown",new B.iF(),!1,s)
W.a3(t,"mouseup",new B.iG(),!1,s)},
mm:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$ie()
r=$.$get$bQ()
q=new T.C(new Float32Array(16))
q.I()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fe(a,b,c,0,new T.f(t),-0.02,s,r,q,new T.f(p),new T.f(o),new T.f(n),new T.f(new Float32Array(3)),"camera:orbit",!1,!0)
t.df(a,b,c,d)
return t},
iC:function iC(){},
iD:function iD(){},
iE:function iE(){},
iF:function iF(){},
iG:function iG(){},
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
m_:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.f(new Float32Array(3))
r.q(t,s,d8)
q=new T.f(new Float32Array(3))
q.q(d6,s,d8)
p=new T.f(new Float32Array(3))
p.q(d6,d7,d8)
o=new T.f(new Float32Array(3))
o.q(t,d7,d8)
n=-d8
m=new T.f(new Float32Array(3))
m.q(t,s,n)
l=new T.f(new Float32Array(3))
l.q(t,d7,n)
k=new T.f(new Float32Array(3))
k.q(d6,d7,n)
j=new T.f(new Float32Array(3))
j.q(d6,s,n)
i=new T.f(new Float32Array(3))
i.q(t,d7,n)
h=new T.f(new Float32Array(3))
h.q(t,d7,d8)
g=new T.f(new Float32Array(3))
g.q(d6,d7,d8)
f=new T.f(new Float32Array(3))
f.q(d6,d7,n)
e=new T.f(new Float32Array(3))
e.q(d6,s,d8)
d=new T.f(new Float32Array(3))
d.q(t,s,d8)
c=new T.f(new Float32Array(3))
c.q(t,s,n)
b=new T.f(new Float32Array(3))
b.q(d6,s,n)
a=new T.f(new Float32Array(3))
a.q(d6,s,n)
a0=new T.f(new Float32Array(3))
a0.q(d6,d7,n)
a1=new T.f(new Float32Array(3))
a1.q(d6,d7,d8)
a2=new T.f(new Float32Array(3))
a2.q(d6,s,d8)
a3=new T.f(new Float32Array(3))
a3.q(t,s,n)
a4=new T.f(new Float32Array(3))
a4.q(t,s,d8)
s=new T.f(new Float32Array(3))
s.q(t,d7,d8)
a5=new T.f(new Float32Array(3))
a5.q(t,d7,n)
t=new T.q(new Float32Array(2))
t.w(d3,d5)
n=new T.q(new Float32Array(2))
n.w(d2,d5)
a6=new T.q(new Float32Array(2))
a6.w(d2,d4)
a7=new T.q(new Float32Array(2))
a7.w(d3,d4)
a8=new T.q(new Float32Array(2))
a8.w(d2,d5)
a9=new T.q(new Float32Array(2))
a9.w(d2,d4)
b0=new T.q(new Float32Array(2))
b0.w(d3,d4)
b1=new T.q(new Float32Array(2))
b1.w(d3,d5)
b2=new T.q(new Float32Array(2))
b2.w(d3,d4)
b3=new T.q(new Float32Array(2))
b3.w(d3,d5)
b4=new T.q(new Float32Array(2))
b4.w(d2,d5)
b5=new T.q(new Float32Array(2))
b5.w(d2,d4)
b6=new T.q(new Float32Array(2))
b6.w(d2,d4)
b7=new T.q(new Float32Array(2))
b7.w(d3,d4)
b8=new T.q(new Float32Array(2))
b8.w(d3,d5)
b9=new T.q(new Float32Array(2))
b9.w(d2,d5)
c0=new T.q(new Float32Array(2))
c0.w(d2,d5)
c1=new T.q(new Float32Array(2))
c1.w(d2,d4)
c2=new T.q(new Float32Array(2))
c2.w(d3,d4)
c3=new T.q(new Float32Array(2))
c3.w(d3,d5)
c4=new T.q(new Float32Array(2))
c4.w(d3,d5)
c5=new T.q(new Float32Array(2))
c5.w(d2,d5)
c6=new T.q(new Float32Array(2))
c6.w(d2,d4)
c7=new T.q(new Float32Array(2))
c7.w(d3,d4)
c8=new G.aV(!1,[],[],[],P.L())
c8.a8("aTexUV")
c8.a8("aNormal")
c8.d3(6)
c8.bu([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aO("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$kI(),c9<6;++c9){d0=t[c9]
c8.aP("aNormal",[d0,d0,d0,d0])}return c8},
m0:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=a3/2
s=[]
r=[]
q=[]
p=new T.f(new Float32Array(3))
p.q(0,t,0)
C.a.i(s,p)
p=new T.q(new Float32Array(2))
p.w(0,0)
C.a.i(r,p)
p=new T.f(new Float32Array(3))
p.q(0,1,0)
C.a.i(q,p)
p=-t
o=new T.f(new Float32Array(3))
o.q(0,p,0)
C.a.i(s,o)
o=new T.q(new Float32Array(2))
o.w(1,1)
C.a.i(r,o)
o=new T.f(new Float32Array(3))
o.q(0,-1,0)
C.a.i(q,o)
for(n=0;n<a4;++n){m=n/a4
o=m*3.141592653589793*2
l=Math.sin(o)
k=Math.cos(o)
o=new Float32Array(3)
o[0]=l*a1
o[1]=t
o[2]=k*a1
C.a.i(s,new T.f(o))
o=new Float32Array(2)
o[0]=m
o[1]=1
C.a.i(r,new T.q(o))
o=new Float32Array(3)
o[0]=0
o[1]=1
o[2]=0
C.a.i(q,new T.f(o))
o=new Float32Array(3)
o[0]=l*a2
o[1]=p
o[2]=k*a2
C.a.i(s,new T.f(o))
o=new Float32Array(2)
o[0]=m
o[1]=0
C.a.i(r,new T.q(o))
o=new Float32Array(3)
o[0]=0
o[1]=-1
o[2]=0
C.a.i(q,new T.f(o))}p=2*a4
o=2+p
H.b(s.length===o)
H.b(r.length===o)
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
f=new T.f(new Float32Array(3))
G.ml(i,h,g,new T.f(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.b(s.length===2+4*a4)
p=[]
o=[]
e=new G.aV(!1,p,o,[],P.L())
e.a8("aTexUV")
e.bu(s)
e.aO("aTexUV",r)
e.a8("aNormal")
e.aP("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.b(!0)
C.a.i(p,new G.a0(0,c,a))
H.b(!0)
C.a.i(p,new G.a0(1,a0,h))
H.b(!0)
C.a.i(o,new G.bi(d+a,d+c,d+h,d+a0))}return e},
mb:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.O(t,$.$get$k9())
C.a.O(s,$.$get$ka())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.G)(t),++o){n=t[o]
m=J.k(n)
l=C.a.h(s,m.gW(n))
k=new T.f(new Float32Array(3))
k.v(l)
k.i(0,C.a.h(s,m.gR(n)))
k.a7(0,0.5)
k.D(0)
l=C.a.h(s,m.gR(n))
j=new T.f(new Float32Array(3))
j.v(l)
j.i(0,C.a.h(s,m.ga2(n)))
j.a7(0,0.5)
j.D(0)
l=C.a.h(s,m.ga2(n))
i=new T.f(new Float32Array(3))
i.v(l)
i.i(0,C.a.h(s,m.gW(n)))
i.a7(0,0.5)
i.D(0)
h=s.length
C.a.i(s,k)
g=s.length
C.a.i(s,j)
f=s.length
C.a.i(s,i)
C.a.i(q,new G.a0(m.gW(n),h,f))
C.a.i(q,new G.a0(m.gR(n),g,h))
C.a.i(q,new G.a0(m.ga2(n),f,g))
C.a.i(q,new G.a0(h,g,f))}}e=new G.aV(!1,[],[],[],P.L())
e.a8("aTexUV")
e.a8("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.G)(t),++o){n=t[o]
m=J.k(n)
d=C.a.h(s,m.gW(n))
H.b(Math.sqrt(d.gT())<1.01&&Math.sqrt(d.gT())>0.99)
c=C.a.h(s,m.gR(n))
H.b(Math.sqrt(c.gT())<1.01&&Math.sqrt(c.gT())>0.99)
b=C.a.h(s,m.ga2(n))
H.b(Math.sqrt(b.gT())<1.01&&Math.sqrt(b.gT())>0.99)
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
e.aP("aNormal",[d,c,b])
m=new T.f(new Float32Array(3))
m.v(d)
m.a7(0,a4)
l=new T.f(new Float32Array(3))
l.v(c)
l.a7(0,a4)
a2=new T.f(new Float32Array(3))
a2.v(b)
a2.a7(0,a4)
e.d4([m,l,a2])
e.aO("aTexUV",[new T.q(a),new T.q(a0),new T.q(a1)])}return e},
mz:function(a,b,c,d,e,f,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a1+1
s=a0+1
r=B.mn(new B.fE(e,d,f,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.mG(r,a1,a2,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.aV(!1,[],[],p,P.L())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.G)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.f(new Float32Array(3))
i.v(j)
C.a.i(p,i)}}H.b(p.length===t*s)
o.d8(t,s,!1)
o.d9(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
o.a8("aNormal")
for(j=q.length,m=0;m<q.length;q.length===j||(0,H.G)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
h=n.h(0,"aNormal")
i.toString
g=new T.f(new Float32Array(3))
g.v(i);(h&&C.a).i(h,g)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
mG:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(3)
r=new T.f(s)
q=new Float32Array(3)
p=new T.f(q)
o=new Float32Array(3)
n=new T.f(o)
for(m=a2+1,l=0;l<a1.length;l+=2){k=a1[l]
j=a1[l+1]
i=[]
C.a.i(t,i)
h=j.a
g=h[2]
if(Math.abs(g)>0.7071067811865476){f=h[1]
e=f*f+g*g
d=1/Math.sqrt(e)
q[0]=0
q[1]=-h[2]*d
q[2]=h[1]*d
o[0]=e*d
o[1]=-h[0]*(h[1]*d)
o[2]=h[0]*(-h[2]*d)}else{g=h[0]
f=h[1]
e=g*g+f*f
d=1/Math.sqrt(e)
q[0]=-h[1]*d
q[1]=h[0]*d
q[2]=0
o[0]=-h[2]*(h[0]*d)
o[1]=h[2]*(-h[1]*d)
o[2]=e*d}p.D(0)
n.D(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.v(k)
r.aF(p,a)
r.aF(n,a0)
h=new T.f(new Float32Array(3))
h.v(r)
C.a.i(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aF(p,a)
r.aF(n,a0)
r.D(0)
h=new T.f(new Float32Array(3))
h.v(r)
C.a.i(i,h)}}return t},
mn:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.f(new Float32Array(3))
r=new T.f(new Float32Array(3))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.az(0,s)
n=new T.f(new Float32Array(3))
n.v(s)
C.a.i(t,n)
n=new T.f(new Float32Array(3))
n.v(r)
C.a.i(t,n)}return t},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mH:function(a){var t,s,r
t=H.B(a.split("\n"),[P.o])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.av(t,"\n")},
kH:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.c6(a,b)
t.bo(a,s,c)
t.c3(a,s)
r=t.bi(a,s,35713)
if(r!=null&&!r){q=t.bh(a,s)
P.a7("E:Compilation failed:")
P.a7("E:"+G.mH(c))
P.a7("E:Failure:")
P.a7(C.i.a9("E:",q))
throw H.c(q)}return s},
H:function(a,b,c){return new G.a0(a,b,c)},
ml:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
d.v(b)
d.az(0,a)
e.v(c)
e.az(0,a)
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
l=Math.sqrt(e.gT())
if(l===0)return!1
e.a7(0,-1/l)
return!0},
ci:function(a){var t=new G.eV(P.L(),a,!1,!0)
t.de(a)
return t},
k8:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iQ(a[s])
b[t+1]=J.iR(a[s])
b[t+2]=J.jE(a[s])}return b},
m9:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iQ(a[s])
b[t+1]=J.iR(a[s])}return b},
ma:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iQ(a[s])
b[t+1]=J.iR(a[s])
b[t+2]=J.jE(a[s])
b[t+3]=J.lC(a[s])}return b},
m8:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ba(a[s],0)
b[t+1]=J.ba(a[s],1)
b[t+2]=J.ba(a[s],2)
b[t+3]=J.ba(a[s],3)}return b},
mO:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gH(t),s=s.gC(s),r=b.x,q=[[P.i,P.y]],p=[P.V],o=[T.ao],n=[T.f],m=[T.q];s.p();){l=s.gt(s)
if(!r.K(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.kZ>0)H.iA("I: "+l)
continue}k=t.h(0,l)
switch($.$get$U().h(0,l).a){case"vec2":b.aj(l,G.m9(H.dz(k,"$isi",m,"$asi"),null),2)
break
case"vec3":b.aj(l,G.k8(H.dz(k,"$isi",n,"$asi"),null),3)
break
case"vec4":b.aj(l,G.ma(H.dz(k,"$isi",o,"$asi"),null),4)
break
case"float":b.aj(l,new Float32Array(H.i7(H.dz(k,"$isi",p,"$asi"))),1)
break
case"uvec4":b.aj(l,G.m8(H.dz(k,"$isi",q,"$asi"),null),4)
break
default:if(H.ah(!1))H.ap("unknown type for "+H.e(l)+" ["+J.lA(k[0]).l(0)+"] ["+new H.an(H.ik(k),null).l(0)+"] "+H.e(k))}}},
ex:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.L()
q=J.lp(t.a)
p=new G.eY(t,q,4,r,s,null,0,-1,null,null,P.L(),"meshdata:"+a,!1,!0)
o=G.k8(c.d,null)
r.j(0,"aPosition",J.iO(t.a))
p.ch=o
p.bv("aPosition",o,3)
n=$.$get$U().h(0,"aPosition")
if(n==null)H.K("Unknown canonical aPosition")
H.b(s.K(0,"aPosition"))
m=s.h(0,"aPosition")
J.dA(t.a,q)
t.ce(0,m,0)
t.cF(0,r.h(0,"aPosition"),m,n.bx(),5126,!1,0,0)
s=c.d7()
p.y=J.iO(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saZ(new Uint8Array(H.i7(s)))
p.Q=5121}else if(r<196608){p.saZ(new Uint16Array(H.i7(s)))
p.Q=5123}else{p.saZ(new Uint32Array(H.i7(s)))
p.Q=5125}J.dA(t.a,q)
s=p.y
r=p.cx
q=J.v(r)
H.b(!!q.$iskD||!!q.$iskE||!!q.$iskF)
J.iM(t.a,34963,s)
J.jC(t.a,34963,r,35048)
G.mO(c,p)
return p},
mx:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aD(null,null,null,P.o)
s=c.b
r=d.b
q=c.f
p=J.lo(b.a)
o=G.kH(b.a,35633,s)
J.jA(b.a,p,o)
n=G.kH(b.a,35632,r)
J.jA(b.a,p,n)
if(q.length>0)J.lL(b.a,p,q,35980)
J.lG(b.a,p)
if(!J.lF(b.a,p,35714))H.K(J.lE(b.a,p))
t=new G.fw(b,c,d,p,P.j5(c.c,null),P.L(),P.L(),t,null,a,!1,!0)
t.dh(a,b,c,d)
return t},
ko:function(a){return new G.fD(a,null,[],[],[],[],0,P.L())},
f0:function f0(){},
cJ:function cJ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dI:function dI(){},
dL:function dL(a,b){this.a=a
this.b=b},
ev:function ev(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
bi:function bi(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aV:function aV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a,b,c,d){var _=this
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
fj:function fj(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.d=k
_.a=l
_.b=m
_.c=n},
fl:function fl(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fw:function fw(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fD:function fD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fG:function fG(){}},R={
kp:function(a,b,c,d,e,f,g,h){return G.ex("cube",a,B.m_(!0,b,c,d,e,f,g,h))},
fK:function fK(){},
fL:function fL(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kY:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.v(c)
s=b.d
t.b9(0,s)
r=b.cx
H.e(b)
q=C.a.gaI(e)
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
p.ed(new T.a2(o))
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
C.a.i(e,b.ch)
a.d6(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.G)(s),++l)A.kY(a,s[l],t,d,e)},
kn:function(a,b,c){var t=new A.fv(c,b,H.B([],[A.br]),17664,0,0,0,0,a,!1,!0)
t.dg(a,b,c)
return t},
aE:function aE(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
br:function br(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fv:function fv(a,b,c,d,e,f,g,h,i,j,k){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.a=i
_.b=j
_.c=k},
dx:function(a){var t,s
t=C.V.es(a,0,new A.il())
s=536870911&t+(C.b.cH(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
il:function il(){}},T={
D:function(a,b,c){var t=new T.f(new Float32Array(3))
t.q(a,b,c)
return t},
a2:function a2(a){this.a=a},
C:function C(a){this.a=a},
q:function q(a){this.a=a},
f:function f(a){this.a=a},
ao:function ao(a){this.a=a}},K={
nl:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t={}
s=document
r=new R.fL(0,0,null,null,null,null)
r.dj(C.p.cJ(s,"stats"),"blue","gray")
q=C.p.eI(s,"#webgl-canvas")
p=new G.dL(null,q)
s=(q&&C.H).cI(q,"webgl2",P.aC(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.K(P.c5('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.lD(s))
if($.kZ>0)P.a7("I: "+o)
J.lm(s,0,0,0,1)
J.dB(s,2929)
n=B.mm(25,10,0,q)
m=G.mx("textured",p,$.$get$la(),$.$get$l9())
s=new Float32Array(16)
o=new Float32Array(16)
l=new T.C(new Float32Array(16))
l.I()
k=new G.fj(n,new T.C(s),new T.C(o),l,1,-20,20,-20,-20,100,P.L(),"othrogrpahic",!1,!0)
k.ak()
j=A.kn("shadow",p,null)
l=[]
H.b(!0)
C.a.i(j.f,new A.br(m,[k],l,"objects",!1,!0))
s=new T.C(new Float32Array(16))
s.I()
o=new T.C(new Float32Array(16))
o.I()
i=new G.fl(n,50,1,0.1,1000,s,o,new T.C(new Float32Array(16)),P.L(),"perspective",!1,!0)
i.ak()
h=A.kn("perspective",p,null)
h.r&=4294950911
s=[]
H.b(!0)
C.a.i(h.f,new A.br(m,[i],s,"objects",!1,!0))
g=G.ci("mat1")
g.V("uColor",$.$get$jU())
f=G.ci("mat2")
f.V("uColor",$.$get$jY())
e=G.ci("mat3")
e.V("uColor",$.$get$jX())
d=G.ci("mat4")
d.V("uColor",$.$get$jV())
c=G.ci("plane")
c.V("uColor",$.$get$jW())
o=G.ex("icosahedron-3",m,B.mb(3,1,!0))
b=new Float32Array(9)
a=new T.C(new Float32Array(16))
a.I()
a0=new T.C(new Float32Array(16))
a0.I()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
o=new A.aE(g,o,[],new T.a2(b),a,a0,new T.f(a1),new T.f(a2),new T.f(a3),new T.f(new Float32Array(3)),"sphere",!1,!0)
o.aa(0,0,0)
b=R.kp(m,1,0,1,0,1,1,1)
a=new Float32Array(9)
a0=new T.C(new Float32Array(16))
a0.I()
a1=new T.C(new Float32Array(16))
a1.I()
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
b=new A.aE(f,b,[],new T.a2(a),a0,a1,new T.f(a2),new T.f(a3),new T.f(a4),new T.f(new Float32Array(3)),"cube",!1,!0)
b.aa(-5,0,-5)
a=G.ex("cylinder-32",m,B.m0(3,6,2,32,!0))
a0=new Float32Array(9)
a1=new T.C(new Float32Array(16))
a1.I()
a2=new T.C(new Float32Array(16))
a2.I()
a3=new Float32Array(3)
a4=new Float32Array(3)
a5=new Float32Array(3)
a=new A.aE(e,a,[],new T.a2(a0),a1,a2,new T.f(a3),new T.f(a4),new T.f(a5),new T.f(new Float32Array(3)),"cylinder",!1,!0)
a.aa(5,0,-5)
a0=G.ex("torusknot",m,B.mz(!0,!0,1,2,3,1,128,16,0.4,!1))
a1=new Float32Array(9)
a2=new T.C(new Float32Array(16))
a2.I()
a3=new T.C(new Float32Array(16))
a3.I()
a4=new Float32Array(3)
a5=new Float32Array(3)
a6=new Float32Array(3)
a0=new A.aE(d,a0,[],new T.a2(a1),a2,a3,new T.f(a4),new T.f(a5),new T.f(a6),new T.f(new Float32Array(3)),"torus",!1,!0)
a0.aa(5,0,5)
a1=R.kp(m,1,0,1,0,20,0.1,20)
a2=new Float32Array(9)
a3=new T.C(new Float32Array(16))
a3.I()
a4=new T.C(new Float32Array(16))
a4.I()
a5=new Float32Array(3)
a6=new Float32Array(3)
a7=new Float32Array(3)
a1=new A.aE(c,a1,[],new T.a2(a2),a3,a4,new T.f(a5),new T.f(a6),new T.f(a7),new T.f(new Float32Array(3)),"cube",!1,!0)
a1.aa(0,-10,0)
a8=[o,b,a,a0,a1]
for(a9=0;a9<5;++a9){b0=a8[a9]
H.b(!0)
C.a.i(l,b0)
H.b(!0)
C.a.i(s,b0)}s=new K.iy(q,i,k,j,h)
s.$1(null)
W.a3(window,"resize",s,!1,W.h)
t.a=0
new K.ix(t,n,j,h,r).$1(0)},
iy:function iy(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ix:function ix(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}}
var v=[C,H,J,P,W,B,G,R,A,T,K]
setFunctionNamesIfNecessary(v)
var $={}
H.j0.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gA:function(a){return H.aF(a)},
l:function(a){return"Instance of '"+H.bq(a)+"'"},
gE:function(a){return new H.an(H.ik(a),null)}}
J.eH.prototype={
l:function(a){return String(a)},
gA:function(a){return a?519018:218159},
gE:function(a){return C.ap},
$isai:1}
J.eI.prototype={
B:function(a,b){return null==b},
l:function(a){return"null"},
gA:function(a){return 0},
gE:function(a){return C.aj},
$isN:1}
J.bl.prototype={
gA:function(a){return 0},
gE:function(a){return C.ai},
l:function(a){return String(a)},
$iske:1}
J.fm.prototype={}
J.aJ.prototype={}
J.aA.prototype={
l:function(a){var t=a[$.$get$k_()]
return t==null?this.d_(a):J.bd(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiZ:1}
J.ay.prototype={
i:function(a,b){if(!!a.fixed$length)H.K(P.u("add"))
a.push(b)},
O:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.K(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.K(P.aj(a)))
a.push(q)}},
cj:function(a,b){return new H.bm(a,b,[H.ar(a,0),null])},
av:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
ger:function(a){if(a.length>0)return a[0]
throw H.c(H.eG())},
gaI:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eG())},
bm:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.K(P.u("setRange"))
P.km(b,c,a.length,null,null,null)
t=C.b.ac(c,b)
if(t===0)return
if(e<0)H.K(P.aG(e,0,null,"skipCount",null))
s=J.W(d)
if(C.b.a_(e+t,s.gk(d)))throw H.c(H.mj())
if(C.b.a6(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bU:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.aj(a))}return!1},
cV:function(a,b){if(!!a.immutable$list)H.K(P.u("sort"))
H.mC(a,P.n7())},
bp:function(a){return this.cV(a,null)},
G:function(a,b){var t
for(t=0;t<a.length;++t)if(J.E(a[t],b))return!0
return!1},
l:function(a){return P.eF(a,"[","]")},
gC:function(a){return new J.dF(a,a.length,0,null,[H.ar(a,0)])},
gA:function(a){return H.aF(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.K(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.iU(b,"newLength",null))
if(b<0)throw H.c(P.aG(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b7(a,b))
if(b>=a.length||b<0)throw H.c(H.b7(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.K(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b7(a,b))
if(b>=a.length||b<0)throw H.c(H.b7(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isl:1,
$isi:1}
J.j_.prototype={}
J.dF.prototype={
gt:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.G(t))
r=this.c
if(r>=s){this.sbz(null)
return!1}this.sbz(t[r]);++this.c
return!0},
sbz:function(a){this.d=a}}
J.aW.prototype={
Y:function(a,b){var t
if(typeof b!=="number")throw H.c(H.R(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaG(b)
if(this.gaG(a)===t)return 0
if(this.gaG(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaG:function(a){return a===0?1/a<0:a<0},
e8:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
e9:function(a,b,c){if(this.Y(b,c)>0)throw H.c(H.R(b))
if(this.Y(a,b)<0)return b
if(this.Y(a,c)>0)return c
return a},
eT:function(a,b){var t
if(b>20)throw H.c(P.aG(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaG(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
a9:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a+b},
ac:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a-b},
bd:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a/b},
L:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a*b},
aN:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bQ(a,b)},
J:function(a,b){return(a|0)===a?a/b|0:this.bQ(a,b)},
bQ:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
b4:function(a,b){var t
if(a>0)t=this.dW(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
dW:function(a,b){return b>31?0:a>>>b},
cH:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return(a&b)>>>0},
d1:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return(a^b)>>>0},
a6:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a<b},
a_:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a>b},
be:function(a,b){if(typeof b!=="number")throw H.c(H.R(b))
return a>=b},
gE:function(a){return C.as},
$isI:1,
$asI:function(){return[P.a6]},
$isV:1,
$isa6:1}
J.cd.prototype={
gE:function(a){return C.ar},
$isy:1}
J.cc.prototype={
gE:function(a){return C.aq}}
J.az.prototype={
aT:function(a,b){if(b>=a.length)throw H.c(H.b7(a,b))
return a.charCodeAt(b)},
a9:function(a,b){if(typeof b!=="string")throw H.c(P.iU(b,null,null))
return a+b},
cW:function(a,b,c){var t
if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bq:function(a,b){return this.cW(a,b,0)},
bs:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fr(b,null,null))
if(b>c)throw H.c(P.fr(b,null,null))
if(c>a.length)throw H.c(P.fr(c,null,null))
return a.substring(b,c)},
cX:function(a,b){return this.bs(a,b,null)},
eS:function(a){return a.toLowerCase()},
eb:function(a,b,c){if(c>a.length)throw H.c(P.aG(c,0,a.length,null,null))
return H.nu(a,b,c)},
Y:function(a,b){var t
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
gE:function(a){return C.ak},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b7(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isI:1,
$asI:function(){return[P.o]},
$iso:1}
H.l.prototype={}
H.aX.prototype={
gC:function(a){return new H.cf(this,this.gk(this),0,null,[H.a5(this,"aX",0)])},
aK:function(a,b){return this.cZ(0,b)},
eR:function(a,b){var t,s
t=H.B([],[H.a5(this,"aX",0)])
C.a.sk(t,this.gk(this))
for(s=0;C.b.a6(s,this.gk(this));++s)t[s]=this.u(0,s)
return t},
eQ:function(a){return this.eR(a,!0)}}
H.cf.prototype={
gt:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.W(t)
r=s.gk(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.aj(t))
if(C.b.be(this.c,r)){this.sam(null)
return!1}this.sam(s.u(t,this.c));++this.c
return!0},
sam:function(a){this.d=a}}
H.ch.prototype={
gC:function(a){return new H.eT(null,J.aO(this.a),this.b,this.$ti)},
gk:function(a){return J.bc(this.a)},
$asS:function(a,b){return[b]}}
H.e4.prototype={$isl:1,
$asl:function(a,b){return[b]}}
H.eT.prototype={
p:function(){var t=this.b
if(t.p()){this.sam(this.c.$1(t.gt(t)))
return!0}this.sam(null)
return!1},
gt:function(a){return this.a},
sam:function(a){this.a=a},
$ascb:function(a,b){return[b]}}
H.bm.prototype={
gk:function(a){return J.bc(this.a)},
u:function(a,b){return this.b.$1(J.lv(this.a,b))},
$asl:function(a,b){return[b]},
$asaX:function(a,b){return[b]},
$asS:function(a,b){return[b]}}
H.cK.prototype={
gC:function(a){return new H.hg(J.aO(this.a),this.b,this.$ti)}}
H.hg.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gt(t)))return!0
return!1},
gt:function(a){var t=this.a
return t.gt(t)}}
H.aU.prototype={}
H.iH.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hQ.prototype={
seC:function(a){this.z=a},
seF:function(a){this.ch=a}}
H.b2.prototype={
du:function(){var t,s
t=this.e
s=t.a
this.c.i(0,s)
this.dB(s,t)},
bT:function(a,b){if(!this.f.B(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.b6()},
eL:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.aw(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bK();++r.d}this.y=!1}this.b6()},
e_:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
eK:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.K(P.u("removeRange"))
P.km(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cS:function(a,b){if(!this.r.B(0,a))return
this.db=b},
ew:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.M(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j6(null,null)
this.cx=t}t.a0(0,new H.hK(a,c))},
ev:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aH()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j6(null,null)
this.cx=t}t.a0(0,this.geD())},
ex:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a7(a)
if(b!=null)P.a7(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bd(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bA(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.M(0,s)},
aq:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.O(o)
p=H.aq(o)
this.ex(q,p)
if(this.db){this.aH()
if(this===u.globalState.e)throw o}}finally{this.cy=H.n3(r)
u.globalState.d=H.jt(t,"$isb2")
if(t!=null)$=t.geB()
if(this.cx!=null)for(;n=this.cx,!n.gau(n);)this.cx.ck().$0()}return s},
ci:function(a){return this.b.h(0,a)},
dB:function(a,b){var t=this.b
if(t.K(0,a))throw H.c(P.c5("Registry: ports must be registered only once."))
t.j(0,a,b)},
b6:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aH()},
aH:function(){var t,s,r
t=this.cx
if(t!=null)t.a3(0)
for(t=this.b,s=t.gcD(t),s=s.gC(s);s.p();)s.gt(s).dC()
t.a3(0)
this.c.a3(0)
u.globalState.z.aw(0,this.a)
this.dx.a3(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].M(0,t[r+1])
this.ch=null}},
geB:function(){return this.d},
gec:function(){return this.e}}
H.hK.prototype={
$0:function(){this.a.M(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.ht.prototype={
ej:function(){var t=this.a
if(t.b===t.c)return
return t.ck()},
cm:function(){var t,s,r
t=this.ej()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.K(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gau(s)}else s=!1
else s=!1
else s=!1
if(s)H.K(P.c5("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gau(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aC(["command","close"])
r=new H.a4(!0,P.b3(null,P.y)).P(r)
s.toString
self.postMessage(r)}return!1}t.eH()
return!0},
bO:function(){if(self.window!=null)new H.hu(this).$0()
else for(;this.cm(););},
ax:function(){var t,s,r,q,p
if(!u.globalState.x)this.bO()
else try{this.bO()}catch(r){t=H.O(r)
s=H.aq(r)
q=u.globalState.Q
p=P.aC(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a4(!0,P.b3(null,P.y)).P(p)
q.toString
self.postMessage(p)}}}
H.hu.prototype={
$0:function(){if(!this.a.cm())return
P.mF(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aM.prototype={
eH:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.aq(this.b)}}
H.hP.prototype={}
H.eD.prototype={
$0:function(){H.mf(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eE.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b8(s,{func:1,args:[P.N,P.N]}))s.$2(this.e,this.d)
else if(H.b8(s,{func:1,args:[P.N]}))s.$1(this.e)
else s.$0()}t.b6()},
$S:function(){return{func:1,v:true}}}
H.ho.prototype={}
H.b4.prototype={
M:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mS(b)
if(t.gec()===s){s=J.W(r)
switch(s.h(r,0)){case"pause":t.bT(s.h(r,1),s.h(r,2))
break
case"resume":t.eL(s.h(r,1))
break
case"add-ondone":t.e_(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eK(s.h(r,1))
break
case"set-errors-fatal":t.cS(s.h(r,1),s.h(r,2))
break
case"ping":t.ew(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ev(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aw(0,s)
break}return}u.globalState.f.a.a0(0,new H.aM(t,new H.hR(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b4){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gA:function(a){return this.b.a}}
H.hR.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dz(0,this.b)},
$S:function(){return{func:1}}}
H.bL.prototype={
M:function(a,b){var t,s,r
t=P.aC(["command","message","port",this,"msg",b])
s=new H.a4(!0,P.b3(null,P.y)).P(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bL){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){return C.b.d1((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cv.prototype={
dC:function(){this.c=!0
this.b=null},
dz:function(a,b){if(this.c)return
this.b.$1(b)},
$ismv:1}
H.h_.prototype={
dk:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.a0(0,new H.aM(s,new H.h0(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.ih()
this.c=self.setTimeout(H.bP(new H.h1(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.h0.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h1.prototype={
$0:function(){var t=this.a
t.c=null
H.iw()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.au.prototype={
gA:function(a){var t=this.a
t=C.b.b4(t,0)^C.b.J(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.au){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a4.prototype={
P:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gk(t))
t=J.v(a)
if(!!t.$isbo)return["buffer",a]
if(!!t.$isb_)return["typed",a]
if(!!t.$isp)return this.cO(a)
if(!!t.$ismc){r=this.gcL()
q=t.gH(a)
q=H.j7(q,r,H.a5(q,"S",0),null)
q=P.kg(q,!0,H.a5(q,"S",0))
t=t.gcD(a)
t=H.j7(t,r,H.a5(t,"S",0),null)
return["map",q,P.kg(t,!0,H.a5(t,"S",0))]}if(!!t.$iske)return this.cP(a)
if(!!t.$isa)this.cB(a)
if(!!t.$ismv)this.ay(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb4)return this.cQ(a)
if(!!t.$isbL)return this.cR(a)
if(!!t.$isaw){p=a.$static_name
if(p==null)this.ay(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isau)return["capability",a.a]
if(!(a instanceof P.F))this.cB(a)
return["dart",u.classIdExtractor(a),this.cN(u.classFieldsExtractor(a))]},
ay:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cB:function(a){return this.ay(a,null)},
cO:function(a){var t
H.b(typeof a!=="string")
t=this.cM(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ay(a,"Can't serialize indexable: ")},
cM:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.P(a[s])
return t},
cN:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.P(a[t]))
return a},
cP:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ay(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.P(a[t[r]])
return["js-object",t,s]},
cR:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cQ:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aL.prototype={
a4:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.jM("Bad serialized message: "+H.e(a)))
switch(C.a.ger(a)){case"ref":H.b(J.E(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.E(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.b(J.E(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.b(J.E(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
return J.al(H.B(this.ap(t),[null]))
case"extendable":H.b(J.E(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.B(this.ap(t),[null])
case"mutable":H.b(J.E(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.ap(t)
case"const":H.b(J.E(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
return J.al(H.B(this.ap(t),[null]))
case"map":return this.em(a)
case"sendport":return this.en(a)
case"raw sendport":H.b(J.E(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.el(a)
case"function":H.b(J.E(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.b(J.E(a[0],"capability"))
return new H.au(a[1])
case"dart":H.b(J.E(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.i(this.b,q)
this.ap(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ap:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a4(a[t]))
return a},
em:function(a){var t,s,r,q,p
H.b(J.E(a[0],"map"))
t=a[1]
s=a[2]
r=P.L()
C.a.i(this.b,r)
t=J.lH(t,this.gek()).eQ(0)
for(q=J.W(s),p=0;p<t.length;++p)r.j(0,t[p],this.a4(q.h(s,p)))
return r},
en:function(a){var t,s,r,q,p,o,n
H.b(J.E(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ci(r)
if(o==null)return
n=new H.b4(o,s)}else n=new H.bL(t,r,s)
C.a.i(this.b,n)
return n},
el:function(a){var t,s,r,q,p,o
H.b(J.E(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.W(t),p=J.W(s),o=0;C.b.a6(o,q.gk(t));++o)r[q.h(t,o)]=this.a4(p.h(s,o))
return r}}
H.fu.prototype={}
H.h5.prototype={
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
H.fb.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eK.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.h9.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iJ.prototype={
$1:function(a){if(!!J.v(a).$isaT)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.da.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb0:1}
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
H.aw.prototype={
l:function(a){return"Closure '"+H.bq(this).trim()+"'"},
$isiZ:1,
geW:function(){return this},
$D:null}
H.fW.prototype={}
H.fJ.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.be.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.be))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var t,s
t=this.c
if(t==null)s=H.aF(this.a)
else s=typeof t!=="object"?J.bb(t):H.aF(t)
return(s^H.aF(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bq(t)+"'")}}
H.h7.prototype={
l:function(a){return this.a}}
H.dK.prototype={
l:function(a){return this.a}}
H.fz.prototype={
l:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hi.prototype={
l:function(a){return C.i.a9("Assertion failed: ",P.c4(this.a))}}
H.an.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gA:function(a){return J.bb(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.an){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aa.prototype={
gk:function(a){return this.a},
gau:function(a){return this.a===0},
gH:function(a){return new H.eN(this,[H.ar(this,0)])},
gcD:function(a){return H.j7(this.gH(this),new H.eJ(this),H.ar(this,0),H.ar(this,1))},
K:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bH(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bH(s,b)}else return this.ey(b)},
ey:function(a){var t=this.d
if(t==null)return!1
return this.at(this.aD(t,this.as(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.an(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.an(r,b)
return s==null?null:s.b}else return this.ez(b)},
ez:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aD(t,this.as(a))
r=this.at(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b0()
this.b=t}this.bB(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b0()
this.c=s}this.bB(s,b,c)}else{r=this.d
if(r==null){r=this.b0()
this.d=r}q=this.as(b)
p=this.aD(r,q)
if(p==null)this.b3(r,q,[this.b1(b,c)])
else{o=this.at(p,b)
if(o>=0)p[o].b=c
else p.push(this.b1(b,c))}}},
aw:function(a,b){if(typeof b==="string")return this.bN(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bN(this.c,b)
else return this.eA(b)},
eA:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aD(t,this.as(a))
r=this.at(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bR(q)
return q.b},
a3:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.b_()}},
ar:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.c(P.aj(this))
t=t.c}},
bB:function(a,b,c){var t=this.an(a,b)
if(t==null)this.b3(a,b,this.b1(b,c))
else t.b=c},
bN:function(a,b){var t
if(a==null)return
t=this.an(a,b)
if(t==null)return
this.bR(t)
this.bI(a,b)
return t.b},
b_:function(){this.r=this.r+1&67108863},
b1:function(a,b){var t,s
t=new H.eM(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.b_()
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
this.b_()},
as:function(a){return J.bb(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1},
l:function(a){return P.kh(this)},
an:function(a,b){return a[b]},
aD:function(a,b){return a[b]},
b3:function(a,b,c){H.b(c!=null)
a[b]=c},
bI:function(a,b){delete a[b]},
bH:function(a,b){return this.an(a,b)!=null},
b0:function(){var t=Object.create(null)
this.b3(t,"<non-identifier-key>",t)
this.bI(t,"<non-identifier-key>")
return t},
$ismc:1}
H.eJ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eM.prototype={}
H.eN.prototype={
gk:function(a){return this.a.a},
gC:function(a){var t,s
t=this.a
s=new H.eO(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eO.prototype={
gt:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aj(t))
else{t=this.c
if(t==null){this.sbA(null)
return!1}else{this.sbA(t.a)
this.c=this.c.c
return!0}}},
sbA:function(a){this.d=a}}
H.im.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.io.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.o]}}}
H.ip.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.o]}}}
H.bo.prototype={
gE:function(a){return C.ab},
$isbo:1}
H.b_.prototype={$isb_:1}
H.f1.prototype={
gE:function(a){return C.ac}}
H.cl.prototype={
gk:function(a){return a.length},
$isp:1,
$asp:function(){},
$ist:1,
$ast:function(){}}
H.cm.prototype={
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.V]},
$asaU:function(){return[P.V]},
$asm:function(){return[P.V]},
$isi:1,
$asi:function(){return[P.V]}}
H.cn.prototype={
j:function(a,b,c){H.ag(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.y]},
$asaU:function(){return[P.y]},
$asm:function(){return[P.y]},
$isi:1,
$asi:function(){return[P.y]}}
H.ck.prototype={
gE:function(a){return C.ad},
$ises:1}
H.f2.prototype={
gE:function(a){return C.ae}}
H.f3.prototype={
gE:function(a){return C.af},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.f4.prototype={
gE:function(a){return C.ag},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskb:1}
H.f5.prototype={
gE:function(a){return C.ah},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.f6.prototype={
gE:function(a){return C.al},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskD:1}
H.f7.prototype={
gE:function(a){return C.am},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskE:1}
H.co.prototype={
gE:function(a){return C.an},
gk:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]}}
H.f8.prototype={
gE:function(a){return C.ao},
gk:function(a){return a.length},
h:function(a,b){H.ag(b,a,a.length)
return a[b]},
$iskF:1}
H.bC.prototype={}
H.bD.prototype={}
H.bE.prototype={}
H.bF.prototype={}
P.hk.prototype={
$1:function(a){var t,s
H.iw()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hj.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.ih()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hl.prototype={
$0:function(){H.iw()
this.a.$0()},
$S:function(){return{func:1}}}
P.hm.prototype={
$0:function(){H.iw()
this.a.$0()},
$S:function(){return{func:1}}}
P.iW.prototype={}
P.hp.prototype={}
P.i2.prototype={
ea:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.ja("Future already completed"))
t.aW(b)}}
P.cT.prototype={
eG:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bc(this.d,a.a)},
eu:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b8(s,{func:1,args:[P.F,P.b0]}))return t.eM(s,a.a,a.b)
else return t.bc(s,a.a)}}
P.af.prototype={
co:function(a,b){var t,s,r
t=$.A
if(t!==C.f){t.toString
if(b!=null)b=P.mW(b,t)}s=new P.af(0,t,null,[null])
r=b==null?1:3
this.bC(new P.cT(null,s,r,a,b,[H.ar(this,0),null]))
return s},
cn:function(a){return this.co(a,null)},
aS:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bC:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jt(this.c,"$iscT")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bC(a)
return}this.aS(t)}H.b(this.a>=4)
t=this.b
t.toString
P.ia(null,null,t,new P.hz(this,a))}},
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
return}this.aS(s)}H.b(this.a>=4)
t.a=this.aE(a)
s=this.b
s.toString
P.ia(null,null,s,new P.hD(t,this))}},
b2:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aE(t)},
aE:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aW:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.ib(a,"$isew",t,"$asew")
if(s){t=H.ib(a,"$isaf",t,null)
if(t)P.kJ(a,this)
else P.mN(a,this)}else{r=this.b2()
H.b(this.a<4)
this.a=4
this.c=a
P.by(this,r)}},
aA:function(a,b){var t
H.b(this.a<4)
t=this.b2()
H.b(this.a<4)
this.a=8
this.c=new P.aP(a,b)
P.by(this,t)},
dE:function(a){return this.aA(a,null)},
$isew:1,
gb5:function(){return this.a},
gdT:function(){return this.c}}
P.hz.prototype={
$0:function(){P.by(this.a,this.b)},
$S:function(){return{func:1}}}
P.hD.prototype={
$0:function(){P.by(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hA.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aW(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hB.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.aA(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hC.prototype={
$0:function(){this.a.aA(this.b,this.c)},
$S:function(){return{func:1}}}
P.hG.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cl(q.d)}catch(n){s=H.O(n)
r=H.aq(n)
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
return}if(!!J.v(t).$isew){if(t instanceof P.af&&t.gb5()>=4){if(t.gb5()===8){q=t
H.b(q.gb5()===8)
p=this.b
p.b=q.gdT()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cn(new P.hH(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hH.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hF.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bc(r.d,this.c)}catch(q){t=H.O(q)
s=H.aq(q)
r=this.a
r.b=new P.aP(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hE.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eG(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eu(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.aq(o)
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
P.cL.prototype={}
P.fO.prototype={
gk:function(a){var t,s
t={}
s=new P.af(0,$.A,null,[P.y])
t.a=0
this.eE(new P.fQ(t),!0,new P.fR(t,s),s.gdD())
return s}}
P.fQ.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fR.prototype={
$0:function(){this.b.aW(this.a.a)},
$S:function(){return{func:1}}}
P.fP.prototype={}
P.jb.prototype={}
P.aP.prototype={
l:function(a){return H.e(this.a)},
$isaT:1}
P.i6.prototype={}
P.i9.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cs()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.hT.prototype={
eN:function(a){var t,s,r
try{if(C.f===$.A){a.$0()
return}P.kP(null,null,this,a)}catch(r){t=H.O(r)
s=H.aq(r)
P.i8(null,null,this,t,s)}},
eO:function(a,b){var t,s,r
try{if(C.f===$.A){a.$1(b)
return}P.kQ(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.aq(r)
P.i8(null,null,this,t,s)}},
e5:function(a){return new P.hV(this,a)},
b7:function(a){return new P.hU(this,a)},
e6:function(a){return new P.hW(this,a)},
h:function(a,b){return},
cl:function(a){if($.A===C.f)return a.$0()
return P.kP(null,null,this,a)},
bc:function(a,b){if($.A===C.f)return a.$1(b)
return P.kQ(null,null,this,a,b)},
eM:function(a,b,c){if($.A===C.f)return a.$2(b,c)
return P.mX(null,null,this,a,b,c)}}
P.hV.prototype={
$0:function(){return this.a.cl(this.b)},
$S:function(){return{func:1}}}
P.hU.prototype={
$0:function(){return this.a.eN(this.b)},
$S:function(){return{func:1}}}
P.hW.prototype={
$1:function(a){return this.a.eO(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hN.prototype={
as:function(a){return H.nn(a)&0x3ffffff},
at:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hL.prototype={
gC:function(a){var t=new P.bA(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
G:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dF(b)},
dF:function(a){var t=this.d
if(t==null)return!1
return this.aC(t[this.aB(a)],a)>=0},
ci:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.G(0,a)?a:null
else return this.dN(a)},
dN:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aB(a)]
r=this.aC(s,a)
if(r<0)return
return J.ba(s,r).gdH()},
i:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jl()
this.b=t}return this.bE(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jl()
this.c=s}return this.bE(s,b)}else return this.a0(0,b)},
a0:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jl()
this.d=t}s=this.aB(b)
r=t[s]
if(r==null){q=[this.aV(b)]
H.b(q!=null)
t[s]=q}else{if(this.aC(r,b)>=0)return!1
r.push(this.aV(b))}return!0},
aw:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bF(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bF(this.c,b)
else return this.dO(0,b)},
dO:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aB(b)]
r=this.aC(s,b)
if(r<0)return!1
this.bG(s.splice(r,1)[0])
return!0},
a3:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aU()}},
bE:function(a,b){var t
if(a[b]!=null)return!1
t=this.aV(b)
H.b(!0)
a[b]=t
return!0},
bF:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bG(t)
delete a[b]
return!0},
aU:function(){this.r=this.r+1&67108863},
aV:function(a){var t,s
t=new P.hM(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aU()
return t},
bG:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aU()},
aB:function(a){return J.bb(a)&0x3ffffff},
aC:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.E(a[s].a,b))return s
return-1}}
P.hM.prototype={
gdH:function(){return this.a}}
P.bA.prototype={
gt:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.aj(t))
else{t=this.c
if(t==null){this.sal(null)
return!1}else{this.sal(t.a)
this.c=this.c.b
return!0}}},
sal:function(a){this.d=a}}
P.hJ.prototype={}
P.j4.prototype={$isl:1}
P.ce.prototype={$isl:1,$isi:1}
P.m.prototype={
gC:function(a){return new H.cf(a,this.gk(a),0,null,[H.a5(a,"m",0)])},
u:function(a,b){return this.h(a,b)},
cj:function(a,b){return new H.bm(a,b,[H.a5(a,"m",0),null])},
es:function(a,b,c){var t,s,r,q
t=this.gk(a)
for(s=b,r=0;C.b.a6(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gk(a)
if(t==null?q!=null:t!==q)throw H.c(P.aj(a))}return s},
l:function(a){return P.eF(a,"[","]")}}
P.cg.prototype={}
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
P.aZ.prototype={
ar:function(a,b){var t,s
for(t=J.aO(this.gH(a));t.p();){s=t.gt(t)
b.$2(s,this.h(a,s))}},
gk:function(a){return J.bc(this.gH(a))},
l:function(a){return P.kh(a)}}
P.eP.prototype={
dd:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbP(H.B(t,[b]))},
gC:function(a){return new P.hO(this,this.c,this.d,this.b,null,this.$ti)},
gau:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=this.gk(this)
if(C.b.a_(0,b)||b>=t)H.K(P.z(b,this,"index",null,t))
return this.a[(C.b.a9(this.b,b)&this.a.length-1)>>>0]},
a3:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eF(this,"{","}")},
ck:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eG());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
a0:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bK();++this.d},
bK:function(){var t,s,r,q
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
this.sbP(s)},
sbP:function(a){this.a=a}}
P.hO.prototype={
gt:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.K(P.aj(t))
s=this.d
if(s===this.b){this.sal(null)
return!1}this.sal(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sal:function(a){this.e=a}}
P.fC.prototype={
O:function(a,b){var t
for(t=J.aO(b);t.p();)this.i(0,t.gt(t))},
l:function(a){return P.eF(this,"{","}")},
$isl:1}
P.fB.prototype={}
P.bB.prototype={}
P.ai.prototype={}
P.I.prototype={}
P.bf.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bf))return!1
return this.a===b.a&&this.b===b.b},
Y:function(a,b){return C.b.Y(this.a,b.a)},
gA:function(a){var t=this.a
return(t^C.b.b4(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.m1(H.mu(this))
s=P.bY(H.ms(this))
r=P.bY(H.mo(this))
q=P.bY(H.mp(this))
p=P.bY(H.mr(this))
o=P.bY(H.mt(this))
n=P.m2(H.mq(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.bf]}}
P.V.prototype={}
P.ax.prototype={
a6:function(a,b){return C.b.a6(this.a,b.gdG())},
a_:function(a,b){return C.b.a_(this.a,b.gdG())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.ax))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
Y:function(a,b){return C.b.Y(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.e3()
s=this.a
if(s<0)return"-"+new P.ax(0-s).l(0)
r=t.$1(C.b.J(s,6e7)%60)
q=t.$1(C.b.J(s,1e6)%60)
p=new P.e2().$1(s%1e6)
return""+C.b.J(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isI:1,
$asI:function(){return[P.ax]}}
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
l:function(a){return"Assertion failed"}}
P.cs.prototype={
l:function(a){return"Throw of null."}}
P.Y.prototype={
gaY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaX:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.e(t)
q=this.gaY()+s+r
if(!this.a)return q
p=this.gaX()
o=P.c4(this.b)
return q+p+": "+H.e(o)}}
P.cu.prototype={
gaY:function(){return"RangeError"},
gaX:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eC.prototype={
gaY:function(){return"RangeError"},
gaX:function(){H.b(this.a)
if(J.le(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gk:function(a){return this.f}}
P.ha.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.h8.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b1.prototype={
l:function(a){return"Bad state: "+this.a}}
P.dM.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.c4(t))+"."}}
P.cA.prototype={
l:function(a){return"Stack Overflow"},
$isaT:1}
P.dV.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iY.prototype={}
P.hy.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.e6.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.K(P.iU(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kj(b,"expando$values")
return s==null?null:H.kj(s,t)},
l:function(a){return"Expando:"+H.e(this.b)}}
P.y.prototype={}
P.S.prototype={
aK:function(a,b){return new H.cK(this,b,[H.a5(this,"S",0)])},
gk:function(a){var t,s
H.b(!this.$isl)
t=this.gC(this)
for(s=0;t.p();)++s
return s},
gab:function(a){var t,s
t=this.gC(this)
if(!t.p())throw H.c(H.eG())
s=t.gt(t)
if(t.p())throw H.c(H.mk())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.lT("index"))
if(b<0)H.K(P.aG(b,0,null,"index",null))
for(t=this.gC(this),s=0;t.p();){r=t.gt(t)
if(b===s)return r;++s}throw H.c(P.z(b,this,"index",null,s))},
l:function(a){return P.mi(this,"(",")")}}
P.cb.prototype={}
P.i.prototype={$isl:1}
P.aY.prototype={}
P.N.prototype={
gA:function(a){return P.F.prototype.gA.call(this,this)},
l:function(a){return"null"}}
P.a6.prototype={$isI:1,
$asI:function(){return[P.a6]}}
P.F.prototype={constructor:P.F,$isF:1,
B:function(a,b){return this===b},
gA:function(a){return H.aF(this)},
l:function(a){return"Instance of '"+H.bq(this)+"'"},
gE:function(a){return new H.an(H.ik(this),null)},
toString:function(){return this.l(this)}}
P.b0.prototype={}
P.o.prototype={$isI:1,
$asI:function(){return[P.o]}}
P.bt.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gad:function(){return this.a}}
P.je.prototype={}
W.j.prototype={}
W.bU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dC.prototype={
gk:function(a){return a.length}}
W.dD.prototype={
l:function(a){return String(a)}}
W.dE.prototype={
l:function(a){return String(a)}}
W.at.prototype={$isat:1}
W.bW.prototype={
cI:function(a,b,c){var t=this.dJ(a,b,P.n6(c,null))
return t},
dJ:function(a,b,c){return a.getContext(b,c)}}
W.dJ.prototype={
aL:function(a){return P.id(a.getContextAttributes())}}
W.av.prototype={
gk:function(a){return a.length}}
W.dN.prototype={
gk:function(a){return a.length}}
W.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dQ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.aR.prototype={
bD:function(a,b){var t,s
t=$.$get$jZ()
s=t[b]
if(typeof s==="string")return s
s=this.dX(a,b)
t[b]=s
return s},
dX:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m3()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.dR.prototype={}
W.Z.prototype={}
W.aS.prototype={}
W.dS.prototype={
gk:function(a){return a.length}}
W.dT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.dU.prototype={
gk:function(a){return a.length}}
W.dW.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.bZ.prototype={}
W.bg.prototype={
e0:function(a,b){return a.adoptNode(b)},
cJ:function(a,b){return a.getElementById(b)},
eI:function(a,b){return a.querySelector(b)}}
W.dY.prototype={
l:function(a){return String(a)}}
W.c_.prototype={
eg:function(a,b){return a.createHTMLDocument(b)}}
W.dZ.prototype={
gW:function(a){return a.a},
gR:function(a){return a.b},
ga2:function(a){return a.c}}
W.c0.prototype={
gW:function(a){return a.a},
gR:function(a){return a.b},
ga2:function(a){return a.c}}
W.e_.prototype={
gaJ:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c1.prototype={
gaJ:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.T]},
$isl:1,
$asl:function(){return[P.T]},
$ist:1,
$ast:function(){return[P.T]},
$asm:function(){return[P.T]},
$isi:1,
$asi:function(){return[P.T]},
$asn:function(){return[P.T]}}
W.c3.prototype={
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gah(a))+" x "+H.e(this.gaf(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isT)return!1
return a.left===t.gcf(b)&&a.top===t.gcp(b)&&this.gah(a)===t.gah(b)&&this.gaf(a)===t.gaf(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gah(a)
q=this.gaf(a)
return W.kN(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaf:function(a){return a.height},
gcf:function(a){return a.left},
gcp:function(a){return a.top},
gah:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isT:1,
$asT:function(){}}
W.e0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.o]},
$isl:1,
$asl:function(){return[P.o]},
$ist:1,
$ast:function(){return[P.o]},
$asm:function(){return[P.o]},
$isi:1,
$asi:function(){return[P.o]},
$asn:function(){return[P.o]}}
W.e1.prototype={
gk:function(a){return a.length}}
W.a_.prototype={
ge3:function(a){return new W.hs(a)},
l:function(a){return a.localName},
S:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.k6
if(t==null){t=H.B([],[W.cq])
s=new W.cr(t)
C.a.i(t,W.kK(null))
C.a.i(t,W.kO())
$.k6=s
d=s}else d=t
t=$.k5
if(t==null){t=new W.dk(d)
$.k5=t
c=t}else{t.a=d
c=t}}if($.ak==null){t=document
s=t.implementation
s=(s&&C.I).eg(s,"")
$.ak=s
$.iX=s.createRange()
s=$.ak
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ak.head;(t&&C.J).X(t,r)}t=$.ak
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jt(s,"$isat")}t=$.ak
if(!!this.$isat)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ak.body;(t&&C.n).X(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.G(C.T,a.tagName)){t=$.iX;(t&&C.B).cK(t,q)
t=$.iX
p=(t&&C.B).ee(t,b)}else{q.innerHTML=b
p=$.ak.createDocumentFragment()
for(t=J.k(p);s=q.firstChild,s!=null;)t.X(p,s)}t=$.ak.body
if(q==null?t!=null:q!==t)J.jG(q)
c.bl(p)
C.p.e0(document,p)
return p},
ef:function(a,b,c){return this.S(a,b,c,null)},
cU:function(a,b,c,d){a.textContent=null
this.X(a,this.S(a,b,c,d))},
cT:function(a,b){return this.cU(a,b,null,null)},
ai:function(a,b){return a.getAttribute(b)},
dP:function(a,b){return a.removeAttribute(b)},
$isa_:1,
geP:function(a){return a.tagName}}
W.e5.prototype={
$1:function(a){return!!J.v(a).$isa_},
$S:function(a){return{func:1,args:[,]}}}
W.h.prototype={$ish:1}
W.d.prototype={
dA:function(a,b,c,d){return a.addEventListener(b,H.bP(c,1),!1)}}
W.ep.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.c6]},
$isl:1,
$asl:function(){return[W.c6]},
$ist:1,
$ast:function(){return[W.c6]},
$asm:function(){return[W.c6]},
$isi:1,
$asi:function(){return[W.c6]},
$asn:function(){return[W.c6]}}
W.eq.prototype={
gk:function(a){return a.length}}
W.eu.prototype={
gk:function(a){return a.length}}
W.ey.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.c9.prototype={}
W.ez.prototype={
gk:function(a){return a.length}}
W.bj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ca.prototype={}
W.eA.prototype={
M:function(a,b){return a.send(b)}}
W.bk.prototype={}
W.aB.prototype={$isaB:1}
W.eQ.prototype={
l:function(a){return String(a)}}
W.eR.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gF:function(a){return a.z}}
W.eX.prototype={
gk:function(a){return a.length}}
W.eZ.prototype={
eX:function(a,b,c){return a.send(b,c)},
M:function(a,b){return a.send(b)}}
W.bn.prototype={}
W.f_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cj]},
$isl:1,
$asl:function(){return[W.cj]},
$ist:1,
$ast:function(){return[W.cj]},
$asm:function(){return[W.cj]},
$isi:1,
$asi:function(){return[W.cj]},
$asn:function(){return[W.cj]}}
W.M.prototype={$isM:1}
W.Q.prototype={
gab:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.ja("No elements"))
if(s>1)throw H.c(P.ja("More than one element"))
return t.firstChild},
O:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.k(s),p=0;p<r;++p)q.X(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lg(t,c,C.z.h(t.childNodes,b))},
gC:function(a){var t=this.a.childNodes
return new W.c7(t,t.length,-1,null,[H.a5(t,"n",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$asl:function(){return[W.r]},
$asce:function(){return[W.r]},
$asm:function(){return[W.r]},
$asi:function(){return[W.r]},
$asbB:function(){return[W.r]}}
W.r.prototype={
eJ:function(a){var t=a.parentNode
if(t!=null)J.iK(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.cY(a):t},
X:function(a,b){return a.appendChild(b)},
dQ:function(a,b){return a.removeChild(b)},
dR:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gba:function(a){return a.previousSibling}}
W.cp.prototype={
bb:function(a){return a.previousNode()}}
W.bp.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ab.prototype={
gk:function(a){return a.length}}
W.fn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ab]},
$isl:1,
$asl:function(){return[W.ab]},
$ist:1,
$ast:function(){return[W.ab]},
$asm:function(){return[W.ab]},
$isi:1,
$asi:function(){return[W.ab]},
$asn:function(){return[W.ab]}}
W.fq.prototype={
M:function(a,b){return a.send(b)}}
W.ct.prototype={
ee:function(a,b){return a.createContextualFragment(b)},
cK:function(a,b){return a.selectNodeContents(b)}}
W.cw.prototype={
M:function(a,b){return a.send(b)}}
W.fA.prototype={
gk:function(a){return a.length}}
W.am.prototype={}
W.fF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cy]},
$isl:1,
$asl:function(){return[W.cy]},
$ist:1,
$ast:function(){return[W.cy]},
$asm:function(){return[W.cy]},
$isi:1,
$asi:function(){return[W.cy]},
$asn:function(){return[W.cy]}}
W.fH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cz]},
$isl:1,
$asl:function(){return[W.cz]},
$ist:1,
$ast:function(){return[W.cz]},
$asm:function(){return[W.cz]},
$isi:1,
$asi:function(){return[W.cz]},
$asn:function(){return[W.cz]}}
W.ac.prototype={
gk:function(a){return a.length}}
W.fM.prototype={
h:function(a,b){return this.bJ(a,b)},
ar:function(a,b){var t,s
for(t=0;!0;++t){s=this.dM(a,t)
if(s==null)return
b.$2(s,this.bJ(a,s))}},
gH:function(a){var t=H.B([],[P.o])
this.ar(a,new W.fN(t))
return t},
gk:function(a){return a.length},
bJ:function(a,b){return a.getItem(b)},
dM:function(a,b){return a.key(b)},
$asaZ:function(){return[P.o,P.o]}}
W.fN.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cC.prototype={
S:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
t=W.m5("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.Q(s).O(0,new W.Q(t))
return s}}
W.fU.prototype={
S:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.S(t.createElement("table"),b,c,d)
t.toString
t=new W.Q(t)
r=t.gab(t)
r.toString
t=new W.Q(r)
q=t.gab(t)
s.toString
q.toString
new W.Q(s).O(0,new W.Q(q))
return s}}
W.fV.prototype={
S:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aM(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.S(t.createElement("table"),b,c,d)
t.toString
t=new W.Q(t)
r=t.gab(t)
s.toString
r.toString
new W.Q(s).O(0,new W.Q(r))
return s}}
W.bu.prototype={$isbu:1}
W.fX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cE]},
$isl:1,
$asl:function(){return[W.cE]},
$ist:1,
$ast:function(){return[W.cE]},
$asm:function(){return[W.cE]},
$isi:1,
$asi:function(){return[W.cE]},
$asn:function(){return[W.cE]}}
W.fY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cD]},
$isl:1,
$asl:function(){return[W.cD]},
$ist:1,
$ast:function(){return[W.cD]},
$asm:function(){return[W.cD]},
$isi:1,
$asi:function(){return[W.cD]},
$asn:function(){return[W.cD]}}
W.fZ.prototype={
gk:function(a){return a.length}}
W.aH.prototype={$isaH:1}
W.h2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cH]},
$isl:1,
$asl:function(){return[W.cH]},
$ist:1,
$ast:function(){return[W.cH]},
$asm:function(){return[W.cH]},
$isi:1,
$asi:function(){return[W.cH]},
$asn:function(){return[W.cH]}}
W.h3.prototype={
gk:function(a){return a.length}}
W.cI.prototype={
bb:function(a){return a.previousNode()}}
W.aI.prototype={}
W.hb.prototype={
l:function(a){return String(a)}}
W.hd.prototype={
gm:function(a){return a.x},
gF:function(a){return a.z}}
W.he.prototype={
gk:function(a){return a.length}}
W.hf.prototype={
M:function(a,b){return a.send(b)}}
W.aK.prototype={
gei:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaK:1}
W.bx.prototype={
ge2:function(a){var t,s
t=P.a6
s=new P.af(0,$.A,null,[t])
this.dI(a)
this.dS(a,W.kT(new W.hh(new P.i2(s,[t]))))
return s},
dS:function(a,b){return a.requestAnimationFrame(H.bP(b,1))},
dI:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hh.prototype={
$1:function(a){this.a.ea(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jg.prototype={}
W.hq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.bX]},
$isl:1,
$asl:function(){return[W.bX]},
$ist:1,
$ast:function(){return[W.bX]},
$asm:function(){return[W.bX]},
$isi:1,
$asi:function(){return[W.bX]},
$asn:function(){return[W.bX]}}
W.hr.prototype={
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isT)return!1
return a.left===t.gcf(b)&&a.top===t.gcp(b)&&a.width===t.gah(b)&&a.height===t.gaf(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kN(W.aN(W.aN(W.aN(W.aN(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gaf:function(a){return a.height},
gah:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.c8]},
$isl:1,
$asl:function(){return[W.c8]},
$ist:1,
$ast:function(){return[W.c8]},
$asm:function(){return[W.c8]},
$isi:1,
$asi:function(){return[W.c8]},
$asn:function(){return[W.c8]}}
W.d_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isi:1,
$asi:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.i_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ac]},
$isl:1,
$asl:function(){return[W.ac]},
$ist:1,
$ast:function(){return[W.ac]},
$asm:function(){return[W.ac]},
$isi:1,
$asi:function(){return[W.ac]},
$asn:function(){return[W.ac]}}
W.i0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.cB]},
$isl:1,
$asl:function(){return[W.cB]},
$ist:1,
$ast:function(){return[W.cB]},
$asm:function(){return[W.cB]},
$isi:1,
$asi:function(){return[W.cB]},
$asn:function(){return[W.cB]}}
W.hn.prototype={
ar:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.k(r),p=0;p<t.length;t.length===s||(0,H.G)(t),++p){o=t[p]
b.$2(o,q.ai(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.o])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
$ascg:function(){return[P.o,P.o]},
$asaZ:function(){return[P.o,P.o]},
gdK:function(){return this.a}}
W.hs.prototype={
h:function(a,b){return J.iS(this.a,b)},
gk:function(a){return this.gH(this).length}}
W.hv.prototype={
eE:function(a,b,c,d){return W.a3(this.a,this.b,a,!1,H.ar(this,0))}}
W.jj.prototype={}
W.hw.prototype={
ds:function(a,b,c,d,e){this.dZ()},
dZ:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lf(r,this.c,t,!1)}}}
W.hx.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bz.prototype={
dt:function(a){var t,s
t=$.$get$jk()
if(t.gau(t)){for(s=0;s<262;++s)t.j(0,C.S[s],W.nc())
for(s=0;s<12;++s)t.j(0,C.r[s],W.nd())}},
ae:function(a){return $.$get$kL().G(0,W.bh(a))},
a1:function(a,b,c){var t,s,r
t=W.bh(a)
s=$.$get$jk()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gC:function(a){return new W.c7(a,this.gk(a),-1,null,[H.a5(a,"n",0)])}}
W.cr.prototype={
ae:function(a){return C.a.bU(this.a,new W.fa(a))},
a1:function(a,b,c){return C.a.bU(this.a,new W.f9(a,b,c))}}
W.fa.prototype={
$1:function(a){return a.ae(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.f9.prototype={
$1:function(a){return a.a1(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bG.prototype={
dw:function(a,b,c,d){var t,s,r
this.a.O(0,c)
t=b.aK(0,new W.hY())
s=b.aK(0,new W.hZ())
this.b.O(0,t)
r=this.c
r.O(0,C.U)
r.O(0,s)},
ae:function(a){return this.a.G(0,W.bh(a))},
a1:function(a,b,c){var t,s
t=W.bh(a)
s=this.c
if(s.G(0,H.e(t)+"::"+b))return this.d.e1(c)
else if(s.G(0,"*::"+b))return this.d.e1(c)
else{s=this.b
if(s.G(0,H.e(t)+"::"+b))return!0
else if(s.G(0,"*::"+b))return!0
else if(s.G(0,H.e(t)+"::*"))return!0
else if(s.G(0,"*::*"))return!0}return!1}}
W.hY.prototype={
$1:function(a){return!C.a.G(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hZ.prototype={
$1:function(a){return C.a.G(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i3.prototype={
a1:function(a,b,c){if(this.d0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iS(a,"template")==="")return this.e.G(0,b)
return!1}}
W.i4.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.i1.prototype={
ae:function(a){var t=J.v(a)
if(!!t.$isbs)return!1
t=!!t.$isw
if(t&&W.bh(a)==="foreignObject")return!1
if(t)return!0
return!1},
a1:function(a,b,c){if(b==="is"||C.i.bq(b,"on"))return!1
return this.ae(a)}}
W.c7.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbL(J.ba(this.a,t))
this.c=t
return!0}this.sbL(null)
this.c=s
return!1},
gt:function(a){return this.d},
sbL:function(a){this.d=a}}
W.cq.prototype={}
W.j8.prototype={}
W.jf.prototype={}
W.hX.prototype={}
W.dk.prototype={
bl:function(a){new W.i5(this).$2(a,null)},
ao:function(a,b){if(b==null)J.jG(a)
else J.iK(b,a)},
dV:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.ly(a)
r=J.iS(s.gdK(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.bd(a)}catch(n){H.O(n)}try{o=W.bh(a)
this.dU(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.Y)throw n
else{this.ao(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
dU:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ao(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.ae(a)){this.ao(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.a1(a,"is",g)){this.ao(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gH(f)
s=H.B(t.slice(0),[H.ar(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.k(t);r>=0;--r){p=s[r]
if(!this.a.a1(a,J.lK(p),q.ai(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.ai(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ai(t,p)
q.dP(t,p)}}if(!!J.v(a).$isbu)this.bl(a.content)}}
W.i5.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.dV(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ao(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lz(t)}catch(q){H.O(q)
r=t
J.iK(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.cM.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.cP.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.bH.prototype={}
W.bI.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.db.prototype={}
W.de.prototype={}
W.df.prototype={}
W.bJ.prototype={}
W.bK.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
P.ic.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hS.prototype={}
P.T.prototype={}
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
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a1.prototype={}
P.a9.prototype={}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eL.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a5(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a5:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.j3]},
$asm:function(){return[P.j3]},
$isi:1,
$asi:function(){return[P.j3]},
$asn:function(){return[P.j3]}}
P.eU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eW.prototype={
gW:function(a){return a.a},
gR:function(a){return a.b},
ga2:function(a){return a.c}}
P.fc.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a5(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a5:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.j9]},
$asm:function(){return[P.j9]},
$isi:1,
$asi:function(){return[P.j9]},
$asn:function(){return[P.j9]}}
P.fk.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fp.prototype={
gk:function(a){return a.length}}
P.fs.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ft.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bs.prototype={$isbs:1}
P.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a5(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a5:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.o]},
$asm:function(){return[P.o]},
$isi:1,
$asi:function(){return[P.o]},
$asn:function(){return[P.o]}}
P.w.prototype={
S:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.cq])
C.a.i(t,W.kK(null))
C.a.i(t,W.kO())
C.a.i(t,new W.i1())
c=new W.dk(new W.cr(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).ef(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.Q(q)
o=t.gab(t)
for(t=J.k(p);r=o.firstChild,r!=null;)t.X(p,r)
return p},
$isw:1}
P.fT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bv.prototype={}
P.bw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a5(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a5:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jd]},
$asm:function(){return[P.jd]},
$isi:1,
$asi:function(){return[P.jd]},
$asn:function(){return[P.jd]}}
P.hc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cW.prototype={}
P.cX.prototype={}
P.d2.prototype={}
P.d3.prototype={}
P.dc.prototype={}
P.dd.prototype={}
P.di.prototype={}
P.dj.prototype={}
P.dG.prototype={
gk:function(a){return a.length}}
P.dH.prototype={
gk:function(a){return a.length}}
P.aQ.prototype={}
P.fd.prototype={
gk:function(a){return a.length}}
P.fx.prototype={
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c1:function(a,b){return a.clear(b)},
c2:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c3:function(a,b){return a.compileShader(b)},
c4:function(a){return a.createBuffer()},
c5:function(a){return a.createProgram()},
c6:function(a,b){return a.createShader(b)},
c8:function(a,b){return a.depthMask(b)},
c9:function(a,b){return a.disable(b)},
ca:function(a,b,c,d){return a.drawArrays(b,c,d)},
cb:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cc:function(a,b){return a.enable(b)},
cd:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a){return P.id(a.getContextAttributes())},
bf:function(a,b){return a.getProgramInfoLog(b)},
bg:function(a,b,c){return a.getProgramParameter(b,c)},
bh:function(a,b){return a.getShaderInfoLog(b)},
bi:function(a,b,c){return a.getShaderParameter(b,c)},
bj:function(a,b,c){return a.getUniformLocation(b,c)},
cg:function(a,b){return a.linkProgram(b)},
bo:function(a,b,c){return a.shaderSource(b,c)},
br:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
P.fy.prototype={
e4:function(a,b){return a.beginTransformFeedback(b)},
e7:function(a,b){return a.bindVertexArray(b)},
eh:function(a){return a.createVertexArray()},
eo:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ep:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eq:function(a){return a.endTransformFeedback()},
eU:function(a,b,c,d){this.dY(a,b,c,d)
return},
dY:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eV:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bS:function(a,b){return a.activeTexture(b)},
bV:function(a,b,c){return a.attachShader(b,c)},
bW:function(a,b,c){return a.bindBuffer(b,c)},
bX:function(a,b,c){return a.bindFramebuffer(b,c)},
bY:function(a,b,c){return a.bindTexture(b,c)},
bZ:function(a,b){return a.blendEquation(b)},
c_:function(a,b,c){return a.blendFunc(b,c)},
c0:function(a,b,c,d){return a.bufferData(b,c,d)},
c1:function(a,b){return a.clear(b)},
c2:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c3:function(a,b){return a.compileShader(b)},
c4:function(a){return a.createBuffer()},
c5:function(a){return a.createProgram()},
c6:function(a,b){return a.createShader(b)},
c8:function(a,b){return a.depthMask(b)},
c9:function(a,b){return a.disable(b)},
ca:function(a,b,c,d){return a.drawArrays(b,c,d)},
cb:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cc:function(a,b){return a.enable(b)},
cd:function(a,b){return a.enableVertexAttribArray(b)},
aL:function(a){return P.id(a.getContextAttributes())},
bf:function(a,b){return a.getProgramInfoLog(b)},
bg:function(a,b,c){return a.getProgramParameter(b,c)},
bh:function(a,b){return a.getShaderInfoLog(b)},
bi:function(a,b,c){return a.getShaderParameter(b,c)},
bj:function(a,b,c){return a.getUniformLocation(b,c)},
cg:function(a,b){return a.linkProgram(b)},
bo:function(a,b,c){return a.shaderSource(b,c)},
br:function(a,b,c,d){return a.stencilFunc(b,c,d)},
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
P.fI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return P.id(this.dL(a,b))},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
dL:function(a,b){return a.item(b)},
$isl:1,
$asl:function(){return[P.aY]},
$asm:function(){return[P.aY]},
$isi:1,
$asi:function(){return[P.aY]},
$asn:function(){return[P.aY]}}
P.d8.prototype={}
P.d9.prototype={}
B.iC.prototype={
$1:function(a){$.$get$ie().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aB]}}}
B.iD.prototype={
$1:function(a){$.$get$ie().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aB]}}}
B.iE.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.n4=t
$.n5=C.b.ac(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jw=s-C.b.J(window.innerWidth,2)
$.l4=-(t-C.b.J(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.M]}}}
B.iF.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bS=t-C.b.J(window.innerWidth,2)
$.bT=-(s-C.b.J(window.innerHeight,2))
if(a.button===2)$.$get$bQ().j(0,"right",!0)
else $.$get$bQ().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.M]}}}
B.iG.prototype={
$1:function(a){if(a.button===2)$.$get$bQ().j(0,"right",null)
else $.$get$bQ().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.M]}}}
B.fe.prototype={
df:function(a,b,c,d){var t
d.toString
W.a3(d,W.m6(d),new B.ff(this),!1,W.aK)
W.a3(d,"mousemove",new B.fg(this),!1,W.M)
t=W.aH
W.a3(d,"touchstart",new B.fh(),!1,t)
W.a3(d,"touchmove",new B.fi(this),!1,t)
B.nr(null)}}
B.ff.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.gei(a)*r.k3
if(C.c.ac(r.fy,t)>0)r.fy=C.c.ac(r.fy,t)}catch(q){s=H.O(q)
P.a7(s)}},
$S:function(a){return{func:1,args:[W.aK]}}}
B.fg.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.ac($.jw,$.bS)*0.01
s=t.id
r=$.bT
q=$.l4
t.id=s+(r-q)*0.01
$.bS=$.jw
$.bT=q}},
$S:function(a){return{func:1,args:[W.M]}}}
B.fh.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ag(t.clientX)
C.c.ag(t.clientY)
$.bS=s
C.c.ag(t.clientX)
$.bT=C.c.ag(t.clientY)},
$S:function(a){return{func:1,args:[W.aH]}}}
B.fi.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ag(t.clientX)
t=C.c.ag(t.clientY)
r=this.a
r.go=r.go+C.b.ac(s,$.bS)*0.01
r.id=r.id+($.bT-t)*0.01
$.bS=s
$.bT=t},
$S:function(a){return{func:1,args:[W.aH]}}}
G.f0.prototype={}
G.cJ.prototype={
V:function(a,b){var t=this.d
if(H.ah(!t.K(0,a)))H.ap("uniform "+a+" already set")
t.j(0,a,b)},
aR:function(){return this.d},
l:function(a){var t,s,r,q
t=H.B(["{"+new H.an(H.ik(this),null).l(0)+"}["+this.a+"]"],[P.o])
for(s=this.d,r=s.gH(s),r=r.gC(r);r.p();){q=r.gt(r)
C.a.i(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.av(t,"\n")}}
G.dI.prototype={
bk:function(a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=this.d
a2.v(t)
s=a2.a
s[12]=0
s[13]=0
s[14]=0
s[15]=1
t=t.a
r=-t[12]
q=-t[13]
p=-t[14]
t=J.v(r)
o=!!t.$isao
n=o?t.gaJ(r):1
if(!!t.$isf){m=t.gm(r)
q=t.gn(r)
p=t.gF(r)
r=m}else if(o){m=t.gm(r)
q=t.gn(r)
p=t.gF(r)
r=m}else if(!(typeof r==="number")){r=null
q=null
p=null}t=C.c.L(s[0],r)
o=C.c.L(s[4],q)
l=C.c.L(s[8],p)
k=s[12]
j=C.c.L(s[1],r)
i=C.c.L(s[5],q)
h=C.c.L(s[9],p)
g=s[13]
f=C.c.L(s[2],r)
e=C.c.L(s[6],q)
d=C.c.L(s[10],p)
c=s[14]
b=C.c.L(s[3],r)
a=C.c.L(s[7],q)
a0=C.c.L(s[11],p)
a1=s[15]
s[12]=t+o+l+k*n
s[13]=j+i+h+g*n
s[14]=f+e+d+c*n
s[15]=b+a+a0+a1*n}}
G.dL.prototype={
ce:function(a,b,c){J.lw(this.a,b)
if(c>0)J.lQ(this.a,b,c)},
cF:function(a,b,c,d,e,f,g,h){J.iM(this.a,34962,b)
J.lR(this.a,c,d,e,!1,g,h)}}
G.ev.prototype={}
G.a0.prototype={
gW:function(a){return this.a},
gR:function(a){return this.b},
ga2:function(a){return this.c}}
G.bi.prototype={
gW:function(a){return this.a},
gR:function(a){return this.b},
ga2:function(a){return this.c}}
G.aV.prototype={
a8:function(a){var t=this.e
H.b(!t.K(0,a))
H.b(C.i.bq(a,"a"))
switch($.$get$U().h(0,a).a){case"vec2":t.j(0,a,H.B([],[T.q]))
break
case"vec3":t.j(0,a,H.B([],[T.f]))
break
case"vec4":t.j(0,a,H.B([],[T.ao]))
break
case"float":t.j(0,a,H.B([],[P.V]))
break
case"uvec4":t.j(0,a,H.B([],[[P.i,P.y]]))
break
default:if(H.ah(!1))H.ap("unknown type for "+a)}},
d3:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.bi(t,t+1,t+2,t+3))},
bu:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=a[r]
p=new T.f(new Float32Array(3))
p.v(q)
C.a.i(s,p)}},
d4:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.a0(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.f(new Float32Array(3))
p.v(q)
C.a.i(t,p)}},
aO:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.G)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.q(o))}},
aP:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.G)(b),++q){p=b[q]
o=new T.f(new Float32Array(3))
o.v(p)
r.i(t,o)}},
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
d9:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.j(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.i(s,new T.q(m))}H.b(s.length===t)},
d8:function(a,b,c){var t,s,r,q,p,o,n,m,l
H.b(this.d.length===a*b)
t=this.c
s=a-1
r=b-1
q=0
while(!0){if(!(q<r))break
p=q*a
o=q+1
n=0
while(!0){if(!(n<s))break
m=n+1
l=o*a
H.b(!0)
C.a.i(t,new G.bi(p+m,l+m,l+n,p+n))
n=m}q=o}},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gC(r);r.p();){q=r.gt(r)
p=$.$get$U().h(0,q).a
C.a.i(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.av(t," ")}}
G.cG.prototype={}
G.cF.prototype={}
G.eV.prototype={
de:function(a){this.V("cDepthTest",!0)
this.V("cDepthWrite",!0)
this.V("cBlendEquation",$.$get$jN())
this.V("cStencilFunc",$.$get$kq())}}
G.eY.prototype={
bv:function(a,b,c){var t,s
if(C.i.aT(a,0)===105){if(H.ah(C.b.aN(b.length,c)===this.z))H.ap("ChangeAttribute "+this.z)}else{t=C.b.aN(b.length,c)
if(H.ah(t===(this.ch.length/3|0)))H.ap("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iM(t.a,34962,s)
J.jC(t.a,34962,b,35048)},
da:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
aj:function(a,b,c){var t,s,r,q,p,o
t=J.jy(a,0)===105
if(t&&this.z===0)this.z=C.b.aN(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.iO(r.a))
this.bv(a,b,c)
q=$.$get$U().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ah(p.K(0,a)))H.ap("unexpected attribute "+a)
o=p.h(0,a)
J.dA(r.a,this.e)
r.ce(0,o,t?1:0)
r.cF(0,s.h(0,a),o,q.bx(),5126,!1,0,0)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gH(t),r=r.gC(r);r.p();){q=r.gt(r)
C.a.i(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.av(s,"  ")},
saZ:function(a){this.cx=a}}
G.fj.prototype={
aR:function(){var t,s
t=this.z
this.x.bk(t)
s=this.Q
s.v(this.y)
s.b9(0,t)
t=this.d
t.j(0,"uPerspectiveViewMatrix",s)
return t},
ak:function(){var t,s,r,q,p,o,n,m,l,k
t=this.cy
s=this.cx
r=t-s
q=this.y
p=this.db
o=p+r/this.ch
n=this.dx
m=this.dy
l=o-p
k=m-n
q.bn()
q.N(0,0,2/r)
q.N(1,1,2/l)
q.N(2,2,-2/k)
q.N(0,3,-(t+s)/r)
q.N(1,3,-(o+p)/l)
q.N(2,3,-(m+n)/k)
q.N(3,3,1)},
aQ:function(a,b){var t=C.b.bd(a,b)
if(this.ch===t)return
this.ch=t
this.ak()}}
G.fl.prototype={
aQ:function(a,b){var t=C.b.bd(a,b)
if(this.z===t)return
this.z=t
this.ak()},
ak:function(){var t,s,r,q,p,o
t=this.db
s=this.z
r=this.Q
q=this.ch
p=Math.tan(this.y*3.141592653589793/180*0.5)
o=r-q
t.bn()
t.N(0,0,1/(p*s))
t.N(1,1,1/p)
t.N(2,2,(q+r)/o)
t.N(3,2,-1)
t.N(2,3,2*r*q/o)},
aR:function(){var t,s,r,q,p
t=this.x
s=t.d.a
r=s[12]
q=s[13]
s=s[14]
p=new T.f(new Float32Array(3))
p.q(r,q,s)
s=this.d
s.j(0,"uEyePosition",p)
p=this.cy
t.bk(p)
t=this.cx
t.v(this.db)
t.b9(0,p)
s.j(0,"uPerspectiveViewMatrix",t)
return s}}
G.fw.prototype={
dh:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
r.j(0,n,J.jF(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
r.j(0,n,J.jF(q.a,p,n))}},
dl:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gC(s);s.p();){q=s.gt(s)
if(!t.K(0,q))C.a.i(r,q)}for(t=this.x,s=new P.bA(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.G(0,q))C.a.i(r,q)}return r},
dq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gC(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gt(s)
switch(J.jy(n,0)){case 117:if(q.K(0,n)){m=b.h(0,n)
if(p.K(0,n))H.iA("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$U().h(0,n)
if(l==null)H.K("unknown "+n)
H.b(q.K(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iT(r.a,k,m)
else if(!!J.v(m).$iskb)J.lO(r.a,k,m)
break
case"float":if(l.c===0)J.lM(r.a,k,m)
else if(!!J.v(m).$ises)J.lN(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.as(m,"$isC").a
J.jL(r.a,k,!1,n)}else if(!!J.v(m).$ises)J.jL(r.a,k,!1,m)
else if(H.ah(!1))H.ap("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.as(m,"$isa2").a
J.jK(r.a,k,!1,n)}else if(!!J.v(m).$ises)J.jK(r.a,k,!1,m)
else if(H.ah(!1))H.ap("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jJ(j,k,H.as(m,"$isao").a)
else J.jJ(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jI(j,k,H.as(m,"$isf").a)
else J.jI(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jH(j,k,H.as(m,"$isq").a)
else J.jH(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a9(33984,this.ch)
J.jz(r.a,n)
n=H.as(m,"$ismD").dc()
J.jB(r.a,3553,n)
n=this.ch
J.iT(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a9(33984,this.ch)
J.jz(r.a,n)
n=H.as(m,"$ismD").dc()
J.jB(r.a,34067,n)
n=this.ch
J.iT(r.a,k,n)
this.ch=this.ch+1
break
default:H.iA("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.E(m,!0)
j=r.a
if(n)J.dB(j,2929)
else J.iP(j,2929)
break
case"cStencilFunc":H.as(m,"$iscG")
n=m.a
j=r.a
if(n===1281)J.iP(j,2960)
else{J.dB(j,2960)
j=m.b
i=m.c
J.lJ(r.a,n,j,i)}break
case"cDepthWrite":J.lq(r.a,m)
break
case"cBlendEquation":H.as(m,"$iscF")
n=m.a
j=r.a
if(n===1281)J.iP(j,3042)
else{J.dB(j,3042)
j=m.b
i=m.c
J.lk(r.a,j,i)
J.lj(r.a,n)}break}++o
break}}h=P.m4(0,0,0,Date.now()-new P.bf(t,!1).a,0,0)
""+o
h.l(0)},
d6:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lP(t.a,this.r)
this.ch=0
this.z.a3(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r){q=b[r]
this.dq(q.a,q.aR())}s=this.Q
s.a3(0)
for(p=a.cy,p=p.gH(p),p=p.gC(p);p.p();)s.i(0,p.gt(p))
o=this.dl()
if(o.length!==0)P.a7("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dA(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.da()
m=a.Q
l=a.z
if(n)J.lh(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.lu(k,s,p,m,0,l)
else J.lt(k,s,p,m,0)}else{m=t.a
if(l>1)J.ls(m,s,0,p,l)
else J.lr(m,s,0,p)}if(n)J.lx(t.a)}}
G.x.prototype={
bx:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fD.prototype={
d2:function(a){var t,s,r,q
H.b(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.b($.$get$U().K(0,q))
H.b(!C.a.G(t,q))
C.a.i(t,q)
s.j(0,q,this.r);++this.r}C.a.bp(t)},
bt:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=a[r]
if(H.ah($.$get$U().K(0,q)))H.ap("missing uniform "+q)
H.b(!C.a.G(s,q))
C.a.i(s,q)}C.a.bp(s)},
di:function(a,b){H.b(this.b==null)
this.b=this.dr(!0,a,b)},
by:function(a){return this.di(a,null)},
dr:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
m=$.$get$U().h(0,n)
C.a.i(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$U().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$U().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.e(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$U().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.i(q,"")
C.a.i(q,"void main(void) {")
C.a.O(q,b)
C.a.i(q,"}")
return C.a.av(q,"\n")}}
G.fG.prototype={
aa:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
R.fK.prototype={
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
J.iL(this.a,s)
r=this.dv(b,c,90,30)
this.d=r
J.iL(this.a,r)
t=t.createElement("div")
this.c=t
J.iL(this.a,t)},
dv:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mM("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bD(r,"float")
r.setProperty(p,"left","")
p=C.u.bD(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.X(t,s)}return t}}
R.fL.prototype={
dn:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eT(s,2)+" fps"
t=this.c;(t&&C.o).cT(t,b)
r=C.b.J(30*C.w.e8(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).X(t,q)},
dm:function(a){return this.dn(a,"")}}
A.aE.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.br.prototype={}
A.fv.prototype={
dg:function(a,b,c){if(this.d==null)this.d=new G.ev(this.e,null,null,null,null)},
d5:function(a){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.r
r=this.x
q=this.z
p=this.Q
o=t.a
t=t.b
J.li(o.a,36160,t)
H.b(q>0&&p>0)
J.lS(o.a,r,this.y,q,p)
if(s!==0)J.ll(o.a,s)
for(t=this.f,s=t.length,n=0;n<t.length;t.length===s||(0,H.G)(t),++n){m=t[n]
l=m.e
C.a.i(l,new G.cJ(P.L(),"transforms",!1,!0))
k=new T.C(new Float32Array(16))
k.I()
for(r=m.f,q=r.length,p=m.d,j=0;j<r.length;r.length===q||(0,H.G)(r),++j)A.kY(p,r[j],k,a,l)
l.pop()}},
bw:function(){return this.d5(null)}}
B.fE.prototype={
$2:function(a,b){var t,s,r,q,p,o
t=this.c
s=this.a*a
r=Math.cos(s)
q=Math.sin(s)
s=this.b*a
p=Math.cos(s)
o=Math.sin(s)
s=t*(2+r)*0.5
b.sm(0,s*p)
b.sn(0,s*o)
b.sF(0,this.d*t*0.5*q)},
$S:function(a,b){return{func:1,v:true,args:[P.V,T.f]}}}
A.il.prototype={
$2:function(a,b){var t=536870911&a+J.bb(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.y,P.F]}}}
T.a2.prototype={
v:function(a){var t,s
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
l:function(a){return"[0] "+this.Z(0).l(0)+"\n[1] "+this.Z(1).l(0)+"\n[2] "+this.Z(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a2){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gA:function(a){return A.dx(this.a)},
Z:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.f(t)},
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
if(g===0){this.v(a)
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
T.C.prototype={
N:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
v:function(a){var t,s
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
l:function(a){return"[0] "+this.Z(0).l(0)+"\n[1] "+this.Z(1).l(0)+"\n[2] "+this.Z(2).l(0)+"\n[3] "+this.Z(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.C){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gA:function(a){return A.dx(this.a)},
Z:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ao(t)},
bn:function(){var t=this.a
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
I:function(){var t=this.a
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
b9:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.q.prototype={
w:function(a,b){var t=this.a
t[0]=a
t[1]=b},
l:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.q){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gA:function(a){return A.dx(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.f.prototype={
q:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
v:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.f){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gA:function(a){return A.dx(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gT())},
gT:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
D:function(a){var t,s,r
t=Math.sqrt(this.gT())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b8:function(a){var t,s
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
t=new T.f(new Float32Array(3))
t.q(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aF:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
az:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a7:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sF:function(a,b){this.a[2]=b
return b},
gR:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]}}
T.ao.prototype={
l:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ao){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gA:function(a){return A.dx(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gR:function(a){return this.a[2]},
gW:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gF:function(a){return this.a[2]},
gaJ:function(a){return this.a[3]}}
K.iy.prototype={
$1:function(a){var t,s,r,q,p
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a7("size change "+H.e(s)+" "+H.e(r))
t=C.b.J(s,2)
this.b.aQ(t,r)
this.c.aQ(t,r)
q=this.d
q.z=t
q.Q=r
p=this.e
p.z=t
p.Q=r
q.x=t},
$S:function(a){return{func:1,v:true,args:[W.h]}}}
K.ix.prototype={
$1:function(b6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
t=this.a
t.a=b6+0
s=this.b
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
s.aa(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
n=r[12]
m=r[13]
l=r[14]
k=new T.f(new Float32Array(3))
k.q(0,1,0)
q=s.e
j=q.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
j=new Float32Array(3)
i=new T.f(j)
i.v(q)
i.az(0,p)
i.D(0)
h=k.c7(i)
h.D(0)
g=i.c7(h)
g.D(0)
p=h.b8(q)
f=g.b8(q)
q=i.b8(q)
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
r[15]=1
r[14]=-q
r[13]=-f
r[12]=-p
r[11]=0
r[10]=j
r[9]=c
r[8]=e
r[7]=0
r[6]=a2
r[5]=a1
r[4]=a0
r[3]=0
r[2]=a
r[1]=b
r[0]=d
r[12]=n
r[13]=m
r[14]=l
d=s.f
b=d.a
b[0]=r[2]
b[1]=r[6]
b[2]=r[10]
s=-s.k1
a3=Math.sqrt(d.gT())
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
s=r[0]
b=r[4]
d=r[8]
a=r[1]
a0=r[5]
a1=r[9]
a2=r[2]
e=r[6]
c=r[10]
j=r[3]
p=r[7]
f=r[11]
r[0]=s*a7+b*b0+d*b3
r[1]=a*a7+a0*b0+a1*b3
r[2]=a2*a7+e*b0+c*b3
r[3]=j*a7+p*b0+f*b3
r[4]=s*a8+b*b1+d*b4
r[5]=a*a8+a0*b1+a1*b4
r[6]=a2*a8+e*b1+c*b4
r[7]=j*a8+p*b1+f*b4
r[8]=s*a9+b*b2+d*b5
r[9]=a*a9+a0*b2+a1*b5
r[10]=a2*a9+e*b2+c*b5
r[11]=j*a9+p*b2+f*b5
this.c.bw()
this.d.bw()
C.au.ge2(window).cn(this)
this.e.dm(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a6]}}}
J.a.prototype.cY=J.a.prototype.l
J.bl.prototype.d_=J.bl.prototype.l
P.S.prototype.cZ=P.S.prototype.aK
W.a_.prototype.aM=W.a_.prototype.S
W.bG.prototype.d0=W.bG.prototype.a1;(function installTearOffs(){installTearOff(H.b2.prototype,"geD",0,0,0,null,["$0"],["aH"],0)
installTearOff(H.a4.prototype,"gcL",0,0,0,null,["$1"],["P"],2)
installTearOff(H.aL.prototype,"gek",0,0,0,null,["$1"],["a4"],2)
installTearOff(P,"n0",1,0,0,null,["$1"],["mJ"],1)
installTearOff(P,"n1",1,0,0,null,["$1"],["mK"],1)
installTearOff(P,"n2",1,0,0,null,["$1"],["mL"],1)
installTearOff(P,"kX",1,0,0,null,["$0"],["mZ"],0)
installTearOff(P.af.prototype,"gdD",0,0,0,null,["$2","$1"],["aA","dE"],5)
installTearOff(P,"n7",1,0,0,null,["$2"],["lZ"],6)
installTearOff(W,"nc",1,0,0,null,["$4"],["mP"],4)
installTearOff(W,"nd",1,0,0,null,["$4"],["mQ"],4)
installTearOff(W.cp.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(W.cI.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(K,"l5",1,0,0,null,["$0"],["nl"],0)})();(function inheritance(){inherit(P.F,null)
var t=P.F
inherit(H.j0,t)
inherit(J.a,t)
inherit(J.dF,t)
inherit(P.S,t)
inherit(H.cf,t)
inherit(P.cb,t)
inherit(H.aU,t)
inherit(H.aw,t)
inherit(H.hQ,t)
inherit(H.b2,t)
inherit(H.ht,t)
inherit(H.aM,t)
inherit(H.hP,t)
inherit(H.ho,t)
inherit(H.cv,t)
inherit(H.h_,t)
inherit(H.au,t)
inherit(H.a4,t)
inherit(H.aL,t)
inherit(H.fu,t)
inherit(H.h5,t)
inherit(P.aT,t)
inherit(H.da,t)
inherit(H.an,t)
inherit(P.aZ,t)
inherit(H.eM,t)
inherit(H.eO,t)
inherit(P.iW,t)
inherit(P.hp,t)
inherit(P.cT,t)
inherit(P.af,t)
inherit(P.cL,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.jb,t)
inherit(P.aP,t)
inherit(P.i6,t)
inherit(P.fC,t)
inherit(P.hM,t)
inherit(P.bA,t)
inherit(P.j4,t)
inherit(P.bB,t)
inherit(P.m,t)
inherit(P.hO,t)
inherit(P.ai,t)
inherit(P.I,t)
inherit(P.bf,t)
inherit(P.a6,t)
inherit(P.ax,t)
inherit(P.cA,t)
inherit(P.iY,t)
inherit(P.hy,t)
inherit(P.e6,t)
inherit(P.i,t)
inherit(P.aY,t)
inherit(P.N,t)
inherit(P.b0,t)
inherit(P.o,t)
inherit(P.bt,t)
inherit(P.je,t)
inherit(W.dR,t)
inherit(W.bz,t)
inherit(W.n,t)
inherit(W.cr,t)
inherit(W.bG,t)
inherit(W.i1,t)
inherit(W.c7,t)
inherit(W.cq,t)
inherit(W.j8,t)
inherit(W.jf,t)
inherit(W.hX,t)
inherit(W.dk,t)
inherit(P.hS,t)
inherit(G.f0,t)
inherit(G.dL,t)
inherit(G.ev,t)
inherit(G.a0,t)
inherit(G.bi,t)
inherit(G.aV,t)
inherit(G.cG,t)
inherit(G.cF,t)
inherit(G.x,t)
inherit(G.fD,t)
inherit(R.fK,t)
inherit(T.a2,t)
inherit(T.C,t)
inherit(T.q,t)
inherit(T.f,t)
inherit(T.ao,t)
t=J.a
inherit(J.eH,t)
inherit(J.eI,t)
inherit(J.bl,t)
inherit(J.ay,t)
inherit(J.aW,t)
inherit(J.az,t)
inherit(H.bo,t)
inherit(H.b_,t)
inherit(W.d,t)
inherit(W.dC,t)
inherit(W.dJ,t)
inherit(W.aS,t)
inherit(W.Z,t)
inherit(W.cM,t)
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.c_,t)
inherit(W.c0,t)
inherit(W.c1,t)
inherit(W.cN,t)
inherit(W.c3,t)
inherit(W.cP,t)
inherit(W.e1,t)
inherit(W.h,t)
inherit(W.cR,t)
inherit(W.ez,t)
inherit(W.cU,t)
inherit(W.eQ,t)
inherit(W.eX,t)
inherit(W.cY,t)
inherit(W.cp,t)
inherit(W.d0,t)
inherit(W.ab,t)
inherit(W.d4,t)
inherit(W.ct,t)
inherit(W.d6,t)
inherit(W.ac,t)
inherit(W.db,t)
inherit(W.de,t)
inherit(W.fZ,t)
inherit(W.dg,t)
inherit(W.h3,t)
inherit(W.cI,t)
inherit(W.hb,t)
inherit(W.hd,t)
inherit(W.dl,t)
inherit(W.dn,t)
inherit(W.dq,t)
inherit(W.ds,t)
inherit(W.du,t)
inherit(P.cW,t)
inherit(P.eW,t)
inherit(P.d2,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.fs,t)
inherit(P.dc,t)
inherit(P.di,t)
inherit(P.dG,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.d8,t)
t=J.bl
inherit(J.fm,t)
inherit(J.aJ,t)
inherit(J.aA,t)
inherit(J.j_,J.ay)
t=J.aW
inherit(J.cd,t)
inherit(J.cc,t)
t=P.S
inherit(H.l,t)
inherit(H.ch,t)
inherit(H.cK,t)
t=H.l
inherit(H.aX,t)
inherit(H.eN,t)
inherit(H.e4,H.ch)
t=P.cb
inherit(H.eT,t)
inherit(H.hg,t)
t=H.aX
inherit(H.bm,t)
inherit(P.eP,t)
t=H.aw
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.hK,t)
inherit(H.hu,t)
inherit(H.eD,t)
inherit(H.eE,t)
inherit(H.hR,t)
inherit(H.h0,t)
inherit(H.h1,t)
inherit(H.iJ,t)
inherit(H.ir,t)
inherit(H.is,t)
inherit(H.it,t)
inherit(H.iu,t)
inherit(H.iv,t)
inherit(H.fW,t)
inherit(H.eJ,t)
inherit(H.im,t)
inherit(H.io,t)
inherit(H.ip,t)
inherit(P.hk,t)
inherit(P.hj,t)
inherit(P.hl,t)
inherit(P.hm,t)
inherit(P.hz,t)
inherit(P.hD,t)
inherit(P.hA,t)
inherit(P.hB,t)
inherit(P.hC,t)
inherit(P.hG,t)
inherit(P.hH,t)
inherit(P.hF,t)
inherit(P.hE,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.i9,t)
inherit(P.hV,t)
inherit(P.hU,t)
inherit(P.hW,t)
inherit(P.eS,t)
inherit(P.e2,t)
inherit(P.e3,t)
inherit(W.e5,t)
inherit(W.fN,t)
inherit(W.hh,t)
inherit(W.hx,t)
inherit(W.fa,t)
inherit(W.f9,t)
inherit(W.hY,t)
inherit(W.hZ,t)
inherit(W.i4,t)
inherit(W.i5,t)
inherit(P.ic,t)
inherit(B.iC,t)
inherit(B.iD,t)
inherit(B.iE,t)
inherit(B.iF,t)
inherit(B.iG,t)
inherit(B.ff,t)
inherit(B.fg,t)
inherit(B.fh,t)
inherit(B.fi,t)
inherit(B.fE,t)
inherit(A.il,t)
inherit(K.iy,t)
inherit(K.ix,t)
t=H.ho
inherit(H.b4,t)
inherit(H.bL,t)
t=P.aT
inherit(H.fb,t)
inherit(H.eK,t)
inherit(H.h9,t)
inherit(H.h7,t)
inherit(H.dK,t)
inherit(H.fz,t)
inherit(P.bV,t)
inherit(P.cs,t)
inherit(P.Y,t)
inherit(P.ha,t)
inherit(P.h8,t)
inherit(P.b1,t)
inherit(P.dM,t)
inherit(P.dV,t)
t=H.fW
inherit(H.fJ,t)
inherit(H.be,t)
inherit(H.hi,P.bV)
inherit(P.cg,P.aZ)
t=P.cg
inherit(H.aa,t)
inherit(W.hn,t)
t=H.b_
inherit(H.f1,t)
inherit(H.cl,t)
t=H.cl
inherit(H.bC,t)
inherit(H.bE,t)
inherit(H.bD,H.bC)
inherit(H.cm,H.bD)
inherit(H.bF,H.bE)
inherit(H.cn,H.bF)
t=H.cm
inherit(H.ck,t)
inherit(H.f2,t)
t=H.cn
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.f6,t)
inherit(H.f7,t)
inherit(H.co,t)
inherit(H.f8,t)
inherit(P.i2,P.hp)
inherit(P.hT,P.i6)
inherit(P.hN,H.aa)
inherit(P.fB,P.fC)
inherit(P.hJ,P.fB)
inherit(P.hL,P.hJ)
inherit(P.ce,P.bB)
t=P.a6
inherit(P.V,t)
inherit(P.y,t)
t=P.Y
inherit(P.cu,t)
inherit(P.eC,t)
t=W.d
inherit(W.r,t)
inherit(W.am,t)
inherit(W.eq,t)
inherit(W.bk,t)
inherit(W.bn,t)
inherit(W.fq,t)
inherit(W.cw,t)
inherit(W.bH,t)
inherit(W.bJ,t)
inherit(W.he,t)
inherit(W.hf,t)
inherit(W.bx,t)
inherit(W.jg,t)
inherit(P.dH,t)
inherit(P.aQ,t)
t=W.r
inherit(W.a_,t)
inherit(W.av,t)
inherit(W.bg,t)
t=W.a_
inherit(W.j,t)
inherit(P.w,t)
t=W.am
inherit(W.bU,t)
inherit(W.ey,t)
inherit(W.eR,t)
t=W.j
inherit(W.dD,t)
inherit(W.dE,t)
inherit(W.at,t)
inherit(W.bW,t)
inherit(W.bZ,t)
inherit(W.eu,t)
inherit(W.c9,t)
inherit(W.fA,t)
inherit(W.cC,t)
inherit(W.fU,t)
inherit(W.fV,t)
inherit(W.bu,t)
t=W.aS
inherit(W.dN,t)
inherit(W.dP,t)
inherit(W.dQ,t)
inherit(W.dT,t)
t=W.Z
inherit(W.dO,t)
inherit(W.dS,t)
inherit(W.dU,t)
inherit(W.aR,W.cM)
inherit(W.dZ,W.c0)
inherit(W.e_,W.c1)
inherit(W.cO,W.cN)
inherit(W.c2,W.cO)
inherit(W.cQ,W.cP)
inherit(W.e0,W.cQ)
inherit(W.cS,W.cR)
inherit(W.ep,W.cS)
inherit(W.cV,W.cU)
inherit(W.bj,W.cV)
inherit(W.ca,W.bg)
inherit(W.eA,W.bk)
inherit(W.aI,W.h)
t=W.aI
inherit(W.aB,t)
inherit(W.M,t)
inherit(W.aH,t)
inherit(W.eZ,W.bn)
inherit(W.cZ,W.cY)
inherit(W.f_,W.cZ)
inherit(W.Q,P.ce)
inherit(W.d1,W.d0)
inherit(W.bp,W.d1)
inherit(W.d5,W.d4)
inherit(W.fn,W.d5)
inherit(W.bI,W.bH)
inherit(W.fF,W.bI)
inherit(W.d7,W.d6)
inherit(W.fH,W.d7)
inherit(W.fM,W.db)
inherit(W.df,W.de)
inherit(W.fX,W.df)
inherit(W.bK,W.bJ)
inherit(W.fY,W.bK)
inherit(W.dh,W.dg)
inherit(W.h2,W.dh)
inherit(W.aK,W.M)
inherit(W.dm,W.dl)
inherit(W.hq,W.dm)
inherit(W.hr,W.c3)
inherit(W.dp,W.dn)
inherit(W.hI,W.dp)
inherit(W.dr,W.dq)
inherit(W.d_,W.dr)
inherit(W.dt,W.ds)
inherit(W.i_,W.dt)
inherit(W.dv,W.du)
inherit(W.i0,W.dv)
inherit(W.hs,W.hn)
inherit(W.hv,P.fO)
inherit(W.jj,W.hv)
inherit(W.hw,P.fP)
inherit(W.i3,W.bG)
inherit(P.T,P.hS)
t=P.w
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
inherit(P.er,t)
inherit(P.a9,t)
inherit(P.eU,t)
inherit(P.fk,t)
inherit(P.bs,t)
t=P.a9
inherit(P.et,t)
inherit(P.a1,t)
inherit(P.eB,t)
inherit(P.fT,t)
inherit(P.bv,t)
inherit(P.hc,t)
inherit(P.cX,P.cW)
inherit(P.eL,P.cX)
inherit(P.d3,P.d2)
inherit(P.fc,P.d3)
inherit(P.ft,P.a1)
inherit(P.dd,P.dc)
inherit(P.fS,P.dd)
inherit(P.bw,P.bv)
inherit(P.dj,P.di)
inherit(P.h4,P.dj)
inherit(P.fd,P.aQ)
inherit(P.d9,P.d8)
inherit(P.fI,P.d9)
t=G.f0
inherit(G.fG,t)
inherit(G.cJ,t)
inherit(G.eY,t)
inherit(G.fw,t)
inherit(A.br,t)
inherit(A.fv,t)
t=G.fG
inherit(G.dI,t)
inherit(A.aE,t)
inherit(B.fe,G.dI)
t=G.cJ
inherit(G.eV,t)
inherit(G.fj,t)
inherit(G.fl,t)
inherit(R.fL,R.fK)
mixin(H.bC,P.m)
mixin(H.bD,H.aU)
mixin(H.bE,P.m)
mixin(H.bF,H.aU)
mixin(P.bB,P.m)
mixin(W.cM,W.dR)
mixin(W.cN,P.m)
mixin(W.cO,W.n)
mixin(W.cP,P.m)
mixin(W.cQ,W.n)
mixin(W.cR,P.m)
mixin(W.cS,W.n)
mixin(W.cU,P.m)
mixin(W.cV,W.n)
mixin(W.cY,P.m)
mixin(W.cZ,W.n)
mixin(W.d0,P.m)
mixin(W.d1,W.n)
mixin(W.d4,P.m)
mixin(W.d5,W.n)
mixin(W.bH,P.m)
mixin(W.bI,W.n)
mixin(W.d6,P.m)
mixin(W.d7,W.n)
mixin(W.db,P.aZ)
mixin(W.de,P.m)
mixin(W.df,W.n)
mixin(W.bJ,P.m)
mixin(W.bK,W.n)
mixin(W.dg,P.m)
mixin(W.dh,W.n)
mixin(W.dl,P.m)
mixin(W.dm,W.n)
mixin(W.dn,P.m)
mixin(W.dp,W.n)
mixin(W.dq,P.m)
mixin(W.dr,W.n)
mixin(W.ds,P.m)
mixin(W.dt,W.n)
mixin(W.du,P.m)
mixin(W.dv,W.n)
mixin(P.cW,P.m)
mixin(P.cX,W.n)
mixin(P.d2,P.m)
mixin(P.d3,W.n)
mixin(P.dc,P.m)
mixin(P.dd,W.n)
mixin(P.di,P.m)
mixin(P.dj,W.n)
mixin(P.d8,P.m)
mixin(P.d9,W.n)})();(function constants(){C.n=W.at.prototype
C.H=W.bW.prototype
C.u=W.aR.prototype
C.o=W.bZ.prototype
C.I=W.c_.prototype
C.J=W.c9.prototype
C.p=W.ca.prototype
C.K=J.a.prototype
C.a=J.ay.prototype
C.w=J.cc.prototype
C.b=J.cd.prototype
C.c=J.aW.prototype
C.i=J.az.prototype
C.R=J.aA.prototype
C.V=H.ck.prototype
C.z=W.bp.prototype
C.A=J.fm.prototype
C.B=W.ct.prototype
C.G=W.cC.prototype
C.t=J.aJ.prototype
C.at=W.aK.prototype
C.au=W.bx.prototype
C.f=new P.hT()
C.v=new P.ax(0)
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
C.ab=H.J("nw")
C.ac=H.J("nx")
C.ad=H.J("es")
C.ae=H.J("ny")
C.af=H.J("nz")
C.ag=H.J("kb")
C.ah=H.J("nA")
C.ai=H.J("ke")
C.aj=H.J("N")
C.ak=H.J("o")
C.al=H.J("kD")
C.am=H.J("kE")
C.an=H.J("nB")
C.ao=H.J("kF")
C.ap=H.J("ai")
C.aq=H.J("V")
C.ar=H.J("y")
C.as=H.J("a6")})();(function staticFields(){$.kk="$cachedFunction"
$.kl="$cachedInvocation"
$.jR=null
$.jP=null
$.jm=!1
$.jr=null
$.kU=null
$.l7=null
$.ig=null
$.iq=null
$.js=null
$.b5=null
$.bM=null
$.bN=null
$.jn=!1
$.A=C.f
$.k7=0
$.ak=null
$.iX=null
$.k6=null
$.k5=null
$.k3=null
$.k2=null
$.k1=null
$.k0=null
$.n4=0
$.n5=0
$.jw=0
$.l4=0
$.bS=0
$.bT=0
$.ns=!1
$.kZ=0})();(function lazyInitializers(){lazy($,"k_","$get$k_",function(){return H.l1("_$dart_dartClosure")})
lazy($,"j1","$get$j1",function(){return H.l1("_$dart_js")})
lazy($,"kc","$get$kc",function(){return H.mg()})
lazy($,"kd","$get$kd",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k7
$.k7=t+1
t="expando$key$"+t}return new P.e6(t,null,[P.y])})
lazy($,"ks","$get$ks",function(){return H.ad(H.h6({
toString:function(){return"$receiver$"}}))})
lazy($,"kt","$get$kt",function(){return H.ad(H.h6({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ku","$get$ku",function(){return H.ad(H.h6(null))})
lazy($,"kv","$get$kv",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kz","$get$kz",function(){return H.ad(H.h6(void 0))})
lazy($,"kA","$get$kA",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kx","$get$kx",function(){return H.ad(H.ky(null))})
lazy($,"kw","$get$kw",function(){return H.ad(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kC","$get$kC",function(){return H.ad(H.ky(void 0))})
lazy($,"kB","$get$kB",function(){return H.ad(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"ji","$get$ji",function(){return P.mI()})
lazy($,"bO","$get$bO",function(){return[]})
lazy($,"jZ","$get$jZ",function(){return{}})
lazy($,"kL","$get$kL",function(){return P.j5(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jk","$get$jk",function(){return P.L()})
lazy($,"ie","$get$ie",function(){return P.kf(P.y,P.ai)})
lazy($,"bQ","$get$bQ",function(){return P.kf(P.o,P.ai)})
lazy($,"kq","$get$kq",function(){return new G.cG(1281,0,4294967295)})
lazy($,"jN","$get$jN",function(){return new G.cF(1281,1281,1281)})
lazy($,"U","$get$U",function(){return P.aC(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"jW","$get$jW",function(){return T.D(0.8,0.8,0.8)})
lazy($,"jU","$get$jU",function(){return T.D(0,0,1)})
lazy($,"jY","$get$jY",function(){return T.D(1,0,0)})
lazy($,"jX","$get$jX",function(){return T.D(0,1,0)})
lazy($,"jV","$get$jV",function(){return T.D(0,1,1)})
lazy($,"la","$get$la",function(){var t=G.ko("SolidColor")
t.d2(["aPosition"])
t.bt(["uPerspectiveViewMatrix","uModelMatrix"])
t.by(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"l9","$get$l9",function(){var t=G.ko("SolidColorF")
t.bt(["uColor"])
t.by(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kI","$get$kI",function(){return[T.D(0,0,1),T.D(0,0,-1),T.D(0,1,0),T.D(0,-1,0),T.D(1,0,0),T.D(-1,0,0)]})
lazy($,"k9","$get$k9",function(){return[G.H(0,11,5),G.H(0,5,1),G.H(0,1,7),G.H(0,7,10),G.H(0,10,11),G.H(1,5,9),G.H(5,11,4),G.H(11,10,2),G.H(10,7,6),G.H(7,1,8),G.H(3,9,4),G.H(3,4,2),G.H(3,2,6),G.H(3,6,8),G.H(3,8,9),G.H(4,9,5),G.H(2,4,11),G.H(6,2,10),G.H(8,6,7),G.H(9,8,1)]})
lazy($,"lc","$get$lc",function(){return(1+P.nt(5))/2})
lazy($,"ka","$get$ka",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lc()
s=T.D(-1,t,0)
s.D(0)
r=T.D(1,t,0)
r.D(0)
q=T.D(-1,-t,0)
q.D(0)
p=T.D(1,-t,0)
p.D(0)
o=T.D(0,-1,t)
o.D(0)
n=T.D(0,1,t)
n.D(0)
m=T.D(0,-1,-t)
m.D(0)
l=T.D(0,1,-t)
l.D(0)
k=T.D(t,0,-1)
k.D(0)
j=T.D(t,0,1)
j.D(0)
i=T.D(-t,0,-1)
i.D(0)
t=T.D(-t,0,1)
t.D(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})})()
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
mangledGlobalNames:{y:"int",V:"double",a6:"num",o:"String",ai:"bool",N:"Null",i:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ai,args:[W.a_,P.o,P.o,W.bz]},{func:1,v:true,args:[P.F],opt:[P.b0]},{func:1,ret:P.y,args:[P.I,P.I]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bo,ArrayBufferView:H.b_,DataView:H.f1,Float32Array:H.ck,Float64Array:H.f2,Int16Array:H.f3,Int32Array:H.f4,Int8Array:H.f5,Uint16Array:H.f6,Uint32Array:H.f7,Uint8ClampedArray:H.co,CanvasPixelArray:H.co,Uint8Array:H.f8,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLInputElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTextAreaElement:W.j,HTMLTimeElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLFrameSetElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,Accelerometer:W.bU,LinearAccelerationSensor:W.bU,AccessibleNodeList:W.dC,HTMLAnchorElement:W.dD,HTMLAreaElement:W.dE,HTMLBodyElement:W.at,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.dJ,CDATASection:W.av,CharacterData:W.av,Comment:W.av,ProcessingInstruction:W.av,Text:W.av,CSSPerspective:W.dN,CSSPositionValue:W.dO,CSSRotation:W.dP,CSSScale:W.dQ,CSSStyleDeclaration:W.aR,MSStyleCSSProperties:W.aR,CSS2Properties:W.aR,CSSImageValue:W.Z,CSSKeywordValue:W.Z,CSSNumericValue:W.Z,CSSResourceValue:W.Z,CSSUnitValue:W.Z,CSSURLImageValue:W.Z,CSSStyleValue:W.Z,CSSMatrixComponent:W.aS,CSSSkew:W.aS,CSSTransformComponent:W.aS,CSSTransformValue:W.dS,CSSTranslation:W.dT,CSSUnparsedValue:W.dU,DataTransferItemList:W.dW,DeviceAcceleration:W.dX,HTMLDivElement:W.bZ,XMLDocument:W.bg,Document:W.bg,DOMException:W.dY,DOMImplementation:W.c_,DOMMatrix:W.dZ,DOMMatrixReadOnly:W.c0,DOMPoint:W.e_,DOMPointReadOnly:W.c1,ClientRectList:W.c2,DOMRectList:W.c2,DOMRectReadOnly:W.c3,DOMStringList:W.e0,DOMTokenList:W.e1,Element:W.a_,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.ep,FileWriter:W.eq,HTMLFormElement:W.eu,Gyroscope:W.ey,HTMLHeadElement:W.c9,History:W.ez,HTMLCollection:W.bj,HTMLFormControlsCollection:W.bj,HTMLOptionsCollection:W.bj,HTMLDocument:W.ca,XMLHttpRequest:W.eA,XMLHttpRequestUpload:W.bk,XMLHttpRequestEventTarget:W.bk,KeyboardEvent:W.aB,Location:W.eQ,Magnetometer:W.eR,MediaList:W.eX,MIDIOutput:W.eZ,MIDIInput:W.bn,MIDIPort:W.bn,MimeTypeArray:W.f_,PointerEvent:W.M,MouseEvent:W.M,DragEvent:W.M,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cp,NodeList:W.bp,RadioNodeList:W.bp,Plugin:W.ab,PluginArray:W.fn,PresentationConnection:W.fq,Range:W.ct,RTCDataChannel:W.cw,DataChannel:W.cw,HTMLSelectElement:W.fA,AbsoluteOrientationSensor:W.am,AmbientLightSensor:W.am,OrientationSensor:W.am,RelativeOrientationSensor:W.am,Sensor:W.am,SourceBufferList:W.fF,SpeechGrammarList:W.fH,SpeechRecognitionResult:W.ac,Storage:W.fM,HTMLTableElement:W.cC,HTMLTableRowElement:W.fU,HTMLTableSectionElement:W.fV,HTMLTemplateElement:W.bu,TextTrackCueList:W.fX,TextTrackList:W.fY,TimeRanges:W.fZ,TouchEvent:W.aH,TouchList:W.h2,TrackDefaultList:W.h3,TreeWalker:W.cI,CompositionEvent:W.aI,FocusEvent:W.aI,TextEvent:W.aI,UIEvent:W.aI,URL:W.hb,VRStageBoundsPoint:W.hd,VideoTrackList:W.he,WebSocket:W.hf,WheelEvent:W.aK,Window:W.bx,DOMWindow:W.bx,CSSRuleList:W.hq,DOMRect:W.hr,GamepadList:W.hI,NamedNodeMap:W.d_,MozNamedAttrMap:W.d_,SpeechRecognitionResultList:W.i_,StyleSheetList:W.i0,SVGFEBlendElement:P.e7,SVGFEColorMatrixElement:P.e8,SVGFEComponentTransferElement:P.e9,SVGFECompositeElement:P.ea,SVGFEConvolveMatrixElement:P.eb,SVGFEDiffuseLightingElement:P.ec,SVGFEDisplacementMapElement:P.ed,SVGFEFloodElement:P.ee,SVGFEGaussianBlurElement:P.ef,SVGFEImageElement:P.eg,SVGFEMergeElement:P.eh,SVGFEMorphologyElement:P.ei,SVGFEOffsetElement:P.ej,SVGFEPointLightElement:P.ek,SVGFESpecularLightingElement:P.el,SVGFESpotLightElement:P.em,SVGFETileElement:P.en,SVGFETurbulenceElement:P.eo,SVGFilterElement:P.er,SVGForeignObjectElement:P.et,SVGCircleElement:P.a1,SVGEllipseElement:P.a1,SVGLineElement:P.a1,SVGPathElement:P.a1,SVGPolygonElement:P.a1,SVGPolylineElement:P.a1,SVGGeometryElement:P.a1,SVGAElement:P.a9,SVGClipPathElement:P.a9,SVGDefsElement:P.a9,SVGGElement:P.a9,SVGSwitchElement:P.a9,SVGGraphicsElement:P.a9,SVGImageElement:P.eB,SVGLengthList:P.eL,SVGMaskElement:P.eU,SVGMatrix:P.eW,SVGNumberList:P.fc,SVGPatternElement:P.fk,SVGPoint:P.fo,SVGPointList:P.fp,SVGRect:P.fs,SVGRectElement:P.ft,SVGScriptElement:P.bs,SVGStringList:P.fS,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.fT,SVGTextPathElement:P.bv,SVGTextContentElement:P.bv,SVGTSpanElement:P.bw,SVGTextElement:P.bw,SVGTextPositioningElement:P.bw,SVGTransformList:P.h4,SVGUseElement:P.hc,AudioBuffer:P.dG,AudioTrackList:P.dH,AudioContext:P.aQ,webkitAudioContext:P.aQ,BaseAudioContext:P.aQ,OfflineAudioContext:P.fd,WebGLRenderingContext:P.fx,WebGL2RenderingContext:P.fy,SQLResultSetRowList:P.fI})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cl.$nativeSuperclassTag="ArrayBufferView"
H.bC.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
W.bH.$nativeSuperclassTag="EventTarget"
W.bI.$nativeSuperclassTag="EventTarget"
W.bJ.$nativeSuperclassTag="EventTarget"
W.bK.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lb(K.l5(),b)},[])
else (function(b){H.lb(K.l5(),b)})([])})})()