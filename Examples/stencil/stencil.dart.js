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
a[c]=function(){a[c]=function(){H.nM(b)}
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
return d?function(e){if(t===null)t=H.jz(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jz(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jz(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j8:function j8(a){this.a=a},
jf:function(a,b,c,d){if(!!a.$isl)return new H.ea(a,b,[c,d])
return new H.cp(a,b,[c,d])},
eK:function(){return new P.b3("No element")},
mA:function(){return new P.b3("Too many elements")},
mz:function(){return new P.b3("Too few elements")},
mS:function(a,b){H.cE(a,0,J.bf(a)-1,b)},
cE:function(a,b,c,d){if(c-b<=32)H.mR(a,b,c,d)
else H.mQ(a,b,c,d)},
mR:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.X(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a8(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
mQ:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.M(t+1,6)
r=a3+s
q=a4-s
p=C.b.M(a3+a4,2)
o=p-s
n=p+s
t=J.X(a2)
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
if(J.D(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.cE(a2,a3,g-2,a5)
H.cE(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.D(a5.$2(t.h(a2,g),l),0);)++g
for(;J.D(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.cE(a2,g,f,a5)}else H.cE(a2,g,f,a5)},
l:function l(){},
aZ:function aZ(){},
cn:function cn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cp:function cp(a,b,c){this.a=a
this.b=b
this.$ti=c},
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
eX:function eX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bo:function bo(a,b,c){this.a=a
this.b=b
this.$ti=c},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
ho:function ho(a,b,c){this.a=a
this.b=b
this.$ti=c},
aX:function aX(){},
dB:function(a,b){var t=a.aq(b)
if(!u.globalState.d.cy)u.globalState.f.aw()
return t},
iq:function(){++u.globalState.f.b},
iE:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
ln:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.v(s).$isj)throw H.c(P.jY("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hY(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.hB(P.je(null,H.aN),0)
q=P.y
s.seK(new H.aa(0,null,null,null,null,null,0,[q,H.b4]))
s.seN(new H.aa(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hX()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mu,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n6)}if(u.globalState.x)return
o=H.kV()
u.globalState.e=o
u.globalState.z.j(0,o.a,o)
u.globalState.d=o
if(H.ba(a,{func:1,args:[P.N]}))o.aq(new H.iO(t,a))
else if(H.ba(a,{func:1,args:[P.N,P.N]}))o.aq(new H.iP(t,a))
else o.aq(a)
u.globalState.f.aw()},
n6:function(a){var t=P.aD(["command","print","msg",a])
return new H.a5(!0,P.b5(null,P.y)).O(t)},
kV:function(){var t,s
t=u.globalState.a++
s=P.y
t=new H.b4(t,new H.aa(0,null,null,null,null,null,0,[s,H.cC]),P.aE(null,null,null,s),u.createNewIsolate(),new H.cC(0,null,!1),new H.au(H.lk()),new H.au(H.lk()),!1,!1,[],P.aE(null,null,null,null),null,null,!1,!0,P.aE(null,null,null,null))
t.dE()
return t},
mw:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mx()
return},
mx:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.u('Cannot extract URI from "'+t+'"'))},
mu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aM(!0,[]).a6(b.data)
s=J.X(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.ny(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aM(!0,[]).a6(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aM(!0,[]).a6(s.h(t,"replyTo"))
k=H.kV()
u.globalState.f.a.a2(0,new H.aN(k,new H.eH(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.aw()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lW(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.aw()
break
case"close":u.globalState.ch.av(0,$.$get$ko().h(0,a))
a.terminate()
u.globalState.f.aw()
break
case"log":H.mt(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.aD(["command","print","msg",t])
j=new H.a5(!0,P.b5(null,P.y)).O(j)
s.toString
self.postMessage(j)}else P.ak(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
mt:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aD(["command","log","msg",a])
r=new H.a5(!0,P.b5(null,P.y)).O(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.O(q)
t=H.ar(q)
s=P.cb(t)
throw H.c(s)}},
mv:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kv=$.kv+("_"+s)
$.kw=$.kw+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.L(0,["spawned",new H.b6(s,r),q,t.r])
r=new H.eI(t,d,a,c,b)
if(e){t.bU(q,q)
u.globalState.f.a.a2(0,new H.aN(t,r,"start isolate"))}else r.$0()},
mU:function(a,b){var t=new H.h5(!0,!1,null,0)
t.dv(a,b)
return t},
n7:function(a){return new H.aM(!0,[]).a6(new H.a5(!1,P.b5(null,P.y)).O(a))},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
hY:function hY(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
b4:function b4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hS:function hS(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
hC:function hC(a){this.a=a},
aN:function aN(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(){},
eH:function eH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eI:function eI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hw:function hw(){},
b6:function b6(a,b){this.b=a
this.a=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b,c){this.b=a
this.c=b
this.a=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
h5:function h5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
au:function au(a){this.a=a},
a5:function a5(a,b){this.a=a
this.b=b},
aM:function aM(a,b){this.a=a
this.b=b},
ns:function(a){return u.types[a]},
nA:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.v(a).$ist},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.bg(a)
if(typeof t!=="string")throw H.c(H.S(a))
return t},
mN:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.an(t)
s=t[0]
r=t[1]
return new H.fx(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aG:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bs:function(a){var t,s,r,q,p,o,n,m,l
t=J.v(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.v(a).$isaK){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aT(q,0)===36)q=C.i.d7(q,1)
l=H.dD(H.is(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
P:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mL:function(a){return a.b?H.P(a).getUTCFullYear()+0:H.P(a).getFullYear()+0},
mJ:function(a){return a.b?H.P(a).getUTCMonth()+1:H.P(a).getMonth()+1},
mF:function(a){return a.b?H.P(a).getUTCDate()+0:H.P(a).getDate()+0},
mG:function(a){return a.b?H.P(a).getUTCHours()+0:H.P(a).getHours()+0},
mI:function(a){return a.b?H.P(a).getUTCMinutes()+0:H.P(a).getMinutes()+0},
mK:function(a){return a.b?H.P(a).getUTCSeconds()+0:H.P(a).getSeconds()+0},
mH:function(a){return a.b?H.P(a).getUTCMilliseconds()+0:H.P(a).getMilliseconds()+0},
ku:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.S(a))
return a[b]},
b9:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a_(!0,b,"index",null)
t=J.bf(a)
if(b<0||C.b.bd(b,t))return P.z(b,a,"index",null,t)
return P.fu(b,"index",null)},
S:function(a){return new P.a_(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.cz()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lq})
t.name=""}else t.toString=H.lq
return t},
lq:function(){return J.bg(this.dartException)},
J:function(a){throw H.c(a)},
C:function(a){throw H.c(P.al(a))},
ad:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hb(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hc:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kH:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
kt:function(a,b){return new H.ff(a,b==null?null:b.method)},
ja:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eO(a,s,t?null:b.receiver)},
O:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iQ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b4(r,16)&8191)===10)switch(q){case 438:return t.$1(H.ja(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.kt(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$kB()
o=$.$get$kC()
n=$.$get$kD()
m=$.$get$kE()
l=$.$get$kI()
k=$.$get$kJ()
j=$.$get$kG()
$.$get$kF()
i=$.$get$kL()
h=$.$get$kK()
g=p.T(s)
if(g!=null)return t.$1(H.ja(s,g))
else{g=o.T(s)
if(g!=null){g.method="call"
return t.$1(H.ja(s,g))}else{g=n.T(s)
if(g==null){g=m.T(s)
if(g==null){g=l.T(s)
if(g==null){g=k.T(s)
if(g==null){g=j.T(s)
if(g==null){g=m.T(s)
if(g==null){g=i.T(s)
if(g==null){g=h.T(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.kt(s,g))}}return t.$1(new H.hh(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cH()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a_(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cH()
return a},
ar:function(a){var t
if(a==null)return new H.df(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.df(a,null)},
nE:function(a){if(a==null||typeof a!='object')return J.be(a)
else return H.aG(a)},
nq:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=a.length
for(r=0;r<s;){q=r+1
H.b(t)
p=a[r]
r=q+1
H.b(t)
b.j(0,p,a[q])}return b},
nz:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dB(b,new H.iz(a))
case 1:return H.dB(b,new H.iA(a,d))
case 2:return H.dB(b,new H.iB(a,d,e))
case 3:return H.dB(b,new H.iC(a,d,e,f))
case 4:return H.dB(b,new H.iD(a,d,e,f,g))}throw H.c(P.cb("Unsupported number of arguments for wrapped closure"))},
bU:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nz)
a.$identity=t
return t},
me:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.v(c).$isj){t.$reflectionInfo=c
r=H.mN(t).r}else r=c
q=d?Object.create(new H.fN().constructor.prototype):Object.create(new H.bh(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k4(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.ns,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k1:H.j2
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.c("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k4(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
mb:function(a,b,c,d){var t=H.j2
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k4:function(a,b,c){var t,s,r,q
if(c)return H.md(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.mb(s,b==null?r!=null:b!==r,t,b)
return q},
mc:function(a,b,c,d){var t,s
t=H.j2
s=H.k1
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
t=$.k2
if(t==null){t=H.k_("self")
$.k2=t}t=$.k0
if(t==null){t=H.k_("receiver")
$.k0=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mc(r,b==null?q!=null:b!==q,s,b)
return t},
jz:function(a,b,c,d,e,f){var t,s
t=J.an(b)
s=!!J.v(c).$isj?J.an(c):c
return H.me(a,t,s,!!d,e,f)},
j2:function(a){return a.a},
k1:function(a){return a.c},
k_:function(a){var t,s,r,q,p
t=new H.bh("self","target","receiver","name")
s=J.an(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
o0:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ae(a,"String"))},
nW:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ae(a,"double"))},
o_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ae(a,"num"))},
nj:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ae(a,"bool"))},
ny:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ae(a,"int"))},
nG:function(a,b){throw H.c(H.ae(a,b.substring(3)))},
nF:function(a,b){var t=J.X(b)
throw H.c(H.k3(a,t.bp(b,3,t.gk(b))))},
jD:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.v(a)[b])return a
H.nG(a,b)},
aj:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.v(a)[b]
else t=!0
if(t)return a
H.nF(a,b)},
nZ:function(a){if(a==null)return a
if(!!J.v(a).$isj)return a
throw H.c(H.ae(a,"List"))},
jA:function(a){var t=J.v(a)
return"$S" in t?t.$S():null},
ba:function(a,b){var t,s
if(a==null)return!1
t=H.jA(a)
if(t==null)s=!1
else s=H.lg(t,b)
return s},
nX:function(a,b){var t,s
if(a==null)return a
if($.jw)return a
$.jw=!0
try{if(H.ba(a,b))return a
t=H.iI(b,null)
s=H.ae(a,t)
throw H.c(s)}finally{$.jw=!1}},
ae:function(a,b){return new H.hd("TypeError: "+H.e(P.ca(a))+": type '"+H.l0(a)+"' is not a subtype of type '"+b+"'")},
k3:function(a,b){return new H.dP("CastError: "+H.e(P.ca(a))+": type '"+H.l0(a)+"' is not a subtype of type '"+b+"'")},
l0:function(a){var t
if(a instanceof H.aw){t=H.jA(a)
if(t!=null)return H.iI(t,null)
return"Closure"}return H.bs(a)},
V:function(a){if(!0===a)return!1
if(!!J.v(a).$isj6)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ae(a,"bool"))},
Z:function(a){throw H.c(new H.hq(a))},
b:function(a){if(H.V(a))throw H.c(P.ma(null))},
nM:function(a){throw H.c(new P.e_(a))},
mO:function(a){return new H.fC(a)},
lk:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
le:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.ap(a,null)},
B:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
is:function(a){if(a==null)return
return a.$ti},
lf:function(a,b){return H.jH(a["$as"+H.e(b)],H.is(a))},
a6:function(a,b,c){var t,s
t=H.lf(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
as:function(a,b){var t,s
t=H.is(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iI:function(a,b){var t=H.bb(a,b)
return t},
bb:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dD(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.bb(t,b)
return H.n8(a,b)}return"unknown-reified-type"},
n8:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.bb(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.bb(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.bb(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.np(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.bb(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dD:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bv("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.bb(o,c)}return p?"":"<"+s.l(0)+">"},
it:function(a){var t,s,r
if(a instanceof H.aw){t=H.jA(a)
if(t!=null)return H.iI(t,null)}s=J.v(a).constructor.name
if(a==null)return s
r=H.dD(a.$ti,0,null)
return s+r},
jH:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jE(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jE(a,null,b)
return b},
ik:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.is(a)
s=J.v(a)
if(s[b]==null)return!1
return H.l4(H.jH(s[d],t),c)},
dE:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ik(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dD(c,0,null)
throw H.c(H.k3(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
nT:function(a,b,c,d){var t,s
if(a==null)return a
t=H.ik(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dD(c,0,null)
throw H.c(H.ae(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
l4:function(a,b){var t,s,r,q,p
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
if(!H.Y(r,b[p]))return!1}return!0},
nU:function(a,b,c){return H.jE(a,b,H.lf(b,c))},
Y:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="N")return!0
if('func' in b)return H.lg(a,b)
if('func' in a)return b.name==="j6"||b.name==="E"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iI(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.l4(H.jH(o,t),r)},
l3:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Y(o,n)||H.Y(n,o)))return!1}return!0},
nf:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.an(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.Y(p,o)||H.Y(o,p)))return!1}return!0},
lg:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.b('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Y(t,s)||H.Y(s,t)))return!1}r=a.args
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
if(n===m){if(!H.l3(r,q,!1))return!1
if(!H.l3(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
g=r[h]
H.b(i)
f=q[h]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=q[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.b(j)
g=p[d]
H.b(i)
f=o[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}}return H.nf(a.named,b.named)},
jE:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
o1:function(a){var t=$.jB
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nY:function(a){return H.aG(a)},
nV:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nB:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.E))
t=$.jB.$1(a)
s=$.ip[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iy[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l2.$2(a,t)
if(t!=null){s=$.ip[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iy[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iG(r)
$.ip[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iy[t]=r
return r}if(p==="-"){o=H.iG(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.li(a,r)
if(p==="*")throw H.c(P.kP(t))
if(u.leafTags[t]===true){o=H.iG(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.li(a,r)},
li:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jF(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iG:function(a){return J.jF(a,!1,null,!!a.$ist)},
nD:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iG(t)
else return J.jF(t,c,null,null)},
nw:function(){if(!0===$.jC)return
$.jC=!0
H.nx()},
nx:function(){var t,s,r,q,p,o,n,m
$.ip=Object.create(null)
$.iy=Object.create(null)
H.nv()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lj.$1(p)
if(o!=null){n=H.nD(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nv:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.b8(C.L,H.b8(C.Q,H.b8(C.x,H.b8(C.x,H.b8(C.P,H.b8(C.M,H.b8(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jB=new H.iv(p)
$.l2=new H.iw(o)
$.lj=new H.ix(n)},
b8:function(a,b){return a(b)||b},
nL:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fx:function fx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hb:function hb(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ff:function ff(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a){this.a=a},
iQ:function iQ(a){this.a=a},
df:function df(a,b){this.a=a
this.b=b},
iz:function iz(a){this.a=a},
iA:function iA(a,b){this.a=a
this.b=b},
iB:function iB(a,b,c){this.a=a
this.b=b
this.c=c},
iC:function iC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iD:function iD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
aw:function aw(){},
h0:function h0(){},
fN:function fN(){},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hd:function hd(a){this.a=a},
dP:function dP(a){this.a=a},
fC:function fC(a){this.a=a},
hq:function hq(a){this.a=a},
ap:function ap(a,b){this.a=a
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
eN:function eN(a){this.a=a},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eR:function eR(a,b){this.a=a
this.$ti=b},
eS:function eS(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
ig:function(a){var t,s,r
if(!!J.v(a).$isq)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ah:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b9(b,a))},
bq:function bq(){},
b1:function b1(){},
f5:function f5(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cr:function cr(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
cv:function cv(){},
fc:function fc(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
np:function(a){return J.an(H.B(a?Object.keys(a):[],[null]))},
iH:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
v:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cl.prototype
return J.ck.prototype}if(typeof a=="string")return J.aA.prototype
if(a==null)return J.eM.prototype
if(typeof a=="boolean")return J.eL.prototype
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.E)return a
return J.ir(a)},
jF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ir:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jC==null){H.nw()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kP("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j9()]
if(p!=null)return p
p=H.nB(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$j9(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
an:function(a){a.fixed$length=Array
return a},
X:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.E)return a
return J.ir(a)},
bW:function(a){if(a==null)return a
if(a.constructor==Array)return J.az.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.E)return a
return J.ir(a)},
lc:function(a){if(typeof a=="number")return J.aY.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.aK.prototype
return a},
nr:function(a){if(typeof a=="number")return J.aY.prototype
if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.aK.prototype
return a},
ld:function(a){if(typeof a=="string")return J.aA.prototype
if(a==null)return a
if(!(a instanceof P.E))return J.aK.prototype
return a},
i:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aB.prototype
return a}if(a instanceof P.E)return a
return J.ir(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.v(a).B(a,b)},
a8:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lc(a).a_(a,b)},
lr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lc(a).a0(a,b)},
bc:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nA(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.X(a).h(a,b)},
ls:function(a,b,c,d){return J.i(a).dI(a,b,c,d)},
jI:function(a,b){return J.ld(a).aT(a,b)},
iR:function(a,b){return J.i(a).dY(a,b)},
lt:function(a,b,c){return J.i(a).dZ(a,b,c)},
jJ:function(a,b){return J.i(a).bT(a,b)},
iS:function(a,b){return J.i(a).W(a,b)},
jK:function(a,b,c){return J.i(a).bW(a,b,c)},
lu:function(a,b){return J.i(a).ec(a,b)},
iT:function(a,b,c){return J.i(a).bX(a,b,c)},
iU:function(a,b,c){return J.i(a).bY(a,b,c)},
bd:function(a,b,c){return J.i(a).bZ(a,b,c)},
dF:function(a,b){return J.i(a).ef(a,b)},
lv:function(a,b){return J.i(a).c_(a,b)},
lw:function(a,b,c){return J.i(a).c0(a,b,c)},
jL:function(a,b,c,d){return J.i(a).c1(a,b,c,d)},
lx:function(a,b){return J.i(a).c2(a,b)},
ly:function(a,b){return J.bW(a).c3(a,b)},
lz:function(a,b,c,d,e){return J.i(a).c4(a,b,c,d,e)},
lA:function(a,b){return J.nr(a).X(a,b)},
iV:function(a,b,c){return J.X(a).ej(a,b,c)},
iW:function(a){return J.i(a).c6(a)},
lB:function(a){return J.i(a).c7(a)},
lC:function(a){return J.i(a).c8(a)},
jM:function(a){return J.i(a).ca(a)},
lD:function(a){return J.i(a).ep(a)},
lE:function(a,b){return J.i(a).cc(a,b)},
iX:function(a,b){return J.i(a).cd(a,b)},
lF:function(a,b,c,d){return J.i(a).ce(a,b,c,d)},
lG:function(a,b,c,d,e){return J.i(a).ex(a,b,c,d,e)},
lH:function(a,b,c,d,e){return J.i(a).cf(a,b,c,d,e)},
lI:function(a,b,c,d,e,f){return J.i(a).ey(a,b,c,d,e,f)},
lJ:function(a,b){return J.bW(a).v(a,b)},
bZ:function(a,b){return J.i(a).cg(a,b)},
lK:function(a,b){return J.i(a).ci(a,b)},
lL:function(a){return J.i(a).ez(a)},
jN:function(a,b){return J.bW(a).ar(a,b)},
jO:function(a,b,c,d,e,f){return J.i(a).ck(a,b,c,d,e,f)},
lM:function(a){return J.i(a).geb(a)},
be:function(a){return J.v(a).gA(a)},
aP:function(a){return J.bW(a).gC(a)},
bf:function(a){return J.X(a).gk(a)},
lN:function(a){return J.i(a).gba(a)},
lO:function(a){return J.v(a).gE(a)},
lP:function(a){return J.i(a).geW(a)},
lQ:function(a){return J.i(a).gaL(a)},
iY:function(a){return J.i(a).gm(a)},
iZ:function(a){return J.i(a).gn(a)},
jP:function(a){return J.i(a).gG(a)},
j_:function(a,b){return J.i(a).ah(a,b)},
lR:function(a){return J.i(a).aN(a)},
jQ:function(a){return J.i(a).be(a)},
lS:function(a,b){return J.i(a).bf(a,b)},
lT:function(a,b,c){return J.i(a).bg(a,b,c)},
jR:function(a,b,c){return J.i(a).bj(a,b,c)},
lU:function(a,b){return J.i(a).cm(a,b)},
lV:function(a,b){return J.bW(a).co(a,b)},
jS:function(a){return J.bW(a).eQ(a)},
lW:function(a,b){return J.i(a).L(a,b)},
lX:function(a,b,c,d){return J.i(a).bo(a,b,c,d)},
lY:function(a,b,c,d,e,f,g,h,i,j){return J.i(a).cu(a,b,c,d,e,f,g,h,i,j)},
lZ:function(a,b,c,d){return J.i(a).cv(a,b,c,d)},
dG:function(a,b,c,d){return J.i(a).cw(a,b,c,d)},
m_:function(a,b,c,d,e,f){return J.i(a).eX(a,b,c,d,e,f)},
m0:function(a){return J.ld(a).f_(a)},
bg:function(a){return J.v(a).l(a)},
m1:function(a,b,c,d){return J.i(a).f1(a,b,c,d)},
m2:function(a,b,c){return J.i(a).cC(a,b,c)},
m3:function(a,b,c){return J.i(a).cD(a,b,c)},
j0:function(a,b,c){return J.i(a).cE(a,b,c)},
m4:function(a,b,c){return J.i(a).cF(a,b,c)},
jT:function(a,b,c){return J.i(a).cG(a,b,c)},
jU:function(a,b,c){return J.i(a).cH(a,b,c)},
jV:function(a,b,c){return J.i(a).cI(a,b,c)},
jW:function(a,b,c,d){return J.i(a).cJ(a,b,c,d)},
jX:function(a,b,c,d){return J.i(a).cK(a,b,c,d)},
m5:function(a,b){return J.i(a).cM(a,b)},
m6:function(a,b,c){return J.i(a).f2(a,b,c)},
m7:function(a,b,c,d,e,f,g){return J.i(a).cO(a,b,c,d,e,f,g)},
m8:function(a,b,c,d,e){return J.i(a).cQ(a,b,c,d,e)},
a:function a(){},
eL:function eL(){},
eM:function eM(){},
bn:function bn(){},
fp:function fp(){},
aK:function aK(){},
aB:function aB(){},
az:function az(a){this.$ti=a},
j7:function j7(a){this.$ti=a},
dK:function dK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
cl:function cl(){},
ck:function ck(){},
aA:function aA(){}},P={
mY:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.ng()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bU(new P.hs(t),1)).observe(s,{childList:true})
return new P.hr(t,s,r)}else if(self.setImmediate!=null)return P.nh()
return P.ni()},
mZ:function(a){H.iq()
self.scheduleImmediate(H.bU(new P.ht(a),0))},
n_:function(a){H.iq()
self.setImmediate(H.bU(new P.hu(a),0))},
n0:function(a){P.jm(C.v,a)},
jm:function(a,b){var t=C.b.M(a.a,1000)
return H.mU(t<0?0:t,b)},
nb:function(a,b){if(H.ba(a,{func:1,args:[P.N,P.N]})){b.toString
return a}else{b.toString
return a}},
n2:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ag))
H.b(b.a===0)
b.a=1
try{a.cA(new P.hI(b),new P.hJ(b))}catch(r){t=H.O(r)
s=H.ar(r)
P.nH(new P.hK(b,t,s))}},
kS:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.b2()
b.aS(a)
P.bD(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bN(r)}},
bD:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ih(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bD(t.a,b)}s=t.a
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
P.ih(null,null,p,o,s)
return}s=$.A
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.A
H.b(l==null?s!=null:l!==s)
j=$.A
$.A=l
i=j}else i=null
s=b.c
if(s===8)new P.hO(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hN(r,b,m).$0()}else if((s&2)!==0)new P.hM(t,r,b).$0()
if(i!=null){H.b(!0)
$.A=i}s=r.b
if(!!J.v(s).$iseB){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.aG(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kS(s,o)
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
na:function(){var t,s
for(;t=$.b7,t!=null;){$.bS=null
s=t.b
$.b7=s
if(s==null)$.bR=null
t.a.$0()}},
ne:function(){$.jx=!0
try{P.na()}finally{$.bS=null
$.jx=!1
if($.b7!=null)$.$get$js().$1(P.l5())}},
l_:function(a){var t=new P.cQ(a,null)
if($.b7==null){$.bR=t
$.b7=t
if(!$.jx)$.$get$js().$1(P.l5())}else{$.bR.b=t
$.bR=t}},
nd:function(a){var t,s,r
t=$.b7
if(t==null){P.l_(a)
$.bS=$.bR
return}s=new P.cQ(a,null)
r=$.bS
if(r==null){s.b=t
$.bS=s
$.b7=s}else{s.b=r.b
r.b=s
$.bS=s
if(s.b==null)$.bR=s}},
nH:function(a){var t=$.A
if(C.f===t){P.ij(null,null,C.f,a)
return}t.toString
P.ij(null,null,t,t.b8(a))},
mV:function(a,b){var t=$.A
if(t===C.f){t.toString
return P.jm(a,b)}return P.jm(a,t.b8(b))},
jr:function(a){var t,s
H.b(a!=null)
t=$.A
H.b(a==null?t!=null:a!==t)
s=$.A
$.A=a
return s},
ih:function(a,b,c,d,e){var t={}
t.a=d
P.nd(new P.ii(t,e))},
kY:function(a,b,c,d){var t,s
if($.A===c)return d.$0()
t=P.jr(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.A=s}},
kZ:function(a,b,c,d,e){var t,s
if($.A===c)return d.$1(e)
t=P.jr(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.A=s}},
nc:function(a,b,c,d,e,f){var t,s
if($.A===c)return d.$2(e,f)
t=P.jr(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.A=s}},
ij:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b8(d):c.ed(d)
P.l_(d)},
hs:function hs(a){this.a=a},
hr:function hr(a,b,c){this.a=a
this.b=b
this.c=c},
ht:function ht(a){this.a=a},
hu:function hu(a){this.a=a},
j3:function j3(){},
hx:function hx(){},
ia:function ia(a,b){this.a=a
this.$ti=b},
cY:function cY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hH:function hH(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
hI:function hI(a){this.a=a},
hJ:function hJ(a){this.a=a},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hP:function hP(a){this.a=a},
hN:function hN(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b){this.a=a
this.b=b},
fT:function fT(){},
fV:function fV(a){this.a=a},
fW:function fW(a,b){this.a=a
this.b=b},
fU:function fU(){},
jl:function jl(){},
aQ:function aQ(a,b){this.a=a
this.b=b},
ie:function ie(){},
ii:function ii(a,b){this.a=a
this.b=b},
i0:function i0(){},
i2:function i2(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
i3:function i3(a,b){this.a=a
this.b=b},
kq:function(a,b){return new H.aa(0,null,null,null,null,null,0,[a,b])},
L:function(){return new H.aa(0,null,null,null,null,null,0,[null,null])},
aD:function(a){return H.nq(a,new H.aa(0,null,null,null,null,null,0,[null,null]))},
b5:function(a,b){return new P.hV(0,null,null,null,null,null,0,[a,b])},
aE:function(a,b,c,d){return new P.hT(0,null,null,null,null,null,0,[d])},
jv:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
my:function(a,b,c){var t,s
if(P.jy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bT()
C.a.i(s,a)
try{P.n9(a,t)}finally{H.b(C.a.gaK(s)===a)
s.pop()}s=P.kA(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eJ:function(a,b,c){var t,s,r
if(P.jy(a))return b+"..."+c
t=new P.bv(b)
s=$.$get$bT()
C.a.i(s,a)
try{r=t
r.a=P.kA(r.gab(),a,", ")}finally{H.b(C.a.gaK(s)===a)
s.pop()}s=t
s.a=s.gab()+c
s=t.gab()
return s.charCodeAt(0)==0?s:s},
jy:function(a){var t,s
for(t=0;s=$.$get$bT(),t<s.length;++t)if(a===s[t])return!0
return!1},
n9:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gC(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.e(t.gu(t))
C.a.i(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gu(t);++r
if(!t.q()){if(r<=4){C.a.i(b,H.e(n))
return}p=H.e(n)
o=b.pop()
s+=p.length+2}else{m=t.gu(t);++r
H.b(r<100)
for(;t.q();n=m,m=l){l=t.gu(t);++r
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
jd:function(a,b){var t,s
t=P.aE(null,null,null,b)
for(s=J.aP(a);s.q();)t.i(0,s.gu(s))
return t},
ks:function(a){var t,s,r
t={}
if(P.jy(a))return"{...}"
s=new P.bv("")
try{C.a.i($.$get$bT(),a)
r=s
r.a=r.gab()+"{"
t.a=!0
J.jN(a,new P.eW(t,s))
t=s
t.a=t.gab()+"}"}finally{t=$.$get$bT()
H.b(C.a.gaK(t)===a)
t.pop()}t=s.gab()
return t.charCodeAt(0)==0?t:t},
je:function(a,b){var t=new P.eT(null,0,0,0,[b])
t.dm(a,b)
return t},
hV:function hV(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hT:function hT(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hU:function hU(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hR:function hR(){},
jc:function jc(){},
cm:function cm(){},
m:function m(){},
co:function co(){},
eW:function eW(a,b){this.a=a
this.b=b},
b0:function b0(){},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hW:function hW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fF:function fF(){},
fE:function fE(){},
bG:function bG(){},
mn:function(a){var t=J.v(a)
if(!!t.$isaw)return t.l(a)
return"Instance of '"+H.bs(a)+"'"},
kr:function(a,b,c){var t,s
t=H.B([],[c])
for(s=J.aP(a);s.q();)C.a.i(t,s.gu(s))
if(b)return t
return J.an(t)},
kA:function(a,b,c){var t=J.aP(b)
if(!t.q())return a
if(c.length===0){do a+=H.e(t.gu(t))
while(t.q())}else{a+=H.e(t.gu(t))
for(;t.q();)a=a+c+H.e(t.gu(t))}return a},
mf:function(a,b){return J.lA(a,b)},
mi:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
mj:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c3:function(a){if(a>=10)return""+a
return"0"+a},
ke:function(a,b,c,d,e,f){return new P.ax(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
ca:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.bg(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mn(a)},
ma:function(a){return new P.c0(a)},
jY:function(a){return new P.a_(!1,null,null,a)},
j1:function(a,b,c){return new P.a_(!0,a,b,c)},
m9:function(a){return new P.a_(!1,null,a,"Must not be null")},
fu:function(a,b,c){return new P.cB(null,null,!0,a,b,"Value not in range")},
aH:function(a,b,c,d,e){return new P.cB(b,c,!0,a,d,"Invalid value")},
kx:function(a,b,c,d,e,f){if(C.b.a_(0,a)||C.b.a_(a,c))throw H.c(P.aH(a,0,c,"start",f))
if(b!=null){if(a>b||C.b.a_(b,c))throw H.c(P.aH(b,a,c,"end",f))
return b}return c},
z:function(a,b,c,d,e){var t=e!=null?e:J.bf(b)
return new P.eG(b,t,!0,a,c,"Index out of range")},
u:function(a){return new P.hi(a)},
kP:function(a){return new P.hg(a)},
jj:function(a){return new P.b3(a)},
al:function(a){return new P.dR(a)},
cb:function(a){return new P.hG(a)},
ak:function(a){H.iH(H.e(a))},
ai:function ai(){},
I:function I(){},
aU:function aU(a,b){this.a=a
this.b=b},
W:function W(){},
ax:function ax(a){this.a=a},
e8:function e8(){},
e9:function e9(){},
aV:function aV(){},
c0:function c0(a){this.a=a},
cz:function cz(){},
a_:function a_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cB:function cB(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eG:function eG(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hi:function hi(a){this.a=a},
hg:function hg(a){this.a=a},
b3:function b3(a){this.a=a},
dR:function dR(a){this.a=a},
cH:function cH(){},
e_:function e_(a){this.a=a},
j5:function j5(){},
hG:function hG(a){this.a=a},
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
y:function y(){},
T:function T(){},
cj:function cj(){},
j:function j(){},
b_:function b_(){},
N:function N(){},
a7:function a7(){},
E:function E(){},
b2:function b2(){},
p:function p(){},
bv:function bv(a){this.a=a},
jo:function jo(){},
im:function(a){var t,s,r,q,p
if(a==null)return
t=P.L()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
nm:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jN(a,new P.il(t))
return t},
kd:function(){var t=$.kc
if(t==null){t=J.iV(window.navigator.userAgent,"Opera",0)
$.kc=t}return t},
mk:function(){var t,s
t=$.k9
if(t!=null)return t
s=$.ka
if(s==null){s=J.iV(window.navigator.userAgent,"Firefox",0)
$.ka=s}if(s)t="-moz-"
else{s=$.kb
if(s==null){s=!P.kd()&&J.iV(window.navigator.userAgent,"Trident/",0)
$.kb=s}if(s)t="-ms-"
else t=P.kd()?"-o-":"-webkit-"}$.k9=t
return t},
il:function il(a){this.a=a},
nK:function(a){return Math.sqrt(a)},
i_:function i_(){},
U:function U(){},
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
et:function et(){},
eu:function eu(){},
ex:function ex(){},
ez:function ez(){},
a3:function a3(){},
a9:function a9(){},
eF:function eF(){},
eP:function eP(){},
eY:function eY(){},
f_:function f_(){},
fg:function fg(){},
fn:function fn(){},
fr:function fr(){},
fs:function fs(){},
fv:function fv(){},
fw:function fw(){},
bu:function bu(){},
fX:function fX(){},
w:function w(){},
fY:function fY(){},
bx:function bx(){},
by:function by(){},
ha:function ha(){},
hk:function hk(){},
d0:function d0(){},
d1:function d1(){},
d7:function d7(){},
d8:function d8(){},
dh:function dh(){},
di:function di(){},
dn:function dn(){},
dp:function dp(){},
dL:function dL(){},
dM:function dM(){},
aR:function aR(){},
fh:function fh(){},
fA:function fA(){},
fB:function fB(){},
fM:function fM(){},
dd:function dd(){},
de:function de(){}},W={
no:function(){return document},
ml:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).R(t,a,b,c)
s.toString
t=new H.cP(new W.Q(s),new W.eb(),[W.r])
return t.ga9(t)},
mm:function(a){return"wheel"},
bj:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lP(a)
if(typeof s==="string")t=a.tagName}catch(r){H.O(r)}return t},
n1:function(a,b){return document.createElement(a)},
aO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
af:function(a,b,c,d,e){var t=c==null?null:W.l1(new W.hF(c))
t=new W.hE(0,a,b,t,!1,[e])
t.dC(a,b,c,!1,e)
return t},
kT:function(a){var t,s
t=document.createElement("a")
s=new W.i4(t,window.location)
s=new W.bE(s)
s.dD(a)
return s},
n4:function(a,b,c,d){return!0},
n5:function(a,b,c,d){var t,s,r,q,p
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
kX:function(){var t=P.p
t=new W.ib(P.jd(C.q,t),P.aE(null,null,null,t),P.aE(null,null,null,t),P.aE(null,null,null,t),null)
t.dG(null,new H.bo(C.q,new W.ic(),[H.as(C.q,0),null]),["TEMPLATE"],null)
return t},
l1:function(a){var t=$.A
if(t===C.f)return a
return t.ee(a)},
k:function k(){},
c_:function c_(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
at:function at(){},
c1:function c1(){},
dO:function dO(){},
av:function av(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
aS:function aS(){},
dW:function dW(){},
a0:function a0(){},
aT:function aT(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
c4:function c4(){},
bi:function bi(){},
e2:function e2(){},
c5:function c5(){},
e3:function e3(){},
c6:function c6(){},
e4:function e4(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
e5:function e5(){},
e6:function e6(){},
a1:function a1(){},
eb:function eb(){},
h:function h(){},
d:function d(){},
ev:function ev(){},
ew:function ew(){},
eA:function eA(){},
eC:function eC(){},
ch:function ch(){},
eD:function eD(){},
bk:function bk(){},
ci:function ci(){},
eE:function eE(){},
bl:function bl(){},
bm:function bm(){},
aC:function aC(){},
eU:function eU(){},
eV:function eV(){},
f0:function f0(){},
f2:function f2(){},
bp:function bp(){},
f3:function f3(){},
M:function M(){},
Q:function Q(a){this.a=a},
r:function r(){},
cw:function cw(){},
br:function br(){},
ab:function ab(){},
fq:function fq(){},
ft:function ft(){},
cA:function cA(){},
cD:function cD(){},
fD:function fD(){},
ao:function ao(){},
fJ:function fJ(){},
fL:function fL(){},
ac:function ac(){},
fR:function fR(){},
fS:function fS(a){this.a=a},
cJ:function cJ(){},
fZ:function fZ(){},
h_:function h_(){},
bw:function bw(){},
h1:function h1(){},
h2:function h2(){},
h4:function h4(){},
aI:function aI(){},
h8:function h8(){},
h9:function h9(){},
cO:function cO(){},
aJ:function aJ(){},
hj:function hj(){},
hl:function hl(){},
hm:function hm(){},
hn:function hn(){},
aL:function aL(){},
bC:function bC(){},
hp:function hp(a){this.a=a},
jq:function jq(){},
hy:function hy(){},
hz:function hz(){},
hQ:function hQ(){},
d4:function d4(){},
i7:function i7(){},
i8:function i8(){},
hv:function hv(){},
hA:function hA(a){this.a=a},
hD:function hD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jt:function jt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hE:function hE(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hF:function hF(a){this.a=a},
bE:function bE(a){this.a=a},
n:function n(){},
cy:function cy(a){this.a=a},
fe:function fe(a){this.a=a},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
bL:function bL(){},
i5:function i5(){},
i6:function i6(){},
ib:function ib(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ic:function ic(){},
i9:function i9(){},
cd:function cd(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cx:function cx(){},
jh:function jh(){},
jp:function jp(){},
i4:function i4(a,b){this.a=a
this.b=b},
dq:function dq(a){this.a=a},
id:function id(a){this.a=a},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cZ:function cZ(){},
d_:function d_(){},
d2:function d2(){},
d3:function d3(){},
d5:function d5(){},
d6:function d6(){},
d9:function d9(){},
da:function da(){},
bM:function bM(){},
bN:function bN(){},
db:function db(){},
dc:function dc(){},
dg:function dg(){},
dj:function dj(){},
dk:function dk(){},
bO:function bO(){},
bP:function bP(){},
dl:function dl(){},
dm:function dm(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dw:function dw(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){}},B={
nI:function(a){var t,s
t=document
s=W.aC
W.af(t,"keydown",new B.iJ(),!1,s)
W.af(t,"keyup",new B.iK(),!1,s)
if(!$.nJ)W.af(t,"mousemove",new B.iL(),!1,W.M)
s=W.M
W.af(t,"mousedown",new B.iM(),!1,s)
W.af(t,"mouseup",new B.iN(),!1,s)},
mD:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$io()
r=$.$get$bV()
q=new T.G(new Float32Array(16))
q.I()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.fi(a,b,c,0,new T.f(t),-0.02,s,r,q,new T.f(p),new T.f(o),new T.f(n),new T.f(new Float32Array(3)),"camera:orbit",!1,!0)
t.dq(a,b,c,d)
return t},
iJ:function iJ(){},
iK:function iK(){},
iL:function iL(){},
iM:function iM(){},
iN:function iN(){},
fi:function fi(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
fj:function fj(a){this.a=a},
fk:function fk(a){this.a=a},
fl:function fl(){},
fm:function fm(a){this.a=a},
mg:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.f(new Float32Array(3))
r.p(t,s,d8)
q=new T.f(new Float32Array(3))
q.p(d6,s,d8)
p=new T.f(new Float32Array(3))
p.p(d6,d7,d8)
o=new T.f(new Float32Array(3))
o.p(t,d7,d8)
n=-d8
m=new T.f(new Float32Array(3))
m.p(t,s,n)
l=new T.f(new Float32Array(3))
l.p(t,d7,n)
k=new T.f(new Float32Array(3))
k.p(d6,d7,n)
j=new T.f(new Float32Array(3))
j.p(d6,s,n)
i=new T.f(new Float32Array(3))
i.p(t,d7,n)
h=new T.f(new Float32Array(3))
h.p(t,d7,d8)
g=new T.f(new Float32Array(3))
g.p(d6,d7,d8)
f=new T.f(new Float32Array(3))
f.p(d6,d7,n)
e=new T.f(new Float32Array(3))
e.p(d6,s,d8)
d=new T.f(new Float32Array(3))
d.p(t,s,d8)
c=new T.f(new Float32Array(3))
c.p(t,s,n)
b=new T.f(new Float32Array(3))
b.p(d6,s,n)
a=new T.f(new Float32Array(3))
a.p(d6,s,n)
a0=new T.f(new Float32Array(3))
a0.p(d6,d7,n)
a1=new T.f(new Float32Array(3))
a1.p(d6,d7,d8)
a2=new T.f(new Float32Array(3))
a2.p(d6,s,d8)
a3=new T.f(new Float32Array(3))
a3.p(t,s,n)
a4=new T.f(new Float32Array(3))
a4.p(t,s,d8)
s=new T.f(new Float32Array(3))
s.p(t,d7,d8)
a5=new T.f(new Float32Array(3))
a5.p(t,d7,n)
t=new T.o(new Float32Array(2))
t.t(d3,d5)
n=new T.o(new Float32Array(2))
n.t(d2,d5)
a6=new T.o(new Float32Array(2))
a6.t(d2,d4)
a7=new T.o(new Float32Array(2))
a7.t(d3,d4)
a8=new T.o(new Float32Array(2))
a8.t(d2,d5)
a9=new T.o(new Float32Array(2))
a9.t(d2,d4)
b0=new T.o(new Float32Array(2))
b0.t(d3,d4)
b1=new T.o(new Float32Array(2))
b1.t(d3,d5)
b2=new T.o(new Float32Array(2))
b2.t(d3,d4)
b3=new T.o(new Float32Array(2))
b3.t(d3,d5)
b4=new T.o(new Float32Array(2))
b4.t(d2,d5)
b5=new T.o(new Float32Array(2))
b5.t(d2,d4)
b6=new T.o(new Float32Array(2))
b6.t(d2,d4)
b7=new T.o(new Float32Array(2))
b7.t(d3,d4)
b8=new T.o(new Float32Array(2))
b8.t(d3,d5)
b9=new T.o(new Float32Array(2))
b9.t(d2,d5)
c0=new T.o(new Float32Array(2))
c0.t(d2,d5)
c1=new T.o(new Float32Array(2))
c1.t(d2,d4)
c2=new T.o(new Float32Array(2))
c2.t(d3,d4)
c3=new T.o(new Float32Array(2))
c3.t(d3,d5)
c4=new T.o(new Float32Array(2))
c4.t(d3,d5)
c5=new T.o(new Float32Array(2))
c5.t(d2,d5)
c6=new T.o(new Float32Array(2))
c6.t(d2,d4)
c7=new T.o(new Float32Array(2))
c7.t(d3,d4)
c8=new G.ay(!1,[],[],[],P.L())
c8.U("aTexUV")
c8.U("aNormal")
c8.de(6)
c8.bs([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.az("aTexUV",[t,n,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7])
for(c9=0;t=$.$get$kR(),c9<6;++c9){d0=t[c9]
c8.aA("aNormal",[d0,d0,d0,d0])}return c8},
mh:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=a3/2
s=[]
r=[]
q=[]
p=new T.f(new Float32Array(3))
p.p(0,t,0)
C.a.i(s,p)
p=new T.o(new Float32Array(2))
p.t(0,0)
C.a.i(r,p)
p=new T.f(new Float32Array(3))
p.p(0,1,0)
C.a.i(q,p)
p=-t
o=new T.f(new Float32Array(3))
o.p(0,p,0)
C.a.i(s,o)
o=new T.o(new Float32Array(2))
o.t(1,1)
C.a.i(r,o)
o=new T.f(new Float32Array(3))
o.p(0,-1,0)
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
C.a.i(r,new T.o(o))
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
C.a.i(r,new T.o(o))
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
G.mC(i,h,g,new T.f(o),f)
C.a.i(q,f)
C.a.i(q,f)}H.b(s.length===2+4*a4)
p=[]
o=[]
e=new G.ay(!1,p,o,[],P.L())
e.U("aTexUV")
e.bs(s)
e.az("aTexUV",r)
e.U("aNormal")
e.aA("aNormal",q)
for(d=a4*2,n=0;n<a4;n=b){c=n*2+2
h=c+1
b=n+1
a=(b===a4?0:b)*2+2
a0=a+1
H.b(!0)
C.a.i(p,new G.a2(0,c,a))
H.b(!0)
C.a.i(p,new G.a2(1,a0,h))
H.b(!0)
C.a.i(o,new G.aW(d+a,d+c,d+h,d+a0))}return e},
mr:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.N(t,$.$get$kk())
C.a.N(s,$.$get$kl())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.C)(t),++o){n=t[o]
m=J.i(n)
l=C.a.h(s,m.gV(n))
k=new T.f(new Float32Array(3))
k.w(l)
k.i(0,C.a.h(s,m.gP(n)))
k.a8(0,0.5)
k.D(0)
l=C.a.h(s,m.gP(n))
j=new T.f(new Float32Array(3))
j.w(l)
j.i(0,C.a.h(s,m.ga4(n)))
j.a8(0,0.5)
j.D(0)
l=C.a.h(s,m.ga4(n))
i=new T.f(new Float32Array(3))
i.w(l)
i.i(0,C.a.h(s,m.gV(n)))
i.a8(0,0.5)
i.D(0)
h=s.length
C.a.i(s,k)
g=s.length
C.a.i(s,j)
f=s.length
C.a.i(s,i)
C.a.i(q,new G.a2(m.gV(n),h,f))
C.a.i(q,new G.a2(m.gP(n),g,h))
C.a.i(q,new G.a2(m.ga4(n),f,g))
C.a.i(q,new G.a2(h,g,f))}}e=new G.ay(!1,[],[],[],P.L())
e.U("aTexUV")
e.U("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.C)(t),++o){n=t[o]
m=J.i(n)
d=C.a.h(s,m.gV(n))
H.b(Math.sqrt(d.gS())<1.01&&Math.sqrt(d.gS())>0.99)
c=C.a.h(s,m.gP(n))
H.b(Math.sqrt(c.gS())<1.01&&Math.sqrt(c.gS())>0.99)
b=C.a.h(s,m.ga4(n))
H.b(Math.sqrt(b.gS())<1.01&&Math.sqrt(b.gS())>0.99)
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
e.aA("aNormal",[d,c,b])
m=new T.f(new Float32Array(3))
m.w(d)
m.a8(0,a4)
l=new T.f(new Float32Array(3))
l.w(c)
l.a8(0,a4)
a2=new T.f(new Float32Array(3))
a2.w(b)
a2.a8(0,a4)
e.df([m,l,a2])
e.az("aTexUV",[new T.o(a),new T.o(a0),new T.o(a1)])}return e},
mP:function(a,b,c,d,e,f,a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a1+1
s=a0+1
r=B.mE(new B.fI(e,d,f,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.mW(r,a1,a2,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.ay(!1,[],[],p,P.L())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.C)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.f(new Float32Array(3))
i.w(j)
C.a.i(p,i)}}H.b(p.length===t*s)
o.dk(t,s,!1)
o.dl(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
o.U("aNormal")
for(j=q.length,m=0;m<q.length;q.length===j||(0,H.C)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
h=n.h(0,"aNormal")
i.toString
g=new T.f(new Float32Array(3))
g.w(i);(h&&C.a).i(h,g)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
mW:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
r.w(k)
r.aH(p,a)
r.aH(n,a0)
h=new T.f(new Float32Array(3))
h.w(r)
C.a.i(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aH(p,a)
r.aH(n,a0)
r.D(0)
h=new T.f(new Float32Array(3))
h.w(r)
C.a.i(i,h)}}return t},
mE:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.f(new Float32Array(3))
r=new T.f(new Float32Array(3))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.ay(0,s)
n=new T.f(new Float32Array(3))
n.w(s)
C.a.i(t,n)
n=new T.f(new Float32Array(3))
n.w(r)
C.a.i(t,n)}return t},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mX:function(a){var t,s,r
t=H.B(a.split("\n"),[P.p])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ae(t,"\n")},
kQ:function(a,b,c){var t,s,r,q
t=J.i(a)
s=t.c9(a,b)
t.bm(a,s,c)
t.c5(a,s)
r=t.bi(a,s,35713)
if(r!=null&&!r){q=t.bh(a,s)
P.ak("E:Compilation failed:")
P.ak("E:"+G.mX(c))
P.ak("E:Failure:")
P.ak(C.i.Y("E:",q))
throw H.c(q)}return s},
F:function(a,b,c){return new G.a2(a,b,c)},
mC:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
d.w(b)
d.ay(0,a)
e.w(c)
e.ay(0,a)
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
l=Math.sqrt(e.gS())
if(l===0)return!1
e.a8(0,-1/l)
return!0},
mT:function(a,b,c){return new G.bA(a,b,c)},
jg:function(a){var t=new G.eZ(P.L(),a,!1,!0)
t.dn(a)
return t},
kj:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iY(a[s])
b[t+1]=J.iZ(a[s])
b[t+2]=J.jP(a[s])}return b},
mp:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iY(a[s])
b[t+1]=J.iZ(a[s])}return b},
mq:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iY(a[s])
b[t+1]=J.iZ(a[s])
b[t+2]=J.jP(a[s])
b[t+3]=J.lQ(a[s])}return b},
mo:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bc(a[s],0)
b[t+1]=J.bc(a[s],1)
b[t+2]=J.bc(a[s],2)
b[t+3]=J.bc(a[s],3)}return b},
n3:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gH(t),s=s.gC(s),r=b.x,q=[[P.j,P.y]],p=[P.W],o=[T.aq],n=[T.f],m=[T.o];s.q();){l=s.gu(s)
if(!r.J(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.la>0)H.iH("I: "+l)
continue}k=t.h(0,l)
switch($.$get$R().h(0,l).a){case"vec2":b.ak(l,G.mp(H.dE(k,"$isj",m,"$asj"),null),2)
break
case"vec3":b.ak(l,G.kj(H.dE(k,"$isj",n,"$asj"),null),3)
break
case"vec4":b.ak(l,G.mq(H.dE(k,"$isj",o,"$asj"),null),4)
break
case"float":b.ak(l,new Float32Array(H.ig(H.dE(k,"$isj",p,"$asj"))),1)
break
case"uvec4":b.ak(l,G.mo(H.dE(k,"$isj",q,"$asj"),null),4)
break
default:if(H.V(!1))H.Z("unknown type for "+H.e(l)+" ["+J.lO(k[0]).l(0)+"] ["+new H.ap(H.it(k),null).l(0)+"] "+H.e(k))}}},
cg:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.L()
q=J.lD(t.a)
p=new G.f1(t,q,4,r,s,null,0,-1,null,null,P.L(),"meshdata:"+a,!1,!0)
o=G.kj(c.d,null)
r.j(0,"aPosition",J.iW(t.a))
p.ch=o
p.bt("aPosition",o,3)
n=$.$get$R().h(0,"aPosition")
if(n==null)H.J("Unknown canonical aPosition")
H.b(s.J(0,"aPosition"))
m=s.h(0,"aPosition")
J.dF(t.a,q)
t.cj(0,m,0)
t.cP(0,r.h(0,"aPosition"),m,n.bw(),5126,!1,0,0)
s=c.dj()
p.y=J.iW(t.a)
H.b(p.ch!=null)
r=p.ch.length
if(r<768){p.saZ(new Uint8Array(H.ig(s)))
p.Q=5121}else if(r<196608){p.saZ(new Uint16Array(H.ig(s)))
p.Q=5123}else{p.saZ(new Uint32Array(H.ig(s)))
p.Q=5125}J.dF(t.a,q)
s=p.y
r=p.cx
q=J.v(r)
H.b(!!q.$iskM||!!q.$iskN||!!q.$iskO)
J.iT(t.a,34963,s)
J.jL(t.a,34963,r,35048)
G.n3(c,p)
return p},
kz:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aE(null,null,null,P.p)
s=c.b
r=d.b
q=c.f
p=J.lC(b.a)
o=G.kQ(b.a,35633,s)
J.jK(b.a,p,o)
n=G.kQ(b.a,35632,r)
J.jK(b.a,p,n)
if(q.length>0)J.m1(b.a,p,q,35980)
J.lU(b.a,p)
if(!J.lT(b.a,p,35714))H.J(J.lS(b.a,p))
t=new G.fz(b,c,d,p,P.jd(c.c,null),P.L(),P.L(),t,null,a,!1,!0)
t.ds(a,b,c,d)
return t},
fH:function(a){return new G.fG(a,null,[],[],[],[],0,P.L())},
f4:function f4(){},
bB:function bB(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dN:function dN(){},
dQ:function dQ(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ay:function ay(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
cM:function cM(a,b,c){this.a=a
this.b=b
this.c=c},
eZ:function eZ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
f1:function f1(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fo:function fo(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
e7:function e7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
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
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fK:function fK(){},
h3:function h3(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bz:function bz(){},
he:function he(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
hf:function hf(a,b,c,d,e,f,g,h){var _=this
_.f=a
_.r=b
_.x=c
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h}},R={fO:function fO(){},fP:function fP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
l8:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.w(c)
s=b.d
t.cp(0,s)
r=b.ch
if(r!=null){b.cx
q=!0}else q=!1
if(q){H.e(b)
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
p.el(new T.a4(o))
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
a.di(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.C)(s),++l)A.l8(a,s[l],t,d,e)},
ky:function(a,b,c){var t=new A.fy(c,b,H.B([],[A.bt]),17664,0,0,0,0,a,!1,!0)
t.dr(a,b,c)
return t},
aF:function aF(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
bt:function bt(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fy:function fy(a,b,c,d,e,f,g,h,i,j,k){var _=this
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
dC:function(a){var t,s
t=C.V.eB(a,0,new A.iu())
s=536870911&t+(C.b.cR(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iu:function iu(){}},T={
H:function(a,b,c){var t=new T.f(new Float32Array(3))
t.p(a,b,c)
return t},
a4:function a4(a){this.a=a},
G:function G(a){this.a=a},
o:function o(a){this.a=a},
f:function f(a){this.a=a},
aq:function aq(a){this.a=a}},V={
mB:function(a,b,c,d){var t,s,r,q,p,o,n
t=C.b.K(b,c)
s=new Uint32Array(t)
for(t=2*d,r=0;r<b;++r)for(q=r%t<d,p=0;C.b.a0(p,c);++p){o=q?0:1
s[p*b+r]=o}t=$.$get$jk()
q=J.jM(a.a)
J.bd(a.a,3553,q)
J.lY(a.a,3553,0,35056,b,c,0,34041,34042,s)
t.by(a,3553)
n=J.jQ(a.a)
if(H.V(n===0))H.Z("texture error "+H.e(n))
J.bd(a.a,3553,null)
return new G.hf(b,c,35056,"frame::depth.stencil",q,3553,a,t)},
nC:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
t={}
s=document
r=new R.fP(0,0,null,null,null,null)
r.du(C.m.cU(s,"stats"),"blue","gray")
q=C.m.cq(s,"#webgl-canvas")
p=new G.dQ(null,q)
s=(q&&C.H).cT(q,"webgl2",P.aD(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.J(P.cb('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+H.e(J.lR(s))
if($.la>0)P.ak("I: "+o)
J.lz(s,0,0,0,1)
J.bZ(s,2929)
J.bZ(s,2884)
n=B.mD(25,10,0,q)
o=new T.G(new Float32Array(16))
o.I()
m=new T.G(new Float32Array(16))
m.I()
l=new G.fo(n,50,1,0.1,1000,o,m,new T.G(new Float32Array(16)),P.L(),"perspective",!1,!0)
l.bz()
k=q.clientWidth
j=q.clientHeight
q.width=k
q.height=j
l.dh(k,j)
o=$.$get$jk()
m=J.jM(s)
i=new G.he(k,j,32856,"frame::color",m,3553,p,o)
J.bd(s,3553,m)
J.m_(p.a,3553,1,32856,k,j)
o.by(p,3553)
h=J.jQ(p.a)
if(H.V(h===0))H.Z("texture error "+H.e(h))
J.bd(p.a,3553,null)
g=V.mB(p,k,j,8)
f=new G.ce(p,null,i,g,null)
s=J.lB(p.a)
f.b=s
J.iU(p.a,36160,s)
J.jO(p.a,36160,36064,3553,m,0)
J.jO(p.a,36160,33306,3553,g.b,0)
h=J.lx(p.a,36160)
s=h===36053
if(H.V(s))H.Z("framebuffer error: "+H.e(h))
if(!s)H.J("Error Incomplete Framebuffer: "+H.e(h))
J.iU(p.a,36160,null)
e=A.ky("main",p,f)
e.z=k
e.Q=j
e.r&=4294966271
s=G.kz("solid",p,$.$get$lm(),$.$get$ll())
o=[]
H.b(!0)
C.a.i(e.f,new A.bt(s,[l],o,"solid",!1,!0))
d=G.jg("red")
d.a1("uColor",$.$get$k6())
d.d.j(0,"cStencilFunc",$.$get$fQ())
c=new G.bA(514,1,255)
b=G.jg("blue")
b.a1("uColor",$.$get$k5())
b.d.j(0,"cStencilFunc",c)
m=G.cg("icosahedron-3",s,B.mr(3,1,!0))
a=new Float32Array(9)
a0=new T.G(new Float32Array(16))
a0.I()
a1=new T.G(new Float32Array(16))
a1.I()
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
m=new A.aF(d,m,[],new T.a4(a),a0,a1,new T.f(a2),new T.f(a3),new T.f(a4),new T.f(new Float32Array(3)),"sphere",!1,!0)
m.aj(0,0,0)
H.b(!0)
C.a.i(o,m)
m=G.cg("cube",s,B.mg(!0,1,0,1,0,1,1,1))
a=new Float32Array(9)
a0=new T.G(new Float32Array(16))
a0.I()
a1=new T.G(new Float32Array(16))
a1.I()
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
m=new A.aF(b,m,[],new T.a4(a),a0,a1,new T.f(a2),new T.f(a3),new T.f(a4),new T.f(new Float32Array(3)),"cube",!1,!0)
m.aj(-5,0,-5)
H.b(!0)
C.a.i(o,m)
m=G.cg("cylinder-32",s,B.mh(1,3,2,32,!0))
a=new Float32Array(9)
a0=new T.G(new Float32Array(16))
a0.I()
a1=new T.G(new Float32Array(16))
a1.I()
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
m=new A.aF(d,m,[],new T.a4(a),a0,a1,new T.f(a2),new T.f(a3),new T.f(a4),new T.f(new Float32Array(3)),"cylinder",!1,!0)
m.aj(5,0,-5)
H.b(!0)
C.a.i(o,m)
s=G.cg("torusknot",s,B.mP(!0,!0,1,2,3,1,128,16,0.4,!1))
m=new Float32Array(9)
a=new T.G(new Float32Array(16))
a.I()
a0=new T.G(new Float32Array(16))
a0.I()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
s=new A.aF(b,s,[],new T.a4(m),a,a0,new T.f(a1),new T.f(a2),new T.f(a3),new T.f(new Float32Array(3)),"torus",!1,!0)
s.aj(5,0,5)
H.b(!0)
C.a.i(o,s)
a5=A.ky("copy",p,null)
a5.z=k
a5.Q=j
a6=new G.bB(P.L(),"plain",!1,!0)
s=C.b.Y(0,k)
o=C.b.Y(0,j)
m=new T.o(new Float32Array(2))
m.t(s,o)
a6.a1("uCanvasSize",m)
a6.a1("uTexture",i)
m=G.kz("postproc",p,$.$get$l7(),$.$get$l6())
o=[]
H.b(!0)
C.a.i(a5.f,new A.bt(m,[a6],o,"postproc",!1,!0))
s=new T.f(new Float32Array(3))
s.p(-1,-1,0)
a=new T.f(new Float32Array(3))
a.p(1,-1,0)
a0=new T.f(new Float32Array(3))
a0.p(1,1,0)
a1=new T.f(new Float32Array(3))
a1.p(-1,1,0)
a2=new T.o(new Float32Array(2))
a2.t(0,0)
a3=new T.o(new Float32Array(2))
a3.t(1,0)
a4=new T.o(new Float32Array(2))
a4.t(1,1)
a7=new T.o(new Float32Array(2))
a7.t(0,1)
a8=new T.f(new Float32Array(3))
a8.p(0,0,1)
a9=new G.ay(!1,[],[],[],P.L())
a9.U("aTexUV")
a9.dg([s,a,a0,a1])
a9.az("aTexUV",[a2,a3,a4,a7])
a9.U("aNormal")
a9.aA("aNormal",[a8,a8,a8,a8])
b0=G.cg("quad",m,a9)
s=$.$get$kh()
m=new Float32Array(9)
a=new T.G(new Float32Array(16))
a.I()
a0=new T.G(new Float32Array(16))
a0.I()
a1=new Float32Array(3)
a2=new Float32Array(3)
a3=new Float32Array(3)
a4=new Float32Array(3)
H.b(!0)
C.a.i(o,new A.aF(s,b0,[],new T.a4(m),a,a0,new T.f(a1),new T.f(a2),new T.f(a3),new T.f(a4),"unit-mesh",!1,!0))
t.a=0
new V.iF(t,n,b,c,e,a5,r).$1(0)},
iF:function iF(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var v=[C,H,J,P,W,B,G,R,A,T,V]
setFunctionNamesIfNecessary(v)
var $={}
H.j8.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gA:function(a){return H.aG(a)},
l:function(a){return"Instance of '"+H.bs(a)+"'"},
gE:function(a){return new H.ap(H.it(a),null)}}
J.eL.prototype={
l:function(a){return String(a)},
gA:function(a){return a?519018:218159},
gE:function(a){return C.ap},
$isai:1}
J.eM.prototype={
B:function(a,b){return null==b},
l:function(a){return"null"},
gA:function(a){return 0},
gE:function(a){return C.aj},
$isN:1}
J.bn.prototype={
gA:function(a){return 0},
gE:function(a){return C.ai},
l:function(a){return String(a)},
$iskp:1}
J.fp.prototype={}
J.aK.prototype={}
J.aB.prototype={
l:function(a){var t=a[$.$get$k8()]
return t==null?this.da(a):J.bg(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj6:1}
J.az.prototype={
i:function(a,b){if(!!a.fixed$length)H.J(P.u("add"))
a.push(b)},
N:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.J(P.u("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.C)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.J(P.al(a)))
a.push(q)}},
co:function(a,b){return new H.bo(a,b,[H.as(a,0),null])},
ae:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
v:function(a,b){return this.h(a,b)},
geA:function(a){if(a.length>0)return a[0]
throw H.c(H.eK())},
gaK:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eK())},
bl:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.J(P.u("setRange"))
P.kx(b,c,a.length,null,null,null)
t=C.b.aa(c,b)
if(t===0)return
if(e<0)H.J(P.aH(e,0,null,"skipCount",null))
s=J.X(d)
if(C.b.a_(e+t,s.gk(d)))throw H.c(H.mz())
if(C.b.a0(e,b))for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bV:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.al(a))}return!1},
d5:function(a,b){if(!!a.immutable$list)H.J(P.u("sort"))
H.mS(a,P.nn())},
aO:function(a){return this.d5(a,null)},
F:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
l:function(a){return P.eJ(a,"[","]")},
gC:function(a){return new J.dK(a,a.length,0,null,[H.as(a,0)])},
gA:function(a){return H.aG(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.J(P.u("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.j1(b,"newLength",null))
if(b<0)throw H.c(P.aH(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b9(a,b))
if(b>=a.length||b<0)throw H.c(H.b9(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.J(P.u("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b9(a,b))
if(b>=a.length||b<0)throw H.c(H.b9(a,b))
a[b]=c},
$isq:1,
$asq:function(){},
$isl:1,
$isj:1}
J.j7.prototype={}
J.dK.prototype={
gu:function(a){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.C(t))
r=this.c
if(r>=s){this.sbA(null)
return!1}this.sbA(t[r]);++this.c
return!0},
sbA:function(a){this.d=a}}
J.aY.prototype={
X:function(a,b){var t
if(typeof b!=="number")throw H.c(H.S(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaI(b)
if(this.gaI(a)===t)return 0
if(this.gaI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaI:function(a){return a===0?1/a<0:a<0},
eg:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.u(""+a+".ceil()"))},
af:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.u(""+a+".round()"))},
eh:function(a,b,c){if(this.X(b,c)>0)throw H.c(H.S(b))
if(this.X(a,b)<0)return b
if(this.X(a,c)>0)return c
return a},
f0:function(a,b){var t
if(b>20)throw H.c(P.aH(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaI(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
Y:function(a,b){if(typeof b!=="number")throw H.c(H.S(b))
return a+b},
aa:function(a,b){if(typeof b!=="number")throw H.c(H.S(b))
return a-b},
cS:function(a,b){if(typeof b!=="number")throw H.c(H.S(b))
return a/b},
K:function(a,b){if(typeof b!=="number")throw H.c(H.S(b))
return a*b},
aQ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bR(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.bR(a,b)},
bR:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.u("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
b4:function(a,b){var t
if(a>0)t=this.e3(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e3:function(a,b){return b>31?0:a>>>b},
cR:function(a,b){if(typeof b!=="number")throw H.c(H.S(b))
return(a&b)>>>0},
dd:function(a,b){if(typeof b!=="number")throw H.c(H.S(b))
return(a^b)>>>0},
a0:function(a,b){if(typeof b!=="number")throw H.c(H.S(b))
return a<b},
a_:function(a,b){if(typeof b!=="number")throw H.c(H.S(b))
return a>b},
bd:function(a,b){if(typeof b!=="number")throw H.c(H.S(b))
return a>=b},
gE:function(a){return C.as},
$isI:1,
$asI:function(){return[P.a7]},
$isW:1,
$isa7:1}
J.cl.prototype={
gE:function(a){return C.ar},
$isy:1}
J.ck.prototype={
gE:function(a){return C.aq}}
J.aA.prototype={
aT:function(a,b){if(b>=a.length)throw H.c(H.b9(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(typeof b!=="string")throw H.c(P.j1(b,null,null))
return a+b},
d6:function(a,b,c){var t
if(c>a.length)throw H.c(P.aH(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bn:function(a,b){return this.d6(a,b,0)},
bp:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fu(b,null,null))
if(b>c)throw H.c(P.fu(b,null,null))
if(c>a.length)throw H.c(P.fu(c,null,null))
return a.substring(b,c)},
d7:function(a,b){return this.bp(a,b,null)},
f_:function(a){return a.toLowerCase()},
ej:function(a,b,c){if(c>a.length)throw H.c(P.aH(c,0,a.length,null,null))
return H.nL(a,b,c)},
X:function(a,b){var t
if(typeof b!=="string")throw H.c(H.S(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b9(a,b))
return a[b]},
$isq:1,
$asq:function(){},
$isI:1,
$asI:function(){return[P.p]},
$isp:1}
H.l.prototype={}
H.aZ.prototype={
gC:function(a){return new H.cn(this,this.gk(this),0,null,[H.a6(this,"aZ",0)])},
aM:function(a,b){return this.d9(0,b)},
eZ:function(a,b){var t,s
t=H.B([],[H.a6(this,"aZ",0)])
C.a.sk(t,this.gk(this))
for(s=0;C.b.a0(s,this.gk(this));++s)t[s]=this.v(0,s)
return t},
eY:function(a){return this.eZ(a,!0)}}
H.cn.prototype={
gu:function(a){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.X(t)
r=s.gk(t)
q=this.b
if(q==null?r!=null:q!==r)throw H.c(P.al(t))
if(C.b.bd(this.c,r)){this.sam(null)
return!1}this.sam(s.v(t,this.c));++this.c
return!0},
sam:function(a){this.d=a}}
H.cp.prototype={
gC:function(a){return new H.eX(null,J.aP(this.a),this.b,this.$ti)},
gk:function(a){return J.bf(this.a)},
$asT:function(a,b){return[b]}}
H.ea.prototype={$isl:1,
$asl:function(a,b){return[b]}}
H.eX.prototype={
q:function(){var t=this.b
if(t.q()){this.sam(this.c.$1(t.gu(t)))
return!0}this.sam(null)
return!1},
gu:function(a){return this.a},
sam:function(a){this.a=a},
$ascj:function(a,b){return[b]}}
H.bo.prototype={
gk:function(a){return J.bf(this.a)},
v:function(a,b){return this.b.$1(J.lJ(this.a,b))},
$asl:function(a,b){return[b]},
$asaZ:function(a,b){return[b]},
$asT:function(a,b){return[b]}}
H.cP.prototype={
gC:function(a){return new H.ho(J.aP(this.a),this.b,this.$ti)}}
H.ho.prototype={
q:function(){var t,s
for(t=this.a,s=this.b;t.q();)if(s.$1(t.gu(t)))return!0
return!1},
gu:function(a){var t=this.a
return t.gu(t)}}
H.aX.prototype={}
H.iO.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iP.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hY.prototype={
seK:function(a){this.z=a},
seN:function(a){this.ch=a}}
H.b4.prototype={
dE:function(){var t,s
t=this.e
s=t.a
this.c.i(0,s)
this.dJ(s,t)},
bU:function(a,b){if(!this.f.B(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.b7()},
eS:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.av(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bL();++r.d}this.y=!1}this.b7()},
e7:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
eR:function(a){var t,s,r
if(this.ch==null)return
for(t=J.v(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.J(P.u("removeRange"))
P.kx(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d2:function(a,b){if(!this.r.B(0,a))return
this.db=b},
eE:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.L(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.je(null,null)
this.cx=t}t.a2(0,new H.hS(a,c))},
eD:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aJ()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.je(null,null)
this.cx=t}t.a2(0,this.geL())},
eF:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ak(a)
if(b!=null)P.ak(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.bg(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bF(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.L(0,s)},
aq:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.O(o)
p=H.ar(o)
this.eF(q,p)
if(this.db){this.aJ()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nj(r)
u.globalState.d=H.jD(t,"$isb4")
if(t!=null)$=t.geJ()
if(this.cx!=null)for(;n=this.cx,!n.gau(n);)this.cx.cr().$0()}return s},
cn:function(a){return this.b.h(0,a)},
dJ:function(a,b){var t=this.b
if(t.J(0,a))throw H.c(P.cb("Registry: ports must be registered only once."))
t.j(0,a,b)},
b7:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aJ()},
aJ:function(){var t,s,r
t=this.cx
if(t!=null)t.a5(0)
for(t=this.b,s=t.gcN(t),s=s.gC(s);s.q();)s.gu(s).dK()
t.a5(0)
this.c.a5(0)
u.globalState.z.av(0,this.a)
this.dx.a5(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].L(0,t[r+1])
this.ch=null}},
geJ:function(){return this.d},
gek:function(){return this.e}}
H.hS.prototype={
$0:function(){this.a.L(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hB.prototype={
er:function(){var t=this.a
if(t.b===t.c)return
return t.cr()},
ct:function(){var t,s,r
t=this.er()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.J(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gau(s)}else s=!1
else s=!1
else s=!1
if(s)H.J(P.cb("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gau(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aD(["command","close"])
r=new H.a5(!0,P.b5(null,P.y)).O(r)
s.toString
self.postMessage(r)}return!1}t.eP()
return!0},
bP:function(){if(self.window!=null)new H.hC(this).$0()
else for(;this.ct(););},
aw:function(){var t,s,r,q,p
if(!u.globalState.x)this.bP()
else try{this.bP()}catch(r){t=H.O(r)
s=H.ar(r)
q=u.globalState.Q
p=P.aD(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a5(!0,P.b5(null,P.y)).O(p)
q.toString
self.postMessage(p)}}}
H.hC.prototype={
$0:function(){if(!this.a.ct())return
P.mV(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.aN.prototype={
eP:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.aq(this.b)}}
H.hX.prototype={}
H.eH.prototype={
$0:function(){H.mv(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eI.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.ba(s,{func:1,args:[P.N,P.N]}))s.$2(this.e,this.d)
else if(H.ba(s,{func:1,args:[P.N]}))s.$1(this.e)
else s.$0()}t.b7()},
$S:function(){return{func:1,v:true}}}
H.hw.prototype={}
H.b6.prototype={
L:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n7(b)
if(t.gek()===s){s=J.X(r)
switch(s.h(r,0)){case"pause":t.bU(s.h(r,1),s.h(r,2))
break
case"resume":t.eS(s.h(r,1))
break
case"add-ondone":t.e7(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eR(s.h(r,1))
break
case"set-errors-fatal":t.d2(s.h(r,1),s.h(r,2))
break
case"ping":t.eE(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eD(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.av(0,s)
break}return}u.globalState.f.a.a2(0,new H.aN(t,new H.hZ(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b6){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gA:function(a){return this.b.a}}
H.hZ.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dH(0,this.b)},
$S:function(){return{func:1}}}
H.bQ.prototype={
L:function(a,b){var t,s,r
t=P.aD(["command","message","port",this,"msg",b])
s=new H.a5(!0,P.b5(null,P.y)).O(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bQ){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){return C.b.dd((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cC.prototype={
dK:function(){this.c=!0
this.b=null},
dH:function(a,b){if(this.c)return
this.b.$1(b)},
$ismM:1}
H.h5.prototype={
dv:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.a2(0,new H.aN(s,new H.h6(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.iq()
this.c=self.setTimeout(H.bU(new H.h7(this,b),0),a)}else{H.b(a>0)
throw H.c(P.u("Timer greater than 0."))}}}
H.h6.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h7.prototype={
$0:function(){var t=this.a
t.c=null
H.iE()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.au.prototype={
gA:function(a){var t=this.a
t=C.b.b4(t,0)^C.b.M(t,4294967296)
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
H.a5.prototype={
O:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gk(t))
t=J.v(a)
if(!!t.$isbq)return["buffer",a]
if(!!t.$isb1)return["typed",a]
if(!!t.$isq)return this.cZ(a)
if(!!t.$isms){r=this.gcW()
q=t.gH(a)
q=H.jf(q,r,H.a6(q,"T",0),null)
q=P.kr(q,!0,H.a6(q,"T",0))
t=t.gcN(a)
t=H.jf(t,r,H.a6(t,"T",0),null)
return["map",q,P.kr(t,!0,H.a6(t,"T",0))]}if(!!t.$iskp)return this.d_(a)
if(!!t.$isa)this.cL(a)
if(!!t.$ismM)this.ax(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb6)return this.d0(a)
if(!!t.$isbQ)return this.d1(a)
if(!!t.$isaw){p=a.$static_name
if(p==null)this.ax(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isau)return["capability",a.a]
if(!(a instanceof P.E))this.cL(a)
return["dart",u.classIdExtractor(a),this.cY(u.classFieldsExtractor(a))]},
ax:function(a,b){throw H.c(P.u((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cL:function(a){return this.ax(a,null)},
cZ:function(a){var t
H.b(typeof a!=="string")
t=this.cX(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ax(a,"Can't serialize indexable: ")},
cX:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.O(a[s])
return t},
cY:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.O(a[t]))
return a},
d_:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ax(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.O(a[t[r]])
return["js-object",t,s]},
d1:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d0:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aM.prototype={
a6:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.jY("Bad serialized message: "+H.e(a)))
switch(C.a.geA(a)){case"ref":H.b(J.D(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.b(J.D(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.b(J.D(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.b(J.D(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
return J.an(H.B(this.ap(t),[null]))
case"extendable":H.b(J.D(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.B(this.ap(t),[null])
case"mutable":H.b(J.D(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.ap(t)
case"const":H.b(J.D(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
return J.an(H.B(this.ap(t),[null]))
case"map":return this.ev(a)
case"sendport":return this.ew(a)
case"raw sendport":H.b(J.D(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.eu(a)
case"function":H.b(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.b(J.D(a[0],"capability"))
return new H.au(a[1])
case"dart":H.b(J.D(a[0],"dart"))
s=a[1]
r=a[2]
q=u.instanceFromClassId(s)
C.a.i(this.b,q)
this.ap(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ap:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a6(a[t]))
return a},
ev:function(a){var t,s,r,q,p
H.b(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.L()
C.a.i(this.b,r)
t=J.lV(t,this.ges()).eY(0)
for(q=J.X(s),p=0;p<t.length;++p)r.j(0,t[p],this.a6(q.h(s,p)))
return r},
ew:function(a){var t,s,r,q,p,o,n
H.b(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cn(r)
if(o==null)return
n=new H.b6(o,s)}else n=new H.bQ(t,r,s)
C.a.i(this.b,n)
return n},
eu:function(a){var t,s,r,q,p,o
H.b(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.X(t),p=J.X(s),o=0;C.b.a0(o,q.gk(t));++o)r[q.h(t,o)]=this.a6(p.h(s,o))
return r}}
H.fx.prototype={}
H.hb.prototype={
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
H.ff.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eO.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.hh.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iQ.prototype={
$1:function(a){if(!!J.v(a).$isaV)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.df.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isb2:1}
H.iz.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iA.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iB.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iC.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iD.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.aw.prototype={
l:function(a){return"Closure '"+H.bs(this).trim()+"'"},
$isj6:1,
gf3:function(){return this},
$D:null}
H.h0.prototype={}
H.fN.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bh.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bh))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var t,s
t=this.c
if(t==null)s=H.aG(this.a)
else s=typeof t!=="object"?J.be(t):H.aG(t)
return(s^H.aG(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bs(t)+"'")}}
H.hd.prototype={
l:function(a){return this.a}}
H.dP.prototype={
l:function(a){return this.a}}
H.fC.prototype={
l:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hq.prototype={
l:function(a){return C.i.Y("Assertion failed: ",P.ca(this.a))}}
H.ap.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gA:function(a){return J.be(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ap){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aa.prototype={
gk:function(a){return this.a},
gau:function(a){return this.a===0},
gH:function(a){return new H.eR(this,[H.as(this,0)])},
gcN:function(a){return H.jf(this.gH(this),new H.eN(this),H.as(this,0),H.as(this,1))},
J:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bI(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bI(s,b)}else return this.eG(b)},
eG:function(a){var t=this.d
if(t==null)return!1
return this.at(this.aF(t,this.as(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.an(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.an(r,b)
return s==null?null:s.b}else return this.eH(b)},
eH:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aF(t,this.as(a))
r=this.at(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b0()
this.b=t}this.bC(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b0()
this.c=s}this.bC(s,b,c)}else{r=this.d
if(r==null){r=this.b0()
this.d=r}q=this.as(b)
p=this.aF(r,q)
if(p==null)this.b3(r,q,[this.b1(b,c)])
else{o=this.at(p,b)
if(o>=0)p[o].b=c
else p.push(this.b1(b,c))}}},
av:function(a,b){if(typeof b==="string")return this.bO(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bO(this.c,b)
else return this.eI(b)},
eI:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aF(t,this.as(a))
r=this.at(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bS(q)
return q.b},
a5:function(a){if(this.a>0){this.f=null
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
if(s!==this.r)throw H.c(P.al(this))
t=t.c}},
bC:function(a,b,c){var t=this.an(a,b)
if(t==null)this.b3(a,b,this.b1(b,c))
else t.b=c},
bO:function(a,b){var t
if(a==null)return
t=this.an(a,b)
if(t==null)return
this.bS(t)
this.bJ(a,b)
return t.b},
b_:function(){this.r=this.r+1&67108863},
b1:function(a,b){var t,s
t=new H.eQ(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.b_()
return t},
bS:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.b_()},
as:function(a){return J.be(a)&0x3ffffff},
at:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
l:function(a){return P.ks(this)},
an:function(a,b){return a[b]},
aF:function(a,b){return a[b]},
b3:function(a,b,c){H.b(c!=null)
a[b]=c},
bJ:function(a,b){delete a[b]},
bI:function(a,b){return this.an(a,b)!=null},
b0:function(){var t=Object.create(null)
this.b3(t,"<non-identifier-key>",t)
this.bJ(t,"<non-identifier-key>")
return t},
$isms:1}
H.eN.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eQ.prototype={}
H.eR.prototype={
gk:function(a){return this.a.a},
gC:function(a){var t,s
t=this.a
s=new H.eS(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eS.prototype={
gu:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sbB(null)
return!1}else{this.sbB(t.a)
this.c=this.c.c
return!0}}},
sbB:function(a){this.d=a}}
H.iv.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.iw.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.p]}}}
H.ix.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.p]}}}
H.bq.prototype={
gE:function(a){return C.ab},
$isbq:1}
H.b1.prototype={$isb1:1}
H.f5.prototype={
gE:function(a){return C.ac}}
H.cs.prototype={
gk:function(a){return a.length},
$isq:1,
$asq:function(){},
$ist:1,
$ast:function(){}}
H.ct.prototype={
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
j:function(a,b,c){H.ah(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.W]},
$asaX:function(){return[P.W]},
$asm:function(){return[P.W]},
$isj:1,
$asj:function(){return[P.W]}}
H.cu.prototype={
j:function(a,b,c){H.ah(b,a,a.length)
a[b]=c},
$isl:1,
$asl:function(){return[P.y]},
$asaX:function(){return[P.y]},
$asm:function(){return[P.y]},
$isj:1,
$asj:function(){return[P.y]}}
H.cr.prototype={
gE:function(a){return C.ad},
$isey:1}
H.f6.prototype={
gE:function(a){return C.ae}}
H.f7.prototype={
gE:function(a){return C.af},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.f8.prototype={
gE:function(a){return C.ag},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskm:1}
H.f9.prototype={
gE:function(a){return C.ah},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.fa.prototype={
gE:function(a){return C.al},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskM:1}
H.fb.prototype={
gE:function(a){return C.am},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskN:1}
H.cv.prototype={
gE:function(a){return C.an},
gk:function(a){return a.length},
h:function(a,b){H.ah(b,a,a.length)
return a[b]}}
H.fc.prototype={
gE:function(a){return C.ao},
gk:function(a){return a.length},
h:function(a,b){H.ah(b,a,a.length)
return a[b]},
$iskO:1}
H.bH.prototype={}
H.bI.prototype={}
H.bJ.prototype={}
H.bK.prototype={}
P.hs.prototype={
$1:function(a){var t,s
H.iE()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.hr.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.iq()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.ht.prototype={
$0:function(){H.iE()
this.a.$0()},
$S:function(){return{func:1}}}
P.hu.prototype={
$0:function(){H.iE()
this.a.$0()},
$S:function(){return{func:1}}}
P.j3.prototype={}
P.hx.prototype={}
P.ia.prototype={
ei:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.jj("Future already completed"))
t.aW(b)}}
P.cY.prototype={
eO:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.bc(this.d,a.a)},
eC:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.ba(s,{func:1,args:[P.E,P.b2]}))return t.eT(s,a.a,a.b)
else return t.bc(s,a.a)}}
P.ag.prototype={
cA:function(a,b){var t,s,r
t=$.A
if(t!==C.f){t.toString
if(b!=null)b=P.nb(b,t)}s=new P.ag(0,t,null,[null])
r=b==null?1:3
this.bD(new P.cY(null,s,r,a,b,[H.as(this,0),null]))
return s},
cz:function(a){return this.cA(a,null)},
aS:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bD:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jD(this.c,"$iscY")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bD(a)
return}this.aS(t)}H.b(this.a>=4)
t=this.b
t.toString
P.ij(null,null,t,new P.hH(this,a))}},
bN:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bN(a)
return}this.aS(s)}H.b(this.a>=4)
t.a=this.aG(a)
s=this.b
s.toString
P.ij(null,null,s,new P.hL(t,this))}},
b2:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.aG(t)},
aG:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aW:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.ik(a,"$iseB",t,"$aseB")
if(s){t=H.ik(a,"$isag",t,null)
if(t)P.kS(a,this)
else P.n2(a,this)}else{r=this.b2()
H.b(this.a<4)
this.a=4
this.c=a
P.bD(this,r)}},
aC:function(a,b){var t
H.b(this.a<4)
t=this.b2()
H.b(this.a<4)
this.a=8
this.c=new P.aQ(a,b)
P.bD(this,t)},
dM:function(a){return this.aC(a,null)},
$iseB:1,
gb5:function(){return this.a},
ge0:function(){return this.c}}
P.hH.prototype={
$0:function(){P.bD(this.a,this.b)},
$S:function(){return{func:1}}}
P.hL.prototype={
$0:function(){P.bD(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hI.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aW(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hJ.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.aC(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hK.prototype={
$0:function(){this.a.aC(this.b,this.c)},
$S:function(){return{func:1}}}
P.hO.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cs(q.d)}catch(n){s=H.O(n)
r=H.ar(n)
if(this.d){q=this.a.a
H.b(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.b(q.a===8)
p.b=q.c}else p.b=new P.aQ(s,r)
p.a=!0
return}if(!!J.v(t).$iseB){if(t instanceof P.ag&&t.gb5()>=4){if(t.gb5()===8){q=t
H.b(q.gb5()===8)
p=this.b
p.b=q.ge0()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cz(new P.hP(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hP.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hN.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.bc(r.d,this.c)}catch(q){t=H.O(q)
s=H.ar(q)
r=this.a
r.b=new P.aQ(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hM.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eO(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eC(t)
p.a=!1}}catch(o){s=H.O(o)
r=H.ar(o)
q=this.a
p=q.a
H.b(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.b(q.a===8)
m.b=q.c}else m.b=new P.aQ(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.cQ.prototype={}
P.fT.prototype={
gk:function(a){var t,s
t={}
s=new P.ag(0,$.A,null,[P.y])
t.a=0
this.eM(new P.fV(t),!0,new P.fW(t,s),s.gdL())
return s}}
P.fV.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fW.prototype={
$0:function(){this.b.aW(this.a.a)},
$S:function(){return{func:1}}}
P.fU.prototype={}
P.jl.prototype={}
P.aQ.prototype={
l:function(a){return H.e(this.a)},
$isaV:1}
P.ie.prototype={}
P.ii.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cz()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.i0.prototype={
eU:function(a){var t,s,r
try{if(C.f===$.A){a.$0()
return}P.kY(null,null,this,a)}catch(r){t=H.O(r)
s=H.ar(r)
P.ih(null,null,this,t,s)}},
eV:function(a,b){var t,s,r
try{if(C.f===$.A){a.$1(b)
return}P.kZ(null,null,this,a,b)}catch(r){t=H.O(r)
s=H.ar(r)
P.ih(null,null,this,t,s)}},
ed:function(a){return new P.i2(this,a)},
b8:function(a){return new P.i1(this,a)},
ee:function(a){return new P.i3(this,a)},
h:function(a,b){return},
cs:function(a){if($.A===C.f)return a.$0()
return P.kY(null,null,this,a)},
bc:function(a,b){if($.A===C.f)return a.$1(b)
return P.kZ(null,null,this,a,b)},
eT:function(a,b,c){if($.A===C.f)return a.$2(b,c)
return P.nc(null,null,this,a,b,c)}}
P.i2.prototype={
$0:function(){return this.a.cs(this.b)},
$S:function(){return{func:1}}}
P.i1.prototype={
$0:function(){return this.a.eU(this.b)},
$S:function(){return{func:1}}}
P.i3.prototype={
$1:function(a){return this.a.eV(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hV.prototype={
as:function(a){return H.nE(a)&0x3ffffff},
at:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hT.prototype={
gC:function(a){var t=new P.bF(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
F:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dN(b)},
dN:function(a){var t=this.d
if(t==null)return!1
return this.aE(t[this.aD(a)],a)>=0},
cn:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.F(0,a)?a:null
else return this.dV(a)},
dV:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aD(a)]
r=this.aE(s,a)
if(r<0)return
return J.bc(s,r).gdP()},
i:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jv()
this.b=t}return this.bF(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jv()
this.c=s}return this.bF(s,b)}else return this.a2(0,b)},
a2:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jv()
this.d=t}s=this.aD(b)
r=t[s]
if(r==null){q=[this.aV(b)]
H.b(q!=null)
t[s]=q}else{if(this.aE(r,b)>=0)return!1
r.push(this.aV(b))}return!0},
av:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bG(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bG(this.c,b)
else return this.dW(0,b)},
dW:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aD(b)]
r=this.aE(s,b)
if(r<0)return!1
this.bH(s.splice(r,1)[0])
return!0},
a5:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aU()}},
bF:function(a,b){var t
if(a[b]!=null)return!1
t=this.aV(b)
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
aU:function(){this.r=this.r+1&67108863},
aV:function(a){var t,s
t=new P.hU(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aU()
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
this.aU()},
aD:function(a){return J.be(a)&0x3ffffff},
aE:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1}}
P.hU.prototype={
gdP:function(){return this.a}}
P.bF.prototype={
gu:function(a){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.al(t))
else{t=this.c
if(t==null){this.sal(null)
return!1}else{this.sal(t.a)
this.c=this.c.b
return!0}}},
sal:function(a){this.d=a}}
P.hR.prototype={}
P.jc.prototype={$isl:1}
P.cm.prototype={$isl:1,$isj:1}
P.m.prototype={
gC:function(a){return new H.cn(a,this.gk(a),0,null,[H.a6(a,"m",0)])},
v:function(a,b){return this.h(a,b)},
co:function(a,b){return new H.bo(a,b,[H.a6(a,"m",0),null])},
eB:function(a,b,c){var t,s,r,q
t=this.gk(a)
for(s=b,r=0;C.b.a0(r,t);++r){s=c.$2(s,this.h(a,r))
q=this.gk(a)
if(t==null?q!=null:t!==q)throw H.c(P.al(a))}return s},
l:function(a){return P.eJ(a,"[","]")}}
P.co.prototype={}
P.eW.prototype={
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
ar:function(a,b){var t,s
for(t=J.aP(this.gH(a));t.q();){s=t.gu(t)
b.$2(s,this.h(a,s))}},
gk:function(a){return J.bf(this.gH(a))},
l:function(a){return P.ks(a)}}
P.eT.prototype={
dm:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbQ(H.B(t,[b]))},
gC:function(a){return new P.hW(this,this.c,this.d,this.b,null,this.$ti)},
gau:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
v:function(a,b){var t=this.gk(this)
if(C.b.a_(0,b)||b>=t)H.J(P.z(b,this,"index",null,t))
return this.a[(C.b.Y(this.b,b)&this.a.length-1)>>>0]},
a5:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eJ(this,"{","}")},
cr:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eK());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
a2:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bL();++this.d},
bL:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.B(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bl(s,0,q,t,r)
C.a.bl(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbQ(s)},
sbQ:function(a){this.a=a}}
P.hW.prototype={
gu:function(a){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.J(P.al(t))
s=this.d
if(s===this.b){this.sal(null)
return!1}this.sal(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sal:function(a){this.e=a}}
P.fF.prototype={
N:function(a,b){var t
for(t=J.aP(b);t.q();)this.i(0,t.gu(t))},
l:function(a){return P.eJ(this,"{","}")},
$isl:1}
P.fE.prototype={}
P.bG.prototype={}
P.ai.prototype={}
P.I.prototype={}
P.aU.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aU))return!1
return this.a===b.a&&this.b===b.b},
X:function(a,b){return C.b.X(this.a,b.a)},
gA:function(a){var t=this.a
return(t^C.b.b4(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.mi(H.mL(this))
s=P.c3(H.mJ(this))
r=P.c3(H.mF(this))
q=P.c3(H.mG(this))
p=P.c3(H.mI(this))
o=P.c3(H.mK(this))
n=P.mj(H.mH(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isI:1,
$asI:function(){return[P.aU]}}
P.W.prototype={}
P.ax.prototype={
a0:function(a,b){return C.b.a0(this.a,b.gdO())},
a_:function(a,b){return C.b.a_(this.a,b.gdO())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.ax))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
X:function(a,b){return C.b.X(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.e9()
s=this.a
if(s<0)return"-"+new P.ax(0-s).l(0)
r=t.$1(C.b.M(s,6e7)%60)
q=t.$1(C.b.M(s,1e6)%60)
p=new P.e8().$1(s%1e6)
return""+C.b.M(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isI:1,
$asI:function(){return[P.ax]}}
P.e8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.y]}}}
P.e9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.p,args:[P.y]}}}
P.aV.prototype={}
P.c0.prototype={
l:function(a){return"Assertion failed"}}
P.cz.prototype={
l:function(a){return"Throw of null."}}
P.a_.prototype={
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
o=P.ca(this.b)
return q+p+": "+H.e(o)}}
P.cB.prototype={
gaY:function(){return"RangeError"},
gaX:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.eG.prototype={
gaY:function(){return"RangeError"},
gaX:function(){H.b(this.a)
if(J.lr(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gk:function(a){return this.f}}
P.hi.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.hg.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.b3.prototype={
l:function(a){return"Bad state: "+this.a}}
P.dR.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.ca(t))+"."}}
P.cH.prototype={
l:function(a){return"Stack Overflow"},
$isaV:1}
P.e_.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.j5.prototype={}
P.hG.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.ec.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.J(P.j1(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ku(b,"expando$values")
return s==null?null:H.ku(s,t)},
l:function(a){return"Expando:"+H.e(this.b)}}
P.y.prototype={}
P.T.prototype={
aM:function(a,b){return new H.cP(this,b,[H.a6(this,"T",0)])},
gk:function(a){var t,s
H.b(!this.$isl)
t=this.gC(this)
for(s=0;t.q();)++s
return s},
ga9:function(a){var t,s
t=this.gC(this)
if(!t.q())throw H.c(H.eK())
s=t.gu(t)
if(t.q())throw H.c(H.mA())
return s},
v:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.m9("index"))
if(b<0)H.J(P.aH(b,0,null,"index",null))
for(t=this.gC(this),s=0;t.q();){r=t.gu(t)
if(b===s)return r;++s}throw H.c(P.z(b,this,"index",null,s))},
l:function(a){return P.my(this,"(",")")}}
P.cj.prototype={}
P.j.prototype={$isl:1}
P.b_.prototype={}
P.N.prototype={
gA:function(a){return P.E.prototype.gA.call(this,this)},
l:function(a){return"null"}}
P.a7.prototype={$isI:1,
$asI:function(){return[P.a7]}}
P.E.prototype={constructor:P.E,$isE:1,
B:function(a,b){return this===b},
gA:function(a){return H.aG(this)},
l:function(a){return"Instance of '"+H.bs(this)+"'"},
gE:function(a){return new H.ap(H.it(this),null)},
toString:function(){return this.l(this)}}
P.b2.prototype={}
P.p.prototype={$isI:1,
$asI:function(){return[P.p]}}
P.bv.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gab:function(){return this.a}}
P.jo.prototype={}
W.k.prototype={}
W.c_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dH.prototype={
gk:function(a){return a.length}}
W.dI.prototype={
l:function(a){return String(a)}}
W.dJ.prototype={
l:function(a){return String(a)}}
W.at.prototype={$isat:1}
W.c1.prototype={
cT:function(a,b,c){var t=this.dR(a,b,P.nm(c,null))
return t},
dR:function(a,b,c){return a.getContext(b,c)}}
W.dO.prototype={
aN:function(a){return P.im(a.getContextAttributes())}}
W.av.prototype={
gk:function(a){return a.length}}
W.dS.prototype={
gk:function(a){return a.length}}
W.dT.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.aS.prototype={
bE:function(a,b){var t,s
t=$.$get$k7()
s=t[b]
if(typeof s==="string")return s
s=this.e4(a,b)
t[b]=s
return s},
e4:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mk()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.dW.prototype={}
W.a0.prototype={}
W.aT.prototype={}
W.dX.prototype={
gk:function(a){return a.length}}
W.dY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.dZ.prototype={
gk:function(a){return a.length}}
W.e0.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.c4.prototype={}
W.bi.prototype={
e8:function(a,b){return a.adoptNode(b)},
cU:function(a,b){return a.getElementById(b)},
cq:function(a,b){return a.querySelector(b)}}
W.e2.prototype={
l:function(a){return String(a)}}
W.c5.prototype={
eo:function(a,b){return a.createHTMLDocument(b)}}
W.e3.prototype={
gV:function(a){return a.a},
gP:function(a){return a.b},
ga4:function(a){return a.c}}
W.c6.prototype={
gV:function(a){return a.a},
gP:function(a){return a.b},
ga4:function(a){return a.c}}
W.e4.prototype={
gaL:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.c7.prototype={
gaL:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.c8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.U]},
$isl:1,
$asl:function(){return[P.U]},
$ist:1,
$ast:function(){return[P.U]},
$asm:function(){return[P.U]},
$isj:1,
$asj:function(){return[P.U]},
$asn:function(){return[P.U]}}
W.c9.prototype={
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gag(a))+" x "+H.e(this.gad(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isU)return!1
return a.left===t.gcl(b)&&a.top===t.gcB(b)&&this.gag(a)===t.gag(b)&&this.gad(a)===t.gad(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gag(a)
q=this.gad(a)
return W.kW(W.aO(W.aO(W.aO(W.aO(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gad:function(a){return a.height},
gcl:function(a){return a.left},
gcB:function(a){return a.top},
gag:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isU:1,
$asU:function(){}}
W.e5.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[P.p]},
$isl:1,
$asl:function(){return[P.p]},
$ist:1,
$ast:function(){return[P.p]},
$asm:function(){return[P.p]},
$isj:1,
$asj:function(){return[P.p]},
$asn:function(){return[P.p]}}
W.e6.prototype={
gk:function(a){return a.length}}
W.a1.prototype={
geb:function(a){return new W.hA(a)},
l:function(a){return a.localName},
R:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kg
if(t==null){t=H.B([],[W.cx])
s=new W.cy(t)
C.a.i(t,W.kT(null))
C.a.i(t,W.kX())
$.kg=s
d=s}else d=t
t=$.kf
if(t==null){t=new W.dq(d)
$.kf=t
c=t}else{t.a=d
c=t}}if($.am==null){t=document
s=t.implementation
s=(s&&C.I).eo(s,"")
$.am=s
$.j4=s.createRange()
s=$.am
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.am.head;(t&&C.J).W(t,r)}t=$.am
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jD(s,"$isat")}t=$.am
if(!!this.$isat)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.am.body;(t&&C.o).W(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.F(C.T,a.tagName)){t=$.j4;(t&&C.B).cV(t,q)
t=$.j4
p=(t&&C.B).em(t,b)}else{q.innerHTML=b
p=$.am.createDocumentFragment()
for(t=J.i(p);s=q.firstChild,s!=null;)t.W(p,s)}t=$.am.body
if(q==null?t!=null:q!==t)J.jS(q)
c.bk(p)
C.m.e8(document,p)
return p},
en:function(a,b,c){return this.R(a,b,c,null)},
d4:function(a,b,c,d){a.textContent=null
this.W(a,this.R(a,b,c,d))},
d3:function(a,b){return this.d4(a,b,null,null)},
ah:function(a,b){return a.getAttribute(b)},
dX:function(a,b){return a.removeAttribute(b)},
$isa1:1,
geW:function(a){return a.tagName}}
W.eb.prototype={
$1:function(a){return!!J.v(a).$isa1},
$S:function(a){return{func:1,args:[,]}}}
W.h.prototype={}
W.d.prototype={
dI:function(a,b,c,d){return a.addEventListener(b,H.bU(c,1),!1)}}
W.ev.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cc]},
$isl:1,
$asl:function(){return[W.cc]},
$ist:1,
$ast:function(){return[W.cc]},
$asm:function(){return[W.cc]},
$isj:1,
$asj:function(){return[W.cc]},
$asn:function(){return[W.cc]}}
W.ew.prototype={
gk:function(a){return a.length}}
W.eA.prototype={
gk:function(a){return a.length}}
W.eC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.ch.prototype={}
W.eD.prototype={
gk:function(a){return a.length}}
W.bk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ci.prototype={}
W.eE.prototype={
L:function(a,b){return a.send(b)}}
W.bl.prototype={}
W.bm.prototype={$isbm:1}
W.aC.prototype={$isaC:1}
W.eU.prototype={
l:function(a){return String(a)}}
W.eV.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
W.f0.prototype={
gk:function(a){return a.length}}
W.f2.prototype={
f4:function(a,b,c){return a.send(b,c)},
L:function(a,b){return a.send(b)}}
W.bp.prototype={}
W.f3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cq]},
$isl:1,
$asl:function(){return[W.cq]},
$ist:1,
$ast:function(){return[W.cq]},
$asm:function(){return[W.cq]},
$isj:1,
$asj:function(){return[W.cq]},
$asn:function(){return[W.cq]}}
W.M.prototype={$isM:1}
W.Q.prototype={
ga9:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.jj("No elements"))
if(s>1)throw H.c(P.jj("More than one element"))
return t.firstChild},
N:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.i(s),p=0;p<r;++p)q.W(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lt(t,c,C.z.h(t.childNodes,b))},
gC:function(a){var t=this.a.childNodes
return new W.cd(t,t.length,-1,null,[H.a6(t,"n",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$asl:function(){return[W.r]},
$ascm:function(){return[W.r]},
$asm:function(){return[W.r]},
$asj:function(){return[W.r]},
$asbG:function(){return[W.r]}}
W.r.prototype={
eQ:function(a){var t=a.parentNode
if(t!=null)J.iR(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.d8(a):t},
W:function(a,b){return a.appendChild(b)},
dY:function(a,b){return a.removeChild(b)},
dZ:function(a,b,c){return a.replaceChild(b,c)},
$isr:1,
gba:function(a){return a.previousSibling}}
W.cw.prototype={
bb:function(a){return a.previousNode()}}
W.br.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.ab.prototype={
gk:function(a){return a.length}}
W.fq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ab]},
$isl:1,
$asl:function(){return[W.ab]},
$ist:1,
$ast:function(){return[W.ab]},
$asm:function(){return[W.ab]},
$isj:1,
$asj:function(){return[W.ab]},
$asn:function(){return[W.ab]}}
W.ft.prototype={
L:function(a,b){return a.send(b)}}
W.cA.prototype={
em:function(a,b){return a.createContextualFragment(b)},
cV:function(a,b){return a.selectNodeContents(b)}}
W.cD.prototype={
L:function(a,b){return a.send(b)}}
W.fD.prototype={
gk:function(a){return a.length}}
W.ao.prototype={}
W.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cF]},
$isl:1,
$asl:function(){return[W.cF]},
$ist:1,
$ast:function(){return[W.cF]},
$asm:function(){return[W.cF]},
$isj:1,
$asj:function(){return[W.cF]},
$asn:function(){return[W.cF]}}
W.fL.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cG]},
$isl:1,
$asl:function(){return[W.cG]},
$ist:1,
$ast:function(){return[W.cG]},
$asm:function(){return[W.cG]},
$isj:1,
$asj:function(){return[W.cG]},
$asn:function(){return[W.cG]}}
W.ac.prototype={
gk:function(a){return a.length}}
W.fR.prototype={
h:function(a,b){return this.bK(a,b)},
ar:function(a,b){var t,s
for(t=0;!0;++t){s=this.dU(a,t)
if(s==null)return
b.$2(s,this.bK(a,s))}},
gH:function(a){var t=H.B([],[P.p])
this.ar(a,new W.fS(t))
return t},
gk:function(a){return a.length},
bK:function(a,b){return a.getItem(b)},
dU:function(a,b){return a.key(b)},
$asb0:function(){return[P.p,P.p]}}
W.fS.prototype={
$2:function(a,b){return C.a.i(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cJ.prototype={
R:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
t=W.ml("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.Q(s).N(0,new W.Q(t))
return s}}
W.fZ.prototype={
R:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.R(t.createElement("table"),b,c,d)
t.toString
t=new W.Q(t)
r=t.ga9(t)
r.toString
t=new W.Q(r)
q=t.ga9(t)
s.toString
q.toString
new W.Q(s).N(0,new W.Q(q))
return s}}
W.h_.prototype={
R:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aP(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.R(t.createElement("table"),b,c,d)
t.toString
t=new W.Q(t)
r=t.ga9(t)
s.toString
r.toString
new W.Q(s).N(0,new W.Q(r))
return s}}
W.bw.prototype={$isbw:1}
W.h1.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cL]},
$isl:1,
$asl:function(){return[W.cL]},
$ist:1,
$ast:function(){return[W.cL]},
$asm:function(){return[W.cL]},
$isj:1,
$asj:function(){return[W.cL]},
$asn:function(){return[W.cL]}}
W.h2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cK]},
$isl:1,
$asl:function(){return[W.cK]},
$ist:1,
$ast:function(){return[W.cK]},
$asm:function(){return[W.cK]},
$isj:1,
$asj:function(){return[W.cK]},
$asn:function(){return[W.cK]}}
W.h4.prototype={
gk:function(a){return a.length}}
W.aI.prototype={$isaI:1}
W.h8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cN]},
$isl:1,
$asl:function(){return[W.cN]},
$ist:1,
$ast:function(){return[W.cN]},
$asm:function(){return[W.cN]},
$isj:1,
$asj:function(){return[W.cN]},
$asn:function(){return[W.cN]}}
W.h9.prototype={
gk:function(a){return a.length}}
W.cO.prototype={
bb:function(a){return a.previousNode()}}
W.aJ.prototype={}
W.hj.prototype={
l:function(a){return String(a)}}
W.hl.prototype={
gm:function(a){return a.x},
gG:function(a){return a.z}}
W.hm.prototype={
gk:function(a){return a.length}}
W.hn.prototype={
L:function(a,b){return a.send(b)}}
W.aL.prototype={
geq:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.u("deltaY is not supported"))},
$isaL:1}
W.bC.prototype={
gea:function(a){var t,s
t=P.a7
s=new P.ag(0,$.A,null,[t])
this.dQ(a)
this.e_(a,W.l1(new W.hp(new P.ia(s,[t]))))
return s},
e_:function(a,b){return a.requestAnimationFrame(H.bU(b,1))},
dQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hp.prototype={
$1:function(a){this.a.ei(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.jq.prototype={}
W.hy.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.c2]},
$isl:1,
$asl:function(){return[W.c2]},
$ist:1,
$ast:function(){return[W.c2]},
$asm:function(){return[W.c2]},
$isj:1,
$asj:function(){return[W.c2]},
$asn:function(){return[W.c2]}}
W.hz.prototype={
l:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
B:function(a,b){var t
if(b==null)return!1
t=J.v(b)
if(!t.$isU)return!1
return a.left===t.gcl(b)&&a.top===t.gcB(b)&&a.width===t.gag(b)&&a.height===t.gad(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kW(W.aO(W.aO(W.aO(W.aO(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gad:function(a){return a.height},
gag:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cf]},
$isl:1,
$asl:function(){return[W.cf]},
$ist:1,
$ast:function(){return[W.cf]},
$asm:function(){return[W.cf]},
$isj:1,
$asj:function(){return[W.cf]},
$asn:function(){return[W.cf]}}
W.d4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.r]},
$isl:1,
$asl:function(){return[W.r]},
$ist:1,
$ast:function(){return[W.r]},
$asm:function(){return[W.r]},
$isj:1,
$asj:function(){return[W.r]},
$asn:function(){return[W.r]}}
W.i7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.ac]},
$isl:1,
$asl:function(){return[W.ac]},
$ist:1,
$ast:function(){return[W.ac]},
$asm:function(){return[W.ac]},
$isj:1,
$asj:function(){return[W.ac]},
$asn:function(){return[W.ac]}}
W.i8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$isq:1,
$asq:function(){return[W.cI]},
$isl:1,
$asl:function(){return[W.cI]},
$ist:1,
$ast:function(){return[W.cI]},
$asm:function(){return[W.cI]},
$isj:1,
$asj:function(){return[W.cI]},
$asn:function(){return[W.cI]}}
W.hv.prototype={
ar:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.i(r),p=0;p<t.length;t.length===s||(0,H.C)(t),++p){o=t[p]
b.$2(o,q.ah(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.B([],[P.p])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
$asco:function(){return[P.p,P.p]},
$asb0:function(){return[P.p,P.p]},
gdS:function(){return this.a}}
W.hA.prototype={
h:function(a,b){return J.j_(this.a,b)},
gk:function(a){return this.gH(this).length}}
W.hD.prototype={
eM:function(a,b,c,d){return W.af(this.a,this.b,a,!1,H.as(this,0))}}
W.jt.prototype={}
W.hE.prototype={
dC:function(a,b,c,d,e){this.e6()},
e6:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.ls(r,this.c,t,!1)}}}
W.hF.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bE.prototype={
dD:function(a){var t,s
t=$.$get$ju()
if(t.gau(t)){for(s=0;s<262;++s)t.j(0,C.S[s],W.nt())
for(s=0;s<12;++s)t.j(0,C.r[s],W.nu())}},
ac:function(a){return $.$get$kU().F(0,W.bj(a))},
a3:function(a,b,c){var t,s,r
t=W.bj(a)
s=$.$get$ju()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.n.prototype={
gC:function(a){return new W.cd(a,this.gk(a),-1,null,[H.a6(a,"n",0)])}}
W.cy.prototype={
ac:function(a){return C.a.bV(this.a,new W.fe(a))},
a3:function(a,b,c){return C.a.bV(this.a,new W.fd(a,b,c))}}
W.fe.prototype={
$1:function(a){return a.ac(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.fd.prototype={
$1:function(a){return a.a3(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bL.prototype={
dG:function(a,b,c,d){var t,s,r
this.a.N(0,c)
t=b.aM(0,new W.i5())
s=b.aM(0,new W.i6())
this.b.N(0,t)
r=this.c
r.N(0,C.U)
r.N(0,s)},
ac:function(a){return this.a.F(0,W.bj(a))},
a3:function(a,b,c){var t,s
t=W.bj(a)
s=this.c
if(s.F(0,H.e(t)+"::"+b))return this.d.e9(c)
else if(s.F(0,"*::"+b))return this.d.e9(c)
else{s=this.b
if(s.F(0,H.e(t)+"::"+b))return!0
else if(s.F(0,"*::"+b))return!0
else if(s.F(0,H.e(t)+"::*"))return!0
else if(s.F(0,"*::*"))return!0}return!1}}
W.i5.prototype={
$1:function(a){return!C.a.F(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i6.prototype={
$1:function(a){return C.a.F(C.r,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ib.prototype={
a3:function(a,b,c){if(this.dc(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j_(a,"template")==="")return this.e.F(0,b)
return!1}}
W.ic.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.i9.prototype={
ac:function(a){var t=J.v(a)
if(!!t.$isbu)return!1
t=!!t.$isw
if(t&&W.bj(a)==="foreignObject")return!1
if(t)return!0
return!1},
a3:function(a,b,c){if(b==="is"||C.i.bn(b,"on"))return!1
return this.ac(a)}}
W.cd.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbM(J.bc(this.a,t))
this.c=t
return!0}this.sbM(null)
this.c=s
return!1},
gu:function(a){return this.d},
sbM:function(a){this.d=a}}
W.cx.prototype={}
W.jh.prototype={}
W.jp.prototype={}
W.i4.prototype={}
W.dq.prototype={
bk:function(a){new W.id(this).$2(a,null)},
ao:function(a,b){if(b==null)J.jS(a)
else J.iR(b,a)},
e2:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lM(a)
r=J.j_(s.gdS(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.O(n)}p="element unprintable"
try{p=J.bg(a)}catch(n){H.O(n)}try{o=W.bj(a)
this.e1(a,b,t,p,o,s,r)}catch(n){if(H.O(n) instanceof P.a_)throw n
else{this.ao(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e1:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.ao(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(t)
return}if(!this.a.ac(a)){this.ao(a,b)
window
t="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(t)
return}if(g!=null)if(!this.a.a3(a,"is",g)){this.ao(a,b)
window
t="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(t)
return}t=f.gH(f)
s=H.B(t.slice(0),[H.as(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.i(t);r>=0;--r){p=s[r]
if(!this.a.a3(a,J.m0(p),q.ah(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.ah(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.ah(t,p)
q.dX(t,p)}}if(!!J.v(a).$isbw)this.bk(a.content)}}
W.id.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e2(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ao(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lN(t)}catch(q){H.O(q)
r=t
J.iR(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.r,W.r]}}}
W.cR.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cX.prototype={}
W.cZ.prototype={}
W.d_.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d9.prototype={}
W.da.prototype={}
W.bM.prototype={}
W.bN.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.dg.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.bO.prototype={}
W.bP.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
P.il.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.i_.prototype={}
P.U.prototype={}
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
gn:function(a){return a.y}}
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gG:function(a){return a.z}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a3.prototype={}
P.a9.prototype={}
P.eF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a7(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a7:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jb]},
$asm:function(){return[P.jb]},
$isj:1,
$asj:function(){return[P.jb]},
$asn:function(){return[P.jb]}}
P.eY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f_.prototype={
gV:function(a){return a.a},
gP:function(a){return a.b},
ga4:function(a){return a.c}}
P.fg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a7(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a7:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.ji]},
$asm:function(){return[P.ji]},
$isj:1,
$asj:function(){return[P.ji]},
$asn:function(){return[P.ji]}}
P.fn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fs.prototype={
gk:function(a){return a.length}}
P.fv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fw.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bu.prototype={$isbu:1}
P.fX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a7(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a7:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.p]},
$asm:function(){return[P.p]},
$isj:1,
$asj:function(){return[P.p]},
$asn:function(){return[P.p]}}
P.w.prototype={
R:function(a,b,c,d){var t,s,r,q,p,o
t=H.B([],[W.cx])
C.a.i(t,W.kT(null))
C.a.i(t,W.kX())
C.a.i(t,new W.i9())
c=new W.dq(new W.cy(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).en(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.Q(q)
o=t.ga9(t)
for(t=J.i(p);r=o.firstChild,r!=null;)t.W(p,r)
return p},
$isw:1}
P.fY.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bx.prototype={}
P.by.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ha.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return this.a7(a,b)},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a7:function(a,b){return a.getItem(b)},
$isl:1,
$asl:function(){return[P.jn]},
$asm:function(){return[P.jn]},
$isj:1,
$asj:function(){return[P.jn]},
$asn:function(){return[P.jn]}}
P.hk.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.d0.prototype={}
P.d1.prototype={}
P.d7.prototype={}
P.d8.prototype={}
P.dh.prototype={}
P.di.prototype={}
P.dn.prototype={}
P.dp.prototype={}
P.dL.prototype={
gk:function(a){return a.length}}
P.dM.prototype={
gk:function(a){return a.length}}
P.aR.prototype={}
P.fh.prototype={
gk:function(a){return a.length}}
P.fA.prototype={
bT:function(a,b){return a.activeTexture(b)},
bW:function(a,b,c){return a.attachShader(b,c)},
bX:function(a,b,c){return a.bindBuffer(b,c)},
bY:function(a,b,c){return a.bindFramebuffer(b,c)},
bZ:function(a,b,c){return a.bindTexture(b,c)},
c_:function(a,b){return a.blendEquation(b)},
c0:function(a,b,c){return a.blendFunc(b,c)},
c1:function(a,b,c,d){return a.bufferData(b,c,d)},
c2:function(a,b){return a.checkFramebufferStatus(b)},
c3:function(a,b){return a.clear(b)},
c4:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
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
ck:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aN:function(a){return P.im(a.getContextAttributes())},
be:function(a){return a.getError()},
bf:function(a,b){return a.getProgramInfoLog(b)},
bg:function(a,b,c){return a.getProgramParameter(b,c)},
bh:function(a,b){return a.getShaderInfoLog(b)},
bi:function(a,b,c){return a.getShaderParameter(b,c)},
bj:function(a,b,c){return a.getUniformLocation(b,c)},
cm:function(a,b){return a.linkProgram(b)},
bm:function(a,b,c){return a.shaderSource(b,c)},
bo:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cu:function(a,b,c,d,e,f,g,h,i,j){this.b6(a,b,c,d,e,f,g,h,i,j)
return},
b6:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cv:function(a,b,c,d){return a.texParameterf(b,c,d)},
cw:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
P.fB.prototype={
ec:function(a,b){return a.beginTransformFeedback(b)},
ef:function(a,b){return a.bindVertexArray(b)},
ep:function(a){return a.createVertexArray()},
ex:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ey:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ez:function(a){return a.endTransformFeedback()},
eX:function(a,b,c,d,e,f){return a.texStorage2D(b,c,d,e,f)},
f1:function(a,b,c,d){this.e5(a,b,c,d)
return},
e5:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f2:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bT:function(a,b){return a.activeTexture(b)},
bW:function(a,b,c){return a.attachShader(b,c)},
bX:function(a,b,c){return a.bindBuffer(b,c)},
bY:function(a,b,c){return a.bindFramebuffer(b,c)},
bZ:function(a,b,c){return a.bindTexture(b,c)},
c_:function(a,b){return a.blendEquation(b)},
c0:function(a,b,c){return a.blendFunc(b,c)},
c1:function(a,b,c,d){return a.bufferData(b,c,d)},
c2:function(a,b){return a.checkFramebufferStatus(b)},
c3:function(a,b){return a.clear(b)},
c4:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
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
ck:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
aN:function(a){return P.im(a.getContextAttributes())},
be:function(a){return a.getError()},
bf:function(a,b){return a.getProgramInfoLog(b)},
bg:function(a,b,c){return a.getProgramParameter(b,c)},
bh:function(a,b){return a.getShaderInfoLog(b)},
bi:function(a,b,c){return a.getShaderParameter(b,c)},
bj:function(a,b,c){return a.getUniformLocation(b,c)},
cm:function(a,b){return a.linkProgram(b)},
bm:function(a,b,c){return a.shaderSource(b,c)},
bo:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cu:function(a,b,c,d,e,f,g,h,i,j){this.b6(a,b,c,d,e,f,g,h,i,j)
return},
b6:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
cv:function(a,b,c,d){return a.texParameterf(b,c,d)},
cw:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
P.fM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.z(b,a,null,null,null))
return P.im(this.dT(a,b))},
j:function(a,b,c){throw H.c(P.u("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
dT:function(a,b){return a.item(b)},
$isl:1,
$asl:function(){return[P.b_]},
$asm:function(){return[P.b_]},
$isj:1,
$asj:function(){return[P.b_]},
$asn:function(){return[P.b_]}}
P.dd.prototype={}
P.de.prototype={}
B.iJ.prototype={
$1:function(a){$.$get$io().j(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.iK.prototype={
$1:function(a){$.$get$io().j(0,a.which,null)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.iL.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nk=t
$.nl=C.b.aa(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jG=s-C.b.M(window.innerWidth,2)
$.lh=-(t-C.b.M(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.M]}}}
B.iM.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bX=t-C.b.M(window.innerWidth,2)
$.bY=-(s-C.b.M(window.innerHeight,2))
if(a.button===2)$.$get$bV().j(0,"right",!0)
else $.$get$bV().j(0,"left",!0)},
$S:function(a){return{func:1,args:[W.M]}}}
B.iN.prototype={
$1:function(a){if(a.button===2)$.$get$bV().j(0,"right",null)
else $.$get$bV().j(0,"left",null)},
$S:function(a){return{func:1,args:[W.M]}}}
B.fi.prototype={
dq:function(a,b,c,d){var t
d.toString
W.af(d,W.mm(d),new B.fj(this),!1,W.aL)
W.af(d,"mousemove",new B.fk(this),!1,W.M)
t=W.aI
W.af(d,"touchstart",new B.fl(),!1,t)
W.af(d,"touchmove",new B.fm(this),!1,t)
B.nI(null)}}
B.fj.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.geq(a)*r.k3
if(C.c.aa(r.fy,t)>0)r.fy=C.c.aa(r.fy,t)}catch(q){s=H.O(q)
P.ak(s)}},
$S:function(a){return{func:1,args:[W.aL]}}}
B.fk.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.aa($.jG,$.bX)*0.01
s=t.id
r=$.bY
q=$.lh
t.id=s+(r-q)*0.01
$.bX=$.jG
$.bY=q}},
$S:function(a){return{func:1,args:[W.M]}}}
B.fl.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.af(t.clientX)
C.c.af(t.clientY)
$.bX=s
C.c.af(t.clientX)
$.bY=C.c.af(t.clientY)},
$S:function(a){return{func:1,args:[W.aI]}}}
B.fm.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.af(t.clientX)
t=C.c.af(t.clientY)
r=this.a
r.go=r.go+C.b.aa(s,$.bX)*0.01
r.id=r.id+($.bY-t)*0.01
$.bX=s
$.bY=t},
$S:function(a){return{func:1,args:[W.aI]}}}
G.f4.prototype={}
G.bB.prototype={
a1:function(a,b){var t=this.d
if(H.V(!t.J(0,a)))H.Z("uniform "+a+" already set")
t.j(0,a,b)},
bx:function(){return this.d},
l:function(a){var t,s,r,q
t=H.B(["{"+new H.ap(H.it(this),null).l(0)+"}["+this.a+"]"],[P.p])
for(s=this.d,r=s.gH(s),r=r.gC(r);r.q();){q=r.gu(r)
C.a.i(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ae(t,"\n")}}
G.dN.prototype={}
G.dQ.prototype={
cj:function(a,b,c){J.lK(this.a,b)
if(c>0)J.m6(this.a,b,c)},
cP:function(a,b,c,d,e,f,g,h){J.iT(this.a,34962,b)
J.m7(this.a,c,d,e,!1,g,h)}}
G.ce.prototype={}
G.a2.prototype={
gV:function(a){return this.a},
gP:function(a){return this.b},
ga4:function(a){return this.c}}
G.aW.prototype={
gV:function(a){return this.a},
gP:function(a){return this.b},
ga4:function(a){return this.c}}
G.ay.prototype={
U:function(a){var t=this.e
H.b(!t.J(0,a))
H.b(C.i.bn(a,"a"))
switch($.$get$R().h(0,a).a){case"vec2":t.j(0,a,H.B([],[T.o]))
break
case"vec3":t.j(0,a,H.B([],[T.f]))
break
case"vec4":t.j(0,a,H.B([],[T.aq]))
break
case"float":t.j(0,a,H.B([],[P.W]))
break
case"uvec4":t.j(0,a,H.B([],[[P.j,P.y]]))
break
default:if(H.V(!1))H.Z("unknown type for "+a)}},
de:function(a){var t,s,r
H.b(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.aW(t,t+1,t+2,t+3))},
bs:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
p=new T.f(new Float32Array(3))
p.w(q)
C.a.i(s,p)}},
df:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.a2(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.f(new Float32Array(3))
p.w(q)
C.a.i(t,p)}},
az:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.o(o))}},
aA:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.C)(b),++q){p=b[q]
o=new T.f(new Float32Array(3))
o.w(p)
r.i(t,o)}},
dg:function(a){var t,s,r,q,p
H.b(!0)
t=this.d
s=t.length
C.a.i(this.c,new G.aW(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.f(new Float32Array(3))
p.w(q)
C.a.i(t,p)}},
dj:function(){var t,s,r,q,p,o,n,m,l
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
dl:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.j(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.i(s,new T.o(m))}H.b(s.length===t)},
dk:function(a,b,c){var t,s,r,q,p,o,n,m,l
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
C.a.i(t,new G.aW(p+m,l+m,l+n,p+n))
n=m}q=o}},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gC(r);r.q();){q=r.gu(r)
p=$.$get$R().h(0,q).a
C.a.i(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ae(t," ")}}
G.bA.prototype={}
G.cM.prototype={}
G.eZ.prototype={
dn:function(a){this.a1("cDepthTest",!0)
this.a1("cDepthWrite",!0)
this.a1("cBlendEquation",$.$get$jZ())
this.a1("cStencilFunc",$.$get$fQ())}}
G.f1.prototype={
bt:function(a,b,c){var t,s
if(C.i.aT(a,0)===105){if(H.V(C.b.aQ(b.length,c)===this.z))H.Z("ChangeAttribute "+this.z)}else{t=C.b.aQ(b.length,c)
if(H.V(t===(this.ch.length/3|0)))H.Z("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iT(t.a,34962,s)
J.jL(t.a,34962,b,35048)},
bv:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ak:function(a,b,c){var t,s,r,q,p,o
t=J.jI(a,0)===105
if(t&&this.z===0)this.z=C.b.aQ(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.iW(r.a))
this.bt(a,b,c)
q=$.$get$R().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.V(p.J(0,a)))H.Z("unexpected attribute "+a)
o=p.h(0,a)
J.dF(r.a,this.e)
r.cj(0,o,t?1:0)
r.cP(0,s.h(0,a),o,q.bw(),5126,!1,0,0)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gH(t),r=r.gC(r);r.q();){q=r.gu(r)
C.a.i(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ae(s,"  ")},
saZ:function(a){this.cx=a}}
G.fo.prototype={
dh:function(a,b){var t=C.b.cS(a,b)
if(this.z===t)return
this.z=t
this.bz()},
bz:function(){var t,s,r,q,p,o,n
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
t.ai(0,0,1/(p*s))
t.ai(1,1,1/p)
t.ai(2,2,(q+r)/o)
t.ai(3,2,-1)
t.ai(2,3,2*r*q/o)},
bx:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.f(new Float32Array(3))
o.p(r,q,p)
p=this.d
p.j(0,"uEyePosition",o)
o=this.cy
o.w(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.v(n)
r=!!s.$isaq
k=r?s.gaL(n):1
if(!!s.$isf){j=s.gm(n)
m=s.gn(n)
l=s.gG(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gG(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.K(t[0],n)
r=C.c.K(t[4],m)
q=C.c.K(t[8],l)
i=t[12]
h=C.c.K(t[1],n)
g=C.c.K(t[5],m)
f=C.c.K(t[9],l)
e=t[13]
d=C.c.K(t[2],n)
c=C.c.K(t[6],m)
b=C.c.K(t[10],l)
a=t[14]
a0=C.c.K(t[3],n)
a1=C.c.K(t[7],m)
a2=C.c.K(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.w(this.db)
a3.cp(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.e7.prototype={
l:function(a){return"["+this.a+"] "+this.b+" "+this.c+" mode:"+this.d+" ["+this.e.a+"usec]"}}
G.fz.prototype={
ds:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.j(0,n,J.jR(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
r.j(0,n,J.jR(q.a,p,n))}},
dw:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gC(s);s.q();){q=s.gu(s)
if(!t.J(0,q))C.a.i(r,q)}for(t=this.x,s=new P.bF(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.F(0,q))C.a.i(r,q)}return r},
dA:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gC(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gu(s)
switch(J.jI(n,0)){case 117:if(q.J(0,n)){m=b.h(0,n)
if(p.J(0,n))H.iH("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$R().h(0,n)
if(l==null)H.J("unknown "+n)
H.b(q.J(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j0(r.a,k,m)
else if(!!J.v(m).$iskm)J.m4(r.a,k,m)
break
case"float":if(l.c===0)J.m2(r.a,k,m)
else if(!!J.v(m).$isey)J.m3(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.aj(m,"$isG").a
J.jX(r.a,k,!1,n)}else if(!!J.v(m).$isey)J.jX(r.a,k,!1,m)
else if(H.V(!1))H.Z("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.aj(m,"$isa4").a
J.jW(r.a,k,!1,n)}else if(!!J.v(m).$isey)J.jW(r.a,k,!1,m)
else if(H.V(!1))H.Z("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jV(j,k,H.aj(m,"$isaq").a)
else J.jV(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jU(j,k,H.aj(m,"$isf").a)
else J.jU(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jT(j,k,H.aj(m,"$iso").a)
else J.jT(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.Y(33984,this.ch)
J.jJ(r.a,n)
n=H.aj(m,"$isbz").b
J.bd(r.a,3553,n)
n=this.ch
J.j0(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.Y(33984,this.ch)
J.jJ(r.a,n)
n=H.aj(m,"$isbz").b
J.bd(r.a,34067,n)
n=this.ch
J.j0(r.a,k,n)
this.ch=this.ch+1
break
default:H.iH("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.D(m,!0)
j=r.a
if(n)J.bZ(j,2929)
else J.iX(j,2929)
break
case"cStencilFunc":H.aj(m,"$isbA")
n=m.a
j=r.a
if(n===1281)J.iX(j,2960)
else{J.bZ(j,2960)
j=m.b
i=m.c
J.lX(r.a,n,j,i)}break
case"cDepthWrite":J.lE(r.a,m)
break
case"cBlendEquation":H.aj(m,"$iscM")
n=m.a
j=r.a
if(n===1281)J.iX(j,3042)
else{J.bZ(j,3042)
j=m.b
i=m.c
J.lw(r.a,j,i)
J.lv(r.a,n)}break}++o
break}}h=P.ke(0,0,0,Date.now()-new P.aU(t,!1).a,0,0)
""+o
h.l(0)},
di:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t=Date.now()
s=this.d
J.m5(s.a,this.r)
this.ch=0
this.z.a5(0)
for(r=b.length,q=0;q<b.length;b.length===r||(0,H.C)(b),++q){p=b[q]
this.dA(p.a,p.bx())}r=this.Q
r.a5(0)
for(o=a.cy,o=o.gH(o),o=o.gC(o);o.q();)r.i(0,o.gu(o))
n=this.dw()
if(n.length!==0)P.ak("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(n)))
J.dF(a.d.a,a.e)
m=this.e.f.length>0
r=a.f
o=a.bv()
l=a.Q
k=a.z
if(m)J.lu(s.a,r)
if(l!==-1){j=s.a
if(k>1)J.lI(j,r,o,l,0,k)
else J.lH(j,r,o,l,0)}else{l=s.a
if(k>1)J.lG(l,r,0,o,k)
else J.lF(l,r,0,o)}if(m)J.lL(s.a)
C.a.i(c,new G.e7(this.a,a.z,a.bv(),r,P.ke(0,0,0,Date.now()-new P.aU(t,!1).a,0,0)))}}
G.x.prototype={
bw:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fG.prototype={
bq:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.C)(a),++q){p=a[q]
H.b($.$get$R().J(0,p))
H.b(!C.a.F(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aO(s)},
aR:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=a[r]
if(H.V($.$get$R().J(0,q)))H.Z("missing uniform "+q)
H.b(!C.a.F(s,q))
C.a.i(s,q)}C.a.aO(s)},
br:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$R().J(0,r))
H.b(!C.a.F(t,r))
C.a.i(t,r)}C.a.aO(t)},
dt:function(a,b){H.b(this.b==null)
this.b=this.dB(!0,a,b)},
aB:function(a){return this.dt(a,null)},
dB:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=$.$get$R().h(0,n)
C.a.i(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.e(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){k=t[o]
m=$.$get$R().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.i(q,"")
C.a.i(q,"void main(void) {")
C.a.N(q,b)
C.a.i(q,"}")
return C.a.ae(q,"\n")}}
G.fK.prototype={
aj:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.h3.prototype={
by:function(a,b){var t=this.e
if(t!==1)J.lZ(a.a,b,34046,t)
t=this.r
J.dG(a.a,b,10240,t)
t=this.f
J.dG(a.a,b,10241,t)
if(this.b){J.dG(a.a,b,10242,33071)
J.dG(a.a,b,10243,33071)}}}
G.bz.prototype={
l:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.he.prototype={
l:function(a){return"TypedTexture["+this.a+", "+this.x+", "+H.e(this.f)+" X "+H.e(this.r)+"]"}}
G.hf.prototype={
l:function(a){return"TypedTextureMutable["+this.a+", "+this.x+", "+this.f+" X "+H.e(this.r)+"]"}}
R.fO.prototype={
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
J.iS(this.a,s)
r=this.dF(b,c,90,30)
this.d=r
J.iS(this.a,r)
t=t.createElement("div")
this.c=t
J.iS(this.a,t)},
dF:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.n1("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bE(r,"float")
r.setProperty(p,"left","")
p=C.u.bE(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.W(t,s)}return t}}
R.fP.prototype={
dz:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.f0(s,2)+" fps"
t=this.c;(t&&C.p).d3(t,b)
r=C.b.M(30*C.w.eg(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).W(t,q)}}
A.aF.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bt.prototype={}
A.fy.prototype={
dr:function(a,b,c){if(this.d==null)this.d=new G.ce(this.e,null,null,null,null)},
bu:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.iU(p.a,36160,t)
H.b(r>0&&q>0)
J.m8(p.a,this.x,this.y,r,q)
if(s!==0)J.ly(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.C)(t),++o){n=t[o]
m=n.e
C.a.i(m,new G.bB(P.L(),"transforms",!1,!0))
l=new T.G(new Float32Array(16))
l.I()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.C)(r),++k)A.l8(p,r[k],l,a,m)
m.pop()}}}
B.fI.prototype={
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
b.sG(0,this.d*t*0.5*q)},
$S:function(a,b){return{func:1,v:true,args:[P.W,T.f]}}}
A.iu.prototype={
$2:function(a,b){var t=536870911&a+J.be(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.y,P.E]}}}
T.a4.prototype={
w:function(a){var t,s
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
if(b instanceof T.a4){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gA:function(a){return A.dC(this.a)},
Z:function(a){var t,s
t=new Float32Array(3)
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.f(t)},
el:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.w(a)
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
T.G.prototype={
ai:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
w:function(a){var t,s
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
if(b instanceof T.G){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gA:function(a){return A.dC(this.a)},
Z:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aq(t)},
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
cp:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.o.prototype={
t:function(a,b){var t=this.a
t[0]=a
t[1]=b},
l:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.o){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gA:function(a){return A.dC(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.f.prototype={
p:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
w:function(a){var t,s
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
gA:function(a){return A.dC(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gS())},
gS:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
D:function(a){var t,s,r
t=Math.sqrt(this.gS())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b9:function(a){var t,s
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
t=new T.f(new Float32Array(3))
t.p(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aH:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
ay:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a8:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sG:function(a,b){this.a[2]=b
return b},
gP:function(a){return this.a[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]}}
T.aq.prototype={
l:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aq){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gA:function(a){return A.dC(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gP:function(a){return this.a[2]},
gV:function(a){return this.a[3]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gG:function(a){return this.a[2]},
gaL:function(a){return this.a[3]}}
V.iF.prototype={
$1:function(b9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8
t=this.a
t.a=b9+0
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
s.aj(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
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
k.p(0,1,0)
q=s.e
j=q.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
j=new Float32Array(3)
i=new T.f(j)
i.w(q)
i.ay(0,p)
i.D(0)
h=k.cb(i)
h.D(0)
g=i.cb(h)
g.D(0)
p=h.b9(q)
f=g.b9(q)
q=i.b9(q)
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
a3=Math.sqrt(d.gS())
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
s=$.$get$lb().checked?this.d:$.$get$fQ()
this.c.d.j(0,"cStencilFunc",s)
b6=[]
this.e.bu(b6)
this.f.bu(b6)
b7=[]
for(s=b6.length,b8=0;b8<b6.length;b6.length===s||(0,H.C)(b6),++b8)C.a.i(b7,b6[b8].l(0))
C.au.gea(window).cz(this)
this.r.dz(t.a,C.a.ae(b7,"<br>"))},
$S:function(a){return{func:1,v:true,args:[P.a7]}}}
J.a.prototype.d8=J.a.prototype.l
J.bn.prototype.da=J.bn.prototype.l
P.T.prototype.d9=P.T.prototype.aM
W.a1.prototype.aP=W.a1.prototype.R
W.bL.prototype.dc=W.bL.prototype.a3;(function installTearOffs(){installTearOff(H.b4.prototype,"geL",0,0,0,null,["$0"],["aJ"],0)
installTearOff(H.a5.prototype,"gcW",0,0,0,null,["$1"],["O"],2)
installTearOff(H.aM.prototype,"ges",0,0,0,null,["$1"],["a6"],2)
installTearOff(P,"ng",1,0,0,null,["$1"],["mZ"],1)
installTearOff(P,"nh",1,0,0,null,["$1"],["n_"],1)
installTearOff(P,"ni",1,0,0,null,["$1"],["n0"],1)
installTearOff(P,"l5",1,0,0,null,["$0"],["ne"],0)
installTearOff(P.ag.prototype,"gdL",0,0,0,null,["$2","$1"],["aC","dM"],5)
installTearOff(P,"nn",1,0,0,null,["$2"],["mf"],6)
installTearOff(W,"nt",1,0,0,null,["$4"],["n4"],4)
installTearOff(W,"nu",1,0,0,null,["$4"],["n5"],4)
installTearOff(W.cw.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(W.cO.prototype,"gba",0,1,0,null,["$0"],["bb"],3)
installTearOff(V,"lo",1,0,0,null,["$0"],["nC"],0)})();(function inheritance(){inherit(P.E,null)
var t=P.E
inherit(H.j8,t)
inherit(J.a,t)
inherit(J.dK,t)
inherit(P.T,t)
inherit(H.cn,t)
inherit(P.cj,t)
inherit(H.aX,t)
inherit(H.aw,t)
inherit(H.hY,t)
inherit(H.b4,t)
inherit(H.hB,t)
inherit(H.aN,t)
inherit(H.hX,t)
inherit(H.hw,t)
inherit(H.cC,t)
inherit(H.h5,t)
inherit(H.au,t)
inherit(H.a5,t)
inherit(H.aM,t)
inherit(H.fx,t)
inherit(H.hb,t)
inherit(P.aV,t)
inherit(H.df,t)
inherit(H.ap,t)
inherit(P.b0,t)
inherit(H.eQ,t)
inherit(H.eS,t)
inherit(P.j3,t)
inherit(P.hx,t)
inherit(P.cY,t)
inherit(P.ag,t)
inherit(P.cQ,t)
inherit(P.fT,t)
inherit(P.fU,t)
inherit(P.jl,t)
inherit(P.aQ,t)
inherit(P.ie,t)
inherit(P.fF,t)
inherit(P.hU,t)
inherit(P.bF,t)
inherit(P.jc,t)
inherit(P.bG,t)
inherit(P.m,t)
inherit(P.hW,t)
inherit(P.ai,t)
inherit(P.I,t)
inherit(P.aU,t)
inherit(P.a7,t)
inherit(P.ax,t)
inherit(P.cH,t)
inherit(P.j5,t)
inherit(P.hG,t)
inherit(P.ec,t)
inherit(P.j,t)
inherit(P.b_,t)
inherit(P.N,t)
inherit(P.b2,t)
inherit(P.p,t)
inherit(P.bv,t)
inherit(P.jo,t)
inherit(W.dW,t)
inherit(W.bE,t)
inherit(W.n,t)
inherit(W.cy,t)
inherit(W.bL,t)
inherit(W.i9,t)
inherit(W.cd,t)
inherit(W.cx,t)
inherit(W.jh,t)
inherit(W.jp,t)
inherit(W.i4,t)
inherit(W.dq,t)
inherit(P.i_,t)
inherit(G.f4,t)
inherit(G.dQ,t)
inherit(G.ce,t)
inherit(G.a2,t)
inherit(G.aW,t)
inherit(G.ay,t)
inherit(G.bA,t)
inherit(G.cM,t)
inherit(G.e7,t)
inherit(G.x,t)
inherit(G.fG,t)
inherit(G.h3,t)
inherit(G.bz,t)
inherit(R.fO,t)
inherit(T.a4,t)
inherit(T.G,t)
inherit(T.o,t)
inherit(T.f,t)
inherit(T.aq,t)
t=J.a
inherit(J.eL,t)
inherit(J.eM,t)
inherit(J.bn,t)
inherit(J.az,t)
inherit(J.aY,t)
inherit(J.aA,t)
inherit(H.bq,t)
inherit(H.b1,t)
inherit(W.d,t)
inherit(W.dH,t)
inherit(W.dO,t)
inherit(W.aT,t)
inherit(W.a0,t)
inherit(W.cR,t)
inherit(W.e0,t)
inherit(W.e1,t)
inherit(W.e2,t)
inherit(W.c5,t)
inherit(W.c6,t)
inherit(W.c7,t)
inherit(W.cS,t)
inherit(W.c9,t)
inherit(W.cU,t)
inherit(W.e6,t)
inherit(W.h,t)
inherit(W.cW,t)
inherit(W.eD,t)
inherit(W.cZ,t)
inherit(W.eU,t)
inherit(W.f0,t)
inherit(W.d2,t)
inherit(W.cw,t)
inherit(W.d5,t)
inherit(W.ab,t)
inherit(W.d9,t)
inherit(W.cA,t)
inherit(W.db,t)
inherit(W.ac,t)
inherit(W.dg,t)
inherit(W.dj,t)
inherit(W.h4,t)
inherit(W.dl,t)
inherit(W.h9,t)
inherit(W.cO,t)
inherit(W.hj,t)
inherit(W.hl,t)
inherit(W.dr,t)
inherit(W.dt,t)
inherit(W.dv,t)
inherit(W.dx,t)
inherit(W.dz,t)
inherit(P.d0,t)
inherit(P.f_,t)
inherit(P.d7,t)
inherit(P.fr,t)
inherit(P.fs,t)
inherit(P.fv,t)
inherit(P.dh,t)
inherit(P.dn,t)
inherit(P.dL,t)
inherit(P.fA,t)
inherit(P.fB,t)
inherit(P.dd,t)
t=J.bn
inherit(J.fp,t)
inherit(J.aK,t)
inherit(J.aB,t)
inherit(J.j7,J.az)
t=J.aY
inherit(J.cl,t)
inherit(J.ck,t)
t=P.T
inherit(H.l,t)
inherit(H.cp,t)
inherit(H.cP,t)
t=H.l
inherit(H.aZ,t)
inherit(H.eR,t)
inherit(H.ea,H.cp)
t=P.cj
inherit(H.eX,t)
inherit(H.ho,t)
t=H.aZ
inherit(H.bo,t)
inherit(P.eT,t)
t=H.aw
inherit(H.iO,t)
inherit(H.iP,t)
inherit(H.hS,t)
inherit(H.hC,t)
inherit(H.eH,t)
inherit(H.eI,t)
inherit(H.hZ,t)
inherit(H.h6,t)
inherit(H.h7,t)
inherit(H.iQ,t)
inherit(H.iz,t)
inherit(H.iA,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(H.iD,t)
inherit(H.h0,t)
inherit(H.eN,t)
inherit(H.iv,t)
inherit(H.iw,t)
inherit(H.ix,t)
inherit(P.hs,t)
inherit(P.hr,t)
inherit(P.ht,t)
inherit(P.hu,t)
inherit(P.hH,t)
inherit(P.hL,t)
inherit(P.hI,t)
inherit(P.hJ,t)
inherit(P.hK,t)
inherit(P.hO,t)
inherit(P.hP,t)
inherit(P.hN,t)
inherit(P.hM,t)
inherit(P.fV,t)
inherit(P.fW,t)
inherit(P.ii,t)
inherit(P.i2,t)
inherit(P.i1,t)
inherit(P.i3,t)
inherit(P.eW,t)
inherit(P.e8,t)
inherit(P.e9,t)
inherit(W.eb,t)
inherit(W.fS,t)
inherit(W.hp,t)
inherit(W.hF,t)
inherit(W.fe,t)
inherit(W.fd,t)
inherit(W.i5,t)
inherit(W.i6,t)
inherit(W.ic,t)
inherit(W.id,t)
inherit(P.il,t)
inherit(B.iJ,t)
inherit(B.iK,t)
inherit(B.iL,t)
inherit(B.iM,t)
inherit(B.iN,t)
inherit(B.fj,t)
inherit(B.fk,t)
inherit(B.fl,t)
inherit(B.fm,t)
inherit(B.fI,t)
inherit(A.iu,t)
inherit(V.iF,t)
t=H.hw
inherit(H.b6,t)
inherit(H.bQ,t)
t=P.aV
inherit(H.ff,t)
inherit(H.eO,t)
inherit(H.hh,t)
inherit(H.hd,t)
inherit(H.dP,t)
inherit(H.fC,t)
inherit(P.c0,t)
inherit(P.cz,t)
inherit(P.a_,t)
inherit(P.hi,t)
inherit(P.hg,t)
inherit(P.b3,t)
inherit(P.dR,t)
inherit(P.e_,t)
t=H.h0
inherit(H.fN,t)
inherit(H.bh,t)
inherit(H.hq,P.c0)
inherit(P.co,P.b0)
t=P.co
inherit(H.aa,t)
inherit(W.hv,t)
t=H.b1
inherit(H.f5,t)
inherit(H.cs,t)
t=H.cs
inherit(H.bH,t)
inherit(H.bJ,t)
inherit(H.bI,H.bH)
inherit(H.ct,H.bI)
inherit(H.bK,H.bJ)
inherit(H.cu,H.bK)
t=H.ct
inherit(H.cr,t)
inherit(H.f6,t)
t=H.cu
inherit(H.f7,t)
inherit(H.f8,t)
inherit(H.f9,t)
inherit(H.fa,t)
inherit(H.fb,t)
inherit(H.cv,t)
inherit(H.fc,t)
inherit(P.ia,P.hx)
inherit(P.i0,P.ie)
inherit(P.hV,H.aa)
inherit(P.fE,P.fF)
inherit(P.hR,P.fE)
inherit(P.hT,P.hR)
inherit(P.cm,P.bG)
t=P.a7
inherit(P.W,t)
inherit(P.y,t)
t=P.a_
inherit(P.cB,t)
inherit(P.eG,t)
t=W.d
inherit(W.r,t)
inherit(W.ao,t)
inherit(W.ew,t)
inherit(W.bl,t)
inherit(W.bp,t)
inherit(W.ft,t)
inherit(W.cD,t)
inherit(W.bM,t)
inherit(W.bO,t)
inherit(W.hm,t)
inherit(W.hn,t)
inherit(W.bC,t)
inherit(W.jq,t)
inherit(P.dM,t)
inherit(P.aR,t)
t=W.r
inherit(W.a1,t)
inherit(W.av,t)
inherit(W.bi,t)
t=W.a1
inherit(W.k,t)
inherit(P.w,t)
t=W.ao
inherit(W.c_,t)
inherit(W.eC,t)
inherit(W.eV,t)
t=W.k
inherit(W.dI,t)
inherit(W.dJ,t)
inherit(W.at,t)
inherit(W.c1,t)
inherit(W.c4,t)
inherit(W.eA,t)
inherit(W.ch,t)
inherit(W.bm,t)
inherit(W.fD,t)
inherit(W.cJ,t)
inherit(W.fZ,t)
inherit(W.h_,t)
inherit(W.bw,t)
t=W.aT
inherit(W.dS,t)
inherit(W.dU,t)
inherit(W.dV,t)
inherit(W.dY,t)
t=W.a0
inherit(W.dT,t)
inherit(W.dX,t)
inherit(W.dZ,t)
inherit(W.aS,W.cR)
inherit(W.e3,W.c6)
inherit(W.e4,W.c7)
inherit(W.cT,W.cS)
inherit(W.c8,W.cT)
inherit(W.cV,W.cU)
inherit(W.e5,W.cV)
inherit(W.cX,W.cW)
inherit(W.ev,W.cX)
inherit(W.d_,W.cZ)
inherit(W.bk,W.d_)
inherit(W.ci,W.bi)
inherit(W.eE,W.bl)
inherit(W.aJ,W.h)
t=W.aJ
inherit(W.aC,t)
inherit(W.M,t)
inherit(W.aI,t)
inherit(W.f2,W.bp)
inherit(W.d3,W.d2)
inherit(W.f3,W.d3)
inherit(W.Q,P.cm)
inherit(W.d6,W.d5)
inherit(W.br,W.d6)
inherit(W.da,W.d9)
inherit(W.fq,W.da)
inherit(W.bN,W.bM)
inherit(W.fJ,W.bN)
inherit(W.dc,W.db)
inherit(W.fL,W.dc)
inherit(W.fR,W.dg)
inherit(W.dk,W.dj)
inherit(W.h1,W.dk)
inherit(W.bP,W.bO)
inherit(W.h2,W.bP)
inherit(W.dm,W.dl)
inherit(W.h8,W.dm)
inherit(W.aL,W.M)
inherit(W.ds,W.dr)
inherit(W.hy,W.ds)
inherit(W.hz,W.c9)
inherit(W.du,W.dt)
inherit(W.hQ,W.du)
inherit(W.dw,W.dv)
inherit(W.d4,W.dw)
inherit(W.dy,W.dx)
inherit(W.i7,W.dy)
inherit(W.dA,W.dz)
inherit(W.i8,W.dA)
inherit(W.hA,W.hv)
inherit(W.hD,P.fT)
inherit(W.jt,W.hD)
inherit(W.hE,P.fU)
inherit(W.ib,W.bL)
inherit(P.U,P.i_)
t=P.w
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
inherit(P.et,t)
inherit(P.eu,t)
inherit(P.ex,t)
inherit(P.a9,t)
inherit(P.eY,t)
inherit(P.fn,t)
inherit(P.bu,t)
t=P.a9
inherit(P.ez,t)
inherit(P.a3,t)
inherit(P.eF,t)
inherit(P.fY,t)
inherit(P.bx,t)
inherit(P.hk,t)
inherit(P.d1,P.d0)
inherit(P.eP,P.d1)
inherit(P.d8,P.d7)
inherit(P.fg,P.d8)
inherit(P.fw,P.a3)
inherit(P.di,P.dh)
inherit(P.fX,P.di)
inherit(P.by,P.bx)
inherit(P.dp,P.dn)
inherit(P.ha,P.dp)
inherit(P.fh,P.aR)
inherit(P.de,P.dd)
inherit(P.fM,P.de)
t=G.f4
inherit(G.fK,t)
inherit(G.bB,t)
inherit(G.f1,t)
inherit(G.fz,t)
inherit(A.bt,t)
inherit(A.fy,t)
t=G.fK
inherit(G.dN,t)
inherit(A.aF,t)
inherit(B.fi,G.dN)
t=G.bB
inherit(G.eZ,t)
inherit(G.fo,t)
t=G.bz
inherit(G.he,t)
inherit(G.hf,t)
inherit(R.fP,R.fO)
mixin(H.bH,P.m)
mixin(H.bI,H.aX)
mixin(H.bJ,P.m)
mixin(H.bK,H.aX)
mixin(P.bG,P.m)
mixin(W.cR,W.dW)
mixin(W.cS,P.m)
mixin(W.cT,W.n)
mixin(W.cU,P.m)
mixin(W.cV,W.n)
mixin(W.cW,P.m)
mixin(W.cX,W.n)
mixin(W.cZ,P.m)
mixin(W.d_,W.n)
mixin(W.d2,P.m)
mixin(W.d3,W.n)
mixin(W.d5,P.m)
mixin(W.d6,W.n)
mixin(W.d9,P.m)
mixin(W.da,W.n)
mixin(W.bM,P.m)
mixin(W.bN,W.n)
mixin(W.db,P.m)
mixin(W.dc,W.n)
mixin(W.dg,P.b0)
mixin(W.dj,P.m)
mixin(W.dk,W.n)
mixin(W.bO,P.m)
mixin(W.bP,W.n)
mixin(W.dl,P.m)
mixin(W.dm,W.n)
mixin(W.dr,P.m)
mixin(W.ds,W.n)
mixin(W.dt,P.m)
mixin(W.du,W.n)
mixin(W.dv,P.m)
mixin(W.dw,W.n)
mixin(W.dx,P.m)
mixin(W.dy,W.n)
mixin(W.dz,P.m)
mixin(W.dA,W.n)
mixin(P.d0,P.m)
mixin(P.d1,W.n)
mixin(P.d7,P.m)
mixin(P.d8,W.n)
mixin(P.dh,P.m)
mixin(P.di,W.n)
mixin(P.dn,P.m)
mixin(P.dp,W.n)
mixin(P.dd,P.m)
mixin(P.de,W.n)})();(function constants(){C.o=W.at.prototype
C.H=W.c1.prototype
C.u=W.aS.prototype
C.p=W.c4.prototype
C.I=W.c5.prototype
C.J=W.ch.prototype
C.m=W.ci.prototype
C.K=J.a.prototype
C.a=J.az.prototype
C.w=J.ck.prototype
C.b=J.cl.prototype
C.c=J.aY.prototype
C.i=J.aA.prototype
C.R=J.aB.prototype
C.V=H.cr.prototype
C.z=W.br.prototype
C.A=J.fp.prototype
C.B=W.cA.prototype
C.G=W.cJ.prototype
C.t=J.aK.prototype
C.at=W.aL.prototype
C.au=W.bC.prototype
C.f=new P.i0()
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
C.S=H.B(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.p])
C.T=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.U=makeConstList([])
C.q=H.B(makeConstList(["bind","if","ref","repeat","syntax"]),[P.p])
C.r=H.B(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.p])
C.W=new G.x("vec3","vertex btangents",0)
C.d=new G.x("vec3","",0)
C.X=new G.x("vec4","delta from light",0)
C.n=new G.x("","",0)
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
C.ab=H.K("nN")
C.ac=H.K("nO")
C.ad=H.K("ey")
C.ae=H.K("nP")
C.af=H.K("nQ")
C.ag=H.K("km")
C.ah=H.K("nR")
C.ai=H.K("kp")
C.aj=H.K("N")
C.ak=H.K("p")
C.al=H.K("kM")
C.am=H.K("kN")
C.an=H.K("nS")
C.ao=H.K("kO")
C.ap=H.K("ai")
C.aq=H.K("W")
C.ar=H.K("y")
C.as=H.K("a7")})();(function staticFields(){$.kv="$cachedFunction"
$.kw="$cachedInvocation"
$.k2=null
$.k0=null
$.jw=!1
$.jB=null
$.l2=null
$.lj=null
$.ip=null
$.iy=null
$.jC=null
$.b7=null
$.bR=null
$.bS=null
$.jx=!1
$.A=C.f
$.ki=0
$.am=null
$.j4=null
$.kg=null
$.kf=null
$.kc=null
$.kb=null
$.ka=null
$.k9=null
$.nk=0
$.nl=0
$.jG=0
$.lh=0
$.bX=0
$.bY=0
$.nJ=!1
$.la=0})();(function lazyInitializers(){lazy($,"k8","$get$k8",function(){return H.le("_$dart_dartClosure")})
lazy($,"j9","$get$j9",function(){return H.le("_$dart_js")})
lazy($,"kn","$get$kn",function(){return H.mw()})
lazy($,"ko","$get$ko",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ki
$.ki=t+1
t="expando$key$"+t}return new P.ec(t,null,[P.y])})
lazy($,"kB","$get$kB",function(){return H.ad(H.hc({
toString:function(){return"$receiver$"}}))})
lazy($,"kC","$get$kC",function(){return H.ad(H.hc({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kD","$get$kD",function(){return H.ad(H.hc(null))})
lazy($,"kE","$get$kE",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kI","$get$kI",function(){return H.ad(H.hc(void 0))})
lazy($,"kJ","$get$kJ",function(){return H.ad(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kG","$get$kG",function(){return H.ad(H.kH(null))})
lazy($,"kF","$get$kF",function(){return H.ad(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kL","$get$kL",function(){return H.ad(H.kH(void 0))})
lazy($,"kK","$get$kK",function(){return H.ad(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"js","$get$js",function(){return P.mY()})
lazy($,"bT","$get$bT",function(){return[]})
lazy($,"k7","$get$k7",function(){return{}})
lazy($,"kU","$get$kU",function(){return P.jd(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"ju","$get$ju",function(){return P.L()})
lazy($,"io","$get$io",function(){return P.kq(P.y,P.ai)})
lazy($,"bV","$get$bV",function(){return P.kq(P.p,P.ai)})
lazy($,"fQ","$get$fQ",function(){return G.mT(1281,0,4294967295)})
lazy($,"jZ","$get$jZ",function(){return new G.cM(1281,1281,1281)})
lazy($,"R","$get$R",function(){return P.aD(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"jk","$get$jk",function(){var t=new G.h3(!1,!1,!1,!0,1,9729,9729)
t.d=!1
t.b=!0
t.f=9728
t.r=9728
return t})
lazy($,"kh","$get$kh",function(){return G.jg("empty-mat")})
lazy($,"k5","$get$k5",function(){return T.H(0,0,1)})
lazy($,"k6","$get$k6",function(){return T.H(1,0,0)})
lazy($,"l9","$get$l9",function(){var t=G.fH("uv-passthru")
t.bq(["aPosition","aTexUV"])
t.br(["vTexUV"])
t.aB(["gl_Position = vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"l7","$get$l7",function(){return $.$get$l9()})
lazy($,"l6","$get$l6",function(){var t=G.fH("copyF")
t.br(["vTexUV"])
t.aR(["uTexture"])
t.aB(["oFragColor = texture(uTexture, vTexUV);"])
return t})
lazy($,"lm","$get$lm",function(){var t=G.fH("SolidColor")
t.bq(["aPosition"])
t.aR(["uPerspectiveViewMatrix","uModelMatrix"])
t.aB(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"ll","$get$ll",function(){var t=G.fH("SolidColorF")
t.aR(["uColor"])
t.aB(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kR","$get$kR",function(){return[T.H(0,0,1),T.H(0,0,-1),T.H(0,1,0),T.H(0,-1,0),T.H(1,0,0),T.H(-1,0,0)]})
lazy($,"kk","$get$kk",function(){return[G.F(0,11,5),G.F(0,5,1),G.F(0,1,7),G.F(0,7,10),G.F(0,10,11),G.F(1,5,9),G.F(5,11,4),G.F(11,10,2),G.F(10,7,6),G.F(7,1,8),G.F(3,9,4),G.F(3,4,2),G.F(3,2,6),G.F(3,6,8),G.F(3,8,9),G.F(4,9,5),G.F(2,4,11),G.F(6,2,10),G.F(8,6,7),G.F(9,8,1)]})
lazy($,"lp","$get$lp",function(){return(1+P.nK(5))/2})
lazy($,"kl","$get$kl",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lp()
s=T.H(-1,t,0)
s.D(0)
r=T.H(1,t,0)
r.D(0)
q=T.H(-1,-t,0)
q.D(0)
p=T.H(1,-t,0)
p.D(0)
o=T.H(0,-1,t)
o.D(0)
n=T.H(0,1,t)
n.D(0)
m=T.H(0,-1,-t)
m.D(0)
l=T.H(0,1,-t)
l.D(0)
k=T.H(t,0,-1)
k.D(0)
j=T.H(t,0,1)
j.D(0)
i=T.H(-t,0,-1)
i.D(0)
t=T.H(-t,0,1)
t.D(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"lb","$get$lb",function(){return H.aj(C.m.cq(W.no(),"#stencil"),"$isbm")})})()
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
mangledGlobalNames:{y:"int",W:"double",a7:"num",p:"String",ai:"bool",N:"Null",j:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ai,args:[W.a1,P.p,P.p,W.bE]},{func:1,v:true,args:[P.E],opt:[P.b2]},{func:1,ret:P.y,args:[P.I,P.I]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bq,ArrayBufferView:H.b1,DataView:H.f5,Float32Array:H.cr,Float64Array:H.f6,Int16Array:H.f7,Int32Array:H.f8,Int8Array:H.f9,Uint16Array:H.fa,Uint32Array:H.fb,Uint8ClampedArray:H.cv,CanvasPixelArray:H.cv,Uint8Array:H.fc,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,Accelerometer:W.c_,LinearAccelerationSensor:W.c_,AccessibleNodeList:W.dH,HTMLAnchorElement:W.dI,HTMLAreaElement:W.dJ,HTMLBodyElement:W.at,HTMLCanvasElement:W.c1,CanvasRenderingContext2D:W.dO,CDATASection:W.av,CharacterData:W.av,Comment:W.av,ProcessingInstruction:W.av,Text:W.av,CSSPerspective:W.dS,CSSPositionValue:W.dT,CSSRotation:W.dU,CSSScale:W.dV,CSSStyleDeclaration:W.aS,MSStyleCSSProperties:W.aS,CSS2Properties:W.aS,CSSImageValue:W.a0,CSSKeywordValue:W.a0,CSSNumericValue:W.a0,CSSResourceValue:W.a0,CSSUnitValue:W.a0,CSSURLImageValue:W.a0,CSSStyleValue:W.a0,CSSMatrixComponent:W.aT,CSSSkew:W.aT,CSSTransformComponent:W.aT,CSSTransformValue:W.dX,CSSTranslation:W.dY,CSSUnparsedValue:W.dZ,DataTransferItemList:W.e0,DeviceAcceleration:W.e1,HTMLDivElement:W.c4,XMLDocument:W.bi,Document:W.bi,DOMException:W.e2,DOMImplementation:W.c5,DOMMatrix:W.e3,DOMMatrixReadOnly:W.c6,DOMPoint:W.e4,DOMPointReadOnly:W.c7,ClientRectList:W.c8,DOMRectList:W.c8,DOMRectReadOnly:W.c9,DOMStringList:W.e5,DOMTokenList:W.e6,Element:W.a1,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.ev,FileWriter:W.ew,HTMLFormElement:W.eA,Gyroscope:W.eC,HTMLHeadElement:W.ch,History:W.eD,HTMLCollection:W.bk,HTMLFormControlsCollection:W.bk,HTMLOptionsCollection:W.bk,HTMLDocument:W.ci,XMLHttpRequest:W.eE,XMLHttpRequestUpload:W.bl,XMLHttpRequestEventTarget:W.bl,HTMLInputElement:W.bm,KeyboardEvent:W.aC,Location:W.eU,Magnetometer:W.eV,MediaList:W.f0,MIDIOutput:W.f2,MIDIInput:W.bp,MIDIPort:W.bp,MimeTypeArray:W.f3,PointerEvent:W.M,MouseEvent:W.M,DragEvent:W.M,DocumentFragment:W.r,ShadowRoot:W.r,Attr:W.r,DocumentType:W.r,Node:W.r,NodeIterator:W.cw,NodeList:W.br,RadioNodeList:W.br,Plugin:W.ab,PluginArray:W.fq,PresentationConnection:W.ft,Range:W.cA,RTCDataChannel:W.cD,DataChannel:W.cD,HTMLSelectElement:W.fD,AbsoluteOrientationSensor:W.ao,AmbientLightSensor:W.ao,OrientationSensor:W.ao,RelativeOrientationSensor:W.ao,Sensor:W.ao,SourceBufferList:W.fJ,SpeechGrammarList:W.fL,SpeechRecognitionResult:W.ac,Storage:W.fR,HTMLTableElement:W.cJ,HTMLTableRowElement:W.fZ,HTMLTableSectionElement:W.h_,HTMLTemplateElement:W.bw,TextTrackCueList:W.h1,TextTrackList:W.h2,TimeRanges:W.h4,TouchEvent:W.aI,TouchList:W.h8,TrackDefaultList:W.h9,TreeWalker:W.cO,CompositionEvent:W.aJ,FocusEvent:W.aJ,TextEvent:W.aJ,UIEvent:W.aJ,URL:W.hj,VRStageBoundsPoint:W.hl,VideoTrackList:W.hm,WebSocket:W.hn,WheelEvent:W.aL,Window:W.bC,DOMWindow:W.bC,CSSRuleList:W.hy,DOMRect:W.hz,GamepadList:W.hQ,NamedNodeMap:W.d4,MozNamedAttrMap:W.d4,SpeechRecognitionResultList:W.i7,StyleSheetList:W.i8,SVGFEBlendElement:P.ed,SVGFEColorMatrixElement:P.ee,SVGFEComponentTransferElement:P.ef,SVGFECompositeElement:P.eg,SVGFEConvolveMatrixElement:P.eh,SVGFEDiffuseLightingElement:P.ei,SVGFEDisplacementMapElement:P.ej,SVGFEFloodElement:P.ek,SVGFEGaussianBlurElement:P.el,SVGFEImageElement:P.em,SVGFEMergeElement:P.en,SVGFEMorphologyElement:P.eo,SVGFEOffsetElement:P.ep,SVGFEPointLightElement:P.eq,SVGFESpecularLightingElement:P.er,SVGFESpotLightElement:P.es,SVGFETileElement:P.et,SVGFETurbulenceElement:P.eu,SVGFilterElement:P.ex,SVGForeignObjectElement:P.ez,SVGCircleElement:P.a3,SVGEllipseElement:P.a3,SVGLineElement:P.a3,SVGPathElement:P.a3,SVGPolygonElement:P.a3,SVGPolylineElement:P.a3,SVGGeometryElement:P.a3,SVGAElement:P.a9,SVGClipPathElement:P.a9,SVGDefsElement:P.a9,SVGGElement:P.a9,SVGSwitchElement:P.a9,SVGGraphicsElement:P.a9,SVGImageElement:P.eF,SVGLengthList:P.eP,SVGMaskElement:P.eY,SVGMatrix:P.f_,SVGNumberList:P.fg,SVGPatternElement:P.fn,SVGPoint:P.fr,SVGPointList:P.fs,SVGRect:P.fv,SVGRectElement:P.fw,SVGScriptElement:P.bu,SVGStringList:P.fX,SVGAnimateElement:P.w,SVGAnimateMotionElement:P.w,SVGAnimateTransformElement:P.w,SVGAnimationElement:P.w,SVGDescElement:P.w,SVGDiscardElement:P.w,SVGFEDistantLightElement:P.w,SVGFEFuncAElement:P.w,SVGFEFuncBElement:P.w,SVGFEFuncGElement:P.w,SVGFEFuncRElement:P.w,SVGFEMergeNodeElement:P.w,SVGLinearGradientElement:P.w,SVGMarkerElement:P.w,SVGMetadataElement:P.w,SVGRadialGradientElement:P.w,SVGSetElement:P.w,SVGStopElement:P.w,SVGStyleElement:P.w,SVGSymbolElement:P.w,SVGTitleElement:P.w,SVGViewElement:P.w,SVGGradientElement:P.w,SVGComponentTransferFunctionElement:P.w,SVGFEDropShadowElement:P.w,SVGMPathElement:P.w,SVGElement:P.w,SVGSVGElement:P.fY,SVGTextPathElement:P.bx,SVGTextContentElement:P.bx,SVGTSpanElement:P.by,SVGTextElement:P.by,SVGTextPositioningElement:P.by,SVGTransformList:P.ha,SVGUseElement:P.hk,AudioBuffer:P.dL,AudioTrackList:P.dM,AudioContext:P.aR,webkitAudioContext:P.aR,BaseAudioContext:P.aR,OfflineAudioContext:P.fh,WebGLRenderingContext:P.fA,WebGL2RenderingContext:P.fB,SQLResultSetRowList:P.fM})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMMatrix:true,DOMMatrixReadOnly:false,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGMatrix:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cs.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.ct.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.cu.$nativeSuperclassTag="ArrayBufferView"
W.bM.$nativeSuperclassTag="EventTarget"
W.bN.$nativeSuperclassTag="EventTarget"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.ln(V.lo(),b)},[])
else (function(b){H.ln(V.lo(),b)})([])})})()