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
if(v[t][a])return v[t][a]}}var C={},H={j9:function j9(a){this.a=a},
je:function(a,b,c,d){if(!!a.$isc)return new H.e6(a,b,[c,d])
return new H.d6(a,b,[c,d])},
eF:function(){return new P.aI("No element")},
m6:function(){return new P.aI("Too many elements")},
m5:function(){return new P.aI("Too few elements")},
dp:function(a,b,c,d){if(c-b<=32)H.mm(a,b,c,d)
else H.ml(a,b,c,d)},
mm:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ag(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aq(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
ml:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.K(t+1,6)
r=a3+s
q=a4-s
p=C.b.K(a3+a4,2)
o=p-s
n=p+s
t=J.ag(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.aq(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.aq(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.aq(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.aq(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aq(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.aq(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.aq(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.aq(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.aq(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.J(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dp(a2,a3,g-2,a5)
H.dp(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.J(a5.$2(t.h(a2,g),l),0);)++g
for(;J.J(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dp(a2,g,f,a5)}else H.dp(a2,g,f,a5)},
c:function c(){},
bd:function bd(){},
d5:function d5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d6:function d6(a,b,c){this.a=a
this.b=b
this.$ti=c},
e6:function e6(a,b,c){this.a=a
this.b=b
this.$ti=c},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bD:function bD(a,b,c){this.a=a
this.b=b
this.$ti=c},
dx:function dx(a,b,c){this.a=a
this.b=b
this.$ti=c},
hj:function hj(a,b,c){this.a=a
this.b=b
this.$ti=c},
cj:function cj(){},
dF:function(a,b){var t=a.an(b)
if(!u.globalState.d.cy)u.globalState.f.at()
return t},
iJ:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kV:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.w(s).$isb)throw H.f(P.jI("Arguments to main must be a List: "+H.i(s)))
u.globalState=new H.hW(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$k4()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hz(P.jd(null,H.b6),0)
r=P.p
s.sew(new H.aj(0,null,null,null,null,null,0,[r,H.b5]))
s.sez(new H.aj(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hV()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.m0,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mC)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ak(null,null,null,r)
p=new H.bf(0,null,!1)
o=new H.b5(s,new H.aj(0,null,null,null,null,null,0,[r,H.bf]),q,u.createNewIsolate(),p,new H.as(H.iN()),new H.as(H.iN()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
q.j(0,0)
o.by(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bk(a,{func:1,args:[,]}))o.an(new H.iT(t,a))
else if(H.bk(a,{func:1,args:[,,]}))o.an(new H.iU(t,a))
else o.an(a)
u.globalState.f.at()},
mC:function(a){var t=P.aX(["command","print","msg",a])
return new H.an(!0,P.bX(null,P.p)).M(t)},
m2:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m3()
return},
m3:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.f(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.f(new P.v('Cannot extract URI from "'+t+'"'))},
m0:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b4(!0,[]).a0(b.data)
s=J.ag(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.n4(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b4(!0,[]).a0(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b4(!0,[]).a0(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.p
j=P.ak(null,null,null,k)
i=new H.bf(0,null,!1)
h=new H.b5(s,new H.aj(0,null,null,null,null,null,0,[k,H.bf]),j,u.createNewIsolate(),i,new H.as(H.iN()),new H.as(H.iN()),!1,!1,[],P.ak(null,null,null,null),null,null,!1,!0,P.ak(null,null,null,null))
j.j(0,0)
h.by(0,i)
u.globalState.f.a.Y(0,new H.b6(h,new H.eC(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.at()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lw(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.at()
break
case"close":u.globalState.ch.as(0,$.$get$k5().h(0,a))
a.terminate()
u.globalState.f.at()
break
case"log":H.m_(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aX(["command","print","msg",t])
k=new H.an(!0,P.bX(null,P.p)).M(k)
s.toString
self.postMessage(k)}else P.ap(s.h(t,"msg"))
break
case"error":throw H.f(s.h(t,"msg"))}},
m_:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aX(["command","log","msg",a])
r=new H.an(!0,P.bX(null,P.p)).M(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.T(q)
t=H.aM(q)
s=P.ch(t)
throw H.f(s)}},
m1:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kb=$.kb+("_"+s)
$.kc=$.kc+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.bh(s,r),q,t.r])
r=new H.eD(a,b,c,d,t)
if(e){t.bR(q,q)
u.globalState.f.a.Y(0,new H.b6(t,r,"start isolate"))}else r.$0()},
mo:function(a,b){var t=new H.h1(!0,!1,null)
t.di(a,b)
return t},
mD:function(a){return new H.b4(!0,[]).a0(new H.an(!1,P.bX(null,P.p)).M(a))},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a,b){this.a=a
this.b=b},
hW:function hW(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
b5:function b5(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
hR:function hR(a,b){this.a=a
this.b=b},
hz:function hz(a,b){this.a=a
this.b=b},
hA:function hA(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(){},
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
hs:function hs(){},
bh:function bh(a,b){this.b=a
this.a=b},
hX:function hX(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b,c){this.b=a
this.c=b
this.a=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
h1:function h1(a,b,c){this.a=a
this.b=b
this.c=c},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
as:function as(a){this.a=a},
an:function an(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
mY:function(a){return u.types[a]},
n6:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.w(a).$isr},
i:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.aC(a)
if(typeof t!=="string")throw H.f(H.X(a))
return t},
mi:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fu(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aZ:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dh:function(a){var t,s,r,q,p,o,n,m
t=J.w(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.w(a).$isb1){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aQ(q,0)===36)q=C.i.cX(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dH(H.ix(a),0,null),u.mangledGlobalNames)},
fq:function(a){return"Instance of '"+H.dh(a)+"'"},
U:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mg:function(a){return a.b?H.U(a).getUTCFullYear()+0:H.U(a).getFullYear()+0},
me:function(a){return a.b?H.U(a).getUTCMonth()+1:H.U(a).getMonth()+1},
ma:function(a){return a.b?H.U(a).getUTCDate()+0:H.U(a).getDate()+0},
mb:function(a){return a.b?H.U(a).getUTCHours()+0:H.U(a).getHours()+0},
md:function(a){return a.b?H.U(a).getUTCMinutes()+0:H.U(a).getMinutes()+0},
mf:function(a){return a.b?H.U(a).getUTCSeconds()+0:H.U(a).getSeconds()+0},
mc:function(a){return a.b?H.U(a).getUTCMilliseconds()+0:H.U(a).getMilliseconds()+0},
ka:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.f(H.X(a))
return a[b]},
S:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ah(!0,b,"index",null)
t=J.dL(a)
if(b<0||C.b.cH(b,t))return P.C(b,a,"index",null,t)
return P.fr(b,"index",null)},
X:function(a){return new P.ah(!0,a,null,null)},
f:function(a){var t
if(a==null)a=new P.dg()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kX})
t.name=""}else t.toString=H.kX
return t},
kX:function(){return J.aC(this.dartException)},
I:function(a){throw H.f(a)},
G:function(a){throw H.f(new P.a4(a))},
aw:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.h8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
km:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jb:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eJ(a,s,t?null:b.receiver)},
T:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aZ(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jb(H.i(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.i(s)+" (Error "+q+")"
return t.$1(new H.df(p,null))}}if(a instanceof TypeError){o=$.$get$kg()
n=$.$get$kh()
m=$.$get$ki()
l=$.$get$kj()
k=$.$get$kn()
j=$.$get$ko()
i=$.$get$kl()
$.$get$kk()
h=$.$get$kq()
g=$.$get$kp()
f=o.S(s)
if(f!=null)return t.$1(H.jb(s,f))
else{f=n.S(s)
if(f!=null){f.method="call"
return t.$1(H.jb(s,f))}else{f=m.S(s)
if(f==null){f=l.S(s)
if(f==null){f=k.S(s)
if(f==null){f=j.S(s)
if(f==null){f=i.S(s)
if(f==null){f=l.S(s)
if(f==null){f=h.S(s)
if(f==null){f=g.S(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.df(s,f==null?null:f.method))}}return t.$1(new H.hb(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dq()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ah(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dq()
return a},
aM:function(a){var t
if(a==null)return new H.dD(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dD(a,null)},
na:function(a){if(a==null||typeof a!='object')return J.ar(a)
else return H.aZ(a)},
mW:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
n5:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dF(b,new H.iE(a))
case 1:return H.dF(b,new H.iF(a,d))
case 2:return H.dF(b,new H.iG(a,d,e))
case 3:return H.dF(b,new H.iH(a,d,e,f))
case 4:return H.dF(b,new H.iI(a,d,e,f,g))}throw H.f(P.ch("Unsupported number of arguments for wrapped closure"))},
c2:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.n5)
a.$identity=t
return t},
lL:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.w(c).$isb){t.$reflectionInfo=c
r=H.mi(t).r}else r=c
q=d?Object.create(new H.fK().constructor.prototype):Object.create(new H.bo(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jQ(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mY,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jN:H.j4
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.f("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jQ(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lI:function(a,b,c,d){var t=H.j4
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jQ:function(a,b,c){var t,s,r,q
if(c)return H.lK(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lI(s,b==null?r!=null:b!==r,t,b)
return q},
lJ:function(a,b,c,d){var t,s
t=H.j4
s=H.jN
switch(b?-1:a){case 0:throw H.f(new H.fA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lK:function(a,b){var t,s,r,q
H.lH()
t=$.jM
if(t==null){t=H.jL("receiver")
$.jM=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lJ(r,b==null?q!=null:b!==q,s,b)
return t},
jn:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.w(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lL(a,b,t,!!d,e,f)},
j4:function(a){return a.a},
jN:function(a){return a.c},
lH:function(){var t=$.jO
if(t==null){t=H.jL("self")
$.jO=t}return t},
jL:function(a){var t,s,r,q,p
t=new H.bo("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
nw:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.f(H.ax(a,"String"))},
a1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ax(a,"double"))},
nv:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.f(H.ax(a,"num"))},
mP:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.f(H.ax(a,"bool"))},
n4:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.f(H.ax(a,"int"))},
nc:function(a,b){throw H.f(H.ax(a,b.substring(3)))},
nb:function(a,b){var t=J.ag(b)
throw H.f(H.jP(H.dh(a),t.bk(b,3,t.gk(b))))},
jq:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.nc(a,b)},
aB:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else t=!0
if(t)return a
H.nb(a,b)},
nu:function(a){if(a==null)return a
if(!!J.w(a).$isb)return a
throw H.f(H.ax(a,"List"))},
kK:function(a){var t=J.w(a)
return"$S" in t?t.$S():null},
bk:function(a,b){var t
if(a==null)return!1
t=H.kK(a)
return t==null?!1:H.kR(t,b)},
ns:function(a,b){var t,s
if(a==null)return a
if($.jk)return a
$.jk=!0
try{if(H.bk(a,b))return a
t=H.aO(b,null)
s=H.ax(a,t)
throw H.f(s)}finally{$.jk=!1}},
ax:function(a,b){return new H.ha("type '"+H.dh(a)+"' is not a subtype of type '"+b+"'")},
jP:function(a,b){return new H.dU("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
az:function(a){if(!0===a)return!1
if(!!J.w(a).$isj7)a=a.$0()
if(typeof a==="boolean")return!a
throw H.f(H.ax(a,"bool"))},
aL:function(a){throw H.f(new H.hm(a))},
d:function(a){if(H.az(a))throw H.f(new P.c8(null))},
ni:function(a){throw H.f(new P.dY(a))},
iN:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kP:function(a){return u.getIsolateTag(a)},
P:function(a){return new H.aJ(a,null)},
F:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
ix:function(a){if(a==null)return
return a.$ti},
kQ:function(a,b){return H.ju(a["$as"+H.i(b)],H.ix(a))},
ao:function(a,b,c){var t,s
t=H.kQ(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aN:function(a,b){var t,s
t=H.ix(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aO:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dH(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.i(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aO(t,b)
return H.mE(a,b)}return"unknown-reified-type"},
mE:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aO(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aO(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mV(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aO(l[j],b)+(" "+H.i(j))}q+="}"}return"("+q+") => "+t},
dH:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bO("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aO(o,c)}return p?"":"<"+s.l(0)+">"},
iy:function(a){var t,s
if(a instanceof H.b9){t=H.kK(a)
if(t!=null)return H.aO(t,null)}s=J.w(a).constructor.name
if(a==null)return s
return s+H.dH(a.$ti,0,null)},
ju:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jr(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jr(a,null,b)
return b},
iq:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.ix(a)
s=J.w(a)
if(s[b]==null)return!1
return H.kH(H.ju(s[d],t),c)},
dI:function(a,b,c,d){if(a==null)return a
if(H.iq(a,b,c,d))return a
throw H.f(H.jP(H.dh(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dH(c,0,null),u.mangledGlobalNames)))},
np:function(a,b,c,d){if(a==null)return a
if(H.iq(a,b,c,d))return a
throw H.f(H.ax(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dH(c,0,null),u.mangledGlobalNames)))},
kH:function(a,b){var t,s,r,q,p
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
if(!H.a2(r,b[p]))return!1}return!0},
nq:function(a,b,c){return H.jr(a,b,H.kQ(b,c))},
a2:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aY")return!0
if('func' in b)return H.kR(a,b)
if('func' in a)return b.name==="j7"||b.name==="q"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aO(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kH(H.ju(o,t),r)},
kG:function(a,b,c){var t,s,r,q,p,o,n
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
if(!(H.a2(o,n)||H.a2(n,o)))return!1}return!0},
mL:function(a,b){var t,s,r,q,p,o
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
if(!(H.a2(p,o)||H.a2(o,p)))return!1}return!0},
kR:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a2(t,s)||H.a2(s,t)))return!1}r=a.args
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
if(n===m){if(!H.kG(r,q,!1))return!1
if(!H.kG(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
g=r[h]
H.d(i)
f=q[h]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a2(g,f)||H.a2(f,g)))return!1}}return H.mL(a.named,b.named)},
jr:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nx:function(a){var t=$.jo
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nt:function(a){return H.aZ(a)},
nr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n7:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.q))
t=$.jo.$1(a)
s=$.iv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iD[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kF.$2(a,t)
if(t!=null){s=$.iv[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iD[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.js(r)
$.iv[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iD[t]=r
return r}if(p==="-"){o=H.js(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kT(a,r)
if(p==="*")throw H.f(new P.dw(t))
if(u.leafTags[t]===true){o=H.js(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kT(a,r)},
kT:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iL(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
js:function(a){return J.iL(a,!1,null,!!a.$isr)},
n9:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iL(t,!1,null,!!t.$isr)
else return J.iL(t,c,null,null)},
n2:function(){if(!0===$.jp)return
$.jp=!0
H.n3()},
n3:function(){var t,s,r,q,p,o,n,m
$.iv=Object.create(null)
$.iD=Object.create(null)
H.n1()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kU.$1(p)
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
t=H.bj(C.L,H.bj(C.Q,H.bj(C.x,H.bj(C.x,H.bj(C.P,H.bj(C.M,H.bj(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jo=new H.iA(p)
$.kF=new H.iB(o)
$.kU=new H.iC(n)},
bj:function(a,b){return a(b)||b},
nh:function(a,b,c){var t=a.indexOf(b,c)
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
h8:function h8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
df:function df(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a){this.a=a},
iV:function iV(a){this.a=a},
dD:function dD(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iH:function iH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iI:function iI(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b9:function b9(){},
fX:function fX(){},
fK:function fK(){},
bo:function bo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ha:function ha(a){this.a=a},
dU:function dU(a){this.a=a},
fA:function fA(a){this.a=a},
hm:function hm(a){this.a=a},
aJ:function aJ(a,b){this.a=a
this.b=b},
aj:function aj(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eI:function eI(a){this.a=a},
eL:function eL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eM:function eM(a,b){this.a=a
this.$ti=b},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iA:function iA(a){this.a=a},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
e:function(a){return a},
il:function(a){var t,s,r
if(!!J.w(a).$iso)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bF:function bF(){},
be:function be(){},
f_:function f_(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
d7:function d7(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
db:function db(){},
f6:function f6(){},
bG:function bG(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
mV:function(a){var t=H.F(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d3.prototype
return J.d2.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.eH.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.q)return a
return J.iw(a)},
iL:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iw:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jp==null){H.n2()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.f(new P.dw("Return interceptor for "+H.i(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$ja()]
if(p!=null)return p
p=H.n7(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$ja(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ag:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.q)return a
return J.iw(a)},
c4:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.q)return a
return J.iw(a)},
kN:function(a){if(typeof a=="number")return J.bc.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b1.prototype
return a},
mX:function(a){if(typeof a=="number")return J.bc.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b1.prototype
return a},
kO:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b1.prototype
return a},
n:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.q)return a
return J.iw(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).A(a,b)},
aq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kN(a).av(a,b)},
l0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kN(a).aL(a,b)},
bl:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n6(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ag(a).h(a,b)},
l1:function(a,b,c,d){return J.n(a).du(a,b,c,d)},
jv:function(a,b){return J.kO(a).aQ(a,b)},
bm:function(a,b){return J.n(a).dL(a,b)},
l2:function(a,b,c){return J.n(a).dM(a,b,c)},
jw:function(a,b){return J.n(a).bQ(a,b)},
iW:function(a,b){return J.n(a).V(a,b)},
jx:function(a,b,c){return J.n(a).bT(a,b,c)},
l3:function(a,b){return J.n(a).dZ(a,b)},
dJ:function(a,b,c){return J.n(a).bU(a,b,c)},
l4:function(a,b,c){return J.n(a).bV(a,b,c)},
jy:function(a,b,c){return J.n(a).bW(a,b,c)},
dK:function(a,b){return J.n(a).e1(a,b)},
l5:function(a,b){return J.n(a).bX(a,b)},
l6:function(a,b,c){return J.n(a).bY(a,b,c)},
jz:function(a,b,c,d){return J.n(a).bZ(a,b,c,d)},
l7:function(a,b){return J.c4(a).c_(a,b)},
l8:function(a,b,c,d,e){return J.n(a).c0(a,b,c,d,e)},
l9:function(a,b){return J.mX(a).W(a,b)},
iX:function(a,b,c){return J.ag(a).e5(a,b,c)},
iY:function(a){return J.n(a).c2(a)},
la:function(a){return J.n(a).c3(a)},
lb:function(a){return J.n(a).eb(a)},
lc:function(a,b){return J.n(a).c6(a,b)},
iZ:function(a,b){return J.n(a).c7(a,b)},
ld:function(a,b,c,d){return J.n(a).c8(a,b,c,d)},
le:function(a,b,c,d,e){return J.n(a).ei(a,b,c,d,e)},
lf:function(a,b,c,d,e){return J.n(a).c9(a,b,c,d,e)},
lg:function(a,b,c,d,e,f){return J.n(a).ej(a,b,c,d,e,f)},
lh:function(a,b){return J.c4(a).v(a,b)},
c7:function(a,b){return J.n(a).ca(a,b)},
li:function(a,b){return J.n(a).cb(a,b)},
lj:function(a){return J.n(a).ek(a)},
lk:function(a,b){return J.c4(a).aE(a,b)},
ll:function(a){return J.n(a).gdY(a)},
ar:function(a){return J.w(a).gw(a)},
bn:function(a){return J.c4(a).gB(a)},
dL:function(a){return J.ag(a).gk(a)},
lm:function(a){return J.n(a).gb6(a)},
ln:function(a){return J.w(a).gD(a)},
lo:function(a){return J.n(a).geJ(a)},
lp:function(a){return J.n(a).gaI(a)},
j_:function(a){return J.n(a).gn(a)},
j0:function(a){return J.n(a).gp(a)},
jA:function(a){return J.n(a).gN(a)},
j1:function(a,b){return J.n(a).ae(a,b)},
lq:function(a){return J.n(a).aK(a)},
lr:function(a,b){return J.n(a).ba(a,b)},
ls:function(a,b,c){return J.n(a).bb(a,b,c)},
jB:function(a,b,c){return J.n(a).be(a,b,c)},
lt:function(a,b){return J.n(a).cd(a,b)},
lu:function(a,b){return J.c4(a).cf(a,b)},
lv:function(a){return J.c4(a).eC(a)},
lw:function(a,b){return J.n(a).J(a,b)},
lx:function(a,b,c,d){return J.n(a).bj(a,b,c,d)},
ly:function(a){return J.kO(a).eM(a)},
aC:function(a){return J.w(a).l(a)},
lz:function(a,b,c,d){return J.n(a).eO(a,b,c,d)},
lA:function(a,b,c){return J.n(a).cp(a,b,c)},
lB:function(a,b,c){return J.n(a).cq(a,b,c)},
j2:function(a,b,c){return J.n(a).cr(a,b,c)},
lC:function(a,b,c){return J.n(a).cs(a,b,c)},
jC:function(a,b,c){return J.n(a).ct(a,b,c)},
jD:function(a,b,c){return J.n(a).cu(a,b,c)},
jE:function(a,b,c){return J.n(a).cv(a,b,c)},
jF:function(a,b,c,d){return J.n(a).cw(a,b,c,d)},
jG:function(a,b,c,d){return J.n(a).cz(a,b,c,d)},
lD:function(a,b){return J.n(a).cB(a,b)},
lE:function(a,b,c){return J.n(a).eP(a,b,c)},
jH:function(a,b,c,d,e,f,g){return J.n(a).cD(a,b,c,d,e,f,g)},
lF:function(a,b,c,d,e){return J.n(a).cE(a,b,c,d,e)},
a:function a(){},
eG:function eG(){},
eH:function eH(){},
bC:function bC(){},
fk:function fk(){},
b1:function b1(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
j8:function j8(a){this.$ti=a},
dP:function dP(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bc:function bc(){},
d3:function d3(){},
d2:function d2(){},
aU:function aU(){}},P={
ms:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mM()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c2(new P.ho(t),1)).observe(s,{childList:true})
return new P.hn(t,s,r)}else if(self.setImmediate!=null)return P.mN()
return P.mO()},
mt:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c2(new P.hp(a),0))},
mu:function(a){++u.globalState.f.b
self.setImmediate(H.c2(new P.hq(a),0))},
mv:function(a){P.jf(C.v,a)},
mH:function(a,b){if(H.bk(a,{func:1,args:[P.aY,P.aY]})){b.toString
return a}else{b.toString
return a}},
mx:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.ay))
H.d(b.a===0)
b.a=1
try{a.co(new P.hG(b),new P.hH(b))}catch(r){t=H.T(r)
s=H.aM(r)
P.nd(new P.hI(b,t,s))}},
kw:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.al(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bT(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bJ(q)}},
bT:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.im(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bT(t.a,b)}s=t.a
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
P.im(null,null,p,o,s)
return}s=$.E
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.E
H.d(l==null?s!=null:l!==s)
j=$.E
$.E=l
i=j}else i=null
s=b.c
if(s===8)new P.hM(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hL(r,b,m).$0()}else if((s&2)!==0)new P.hK(t,r,b).$0()
if(i!=null){H.d(!0)
$.E=i}s=r.b
if(!!J.w(s).$isex){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.al(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kw(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.al(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
mG:function(){var t,s
for(;t=$.bi,t!=null;){$.c0=null
s=t.b
$.bi=s
if(s==null)$.c_=null
t.a.$0()}},
mK:function(){$.jl=!0
try{P.mG()}finally{$.c0=null
$.jl=!1
if($.bi!=null)$.$get$jh().$1(P.kI())}},
kD:function(a){var t=new P.dy(a,null)
if($.bi==null){$.c_=t
$.bi=t
if(!$.jl)$.$get$jh().$1(P.kI())}else{$.c_.b=t
$.c_=t}},
mJ:function(a){var t,s,r
t=$.bi
if(t==null){P.kD(a)
$.c0=$.c_
return}s=new P.dy(a,null)
r=$.c0
if(r==null){s.b=t
$.c0=s
$.bi=s}else{s.b=r.b
r.b=s
$.c0=s
if(s.b==null)$.c_=s}},
nd:function(a){var t=$.E
if(C.f===t){P.ip(null,null,C.f,a)
return}t.toString
P.ip(null,null,t,t.b1(a))},
mp:function(a,b){var t=$.E
if(t===C.f){t.toString
return P.jf(a,b)}return P.jf(a,t.b1(b))},
jf:function(a,b){var t=C.b.K(a.a,1000)
return H.mo(t<0?0:t,b)},
jg:function(a){var t,s
H.d(a!=null)
t=$.E
H.d(a==null?t!=null:a!==t)
s=$.E
$.E=a
return s},
im:function(a,b,c,d,e){var t={}
t.a=d
P.mJ(new P.io(t,e))},
kB:function(a,b,c,d){var t,s
if($.E===c)return d.$0()
t=P.jg(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.E=s}},
kC:function(a,b,c,d,e){var t,s
if($.E===c)return d.$1(e)
t=P.jg(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.E=s}},
mI:function(a,b,c,d,e,f){var t,s
if($.E===c)return d.$2(e,f)
t=P.jg(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.E=s}},
ip:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.b1(d):c.e_(d)
P.kD(d)},
ho:function ho(a){this.a=a},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
hp:function hp(a){this.a=a},
hq:function hq(a){this.a=a},
hu:function hu(){},
ic:function ic(a,b){this.a=a
this.$ti=b},
dA:function dA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
ay:function ay(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hF:function hF(a,b){this.a=a
this.b=b},
hJ:function hJ(a,b){this.a=a
this.b=b},
hG:function hG(a){this.a=a},
hH:function hH(a){this.a=a},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hN:function hN(a){this.a=a},
hL:function hL(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a,b,c){this.a=a
this.b=b
this.c=c},
dy:function dy(a,b){this.a=a
this.b=b},
fO:function fO(){},
fQ:function fQ(a){this.a=a},
fR:function fR(a,b){this.a=a
this.b=b},
fP:function fP(){},
b8:function b8(a,b){this.a=a
this.b=b},
ik:function ik(){},
io:function io(a,b){this.a=a
this.b=b},
hZ:function hZ(){},
i0:function i0(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
i1:function i1(a,b){this.a=a
this.b=b},
k7:function(a,b){return new H.aj(0,null,null,null,null,null,0,[a,b])},
M:function(){return new H.aj(0,null,null,null,null,null,0,[null,null])},
aX:function(a){return H.mW(a,new H.aj(0,null,null,null,null,null,0,[null,null]))},
bX:function(a,b){return new P.dB(0,null,null,null,null,null,0,[a,b])},
mB:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m4:function(a,b,c){var t,s
if(P.jm(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c1()
C.a.j(s,a)
try{P.mF(a,t)}finally{H.d(C.a.gaH(s)===a)
s.pop()}s=P.kf(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eE:function(a,b,c){var t,s,r
if(P.jm(a))return b+"..."+c
t=new P.bO(b)
s=$.$get$c1()
C.a.j(s,a)
try{r=t
r.a=P.kf(r.gab(),a,", ")}finally{H.d(C.a.gaH(s)===a)
s.pop()}s=t
s.a=s.gab()+c
s=t.gab()
return s.charCodeAt(0)==0?s:s},
jm:function(a){var t,s
for(t=0;s=$.$get$c1(),t<s.length;++t)if(a===s[t])return!0
return!1},
mF:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gB(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.t())return
q=H.i(t.gu())
C.a.j(b,q)
s+=q.length+2;++r}if(!t.t()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gu();++r
if(!t.t()){if(r<=4){C.a.j(b,H.i(n))
return}p=H.i(n)
o=b.pop()
s+=p.length+2}else{m=t.gu();++r
H.d(r<100)
for(;t.t();n=m,m=l){l=t.gu();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.j(b,"...")
return}}o=H.i(n)
p=H.i(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.j(b,k)
C.a.j(b,o)
C.a.j(b,p)},
ak:function(a,b,c,d){return new P.hS(0,null,null,null,null,null,0,[d])},
jc:function(a,b){var t,s
t=P.ak(null,null,null,b)
for(s=J.bn(a);s.t();)t.j(0,s.gu())
return t},
m7:function(a){var t,s,r
t={}
if(P.jm(a))return"{...}"
s=new P.bO("")
try{C.a.j($.$get$c1(),a)
r=s
r.a=r.gab()+"{"
t.a=!0
a.aE(0,new P.eR(t,s))
t=s
t.a=t.gab()+"}"}finally{t=$.$get$c1()
H.d(C.a.gaH(t)===a)
t.pop()}t=s.gab()
return t.charCodeAt(0)==0?t:t},
jd:function(a,b){var t=new P.eO(null,0,0,0,[b])
t.dd(a,b)
return t},
dB:function dB(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hS:function hS(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hT:function hT(a,b,c){this.a=a
this.b=b
this.c=c},
bW:function bW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hQ:function hQ(){},
d4:function d4(){},
x:function x(){},
eR:function eR(a,b){this.a=a
this.b=b},
eO:function eO(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hU:function hU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fD:function fD(){},
fC:function fC(){},
bL:function bL(){},
kf:function(a,b,c){var t=J.bn(b)
if(!t.t())return a
if(c.length===0){do a+=H.i(t.gu())
while(t.t())}else{a+=H.i(t.gu())
for(;t.t();)a=a+c+H.i(t.gu())}return a},
lM:function(a,b){return J.l9(a,b)},
lP:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.i(t)
if(t>=10)return s+"00"+H.i(t)
return s+"000"+H.i(t)},
lQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cb:function(a){if(a>=10)return""+a
return"0"+a},
j6:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aC(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lU(a)},
lU:function(a){var t=J.w(a)
if(!!t.$isb9)return t.l(a)
return H.fq(a)},
jI:function(a){return new P.ah(!1,null,null,a)},
jJ:function(a,b,c){return new P.ah(!0,a,b,c)},
lG:function(a){return new P.ah(!1,null,a,"Must not be null")},
fr:function(a,b,c){return new P.dj(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.dj(b,c,!0,a,d,"Invalid value")},
kd:function(a,b,c,d,e,f){if(0>a||a>c)throw H.f(P.b_(a,0,c,"start",f))
if(a>b||b>c)throw H.f(P.b_(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dL(b)
return new P.eB(b,t,!0,a,c,"Index out of range")},
ch:function(a){return new P.hE(a)},
k8:function(a,b,c){var t,s
t=H.F([],[c])
for(s=J.bn(a);s.t();)C.a.j(t,s.gu())
if(b)return t
t.fixed$length=Array
return t},
ap:function(a){H.iM(H.i(a))},
aA:function aA(){},
L:function L(){},
bp:function bp(a,b){this.a=a
this.b=b},
Q:function Q(){},
aS:function aS(a){this.a=a},
e4:function e4(){},
e5:function e5(){},
bb:function bb(){},
c8:function c8(a){this.a=a},
dg:function dg(){},
ah:function ah(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dj:function dj(a,b,c,d,e,f){var _=this
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
v:function v(a){this.a=a},
dw:function dw(a){this.a=a},
aI:function aI(a){this.a=a},
a4:function a4(a){this.a=a},
dq:function dq(){},
dY:function dY(a){this.a=a},
hE:function hE(a){this.a=a},
e7:function e7(a,b,c){this.a=a
this.b=b
this.$ti=c},
p:function p(){},
Z:function Z(){},
d1:function d1(){},
b:function b(){},
aG:function aG(){},
aY:function aY(){},
Y:function Y(){},
q:function q(){},
bN:function bN(){},
u:function u(){},
bO:function bO(a){this.a=a},
it:function(a){var t,s,r,q,p
if(a==null)return
t=P.M()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.G)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mS:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lk(a,new P.is(t))
return t},
jX:function(){var t=$.jW
if(t==null){t=J.iX(window.navigator.userAgent,"Opera",0)
$.jW=t}return t},
lR:function(){var t,s
t=$.jT
if(t!=null)return t
s=$.jU
if(s==null){s=J.iX(window.navigator.userAgent,"Firefox",0)
$.jU=s}if(s)t="-moz-"
else{s=$.jV
if(s==null){s=!P.jX()&&J.iX(window.navigator.userAgent,"Trident/",0)
$.jV=s}if(s)t="-ms-"
else t=P.jX()?"-o-":"-webkit-"}$.jT=t
return t},
is:function is(a){this.a=a},
ng:function(a){return Math.sqrt(a)},
hY:function hY(){},
N:function N(){},
dM:function dM(){},
aP:function aP(){},
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
ep:function ep(){},
es:function es(){},
eu:function eu(){},
ai:function ai(){},
aF:function aF(){},
eA:function eA(){},
at:function at(){},
eK:function eK(){},
eS:function eS(){},
eT:function eT(){},
au:function au(){},
fa:function fa(){},
fh:function fh(){},
fm:function fm(){},
fn:function fn(){},
fs:function fs(){},
ft:function ft(){},
bM:function bM(){},
fS:function fS(){},
K:function K(){},
fT:function fT(){},
fU:function fU(){},
ds:function ds(){},
fY:function fY(){},
bQ:function bQ(){},
av:function av(){},
h6:function h6(){},
hd:function hd(){},
hf:function hf(){},
hg:function hg(){},
bU:function bU(){},
i2:function i2(){},
i3:function i3(){},
i4:function i4(){},
cD:function cD(){},
cp:function cp(){},
cu:function cu(){},
cz:function cz(){},
cN:function cN(){},
cO:function cO(){},
cQ:function cQ(){},
cW:function cW(){},
dQ:function dQ(){},
fx:function fx(){},
fy:function fy(){},
ih:function ih(){},
fJ:function fJ(){},
cE:function cE(){},
cR:function cR(){}},W={
mU:function(){return document},
lS:function(a,b,c){var t,s
t=document.body
s=(t&&C.o).P(t,a,b,c)
s.toString
t=new H.dx(new W.V(s),new W.ir(),[W.t])
return t.ga8(t)},
lT:function(a){return"wheel"},
br:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lo(a)
if(typeof s==="string")t=a.tagName}catch(r){H.T(r)}return t},
mw:function(a,b){return document.createElement(a)},
b7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kz:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
am:function(a,b,c,d,e){var t=c==null?null:W.kE(new W.hD(c))
t=new W.hC(0,a,b,t,!1,[e])
t.dn(a,b,c,!1,e)
return t},
kx:function(a){var t,s
t=document.createElement("a")
s=new W.i5(t,window.location)
s=new W.bV(s)
s.dq(a)
return s},
mz:function(a,b,c,d){return!0},
mA:function(a,b,c,d){var t,s,r,q,p
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
kA:function(){var t=P.u
t=new W.id(P.jc(C.q,t),P.ak(null,null,null,t),P.ak(null,null,null,t),P.ak(null,null,null,t),null)
t.ds(null,new H.bD(C.q,new W.ie(),[H.aN(C.q,0),null]),["TEMPLATE"],null)
return t},
kE:function(a){var t=$.E
if(t===C.f)return a
return t.e0(a)},
l:function l(){},
dN:function dN(){},
dO:function dO(){},
a3:function a3(){},
dR:function dR(){},
c9:function c9(){},
aQ:function aQ(){},
ca:function ca(){},
dT:function dT(){},
aR:function aR(){},
dW:function dW(){},
A:function A(){},
ba:function ba(){},
dX:function dX(){},
dZ:function dZ(){},
e_:function e_(){},
cc:function cc(){},
bq:function bq(){},
cd:function cd(){},
e0:function e0(){},
ce:function ce(){},
e1:function e1(){},
cf:function cf(){},
cg:function cg(){},
e2:function e2(){},
e3:function e3(){},
a5:function a5(){},
ir:function ir(){},
k:function k(){},
j:function j(){},
a6:function a6(){},
eq:function eq(){},
er:function er(){},
ev:function ev(){},
a7:function a7(){},
cl:function cl(){},
ey:function ey(){},
bz:function bz(){},
cm:function cm(){},
ez:function ez(){},
bA:function bA(){},
bB:function bB(){},
aW:function aW(){},
eP:function eP(){},
eV:function eV(){},
eX:function eX(){},
bE:function bE(){},
a9:function a9(){},
eY:function eY(){},
R:function R(){},
f7:function f7(){},
V:function V(a){this.a=a},
t:function t(){},
dc:function dc(){},
bK:function bK(){},
fg:function fg(){},
fj:function fj(){},
aa:function aa(){},
fl:function fl(){},
fo:function fo(){},
fp:function fp(){},
di:function di(){},
fz:function fz(){},
dl:function dl(){},
fB:function fB(){},
fF:function fF(){},
ab:function ab(){},
fG:function fG(){},
ac:function ac(){},
fI:function fI(){},
ad:function ad(){},
fN:function fN(){},
a_:function a_(){},
al:function al(){},
dr:function dr(){},
fV:function fV(){},
fW:function fW(){},
bP:function bP(){},
ae:function ae(){},
a0:function a0(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
af:function af(){},
b0:function b0(){},
h4:function h4(){},
h5:function h5(){},
bg:function bg(){},
h7:function h7(){},
du:function du(){},
aK:function aK(){},
hc:function hc(){},
he:function he(){},
hh:function hh(){},
hi:function hi(){},
b2:function b2(){},
bS:function bS(){},
hk:function hk(a){this.a=a},
hl:function hl(){},
b3:function b3(){},
ht:function ht(){},
dz:function dz(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hO:function hO(){},
hP:function hP(){},
dC:function dC(){},
i6:function i6(){},
i9:function i9(){},
ia:function ia(){},
ii:function ii(){},
ij:function ij(){},
hr:function hr(){},
hy:function hy(a){this.a=a},
hB:function hB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ji:function ji(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hC:function hC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hD:function hD(a){this.a=a},
bV:function bV(a){this.a=a},
B:function B(){},
de:function de(a){this.a=a},
f9:function f9(a){this.a=a},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(){},
i7:function i7(){},
i8:function i8(){},
id:function id(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ie:function ie(){},
ib:function ib(){},
ck:function ck(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dd:function dd(){},
i5:function i5(a,b){this.a=a
this.b=b},
dE:function dE(a){this.a=a},
ig:function ig(a){this.a=a},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
cn:function cn(){},
cH:function cH(){},
ct:function ct(){},
cq:function cq(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cF:function cF(){},
cG:function cG(){},
co:function co(){},
cr:function cr(){},
cs:function cs(){},
cv:function cv(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cU:function cU(){},
cV:function cV(){},
cS:function cS(){},
cT:function cT(){},
cY:function cY(){},
cZ:function cZ(){},
d_:function d_(){},
d0:function d0(){},
cL:function cL(){},
cM:function cM(){},
cP:function cP(){},
cX:function cX(){}},B={
ne:function(a){var t,s
t=document
s=W.aW
W.am(t,"keydown",new B.iO(),!1,s)
W.am(t,"keyup",new B.iP(),!1,s)
if(!$.nf)W.am(t,"mousemove",new B.iQ(),!1,W.R)
s=W.R
W.am(t,"mousedown",new B.iR(),!1,s)
W.am(t,"mouseup",new B.iS(),!1,s)},
m8:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.e(3))
s=$.$get$iu()
r=$.$get$c3()
q=new T.H(new Float32Array(H.e(16)))
q.F()
q=new B.fb(a,b,c,0,new T.h(t),-0.02,s,r,q,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"camera:orbit",!1,!0)
q.de(a,b,c,d)
return q},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
iR:function iR(){},
iS:function iS(){},
fb:function fb(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fc:function fc(a){this.a=a},
fd:function fd(a){this.a=a},
fe:function fe(){},
ff:function ff(a){this.a=a},
lN:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.h(new Float32Array(H.e(3)))
r.m(t,s,d8)
q=new T.h(new Float32Array(H.e(3)))
q.m(d6,s,d8)
p=new T.h(new Float32Array(H.e(3)))
p.m(d6,d7,d8)
o=new T.h(new Float32Array(H.e(3)))
o.m(t,d7,d8)
n=-d8
m=new T.h(new Float32Array(H.e(3)))
m.m(t,s,n)
l=new T.h(new Float32Array(H.e(3)))
l.m(t,d7,n)
k=new T.h(new Float32Array(H.e(3)))
k.m(d6,d7,n)
j=new T.h(new Float32Array(H.e(3)))
j.m(d6,s,n)
i=new T.h(new Float32Array(H.e(3)))
i.m(t,d7,n)
h=new T.h(new Float32Array(H.e(3)))
h.m(t,d7,d8)
g=new T.h(new Float32Array(H.e(3)))
g.m(d6,d7,d8)
f=new T.h(new Float32Array(H.e(3)))
f.m(d6,d7,n)
e=new T.h(new Float32Array(H.e(3)))
e.m(d6,s,d8)
d=new T.h(new Float32Array(H.e(3)))
d.m(t,s,d8)
c=new T.h(new Float32Array(H.e(3)))
c.m(t,s,n)
b=new T.h(new Float32Array(H.e(3)))
b.m(d6,s,n)
a=new T.h(new Float32Array(H.e(3)))
a.m(d6,s,n)
a0=new T.h(new Float32Array(H.e(3)))
a0.m(d6,d7,n)
a1=new T.h(new Float32Array(H.e(3)))
a1.m(d6,d7,d8)
a2=new T.h(new Float32Array(H.e(3)))
a2.m(d6,s,d8)
a3=new T.h(new Float32Array(H.e(3)))
a3.m(t,s,n)
a4=new T.h(new Float32Array(H.e(3)))
a4.m(t,s,d8)
s=new T.h(new Float32Array(H.e(3)))
s.m(t,d7,d8)
a5=new T.h(new Float32Array(H.e(3)))
a5.m(t,d7,n)
n=new Float32Array(H.e(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.e(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.e(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.e(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.e(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.e(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.e(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.e(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.e(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.e(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.e(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.e(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.e(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.e(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.e(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.e(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.e(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.e(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.e(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.e(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.e(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.e(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.e(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.e(2))
c7[0]=d3
c7[1]=d4
c8=new G.aE(!1,[],[],[],P.M())
c8.O("aTexUV")
c8.O("aNormal")
c8.ax(6)
c8.a4([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.U("aTexUV",[new T.m(n),new T.m(t),new T.m(a6),new T.m(a7),new T.m(a8),new T.m(a9),new T.m(b0),new T.m(b1),new T.m(b2),new T.m(b3),new T.m(b4),new T.m(b5),new T.m(b6),new T.m(b7),new T.m(b8),new T.m(b9),new T.m(c0),new T.m(c1),new T.m(c2),new T.m(c3),new T.m(c4),new T.m(c5),new T.m(c6),new T.m(c7)])
for(c9=0;t=$.$get$kv(),c9<6;++c9){d0=t[c9]
c8.aP("aNormal",[d0,d0,d0,d0])}return c8},
lO:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=c/2
s=[]
r=[]
for(q=-t,p=0;p<d;++p){o=p/d*3.141592653589793*2
n=Math.sin(o)
m=Math.cos(o)
l=new Float32Array(3)
l[0]=a*n
l[1]=t
l[2]=a*m
C.a.j(s,new T.h(l))
l=new Float32Array(3)
l[0]=b*n
l[1]=q
l[2]=b*m
C.a.j(r,new T.h(l))}C.a.j(s,s[0])
C.a.j(r,r[0])
n=d+1
H.d(s.length===n)
H.d(r.length===n)
n=new Float32Array(H.e(2))
k=new T.m(n)
n[0]=0
n[1]=0
j=new T.h(new Float32Array(H.e(3)))
j.m(0,t,0)
i=new T.h(new Float32Array(H.e(3)))
i.m(0,q,0)
h=new G.aE(!1,[],[],[],P.M())
h.O("aTexUV")
h.bl(2*d)
for(p=0;p<d;p=g){g=p+1
h.a4([j,s[p],s[g]])
h.a4([i,r[g],r[p]])
h.U("aTexUV",[k,k,k])
h.U("aTexUV",[k,k,k])}h.ax(d)
for(p=0;p<d;p=g){g=p+1
h.a4([s[g],s[p],r[p],r[g]])
h.U("aTexUV",[k,k,k,k])}return h},
lY:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.L(t,$.$get$k1())
C.a.L(s,$.$get$k2())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.G)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.h(new Float32Array(3))
k.q(l)
l=n.b
k.j(0,s[l])
k.a2(0,0.5)
k.C(0)
j=s[l]
i=new T.h(new Float32Array(3))
i.q(j)
j=n.c
i.j(0,s[j])
i.a2(0,0.5)
i.C(0)
h=s[j]
g=new T.h(new Float32Array(3))
g.q(h)
g.j(0,s[m])
g.a2(0,0.5)
g.C(0)
f=s.length
C.a.j(s,k)
e=s.length
C.a.j(s,i)
d=s.length
C.a.j(s,g)
C.a.j(q,new G.z(m,f,d))
C.a.j(q,new G.z(l,e,f))
C.a.j(q,new G.z(j,d,e))
C.a.j(q,new G.z(f,e,d))}}c=new G.aE(!1,[],[],[],P.M())
c.O("aTexUV")
c.O("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.G)(t),++o){n=t[o]
b=s[n.a]
H.d(Math.sqrt(b.gR())<1.01&&Math.sqrt(b.gR())>0.99)
a=s[n.b]
H.d(Math.sqrt(a.gR())<1.01&&Math.sqrt(a.gR())>0.99)
a0=s[n.c]
H.d(Math.sqrt(a0.gR())<1.01&&Math.sqrt(a0.gR())>0.99)
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
c.aP("aNormal",[b,a,a0])
m=new T.h(new Float32Array(3))
m.q(b)
m.a2(0,a4)
l=new T.h(new Float32Array(3))
l.q(a)
l.a2(0,a4)
a2=new T.h(new Float32Array(3))
a2.q(a0)
a2.a2(0,a4)
c.d3([m,l,a2])
c.U("aTexUV",[new T.m(j),new T.m(h),new T.m(a1)])}return c},
mk:function(a,b,c,d,e,f,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=a0+1
s=B.m9(new B.fE(f,d,e,c),0,6.283185307179586,t,!1,0.001)
H.d(s.length===2*t)
r=B.mq(s,a1,a2,!1)
H.d(r.length===t)
q=new G.aE(!1,[],[],[],P.M())
for(p=0;p<a0;p=o)for(o=p+1,n=0;n<a1;n=m){m=n+1
q.ax(1)
l=r[p]
k=m*2
j=l[k]
i=r[o]
h=n*2
q.a4([j,i[k],i[h],l[h]])}q.O("aTexUV")
for(p=0;p<a0;p=o)for(l=p/a0,o=p+1,n=0;n<a1;n=m){m=n+1
k=m/a1
j=new Float32Array(2)
j[0]=l
j[1]=k
i=o/a0
h=new Float32Array(2)
h[0]=i
h[1]=k
k=n/a1
g=new Float32Array(2)
g[0]=i
g[1]=k
i=new Float32Array(2)
i[0]=l
i[1]=k
q.U("aTexUV",[new T.m(j),new T.m(h),new T.m(g),new T.m(i)])}q.bp()
return q},
mq:function(a1,a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=[]
s=new Float32Array(H.e(3))
r=new T.h(s)
q=new Float32Array(H.e(3))
p=new T.h(q)
o=new Float32Array(H.e(3))
n=new T.h(o)
for(m=a2+1,l=0;l<a1.length;l+=2){k=a1[l]
j=a1[l+1]
i=[]
C.a.j(t,i)
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
o[2]=e*d}p.C(0)
n.C(0)
for(c=0;c<m;++c){b=c/a2*2*3.141592653589793
a=a3*Math.cos(b)
a0=a3*Math.sin(b)
r.q(k)
r.aD(p,a)
r.aD(n,a0)
h=new T.h(new Float32Array(3))
h.q(r)
C.a.j(i,h)
s[2]=0
s[1]=0
s[0]=0
r.aD(p,a)
r.aD(n,a0)
r.C(0)
h=new T.h(new Float32Array(3))
h.q(r)
C.a.j(i,h)}}return t},
m9:function(a,b,c,d,e,f){var t,s,r,q,p,o,n
H.d(d>=2)
t=[]
s=new T.h(new Float32Array(H.e(3)))
r=new T.h(new Float32Array(H.e(3)))
for(q=(c-b)/(d-1),p=0;p<d;++p){o=q*p+b
a.$2(o,s)
a.$2(o+f,r)
r.aw(s)
n=new T.h(new Float32Array(3))
n.q(s)
C.a.j(t,n)
n=new T.h(new Float32Array(3))
n.q(r)
C.a.j(t,n)}return t},
fE:function fE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},G={
mr:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.i(t[s])}return C.a.ar(t,"\n")},
ku:function(a,b,c){var t,s,r,q
t=J.n(a)
s=t.c4(a,b)
t.bh(a,s,c)
t.c1(a,s)
r=t.bd(a,s,35713)
if(r!=null&&!r){q=t.bc(a,s)
P.ap("E:Compilation failed:")
P.ap("E:"+G.mr(c))
P.ap("E:Failure:")
P.ap(C.i.a7("E:",q))
throw H.f(q)}return s},
k9:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
d.q(b)
d.aw(a)
e.q(c)
e.aw(a)
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
t=Math.sqrt(e.gR())
if(t===0)return!1
e.a2(0,-1/t)
return!0},
k0:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.j_(a[s])
b[t+1]=J.j0(a[s])
b[t+2]=J.jA(a[s])}return b},
lW:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.j_(a[s])
b[t+1]=J.j0(a[s])}return b},
lX:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.j_(a[s])
b[t+1]=J.j0(a[s])
b[t+2]=J.jA(a[s])
b[t+3]=J.lp(a[s])}return b},
lV:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bl(a[s],0)
b[t+1]=J.bl(a[s],1)
b[t+2]=J.bl(a[s],2)
b[t+3]=J.bl(a[s],3)}return b},
my:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gH(t),s=s.gB(s),r=b.x,q=[[P.b,P.p]],p=[P.Q],o=[T.D],n=[T.h],m=[T.m];s.t();){l=s.gu()
if(!r.G(0,l)){k="Dropping unnecessary attribute: "+H.i(l)
if($.kL>0)H.iM("I: "+k)
continue}j=t.h(0,l)
switch($.$get$W().h(0,l).a){case"vec2":b.ah(l,G.lW(H.dI(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ah(l,G.k0(H.dI(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ah(l,G.lX(H.dI(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ah(l,new Float32Array(H.il(H.dI(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ah(l,G.lV(H.dI(j,"$isb",q,"$asb"),null),4)
break
default:if(H.az(!1))H.aL("unknown type for "+H.i(l)+" ["+J.ln(j[0]).l(0)+"] ["+new H.aJ(H.iy(j),null).l(0)+"] "+H.i(j))}}},
by:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.M()
q=J.lb(t.a)
p=new G.eW(t,q,4,r,s,null,0,-1,null,null,P.M(),"meshdata:"+a,!1,!0)
o=G.k0(c.d,null)
r.i(0,"aPosition",J.iY(t.a))
p.ch=o
p.bo("aPosition",o,3)
n=$.$get$W().h(0,"aPosition")
if(n==null)H.I("Unknown canonical aPosition")
H.d(s.G(0,"aPosition"))
m=s.h(0,"aPosition")
J.dK(t.a,q)
t.cc(0,m,0)
s=r.h(0,"aPosition")
r=n.bq()
J.dJ(t.a,34962,s)
J.jH(t.a,m,r,5126,!1,0,0)
s=c.d9()
p.y=J.iY(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saV(new Uint8Array(H.il(s)))
p.Q=5121}else if(r<196608){p.saV(new Uint16Array(H.il(s)))
p.Q=5123}else{p.saV(new Uint32Array(H.il(s)))
p.Q=5125}J.dK(t.a,q)
s=p.y
r=p.cx
q=J.w(r)
H.d(!!q.$iskr||!!q.$isks||!!q.$iskt)
J.dJ(t.a,34963,s)
J.jz(t.a,34963,r,35048)
G.my(c,p)
return p},
mj:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ak(null,null,null,P.u)
s=c.b
r=d.b
q=c.f
p=J.la(b.a)
o=G.ku(b.a,35633,s)
J.jx(b.a,p,o)
n=G.ku(b.a,35632,r)
J.jx(b.a,p,n)
if(q.length>0)J.lz(b.a,p,q,35980)
J.lt(b.a,p)
if(!J.ls(b.a,p,35714))H.I(J.lr(b.a,p))
t=new G.fw(b,c,d,p,P.jc(c.c,null),P.M(),P.M(),t,null,a,!1,!0)
t.dg(a,b,c,d)
return t},
eZ:function eZ(){},
dv:function dv(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dS:function dS(){},
dV:function dV(a,b){this.a=a
this.b=b},
ew:function ew(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
z:function z(a,b,c){this.a=a
this.b=b
this.c=c},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aE:function aE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dt:function dt(a,b,c){this.a=a
this.b=b
this.c=c},
bR:function bR(a,b,c){this.a=a
this.b=b
this.c=c},
eU:function eU(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eW:function eW(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fi:function fi(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fw:function fw(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fH:function fH(){}},R={dk:function dk(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
_.c=a5},fL:function fL(){},fM:function fM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kJ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.q(c)
s=b.d
t.cg(0,s)
r=b.cx
J.aC(b)
q=C.a.gaH(e)
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
p.e7(new T.a8(o))
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
C.a.j(e,b.ch)
a.d8(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.G)(s),++l)A.kJ(a,s[l],t,d,e)},
aH:function aH(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
dm:function dm(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fv:function fv(){},
dG:function(a){var t,s
t=C.V.em(a,0,new A.iz())
s=536870911&t+(C.b.cF(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iz:function iz(){}},T={
O:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.h(t)},
a8:function a8(a){this.a=a},
H:function H(a){this.a=a},
m:function m(a){this.a=a},
h:function h(a){this.a=a},
D:function D(a){this.a=a}},O={
n8:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3
t={}
s=document
r=new R.fM(0,0,null,null,null,null)
r.dh(C.m.cJ(s,"stats"),"blue","gray")
q=C.m.ci(s,"#webgl-canvas")
p=new G.dV(null,q)
s=(q&&C.H).cI(q,"webgl2",P.aX(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.I(P.ch('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.aC(J.lq(s))
if($.kL>0)P.ap("I: "+o)
J.l8(s,0,0,0,1)
J.c7(s,2929)
J.c7(s,2884)
n=B.m8(25,10,0,q)
s=new T.H(new Float32Array(H.e(16)))
s.F()
o=new T.H(new Float32Array(H.e(16)))
o.F()
m=new G.fi(n,50,1,0.1,1000,s,o,new T.H(new Float32Array(H.e(16))),P.M(),"perspective",!1,!0)
m.bs()
o=H.F([],[A.dm])
l=new R.dk(q,m,null,p,o,17664,0,0,0,0,"main",!1,!0)
l.df("main",p,null)
l.ck(null)
W.am(window,"resize",l.geF(),!1,W.k)
s=G.mj("main",p,$.$get$kZ(),$.$get$kY())
k=[]
H.d(!0)
C.a.j(o,new A.dm(s,[m],k,"wireframe",!1,!0))
j=new G.eU(P.M(),"wire",!1,!0)
j.aa("cDepthTest",!0)
j.aa("cDepthWrite",!0)
j.aa("cBlendEquation",$.$get$j3())
j.aa("cStencilFunc",$.$get$ke())
o=new T.D(new Float32Array(H.e(4)))
o.T(1,1,0,1)
j.aa("uColorAlpha",o)
o=new T.D(new Float32Array(H.e(4)))
o.T(0,0,0,0.5)
j.aa("uColorAlpha2",o)
i=B.lY(2,1,!0)
i.a9()
o=G.by("icosahedron",s,i)
h=new Float32Array(H.e(9))
g=new T.H(new Float32Array(H.e(16)))
g.F()
f=new T.H(new Float32Array(H.e(16)))
f.F()
e=new A.aH(j,o,[],new T.a8(h),g,f,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"sphere",!1,!0)
e.a3(0,0,0)
H.d(!0)
C.a.j(k,e)
i=B.lN(!0,1,0,1,0,1,1,1)
i.a9()
f=G.by("cube",s,i)
g=new Float32Array(H.e(9))
h=new T.H(new Float32Array(H.e(16)))
h.F()
o=new T.H(new Float32Array(H.e(16)))
o.F()
d=new A.aH(j,f,[],new T.a8(g),h,o,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"cube",!1,!0)
d.a3(-5,0,-5)
H.d(!0)
C.a.j(k,d)
o=new T.h(new Float32Array(H.e(3)))
o.m(-1,-1,1)
h=new T.h(new Float32Array(H.e(3)))
h.m(1,-1,1)
g=new T.h(new Float32Array(H.e(3)))
g.m(-1,1,1)
f=new T.h(new Float32Array(H.e(3)))
f.m(-1,-1,-1)
c=new T.h(new Float32Array(H.e(3)))
c.m(-1,1,-1)
b=new T.h(new Float32Array(H.e(3)))
b.m(1,-1,-1)
a=new T.h(new Float32Array(H.e(3)))
a.m(-1,1,-1)
a0=new T.h(new Float32Array(H.e(3)))
a0.m(-1,1,1)
a1=new T.h(new Float32Array(H.e(3)))
a1.m(1,-1,1)
a2=new T.h(new Float32Array(H.e(3)))
a2.m(1,-1,-1)
a3=new T.h(new Float32Array(H.e(3)))
a3.m(1,-1,1)
a4=new T.h(new Float32Array(H.e(3)))
a4.m(-1,-1,1)
a5=new T.h(new Float32Array(H.e(3)))
a5.m(-1,-1,-1)
a6=new T.h(new Float32Array(H.e(3)))
a6.m(1,-1,-1)
a7=new T.h(new Float32Array(H.e(3)))
a7.m(-1,-1,-1)
a8=new T.h(new Float32Array(H.e(3)))
a8.m(-1,-1,1)
a9=new T.h(new Float32Array(H.e(3)))
a9.m(-1,1,1)
b0=new T.h(new Float32Array(H.e(3)))
b0.m(-1,1,-1)
b1=new Float32Array(H.e(2))
b1[0]=0
b1[1]=0
b2=new Float32Array(H.e(2))
b2[0]=1
b2[1]=0
b3=new Float32Array(H.e(2))
b3[0]=1
b3[1]=1
b4=new Float32Array(H.e(2))
b4[0]=1
b4[1]=0
b5=new Float32Array(H.e(2))
b5[0]=1
b5[1]=1
b6=new Float32Array(H.e(2))
b6[0]=0
b6[1]=1
b7=new Float32Array(H.e(2))
b7[0]=0
b7[1]=1
b8=new Float32Array(H.e(2))
b8[0]=0
b8[1]=0
b9=new Float32Array(H.e(2))
b9[0]=1
b9[1]=0
c0=new Float32Array(H.e(2))
c0[0]=1
c0[1]=1
c1=new Float32Array(H.e(2))
c1[0]=1
c1[1]=1
c2=new Float32Array(H.e(2))
c2[0]=0
c2[1]=1
c3=new Float32Array(H.e(2))
c3[0]=0
c3[1]=0
c4=new Float32Array(H.e(2))
c4[0]=1
c4[1]=0
c5=new Float32Array(H.e(2))
c5[0]=0
c5[1]=0
c6=new Float32Array(H.e(2))
c6[0]=1
c6[1]=0
c7=new Float32Array(H.e(2))
c7[0]=1
c7[1]=1
c8=new Float32Array(H.e(2))
c8[0]=0
c8[1]=1
i=new G.aE(!1,[],[],[],P.M())
i.O("aTexUV")
i.O("aNormal")
i.bl(2)
i.a4([o,h,g,f,c,b])
i.U("aTexUV",[new T.m(b1),new T.m(b2),new T.m(b3),new T.m(b4),new T.m(b5),new T.m(b6)])
i.ax(3)
i.a4([a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0])
i.U("aTexUV",[new T.m(b7),new T.m(b8),new T.m(b9),new T.m(c0),new T.m(c1),new T.m(c2),new T.m(c3),new T.m(c4),new T.m(c5),new T.m(c6),new T.m(c7),new T.m(c8)])
i.bp()
i.a9()
o=G.by("wedge",s,i)
h=new Float32Array(H.e(9))
g=new T.H(new Float32Array(H.e(16)))
g.F()
f=new T.H(new Float32Array(H.e(16)))
f.F()
c9=new A.aH(j,o,[],new T.a8(h),g,f,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"wedge",!1,!0)
c9.a3(0,-5,0)
H.d(!0)
C.a.j(k,c9)
i=B.lO(3,4,2,16)
i.a9()
f=G.by("cylinder",s,i)
g=new Float32Array(H.e(9))
h=new T.H(new Float32Array(H.e(16)))
h.F()
o=new T.H(new Float32Array(H.e(16)))
o.F()
d0=new A.aH(j,f,[],new T.a8(g),h,o,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"cylinder",!1,!0)
d0.a3(5,0,-5)
H.d(!0)
C.a.j(k,d0)
o=new T.h(new Float32Array(H.e(3)))
o.m(-2,-2,0)
h=new T.h(new Float32Array(H.e(3)))
h.m(2,-2,0)
g=new T.h(new Float32Array(H.e(3)))
g.m(2,2,0)
f=new T.h(new Float32Array(H.e(3)))
f.m(-2,2,0)
c=new Float32Array(H.e(2))
c[0]=0
c[1]=0
b=new Float32Array(H.e(2))
b[0]=1
b[1]=0
a=new Float32Array(H.e(2))
a[0]=1
a[1]=1
a0=new Float32Array(H.e(2))
a0[0]=0
a0[1]=1
d1=new T.h(new Float32Array(H.e(3)))
d1.m(0,0,1)
i=new G.aE(!1,[],[],[],P.M())
i.O("aTexUV")
i.d4([o,h,g,f])
i.U("aTexUV",[new T.m(c),new T.m(b),new T.m(a),new T.m(a0)])
i.O("aNormal")
i.aP("aNormal",[d1,d1,d1,d1])
i.a9()
a0=G.by("quad",s,i)
a=new Float32Array(H.e(9))
b=new T.H(new Float32Array(H.e(16)))
b.F()
c=new T.H(new Float32Array(H.e(16)))
c.F()
d2=new A.aH(j,a0,[],new T.a8(a),b,c,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"quad",!1,!0)
d2.a3(-5,0,5)
H.d(!0)
C.a.j(k,d2)
i=B.mk(!0,!0,1,2,3,1,128,16,0.4)
i.a9()
s=G.by("torus",s,i)
c=new Float32Array(H.e(9))
b=new T.H(new Float32Array(H.e(16)))
b.F()
a=new T.H(new Float32Array(H.e(16)))
a.F()
d3=new A.aH(j,s,[],new T.a8(c),b,a,new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),new T.h(new Float32Array(H.e(3))),"torus",!1,!0)
d3.a3(5,0,5)
H.d(!0)
C.a.j(k,d3)
t.a=0
new O.iK(t,r,n,l,j).$1(0)},
iK:function iK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}}
var v=[C,H,J,P,W,B,G,R,A,T,O]
setFunctionNamesIfNecessary(v)
var $={}
H.j9.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.aZ(a)},
l:function(a){return H.fq(a)},
gD:function(a){return new H.aJ(H.iy(a),null)}}
J.eG.prototype={
l:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gD:function(a){return C.ap},
$isaA:1}
J.eH.prototype={
A:function(a,b){return null==b},
l:function(a){return"null"},
gw:function(a){return 0},
gD:function(a){return C.aj}}
J.bC.prototype={
gw:function(a){return 0},
gD:function(a){return C.ai},
l:function(a){return String(a)},
$isk6:1}
J.fk.prototype={}
J.b1.prototype={}
J.aV.prototype={
l:function(a){var t=a[$.$get$jS()]
return t==null?this.d_(a):J.aC(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj7:1}
J.aT.prototype={
b3:function(a,b){if(!!a.immutable$list)throw H.f(new P.v(b))},
b2:function(a,b){if(!!a.fixed$length)throw H.f(new P.v(b))},
j:function(a,b){this.b2(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q,p
t=a.length
this.b2(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.I(new P.a4(a)))
a.push(q)}},
cf:function(a,b){return new H.bD(a,b,[H.aN(a,0),null])},
ar:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.i(a[s])
return t.join(b)},
v:function(a,b){return this.h(a,b)},
gel:function(a){if(a.length>0)return a[0]
throw H.f(H.eF())},
gaH:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.f(H.eF())},
bg:function(a,b,c,d,e){var t,s
this.b3(a,"setRange")
P.kd(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.I(P.b_(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.f(H.m5())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bS:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.f(new P.a4(a))}return!1},
cV:function(a,b){this.b3(a,"sort")
H.dp(a,0,a.length-1,P.mT())},
aM:function(a){return this.cV(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.J(a[t],b))return!0
return!1},
l:function(a){return P.eE(a,"[","]")},
gB:function(a){return new J.dP(a,a.length,0,null,[H.aN(a,0)])},
gw:function(a){return H.aZ(a)},
gk:function(a){return a.length},
sk:function(a,b){this.b2(a,"set length")
if(b<0)throw H.f(P.b_(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.S(a,b))
if(b>=a.length||b<0)throw H.f(H.S(a,b))
return a[b]},
i:function(a,b,c){this.b3(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(H.S(a,b))
if(b>=a.length||b<0)throw H.f(H.S(a,b))
a[b]=c},
$iso:1,
$aso:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.j8.prototype={}
J.dP.prototype={
gu:function(){return this.d},
t:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.f(H.G(t))
r=this.c
if(r>=s){this.sbu(null)
return!1}this.sbu(t[r]);++this.c
return!0},
sbu:function(a){this.d=a}}
J.bc.prototype={
W:function(a,b){var t
if(typeof b!=="number")throw H.f(H.X(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaF(b)
if(this.gaF(a)===t)return 0
if(this.gaF(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaF:function(a){return a===0?1/a<0:a<0},
e2:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.f(new P.v(""+a+".ceil()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.f(new P.v(""+a+".round()"))},
e3:function(a,b,c){if(this.W(b,c)>0)throw H.f(H.X(b))
if(this.W(a,b)<0)return b
if(this.W(a,c)>0)return c
return a},
eN:function(a,b){var t
if(b>20)throw H.f(P.b_(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaF(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a7:function(a,b){if(typeof b!=="number")throw H.f(H.X(b))
return a+b},
ag:function(a,b){if(typeof b!=="number")throw H.f(H.X(b))
return a-b},
cG:function(a,b){if(typeof b!=="number")throw H.f(H.X(b))
return a/b},
I:function(a,b){if(typeof b!=="number")throw H.f(H.X(b))
return a*b},
aO:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bO(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.bO(a,b)},
bO:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.f(new P.v("Result of truncating division is "+H.i(t)+": "+H.i(a)+" ~/ "+b))},
aZ:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cF:function(a,b){if(typeof b!=="number")throw H.f(H.X(b))
return(a&b)>>>0},
d1:function(a,b){if(typeof b!=="number")throw H.f(H.X(b))
return(a^b)>>>0},
aL:function(a,b){if(typeof b!=="number")throw H.f(H.X(b))
return a<b},
av:function(a,b){if(typeof b!=="number")throw H.f(H.X(b))
return a>b},
cH:function(a,b){if(typeof b!=="number")throw H.f(H.X(b))
return a>=b},
gD:function(a){return C.as},
$isY:1}
J.d3.prototype={
gD:function(a){return C.ar},
$isQ:1,
$isp:1,
$isY:1}
J.d2.prototype={
gD:function(a){return C.aq},
$isQ:1,
$isY:1}
J.aU.prototype={
aQ:function(a,b){if(b>=a.length)throw H.f(H.S(a,b))
return a.charCodeAt(b)},
a7:function(a,b){if(typeof b!=="string")throw H.f(P.jJ(b,null,null))
return a+b},
cW:function(a,b,c){var t
if(c>a.length)throw H.f(P.b_(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bi:function(a,b){return this.cW(a,b,0)},
bk:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.f(P.fr(b,null,null))
if(b>c)throw H.f(P.fr(b,null,null))
if(c>a.length)throw H.f(P.fr(c,null,null))
return a.substring(b,c)},
cX:function(a,b){return this.bk(a,b,null)},
eM:function(a){return a.toLowerCase()},
e5:function(a,b,c){if(c>a.length)throw H.f(P.b_(c,0,a.length,null,null))
return H.nh(a,b,c)},
W:function(a,b){var t
if(typeof b!=="string")throw H.f(H.X(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
l:function(a){return a},
gw:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gD:function(a){return C.ak},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.f(H.S(a,b))
return a[b]},
$iso:1,
$aso:function(){},
$isu:1}
H.c.prototype={$asc:null}
H.bd.prototype={
gB:function(a){return new H.d5(this,this.gk(this),0,null,[H.ao(this,"bd",0)])},
aJ:function(a,b){return this.cZ(0,b)},
eL:function(a,b){var t,s
t=H.F([],[H.ao(this,"bd",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.v(0,s)
return t},
eK:function(a){return this.eL(a,!0)}}
H.d5.prototype={
gu:function(){return this.d},
t:function(){var t,s,r,q
t=this.a
s=J.ag(t)
r=s.gk(t)
if(this.b!==r)throw H.f(new P.a4(t))
q=this.c
if(q>=r){this.saj(null)
return!1}this.saj(s.v(t,q));++this.c
return!0},
saj:function(a){this.d=a}}
H.d6.prototype={
gB:function(a){return new H.eQ(null,J.bn(this.a),this.b,this.$ti)},
gk:function(a){return J.dL(this.a)},
$asZ:function(a,b){return[b]}}
H.e6.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eQ.prototype={
t:function(){var t=this.b
if(t.t()){this.saj(this.c.$1(t.gu()))
return!0}this.saj(null)
return!1},
gu:function(){return this.a},
saj:function(a){this.a=a},
$asd1:function(a,b){return[b]}}
H.bD.prototype={
gk:function(a){return J.dL(this.a)},
v:function(a,b){return this.b.$1(J.lh(this.a,b))},
$asc:function(a,b){return[b]},
$asbd:function(a,b){return[b]},
$asZ:function(a,b){return[b]}}
H.dx.prototype={
gB:function(a){return new H.hj(J.bn(this.a),this.b,this.$ti)}}
H.hj.prototype={
t:function(){var t,s
for(t=this.a,s=this.b;t.t();)if(s.$1(t.gu()))return!0
return!1},
gu:function(){return this.a.gu()}}
H.cj.prototype={}
H.iT.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iU.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hW.prototype={
sew:function(a){this.z=a},
sez:function(a){this.ch=a}}
H.b5.prototype={
bR:function(a,b){if(!this.f.A(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.b0()},
eE:function(a){var t,s,r,q,p
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
if(q===r.c)r.bH();++r.d}this.y=!1}this.b0()},
dU:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
eD:function(a){var t,s,r
if(this.ch==null)return
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.I(new P.v("removeRange"))
P.kd(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cS:function(a,b){if(!this.r.A(0,a))return
this.db=b},
ep:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jd(null,null)
this.cx=t}t.Y(0,new H.hR(a,c))},
eo:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aG()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jd(null,null)
this.cx=t}t.Y(0,this.gex())},
eq:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ap(a)
if(b!=null)P.ap(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.aC(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bW(t,t.r,null,null,[null]),r.c=t.e;r.t();)r.d.J(0,s)},
an:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.T(o)
p=H.aM(o)
this.eq(q,p)
if(this.db){this.aG()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mP(r)
u.globalState.d=H.jq(t,"$isb5")
if(t!=null)$=t.gev()
if(this.cx!=null)for(;n=this.cx,!n.gaq(n);)this.cx.cj().$0()}return s},
ce:function(a){return this.b.h(0,a)},
by:function(a,b){var t=this.b
if(t.G(0,a))throw H.f(P.ch("Registry: ports must be registered only once."))
t.i(0,a,b)},
b0:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.aG()},
aG:function(){var t,s,r
t=this.cx
if(t!=null)t.a_(0)
for(t=this.b,s=t.gcC(t),s=s.gB(s);s.t();)s.gu().dv()
t.a_(0)
this.c.a_(0)
u.globalState.z.as(0,this.a)
this.dx.a_(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
gev:function(){return this.d},
ge6:function(){return this.e}}
H.hR.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hz.prototype={
ed:function(){var t=this.a
if(t.b===t.c)return
return t.cj()},
cm:function(){var t,s,r
t=this.ed()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaq(s)}else s=!1
else s=!1
else s=!1
if(s)H.I(P.ch("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaq(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aX(["command","close"])
r=new H.an(!0,new P.dB(0,null,null,null,null,null,0,[null,P.p])).M(r)
s.toString
self.postMessage(r)}return!1}t.eB()
return!0},
bM:function(){if(self.window!=null)new H.hA(this).$0()
else for(;this.cm(););},
at:function(){var t,s,r,q,p
if(!u.globalState.x)this.bM()
else try{this.bM()}catch(r){t=H.T(r)
s=H.aM(r)
q=u.globalState.Q
p=P.aX(["command","error","msg",H.i(t)+"\n"+H.i(s)])
p=new H.an(!0,P.bX(null,P.p)).M(p)
q.toString
self.postMessage(p)}}}
H.hA.prototype={
$0:function(){if(!this.a.cm())return
P.mp(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.b6.prototype={
eB:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.an(this.b)}}
H.hV.prototype={}
H.eC.prototype={
$0:function(){H.m1(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eD.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bk(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bk(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b0()},
$S:function(){return{func:1,v:true}}}
H.hs.prototype={}
H.bh.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mD(b)
if(t.ge6()===s){s=J.ag(r)
switch(s.h(r,0)){case"pause":t.bR(s.h(r,1),s.h(r,2))
break
case"resume":t.eE(s.h(r,1))
break
case"add-ondone":t.dU(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eD(s.h(r,1))
break
case"set-errors-fatal":t.cS(s.h(r,1),s.h(r,2))
break
case"ping":t.ep(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eo(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.as(0,s)
break}return}u.globalState.f.a.Y(0,new H.b6(t,new H.hX(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bh){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.hX.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dt(0,this.b)},
$S:function(){return{func:1}}}
H.bZ.prototype={
J:function(a,b){var t,s,r
t=P.aX(["command","message","port",this,"msg",b])
s=new H.an(!0,P.bX(null,P.p)).M(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bZ){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){return C.b.d1((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bf.prototype={
dv:function(){this.c=!0
this.b=null},
dt:function(a,b){if(this.c)return
this.b.$1(b)},
$ismh:1}
H.h1.prototype={
di:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Y(0,new H.b6(s,new H.h2(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c2(new H.h3(this,b),0),a)}else{H.d(a>0)
throw H.f(new P.v("Timer greater than 0."))}}}
H.h2.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h3.prototype={
$0:function(){this.a.c=null
H.iJ()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.as.prototype={
gw:function(a){var t=this.a
t=C.b.aZ(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.as){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.an.prototype={
M:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.w(a)
if(!!t.$isbF)return["buffer",a]
if(!!t.$isbe)return["typed",a]
if(!!t.$iso)return this.cO(a)
if(!!t.$islZ){r=this.gcL()
q=t.gH(a)
q=H.je(q,r,H.ao(q,"Z",0),null)
q=P.k8(q,!0,H.ao(q,"Z",0))
t=t.gcC(a)
t=H.je(t,r,H.ao(t,"Z",0),null)
return["map",q,P.k8(t,!0,H.ao(t,"Z",0))]}if(!!t.$isk6)return this.cP(a)
if(!!t.$isa)this.cA(a)
if(!!t.$ismh)this.au(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbh)return this.cQ(a)
if(!!t.$isbZ)return this.cR(a)
if(!!t.$isb9){p=a.$static_name
if(p==null)this.au(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isas)return["capability",a.a]
if(!(a instanceof P.q))this.cA(a)
return["dart",u.classIdExtractor(a),this.cN(u.classFieldsExtractor(a))]},
au:function(a,b){throw H.f(new P.v((b==null?"Can't transmit:":b)+" "+H.i(a)))},
cA:function(a){return this.au(a,null)},
cO:function(a){var t
H.d(typeof a!=="string")
t=this.cM(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.au(a,"Can't serialize indexable: ")},
cM:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.M(a[s])
return t},
cN:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.M(a[t]))
return a},
cP:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.au(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.M(a[t[r]])
return["js-object",t,s]},
cR:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cQ:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b4.prototype={
a0:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.f(P.jI("Bad serialized message: "+H.i(a)))
switch(C.a.gel(a)){case"ref":H.d(J.J(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.J(a[0],"buffer"))
t=a[1]
C.a.j(this.b,t)
return t
case"typed":H.d(J.J(a[0],"typed"))
t=a[1]
C.a.j(this.b,t)
return t
case"fixed":H.d(J.J(a[0],"fixed"))
t=a[1]
C.a.j(this.b,t)
s=H.F(this.am(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.J(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.F(this.am(t),[null])
case"mutable":H.d(J.J(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.am(t)
case"const":H.d(J.J(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
s=H.F(this.am(t),[null])
s.fixed$length=Array
return s
case"map":return this.eg(a)
case"sendport":return this.eh(a)
case"raw sendport":H.d(J.J(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.ef(a)
case"function":H.d(J.J(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.d(J.J(a[0],"capability"))
return new H.as(a[1])
case"dart":H.d(J.J(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.j(this.b,p)
this.am(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.f("couldn't deserialize: "+H.i(a))}},
am:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.a0(a[t]))
return a},
eg:function(a){var t,s,r,q,p
H.d(J.J(a[0],"map"))
t=a[1]
s=a[2]
r=P.M()
C.a.j(this.b,r)
t=J.lu(t,this.gee()).eK(0)
for(q=J.ag(s),p=0;p<t.length;++p)r.i(0,t[p],this.a0(q.h(s,p)))
return r},
eh:function(a){var t,s,r,q,p,o,n
H.d(J.J(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ce(r)
if(o==null)return
n=new H.bh(o,s)}else n=new H.bZ(t,r,s)
C.a.j(this.b,n)
return n},
ef:function(a){var t,s,r,q,p,o
H.d(J.J(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.ag(t),p=J.ag(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.a0(p.h(s,o))
return r}}
H.fu.prototype={}
H.h8.prototype={
S:function(a){var t,s,r
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
H.df.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.i(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eJ.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.i(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.i(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.i(this.a)+")"}}
H.hb.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iV.prototype={
$1:function(a){if(!!J.w(a).$isbb)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dD.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iE.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iG.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iH.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iI.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b9.prototype={
l:function(a){return"Closure '"+H.dh(this).trim()+"'"},
$isj7:1,
geQ:function(){return this},
$D:null}
H.fX.prototype={}
H.fK.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bo.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bo))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aZ(this.a)
else s=typeof t!=="object"?J.ar(t):H.aZ(t)
return(s^H.aZ(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.i(this.d)+"' of "+H.fq(t)}}
H.ha.prototype={
l:function(a){return this.a}}
H.dU.prototype={
l:function(a){return this.a}}
H.fA.prototype={
l:function(a){return"RuntimeError: "+H.i(this.a)}}
H.hm.prototype={
l:function(a){return C.i.a7("Assertion failed: ",P.j6(this.a))}}
H.aJ.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.ar(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aJ){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.aj.prototype={
gk:function(a){return this.a},
gaq:function(a){return this.a===0},
gH:function(a){return new H.eM(this,[H.aN(this,0)])},
gcC:function(a){return H.je(this.gH(this),new H.eI(this),H.aN(this,0),H.aN(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bE(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bE(s,b)}else return this.er(b)},
er:function(a){var t=this.d
if(t==null)return!1
return this.ap(this.aB(t,this.ao(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ak(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ak(r,b)
return s==null?null:s.b}else return this.es(b)},
es:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aB(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aW()
this.b=t}this.bw(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aW()
this.c=s}this.bw(s,b,c)}else{r=this.d
if(r==null){r=this.aW()
this.d=r}q=this.ao(b)
p=this.aB(r,q)
if(p==null)this.aY(r,q,[this.aX(b,c)])
else{o=this.ap(p,b)
if(o>=0)p[o].b=c
else p.push(this.aX(b,c))}}},
as:function(a,b){if(typeof b==="string")return this.bK(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bK(this.c,b)
else return this.eu(b)},
eu:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aB(t,this.ao(a))
r=this.ap(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bP(q)
return q.b},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aE:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.f(new P.a4(this))
t=t.c}},
bw:function(a,b,c){var t=this.ak(a,b)
if(t==null)this.aY(a,b,this.aX(b,c))
else t.b=c},
bK:function(a,b){var t
if(a==null)return
t=this.ak(a,b)
if(t==null)return
this.bP(t)
this.bF(a,b)
return t.b},
aX:function(a,b){var t,s
t=new H.eL(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bP:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ao:function(a){return J.ar(a)&0x3ffffff},
ap:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.J(a[s].a,b))return s
return-1},
l:function(a){return P.m7(this)},
ak:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
aY:function(a,b,c){H.d(c!=null)
a[b]=c},
bF:function(a,b){delete a[b]},
bE:function(a,b){return this.ak(a,b)!=null},
aW:function(){var t=Object.create(null)
this.aY(t,"<non-identifier-key>",t)
this.bF(t,"<non-identifier-key>")
return t},
$islZ:1}
H.eI.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eL.prototype={}
H.eM.prototype={
gk:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.eN(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eN.prototype={
gu:function(){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.f(new P.a4(t))
else{t=this.c
if(t==null){this.sbv(null)
return!1}else{this.sbv(t.a)
this.c=this.c.c
return!0}}},
sbv:function(a){this.d=a}}
H.iA.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iB.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.u]}}}
H.iC.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.u]}}}
H.bF.prototype={
gD:function(a){return C.ab},
$isbF:1}
H.be.prototype={$isbe:1}
H.f_.prototype={
gD:function(a){return C.ac}}
H.d8.prototype={
gk:function(a){return a.length},
$iso:1,
$aso:function(){},
$isr:1,
$asr:function(){}}
H.d9.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
a[b]=c}}
H.da.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.d7.prototype={
gD:function(a){return C.ad},
$isc:1,
$asc:function(){return[P.Q]},
$isb:1,
$asb:function(){return[P.Q]},
$iset:1}
H.f0.prototype={
gD:function(a){return C.ae},
$isc:1,
$asc:function(){return[P.Q]},
$isb:1,
$asb:function(){return[P.Q]}}
H.f1.prototype={
gD:function(a){return C.af},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.f2.prototype={
gD:function(a){return C.ag},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isk3:1}
H.f3.prototype={
gD:function(a){return C.ah},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.f4.prototype={
gD:function(a){return C.al},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskr:1}
H.f5.prototype={
gD:function(a){return C.am},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$isks:1}
H.db.prototype={
gD:function(a){return C.an},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]}}
H.f6.prototype={
gD:function(a){return C.ao},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.I(H.S(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.p]},
$isb:1,
$asb:function(){return[P.p]},
$iskt:1}
H.bG.prototype={
$aso:function(){},
$isc:1,
$asc:function(){return[P.p]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.p]}}
H.bH.prototype={
$aso:function(){},
$isc:1,
$asc:function(){return[P.Q]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.Q]}}
H.bI.prototype={
$aso:function(){},
$asc:function(){return[P.Q]},
$asr:function(){},
$asb:function(){return[P.Q]}}
H.bJ.prototype={
$aso:function(){},
$asc:function(){return[P.p]},
$asr:function(){},
$asb:function(){return[P.p]}}
P.ho.prototype={
$1:function(a){var t,s
H.iJ()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hn.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hp.prototype={
$0:function(){H.iJ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hq.prototype={
$0:function(){H.iJ()
this.a.$0()},
$S:function(){return{func:1}}}
P.hu.prototype={}
P.ic.prototype={
e4:function(a,b){var t=this.a
if(t.a!==0)throw H.f(new P.aI("Future already completed"))
t.aS(b)}}
P.dA.prototype={
eA:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b8(this.d,a.a)},
en:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bk(s,{func:1,args:[P.q,P.bN]}))return t.eG(s,a.a,a.b)
else return t.b8(s,a.a)}}
P.ay.prototype={
co:function(a,b){var t,s,r
t=$.E
if(t!==C.f){t.toString
if(b!=null)b=P.mH(b,t)}s=new P.ay(0,t,null,[null])
r=b==null?1:3
this.bx(new P.dA(null,s,r,a,b,[H.aN(this,0),null]))
return s},
cn:function(a){return this.co(a,null)},
bA:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bx:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jq(this.c,"$isdA")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bx(a)
return}this.bA(t)}H.d(this.a>=4)
t=this.b
t.toString
P.ip(null,null,t,new P.hF(this,a))}},
bJ:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bJ(a)
return}this.bA(s)}H.d(this.a>=4)
t.a=this.al(a)
s=this.b
s.toString
P.ip(null,null,s,new P.hJ(t,this))}},
bL:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.al(t)},
al:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aS:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.iq(a,"$isex",t,"$asex"))if(H.iq(a,"$isay",t,null))P.kw(a,this)
else P.mx(a,this)
else{s=this.bL()
H.d(this.a<4)
this.a=4
this.c=a
P.bT(this,s)}},
ay:function(a,b){var t
H.d(this.a<4)
t=this.bL()
H.d(this.a<4)
this.a=8
this.c=new P.b8(a,b)
P.bT(this,t)},
dz:function(a){return this.ay(a,null)},
$isex:1,
gb_:function(){return this.a},
gdO:function(){return this.c}}
P.hF.prototype={
$0:function(){P.bT(this.a,this.b)},
$S:function(){return{func:1}}}
P.hJ.prototype={
$0:function(){P.bT(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hG.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aS(a)},
$S:function(){return{func:1,args:[,]}}}
P.hH.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.ay(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hI.prototype={
$0:function(){this.a.ay(this.b,this.c)},
$S:function(){return{func:1}}}
P.hM.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cl(q.d)}catch(n){s=H.T(n)
r=H.aM(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b8(s,r)
p.a=!0
return}if(!!J.w(t).$isex){if(t instanceof P.ay&&t.gb_()>=4){if(t.gb_()===8){q=t
H.d(q.gb_()===8)
p=this.b
p.b=q.gdO()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cn(new P.hN(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hN.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hL.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b8(r.d,this.c)}catch(q){t=H.T(q)
s=H.aM(q)
r=this.a
r.b=new P.b8(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hK.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eA(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.en(t)
p.a=!1}}catch(o){s=H.T(o)
r=H.aM(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b8(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dy.prototype={}
P.fO.prototype={
gk:function(a){var t,s
t={}
s=new P.ay(0,$.E,null,[P.p])
t.a=0
this.ey(new P.fQ(t),!0,new P.fR(t,s),s.gdw())
return s}}
P.fQ.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fR.prototype={
$0:function(){this.b.aS(this.a.a)},
$S:function(){return{func:1}}}
P.fP.prototype={}
P.b8.prototype={
l:function(a){return H.i(this.a)},
$isbb:1}
P.ik.prototype={}
P.io.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dg()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.f(t)
r=H.f(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.hZ.prototype={
eH:function(a){var t,s,r
try{if(C.f===$.E){a.$0()
return}P.kB(null,null,this,a)}catch(r){t=H.T(r)
s=H.aM(r)
P.im(null,null,this,t,s)}},
eI:function(a,b){var t,s,r
try{if(C.f===$.E){a.$1(b)
return}P.kC(null,null,this,a,b)}catch(r){t=H.T(r)
s=H.aM(r)
P.im(null,null,this,t,s)}},
e_:function(a){return new P.i0(this,a)},
b1:function(a){return new P.i_(this,a)},
e0:function(a){return new P.i1(this,a)},
h:function(a,b){return},
cl:function(a){if($.E===C.f)return a.$0()
return P.kB(null,null,this,a)},
b8:function(a,b){if($.E===C.f)return a.$1(b)
return P.kC(null,null,this,a,b)},
eG:function(a,b,c){if($.E===C.f)return a.$2(b,c)
return P.mI(null,null,this,a,b,c)}}
P.i0.prototype={
$0:function(){return this.a.cl(this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$0:function(){return this.a.eH(this.b)},
$S:function(){return{func:1}}}
P.i1.prototype={
$1:function(a){return this.a.eI(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dB.prototype={
ao:function(a){return H.na(a)&0x3ffffff},
ap:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hS.prototype={
gB:function(a){var t=new P.bW(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dA(b)},
dA:function(a){var t=this.d
if(t==null)return!1
return this.aA(t[this.az(a)],a)>=0},
ce:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.dI(a)},
dI:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.az(a)]
r=this.aA(s,a)
if(r<0)return
return J.bl(s,r).gdC()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bB(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bB(r,b)}else return this.Y(0,b)},
Y:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mB()
this.d=t}s=this.az(b)
r=t[s]
if(r==null){q=[this.aR(b)]
H.d(q!=null)
t[s]=q}else{if(this.aA(r,b)>=0)return!1
r.push(this.aR(b))}return!0},
as:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bC(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bC(this.c,b)
else return this.dJ(0,b)},
dJ:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.az(b)]
r=this.aA(s,b)
if(r<0)return!1
this.bD(s.splice(r,1)[0])
return!0},
a_:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bB:function(a,b){var t
if(a[b]!=null)return!1
t=this.aR(b)
H.d(!0)
a[b]=t
return!0},
bC:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bD(t)
delete a[b]
return!0},
aR:function(a){var t,s
t=new P.hT(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bD:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
az:function(a){return J.ar(a)&0x3ffffff},
aA:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.J(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hT.prototype={
gdC:function(){return this.a}}
P.bW.prototype={
gu:function(){return this.d},
t:function(){var t=this.a
if(this.b!==t.r)throw H.f(new P.a4(t))
else{t=this.c
if(t==null){this.sai(null)
return!1}else{this.sai(t.a)
this.c=this.c.b
return!0}}},
sai:function(a){this.d=a}}
P.hQ.prototype={}
P.d4.prototype={}
P.x.prototype={
gB:function(a){return new H.d5(a,this.gk(a),0,null,[H.ao(a,"x",0)])},
v:function(a,b){return this.h(a,b)},
cf:function(a,b){return new H.bD(a,b,[H.ao(a,"x",0),null])},
em:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.f(new P.a4(a))}return s},
l:function(a){return P.eE(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eR.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.i(a)
t.a=s+": "
t.a+=H.i(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eO.prototype={
gB:function(a){return new P.hU(this,this.c,this.d,this.b,null,this.$ti)},
gaq:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
v:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.av(0,b)||b>=t)H.I(P.C(b,this,"index",null,t))
return this.a[(C.b.a7(this.b,b)&this.a.length-1)>>>0]},
a_:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eE(this,"{","}")},
cj:function(){var t,s,r
t=this.b
if(t===this.c)throw H.f(H.eF());++this.d
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
s=H.F(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bg(s,0,q,t,r)
C.a.bg(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbN(s)},
dd:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbN(H.F(t,[b]))},
sbN:function(a){this.a=a},
$asc:null}
P.hU.prototype={
gu:function(){return this.e},
t:function(){var t,s
t=this.a
if(this.c!==t.d)H.I(new P.a4(t))
s=this.d
if(s===this.b){this.sai(null)
return!1}this.sai(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sai:function(a){this.e=a}}
P.fD.prototype={
L:function(a,b){var t
for(t=J.bn(b);t.t();)this.j(0,t.gu())},
l:function(a){return P.eE(this,"{","}")},
$isc:1,
$asc:null}
P.fC.prototype={}
P.bL.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.aA.prototype={}
P.L.prototype={}
P.bp.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bp))return!1
return this.a===b.a&&this.b===b.b},
W:function(a,b){return C.b.W(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aZ(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.lP(H.mg(this))
s=P.cb(H.me(this))
r=P.cb(H.ma(this))
q=P.cb(H.mb(this))
p=P.cb(H.md(this))
o=P.cb(H.mf(this))
n=P.lQ(H.mc(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isL:1,
$asL:function(){return[P.bp]}}
P.Q.prototype={$isL:1,
$asL:function(){return[P.Y]}}
P.aS.prototype={
aL:function(a,b){return C.b.aL(this.a,b.gdB())},
av:function(a,b){return C.b.av(this.a,b.gdB())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aS))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
W:function(a,b){return C.b.W(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.e5()
s=this.a
if(s<0)return"-"+new P.aS(0-s).l(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.e4().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.i(r)+":"+H.i(q)+"."+H.i(p)},
$isL:1,
$asL:function(){return[P.aS]}}
P.e4.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.u,args:[P.p]}}}
P.e5.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.u,args:[P.p]}}}
P.bb.prototype={}
P.c8.prototype={
l:function(a){return"Assertion failed"}}
P.dg.prototype={
l:function(a){return"Throw of null."}}
P.ah.prototype={
gaU:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaT:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.i(t)
q=this.gaU()+s+r
if(!this.a)return q
p=this.gaT()
o=P.j6(this.b)
return q+p+": "+H.i(o)}}
P.dj.prototype={
gaU:function(){return"RangeError"},
gaT:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.i(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.i(t)
else if(r>t)s=": Not in range "+H.i(t)+".."+H.i(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.i(t)}return s}}
P.eB.prototype={
gaU:function(){return"RangeError"},
gaT:function(){H.d(this.a)
if(J.l0(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.i(t)},
gk:function(a){return this.f}}
P.v.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.dw.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aI.prototype={
l:function(a){return"Bad state: "+this.a}}
P.a4.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.i(P.j6(t))+"."}}
P.dq.prototype={
l:function(a){return"Stack Overflow"},
$isbb:1}
P.dY.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hE.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.i(t)}}
P.e7.prototype={
l:function(a){return"Expando:"+H.i(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.I(P.jJ(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.ka(b,"expando$values")
return s==null?null:H.ka(s,t)}}
P.p.prototype={$isL:1,
$asL:function(){return[P.Y]}}
P.Z.prototype={
aJ:function(a,b){return new H.dx(this,b,[H.ao(this,"Z",0)])},
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gB(this)
for(s=0;t.t();)++s
return s},
ga8:function(a){var t,s
t=this.gB(this)
if(!t.t())throw H.f(H.eF())
s=t.gu()
if(t.t())throw H.f(H.m6())
return s},
v:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.f(P.lG("index"))
if(b<0)H.I(P.b_(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.t();){r=t.gu()
if(b===s)return r;++s}throw H.f(P.C(b,this,"index",null,s))},
l:function(a){return P.m4(this,"(",")")}}
P.d1.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aG.prototype={}
P.aY.prototype={
gw:function(a){return P.q.prototype.gw.call(this,this)},
l:function(a){return"null"}}
P.Y.prototype={$isL:1,
$asL:function(){return[P.Y]}}
P.q.prototype={constructor:P.q,$isq:1,
A:function(a,b){return this===b},
gw:function(a){return H.aZ(this)},
l:function(a){return H.fq(this)},
gD:function(a){return new H.aJ(H.iy(this),null)},
toString:function(){return this.l(this)}}
P.bN.prototype={}
P.u.prototype={$isL:1,
$asL:function(){return[P.u]}}
P.bO.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
gab:function(){return this.a}}
W.l.prototype={}
W.dN.prototype={
l:function(a){return String(a)},
$isa:1}
W.dO.prototype={
l:function(a){return String(a)},
$isa:1}
W.a3.prototype={$isq:1}
W.dR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isr:1,
$asr:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.c9.prototype={}
W.aQ.prototype={$isa:1,$isaQ:1}
W.ca.prototype={
cI:function(a,b,c){var t=this.dE(a,b,P.mS(c,null))
return t},
dE:function(a,b,c){return a.getContext(b,c)}}
W.dT.prototype={
aK:function(a){return P.it(a.getContextAttributes())}}
W.aR.prototype={$isa:1,
gk:function(a){return a.length}}
W.dW.prototype={$isa:1}
W.A.prototype={$isq:1}
W.ba.prototype={
bz:function(a,b){var t,s
t=$.$get$jR()
s=t[b]
if(typeof s==="string")return s
s=this.dR(a,b)
t[b]=s
return s},
dR:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lR()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.dX.prototype={}
W.dZ.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.e_.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gN:function(a){return a.z}}
W.cc.prototype={}
W.bq.prototype={
dV:function(a,b){return a.adoptNode(b)},
cJ:function(a,b){return a.getElementById(b)},
ci:function(a,b){return a.querySelector(b)}}
W.cd.prototype={$isa:1}
W.e0.prototype={
l:function(a){return String(a)}}
W.ce.prototype={
ea:function(a,b){return a.createHTMLDocument(b)}}
W.e1.prototype={
gaI:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gN:function(a){return a.z}}
W.cf.prototype={
gaI:function(a){return a.w},
gn:function(a){return a.x},
gp:function(a){return a.y},
gN:function(a){return a.z}}
W.cg.prototype={
l:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(this.ga6(a))+" x "+H.i(this.ga5(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.w(b)
if(!t.$isN)return!1
return a.left===t.gb5(b)&&a.top===t.gb9(b)&&this.ga6(a)===t.ga6(b)&&this.ga5(a)===t.ga5(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga6(a)
q=this.ga5(a)
return W.kz(W.b7(W.b7(W.b7(W.b7(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga5:function(a){return a.height},
gb5:function(a){return a.left},
gb9:function(a){return a.top},
ga6:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y},
$isN:1,
$asN:function(){}}
W.e2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
$isr:1,
$asr:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.e3.prototype={
gk:function(a){return a.length}}
W.a5.prototype={
gdY:function(a){return new W.hy(a)},
l:function(a){return a.localName},
P:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jZ
if(t==null){t=H.F([],[W.dd])
s=new W.de(t)
C.a.j(t,W.kx(null))
C.a.j(t,W.kA())
$.jZ=s
d=s}else d=t
t=$.jY
if(t==null){t=new W.dE(d)
$.jY=t
c=t}else{t.a=d
c=t}}if($.aD==null){t=document
s=t.implementation
s=(s&&C.I).ea(s,"")
$.aD=s
$.j5=s.createRange()
s=$.aD
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aD.head;(t&&C.J).V(t,r)}t=$.aD
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jq(s,"$isaQ")}t=$.aD
if(!!this.$isaQ)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aD.body;(t&&C.o).V(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.T,a.tagName)){t=$.j5;(t&&C.B).cK(t,q)
t=$.j5
p=(t&&C.B).e8(t,b)}else{q.innerHTML=b
p=$.aD.createDocumentFragment()
for(t=J.n(p);s=q.firstChild,s!=null;)t.V(p,s)}t=$.aD.body
if(q==null?t!=null:q!==t)J.lv(q)
c.bf(p)
C.m.dV(document,p)
return p},
e9:function(a,b,c){return this.P(a,b,c,null)},
cU:function(a,b,c,d){a.textContent=null
this.V(a,this.P(a,b,c,d))},
cT:function(a,b){return this.cU(a,b,null,null)},
ae:function(a,b){return a.getAttribute(b)},
dK:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isq:1,
$isa5:1,
$isj:1,
$ist:1,
geJ:function(a){return a.tagName}}
W.ir.prototype={
$1:function(a){return!!J.w(a).$isa5},
$S:function(){return{func:1,args:[,]}}}
W.k.prototype={$isq:1,$isk:1}
W.j.prototype={
du:function(a,b,c,d){return a.addEventListener(b,H.c2(c,1),!1)},
$isq:1,
$isj:1}
W.a6.prototype={$isq:1}
W.eq.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.er.prototype={
gk:function(a){return a.length}}
W.ev.prototype={
gk:function(a){return a.length}}
W.a7.prototype={$isq:1}
W.cl.prototype={}
W.ey.prototype={
gk:function(a){return a.length}}
W.bz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cm.prototype={}
W.ez.prototype={
J:function(a,b){return a.send(b)}}
W.bA.prototype={}
W.bB.prototype={$isa:1,$isa5:1,$isbB:1}
W.aW.prototype={$isq:1,$isk:1,$isaW:1}
W.eP.prototype={
l:function(a){return String(a)}}
W.eV.prototype={
gk:function(a){return a.length}}
W.eX.prototype={
eR:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.bE.prototype={}
W.a9.prototype={$isq:1}
W.eY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.R.prototype={$isq:1,$isk:1,$isR:1}
W.f7.prototype={$isa:1}
W.V.prototype={
ga8:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.f(new P.aI("No elements"))
if(s>1)throw H.f(new P.aI("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.n(s),p=0;p<r;++p)q.V(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l2(t,c,C.z.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.ck(t,t.length,-1,null,[H.ao(t,"B",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$asc:function(){return[W.t]},
$asd4:function(){return[W.t]},
$asb:function(){return[W.t]},
$asbL:function(){return[W.t]}}
W.t.prototype={
eC:function(a){var t=a.parentNode
if(t!=null)J.bm(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.cY(a):t},
V:function(a,b){return a.appendChild(b)},
dL:function(a,b){return a.removeChild(b)},
dM:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
$isj:1,
$ist:1,
gb6:function(a){return a.previousSibling}}
W.dc.prototype={
b7:function(a){return a.previousNode()}}
W.bK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.fg.prototype={$isa:1}
W.fj.prototype={
gk:function(a){return a.length}}
W.aa.prototype={$isq:1,
gk:function(a){return a.length}}
W.fl.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.fo.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.fp.prototype={
J:function(a,b){return a.send(b)}}
W.di.prototype={
e8:function(a,b){return a.createContextualFragment(b)},
cK:function(a,b){return a.selectNodeContents(b)}}
W.fz.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gN:function(a){return a.z}}
W.dl.prototype={
J:function(a,b){return a.send(b)}}
W.fB.prototype={
gk:function(a){return a.length}}
W.fF.prototype={$isa:1}
W.ab.prototype={$isq:1,$isj:1}
W.fG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.ac.prototype={$isq:1}
W.fI.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.ad.prototype={$isq:1,
gk:function(a){return a.length}}
W.fN.prototype={
h:function(a,b){return this.bG(a,b)},
aE:function(a,b){var t,s
for(t=0;!0;++t){s=this.dH(a,t)
if(s==null)return
b.$2(s,this.bG(a,s))}},
gk:function(a){return a.length},
bG:function(a,b){return a.getItem(b)},
dH:function(a,b){return a.key(b)}}
W.a_.prototype={$isq:1}
W.al.prototype={}
W.dr.prototype={
P:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
t=W.lS("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.V(s).L(0,new W.V(t))
return s}}
W.fV.prototype={
P:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.P(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga8(t)
r.toString
t=new W.V(r)
q=t.ga8(t)
s.toString
q.toString
new W.V(s).L(0,new W.V(q))
return s}}
W.fW.prototype={
P:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.P(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga8(t)
s.toString
r.toString
new W.V(s).L(0,new W.V(r))
return s}}
W.bP.prototype={$isbP:1}
W.ae.prototype={$isq:1,$isj:1}
W.a0.prototype={$isq:1,$isj:1}
W.fZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isr:1,
$asr:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.h_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.h0.prototype={
gk:function(a){return a.length}}
W.af.prototype={$isq:1}
W.b0.prototype={$isq:1,$isk:1,$isb0:1}
W.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.af]},
$isc:1,
$asc:function(){return[W.af]},
$isr:1,
$asr:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.h5.prototype={
gk:function(a){return a.length}}
W.bg.prototype={}
W.h7.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gN:function(a){return a.z}}
W.du.prototype={
b7:function(a){return a.previousNode()}}
W.aK.prototype={}
W.hc.prototype={
l:function(a){return String(a)},
$isa:1}
W.he.prototype={
gk:function(a){return a.length}}
W.hh.prototype={
gk:function(a){return a.length}}
W.hi.prototype={
J:function(a,b){return a.send(b)}}
W.b2.prototype={
gec:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.f(new P.v("deltaY is not supported"))},
$isq:1,
$isk:1,
$isR:1,
$isb2:1}
W.bS.prototype={
gdX:function(a){var t,s
t=P.Y
s=new P.ay(0,$.E,null,[t])
this.dD(a)
this.dN(a,W.kE(new W.hk(new P.ic(s,[t]))))
return s},
dN:function(a,b){return a.requestAnimationFrame(H.c2(b,1))},
dD:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hk.prototype={
$1:function(a){this.a.e4(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hl.prototype={$isa:1}
W.b3.prototype={$isa:1}
W.ht.prototype={
l:function(a){return"Rectangle ("+H.i(a.left)+", "+H.i(a.top)+") "+H.i(a.width)+" x "+H.i(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.w(b)
if(!t.$isN)return!1
s=a.left
r=t.gb5(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb9(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga6(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga5(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){var t,s,r,q
t=J.ar(a.left)
s=J.ar(a.top)
r=J.ar(a.width)
q=J.ar(a.height)
return W.kz(W.b7(W.b7(W.b7(W.b7(0,t),s),r),q))},
$isN:1,
$asN:function(){},
ga5:function(a){return a.height},
gb5:function(a){return a.left},
gb9:function(a){return a.top},
ga6:function(a){return a.width}}
W.dz.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]},
$isr:1,
$asr:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.hv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isr:1,
$asr:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hw.prototype={$isa:1}
W.hx.prototype={
ga5:function(a){return a.height},
ga6:function(a){return a.width},
gn:function(a){return a.x},
gp:function(a){return a.y}}
W.hO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isr:1,
$asr:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.hP.prototype={$isa:1}
W.dC.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.i6.prototype={$isa:1}
W.i9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$isr:1,
$asr:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.ia.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
$iso:1,
$aso:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isr:1,
$asr:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.ii.prototype={$isa:1}
W.ij.prototype={$isa:1}
W.hr.prototype={
aE:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.n(r),p=0;p<t.length;t.length===s||(0,H.G)(t),++p){o=t[p]
b.$2(o,q.ae(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.F([],[P.u])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.j(s,p.name)}return s},
gdF:function(){return this.a}}
W.hy.prototype={
h:function(a,b){return J.j1(this.a,b)},
gk:function(a){return this.gH(this).length}}
W.hB.prototype={
ey:function(a,b,c,d){return W.am(this.a,this.b,a,!1,H.aN(this,0))}}
W.ji.prototype={}
W.hC.prototype={
dT:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l1(r,this.c,t,!1)}},
dn:function(a,b,c,d,e){this.dT()}}
W.hD.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bV.prototype={
ac:function(a){return $.$get$ky().E(0,W.br(a))},
Z:function(a,b,c){var t,s,r
t=W.br(a)
s=$.$get$jj()
r=s.h(0,H.i(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dq:function(a){var t,s
t=$.$get$jj()
if(t.gaq(t)){for(s=0;s<262;++s)t.i(0,C.S[s],W.n_())
for(s=0;s<12;++s)t.i(0,C.r[s],W.n0())}}}
W.B.prototype={
gB:function(a){return new W.ck(a,this.gk(a),-1,null,[H.ao(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.de.prototype={
ac:function(a){return C.a.bS(this.a,new W.f9(a))},
Z:function(a,b,c){return C.a.bS(this.a,new W.f8(a,b,c))}}
W.f9.prototype={
$1:function(a){return a.ac(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f8.prototype={
$1:function(a){return a.Z(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bY.prototype={
ac:function(a){return this.a.E(0,W.br(a))},
Z:function(a,b,c){var t,s
t=W.br(a)
s=this.c
if(s.E(0,H.i(t)+"::"+b))return this.d.dW(c)
else if(s.E(0,"*::"+b))return this.d.dW(c)
else{s=this.b
if(s.E(0,H.i(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.i(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
ds:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aJ(0,new W.i7())
s=b.aJ(0,new W.i8())
this.b.L(0,t)
r=this.c
r.L(0,C.U)
r.L(0,s)}}
W.i7.prototype={
$1:function(a){return!C.a.E(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.i8.prototype={
$1:function(a){return C.a.E(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.id.prototype={
Z:function(a,b,c){if(this.d0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j1(a,"template")==="")return this.e.E(0,b)
return!1}}
W.ie.prototype={
$1:function(a){return"TEMPLATE::"+H.i(a)},
$S:function(){return{func:1,args:[,]}}}
W.ib.prototype={
ac:function(a){var t=J.w(a)
if(!!t.$isbM)return!1
t=!!t.$isK
if(t&&W.br(a)==="foreignObject")return!1
if(t)return!0
return!1},
Z:function(a,b,c){if(b==="is"||C.i.bi(b,"on"))return!1
return this.ac(a)}}
W.ck.prototype={
t:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbI(J.bl(this.a,t))
this.c=t
return!0}this.sbI(null)
this.c=s
return!1},
gu:function(){return this.d},
sbI:function(a){this.d=a}}
W.dd.prototype={}
W.i5.prototype={}
W.dE.prototype={
bf:function(a){new W.ig(this).$2(a,null)},
aC:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bm(t,a)}else J.bm(b,a)},
dQ:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.ll(a)
r=J.j1(s.gdF(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.T(n)}p="element unprintable"
try{p=J.aC(a)}catch(n){H.T(n)}try{o=W.br(a)
this.dP(a,b,t,p,o,s,r)}catch(n){if(H.T(n) instanceof P.ah)throw n
else{this.aC(a,b)
window
m="Removing corrupted element "+H.i(p)
if(typeof console!="undefined")console.warn(m)}}},
dP:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aC(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.ac(a)){this.aC(a,b)
window
t="Removing disallowed element <"+H.i(e)+"> from "+J.aC(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.Z(a,"is",g)){this.aC(a,b)
window
t="Removing disallowed type extension <"+H.i(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gH(f)
s=H.F(t.slice(0),[H.aN(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.n(t);r>=0;--r){p=s[r]
if(!this.a.Z(a,J.ly(p),q.ae(t,p))){window
o="Removing disallowed attribute <"+H.i(e)+" "+p+'="'+H.i(q.ae(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.ae(t,p)
q.dK(t,p)}}if(!!J.w(a).$isbP)this.bf(a.content)}}
W.ig.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dQ(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bm(r,a)}else J.bm(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lm(t)}catch(q){H.T(q)
r=t
J.bm(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.t,W.t]}}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.bw.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.bx.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cn.prototype={}
W.cH.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cq.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.co.prototype={$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cs.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cv.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cw.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cY.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.d_.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.d0.prototype={$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.af]},
$isb:1,
$asb:function(){return[W.af]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
P.is.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.u,,]}}}
P.hY.prototype={}
P.N.prototype={$asN:null}
P.dM.prototype={$isa:1}
P.aP.prototype={$isa:1}
P.e8.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.e9.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ea.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eb.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ec.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ed.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ee.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ef.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eg.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eh.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ei.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ej.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ek.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.el.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gN:function(a){return a.z}}
P.em.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.en.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y},
gN:function(a){return a.z}}
P.eo.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ep.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.es.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.eu.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ai.prototype={}
P.aF.prototype={$isa:1}
P.eA.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.at.prototype={$isq:1}
P.eK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return this.a1(a,b)},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.eS.prototype={$isa:1}
P.eT.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.au.prototype={$isq:1}
P.fa.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return this.a1(a,b)},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.fh.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fm.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fn.prototype={
gk:function(a){return a.length}}
P.fs.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.ft.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.bM.prototype={$isa:1,$isbM:1}
P.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return this.a1(a,b)},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.K.prototype={
P:function(a,b,c,d){var t,s,r,q,p,o
t=H.F([],[W.dd])
C.a.j(t,W.kx(null))
C.a.j(t,W.kA())
C.a.j(t,new W.ib())
c=new W.dE(new W.de(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.o).e9(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.V(q)
o=t.ga8(t)
for(t=J.n(p);r=o.firstChild,r!=null;)t.V(p,r)
return p},
$isa:1,
$isK:1}
P.fT.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.fU.prototype={$isa:1}
P.ds.prototype={}
P.fY.prototype={$isa:1}
P.bQ.prototype={
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.av.prototype={$isq:1}
P.h6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return this.a1(a,b)},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
a1:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.hd.prototype={$isa:1,
gn:function(a){return a.x},
gp:function(a){return a.y}}
P.hf.prototype={$isa:1}
P.hg.prototype={$isa:1}
P.bU.prototype={$isa:1}
P.i2.prototype={$isa:1}
P.i3.prototype={$isa:1}
P.i4.prototype={$isa:1}
P.cD.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cp.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.cu.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cN.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.au]},
$isb:1,
$asb:function(){return[P.au]}}
P.dQ.prototype={
gk:function(a){return a.length}}
P.fx.prototype={
bQ:function(a,b){return a.activeTexture(b)},
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
c4:function(a,b){return a.createShader(b)},
c6:function(a,b){return a.depthMask(b)},
c7:function(a,b){return a.disable(b)},
c8:function(a,b,c,d){return a.drawArrays(b,c,d)},
c9:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ca:function(a,b){return a.enable(b)},
cb:function(a,b){return a.enableVertexAttribArray(b)},
aK:function(a){return P.it(a.getContextAttributes())},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cp:function(a,b,c){return a.uniform1f(b,c)},
cq:function(a,b,c){return a.uniform1fv(b,c)},
cr:function(a,b,c){return a.uniform1i(b,c)},
cs:function(a,b,c){return a.uniform1iv(b,c)},
ct:function(a,b,c){return a.uniform2fv(b,c)},
cu:function(a,b,c){return a.uniform3fv(b,c)},
cv:function(a,b,c){return a.uniform4fv(b,c)},
cw:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cz:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cB:function(a,b){return a.useProgram(b)},
cD:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cE:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fy.prototype={
dZ:function(a,b){return a.beginTransformFeedback(b)},
e1:function(a,b){return a.bindVertexArray(b)},
eb:function(a){return a.createVertexArray()},
ei:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ej:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ek:function(a){return a.endTransformFeedback()},
eO:function(a,b,c,d){this.dS(a,b,c,d)
return},
dS:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eP:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bQ:function(a,b){return a.activeTexture(b)},
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
c4:function(a,b){return a.createShader(b)},
c6:function(a,b){return a.depthMask(b)},
c7:function(a,b){return a.disable(b)},
c8:function(a,b,c,d){return a.drawArrays(b,c,d)},
c9:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ca:function(a,b){return a.enable(b)},
cb:function(a,b){return a.enableVertexAttribArray(b)},
aK:function(a){return P.it(a.getContextAttributes())},
ba:function(a,b){return a.getProgramInfoLog(b)},
bb:function(a,b,c){return a.getProgramParameter(b,c)},
bc:function(a,b){return a.getShaderInfoLog(b)},
bd:function(a,b,c){return a.getShaderParameter(b,c)},
be:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bh:function(a,b,c){return a.shaderSource(b,c)},
bj:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cp:function(a,b,c){return a.uniform1f(b,c)},
cq:function(a,b,c){return a.uniform1fv(b,c)},
cr:function(a,b,c){return a.uniform1i(b,c)},
cs:function(a,b,c){return a.uniform1iv(b,c)},
ct:function(a,b,c){return a.uniform2fv(b,c)},
cu:function(a,b,c){return a.uniform3fv(b,c)},
cv:function(a,b,c){return a.uniform4fv(b,c)},
cw:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cz:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cB:function(a,b){return a.useProgram(b)},
cD:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cE:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ih.prototype={$isa:1}
P.fJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.f(P.C(b,a,null,null,null))
return P.it(this.dG(a,b))},
i:function(a,b,c){throw H.f(new P.v("Cannot assign element of immutable List."))},
v:function(a,b){return this.h(a,b)},
dG:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
P.cE.prototype={$isc:1,
$asc:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
P.cR.prototype={$isc:1,
$asc:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
B.iO.prototype={
$1:function(a){$.$get$iu().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aW]}}}
B.iP.prototype={
$1:function(a){$.$get$iu().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aW]}}}
B.iQ.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mQ=t
$.mR=C.b.ag(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jt=s-C.b.K(window.innerWidth,2)
$.kS=-(t-C.b.K(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.R]}}}
B.iR.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c5=t-C.b.K(window.innerWidth,2)
$.c6=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$c3().i(0,"right",!0)
else $.$get$c3().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.R]}}}
B.iS.prototype={
$1:function(a){if(a.button===2)$.$get$c3().i(0,"right",null)
else $.$get$c3().i(0,"left",null)},
$S:function(){return{func:1,args:[W.R]}}}
B.fb.prototype={
de:function(a,b,c,d){var t
d.toString
W.am(d,W.mZ().$1(d),new B.fc(this),!1,W.b2)
W.am(d,"mousemove",new B.fd(this),!1,W.R)
t=W.b0
W.am(d,"touchstart",new B.fe(),!1,t)
W.am(d,"touchmove",new B.ff(this),!1,t)
B.ne(null)}}
B.fc.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.gec(a)*r.k3
if(C.c.ag(r.fy,t)>0)r.fy=H.a1(C.c.ag(r.fy,t))}catch(q){s=H.T(q)
P.ap(s)}},
$S:function(){return{func:1,args:[W.b2]}}}
B.fd.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a1(t.go+C.b.ag($.jt,$.c5)*0.01)
s=t.id
r=$.c6
q=$.kS
t.id=H.a1(s+(r-q)*0.01)
$.c5=$.jt
$.c6=q}},
$S:function(){return{func:1,args:[W.R]}}}
B.fe.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.ad(t.clientX)
C.c.ad(t.clientY)
$.c5=s
C.c.ad(t.clientX)
$.c6=C.c.ad(t.clientY)},
$S:function(){return{func:1,args:[W.b0]}}}
B.ff.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.ad(t.clientX)
t=C.c.ad(t.clientY)
r=this.a
r.go=H.a1(r.go+C.b.ag(s,$.c5)*0.01)
r.id=H.a1(r.id+($.c6-t)*0.01)
$.c5=s
$.c6=t},
$S:function(){return{func:1,args:[W.b0]}}}
G.eZ.prototype={}
G.dv.prototype={
aa:function(a,b){var t=this.d
if(H.az(!t.G(0,a)))H.aL("uniform "+a+" already set")
t.i(0,a,b)},
br:function(){return this.d},
l:function(a){var t,s,r,q
t=H.F(["{"+new H.aJ(H.iy(this),null).l(0)+"}["+this.a+"]"],[P.u])
for(s=this.d,r=s.gH(s),r=r.gB(r);r.t();){q=r.gu()
C.a.j(t,H.i(q)+": "+H.i(s.h(0,q)))}return C.a.ar(t,"\n")}}
G.dS.prototype={}
G.dV.prototype={
cc:function(a,b,c){J.li(this.a,b)
if(c>0)J.lE(this.a,b,c)}}
G.ew.prototype={}
G.z.prototype={}
G.ci.prototype={}
G.aE.prototype={
O:function(a){var t=this.e
H.d(!t.G(0,a))
H.d(C.i.bi(a,"a"))
switch($.$get$W().h(0,a).a){case"vec2":t.i(0,a,H.F([],[T.m]))
break
case"vec3":t.i(0,a,H.F([],[T.h]))
break
case"vec4":t.i(0,a,H.F([],[T.D]))
break
case"float":t.i(0,a,H.F([],[P.Q]))
break
case"uvec4":t.i(0,a,H.F([],[[P.b,P.p]]))
break
default:if(H.az(!1))H.aL("unknown type for "+a)}},
bl:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.b,r=0;r<a;++r,t+=3)C.a.j(s,new G.z(t,t+1,t+2))},
ax:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.j(s,new G.ci(t,t+1,t+2,t+3))},
a4:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.G)(a),++r){q=a[r]
p=new T.h(new Float32Array(3))
p.q(q)
C.a.j(s,p)}},
d3:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.j(this.b,new G.z(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.q(q)
C.a.j(t,p)}},
U:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.G)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.m(o))}},
aP:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.G)(b),++q){p=b[q]
o=new T.h(new Float32Array(3))
o.q(p)
r.j(t,o)}},
d4:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.j(this.c,new G.ci(s,s+1,s+2,s+3))
for(r=0;r<4;++r){q=a[r]
p=new T.h(new Float32Array(3))
p.q(q)
C.a.j(t,p)}},
d9:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.F(r,[P.p])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.G)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.G)(s),++o){l=s[o]
n=l.a
q[p]=n
q[p+1]=l.b
k=l.c
q[p+2]=k
q[p+3]=n
q[p+4]=k
q[p+5]=l.d
p+=6}H.d(p===q.length)
return q},
bp:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=this.d
s=new Array(t.length)
s.fixed$length=Array
r=H.F(s,[T.h])
q=new T.h(new Float32Array(H.e(3)))
p=new T.h(new Float32Array(H.e(3)))
for(s=this.b,o=s.length,n=0;n<s.length;s.length===o||(0,H.G)(s),++n){m=s[n]
l=m.a
k=m.b
j=m.c
G.k9(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.q(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.q(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.q(p)
r[j]=l}for(s=this.c,o=s.length,n=0;n<s.length;s.length===o||(0,H.G)(s),++n){h=s[n]
l=h.a
k=h.b
j=h.c
G.k9(t[l],t[k],t[j],q,p)
i=new T.h(new Float32Array(3))
i.q(p)
r[l]=i
l=new T.h(new Float32Array(3))
l.q(p)
r[k]=l
l=new T.h(new Float32Array(3))
l.q(p)
r[j]=l
l=new T.h(new Float32Array(3))
l.q(p)
r[h.d]=l}this.e.i(0,"aNormal",r)},
a9:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new Array(this.d.length)
t.fixed$length=Array
s=H.F(t,[T.D])
r=new T.D(new Float32Array(H.e(4)))
r.T(1,0,0,0)
q=new T.D(new Float32Array(H.e(4)))
q.T(0,1,0,0)
p=new T.D(new Float32Array(H.e(4)))
p.T(0,0,1,0)
for(t=this.b,o=t.length,n=0;n<t.length;t.length===o||(0,H.G)(t),++n){m=t[n]
l=new T.D(new Float32Array(4))
l.q(r)
s[m.a]=l
l=new T.D(new Float32Array(4))
l.q(q)
s[m.b]=l
l=new T.D(new Float32Array(4))
l.q(p)
s[m.c]=l}k=new T.D(new Float32Array(H.e(4)))
k.T(1,0,0,1)
j=new T.D(new Float32Array(H.e(4)))
j.T(1,1,0,1)
i=new T.D(new Float32Array(H.e(4)))
i.T(0,1,0,1)
h=new T.D(new Float32Array(H.e(4)))
h.T(0,0,0,1)
for(t=this.c,o=t.length,n=0;n<t.length;t.length===o||(0,H.G)(t),++n){m=t[n]
l=new T.D(new Float32Array(4))
l.q(k)
s[m.a]=l
l=new T.D(new Float32Array(4))
l.q(j)
s[m.b]=l
l=new T.D(new Float32Array(4))
l.q(i)
s[m.c]=l
l=new T.D(new Float32Array(4))
l.q(h)
s[m.d]=l}this.e.i(0,"aCenter",s)},
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gB(r);r.t();){q=r.gu()
p=$.$get$W().h(0,q).a
C.a.j(t,H.i(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ar(t," ")}}
G.dt.prototype={}
G.bR.prototype={}
G.eU.prototype={}
G.eW.prototype={
bo:function(a,b,c){var t,s
if(C.i.aQ(a,0)===105){if(H.az(C.b.aO(b.length,c)===this.z))H.aL("ChangeAttribute "+this.z)}else{t=C.b.aO(b.length,c)
if(H.az(t===(this.ch.length/3|0)))H.aL("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dJ(t.a,34962,s)
J.jz(t.a,34962,b,35048)},
da:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ah:function(a,b,c){var t,s,r,q,p,o
t=J.jv(a,0)===105
if(t&&this.z===0)this.z=C.b.aO(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iY(r.a))
this.bo(a,b,c)
q=$.$get$W().h(0,a)
if(q==null)throw H.f("Unknown canonical "+a)
p=this.x
if(H.az(p.G(0,a)))H.aL("unexpected attribute "+a)
o=p.h(0,a)
J.dK(r.a,this.e)
r.cc(0,o,t?1:0)
s=s.h(0,a)
p=q.bq()
J.dJ(r.a,34962,s)
J.jH(r.a,o,p,5126,!1,0,0)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gH(t),r=r.gB(r);r.t();){q=r.gu()
C.a.j(s,H.i(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ar(s,"  ")},
saV:function(a){this.cx=a}}
G.fi.prototype={
d5:function(a,b){var t=C.b.cG(a,b)
if(this.z===t)return
this.z=t
this.bs()},
bs:function(){var t,s,r,q,p,o,n
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
br:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.h(new Float32Array(H.e(3)))
o.m(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.q(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.w(n)
r=!!s.$isD
k=r?s.gaI(n):1
if(!!s.$ish){j=s.gn(n)
m=s.gp(n)
l=s.gN(n)
n=j}else if(r){j=s.gn(n)
m=s.gp(n)
l=s.gN(n)
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
a3.q(this.db)
a3.cg(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fw.prototype={
dj:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gB(s);s.t();){q=s.gu()
if(!t.G(0,q))C.a.j(r,q)}for(t=this.x,s=new P.bW(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.t();){q=s.d
if(!t.E(0,q))C.a.j(r,q)}return r},
dm:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.t();){n=s.gu()
switch(J.jv(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.iM("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$W().h(0,n)
if(l==null)H.I("unknown "+n)
H.d(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j2(r.a,k,m)
else if(!!J.w(m).$isk3)J.lC(r.a,k,m)
break
case"float":if(l.c===0)J.lA(r.a,k,m)
else if(!!J.w(m).$iset)J.lB(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aB(m,"$isH").a
J.jG(r.a,k,!1,j)}else if(!!J.w(m).$iset)J.jG(r.a,k,!1,m)
else if(H.az(!1))H.aL("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aB(m,"$isa8").a
J.jF(r.a,k,!1,j)}else if(!!J.w(m).$iset)J.jF(r.a,k,!1,m)
else if(H.az(!1))H.aL("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jE(i,k,H.aB(m,"$isD").a)
else J.jE(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jD(i,k,H.aB(m,"$ish").a)
else J.jD(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jC(i,k,H.aB(m,"$ism").a)
else J.jC(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a7(33984,this.ch)
J.jw(r.a,j)
j=H.aB(m,"$ismn").dc()
J.jy(r.a,3553,j)
j=this.ch
J.j2(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a7(33984,this.ch)
J.jw(r.a,j)
j=H.aB(m,"$ismn").dc()
J.jy(r.a,34067,j)
j=this.ch
J.j2(r.a,k,j)
this.ch=this.ch+1
break
default:H.iM("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.J(m,!0)
i=r.a
if(j)J.c7(i,2929)
else J.iZ(i,2929)
break
case"cStencilFunc":H.aB(m,"$isdt")
j=m.a
i=r.a
if(j===1281)J.iZ(i,2960)
else{J.c7(i,2960)
i=m.b
h=m.c
J.lx(r.a,j,i,h)}break
case"cDepthWrite":J.lc(r.a,m)
break
case"cBlendEquation":H.aB(m,"$isbR")
j=m.a
i=r.a
if(j===1281)J.iZ(i,3042)
else{J.c7(i,3042)
i=m.b
h=m.c
J.l6(r.a,i,h)
J.l5(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aS(1000*(s-new P.bp(t,!1).a)).l(0)},
d8:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lD(t.a,this.r)
this.ch=0
this.z.a_(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.G)(b),++r){q=b[r]
this.dm(q.a,q.br())}s=this.Q
s.a_(0)
for(p=a.cy,p=p.gH(p),p=p.gB(p);p.t();)s.j(0,p.gu())
o=this.dj()
if(o.length!==0)P.ap("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.i(o)))
J.dK(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.da()
m=a.Q
l=a.z
if(n)J.l3(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.lg(k,s,p,m,0,l)
else J.lf(k,s,p,m,0)}else{m=t.a
if(l>1)J.le(m,s,0,p,l)
else J.ld(m,s,0,p)}if(n)J.lj(t.a)},
dg:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
r.i(0,n,J.jB(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
r.i(0,n,J.jB(q.a,p,n))}}}
G.y.prototype={
bq:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.dn.prototype={
d2:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<2;++r){q=a[r]
H.d($.$get$W().G(0,q))
H.d(!C.a.E(t,q))
C.a.j(t,q)
s.i(0,q,this.r);++this.r}C.a.aM(t)},
bm:function(a){var t,s,r
H.d(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.az($.$get$W().G(0,r)))H.aL("missing uniform "+r)
H.d(!C.a.E(t,r))
C.a.j(t,r)}C.a.aM(t)},
bn:function(a){var t,s,r
H.d(this.b==null)
for(t=this.e,s=0;s<1;++s){r=a[s]
H.d($.$get$W().G(0,r))
H.d(!C.a.E(t,r))
C.a.j(t,r)}C.a.aM(t)},
bt:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
m=$.$get$W().h(0,n)
C.a.j(q,"layout (location="+H.i(p.h(0,n))+") in "+m.a+" "+H.i(n)+";")}C.a.j(q,"")
l=r?"in":"out"
if(r)C.a.j(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.i(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.i(k)+";")}C.a.j(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.j(q,"uniform "+m.a+" "+H.i(k)+j+";")}C.a.j(q,"")
if(a)C.a.j(q,"void main(void) {")
C.a.L(q,b)
if(a)C.a.j(q,"}")
return C.a.ar(q,"\n")}}
G.fH.prototype={
a3:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
R.dk.prototype={
ck:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ap("size change "+H.i(s)+" "+H.i(r))
this.dx.d5(s,r)
this.z=s
this.Q=r}}
R.fL.prototype={
dr:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mw("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bz(r,"float")
r.setProperty(p,"left","")
p=C.u.bz(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.p.V(t,s)}return t},
dh:function(a,b,c){var t,s,r
if(a==null)throw H.f("no element provided")
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
J.iW(this.a,s)
r=this.dr(b,c,90,30)
this.d=r
J.iW(this.a,r)
t=t.createElement("div")
this.c=t
J.iW(this.a,t)}}
R.fM.prototype={
dl:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eN(s,2)+" fps"
t=this.c;(t&&C.p).cT(t,b)
r=C.b.K(30*C.w.e2(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.p).V(t,q)},
dk:function(a){return this.dl(a,"")}}
A.aH.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.dm.prototype={}
A.fv.prototype={
d7:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.l4(p.a,36160,t)
H.d(r>0&&q>0)
J.lF(p.a,this.x,this.y,r,q)
if(s!==0)J.l7(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.G)(t),++o){n=t[o]
m=n.e
C.a.j(m,new G.dv(P.M(),"transforms",!1,!0))
l=new T.H(new Float32Array(16))
l.F()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.G)(r),++k)A.kJ(p,r[k],l,a,m)
m.pop()}},
d6:function(){return this.d7(null)},
df:function(a,b,c){if(this.d==null)this.d=new G.ew(this.e,null,null,null,null)}}
B.fE.prototype={
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
$S:function(){return{func:1,v:true,args:[P.Q,T.h]}}}
A.iz.prototype={
$2:function(a,b){var t=536870911&a+J.ar(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.p,P.q]}}}
T.a8.prototype={
q:function(a){var t,s
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
l:function(a){return"[0] "+this.X(0).l(0)+"\n[1] "+this.X(1).l(0)+"\n[2] "+this.X(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.a8){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.dG(this.a)},
X:function(a){var t,s
t=new Float32Array(H.e(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.h(t)},
e7:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.q(a)
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
T.H.prototype={
af:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
q:function(a){var t,s
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
l:function(a){return"[0] "+this.X(0).l(0)+"\n[1] "+this.X(1).l(0)+"\n[2] "+this.X(2).l(0)+"\n[3] "+this.X(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.H){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.dG(this.a)},
X:function(a){var t,s
t=new Float32Array(H.e(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.D(t)},
F:function(){var t=this.a
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
cg:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.m.prototype={
l:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dG(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]}}
T.h.prototype={
m:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
q:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.h){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.dG(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gR())},
gR:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
C:function(a){var t,s,r
t=Math.sqrt(this.gR())
if(t===0)return 0
s=1/t
r=this.a
r[0]=r[0]*s
r[1]=r[1]*s
r[2]=r[2]*s
return t},
b4:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c5:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.h(new Float32Array(H.e(3)))
t.m(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
j:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
aD:function(a,b){var t,s
t=a.a
s=this.a
s[0]=s[0]+t[0]*b
s[1]=s[1]+t[1]*b
s[2]=s[2]+t[2]*b},
aw:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
a2:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gN:function(a){return this.a[2]}}
T.D.prototype={
T:function(a,b,c,d){var t=this.a
t[3]=d
t[2]=c
t[1]=b
t[0]=a},
q:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return H.i(t[0])+","+H.i(t[1])+","+H.i(t[2])+","+H.i(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.D){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dG(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gn:function(a){return this.a[0]},
gp:function(a){return this.a[1]},
gN:function(a){return this.a[2]},
gaI:function(a){return this.a[3]}}
O.iK.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.a=b3+0
s=this.c
s.go=H.a1(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.a1(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.a1(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.a1(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.a1(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.a1(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.a1(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.a1(C.c.e3(s.id,-1.4707963267948965,1.4707963267948965))
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.a3(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.k2
r=s.d.a
q=p.a
r[12]=r[12]+q[0]
r[13]=r[13]+q[1]
r[14]=r[14]+q[2]
q=r[12]
n=r[13]
m=r[14]
l=new T.h(new Float32Array(H.e(3)))
l.m(0,1,0)
k=s.e
j=k.a
j[0]=r[12]
j[1]=r[13]
j[2]=r[14]
j=new Float32Array(H.e(3))
i=new T.h(j)
i.q(k)
i.aw(p)
i.C(0)
h=l.c5(i)
h.C(0)
g=i.c5(h)
g.C(0)
p=h.b4(k)
f=g.b4(k)
k=i.b4(k)
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
r[14]=-k
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
r[12]=q
r[13]=n
r[14]=m
m=s.f
n=m.a
n[0]=r[2]
n[1]=r[6]
n[2]=r[10]
s=-s.k1
m=Math.sqrt(m.gR())
h=n[0]/m
g=n[1]/m
i=n[2]/m
m=Math.cos(s)
s=Math.sin(s)
a3=1-m
a4=h*h*a3+m
n=i*s
a5=h*g*a3-n
q=g*s
a6=h*i*a3+q
a7=g*h*a3+n
a8=g*g*a3+m
s=h*s
a9=g*i*a3-s
b0=i*h*a3-q
b1=i*g*a3+s
b2=i*i*a3+m
m=r[0]
s=r[4]
q=r[8]
n=r[1]
d=r[5]
b=r[9]
a=r[2]
a0=r[6]
a1=r[10]
a2=r[3]
e=r[7]
c=r[11]
r[0]=m*a4+s*a7+q*b0
r[1]=n*a4+d*a7+b*b0
r[2]=a*a4+a0*a7+a1*b0
r[3]=a2*a4+e*a7+c*b0
r[4]=m*a5+s*a8+q*b1
r[5]=n*a5+d*a8+b*b1
r[6]=a*a5+a0*a8+a1*b1
r[7]=a2*a5+e*a8+c*b1
r[8]=m*a6+s*a9+q*b2
r[9]=n*a6+d*a9+b*b2
r[10]=a*a6+a0*a9+a1*b2
r[11]=a2*a6+e*a9+c*b2
s=$.$get$kM().checked?$.$get$j3():$.$get$jK()
this.e.d.i(0,"cBlendEquation",s)
this.d.d6()
C.au.gdX(window).cn(this)
this.b.dk(t.a)},
$S:function(){return{func:1,v:true,args:[P.Y]}}}
J.a.prototype.cY=J.a.prototype.l
J.bC.prototype.d_=J.bC.prototype.l
P.Z.prototype.cZ=P.Z.prototype.aJ
W.a5.prototype.aN=W.a5.prototype.P
W.bY.prototype.d0=W.bY.prototype.Z;(function installTearOffs(){installTearOff(H.b5.prototype,"gex",0,0,0,null,["$0"],["aG"],0)
installTearOff(H.an.prototype,"gcL",0,0,0,null,["$1"],["M"],2)
installTearOff(H.b4.prototype,"gee",0,0,0,null,["$1"],["a0"],2)
installTearOff(P,"mM",1,0,0,null,["$1"],["mt"],1)
installTearOff(P,"mN",1,0,0,null,["$1"],["mu"],1)
installTearOff(P,"mO",1,0,0,null,["$1"],["mv"],1)
installTearOff(P,"kI",1,0,0,null,["$0"],["mK"],0)
installTearOff(P.ay.prototype,"gdw",0,0,0,null,["$2","$1"],["ay","dz"],5)
installTearOff(P,"mT",1,0,0,null,["$2"],["lM"],7)
installTearOff(W,"mZ",1,0,0,null,["$1"],["lT"],8)
installTearOff(W,"n_",1,0,0,null,["$4"],["mz"],4)
installTearOff(W,"n0",1,0,0,null,["$4"],["mA"],4)
installTearOff(W.dc.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(W.du.prototype,"gb6",0,1,0,null,["$0"],["b7"],3)
installTearOff(R.dk.prototype,"geF",0,0,0,null,["$1"],["ck"],6)
installTearOff(O,"l_",1,0,0,null,["$0"],["n8"],0)})();(function inheritance(){inherit(P.q,null)
var t=P.q
inherit(H.j9,t)
inherit(J.a,t)
inherit(J.dP,t)
inherit(P.Z,t)
inherit(H.d5,t)
inherit(P.d1,t)
inherit(H.cj,t)
inherit(H.b9,t)
inherit(H.hW,t)
inherit(H.b5,t)
inherit(H.hz,t)
inherit(H.b6,t)
inherit(H.hV,t)
inherit(H.hs,t)
inherit(H.bf,t)
inherit(H.h1,t)
inherit(H.as,t)
inherit(H.an,t)
inherit(H.b4,t)
inherit(H.fu,t)
inherit(H.h8,t)
inherit(P.bb,t)
inherit(H.dD,t)
inherit(H.aJ,t)
inherit(H.aj,t)
inherit(H.eL,t)
inherit(H.eN,t)
inherit(P.hu,t)
inherit(P.dA,t)
inherit(P.ay,t)
inherit(P.dy,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.b8,t)
inherit(P.ik,t)
inherit(P.fD,t)
inherit(P.hT,t)
inherit(P.bW,t)
inherit(P.bL,t)
inherit(P.x,t)
inherit(P.hU,t)
inherit(P.aA,t)
inherit(P.L,t)
inherit(P.bp,t)
inherit(P.Y,t)
inherit(P.aS,t)
inherit(P.dq,t)
inherit(P.hE,t)
inherit(P.e7,t)
inherit(P.b,t)
inherit(P.aG,t)
inherit(P.aY,t)
inherit(P.bN,t)
inherit(P.u,t)
inherit(P.bO,t)
inherit(W.dX,t)
inherit(W.hr,t)
inherit(W.bV,t)
inherit(W.B,t)
inherit(W.de,t)
inherit(W.bY,t)
inherit(W.ib,t)
inherit(W.ck,t)
inherit(W.dd,t)
inherit(W.i5,t)
inherit(W.dE,t)
inherit(P.hY,t)
inherit(G.eZ,t)
inherit(G.dV,t)
inherit(G.ew,t)
inherit(G.z,t)
inherit(G.ci,t)
inherit(G.aE,t)
inherit(G.dt,t)
inherit(G.bR,t)
inherit(G.y,t)
inherit(G.dn,t)
inherit(R.fL,t)
inherit(T.a8,t)
inherit(T.H,t)
inherit(T.m,t)
inherit(T.h,t)
inherit(T.D,t)
t=J.a
inherit(J.eG,t)
inherit(J.eH,t)
inherit(J.bC,t)
inherit(J.aT,t)
inherit(J.bc,t)
inherit(J.aU,t)
inherit(H.bF,t)
inherit(H.be,t)
inherit(W.j,t)
inherit(W.a3,t)
inherit(W.c9,t)
inherit(W.dT,t)
inherit(W.A,t)
inherit(W.cn,t)
inherit(W.dZ,t)
inherit(W.e_,t)
inherit(W.e0,t)
inherit(W.ce,t)
inherit(W.cf,t)
inherit(W.cg,t)
inherit(W.cw,t)
inherit(W.e3,t)
inherit(W.k,t)
inherit(W.cv,t)
inherit(W.a7,t)
inherit(W.ey,t)
inherit(W.cH,t)
inherit(W.eP,t)
inherit(W.eV,t)
inherit(W.a9,t)
inherit(W.ct,t)
inherit(W.f7,t)
inherit(W.dc,t)
inherit(W.cs,t)
inherit(W.fg,t)
inherit(W.bg,t)
inherit(W.aa,t)
inherit(W.cr,t)
inherit(W.al,t)
inherit(W.di,t)
inherit(W.ac,t)
inherit(W.cG,t)
inherit(W.ad,t)
inherit(W.fN,t)
inherit(W.a_,t)
inherit(W.cF,t)
inherit(W.h0,t)
inherit(W.af,t)
inherit(W.cx,t)
inherit(W.h5,t)
inherit(W.du,t)
inherit(W.hc,t)
inherit(W.hh,t)
inherit(W.ht,t)
inherit(W.co,t)
inherit(W.cC,t)
inherit(W.cB,t)
inherit(W.cA,t)
inherit(W.cq,t)
inherit(W.cy,t)
inherit(W.ii,t)
inherit(W.ij,t)
inherit(P.at,t)
inherit(P.cD,t)
inherit(P.au,t)
inherit(P.cu,t)
inherit(P.fm,t)
inherit(P.fn,t)
inherit(P.fs,t)
inherit(P.cp,t)
inherit(P.av,t)
inherit(P.cz,t)
inherit(P.hg,t)
inherit(P.dQ,t)
inherit(P.fx,t)
inherit(P.fy,t)
inherit(P.ih,t)
inherit(P.cE,t)
t=J.bC
inherit(J.fk,t)
inherit(J.b1,t)
inherit(J.aV,t)
inherit(J.j8,J.aT)
t=J.bc
inherit(J.d3,t)
inherit(J.d2,t)
t=P.Z
inherit(H.c,t)
inherit(H.d6,t)
inherit(H.dx,t)
t=H.c
inherit(H.bd,t)
inherit(H.eM,t)
inherit(H.e6,H.d6)
t=P.d1
inherit(H.eQ,t)
inherit(H.hj,t)
t=H.bd
inherit(H.bD,t)
inherit(P.eO,t)
t=H.b9
inherit(H.iT,t)
inherit(H.iU,t)
inherit(H.hR,t)
inherit(H.hA,t)
inherit(H.eC,t)
inherit(H.eD,t)
inherit(H.hX,t)
inherit(H.h2,t)
inherit(H.h3,t)
inherit(H.iV,t)
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.iH,t)
inherit(H.iI,t)
inherit(H.fX,t)
inherit(H.eI,t)
inherit(H.iA,t)
inherit(H.iB,t)
inherit(H.iC,t)
inherit(P.ho,t)
inherit(P.hn,t)
inherit(P.hp,t)
inherit(P.hq,t)
inherit(P.hF,t)
inherit(P.hJ,t)
inherit(P.hG,t)
inherit(P.hH,t)
inherit(P.hI,t)
inherit(P.hM,t)
inherit(P.hN,t)
inherit(P.hL,t)
inherit(P.hK,t)
inherit(P.fQ,t)
inherit(P.fR,t)
inherit(P.io,t)
inherit(P.i0,t)
inherit(P.i_,t)
inherit(P.i1,t)
inherit(P.eR,t)
inherit(P.e4,t)
inherit(P.e5,t)
inherit(W.ir,t)
inherit(W.hk,t)
inherit(W.hD,t)
inherit(W.f9,t)
inherit(W.f8,t)
inherit(W.i7,t)
inherit(W.i8,t)
inherit(W.ie,t)
inherit(W.ig,t)
inherit(P.is,t)
inherit(B.iO,t)
inherit(B.iP,t)
inherit(B.iQ,t)
inherit(B.iR,t)
inherit(B.iS,t)
inherit(B.fc,t)
inherit(B.fd,t)
inherit(B.fe,t)
inherit(B.ff,t)
inherit(B.fE,t)
inherit(A.iz,t)
inherit(O.iK,t)
t=H.hs
inherit(H.bh,t)
inherit(H.bZ,t)
t=P.bb
inherit(H.df,t)
inherit(H.eJ,t)
inherit(H.hb,t)
inherit(H.ha,t)
inherit(H.dU,t)
inherit(H.fA,t)
inherit(P.c8,t)
inherit(P.dg,t)
inherit(P.ah,t)
inherit(P.v,t)
inherit(P.dw,t)
inherit(P.aI,t)
inherit(P.a4,t)
inherit(P.dY,t)
t=H.fX
inherit(H.fK,t)
inherit(H.bo,t)
inherit(H.hm,P.c8)
t=H.be
inherit(H.f_,t)
inherit(H.d8,t)
t=H.d8
inherit(H.bH,t)
inherit(H.bG,t)
inherit(H.bI,H.bH)
inherit(H.d9,H.bI)
inherit(H.bJ,H.bG)
inherit(H.da,H.bJ)
t=H.d9
inherit(H.d7,t)
inherit(H.f0,t)
t=H.da
inherit(H.f1,t)
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.f5,t)
inherit(H.db,t)
inherit(H.f6,t)
inherit(P.ic,P.hu)
inherit(P.hZ,P.ik)
inherit(P.dB,H.aj)
inherit(P.fC,P.fD)
inherit(P.hQ,P.fC)
inherit(P.hS,P.hQ)
inherit(P.d4,P.bL)
t=P.Y
inherit(P.Q,t)
inherit(P.p,t)
t=P.ah
inherit(P.dj,t)
inherit(P.eB,t)
t=W.j
inherit(W.t,t)
inherit(W.bs,t)
inherit(W.dW,t)
inherit(W.er,t)
inherit(W.bA,t)
inherit(W.bE,t)
inherit(W.fp,t)
inherit(W.dl,t)
inherit(W.fF,t)
inherit(W.ab,t)
inherit(W.bt,t)
inherit(W.ae,t)
inherit(W.a0,t)
inherit(W.bu,t)
inherit(W.he,t)
inherit(W.hi,t)
inherit(W.bS,t)
inherit(W.hl,t)
inherit(W.b3,t)
inherit(W.i6,t)
t=W.t
inherit(W.a5,t)
inherit(W.aR,t)
inherit(W.bq,t)
inherit(W.cd,t)
inherit(W.hw,t)
t=W.a5
inherit(W.l,t)
inherit(P.K,t)
t=W.l
inherit(W.dN,t)
inherit(W.dO,t)
inherit(W.aQ,t)
inherit(W.ca,t)
inherit(W.cc,t)
inherit(W.ev,t)
inherit(W.cl,t)
inherit(W.bB,t)
inherit(W.fB,t)
inherit(W.dr,t)
inherit(W.fV,t)
inherit(W.fW,t)
inherit(W.bP,t)
inherit(W.hP,t)
inherit(W.bx,W.bs)
inherit(W.dR,W.bx)
inherit(W.ba,W.cn)
inherit(W.e1,W.cf)
inherit(W.d_,W.cw)
inherit(W.e2,W.d_)
inherit(W.a6,W.c9)
inherit(W.cY,W.cv)
inherit(W.eq,W.cY)
inherit(W.cS,W.cH)
inherit(W.bz,W.cS)
inherit(W.cm,W.bq)
inherit(W.ez,W.bA)
inherit(W.aK,W.k)
t=W.aK
inherit(W.aW,t)
inherit(W.R,t)
inherit(W.b0,t)
inherit(W.eX,W.bE)
inherit(W.cU,W.ct)
inherit(W.eY,W.cU)
inherit(W.V,P.d4)
inherit(W.cJ,W.cs)
inherit(W.bK,W.cJ)
t=W.bg
inherit(W.fj,t)
inherit(W.fz,t)
inherit(W.h7,t)
inherit(W.cP,W.cr)
inherit(W.fl,W.cP)
inherit(W.fo,W.al)
inherit(W.bw,W.bt)
inherit(W.fG,W.bw)
inherit(W.cZ,W.cG)
inherit(W.fI,W.cZ)
inherit(W.cI,W.cF)
inherit(W.fZ,W.cI)
inherit(W.bv,W.bu)
inherit(W.h_,W.bv)
inherit(W.cL,W.cx)
inherit(W.h4,W.cL)
inherit(W.b2,W.R)
inherit(W.d0,W.co)
inherit(W.dz,W.d0)
inherit(W.cV,W.cC)
inherit(W.hv,W.cV)
inherit(W.hx,W.cg)
inherit(W.cX,W.cB)
inherit(W.hO,W.cX)
inherit(W.cK,W.cA)
inherit(W.dC,W.cK)
inherit(W.cT,W.cq)
inherit(W.i9,W.cT)
inherit(W.cM,W.cy)
inherit(W.ia,W.cM)
inherit(W.hy,W.hr)
inherit(W.hB,P.fO)
inherit(W.ji,W.hB)
inherit(W.hC,P.fP)
inherit(W.id,W.bY)
inherit(P.N,P.hY)
t=P.K
inherit(P.aF,t)
inherit(P.aP,t)
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
inherit(P.ep,t)
inherit(P.es,t)
inherit(P.eS,t)
inherit(P.eT,t)
inherit(P.fh,t)
inherit(P.bM,t)
inherit(P.fU,t)
inherit(P.hf,t)
inherit(P.bU,t)
inherit(P.i2,t)
inherit(P.i3,t)
inherit(P.i4,t)
t=P.aF
inherit(P.dM,t)
inherit(P.eu,t)
inherit(P.ai,t)
inherit(P.eA,t)
inherit(P.fT,t)
inherit(P.ds,t)
inherit(P.hd,t)
inherit(P.cN,P.cD)
inherit(P.eK,P.cN)
inherit(P.cW,P.cu)
inherit(P.fa,P.cW)
inherit(P.ft,P.ai)
inherit(P.cQ,P.cp)
inherit(P.fS,P.cQ)
t=P.ds
inherit(P.fY,t)
inherit(P.bQ,t)
inherit(P.cO,P.cz)
inherit(P.h6,P.cO)
inherit(P.cR,P.cE)
inherit(P.fJ,P.cR)
t=G.eZ
inherit(G.fH,t)
inherit(G.dv,t)
inherit(G.eW,t)
inherit(G.fw,t)
inherit(A.fv,t)
inherit(A.dm,t)
t=G.fH
inherit(G.dS,t)
inherit(A.aH,t)
inherit(B.fb,G.dS)
t=G.dv
inherit(G.eU,t)
inherit(G.fi,t)
inherit(R.dk,A.fv)
inherit(R.fM,R.fL)
mixin(H.bG,P.x)
mixin(H.bH,P.x)
mixin(H.bI,H.cj)
mixin(H.bJ,H.cj)
mixin(P.bL,P.x)
mixin(W.bs,P.x)
mixin(W.bt,P.x)
mixin(W.bu,P.x)
mixin(W.bv,W.B)
mixin(W.bw,W.B)
mixin(W.bx,W.B)
mixin(W.cn,W.dX)
mixin(W.cH,P.x)
mixin(W.ct,P.x)
mixin(W.cq,P.x)
mixin(W.cA,P.x)
mixin(W.cB,P.x)
mixin(W.cC,P.x)
mixin(W.cF,P.x)
mixin(W.cG,P.x)
mixin(W.co,P.x)
mixin(W.cr,P.x)
mixin(W.cs,P.x)
mixin(W.cv,P.x)
mixin(W.cw,P.x)
mixin(W.cx,P.x)
mixin(W.cy,P.x)
mixin(W.cI,W.B)
mixin(W.cJ,W.B)
mixin(W.cK,W.B)
mixin(W.cU,W.B)
mixin(W.cV,W.B)
mixin(W.cS,W.B)
mixin(W.cT,W.B)
mixin(W.cY,W.B)
mixin(W.cZ,W.B)
mixin(W.d_,W.B)
mixin(W.d0,W.B)
mixin(W.cL,W.B)
mixin(W.cM,W.B)
mixin(W.cP,W.B)
mixin(W.cX,W.B)
mixin(P.cD,P.x)
mixin(P.cp,P.x)
mixin(P.cu,P.x)
mixin(P.cz,P.x)
mixin(P.cN,W.B)
mixin(P.cO,W.B)
mixin(P.cQ,W.B)
mixin(P.cW,W.B)
mixin(P.cE,P.x)
mixin(P.cR,W.B)})();(function constants(){C.o=W.aQ.prototype
C.H=W.ca.prototype
C.u=W.ba.prototype
C.p=W.cc.prototype
C.I=W.ce.prototype
C.J=W.cl.prototype
C.m=W.cm.prototype
C.K=J.a.prototype
C.a=J.aT.prototype
C.w=J.d2.prototype
C.b=J.d3.prototype
C.c=J.bc.prototype
C.i=J.aU.prototype
C.R=J.aV.prototype
C.V=H.d7.prototype
C.z=W.bK.prototype
C.A=J.fk.prototype
C.B=W.di.prototype
C.G=W.dr.prototype
C.t=J.b1.prototype
C.at=W.b2.prototype
C.au=W.bS.prototype
C.f=new P.hZ()
C.v=new P.aS(0)
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
C.S=H.F(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.u])
C.T=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.U=makeConstList([])
C.q=H.F(makeConstList(["bind","if","ref","repeat","syntax"]),[P.u])
C.r=H.F(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.u])
C.W=new G.y("vec3","vertex btangents",0)
C.d=new G.y("vec3","",0)
C.X=new G.y("vec4","delta from light",0)
C.n=new G.y("","",0)
C.C=new G.y("vec3","vertex coordinates",0)
C.Y=new G.y("vec3","vertex binormals",0)
C.D=new G.y("vec4","for wireframe",0)
C.Z=new G.y("vec4","per vertex color",0)
C.a_=new G.y("float","for normal maps",0)
C.j=new G.y("mat4","",0)
C.a1=new G.y("mat4","",4)
C.a0=new G.y("mat4","",128)
C.e=new G.y("float","",0)
C.a2=new G.y("float","",4)
C.a3=new G.y("float","depth for shadowmaps",0)
C.h=new G.y("sampler2D","",0)
C.a4=new G.y("float","for bump maps",0)
C.a5=new G.y("vec2","texture uvs",0)
C.a6=new G.y("float","time since program start in sec",0)
C.k=new G.y("vec2","",0)
C.a7=new G.y("samplerCube","",0)
C.l=new G.y("vec4","",0)
C.a8=new G.y("vec3","vertex normals",0)
C.a9=new G.y("sampler2DShadow","",0)
C.E=new G.y("vec3","per vertex color",0)
C.F=new G.y("mat3","",0)
C.aa=new G.y("vec3","vertex tangents",0)
C.ab=H.P("nj")
C.ac=H.P("nk")
C.ad=H.P("et")
C.ae=H.P("nl")
C.af=H.P("nm")
C.ag=H.P("k3")
C.ah=H.P("nn")
C.ai=H.P("k6")
C.aj=H.P("aY")
C.ak=H.P("u")
C.al=H.P("kr")
C.am=H.P("ks")
C.an=H.P("no")
C.ao=H.P("kt")
C.ap=H.P("aA")
C.aq=H.P("Q")
C.ar=H.P("p")
C.as=H.P("Y")})();(function staticFields(){$.kb="$cachedFunction"
$.kc="$cachedInvocation"
$.jO=null
$.jM=null
$.jk=!1
$.jo=null
$.kF=null
$.kU=null
$.iv=null
$.iD=null
$.jp=null
$.bi=null
$.c_=null
$.c0=null
$.jl=!1
$.E=C.f
$.k_=0
$.aD=null
$.j5=null
$.jZ=null
$.jY=null
$.jW=null
$.jV=null
$.jU=null
$.jT=null
$.mQ=0
$.mR=0
$.jt=0
$.kS=0
$.c5=0
$.c6=0
$.nf=!1
$.kL=0})();(function lazyInitializers(){lazy($,"jS","$get$jS",function(){return H.kP("_$dart_dartClosure")})
lazy($,"ja","$get$ja",function(){return H.kP("_$dart_js")})
lazy($,"k4","$get$k4",function(){return H.m2()})
lazy($,"k5","$get$k5",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.k_
$.k_=t+1
t="expando$key$"+t}return new P.e7(null,t,[P.p])})
lazy($,"kg","$get$kg",function(){return H.aw(H.h9({
toString:function(){return"$receiver$"}}))})
lazy($,"kh","$get$kh",function(){return H.aw(H.h9({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"ki","$get$ki",function(){return H.aw(H.h9(null))})
lazy($,"kj","$get$kj",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kn","$get$kn",function(){return H.aw(H.h9(void 0))})
lazy($,"ko","$get$ko",function(){return H.aw(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kl","$get$kl",function(){return H.aw(H.km(null))})
lazy($,"kk","$get$kk",function(){return H.aw(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kq","$get$kq",function(){return H.aw(H.km(void 0))})
lazy($,"kp","$get$kp",function(){return H.aw(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jh","$get$jh",function(){return P.ms()})
lazy($,"c1","$get$c1",function(){return[]})
lazy($,"jR","$get$jR",function(){return{}})
lazy($,"ky","$get$ky",function(){return P.jc(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jj","$get$jj",function(){return P.M()})
lazy($,"iu","$get$iu",function(){return P.k7(P.p,P.aA)})
lazy($,"c3","$get$c3",function(){return P.k7(P.u,P.aA)})
lazy($,"ke","$get$ke",function(){return new G.dt(1281,0,4294967295)})
lazy($,"j3","$get$j3",function(){return new G.bR(1281,1281,1281)})
lazy($,"jK","$get$jK",function(){return new G.bR(32774,770,771)})
lazy($,"W","$get$W",function(){return P.aX(["cBlendEquation",C.n,"cDepthWrite",C.n,"cDepthTest",C.n,"cStencilFunc",C.n,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"kZ","$get$kZ",function(){var t=new G.dn("WireframeV",null,[],[],[],[],0,P.M())
t.d2(["aPosition","aCenter"])
t.bn(["vCenter"])
t.bm(["uPerspectiveViewMatrix","uModelMatrix"])
H.d(t.b==null)
t.b=t.bt(!0,["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vCenter = aCenter;"],null)
return t})
lazy($,"kY","$get$kY",function(){var t=new G.dn("WireframeF",null,[],[],[],[],0,P.M())
t.bn(["vCenter"])
t.bm(["uColorAlpha","uColorAlpha2"])
H.d(t.b==null)
t.b=t.bt(!1,["// the 3 vertices of a Face3 (w == 0) have the centers:\n// (1, 0, 0, 0)) \n// (0, 1, 0, 0)\n// (0, 0, 1, 0)\nfloat edgeFactorFace3(vec3 center) {\n    vec3 d = fwidth(center);\n    vec3 a3 = smoothstep(vec3(0.0), d * 1.5, center);\n    return min(min(a3.x, a3.y), a3.z);\n}\n\n// the 4 vertices of a Face4 (w == 1) have the centers:\n// (1, 0, 0, 1) \n// (1, 1, 0, 1)\n// (0, 1, 0, 1)\n// (0, 0, 0, 1)\nfloat edgeFactorFace4(vec2 center) {\n    vec2 d = fwidth(center);\n    vec2 a2 = smoothstep(vec2(0.0), d * 1.5, center);\n    return min(a2.x, a2.y);\n}\n\nvoid main() {\n    float q;\n    if (vCenter.w == 0.0) {\n        q = edgeFactorFace3(vCenter.xyz);\n    } else {\n        q = min(edgeFactorFace4(vCenter.xy),\n                edgeFactorFace4(1.0 - vCenter.xy));\n    }\n    oFragColor = mix(uColorAlpha, uColorAlpha2, q);\n}\n"],null)
return t})
lazy($,"kv","$get$kv",function(){return[T.O(0,0,1),T.O(0,0,-1),T.O(0,1,0),T.O(0,-1,0),T.O(1,0,0),T.O(-1,0,0)]})
lazy($,"k1","$get$k1",function(){return[new G.z(0,11,5),new G.z(0,5,1),new G.z(0,1,7),new G.z(0,7,10),new G.z(0,10,11),new G.z(1,5,9),new G.z(5,11,4),new G.z(11,10,2),new G.z(10,7,6),new G.z(7,1,8),new G.z(3,9,4),new G.z(3,4,2),new G.z(3,2,6),new G.z(3,6,8),new G.z(3,8,9),new G.z(4,9,5),new G.z(2,4,11),new G.z(6,2,10),new G.z(8,6,7),new G.z(9,8,1)]})
lazy($,"kW","$get$kW",function(){return(1+P.ng(5))/2})
lazy($,"k2","$get$k2",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$kW()
s=T.O(-1,t,0)
s.C(0)
r=T.O(1,t,0)
r.C(0)
q=T.O(-1,-t,0)
q.C(0)
p=T.O(1,-t,0)
p.C(0)
o=T.O(0,-1,t)
o.C(0)
n=T.O(0,1,t)
n.C(0)
m=T.O(0,-1,-t)
m.C(0)
l=T.O(0,1,-t)
l.C(0)
k=T.O(t,0,-1)
k.C(0)
j=T.O(t,0,1)
j.C(0)
i=T.O(-t,0,-1)
i.C(0)
t=T.O(-t,0,1)
t.C(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"kM","$get$kM",function(){return H.aB(C.m.ci(W.mU(),"#opaque"),"$isbB")})})()
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
mangledGlobalNames:{p:"int",Q:"double",Y:"num",u:"String",aA:"bool",aY:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.aA,args:[W.a5,P.u,P.u,W.bV]},{func:1,v:true,args:[P.q],opt:[P.bN]},{func:1,v:true,args:[W.k]},{func:1,ret:P.p,args:[P.L,P.L]},{func:1,ret:P.u,args:[W.j]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bF,ArrayBufferView:H.be,DataView:H.f_,Float32Array:H.d7,Float64Array:H.f0,Int16Array:H.f1,Int32Array:H.f2,Int8Array:H.f3,Uint16Array:H.f4,Uint32Array:H.f5,Uint8ClampedArray:H.db,CanvasPixelArray:H.db,Uint8Array:H.f6,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLKeygenElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMenuItemElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,HTMLAnchorElement:W.dN,HTMLAreaElement:W.dO,AudioTrack:W.a3,AudioTrackList:W.dR,Blob:W.c9,HTMLBodyElement:W.aQ,HTMLCanvasElement:W.ca,CanvasRenderingContext2D:W.dT,CDATASection:W.aR,CharacterData:W.aR,Comment:W.aR,ProcessingInstruction:W.aR,Text:W.aR,CompositorWorker:W.dW,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.ba,MSStyleCSSProperties:W.ba,CSS2Properties:W.ba,DataTransferItemList:W.dZ,DeviceAcceleration:W.e_,HTMLDivElement:W.cc,XMLDocument:W.bq,Document:W.bq,DocumentFragment:W.cd,ShadowRoot:W.cd,DOMException:W.e0,DOMImplementation:W.ce,DOMPoint:W.e1,DOMPointReadOnly:W.cf,DOMRectReadOnly:W.cg,DOMStringList:W.e2,DOMTokenList:W.e3,Element:W.a5,AnimationEvent:W.k,AnimationPlayerEvent:W.k,ApplicationCacheErrorEvent:W.k,AutocompleteErrorEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceLightEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,GamepadEvent:W.k,GeofencingEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RelatedEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCIceCandidateEvent:W.k,RTCPeerConnectionIceEvent:W.k,SecurityPolicyViolationEvent:W.k,ServicePortConnectEvent:W.k,ServiceWorkerMessageEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BatteryManager:W.j,CanvasCaptureMediaStreamTrack:W.j,CrossOriginServiceWorkerClient:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,NetworkInformation:W.j,Notification:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationReceiver:W.j,PresentationRequest:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,ServicePortCollection:W.j,ServiceWorkerContainer:W.j,ServiceWorkerRegistration:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioContext:W.j,webkitAudioContext:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioSourceNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OfflineAudioContext:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.a6,FileList:W.eq,FileWriter:W.er,HTMLFormElement:W.ev,Gamepad:W.a7,HTMLHeadElement:W.cl,History:W.ey,HTMLCollection:W.bz,HTMLFormControlsCollection:W.bz,HTMLOptionsCollection:W.bz,HTMLDocument:W.cm,XMLHttpRequest:W.ez,XMLHttpRequestUpload:W.bA,XMLHttpRequestEventTarget:W.bA,HTMLInputElement:W.bB,KeyboardEvent:W.aW,Location:W.eP,MediaList:W.eV,MIDIOutput:W.eX,MIDIInput:W.bE,MIDIPort:W.bE,MimeType:W.a9,MimeTypeArray:W.eY,PointerEvent:W.R,MouseEvent:W.R,DragEvent:W.R,Navigator:W.f7,Attr:W.t,Node:W.t,NodeIterator:W.dc,NodeList:W.bK,RadioNodeList:W.bK,Path2D:W.fg,Perspective:W.fj,Plugin:W.aa,PluginArray:W.fl,PositionValue:W.fo,PresentationConnection:W.fp,Range:W.di,Rotation:W.fz,RTCDataChannel:W.dl,DataChannel:W.dl,HTMLSelectElement:W.fB,SharedWorker:W.fF,SourceBuffer:W.ab,SourceBufferList:W.fG,SpeechGrammar:W.ac,SpeechGrammarList:W.fI,SpeechRecognitionResult:W.ad,Storage:W.fN,CSSStyleSheet:W.a_,StyleSheet:W.a_,CalcLength:W.al,KeywordValue:W.al,LengthValue:W.al,NumberValue:W.al,SimpleLength:W.al,TransformValue:W.al,StyleValue:W.al,HTMLTableElement:W.dr,HTMLTableRowElement:W.fV,HTMLTableSectionElement:W.fW,HTMLTemplateElement:W.bP,TextTrack:W.ae,TextTrackCue:W.a0,VTTCue:W.a0,TextTrackCueList:W.fZ,TextTrackList:W.h_,TimeRanges:W.h0,Touch:W.af,TouchEvent:W.b0,TouchList:W.h4,TrackDefaultList:W.h5,Matrix:W.bg,Skew:W.bg,TransformComponent:W.bg,Translation:W.h7,TreeWalker:W.du,CompositionEvent:W.aK,FocusEvent:W.aK,TextEvent:W.aK,SVGZoomEvent:W.aK,UIEvent:W.aK,URL:W.hc,VideoTrackList:W.he,VTTRegionList:W.hh,WebSocket:W.hi,WheelEvent:W.b2,Window:W.bS,DOMWindow:W.bS,Worker:W.hl,CompositorWorkerGlobalScope:W.b3,DedicatedWorkerGlobalScope:W.b3,ServiceWorkerGlobalScope:W.b3,SharedWorkerGlobalScope:W.b3,WorkerGlobalScope:W.b3,ClientRect:W.ht,ClientRectList:W.dz,DOMRectList:W.dz,CSSRuleList:W.hv,DocumentType:W.hw,DOMRect:W.hx,GamepadList:W.hO,HTMLFrameSetElement:W.hP,NamedNodeMap:W.dC,MozNamedAttrMap:W.dC,ServiceWorker:W.i6,SpeechRecognitionResultList:W.i9,StyleSheetList:W.ia,WorkerLocation:W.ii,WorkerNavigator:W.ij,SVGAElement:P.dM,SVGAnimateElement:P.aP,SVGAnimateMotionElement:P.aP,SVGAnimateTransformElement:P.aP,SVGAnimationElement:P.aP,SVGSetElement:P.aP,SVGFEBlendElement:P.e8,SVGFEColorMatrixElement:P.e9,SVGFEComponentTransferElement:P.ea,SVGFECompositeElement:P.eb,SVGFEConvolveMatrixElement:P.ec,SVGFEDiffuseLightingElement:P.ed,SVGFEDisplacementMapElement:P.ee,SVGFEFloodElement:P.ef,SVGFEGaussianBlurElement:P.eg,SVGFEImageElement:P.eh,SVGFEMergeElement:P.ei,SVGFEMorphologyElement:P.ej,SVGFEOffsetElement:P.ek,SVGFEPointLightElement:P.el,SVGFESpecularLightingElement:P.em,SVGFESpotLightElement:P.en,SVGFETileElement:P.eo,SVGFETurbulenceElement:P.ep,SVGFilterElement:P.es,SVGForeignObjectElement:P.eu,SVGCircleElement:P.ai,SVGEllipseElement:P.ai,SVGLineElement:P.ai,SVGPathElement:P.ai,SVGPolygonElement:P.ai,SVGPolylineElement:P.ai,SVGGeometryElement:P.ai,SVGClipPathElement:P.aF,SVGDefsElement:P.aF,SVGGElement:P.aF,SVGSwitchElement:P.aF,SVGGraphicsElement:P.aF,SVGImageElement:P.eA,SVGLength:P.at,SVGLengthList:P.eK,SVGMarkerElement:P.eS,SVGMaskElement:P.eT,SVGNumber:P.au,SVGNumberList:P.fa,SVGPatternElement:P.fh,SVGPoint:P.fm,SVGPointList:P.fn,SVGRect:P.fs,SVGRectElement:P.ft,SVGScriptElement:P.bM,SVGStringList:P.fS,SVGDescElement:P.K,SVGDiscardElement:P.K,SVGFEDistantLightElement:P.K,SVGFEFuncAElement:P.K,SVGFEFuncBElement:P.K,SVGFEFuncGElement:P.K,SVGFEFuncRElement:P.K,SVGFEMergeNodeElement:P.K,SVGMetadataElement:P.K,SVGStopElement:P.K,SVGStyleElement:P.K,SVGTitleElement:P.K,SVGComponentTransferFunctionElement:P.K,SVGElement:P.K,SVGSVGElement:P.fT,SVGSymbolElement:P.fU,SVGTextContentElement:P.ds,SVGTextPathElement:P.fY,SVGTSpanElement:P.bQ,SVGTextElement:P.bQ,SVGTextPositioningElement:P.bQ,SVGTransform:P.av,SVGTransformList:P.h6,SVGUseElement:P.hd,SVGViewElement:P.hf,SVGViewSpec:P.hg,SVGLinearGradientElement:P.bU,SVGRadialGradientElement:P.bU,SVGGradientElement:P.bU,SVGCursorElement:P.i2,SVGFEDropShadowElement:P.i3,SVGMPathElement:P.i4,AudioBuffer:P.dQ,WebGLRenderingContext:P.fx,WebGL2RenderingContext:P.fy,WebGL2RenderingContextBase:P.ih,SQLResultSetRowList:P.fJ})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
W.bs.$nativeSuperclassTag="EventTarget"
W.bx.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kV(O.l_(),b)},[])
else (function(b){H.kV(O.l_(),b)})([])})})()