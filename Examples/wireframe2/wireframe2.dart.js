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
a[c]=function(){a[c]=function(){H.nR(b)}
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
return d?function(e){if(t===null)t=H.jH(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jH(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jH(this,a,b,true,[],d).prototype
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
jw:function(a,b,c,d){if(!!a.$isc)return new H.ea(a,b,[c,d])
return new H.da(a,b,[c,d])},
eN:function(){return new P.aj("No element")},
mA:function(){return new P.aj("Too many elements")},
mz:function(){return new P.aj("Too few elements")},
dt:function(a,b,c,d){if(c-b<=32)H.mR(a,b,c,d)
else H.mQ(a,b,c,d)},
mR:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.a0(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ao(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mQ:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.E(t+1,6)
r=a3+s
q=a4-s
p=C.b.E(a3+a4,2)
o=p-s
n=p+s
t=J.a0(a2)
m=t.h(a2,r)
l=t.h(a2,o)
k=t.h(a2,p)
j=t.h(a2,n)
i=t.h(a2,q)
if(J.ao(a5.$2(m,l),0)){h=l
l=m
m=h}if(J.ao(a5.$2(j,i),0)){h=i
i=j
j=h}if(J.ao(a5.$2(m,k),0)){h=k
k=m
m=h}if(J.ao(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ao(a5.$2(m,j),0)){h=j
j=m
m=h}if(J.ao(a5.$2(k,j),0)){h=j
j=k
k=h}if(J.ao(a5.$2(l,i),0)){h=i
i=l
l=h}if(J.ao(a5.$2(l,k),0)){h=k
k=l
l=h}if(J.ao(a5.$2(j,i),0)){h=i
i=j
j=h}t.i(a2,r,m)
t.i(a2,p,k)
t.i(a2,q,i)
t.i(a2,o,t.h(a2,a3))
t.i(a2,n,t.h(a2,a4))
g=a3+1
f=a4-1
if(J.z(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dt(a2,a3,g-2,a5)
H.dt(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.z(a5.$2(t.h(a2,g),l),0);)++g
for(;J.z(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dt(a2,g,f,a5)}else H.dt(a2,g,f,a5)},
c:function c(){},
bi:function bi(){},
d9:function d9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
da:function da(a,b,c){this.a=a
this.b=b
this.$ti=c},
ea:function ea(a,b,c){this.a=a
this.b=b
this.$ti=c},
f_:function f_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bH:function bH(a,b,c){this.a=a
this.b=b
this.$ti=c},
dB:function dB(a,b,c){this.a=a
this.b=b
this.$ti=c},
hs:function hs(a,b,c){this.a=a
this.b=b
this.$ti=c},
cm:function cm(){},
dK:function(a,b){var t=a.ag(b)
if(!u.globalState.d.cy)u.globalState.f.an()
return t},
j0:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
lo:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.t(s).$isb)throw H.e(P.jl("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.ib(0,0,1,null,null,null,null,null,null,null,null,null,a)
s=u.globalState
r=self.window==null
q=self.Worker
p=r&&!!self.postMessage
s.x=p
p=!p
if(p)q=q!=null&&$.$get$kp()!=null
else q=!0
s.y=q
s.r=r&&p
s.f=new H.hL(P.jv(null,H.b6),0)
r=P.n
s.seG(new H.ah(0,null,null,null,null,null,0,[r,H.b5]))
s.seK(new H.ah(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.ia()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.mu,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.n5)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ai(null,null,null,r)
p=new H.bl(0,null,!1)
o=new H.b5(s,new H.ah(0,null,null,null,null,null,0,[r,H.bl]),q,u.createNewIsolate(),p,new H.aq(H.j5()),new H.aq(H.j5()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
q.l(0,0)
o.bt(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bs(a,{func:1,args:[,]}))o.ag(new H.jb(t,a))
else if(H.bs(a,{func:1,args:[,,]}))o.ag(new H.jc(t,a))
else o.ag(a)
u.globalState.f.an()},
n5:function(a){var t=P.aV(["command","print","msg",a])
return new H.al(!0,P.c_(null,P.n)).I(t)},
mw:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.mx()
return},
mx:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.u('Cannot extract URI from "'+t+'"'))},
mu:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b4(!0,[]).W(b.data)
s=J.a0(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.nA(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b4(!0,[]).W(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b4(!0,[]).W(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.n
j=P.ai(null,null,null,k)
i=new H.bl(0,null,!1)
h=new H.b5(s,new H.ah(0,null,null,null,null,null,0,[k,H.bl]),j,u.createNewIsolate(),i,new H.aq(H.j5()),new H.aq(H.j5()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
j.l(0,0)
h.bt(0,i)
u.globalState.f.a.T(0,new H.b6(h,new H.eK(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.an()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lW(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.an()
break
case"close":u.globalState.ch.am(0,$.$get$kq().h(0,a))
a.terminate()
u.globalState.f.an()
break
case"log":H.mt(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aV(["command","print","msg",t])
k=new H.al(!0,P.c_(null,P.n)).I(k)
s.toString
self.postMessage(k)}else P.V(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
mt:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aV(["command","log","msg",a])
r=new H.al(!0,P.c_(null,P.n)).I(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.Q(q)
t=H.ay(q)
s=P.cl(t)
throw H.e(s)}},
mv:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.kz=$.kz+("_"+s)
$.kA=$.kA+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.D(0,["spawned",new H.bo(s,r),q,t.r])
r=new H.eL(a,b,c,d,t)
if(e){t.bP(q,q)
u.globalState.f.a.T(0,new H.b6(t,r,"start isolate"))}else r.$0()},
mT:function(a,b){var t=new H.ha(!0,!1,null)
t.dk(a,b)
return t},
n7:function(a){return new H.b4(!0,[]).W(new H.al(!1,P.c_(null,P.n)).I(a))},
jb:function jb(a,b){this.a=a
this.b=b},
jc:function jc(a,b){this.a=a
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
i6:function i6(a,b){this.a=a
this.b=b},
hL:function hL(a,b){this.a=a
this.b=b},
hM:function hM(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.b=b
this.c=c},
ia:function ia(){},
eK:function eK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eL:function eL(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hE:function hE(){},
bo:function bo(a,b){this.b=a
this.a=b},
id:function id(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c){this.b=a
this.c=b
this.a=c},
bl:function bl(a,b,c){this.a=a
this.b=b
this.c=c},
ha:function ha(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b){this.a=a
this.b=b},
hc:function hc(a,b){this.a=a
this.b=b},
aq:function aq(a){this.a=a},
al:function al(a,b){this.a=a
this.b=b},
b4:function b4(a,b){this.a=a
this.b=b},
nt:function(a){return u.types[a]},
nC:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.t(a).$isp},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.az(a)
if(typeof t!=="string")throw H.e(H.P(a))
return t},
mO:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.fD(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aY:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
ky:function(a,b){throw H.e(new P.bD(a,null,null))},
jy:function(a,b,c){var t,s
H.l8(a)
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return H.ky(a,c)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return H.ky(a,c)},
kx:function(a,b){throw H.e(new P.bD("Invalid double",a,null))},
aZ:function(a,b){var t,s
H.l8(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.kx(a,b)
t=parseFloat(a)
if(isNaN(t)){s=J.m1(a)
if(s==="NaN"||s==="+NaN"||s==="-NaN")return t
return H.kx(a,b)}return t},
dm:function(a){var t,s,r,q,p,o,n,m
t=J.t(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.C||!!J.t(a).$isb1){p=C.t(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.f.aa(q,0)===36)q=C.f.cV(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dM(H.iP(a),0,null),u.mangledGlobalNames)},
fz:function(a){return"Instance of '"+H.dm(a)+"'"},
S:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
mM:function(a){return a.b?H.S(a).getUTCFullYear()+0:H.S(a).getFullYear()+0},
mK:function(a){return a.b?H.S(a).getUTCMonth()+1:H.S(a).getMonth()+1},
mG:function(a){return a.b?H.S(a).getUTCDate()+0:H.S(a).getDate()+0},
mH:function(a){return a.b?H.S(a).getUTCHours()+0:H.S(a).getHours()+0},
mJ:function(a){return a.b?H.S(a).getUTCMinutes()+0:H.S(a).getMinutes()+0},
mL:function(a){return a.b?H.S(a).getUTCSeconds()+0:H.S(a).getSeconds()+0},
mI:function(a){return a.b?H.S(a).getUTCMilliseconds()+0:H.S(a).getMilliseconds()+0},
jx:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
return a[b]},
kB:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.P(a))
a[b]=c},
I:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.af(!0,b,"index",null)
t=J.cb(a)
if(b<0||C.b.cD(b,t))return P.C(b,a,"index",null,t)
return P.fA(b,"index",null)},
P:function(a){return new P.af(!0,a,null,null)},
l8:function(a){if(typeof a!=="string")throw H.e(H.P(a))
return a},
e:function(a){var t
if(a==null)a=new P.bk()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.lp})
t.name=""}else t.toString=H.lp
return t},
lp:function(){return J.az(this.dartException)},
E:function(a){throw H.e(a)},
F:function(a){throw H.e(new P.a3(a))},
au:function(a){var t,s,r,q,p,o
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=[]
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.hh(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
hi:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kM:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
jt:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eS(a,s,t?null:b.receiver)},
Q:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.jd(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aO(r,16)&8191)===10)switch(q){case 438:return t.$1(H.jt(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dl(p,null))}}if(a instanceof TypeError){o=$.$get$kG()
n=$.$get$kH()
m=$.$get$kI()
l=$.$get$kJ()
k=$.$get$kN()
j=$.$get$kO()
i=$.$get$kL()
$.$get$kK()
h=$.$get$kQ()
g=$.$get$kP()
f=o.N(s)
if(f!=null)return t.$1(H.jt(s,f))
else{f=n.N(s)
if(f!=null){f.method="call"
return t.$1(H.jt(s,f))}else{f=m.N(s)
if(f==null){f=l.N(s)
if(f==null){f=k.N(s)
if(f==null){f=j.N(s)
if(f==null){f=i.N(s)
if(f==null){f=l.N(s)
if(f==null){f=h.N(s)
if(f==null){f=g.N(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dl(s,f==null?null:f.method))}}return t.$1(new H.hk(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.du()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.af(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.du()
return a},
ay:function(a){var t
if(a==null)return new H.dI(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dI(a,null)},
nG:function(a){if(a==null||typeof a!='object')return J.ap(a)
else return H.aY(a)},
nr:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
nB:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dK(b,new H.iW(a))
case 1:return H.dK(b,new H.iX(a,d))
case 2:return H.dK(b,new H.iY(a,d,e))
case 3:return H.dK(b,new H.iZ(a,d,e,f))
case 4:return H.dK(b,new H.j_(a,d,e,f,g))}throw H.e(P.cl("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.nB)
a.$identity=t
return t},
md:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.t(c).$isb){t.$reflectionInfo=c
r=H.mO(t).r}else r=c
q=d?Object.create(new H.fS().constructor.prototype):Object.create(new H.bv(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.kb(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.nt,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.k8:H.jm
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.kb(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
ma:function(a,b,c,d){var t=H.jm
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
kb:function(a,b,c){var t,s,r,q
if(c)return H.mc(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.ma(s,b==null?r!=null:b!==r,t,b)
return q},
mb:function(a,b,c,d){var t,s
t=H.jm
s=H.k8
switch(b?-1:a){case 0:throw H.e(new H.fJ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
mc:function(a,b){var t,s,r,q
H.m9()
t=$.k7
if(t==null){t=H.k6("receiver")
$.k7=t}s=b.$stubName
r=b.length
q=a[s]
t=H.mb(r,b==null?q!=null:b!==q,s,b)
return t},
jH:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.t(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.md(a,b,t,!!d,e,f)},
jm:function(a){return a.a},
k8:function(a){return a.c},
m9:function(){var t=$.k9
if(t==null){t=H.k6("self")
$.k9=t}return t},
k6:function(a){var t,s,r,q,p
t=new H.bv("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
o5:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.av(a,"String"))},
a_:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"double"))},
o4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"num"))},
nk:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.av(a,"bool"))},
nA:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.av(a,"int"))},
nI:function(a,b){throw H.e(H.av(a,b.substring(3)))},
nH:function(a,b){var t=J.a0(b)
throw H.e(H.ka(H.dm(a),t.aC(b,3,t.gk(b))))},
jK:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.t(a)[b])return a
H.nI(a,b)},
an:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.t(a)[b]
else t=!0
if(t)return a
H.nH(a,b)},
o3:function(a){if(a==null)return a
if(!!J.t(a).$isb)return a
throw H.e(H.av(a,"List"))},
lb:function(a){var t=J.t(a)
return"$S" in t?t.$S():null},
bs:function(a,b){var t
if(a==null)return!1
t=H.lb(a)
return t==null?!1:H.li(t,b)},
o1:function(a,b){var t,s
if(a==null)return a
if($.jE)return a
$.jE=!0
try{if(H.bs(a,b))return a
t=H.aJ(b,null)
s=H.av(a,t)
throw H.e(s)}finally{$.jE=!1}},
av:function(a,b){return new H.hj("type '"+H.dm(a)+"' is not a subtype of type '"+b+"'")},
ka:function(a,b){return new H.dY("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
aH:function(a){if(!0===a)return!1
if(!!J.t(a).$isjp)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.av(a,"bool"))},
b8:function(a){throw H.e(new H.hy(a))},
d:function(a){if(H.aH(a))throw H.e(new P.cc(null))},
nR:function(a){throw H.e(new P.e1(a))},
j5:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
lg:function(a){return u.getIsolateTag(a)},
K:function(a){return new H.aE(a,null)},
D:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iP:function(a){if(a==null)return
return a.$ti},
lh:function(a,b){return H.jO(a["$as"+H.f(b)],H.iP(a))},
am:function(a,b,c){var t,s
t=H.lh(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aI:function(a,b){var t,s
t=H.iP(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aJ:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dM(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aJ(t,b)
return H.n9(a,b)}return"unknown-reified-type"},
n9:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aJ(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aJ(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aJ(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.nq(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aJ(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dM:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bS("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aJ(o,c)}return p?"":"<"+s.j(0)+">"},
iQ:function(a){var t,s
if(a instanceof H.bc){t=H.lb(a)
if(t!=null)return H.aJ(t,null)}s=J.t(a).constructor.name
if(a==null)return s
return s+H.dM(a.$ti,0,null)},
jO:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jL(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jL(a,null,b)
return b},
c5:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iP(a)
s=J.t(a)
if(s[b]==null)return!1
return H.l6(H.jO(s[d],t),c)},
c9:function(a,b,c,d){if(a==null)return a
if(H.c5(a,b,c,d))return a
throw H.e(H.ka(H.dm(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dM(c,0,null),u.mangledGlobalNames)))},
nZ:function(a,b,c,d){if(a==null)return a
if(H.c5(a,b,c,d))return a
throw H.e(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dM(c,0,null),u.mangledGlobalNames)))},
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
if(!H.a1(r,b[p]))return!1}return!0},
o_:function(a,b,c){return H.jL(a,b,H.lh(b,c))},
a1:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aX")return!0
if('func' in b)return H.li(a,b)
if('func' in a)return b.name==="jp"||b.name==="o"
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
return H.l6(H.jO(o,t),r)},
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
if(!(H.a1(o,n)||H.a1(n,o)))return!1}return!0},
ng:function(a,b){var t,s,r,q,p,o
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
if(!(H.a1(p,o)||H.a1(o,p)))return!1}return!0},
li:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
H.d('func' in b)
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){t=a.ret
s=b.ret
if(!(H.a1(t,s)||H.a1(s,t)))return!1}r=a.args
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
if(!(H.a1(g,f)||H.a1(f,g)))return!1}for(j=typeof p==="object"&&p!==null&&p.constructor===Array,e=h,d=0;e<m;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=q[e]
if(!(H.a1(g,f)||H.a1(f,g)))return!1}for(i=typeof o==="object"&&o!==null&&o.constructor===Array,e=0;e<k;++d,++e){H.d(j)
g=p[d]
H.d(i)
f=o[e]
if(!(H.a1(g,f)||H.a1(f,g)))return!1}}return H.ng(a.named,b.named)},
jL:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
o6:function(a){var t=$.jI
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
o2:function(a){return H.aY(a)},
o0:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nD:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.o))
t=$.jI.$1(a)
s=$.iM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iV[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.l4.$2(a,t)
if(t!=null){s=$.iM[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iV[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jM(r)
$.iM[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iV[t]=r
return r}if(p==="-"){o=H.jM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.lk(a,r)
if(p==="*")throw H.e(new P.bV(t))
if(u.leafTags[t]===true){o=H.jM(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.lk(a,r)},
lk:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.j4(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jM:function(a){return J.j4(a,!1,null,!!a.$isp)},
nF:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.j4(t,!1,null,!!t.$isp)
else return J.j4(t,c,null,null)},
ny:function(){if(!0===$.jJ)return
$.jJ=!0
H.nz()},
nz:function(){var t,s,r,q,p,o,n,m
$.iM=Object.create(null)
$.iV=Object.create(null)
H.nx()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ll.$1(p)
if(o!=null){n=H.nF(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
nx:function(){var t,s,r,q,p,o,n
t=C.G()
t=H.br(C.D,H.br(C.I,H.br(C.r,H.br(C.r,H.br(C.H,H.br(C.E,H.br(C.F(C.t),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jI=new H.iS(p)
$.l4=new H.iT(o)
$.ll=new H.iU(n)},
br:function(a,b){return a(b)||b},
kt:function(a,b,c,d){var t,s,r,q
t=b?"m":""
s=c?"":"i"
r=d?"g":""
q=function(e,f){try{return new RegExp(e,f)}catch(p){return p}}(a,t+s+r)
if(q instanceof RegExp)return q
throw H.e(new P.bD("Illegal RegExp pattern ("+String(q)+")",a,null))},
n6:function(a,b){var t=new H.ic(a,b)
t.dv(a,b)
return t},
nM:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
nO:function(a,b,c,d){var t,s,r
t=b.dK(a,d)
if(t==null)return a
s=t.b
r=s.index
return H.nQ(a,r,r+s[0].length,c)},
nN:function(a,b,c){var t,s
t=b.gbH()
t.lastIndex=0
s=a.replace(t,c.replace(/\$/g,"$$$$"))
return s},
nP:function(a,b,c,d){return d===0?a.replace(b.b,c.replace(/\$/g,"$$$$")):H.nO(a,b,c,d)},
nQ:function(a,b,c,d){var t,s
t=a.substring(0,b)
s=a.substring(c)
return t+d+s},
fD:function fD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
hh:function hh(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dl:function dl(a,b){this.a=a
this.b=b},
eS:function eS(a,b,c){this.a=a
this.b=b
this.c=c},
hk:function hk(a){this.a=a},
jd:function jd(a){this.a=a},
dI:function dI(a,b){this.a=a
this.b=b},
iW:function iW(a){this.a=a},
iX:function iX(a,b){this.a=a
this.b=b},
iY:function iY(a,b,c){this.a=a
this.b=b
this.c=c},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bc:function bc(){},
h5:function h5(){},
fS:function fS(){},
bv:function bv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hj:function hj(a){this.a=a},
dY:function dY(a){this.a=a},
fJ:function fJ(a){this.a=a},
hy:function hy(a){this.a=a},
aE:function aE(a,b){this.a=a
this.b=b},
ah:function ah(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
eR:function eR(a){this.a=a},
eU:function eU(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eV:function eV(a,b){this.a=a
this.$ti=b},
eW:function eW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
eQ:function eQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a,b){this.a=a
this.b=b},
w:function(a){return a},
iD:function(a){var t,s,r
if(!!J.t(a).$ism)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bJ:function bJ(){},
bj:function bj(){},
f8:function f8(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dc:function dc(){},
f9:function f9(){},
fa:function fa(){},
fb:function fb(){},
fc:function fc(){},
fd:function fd(){},
fe:function fe(){},
dg:function dg(){},
ff:function ff(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
bN:function bN(){},
nq:function(a){var t=H.D(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
bt:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
t:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d7.prototype
return J.d6.prototype}if(typeof a=="string")return J.aS.prototype
if(a==null)return J.eP.prototype
if(typeof a=="boolean")return J.eO.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.o)return a
return J.iO(a)},
j4:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iO:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jJ==null){H.ny()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.bV("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$js()]
if(p!=null)return p
p=H.nD(a)
if(p!=null)return p
if(typeof a=="function")return C.J
s=Object.getPrototypeOf(a)
if(s==null)return C.w
if(s===Object.prototype)return C.w
if(typeof q=="function"){Object.defineProperty(q,$.$get$js(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
ks:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
mB:function(a,b){var t,s
for(t=a.length;b<t;){s=C.f.aa(a,b)
if(s!==32&&s!==13&&!J.ks(s))break;++b}return b},
mC:function(a,b){var t,s
for(;b>0;b=t){t=b-1
s=C.f.c_(a,t)
if(s!==32&&s!==13&&!J.ks(s))break}return b},
a0:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.o)return a
return J.iO(a)},
ba:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.o)return a
return J.iO(a)},
lf:function(a){if(typeof a=="number")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b1.prototype
return a},
ns:function(a){if(typeof a=="number")return J.bh.prototype
if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b1.prototype
return a},
iN:function(a){if(typeof a=="string")return J.aS.prototype
if(a==null)return a
if(!(a instanceof P.o))return J.b1.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aT.prototype
return a}if(a instanceof P.o)return a
return J.iO(a)},
z:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.t(a).v(a,b)},
ao:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.lf(a).ap(a,b)},
lr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.lf(a).aq(a,b)},
aK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nC(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.a0(a).h(a,b)},
jP:function(a,b,c){return J.ba(a).i(a,b,c)},
ls:function(a,b,c,d){return J.l(a).dA(a,b,c,d)},
jQ:function(a,b){return J.iN(a).aa(a,b)},
bu:function(a,b){return J.l(a).dS(a,b)},
lt:function(a,b,c){return J.l(a).dT(a,b,c)},
jR:function(a,b){return J.l(a).bO(a,b)},
je:function(a,b){return J.l(a).O(a,b)},
jS:function(a,b,c){return J.l(a).bR(a,b,c)},
lu:function(a,b){return J.l(a).e6(a,b)},
dN:function(a,b,c){return J.l(a).bS(a,b,c)},
lv:function(a,b,c){return J.l(a).bT(a,b,c)},
jT:function(a,b,c){return J.l(a).bU(a,b,c)},
dO:function(a,b){return J.l(a).e9(a,b)},
lw:function(a,b){return J.l(a).bV(a,b)},
lx:function(a,b,c){return J.l(a).bW(a,b,c)},
jU:function(a,b,c,d){return J.l(a).bX(a,b,c,d)},
ly:function(a,b){return J.ba(a).bY(a,b)},
lz:function(a,b,c,d,e){return J.l(a).bZ(a,b,c,d,e)},
lA:function(a,b){return J.ns(a).P(a,b)},
jf:function(a,b,c){return J.a0(a).ee(a,b,c)},
dP:function(a){return J.l(a).c1(a)},
lB:function(a){return J.l(a).c2(a)},
jV:function(a){return J.l(a).ek(a)},
lC:function(a,b){return J.l(a).c5(a,b)},
jg:function(a,b){return J.l(a).c6(a,b)},
lD:function(a,b,c,d){return J.l(a).c7(a,b,c,d)},
lE:function(a,b,c,d,e){return J.l(a).er(a,b,c,d,e)},
lF:function(a,b,c,d,e){return J.l(a).c8(a,b,c,d,e)},
lG:function(a,b,c,d,e,f){return J.l(a).es(a,b,c,d,e,f)},
lH:function(a,b){return J.ba(a).t(a,b)},
ca:function(a,b){return J.l(a).c9(a,b)},
lI:function(a,b){return J.l(a).ca(a,b)},
lJ:function(a){return J.l(a).eu(a)},
lK:function(a,b){return J.ba(a).ah(a,b)},
lL:function(a){return J.l(a).ge5(a)},
ap:function(a){return J.t(a).gu(a)},
aL:function(a){return J.ba(a).gw(a)},
jW:function(a){return J.l(a).gC(a)},
cb:function(a){return J.a0(a).gk(a)},
lM:function(a){return J.l(a).gaY(a)},
lN:function(a){return J.t(a).gA(a)},
lO:function(a){return J.l(a).geV(a)},
lP:function(a){return J.l(a).gaz(a)},
jh:function(a){return J.l(a).gm(a)},
ji:function(a){return J.l(a).gn(a)},
jX:function(a){return J.l(a).gJ(a)},
jj:function(a,b){return J.l(a).a5(a,b)},
lQ:function(a){return J.l(a).aB(a)},
lR:function(a,b){return J.l(a).b5(a,b)},
lS:function(a,b,c){return J.l(a).b6(a,b,c)},
jY:function(a,b,c){return J.l(a).b9(a,b,c)},
lT:function(a,b){return J.l(a).cd(a,b)},
lU:function(a,b){return J.ba(a).cf(a,b)},
lV:function(a){return J.ba(a).eP(a)},
lW:function(a,b){return J.l(a).D(a,b)},
lX:function(a,b,c){return J.l(a).cO(a,b,c)},
lY:function(a,b){return J.iN(a).cT(a,b)},
lZ:function(a,b,c,d){return J.l(a).bf(a,b,c,d)},
m_:function(a){return J.iN(a).eY(a)},
az:function(a){return J.t(a).j(a)},
m0:function(a,b,c,d){return J.l(a).f_(a,b,c,d)},
m1:function(a){return J.iN(a).f0(a)},
m2:function(a,b,c){return J.l(a).cl(a,b,c)},
m3:function(a,b,c){return J.l(a).cm(a,b,c)},
jk:function(a,b,c){return J.l(a).cn(a,b,c)},
m4:function(a,b,c){return J.l(a).co(a,b,c)},
jZ:function(a,b,c){return J.l(a).cp(a,b,c)},
k_:function(a,b,c){return J.l(a).cq(a,b,c)},
k0:function(a,b,c){return J.l(a).cr(a,b,c)},
k1:function(a,b,c,d){return J.l(a).cs(a,b,c,d)},
k2:function(a,b,c,d){return J.l(a).ct(a,b,c,d)},
m5:function(a,b){return J.l(a).cv(a,b)},
m6:function(a,b,c){return J.l(a).f1(a,b,c)},
k3:function(a,b,c,d,e,f,g){return J.l(a).cz(a,b,c,d,e,f,g)},
m7:function(a,b,c,d,e){return J.l(a).cA(a,b,c,d,e)},
a:function a(){},
eO:function eO(){},
eP:function eP(){},
bG:function bG(){},
ft:function ft(){},
b1:function b1(){},
aT:function aT(){},
aR:function aR(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
dT:function dT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bh:function bh(){},
d7:function d7(){},
d6:function d6(){},
aS:function aS(){}},P={
mW:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.nh()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.b9(new P.hA(t),1)).observe(s,{childList:true})
return new P.hz(t,s,r)}else if(self.setImmediate!=null)return P.ni()
return P.nj()},
mX:function(a){++u.globalState.f.b
self.scheduleImmediate(H.b9(new P.hB(a),0))},
mY:function(a){++u.globalState.f.b
self.setImmediate(H.b9(new P.hC(a),0))},
mZ:function(a){P.jz(C.o,a)},
nc:function(a,b){if(H.bs(a,{func:1,args:[P.aX,P.aX]})){b.toString
return a}else{b.toString
return a}},
mp:function(a,b,c){var t
if(a==null)a=new P.bk()
t=$.y
if(t!==C.d)t.toString
t=new P.O(0,t,null,[c])
t.bv(a,b)
return t},
mq:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
t={}
s=new P.O(0,$.y,null,[P.b])
t.a=null
t.b=0
t.c=null
t.d=null
r=new P.eF(t,!1,b,s)
try{for(m=0,l=0;m<1;++m){q=a[m]
p=l
q.b2(new P.eE(t,!1,b,s,p),r)
l=++t.b}if(l===0){l=new P.O(0,$.y,null,[null])
l.bu(C.u)
return l}k=new Array(l)
k.fixed$length=Array
t.a=k}catch(j){o=H.Q(j)
n=H.ay(j)
if(t.b===0||!1)return P.mp(o,n,null)
else{t.c=o
t.d=n}}return s},
kW:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.O))
H.d(b.a===0)
b.a=1
try{a.b2(new P.hV(b),new P.hW(b))}catch(r){t=H.Q(r)
s=H.ay(r)
P.nJ(new P.hX(b,t,s))}},
hU:function(a,b){var t,s,r,q
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
P.bn(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bI(q)}},
bn:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.bn(t.a,b)}s=t.a
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
return}s=$.y
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.y
H.d(l==null?s!=null:l!==s)
j=$.y
$.y=l
i=j}else i=null
s=b.c
if(s===8)new P.i1(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.i0(r,b,m).$0()}else if((s&2)!==0)new P.i_(t,r,b).$0()
if(i!=null){H.d(!0)
$.y=i}s=r.b
if(!!J.t(s).$isbf){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ae(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.hU(s,o)
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
nb:function(){var t,s
for(;t=$.bp,t!=null;){$.c3=null
s=t.b
$.bp=s
if(s==null)$.c2=null
t.a.$0()}},
nf:function(){$.jF=!0
try{P.nb()}finally{$.c3=null
$.jF=!1
if($.bp!=null)$.$get$jB().$1(P.l7())}},
l2:function(a){var t=new P.dC(a,null)
if($.bp==null){$.c2=t
$.bp=t
if(!$.jF)$.$get$jB().$1(P.l7())}else{$.c2.b=t
$.c2=t}},
ne:function(a){var t,s,r
t=$.bp
if(t==null){P.l2(a)
$.c3=$.c2
return}s=new P.dC(a,null)
r=$.c3
if(r==null){s.b=t
$.c3=s
$.bp=s}else{s.b=r.b
r.b=s
$.c3=s
if(s.b==null)$.c2=s}},
nJ:function(a){var t=$.y
if(C.d===t){P.bq(null,null,C.d,a)
return}t.toString
P.bq(null,null,t,t.aR(a))},
mU:function(a,b){var t=$.y
if(t===C.d){t.toString
return P.jz(a,b)}return P.jz(a,t.aR(b))},
jz:function(a,b){var t=C.b.E(a.a,1000)
return H.mT(t<0?0:t,b)},
jA:function(a){var t,s
H.d(a!=null)
t=$.y
H.d(a==null?t!=null:a!==t)
s=$.y
$.y=a
return s},
iE:function(a,b,c,d,e){var t={}
t.a=d
P.ne(new P.iF(t,e))},
l0:function(a,b,c,d){var t,s
if($.y===c)return d.$0()
t=P.jA(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.y=s}},
l1:function(a,b,c,d,e){var t,s
if($.y===c)return d.$1(e)
t=P.jA(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.y=s}},
nd:function(a,b,c,d,e,f){var t,s
if($.y===c)return d.$2(e,f)
t=P.jA(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.y=s}},
bq:function(a,b,c,d){var t=C.d!==c
if(t)d=!(!t||!1)?c.aR(d):c.e7(d)
P.l2(d)},
hA:function hA(a){this.a=a},
hz:function hz(a,b,c){this.a=a
this.b=b
this.c=c},
hB:function hB(a){this.a=a},
hC:function hC(a){this.a=a},
eF:function eF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hG:function hG(){},
dD:function dD(a,b){this.a=a
this.$ti=b},
iv:function iv(a,b){this.a=a
this.$ti=b},
dF:function dF(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hR:function hR(a,b){this.a=a
this.b=b},
hZ:function hZ(a,b){this.a=a
this.b=b},
hV:function hV(a){this.a=a},
hW:function hW(a){this.a=a},
hX:function hX(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
hS:function hS(a,b,c){this.a=a
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
dC:function dC(a,b){this.a=a
this.b=b},
fX:function fX(){},
fZ:function fZ(a){this.a=a},
h_:function h_(a,b){this.a=a
this.b=b},
fY:function fY(){},
bb:function bb(a,b){this.a=a
this.b=b},
iC:function iC(){},
iF:function iF(a,b){this.a=a
this.b=b},
ig:function ig(){},
ii:function ii(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
ku:function(a,b){return new H.ah(0,null,null,null,null,null,0,[a,b])},
L:function(){return new H.ah(0,null,null,null,null,null,0,[null,null])},
aV:function(a){return H.nr(a,new H.ah(0,null,null,null,null,null,0,[null,null]))},
c_:function(a,b){return new P.dG(0,null,null,null,null,null,0,[a,b])},
n4:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
my:function(a,b,c){var t,s
if(P.jG(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$c4()
C.a.l(s,a)
try{P.na(a,t)}finally{H.d(C.a.gay(s)===a)
s.pop()}s=P.kF(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eM:function(a,b,c){var t,s,r
if(P.jG(a))return b+"..."+c
t=new P.bS(b)
s=$.$get$c4()
C.a.l(s,a)
try{r=t
r.a=P.kF(r.ga2(),a,", ")}finally{H.d(C.a.gay(s)===a)
s.pop()}s=t
s.a=s.ga2()+c
s=t.ga2()
return s.charCodeAt(0)==0?s:s},
jG:function(a){var t,s
for(t=0;s=$.$get$c4(),t<s.length;++t)if(a===s[t])return!0
return!1},
na:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gw(a)
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
ai:function(a,b,c,d){return new P.i7(0,null,null,null,null,null,0,[d])},
ju:function(a,b){var t,s
t=P.ai(null,null,null,b)
for(s=J.aL(a);s.p();)t.l(0,s.gq())
return t},
mE:function(a){var t,s,r
t={}
if(P.jG(a))return"{...}"
s=new P.bS("")
try{C.a.l($.$get$c4(),a)
r=s
r.a=r.ga2()+"{"
t.a=!0
a.ah(0,new P.f0(t,s))
t=s
t.a=t.ga2()+"}"}finally{t=$.$get$c4()
H.d(C.a.gay(t)===a)
t.pop()}t=s.ga2()
return t.charCodeAt(0)==0?t:t},
jv:function(a,b){var t=new P.eX(null,0,0,0,[b])
t.de(a,b)
return t},
dG:function dG(a,b,c,d,e,f,g,h){var _=this
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
bZ:function bZ(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
i5:function i5(){},
d8:function d8(){},
x:function x(){},
f0:function f0(a,b){this.a=a
this.b=b},
eX:function eX(a,b,c,d,e){var _=this
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
fM:function fM(){},
fL:function fL(){},
bP:function bP(){},
kF:function(a,b,c){var t=J.aL(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
me:function(a,b){return J.lA(a,b)},
mf:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
mg:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cf:function(a){if(a>=10)return""+a
return"0"+a},
mi:function(a,b,c,d,e,f){return new P.aA(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
jo:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.az(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ml(a)},
ml:function(a){var t=J.t(a)
if(!!t.$isbc)return t.j(a)
return H.fz(a)},
jl:function(a){return new P.af(!1,null,null,a)},
k4:function(a,b,c){return new P.af(!0,a,b,c)},
m8:function(a){return new P.af(!1,null,a,"Must not be null")},
fA:function(a,b,c){return new P.dp(null,null,!0,a,b,"Value not in range")},
b_:function(a,b,c,d,e){return new P.dp(b,c,!0,a,d,"Invalid value")},
kC:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.b_(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.b_(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.cb(b)
return new P.eJ(b,t,!0,a,c,"Index out of range")},
cl:function(a){return new P.hQ(a)},
kv:function(a,b,c){var t,s
t=H.D([],[c])
for(s=J.aL(a);s.p();)C.a.l(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
V:function(a){H.bt(H.f(a))},
kD:function(a,b,c){return new H.eQ(a,H.kt(a,!1,!0,!1),null,null)},
ax:function ax(){},
H:function H(){},
aP:function aP(a,b){this.a=a
this.b=b},
M:function M(){},
aA:function aA(a){this.a=a},
e8:function e8(){},
e9:function e9(){},
be:function be(){},
cc:function cc(a){this.a=a},
bk:function bk(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dp:function dp(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eJ:function eJ(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
u:function u(a){this.a=a},
bV:function bV(a){this.a=a},
aj:function aj(a){this.a=a},
a3:function a3(a){this.a=a},
du:function du(){},
e1:function e1(a){this.a=a},
hQ:function hQ(a){this.a=a},
bD:function bD(a,b,c){this.a=a
this.b=b
this.c=c},
eb:function eb(a,b,c){this.a=a
this.b=b
this.$ti=c},
n:function n(){},
W:function W(){},
d5:function d5(){},
b:function b(){},
aD:function aD(){},
aX:function aX(){},
U:function U(){},
o:function o(){},
bR:function bR(){},
r:function r(){},
bS:function bS(a){this.a=a},
iK:function(a){var t,s,r,q,p
if(a==null)return
t=P.L()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
nn:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lK(a,new P.iH(t))
return t},
no:function(a){var t,s
t=new P.O(0,$.y,null,[null])
s=new P.dD(t,[null])
a.then(H.b9(new P.iI(s),1))["catch"](H.b9(new P.iJ(s),1))
return t},
kk:function(){var t=$.kj
if(t==null){t=J.jf(window.navigator.userAgent,"Opera",0)
$.kj=t}return t},
mh:function(){var t,s
t=$.kg
if(t!=null)return t
s=$.kh
if(s==null){s=J.jf(window.navigator.userAgent,"Firefox",0)
$.kh=s}if(s)t="-moz-"
else{s=$.ki
if(s==null){s=!P.kk()&&J.jf(window.navigator.userAgent,"Trident/",0)
$.ki=s}if(s)t="-ms-"
else t=P.kk()?"-o-":"-webkit-"}$.kg=t
return t},
hv:function hv(){},
hx:function hx(a,b){this.a=a
this.b=b},
iH:function iH(a){this.a=a},
hw:function hw(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a){this.a=a},
iJ:function iJ(a){this.a=a},
ie:function ie(){},
J:function J(){},
dQ:function dQ(){},
aM:function aM(){},
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
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
ey:function ey(){},
eB:function eB(){},
ag:function ag(){},
aC:function aC(){},
eI:function eI(){},
ar:function ar(){},
eT:function eT(){},
f1:function f1(){},
f2:function f2(){},
as:function as(){},
fj:function fj(){},
fq:function fq(){},
fv:function fv(){},
fw:function fw(){},
fB:function fB(){},
fC:function fC(){},
bQ:function bQ(){},
h0:function h0(){},
G:function G(){},
h1:function h1(){},
h2:function h2(){},
dw:function dw(){},
h6:function h6(){},
bU:function bU(){},
at:function at(){},
hf:function hf(){},
hm:function hm(){},
ho:function ho(){},
hp:function hp(){},
bX:function bX(){},
ik:function ik(){},
il:function il(){},
im:function im(){},
cu:function cu(){},
cs:function cs(){},
cz:function cz(){},
cD:function cD(){},
cO:function cO(){},
cW:function cW(){},
cS:function cS(){},
cU:function cU(){},
dU:function dU(){},
fG:function fG(){},
fH:function fH(){},
iz:function iz(){},
fR:function fR(){},
ct:function ct(){},
cY:function cY(){}},W={
l9:function(){return document},
mj:function(a,b,c){var t,s
t=document.body
s=(t&&C.i).M(t,a,b,c)
s.toString
t=new H.dB(new W.T(s),new W.iG(),[W.q])
return t.ga0(t)},
mk:function(a){return"wheel"},
bw:function(a){var t,s,r
t="element tag unavailable"
try{s=J.lO(a)
if(typeof s==="string")t=a.tagName}catch(r){H.Q(r)}return t},
n_:function(a,b){return document.createElement(a)},
b7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kZ:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ae:function(a,b,c,d,e){var t=c==null?null:W.l3(new W.hP(c))
t=new W.hO(0,a,b,t,!1,[e])
t.ds(a,b,c,!1,e)
return t},
kX:function(a){var t,s
t=document.createElement("a")
s=new W.io(t,window.location)
s=new W.bY(s)
s.dt(a)
return s},
n2:function(a,b,c,d){return!0},
n3:function(a,b,c,d){var t,s,r,q,p
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
l_:function(){var t=P.r
t=new W.iw(P.ju(C.k,t),P.ai(null,null,null,t),P.ai(null,null,null,t),P.ai(null,null,null,t),null)
t.dw(null,new H.bH(C.k,new W.ix(),[H.aI(C.k,0),null]),["TEMPLATE"],null)
return t},
n8:function(a){var t
if(!!J.t(a).$isaQ)return a
t=new P.hw([],[],!1)
t.c=!0
return t.b4(a)},
l3:function(a){var t=$.y
if(t===C.d)return a
return t.e8(a)},
k:function k(){},
dR:function dR(){},
dS:function dS(){},
a2:function a2(){},
dV:function dV(){},
cd:function cd(){},
aN:function aN(){},
ce:function ce(){},
dX:function dX(){},
aO:function aO(){},
e_:function e_(){},
A:function A(){},
bd:function bd(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
cg:function cg(){},
aQ:function aQ(){},
ch:function ch(){},
e4:function e4(){},
ci:function ci(){},
e5:function e5(){},
cj:function cj(){},
ck:function ck(){},
e6:function e6(){},
e7:function e7(){},
a4:function a4(){},
iG:function iG(){},
j:function j(){},
h:function h(){},
a5:function a5(){},
ew:function ew(){},
ex:function ex(){},
eC:function eC(){},
a6:function a6(){},
co:function co(){},
eH:function eH(){},
bE:function bE(){},
cp:function cp(){},
cq:function cq(){},
bF:function bF(){},
bg:function bg(){},
aU:function aU(){},
eZ:function eZ(){},
f4:function f4(){},
f5:function f5(){},
bI:function bI(){},
a7:function a7(){},
f6:function f6(){},
N:function N(){},
fg:function fg(){},
T:function T(a){this.a=a},
q:function q(){},
di:function di(){},
bO:function bO(){},
fp:function fp(){},
fs:function fs(){},
a8:function a8(){},
fu:function fu(){},
fx:function fx(){},
fy:function fy(){},
dn:function dn(){},
fI:function fI(){},
dq:function dq(){},
fK:function fK(){},
fN:function fN(){},
a9:function a9(){},
fO:function fO(){},
aa:function aa(){},
fQ:function fQ(){},
ab:function ab(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
X:function X(){},
ak:function ak(){},
dv:function dv(){},
h3:function h3(){},
h4:function h4(){},
bT:function bT(){},
ac:function ac(){},
Y:function Y(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ad:function ad(){},
b0:function b0(){},
hd:function hd(){},
he:function he(){},
bm:function bm(){},
hg:function hg(){},
dz:function dz(){},
aF:function aF(){},
hl:function hl(){},
hn:function hn(){},
hq:function hq(){},
hr:function hr(){},
b2:function b2(){},
bW:function bW(){},
ht:function ht(a){this.a=a},
hu:function hu(){},
b3:function b3(){},
hF:function hF(){},
dE:function dE(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
i3:function i3(){},
i4:function i4(){},
dH:function dH(){},
ip:function ip(){},
is:function is(){},
it:function it(){},
iA:function iA(){},
iB:function iB(){},
hD:function hD(){},
hK:function hK(a){this.a=a},
hN:function hN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jC:function jC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hO:function hO(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hP:function hP(a){this.a=a},
bY:function bY(a){this.a=a},
B:function B(){},
dk:function dk(a){this.a=a},
fi:function fi(a){this.a=a},
fh:function fh(a,b,c){this.a=a
this.b=b
this.c=c},
c0:function c0(){},
iq:function iq(){},
ir:function ir(){},
iw:function iw(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ix:function ix(){},
iu:function iu(){},
cn:function cn(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
dj:function dj(){},
io:function io(a,b){this.a=a
this.b=b},
dJ:function dJ(a){this.a=a},
iy:function iy(a){this.a=a},
bx:function bx(){},
by:function by(){},
bz:function bz(){},
bA:function bA(){},
bB:function bB(){},
bC:function bC(){},
cr:function cr(){},
cL:function cL(){},
cx:function cx(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
cI:function cI(){},
cJ:function cJ(){},
cK:function cK(){},
cv:function cv(){},
cw:function cw(){},
cy:function cy(){},
cA:function cA(){},
cB:function cB(){},
cC:function cC(){},
cM:function cM(){},
cN:function cN(){},
cZ:function cZ(){},
cX:function cX(){},
d1:function d1(){},
d2:function d2(){},
d3:function d3(){},
d4:function d4(){},
cP:function cP(){},
cQ:function cQ(){},
cR:function cR(){},
cT:function cT(){},
cV:function cV(){},
d_:function d_(){},
d0:function d0(){}},B={
nK:function(a){var t,s
t=document
s=W.aU
W.ae(t,"keydown",new B.j6(),!1,s)
W.ae(t,"keyup",new B.j7(),!1,s)
if(!$.nL)W.ae(t,"mousemove",new B.j8(),!1,W.N)
s=W.N
W.ae(t,"mousedown",new B.j9(),!1,s)
W.ae(t,"mouseup",new B.ja(),!1,s)},
mF:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.w(3))
s=$.$get$iL()
r=$.$get$c6()
q=new T.R(new Float32Array(H.w(16)))
q.S()
q=new B.fk(a,b,c,0,new T.v(t),-0.02,s,r,q,new T.v(new Float32Array(H.w(3))),new T.v(new Float32Array(H.w(3))),new T.v(new Float32Array(H.w(3))),new T.v(new Float32Array(H.w(3))),"camera:orbit",!1,!0)
q.dg(a,b,c,d)
return q},
j6:function j6(){},
j7:function j7(){},
j8:function j8(){},
j9:function j9(){},
ja:function ja(){},
fk:function fk(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fl:function fl(a){this.a=a},
fm:function fm(a){this.a=a},
fn:function fn(){},
fo:function fo(a){this.a=a}},G={
mV:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.al(t,"\n")},
kV:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.c3(a,b)
t.bc(a,s,c)
t.c0(a,s)
r=t.b8(a,s,35713)
if(r!=null&&!r){q=t.b7(a,s)
P.V("E:Compilation failed:")
P.V("E:"+G.mV(c))
P.V("E:Failure:")
P.V(C.f.a_("E:",q))
throw H.e(q)}return s},
kw:function(a){var t=new G.f3(P.L(),a,!1,!0)
t.df(a)
return t},
ez:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.jh(a[s])
b[t+1]=J.ji(a[s])
b[t+2]=J.jX(a[s])}return b},
mn:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.jh(a[s])
b[t+1]=J.ji(a[s])}return b},
mo:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.jh(a[s])
b[t+1]=J.ji(a[s])
b[t+2]=J.jX(a[s])
b[t+3]=J.lP(a[s])}return b},
mm:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.aK(a[s],0)
b[t+1]=J.aK(a[s],1)
b[t+2]=J.aK(a[s],2)
b[t+3]=J.aK(a[s],3)}return b},
n1:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gC(t),s=s.gw(s),r=b.x,q=[[P.b,P.n]],p=[P.M],o=[T.aG],n=[T.v],m=[T.aw];s.p();){l=s.gq()
if(!r.F(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.lc>0)H.bt("I: "+k)
continue}j=t.h(0,l)
switch($.$get$Z().h(0,l).a){case"vec2":b.a9(l,G.mn(H.c9(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.a9(l,G.ez(H.c9(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.a9(l,G.mo(H.c9(j,"$isb",o,"$asb"),null),4)
break
case"float":b.a9(l,new Float32Array(H.iD(H.c9(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.a9(l,G.mm(H.c9(j,"$isb",q,"$asb"),null),4)
break
default:if(H.aH(!1))H.b8("unknown type for "+H.f(l)+" ["+J.lN(j[0]).j(0)+"] ["+new H.aE(H.iQ(j),null).j(0)+"] "+H.f(j))}}},
n0:function(a,b,c,d){var t,s,r,q,p,o,n,m,l
t=b.length
H.d(t===c.length)
s=2*t
r=new Float32Array(H.w(s))
for(q=0;q<t;q+=3){p=2*q
r[p]=b[q]
o=q+1
r[p+1]=b[o]
n=q+2
r[p+2]=b[n]
r[p+3]=b[q]+d*c[q]
r[p+4]=b[o]+d*c[o]
r[p+5]=b[n]+d*c[n]}a.bh(r)
m=C.b.E(s,3)
t=new Array(m)
t.fixed$length=Array
l=H.D(t,[P.n])
for(q=0;q<m;++q)l[q]=q
a.y=J.dP(a.d.a)
a.bj(l)
return a},
mP:function(a,b,c,d){var t=new G.fF(b,c,d,null,null,P.L(),P.L(),P.ai(null,null,null,P.r),null,a,!1,!0)
t.dh(a,b,c,d)
return t},
f7:function f7(){},
dA:function dA(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dW:function dW(){},
dZ:function dZ(a,b){this.a=a
this.b=b},
eD:function eD(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eu:function eu(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dy:function dy(a,b,c){this.a=a
this.b=b
this.c=c},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
db:function db(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fr:function fr(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fF:function fF(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
i:function i(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fP:function fP(){}},R={fT:function fT(){},fU:function fU(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
la:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
if(!b.c)return
t=b.dx
t.K(c)
s=b.d
t.cg(0,s)
r=b.cx
J.az(b)
q=C.a.gay(e)
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
p.eg(new T.aW(o))
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
a.d9(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.F)(s),++l)A.la(a,s[l],t,d,e)},
dh:function dh(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
dr:function dr(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fE:function fE(a,b,c,d,e,f,g,h,i,a0,a1){var _=this
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
dL:function(a){var t,s
t=C.e.ew(a,0,new A.iR())
s=536870911&t+(C.b.cB(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
iR:function iR(){}},D={
mD:function(a){var t,s
t=new P.O(0,$.y,null,[null])
s=new XMLHttpRequest()
C.p.eN(s,"GET",a)
W.ae(s,"loadend",new D.eY(new P.dD(t,[null]),s),!1,W.nX)
C.p.D(s,"")
return t},
eY:function eY(a,b){this.a=a
this.b=b}},T={
kU:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.v(t)},
aW:function aW(a){this.a=a},
R:function R(a){this.a=a},
aw:function aw(a){this.a=a},
v:function v(a){this.a=a},
aG:function aG(a){this.a=a}},V={
nE:function(){var t,s,r,q,p,o,n,m,l,k,j,i
t={}
s=document
r=new R.fU(0,0,null,null,null,null)
r.dj(C.h.cF(s,"stats"),"blue","gray")
q=C.h.b_(s,"#webgl-canvas")
p=new G.dZ(null,q)
s=(q&&C.z).cE(q,"webgl2",P.aV(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
p.a=s
if(s==null)H.E(P.cl('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
o="ChronosGL Config: "+J.az(J.lQ(s))
if($.lc>0)P.V("I: "+o)
J.lz(s,0,0,0,1)
J.ca(s,2929)
J.ca(s,2884)
n=B.mF(25,10,0,q)
s=new T.R(new Float32Array(H.w(16)))
s.S()
o=new T.R(new Float32Array(H.w(16)))
o.S()
m=new G.fr(n,50,1,0.1,1000,s,o,new T.R(new Float32Array(H.w(16))),P.L(),"perspective",!1,!0)
m.bo()
o=H.D([],[A.dr])
l=new A.fE(null,p,o,17664,0,0,0,0,"main",!1,!0)
l.d=new G.eD(p,null,null,null,null)
s=G.mP("solid",p,$.$get$ln(),$.$get$lm())
k=new A.dr(s,[m],[],"solid",!1,!0)
H.d(!0)
C.a.l(o,k)
j=G.kw("wire")
j.a1("uColor",$.$get$kd())
i=G.kw("normal")
i.a1("uColor",$.$get$kc())
t.a=null
t.b=null
s=new V.j3(q,m,l)
s.$1(null)
W.ae(window,"resize",s,!1,W.j)
t.c=0
P.mq([D.mD("../asset/dragon/dragon.obj")],null,!1).b1(new V.j2(t,k,j,i,new V.j1(t,r,n,l)))},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j2:function j2(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e}},Y={
mr:function(a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
t=new G.eG(!1,[],[],[],P.L())
t.bk("aTexUV")
t.bk("aNormal")
s=P.L()
r=a6.split("\n")
q=[]
p=[]
o=[]
n=Date.now()
m=P.kD("\\s+",!0,!1)
l=P.kD("\\s\\s*\\$",!0,!1)
for(k=r.length,j=0;j<r.length;r.length===k||(0,H.F)(r),++j){i=r[j]
i.toString
h=H.nN(i,m," ")
g=H.nP(h,l,"",0)
if(g.length===0||g[0]==="#")continue
f=g.split(" ")
if(J.z(f[0],"g"))s.i(0,f[1],q.length)
else if(J.z(f[0],"v")){h=H.aZ(f[1],null)
e=H.aZ(f[2],null)
d=H.aZ(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(q,new T.v(c))}else if(J.z(f[0],"vt")){h=H.aZ(f[1],null)
e=H.aZ(f[2],null)
d=new Float32Array(2)
d[0]=h
d[1]=e
C.a.l(o,new T.aw(d))}else if(J.z(f[0],"vn")){h=H.aZ(f[1],null)
e=H.aZ(f[2],null)
d=H.aZ(f[3],null)
c=new Float32Array(3)
c[0]=h
c[1]=e
c[2]=d
C.a.l(p,new T.v(c))}else if(J.z(f[0],"f")){h=f.length
if(h!==4&&h!==5){H.bt("*** Error: face '"+g+"' not handled")
continue}b=[]
a=[]
a0=[]
for(a1=1;h=f.length,a1<h;++a1){a2=J.lY(f[a1],"/")
H.d(a2.length>0)
for(;a2.length<3;)C.a.l(a2,"")
a3=H.jy(a2[0],null,null)-1
a4=J.z(a2[1],"")?-1:H.jy(a2[1],null,null)-1
a5=J.z(a2[2],"")?-1:H.jy(a2[2],null,null)-1
if(a3<q.length)C.a.l(b,q[a3])
else C.a.l(b,new T.v(new Float32Array(3)))
if(a4!==-1&&a4<o.length)C.a.l(a0,o[a4])
else{H.bt("problem uv "+a1+" "+a4)
C.a.l(a0,new T.aw(new Float32Array(2)))}if(a5!==-1&&a5<p.length)C.a.l(a,p[a5])
else{H.bt("problem normals "+a1+" "+a5)
C.a.l(a,new T.v(new Float32Array(3)))}}if(h===4)t.d3(b)
else t.d4(b)
t.d2("aNormal",a)
t.d1("aTexUV",a0)}}P.V("loaded ("+P.mi(0,0,0,Date.now()-new P.aP(n,!1).a,0,0).j(0)+") "+t.j(0))
return t}}
var v=[C,H,J,P,W,B,G,R,A,D,T,V,Y]
setFunctionNamesIfNecessary(v)
var $={}
H.jr.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gu:function(a){return H.aY(a)},
j:function(a){return H.fz(a)},
gA:function(a){return new H.aE(H.iQ(a),null)}}
J.eO.prototype={
j:function(a){return String(a)},
gu:function(a){return a?519018:218159},
gA:function(a){return C.a_},
$isax:1}
J.eP.prototype={
v:function(a,b){return null==b},
j:function(a){return"null"},
gu:function(a){return 0},
gA:function(a){return C.U}}
J.bG.prototype={
gu:function(a){return 0},
gA:function(a){return C.T},
j:function(a){return String(a)},
$iskr:1}
J.ft.prototype={}
J.b1.prototype={}
J.aT.prototype={
j:function(a){var t=a[$.$get$kf()]
return t==null?this.cY(a):J.az(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isjp:1}
J.aR.prototype={
aT:function(a,b){if(!!a.immutable$list)throw H.e(new P.u(b))},
aS:function(a,b){if(!!a.fixed$length)throw H.e(new P.u(b))},
l:function(a,b){this.aS(a,"add")
a.push(b)},
L:function(a,b){var t,s,r,q
t=a.length
this.aS(a,"addAll")
for(s=0;s<1;++s,t=q){r=b[s]
q=t+1
H.d(t===a.length||H.E(new P.a3(a)))
a.push(r)}},
cf:function(a,b){return new H.bH(a,b,[H.aI(a,0),null])},
al:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
gev:function(a){if(a.length>0)return a[0]
throw H.e(H.eN())},
gay:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eN())},
bb:function(a,b,c,d,e){var t,s
this.aT(a,"setRange")
P.kC(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.E(P.b_(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.mz())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bQ:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a3(a))}return!1},
cS:function(a,b){this.aT(a,"sort")
H.dt(a,0,a.length-1,P.np())},
bd:function(a){return this.cS(a,null)},
B:function(a,b){var t
for(t=0;t<a.length;++t)if(J.z(a[t],b))return!0
return!1},
j:function(a){return P.eM(a,"[","]")},
gw:function(a){return new J.dT(a,a.length,0,null,[H.aI(a,0)])},
gu:function(a){return H.aY(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aS(a,"set length")
if(b<0)throw H.e(P.b_(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.I(a,b))
if(b>=a.length||b<0)throw H.e(H.I(a,b))
return a[b]},
i:function(a,b,c){this.aT(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.I(a,b))
if(b>=a.length||b<0)throw H.e(H.I(a,b))
a[b]=c},
$ism:1,
$asm:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.jq.prototype={}
J.dT.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.F(t))
r=this.c
if(r>=s){this.sbp(null)
return!1}this.sbp(t[r]);++this.c
return!0},
sbp:function(a){this.d=a}}
J.bh.prototype={
P:function(a,b){var t
if(typeof b!=="number")throw H.e(H.P(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gaw(b)
if(this.gaw(a)===t)return 0
if(this.gaw(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaw:function(a){return a===0?1/a<0:a<0},
ea:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.u(""+a+".ceil()"))},
a4:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.u(""+a+".round()"))},
eb:function(a,b,c){if(this.P(b,c)>0)throw H.e(H.P(b))
if(this.P(a,b)<0)return b
if(this.P(a,c)>0)return c
return a},
eZ:function(a,b){var t
if(b>20)throw H.e(P.b_(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gaw(a))return"-"+t
return t},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu:function(a){return a&0x1FFFFFFF},
a_:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a+b},
a8:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a-b},
cC:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a/b},
G:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a*b},
aE:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bM(a,b)},
E:function(a,b){return(a|0)===a?a/b|0:this.bM(a,b)},
bM:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.u("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aO:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cB:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a&b)>>>0},
d_:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return(a^b)>>>0},
aq:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a<b},
ap:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>b},
cD:function(a,b){if(typeof b!=="number")throw H.e(H.P(b))
return a>=b},
gA:function(a){return C.a2},
$isU:1}
J.d7.prototype={
gA:function(a){return C.a1},
$isM:1,
$isn:1,
$isU:1}
J.d6.prototype={
gA:function(a){return C.a0},
$isM:1,
$isU:1}
J.aS.prototype={
c_:function(a,b){if(b<0)throw H.e(H.I(a,b))
if(b>=a.length)H.E(H.I(a,b))
return a.charCodeAt(b)},
aa:function(a,b){if(b>=a.length)throw H.e(H.I(a,b))
return a.charCodeAt(b)},
a_:function(a,b){if(typeof b!=="string")throw H.e(P.k4(b,null,null))
return a+b},
cT:function(a,b){var t=a.split(b)
return t},
cU:function(a,b,c){var t
if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
be:function(a,b){return this.cU(a,b,0)},
aC:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fA(b,null,null))
if(b>c)throw H.e(P.fA(b,null,null))
if(c>a.length)throw H.e(P.fA(c,null,null))
return a.substring(b,c)},
cV:function(a,b){return this.aC(a,b,null)},
eY:function(a){return a.toLowerCase()},
f0:function(a){var t,s,r,q,p
t=a.trim()
s=t.length
if(s===0)return t
if(this.aa(t,0)===133){r=J.mB(t,1)
if(r===s)return""}else r=0
q=s-1
p=this.c_(t,q)===133?J.mC(t,q):s
if(r===0&&p===s)return t
return t.substring(r,p)},
ee:function(a,b,c){if(c>a.length)throw H.e(P.b_(c,0,a.length,null,null))
return H.nM(a,b,c)},
P:function(a,b){var t
if(typeof b!=="string")throw H.e(H.P(b))
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
gA:function(a){return C.V},
gk:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.I(a,b))
if(b>=a.length||!1)throw H.e(H.I(a,b))
return a[b]},
$ism:1,
$asm:function(){},
$isr:1}
H.c.prototype={$asc:null}
H.bi.prototype={
gw:function(a){return new H.d9(this,this.gk(this),0,null,[H.am(this,"bi",0)])},
aA:function(a,b){return this.cX(0,b)},
eX:function(a,b){var t,s
t=H.D([],[H.am(this,"bi",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.t(0,s)
return t},
eW:function(a){return this.eX(a,!0)}}
H.d9.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.a0(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a3(t))
q=this.c
if(q>=r){this.sac(null)
return!1}this.sac(s.t(t,q));++this.c
return!0},
sac:function(a){this.d=a}}
H.da.prototype={
gw:function(a){return new H.f_(null,J.aL(this.a),this.b,this.$ti)},
gk:function(a){return J.cb(this.a)},
$asW:function(a,b){return[b]}}
H.ea.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.f_.prototype={
p:function(){var t=this.b
if(t.p()){this.sac(this.c.$1(t.gq()))
return!0}this.sac(null)
return!1},
gq:function(){return this.a},
sac:function(a){this.a=a},
$asd5:function(a,b){return[b]}}
H.bH.prototype={
gk:function(a){return J.cb(this.a)},
t:function(a,b){return this.b.$1(J.lH(this.a,b))},
$asc:function(a,b){return[b]},
$asbi:function(a,b){return[b]},
$asW:function(a,b){return[b]}}
H.dB.prototype={
gw:function(a){return new H.hs(J.aL(this.a),this.b,this.$ti)}}
H.hs.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.cm.prototype={}
H.jb.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.jc.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.ib.prototype={
seG:function(a){this.z=a},
seK:function(a){this.ch=a}}
H.b5.prototype={
bP:function(a,b){if(!this.f.v(0,a))return
if(this.Q.l(0,b)&&!this.y)this.y=!0
this.aQ()},
eR:function(a){var t,s,r,q,p
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
if(q===r.c)r.bF();++r.d}this.y=!1}this.aQ()},
e1:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).l(r,a)
t=this.ch;(t&&C.a).l(t,b)},
eQ:function(a){var t,s,r
if(this.ch==null)return
for(t=J.t(a),s=0;r=this.ch,s<r.length;s+=2)if(t.v(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.E(new P.u("removeRange"))
P.kC(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cP:function(a,b){if(!this.r.v(0,a))return
this.db=b},
eA:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.D(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jv(null,null)
this.cx=t}t.T(0,new H.i6(a,c))},
ez:function(a,b){var t
if(!this.r.v(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.ax()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.jv(null,null)
this.cx=t}t.T(0,this.geH())},
eB:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.V(a)
if(b!=null)P.V(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.az(a)
s[1]=b==null?null:b.j(0)
for(r=new P.bZ(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.D(0,s)},
ag:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.Q(o)
p=H.ay(o)
this.eB(q,p)
if(this.db){this.ax()
if(this===u.globalState.e)throw o}}finally{this.cy=H.nk(r)
u.globalState.d=H.jK(t,"$isb5")
if(t!=null)$=t.geF()
if(this.cx!=null)for(;n=this.cx,!n.gak(n);)this.cx.ci().$0()}return s},
ce:function(a){return this.b.h(0,a)},
bt:function(a,b){var t=this.b
if(t.F(0,a))throw H.e(P.cl("Registry: ports must be registered only once."))
t.i(0,a,b)},
aQ:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.ax()},
ax:function(){var t,s,r
t=this.cx
if(t!=null)t.V(0)
for(t=this.b,s=t.gcw(t),s=s.gw(s);s.p();)s.gq().dD()
t.V(0)
this.c.V(0)
u.globalState.z.am(0,this.a)
this.dx.V(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].D(0,t[r+1])
this.ch=null}},
geF:function(){return this.d},
gef:function(){return this.e}}
H.i6.prototype={
$0:function(){this.a.D(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hL.prototype={
em:function(){var t=this.a
if(t.b===t.c)return
return t.ci()},
ck:function(){var t,s,r
t=this.em()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.F(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gak(s)}else s=!1
else s=!1
else s=!1
if(s)H.E(P.cl("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gak(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aV(["command","close"])
r=new H.al(!0,new P.dG(0,null,null,null,null,null,0,[null,P.n])).I(r)
s.toString
self.postMessage(r)}return!1}t.eO()
return!0},
bK:function(){if(self.window!=null)new H.hM(this).$0()
else for(;this.ck(););},
an:function(){var t,s,r,q,p
if(!u.globalState.x)this.bK()
else try{this.bK()}catch(r){t=H.Q(r)
s=H.ay(r)
q=u.globalState.Q
p=P.aV(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.al(!0,P.c_(null,P.n)).I(p)
q.toString
self.postMessage(p)}}}
H.hM.prototype={
$0:function(){if(!this.a.ck())return
P.mU(C.o,this)},
$S:function(){return{func:1,v:true}}}
H.b6.prototype={
eO:function(){var t=this.a
if(t.y){C.a.l(t.z,this)
return}t.ag(this.b)}}
H.ia.prototype={}
H.eK.prototype={
$0:function(){H.mv(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eL.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bs(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bs(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aQ()},
$S:function(){return{func:1,v:true}}}
H.hE.prototype={}
H.bo.prototype={
D:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.n7(b)
if(t.gef()===s){s=J.a0(r)
switch(s.h(r,0)){case"pause":t.bP(s.h(r,1),s.h(r,2))
break
case"resume":t.eR(s.h(r,1))
break
case"add-ondone":t.e1(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.eQ(s.h(r,1))
break
case"set-errors-fatal":t.cP(s.h(r,1),s.h(r,2))
break
case"ping":t.eA(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ez(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.l(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.am(0,s)
break}return}u.globalState.f.a.T(0,new H.b6(t,new H.id(this,r),"receive"))},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bo){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gu:function(a){return this.b.a}}
H.id.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dz(0,this.b)},
$S:function(){return{func:1}}}
H.c1.prototype={
D:function(a,b){var t,s,r
t=P.aV(["command","message","port",this,"msg",b])
s=new H.al(!0,P.c_(null,P.n)).I(t)
if(u.globalState.x){u.globalState.Q.toString
self.postMessage(s)}else{r=u.globalState.ch.h(0,this.b)
if(r!=null)r.postMessage(s)}},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.c1){t=this.b
s=b.b
if(t==null?s==null:t===s){t=this.a
s=b.a
if(t==null?s==null:t===s){t=this.c
s=b.c
s=t==null?s==null:t===s
t=s}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){return C.b.d_((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bl.prototype={
dD:function(){this.c=!0
this.b=null},
dz:function(a,b){if(this.c)return
this.b.$1(b)},
$ismN:1}
H.ha.prototype={
dk:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.T(0,new H.b6(s,new H.hb(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.b9(new H.hc(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.u("Timer greater than 0."))}}}
H.hb.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.hc.prototype={
$0:function(){this.a.c=null
H.j0()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aq.prototype={
gu:function(a){var t=this.a
t=C.b.aO(t,0)^C.b.E(t,4294967296)
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
H.al.prototype={
I:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.t(a)
if(!!t.$isbJ)return["buffer",a]
if(!!t.$isbj)return["typed",a]
if(!!t.$ism)return this.cK(a)
if(!!t.$isms){r=this.gcH()
q=t.gC(a)
q=H.jw(q,r,H.am(q,"W",0),null)
q=P.kv(q,!0,H.am(q,"W",0))
t=t.gcw(a)
t=H.jw(t,r,H.am(t,"W",0),null)
return["map",q,P.kv(t,!0,H.am(t,"W",0))]}if(!!t.$iskr)return this.cL(a)
if(!!t.$isa)this.cu(a)
if(!!t.$ismN)this.ao(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbo)return this.cM(a)
if(!!t.$isc1)return this.cN(a)
if(!!t.$isbc){p=a.$static_name
if(p==null)this.ao(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaq)return["capability",a.a]
if(!(a instanceof P.o))this.cu(a)
return["dart",u.classIdExtractor(a),this.cJ(u.classFieldsExtractor(a))]},
ao:function(a,b){throw H.e(new P.u((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cu:function(a){return this.ao(a,null)},
cK:function(a){var t
H.d(typeof a!=="string")
t=this.cI(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.ao(a,"Can't serialize indexable: ")},
cI:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.I(a[s])
return t},
cJ:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.I(a[t]))
return a},
cL:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.ao(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.I(a[t[r]])
return["js-object",t,s]},
cN:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cM:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b4.prototype={
W:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jl("Bad serialized message: "+H.f(a)))
switch(C.a.gev(a)){case"ref":H.d(J.z(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.z(a[0],"buffer"))
t=a[1]
C.a.l(this.b,t)
return t
case"typed":H.d(J.z(a[0],"typed"))
t=a[1]
C.a.l(this.b,t)
return t
case"fixed":H.d(J.z(a[0],"fixed"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.af(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.z(a[0],"extendable"))
t=a[1]
C.a.l(this.b,t)
return H.D(this.af(t),[null])
case"mutable":H.d(J.z(a[0],"mutable"))
t=a[1]
C.a.l(this.b,t)
return this.af(t)
case"const":H.d(J.z(a[0],"const"))
t=a[1]
C.a.l(this.b,t)
s=H.D(this.af(t),[null])
s.fixed$length=Array
return s
case"map":return this.ep(a)
case"sendport":return this.eq(a)
case"raw sendport":H.d(J.z(a[0],"raw sendport"))
t=a[1]
C.a.l(this.b,t)
return t
case"js-object":return this.eo(a)
case"function":H.d(J.z(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.l(this.b,t)
return t
case"capability":H.d(J.z(a[0],"capability"))
return new H.aq(a[1])
case"dart":H.d(J.z(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.l(this.b,p)
this.af(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
af:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.W(a[t]))
return a},
ep:function(a){var t,s,r,q,p
H.d(J.z(a[0],"map"))
t=a[1]
s=a[2]
r=P.L()
C.a.l(this.b,r)
t=J.lU(t,this.gen()).eW(0)
for(q=J.a0(s),p=0;p<t.length;++p)r.i(0,t[p],this.W(q.h(s,p)))
return r},
eq:function(a){var t,s,r,q,p,o,n
H.d(J.z(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.ce(r)
if(o==null)return
n=new H.bo(o,s)}else n=new H.c1(t,r,s)
C.a.l(this.b,n)
return n},
eo:function(a){var t,s,r,q,p,o
H.d(J.z(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.l(this.b,r)
for(q=J.a0(t),p=J.a0(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.W(p.h(s,o))
return r}}
H.fD.prototype={}
H.hh.prototype={
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
H.dl.prototype={
j:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eS.prototype={
j:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.hk.prototype={
j:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.jd.prototype={
$1:function(a){if(!!J.t(a).$isbe)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dI.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iW.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iX.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iY.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iZ.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.j_.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.bc.prototype={
j:function(a){return"Closure '"+H.dm(this).trim()+"'"},
$isjp:1,
gf2:function(){return this},
$D:null}
H.h5.prototype={}
H.fS.prototype={
j:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bv.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bv))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gu:function(a){var t,s
t=this.c
if(t==null)s=H.aY(this.a)
else s=typeof t!=="object"?J.ap(t):H.aY(t)
return(s^H.aY(this.b))>>>0},
j:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fz(t)}}
H.hj.prototype={
j:function(a){return this.a}}
H.dY.prototype={
j:function(a){return this.a}}
H.fJ.prototype={
j:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hy.prototype={
j:function(a){return C.f.a_("Assertion failed: ",P.jo(this.a))}}
H.aE.prototype={
j:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gu:function(a){return J.ap(this.a)},
v:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aE){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ah.prototype={
gk:function(a){return this.a},
gak:function(a){return this.a===0},
gC:function(a){return new H.eV(this,[H.aI(this,0)])},
gcw:function(a){return H.jw(this.gC(this),new H.eR(this),H.aI(this,0),H.aI(this,1))},
F:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bC(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bC(s,b)}else return this.eC(b)},
eC:function(a){var t=this.d
if(t==null)return!1
return this.aj(this.at(t,this.ai(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ad(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ad(r,b)
return s==null?null:s.b}else return this.eD(b)},
eD:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.at(t,this.ai(a))
r=this.aj(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aK()
this.b=t}this.br(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aK()
this.c=s}this.br(s,b,c)}else{r=this.d
if(r==null){r=this.aK()
this.d=r}q=this.ai(b)
p=this.at(r,q)
if(p==null)this.aN(r,q,[this.aL(b,c)])
else{o=this.aj(p,b)
if(o>=0)p[o].b=c
else p.push(this.aL(b,c))}}},
am:function(a,b){if(typeof b==="string")return this.bJ(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bJ(this.c,b)
else return this.eE(b)},
eE:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.at(t,this.ai(a))
r=this.aj(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bN(q)
return q.b},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
ah:function(a,b){var t,s
t=this.e
s=this.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==this.r)throw H.e(new P.a3(this))
t=t.c}},
br:function(a,b,c){var t=this.ad(a,b)
if(t==null)this.aN(a,b,this.aL(b,c))
else t.b=c},
bJ:function(a,b){var t
if(a==null)return
t=this.ad(a,b)
if(t==null)return
this.bN(t)
this.bD(a,b)
return t.b},
aL:function(a,b){var t,s
t=new H.eU(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bN:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ai:function(a){return J.ap(a)&0x3ffffff},
aj:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
j:function(a){return P.mE(this)},
ad:function(a,b){return a[b]},
at:function(a,b){return a[b]},
aN:function(a,b,c){H.d(c!=null)
a[b]=c},
bD:function(a,b){delete a[b]},
bC:function(a,b){return this.ad(a,b)!=null},
aK:function(){var t=Object.create(null)
this.aN(t,"<non-identifier-key>",t)
this.bD(t,"<non-identifier-key>")
return t},
$isms:1}
H.eR.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eU.prototype={}
H.eV.prototype={
gk:function(a){return this.a.a},
gw:function(a){var t,s
t=this.a
s=new H.eW(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eW.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sbq(null)
return!1}else{this.sbq(t.a)
this.c=this.c.c
return!0}}},
sbq:function(a){this.d=a}}
H.iS.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iT.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.r]}}}
H.iU.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.r]}}}
H.eQ.prototype={
j:function(a){return"RegExp/"+this.a+"/"},
gbH:function(){var t=this.c
if(t!=null)return t
t=this.b
t=H.kt(this.a,t.multiline,!t.ignoreCase,!0)
this.c=t
return t},
dK:function(a,b){var t,s
t=this.gbH()
t.lastIndex=b
s=t.exec(a)
if(s==null)return
return H.n6(this,s)}}
H.ic.prototype={
h:function(a,b){var t=this.b
return(t&&C.a).h(t,b)},
dv:function(a,b){var t,s
t=this.b
s=t.input
H.d(typeof s==="string")
t=t.index
H.d(typeof t==="number"&&Math.floor(t)===t)}}
H.bJ.prototype={
gA:function(a){return C.M},
$isbJ:1}
H.bj.prototype={$isbj:1}
H.f8.prototype={
gA:function(a){return C.N}}
H.dd.prototype={
gk:function(a){return a.length},
$ism:1,
$asm:function(){},
$isp:1,
$asp:function(){}}
H.de.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
a[b]=c}}
H.df.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.dc.prototype={
gA:function(a){return C.O},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]},
$iseA:1}
H.f9.prototype={
gA:function(a){return C.P},
$isc:1,
$asc:function(){return[P.M]},
$isb:1,
$asb:function(){return[P.M]}}
H.fa.prototype={
gA:function(a){return C.Q},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.fb.prototype={
gA:function(a){return C.R},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$isko:1}
H.fc.prototype={
gA:function(a){return C.S},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.fd.prototype={
gA:function(a){return C.W},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskR:1}
H.fe.prototype={
gA:function(a){return C.X},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskS:1}
H.dg.prototype={
gA:function(a){return C.Y},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]}}
H.ff.prototype={
gA:function(a){return C.Z},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.E(H.I(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.n]},
$isb:1,
$asb:function(){return[P.n]},
$iskT:1}
H.bK.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.n]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.n]}}
H.bL.prototype={
$asm:function(){},
$isc:1,
$asc:function(){return[P.M]},
$asp:function(){},
$isb:1,
$asb:function(){return[P.M]}}
H.bM.prototype={
$asm:function(){},
$asc:function(){return[P.M]},
$asp:function(){},
$asb:function(){return[P.M]}}
H.bN.prototype={
$asm:function(){},
$asc:function(){return[P.n]},
$asp:function(){},
$asb:function(){return[P.n]}}
P.hA.prototype={
$1:function(a){var t,s
H.j0()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hz.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hB.prototype={
$0:function(){H.j0()
this.a.$0()},
$S:function(){return{func:1}}}
P.hC.prototype={
$0:function(){H.j0()
this.a.$0()},
$S:function(){return{func:1}}}
P.eF.prototype={
$2:function(a,b){var t,s
t=this.a
s=--t.b
if(t.a!=null){t.a=null
if(t.b===0||this.b)this.d.H(a,b)
else{t.c=a
t.d=b}}else if(s===0&&!this.b)this.d.H(t.c,t.d)},
$S:function(){return{func:1,args:[,,]}}}
P.eE.prototype={
$1:function(a){var t,s,r
t=this.a
s=--t.b
r=t.a
if(r!=null){r[this.e]=a
if(s===0)this.d.bB(r)}else if(t.b===0&&!this.b)this.d.H(t.c,t.d)},
$S:function(){return{func:1,args:[,]}}}
P.hG.prototype={
ed:function(a,b){if(a==null)a=new P.bk()
if(this.a.a!==0)throw H.e(new P.aj("Future already completed"))
$.y.toString
this.H(a,b)},
ec:function(a){return this.ed(a,null)}}
P.dD.prototype={
av:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aj("Future already completed"))
t.bu(b)},
H:function(a,b){this.a.bv(a,b)}}
P.iv.prototype={
av:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aj("Future already completed"))
t.aG(b)},
H:function(a,b){this.a.H(a,b)}}
P.dF.prototype={
eL:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b0(this.d,a.a)},
ey:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bs(s,{func:1,args:[P.o,P.bR]}))return t.eS(s,a.a,a.b)
else return t.b0(s,a.a)}}
P.O.prototype={
b2:function(a,b){var t,s,r
t=$.y
if(t!==C.d){t.toString
if(b!=null)b=P.nc(b,t)}s=new P.O(0,t,null,[null])
r=b==null?1:3
this.bs(new P.dF(null,s,r,a,b,[H.aI(this,0),null]))
return s},
b1:function(a){return this.b2(a,null)},
bx:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bs:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jK(this.c,"$isdF")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bs(a)
return}this.bx(t)}H.d(this.a>=4)
t=this.b
t.toString
P.bq(null,null,t,new P.hR(this,a))}},
bI:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bI(a)
return}this.bx(s)}H.d(this.a>=4)
t.a=this.ae(a)
s=this.b
s.toString
P.bq(null,null,s,new P.hZ(t,this))}},
aM:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ae(t)},
ae:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aG:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.c5(a,"$isbf",t,"$asbf"))if(H.c5(a,"$isO",t,null))P.hU(a,this)
else P.kW(a,this)
else{s=this.aM()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,s)}},
bB:function(a){var t
H.d(this.a<4)
H.d(!J.t(a).$isbf)
t=this.aM()
H.d(this.a<4)
this.a=4
this.c=a
P.bn(this,t)},
H:function(a,b){var t
H.d(this.a<4)
t=this.aM()
H.d(this.a<4)
this.a=8
this.c=new P.bb(a,b)
P.bn(this,t)},
dF:function(a){return this.H(a,null)},
bu:function(a){var t
H.d(this.a<4)
if(H.c5(a,"$isbf",this.$ti,"$asbf")){this.dC(a)
return}H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hT(this,a))},
dC:function(a){var t
if(H.c5(a,"$isO",this.$ti,null)){if(a.a===8){H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hY(this,a))}else P.hU(a,this)
return}P.kW(a,this)},
bv:function(a,b){var t
H.d(this.a<4)
H.d(this.a===0)
this.a=1
t=this.b
t.toString
P.bq(null,null,t,new P.hS(this,a,b))},
$isbf:1,
gaP:function(){return this.a},
gdV:function(){return this.c}}
P.hR.prototype={
$0:function(){P.bn(this.a,this.b)},
$S:function(){return{func:1}}}
P.hZ.prototype={
$0:function(){P.bn(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hV.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aG(a)},
$S:function(){return{func:1,args:[,]}}}
P.hW.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.H(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hX.prototype={
$0:function(){this.a.H(this.b,this.c)},
$S:function(){return{func:1}}}
P.hT.prototype={
$0:function(){this.a.bB(this.b)},
$S:function(){return{func:1}}}
P.hY.prototype={
$0:function(){P.hU(this.b,this.a)},
$S:function(){return{func:1}}}
P.hS.prototype={
$0:function(){this.a.H(this.b,this.c)},
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
t=q.b.b.cj(q.d)}catch(n){s=H.Q(n)
r=H.ay(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.bb(s,r)
p.a=!0
return}if(!!J.t(t).$isbf){if(t instanceof P.O&&t.gaP()>=4){if(t.gaP()===8){q=t
H.d(q.gaP()===8)
p=this.b
p.b=q.gdV()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.b1(new P.i2(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.i2.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.i0.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b0(r.d,this.c)}catch(q){t=H.Q(q)
s=H.ay(q)
r=this.a
r.b=new P.bb(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.i_.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.eL(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ey(t)
p.a=!1}}catch(o){s=H.Q(o)
r=H.ay(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.bb(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.dC.prototype={}
P.fX.prototype={
gk:function(a){var t,s
t={}
s=new P.O(0,$.y,null,[P.n])
t.a=0
this.eI(new P.fZ(t),!0,new P.h_(t,s),s.gdE())
return s}}
P.fZ.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.h_.prototype={
$0:function(){this.b.aG(this.a.a)},
$S:function(){return{func:1}}}
P.fY.prototype={}
P.bb.prototype={
j:function(a){return H.f(this.a)},
$isbe:1}
P.iC.prototype={}
P.iF.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.bk()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.j(0)
throw r},
$S:function(){return{func:1}}}
P.ig.prototype={
eT:function(a){var t,s,r
try{if(C.d===$.y){a.$0()
return}P.l0(null,null,this,a)}catch(r){t=H.Q(r)
s=H.ay(r)
P.iE(null,null,this,t,s)}},
eU:function(a,b){var t,s,r
try{if(C.d===$.y){a.$1(b)
return}P.l1(null,null,this,a,b)}catch(r){t=H.Q(r)
s=H.ay(r)
P.iE(null,null,this,t,s)}},
e7:function(a){return new P.ii(this,a)},
aR:function(a){return new P.ih(this,a)},
e8:function(a){return new P.ij(this,a)},
h:function(a,b){return},
cj:function(a){if($.y===C.d)return a.$0()
return P.l0(null,null,this,a)},
b0:function(a,b){if($.y===C.d)return a.$1(b)
return P.l1(null,null,this,a,b)},
eS:function(a,b,c){if($.y===C.d)return a.$2(b,c)
return P.nd(null,null,this,a,b,c)}}
P.ii.prototype={
$0:function(){return this.a.cj(this.b)},
$S:function(){return{func:1}}}
P.ih.prototype={
$0:function(){return this.a.eT(this.b)},
$S:function(){return{func:1}}}
P.ij.prototype={
$1:function(a){return this.a.eU(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dG.prototype={
ai:function(a){return H.nG(a)&0x3ffffff},
aj:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.i7.prototype={
gw:function(a){var t=new P.bZ(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
B:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dG(b)},
dG:function(a){var t=this.d
if(t==null)return!1
return this.as(t[this.ar(a)],a)>=0},
ce:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.B(0,a)?a:null
else return this.dP(a)},
dP:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.ar(a)]
r=this.as(s,a)
if(r<0)return
return J.aK(s,r).gdI()},
l:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.by(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.by(r,b)}else return this.T(0,b)},
T:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.n4()
this.d=t}s=this.ar(b)
r=t[s]
if(r==null){q=[this.aF(b)]
H.d(q!=null)
t[s]=q}else{if(this.as(r,b)>=0)return!1
r.push(this.aF(b))}return!0},
am:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bz(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bz(this.c,b)
else return this.dQ(0,b)},
dQ:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.ar(b)]
r=this.as(s,b)
if(r<0)return!1
this.bA(s.splice(r,1)[0])
return!0},
V:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
by:function(a,b){var t
if(a[b]!=null)return!1
t=this.aF(b)
H.d(!0)
a[b]=t
return!0},
bz:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bA(t)
delete a[b]
return!0},
aF:function(a){var t,s
t=new P.i8(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bA:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
ar:function(a){return J.ap(a)&0x3ffffff},
as:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.z(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.i8.prototype={
gdI:function(){return this.a}}
P.bZ.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sab(null)
return!1}else{this.sab(t.a)
this.c=this.c.b
return!0}}},
sab:function(a){this.d=a}}
P.i5.prototype={}
P.d8.prototype={}
P.x.prototype={
gw:function(a){return new H.d9(a,this.gk(a),0,null,[H.am(a,"x",0)])},
t:function(a,b){return this.h(a,b)},
cf:function(a,b){return new H.bH(a,b,[H.am(a,"x",0),null])},
ew:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a3(a))}return s},
j:function(a){return P.eM(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.f0.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eX.prototype={
gw:function(a){return new P.i9(this,this.c,this.d,this.b,null,this.$ti)},
gak:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ap(0,b)||b>=t)H.E(P.C(b,this,"index",null,t))
return this.a[(C.b.a_(this.b,b)&this.a.length-1)>>>0]},
V:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
j:function(a){return P.eM(this,"{","}")},
ci:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eN());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
T:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bF();++this.d},
bF:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.D(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.bb(s,0,q,t,r)
C.a.bb(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbL(s)},
de:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbL(H.D(t,[b]))},
sbL:function(a){this.a=a},
$asc:null}
P.i9.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.E(new P.a3(t))
s=this.d
if(s===this.b){this.sab(null)
return!1}this.sab(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sab:function(a){this.e=a}}
P.fM.prototype={
L:function(a,b){var t
for(t=J.aL(b);t.p();)this.l(0,t.gq())},
j:function(a){return P.eM(this,"{","}")},
$isc:1,
$asc:null}
P.fL.prototype={}
P.bP.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ax.prototype={}
P.H.prototype={}
P.aP.prototype={
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a&&this.b===b.b},
P:function(a,b){return C.b.P(this.a,b.a)},
gu:function(a){var t=this.a
return(t^C.b.aO(t,30))&1073741823},
j:function(a){var t,s,r,q,p,o,n
t=P.mf(H.mM(this))
s=P.cf(H.mK(this))
r=P.cf(H.mG(this))
q=P.cf(H.mH(this))
p=P.cf(H.mJ(this))
o=P.cf(H.mL(this))
n=P.mg(H.mI(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
geM:function(){return this.a},
d6:function(a,b){var t
if(!(Math.abs(this.a)>864e13))t=!1
else t=!0
if(t)throw H.e(P.jl("DateTime is outside valid range: "+this.geM()))},
$isH:1,
$asH:function(){return[P.aP]}}
P.M.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.aA.prototype={
aq:function(a,b){return C.b.aq(this.a,b.gdH())},
ap:function(a,b){return C.b.ap(this.a,b.gdH())},
v:function(a,b){if(b==null)return!1
if(!(b instanceof P.aA))return!1
return this.a===b.a},
gu:function(a){return this.a&0x1FFFFFFF},
P:function(a,b){return C.b.P(this.a,b.a)},
j:function(a){var t,s,r,q,p
t=new P.e9()
s=this.a
if(s<0)return"-"+new P.aA(0-s).j(0)
r=t.$1(C.b.E(s,6e7)%60)
q=t.$1(C.b.E(s,1e6)%60)
p=new P.e8().$1(s%1e6)
return""+C.b.E(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isH:1,
$asH:function(){return[P.aA]}}
P.e8.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.e9.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.r,args:[P.n]}}}
P.be.prototype={}
P.cc.prototype={
j:function(a){return"Assertion failed"}}
P.bk.prototype={
j:function(a){return"Throw of null."}}
P.af.prototype={
gaI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaH:function(){return""},
j:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaI()+s+r
if(!this.a)return q
p=this.gaH()
o=P.jo(this.b)
return q+p+": "+H.f(o)}}
P.dp.prototype={
gaI:function(){return"RangeError"},
gaH:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.eJ.prototype={
gaI:function(){return"RangeError"},
gaH:function(){H.d(this.a)
if(J.lr(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.u.prototype={
j:function(a){return"Unsupported operation: "+this.a}}
P.bV.prototype={
j:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aj.prototype={
j:function(a){return"Bad state: "+this.a}}
P.a3.prototype={
j:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.jo(t))+"."}}
P.du.prototype={
j:function(a){return"Stack Overflow"},
$isbe:1}
P.e1.prototype={
j:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hQ.prototype={
j:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.bD.prototype={
j:function(a){var t,s,r
t=this.a
s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException"
r=this.b
if(typeof r!=="string")return s
if(r.length>78)r=C.f.aC(r,0,75)+"..."
return s+"\n"+r}}
P.eb.prototype={
j:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.E(P.k4(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.jx(b,"expando$values")
return s==null?null:H.jx(s,t)},
i:function(a,b,c){var t,s
t=this.b
if(typeof t!=="string")t.set(b,c)
else{s=H.jx(b,"expando$values")
if(s==null){s=new P.o()
H.kB(b,"expando$values",s)}H.kB(s,t,c)}}}
P.n.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.W.prototype={
aA:function(a,b){return new H.dB(this,b,[H.am(this,"W",0)])},
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gw(this)
for(s=0;t.p();)++s
return s},
ga0:function(a){var t,s
t=this.gw(this)
if(!t.p())throw H.e(H.eN())
s=t.gq()
if(t.p())throw H.e(H.mA())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.m8("index"))
if(b<0)H.E(P.b_(b,0,null,"index",null))
for(t=this.gw(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
j:function(a){return P.my(this,"(",")")}}
P.d5.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aD.prototype={}
P.aX.prototype={
gu:function(a){return P.o.prototype.gu.call(this,this)},
j:function(a){return"null"}}
P.U.prototype={$isH:1,
$asH:function(){return[P.U]}}
P.o.prototype={constructor:P.o,$iso:1,
v:function(a,b){return this===b},
gu:function(a){return H.aY(this)},
j:function(a){return H.fz(this)},
gA:function(a){return new H.aE(H.iQ(this),null)},
toString:function(){return this.j(this)}}
P.bR.prototype={}
P.r.prototype={$isH:1,
$asH:function(){return[P.r]}}
P.bS.prototype={
gk:function(a){return this.a.length},
j:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga2:function(){return this.a}}
W.k.prototype={}
W.dR.prototype={
j:function(a){return String(a)},
$isa:1}
W.dS.prototype={
j:function(a){return String(a)},
$isa:1}
W.a2.prototype={$iso:1}
W.dV.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isp:1,
$asp:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cd.prototype={}
W.aN.prototype={$isa:1,$isaN:1}
W.ce.prototype={
cE:function(a,b,c){var t=this.dL(a,b,P.nn(c,null))
return t},
dL:function(a,b,c){return a.getContext(b,c)}}
W.dX.prototype={
aB:function(a){return P.iK(a.getContextAttributes())}}
W.aO.prototype={$isa:1,
gk:function(a){return a.length}}
W.e_.prototype={$isa:1}
W.A.prototype={$iso:1}
W.bd.prototype={
bw:function(a,b){var t,s
t=$.$get$ke()
s=t[b]
if(typeof s==="string")return s
s=this.dZ(a,b)
t[b]=s
return s},
dZ:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.mh()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.e0.prototype={}
W.e2.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.e3.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.cg.prototype={}
W.aQ.prototype={
e2:function(a,b){return a.adoptNode(b)},
cF:function(a,b){return a.getElementById(b)},
b_:function(a,b){return a.querySelector(b)},
$isaQ:1}
W.ch.prototype={$isa:1}
W.e4.prototype={
j:function(a){return String(a)}}
W.ci.prototype={
ej:function(a,b){return a.createHTMLDocument(b)}}
W.e5.prototype={
gaz:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.cj.prototype={
gaz:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.ck.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gZ(a))+" x "+H.f(this.gY(a))},
v:function(a,b){var t
if(b==null)return!1
t=J.t(b)
if(!t.$isJ)return!1
return a.left===t.gaV(b)&&a.top===t.gb3(b)&&this.gZ(a)===t.gZ(b)&&this.gY(a)===t.gY(b)},
gu:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.gZ(a)
q=this.gY(a)
return W.kZ(W.b7(W.b7(W.b7(W.b7(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
gY:function(a){return a.height},
gaV:function(a){return a.left},
gb3:function(a){return a.top},
gZ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isJ:1,
$asJ:function(){}}
W.e6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.r]},
$isc:1,
$asc:function(){return[P.r]},
$isp:1,
$asp:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.e7.prototype={
gk:function(a){return a.length}}
W.a4.prototype={
ge5:function(a){return new W.hK(a)},
j:function(a){return a.localName},
M:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.km
if(t==null){t=H.D([],[W.dj])
s=new W.dk(t)
C.a.l(t,W.kX(null))
C.a.l(t,W.l_())
$.km=s
d=s}else d=t
t=$.kl
if(t==null){t=new W.dJ(d)
$.kl=t
c=t}else{t.a=d
c=t}}if($.aB==null){t=document
s=t.implementation
s=(s&&C.A).ej(s,"")
$.aB=s
$.jn=s.createRange()
s=$.aB
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aB.head;(t&&C.B).O(t,r)}t=$.aB
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jK(s,"$isaN")}t=$.aB
if(!!this.$isaN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aB.body;(t&&C.i).O(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.B(C.L,a.tagName)){t=$.jn;(t&&C.x).cG(t,q)
t=$.jn
p=(t&&C.x).eh(t,b)}else{q.innerHTML=b
p=$.aB.createDocumentFragment()
for(t=J.l(p);s=q.firstChild,s!=null;)t.O(p,s)}t=$.aB.body
if(q==null?t!=null:q!==t)J.lV(q)
c.ba(p)
C.h.e2(document,p)
return p},
ei:function(a,b,c){return this.M(a,b,c,null)},
cR:function(a,b,c,d){a.textContent=null
this.O(a,this.M(a,b,c,d))},
cQ:function(a,b){return this.cR(a,b,null,null)},
a5:function(a,b){return a.getAttribute(b)},
dR:function(a,b){return a.removeAttribute(b)},
cO:function(a,b,c){return a.setAttribute(b,c)},
$isa:1,
$iso:1,
$isa4:1,
$ish:1,
$isq:1,
geV:function(a){return a.tagName}}
W.iG.prototype={
$1:function(a){return!!J.t(a).$isa4},
$S:function(){return{func:1,args:[,]}}}
W.j.prototype={$iso:1,$isj:1}
W.h.prototype={
dA:function(a,b,c,d){return a.addEventListener(b,H.b9(c,1),!1)},
$iso:1,
$ish:1}
W.a5.prototype={$iso:1}
W.ew.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isp:1,
$asp:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.ex.prototype={
gk:function(a){return a.length}}
W.eC.prototype={
gk:function(a){return a.length}}
W.a6.prototype={$iso:1}
W.co.prototype={}
W.eH.prototype={
gk:function(a){return a.length}}
W.bE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cp.prototype={}
W.cq.prototype={
f4:function(a,b,c,d,e,f){return a.open(b,c,d,f,e)},
eN:function(a,b,c){return a.open(b,c)},
D:function(a,b){return a.send(b)}}
W.bF.prototype={}
W.bg.prototype={$isa:1,$isa4:1,$isbg:1}
W.aU.prototype={$iso:1,$isj:1,$isaU:1}
W.eZ.prototype={
j:function(a){return String(a)}}
W.f4.prototype={
gk:function(a){return a.length}}
W.f5.prototype={
f3:function(a,b,c){return a.send(b,c)},
D:function(a,b){return a.send(b)}}
W.bI.prototype={}
W.a7.prototype={$iso:1}
W.f6.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isp:1,
$asp:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.N.prototype={$iso:1,$isj:1,$isN:1}
W.fg.prototype={$isa:1}
W.T.prototype={
ga0:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aj("No elements"))
if(s>1)throw H.e(new P.aj("More than one element"))
return t.firstChild},
L:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.l(s),p=0;p<r;++p)q.O(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.lt(t,c,C.v.h(t.childNodes,b))},
gw:function(a){var t=this.a.childNodes
return new W.cn(t,t.length,-1,null,[H.am(t,"B",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.v.h(this.a.childNodes,b)},
$asc:function(){return[W.q]},
$asd8:function(){return[W.q]},
$asb:function(){return[W.q]},
$asbP:function(){return[W.q]}}
W.q.prototype={
eP:function(a){var t=a.parentNode
if(t!=null)J.bu(t,a)},
j:function(a){var t=a.nodeValue
return t==null?this.cW(a):t},
O:function(a,b){return a.appendChild(b)},
dS:function(a,b){return a.removeChild(b)},
dT:function(a,b,c){return a.replaceChild(b,c)},
$iso:1,
$ish:1,
$isq:1,
gaY:function(a){return a.previousSibling}}
W.di.prototype={
aZ:function(a){return a.previousNode()}}
W.bO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.fp.prototype={$isa:1}
W.fs.prototype={
gk:function(a){return a.length}}
W.a8.prototype={$iso:1,
gk:function(a){return a.length}}
W.fu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isp:1,
$asp:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.fx.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fy.prototype={
D:function(a,b){return a.send(b)}}
W.dn.prototype={
eh:function(a,b){return a.createContextualFragment(b)},
cG:function(a,b){return a.selectNodeContents(b)}}
W.fI.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.dq.prototype={
D:function(a,b){return a.send(b)}}
W.fK.prototype={
gk:function(a){return a.length}}
W.fN.prototype={$isa:1}
W.a9.prototype={$iso:1,$ish:1}
W.fO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isp:1,
$asp:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$iso:1}
W.fQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isp:1,
$asp:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ab.prototype={$iso:1,
gk:function(a){return a.length}}
W.fV.prototype={
h:function(a,b){return this.bE(a,b)},
i:function(a,b,c){this.dY(a,b,c)},
ah:function(a,b){var t,s
for(t=0;!0;++t){s=this.dO(a,t)
if(s==null)return
b.$2(s,this.bE(a,s))}},
gC:function(a){var t=H.D([],[P.r])
this.ah(a,new W.fW(t))
return t},
gk:function(a){return a.length},
bE:function(a,b){return a.getItem(b)},
dO:function(a,b){return a.key(b)},
dY:function(a,b,c){return a.setItem(b,c)}}
W.fW.prototype={
$2:function(a,b){return C.a.l(this.a,a)},
$S:function(){return{func:1,args:[,,]}}}
W.X.prototype={$iso:1}
W.ak.prototype={}
W.dv.prototype={
M:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=W.mj("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.T(s).L(0,new W.T(t))
return s}}
W.h3.prototype={
M:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.M(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.ga0(t)
r.toString
t=new W.T(r)
q=t.ga0(t)
s.toString
q.toString
new W.T(s).L(0,new W.T(q))
return s}}
W.h4.prototype={
M:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aD(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.y.M(t.createElement("table"),b,c,d)
t.toString
t=new W.T(t)
r=t.ga0(t)
s.toString
r.toString
new W.T(s).L(0,new W.T(r))
return s}}
W.bT.prototype={$isbT:1}
W.ac.prototype={$iso:1,$ish:1}
W.Y.prototype={$iso:1,$ish:1}
W.h7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.Y]},
$isc:1,
$asc:function(){return[W.Y]},
$isp:1,
$asp:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.h8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isp:1,
$asp:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.h9.prototype={
gk:function(a){return a.length}}
W.ad.prototype={$iso:1}
W.b0.prototype={$iso:1,$isj:1,$isb0:1}
W.hd.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$isp:1,
$asp:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.he.prototype={
gk:function(a){return a.length}}
W.bm.prototype={}
W.hg.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
W.dz.prototype={
aZ:function(a){return a.previousNode()}}
W.aF.prototype={}
W.hl.prototype={
j:function(a){return String(a)},
$isa:1}
W.hn.prototype={
gk:function(a){return a.length}}
W.hq.prototype={
gk:function(a){return a.length}}
W.hr.prototype={
D:function(a,b){return a.send(b)}}
W.b2.prototype={
gel:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.u("deltaY is not supported"))},
$iso:1,
$isj:1,
$isN:1,
$isb2:1}
W.bW.prototype={
ge4:function(a){var t,s
t=P.U
s=new P.O(0,$.y,null,[t])
this.dJ(a)
this.dU(a,W.l3(new W.ht(new P.iv(s,[t]))))
return s},
dU:function(a,b){return a.requestAnimationFrame(H.b9(b,1))},
dJ:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.ht.prototype={
$1:function(a){this.a.av(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hu.prototype={$isa:1}
W.b3.prototype={$isa:1}
W.hF.prototype={
j:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
v:function(a,b){var t,s,r
if(b==null)return!1
t=J.t(b)
if(!t.$isJ)return!1
s=a.left
r=t.gaV(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb3(b)
if(s==null?r==null:s===r){s=a.width
r=t.gZ(b)
if(s==null?r==null:s===r){s=a.height
t=t.gY(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gu:function(a){var t,s,r,q
t=J.ap(a.left)
s=J.ap(a.top)
r=J.ap(a.width)
q=J.ap(a.height)
return W.kZ(W.b7(W.b7(W.b7(W.b7(0,t),s),r),q))},
$isJ:1,
$asJ:function(){},
gY:function(a){return a.height},
gaV:function(a){return a.left},
gb3:function(a){return a.top},
gZ:function(a){return a.width}}
W.dE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[P.J]},
$isc:1,
$asc:function(){return[P.J]},
$isp:1,
$asp:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.hH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.A]},
$isc:1,
$asc:function(){return[W.A]},
$isp:1,
$asp:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.hI.prototype={$isa:1}
W.hJ.prototype={
gY:function(a){return a.height},
gZ:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.i3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isp:1,
$asp:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.i4.prototype={$isa:1}
W.dH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.q]},
$isc:1,
$asc:function(){return[W.q]},
$isp:1,
$asp:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.ip.prototype={$isa:1}
W.is.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isp:1,
$asp:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.it.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$ism:1,
$asm:function(){return[W.X]},
$isc:1,
$asc:function(){return[W.X]},
$isp:1,
$asp:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.iA.prototype={$isa:1}
W.iB.prototype={$isa:1}
W.hD.prototype={
ah:function(a,b){var t,s,r,q,p,o
for(t=this.gC(this),s=t.length,r=this.a,q=J.l(r),p=0;p<t.length;t.length===s||(0,H.F)(t),++p){o=t[p]
b.$2(o,q.a5(r,o))}},
gC:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.D([],[P.r])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.l(s,p.name)}return s},
gdM:function(){return this.a}}
W.hK.prototype={
h:function(a,b){return J.jj(this.a,b)},
i:function(a,b,c){J.lX(this.a,b,c)},
gk:function(a){return this.gC(this).length}}
W.hN.prototype={
eI:function(a,b,c,d){return W.ae(this.a,this.b,a,!1,H.aI(this,0))}}
W.jC.prototype={}
W.hO.prototype={
e0:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.ls(r,this.c,t,!1)}},
ds:function(a,b,c,d,e){this.e0()}}
W.hP.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bY.prototype={
a3:function(a){return $.$get$kY().B(0,W.bw(a))},
U:function(a,b,c){var t,s,r
t=W.bw(a)
s=$.$get$jD()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dt:function(a){var t,s
t=$.$get$jD()
if(t.gak(t)){for(s=0;s<262;++s)t.i(0,C.K[s],W.nv())
for(s=0;s<12;++s)t.i(0,C.l[s],W.nw())}}}
W.B.prototype={
gw:function(a){return new W.cn(a,this.gk(a),-1,null,[H.am(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.dk.prototype={
a3:function(a){return C.a.bQ(this.a,new W.fi(a))},
U:function(a,b,c){return C.a.bQ(this.a,new W.fh(a,b,c))}}
W.fi.prototype={
$1:function(a){return a.a3(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.fh.prototype={
$1:function(a){return a.U(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.c0.prototype={
a3:function(a){return this.a.B(0,W.bw(a))},
U:function(a,b,c){var t,s
t=W.bw(a)
s=this.c
if(s.B(0,H.f(t)+"::"+b))return this.d.e3(c)
else if(s.B(0,"*::"+b))return this.d.e3(c)
else{s=this.b
if(s.B(0,H.f(t)+"::"+b))return!0
else if(s.B(0,"*::"+b))return!0
else if(s.B(0,H.f(t)+"::*"))return!0
else if(s.B(0,"*::*"))return!0}return!1},
dw:function(a,b,c,d){var t,s,r
this.a.L(0,c)
t=b.aA(0,new W.iq())
s=b.aA(0,new W.ir())
this.b.L(0,t)
r=this.c
r.L(0,C.u)
r.L(0,s)}}
W.iq.prototype={
$1:function(a){return!C.a.B(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.ir.prototype={
$1:function(a){return C.a.B(C.l,a)},
$S:function(){return{func:1,args:[,]}}}
W.iw.prototype={
U:function(a,b,c){if(this.cZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.jj(a,"template")==="")return this.e.B(0,b)
return!1}}
W.ix.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.iu.prototype={
a3:function(a){var t=J.t(a)
if(!!t.$isbQ)return!1
t=!!t.$isG
if(t&&W.bw(a)==="foreignObject")return!1
if(t)return!0
return!1},
U:function(a,b,c){if(b==="is"||C.f.be(b,"on"))return!1
return this.a3(a)}}
W.cn.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbG(J.aK(this.a,t))
this.c=t
return!0}this.sbG(null)
this.c=s
return!1},
gq:function(){return this.d},
sbG:function(a){this.d=a}}
W.dj.prototype={}
W.io.prototype={}
W.dJ.prototype={
ba:function(a){new W.iy(this).$2(a,null)},
au:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bu(t,a)}else J.bu(b,a)},
dX:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lL(a)
r=J.jj(s.gdM(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.Q(n)}p="element unprintable"
try{p=J.az(a)}catch(n){H.Q(n)}try{o=W.bw(a)
this.dW(a,b,t,p,o,s,r)}catch(n){if(H.Q(n) instanceof P.af)throw n
else{this.au(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dW:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.au(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a3(a)){this.au(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.az(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.U(a,"is",g)){this.au(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gC(f)
s=H.D(t.slice(0),[H.aI(t,0)])
for(r=f.gC(f).length-1,t=f.a,q=J.l(t);r>=0;--r){p=s[r]
if(!this.a.U(a,J.m_(p),q.a5(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a5(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a5(t,p)
q.dR(t,p)}}if(!!J.t(a).$isbT)this.ba(a.content)}}
W.iy.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dX(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bu(r,a)}else J.bu(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.lM(t)}catch(q){H.Q(q)
r=t
J.bu(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.q,W.q]}}}
W.bx.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.by.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bz.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.bA.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bB.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bC.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cr.prototype={}
W.cL.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cJ.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cK.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cv.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cA.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cC.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cM.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cN.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cZ.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cX.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.d1.prototype={$isc:1,
$asc:function(){return[P.J]},
$isb:1,
$asb:function(){return[P.J]}}
W.d2.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.d3.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.d4.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.X]},
$isb:1,
$asb:function(){return[W.X]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.q]},
$isb:1,
$asb:function(){return[W.q]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.Y]},
$isb:1,
$asb:function(){return[W.Y]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.d_.prototype={$isc:1,
$asc:function(){return[W.A]},
$isb:1,
$asb:function(){return[W.A]}}
W.d0.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
P.hv.prototype={
cc:function(a){var t,s,r,q
t=this.a
s=t.length
for(r=0;r<s;++r){q=t[r]
if(q==null?a==null:q===a)return r}C.a.l(t,a)
C.a.l(this.b,null)
return s},
b4:function(a){var t,s,r,q,p,o,n,m,l
t={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date){s=a.getTime()
r=new P.aP(s,!0)
r.d6(s,!0)
return r}if(a instanceof RegExp)throw H.e(new P.bV("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.no(a)
q=Object.getPrototypeOf(a)
if(q===Object.prototype||q===null){p=this.cc(a)
r=this.b
o=r[p]
t.a=o
if(o!=null)return o
o=P.L()
t.a=o
r[p]=o
this.ex(a,new P.hx(t,this))
return t.a}if(a instanceof Array){p=this.cc(a)
r=this.b
o=r[p]
if(o!=null)return o
n=J.a0(a)
m=n.gk(a)
o=this.c?new Array(m):a
r[p]=o
for(r=J.ba(o),l=0;C.b.aq(l,m);++l)r.i(o,l,this.b4(n.h(a,l)))
return o}return a}}
P.hx.prototype={
$2:function(a,b){var t,s
t=this.a.a
s=this.b.b4(b)
J.jP(t,a,s)
return s},
$S:function(){return{func:1,args:[,,]}}}
P.iH.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.r,,]}}}
P.hw.prototype={
ex:function(a,b){var t,s,r,q
for(t=Object.keys(a),s=t.length,r=0;r<t.length;t.length===s||(0,H.F)(t),++r){q=t[r]
b.$2(q,a[q])}}}
P.iI.prototype={
$1:function(a){return this.a.av(0,a)},
$S:function(){return{func:1,args:[,]}}}
P.iJ.prototype={
$1:function(a){return this.a.ec(a)},
$S:function(){return{func:1,args:[,]}}}
P.ie.prototype={}
P.J.prototype={$asJ:null}
P.dQ.prototype={$isa:1}
P.aM.prototype={$isa:1}
P.ec.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ed.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
P.ep.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.eq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.er.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gJ:function(a){return a.z}}
P.es.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.et.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ag.prototype={}
P.aC.prototype={$isa:1}
P.eI.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$iso:1}
P.eT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.f1.prototype={$isa:1}
P.f2.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$iso:1}
P.fj.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.fq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fv.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fw.prototype={
gk:function(a){return a.length}}
P.fB.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fC.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bQ.prototype={$isa:1,$isbQ:1}
P.h0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.G.prototype={
M:function(a,b,c,d){var t,s,r,q,p,o
t=H.D([],[W.dj])
C.a.l(t,W.kX(null))
C.a.l(t,W.l_())
C.a.l(t,new W.iu())
c=new W.dJ(new W.dk(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.i).ei(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.T(q)
o=t.ga0(t)
for(t=J.l(p);r=o.firstChild,r!=null;)t.O(p,r)
return p},
$isa:1,
$isG:1}
P.h1.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.h2.prototype={$isa:1}
P.dw.prototype={}
P.h6.prototype={$isa:1}
P.bU.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$iso:1}
P.hf.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.X(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
X:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.hm.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ho.prototype={$isa:1}
P.hp.prototype={$isa:1}
P.bX.prototype={$isa:1}
P.ik.prototype={$isa:1}
P.il.prototype={$isa:1}
P.im.prototype={$isa:1}
P.cu.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cs.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.cz.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cD.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cO.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cW.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cU.prototype={$isc:1,
$asc:function(){return[P.r]},
$isb:1,
$asb:function(){return[P.r]}}
P.dU.prototype={
gk:function(a){return a.length}}
P.fG.prototype={
bO:function(a,b){return a.activeTexture(b)},
bR:function(a,b,c){return a.attachShader(b,c)},
bS:function(a,b,c){return a.bindBuffer(b,c)},
bT:function(a,b,c){return a.bindFramebuffer(b,c)},
bU:function(a,b,c){return a.bindTexture(b,c)},
bV:function(a,b){return a.blendEquation(b)},
bW:function(a,b,c){return a.blendFunc(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b){return a.clear(b)},
bZ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createProgram()},
c3:function(a,b){return a.createShader(b)},
c5:function(a,b){return a.depthMask(b)},
c6:function(a,b){return a.disable(b)},
c7:function(a,b,c,d){return a.drawArrays(b,c,d)},
c8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c9:function(a,b){return a.enable(b)},
ca:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.iK(a.getContextAttributes())},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cl:function(a,b,c){return a.uniform1f(b,c)},
cm:function(a,b,c){return a.uniform1fv(b,c)},
cn:function(a,b,c){return a.uniform1i(b,c)},
co:function(a,b,c){return a.uniform1iv(b,c)},
cp:function(a,b,c){return a.uniform2fv(b,c)},
cq:function(a,b,c){return a.uniform3fv(b,c)},
cr:function(a,b,c){return a.uniform4fv(b,c)},
cs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ct:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cv:function(a,b){return a.useProgram(b)},
cz:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cA:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fH.prototype={
e6:function(a,b){return a.beginTransformFeedback(b)},
e9:function(a,b){return a.bindVertexArray(b)},
ek:function(a){return a.createVertexArray()},
er:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
es:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
eu:function(a){return a.endTransformFeedback()},
f_:function(a,b,c,d){this.e_(a,b,c,d)
return},
e_:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
f1:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bO:function(a,b){return a.activeTexture(b)},
bR:function(a,b,c){return a.attachShader(b,c)},
bS:function(a,b,c){return a.bindBuffer(b,c)},
bT:function(a,b,c){return a.bindFramebuffer(b,c)},
bU:function(a,b,c){return a.bindTexture(b,c)},
bV:function(a,b){return a.blendEquation(b)},
bW:function(a,b,c){return a.blendFunc(b,c)},
bX:function(a,b,c,d){return a.bufferData(b,c,d)},
bY:function(a,b){return a.clear(b)},
bZ:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
c0:function(a,b){return a.compileShader(b)},
c1:function(a){return a.createBuffer()},
c2:function(a){return a.createProgram()},
c3:function(a,b){return a.createShader(b)},
c5:function(a,b){return a.depthMask(b)},
c6:function(a,b){return a.disable(b)},
c7:function(a,b,c,d){return a.drawArrays(b,c,d)},
c8:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c9:function(a,b){return a.enable(b)},
ca:function(a,b){return a.enableVertexAttribArray(b)},
aB:function(a){return P.iK(a.getContextAttributes())},
b5:function(a,b){return a.getProgramInfoLog(b)},
b6:function(a,b,c){return a.getProgramParameter(b,c)},
b7:function(a,b){return a.getShaderInfoLog(b)},
b8:function(a,b,c){return a.getShaderParameter(b,c)},
b9:function(a,b,c){return a.getUniformLocation(b,c)},
cd:function(a,b){return a.linkProgram(b)},
bc:function(a,b,c){return a.shaderSource(b,c)},
bf:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cl:function(a,b,c){return a.uniform1f(b,c)},
cm:function(a,b,c){return a.uniform1fv(b,c)},
cn:function(a,b,c){return a.uniform1i(b,c)},
co:function(a,b,c){return a.uniform1iv(b,c)},
cp:function(a,b,c){return a.uniform2fv(b,c)},
cq:function(a,b,c){return a.uniform3fv(b,c)},
cr:function(a,b,c){return a.uniform4fv(b,c)},
cs:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
ct:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cv:function(a,b){return a.useProgram(b)},
cz:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cA:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.iz.prototype={$isa:1}
P.fR.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.iK(this.dN(a,b))},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dN:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aD]},
$isb:1,
$asb:function(){return[P.aD]}}
P.ct.prototype={$isc:1,
$asc:function(){return[P.aD]},
$isb:1,
$asb:function(){return[P.aD]}}
P.cY.prototype={$isc:1,
$asc:function(){return[P.aD]},
$isb:1,
$asb:function(){return[P.aD]}}
B.j6.prototype={
$1:function(a){$.$get$iL().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aU]}}}
B.j7.prototype={
$1:function(a){$.$get$iL().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aU]}}}
B.j8.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.nl=t
$.nm=C.b.a8(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jN=s-C.b.E(window.innerWidth,2)
$.lj=-(t-C.b.E(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.N]}}}
B.j9.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c7=t-C.b.E(window.innerWidth,2)
$.c8=-(s-C.b.E(window.innerHeight,2))
if(a.button===2)$.$get$c6().i(0,"right",!0)
else $.$get$c6().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.N]}}}
B.ja.prototype={
$1:function(a){if(a.button===2)$.$get$c6().i(0,"right",null)
else $.$get$c6().i(0,"left",null)},
$S:function(){return{func:1,args:[W.N]}}}
B.fk.prototype={
dg:function(a,b,c,d){var t
d.toString
W.ae(d,W.nu().$1(d),new B.fl(this),!1,W.b2)
W.ae(d,"mousemove",new B.fm(this),!1,W.N)
t=W.b0
W.ae(d,"touchstart",new B.fn(),!1,t)
W.ae(d,"touchmove",new B.fo(this),!1,t)
B.nK(null)}}
B.fl.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.a3.gel(a)*r.k3
if(C.c.a8(r.fy,t)>0)r.fy=H.a_(C.c.a8(r.fy,t))}catch(q){s=H.Q(q)
P.V(s)}},
$S:function(){return{func:1,args:[W.b2]}}}
B.fm.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a_(t.go+C.b.a8($.jN,$.c7)*0.01)
s=t.id
r=$.c8
q=$.lj
t.id=H.a_(s+(r-q)*0.01)
$.c7=$.jN
$.c8=q}},
$S:function(){return{func:1,args:[W.N]}}}
B.fn.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a4(t.clientX)
C.c.a4(t.clientY)
$.c7=s
C.c.a4(t.clientX)
$.c8=C.c.a4(t.clientY)},
$S:function(){return{func:1,args:[W.b0]}}}
B.fo.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a4(t.clientX)
t=C.c.a4(t.clientY)
r=this.a
r.go=H.a_(r.go+C.b.a8(s,$.c7)*0.01)
r.id=H.a_(r.id+($.c8-t)*0.01)
$.c7=s
$.c8=t},
$S:function(){return{func:1,args:[W.b0]}}}
G.f7.prototype={}
G.dA.prototype={
a1:function(a,b){var t=this.d
if(H.aH(!t.F(0,a)))H.b8("uniform "+a+" already set")
t.i(0,a,b)},
bm:function(){return this.d},
j:function(a){var t,s,r,q
t=H.D(["{"+new H.aE(H.iQ(this),null).j(0)+"}["+this.a+"]"],[P.r])
for(s=this.d,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq()
C.a.l(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.al(t,"\n")}}
G.dW.prototype={}
G.dZ.prototype={
cb:function(a,b,c){J.lI(this.a,b)
if(c>0)J.m6(this.a,b,c)}}
G.eD.prototype={}
G.eu.prototype={}
G.ev.prototype={}
G.eG.prototype={
bk:function(a){var t=this.e
H.d(!t.F(0,a))
H.d(C.f.be(a,"a"))
switch($.$get$Z().h(0,a).a){case"vec2":t.i(0,a,H.D([],[T.aw]))
break
case"vec3":t.i(0,a,H.D([],[T.v]))
break
case"vec4":t.i(0,a,H.D([],[T.aG]))
break
case"float":t.i(0,a,H.D([],[P.M]))
break
case"uvec4":t.i(0,a,H.D([],[[P.b,P.n]]))
break
default:if(H.aH(!1))H.b8("unknown type for "+a)}},
d3:function(a){var t,s,r,q,p,o
H.d(a.length===3)
t=this.d
s=t.length
C.a.l(this.b,new G.eu(s,s+1,s+2))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.F)(a),++q){p=a[q]
o=new T.v(new Float32Array(3))
o.K(p)
C.a.l(t,o)}},
d1:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.l(t,new T.aw(o))}},
d2:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new T.v(new Float32Array(3))
o.K(p)
r.l(t,o)}},
d4:function(a){var t,s,r,q,p,o
H.d(a.length===4)
t=this.d
s=t.length
C.a.l(this.c,new G.ev(s,s+1,s+2,s+3))
for(r=a.length,q=0;q<a.length;a.length===r||(0,H.F)(a),++q){p=a[q]
o=new T.v(new Float32Array(3))
o.K(p)
C.a.l(t,o)}},
da:function(){var t,s,r,q,p,o,n,m,l,k,j
t=this.b
s=this.c
r=new Array(t.length*6+s.length*8)
r.fixed$length=Array
q=H.D(r,[P.n])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.F)(t),++o){m=t[o]
l=m.a
q[p]=l
k=m.b
q[p+1]=k
q[p+2]=k
k=m.c
q[p+3]=k
q[p+4]=k
q[p+5]=l
p+=6}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.F)(s),++o){j=s[o]
n=j.a
q[p]=n
l=j.b
q[p+1]=l
q[p+2]=l
l=j.c
q[p+3]=l
q[p+4]=l
l=j.d
q[p+5]=l
q[p+6]=l
q[p+7]=n
p+=8}H.d(p===q.length)
return q},
j:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gC(s),r=r.gw(r);r.p();){q=r.gq()
p=$.$get$Z().h(0,q).a
C.a.l(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.al(t," ")}}
G.dy.prototype={}
G.dx.prototype={}
G.f3.prototype={
df:function(a){this.a1("cDepthTest",!0)
this.a1("cDepthWrite",!0)
this.a1("cBlendEquation",$.$get$k5())
this.a1("cStencilFunc",$.$get$kE())}}
G.db.prototype={
bi:function(a,b,c){var t,s
if(C.f.aa(a,0)===105){if(H.aH(C.b.aE(b.length,c)===this.z))H.b8("ChangeAttribute "+this.z)}else H.d(C.b.aE(b.length,c)===(this.ch.length/3|0))
J.jP(this.cy,a,b)
t=this.d
s=this.r.h(0,a)
J.dN(t.a,34962,s)
J.jU(t.a,34962,b,35048)},
dc:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
a9:function(a,b,c){var t,s,r,q,p,o
t=J.jQ(a,0)===105
if(t&&this.z===0)this.z=C.b.aE(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.dP(r.a))
this.bi(a,b,c)
q=$.$get$Z().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.aH(p.F(0,a)))H.b8("unexpected attribute "+a)
o=p.h(0,a)
J.dO(r.a,this.e)
r.cb(0,o,t?1:0)
s=s.h(0,a)
p=q.bl()
J.dN(r.a,34962,s)
J.k3(r.a,o,p,5126,!1,0,0)},
bh:function(a){var t,s,r,q,p
t=this.r
s=this.d
t.i(0,"aPosition",J.dP(s.a))
this.ch=a
this.bi("aPosition",a,3)
r=$.$get$Z().h(0,"aPosition")
if(r==null)throw H.e("Unknown canonical aPosition")
q=this.x
H.d(q.F(0,"aPosition"))
p=q.h(0,"aPosition")
J.dO(s.a,this.e)
s.cb(0,p,0)
t=t.h(0,"aPosition")
q=r.bl()
J.dN(s.a,34962,t)
J.k3(s.a,p,q,5126,!1,0,0)},
bj:function(a){var t,s,r,q
H.d(this.ch!=null)
t=this.ch.length
if(t<768){this.saJ(new Uint8Array(H.iD(a)))
this.Q=5121}else if(t<196608){this.saJ(new Uint16Array(H.iD(a)))
this.Q=5123}else{this.saJ(new Uint32Array(H.iD(a)))
this.Q=5125}t=this.d
J.dO(t.a,this.e)
s=this.y
r=this.cx
t.toString
q=J.t(r)
H.d(!!q.$iskR||!!q.$iskS||!!q.$iskT)
J.dN(t.a,34963,s)
J.jU(t.a,34963,r,35048)},
j:function(a){var t,s,r
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=J.aL(J.jW(this.cy));t.p();){r=t.gq()
C.a.l(s,H.f(r)+":"+H.f(J.cb(J.aK(this.cy,r))))}return"MESH["+this.a+"] "+C.a.al(s,"  ")},
saJ:function(a){this.cx=a}}
G.fr.prototype={
d5:function(a,b){var t=C.b.cC(a,b)
if(this.z===t)return
this.z=t
this.bo()},
bo:function(){var t,s,r,q,p,o,n
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
t.a6(0,0,1/(p*s))
t.a6(1,1,1/p)
t.a6(2,2,(q+r)/o)
t.a6(3,2,-1)
t.a6(2,3,2*r*q/o)},
bm:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.v(new Float32Array(H.w(3)))
o.a7(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.K(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.t(n)
r=!!s.$isaG
k=r?s.gaz(n):1
if(!!s.$isv){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gJ(n)
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
a3.K(this.db)
a3.cg(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fF.prototype={
dl:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gC(s),s=s.gw(s);s.p();){q=s.gq()
if(!t.F(0,q))C.a.l(r,q)}for(t=this.x,s=new P.bZ(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.B(0,q))C.a.l(r,q)}return r},
dq:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gC(b),s=s.gw(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.jQ(n,0)){case 117:if(q.F(0,n)){m=b.h(0,n)
if(p.F(0,n))H.bt("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$Z().h(0,n)
if(l==null)H.E("unknown "+n)
H.d(q.F(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.jk(r.a,k,m)
else if(!!J.t(m).$isko)J.m4(r.a,k,m)
break
case"float":if(l.c===0)J.m2(r.a,k,m)
else if(!!J.t(m).$iseA)J.m3(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.an(m,"$isR").a
J.k2(r.a,k,!1,j)}else if(!!J.t(m).$iseA)J.k2(r.a,k,!1,m)
else if(H.aH(!1))H.b8("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.an(m,"$isaW").a
J.k1(r.a,k,!1,j)}else if(!!J.t(m).$iseA)J.k1(r.a,k,!1,m)
else if(H.aH(!1))H.b8("bad unform: "+n)
break
case"vec4":if(l.c===0){j=H.an(m,"$isaG").a
J.k0(r.a,k,j)}else J.k0(r.a,k,m)
break
case"vec3":if(l.c===0){j=H.an(m,"$isv").a
J.k_(r.a,k,j)}else J.k_(r.a,k,m)
break
case"vec2":if(l.c===0){j=H.an(m,"$isaw").a
J.jZ(r.a,k,j)}else J.jZ(r.a,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a_(33984,this.ch)
J.jR(r.a,j)
j=H.an(m,"$ismS").dd()
J.jT(r.a,3553,j)
j=this.ch
J.jk(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a_(33984,this.ch)
J.jR(r.a,j)
j=H.an(m,"$ismS").dd()
J.jT(r.a,34067,j)
j=this.ch
J.jk(r.a,k,j)
this.ch=this.ch+1
break
default:H.bt("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":if(J.z(m,!0))J.ca(r.a,2929)
else J.jg(r.a,2929)
break
case"cStencilFunc":H.an(m,"$isdy")
j=m.a
if(j===1281)J.jg(r.a,2960)
else{J.ca(r.a,2960)
i=m.b
h=m.c
J.lZ(r.a,j,i,h)}break
case"cDepthWrite":J.lC(r.a,m)
break
case"cBlendEquation":H.an(m,"$isdx")
j=m.a
if(j===1281)J.jg(r.a,3042)
else{J.ca(r.a,3042)
i=m.b
h=m.c
J.lx(r.a,i,h)
J.lw(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aA(1000*(s-new P.aP(t,!1).a)).j(0)},
d9:function(a,b,c){var t,s,r,q,p,o,n,m,l
Date.now()
t=this.d
s=this.r
J.m5(t.a,s)
this.ch=0
this.z.V(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r){q=b[r]
this.dq(q.a,q.bm())}s=this.Q
s.V(0)
for(p=J.aL(J.jW(a.cy));p.p();)s.l(0,p.gq())
o=this.dl()
if(o.length!==0)P.V("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dO(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.dc()
m=a.Q
l=a.z
t.toString
if(n)J.lu(t.a,s)
if(m!==-1)if(l>1)J.lG(t.a,s,p,m,0,l)
else J.lF(t.a,s,p,m,0)
else if(l>1)J.lE(t.a,s,0,p,l)
else J.lD(t.a,s,0,p)
if(n)J.lJ(t.a)},
dh:function(a,b,c,d){var t,s,r,q,p,o,n,m,l,k,j
t=this.d
s=this.e
r=s.b
q=this.f
p=q.b
o=s.f
n=J.lB(t.a)
m=G.kV(t.a,35633,r)
J.jS(t.a,n,m)
l=G.kV(t.a,35632,p)
J.jS(t.a,n,l)
if(o.length>0)J.m0(t.a,n,o,35980)
J.lT(t.a,n)
if(!J.lS(t.a,n,35714))H.E(J.lR(t.a,n))
this.r=n
this.sdB(0,P.ju(s.c,null))
for(s=s.d,r=s.length,p=this.y,k=0;k<s.length;s.length===r||(0,H.F)(s),++k){j=s[k]
o=this.r
p.i(0,j,J.jY(t.a,o,j))}for(s=q.d,r=s.length,k=0;k<s.length;s.length===r||(0,H.F)(s),++k){j=s[k]
q=this.r
p.i(0,j,J.jY(t.a,q,j))}},
sdB:function(a,b){this.x=b}}
G.i.prototype={
bl:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.ds.prototype={
d0:function(a){var t,s,r,q
H.d(this.b==null)
for(t=this.c,s=this.x,r=0;r<1;++r){q=a[r]
H.d($.$get$Z().F(0,q))
H.d(!C.a.B(t,q))
C.a.l(t,q)
s.i(0,q,this.r);++this.r}C.a.bd(t)},
bg:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.d,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=a[r]
if(H.aH($.$get$Z().F(0,q)))H.b8("missing uniform "+q)
H.d(!C.a.B(s,q))
C.a.l(s,q)}C.a.bd(s)},
di:function(a,b){H.d(this.b==null)
this.b=this.dr(!0,a,b)},
bn:function(a){return this.di(a,null)},
dr:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=$.$get$Z().h(0,n)
C.a.l(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.l(q,"")
l=r?"in":"out"
if(r)C.a.l(q,"out vec4 oFragColor;")
for(t=this.e,o=0;!1;++o){k=t[o]
m=$.$get$Z().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$Z().h(0,k)
C.a.l(q,l+" "+m.a+" "+H.f(k)+";")}C.a.l(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$Z().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.l(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.l(q,"")
C.a.l(q,"void main(void) {")
C.a.L(q,b)
C.a.l(q,"}")
return C.a.al(q,"\n")}}
G.fP.prototype={
eJ:function(a0,a1){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
t=this.d.a
s=t[12]
r=t[13]
q=t[14]
a1=new T.v(new Float32Array(H.w(3)))
a1.a7(0,1,0)
p=this.e
o=p.a
o[0]=t[12]
o[1]=t[13]
o[2]=t[14]
o=new Float32Array(H.w(3))
n=new T.v(o)
n.K(p)
m=a0.a
o[0]=o[0]-m[0]
o[1]=o[1]-m[1]
o[2]=o[2]-m[2]
n.aX(0)
l=a1.c4(n)
l.aX(0)
k=n.c4(l)
k.aX(0)
j=l.aU(p)
i=k.aU(p)
p=n.aU(p)
h=l.a
g=h[0]
f=k.a
e=f[0]
d=o[0]
c=h[1]
b=f[1]
a=o[1]
h=h[2]
f=f[2]
o=o[2]
t[15]=1
t[14]=-p
t[13]=-i
t[12]=-j
t[11]=0
t[10]=o
t[9]=f
t[8]=h
t[7]=0
t[6]=a
t[5]=b
t[4]=c
t[3]=0
t[2]=d
t[1]=e
t[0]=g
t[12]=s
t[13]=r
t[14]=q},
aW:function(a){return this.eJ(a,null)}}
R.fT.prototype={
du:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.n_("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.n).bw(r,"float")
r.setProperty(p,"left","")
p=C.n.bw(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.j.O(t,s)}return t},
dj:function(a,b,c){var t,s,r
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
J.je(this.a,s)
r=this.du(b,c,90,30)
this.d=r
J.je(this.a,r)
t=t.createElement("div")
this.c=t
J.je(this.a,t)}}
R.fU.prototype={
dn:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.q.eZ(s,2)+" fps"
t=this.c;(t&&C.j).cQ(t,b)
r=C.b.E(30*C.q.ea(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.j).O(t,q)},
dm:function(a){return this.dn(a,"")}}
A.dh.prototype={
j:function(a){return"NODE["+this.a+"]"}}
A.dr.prototype={}
A.fE.prototype={
d8:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.lv(p.a,36160,t)
H.d(r>0&&q>0)
J.m7(p.a,this.x,this.y,r,q)
if(s!==0)J.ly(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
if(!n.c)continue
r=n.d
if(!r.c)continue
m=n.e
C.a.l(m,new G.dA(P.L(),"transforms",!1,!0))
l=new T.R(new Float32Array(16))
l.S()
for(q=n.f,p=q.length,k=0;k<q.length;q.length===p||(0,H.F)(q),++k)A.la(r,q[k],l,a,m)
m.pop()}},
d7:function(){return this.d8(null)}}
D.eY.prototype={
$1:function(a){this.a.av(0,W.n8(this.b.response))},
$S:function(){return{func:1,args:[,]}}}
A.iR.prototype={
$2:function(a,b){var t=536870911&a+J.ap(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.n,P.o]}}}
T.aW.prototype={
K:function(a){var t,s
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
h:function(a,b){return C.e.h(this.a,b)},
i:function(a,b,c){C.e.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aW){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gu:function(a){return A.dL(this.a)},
R:function(a){var t,s
t=new Float32Array(H.w(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.v(t)},
eg:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.K(a)
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
T.R.prototype={
a6:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
K:function(a){var t,s
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
h:function(a,b){return C.e.h(this.a,b)},
i:function(a,b,c){C.e.i(this.a,b,c)},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.R){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gu:function(a){return A.dL(this.a)},
R:function(a){var t,s
t=new Float32Array(H.w(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aG(t)},
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
T.aw.prototype={
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aw){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gu:function(a){return A.dL(this.a)},
h:function(a,b){return C.e.h(this.a,b)},
i:function(a,b,c){C.e.i(this.a,b,c)},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.v.prototype={
a7:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
K:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
j:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.v){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gu:function(a){return A.dL(this.a)},
h:function(a,b){return C.e.h(this.a,b)},
i:function(a,b,c){C.e.i(this.a,b,c)},
gk:function(a){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
aX:function(a){var t,s,r,q,p
t=this.a
s=t[0]
r=t[1]
q=t[2]
q=Math.sqrt(s*s+r*r+q*q)
if(q===0)return 0
p=1/q
t[0]=t[0]*p
t[1]=t[1]*p
t[2]=t[2]*p
return q},
aU:function(a){var t,s
t=a.a
s=this.a
return s[0]*t[0]+s[1]*t[1]+s[2]*t[2]},
c4:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.v(new Float32Array(H.w(3)))
t.a7(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]}}
T.aG.prototype={
j:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
v:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aG){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gu:function(a){return A.dL(this.a)},
h:function(a,b){return C.e.h(this.a,b)},
i:function(a,b,c){C.e.i(this.a,b,c)},
gk:function(a){var t,s,r,q
t=this.a
s=t[0]
r=t[1]
q=t[2]
t=t[3]
return Math.sqrt(s*s+r*r+q*q+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gJ:function(a){return this.a[2]},
gaz:function(a){return this.a[3]}}
V.j3.prototype={
$1:function(a){var t,s,r
t=this.a
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.V("size change "+H.f(s)+" "+H.f(r))
this.b.d5(s,r)
t=this.c
t.z=s
t.Q=r},
$S:function(){return{func:1,v:true,args:[W.j]}}}
V.j1.prototype={
$1:function(a8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
t=this.a
t.c=a8+0
s=this.c
s.go=H.a_(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.a_(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.a_(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.a_(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.a_(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.a_(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.a_(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.a_(C.c.eb(s.id,-1.4707963267948965,1.4707963267948965))
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
s.aW(p)
p=s.f.a
p[0]=m[2]
p[1]=m[6]
p[2]=m[10]
s=-s.k1
r=p[0]
q=p[1]
n=p[2]
n=Math.sqrt(r*r+q*q+n*n)
l=p[0]/n
k=p[1]/n
j=p[2]/n
n=Math.cos(s)
s=Math.sin(s)
i=1-n
h=l*l*i+n
p=j*s
g=l*k*i-p
q=k*s
f=l*j*i+q
e=k*l*i+p
d=k*k*i+n
s=l*s
c=k*j*i-s
b=j*l*i-q
a=j*k*i+s
a0=j*j*i+n
n=m[0]
s=m[4]
q=m[8]
p=m[1]
r=m[5]
a1=m[9]
a2=m[2]
a3=m[6]
a4=m[10]
a5=m[3]
a6=m[7]
a7=m[11]
m[0]=n*h+s*e+q*b
m[1]=p*h+r*e+a1*b
m[2]=a2*h+a3*e+a4*b
m[3]=a5*h+a6*e+a7*b
m[4]=n*g+s*d+q*a
m[5]=p*g+r*d+a1*a
m[6]=a2*g+a3*d+a4*a
m[7]=a5*g+a6*d+a7*a
m[8]=n*f+s*c+q*a0
m[9]=p*f+r*c+a1*a0
m[10]=a2*f+a3*c+a4*a0
m[11]=a5*f+a6*c+a7*a0
t.b.c=$.$get$ld().checked
t.a.c=$.$get$le().checked
this.d.d7()
C.a4.ge4(window).b1(this)
this.b.dm(a8)},
$S:function(){return{func:1,v:true,args:[P.U]}}}
V.j2.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i
t=Y.mr(J.aK(a,0))
P.V(t)
s=this.b
r=s.d
q=r.d
r=r.e.x
p=new G.db(q,J.jV(q.a),1,P.L(),r,null,0,-1,null,null,P.L(),"meshdata:../asset/dragon/dragon.obj",!1,!0)
o=t.d
p.bh(G.ez(o,null))
n=t.da()
p.y=J.dP(q.a)
p.bj(n)
G.n1(t,p)
P.V(p)
n=new Float32Array(H.w(9))
m=new T.R(new Float32Array(H.w(16)))
m.S()
l=new T.R(new Float32Array(H.w(16)))
l.S()
k=new A.dh(this.c,p,[],new T.aW(n),m,l,new T.v(new Float32Array(H.w(3))),new T.v(new Float32Array(H.w(3))),new T.v(new Float32Array(H.w(3))),new T.v(new Float32Array(H.w(3))),"meshdata:../asset/dragon/dragon.obj",!1,!0)
l=this.a
l.a=k
m=new T.v(new Float32Array(H.w(3)))
m.a7(100,0,0)
k.aW(m)
m=l.a
H.d(m!=null)
s=s.f
C.a.l(s,m)
j=G.n0(new G.db(q,J.jV(q.a),1,P.L(),r,null,0,-1,null,null,P.L(),"meshdata:norm",!1,!0),G.ez(o,null),G.ez(H.c9(t.e.h(0,"aNormal"),"$isb",[T.v],"$asb"),null),0.05)
o=new Float32Array(H.w(9))
r=new T.R(new Float32Array(H.w(16)))
r.S()
q=new T.R(new Float32Array(H.w(16)))
q.S()
i=new A.dh(this.d,j,[],new T.aW(o),r,q,new T.v(new Float32Array(H.w(3))),new T.v(new Float32Array(H.w(3))),new T.v(new Float32Array(H.w(3))),new T.v(new Float32Array(H.w(3))),j.a,!1,!0)
l.b=i
q=new T.v(new Float32Array(H.w(3)))
q.a7(100,0,0)
i.aW(q)
l=l.b
H.d(l!=null)
C.a.l(s,l)
this.e.$1(0)},
$S:function(){return{func:1,args:[P.b]}}}
J.a.prototype.cW=J.a.prototype.j
J.bG.prototype.cY=J.bG.prototype.j
P.W.prototype.cX=P.W.prototype.aA
W.a4.prototype.aD=W.a4.prototype.M
W.c0.prototype.cZ=W.c0.prototype.U;(function installTearOffs(){installTearOff(H.b5.prototype,"geH",0,0,0,null,["$0"],["ax"],0)
installTearOff(H.al.prototype,"gcH",0,0,0,null,["$1"],["I"],2)
installTearOff(H.b4.prototype,"gen",0,0,0,null,["$1"],["W"],2)
installTearOff(P,"nh",1,0,0,null,["$1"],["mX"],1)
installTearOff(P,"ni",1,0,0,null,["$1"],["mY"],1)
installTearOff(P,"nj",1,0,0,null,["$1"],["mZ"],1)
installTearOff(P,"l7",1,0,0,null,["$0"],["nf"],0)
installTearOff(P.O.prototype,"gdE",0,0,0,null,["$2","$1"],["H","dF"],5)
installTearOff(P,"np",1,0,0,null,["$2"],["me"],6)
installTearOff(W,"nu",1,0,0,null,["$1"],["mk"],7)
installTearOff(W,"nv",1,0,0,null,["$4"],["n2"],4)
installTearOff(W,"nw",1,0,0,null,["$4"],["n3"],4)
installTearOff(W.di.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(W.dz.prototype,"gaY",0,1,0,null,["$0"],["aZ"],3)
installTearOff(V,"lq",1,0,0,null,["$0"],["nE"],0)})();(function inheritance(){inherit(P.o,null)
var t=P.o
inherit(H.jr,t)
inherit(J.a,t)
inherit(J.dT,t)
inherit(P.W,t)
inherit(H.d9,t)
inherit(P.d5,t)
inherit(H.cm,t)
inherit(H.bc,t)
inherit(H.ib,t)
inherit(H.b5,t)
inherit(H.hL,t)
inherit(H.b6,t)
inherit(H.ia,t)
inherit(H.hE,t)
inherit(H.bl,t)
inherit(H.ha,t)
inherit(H.aq,t)
inherit(H.al,t)
inherit(H.b4,t)
inherit(H.fD,t)
inherit(H.hh,t)
inherit(P.be,t)
inherit(H.dI,t)
inherit(H.aE,t)
inherit(H.ah,t)
inherit(H.eU,t)
inherit(H.eW,t)
inherit(H.eQ,t)
inherit(H.ic,t)
inherit(P.hG,t)
inherit(P.dF,t)
inherit(P.O,t)
inherit(P.dC,t)
inherit(P.fX,t)
inherit(P.fY,t)
inherit(P.bb,t)
inherit(P.iC,t)
inherit(P.fM,t)
inherit(P.i8,t)
inherit(P.bZ,t)
inherit(P.bP,t)
inherit(P.x,t)
inherit(P.i9,t)
inherit(P.ax,t)
inherit(P.H,t)
inherit(P.aP,t)
inherit(P.U,t)
inherit(P.aA,t)
inherit(P.du,t)
inherit(P.hQ,t)
inherit(P.bD,t)
inherit(P.eb,t)
inherit(P.b,t)
inherit(P.aD,t)
inherit(P.aX,t)
inherit(P.bR,t)
inherit(P.r,t)
inherit(P.bS,t)
inherit(W.e0,t)
inherit(W.hD,t)
inherit(W.bY,t)
inherit(W.B,t)
inherit(W.dk,t)
inherit(W.c0,t)
inherit(W.iu,t)
inherit(W.cn,t)
inherit(W.dj,t)
inherit(W.io,t)
inherit(W.dJ,t)
inherit(P.hv,t)
inherit(P.ie,t)
inherit(G.f7,t)
inherit(G.dZ,t)
inherit(G.eD,t)
inherit(G.eu,t)
inherit(G.ev,t)
inherit(G.eG,t)
inherit(G.dy,t)
inherit(G.dx,t)
inherit(G.i,t)
inherit(G.ds,t)
inherit(R.fT,t)
inherit(T.aW,t)
inherit(T.R,t)
inherit(T.aw,t)
inherit(T.v,t)
inherit(T.aG,t)
t=J.a
inherit(J.eO,t)
inherit(J.eP,t)
inherit(J.bG,t)
inherit(J.aR,t)
inherit(J.bh,t)
inherit(J.aS,t)
inherit(H.bJ,t)
inherit(H.bj,t)
inherit(W.h,t)
inherit(W.a2,t)
inherit(W.cd,t)
inherit(W.dX,t)
inherit(W.A,t)
inherit(W.cr,t)
inherit(W.e2,t)
inherit(W.e3,t)
inherit(W.e4,t)
inherit(W.ci,t)
inherit(W.cj,t)
inherit(W.ck,t)
inherit(W.cC,t)
inherit(W.e7,t)
inherit(W.j,t)
inherit(W.cB,t)
inherit(W.a6,t)
inherit(W.eH,t)
inherit(W.cE,t)
inherit(W.eZ,t)
inherit(W.f4,t)
inherit(W.a7,t)
inherit(W.cA,t)
inherit(W.fg,t)
inherit(W.di,t)
inherit(W.cG,t)
inherit(W.fp,t)
inherit(W.bm,t)
inherit(W.a8,t)
inherit(W.cy,t)
inherit(W.ak,t)
inherit(W.dn,t)
inherit(W.aa,t)
inherit(W.cx,t)
inherit(W.ab,t)
inherit(W.fV,t)
inherit(W.X,t)
inherit(W.cw,t)
inherit(W.h9,t)
inherit(W.ad,t)
inherit(W.cH,t)
inherit(W.he,t)
inherit(W.dz,t)
inherit(W.hl,t)
inherit(W.hq,t)
inherit(W.hF,t)
inherit(W.cv,t)
inherit(W.cL,t)
inherit(W.cK,t)
inherit(W.cF,t)
inherit(W.cJ,t)
inherit(W.cI,t)
inherit(W.iA,t)
inherit(W.iB,t)
inherit(P.ar,t)
inherit(P.cu,t)
inherit(P.as,t)
inherit(P.cz,t)
inherit(P.fv,t)
inherit(P.fw,t)
inherit(P.fB,t)
inherit(P.cs,t)
inherit(P.at,t)
inherit(P.cD,t)
inherit(P.hp,t)
inherit(P.dU,t)
inherit(P.fG,t)
inherit(P.fH,t)
inherit(P.iz,t)
inherit(P.ct,t)
t=J.bG
inherit(J.ft,t)
inherit(J.b1,t)
inherit(J.aT,t)
inherit(J.jq,J.aR)
t=J.bh
inherit(J.d7,t)
inherit(J.d6,t)
t=P.W
inherit(H.c,t)
inherit(H.da,t)
inherit(H.dB,t)
t=H.c
inherit(H.bi,t)
inherit(H.eV,t)
inherit(H.ea,H.da)
t=P.d5
inherit(H.f_,t)
inherit(H.hs,t)
t=H.bi
inherit(H.bH,t)
inherit(P.eX,t)
t=H.bc
inherit(H.jb,t)
inherit(H.jc,t)
inherit(H.i6,t)
inherit(H.hM,t)
inherit(H.eK,t)
inherit(H.eL,t)
inherit(H.id,t)
inherit(H.hb,t)
inherit(H.hc,t)
inherit(H.jd,t)
inherit(H.iW,t)
inherit(H.iX,t)
inherit(H.iY,t)
inherit(H.iZ,t)
inherit(H.j_,t)
inherit(H.h5,t)
inherit(H.eR,t)
inherit(H.iS,t)
inherit(H.iT,t)
inherit(H.iU,t)
inherit(P.hA,t)
inherit(P.hz,t)
inherit(P.hB,t)
inherit(P.hC,t)
inherit(P.eF,t)
inherit(P.eE,t)
inherit(P.hR,t)
inherit(P.hZ,t)
inherit(P.hV,t)
inherit(P.hW,t)
inherit(P.hX,t)
inherit(P.hT,t)
inherit(P.hY,t)
inherit(P.hS,t)
inherit(P.i1,t)
inherit(P.i2,t)
inherit(P.i0,t)
inherit(P.i_,t)
inherit(P.fZ,t)
inherit(P.h_,t)
inherit(P.iF,t)
inherit(P.ii,t)
inherit(P.ih,t)
inherit(P.ij,t)
inherit(P.f0,t)
inherit(P.e8,t)
inherit(P.e9,t)
inherit(W.iG,t)
inherit(W.fW,t)
inherit(W.ht,t)
inherit(W.hP,t)
inherit(W.fi,t)
inherit(W.fh,t)
inherit(W.iq,t)
inherit(W.ir,t)
inherit(W.ix,t)
inherit(W.iy,t)
inherit(P.hx,t)
inherit(P.iH,t)
inherit(P.iI,t)
inherit(P.iJ,t)
inherit(B.j6,t)
inherit(B.j7,t)
inherit(B.j8,t)
inherit(B.j9,t)
inherit(B.ja,t)
inherit(B.fl,t)
inherit(B.fm,t)
inherit(B.fn,t)
inherit(B.fo,t)
inherit(D.eY,t)
inherit(A.iR,t)
inherit(V.j3,t)
inherit(V.j1,t)
inherit(V.j2,t)
t=H.hE
inherit(H.bo,t)
inherit(H.c1,t)
t=P.be
inherit(H.dl,t)
inherit(H.eS,t)
inherit(H.hk,t)
inherit(H.hj,t)
inherit(H.dY,t)
inherit(H.fJ,t)
inherit(P.cc,t)
inherit(P.bk,t)
inherit(P.af,t)
inherit(P.u,t)
inherit(P.bV,t)
inherit(P.aj,t)
inherit(P.a3,t)
inherit(P.e1,t)
t=H.h5
inherit(H.fS,t)
inherit(H.bv,t)
inherit(H.hy,P.cc)
t=H.bj
inherit(H.f8,t)
inherit(H.dd,t)
t=H.dd
inherit(H.bL,t)
inherit(H.bK,t)
inherit(H.bM,H.bL)
inherit(H.de,H.bM)
inherit(H.bN,H.bK)
inherit(H.df,H.bN)
t=H.de
inherit(H.dc,t)
inherit(H.f9,t)
t=H.df
inherit(H.fa,t)
inherit(H.fb,t)
inherit(H.fc,t)
inherit(H.fd,t)
inherit(H.fe,t)
inherit(H.dg,t)
inherit(H.ff,t)
t=P.hG
inherit(P.dD,t)
inherit(P.iv,t)
inherit(P.ig,P.iC)
inherit(P.dG,H.ah)
inherit(P.fL,P.fM)
inherit(P.i5,P.fL)
inherit(P.i7,P.i5)
inherit(P.d8,P.bP)
t=P.U
inherit(P.M,t)
inherit(P.n,t)
t=P.af
inherit(P.dp,t)
inherit(P.eJ,t)
t=W.h
inherit(W.q,t)
inherit(W.bz,t)
inherit(W.e_,t)
inherit(W.ex,t)
inherit(W.bF,t)
inherit(W.bI,t)
inherit(W.fy,t)
inherit(W.dq,t)
inherit(W.fN,t)
inherit(W.a9,t)
inherit(W.by,t)
inherit(W.ac,t)
inherit(W.Y,t)
inherit(W.bx,t)
inherit(W.hn,t)
inherit(W.hr,t)
inherit(W.bW,t)
inherit(W.hu,t)
inherit(W.b3,t)
inherit(W.ip,t)
t=W.q
inherit(W.a4,t)
inherit(W.aO,t)
inherit(W.aQ,t)
inherit(W.ch,t)
inherit(W.hI,t)
t=W.a4
inherit(W.k,t)
inherit(P.G,t)
t=W.k
inherit(W.dR,t)
inherit(W.dS,t)
inherit(W.aN,t)
inherit(W.ce,t)
inherit(W.cg,t)
inherit(W.eC,t)
inherit(W.co,t)
inherit(W.bg,t)
inherit(W.fK,t)
inherit(W.dv,t)
inherit(W.h3,t)
inherit(W.h4,t)
inherit(W.bT,t)
inherit(W.i4,t)
inherit(W.bC,W.bz)
inherit(W.dV,W.bC)
inherit(W.bd,W.cr)
inherit(W.e5,W.cj)
inherit(W.d4,W.cC)
inherit(W.e6,W.d4)
inherit(W.a5,W.cd)
inherit(W.d2,W.cB)
inherit(W.ew,W.d2)
inherit(W.cQ,W.cE)
inherit(W.bE,W.cQ)
inherit(W.cp,W.aQ)
inherit(W.cq,W.bF)
inherit(W.aF,W.j)
t=W.aF
inherit(W.aU,t)
inherit(W.N,t)
inherit(W.b0,t)
inherit(W.f5,W.bI)
inherit(W.cX,W.cA)
inherit(W.f6,W.cX)
inherit(W.T,P.d8)
inherit(W.cN,W.cG)
inherit(W.bO,W.cN)
t=W.bm
inherit(W.fs,t)
inherit(W.fI,t)
inherit(W.hg,t)
inherit(W.cZ,W.cy)
inherit(W.fu,W.cZ)
inherit(W.fx,W.ak)
inherit(W.bB,W.by)
inherit(W.fO,W.bB)
inherit(W.cV,W.cx)
inherit(W.fQ,W.cV)
inherit(W.cR,W.cw)
inherit(W.h7,W.cR)
inherit(W.bA,W.bx)
inherit(W.h8,W.bA)
inherit(W.d0,W.cH)
inherit(W.hd,W.d0)
inherit(W.b2,W.N)
inherit(W.d1,W.cv)
inherit(W.dE,W.d1)
inherit(W.d_,W.cL)
inherit(W.hH,W.d_)
inherit(W.hJ,W.ck)
inherit(W.cM,W.cK)
inherit(W.i3,W.cM)
inherit(W.d3,W.cF)
inherit(W.dH,W.d3)
inherit(W.cT,W.cJ)
inherit(W.is,W.cT)
inherit(W.cP,W.cI)
inherit(W.it,W.cP)
inherit(W.hK,W.hD)
inherit(W.hN,P.fX)
inherit(W.jC,W.hN)
inherit(W.hO,P.fY)
inherit(W.iw,W.c0)
inherit(P.hw,P.hv)
inherit(P.J,P.ie)
t=P.G
inherit(P.aC,t)
inherit(P.aM,t)
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
inherit(P.eq,t)
inherit(P.er,t)
inherit(P.es,t)
inherit(P.et,t)
inherit(P.ey,t)
inherit(P.f1,t)
inherit(P.f2,t)
inherit(P.fq,t)
inherit(P.bQ,t)
inherit(P.h2,t)
inherit(P.ho,t)
inherit(P.bX,t)
inherit(P.ik,t)
inherit(P.il,t)
inherit(P.im,t)
t=P.aC
inherit(P.dQ,t)
inherit(P.eB,t)
inherit(P.ag,t)
inherit(P.eI,t)
inherit(P.h1,t)
inherit(P.dw,t)
inherit(P.hm,t)
inherit(P.cO,P.cu)
inherit(P.eT,P.cO)
inherit(P.cW,P.cz)
inherit(P.fj,P.cW)
inherit(P.fC,P.ag)
inherit(P.cU,P.cs)
inherit(P.h0,P.cU)
t=P.dw
inherit(P.h6,t)
inherit(P.bU,t)
inherit(P.cS,P.cD)
inherit(P.hf,P.cS)
inherit(P.cY,P.ct)
inherit(P.fR,P.cY)
t=G.f7
inherit(G.fP,t)
inherit(G.dA,t)
inherit(G.db,t)
inherit(G.fF,t)
inherit(A.dr,t)
inherit(A.fE,t)
t=G.fP
inherit(G.dW,t)
inherit(A.dh,t)
inherit(B.fk,G.dW)
t=G.dA
inherit(G.f3,t)
inherit(G.fr,t)
inherit(R.fU,R.fT)
mixin(H.bK,P.x)
mixin(H.bL,P.x)
mixin(H.bM,H.cm)
mixin(H.bN,H.cm)
mixin(P.bP,P.x)
mixin(W.bx,P.x)
mixin(W.by,P.x)
mixin(W.bz,P.x)
mixin(W.bA,W.B)
mixin(W.bB,W.B)
mixin(W.bC,W.B)
mixin(W.cr,W.e0)
mixin(W.cL,P.x)
mixin(W.cx,P.x)
mixin(W.cE,P.x)
mixin(W.cF,P.x)
mixin(W.cG,P.x)
mixin(W.cH,P.x)
mixin(W.cI,P.x)
mixin(W.cJ,P.x)
mixin(W.cK,P.x)
mixin(W.cv,P.x)
mixin(W.cw,P.x)
mixin(W.cy,P.x)
mixin(W.cA,P.x)
mixin(W.cB,P.x)
mixin(W.cC,P.x)
mixin(W.cM,W.B)
mixin(W.cN,W.B)
mixin(W.cZ,W.B)
mixin(W.cX,W.B)
mixin(W.d1,W.B)
mixin(W.d2,W.B)
mixin(W.d3,W.B)
mixin(W.d4,W.B)
mixin(W.cP,W.B)
mixin(W.cQ,W.B)
mixin(W.cR,W.B)
mixin(W.cT,W.B)
mixin(W.cV,W.B)
mixin(W.d_,W.B)
mixin(W.d0,W.B)
mixin(P.cu,P.x)
mixin(P.cs,P.x)
mixin(P.cz,P.x)
mixin(P.cD,P.x)
mixin(P.cO,W.B)
mixin(P.cW,W.B)
mixin(P.cS,W.B)
mixin(P.cU,W.B)
mixin(P.ct,P.x)
mixin(P.cY,W.B)})();(function constants(){C.i=W.aN.prototype
C.z=W.ce.prototype
C.n=W.bd.prototype
C.j=W.cg.prototype
C.A=W.ci.prototype
C.B=W.co.prototype
C.h=W.cp.prototype
C.p=W.cq.prototype
C.C=J.a.prototype
C.a=J.aR.prototype
C.q=J.d6.prototype
C.b=J.d7.prototype
C.c=J.bh.prototype
C.f=J.aS.prototype
C.J=J.aT.prototype
C.e=H.dc.prototype
C.v=W.bO.prototype
C.w=J.ft.prototype
C.x=W.dn.prototype
C.y=W.dv.prototype
C.m=J.b1.prototype
C.a3=W.b2.prototype
C.a4=W.bW.prototype
C.d=new P.ig()
C.o=new P.aA(0)
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
C.r=function(hooks) { return hooks; }

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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=H.D(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.r])
C.L=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.u=makeConstList([])
C.k=H.D(makeConstList(["bind","if","ref","repeat","syntax"]),[P.r])
C.l=H.D(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.r])
C.M=H.K("nS")
C.N=H.K("nT")
C.O=H.K("eA")
C.P=H.K("nU")
C.Q=H.K("nV")
C.R=H.K("ko")
C.S=H.K("nW")
C.T=H.K("kr")
C.U=H.K("aX")
C.V=H.K("r")
C.W=H.K("kR")
C.X=H.K("kS")
C.Y=H.K("nY")
C.Z=H.K("kT")
C.a_=H.K("ax")
C.a0=H.K("M")
C.a1=H.K("n")
C.a2=H.K("U")})();(function staticFields(){$.kz="$cachedFunction"
$.kA="$cachedInvocation"
$.k9=null
$.k7=null
$.jE=!1
$.jI=null
$.l4=null
$.ll=null
$.iM=null
$.iV=null
$.jJ=null
$.bp=null
$.c2=null
$.c3=null
$.jF=!1
$.y=C.d
$.kn=0
$.aB=null
$.jn=null
$.km=null
$.kl=null
$.kj=null
$.ki=null
$.kh=null
$.kg=null
$.nl=0
$.nm=0
$.jN=0
$.lj=0
$.c7=0
$.c8=0
$.nL=!1
$.lc=0})();(function lazyInitializers(){lazy($,"kf","$get$kf",function(){return H.lg("_$dart_dartClosure")})
lazy($,"js","$get$js",function(){return H.lg("_$dart_js")})
lazy($,"kp","$get$kp",function(){return H.mw()})
lazy($,"kq","$get$kq",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.kn
$.kn=t+1
t="expando$key$"+t}return new P.eb(null,t,[P.n])})
lazy($,"kG","$get$kG",function(){return H.au(H.hi({
toString:function(){return"$receiver$"}}))})
lazy($,"kH","$get$kH",function(){return H.au(H.hi({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kI","$get$kI",function(){return H.au(H.hi(null))})
lazy($,"kJ","$get$kJ",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kN","$get$kN",function(){return H.au(H.hi(void 0))})
lazy($,"kO","$get$kO",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kL","$get$kL",function(){return H.au(H.kM(null))})
lazy($,"kK","$get$kK",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"kQ","$get$kQ",function(){return H.au(H.kM(void 0))})
lazy($,"kP","$get$kP",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"jB","$get$jB",function(){return P.mW()})
lazy($,"c4","$get$c4",function(){return[]})
lazy($,"ke","$get$ke",function(){return{}})
lazy($,"kY","$get$kY",function(){return P.ju(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jD","$get$jD",function(){return P.L()})
lazy($,"iL","$get$iL",function(){return P.ku(P.n,P.ax)})
lazy($,"c6","$get$c6",function(){return P.ku(P.r,P.ax)})
lazy($,"kE","$get$kE",function(){return new G.dy(1281,0,4294967295)})
lazy($,"k5","$get$k5",function(){return new G.dx(1281,1281,1281)})
lazy($,"Z","$get$Z",function(){return P.aV(["cBlendEquation",new G.i("","",0),"cDepthWrite",new G.i("","",0),"cDepthTest",new G.i("","",0),"cStencilFunc",new G.i("","",0),"tPosition",new G.i("vec3","",0),"tSpeed",new G.i("vec3","",0),"tForce",new G.i("vec3","",0),"aColors",new G.i("vec3","per vertex color",0),"aColorAlpha",new G.i("vec4","per vertex color",0),"aPosition",new G.i("vec3","vertex coordinates",0),"aTexUV",new G.i("vec2","texture uvs",0),"aNormal",new G.i("vec3","vertex normals",0),"aBinormal",new G.i("vec3","vertex binormals",0),"aCenter",new G.i("vec4","for wireframe",0),"aPointSize",new G.i("float","",0),"aBoneIndex",new G.i("vec4","",0),"aBoneWeight",new G.i("vec4","",0),"aTangent",new G.i("vec3","vertex tangents",0),"aBitangent",new G.i("vec3","vertex btangents",0),"iaRotation",new G.i("vec4","",0),"iaTranslation",new G.i("vec3","",0),"iaScale",new G.i("vec3","",0),"vColor",new G.i("vec3","per vertex color",0),"vTexUV",new G.i("vec2","",0),"vLightWeighting",new G.i("vec3","",0),"vNormal",new G.i("vec3","",0),"vPosition",new G.i("vec3","vertex coordinates",0),"vPositionFromLight",new G.i("vec4","delta from light",0),"vCenter",new G.i("vec4","for wireframe",0),"vDepth",new G.i("float","depth for shadowmaps",0),"uTransformationMatrix",new G.i("mat4","",0),"uModelMatrix",new G.i("mat4","",0),"uNormalMatrix",new G.i("mat3","",0),"uConvolutionMatrix",new G.i("mat3","",0),"uPerspectiveViewMatrix",new G.i("mat4","",0),"uLightPerspectiveViewMatrix",new G.i("mat4","",0),"uShadowMap",new G.i("sampler2DShadow","",0),"uTexture",new G.i("sampler2D","",0),"uTexture2",new G.i("sampler2D","",0),"uTexture3",new G.i("sampler2D","",0),"uTexture4",new G.i("sampler2D","",0),"uSpecularMap",new G.i("sampler2D","",0),"uNormalMap",new G.i("sampler2D","",0),"uBumpMap",new G.i("sampler2D","",0),"uDepthMap",new G.i("sampler2D","",0),"uCubeTexture",new G.i("samplerCube","",0),"uAnimationTable",new G.i("sampler2D","",0),"uTime",new G.i("float","time since program start in sec",0),"uCameraNear",new G.i("float","",0),"uCameraFar",new G.i("float","",0),"uFogNear",new G.i("float","",0),"uFogFar",new G.i("float","",0),"uPointSize",new G.i("float","",0),"uScale",new G.i("float","",0),"uAngle",new G.i("float","",0),"uCanvasSize",new G.i("vec2","",0),"uCenter2",new G.i("vec2","",0),"uCutOff",new G.i("float","",0),"uShininess",new G.i("float","",0),"uShadowBias",new G.i("float","",0),"uOpacity",new G.i("float","",0),"uColor",new G.i("vec3","",0),"uAmbientDiffuse",new G.i("vec3","",0),"uColorEmissive",new G.i("vec3","",0),"uColorSpecular",new G.i("vec3","",0),"uColorDiffuse",new G.i("vec3","",0),"uColorAlpha",new G.i("vec4","",0),"uColorAlpha2",new G.i("vec4","",0),"uEyePosition",new G.i("vec3","",0),"uMaterial",new G.i("mat4","",0),"uRange",new G.i("vec2","",0),"uDirection",new G.i("vec2","",0),"uBoneMatrices",new G.i("mat4","",128),"uLightDescs",new G.i("mat4","",4),"uLightCount",new G.i("float","",0),"uLightTypes",new G.i("float","",4),"uBumpScale",new G.i("float","for bump maps",0),"uNormalScale",new G.i("float","for normal maps",0)])})
lazy($,"kc","$get$kc",function(){return T.kU(0,0,1)})
lazy($,"kd","$get$kd",function(){return T.kU(1,1,0)})
lazy($,"ln","$get$ln",function(){var t=new G.ds("SolidColor",null,[],[],[],[],0,P.L())
t.d0(["aPosition"])
t.bg(["uPerspectiveViewMatrix","uModelMatrix"])
t.bn(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);"])
return t})
lazy($,"lm","$get$lm",function(){var t=new G.ds("SolidColorF",null,[],[],[],[],0,P.L())
t.bg(["uColor"])
t.bn(["oFragColor = vec4( uColor, 1.0 );"])
return t})
lazy($,"ld","$get$ld",function(){return H.an(C.h.b_(W.l9(),"#normals"),"$isbg")})
lazy($,"le","$get$le",function(){return H.an(C.h.b_(W.l9(),"#wires"),"$isbg")})})()
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
mangledGlobalNames:{n:"int",M:"double",U:"num",r:"String",ax:"bool",aX:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.q},{func:1,ret:P.ax,args:[W.a4,P.r,P.r,W.bY]},{func:1,v:true,args:[P.o],opt:[P.bR]},{func:1,ret:P.n,args:[P.H,P.H]},{func:1,ret:P.r,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bJ,ArrayBufferView:H.bj,DataView:H.f8,Float32Array:H.dc,Float64Array:H.f9,Int16Array:H.fa,Int32Array:H.fb,Int8Array:H.fc,Uint16Array:H.fd,Uint32Array:H.fe,Uint8ClampedArray:H.dg,CanvasPixelArray:H.dg,Uint8Array:H.ff,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dR,HTMLAreaElement:W.dS,AudioTrack:W.a2,AudioTrackList:W.dV,Blob:W.cd,HTMLBodyElement:W.aN,HTMLCanvasElement:W.ce,CanvasRenderingContext2D:W.dX,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CompositorWorker:W.e_,CSSCharsetRule:W.A,CSSFontFaceRule:W.A,CSSGroupingRule:W.A,CSSImportRule:W.A,CSSKeyframeRule:W.A,MozCSSKeyframeRule:W.A,WebKitCSSKeyframeRule:W.A,CSSKeyframesRule:W.A,MozCSSKeyframesRule:W.A,WebKitCSSKeyframesRule:W.A,CSSMediaRule:W.A,CSSNamespaceRule:W.A,CSSPageRule:W.A,CSSRule:W.A,CSSStyleRule:W.A,CSSSupportsRule:W.A,CSSViewportRule:W.A,CSSStyleDeclaration:W.bd,MSStyleCSSProperties:W.bd,CSS2Properties:W.bd,DataTransferItemList:W.e2,DeviceAcceleration:W.e3,HTMLDivElement:W.cg,XMLDocument:W.aQ,Document:W.aQ,DocumentFragment:W.ch,ShadowRoot:W.ch,DOMException:W.e4,DOMImplementation:W.ci,DOMPoint:W.e5,DOMPointReadOnly:W.cj,DOMRectReadOnly:W.ck,DOMStringList:W.e6,DOMTokenList:W.e7,Element:W.a4,AnimationEvent:W.j,AnimationPlayerEvent:W.j,ApplicationCacheErrorEvent:W.j,AutocompleteErrorEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceLightEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,GamepadEvent:W.j,GeofencingEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RelatedEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCIceCandidateEvent:W.j,RTCPeerConnectionIceEvent:W.j,SecurityPolicyViolationEvent:W.j,ServicePortConnectEvent:W.j,ServiceWorkerMessageEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a5,FileList:W.ew,FileWriter:W.ex,HTMLFormElement:W.eC,Gamepad:W.a6,HTMLHeadElement:W.co,History:W.eH,HTMLCollection:W.bE,HTMLFormControlsCollection:W.bE,HTMLOptionsCollection:W.bE,HTMLDocument:W.cp,XMLHttpRequest:W.cq,XMLHttpRequestUpload:W.bF,XMLHttpRequestEventTarget:W.bF,HTMLInputElement:W.bg,KeyboardEvent:W.aU,Location:W.eZ,MediaList:W.f4,MIDIOutput:W.f5,MIDIInput:W.bI,MIDIPort:W.bI,MimeType:W.a7,MimeTypeArray:W.f6,PointerEvent:W.N,MouseEvent:W.N,DragEvent:W.N,Navigator:W.fg,Attr:W.q,Node:W.q,NodeIterator:W.di,NodeList:W.bO,RadioNodeList:W.bO,Path2D:W.fp,Perspective:W.fs,Plugin:W.a8,PluginArray:W.fu,PositionValue:W.fx,PresentationConnection:W.fy,Range:W.dn,Rotation:W.fI,RTCDataChannel:W.dq,DataChannel:W.dq,HTMLSelectElement:W.fK,SharedWorker:W.fN,SourceBuffer:W.a9,SourceBufferList:W.fO,SpeechGrammar:W.aa,SpeechGrammarList:W.fQ,SpeechRecognitionResult:W.ab,Storage:W.fV,CSSStyleSheet:W.X,StyleSheet:W.X,CalcLength:W.ak,KeywordValue:W.ak,LengthValue:W.ak,NumberValue:W.ak,SimpleLength:W.ak,TransformValue:W.ak,StyleValue:W.ak,HTMLTableElement:W.dv,HTMLTableRowElement:W.h3,HTMLTableSectionElement:W.h4,HTMLTemplateElement:W.bT,TextTrack:W.ac,TextTrackCue:W.Y,VTTCue:W.Y,TextTrackCueList:W.h7,TextTrackList:W.h8,TimeRanges:W.h9,Touch:W.ad,TouchEvent:W.b0,TouchList:W.hd,TrackDefaultList:W.he,Matrix:W.bm,Skew:W.bm,TransformComponent:W.bm,Translation:W.hg,TreeWalker:W.dz,CompositionEvent:W.aF,FocusEvent:W.aF,TextEvent:W.aF,SVGZoomEvent:W.aF,UIEvent:W.aF,URL:W.hl,VideoTrackList:W.hn,VTTRegionList:W.hq,WebSocket:W.hr,WheelEvent:W.b2,Window:W.bW,DOMWindow:W.bW,Worker:W.hu,CompositorWorkerGlobalScope:W.b3,DedicatedWorkerGlobalScope:W.b3,ServiceWorkerGlobalScope:W.b3,SharedWorkerGlobalScope:W.b3,WorkerGlobalScope:W.b3,ClientRect:W.hF,ClientRectList:W.dE,DOMRectList:W.dE,CSSRuleList:W.hH,DocumentType:W.hI,DOMRect:W.hJ,GamepadList:W.i3,HTMLFrameSetElement:W.i4,NamedNodeMap:W.dH,MozNamedAttrMap:W.dH,ServiceWorker:W.ip,SpeechRecognitionResultList:W.is,StyleSheetList:W.it,WorkerLocation:W.iA,WorkerNavigator:W.iB,SVGAElement:P.dQ,SVGAnimateElement:P.aM,SVGAnimateMotionElement:P.aM,SVGAnimateTransformElement:P.aM,SVGAnimationElement:P.aM,SVGSetElement:P.aM,SVGFEBlendElement:P.ec,SVGFEColorMatrixElement:P.ed,SVGFEComponentTransferElement:P.ee,SVGFECompositeElement:P.ef,SVGFEConvolveMatrixElement:P.eg,SVGFEDiffuseLightingElement:P.eh,SVGFEDisplacementMapElement:P.ei,SVGFEFloodElement:P.ej,SVGFEGaussianBlurElement:P.ek,SVGFEImageElement:P.el,SVGFEMergeElement:P.em,SVGFEMorphologyElement:P.en,SVGFEOffsetElement:P.eo,SVGFEPointLightElement:P.ep,SVGFESpecularLightingElement:P.eq,SVGFESpotLightElement:P.er,SVGFETileElement:P.es,SVGFETurbulenceElement:P.et,SVGFilterElement:P.ey,SVGForeignObjectElement:P.eB,SVGCircleElement:P.ag,SVGEllipseElement:P.ag,SVGLineElement:P.ag,SVGPathElement:P.ag,SVGPolygonElement:P.ag,SVGPolylineElement:P.ag,SVGGeometryElement:P.ag,SVGClipPathElement:P.aC,SVGDefsElement:P.aC,SVGGElement:P.aC,SVGSwitchElement:P.aC,SVGGraphicsElement:P.aC,SVGImageElement:P.eI,SVGLength:P.ar,SVGLengthList:P.eT,SVGMarkerElement:P.f1,SVGMaskElement:P.f2,SVGNumber:P.as,SVGNumberList:P.fj,SVGPatternElement:P.fq,SVGPoint:P.fv,SVGPointList:P.fw,SVGRect:P.fB,SVGRectElement:P.fC,SVGScriptElement:P.bQ,SVGStringList:P.h0,SVGDescElement:P.G,SVGDiscardElement:P.G,SVGFEDistantLightElement:P.G,SVGFEFuncAElement:P.G,SVGFEFuncBElement:P.G,SVGFEFuncGElement:P.G,SVGFEFuncRElement:P.G,SVGFEMergeNodeElement:P.G,SVGMetadataElement:P.G,SVGStopElement:P.G,SVGStyleElement:P.G,SVGTitleElement:P.G,SVGComponentTransferFunctionElement:P.G,SVGElement:P.G,SVGSVGElement:P.h1,SVGSymbolElement:P.h2,SVGTextContentElement:P.dw,SVGTextPathElement:P.h6,SVGTSpanElement:P.bU,SVGTextElement:P.bU,SVGTextPositioningElement:P.bU,SVGTransform:P.at,SVGTransformList:P.hf,SVGUseElement:P.hm,SVGViewElement:P.ho,SVGViewSpec:P.hp,SVGLinearGradientElement:P.bX,SVGRadialGradientElement:P.bX,SVGGradientElement:P.bX,SVGCursorElement:P.ik,SVGFEDropShadowElement:P.il,SVGMPathElement:P.im,AudioBuffer:P.dU,WebGLRenderingContext:P.fG,WebGL2RenderingContext:P.fH,WebGL2RenderingContextBase:P.iz,SQLResultSetRowList:P.fR})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.df.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.lo(V.lq(),b)},[])
else (function(b){H.lo(V.lq(),b)})([])})})()