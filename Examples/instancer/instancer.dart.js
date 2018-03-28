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
a[c]=function(){a[c]=function(){H.nh(b)}
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
return d?function(e){if(t===null)t=H.jj(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jj(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jj(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={iV:function iV(a){this.a=a},
mp:function(a,b,c,d){var t=new H.fL(a,b,c,[d])
t.dn(a,b,c,d)
return t},
j1:function(a,b,c,d){if(!!a.$isk)return new H.dZ(a,b,[c,d])
return new H.cc(a,b,[c,d])},
eB:function(){return new P.aX("No element")},
m8:function(){return new P.aX("Too many elements")},
k4:function(){return new P.aX("Too few elements")},
mo:function(a,b){H.ct(a,0,J.ag(a)-1,b)},
ct:function(a,b,c,d){if(c-b<=32)H.mn(a,b,c,d)
else H.mm(a,b,c,d)},
mn:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.N(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.a3(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mm:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.b(t>32)
s=C.b.J(t+1,6)
r=a3+s
q=a4-s
p=C.b.J(a3+a4,2)
o=p-s
n=p+s
t=J.N(a2)
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
H.ct(a2,a3,g-2,a5)
H.ct(a2,f+2,a4,a5)
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
break}}H.ct(a2,g,f,a5)}else H.ct(a2,g,f,a5)},
k:function k(){},
aS:function aS(){},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ca:function ca(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cc:function cc(a,b,c){this.a=a
this.b=b
this.$ti=c},
dZ:function dZ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eO:function eO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bf:function bf(a,b,c){this.a=a
this.b=b
this.$ti=c},
cG:function cG(a,b,c){this.a=a
this.b=b
this.$ti=c},
hb:function hb(a,b,c){this.a=a
this.b=b
this.$ti=c},
aQ:function aQ(){},
ds:function(a,b){var t=a.af(b)
if(!u.globalState.d.cy)u.globalState.f.am()
return t},
ib:function(){++u.globalState.f.b},
is:function(){--u.globalState.f.b
H.b(u.globalState.f.b>=0)},
l2:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$ish)throw H.c(P.jH("Arguments to main must be a List: "+H.e(s)))
u.globalState=new H.hM(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k2()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.ho(P.j0(null,H.aI),0)
q=P.x
s.seK(new H.a7(0,null,null,null,null,null,0,[q,H.aY]))
s.seN(new H.a7(0,null,null,null,null,null,0,[q,null]))
if(s.x){r=new H.hL()
s.Q=r
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m3,r)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mE)}if(u.globalState.x)return
o=H.kC()
u.globalState.e=o
u.globalState.z.i(0,o.a,o)
u.globalState.d=o
if(H.b3(a,{func:1,args:[P.H]}))o.af(new H.iC(t,a))
else if(H.b3(a,{func:1,args:[P.H,P.H]}))o.af(new H.iD(t,a))
else o.af(a)
u.globalState.f.am()},
mE:function(a){var t=P.az(["command","print","msg",a])
return new H.a0(!0,P.aZ(null,P.x)).K(t)},
kC:function(){var t,s
t=u.globalState.a++
s=P.x
t=new H.aY(t,new H.a7(0,null,null,null,null,null,0,[s,H.cr]),P.aA(null,null,null,s),u.createNewIsolate(),new H.cr(0,null,!1),new H.aq(H.l1()),new H.aq(H.l1()),!1,!1,[],P.aA(null,null,null,null),null,null,!1,!0,P.aA(null,null,null,null))
t.dz()
return t},
m5:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m6()
return},
m6:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.c(P.p("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.c(P.p('Cannot extract URI from "'+t+'"'))},
m3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=new H.aH(!0,[]).V(b.data)
s=J.N(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n4(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aH(!0,[]).V(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aH(!0,[]).V(s.h(t,"replyTo"))
k=H.kC()
u.globalState.f.a.S(0,new H.aI(k,new H.ey(q,p,o,n,m,l),"worker-start"))
u.globalState.d=k
u.globalState.f.am()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.ly(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.am()
break
case"close":u.globalState.ch.al(0,$.$get$k3().h(0,a))
a.terminate()
u.globalState.f.am()
break
case"log":H.m2(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
j=P.az(["command","print","msg",t])
j=new H.a0(!0,P.aZ(null,P.x)).K(j)
s.toString
self.postMessage(j)}else P.a2(s.h(t,"msg"))
break
case"error":throw H.c(s.h(t,"msg"))}},
m2:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.az(["command","log","msg",a])
r=new H.a0(!0,P.aZ(null,P.x)).K(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.I(q)
t=H.am(q)
s=P.c0(t)
throw H.c(s)}},
m4:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kc=$.kc+("_"+s)
$.kd=$.kd+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.b_(s,r),q,t.r])
r=new H.ez(t,d,a,c,b)
if(e){t.bS(q,q)
u.globalState.f.a.S(0,new H.aI(t,r,"start isolate"))}else r.$0()},
mq:function(a,b){var t=new H.fU(!0,!1,null,0)
t.dq(a,b)
return t},
mF:function(a){return new H.aH(!0,[]).V(new H.a0(!1,P.aZ(null,P.x)).K(a))},
iC:function iC(a,b){this.a=a
this.b=b},
iD:function iD(a,b){this.a=a
this.b=b},
hM:function hM(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
aY:function aY(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hF:function hF(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(a){this.a=a},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
hL:function hL(){},
ey:function ey(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ez:function ez(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hj:function hj(){},
b_:function b_(a,b){this.b=a
this.a=b},
hN:function hN(a,b){this.a=a
this.b=b},
bE:function bE(a,b,c){this.b=a
this.c=b
this.a=c},
cr:function cr(a,b,c){this.a=a
this.b=b
this.c=c},
fU:function fU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fV:function fV(a,b){this.a=a
this.b=b},
fW:function fW(a,b){this.a=a
this.b=b},
aq:function aq(a){this.a=a},
a0:function a0(a,b){this.a=a
this.b=b},
aH:function aH(a,b){this.a=a
this.b=b},
mZ:function(a){return u.types[a]},
n6:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isr},
e:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b7(a)
if(typeof t!=="string")throw H.c(H.M(a))
return t},
mj:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t=J.av(t)
s=t[0]
r=t[1]
return new H.fm(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aB:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
bj:function(a){var t,s,r,q,p,o,n,m,l
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.t(a).$isaE){p=C.C(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aL(q,0)===36)q=C.i.d2(q,1)
l=H.dv(H.id(a),0,null)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+l,u.mangledGlobalNames)},
J:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mh:function(a){return a.b?H.J(a).getUTCFullYear()+0:H.J(a).getFullYear()+0},
mf:function(a){return a.b?H.J(a).getUTCMonth()+1:H.J(a).getMonth()+1},
mb:function(a){return a.b?H.J(a).getUTCDate()+0:H.J(a).getDate()+0},
mc:function(a){return a.b?H.J(a).getUTCHours()+0:H.J(a).getHours()+0},
me:function(a){return a.b?H.J(a).getUTCMinutes()+0:H.J(a).getMinutes()+0},
mg:function(a){return a.b?H.J(a).getUTCSeconds()+0:H.J(a).getSeconds()+0},
md:function(a){return a.b?H.J(a).getUTCMilliseconds()+0:H.J(a).getMilliseconds()+0},
kb:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.c(H.M(a))
return a[b]},
b2:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a4(!0,b,"index",null)
t=J.ag(a)
if(b<0||C.b.b9(b,t))return P.y(b,a,"index",null,t)
return P.fj(b,"index",null)},
M:function(a){return new P.a4(!0,a,null,null)},
c:function(a){var t
if(a==null)a=new P.cn()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.l3})
t.name=""}else t.toString=H.l3
return t},
l3:function(){return J.b7(this.dartException)},
F:function(a){throw H.c(a)},
O:function(a){throw H.c(P.a5(a))},
aa:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h_(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h0:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
ko:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
ka:function(a,b){return new H.f4(a,b==null?null:b.method)},
iX:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eF(a,s,t?null:b.receiver)},
I:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iE(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iX(H.e(s)+" (Error "+q+")",null))
case 445:case 5007:return t.$1(H.ka(H.e(s)+" (Error "+q+")",null))}}if(a instanceof TypeError){p=$.$get$ki()
o=$.$get$kj()
n=$.$get$kk()
m=$.$get$kl()
l=$.$get$kp()
k=$.$get$kq()
j=$.$get$kn()
$.$get$km()
i=$.$get$ks()
h=$.$get$kr()
g=p.O(s)
if(g!=null)return t.$1(H.iX(s,g))
else{g=o.O(s)
if(g!=null){g.method="call"
return t.$1(H.iX(s,g))}else{g=n.O(s)
if(g==null){g=m.O(s)
if(g==null){g=l.O(s)
if(g==null){g=k.O(s)
if(g==null){g=j.O(s)
if(g==null){g=m.O(s)
if(g==null){g=i.O(s)
if(g==null){g=h.O(s)
f=g!=null}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0}else f=!0
if(f)return t.$1(H.ka(s,g))}}return t.$1(new H.h4(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.cx()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.a4(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.cx()
return a},
am:function(a){var t
if(a==null)return new H.d6(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.d6(a,null)},
na:function(a){if(a==null||typeof a!='object')return J.b6(a)
else return H.aB(a)},
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
n5:function(a,b,c,d,e,f,g){switch(c){case 0:return H.ds(b,new H.im(a))
case 1:return H.ds(b,new H.io(a,d))
case 2:return H.ds(b,new H.ip(a,d,e))
case 3:return H.ds(b,new H.iq(a,d,e,f))
case 4:return H.ds(b,new H.ir(a,d,e,f,g))}throw H.c(P.c0("Unsupported number of arguments for wrapped closure"))},
bI:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n5)
a.$identity=t
return t},
lQ:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$ish){t.$reflectionInfo=c
r=H.mj(t).r}else r=c
q=d?Object.create(new H.fB().constructor.prototype):Object.create(new H.b8(null,null,null,null).constructor.prototype)
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
else{l=o?H.jN:H.iP
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
lN:function(a,b,c,d){var t=H.iP
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jQ:function(a,b,c){var t,s,r,q
if(c)return H.lP(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lN(s,b==null?r!=null:b!==r,t,b)
return q},
lO:function(a,b,c,d){var t,s
t=H.iP
s=H.jN
switch(b?-1:a){case 0:throw H.c(H.mk("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lP:function(a,b){var t,s,r,q
t=$.jO
if(t==null){t=H.jL("self")
$.jO=t}t=$.jM
if(t==null){t=H.jL("receiver")
$.jM=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lO(r,b==null?q!=null:b!==q,s,b)
return t},
jj:function(a,b,c,d,e,f){var t,s
t=J.av(b)
s=!!J.t(c).$ish?J.av(c):c
return H.lQ(a,t,s,!!d,e,f)},
iP:function(a){return a.a},
jN:function(a){return a.c},
jL:function(a){var t,s,r,q,p
t=new H.b8("self","target","receiver","name")
s=J.av(Object.getOwnPropertyNames(t))
for(r=s.length,q=0;q<r;++q){p=s[q]
if(t[p]===a)return p}},
nx:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.ab(a,"String"))},
ns:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ab(a,"double"))},
nw:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.ab(a,"num"))},
mR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.ab(a,"bool"))},
n4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.ab(a,"int"))},
nc:function(a,b){throw H.c(H.ab(a,b.substring(3)))},
nb:function(a,b){var t=J.N(b)
throw H.c(H.jP(a,t.bo(b,3,t.gj(b))))},
jn:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.nc(a,b)},
ao:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.nb(a,b)},
nv:function(a){if(a==null)return a
if(!!J.t(a).$ish)return a
throw H.c(H.ab(a,"List"))},
jk:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
b3:function(a,b){var t,s
if(a==null)return!1
t=H.jk(a)
if(t==null)s=!1
else s=H.kW(t,b)
return s},
nt:function(a,b){var t,s
if(a==null)return a
if($.jg)return a
$.jg=!0
try{if(H.b3(a,b))return a
t=H.iw(b,null)
s=H.ab(a,t)
throw H.c(s)}finally{$.jg=!1}},
ab:function(a,b){return new H.h1("TypeError: "+H.e(P.c_(a))+": type '"+H.kI(a)+"' is not a subtype of type '"+b+"'")},
jP:function(a,b){return new H.dF("CastError: "+H.e(P.c_(a))+": type '"+H.kI(a)+"' is not a subtype of type '"+b+"'")},
kI:function(a){var t
if(a instanceof H.as){t=H.jk(a)
if(t!=null)return H.iw(t,null)
return"Closure"}return H.bj(a)},
ae:function(a){if(!0===a)return!1
if(!!J.t(a).$isiT)a=a.$0()
if(typeof a==="boolean")return!a
throw H.c(H.ab(a,"bool"))},
al:function(a){throw H.c(new H.hd(a))},
b:function(a){if(H.ae(a))throw H.c(P.lM(null))},
nh:function(a){throw H.c(new P.dQ(a))},
mk:function(a){return new H.fq(a)},
l1:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kR:function(a){return u.getIsolateTag(a)},
E:function(a){return new H.aj(a,null)},
A:function(a,b){H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
id:function(a){if(a==null)return
return a.$ti},
kS:function(a,b){return H.jr(a["$as"+H.e(b)],H.id(a))},
S:function(a,b,c){var t,s
t=H.kS(a,b)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
an:function(a,b){var t,s
t=H.id(a)
if(t==null)s=null
else{H.b(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
iw:function(a,b){var t=H.b4(a,b)
return t},
b4:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.b(!0)
H.b(!0)
return a[0].name+H.dv(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.e(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.b4(t,b)
return H.mG(a,b)}return"unknown-reified-type"},
mG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.b4(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.b4(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.b4(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mW(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.b4(l[j],b)+(" "+H.e(j))}q+="}"}return"("+q+") => "+t},
dv:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.b(t)
s=new P.bl("")
for(r=b,q=!0,p=!0;H.b(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.b(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.b4(o,c)}return p?"":"<"+s.k(0)+">"},
ie:function(a){var t,s,r
if(a instanceof H.as){t=H.jk(a)
if(t!=null)return H.iw(t,null)}s=J.t(a).constructor.name
if(a==null)return s
r=H.dv(a.$ti,0,null)
return s+r},
jr:function(a,b){if(a==null)return b
H.b(typeof a=="function")
H.b(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jo(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jo(a,null,b)
return b},
dt:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.id(a)
s=J.t(a)
if(s[b]==null)return!1
return H.kM(H.jr(s[d],t),c)},
dw:function(a,b,c,d){var t,s
if(a==null)return a
t=H.dt(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dv(c,0,null)
throw H.c(H.jP(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
np:function(a,b,c,d){var t,s
if(a==null)return a
t=H.dt(a,b,c,d)
if(t)return a
t=b.substring(3)
s=H.dv(c,0,null)
throw H.c(H.ab(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(t+s,u.mangledGlobalNames)))},
kM:function(a,b){var t,s,r,q,p
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
nq:function(a,b,c){return H.jo(a,b,H.kS(b,c))},
T:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(typeof a==="number")return!1
if(typeof b==="number")return!1
if(a.name==="H")return!0
if('func' in b)return H.kW(a,b)
if('func' in a)return b.name==="iT"||b.name==="C"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.b(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.b(!0)
q=b[0]}else q=b
if(q!==s){p=H.iw(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kM(H.jr(o,t),r)},
kL:function(a,b,c){var t,s,r,q,p,o,n
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
mN:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.b(typeof a=='object')
H.b(typeof b=='object')
t=J.av(Object.getOwnPropertyNames(b))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.T(p,o)||H.T(o,p)))return!1}return!0},
kW:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kL(r,q,!1))return!1
if(!H.kL(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.b(j)
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
if(!(H.T(g,f)||H.T(f,g)))return!1}}return H.mN(a.named,b.named)},
jo:function(a,b,c){H.b(typeof a=="function")
H.b(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
ny:function(a){var t=$.jl
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nu:function(a){return H.aB(a)},
nr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n7:function(a){var t,s,r,q,p,o
H.b(!(a instanceof P.C))
t=$.jl.$1(a)
s=$.ia[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.il[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kK.$2(a,t)
if(t!=null){s=$.ia[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.il[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iu(r)
$.ia[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.il[t]=r
return r}if(p==="-"){o=H.iu(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kY(a,r)
if(p==="*")throw H.c(P.kw(t))
if(u.leafTags[t]===true){o=H.iu(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kY(a,r)},
kY:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.jp(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iu:function(a){return J.jp(a,!1,null,!!a.$isr)},
n9:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return H.iu(t)
else return J.jp(t,c,null,null)},
n2:function(){if(!0===$.jm)return
$.jm=!0
H.n3()},
n3:function(){var t,s,r,q,p,o,n,m
$.ia=Object.create(null)
$.il=Object.create(null)
H.n1()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.l0.$1(p)
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
t=C.S()
t=H.b1(C.P,H.b1(C.U,H.b1(C.B,H.b1(C.B,H.b1(C.T,H.b1(C.Q,H.b1(C.R(C.C),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jl=new H.ii(p)
$.kK=new H.ij(o)
$.l0=new H.ik(n)},
b1:function(a,b){return a(b)||b},
ng:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fm:function fm(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h_:function h_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
f4:function f4(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
h4:function h4(a){this.a=a},
iE:function iE(a){this.a=a},
d6:function d6(a,b){this.a=a
this.b=b},
im:function im(a){this.a=a},
io:function io(a,b){this.a=a
this.b=b},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ir:function ir(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
as:function as(){},
fP:function fP(){},
fB:function fB(){},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h1:function h1(a){this.a=a},
dF:function dF(a){this.a=a},
fq:function fq(a){this.a=a},
hd:function hd(a){this.a=a},
aj:function aj(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eE:function eE(a){this.a=a},
eH:function eH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eI:function eI(a,b){this.a=a
this.$ti=b},
eJ:function eJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ii:function ii(a){this.a=a},
ij:function ij(a){this.a=a},
ik:function ik(a){this.a=a},
i3:function(a){var t,s,r
if(!!J.t(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
ad:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b2(b,a))},
bh:function bh(){},
aV:function aV(){},
eV:function eV(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
cf:function cf(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
cj:function cj(){},
f1:function f1(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
mW:function(a){return J.av(H.A(a?Object.keys(a):[],[null]))},
iv:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.c8.prototype
return J.c7.prototype}if(typeof a=="string")return J.aw.prototype
if(a==null)return J.eD.prototype
if(typeof a=="boolean")return J.eC.prototype
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.C)return a
return J.ic(a)},
jp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ic:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jm==null){H.n2()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.c(P.kw("Return interceptor for "+H.e(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iW()]
if(p!=null)return p
p=H.n7(a)
if(p!=null)return p
if(typeof a=="function")return C.V
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$iW(),{value:C.w,enumerable:false,writable:true,configurable:true})
return C.w}return C.w},
av:function(a){a.fixed$length=Array
return a},
N:function(a){if(typeof a=="string")return J.aw.prototype
if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.C)return a
return J.ic(a)},
du:function(a){if(a==null)return a
if(a.constructor==Array)return J.au.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.C)return a
return J.ic(a)},
kP:function(a){if(typeof a=="number")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aE.prototype
return a},
mY:function(a){if(typeof a=="number")return J.aR.prototype
if(typeof a=="string")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aE.prototype
return a},
kQ:function(a){if(typeof a=="string")return J.aw.prototype
if(a==null)return a
if(!(a instanceof P.C))return J.aE.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ax.prototype
return a}if(a instanceof P.C)return a
return J.ic(a)},
B:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).w(a,b)},
a3:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kP(a).aB(a,b)},
l4:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kP(a).aC(a,b)},
b5:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n6(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.N(a).h(a,b)},
l5:function(a,b,c,d){return J.j(a).dD(a,b,c,d)},
js:function(a,b){return J.kQ(a).aL(a,b)},
iF:function(a,b){return J.j(a).dW(a,b)},
l6:function(a,b,c){return J.j(a).dX(a,b,c)},
jt:function(a,b){return J.j(a).bR(a,b)},
iG:function(a,b){return J.j(a).P(a,b)},
ju:function(a,b,c){return J.j(a).bU(a,b,c)},
l7:function(a,b){return J.j(a).ec(a,b)},
iH:function(a,b,c){return J.j(a).bV(a,b,c)},
bM:function(a,b,c){return J.j(a).bW(a,b,c)},
dx:function(a,b){return J.j(a).ef(a,b)},
l8:function(a,b){return J.j(a).bX(a,b)},
l9:function(a,b,c){return J.j(a).bY(a,b,c)},
jv:function(a,b,c,d){return J.j(a).bZ(a,b,c,d)},
la:function(a,b,c,d,e){return J.j(a).c_(a,b,c,d,e)},
lb:function(a,b){return J.mY(a).R(a,b)},
iI:function(a,b,c){return J.N(a).ej(a,b,c)},
iJ:function(a){return J.j(a).c1(a)},
lc:function(a){return J.j(a).c2(a)},
ld:function(a){return J.j(a).c5(a)},
le:function(a){return J.j(a).eo(a)},
lf:function(a,b){return J.j(a).c7(a,b)},
iK:function(a,b){return J.j(a).c8(a,b)},
lg:function(a,b,c,d){return J.j(a).c9(a,b,c,d)},
lh:function(a,b,c,d,e){return J.j(a).ew(a,b,c,d,e)},
li:function(a,b,c,d,e){return J.j(a).ca(a,b,c,d,e)},
lj:function(a,b,c,d,e,f){return J.j(a).ex(a,b,c,d,e,f)},
jw:function(a,b){return J.du(a).t(a,b)},
bN:function(a,b){return J.j(a).cb(a,b)},
lk:function(a,b){return J.j(a).cc(a,b)},
ll:function(a){return J.j(a).ey(a)},
jx:function(a,b){return J.du(a).ag(a,b)},
lm:function(a){return J.j(a).geb(a)},
b6:function(a){return J.t(a).gu(a)},
aK:function(a){return J.du(a).gv(a)},
ag:function(a){return J.N(a).gj(a)},
ln:function(a){return J.j(a).gb4(a)},
lo:function(a){return J.t(a).gA(a)},
lp:function(a){return J.j(a).gf_(a)},
lq:function(a){return J.j(a).gay(a)},
iL:function(a){return J.j(a).gm(a)},
iM:function(a){return J.j(a).gn(a)},
jy:function(a){return J.j(a).gC(a)},
iN:function(a,b){return J.j(a).a6(a,b)},
lr:function(a){return J.j(a).aA(a)},
ls:function(a){return J.j(a).bb(a)},
lt:function(a,b){return J.j(a).bd(a,b)},
lu:function(a,b,c){return J.j(a).be(a,b,c)},
jz:function(a,b,c){return J.j(a).bh(a,b,c)},
lv:function(a,b){return J.j(a).cf(a,b)},
lw:function(a,b){return J.du(a).ci(a,b)},
lx:function(a,b,c){return J.j(a).cj(a,b,c)},
jA:function(a){return J.du(a).eT(a)},
ly:function(a,b){return J.j(a).H(a,b)},
lz:function(a,b,c,d){return J.j(a).bm(a,b,c,d)},
lA:function(a,b,c,d,e,f,g){return J.j(a).co(a,b,c,d,e,f,g)},
lB:function(a,b,c,d){return J.j(a).cp(a,b,c,d)},
jB:function(a,b,c,d){return J.j(a).cq(a,b,c,d)},
lC:function(a){return J.kQ(a).f1(a)},
b7:function(a){return J.t(a).k(a)},
lD:function(a,b,c,d){return J.j(a).f3(a,b,c,d)},
lE:function(a,b,c){return J.j(a).cu(a,b,c)},
lF:function(a,b,c){return J.j(a).cv(a,b,c)},
iO:function(a,b,c){return J.j(a).cw(a,b,c)},
lG:function(a,b,c){return J.j(a).cz(a,b,c)},
jC:function(a,b,c){return J.j(a).cA(a,b,c)},
jD:function(a,b,c){return J.j(a).cB(a,b,c)},
jE:function(a,b,c){return J.j(a).cC(a,b,c)},
jF:function(a,b,c,d){return J.j(a).cD(a,b,c,d)},
jG:function(a,b,c,d){return J.j(a).cE(a,b,c,d)},
lH:function(a,b){return J.j(a).cG(a,b)},
lI:function(a,b,c){return J.j(a).f4(a,b,c)},
lJ:function(a,b,c,d,e,f,g){return J.j(a).cI(a,b,c,d,e,f,g)},
lK:function(a,b,c,d,e){return J.j(a).cK(a,b,c,d,e)},
a:function a(){},
eC:function eC(){},
eD:function eD(){},
be:function be(){},
fe:function fe(){},
aE:function aE(){},
ax:function ax(){},
au:function au(a){this.$ti=a},
iU:function iU(a){this.$ti=a},
dB:function dB(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aR:function aR(){},
c8:function c8(){},
c7:function c7(){},
aw:function aw(){}},P={
mv:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mO()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bI(new P.hf(t),1)).observe(s,{childList:true})
return new P.he(t,s,r)}else if(self.setImmediate!=null)return P.mP()
return P.mQ()},
mw:function(a){H.ib()
self.scheduleImmediate(H.bI(new P.hg(a),0))},
mx:function(a){H.ib()
self.setImmediate(H.bI(new P.hh(a),0))},
my:function(a){P.j6(C.z,a)},
j6:function(a,b){var t=C.b.J(a.a,1000)
return H.mq(t<0?0:t,b)},
mJ:function(a,b){if(H.b3(a,{func:1,args:[P.H,P.H]})){b.toString
return a}else{b.toString
return a}},
mA:function(a,b){var t,s,r
H.b(b.a<4)
H.b(!(a instanceof P.ac))
H.b(b.a===0)
b.a=1
try{a.cs(new P.hv(b),new P.hw(b))}catch(r){t=H.I(r)
s=H.am(r)
P.nd(new P.hx(b,t,s))}},
kz:function(a,b){var t,s,r
H.b(b.a<=1)
for(;t=a.a,s=t===2,s;){H.b(s)
a=a.c}if(t>=4){r=b.aV()
b.aK(a)
P.br(b,r)}else{r=b.c
H.b(b.a<=1)
b.a=2
b.c=a
a.bL(r)}},
br:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.i4(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.br(t.a,b)}s=t.a
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
P.i4(null,null,p,o,s)
return}s=$.z
if(s==null?l!=null:s!==l){H.b(l!=null)
s=$.z
H.b(l==null?s!=null:l!==s)
j=$.z
$.z=l
i=j}else i=null
s=b.c
if(s===8)new P.hB(t,r,b,q).$0()
else if(p){if((s&1)!==0)new P.hA(r,b,m).$0()}else if((s&2)!==0)new P.hz(t,r,b).$0()
if(i!=null){H.b(!0)
$.z=i}s=r.b
if(!!J.t(s).$iseq){if(s.a>=4){H.b(o.a<4)
h=o.c
o.c=null
b=o.at(h)
H.b(o.a<4)
H.b(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kz(s,o)
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
mI:function(){var t,s
for(;t=$.b0,t!=null;){$.bG=null
s=t.b
$.b0=s
if(s==null)$.bF=null
t.a.$0()}},
mM:function(){$.jh=!0
try{P.mI()}finally{$.bG=null
$.jh=!1
if($.b0!=null)$.$get$jc().$1(P.kN())}},
kH:function(a){var t=new P.cH(a,null)
if($.b0==null){$.bF=t
$.b0=t
if(!$.jh)$.$get$jc().$1(P.kN())}else{$.bF.b=t
$.bF=t}},
mL:function(a){var t,s,r
t=$.b0
if(t==null){P.kH(a)
$.bG=$.bF
return}s=new P.cH(a,null)
r=$.bG
if(r==null){s.b=t
$.bG=s
$.b0=s}else{s.b=r.b
r.b=s
$.bG=s
if(s.b==null)$.bF=s}},
nd:function(a){var t=$.z
if(C.f===t){P.i6(null,null,C.f,a)
return}t.toString
P.i6(null,null,t,t.b0(a))},
mr:function(a,b){var t=$.z
if(t===C.f){t.toString
return P.j6(a,b)}return P.j6(a,t.b0(b))},
jb:function(a){var t,s
H.b(a!=null)
t=$.z
H.b(a==null?t!=null:a!==t)
s=$.z
$.z=a
return s},
i4:function(a,b,c,d,e){var t={}
t.a=d
P.mL(new P.i5(t,e))},
kF:function(a,b,c,d){var t,s
if($.z===c)return d.$0()
t=P.jb(c)
try{s=d.$0()
return s}finally{s=t
H.b(s!=null)
$.z=s}},
kG:function(a,b,c,d,e){var t,s
if($.z===c)return d.$1(e)
t=P.jb(c)
try{s=d.$1(e)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
mK:function(a,b,c,d,e,f){var t,s
if($.z===c)return d.$2(e,f)
t=P.jb(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.b(s!=null)
$.z=s}},
i6:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b0(d):c.ed(d)
P.kH(d)},
hf:function hf(a){this.a=a},
he:function he(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a){this.a=a},
hh:function hh(a){this.a=a},
iQ:function iQ(){},
hk:function hk(){},
hZ:function hZ(a,b){this.a=a
this.$ti=b},
cP:function cP(a,b,c,d,e,f){var _=this
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
hu:function hu(a,b){this.a=a
this.b=b},
hy:function hy(a,b){this.a=a
this.b=b},
hv:function hv(a){this.a=a},
hw:function hw(a){this.a=a},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hC:function hC(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b){this.a=a
this.b=b},
fG:function fG(){},
fI:function fI(a){this.a=a},
fJ:function fJ(a,b){this.a=a
this.b=b},
fH:function fH(){},
j5:function j5(){},
aL:function aL(a,b){this.a=a
this.b=b},
i2:function i2(){},
i5:function i5(a,b){this.a=a
this.b=b},
hP:function hP(){},
hR:function hR(a,b){this.a=a
this.b=b},
hQ:function hQ(a,b){this.a=a
this.b=b},
hS:function hS(a,b){this.a=a
this.b=b},
k6:function(a,b){return new H.a7(0,null,null,null,null,null,0,[a,b])},
U:function(){return new H.a7(0,null,null,null,null,null,0,[null,null])},
az:function(a){return H.mX(a,new H.a7(0,null,null,null,null,null,0,[null,null]))},
aZ:function(a,b){return new P.hJ(0,null,null,null,null,null,0,[a,b])},
aA:function(a,b,c,d){return new P.hH(0,null,null,null,null,null,0,[d])},
jf:function(){var t=Object.create(null)
H.b(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m7:function(a,b,c){var t,s
if(P.ji(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bH()
C.a.l(s,a)
try{P.mH(a,t)}finally{H.b(C.a.gb2(s)===a)
s.pop()}s=P.kg(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eA:function(a,b,c){var t,s,r
if(P.ji(a))return b+"..."+c
t=new P.bl(b)
s=$.$get$bH()
C.a.l(s,a)
try{r=t
r.a=P.kg(r.ga_(),a,", ")}finally{H.b(C.a.gb2(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
ji:function(a){var t,s
for(t=0;s=$.$get$bH(),t<s.length;++t)if(a===s[t])return!0
return!1},
mH:function(a,b){var t,s,r,q,p,o,n,m,l,k
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
j_:function(a,b){var t,s
t=P.aA(null,null,null,b)
for(s=J.aK(a);s.p();)t.l(0,s.gq(s))
return t},
k8:function(a){var t,s,r
t={}
if(P.ji(a))return"{...}"
s=new P.bl("")
try{C.a.l($.$get$bH(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
J.jx(a,new P.eN(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$bH()
H.b(C.a.gb2(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
j0:function(a,b){var t=new P.eK(null,0,0,0,[b])
t.dh(a,b)
return t},
hJ:function hJ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hH:function hH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
bt:function bt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hE:function hE(){},
iZ:function iZ(){},
c9:function c9(){},
l:function l(){},
cb:function cb(){},
eN:function eN(a,b){this.a=a
this.b=b},
aU:function aU(){},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hK:function hK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ft:function ft(){},
fs:function fs(){},
bu:function bu(){},
lY:function(a){var t=J.t(a)
if(!!t.$isas)return t.k(a)
return"Instance of '"+H.bj(a)+"'"},
k7:function(a,b,c){var t,s
t=H.A([],[c])
for(s=J.aK(a);s.p();)C.a.l(t,s.gq(s))
return t},
kg:function(a,b,c){var t=J.aK(b)
if(!t.p())return a
if(c.length===0){do a+=H.e(t.gq(t))
while(t.p())}else{a+=H.e(t.gq(t))
for(;t.p();)a=a+c+H.e(t.gq(t))}return a},
lR:function(a,b){return J.lb(a,b)},
lS:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+t
if(t>=10)return s+"00"+t
return s+"000"+t},
lT:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bU:function(a){if(a>=10)return""+a
return"0"+a},
lV:function(a,b,c,d,e,f){return new P.at(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
c_:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lY(a)},
lM:function(a){return new P.bP(a)},
jH:function(a){return new P.a4(!1,null,null,a)},
jI:function(a,b,c){return new P.a4(!0,a,b,c)},
fj:function(a,b,c){return new P.cq(null,null,!0,a,b,"Value not in range")},
Z:function(a,b,c,d,e){return new P.cq(b,c,!0,a,d,"Invalid value")},
j4:function(a,b,c,d,e,f){if(0>a||a>c)throw H.c(P.Z(a,0,c,"start",f))
if(a>b||b>c)throw H.c(P.Z(b,a,c,"end",f))
return b},
y:function(a,b,c,d,e){var t=e!=null?e:J.ag(b)
return new P.ex(b,t,!0,a,c,"Index out of range")},
p:function(a){return new P.h5(a)},
kw:function(a){return new P.h3(a)},
fA:function(a){return new P.aX(a)},
a5:function(a){return new P.dH(a)},
c0:function(a){return new P.ht(a)},
a2:function(a){H.iv(H.e(a))},
af:function af(){},
D:function D(){},
b9:function b9(a,b){this.a=a
this.b=b},
R:function R(){},
at:function at(a){this.a=a},
dX:function dX(){},
dY:function dY(){},
aP:function aP(){},
bP:function bP(a){this.a=a},
cn:function cn(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cq:function cq(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ex:function ex(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
h5:function h5(a){this.a=a},
h3:function h3(a){this.a=a},
aX:function aX(a){this.a=a},
dH:function dH(a){this.a=a},
cx:function cx(){},
dQ:function dQ(a){this.a=a},
iS:function iS(){},
ht:function ht(a){this.a=a},
e0:function e0(a,b,c){this.a=a
this.b=b
this.$ti=c},
x:function x(){},
P:function P(){},
c6:function c6(){},
h:function h(){},
aT:function aT(){},
H:function H(){},
a1:function a1(){},
C:function C(){},
aW:function aW(){},
n:function n(){},
bl:function bl(a){this.a=a},
j8:function j8(){},
i8:function(a){var t,s,r,q,p
if(a==null)return
t=P.U()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.O)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mU:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.jx(a,new P.i7(t))
return t},
jX:function(){var t=$.jW
if(t==null){t=J.iI(window.navigator.userAgent,"Opera",0)
$.jW=t}return t},
lU:function(){var t,s
t=$.jT
if(t!=null)return t
s=$.jU
if(s==null){s=J.iI(window.navigator.userAgent,"Firefox",0)
$.jU=s}if(s)t="-moz-"
else{s=$.jV
if(s==null){s=!P.jX()&&J.iI(window.navigator.userAgent,"Trident/",0)
$.jV=s}if(s)t="-ms-"
else t=P.jX()?"-o-":"-webkit-"}$.jT=t
return t},
i7:function i7(a){this.a=a},
hG:function hG(){},
hO:function hO(){},
Q:function Q(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
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
em:function em(){},
eo:function eo(){},
Y:function Y(){},
a6:function a6(){},
ev:function ev(){},
eG:function eG(){},
eP:function eP(){},
f5:function f5(){},
fc:function fc(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
fl:function fl(){},
bk:function bk(){},
fK:function fK(){},
u:function u(){},
fM:function fM(){},
bn:function bn(){},
bo:function bo(){},
fZ:function fZ(){},
h7:function h7(){},
cS:function cS(){},
cT:function cT(){},
cZ:function cZ(){},
d_:function d_(){},
d8:function d8(){},
d9:function d9(){},
de:function de(){},
df:function df(){},
dC:function dC(){},
dD:function dD(){},
aM:function aM(){},
f6:function f6(){},
fo:function fo(){},
fp:function fp(){},
fz:function fz(){},
d4:function d4(){},
d5:function d5(){}},W={
lW:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).N(t,a,b,c)
s.toString
t=new H.cG(new W.K(s),new W.e_(),[W.q])
return t.gZ(t)},
lX:function(a){return"wheel"},
bb:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lp(a)
if(typeof s==="string")t=a.tagName}catch(r){H.I(r)}return t},
mz:function(a,b){return document.createElement(a)},
aJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kD:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
a_:function(a,b,c,d,e){var t=W.kJ(new W.hs(c))
t=new W.hr(0,a,b,t,!1,[e])
t.dv(a,b,c,!1,e)
return t},
kA:function(a){var t,s
t=document.createElement("a")
s=new W.hT(t,window.location)
s=new W.bs(s)
s.dw(a)
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
kE:function(){var t=P.n
t=new W.i_(P.j_(C.t,t),P.aA(null,null,null,t),P.aA(null,null,null,t),P.aA(null,null,null,t),null)
t.dB(null,new H.bf(C.t,new W.i0(),[H.an(C.t,0),null]),["TEMPLATE"],null)
return t},
kJ:function(a){var t=$.z
if(t===C.f)return a
return t.ee(a)},
i:function i(){},
bO:function bO(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
ap:function ap(){},
bQ:function bQ(){},
bR:function bR(){},
bS:function bS(){},
ar:function ar(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
aN:function aN(){},
dM:function dM(){},
W:function W(){},
aO:function aO(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dR:function dR(){},
dS:function dS(){},
bV:function bV(){},
ba:function ba(){},
dT:function dT(){},
bW:function bW(){},
dU:function dU(){},
bX:function bX(){},
bY:function bY(){},
bZ:function bZ(){},
dV:function dV(){},
dW:function dW(){},
X:function X(){},
e_:function e_(){},
f:function f(){},
d:function d(){},
ek:function ek(){},
el:function el(){},
ep:function ep(){},
es:function es(){},
c4:function c4(){},
et:function et(){},
bc:function bc(){},
c5:function c5(){},
eu:function eu(){},
bd:function bd(){},
ay:function ay(){},
eL:function eL(){},
eM:function eM(){},
eQ:function eQ(){},
eS:function eS(){},
bg:function bg(){},
eT:function eT(){},
G:function G(){},
K:function K(a){this.a=a},
q:function q(){},
ck:function ck(){},
bi:function bi(){},
a8:function a8(){},
ff:function ff(){},
fi:function fi(){},
cp:function cp(){},
cs:function cs(){},
fr:function fr(){},
ai:function ai(){},
fx:function fx(){},
fy:function fy(){},
a9:function a9(){},
fE:function fE(){},
fF:function fF(a){this.a=a},
cz:function cz(){},
fN:function fN(){},
fO:function fO(){},
bm:function bm(){},
fQ:function fQ(){},
fR:function fR(){},
fT:function fT(){},
aC:function aC(){},
fX:function fX(){},
fY:function fY(){},
cF:function cF(){},
aD:function aD(){},
h6:function h6(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
aG:function aG(){},
bq:function bq(){},
hc:function hc(a){this.a=a},
ja:function ja(){},
hl:function hl(){},
hm:function hm(){},
hD:function hD(){},
cW:function cW(){},
hW:function hW(){},
hX:function hX(){},
hi:function hi(){},
hn:function hn(a){this.a=a},
hq:function hq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hr:function hr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hs:function hs(a){this.a=a},
bs:function bs(a){this.a=a},
m:function m(){},
cm:function cm(a){this.a=a},
f3:function f3(a){this.a=a},
f2:function f2(a,b,c){this.a=a
this.b=b
this.c=c},
bz:function bz(){},
hU:function hU(){},
hV:function hV(){},
i_:function i_(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i0:function i0(){},
hY:function hY(){},
c2:function c2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cl:function cl(){},
j2:function j2(){},
j9:function j9(){},
hT:function hT(a,b){this.a=a
this.b=b},
dg:function dg(a){this.a=a},
i1:function i1(a){this.a=a},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cO:function cO(){},
cQ:function cQ(){},
cR:function cR(){},
cU:function cU(){},
cV:function cV(){},
cX:function cX(){},
cY:function cY(){},
d0:function d0(){},
d1:function d1(){},
bA:function bA(){},
bB:function bB(){},
d2:function d2(){},
d3:function d3(){},
d7:function d7(){},
da:function da(){},
db:function db(){},
bC:function bC(){},
bD:function bD(){},
dc:function dc(){},
dd:function dd(){},
dh:function dh(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
dq:function dq(){},
dr:function dr(){}},B={
ne:function(a){var t,s
t=document
s=W.ay
W.a_(t,"keydown",new B.ix(),!1,s)
W.a_(t,"keyup",new B.iy(),!1,s)
if(!$.nf)W.a_(t,"mousemove",new B.iz(),!1,W.G)
s=W.G
W.a_(t,"mousedown",new B.iA(),!1,s)
W.a_(t,"mouseup",new B.iB(),!1,s)},
m9:function(a,b,c,d){var t,s,r,q,p,o,n
t=new Float32Array(3)
s=$.$get$i9()
r=$.$get$bJ()
q=new T.V(new Float32Array(16))
q.Y()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
t=new B.f7(a,b,c,0,new T.v(t),-0.02,s,r,q,new T.v(p),new T.v(o),new T.v(n),new T.v(new Float32Array(3)),"camera:orbit",!1,!0)
t.di(a,b,c,d)
return t},
ix:function ix(){},
iy:function iy(){},
iz:function iz(){},
iA:function iA(){},
iB:function iB(){},
f7:function f7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
f8:function f8(a){this.a=a},
f9:function f9(a){this.a=a},
fa:function fa(){},
fb:function fb(a){this.a=a},
ml:function(a,b,c,d,e,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a2+1
s=a1+1
r=B.ma(new B.fw(e,d,a0,c),0,6.283185307179586,s,!1,0.001)
H.b(r.length===2*s)
q=B.ms(r,a2,a3,!1)
H.b(q.length===s)
H.b(q[0].length===2*t)
p=[]
o=new G.er(!1,[],[],p,P.U())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.O)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.v(new Float32Array(3))
i.L(j)
C.a.l(p,i)}}H.b(p.length===t*s)
o.dd(t,s,!1)
o.de(t,s)
n=o.e
H.b(n.h(0,"aTexUV").length===p.length)
H.b(!n.E(0,"aNormal"))
H.b(C.i.bl("aNormal","a"))
h=$.$get$L().h(0,"aNormal")
switch(h.a){case"vec2":n.i(0,"aNormal",H.A([],[T.aF]))
break
case"vec3":n.i(0,"aNormal",H.A([],[T.v]))
break
case"vec4":n.i(0,"aNormal",H.A([],[T.ak]))
break
case"float":n.i(0,"aNormal",H.A([],[P.R]))
break
case"uvec4":n.i(0,"aNormal",H.A([],[[P.h,P.x]]))
break
default:if(H.ae(!1))H.al("unknown type for aNormal")}for(j=q.length,m=0;m<q.length;q.length===j||(0,H.O)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
g=n.h(0,"aNormal")
i.toString
f=new T.v(new Float32Array(3))
f.L(i);(g&&C.a).l(g,f)}}H.b(n.h(0,"aNormal").length===p.length)
return o},
ms:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(3)
r=new T.v(s)
q=new Float32Array(3)
p=new T.v(q)
o=new Float32Array(3)
n=new T.v(o)
for(m=a2+1,l=0;l<a1.length;l+=2){k=a1[l]
j=a1[l+1]
i=[]
C.a.l(t,i)
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
o[2]=e*d}p.a2(0)
n.a2(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.L(k)
r.av(p,a)
r.av(n,a0)
h=new T.v(new Float32Array(3))
h.L(r)
C.a.l(i,h)
s[2]=0
s[1]=0
s[0]=0
r.av(p,a)
r.av(n,a0)
r.a2(0)
h=new T.v(new Float32Array(3))
h.L(r)
C.a.l(i,h)}}return t},
ma:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.b(d>=2)
t=[]
s=new T.v(new Float32Array(3))
r=new T.v(new Float32Array(3))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.bn(0,s)
n=new T.v(new Float32Array(3))
n.L(s)
C.a.l(t,n)
n=new T.v(new Float32Array(3))
n.L(r)
C.a.l(t,n)}return t},
fw:function fw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mu:function(a){var t,s,r
t=H.A(a.split("\n"),[P.n])
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.e(t[s])}return C.a.ak(t,"\n")},
ky:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.c4(a,b)
t.bk(a,s,c)
t.c0(a,s)
r=t.bg(a,s,35713)
if(r!=null&&!r){q=t.bf(a,s)
P.a2("E:Compilation failed:")
P.a2("E:"+G.mu(c))
P.a2("E:Failure:")
P.a2(C.i.a5("E:",q))
throw H.c(q)}return s},
kh:function(a,b,c){return new G.cC(a,b,c)},
k0:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iL(a[s])
b[t+1]=J.iM(a[s])
b[t+2]=J.jy(a[s])}return b},
m_:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iL(a[s])
b[t+1]=J.iM(a[s])}return b},
m0:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iL(a[s])
b[t+1]=J.iM(a[s])
b[t+2]=J.jy(a[s])
b[t+3]=J.lq(a[s])}return b},
lZ:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b5(a[s],0)
b[t+1]=J.b5(a[s],1)
b[t+2]=J.b5(a[s],2)
b[t+3]=J.b5(a[s],3)}return b},
k9:function(a,b,c,d){return new G.eR(b,J.le(b.a),c,P.U(),d,null,0,-1,null,null,P.U(),"meshdata:"+a,!1,!0)},
mB:function(a,b){var t,s,r,q,p,o,n,m,l,k
for(t=a.e,s=t.gD(t),s=s.gv(s),r=b.x,q=[[P.h,P.x]],p=[P.R],o=[T.ak],n=[T.v],m=[T.aF];s.p();){l=s.gq(s)
if(!r.E(0,l)){l="Dropping unnecessary attribute: "+H.e(l)
if($.kO>0)H.iv("I: "+l)
continue}k=t.h(0,l)
switch($.$get$L().h(0,l).a){case"vec2":b.X(l,G.m_(H.dw(k,"$ish",m,"$ash"),null),2)
break
case"vec3":b.X(l,G.k0(H.dw(k,"$ish",n,"$ash"),null),3)
break
case"vec4":b.X(l,G.m0(H.dw(k,"$ish",o,"$ash"),null),4)
break
case"float":b.X(l,new Float32Array(H.i3(H.dw(k,"$ish",p,"$ash"))),1)
break
case"uvec4":b.X(l,G.lZ(H.dw(k,"$ish",q,"$ash"),null),4)
break
default:if(H.ae(!1))H.al("unknown type for "+H.e(l)+" ["+J.lo(k[0]).k(0)+"] ["+new H.aj(H.ie(k),null).k(0)+"] "+H.e(k))}}},
ke:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aA(null,null,null,P.n)
s=c.b
r=d.b
q=c.f
p=J.lc(b.a)
o=G.ky(b.a,35633,s)
J.ju(b.a,p,o)
n=G.ky(b.a,35632,r)
J.ju(b.a,p,n)
if(q.length>0)J.lD(b.a,p,q,35980)
J.lv(b.a,p)
if(!J.lu(b.a,p,35714))H.F(J.lt(b.a,p))
t=new G.fn(b,c,d,p,P.j_(c.c,null),P.U(),P.U(),t,null,a,!1,!0)
t.dj(a,b,c,d)
return t},
fv:function(a){return new G.fu(a,null,[],[],[],[],0,P.U())},
eU:function eU(){},
h2:function h2(){},
dE:function dE(){},
dG:function dG(a,b){this.a=a
this.b=b},
ej:function ej(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
er:function er(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
cd:function cd(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eR:function eR(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
fd:function fd(){},
fn:function fn(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
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
fu:function fu(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cv:function cv(a,b,c,d,e,f,g,h){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.a=f
_.b=g
_.c=h},
fS:function fS(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bp:function bp(){},
ew:function ew(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
mt:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(s)
for(q=0;q<s;++q)r[q]=($.$get$kx().eQ()-0.5)*c
s=G.k9(t,a.d,0,a.e.x)
s.bq(r)
return s},
co:function co(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
_.c=n},
fC:function fC(){},
fD:function fD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
ig:function(a){var t,s
t=C.v.eB(a,0,new A.ih())
s=536870911&t+(C.b.cL(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ih:function ih(){}},T={V:function V(a){this.a=a},aF:function aF(a){this.a=a},v:function v(a){this.a=a},ak:function ak(a){this.a=a}},U={
lL:function(a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=new Float32Array(3000)
s=new Float32Array(4000)
r=new Float32Array(16)
q=new T.V(r)
q.Y()
p=new Float32Array(3)
o=new Float32Array(3)
n=new Float32Array(3)
m=new G.cv(q,new T.v(p),new T.v(o),new T.v(n),new T.v(new Float32Array(3)),"dummy",!1,!0)
for(l=0,k=-5;k<5;++k)for(q=k*40,j=-5;j<5;++j)for(p=j*40,i=-5;i<5;++i){r[12]=q
r[13]=p
r[14]=i*30
o=l*3
C.v.bj(t,o,m.bc().a)
n=new Float32Array(9)
n[0]=r[0]
n[1]=r[1]
n[2]=r[2]
n[3]=r[4]
n[4]=r[5]
n[5]=r[6]
n[6]=r[8]
n[7]=r[9]
n[8]=r[10]
h=new Float32Array(4)
g=n[0]
f=n[4]
e=n[8]
d=0+g+f+e
if(d>0){c=Math.sqrt(d+1)
h[3]=c*0.5
c=0.5/c
h[0]=(n[5]-n[7])*c
h[1]=(n[6]-n[2])*c
h[2]=(n[1]-n[3])*c}else{if(g<f)b=f<e?2:1
else b=g<e?2:0
a=(b+1)%3
a0=(b+2)%3
g=b*3
f=a*3
e=a0*3
c=Math.sqrt(n[g+b]-n[f+a]-n[e+a0]+1)
h[b]=c*0.5
c=0.5/c
h[3]=(n[f+a0]-n[e+a])*c
h[a]=(n[g+a]+n[f+b])*c
h[a0]=(n[g+a0]+n[e+b])*c}C.v.bj(s,o,h);++l}a1.X("iaRotation",s,4)
a1.X("iaTranslation",t,3)},
n8:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t={}
s=document
r=new R.fD(0,0,null,null,null,null)
r.dm(C.r.cO(s,"stats"),"blue","gray")
q=C.r.eS(s,"#webgl-canvas")
p=new G.dG(null,q)
o=(q&&C.x).ba(q,"webgl2",P.az(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.F(P.c0('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+H.e(J.lr(o))
if($.kO>0)P.a2("I: "+n)
J.la(o,0,0,0,1)
J.bN(o,2929)
J.bN(o,2884)
m=B.m9(265,0,0,q)
o=new T.V(new Float32Array(16))
o.Y()
n=new T.V(new Float32Array(16))
n.Y()
l=new R.co(q,p,m,50,1,0.1,1000,o,n,new T.V(new Float32Array(16)),P.U(),"perspective",!1,!0)
l.bv()
l.cl(null)
W.a_(window,"resize",l.geW(),!1,W.f)
k=G.ke("instanced",p,$.$get$kU(),$.$get$kT())
j=new G.cd(P.U(),"mat",!1,!0)
j.I("cDepthTest",!0)
j.I("cDepthWrite",!0)
j.I("cBlendEquation",$.$get$jK())
o=$.$get$kf()
j.I("cStencilFunc",o)
n=new T.V(new Float32Array(16))
n.Y()
j.I("uModelMatrix",n)
i=B.ml(!0,!0,1,2,3,12,128,16,4,!1)
h=G.k9("torusknot",k.d,4,k.e.x)
h.bq(G.k0(i.d,null))
n=i.dc()
g=h.d
h.y=J.iJ(g.a)
H.b(h.ch!=null)
f=h.ch.length
if(f<768){h.saR(new Uint8Array(H.i3(n)))
h.Q=5121}else if(f<196608){h.saR(new Uint16Array(H.i3(n)))
h.Q=5123}else{h.saR(new Uint32Array(H.i3(n)))
h.Q=5125}J.dx(g.a,h.e)
n=h.y
f=h.cx
e=J.t(f)
H.b(!!e.$iskt||!!e.$isku||!!e.$iskv)
J.iH(g.a,34963,n)
J.jv(g.a,34963,f,35048)
G.mB(i,h)
U.lL(h)
d=G.ke("stars",p,$.$get$l_(),$.$get$kZ())
n=$.$get$jJ()
c=new G.cd(P.U(),"stars",!1,!0)
c.I("cDepthTest",!0)
c.I("cDepthWrite",!1)
c.I("cBlendEquation",n)
c.I("cStencilFunc",o)
b=s.createElement("canvas")
b.width=64
b.height=64
a=C.x.cN(b,"2d")
a0=(a&&C.p).c3(a,32,32,1,32,32,22);(a0&&C.m).au(a0,0,"gray")
C.m.au(a0,1,"black")
a.fillStyle=a0
C.p.ez(a,0,0,64,64)
a0=C.p.c3(a,32,32,1,32,32,6);(a0&&C.m).au(a0,0,"white")
C.m.au(a0,1,"gray")
a.globalAlpha=0.9
a.fillStyle=a0
a.arc(32,32,4,0,6.283185307179586,!1)
a.fill("nonzero")
s=new G.fS(!1,!1,!1,!0,1,9729,9729)
o=J.ld(p.a)
n=new G.ew(b,"Utils::Particles",o,3553,p,s)
J.bM(p.a,3553,o)
J.lx(p.a,37440,1)
n.dl(b)
s.dg(p,3553)
H.b(J.ls(p.a)===0)
J.bM(p.a,3553,null)
c.I("uTexture",n)
c.I("uPointSize",1000)
s=new T.V(new Float32Array(16))
s.Y()
c.I("uModelMatrix",s)
a1=R.mt(d,2000,100)
t.a=0
new U.it(t,m,k,h,j,l,d,a1,c,r).$1(0)},
it:function it(a,b,c,d,e,f,g,h,i,j){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i
_.z=j}}
var v=[C,H,J,P,W,B,G,R,A,T,U]
setFunctionNamesIfNecessary(v)
var $={}
H.iV.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aB(a)},
k:function(a){return"Instance of '"+H.bj(a)+"'"},
gA:function(a){return new H.aj(H.ie(a),null)}}
J.eC.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.as},
$isaf:1}
J.eD.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.am},
$isH:1}
J.be.prototype={
gu:function(a){return 0},
gA:function(a){return C.al},
k:function(a){return String(a)},
$isk5:1}
J.fe.prototype={}
J.aE.prototype={}
J.ax.prototype={
k:function(a){var t=a[$.$get$jS()]
return t==null?this.d5(a):J.b7(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiT:1}
J.au.prototype={
l:function(a,b){if(!!a.fixed$length)H.F(P.p("add"))
a.push(b)},
M:function(a,b){var t,s,r,q,p
t=a.length
if(!!a.fixed$length)H.F(P.p("addAll"))
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.O)(b),++r,t=p){q=b[r]
p=t+1
H.b(t===a.length||H.F(P.a5(a)))
a.push(q)}},
ci:function(a,b){return new H.bf(a,b,[H.an(a,0),null])},
ak:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.e(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
geA:function(a){if(a.length>0)return a[0]
throw H.c(H.eB())},
gb2:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.c(H.eB())},
F:function(a,b,c,d,e){var t,s,r
if(!!a.immutable$list)H.F(P.p("setRange"))
P.j4(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.F(P.Z(e,0,null,"skipCount",null))
s=J.N(d)
if(e+t>s.gj(d))throw H.c(H.k4())
if(e<b)for(r=t-1;r>=0;--r)a[b+r]=s.h(d,e+r)
else for(r=0;r<t;++r)a[b+r]=s.h(d,e+r)},
bT:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.c(P.a5(a))}return!1},
d0:function(a,b){if(!!a.immutable$list)H.F(P.p("sort"))
H.mo(a,P.mV())},
aE:function(a){return this.d0(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.B(a[t],b))return!0
return!1},
k:function(a){return P.eA(a,"[","]")},
gv:function(a){return new J.dB(a,a.length,0,null,[H.an(a,0)])},
gu:function(a){return H.aB(a)},
gj:function(a){return a.length},
sj:function(a,b){if(!!a.fixed$length)H.F(P.p("set length"))
if(b<0)throw H.c(P.Z(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b2(a,b))
if(b>=a.length||b<0)throw H.c(H.b2(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.F(P.p("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b2(a,b))
if(b>=a.length||b<0)throw H.c(H.b2(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isk:1,
$ish:1}
J.iU.prototype={}
J.dB.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.c(H.O(t))
r=this.c
if(r>=s){this.sbx(null)
return!1}this.sbx(t[r]);++this.c
return!0},
sbx:function(a){this.d=a}}
J.aR.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.c(H.M(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaw(b)
if(this.gaw(a)===t)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw:function(a){return a===0?1/a<0:a<0},
eg:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.c(P.p(""+a+".ceil()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.p(""+a+".round()"))},
eh:function(a,b,c){if(this.R(b,c)>0)throw H.c(H.M(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
f2:function(a,b){var t
if(b>20)throw H.c(P.Z(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaw(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a-b},
cM:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a*b},
aG:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bP(a,b)},
J:function(a,b){return(a|0)===a?a/b|0:this.bP(a,b)},
bP:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.c(P.p("Result of truncating division is "+H.e(t)+": "+H.e(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=this.e2(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
e2:function(a,b){return b>31?0:a>>>b},
cL:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a&b)>>>0},
d8:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return(a^b)>>>0},
aC:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a<b},
aB:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>b},
b9:function(a,b){if(typeof b!=="number")throw H.c(H.M(b))
return a>=b},
gA:function(a){return C.av},
$isD:1,
$asD:function(){return[P.a1]},
$isR:1,
$isa1:1}
J.c8.prototype={
gA:function(a){return C.au},
$isx:1}
J.c7.prototype={
gA:function(a){return C.at}}
J.aw.prototype={
aL:function(a,b){if(b>=a.length)throw H.c(H.b2(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.c(P.jI(b,null,null))
return a+b},
d1:function(a,b,c){var t
if(c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bl:function(a,b){return this.d1(a,b,0)},
bo:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.fj(b,null,null))
if(b>c)throw H.c(P.fj(b,null,null))
if(c>a.length)throw H.c(P.fj(c,null,null))
return a.substring(b,c)},
d2:function(a,b){return this.bo(a,b,null)},
f1:function(a){return a.toLowerCase()},
ej:function(a,b,c){if(c>a.length)throw H.c(P.Z(c,0,a.length,null,null))
return H.ng(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.c(H.M(b))
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
h:function(a,b){if(b>=a.length||!1)throw H.c(H.b2(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isD:1,
$asD:function(){return[P.n]},
$isn:1}
H.k.prototype={}
H.aS.prototype={
gv:function(a){return new H.ca(this,this.gj(this),0,null,[H.S(this,"aS",0)])},
az:function(a,b){return this.d4(0,b)},
b8:function(a,b){var t,s
t=H.A([],[H.S(this,"aS",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f0:function(a){return this.b8(a,!0)}}
H.fL.prototype={
dn:function(a,b,c,d){var t=this.b
if(t<0)H.F(P.Z(t,0,null,"start",null))},
gdL:function(){var t=J.ag(this.a)
return t},
ge3:function(){var t,s
t=J.ag(this.a)
s=this.b
if(s>t)return t
return s},
gj:function(a){var t,s
t=J.ag(this.a)
s=this.b
if(s>=t)return 0
return t-s},
t:function(a,b){var t=this.ge3()+b
if(b<0||C.b.b9(t,this.gdL()))throw H.c(P.y(b,this,"index",null,null))
return J.jw(this.a,t)},
b8:function(a,b){var t,s,r,q,p,o,n,m
t=this.b
s=this.a
r=J.N(s)
q=r.gj(s)
p=q-t
if(p<0)p=0
o=new Array(p)
o.fixed$length=Array
n=H.A(o,this.$ti)
for(m=0;m<p;++m){n[m]=r.t(s,t+m)
if(r.gj(s)<q)throw H.c(P.a5(this))}return n}}
H.ca.prototype={
gq:function(a){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.N(t)
r=s.gj(t)
if(this.b!==r)throw H.c(P.a5(t))
q=this.c
if(q>=r){this.sab(null)
return!1}this.sab(s.t(t,q));++this.c
return!0},
sab:function(a){this.d=a}}
H.cc.prototype={
gv:function(a){return new H.eO(null,J.aK(this.a),this.b,this.$ti)},
gj:function(a){return J.ag(this.a)},
$asP:function(a,b){return[b]}}
H.dZ.prototype={$isk:1,
$ask:function(a,b){return[b]}}
H.eO.prototype={
p:function(){var t=this.b
if(t.p()){this.sab(this.c.$1(t.gq(t)))
return!0}this.sab(null)
return!1},
gq:function(a){return this.a},
sab:function(a){this.a=a},
$asc6:function(a,b){return[b]}}
H.bf.prototype={
gj:function(a){return J.ag(this.a)},
t:function(a,b){return this.b.$1(J.jw(this.a,b))},
$ask:function(a,b){return[b]},
$asaS:function(a,b){return[b]},
$asP:function(a,b){return[b]}}
H.cG.prototype={
gv:function(a){return new H.hb(J.aK(this.a),this.b,this.$ti)}}
H.hb.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq(t)))return!0
return!1},
gq:function(a){var t=this.a
return t.gq(t)}}
H.aQ.prototype={}
H.iC.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iD.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hM.prototype={
seK:function(a){this.z=a},
seN:function(a){this.ch=a}}
H.aY.prototype={
dz:function(){var t,s
t=this.e
s=t.a
this.c.l(0,s)
this.dE(s,t)},
bS:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b_()},
eV:function(a){var t,s,r,q,p
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
if(q===r.c)r.bJ();++r.d}this.y=!1}this.b_()},
e7:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eU:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.F(P.p("removeRange"))
P.j4(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cX:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eE:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j0(null,null)
this.cx=t}t.S(0,new H.hF(a,c))},
eD:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ax()
return}H.b(b===1)
t=this.cx
if(t==null){t=P.j0(null,null)
this.cx=t}t.S(0,this.geL())},
eF:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.a2(a)
if(b!=null)P.a2(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b7(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bt(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.H(0,s)},
af:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.I(o)
p=H.am(o)
this.eF(q,p)
if(this.db){this.ax()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mR(r)
u.globalState.d=H.jn(t,"$isaY")
if(t!=null)$=t.geJ()
if(this.cx!=null)for(;n=this.cx,!n.gaj(n);)this.cx.ck().$0()}return s},
cg:function(a){return this.b.h(0,a)},
dE:function(a,b){var t=this.b
if(t.E(0,a))throw H.c(P.c0("Registry: ports must be registered only once."))
t.i(0,a,b)},
b_:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ax()},
ax:function(){var t,s,r
t=this.cx
if(t!=null)t.U(0)
for(t=this.b,s=t.gcH(t),s=s.gv(s);s.p();)s.gq(s).dF()
t.U(0)
this.c.U(0)
u.globalState.z.al(0,this.a)
this.dx.U(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
geJ:function(){return this.d},
gek:function(){return this.e}}
H.hF.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.ho.prototype={
eq:function(){var t=this.a
if(t.b===t.c)return
return t.ck()},
cn:function(){var t,s,r
t=this.eq()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.E(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaj(s)}else s=!1
else s=!1
else s=!1
if(s)H.F(P.c0("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaj(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.az(["command","close"])
r=new H.a0(!0,P.aZ(null,P.x)).K(r)
s.toString
self.postMessage(r)}return!1}t.eR()
return!0},
bN:function(){if(self.window!=null)new H.hp(this).$0()
else for(;this.cn(););},
am:function(){var t,s,r,q,p
if(!u.globalState.x)this.bN()
else try{this.bN()}catch(r){t=H.I(r)
s=H.am(r)
q=u.globalState.Q
p=P.az(["command","error","msg",H.e(t)+"\n"+H.e(s)])
p=new H.a0(!0,P.aZ(null,P.x)).K(p)
q.toString
self.postMessage(p)}}}
H.hp.prototype={
$0:function(){if(!this.a.cn())return
P.mr(C.z,this)},
$S:function(){return{func:1,v:true}}}
H.aI.prototype={
eR:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.af(this.b)}}
H.hL.prototype={}
H.ey.prototype={
$0:function(){H.m4(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.ez.prototype={
$0:function(){var t,s
t=this.a
t.x=!0
if(!this.b)this.c.$1(this.d)
else{s=this.c
if(H.b3(s,{func:1,args:[P.H,P.H]}))s.$2(this.e,this.d)
else if(H.b3(s,{func:1,args:[P.H]}))s.$1(this.e)
else s.$0()}t.b_()},
$S:function(){return{func:1,v:true}}}
H.hj.prototype={}
H.b_.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mF(b)
if(t.gek()===s){s=J.N(r)
switch(s.h(r,0)){case"pause":t.bS(s.h(r,1),s.h(r,2))
break
case"resume":t.eV(s.h(r,1))
break
case"add-ondone":t.e7(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eU(s.h(r,1))
break
case"set-errors-fatal":t.cX(s.h(r,1),s.h(r,2))
break
case"ping":t.eE(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eD(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.al(0,s)
break}return}u.globalState.f.a.S(0,new H.aI(t,new H.hN(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b_){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hN.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dC(0,this.b)},
$S:function(){return{func:1}}}
H.bE.prototype={
H:function(a,b){var t,s,r
t=P.az(["command","message","port",this,"msg",b])
s=new H.a0(!0,P.aZ(null,P.x)).K(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bE){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.d8((this.b<<16^this.a<<8)>>>0,this.c)}}
H.cr.prototype={
dF:function(){this.c=!0
this.b=null},
dC:function(a,b){if(this.c)return
this.b.$1(b)},
$ismi:1}
H.fU.prototype={
dq:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.aI(s,new H.fV(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){H.ib()
this.c=self.setTimeout(H.bI(new H.fW(this,b),0),a)}else{H.b(a>0)
throw H.c(P.p("Timer greater than 0."))}}}
H.fV.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fW.prototype={
$0:function(){var t=this.a
t.c=null
H.is()
t.d=1
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aq.prototype={
gu:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.J(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aq){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.a0.prototype={
K:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.t(a)
if(!!t.$isbh)return["buffer",a]
if(!!t.$isaV)return["typed",a]
if(!!t.$iso)return this.cT(a)
if(!!t.$ism1){r=this.gcQ()
q=t.gD(a)
q=H.j1(q,r,H.S(q,"P",0),null)
q=P.k7(q,!0,H.S(q,"P",0))
t=t.gcH(a)
t=H.j1(t,r,H.S(t,"P",0),null)
return["map",q,P.k7(t,!0,H.S(t,"P",0))]}if(!!t.$isk5)return this.cU(a)
if(!!t.$isa)this.cF(a)
if(!!t.$ismi)this.an(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb_)return this.cV(a)
if(!!t.$isbE)return this.cW(a)
if(!!t.$isas){p=a.$static_name
if(p==null)this.an(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaq)return["capability",a.a]
if(!(a instanceof P.C))this.cF(a)
return["dart",u.classIdExtractor(a),this.cS(u.classFieldsExtractor(a))]},
an:function(a,b){throw H.c(P.p((b==null?"Can't transmit:":b)+" "+H.e(a)))},
cF:function(a){return this.an(a,null)},
cT:function(a){var t
H.b(typeof a!=="string")
t=this.cR(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.an(a,"Can't serialize indexable: ")},
cR:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.K(a[s])
return t},
cS:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.K(a[t]))
return a},
cU:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.an(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.K(a[t[r]])
return["js-object",t,s]},
cW:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cV:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aH.prototype={
V:function(a){var t,s,r,q
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.c(P.jH("Bad serialized message: "+H.e(a)))
switch(C.a.geA(a)){case"ref":H.b(J.B(a[0],"ref"))
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
return J.av(H.A(this.ae(t),[null]))
case"extendable":H.b(J.B(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.A(this.ae(t),[null])
case"mutable":H.b(J.B(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.ae(t)
case"const":H.b(J.B(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
return J.av(H.A(this.ae(t),[null]))
case"map":return this.eu(a)
case"sendport":return this.ev(a)
case"raw sendport":H.b(J.B(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.es(a)
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
this.ae(r)
return u.initializeEmptyInstance(s,q,r)
default:throw H.c("couldn't deserialize: "+H.e(a))}},
ae:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.V(a[t]))
return a},
eu:function(a){var t,s,r,q,p
H.b(J.B(a[0],"map"))
t=a[1]
s=a[2]
r=P.U()
C.a.l(this.b,r)
t=J.lw(t,this.ger()).f0(0)
for(q=J.N(s),p=0;p<t.length;++p)r.i(0,t[p],this.V(q.h(s,p)))
return r},
ev:function(a){var t,s,r,q,p,o,n
H.b(J.B(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cg(r)
if(o==null)return
n=new H.b_(o,s)}else n=new H.bE(t,r,s)
C.a.l(this.b,n)
return n},
es:function(a){var t,s,r,q,p,o
H.b(J.B(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.N(t),p=J.N(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.V(p.h(s,o))
return r}}
H.fm.prototype={}
H.h_.prototype={
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
H.f4.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.e(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eF.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.e(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.e(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.e(this.a)+")"}}
H.h4.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iE.prototype={
$1:function(a){if(!!J.t(a).$isaP)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(a){return{func:1,args:[,]}}}
H.d6.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t},
$isaW:1}
H.im.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.io.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.ip.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iq.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.ir.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.as.prototype={
k:function(a){return"Closure '"+H.bj(this).trim()+"'"},
$isiT:1,
gf5:function(){return this},
$D:null}
H.fP.prototype={}
H.fB.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.b8.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.b8))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aB(this.a)
else s=typeof t!=="object"?J.b6(t):H.aB(t)
return(s^H.aB(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.bj(t)+"'")}}
H.h1.prototype={
k:function(a){return this.a}}
H.dF.prototype={
k:function(a){return this.a}}
H.fq.prototype={
k:function(a){return"RuntimeError: "+H.e(this.a)}}
H.hd.prototype={
k:function(a){return C.i.a5("Assertion failed: ",P.c_(this.a))}}
H.aj.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.b6(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aj){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.a7.prototype={
gj:function(a){return this.a},
gaj:function(a){return this.a===0},
gD:function(a){return new H.eI(this,[H.an(this,0)])},
gcH:function(a){return H.j1(this.gD(this),new H.eE(this),H.an(this,0),H.an(this,1))},
E:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bG(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bG(s,b)}else return this.eG(b)},
eG:function(a){var t=this.d
if(t==null)return!1
return this.ai(this.as(t,this.ah(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ac(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ac(r,b)
return s==null?null:s.b}else return this.eH(b)},
eH:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.as(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aT()
this.b=t}this.bz(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aT()
this.c=s}this.bz(s,b,c)}else{r=this.d
if(r==null){r=this.aT()
this.d=r}q=this.ah(b)
p=this.as(r,q)
if(p==null)this.aW(r,q,[this.aU(b,c)])
else{o=this.ai(p,b)
if(o>=0)p[o].b=c
else p.push(this.aU(b,c))}}},
al:function(a,b){if(typeof b==="string")return this.bM(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bM(this.c,b)
else return this.eI(b)},
eI:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.as(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bQ(q)
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
if(s!==this.r)throw H.c(P.a5(this))
t=t.c}},
bz:function(a,b,c){var t=this.ac(a,b)
if(t==null)this.aW(a,b,this.aU(b,c))
else t.b=c},
bM:function(a,b){var t
if(a==null)return
t=this.ac(a,b)
if(t==null)return
this.bQ(t)
this.bH(a,b)
return t.b},
aS:function(){this.r=this.r+1&67108863},
aU:function(a,b){var t,s
t=new H.eH(a,b,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.aS()
return t},
bQ:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.aS()},
ah:function(a){return J.b6(a)&0x3ffffff},
ai:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1},
k:function(a){return P.k8(this)},
ac:function(a,b){return a[b]},
as:function(a,b){return a[b]},
aW:function(a,b,c){H.b(c!=null)
a[b]=c},
bH:function(a,b){delete a[b]},
bG:function(a,b){return this.ac(a,b)!=null},
aT:function(){var t=Object.create(null)
this.aW(t,"<non-identifier-key>",t)
this.bH(t,"<non-identifier-key>")
return t},
$ism1:1}
H.eE.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(a){return{func:1,args:[,]}}}
H.eH.prototype={}
H.eI.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eJ(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eJ.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.a5(t))
else{t=this.c
if(t==null){this.sby(null)
return!1}else{this.sby(t.a)
this.c=this.c.c
return!0}}},
sby:function(a){this.d=a}}
H.ii.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[,]}}}
H.ij.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(a,b){return{func:1,args:[,P.n]}}}
H.ik.prototype={
$1:function(a){return this.a(a)},
$S:function(a){return{func:1,args:[P.n]}}}
H.bh.prototype={
gA:function(a){return C.ae},
$isbh:1}
H.aV.prototype={
dQ:function(a,b,c,d){var t=P.Z(b,0,c,d,null)
throw H.c(t)},
bC:function(a,b,c,d){if(b>>>0!==b||b>c)this.dQ(a,b,c,d)},
$isaV:1}
H.eV.prototype={
gA:function(a){return C.af}}
H.cg.prototype={
gj:function(a){return a.length},
e1:function(a,b,c,d,e){var t,s,r
t=a.length
this.bC(a,b,t,"start")
this.bC(a,c,t,"end")
if(b>c)throw H.c(P.Z(b,0,c,null,null))
s=c-b
r=d.length
if(r-e<s)throw H.c(P.fA("Not enough elements"))
if(e!==0||r!==s)d=d.subarray(e,e+s)
a.set(d,b)},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.ch.prototype={
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
F:function(a,b,c,d,e){this.e1(a,b,c,d,e)
return},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)},
$isk:1,
$ask:function(){return[P.R]},
$asaQ:function(){return[P.R]},
$asl:function(){return[P.R]},
$ish:1,
$ash:function(){return[P.R]}}
H.ci.prototype={
i:function(a,b,c){H.ad(b,a,a.length)
a[b]=c},
F:function(a,b,c,d,e){this.d6(a,b,c,d,e)},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)},
$isk:1,
$ask:function(){return[P.x]},
$asaQ:function(){return[P.x]},
$asl:function(){return[P.x]},
$ish:1,
$ash:function(){return[P.x]}}
H.cf.prototype={
gA:function(a){return C.ag},
$isen:1}
H.eW.prototype={
gA:function(a){return C.ah}}
H.eX.prototype={
gA:function(a){return C.ai},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.eY.prototype={
gA:function(a){return C.aj},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isk1:1}
H.eZ.prototype={
gA:function(a){return C.ak},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f_.prototype={
gA:function(a){return C.ao},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskt:1}
H.f0.prototype={
gA:function(a){return C.ap},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$isku:1}
H.cj.prototype={
gA:function(a){return C.aq},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]}}
H.f1.prototype={
gA:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){H.ad(b,a,a.length)
return a[b]},
$iskv:1}
H.bv.prototype={}
H.bw.prototype={}
H.bx.prototype={}
H.by.prototype={}
P.hf.prototype={
$1:function(a){var t,s
H.is()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(a){return{func:1,args:[,]}}}
P.he.prototype={
$1:function(a){var t,s
t=this.a
H.b(t.a==null)
H.ib()
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(a){return{func:1,args:[{func:1,v:true}]}}}
P.hg.prototype={
$0:function(){H.is()
this.a.$0()},
$S:function(){return{func:1}}}
P.hh.prototype={
$0:function(){H.is()
this.a.$0()},
$S:function(){return{func:1}}}
P.iQ.prototype={}
P.hk.prototype={}
P.hZ.prototype={
ei:function(a,b){var t=this.a
if(t.a!==0)throw H.c(P.fA("Future already completed"))
t.aO(b)}}
P.cP.prototype={
eO:function(a){if(this.c!==6)return!0
H.b(!0)
return this.b.b.b6(this.d,a.a)},
eC:function(a){var t,s
t=(this.c&2)!==0
if(t){H.b(t)
t=this.e!=null}else t=!1
H.b(t)
s=this.e
t=this.b.b
if(H.b3(s,{func:1,args:[P.C,P.aW]}))return t.eX(s,a.a,a.b)
else return t.b6(s,a.a)}}
P.ac.prototype={
cs:function(a,b){var t,s,r
t=$.z
if(t!==C.f){t.toString
if(b!=null)b=P.mJ(b,t)}s=new P.ac(0,t,null,[null])
r=b==null?1:3
this.bA(new P.cP(null,s,r,a,b,[H.an(this,0),null]))
return s},
cr:function(a){return this.cs(a,null)},
aK:function(a){H.b(this.a<4)
H.b(a.a>=4)
this.a=a.a
this.c=a.c},
bA:function(a){var t
H.b(a.a==null)
t=this.a
if(t<=1){a.a=H.jn(this.c,"$iscP")
this.c=a}else{if(t===2){H.b(!0)
t=this.c
if(t.a<4){t.bA(a)
return}this.aK(t)}H.b(this.a>=4)
t=this.b
t.toString
P.i6(null,null,t,new P.hu(this,a))}},
bL:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.b(!0)
s=this.c
if(s.a<4){s.bL(a)
return}this.aK(s)}H.b(this.a>=4)
t.a=this.at(a)
s=this.b
s.toString
P.i6(null,null,s,new P.hy(t,this))}},
aV:function(){H.b(this.a<4)
var t=this.c
this.c=null
return this.at(t)},
at:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aO:function(a){var t,s,r
H.b(this.a<4)
t=this.$ti
s=H.dt(a,"$iseq",t,"$aseq")
if(s){t=H.dt(a,"$isac",t,null)
if(t)P.kz(a,this)
else P.mA(a,this)}else{r=this.aV()
H.b(this.a<4)
this.a=4
this.c=a
P.br(this,r)}},
ap:function(a,b){var t
H.b(this.a<4)
t=this.aV()
H.b(this.a<4)
this.a=8
this.c=new P.aL(a,b)
P.br(this,t)},
dH:function(a){return this.ap(a,null)},
$iseq:1,
gaY:function(){return this.a},
gdZ:function(){return this.c}}
P.hu.prototype={
$0:function(){P.br(this.a,this.b)},
$S:function(){return{func:1}}}
P.hy.prototype={
$0:function(){P.br(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hv.prototype={
$1:function(a){var t=this.a
H.b(t.a===1)
H.b(t.a===1)
t.a=0
t.aO(a)},
$S:function(a){return{func:1,args:[,]}}}
P.hw.prototype={
$2:function(a,b){var t=this.a
H.b(t.a===1)
t.ap(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(a,b){return{func:1,args:[,],opt:[,]}}}
P.hx.prototype={
$0:function(){this.a.ap(this.b,this.c)},
$S:function(){return{func:1}}}
P.hB.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.c
p=q.c
H.b((p&1)===0)
o=(p&2)===0
H.b(o)
t=null
try{H.b(o)
H.b(p===8)
t=q.b.b.cm(q.d)}catch(n){s=H.I(n)
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
return}if(!!J.t(t).$iseq){if(t instanceof P.ac&&t.gaY()>=4){if(t.gaY()===8){q=t
H.b(q.gaY()===8)
p=this.b
p.b=q.gdZ()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cr(new P.hC(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hC.prototype={
$1:function(a){return this.a},
$S:function(a){return{func:1,args:[,]}}}
P.hA.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.b((r.c&1)!==0)
this.a.b=r.b.b.b6(r.d,this.c)}catch(q){t=H.I(q)
s=H.am(q)
r=this.a
r.b=new P.aL(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hz.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.b(q.a===8)
t=q.c
q=this.c
if(q.eO(t)){H.b((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eC(t)
p.a=!1}}catch(o){s=H.I(o)
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
P.cH.prototype={}
P.fG.prototype={
gj:function(a){var t,s
t={}
s=new P.ac(0,$.z,null,[P.x])
t.a=0
this.eM(new P.fI(t),!0,new P.fJ(t,s),s.gdG())
return s}}
P.fI.prototype={
$1:function(a){++this.a.a},
$S:function(a){return{func:1,args:[,]}}}
P.fJ.prototype={
$0:function(){this.b.aO(this.a.a)},
$S:function(){return{func:1}}}
P.fH.prototype={}
P.j5.prototype={}
P.aL.prototype={
k:function(a){return H.e(this.a)},
$isaP:1}
P.i2.prototype={}
P.i5.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cn()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.c(t)
r=H.c(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.hP.prototype={
eY:function(a){var t,s,r
try{if(C.f===$.z){a.$0()
return}P.kF(null,null,this,a)}catch(r){t=H.I(r)
s=H.am(r)
P.i4(null,null,this,t,s)}},
eZ:function(a,b){var t,s,r
try{if(C.f===$.z){a.$1(b)
return}P.kG(null,null,this,a,b)}catch(r){t=H.I(r)
s=H.am(r)
P.i4(null,null,this,t,s)}},
ed:function(a){return new P.hR(this,a)},
b0:function(a){return new P.hQ(this,a)},
ee:function(a){return new P.hS(this,a)},
h:function(a,b){return},
cm:function(a){if($.z===C.f)return a.$0()
return P.kF(null,null,this,a)},
b6:function(a,b){if($.z===C.f)return a.$1(b)
return P.kG(null,null,this,a,b)},
eX:function(a,b,c){if($.z===C.f)return a.$2(b,c)
return P.mK(null,null,this,a,b,c)}}
P.hR.prototype={
$0:function(){return this.a.cm(this.b)},
$S:function(){return{func:1}}}
P.hQ.prototype={
$0:function(){return this.a.eY(this.b)},
$S:function(){return{func:1}}}
P.hS.prototype={
$1:function(a){return this.a.eZ(this.b,a)},
$S:function(a){return{func:1,args:[,]}}}
P.hJ.prototype={
ah:function(a){return H.na(a)&0x3ffffff},
ai:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hH.prototype={
gv:function(a){var t=new P.bt(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dI(b)},
dI:function(a){var t=this.d
if(t==null)return!1
return this.ar(t[this.aq(a)],a)>=0},
cg:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dT(a)},
dT:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.aq(a)]
r=this.ar(s,a)
if(r<0)return
return J.b5(s,r).gdK()},
l:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){t=P.jf()
this.b=t}return this.bD(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=P.jf()
this.c=s}return this.bD(s,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.jf()
this.d=t}s=this.aq(b)
r=t[s]
if(r==null){q=[this.aN(b)]
H.b(q!=null)
t[s]=q}else{if(this.ar(r,b)>=0)return!1
r.push(this.aN(b))}return!0},
al:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bE(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bE(this.c,b)
else return this.dU(0,b)},
dU:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.aq(b)]
r=this.ar(s,b)
if(r<0)return!1
this.bF(s.splice(r,1)[0])
return!0},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.aM()}},
bD:function(a,b){var t
if(a[b]!=null)return!1
t=this.aN(b)
H.b(!0)
a[b]=t
return!0},
bE:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bF(t)
delete a[b]
return!0},
aM:function(){this.r=this.r+1&67108863},
aN:function(a){var t,s
t=new P.hI(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.aM()
return t},
bF:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.b(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.b(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.aM()},
aq:function(a){return J.b6(a)&0x3ffffff},
ar:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.B(a[s].a,b))return s
return-1}}
P.hI.prototype={
gdK:function(){return this.a}}
P.bt.prototype={
gq:function(a){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.c(P.a5(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.hE.prototype={}
P.iZ.prototype={$isk:1}
P.c9.prototype={$isk:1,$ish:1}
P.l.prototype={
gv:function(a){return new H.ca(a,this.gj(a),0,null,[H.S(a,"l",0)])},
t:function(a,b){return this.h(a,b)},
ci:function(a,b){return new H.bf(a,b,[H.S(a,"l",0),null])},
eB:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.c(P.a5(a))}return s},
F:function(a,b,c,d,e){var t,s,r,q,p
P.j4(b,c,this.gj(a),null,null,null)
t=c-b
if(t===0)return
s=H.dt(d,"$ish",[H.S(a,"l",0)],"$ash")
if(s){r=e
q=d}else{q=H.mp(d,e,null,H.S(d,"l",0)).b8(0,!1)
r=0}if(r+t>q.length)throw H.c(H.k4())
if(r<b)for(p=t-1;p>=0;--p)this.i(a,b+p,q[r+p])
else for(p=0;p<t;++p)this.i(a,b+p,q[r+p])},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)},
bj:function(a,b,c){this.a8(a,b,b+c.length,c)},
k:function(a){return P.eA(a,"[","]")}}
P.cb.prototype={}
P.eN.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.e(a)
t.a=s+": "
t.a+=H.e(b)},
$S:function(a,b){return{func:1,args:[,,]}}}
P.aU.prototype={
ag:function(a,b){var t,s
for(t=J.aK(this.gD(a));t.p();){s=t.gq(t)
b.$2(s,this.h(a,s))}},
gj:function(a){return J.ag(this.gD(a))},
k:function(a){return P.k8(a)}}
P.eK.prototype={
dh:function(a,b){var t
H.b(!0)
t=new Array(8)
t.fixed$length=Array
this.sbO(H.A(t,[b]))},
gv:function(a){return new P.hK(this,this.c,this.d,this.b,null,this.$ti)},
gaj:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=this.gj(this)
if(0>b||b>=t)H.F(P.y(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
U:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eA(this,"{","}")},
ck:function(){var t,s,r
t=this.b
if(t===this.c)throw H.c(H.eB());++this.d
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
s=H.A(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.F(s,0,q,t,r)
C.a.F(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbO(s)},
sbO:function(a){this.a=a}}
P.hK.prototype={
gq:function(a){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.F(P.a5(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.ft.prototype={
M:function(a,b){var t
for(t=J.aK(b);t.p();)this.l(0,t.gq(t))},
k:function(a){return P.eA(this,"{","}")},
$isk:1}
P.fs.prototype={}
P.bu.prototype={}
P.af.prototype={}
P.D.prototype={}
P.b9.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.b9))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aX(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.lS(H.mh(this))
s=P.bU(H.mf(this))
r=P.bU(H.mb(this))
q=P.bU(H.mc(this))
p=P.bU(H.me(this))
o=P.bU(H.mg(this))
n=P.lT(H.md(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isD:1,
$asD:function(){return[P.b9]}}
P.R.prototype={}
P.at.prototype={
aC:function(a,b){return C.b.aC(this.a,b.gdJ())},
aB:function(a,b){return C.b.aB(this.a,b.gdJ())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.at))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.dY()
s=this.a
if(s<0)return"-"+new P.at(0-s).k(0)
r=t.$1(C.b.J(s,6e7)%60)
q=t.$1(C.b.J(s,1e6)%60)
p=new P.dX().$1(s%1e6)
return""+C.b.J(s,36e8)+":"+H.e(r)+":"+H.e(q)+"."+H.e(p)},
$isD:1,
$asD:function(){return[P.at]}}
P.dX.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.dY.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(a){return{func:1,ret:P.n,args:[P.x]}}}
P.aP.prototype={}
P.bP.prototype={
k:function(a){return"Assertion failed"}}
P.cn.prototype={
k:function(a){return"Throw of null."}}
P.a4.prototype={
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
o=P.c_(this.b)
return q+p+": "+H.e(o)}}
P.cq.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){var t,s,r
H.b(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.e(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.e(t)
else if(r>t)s=": Not in range "+H.e(t)+".."+H.e(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.e(t)}return s}}
P.ex.prototype={
gaQ:function(){return"RangeError"},
gaP:function(){H.b(this.a)
if(J.l4(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.e(t)},
gj:function(a){return this.f}}
P.h5.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.h3.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aX.prototype={
k:function(a){return"Bad state: "+this.a}}
P.dH.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.e(P.c_(t))+"."}}
P.cx.prototype={
k:function(a){return"Stack Overflow"},
$isaP:1}
P.dQ.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.iS.prototype={}
P.ht.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.e(t)}}
P.e0.prototype={
h:function(a,b){var t,s
t=this.a
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.F(P.jI(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kb(b,"expando$values")
return s==null?null:H.kb(s,t)},
k:function(a){return"Expando:"+H.e(this.b)}}
P.x.prototype={}
P.P.prototype={
az:function(a,b){return new H.cG(this,b,[H.S(this,"P",0)])},
gj:function(a){var t,s
H.b(!this.$isk)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
gZ:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.c(H.eB())
s=t.gq(t)
if(t.p())throw H.c(H.m8())
return s},
t:function(a,b){var t,s,r
if(b<0)H.F(P.Z(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq(t)
if(b===s)return r;++s}throw H.c(P.y(b,this,"index",null,s))},
k:function(a){return P.m7(this,"(",")")}}
P.c6.prototype={}
P.h.prototype={$isk:1}
P.aT.prototype={}
P.H.prototype={
gu:function(a){return P.C.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.a1.prototype={$isD:1,
$asD:function(){return[P.a1]}}
P.C.prototype={constructor:P.C,$isC:1,
w:function(a,b){return this===b},
gu:function(a){return H.aB(this)},
k:function(a){return"Instance of '"+H.bj(this)+"'"},
gA:function(a){return new H.aj(H.ie(this),null)},
toString:function(){return this.k(this)}}
P.aW.prototype={}
P.n.prototype={$isD:1,
$asD:function(){return[P.n]}}
P.bl.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
P.j8.prototype={}
W.i.prototype={}
W.bO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.dy.prototype={
gj:function(a){return a.length}}
W.dz.prototype={
k:function(a){return String(a)}}
W.dA.prototype={
k:function(a){return String(a)}}
W.ap.prototype={$isap:1}
W.bQ.prototype={
ba:function(a,b,c){if(c!=null)return this.dN(a,b,P.mU(c,null))
return this.dO(a,b)},
cN:function(a,b){return this.ba(a,b,null)},
dN:function(a,b,c){return a.getContext(b,c)},
dO:function(a,b){return a.getContext(b)}}
W.bR.prototype={
au:function(a,b,c){return a.addColorStop(b,c)}}
W.bS.prototype={
c3:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
ez:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aA:function(a){return P.i8(a.getContextAttributes())}}
W.ar.prototype={
gj:function(a){return a.length}}
W.dI.prototype={
gj:function(a){return a.length}}
W.dJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.dK.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.dL.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.aN.prototype={
bB:function(a,b){var t,s
t=$.$get$jR()
s=t[b]
if(typeof s==="string")return s
s=this.e4(a,b)
t[b]=s
return s},
e4:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lU()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.dM.prototype={}
W.W.prototype={}
W.aO.prototype={}
W.dN.prototype={
gj:function(a){return a.length}}
W.dO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.dP.prototype={
gj:function(a){return a.length}}
W.dR.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.dS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.bV.prototype={}
W.ba.prototype={
e8:function(a,b){return a.adoptNode(b)},
cO:function(a,b){return a.getElementById(b)},
eS:function(a,b){return a.querySelector(b)}}
W.dT.prototype={
k:function(a){return String(a)}}
W.bW.prototype={
en:function(a,b){return a.createHTMLDocument(b)}}
W.dU.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.bX.prototype={
gay:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.bY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[P.Q]},
$isk:1,
$ask:function(){return[P.Q]},
$isr:1,
$asr:function(){return[P.Q]},
$asl:function(){return[P.Q]},
$ish:1,
$ash:function(){return[P.Q]},
$asm:function(){return[P.Q]}}
W.bZ.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.ga4(a))+" x "+H.e(this.ga1(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isQ)return!1
return a.left===t.gce(b)&&a.top===t.gct(b)&&this.ga4(a)===t.ga4(b)&&this.ga1(a)===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga1(a)
return W.kD(W.aJ(W.aJ(W.aJ(W.aJ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
gce:function(a){return a.left},
gct:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isQ:1,
$asQ:function(){}}
W.dV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
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
W.dW.prototype={
gj:function(a){return a.length}}
W.X.prototype={
geb:function(a){return new W.hn(a)},
k:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jZ
if(t==null){t=H.A([],[W.cl])
s=new W.cm(t)
C.a.l(t,W.kA(null))
C.a.l(t,W.kE())
$.jZ=s
d=s}else d=t
t=$.jY
if(t==null){t=new W.dg(d)
$.jY=t
c=t}else{t.a=d
c=t}}if($.ah==null){t=document
s=t.implementation
s=(s&&C.M).en(s,"")
$.ah=s
$.iR=s.createRange()
s=$.ah
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.ah.head;(t&&C.N).P(t,r)}t=$.ah
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jn(s,"$isap")}t=$.ah
if(!!this.$isap)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.ah.body;(t&&C.o).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.X,a.tagName)){t=$.iR;(t&&C.F).cP(t,q)
t=$.iR
p=(t&&C.F).el(t,b)}else{q.innerHTML=b
p=$.ah.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.ah.body
if(q==null?t!=null:q!==t)J.jA(q)
c.bi(p)
C.r.e8(document,p)
return p},
em:function(a,b,c){return this.N(a,b,c,null)},
cZ:function(a,b,c,d){a.textContent=null
this.P(a,this.N(a,b,c,d))},
cY:function(a,b){return this.cZ(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dV:function(a,b){return a.removeAttribute(b)},
$isX:1,
gf_:function(a){return a.tagName}}
W.e_.prototype={
$1:function(a){return!!J.t(a).$isX},
$S:function(a){return{func:1,args:[,]}}}
W.f.prototype={$isf:1}
W.d.prototype={
dD:function(a,b,c,d){return a.addEventListener(b,H.bI(c,1),!1)}}
W.ek.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c1]},
$isk:1,
$ask:function(){return[W.c1]},
$isr:1,
$asr:function(){return[W.c1]},
$asl:function(){return[W.c1]},
$ish:1,
$ash:function(){return[W.c1]},
$asm:function(){return[W.c1]}}
W.el.prototype={
gj:function(a){return a.length}}
W.ep.prototype={
gj:function(a){return a.length}}
W.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.c4.prototype={}
W.et.prototype={
gj:function(a){return a.length}}
W.bc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asm:function(){return[W.q]}}
W.c5.prototype={}
W.eu.prototype={
H:function(a,b){return a.send(b)}}
W.bd.prototype={}
W.ay.prototype={$isay:1}
W.eL.prototype={
k:function(a){return String(a)}}
W.eM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
W.eQ.prototype={
gj:function(a){return a.length}}
W.eS.prototype={
f6:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bg.prototype={}
W.eT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.ce]},
$isk:1,
$ask:function(){return[W.ce]},
$isr:1,
$asr:function(){return[W.ce]},
$asl:function(){return[W.ce]},
$ish:1,
$ash:function(){return[W.ce]},
$asm:function(){return[W.ce]}}
W.G.prototype={$isG:1}
W.K.prototype={
gZ:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.c(P.fA("No elements"))
if(s>1)throw H.c(P.fA("More than one element"))
return t.firstChild},
M:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l6(t,c,C.D.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.c2(t,t.length,-1,null,[H.S(t,"m",0)])},
F:function(a,b,c,d,e){throw H.c(P.p("Cannot setRange on Node list"))},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$ask:function(){return[W.q]},
$asc9:function(){return[W.q]},
$asl:function(){return[W.q]},
$ash:function(){return[W.q]},
$asbu:function(){return[W.q]}}
W.q.prototype={
eT:function(a){var t=a.parentNode
if(t!=null)J.iF(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d3(a):t},
P:function(a,b){return a.appendChild(b)},
dW:function(a,b){return a.removeChild(b)},
dX:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
gb4:function(a){return a.previousSibling}}
W.ck.prototype={
b5:function(a){return a.previousNode()}}
W.bi.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asm:function(){return[W.q]}}
W.a8.prototype={
gj:function(a){return a.length}}
W.ff.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a8]},
$isk:1,
$ask:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$asl:function(){return[W.a8]},
$ish:1,
$ash:function(){return[W.a8]},
$asm:function(){return[W.a8]}}
W.fi.prototype={
H:function(a,b){return a.send(b)}}
W.cp.prototype={
el:function(a,b){return a.createContextualFragment(b)},
cP:function(a,b){return a.selectNodeContents(b)}}
W.cs.prototype={
H:function(a,b){return a.send(b)}}
W.fr.prototype={
gj:function(a){return a.length}}
W.ai.prototype={}
W.fx.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cu]},
$isk:1,
$ask:function(){return[W.cu]},
$isr:1,
$asr:function(){return[W.cu]},
$asl:function(){return[W.cu]},
$ish:1,
$ash:function(){return[W.cu]},
$asm:function(){return[W.cu]}}
W.fy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cw]},
$isk:1,
$ask:function(){return[W.cw]},
$isr:1,
$asr:function(){return[W.cw]},
$asl:function(){return[W.cw]},
$ish:1,
$ash:function(){return[W.cw]},
$asm:function(){return[W.cw]}}
W.a9.prototype={
gj:function(a){return a.length}}
W.fE.prototype={
h:function(a,b){return this.bI(a,b)},
ag:function(a,b){var t,s
for(t=0;!0;++t){s=this.dS(a,t)
if(s==null)return
b.$2(s,this.bI(a,s))}},
gD:function(a){var t=H.A([],[P.n])
this.ag(a,new W.fF(t))
return t},
gj:function(a){return a.length},
bI:function(a,b){return a.getItem(b)},
dS:function(a,b){return a.key(b)},
$asaU:function(){return[P.n,P.n]}}
W.fF.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(a,b){return{func:1,args:[,,]}}}
W.cz.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
t=W.lW("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.K(s).M(0,new W.K(t))
return s}}
W.fN.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.K(t)
r=t.gZ(t)
r.toString
t=new W.K(r)
q=t.gZ(t)
s.toString
q.toString
new W.K(s).M(0,new W.K(q))
return s}}
W.fO.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aF(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.N(t.createElement("table"),b,c,d)
t.toString
t=new W.K(t)
r=t.gZ(t)
s.toString
r.toString
new W.K(s).M(0,new W.K(r))
return s}}
W.bm.prototype={$isbm:1}
W.fQ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
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
W.fR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
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
W.fT.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$isaC:1}
W.fX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
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
W.fY.prototype={
gj:function(a){return a.length}}
W.cF.prototype={
b5:function(a){return a.previousNode()}}
W.aD.prototype={}
W.h6.prototype={
k:function(a){return String(a)}}
W.h8.prototype={
gm:function(a){return a.x},
gC:function(a){return a.z}}
W.h9.prototype={
gj:function(a){return a.length}}
W.ha.prototype={
H:function(a,b){return a.send(b)}}
W.aG.prototype={
gep:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.p("deltaY is not supported"))},
$isaG:1}
W.bq.prototype={
gea:function(a){var t,s
t=P.a1
s=new P.ac(0,$.z,null,[t])
this.dM(a)
this.dY(a,W.kJ(new W.hc(new P.hZ(s,[t]))))
return s},
dY:function(a,b){return a.requestAnimationFrame(H.bI(b,1))},
dM:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hc.prototype={
$1:function(a){this.a.ei(0,a)},
$S:function(a){return{func:1,args:[,]}}}
W.ja.prototype={}
W.hl.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.bT]},
$isk:1,
$ask:function(){return[W.bT]},
$isr:1,
$asr:function(){return[W.bT]},
$asl:function(){return[W.bT]},
$ish:1,
$ash:function(){return[W.bT]},
$asm:function(){return[W.bT]}}
W.hm.prototype={
k:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
w:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isQ)return!1
return a.left===t.gce(b)&&a.top===t.gct(b)&&a.width===t.ga4(b)&&a.height===t.ga1(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=a.width
q=a.height
return W.kD(W.aJ(W.aJ(W.aJ(W.aJ(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga1:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.c3]},
$isk:1,
$ask:function(){return[W.c3]},
$isr:1,
$asr:function(){return[W.c3]},
$asl:function(){return[W.c3]},
$ish:1,
$ash:function(){return[W.c3]},
$asm:function(){return[W.c3]}}
W.cW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.q]},
$isk:1,
$ask:function(){return[W.q]},
$isr:1,
$asr:function(){return[W.q]},
$asl:function(){return[W.q]},
$ish:1,
$ash:function(){return[W.q]},
$asm:function(){return[W.q]}}
W.hW.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.a9]},
$isk:1,
$ask:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$asl:function(){return[W.a9]},
$ish:1,
$ash:function(){return[W.a9]},
$asm:function(){return[W.a9]}}
W.hX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$iso:1,
$aso:function(){return[W.cy]},
$isk:1,
$ask:function(){return[W.cy]},
$isr:1,
$asr:function(){return[W.cy]},
$asl:function(){return[W.cy]},
$ish:1,
$ash:function(){return[W.cy]},
$asm:function(){return[W.cy]}}
W.hi.prototype={
ag:function(a,b){var t,s,r,q,p,o
for(t=this.gD(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.O)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gD:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.A([],[P.n])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
$ascb:function(){return[P.n,P.n]},
$asaU:function(){return[P.n,P.n]},
gdP:function(){return this.a}}
W.hn.prototype={
h:function(a,b){return J.iN(this.a,b)},
gj:function(a){return this.gD(this).length}}
W.hq.prototype={
eM:function(a,b,c,d){return W.a_(this.a,this.b,a,!1,H.an(this,0))}}
W.jd.prototype={}
W.hr.prototype={
dv:function(a,b,c,d,e){this.e6()},
e6:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l5(r,this.c,t,!1)}}}
W.hs.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(a){return{func:1,args:[,]}}}
W.bs.prototype={
dw:function(a){var t,s
t=$.$get$je()
if(t.gaj(t)){for(s=0;s<262;++s)t.i(0,C.W[s],W.n_())
for(s=0;s<12;++s)t.i(0,C.u[s],W.n0())}},
a0:function(a){return $.$get$kB().B(0,W.bb(a))},
T:function(a,b,c){var t,s,r
t=W.bb(a)
s=$.$get$je()
r=s.h(0,H.e(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)}}
W.m.prototype={
gv:function(a){return new W.c2(a,this.gj(a),-1,null,[H.S(a,"m",0)])},
F:function(a,b,c,d,e){throw H.c(P.p("Cannot setRange on immutable List."))},
a8:function(a,b,c,d){return this.F(a,b,c,d,0)}}
W.cm.prototype={
a0:function(a){return C.a.bT(this.a,new W.f3(a))},
T:function(a,b,c){return C.a.bT(this.a,new W.f2(a,b,c))}}
W.f3.prototype={
$1:function(a){return a.a0(this.a)},
$S:function(a){return{func:1,args:[,]}}}
W.f2.prototype={
$1:function(a){return a.T(this.a,this.b,this.c)},
$S:function(a){return{func:1,args:[,]}}}
W.bz.prototype={
dB:function(a,b,c,d){var t,s,r
this.a.M(0,c)
t=b.az(0,new W.hU())
s=b.az(0,new W.hV())
this.b.M(0,t)
r=this.c
r.M(0,C.Y)
r.M(0,s)},
a0:function(a){return this.a.B(0,W.bb(a))},
T:function(a,b,c){var t,s
t=W.bb(a)
s=this.c
if(s.B(0,H.e(t)+"::"+b))return this.d.e9(c)
else if(s.B(0,"*::"+b))return this.d.e9(c)
else{s=this.b
if(s.B(0,H.e(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.e(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1}}
W.hU.prototype={
$1:function(a){return!C.a.B(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.hV.prototype={
$1:function(a){return C.a.B(C.u,a)},
$S:function(a){return{func:1,args:[,]}}}
W.i_.prototype={
T:function(a,b,c){if(this.d7(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.iN(a,"template")==="")return this.e.B(0,b)
return!1}}
W.i0.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)},
$S:function(a){return{func:1,args:[,]}}}
W.hY.prototype={
a0:function(a){var t=J.t(a)
if(!!t.$isbk)return!1
t=!!t.$isu
if(t&&W.bb(a)==="foreignObject")return!1
if(t)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.i.bl(b,"on"))return!1
return this.a0(a)}}
W.c2.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbK(J.b5(this.a,t))
this.c=t
return!0}this.sbK(null)
this.c=s
return!1},
gq:function(a){return this.d},
sbK:function(a){this.d=a}}
W.cl.prototype={}
W.j2.prototype={}
W.j9.prototype={}
W.hT.prototype={}
W.dg.prototype={
bi:function(a){new W.i1(this).$2(a,null)},
ad:function(a,b){if(b==null)J.jA(a)
else J.iF(b,a)},
e0:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lm(a)
r=J.iN(s.gdP(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.I(n)}p="element unprintable"
try{p=J.b7(a)}catch(n){H.I(n)}try{o=W.bb(a)
this.e_(a,b,t,p,o,s,r)}catch(n){if(H.I(n) instanceof P.a4)throw n
else{this.ad(a,b)
window
m="Removing corrupted element "+H.e(p)
if(typeof console!="undefined")window.console.warn(m)}}},
e_:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
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
return}t=f.gD(f)
s=H.A(t.slice(0),[H.an(t,0)])
for(r=f.gD(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.T(a,J.lC(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.e(e)+" "+p+'="'+H.e(q.a6(t,p))+'">'
if(typeof console!="undefined")window.console.warn(o)
q.a6(t,p)
q.dV(t,p)}}if(!!J.t(a).$isbm)this.bi(a.content)}}
W.i1.prototype={
$2:function(a,b){var t,s,r,q
r=this.a
switch(a.nodeType){case 1:r.e0(a,b)
break
case 8:case 11:case 3:case 4:break
default:r.ad(a,b)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.ln(t)}catch(q){H.I(q)
r=t
J.iF(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(a,b){return{func:1,v:true,args:[W.q,W.q]}}}
W.cI.prototype={}
W.cJ.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cX.prototype={}
W.cY.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.bA.prototype={}
W.bB.prototype={}
W.d2.prototype={}
W.d3.prototype={}
W.d7.prototype={}
W.da.prototype={}
W.db.prototype={}
W.bC.prototype={}
W.bD.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.dr.prototype={}
P.i7.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(a,b){return{func:1,args:[,,]}}}
P.hG.prototype={
eQ:function(){return Math.random()}}
P.hO.prototype={}
P.Q.prototype={}
P.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
gn:function(a){return a.y},
gC:function(a){return a.z}}
P.ef.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gC:function(a){return a.z}}
P.eh.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ei.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.Y.prototype={}
P.a6.prototype={}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.iY]},
$asl:function(){return[P.iY]},
$ish:1,
$ash:function(){return[P.iY]},
$asm:function(){return[P.iY]}}
P.eP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j3]},
$asl:function(){return[P.j3]},
$ish:1,
$ash:function(){return[P.j3]},
$asm:function(){return[P.j3]}}
P.fc.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fh.prototype={
gj:function(a){return a.length}}
P.fk.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bk.prototype={$isbk:1}
P.fK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.n]},
$asl:function(){return[P.n]},
$ish:1,
$ash:function(){return[P.n]},
$asm:function(){return[P.n]}}
P.u.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.A([],[W.cl])
C.a.l(t,W.kA(null))
C.a.l(t,W.kE())
C.a.l(t,new W.hY())
c=new W.dg(new W.cm(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).em(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.K(q)
o=t.gZ(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isu:1}
P.fM.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bn.prototype={}
P.bo.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isk:1,
$ask:function(){return[P.j7]},
$asl:function(){return[P.j7]},
$ish:1,
$ash:function(){return[P.j7]},
$asm:function(){return[P.j7]}}
P.h7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.cS.prototype={}
P.cT.prototype={}
P.cZ.prototype={}
P.d_.prototype={}
P.d8.prototype={}
P.d9.prototype={}
P.de.prototype={}
P.df.prototype={}
P.dC.prototype={
gj:function(a){return a.length}}
P.dD.prototype={
gj:function(a){return a.length}}
P.aM.prototype={}
P.f6.prototype={
gj:function(a){return a.length}}
P.fo.prototype={
bR:function(a,b){return a.activeTexture(b)},
bU:function(a,b,c){return a.attachShader(b,c)},
bV:function(a,b,c){return a.bindBuffer(b,c)},
bW:function(a,b,c){return a.bindTexture(b,c)},
bX:function(a,b){return a.blendEquation(b)},
bY:function(a,b,c){return a.blendFunc(b,c)},
bZ:function(a,b,c,d){return a.bufferData(b,c,d)},
c_:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createProgram()},
c4:function(a,b){return a.createShader(b)},
c5:function(a){return a.createTexture()},
c7:function(a,b){return a.depthMask(b)},
c8:function(a,b){return a.disable(b)},
c9:function(a,b,c,d){return a.drawArrays(b,c,d)},
ca:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cb:function(a,b){return a.enable(b)},
cc:function(a,b){return a.enableVertexAttribArray(b)},
aA:function(a){return P.i8(a.getContextAttributes())},
bb:function(a){return a.getError()},
bd:function(a,b){return a.getProgramInfoLog(b)},
be:function(a,b,c){return a.getProgramParameter(b,c)},
bf:function(a,b){return a.getShaderInfoLog(b)},
bg:function(a,b,c){return a.getShaderParameter(b,c)},
bh:function(a,b,c){return a.getUniformLocation(b,c)},
cf:function(a,b){return a.linkProgram(b)},
cj:function(a,b,c){return a.pixelStorei(b,c)},
bk:function(a,b,c){return a.shaderSource(b,c)},
bm:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b7:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g)
return},
co:function(a,b,c,d,e,f,g){return this.b7(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cp:function(a,b,c,d){return a.texParameterf(b,c,d)},
cq:function(a,b,c,d){return a.texParameteri(b,c,d)},
cu:function(a,b,c){return a.uniform1f(b,c)},
cv:function(a,b,c){return a.uniform1fv(b,c)},
cw:function(a,b,c){return a.uniform1i(b,c)},
cz:function(a,b,c){return a.uniform1iv(b,c)},
cA:function(a,b,c){return a.uniform2fv(b,c)},
cB:function(a,b,c){return a.uniform3fv(b,c)},
cC:function(a,b,c){return a.uniform4fv(b,c)},
cD:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cG:function(a,b){return a.useProgram(b)},
cI:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cK:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fp.prototype={
ec:function(a,b){return a.beginTransformFeedback(b)},
ef:function(a,b){return a.bindVertexArray(b)},
eo:function(a){return a.createVertexArray()},
ew:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ex:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ey:function(a){return a.endTransformFeedback()},
f3:function(a,b,c,d){this.e5(a,b,c,d)
return},
e5:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f4:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bR:function(a,b){return a.activeTexture(b)},
bU:function(a,b,c){return a.attachShader(b,c)},
bV:function(a,b,c){return a.bindBuffer(b,c)},
bW:function(a,b,c){return a.bindTexture(b,c)},
bX:function(a,b){return a.blendEquation(b)},
bY:function(a,b,c){return a.blendFunc(b,c)},
bZ:function(a,b,c,d){return a.bufferData(b,c,d)},
c_:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createProgram()},
c4:function(a,b){return a.createShader(b)},
c5:function(a){return a.createTexture()},
c7:function(a,b){return a.depthMask(b)},
c8:function(a,b){return a.disable(b)},
c9:function(a,b,c,d){return a.drawArrays(b,c,d)},
ca:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cb:function(a,b){return a.enable(b)},
cc:function(a,b){return a.enableVertexAttribArray(b)},
aA:function(a){return P.i8(a.getContextAttributes())},
bb:function(a){return a.getError()},
bd:function(a,b){return a.getProgramInfoLog(b)},
be:function(a,b,c){return a.getProgramParameter(b,c)},
bf:function(a,b){return a.getShaderInfoLog(b)},
bg:function(a,b,c){return a.getShaderParameter(b,c)},
bh:function(a,b,c){return a.getUniformLocation(b,c)},
cf:function(a,b){return a.linkProgram(b)},
cj:function(a,b,c){return a.pixelStorei(b,c)},
bk:function(a,b,c){return a.shaderSource(b,c)},
bm:function(a,b,c,d){return a.stencilFunc(b,c,d)},
b7:function(a,b,c,d,e,f,g,h,i,j){this.aZ(a,b,c,d,e,f,g)
return},
co:function(a,b,c,d,e,f,g){return this.b7(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cp:function(a,b,c,d){return a.texParameterf(b,c,d)},
cq:function(a,b,c,d){return a.texParameteri(b,c,d)},
cu:function(a,b,c){return a.uniform1f(b,c)},
cv:function(a,b,c){return a.uniform1fv(b,c)},
cw:function(a,b,c){return a.uniform1i(b,c)},
cz:function(a,b,c){return a.uniform1iv(b,c)},
cA:function(a,b,c){return a.uniform2fv(b,c)},
cB:function(a,b,c){return a.uniform3fv(b,c)},
cC:function(a,b,c){return a.uniform4fv(b,c)},
cD:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cG:function(a,b){return a.useProgram(b)},
cI:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cK:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.i8(this.dR(a,b))},
i:function(a,b,c){throw H.c(P.p("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dR:function(a,b){return a.item(b)},
$isk:1,
$ask:function(){return[P.aT]},
$asl:function(){return[P.aT]},
$ish:1,
$ash:function(){return[P.aT]},
$asm:function(){return[P.aT]}}
P.d4.prototype={}
P.d5.prototype={}
B.ix.prototype={
$1:function(a){$.$get$i9().i(0,a.which,!0)},
$S:function(a){return{func:1,args:[W.ay]}}}
B.iy.prototype={
$1:function(a){$.$get$i9().i(0,a.which,null)},
$S:function(a){return{func:1,args:[W.ay]}}}
B.iz.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mS=t
$.mT=C.b.a9(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jq=s-C.b.J(window.innerWidth,2)
$.kX=-(t-C.b.J(window.innerHeight,2))},
$S:function(a){return{func:1,args:[W.G]}}}
B.iA.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bK=t-C.b.J(window.innerWidth,2)
$.bL=-(s-C.b.J(window.innerHeight,2))
if(a.button===2)$.$get$bJ().i(0,"right",!0)
else $.$get$bJ().i(0,"left",!0)},
$S:function(a){return{func:1,args:[W.G]}}}
B.iB.prototype={
$1:function(a){if(a.button===2)$.$get$bJ().i(0,"right",null)
else $.$get$bJ().i(0,"left",null)},
$S:function(a){return{func:1,args:[W.G]}}}
B.f7.prototype={
di:function(a,b,c,d){var t
d.toString
W.a_(d,W.lX(d),new B.f8(this),!1,W.aG)
W.a_(d,"mousemove",new B.f9(this),!1,W.G)
t=W.aC
W.a_(d,"touchstart",new B.fa(),!1,t)
W.a_(d,"touchmove",new B.fb(this),!1,t)
B.ne(null)}}
B.f8.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.aw.gep(a)*r.k3
if(C.c.a9(r.fy,t)>0)r.fy=C.c.a9(r.fy,t)}catch(q){s=H.I(q)
P.a2(s)}},
$S:function(a){return{func:1,args:[W.aG]}}}
B.f9.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=t.go+C.b.a9($.jq,$.bK)*0.01
s=t.id
r=$.bL
q=$.kX
t.id=s+(r-q)*0.01
$.bK=$.jq
$.bL=q}},
$S:function(a){return{func:1,args:[W.G]}}}
B.fa.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a3(t.clientX)
C.c.a3(t.clientY)
$.bK=s
C.c.a3(t.clientX)
$.bL=C.c.a3(t.clientY)},
$S:function(a){return{func:1,args:[W.aC]}}}
B.fb.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a3(t.clientX)
t=C.c.a3(t.clientY)
r=this.a
r.go=r.go+C.b.a9(s,$.bK)*0.01
r.id=r.id+($.bL-t)*0.01
$.bK=s
$.bL=t},
$S:function(a){return{func:1,args:[W.aC]}}}
G.eU.prototype={}
G.h2.prototype={
I:function(a,b){var t=this.d
if(H.ae(!t.E(0,a)))H.al("uniform "+a+" already set")
t.i(0,a,b)},
bu:function(){return this.d},
k:function(a){var t,s,r,q
t=H.A(["{"+new H.aj(H.ie(this),null).k(0)+"}["+this.a+"]"],[P.n])
for(s=this.d,r=s.gD(s),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(t,H.e(q)+": "+H.e(s.h(0,q)))}return C.a.ak(t,"\n")}}
G.dE.prototype={}
G.dG.prototype={
cd:function(a,b,c){J.lk(this.a,b)
if(c>0)J.lI(this.a,b,c)},
cJ:function(a,b,c,d,e,f,g,h){J.iH(this.a,34962,b)
J.lJ(this.a,c,d,e,!1,g,h)}}
G.ej.prototype={}
G.er.prototype={
dc:function(){var t,s,r,q,p,o,n,m,l
t=this.c
s=t.length
H.b(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.A(s,[P.x])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gf7(o)
r[q+1]=o.gf8(o)
r[q+2]=o.gf9(o)
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
de:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.b(this.d.length===t)
s=[]
this.e.i(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.l(s,new T.aF(m))}H.b(s.length===t)},
dd:function(a,b,c){var t,s,r,q,p,o,n,m,l
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
C.a.l(t,new G.ej(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gD(s),r=r.gv(r);r.p();){q=r.gq(r)
p=$.$get$L().h(0,q).a
C.a.l(t,H.e(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ak(t," ")}}
G.cD.prototype={}
G.cC.prototype={}
G.cd.prototype={}
G.eR.prototype={
br:function(a,b,c){var t,s
if(C.i.aL(a,0)===105){if(H.ae(C.b.aG(b.length,c)===this.z))H.al("ChangeAttribute "+this.z)}else{t=C.b.aG(b.length,c)
if(H.ae(t===(this.ch.length/3|0)))H.al("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.iH(t.a,34962,s)
J.jv(t.a,34962,b,35048)},
df:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
X:function(a,b,c){var t,s,r,q,p,o
t=J.js(a,0)===105
if(t&&this.z===0)this.z=C.b.aG(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iJ(r.a))
this.br(a,b,c)
q=$.$get$L().h(0,a)
if(q==null)throw H.c("Unknown canonical "+a)
p=this.x
if(H.ae(p.E(0,a)))H.al("unexpected attribute "+a)
o=p.h(0,a)
J.dx(r.a,this.e)
r.cd(0,o,t?1:0)
r.cJ(0,s.h(0,a),o,q.bt(),5126,!1,0,0)},
bq:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.iJ(s.a))
this.ch=a
this.br("aPosition",a,3)
r=$.$get$L().h(0,"aPosition")
if(r==null)throw H.c("Unknown canonical aPosition")
q=this.x
H.b(q.E(0,"aPosition"))
p=q.h(0,"aPosition")
J.dx(s.a,this.e)
s.cd(0,p,0)
s.cJ(0,t.h(0,"aPosition"),p,r.bt(),5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gD(t),r=r.gv(r);r.p();){q=r.gq(r)
C.a.l(s,H.e(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ak(s,"  ")},
saR:function(a){this.cx=a}}
G.fd.prototype={
d9:function(a,b){var t=C.b.cM(a,b)
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
t.a7(0,0,1/(p*s))
t.a7(1,1,1/p)
t.a7(2,2,(q+r)/o)
t.a7(3,2,-1)
t.a7(2,3,2*r*q/o)},
bu:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.v(new Float32Array(3))
o.aD(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.L(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.t(n)
r=!!s.$isak
k=r?s.gay(n):1
if(!!s.$isv){j=s.gm(n)
m=s.gn(n)
l=s.gC(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gC(n)
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
a3.L(this.db)
a3.eP(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fn.prototype={
dj:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
r.i(0,n,J.jz(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
r.i(0,n,J.jz(q.a,p,n))}},
dr:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gD(s),s=s.gv(s);s.p();){q=s.gq(s)
if(!t.E(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bt(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
du:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gD(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq(s)
switch(J.js(n,0)){case 117:if(q.E(0,n)){m=b.h(0,n)
if(p.E(0,n))H.iv("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$L().h(0,n)
if(l==null)H.F("unknown "+n)
H.b(q.E(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.iO(r.a,k,m)
else if(!!J.t(m).$isk1)J.lG(r.a,k,m)
break
case"float":if(l.c===0)J.lE(r.a,k,m)
else if(!!J.t(m).$isen)J.lF(r.a,k,m)
break
case"mat4":if(l.c===0){n=H.ao(m,"$isV").a
J.jG(r.a,k,!1,n)}else if(!!J.t(m).$isen)J.jG(r.a,k,!1,m)
else if(H.ae(!1))H.al("bad unform: "+n)
break
case"mat3":if(l.c===0){n=H.ao(m,"$isnn").a
J.jF(r.a,k,!1,n)}else if(!!J.t(m).$isen)J.jF(r.a,k,!1,m)
else if(H.ae(!1))H.al("bad unform: "+n)
break
case"vec4":n=l.c
j=r.a
if(n===0)J.jE(j,k,H.ao(m,"$isak").a)
else J.jE(j,k,m)
break
case"vec3":n=l.c
j=r.a
if(n===0)J.jD(j,k,H.ao(m,"$isv").a)
else J.jD(j,k,m)
break
case"vec2":n=l.c
j=r.a
if(n===0)J.jC(j,k,H.ao(m,"$isaF").a)
else J.jC(j,k,m)
break
case"sampler2D":case"sampler2DShadow":n=C.b.a5(33984,this.ch)
J.jt(r.a,n)
n=H.ao(m,"$isbp").b
J.bM(r.a,3553,n)
n=this.ch
J.iO(r.a,k,n)
this.ch=this.ch+1
break
case"samplerCube":H.b(n==="uCubeTexture")
n=C.b.a5(33984,this.ch)
J.jt(r.a,n)
n=H.ao(m,"$isbp").b
J.bM(r.a,34067,n)
n=this.ch
J.iO(r.a,k,n)
this.ch=this.ch+1
break
default:H.iv("Error: unknow uniform type: "+j)
H.b(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":n=J.B(m,!0)
j=r.a
if(n)J.bN(j,2929)
else J.iK(j,2929)
break
case"cStencilFunc":H.ao(m,"$iscD")
n=m.a
j=r.a
if(n===1281)J.iK(j,2960)
else{J.bN(j,2960)
j=m.b
i=m.c
J.lz(r.a,n,j,i)}break
case"cDepthWrite":J.lf(r.a,m)
break
case"cBlendEquation":H.ao(m,"$iscC")
n=m.a
j=r.a
if(n===1281)J.iK(j,3042)
else{J.bN(j,3042)
j=m.b
i=m.c
J.l9(r.a,j,i)
J.l8(r.a,n)}break}++o
break}}h=P.lV(0,0,0,Date.now()-new P.b9(t,!1).a,0,0)
""+o
h.k(0)},
da:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lH(t.a,this.r)
this.ch=0
this.z.U(0)
for(s=0;s<2;++s){r=b[s]
this.du(r.a,r.bu())}q=this.Q
q.U(0)
for(p=a.cy,p=p.gD(p),p=p.gv(p);p.p();)q.l(0,p.gq(p))
o=this.dr()
if(o.length!==0)P.a2("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.e(o)))
J.dx(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.df()
m=a.Q
l=a.z
if(n)J.l7(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.lj(k,q,p,m,0,l)
else J.li(k,q,p,m,0)}else{m=t.a
if(l>1)J.lh(m,q,0,p,l)
else J.lg(m,q,0,p)}if(n)J.ll(t.a)},
bs:function(a,b){return this.da(a,b,null)}}
G.w.prototype={
bt:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.b(!1)
return-1}}}
G.fu.prototype={
aH:function(a){var t,s,r,q,p
H.b(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.O)(a),++q){p=a[q]
H.b($.$get$L().E(0,p))
H.b(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aE(s)},
aI:function(a){var t,s,r,q
H.b(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.O)(a),++r){q=a[r]
if(H.ae($.$get$L().E(0,q)))H.al("missing uniform "+q)
H.b(!C.a.B(s,q))
C.a.l(s,q)}C.a.aE(s)},
bp:function(a){var t,s,r
H.b(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.b($.$get$L().E(0,r))
H.b(!C.a.B(t,r))
C.a.l(t,r)}C.a.aE(t)},
dk:function(a,b){H.b(this.b==null)
this.b=this.bw(!0,a,b)},
aJ:function(a){return this.dk(a,null)},
bw:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.b(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){n=t[o]
m=$.$get$L().h(0,n)
C.a.l(q,"layout (location="+H.e(p.h(0,n))+") in "+m.a+" "+H.e(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$L().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$L().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.e(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.O)(t),++o){k=t[o]
m=$.$get$L().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.e(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.M(q,b)
if(a)C.a.l(q,"}")
return C.a.ak(q,"\n")}}
G.cv.prototype={
bc:function(){var t,s,r
t=this.e
s=this.d.a
r=t.a
r[0]=s[12]
r[1]=s[13]
r[2]=s[14]
return t},
d_:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.fS.prototype={
dg:function(a,b){var t=this.e
if(t!==1)J.lB(a.a,b,34046,t)
J.jB(a.a,b,10240,this.r)
J.jB(a.a,b,10241,this.f)}}
G.bp.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.ew.prototype={
dl:function(a){var t,s
t=this.d
s=this.c
J.bM(t.a,s,this.b)
J.lA(t.a,s,0,6408,6408,5121,a)}}
R.co.prototype={
cl:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.a2("size change "+H.e(s)+" "+H.e(r))
this.d9(s,r)
J.lK(this.go.a,0,0,s,r)}}
R.fC.prototype={
dm:function(a,b,c){var t,s,r
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
J.iG(this.a,s)
r=this.dA(b,c,90,30)
this.d=r
J.iG(this.a,r)
t=t.createElement("div")
this.c=t
J.iG(this.a,t)},
dA:function(a,b,c,d){var t,s,r,q,p
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
p=(r&&C.y).bB(r,"float")
r.setProperty(p,"left","")
p=C.y.bB(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.P(t,s)}return t}}
R.fD.prototype={
dt:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.A.f2(s,2)+" fps"
t=this.c;(t&&C.q).cY(t,b)
r=C.b.J(30*C.A.eg(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).P(t,q)},
ds:function(a){return this.dt(a,"")}}
B.fw.prototype={
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
b.sC(0,this.d*t*0.5*q)},
$S:function(a,b){return{func:1,v:true,args:[P.R,T.v]}}}
A.ih.prototype={
$2:function(a,b){var t=536870911&a+J.b6(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(a,b){return{func:1,args:[P.x,P.C]}}}
T.V.prototype={
a7:function(a,b,c){H.b(a<4)
H.b(b<4)
this.a[b*4+a]=c},
L:function(a){var t,s
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
if(b instanceof T.V){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.ig(this.a)},
ao:function(a){var t,s
t=new Float32Array(4)
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.ak(t)},
Y:function(){var t=this.a
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
eP:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.aF.prototype={
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aF){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.ig(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.v.prototype={
aD:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
L:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.v){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.ig(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gb3())},
gb3:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
a2:function(a){var t,s,r
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
c6:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.v(new Float32Array(3))
t.aD(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
av:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
bn:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
sm:function(a,b){this.a[0]=b
return b},
sn:function(a,b){this.a[1]=b
return b},
sC:function(a,b){this.a[2]=b
return b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gC:function(a){return this.a[2]}}
T.ak.prototype={
k:function(a){var t=this.a
return H.e(t[0])+","+H.e(t[1])+","+H.e(t[2])+","+H.e(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ak){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.ig(this.a)},
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
gC:function(a){return this.a[2]},
gay:function(a){return this.a[3]}}
U.it.prototype={
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
s.id=0}r=C.c.eh(s.id,-1.4707963267948965,1.4707963267948965)
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.d_(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
n=r[12]
m=r[13]
l=r[14]
k=new T.v(new Float32Array(3))
k.aD(0,1,0)
q=s.bc()
j=new Float32Array(3)
i=new T.v(j)
i.L(q)
i.bn(0,p)
i.a2(0)
h=k.c6(i)
h.a2(0)
g=i.c6(h)
g.a2(0)
p=h.b1(q)
f=g.b1(q)
q=i.b1(q)
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
a3=Math.sqrt(d.gb3())
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
f=this.f
this.c.bs(this.d,[this.e,f])
this.r.bs(this.x,[this.y,f])
C.ax.gea(window).cr(this)
this.z.ds(t.a)},
$S:function(a){return{func:1,v:true,args:[P.a1]}}}
J.a.prototype.d3=J.a.prototype.k
J.be.prototype.d5=J.be.prototype.k
P.l.prototype.d6=P.l.prototype.F
P.P.prototype.d4=P.P.prototype.az
W.X.prototype.aF=W.X.prototype.N
W.bz.prototype.d7=W.bz.prototype.T;(function installTearOffs(){installTearOff(H.aY.prototype,"geL",0,0,0,null,["$0"],["ax"],0)
installTearOff(H.a0.prototype,"gcQ",0,0,0,null,["$1"],["K"],2)
installTearOff(H.aH.prototype,"ger",0,0,0,null,["$1"],["V"],2)
installTearOff(P,"mO",1,0,0,null,["$1"],["mw"],1)
installTearOff(P,"mP",1,0,0,null,["$1"],["mx"],1)
installTearOff(P,"mQ",1,0,0,null,["$1"],["my"],1)
installTearOff(P,"kN",1,0,0,null,["$0"],["mM"],0)
installTearOff(P.ac.prototype,"gdG",0,0,0,null,["$2","$1"],["ap","dH"],5)
installTearOff(P,"mV",1,0,0,null,["$2"],["lR"],7)
installTearOff(W,"n_",1,0,0,null,["$4"],["mC"],4)
installTearOff(W,"n0",1,0,0,null,["$4"],["mD"],4)
installTearOff(W.ck.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(W.cF.prototype,"gb4",0,1,0,null,["$0"],["b5"],3)
installTearOff(R.co.prototype,"geW",0,0,0,null,["$1"],["cl"],6)
installTearOff(U,"kV",1,0,0,null,["$0"],["n8"],0)})();(function inheritance(){inherit(P.C,null)
var t=P.C
inherit(H.iV,t)
inherit(J.a,t)
inherit(J.dB,t)
inherit(P.P,t)
inherit(H.ca,t)
inherit(P.c6,t)
inherit(H.aQ,t)
inherit(H.as,t)
inherit(H.hM,t)
inherit(H.aY,t)
inherit(H.ho,t)
inherit(H.aI,t)
inherit(H.hL,t)
inherit(H.hj,t)
inherit(H.cr,t)
inherit(H.fU,t)
inherit(H.aq,t)
inherit(H.a0,t)
inherit(H.aH,t)
inherit(H.fm,t)
inherit(H.h_,t)
inherit(P.aP,t)
inherit(H.d6,t)
inherit(H.aj,t)
inherit(P.aU,t)
inherit(H.eH,t)
inherit(H.eJ,t)
inherit(P.iQ,t)
inherit(P.hk,t)
inherit(P.cP,t)
inherit(P.ac,t)
inherit(P.cH,t)
inherit(P.fG,t)
inherit(P.fH,t)
inherit(P.j5,t)
inherit(P.aL,t)
inherit(P.i2,t)
inherit(P.ft,t)
inherit(P.hI,t)
inherit(P.bt,t)
inherit(P.iZ,t)
inherit(P.bu,t)
inherit(P.l,t)
inherit(P.hK,t)
inherit(P.af,t)
inherit(P.D,t)
inherit(P.b9,t)
inherit(P.a1,t)
inherit(P.at,t)
inherit(P.cx,t)
inherit(P.iS,t)
inherit(P.ht,t)
inherit(P.e0,t)
inherit(P.h,t)
inherit(P.aT,t)
inherit(P.H,t)
inherit(P.aW,t)
inherit(P.n,t)
inherit(P.bl,t)
inherit(P.j8,t)
inherit(W.dM,t)
inherit(W.bs,t)
inherit(W.m,t)
inherit(W.cm,t)
inherit(W.bz,t)
inherit(W.hY,t)
inherit(W.c2,t)
inherit(W.cl,t)
inherit(W.j2,t)
inherit(W.j9,t)
inherit(W.hT,t)
inherit(W.dg,t)
inherit(P.hG,t)
inherit(P.hO,t)
inherit(G.eU,t)
inherit(G.dG,t)
inherit(G.ej,t)
inherit(G.er,t)
inherit(G.cD,t)
inherit(G.cC,t)
inherit(G.w,t)
inherit(G.fu,t)
inherit(G.fS,t)
inherit(G.bp,t)
inherit(R.fC,t)
inherit(T.V,t)
inherit(T.aF,t)
inherit(T.v,t)
inherit(T.ak,t)
t=J.a
inherit(J.eC,t)
inherit(J.eD,t)
inherit(J.be,t)
inherit(J.au,t)
inherit(J.aR,t)
inherit(J.aw,t)
inherit(H.bh,t)
inherit(H.aV,t)
inherit(W.d,t)
inherit(W.dy,t)
inherit(W.bR,t)
inherit(W.bS,t)
inherit(W.aO,t)
inherit(W.W,t)
inherit(W.cI,t)
inherit(W.dR,t)
inherit(W.dS,t)
inherit(W.dT,t)
inherit(W.bW,t)
inherit(W.bX,t)
inherit(W.cJ,t)
inherit(W.bZ,t)
inherit(W.cL,t)
inherit(W.dW,t)
inherit(W.f,t)
inherit(W.cN,t)
inherit(W.et,t)
inherit(W.cQ,t)
inherit(W.eL,t)
inherit(W.eQ,t)
inherit(W.cU,t)
inherit(W.ck,t)
inherit(W.cX,t)
inherit(W.a8,t)
inherit(W.d0,t)
inherit(W.cp,t)
inherit(W.d2,t)
inherit(W.a9,t)
inherit(W.d7,t)
inherit(W.da,t)
inherit(W.fT,t)
inherit(W.dc,t)
inherit(W.fY,t)
inherit(W.cF,t)
inherit(W.h6,t)
inherit(W.h8,t)
inherit(W.dh,t)
inherit(W.dj,t)
inherit(W.dl,t)
inherit(W.dn,t)
inherit(W.dq,t)
inherit(P.cS,t)
inherit(P.cZ,t)
inherit(P.fg,t)
inherit(P.fh,t)
inherit(P.fk,t)
inherit(P.d8,t)
inherit(P.de,t)
inherit(P.dC,t)
inherit(P.fo,t)
inherit(P.fp,t)
inherit(P.d4,t)
t=J.be
inherit(J.fe,t)
inherit(J.aE,t)
inherit(J.ax,t)
inherit(J.iU,J.au)
t=J.aR
inherit(J.c8,t)
inherit(J.c7,t)
t=P.P
inherit(H.k,t)
inherit(H.cc,t)
inherit(H.cG,t)
t=H.k
inherit(H.aS,t)
inherit(H.eI,t)
t=H.aS
inherit(H.fL,t)
inherit(H.bf,t)
inherit(P.eK,t)
inherit(H.dZ,H.cc)
t=P.c6
inherit(H.eO,t)
inherit(H.hb,t)
t=H.as
inherit(H.iC,t)
inherit(H.iD,t)
inherit(H.hF,t)
inherit(H.hp,t)
inherit(H.ey,t)
inherit(H.ez,t)
inherit(H.hN,t)
inherit(H.fV,t)
inherit(H.fW,t)
inherit(H.iE,t)
inherit(H.im,t)
inherit(H.io,t)
inherit(H.ip,t)
inherit(H.iq,t)
inherit(H.ir,t)
inherit(H.fP,t)
inherit(H.eE,t)
inherit(H.ii,t)
inherit(H.ij,t)
inherit(H.ik,t)
inherit(P.hf,t)
inherit(P.he,t)
inherit(P.hg,t)
inherit(P.hh,t)
inherit(P.hu,t)
inherit(P.hy,t)
inherit(P.hv,t)
inherit(P.hw,t)
inherit(P.hx,t)
inherit(P.hB,t)
inherit(P.hC,t)
inherit(P.hA,t)
inherit(P.hz,t)
inherit(P.fI,t)
inherit(P.fJ,t)
inherit(P.i5,t)
inherit(P.hR,t)
inherit(P.hQ,t)
inherit(P.hS,t)
inherit(P.eN,t)
inherit(P.dX,t)
inherit(P.dY,t)
inherit(W.e_,t)
inherit(W.fF,t)
inherit(W.hc,t)
inherit(W.hs,t)
inherit(W.f3,t)
inherit(W.f2,t)
inherit(W.hU,t)
inherit(W.hV,t)
inherit(W.i0,t)
inherit(W.i1,t)
inherit(P.i7,t)
inherit(B.ix,t)
inherit(B.iy,t)
inherit(B.iz,t)
inherit(B.iA,t)
inherit(B.iB,t)
inherit(B.f8,t)
inherit(B.f9,t)
inherit(B.fa,t)
inherit(B.fb,t)
inherit(B.fw,t)
inherit(A.ih,t)
inherit(U.it,t)
t=H.hj
inherit(H.b_,t)
inherit(H.bE,t)
t=P.aP
inherit(H.f4,t)
inherit(H.eF,t)
inherit(H.h4,t)
inherit(H.h1,t)
inherit(H.dF,t)
inherit(H.fq,t)
inherit(P.bP,t)
inherit(P.cn,t)
inherit(P.a4,t)
inherit(P.h5,t)
inherit(P.h3,t)
inherit(P.aX,t)
inherit(P.dH,t)
inherit(P.dQ,t)
t=H.fP
inherit(H.fB,t)
inherit(H.b8,t)
inherit(H.hd,P.bP)
inherit(P.cb,P.aU)
t=P.cb
inherit(H.a7,t)
inherit(W.hi,t)
t=H.aV
inherit(H.eV,t)
inherit(H.cg,t)
t=H.cg
inherit(H.bv,t)
inherit(H.bx,t)
inherit(H.bw,H.bv)
inherit(H.ch,H.bw)
inherit(H.by,H.bx)
inherit(H.ci,H.by)
t=H.ch
inherit(H.cf,t)
inherit(H.eW,t)
t=H.ci
inherit(H.eX,t)
inherit(H.eY,t)
inherit(H.eZ,t)
inherit(H.f_,t)
inherit(H.f0,t)
inherit(H.cj,t)
inherit(H.f1,t)
inherit(P.hZ,P.hk)
inherit(P.hP,P.i2)
inherit(P.hJ,H.a7)
inherit(P.fs,P.ft)
inherit(P.hE,P.fs)
inherit(P.hH,P.hE)
inherit(P.c9,P.bu)
t=P.a1
inherit(P.R,t)
inherit(P.x,t)
t=P.a4
inherit(P.cq,t)
inherit(P.ex,t)
t=W.d
inherit(W.q,t)
inherit(W.ai,t)
inherit(W.el,t)
inherit(W.bd,t)
inherit(W.bg,t)
inherit(W.fi,t)
inherit(W.cs,t)
inherit(W.bA,t)
inherit(W.bC,t)
inherit(W.h9,t)
inherit(W.ha,t)
inherit(W.bq,t)
inherit(W.ja,t)
inherit(P.dD,t)
inherit(P.aM,t)
t=W.q
inherit(W.X,t)
inherit(W.ar,t)
inherit(W.ba,t)
t=W.X
inherit(W.i,t)
inherit(P.u,t)
t=W.ai
inherit(W.bO,t)
inherit(W.es,t)
inherit(W.eM,t)
t=W.i
inherit(W.dz,t)
inherit(W.dA,t)
inherit(W.ap,t)
inherit(W.bQ,t)
inherit(W.bV,t)
inherit(W.ep,t)
inherit(W.c4,t)
inherit(W.fr,t)
inherit(W.cz,t)
inherit(W.fN,t)
inherit(W.fO,t)
inherit(W.bm,t)
t=W.aO
inherit(W.dI,t)
inherit(W.dK,t)
inherit(W.dL,t)
inherit(W.dO,t)
t=W.W
inherit(W.dJ,t)
inherit(W.dN,t)
inherit(W.dP,t)
inherit(W.aN,W.cI)
inherit(W.dU,W.bX)
inherit(W.cK,W.cJ)
inherit(W.bY,W.cK)
inherit(W.cM,W.cL)
inherit(W.dV,W.cM)
inherit(W.cO,W.cN)
inherit(W.ek,W.cO)
inherit(W.cR,W.cQ)
inherit(W.bc,W.cR)
inherit(W.c5,W.ba)
inherit(W.eu,W.bd)
inherit(W.aD,W.f)
t=W.aD
inherit(W.ay,t)
inherit(W.G,t)
inherit(W.aC,t)
inherit(W.eS,W.bg)
inherit(W.cV,W.cU)
inherit(W.eT,W.cV)
inherit(W.K,P.c9)
inherit(W.cY,W.cX)
inherit(W.bi,W.cY)
inherit(W.d1,W.d0)
inherit(W.ff,W.d1)
inherit(W.bB,W.bA)
inherit(W.fx,W.bB)
inherit(W.d3,W.d2)
inherit(W.fy,W.d3)
inherit(W.fE,W.d7)
inherit(W.db,W.da)
inherit(W.fQ,W.db)
inherit(W.bD,W.bC)
inherit(W.fR,W.bD)
inherit(W.dd,W.dc)
inherit(W.fX,W.dd)
inherit(W.aG,W.G)
inherit(W.di,W.dh)
inherit(W.hl,W.di)
inherit(W.hm,W.bZ)
inherit(W.dk,W.dj)
inherit(W.hD,W.dk)
inherit(W.dm,W.dl)
inherit(W.cW,W.dm)
inherit(W.dp,W.dn)
inherit(W.hW,W.dp)
inherit(W.dr,W.dq)
inherit(W.hX,W.dr)
inherit(W.hn,W.hi)
inherit(W.hq,P.fG)
inherit(W.jd,W.hq)
inherit(W.hr,P.fH)
inherit(W.i_,W.bz)
inherit(P.Q,P.hO)
t=P.u
inherit(P.e1,t)
inherit(P.e2,t)
inherit(P.e3,t)
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
inherit(P.em,t)
inherit(P.a6,t)
inherit(P.eP,t)
inherit(P.fc,t)
inherit(P.bk,t)
t=P.a6
inherit(P.eo,t)
inherit(P.Y,t)
inherit(P.ev,t)
inherit(P.fM,t)
inherit(P.bn,t)
inherit(P.h7,t)
inherit(P.cT,P.cS)
inherit(P.eG,P.cT)
inherit(P.d_,P.cZ)
inherit(P.f5,P.d_)
inherit(P.fl,P.Y)
inherit(P.d9,P.d8)
inherit(P.fK,P.d9)
inherit(P.bo,P.bn)
inherit(P.df,P.de)
inherit(P.fZ,P.df)
inherit(P.f6,P.aM)
inherit(P.d5,P.d4)
inherit(P.fz,P.d5)
t=G.eU
inherit(G.cv,t)
inherit(G.h2,t)
inherit(G.eR,t)
inherit(G.fn,t)
inherit(G.dE,G.cv)
inherit(B.f7,G.dE)
t=G.h2
inherit(G.cd,t)
inherit(G.fd,t)
inherit(G.ew,G.bp)
inherit(R.co,G.fd)
inherit(R.fD,R.fC)
mixin(H.bv,P.l)
mixin(H.bw,H.aQ)
mixin(H.bx,P.l)
mixin(H.by,H.aQ)
mixin(P.bu,P.l)
mixin(W.cI,W.dM)
mixin(W.cJ,P.l)
mixin(W.cK,W.m)
mixin(W.cL,P.l)
mixin(W.cM,W.m)
mixin(W.cN,P.l)
mixin(W.cO,W.m)
mixin(W.cQ,P.l)
mixin(W.cR,W.m)
mixin(W.cU,P.l)
mixin(W.cV,W.m)
mixin(W.cX,P.l)
mixin(W.cY,W.m)
mixin(W.d0,P.l)
mixin(W.d1,W.m)
mixin(W.bA,P.l)
mixin(W.bB,W.m)
mixin(W.d2,P.l)
mixin(W.d3,W.m)
mixin(W.d7,P.aU)
mixin(W.da,P.l)
mixin(W.db,W.m)
mixin(W.bC,P.l)
mixin(W.bD,W.m)
mixin(W.dc,P.l)
mixin(W.dd,W.m)
mixin(W.dh,P.l)
mixin(W.di,W.m)
mixin(W.dj,P.l)
mixin(W.dk,W.m)
mixin(W.dl,P.l)
mixin(W.dm,W.m)
mixin(W.dn,P.l)
mixin(W.dp,W.m)
mixin(W.dq,P.l)
mixin(W.dr,W.m)
mixin(P.cS,P.l)
mixin(P.cT,W.m)
mixin(P.cZ,P.l)
mixin(P.d_,W.m)
mixin(P.d8,P.l)
mixin(P.d9,W.m)
mixin(P.de,P.l)
mixin(P.df,W.m)
mixin(P.d4,P.l)
mixin(P.d5,W.m)})();(function constants(){C.o=W.ap.prototype
C.x=W.bQ.prototype
C.m=W.bR.prototype
C.p=W.bS.prototype
C.y=W.aN.prototype
C.q=W.bV.prototype
C.M=W.bW.prototype
C.N=W.c4.prototype
C.r=W.c5.prototype
C.O=J.a.prototype
C.a=J.au.prototype
C.A=J.c7.prototype
C.b=J.c8.prototype
C.c=J.aR.prototype
C.i=J.aw.prototype
C.V=J.ax.prototype
C.v=H.cf.prototype
C.D=W.bi.prototype
C.E=J.fe.prototype
C.F=W.cp.prototype
C.K=W.cz.prototype
C.w=J.aE.prototype
C.aw=W.aG.prototype
C.ax=W.bq.prototype
C.L=new P.hG()
C.f=new P.hP()
C.z=new P.at(0)
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
C.W=H.A(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.X=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.Y=makeConstList([])
C.t=H.A(makeConstList(["bind","if","ref","repeat","syntax"]),[P.n])
C.u=H.A(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.Z=new G.w("vec3","vertex btangents",0)
C.d=new G.w("vec3","",0)
C.a_=new G.w("vec4","delta from light",0)
C.n=new G.w("","",0)
C.G=new G.w("vec3","vertex coordinates",0)
C.a0=new G.w("vec3","vertex binormals",0)
C.H=new G.w("vec4","for wireframe",0)
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
C.I=new G.w("vec3","per vertex color",0)
C.J=new G.w("mat3","",0)
C.ad=new G.w("vec3","vertex tangents",0)
C.ae=H.E("ni")
C.af=H.E("nj")
C.ag=H.E("en")
C.ah=H.E("nk")
C.ai=H.E("nl")
C.aj=H.E("k1")
C.ak=H.E("nm")
C.al=H.E("k5")
C.am=H.E("H")
C.an=H.E("n")
C.ao=H.E("kt")
C.ap=H.E("ku")
C.aq=H.E("no")
C.ar=H.E("kv")
C.as=H.E("af")
C.at=H.E("R")
C.au=H.E("x")
C.av=H.E("a1")})();(function staticFields(){$.kc="$cachedFunction"
$.kd="$cachedInvocation"
$.jO=null
$.jM=null
$.jg=!1
$.jl=null
$.kK=null
$.l0=null
$.ia=null
$.il=null
$.jm=null
$.b0=null
$.bF=null
$.bG=null
$.jh=!1
$.z=C.f
$.k_=0
$.ah=null
$.iR=null
$.jZ=null
$.jY=null
$.jW=null
$.jV=null
$.jU=null
$.jT=null
$.mS=0
$.mT=0
$.jq=0
$.kX=0
$.bK=0
$.bL=0
$.nf=!1
$.kO=0})();(function lazyInitializers(){lazy($,"jS","$get$jS",function(){return H.kR("_$dart_dartClosure")})
lazy($,"iW","$get$iW",function(){return H.kR("_$dart_js")})
lazy($,"k2","$get$k2",function(){return H.m5()})
lazy($,"k3","$get$k3",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k_
$.k_=t+1
t="expando$key$"+t}return new P.e0(t,null,[P.x])})
lazy($,"ki","$get$ki",function(){return H.aa(H.h0({
toString:function(){return"$receiver$"}}))})
lazy($,"kj","$get$kj",function(){return H.aa(H.h0({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kk","$get$kk",function(){return H.aa(H.h0(null))})
lazy($,"kl","$get$kl",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kp","$get$kp",function(){return H.aa(H.h0(void 0))})
lazy($,"kq","$get$kq",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kn","$get$kn",function(){return H.aa(H.ko(null))})
lazy($,"km","$get$km",function(){return H.aa(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"ks","$get$ks",function(){return H.aa(H.ko(void 0))})
lazy($,"kr","$get$kr",function(){return H.aa(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jc","$get$jc",function(){return P.mv()})
lazy($,"bH","$get$bH",function(){return[]})
lazy($,"jR","$get$jR",function(){return{}})
lazy($,"kB","$get$kB",function(){return P.j_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"je","$get$je",function(){return P.U()})
lazy($,"i9","$get$i9",function(){return P.k6(P.x,P.af)})
lazy($,"bJ","$get$bJ",function(){return P.k6(P.n,P.af)})
lazy($,"kf","$get$kf",function(){return new G.cD(1281,0,4294967295)})
lazy($,"jK","$get$jK",function(){return G.kh(1281,1281,1281)})
lazy($,"jJ","$get$jJ",function(){return G.kh(32774,770,769)})
lazy($,"L","$get$L",function(){return P.az(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.I,"aColorAlpha",C.a1,"aPosition",C.G,"aTexUV",C.a8,"aNormal",C.ab,"aBinormal",C.a0,"aCenter",C.H,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ad,"aBitangent",C.Z,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.G,"vPositionFromLight",C.a_,"vCenter",C.H,"vDepth",C.a6,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ac,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.aa,"uAnimationTable",C.h,"uTime",C.a9,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a3,"uLightDescs",C.a4,"uLightCount",C.e,"uLightTypes",C.a5,"uBumpScale",C.a7,"uNormalScale",C.a2])})
lazy($,"kx","$get$kx",function(){return C.L})
lazy($,"l_","$get$l_",function(){var t=G.fv("PointSpritesV")
t.aH(["aPosition"])
t.aI(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.aJ(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"kZ","$get$kZ",function(){var t=G.fv("PointSpritesF")
t.aI(["uTexture"])
t.aJ(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"kU","$get$kU",function(){var t=G.fv("InstancedV")
t.aH(["aPosition"])
t.aH(["iaRotation","iaTranslation"])
t.bp(["vColor"])
t.aI(["uPerspectiveViewMatrix","uModelMatrix"])
H.b(t.b==null)
t.b=t.bw(!1,["vec3 rotate_vertex_position(vec3 pos, vec4 rot) { \n    return pos + 2.0 * cross(rot.xyz, cross(rot.xyz, pos) + rot.w * pos);\n}\n\nvoid main(void) {\n    vec3 P = rotate_vertex_position(aPosition, iaRotation) +\n             iaTranslation;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(P, 1);\n    vColor = vec3(sin(aPosition.x)/2.0+0.5,\n                     cos(aPosition.y)/2.0+0.5, \n                     sin(aPosition.z)/2.0+0.5);\n}\n"],null)
return t})
lazy($,"kT","$get$kT",function(){var t=G.fv("InstancedF")
t.bp(["vColor"])
t.aJ(["oFragColor = vec4( vColor, 1. );"])
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
mangledGlobalNames:{x:"int",R:"double",a1:"num",n:"String",af:"bool",H:"Null",h:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.af,args:[W.X,P.n,P.n,W.bs]},{func:1,v:true,args:[P.C],opt:[P.aW]},{func:1,v:true,args:[W.f]},{func:1,ret:P.x,args:[P.D,P.D]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,Blob:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSCharsetRule:J.a,CSSConditionRule:J.a,CSSFontFaceRule:J.a,CSSGroupingRule:J.a,CSSImportRule:J.a,CSSKeyframeRule:J.a,MozCSSKeyframeRule:J.a,WebKitCSSKeyframeRule:J.a,CSSKeyframesRule:J.a,MozCSSKeyframesRule:J.a,WebKitCSSKeyframesRule:J.a,CSSMediaRule:J.a,CSSNamespaceRule:J.a,CSSPageRule:J.a,CSSRule:J.a,CSSStyleRule:J.a,CSSStyleSheet:J.a,CSSSupportsRule:J.a,CSSVariableReferenceValue:J.a,CSSViewportRule:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,File:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,Gamepad:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MimeType:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechGrammar:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,StyleSheet:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,Touch:J.a,TrackDefault:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGLength:J.a,SVGMatrix:J.a,SVGNumber:J.a,SVGPreserveAspectRatio:J.a,SVGTransform:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioParamMap:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bh,ArrayBufferView:H.aV,DataView:H.eV,Float32Array:H.cf,Float64Array:H.eW,Int16Array:H.eX,Int32Array:H.eY,Int8Array:H.eZ,Uint16Array:H.f_,Uint32Array:H.f0,Uint8ClampedArray:H.cj,CanvasPixelArray:H.cj,Uint8Array:H.f1,HTMLAudioElement:W.i,HTMLBRElement:W.i,HTMLBaseElement:W.i,HTMLButtonElement:W.i,HTMLContentElement:W.i,HTMLDListElement:W.i,HTMLDataElement:W.i,HTMLDataListElement:W.i,HTMLDetailsElement:W.i,HTMLDialogElement:W.i,HTMLEmbedElement:W.i,HTMLFieldSetElement:W.i,HTMLHRElement:W.i,HTMLHeadingElement:W.i,HTMLHtmlElement:W.i,HTMLIFrameElement:W.i,HTMLImageElement:W.i,HTMLInputElement:W.i,HTMLLIElement:W.i,HTMLLabelElement:W.i,HTMLLegendElement:W.i,HTMLLinkElement:W.i,HTMLMapElement:W.i,HTMLMediaElement:W.i,HTMLMenuElement:W.i,HTMLMetaElement:W.i,HTMLMeterElement:W.i,HTMLModElement:W.i,HTMLOListElement:W.i,HTMLObjectElement:W.i,HTMLOptGroupElement:W.i,HTMLOptionElement:W.i,HTMLOutputElement:W.i,HTMLParagraphElement:W.i,HTMLParamElement:W.i,HTMLPictureElement:W.i,HTMLPreElement:W.i,HTMLProgressElement:W.i,HTMLQuoteElement:W.i,HTMLScriptElement:W.i,HTMLShadowElement:W.i,HTMLSlotElement:W.i,HTMLSourceElement:W.i,HTMLSpanElement:W.i,HTMLStyleElement:W.i,HTMLTableCaptionElement:W.i,HTMLTableCellElement:W.i,HTMLTableDataCellElement:W.i,HTMLTableHeaderCellElement:W.i,HTMLTableColElement:W.i,HTMLTextAreaElement:W.i,HTMLTimeElement:W.i,HTMLTitleElement:W.i,HTMLTrackElement:W.i,HTMLUListElement:W.i,HTMLUnknownElement:W.i,HTMLVideoElement:W.i,HTMLDirectoryElement:W.i,HTMLFontElement:W.i,HTMLFrameElement:W.i,HTMLFrameSetElement:W.i,HTMLMarqueeElement:W.i,HTMLElement:W.i,Accelerometer:W.bO,LinearAccelerationSensor:W.bO,AccessibleNodeList:W.dy,HTMLAnchorElement:W.dz,HTMLAreaElement:W.dA,HTMLBodyElement:W.ap,HTMLCanvasElement:W.bQ,CanvasGradient:W.bR,CanvasRenderingContext2D:W.bS,CDATASection:W.ar,CharacterData:W.ar,Comment:W.ar,ProcessingInstruction:W.ar,Text:W.ar,CSSPerspective:W.dI,CSSPositionValue:W.dJ,CSSRotation:W.dK,CSSScale:W.dL,CSSStyleDeclaration:W.aN,MSStyleCSSProperties:W.aN,CSS2Properties:W.aN,CSSImageValue:W.W,CSSKeywordValue:W.W,CSSNumericValue:W.W,CSSResourceValue:W.W,CSSUnitValue:W.W,CSSURLImageValue:W.W,CSSStyleValue:W.W,CSSMatrixComponent:W.aO,CSSSkew:W.aO,CSSTransformComponent:W.aO,CSSTransformValue:W.dN,CSSTranslation:W.dO,CSSUnparsedValue:W.dP,DataTransferItemList:W.dR,DeviceAcceleration:W.dS,HTMLDivElement:W.bV,XMLDocument:W.ba,Document:W.ba,DOMException:W.dT,DOMImplementation:W.bW,DOMPoint:W.dU,DOMPointReadOnly:W.bX,ClientRectList:W.bY,DOMRectList:W.bY,DOMRectReadOnly:W.bZ,DOMStringList:W.dV,DOMTokenList:W.dW,Element:W.X,AbortPaymentEvent:W.f,AnimationEvent:W.f,AnimationPlaybackEvent:W.f,ApplicationCacheErrorEvent:W.f,BackgroundFetchClickEvent:W.f,BackgroundFetchEvent:W.f,BackgroundFetchFailEvent:W.f,BackgroundFetchedEvent:W.f,BeforeInstallPromptEvent:W.f,BeforeUnloadEvent:W.f,BlobEvent:W.f,CanMakePaymentEvent:W.f,ClipboardEvent:W.f,CloseEvent:W.f,CustomEvent:W.f,DeviceMotionEvent:W.f,DeviceOrientationEvent:W.f,ErrorEvent:W.f,ExtendableEvent:W.f,ExtendableMessageEvent:W.f,FetchEvent:W.f,FontFaceSetLoadEvent:W.f,ForeignFetchEvent:W.f,GamepadEvent:W.f,HashChangeEvent:W.f,InstallEvent:W.f,MediaEncryptedEvent:W.f,MediaKeyMessageEvent:W.f,MediaQueryListEvent:W.f,MediaStreamEvent:W.f,MediaStreamTrackEvent:W.f,MessageEvent:W.f,MIDIConnectionEvent:W.f,MIDIMessageEvent:W.f,MutationEvent:W.f,NotificationEvent:W.f,PageTransitionEvent:W.f,PaymentRequestEvent:W.f,PaymentRequestUpdateEvent:W.f,PopStateEvent:W.f,PresentationConnectionAvailableEvent:W.f,PresentationConnectionCloseEvent:W.f,ProgressEvent:W.f,PromiseRejectionEvent:W.f,PushEvent:W.f,RTCDataChannelEvent:W.f,RTCDTMFToneChangeEvent:W.f,RTCPeerConnectionIceEvent:W.f,RTCTrackEvent:W.f,SecurityPolicyViolationEvent:W.f,SensorErrorEvent:W.f,SpeechRecognitionError:W.f,SpeechRecognitionEvent:W.f,SpeechSynthesisEvent:W.f,StorageEvent:W.f,SyncEvent:W.f,TrackEvent:W.f,TransitionEvent:W.f,WebKitTransitionEvent:W.f,VRDeviceEvent:W.f,VRDisplayEvent:W.f,VRSessionEvent:W.f,MojoInterfaceRequestEvent:W.f,ResourceProgressEvent:W.f,USBConnectionEvent:W.f,IDBVersionChangeEvent:W.f,AudioProcessingEvent:W.f,OfflineAudioCompletionEvent:W.f,WebGLContextEvent:W.f,Event:W.f,InputEvent:W.f,AccessibleNode:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RemotePlayback:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SourceBuffer:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,TextTrack:W.d,TextTrackCue:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,VTTCue:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,ServiceWorker:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,FileList:W.ek,FileWriter:W.el,HTMLFormElement:W.ep,Gyroscope:W.es,HTMLHeadElement:W.c4,History:W.et,HTMLCollection:W.bc,HTMLFormControlsCollection:W.bc,HTMLOptionsCollection:W.bc,HTMLDocument:W.c5,XMLHttpRequest:W.eu,XMLHttpRequestUpload:W.bd,XMLHttpRequestEventTarget:W.bd,KeyboardEvent:W.ay,Location:W.eL,Magnetometer:W.eM,MediaList:W.eQ,MIDIOutput:W.eS,MIDIInput:W.bg,MIDIPort:W.bg,MimeTypeArray:W.eT,PointerEvent:W.G,MouseEvent:W.G,DragEvent:W.G,DocumentFragment:W.q,ShadowRoot:W.q,Attr:W.q,DocumentType:W.q,Node:W.q,NodeIterator:W.ck,NodeList:W.bi,RadioNodeList:W.bi,Plugin:W.a8,PluginArray:W.ff,PresentationConnection:W.fi,Range:W.cp,RTCDataChannel:W.cs,DataChannel:W.cs,HTMLSelectElement:W.fr,AbsoluteOrientationSensor:W.ai,AmbientLightSensor:W.ai,OrientationSensor:W.ai,RelativeOrientationSensor:W.ai,Sensor:W.ai,SourceBufferList:W.fx,SpeechGrammarList:W.fy,SpeechRecognitionResult:W.a9,Storage:W.fE,HTMLTableElement:W.cz,HTMLTableRowElement:W.fN,HTMLTableSectionElement:W.fO,HTMLTemplateElement:W.bm,TextTrackCueList:W.fQ,TextTrackList:W.fR,TimeRanges:W.fT,TouchEvent:W.aC,TouchList:W.fX,TrackDefaultList:W.fY,TreeWalker:W.cF,CompositionEvent:W.aD,FocusEvent:W.aD,TextEvent:W.aD,UIEvent:W.aD,URL:W.h6,VRStageBoundsPoint:W.h8,VideoTrackList:W.h9,WebSocket:W.ha,WheelEvent:W.aG,Window:W.bq,DOMWindow:W.bq,CSSRuleList:W.hl,DOMRect:W.hm,GamepadList:W.hD,NamedNodeMap:W.cW,MozNamedAttrMap:W.cW,SpeechRecognitionResultList:W.hW,StyleSheetList:W.hX,SVGFEBlendElement:P.e1,SVGFEColorMatrixElement:P.e2,SVGFEComponentTransferElement:P.e3,SVGFECompositeElement:P.e4,SVGFEConvolveMatrixElement:P.e5,SVGFEDiffuseLightingElement:P.e6,SVGFEDisplacementMapElement:P.e7,SVGFEFloodElement:P.e8,SVGFEGaussianBlurElement:P.e9,SVGFEImageElement:P.ea,SVGFEMergeElement:P.eb,SVGFEMorphologyElement:P.ec,SVGFEOffsetElement:P.ed,SVGFEPointLightElement:P.ee,SVGFESpecularLightingElement:P.ef,SVGFESpotLightElement:P.eg,SVGFETileElement:P.eh,SVGFETurbulenceElement:P.ei,SVGFilterElement:P.em,SVGForeignObjectElement:P.eo,SVGCircleElement:P.Y,SVGEllipseElement:P.Y,SVGLineElement:P.Y,SVGPathElement:P.Y,SVGPolygonElement:P.Y,SVGPolylineElement:P.Y,SVGGeometryElement:P.Y,SVGAElement:P.a6,SVGClipPathElement:P.a6,SVGDefsElement:P.a6,SVGGElement:P.a6,SVGSwitchElement:P.a6,SVGGraphicsElement:P.a6,SVGImageElement:P.ev,SVGLengthList:P.eG,SVGMaskElement:P.eP,SVGNumberList:P.f5,SVGPatternElement:P.fc,SVGPoint:P.fg,SVGPointList:P.fh,SVGRect:P.fk,SVGRectElement:P.fl,SVGScriptElement:P.bk,SVGStringList:P.fK,SVGAnimateElement:P.u,SVGAnimateMotionElement:P.u,SVGAnimateTransformElement:P.u,SVGAnimationElement:P.u,SVGDescElement:P.u,SVGDiscardElement:P.u,SVGFEDistantLightElement:P.u,SVGFEFuncAElement:P.u,SVGFEFuncBElement:P.u,SVGFEFuncGElement:P.u,SVGFEFuncRElement:P.u,SVGFEMergeNodeElement:P.u,SVGLinearGradientElement:P.u,SVGMarkerElement:P.u,SVGMetadataElement:P.u,SVGRadialGradientElement:P.u,SVGSetElement:P.u,SVGStopElement:P.u,SVGStyleElement:P.u,SVGSymbolElement:P.u,SVGTitleElement:P.u,SVGViewElement:P.u,SVGGradientElement:P.u,SVGComponentTransferFunctionElement:P.u,SVGFEDropShadowElement:P.u,SVGMPathElement:P.u,SVGElement:P.u,SVGSVGElement:P.fM,SVGTextPathElement:P.bn,SVGTextContentElement:P.bn,SVGTSpanElement:P.bo,SVGTextElement:P.bo,SVGTextPositioningElement:P.bo,SVGTransformList:P.fZ,SVGUseElement:P.h7,AudioBuffer:P.dC,AudioTrackList:P.dD,AudioContext:P.aM,webkitAudioContext:P.aM,BaseAudioContext:P.aM,OfflineAudioContext:P.f6,WebGLRenderingContext:P.fo,WebGL2RenderingContext:P.fp,SQLResultSetRowList:P.fz})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,Blob:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSStyleSheet:true,CSSSupportsRule:true,CSSVariableReferenceValue:true,CSSViewportRule:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,File:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,Gamepad:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechGrammar:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,StyleSheet:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,Touch:true,TrackDefault:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGLength:true,SVGMatrix:true,SVGNumber:true,SVGPreserveAspectRatio:true,SVGTransform:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioParamMap:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,Accelerometer:true,LinearAccelerationSensor:true,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSPositionValue:true,CSSRotation:true,CSSScale:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSSkew:true,CSSTransformComponent:false,CSSTransformValue:true,CSSTranslation:true,CSSUnparsedValue:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AccessibleNode:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnectionList:true,PresentationRequest:true,RemotePlayback:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SourceBuffer:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,TextTrack:true,TextTrackCue:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,VTTCue:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,ServiceWorker:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,FileList:true,FileWriter:true,HTMLFormElement:true,Gyroscope:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,KeyboardEvent:true,Location:true,Magnetometer:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,PresentationConnection:true,Range:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,AbsoluteOrientationSensor:true,AmbientLightSensor:true,OrientationSensor:true,RelativeOrientationSensor:true,Sensor:false,SourceBufferList:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VRStageBoundsPoint:true,VideoTrackList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGAElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLengthList:true,SVGMaskElement:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMetadataElement:true,SVGRadialGradientElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSymbolElement:true,SVGTitleElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGSVGElement:true,SVGTextPathElement:true,SVGTextContentElement:false,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransformList:true,SVGUseElement:true,AudioBuffer:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.by.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
W.bA.$nativeSuperclassTag="EventTarget"
W.bB.$nativeSuperclassTag="EventTarget"
W.bC.$nativeSuperclassTag="EventTarget"
W.bD.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.l2(U.kV(),b)},[])
else (function(b){H.l2(U.kV(),b)})([])})})()