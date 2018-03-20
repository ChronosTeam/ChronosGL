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
a.prototype=t}}function mixin(a,b){copyProperties(b.prototype,a.prototype)}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.mh(b)}
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
return d?function(e){if(t===null)t=H.iL(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.iL(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.iL(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={ix:function ix(a){this.a=a},
iB:function(a,b,c,d){if(!!a.$isc)return new H.dL(a,b,[c,d])
return new H.cO(a,b,[c,d])},
iv:function(){return new P.bB("No element")},
le:function(){return new P.bB("Too few elements")},
d3:function(a,b,c,d){if(c-b<=32)H.ls(a,b,c,d)
else H.lr(a,b,c,d)},
ls:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ag(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ai(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
lr:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.J(t+1,6)
r=a3+s
q=a4-s
p=C.b.J(a3+a4,2)
o=p-s
n=p+s
t=J.ag(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ai(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ai(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ai(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ai(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ai(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ai(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ai(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ai(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ai(a5.$2(j,i),0)){h=i
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
H.d3(a2,a3,g-2,a5)
H.d3(a2,f+2,a4,a5)
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
break}}H.d3(a2,g,f,a5)}else H.d3(a2,g,f,a5)},
c:function c(){},
b4:function b4(){},
cN:function cN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
cO:function cO(a,b,c){this.a=a
this.b=b
this.$ti=c},
dL:function dL(a,b,c){this.a=a
this.b=b
this.$ti=c},
ey:function ey(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cP:function cP(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(){},
df:function(a,b){var t=a.aa(b)
if(!u.globalState.d.cy)u.globalState.f.af()
return t},
i8:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kc:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isb)throw H.e(P.j5("Arguments to main must be a List: "+H.h(s)))
u.globalState=new H.hv(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$jm()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.h7(P.iA(null,H.aX),0)
r=P.o
s.se0(new H.aa(0,null,null,null,null,null,0,[r,H.aW]))
s.se3(new H.aa(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hu()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.l9,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.lE)}if(u.globalState.x)return
s=u.globalState.a++
q=P.aN(null,null,null,r)
p=new H.b6(0,null,!1)
o=new H.aW(s,new H.aa(0,null,null,null,null,null,0,[r,H.b6]),q,u.createNewIsolate(),p,new H.al(H.ic()),new H.al(H.ic()),!1,!1,[],P.aN(null,null,null,null),null,null,!1,!0,P.aN(null,null,null,null))
q.l(0,0)
o.bh(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bc(a,{func:1,args:[,]}))o.aa(new H.ij(t,a))
else if(H.bc(a,{func:1,args:[,,]}))o.aa(new H.ik(t,a))
else o.aa(a)
u.globalState.f.af()},
lE:function(a){var t=P.aM(["command","print","msg",a])
return new H.af(!0,P.bK(null,P.o)).I(t)},
lb:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.lc()
return},
lc:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.r("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.r('Cannot extract URI from "'+t+'"'))},
l9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.aV(!0,[]).U(b.data)
s=J.ag(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.m4(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.aV(!0,[]).U(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.aV(!0,[]).U(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.aN(null,null,null,k)
i=new H.b6(0,null,!1)
h=new H.aW(s,new H.aa(0,null,null,null,null,null,0,[k,H.b6]),j,u.createNewIsolate(),i,new H.al(H.ic()),new H.al(H.ic()),!1,!1,[],P.aN(null,null,null,null),null,null,!1,!0,P.aN(null,null,null,null))
j.l(0,0)
h.bh(0,i)
u.globalState.f.a.S(0,new H.aX(h,new H.ek(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.af()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.kI(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.af()
break
case"close":u.globalState.ch.ae(0,$.$get$jn().h(0,a))
a.terminate()
u.globalState.f.af()
break
case"log":H.l8(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aM(["command","print","msg",t])
k=new H.af(!0,P.bK(null,P.o)).I(k)
s.toString
self.postMessage(k)}else P.ah(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
l8:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aM(["command","log","msg",a])
r=new H.af(!0,P.bK(null,P.o)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.au(q)
t=H.aC(q)
s=P.c3(t)
throw H.e(s)}},
la:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.js=$.js+("_"+s)
$.jt=$.jt+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.H(0,["spawned",new H.b9(s,r),q,t.r])
r=new H.el(a,b,c,d,t)
if(e){t.bz(q,q)
u.globalState.f.a.S(0,new H.aX(t,r,"start isolate"))}else r.$0()},
lt:function(a,b){var t=new H.fD(!0,!1,null)
t.d1(a,b)
return t},
lF:function(a){return new H.aV(!0,[]).U(new H.af(!1,P.bK(null,P.o)).I(a))},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(a,b){this.a=a
this.b=b},
hv:function hv(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=a0
_.y=a1
_.z=a2
_.Q=a3
_.ch=a4
_.cx=a5},
aW:function aW(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=a0
_.f=a1
_.r=a2
_.x=a3
_.y=a4
_.z=a5
_.Q=a6
_.ch=a7
_.cx=a8
_.cy=a9
_.db=b0
_.dx=b1},
hp:function hp(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
h8:function h8(a){this.a=a},
aX:function aX(a,b,c){this.a=a
this.b=b
this.c=c},
hu:function hu(){},
ek:function ek(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
el:function el(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
h1:function h1(){},
b9:function b9(a,b){this.b=a
this.a=b},
hw:function hw(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c){this.b=a
this.c=b
this.a=c},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a,b){this.a=a
this.b=b},
fF:function fF(a,b){this.a=a
this.b=b},
al:function al(a){this.a=a},
af:function af(a,b){this.a=a
this.b=b},
aV:function aV(a,b){this.a=a
this.b=b},
m_:function(a){return u.types[a]},
m6:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isp},
h:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.b_(a)
if(typeof t!=="string")throw H.e(H.R(a))
return t},
lq:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.f8(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aQ:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
d_:function(a){var t,s,r,q,p,o,n,m
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.t(a).$isaS){p=C.u(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.ax(q,0)===36)q=C.i.cH(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.di(H.hX(a),0,null),u.mangledGlobalNames)},
f4:function(a){return"Instance of '"+H.d_(a)+"'"},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lo:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
lm:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
li:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
lj:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
ll:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
ln:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
lk:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
jr:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.R(a))
return a[b]},
N:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ak(!0,b,"index",null)
t=J.dp(a)
if(b<0||C.b.cr(b,t))return P.B(b,a,"index",null,t)
return P.f5(b,"index",null)},
R:function(a){return new P.ak(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.cZ()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.ke})
t.name=""}else t.toString=H.ke
return t},
ke:function(){return J.b_(this.dartException)},
E:function(a){throw H.e(a)},
P:function(a){throw H.e(new P.a8(a))},
aq:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.fK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
fL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
jD:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
iz:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.er(a,s,t?null:b.receiver)},
au:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.il(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aG(r,16)&8191)===10)switch(q){case 438:return t.$1(H.iz(H.h(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.h(s)+" (Error "+q+")"
return t.$1(new H.cY(p,null))}}if(a instanceof TypeError){o=$.$get$jx()
n=$.$get$jy()
m=$.$get$jz()
l=$.$get$jA()
k=$.$get$jE()
j=$.$get$jF()
i=$.$get$jC()
$.$get$jB()
h=$.$get$jH()
g=$.$get$jG()
f=o.M(s)
if(f!=null)return t.$1(H.iz(s,f))
else{f=n.M(s)
if(f!=null){f.method="call"
return t.$1(H.iz(s,f))}else{f=m.M(s)
if(f==null){f=l.M(s)
if(f==null){f=k.M(s)
if(f==null){f=j.M(s)
if(f==null){f=i.M(s)
if(f==null){f=l.M(s)
if(f==null){f=h.M(s)
if(f==null){f=g.M(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.cY(s,f==null?null:f.method))}}return t.$1(new H.fN(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.d4()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ak(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.d4()
return a},
aC:function(a){var t
if(a==null)return new H.de(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.de(a,null)},
ma:function(a){if(a==null||typeof a!='object')return J.aj(a)
else return H.aQ(a)},
lX:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
m5:function(a,b,c,d,e,f,g){switch(c){case 0:return H.df(b,new H.i3(a))
case 1:return H.df(b,new H.i4(a,d))
case 2:return H.df(b,new H.i5(a,d,e))
case 3:return H.df(b,new H.i6(a,d,e,f))
case 4:return H.df(b,new H.i7(a,d,e,f,g))}throw H.e(P.c3("Unsupported number of arguments for wrapped closure"))},
bP:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.m5)
a.$identity=t
return t},
kY:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isb){t.$reflectionInfo=c
r=H.lq(t).r}else r=c
q=d?Object.create(new H.fo().constructor.prototype):Object.create(new H.bf(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.je(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.m_,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jb:H.is
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.je(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
kV:function(a,b,c,d){var t=H.is
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
je:function(a,b,c){var t,s,r,q
if(c)return H.kX(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.kV(s,b==null?r!=null:b!==r,t,b)
return q},
kW:function(a,b,c,d){var t,s
t=H.is
s=H.jb
switch(b?-1:a){case 0:throw H.e(new H.fe("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
kX:function(a,b){var t,s,r,q
H.kU()
t=$.ja
if(t==null){t=H.j9("receiver")
$.ja=t}s=b.$stubName
r=b.length
q=a[s]
t=H.kW(r,b==null?q!=null:b!==q,s,b)
return t},
iL:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.t(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.kY(a,b,t,!!d,e,f)},
is:function(a){return a.a},
jb:function(a){return a.c},
kU:function(){var t=$.jc
if(t==null){t=H.j9("self")
$.jc=t}return t},
j9:function(a){var t,s,r,q,p
t=new H.bf("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
mv:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ar(a,"String"))},
X:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ar(a,"double"))},
mu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ar(a,"num"))},
lR:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ar(a,"bool"))},
m4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ar(a,"int"))},
mc:function(a,b){throw H.e(H.ar(a,b.substring(3)))},
mb:function(a,b){var t=J.ag(b)
throw H.e(H.jd(H.d_(a),t.b5(b,3,t.gk(b))))},
k2:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.mc(a,b)},
aD:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.mb(a,b)},
mt:function(a){if(a==null)return a
if(!!J.t(a).$isb)return a
throw H.e(H.ar(a,"List"))},
jY:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
bc:function(a,b){var t
if(a==null)return!1
t=H.jY(a)
return t==null?!1:H.k3(t,b)},
mr:function(a,b){var t,s
if(a==null)return a
if($.iI)return a
$.iI=!0
try{if(H.bc(a,b))return a
t=H.aE(b,null)
s=H.ar(a,t)
throw H.e(s)}finally{$.iI=!1}},
ar:function(a,b){return new H.fM("type '"+H.d_(a)+"' is not a subtype of type '"+b+"'")},
jd:function(a,b){return new H.dy("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
at:function(a){if(!0===a)return!1
if(!!J.t(a).$isiu)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ar(a,"bool"))},
aA:function(a){throw H.e(new H.fX(a))},
d:function(a){if(H.at(a))throw H.e(new P.bU(null))},
mh:function(a){throw H.e(new P.dC(a))},
ic:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
k0:function(a){return u.getIsolateTag(a)},
J:function(a){return new H.ax(a,null)},
O:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
hX:function(a){if(a==null)return
return a.$ti},
k1:function(a,b){return H.iR(a["$as"+H.h(b)],H.hX(a))},
aB:function(a,b,c){var t,s
t=H.k1(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
bd:function(a,b){var t,s
t=H.hX(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aE:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.di(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.h(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aE(t,b)
return H.lG(a,b)}return"unknown-reified-type"},
lG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aE(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aE(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aE(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.lW(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aE(l[j],b)+(" "+H.h(j))}q+="}"}return"("+q+") => "+t},
di:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bC("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aE(o,c)}return p?"":"<"+s.j(0)+">"},
hY:function(a){var t,s
if(a instanceof H.b1){t=H.jY(a)
if(t!=null)return H.aE(t,null)}s=J.t(a).constructor.name
if(a==null)return s
return s+H.di(a.$ti,0,null)},
iR:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.iO(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.iO(a,null,b)
return b},
hR:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.hX(a)
s=J.t(a)
if(s[b]==null)return!1
return H.jV(H.iR(s[d],t),c)},
dj:function(a,b,c,d){if(a==null)return a
if(H.hR(a,b,c,d))return a
throw H.e(H.jd(H.d_(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.di(c,0,null),u.mangledGlobalNames)))},
mo:function(a,b,c,d){if(a==null)return a
if(H.hR(a,b,c,d))return a
throw H.e(H.ar(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.di(c,0,null),u.mangledGlobalNames)))},
jV:function(a,b){var t,s,r,q,p
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
if(!H.Y(r,b[p]))return!1}return!0},
mp:function(a,b,c){return H.iO(a,b,H.k1(b,c))},
Y:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aP")return!0
if('func' in b)return H.k3(a,b)
if('func' in a)return b.name==="iu"||b.name==="q"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aE(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.jV(H.iR(o,t),r)},
jU:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Y(o,n)||H.Y(n,o)))return!1}return!0},
lN:function(a,b){var t,s,r,q,p,o
if(b==null)return!0
if(a==null)return!1
H.d(typeof a=='object')
H.d(typeof b=='object')
t=Object.getOwnPropertyNames(b)
t.fixed$length=Array
s=t
for(t=s.length,r=0;r<t;++r){q=s[r]
if(!Object.hasOwnProperty.call(a,q))return!1
p=b[q]
o=a[q]
if(!(H.Y(p,o)||H.Y(o,p)))return!1}return!0},
k3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Y(t,s)||H.Y(s,t)))return!1}r=a.args
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
if(n===m){if(!H.jU(r,q,!1))return!1
if(!H.jU(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.Y(g,f)||H.Y(f,g)))return!1}}return H.lN(a.named,b.named)},
iO:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
mw:function(a){var t=$.iM
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
ms:function(a){return H.aQ(a)},
mq:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
m7:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.q))
t=$.iM.$1(a)
s=$.hV[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i2[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.jT.$2(a,t)
if(t!=null){s=$.hV[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.i2[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.iP(r)
$.hV[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.i2[t]=r
return r}if(p==="-"){o=H.iP(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.k6(a,r)
if(p==="*")throw H.e(new P.d8(t))
if(u.leafTags[t]===true){o=H.iP(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.k6(a,r)},
k6:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.ia(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
iP:function(a){return J.ia(a,!1,null,!!a.$isp)},
m9:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.ia(t,!1,null,!!t.$isp)
else return J.ia(t,c,null,null)},
m2:function(){if(!0===$.iN)return
$.iN=!0
H.m3()},
m3:function(){var t,s,r,q,p,o,n,m
$.hV=Object.create(null)
$.i2=Object.create(null)
H.m1()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.k9.$1(p)
if(o!=null){n=H.m9(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
m1:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.bb(C.D,H.bb(C.I,H.bb(C.t,H.bb(C.t,H.bb(C.H,H.bb(C.E,H.bb(C.F(C.u),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.iM=new H.i_(p)
$.jT=new H.i0(o)
$.k9=new H.i1(n)},
bb:function(a,b){return a(b)||b},
f8:function f8(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fK:function fK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
cY:function cY(a,b){this.a=a
this.b=b},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
fN:function fN(a){this.a=a},
il:function il(a){this.a=a},
de:function de(a,b){this.a=a
this.b=b},
i3:function i3(a){this.a=a},
i4:function i4(a,b){this.a=a
this.b=b},
i5:function i5(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i7:function i7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b1:function b1(){},
fx:function fx(){},
fo:function fo(){},
bf:function bf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fM:function fM(a){this.a=a},
dy:function dy(a){this.a=a},
fe:function fe(a){this.a=a},
fX:function fX(a){this.a=a},
ax:function ax(a,b){this.a=a
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
eq:function eq(a){this.a=a},
et:function et(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eu:function eu(a,b){this.a=a
this.$ti=b},
ev:function ev(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i_:function i_(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
l:function(a){return a},
hN:function(a){var t,s,r
if(!!J.t(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bt:function bt(){},
b5:function b5(){},
eG:function eG(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cS:function cS(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
cW:function cW(){},
eN:function eN(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
lW:function(a){var t=H.O(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
ib:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cM.prototype
return J.eo.prototype}if(typeof a=="string")return J.aJ.prototype
if(a==null)return J.ep.prototype
if(typeof a=="boolean")return J.en.prototype
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.q)return a
return J.hW(a)},
ia:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
hW:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.iN==null){H.m2()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.d8("Return interceptor for "+H.h(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$iy()]
if(p!=null)return p
p=H.m7(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,$.$get$iy(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
ag:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.q)return a
return J.hW(a)},
dg:function(a){if(a==null)return a
if(a.constructor==Array)return J.aI.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.q)return a
return J.hW(a)},
k_:function(a){if(typeof a=="number")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.aS.prototype
return a},
lY:function(a){if(typeof a=="number")return J.b3.prototype
if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.aS.prototype
return a},
lZ:function(a){if(typeof a=="string")return J.aJ.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.aS.prototype
return a},
k:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aK.prototype
return a}if(a instanceof P.q)return a
return J.hW(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).v(a,b)},
ai:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.k_(a).ah(a,b)},
kf:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.k_(a).av(a,b)},
be:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.m6(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ag(a).h(a,b)},
kg:function(a,b,c,d){return J.k(a).d7(a,b,c,d)},
iS:function(a,b){return J.lZ(a).ax(a,b)},
iT:function(a,b){return J.k(a).by(a,b)},
iU:function(a,b,c){return J.k(a).bA(a,b,c)},
kh:function(a,b){return J.k(a).dv(a,b)},
dk:function(a,b,c){return J.k(a).bB(a,b,c)},
ki:function(a,b,c){return J.k(a).bC(a,b,c)},
bT:function(a,b,c){return J.k(a).bD(a,b,c)},
dl:function(a,b){return J.k(a).dA(a,b)},
kj:function(a,b){return J.k(a).bE(a,b)},
kk:function(a,b,c){return J.k(a).bF(a,b,c)},
iV:function(a,b,c,d){return J.k(a).bG(a,b,c,d)},
kl:function(a,b){return J.dg(a).bH(a,b)},
km:function(a,b,c,d,e){return J.k(a).bI(a,b,c,d,e)},
kn:function(a,b){return J.lY(a).N(a,b)},
im:function(a){return J.k(a).bK(a)},
ko:function(a){return J.k(a).bL(a)},
kp:function(a){return J.k(a).bO(a)},
iW:function(a){return J.k(a).dG(a)},
kq:function(a,b){return J.k(a).bQ(a,b)},
io:function(a,b){return J.k(a).bR(a,b)},
kr:function(a,b,c,d){return J.k(a).bS(a,b,c,d)},
ks:function(a,b,c,d,e){return J.k(a).dN(a,b,c,d,e)},
kt:function(a,b,c,d,e){return J.k(a).bT(a,b,c,d,e)},
ku:function(a,b,c,d,e,f){return J.k(a).dO(a,b,c,d,e,f)},
kv:function(a,b){return J.dg(a).p(a,b)},
dm:function(a,b){return J.k(a).bU(a,b)},
kw:function(a,b){return J.k(a).bV(a,b)},
kx:function(a){return J.k(a).dP(a)},
ky:function(a,b){return J.dg(a).aP(a,b)},
aj:function(a){return J.t(a).gu(a)},
dn:function(a){return J.dg(a).gA(a)},
dp:function(a){return J.ag(a).gk(a)},
kz:function(a){return J.t(a).gw(a)},
kA:function(a){return J.k(a).gat(a)},
ip:function(a){return J.k(a).gm(a)},
iq:function(a){return J.k(a).gn(a)},
iX:function(a){return J.k(a).gK(a)},
kB:function(a){return J.k(a).au(a)},
kC:function(a){return J.k(a).aW(a)},
kD:function(a,b){return J.k(a).aX(a,b)},
kE:function(a,b,c){return J.k(a).aY(a,b,c)},
iY:function(a,b,c){return J.k(a).b0(a,b,c)},
kF:function(a,b){return J.k(a).bX(a,b)},
kG:function(a,b){return J.dg(a).bZ(a,b)},
kH:function(a,b,c){return J.k(a).c0(a,b,c)},
kI:function(a,b){return J.k(a).H(a,b)},
kJ:function(a,b,c,d){return J.k(a).b4(a,b,c,d)},
kK:function(a,b,c,d,e,f,g){return J.k(a).c5(a,b,c,d,e,f,g)},
kL:function(a,b,c,d){return J.k(a).c6(a,b,c,d)},
iZ:function(a,b,c,d){return J.k(a).c7(a,b,c,d)},
b_:function(a){return J.t(a).j(a)},
kM:function(a,b,c,d){return J.k(a).eg(a,b,c,d)},
kN:function(a,b,c){return J.k(a).ca(a,b,c)},
kO:function(a,b,c){return J.k(a).cb(a,b,c)},
ir:function(a,b,c){return J.k(a).cc(a,b,c)},
kP:function(a,b,c){return J.k(a).cd(a,b,c)},
j_:function(a,b,c){return J.k(a).ce(a,b,c)},
j0:function(a,b,c){return J.k(a).cf(a,b,c)},
j1:function(a,b,c){return J.k(a).cg(a,b,c)},
j2:function(a,b,c,d){return J.k(a).ci(a,b,c,d)},
j3:function(a,b,c,d){return J.k(a).cj(a,b,c,d)},
kQ:function(a,b){return J.k(a).cl(a,b)},
kR:function(a,b,c){return J.k(a).eh(a,b,c)},
j4:function(a,b,c,d,e,f,g){return J.k(a).cn(a,b,c,d,e,f,g)},
kS:function(a,b,c,d,e){return J.k(a).co(a,b,c,d,e)},
a:function a(){},
en:function en(){},
ep:function ep(){},
br:function br(){},
eZ:function eZ(){},
aS:function aS(){},
aK:function aK(){},
aI:function aI(a){this.$ti=a},
iw:function iw(a){this.$ti=a},
dt:function dt(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
cM:function cM(){},
eo:function eo(){},
aJ:function aJ(){}},P={
lx:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.lO()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bP(new P.fZ(t),1)).observe(s,{childList:true})
return new P.fY(t,s,r)}else if(self.setImmediate!=null)return P.lP()
return P.lQ()},
ly:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bP(new P.h_(a),0))},
lz:function(a){++u.globalState.f.b
self.setImmediate(H.bP(new P.h0(a),0))},
lA:function(a){P.iE(C.r,a)},
lJ:function(a,b){if(H.bc(a,{func:1,args:[P.aP,P.aP]})){b.toString
return a}else{b.toString
return a}},
lB:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.as))
H.d(b.a===0)
b.a=1
try{a.c9(new P.he(b),new P.hf(b))}catch(r){t=H.au(r)
s=H.aC(r)
P.md(new P.hg(b,t,s))}},
jN:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.a7(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bH(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.br(q)}},
bH:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t={}
t.a=a
for(s=a;!0;){r={}
H.d(s.a>=4)
s=t.a
q=s.a===8
if(b==null){if(q){H.d(!0)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.hO(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bH(t.a,b)}s=t.a
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
if(k){H.d(s.a===8)
s=s.c
p=t.a.b
o=s.a
s=s.b
p.toString
P.hO(null,null,p,o,s)
return}s=$.C
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.C
H.d(l==null?s!=null:l!==s)
j=$.C
$.C=l
i=j}else i=null
s=b.c
if(s===8)new P.hk(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hj(r,b,m).$0()}else if((s&2)!==0)new P.hi(t,r,b).$0()
if(i!=null){H.d(!0)
$.C=i}s=r.b
if(!!J.t(s).$isec){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.a7(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.jN(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.a7(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
lI:function(){var t,s
for(;t=$.ba,t!=null;){$.bN=null
s=t.b
$.ba=s
if(s==null)$.bM=null
t.a.$0()}},
lM:function(){$.iJ=!0
try{P.lI()}finally{$.bN=null
$.iJ=!1
if($.ba!=null)$.$get$iG().$1(P.jW())}},
jR:function(a){var t=new P.d9(a,null)
if($.ba==null){$.bM=t
$.ba=t
if(!$.iJ)$.$get$iG().$1(P.jW())}else{$.bM.b=t
$.bM=t}},
lL:function(a){var t,s,r
t=$.ba
if(t==null){P.jR(a)
$.bN=$.bM
return}s=new P.d9(a,null)
r=$.bN
if(r==null){s.b=t
$.bN=s
$.ba=s}else{s.b=r.b
r.b=s
$.bN=s
if(s.b==null)$.bM=s}},
md:function(a){var t=$.C
if(C.f===t){P.hQ(null,null,C.f,a)
return}t.toString
P.hQ(null,null,t,t.aL(a))},
lu:function(a,b){var t=$.C
if(t===C.f){t.toString
return P.iE(a,b)}return P.iE(a,t.aL(b))},
iE:function(a,b){var t=C.b.J(a.a,1000)
return H.lt(t<0?0:t,b)},
iF:function(a){var t,s
H.d(a!=null)
t=$.C
H.d(a==null?t!=null:a!==t)
s=$.C
$.C=a
return s},
hO:function(a,b,c,d,e){var t={}
t.a=d
P.lL(new P.hP(t,e))},
jP:function(a,b,c,d){var t,s
if($.C===c)return d.$0()
t=P.iF(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.C=s}},
jQ:function(a,b,c,d,e){var t,s
if($.C===c)return d.$1(e)
t=P.iF(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
lK:function(a,b,c,d,e,f){var t,s
if($.C===c)return d.$2(e,f)
t=P.iF(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.C=s}},
hQ:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aL(d):c.dw(d)
P.jR(d)},
fZ:function fZ(a){this.a=a},
fY:function fY(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a){this.a=a},
h0:function h0(a){this.a=a},
h3:function h3(){},
hI:function hI(a,b){this.a=a
this.$ti=b},
db:function db(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hd:function hd(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hl:function hl(a){this.a=a},
hj:function hj(a,b,c){this.a=a
this.b=b
this.c=c},
hi:function hi(a,b,c){this.a=a
this.b=b
this.c=c},
d9:function d9(a,b){this.a=a
this.b=b},
fq:function fq(){},
fs:function fs(a){this.a=a},
ft:function ft(a,b){this.a=a
this.b=b},
fr:function fr(){},
b0:function b0(a,b){this.a=a
this.b=b},
hM:function hM(){},
hP:function hP(a,b){this.a=a
this.b=b},
hy:function hy(){},
hA:function hA(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hB:function hB(a,b){this.a=a
this.b=b},
jp:function(a,b){return new H.aa(0,null,null,null,null,null,0,[a,b])},
K:function(){return new H.aa(0,null,null,null,null,null,0,[null,null])},
aM:function(a){return H.lX(a,new H.aa(0,null,null,null,null,null,0,[null,null]))},
bK:function(a,b){return new P.dc(0,null,null,null,null,null,0,[a,b])},
lD:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
ld:function(a,b,c){var t,s
if(P.iK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bO()
C.a.l(s,a)
try{P.lH(a,t)}finally{H.d(C.a.gas(s)===a)
s.pop()}s=P.jw(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
em:function(a,b,c){var t,s,r
if(P.iK(a))return b+"..."+c
t=new P.bC(b)
s=$.$get$bO()
C.a.l(s,a)
try{r=t
r.a=P.jw(r.ga_(),a,", ")}finally{H.d(C.a.gas(s)===a)
s.pop()}s=t
s.a=s.ga_()+c
s=t.ga_()
return s.charCodeAt(0)==0?s:s},
iK:function(a){var t,s
for(t=0;s=$.$get$bO(),t<s.length;++t)if(a===s[t])return!0
return!1},
lH:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gA(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.q())return
q=H.h(t.gt())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.q()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.q()){if(r<=4){C.a.l(b,H.h(n))
return}p=H.h(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.q();n=m,m=l){l=t.gt();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.h(n)
p=H.h(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
aN:function(a,b,c,d){return new P.hr(0,null,null,null,null,null,0,[d])},
lf:function(a,b){var t,s
t=P.aN(null,null,null,b)
for(s=J.dn(a);s.q();)t.l(0,s.gt())
return t},
lg:function(a){var t,s,r
t={}
if(P.iK(a))return"{...}"
s=new P.bC("")
try{C.a.l($.$get$bO(),a)
r=s
r.a=r.ga_()+"{"
t.a=!0
a.aP(0,new P.ez(t,s))
t=s
t.a=t.ga_()+"}"}finally{t=$.$get$bO()
H.d(C.a.gas(t)===a)
t.pop()}t=s.ga_()
return t.charCodeAt(0)==0?t:t},
iA:function(a,b){var t=new P.ew(null,0,0,0,[b])
t.cV(a,b)
return t},
dc:function dc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hr:function hr(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hs:function hs(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ho:function ho(){},
v:function v(){},
ez:function ez(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ht:function ht(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fi:function fi(){},
fh:function fh(){},
jw:function(a,b,c){var t=J.dn(b)
if(!t.q())return a
if(c.length===0){do a+=H.h(t.gt())
while(t.q())}else{a+=H.h(t.gt())
for(;t.q();)a=a+c+H.h(t.gt())}return a},
kZ:function(a,b){return J.kn(a,b)},
l_:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.h(t)
if(t>=10)return s+"00"+H.h(t)
return s+"000"+H.h(t)},
l0:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
bZ:function(a){if(a>=10)return""+a
return"0"+a},
it:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l2(a)},
l2:function(a){var t=J.t(a)
if(!!t.$isb1)return t.j(a)
return H.f4(a)},
j5:function(a){return new P.ak(!1,null,null,a)},
j6:function(a,b,c){return new P.ak(!0,a,b,c)},
kT:function(a){return new P.ak(!1,null,a,"Must not be null")},
f5:function(a,b,c){return new P.d0(null,null,!0,a,b,"Value not in range")},
by:function(a,b,c,d,e){return new P.d0(b,c,!0,a,d,"Invalid value")},
ju:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.by(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.by(b,a,c,"end",f))
return b},
B:function(a,b,c,d,e){var t=e!=null?e:J.dp(b)
return new P.ei(b,t,!0,a,c,"Index out of range")},
c3:function(a){return new P.hc(a)},
jq:function(a,b,c){var t,s
t=H.O([],[c])
for(s=J.dn(a);s.q();)C.a.l(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
ah:function(a){H.ib(H.h(a))},
aZ:function aZ(){},
G:function G(){},
bh:function bh(a,b){this.a=a
this.b=b},
L:function L(){},
aH:function aH(a){this.a=a},
dJ:function dJ(){},
dK:function dK(){},
b2:function b2(){},
bU:function bU(a){this.a=a},
cZ:function cZ(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d0:function d0(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ei:function ei(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
r:function r(a){this.a=a},
d8:function d8(a){this.a=a},
bB:function bB(a){this.a=a},
a8:function a8(a){this.a=a},
d4:function d4(){},
dC:function dC(a){this.a=a},
hc:function hc(a){this.a=a},
dM:function dM(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
am:function am(){},
cL:function cL(){},
b:function b(){},
aw:function aw(){},
aP:function aP(){},
S:function S(){},
q:function q(){},
bA:function bA(){},
u:function u(){},
bC:function bC(a){this.a=a},
hT:function(a){var t,s,r,q,p
if(a==null)return
t=P.K()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.P)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
lU:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.ky(a,new P.hS(t))
return t},
hS:function hS(a){this.a=a},
mg:function(a){return Math.sqrt(a)},
hq:function hq(){},
hx:function hx(){},
H:function H(){},
dq:function dq(){},
aF:function aF(){},
dN:function dN(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e6:function e6(){},
e9:function e9(){},
a9:function a9(){},
av:function av(){},
eg:function eg(){},
an:function an(){},
es:function es(){},
eA:function eA(){},
eB:function eB(){},
ao:function ao(){},
eP:function eP(){},
eW:function eW(){},
f0:function f0(){},
f1:function f1(){},
f6:function f6(){},
f7:function f7(){},
ff:function ff(){},
fu:function fu(){},
I:function I(){},
fv:function fv(){},
fw:function fw(){},
d5:function d5(){},
fy:function fy(){},
bD:function bD(){},
ap:function ap(){},
fI:function fI(){},
fP:function fP(){},
fR:function fR(){},
fS:function fS(){},
bI:function bI(){},
hC:function hC(){},
hD:function hD(){},
hE:function hE(){},
cj:function cj(){},
ca:function ca(){},
ce:function ce(){},
ch:function ch(){},
cw:function cw(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
du:function du(){},
fb:function fb(){},
fc:function fc(){},
hJ:function hJ(){},
fn:function fn(){},
cp:function cp(){},
cB:function cB(){}},W={
l1:function(a){return"wheel"},
aY:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ae:function(a,b,c,d,e){var t=c==null?null:W.jS(new W.hb(c))
t=new W.ha(0,a,b,t,!1,[e])
t.d5(a,b,c,!1,e)
return t},
jS:function(a){var t=$.C
if(t===C.f)return a
return t.dz(a)},
j:function j(){},
dr:function dr(){},
ds:function ds(){},
Z:function Z(){},
dv:function dv(){},
bV:function bV(){},
dw:function dw(){},
bW:function bW(){},
bX:function bX(){},
bY:function bY(){},
aG:function aG(){},
dA:function dA(){},
y:function y(){},
bg:function bg(){},
dB:function dB(){},
dD:function dD(){},
dE:function dE(){},
bi:function bi(){},
c_:function c_(){},
dF:function dF(){},
dG:function dG(){},
c0:function c0(){},
c1:function c1(){},
dH:function dH(){},
dI:function dI(){},
c2:function c2(){},
i:function i(){},
f:function f(){},
a_:function a_(){},
e4:function e4(){},
e5:function e5(){},
ea:function ea(){},
a0:function a0(){},
ee:function ee(){},
bp:function bp(){},
c5:function c5(){},
ef:function ef(){},
bq:function bq(){},
ej:function ej(){},
aL:function aL(){},
ex:function ex(){},
eC:function eC(){},
eD:function eD(){},
bs:function bs(){},
a1:function a1(){},
eE:function eE(){},
M:function M(){},
eO:function eO(){},
w:function w(){},
cX:function cX(){},
eV:function eV(){},
eY:function eY(){},
a2:function a2(){},
f_:function f_(){},
f2:function f2(){},
f3:function f3(){},
fd:function fd(){},
d2:function d2(){},
fg:function fg(){},
fj:function fj(){},
a3:function a3(){},
fk:function fk(){},
a4:function a4(){},
fm:function fm(){},
a5:function a5(){},
fp:function fp(){},
T:function T(){},
ac:function ac(){},
a6:function a6(){},
U:function U(){},
fz:function fz(){},
fA:function fA(){},
fC:function fC(){},
a7:function a7(){},
aR:function aR(){},
fG:function fG(){},
fH:function fH(){},
b8:function b8(){},
fJ:function fJ(){},
ay:function ay(){},
fO:function fO(){},
fQ:function fQ(){},
fT:function fT(){},
fU:function fU(){},
aT:function aT(){},
bG:function bG(){},
fV:function fV(a){this.a=a},
fW:function fW(){},
aU:function aU(){},
h2:function h2(){},
da:function da(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
hm:function hm(){},
hn:function hn(){},
dd:function dd(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
hK:function hK(){},
hL:function hL(){},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ha:function ha(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hb:function hb(a){this.a=a},
A:function A(){},
e7:function e7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bj:function bj(){},
bk:function bk(){},
bl:function bl(){},
bm:function bm(){},
bn:function bn(){},
bo:function bo(){},
c6:function c6(){},
cq:function cq(){},
cc:function cc(){},
c9:function c9(){},
ck:function ck(){},
cl:function cl(){},
cm:function cm(){},
cn:function cn(){},
co:function co(){},
c7:function c7(){},
cb:function cb(){},
c8:function c8(){},
cd:function cd(){},
cf:function cf(){},
cg:function cg(){},
ci:function ci(){},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
cD:function cD(){},
cE:function cE(){},
cC:function cC(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cu:function cu(){},
cv:function cv(){},
cx:function cx(){},
cF:function cF(){},
cG:function cG(){}},B={
me:function(a){var t,s
t=document
s=W.aL
W.ae(t,"keydown",new B.id(),!1,s)
W.ae(t,"keyup",new B.ie(),!1,s)
if(!$.mf)W.ae(t,"mousemove",new B.ig(),!1,W.M)
s=W.M
W.ae(t,"mousedown",new B.ih(),!1,s)
W.ae(t,"mouseup",new B.ii(),!1,s)},
lh:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.l(3))
s=$.$get$hU()
r=$.$get$bQ()
q=new T.F(new Float32Array(H.l(16)))
q.D()
q=new B.eQ(a,b,c,0,new T.m(t),-0.02,s,r,q,new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),"camera:orbit",!1,!0)
q.cX(a,b,c,d)
return q},
id:function id(){},
ie:function ie(){},
ig:function ig(){},
ih:function ih(){},
ii:function ii(){},
eQ:function eQ(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.fy=a
_.go=b
_.id=c
_.k1=d
_.k2=a0
_.k3=a1
_.k4=a2
_.r1=a3
_.d=a4
_.e=a5
_.f=a6
_.r=a7
_.x=a8
_.a=a9
_.b=b0
_.c=b1},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
eT:function eT(){},
eU:function eU(a){this.a=a},
l6:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.aK(t,$.$get$jj())
C.a.aK(s,$.$get$jk())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.P)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.m(new Float32Array(3))
k.C(l)
l=n.b
k.l(0,s[l])
k.L(0,0.5)
k.B(0)
j=s[l]
i=new T.m(new Float32Array(3))
i.C(j)
j=n.c
i.l(0,s[j])
i.L(0,0.5)
i.B(0)
h=s[j]
g=new T.m(new Float32Array(3))
g.C(h)
g.l(0,s[m])
g.L(0,0.5)
g.B(0)
f=s.length
C.a.l(s,k)
e=s.length
C.a.l(s,i)
d=s.length
C.a.l(s,g)
C.a.l(q,new G.z(m,f,d))
C.a.l(q,new G.z(l,e,f))
C.a.l(q,new G.z(j,d,e))
C.a.l(q,new G.z(f,e,d))}}c=new G.ed(!1,[],[],[],P.K())
c.b9("aTexUV")
c.b9("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.P)(t),++o){n=t[o]
b=s[n.a]
H.d(Math.sqrt(b.gP())<1.01&&Math.sqrt(b.gP())>0.99)
a=s[n.b]
H.d(Math.sqrt(a.gP())<1.01&&Math.sqrt(a.gP())>0.99)
a0=s[n.c]
H.d(Math.sqrt(a0.gP())<1.01&&Math.sqrt(a0.gP())>0.99)
m=b.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
j=new Float32Array(2)
j[0]=0.5*(1+l*0.3183098861837907)
j[1]=m*0.3183098861837907
m=a.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
h=new Float32Array(2)
h[0]=0.5*(1+l*0.3183098861837907)
h[1]=m*0.3183098861837907
m=a0.a
l=Math.atan2(m[2],m[0])
m=Math.acos(m[1])
a1=new Float32Array(2)
a1[0]=0.5*(1+l*0.3183098861837907)
a1[1]=m*0.3183098861837907
c.cM("aNormal",[b,a,a0])
m=new T.m(new Float32Array(3))
m.C(b)
m.L(0,a4)
l=new T.m(new Float32Array(3))
l.C(a)
l.L(0,a4)
a2=new T.m(new Float32Array(3))
a2.C(a0)
a2.L(0,a4)
c.cN([m,l,a2])
c.cL("aTexUV",[new T.ad(j),new T.ad(h),new T.ad(a1)])}return c}},G={
lw:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.h(t[s])}return C.a.ad(t,"\n")},
jM:function(a,b,c){var t,s,r,q
t=J.k(a)
s=t.bN(a,b)
t.b2(a,s,c)
t.bJ(a,s)
r=t.b_(a,s,35713)
if(r!=null&&!r){q=t.aZ(a,s)
P.ah("E:Compilation failed:")
P.ah("E:"+G.lw(c))
P.ah("E:Failure:")
P.ah(C.i.Y("E:",q))
throw H.e(q)}return s},
iC:function(a){var t=new G.cQ(P.K(),a,!1,!0)
t.cW(a)
return t},
ji:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.ip(a[s])
b[t+1]=J.iq(a[s])
b[t+2]=J.iX(a[s])}return b},
l4:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.ip(a[s])
b[t+1]=J.iq(a[s])}return b},
l5:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.ip(a[s])
b[t+1]=J.iq(a[s])
b[t+2]=J.iX(a[s])
b[t+3]=J.kA(a[s])}return b},
l3:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.be(a[s],0)
b[t+1]=J.be(a[s],1)
b[t+2]=J.be(a[s],2)
b[t+3]=J.be(a[s],3)}return b},
lC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gO(t),s=s.gA(s),r=b.x,q=[[P.b,P.o]],p=[P.L],o=[T.az],n=[T.m],m=[T.ad];s.q();){l=s.gt()
if(!r.F(0,l)){k="Dropping unnecessary attribute: "+H.h(l)
if($.jZ>0)H.ib("I: "+k)
continue}j=t.h(0,l)
switch($.$get$W().h(0,l).a){case"vec2":b.a3(l,G.l4(H.dj(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a3(l,G.ji(H.dj(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a3(l,G.l5(H.dj(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a3(l,new Float32Array(H.hN(H.dj(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a3(l,G.l3(H.dj(j,"$isb",q,"$asb"),null),4)
break
default:if(H.at(!1))H.aA("unknown type for "+H.h(l)+" ["+J.kz(j[0]).j(0)+"] ["+new H.ax(H.hY(j),null).j(0)+"] "+H.h(j))}}},
jv:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.aN(null,null,null,P.u)
s=c.b
r=d.b
q=c.f
p=J.ko(b.a)
o=G.jM(b.a,35633,s)
J.iU(b.a,p,o)
n=G.jM(b.a,35632,r)
J.iU(b.a,p,n)
if(q.length>0)J.kM(b.a,p,q,35980)
J.kF(b.a,p)
if(!J.kE(b.a,p,35714))H.E(J.kD(b.a,p))
t=new G.fa(b,c,d,p,P.lf(c.c,null),P.K(),P.K(),t,null,a,!1,!0)
t.cZ(a,b,c,d)
return t},
eF:function eF(){},
d7:function d7(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dx:function dx(){},
dz:function dz(a,b){this.a=a
this.b=b},
eb:function eb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
d6:function d6(a,b,c){this.a=a
this.b=b
this.c=c},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
cR:function cR(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=a0
_.Q=a1
_.ch=a2
_.cx=a3
_.cy=a4
_.a=a5
_.b=a6
_.c=a7},
eX:function eX(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.cy=g
_.db=h
_.d=a0
_.a=a1
_.b=a2
_.c=a3},
fa:function fa(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.ch=a0
_.a=a1
_.b=a2
_.c=a3},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fl:function fl(){},
fB:function fB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bE:function bE(){},
eh:function eh(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
lv:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.l(s))
for(q=0;q<s;++q)r[q]=($.$get$jL().e5()-0.5)*c
s=a.d
s=new G.cR(s,J.iW(s.a),0,P.K(),a.e.x,null,0,-1,null,null,P.K(),"meshdata:"+t,!1,!0)
s.b7(r)
return s},
d1:function d1(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
_.db=a
_.dx=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=a0
_.z=a1
_.Q=a2
_.a=a3
_.b=a4
_.c=a5}},A={
jX:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.C(c)
s=b.d
t.c_(0,s)
r=b.cx
J.b_(b)
q=C.a.gas(e)
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
p.dF(new T.ab(o))
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
a.cR(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.P)(s),++l)A.jX(a,s[l],t,d,e)},
aO:function aO(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
_.ch=a
_.cx=b
_.cy=c
_.db=d
_.dx=e
_.d=f
_.e=g
_.f=a0
_.r=a1
_.x=a2
_.a=a3
_.b=a4
_.c=a5},
bz:function bz(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
f9:function f9(){},
dh:function(a){var t,s
t=C.K.dS(a,0,new A.hZ())
s=536870911&t+(C.b.cp(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
hZ:function hZ(){}},T={
V:function(a,b,c){var t=new T.m(new Float32Array(H.l(3)))
t.Z(a,b,c)
return t},
ab:function ab(a){this.a=a},
F:function F(a){this.a=a},
ad:function ad(a){this.a=a},
m:function m(a){this.a=a},
az:function az(a){this.a=a}},V={
m8:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
t={}
s=document
r=C.B.e7(s,"#webgl-canvas")
q=new G.dz(null,r)
p=(r&&C.q).aV(r,"webgl2",P.aM(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
q.a=p
if(p==null)H.E(P.c3('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.b_(J.kB(p))
if($.jZ>0)P.ah("I: "+o)
J.km(p,0,0,0,1)
J.dm(p,2929)
n=B.lh(15,0,0,r)
p=new T.F(new Float32Array(H.l(16)))
p.D()
o=new T.F(new Float32Array(H.l(16)))
o.D()
m=new G.eX(n,50,1,0.1,1000,p,o,new T.F(new Float32Array(H.l(16))),P.K(),"perspective",!1,!0)
m.bc()
o=G.jv("solid",q,$.$get$kb(),$.$get$ka())
p=[]
l=B.l6(4,1,!0)
k=o.d
j=J.iW(k.a)
i=new G.cR(k,j,4,P.K(),o.e.x,null,0,-1,null,null,P.K(),"meshdata:icosahedron-4",!1,!0)
i.b7(G.ji(l.d,null))
h=l.cS()
i.y=J.im(k.a)
H.d(i.ch!=null)
g=i.ch.length
if(g<768){i.saC(new Uint8Array(H.hN(h)))
i.Q=5121}else if(g<196608){i.saC(new Uint16Array(H.hN(h)))
i.Q=5123}else{i.saC(new Uint32Array(H.hN(h)))
i.Q=5125}J.dl(k.a,j)
j=i.y
h=i.cx
g=J.t(h)
H.d(!!g.$isjI||!!g.$isjJ||!!g.$isjK)
J.dk(k.a,34963,j)
J.iV(k.a,34963,h,35048)
G.lC(l,i)
f=G.iC("head")
k=new T.m(new Float32Array(H.l(3)))
k.Z(0.94,0.72,0.63)
f.E("uColor",k)
k=[]
j=new Float32Array(H.l(9))
h=new T.F(new Float32Array(H.l(16)))
h.D()
g=new T.F(new Float32Array(H.l(16)))
g.D()
e=new Float32Array(H.l(3))
d=new Float32Array(H.l(3))
c=new Float32Array(H.l(3))
b=new Float32Array(H.l(3))
a=G.iC("eye")
a.E("uColor",$.$get$jf())
a0=new Float32Array(H.l(9))
a1=new T.F(new Float32Array(H.l(16)))
a1.D()
a2=new T.F(new Float32Array(H.l(16)))
a2.D()
a3=new A.aO(a,i,[],new T.ab(a0),a1,a2,new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),"leftEye",!1,!0)
a3.ai(-0.2,0.4,-0.8)
a2.L(0,0.2)
C.a.l(k,a3)
a2=new Float32Array(H.l(9))
a1=new T.F(new Float32Array(H.l(16)))
a1.D()
a0=new T.F(new Float32Array(H.l(16)))
a0.D()
a4=new A.aO(a,i,[],new T.ab(a2),a1,a0,new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),"rightEye",!1,!0)
a0.L(0,0.2)
a4.ai(0.2,0.4,-0.8)
C.a.l(k,a4)
a5=G.iC("nose")
a0=new T.m(new Float32Array(H.l(3)))
a0.Z(0.9,0.7,0.6)
a5.E("uColor",a0)
a0=new Float32Array(H.l(9))
a1=new T.F(new Float32Array(H.l(16)))
a1.D()
a2=new T.F(new Float32Array(H.l(16)))
a2.D()
a6=new A.aO(a5,i,[],new T.ab(a0),a1,a2,new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),new T.m(new Float32Array(H.l(3))),"nose",!1,!0)
a2.L(0,0.3)
a6.ai(0,0,-0.9)
C.a.l(k,a6)
H.d(!0)
C.a.l(p,new A.aO(f,i,k,new T.ab(j),h,g,new T.m(e),new T.m(d),new T.m(c),new T.m(b),"head",!1,!0))
b=H.O([],[A.bz])
a7=new R.d1(r,m,null,q,b,17664,0,0,0,0,"main",!1,!0)
a7.cY("main",q,null)
a7.c2(null)
W.ae(window,"resize",a7.gea(),!1,W.i)
H.d(!0)
C.a.l(b,new A.bz(o,[m],p,"objects",!1,!0))
p=G.jv("stars",q,$.$get$k8(),$.$get$k7())
o=[]
k=p.d
j=$.$get$j7()
a8=new G.cQ(P.K(),"stars",!1,!0)
a8.E("cDepthTest",!0)
a8.E("cDepthWrite",!1)
a8.E("cBlendEquation",j)
a8.E("cStencilFunc",$.$get$iD())
a9=s.createElement("canvas")
a9.width=64
a9.height=64
b0=C.q.cs(a9,"2d")
b1=(b0&&C.o).bM(b0,32,32,1,32,32,22);(b1&&C.m).ap(b1,0,"gray")
C.m.ap(b1,1,"black")
b0.fillStyle=b1
C.o.dQ(b0,0,0,64,64)
b1=C.o.bM(b0,32,32,1,32,32,6);(b1&&C.m).ap(b1,0,"white")
C.m.ap(b1,1,"gray")
b0.globalAlpha=0.9
b0.fillStyle=b1
b0.arc(32,32,4,0,6.283185307179586,!1)
b0.fill("nonzero")
s=new G.fB(!1,!1,!1,!0,1,9729,9729)
j=J.kp(k.a)
h=new G.eh(a9,"Utils::Particles",j,3553,k,s)
J.bT(k.a,3553,j)
J.kH(k.a,37440,1)
h.d0(a9)
s.cU(k,3553)
H.d(J.kC(k.a)===0)
J.bT(k.a,3553,null)
a8.E("uTexture",h)
a8.E("uPointSize",1000)
i=R.lv(p,2000,100)
s=new Float32Array(H.l(9))
k=new T.F(new Float32Array(H.l(16)))
k.D()
j=new T.F(new Float32Array(H.l(16)))
j.D()
h=new Float32Array(H.l(3))
g=new Float32Array(H.l(3))
e=new Float32Array(H.l(3))
d=new Float32Array(H.l(3))
H.d(!0)
C.a.l(o,new A.aO(a8,i,[],new T.ab(s),k,j,new T.m(h),new T.m(g),new T.m(e),new T.m(d),i.a,!1,!0))
H.d(!0)
C.a.l(b,new A.bz(p,[m],o,"stars",!1,!0))
t.a=0
new V.i9(t,n,a7).$1(0)},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c}}
var v=[C,H,J,P,W,B,G,R,A,T,V]
setFunctionNamesIfNecessary(v)
var $={}
H.ix.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aQ(a)},
j:function(a){return H.f4(a)},
gw:function(a){return new H.ax(H.hY(a),null)}}
J.en.prototype={
j:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gw:function(a){return C.ae},
$isaZ:1}
J.ep.prototype={
v:function(a,b){return null==b},
j:function(a){return"null"},
gu:function(a){return 0},
gw:function(a){return C.a8}}
J.br.prototype={
gu:function(a){return 0},
gw:function(a){return C.a7},
j:function(a){return String(a)},
$isjo:1}
J.eZ.prototype={}
J.aS.prototype={}
J.aK.prototype={
j:function(a){var t=a[$.$get$jg()]
return t==null?this.cJ(a):J.b_(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isiu:1}
J.aI.prototype={
aN:function(a,b){if(!!a.immutable$list)throw H.e(new P.r(b))},
aM:function(a,b){if(!!a.fixed$length)throw H.e(new P.r(b))},
l:function(a,b){this.aM(a,"add")
a.push(b)},
aK:function(a,b){var t,s,r,q,p
t=a.length
this.aM(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a8(a)))
a.push(q)}},
bZ:function(a,b){return new H.cP(a,b,[H.bd(a,0),null])},
ad:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.h(a[s])
return t.join(b)},
p:function(a,b){return this.h(a,b)},
gdR:function(a){if(a.length>0)return a[0]
throw H.e(H.iv())},
gas:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.iv())},
b1:function(a,b,c,d,e){var t,s
this.aN(a,"setRange")
P.ju(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.by(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.le())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
cE:function(a,b){this.aN(a,"sort")
H.d3(a,0,a.length-1,P.lV())},
b3:function(a){return this.cE(a,null)},
a8:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
j:function(a){return P.em(a,"[","]")},
gA:function(a){return new J.dt(a,a.length,0,null,[H.bd(a,0)])},
gu:function(a){return H.aQ(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aM(a,"set length")
if(b<0)throw H.e(P.by(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.N(a,b))
if(b>=a.length||b<0)throw H.e(H.N(a,b))
return a[b]},
i:function(a,b,c){this.aN(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.N(a,b))
if(b>=a.length||b<0)throw H.e(H.N(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.iw.prototype={}
J.dt.prototype={
gt:function(){return this.d},
q:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.P(t))
r=this.c
if(r>=s){this.sbd(null)
return!1}this.sbd(t[r]);++this.c
return!0},
sbd:function(a){this.d=a}}
J.b3.prototype={
N:function(a,b){var t
if(typeof b!=="number")throw H.e(H.R(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaQ(b)
if(this.gaQ(a)===t)return 0
if(this.gaQ(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaQ:function(a){return a===0?1/a<0:a<0},
a0:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.r(""+a+".round()"))},
dC:function(a,b,c){if(this.N(b,c)>0)throw H.e(H.R(b))
if(this.N(a,b)<0)return b
if(this.N(a,c)>0)return c
return a},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
Y:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a+b},
a2:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a-b},
cq:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a*b},
aw:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bw(a,b)},
J:function(a,b){return(a|0)===a?a/b|0:this.bw(a,b)},
bw:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.r("Result of truncating division is "+H.h(t)+": "+H.h(a)+" ~/ "+b))},
aG:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cp:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return(a&b)>>>0},
cK:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return(a^b)>>>0},
av:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a<b},
ah:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a>b},
cr:function(a,b){if(typeof b!=="number")throw H.e(H.R(b))
return a>=b},
gw:function(a){return C.ah},
$isS:1}
J.cM.prototype={
gw:function(a){return C.ag},
$isL:1,
$iso:1,
$isS:1}
J.eo.prototype={
gw:function(a){return C.af},
$isL:1,
$isS:1}
J.aJ.prototype={
ax:function(a,b){if(b>=a.length)throw H.e(H.N(a,b))
return a.charCodeAt(b)},
Y:function(a,b){if(typeof b!=="string")throw H.e(P.j6(b,null,null))
return a+b},
cG:function(a,b,c){var t
if(c>a.length)throw H.e(P.by(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
cF:function(a,b){return this.cG(a,b,0)},
b5:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.f5(b,null,null))
if(b>c)throw H.e(P.f5(b,null,null))
if(c>a.length)throw H.e(P.f5(c,null,null))
return a.substring(b,c)},
cH:function(a,b){return this.b5(a,b,null)},
N:function(a,b){var t
if(typeof b!=="string")throw H.e(H.R(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
j:function(a){return a},
gu:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gw:function(a){return C.a9},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.N(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$isu:1}
H.c.prototype={$asc:null}
H.b4.prototype={
gA:function(a){return new H.cN(this,this.gk(this),0,null,[H.aB(this,"b4",0)])},
ef:function(a,b){var t,s
t=H.O([],[H.aB(this,"b4",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.p(0,s)
return t},
ee:function(a){return this.ef(a,!0)}}
H.cN.prototype={
gt:function(){return this.d},
q:function(){var t,s,r,q
t=this.a
s=J.ag(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a8(t))
q=this.c
if(q>=r){this.sa5(null)
return!1}this.sa5(s.p(t,q));++this.c
return!0},
sa5:function(a){this.d=a}}
H.cO.prototype={
gA:function(a){return new H.ey(null,J.dn(this.a),this.b,this.$ti)},
gk:function(a){return J.dp(this.a)},
$asam:function(a,b){return[b]}}
H.dL.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.ey.prototype={
q:function(){var t=this.b
if(t.q()){this.sa5(this.c.$1(t.gt()))
return!0}this.sa5(null)
return!1},
gt:function(){return this.a},
sa5:function(a){this.a=a},
$ascL:function(a,b){return[b]}}
H.cP.prototype={
gk:function(a){return J.dp(this.a)},
p:function(a,b){return this.b.$1(J.kv(this.a,b))},
$asc:function(a,b){return[b]},
$asb4:function(a,b){return[b]},
$asam:function(a,b){return[b]}}
H.c4.prototype={}
H.ij.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ik.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hv.prototype={
se0:function(a){this.z=a},
se3:function(a){this.ch=a}}
H.aW.prototype={
bz:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aJ()},
e9:function(a){var t,s,r,q,p
if(!this.y)return
t=this.Q
t.ae(0,a)
if(t.a===0){for(t=this.z;t.length!==0;){s=t.pop()
r=u.globalState.f.a
q=r.b
p=r.a
q=(q-1&p.length-1)>>>0
r.b=q
p[q]=s
if(q===r.c)r.bp();++r.d}this.y=!1}this.aJ()},
dt:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
e8:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.r("removeRange"))
P.ju(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cD:function(a,b){if(!this.r.v(0,a))return
this.db=b},
dV:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.H(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iA(null,null)
this.cx=t}t.S(0,new H.hp(a,c))},
dU:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ar()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.iA(null,null)
this.cx=t}t.S(0,this.ge1())},
dW:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ah(a)
if(b!=null)P.ah(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.b_(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bJ(t,t.r,null,null,[null]),r.c=t.e;r.q();)r.d.H(0,s)},
aa:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.au(o)
p=H.aC(o)
this.dW(q,p)
if(this.db){this.ar()
if(this===u.globalState.e)throw o}}finally{this.cy=H.lR(r)
u.globalState.d=H.k2(t,"$isaW")
if(t!=null)$=t.ge_()
if(this.cx!=null)for(;n=this.cx,!n.gaq(n);)this.cx.c1().$0()}return s},
bY:function(a){return this.b.h(0,a)},
bh:function(a,b){var t=this.b
if(t.F(0,a))throw H.e(P.c3("Registry: ports must be registered only once."))
t.i(0,a,b)},
aJ:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ar()},
ar:function(){var t,s,r
t=this.cx
if(t!=null)t.T(0)
for(t=this.b,s=t.gcm(t),s=s.gA(s);s.q();)s.gt().d8()
t.T(0)
this.c.T(0)
u.globalState.z.ae(0,this.a)
this.dx.T(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].H(0,t[r+1])
this.ch=null}},
ge_:function(){return this.d},
gdE:function(){return this.e}}
H.hp.prototype={
$0:function(){this.a.H(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.h7.prototype={
dI:function(){var t=this.a
if(t.b===t.c)return
return t.c1()},
c4:function(){var t,s,r
t=this.dI()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaq(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.c3("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaq(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aM(["command","close"])
r=new H.af(!0,new P.dc(0,null,null,null,null,null,0,[null,P.o])).I(r)
s.toString
self.postMessage(r)}return!1}t.e6()
return!0},
bu:function(){if(self.window!=null)new H.h8(this).$0()
else for(;this.c4(););},
af:function(){var t,s,r,q,p
if(!u.globalState.x)this.bu()
else try{this.bu()}catch(r){t=H.au(r)
s=H.aC(r)
q=u.globalState.Q
p=P.aM(["command","error","msg",H.h(t)+"\n"+H.h(s)])
p=new H.af(!0,P.bK(null,P.o)).I(p)
q.toString
self.postMessage(p)}}}
H.h8.prototype={
$0:function(){if(!this.a.c4())return
P.lu(C.r,this)},
$S:function(){return{func:1,v:true}}}
H.aX.prototype={
e6:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.aa(this.b)}}
H.hu.prototype={}
H.ek.prototype={
$0:function(){H.la(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.el.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bc(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bc(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aJ()},
$S:function(){return{func:1,v:true}}}
H.h1.prototype={}
H.b9.prototype={
H:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.lF(b)
if(t.gdE()===s){s=J.ag(r)
switch(s.h(r,0)){case"pause":t.bz(s.h(r,1),s.h(r,2))
break
case"resume":t.e9(s.h(r,1))
break
case"add-ondone":t.dt(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.e8(s.h(r,1))
break
case"set-errors-fatal":t.cD(s.h(r,1),s.h(r,2))
break
case"ping":t.dV(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.dU(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.ae(0,s)
break}return}u.globalState.f.a.S(0,new H.aX(t,new H.hw(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.b9){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.hw.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.d6(0,this.b)},
$S:function(){return{func:1}}}
H.bL.prototype={
H:function(a,b){var t,s,r
t=P.aM(["command","message","port",this,"msg",b])
s=new H.af(!0,P.bK(null,P.o)).I(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
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
gu:function(a){return C.b.cK((this.b<<16^this.a<<8)>>>0,this.c)}}
H.b6.prototype={
d8:function(){this.c=!0
this.b=null},
d6:function(a,b){if(this.c)return
this.b.$1(b)},
$islp:1}
H.fD.prototype={
d1:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.aX(s,new H.fE(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bP(new H.fF(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.r("Timer greater than 0."))}}}
H.fE.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.fF.prototype={
$0:function(){this.a.c=null
H.i8()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.al.prototype={
gu:function(a){var t=this.a
t=C.b.aG(t,0)^C.b.J(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
v:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.al){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.af.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.t(a)
if(!!t.$isbt)return["buffer",a]
if(!!t.$isb5)return["typed",a]
if(!!t.$isn)return this.cz(a)
if(!!t.$isl7){r=this.gcu()
q=t.gO(a)
q=H.iB(q,r,H.aB(q,"am",0),null)
q=P.jq(q,!0,H.aB(q,"am",0))
t=t.gcm(a)
t=H.iB(t,r,H.aB(t,"am",0),null)
return["map",q,P.jq(t,!0,H.aB(t,"am",0))]}if(!!t.$isjo)return this.cA(a)
if(!!t.$isa)this.ck(a)
if(!!t.$islp)this.ag(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isb9)return this.cB(a)
if(!!t.$isbL)return this.cC(a)
if(!!t.$isb1){p=a.$static_name
if(p==null)this.ag(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isal)return["capability",a.a]
if(!(a instanceof P.q))this.ck(a)
return["dart",u.classIdExtractor(a),this.cw(u.classFieldsExtractor(a))]},
ag:function(a,b){throw H.e(new P.r((b==null?"Can't transmit:":b)+" "+H.h(a)))},
ck:function(a){return this.ag(a,null)},
cz:function(a){var t
H.d(typeof a!=="string")
t=this.cv(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ag(a,"Can't serialize indexable: ")},
cv:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cw:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
cA:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ag(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
cC:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cB:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.aV.prototype={
U:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.j5("Bad serialized message: "+H.h(a)))
switch(C.a.gdR(a)){case"ref":H.d(J.D(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.D(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.D(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.D(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.O(this.a9(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.O(this.a9(t),[null])
case"mutable":H.d(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.a9(t)
case"const":H.d(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.O(this.a9(t),[null])
s.fixed$length=Array
return s
case"map":return this.dL(a)
case"sendport":return this.dM(a)
case"raw sendport":H.d(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.dK(a)
case"function":H.d(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.D(a[0],"capability"))
return new H.al(a[1])
case"dart":H.d(J.D(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.a9(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.h(a))}},
a9:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.U(a[t]))
return a},
dL:function(a){var t,s,r,q,p
H.d(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.K()
C.a.l(this.b,r)
t=J.kG(t,this.gdJ()).ee(0)
for(q=J.ag(s),p=0;p<t.length;++p)r.i(0,t[p],this.U(q.h(s,p)))
return r},
dM:function(a){var t,s,r,q,p,o,n
H.d(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.bY(r)
if(o==null)return
n=new H.b9(o,s)}else n=new H.bL(t,r,s)
C.a.l(this.b,n)
return n},
dK:function(a){var t,s,r,q,p,o
H.d(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ag(t),p=J.ag(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.U(p.h(s,o))
return r}}
H.f8.prototype={}
H.fK.prototype={
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
H.cY.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.h(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.er.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.h(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.h(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.h(this.a)+")"}}
H.fN.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.il.prototype={
$1:function(a){if(!!J.t(a).$isb2)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.de.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.i3.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.i4.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.i5.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.i6.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.i7.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b1.prototype={
j:function(a){return"Closure '"+H.d_(this).trim()+"'"},
$isiu:1,
gei:function(){return this},
$D:null}
H.fx.prototype={}
H.fo.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bf.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bf))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aQ(this.a)
else s=typeof t!=="object"?J.aj(t):H.aQ(t)
return(s^H.aQ(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.h(this.d)+"' of "+H.f4(t)}}
H.fM.prototype={
j:function(a){return this.a}}
H.dy.prototype={
j:function(a){return this.a}}
H.fe.prototype={
j:function(a){return"RuntimeError: "+H.h(this.a)}}
H.fX.prototype={
j:function(a){return C.i.Y("Assertion failed: ",P.it(this.a))}}
H.ax.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.aj(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.ax){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aa.prototype={
gk:function(a){return this.a},
gaq:function(a){return this.a===0},
gO:function(a){return new H.eu(this,[H.bd(this,0)])},
gcm:function(a){return H.iB(this.gO(this),new H.eq(this),H.bd(this,0),H.bd(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bm(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bm(s,b)}else return this.dX(b)},
dX:function(a){var t=this.d
if(t==null)return!1
return this.ac(this.ao(t,this.ab(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.a6(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.a6(r,b)
return s==null?null:s.b}else return this.dY(b)},
dY:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.ao(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aD()
this.b=t}this.bf(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aD()
this.c=s}this.bf(s,b,c)}else{r=this.d
if(r==null){r=this.aD()
this.d=r}q=this.ab(b)
p=this.ao(r,q)
if(p==null)this.aF(r,q,[this.aE(b,c)])
else{o=this.ac(p,b)
if(o>=0)p[o].b=c
else p.push(this.aE(b,c))}}},
ae:function(a,b){if(typeof b==="string")return this.bs(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bs(this.c,b)
else return this.dZ(b)},
dZ:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.ao(t,this.ab(a))
r=this.ac(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bx(q)
return q.b},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aP:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a8(this))
t=t.c}},
bf:function(a,b,c){var t=this.a6(a,b)
if(t==null)this.aF(a,b,this.aE(b,c))
else t.b=c},
bs:function(a,b){var t
if(a==null)return
t=this.a6(a,b)
if(t==null)return
this.bx(t)
this.bn(a,b)
return t.b},
aE:function(a,b){var t,s
t=new H.et(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bx:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ab:function(a){return J.aj(a)&0x3ffffff},
ac:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
j:function(a){return P.lg(this)},
a6:function(a,b){return a[b]},
ao:function(a,b){return a[b]},
aF:function(a,b,c){H.d(c!=null)
a[b]=c},
bn:function(a,b){delete a[b]},
bm:function(a,b){return this.a6(a,b)!=null},
aD:function(){var t=Object.create(null)
this.aF(t,"<non-identifier-key>",t)
this.bn(t,"<non-identifier-key>")
return t},
$isl7:1}
H.eq.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.et.prototype={}
H.eu.prototype={
gk:function(a){return this.a.a},
gA:function(a){var t,s
t=this.a
s=new H.ev(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.ev.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a8(t))
else{t=this.c
if(t==null){this.sbe(null)
return!1}else{this.sbe(t.a)
this.c=this.c.c
return!0}}},
sbe:function(a){this.d=a}}
H.i_.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.i0.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.u]}}}
H.i1.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.u]}}}
H.bt.prototype={
gw:function(a){return C.a0},
$isbt:1}
H.b5.prototype={$isb5:1}
H.eG.prototype={
gw:function(a){return C.a1}}
H.cT.prototype={
gk:function(a){return a.length},
$isn:1,
$asn:function(){},
$isp:1,
$asp:function(){}}
H.cU.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
a[b]=c}}
H.cV.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.cS.prototype={
gw:function(a){return C.a2},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]},
$ise8:1}
H.eH.prototype={
gw:function(a){return C.a3},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]}}
H.eI.prototype={
gw:function(a){return C.a4},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.eJ.prototype={
gw:function(a){return C.a5},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isjl:1}
H.eK.prototype={
gw:function(a){return C.a6},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.eL.prototype={
gw:function(a){return C.aa},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isjI:1}
H.eM.prototype={
gw:function(a){return C.ab},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isjJ:1}
H.cW.prototype={
gw:function(a){return C.ac},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.eN.prototype={
gw:function(a){return C.ad},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.N(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isjK:1}
H.bu.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.o]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bv.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.L]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.L]}}
H.bw.prototype={
$asn:function(){},
$asc:function(){return[P.L]},
$asp:function(){},
$asb:function(){return[P.L]}}
H.bx.prototype={
$asn:function(){},
$asc:function(){return[P.o]},
$asp:function(){},
$asb:function(){return[P.o]}}
P.fZ.prototype={
$1:function(a){var t,s
H.i8()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.fY.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.h_.prototype={
$0:function(){H.i8()
this.a.$0()},
$S:function(){return{func:1}}}
P.h0.prototype={
$0:function(){H.i8()
this.a.$0()},
$S:function(){return{func:1}}}
P.h3.prototype={}
P.hI.prototype={
dD:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.bB("Future already completed"))
t.az(b)}}
P.db.prototype={
e4:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.aS(this.d,a.a)},
dT:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bc(s,{func:1,args:[P.q,P.bA]}))return t.eb(s,a.a,a.b)
else return t.aS(s,a.a)}}
P.as.prototype={
c9:function(a,b){var t,s,r
t=$.C
if(t!==C.f){t.toString
if(b!=null)b=P.lJ(b,t)}s=new P.as(0,t,null,[null])
r=b==null?1:3
this.bg(new P.db(null,s,r,a,b,[H.bd(this,0),null]))
return s},
c8:function(a){return this.c9(a,null)},
bi:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bg:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.k2(this.c,"$isdb")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bg(a)
return}this.bi(t)}H.d(this.a>=4)
t=this.b
t.toString
P.hQ(null,null,t,new P.hd(this,a))}},
br:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.br(a)
return}this.bi(s)}H.d(this.a>=4)
t.a=this.a7(a)
s=this.b
s.toString
P.hQ(null,null,s,new P.hh(t,this))}},
bt:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.a7(t)},
a7:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
az:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.hR(a,"$isec",t,"$asec"))if(H.hR(a,"$isas",t,null))P.jN(a,this)
else P.lB(a,this)
else{s=this.bt()
H.d(this.a<4)
this.a=4
this.c=a
P.bH(this,s)}},
al:function(a,b){var t
H.d(this.a<4)
t=this.bt()
H.d(this.a<4)
this.a=8
this.c=new P.b0(a,b)
P.bH(this,t)},
da:function(a){return this.al(a,null)},
$isec:1,
gaH:function(){return this.a},
gdn:function(){return this.c}}
P.hd.prototype={
$0:function(){P.bH(this.a,this.b)},
$S:function(){return{func:1}}}
P.hh.prototype={
$0:function(){P.bH(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.he.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.az(a)},
$S:function(){return{func:1,args:[,]}}}
P.hf.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.al(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hg.prototype={
$0:function(){this.a.al(this.b,this.c)},
$S:function(){return{func:1}}}
P.hk.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.c3(q.d)}catch(n){s=H.au(n)
r=H.aC(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b0(s,r)
p.a=!0
return}if(!!J.t(t).$isec){if(t instanceof P.as&&t.gaH()>=4){if(t.gaH()===8){q=t
H.d(q.gaH()===8)
p=this.b
p.b=q.gdn()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.c8(new P.hl(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hl.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hj.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.aS(r.d,this.c)}catch(q){t=H.au(q)
s=H.aC(q)
r=this.a
r.b=new P.b0(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hi.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.e4(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.dT(t)
p.a=!1}}catch(o){s=H.au(o)
r=H.aC(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b0(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.d9.prototype={}
P.fq.prototype={
gk:function(a){var t,s
t={}
s=new P.as(0,$.C,null,[P.o])
t.a=0
this.e2(new P.fs(t),!0,new P.ft(t,s),s.gd9())
return s}}
P.fs.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.ft.prototype={
$0:function(){this.b.az(this.a.a)},
$S:function(){return{func:1}}}
P.fr.prototype={}
P.b0.prototype={
j:function(a){return H.h(this.a)},
$isb2:1}
P.hM.prototype={}
P.hP.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.cZ()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.hy.prototype={
ec:function(a){var t,s,r
try{if(C.f===$.C){a.$0()
return}P.jP(null,null,this,a)}catch(r){t=H.au(r)
s=H.aC(r)
P.hO(null,null,this,t,s)}},
ed:function(a,b){var t,s,r
try{if(C.f===$.C){a.$1(b)
return}P.jQ(null,null,this,a,b)}catch(r){t=H.au(r)
s=H.aC(r)
P.hO(null,null,this,t,s)}},
dw:function(a){return new P.hA(this,a)},
aL:function(a){return new P.hz(this,a)},
dz:function(a){return new P.hB(this,a)},
h:function(a,b){return},
c3:function(a){if($.C===C.f)return a.$0()
return P.jP(null,null,this,a)},
aS:function(a,b){if($.C===C.f)return a.$1(b)
return P.jQ(null,null,this,a,b)},
eb:function(a,b,c){if($.C===C.f)return a.$2(b,c)
return P.lK(null,null,this,a,b,c)}}
P.hA.prototype={
$0:function(){return this.a.c3(this.b)},
$S:function(){return{func:1}}}
P.hz.prototype={
$0:function(){return this.a.ec(this.b)},
$S:function(){return{func:1}}}
P.hB.prototype={
$1:function(a){return this.a.ed(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dc.prototype={
ab:function(a){return H.ma(a)&0x3ffffff},
ac:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hr.prototype={
gA:function(a){var t=new P.bJ(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
a8:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dc(b)},
dc:function(a){var t=this.d
if(t==null)return!1
return this.an(t[this.am(a)],a)>=0},
bY:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.a8(0,a)?a:null
else return this.dk(a)},
dk:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.am(a)]
r=this.an(s,a)
if(r<0)return
return J.be(s,r).gde()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bj(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bj(r,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.lD()
this.d=t}s=this.am(b)
r=t[s]
if(r==null){q=[this.ay(b)]
H.d(q!=null)
t[s]=q}else{if(this.an(r,b)>=0)return!1
r.push(this.ay(b))}return!0},
ae:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bk(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bk(this.c,b)
else return this.dl(0,b)},
dl:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.am(b)]
r=this.an(s,b)
if(r<0)return!1
this.bl(s.splice(r,1)[0])
return!0},
T:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bj:function(a,b){var t
if(a[b]!=null)return!1
t=this.ay(b)
H.d(!0)
a[b]=t
return!0},
bk:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bl(t)
delete a[b]
return!0},
ay:function(a){var t,s
t=new P.hs(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bl:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
am:function(a){return J.aj(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hs.prototype={
gde:function(){return this.a}}
P.bJ.prototype={
gt:function(){return this.d},
q:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a8(t))
else{t=this.c
if(t==null){this.sa4(null)
return!1}else{this.sa4(t.a)
this.c=this.c.b
return!0}}},
sa4:function(a){this.d=a}}
P.ho.prototype={}
P.v.prototype={
gA:function(a){return new H.cN(a,this.gk(a),0,null,[H.aB(a,"v",0)])},
p:function(a,b){return this.h(a,b)},
bZ:function(a,b){return new H.cP(a,b,[H.aB(a,"v",0),null])},
dS:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a8(a))}return s},
j:function(a){return P.em(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.ez.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.h(a)
t.a=s+": "
t.a+=H.h(b)},
$S:function(){return{func:1,args:[,,]}}}
P.ew.prototype={
gA:function(a){return new P.ht(this,this.c,this.d,this.b,null,this.$ti)},
gaq:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
p:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ah(0,b)||b>=t)H.E(P.B(b,this,"index",null,t))
return this.a[(C.b.Y(this.b,b)&this.a.length-1)>>>0]},
T:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.em(this,"{","}")},
c1:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.iv());++this.d
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
if(this.b===t)this.bp();++this.d},
bp:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.O(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b1(s,0,q,t,r)
C.a.b1(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbv(s)},
cV:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbv(H.O(t,[b]))},
sbv:function(a){this.a=a},
$asc:null}
P.ht.prototype={
gt:function(){return this.e},
q:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a8(t))
s=this.d
if(s===this.b){this.sa4(null)
return!1}this.sa4(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sa4:function(a){this.e=a}}
P.fi.prototype={
j:function(a){return P.em(this,"{","}")},
$isc:1,
$asc:null}
P.fh.prototype={}
P.aZ.prototype={}
P.G.prototype={}
P.bh.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.bh))return!1
return this.a===b.a&&this.b===b.b},
N:function(a,b){return C.b.N(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aG(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.l_(H.lo(this))
s=P.bZ(H.lm(this))
r=P.bZ(H.li(this))
q=P.bZ(H.lj(this))
p=P.bZ(H.ll(this))
o=P.bZ(H.ln(this))
n=P.l0(H.lk(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isG:1,
$asG:function(){return[P.bh]}}
P.L.prototype={$isG:1,
$asG:function(){return[P.S]}}
P.aH.prototype={
av:function(a,b){return C.b.av(this.a,b.gdd())},
ah:function(a,b){return C.b.ah(this.a,b.gdd())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aH))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
N:function(a,b){return C.b.N(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.dK()
s=this.a
if(s<0)return"-"+new P.aH(0-s).j(0)
r=t.$1(C.b.J(s,6e7)%60)
q=t.$1(C.b.J(s,1e6)%60)
p=new P.dJ().$1(s%1e6)
return""+C.b.J(s,36e8)+":"+H.h(r)+":"+H.h(q)+"."+H.h(p)},
$isG:1,
$asG:function(){return[P.aH]}}
P.dJ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.u,args:[P.o]}}}
P.dK.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.u,args:[P.o]}}}
P.b2.prototype={}
P.bU.prototype={
j:function(a){return"Assertion failed"}}
P.cZ.prototype={
j:function(a){return"Throw of null."}}
P.ak.prototype={
gaB:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaA:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.h(t)
q=this.gaB()+s+r
if(!this.a)return q
p=this.gaA()
o=P.it(this.b)
return q+p+": "+H.h(o)}}
P.d0.prototype={
gaB:function(){return"RangeError"},
gaA:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.h(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.h(t)
else if(r>t)s=": Not in range "+H.h(t)+".."+H.h(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.h(t)}return s}}
P.ei.prototype={
gaB:function(){return"RangeError"},
gaA:function(){H.d(this.a)
if(J.kf(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.h(t)},
gk:function(a){return this.f}}
P.r.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.d8.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.bB.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a8.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.h(P.it(t))+"."}}
P.d4.prototype={
j:function(a){return"Stack Overflow"},
$isb2:1}
P.dC.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hc.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.h(t)}}
P.dM.prototype={
j:function(a){return"Expando:"+H.h(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.j6(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jr(b,"expando$values")
return s==null?null:H.jr(s,t)}}
P.o.prototype={$isG:1,
$asG:function(){return[P.S]}}
P.am.prototype={
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gA(this)
for(s=0;t.q();)++s
return s},
p:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.kT("index"))
if(b<0)H.E(P.by(b,0,null,"index",null))
for(t=this.gA(this),s=0;t.q();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.B(b,this,"index",null,s))},
j:function(a){return P.ld(this,"(",")")}}
P.cL.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aw.prototype={}
P.aP.prototype={
gu:function(a){return P.q.prototype.gu.call(this,this)},
j:function(a){return"null"}}
P.S.prototype={$isG:1,
$asG:function(){return[P.S]}}
P.q.prototype={constructor:P.q,$isq:1,
v:function(a,b){return this===b},
gu:function(a){return H.aQ(this)},
j:function(a){return H.f4(this)},
gw:function(a){return new H.ax(H.hY(this),null)},
toString:function(){return this.j(this)}}
P.bA.prototype={}
P.u.prototype={$isG:1,
$asG:function(){return[P.u]}}
P.bC.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga_:function(){return this.a}}
W.j.prototype={}
W.dr.prototype={
j:function(a){return String(a)},
$isa:1}
W.ds.prototype={
j:function(a){return String(a)},
$isa:1}
W.Z.prototype={$isq:1}
W.dv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isp:1,
$asp:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.bV.prototype={}
W.dw.prototype={$isa:1}
W.bW.prototype={
aV:function(a,b,c){if(c!=null)return this.dg(a,b,P.lU(c,null))
return this.dh(a,b)},
cs:function(a,b){return this.aV(a,b,null)},
dg:function(a,b,c){return a.getContext(b,c)},
dh:function(a,b){return a.getContext(b)}}
W.bX.prototype={
ap:function(a,b,c){return a.addColorStop(b,c)}}
W.bY.prototype={
bM:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
dQ:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
au:function(a){return P.hT(a.getContextAttributes())}}
W.aG.prototype={$isa:1,
gk:function(a){return a.length}}
W.dA.prototype={$isa:1}
W.y.prototype={$isq:1}
W.bg.prototype={
gk:function(a){return a.length}}
W.dB.prototype={}
W.dD.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.bi.prototype={
e7:function(a,b){return a.querySelector(b)}}
W.c_.prototype={$isa:1}
W.dF.prototype={
j:function(a){return String(a)}}
W.dG.prototype={
gat:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.c0.prototype={
gat:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.c1.prototype={
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(this.gX(a))+" x "+H.h(this.gW(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isH)return!1
return a.left===t.gaR(b)&&a.top===t.gaU(b)&&this.gX(a)===t.gX(b)&&this.gW(a)===t.gW(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gX(a)
q=this.gW(a)
return W.jO(W.aY(W.aY(W.aY(W.aY(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gW:function(a){return a.height},
gaR:function(a){return a.left},
gaU:function(a){return a.top},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isH:1,
$asH:function(){}}
W.dH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
$isp:1,
$asp:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.dI.prototype={
gk:function(a){return a.length}}
W.c2.prototype={
j:function(a){return a.localName},
$isa:1}
W.i.prototype={$isq:1,$isi:1}
W.f.prototype={
d7:function(a,b,c,d){return a.addEventListener(b,H.bP(c,1),!1)},
$isq:1,
$isf:1}
W.a_.prototype={$isq:1}
W.e4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isp:1,
$asp:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.e5.prototype={
gk:function(a){return a.length}}
W.ea.prototype={
gk:function(a){return a.length}}
W.a0.prototype={$isq:1}
W.ee.prototype={
gk:function(a){return a.length}}
W.bp.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$isp:1,
$asp:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.c5.prototype={}
W.ef.prototype={
H:function(a,b){return a.send(b)}}
W.bq.prototype={}
W.ej.prototype={$isa:1}
W.aL.prototype={$isq:1,$isi:1,$isaL:1}
W.ex.prototype={
j:function(a){return String(a)}}
W.eC.prototype={
gk:function(a){return a.length}}
W.eD.prototype={
ej:function(a,b,c){return a.send(b,c)},
H:function(a,b){return a.send(b)}}
W.bs.prototype={}
W.a1.prototype={$isq:1}
W.eE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a1]},
$isc:1,
$asc:function(){return[W.a1]},
$isp:1,
$asp:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.M.prototype={$isq:1,$isi:1,$isM:1}
W.eO.prototype={$isa:1}
W.w.prototype={
j:function(a){var t=a.nodeValue
return t==null?this.cI(a):t},
$isq:1,
$isf:1}
W.cX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$isp:1,
$asp:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.eV.prototype={$isa:1}
W.eY.prototype={
gk:function(a){return a.length}}
W.a2.prototype={$isq:1,
gk:function(a){return a.length}}
W.f_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isp:1,
$asp:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.f2.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.f3.prototype={
H:function(a,b){return a.send(b)}}
W.fd.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.d2.prototype={
H:function(a,b){return a.send(b)}}
W.fg.prototype={
gk:function(a){return a.length}}
W.fj.prototype={$isa:1}
W.a3.prototype={$isq:1,$isf:1}
W.fk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isp:1,
$asp:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.a4.prototype={$isq:1}
W.fm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a4]},
$isc:1,
$asc:function(){return[W.a4]},
$isp:1,
$asp:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.a5.prototype={$isq:1,
gk:function(a){return a.length}}
W.fp.prototype={
h:function(a,b){return this.bo(a,b)},
aP:function(a,b){var t,s
for(t=0;!0;++t){s=this.dj(a,t)
if(s==null)return
b.$2(s,this.bo(a,s))}},
gk:function(a){return a.length},
bo:function(a,b){return a.getItem(b)},
dj:function(a,b){return a.key(b)}}
W.T.prototype={$isq:1}
W.ac.prototype={}
W.a6.prototype={$isq:1,$isf:1}
W.U.prototype={$isq:1,$isf:1}
W.fz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.U]},
$isc:1,
$asc:function(){return[W.U]},
$isp:1,
$asp:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.fA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.fC.prototype={
gk:function(a){return a.length}}
W.a7.prototype={$isq:1}
W.aR.prototype={$isq:1,$isi:1,$isaR:1}
W.fG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.fH.prototype={
gk:function(a){return a.length}}
W.b8.prototype={}
W.fJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ay.prototype={}
W.fO.prototype={
j:function(a){return String(a)},
$isa:1}
W.fQ.prototype={
gk:function(a){return a.length}}
W.fT.prototype={
gk:function(a){return a.length}}
W.fU.prototype={
H:function(a,b){return a.send(b)}}
W.aT.prototype={
gdH:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.r("deltaY is not supported"))},
$isq:1,
$isi:1,
$isM:1,
$isaT:1}
W.bG.prototype={
gdu:function(a){var t,s
t=P.S
s=new P.as(0,$.C,null,[t])
this.df(a)
this.dm(a,W.jS(new W.fV(new P.hI(s,[t]))))
return s},
dm:function(a,b){return a.requestAnimationFrame(H.bP(b,1))},
df:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.fV.prototype={
$1:function(a){this.a.dD(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.fW.prototype={$isa:1}
W.aU.prototype={$isa:1}
W.h2.prototype={
j:function(a){return"Rectangle ("+H.h(a.left)+", "+H.h(a.top)+") "+H.h(a.width)+" x "+H.h(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.t(b)
if(!t.$isH)return!1
s=a.left
r=t.gaR(b)
if(s==null?r==null:s===r){s=a.top
r=t.gaU(b)
if(s==null?r==null:s===r){s=a.width
r=t.gX(b)
if(s==null?r==null:s===r){s=a.height
t=t.gW(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.aj(a.left)
s=J.aj(a.top)
r=J.aj(a.width)
q=J.aj(a.height)
return W.jO(W.aY(W.aY(W.aY(W.aY(0,t),s),r),q))},
$isH:1,
$asH:function(){},
gW:function(a){return a.height},
gaR:function(a){return a.left},
gaU:function(a){return a.top},
gX:function(a){return a.width}}
W.da.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.H]},
$isc:1,
$asc:function(){return[P.H]},
$isp:1,
$asp:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$isp:1,
$asp:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.h5.prototype={$isa:1}
W.h6.prototype={
gW:function(a){return a.height},
gX:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hm.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isp:1,
$asp:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.hn.prototype={$isa:1}
W.dd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.w]},
$isc:1,
$asc:function(){return[W.w]},
$isp:1,
$asp:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.hF.prototype={$isa:1}
W.hG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isp:1,
$asp:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.hH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.T]},
$isc:1,
$asc:function(){return[W.T]},
$isp:1,
$asp:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.hK.prototype={$isa:1}
W.hL.prototype={$isa:1}
W.h9.prototype={
e2:function(a,b,c,d){return W.ae(this.a,this.b,a,!1,H.bd(this,0))}}
W.iH.prototype={}
W.ha.prototype={
dr:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.kg(r,this.c,t,!1)}},
d5:function(a,b,c,d,e){this.dr()}}
W.hb.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.A.prototype={
gA:function(a){return new W.e7(a,this.gk(a),-1,null,[H.aB(a,"A",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.e7.prototype={
q:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbq(J.be(this.a,t))
this.c=t
return!0}this.sbq(null)
this.c=s
return!1},
gt:function(){return this.d},
sbq:function(a){this.d=a}}
W.bj.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.bk.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.bl.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.bm.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.bn.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.bo.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.c6.prototype={}
W.cq.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cc.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.c9.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.ck.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.cl.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cm.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.co.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.c7.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.cb.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.c8.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cd.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cf.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.cg.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.ci.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.U]},
$isb:1,
$asb:function(){return[W.U]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.ct.prototype={$isc:1,
$asc:function(){return[P.H]},
$isb:1,
$asb:function(){return[P.H]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.a1]},
$isb:1,
$asb:function(){return[W.a1]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.a4]},
$isb:1,
$asb:function(){return[W.a4]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cI.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.T]},
$isb:1,
$asb:function(){return[W.T]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.w]},
$isb:1,
$asb:function(){return[W.w]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
P.hS.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.u,,]}}}
P.hq.prototype={
e5:function(){return Math.random()}}
P.hx.prototype={}
P.H.prototype={$asH:null}
P.dq.prototype={$isa:1}
P.aF.prototype={$isa:1}
P.dN.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dO.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dP.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dQ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dR.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dS.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dT.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dU.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dV.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dX.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dY.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.dZ.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e_.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.e0.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e1.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.e2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e3.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e6.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.a9.prototype={}
P.av.prototype={$isa:1}
P.eg.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.an.prototype={$isq:1}
P.es.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.eA.prototype={$isa:1}
P.eB.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ao.prototype={$isq:1}
P.eP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.eW.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f0.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f1.prototype={
gk:function(a){return a.length}}
P.f6.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.f7.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ff.prototype={$isa:1}
P.fu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.I.prototype={$isa:1}
P.fv.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fw.prototype={$isa:1}
P.d5.prototype={}
P.fy.prototype={$isa:1}
P.bD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ap.prototype={$isq:1}
P.fI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return this.V(a,b)},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
V:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.fP.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fR.prototype={$isa:1}
P.fS.prototype={$isa:1}
P.bI.prototype={$isa:1}
P.hC.prototype={$isa:1}
P.hD.prototype={$isa:1}
P.hE.prototype={$isa:1}
P.cj.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.ca.prototype={$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.ce.prototype={$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.ch.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cw.prototype={$isc:1,
$asc:function(){return[P.ap]},
$isb:1,
$asb:function(){return[P.ap]}}
P.cy.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.ao]},
$isb:1,
$asb:function(){return[P.ao]}}
P.cA.prototype={$isc:1,
$asc:function(){return[P.an]},
$isb:1,
$asb:function(){return[P.an]}}
P.du.prototype={
gk:function(a){return a.length}}
P.fb.prototype={
by:function(a,b){return a.activeTexture(b)},
bA:function(a,b,c){return a.attachShader(b,c)},
bB:function(a,b,c){return a.bindBuffer(b,c)},
bC:function(a,b,c){return a.bindFramebuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b){return a.clear(b)},
bI:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bJ:function(a,b){return a.compileShader(b)},
bK:function(a){return a.createBuffer()},
bL:function(a){return a.createProgram()},
bN:function(a,b){return a.createShader(b)},
bO:function(a){return a.createTexture()},
bQ:function(a,b){return a.depthMask(b)},
bR:function(a,b){return a.disable(b)},
bS:function(a,b,c,d){return a.drawArrays(b,c,d)},
bT:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bU:function(a,b){return a.enable(b)},
bV:function(a,b){return a.enableVertexAttribArray(b)},
au:function(a){return P.hT(a.getContextAttributes())},
aW:function(a){return a.getError()},
aX:function(a,b){return a.getProgramInfoLog(b)},
aY:function(a,b,c){return a.getProgramParameter(b,c)},
aZ:function(a,b){return a.getShaderInfoLog(b)},
b_:function(a,b,c){return a.getShaderParameter(b,c)},
b0:function(a,b,c){return a.getUniformLocation(b,c)},
bX:function(a,b){return a.linkProgram(b)},
c0:function(a,b,c){return a.pixelStorei(b,c)},
b2:function(a,b,c){return a.shaderSource(b,c)},
b4:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){this.aI(a,b,c,d,e,f,g)
return},
c5:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
aI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c6:function(a,b,c,d){return a.texParameterf(b,c,d)},
c7:function(a,b,c,d){return a.texParameteri(b,c,d)},
ca:function(a,b,c){return a.uniform1f(b,c)},
cb:function(a,b,c){return a.uniform1fv(b,c)},
cc:function(a,b,c){return a.uniform1i(b,c)},
cd:function(a,b,c){return a.uniform1iv(b,c)},
ce:function(a,b,c){return a.uniform2fv(b,c)},
cf:function(a,b,c){return a.uniform3fv(b,c)},
cg:function(a,b,c){return a.uniform4fv(b,c)},
ci:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cj:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cl:function(a,b){return a.useProgram(b)},
cn:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
co:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fc.prototype={
dv:function(a,b){return a.beginTransformFeedback(b)},
dA:function(a,b){return a.bindVertexArray(b)},
dG:function(a){return a.createVertexArray()},
dN:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
dO:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
dP:function(a){return a.endTransformFeedback()},
eg:function(a,b,c,d){this.dq(a,b,c,d)
return},
dq:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eh:function(a,b,c){return a.vertexAttribDivisor(b,c)},
by:function(a,b){return a.activeTexture(b)},
bA:function(a,b,c){return a.attachShader(b,c)},
bB:function(a,b,c){return a.bindBuffer(b,c)},
bC:function(a,b,c){return a.bindFramebuffer(b,c)},
bD:function(a,b,c){return a.bindTexture(b,c)},
bE:function(a,b){return a.blendEquation(b)},
bF:function(a,b,c){return a.blendFunc(b,c)},
bG:function(a,b,c,d){return a.bufferData(b,c,d)},
bH:function(a,b){return a.clear(b)},
bI:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bJ:function(a,b){return a.compileShader(b)},
bK:function(a){return a.createBuffer()},
bL:function(a){return a.createProgram()},
bN:function(a,b){return a.createShader(b)},
bO:function(a){return a.createTexture()},
bQ:function(a,b){return a.depthMask(b)},
bR:function(a,b){return a.disable(b)},
bS:function(a,b,c,d){return a.drawArrays(b,c,d)},
bT:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
bU:function(a,b){return a.enable(b)},
bV:function(a,b){return a.enableVertexAttribArray(b)},
au:function(a){return P.hT(a.getContextAttributes())},
aW:function(a){return a.getError()},
aX:function(a,b){return a.getProgramInfoLog(b)},
aY:function(a,b,c){return a.getProgramParameter(b,c)},
aZ:function(a,b){return a.getShaderInfoLog(b)},
b_:function(a,b,c){return a.getShaderParameter(b,c)},
b0:function(a,b,c){return a.getUniformLocation(b,c)},
bX:function(a,b){return a.linkProgram(b)},
c0:function(a,b,c){return a.pixelStorei(b,c)},
b2:function(a,b,c){return a.shaderSource(b,c)},
b4:function(a,b,c,d){return a.stencilFunc(b,c,d)},
aT:function(a,b,c,d,e,f,g,h,i,j){this.aI(a,b,c,d,e,f,g)
return},
c5:function(a,b,c,d,e,f,g){return this.aT(a,b,c,d,e,f,g,null,null,null)},
aI:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c6:function(a,b,c,d){return a.texParameterf(b,c,d)},
c7:function(a,b,c,d){return a.texParameteri(b,c,d)},
ca:function(a,b,c){return a.uniform1f(b,c)},
cb:function(a,b,c){return a.uniform1fv(b,c)},
cc:function(a,b,c){return a.uniform1i(b,c)},
cd:function(a,b,c){return a.uniform1iv(b,c)},
ce:function(a,b,c){return a.uniform2fv(b,c)},
cf:function(a,b,c){return a.uniform3fv(b,c)},
cg:function(a,b,c){return a.uniform4fv(b,c)},
ci:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cj:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cl:function(a,b){return a.useProgram(b)},
cn:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
co:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.hJ.prototype={$isa:1}
P.fn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.B(b,a,null,null,null))
return P.hT(this.di(a,b))},
i:function(a,b,c){throw H.e(new P.r("Cannot assign element of immutable List."))},
p:function(a,b){return this.h(a,b)},
di:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cp.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cB.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
B.id.prototype={
$1:function(a){$.$get$hU().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aL]}}}
B.ie.prototype={
$1:function(a){$.$get$hU().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aL]}}}
B.ig.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.lS=t
$.lT=C.b.a2(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.iQ=s-C.b.J(window.innerWidth,2)
$.k4=-(t-C.b.J(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.M]}}}
B.ih.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.bR=t-C.b.J(window.innerWidth,2)
$.bS=-(s-C.b.J(window.innerHeight,2))
if(a.button===2)$.$get$bQ().i(0,"right",!0)
else $.$get$bQ().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.M]}}}
B.ii.prototype={
$1:function(a){if(a.button===2)$.$get$bQ().i(0,"right",null)
else $.$get$bQ().i(0,"left",null)},
$S:function(){return{func:1,args:[W.M]}}}
B.eQ.prototype={
cX:function(a,b,c,d){var t
d.toString
W.ae(d,W.m0().$1(d),new B.eR(this),!1,W.aT)
W.ae(d,"mousemove",new B.eS(this),!1,W.M)
t=W.aR
W.ae(d,"touchstart",new B.eT(),!1,t)
W.ae(d,"touchmove",new B.eU(this),!1,t)
B.me(null)}}
B.eR.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ai.gdH(a)*r.k3
if(C.c.a2(r.fy,t)>0)r.fy=H.X(C.c.a2(r.fy,t))}catch(q){s=H.au(q)
P.ah(s)}},
$S:function(){return{func:1,args:[W.aT]}}}
B.eS.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.X(t.go+C.b.a2($.iQ,$.bR)*0.01)
s=t.id
r=$.bS
q=$.k4
t.id=H.X(s+(r-q)*0.01)
$.bR=$.iQ
$.bS=q}},
$S:function(){return{func:1,args:[W.M]}}}
B.eT.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a0(t.clientX)
C.c.a0(t.clientY)
$.bR=s
C.c.a0(t.clientX)
$.bS=C.c.a0(t.clientY)},
$S:function(){return{func:1,args:[W.aR]}}}
B.eU.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a0(t.clientX)
t=C.c.a0(t.clientY)
r=this.a
r.go=H.X(r.go+C.b.a2(s,$.bR)*0.01)
r.id=H.X(r.id+($.bS-t)*0.01)
$.bR=s
$.bS=t},
$S:function(){return{func:1,args:[W.aR]}}}
G.eF.prototype={}
G.d7.prototype={
E:function(a,b){var t=this.d
if(H.at(!t.F(0,a)))H.aA("uniform "+a+" already set")
t.i(0,a,b)},
bb:function(){return this.d},
j:function(a){var t,s,r,q
t=H.O(["{"+new H.ax(H.hY(this),null).j(0)+"}["+this.a+"]"],[P.u])
for(s=this.d,r=s.gO(s),r=r.gA(r);r.q();){q=r.gt()
C.a.l(t,H.h(q)+": "+H.h(s.h(0,q)))}return C.a.ad(t,"\n")}}
G.dx.prototype={}
G.dz.prototype={
bW:function(a,b,c){J.kw(this.a,b)
if(c>0)J.kR(this.a,b,c)}}
G.eb.prototype={}
G.z.prototype={}
G.ed.prototype={
b9:function(a){var t=this.e
H.d(!t.F(0,a))
H.d(C.i.cF(a,"a"))
switch($.$get$W().h(0,a).a){case"vec2":t.i(0,a,H.O([],[T.ad]))
break
case"vec3":t.i(0,a,H.O([],[T.m]))
break
case"vec4":t.i(0,a,H.O([],[T.az]))
break
case"float":t.i(0,a,H.O([],[P.L]))
break
case"uvec4":t.i(0,a,H.O([],[[P.b,P.o]]))
break
default:if(H.at(!1))H.aA("unknown type for "+a)}},
cN:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.l(this.b,new G.z(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.m(new Float32Array(3))
p.C(q)
C.a.l(t,p)}},
cL:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new Float32Array(2)
o=q.a
p[1]=o[1]
p[0]=o[0]
s.l(t,new T.ad(p))}},
cM:function(a,b){var t,s,r,q,p
t=this.e.h(0,a)
for(s=t&&C.a,r=0;r<3;++r){q=b[r]
p=new T.m(new Float32Array(3))
p.C(q)
s.l(t,p)}},
cS:function(){var t,s,r,q,p,o,n,m
t=this.b
H.d(t.length>0||!1)
s=new Array(t.length*3)
s.fixed$length=Array
r=H.O(s,[P.o])
for(s=t.length,q=0,p=0;o=t.length,p<o;o===s||(0,H.P)(t),++p){n=t[p]
r[q]=n.a
r[q+1]=n.b
r[q+2]=n.c
q+=3}for(t=this.c,p=0;!1;++p){m=t[p]
r[q]=m.gds(m)
r[q+1]=m.gek(m)
r[q+2]=m.gdB(m)
r[q+3]=m.gds(m)
r[q+4]=m.gdB(m)
r[q+5]=m.gel(m)
q+=6}H.d(q===r.length)
return r},
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4[0]"]
for(s=this.e,r=s.gO(s),r=r.gA(r);r.q();){q=r.gt()
p=$.$get$W().h(0,q).a
C.a.l(t,H.h(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ad(t," ")}}
G.d6.prototype={}
G.bF.prototype={}
G.cQ.prototype={
cW:function(a){this.E("cDepthTest",!0)
this.E("cDepthWrite",!0)
this.E("cBlendEquation",$.$get$j8())
this.E("cStencilFunc",$.$get$iD())}}
G.cR.prototype={
b8:function(a,b,c){var t,s
if(C.i.ax(a,0)===105){if(H.at(C.b.aw(b.length,c)===this.z))H.aA("ChangeAttribute "+this.z)}else{t=C.b.aw(b.length,c)
if(H.at(t===(this.ch.length/3|0)))H.aA("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dk(t.a,34962,s)
J.iV(t.a,34962,b,35048)},
cT:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a3:function(a,b,c){var t,s,r,q,p,o
t=J.iS(a,0)===105
if(t&&this.z===0)this.z=C.b.aw(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.im(r.a))
this.b8(a,b,c)
q=$.$get$W().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.at(p.F(0,a)))H.aA("unexpected attribute "+a)
o=p.h(0,a)
J.dl(r.a,this.e)
r.bW(0,o,t?1:0)
s=s.h(0,a)
p=q.ba()
J.dk(r.a,34962,s)
J.j4(r.a,o,p,5126,!1,0,0)},
b7:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.im(s.a))
this.ch=a
this.b8("aPosition",a,3)
r=$.$get$W().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.F(0,"aPosition"))
p=q.h(0,"aPosition")
J.dl(s.a,this.e)
s.bW(0,p,0)
t=t.h(0,"aPosition")
q=r.ba()
J.dk(s.a,34962,t)
J.j4(s.a,p,q,5126,!1,0,0)},
j:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gO(t),r=r.gA(r);r.q();){q=r.gt()
C.a.l(s,H.h(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ad(s,"  ")},
saC:function(a){this.cx=a}}
G.eX.prototype={
cO:function(a,b){var t=C.b.cq(a,b)
if(this.z===t)return
this.z=t
this.bc()},
bc:function(){var t,s,r,q,p,o,n
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
t.a1(0,0,1/(p*s))
t.a1(1,1,1/p)
t.a1(2,2,(q+r)/o)
t.a1(3,2,-1)
t.a1(2,3,2*r*q/o)},
bb:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.m(new Float32Array(H.l(3)))
o.Z(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.C(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.t(n)
r=!!s.$isaz
k=r?s.gat(n):1
if(!!s.$ism){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
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
a3.C(this.db)
a3.c_(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fa.prototype={
d2:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gO(s),s=s.gA(s);s.q();){q=s.gt()
if(!t.F(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bJ(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.q();){q=s.d
if(!t.a8(0,q))C.a.l(r,q)}return r},
d3:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gO(b),s=s.gA(s),r=this.d,q=this.y,p=this.z,o=0;s.q();){n=s.gt()
switch(J.iS(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.ib("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$W().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.ir(r.a,k,m)
else if(!!J.t(m).$isjl)J.kP(r.a,k,m)
break
case"float":if(l.c===0)J.kN(r.a,k,m)
else if(!!J.t(m).$ise8)J.kO(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aD(m,"$isF").a
J.j3(r.a,k,!1,j)}else if(!!J.t(m).$ise8)J.j3(r.a,k,!1,m)
else if(H.at(!1))H.aA("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aD(m,"$isab").a
J.j2(r.a,k,!1,j)}else if(!!J.t(m).$ise8)J.j2(r.a,k,!1,m)
else if(H.at(!1))H.aA("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.j1(i,k,H.aD(m,"$isaz").a)
else J.j1(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.j0(i,k,H.aD(m,"$ism").a)
else J.j0(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.j_(i,k,H.aD(m,"$isad").a)
else J.j_(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.Y(33984,this.ch)
J.iT(r.a,j)
j=H.aD(m,"$isbE").b
J.bT(r.a,3553,j)
j=this.ch
J.ir(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.Y(33984,this.ch)
J.iT(r.a,j)
j=H.aD(m,"$isbE").b
J.bT(r.a,34067,j)
j=this.ch
J.ir(r.a,k,j)
this.ch=this.ch+1
break
default:H.ib("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.D(m,!0)
i=r.a
if(j)J.dm(i,2929)
else J.io(i,2929)
break
case"cStencilFunc":H.aD(m,"$isd6")
j=m.a
i=r.a
if(j===1281)J.io(i,2960)
else{J.dm(i,2960)
i=m.b
h=m.c
J.kJ(r.a,j,i,h)}break
case"cDepthWrite":J.kq(r.a,m)
break
case"cBlendEquation":H.aD(m,"$isbF")
j=m.a
i=r.a
if(j===1281)J.io(i,3042)
else{J.dm(i,3042)
i=m.b
h=m.c
J.kk(r.a,i,h)
J.kj(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aH(1000*(s-new P.bh(t,!1).a)).j(0)},
cR:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.kQ(t.a,this.r)
this.ch=0
this.z.T(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r){q=b[r]
this.d3(q.a,q.bb())}s=this.Q
s.T(0)
for(p=a.cy,p=p.gO(p),p=p.gA(p);p.q();)s.l(0,p.gt())
o=this.d2()
if(o.length!==0)P.ah("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.h(o)))
J.dl(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.cT()
m=a.Q
l=a.z
if(n)J.kh(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.ku(k,s,p,m,0,l)
else J.kt(k,s,p,m,0)}else{m=t.a
if(l>1)J.ks(m,s,0,p,l)
else J.kr(m,s,0,p)}if(n)J.kx(t.a)},
cZ:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.iY(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.iY(q.a,p,n))}}}
G.x.prototype={
ba:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.b7.prototype={
b6:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$W().F(0,q))
H.d(!C.a.a8(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.b3(t)},
aj:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.P)(a),++r){q=a[r]
if(H.at($.$get$W().F(0,q)))H.aA("missing uniform "+q)
H.d(!C.a.a8(s,q))
C.a.l(s,q)}C.a.b3(s)},
d_:function(a,b){H.d(this.b==null)
this.b=this.d4(!0,a,b)},
ak:function(a){return this.d_(a,null)},
d4:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
m=$.$get$W().h(0,n)
C.a.l(q,"layout (location="+H.h(p.h(0,n))+") in "+m.a+" "+H.h(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.h(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.h(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.aK(q,b)
C.a.l(q,"}")
return C.a.ad(q,"\n")}}
G.fl.prototype={
ai:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.fB.prototype={
cU:function(a,b){var t=this.e
if(t!==1)J.kL(a.a,b,34046,t)
J.iZ(a.a,b,10240,this.r)
J.iZ(a.a,b,10241,this.f)}}
G.bE.prototype={
j:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eh.prototype={
d0:function(a){var t,s
t=this.d
s=this.c
J.bT(t.a,s,this.b)
J.kK(t.a,s,0,6408,6408,5121,a)}}
R.d1.prototype={
c2:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ah("size change "+H.h(s)+" "+H.h(r))
this.dx.cO(s,r)
this.z=s
this.Q=r}}
A.aO.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.bz.prototype={}
A.f9.prototype={
cQ:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.ki(p.a,36160,t)
H.d(r>0&&q>0)
J.kS(p.a,this.x,this.y,r,q)
if(s!==0)J.kl(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
m=n.e
C.a.l(m,new G.d7(P.K(),"transforms",!1,!0))
l=new T.F(new Float32Array(16))
l.D()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.P)(r),++k)A.jX(p,r[k],l,a,m)
m.pop()}},
cP:function(){return this.cQ(null)},
cY:function(a,b,c){if(this.d==null)this.d=new G.eb(this.e,null,null,null,null)}}
A.hZ.prototype={
$2:function(a,b){var t=536870911&a+J.aj(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.q]}}}
T.ab.prototype={
C:function(a){var t,s
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
j:function(a){return"[0] "+this.R(0).j(0)+"\n[1] "+this.R(1).j(0)+"\n[2] "+this.R(2).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ab){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dh(this.a)},
R:function(a){var t,s
t=new Float32Array(H.l(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.m(t)},
dF:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.C(a)
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
T.F.prototype={
a1:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
C:function(a){var t,s
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
j:function(a){return"[0] "+this.R(0).j(0)+"\n[1] "+this.R(1).j(0)+"\n[2] "+this.R(2).j(0)+"\n[3] "+this.R(3).j(0)+"\n"},
h:function(a,b){return this.a[b]},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.F){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dh(this.a)},
R:function(a){var t,s
t=new Float32Array(H.l(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.az(t)},
ct:function(a,b,c,d){var t=this.a
t[0]=t[0]*b
t[1]=t[1]*b
t[2]=t[2]*b
t[3]=t[3]*b
t[4]=t[4]*b
t[5]=t[5]*b
t[6]=t[6]*b
t[7]=t[7]*b
t[8]=t[8]*b
t[9]=t[9]*b
t[10]=t[10]*b
t[11]=t[11]*b
t[12]=t[12]
t[13]=t[13]
t[14]=t[14]
t[15]=t[15]},
L:function(a,b){return this.ct(a,b,null,null)},
D:function(){var t=this.a
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
c_:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.ad.prototype={
j:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.ad){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dh(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.m.prototype={
Z:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
C:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dh(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gP())},
gP:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
B:function(a){var t,s,r
t=Math.sqrt(this.gP())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
aO:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
bP:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.m(new Float32Array(H.l(3)))
t.Z(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
l:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
L:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.az.prototype={
j:function(a){var t=this.a
return H.h(t[0])+","+H.h(t[1])+","+H.h(t[2])+","+H.h(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.az){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dh(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]},
gat:function(a){return this.a[3]}}
V.i9.prototype={
$1:function(b2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
this.a.a=b2+0
t=this.b
t.go=H.X(t.go+0.001)
s=t.k4
if(s.h(0,37)!=null)t.go=H.X(t.go+0.03)
else if(s.h(0,39)!=null)t.go=H.X(t.go-0.03)
if(s.h(0,38)!=null)t.id=H.X(t.id+0.03)
else if(s.h(0,40)!=null)t.id=H.X(t.id-0.03)
if(s.h(0,33)!=null)t.fy=H.X(t.fy*0.99)
else if(s.h(0,34)!=null)t.fy=H.X(t.fy*1.01)
if(s.h(0,32)!=null){t.go=0
t.id=0}s=H.X(C.c.dC(t.id,-1.4707963267948965,1.4707963267948965))
t.id=s
r=t.fy
q=t.go
p=r*Math.cos(s)
t.ai(p*Math.cos(q),r*Math.sin(s),p*Math.sin(q))
q=t.d.a
s=t.k2.a
q[12]=q[12]+s[0]
q[13]=q[13]+s[1]
q[14]=q[14]+s[2]
r=q[12]
o=q[13]
n=q[14]
m=new T.m(new Float32Array(H.l(3)))
m.Z(0,1,0)
l=t.e
k=l.a
k[0]=q[12]
k[1]=q[13]
k[2]=q[14]
k=new Float32Array(H.l(3))
j=new T.m(k)
j.C(l)
k[0]=k[0]-s[0]
k[1]=k[1]-s[1]
k[2]=k[2]-s[2]
j.B(0)
i=m.bP(j)
i.B(0)
h=j.bP(i)
h.B(0)
s=i.aO(l)
g=h.aO(l)
l=j.aO(l)
f=i.a
e=f[0]
d=h.a
c=d[0]
b=k[0]
a=f[1]
a0=d[1]
a1=k[1]
f=f[2]
d=d[2]
k=k[2]
q[15]=1
q[14]=-l
q[13]=-g
q[12]=-s
q[11]=0
q[10]=k
q[9]=d
q[8]=f
q[7]=0
q[6]=a1
q[5]=a0
q[4]=a
q[3]=0
q[2]=b
q[1]=c
q[0]=e
q[12]=r
q[13]=o
q[14]=n
n=t.f
o=n.a
o[0]=q[2]
o[1]=q[6]
o[2]=q[10]
t=-t.k1
n=Math.sqrt(n.gP())
i=o[0]/n
h=o[1]/n
j=o[2]/n
n=Math.cos(t)
t=Math.sin(t)
a2=1-n
a3=i*i*a2+n
o=j*t
a4=i*h*a2-o
r=h*t
a5=i*j*a2+r
a6=h*i*a2+o
a7=h*h*a2+n
t=i*t
a8=h*j*a2-t
a9=j*i*a2-r
b0=j*h*a2+t
b1=j*j*a2+n
n=q[0]
t=q[4]
r=q[8]
o=q[1]
e=q[5]
c=q[9]
b=q[2]
a=q[6]
a0=q[10]
a1=q[3]
f=q[7]
d=q[11]
q[0]=n*a3+t*a6+r*a9
q[1]=o*a3+e*a6+c*a9
q[2]=b*a3+a*a6+a0*a9
q[3]=a1*a3+f*a6+d*a9
q[4]=n*a4+t*a7+r*b0
q[5]=o*a4+e*a7+c*b0
q[6]=b*a4+a*a7+a0*b0
q[7]=a1*a4+f*a7+d*b0
q[8]=n*a5+t*a8+r*b1
q[9]=o*a5+e*a8+c*b1
q[10]=b*a5+a*a8+a0*b1
q[11]=a1*a5+f*a8+d*b1
this.c.cP()
C.aj.gdu(window).c8(this)},
$S:function(){return{func:1,v:true,args:[P.S]}}}
J.a.prototype.cI=J.a.prototype.j
J.br.prototype.cJ=J.br.prototype.j;(function installTearOffs(){installTearOff(H.aW.prototype,"ge1",0,0,0,null,["$0"],["ar"],0)
installTearOff(H.af.prototype,"gcu",0,0,0,null,["$1"],["I"],2)
installTearOff(H.aV.prototype,"gdJ",0,0,0,null,["$1"],["U"],2)
installTearOff(P,"lO",1,0,0,null,["$1"],["ly"],1)
installTearOff(P,"lP",1,0,0,null,["$1"],["lz"],1)
installTearOff(P,"lQ",1,0,0,null,["$1"],["lA"],1)
installTearOff(P,"jW",1,0,0,null,["$0"],["lM"],0)
installTearOff(P.as.prototype,"gd9",0,0,0,null,["$2","$1"],["al","da"],3)
installTearOff(P,"lV",1,0,0,null,["$2"],["kZ"],5)
installTearOff(W,"m0",1,0,0,null,["$1"],["l1"],6)
installTearOff(R.d1.prototype,"gea",0,0,0,null,["$1"],["c2"],4)
installTearOff(V,"k5",1,0,0,null,["$0"],["m8"],0)})();(function inheritance(){inherit(P.q,null)
var t=P.q
inherit(H.ix,t)
inherit(J.a,t)
inherit(J.dt,t)
inherit(P.am,t)
inherit(H.cN,t)
inherit(P.cL,t)
inherit(H.c4,t)
inherit(H.b1,t)
inherit(H.hv,t)
inherit(H.aW,t)
inherit(H.h7,t)
inherit(H.aX,t)
inherit(H.hu,t)
inherit(H.h1,t)
inherit(H.b6,t)
inherit(H.fD,t)
inherit(H.al,t)
inherit(H.af,t)
inherit(H.aV,t)
inherit(H.f8,t)
inherit(H.fK,t)
inherit(P.b2,t)
inherit(H.de,t)
inherit(H.ax,t)
inherit(H.aa,t)
inherit(H.et,t)
inherit(H.ev,t)
inherit(P.h3,t)
inherit(P.db,t)
inherit(P.as,t)
inherit(P.d9,t)
inherit(P.fq,t)
inherit(P.fr,t)
inherit(P.b0,t)
inherit(P.hM,t)
inherit(P.fi,t)
inherit(P.hs,t)
inherit(P.bJ,t)
inherit(P.v,t)
inherit(P.ht,t)
inherit(P.aZ,t)
inherit(P.G,t)
inherit(P.bh,t)
inherit(P.S,t)
inherit(P.aH,t)
inherit(P.d4,t)
inherit(P.hc,t)
inherit(P.dM,t)
inherit(P.b,t)
inherit(P.aw,t)
inherit(P.aP,t)
inherit(P.bA,t)
inherit(P.u,t)
inherit(P.bC,t)
inherit(W.dB,t)
inherit(W.A,t)
inherit(W.e7,t)
inherit(P.hq,t)
inherit(P.hx,t)
inherit(G.eF,t)
inherit(G.dz,t)
inherit(G.eb,t)
inherit(G.z,t)
inherit(G.ed,t)
inherit(G.d6,t)
inherit(G.bF,t)
inherit(G.x,t)
inherit(G.b7,t)
inherit(G.fB,t)
inherit(G.bE,t)
inherit(T.ab,t)
inherit(T.F,t)
inherit(T.ad,t)
inherit(T.m,t)
inherit(T.az,t)
t=J.a
inherit(J.en,t)
inherit(J.ep,t)
inherit(J.br,t)
inherit(J.aI,t)
inherit(J.b3,t)
inherit(J.aJ,t)
inherit(H.bt,t)
inherit(H.b5,t)
inherit(W.f,t)
inherit(W.Z,t)
inherit(W.bV,t)
inherit(W.bX,t)
inherit(W.bY,t)
inherit(W.y,t)
inherit(W.c6,t)
inherit(W.dD,t)
inherit(W.dE,t)
inherit(W.dF,t)
inherit(W.c0,t)
inherit(W.c1,t)
inherit(W.cl,t)
inherit(W.dI,t)
inherit(W.i,t)
inherit(W.cn,t)
inherit(W.a0,t)
inherit(W.ee,t)
inherit(W.cf,t)
inherit(W.ex,t)
inherit(W.eC,t)
inherit(W.a1,t)
inherit(W.ci,t)
inherit(W.eO,t)
inherit(W.cc,t)
inherit(W.eV,t)
inherit(W.b8,t)
inherit(W.a2,t)
inherit(W.cq,t)
inherit(W.ac,t)
inherit(W.a4,t)
inherit(W.cg,t)
inherit(W.a5,t)
inherit(W.fp,t)
inherit(W.T,t)
inherit(W.c7,t)
inherit(W.fC,t)
inherit(W.a7,t)
inherit(W.cd,t)
inherit(W.fH,t)
inherit(W.fO,t)
inherit(W.fT,t)
inherit(W.h2,t)
inherit(W.cb,t)
inherit(W.c8,t)
inherit(W.co,t)
inherit(W.c9,t)
inherit(W.cm,t)
inherit(W.ck,t)
inherit(W.hK,t)
inherit(W.hL,t)
inherit(P.an,t)
inherit(P.ca,t)
inherit(P.ao,t)
inherit(P.ce,t)
inherit(P.f0,t)
inherit(P.f1,t)
inherit(P.f6,t)
inherit(P.cj,t)
inherit(P.ap,t)
inherit(P.ch,t)
inherit(P.fS,t)
inherit(P.du,t)
inherit(P.fb,t)
inherit(P.fc,t)
inherit(P.hJ,t)
inherit(P.cp,t)
t=J.br
inherit(J.eZ,t)
inherit(J.aS,t)
inherit(J.aK,t)
inherit(J.iw,J.aI)
t=J.b3
inherit(J.cM,t)
inherit(J.eo,t)
t=P.am
inherit(H.c,t)
inherit(H.cO,t)
t=H.c
inherit(H.b4,t)
inherit(H.eu,t)
inherit(H.dL,H.cO)
inherit(H.ey,P.cL)
t=H.b4
inherit(H.cP,t)
inherit(P.ew,t)
t=H.b1
inherit(H.ij,t)
inherit(H.ik,t)
inherit(H.hp,t)
inherit(H.h8,t)
inherit(H.ek,t)
inherit(H.el,t)
inherit(H.hw,t)
inherit(H.fE,t)
inherit(H.fF,t)
inherit(H.il,t)
inherit(H.i3,t)
inherit(H.i4,t)
inherit(H.i5,t)
inherit(H.i6,t)
inherit(H.i7,t)
inherit(H.fx,t)
inherit(H.eq,t)
inherit(H.i_,t)
inherit(H.i0,t)
inherit(H.i1,t)
inherit(P.fZ,t)
inherit(P.fY,t)
inherit(P.h_,t)
inherit(P.h0,t)
inherit(P.hd,t)
inherit(P.hh,t)
inherit(P.he,t)
inherit(P.hf,t)
inherit(P.hg,t)
inherit(P.hk,t)
inherit(P.hl,t)
inherit(P.hj,t)
inherit(P.hi,t)
inherit(P.fs,t)
inherit(P.ft,t)
inherit(P.hP,t)
inherit(P.hA,t)
inherit(P.hz,t)
inherit(P.hB,t)
inherit(P.ez,t)
inherit(P.dJ,t)
inherit(P.dK,t)
inherit(W.fV,t)
inherit(W.hb,t)
inherit(P.hS,t)
inherit(B.id,t)
inherit(B.ie,t)
inherit(B.ig,t)
inherit(B.ih,t)
inherit(B.ii,t)
inherit(B.eR,t)
inherit(B.eS,t)
inherit(B.eT,t)
inherit(B.eU,t)
inherit(A.hZ,t)
inherit(V.i9,t)
t=H.h1
inherit(H.b9,t)
inherit(H.bL,t)
t=P.b2
inherit(H.cY,t)
inherit(H.er,t)
inherit(H.fN,t)
inherit(H.fM,t)
inherit(H.dy,t)
inherit(H.fe,t)
inherit(P.bU,t)
inherit(P.cZ,t)
inherit(P.ak,t)
inherit(P.r,t)
inherit(P.d8,t)
inherit(P.bB,t)
inherit(P.a8,t)
inherit(P.dC,t)
t=H.fx
inherit(H.fo,t)
inherit(H.bf,t)
inherit(H.fX,P.bU)
t=H.b5
inherit(H.eG,t)
inherit(H.cT,t)
t=H.cT
inherit(H.bv,t)
inherit(H.bu,t)
inherit(H.bw,H.bv)
inherit(H.cU,H.bw)
inherit(H.bx,H.bu)
inherit(H.cV,H.bx)
t=H.cU
inherit(H.cS,t)
inherit(H.eH,t)
t=H.cV
inherit(H.eI,t)
inherit(H.eJ,t)
inherit(H.eK,t)
inherit(H.eL,t)
inherit(H.eM,t)
inherit(H.cW,t)
inherit(H.eN,t)
inherit(P.hI,P.h3)
inherit(P.hy,P.hM)
inherit(P.dc,H.aa)
inherit(P.fh,P.fi)
inherit(P.ho,P.fh)
inherit(P.hr,P.ho)
t=P.S
inherit(P.L,t)
inherit(P.o,t)
t=P.ak
inherit(P.d0,t)
inherit(P.ei,t)
t=W.f
inherit(W.w,t)
inherit(W.bk,t)
inherit(W.dA,t)
inherit(W.e5,t)
inherit(W.bq,t)
inherit(W.bs,t)
inherit(W.f3,t)
inherit(W.d2,t)
inherit(W.fj,t)
inherit(W.a3,t)
inherit(W.bl,t)
inherit(W.a6,t)
inherit(W.U,t)
inherit(W.bj,t)
inherit(W.fQ,t)
inherit(W.fU,t)
inherit(W.bG,t)
inherit(W.fW,t)
inherit(W.aU,t)
inherit(W.hF,t)
t=W.w
inherit(W.c2,t)
inherit(W.aG,t)
inherit(W.bi,t)
inherit(W.c_,t)
inherit(W.h5,t)
t=W.c2
inherit(W.j,t)
inherit(P.I,t)
t=W.j
inherit(W.dr,t)
inherit(W.ds,t)
inherit(W.dw,t)
inherit(W.bW,t)
inherit(W.ea,t)
inherit(W.ej,t)
inherit(W.fg,t)
inherit(W.hn,t)
inherit(W.bm,W.bk)
inherit(W.dv,W.bm)
inherit(W.bg,W.c6)
inherit(W.dG,W.c0)
inherit(W.cI,W.cl)
inherit(W.dH,W.cI)
inherit(W.a_,W.bV)
inherit(W.cG,W.cn)
inherit(W.e4,W.cG)
inherit(W.cu,W.cf)
inherit(W.bp,W.cu)
inherit(W.c5,W.bi)
inherit(W.ef,W.bq)
inherit(W.ay,W.i)
t=W.ay
inherit(W.aL,t)
inherit(W.M,t)
inherit(W.aR,t)
inherit(W.eD,W.bs)
inherit(W.cE,W.ci)
inherit(W.eE,W.cE)
inherit(W.cv,W.cc)
inherit(W.cX,W.cv)
t=W.b8
inherit(W.eY,t)
inherit(W.fd,t)
inherit(W.fJ,t)
inherit(W.cD,W.cq)
inherit(W.f_,W.cD)
inherit(W.f2,W.ac)
inherit(W.bn,W.bl)
inherit(W.fk,W.bn)
inherit(W.cC,W.cg)
inherit(W.fm,W.cC)
inherit(W.cr,W.c7)
inherit(W.fz,W.cr)
inherit(W.bo,W.bj)
inherit(W.fA,W.bo)
inherit(W.cs,W.cd)
inherit(W.fG,W.cs)
inherit(W.aT,W.M)
inherit(W.ct,W.cb)
inherit(W.da,W.ct)
inherit(W.cF,W.c8)
inherit(W.h4,W.cF)
inherit(W.h6,W.c1)
inherit(W.cH,W.co)
inherit(W.hm,W.cH)
inherit(W.cx,W.c9)
inherit(W.dd,W.cx)
inherit(W.cJ,W.cm)
inherit(W.hG,W.cJ)
inherit(W.cK,W.ck)
inherit(W.hH,W.cK)
inherit(W.h9,P.fq)
inherit(W.iH,W.h9)
inherit(W.ha,P.fr)
inherit(P.H,P.hx)
t=P.I
inherit(P.av,t)
inherit(P.aF,t)
inherit(P.dN,t)
inherit(P.dO,t)
inherit(P.dP,t)
inherit(P.dQ,t)
inherit(P.dR,t)
inherit(P.dS,t)
inherit(P.dT,t)
inherit(P.dU,t)
inherit(P.dV,t)
inherit(P.dW,t)
inherit(P.dX,t)
inherit(P.dY,t)
inherit(P.dZ,t)
inherit(P.e_,t)
inherit(P.e0,t)
inherit(P.e1,t)
inherit(P.e2,t)
inherit(P.e3,t)
inherit(P.e6,t)
inherit(P.eA,t)
inherit(P.eB,t)
inherit(P.eW,t)
inherit(P.ff,t)
inherit(P.fw,t)
inherit(P.fR,t)
inherit(P.bI,t)
inherit(P.hC,t)
inherit(P.hD,t)
inherit(P.hE,t)
t=P.av
inherit(P.dq,t)
inherit(P.e9,t)
inherit(P.a9,t)
inherit(P.eg,t)
inherit(P.fv,t)
inherit(P.d5,t)
inherit(P.fP,t)
inherit(P.cA,P.ca)
inherit(P.es,P.cA)
inherit(P.cz,P.ce)
inherit(P.eP,P.cz)
inherit(P.f7,P.a9)
inherit(P.cy,P.cj)
inherit(P.fu,P.cy)
t=P.d5
inherit(P.fy,t)
inherit(P.bD,t)
inherit(P.cw,P.ch)
inherit(P.fI,P.cw)
inherit(P.cB,P.cp)
inherit(P.fn,P.cB)
t=G.eF
inherit(G.fl,t)
inherit(G.d7,t)
inherit(G.cR,t)
inherit(G.fa,t)
inherit(A.f9,t)
inherit(A.bz,t)
t=G.fl
inherit(G.dx,t)
inherit(A.aO,t)
inherit(B.eQ,G.dx)
t=G.d7
inherit(G.cQ,t)
inherit(G.eX,t)
inherit(G.eh,G.bE)
inherit(R.d1,A.f9)
mixin(H.bu,P.v)
mixin(H.bv,P.v)
mixin(H.bw,H.c4)
mixin(H.bx,H.c4)
mixin(W.bj,P.v)
mixin(W.bk,P.v)
mixin(W.bl,P.v)
mixin(W.bm,W.A)
mixin(W.bn,W.A)
mixin(W.bo,W.A)
mixin(W.c6,W.dB)
mixin(W.cq,P.v)
mixin(W.cc,P.v)
mixin(W.c9,P.v)
mixin(W.ck,P.v)
mixin(W.cl,P.v)
mixin(W.cm,P.v)
mixin(W.cn,P.v)
mixin(W.co,P.v)
mixin(W.c7,P.v)
mixin(W.cb,P.v)
mixin(W.c8,P.v)
mixin(W.cd,P.v)
mixin(W.cf,P.v)
mixin(W.cg,P.v)
mixin(W.ci,P.v)
mixin(W.cr,W.A)
mixin(W.cs,W.A)
mixin(W.ct,W.A)
mixin(W.cD,W.A)
mixin(W.cE,W.A)
mixin(W.cC,W.A)
mixin(W.cH,W.A)
mixin(W.cI,W.A)
mixin(W.cJ,W.A)
mixin(W.cK,W.A)
mixin(W.cu,W.A)
mixin(W.cv,W.A)
mixin(W.cx,W.A)
mixin(W.cF,W.A)
mixin(W.cG,W.A)
mixin(P.cj,P.v)
mixin(P.ca,P.v)
mixin(P.ce,P.v)
mixin(P.ch,P.v)
mixin(P.cw,W.A)
mixin(P.cy,W.A)
mixin(P.cz,W.A)
mixin(P.cA,W.A)
mixin(P.cp,P.v)
mixin(P.cB,W.A)})();(function constants(){C.q=W.bW.prototype
C.m=W.bX.prototype
C.o=W.bY.prototype
C.B=W.c5.prototype
C.C=J.a.prototype
C.a=J.aI.prototype
C.b=J.cM.prototype
C.c=J.b3.prototype
C.i=J.aJ.prototype
C.J=J.aK.prototype
C.K=H.cS.prototype
C.v=J.eZ.prototype
C.p=J.aS.prototype
C.ai=W.aT.prototype
C.aj=W.bG.prototype
C.A=new P.hq()
C.f=new P.hy()
C.r=new P.aH(0)
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.F=function(getTagFallback) {
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
C.G=function() {
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
C.H=function(hooks) {
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
C.I=function(hooks) {
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
C.u=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=new G.x("vec3","vertex btangents",0)
C.d=new G.x("vec3","",0)
C.M=new G.x("vec4","delta from light",0)
C.n=new G.x("","",0)
C.w=new G.x("vec3","vertex coordinates",0)
C.N=new G.x("vec3","vertex binormals",0)
C.x=new G.x("vec4","for wireframe",0)
C.O=new G.x("vec4","per vertex color",0)
C.P=new G.x("float","for normal maps",0)
C.j=new G.x("mat4","",0)
C.R=new G.x("mat4","",4)
C.Q=new G.x("mat4","",128)
C.e=new G.x("float","",0)
C.S=new G.x("float","",4)
C.T=new G.x("float","depth for shadowmaps",0)
C.h=new G.x("sampler2D","",0)
C.U=new G.x("float","for bump maps",0)
C.V=new G.x("vec2","texture uvs",0)
C.W=new G.x("float","time since program start in sec",0)
C.k=new G.x("vec2","",0)
C.X=new G.x("samplerCube","",0)
C.l=new G.x("vec4","",0)
C.Y=new G.x("vec3","vertex normals",0)
C.Z=new G.x("sampler2DShadow","",0)
C.y=new G.x("vec3","per vertex color",0)
C.z=new G.x("mat3","",0)
C.a_=new G.x("vec3","vertex tangents",0)
C.a0=H.J("mi")
C.a1=H.J("mj")
C.a2=H.J("e8")
C.a3=H.J("mk")
C.a4=H.J("ml")
C.a5=H.J("jl")
C.a6=H.J("mm")
C.a7=H.J("jo")
C.a8=H.J("aP")
C.a9=H.J("u")
C.aa=H.J("jI")
C.ab=H.J("jJ")
C.ac=H.J("mn")
C.ad=H.J("jK")
C.ae=H.J("aZ")
C.af=H.J("L")
C.ag=H.J("o")
C.ah=H.J("S")})();(function staticFields(){$.js="$cachedFunction"
$.jt="$cachedInvocation"
$.jc=null
$.ja=null
$.iI=!1
$.iM=null
$.jT=null
$.k9=null
$.hV=null
$.i2=null
$.iN=null
$.ba=null
$.bM=null
$.bN=null
$.iJ=!1
$.C=C.f
$.jh=0
$.lS=0
$.lT=0
$.iQ=0
$.k4=0
$.bR=0
$.bS=0
$.mf=!1
$.jZ=0})();(function lazyInitializers(){lazy($,"jg","$get$jg",function(){return H.k0("_$dart_dartClosure")})
lazy($,"iy","$get$iy",function(){return H.k0("_$dart_js")})
lazy($,"jm","$get$jm",function(){return H.lb()})
lazy($,"jn","$get$jn",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jh
$.jh=t+1
t="expando$key$"+t}return new P.dM(null,t,[P.o])})
lazy($,"jx","$get$jx",function(){return H.aq(H.fL({
toString:function(){return"$receiver$"}}))})
lazy($,"jy","$get$jy",function(){return H.aq(H.fL({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"jz","$get$jz",function(){return H.aq(H.fL(null))})
lazy($,"jA","$get$jA",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jE","$get$jE",function(){return H.aq(H.fL(void 0))})
lazy($,"jF","$get$jF",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"jC","$get$jC",function(){return H.aq(H.jD(null))})
lazy($,"jB","$get$jB",function(){return H.aq(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"jH","$get$jH",function(){return H.aq(H.jD(void 0))})
lazy($,"jG","$get$jG",function(){return H.aq(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"iG","$get$iG",function(){return P.lx()})
lazy($,"bO","$get$bO",function(){return[]})
lazy($,"hU","$get$hU",function(){return P.jp(P.o,P.aZ)})
lazy($,"bQ","$get$bQ",function(){return P.jp(P.u,P.aZ)})
lazy($,"iD","$get$iD",function(){return new G.d6(1281,0,4294967295)})
lazy($,"j8","$get$j8",function(){return new G.bF(1281,1281,1281)})
lazy($,"j7","$get$j7",function(){return new G.bF(32774,770,769)})
lazy($,"W","$get$W",function(){return P.aM(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.y,"aColorAlpha",C.O,"aPosition",C.w,"aTexUV",C.V,"aNormal",C.Y,"aBinormal",C.N,"aCenter",C.x,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.a_,"aBitangent",C.L,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.y,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.w,"vPositionFromLight",C.M,"vCenter",C.x,"vDepth",C.T,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.z,"uConvolutionMatrix",C.z,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.Z,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.X,"uAnimationTable",C.h,"uTime",C.W,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.Q,"uLightDescs",C.R,"uLightCount",C.e,"uLightTypes",C.S,"uBumpScale",C.U,"uNormalScale",C.P])})
lazy($,"jL","$get$jL",function(){return C.A})
lazy($,"jf","$get$jf",function(){return T.V(0,0,1)})
lazy($,"kb","$get$kb",function(){var t=new G.b7("SolidColor",null,[],[],[],[],0,P.K())
t.b6(["aPosition"])
t.aj(["uPerspectiveViewMatrix","uModelMatrix"])
t.ak(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"ka","$get$ka",function(){var t=new G.b7("SolidColorF",null,[],[],[],[],0,P.K())
t.aj(["uColor"])
t.ak(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"k8","$get$k8",function(){var t=new G.b7("PointSpritesV",null,[],[],[],[],0,P.K())
t.b6(["aPosition"])
t.aj(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.ak(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"k7","$get$k7",function(){var t=new G.b7("PointSpritesF",null,[],[],[],[],0,P.K())
t.aj(["uTexture"])
t.ak(["oFragColor = texture( uTexture,  gl_PointCoord);"])
return t})
lazy($,"jj","$get$jj",function(){return[new G.z(0,11,5),new G.z(0,5,1),new G.z(0,1,7),new G.z(0,7,10),new G.z(0,10,11),new G.z(1,5,9),new G.z(5,11,4),new G.z(11,10,2),new G.z(10,7,6),new G.z(7,1,8),new G.z(3,9,4),new G.z(3,4,2),new G.z(3,2,6),new G.z(3,6,8),new G.z(3,8,9),new G.z(4,9,5),new G.z(2,4,11),new G.z(6,2,10),new G.z(8,6,7),new G.z(9,8,1)]})
lazy($,"kd","$get$kd",function(){return(1+P.mg(5))/2})
lazy($,"jk","$get$jk",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$kd()
s=T.V(-1,t,0)
s.B(0)
r=T.V(1,t,0)
r.B(0)
q=T.V(-1,-t,0)
q.B(0)
p=T.V(1,-t,0)
p.B(0)
o=T.V(0,-1,t)
o.B(0)
n=T.V(0,1,t)
n.B(0)
m=T.V(0,-1,-t)
m.B(0)
l=T.V(0,1,-t)
l.B(0)
k=T.V(t,0,-1)
k.B(0)
j=T.V(t,0,1)
j.B(0)
i=T.V(-t,0,-1)
i.B(0)
t=T.V(-t,0,1)
t.B(0)
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
mangledGlobalNames:{o:"int",L:"double",S:"num",u:"String",aZ:"bool",aP:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,v:true,args:[P.q],opt:[P.bA]},{func:1,v:true,args:[W.i]},{func:1,ret:P.o,args:[P.G,P.G]},{func:1,ret:P.u,args:[W.f]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,Range:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bt,ArrayBufferView:H.b5,DataView:H.eG,Float32Array:H.cS,Float64Array:H.eH,Int16Array:H.eI,Int32Array:H.eJ,Int8Array:H.eK,Uint16Array:H.eL,Uint32Array:H.eM,Uint8ClampedArray:H.cW,CanvasPixelArray:H.cW,Uint8Array:H.eN,HTMLAudioElement:W.j,HTMLBRElement:W.j,HTMLBaseElement:W.j,HTMLButtonElement:W.j,HTMLContentElement:W.j,HTMLDListElement:W.j,HTMLDataListElement:W.j,HTMLDetailsElement:W.j,HTMLDialogElement:W.j,HTMLDivElement:W.j,HTMLEmbedElement:W.j,HTMLFieldSetElement:W.j,HTMLHRElement:W.j,HTMLHeadElement:W.j,HTMLHeadingElement:W.j,HTMLHtmlElement:W.j,HTMLIFrameElement:W.j,HTMLImageElement:W.j,HTMLKeygenElement:W.j,HTMLLIElement:W.j,HTMLLabelElement:W.j,HTMLLegendElement:W.j,HTMLLinkElement:W.j,HTMLMapElement:W.j,HTMLMediaElement:W.j,HTMLMenuElement:W.j,HTMLMenuItemElement:W.j,HTMLMetaElement:W.j,HTMLMeterElement:W.j,HTMLModElement:W.j,HTMLOListElement:W.j,HTMLObjectElement:W.j,HTMLOptGroupElement:W.j,HTMLOptionElement:W.j,HTMLOutputElement:W.j,HTMLParagraphElement:W.j,HTMLParamElement:W.j,HTMLPictureElement:W.j,HTMLPreElement:W.j,HTMLProgressElement:W.j,HTMLQuoteElement:W.j,HTMLScriptElement:W.j,HTMLShadowElement:W.j,HTMLSlotElement:W.j,HTMLSourceElement:W.j,HTMLSpanElement:W.j,HTMLStyleElement:W.j,HTMLTableCaptionElement:W.j,HTMLTableCellElement:W.j,HTMLTableDataCellElement:W.j,HTMLTableHeaderCellElement:W.j,HTMLTableColElement:W.j,HTMLTableElement:W.j,HTMLTableRowElement:W.j,HTMLTableSectionElement:W.j,HTMLTemplateElement:W.j,HTMLTextAreaElement:W.j,HTMLTitleElement:W.j,HTMLTrackElement:W.j,HTMLUListElement:W.j,HTMLUnknownElement:W.j,HTMLVideoElement:W.j,HTMLDirectoryElement:W.j,HTMLFontElement:W.j,HTMLFrameElement:W.j,HTMLMarqueeElement:W.j,HTMLElement:W.j,HTMLAnchorElement:W.dr,HTMLAreaElement:W.ds,AudioTrack:W.Z,AudioTrackList:W.dv,Blob:W.bV,HTMLBodyElement:W.dw,HTMLCanvasElement:W.bW,CanvasGradient:W.bX,CanvasRenderingContext2D:W.bY,CDATASection:W.aG,CharacterData:W.aG,Comment:W.aG,ProcessingInstruction:W.aG,Text:W.aG,CompositorWorker:W.dA,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.bg,MSStyleCSSProperties:W.bg,CSS2Properties:W.bg,DataTransferItemList:W.dD,DeviceAcceleration:W.dE,XMLDocument:W.bi,Document:W.bi,DocumentFragment:W.c_,ShadowRoot:W.c_,DOMException:W.dF,DOMPoint:W.dG,DOMPointReadOnly:W.c0,DOMRectReadOnly:W.c1,DOMStringList:W.dH,DOMTokenList:W.dI,Element:W.c2,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BatteryManager:W.f,CanvasCaptureMediaStreamTrack:W.f,CrossOriginServiceWorkerClient:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,NetworkInformation:W.f,Notification:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationReceiver:W.f,PresentationRequest:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,ServicePortCollection:W.f,ServiceWorkerContainer:W.f,ServiceWorkerRegistration:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioContext:W.f,webkitAudioContext:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioSourceNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OfflineAudioContext:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.a_,FileList:W.e4,FileWriter:W.e5,HTMLFormElement:W.ea,Gamepad:W.a0,History:W.ee,HTMLCollection:W.bp,HTMLFormControlsCollection:W.bp,HTMLOptionsCollection:W.bp,HTMLDocument:W.c5,XMLHttpRequest:W.ef,XMLHttpRequestUpload:W.bq,XMLHttpRequestEventTarget:W.bq,HTMLInputElement:W.ej,KeyboardEvent:W.aL,Location:W.ex,MediaList:W.eC,MIDIOutput:W.eD,MIDIInput:W.bs,MIDIPort:W.bs,MimeType:W.a1,MimeTypeArray:W.eE,PointerEvent:W.M,MouseEvent:W.M,DragEvent:W.M,Navigator:W.eO,Attr:W.w,Node:W.w,NodeList:W.cX,RadioNodeList:W.cX,Path2D:W.eV,Perspective:W.eY,Plugin:W.a2,PluginArray:W.f_,PositionValue:W.f2,PresentationConnection:W.f3,Rotation:W.fd,RTCDataChannel:W.d2,DataChannel:W.d2,HTMLSelectElement:W.fg,SharedWorker:W.fj,SourceBuffer:W.a3,SourceBufferList:W.fk,SpeechGrammar:W.a4,SpeechGrammarList:W.fm,SpeechRecognitionResult:W.a5,Storage:W.fp,CSSStyleSheet:W.T,StyleSheet:W.T,CalcLength:W.ac,KeywordValue:W.ac,LengthValue:W.ac,NumberValue:W.ac,SimpleLength:W.ac,TransformValue:W.ac,StyleValue:W.ac,TextTrack:W.a6,TextTrackCue:W.U,VTTCue:W.U,TextTrackCueList:W.fz,TextTrackList:W.fA,TimeRanges:W.fC,Touch:W.a7,TouchEvent:W.aR,TouchList:W.fG,TrackDefaultList:W.fH,Matrix:W.b8,Skew:W.b8,TransformComponent:W.b8,Translation:W.fJ,CompositionEvent:W.ay,FocusEvent:W.ay,TextEvent:W.ay,SVGZoomEvent:W.ay,UIEvent:W.ay,URL:W.fO,VideoTrackList:W.fQ,VTTRegionList:W.fT,WebSocket:W.fU,WheelEvent:W.aT,Window:W.bG,DOMWindow:W.bG,Worker:W.fW,CompositorWorkerGlobalScope:W.aU,DedicatedWorkerGlobalScope:W.aU,ServiceWorkerGlobalScope:W.aU,SharedWorkerGlobalScope:W.aU,WorkerGlobalScope:W.aU,ClientRect:W.h2,ClientRectList:W.da,DOMRectList:W.da,CSSRuleList:W.h4,DocumentType:W.h5,DOMRect:W.h6,GamepadList:W.hm,HTMLFrameSetElement:W.hn,NamedNodeMap:W.dd,MozNamedAttrMap:W.dd,ServiceWorker:W.hF,SpeechRecognitionResultList:W.hG,StyleSheetList:W.hH,WorkerLocation:W.hK,WorkerNavigator:W.hL,SVGAElement:P.dq,SVGAnimateElement:P.aF,SVGAnimateMotionElement:P.aF,SVGAnimateTransformElement:P.aF,SVGAnimationElement:P.aF,SVGSetElement:P.aF,SVGFEBlendElement:P.dN,SVGFEColorMatrixElement:P.dO,SVGFEComponentTransferElement:P.dP,SVGFECompositeElement:P.dQ,SVGFEConvolveMatrixElement:P.dR,SVGFEDiffuseLightingElement:P.dS,SVGFEDisplacementMapElement:P.dT,SVGFEFloodElement:P.dU,SVGFEGaussianBlurElement:P.dV,SVGFEImageElement:P.dW,SVGFEMergeElement:P.dX,SVGFEMorphologyElement:P.dY,SVGFEOffsetElement:P.dZ,SVGFEPointLightElement:P.e_,SVGFESpecularLightingElement:P.e0,SVGFESpotLightElement:P.e1,SVGFETileElement:P.e2,SVGFETurbulenceElement:P.e3,SVGFilterElement:P.e6,SVGForeignObjectElement:P.e9,SVGCircleElement:P.a9,SVGEllipseElement:P.a9,SVGLineElement:P.a9,SVGPathElement:P.a9,SVGPolygonElement:P.a9,SVGPolylineElement:P.a9,SVGGeometryElement:P.a9,SVGClipPathElement:P.av,SVGDefsElement:P.av,SVGGElement:P.av,SVGSwitchElement:P.av,SVGGraphicsElement:P.av,SVGImageElement:P.eg,SVGLength:P.an,SVGLengthList:P.es,SVGMarkerElement:P.eA,SVGMaskElement:P.eB,SVGNumber:P.ao,SVGNumberList:P.eP,SVGPatternElement:P.eW,SVGPoint:P.f0,SVGPointList:P.f1,SVGRect:P.f6,SVGRectElement:P.f7,SVGScriptElement:P.ff,SVGStringList:P.fu,SVGDescElement:P.I,SVGDiscardElement:P.I,SVGFEDistantLightElement:P.I,SVGFEFuncAElement:P.I,SVGFEFuncBElement:P.I,SVGFEFuncGElement:P.I,SVGFEFuncRElement:P.I,SVGFEMergeNodeElement:P.I,SVGMetadataElement:P.I,SVGStopElement:P.I,SVGStyleElement:P.I,SVGTitleElement:P.I,SVGComponentTransferFunctionElement:P.I,SVGElement:P.I,SVGSVGElement:P.fv,SVGSymbolElement:P.fw,SVGTextContentElement:P.d5,SVGTextPathElement:P.fy,SVGTSpanElement:P.bD,SVGTextElement:P.bD,SVGTextPositioningElement:P.bD,SVGTransform:P.ap,SVGTransformList:P.fI,SVGUseElement:P.fP,SVGViewElement:P.fR,SVGViewSpec:P.fS,SVGLinearGradientElement:P.bI,SVGRadialGradientElement:P.bI,SVGGradientElement:P.bI,SVGCursorElement:P.hC,SVGFEDropShadowElement:P.hD,SVGMPathElement:P.hE,AudioBuffer:P.du,WebGLRenderingContext:P.fb,WebGL2RenderingContext:P.fc,WebGL2RenderingContextBase:P.hJ,SQLResultSetRowList:P.fn})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,Range:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.bv.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.bu.$nativeSuperclassTag="ArrayBufferView"
H.bx.$nativeSuperclassTag="ArrayBufferView"
H.cV.$nativeSuperclassTag="ArrayBufferView"
W.bk.$nativeSuperclassTag="EventTarget"
W.bm.$nativeSuperclassTag="EventTarget"
W.bl.$nativeSuperclassTag="EventTarget"
W.bn.$nativeSuperclassTag="EventTarget"
W.bj.$nativeSuperclassTag="EventTarget"
W.bo.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kc(V.k5(),b)},[])
else (function(b){H.kc(V.k5(),b)})([])})})()