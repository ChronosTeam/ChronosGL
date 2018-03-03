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
a[c]=function(){a[c]=function(){H.nY(b)}
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
return d?function(e){if(t===null)t=H.jG(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jG(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jG(this,a,b,true,[],d).prototype
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
jw:function(a,b,c,d){if(!!a.$isc)return new H.eg(a,b,[c,d])
return new H.dc(a,b,[c,d])},
eS:function(){return new P.aI("No element")},
mM:function(){return new P.aI("Too many elements")},
mL:function(){return new P.aI("Too few elements")},
dv:function(a,b,c,d){if(c-b<=32)H.n_(a,b,c,d)
else H.mZ(a,b,c,d)},
n_:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ag(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.aq(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.j(a,q,s.h(a,p))
q=p}s.j(a,q,r)}},
mZ:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.M(t+1,6)
r=a3+s
q=a4-s
p=C.b.M(a3+a4,2)
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
j=h}t.j(a2,r,m)
t.j(a2,p,k)
t.j(a2,q,i)
t.j(a2,o,t.h(a2,a3))
t.j(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.I(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dv(a2,a3,g-2,a5)
H.dv(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.I(a5.$2(t.h(a2,g),l),0);)++g
for(;J.I(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dv(a2,g,f,a5)}else H.dv(a2,g,f,a5)},
c:function c(){},
bc:function bc(){},
db:function db(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dc:function dc(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b,c){this.a=a
this.b=b
this.$ti=c},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bE:function bE(a,b,c){this.a=a
this.b=b
this.$ti=c},
dF:function dF(a,b,c){this.a=a
this.b=b
this.$ti=c},
hy:function hy(a,b,c){this.a=a
this.b=b
this.$ti=c},
co:function co(){},
dO:function(a,b){var t=a.al(b)
if(!u.globalState.d.cy)u.globalState.f.as()
return t},
j_:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
lu:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.w(s).$isb)throw H.e(P.k1("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ib(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kv()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hP(P.jv(null,H.b5),0)
r=P.o
s.seW(new H.ak(0,null,null,null,null,null,0,[r,H.b4]))
s.seZ(new H.ak(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ia()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mG,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.nh)}if(u.globalState.x)return
s=u.globalState.a++
q=P.al(null,null,null,r)
p=new H.bf(0,null,!1)
o=new H.b4(s,new H.ak(0,null,null,null,null,null,0,[r,H.bf]),q,u.createNewIsolate(),p,new H.as(H.j4()),new H.as(H.j4()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
q.i(0,0)
o.bI(0,p)
u.globalState.e=o
u.globalState.z.j(0,s,o)
u.globalState.d=o
if(H.bl(a,{func:1,args:[,]}))o.al(new H.ja(t,a))
else if(H.bl(a,{func:1,args:[,,]}))o.al(new H.jb(t,a))
else o.al(a)
u.globalState.f.as()},
nh:function(a){var t=P.aF(["command","print","msg",a])
return new H.an(!0,P.bZ(null,P.o)).P(t)},
mI:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mJ()
return},
mJ:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.v("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.v('Cannot extract URI from "'+t+'"'))},
mG:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b3(!0,[]).a1(b.data)
s=J.ag(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nK(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b3(!0,[]).a1(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b3(!0,[]).a1(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.al(null,null,null,k)
i=new H.bf(0,null,!1)
h=new H.b4(s,new H.ak(0,null,null,null,null,null,0,[k,H.bf]),j,u.createNewIsolate(),i,new H.as(H.j4()),new H.as(H.j4()),!1,!1,[],P.al(null,null,null,null),null,null,!1,!0,P.al(null,null,null,null))
j.i(0,0)
h.bI(0,i)
u.globalState.f.a.Z(0,new H.b5(h,new H.eP(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.as()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.m7(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.as()
break
case"close":u.globalState.ch.aq(0,$.$get$kw().h(0,a))
a.terminate()
u.globalState.f.as()
break
case"log":H.mF(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aF(["command","print","msg",t])
k=new H.an(!0,P.bZ(null,P.o)).P(k)
s.toString
self.postMessage(k)}else P.ah(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mF:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aF(["command","log","msg",a])
r=new H.an(!0,P.bZ(null,P.o)).P(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.T(q)
t=H.aN(q)
s=P.cm(t)
throw H.e(s)}},
mH:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kB=$.kB+("_"+s)
$.kC=$.kC+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.K(0,["spawned",new H.bi(s,r),q,t.r])
r=new H.eQ(a,b,c,d,t)
if(e){t.c0(q,q)
u.globalState.f.a.Z(0,new H.b5(t,r,"start isolate"))}else r.$0()},
n0:function(a,b){var t=new H.hg(!0,!1,null)
t.dF(a,b)
return t},
ni:function(a){return new H.b3(!0,[]).a1(new H.an(!1,P.bZ(null,P.o)).P(a))},
ja:function ja(a,b){this.a=a
this.b=b},
jb:function jb(a,b){this.a=a
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
b4:function b4(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
i6:function i6(a,b){this.a=a
this.b=b},
hP:function hP(a,b){this.a=a
this.b=b},
hQ:function hQ(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(){},
eP:function eP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eQ:function eQ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hH:function hH(){},
bi:function bi(a,b){this.b=a
this.a=b},
ic:function ic(a,b){this.a=a
this.b=b},
c0:function c0(a,b,c){this.b=a
this.c=b
this.a=c},
bf:function bf(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(a,b){this.a=a
this.b=b},
as:function as(a){this.a=a},
an:function an(a,b){this.a=a
this.b=b},
b3:function b3(a,b){this.a=a
this.b=b},
nD:function(a){return u.types[a]},
nM:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.w(a).$isr},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.Y(a)
if(typeof t!=="string")throw H.e(H.S(a))
return t},
mY:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fK(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aY:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
dr:function(a){var t,s,r,q,p,o,n,m
t=J.w(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.B||!!J.w(a).$isb0){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.f.aV(q,0)===36)q=C.f.dd(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dQ(H.iO(a),0,null),u.mangledGlobalNames)},
fF:function(a){return"Instance of '"+H.dr(a)+"'"},
U:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mW:function(a){return a.b?H.U(a).getUTCFullYear()+0:H.U(a).getFullYear()+0},
mU:function(a){return a.b?H.U(a).getUTCMonth()+1:H.U(a).getMonth()+1},
mQ:function(a){return a.b?H.U(a).getUTCDate()+0:H.U(a).getDate()+0},
mR:function(a){return a.b?H.U(a).getUTCHours()+0:H.U(a).getHours()+0},
mT:function(a){return a.b?H.U(a).getUTCMinutes()+0:H.U(a).getMinutes()+0},
mV:function(a){return a.b?H.U(a).getUTCSeconds()+0:H.U(a).getSeconds()+0},
mS:function(a){return a.b?H.U(a).getUTCMilliseconds()+0:H.U(a).getMilliseconds()+0},
kA:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.S(a))
return a[b]},
R:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ai(!0,b,"index",null)
t=J.dW(a)
if(b<0||C.b.cW(b,t))return P.F(b,a,"index",null,t)
return P.fH(b,"index",null)},
S:function(a){return new P.ai(!0,a,null,null)},
l8:function(a){if(typeof a!=="number")throw H.e(H.S(a))
return a},
e:function(a){var t
if(a==null)a=new P.dp()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lw})
t.name=""}else t.toString=H.lw
return t},
lw:function(){return J.Y(this.dartException)},
J:function(a){throw H.e(a)},
D:function(a){throw H.e(new P.a4(a))},
ax:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hn(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
ho:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kM:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jt:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eW(a,s,t?null:b.receiver)},
T:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.b3(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jt(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dn(p,null))}}if(a instanceof TypeError){o=$.$get$kG()
n=$.$get$kH()
m=$.$get$kI()
l=$.$get$kJ()
k=$.$get$kN()
j=$.$get$kO()
i=$.$get$kL()
$.$get$kK()
h=$.$get$kQ()
g=$.$get$kP()
f=o.T(s)
if(f!=null)return t.$1(H.jt(s,f))
else{f=n.T(s)
if(f!=null){f.method="call"
return t.$1(H.jt(s,f))}else{f=m.T(s)
if(f==null){f=l.T(s)
if(f==null){f=k.T(s)
if(f==null){f=j.T(s)
if(f==null){f=i.T(s)
if(f==null){f=l.T(s)
if(f==null){f=h.T(s)
if(f==null){f=g.T(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dn(s,f==null?null:f.method))}}return t.$1(new H.hq(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dx()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.ai(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dx()
return a},
aN:function(a){var t
if(a==null)return new H.dM(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dM(a,null)},
nQ:function(a){if(a==null||typeof a!='object')return J.ar(a)
else return H.aY(a)},
nB:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.j(0,p,a[q])}return b},
nL:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dO(b,new H.iV(a))
case 1:return H.dO(b,new H.iW(a,d))
case 2:return H.dO(b,new H.iX(a,d,e))
case 3:return H.dO(b,new H.iY(a,d,e,f))
case 4:return H.dO(b,new H.iZ(a,d,e,f,g))}throw H.e(P.cm("Unsupported number of arguments for wrapped closure"))},
c4:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nL)
a.$identity=t
return t},
mo:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.w(c).$isb){t.$reflectionInfo=c
r=H.mY(t).r}else r=c
q=d?Object.create(new H.fY().constructor.prototype):Object.create(new H.bp(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.k9(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nD,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k6:H.jk
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.k9(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
ml:function(a,b,c,d){var t=H.jk
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
k9:function(a,b,c){var t,s,r,q
if(c)return H.mn(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.ml(s,b==null?r!=null:b!==r,t,b)
return q},
mm:function(a,b,c,d){var t,s
t=H.jk
s=H.k6
switch(b?-1:a){case 0:throw H.e(new H.fQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mn:function(a,b){var t,s,r,q
H.mk()
t=$.k5
if(t==null){t=H.k4("receiver")
$.k5=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mm(r,b==null?q!=null:b!==q,s,b)
return t},
jG:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.w(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.mo(a,b,t,!!d,e,f)},
jk:function(a){return a.a},
k6:function(a){return a.c},
mk:function(){var t=$.k7
if(t==null){t=H.k4("self")
$.k7=t}return t},
k4:function(a){var t,s,r,q,p
t=new H.bp("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
ob:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.ay(a,"String"))},
a1:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"double"))},
oa:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.ay(a,"num"))},
nv:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.ay(a,"bool"))},
nK:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.ay(a,"int"))},
nS:function(a,b){throw H.e(H.ay(a,b.substring(3)))},
nR:function(a,b){var t=J.ag(b)
throw H.e(H.k8(H.dr(a),t.bx(b,3,t.gl(b))))},
jJ:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.nS(a,b)},
ap:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else t=!0
if(t)return a
H.nR(a,b)},
o9:function(a){if(a==null)return a
if(!!J.w(a).$isb)return a
throw H.e(H.ay(a,"List"))},
lb:function(a){var t=J.w(a)
return"$S" in t?t.$S():null},
bl:function(a,b){var t
if(a==null)return!1
t=H.lb(a)
return t==null?!1:H.lh(t,b)},
o7:function(a,b){var t,s
if(a==null)return a
if($.jD)return a
$.jD=!0
try{if(H.bl(a,b))return a
t=H.aO(b,null)
s=H.ay(a,t)
throw H.e(s)}finally{$.jD=!1}},
ay:function(a,b){return new H.hp("type '"+H.dr(a)+"' is not a subtype of type '"+b+"'")},
k8:function(a,b){return new H.e3("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aA:function(a){if(!0===a)return!1
if(!!J.w(a).$isjn)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.ay(a,"bool"))},
aM:function(a){throw H.e(new H.hB(a))},
d:function(a){if(H.aA(a))throw H.e(new P.cb(null))},
nY:function(a){throw H.e(new P.e7(a))},
j4:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lf:function(a){return u.getIsolateTag(a)},
O:function(a){return new H.aJ(a,null)},
E:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iO:function(a){if(a==null)return
return a.$ti},
lg:function(a,b){return H.jN(a["$as"+H.f(b)],H.iO(a))},
ao:function(a,b,c){var t,s
t=H.lg(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aC:function(a,b){var t,s
t=H.iO(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aO:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dQ(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aO(t,b)
return H.nk(a,b)}return"unknown-reified-type"},
nk:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aO(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aO(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aO(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nA(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aO(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dQ:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bQ("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aO(o,c)}return p?"":"<"+s.k(0)+">"},
iP:function(a){var t,s
if(a instanceof H.b8){t=H.lb(a)
if(t!=null)return H.aO(t,null)}s=J.w(a).constructor.name
if(a==null)return s
return s+H.dQ(a.$ti,0,null)},
jN:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jK(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jK(a,null,b)
return b},
iG:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iO(a)
s=J.w(a)
if(s[b]==null)return!1
return H.l6(H.jN(s[d],t),c)},
dS:function(a,b,c,d){if(a==null)return a
if(H.iG(a,b,c,d))return a
throw H.e(H.k8(H.dr(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dQ(c,0,null),u.mangledGlobalNames)))},
o4:function(a,b,c,d){if(a==null)return a
if(H.iG(a,b,c,d))return a
throw H.e(H.ay(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dQ(c,0,null),u.mangledGlobalNames)))},
l6:function(a,b){var t,s,r,q,p
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
o5:function(a,b,c){return H.jK(a,b,H.lg(b,c))},
a2:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aX")return!0
if('func' in b)return H.lh(a,b)
if('func' in a)return b.name==="jn"||b.name==="q"
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
return H.l6(H.jN(o,t),r)},
l5:function(a,b,c){var t,s,r,q,p,o,n
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
nr:function(a,b){var t,s,r,q,p,o
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
lh:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.l5(r,q,!1))return!1
if(!H.l5(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a2(g,f)||H.a2(f,g)))return!1}}return H.nr(a.named,b.named)},
jK:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
oc:function(a){var t=$.jH
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
o8:function(a){return H.aY(a)},
o6:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nN:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.q))
t=$.jH.$1(a)
s=$.iL[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iU[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l4.$2(a,t)
if(t!=null){s=$.iL[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iU[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jL(r)
$.iL[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iU[t]=r
return r}if(p==="-"){o=H.jL(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lo(a,r)
if(p==="*")throw H.e(new P.dE(t))
if(u.leafTags[t]===true){o=H.jL(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lo(a,r)},
lo:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j3(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jL:function(a){return J.j3(a,!1,null,!!a.$isr)},
nP:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j3(t,!1,null,!!t.$isr)
else return J.j3(t,c,null,null)},
nI:function(){if(!0===$.jI)return
$.jI=!0
H.nJ()},
nJ:function(){var t,s,r,q,p,o,n,m
$.iL=Object.create(null)
$.iU=Object.create(null)
H.nH()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.lq.$1(p)
if(o!=null){n=H.nP(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nH:function(){var t,s,r,q,p,o,n
t=C.F()
t=H.bk(C.C,H.bk(C.H,H.bk(C.r,H.bk(C.r,H.bk(C.G,H.bk(C.D,H.bk(C.E(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jH=new H.iR(p)
$.l4=new H.iS(o)
$.lq=new H.iT(n)},
bk:function(a,b){return a(b)||b},
nX:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
fK:function fK(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hn:function hn(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dn:function dn(a,b){this.a=a
this.b=b},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
hq:function hq(a){this.a=a},
jc:function jc(a){this.a=a},
dM:function dM(a,b){this.a=a
this.b=b},
iV:function iV(a){this.a=a},
iW:function iW(a,b){this.a=a
this.b=b},
iX:function iX(a,b,c){this.a=a
this.b=b
this.c=c},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b8:function b8(){},
ha:function ha(){},
fY:function fY(){},
bp:function bp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hp:function hp(a){this.a=a},
e3:function e3(a){this.a=a},
fQ:function fQ(a){this.a=a},
hB:function hB(a){this.a=a},
aJ:function aJ(a,b){this.a=a
this.b=b},
ak:function ak(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eV:function eV(a){this.a=a},
eZ:function eZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
f_:function f_(a,b){this.a=a
this.$ti=b},
f0:function f0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iR:function iR(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
j:function(a){return a},
iC:function(a){var t,s,r
if(!!J.w(a).$isp)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bG:function bG(){},
bd:function bd(){},
fe:function fe(){},
dg:function dg(){},
dh:function dh(){},
di:function di(){},
df:function df(){},
ff:function ff(){},
fg:function fg(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
dj:function dj(){},
fl:function fl(){},
bH:function bH(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
nA:function(a){var t=H.E(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
dR:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d9.prototype
return J.d8.prototype}if(typeof a=="string")return J.aU.prototype
if(a==null)return J.eU.prototype
if(typeof a=="boolean")return J.eT.prototype
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.q)return a
return J.iN(a)},
j3:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iN:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jI==null){H.nI()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.dE("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$js()]
if(p!=null)return p
p=H.nN(a)
if(p!=null)return p
if(typeof a=="function")return C.I
s=Object.getPrototypeOf(a)
if(s==null)return C.v
if(s===Object.prototype)return C.v
if(typeof q=="function"){Object.defineProperty(q,$.$get$js(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
ag:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.q)return a
return J.iN(a)},
c6:function(a){if(a==null)return a
if(a.constructor==Array)return J.aT.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.q)return a
return J.iN(a)},
ld:function(a){if(typeof a=="number")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b0.prototype
return a},
nC:function(a){if(typeof a=="number")return J.bb.prototype
if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b0.prototype
return a},
le:function(a){if(typeof a=="string")return J.aU.prototype
if(a==null)return a
if(!(a instanceof P.q))return J.b0.prototype
return a},
m:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aV.prototype
return a}if(a instanceof P.q)return a
return J.iN(a)},
I:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).B(a,b)},
aq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.ld(a).av(a,b)},
lx:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.ld(a).aK(a,b)},
bm:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nM(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ag(a).h(a,b)},
ly:function(a,b,c,d){return J.m(a).dP(a,b,c,d)},
jO:function(a,b){return J.le(a).aV(a,b)},
lz:function(a,b,c,d){return J.m(a).e1(a,b,c,d)},
bn:function(a,b){return J.m(a).e7(a,b)},
lA:function(a,b,c){return J.m(a).e8(a,b,c)},
jP:function(a,b){return J.m(a).c_(a,b)},
jd:function(a,b){return J.m(a).U(a,b)},
jQ:function(a,b,c){return J.m(a).c2(a,b,c)},
lB:function(a,b){return J.m(a).el(a,b)},
dT:function(a,b,c){return J.m(a).c3(a,b,c)},
lC:function(a,b,c){return J.m(a).c4(a,b,c)},
c9:function(a,b,c){return J.m(a).c5(a,b,c)},
dU:function(a,b){return J.m(a).eo(a,b)},
lD:function(a,b){return J.m(a).c6(a,b)},
lE:function(a,b,c){return J.m(a).c7(a,b,c)},
jR:function(a,b,c,d){return J.m(a).c8(a,b,c,d)},
lF:function(a,b){return J.c6(a).c9(a,b)},
lG:function(a,b,c,d,e){return J.m(a).ca(a,b,c,d,e)},
lH:function(a,b){return J.nC(a).V(a,b)},
je:function(a,b,c){return J.ag(a).es(a,b,c)},
dV:function(a){return J.m(a).cc(a)},
lI:function(a){return J.m(a).cd(a)},
lJ:function(a){return J.m(a).cf(a)},
jS:function(a){return J.m(a).ez(a)},
lK:function(a,b){return J.m(a).ci(a,b)},
jf:function(a,b){return J.m(a).cj(a,b)},
lL:function(a,b){return J.m(a).eG(a,b)},
lM:function(a,b,c,d){return J.m(a).ck(a,b,c,d)},
lN:function(a,b,c,d,e){return J.m(a).eH(a,b,c,d,e)},
lO:function(a,b,c,d,e){return J.m(a).cl(a,b,c,d,e)},
lP:function(a,b,c,d,e,f){return J.m(a).eI(a,b,c,d,e,f)},
lQ:function(a,b){return J.c6(a).u(a,b)},
ca:function(a,b){return J.m(a).cm(a,b)},
lR:function(a,b){return J.m(a).cn(a,b)},
lS:function(a){return J.m(a).eJ(a)},
lT:function(a,b){return J.c6(a).aD(a,b)},
lU:function(a){return J.m(a).gek(a)},
ar:function(a){return J.w(a).gA(a)},
bo:function(a){return J.c6(a).gv(a)},
dW:function(a){return J.ag(a).gl(a)},
lV:function(a){return J.m(a).gcu(a)},
lW:function(a){return J.m(a).gbc(a)},
lX:function(a){return J.w(a).gC(a)},
lY:function(a){return J.m(a).gf7(a)},
lZ:function(a){return J.m(a).gau(a)},
jg:function(a){return J.m(a).gm(a)},
jh:function(a){return J.m(a).gn(a)},
jT:function(a){return J.m(a).gN(a)},
ji:function(a,b){return J.m(a).aa(a,b)},
m_:function(a){return J.m(a).aJ(a)},
m0:function(a){return J.m(a).bk(a)},
m1:function(a,b){return J.m(a).bl(a,b)},
m2:function(a,b,c){return J.m(a).bm(a,b,c)},
jU:function(a,b,c){return J.m(a).bp(a,b,c)},
m3:function(a,b){return J.m(a).cq(a,b)},
m4:function(a,b){return J.c6(a).cs(a,b)},
m5:function(a,b,c){return J.m(a).cv(a,b,c)},
m6:function(a){return J.c6(a).f1(a)},
m7:function(a,b){return J.m(a).K(a,b)},
m8:function(a,b,c,d){return J.m(a).bv(a,b,c,d)},
m9:function(a,b,c,d,e,f,g){return J.m(a).cC(a,b,c,d,e,f,g)},
ma:function(a,b,c,d){return J.m(a).cD(a,b,c,d)},
jV:function(a,b,c,d){return J.m(a).cE(a,b,c,d)},
mb:function(a){return J.le(a).fa(a)},
Y:function(a){return J.w(a).k(a)},
mc:function(a,b,c,d){return J.m(a).fc(a,b,c,d)},
md:function(a,b,c){return J.m(a).cH(a,b,c)},
me:function(a,b,c){return J.m(a).cI(a,b,c)},
jj:function(a,b,c){return J.m(a).cJ(a,b,c)},
mf:function(a,b,c){return J.m(a).cK(a,b,c)},
jW:function(a,b,c){return J.m(a).cL(a,b,c)},
jX:function(a,b,c){return J.m(a).cM(a,b,c)},
jY:function(a,b,c){return J.m(a).cN(a,b,c)},
jZ:function(a,b,c,d){return J.m(a).cO(a,b,c,d)},
k_:function(a,b,c,d){return J.m(a).cP(a,b,c,d)},
mg:function(a,b){return J.m(a).cR(a,b)},
mh:function(a,b,c){return J.m(a).fd(a,b,c)},
k0:function(a,b,c,d,e,f,g){return J.m(a).cS(a,b,c,d,e,f,g)},
mi:function(a,b,c,d,e){return J.m(a).cT(a,b,c,d,e)},
a:function a(){},
eT:function eT(){},
eU:function eU(){},
bD:function bD(){},
fz:function fz(){},
b0:function b0(){},
aV:function aV(){},
aT:function aT(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
e_:function e_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bb:function bb(){},
d9:function d9(){},
d8:function d8(){},
aU:function aU(){}},P={
n6:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.ns()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c4(new P.hD(t),1)).observe(s,{childList:true})
return new P.hC(t,s,r)}else if(self.setImmediate!=null)return P.nt()
return P.nu()},
n7:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c4(new P.hE(a),0))},
n8:function(a){++u.globalState.f.b
self.setImmediate(H.c4(new P.hF(a),0))},
n9:function(a){P.jz(C.q,a)},
nn:function(a,b){if(H.bl(a,{func:1,args:[P.aX,P.aX]})){b.toString
return a}else{b.toString
return a}},
nc:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.az))
H.d(b.a===0)
b.a=1
try{a.cG(new P.hW(b),new P.hX(b))}catch(r){t=H.T(r)
s=H.aN(r)
P.nT(new P.hY(b,t,s))}},
kW:function(a,b){var t,s,r,q
H.d(b.a<=1)
for(;t=a.a,s=t===2,s;){H.d(s)
a=a.c}s=b.a
if(t>=4){H.d(s<4)
r=b.c
b.c=null
q=b.aj(r)
H.d(b.a<4)
H.d(a.a>=4)
b.a=a.a
b.c=a.c
P.bV(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bT(q)}},
bV:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.iD(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bV(t.a,b)}s=t.a
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
P.iD(null,null,p,o,s)
return}s=$.G
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.G
H.d(l==null?s!=null:l!==s)
j=$.G
$.G=l
i=j}else i=null
s=b.c
if(s===8)new P.i1(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i0(r,b,m).$0()}else if((s&2)!==0)new P.i_(t,r,b).$0()
if(i!=null){H.d(!0)
$.G=i}s=r.b
if(!!J.w(s).$iseH){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.aj(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.kW(s,o)
return}}g=b.b
H.d(g.a<4)
h=g.c
g.c=null
b=g.aj(h)
s=r.a
p=r.b
o=g.a>=4
if(!s){H.d(!o)
g.a=4
g.c=p}else{H.d(!o)
g.a=8
g.c=p}t.a=g
s=g}},
nm:function(){var t,s
for(;t=$.bj,t!=null;){$.c2=null
s=t.b
$.bj=s
if(s==null)$.c1=null
t.a.$0()}},
nq:function(){$.jE=!0
try{P.nm()}finally{$.c2=null
$.jE=!1
if($.bj!=null)$.$get$jB().$1(P.l7())}},
l2:function(a){var t=new P.dG(a,null)
if($.bj==null){$.c1=t
$.bj=t
if(!$.jE)$.$get$jB().$1(P.l7())}else{$.c1.b=t
$.c1=t}},
np:function(a){var t,s,r
t=$.bj
if(t==null){P.l2(a)
$.c2=$.c1
return}s=new P.dG(a,null)
r=$.c2
if(r==null){s.b=t
$.c2=s
$.bj=s}else{s.b=r.b
r.b=s
$.c2=s
if(s.b==null)$.c1=s}},
nT:function(a){var t=$.G
if(C.d===t){P.iF(null,null,C.d,a)
return}t.toString
P.iF(null,null,t,t.b7(a))},
n1:function(a,b){var t=$.G
if(t===C.d){t.toString
return P.jz(a,b)}return P.jz(a,t.b7(b))},
jz:function(a,b){var t=C.b.M(a.a,1000)
return H.n0(t<0?0:t,b)},
jA:function(a){var t,s
H.d(a!=null)
t=$.G
H.d(a==null?t!=null:a!==t)
s=$.G
$.G=a
return s},
iD:function(a,b,c,d,e){var t={}
t.a=d
P.np(new P.iE(t,e))},
l0:function(a,b,c,d){var t,s
if($.G===c)return d.$0()
t=P.jA(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.G=s}},
l1:function(a,b,c,d,e){var t,s
if($.G===c)return d.$1(e)
t=P.jA(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.G=s}},
no:function(a,b,c,d,e,f){var t,s
if($.G===c)return d.$2(e,f)
t=P.jA(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.G=s}},
iF:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.b7(d):c.em(d)
P.l2(d)},
hD:function hD(a){this.a=a},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hJ:function hJ(){},
iu:function iu(a,b){this.a=a
this.$ti=b},
dJ:function dJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hV:function hV(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
hW:function hW(a){this.a=a},
hX:function hX(a){this.a=a},
hY:function hY(a,b,c){this.a=a
this.b=b
this.c=c},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a){this.a=a},
i0:function i0(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
dG:function dG(a,b){this.a=a
this.b=b},
h1:function h1(){},
h3:function h3(a){this.a=a},
h4:function h4(a,b){this.a=a
this.b=b},
h2:function h2(){},
b7:function b7(a,b){this.a=a
this.b=b},
iB:function iB(){},
iE:function iE(a,b){this.a=a
this.b=b},
ie:function ie(){},
ih:function ih(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ii:function ii(a,b){this.a=a
this.b=b},
ky:function(a,b){return new H.ak(0,null,null,null,null,null,0,[a,b])},
H:function(){return new H.ak(0,null,null,null,null,null,0,[null,null])},
aF:function(a){return H.nB(a,new H.ak(0,null,null,null,null,null,0,[null,null]))},
bZ:function(a,b){return new P.dK(0,null,null,null,null,null,0,[a,b])},
ng:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
mK:function(a,b,c){var t,s
if(P.jF(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c3()
C.a.i(s,a)
try{P.nl(a,t)}finally{H.d(C.a.gaG(s)===a)
s.pop()}s=P.kF(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eR:function(a,b,c){var t,s,r
if(P.jF(a))return b+"..."+c
t=new P.bQ(b)
s=$.$get$c3()
C.a.i(s,a)
try{r=t
r.a=P.kF(r.ga8(),a,", ")}finally{H.d(C.a.gaG(s)===a)
s.pop()}s=t
s.a=s.ga8()+c
s=t.ga8()
return s.charCodeAt(0)==0?s:s},
jF:function(a){var t,s
for(t=0;s=$.$get$c3(),t<s.length;++t)if(a===s[t])return!0
return!1},
nl:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gv(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.f(t.gt())
C.a.i(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gt();++r
if(!t.p()){if(r<=4){C.a.i(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gt();++r
H.d(r<100)
for(;t.p();n=m,m=l){l=t.gt();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.i(b,"...")
return}}o=H.f(n)
p=H.f(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.i(b,k)
C.a.i(b,o)
C.a.i(b,p)},
al:function(a,b,c,d){return new P.i7(0,null,null,null,null,null,0,[d])},
ju:function(a,b){var t,s
t=P.al(null,null,null,b)
for(s=J.bo(a);s.p();)t.i(0,s.gt())
return t},
mO:function(a){var t,s,r
t={}
if(P.jF(a))return"{...}"
s=new P.bQ("")
try{C.a.i($.$get$c3(),a)
r=s
r.a=r.ga8()+"{"
t.a=!0
a.aD(0,new P.f5(t,s))
t=s
t.a=t.ga8()+"}"}finally{t=$.$get$c3()
H.d(C.a.gaG(t)===a)
t.pop()}t=s.ga8()
return t.charCodeAt(0)==0?t:t},
jv:function(a,b){var t=new P.f1(null,0,0,0,[b])
t.dv(a,b)
return t},
dK:function dK(a,b,c,d,e,f,g,h){var _=this
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
bY:function bY(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i5:function i5(){},
da:function da(){},
y:function y(){},
f5:function f5(a,b){this.a=a
this.b=b},
f1:function f1(a,b,c,d,e){var _=this
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
fS:function fS(){},
fR:function fR(){},
bM:function bM(){},
kF:function(a,b,c){var t=J.bo(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gt())
while(t.p())}else{a+=H.f(t.gt())
for(;t.p();)a=a+c+H.f(t.gt())}return a},
mp:function(a,b){return J.lH(a,b)},
mr:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
ms:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
jm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.Y(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mw(a)},
mw:function(a){var t=J.w(a)
if(!!t.$isb8)return t.k(a)
return H.fF(a)},
k1:function(a){return new P.ai(!1,null,null,a)},
k2:function(a,b,c){return new P.ai(!0,a,b,c)},
mj:function(a){return new P.ai(!1,null,a,"Must not be null")},
fH:function(a,b,c){return new P.dt(null,null,!0,a,b,"Value not in range")},
aZ:function(a,b,c,d,e){return new P.dt(b,c,!0,a,d,"Invalid value")},
jx:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aZ(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aZ(b,a,c,"end",f))
return b},
F:function(a,b,c,d,e){var t=e!=null?e:J.dW(b)
return new P.eO(b,t,!0,a,c,"Index out of range")},
cm:function(a){return new P.hU(a)},
kz:function(a,b,c){var t,s
t=H.E([],[c])
for(s=J.bo(a);s.p();)C.a.i(t,s.gt())
if(b)return t
t.fixed$length=Array
return t},
ah:function(a){H.dR(H.f(a))},
aB:function aB(){},
L:function L(){},
bq:function bq(a,b){this.a=a
this.b=b},
P:function P(){},
aS:function aS(a){this.a=a},
ee:function ee(){},
ef:function ef(){},
ba:function ba(){},
cb:function cb(a){this.a=a},
dp:function dp(){},
ai:function ai(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eO:function eO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
v:function v(a){this.a=a},
dE:function dE(a){this.a=a},
aI:function aI(a){this.a=a},
a4:function a4(a){this.a=a},
dx:function dx(){},
e7:function e7(a){this.a=a},
hU:function hU(a){this.a=a},
eh:function eh(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
Z:function Z(){},
d7:function d7(){},
b:function b(){},
aG:function aG(){},
aX:function aX(){},
X:function X(){},
q:function q(){},
bP:function bP(){},
u:function u(){},
bQ:function bQ(a){this.a=a},
iJ:function(a){var t,s,r,q,p
if(a==null)return
t=P.H()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
t.j(0,p,a[p])}return t},
ny:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lT(a,new P.iI(t))
return t},
kp:function(){var t=$.ko
if(t==null){t=J.je(window.navigator.userAgent,"Opera",0)
$.ko=t}return t},
mt:function(){var t,s
t=$.kl
if(t!=null)return t
s=$.km
if(s==null){s=J.je(window.navigator.userAgent,"Firefox",0)
$.km=s}if(s)t="-moz-"
else{s=$.kn
if(s==null){s=!P.kp()&&J.je(window.navigator.userAgent,"Trident/",0)
$.kn=s}if(s)t="-ms-"
else t=P.kp()?"-o-":"-webkit-"}$.kl=t
return t},
iI:function iI(a){this.a=a},
nW:function(a){return Math.sqrt(a)},
id:function id(){},
N:function N(){},
dX:function dX(){},
aP:function aP(){},
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
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
ez:function ez(){},
eC:function eC(){},
eE:function eE(){},
aj:function aj(){},
aE:function aE(){},
eM:function eM(){},
at:function at(){},
eX:function eX(){},
f6:function f6(){},
f7:function f7(){},
av:function av(){},
fp:function fp(){},
fw:function fw(){},
fB:function fB(){},
fC:function fC(){},
fI:function fI(){},
fJ:function fJ(){},
bN:function bN(){},
h5:function h5(){},
K:function K(){},
h6:function h6(){},
h7:function h7(){},
dz:function dz(){},
hb:function hb(){},
bS:function bS(){},
aw:function aw(){},
hl:function hl(){},
hs:function hs(){},
hu:function hu(){},
hv:function hv(){},
bW:function bW(){},
ij:function ij(){},
ik:function ik(){},
il:function il(){},
cw:function cw(){},
cu:function cu(){},
cB:function cB(){},
cF:function cF(){},
cQ:function cQ(){},
cY:function cY(){},
cU:function cU(){},
cW:function cW(){},
e0:function e0(){},
fN:function fN(){},
fO:function fO(){},
iy:function iy(){},
fX:function fX(){},
cv:function cv(){},
cP:function cP(){}},W={
mu:function(a,b,c){var t,s
t=document.body
s=(t&&C.h).R(t,a,b,c)
s.toString
t=new H.dF(new W.V(s),new W.iH(),[W.t])
return t.ga6(t)},
mv:function(a){return"wheel"},
bs:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lY(a)
if(typeof s==="string")t=a.tagName}catch(r){H.T(r)}return t},
nb:function(a,b){return document.createElement(a)},
b6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
af:function(a,b,c,d,e){var t=c==null?null:W.l3(new W.hT(c))
t=new W.hS(0,a,b,t,!1,[e])
t.dK(a,b,c,!1,e)
return t},
kX:function(a){var t,s
t=document.createElement("a")
s=new W.im(t,window.location)
s=new W.bX(s)
s.dL(a)
return s},
ne:function(a,b,c,d){return!0},
nf:function(a,b,c,d){var t,s,r,q,p
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
l_:function(){var t=P.u
t=new W.iv(P.ju(C.k,t),P.al(null,null,null,t),P.al(null,null,null,t),P.al(null,null,null,t),null)
t.dN(null,new H.bE(C.k,new W.iw(),[H.aC(C.k,0),null]),["TEMPLATE"],null)
return t},
nj:function(a){var t
if(a==null)return
if("postMessage" in a){t=W.na(a)
if(!!J.w(t).$ish)return t
return}else return a},
na:function(a){if(a===window)return a
else return new W.hL(a)},
l3:function(a){var t=$.G
if(t===C.d)return a
return t.en(a)},
n:function n(){},
dY:function dY(){},
dZ:function dZ(){},
a3:function a3(){},
e1:function e1(){},
cc:function cc(){},
aQ:function aQ(){},
cd:function cd(){},
ce:function ce(){},
aR:function aR(){},
e5:function e5(){},
A:function A(){},
b9:function b9(){},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
ch:function ch(){},
br:function br(){},
ci:function ci(){},
ea:function ea(){},
cj:function cj(){},
eb:function eb(){},
ck:function ck(){},
cl:function cl(){},
ec:function ec(){},
ed:function ed(){},
a5:function a5(){},
iH:function iH(){},
l:function l(){},
h:function h(){},
a6:function a6(){},
eA:function eA(){},
eB:function eB(){},
eF:function eF(){},
a7:function a7(){},
cr:function cr(){},
eJ:function eJ(){},
bA:function bA(){},
cs:function cs(){},
eK:function eK(){},
bB:function bB(){},
bC:function bC(){},
aW:function aW(){},
f2:function f2(){},
fa:function fa(){},
fb:function fb(){},
bF:function bF(){},
a8:function a8(){},
fc:function fc(){},
Q:function Q(){},
fm:function fm(){},
V:function V(a){this.a=a},
t:function t(){},
dk:function dk(){},
bL:function bL(){},
fv:function fv(){},
fy:function fy(){},
a9:function a9(){},
fA:function fA(){},
fD:function fD(){},
fE:function fE(){},
ds:function ds(){},
fP:function fP(){},
du:function du(){},
bO:function bO(){},
fT:function fT(){},
aa:function aa(){},
fU:function fU(){},
ab:function ab(){},
fW:function fW(){},
ac:function ac(){},
h0:function h0(){},
a_:function a_(){},
am:function am(){},
dy:function dy(){},
h8:function h8(){},
h9:function h9(){},
bR:function bR(){},
ad:function ad(){},
a0:function a0(){},
hc:function hc(){},
hd:function hd(){},
hf:function hf(){},
ae:function ae(){},
b_:function b_(){},
hj:function hj(){},
hk:function hk(){},
bh:function bh(){},
hm:function hm(){},
dC:function dC(){},
aK:function aK(){},
hr:function hr(){},
ht:function ht(){},
hw:function hw(){},
hx:function hx(){},
b1:function b1(){},
bU:function bU(){},
hz:function hz(a){this.a=a},
hA:function hA(){},
b2:function b2(){},
hI:function hI(){},
dH:function dH(){},
hK:function hK(){},
hM:function hM(){},
hN:function hN(){},
i3:function i3(){},
i4:function i4(){},
dL:function dL(){},
io:function io(){},
ir:function ir(){},
is:function is(){},
iz:function iz(){},
iA:function iA(){},
hG:function hG(){},
hO:function hO(a){this.a=a},
hR:function hR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
dI:function dI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hS:function hS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hT:function hT(a){this.a=a},
bX:function bX(a){this.a=a},
C:function C(){},
dm:function dm(a){this.a=a},
fo:function fo(a){this.a=a},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
c_:function c_(){},
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
cp:function cp(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hL:function hL(a){this.a=a},
dl:function dl(){},
im:function im(a,b){this.a=a
this.b=b},
dN:function dN(a){this.a=a},
ix:function ix(a){this.a=a},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bx:function bx(){},
by:function by(){},
ct:function ct(){},
cN:function cN(){},
cz:function cz(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
cx:function cx(){},
cy:function cy(){},
cA:function cA(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cO:function cO(){},
d_:function d_(){},
d0:function d0(){},
cZ:function cZ(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cV:function cV(){},
cX:function cX(){},
d1:function d1(){},
d2:function d2(){}},B={
nU:function(a){var t,s
t=document
s=W.aW
W.af(t,"keydown",new B.j5(),!1,s)
W.af(t,"keyup",new B.j6(),!1,s)
if(!$.nV)W.af(t,"mousemove",new B.j7(),!1,W.Q)
s=W.Q
W.af(t,"mousedown",new B.j8(),!1,s)
W.af(t,"mouseup",new B.j9(),!1,s)},
mP:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.j(3))
s=$.$get$iK()
r=$.$get$c5()
q=new T.M(new Float32Array(H.j(16)))
q.L()
q=new B.fq(a,b,c,0,new T.i(t),-0.02,s,r,q,new T.i(new Float32Array(H.j(3))),new T.i(new Float32Array(H.j(3))),new T.i(new Float32Array(H.j(3))),new T.i(new Float32Array(H.j(3))),"camera:orbit",!1,!0)
q.dz(a,b,c,d)
return q},
j5:function j5(){},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
fq:function fq(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fr:function fr(a){this.a=a},
fs:function fs(a){this.a=a},
ft:function ft(){},
fu:function fu(a){this.a=a},
mq:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.i(new Float32Array(H.j(3)))
r.q(t,s,d8)
q=new T.i(new Float32Array(H.j(3)))
q.q(d6,s,d8)
p=new T.i(new Float32Array(H.j(3)))
p.q(d6,d7,d8)
o=new T.i(new Float32Array(H.j(3)))
o.q(t,d7,d8)
n=-d8
m=new T.i(new Float32Array(H.j(3)))
m.q(t,s,n)
l=new T.i(new Float32Array(H.j(3)))
l.q(t,d7,n)
k=new T.i(new Float32Array(H.j(3)))
k.q(d6,d7,n)
j=new T.i(new Float32Array(H.j(3)))
j.q(d6,s,n)
i=new T.i(new Float32Array(H.j(3)))
i.q(t,d7,n)
h=new T.i(new Float32Array(H.j(3)))
h.q(t,d7,d8)
g=new T.i(new Float32Array(H.j(3)))
g.q(d6,d7,d8)
f=new T.i(new Float32Array(H.j(3)))
f.q(d6,d7,n)
e=new T.i(new Float32Array(H.j(3)))
e.q(d6,s,d8)
d=new T.i(new Float32Array(H.j(3)))
d.q(t,s,d8)
c=new T.i(new Float32Array(H.j(3)))
c.q(t,s,n)
b=new T.i(new Float32Array(H.j(3)))
b.q(d6,s,n)
a=new T.i(new Float32Array(H.j(3)))
a.q(d6,s,n)
a0=new T.i(new Float32Array(H.j(3)))
a0.q(d6,d7,n)
a1=new T.i(new Float32Array(H.j(3)))
a1.q(d6,d7,d8)
a2=new T.i(new Float32Array(H.j(3)))
a2.q(d6,s,d8)
a3=new T.i(new Float32Array(H.j(3)))
a3.q(t,s,n)
a4=new T.i(new Float32Array(H.j(3)))
a4.q(t,s,d8)
s=new T.i(new Float32Array(H.j(3)))
s.q(t,d7,d8)
a5=new T.i(new Float32Array(H.j(3)))
a5.q(t,d7,n)
n=new Float32Array(H.j(2))
n[0]=d3
n[1]=d5
t=new Float32Array(H.j(2))
t[0]=d2
t[1]=d5
a6=new Float32Array(H.j(2))
a6[0]=d2
a6[1]=d4
a7=new Float32Array(H.j(2))
a7[0]=d3
a7[1]=d4
a8=new Float32Array(H.j(2))
a8[0]=d2
a8[1]=d5
a9=new Float32Array(H.j(2))
a9[0]=d2
a9[1]=d4
b0=new Float32Array(H.j(2))
b0[0]=d3
b0[1]=d4
b1=new Float32Array(H.j(2))
b1[0]=d3
b1[1]=d5
b2=new Float32Array(H.j(2))
b2[0]=d3
b2[1]=d4
b3=new Float32Array(H.j(2))
b3[0]=d3
b3[1]=d5
b4=new Float32Array(H.j(2))
b4[0]=d2
b4[1]=d5
b5=new Float32Array(H.j(2))
b5[0]=d2
b5[1]=d4
b6=new Float32Array(H.j(2))
b6[0]=d2
b6[1]=d4
b7=new Float32Array(H.j(2))
b7[0]=d3
b7[1]=d4
b8=new Float32Array(H.j(2))
b8[0]=d3
b8[1]=d5
b9=new Float32Array(H.j(2))
b9[0]=d2
b9[1]=d5
c0=new Float32Array(H.j(2))
c0[0]=d2
c0[1]=d5
c1=new Float32Array(H.j(2))
c1[0]=d2
c1[1]=d4
c2=new Float32Array(H.j(2))
c2[0]=d3
c2[1]=d4
c3=new Float32Array(H.j(2))
c3[0]=d3
c3[1]=d5
c4=new Float32Array(H.j(2))
c4[0]=d3
c4[1]=d5
c5=new Float32Array(H.j(2))
c5[0]=d2
c5[1]=d5
c6=new Float32Array(H.j(2))
c6[0]=d2
c6[1]=d4
c7=new Float32Array(H.j(2))
c7[0]=d3
c7[1]=d4
c8=new G.bz(!1,[],[],[],P.H())
c8.a7("aTexUV")
c8.a7("aNormal")
c8.dj(6)
c8.ae([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.aQ("aTexUV",[new T.x(n),new T.x(t),new T.x(a6),new T.x(a7),new T.x(a8),new T.x(a9),new T.x(b0),new T.x(b1),new T.x(b2),new T.x(b3),new T.x(b4),new T.x(b5),new T.x(b6),new T.x(b7),new T.x(b8),new T.x(b9),new T.x(c0),new T.x(c1),new T.x(c2),new T.x(c3),new T.x(c4),new T.x(c5),new T.x(c6),new T.x(c7)])
for(c9=0;t=$.$get$kV(),c9<6;++c9){d0=t[c9]
c8.aR("aNormal",[d0,d0,d0,d0])}return c8},
mC:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.I(t,$.$get$kt())
C.a.I(s,$.$get$jp())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.D)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.i(new Float32Array(3))
k.w(l)
l=n.b
k.i(0,s[l])
k.O(0,0.5)
k.D(0)
j=s[l]
i=new T.i(new Float32Array(3))
i.w(j)
j=n.c
i.i(0,s[j])
i.O(0,0.5)
i.D(0)
h=s[j]
g=new T.i(new Float32Array(3))
g.w(h)
g.i(0,s[m])
g.O(0,0.5)
g.D(0)
f=s.length
C.a.i(s,k)
e=s.length
C.a.i(s,i)
d=s.length
C.a.i(s,g)
C.a.i(q,new G.B(m,f,d))
C.a.i(q,new G.B(l,e,f))
C.a.i(q,new G.B(j,d,e))
C.a.i(q,new G.B(f,e,d))}}c=new G.bz(!1,[],[],[],P.H())
c.a7("aTexUV")
c.a7("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.D)(t),++o){n=t[o]
b=s[n.a]
H.d(Math.sqrt(b.gS())<1.01&&Math.sqrt(b.gS())>0.99)
a=s[n.b]
H.d(Math.sqrt(a.gS())<1.01&&Math.sqrt(a.gS())>0.99)
a0=s[n.c]
H.d(Math.sqrt(a0.gS())<1.01&&Math.sqrt(a0.gS())>0.99)
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
c.aR("aNormal",[b,a,a0])
m=new T.i(new Float32Array(3))
m.w(b)
m.O(0,a4)
l=new T.i(new Float32Array(3))
l.w(a)
l.O(0,a4)
a2=new T.i(new Float32Array(3))
a2.w(a0)
a2.O(0,a4)
c.dk([m,l,a2])
c.aQ("aTexUV",[new T.x(j),new T.x(h),new T.x(a1)])}return c},
mB:function(a,a0,a1,a2){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b
t=a1*0.5
s=a2*0.5
r=a1/a
q=a1/a0
p=new T.i(new Float32Array(H.j(3)))
p.q(0,0,1)
o=(a+1)*(a0+1)
n=[T.i]
m=H.E(new Array(o),n)
l=H.E(new Array(o),n)
k=H.E(new Array(o),[T.x])
j=new B.eI(a)
for(i=0;i<=a;++i)for(o=i/a,n=i*r-t,h=0;h<=a0;++h){g=j.$2(i,h)
f=new Float32Array(3)
f[0]=n
f[1]=h*q-s
f[2]=0
C.a.j(m,g,new T.i(f))
C.a.j(l,g,p)
f=new Float32Array(2)
f[0]=o
f[1]=h/a0
C.a.j(k,g,new T.x(f))}o=[]
e=new G.bz(!1,[],o,[],P.H())
e.ae(m)
for(i=0;i<a;i=d)for(d=i+1,h=0;h<a0;){n=j.$2(i,h)
f=j.$2(d,h);++h
c=j.$2(d,h)
b=j.$2(i,h)
H.d(!0)
C.a.i(o,new G.cn(n,f,c,b))}e.a7("aTexUV")
e.aQ("aTexUV",k)
e.a7("aNormal")
e.aR("aNormal",l)
return e},
eI:function eI(a){this.a=a}},G={
n5:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ap(t,"\n")},
kU:function(a,b,c){var t,s,r,q
t=J.m(a)
s=t.ce(a,b)
t.bt(a,s,c)
t.cb(a,s)
r=t.bo(a,s,35713)
if(r!=null&&!r){q=t.bn(a,s)
P.ah("E:Compilation failed:")
P.ah("E:"+G.n5(c))
P.ah("E:Failure:")
P.ah(C.f.a5("E:",q))
throw H.e(q)}return s},
mD:function(a,b,c){var t,s,r,q
C.m.cp(a,0,a.length,0)
C.m.cp(b,0,4,0)
for(t=c.length,s=0,r=0;r<c.length;c.length===t||(0,H.D)(c),++r){q=c[r]
if(q.c){q.aS(a,s*16)
b[s]=q.d;++s}}},
dd:function(a){var t=new G.f8(P.H(),a,!1,!0)
t.dw(a)
return t},
cq:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.jT(a[s])}return b},
my:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])}return b},
mz:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jg(a[s])
b[t+1]=J.jh(a[s])
b[t+2]=J.jT(a[s])
b[t+3]=J.lZ(a[s])}return b},
mx:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bm(a[s],0)
b[t+1]=J.bm(a[s],1)
b[t+2]=J.bm(a[s],2)
b[t+3]=J.bm(a[s],3)}return b},
nd:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gF(t),s=s.gv(s),r=b.x,q=[[P.b,P.o]],p=[P.P],o=[T.aL],n=[T.i],m=[T.x];s.p();){l=s.gt()
if(!r.G(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lc>0)H.dR("I: "+k)
continue}j=t.h(0,l)
switch($.$get$W().h(0,l).a){case"vec2":b.ad(l,G.my(H.dS(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.ad(l,G.cq(H.dS(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.ad(l,G.mz(H.dS(j,"$isb",o,"$asb"),null),4)
break
case"float":b.ad(l,new Float32Array(H.iC(H.dS(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.ad(l,G.mx(H.dS(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aA(!1))H.aM("unknown type for "+H.f(l)+" ["+J.lX(j[0]).k(0)+"] ["+new H.aJ(H.iP(j),null).k(0)+"] "+H.f(j))}}},
jo:function(a,b,c){var t,s,r
t=b.d
s=new G.de(t,J.jS(t.a),4,P.H(),b.e.x,null,0,-1,null,null,P.H(),"meshdata:"+a,!1,!0)
s.ae(G.cq(c.d,null))
r=c.dr()
s.y=J.dV(t.a)
s.af(r)
G.nd(c,s)
return s},
jy:function(a,b,c,d){var t=new G.fM(b,c,d,null,null,P.H(),P.H(),P.al(null,null,null,P.u),null,a,!1,!0)
t.dB(a,b,c,d)
return t},
fd:function fd(){},
dD:function dD(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
e2:function e2(){},
e4:function e4(a,b){this.a=a
this.b=b},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
cn:function cn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eY:function eY(){},
dq:function dq(a,b,c,d,e,f,g,h){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.d=e
_.a=f
_.b=g
_.c=h},
cg:function cg(a,b,c,d,e,f,g,h,i,j){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.cx=f
_.d=g
_.a=h
_.b=i
_.c=j},
dw:function dw(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=a0
_.cx=a1
_.cy=a2
_.db=a3
_.dx=a4
_.dy=a5
_.fr=a6
_.fx=a7
_.d=a8
_.a=a9
_.b=b0
_.c=b1},
eL:function eL(a,b,c,d,e,f,g){var _=this
_.x=a
_.y=b
_.z=c
_.d=d
_.a=e
_.b=f
_.c=g},
dB:function dB(a,b,c){this.a=a
this.b=b
this.c=c},
dA:function dA(a,b,c){this.a=a
this.b=b
this.c=c},
f8:function f8(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
de:function de(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fx:function fx(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fM:function fM(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
k:function k(a,b,c){this.a=a
this.b=b
this.c=c},
aH:function aH(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fV:function fV(){},
he:function he(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
bT:function bT(){},
eN:function eN(a,b,c,d,e,f){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f}},R={
n2:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=d.a
if(t[1]===0)return
s=b*0.5
r=c*C.j.eM(s/c)
q=-r
p=new T.i(new Float32Array(H.j(3)))
p.w(d)
p.O(0,s)
t=t[1]
o=new T.i(new Float32Array(H.j(3)))
o.w(p)
o.O(0,1/t)
n=[]
for(m=q;m<=r;m+=c)for(l=q;l<=r;l+=c){t=new Float32Array(3)
p=new T.i(t)
t[0]=m
t[1]=0
t[2]=l
p.i(0,o)
C.a.i(n,p)
t=new Float32Array(3)
p=new T.i(t)
t[0]=m
t[1]=0
t[2]=l
p.bw(o)
C.a.i(n,p)}for(k=0;k<8;++k){m=(k&1)===1?1:-1
j=(k&2)===2?1:-1
l=(k&4)===4?1:-1
if(m>0){t=j*s
p=l*s
i=new Float32Array(3)
i[0]=m*s
i[1]=t
i[2]=p
C.a.i(n,new T.i(i))
i=new Float32Array(3)
i[0]=-m*s
i[1]=t
i[2]=p
C.a.i(n,new T.i(i))}if(j>0){t=m*s
p=l*s
i=new Float32Array(3)
i[0]=t
i[1]=j*s
i[2]=p
C.a.i(n,new T.i(i))
i=new Float32Array(3)
i[0]=t
i[1]=-j*s
i[2]=p
C.a.i(n,new T.i(i))}if(l>0){t=m*s
p=j*s
i=new Float32Array(3)
i[0]=t
i[1]=p
i[2]=l*s
C.a.i(n,new T.i(i))
i=new Float32Array(3)
i[0]=t
i[1]=p
i[2]=-l*s
C.a.i(n,new T.i(i))}}a.ax(G.cq(n,null))
t=new Array(n.length)
t.fixed$length=Array
h=H.E(t,[P.o])
for(t=n.length,k=0;k<t;++k)h[k]=k
a.af(h)},
mA:function(a){var t,s,r
t=a.a
s=t[0]
if(s!==0){r=t[1]
if(r!==0){t=new T.i(new Float32Array(H.j(3)))
t.q(-r,s,0)
return t}t=t[2]
if(t!==0){r=new T.i(new Float32Array(H.j(3)))
r.q(-t,0,s)
return r}t=new T.i(new Float32Array(H.j(3)))
t.q(0,1,1)
return t}else{s=t[1]
if(s===0){t=new T.i(new Float32Array(H.j(3)))
t.q(1,1,0)
return t}t=t[2]
if(t===0){t=new T.i(new Float32Array(H.j(3)))
t.q(1,0,1)
return t}r=new T.i(new Float32Array(H.j(3)))
r.q(0,-t,s)
return r}},
n4:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a3.toString
t=new T.i(new Float32Array(H.j(3)))
t.w(a3)
t.D(0)
s=new T.i(new Float32Array(H.j(3)))
s.w(t)
s.O(0,a4)
a2.toString
r=new T.i(new Float32Array(H.j(3)))
r.w(a2)
r.i(0,s)
q=[a2,r]
p=R.mA(a3)
p.D(0)
p.O(0,Math.tan(H.l8(a5))*a4)
for(o=0;o<8;++o){t=new Float32Array(3)
n=new T.i(t)
n.w(p)
s=new Float32Array(4)
new T.fG(s).d6(a3,o*2*3.141592653589793/8)
m=t[0]
l=t[1]
k=t[2]
j=s[0]
i=s[1]
h=s[2]
g=s[3]
f=g*m+i*k-h*l
e=g*l+h*m-j*k
d=g*k+j*l-i*m
s=-j
c=s*m-i*l-h*k
b=-h
a=-i
t[0]=f*g+c*s+e*b-d*a
t[1]=e*g+c*a+d*s-f*b
t[2]=d*g+c*b+f*a-e*s
n.i(0,r)
C.a.i(q,n)}a0=[]
for(o=1;o<q.length;++o){C.a.i(a0,0)
C.a.i(a0,o)}for(o=3;t=q.length,o<t;++o){C.a.i(a0,o-1)
C.a.i(a0,o)}C.a.i(a0,t-1)
C.a.i(a0,2)
for(o=2;o<q.length;++o)if(o%2===0){C.a.i(a0,1)
C.a.i(a0,o)}a1.ax(G.cq(q,null))
a1.af(a0)},
n3:function(a,b,c){var t,s,r,q,p,o,n
t=[]
s=[]
for(r=$.$get$jp(),q=0;q<12;++q){p=r[q]
C.a.i(s,t.length)
C.a.i(s,12)
o=new T.i(new Float32Array(3))
o.w(p)
o.O(0,c)
b.toString
n=new T.i(new Float32Array(3))
n.w(b)
n.i(0,o)
C.a.i(t,n)}C.a.i(t,b)
a.ax(G.cq(t,null))
a.af(s)},
fZ:function fZ(){},
h_:function h_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
la:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.w(c)
s=b.d
t.ct(0,s)
r=b.ch
if(r!=null&&b.cx!=null){J.Y(b)
q=C.a.gaG(e)
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
p.ev(new T.au(o))
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
a.dq(b.cx,e,d)
e.pop()}for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.D)(s),++l)A.la(a,s[l],t,d,e)},
kD:function(a,b,c){var t=new A.fL(c,b,H.E([],[A.bg]),17664,0,0,0,0,a,!1,!0)
t.dA(a,b,c)
return t},
be:function be(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bg:function bg(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fL:function fL(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
_.d=a
_.e=b
_.f=c
_.r=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.a=i
_.b=a0
_.c=a1},
dP:function(a){var t,s
t=C.m.eN(a,0,new A.iQ())
s=536870911&t+(C.b.cU(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iQ:function iQ(){}},T={
f9:function(){return new T.M(new Float32Array(H.j(16)))},
z:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.i(t)},
au:function au(a){this.a=a},
M:function M(a){this.a=a},
fG:function fG(a){this.a=a},
x:function x(a){this.a=a},
i:function i(a){this.a=a},
aL:function aL(a){this.a=a}},K={
mN:function(a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
t=G.jo("cube",a2,B.mq(!0,1,0,1,0,2,2,2))
s=G.jo("icosahedron-4",a2,B.mC(4,1,!0))
r=G.dd("mat0")
r.H("uTexture",D.f3(a1,"gray",$.$get$kc()))
r.H("uShininess",10)
q=G.dd("mat1")
q.H("uTexture",D.f3(a1,"red",$.$get$kg()))
q.H("uShininess",10)
p=G.dd("mat2")
p.H("uTexture",D.f3(a1,"red",$.$get$kb()))
p.H("uShininess",10)
o=G.dd("mat3")
o.H("uTexture",D.f3(a1,"red",$.$get$kd()))
o.H("uShininess",10)
n=[r,q,p,o]
for(r=a3.cy,m=0;m<8;++m){l=(m&1)===0?-10:10
k=(m&2)===0?-10:10
j=(m&4)===0?-10:10
q=m%2===0?t:s
p=n[m%4]
o=new Float32Array(9)
i=new T.M(new Float32Array(16))
i.L()
h=new Float32Array(16)
g=new T.M(h)
g.L()
f=new Float32Array(3)
e=new Float32Array(3)
d=new Float32Array(3)
c=new Float32Array(3)
b=new T.i(c)
d=new A.be(p,q,[],new T.au(o),i,g,new T.i(f),new T.i(e),new T.i(d),b,"mesh",!1,!0)
h[12]=l
h[13]=k
h[14]=j
c[0]=h[0]
c[1]=h[4]
c[2]=h[8]
g.ar(0,b,-1)
g.ar(0,d.bq(),-0.7)
C.a.i(r,d)}q=G.jo("strips",a2,B.mB(20,20,80,80))
p=n[0]
o=new Float32Array(H.j(9))
i=new T.M(new Float32Array(H.j(16)))
i.L()
h=new Float32Array(H.j(16))
g=new T.M(h)
g.L()
a=new A.be(p,q,[],new T.au(o),i,g,new T.i(new Float32Array(H.j(3))),new T.i(new Float32Array(H.j(3))),new T.i(new Float32Array(H.j(3))),new T.i(new Float32Array(H.j(3))),"grid",!1,!0)
g=Math.cos(-1.5079644737231006)
i=Math.sin(-1.5079644737231006)
o=h[4]
q=h[8]
p=h[5]
f=h[9]
e=h[6]
d=h[10]
c=h[7]
b=h[11]
a0=-i
h[4]=o*g+q*i
h[5]=p*g+f*i
h[6]=e*g+d*i
h[7]=c*g+b*i
h[8]=o*a0+q*g
h[9]=p*a0+f*g
h[10]=e*a0+d*g
h[11]=c*a0+b*g
a.aL(0,-20,20)
C.a.i(r,a)},
nO:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4
t={}
s=document
r=new R.h_(0,0,null,null,null,null)
r.dE(C.e.cY(s,"stats"),"blue","gray")
q=C.e.cw(s,"#webgl-canvas")
p=new G.e4(null,q)
o=(q&&C.o).bi(q,"webgl2",P.aF(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=o
if(o==null)H.J(P.cm('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
n="ChronosGL Config: "+J.Y(J.m_(o))
if($.lc>0)P.ah("I: "+n)
J.lG(o,0,0,0,1)
J.ca(o,2929)
J.ca(o,2884)
m=B.mP(50,10,0,q)
m.aL(0,0,56)
o=new T.M(new Float32Array(H.j(16)))
o.L()
n=new T.M(new Float32Array(H.j(16)))
n.L()
l=new G.fx(m,50,1,0.1,1e4,o,n,new T.M(new Float32Array(H.j(16))),P.H(),"perspective",!1,!0)
l.bC()
n=[]
k=new G.eL(n,new Float32Array(H.j(64)),new Float32Array(H.j(4)),P.H(),"illumination",!1,!0)
for(o=$.$get$iM(),o=o.gaH(o),o=o.gv(o);o.p();)C.a.i(n,o.gt())
o=G.jy("BlinnPhong",p,$.$get$lk(),$.$get$li())
j=new A.bg(o,[l,k],[],"BlinnPhong",!1,!0)
n=G.jy("Gourad",p,$.$get$ll(),$.$get$lj())
i=new A.bg(n,[l,k],[],"Gourad",!1,!0)
H.d(o.dt(n))
n=G.jy("Fixed",p,$.$get$ls(),$.$get$lr())
h=new A.bg(n,[l],[],"Fixed",!1,!0)
g=A.kD("BlinnPhong",p,null)
H.d(!0)
f=g.f
C.a.i(f,j)
H.d(!0)
C.a.i(f,h)
e=A.kD("Gourad",p,null)
H.d(!0)
f=e.f
C.a.i(f,i)
H.d(!0)
C.a.i(f,h)
d=G.dd("light")
d.H("uColor",$.$get$ki())
c=P.H()
for(f=$.$get$iM(),b=f.gF(f),b=b.gv(b),a=n.d,n=n.e.x;b.p();){a0=b.gt()
a1=f.h(0,a0)
a2=new G.de(a,J.jS(a.a),1,P.H(),n,null,0,-1,null,null,P.H(),"meshdata:dirLightViz",!1,!0)
a2.ae(new Float32Array(3))
a2.y=J.dV(a.a)
a2.af([0,0])
a3=J.w(a1)
if(!!a3.$iscg){a3=a1.Q
R.n2(a2,a3,a3/4,a1.x)}else if(!!a3.$isdw)R.n4(a2,a1.x,a1.y,a1.ch,a1.cx)
else if(!!a3.$isdq)R.n3(a2,a1.x,a1.Q)
else if(H.aA(!1))H.aM("unknown light: "+a3.gC(a1).k(0))
a3=new Float32Array(9)
a4=new T.M(new Float32Array(16))
a4.L()
a5=new T.M(new Float32Array(16))
a5.L()
a6=new Float32Array(3)
a7=new Float32Array(3)
a8=new Float32Array(3)
c.j(0,a0,new A.be(d,a2,[],new T.au(a3),a4,a5,new T.i(a6),new T.i(a7),new T.i(a8),new T.i(new Float32Array(3)),a0,!1,!0))}for(n=c.gaH(c),n=n.gv(n),f=h.f;n.p();){a9=n.gt()
H.d(a9!=null)
C.a.i(f,a9)}n=new Float32Array(H.j(9))
f=new T.M(new Float32Array(H.j(16)))
f.L()
b=new T.M(new Float32Array(H.j(16)))
b.L()
b0=new A.be(null,null,[],new T.au(n),f,b,new T.i(new Float32Array(H.j(3))),new T.i(new Float32Array(H.j(3))),new T.i(new Float32Array(H.j(3))),new T.i(new Float32Array(H.j(3))),"scene",!1,!0)
K.mN(p,o,b0)
H.d(!0)
C.a.i(i.f,b0)
H.d(!0)
C.a.i(j.f,b0)
b1=H.ap(C.e.cw(s,"#phase"),"$isbO")
H.d(b1!=null)
b1.selectedIndex=0
for(o=C.e.bj(s,"input"),n=o.length,b2=0;b2<o.length;o.length===n||(0,H.D)(o),++b2){f=J.lV(o[b2])
W.af(f.a,f.b,new K.j1(c),!1,H.aC(f,0))}for(o=C.e.bj(s,"input"),n=o.length,b2=0;b2<o.length;o.length===n||(0,H.D)(o),++b2){b3=o[b2]
H.dR("initialize inputs "+H.f(b3.id))
b4=C.e.dV(s,"Event")
J.lz(b4,"change",!0,!0)
J.lL(b3,b4)}s=new K.j2(q,l,g,e)
s.$1(null)
W.af(window,"resize",s,!1,W.l)
t.a=0
new K.j0(t,r,m,g,e,b0,b1).$1(0)},
j1:function j1(a){this.a=a},
j2:function j2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},D={
f3:function(a,b,c){var t,s,r,q,p,o,n,m
t=c.a
s=C.c.W(255*t[0])
r=C.c.W(255*t[1])
q=C.c.W(255*t[2])
t="rgb("+s+", "+r+", "+q+")"
p=document.createElement("canvas")
p.width=2
p.height=2
o=C.o.cX(p,"2d")
o.fillStyle=t;(o&&C.y).eK(o,0,0,p.width,p.height)
t=new G.he(!1,!1,!1,!0,1,9729,9729)
n=J.lJ(a.a)
m=new G.eN(p,b,n,3553,a,t)
J.c9(a.a,3553,n)
J.m5(a.a,37440,1)
m.dD(p)
t.du(a,3553)
H.d(J.m0(a.a)===0)
J.c9(a.a,3553,null)
return m}}
var v=[C,H,J,P,W,B,G,R,A,T,K,D]
setFunctionNamesIfNecessary(v)
var $={}
H.jr.prototype={}
J.a.prototype={
B:function(a,b){return a===b},
gA:function(a){return H.aY(a)},
k:function(a){return H.fF(a)},
gC:function(a){return new H.aJ(H.iP(a),null)}}
J.eT.prototype={
k:function(a){return String(a)},
gA:function(a){return a?519018:218159},
gC:function(a){return C.a_},
$isaB:1}
J.eU.prototype={
B:function(a,b){return null==b},
k:function(a){return"null"},
gA:function(a){return 0},
gC:function(a){return C.U}}
J.bD.prototype={
gA:function(a){return 0},
gC:function(a){return C.T},
k:function(a){return String(a)},
$iskx:1}
J.fz.prototype={}
J.b0.prototype={}
J.aV.prototype={
k:function(a){var t=a[$.$get$kk()]
return t==null?this.dg(a):J.Y(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjn:1}
J.aT.prototype={
b9:function(a,b){if(!!a.immutable$list)throw H.e(new P.v(b))},
b8:function(a,b){if(!!a.fixed$length)throw H.e(new P.v(b))},
i:function(a,b){this.b8(a,"add")
a.push(b)},
I:function(a,b){var t,s,r,q,p
t=a.length
this.b8(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.D)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.J(new P.a4(a)))
a.push(q)}},
cs:function(a,b){return new H.bE(a,b,[H.aC(a,0),null])},
ap:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
u:function(a,b){return this.h(a,b)},
geL:function(a){if(a.length>0)return a[0]
throw H.e(H.eS())},
gaG:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eS())},
bs:function(a,b,c,d,e){var t,s
this.b9(a,"setRange")
P.jx(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.J(P.aZ(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mL())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
c1:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a4(a))}return!1},
da:function(a,b){this.b9(a,"sort")
H.dv(a,0,a.length-1,P.nz())},
aM:function(a){return this.da(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.I(a[t],b))return!0
return!1},
k:function(a){return P.eR(a,"[","]")},
gv:function(a){return new J.e_(a,a.length,0,null,[H.aC(a,0)])},
gA:function(a){return H.aY(a)},
gl:function(a){return a.length},
sl:function(a,b){this.b8(a,"set length")
if(b<0)throw H.e(P.aZ(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
return a[b]},
j:function(a,b,c){this.b9(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.R(a,b))
if(b>=a.length||b<0)throw H.e(H.R(a,b))
a[b]=c},
$isp:1,
$asp:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jq.prototype={}
J.e_.prototype={
gt:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.D(t))
r=this.c
if(r>=s){this.sbE(null)
return!1}this.sbE(t[r]);++this.c
return!0},
sbE:function(a){this.d=a}}
J.bb.prototype={
V:function(a,b){var t
if(typeof b!=="number")throw H.e(H.S(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaE(b)
if(this.gaE(a)===t)return 0
if(this.gaE(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaE:function(a){return a===0?1/a<0:a<0},
ep:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".ceil()"))},
eM:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.e(new P.v(""+a+".floor()"))},
W:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.v(""+a+".round()"))},
eq:function(a,b,c){if(this.V(b,c)>0)throw H.e(H.S(b))
if(this.V(a,b)<0)return b
if(this.V(a,c)>0)return c
return a},
fb:function(a,b){var t
if(b>20)throw H.e(P.aZ(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaE(a))return"-"+t
return t},
k:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gA:function(a){return a&0x1FFFFFFF},
a5:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a+b},
ac:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a-b},
cV:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a/b},
J:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a*b},
aO:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bY(a,b)},
M:function(a,b){return(a|0)===a?a/b|0:this.bY(a,b)},
bY:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.v("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
b3:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cU:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a&b)>>>0},
di:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return(a^b)>>>0},
aK:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a<b},
av:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>b},
cW:function(a,b){if(typeof b!=="number")throw H.e(H.S(b))
return a>=b},
gC:function(a){return C.a2},
$isX:1}
J.d9.prototype={
gC:function(a){return C.a1},
$isP:1,
$iso:1,
$isX:1}
J.d8.prototype={
gC:function(a){return C.a0},
$isP:1,
$isX:1}
J.aU.prototype={
aV:function(a,b){if(b>=a.length)throw H.e(H.R(a,b))
return a.charCodeAt(b)},
a5:function(a,b){if(typeof b!=="string")throw H.e(P.k2(b,null,null))
return a+b},
dc:function(a,b,c){var t
if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bu:function(a,b){return this.dc(a,b,0)},
bx:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fH(b,null,null))
if(b>c)throw H.e(P.fH(b,null,null))
if(c>a.length)throw H.e(P.fH(c,null,null))
return a.substring(b,c)},
dd:function(a,b){return this.bx(a,b,null)},
fa:function(a){return a.toLowerCase()},
es:function(a,b,c){if(c>a.length)throw H.e(P.aZ(c,0,a.length,null,null))
return H.nX(a,b,c)},
V:function(a,b){var t
if(typeof b!=="string")throw H.e(H.S(b))
if(a===b)t=0
else t=a<b?-1:1
return t},
k:function(a){return a},
gA:function(a){var t,s,r
for(t=a.length,s=0,r=0;r<t;++r){s=536870911&s+a.charCodeAt(r)
s=536870911&s+((524287&s)<<10)
s^=s>>6}s=536870911&s+((67108863&s)<<3)
s^=s>>11
return 536870911&s+((16383&s)<<15)},
gC:function(a){return C.V},
gl:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.R(a,b))
return a[b]},
$isp:1,
$asp:function(){},
$isu:1}
H.c.prototype={$asc:null}
H.bc.prototype={
gv:function(a){return new H.db(this,this.gl(this),0,null,[H.ao(this,"bc",0)])},
aI:function(a,b){return this.df(0,b)},
f9:function(a,b){var t,s
t=H.E([],[H.ao(this,"bc",0)])
C.a.sl(t,this.gl(this))
for(s=0;s<this.gl(this);++s)t[s]=this.u(0,s)
return t},
f8:function(a){return this.f9(a,!0)}}
H.db.prototype={
gt:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ag(t)
r=s.gl(t)
if(this.b!==r)throw H.e(new P.a4(t))
q=this.c
if(q>=r){this.sah(null)
return!1}this.sah(s.u(t,q));++this.c
return!0},
sah:function(a){this.d=a}}
H.dc.prototype={
gv:function(a){return new H.f4(null,J.bo(this.a),this.b,this.$ti)},
gl:function(a){return J.dW(this.a)},
$asZ:function(a,b){return[b]}}
H.eg.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f4.prototype={
p:function(){var t=this.b
if(t.p()){this.sah(this.c.$1(t.gt()))
return!0}this.sah(null)
return!1},
gt:function(){return this.a},
sah:function(a){this.a=a},
$asd7:function(a,b){return[b]}}
H.bE.prototype={
gl:function(a){return J.dW(this.a)},
u:function(a,b){return this.b.$1(J.lQ(this.a,b))},
$asc:function(a,b){return[b]},
$asbc:function(a,b){return[b]},
$asZ:function(a,b){return[b]}}
H.dF.prototype={
gv:function(a){return new H.hy(J.bo(this.a),this.b,this.$ti)}}
H.hy.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gt()))return!0
return!1},
gt:function(){return this.a.gt()}}
H.co.prototype={}
H.ja.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jb.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ib.prototype={
seW:function(a){this.z=a},
seZ:function(a){this.ch=a}}
H.b4.prototype={
c0:function(a,b){if(!this.f.B(0,a))return
if(this.Q.i(0,b)&&!this.y)this.y=!0
this.b6()},
f3:function(a){var t,s,r,q,p
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
if(q===r.c)r.bR();++r.d}this.y=!1}this.b6()},
eg:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).i(r,a)
t=this.ch;(t&&C.a).i(t,b)},
f2:function(a){var t,s,r
if(this.ch==null)return
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.B(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.J(new P.v("removeRange"))
P.jx(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
d7:function(a,b){if(!this.r.B(0,a))return
this.db=b},
eQ:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.K(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jv(null,null)
this.cx=t}t.Z(0,new H.i6(a,c))},
eP:function(a,b){var t
if(!this.r.B(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.aF()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jv(null,null)
this.cx=t}t.Z(0,this.geX())},
eR:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.ah(a)
if(b!=null)P.ah(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.Y(a)
s[1]=b==null?null:b.k(0)
for(r=new P.bY(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.K(0,s)},
al:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.T(o)
p=H.aN(o)
this.eR(q,p)
if(this.db){this.aF()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nv(r)
u.globalState.d=H.jJ(t,"$isb4")
if(t!=null)$=t.geV()
if(this.cx!=null)for(;n=this.cx,!n.gao(n);)this.cx.cz().$0()}return s},
cr:function(a){return this.b.h(0,a)},
bI:function(a,b){var t=this.b
if(t.G(0,a))throw H.e(P.cm("Registry: ports must be registered only once."))
t.j(0,a,b)},
b6:function(){var t=this.b
if(t.gl(t)-this.c.a>0||this.y||!this.x)u.globalState.z.j(0,this.a,this)
else this.aF()},
aF:function(){var t,s,r
t=this.cx
if(t!=null)t.a0(0)
for(t=this.b,s=t.gaH(t),s=s.gv(s);s.p();)s.gt().dR()
t.a0(0)
this.c.a0(0)
u.globalState.z.aq(0,this.a)
this.dx.a0(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].K(0,t[r+1])
this.ch=null}},
geV:function(){return this.d},
geu:function(){return this.e}}
H.i6.prototype={
$0:function(){this.a.K(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hP.prototype={
eB:function(){var t=this.a
if(t.b===t.c)return
return t.cz()},
cB:function(){var t,s,r
t=this.eB()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gao(s)}else s=!1
else s=!1
else s=!1
if(s)H.J(P.cm("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gao(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aF(["command","close"])
r=new H.an(!0,new P.dK(0,null,null,null,null,null,0,[null,P.o])).P(r)
s.toString
self.postMessage(r)}return!1}t.f0()
return!0},
bW:function(){if(self.window!=null)new H.hQ(this).$0()
else for(;this.cB(););},
as:function(){var t,s,r,q,p
if(!u.globalState.x)this.bW()
else try{this.bW()}catch(r){t=H.T(r)
s=H.aN(r)
q=u.globalState.Q
p=P.aF(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.an(!0,P.bZ(null,P.o)).P(p)
q.toString
self.postMessage(p)}}}
H.hQ.prototype={
$0:function(){if(!this.a.cB())return
P.n1(C.q,this)},
$S:function(){return{func:1,v:true}}}
H.b5.prototype={
f0:function(){var t=this.a
if(t.y){C.a.i(t.z,this)
return}t.al(this.b)}}
H.ia.prototype={}
H.eP.prototype={
$0:function(){H.mH(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eQ.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bl(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bl(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.b6()},
$S:function(){return{func:1,v:true}}}
H.hH.prototype={}
H.bi.prototype={
K:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.ni(b)
if(t.geu()===s){s=J.ag(r)
switch(s.h(r,0)){case"pause":t.c0(s.h(r,1),s.h(r,2))
break
case"resume":t.f3(s.h(r,1))
break
case"add-ondone":t.eg(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.f2(s.h(r,1))
break
case"set-errors-fatal":t.d7(s.h(r,1),s.h(r,2))
break
case"ping":t.eQ(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.eP(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.i(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.aq(0,s)
break}return}u.globalState.f.a.Z(0,new H.b5(t,new H.ic(this,r),"receive"))},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bi){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gA:function(a){return this.b.a}}
H.ic.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dO(0,this.b)},
$S:function(){return{func:1}}}
H.c0.prototype={
K:function(a,b){var t,s,r
t=P.aF(["command","message","port",this,"msg",b])
s=new H.an(!0,P.bZ(null,P.o)).P(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c0){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){return C.b.di((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bf.prototype={
dR:function(){this.c=!0
this.b=null},
dO:function(a,b){if(this.c)return
this.b.$1(b)},
$ismX:1}
H.hg.prototype={
dF:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.Z(0,new H.b5(s,new H.hh(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c4(new H.hi(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.v("Timer greater than 0."))}}}
H.hh.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hi.prototype={
$0:function(){this.a.c=null
H.j_()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.as.prototype={
gA:function(a){var t=this.a
t=C.b.b3(t,0)^C.b.M(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
B:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.as){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.an.prototype={
P:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.j(0,a,t.gl(t))
t=J.w(a)
if(!!t.$isbG)return["buffer",a]
if(!!t.$isbd)return["typed",a]
if(!!t.$isp)return this.d2(a)
if(!!t.$ismE){r=this.gd_()
q=t.gF(a)
q=H.jw(q,r,H.ao(q,"Z",0),null)
q=P.kz(q,!0,H.ao(q,"Z",0))
t=t.gaH(a)
t=H.jw(t,r,H.ao(t,"Z",0),null)
return["map",q,P.kz(t,!0,H.ao(t,"Z",0))]}if(!!t.$iskx)return this.d3(a)
if(!!t.$isa)this.cQ(a)
if(!!t.$ismX)this.at(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbi)return this.d4(a)
if(!!t.$isc0)return this.d5(a)
if(!!t.$isb8){p=a.$static_name
if(p==null)this.at(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isas)return["capability",a.a]
if(!(a instanceof P.q))this.cQ(a)
return["dart",u.classIdExtractor(a),this.d1(u.classFieldsExtractor(a))]},
at:function(a,b){throw H.e(new P.v((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cQ:function(a){return this.at(a,null)},
d2:function(a){var t
H.d(typeof a!=="string")
t=this.d0(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.at(a,"Can't serialize indexable: ")},
d0:function(a){var t,s
t=[]
C.a.sl(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.P(a[s])
return t},
d1:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.P(a[t]))
return a},
d3:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.at(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sl(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.P(a[t[r]])
return["js-object",t,s]},
d5:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
d4:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b3.prototype={
a1:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.k1("Bad serialized message: "+H.f(a)))
switch(C.a.geL(a)){case"ref":H.d(J.I(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.I(a[0],"buffer"))
t=a[1]
C.a.i(this.b,t)
return t
case"typed":H.d(J.I(a[0],"typed"))
t=a[1]
C.a.i(this.b,t)
return t
case"fixed":H.d(J.I(a[0],"fixed"))
t=a[1]
C.a.i(this.b,t)
s=H.E(this.ak(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.I(a[0],"extendable"))
t=a[1]
C.a.i(this.b,t)
return H.E(this.ak(t),[null])
case"mutable":H.d(J.I(a[0],"mutable"))
t=a[1]
C.a.i(this.b,t)
return this.ak(t)
case"const":H.d(J.I(a[0],"const"))
t=a[1]
C.a.i(this.b,t)
s=H.E(this.ak(t),[null])
s.fixed$length=Array
return s
case"map":return this.eE(a)
case"sendport":return this.eF(a)
case"raw sendport":H.d(J.I(a[0],"raw sendport"))
t=a[1]
C.a.i(this.b,t)
return t
case"js-object":return this.eD(a)
case"function":H.d(J.I(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.i(this.b,t)
return t
case"capability":H.d(J.I(a[0],"capability"))
return new H.as(a[1])
case"dart":H.d(J.I(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.i(this.b,p)
this.ak(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
ak:function(a){var t
for(t=0;t<a.length;++t)C.a.j(a,t,this.a1(a[t]))
return a},
eE:function(a){var t,s,r,q,p
H.d(J.I(a[0],"map"))
t=a[1]
s=a[2]
r=P.H()
C.a.i(this.b,r)
t=J.m4(t,this.geC()).f8(0)
for(q=J.ag(s),p=0;p<t.length;++p)r.j(0,t[p],this.a1(q.h(s,p)))
return r},
eF:function(a){var t,s,r,q,p,o,n
H.d(J.I(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.cr(r)
if(o==null)return
n=new H.bi(o,s)}else n=new H.c0(t,r,s)
C.a.i(this.b,n)
return n},
eD:function(a){var t,s,r,q,p,o
H.d(J.I(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.i(this.b,r)
for(q=J.ag(t),p=J.ag(s),o=0;o<q.gl(t);++o)r[q.h(t,o)]=this.a1(p.h(s,o))
return r}}
H.fK.prototype={}
H.hn.prototype={
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
H.dn.prototype={
k:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eW.prototype={
k:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hq.prototype={
k:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jc.prototype={
$1:function(a){if(!!J.w(a).$isba)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dM.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iV.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iW.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iX.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iY.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iZ.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b8.prototype={
k:function(a){return"Closure '"+H.dr(this).trim()+"'"},
$isjn:1,
gfe:function(){return this},
$D:null}
H.ha.prototype={}
H.fY.prototype={
k:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bp.prototype={
B:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bp))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gA:function(a){var t,s
t=this.c
if(t==null)s=H.aY(this.a)
else s=typeof t!=="object"?J.ar(t):H.aY(t)
return(s^H.aY(this.b))>>>0},
k:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fF(t)}}
H.hp.prototype={
k:function(a){return this.a}}
H.e3.prototype={
k:function(a){return this.a}}
H.fQ.prototype={
k:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hB.prototype={
k:function(a){return C.f.a5("Assertion failed: ",P.jm(this.a))}}
H.aJ.prototype={
k:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gA:function(a){return J.ar(this.a)},
B:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aJ){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ak.prototype={
gl:function(a){return this.a},
gao:function(a){return this.a===0},
gF:function(a){return new H.f_(this,[H.aC(this,0)])},
gaH:function(a){return H.jw(this.gF(this),new H.eV(this),H.aC(this,0),H.aC(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bO(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bO(s,b)}else return this.eS(b)},
eS:function(a){var t=this.d
if(t==null)return!1
return this.an(this.aB(t,this.am(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ai(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ai(r,b)
return s==null?null:s.b}else return this.eT(b)},
eT:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.aB(t,this.am(a))
r=this.an(s,a)
if(r<0)return
return s[r].b},
j:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.b0()
this.b=t}this.bG(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.b0()
this.c=s}this.bG(s,b,c)}else{r=this.d
if(r==null){r=this.b0()
this.d=r}q=this.am(b)
p=this.aB(r,q)
if(p==null)this.b2(r,q,[this.b1(b,c)])
else{o=this.an(p,b)
if(o>=0)p[o].b=c
else p.push(this.b1(b,c))}}},
aq:function(a,b){if(typeof b==="string")return this.bU(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bU(this.c,b)
else return this.eU(b)},
eU:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.aB(t,this.am(a))
r=this.an(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bZ(q)
return q.b},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
aD:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a4(this))
t=t.c}},
bG:function(a,b,c){var t=this.ai(a,b)
if(t==null)this.b2(a,b,this.b1(b,c))
else t.b=c},
bU:function(a,b){var t
if(a==null)return
t=this.ai(a,b)
if(t==null)return
this.bZ(t)
this.bP(a,b)
return t.b},
b1:function(a,b){var t,s
t=new H.eZ(a,b,null,null,[null,null])
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
am:function(a){return J.ar(a)&0x3ffffff},
an:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.I(a[s].a,b))return s
return-1},
k:function(a){return P.mO(this)},
ai:function(a,b){return a[b]},
aB:function(a,b){return a[b]},
b2:function(a,b,c){H.d(c!=null)
a[b]=c},
bP:function(a,b){delete a[b]},
bO:function(a,b){return this.ai(a,b)!=null},
b0:function(){var t=Object.create(null)
this.b2(t,"<non-identifier-key>",t)
this.bP(t,"<non-identifier-key>")
return t},
$ismE:1}
H.eV.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eZ.prototype={}
H.f_.prototype={
gl:function(a){return this.a.a},
gv:function(a){var t,s
t=this.a
s=new H.f0(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.f0.prototype={
gt:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a4(t))
else{t=this.c
if(t==null){this.sbF(null)
return!1}else{this.sbF(t.a)
this.c=this.c.c
return!0}}},
sbF:function(a){this.d=a}}
H.iR.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iS.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.u]}}}
H.iT.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.u]}}}
H.bG.prototype={
gC:function(a){return C.M},
$isbG:1}
H.bd.prototype={$isbd:1}
H.fe.prototype={
gC:function(a){return C.N}}
H.dg.prototype={
gl:function(a){return a.length},
$isp:1,
$asp:function(){},
$isr:1,
$asr:function(){}}
H.dh.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
return a[b]},
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
a[b]=c}}
H.di.prototype={
j:function(a,b,c){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.df.prototype={
gC:function(a){return C.O},
$isc:1,
$asc:function(){return[P.P]},
$isb:1,
$asb:function(){return[P.P]},
$iseD:1}
H.ff.prototype={
gC:function(a){return C.P},
$isc:1,
$asc:function(){return[P.P]},
$isb:1,
$asb:function(){return[P.P]}}
H.fg.prototype={
gC:function(a){return C.Q},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fh.prototype={
gC:function(a){return C.R},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isku:1}
H.fi.prototype={
gC:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fj.prototype={
gC:function(a){return C.W},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskR:1}
H.fk.prototype={
gC:function(a){return C.X},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskS:1}
H.dj.prototype={
gC:function(a){return C.Y},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.fl.prototype={
gC:function(a){return C.Z},
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.J(H.R(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskT:1}
H.bH.prototype={
$asp:function(){},
$isc:1,
$asc:function(){return[P.o]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bI.prototype={
$asp:function(){},
$isc:1,
$asc:function(){return[P.P]},
$asr:function(){},
$isb:1,
$asb:function(){return[P.P]}}
H.bJ.prototype={
$asp:function(){},
$asc:function(){return[P.P]},
$asr:function(){},
$asb:function(){return[P.P]}}
H.bK.prototype={
$asp:function(){},
$asc:function(){return[P.o]},
$asr:function(){},
$asb:function(){return[P.o]}}
P.hD.prototype={
$1:function(a){var t,s
H.j_()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hC.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hE.prototype={
$0:function(){H.j_()
this.a.$0()},
$S:function(){return{func:1}}}
P.hF.prototype={
$0:function(){H.j_()
this.a.$0()},
$S:function(){return{func:1}}}
P.hJ.prototype={}
P.iu.prototype={
er:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aI("Future already completed"))
t.aX(b)}}
P.dJ.prototype={
f_:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.be(this.d,a.a)},
eO:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bl(s,{func:1,args:[P.q,P.bP]}))return t.f4(s,a.a,a.b)
else return t.be(s,a.a)}}
P.az.prototype={
cG:function(a,b){var t,s,r
t=$.G
if(t!==C.d){t.toString
if(b!=null)b=P.nn(b,t)}s=new P.az(0,t,null,[null])
r=b==null?1:3
this.bH(new P.dJ(null,s,r,a,b,[H.aC(this,0),null]))
return s},
cF:function(a){return this.cG(a,null)},
bK:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bH:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jJ(this.c,"$isdJ")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bH(a)
return}this.bK(t)}H.d(this.a>=4)
t=this.b
t.toString
P.iF(null,null,t,new P.hV(this,a))}},
bT:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bT(a)
return}this.bK(s)}H.d(this.a>=4)
t.a=this.aj(a)
s=this.b
s.toString
P.iF(null,null,s,new P.hZ(t,this))}},
bV:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.aj(t)},
aj:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aX:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.iG(a,"$iseH",t,"$aseH"))if(H.iG(a,"$isaz",t,null))P.kW(a,this)
else P.nc(a,this)
else{s=this.bV()
H.d(this.a<4)
this.a=4
this.c=a
P.bV(this,s)}},
ay:function(a,b){var t
H.d(this.a<4)
t=this.bV()
H.d(this.a<4)
this.a=8
this.c=new P.b7(a,b)
P.bV(this,t)},
dT:function(a){return this.ay(a,null)},
$iseH:1,
gb4:function(){return this.a},
gea:function(){return this.c}}
P.hV.prototype={
$0:function(){P.bV(this.a,this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){P.bV(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hW.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aX(a)},
$S:function(){return{func:1,args:[,]}}}
P.hX.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.ay(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hY.prototype={
$0:function(){this.a.ay(this.b,this.c)},
$S:function(){return{func:1}}}
P.i1.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cA(q.d)}catch(n){s=H.T(n)
r=H.aN(n)
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
return}if(!!J.w(t).$iseH){if(t instanceof P.az&&t.gb4()>=4){if(t.gb4()===8){q=t
H.d(q.gb4()===8)
p=this.b
p.b=q.gea()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.cF(new P.i2(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i2.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i0.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.be(r.d,this.c)}catch(q){t=H.T(q)
s=H.aN(q)
r=this.a
r.b=new P.b7(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i_.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.f_(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.eO(t)
p.a=!1}}catch(o){s=H.T(o)
r=H.aN(o)
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
P.dG.prototype={}
P.h1.prototype={
gl:function(a){var t,s
t={}
s=new P.az(0,$.G,null,[P.o])
t.a=0
this.eY(new P.h3(t),!0,new P.h4(t,s),s.gdS())
return s}}
P.h3.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h4.prototype={
$0:function(){this.b.aX(this.a.a)},
$S:function(){return{func:1}}}
P.h2.prototype={}
P.b7.prototype={
k:function(a){return H.f(this.a)},
$isba:1}
P.iB.prototype={}
P.iE.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dp()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.k(0)
throw r},
$S:function(){return{func:1}}}
P.ie.prototype={
f5:function(a){var t,s,r
try{if(C.d===$.G){a.$0()
return}P.l0(null,null,this,a)}catch(r){t=H.T(r)
s=H.aN(r)
P.iD(null,null,this,t,s)}},
f6:function(a,b){var t,s,r
try{if(C.d===$.G){a.$1(b)
return}P.l1(null,null,this,a,b)}catch(r){t=H.T(r)
s=H.aN(r)
P.iD(null,null,this,t,s)}},
em:function(a){return new P.ih(this,a)},
b7:function(a){return new P.ig(this,a)},
en:function(a){return new P.ii(this,a)},
h:function(a,b){return},
cA:function(a){if($.G===C.d)return a.$0()
return P.l0(null,null,this,a)},
be:function(a,b){if($.G===C.d)return a.$1(b)
return P.l1(null,null,this,a,b)},
f4:function(a,b,c){if($.G===C.d)return a.$2(b,c)
return P.no(null,null,this,a,b,c)}}
P.ih.prototype={
$0:function(){return this.a.cA(this.b)},
$S:function(){return{func:1}}}
P.ig.prototype={
$0:function(){return this.a.f5(this.b)},
$S:function(){return{func:1}}}
P.ii.prototype={
$1:function(a){return this.a.f6(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dK.prototype={
am:function(a){return H.nQ(a)&0x3ffffff},
an:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i7.prototype={
gv:function(a){var t=new P.bY(this,this.r,null,null,[null])
t.c=this.e
return t},
gl:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dU(b)},
dU:function(a){var t=this.d
if(t==null)return!1
return this.aA(t[this.az(a)],a)>=0},
cr:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.e4(a)},
e4:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.az(a)]
r=this.aA(s,a)
if(r<0)return
return J.bm(s,r).gdX()},
i:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bL(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bL(r,b)}else return this.Z(0,b)},
Z:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.ng()
this.d=t}s=this.az(b)
r=t[s]
if(r==null){q=[this.aW(b)]
H.d(q!=null)
t[s]=q}else{if(this.aA(r,b)>=0)return!1
r.push(this.aW(b))}return!0},
aq:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bM(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bM(this.c,b)
else return this.e5(0,b)},
e5:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.az(b)]
r=this.aA(s,b)
if(r<0)return!1
this.bN(s.splice(r,1)[0])
return!0},
a0:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bL:function(a,b){var t
if(a[b]!=null)return!1
t=this.aW(b)
H.d(!0)
a[b]=t
return!0},
bM:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bN(t)
delete a[b]
return!0},
aW:function(a){var t,s
t=new P.i8(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bN:function(a){var t,s,r
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
for(s=0;s<t;++s)if(J.I(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.i8.prototype={
gdX:function(){return this.a}}
P.bY.prototype={
gt:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a4(t))
else{t=this.c
if(t==null){this.sag(null)
return!1}else{this.sag(t.a)
this.c=this.c.b
return!0}}},
sag:function(a){this.d=a}}
P.i5.prototype={}
P.da.prototype={}
P.y.prototype={
gv:function(a){return new H.db(a,this.gl(a),0,null,[H.ao(a,"y",0)])},
u:function(a,b){return this.h(a,b)},
cs:function(a,b){return new H.bE(a,b,[H.ao(a,"y",0),null])},
eN:function(a,b,c){var t,s,r
t=this.gl(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gl(a))throw H.e(new P.a4(a))}return s},
cp:function(a,b,c,d){var t
P.jx(b,c,this.gl(a),null,null,null)
for(t=b;t<c;++t)this.j(a,t,d)},
k:function(a){return P.eR(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f5.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.f1.prototype={
gv:function(a){return new P.i9(this,this.c,this.d,this.b,null,this.$ti)},
gao:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
u:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.av(0,b)||b>=t)H.J(P.F(b,this,"index",null,t))
return this.a[(C.b.a5(this.b,b)&this.a.length-1)>>>0]},
a0:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
k:function(a){return P.eR(this,"{","}")},
cz:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eS());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
Z:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bR();++this.d},
bR:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.E(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bs(s,0,q,t,r)
C.a.bs(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbX(s)},
dv:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbX(H.E(t,[b]))},
sbX:function(a){this.a=a},
$asc:null}
P.i9.prototype={
gt:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.J(new P.a4(t))
s=this.d
if(s===this.b){this.sag(null)
return!1}this.sag(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sag:function(a){this.e=a}}
P.fS.prototype={
I:function(a,b){var t
for(t=J.bo(b);t.p();)this.i(0,t.gt())},
k:function(a){return P.eR(this,"{","}")},
$isc:1,
$asc:null}
P.fR.prototype={}
P.bM.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.aB.prototype={}
P.L.prototype={}
P.bq.prototype={
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.bq))return!1
return this.a===b.a&&this.b===b.b},
V:function(a,b){return C.b.V(this.a,b.a)},
gA:function(a){var t=this.a
return(t^C.b.b3(t,30))&1073741823},
k:function(a){var t,s,r,q,p,o,n
t=P.mr(H.mW(this))
s=P.cf(H.mU(this))
r=P.cf(H.mQ(this))
q=P.cf(H.mR(this))
p=P.cf(H.mT(this))
o=P.cf(H.mV(this))
n=P.ms(H.mS(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isL:1,
$asL:function(){return[P.bq]}}
P.P.prototype={$isL:1,
$asL:function(){return[P.X]}}
P.aS.prototype={
aK:function(a,b){return C.b.aK(this.a,b.gdW())},
av:function(a,b){return C.b.av(this.a,b.gdW())},
B:function(a,b){if(b==null)return!1
if(!(b instanceof P.aS))return!1
return this.a===b.a},
gA:function(a){return this.a&0x1FFFFFFF},
V:function(a,b){return C.b.V(this.a,b.a)},
k:function(a){var t,s,r,q,p
t=new P.ef()
s=this.a
if(s<0)return"-"+new P.aS(0-s).k(0)
r=t.$1(C.b.M(s,6e7)%60)
q=t.$1(C.b.M(s,1e6)%60)
p=new P.ee().$1(s%1e6)
return""+C.b.M(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isL:1,
$asL:function(){return[P.aS]}}
P.ee.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.u,args:[P.o]}}}
P.ef.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.u,args:[P.o]}}}
P.ba.prototype={}
P.cb.prototype={
k:function(a){return"Assertion failed"}}
P.dp.prototype={
k:function(a){return"Throw of null."}}
P.ai.prototype={
gaZ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaY:function(){return""},
k:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaZ()+s+r
if(!this.a)return q
p=this.gaY()
o=P.jm(this.b)
return q+p+": "+H.f(o)}}
P.dt.prototype={
gaZ:function(){return"RangeError"},
gaY:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eO.prototype={
gaZ:function(){return"RangeError"},
gaY:function(){H.d(this.a)
if(J.lx(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gl:function(a){return this.f}}
P.v.prototype={
k:function(a){return"Unsupported operation: "+this.a}}
P.dE.prototype={
k:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aI.prototype={
k:function(a){return"Bad state: "+this.a}}
P.a4.prototype={
k:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jm(t))+"."}}
P.dx.prototype={
k:function(a){return"Stack Overflow"},
$isba:1}
P.e7.prototype={
k:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hU.prototype={
k:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.eh.prototype={
k:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.J(P.k2(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.kA(b,"expando$values")
return s==null?null:H.kA(s,t)}}
P.o.prototype={$isL:1,
$asL:function(){return[P.X]}}
P.Z.prototype={
aI:function(a,b){return new H.dF(this,b,[H.ao(this,"Z",0)])},
gl:function(a){var t,s
H.d(!this.$isc)
t=this.gv(this)
for(s=0;t.p();)++s
return s},
ga6:function(a){var t,s
t=this.gv(this)
if(!t.p())throw H.e(H.eS())
s=t.gt()
if(t.p())throw H.e(H.mM())
return s},
u:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.mj("index"))
if(b<0)H.J(P.aZ(b,0,null,"index",null))
for(t=this.gv(this),s=0;t.p();){r=t.gt()
if(b===s)return r;++s}throw H.e(P.F(b,this,"index",null,s))},
k:function(a){return P.mK(this,"(",")")}}
P.d7.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aG.prototype={}
P.aX.prototype={
gA:function(a){return P.q.prototype.gA.call(this,this)},
k:function(a){return"null"}}
P.X.prototype={$isL:1,
$asL:function(){return[P.X]}}
P.q.prototype={constructor:P.q,$isq:1,
B:function(a,b){return this===b},
gA:function(a){return H.aY(this)},
k:function(a){return H.fF(this)},
gC:function(a){return new H.aJ(H.iP(this),null)},
toString:function(){return this.k(this)}}
P.bP.prototype={}
P.u.prototype={$isL:1,
$asL:function(){return[P.u]}}
P.bQ.prototype={
gl:function(a){return this.a.length},
k:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga8:function(){return this.a}}
W.n.prototype={}
W.dY.prototype={
k:function(a){return String(a)},
$isa:1}
W.dZ.prototype={
k:function(a){return String(a)},
$isa:1}
W.a3.prototype={$isq:1}
W.e1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a3]},
$isc:1,
$asc:function(){return[W.a3]},
$isr:1,
$asr:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.cc.prototype={}
W.aQ.prototype={$isa:1,$isaQ:1,$ish:1}
W.cd.prototype={
bi:function(a,b,c){if(c!=null)return this.dZ(a,b,P.ny(c,null))
return this.e_(a,b)},
cX:function(a,b){return this.bi(a,b,null)},
dZ:function(a,b,c){return a.getContext(b,c)},
e_:function(a,b){return a.getContext(b)}}
W.ce.prototype={
eK:function(a,b,c,d,e){return a.fillRect(b,c,d,e)},
aJ:function(a){return P.iJ(a.getContextAttributes())}}
W.aR.prototype={$isa:1,
gl:function(a){return a.length}}
W.e5.prototype={$isa:1,$ish:1}
W.A.prototype={$isq:1}
W.b9.prototype={
bJ:function(a,b){var t,s
t=$.$get$kj()
s=t[b]
if(typeof s==="string")return s
s=this.ed(a,b)
t[b]=s
return s},
ed:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mt()+b
if(t in a)return t
return b},
gl:function(a){return a.length}}
W.e6.prototype={}
W.e8.prototype={
h:function(a,b){return a[b]},
gl:function(a){return a.length}}
W.e9.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.ch.prototype={}
W.br.prototype={
eh:function(a,b){return a.adoptNode(b)},
dV:function(a,b){return a.createEvent(b)},
bj:function(a,b){return a.getElementsByTagName(b)},
cY:function(a,b){return a.getElementById(b)},
cw:function(a,b){return a.querySelector(b)}}
W.ci.prototype={$isa:1}
W.ea.prototype={
k:function(a){return String(a)}}
W.cj.prototype={
ey:function(a,b){return a.createHTMLDocument(b)}}
W.eb.prototype={
gau:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.ck.prototype={
gau:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.cl.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga4(a))+" x "+H.f(this.ga3(a))},
B:function(a,b){var t
if(b==null)return!1
t=J.w(b)
if(!t.$isN)return!1
return a.left===t.gbb(b)&&a.top===t.gbg(b)&&this.ga4(a)===t.ga4(b)&&this.ga3(a)===t.ga3(b)},
gA:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga4(a)
q=this.ga3(a)
return W.kZ(W.b6(W.b6(W.b6(W.b6(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga3:function(a){return a.height},
gbb:function(a){return a.left},
gbg:function(a){return a.top},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isN:1,
$asN:function(){}}
W.ec.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.u]},
$isc:1,
$asc:function(){return[P.u]},
$isr:1,
$asr:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.ed.prototype={
gl:function(a){return a.length}}
W.a5.prototype={
gek:function(a){return new W.hO(a)},
k:function(a){return a.localName},
R:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.kr
if(t==null){t=H.E([],[W.dl])
s=new W.dm(t)
C.a.i(t,W.kX(null))
C.a.i(t,W.l_())
$.kr=s
d=s}else d=t
t=$.kq
if(t==null){t=new W.dN(d)
$.kq=t
c=t}else{t.a=d
c=t}}if($.aD==null){t=document
s=t.implementation
s=(s&&C.z).ey(s,"")
$.aD=s
$.jl=s.createRange()
s=$.aD
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aD.head;(t&&C.A).U(t,r)}t=$.aD
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jJ(s,"$isaQ")}t=$.aD
if(!!this.$isaQ)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aD.body;(t&&C.h).U(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.K,a.tagName)){t=$.jl;(t&&C.w).cZ(t,q)
t=$.jl
p=(t&&C.w).ew(t,b)}else{q.innerHTML=b
p=$.aD.createDocumentFragment()
for(t=J.m(p);s=q.firstChild,s!=null;)t.U(p,s)}t=$.aD.body
if(q==null?t!=null:q!==t)J.m6(q)
c.br(p)
C.e.eh(document,p)
return p},
ex:function(a,b,c){return this.R(a,b,c,null)},
d9:function(a,b,c,d){a.textContent=null
this.U(a,this.R(a,b,c,d))},
d8:function(a,b){return this.d9(a,b,null,null)},
aa:function(a,b){return a.getAttribute(b)},
e6:function(a,b){return a.removeAttribute(b)},
gcu:function(a){return new W.dI(a,"change",!1,[W.l])},
$isa:1,
$isq:1,
$isa5:1,
$ish:1,
$ist:1,
gf7:function(a){return a.tagName}}
W.iH.prototype={
$1:function(a){return!!J.w(a).$isa5},
$S:function(){return{func:1,args:[,]}}}
W.l.prototype={
e1:function(a,b,c,d){return a.initEvent(b,!0,!0)},
$isq:1,
$isl:1}
W.h.prototype={
dP:function(a,b,c,d){return a.addEventListener(b,H.c4(c,1),!1)},
eG:function(a,b){return a.dispatchEvent(b)},
$isq:1,
$ish:1}
W.a6.prototype={$isq:1}
W.eA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isr:1,
$asr:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.eB.prototype={
gl:function(a){return a.length}}
W.eF.prototype={
gl:function(a){return a.length}}
W.a7.prototype={$isq:1}
W.cr.prototype={}
W.eJ.prototype={
gl:function(a){return a.length}}
W.bA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cs.prototype={}
W.eK.prototype={
K:function(a,b){return a.send(b)}}
W.bB.prototype={}
W.bC.prototype={$isa:1,$isa5:1,$ish:1,$isbC:1}
W.aW.prototype={$isq:1,$isl:1,$isaW:1}
W.f2.prototype={
k:function(a){return String(a)}}
W.fa.prototype={
gl:function(a){return a.length}}
W.fb.prototype={
ff:function(a,b,c){return a.send(b,c)},
K:function(a,b){return a.send(b)}}
W.bF.prototype={}
W.a8.prototype={$isq:1}
W.fc.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isr:1,
$asr:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.Q.prototype={$isq:1,$isl:1,$isQ:1}
W.fm.prototype={$isa:1}
W.V.prototype={
ga6:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aI("No elements"))
if(s>1)throw H.e(new P.aI("More than one element"))
return t.firstChild},
I:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.m(s),p=0;p<r;++p)q.U(s,t.firstChild)
return},
j:function(a,b,c){var t=this.a
J.lA(t,c,C.u.h(t.childNodes,b))},
gv:function(a){var t=this.a.childNodes
return new W.cp(t,t.length,-1,null,[H.ao(t,"C",0)])},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){return C.u.h(this.a.childNodes,b)},
$asc:function(){return[W.t]},
$asda:function(){return[W.t]},
$asb:function(){return[W.t]},
$asbM:function(){return[W.t]}}
W.t.prototype={
f1:function(a){var t=a.parentNode
if(t!=null)J.bn(t,a)},
k:function(a){var t=a.nodeValue
return t==null?this.de(a):t},
U:function(a,b){return a.appendChild(b)},
e7:function(a,b){return a.removeChild(b)},
e8:function(a,b,c){return a.replaceChild(b,c)},
$isq:1,
$ish:1,
$ist:1,
gbc:function(a){return a.previousSibling}}
W.dk.prototype={
bd:function(a){return a.previousNode()}}
W.bL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.fv.prototype={$isa:1}
W.fy.prototype={
gl:function(a){return a.length}}
W.a9.prototype={$isq:1,
gl:function(a){return a.length}}
W.fA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isr:1,
$asr:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.fD.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fE.prototype={
K:function(a,b){return a.send(b)}}
W.ds.prototype={
ew:function(a,b){return a.createContextualFragment(b)},
cZ:function(a,b){return a.selectNodeContents(b)}}
W.fP.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.du.prototype={
K:function(a,b){return a.send(b)}}
W.bO.prototype={$isbO:1,
gl:function(a){return a.length}}
W.fT.prototype={$isa:1,$ish:1}
W.aa.prototype={$isq:1,$ish:1}
W.fU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isr:1,
$asr:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ab.prototype={$isq:1}
W.fW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isr:1,
$asr:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.ac.prototype={$isq:1,
gl:function(a){return a.length}}
W.h0.prototype={
h:function(a,b){return this.bQ(a,b)},
aD:function(a,b){var t,s
for(t=0;!0;++t){s=this.e3(a,t)
if(s==null)return
b.$2(s,this.bQ(a,s))}},
gl:function(a){return a.length},
bQ:function(a,b){return a.getItem(b)},
e3:function(a,b){return a.key(b)}}
W.a_.prototype={$isq:1}
W.am.prototype={}
W.dy.prototype={
R:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
t=W.mu("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.V(s).I(0,new W.V(t))
return s}}
W.h8.prototype={
R:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.x.R(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga6(t)
r.toString
t=new W.V(r)
q=t.ga6(t)
s.toString
q.toString
new W.V(s).I(0,new W.V(q))
return s}}
W.h9.prototype={
R:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aN(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.x.R(t.createElement("table"),b,c,d)
t.toString
t=new W.V(t)
r=t.ga6(t)
s.toString
r.toString
new W.V(s).I(0,new W.V(r))
return s}}
W.bR.prototype={$isbR:1}
W.ad.prototype={$isq:1,$ish:1}
W.a0.prototype={$isq:1,$ish:1}
W.hc.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a0]},
$isc:1,
$asc:function(){return[W.a0]},
$isr:1,
$asr:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.hd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$isr:1,
$asr:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.hf.prototype={
gl:function(a){return a.length}}
W.ae.prototype={$isq:1}
W.b_.prototype={$isq:1,$isl:1,$isb_:1}
W.hj.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ae]},
$isc:1,
$asc:function(){return[W.ae]},
$isr:1,
$asr:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.hk.prototype={
gl:function(a){return a.length}}
W.bh.prototype={}
W.hm.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
W.dC.prototype={
bd:function(a){return a.previousNode()}}
W.aK.prototype={}
W.hr.prototype={
k:function(a){return String(a)},
$isa:1}
W.ht.prototype={
gl:function(a){return a.length}}
W.hw.prototype={
gl:function(a){return a.length}}
W.hx.prototype={
K:function(a,b){return a.send(b)}}
W.b1.prototype={
geA:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.v("deltaY is not supported"))},
$isq:1,
$isl:1,
$isQ:1,
$isb1:1}
W.bU.prototype={
gej:function(a){var t,s
t=P.X
s=new P.az(0,$.G,null,[t])
this.dY(a)
this.e9(a,W.l3(new W.hz(new P.iu(s,[t]))))
return s},
e9:function(a,b){return a.requestAnimationFrame(H.c4(b,1))},
dY:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1,
$ish:1}
W.hz.prototype={
$1:function(a){this.a.er(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hA.prototype={$isa:1,$ish:1}
W.b2.prototype={$isa:1}
W.hI.prototype={
k:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
B:function(a,b){var t,s,r
if(b==null)return!1
t=J.w(b)
if(!t.$isN)return!1
s=a.left
r=t.gbb(b)
if(s==null?r==null:s===r){s=a.top
r=t.gbg(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga4(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga3(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gA:function(a){var t,s,r,q
t=J.ar(a.left)
s=J.ar(a.top)
r=J.ar(a.width)
q=J.ar(a.height)
return W.kZ(W.b6(W.b6(W.b6(W.b6(0,t),s),r),q))},
$isN:1,
$asN:function(){},
ga3:function(a){return a.height},
gbb:function(a){return a.left},
gbg:function(a){return a.top},
ga4:function(a){return a.width}}
W.dH.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[P.N]},
$isc:1,
$asc:function(){return[P.N]},
$isr:1,
$asr:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.hK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isr:1,
$asr:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hM.prototype={$isa:1}
W.hN.prototype={
ga3:function(a){return a.height},
ga4:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isr:1,
$asr:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.i4.prototype={$isa:1,$ish:1}
W.dL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.t]},
$isc:1,
$asc:function(){return[W.t]},
$isr:1,
$asr:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.io.prototype={$isa:1,$ish:1}
W.ir.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isr:1,
$asr:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.is.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$isp:1,
$asp:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isr:1,
$asr:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.iz.prototype={$isa:1}
W.iA.prototype={$isa:1}
W.hG.prototype={
aD:function(a,b){var t,s,r,q,p,o
for(t=this.gF(this),s=t.length,r=this.a,q=J.m(r),p=0;p<t.length;t.length===s||(0,H.D)(t),++p){o=t[p]
b.$2(o,q.aa(r,o))}},
gF:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.E([],[P.u])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.i(s,p.name)}return s},
ge0:function(){return this.a}}
W.hO.prototype={
h:function(a,b){return J.ji(this.a,b)},
gl:function(a){return this.gF(this).length}}
W.hR.prototype={
eY:function(a,b,c,d){return W.af(this.a,this.b,a,!1,H.aC(this,0))}}
W.dI.prototype={}
W.hS.prototype={
ef:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.ly(r,this.c,t,!1)}},
dK:function(a,b,c,d,e){this.ef()}}
W.hT.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bX.prototype={
a9:function(a){return $.$get$kY().E(0,W.bs(a))},
a_:function(a,b,c){var t,s,r
t=W.bs(a)
s=$.$get$jC()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dL:function(a){var t,s
t=$.$get$jC()
if(t.gao(t)){for(s=0;s<262;++s)t.j(0,C.J[s],W.nF())
for(s=0;s<12;++s)t.j(0,C.l[s],W.nG())}}}
W.C.prototype={
gv:function(a){return new W.cp(a,this.gl(a),-1,null,[H.ao(a,"C",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dm.prototype={
a9:function(a){return C.a.c1(this.a,new W.fo(a))},
a_:function(a,b,c){return C.a.c1(this.a,new W.fn(a,b,c))}}
W.fo.prototype={
$1:function(a){return a.a9(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fn.prototype={
$1:function(a){return a.a_(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c_.prototype={
a9:function(a){return this.a.E(0,W.bs(a))},
a_:function(a,b,c){var t,s
t=W.bs(a)
s=this.c
if(s.E(0,H.f(t)+"::"+b))return this.d.ei(c)
else if(s.E(0,"*::"+b))return this.d.ei(c)
else{s=this.b
if(s.E(0,H.f(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.f(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
dN:function(a,b,c,d){var t,s,r
this.a.I(0,c)
t=b.aI(0,new W.ip())
s=b.aI(0,new W.iq())
this.b.I(0,t)
r=this.c
r.I(0,C.L)
r.I(0,s)}}
W.ip.prototype={
$1:function(a){return!C.a.E(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.iq.prototype={
$1:function(a){return C.a.E(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.iv.prototype={
a_:function(a,b,c){if(this.dh(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.ji(a,"template")==="")return this.e.E(0,b)
return!1}}
W.iw.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.it.prototype={
a9:function(a){var t=J.w(a)
if(!!t.$isbN)return!1
t=!!t.$isK
if(t&&W.bs(a)==="foreignObject")return!1
if(t)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.f.bu(b,"on"))return!1
return this.a9(a)}}
W.cp.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbS(J.bm(this.a,t))
this.c=t
return!0}this.sbS(null)
this.c=s
return!1},
gt:function(){return this.d},
sbS:function(a){this.d=a}}
W.hL.prototype={$isa:1,$ish:1}
W.dl.prototype={}
W.im.prototype={}
W.dN.prototype={
br:function(a){new W.ix(this).$2(a,null)},
aC:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bn(t,a)}else J.bn(b,a)},
ec:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lU(a)
r=J.ji(s.ge0(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.T(n)}p="element unprintable"
try{p=J.Y(a)}catch(n){H.T(n)}try{o=W.bs(a)
this.eb(a,b,t,p,o,s,r)}catch(n){if(H.T(n) instanceof P.ai)throw n
else{this.aC(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
eb:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aC(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a9(a)){this.aC(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.Y(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.a_(a,"is",g)){this.aC(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gF(f)
s=H.E(t.slice(0),[H.aC(t,0)])
for(r=f.gF(f).length-1,t=f.a,q=J.m(t);r>=0;--r){p=s[r]
if(!this.a.a_(a,J.mb(p),q.aa(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.aa(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.aa(t,p)
q.e6(t,p)}}if(!!J.w(a).$isbR)this.br(a.content)}}
W.ix.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.ec(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bn(r,a)}else J.bn(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lW(t)}catch(q){H.T(q)
r=t
J.bn(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.t,W.t]}}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.bw.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.bx.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.by.prototype={$isc:1,
$asc:function(){return[W.a3]},
$isb:1,
$asb:function(){return[W.a3]}}
W.ct.prototype={}
W.cN.prototype={$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.cz.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cD.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cE.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.ae]},
$isb:1,
$asb:function(){return[W.ae]}}
W.d4.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.d5.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.d6.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.cS.prototype={$isc:1,
$asc:function(){return[W.t]},
$isb:1,
$asb:function(){return[W.t]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a0]},
$isb:1,
$asb:function(){return[W.a0]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.d1.prototype={$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
P.iI.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.u,,]}}}
P.id.prototype={}
P.N.prototype={$asN:null}
P.dX.prototype={$isa:1}
P.aP.prototype={$isa:1}
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
P.er.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eu.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ev.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
P.ew.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ex.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gN:function(a){return a.z}}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ez.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eC.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eE.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aj.prototype={}
P.aE.prototype={$isa:1}
P.eM.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isq:1}
P.eX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.f6.prototype={$isa:1}
P.f7.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.av.prototype={$isq:1}
P.fp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.fw.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fC.prototype={
gl:function(a){return a.length}}
P.fI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fJ.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bN.prototype={$isa:1,$isbN:1}
P.h5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.K.prototype={
R:function(a,b,c,d){var t,s,r,q,p,o
t=H.E([],[W.dl])
C.a.i(t,W.kX(null))
C.a.i(t,W.l_())
C.a.i(t,new W.it())
c=new W.dN(new W.dm(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.h).ex(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.V(q)
o=t.ga6(t)
for(t=J.m(p);r=o.firstChild,r!=null;)t.U(p,r)
return p},
gcu:function(a){return new W.dI(a,"change",!1,[W.l])},
$isa:1,
$ish:1,
$isK:1}
P.h6.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h7.prototype={$isa:1}
P.dz.prototype={}
P.hb.prototype={$isa:1}
P.bS.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.aw.prototype={$isq:1}
P.hl.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return this.a2(a,b)},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
a2:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.hs.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hu.prototype={$isa:1}
P.hv.prototype={$isa:1}
P.bW.prototype={$isa:1}
P.ij.prototype={$isa:1}
P.ik.prototype={$isa:1}
P.il.prototype={$isa:1}
P.cw.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cu.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.cB.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cF.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cQ.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cY.prototype={$isc:1,
$asc:function(){return[P.av]},
$isb:1,
$asb:function(){return[P.av]}}
P.cU.prototype={$isc:1,
$asc:function(){return[P.aw]},
$isb:1,
$asb:function(){return[P.aw]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.u]},
$isb:1,
$asb:function(){return[P.u]}}
P.e0.prototype={
gl:function(a){return a.length}}
P.fN.prototype={
c_:function(a,b){return a.activeTexture(b)},
c2:function(a,b,c){return a.attachShader(b,c)},
c3:function(a,b,c){return a.bindBuffer(b,c)},
c4:function(a,b,c){return a.bindFramebuffer(b,c)},
c5:function(a,b,c){return a.bindTexture(b,c)},
c6:function(a,b){return a.blendEquation(b)},
c7:function(a,b,c){return a.blendFunc(b,c)},
c8:function(a,b,c,d){return a.bufferData(b,c,d)},
c9:function(a,b){return a.clear(b)},
ca:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cb:function(a,b){return a.compileShader(b)},
cc:function(a){return a.createBuffer()},
cd:function(a){return a.createProgram()},
ce:function(a,b){return a.createShader(b)},
cf:function(a){return a.createTexture()},
ci:function(a,b){return a.depthMask(b)},
cj:function(a,b){return a.disable(b)},
ck:function(a,b,c,d){return a.drawArrays(b,c,d)},
cl:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cm:function(a,b){return a.enable(b)},
cn:function(a,b){return a.enableVertexAttribArray(b)},
aJ:function(a){return P.iJ(a.getContextAttributes())},
bk:function(a){return a.getError()},
bl:function(a,b){return a.getProgramInfoLog(b)},
bm:function(a,b,c){return a.getProgramParameter(b,c)},
bn:function(a,b){return a.getShaderInfoLog(b)},
bo:function(a,b,c){return a.getShaderParameter(b,c)},
bp:function(a,b,c){return a.getUniformLocation(b,c)},
cq:function(a,b){return a.linkProgram(b)},
cv:function(a,b,c){return a.pixelStorei(b,c)},
bt:function(a,b,c){return a.shaderSource(b,c)},
bv:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bf:function(a,b,c,d,e,f,g,h,i,j){this.b5(a,b,c,d,e,f,g)
return},
cC:function(a,b,c,d,e,f,g){return this.bf(a,b,c,d,e,f,g,null,null,null)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cD:function(a,b,c,d){return a.texParameterf(b,c,d)},
cE:function(a,b,c,d){return a.texParameteri(b,c,d)},
cH:function(a,b,c){return a.uniform1f(b,c)},
cI:function(a,b,c){return a.uniform1fv(b,c)},
cJ:function(a,b,c){return a.uniform1i(b,c)},
cK:function(a,b,c){return a.uniform1iv(b,c)},
cL:function(a,b,c){return a.uniform2fv(b,c)},
cM:function(a,b,c){return a.uniform3fv(b,c)},
cN:function(a,b,c){return a.uniform4fv(b,c)},
cO:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cP:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cR:function(a,b){return a.useProgram(b)},
cS:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cT:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fO.prototype={
el:function(a,b){return a.beginTransformFeedback(b)},
eo:function(a,b){return a.bindVertexArray(b)},
ez:function(a){return a.createVertexArray()},
eH:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
eI:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eJ:function(a){return a.endTransformFeedback()},
fc:function(a,b,c,d){this.ee(a,b,c,d)
return},
ee:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
fd:function(a,b,c){return a.vertexAttribDivisor(b,c)},
c_:function(a,b){return a.activeTexture(b)},
c2:function(a,b,c){return a.attachShader(b,c)},
c3:function(a,b,c){return a.bindBuffer(b,c)},
c4:function(a,b,c){return a.bindFramebuffer(b,c)},
c5:function(a,b,c){return a.bindTexture(b,c)},
c6:function(a,b){return a.blendEquation(b)},
c7:function(a,b,c){return a.blendFunc(b,c)},
c8:function(a,b,c,d){return a.bufferData(b,c,d)},
c9:function(a,b){return a.clear(b)},
ca:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
cb:function(a,b){return a.compileShader(b)},
cc:function(a){return a.createBuffer()},
cd:function(a){return a.createProgram()},
ce:function(a,b){return a.createShader(b)},
cf:function(a){return a.createTexture()},
ci:function(a,b){return a.depthMask(b)},
cj:function(a,b){return a.disable(b)},
ck:function(a,b,c,d){return a.drawArrays(b,c,d)},
cl:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
cm:function(a,b){return a.enable(b)},
cn:function(a,b){return a.enableVertexAttribArray(b)},
aJ:function(a){return P.iJ(a.getContextAttributes())},
bk:function(a){return a.getError()},
bl:function(a,b){return a.getProgramInfoLog(b)},
bm:function(a,b,c){return a.getProgramParameter(b,c)},
bn:function(a,b){return a.getShaderInfoLog(b)},
bo:function(a,b,c){return a.getShaderParameter(b,c)},
bp:function(a,b,c){return a.getUniformLocation(b,c)},
cq:function(a,b){return a.linkProgram(b)},
cv:function(a,b,c){return a.pixelStorei(b,c)},
bt:function(a,b,c){return a.shaderSource(b,c)},
bv:function(a,b,c,d){return a.stencilFunc(b,c,d)},
bf:function(a,b,c,d,e,f,g,h,i,j){this.b5(a,b,c,d,e,f,g)
return},
cC:function(a,b,c,d,e,f,g){return this.bf(a,b,c,d,e,f,g,null,null,null)},
b5:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
cD:function(a,b,c,d){return a.texParameterf(b,c,d)},
cE:function(a,b,c,d){return a.texParameteri(b,c,d)},
cH:function(a,b,c){return a.uniform1f(b,c)},
cI:function(a,b,c){return a.uniform1fv(b,c)},
cJ:function(a,b,c){return a.uniform1i(b,c)},
cK:function(a,b,c){return a.uniform1iv(b,c)},
cL:function(a,b,c){return a.uniform2fv(b,c)},
cM:function(a,b,c){return a.uniform3fv(b,c)},
cN:function(a,b,c){return a.uniform4fv(b,c)},
cO:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cP:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cR:function(a,b){return a.useProgram(b)},
cS:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cT:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iy.prototype={$isa:1}
P.fX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.F(b,a,null,null,null))
return P.iJ(this.e2(a,b))},
j:function(a,b,c){throw H.e(new P.v("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
e2:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
P.cP.prototype={$isc:1,
$asc:function(){return[P.aG]},
$isb:1,
$asb:function(){return[P.aG]}}
B.j5.prototype={
$1:function(a){$.$get$iK().j(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aW]}}}
B.j6.prototype={
$1:function(a){$.$get$iK().j(0,a.which,null)},
$S:function(){return{func:1,args:[W.aW]}}}
B.j7.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nw=t
$.nx=C.b.ac(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jM=s-C.b.M(window.innerWidth,2)
$.ln=-(t-C.b.M(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.Q]}}}
B.j8.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c7=t-C.b.M(window.innerWidth,2)
$.c8=-(s-C.b.M(window.innerHeight,2))
if(a.button===2)$.$get$c5().j(0,"right",!0)
else $.$get$c5().j(0,"left",!0)},
$S:function(){return{func:1,args:[W.Q]}}}
B.j9.prototype={
$1:function(a){if(a.button===2)$.$get$c5().j(0,"right",null)
else $.$get$c5().j(0,"left",null)},
$S:function(){return{func:1,args:[W.Q]}}}
B.fq.prototype={
dz:function(a,b,c,d){var t
d.toString
W.af(d,W.nE().$1(d),new B.fr(this),!1,W.b1)
W.af(d,"mousemove",new B.fs(this),!1,W.Q)
t=W.b_
W.af(d,"touchstart",new B.ft(),!1,t)
W.af(d,"touchmove",new B.fu(this),!1,t)
B.nU(null)}}
B.fr.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a3.geA(a)*r.k3
if(C.c.ac(r.fy,t)>0)r.fy=H.a1(C.c.ac(r.fy,t))}catch(q){s=H.T(q)
P.ah(s)}},
$S:function(){return{func:1,args:[W.b1]}}}
B.fs.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a1(t.go+C.b.ac($.jM,$.c7)*0.01)
s=t.id
r=$.c8
q=$.ln
t.id=H.a1(s+(r-q)*0.01)
$.c7=$.jM
$.c8=q}},
$S:function(){return{func:1,args:[W.Q]}}}
B.ft.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.W(t.clientX)
C.c.W(t.clientY)
$.c7=s
C.c.W(t.clientX)
$.c8=C.c.W(t.clientY)},
$S:function(){return{func:1,args:[W.b_]}}}
B.fu.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.W(t.clientX)
t=C.c.W(t.clientY)
r=this.a
r.go=H.a1(r.go+C.b.ac(s,$.c7)*0.01)
r.id=H.a1(r.id+($.c8-t)*0.01)
$.c7=s
$.c8=t},
$S:function(){return{func:1,args:[W.b_]}}}
G.fd.prototype={}
G.dD.prototype={
H:function(a,b){var t=this.d
if(H.aA(!t.G(0,a)))H.aM("uniform "+a+" already set")
t.j(0,a,b)},
aT:function(){return this.d},
k:function(a){var t,s,r,q
t=H.E(["{"+new H.aJ(H.iP(this),null).k(0)+"}["+H.f(this.a)+"]"],[P.u])
for(s=this.d,r=s.gF(s),r=r.gv(r);r.p();){q=r.gt()
C.a.i(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ap(t,"\n")}}
G.e2.prototype={}
G.e4.prototype={
co:function(a,b,c){J.lR(this.a,b)
if(c>0)J.mh(this.a,b,c)}}
G.eG.prototype={}
G.B.prototype={}
G.cn.prototype={}
G.bz.prototype={
a7:function(a){var t=this.e
H.d(!t.G(0,a))
H.d(C.f.bu(a,"a"))
switch($.$get$W().h(0,a).a){case"vec2":t.j(0,a,H.E([],[T.x]))
break
case"vec3":t.j(0,a,H.E([],[T.i]))
break
case"vec4":t.j(0,a,H.E([],[T.aL]))
break
case"float":t.j(0,a,H.E([],[P.P]))
break
case"uvec4":t.j(0,a,H.E([],[[P.b,P.o]]))
break
default:if(H.aA(!1))H.aM("unknown type for "+a)}},
dj:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.i(s,new G.cn(t,t+1,t+2,t+3))},
ae:function(a){var t,s,r,q,p
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=a[r]
q.toString
p=new T.i(new Float32Array(3))
p.w(q)
C.a.i(s,p)}},
dk:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.i(this.b,new G.B(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.i(new Float32Array(3))
p.w(q)
C.a.i(t,p)}},
aQ:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.D)(b),++q){p=b[q]
p.toString
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.i(t,new T.x(o))}},
aR:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.D)(b),++q){p=b[q]
p.toString
o=new T.i(new Float32Array(3))
o.w(p)
r.i(t,o)}},
dr:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.E(r,[P.o])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.D)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.D)(s),++o){l=s[o]
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
k:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gF(s),r=r.gv(r);r.p();){q=r.gt()
p=$.$get$W().h(0,q).a
C.a.i(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ap(t," ")}}
G.eY.prototype={}
G.dq.prototype={
aS:function(a,b){var t=this.x.a
a[b]=t[0]
a[b+1]=t[1]
a[b+2]=t[2]
t=this.y.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.z.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]
a[b+7]=this.Q},
k:function(a){return"PL: p:"+J.Y(this.x)+"  r:"+this.Q}}
G.cg.prototype={
aS:function(a,b){var t=this.x.a
a[b+4]=t[0]
a[b+5]=t[1]
a[b+6]=t[2]
t=this.y.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.z.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]},
k:function(a){return"DL: p:"+J.Y(this.x)}}
G.dw.prototype={
aS:function(a,b){var t=this.x.a
a[b]=t[0]
a[b+1]=t[1]
a[b+2]=t[2]
t=this.y.a
a[b+4]=t[0]
a[b+5]=t[1]
a[b+6]=t[2]
t=this.z.a
a[b+8]=t[0]
a[b+9]=t[1]
a[b+10]=t[2]
t=this.Q.a
a[b+12]=t[0]
a[b+13]=t[1]
a[b+14]=t[2]
a[b+7]=this.ch
a[b+11]=Math.cos(H.l8(this.cx))
a[b+15]=this.cy},
k:function(a){return"SL: p:"+J.Y(this.x)+"  d:"+J.Y(this.y)+"  r:"+this.ch+"  a:"+H.f(this.cx)}}
G.eL.prototype={
aT:function(){var t,s,r
t=this.y
s=this.z
G.mD(t,s,this.x)
r=this.d
r.j(0,"uLightDescs",t)
r.j(0,"uLightTypes",s)
return r}}
G.dB.prototype={}
G.dA.prototype={}
G.f8.prototype={
dw:function(a){this.H("cDepthTest",!0)
this.H("cDepthWrite",!0)
this.H("cBlendEquation",$.$get$k3())
this.H("cStencilFunc",$.$get$kE())}}
G.de.prototype={
by:function(a,b,c){var t,s
if(C.f.aV(a,0)===105){if(H.aA(C.b.aO(b.length,c)===this.z))H.aM("ChangeAttribute "+this.z)}else H.d(C.b.aO(b.length,c)===(this.ch.length/3|0))
this.cy.j(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dT(t.a,34962,s)
J.jR(t.a,34962,b,35048)},
ax:function(a){this.ch=a
this.by("aPosition",a,3)},
ds:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
ad:function(a,b,c){var t,s,r,q,p,o
t=J.jO(a,0)===105
if(t&&this.z===0)this.z=C.b.aO(b.length,c)
s=this.r
r=this.d
s.j(0,a,J.dV(r.a))
this.by(a,b,c)
q=$.$get$W().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aA(p.G(0,a)))H.aM("unexpected attribute "+a)
o=p.h(0,a)
J.dU(r.a,this.e)
r.co(0,o,t?1:0)
s=s.h(0,a)
p=q.bz()
J.dT(r.a,34962,s)
J.k0(r.a,o,p,5126,!1,0,0)},
ae:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.j(0,"aPosition",J.dV(s.a))
this.ax(a)
r=$.$get$W().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.G(0,"aPosition"))
p=q.h(0,"aPosition")
J.dU(s.a,this.e)
s.co(0,p,0)
t=t.h(0,"aPosition")
q=r.bz()
J.dT(s.a,34962,t)
J.k0(s.a,p,q,5126,!1,0,0)},
af:function(a){var t,s,r,q
H.d(this.ch!=null)
t=this.ch.length
if(t<768){this.sb_(new Uint8Array(H.iC(a)))
this.Q=5121}else if(t<196608){this.sb_(new Uint16Array(H.iC(a)))
this.Q=5123}else{this.sb_(new Uint32Array(H.iC(a)))
this.Q=5125}t=this.d
J.dU(t.a,this.e)
s=this.y
r=this.cx
t.toString
q=J.w(r)
H.d(!!q.$iskR||!!q.$iskS||!!q.$iskT)
J.dT(t.a,34963,s)
J.jR(t.a,34963,r,35048)},
k:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,t=t.gF(t),t=t.gv(t);t.p();){r=t.gt()
C.a.i(s,H.f(r)+":"+this.cy.h(0,r).length)}return"MESH["+H.f(this.a)+"] "+C.a.ap(s,"  ")},
sb_:function(a){this.cx=a}}
G.fx.prototype={
dl:function(a,b){var t=C.b.cV(a,b)
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
t.ab(0,0,1/(p*s))
t.ab(1,1,1/p)
t.ab(2,2,(q+r)/o)
t.ab(3,2,-1)
t.ab(2,3,2*r*q/o)},
aT:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.i(new Float32Array(H.j(3)))
o.q(r,q,p)
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
s=J.w(n)
r=!!s.$isaL
k=r?s.gau(n):1
if(!!s.$isi){j=s.gm(n)
m=s.gn(n)
l=s.gN(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gN(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.J(t[0],n)
r=C.c.J(t[4],m)
q=C.c.J(t[8],l)
i=t[12]
h=C.c.J(t[1],n)
g=C.c.J(t[5],m)
f=C.c.J(t[9],l)
e=t[13]
d=C.c.J(t[2],n)
c=C.c.J(t[6],m)
b=C.c.J(t[10],l)
a=t[14]
a0=C.c.J(t[3],n)
a1=C.c.J(t[7],m)
a2=C.c.J(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.w(this.db)
a3.ct(0,o)
p.j(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fM.prototype={
dt:function(a){var t,s,r,q,p,o
t=this.e.x
s=a.e.x
if(t.gl(t)!==s.gl(s))return!1
for(r=t.gF(t),r=r.gv(r);r.p();){q=r.gt()
p=t.h(0,q)
o=s.h(0,q)
if(p==null?o!=null:p!==o)return!1}return!0},
dG:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gl(t)===s.gl(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gF(s),s=s.gv(s);s.p();){q=s.gt()
if(!t.G(0,q))C.a.i(r,q)}for(t=this.x,s=new P.bY(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.E(0,q))C.a.i(r,q)}return r},
dJ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gF(b),s=s.gv(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gt()
switch(J.jO(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.dR("E:"+(n+" : group ["+H.f(a)+"] overwrites ["+n+"]"))
p.j(0,n,a)
l=$.$get$W().h(0,n)
if(l==null)H.J("unknown "+n)
H.d(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jj(r.a,k,m)
else if(!!J.w(m).$isku)J.mf(r.a,k,m)
break
case"float":if(l.c===0)J.md(r.a,k,m)
else if(!!J.w(m).$iseD)J.me(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.ap(m,"$isM").a
J.k_(r.a,k,!1,j)}else if(!!J.w(m).$iseD)J.k_(r.a,k,!1,m)
else if(H.aA(!1))H.aM("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.ap(m,"$isau").a
J.jZ(r.a,k,!1,j)}else if(!!J.w(m).$iseD)J.jZ(r.a,k,!1,m)
else if(H.aA(!1))H.aM("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.ap(m,"$isaL").a
J.jY(r.a,k,j)}else J.jY(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.ap(m,"$isi").a
J.jX(r.a,k,j)}else J.jX(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.ap(m,"$isx").a
J.jW(r.a,k,j)}else J.jW(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a5(33984,this.ch)
J.jP(r.a,j)
j=H.ap(m,"$isbT").b
J.c9(r.a,3553,j)
j=this.ch
J.jj(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a5(33984,this.ch)
J.jP(r.a,j)
j=H.ap(m,"$isbT").b
J.c9(r.a,34067,j)
j=this.ch
J.jj(r.a,k,j)
this.ch=this.ch+1
break
default:H.dR("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.I(m,!0))J.ca(r.a,2929)
else J.jf(r.a,2929)
break
case"cStencilFunc":H.ap(m,"$isdB")
j=m.a
if(j===1281)J.jf(r.a,2960)
else{J.ca(r.a,2960)
i=m.b
h=m.c
J.m8(r.a,j,i,h)}break
case"cDepthWrite":J.lK(r.a,m)
break
case"cBlendEquation":H.ap(m,"$isdA")
j=m.a
if(j===1281)J.jf(r.a,3042)
else{J.ca(r.a,3042)
i=m.b
h=m.c
J.lE(r.a,i,h)
J.lD(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aS(1000*(s-new P.bq(t,!1).a)).k(0)},
dq:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.mg(t.a,s)
this.ch=0
this.z.a0(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.D)(b),++r){q=b[r]
this.dJ(q.a,q.aT())}s=this.Q
s.a0(0)
for(p=a.cy,p=p.gF(p),p=p.gv(p);p.p();)s.i(0,p.gt())
o=this.dG()
if(o.length!==0)P.ah("E:"+(H.f(this.a)+" "+a.f+": uninitialized inputs: "+H.f(o)))
s=a.d
p=a.e
J.dU(s.a,p)
n=this.e.f.length>0
p=a.f
s=a.ds()
m=a.Q
l=a.z
t.toString
if(n)J.lB(t.a,p)
if(m!==-1)if(l>1)J.lP(t.a,p,s,m,0,l)
else J.lO(t.a,p,s,m,0)
else if(l>1)J.lN(t.a,p,0,s,l)
else J.lM(t.a,p,0,s)
if(n)J.lS(t.a)},
dB:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lI(t.a)
m=G.kU(t.a,35633,r)
J.jQ(t.a,n,m)
l=G.kU(t.a,35632,p)
J.jQ(t.a,n,l)
if(o.length>0)J.mc(t.a,n,o,35980)
J.m3(t.a,n)
if(!J.m2(t.a,n,35714))H.J(J.m1(t.a,n))
this.r=n
this.sdQ(0,P.ju(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.D)(s),++k){j=s[k]
o=this.r
p.j(0,j,J.jU(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.D)(s),++k){j=s[k]
q=this.r
p.j(0,j,J.jU(t.a,q,j))}},
sdQ:function(a,b){this.x=b}}
G.k.prototype={
bz:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.aH.prototype={
aP:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.D)(a),++q){p=a[q]
H.d($.$get$W().G(0,p))
H.d(!C.a.E(s,p))
C.a.i(s,p)
r.j(0,p,this.r);++this.r}C.a.aM(s)},
Y:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=a[r]
if(H.aA($.$get$W().G(0,q)))H.aM("missing uniform "+q)
H.d(!C.a.E(s,q))
C.a.i(s,q)}C.a.aM(s)},
aw:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.e,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=a[r]
H.d($.$get$W().G(0,q))
H.d(!C.a.E(s,q))
C.a.i(s,q)}C.a.aM(s)},
bB:function(a,b){H.d(this.b==null)
this.b=this.bD(!0,a,b)},
aU:function(a){return this.bB(a,null)},
bA:function(a,b){H.d(this.b==null)
this.b=this.bD(!1,a,b)},
dC:function(a){return this.bA(a,null)},
bD:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
m=$.$get$W().h(0,n)
C.a.i(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.i(q,"")
l=r?"in":"out"
if(r)C.a.i(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
C.a.i(q,l+" "+m.a+" "+H.f(k)+";")}C.a.i(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){k=t[o]
m=$.$get$W().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.i(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.i(q,"")
if(c!=null)C.a.I(q,c)
if(a)C.a.i(q,"void main(void) {")
C.a.I(q,b)
if(a)C.a.i(q,"}")
return C.a.ap(q,"\n")}}
G.fV.prototype={
bh:function(){var t,s,r
t=this.f
s=this.d.a
r=t.a
r[0]=s[2]
r[1]=s[6]
r[2]=s[10]
return t},
bq:function(){var t,s,r
t=this.r
s=this.d.a
r=t.a
r[0]=s[1]
r[1]=s[5]
r[2]=s[9]
return t},
aL:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
G.he.prototype={
du:function(a,b){var t=this.e
if(t!==1)J.ma(a.a,b,34046,t)
J.jV(a.a,b,10240,this.r)
J.jV(a.a,b,10241,this.f)}}
G.bT.prototype={
k:function(a){return"Texture["+this.a+", "+this.c+"]"}}
G.eN.prototype={
dD:function(a){var t,s
t=this.d
s=this.c
J.c9(t.a,s,this.b)
J.m9(t.a,s,0,6408,6408,5121,a)}}
R.fZ.prototype={
dM:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.nb("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.p).bJ(r,"float")
r.setProperty(p,"left","")
p=C.p.bJ(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.i.U(t,s)}return t},
dE:function(a,b,c){var t,s,r
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
J.jd(this.a,s)
r=this.dM(b,c,90,30)
this.d=r
J.jd(this.a,r)
t=t.createElement("div")
this.c=t
J.jd(this.a,t)}}
R.h_.prototype={
dI:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.j.fb(s,2)+" fps"
t=this.c;(t&&C.i).d8(t,b)
r=C.b.M(30*C.j.ep(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.i).U(t,q)},
dH:function(a){return this.dI(a,"")}}
A.be.prototype={
k:function(a){return"NODE["+H.f(this.a)+"]"}}
A.bg.prototype={}
A.fL.prototype={
dn:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lC(p.a,36160,t)
H.d(r>0&&q>0)
J.mi(p.a,this.x,this.y,r,q)
if(s!==0)J.lF(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.D)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.i(m,new G.dD(P.H(),"transforms",!1,!0))
l=new T.M(new Float32Array(16))
l.L()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.D)(q),++k)A.la(r,q[k],l,a,m)
m.pop()}},
dm:function(){return this.dn(null)},
dA:function(a,b,c){if(this.d==null)this.d=new G.eG(this.e,null,null,null,null)}}
B.eI.prototype={
$2:function(a,b){return a*(this.a+1)+b},
$S:function(){return{func:1,ret:P.o,args:[P.o,P.o]}}}
A.iQ.prototype={
$2:function(a,b){var t=536870911&a+J.ar(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.q]}}}
T.au.prototype={
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.au){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gA:function(a){return A.dP(this.a)},
X:function(a){var t,s
t=new Float32Array(H.j(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.i(t)},
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
T.M.prototype={
ab:function(a,b,c){H.d(a<4)
H.d(b<4)
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
k:function(a){return"[0] "+this.X(0).k(0)+"\n[1] "+this.X(1).k(0)+"\n[2] "+this.X(2).k(0)+"\n[3] "+this.X(3).k(0)+"\n"},
h:function(a,b){return this.a[b]},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.M){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gA:function(a){return A.dP(this.a)},
X:function(a){var t,s
t=new Float32Array(H.j(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aL(t)},
ar:function(a7,a8,a9){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
t=Math.sqrt(a8.gS())
s=a8.a
r=s[0]/t
q=s[1]/t
p=s[2]/t
t=Math.cos(a9)
o=Math.sin(a9)
n=1-t
m=r*r*n+t
l=p*o
k=r*q*n-l
j=q*o
i=r*p*n+j
h=q*r*n+l
g=q*q*n+t
o=r*o
f=q*p*n-o
e=p*r*n-j
d=p*q*n+o
c=p*p*n+t
t=this.a
o=t[0]
j=t[4]
l=t[8]
b=t[1]
a=t[5]
a0=t[9]
a1=t[2]
a2=t[6]
a3=t[10]
a4=t[3]
a5=t[7]
a6=t[11]
t[0]=o*m+j*h+l*e
t[1]=b*m+a*h+a0*e
t[2]=a1*m+a2*h+a3*e
t[3]=a4*m+a5*h+a6*e
t[4]=o*k+j*g+l*d
t[5]=b*k+a*g+a0*d
t[6]=a1*k+a2*g+a3*d
t[7]=a4*k+a5*g+a6*d
t[8]=o*i+j*f+l*c
t[9]=b*i+a*f+a0*c
t[10]=a1*i+a2*f+a3*c
t[11]=a4*i+a5*f+a6*c},
L:function(){var t=this.a
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
ct:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
T.fG.prototype={
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gN:function(a){return this.a[2]},
gau:function(a){return this.a[3]},
d6:function(a,b){var t,s,r,q
t=Math.sqrt(a.gS())
if(t===0)return
s=b*0.5
r=Math.sin(s)/t
q=a.a
t=this.a
t[0]=q[0]*r
t[1]=q[1]*r
t[2]=q[2]*r
t[3]=Math.cos(s)},
gl:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=t[3]
return Math.sqrt(s*s+r*r+q*q+p*p)},
h:function(a,b){return this.a[b]},
k:function(a){var t=this.a
return H.f(t[0])+", "+H.f(t[1])+", "+H.f(t[2])+" @ "+H.f(t[3])}}
T.x.prototype={
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.x){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gA:function(a){return A.dP(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.i.prototype={
q:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
w:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
k:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.i){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gA:function(a){return A.dP(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){return Math.sqrt(this.gS())},
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
ba:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
cg:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.i(new Float32Array(H.j(3)))
t.q(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
i:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
bw:function(a){var t,s
t=a.a
s=this.a
s[0]=s[0]-t[0]
s[1]=s[1]-t[1]
s[2]=s[2]-t[2]},
O:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gN:function(a){return this.a[2]}}
T.aL.prototype={
k:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
B:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aL){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gA:function(a){return A.dP(this.a)},
h:function(a,b){return this.a[b]},
gl:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gN:function(a){return this.a[2]},
gau:function(a){return this.a[3]}}
K.j1.prototype={
$1:function(a){var t=H.ap(W.nj(a.target),"$isbC")
P.ah(H.f(t.id)+" toggle "+H.f(t.checked))
$.$get$iM().h(0,t.id).c=t.checked
this.a.h(0,t.id).c=t.checked},
$S:function(){return{func:1,args:[W.l]}}}
K.j2.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.ah("size change "+H.f(s)+" "+H.f(r))
this.b.dl(s,r)
t=this.d
t.z=s
t.Q=r
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.l]}}}
K.j0.prototype={
$1:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=this.a
s=t.a
t.a=a6+0
t=this.c
t.go=H.a1(t.go+0.001)
r=t.k4
if(r.h(0,37)!=null)t.go=H.a1(t.go+0.03)
else if(r.h(0,39)!=null)t.go=H.a1(t.go-0.03)
if(r.h(0,38)!=null)t.id=H.a1(t.id+0.03)
else if(r.h(0,40)!=null)t.id=H.a1(t.id-0.03)
if(r.h(0,33)!=null)t.fy=H.a1(t.fy*0.99)
else if(r.h(0,34)!=null)t.fy=H.a1(t.fy*1.01)
if(r.h(0,32)!=null){t.go=0
t.id=0}r=H.a1(C.c.eq(t.id,-1.4707963267948965,1.4707963267948965))
t.id=r
q=t.fy
p=t.go
o=q*Math.cos(r)
t.aL(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=t.k2
r=t.d
q=r.a
n=p.a
q[12]=q[12]+n[0]
q[13]=q[13]+n[1]
q[14]=q[14]+n[2]
n=q[12]
m=q[13]
l=q[14]
k=new T.i(new Float32Array(H.j(3)))
k.q(0,1,0)
j=t.e
i=j.a
i[0]=q[12]
i[1]=q[13]
i[2]=q[14]
i=new Float32Array(H.j(3))
h=new T.i(i)
h.w(j)
h.bw(p)
h.D(0)
g=k.cg(h)
g.D(0)
f=h.cg(g)
f.D(0)
p=g.ba(j)
e=f.ba(j)
j=h.ba(j)
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
q[15]=1
q[14]=-j
q[13]=-e
q[12]=-p
q[11]=0
q[10]=i
q[9]=b
q[8]=d
q[7]=0
q[6]=a3
q[5]=a2
q[4]=a1
q[3]=0
q[2]=a0
q[1]=a
q[0]=c
q[12]=n
q[13]=m
q[14]=l
r.ar(0,t.bh(),-t.k1)
this.b.dH(a6)
for(t=this.f.cy,r=t.length,s=-((a6-s)*0.0003),a4=0;a4<t.length;t.length===r||(0,H.D)(t),++a4){a5=t[a4]
if(a5.a!=="grid"){q=a5.d
q.ar(0,a5.bh(),s)
q.ar(0,a5.bq(),s)}}(this.r.selectedIndex===0?this.d:this.e).dm()
C.a4.gej(window).cF(this)},
$S:function(){return{func:1,v:true,args:[P.X]}}}
J.a.prototype.de=J.a.prototype.k
J.bD.prototype.dg=J.bD.prototype.k
P.Z.prototype.df=P.Z.prototype.aI
W.a5.prototype.aN=W.a5.prototype.R
W.c_.prototype.dh=W.c_.prototype.a_;(function installTearOffs(){installTearOff(H.b4.prototype,"geX",0,0,0,null,["$0"],["aF"],0)
installTearOff(H.an.prototype,"gd_",0,0,0,null,["$1"],["P"],2)
installTearOff(H.b3.prototype,"geC",0,0,0,null,["$1"],["a1"],2)
installTearOff(P,"ns",1,0,0,null,["$1"],["n7"],1)
installTearOff(P,"nt",1,0,0,null,["$1"],["n8"],1)
installTearOff(P,"nu",1,0,0,null,["$1"],["n9"],1)
installTearOff(P,"l7",1,0,0,null,["$0"],["nq"],0)
installTearOff(P.az.prototype,"gdS",0,0,0,null,["$2","$1"],["ay","dT"],5)
installTearOff(P,"nz",1,0,0,null,["$2"],["mp"],6)
installTearOff(W,"nE",1,0,0,null,["$1"],["mv"],7)
installTearOff(W,"nF",1,0,0,null,["$4"],["ne"],4)
installTearOff(W,"nG",1,0,0,null,["$4"],["nf"],4)
installTearOff(W.dk.prototype,"gbc",0,1,0,null,["$0"],["bd"],3)
installTearOff(W.dC.prototype,"gbc",0,1,0,null,["$0"],["bd"],3)
installTearOff(K,"lm",1,0,0,null,["$0"],["nO"],0)})();(function inheritance(){inherit(P.q,null)
var t=P.q
inherit(H.jr,t)
inherit(J.a,t)
inherit(J.e_,t)
inherit(P.Z,t)
inherit(H.db,t)
inherit(P.d7,t)
inherit(H.co,t)
inherit(H.b8,t)
inherit(H.ib,t)
inherit(H.b4,t)
inherit(H.hP,t)
inherit(H.b5,t)
inherit(H.ia,t)
inherit(H.hH,t)
inherit(H.bf,t)
inherit(H.hg,t)
inherit(H.as,t)
inherit(H.an,t)
inherit(H.b3,t)
inherit(H.fK,t)
inherit(H.hn,t)
inherit(P.ba,t)
inherit(H.dM,t)
inherit(H.aJ,t)
inherit(H.ak,t)
inherit(H.eZ,t)
inherit(H.f0,t)
inherit(P.hJ,t)
inherit(P.dJ,t)
inherit(P.az,t)
inherit(P.dG,t)
inherit(P.h1,t)
inherit(P.h2,t)
inherit(P.b7,t)
inherit(P.iB,t)
inherit(P.fS,t)
inherit(P.i8,t)
inherit(P.bY,t)
inherit(P.bM,t)
inherit(P.y,t)
inherit(P.i9,t)
inherit(P.aB,t)
inherit(P.L,t)
inherit(P.bq,t)
inherit(P.X,t)
inherit(P.aS,t)
inherit(P.dx,t)
inherit(P.hU,t)
inherit(P.eh,t)
inherit(P.b,t)
inherit(P.aG,t)
inherit(P.aX,t)
inherit(P.bP,t)
inherit(P.u,t)
inherit(P.bQ,t)
inherit(W.e6,t)
inherit(W.hG,t)
inherit(W.bX,t)
inherit(W.C,t)
inherit(W.dm,t)
inherit(W.c_,t)
inherit(W.it,t)
inherit(W.cp,t)
inherit(W.hL,t)
inherit(W.dl,t)
inherit(W.im,t)
inherit(W.dN,t)
inherit(P.id,t)
inherit(G.fd,t)
inherit(G.e4,t)
inherit(G.eG,t)
inherit(G.B,t)
inherit(G.cn,t)
inherit(G.bz,t)
inherit(G.dB,t)
inherit(G.dA,t)
inherit(G.k,t)
inherit(G.aH,t)
inherit(G.he,t)
inherit(G.bT,t)
inherit(R.fZ,t)
inherit(T.au,t)
inherit(T.M,t)
inherit(T.fG,t)
inherit(T.x,t)
inherit(T.i,t)
inherit(T.aL,t)
t=J.a
inherit(J.eT,t)
inherit(J.eU,t)
inherit(J.bD,t)
inherit(J.aT,t)
inherit(J.bb,t)
inherit(J.aU,t)
inherit(H.bG,t)
inherit(H.bd,t)
inherit(W.h,t)
inherit(W.a3,t)
inherit(W.cc,t)
inherit(W.ce,t)
inherit(W.A,t)
inherit(W.ct,t)
inherit(W.e8,t)
inherit(W.e9,t)
inherit(W.ea,t)
inherit(W.cj,t)
inherit(W.ck,t)
inherit(W.cl,t)
inherit(W.cE,t)
inherit(W.ed,t)
inherit(W.l,t)
inherit(W.cD,t)
inherit(W.a7,t)
inherit(W.eJ,t)
inherit(W.cI,t)
inherit(W.f2,t)
inherit(W.fa,t)
inherit(W.a8,t)
inherit(W.cC,t)
inherit(W.fm,t)
inherit(W.dk,t)
inherit(W.cH,t)
inherit(W.fv,t)
inherit(W.bh,t)
inherit(W.a9,t)
inherit(W.cA,t)
inherit(W.am,t)
inherit(W.ds,t)
inherit(W.ab,t)
inherit(W.cz,t)
inherit(W.ac,t)
inherit(W.h0,t)
inherit(W.a_,t)
inherit(W.cy,t)
inherit(W.hf,t)
inherit(W.ae,t)
inherit(W.cx,t)
inherit(W.hk,t)
inherit(W.dC,t)
inherit(W.hr,t)
inherit(W.hw,t)
inherit(W.hI,t)
inherit(W.cN,t)
inherit(W.cM,t)
inherit(W.cL,t)
inherit(W.cG,t)
inherit(W.cK,t)
inherit(W.cJ,t)
inherit(W.iz,t)
inherit(W.iA,t)
inherit(P.at,t)
inherit(P.cw,t)
inherit(P.av,t)
inherit(P.cB,t)
inherit(P.fB,t)
inherit(P.fC,t)
inherit(P.fI,t)
inherit(P.cu,t)
inherit(P.aw,t)
inherit(P.cF,t)
inherit(P.hv,t)
inherit(P.e0,t)
inherit(P.fN,t)
inherit(P.fO,t)
inherit(P.iy,t)
inherit(P.cv,t)
t=J.bD
inherit(J.fz,t)
inherit(J.b0,t)
inherit(J.aV,t)
inherit(J.jq,J.aT)
t=J.bb
inherit(J.d9,t)
inherit(J.d8,t)
t=P.Z
inherit(H.c,t)
inherit(H.dc,t)
inherit(H.dF,t)
t=H.c
inherit(H.bc,t)
inherit(H.f_,t)
inherit(H.eg,H.dc)
t=P.d7
inherit(H.f4,t)
inherit(H.hy,t)
t=H.bc
inherit(H.bE,t)
inherit(P.f1,t)
t=H.b8
inherit(H.ja,t)
inherit(H.jb,t)
inherit(H.i6,t)
inherit(H.hQ,t)
inherit(H.eP,t)
inherit(H.eQ,t)
inherit(H.ic,t)
inherit(H.hh,t)
inherit(H.hi,t)
inherit(H.jc,t)
inherit(H.iV,t)
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(H.ha,t)
inherit(H.eV,t)
inherit(H.iR,t)
inherit(H.iS,t)
inherit(H.iT,t)
inherit(P.hD,t)
inherit(P.hC,t)
inherit(P.hE,t)
inherit(P.hF,t)
inherit(P.hV,t)
inherit(P.hZ,t)
inherit(P.hW,t)
inherit(P.hX,t)
inherit(P.hY,t)
inherit(P.i1,t)
inherit(P.i2,t)
inherit(P.i0,t)
inherit(P.i_,t)
inherit(P.h3,t)
inherit(P.h4,t)
inherit(P.iE,t)
inherit(P.ih,t)
inherit(P.ig,t)
inherit(P.ii,t)
inherit(P.f5,t)
inherit(P.ee,t)
inherit(P.ef,t)
inherit(W.iH,t)
inherit(W.hz,t)
inherit(W.hT,t)
inherit(W.fo,t)
inherit(W.fn,t)
inherit(W.ip,t)
inherit(W.iq,t)
inherit(W.iw,t)
inherit(W.ix,t)
inherit(P.iI,t)
inherit(B.j5,t)
inherit(B.j6,t)
inherit(B.j7,t)
inherit(B.j8,t)
inherit(B.j9,t)
inherit(B.fr,t)
inherit(B.fs,t)
inherit(B.ft,t)
inherit(B.fu,t)
inherit(B.eI,t)
inherit(A.iQ,t)
inherit(K.j1,t)
inherit(K.j2,t)
inherit(K.j0,t)
t=H.hH
inherit(H.bi,t)
inherit(H.c0,t)
t=P.ba
inherit(H.dn,t)
inherit(H.eW,t)
inherit(H.hq,t)
inherit(H.hp,t)
inherit(H.e3,t)
inherit(H.fQ,t)
inherit(P.cb,t)
inherit(P.dp,t)
inherit(P.ai,t)
inherit(P.v,t)
inherit(P.dE,t)
inherit(P.aI,t)
inherit(P.a4,t)
inherit(P.e7,t)
t=H.ha
inherit(H.fY,t)
inherit(H.bp,t)
inherit(H.hB,P.cb)
t=H.bd
inherit(H.fe,t)
inherit(H.dg,t)
t=H.dg
inherit(H.bI,t)
inherit(H.bH,t)
inherit(H.bJ,H.bI)
inherit(H.dh,H.bJ)
inherit(H.bK,H.bH)
inherit(H.di,H.bK)
t=H.dh
inherit(H.df,t)
inherit(H.ff,t)
t=H.di
inherit(H.fg,t)
inherit(H.fh,t)
inherit(H.fi,t)
inherit(H.fj,t)
inherit(H.fk,t)
inherit(H.dj,t)
inherit(H.fl,t)
inherit(P.iu,P.hJ)
inherit(P.ie,P.iB)
inherit(P.dK,H.ak)
inherit(P.fR,P.fS)
inherit(P.i5,P.fR)
inherit(P.i7,P.i5)
inherit(P.da,P.bM)
t=P.X
inherit(P.P,t)
inherit(P.o,t)
t=P.ai
inherit(P.dt,t)
inherit(P.eO,t)
t=W.h
inherit(W.t,t)
inherit(W.bv,t)
inherit(W.e5,t)
inherit(W.eB,t)
inherit(W.bB,t)
inherit(W.bF,t)
inherit(W.fE,t)
inherit(W.du,t)
inherit(W.fT,t)
inherit(W.aa,t)
inherit(W.bu,t)
inherit(W.ad,t)
inherit(W.a0,t)
inherit(W.bt,t)
inherit(W.ht,t)
inherit(W.hx,t)
inherit(W.bU,t)
inherit(W.hA,t)
inherit(W.b2,t)
inherit(W.io,t)
t=W.t
inherit(W.a5,t)
inherit(W.aR,t)
inherit(W.br,t)
inherit(W.ci,t)
inherit(W.hM,t)
t=W.a5
inherit(W.n,t)
inherit(P.K,t)
t=W.n
inherit(W.dY,t)
inherit(W.dZ,t)
inherit(W.aQ,t)
inherit(W.cd,t)
inherit(W.ch,t)
inherit(W.eF,t)
inherit(W.cr,t)
inherit(W.bC,t)
inherit(W.bO,t)
inherit(W.dy,t)
inherit(W.h8,t)
inherit(W.h9,t)
inherit(W.bR,t)
inherit(W.i4,t)
inherit(W.by,W.bv)
inherit(W.e1,W.by)
inherit(W.b9,W.ct)
inherit(W.eb,W.ck)
inherit(W.d6,W.cE)
inherit(W.ec,W.d6)
inherit(W.a6,W.cc)
inherit(W.d4,W.cD)
inherit(W.eA,W.d4)
inherit(W.cS,W.cI)
inherit(W.bA,W.cS)
inherit(W.cs,W.br)
inherit(W.eK,W.bB)
inherit(W.aK,W.l)
t=W.aK
inherit(W.aW,t)
inherit(W.Q,t)
inherit(W.b_,t)
inherit(W.fb,W.bF)
inherit(W.cZ,W.cC)
inherit(W.fc,W.cZ)
inherit(W.V,P.da)
inherit(W.d_,W.cH)
inherit(W.bL,W.d_)
t=W.bh
inherit(W.fy,t)
inherit(W.fP,t)
inherit(W.hm,t)
inherit(W.d0,W.cA)
inherit(W.fA,W.d0)
inherit(W.fD,W.am)
inherit(W.bx,W.bu)
inherit(W.fU,W.bx)
inherit(W.cX,W.cz)
inherit(W.fW,W.cX)
inherit(W.cT,W.cy)
inherit(W.hc,W.cT)
inherit(W.bw,W.bt)
inherit(W.hd,W.bw)
inherit(W.d3,W.cx)
inherit(W.hj,W.d3)
inherit(W.b1,W.Q)
inherit(W.d1,W.cN)
inherit(W.dH,W.d1)
inherit(W.cO,W.cM)
inherit(W.hK,W.cO)
inherit(W.hN,W.cl)
inherit(W.cV,W.cL)
inherit(W.i3,W.cV)
inherit(W.d5,W.cG)
inherit(W.dL,W.d5)
inherit(W.cR,W.cK)
inherit(W.ir,W.cR)
inherit(W.d2,W.cJ)
inherit(W.is,W.d2)
inherit(W.hO,W.hG)
inherit(W.hR,P.h1)
inherit(W.dI,W.hR)
inherit(W.hS,P.h2)
inherit(W.iv,W.c_)
inherit(P.N,P.id)
t=P.K
inherit(P.aE,t)
inherit(P.aP,t)
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
inherit(P.ew,t)
inherit(P.ex,t)
inherit(P.ey,t)
inherit(P.ez,t)
inherit(P.eC,t)
inherit(P.f6,t)
inherit(P.f7,t)
inherit(P.fw,t)
inherit(P.bN,t)
inherit(P.h7,t)
inherit(P.hu,t)
inherit(P.bW,t)
inherit(P.ij,t)
inherit(P.ik,t)
inherit(P.il,t)
t=P.aE
inherit(P.dX,t)
inherit(P.eE,t)
inherit(P.aj,t)
inherit(P.eM,t)
inherit(P.h6,t)
inherit(P.dz,t)
inherit(P.hs,t)
inherit(P.cQ,P.cw)
inherit(P.eX,P.cQ)
inherit(P.cY,P.cB)
inherit(P.fp,P.cY)
inherit(P.fJ,P.aj)
inherit(P.cW,P.cu)
inherit(P.h5,P.cW)
t=P.dz
inherit(P.hb,t)
inherit(P.bS,t)
inherit(P.cU,P.cF)
inherit(P.hl,P.cU)
inherit(P.cP,P.cv)
inherit(P.fX,P.cP)
t=G.fd
inherit(G.fV,t)
inherit(G.dD,t)
inherit(G.eY,t)
inherit(G.de,t)
inherit(G.fM,t)
inherit(A.bg,t)
inherit(A.fL,t)
t=G.fV
inherit(G.e2,t)
inherit(A.be,t)
inherit(B.fq,G.e2)
t=G.eY
inherit(G.dq,t)
inherit(G.cg,t)
inherit(G.dw,t)
t=G.dD
inherit(G.eL,t)
inherit(G.f8,t)
inherit(G.fx,t)
inherit(G.eN,G.bT)
inherit(R.h_,R.fZ)
mixin(H.bH,P.y)
mixin(H.bI,P.y)
mixin(H.bJ,H.co)
mixin(H.bK,H.co)
mixin(P.bM,P.y)
mixin(W.bt,P.y)
mixin(W.bu,P.y)
mixin(W.bv,P.y)
mixin(W.bw,W.C)
mixin(W.bx,W.C)
mixin(W.by,W.C)
mixin(W.ct,W.e6)
mixin(W.cN,P.y)
mixin(W.cz,P.y)
mixin(W.cG,P.y)
mixin(W.cH,P.y)
mixin(W.cI,P.y)
mixin(W.cJ,P.y)
mixin(W.cK,P.y)
mixin(W.cL,P.y)
mixin(W.cM,P.y)
mixin(W.cx,P.y)
mixin(W.cy,P.y)
mixin(W.cA,P.y)
mixin(W.cC,P.y)
mixin(W.cD,P.y)
mixin(W.cE,P.y)
mixin(W.cO,W.C)
mixin(W.d_,W.C)
mixin(W.d0,W.C)
mixin(W.cZ,W.C)
mixin(W.d3,W.C)
mixin(W.d4,W.C)
mixin(W.d5,W.C)
mixin(W.d6,W.C)
mixin(W.cR,W.C)
mixin(W.cS,W.C)
mixin(W.cT,W.C)
mixin(W.cV,W.C)
mixin(W.cX,W.C)
mixin(W.d1,W.C)
mixin(W.d2,W.C)
mixin(P.cw,P.y)
mixin(P.cu,P.y)
mixin(P.cB,P.y)
mixin(P.cF,P.y)
mixin(P.cQ,W.C)
mixin(P.cY,W.C)
mixin(P.cU,W.C)
mixin(P.cW,W.C)
mixin(P.cv,P.y)
mixin(P.cP,W.C)})();(function constants(){C.h=W.aQ.prototype
C.o=W.cd.prototype
C.y=W.ce.prototype
C.p=W.b9.prototype
C.i=W.ch.prototype
C.z=W.cj.prototype
C.A=W.cr.prototype
C.e=W.cs.prototype
C.B=J.a.prototype
C.a=J.aT.prototype
C.j=J.d8.prototype
C.b=J.d9.prototype
C.c=J.bb.prototype
C.f=J.aU.prototype
C.I=J.aV.prototype
C.m=H.df.prototype
C.u=W.bL.prototype
C.v=J.fz.prototype
C.w=W.ds.prototype
C.x=W.dy.prototype
C.n=J.b0.prototype
C.a3=W.b1.prototype
C.a4=W.bU.prototype
C.d=new P.ie()
C.q=new P.aS(0)
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.E=function(getTagFallback) {
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
C.F=function() {
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
C.G=function(hooks) {
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
C.H=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.J=H.E(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.u])
C.K=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.L=makeConstList([])
C.k=H.E(makeConstList(["bind","if","ref","repeat","syntax"]),[P.u])
C.l=H.E(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.u])
C.M=H.O("nZ")
C.N=H.O("o_")
C.O=H.O("eD")
C.P=H.O("o0")
C.Q=H.O("o1")
C.R=H.O("ku")
C.S=H.O("o2")
C.T=H.O("kx")
C.U=H.O("aX")
C.V=H.O("u")
C.W=H.O("kR")
C.X=H.O("kS")
C.Y=H.O("o3")
C.Z=H.O("kT")
C.a_=H.O("aB")
C.a0=H.O("P")
C.a1=H.O("o")
C.a2=H.O("X")})();(function staticFields(){$.kB="$cachedFunction"
$.kC="$cachedInvocation"
$.k7=null
$.k5=null
$.jD=!1
$.jH=null
$.l4=null
$.lq=null
$.iL=null
$.iU=null
$.jI=null
$.bj=null
$.c1=null
$.c2=null
$.jE=!1
$.G=C.d
$.ks=0
$.aD=null
$.jl=null
$.kr=null
$.kq=null
$.ko=null
$.kn=null
$.km=null
$.kl=null
$.nw=0
$.nx=0
$.jM=0
$.ln=0
$.c7=0
$.c8=0
$.nV=!1
$.lc=0})();(function lazyInitializers(){lazy($,"kk","$get$kk",function(){return H.lf("_$dart_dartClosure")})
lazy($,"js","$get$js",function(){return H.lf("_$dart_js")})
lazy($,"kv","$get$kv",function(){return H.mI()})
lazy($,"kw","$get$kw",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.ks
$.ks=t+1
t="expando$key$"+t}return new P.eh(null,t,[P.o])})
lazy($,"kG","$get$kG",function(){return H.ax(H.ho({
toString:function(){return"$receiver$"}}))})
lazy($,"kH","$get$kH",function(){return H.ax(H.ho({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kI","$get$kI",function(){return H.ax(H.ho(null))})
lazy($,"kJ","$get$kJ",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kN","$get$kN",function(){return H.ax(H.ho(void 0))})
lazy($,"kO","$get$kO",function(){return H.ax(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kL","$get$kL",function(){return H.ax(H.kM(null))})
lazy($,"kK","$get$kK",function(){return H.ax(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kQ","$get$kQ",function(){return H.ax(H.kM(void 0))})
lazy($,"kP","$get$kP",function(){return H.ax(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jB","$get$jB",function(){return P.n6()})
lazy($,"c3","$get$c3",function(){return[]})
lazy($,"kj","$get$kj",function(){return{}})
lazy($,"kY","$get$kY",function(){return P.ju(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jC","$get$jC",function(){return P.H()})
lazy($,"iK","$get$iK",function(){return P.ky(P.o,P.aB)})
lazy($,"c5","$get$c5",function(){return P.ky(P.u,P.aB)})
lazy($,"kE","$get$kE",function(){return new G.dB(1281,0,4294967295)})
lazy($,"k3","$get$k3",function(){return new G.dA(1281,1281,1281)})
lazy($,"W","$get$W",function(){return P.aF(["cBlendEquation",new G.k("","",0),"cDepthWrite",new G.k("","",0),"cDepthTest",new G.k("","",0),"cStencilFunc",new G.k("","",0),"tPosition",new G.k("vec3","",0),"tSpeed",new G.k("vec3","",0),"tForce",new G.k("vec3","",0),"aColors",new G.k("vec3","per vertex color",0),"aColorAlpha",new G.k("vec4","per vertex color",0),"aPosition",new G.k("vec3","vertex coordinates",0),"aTexUV",new G.k("vec2","texture uvs",0),"aNormal",new G.k("vec3","vertex normals",0),"aBinormal",new G.k("vec3","vertex binormals",0),"aCenter",new G.k("vec4","for wireframe",0),"aPointSize",new G.k("float","",0),"aBoneIndex",new G.k("vec4","",0),"aBoneWeight",new G.k("vec4","",0),"aTangent",new G.k("vec3","vertex tangents",0),"aBitangent",new G.k("vec3","vertex btangents",0),"iaRotation",new G.k("vec4","",0),"iaTranslation",new G.k("vec3","",0),"iaScale",new G.k("vec3","",0),"vColor",new G.k("vec3","per vertex color",0),"vTexUV",new G.k("vec2","",0),"vLightWeighting",new G.k("vec3","",0),"vNormal",new G.k("vec3","",0),"vPosition",new G.k("vec3","vertex coordinates",0),"vPositionFromLight",new G.k("vec4","delta from light",0),"vCenter",new G.k("vec4","for wireframe",0),"vDepth",new G.k("float","depth for shadowmaps",0),"uTransformationMatrix",new G.k("mat4","",0),"uModelMatrix",new G.k("mat4","",0),"uNormalMatrix",new G.k("mat3","",0),"uConvolutionMatrix",new G.k("mat3","",0),"uPerspectiveViewMatrix",new G.k("mat4","",0),"uLightPerspectiveViewMatrix",new G.k("mat4","",0),"uShadowMap",new G.k("sampler2DShadow","",0),"uTexture",new G.k("sampler2D","",0),"uTexture2",new G.k("sampler2D","",0),"uTexture3",new G.k("sampler2D","",0),"uTexture4",new G.k("sampler2D","",0),"uSpecularMap",new G.k("sampler2D","",0),"uNormalMap",new G.k("sampler2D","",0),"uBumpMap",new G.k("sampler2D","",0),"uDepthMap",new G.k("sampler2D","",0),"uCubeTexture",new G.k("samplerCube","",0),"uAnimationTable",new G.k("sampler2D","",0),"uTime",new G.k("float","time since program start in sec",0),"uCameraNear",new G.k("float","",0),"uCameraFar",new G.k("float","",0),"uFogNear",new G.k("float","",0),"uFogFar",new G.k("float","",0),"uPointSize",new G.k("float","",0),"uScale",new G.k("float","",0),"uAngle",new G.k("float","",0),"uCanvasSize",new G.k("vec2","",0),"uCenter2",new G.k("vec2","",0),"uCutOff",new G.k("float","",0),"uShininess",new G.k("float","",0),"uShadowBias",new G.k("float","",0),"uOpacity",new G.k("float","",0),"uColor",new G.k("vec3","",0),"uAmbientDiffuse",new G.k("vec3","",0),"uColorEmissive",new G.k("vec3","",0),"uColorSpecular",new G.k("vec3","",0),"uColorDiffuse",new G.k("vec3","",0),"uColorAlpha",new G.k("vec4","",0),"uColorAlpha2",new G.k("vec4","",0),"uEyePosition",new G.k("vec3","",0),"uMaterial",new G.k("mat4","",0),"uRange",new G.k("vec2","",0),"uDirection",new G.k("vec2","",0),"uBoneMatrices",new G.k("mat4","",128),"uLightDescs",new G.k("mat4","",4),"uLightCount",new G.k("float","",0),"uLightTypes",new G.k("float","",4),"uBumpScale",new G.k("float","for bump maps",0),"uNormalScale",new G.k("float","for normal maps",0)])})
lazy($,"kh","$get$kh",function(){return T.z(1,1,1)})
lazy($,"kc","$get$kc",function(){return T.z(0.4,0.4,0.4)})
lazy($,"ka","$get$ka",function(){return T.z(0,0,0)})
lazy($,"kb","$get$kb",function(){return T.z(0,0,1)})
lazy($,"ke","$get$ke",function(){return T.z(0,0,0.5)})
lazy($,"kg","$get$kg",function(){return T.z(1,0,0)})
lazy($,"kd","$get$kd",function(){return T.z(0,1,0)})
lazy($,"kf","$get$kf",function(){return T.z(0,0.5,0)})
lazy($,"ki","$get$ki",function(){return T.z(1,1,0)})
lazy($,"ll","$get$ll",function(){var t=new G.aH("LightGouradV",null,[],[],[],[],0,P.H())
t.aP(["aPosition","aNormal","aTexUV"])
t.aw(["vColor"])
t.Y(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.Y(["uLightDescs","uLightTypes","uShininess"])
t.Y(["uEyePosition","uTexture"])
t.bA(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vec3 normal = uNormalMatrix * aNormal;\n\n    ColorComponents acc = CombinedLight(pos.xyz, normal, uEyePosition,\n                  uLightDescs,\n                  uLightTypes,\n                  uShininess);\n\n     vColor = acc.diffuse +\n                 acc.specular +\n                 texture(uTexture, aTexUV).rgb;\n}\n        "],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"lj","$get$lj",function(){var t=new G.aH("LightGrouradV",null,[],[],[],[],0,P.H())
t.aw(["vColor"])
t.aU(["oFragColor = vec4(vColor, 1.0 );"])
return t})
lazy($,"lk","$get$lk",function(){var t=new G.aH("LightBlinnPhongV",null,[],[],[],[],0,P.H())
t.aP(["aPosition","aNormal","aTexUV"])
t.aw(["vPosition","vNormal","vTexUV"])
t.Y(["uPerspectiveViewMatrix","uModelMatrix","uNormalMatrix"])
t.dC(["void main() {\n    vec4 pos = uModelMatrix * vec4(aPosition, 1.0);\n    gl_Position = uPerspectiveViewMatrix * pos;\n    vPosition = pos.xyz;\n    vTexUV = aTexUV;\n    vNormal = uNormalMatrix * aNormal;\n}\n"])
return t})
lazy($,"li","$get$li",function(){var t=new G.aH("LightBlinnPhongF",null,[],[],[],[],0,P.H())
t.aw(["vPosition","vNormal","vTexUV"])
t.Y(["uLightDescs","uLightTypes","uShininess"])
t.Y(["uEyePosition","uTexture"])
t.bB(["ColorComponents acc = CombinedLight(vPosition,\n                                    vNormal,\n                                    uEyePosition,\n                                    uLightDescs,\n                                    uLightTypes,\n                                    uShininess);\n\noFragColor.rgb = acc.diffuse +\n                    acc.specular +\n                    texture(uTexture, vTexUV).rgb;\noFragColor.a = 1.0;\n"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"ls","$get$ls",function(){var t=new G.aH("SolidColor",null,[],[],[],[],0,P.H())
t.aP(["aPosition"])
t.Y(["uPerspectiveViewMatrix","uModelMatrix"])
t.aU(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lr","$get$lr",function(){var t=new G.aH("SolidColorF",null,[],[],[],[],0,P.H())
t.Y(["uColor"])
t.aU(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"kV","$get$kV",function(){return[T.z(0,0,1),T.z(0,0,-1),T.z(0,1,0),T.z(0,-1,0),T.z(1,0,0),T.z(-1,0,0)]})
lazy($,"kt","$get$kt",function(){return[new G.B(0,11,5),new G.B(0,5,1),new G.B(0,1,7),new G.B(0,7,10),new G.B(0,10,11),new G.B(1,5,9),new G.B(5,11,4),new G.B(11,10,2),new G.B(10,7,6),new G.B(7,1,8),new G.B(3,9,4),new G.B(3,4,2),new G.B(3,2,6),new G.B(3,6,8),new G.B(3,8,9),new G.B(4,9,5),new G.B(2,4,11),new G.B(6,2,10),new G.B(8,6,7),new G.B(9,8,1)]})
lazy($,"lv","$get$lv",function(){return(1+P.nW(5))/2})
lazy($,"jp","$get$jp",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$lv()
s=T.z(-1,t,0)
s.D(0)
r=T.z(1,t,0)
r.D(0)
q=T.z(-1,-t,0)
q.D(0)
p=T.z(1,-t,0)
p.D(0)
o=T.z(0,-1,t)
o.D(0)
n=T.z(0,1,t)
n.D(0)
m=T.z(0,-1,-t)
m.D(0)
l=T.z(0,1,-t)
l.D(0)
k=T.z(t,0,-1)
k.D(0)
j=T.z(t,0,1)
j.D(0)
i=T.z(-t,0,-1)
i.D(0)
t=T.z(-t,0,1)
t.D(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"lp","$get$lp",function(){return T.z(11,20,0)})
lazy($,"l9","$get$l9",function(){return T.z(0,-50,0)})
lazy($,"lt","$get$lt",function(){return T.z(-11,-30,0)})
lazy($,"iM","$get$iM",function(){var t,s,r,q,p,o
t=$.$get$l9()
s=$.$get$ka()
r=$.$get$kh()
q=T.f9()
p=T.f9()
o=$.$get$lp()
return P.aF(["idDirectional",new G.cg(t,s,r,40,q,p,1,"dir",!1,!0),"idPoint",new G.dq(o,$.$get$ke(),r,50,3,"point",!1,!0),"idSpot",new G.dw(o,$.$get$lt(),$.$get$kf(),r,50,0.4487989505128276,2,1,1,40,T.f9(),T.f9(),2,"spot",!1,!0)])})})()
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
mangledGlobalNames:{o:"int",P:"double",X:"num",u:"String",aB:"bool",aX:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.t},{func:1,ret:P.aB,args:[W.a5,P.u,P.u,W.bX]},{func:1,v:true,args:[P.q],opt:[P.bP]},{func:1,ret:P.o,args:[P.L,P.L]},{func:1,ret:P.u,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bG,ArrayBufferView:H.bd,DataView:H.fe,Float32Array:H.df,Float64Array:H.ff,Int16Array:H.fg,Int32Array:H.fh,Int8Array:H.fi,Uint16Array:H.fj,Uint32Array:H.fk,Uint8ClampedArray:H.dj,CanvasPixelArray:H.dj,Uint8Array:H.fl,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLImageElement:W.n,HTMLKeygenElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMenuItemElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,HTMLAnchorElement:W.dY,HTMLAreaElement:W.dZ,AudioTrack:W.a3,AudioTrackList:W.e1,Blob:W.cc,HTMLBodyElement:W.aQ,HTMLCanvasElement:W.cd,CanvasRenderingContext2D:W.ce,CDATASection:W.aR,CharacterData:W.aR,Comment:W.aR,ProcessingInstruction:W.aR,Text:W.aR,CompositorWorker:W.e5,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.b9,MSStyleCSSProperties:W.b9,CSS2Properties:W.b9,DataTransferItemList:W.e8,DeviceAcceleration:W.e9,HTMLDivElement:W.ch,XMLDocument:W.br,Document:W.br,DocumentFragment:W.ci,ShadowRoot:W.ci,DOMException:W.ea,DOMImplementation:W.cj,DOMPoint:W.eb,DOMPointReadOnly:W.ck,DOMRectReadOnly:W.cl,DOMStringList:W.ec,DOMTokenList:W.ed,Element:W.a5,AnimationEvent:W.l,AnimationPlayerEvent:W.l,ApplicationCacheErrorEvent:W.l,AutocompleteErrorEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceLightEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,GamepadEvent:W.l,GeofencingEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,ProgressEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RelatedEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCIceCandidateEvent:W.l,RTCPeerConnectionIceEvent:W.l,SecurityPolicyViolationEvent:W.l,ServicePortConnectEvent:W.l,ServiceWorkerMessageEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,ResourceProgressEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a6,FileList:W.eA,FileWriter:W.eB,HTMLFormElement:W.eF,Gamepad:W.a7,HTMLHeadElement:W.cr,History:W.eJ,HTMLCollection:W.bA,HTMLFormControlsCollection:W.bA,HTMLOptionsCollection:W.bA,HTMLDocument:W.cs,XMLHttpRequest:W.eK,XMLHttpRequestUpload:W.bB,XMLHttpRequestEventTarget:W.bB,HTMLInputElement:W.bC,KeyboardEvent:W.aW,Location:W.f2,MediaList:W.fa,MIDIOutput:W.fb,MIDIInput:W.bF,MIDIPort:W.bF,MimeType:W.a8,MimeTypeArray:W.fc,PointerEvent:W.Q,MouseEvent:W.Q,DragEvent:W.Q,Navigator:W.fm,Attr:W.t,Node:W.t,NodeIterator:W.dk,NodeList:W.bL,RadioNodeList:W.bL,Path2D:W.fv,Perspective:W.fy,Plugin:W.a9,PluginArray:W.fA,PositionValue:W.fD,PresentationConnection:W.fE,Range:W.ds,Rotation:W.fP,RTCDataChannel:W.du,DataChannel:W.du,HTMLSelectElement:W.bO,SharedWorker:W.fT,SourceBuffer:W.aa,SourceBufferList:W.fU,SpeechGrammar:W.ab,SpeechGrammarList:W.fW,SpeechRecognitionResult:W.ac,Storage:W.h0,CSSStyleSheet:W.a_,StyleSheet:W.a_,CalcLength:W.am,KeywordValue:W.am,LengthValue:W.am,NumberValue:W.am,SimpleLength:W.am,TransformValue:W.am,StyleValue:W.am,HTMLTableElement:W.dy,HTMLTableRowElement:W.h8,HTMLTableSectionElement:W.h9,HTMLTemplateElement:W.bR,TextTrack:W.ad,TextTrackCue:W.a0,VTTCue:W.a0,TextTrackCueList:W.hc,TextTrackList:W.hd,TimeRanges:W.hf,Touch:W.ae,TouchEvent:W.b_,TouchList:W.hj,TrackDefaultList:W.hk,Matrix:W.bh,Skew:W.bh,TransformComponent:W.bh,Translation:W.hm,TreeWalker:W.dC,CompositionEvent:W.aK,FocusEvent:W.aK,TextEvent:W.aK,SVGZoomEvent:W.aK,UIEvent:W.aK,URL:W.hr,VideoTrackList:W.ht,VTTRegionList:W.hw,WebSocket:W.hx,WheelEvent:W.b1,Window:W.bU,DOMWindow:W.bU,Worker:W.hA,CompositorWorkerGlobalScope:W.b2,DedicatedWorkerGlobalScope:W.b2,ServiceWorkerGlobalScope:W.b2,SharedWorkerGlobalScope:W.b2,WorkerGlobalScope:W.b2,ClientRect:W.hI,ClientRectList:W.dH,DOMRectList:W.dH,CSSRuleList:W.hK,DocumentType:W.hM,DOMRect:W.hN,GamepadList:W.i3,HTMLFrameSetElement:W.i4,NamedNodeMap:W.dL,MozNamedAttrMap:W.dL,ServiceWorker:W.io,SpeechRecognitionResultList:W.ir,StyleSheetList:W.is,WorkerLocation:W.iz,WorkerNavigator:W.iA,SVGAElement:P.dX,SVGAnimateElement:P.aP,SVGAnimateMotionElement:P.aP,SVGAnimateTransformElement:P.aP,SVGAnimationElement:P.aP,SVGSetElement:P.aP,SVGFEBlendElement:P.ei,SVGFEColorMatrixElement:P.ej,SVGFEComponentTransferElement:P.ek,SVGFECompositeElement:P.el,SVGFEConvolveMatrixElement:P.em,SVGFEDiffuseLightingElement:P.en,SVGFEDisplacementMapElement:P.eo,SVGFEFloodElement:P.ep,SVGFEGaussianBlurElement:P.eq,SVGFEImageElement:P.er,SVGFEMergeElement:P.es,SVGFEMorphologyElement:P.et,SVGFEOffsetElement:P.eu,SVGFEPointLightElement:P.ev,SVGFESpecularLightingElement:P.ew,SVGFESpotLightElement:P.ex,SVGFETileElement:P.ey,SVGFETurbulenceElement:P.ez,SVGFilterElement:P.eC,SVGForeignObjectElement:P.eE,SVGCircleElement:P.aj,SVGEllipseElement:P.aj,SVGLineElement:P.aj,SVGPathElement:P.aj,SVGPolygonElement:P.aj,SVGPolylineElement:P.aj,SVGGeometryElement:P.aj,SVGClipPathElement:P.aE,SVGDefsElement:P.aE,SVGGElement:P.aE,SVGSwitchElement:P.aE,SVGGraphicsElement:P.aE,SVGImageElement:P.eM,SVGLength:P.at,SVGLengthList:P.eX,SVGMarkerElement:P.f6,SVGMaskElement:P.f7,SVGNumber:P.av,SVGNumberList:P.fp,SVGPatternElement:P.fw,SVGPoint:P.fB,SVGPointList:P.fC,SVGRect:P.fI,SVGRectElement:P.fJ,SVGScriptElement:P.bN,SVGStringList:P.h5,SVGDescElement:P.K,SVGDiscardElement:P.K,SVGFEDistantLightElement:P.K,SVGFEFuncAElement:P.K,SVGFEFuncBElement:P.K,SVGFEFuncGElement:P.K,SVGFEFuncRElement:P.K,SVGFEMergeNodeElement:P.K,SVGMetadataElement:P.K,SVGStopElement:P.K,SVGStyleElement:P.K,SVGTitleElement:P.K,SVGComponentTransferFunctionElement:P.K,SVGElement:P.K,SVGSVGElement:P.h6,SVGSymbolElement:P.h7,SVGTextContentElement:P.dz,SVGTextPathElement:P.hb,SVGTSpanElement:P.bS,SVGTextElement:P.bS,SVGTextPositioningElement:P.bS,SVGTransform:P.aw,SVGTransformList:P.hl,SVGUseElement:P.hs,SVGViewElement:P.hu,SVGViewSpec:P.hv,SVGLinearGradientElement:P.bW,SVGRadialGradientElement:P.bW,SVGGradientElement:P.bW,SVGCursorElement:P.ij,SVGFEDropShadowElement:P.ik,SVGMPathElement:P.il,AudioBuffer:P.e0,WebGLRenderingContext:P.fN,WebGL2RenderingContext:P.fO,WebGL2RenderingContextBase:P.iy,SQLResultSetRowList:P.fX})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.bI.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.bH.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
W.bv.$nativeSuperclassTag="EventTarget"
W.by.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"
W.bx.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lu(K.lm(),b)},[])
else (function(b){H.lu(K.lm(),b)})([])})})()