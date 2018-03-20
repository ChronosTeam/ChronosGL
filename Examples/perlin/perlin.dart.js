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
a[c]=function(){a[c]=function(){H.nD(b)}
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
return d?function(e){if(t===null)t=H.jE(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jE(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jE(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={jp:function jp(a){this.a=a},
ju:function(a,b,c,d){if(!!a.$isc)return new H.ec(a,b,[c,d])
return new H.df(a,b,[c,d])},
d8:function(){return new P.as("No element")},
mq:function(){return new P.as("Too many elements")},
mp:function(){return new P.as("Too few elements")},
dx:function(a,b,c,d){if(c-b<=32)H.mG(a,b,c,d)
else H.mF(a,b,c,d)},
mG:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ac(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.am(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mF:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.H(t+1,6)
r=a3+s
q=a4-s
p=C.b.H(a3+a4,2)
o=p-s
n=p+s
t=J.ac(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.am(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.am(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.am(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.am(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.am(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.am(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.am(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.am(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.am(a5.$2(j,i),0)){h=i
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
H.dx(a2,a3,g-2,a5)
H.dx(a2,f+2,a4,a5)
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
break}}H.dx(a2,g,f,a5)}else H.dx(a2,g,f,a5)},
c:function c(){},
bf:function bf(){},
de:function de(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
df:function df(a,b,c){this.a=a
this.b=b
this.$ti=c},
ec:function ec(a,b,c){this.a=a
this.b=b
this.$ti=c},
eZ:function eZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bG:function bG(a,b,c){this.a=a
this.b=b
this.$ti=c},
dE:function dE(a,b,c){this.a=a
this.b=b
this.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.$ti=c},
cq:function cq(){},
dL:function(a,b){var t=a.ag(b)
if(!u.globalState.d.cy)u.globalState.f.am()
return t},
iZ:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
le:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.r(s).$isb)throw H.e(P.dV("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ib(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$km()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hK(P.jt(null,H.b4),0)
r=P.m
s.seM(new H.af(0,null,null,null,null,null,0,[r,H.b3]))
s.seO(new H.af(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ia()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mk,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mW)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ag(null,null,null,r)
p=new H.bh(0,null,!1)
o=new H.b3(s,new H.af(0,null,null,null,null,null,0,[r,H.bh]),q,u.createNewIsolate(),p,new H.ap(H.j3()),new H.ap(H.j3()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
q.l(0,0)
o.bG(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bq(a,{func:1,args:[,]}))o.ag(new H.j9(t,a))
else if(H.bq(a,{func:1,args:[,,]}))o.ag(new H.ja(t,a))
else o.ag(a)
u.globalState.f.am()},
mW:function(a){var t=P.aV(["command","print","msg",a])
return new H.aj(!0,P.c3(null,P.m)).I(t)},
mm:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mn()
return},
mn:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.t("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.t('Cannot extract URI from "'+t+'"'))},
mk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b2(!0,[]).V(b.data)
s=J.ac(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nq(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b2(!0,[]).V(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b2(!0,[]).V(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.m
j=P.ag(null,null,null,k)
i=new H.bh(0,null,!1)
h=new H.b3(s,new H.af(0,null,null,null,null,null,0,[k,H.bh]),j,u.createNewIsolate(),i,new H.ap(H.j3()),new H.ap(H.j3()),!1,!1,[],P.ag(null,null,null,null),null,null,!1,!0,P.ag(null,null,null,null))
j.l(0,0)
h.bG(0,i)
u.globalState.f.a.S(0,new H.b4(h,new H.eM(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.am()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lQ(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.am()
break
case"close":u.globalState.ch.al(0,$.$get$kn().h(0,a))
a.terminate()
u.globalState.f.am()
break
case"log":H.mj(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aV(["command","print","msg",t])
k=new H.aj(!0,P.c3(null,P.m)).I(k)
s.toString
self.postMessage(k)}else P.al(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mj:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aV(["command","log","msg",a])
r=new H.aj(!0,P.c3(null,P.m)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.M(q)
t=H.ak(q)
s=P.cp(t)
throw H.e(s)}},
ml:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kt=$.kt+("_"+s)
$.ku=$.ku+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.G(0,["spawned",new H.bl(s,r),q,t.r])
r=new H.eN(a,b,c,d,t)
if(e){t.c0(q,q)
u.globalState.f.a.S(0,new H.b4(t,r,"start isolate"))}else r.$0()},
mH:function(a,b){var t=new H.h9(!0,!1,null)
t.dw(a,b)
return t},
mY:function(a){return new H.b2(!0,[]).V(new H.aj(!1,P.c3(null,P.m)).I(a))},
j9:function j9(a,b){this.a=a
this.b=b},
ja:function ja(a,b){this.a=a
this.b=b},
ib:function ib(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b3:function b3(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
i5:function i5(a,b){this.a=a
this.b=b},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(a){this.a=a},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(){},
eM:function eM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hC:function hC(){},
bl:function bl(a,b){this.b=a
this.a=b},
ic:function ic(a,b){this.a=a
this.b=b},
c5:function c5(a,b,c){this.b=a
this.c=b
this.a=c},
bh:function bh(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a,b){this.a=a
this.b=b},
hb:function hb(a,b){this.a=a
this.b=b},
ap:function ap(a){this.a=a},
aj:function aj(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
nj:function(a){return u.types[a]},
ns:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.r(a).$iso},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aK(a)
if(typeof t!=="string")throw H.e(H.T(a))
return t},
mD:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fB(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aW:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dt:function(a){var t,s,r,q,p,o,n,m
t=J.r(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.O||!!J.r(a).$isaZ){p=C.B(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aO(q,0)===36)q=C.i.d7(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dN(H.iM(a),0,null),u.mangledGlobalNames)},
fx:function(a){return"Instance of '"+H.dt(a)+"'"},
Q:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mB:function(a){return a.b?H.Q(a).getUTCFullYear()+0:H.Q(a).getFullYear()+0},
mz:function(a){return a.b?H.Q(a).getUTCMonth()+1:H.Q(a).getMonth()+1},
mv:function(a){return a.b?H.Q(a).getUTCDate()+0:H.Q(a).getDate()+0},
mw:function(a){return a.b?H.Q(a).getUTCHours()+0:H.Q(a).getHours()+0},
my:function(a){return a.b?H.Q(a).getUTCMinutes()+0:H.Q(a).getMinutes()+0},
mA:function(a){return a.b?H.Q(a).getUTCSeconds()+0:H.Q(a).getSeconds()+0},
mx:function(a){return a.b?H.Q(a).getUTCMilliseconds()+0:H.Q(a).getMilliseconds()+0},
ks:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.T(a))
return a[b]},
O:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,"index",null)
t=J.dR(a)
if(b<0||C.b.cS(b,t))return P.A(b,a,"index",null,t)
return P.fy(b,"index",null)},
T:function(a){return new P.ao(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.bP()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.li})
t.name=""}else t.toString=H.li
return t},
li:function(){return J.aK(this.dartException)},
E:function(a){throw H.e(a)},
P:function(a){throw H.e(new P.a0(a))},
au:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hg(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hh:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kD:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jr:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eR(a,s,t?null:b.receiver)},
M:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jb(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aX(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jr(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dr(p,null))}}if(a instanceof TypeError){o=$.$get$kx()
n=$.$get$ky()
m=$.$get$kz()
l=$.$get$kA()
k=$.$get$kE()
j=$.$get$kF()
i=$.$get$kC()
$.$get$kB()
h=$.$get$kH()
g=$.$get$kG()
f=o.N(s)
if(f!=null)return t.$1(H.jr(s,f))
else{f=n.N(s)
if(f!=null){f.method="call"
return t.$1(H.jr(s,f))}else{f=m.N(s)
if(f==null){f=l.N(s)
if(f==null){f=k.N(s)
if(f==null){f=j.N(s)
if(f==null){f=i.N(s)
if(f==null){f=l.N(s)
if(f==null){f=h.N(s)
if(f==null){f=g.N(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dr(s,f==null?null:f.method))}}return t.$1(new H.hk(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dy()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ao(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dy()
return a},
ak:function(a){var t
if(a==null)return new H.dJ(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dJ(a,null)},
nw:function(a){if(a==null||typeof a!='object')return J.an(a)
else return H.aW(a)},
nh:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nr:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dL(b,new H.iU(a))
case 1:return H.dL(b,new H.iV(a,d))
case 2:return H.dL(b,new H.iW(a,d,e))
case 3:return H.dL(b,new H.iX(a,d,e,f))
case 4:return H.dL(b,new H.iY(a,d,e,f,g))}throw H.e(P.cp("Unsupported number of arguments for wrapped closure"))},
bp:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nr)
a.$identity=t
return t},
m5:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.r(c).$isb){t.$reflectionInfo=c
r=H.mD(t).r}else r=c
q=d?Object.create(new H.fQ().constructor.prototype):Object.create(new H.bt(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k7(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nj,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k4:H.jk
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k7(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
m2:function(a,b,c,d){var t=H.jk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k7:function(a,b,c){var t,s,r,q
if(c)return H.m4(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.m2(s,b==null?r!=null:b!==r,t,b)
return q},
m3:function(a,b,c,d){var t,s
t=H.jk
s=H.k4
switch(b?-1:a){case 0:throw H.e(new H.fG("Intercepted function with no arguments."))
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
H.m1()
t=$.k3
if(t==null){t=H.k2("receiver")
$.k3=t}s=b.$stubName
r=b.length
q=a[s]
t=H.m3(r,b==null?q!=null:b!==q,s,b)
return t},
jE:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.r(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.m5(a,b,t,!!d,e,f)},
jk:function(a){return a.a},
k4:function(a){return a.c},
m1:function(){var t=$.k5
if(t==null){t=H.k2("self")
$.k5=t}return t},
k2:function(a){var t,s,r,q,p
t=new H.bt("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nR:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.av(a,"String"))},
Y:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"double"))},
nQ:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"num"))},
na:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.av(a,"bool"))},
nq:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.av(a,"int"))},
ny:function(a,b){throw H.e(H.av(a,b.substring(3)))},
nx:function(a,b){var t=J.ac(b)
throw H.e(H.k6(H.dt(a),t.bx(b,3,t.gj(b))))},
jH:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.r(a)[b])return a
H.ny(a,b)},
aI:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else t=!0
if(t)return a
H.nx(a,b)},
nP:function(a){if(a==null)return a
if(!!J.r(a).$isb)return a
throw H.e(H.av(a,"List"))},
l0:function(a){var t=J.r(a)
return"$S" in t?t.$S():null},
bq:function(a,b){var t
if(a==null)return!1
t=H.l0(a)
return t==null?!1:H.l6(t,b)},
nN:function(a,b){var t,s
if(a==null)return a
if($.jB)return a
$.jB=!0
try{if(H.bq(a,b))return a
t=H.aJ(b,null)
s=H.av(a,t)
throw H.e(s)}finally{$.jB=!1}},
av:function(a,b){return new H.hi("type '"+H.dt(a)+"' is not a subtype of type '"+b+"'")},
k6:function(a,b){return new H.e_("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aw:function(a){if(!0===a)return!1
if(!!J.r(a).$isjn)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.av(a,"bool"))},
aH:function(a){throw H.e(new H.hv(a))},
d:function(a){if(H.aw(a))throw H.e(new P.cf(null))},
nD:function(a){throw H.e(new P.e3(a))},
j3:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
l4:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aE(a,null)},
C:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iM:function(a){if(a==null)return
return a.$ti},
l5:function(a,b){return H.jL(a["$as"+H.f(b)],H.iM(a))},
ad:function(a,b,c){var t,s
t=H.l5(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
ay:function(a,b){var t,s
t=H.iM(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aJ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dN(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aJ(t,b)
return H.n_(a,b)}return"unknown-reified-type"},
n_:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aJ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aJ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aJ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.ng(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aJ(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dN:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bU("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aJ(o,c)}return p?"":"<"+s.k(0)+">"},
iN:function(a){var t,s
if(a instanceof H.b8){t=H.l0(a)
if(t!=null)return H.aJ(t,null)}s=J.r(a).constructor.name
if(a==null)return s
return s+H.dN(a.$ti,0,null)},
jL:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jI(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jI(a,null,b)
return b},
c9:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iM(a)
s=J.r(a)
if(s[b]==null)return!1
return H.kY(H.jL(s[d],t),c)},
dO:function(a,b,c,d){if(a==null)return a
if(H.c9(a,b,c,d))return a
throw H.e(H.k6(H.dt(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dN(c,0,null),u.mangledGlobalNames)))},
nL:function(a,b,c,d){if(a==null)return a
if(H.c9(a,b,c,d))return a
throw H.e(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dN(c,0,null),u.mangledGlobalNames)))},
kY:function(a,b){var t,s,r,q,p
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
if(!H.Z(r,b[p]))return!1}return!0},
nd:function(a,b,c){return H.jI(a,b,H.l5(b,c))},
Z:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aC")return!0
if('func' in b)return H.l6(a,b)
if('func' in a)return b.name==="jn"||b.name==="n"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aJ(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kY(H.jL(o,t),r)},
kX:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.Z(o,n)||H.Z(n,o)))return!1}return!0},
n6:function(a,b){var t,s,r,q,p,o
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
if(!(H.Z(p,o)||H.Z(o,p)))return!1}return!0},
l6:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.Z(t,s)||H.Z(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kX(r,q,!1))return!1
if(!H.kX(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.Z(g,f)||H.Z(f,g)))return!1}}return H.n6(a.named,b.named)},
jI:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nS:function(a){var t=$.jF
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nO:function(a){return H.aW(a)},
nM:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nt:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.n))
t=$.jF.$1(a)
s=$.iK[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iT[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kW.$2(a,t)
if(t!=null){s=$.iK[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iT[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jJ(r)
$.iK[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iT[t]=r
return r}if(p==="-"){o=H.jJ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.l8(a,r)
if(p==="*")throw H.e(new P.dD(t))
if(u.leafTags[t]===true){o=H.jJ(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.l8(a,r)},
l8:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j1(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jJ:function(a){return J.j1(a,!1,null,!!a.$iso)},
nv:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j1(t,!1,null,!!t.$iso)
else return J.j1(t,c,null,null)},
no:function(){if(!0===$.jG)return
$.jG=!0
H.np()},
np:function(){var t,s,r,q,p,o,n,m
$.iK=Object.create(null)
$.iT=Object.create(null)
H.nn()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ld.$1(p)
if(o!=null){n=H.nv(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nn:function(){var t,s,r,q,p,o,n
t=C.T()
t=H.bo(C.Q,H.bo(C.V,H.bo(C.A,H.bo(C.A,H.bo(C.U,H.bo(C.R,H.bo(C.S(C.B),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jF=new H.iQ(p)
$.kW=new H.iR(o)
$.ld=new H.iS(n)},
bo:function(a,b){return a(b)||b},
nC:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fB:function fB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hg:function hg(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dr:function dr(a,b){this.a=a
this.b=b},
eR:function eR(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a){this.a=a},
jb:function jb(a){this.a=a},
dJ:function dJ(a,b){this.a=a
this.b=b},
iU:function iU(a){this.a=a},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c){this.a=a
this.b=b
this.c=c},
iX:function iX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b8:function b8(){},
h3:function h3(){},
fQ:function fQ(){},
bt:function bt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hi:function hi(a){this.a=a},
e_:function e_(a){this.a=a},
fG:function fG(a){this.a=a},
hv:function hv(a){this.a=a},
aE:function aE(a,b){this.a=a
this.b=b},
af:function af(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eQ:function eQ(a){this.a=a},
eT:function eT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eU:function eU(a,b){this.a=a
this.$ti=b},
eV:function eV(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iQ:function iQ(a){this.a=a},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
B:function(a){return a},
iD:function(a){var t,s,r
if(!!J.r(a).$isl)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bJ:function bJ(){},
bg:function bg(){},
f6:function f6(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
di:function di(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
dm:function dm(){},
fd:function fd(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
ng:function(a){var t=H.C(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
j2:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
r:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.da.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.dc.prototype
if(typeof a=="boolean")return J.eP.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.n)return a
return J.iL(a)},
j1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iL:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jG==null){H.no()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dD("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$jq()]
if(p!=null)return p
p=H.nt(a)
if(p!=null)return p
if(typeof a=="function")return C.W
s=Object.getPrototypeOf(a)
if(s==null)return C.E
if(s===Object.prototype)return C.E
if(typeof q=="function"){Object.defineProperty(q,$.$get$jq(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
ac:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.n)return a
return J.iL(a)},
dM:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.n)return a
return J.iL(a)},
l2:function(a){if(typeof a=="number")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aZ.prototype
return a},
ni:function(a){if(typeof a=="number")return J.be.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aZ.prototype
return a},
l3:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.aZ.prototype
return a},
j:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.n)return a
return J.iL(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).w(a,b)},
am:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.l2(a).aE(a,b)},
lj:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.l2(a).aF(a,b)},
b6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.ns(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ac(a).h(a,b)},
lk:function(a,b,c,d){return J.j(a).dI(a,b,c,d)},
jM:function(a,b){return J.l3(a).aO(a,b)},
br:function(a,b){return J.j(a).e_(a,b)},
ll:function(a,b,c,d){return J.j(a).e0(a,b,c,d)},
lm:function(a,b,c){return J.j(a).e1(a,b,c)},
jN:function(a,b){return J.j(a).c_(a,b)},
jc:function(a,b){return J.j(a).P(a,b)},
jO:function(a,b,c){return J.j(a).c2(a,b,c)},
ln:function(a,b){return J.j(a).ef(a,b)},
dP:function(a,b,c){return J.j(a).c3(a,b,c)},
cd:function(a,b,c){return J.j(a).c4(a,b,c)},
dQ:function(a,b){return J.j(a).ei(a,b)},
lo:function(a,b){return J.j(a).c5(a,b)},
lp:function(a,b,c){return J.j(a).c6(a,b,c)},
jP:function(a,b,c,d){return J.j(a).c7(a,b,c,d)},
lq:function(a,b,c,d,e){return J.j(a).c8(a,b,c,d,e)},
lr:function(a,b){return J.ni(a).R(a,b)},
jd:function(a,b,c){return J.ac(a).em(a,b,c)},
je:function(a){return J.j(a).ca(a)},
ls:function(a){return J.j(a).cb(a)},
lt:function(a){return J.j(a).ce(a)},
jQ:function(a){return J.j(a).er(a)},
lu:function(a,b){return J.j(a).cg(a,b)},
jf:function(a,b){return J.j(a).ci(a,b)},
lv:function(a,b,c,d){return J.j(a).cj(a,b,c,d)},
lw:function(a,b,c,d,e){return J.j(a).ez(a,b,c,d,e)},
lx:function(a,b,c,d,e){return J.j(a).ck(a,b,c,d,e)},
ly:function(a,b,c,d,e,f){return J.j(a).eA(a,b,c,d,e,f)},
lz:function(a,b){return J.dM(a).t(a,b)},
ce:function(a,b){return J.j(a).cl(a,b)},
lA:function(a,b){return J.j(a).cm(a,b)},
lB:function(a){return J.j(a).eB(a)},
lC:function(a,b){return J.dM(a).ax(a,b)},
lD:function(a){return J.j(a).gee(a)},
an:function(a){return J.r(a).gu(a)},
bs:function(a){return J.dM(a).gv(a)},
dR:function(a){return J.ac(a).gj(a)},
lE:function(a){return J.j(a).gbd(a)},
lF:function(a){return J.r(a).gA(a)},
lG:function(a){return J.j(a).gf0(a)},
lH:function(a){return J.j(a).gaB(a)},
jg:function(a){return J.j(a).gm(a)},
jh:function(a){return J.j(a).gn(a)},
jR:function(a){return J.j(a).gK(a)},
ji:function(a,b){return J.j(a).a6(a,b)},
lI:function(a){return J.j(a).aD(a)},
lJ:function(a){return J.j(a).bk(a)},
lK:function(a,b){return J.j(a).bl(a,b)},
lL:function(a,b,c){return J.j(a).bm(a,b,c)},
jS:function(a,b,c){return J.j(a).bp(a,b,c)},
lM:function(a,b){return J.j(a).co(a,b)},
lN:function(a,b){return J.dM(a).cr(a,b)},
lO:function(a,b,c){return J.j(a).cs(a,b,c)},
lP:function(a){return J.dM(a).eU(a)},
lQ:function(a,b){return J.j(a).G(a,b)},
lR:function(a,b,c,d){return J.j(a).bv(a,b,c,d)},
lS:function(a,b,c,d,e,f,g){return J.j(a).cz(a,b,c,d,e,f,g)},
lT:function(a,b,c,d){return J.j(a).cA(a,b,c,d)},
jT:function(a,b,c,d){return J.j(a).cB(a,b,c,d)},
lU:function(a){return J.l3(a).f3(a)},
aK:function(a){return J.r(a).k(a)},
lV:function(a,b,c,d){return J.j(a).f5(a,b,c,d)},
lW:function(a,b,c){return J.j(a).cC(a,b,c)},
lX:function(a,b,c){return J.j(a).cD(a,b,c)},
jj:function(a,b,c){return J.j(a).cE(a,b,c)},
lY:function(a,b,c){return J.j(a).cF(a,b,c)},
jU:function(a,b,c){return J.j(a).cG(a,b,c)},
jV:function(a,b,c){return J.j(a).cH(a,b,c)},
jW:function(a,b,c){return J.j(a).cI(a,b,c)},
jX:function(a,b,c,d){return J.j(a).cJ(a,b,c,d)},
jY:function(a,b,c,d){return J.j(a).cK(a,b,c,d)},
lZ:function(a,b){return J.j(a).cM(a,b)},
m_:function(a,b,c){return J.j(a).f6(a,b,c)},
jZ:function(a,b,c,d,e,f,g){return J.j(a).cO(a,b,c,d,e,f,g)},
m0:function(a,b,c,d,e){return J.j(a).cP(a,b,c,d,e)},
a:function a(){},
eP:function eP(){},
dc:function dc(){},
bF:function bF(){},
fr:function fr(){},
aZ:function aZ(){},
aT:function aT(){},
aR:function aR(a){this.$ti=a},
jo:function jo(a){this.$ti=a},
dW:function dW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
be:function be(){},
db:function db(){},
da:function da(){},
aS:function aS(){}},P={
mM:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.n7()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.bp(new P.hy(t),1)).observe(s,{childList:true})
return new P.hx(t,s,r)}else if(self.setImmediate!=null)return P.n8()
return P.n9()},
mN:function(a){++u.globalState.f.b
self.scheduleImmediate(H.bp(new P.hz(a),0))},
mO:function(a){++u.globalState.f.b
self.setImmediate(H.bp(new P.hA(a),0))},
mP:function(a){P.jx(C.y,a)},
n2:function(a,b){if(H.bq(a,{func:1,args:[P.aC,P.aC]})){b.toString
return a}else{b.toString
return a}},
mg:function(a,b,c){var t
if(a==null)a=new P.bP()
t=$.u
if(t!==C.d)t.toString
t=new P.J(0,t,null,[c])
t.dJ(a,b)
return t},
mh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.J(0,$.u,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eE(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.bh(new P.eD(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.J(0,$.u,null,[null])
l.bH(C.C)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.M(j)
n=H.ak(j)
if(t.b===0||!1)return P.mg(o,n,null)
else{t.c=o
t.d=n}}return s},
mZ:function(a,b,c){$.u.toString
a.O(b,c)},
mR:function(a,b){var t=new P.J(0,$.u,null,[b])
H.d(!0)
t.a=4
t.c=a
return t},
kN:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.J))
H.d(b.a===0)
b.a=1
try{a.bh(new P.hU(b),new P.hV(b))}catch(r){t=H.M(r)
s=H.ak(r)
P.nz(new P.hW(b,t,s))}},
hT:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.ae(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bk(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bU(q)}},
bk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iE(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bk(t.a,b)}s=t.a
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
P.iE(null,null,p,o,s)
return}s=$.u
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.u
H.d(l==null?s!=null:l!==s)
j=$.u
$.u=l
i=j}else i=null
s=b.c
if(s===8)new P.i0(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i_(r,b,m).$0()}else if((s&2)!==0)new P.hZ(t,r,b).$0()
if(i!=null){H.d(!0)
$.u=i}s=r.b
if(!!J.r(s).$isaQ){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ae(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hT(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.ae(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
n1:function(){var t,s
for(;t=$.bm,t!=null;){$.c7=null
s=t.b
$.bm=s
if(s==null)$.c6=null
t.a.$0()}},
n5:function(){$.jC=!0
try{P.n1()}finally{$.c7=null
$.jC=!1
if($.bm!=null)$.$get$jz().$1(P.kZ())}},
kU:function(a){var t=new P.dF(a,null)
if($.bm==null){$.c6=t
$.bm=t
if(!$.jC)$.$get$jz().$1(P.kZ())}else{$.c6.b=t
$.c6=t}},
n4:function(a){var t,s,r
t=$.bm
if(t==null){P.kU(a)
$.c7=$.c6
return}s=new P.dF(a,null)
r=$.c7
if(r==null){s.b=t
$.c7=s
$.bm=s}else{s.b=r.b
r.b=s
$.c7=s
if(s.b==null)$.c6=s}},
nz:function(a){var t=$.u
if(C.d===t){P.bn(null,null,C.d,a)
return}t.toString
P.bn(null,null,t,t.b4(a))},
mX:function(a,b,c){var t=a.ej(0)
if(!!J.r(t).$isaQ&&t!==$.$get$kj())t.f7(new P.iC(b,c))
else b.ab(c)},
mI:function(a,b){var t=$.u
if(t===C.d){t.toString
return P.jx(a,b)}return P.jx(a,t.b4(b))},
jx:function(a,b){var t=C.b.H(a.a,1000)
return H.mH(t<0?0:t,b)},
jy:function(a){var t,s
H.d(a!=null)
t=$.u
H.d(a==null?t!=null:a!==t)
s=$.u
$.u=a
return s},
iE:function(a,b,c,d,e){var t={}
t.a=d
P.n4(new P.iF(t,e))},
kS:function(a,b,c,d){var t,s
if($.u===c)return d.$0()
t=P.jy(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.u=s}},
kT:function(a,b,c,d,e){var t,s
if($.u===c)return d.$1(e)
t=P.jy(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.u=s}},
n3:function(a,b,c,d,e,f){var t,s
if($.u===c)return d.$2(e,f)
t=P.jy(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.u=s}},
bn:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b4(d):c.eg(d)
P.kU(d)},
hy:function hy(a){this.a=a},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
hz:function hz(a){this.a=a},
hA:function hA(a){this.a=a},
eE:function eE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hE:function hE(){},
hw:function hw(a,b){this.a=a
this.$ti=b},
iu:function iu(a,b){this.a=a
this.$ti=b},
c_:function c_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hQ:function hQ(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
hW:function hW(a,b,c){this.a=a
this.b=b
this.c=c},
hS:function hS(a,b){this.a=a
this.b=b},
hX:function hX(a,b){this.a=a
this.b=b},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a,b){this.a=a
this.b=b},
bT:function bT(){},
fX:function fX(a){this.a=a},
fY:function fY(a,b){this.a=a
this.b=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a){this.a=a},
fU:function fU(){},
iC:function iC(a,b){this.a=a
this.b=b},
b7:function b7(a,b){this.a=a
this.b=b},
iB:function iB(){},
iF:function iF(a,b){this.a=a
this.b=b},
ie:function ie(){},
ih:function ih(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
kp:function(a,b){return new H.af(0,null,null,null,null,null,0,[a,b])},
H:function(){return new H.af(0,null,null,null,null,null,0,[null,null])},
aV:function(a){return H.nh(a,new H.af(0,null,null,null,null,null,0,[null,null]))},
c3:function(a,b){return new P.dH(0,null,null,null,null,null,0,[a,b])},
mV:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mo:function(a,b,c){var t,s
if(P.jD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c8()
C.a.l(s,a)
try{P.n0(a,t)}finally{H.d(C.a.gba(s)===a)
s.pop()}s=P.kw(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eO:function(a,b,c){var t,s,r
if(P.jD(a))return b+"..."+c
t=new P.bU(b)
s=$.$get$c8()
C.a.l(s,a)
try{r=t
r.a=P.kw(r.ga1(),a,", ")}finally{H.d(C.a.gba(s)===a)
s.pop()}s=t
s.a=s.ga1()+c
s=t.ga1()
return s.charCodeAt(0)==0?s:s},
jD:function(a){var t,s
for(t=0;s=$.$get$c8(),t<s.length;++t)if(a===s[t])return!0
return!1},
n0:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.f(t.gq())
C.a.l(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq();++r
if(!t.p()){if(r<=4){C.a.l(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gq();++r
H.d(r<100)
for(;t.p();n=m,m=l){l=t.gq();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.l(b,"...")
return}}o=H.f(n)
p=H.f(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.l(b,k)
C.a.l(b,o)
C.a.l(b,p)},
ag:function(a,b,c,d){return new P.i7(0,null,null,null,null,null,0,[d])},
js:function(a,b){var t,s
t=P.ag(null,null,null,b)
for(s=J.bs(a);s.p();)t.l(0,s.gq())
return t},
ms:function(a){var t,s,r
t={}
if(P.jD(a))return"{...}"
s=new P.bU("")
try{C.a.l($.$get$c8(),a)
r=s
r.a=r.ga1()+"{"
t.a=!0
a.ax(0,new P.f_(t,s))
t=s
t.a=t.ga1()+"}"}finally{t=$.$get$c8()
H.d(C.a.gba(t)===a)
t.pop()}t=s.ga1()
return t.charCodeAt(0)==0?t:t},
jt:function(a,b){var t=new P.eW(null,0,0,0,[b])
t.dl(a,b)
return t},
dH:function dH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i7:function i7(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
i8:function i8(a,b,c){this.a=a
this.b=b
this.c=c},
c2:function c2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i4:function i4(){},
dd:function dd(){},
v:function v(){},
f_:function f_(a,b){this.a=a
this.b=b},
eW:function eW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i9:function i9(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fJ:function fJ(){},
fI:function fI(){},
bQ:function bQ(){},
kw:function(a,b,c){var t=J.bs(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
m6:function(a,b){return J.lr(a,b)},
m7:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
m8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cj:function(a){if(a>=10)return""+a
return"0"+a},
jm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aK(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mc(a)},
mc:function(a){var t=J.r(a)
if(!!t.$isb8)return t.k(a)
return H.fx(a)},
dV:function(a){return new P.ao(!1,null,null,a)},
k_:function(a,b,c){return new P.ao(!0,a,b,c)},
fy:function(a,b,c){return new P.dv(null,null,!0,a,b,"Value not in range")},
aX:function(a,b,c,d,e){return new P.dv(b,c,!0,a,d,"Invalid value")},
kv:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aX(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aX(b,a,c,"end",f))
return b},
A:function(a,b,c,d,e){var t=e!=null?e:J.dR(b)
return new P.eK(b,t,!0,a,c,"Index out of range")},
cp:function(a){return new P.hP(a)},
kq:function(a,b,c){var t,s
t=H.C([],[c])
for(s=J.bs(a);s.p();)C.a.l(t,s.gq())
return t},
al:function(a){H.j2(H.f(a))},
ax:function ax(){},
G:function G(){},
bu:function bu(a,b){this.a=a
this.b=b},
L:function L(){},
aP:function aP(a){this.a=a},
ea:function ea(){},
eb:function eb(){},
ba:function ba(){},
cf:function cf(a){this.a=a},
bP:function bP(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dv:function dv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eK:function eK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
t:function t(a){this.a=a},
dD:function dD(a){this.a=a},
as:function as(a){this.a=a},
a0:function a0(a){this.a=a},
dy:function dy(){},
e3:function e3(a){this.a=a},
hP:function hP(a){this.a=a},
ed:function ed(a,b,c){this.a=a
this.b=b
this.$ti=c},
m:function m(){},
V:function V(){},
d9:function d9(){},
b:function b(){},
aB:function aB(){},
aC:function aC(){},
U:function U(){},
n:function n(){},
bS:function bS(){},
q:function q(){},
bU:function bU(a){this.a=a},
l_:function(a){return a},
iI:function(a){var t,s,r,q,p
if(a==null)return
t=P.H()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.P)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
ne:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lC(a,new P.iH(t))
return t},
ke:function(){var t=$.kd
if(t==null){t=J.jd(window.navigator.userAgent,"Opera",0)
$.kd=t}return t},
m9:function(){var t,s
t=$.ka
if(t!=null)return t
s=$.kb
if(s==null){s=J.jd(window.navigator.userAgent,"Firefox",0)
$.kb=s}if(s)t="-moz-"
else{s=$.kc
if(s==null){s=!P.ke()&&J.jd(window.navigator.userAgent,"Trident/",0)
$.kc=s}if(s)t="-ms-"
else t=P.ke()?"-o-":"-webkit-"}$.ka=t
return t},
iH:function iH(a){this.a=a},
i6:function i6(){},
id:function id(){},
I:function I(){},
dS:function dS(){},
aL:function aL(){},
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
ev:function ev(){},
ez:function ez(){},
eB:function eB(){},
ae:function ae(){},
aA:function aA(){},
eI:function eI(){},
aq:function aq(){},
eS:function eS(){},
f0:function f0(){},
f1:function f1(){},
ar:function ar(){},
fh:function fh(){},
fo:function fo(){},
ft:function ft(){},
fu:function fu(){},
fz:function fz(){},
fA:function fA(){},
bR:function bR(){},
fZ:function fZ(){},
F:function F(){},
h_:function h_(){},
h0:function h0(){},
dA:function dA(){},
h4:function h4(){},
bW:function bW(){},
at:function at(){},
he:function he(){},
hm:function hm(){},
ho:function ho(){},
hp:function hp(){},
c0:function c0(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
cx:function cx(){},
cv:function cv(){},
cC:function cC(){},
cG:function cG(){},
cQ:function cQ(){},
cZ:function cZ(){},
cV:function cV(){},
cX:function cX(){},
dX:function dX(){},
fD:function fD(){},
fE:function fE(){},
iy:function iy(){},
fP:function fP(){},
cw:function cw(){},
cT:function cT(){}},W={
ma:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).M(t,a,b,c)
s.toString
t=new H.dE(new W.R(s),new W.iG(),[W.p])
return t.ga_(t)},
mb:function(a){return"wheel"},
bw:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lG(a)
if(typeof s==="string")t=a.tagName}catch(r){H.M(r)}return t},
mQ:function(a,b){return document.createElement(a)},
b5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kQ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ai:function(a,b,c,d,e){var t=W.kV(new W.hO(c))
t=new W.hN(0,a,b,t,!1,[e])
t.dD(a,b,c,!1,e)
return t},
kO:function(a){var t,s
t=document.createElement("a")
s=new W.im(t,window.location)
s=new W.c1(s)
s.dE(a)
return s},
mT:function(a,b,c,d){return!0},
mU:function(a,b,c,d){var t,s,r,q,p
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
kR:function(){var t=P.q
t=new W.iv(P.js(C.t,t),P.ag(null,null,null,t),P.ag(null,null,null,t),P.ag(null,null,null,t),null)
t.dG(null,new H.bG(C.t,new W.iw(),[H.ay(C.t,0),null]),["TEMPLATE"],null)
return t},
kV:function(a){var t=$.u
if(t===C.d)return a
return t.eh(a)},
k:function k(){},
dT:function dT(){},
dU:function dU(){},
a_:function a_(){},
dY:function dY(){},
cg:function cg(){},
aM:function aM(){},
aN:function aN(){},
ch:function ch(){},
ci:function ci(){},
aO:function aO(){},
e1:function e1(){},
y:function y(){},
b9:function b9(){},
e2:function e2(){},
e4:function e4(){},
e5:function e5(){},
ck:function ck(){},
bv:function bv(){},
cl:function cl(){},
e6:function e6(){},
cm:function cm(){},
e7:function e7(){},
cn:function cn(){},
co:function co(){},
e8:function e8(){},
e9:function e9(){},
a1:function a1(){},
iG:function iG(){},
i:function i(){},
h:function h(){},
a2:function a2(){},
ex:function ex(){},
ey:function ey(){},
eC:function eC(){},
a3:function a3(){},
cs:function cs(){},
eG:function eG(){},
bD:function bD(){},
ct:function ct(){},
eH:function eH(){},
bE:function bE(){},
bb:function bb(){},
bc:function bc(){},
bd:function bd(){},
eL:function eL(){},
aU:function aU(){},
eY:function eY(){},
bH:function bH(){},
f2:function f2(){},
f3:function f3(){},
bI:function bI(){},
a5:function a5(){},
f4:function f4(){},
N:function N(){},
fe:function fe(){},
R:function R(a){this.a=a},
p:function p(){},
dn:function dn(){},
bO:function bO(){},
fn:function fn(){},
fp:function fp(){},
a6:function a6(){},
fs:function fs(){},
fv:function fv(){},
fw:function fw(){},
du:function du(){},
fF:function fF(){},
dw:function dw(){},
fH:function fH(){},
fL:function fL(){},
a7:function a7(){},
fM:function fM(){},
a8:function a8(){},
fO:function fO(){},
a9:function a9(){},
fT:function fT(){},
W:function W(){},
ah:function ah(){},
dz:function dz(){},
h1:function h1(){},
h2:function h2(){},
bV:function bV(){},
aa:function aa(){},
X:function X(){},
h5:function h5(){},
h6:function h6(){},
h8:function h8(){},
ab:function ab(){},
aY:function aY(){},
hc:function hc(){},
hd:function hd(){},
bi:function bi(){},
hf:function hf(){},
dC:function dC(){},
aF:function aF(){},
hl:function hl(){},
bj:function bj(){},
hn:function hn(){},
hq:function hq(){},
hr:function hr(){},
b0:function b0(){},
bZ:function bZ(){},
ht:function ht(a){this.a=a},
hu:function hu(){},
b1:function b1(){},
hD:function hD(){},
dG:function dG(){},
hF:function hF(){},
hG:function hG(){},
hH:function hH(){},
i2:function i2(){},
i3:function i3(){},
dI:function dI(){},
io:function io(){},
ir:function ir(){},
is:function is(){},
iz:function iz(){},
iA:function iA(){},
hB:function hB(){},
hI:function hI(a){this.a=a},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hJ:function hJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hN:function hN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hO:function hO(a){this.a=a},
c1:function c1(a){this.a=a},
z:function z(){},
dq:function dq(a){this.a=a},
fg:function fg(a){this.a=a},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
c4:function c4(){},
ip:function ip(){},
iq:function iq(){},
iv:function iv(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iw:function iw(){},
it:function it(){},
cr:function cr(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dp:function dp(){},
im:function im(a,b){this.a=a
this.b=b},
dK:function dK(a){this.a=a},
ix:function ix(a){this.a=a},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
cu:function cu(){},
cO:function cO(){},
cA:function cA(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cN:function cN(){},
cy:function cy(){},
cz:function cz(){},
cB:function cB(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
cP:function cP(){},
cR:function cR(){},
d0:function d0(){},
d1:function d1(){},
d_:function d_(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
cS:function cS(){},
cU:function cU(){},
cW:function cW(){},
cY:function cY(){},
d2:function d2(){},
d3:function d3(){}},B={
nA:function(a){var t,s
t=document
s=W.aU
W.ai(t,"keydown",new B.j4(),!1,s)
W.ai(t,"keyup",new B.j5(),!1,s)
if(!$.nB)W.ai(t,"mousemove",new B.j6(),!1,W.N)
s=W.N
W.ai(t,"mousedown",new B.j7(),!1,s)
W.ai(t,"mouseup",new B.j8(),!1,s)},
mt:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.B(3))
s=$.$get$iJ()
r=$.$get$ca()
q=new T.a4(new Float32Array(H.B(16)))
q.Z()
q=new B.fi(a,b,c,0,new T.x(t),-0.02,s,r,q,new T.x(new Float32Array(H.B(3))),new T.x(new Float32Array(H.B(3))),new T.x(new Float32Array(H.B(3))),new T.x(new Float32Array(H.B(3))),"camera:orbit",!1,!0)
q.dn(a,b,c,d)
return q},
j4:function j4(){},
j5:function j5(){},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
fi:function fi(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fj:function fj(a){this.a=a},
fk:function fk(a){this.a=a},
fl:function fl(){},
fm:function fm(a){this.a=a},
mE:function(a,b,c,d,e,a0,a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=a2+1
s=a1+1
r=B.mu(new B.fK(a0,d,e,c),0,6.283185307179586,s,!1,0.001)
H.d(r.length===2*s)
q=B.mJ(r,a2,a3,!1)
H.d(q.length===s)
H.d(q[0].length===2*t)
p=[]
o=new G.eF(!1,[],[],p,P.H())
for(n=q.length,m=0;m<q.length;q.length===n||(0,H.P)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){j=l[k]
j.toString
i=new T.x(new Float32Array(3))
i.J(j)
C.a.l(p,i)}}H.d(p.length===t*s)
o.dh(t,s,!1)
o.di(t,s)
n=o.e
H.d(n.h(0,"aTexUV").length===p.length)
H.d(!n.D(0,"aNormal"))
H.d(C.i.bu("aNormal","a"))
h=$.$get$S().h(0,"aNormal")
switch(h.a){case"vec2":n.i(0,"aNormal",H.C([],[T.b_]))
break
case"vec3":n.i(0,"aNormal",H.C([],[T.x]))
break
case"vec4":n.i(0,"aNormal",H.C([],[T.aG]))
break
case"float":n.i(0,"aNormal",H.C([],[P.L]))
break
case"uvec4":n.i(0,"aNormal",H.C([],[[P.b,P.m]]))
break
default:if(H.aw(!1))H.aH("unknown type for aNormal")}for(j=q.length,m=0;m<q.length;q.length===j||(0,H.P)(q),++m){l=q[m]
for(k=0;k<l.length;k+=2){i=l[k+1]
g=n.h(0,"aNormal")
i.toString
f=new T.x(new Float32Array(3))
f.J(i);(g&&C.a).l(g,f)}}H.d(n.h(0,"aNormal").length===p.length)
return o},
mJ:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(H.B(3))
r=new T.x(s)
q=new Float32Array(H.B(3))
p=new T.x(q)
o=new Float32Array(H.B(3))
n=new T.x(o)
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
o[2]=e*d}p.a3(0)
n.a3(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.J(k)
r.aw(p,a)
r.aw(n,a0)
h=new T.x(new Float32Array(3))
h.J(r)
C.a.l(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aw(p,a)
r.aw(n,a0)
r.a3(0)
h=new T.x(new Float32Array(3))
h.J(r)
C.a.l(i,h)}}return t},
mu:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.d(d>=2)
t=[]
s=new T.x(new Float32Array(H.B(3)))
r=new T.x(new Float32Array(H.B(3)))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.bw(s)
n=new T.x(new Float32Array(3))
n.J(s)
C.a.l(t,n)
n=new T.x(new Float32Array(3))
n.J(r)
C.a.l(t,n)}return t},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mL:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ak(t,"\n")},
kM:function(a,b,c){var t,s,r,q
t=J.j(a)
s=t.cd(a,b)
t.bt(a,s,c)
t.c9(a,s)
r=t.bo(a,s,35713)
if(r!=null&&!r){q=t.bn(a,s)
P.al("E:Compilation failed:")
P.al("E:"+G.mL(c))
P.al("E:Failure:")
P.al(C.i.a5("E:",q))
throw H.e(q)}return s},
kr:function(a){var t=new G.dg(P.H(),a,!1,!0)
t.dm(a)
return t},
ki:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.jR(a[s])}return b},
me:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])}return b},
mf:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.jR(a[s])
b[t+3]=J.lH(a[s])}return b},
md:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.b6(a[s],0)
b[t+1]=J.b6(a[s],1)
b[t+2]=J.b6(a[s],2)
b[t+3]=J.b6(a[s],3)}return b},
mS:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gE(t),s=s.gv(s),r=b.x,q=[[P.b,P.m]],p=[P.L],o=[T.aG],n=[T.x],m=[T.b_];s.p();){l=s.gq()
if(!r.D(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.l1>0)H.j2("I: "+k)
continue}j=t.h(0,l)
switch($.$get$S().h(0,l).a){case"vec2":b.a9(l,G.me(H.dO(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a9(l,G.ki(H.dO(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a9(l,G.mf(H.dO(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a9(l,new Float32Array(H.iD(H.dO(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a9(l,G.md(H.dO(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aw(!1))H.aH("unknown type for "+H.f(l)+" ["+J.lF(j[0]).k(0)+"] ["+new H.aE(H.iN(j),null).k(0)+"] "+H.f(j))}}},
jv:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ag(null,null,null,P.q)
s=c.b
r=d.b
q=c.f
p=J.ls(b.a)
o=G.kM(b.a,35633,s)
J.jO(b.a,p,o)
n=G.kM(b.a,35632,r)
J.jO(b.a,p,n)
if(q.length>0)J.lV(b.a,p,q,35980)
J.lM(b.a,p)
if(!J.lL(b.a,p,35714))H.E(J.lK(b.a,p))
t=new G.fC(b,c,d,p,P.js(c.c,null),P.H(),P.H(),t,null,a,!1,!0)
t.dq(a,b,c,d)
return t},
kk:function(a,b,c,d,e){var t=new G.eJ(c,b,J.lt(a.a),e,a,new G.h7(!1,!1,!1,!0,1,9729,9729))
t.dk(a,b,c,d,e)
return t},
f5:function f5(){},
hj:function hj(){},
dZ:function dZ(){},
e0:function e0(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eF:function eF(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a,b,c){this.a=a
this.b=b
this.c=c},
dg:function dg(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dh:function dh(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fq:function fq(){},
fC:function fC(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
w:function w(a,b,c){this.a=a
this.b=b
this.c=c},
aD:function aD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fN:function fN(){},
h7:function h7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bX:function bX(){},
eJ:function eJ(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f},
nu:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t={}
s=document
r=new R.fS(0,0,null,null,null,null)
r.dv(C.r.cU(s,"stats"),"blue","gray")
q=C.r.eT(s,"#webgl-canvas")
p=new G.e0(null,q)
o=(q&&C.w).bj(q,"webgl2",P.aV(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.E(P.cp('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.aK(J.lI(o))
if($.l1>0)P.al("I: "+n)
J.lq(o,0,0,0,1)
J.ce(o,2929)
J.ce(o,2884)
m=B.mt(165,0,0,q)
o=new T.a4(new Float32Array(H.B(16)))
o.Z()
n=new T.a4(new Float32Array(H.B(16)))
n.Z()
l=new R.ds(q,p,m,50,1,0.1,1000,o,n,new T.a4(new Float32Array(H.B(16))),P.H(),"perspective",!1,!0)
l.bC()
l.cu(null)
W.ai(window,"resize",l.geX(),!1,W.i)
k=G.jv("textured",p,$.$get$lh(),$.$get$lg())
n=$.$get$l9()
o=new G.aD("PerlinNoiseColor F",null,[],[],[],[],0,P.H())
o.ap(["vNormal"])
o.a0(["uTime","uTransformationMatrix"])
H.d(o.b==null)
o.b=o.aM(!1,["","vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","#define VARIANT 1\n\nvoid main() {\n#if VARIANT == 1\n  float mytime = uTime/2.0;\n#ifdef BLACK\n  mytime = uTime/10.0;\n#endif\n  float period = 10.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( vNormal *factor + mytime ), vec3( period ) );\n#else\n  float mytime = 0.0 ; //uTime/50.0;\n  float period = 5.0;\n  float factor = 1.0; // sin( uTime)/4.0+2.0;\n  vec3 translation = uTransformationMatrix[3].xyz;\n  float r = pnoise( .75 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float g = pnoise( 0.8 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float b = pnoise( 0.9 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n  float n = pnoise( 1.5 * ( translation*0.175 + vNormal *factor + mytime ), vec3( period ) );\n#endif\n\n  n = pow( .001, n );\n//float n = 10.0 * pnoise( 5.0 * ( vNormal + uTime ), vec3( 10.0 ) ) * pnoise( .5 * ( vNormal + uTime ), vec3( 10.0 ) );\n//n += .5 * pnoise( 4.0 * vNormal, vec3( 10.0 ) );\n#ifdef BLACK\n  vec3 color = vec3( 1.0-(r + n), 1.0-(g + n), 1.0-(b + n) );\n#else\n  vec3 color = vec3( (r + n), (g + n), (b + n) );\n#endif\n  oFragColor = vec4( color, 1.0 );\n}\n"],null)
j=G.jv("perlin",p,n,o)
i=B.mE(!0,!0,1,2,3,20,128,16,4,!1)
o=k.d
n=J.jQ(o.a)
h=new G.dh(o,n,4,P.H(),k.e.x,null,0,-1,null,null,P.H(),"meshdata:torusknot",!1,!0)
h.by(G.ki(i.d,null))
g=i.dg()
h.y=J.je(o.a)
H.d(h.ch!=null)
f=h.ch.length
if(f<768){h.saS(new Uint8Array(H.iD(g)))
h.Q=5121}else if(f<196608){h.saS(new Uint16Array(H.iD(g)))
h.Q=5123}else{h.saS(new Uint32Array(H.iD(g)))
h.Q=5125}J.dQ(o.a,n)
n=h.y
g=h.cx
f=J.r(g)
H.d(!!f.$iskI||!!f.$iskJ||!!f.$iskK)
J.dP(o.a,34963,n)
J.jP(o.a,34963,g,35048)
G.mS(i,h)
e=G.kr("texture")
o=new T.a4(new Float32Array(H.B(16)))
o.Z()
o.bs(-50,0,0)
e.C("uModelMatrix",o)
e.C("uColor",new T.x(new Float32Array(H.B(3))))
d=G.kr("perlin")
o=new T.a4(new Float32Array(H.B(16)))
o.Z()
o.bs(50,0,0)
d.C("uModelMatrix",o)
c=G.jv("stars",p,$.$get$lc(),$.$get$lb())
o=$.$get$k0()
b=new G.dg(P.H(),"stars",!1,!0)
b.C("cDepthTest",!0)
b.C("cDepthWrite",!1)
b.C("cBlendEquation",o)
b.C("cStencilFunc",$.$get$jw())
a=s.createElement("canvas")
a.width=64
a.height=64
a0=C.w.cT(a,"2d")
a1=(a0&&C.p).cc(a0,32,32,1,32,32,22);(a1&&C.m).av(a1,0,"gray")
C.m.av(a1,1,"black")
a0.fillStyle=a1
C.p.eC(a0,0,0,64,64)
a1=C.p.cc(a0,32,32,1,32,32,6);(a1&&C.m).av(a1,0,"white")
C.m.av(a1,1,"gray")
a0.globalAlpha=0.9
a0.fillStyle=a1
a0.arc(32,32,4,0,6.283185307179586,!1)
a0.fill("nonzero")
b.C("uTexture",G.kk(p,"Utils::Particles",a,null,3553))
b.C("uPointSize",1000)
s=new T.a4(new Float32Array(H.B(16)))
s.Z()
b.C("uModelMatrix",s)
a2=R.mK(c,2000,200)
t.a=0
P.mh([D.mr($.lf)],null,!1).aA(new G.j0(p,e,new G.j_(t,r,m,l,k,j,h,e,d,c,b,a2)))},
j_:function j_(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=a0
_.z=a1
_.Q=a2
_.ch=a3},
j0:function j0(a,b,c){this.a=a
this.b=b
this.c=c}},R={
mK:function(a,b,c){var t,s,r,q
t="stars_"+b
s=b*3
r=new Float32Array(H.B(s))
for(q=0;q<s;++q)r[q]=($.$get$kL().eR()-0.5)*c
s=a.d
s=new G.dh(s,J.jQ(s.a),0,P.H(),a.e.x,null,0,-1,null,null,P.H(),"meshdata:"+t,!1,!0)
s.by(r)
return s},
ds:function ds(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
_.fy=a
_.go=b
_.x=c
_.y=d
_.z=e
_.Q=f
_.ch=a0
_.cx=a1
_.cy=a2
_.db=a3
_.d=a4
_.a=a5
_.b=a6
_.c=a7},
fR:function fR(){},
fS:function fS(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},D={
mr:function(a){var t,s,r
t=new P.J(0,$.u,null,[null])
s=document.createElement("img")
r=new W.hJ(s,"load",!1,[W.i])
r.gb9(r).aA(new D.eX(new P.hw(t,[null]),s))
s.src=a
return t},
eX:function eX(a,b){this.a=a
this.b=b}},A={
iO:function(a){var t,s
t=C.Z.eD(a,0,new A.iP())
s=536870911&t+(C.b.cQ(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iP:function iP(){}},T={a4:function a4(a){this.a=a},b_:function b_(a){this.a=a},x:function x(a){this.a=a},aG:function aG(a){this.a=a}}
var v=[C,H,J,P,W,B,G,R,D,A,T]
setFunctionNamesIfNecessary(v)
var $={}
H.jp.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gu:function(a){return H.aW(a)},
k:function(a){return H.fx(a)},
gA:function(a){return new H.aE(H.iN(a),null)}}
J.eP.prototype={
k:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.at},
$isax:1}
J.dc.prototype={
w:function(a,b){return null==b},
k:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.an}}
J.bF.prototype={
gu:function(a){return 0},
gA:function(a){return C.am},
k:function(a){return String(a)},
$isko:1}
J.fr.prototype={}
J.aZ.prototype={}
J.aT.prototype={
k:function(a){var t=a[$.$get$k9()]
return t==null?this.da(a):J.aK(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjn:1}
J.aR.prototype={
b6:function(a,b){if(!!a.immutable$list)throw H.e(new P.t(b))},
b5:function(a,b){if(!!a.fixed$length)throw H.e(new P.t(b))},
l:function(a,b){this.b5(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.b5(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.P)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.E(new P.a0(a)))
a.push(q)}},
cr:function(a,b){return new H.bG(a,b,[H.ay(a,0),null])},
ak:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return a[b]},
gb9:function(a){if(a.length>0)return a[0]
throw H.e(H.d8())},
gba:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.d8())},
br:function(a,b,c,d,e){var t,s
this.b6(a,"setRange")
P.kv(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.aX(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mp())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c1:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a0(a))}return!1},
d5:function(a,b){this.b6(a,"sort")
H.dx(a,0,a.length-1,P.nf())},
aH:function(a){return this.d5(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.D(a[t],b))return!0
return!1},
k:function(a){return P.eO(a,"[","]")},
gv:function(a){return new J.dW(a,a.length,0,null,[H.ay(a,0)])},
gu:function(a){return H.aW(a)},
gj:function(a){return a.length},
sj:function(a,b){this.b5(a,"set length")
if(b<0)throw H.e(P.aX(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
return a[b]},
i:function(a,b,c){this.b6(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.O(a,b))
if(b>=a.length||b<0)throw H.e(H.O(a,b))
a[b]=c},
$isl:1,
$asl:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jo.prototype={}
J.dW.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.P(t))
r=this.c
if(r>=s){this.sbD(null)
return!1}this.sbD(t[r]);++this.c
return!0},
sbD:function(a){this.d=a}}
J.be.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.T(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gay(b)
if(this.gay(a)===t)return 0
if(this.gay(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gay:function(a){return a===0?1/a<0:a<0},
ek:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.t(""+a+".ceil()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.t(""+a+".round()"))},
el:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.T(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
f4:function(a,b){var t
if(b>20)throw H.e(P.aX(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gay(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a-b},
cR:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a/b},
F:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a*b},
aJ:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bY(a,b)},
H:function(a,b){return(a|0)===a?a/b|0:this.bY(a,b)},
bY:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.t("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aX:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cQ:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a&b)>>>0},
dd:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return(a^b)>>>0},
aF:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a<b},
aE:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>b},
cS:function(a,b){if(typeof b!=="number")throw H.e(H.T(b))
return a>=b},
gA:function(a){return C.aw},
$isU:1}
J.db.prototype={
gA:function(a){return C.av},
$isL:1,
$ism:1,
$isU:1}
J.da.prototype={
gA:function(a){return C.au},
$isL:1,
$isU:1}
J.aS.prototype={
aO:function(a,b){if(b>=a.length)throw H.e(H.O(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.e(P.k_(b,null,null))
return a+b},
d6:function(a,b,c){var t
if(c>a.length)throw H.e(P.aX(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bu:function(a,b){return this.d6(a,b,0)},
bx:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fy(b,null,null))
if(b>c)throw H.e(P.fy(b,null,null))
if(c>a.length)throw H.e(P.fy(c,null,null))
return a.substring(b,c)},
d7:function(a,b){return this.bx(a,b,null)},
f3:function(a){return a.toLowerCase()},
em:function(a,b,c){if(c>a.length)throw H.e(P.aX(c,0,a.length,null,null))
return H.nC(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.T(b))
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
gA:function(a){return C.ao},
gj:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.O(a,b))
return a[b]},
$isl:1,
$asl:function(){},
$isq:1}
H.c.prototype={$asc:null}
H.bf.prototype={
gv:function(a){return new H.de(this,this.gj(this),0,null,[H.ad(this,"bf",0)])},
aC:function(a,b){return this.d9(0,b)},
f2:function(a,b){var t,s
t=H.C([],[H.ad(this,"bf",0)])
C.a.sj(t,this.gj(this))
for(s=0;s<this.gj(this);++s)t[s]=this.t(0,s)
return t},
f1:function(a){return this.f2(a,!0)}}
H.de.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ac(t)
r=s.gj(t)
if(this.b!==r)throw H.e(new P.a0(t))
q=this.c
if(q>=r){this.sac(null)
return!1}this.sac(s.t(t,q));++this.c
return!0},
sac:function(a){this.d=a}}
H.df.prototype={
gv:function(a){return new H.eZ(null,J.bs(this.a),this.b,this.$ti)},
gj:function(a){return J.dR(this.a)},
$asV:function(a,b){return[b]}}
H.ec.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eZ.prototype={
p:function(){var t=this.b
if(t.p()){this.sac(this.c.$1(t.gq()))
return!0}this.sac(null)
return!1},
gq:function(){return this.a},
sac:function(a){this.a=a},
$asd9:function(a,b){return[b]}}
H.bG.prototype={
gj:function(a){return J.dR(this.a)},
t:function(a,b){return this.b.$1(J.lz(this.a,b))},
$asc:function(a,b){return[b]},
$asbf:function(a,b){return[b]},
$asV:function(a,b){return[b]}}
H.dE.prototype={
gv:function(a){return new H.hs(J.bs(this.a),this.b,this.$ti)}}
H.hs.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cq.prototype={}
H.j9.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.ja.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ib.prototype={
seM:function(a){this.z=a},
seO:function(a){this.ch=a}}
H.b3.prototype={
c0:function(a,b){if(!this.f.w(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.b3()},
eW:function(a){var t,s,r,q,p
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
if(q===r.c)r.bS();++r.d}this.y=!1}this.b3()},
ea:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eV:function(a){var t,s,r
if(this.ch==null)return
for(t=J.r(a),s=0;r=this.ch,s<r.length;s+=2)if(t.w(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.t("removeRange"))
P.kv(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d2:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eG:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.G(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jt(null,null)
this.cx=t}t.S(0,new H.i5(a,c))},
eF:function(a,b){var t
if(!this.r.w(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.az()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jt(null,null)
this.cx=t}t.S(0,this.geN())},
eH:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.al(a)
if(b!=null)P.al(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aK(a)
s[1]=b==null?null:b.k(0)
for(r=new P.c2(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.G(0,s)},
ag:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.M(o)
p=H.ak(o)
this.eH(q,p)
if(this.db){this.az()
if(this===u.globalState.e)throw o}}finally{this.cy=H.na(r)
u.globalState.d=H.jH(t,"$isb3")
if(t!=null)$=t.geL()
if(this.cx!=null)for(;n=this.cx,!n.gaj(n);)this.cx.ct().$0()}return s},
cq:function(a){return this.b.h(0,a)},
bG:function(a,b){var t=this.b
if(t.D(0,a))throw H.e(P.cp("Registry: ports must be registered only once."))
t.i(0,a,b)},
b3:function(){var t=this.b
if(t.gj(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.az()},
az:function(){var t,s,r
t=this.cx
if(t!=null)t.U(0)
for(t=this.b,s=t.gcN(t),s=s.gv(s);s.p();)s.gq().dL()
t.U(0)
this.c.U(0)
u.globalState.z.al(0,this.a)
this.dx.U(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].G(0,t[r+1])
this.ch=null}},
geL:function(){return this.d},
gen:function(){return this.e}}
H.i5.prototype={
$0:function(){this.a.G(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hK.prototype={
eu:function(){var t=this.a
if(t.b===t.c)return
return t.ct()},
cw:function(){var t,s,r
t=this.eu()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.D(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaj(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cp("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaj(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aV(["command","close"])
r=new H.aj(!0,new P.dH(0,null,null,null,null,null,0,[null,P.m])).I(r)
s.toString
self.postMessage(r)}return!1}t.eS()
return!0},
bW:function(){if(self.window!=null)new H.hL(this).$0()
else for(;this.cw(););},
am:function(){var t,s,r,q,p
if(!u.globalState.x)this.bW()
else try{this.bW()}catch(r){t=H.M(r)
s=H.ak(r)
q=u.globalState.Q
p=P.aV(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.aj(!0,P.c3(null,P.m)).I(p)
q.toString
self.postMessage(p)}}}
H.hL.prototype={
$0:function(){if(!this.a.cw())return
P.mI(C.y,this)},
$S:function(){return{func:1,v:true}}}
H.b4.prototype={
eS:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ag(this.b)}}
H.ia.prototype={}
H.eM.prototype={
$0:function(){H.ml(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eN.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bq(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bq(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b3()},
$S:function(){return{func:1,v:true}}}
H.hC.prototype={}
H.bl.prototype={
G:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mY(b)
if(t.gen()===s){s=J.ac(r)
switch(s.h(r,0)){case"pause":t.c0(s.h(r,1),s.h(r,2))
break
case"resume":t.eW(s.h(r,1))
break
case"add-ondone":t.ea(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eV(s.h(r,1))
break
case"set-errors-fatal":t.d2(s.h(r,1),s.h(r,2))
break
case"ping":t.eG(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eF(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.al(0,s)
break}return}u.globalState.f.a.S(0,new H.b4(t,new H.ic(this,r),"receive"))},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bl){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.ic.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dH(0,this.b)},
$S:function(){return{func:1}}}
H.c5.prototype={
G:function(a,b){var t,s,r
t=P.aV(["command","message","port",this,"msg",b])
s=new H.aj(!0,P.c3(null,P.m)).I(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c5){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.dd((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bh.prototype={
dL:function(){this.c=!0
this.b=null},
dH:function(a,b){if(this.c)return
this.b.$1(b)},
$ismC:1}
H.h9.prototype={
dw:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.S(0,new H.b4(s,new H.ha(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.bp(new H.hb(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.t("Timer greater than 0."))}}}
H.ha.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hb.prototype={
$0:function(){this.a.c=null
H.iZ()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.ap.prototype={
gu:function(a){var t=this.a
t=C.b.aX(t,0)^C.b.H(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
w:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ap){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.aj.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gj(t))
t=J.r(a)
if(!!t.$isbJ)return["buffer",a]
if(!!t.$isbg)return["typed",a]
if(!!t.$isl)return this.cZ(a)
if(!!t.$ismi){r=this.gcW()
q=t.gE(a)
q=H.ju(q,r,H.ad(q,"V",0),null)
q=P.kq(q,!0,H.ad(q,"V",0))
t=t.gcN(a)
t=H.ju(t,r,H.ad(t,"V",0),null)
return["map",q,P.kq(t,!0,H.ad(t,"V",0))]}if(!!t.$isko)return this.d_(a)
if(!!t.$isa)this.cL(a)
if(!!t.$ismC)this.an(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbl)return this.d0(a)
if(!!t.$isc5)return this.d1(a)
if(!!t.$isb8){p=a.$static_name
if(p==null)this.an(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isap)return["capability",a.a]
if(!(a instanceof P.n))this.cL(a)
return["dart",u.classIdExtractor(a),this.cY(u.classFieldsExtractor(a))]},
an:function(a,b){throw H.e(new P.t((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cL:function(a){return this.an(a,null)},
cZ:function(a){var t
H.d(typeof a!=="string")
t=this.cX(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.an(a,"Can't serialize indexable: ")},
cX:function(a){var t,s
t=[]
C.a.sj(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cY:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
d_:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.an(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sj(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
d1:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d0:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b2.prototype={
V:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.dV("Bad serialized message: "+H.f(a)))
switch(C.a.gb9(a)){case"ref":H.d(J.D(a[0],"ref"))
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
s=H.C(this.af(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.D(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.C(this.af(t),[null])
case"mutable":H.d(J.D(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.af(t)
case"const":H.d(J.D(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.C(this.af(t),[null])
s.fixed$length=Array
return s
case"map":return this.ex(a)
case"sendport":return this.ey(a)
case"raw sendport":H.d(J.D(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.ew(a)
case"function":H.d(J.D(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.D(a[0],"capability"))
return new H.ap(a[1])
case"dart":H.d(J.D(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.af(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
af:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.V(a[t]))
return a},
ex:function(a){var t,s,r,q,p
H.d(J.D(a[0],"map"))
t=a[1]
s=a[2]
r=P.H()
C.a.l(this.b,r)
t=J.lN(t,this.gev()).f1(0)
for(q=J.ac(s),p=0;p<t.length;++p)r.i(0,t[p],this.V(q.h(s,p)))
return r},
ey:function(a){var t,s,r,q,p,o,n
H.d(J.D(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cq(r)
if(o==null)return
n=new H.bl(o,s)}else n=new H.c5(t,r,s)
C.a.l(this.b,n)
return n},
ew:function(a){var t,s,r,q,p,o
H.d(J.D(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.ac(t),p=J.ac(s),o=0;o<q.gj(t);++o)r[q.h(t,o)]=this.V(p.h(s,o))
return r}}
H.fB.prototype={}
H.hg.prototype={
N:function(a){var t,s,r
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
H.dr.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eR.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hk.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jb.prototype={
$1:function(a){if(!!J.r(a).$isba)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dJ.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iU.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iV.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iW.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iX.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iY.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b8.prototype={
k:function(a){return"Closure '"+H.dt(this).trim()+"'"},
$isjn:1,
gf8:function(){return this},
$D:null}
H.h3.prototype={}
H.fQ.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bt.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bt))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aW(this.a)
else s=typeof t!=="object"?J.an(t):H.aW(t)
return(s^H.aW(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fx(t)}}
H.hi.prototype={
k:function(a){return this.a}}
H.e_.prototype={
k:function(a){return this.a}}
H.fG.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hv.prototype={
k:function(a){return C.i.a5("Assertion failed: ",P.jm(this.a))}}
H.aE.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.an(this.a)},
w:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aE){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.af.prototype={
gj:function(a){return this.a},
gaj:function(a){return this.a===0},
gE:function(a){return new H.eU(this,[H.ay(this,0)])},
gcN:function(a){return H.ju(this.gE(this),new H.eQ(this),H.ay(this,0),H.ay(this,1))},
D:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bP(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bP(s,b)}else return this.eI(b)},
eI:function(a){var t=this.d
if(t==null)return!1
return this.ai(this.at(t,this.ah(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ad(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ad(r,b)
return s==null?null:s.b}else return this.eJ(b)},
eJ:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.at(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aT()
this.b=t}this.bF(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aT()
this.c=s}this.bF(s,b,c)}else{r=this.d
if(r==null){r=this.aT()
this.d=r}q=this.ah(b)
p=this.at(r,q)
if(p==null)this.aW(r,q,[this.aU(b,c)])
else{o=this.ai(p,b)
if(o>=0)p[o].b=c
else p.push(this.aU(b,c))}}},
al:function(a,b){if(typeof b==="string")return this.bV(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bV(this.c,b)
else return this.eK(b)},
eK:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.at(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bZ(q)
return q.b},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ax:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a0(this))
t=t.c}},
bF:function(a,b,c){var t=this.ad(a,b)
if(t==null)this.aW(a,b,this.aU(b,c))
else t.b=c},
bV:function(a,b){var t
if(a==null)return
t=this.ad(a,b)
if(t==null)return
this.bZ(t)
this.bQ(a,b)
return t.b},
aU:function(a,b){var t,s
t=new H.eT(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bZ:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ah:function(a){return J.an(a)&0x3ffffff},
ai:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
k:function(a){return P.ms(this)},
ad:function(a,b){return a[b]},
at:function(a,b){return a[b]},
aW:function(a,b,c){H.d(c!=null)
a[b]=c},
bQ:function(a,b){delete a[b]},
bP:function(a,b){return this.ad(a,b)!=null},
aT:function(){var t=Object.create(null)
this.aW(t,"<non-identifier-key>",t)
this.bQ(t,"<non-identifier-key>")
return t},
$ismi:1}
H.eQ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eT.prototype={}
H.eU.prototype={
gj:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.eV(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eV.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a0(t))
else{t=this.c
if(t==null){this.sbE(null)
return!1}else{this.sbE(t.a)
this.c=this.c.c
return!0}}},
sbE:function(a){this.d=a}}
H.iQ.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iR.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.q]}}}
H.iS.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.q]}}}
H.bJ.prototype={
gA:function(a){return C.af},
$isbJ:1}
H.bg.prototype={$isbg:1}
H.f6.prototype={
gA:function(a){return C.ag}}
H.dj.prototype={
gj:function(a){return a.length},
$isl:1,
$asl:function(){},
$iso:1,
$aso:function(){}}
H.dk.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
a[b]=c}}
H.dl.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.di.prototype={
gA:function(a){return C.ah},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]},
$iseA:1}
H.f7.prototype={
gA:function(a){return C.ai},
$isc:1,
$asc:function(){return[P.L]},
$isb:1,
$asb:function(){return[P.L]}}
H.f8.prototype={
gA:function(a){return C.aj},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.f9.prototype={
gA:function(a){return C.ak},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskl:1}
H.fa.prototype={
gA:function(a){return C.al},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.fb.prototype={
gA:function(a){return C.ap},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskI:1}
H.fc.prototype={
gA:function(a){return C.aq},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskJ:1}
H.dm.prototype={
gA:function(a){return C.ar},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]}}
H.fd.prototype={
gA:function(a){return C.as},
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.O(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.m]},
$isb:1,
$asb:function(){return[P.m]},
$iskK:1}
H.bK.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.m]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.m]}}
H.bL.prototype={
$asl:function(){},
$isc:1,
$asc:function(){return[P.L]},
$aso:function(){},
$isb:1,
$asb:function(){return[P.L]}}
H.bM.prototype={
$asl:function(){},
$asc:function(){return[P.L]},
$aso:function(){},
$asb:function(){return[P.L]}}
H.bN.prototype={
$asl:function(){},
$asc:function(){return[P.m]},
$aso:function(){},
$asb:function(){return[P.m]}}
P.hy.prototype={
$1:function(a){var t,s
H.iZ()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hx.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hz.prototype={
$0:function(){H.iZ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hA.prototype={
$0:function(){H.iZ()
this.a.$0()},
$S:function(){return{func:1}}}
P.eE.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.O(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.O(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eD.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bO(r)}else if(t.b===0&&!this.b)this.d.O(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hE.prototype={}
P.hw.prototype={
b7:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.as("Future already completed"))
t.bH(b)}}
P.iu.prototype={
b7:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.as("Future already completed"))
t.ab(b)}}
P.c_.prototype={
eP:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.bf(this.d,a.a)},
eE:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bq(s,{func:1,args:[P.n,P.bS]}))return t.eY(s,a.a,a.b)
else return t.bf(s,a.a)}}
P.J.prototype={
bh:function(a,b){var t,s,r
t=$.u
if(t!==C.d){t.toString
if(b!=null)b=P.n2(b,t)}s=new P.J(0,t,null,[null])
r=b==null?1:3
this.aN(new P.c_(null,s,r,a,b,[H.ay(this,0),null]))
return s},
aA:function(a){return this.bh(a,null)},
f7:function(a){var t,s
t=$.u
s=new P.J(0,t,null,this.$ti)
if(t!==C.d)t.toString
t=H.ay(this,0)
this.aN(new P.c_(null,s,8,a,null,[t,t]))
return s},
bJ:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
aN:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jH(this.c,"$isc_")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.aN(a)
return}this.bJ(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bn(null,null,t,new P.hQ(this,a))}},
bU:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bU(a)
return}this.bJ(s)}H.d(this.a>=4)
t.a=this.ae(a)
s=this.b
s.toString
P.bn(null,null,s,new P.hY(t,this))}},
aV:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ae(t)},
ae:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
ab:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.c9(a,"$isaQ",t,"$asaQ"))if(H.c9(a,"$isJ",t,null))P.hT(a,this)
else P.kN(a,this)
else{s=this.aV()
H.d(this.a<4)
this.a=4
this.c=a
P.bk(this,s)}},
bO:function(a){var t
H.d(this.a<4)
H.d(!J.r(a).$isaQ)
t=this.aV()
H.d(this.a<4)
this.a=4
this.c=a
P.bk(this,t)},
O:function(a,b){var t
H.d(this.a<4)
t=this.aV()
H.d(this.a<4)
this.a=8
this.c=new P.b7(a,b)
P.bk(this,t)},
dM:function(a){return this.O(a,null)},
bH:function(a){var t
H.d(this.a<4)
if(H.c9(a,"$isaQ",this.$ti,"$asaQ")){this.dK(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bn(null,null,t,new P.hS(this,a))},
dK:function(a){var t
if(H.c9(a,"$isJ",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bn(null,null,t,new P.hX(this,a))}else P.hT(a,this)
return}P.kN(a,this)},
dJ:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bn(null,null,t,new P.hR(this,a,b))},
$isaQ:1,
gaY:function(){return this.a},
ge3:function(){return this.c}}
P.hQ.prototype={
$0:function(){P.bk(this.a,this.b)},
$S:function(){return{func:1}}}
P.hY.prototype={
$0:function(){P.bk(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hU.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.ab(a)},
$S:function(){return{func:1,args:[,]}}}
P.hV.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.O(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hW.prototype={
$0:function(){this.a.O(this.b,this.c)},
$S:function(){return{func:1}}}
P.hS.prototype={
$0:function(){this.a.bO(this.b)},
$S:function(){return{func:1}}}
P.hX.prototype={
$0:function(){P.hT(this.b,this.a)},
$S:function(){return{func:1}}}
P.hR.prototype={
$0:function(){this.a.O(this.b,this.c)},
$S:function(){return{func:1}}}
P.i0.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cv(q.d)}catch(n){s=H.M(n)
r=H.ak(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b7(s,r)
p.a=!0
return}if(!!J.r(t).$isaQ){if(t instanceof P.J&&t.gaY()>=4){if(t.gaY()===8){q=t
H.d(q.gaY()===8)
p=this.b
p.b=q.ge3()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.aA(new P.i1(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i1.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i_.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.bf(r.d,this.c)}catch(q){t=H.M(q)
s=H.ak(q)
r=this.a
r.b=new P.b7(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hZ.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eP(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eE(t)
p.a=!1}}catch(o){s=H.M(o)
r=H.ak(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b7(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dF.prototype={}
P.bT.prototype={
gj:function(a){var t,s
t={}
s=new P.J(0,$.u,null,[P.m])
t.a=0
this.cp(new P.fX(t),!0,new P.fY(t,s),s.gbN())
return s},
gb9:function(a){var t,s
t={}
s=new P.J(0,$.u,null,[H.ad(this,"bT",0)])
t.a=null
t.a=this.cp(new P.fV(t,this,s),!0,new P.fW(s),s.gbN())
return s}}
P.fX.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fY.prototype={
$0:function(){this.b.ab(this.a.a)},
$S:function(){return{func:1}}}
P.fV.prototype={
$1:function(a){P.mX(this.a.a,this.c,a)},
$S:function(){return H.nd(function(a){return{func:1,args:[a]}},this.b,"bT")}}
P.fW.prototype={
$0:function(){var t,s,r,q
try{r=H.d8()
throw H.e(r)}catch(q){t=H.M(q)
s=H.ak(q)
P.mZ(this.a,t,s)}},
$S:function(){return{func:1}}}
P.fU.prototype={}
P.iC.prototype={
$0:function(){return this.a.ab(this.b)},
$S:function(){return{func:1}}}
P.b7.prototype={
k:function(a){return H.f(this.a)},
$isba:1}
P.iB.prototype={}
P.iF.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bP()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ie.prototype={
eZ:function(a){var t,s,r
try{if(C.d===$.u){a.$0()
return}P.kS(null,null,this,a)}catch(r){t=H.M(r)
s=H.ak(r)
P.iE(null,null,this,t,s)}},
f_:function(a,b){var t,s,r
try{if(C.d===$.u){a.$1(b)
return}P.kT(null,null,this,a,b)}catch(r){t=H.M(r)
s=H.ak(r)
P.iE(null,null,this,t,s)}},
eg:function(a){return new P.ih(this,a)},
b4:function(a){return new P.ig(this,a)},
eh:function(a){return new P.ii(this,a)},
h:function(a,b){return},
cv:function(a){if($.u===C.d)return a.$0()
return P.kS(null,null,this,a)},
bf:function(a,b){if($.u===C.d)return a.$1(b)
return P.kT(null,null,this,a,b)},
eY:function(a,b,c){if($.u===C.d)return a.$2(b,c)
return P.n3(null,null,this,a,b,c)}}
P.ih.prototype={
$0:function(){return this.a.cv(this.b)},
$S:function(){return{func:1}}}
P.ig.prototype={
$0:function(){return this.a.eZ(this.b)},
$S:function(){return{func:1}}}
P.ii.prototype={
$1:function(a){return this.a.f_(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dH.prototype={
ah:function(a){return H.nw(a)&0x3ffffff},
ai:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i7.prototype={
gv:function(a){var t=new P.c2(this,this.r,null,null,[null])
t.c=this.e
return t},
gj:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dN(b)},
dN:function(a){var t=this.d
if(t==null)return!1
return this.as(t[this.ar(a)],a)>=0},
cq:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dW(a)},
dW:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ar(a)]
r=this.as(s,a)
if(r<0)return
return J.b6(s,r).gdP()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bK(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bK(r,b)}else return this.S(0,b)},
S:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mV()
this.d=t}s=this.ar(b)
r=t[s]
if(r==null){q=[this.aP(b)]
H.d(q!=null)
t[s]=q}else{if(this.as(r,b)>=0)return!1
r.push(this.aP(b))}return!0},
al:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bL(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bL(this.c,b)
else return this.dY(0,b)},
dY:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ar(b)]
r=this.as(s,b)
if(r<0)return!1
this.bM(s.splice(r,1)[0])
return!0},
U:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bK:function(a,b){var t
if(a[b]!=null)return!1
t=this.aP(b)
H.d(!0)
a[b]=t
return!0},
bL:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bM(t)
delete a[b]
return!0},
aP:function(a){var t,s
t=new P.i8(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bM:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ar:function(a){return J.an(a)&0x3ffffff},
as:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.D(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.i8.prototype={
gdP:function(){return this.a}}
P.c2.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a0(t))
else{t=this.c
if(t==null){this.saa(null)
return!1}else{this.saa(t.a)
this.c=this.c.b
return!0}}},
saa:function(a){this.d=a}}
P.i4.prototype={}
P.dd.prototype={}
P.v.prototype={
gv:function(a){return new H.de(a,this.gj(a),0,null,[H.ad(a,"v",0)])},
t:function(a,b){return this.h(a,b)},
cr:function(a,b){return new H.bG(a,b,[H.ad(a,"v",0),null])},
eD:function(a,b,c){var t,s,r
t=this.gj(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gj(a))throw H.e(new P.a0(a))}return s},
k:function(a){return P.eO(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f_.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eW.prototype={
gv:function(a){return new P.i9(this,this.c,this.d,this.b,null,this.$ti)},
gaj:function(a){return this.b===this.c},
gj:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t,s
t=(this.c-this.b&this.a.length-1)>>>0
if(0>b||b>=t)H.E(P.A(b,this,"index",null,t))
s=this.a
return s[(this.b+b&s.length-1)>>>0]},
U:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eO(this,"{","}")},
ct:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.d8());++this.d
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
if(this.b===t)this.bS();++this.d},
bS:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.C(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.br(s,0,q,t,r)
C.a.br(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbX(s)},
dl:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbX(H.C(t,[b]))},
sbX:function(a){this.a=a},
$asc:null}
P.i9.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a0(t))
s=this.d
if(s===this.b){this.saa(null)
return!1}this.saa(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
saa:function(a){this.e=a}}
P.fJ.prototype={
L:function(a,b){var t
for(t=J.bs(b);t.p();)this.l(0,t.gq())},
k:function(a){return P.eO(this,"{","}")},
$isc:1,
$asc:null}
P.fI.prototype={}
P.bQ.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ax.prototype={}
P.G.prototype={}
P.bu.prototype={
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bu))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aX(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.m7(H.mB(this))
s=P.cj(H.mz(this))
r=P.cj(H.mv(this))
q=P.cj(H.mw(this))
p=P.cj(H.my(this))
o=P.cj(H.mA(this))
n=P.m8(H.mx(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isG:1,
$asG:function(){return[P.bu]}}
P.L.prototype={$isG:1,
$asG:function(){return[P.U]}}
P.aP.prototype={
aF:function(a,b){return C.b.aF(this.a,b.gdO())},
aE:function(a,b){return C.b.aE(this.a,b.gdO())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.eb()
s=this.a
if(s<0)return"-"+new P.aP(0-s).k(0)
r=t.$1(C.b.H(s,6e7)%60)
q=t.$1(C.b.H(s,1e6)%60)
p=new P.ea().$1(s%1e6)
return""+C.b.H(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isG:1,
$asG:function(){return[P.aP]}}
P.ea.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.eb.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.q,args:[P.m]}}}
P.ba.prototype={}
P.cf.prototype={
k:function(a){return"Assertion failed"}}
P.bP.prototype={
k:function(a){return"Throw of null."}}
P.ao.prototype={
gaR:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaQ:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+t
q=this.gaR()+s+r
if(!this.a)return q
p=this.gaQ()
o=P.jm(this.b)
return q+p+": "+H.f(o)}}
P.dv.prototype={
gaR:function(){return"RangeError"},
gaQ:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eK.prototype={
gaR:function(){return"RangeError"},
gaQ:function(){H.d(this.a)
if(J.lj(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gj:function(a){return this.f}}
P.t.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dD.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.as.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a0.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jm(t))+"."}}
P.dy.prototype={
k:function(a){return"Stack Overflow"},
$isba:1}
P.e3.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hP.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.ed.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.k_(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ks(b,"expando$values")
return s==null?null:H.ks(s,t)}}
P.m.prototype={$isG:1,
$asG:function(){return[P.U]}}
P.V.prototype={
aC:function(a,b){return new H.dE(this,b,[H.ad(this,"V",0)])},
gj:function(a){var t,s
H.d(!this.$isc)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
ga_:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.e(H.d8())
s=t.gq()
if(t.p())throw H.e(H.mq())
return s},
t:function(a,b){var t,s,r
if(b<0)H.E(P.aX(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.A(b,this,"index",null,s))},
k:function(a){return P.mo(this,"(",")")}}
P.d9.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aB.prototype={}
P.aC.prototype={
gu:function(a){return P.n.prototype.gu.call(this,this)},
k:function(a){return"null"}}
P.U.prototype={$isG:1,
$asG:function(){return[P.U]}}
P.n.prototype={constructor:P.n,$isn:1,
w:function(a,b){return this===b},
gu:function(a){return H.aW(this)},
k:function(a){return H.fx(this)},
gA:function(a){return new H.aE(H.iN(this),null)},
toString:function(){return this.k(this)}}
P.bS.prototype={}
P.q.prototype={$isG:1,
$asG:function(){return[P.q]}}
P.bU.prototype={
gj:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga1:function(){return this.a}}
W.k.prototype={}
W.dT.prototype={
k:function(a){return String(a)},
$isa:1}
W.dU.prototype={
k:function(a){return String(a)},
$isa:1}
W.a_.prototype={$isn:1}
W.dY.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$iso:1,
$aso:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cg.prototype={}
W.aM.prototype={$isa:1,$isaM:1}
W.aN.prototype={
bj:function(a,b,c){if(c!=null)return this.dR(a,b,P.ne(c,null))
return this.dS(a,b)},
cT:function(a,b){return this.bj(a,b,null)},
dR:function(a,b,c){return a.getContext(b,c)},
dS:function(a,b){return a.getContext(b)},
$isaN:1}
W.ch.prototype={
av:function(a,b,c){return a.addColorStop(b,c)}}
W.ci.prototype={
cc:function(a,b,c,d,e,f,g){return a.createRadialGradient(b,c,d,e,f,g)},
eC:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aD:function(a){return P.iI(a.getContextAttributes())}}
W.aO.prototype={$isa:1,
gj:function(a){return a.length}}
W.e1.prototype={$isa:1}
W.y.prototype={$isn:1}
W.b9.prototype={
bI:function(a,b){var t,s
t=$.$get$k8()
s=t[b]
if(typeof s==="string")return s
s=this.e6(a,b)
t[b]=s
return s},
e6:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.m9()+b
if(t in a)return t
return b},
gj:function(a){return a.length}}
W.e2.prototype={}
W.e4.prototype={
h:function(a,b){return a[b]},
gj:function(a){return a.length}}
W.e5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.ck.prototype={}
W.bv.prototype={
eb:function(a,b){return a.adoptNode(b)},
cU:function(a,b){return a.getElementById(b)},
eT:function(a,b){return a.querySelector(b)}}
W.cl.prototype={$isa:1}
W.e6.prototype={
k:function(a){return String(a)}}
W.cm.prototype={
eq:function(a,b){return a.createHTMLDocument(b)}}
W.e7.prototype={
gaB:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.cn.prototype={
gaB:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.co.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gY(a))+" x "+H.f(this.gX(a))},
w:function(a,b){var t
if(b==null)return!1
t=J.r(b)
if(!t.$isI)return!1
return a.left===t.gbb(b)&&a.top===t.gbi(b)&&this.gY(a)===t.gY(b)&&this.gX(a)===t.gX(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gY(a)
q=this.gX(a)
return W.kQ(W.b5(W.b5(W.b5(W.b5(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gX:function(a){return a.height},
gbb:function(a){return a.left},
gbi:function(a){return a.top},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isI:1,
$asI:function(){}}
W.e8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.q]},
$isc:1,
$asc:function(){return[P.q]},
$iso:1,
$aso:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.e9.prototype={
gj:function(a){return a.length}}
W.a1.prototype={
gee:function(a){return new W.hI(a)},
k:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kg
if(t==null){t=H.C([],[W.dp])
s=new W.dq(t)
C.a.l(t,W.kO(null))
C.a.l(t,W.kR())
$.kg=s
d=s}else d=t
t=$.kf
if(t==null){t=new W.dK(d)
$.kf=t
c=t}else{t.a=d
c=t}}if($.az==null){t=document
s=t.implementation
s=(s&&C.M).eq(s,"")
$.az=s
$.jl=s.createRange()
s=$.az
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.az.head;(t&&C.N).P(t,r)}t=$.az
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jH(s,"$isaM")}t=$.az
if(!!this.$isaM)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.az.body;(t&&C.o).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.Y,a.tagName)){t=$.jl;(t&&C.F).cV(t,q)
t=$.jl
p=(t&&C.F).eo(t,b)}else{q.innerHTML=b
p=$.az.createDocumentFragment()
for(t=J.j(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.az.body
if(q==null?t!=null:q!==t)J.lP(q)
c.bq(p)
C.r.eb(document,p)
return p},
ep:function(a,b,c){return this.M(a,b,c,null)},
d4:function(a,b,c,d){a.textContent=null
this.P(a,this.M(a,b,c,d))},
d3:function(a,b){return this.d4(a,b,null,null)},
a6:function(a,b){return a.getAttribute(b)},
dZ:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isn:1,
$isa1:1,
$ish:1,
$isp:1,
gf0:function(a){return a.tagName}}
W.iG.prototype={
$1:function(a){return!!J.r(a).$isa1},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$isn:1,$isi:1}
W.h.prototype={
dI:function(a,b,c,d){return a.addEventListener(b,H.bp(c,1),!1)},
e0:function(a,b,c,d){return a.removeEventListener(b,H.bp(c,1),!1)},
$isn:1,
$ish:1}
W.a2.prototype={$isn:1}
W.ex.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$iso:1,
$aso:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.ey.prototype={
gj:function(a){return a.length}}
W.eC.prototype={
gj:function(a){return a.length}}
W.a3.prototype={$isn:1}
W.cs.prototype={}
W.eG.prototype={
gj:function(a){return a.length}}
W.bD.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.ct.prototype={}
W.eH.prototype={
G:function(a,b){return a.send(b)}}
W.bE.prototype={}
W.bb.prototype={$isbb:1}
W.bc.prototype={$isbc:1}
W.bd.prototype={$isbd:1}
W.eL.prototype={$isa:1,$isa1:1}
W.aU.prototype={$isn:1,$isi:1,$isaU:1}
W.eY.prototype={
k:function(a){return String(a)}}
W.bH.prototype={}
W.f2.prototype={
gj:function(a){return a.length}}
W.f3.prototype={
f9:function(a,b,c){return a.send(b,c)},
G:function(a,b){return a.send(b)}}
W.bI.prototype={}
W.a5.prototype={$isn:1}
W.f4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$iso:1,
$aso:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.N.prototype={$isn:1,$isi:1,$isN:1}
W.fe.prototype={$isa:1}
W.R.prototype={
ga_:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.as("No elements"))
if(s>1)throw H.e(new P.as("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.j(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lm(t,c,C.D.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.cr(t,t.length,-1,null,[H.ad(t,"z",0)])},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){return C.D.h(this.a.childNodes,b)},
$asc:function(){return[W.p]},
$asdd:function(){return[W.p]},
$asb:function(){return[W.p]},
$asbQ:function(){return[W.p]}}
W.p.prototype={
eU:function(a){var t=a.parentNode
if(t!=null)J.br(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.d8(a):t},
P:function(a,b){return a.appendChild(b)},
e_:function(a,b){return a.removeChild(b)},
e1:function(a,b,c){return a.replaceChild(b,c)},
$isn:1,
$ish:1,
$isp:1,
gbd:function(a){return a.previousSibling}}
W.dn.prototype={
be:function(a){return a.previousNode()}}
W.bO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.fn.prototype={$isa:1}
W.fp.prototype={
gj:function(a){return a.length}}
W.a6.prototype={$isn:1,
gj:function(a){return a.length}}
W.fs.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$iso:1,
$aso:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.fv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fw.prototype={
G:function(a,b){return a.send(b)}}
W.du.prototype={
eo:function(a,b){return a.createContextualFragment(b)},
cV:function(a,b){return a.selectNodeContents(b)}}
W.fF.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dw.prototype={
G:function(a,b){return a.send(b)}}
W.fH.prototype={
gj:function(a){return a.length}}
W.fL.prototype={$isa:1}
W.a7.prototype={$isn:1,$ish:1}
W.fM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$iso:1,
$aso:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.a8.prototype={$isn:1}
W.fO.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$iso:1,
$aso:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.a9.prototype={$isn:1,
gj:function(a){return a.length}}
W.fT.prototype={
h:function(a,b){return this.bR(a,b)},
ax:function(a,b){var t,s
for(t=0;!0;++t){s=this.dV(a,t)
if(s==null)return
b.$2(s,this.bR(a,s))}},
gj:function(a){return a.length},
bR:function(a,b){return a.getItem(b)},
dV:function(a,b){return a.key(b)}}
W.W.prototype={$isn:1}
W.ah.prototype={}
W.dz.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=W.ma("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.R(s).L(0,new W.R(t))
return s}}
W.h1.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.M(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga_(t)
r.toString
t=new W.R(r)
q=t.ga_(t)
s.toString
q.toString
new W.R(s).L(0,new W.R(q))
return s}}
W.h2.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aI(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.K.M(t.createElement("table"),b,c,d)
t.toString
t=new W.R(t)
r=t.ga_(t)
s.toString
r.toString
new W.R(s).L(0,new W.R(r))
return s}}
W.bV.prototype={$isbV:1}
W.aa.prototype={$isn:1,$ish:1}
W.X.prototype={$isn:1,$ish:1}
W.h5.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$iso:1,
$aso:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.h6.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$iso:1,
$aso:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.h8.prototype={
gj:function(a){return a.length}}
W.ab.prototype={$isn:1}
W.aY.prototype={$isn:1,$isi:1,$isaY:1}
W.hc.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$iso:1,
$aso:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.hd.prototype={
gj:function(a){return a.length}}
W.bi.prototype={}
W.hf.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
W.dC.prototype={
be:function(a){return a.previousNode()}}
W.aF.prototype={}
W.hl.prototype={
k:function(a){return String(a)},
$isa:1}
W.bj.prototype={$isbj:1}
W.hn.prototype={
gj:function(a){return a.length}}
W.hq.prototype={
gj:function(a){return a.length}}
W.hr.prototype={
G:function(a,b){return a.send(b)}}
W.b0.prototype={
ges:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.t("deltaY is not supported"))},
$isn:1,
$isi:1,
$isN:1,
$isb0:1}
W.bZ.prototype={
ged:function(a){var t,s
t=P.U
s=new P.J(0,$.u,null,[t])
this.dQ(a)
this.e2(a,W.kV(new W.ht(new P.iu(s,[t]))))
return s},
e2:function(a,b){return a.requestAnimationFrame(H.bp(b,1))},
dQ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.ht.prototype={
$1:function(a){this.a.b7(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hu.prototype={$isa:1}
W.b1.prototype={$isa:1}
W.hD.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var t,s,r
if(b==null)return!1
t=J.r(b)
if(!t.$isI)return!1
s=a.left
r=t.gbb(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbi(b)
if(s==null?r==null:s===r){s=a.width
r=t.gY(b)
if(s==null?r==null:s===r){s=a.height
t=t.gX(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.an(a.left)
s=J.an(a.top)
r=J.an(a.width)
q=J.an(a.height)
return W.kQ(W.b5(W.b5(W.b5(W.b5(0,t),s),r),q))},
$isI:1,
$asI:function(){},
gX:function(a){return a.height},
gbb:function(a){return a.left},
gbi:function(a){return a.top},
gY:function(a){return a.width}}
W.dG.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[P.I]},
$isc:1,
$asc:function(){return[P.I]},
$iso:1,
$aso:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.hF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.y]},
$isc:1,
$asc:function(){return[W.y]},
$iso:1,
$aso:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.hG.prototype={$isa:1}
W.hH.prototype={
gX:function(a){return a.height},
gY:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$iso:1,
$aso:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.i3.prototype={$isa:1}
W.dI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.p]},
$isc:1,
$asc:function(){return[W.p]},
$iso:1,
$aso:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.io.prototype={$isa:1}
W.ir.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$iso:1,
$aso:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.is.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return a[b]},
$isl:1,
$asl:function(){return[W.W]},
$isc:1,
$asc:function(){return[W.W]},
$iso:1,
$aso:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.iz.prototype={$isa:1}
W.iA.prototype={$isa:1}
W.hB.prototype={
ax:function(a,b){var t,s,r,q,p,o
for(t=this.gE(this),s=t.length,r=this.a,q=J.j(r),p=0;p<t.length;t.length===s||(0,H.P)(t),++p){o=t[p]
b.$2(o,q.a6(r,o))}},
gE:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.C([],[P.q])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdT:function(){return this.a}}
W.hI.prototype={
h:function(a,b){return J.ji(this.a,b)},
gj:function(a){return this.gE(this).length}}
W.hM.prototype={
cp:function(a,b,c,d){return W.ai(this.a,this.b,a,!1,H.ay(this,0))}}
W.hJ.prototype={}
W.hN.prototype={
ej:function(a){if(this.b==null)return
this.e9()
this.b=null
this.sdX(null)
return},
e8:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.lk(r,this.c,t,!1)}},
e9:function(){var t,s,r
t=this.d
s=t!=null
if(s){r=this.b
r.toString
if(s)J.ll(r,this.c,t,!1)}},
dD:function(a,b,c,d,e){this.e8()},
sdX:function(a){this.d=a}}
W.hO.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.c1.prototype={
a2:function(a){return $.$get$kP().B(0,W.bw(a))},
T:function(a,b,c){var t,s,r
t=W.bw(a)
s=$.$get$jA()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dE:function(a){var t,s
t=$.$get$jA()
if(t.gaj(t)){for(s=0;s<262;++s)t.i(0,C.X[s],W.nl())
for(s=0;s<12;++s)t.i(0,C.u[s],W.nm())}}}
W.z.prototype={
gv:function(a){return new W.cr(a,this.gj(a),-1,null,[H.ad(a,"z",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dq.prototype={
a2:function(a){return C.a.c1(this.a,new W.fg(a))},
T:function(a,b,c){return C.a.c1(this.a,new W.ff(a,b,c))}}
W.fg.prototype={
$1:function(a){return a.a2(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.ff.prototype={
$1:function(a){return a.T(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c4.prototype={
a2:function(a){return this.a.B(0,W.bw(a))},
T:function(a,b,c){var t,s
t=W.bw(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.ec(c)
else if(s.B(0,"*::"+b))return this.d.ec(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dG:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aC(0,new W.ip())
s=b.aC(0,new W.iq())
this.b.L(0,t)
r=this.c
r.L(0,C.C)
r.L(0,s)}}
W.ip.prototype={
$1:function(a){return!C.a.B(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.iq.prototype={
$1:function(a){return C.a.B(C.u,a)},
$S:function(){return{func:1,args:[,]}}}
W.iv.prototype={
T:function(a,b,c){if(this.dc(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ji(a,"template")==="")return this.e.B(0,b)
return!1}}
W.iw.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.it.prototype={
a2:function(a){var t=J.r(a)
if(!!t.$isbR)return!1
t=!!t.$isF
if(t&&W.bw(a)==="foreignObject")return!1
if(t)return!0
return!1},
T:function(a,b,c){if(b==="is"||C.i.bu(b,"on"))return!1
return this.a2(a)}}
W.cr.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbT(J.b6(this.a,t))
this.c=t
return!0}this.sbT(null)
this.c=s
return!1},
gq:function(){return this.d},
sbT:function(a){this.d=a}}
W.dp.prototype={}
W.im.prototype={}
W.dK.prototype={
bq:function(a){new W.ix(this).$2(a,null)},
au:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.br(t,a)}else J.br(b,a)},
e5:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lD(a)
r=J.ji(s.gdT(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.M(n)}p="element unprintable"
try{p=J.aK(a)}catch(n){H.M(n)}try{o=W.bw(a)
this.e4(a,b,t,p,o,s,r)}catch(n){if(H.M(n) instanceof P.ao)throw n
else{this.au(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
e4:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.au(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a2(a)){this.au(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.aK(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.T(a,"is",g)){this.au(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gE(f)
s=H.C(t.slice(0),[H.ay(t,0)])
for(r=f.gE(f).length-1,t=f.a,q=J.j(t);r>=0;--r){p=s[r]
if(!this.a.T(a,J.lU(p),q.a6(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a6(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a6(t,p)
q.dZ(t,p)}}if(!!J.r(a).$isbV)this.bq(a.content)}}
W.ix.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.e5(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.br(r,a)}else J.br(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lE(t)}catch(q){H.M(q)
r=t
J.br(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.p,W.p]}}}
W.bx.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.by.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bz.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cu.prototype={}
W.cO.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cN.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cF.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cP.prototype={$isc:1,
$asc:function(){return[P.I]},
$isb:1,
$asb:function(){return[P.I]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.d1.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.d4.prototype={$isc:1,
$asc:function(){return[W.p]},
$isb:1,
$asb:function(){return[W.p]}}
W.d5.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.d6.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.d7.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cW.prototype={$isc:1,
$asc:function(){return[W.y]},
$isb:1,
$asb:function(){return[W.y]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.W]},
$isb:1,
$asb:function(){return[W.W]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
P.iH.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.q,,]}}}
P.i6.prototype={
eR:function(){return Math.random()}}
P.id.prototype={}
P.I.prototype={$asI:null}
P.dS.prototype={$isa:1}
P.aL.prototype={$isa:1}
P.ee.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ef.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eg.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eh.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ei.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ej.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ek.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.el.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.en.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eo.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ep.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gK:function(a){return a.z}}
P.eu.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ae.prototype={}
P.aA.prototype={$isa:1}
P.eI.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aq.prototype={$isn:1}
P.eS.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.f0.prototype={$isa:1}
P.f1.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$isn:1}
P.fh.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.fo.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ft.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fu.prototype={
gj:function(a){return a.length}}
P.fz.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fA.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bR.prototype={$isa:1,$isbR:1}
P.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.F.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.C([],[W.dp])
C.a.l(t,W.kO(null))
C.a.l(t,W.kR())
C.a.l(t,new W.it())
c=new W.dK(new W.dq(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).ep(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.R(q)
o=t.ga_(t)
for(t=J.j(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isa:1,
$isF:1}
P.h_.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h0.prototype={$isa:1}
P.dA.prototype={}
P.h4.prototype={$isa:1}
P.bW.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isn:1}
P.he.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return this.W(a,b)},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
W:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.hm.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ho.prototype={$isa:1}
P.hp.prototype={$isa:1}
P.c0.prototype={$isa:1}
P.ij.prototype={$isa:1}
P.ik.prototype={$isa:1}
P.il.prototype={$isa:1}
P.cx.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.cC.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cG.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.aq]},
$isb:1,
$asb:function(){return[P.aq]}}
P.cZ.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cV.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cX.prototype={$isc:1,
$asc:function(){return[P.q]},
$isb:1,
$asb:function(){return[P.q]}}
P.dX.prototype={
gj:function(a){return a.length}}
P.fD.prototype={
c_:function(a,b){return a.activeTexture(b)},
c2:function(a,b,c){return a.attachShader(b,c)},
c3:function(a,b,c){return a.bindBuffer(b,c)},
c4:function(a,b,c){return a.bindTexture(b,c)},
c5:function(a,b){return a.blendEquation(b)},
c6:function(a,b,c){return a.blendFunc(b,c)},
c7:function(a,b,c,d){return a.bufferData(b,c,d)},
c8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c9:function(a,b){return a.compileShader(b)},
ca:function(a){return a.createBuffer()},
cb:function(a){return a.createProgram()},
cd:function(a,b){return a.createShader(b)},
ce:function(a){return a.createTexture()},
cg:function(a,b){return a.depthMask(b)},
ci:function(a,b){return a.disable(b)},
cj:function(a,b,c,d){return a.drawArrays(b,c,d)},
ck:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cl:function(a,b){return a.enable(b)},
cm:function(a,b){return a.enableVertexAttribArray(b)},
aD:function(a){return P.iI(a.getContextAttributes())},
bk:function(a){return a.getError()},
bl:function(a,b){return a.getProgramInfoLog(b)},
bm:function(a,b,c){return a.getProgramParameter(b,c)},
bn:function(a,b){return a.getShaderInfoLog(b)},
bo:function(a,b,c){return a.getShaderParameter(b,c)},
bp:function(a,b,c){return a.getUniformLocation(b,c)},
co:function(a,b){return a.linkProgram(b)},
cs:function(a,b,c){return a.pixelStorei(b,c)},
bt:function(a,b,c){return a.shaderSource(b,c)},
bv:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bg:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.r(g)
if(!!t.$isbc||g==null)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,P.l_(g))
return}if(!!t.$isbd)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isaN)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isbj)s=!0
else s=!1
if(s){this.b1(a,b,c,d,e,f,g)
return}if(!!t.$isbb)t=!0
else t=!1
if(t){this.b2(a,b,c,d,e,f,g)
return}throw H.e(P.dV("Incorrect number or type of arguments"))},
cz:function(a,b,c,d,e,f,g){return this.bg(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cA:function(a,b,c,d){return a.texParameterf(b,c,d)},
cB:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cP:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fE.prototype={
ef:function(a,b){return a.beginTransformFeedback(b)},
ei:function(a,b){return a.bindVertexArray(b)},
er:function(a){return a.createVertexArray()},
ez:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eA:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eB:function(a){return a.endTransformFeedback()},
f5:function(a,b,c,d){this.e7(a,b,c,d)
return},
e7:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f6:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c_:function(a,b){return a.activeTexture(b)},
c2:function(a,b,c){return a.attachShader(b,c)},
c3:function(a,b,c){return a.bindBuffer(b,c)},
c4:function(a,b,c){return a.bindTexture(b,c)},
c5:function(a,b){return a.blendEquation(b)},
c6:function(a,b,c){return a.blendFunc(b,c)},
c7:function(a,b,c,d){return a.bufferData(b,c,d)},
c8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c9:function(a,b){return a.compileShader(b)},
ca:function(a){return a.createBuffer()},
cb:function(a){return a.createProgram()},
cd:function(a,b){return a.createShader(b)},
ce:function(a){return a.createTexture()},
cg:function(a,b){return a.depthMask(b)},
ci:function(a,b){return a.disable(b)},
cj:function(a,b,c,d){return a.drawArrays(b,c,d)},
ck:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cl:function(a,b){return a.enable(b)},
cm:function(a,b){return a.enableVertexAttribArray(b)},
aD:function(a){return P.iI(a.getContextAttributes())},
bk:function(a){return a.getError()},
bl:function(a,b){return a.getProgramInfoLog(b)},
bm:function(a,b,c){return a.getProgramParameter(b,c)},
bn:function(a,b){return a.getShaderInfoLog(b)},
bo:function(a,b,c){return a.getShaderParameter(b,c)},
bp:function(a,b,c){return a.getUniformLocation(b,c)},
co:function(a,b){return a.linkProgram(b)},
cs:function(a,b,c){return a.pixelStorei(b,c)},
bt:function(a,b,c){return a.shaderSource(b,c)},
bv:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bg:function(a,b,c,d,e,f,g,h,i,j){var t,s
t=J.r(g)
if(!!t.$isbc||g==null)s=!0
else s=!1
if(s){this.aZ(a,b,c,d,e,f,P.l_(g))
return}if(!!t.$isbd)s=!0
else s=!1
if(s){this.b_(a,b,c,d,e,f,g)
return}if(!!t.$isaN)s=!0
else s=!1
if(s){this.b0(a,b,c,d,e,f,g)
return}if(!!t.$isbj)s=!0
else s=!1
if(s){this.b1(a,b,c,d,e,f,g)
return}if(!!t.$isbb)t=!0
else t=!1
if(t){this.b2(a,b,c,d,e,f,g)
return}throw H.e(P.dV("Incorrect number or type of arguments"))},
cz:function(a,b,c,d,e,f,g){return this.bg(a,b,c,d,e,f,g,null,null,null)},
aZ:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b_:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b0:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b1:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
b2:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cA:function(a,b,c,d){return a.texParameterf(b,c,d)},
cB:function(a,b,c,d){return a.texParameteri(b,c,d)},
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
cP:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iy.prototype={$isa:1}
P.fP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.A(b,a,null,null,null))
return P.iI(this.dU(a,b))},
i:function(a,b,c){throw H.e(new P.t("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dU:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cw.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
P.cT.prototype={$isc:1,
$asc:function(){return[P.aB]},
$isb:1,
$asb:function(){return[P.aB]}}
B.j4.prototype={
$1:function(a){$.$get$iJ().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aU]}}}
B.j5.prototype={
$1:function(a){$.$get$iJ().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aU]}}}
B.j6.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nb=t
$.nc=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jK=s-C.b.H(window.innerWidth,2)
$.l7=-(t-C.b.H(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.N]}}}
B.j7.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.cb=t-C.b.H(window.innerWidth,2)
$.cc=-(s-C.b.H(window.innerHeight,2))
if(a.button===2)$.$get$ca().i(0,"right",!0)
else $.$get$ca().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.N]}}}
B.j8.prototype={
$1:function(a){if(a.button===2)$.$get$ca().i(0,"right",null)
else $.$get$ca().i(0,"left",null)},
$S:function(){return{func:1,args:[W.N]}}}
B.fi.prototype={
dn:function(a,b,c,d){var t
d.toString
W.ai(d,W.nk().$1(d),new B.fj(this),!1,W.b0)
W.ai(d,"mousemove",new B.fk(this),!1,W.N)
t=W.aY
W.ai(d,"touchstart",new B.fl(),!1,t)
W.ai(d,"touchmove",new B.fm(this),!1,t)
B.nA(null)}}
B.fj.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.ax.ges(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=H.Y(C.c.a8(r.fy,t))}catch(q){s=H.M(q)
P.al(s)}},
$S:function(){return{func:1,args:[W.b0]}}}
B.fk.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.Y(t.go+C.b.a8($.jK,$.cb)*0.01)
s=t.id
r=$.cc
q=$.l7
t.id=H.Y(s+(r-q)*0.01)
$.cb=$.jK
$.cc=q}},
$S:function(){return{func:1,args:[W.N]}}}
B.fl.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a4(t.clientX)
C.c.a4(t.clientY)
$.cb=s
C.c.a4(t.clientX)
$.cc=C.c.a4(t.clientY)},
$S:function(){return{func:1,args:[W.aY]}}}
B.fm.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a4(t.clientX)
t=C.c.a4(t.clientY)
r=this.a
r.go=H.Y(r.go+C.b.a8(s,$.cb)*0.01)
r.id=H.Y(r.id+($.cc-t)*0.01)
$.cb=s
$.cc=t},
$S:function(){return{func:1,args:[W.aY]}}}
G.f5.prototype={}
G.hj.prototype={
C:function(a,b){var t=this.d
if(H.aw(!t.D(0,a)))H.aH("uniform "+a+" already set")
t.i(0,a,b)},
bB:function(){return this.d},
k:function(a){var t,s,r,q
t=H.C(["{"+new H.aE(H.iN(this),null).k(0)+"}["+this.a+"]"],[P.q])
for(s=this.d,r=s.gE(s),r=r.gv(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ak(t,"\n")}}
G.dZ.prototype={}
G.e0.prototype={
cn:function(a,b,c){J.lA(this.a,b)
if(c>0)J.m_(this.a,b,c)}}
G.ew.prototype={}
G.eF.prototype={
dg:function(){var t,s,r,q,p,o,n,m,l,k
t=this.c
s=t.length
H.d(s>0)
s=new Array(t.length*6)
s.fixed$length=Array
r=H.C(s,[P.m])
for(s=this.b,q=0,p=0;!1;++p){o=s[p]
r[q]=o.gfb(o)
r[q+1]=o.gfc(o)
r[q+2]=o.gfd(o)
q+=3}for(s=t.length,p=0;n=t.length,p<n;n===s||(0,H.P)(t),++p){m=t[p]
l=m.a
r[q]=l
r[q+1]=m.b
k=m.c
r[q+2]=k
r[q+3]=l
r[q+4]=k
r[q+5]=m.d
q+=6}H.d(q===r.length)
return r},
di:function(a,b){var t,s,r,q,p,o,n,m
t=a*b
H.d(this.d.length===t)
s=[]
this.e.i(0,"aTexUV",s)
for(r=b-1,q=a-1,p=0;p<b;++p)for(o=p/r,n=0;n<a;++n){m=new Float32Array(2)
m[0]=o
m[1]=n/q
C.a.l(s,new T.b_(m))}H.d(s.length===t)},
dh:function(a,b,c){var t,s,r,q,p,o,n,m,l
H.d(this.d.length===a*b)
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
H.d(!0)
C.a.l(t,new G.ew(p+m,l+m,l+n,p+n))
n=m}q=o}},
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3[0]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gE(s),r=r.gv(r);r.p();){q=r.gq()
p=$.$get$S().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ak(t," ")}}
G.dB.prototype={}
G.bY.prototype={}
G.dg.prototype={
dm:function(a){this.C("cDepthTest",!0)
this.C("cDepthWrite",!0)
this.C("cBlendEquation",$.$get$k1())
this.C("cStencilFunc",$.$get$jw())}}
G.dh.prototype={
bz:function(a,b,c){var t,s
if(C.i.aO(a,0)===105){if(H.aw(C.b.aJ(b.length,c)===this.z))H.aH("ChangeAttribute "+this.z)}else{t=C.b.aJ(b.length,c)
if(H.aw(t===(this.ch.length/3|0)))H.aH("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dP(t.a,34962,s)
J.jP(t.a,34962,b,35048)},
dj:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a9:function(a,b,c){var t,s,r,q,p,o
t=J.jM(a,0)===105
if(t&&this.z===0)this.z=C.b.aJ(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.je(r.a))
this.bz(a,b,c)
q=$.$get$S().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aw(p.D(0,a)))H.aH("unexpected attribute "+a)
o=p.h(0,a)
J.dQ(r.a,this.e)
r.cn(0,o,t?1:0)
s=s.h(0,a)
p=q.bA()
J.dP(r.a,34962,s)
J.jZ(r.a,o,p,5126,!1,0,0)},
by:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.je(s.a))
this.ch=a
this.bz("aPosition",a,3)
r=$.$get$S().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.D(0,"aPosition"))
p=q.h(0,"aPosition")
J.dQ(s.a,this.e)
s.cn(0,p,0)
t=t.h(0,"aPosition")
q=r.bA()
J.dP(s.a,34962,t)
J.jZ(s.a,p,q,5126,!1,0,0)},
k:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gE(t),r=r.gv(r);r.p();){q=r.gq()
C.a.l(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ak(s,"  ")},
saS:function(a){this.cx=a}}
G.fq.prototype={
de:function(a,b){var t=C.b.cR(a,b)
if(this.z===t)return
this.z=t
this.bC()},
bC:function(){var t,s,r,q,p,o,n
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
bB:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.x(new Float32Array(H.B(3)))
o.aG(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.J(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.r(n)
r=!!s.$isaG
k=r?s.gaB(n):1
if(!!s.$isx){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gK(n)
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
a3.J(this.db)
a3.eQ(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fC.prototype={
dz:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gj(t)===s.gj(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gE(s),s=s.gv(s);s.p();){q=s.gq()
if(!t.D(0,q))C.a.l(r,q)}for(t=this.x,s=new P.c2(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dC:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gE(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jM(n,0)){case 117:if(q.D(0,n)){m=b.h(0,n)
if(p.D(0,n))H.j2("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$S().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.D(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jj(r.a,k,m)
else if(!!J.r(m).$iskl)J.lY(r.a,k,m)
break
case"float":if(l.c===0)J.lW(r.a,k,m)
else if(!!J.r(m).$iseA)J.lX(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aI(m,"$isa4").a
J.jY(r.a,k,!1,j)}else if(!!J.r(m).$iseA)J.jY(r.a,k,!1,m)
else if(H.aw(!1))H.aH("bad unform: "+n)
break
case"mat3":if(l.c===0){j=C.P.gfa(H.aI(m,"$isnJ"))
J.jX(r.a,k,!1,j)}else if(!!J.r(m).$iseA)J.jX(r.a,k,!1,m)
else if(H.aw(!1))H.aH("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jW(i,k,H.aI(m,"$isaG").a)
else J.jW(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jV(i,k,H.aI(m,"$isx").a)
else J.jV(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jU(i,k,H.aI(m,"$isb_").a)
else J.jU(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a5(33984,this.ch)
J.jN(r.a,j)
j=H.aI(m,"$isbX").b
J.cd(r.a,3553,j)
j=this.ch
J.jj(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a5(33984,this.ch)
J.jN(r.a,j)
j=H.aI(m,"$isbX").b
J.cd(r.a,34067,j)
j=this.ch
J.jj(r.a,k,j)
this.ch=this.ch+1
break
default:H.j2("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.D(m,!0)
i=r.a
if(j)J.ce(i,2929)
else J.jf(i,2929)
break
case"cStencilFunc":H.aI(m,"$isdB")
j=m.a
i=r.a
if(j===1281)J.jf(i,2960)
else{J.ce(i,2960)
i=m.b
h=m.c
J.lR(r.a,j,i,h)}break
case"cDepthWrite":J.lu(r.a,m)
break
case"cBlendEquation":H.aI(m,"$isbY")
j=m.a
i=r.a
if(j===1281)J.jf(i,3042)
else{J.ce(i,3042)
i=m.b
h=m.c
J.lp(r.a,i,h)
J.lo(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aP(1000*(s-new P.bu(t,!1).a)).k(0)},
df:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lZ(t.a,this.r)
this.ch=0
this.z.U(0)
for(s=0;s<2;++s){r=b[s]
this.dC(r.a,r.bB())}q=this.Q
q.U(0)
for(p=a.cy,p=p.gE(p),p=p.gv(p);p.p();)q.l(0,p.gq())
o=this.dz()
if(o.length!==0)P.al("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dQ(a.d.a,a.e)
n=this.e.f.length>0
q=a.f
p=a.dj()
m=a.Q
l=a.z
if(n)J.ln(t.a,q)
if(m!==-1){k=t.a
if(l>1)J.ly(k,q,p,m,0,l)
else J.lx(k,q,p,m,0)}else{m=t.a
if(l>1)J.lw(m,q,0,p,l)
else J.lv(m,q,0,p)}if(n)J.lB(t.a)},
aL:function(a,b){return this.df(a,b,null)},
dq:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.jS(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
r.i(0,n,J.jS(q.a,p,n))}}}
G.w.prototype={
bA:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.aD.prototype={
aK:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.P)(a),++q){p=a[q]
H.d($.$get$S().D(0,p))
H.d(!C.a.B(s,p))
C.a.l(s,p)
r.i(0,p,this.r);++this.r}C.a.aH(s)},
a0:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.P)(a),++r){q=a[r]
if(H.aw($.$get$S().D(0,q)))H.aH("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.aH(s)},
ap:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$S().D(0,r))
H.d(!C.a.B(t,r))
C.a.l(t,r)}C.a.aH(t)},
dt:function(a,b){H.d(this.b==null)
this.b=this.aM(!0,a,b)},
aq:function(a){return this.dt(a,null)},
ds:function(a,b){H.d(this.b==null)
this.b=this.aM(!1,a,b)},
dr:function(a){return this.ds(a,null)},
aM:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){n=t[o]
m=$.$get$S().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.P)(t),++o){k=t[o]
m=$.$get$S().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
if(a)C.a.l(q,"void main(void) {")
C.a.L(q,b)
if(a)C.a.l(q,"}")
return C.a.ak(q,"\n")}}
G.fN.prototype={}
G.h7.prototype={}
G.bX.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eJ.prototype={
du:function(a){var t,s
t=this.d
s=this.c
J.cd(t.a,s,this.b)
J.lS(t.a,s,0,6408,6408,5121,a)},
dk:function(a,b,c,d,e){var t,s,r,q
t=this.d
s=this.c
J.cd(t.a,s,this.b)
J.lO(t.a,37440,1)
this.du(this.f)
r=this.e
q=r.e
if(q!==1)J.lT(t.a,s,34046,q)
J.jT(t.a,s,10240,r.r)
J.jT(t.a,s,10241,r.f)
H.d(J.lJ(t.a)===0)
J.cd(t.a,s,null)}}
R.ds.prototype={
cu:function(a){var t,s,r
t=this.fy
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.al("size change "+H.f(s)+" "+H.f(r))
this.de(s,r)
J.m0(this.go.a,0,0,s,r)}}
R.fR.prototype={
dF:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mQ("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.x).bI(r,"float")
r.setProperty(p,"left","")
p=C.x.bI(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.q.P(t,s)}return t},
dv:function(a,b,c){var t,s,r
if(a==null)throw H.e("no element provided")
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
J.jc(this.a,s)
r=this.dF(b,c,90,30)
this.d=r
J.jc(this.a,r)
t=t.createElement("div")
this.c=t
J.jc(this.a,t)}}
R.fS.prototype={
dB:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.z.f4(s,2)+" fps"
t=this.c;(t&&C.q).d3(t,b)
r=C.b.H(30*C.z.ek(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.q).P(t,q)},
dA:function(a){return this.dB(a,"")}}
B.fK.prototype={
$2:function(a,b){var t,s,r,q,p,o
t=this.a
s=this.c*a
r=Math.cos(s)
s=Math.sin(s)
q=this.b*a
p=Math.cos(q)
q=Math.sin(q)
r=t*(2+r)*0.5
o=b.a
o[0]=r*p
o[1]=r*q
o[2]=this.d*t*0.5*s},
$S:function(){return{func:1,v:true,args:[P.L,T.x]}}}
D.eX.prototype={
$1:function(a){return this.a.b7(0,this.b)},
$S:function(){return{func:1,args:[,]}}}
A.iP.prototype={
$2:function(a,b){var t=536870911&a+J.an(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.m,P.n]}}}
T.a4.prototype={
a7:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
J:function(a){var t,s
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
if(b instanceof T.a4){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.iO(this.a)},
ao:function(a){var t,s
t=new Float32Array(H.B(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aG(t)},
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
bs:function(a,b,c){var t=this.a
t[14]=c
t[13]=b
t[12]=a},
eQ:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.b_.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.b_){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.iO(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.x.prototype={
aG:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
J:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.x){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.iO(this.a)},
h:function(a,b){return this.a[b]},
gj:function(a){return Math.sqrt(this.gbc())},
gbc:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
a3:function(a){var t,s,r
t=Math.sqrt(this.gbc())
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
cf:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.x(new Float32Array(H.B(3)))
t.aG(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
aw:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
bw:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gK:function(a){return this.a[2]}}
T.aG.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
w:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aG){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.iO(this.a)},
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
gK:function(a){return this.a[2]},
gaB:function(a){return this.a[3]}}
G.j_.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.a=b3+0
s=this.c
s.go=H.Y(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.Y(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.Y(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.Y(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.Y(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.Y(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.Y(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.Y(C.c.el(s.id,-1.4707963267948965,1.4707963267948965))
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
p=s.k2
r=p.a
m[12]=m[12]+r[0]
m[13]=m[13]+r[1]
m[14]=m[14]+r[2]
r=m[12]
q=m[13]
n=m[14]
l=new T.x(new Float32Array(H.B(3)))
l.aG(0,1,0)
k=s.e
j=k.a
j[0]=m[12]
j[1]=m[13]
j[2]=m[14]
j=new Float32Array(H.B(3))
i=new T.x(j)
i.J(k)
i.bw(p)
i.a3(0)
h=l.cf(i)
h.a3(0)
g=i.cf(h)
g.a3(0)
p=h.b8(k)
f=g.b8(k)
k=i.b8(k)
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
m[15]=1
m[14]=-k
m[13]=-f
m[12]=-p
m[11]=0
m[10]=j
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
m[12]=r
m[13]=q
m[14]=n
n=s.f
q=n.a
q[0]=m[2]
q[1]=m[6]
q[2]=m[10]
s=-s.k1
n=Math.sqrt(n.gbc())
h=q[0]/n
g=q[1]/n
i=q[2]/n
n=Math.cos(s)
s=Math.sin(s)
a3=1-n
a4=h*h*a3+n
q=i*s
a5=h*g*a3-q
r=g*s
a6=h*i*a3+r
a7=g*h*a3+q
a8=g*g*a3+n
s=h*s
a9=g*i*a3-s
b0=i*h*a3-r
b1=i*g*a3+s
b2=i*i*a3+n
n=m[0]
s=m[4]
r=m[8]
q=m[1]
d=m[5]
b=m[9]
a=m[2]
a0=m[6]
a1=m[10]
a2=m[3]
e=m[7]
c=m[11]
m[0]=n*a4+s*a7+r*b0
m[1]=q*a4+d*a7+b*b0
m[2]=a*a4+a0*a7+a1*b0
m[3]=a2*a4+e*a7+c*b0
m[4]=n*a5+s*a8+r*b1
m[5]=q*a5+d*a8+b*b1
m[6]=a*a5+a0*a8+a1*b1
m[7]=a2*a5+e*a8+c*b1
m[8]=n*a6+s*a9+r*b2
m[9]=q*a6+d*a9+b*b2
m[10]=a*a6+a0*a9+a1*b2
m[11]=a2*a6+e*a9+c*b2
c=this.y
c.d.i(0,"uTime",b3/1000)
e=this.r
a2=this.d
this.e.aL(e,[a2,this.x])
this.f.aL(e,[a2,c])
this.z.aL(this.ch,[this.Q,a2])
C.ay.ged(window).aA(this)
this.b.dA(t.a)},
$S:function(){return{func:1,v:true,args:[P.U]}}}
G.j0.prototype={
$1:function(a){this.b.C("uTexture",G.kk(this.a,$.lf,J.b6(a,0),null,3553))
this.c.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.d8=J.a.prototype.k
J.bF.prototype.da=J.bF.prototype.k
P.V.prototype.d9=P.V.prototype.aC
W.a1.prototype.aI=W.a1.prototype.M
W.c4.prototype.dc=W.c4.prototype.T;(function installTearOffs(){installTearOff(H.b3.prototype,"geN",0,0,0,null,["$0"],["az"],0)
installTearOff(H.aj.prototype,"gcW",0,0,0,null,["$1"],["I"],2)
installTearOff(H.b2.prototype,"gev",0,0,0,null,["$1"],["V"],2)
installTearOff(P,"n7",1,0,0,null,["$1"],["mN"],1)
installTearOff(P,"n8",1,0,0,null,["$1"],["mO"],1)
installTearOff(P,"n9",1,0,0,null,["$1"],["mP"],1)
installTearOff(P,"kZ",1,0,0,null,["$0"],["n5"],0)
installTearOff(P.J.prototype,"gbN",0,0,0,null,["$2","$1"],["O","dM"],5)
installTearOff(P,"nf",1,0,0,null,["$2"],["m6"],7)
installTearOff(W,"nk",1,0,0,null,["$1"],["mb"],8)
installTearOff(W,"nl",1,0,0,null,["$4"],["mT"],4)
installTearOff(W,"nm",1,0,0,null,["$4"],["mU"],4)
installTearOff(W.dn.prototype,"gbd",0,1,0,null,["$0"],["be"],3)
installTearOff(W.dC.prototype,"gbd",0,1,0,null,["$0"],["be"],3)
installTearOff(R.ds.prototype,"geX",0,0,0,null,["$1"],["cu"],6)
installTearOff(G,"la",1,0,0,null,["$0"],["nu"],0)})();(function inheritance(){inherit(P.n,null)
var t=P.n
inherit(H.jp,t)
inherit(J.a,t)
inherit(J.dW,t)
inherit(P.V,t)
inherit(H.de,t)
inherit(P.d9,t)
inherit(H.cq,t)
inherit(H.b8,t)
inherit(H.ib,t)
inherit(H.b3,t)
inherit(H.hK,t)
inherit(H.b4,t)
inherit(H.ia,t)
inherit(H.hC,t)
inherit(H.bh,t)
inherit(H.h9,t)
inherit(H.ap,t)
inherit(H.aj,t)
inherit(H.b2,t)
inherit(H.fB,t)
inherit(H.hg,t)
inherit(P.ba,t)
inherit(H.dJ,t)
inherit(H.aE,t)
inherit(H.af,t)
inherit(H.eT,t)
inherit(H.eV,t)
inherit(P.hE,t)
inherit(P.c_,t)
inherit(P.J,t)
inherit(P.dF,t)
inherit(P.bT,t)
inherit(P.fU,t)
inherit(P.b7,t)
inherit(P.iB,t)
inherit(P.fJ,t)
inherit(P.i8,t)
inherit(P.c2,t)
inherit(P.bQ,t)
inherit(P.v,t)
inherit(P.i9,t)
inherit(P.ax,t)
inherit(P.G,t)
inherit(P.bu,t)
inherit(P.U,t)
inherit(P.aP,t)
inherit(P.dy,t)
inherit(P.hP,t)
inherit(P.ed,t)
inherit(P.b,t)
inherit(P.aB,t)
inherit(P.aC,t)
inherit(P.bS,t)
inherit(P.q,t)
inherit(P.bU,t)
inherit(W.e2,t)
inherit(W.hB,t)
inherit(W.c1,t)
inherit(W.z,t)
inherit(W.dq,t)
inherit(W.c4,t)
inherit(W.it,t)
inherit(W.cr,t)
inherit(W.dp,t)
inherit(W.im,t)
inherit(W.dK,t)
inherit(P.i6,t)
inherit(P.id,t)
inherit(G.f5,t)
inherit(G.e0,t)
inherit(G.ew,t)
inherit(G.eF,t)
inherit(G.dB,t)
inherit(G.bY,t)
inherit(G.w,t)
inherit(G.aD,t)
inherit(G.h7,t)
inherit(G.bX,t)
inherit(R.fR,t)
inherit(T.a4,t)
inherit(T.b_,t)
inherit(T.x,t)
inherit(T.aG,t)
t=J.a
inherit(J.eP,t)
inherit(J.dc,t)
inherit(J.bF,t)
inherit(J.aR,t)
inherit(J.be,t)
inherit(J.aS,t)
inherit(H.bJ,t)
inherit(H.bg,t)
inherit(W.h,t)
inherit(W.a_,t)
inherit(W.cg,t)
inherit(W.ch,t)
inherit(W.ci,t)
inherit(W.y,t)
inherit(W.cu,t)
inherit(W.e4,t)
inherit(W.e5,t)
inherit(W.e6,t)
inherit(W.cm,t)
inherit(W.cn,t)
inherit(W.co,t)
inherit(W.cF,t)
inherit(W.e9,t)
inherit(W.i,t)
inherit(W.cE,t)
inherit(W.a3,t)
inherit(W.eG,t)
inherit(W.cD,t)
inherit(W.bb,t)
inherit(W.bc,t)
inherit(W.eY,t)
inherit(W.f2,t)
inherit(W.a5,t)
inherit(W.cB,t)
inherit(W.fe,t)
inherit(W.dn,t)
inherit(W.cI,t)
inherit(W.fn,t)
inherit(W.bi,t)
inherit(W.a6,t)
inherit(W.cA,t)
inherit(W.ah,t)
inherit(W.du,t)
inherit(W.a8,t)
inherit(W.cz,t)
inherit(W.a9,t)
inherit(W.fT,t)
inherit(W.W,t)
inherit(W.cy,t)
inherit(W.h8,t)
inherit(W.ab,t)
inherit(W.cO,t)
inherit(W.hd,t)
inherit(W.dC,t)
inherit(W.hl,t)
inherit(W.hq,t)
inherit(W.hD,t)
inherit(W.cN,t)
inherit(W.cM,t)
inherit(W.cL,t)
inherit(W.cH,t)
inherit(W.cK,t)
inherit(W.cJ,t)
inherit(W.iz,t)
inherit(W.iA,t)
inherit(P.aq,t)
inherit(P.cx,t)
inherit(P.ar,t)
inherit(P.cC,t)
inherit(P.ft,t)
inherit(P.fu,t)
inherit(P.fz,t)
inherit(P.cv,t)
inherit(P.at,t)
inherit(P.cG,t)
inherit(P.hp,t)
inherit(P.dX,t)
inherit(P.fD,t)
inherit(P.fE,t)
inherit(P.iy,t)
inherit(P.cw,t)
t=J.bF
inherit(J.fr,t)
inherit(J.aZ,t)
inherit(J.aT,t)
inherit(J.jo,J.aR)
t=J.be
inherit(J.db,t)
inherit(J.da,t)
t=P.V
inherit(H.c,t)
inherit(H.df,t)
inherit(H.dE,t)
t=H.c
inherit(H.bf,t)
inherit(H.eU,t)
inherit(H.ec,H.df)
t=P.d9
inherit(H.eZ,t)
inherit(H.hs,t)
t=H.bf
inherit(H.bG,t)
inherit(P.eW,t)
t=H.b8
inherit(H.j9,t)
inherit(H.ja,t)
inherit(H.i5,t)
inherit(H.hL,t)
inherit(H.eM,t)
inherit(H.eN,t)
inherit(H.ic,t)
inherit(H.ha,t)
inherit(H.hb,t)
inherit(H.jb,t)
inherit(H.iU,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.iY,t)
inherit(H.h3,t)
inherit(H.eQ,t)
inherit(H.iQ,t)
inherit(H.iR,t)
inherit(H.iS,t)
inherit(P.hy,t)
inherit(P.hx,t)
inherit(P.hz,t)
inherit(P.hA,t)
inherit(P.eE,t)
inherit(P.eD,t)
inherit(P.hQ,t)
inherit(P.hY,t)
inherit(P.hU,t)
inherit(P.hV,t)
inherit(P.hW,t)
inherit(P.hS,t)
inherit(P.hX,t)
inherit(P.hR,t)
inherit(P.i0,t)
inherit(P.i1,t)
inherit(P.i_,t)
inherit(P.hZ,t)
inherit(P.fX,t)
inherit(P.fY,t)
inherit(P.fV,t)
inherit(P.fW,t)
inherit(P.iC,t)
inherit(P.iF,t)
inherit(P.ih,t)
inherit(P.ig,t)
inherit(P.ii,t)
inherit(P.f_,t)
inherit(P.ea,t)
inherit(P.eb,t)
inherit(W.iG,t)
inherit(W.ht,t)
inherit(W.hO,t)
inherit(W.fg,t)
inherit(W.ff,t)
inherit(W.ip,t)
inherit(W.iq,t)
inherit(W.iw,t)
inherit(W.ix,t)
inherit(P.iH,t)
inherit(B.j4,t)
inherit(B.j5,t)
inherit(B.j6,t)
inherit(B.j7,t)
inherit(B.j8,t)
inherit(B.fj,t)
inherit(B.fk,t)
inherit(B.fl,t)
inherit(B.fm,t)
inherit(B.fK,t)
inherit(D.eX,t)
inherit(A.iP,t)
inherit(G.j_,t)
inherit(G.j0,t)
t=H.hC
inherit(H.bl,t)
inherit(H.c5,t)
t=P.ba
inherit(H.dr,t)
inherit(H.eR,t)
inherit(H.hk,t)
inherit(H.hi,t)
inherit(H.e_,t)
inherit(H.fG,t)
inherit(P.cf,t)
inherit(P.bP,t)
inherit(P.ao,t)
inherit(P.t,t)
inherit(P.dD,t)
inherit(P.as,t)
inherit(P.a0,t)
inherit(P.e3,t)
t=H.h3
inherit(H.fQ,t)
inherit(H.bt,t)
inherit(H.hv,P.cf)
t=H.bg
inherit(H.f6,t)
inherit(H.dj,t)
t=H.dj
inherit(H.bL,t)
inherit(H.bK,t)
inherit(H.bM,H.bL)
inherit(H.dk,H.bM)
inherit(H.bN,H.bK)
inherit(H.dl,H.bN)
t=H.dk
inherit(H.di,t)
inherit(H.f7,t)
t=H.dl
inherit(H.f8,t)
inherit(H.f9,t)
inherit(H.fa,t)
inherit(H.fb,t)
inherit(H.fc,t)
inherit(H.dm,t)
inherit(H.fd,t)
t=P.hE
inherit(P.hw,t)
inherit(P.iu,t)
inherit(P.ie,P.iB)
inherit(P.dH,H.af)
inherit(P.fI,P.fJ)
inherit(P.i4,P.fI)
inherit(P.i7,P.i4)
inherit(P.dd,P.bQ)
t=P.U
inherit(P.L,t)
inherit(P.m,t)
t=P.ao
inherit(P.dv,t)
inherit(P.eK,t)
t=W.h
inherit(W.p,t)
inherit(W.bz,t)
inherit(W.e1,t)
inherit(W.ey,t)
inherit(W.bE,t)
inherit(W.bI,t)
inherit(W.fw,t)
inherit(W.dw,t)
inherit(W.fL,t)
inherit(W.a7,t)
inherit(W.by,t)
inherit(W.aa,t)
inherit(W.X,t)
inherit(W.bx,t)
inherit(W.hn,t)
inherit(W.hr,t)
inherit(W.bZ,t)
inherit(W.hu,t)
inherit(W.b1,t)
inherit(W.io,t)
t=W.p
inherit(W.a1,t)
inherit(W.aO,t)
inherit(W.bv,t)
inherit(W.cl,t)
inherit(W.hG,t)
t=W.a1
inherit(W.k,t)
inherit(P.F,t)
t=W.k
inherit(W.dT,t)
inherit(W.dU,t)
inherit(W.aM,t)
inherit(W.aN,t)
inherit(W.ck,t)
inherit(W.eC,t)
inherit(W.cs,t)
inherit(W.bd,t)
inherit(W.eL,t)
inherit(W.bH,t)
inherit(W.fH,t)
inherit(W.dz,t)
inherit(W.h1,t)
inherit(W.h2,t)
inherit(W.bV,t)
inherit(W.i3,t)
inherit(W.bC,W.bz)
inherit(W.dY,W.bC)
inherit(W.b9,W.cu)
inherit(W.e7,W.cn)
inherit(W.d7,W.cF)
inherit(W.e8,W.d7)
inherit(W.a2,W.cg)
inherit(W.d5,W.cE)
inherit(W.ex,W.d5)
inherit(W.d_,W.cD)
inherit(W.bD,W.d_)
inherit(W.ct,W.bv)
inherit(W.eH,W.bE)
inherit(W.aF,W.i)
t=W.aF
inherit(W.aU,t)
inherit(W.N,t)
inherit(W.aY,t)
inherit(W.f3,W.bI)
inherit(W.d1,W.cB)
inherit(W.f4,W.d1)
inherit(W.R,P.dd)
inherit(W.d0,W.cI)
inherit(W.bO,W.d0)
t=W.bi
inherit(W.fp,t)
inherit(W.fF,t)
inherit(W.hf,t)
inherit(W.cR,W.cA)
inherit(W.fs,W.cR)
inherit(W.fv,W.ah)
inherit(W.bB,W.by)
inherit(W.fM,W.bB)
inherit(W.cU,W.cz)
inherit(W.fO,W.cU)
inherit(W.cS,W.cy)
inherit(W.h5,W.cS)
inherit(W.bA,W.bx)
inherit(W.h6,W.bA)
inherit(W.d2,W.cO)
inherit(W.hc,W.d2)
inherit(W.bj,W.bH)
inherit(W.b0,W.N)
inherit(W.cP,W.cN)
inherit(W.dG,W.cP)
inherit(W.cW,W.cM)
inherit(W.hF,W.cW)
inherit(W.hH,W.co)
inherit(W.d6,W.cL)
inherit(W.i2,W.d6)
inherit(W.d4,W.cH)
inherit(W.dI,W.d4)
inherit(W.d3,W.cK)
inherit(W.ir,W.d3)
inherit(W.cY,W.cJ)
inherit(W.is,W.cY)
inherit(W.hI,W.hB)
inherit(W.hM,P.bT)
inherit(W.hJ,W.hM)
inherit(W.hN,P.fU)
inherit(W.iv,W.c4)
inherit(P.I,P.id)
t=P.F
inherit(P.aA,t)
inherit(P.aL,t)
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
inherit(P.ev,t)
inherit(P.ez,t)
inherit(P.f0,t)
inherit(P.f1,t)
inherit(P.fo,t)
inherit(P.bR,t)
inherit(P.h0,t)
inherit(P.ho,t)
inherit(P.c0,t)
inherit(P.ij,t)
inherit(P.ik,t)
inherit(P.il,t)
t=P.aA
inherit(P.dS,t)
inherit(P.eB,t)
inherit(P.ae,t)
inherit(P.eI,t)
inherit(P.h_,t)
inherit(P.dA,t)
inherit(P.hm,t)
inherit(P.cQ,P.cx)
inherit(P.eS,P.cQ)
inherit(P.cZ,P.cC)
inherit(P.fh,P.cZ)
inherit(P.fA,P.ae)
inherit(P.cX,P.cv)
inherit(P.fZ,P.cX)
t=P.dA
inherit(P.h4,t)
inherit(P.bW,t)
inherit(P.cV,P.cG)
inherit(P.he,P.cV)
inherit(P.cT,P.cw)
inherit(P.fP,P.cT)
t=G.f5
inherit(G.fN,t)
inherit(G.hj,t)
inherit(G.dh,t)
inherit(G.fC,t)
inherit(G.dZ,G.fN)
inherit(B.fi,G.dZ)
t=G.hj
inherit(G.dg,t)
inherit(G.fq,t)
inherit(G.eJ,G.bX)
inherit(R.ds,G.fq)
inherit(R.fS,R.fR)
mixin(H.bK,P.v)
mixin(H.bL,P.v)
mixin(H.bM,H.cq)
mixin(H.bN,H.cq)
mixin(P.bQ,P.v)
mixin(W.bx,P.v)
mixin(W.by,P.v)
mixin(W.bz,P.v)
mixin(W.bA,W.z)
mixin(W.bB,W.z)
mixin(W.bC,W.z)
mixin(W.cu,W.e2)
mixin(W.cO,P.v)
mixin(W.cA,P.v)
mixin(W.cH,P.v)
mixin(W.cI,P.v)
mixin(W.cJ,P.v)
mixin(W.cK,P.v)
mixin(W.cL,P.v)
mixin(W.cM,P.v)
mixin(W.cN,P.v)
mixin(W.cy,P.v)
mixin(W.cz,P.v)
mixin(W.cB,P.v)
mixin(W.cD,P.v)
mixin(W.cE,P.v)
mixin(W.cF,P.v)
mixin(W.cP,W.z)
mixin(W.cR,W.z)
mixin(W.d0,W.z)
mixin(W.d1,W.z)
mixin(W.d_,W.z)
mixin(W.d4,W.z)
mixin(W.d5,W.z)
mixin(W.d6,W.z)
mixin(W.d7,W.z)
mixin(W.cS,W.z)
mixin(W.cU,W.z)
mixin(W.cW,W.z)
mixin(W.cY,W.z)
mixin(W.d2,W.z)
mixin(W.d3,W.z)
mixin(P.cx,P.v)
mixin(P.cv,P.v)
mixin(P.cC,P.v)
mixin(P.cG,P.v)
mixin(P.cQ,W.z)
mixin(P.cZ,W.z)
mixin(P.cV,W.z)
mixin(P.cX,W.z)
mixin(P.cw,P.v)
mixin(P.cT,W.z)})();(function constants(){C.o=W.aM.prototype
C.w=W.aN.prototype
C.m=W.ch.prototype
C.p=W.ci.prototype
C.x=W.b9.prototype
C.q=W.ck.prototype
C.M=W.cm.prototype
C.N=W.cs.prototype
C.r=W.ct.prototype
C.O=J.a.prototype
C.a=J.aR.prototype
C.z=J.da.prototype
C.b=J.db.prototype
C.P=J.dc.prototype
C.c=J.be.prototype
C.i=J.aS.prototype
C.W=J.aT.prototype
C.Z=H.di.prototype
C.D=W.bO.prototype
C.E=J.fr.prototype
C.F=W.du.prototype
C.K=W.dz.prototype
C.v=J.aZ.prototype
C.ax=W.b0.prototype
C.ay=W.bZ.prototype
C.L=new P.i6()
C.d=new P.ie()
C.y=new P.aP(0)
C.Q=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.R=function(hooks) {
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

C.S=function(getTagFallback) {
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
C.T=function() {
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
C.U=function(hooks) {
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
C.V=function(hooks) {
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
C.X=H.C(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.q])
C.Y=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.C=makeConstList([])
C.t=H.C(makeConstList(["bind","if","ref","repeat","syntax"]),[P.q])
C.u=H.C(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.q])
C.a_=new G.w("vec3","vertex btangents",0)
C.e=new G.w("vec3","",0)
C.a0=new G.w("vec4","delta from light",0)
C.n=new G.w("","",0)
C.G=new G.w("vec3","vertex coordinates",0)
C.a1=new G.w("vec3","vertex binormals",0)
C.H=new G.w("vec4","for wireframe",0)
C.a2=new G.w("vec4","per vertex color",0)
C.a3=new G.w("float","for normal maps",0)
C.j=new G.w("mat4","",0)
C.a5=new G.w("mat4","",4)
C.a4=new G.w("mat4","",128)
C.f=new G.w("float","",0)
C.a6=new G.w("float","",4)
C.a7=new G.w("float","depth for shadowmaps",0)
C.h=new G.w("sampler2D","",0)
C.a8=new G.w("float","for bump maps",0)
C.a9=new G.w("vec2","texture uvs",0)
C.aa=new G.w("float","time since program start in sec",0)
C.k=new G.w("vec2","",0)
C.ab=new G.w("samplerCube","",0)
C.l=new G.w("vec4","",0)
C.ac=new G.w("vec3","vertex normals",0)
C.ad=new G.w("sampler2DShadow","",0)
C.I=new G.w("vec3","per vertex color",0)
C.J=new G.w("mat3","",0)
C.ae=new G.w("vec3","vertex tangents",0)
C.af=H.K("nE")
C.ag=H.K("nF")
C.ah=H.K("eA")
C.ai=H.K("nG")
C.aj=H.K("nH")
C.ak=H.K("kl")
C.al=H.K("nI")
C.am=H.K("ko")
C.an=H.K("aC")
C.ao=H.K("q")
C.ap=H.K("kI")
C.aq=H.K("kJ")
C.ar=H.K("nK")
C.as=H.K("kK")
C.at=H.K("ax")
C.au=H.K("L")
C.av=H.K("m")
C.aw=H.K("U")})();(function staticFields(){$.kt="$cachedFunction"
$.ku="$cachedInvocation"
$.k5=null
$.k3=null
$.jB=!1
$.jF=null
$.kW=null
$.ld=null
$.iK=null
$.iT=null
$.jG=null
$.bm=null
$.c6=null
$.c7=null
$.jC=!1
$.u=C.d
$.kh=0
$.az=null
$.jl=null
$.kg=null
$.kf=null
$.kd=null
$.kc=null
$.kb=null
$.ka=null
$.nb=0
$.nc=0
$.jK=0
$.l7=0
$.cb=0
$.cc=0
$.nB=!1
$.l1=0
$.lf="../gradient.jpg"})();(function lazyInitializers(){lazy($,"k9","$get$k9",function(){return H.l4("_$dart_dartClosure")})
lazy($,"jq","$get$jq",function(){return H.l4("_$dart_js")})
lazy($,"km","$get$km",function(){return H.mm()})
lazy($,"kn","$get$kn",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kh
$.kh=t+1
t="expando$key$"+t}return new P.ed(null,t,[P.m])})
lazy($,"kx","$get$kx",function(){return H.au(H.hh({
toString:function(){return"$receiver$"}}))})
lazy($,"ky","$get$ky",function(){return H.au(H.hh({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kz","$get$kz",function(){return H.au(H.hh(null))})
lazy($,"kA","$get$kA",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kE","$get$kE",function(){return H.au(H.hh(void 0))})
lazy($,"kF","$get$kF",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kC","$get$kC",function(){return H.au(H.kD(null))})
lazy($,"kB","$get$kB",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kH","$get$kH",function(){return H.au(H.kD(void 0))})
lazy($,"kG","$get$kG",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jz","$get$jz",function(){return P.mM()})
lazy($,"kj","$get$kj",function(){return P.mR(null,P.aC)})
lazy($,"c8","$get$c8",function(){return[]})
lazy($,"k8","$get$k8",function(){return{}})
lazy($,"kP","$get$kP",function(){return P.js(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jA","$get$jA",function(){return P.H()})
lazy($,"iJ","$get$iJ",function(){return P.kp(P.m,P.ax)})
lazy($,"ca","$get$ca",function(){return P.kp(P.q,P.ax)})
lazy($,"jw","$get$jw",function(){return new G.dB(1281,0,4294967295)})
lazy($,"k1","$get$k1",function(){return new G.bY(1281,1281,1281)})
lazy($,"k0","$get$k0",function(){return new G.bY(32774,770,769)})
lazy($,"S","$get$S",function(){return P.aV(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.e,"tSpeed",C.e,"tForce",C.e,"aColors",C.I,"aColorAlpha",C.a2,"aPosition",C.G,"aTexUV",C.a9,"aNormal",C.ac,"aBinormal",C.a1,"aCenter",C.H,"aPointSize",C.f,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.ae,"aBitangent",C.a_,"iaRotation",C.l,"iaTranslation",C.e,"iaScale",C.e,"vColor",C.I,"vTexUV",C.k,"vLightWeighting",C.e,"vNormal",C.e,"vPosition",C.G,"vPositionFromLight",C.a0,"vCenter",C.H,"vDepth",C.a7,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.J,"uConvolutionMatrix",C.J,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.ad,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.ab,"uAnimationTable",C.h,"uTime",C.aa,"uCameraNear",C.f,"uCameraFar",C.f,"uFogNear",C.f,"uFogFar",C.f,"uPointSize",C.f,"uScale",C.f,"uAngle",C.f,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.f,"uShininess",C.f,"uShadowBias",C.f,"uOpacity",C.f,"uColor",C.e,"uAmbientDiffuse",C.e,"uColorEmissive",C.e,"uColorSpecular",C.e,"uColorDiffuse",C.e,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.e,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a4,"uLightDescs",C.a5,"uLightCount",C.f,"uLightTypes",C.a6,"uBumpScale",C.a8,"uNormalScale",C.a3])})
lazy($,"kL","$get$kL",function(){return C.L})
lazy($,"l9","$get$l9",function(){var t=new G.aD("PerlinNoiseV",null,[],[],[],[],0,P.H())
t.aK(["aPosition"])
t.ap(["vNormal"])
t.a0(["uPerspectiveViewMatrix","uModelMatrix","uTime"])
t.dr(["vec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); \n  return 2.2 * n_xyz;\n}\n","void main() {\n    vec3 normal = normalize( aPosition);\n    float f = 0.5 * pnoise( normal + uTime/3.0, vec3( 10.0 ) );\n    //vNormal = aPosition + f * normal;\n    //vNormal = f*normal;\n    vNormal = normal;\n    gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);\n}\n"])
return t})
lazy($,"lh","$get$lh",function(){var t=new G.aD("Textured",null,[],[],[],[],0,P.H())
t.aK(["aPosition","aTexUV"])
t.a0(["uPerspectiveViewMatrix","uModelMatrix"])
t.ap(["vTexUV"])
t.aq(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vTexUV = aTexUV;"])
return t})
lazy($,"lg","$get$lg",function(){var t=new G.aD("TexturedF",null,[],[],[],[],0,P.H())
t.ap(["vTexUV"])
t.a0(["uColor","uTexture"])
t.aq(["oFragColor = texture(uTexture, vTexUV) + vec4( uColor, 0.0 );"])
return t})
lazy($,"lc","$get$lc",function(){var t=new G.aD("PointSpritesV",null,[],[],[],[],0,P.H())
t.aK(["aPosition"])
t.a0(["uPerspectiveViewMatrix","uModelMatrix","uPointSize"])
t.aq(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","gl_PointSize = uPointSize/gl_Position.z;"])
return t})
lazy($,"lb","$get$lb",function(){var t=new G.aD("PointSpritesF",null,[],[],[],[],0,P.H())
t.a0(["uTexture"])
t.aq(["oFragColor = texture( uTexture,  gl_PointCoord);"])
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
mangledGlobalNames:{m:"int",L:"double",U:"num",q:"String",ax:"bool",aC:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.p},{func:1,ret:P.ax,args:[W.a1,P.q,P.q,W.c1]},{func:1,v:true,args:[P.n],opt:[P.bS]},{func:1,v:true,args:[W.i]},{func:1,ret:P.m,args:[P.G,P.G]},{func:1,ret:P.q,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmapRenderingContext:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bJ,ArrayBufferView:H.bg,DataView:H.f6,Float32Array:H.di,Float64Array:H.f7,Int16Array:H.f8,Int32Array:H.f9,Int8Array:H.fa,Uint16Array:H.fb,Uint32Array:H.fc,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.fd,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dT,HTMLAreaElement:W.dU,AudioTrack:W.a_,AudioTrackList:W.dY,Blob:W.cg,HTMLBodyElement:W.aM,HTMLCanvasElement:W.aN,CanvasGradient:W.ch,CanvasRenderingContext2D:W.ci,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CompositorWorker:W.e1,CSSCharsetRule:W.y,CSSFontFaceRule:W.y,CSSGroupingRule:W.y,CSSImportRule:W.y,CSSKeyframeRule:W.y,MozCSSKeyframeRule:W.y,WebKitCSSKeyframeRule:W.y,CSSKeyframesRule:W.y,MozCSSKeyframesRule:W.y,WebKitCSSKeyframesRule:W.y,CSSMediaRule:W.y,CSSNamespaceRule:W.y,CSSPageRule:W.y,CSSRule:W.y,CSSStyleRule:W.y,CSSSupportsRule:W.y,CSSViewportRule:W.y,CSSStyleDeclaration:W.b9,MSStyleCSSProperties:W.b9,CSS2Properties:W.b9,DataTransferItemList:W.e4,DeviceAcceleration:W.e5,HTMLDivElement:W.ck,XMLDocument:W.bv,Document:W.bv,DocumentFragment:W.cl,ShadowRoot:W.cl,DOMException:W.e6,DOMImplementation:W.cm,DOMPoint:W.e7,DOMPointReadOnly:W.cn,DOMRectReadOnly:W.co,DOMStringList:W.e8,DOMTokenList:W.e9,Element:W.a1,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a2,FileList:W.ex,FileWriter:W.ey,HTMLFormElement:W.eC,Gamepad:W.a3,HTMLHeadElement:W.cs,History:W.eG,HTMLCollection:W.bD,HTMLFormControlsCollection:W.bD,HTMLOptionsCollection:W.bD,HTMLDocument:W.ct,XMLHttpRequest:W.eH,XMLHttpRequestUpload:W.bE,XMLHttpRequestEventTarget:W.bE,ImageBitmap:W.bb,ImageData:W.bc,HTMLImageElement:W.bd,HTMLInputElement:W.eL,KeyboardEvent:W.aU,Location:W.eY,HTMLAudioElement:W.bH,HTMLMediaElement:W.bH,MediaList:W.f2,MIDIOutput:W.f3,MIDIInput:W.bI,MIDIPort:W.bI,MimeType:W.a5,MimeTypeArray:W.f4,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.fe,Attr:W.p,Node:W.p,NodeIterator:W.dn,NodeList:W.bO,RadioNodeList:W.bO,Path2D:W.fn,Perspective:W.fp,Plugin:W.a6,PluginArray:W.fs,PositionValue:W.fv,PresentationConnection:W.fw,Range:W.du,Rotation:W.fF,RTCDataChannel:W.dw,DataChannel:W.dw,HTMLSelectElement:W.fH,SharedWorker:W.fL,SourceBuffer:W.a7,SourceBufferList:W.fM,SpeechGrammar:W.a8,SpeechGrammarList:W.fO,SpeechRecognitionResult:W.a9,Storage:W.fT,CSSStyleSheet:W.W,StyleSheet:W.W,CalcLength:W.ah,KeywordValue:W.ah,LengthValue:W.ah,NumberValue:W.ah,SimpleLength:W.ah,TransformValue:W.ah,StyleValue:W.ah,HTMLTableElement:W.dz,HTMLTableRowElement:W.h1,HTMLTableSectionElement:W.h2,HTMLTemplateElement:W.bV,TextTrack:W.aa,TextTrackCue:W.X,VTTCue:W.X,TextTrackCueList:W.h5,TextTrackList:W.h6,TimeRanges:W.h8,Touch:W.ab,TouchEvent:W.aY,TouchList:W.hc,TrackDefaultList:W.hd,Matrix:W.bi,Skew:W.bi,TransformComponent:W.bi,Translation:W.hf,TreeWalker:W.dC,CompositionEvent:W.aF,FocusEvent:W.aF,TextEvent:W.aF,SVGZoomEvent:W.aF,UIEvent:W.aF,URL:W.hl,HTMLVideoElement:W.bj,VideoTrackList:W.hn,VTTRegionList:W.hq,WebSocket:W.hr,WheelEvent:W.b0,Window:W.bZ,DOMWindow:W.bZ,Worker:W.hu,CompositorWorkerGlobalScope:W.b1,DedicatedWorkerGlobalScope:W.b1,ServiceWorkerGlobalScope:W.b1,SharedWorkerGlobalScope:W.b1,WorkerGlobalScope:W.b1,ClientRect:W.hD,ClientRectList:W.dG,DOMRectList:W.dG,CSSRuleList:W.hF,DocumentType:W.hG,DOMRect:W.hH,GamepadList:W.i2,HTMLFrameSetElement:W.i3,NamedNodeMap:W.dI,MozNamedAttrMap:W.dI,ServiceWorker:W.io,SpeechRecognitionResultList:W.ir,StyleSheetList:W.is,WorkerLocation:W.iz,WorkerNavigator:W.iA,SVGAElement:P.dS,SVGAnimateElement:P.aL,SVGAnimateMotionElement:P.aL,SVGAnimateTransformElement:P.aL,SVGAnimationElement:P.aL,SVGSetElement:P.aL,SVGFEBlendElement:P.ee,SVGFEColorMatrixElement:P.ef,SVGFEComponentTransferElement:P.eg,SVGFECompositeElement:P.eh,SVGFEConvolveMatrixElement:P.ei,SVGFEDiffuseLightingElement:P.ej,SVGFEDisplacementMapElement:P.ek,SVGFEFloodElement:P.el,SVGFEGaussianBlurElement:P.em,SVGFEImageElement:P.en,SVGFEMergeElement:P.eo,SVGFEMorphologyElement:P.ep,SVGFEOffsetElement:P.eq,SVGFEPointLightElement:P.er,SVGFESpecularLightingElement:P.es,SVGFESpotLightElement:P.et,SVGFETileElement:P.eu,SVGFETurbulenceElement:P.ev,SVGFilterElement:P.ez,SVGForeignObjectElement:P.eB,SVGCircleElement:P.ae,SVGEllipseElement:P.ae,SVGLineElement:P.ae,SVGPathElement:P.ae,SVGPolygonElement:P.ae,SVGPolylineElement:P.ae,SVGGeometryElement:P.ae,SVGClipPathElement:P.aA,SVGDefsElement:P.aA,SVGGElement:P.aA,SVGSwitchElement:P.aA,SVGGraphicsElement:P.aA,SVGImageElement:P.eI,SVGLength:P.aq,SVGLengthList:P.eS,SVGMarkerElement:P.f0,SVGMaskElement:P.f1,SVGNumber:P.ar,SVGNumberList:P.fh,SVGPatternElement:P.fo,SVGPoint:P.ft,SVGPointList:P.fu,SVGRect:P.fz,SVGRectElement:P.fA,SVGScriptElement:P.bR,SVGStringList:P.fZ,SVGDescElement:P.F,SVGDiscardElement:P.F,SVGFEDistantLightElement:P.F,SVGFEFuncAElement:P.F,SVGFEFuncBElement:P.F,SVGFEFuncGElement:P.F,SVGFEFuncRElement:P.F,SVGFEMergeNodeElement:P.F,SVGMetadataElement:P.F,SVGStopElement:P.F,SVGStyleElement:P.F,SVGTitleElement:P.F,SVGComponentTransferFunctionElement:P.F,SVGElement:P.F,SVGSVGElement:P.h_,SVGSymbolElement:P.h0,SVGTextContentElement:P.dA,SVGTextPathElement:P.h4,SVGTSpanElement:P.bW,SVGTextElement:P.bW,SVGTextPositioningElement:P.bW,SVGTransform:P.at,SVGTransformList:P.he,SVGUseElement:P.hm,SVGViewElement:P.ho,SVGViewSpec:P.hp,SVGLinearGradientElement:P.c0,SVGRadialGradientElement:P.c0,SVGGradientElement:P.c0,SVGCursorElement:P.ij,SVGFEDropShadowElement:P.ik,SVGMPathElement:P.il,AudioBuffer:P.dX,WebGLRenderingContext:P.fD,WebGL2RenderingContext:P.fE,WebGL2RenderingContextBase:P.iy,SQLResultSetRowList:P.fP})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmapRenderingContext:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasGradient:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageBitmap:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dj.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.bz.$nativeSuperclassTag="EventTarget"
W.bC.$nativeSuperclassTag="EventTarget"
W.by.$nativeSuperclassTag="EventTarget"
W.bB.$nativeSuperclassTag="EventTarget"
W.bx.$nativeSuperclassTag="EventTarget"
W.bA.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.le(G.la(),b)},[])
else (function(b){H.le(G.la(),b)})([])})})()