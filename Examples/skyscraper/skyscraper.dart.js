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
a[c]=function(){a[c]=function(){H.nb(b)}
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
return d?function(e){if(t===null)t=H.jk(this,a,b,false,[e],c)
return new t(this,a[0],e,c)}:function(){if(t===null)t=H.jk(this,a,b,false,[],c)
return new t(this,a[0],null,c)}}function tearOff(a,b,c,d,e){var t
return c?function(){if(t===void 0)t=H.jk(this,a,b,true,[],d).prototype
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
if(v[t][a])return v[t][a]}}var C={},H={j6:function j6(a){this.a=a},
jb:function(a,b,c,d){if(!!a.$isc)return new H.e3(a,b,[c,d])
return new H.d2(a,b,[c,d])},
eE:function(){return new P.aD("No element")},
m4:function(){return new P.aD("Too many elements")},
m3:function(){return new P.aD("Too few elements")},
dj:function(a,b,c,d){if(c-b<=32)H.mh(a,b,c,d)
else H.mg(a,b,c,d)},
mh:function(a,b,c,d){var t,s,r,q,p
for(t=b+1,s=J.ae(a);t<=c;++t){r=s.h(a,t)
q=t
while(!0){if(!(q>b&&J.ao(d.$2(s.h(a,q-1),r),0)))break
p=q-1
s.i(a,q,s.h(a,p))
q=p}s.i(a,q,r)}},
mg:function(a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
t=a4-a3
H.d(t>32)
s=C.b.K(t+1,6)
r=a3+s
q=a4-s
p=C.b.K(a3+a4,2)
o=p-s
n=p+s
t=J.ae(a2)
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
if(J.H(a5.$2(l,j),0)){for(e=g;e<=f;++e){d=t.h(a2,e)
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
H.dj(a2,a3,g-2,a5)
H.dj(a2,f+2,a4,a5)
if(a0)return
if(g<r&&f>q){for(;J.H(a5.$2(t.h(a2,g),l),0);)++g
for(;J.H(a5.$2(t.h(a2,f),j),0);)--f
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
break}}H.dj(a2,g,f,a5)}else H.dj(a2,g,f,a5)},
c:function c(){},
bb:function bb(){},
d1:function d1(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
d2:function d2(a,b,c){this.a=a
this.b=b
this.$ti=c},
e3:function e3(a,b,c){this.a=a
this.b=b
this.$ti=c},
eP:function eP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bA:function bA(a,b,c){this.a=a
this.b=b
this.$ti=c},
dt:function dt(a,b,c){this.a=a
this.b=b
this.$ti=c},
hh:function hh(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(){},
dB:function(a,b){var t=a.ag(b)
if(!u.globalState.d.cy)u.globalState.f.am()
return t},
iH:function(){--u.globalState.f.b
H.d(u.globalState.f.b>=0)},
kX:function(a,b){var t,s,r,q,p,o
t={}
t.a=b
if(b==null){b=[]
t.a=b
s=b}else s=b
if(!J.w(s).$isb)throw H.e(P.jF("Arguments to main must be a List: "+H.f(s)))
u.globalState=new H.hU(0,0,1,null,null,null,null,null,null,null,null,null,a)
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
s.f=new H.hx(P.ja(null,H.b4),0)
r=P.o
s.seq(new H.ah(0,null,null,null,null,null,0,[r,H.b3]))
s.seu(new H.ah(0,null,null,null,null,null,0,[r,null]))
if(s.x){q=new H.hT()
s.Q=q
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.lZ,q)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.mw)}if(u.globalState.x)return
s=u.globalState.a++
q=P.ai(null,null,null,r)
p=new H.bd(0,null,!1)
o=new H.b3(s,new H.ah(0,null,null,null,null,null,0,[r,H.bd]),q,u.createNewIsolate(),p,new H.aq(H.iL()),new H.aq(H.iL()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
q.j(0,0)
o.br(0,p)
u.globalState.e=o
u.globalState.z.i(0,s,o)
u.globalState.d=o
if(H.bj(a,{func:1,args:[,]}))o.ag(new H.iR(t,a))
else if(H.bj(a,{func:1,args:[,,]}))o.ag(new H.iS(t,a))
else o.ag(a)
u.globalState.f.am()},
mw:function(a){var t=P.aU(["command","print","msg",a])
return new H.al(!0,P.bU(null,P.o)).L(t)},
m0:function(){var t=u.currentScript
if(t!=null)return String(t.src)
if(u.globalState.x)return H.m1()
return},
m1:function(){var t,s
t=new Error().stack
if(t==null){t=function(){try{throw new Error()}catch(r){return r.stack}}()
if(t==null)throw H.e(new P.u("No stack trace"))}s=t.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(s!=null)return s[1]
s=t.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(s!=null)return s[1]
throw H.e(new P.u('Cannot extract URI from "'+t+'"'))},
lZ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=new H.b2(!0,[]).Z(b.data)
s=J.ae(t)
switch(s.h(t,"command")){case"start":u.globalState.b=H.mY(s.h(t,"id"))
r=s.h(t,"functionName")
q=r==null?u.globalState.cx:u.staticFunctionNameToClosure(r)
p=s.h(t,"args")
o=new H.b2(!0,[]).Z(s.h(t,"msg"))
n=s.h(t,"isSpawnUri")
m=s.h(t,"startPaused")
l=new H.b2(!0,[]).Z(s.h(t,"replyTo"))
s=u.globalState.a++
k=P.o
j=P.ai(null,null,null,k)
i=new H.bd(0,null,!1)
h=new H.b3(s,new H.ah(0,null,null,null,null,null,0,[k,H.bd]),j,u.createNewIsolate(),i,new H.aq(H.iL()),new H.aq(H.iL()),!1,!1,[],P.ai(null,null,null,null),null,null,!1,!0,P.ai(null,null,null,null))
j.j(0,0)
h.br(0,i)
u.globalState.f.a.W(0,new H.b4(h,new H.eB(q,p,o,n,m,l),"worker-start"))
u.globalState.d=h
u.globalState.f.am()
break
case"spawn-worker":break
case"message":if(s.h(t,"port")!=null)J.lv(s.h(t,"port"),s.h(t,"msg"))
u.globalState.f.am()
break
case"close":u.globalState.ch.al(0,$.$get$k3().h(0,a))
a.terminate()
u.globalState.f.am()
break
case"log":H.lY(s.h(t,"msg"))
break
case"print":if(u.globalState.x){s=u.globalState.Q
k=P.aU(["command","print","msg",t])
k=new H.al(!0,P.bU(null,P.o)).L(k)
s.toString
self.postMessage(k)}else P.an(s.h(t,"msg"))
break
case"error":throw H.e(s.h(t,"msg"))}},
lY:function(a){var t,s,r,q
if(u.globalState.x){s=u.globalState.Q
r=P.aU(["command","log","msg",a])
r=new H.al(!0,P.bU(null,P.o)).L(r)
s.toString
self.postMessage(r)}else try{self.console.log(a)}catch(q){H.R(q)
t=H.aI(q)
s=P.cd(t)
throw H.e(s)}},
m_:function(a,b,c,d,e,f){var t,s,r,q
t=u.globalState.d
s=t.a
$.k8=$.k8+("_"+s)
$.k9=$.k9+("_"+s)
s=t.e
r=u.globalState.d.a
q=t.f
f.J(0,["spawned",new H.bg(s,r),q,t.r])
r=new H.eC(a,b,c,d,t)
if(e){t.bK(q,q)
u.globalState.f.a.W(0,new H.b4(t,r,"start isolate"))}else r.$0()},
mj:function(a,b){var t=new H.h_(!0,!1,null)
t.dc(a,b)
return t},
mx:function(a){return new H.b2(!0,[]).Z(new H.al(!1,P.bU(null,P.o)).L(a))},
iR:function iR(a,b){this.a=a
this.b=b},
iS:function iS(a,b){this.a=a
this.b=b},
hU:function hU(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
hP:function hP(a,b){this.a=a
this.b=b},
hx:function hx(a,b){this.a=a
this.b=b},
hy:function hy(a){this.a=a},
b4:function b4(a,b,c){this.a=a
this.b=b
this.c=c},
hT:function hT(){},
eB:function eB(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
eC:function eC(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hq:function hq(){},
bg:function bg(a,b){this.b=a
this.a=b},
hV:function hV(a,b){this.a=a
this.b=b},
bW:function bW(a,b,c){this.b=a
this.c=b
this.a=c},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
h0:function h0(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
aq:function aq(a){this.a=a},
al:function al(a,b){this.a=a
this.b=b},
b2:function b2(a,b){this.a=a
this.b=b},
mR:function(a){return u.types[a]},
n_:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return!!J.w(a).$isq},
f:function(a){var t
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.az(a)
if(typeof t!=="string")throw H.e(H.W(a))
return t},
mf:function(a){var t,s,r
t=a.$reflectionInfo
if(t==null)return
t.fixed$length=Array
t=t
s=t[0]
r=t[1]
return new H.ft(a,t,(s&1)===1,s>>1,r>>1,(r&1)===1,t[2],null)},
aX:function(a){var t=a.$identityHash
if(t==null){t=Math.random()*0x3fffffff|0
a.$identityHash=t}return t},
de:function(a){var t,s,r,q,p,o,n,m
t=J.w(a)
s=t.constructor
if(typeof s=="function"){r=s.name
q=typeof r==="string"?r:null}else q=null
if(q==null||t===C.K||!!J.w(a).$isb_){p=C.y(a)
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))q=m}if(q==null)q=p}else q=p}q=q
if(q.length>1&&C.i.aJ(q,0)===36)q=C.i.cR(q,1)
return function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(q+H.dD(H.iv(a),0,null),u.mangledGlobalNames)},
fp:function(a){return"Instance of '"+H.de(a)+"'"},
T:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
md:function(a){return a.b?H.T(a).getUTCFullYear()+0:H.T(a).getFullYear()+0},
mb:function(a){return a.b?H.T(a).getUTCMonth()+1:H.T(a).getMonth()+1},
m7:function(a){return a.b?H.T(a).getUTCDate()+0:H.T(a).getDate()+0},
m8:function(a){return a.b?H.T(a).getUTCHours()+0:H.T(a).getHours()+0},
ma:function(a){return a.b?H.T(a).getUTCMinutes()+0:H.T(a).getMinutes()+0},
mc:function(a){return a.b?H.T(a).getUTCSeconds()+0:H.T(a).getSeconds()+0},
m9:function(a){return a.b?H.T(a).getUTCMilliseconds()+0:H.T(a).getMilliseconds()+0},
k7:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.W(a))
return a[b]},
Q:function(a,b){var t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.af(!0,b,"index",null)
t=J.dI(a)
if(b<0||C.b.cz(b,t))return P.C(b,a,"index",null,t)
return P.fq(b,"index",null)},
W:function(a){return new P.af(!0,a,null,null)},
e:function(a){var t
if(a==null)a=new P.dd()
t=new Error()
t.dartException=a
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:H.kZ})
t.name=""}else t.toString=H.kZ
return t},
kZ:function(){return J.az(this.dartException)},
G:function(a){throw H.e(a)},
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
return new H.h6(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
h7:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
kk:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
j8:function(a,b){var t,s
t=b==null
s=t?null:b.method
return new H.eI(a,s,t?null:b.receiver)},
R:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
t=new H.iT(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return t.$1(a.dartException)
else if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((C.b.aS(r,16)&8191)===10)switch(q){case 438:return t.$1(H.j8(H.f(s)+" (Error "+q+")",null))
case 445:case 5007:p=H.f(s)+" (Error "+q+")"
return t.$1(new H.dc(p,null))}}if(a instanceof TypeError){o=$.$get$ke()
n=$.$get$kf()
m=$.$get$kg()
l=$.$get$kh()
k=$.$get$kl()
j=$.$get$km()
i=$.$get$kj()
$.$get$ki()
h=$.$get$ko()
g=$.$get$kn()
f=o.O(s)
if(f!=null)return t.$1(H.j8(s,f))
else{f=n.O(s)
if(f!=null){f.method="call"
return t.$1(H.j8(s,f))}else{f=m.O(s)
if(f==null){f=l.O(s)
if(f==null){f=k.O(s)
if(f==null){f=j.O(s)
if(f==null){f=i.O(s)
if(f==null){f=l.O(s)
if(f==null){f=h.O(s)
if(f==null){f=g.O(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p)return t.$1(new H.dc(s,f==null?null:f.method))}}return t.$1(new H.h9(typeof s==="string"?s:""))}if(a instanceof RangeError){if(typeof s==="string"&&s.indexOf("call stack")!==-1)return new P.dk()
s=function(b){try{return String(b)}catch(e){}return null}(a)
return t.$1(new P.af(!1,null,null,typeof s==="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s==="string"&&s==="too much recursion")return new P.dk()
return a},
aI:function(a){var t
if(a==null)return new H.dz(a,null)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.dz(a,null)},
n3:function(a){if(a==null||typeof a!='object')return J.ap(a)
else return H.aX(a)},
mP:function(a,b){var t,s,r,q,p
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=a.length
for(r=0;r<s;){q=r+1
H.d(t)
p=a[r]
r=q+1
H.d(t)
b.i(0,p,a[q])}return b},
mZ:function(a,b,c,d,e,f,g){switch(c){case 0:return H.dB(b,new H.iC(a))
case 1:return H.dB(b,new H.iD(a,d))
case 2:return H.dB(b,new H.iE(a,d,e))
case 3:return H.dB(b,new H.iF(a,d,e,f))
case 4:return H.dB(b,new H.iG(a,d,e,f,g))}throw H.e(P.cd("Unsupported number of arguments for wrapped closure"))},
c_:function(a,b){var t
if(a==null)return
t=a.$identity
if(!!t)return t
t=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,u.globalState.d,H.mZ)
a.$identity=t
return t},
lK:function(a,b,c,d,e,f){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
t=b[0]
s=t.$callName
if(!!J.w(c).$isb){t.$reflectionInfo=c
r=H.mf(t).r}else r=c
q=d?Object.create(new H.fI().constructor.prototype):Object.create(new H.bn(null,null,null,null).constructor.prototype)
q.$initialize=q.constructor
if(d)p=function(){this.$initialize()}
else p=function(a0,a1,a2,a3){this.$initialize(a0,a1,a2,a3)}
q.constructor=p
p.prototype=q
if(!d){o=e.length==1&&!0
n=H.jN(a,t,o)
n.$reflectionInfo=c}else{q.$static_name=f
n=t
o=!1}if(typeof r=="number")m=function(a0,a1){return function(){return a0(a1)}}(H.mR,r)
else if(typeof r=="function")if(d)m=r
else{l=o?H.jK:H.j1
m=function(a0,a1){return function(){return a0.apply({$receiver:a1(this)},arguments)}}(r,l)}else throw H.e("Error in reflectionInfo.")
q.$S=m
q[s]=n
for(k=b.length,j=1;j<k;++j){i=b[j]
h=i.$callName
if(h!=null){g=d?i:H.jN(a,i,o)
q[h]=g}}q["call*"]=n
q.$R=t.$R
q.$D=t.$D
return p},
lH:function(a,b,c,d){var t=H.j1
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
jN:function(a,b,c){var t,s,r,q
if(c)return H.lJ(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=H.lH(s,b==null?r!=null:b!==r,t,b)
return q},
lI:function(a,b,c,d){var t,s
t=H.j1
s=H.jK
switch(b?-1:a){case 0:throw H.e(new H.fz("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
lJ:function(a,b){var t,s,r,q
H.lG()
t=$.jJ
if(t==null){t=H.jI("receiver")
$.jJ=t}s=b.$stubName
r=b.length
q=a[s]
t=H.lI(r,b==null?q!=null:b!==q,s,b)
return t},
jk:function(a,b,c,d,e,f){var t
b.fixed$length=Array
if(!!J.w(c).$isb){c.fixed$length=Array
t=c}else t=c
return H.lK(a,b,t,!!d,e,f)},
j1:function(a){return a.a},
jK:function(a){return a.c},
lG:function(){var t=$.jL
if(t==null){t=H.jI("self")
$.jL=t}return t},
jI:function(a){var t,s,r,q,p
t=new H.bn("self","target","receiver","name")
s=Object.getOwnPropertyNames(t)
s.fixed$length=Array
r=s
for(s=r.length,q=0;q<s;++q){p=r[q]
if(t[p]===a)return p}},
np:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.e(H.av(a,"String"))},
a0:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"double"))},
no:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.e(H.av(a,"num"))},
mJ:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.e(H.av(a,"bool"))},
mY:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.e(H.av(a,"int"))},
n5:function(a,b){throw H.e(H.av(a,b.substring(3)))},
n4:function(a,b){var t=J.ae(b)
throw H.e(H.jM(H.de(a),t.bd(b,3,t.gk(b))))},
jn:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.w(a)[b])return a
H.n5(a,b)},
aK:function(a,b){var t
if(a!=null)t=(typeof a==="object"||typeof a==="function")&&J.w(a)[b]
else t=!0
if(t)return a
H.n4(a,b)},
nn:function(a){if(a==null)return a
if(!!J.w(a).$isb)return a
throw H.e(H.av(a,"List"))},
kK:function(a){var t=J.w(a)
return"$S" in t?t.$S():null},
bj:function(a,b){var t
if(a==null)return!1
t=H.kK(a)
return t==null?!1:H.kQ(t,b)},
nl:function(a,b){var t,s
if(a==null)return a
if($.jh)return a
$.jh=!0
try{if(H.bj(a,b))return a
t=H.aL(b,null)
s=H.av(a,t)
throw H.e(s)}finally{$.jh=!1}},
av:function(a,b){return new H.h8("type '"+H.de(a)+"' is not a subtype of type '"+b+"'")},
jM:function(a,b){return new H.dR("CastError: Casting value of type '"+a+"' to incompatible type '"+b+"'")},
ax:function(a){if(!0===a)return!1
if(!!J.w(a).$isj4)a=a.$0()
if(typeof a==="boolean")return!a
throw H.e(H.av(a,"bool"))},
aH:function(a){throw H.e(new H.hk(a))},
d:function(a){if(H.ax(a))throw H.e(new P.c4(null))},
nb:function(a){throw H.e(new P.dV(a))},
iL:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
kO:function(a){return u.getIsolateTag(a)},
M:function(a){return new H.aE(a,null)},
E:function(a,b){H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a.$ti=b
return a},
iv:function(a){if(a==null)return
return a.$ti},
kP:function(a,b){return H.jr(a["$as"+H.f(b)],H.iv(a))},
am:function(a,b,c){var t,s
t=H.kP(a,b)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[c]}return s},
aJ:function(a,b){var t,s
t=H.iv(a)
if(t==null)s=null
else{H.d(typeof t==="object"&&t!==null&&t.constructor===Array)
s=t[b]}return s},
aL:function(a,b){var t
if(a==null)return"dynamic"
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.d(!0)
H.d(!0)
return a[0].name+H.dD(a,1,b)}if(typeof a=="function")return a.name
if(typeof a==="number"&&Math.floor(a)===a)return H.f(a)
if(typeof a.func!="undefined"){t=a.typedef
if(t!=null)return H.aL(t,b)
return H.my(a,b)}return"unknown-reified-type"},
my:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
t=!!a.v?"void":H.aL(a.ret,b)
if("args" in a){s=a.args
for(r=s.length,q="",p="",o=0;o<r;++o,p=", "){n=s[o]
q=q+p+H.aL(n,b)}}else{q=""
p=""}if("opt" in a){m=a.opt
q+=p+"["
for(r=m.length,p="",o=0;o<r;++o,p=", "){n=m[o]
q=q+p+H.aL(n,b)}q+="]"}if("named" in a){l=a.named
q+=p+"{"
for(r=H.mO(l),k=r.length,p="",o=0;o<k;++o,p=", "){j=r[o]
q=q+p+H.aL(l[j],b)+(" "+H.f(j))}q+="}"}return"("+q+") => "+t},
dD:function(a,b,c){var t,s,r,q,p,o
if(a==null)return""
t=typeof a==="object"&&a!==null&&a.constructor===Array
H.d(t)
s=new P.bM("")
for(r=b,q=!0,p=!0;H.d(t),r<a.length;++r){if(q)q=!1
else s.a+=", "
H.d(t)
o=a[r]
if(o!=null)p=!1
s.a+=H.aL(o,c)}return p?"":"<"+s.l(0)+">"},
iw:function(a){var t,s
if(a instanceof H.b7){t=H.kK(a)
if(t!=null)return H.aL(t,null)}s=J.w(a).constructor.name
if(a==null)return s
return s+H.dD(a.$ti,0,null)},
jr:function(a,b){if(a==null)return b
H.d(typeof a=="function")
H.d(b==null||typeof b==="object"&&b!==null&&b.constructor===Array)
a=H.jo(a,null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return H.jo(a,null,b)
return b},
io:function(a,b,c,d){var t,s
if(a==null)return!1
t=H.iv(a)
s=J.w(a)
if(s[b]==null)return!1
return H.kF(H.jr(s[d],t),c)},
dE:function(a,b,c,d){if(a==null)return a
if(H.io(a,b,c,d))return a
throw H.e(H.jM(H.de(a),function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dD(c,0,null),u.mangledGlobalNames)))},
ni:function(a,b,c,d){if(a==null)return a
if(H.io(a,b,c,d))return a
throw H.e(H.av(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(b.substring(3)+H.dD(c,0,null),u.mangledGlobalNames)))},
kF:function(a,b){var t,s,r,q,p
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
nj:function(a,b,c){return H.jo(a,b,H.kP(b,c))},
a1:function(a,b){var t,s,r,q,p,o
if(a===b)return!0
if(a==null||b==null)return!0
if(a.name==="aW")return!0
if('func' in b)return H.kQ(a,b)
if('func' in a)return b.name==="j4"||b.name==="p"
t=typeof a==="object"&&a!==null&&a.constructor===Array
if(t){H.d(!0)
s=a[0]}else s=a
r=typeof b==="object"&&b!==null&&b.constructor===Array
if(r){H.d(!0)
q=b[0]}else q=b
if(q!==s){p=H.aL(q,null)
if(!('$is'+p in s.prototype))return!1
o=s.prototype["$as"+p]}else o=null
if(!t&&o==null||!r)return!0
t=t?a.slice(1):null
r=r?b.slice(1):null
return H.kF(H.jr(o,t),r)},
kE:function(a,b,c){var t,s,r,q,p,o,n
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
mF:function(a,b){var t,s,r,q,p,o
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
kQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(n===m){if(!H.kE(r,q,!1))return!1
if(!H.kE(p,o,!0))return!1}else{for(j=typeof r==="object"&&r!==null&&r.constructor===Array,i=typeof q==="object"&&q!==null&&q.constructor===Array,h=0;h<n;++h){H.d(j)
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
if(!(H.a1(g,f)||H.a1(f,g)))return!1}}return H.mF(a.named,b.named)},
jo:function(a,b,c){H.d(typeof a=="function")
H.d(c==null||typeof c==="object"&&c!==null&&c.constructor===Array)
return a.apply(b,c)},
nq:function(a){var t=$.jl
return"Instance of "+(t==null?"<Unknown>":t.$1(a))},
nm:function(a){return H.aX(a)},
nk:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
n0:function(a){var t,s,r,q,p,o
H.d(!(a instanceof P.p))
t=$.jl.$1(a)
s=$.it[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iB[t]
if(r!=null)return r
q=u.interceptorsByTag[t]
if(q==null){t=$.kD.$2(a,t)
if(t!=null){s=$.it[t]
if(s!=null){Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}r=$.iB[t]
if(r!=null)return r
q=u.interceptorsByTag[t]}}if(q==null)return
r=q.prototype
p=t[0]
if(p==="!"){s=H.jp(r)
$.it[t]=s
Object.defineProperty(a,u.dispatchPropertyName,{value:s,enumerable:false,writable:true,configurable:true})
return s.i}if(p==="~"){$.iB[t]=r
return r}if(p==="-"){o=H.jp(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return H.kS(a,r)
if(p==="*")throw H.e(new P.ds(t))
if(u.leafTags[t]===true){o=H.jp(r)
Object.defineProperty(Object.getPrototypeOf(a),u.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return H.kS(a,r)},
kS:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,u.dispatchPropertyName,{value:J.iJ(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
jp:function(a){return J.iJ(a,!1,null,!!a.$isq)},
n2:function(a,b,c){var t=b.prototype
if(u.leafTags[a]===true)return J.iJ(t,!1,null,!!t.$isq)
else return J.iJ(t,c,null,null)},
mW:function(){if(!0===$.jm)return
$.jm=!0
H.mX()},
mX:function(){var t,s,r,q,p,o,n,m
$.it=Object.create(null)
$.iB=Object.create(null)
H.mV()
t=u.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.kT.$1(p)
if(o!=null){n=H.n2(p,t[p],o)
if(n!=null){Object.defineProperty(o,u.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
mV:function(){var t,s,r,q,p,o,n
t=C.O()
t=H.bi(C.L,H.bi(C.Q,H.bi(C.x,H.bi(C.x,H.bi(C.P,H.bi(C.M,H.bi(C.N(C.y),t)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")t=q(t)||t}}p=t.getTag
o=t.getUnknownTag
n=t.prototypeForTag
$.jl=new H.iy(p)
$.kD=new H.iz(o)
$.kT=new H.iA(n)},
bi:function(a,b){return a(b)||b},
na:function(a,b,c){var t=a.indexOf(b,c)
return t>=0},
ft:function ft(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
h6:function h6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dc:function dc(a,b){this.a=a
this.b=b},
eI:function eI(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a){this.a=a},
iT:function iT(a){this.a=a},
dz:function dz(a,b){this.a=a
this.b=b},
iC:function iC(a){this.a=a},
iD:function iD(a,b){this.a=a
this.b=b},
iE:function iE(a,b,c){this.a=a
this.b=b
this.c=c},
iF:function iF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iG:function iG(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
b7:function b7(){},
fV:function fV(){},
fI:function fI(){},
bn:function bn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h8:function h8(a){this.a=a},
dR:function dR(a){this.a=a},
fz:function fz(a){this.a=a},
hk:function hk(a){this.a=a},
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
eH:function eH(a){this.a=a},
eK:function eK(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
eL:function eL(a,b){this.a=a
this.$ti=b},
eM:function eM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
iy:function iy(a){this.a=a},
iz:function iz(a){this.a=a},
iA:function iA(a){this.a=a},
j:function(a){return a},
ij:function(a){var t,s,r
if(!!J.w(a).$isn)return a
t=a.length
s=new Array(t)
s.fixed$length=Array
for(r=0;r<t;++r)s[r]=a[r]
return s},
bC:function bC(){},
bc:function bc(){},
eZ:function eZ(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d3:function d3(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
d7:function d7(){},
f5:function f5(){},
bD:function bD(){},
bE:function bE(){},
bF:function bF(){},
bG:function bG(){},
mO:function(a){var t=H.E(a?Object.keys(a):[],[null])
t.fixed$length=Array
return t},
iK:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
w:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d_.prototype
return J.cZ.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.eG.prototype
if(typeof a=="boolean")return J.eF.prototype
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.p)return a
return J.iu(a)},
iJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iu:function(a){var t,s,r,q,p
t=a[u.dispatchPropertyName]
if(t==null)if($.jm==null){H.mW()
t=a[u.dispatchPropertyName]}if(t!=null){s=t.p
if(!1===s)return t.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return t.i
if(t.e===r)throw H.e(new P.ds("Return interceptor for "+H.f(s(a,t))))}q=a.constructor
p=q==null?null:q[$.$get$j7()]
if(p!=null)return p
p=H.n0(a)
if(p!=null)return p
if(typeof a=="function")return C.R
s=Object.getPrototypeOf(a)
if(s==null)return C.A
if(s===Object.prototype)return C.A
if(typeof q=="function"){Object.defineProperty(q,$.$get$j7(),{value:C.t,enumerable:false,writable:true,configurable:true})
return C.t}return C.t},
ae:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.p)return a
return J.iu(a)},
c1:function(a){if(a==null)return a
if(a.constructor==Array)return J.aQ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.p)return a
return J.iu(a)},
kM:function(a){if(typeof a=="number")return J.ba.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b_.prototype
return a},
mQ:function(a){if(typeof a=="number")return J.ba.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b_.prototype
return a},
kN:function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.p))return J.b_.prototype
return a},
l:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.p)return a
return J.iu(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.w(a).A(a,b)},
ao:function(a,b){if(typeof a=="number"&&typeof b=="number")return a>b
return J.kM(a).ao(a,b)},
l_:function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.kM(a).aE(a,b)},
bk:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n_(a,a[u.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ae(a).h(a,b)},
l0:function(a,b,c,d){return J.l(a).dn(a,b,c,d)},
js:function(a,b){return J.kN(a).aJ(a,b)},
bl:function(a,b){return J.l(a).dG(a,b)},
l1:function(a,b,c){return J.l(a).dH(a,b,c)},
jt:function(a,b){return J.l(a).bJ(a,b)},
iU:function(a,b){return J.l(a).P(a,b)},
ju:function(a,b,c){return J.l(a).bM(a,b,c)},
l2:function(a,b){return J.l(a).dU(a,b)},
dF:function(a,b,c){return J.l(a).bN(a,b,c)},
l3:function(a,b,c){return J.l(a).bO(a,b,c)},
jv:function(a,b,c){return J.l(a).bP(a,b,c)},
dG:function(a,b){return J.l(a).dX(a,b)},
l4:function(a,b){return J.l(a).bQ(a,b)},
l5:function(a,b,c){return J.l(a).bR(a,b,c)},
jw:function(a,b,c,d){return J.l(a).bS(a,b,c,d)},
l6:function(a,b){return J.c1(a).bT(a,b)},
l7:function(a,b,c,d,e){return J.l(a).bU(a,b,c,d,e)},
l8:function(a,b){return J.mQ(a).R(a,b)},
iV:function(a,b,c){return J.ae(a).e0(a,b,c)},
iW:function(a){return J.l(a).bW(a)},
l9:function(a){return J.l(a).bX(a)},
la:function(a){return J.l(a).e6(a)},
lb:function(a,b){return J.l(a).c_(a,b)},
iX:function(a,b){return J.l(a).c0(a,b)},
lc:function(a,b,c,d){return J.l(a).c1(a,b,c,d)},
ld:function(a,b,c,d,e){return J.l(a).ed(a,b,c,d,e)},
le:function(a,b,c,d,e){return J.l(a).c2(a,b,c,d,e)},
lf:function(a,b,c,d,e,f){return J.l(a).ee(a,b,c,d,e,f)},
lg:function(a,b){return J.c1(a).t(a,b)},
dH:function(a,b){return J.l(a).c3(a,b)},
lh:function(a,b){return J.l(a).c4(a,b)},
li:function(a){return J.l(a).ef(a)},
lj:function(a,b){return J.c1(a).ax(a,b)},
lk:function(a){return J.l(a).gdT(a)},
ap:function(a){return J.w(a).gw(a)},
bm:function(a){return J.c1(a).gB(a)},
dI:function(a){return J.ae(a).gk(a)},
ll:function(a){return J.l(a).gb_(a)},
lm:function(a){return J.w(a).gC(a)},
ln:function(a){return J.l(a).geF(a)},
lo:function(a){return J.l(a).gaB(a)},
iY:function(a){return J.l(a).gm(a)},
iZ:function(a){return J.l(a).gn(a)},
jx:function(a){return J.l(a).gM(a)},
j_:function(a,b){return J.l(a).a7(a,b)},
lp:function(a){return J.l(a).aD(a)},
lq:function(a,b){return J.l(a).b3(a,b)},
lr:function(a,b,c){return J.l(a).b4(a,b,c)},
jy:function(a,b,c){return J.l(a).b7(a,b,c)},
ls:function(a,b){return J.l(a).c6(a,b)},
lt:function(a,b){return J.c1(a).c8(a,b)},
lu:function(a){return J.c1(a).ey(a)},
lv:function(a,b){return J.l(a).J(a,b)},
lw:function(a,b,c,d){return J.l(a).bc(a,b,c,d)},
lx:function(a){return J.kN(a).eI(a)},
az:function(a){return J.w(a).l(a)},
ly:function(a,b,c,d){return J.l(a).eK(a,b,c,d)},
lz:function(a,b,c){return J.l(a).cg(a,b,c)},
lA:function(a,b,c){return J.l(a).ci(a,b,c)},
j0:function(a,b,c){return J.l(a).cj(a,b,c)},
lB:function(a,b,c){return J.l(a).ck(a,b,c)},
jz:function(a,b,c){return J.l(a).cl(a,b,c)},
jA:function(a,b,c){return J.l(a).cm(a,b,c)},
jB:function(a,b,c){return J.l(a).cn(a,b,c)},
jC:function(a,b,c,d){return J.l(a).co(a,b,c,d)},
jD:function(a,b,c,d){return J.l(a).cp(a,b,c,d)},
lC:function(a,b){return J.l(a).cr(a,b)},
lD:function(a,b,c){return J.l(a).eL(a,b,c)},
jE:function(a,b,c,d,e,f,g){return J.l(a).ct(a,b,c,d,e,f,g)},
lE:function(a,b,c,d,e){return J.l(a).cu(a,b,c,d,e)},
a:function a(){},
eF:function eF(){},
eG:function eG(){},
bz:function bz(){},
fj:function fj(){},
b_:function b_(){},
aS:function aS(){},
aQ:function aQ(a){this.$ti=a},
j5:function j5(a){this.$ti=a},
dM:function dM(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
ba:function ba(){},
d_:function d_(){},
cZ:function cZ(){},
aR:function aR(){}},P={
mm:function(){var t,s,r
t={}
if(self.scheduleImmediate!=null)return P.mG()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
t.a=null
new self.MutationObserver(H.c_(new P.hm(t),1)).observe(s,{childList:true})
return new P.hl(t,s,r)}else if(self.setImmediate!=null)return P.mH()
return P.mI()},
mn:function(a){++u.globalState.f.b
self.scheduleImmediate(H.c_(new P.hn(a),0))},
mo:function(a){++u.globalState.f.b
self.setImmediate(H.c_(new P.ho(a),0))},
mp:function(a){P.jc(C.v,a)},
mB:function(a,b){if(H.bj(a,{func:1,args:[P.aW,P.aW]})){b.toString
return a}else{b.toString
return a}},
mr:function(a,b){var t,s,r
H.d(b.a<4)
H.d(!(a instanceof P.aw))
H.d(b.a===0)
b.a=1
try{a.cf(new P.hE(b),new P.hF(b))}catch(r){t=H.R(r)
s=H.aI(r)
P.n6(new P.hG(b,t,s))}},
ku:function(a,b){var t,s,r,q
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
P.bQ(b,q)}else{q=b.c
H.d(s<=1)
b.a=2
b.c=a
a.bC(q)}},
bQ:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
P.ik(null,null,p,o,s)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.bQ(t.a,b)}s=t.a
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
P.ik(null,null,p,o,s)
return}s=$.D
if(s==null?l!=null:s!==l){H.d(l!=null)
s=$.D
H.d(l==null?s!=null:l!==s)
j=$.D
$.D=l
i=j}else i=null
s=b.c
if(s===8)new P.hK(t,r,q,b).$0()
else if(p){if((s&1)!==0)new P.hJ(r,b,m).$0()}else if((s&2)!==0)new P.hI(t,r,b).$0()
if(i!=null){H.d(!0)
$.D=i}s=r.b
if(!!J.w(s).$isev){if(s.a>=4){H.d(o.a<4)
h=o.c
o.c=null
b=o.ae(h)
H.d(o.a<4)
H.d(s.a>=4)
o.a=s.a
o.c=s.c
t.a=s
continue}else P.ku(s,o)
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
mA:function(){var t,s
for(;t=$.bh,t!=null;){$.bY=null
s=t.b
$.bh=s
if(s==null)$.bX=null
t.a.$0()}},
mE:function(){$.ji=!0
try{P.mA()}finally{$.bY=null
$.ji=!1
if($.bh!=null)$.$get$je().$1(P.kG())}},
kB:function(a){var t=new P.du(a,null)
if($.bh==null){$.bX=t
$.bh=t
if(!$.ji)$.$get$je().$1(P.kG())}else{$.bX.b=t
$.bX=t}},
mD:function(a){var t,s,r
t=$.bh
if(t==null){P.kB(a)
$.bY=$.bX
return}s=new P.du(a,null)
r=$.bY
if(r==null){s.b=t
$.bY=s
$.bh=s}else{s.b=r.b
r.b=s
$.bY=s
if(s.b==null)$.bX=s}},
n6:function(a){var t=$.D
if(C.f===t){P.im(null,null,C.f,a)
return}t.toString
P.im(null,null,t,t.aV(a))},
mk:function(a,b){var t=$.D
if(t===C.f){t.toString
return P.jc(a,b)}return P.jc(a,t.aV(b))},
jc:function(a,b){var t=C.b.K(a.a,1000)
return H.mj(t<0?0:t,b)},
jd:function(a){var t,s
H.d(a!=null)
t=$.D
H.d(a==null?t!=null:a!==t)
s=$.D
$.D=a
return s},
ik:function(a,b,c,d,e){var t={}
t.a=d
P.mD(new P.il(t,e))},
kz:function(a,b,c,d){var t,s
if($.D===c)return d.$0()
t=P.jd(c)
try{s=d.$0()
return s}finally{s=t
H.d(s!=null)
$.D=s}},
kA:function(a,b,c,d,e){var t,s
if($.D===c)return d.$1(e)
t=P.jd(c)
try{s=d.$1(e)
return s}finally{s=t
H.d(s!=null)
$.D=s}},
mC:function(a,b,c,d,e,f){var t,s
if($.D===c)return d.$2(e,f)
t=P.jd(c)
try{s=d.$2(e,f)
return s}finally{s=t
H.d(s!=null)
$.D=s}},
im:function(a,b,c,d){var t=C.f!==c
if(t)d=!(!t||!1)?c.aV(d):c.dV(d)
P.kB(d)},
hm:function hm(a){this.a=a},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
hn:function hn(a){this.a=a},
ho:function ho(a){this.a=a},
hs:function hs(){},
ia:function ia(a,b){this.a=a
this.$ti=b},
dw:function dw(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hD:function hD(a,b){this.a=a
this.b=b},
hH:function hH(a,b){this.a=a
this.b=b},
hE:function hE(a){this.a=a},
hF:function hF(a){this.a=a},
hG:function hG(a,b,c){this.a=a
this.b=b
this.c=c},
hK:function hK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hL:function hL(a){this.a=a},
hJ:function hJ(a,b,c){this.a=a
this.b=b
this.c=c},
hI:function hI(a,b,c){this.a=a
this.b=b
this.c=c},
du:function du(a,b){this.a=a
this.b=b},
fM:function fM(){},
fO:function fO(a){this.a=a},
fP:function fP(a,b){this.a=a
this.b=b},
fN:function fN(){},
b6:function b6(a,b){this.a=a
this.b=b},
ii:function ii(){},
il:function il(a,b){this.a=a
this.b=b},
hX:function hX(){},
hZ:function hZ(a,b){this.a=a
this.b=b},
hY:function hY(a,b){this.a=a
this.b=b},
i_:function i_(a,b){this.a=a
this.b=b},
k5:function(a,b){return new H.ah(0,null,null,null,null,null,0,[a,b])},
O:function(){return new H.ah(0,null,null,null,null,null,0,[null,null])},
aU:function(a){return H.mP(a,new H.ah(0,null,null,null,null,null,0,[null,null]))},
bU:function(a,b){return new P.dx(0,null,null,null,null,null,0,[a,b])},
mv:function(){var t=Object.create(null)
H.d(t!=null)
t["<non-identifier-key>"]=t
delete t["<non-identifier-key>"]
return t},
m2:function(a,b,c){var t,s
if(P.jj(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}t=[]
s=$.$get$bZ()
C.a.j(s,a)
try{P.mz(a,t)}finally{H.d(C.a.gaA(s)===a)
s.pop()}s=P.kd(b,t,", ")+c
return s.charCodeAt(0)==0?s:s},
eD:function(a,b,c){var t,s,r
if(P.jj(a))return b+"..."+c
t=new P.bM(b)
s=$.$get$bZ()
C.a.j(s,a)
try{r=t
r.a=P.kd(r.ga4(),a,", ")}finally{H.d(C.a.gaA(s)===a)
s.pop()}s=t
s.a=s.ga4()+c
s=t.ga4()
return s.charCodeAt(0)==0?s:s},
jj:function(a){var t,s
for(t=0;s=$.$get$bZ(),t<s.length;++t)if(a===s[t])return!0
return!1},
mz:function(a,b){var t,s,r,q,p,o,n,m,l,k
t=a.gB(a)
s=0
r=0
while(!0){if(!(s<80||r<3))break
if(!t.p())return
q=H.f(t.gq())
C.a.j(b,q)
s+=q.length+2;++r}if(!t.p()){if(r<=5)return
p=b.pop()
o=b.pop()}else{n=t.gq();++r
if(!t.p()){if(r<=4){C.a.j(b,H.f(n))
return}p=H.f(n)
o=b.pop()
s+=p.length+2}else{m=t.gq();++r
H.d(r<100)
for(;t.p();n=m,m=l){l=t.gq();++r
if(r>100){while(!0){if(!(s>75&&r>3))break
s-=b.pop().length+2;--r}C.a.j(b,"...")
return}}o=H.f(n)
p=H.f(m)
s+=p.length+o.length+4}}if(r>b.length+2){s+=5
k="..."}else k=null
while(!0){if(!(s>80&&b.length>3))break
s-=b.pop().length+2
if(k==null){s+=5
k="..."}}if(k!=null)C.a.j(b,k)
C.a.j(b,o)
C.a.j(b,p)},
ai:function(a,b,c,d){return new P.hQ(0,null,null,null,null,null,0,[d])},
j9:function(a,b){var t,s
t=P.ai(null,null,null,b)
for(s=J.bm(a);s.p();)t.j(0,s.gq())
return t},
m5:function(a){var t,s,r
t={}
if(P.jj(a))return"{...}"
s=new P.bM("")
try{C.a.j($.$get$bZ(),a)
r=s
r.a=r.ga4()+"{"
t.a=!0
a.ax(0,new P.eQ(t,s))
t=s
t.a=t.ga4()+"}"}finally{t=$.$get$bZ()
H.d(C.a.gaA(t)===a)
t.pop()}t=s.ga4()
return t.charCodeAt(0)==0?t:t},
ja:function(a,b){var t=new P.eN(null,0,0,0,[b])
t.d6(a,b)
return t},
dx:function dx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hQ:function hQ(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
hR:function hR(a,b,c){this.a=a
this.b=b
this.c=c},
bT:function bT(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hO:function hO(){},
d0:function d0(){},
x:function x(){},
eQ:function eQ(a,b){this.a=a
this.b=b},
eN:function eN(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
hS:function hS(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
fC:function fC(){},
fB:function fB(){},
bI:function bI(){},
kd:function(a,b,c){var t=J.bm(b)
if(!t.p())return a
if(c.length===0){do a+=H.f(t.gq())
while(t.p())}else{a+=H.f(t.gq())
for(;t.p();)a=a+c+H.f(t.gq())}return a},
lL:function(a,b){return J.l8(a,b)},
lN:function(a){var t,s
t=Math.abs(a)
s=a<0?"-":""
if(t>=1000)return""+a
if(t>=100)return s+"0"+H.f(t)
if(t>=10)return s+"00"+H.f(t)
return s+"000"+H.f(t)},
lO:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c7:function(a){if(a>=10)return""+a
return"0"+a},
j3:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.az(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lS(a)},
lS:function(a){var t=J.w(a)
if(!!t.$isb7)return t.l(a)
return H.fp(a)},
jF:function(a){return new P.af(!1,null,null,a)},
jG:function(a,b,c){return new P.af(!0,a,b,c)},
lF:function(a){return new P.af(!1,null,a,"Must not be null")},
fq:function(a,b,c){return new P.dg(null,null,!0,a,b,"Value not in range")},
aY:function(a,b,c,d,e){return new P.dg(b,c,!0,a,d,"Invalid value")},
ka:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.aY(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.aY(b,a,c,"end",f))
return b},
C:function(a,b,c,d,e){var t=e!=null?e:J.dI(b)
return new P.ez(b,t,!0,a,c,"Index out of range")},
cd:function(a){return new P.hC(a)},
k6:function(a,b,c){var t,s
t=H.E([],[c])
for(s=J.bm(a);s.p();)C.a.j(t,s.gq())
if(b)return t
t.fixed$length=Array
return t},
an:function(a){H.iK(H.f(a))},
ay:function ay(){},
J:function J(){},
bo:function bo(a,b){this.a=a
this.b=b},
N:function N(){},
aP:function aP(a){this.a=a},
e1:function e1(){},
e2:function e2(){},
b9:function b9(){},
c4:function c4(a){this.a=a},
dd:function dd(){},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dg:function dg(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ez:function ez(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
u:function u(a){this.a=a},
ds:function ds(a){this.a=a},
aD:function aD(a){this.a=a},
a3:function a3(a){this.a=a},
dk:function dk(){},
dV:function dV(a){this.a=a},
hC:function hC(a){this.a=a},
e4:function e4(a,b,c){this.a=a
this.b=b
this.$ti=c},
o:function o(){},
Y:function Y(){},
cY:function cY(){},
b:function b(){},
aC:function aC(){},
aW:function aW(){},
X:function X(){},
p:function p(){},
bL:function bL(){},
t:function t(){},
bM:function bM(a){this.a=a},
ir:function(a){var t,s,r,q,p
if(a==null)return
t=P.O()
s=Object.getOwnPropertyNames(a)
for(r=s.length,q=0;q<s.length;s.length===r||(0,H.F)(s),++q){p=s[q]
t.i(0,p,a[p])}return t},
mM:function(a,b){var t
if(a==null)return
t={}
if(b!=null)b.$1(t)
J.lj(a,new P.iq(t))
return t},
jU:function(){var t=$.jT
if(t==null){t=J.iV(window.navigator.userAgent,"Opera",0)
$.jT=t}return t},
lP:function(){var t,s
t=$.jQ
if(t!=null)return t
s=$.jR
if(s==null){s=J.iV(window.navigator.userAgent,"Firefox",0)
$.jR=s}if(s)t="-moz-"
else{s=$.jS
if(s==null){s=!P.jU()&&J.iV(window.navigator.userAgent,"Trident/",0)
$.jS=s}if(s)t="-ms-"
else t=P.jU()?"-o-":"-webkit-"}$.jQ=t
return t},
iq:function iq(a){this.a=a},
n9:function(a){return Math.sqrt(a)},
hW:function hW(){},
K:function K(){},
dJ:function dJ(){},
aM:function aM(){},
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
em:function em(){},
eq:function eq(){},
es:function es(){},
ag:function ag(){},
aB:function aB(){},
ey:function ey(){},
ar:function ar(){},
eJ:function eJ(){},
eR:function eR(){},
eS:function eS(){},
as:function as(){},
f9:function f9(){},
fg:function fg(){},
fl:function fl(){},
fm:function fm(){},
fr:function fr(){},
fs:function fs(){},
bK:function bK(){},
fQ:function fQ(){},
I:function I(){},
fR:function fR(){},
fS:function fS(){},
dm:function dm(){},
fW:function fW(){},
bO:function bO(){},
at:function at(){},
h4:function h4(){},
hb:function hb(){},
hd:function hd(){},
he:function he(){},
bR:function bR(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
cz:function cz(){},
cl:function cl(){},
cq:function cq(){},
cv:function cv(){},
cJ:function cJ(){},
cK:function cK(){},
cM:function cM(){},
cS:function cS(){},
dN:function dN(){},
fw:function fw(){},
fx:function fx(){},
ie:function ie(){},
fH:function fH(){},
cA:function cA(){},
cN:function cN(){}},W={
lQ:function(a,b,c){var t,s
t=document.body
s=(t&&C.n).N(t,a,b,c)
s.toString
t=new H.dt(new W.U(s),new W.ip(),[W.r])
return t.ga3(t)},
lR:function(a){return"wheel"},
bq:function(a){var t,s,r
t="element tag unavailable"
try{s=J.ln(a)
if(typeof s==="string")t=a.tagName}catch(r){H.R(r)}return t},
mq:function(a,b){return document.createElement(a)},
b5:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kx:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
ak:function(a,b,c,d,e){var t=c==null?null:W.kC(new W.hB(c))
t=new W.hA(0,a,b,t,!1,[e])
t.di(a,b,c,!1,e)
return t},
kv:function(a){var t,s
t=document.createElement("a")
s=new W.i3(t,window.location)
s=new W.bS(s)
s.dj(a)
return s},
mt:function(a,b,c,d){return!0},
mu:function(a,b,c,d){var t,s,r,q,p
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
ky:function(){var t=P.t
t=new W.ib(P.j9(C.q,t),P.ai(null,null,null,t),P.ai(null,null,null,t),P.ai(null,null,null,t),null)
t.dl(null,new H.bA(C.q,new W.ic(),[H.aJ(C.q,0),null]),["TEMPLATE"],null)
return t},
kC:function(a){var t=$.D
if(t===C.f)return a
return t.dW(a)},
k:function k(){},
dK:function dK(){},
dL:function dL(){},
a2:function a2(){},
dO:function dO(){},
c5:function c5(){},
aN:function aN(){},
c6:function c6(){},
dQ:function dQ(){},
aO:function aO(){},
dT:function dT(){},
z:function z(){},
b8:function b8(){},
dU:function dU(){},
dW:function dW(){},
dX:function dX(){},
c8:function c8(){},
bp:function bp(){},
c9:function c9(){},
dY:function dY(){},
ca:function ca(){},
dZ:function dZ(){},
cb:function cb(){},
cc:function cc(){},
e_:function e_(){},
e0:function e0(){},
a4:function a4(){},
ip:function ip(){},
i:function i(){},
h:function h(){},
a5:function a5(){},
eo:function eo(){},
ep:function ep(){},
et:function et(){},
a6:function a6(){},
ch:function ch(){},
ew:function ew(){},
bx:function bx(){},
ci:function ci(){},
ex:function ex(){},
by:function by(){},
eA:function eA(){},
aT:function aT(){},
eO:function eO(){},
eU:function eU(){},
eW:function eW(){},
bB:function bB(){},
a7:function a7(){},
eX:function eX(){},
P:function P(){},
f6:function f6(){},
U:function U(a){this.a=a},
r:function r(){},
d9:function d9(){},
bH:function bH(){},
ff:function ff(){},
fi:function fi(){},
a8:function a8(){},
fk:function fk(){},
fn:function fn(){},
fo:function fo(){},
df:function df(){},
fy:function fy(){},
di:function di(){},
fA:function fA(){},
fD:function fD(){},
a9:function a9(){},
fE:function fE(){},
aa:function aa(){},
fG:function fG(){},
ab:function ab(){},
fL:function fL(){},
Z:function Z(){},
aj:function aj(){},
dl:function dl(){},
fT:function fT(){},
fU:function fU(){},
bN:function bN(){},
ac:function ac(){},
a_:function a_(){},
fX:function fX(){},
fY:function fY(){},
fZ:function fZ(){},
ad:function ad(){},
aZ:function aZ(){},
h2:function h2(){},
h3:function h3(){},
bf:function bf(){},
h5:function h5(){},
dq:function dq(){},
aF:function aF(){},
ha:function ha(){},
hc:function hc(){},
hf:function hf(){},
hg:function hg(){},
b0:function b0(){},
bP:function bP(){},
hi:function hi(a){this.a=a},
hj:function hj(){},
b1:function b1(){},
hr:function hr(){},
dv:function dv(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hM:function hM(){},
hN:function hN(){},
dy:function dy(){},
i4:function i4(){},
i7:function i7(){},
i8:function i8(){},
ig:function ig(){},
ih:function ih(){},
hp:function hp(){},
hw:function hw(a){this.a=a},
hz:function hz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jf:function jf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hA:function hA(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.$ti=f},
hB:function hB(a){this.a=a},
bS:function bS(a){this.a=a},
B:function B(){},
db:function db(a){this.a=a},
f8:function f8(a){this.a=a},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
bV:function bV(){},
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
cf:function cf(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
da:function da(){},
i3:function i3(a,b){this.a=a
this.b=b},
dA:function dA(a){this.a=a},
id:function id(a){this.a=a},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
cj:function cj(){},
cD:function cD(){},
cp:function cp(){},
cm:function cm(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cB:function cB(){},
cC:function cC(){},
ck:function ck(){},
cn:function cn(){},
co:function co(){},
cr:function cr(){},
cs:function cs(){},
ct:function ct(){},
cu:function cu(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cQ:function cQ(){},
cR:function cR(){},
cO:function cO(){},
cP:function cP(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cX:function cX(){},
cH:function cH(){},
cI:function cI(){},
cL:function cL(){},
cT:function cT(){}},B={
n7:function(a){var t,s
t=document
s=W.aT
W.ak(t,"keydown",new B.iM(),!1,s)
W.ak(t,"keyup",new B.iN(),!1,s)
if(!$.n8)W.ak(t,"mousemove",new B.iO(),!1,W.P)
s=W.P
W.ak(t,"mousedown",new B.iP(),!1,s)
W.ak(t,"mouseup",new B.iQ(),!1,s)},
m6:function(a,b,c,d){var t,s,r,q
t=new Float32Array(H.j(3))
s=$.$get$is()
r=$.$get$c0()
q=new T.S(new Float32Array(H.j(16)))
q.V()
q=new B.fa(a,b,c,0,new T.m(t),-0.02,s,r,q,new T.m(new Float32Array(H.j(3))),new T.m(new Float32Array(H.j(3))),new T.m(new Float32Array(H.j(3))),new T.m(new Float32Array(H.j(3))),"camera:orbit",!1,!0)
q.d7(a,b,c,d)
return q},
iM:function iM(){},
iN:function iN(){},
iO:function iO(){},
iP:function iP(){},
iQ:function iQ(){},
fa:function fa(a,b,c,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1){var _=this
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
fb:function fb(a){this.a=a},
fc:function fc(a){this.a=a},
fd:function fd(){},
fe:function fe(a){this.a=a},
lM:function(d1,d2,d3,d4,d5,d6,d7,d8){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0
t=-d6
s=-d7
r=new T.m(new Float32Array(H.j(3)))
r.u(t,s,d8)
q=new T.m(new Float32Array(H.j(3)))
q.u(d6,s,d8)
p=new T.m(new Float32Array(H.j(3)))
p.u(d6,d7,d8)
o=new T.m(new Float32Array(H.j(3)))
o.u(t,d7,d8)
n=-d8
m=new T.m(new Float32Array(H.j(3)))
m.u(t,s,n)
l=new T.m(new Float32Array(H.j(3)))
l.u(t,d7,n)
k=new T.m(new Float32Array(H.j(3)))
k.u(d6,d7,n)
j=new T.m(new Float32Array(H.j(3)))
j.u(d6,s,n)
i=new T.m(new Float32Array(H.j(3)))
i.u(t,d7,n)
h=new T.m(new Float32Array(H.j(3)))
h.u(t,d7,d8)
g=new T.m(new Float32Array(H.j(3)))
g.u(d6,d7,d8)
f=new T.m(new Float32Array(H.j(3)))
f.u(d6,d7,n)
e=new T.m(new Float32Array(H.j(3)))
e.u(d6,s,d8)
d=new T.m(new Float32Array(H.j(3)))
d.u(t,s,d8)
c=new T.m(new Float32Array(H.j(3)))
c.u(t,s,n)
b=new T.m(new Float32Array(H.j(3)))
b.u(d6,s,n)
a=new T.m(new Float32Array(H.j(3)))
a.u(d6,s,n)
a0=new T.m(new Float32Array(H.j(3)))
a0.u(d6,d7,n)
a1=new T.m(new Float32Array(H.j(3)))
a1.u(d6,d7,d8)
a2=new T.m(new Float32Array(H.j(3)))
a2.u(d6,s,d8)
a3=new T.m(new Float32Array(H.j(3)))
a3.u(t,s,n)
a4=new T.m(new Float32Array(H.j(3)))
a4.u(t,s,d8)
s=new T.m(new Float32Array(H.j(3)))
s.u(t,d7,d8)
a5=new T.m(new Float32Array(H.j(3)))
a5.u(t,d7,n)
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
c8=new G.cg(!1,[],[],[],P.O())
c8.aq("aTexUV")
c8.aq("aNormal")
c8.cX(6)
c8.cY([r,q,p,o,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,s,a5])
c8.bf("aTexUV",[new T.v(n),new T.v(t),new T.v(a6),new T.v(a7),new T.v(a8),new T.v(a9),new T.v(b0),new T.v(b1),new T.v(b2),new T.v(b3),new T.v(b4),new T.v(b5),new T.v(b6),new T.v(b7),new T.v(b8),new T.v(b9),new T.v(c0),new T.v(c1),new T.v(c2),new T.v(c3),new T.v(c4),new T.v(c5),new T.v(c6),new T.v(c7)])
for(c9=0;t=$.$get$kt(),c9<6;++c9){d0=t[c9]
c8.bg("aNormal",[d0,d0,d0,d0])}return c8},
lW:function(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
t=[]
s=[]
C.a.I(t,$.$get$k_())
C.a.I(s,$.$get$k0())
for(r=0;r<a3;++r,t=q){q=[]
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.F)(t),++o){n=t[o]
m=n.a
l=s[m]
k=new T.m(new Float32Array(3))
k.D(l)
l=n.b
k.j(0,s[l])
k.U(0,0.5)
k.F(0)
j=s[l]
i=new T.m(new Float32Array(3))
i.D(j)
j=n.c
i.j(0,s[j])
i.U(0,0.5)
i.F(0)
h=s[j]
g=new T.m(new Float32Array(3))
g.D(h)
g.j(0,s[m])
g.U(0,0.5)
g.F(0)
f=s.length
C.a.j(s,k)
e=s.length
C.a.j(s,i)
d=s.length
C.a.j(s,g)
C.a.j(q,new G.A(m,f,d))
C.a.j(q,new G.A(l,e,f))
C.a.j(q,new G.A(j,d,e))
C.a.j(q,new G.A(f,e,d))}}c=new G.cg(!1,[],[],[],P.O())
c.aq("aTexUV")
c.aq("aNormal")
for(p=t.length,o=0;o<t.length;t.length===p||(0,H.F)(t),++o){n=t[o]
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
c.bg("aNormal",[b,a,a0])
m=new T.m(new Float32Array(3))
m.D(b)
m.U(0,a4)
l=new T.m(new Float32Array(3))
l.D(a)
l.U(0,a4)
a2=new T.m(new Float32Array(3))
a2.D(a0)
a2.U(0,a4)
c.cZ([m,l,a2])
c.bf("aTexUV",[new T.v(j),new T.v(h),new T.v(a1)])}return c}},G={
ml:function(a){var t,s,r
t=a.split("\n")
for(s=0;s<t.length;s=r){r=s+1
t[s]=""+r+": "+H.f(t[s])}return C.a.ak(t,"\n")},
ks:function(a,b,c){var t,s,r,q
t=J.l(a)
s=t.bY(a,b)
t.ba(a,s,c)
t.bV(a,s)
r=t.b6(a,s,35713)
if(r!=null&&!r){q=t.b5(a,s)
P.an("E:Compilation failed:")
P.an("E:"+G.ml(c))
P.an("E:Failure:")
P.an(C.i.a2("E:",q))
throw H.e(q)}return s},
jY:function(a,b){var t,s
t=a.length
b=new Float32Array(t*3)
for(s=0;s<a.length;++s){t=s*3
b[t]=J.iY(a[s])
b[t+1]=J.iZ(a[s])
b[t+2]=J.jx(a[s])}return b},
lU:function(a,b){var t,s
t=a.length
b=new Float32Array(t*2)
for(s=0;s<a.length;++s){t=s*2
b[t]=J.iY(a[s])
b[t+1]=J.iZ(a[s])}return b},
lV:function(a,b){var t,s
t=a.length
b=new Float32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.iY(a[s])
b[t+1]=J.iZ(a[s])
b[t+2]=J.jx(a[s])
b[t+3]=J.lo(a[s])}return b},
lT:function(a,b){var t,s
t=a.length
b=new Uint32Array(t*4)
for(s=0;s<a.length;++s){t=s*4
b[t]=J.bk(a[s],0)
b[t+1]=J.bk(a[s],1)
b[t+2]=J.bk(a[s],2)
b[t+3]=J.bk(a[s],3)}return b},
ms:function(a,b){var t,s,r,q,p,o,n,m,l,k,j
for(t=a.e,s=t.gH(t),s=s.gB(s),r=b.x,q=[[P.b,P.o]],p=[P.N],o=[T.aG],n=[T.m],m=[T.v];s.p();){l=s.gq()
if(!r.G(0,l)){k="Dropping unnecessary attribute: "+H.f(l)
if($.kL>0)H.iK("I: "+k)
continue}j=t.h(0,l)
switch($.$get$V().h(0,l).a){case"vec2":b.aa(l,G.lU(H.dE(j,"$isb",m,"$asb"),null),2)
break
case"vec3":b.aa(l,G.jY(H.dE(j,"$isb",n,"$asb"),null),3)
break
case"vec4":b.aa(l,G.lV(H.dE(j,"$isb",o,"$asb"),null),4)
break
case"float":b.aa(l,new Float32Array(H.ij(H.dE(j,"$isb",p,"$asb"))),1)
break
case"uvec4":b.aa(l,G.lT(H.dE(j,"$isb",q,"$asb"),null),4)
break
default:if(H.ax(!1))H.aH("unknown type for "+H.f(l)+" ["+J.lm(j[0]).l(0)+"] ["+new H.aE(H.iw(j),null).l(0)+"] "+H.f(j))}}},
jZ:function(a,b,c){var t,s,r,q,p,o,n,m
t=b.d
s=b.e.x
r=P.O()
q=J.la(t.a)
p=new G.eV(t,q,4,r,s,null,0,-1,null,null,P.O(),"meshdata:"+a,!1,!0)
o=G.jY(c.d,null)
r.i(0,"aPosition",J.iW(t.a))
p.ch=o
p.bi("aPosition",o,3)
n=$.$get$V().h(0,"aPosition")
if(n==null)H.G("Unknown canonical aPosition")
H.d(s.G(0,"aPosition"))
m=s.h(0,"aPosition")
J.dG(t.a,q)
t.c5(0,m,0)
s=r.h(0,"aPosition")
r=n.bj()
J.dF(t.a,34962,s)
J.jE(t.a,m,r,5126,!1,0,0)
s=c.d3()
p.y=J.iW(t.a)
H.d(p.ch!=null)
r=p.ch.length
if(r<768){p.saO(new Uint8Array(H.ij(s)))
p.Q=5121}else if(r<196608){p.saO(new Uint16Array(H.ij(s)))
p.Q=5123}else{p.saO(new Uint32Array(H.ij(s)))
p.Q=5125}J.dG(t.a,q)
s=p.y
r=p.cx
q=J.w(r)
H.d(!!q.$iskp||!!q.$iskq||!!q.$iskr)
J.dF(t.a,34963,s)
J.jw(t.a,34963,r,35048)
G.ms(c,p)
return p},
kb:function(a,b,c,d){var t,s,r,q,p,o,n
t=P.ai(null,null,null,P.t)
s=c.b
r=d.b
q=c.f
p=J.l9(b.a)
o=G.ks(b.a,35633,s)
J.ju(b.a,p,o)
n=G.ks(b.a,35632,r)
J.ju(b.a,p,n)
if(q.length>0)J.ly(b.a,p,q,35980)
J.ls(b.a,p)
if(!J.lr(b.a,p,35714))H.G(J.lq(b.a,p))
t=new G.fv(b,c,d,p,P.j9(c.c,null),P.O(),P.O(),t,null,a,!1,!0)
t.d9(a,b,c,d)
return t},
eY:function eY(){},
dr:function dr(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
dP:function dP(){},
dS:function dS(a,b){this.a=a
this.b=b},
eu:function eu(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
en:function en(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cg:function cg(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dp:function dp(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
eT:function eT(a,b,c,d){var _=this
_.d=a
_.a=b
_.b=c
_.c=d},
eV:function eV(a,b,c,d,e,f,a0,a1,a2,a3,a4,a5,a6,a7){var _=this
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
fh:function fh(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
fv:function fv(a,b,c,d,e,f,g,h,a0,a1,a2,a3){var _=this
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
be:function be(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
fF:function fF(){}},R={dh:function dh(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
_.c=a5},fJ:function fJ(){},fK:function fK(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f}},A={
kJ:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l
t=b.dx
t.D(c)
s=b.d
t.c9(0,s)
r=b.cx
J.az(b)
q=C.a.gaA(e)
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
p.e2(new T.aV(o))
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
a.d2(r,e,d)
e.pop()
for(s=b.cy,r=s.length,l=0;l<s.length;s.length===r||(0,H.F)(s),++l)A.kJ(a,s[l],t,d,e)},
d8:function d8(a,b,c,d,e,f,g,a0,a1,a2,a3,a4,a5){var _=this
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
bJ:function bJ(a,b,c,d,e,f){var _=this
_.d=a
_.e=b
_.f=c
_.a=d
_.b=e
_.c=f},
fu:function fu(){},
dC:function(a){var t,s
t=C.V.eh(a,0,new A.ix())
s=536870911&t+(C.b.cv(67108863,t)<<3>>>0)
s^=s>>>11
return 536870911&s+((16383&s)<<15)},
ix:function ix(){}},T={
L:function(a,b,c){var t=new T.m(new Float32Array(H.j(3)))
t.u(a,b,c)
return t},
aV:function aV(a){this.a=a},
S:function S(a){this.a=a},
v:function v(a){this.a=a},
m:function m(a){this.a=a},
aG:function aG(a){this.a=a}},Q={
n1:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
t={}
s=document
r=new R.fK(0,0,null,null,null,null)
r.da(C.p.cB(s,"stats"),"blue","gray")
q=C.p.ex(s,"#webgl-canvas")
p=q.clientWidth
o=q.clientHeight
q.width=p
q.height=o
n=new G.dS(null,q)
s=(q&&C.H).cA(q,"webgl2",P.aU(["alpha",!1,"depth",!0,"stencil",!0,"antialias",!0,"premultipliedAlpha",!0,"preserveDrawingBuffer",!1,"failIfMajorPerformanceCaveat",!1]))
n.a=s
if(s==null)H.G(P.cd('Calling canvas.getContext("webgl2") failed,\nmake sure you run on a computer that supports WebGL2.\n\nYou can test your browser\'s compatibility here: http://webglreport.com/\n\n(If you are using Dartium make sure you start it with the\noption: --enable-unsafe-es3-apis)\n'))
m="ChronosGL Config: "+J.az(J.lp(s))
if($.kL>0)P.an("I: "+m)
J.l7(s,0,0,0,1)
J.dH(s,2929)
l=B.m6(25,0,0,q)
s=new T.S(new Float32Array(H.j(16)))
s.V()
m=new T.S(new Float32Array(H.j(16)))
m.V()
k=new G.fh(l,50,1,0.1,1000,s,m,new T.S(new Float32Array(H.j(16))),P.O(),"perspective",!1,!0)
k.bm()
m=H.E([],[A.bJ])
j=new R.dh(q,k,null,n,m,17664,0,0,0,0,"main",!1,!0)
j.d8("main",n,null)
j.cb(null)
W.ak(window,"resize",j.geB(),!1,W.i)
s=G.kb("building",n,$.$get$kV(),$.$get$kU())
i=new A.bJ(s,[k],[],"building",!1,!0)
H.d(!0)
C.a.j(m,i)
s=G.kb("sky",n,$.$get$kI(),$.$get$kH())
h=[]
H.d(!0)
C.a.j(m,new A.bJ(s,[k],h,"sky",!1,!0))
g=new G.eT(P.O(),"mat",!1,!0)
g.ar("cDepthTest",!0)
g.ar("cDepthWrite",!0)
g.ar("cBlendEquation",$.$get$jH())
g.ar("cStencilFunc",$.$get$kc())
f=G.jZ("icosahedron-3",s,B.lW(3,1,!0))
s=new Float32Array(H.j(9))
m=new T.S(new Float32Array(H.j(16)))
m.V()
e=new T.S(new Float32Array(H.j(16)))
e.V()
d=new Float32Array(H.j(3))
c=new Float32Array(H.j(3))
b=new Float32Array(H.j(3))
a=new Float32Array(H.j(3))
e.U(0,100)
H.d(!0)
C.a.j(h,new A.d8(g,f,[],new T.aV(s),m,e,new T.m(d),new T.m(c),new T.m(b),new T.m(a),f.a,!1,!0))
a=new Float32Array(H.j(2))
a0=new T.v(a)
a[0]=0.01
a[1]=0.01
a1=B.lM(!0,0.99,0.01,0.99,0.01,1,2,1)
a2=a1.e.h(0,"aTexUV")
for(a3=8;a3<16;++a3)a2[a3].D(a0)
a4=G.jZ("house",i.d,a1)
for(s=i.f,m=a4.a,a5=-10;a5<10;a5+=4)for(a6=-10;a6<10;a6+=4){h=new Float32Array(9)
e=new T.S(new Float32Array(16))
e.V()
d=new Float32Array(16)
c=new T.S(d)
c.V()
b=new Float32Array(3)
a=new Float32Array(3)
a7=new Float32Array(3)
a8=new Float32Array(3)
d[12]=a5
d[13]=0
d[14]=a6
H.d(!0)
C.a.j(s,new A.d8(g,a4,[],new T.aV(h),e,c,new T.m(b),new T.m(a),new T.m(a7),new T.m(a8),m,!1,!0))}t.a=0
new Q.iI(t,r,l,j).$1(0)},
iI:function iI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}}
var v=[C,H,J,P,W,B,G,R,A,T,Q]
setFunctionNamesIfNecessary(v)
var $={}
H.j6.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gw:function(a){return H.aX(a)},
l:function(a){return H.fp(a)},
gC:function(a){return new H.aE(H.iw(a),null)}}
J.eF.prototype={
l:function(a){return String(a)},
gw:function(a){return a?519018:218159},
gC:function(a){return C.ap},
$isay:1}
J.eG.prototype={
A:function(a,b){return null==b},
l:function(a){return"null"},
gw:function(a){return 0},
gC:function(a){return C.aj}}
J.bz.prototype={
gw:function(a){return 0},
gC:function(a){return C.ai},
l:function(a){return String(a)},
$isk4:1}
J.fj.prototype={}
J.b_.prototype={}
J.aS.prototype={
l:function(a){var t=a[$.$get$jP()]
return t==null?this.cU(a):J.az(t)},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$isj4:1}
J.aQ.prototype={
aX:function(a,b){if(!!a.immutable$list)throw H.e(new P.u(b))},
aW:function(a,b){if(!!a.fixed$length)throw H.e(new P.u(b))},
j:function(a,b){this.aW(a,"add")
a.push(b)},
I:function(a,b){var t,s,r,q,p
t=a.length
this.aW(a,"addAll")
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r,t=p){q=b[r]
p=t+1
H.d(t===a.length||H.G(new P.a3(a)))
a.push(q)}},
c8:function(a,b){return new H.bA(a,b,[H.aJ(a,0),null])},
ak:function(a,b){var t,s
t=new Array(a.length)
t.fixed$length=Array
for(s=0;s<a.length;++s)t[s]=H.f(a[s])
return t.join(b)},
t:function(a,b){return this.h(a,b)},
geg:function(a){if(a.length>0)return a[0]
throw H.e(H.eE())},
gaA:function(a){var t=a.length
if(t>0)return a[t-1]
throw H.e(H.eE())},
b9:function(a,b,c,d,e){var t,s
this.aX(a,"setRange")
P.ka(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
if(e<0)H.G(P.aY(e,0,null,"skipCount",null))
if(e+t>d.length)throw H.e(H.m3())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=d[e+s]
else for(s=0;s<t;++s)a[b+s]=d[e+s]},
bL:function(a,b){var t,s
t=a.length
for(s=0;s<t;++s){if(b.$1(a[s]))return!0
if(a.length!==t)throw H.e(new P.a3(a))}return!1},
cP:function(a,b){this.aX(a,"sort")
H.dj(a,0,a.length-1,P.mN())},
aF:function(a){return this.cP(a,null)},
E:function(a,b){var t
for(t=0;t<a.length;++t)if(J.H(a[t],b))return!0
return!1},
l:function(a){return P.eD(a,"[","]")},
gB:function(a){return new J.dM(a,a.length,0,null,[H.aJ(a,0)])},
gw:function(a){return H.aX(a)},
gk:function(a){return a.length},
sk:function(a,b){this.aW(a,"set length")
if(b<0)throw H.e(P.aY(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.Q(a,b))
if(b>=a.length||b<0)throw H.e(H.Q(a,b))
return a[b]},
i:function(a,b,c){this.aX(a,"indexed set")
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.Q(a,b))
if(b>=a.length||b<0)throw H.e(H.Q(a,b))
a[b]=c},
$isn:1,
$asn:function(){},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
J.j5.prototype={}
J.dM.prototype={
gq:function(){return this.d},
p:function(){var t,s,r
t=this.a
s=t.length
if(this.b!==s)throw H.e(H.F(t))
r=this.c
if(r>=s){this.sbn(null)
return!1}this.sbn(t[r]);++this.c
return!0},
sbn:function(a){this.d=a}}
J.ba.prototype={
R:function(a,b){var t
if(typeof b!=="number")throw H.e(H.W(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){t=this.gay(b)
if(this.gay(a)===t)return 0
if(this.gay(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gay:function(a){return a===0?1/a<0:a<0},
dY:function(a){var t,s
if(a>=0){if(a<=2147483647){t=a|0
return a===t?t:t+1}}else if(a>=-2147483648)return a|0
s=Math.ceil(a)
if(isFinite(s))return s
throw H.e(new P.u(""+a+".ceil()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.u(""+a+".round()"))},
dZ:function(a,b,c){if(this.R(b,c)>0)throw H.e(H.W(b))
if(this.R(a,b)<0)return b
if(this.R(a,c)>0)return c
return a},
eJ:function(a,b){var t
if(b>20)throw H.e(P.aY(b,0,20,"fractionDigits",null))
t=a.toFixed(b)
if(a===0&&this.gay(a))return"-"+t
return t},
l:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gw:function(a){return a&0x1FFFFFFF},
a2:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a+b},
a9:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a-b},
cw:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a/b},
v:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a*b},
aH:function(a,b){if((a|0)===a)if(b>=1||!1)return a/b|0
return this.bH(a,b)},
K:function(a,b){return(a|0)===a?a/b|0:this.bH(a,b)},
bH:function(a,b){var t=a/b
if(t>=-2147483648&&t<=2147483647)return t|0
if(t>0){if(t!==1/0)return Math.floor(t)}else if(t>-1/0)return Math.ceil(t)
throw H.e(new P.u("Result of truncating division is "+H.f(t)+": "+H.f(a)+" ~/ "+b))},
aS:function(a,b){var t
if(a>0)t=b>31?0:a>>>b
else{t=b>31?31:b
t=a>>t>>>0}return t},
cv:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return(a&b)>>>0},
cW:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return(a^b)>>>0},
aE:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a<b},
ao:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a>b},
cz:function(a,b){if(typeof b!=="number")throw H.e(H.W(b))
return a>=b},
gC:function(a){return C.as},
$isX:1}
J.d_.prototype={
gC:function(a){return C.ar},
$isN:1,
$iso:1,
$isX:1}
J.cZ.prototype={
gC:function(a){return C.aq},
$isN:1,
$isX:1}
J.aR.prototype={
aJ:function(a,b){if(b>=a.length)throw H.e(H.Q(a,b))
return a.charCodeAt(b)},
a2:function(a,b){if(typeof b!=="string")throw H.e(P.jG(b,null,null))
return a+b},
cQ:function(a,b,c){var t
if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
t=c+b.length
if(t>a.length)return!1
return b===a.substring(c,t)},
bb:function(a,b){return this.cQ(a,b,0)},
bd:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.fq(b,null,null))
if(b>c)throw H.e(P.fq(b,null,null))
if(c>a.length)throw H.e(P.fq(c,null,null))
return a.substring(b,c)},
cR:function(a,b){return this.bd(a,b,null)},
eI:function(a){return a.toLowerCase()},
e0:function(a,b,c){if(c>a.length)throw H.e(P.aY(c,0,a.length,null,null))
return H.na(a,b,c)},
R:function(a,b){var t
if(typeof b!=="string")throw H.e(H.W(b))
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
gC:function(a){return C.ak},
gk:function(a){return a.length},
h:function(a,b){if(b>=a.length||!1)throw H.e(H.Q(a,b))
return a[b]},
$isn:1,
$asn:function(){},
$ist:1}
H.c.prototype={$asc:null}
H.bb.prototype={
gB:function(a){return new H.d1(this,this.gk(this),0,null,[H.am(this,"bb",0)])},
aC:function(a,b){return this.cT(0,b)},
eH:function(a,b){var t,s
t=H.E([],[H.am(this,"bb",0)])
C.a.sk(t,this.gk(this))
for(s=0;s<this.gk(this);++s)t[s]=this.t(0,s)
return t},
eG:function(a){return this.eH(a,!0)}}
H.d1.prototype={
gq:function(){return this.d},
p:function(){var t,s,r,q
t=this.a
s=J.ae(t)
r=s.gk(t)
if(this.b!==r)throw H.e(new P.a3(t))
q=this.c
if(q>=r){this.sac(null)
return!1}this.sac(s.t(t,q));++this.c
return!0},
sac:function(a){this.d=a}}
H.d2.prototype={
gB:function(a){return new H.eP(null,J.bm(this.a),this.b,this.$ti)},
gk:function(a){return J.dI(this.a)},
$asY:function(a,b){return[b]}}
H.e3.prototype={$isc:1,
$asc:function(a,b){return[b]}}
H.eP.prototype={
p:function(){var t=this.b
if(t.p()){this.sac(this.c.$1(t.gq()))
return!0}this.sac(null)
return!1},
gq:function(){return this.a},
sac:function(a){this.a=a},
$ascY:function(a,b){return[b]}}
H.bA.prototype={
gk:function(a){return J.dI(this.a)},
t:function(a,b){return this.b.$1(J.lg(this.a,b))},
$asc:function(a,b){return[b]},
$asbb:function(a,b){return[b]},
$asY:function(a,b){return[b]}}
H.dt.prototype={
gB:function(a){return new H.hh(J.bm(this.a),this.b,this.$ti)}}
H.hh.prototype={
p:function(){var t,s
for(t=this.a,s=this.b;t.p();)if(s.$1(t.gq()))return!0
return!1},
gq:function(){return this.a.gq()}}
H.ce.prototype={}
H.iR.prototype={
$0:function(){this.b.$1(this.a.a)},
$S:function(){return{func:1}}}
H.iS.prototype={
$0:function(){this.b.$2(this.a.a,null)},
$S:function(){return{func:1}}}
H.hU.prototype={
seq:function(a){this.z=a},
seu:function(a){this.ch=a}}
H.b3.prototype={
bK:function(a,b){if(!this.f.A(0,a))return
if(this.Q.j(0,b)&&!this.y)this.y=!0
this.aU()},
eA:function(a){var t,s,r,q,p
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
if(q===r.c)r.bA();++r.d}this.y=!1}this.aU()},
dP:function(a,b){var t,s,r
if(this.ch==null)this.ch=[]
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){this.ch[s+1]=b
return}(r&&C.a).j(r,a)
t=this.ch;(t&&C.a).j(t,b)},
ez:function(a){var t,s,r
if(this.ch==null)return
for(t=J.w(a),s=0;r=this.ch,s<r.length;s+=2)if(t.A(a,r[s])){t=this.ch
r=s+2
t.toString
if(typeof t!=="object"||t===null||!!t.fixed$length)H.G(new P.u("removeRange"))
P.ka(s,r,t.length,null,null,null)
t.splice(s,r-s)
return}},
cL:function(a,b){if(!this.r.A(0,a))return
this.db=b},
ek:function(a,b,c){var t
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){a.J(0,c)
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ja(null,null)
this.cx=t}t.W(0,new H.hP(a,c))},
ej:function(a,b){var t
if(!this.r.A(0,a))return
if(b!==0)t=b===1&&!this.cy
else t=!0
if(t){this.az()
return}H.d(b===1)
t=this.cx
if(t==null){t=P.ja(null,null)
this.cx=t}t.W(0,this.ger())},
el:function(a,b){var t,s,r
t=this.dx
if(t.a===0){if(this.db&&this===u.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.an(a)
if(b!=null)P.an(b)}return}s=new Array(2)
s.fixed$length=Array
s[0]=J.az(a)
s[1]=b==null?null:b.l(0)
for(r=new P.bT(t,t.r,null,null,[null]),r.c=t.e;r.p();)r.d.J(0,s)},
ag:function(a){var t,s,r,q,p,o,n
t=u.globalState.d
u.globalState.d=this
$=this.d
s=null
r=this.cy
this.cy=!0
try{s=a.$0()}catch(o){q=H.R(o)
p=H.aI(o)
this.el(q,p)
if(this.db){this.az()
if(this===u.globalState.e)throw o}}finally{this.cy=H.mJ(r)
u.globalState.d=H.jn(t,"$isb3")
if(t!=null)$=t.gep()
if(this.cx!=null)for(;n=this.cx,!n.gaj(n);)this.cx.ca().$0()}return s},
c7:function(a){return this.b.h(0,a)},
br:function(a,b){var t=this.b
if(t.G(0,a))throw H.e(P.cd("Registry: ports must be registered only once."))
t.i(0,a,b)},
aU:function(){var t=this.b
if(t.gk(t)-this.c.a>0||this.y||!this.x)u.globalState.z.i(0,this.a,this)
else this.az()},
az:function(){var t,s,r
t=this.cx
if(t!=null)t.Y(0)
for(t=this.b,s=t.gcs(t),s=s.gB(s);s.p();)s.gq().dq()
t.Y(0)
this.c.Y(0)
u.globalState.z.al(0,this.a)
this.dx.Y(0)
if(this.ch!=null){for(r=0;t=this.ch,r<t.length;r+=2)t[r].J(0,t[r+1])
this.ch=null}},
gep:function(){return this.d},
ge1:function(){return this.e}}
H.hP.prototype={
$0:function(){this.a.J(0,this.b)},
$S:function(){return{func:1,v:true}}}
H.hx.prototype={
e8:function(){var t=this.a
if(t.b===t.c)return
return t.ca()},
cd:function(){var t,s,r
t=this.e8()
if(t==null){if(u.globalState.e!=null)if(u.globalState.z.G(0,u.globalState.e.a))if(u.globalState.r){s=u.globalState.e.b
s=s.gaj(s)}else s=!1
else s=!1
else s=!1
if(s)H.G(P.cd("Program exited with open ReceivePorts."))
s=u.globalState
if(s.x){r=s.z
r=r.gaj(r)&&s.f.b===0}else r=!1
if(r){s=s.Q
r=P.aU(["command","close"])
r=new H.al(!0,new P.dx(0,null,null,null,null,null,0,[null,P.o])).L(r)
s.toString
self.postMessage(r)}return!1}t.ew()
return!0},
bF:function(){if(self.window!=null)new H.hy(this).$0()
else for(;this.cd(););},
am:function(){var t,s,r,q,p
if(!u.globalState.x)this.bF()
else try{this.bF()}catch(r){t=H.R(r)
s=H.aI(r)
q=u.globalState.Q
p=P.aU(["command","error","msg",H.f(t)+"\n"+H.f(s)])
p=new H.al(!0,P.bU(null,P.o)).L(p)
q.toString
self.postMessage(p)}}}
H.hy.prototype={
$0:function(){if(!this.a.cd())return
P.mk(C.v,this)},
$S:function(){return{func:1,v:true}}}
H.b4.prototype={
ew:function(){var t=this.a
if(t.y){C.a.j(t.z,this)
return}t.ag(this.b)}}
H.hT.prototype={}
H.eB.prototype={
$0:function(){H.m_(this.a,this.b,this.c,this.d,this.e,this.f)},
$S:function(){return{func:1}}}
H.eC.prototype={
$0:function(){var t,s
t=this.e
t.x=!0
if(!this.d)this.a.$1(this.c)
else{s=this.a
if(H.bj(s,{func:1,args:[,,]}))s.$2(this.b,this.c)
else if(H.bj(s,{func:1,args:[,]}))s.$1(this.b)
else s.$0()}t.aU()},
$S:function(){return{func:1,v:true}}}
H.hq.prototype={}
H.bg.prototype={
J:function(a,b){var t,s,r
t=u.globalState.z.h(0,this.a)
if(t==null)return
s=this.b
if(s.c)return
r=H.mx(b)
if(t.ge1()===s){s=J.ae(r)
switch(s.h(r,0)){case"pause":t.bK(s.h(r,1),s.h(r,2))
break
case"resume":t.eA(s.h(r,1))
break
case"add-ondone":t.dP(s.h(r,1),s.h(r,2))
break
case"remove-ondone":t.ez(s.h(r,1))
break
case"set-errors-fatal":t.cL(s.h(r,1),s.h(r,2))
break
case"ping":t.ek(s.h(r,1),s.h(r,2),s.h(r,3))
break
case"kill":t.ej(s.h(r,1),s.h(r,2))
break
case"getErrors":s=s.h(r,1)
t.dx.j(0,s)
break
case"stopErrors":s=s.h(r,1)
t.dx.al(0,s)
break}return}u.globalState.f.a.W(0,new H.b4(t,new H.hV(this,r),"receive"))},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.bg){t=this.b
s=b.b
s=t==null?s==null:t===s
t=s}else t=!1
return t},
gw:function(a){return this.b.a}}
H.hV.prototype={
$0:function(){var t=this.a.b
if(!t.c)t.dm(0,this.b)},
$S:function(){return{func:1}}}
H.bW.prototype={
J:function(a,b){var t,s,r
t=P.aU(["command","message","port",this,"msg",b])
s=new H.al(!0,P.bU(null,P.o)).L(t)
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
gw:function(a){return C.b.cW((this.b<<16^this.a<<8)>>>0,this.c)}}
H.bd.prototype={
dq:function(){this.c=!0
this.b=null},
dm:function(a,b){if(this.c)return
this.b.$1(b)},
$isme:1}
H.h_.prototype={
dc:function(a,b){var t,s
if(a===0)t=self.setTimeout==null||u.globalState.x
else t=!1
if(t){this.c=1
t=u.globalState.f
s=u.globalState.d
t.a.W(0,new H.b4(s,new H.h0(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++u.globalState.f.b
this.c=self.setTimeout(H.c_(new H.h1(this,b),0),a)}else{H.d(a>0)
throw H.e(new P.u("Timer greater than 0."))}}}
H.h0.prototype={
$0:function(){this.a.c=null
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.h1.prototype={
$0:function(){this.a.c=null
H.iH()
this.b.$0()},
$S:function(){return{func:1,v:true}}}
H.aq.prototype={
gw:function(a){var t=this.a
t=C.b.aS(t,0)^C.b.K(t,4294967296)
t=(~t>>>0)+(t<<15>>>0)&4294967295
t=((t^t>>>12)>>>0)*5&4294967295
t=((t^t>>>4)>>>0)*2057&4294967295
return(t^t>>>16)>>>0},
A:function(a,b){var t,s
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.aq){t=this.a
s=b.a
return t==null?s==null:t===s}return!1}}
H.al.prototype={
L:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
t=this.b
s=t.h(0,a)
if(s!=null)return["ref",s]
t.i(0,a,t.gk(t))
t=J.w(a)
if(!!t.$isbC)return["buffer",a]
if(!!t.$isbc)return["typed",a]
if(!!t.$isn)return this.cH(a)
if(!!t.$islX){r=this.gcE()
q=t.gH(a)
q=H.jb(q,r,H.am(q,"Y",0),null)
q=P.k6(q,!0,H.am(q,"Y",0))
t=t.gcs(a)
t=H.jb(t,r,H.am(t,"Y",0),null)
return["map",q,P.k6(t,!0,H.am(t,"Y",0))]}if(!!t.$isk4)return this.cI(a)
if(!!t.$isa)this.cq(a)
if(!!t.$isme)this.an(a,"RawReceivePorts can't be transmitted:")
if(!!t.$isbg)return this.cJ(a)
if(!!t.$isbW)return this.cK(a)
if(!!t.$isb7){p=a.$static_name
if(p==null)this.an(a,"Closures can't be transmitted:")
return["function",p]}if(!!t.$isaq)return["capability",a.a]
if(!(a instanceof P.p))this.cq(a)
return["dart",u.classIdExtractor(a),this.cG(u.classFieldsExtractor(a))]},
an:function(a,b){throw H.e(new P.u((b==null?"Can't transmit:":b)+" "+H.f(a)))},
cq:function(a){return this.an(a,null)},
cH:function(a){var t
H.d(typeof a!=="string")
t=this.cF(a)
if(!!a.fixed$length)return["fixed",t]
if(!a.fixed$length)return["extendable",t]
if(!a.immutable$list)return["mutable",t]
if(a.constructor===Array)return["const",t]
this.an(a,"Can't serialize indexable: ")},
cF:function(a){var t,s
t=[]
C.a.sk(t,a.length)
for(s=0;s<a.length;++s)t[s]=this.L(a[s])
return t},
cG:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.L(a[t]))
return a},
cI:function(a){var t,s,r
if(!!a.constructor&&a.constructor!==Object)this.an(a,"Only plain JS Objects are supported:")
t=Object.keys(a)
s=[]
C.a.sk(s,t.length)
for(r=0;r<t.length;++r)s[r]=this.L(a[t[r]])
return["js-object",t,s]},
cK:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
cJ:function(a){if(this.a)return["sendport",u.globalState.b,a.a,a.b.a]
return["raw sendport",a]}}
H.b2.prototype={
Z:function(a){var t,s,r,q,p
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.jF("Bad serialized message: "+H.f(a)))
switch(C.a.geg(a)){case"ref":H.d(J.H(a[0],"ref"))
return C.a.h(this.b,a[1])
case"buffer":H.d(J.H(a[0],"buffer"))
t=a[1]
C.a.j(this.b,t)
return t
case"typed":H.d(J.H(a[0],"typed"))
t=a[1]
C.a.j(this.b,t)
return t
case"fixed":H.d(J.H(a[0],"fixed"))
t=a[1]
C.a.j(this.b,t)
s=H.E(this.af(t),[null])
s.fixed$length=Array
return s
case"extendable":H.d(J.H(a[0],"extendable"))
t=a[1]
C.a.j(this.b,t)
return H.E(this.af(t),[null])
case"mutable":H.d(J.H(a[0],"mutable"))
t=a[1]
C.a.j(this.b,t)
return this.af(t)
case"const":H.d(J.H(a[0],"const"))
t=a[1]
C.a.j(this.b,t)
s=H.E(this.af(t),[null])
s.fixed$length=Array
return s
case"map":return this.eb(a)
case"sendport":return this.ec(a)
case"raw sendport":H.d(J.H(a[0],"raw sendport"))
t=a[1]
C.a.j(this.b,t)
return t
case"js-object":return this.ea(a)
case"function":H.d(J.H(a[0],"function"))
t=u.staticFunctionNameToClosure(a[1])
C.a.j(this.b,t)
return t
case"capability":H.d(J.H(a[0],"capability"))
return new H.aq(a[1])
case"dart":H.d(J.H(a[0],"dart"))
r=a[1]
q=a[2]
p=u.instanceFromClassId(r)
C.a.j(this.b,p)
this.af(q)
return u.initializeEmptyInstance(r,p,q)
default:throw H.e("couldn't deserialize: "+H.f(a))}},
af:function(a){var t
for(t=0;t<a.length;++t)C.a.i(a,t,this.Z(a[t]))
return a},
eb:function(a){var t,s,r,q,p
H.d(J.H(a[0],"map"))
t=a[1]
s=a[2]
r=P.O()
C.a.j(this.b,r)
t=J.lt(t,this.ge9()).eG(0)
for(q=J.ae(s),p=0;p<t.length;++p)r.i(0,t[p],this.Z(q.h(s,p)))
return r},
ec:function(a){var t,s,r,q,p,o,n
H.d(J.H(a[0],"sendport"))
t=a[1]
s=a[2]
r=a[3]
q=u.globalState.b
if(t==null?q==null:t===q){p=u.globalState.z.h(0,s)
if(p==null)return
o=p.c7(r)
if(o==null)return
n=new H.bg(o,s)}else n=new H.bW(t,r,s)
C.a.j(this.b,n)
return n},
ea:function(a){var t,s,r,q,p,o
H.d(J.H(a[0],"js-object"))
t=a[1]
s=a[2]
r={}
C.a.j(this.b,r)
for(q=J.ae(t),p=J.ae(s),o=0;o<q.gk(t);++o)r[q.h(t,o)]=this.Z(p.h(s,o))
return r}}
H.ft.prototype={}
H.h6.prototype={
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
H.dc.prototype={
l:function(a){var t=this.b
if(t==null)return"NullError: "+H.f(this.a)
return"NullError: method not found: '"+t+"' on null"}}
H.eI.prototype={
l:function(a){var t,s
t=this.b
if(t==null)return"NoSuchMethodError: "+H.f(this.a)
s=this.c
if(s==null)return"NoSuchMethodError: method not found: '"+t+"' ("+H.f(this.a)+")"
return"NoSuchMethodError: method not found: '"+t+"' on '"+s+"' ("+H.f(this.a)+")"}}
H.h9.prototype={
l:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.iT.prototype={
$1:function(a){if(!!J.w(a).$isb9)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:function(){return{func:1,args:[,]}}}
H.dz.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
t=this.a
s=t!==null&&typeof t==="object"?t.stack:null
t=s==null?"":s
this.b=t
return t}}
H.iC.prototype={
$0:function(){return this.a.$0()},
$S:function(){return{func:1}}}
H.iD.prototype={
$0:function(){return this.a.$1(this.b)},
$S:function(){return{func:1}}}
H.iE.prototype={
$0:function(){return this.a.$2(this.b,this.c)},
$S:function(){return{func:1}}}
H.iF.prototype={
$0:function(){return this.a.$3(this.b,this.c,this.d)},
$S:function(){return{func:1}}}
H.iG.prototype={
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)},
$S:function(){return{func:1}}}
H.b7.prototype={
l:function(a){return"Closure '"+H.de(this).trim()+"'"},
$isj4:1,
geM:function(){return this},
$D:null}
H.fV.prototype={}
H.fI.prototype={
l:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+t+"'"}}
H.bn.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bn))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gw:function(a){var t,s
t=this.c
if(t==null)s=H.aX(this.a)
else s=typeof t!=="object"?J.ap(t):H.aX(t)
return(s^H.aX(this.b))>>>0},
l:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.f(this.d)+"' of "+H.fp(t)}}
H.h8.prototype={
l:function(a){return this.a}}
H.dR.prototype={
l:function(a){return this.a}}
H.fz.prototype={
l:function(a){return"RuntimeError: "+H.f(this.a)}}
H.hk.prototype={
l:function(a){return C.i.a2("Assertion failed: ",P.j3(this.a))}}
H.aE.prototype={
l:function(a){var t,s
t=this.b
if(t!=null)return t
s=function(b,c){return b.replace(/[^<,> ]+/g,function(d){return c[d]||d})}(this.a,u.mangledGlobalNames)
this.b=s
return s},
gw:function(a){return J.ap(this.a)},
A:function(a,b){var t,s
if(b==null)return!1
if(b instanceof H.aE){t=this.a
s=b.a
s=t==null?s==null:t===s
t=s}else t=!1
return t}}
H.ah.prototype={
gk:function(a){return this.a},
gaj:function(a){return this.a===0},
gH:function(a){return new H.eL(this,[H.aJ(this,0)])},
gcs:function(a){return H.jb(this.gH(this),new H.eH(this),H.aJ(this,0),H.aJ(this,1))},
G:function(a,b){var t,s
if(typeof b==="string"){t=this.b
if(t==null)return!1
return this.bx(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return this.bx(s,b)}else return this.em(b)},
em:function(a){var t=this.d
if(t==null)return!1
return this.ai(this.av(t,this.ah(a)),a)>=0},
h:function(a,b){var t,s,r
if(typeof b==="string"){t=this.b
if(t==null)return
s=this.ad(t,b)
return s==null?null:s.b}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
s=this.ad(r,b)
return s==null?null:s.b}else return this.en(b)},
en:function(a){var t,s,r
t=this.d
if(t==null)return
s=this.av(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
return s[r].b},
i:function(a,b,c){var t,s,r,q,p,o
if(typeof b==="string"){t=this.b
if(t==null){t=this.aP()
this.b=t}this.bp(t,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null){s=this.aP()
this.c=s}this.bp(s,b,c)}else{r=this.d
if(r==null){r=this.aP()
this.d=r}q=this.ah(b)
p=this.av(r,q)
if(p==null)this.aR(r,q,[this.aQ(b,c)])
else{o=this.ai(p,b)
if(o>=0)p[o].b=c
else p.push(this.aQ(b,c))}}},
al:function(a,b){if(typeof b==="string")return this.bD(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bD(this.c,b)
else return this.eo(b)},
eo:function(a){var t,s,r,q
t=this.d
if(t==null)return
s=this.av(t,this.ah(a))
r=this.ai(s,a)
if(r<0)return
q=s.splice(r,1)[0]
this.bI(q)
return q.b},
Y:function(a){if(this.a>0){this.f=null
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
if(s!==this.r)throw H.e(new P.a3(this))
t=t.c}},
bp:function(a,b,c){var t=this.ad(a,b)
if(t==null)this.aR(a,b,this.aQ(b,c))
else t.b=c},
bD:function(a,b){var t
if(a==null)return
t=this.ad(a,b)
if(t==null)return
this.bI(t)
this.by(a,b)
return t.b},
aQ:function(a,b){var t,s
t=new H.eK(a,b,null,null,[null,null])
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.d=s
s.c=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bI:function(a){var t,s,r
t=a.d
s=a.c
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.c=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.d=t;--this.a
this.r=this.r+1&67108863},
ah:function(a){return J.ap(a)&0x3ffffff},
ai:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.H(a[s].a,b))return s
return-1},
l:function(a){return P.m5(this)},
ad:function(a,b){return a[b]},
av:function(a,b){return a[b]},
aR:function(a,b,c){H.d(c!=null)
a[b]=c},
by:function(a,b){delete a[b]},
bx:function(a,b){return this.ad(a,b)!=null},
aP:function(){var t=Object.create(null)
this.aR(t,"<non-identifier-key>",t)
this.by(t,"<non-identifier-key>")
return t},
$islX:1}
H.eH.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){return{func:1,args:[,]}}}
H.eK.prototype={}
H.eL.prototype={
gk:function(a){return this.a.a},
gB:function(a){var t,s
t=this.a
s=new H.eM(t,t.r,null,null,this.$ti)
s.c=t.e
return s}}
H.eM.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sbo(null)
return!1}else{this.sbo(t.a)
this.c=this.c.c
return!0}}},
sbo:function(a){this.d=a}}
H.iy.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[,]}}}
H.iz.prototype={
$2:function(a,b){return this.a(a,b)},
$S:function(){return{func:1,args:[,P.t]}}}
H.iA.prototype={
$1:function(a){return this.a(a)},
$S:function(){return{func:1,args:[P.t]}}}
H.bC.prototype={
gC:function(a){return C.ab},
$isbC:1}
H.bc.prototype={$isbc:1}
H.eZ.prototype={
gC:function(a){return C.ac}}
H.d4.prototype={
gk:function(a){return a.length},
$isn:1,
$asn:function(){},
$isq:1,
$asq:function(){}}
H.d5.prototype={
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
a[b]=c}}
H.d6.prototype={
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
a[b]=c},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.d3.prototype={
gC:function(a){return C.ad},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]},
$iser:1}
H.f_.prototype={
gC:function(a){return C.ae},
$isc:1,
$asc:function(){return[P.N]},
$isb:1,
$asb:function(){return[P.N]}}
H.f0.prototype={
gC:function(a){return C.af},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f1.prototype={
gC:function(a){return C.ag},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$isk1:1}
H.f2.prototype={
gC:function(a){return C.ah},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f3.prototype={
gC:function(a){return C.al},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskp:1}
H.f4.prototype={
gC:function(a){return C.am},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskq:1}
H.d7.prototype={
gC:function(a){return C.an},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]}}
H.f5.prototype={
gC:function(a){return C.ao},
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.G(H.Q(a,b))
return a[b]},
$isc:1,
$asc:function(){return[P.o]},
$isb:1,
$asb:function(){return[P.o]},
$iskr:1}
H.bD.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.o]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.o]}}
H.bE.prototype={
$asn:function(){},
$isc:1,
$asc:function(){return[P.N]},
$asq:function(){},
$isb:1,
$asb:function(){return[P.N]}}
H.bF.prototype={
$asn:function(){},
$asc:function(){return[P.N]},
$asq:function(){},
$asb:function(){return[P.N]}}
H.bG.prototype={
$asn:function(){},
$asc:function(){return[P.o]},
$asq:function(){},
$asb:function(){return[P.o]}}
P.hm.prototype={
$1:function(a){var t,s
H.iH()
t=this.a
s=t.a
t.a=null
s.$0()},
$S:function(){return{func:1,args:[,]}}}
P.hl.prototype={
$1:function(a){var t,s
t=this.a
H.d(t.a==null);++u.globalState.f.b
t.a=a
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:function(){return{func:1,args:[{func:1,v:true}]}}}
P.hn.prototype={
$0:function(){H.iH()
this.a.$0()},
$S:function(){return{func:1}}}
P.ho.prototype={
$0:function(){H.iH()
this.a.$0()},
$S:function(){return{func:1}}}
P.hs.prototype={}
P.ia.prototype={
e_:function(a,b){var t=this.a
if(t.a!==0)throw H.e(new P.aD("Future already completed"))
t.aL(b)}}
P.dw.prototype={
ev:function(a){if(this.c!==6)return!0
H.d(!0)
return this.b.b.b1(this.d,a.a)},
ei:function(a){var t,s
t=(this.c&2)!==0
if(t){H.d(t)
t=this.e!=null}else t=!1
H.d(t)
s=this.e
t=this.b.b
if(H.bj(s,{func:1,args:[P.p,P.bL]}))return t.eC(s,a.a,a.b)
else return t.b1(s,a.a)}}
P.aw.prototype={
cf:function(a,b){var t,s,r
t=$.D
if(t!==C.f){t.toString
if(b!=null)b=P.mB(b,t)}s=new P.aw(0,t,null,[null])
r=b==null?1:3
this.bq(new P.dw(null,s,r,a,b,[H.aJ(this,0),null]))
return s},
ce:function(a){return this.cf(a,null)},
bt:function(a){H.d(this.a<4)
H.d(a.a>=4)
this.a=a.a
this.c=a.c},
bq:function(a){var t
H.d(a.a==null)
t=this.a
if(t<=1){a.a=H.jn(this.c,"$isdw")
this.c=a}else{if(t===2){H.d(!0)
t=this.c
if(t.a<4){t.bq(a)
return}this.bt(t)}H.d(this.a>=4)
t=this.b
t.toString
P.im(null,null,t,new P.hD(this,a))}},
bC:function(a){var t,s,r,q,p
t={}
t.a=a
if(a==null)return
s=this.a
if(s<=1){r=this.c
this.c=a
if(r!=null){for(q=a;p=q.a,p!=null;q=p);q.a=r}}else{if(s===2){H.d(!0)
s=this.c
if(s.a<4){s.bC(a)
return}this.bt(s)}H.d(this.a>=4)
t.a=this.ae(a)
s=this.b
s.toString
P.im(null,null,s,new P.hH(t,this))}},
bE:function(){H.d(this.a<4)
var t=this.c
this.c=null
return this.ae(t)},
ae:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
aL:function(a){var t,s
H.d(this.a<4)
t=this.$ti
if(H.io(a,"$isev",t,"$asev"))if(H.io(a,"$isaw",t,null))P.ku(a,this)
else P.mr(a,this)
else{s=this.bE()
H.d(this.a<4)
this.a=4
this.c=a
P.bQ(this,s)}},
as:function(a,b){var t
H.d(this.a<4)
t=this.bE()
H.d(this.a<4)
this.a=8
this.c=new P.b6(a,b)
P.bQ(this,t)},
ds:function(a){return this.as(a,null)},
$isev:1,
gaT:function(){return this.a},
gdJ:function(){return this.c}}
P.hD.prototype={
$0:function(){P.bQ(this.a,this.b)},
$S:function(){return{func:1}}}
P.hH.prototype={
$0:function(){P.bQ(this.b,this.a.a)},
$S:function(){return{func:1}}}
P.hE.prototype={
$1:function(a){var t=this.a
H.d(t.a===1)
H.d(t.a===1)
t.a=0
t.aL(a)},
$S:function(){return{func:1,args:[,]}}}
P.hF.prototype={
$2:function(a,b){var t=this.a
H.d(t.a===1)
t.as(a,b)},
$1:function(a){return this.$2(a,null)},
$S:function(){return{func:1,args:[,],opt:[,]}}}
P.hG.prototype={
$0:function(){this.a.as(this.b,this.c)},
$S:function(){return{func:1}}}
P.hK.prototype={
$0:function(){var t,s,r,q,p,o,n,m
q=this.d
p=q.c
H.d((p&1)===0)
o=(p&2)===0
H.d(o)
t=null
try{H.d(o)
H.d(p===8)
t=q.b.b.cc(q.d)}catch(n){s=H.R(n)
r=H.aI(n)
if(this.c){q=this.a.a
H.d(q.a===8)
q=q.c.a
p=s
p=q==null?p==null:q===p
q=p}else q=!1
p=this.b
if(q){q=this.a.a
H.d(q.a===8)
p.b=q.c}else p.b=new P.b6(s,r)
p.a=!0
return}if(!!J.w(t).$isev){if(t instanceof P.aw&&t.gaT()>=4){if(t.gaT()===8){q=t
H.d(q.gaT()===8)
p=this.b
p.b=q.gdJ()
p.a=!0}return}m=this.a.a
q=this.b
q.b=t.ce(new P.hL(m))
q.a=!1}},
$S:function(){return{func:1,v:true}}}
P.hL.prototype={
$1:function(a){return this.a},
$S:function(){return{func:1,args:[,]}}}
P.hJ.prototype={
$0:function(){var t,s,r,q
try{r=this.b
H.d((r.c&1)!==0)
this.a.b=r.b.b.b1(r.d,this.c)}catch(q){t=H.R(q)
s=H.aI(q)
r=this.a
r.b=new P.b6(t,s)
r.a=!0}},
$S:function(){return{func:1,v:true}}}
P.hI.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{q=this.a.a
H.d(q.a===8)
t=q.c
q=this.c
if(q.ev(t)){H.d((q.c&2)!==0)
p=q.e!=null}else p=!1
if(p){p=this.b
p.b=q.ei(t)
p.a=!1}}catch(o){s=H.R(o)
r=H.aI(o)
q=this.a
p=q.a
H.d(p.a===8)
p=p.c.a
n=s
m=this.b
if(p==null?n==null:p===n){q=q.a
H.d(q.a===8)
m.b=q.c}else m.b=new P.b6(s,r)
m.a=!0}},
$S:function(){return{func:1,v:true}}}
P.du.prototype={}
P.fM.prototype={
gk:function(a){var t,s
t={}
s=new P.aw(0,$.D,null,[P.o])
t.a=0
this.es(new P.fO(t),!0,new P.fP(t,s),s.gdr())
return s}}
P.fO.prototype={
$1:function(a){++this.a.a},
$S:function(){return{func:1,args:[,]}}}
P.fP.prototype={
$0:function(){this.b.aL(this.a.a)},
$S:function(){return{func:1}}}
P.fN.prototype={}
P.b6.prototype={
l:function(a){return H.f(this.a)},
$isb9:1}
P.ii.prototype={}
P.il.prototype={
$0:function(){var t,s,r
t=this.a
s=t.a
if(s==null){r=new P.dd()
t.a=r
t=r}else t=s
s=this.b
if(s==null)throw H.e(t)
r=H.e(t)
r.stack=s.l(0)
throw r},
$S:function(){return{func:1}}}
P.hX.prototype={
eD:function(a){var t,s,r
try{if(C.f===$.D){a.$0()
return}P.kz(null,null,this,a)}catch(r){t=H.R(r)
s=H.aI(r)
P.ik(null,null,this,t,s)}},
eE:function(a,b){var t,s,r
try{if(C.f===$.D){a.$1(b)
return}P.kA(null,null,this,a,b)}catch(r){t=H.R(r)
s=H.aI(r)
P.ik(null,null,this,t,s)}},
dV:function(a){return new P.hZ(this,a)},
aV:function(a){return new P.hY(this,a)},
dW:function(a){return new P.i_(this,a)},
h:function(a,b){return},
cc:function(a){if($.D===C.f)return a.$0()
return P.kz(null,null,this,a)},
b1:function(a,b){if($.D===C.f)return a.$1(b)
return P.kA(null,null,this,a,b)},
eC:function(a,b,c){if($.D===C.f)return a.$2(b,c)
return P.mC(null,null,this,a,b,c)}}
P.hZ.prototype={
$0:function(){return this.a.cc(this.b)},
$S:function(){return{func:1}}}
P.hY.prototype={
$0:function(){return this.a.eD(this.b)},
$S:function(){return{func:1}}}
P.i_.prototype={
$1:function(a){return this.a.eE(this.b,a)},
$S:function(){return{func:1,args:[,]}}}
P.dx.prototype={
ah:function(a){return H.n3(a)&0x3ffffff},
ai:function(a,b){var t,s,r
if(a==null)return-1
t=a.length
for(s=0;s<t;++s){r=a[s].a
if(r==null?b==null:r===b)return s}return-1}}
P.hQ.prototype={
gB:function(a){var t=new P.bT(this,this.r,null,null,[null])
t.c=this.e
return t},
gk:function(a){return this.a},
E:function(a,b){var t,s
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null)return!1
return t[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){s=this.c
if(s==null)return!1
return s[b]!=null}else return this.dt(b)},
dt:function(a){var t=this.d
if(t==null)return!1
return this.au(t[this.at(a)],a)>=0},
c7:function(a){var t=typeof a==="number"&&(a&0x3ffffff)===a
if(t)return this.E(0,a)?a:null
else return this.dD(a)},
dD:function(a){var t,s,r
t=this.d
if(t==null)return
s=t[this.at(a)]
r=this.au(s,a)
if(r<0)return
return J.bk(s,r).gdv()},
j:function(a,b){var t,s,r
if(typeof b==="string"&&b!=="__proto__"){t=this.b
if(t==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.b=s
t=s}return this.bu(t,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null){s=Object.create(null)
H.d(s!=null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
this.c=s
r=s}return this.bu(r,b)}else return this.W(0,b)},
W:function(a,b){var t,s,r,q
t=this.d
if(t==null){t=P.mv()
this.d=t}s=this.at(b)
r=t[s]
if(r==null){q=[this.aK(b)]
H.d(q!=null)
t[s]=q}else{if(this.au(r,b)>=0)return!1
r.push(this.aK(b))}return!0},
al:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bv(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bv(this.c,b)
else return this.dE(0,b)},
dE:function(a,b){var t,s,r
t=this.d
if(t==null)return!1
s=t[this.at(b)]
r=this.au(s,b)
if(r<0)return!1
this.bw(s.splice(r,1)[0])
return!0},
Y:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bu:function(a,b){var t
if(a[b]!=null)return!1
t=this.aK(b)
H.d(!0)
a[b]=t
return!0},
bv:function(a,b){var t
if(a==null)return!1
t=a[b]
if(t==null)return!1
this.bw(t)
delete a[b]
return!0},
aK:function(a){var t,s
t=new P.hR(a,null,null)
if(this.e==null){this.f=t
this.e=t}else{s=this.f
t.c=s
s.b=t
this.f=t}++this.a
this.r=this.r+1&67108863
return t},
bw:function(a){var t,s,r
t=a.c
s=a.b
if(t==null){r=this.e
H.d(a==null?r==null:a===r)
this.e=s}else t.b=s
if(s==null){r=this.f
H.d(a==null?r==null:a===r)
this.f=t}else s.c=t;--this.a
this.r=this.r+1&67108863},
at:function(a){return J.ap(a)&0x3ffffff},
au:function(a,b){var t,s
if(a==null)return-1
t=a.length
for(s=0;s<t;++s)if(J.H(a[s].a,b))return s
return-1},
$isc:1,
$asc:null}
P.hR.prototype={
gdv:function(){return this.a}}
P.bT.prototype={
gq:function(){return this.d},
p:function(){var t=this.a
if(this.b!==t.r)throw H.e(new P.a3(t))
else{t=this.c
if(t==null){this.sab(null)
return!1}else{this.sab(t.a)
this.c=this.c.b
return!0}}},
sab:function(a){this.d=a}}
P.hO.prototype={}
P.d0.prototype={}
P.x.prototype={
gB:function(a){return new H.d1(a,this.gk(a),0,null,[H.am(a,"x",0)])},
t:function(a,b){return this.h(a,b)},
c8:function(a,b){return new H.bA(a,b,[H.am(a,"x",0),null])},
eh:function(a,b,c){var t,s,r
t=this.gk(a)
for(s=b,r=0;r<t;++r){s=c.$2(s,this.h(a,r))
if(t!==this.gk(a))throw H.e(new P.a3(a))}return s},
l:function(a){return P.eD(a,"[","]")},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
P.eQ.prototype={
$2:function(a,b){var t,s
t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
s=t.a+=H.f(a)
t.a=s+": "
t.a+=H.f(b)},
$S:function(){return{func:1,args:[,,]}}}
P.eN.prototype={
gB:function(a){return new P.hS(this,this.c,this.d,this.b,null,this.$ti)},
gaj:function(a){return this.b===this.c},
gk:function(a){return(this.c-this.b&this.a.length-1)>>>0},
t:function(a,b){var t=(this.c-this.b&this.a.length-1)>>>0
if(C.b.ao(0,b)||b>=t)H.G(P.C(b,this,"index",null,t))
return this.a[(C.b.a2(this.b,b)&this.a.length-1)>>>0]},
Y:function(a){var t,s,r,q
t=this.b
s=this.c
if(t!==s){for(r=this.a,q=r.length-1;t!==s;t=(t+1&q)>>>0)r[t]=null
this.c=0
this.b=0;++this.d}},
l:function(a){return P.eD(this,"{","}")},
ca:function(){var t,s,r
t=this.b
if(t===this.c)throw H.e(H.eE());++this.d
s=this.a
r=s[t]
s[t]=null
this.b=(t+1&s.length-1)>>>0
return r},
W:function(a,b){var t,s
t=this.a
s=this.c
t[s]=b
t=(s+1&t.length-1)>>>0
this.c=t
if(this.b===t)this.bA();++this.d},
bA:function(){var t,s,r,q
t=new Array(this.a.length*2)
t.fixed$length=Array
s=H.E(t,this.$ti)
t=this.a
r=this.b
q=t.length-r
C.a.b9(s,0,q,t,r)
C.a.b9(s,q,q+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.sbG(s)},
d6:function(a,b){var t
H.d(!0)
t=new Array(8)
t.fixed$length=Array
this.sbG(H.E(t,[b]))},
sbG:function(a){this.a=a},
$asc:null}
P.hS.prototype={
gq:function(){return this.e},
p:function(){var t,s
t=this.a
if(this.c!==t.d)H.G(new P.a3(t))
s=this.d
if(s===this.b){this.sab(null)
return!1}this.sab(t.a[s])
this.d=(this.d+1&t.a.length-1)>>>0
return!0},
sab:function(a){this.e=a}}
P.fC.prototype={
I:function(a,b){var t
for(t=J.bm(b);t.p();)this.j(0,t.gq())},
l:function(a){return P.eD(this,"{","}")},
$isc:1,
$asc:null}
P.fB.prototype={}
P.bI.prototype={$isc:1,$asc:null,$isb:1,$asb:null}
P.ay.prototype={}
P.J.prototype={}
P.bo.prototype={
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.bo))return!1
return this.a===b.a&&this.b===b.b},
R:function(a,b){return C.b.R(this.a,b.a)},
gw:function(a){var t=this.a
return(t^C.b.aS(t,30))&1073741823},
l:function(a){var t,s,r,q,p,o,n
t=P.lN(H.md(this))
s=P.c7(H.mb(this))
r=P.c7(H.m7(this))
q=P.c7(H.m8(this))
p=P.c7(H.ma(this))
o=P.c7(H.mc(this))
n=P.lO(H.m9(this))
if(this.b)return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n+"Z"
else return t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n},
$isJ:1,
$asJ:function(){return[P.bo]}}
P.N.prototype={$isJ:1,
$asJ:function(){return[P.X]}}
P.aP.prototype={
aE:function(a,b){return C.b.aE(this.a,b.gdu())},
ao:function(a,b){return C.b.ao(this.a,b.gdu())},
A:function(a,b){if(b==null)return!1
if(!(b instanceof P.aP))return!1
return this.a===b.a},
gw:function(a){return this.a&0x1FFFFFFF},
R:function(a,b){return C.b.R(this.a,b.a)},
l:function(a){var t,s,r,q,p
t=new P.e2()
s=this.a
if(s<0)return"-"+new P.aP(0-s).l(0)
r=t.$1(C.b.K(s,6e7)%60)
q=t.$1(C.b.K(s,1e6)%60)
p=new P.e1().$1(s%1e6)
return""+C.b.K(s,36e8)+":"+H.f(r)+":"+H.f(q)+"."+H.f(p)},
$isJ:1,
$asJ:function(){return[P.aP]}}
P.e1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.e2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:function(){return{func:1,ret:P.t,args:[P.o]}}}
P.b9.prototype={}
P.c4.prototype={
l:function(a){return"Assertion failed"}}
P.dd.prototype={
l:function(a){return"Throw of null."}}
P.af.prototype={
gaN:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaM:function(){return""},
l:function(a){var t,s,r,q,p,o
t=this.c
s=t!=null?" ("+t+")":""
t=this.d
r=t==null?"":": "+H.f(t)
q=this.gaN()+s+r
if(!this.a)return q
p=this.gaM()
o=P.j3(this.b)
return q+p+": "+H.f(o)}}
P.dg.prototype={
gaN:function(){return"RangeError"},
gaM:function(){var t,s,r
H.d(this.a)
t=this.e
if(t==null){t=this.f
s=t!=null?": Not less than or equal to "+H.f(t):""}else{r=this.f
if(r==null)s=": Not greater than or equal to "+H.f(t)
else if(r>t)s=": Not in range "+H.f(t)+".."+H.f(r)+", inclusive"
else s=r<t?": Valid value range is empty":": Only valid value is "+H.f(t)}return s}}
P.ez.prototype={
gaN:function(){return"RangeError"},
gaM:function(){H.d(this.a)
if(J.l_(this.b,0))return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.f(t)},
gk:function(a){return this.f}}
P.u.prototype={
l:function(a){return"Unsupported operation: "+this.a}}
P.ds.prototype={
l:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aD.prototype={
l:function(a){return"Bad state: "+this.a}}
P.a3.prototype={
l:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.f(P.j3(t))+"."}}
P.dk.prototype={
l:function(a){return"Stack Overflow"},
$isb9:1}
P.dV.prototype={
l:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.hC.prototype={
l:function(a){var t=this.a
if(t==null)return"Exception"
return"Exception: "+H.f(t)}}
P.e4.prototype={
l:function(a){return"Expando:"+H.f(this.a)},
h:function(a,b){var t,s
t=this.b
if(typeof t!=="string"){if(b==null||typeof b==="boolean"||typeof b==="number"||typeof b==="string")H.G(P.jG(b,"Expandos are not allowed on strings, numbers, booleans or null",null))
return t.get(b)}s=H.k7(b,"expando$values")
return s==null?null:H.k7(s,t)}}
P.o.prototype={$isJ:1,
$asJ:function(){return[P.X]}}
P.Y.prototype={
aC:function(a,b){return new H.dt(this,b,[H.am(this,"Y",0)])},
gk:function(a){var t,s
H.d(!this.$isc)
t=this.gB(this)
for(s=0;t.p();)++s
return s},
ga3:function(a){var t,s
t=this.gB(this)
if(!t.p())throw H.e(H.eE())
s=t.gq()
if(t.p())throw H.e(H.m4())
return s},
t:function(a,b){var t,s,r
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.lF("index"))
if(b<0)H.G(P.aY(b,0,null,"index",null))
for(t=this.gB(this),s=0;t.p();){r=t.gq()
if(b===s)return r;++s}throw H.e(P.C(b,this,"index",null,s))},
l:function(a){return P.m2(this,"(",")")}}
P.cY.prototype={}
P.b.prototype={$isc:1,$asc:null,$asb:null}
P.aC.prototype={}
P.aW.prototype={
gw:function(a){return P.p.prototype.gw.call(this,this)},
l:function(a){return"null"}}
P.X.prototype={$isJ:1,
$asJ:function(){return[P.X]}}
P.p.prototype={constructor:P.p,$isp:1,
A:function(a,b){return this===b},
gw:function(a){return H.aX(this)},
l:function(a){return H.fp(this)},
gC:function(a){return new H.aE(H.iw(this),null)},
toString:function(){return this.l(this)}}
P.bL.prototype={}
P.t.prototype={$isJ:1,
$asJ:function(){return[P.t]}}
P.bM.prototype={
gk:function(a){return this.a.length},
l:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t},
ga4:function(){return this.a}}
W.k.prototype={}
W.dK.prototype={
l:function(a){return String(a)},
$isa:1}
W.dL.prototype={
l:function(a){return String(a)},
$isa:1}
W.a2.prototype={$isp:1}
W.dO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a2]},
$isc:1,
$asc:function(){return[W.a2]},
$isq:1,
$asq:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.c5.prototype={}
W.aN.prototype={$isa:1,$isaN:1}
W.c6.prototype={
cA:function(a,b,c){var t=this.dz(a,b,P.mM(c,null))
return t},
dz:function(a,b,c){return a.getContext(b,c)}}
W.dQ.prototype={
aD:function(a){return P.ir(a.getContextAttributes())}}
W.aO.prototype={$isa:1,
gk:function(a){return a.length}}
W.dT.prototype={$isa:1}
W.z.prototype={$isp:1}
W.b8.prototype={
bs:function(a,b){var t,s
t=$.$get$jO()
s=t[b]
if(typeof s==="string")return s
s=this.dM(a,b)
t[b]=s
return s},
dM:function(a,b){var t
if(b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()}) in a)return b
t=P.lP()+b
if(t in a)return t
return b},
gk:function(a){return a.length}}
W.dU.prototype={}
W.dW.prototype={
h:function(a,b){return a[b]},
gk:function(a){return a.length}}
W.dX.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
W.c8.prototype={}
W.bp.prototype={
dQ:function(a,b){return a.adoptNode(b)},
cB:function(a,b){return a.getElementById(b)},
ex:function(a,b){return a.querySelector(b)}}
W.c9.prototype={$isa:1}
W.dY.prototype={
l:function(a){return String(a)}}
W.ca.prototype={
e5:function(a,b){return a.createHTMLDocument(b)}}
W.dZ.prototype={
gaB:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
W.cb.prototype={
gaB:function(a){return a.w},
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
W.cc.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.ga1(a))+" x "+H.f(this.ga0(a))},
A:function(a,b){var t
if(b==null)return!1
t=J.w(b)
if(!t.$isK)return!1
return a.left===t.gaZ(b)&&a.top===t.gb2(b)&&this.ga1(a)===t.ga1(b)&&this.ga0(a)===t.ga0(b)},
gw:function(a){var t,s,r,q
t=a.left
s=a.top
r=this.ga1(a)
q=this.ga0(a)
return W.kx(W.b5(W.b5(W.b5(W.b5(0,t&0x1FFFFFFF),s&0x1FFFFFFF),r&0x1FFFFFFF),q&0x1FFFFFFF))},
ga0:function(a){return a.height},
gaZ:function(a){return a.left},
gb2:function(a){return a.top},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y},
$isK:1,
$asK:function(){}}
W.e_.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.t]},
$isc:1,
$asc:function(){return[P.t]},
$isq:1,
$asq:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.e0.prototype={
gk:function(a){return a.length}}
W.a4.prototype={
gdT:function(a){return new W.hw(a)},
l:function(a){return a.localName},
N:function(a,b,c,d){var t,s,r,q,p
if(c==null){t=$.jW
if(t==null){t=H.E([],[W.da])
s=new W.db(t)
C.a.j(t,W.kv(null))
C.a.j(t,W.ky())
$.jW=s
d=s}else d=t
t=$.jV
if(t==null){t=new W.dA(d)
$.jV=t
c=t}else{t.a=d
c=t}}if($.aA==null){t=document
s=t.implementation
s=(s&&C.I).e5(s,"")
$.aA=s
$.j2=s.createRange()
s=$.aA
s.toString
r=s.createElement("base")
r.href=t.baseURI
t=$.aA.head;(t&&C.J).P(t,r)}t=$.aA
if(t.body==null){t.toString
s=t.createElement("body")
t.body=H.jn(s,"$isaN")}t=$.aA
if(!!this.$isaN)q=t.body
else{s=a.tagName
t.toString
q=t.createElement(s)
t=$.aA.body;(t&&C.n).P(t,q)}if("createContextualFragment" in window.Range.prototype&&!C.a.E(C.T,a.tagName)){t=$.j2;(t&&C.B).cD(t,q)
t=$.j2
p=(t&&C.B).e3(t,b)}else{q.innerHTML=b
p=$.aA.createDocumentFragment()
for(t=J.l(p);s=q.firstChild,s!=null;)t.P(p,s)}t=$.aA.body
if(q==null?t!=null:q!==t)J.lu(q)
c.b8(p)
C.p.dQ(document,p)
return p},
e4:function(a,b,c){return this.N(a,b,c,null)},
cN:function(a,b,c,d){a.textContent=null
this.P(a,this.N(a,b,c,d))},
cM:function(a,b){return this.cN(a,b,null,null)},
a7:function(a,b){return a.getAttribute(b)},
dF:function(a,b){return a.removeAttribute(b)},
$isa:1,
$isp:1,
$isa4:1,
$ish:1,
$isr:1,
geF:function(a){return a.tagName}}
W.ip.prototype={
$1:function(a){return!!J.w(a).$isa4},
$S:function(){return{func:1,args:[,]}}}
W.i.prototype={$isp:1,$isi:1}
W.h.prototype={
dn:function(a,b,c,d){return a.addEventListener(b,H.c_(c,1),!1)},
$isp:1,
$ish:1}
W.a5.prototype={$isp:1}
W.eo.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a5]},
$isc:1,
$asc:function(){return[W.a5]},
$isq:1,
$asq:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.ep.prototype={
gk:function(a){return a.length}}
W.et.prototype={
gk:function(a){return a.length}}
W.a6.prototype={$isp:1}
W.ch.prototype={}
W.ew.prototype={
gk:function(a){return a.length}}
W.bx.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.ci.prototype={}
W.ex.prototype={
J:function(a,b){return a.send(b)}}
W.by.prototype={}
W.eA.prototype={$isa:1,$isa4:1}
W.aT.prototype={$isp:1,$isi:1,$isaT:1}
W.eO.prototype={
l:function(a){return String(a)}}
W.eU.prototype={
gk:function(a){return a.length}}
W.eW.prototype={
eN:function(a,b,c){return a.send(b,c)},
J:function(a,b){return a.send(b)}}
W.bB.prototype={}
W.a7.prototype={$isp:1}
W.eX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a7]},
$isc:1,
$asc:function(){return[W.a7]},
$isq:1,
$asq:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.P.prototype={$isp:1,$isi:1,$isP:1}
W.f6.prototype={$isa:1}
W.U.prototype={
ga3:function(a){var t,s
t=this.a
s=t.childNodes.length
if(s===0)throw H.e(new P.aD("No elements"))
if(s>1)throw H.e(new P.aD("More than one element"))
return t.firstChild},
I:function(a,b){var t,s,r,q,p
t=b.a
s=this.a
if(t!==s)for(r=t.childNodes.length,q=J.l(s),p=0;p<r;++p)q.P(s,t.firstChild)
return},
i:function(a,b,c){var t=this.a
J.l1(t,c,C.z.h(t.childNodes,b))},
gB:function(a){var t=this.a.childNodes
return new W.cf(t,t.length,-1,null,[H.am(t,"B",0)])},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){return C.z.h(this.a.childNodes,b)},
$asc:function(){return[W.r]},
$asd0:function(){return[W.r]},
$asb:function(){return[W.r]},
$asbI:function(){return[W.r]}}
W.r.prototype={
ey:function(a){var t=a.parentNode
if(t!=null)J.bl(t,a)},
l:function(a){var t=a.nodeValue
return t==null?this.cS(a):t},
P:function(a,b){return a.appendChild(b)},
dG:function(a,b){return a.removeChild(b)},
dH:function(a,b,c){return a.replaceChild(b,c)},
$isp:1,
$ish:1,
$isr:1,
gb_:function(a){return a.previousSibling}}
W.d9.prototype={
b0:function(a){return a.previousNode()}}
W.bH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.ff.prototype={$isa:1}
W.fi.prototype={
gk:function(a){return a.length}}
W.a8.prototype={$isp:1,
gk:function(a){return a.length}}
W.fk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a8]},
$isc:1,
$asc:function(){return[W.a8]},
$isq:1,
$asq:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.fn.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.fo.prototype={
J:function(a,b){return a.send(b)}}
W.df.prototype={
e3:function(a,b){return a.createContextualFragment(b)},
cD:function(a,b){return a.selectNodeContents(b)}}
W.fy.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
W.di.prototype={
J:function(a,b){return a.send(b)}}
W.fA.prototype={
gk:function(a){return a.length}}
W.fD.prototype={$isa:1}
W.a9.prototype={$isp:1,$ish:1}
W.fE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a9]},
$isc:1,
$asc:function(){return[W.a9]},
$isq:1,
$asq:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.aa.prototype={$isp:1}
W.fG.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.aa]},
$isc:1,
$asc:function(){return[W.aa]},
$isq:1,
$asq:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ab.prototype={$isp:1,
gk:function(a){return a.length}}
W.fL.prototype={
h:function(a,b){return this.bz(a,b)},
ax:function(a,b){var t,s
for(t=0;!0;++t){s=this.dC(a,t)
if(s==null)return
b.$2(s,this.bz(a,s))}},
gk:function(a){return a.length},
bz:function(a,b){return a.getItem(b)},
dC:function(a,b){return a.key(b)}}
W.Z.prototype={$isp:1}
W.aj.prototype={}
W.dl.prototype={
N:function(a,b,c,d){var t,s
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
t=W.lQ("<table>"+b+"</table>",c,d)
s=document.createDocumentFragment()
s.toString
t.toString
new W.U(s).I(0,new W.U(t))
return s}}
W.fT.prototype={
N:function(a,b,c,d){var t,s,r,q
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.N(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga3(t)
r.toString
t=new W.U(r)
q=t.ga3(t)
s.toString
q.toString
new W.U(s).I(0,new W.U(q))
return s}}
W.fU.prototype={
N:function(a,b,c,d){var t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aG(a,b,c,d)
t=document
s=t.createDocumentFragment()
t=C.G.N(t.createElement("table"),b,c,d)
t.toString
t=new W.U(t)
r=t.ga3(t)
s.toString
r.toString
new W.U(s).I(0,new W.U(r))
return s}}
W.bN.prototype={$isbN:1}
W.ac.prototype={$isp:1,$ish:1}
W.a_.prototype={$isp:1,$ish:1}
W.fX.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a_]},
$isc:1,
$asc:function(){return[W.a_]},
$isq:1,
$asq:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.fY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ac]},
$isc:1,
$asc:function(){return[W.ac]},
$isq:1,
$asq:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.fZ.prototype={
gk:function(a){return a.length}}
W.ad.prototype={$isp:1}
W.aZ.prototype={$isp:1,$isi:1,$isaZ:1}
W.h2.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ad]},
$isc:1,
$asc:function(){return[W.ad]},
$isq:1,
$asq:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.h3.prototype={
gk:function(a){return a.length}}
W.bf.prototype={}
W.h5.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
W.dq.prototype={
b0:function(a){return a.previousNode()}}
W.aF.prototype={}
W.ha.prototype={
l:function(a){return String(a)},
$isa:1}
W.hc.prototype={
gk:function(a){return a.length}}
W.hf.prototype={
gk:function(a){return a.length}}
W.hg.prototype={
J:function(a,b){return a.send(b)}}
W.b0.prototype={
ge7:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(new P.u("deltaY is not supported"))},
$isp:1,
$isi:1,
$isP:1,
$isb0:1}
W.bP.prototype={
gdS:function(a){var t,s
t=P.X
s=new P.aw(0,$.D,null,[t])
this.dw(a)
this.dI(a,W.kC(new W.hi(new P.ia(s,[t]))))
return s},
dI:function(a,b){return a.requestAnimationFrame(H.c_(b,1))},
dw:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var t=['ms','moz','webkit','o']
for(var s=0;s<t.length&&!b.requestAnimationFrame;++s){b.requestAnimationFrame=b[t[s]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[t[s]+'CancelAnimationFrame']||b[t[s]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isa:1}
W.hi.prototype={
$1:function(a){this.a.e_(0,a)},
$S:function(){return{func:1,args:[,]}}}
W.hj.prototype={$isa:1}
W.b1.prototype={$isa:1}
W.hr.prototype={
l:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var t,s,r
if(b==null)return!1
t=J.w(b)
if(!t.$isK)return!1
s=a.left
r=t.gaZ(b)
if(s==null?r==null:s===r){s=a.top
r=t.gb2(b)
if(s==null?r==null:s===r){s=a.width
r=t.ga1(b)
if(s==null?r==null:s===r){s=a.height
t=t.ga0(b)
t=s==null?t==null:s===t}else t=!1}else t=!1}else t=!1
return t},
gw:function(a){var t,s,r,q
t=J.ap(a.left)
s=J.ap(a.top)
r=J.ap(a.width)
q=J.ap(a.height)
return W.kx(W.b5(W.b5(W.b5(W.b5(0,t),s),r),q))},
$isK:1,
$asK:function(){},
ga0:function(a){return a.height},
gaZ:function(a){return a.left},
gb2:function(a){return a.top},
ga1:function(a){return a.width}}
W.dv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[P.K]},
$isc:1,
$asc:function(){return[P.K]},
$isq:1,
$asq:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
W.ht.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.z]},
$isc:1,
$asc:function(){return[W.z]},
$isq:1,
$asq:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.hu.prototype={$isa:1}
W.hv.prototype={
ga0:function(a){return a.height},
ga1:function(a){return a.width},
gm:function(a){return a.x},
gn:function(a){return a.y}}
W.hM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.a6]},
$isc:1,
$asc:function(){return[W.a6]},
$isq:1,
$asq:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.hN.prototype={$isa:1}
W.dy.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.r]},
$isc:1,
$asc:function(){return[W.r]},
$isq:1,
$asq:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.i4.prototype={$isa:1}
W.i7.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.ab]},
$isc:1,
$asc:function(){return[W.ab]},
$isq:1,
$asq:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.i8.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
$isn:1,
$asn:function(){return[W.Z]},
$isc:1,
$asc:function(){return[W.Z]},
$isq:1,
$asq:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.ig.prototype={$isa:1}
W.ih.prototype={$isa:1}
W.hp.prototype={
ax:function(a,b){var t,s,r,q,p,o
for(t=this.gH(this),s=t.length,r=this.a,q=J.l(r),p=0;p<t.length;t.length===s||(0,H.F)(t),++p){o=t[p]
b.$2(o,q.a7(r,o))}},
gH:function(a){var t,s,r,q,p
t=this.a.attributes
s=H.E([],[P.t])
for(r=t.length,q=0;q<r;++q){p=t[q]
if(p.namespaceURI==null)C.a.j(s,p.name)}return s},
gdA:function(){return this.a}}
W.hw.prototype={
h:function(a,b){return J.j_(this.a,b)},
gk:function(a){return this.gH(this).length}}
W.hz.prototype={
es:function(a,b,c,d){return W.ak(this.a,this.b,a,!1,H.aJ(this,0))}}
W.jf.prototype={}
W.hA.prototype={
dO:function(){var t,s,r
t=this.d
s=t!=null
if(s&&this.a<=0){r=this.b
r.toString
if(s)J.l0(r,this.c,t,!1)}},
di:function(a,b,c,d,e){this.dO()}}
W.hB.prototype={
$1:function(a){return this.a.$1(a)},
$S:function(){return{func:1,args:[,]}}}
W.bS.prototype={
a5:function(a){return $.$get$kw().E(0,W.bq(a))},
X:function(a,b,c){var t,s,r
t=W.bq(a)
s=$.$get$jg()
r=s.h(0,H.f(t)+"::"+b)
if(r==null)r=s.h(0,"*::"+b)
if(r==null)return!1
return r.$4(a,b,c,this)},
dj:function(a){var t,s
t=$.$get$jg()
if(t.gaj(t)){for(s=0;s<262;++s)t.i(0,C.S[s],W.mT())
for(s=0;s<12;++s)t.i(0,C.r[s],W.mU())}}}
W.B.prototype={
gB:function(a){return new W.cf(a,this.gk(a),-1,null,[H.am(a,"B",0)])},
$isc:1,
$asc:null,
$isb:1,
$asb:null}
W.db.prototype={
a5:function(a){return C.a.bL(this.a,new W.f8(a))},
X:function(a,b,c){return C.a.bL(this.a,new W.f7(a,b,c))}}
W.f8.prototype={
$1:function(a){return a.a5(this.a)},
$S:function(){return{func:1,args:[,]}}}
W.f7.prototype={
$1:function(a){return a.X(this.a,this.b,this.c)},
$S:function(){return{func:1,args:[,]}}}
W.bV.prototype={
a5:function(a){return this.a.E(0,W.bq(a))},
X:function(a,b,c){var t,s
t=W.bq(a)
s=this.c
if(s.E(0,H.f(t)+"::"+b))return this.d.dR(c)
else if(s.E(0,"*::"+b))return this.d.dR(c)
else{s=this.b
if(s.E(0,H.f(t)+"::"+b))return!0
else if(s.E(0,"*::"+b))return!0
else if(s.E(0,H.f(t)+"::*"))return!0
else if(s.E(0,"*::*"))return!0}return!1},
dl:function(a,b,c,d){var t,s,r
this.a.I(0,c)
t=b.aC(0,new W.i5())
s=b.aC(0,new W.i6())
this.b.I(0,t)
r=this.c
r.I(0,C.U)
r.I(0,s)}}
W.i5.prototype={
$1:function(a){return!C.a.E(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.i6.prototype={
$1:function(a){return C.a.E(C.r,a)},
$S:function(){return{func:1,args:[,]}}}
W.ib.prototype={
X:function(a,b,c){if(this.cV(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.j_(a,"template")==="")return this.e.E(0,b)
return!1}}
W.ic.prototype={
$1:function(a){return"TEMPLATE::"+H.f(a)},
$S:function(){return{func:1,args:[,]}}}
W.i9.prototype={
a5:function(a){var t=J.w(a)
if(!!t.$isbK)return!1
t=!!t.$isI
if(t&&W.bq(a)==="foreignObject")return!1
if(t)return!0
return!1},
X:function(a,b,c){if(b==="is"||C.i.bb(b,"on"))return!1
return this.a5(a)}}
W.cf.prototype={
p:function(){var t,s
t=this.c+1
s=this.b
if(t<s){this.sbB(J.bk(this.a,t))
this.c=t
return!0}this.sbB(null)
this.c=s
return!1},
gq:function(){return this.d},
sbB:function(a){this.d=a}}
W.da.prototype={}
W.i3.prototype={}
W.dA.prototype={
b8:function(a){new W.id(this).$2(a,null)},
aw:function(a,b){var t
if(b==null){t=a.parentNode
if(t!=null)J.bl(t,a)}else J.bl(b,a)},
dL:function(a,b){var t,s,r,q,p,o,n,m
t=!0
s=null
r=null
try{s=J.lk(a)
r=J.j_(s.gdA(),"is")
q=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var l=c.childNodes
if(c.lastChild&&c.lastChild!==l[l.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var k=0
if(c.children)k=c.children.length
for(var j=0;j<k;j++){var i=c.children[j]
if(i.id=='attributes'||i.name=='attributes'||i.id=='lastChild'||i.name=='lastChild'||i.id=='children'||i.name=='children')return true}return false}(a)
t=q?!0:!(a.attributes instanceof NamedNodeMap)}catch(n){H.R(n)}p="element unprintable"
try{p=J.az(a)}catch(n){H.R(n)}try{o=W.bq(a)
this.dK(a,b,t,p,o,s,r)}catch(n){if(H.R(n) instanceof P.af)throw n
else{this.aw(a,b)
window
m="Removing corrupted element "+H.f(p)
if(typeof console!="undefined")console.warn(m)}}},
dK:function(a,b,c,d,e,f,g){var t,s,r,q,p,o
if(c){this.aw(a,b)
window
t="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(t)
return}if(!this.a.a5(a)){this.aw(a,b)
window
t="Removing disallowed element <"+H.f(e)+"> from "+J.az(b)
if(typeof console!="undefined")console.warn(t)
return}if(g!=null)if(!this.a.X(a,"is",g)){this.aw(a,b)
window
t="Removing disallowed type extension <"+H.f(e)+' is="'+g+'">'
if(typeof console!="undefined")console.warn(t)
return}t=f.gH(f)
s=H.E(t.slice(0),[H.aJ(t,0)])
for(r=f.gH(f).length-1,t=f.a,q=J.l(t);r>=0;--r){p=s[r]
if(!this.a.X(a,J.lx(p),q.a7(t,p))){window
o="Removing disallowed attribute <"+H.f(e)+" "+p+'="'+H.f(q.a7(t,p))+'">'
if(typeof console!="undefined")console.warn(o)
q.a7(t,p)
q.dF(t,p)}}if(!!J.w(a).$isbN)this.b8(a.content)}}
W.id.prototype={
$2:function(a,b){var t,s,r,q
switch(a.nodeType){case 1:this.a.dL(a,b)
break
case 8:case 11:case 3:case 4:break
default:if(b==null){r=a.parentNode
if(r!=null)J.bl(r,a)}else J.bl(b,a)}t=a.lastChild
for(;null!=t;){s=null
try{s=J.ll(t)}catch(q){H.R(q)
r=t
J.bl(a,r)
t=null
s=a.lastChild}if(t!=null)this.$2(t,a)
t=s}},
$S:function(){return{func:1,v:true,args:[W.r,W.r]}}}
W.br.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.bs.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bt.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bu.prototype={$isc:1,
$asc:function(){return[W.ac]},
$isb:1,
$asb:function(){return[W.ac]}}
W.bv.prototype={$isc:1,
$asc:function(){return[W.a9]},
$isb:1,
$asb:function(){return[W.a9]}}
W.bw.prototype={$isc:1,
$asc:function(){return[W.a2]},
$isb:1,
$asb:function(){return[W.a2]}}
W.cj.prototype={}
W.cD.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cp.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cm.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cw.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cx.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
W.cy.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cB.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cC.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.ck.prototype={$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
W.cn.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.co.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cr.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cs.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.ct.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cu.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cE.prototype={$isc:1,
$asc:function(){return[W.a_]},
$isb:1,
$asb:function(){return[W.a_]}}
W.cF.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cG.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cQ.prototype={$isc:1,
$asc:function(){return[W.a7]},
$isb:1,
$asb:function(){return[W.a7]}}
W.cR.prototype={$isc:1,
$asc:function(){return[W.z]},
$isb:1,
$asb:function(){return[W.z]}}
W.cO.prototype={$isc:1,
$asc:function(){return[W.r]},
$isb:1,
$asb:function(){return[W.r]}}
W.cP.prototype={$isc:1,
$asc:function(){return[W.ab]},
$isb:1,
$asb:function(){return[W.ab]}}
W.cU.prototype={$isc:1,
$asc:function(){return[W.a5]},
$isb:1,
$asb:function(){return[W.a5]}}
W.cV.prototype={$isc:1,
$asc:function(){return[W.aa]},
$isb:1,
$asb:function(){return[W.aa]}}
W.cW.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
W.cX.prototype={$isc:1,
$asc:function(){return[P.K]},
$isb:1,
$asb:function(){return[P.K]}}
W.cH.prototype={$isc:1,
$asc:function(){return[W.ad]},
$isb:1,
$asb:function(){return[W.ad]}}
W.cI.prototype={$isc:1,
$asc:function(){return[W.Z]},
$isb:1,
$asb:function(){return[W.Z]}}
W.cL.prototype={$isc:1,
$asc:function(){return[W.a8]},
$isb:1,
$asb:function(){return[W.a8]}}
W.cT.prototype={$isc:1,
$asc:function(){return[W.a6]},
$isb:1,
$asb:function(){return[W.a6]}}
P.iq.prototype={
$2:function(a,b){this.a[a]=b},
$S:function(){return{func:1,args:[P.t,,]}}}
P.hW.prototype={}
P.K.prototype={$asK:null}
P.dJ.prototype={$isa:1}
P.aM.prototype={$isa:1}
P.e5.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e6.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e7.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e8.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.e9.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ea.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eb.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
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
P.ei.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
P.ej.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ek.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y},
gM:function(a){return a.z}}
P.el.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.em.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.eq.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.es.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ag.prototype={}
P.aB.prototype={$isa:1}
P.ey.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.ar.prototype={$isp:1}
P.eJ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.eR.prototype={$isa:1}
P.eS.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.as.prototype={$isp:1}
P.f9.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.fg.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fl.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fm.prototype={
gk:function(a){return a.length}}
P.fr.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fs.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.bK.prototype={$isa:1,$isbK:1}
P.fQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.I.prototype={
N:function(a,b,c,d){var t,s,r,q,p,o
t=H.E([],[W.da])
C.a.j(t,W.kv(null))
C.a.j(t,W.ky())
C.a.j(t,new W.i9())
c=new W.dA(new W.db(t))
s='<svg version="1.1">'+b+"</svg>"
t=document
r=t.body
q=(r&&C.n).e4(r,s,c)
p=t.createDocumentFragment()
q.toString
t=new W.U(q)
o=t.ga3(t)
for(t=J.l(p);r=o.firstChild,r!=null;)t.P(p,r)
return p},
$isa:1,
$isI:1}
P.fR.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.fS.prototype={$isa:1}
P.dm.prototype={}
P.fW.prototype={$isa:1}
P.bO.prototype={
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.at.prototype={$isp:1}
P.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return this.a_(a,b)},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
a_:function(a,b){return a.getItem(b)},
$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.hb.prototype={$isa:1,
gm:function(a){return a.x},
gn:function(a){return a.y}}
P.hd.prototype={$isa:1}
P.he.prototype={$isa:1}
P.bR.prototype={$isa:1}
P.i0.prototype={$isa:1}
P.i1.prototype={$isa:1}
P.i2.prototype={$isa:1}
P.cz.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cl.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.cq.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.cv.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cJ.prototype={$isc:1,
$asc:function(){return[P.ar]},
$isb:1,
$asb:function(){return[P.ar]}}
P.cK.prototype={$isc:1,
$asc:function(){return[P.at]},
$isb:1,
$asb:function(){return[P.at]}}
P.cM.prototype={$isc:1,
$asc:function(){return[P.t]},
$isb:1,
$asb:function(){return[P.t]}}
P.cS.prototype={$isc:1,
$asc:function(){return[P.as]},
$isb:1,
$asb:function(){return[P.as]}}
P.dN.prototype={
gk:function(a){return a.length}}
P.fw.prototype={
bJ:function(a,b){return a.activeTexture(b)},
bM:function(a,b,c){return a.attachShader(b,c)},
bN:function(a,b,c){return a.bindBuffer(b,c)},
bO:function(a,b,c){return a.bindFramebuffer(b,c)},
bP:function(a,b,c){return a.bindTexture(b,c)},
bQ:function(a,b){return a.blendEquation(b)},
bR:function(a,b,c){return a.blendFunc(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
bT:function(a,b){return a.clear(b)},
bU:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bV:function(a,b){return a.compileShader(b)},
bW:function(a){return a.createBuffer()},
bX:function(a){return a.createProgram()},
bY:function(a,b){return a.createShader(b)},
c_:function(a,b){return a.depthMask(b)},
c0:function(a,b){return a.disable(b)},
c1:function(a,b,c,d){return a.drawArrays(b,c,d)},
c2:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c3:function(a,b){return a.enable(b)},
c4:function(a,b){return a.enableVertexAttribArray(b)},
aD:function(a){return P.ir(a.getContextAttributes())},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c6:function(a,b){return a.linkProgram(b)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cg:function(a,b,c){return a.uniform1f(b,c)},
ci:function(a,b,c){return a.uniform1fv(b,c)},
cj:function(a,b,c){return a.uniform1i(b,c)},
ck:function(a,b,c){return a.uniform1iv(b,c)},
cl:function(a,b,c){return a.uniform2fv(b,c)},
cm:function(a,b,c){return a.uniform3fv(b,c)},
cn:function(a,b,c){return a.uniform4fv(b,c)},
co:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cp:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cr:function(a,b){return a.useProgram(b)},
ct:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cu:function(a,b,c,d,e){return a.viewport(b,c,d,e)}}
P.fx.prototype={
dU:function(a,b){return a.beginTransformFeedback(b)},
dX:function(a,b){return a.bindVertexArray(b)},
e6:function(a){return a.createVertexArray()},
ed:function(a,b,c,d,e){return a.drawArraysInstanced(b,c,d,e)},
ee:function(a,b,c,d,e,f){return a.drawElementsInstanced(b,c,d,e,f)},
ef:function(a){return a.endTransformFeedback()},
eK:function(a,b,c,d){this.dN(a,b,c,d)
return},
dN:function(a,b,c,d){return a.transformFeedbackVaryings(b,c,d)},
eL:function(a,b,c){return a.vertexAttribDivisor(b,c)},
bJ:function(a,b){return a.activeTexture(b)},
bM:function(a,b,c){return a.attachShader(b,c)},
bN:function(a,b,c){return a.bindBuffer(b,c)},
bO:function(a,b,c){return a.bindFramebuffer(b,c)},
bP:function(a,b,c){return a.bindTexture(b,c)},
bQ:function(a,b){return a.blendEquation(b)},
bR:function(a,b,c){return a.blendFunc(b,c)},
bS:function(a,b,c,d){return a.bufferData(b,c,d)},
bT:function(a,b){return a.clear(b)},
bU:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
bV:function(a,b){return a.compileShader(b)},
bW:function(a){return a.createBuffer()},
bX:function(a){return a.createProgram()},
bY:function(a,b){return a.createShader(b)},
c_:function(a,b){return a.depthMask(b)},
c0:function(a,b){return a.disable(b)},
c1:function(a,b,c,d){return a.drawArrays(b,c,d)},
c2:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
c3:function(a,b){return a.enable(b)},
c4:function(a,b){return a.enableVertexAttribArray(b)},
aD:function(a){return P.ir(a.getContextAttributes())},
b3:function(a,b){return a.getProgramInfoLog(b)},
b4:function(a,b,c){return a.getProgramParameter(b,c)},
b5:function(a,b){return a.getShaderInfoLog(b)},
b6:function(a,b,c){return a.getShaderParameter(b,c)},
b7:function(a,b,c){return a.getUniformLocation(b,c)},
c6:function(a,b){return a.linkProgram(b)},
ba:function(a,b,c){return a.shaderSource(b,c)},
bc:function(a,b,c,d){return a.stencilFunc(b,c,d)},
cg:function(a,b,c){return a.uniform1f(b,c)},
ci:function(a,b,c){return a.uniform1fv(b,c)},
cj:function(a,b,c){return a.uniform1i(b,c)},
ck:function(a,b,c){return a.uniform1iv(b,c)},
cl:function(a,b,c){return a.uniform2fv(b,c)},
cm:function(a,b,c){return a.uniform3fv(b,c)},
cn:function(a,b,c){return a.uniform4fv(b,c)},
co:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cp:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cr:function(a,b){return a.useProgram(b)},
ct:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
cu:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$isa:1}
P.ie.prototype={$isa:1}
P.fH.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.C(b,a,null,null,null))
return P.ir(this.dB(a,b))},
i:function(a,b,c){throw H.e(new P.u("Cannot assign element of immutable List."))},
t:function(a,b){return this.h(a,b)},
dB:function(a,b){return a.item(b)},
$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cA.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
P.cN.prototype={$isc:1,
$asc:function(){return[P.aC]},
$isb:1,
$asb:function(){return[P.aC]}}
B.iM.prototype={
$1:function(a){$.$get$is().i(0,a.which,!0)},
$S:function(){return{func:1,args:[W.aT]}}}
B.iN.prototype={
$1:function(a){$.$get$is().i(0,a.which,null)},
$S:function(){return{func:1,args:[W.aT]}}}
B.iO.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.mK=t
$.mL=C.b.a9(window.innerHeight,s)
s=a.clientX
t=a.clientY
$.jq=s-C.b.K(window.innerWidth,2)
$.kR=-(t-C.b.K(window.innerHeight,2))},
$S:function(){return{func:1,args:[W.P]}}}
B.iP.prototype={
$1:function(a){var t,s
t=a.clientX
s=a.clientY
$.c2=t-C.b.K(window.innerWidth,2)
$.c3=-(s-C.b.K(window.innerHeight,2))
if(a.button===2)$.$get$c0().i(0,"right",!0)
else $.$get$c0().i(0,"left",!0)},
$S:function(){return{func:1,args:[W.P]}}}
B.iQ.prototype={
$1:function(a){if(a.button===2)$.$get$c0().i(0,"right",null)
else $.$get$c0().i(0,"left",null)},
$S:function(){return{func:1,args:[W.P]}}}
B.fa.prototype={
d7:function(a,b,c,d){var t
W.ak(d,W.mS().$1(d),new B.fb(this),!1,W.b0)
W.ak(d,"mousemove",new B.fc(this),!1,W.P)
t=W.aZ
W.ak(d,"touchstart",new B.fd(),!1,t)
W.ak(d,"touchmove",new B.fe(this),!1,t)
B.n7(null)}}
B.fb.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
try{r=this.a
t=C.at.ge7(a)*r.k3
if(C.c.a9(r.fy,t)>0)r.fy=H.a0(C.c.a9(r.fy,t))}catch(q){s=H.R(q)
P.an(s)}},
$S:function(){return{func:1,args:[W.b0]}}}
B.fc.prototype={
$1:function(a){var t,s,r,q
a.preventDefault()
t=this.a
if(t.r1.h(0,"left")!=null){t.go=H.a0(t.go+C.b.a9($.jq,$.c2)*0.01)
s=t.id
r=$.c3
q=$.kR
t.id=H.a0(s+(r-q)*0.01)
$.c2=$.jq
$.c3=q}},
$S:function(){return{func:1,args:[W.P]}}}
B.fd.prototype={
$1:function(a){var t,s
t=a.touches[0]
s=C.c.a6(t.clientX)
C.c.a6(t.clientY)
$.c2=s
C.c.a6(t.clientX)
$.c3=C.c.a6(t.clientY)},
$S:function(){return{func:1,args:[W.aZ]}}}
B.fe.prototype={
$1:function(a){var t,s,r
t=a.touches[0]
s=C.c.a6(t.clientX)
t=C.c.a6(t.clientY)
r=this.a
r.go=H.a0(r.go+C.b.a9(s,$.c2)*0.01)
r.id=H.a0(r.id+($.c3-t)*0.01)
$.c2=s
$.c3=t},
$S:function(){return{func:1,args:[W.aZ]}}}
G.eY.prototype={}
G.dr.prototype={
ar:function(a,b){var t=this.d
if(H.ax(!t.G(0,a)))H.aH("uniform "+a+" already set")
t.i(0,a,b)},
bk:function(){return this.d},
l:function(a){var t,s,r,q
t=H.E(["{"+new H.aE(H.iw(this),null).l(0)+"}["+this.a+"]"],[P.t])
for(s=this.d,r=s.gH(s),r=r.gB(r);r.p();){q=r.gq()
C.a.j(t,H.f(q)+": "+H.f(s.h(0,q)))}return C.a.ak(t,"\n")}}
G.dP.prototype={}
G.dS.prototype={
c5:function(a,b,c){J.lh(this.a,b)
if(c>0)J.lD(this.a,b,c)}}
G.eu.prototype={}
G.A.prototype={}
G.en.prototype={}
G.cg.prototype={
aq:function(a){var t=this.e
H.d(!t.G(0,a))
H.d(C.i.bb(a,"a"))
switch($.$get$V().h(0,a).a){case"vec2":t.i(0,a,H.E([],[T.v]))
break
case"vec3":t.i(0,a,H.E([],[T.m]))
break
case"vec4":t.i(0,a,H.E([],[T.aG]))
break
case"float":t.i(0,a,H.E([],[P.N]))
break
case"uvec4":t.i(0,a,H.E([],[[P.b,P.o]]))
break
default:if(H.ax(!1))H.aH("unknown type for "+a)}},
cX:function(a){var t,s,r
H.d(!0)
t=this.d.length
for(s=this.c,r=0;r<a;++r,t+=4)C.a.j(s,new G.en(t,t+1,t+2,t+3))},
cY:function(a){var t,s,r,q
for(t=this.d,s=0;s<24;++s){r=a[s]
q=new T.m(new Float32Array(3))
q.D(r)
C.a.j(t,q)}},
cZ:function(a){var t,s,r,q,p
H.d(!0)
t=this.d
s=t.length
C.a.j(this.b,new G.A(s,s+1,s+2))
for(r=0;r<3;++r){q=a[r]
p=new T.m(new Float32Array(3))
p.D(q)
C.a.j(t,p)}},
bf:function(a,b){var t,s,r,q,p,o,n
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new Float32Array(2)
n=p.a
o[1]=n[1]
o[0]=n[0]
r.j(t,new T.v(o))}},
bg:function(a,b){var t,s,r,q,p,o
t=this.e.h(0,a)
for(s=b.length,r=t&&C.a,q=0;q<b.length;b.length===s||(0,H.F)(b),++q){p=b[q]
o=new T.m(new Float32Array(3))
o.D(p)
r.j(t,o)}},
d3:function(){var t,s,r,q,p,o,n,m,l,k
t=this.b
H.d(t.length>0||this.c.length>0)
s=this.c
r=new Array(t.length*3+s.length*6)
r.fixed$length=Array
q=H.E(r,[P.o])
for(r=t.length,p=0,o=0;n=t.length,o<n;n===r||(0,H.F)(t),++o){m=t[o]
q[p]=m.a
q[p+1]=m.b
q[p+2]=m.c
p+=3}for(t=s.length,o=0;r=s.length,o<r;r===t||(0,H.F)(s),++o){l=s[o]
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
l:function(a){var t,s,r,q,p
t=["GB:","V["+this.d.length+"]","f3["+this.b.length+"]","f4["+this.c.length+"]"]
for(s=this.e,r=s.gH(s),r=r.gB(r);r.p();){q=r.gq()
p=$.$get$V().h(0,q).a
C.a.j(t,H.f(q)+"["+p+","+s.h(0,q).length+"]")}return C.a.ak(t," ")}}
G.dp.prototype={}
G.dn.prototype={}
G.eT.prototype={}
G.eV.prototype={
bi:function(a,b,c){var t,s
if(C.i.aJ(a,0)===105){if(H.ax(C.b.aH(b.length,c)===this.z))H.aH("ChangeAttribute "+this.z)}else{t=C.b.aH(b.length,c)
if(H.ax(t===(this.ch.length/3|0)))H.aH("wrong size for attribute: "+a+" expected: "+(this.ch.length/3|0)+" got: "+t)}this.cy.i(0,a,b)
t=this.d
s=this.r.h(0,a)
J.dF(t.a,34962,s)
J.jw(t.a,34962,b,35048)},
d4:function(){var t=this.cx
if(t!=null)return t.length
return this.ch.length/3|0},
aa:function(a,b,c){var t,s,r,q,p,o
t=J.js(a,0)===105
if(t&&this.z===0)this.z=C.b.aH(b.length,c)
s=this.r
r=this.d
s.i(0,a,J.iW(r.a))
this.bi(a,b,c)
q=$.$get$V().h(0,a)
if(q==null)throw H.e("Unknown canonical "+a)
p=this.x
if(H.ax(p.G(0,a)))H.aH("unexpected attribute "+a)
o=p.h(0,a)
J.dG(r.a,this.e)
r.c5(0,o,t?1:0)
s=s.h(0,a)
p=q.bj()
J.dF(r.a,34962,s)
J.jE(r.a,o,p,5126,!1,0,0)},
l:function(a){var t,s,r,q
t=this.cx
s=["Faces:"+(t==null?0:t.length)]
for(t=this.cy,r=t.gH(t),r=r.gB(r);r.p();){q=r.gq()
C.a.j(s,H.f(q)+":"+t.h(0,q).length)}return"MESH["+this.a+"] "+C.a.ak(s,"  ")},
saO:function(a){this.cx=a}}
G.fh.prototype={
d_:function(a,b){var t=C.b.cw(a,b)
if(this.z===t)return
this.z=t
this.bm()},
bm:function(){var t,s,r,q,p,o,n
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
t.a8(0,0,1/(p*s))
t.a8(1,1,1/p)
t.a8(2,2,(q+r)/o)
t.a8(3,2,-1)
t.a8(2,3,2*r*q/o)},
bk:function(){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
t=this.x.d
s=t.a
r=s[12]
q=s[13]
p=s[14]
o=new T.m(new Float32Array(H.j(3)))
o.u(r,q,p)
p=this.d
p.i(0,"uEyePosition",o)
o=this.cy
o.D(t)
t=o.a
t[12]=0
t[13]=0
t[14]=0
t[15]=1
n=-s[12]
m=-s[13]
l=-s[14]
s=J.w(n)
r=!!s.$isaG
k=r?s.gaB(n):1
if(!!s.$ism){j=s.gm(n)
m=s.gn(n)
l=s.gM(n)
n=j}else if(r){j=s.gm(n)
m=s.gn(n)
l=s.gM(n)
n=j}else if(!(typeof n==="number")){n=null
m=null
l=null}s=C.c.v(t[0],n)
r=C.c.v(t[4],m)
q=C.c.v(t[8],l)
i=t[12]
h=C.c.v(t[1],n)
g=C.c.v(t[5],m)
f=C.c.v(t[9],l)
e=t[13]
d=C.c.v(t[2],n)
c=C.c.v(t[6],m)
b=C.c.v(t[10],l)
a=t[14]
a0=C.c.v(t[3],n)
a1=C.c.v(t[7],m)
a2=C.c.v(t[11],l)
a3=t[15]
t[12]=s+r+q+i*k
t[13]=h+g+f+e*k
t[14]=d+c+b+a*k
t[15]=a0+a1+a2+a3*k
a3=this.cx
a3.D(this.db)
a3.c9(0,o)
p.i(0,"uPerspectiveViewMatrix",a3)
return p}}
G.fv.prototype={
dd:function(){var t,s,r,q
t=this.z
s=this.y
if(t.gk(t)===s.gk(s)&&this.Q.a===this.x.a)return[]
r=[]
for(s=s.gH(s),s=s.gB(s);s.p();){q=s.gq()
if(!t.G(0,q))C.a.j(r,q)}for(t=this.x,s=new P.bT(t,t.r,null,null,[null]),s.c=t.e,t=this.Q;s.p();){q=s.d
if(!t.E(0,q))C.a.j(r,q)}return r},
dg:function(a,b){var t,s,r,q,p,o,n,m,l,k,j,i,h
t=Date.now()
for(s=b.gH(b),s=s.gB(s),r=this.d,q=this.y,p=this.z,o=0;s.p();){n=s.gq()
switch(J.js(n,0)){case 117:if(q.G(0,n)){m=b.h(0,n)
if(p.G(0,n))H.iK("E:"+(n+" : group ["+a+"] overwrites ["+n+"]"))
p.i(0,n,a)
l=$.$get$V().h(0,n)
if(l==null)H.G("unknown "+n)
H.d(q.G(0,n))
k=q.h(0,n)
j=l.a
switch(j){case"int":if(l.c===0)J.j0(r.a,k,m)
else if(!!J.w(m).$isk1)J.lB(r.a,k,m)
break
case"float":if(l.c===0)J.lz(r.a,k,m)
else if(!!J.w(m).$iser)J.lA(r.a,k,m)
break
case"mat4":if(l.c===0){j=H.aK(m,"$isS").a
J.jD(r.a,k,!1,j)}else if(!!J.w(m).$iser)J.jD(r.a,k,!1,m)
else if(H.ax(!1))H.aH("bad unform: "+n)
break
case"mat3":if(l.c===0){j=H.aK(m,"$isaV").a
J.jC(r.a,k,!1,j)}else if(!!J.w(m).$iser)J.jC(r.a,k,!1,m)
else if(H.ax(!1))H.aH("bad unform: "+n)
break
case"vec4":j=l.c
i=r.a
if(j===0)J.jB(i,k,H.aK(m,"$isaG").a)
else J.jB(i,k,m)
break
case"vec3":j=l.c
i=r.a
if(j===0)J.jA(i,k,H.aK(m,"$ism").a)
else J.jA(i,k,m)
break
case"vec2":j=l.c
i=r.a
if(j===0)J.jz(i,k,H.aK(m,"$isv").a)
else J.jz(i,k,m)
break
case"sampler2D":case"sampler2DShadow":j=C.b.a2(33984,this.ch)
J.jt(r.a,j)
j=H.aK(m,"$ismi").d5()
J.jv(r.a,3553,j)
j=this.ch
J.j0(r.a,k,j)
this.ch=this.ch+1
break
case"samplerCube":H.d(n==="uCubeTexture")
j=C.b.a2(33984,this.ch)
J.jt(r.a,j)
j=H.aK(m,"$ismi").d5()
J.jv(r.a,34067,j)
j=this.ch
J.j0(r.a,k,j)
this.ch=this.ch+1
break
default:H.iK("Error: unknow uniform type: "+j)
H.d(!1)}++o}break
case 99:m=b.h(0,n)
switch(n){case"cDepthTest":j=J.H(m,!0)
i=r.a
if(j)J.dH(i,2929)
else J.iX(i,2929)
break
case"cStencilFunc":H.aK(m,"$isdp")
j=m.a
i=r.a
if(j===1281)J.iX(i,2960)
else{J.dH(i,2960)
i=m.b
h=m.c
J.lw(r.a,j,i,h)}break
case"cDepthWrite":J.lb(r.a,m)
break
case"cBlendEquation":H.aK(m,"$isdn")
j=m.a
i=r.a
if(j===1281)J.iX(i,3042)
else{J.dH(i,3042)
i=m.b
h=m.c
J.l5(r.a,i,h)
J.l4(r.a,j)}break}++o
break}}s=Date.now()
""+o
new P.aP(1000*(s-new P.bo(t,!1).a)).l(0)},
d2:function(a,b,c){var t,s,r,q,p,o,n,m,l,k
Date.now()
t=this.d
J.lC(t.a,this.r)
this.ch=0
this.z.Y(0)
for(s=b.length,r=0;r<b.length;b.length===s||(0,H.F)(b),++r){q=b[r]
this.dg(q.a,q.bk())}s=this.Q
s.Y(0)
for(p=a.cy,p=p.gH(p),p=p.gB(p);p.p();)s.j(0,p.gq())
o=this.dd()
if(o.length!==0)P.an("E:"+(this.a+" "+a.f+": uninitialized inputs: "+H.f(o)))
J.dG(a.d.a,a.e)
n=this.e.f.length>0
s=a.f
p=a.d4()
m=a.Q
l=a.z
if(n)J.l2(t.a,s)
if(m!==-1){k=t.a
if(l>1)J.lf(k,s,p,m,0,l)
else J.le(k,s,p,m,0)}else{m=t.a
if(l>1)J.ld(m,s,0,p,l)
else J.lc(m,s,0,p)}if(n)J.li(t.a)},
d9:function(a,b,c,d){var t,s,r,q,p,o,n
for(t=this.e.d,s=t.length,r=this.y,q=this.d,p=this.r,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
r.i(0,n,J.jy(q.a,p,n))}for(t=this.f.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
r.i(0,n,J.jy(q.a,p,n))}}}
G.y.prototype={
bj:function(){switch(this.a){case"float":return 1
case"vec2":return 2
case"vec3":case"uvec3":return 3
case"vec4":case"uvec4":return 4
default:H.d(!1)
return-1}}}
G.be.prototype={
be:function(a){var t,s,r,q,p
H.d(this.b==null)
for(t=a.length,s=this.c,r=this.x,q=0;q<a.length;a.length===t||(0,H.F)(a),++q){p=a[q]
H.d($.$get$V().G(0,p))
H.d(!C.a.E(s,p))
C.a.j(s,p)
r.i(0,p,this.r);++this.r}C.a.aF(s)},
bh:function(a){var t,s,r
H.d(this.b==null)
for(t=this.d,s=0;s<2;++s){r=a[s]
if(H.ax($.$get$V().G(0,r)))H.aH("missing uniform "+r)
H.d(!C.a.E(t,r))
C.a.j(t,r)}C.a.aF(t)},
ap:function(a){var t,s,r,q
H.d(this.b==null)
for(t=a.length,s=this.e,r=0;r<a.length;a.length===t||(0,H.F)(a),++r){q=a[r]
H.d($.$get$V().G(0,q))
H.d(!C.a.E(s,q))
C.a.j(s,q)}C.a.aF(s)},
bl:function(a,b){H.d(this.b==null)
this.b=this.dh(!0,a,b)},
aI:function(a){return this.bl(a,null)},
dh:function(a,b,c){var t,s,r,q,p,o,n,m,l,k,j
H.d(this.b==null)
t=this.c
s=t.length
r=s===0
q=["#version 300 es","precision highp float;","precision highp sampler2DShadow;",""]
for(p=this.x,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=$.$get$V().h(0,n)
C.a.j(q,"layout (location="+H.f(p.h(0,n))+") in "+m.a+" "+H.f(n)+";")}C.a.j(q,"")
l=r?"in":"out"
if(r)C.a.j(q,"out vec4 oFragColor;")
for(t=this.e,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
C.a.j(q,l+" "+m.a+" "+H.f(k)+";")}C.a.j(q,"")
for(t=this.d,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){k=t[o]
m=$.$get$V().h(0,k)
p=m.c
j=p===0?"":"["+p+"]"
C.a.j(q,"uniform "+m.a+" "+H.f(k)+j+";")}C.a.j(q,"")
if(c!=null)C.a.I(q,c)
C.a.j(q,"void main(void) {")
C.a.I(q,b)
C.a.j(q,"}")
return C.a.ak(q,"\n")}}
G.fF.prototype={
cO:function(a,b,c){var t=this.d.a
t[12]=a
t[13]=b
t[14]=c}}
R.dh.prototype={
cb:function(a){var t,s,r
t=this.db
s=t.clientWidth
r=t.clientHeight
t.width=s
t.height=r
P.an("size change "+H.f(s)+" "+H.f(r))
this.dx.d_(s,r)
this.z=s
this.Q=r}}
R.fJ.prototype={
dk:function(a,b,c,d){var t,s,r,q,p
t=document.createElement("div")
s=t.style
r=""+c+"px"
s.width=r
r=""+d+"px"
s.height=r
s.color=a
s.background=a
for(q=0;q<c;++q){s=W.mq("span",null)
r=s.style
r.width="1px"
p=""+d+"px"
r.height=p
p=(r&&C.u).bs(r,"float")
r.setProperty(p,"left","")
p=C.u.bs(r,"opacity")
r.setProperty(p,"0.9","")
r.background=b
C.o.P(t,s)}return t},
da:function(a,b,c){var t,s,r
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
J.iU(this.a,s)
r=this.dk(b,c,90,30)
this.d=r
J.iU(this.a,r)
t=t.createElement("div")
this.c=t
J.iU(this.a,t)}}
R.fK.prototype={
df:function(a,b){var t,s,r,q,p
t=++this.e
if(a-this.f<1000)return
s=t*1000/1000
this.e=0
this.f=a
this.b.textContent=C.w.eJ(s,2)+" fps"
t=this.c;(t&&C.o).cM(t,b)
r=C.b.K(30*C.w.dY(s),90)
if(r<0)r=0
if(r>30)r=30
q=this.d.firstChild
t=q.style
p=""+r+"px"
t.height=p
t=this.d;(t&&C.o).P(t,q)},
de:function(a){return this.df(a,"")}}
A.d8.prototype={
l:function(a){return"NODE["+this.a+"]"}}
A.bJ.prototype={}
A.fu.prototype={
d1:function(a){var t,s,r,q,p,o,n,m,l,k
t=this.d
s=this.r
r=this.z
q=this.Q
p=t.a
t=t.b
J.l3(p.a,36160,t)
H.d(r>0&&q>0)
J.lE(p.a,this.x,this.y,r,q)
if(s!==0)J.l6(p.a,s)
for(t=this.f,s=t.length,o=0;o<t.length;t.length===s||(0,H.F)(t),++o){n=t[o]
m=n.e
C.a.j(m,new G.dr(P.O(),"transforms",!1,!0))
l=new T.S(new Float32Array(16))
l.V()
for(r=n.f,q=r.length,p=n.d,k=0;k<r.length;r.length===q||(0,H.F)(r),++k)A.kJ(p,r[k],l,a,m)
m.pop()}},
d0:function(){return this.d1(null)},
d8:function(a,b,c){if(this.d==null)this.d=new G.eu(this.e,null,null,null,null)}}
A.ix.prototype={
$2:function(a,b){var t=536870911&a+J.ap(b)
t=536870911&t+((524287&t)<<10)
return t^t>>>6},
$S:function(){return{func:1,args:[P.o,P.p]}}}
T.aV.prototype={
D:function(a){var t,s
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
l:function(a){return"[0] "+this.T(0).l(0)+"\n[1] "+this.T(1).l(0)+"\n[2] "+this.T(2).l(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aV){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]}else t=!1
return t},
gw:function(a){return A.dC(this.a)},
T:function(a){var t,s
t=new Float32Array(H.j(3))
s=this.a
t[0]=s[a]
t[1]=s[3+a]
t[2]=s[6+a]
return new T.m(t)},
e2:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
if(g===0){this.D(a)
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
T.S.prototype={
a8:function(a,b,c){H.d(a<4)
H.d(b<4)
this.a[b*4+a]=c},
D:function(a){var t,s
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
l:function(a){return"[0] "+this.T(0).l(0)+"\n[1] "+this.T(1).l(0)+"\n[2] "+this.T(2).l(0)+"\n[3] "+this.T(3).l(0)+"\n"},
h:function(a,b){return this.a[b]},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.S){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]&&t[4]===r[4]&&t[5]===r[5]&&t[6]===r[6]&&t[7]===r[7]&&t[8]===r[8]&&t[9]===r[9]&&t[10]===r[10]&&t[11]===r[11]&&t[12]===r[12]&&t[13]===r[13]&&t[14]===r[14]&&t[15]===r[15]}else t=!1
return t},
gw:function(a){return A.dC(this.a)},
T:function(a){var t,s
t=new Float32Array(H.j(4))
s=this.a
t[0]=s[a]
t[1]=s[4+a]
t[2]=s[8+a]
t[3]=s[12+a]
return new T.aG(t)},
cC:function(a,b,c,d){var t,s,r,q
if(typeof b==="number"){t=b
s=t
r=s}else{r=null
s=null
t=null}q=this.a
q[0]=C.c.v(q[0],r)
q[1]=C.c.v(q[1],r)
q[2]=C.c.v(q[2],r)
q[3]=C.c.v(q[3],r)
q[4]=C.c.v(q[4],s)
q[5]=C.c.v(q[5],s)
q[6]=C.c.v(q[6],s)
q[7]=C.c.v(q[7],s)
q[8]=C.c.v(q[8],t)
q[9]=C.c.v(q[9],t)
q[10]=C.c.v(q[10],t)
q[11]=C.c.v(q[11],t)
q[12]=q[12]
q[13]=q[13]
q[14]=q[14]
q[15]=q[15]},
U:function(a,b){return this.cC(a,b,null,null)},
V:function(){var t=this.a
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
c9:function(b4,b5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
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
D:function(a){var t,s
t=a.a
s=this.a
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.v){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]}else t=!1
return t},
gw:function(a){return A.dC(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){var t,s
t=this.a
s=t[0]
t=t[1]
return Math.sqrt(s*s+t*t)},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]}}
T.m.prototype={
u:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
D:function(a){var t,s
t=a.a
s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
l:function(a){var t=this.a
return"["+H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+"]"},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.m){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]}else t=!1
return t},
gw:function(a){return A.dC(this.a)},
h:function(a,b){return this.a[b]},
gk:function(a){return Math.sqrt(this.gS())},
gS:function(){var t,s,r
t=this.a
s=t[0]
r=t[1]
t=t[2]
return s*s+r*r+t*t},
F:function(a){var t,s,r
t=Math.sqrt(this.gS())
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
bZ:function(a){var t,s,r,q,p,o,n,m
t=this.a
s=t[0]
r=t[1]
q=t[2]
p=a.a
o=p[0]
n=p[1]
m=p[2]
t=new T.m(new Float32Array(H.j(3)))
t.u(r*m-q*n,q*o-s*m,s*n-r*o)
return t},
j:function(a,b){var t,s
t=b.a
s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
U:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b},
gm:function(a){return this.a[0]},
gn:function(a){return this.a[1]},
gM:function(a){return this.a[2]}}
T.aG.prototype={
D:function(a){var t,s
t=a.a
s=this.a
s[3]=t[3]
s[2]=t[2]
s[1]=t[1]
s[0]=t[0]},
l:function(a){var t=this.a
return H.f(t[0])+","+H.f(t[1])+","+H.f(t[2])+","+H.f(t[3])},
A:function(a,b){var t,s,r
if(b==null)return!1
if(b instanceof T.aG){t=this.a
s=t[0]
r=b.a
t=s===r[0]&&t[1]===r[1]&&t[2]===r[2]&&t[3]===r[3]}else t=!1
return t},
gw:function(a){return A.dC(this.a)},
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
gM:function(a){return this.a[2]},
gaB:function(a){return this.a[3]}}
Q.iI.prototype={
$1:function(b3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2
t=this.a
t.a=b3+0
s=this.c
s.go=H.a0(s.go+0.001)
r=s.k4
if(r.h(0,37)!=null)s.go=H.a0(s.go+0.03)
else if(r.h(0,39)!=null)s.go=H.a0(s.go-0.03)
if(r.h(0,38)!=null)s.id=H.a0(s.id+0.03)
else if(r.h(0,40)!=null)s.id=H.a0(s.id-0.03)
if(r.h(0,33)!=null)s.fy=H.a0(s.fy*0.99)
else if(r.h(0,34)!=null)s.fy=H.a0(s.fy*1.01)
if(r.h(0,32)!=null){s.go=0
s.id=0}r=H.a0(C.c.dZ(s.id,-1.4707963267948965,1.4707963267948965))
s.id=r
q=s.fy
p=s.go
o=q*Math.cos(r)
s.cO(o*Math.cos(p),q*Math.sin(r),o*Math.sin(p))
p=s.d.a
r=s.k2.a
p[12]=p[12]+r[0]
p[13]=p[13]+r[1]
p[14]=p[14]+r[2]
q=p[12]
n=p[13]
m=p[14]
l=new T.m(new Float32Array(H.j(3)))
l.u(0,1,0)
k=s.e
j=k.a
j[0]=p[12]
j[1]=p[13]
j[2]=p[14]
j=new Float32Array(H.j(3))
i=new T.m(j)
i.D(k)
j[0]=j[0]-r[0]
j[1]=j[1]-r[1]
j[2]=j[2]-r[2]
i.F(0)
h=l.bZ(i)
h.F(0)
g=i.bZ(h)
g.F(0)
r=h.aY(k)
f=g.aY(k)
k=i.aY(k)
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
p[15]=1
p[14]=-k
p[13]=-f
p[12]=-r
p[11]=0
p[10]=j
p[9]=c
p[8]=e
p[7]=0
p[6]=a2
p[5]=a1
p[4]=a0
p[3]=0
p[2]=a
p[1]=b
p[0]=d
p[12]=q
p[13]=n
p[14]=m
m=s.f
n=m.a
n[0]=p[2]
n[1]=p[6]
n[2]=p[10]
s=-s.k1
m=Math.sqrt(m.gS())
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
m=p[0]
s=p[4]
q=p[8]
n=p[1]
d=p[5]
b=p[9]
a=p[2]
a0=p[6]
a1=p[10]
a2=p[3]
e=p[7]
c=p[11]
p[0]=m*a4+s*a7+q*b0
p[1]=n*a4+d*a7+b*b0
p[2]=a*a4+a0*a7+a1*b0
p[3]=a2*a4+e*a7+c*b0
p[4]=m*a5+s*a8+q*b1
p[5]=n*a5+d*a8+b*b1
p[6]=a*a5+a0*a8+a1*b1
p[7]=a2*a5+e*a8+c*b1
p[8]=m*a6+s*a9+q*b2
p[9]=n*a6+d*a9+b*b2
p[10]=a*a6+a0*a9+a1*b2
p[11]=a2*a6+e*a9+c*b2
this.d.d0()
C.au.gdS(window).ce(this)
this.b.de(t.a)},
$S:function(){return{func:1,v:true,args:[P.X]}}}
J.a.prototype.cS=J.a.prototype.l
J.bz.prototype.cU=J.bz.prototype.l
P.Y.prototype.cT=P.Y.prototype.aC
W.a4.prototype.aG=W.a4.prototype.N
W.bV.prototype.cV=W.bV.prototype.X;(function installTearOffs(){installTearOff(H.b3.prototype,"ger",0,0,0,null,["$0"],["az"],0)
installTearOff(H.al.prototype,"gcE",0,0,0,null,["$1"],["L"],2)
installTearOff(H.b2.prototype,"ge9",0,0,0,null,["$1"],["Z"],2)
installTearOff(P,"mG",1,0,0,null,["$1"],["mn"],1)
installTearOff(P,"mH",1,0,0,null,["$1"],["mo"],1)
installTearOff(P,"mI",1,0,0,null,["$1"],["mp"],1)
installTearOff(P,"kG",1,0,0,null,["$0"],["mE"],0)
installTearOff(P.aw.prototype,"gdr",0,0,0,null,["$2","$1"],["as","ds"],5)
installTearOff(P,"mN",1,0,0,null,["$2"],["lL"],7)
installTearOff(W,"mS",1,0,0,null,["$1"],["lR"],8)
installTearOff(W,"mT",1,0,0,null,["$4"],["mt"],4)
installTearOff(W,"mU",1,0,0,null,["$4"],["mu"],4)
installTearOff(W.d9.prototype,"gb_",0,1,0,null,["$0"],["b0"],3)
installTearOff(W.dq.prototype,"gb_",0,1,0,null,["$0"],["b0"],3)
installTearOff(R.dh.prototype,"geB",0,0,0,null,["$1"],["cb"],6)
installTearOff(Q,"kW",1,0,0,null,["$0"],["n1"],0)})();(function inheritance(){inherit(P.p,null)
var t=P.p
inherit(H.j6,t)
inherit(J.a,t)
inherit(J.dM,t)
inherit(P.Y,t)
inherit(H.d1,t)
inherit(P.cY,t)
inherit(H.ce,t)
inherit(H.b7,t)
inherit(H.hU,t)
inherit(H.b3,t)
inherit(H.hx,t)
inherit(H.b4,t)
inherit(H.hT,t)
inherit(H.hq,t)
inherit(H.bd,t)
inherit(H.h_,t)
inherit(H.aq,t)
inherit(H.al,t)
inherit(H.b2,t)
inherit(H.ft,t)
inherit(H.h6,t)
inherit(P.b9,t)
inherit(H.dz,t)
inherit(H.aE,t)
inherit(H.ah,t)
inherit(H.eK,t)
inherit(H.eM,t)
inherit(P.hs,t)
inherit(P.dw,t)
inherit(P.aw,t)
inherit(P.du,t)
inherit(P.fM,t)
inherit(P.fN,t)
inherit(P.b6,t)
inherit(P.ii,t)
inherit(P.fC,t)
inherit(P.hR,t)
inherit(P.bT,t)
inherit(P.bI,t)
inherit(P.x,t)
inherit(P.hS,t)
inherit(P.ay,t)
inherit(P.J,t)
inherit(P.bo,t)
inherit(P.X,t)
inherit(P.aP,t)
inherit(P.dk,t)
inherit(P.hC,t)
inherit(P.e4,t)
inherit(P.b,t)
inherit(P.aC,t)
inherit(P.aW,t)
inherit(P.bL,t)
inherit(P.t,t)
inherit(P.bM,t)
inherit(W.dU,t)
inherit(W.hp,t)
inherit(W.bS,t)
inherit(W.B,t)
inherit(W.db,t)
inherit(W.bV,t)
inherit(W.i9,t)
inherit(W.cf,t)
inherit(W.da,t)
inherit(W.i3,t)
inherit(W.dA,t)
inherit(P.hW,t)
inherit(G.eY,t)
inherit(G.dS,t)
inherit(G.eu,t)
inherit(G.A,t)
inherit(G.en,t)
inherit(G.cg,t)
inherit(G.dp,t)
inherit(G.dn,t)
inherit(G.y,t)
inherit(G.be,t)
inherit(R.fJ,t)
inherit(T.aV,t)
inherit(T.S,t)
inherit(T.v,t)
inherit(T.m,t)
inherit(T.aG,t)
t=J.a
inherit(J.eF,t)
inherit(J.eG,t)
inherit(J.bz,t)
inherit(J.aQ,t)
inherit(J.ba,t)
inherit(J.aR,t)
inherit(H.bC,t)
inherit(H.bc,t)
inherit(W.h,t)
inherit(W.a2,t)
inherit(W.c5,t)
inherit(W.dQ,t)
inherit(W.z,t)
inherit(W.cj,t)
inherit(W.dW,t)
inherit(W.dX,t)
inherit(W.dY,t)
inherit(W.ca,t)
inherit(W.cb,t)
inherit(W.cc,t)
inherit(W.cs,t)
inherit(W.e0,t)
inherit(W.i,t)
inherit(W.cr,t)
inherit(W.a6,t)
inherit(W.ew,t)
inherit(W.cD,t)
inherit(W.eO,t)
inherit(W.eU,t)
inherit(W.a7,t)
inherit(W.cp,t)
inherit(W.f6,t)
inherit(W.d9,t)
inherit(W.co,t)
inherit(W.ff,t)
inherit(W.bf,t)
inherit(W.a8,t)
inherit(W.cn,t)
inherit(W.aj,t)
inherit(W.df,t)
inherit(W.aa,t)
inherit(W.cC,t)
inherit(W.ab,t)
inherit(W.fL,t)
inherit(W.Z,t)
inherit(W.cB,t)
inherit(W.fZ,t)
inherit(W.ad,t)
inherit(W.ct,t)
inherit(W.h3,t)
inherit(W.dq,t)
inherit(W.ha,t)
inherit(W.hf,t)
inherit(W.hr,t)
inherit(W.ck,t)
inherit(W.cy,t)
inherit(W.cx,t)
inherit(W.cw,t)
inherit(W.cm,t)
inherit(W.cu,t)
inherit(W.ig,t)
inherit(W.ih,t)
inherit(P.ar,t)
inherit(P.cz,t)
inherit(P.as,t)
inherit(P.cq,t)
inherit(P.fl,t)
inherit(P.fm,t)
inherit(P.fr,t)
inherit(P.cl,t)
inherit(P.at,t)
inherit(P.cv,t)
inherit(P.he,t)
inherit(P.dN,t)
inherit(P.fw,t)
inherit(P.fx,t)
inherit(P.ie,t)
inherit(P.cA,t)
t=J.bz
inherit(J.fj,t)
inherit(J.b_,t)
inherit(J.aS,t)
inherit(J.j5,J.aQ)
t=J.ba
inherit(J.d_,t)
inherit(J.cZ,t)
t=P.Y
inherit(H.c,t)
inherit(H.d2,t)
inherit(H.dt,t)
t=H.c
inherit(H.bb,t)
inherit(H.eL,t)
inherit(H.e3,H.d2)
t=P.cY
inherit(H.eP,t)
inherit(H.hh,t)
t=H.bb
inherit(H.bA,t)
inherit(P.eN,t)
t=H.b7
inherit(H.iR,t)
inherit(H.iS,t)
inherit(H.hP,t)
inherit(H.hy,t)
inherit(H.eB,t)
inherit(H.eC,t)
inherit(H.hV,t)
inherit(H.h0,t)
inherit(H.h1,t)
inherit(H.iT,t)
inherit(H.iC,t)
inherit(H.iD,t)
inherit(H.iE,t)
inherit(H.iF,t)
inherit(H.iG,t)
inherit(H.fV,t)
inherit(H.eH,t)
inherit(H.iy,t)
inherit(H.iz,t)
inherit(H.iA,t)
inherit(P.hm,t)
inherit(P.hl,t)
inherit(P.hn,t)
inherit(P.ho,t)
inherit(P.hD,t)
inherit(P.hH,t)
inherit(P.hE,t)
inherit(P.hF,t)
inherit(P.hG,t)
inherit(P.hK,t)
inherit(P.hL,t)
inherit(P.hJ,t)
inherit(P.hI,t)
inherit(P.fO,t)
inherit(P.fP,t)
inherit(P.il,t)
inherit(P.hZ,t)
inherit(P.hY,t)
inherit(P.i_,t)
inherit(P.eQ,t)
inherit(P.e1,t)
inherit(P.e2,t)
inherit(W.ip,t)
inherit(W.hi,t)
inherit(W.hB,t)
inherit(W.f8,t)
inherit(W.f7,t)
inherit(W.i5,t)
inherit(W.i6,t)
inherit(W.ic,t)
inherit(W.id,t)
inherit(P.iq,t)
inherit(B.iM,t)
inherit(B.iN,t)
inherit(B.iO,t)
inherit(B.iP,t)
inherit(B.iQ,t)
inherit(B.fb,t)
inherit(B.fc,t)
inherit(B.fd,t)
inherit(B.fe,t)
inherit(A.ix,t)
inherit(Q.iI,t)
t=H.hq
inherit(H.bg,t)
inherit(H.bW,t)
t=P.b9
inherit(H.dc,t)
inherit(H.eI,t)
inherit(H.h9,t)
inherit(H.h8,t)
inherit(H.dR,t)
inherit(H.fz,t)
inherit(P.c4,t)
inherit(P.dd,t)
inherit(P.af,t)
inherit(P.u,t)
inherit(P.ds,t)
inherit(P.aD,t)
inherit(P.a3,t)
inherit(P.dV,t)
t=H.fV
inherit(H.fI,t)
inherit(H.bn,t)
inherit(H.hk,P.c4)
t=H.bc
inherit(H.eZ,t)
inherit(H.d4,t)
t=H.d4
inherit(H.bE,t)
inherit(H.bD,t)
inherit(H.bF,H.bE)
inherit(H.d5,H.bF)
inherit(H.bG,H.bD)
inherit(H.d6,H.bG)
t=H.d5
inherit(H.d3,t)
inherit(H.f_,t)
t=H.d6
inherit(H.f0,t)
inherit(H.f1,t)
inherit(H.f2,t)
inherit(H.f3,t)
inherit(H.f4,t)
inherit(H.d7,t)
inherit(H.f5,t)
inherit(P.ia,P.hs)
inherit(P.hX,P.ii)
inherit(P.dx,H.ah)
inherit(P.fB,P.fC)
inherit(P.hO,P.fB)
inherit(P.hQ,P.hO)
inherit(P.d0,P.bI)
t=P.X
inherit(P.N,t)
inherit(P.o,t)
t=P.af
inherit(P.dg,t)
inherit(P.ez,t)
t=W.h
inherit(W.r,t)
inherit(W.br,t)
inherit(W.dT,t)
inherit(W.ep,t)
inherit(W.by,t)
inherit(W.bB,t)
inherit(W.fo,t)
inherit(W.di,t)
inherit(W.fD,t)
inherit(W.a9,t)
inherit(W.bs,t)
inherit(W.ac,t)
inherit(W.a_,t)
inherit(W.bt,t)
inherit(W.hc,t)
inherit(W.hg,t)
inherit(W.bP,t)
inherit(W.hj,t)
inherit(W.b1,t)
inherit(W.i4,t)
t=W.r
inherit(W.a4,t)
inherit(W.aO,t)
inherit(W.bp,t)
inherit(W.c9,t)
inherit(W.hu,t)
t=W.a4
inherit(W.k,t)
inherit(P.I,t)
t=W.k
inherit(W.dK,t)
inherit(W.dL,t)
inherit(W.aN,t)
inherit(W.c6,t)
inherit(W.c8,t)
inherit(W.et,t)
inherit(W.ch,t)
inherit(W.eA,t)
inherit(W.fA,t)
inherit(W.dl,t)
inherit(W.fT,t)
inherit(W.fU,t)
inherit(W.bN,t)
inherit(W.hN,t)
inherit(W.bw,W.br)
inherit(W.dO,W.bw)
inherit(W.b8,W.cj)
inherit(W.dZ,W.cb)
inherit(W.cW,W.cs)
inherit(W.e_,W.cW)
inherit(W.a5,W.c5)
inherit(W.cU,W.cr)
inherit(W.eo,W.cU)
inherit(W.cO,W.cD)
inherit(W.bx,W.cO)
inherit(W.ci,W.bp)
inherit(W.ex,W.by)
inherit(W.aF,W.i)
t=W.aF
inherit(W.aT,t)
inherit(W.P,t)
inherit(W.aZ,t)
inherit(W.eW,W.bB)
inherit(W.cQ,W.cp)
inherit(W.eX,W.cQ)
inherit(W.U,P.d0)
inherit(W.cF,W.co)
inherit(W.bH,W.cF)
t=W.bf
inherit(W.fi,t)
inherit(W.fy,t)
inherit(W.h5,t)
inherit(W.cL,W.cn)
inherit(W.fk,W.cL)
inherit(W.fn,W.aj)
inherit(W.bv,W.bs)
inherit(W.fE,W.bv)
inherit(W.cV,W.cC)
inherit(W.fG,W.cV)
inherit(W.cE,W.cB)
inherit(W.fX,W.cE)
inherit(W.bu,W.bt)
inherit(W.fY,W.bu)
inherit(W.cH,W.ct)
inherit(W.h2,W.cH)
inherit(W.b0,W.P)
inherit(W.cX,W.ck)
inherit(W.dv,W.cX)
inherit(W.cR,W.cy)
inherit(W.ht,W.cR)
inherit(W.hv,W.cc)
inherit(W.cT,W.cx)
inherit(W.hM,W.cT)
inherit(W.cG,W.cw)
inherit(W.dy,W.cG)
inherit(W.cP,W.cm)
inherit(W.i7,W.cP)
inherit(W.cI,W.cu)
inherit(W.i8,W.cI)
inherit(W.hw,W.hp)
inherit(W.hz,P.fM)
inherit(W.jf,W.hz)
inherit(W.hA,P.fN)
inherit(W.ib,W.bV)
inherit(P.K,P.hW)
t=P.I
inherit(P.aB,t)
inherit(P.aM,t)
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
inherit(P.em,t)
inherit(P.eq,t)
inherit(P.eR,t)
inherit(P.eS,t)
inherit(P.fg,t)
inherit(P.bK,t)
inherit(P.fS,t)
inherit(P.hd,t)
inherit(P.bR,t)
inherit(P.i0,t)
inherit(P.i1,t)
inherit(P.i2,t)
t=P.aB
inherit(P.dJ,t)
inherit(P.es,t)
inherit(P.ag,t)
inherit(P.ey,t)
inherit(P.fR,t)
inherit(P.dm,t)
inherit(P.hb,t)
inherit(P.cJ,P.cz)
inherit(P.eJ,P.cJ)
inherit(P.cS,P.cq)
inherit(P.f9,P.cS)
inherit(P.fs,P.ag)
inherit(P.cM,P.cl)
inherit(P.fQ,P.cM)
t=P.dm
inherit(P.fW,t)
inherit(P.bO,t)
inherit(P.cK,P.cv)
inherit(P.h4,P.cK)
inherit(P.cN,P.cA)
inherit(P.fH,P.cN)
t=G.eY
inherit(G.fF,t)
inherit(G.dr,t)
inherit(G.eV,t)
inherit(G.fv,t)
inherit(A.fu,t)
inherit(A.bJ,t)
t=G.fF
inherit(G.dP,t)
inherit(A.d8,t)
inherit(B.fa,G.dP)
t=G.dr
inherit(G.eT,t)
inherit(G.fh,t)
inherit(R.dh,A.fu)
inherit(R.fK,R.fJ)
mixin(H.bD,P.x)
mixin(H.bE,P.x)
mixin(H.bF,H.ce)
mixin(H.bG,H.ce)
mixin(P.bI,P.x)
mixin(W.br,P.x)
mixin(W.bs,P.x)
mixin(W.bt,P.x)
mixin(W.bu,W.B)
mixin(W.bv,W.B)
mixin(W.bw,W.B)
mixin(W.cj,W.dU)
mixin(W.cD,P.x)
mixin(W.cp,P.x)
mixin(W.cm,P.x)
mixin(W.cw,P.x)
mixin(W.cx,P.x)
mixin(W.cy,P.x)
mixin(W.cB,P.x)
mixin(W.cC,P.x)
mixin(W.ck,P.x)
mixin(W.cn,P.x)
mixin(W.co,P.x)
mixin(W.cr,P.x)
mixin(W.cs,P.x)
mixin(W.ct,P.x)
mixin(W.cu,P.x)
mixin(W.cE,W.B)
mixin(W.cF,W.B)
mixin(W.cG,W.B)
mixin(W.cQ,W.B)
mixin(W.cR,W.B)
mixin(W.cO,W.B)
mixin(W.cP,W.B)
mixin(W.cU,W.B)
mixin(W.cV,W.B)
mixin(W.cW,W.B)
mixin(W.cX,W.B)
mixin(W.cH,W.B)
mixin(W.cI,W.B)
mixin(W.cL,W.B)
mixin(W.cT,W.B)
mixin(P.cz,P.x)
mixin(P.cl,P.x)
mixin(P.cq,P.x)
mixin(P.cv,P.x)
mixin(P.cJ,W.B)
mixin(P.cK,W.B)
mixin(P.cM,W.B)
mixin(P.cS,W.B)
mixin(P.cA,P.x)
mixin(P.cN,W.B)})();(function constants(){C.n=W.aN.prototype
C.H=W.c6.prototype
C.u=W.b8.prototype
C.o=W.c8.prototype
C.I=W.ca.prototype
C.J=W.ch.prototype
C.p=W.ci.prototype
C.K=J.a.prototype
C.a=J.aQ.prototype
C.w=J.cZ.prototype
C.b=J.d_.prototype
C.c=J.ba.prototype
C.i=J.aR.prototype
C.R=J.aS.prototype
C.V=H.d3.prototype
C.z=W.bH.prototype
C.A=J.fj.prototype
C.B=W.df.prototype
C.G=W.dl.prototype
C.t=J.b_.prototype
C.at=W.b0.prototype
C.au=W.bP.prototype
C.f=new P.hX()
C.v=new P.aP(0)
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
C.S=H.E(makeConstList(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.t])
C.T=makeConstList(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.U=makeConstList([])
C.q=H.E(makeConstList(["bind","if","ref","repeat","syntax"]),[P.t])
C.r=H.E(makeConstList(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.t])
C.W=new G.y("vec3","vertex btangents",0)
C.d=new G.y("vec3","",0)
C.X=new G.y("vec4","delta from light",0)
C.m=new G.y("","",0)
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
C.ab=H.M("nc")
C.ac=H.M("nd")
C.ad=H.M("er")
C.ae=H.M("ne")
C.af=H.M("nf")
C.ag=H.M("k1")
C.ah=H.M("ng")
C.ai=H.M("k4")
C.aj=H.M("aW")
C.ak=H.M("t")
C.al=H.M("kp")
C.am=H.M("kq")
C.an=H.M("nh")
C.ao=H.M("kr")
C.ap=H.M("ay")
C.aq=H.M("N")
C.ar=H.M("o")
C.as=H.M("X")})();(function staticFields(){$.k8="$cachedFunction"
$.k9="$cachedInvocation"
$.jL=null
$.jJ=null
$.jh=!1
$.jl=null
$.kD=null
$.kT=null
$.it=null
$.iB=null
$.jm=null
$.bh=null
$.bX=null
$.bY=null
$.ji=!1
$.D=C.f
$.jX=0
$.aA=null
$.j2=null
$.jW=null
$.jV=null
$.jT=null
$.jS=null
$.jR=null
$.jQ=null
$.mK=0
$.mL=0
$.jq=0
$.kR=0
$.c2=0
$.c3=0
$.n8=!1
$.kL=0})();(function lazyInitializers(){lazy($,"jP","$get$jP",function(){return H.kO("_$dart_dartClosure")})
lazy($,"j7","$get$j7",function(){return H.kO("_$dart_js")})
lazy($,"k2","$get$k2",function(){return H.m0()})
lazy($,"k3","$get$k3",function(){if(typeof WeakMap=="function")var t=new WeakMap()
else{t=$.jX
$.jX=t+1
t="expando$key$"+t}return new P.e4(null,t,[P.o])})
lazy($,"ke","$get$ke",function(){return H.au(H.h7({
toString:function(){return"$receiver$"}}))})
lazy($,"kf","$get$kf",function(){return H.au(H.h7({$method$:null,
toString:function(){return"$receiver$"}}))})
lazy($,"kg","$get$kg",function(){return H.au(H.h7(null))})
lazy($,"kh","$get$kh",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kl","$get$kl",function(){return H.au(H.h7(void 0))})
lazy($,"km","$get$km",function(){return H.au(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
lazy($,"kj","$get$kj",function(){return H.au(H.kk(null))})
lazy($,"ki","$get$ki",function(){return H.au(function(){try{null.$method$}catch(t){return t.message}}())})
lazy($,"ko","$get$ko",function(){return H.au(H.kk(void 0))})
lazy($,"kn","$get$kn",function(){return H.au(function(){try{(void 0).$method$}catch(t){return t.message}}())})
lazy($,"je","$get$je",function(){return P.mm()})
lazy($,"bZ","$get$bZ",function(){return[]})
lazy($,"jO","$get$jO",function(){return{}})
lazy($,"kw","$get$kw",function(){return P.j9(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)})
lazy($,"jg","$get$jg",function(){return P.O()})
lazy($,"is","$get$is",function(){return P.k5(P.o,P.ay)})
lazy($,"c0","$get$c0",function(){return P.k5(P.t,P.ay)})
lazy($,"kc","$get$kc",function(){return new G.dp(1281,0,4294967295)})
lazy($,"jH","$get$jH",function(){return new G.dn(1281,1281,1281)})
lazy($,"V","$get$V",function(){return P.aU(["cBlendEquation",C.m,"cDepthWrite",C.m,"cDepthTest",C.m,"cStencilFunc",C.m,"tPosition",C.d,"tSpeed",C.d,"tForce",C.d,"aColors",C.E,"aColorAlpha",C.Z,"aPosition",C.C,"aTexUV",C.a5,"aNormal",C.a8,"aBinormal",C.Y,"aCenter",C.D,"aPointSize",C.e,"aBoneIndex",C.l,"aBoneWeight",C.l,"aTangent",C.aa,"aBitangent",C.W,"iaRotation",C.l,"iaTranslation",C.d,"iaScale",C.d,"vColor",C.E,"vTexUV",C.k,"vLightWeighting",C.d,"vNormal",C.d,"vPosition",C.C,"vPositionFromLight",C.X,"vCenter",C.D,"vDepth",C.a3,"uTransformationMatrix",C.j,"uModelMatrix",C.j,"uNormalMatrix",C.F,"uConvolutionMatrix",C.F,"uPerspectiveViewMatrix",C.j,"uLightPerspectiveViewMatrix",C.j,"uShadowMap",C.a9,"uTexture",C.h,"uTexture2",C.h,"uTexture3",C.h,"uTexture4",C.h,"uSpecularMap",C.h,"uNormalMap",C.h,"uBumpMap",C.h,"uDepthMap",C.h,"uCubeTexture",C.a7,"uAnimationTable",C.h,"uTime",C.a6,"uCameraNear",C.e,"uCameraFar",C.e,"uFogNear",C.e,"uFogFar",C.e,"uPointSize",C.e,"uScale",C.e,"uAngle",C.e,"uCanvasSize",C.k,"uCenter2",C.k,"uCutOff",C.e,"uShininess",C.e,"uShadowBias",C.e,"uOpacity",C.e,"uColor",C.d,"uAmbientDiffuse",C.d,"uColorEmissive",C.d,"uColorSpecular",C.d,"uColorDiffuse",C.d,"uColorAlpha",C.l,"uColorAlpha2",C.l,"uEyePosition",C.d,"uMaterial",C.j,"uRange",C.k,"uDirection",C.k,"uBoneMatrices",C.a0,"uLightDescs",C.a1,"uLightCount",C.e,"uLightTypes",C.a2,"uBumpScale",C.a4,"uNormalScale",C.a_])})
lazy($,"kI","$get$kI",function(){var t=new G.be("FixedVertexColorV",null,[],[],[],[],0,P.O())
t.be(["aPosition"])
t.bh(["uPerspectiveViewMatrix","uModelMatrix"])
t.ap(["vColor"])
t.bl(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vColor = ColorFromPosition(aPosition);"],["// ============================================================\n// MISC\n// ============================================================\n\nvec3 ColorFromPosition(vec3 pos) {\n    return vec3( sin(pos.x) / 2.0 + 0.5,\n                 cos(pos.y) / 2.0 + 0.5,\n                 sin(pos.z) / 2.0 + 0.5);\n}\n\nvec3 RangeToGray(float f, float a, float b) {\n    if (f > a) return vec3(1.0);\n    if (f < b) return vec3(0.0);\n    return vec3 ((f - b) / (a-b));\n}\n\nfloat useValueButReturnZero(float x) {\n    return (x + 1.0) * (x + 1.0) - x * x - 2.0 * x - 1.0;\n}\n\n// ============================================================\n// LIGHT\n// ============================================================\n\nfloat GetDiffuse(vec3 lightDir, vec3 normal) {\n    return max(dot(normal, lightDir), 0.0);\n}\n\nfloat GetSpecular(vec3 lightDir, vec3 viewDir, vec3 normal, float glossiness) {\n    vec3 angleW = normalize(viewDir + lightDir);\n    float specComp = max(0., dot(normal, angleW));\n    return pow(specComp, max(1.0, glossiness));\n}\n\nstruct ColorComponents {\n   vec3 diffuse;\n   vec3 specular;\n};\n\n// ============================================================\n// Spot Light\n// ============================================================\n\nstruct SpotLightInfo {\n    vec3 pos;      // for spot and point\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;        // for spot and point\n    float spotCutoff;   // for spot\n    float spotFocus;    // for spot\n    float glossiness;   // Oddball: this comes from the material\n};\n\nSpotLightInfo UnpackSpotLightInfo(mat4 m) {\n    SpotLightInfo info;\n    info.pos = m[0].xyz;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    info.range = m[1].a;\n    info.spotCutoff = m[2].a;\n    info.spotFocus = m[3].a;\n    return info;\n}\n\nColorComponents SpotLightGetDiffuseAndSpecular(SpotLightInfo light,\n                                               vec3 vertexPos,\n                                               vec3 vertexNormal,\n                                               vec3 eyePos,\n                                               float uShininess) {\n    vec3 toSpot = light.pos - vertexPos;\n    vec3 spotDir = normalize(toSpot);\n    vec3 lightDirNorm = -normalize(light.dir);\n    float cosAngle = max(0., dot(lightDirNorm, spotDir));\n\t  if (cosAngle < light.spotCutoff) {\n        return ColorComponents(vec3(0.0), vec3(0.0));\n    }\n\n    cosAngle = max(0.0, pow(cosAngle, light.spotFocus));\n\t  float attenuation = max(0.0, 1.0 - length(toSpot) / light.range) * cosAngle;\n\t  vec3 viewDirNorm = normalize(eyePos - vertexPos);\n\t  return ColorComponents(\n\t           attenuation *\n             GetDiffuse(lightDirNorm, vertexNormal) *\n             light.diffuseColor,\n             attenuation *\n             GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n             light.specularColor);\n}\n\n// ============================================================\n// Point Light\n// ============================================================\n\nstruct PointLightInfo {\n    vec3 pos;\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float range;\n    float glossiness;\n};\n\nPointLightInfo UnpackPointLightInfo(mat4 m) {\n    PointLightInfo info;\n    info.pos = m[0].xyz;\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.range = m[1].a;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents PointLightGetDiffuseAndSpecular(PointLightInfo info,\n                                     vec3 vertexPos,\n                                     vec3 vertexNormal,\n                                     vec3 eyePos,\n                                     float uShininess) {\n    vec3 lightDir = info.pos - vertexPos;\n    float attenuation = max(0.0, 1.0 - length(lightDir) / info.range);\n    vec3 lightDirNorm = normalize(lightDir);\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              attenuation *\n              GetDiffuse(lightDirNorm, vertexNormal) *\n              info.diffuseColor,\n               attenuation *\n               GetSpecular(lightDirNorm, viewDirNorm, vertexNormal, uShininess) *\n               info.specularColor);\n}\n\n// ============================================================\n// Directional Light\n// ============================================================\n\nstruct DirectionalLightInfo {\n    vec3 dir;      // for spot and dir light\n    vec3 diffuseColor;\n    vec3 specularColor;\n    float glossiness;   // Oddball: this comes from the material\n};\n\nDirectionalLightInfo UnpackDirectionalLightInfo(mat4 m) {\n    DirectionalLightInfo info;\n    info.dir = normalize(m[1].xyz);\n    info.diffuseColor = m[2].xyz;\n    info.specularColor = m[3].xyz;\n    info.glossiness = m[0].a;\n    return info;\n}\n\nColorComponents DirectionalLightGetDiffuseAndSpecular(DirectionalLightInfo info,\n                                                      vec3 vertexPos,\n                                                      vec3 vertexNormal,\n                                                      vec3 eyePos,\n                                                      float uShininess) {\n    vec3 viewDirNorm = normalize(eyePos - vertexPos);\n    return ColorComponents(\n              GetDiffuse(-info.dir, vertexNormal) *\n              info.diffuseColor,\n              GetSpecular(-info.dir, viewDirNorm, vertexNormal, uShininess) *\n              info.specularColor);\n}\n\n\nColorComponents CombinedLightSpot(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    SpotLightInfo info = UnpackSpotLightInfo(lightDesc);\n    return SpotLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightPoint(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    PointLightInfo info = UnpackPointLightInfo(lightDesc);\n    return PointLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\nColorComponents CombinedLightDirectional(\n    vec3 vVertexPosition, vec3 vNormal, vec3 uEyePosition, mat4 lightDesc,\n    float shininess) {\n    DirectionalLightInfo info = UnpackDirectionalLightInfo(lightDesc);\n    return DirectionalLightGetDiffuseAndSpecular(\n        info, vVertexPosition, vNormal, uEyePosition, shininess);\n}\n\n// ============================================================\n// Combined Light\n// ============================================================\nColorComponents CombinedLight(vec3 vVertexPosition,\n                   vec3 vNormal,\n                   vec3 uEyePosition,\n                   const mat4 uLightDescs[4],\n                   const float uLightTypes[4],\n                   float uShininess) {\n    ColorComponents acc = ColorComponents(vec3(0.0), vec3(0.0));\n\n    for (int i = 0; i < 4; ++i) {\n        ColorComponents curr;\n        float type = uLightTypes[i];\n        if (type == 2.0) {\n            curr = CombinedLightSpot(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 3.0) {\n            curr = CombinedLightPoint(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else if (type == 1.0) {\n            curr = CombinedLightDirectional(\n                       vVertexPosition, vNormal, uEyePosition, uLightDescs[i], \n                       uShininess);\n        } else {\n            continue;\n        }\n        acc.diffuse = acc.diffuse + curr.diffuse;\n        acc.specular = acc.specular + curr.specular;\n    }\n    return acc;\n}\n"])
return t})
lazy($,"kH","$get$kH",function(){var t=new G.be("FixedVertexColorF",null,[],[],[],[],0,P.O())
t.ap(["vColor"])
t.aI(["oFragColor = vec4( vColor, 1.0 );"])
return t})
lazy($,"kt","$get$kt",function(){return[T.L(0,0,1),T.L(0,0,-1),T.L(0,1,0),T.L(0,-1,0),T.L(1,0,0),T.L(-1,0,0)]})
lazy($,"k_","$get$k_",function(){return[new G.A(0,11,5),new G.A(0,5,1),new G.A(0,1,7),new G.A(0,7,10),new G.A(0,10,11),new G.A(1,5,9),new G.A(5,11,4),new G.A(11,10,2),new G.A(10,7,6),new G.A(7,1,8),new G.A(3,9,4),new G.A(3,4,2),new G.A(3,2,6),new G.A(3,6,8),new G.A(3,8,9),new G.A(4,9,5),new G.A(2,4,11),new G.A(6,2,10),new G.A(8,6,7),new G.A(9,8,1)]})
lazy($,"kY","$get$kY",function(){return(1+P.n9(5))/2})
lazy($,"k0","$get$k0",function(){var t,s,r,q,p,o,n,m,l,k,j,i
t=$.$get$kY()
s=T.L(-1,t,0)
s.F(0)
r=T.L(1,t,0)
r.F(0)
q=T.L(-1,-t,0)
q.F(0)
p=T.L(1,-t,0)
p.F(0)
o=T.L(0,-1,t)
o.F(0)
n=T.L(0,1,t)
n.F(0)
m=T.L(0,-1,-t)
m.F(0)
l=T.L(0,1,-t)
l.F(0)
k=T.L(t,0,-1)
k.F(0)
j=T.L(t,0,1)
j.F(0)
i=T.L(-t,0,-1)
i.F(0)
t=T.L(-t,0,1)
t.F(0)
return[s,r,q,p,o,n,m,l,k,j,i,t]})
lazy($,"kV","$get$kV",function(){var t=new G.be("SkyScraperV",null,[],[],[],[],0,P.O())
t.be(["aPosition","aTexUV"])
t.ap(["vPosition","vTexUV"])
t.bh(["uPerspectiveViewMatrix","uModelMatrix"])
t.aI(["gl_Position = uPerspectiveViewMatrix * uModelMatrix * vec4(aPosition, 1.0);","vPosition = aPosition;","vTexUV = aTexUV;"])
return t})
lazy($,"kU","$get$kU",function(){var t=new G.be("SkyScraperF",null,[],[],[],[],0,P.O())
t.ap(["vPosition","vTexUV"])
t.aI(["      // the step finds the windows\n      // multiplying the tex coord with 11 gives it a black column on the right side but with artifacts\n      // multiplying the tex coord with 10.9 gives it a black column on the right side WITHOUT the\n      // artifacts on the right side\n      float s1 = step(mod(vTexUV.x*11.+1., 2.), 1.);\n      float s2 = step(mod(vTexUV.y*21.+1., 2.), 1.);\n      float s3 = step( s1+s2, 1.1);\n\n      oFragColor = vec4( 1.-s3, 1.-s3, 1.-s3, 1. );\n\n      //gl_FragColor = vec4( mod(vPosition.x*10.0,2.0) ,\n      //                       mod(vPosition.y*20.0,2.0),\n      //                       mod(vPosition.z*10.0,2.0), 1. );\n"])
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
mangledGlobalNames:{o:"int",N:"double",X:"num",t:"String",ay:"bool",aW:"Null",b:"List"},
mangledNames:{},
getTypeFromName:getGlobalFromName,
metadata:[],
types:[{func:1,v:true},{func:1,v:true,args:[{func:1,v:true}]},{func:1,args:[,]},{func:1,ret:W.r},{func:1,ret:P.ay,args:[W.a4,P.t,P.t,W.bS]},{func:1,v:true,args:[P.p],opt:[P.bL]},{func:1,v:true,args:[W.i]},{func:1,ret:P.o,args:[P.J,P.J]},{func:1,ret:P.t,args:[W.h]}],
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
setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationTimeline:J.a,AppBannerPromptResult:J.a,BarProp:J.a,Body:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CHROMIUMValuebuffer:J.a,CircularGeofencingRegion:J.a,Client:J.a,Clients:J.a,CompositorProxy:J.a,ConsoleBase:J.a,Coordinates:J.a,Credential:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMStringMap:J.a,EffectModel:J.a,Entry:J.a,FederatedCredential:J.a,FileEntry:J.a,FileError:J.a,Stream:J.a,DOMFileSystem:J.a,FontFace:J.a,FormData:J.a,GamepadButton:J.a,Geofencing:J.a,GeofencingRegion:J.a,Geolocation:J.a,Geoposition:J.a,Headers:J.a,HMDVRDevice:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageData:J.a,InjectedScriptHost:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,KeyframeEffect:J.a,MediaDeviceInfo:J.a,MediaDevices:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaMetadata:J.a,MediaSession:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MIDIInputMap:J.a,MIDIOutputMap:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigatorStorageUtils:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,OffscreenCanvas:J.a,PasswordCredential:J.a,PerformanceCompositeTiming:J.a,PerformanceEntry:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformanceRenderTiming:J.a,PerformanceResourceTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PositionError:J.a,PositionSensorVRDevice:J.a,Presentation:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,ReadableByteStream:J.a,ReadableByteStreamReader:J.a,ReadableStreamReader:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsReport:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,Selection:J.a,ServicePort:J.a,SharedArrayBuffer:J.a,SourceInfo:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StorageInfo:J.a,StorageManager:J.a,StorageQuota:J.a,StyleMedia:J.a,StylePropertyMap:J.a,SyncManager:J.a,TextMetrics:J.a,TrackDefault:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRDevice:J.a,VREyeParameters:J.a,VRFieldOfView:J.a,VRPositionState:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkerConsole:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothAdvertisingData:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,NFC:J.a,PagePopupController:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WebKitCSSMatrix:J.a,Worklet:J.a,WorkletGlobalScope:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPreserveAspectRatio:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,CHROMIUMSubscribeUniform:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTDisjointTimerQuery:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bC,ArrayBufferView:H.bc,DataView:H.eZ,Float32Array:H.d3,Float64Array:H.f_,Int16Array:H.f0,Int32Array:H.f1,Int8Array:H.f2,Uint16Array:H.f3,Uint32Array:H.f4,Uint8ClampedArray:H.d7,CanvasPixelArray:H.d7,Uint8Array:H.f5,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLKeygenElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMenuItemElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTextAreaElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,HTMLAnchorElement:W.dK,HTMLAreaElement:W.dL,AudioTrack:W.a2,AudioTrackList:W.dO,Blob:W.c5,HTMLBodyElement:W.aN,HTMLCanvasElement:W.c6,CanvasRenderingContext2D:W.dQ,CDATASection:W.aO,CharacterData:W.aO,Comment:W.aO,ProcessingInstruction:W.aO,Text:W.aO,CompositorWorker:W.dT,CSSCharsetRule:W.z,CSSFontFaceRule:W.z,CSSGroupingRule:W.z,CSSImportRule:W.z,CSSKeyframeRule:W.z,MozCSSKeyframeRule:W.z,WebKitCSSKeyframeRule:W.z,CSSKeyframesRule:W.z,MozCSSKeyframesRule:W.z,WebKitCSSKeyframesRule:W.z,CSSMediaRule:W.z,CSSNamespaceRule:W.z,CSSPageRule:W.z,CSSRule:W.z,CSSStyleRule:W.z,CSSSupportsRule:W.z,CSSViewportRule:W.z,CSSStyleDeclaration:W.b8,MSStyleCSSProperties:W.b8,CSS2Properties:W.b8,DataTransferItemList:W.dW,DeviceAcceleration:W.dX,HTMLDivElement:W.c8,XMLDocument:W.bp,Document:W.bp,DocumentFragment:W.c9,ShadowRoot:W.c9,DOMException:W.dY,DOMImplementation:W.ca,DOMPoint:W.dZ,DOMPointReadOnly:W.cb,DOMRectReadOnly:W.cc,DOMStringList:W.e_,DOMTokenList:W.e0,Element:W.a4,AnimationEvent:W.i,AnimationPlayerEvent:W.i,ApplicationCacheErrorEvent:W.i,AutocompleteErrorEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceLightEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,GamepadEvent:W.i,GeofencingEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RelatedEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCIceCandidateEvent:W.i,RTCPeerConnectionIceEvent:W.i,SecurityPolicyViolationEvent:W.i,ServicePortConnectEvent:W.i,ServiceWorkerMessageEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BatteryManager:W.h,CanvasCaptureMediaStreamTrack:W.h,CrossOriginServiceWorkerClient:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,NetworkInformation:W.h,Notification:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationReceiver:W.h,PresentationRequest:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,ServicePortCollection:W.h,ServiceWorkerContainer:W.h,ServiceWorkerRegistration:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioContext:W.h,webkitAudioContext:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioSourceNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OfflineAudioContext:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.a5,FileList:W.eo,FileWriter:W.ep,HTMLFormElement:W.et,Gamepad:W.a6,HTMLHeadElement:W.ch,History:W.ew,HTMLCollection:W.bx,HTMLFormControlsCollection:W.bx,HTMLOptionsCollection:W.bx,HTMLDocument:W.ci,XMLHttpRequest:W.ex,XMLHttpRequestUpload:W.by,XMLHttpRequestEventTarget:W.by,HTMLInputElement:W.eA,KeyboardEvent:W.aT,Location:W.eO,MediaList:W.eU,MIDIOutput:W.eW,MIDIInput:W.bB,MIDIPort:W.bB,MimeType:W.a7,MimeTypeArray:W.eX,PointerEvent:W.P,MouseEvent:W.P,DragEvent:W.P,Navigator:W.f6,Attr:W.r,Node:W.r,NodeIterator:W.d9,NodeList:W.bH,RadioNodeList:W.bH,Path2D:W.ff,Perspective:W.fi,Plugin:W.a8,PluginArray:W.fk,PositionValue:W.fn,PresentationConnection:W.fo,Range:W.df,Rotation:W.fy,RTCDataChannel:W.di,DataChannel:W.di,HTMLSelectElement:W.fA,SharedWorker:W.fD,SourceBuffer:W.a9,SourceBufferList:W.fE,SpeechGrammar:W.aa,SpeechGrammarList:W.fG,SpeechRecognitionResult:W.ab,Storage:W.fL,CSSStyleSheet:W.Z,StyleSheet:W.Z,CalcLength:W.aj,KeywordValue:W.aj,LengthValue:W.aj,NumberValue:W.aj,SimpleLength:W.aj,TransformValue:W.aj,StyleValue:W.aj,HTMLTableElement:W.dl,HTMLTableRowElement:W.fT,HTMLTableSectionElement:W.fU,HTMLTemplateElement:W.bN,TextTrack:W.ac,TextTrackCue:W.a_,VTTCue:W.a_,TextTrackCueList:W.fX,TextTrackList:W.fY,TimeRanges:W.fZ,Touch:W.ad,TouchEvent:W.aZ,TouchList:W.h2,TrackDefaultList:W.h3,Matrix:W.bf,Skew:W.bf,TransformComponent:W.bf,Translation:W.h5,TreeWalker:W.dq,CompositionEvent:W.aF,FocusEvent:W.aF,TextEvent:W.aF,SVGZoomEvent:W.aF,UIEvent:W.aF,URL:W.ha,VideoTrackList:W.hc,VTTRegionList:W.hf,WebSocket:W.hg,WheelEvent:W.b0,Window:W.bP,DOMWindow:W.bP,Worker:W.hj,CompositorWorkerGlobalScope:W.b1,DedicatedWorkerGlobalScope:W.b1,ServiceWorkerGlobalScope:W.b1,SharedWorkerGlobalScope:W.b1,WorkerGlobalScope:W.b1,ClientRect:W.hr,ClientRectList:W.dv,DOMRectList:W.dv,CSSRuleList:W.ht,DocumentType:W.hu,DOMRect:W.hv,GamepadList:W.hM,HTMLFrameSetElement:W.hN,NamedNodeMap:W.dy,MozNamedAttrMap:W.dy,ServiceWorker:W.i4,SpeechRecognitionResultList:W.i7,StyleSheetList:W.i8,WorkerLocation:W.ig,WorkerNavigator:W.ih,SVGAElement:P.dJ,SVGAnimateElement:P.aM,SVGAnimateMotionElement:P.aM,SVGAnimateTransformElement:P.aM,SVGAnimationElement:P.aM,SVGSetElement:P.aM,SVGFEBlendElement:P.e5,SVGFEColorMatrixElement:P.e6,SVGFEComponentTransferElement:P.e7,SVGFECompositeElement:P.e8,SVGFEConvolveMatrixElement:P.e9,SVGFEDiffuseLightingElement:P.ea,SVGFEDisplacementMapElement:P.eb,SVGFEFloodElement:P.ec,SVGFEGaussianBlurElement:P.ed,SVGFEImageElement:P.ee,SVGFEMergeElement:P.ef,SVGFEMorphologyElement:P.eg,SVGFEOffsetElement:P.eh,SVGFEPointLightElement:P.ei,SVGFESpecularLightingElement:P.ej,SVGFESpotLightElement:P.ek,SVGFETileElement:P.el,SVGFETurbulenceElement:P.em,SVGFilterElement:P.eq,SVGForeignObjectElement:P.es,SVGCircleElement:P.ag,SVGEllipseElement:P.ag,SVGLineElement:P.ag,SVGPathElement:P.ag,SVGPolygonElement:P.ag,SVGPolylineElement:P.ag,SVGGeometryElement:P.ag,SVGClipPathElement:P.aB,SVGDefsElement:P.aB,SVGGElement:P.aB,SVGSwitchElement:P.aB,SVGGraphicsElement:P.aB,SVGImageElement:P.ey,SVGLength:P.ar,SVGLengthList:P.eJ,SVGMarkerElement:P.eR,SVGMaskElement:P.eS,SVGNumber:P.as,SVGNumberList:P.f9,SVGPatternElement:P.fg,SVGPoint:P.fl,SVGPointList:P.fm,SVGRect:P.fr,SVGRectElement:P.fs,SVGScriptElement:P.bK,SVGStringList:P.fQ,SVGDescElement:P.I,SVGDiscardElement:P.I,SVGFEDistantLightElement:P.I,SVGFEFuncAElement:P.I,SVGFEFuncBElement:P.I,SVGFEFuncGElement:P.I,SVGFEFuncRElement:P.I,SVGFEMergeNodeElement:P.I,SVGMetadataElement:P.I,SVGStopElement:P.I,SVGStyleElement:P.I,SVGTitleElement:P.I,SVGComponentTransferFunctionElement:P.I,SVGElement:P.I,SVGSVGElement:P.fR,SVGSymbolElement:P.fS,SVGTextContentElement:P.dm,SVGTextPathElement:P.fW,SVGTSpanElement:P.bO,SVGTextElement:P.bO,SVGTextPositioningElement:P.bO,SVGTransform:P.at,SVGTransformList:P.h4,SVGUseElement:P.hb,SVGViewElement:P.hd,SVGViewSpec:P.he,SVGLinearGradientElement:P.bR,SVGRadialGradientElement:P.bR,SVGGradientElement:P.bR,SVGCursorElement:P.i0,SVGFEDropShadowElement:P.i1,SVGMPathElement:P.i2,AudioBuffer:P.dN,WebGLRenderingContext:P.fw,WebGL2RenderingContext:P.fx,WebGL2RenderingContextBase:P.ie,SQLResultSetRowList:P.fH})
setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationTimeline:true,AppBannerPromptResult:true,BarProp:true,Body:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CHROMIUMValuebuffer:true,CircularGeofencingRegion:true,Client:true,Clients:true,CompositorProxy:true,ConsoleBase:true,Coordinates:true,Credential:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMStringMap:true,EffectModel:true,Entry:true,FederatedCredential:true,FileEntry:true,FileError:true,Stream:true,DOMFileSystem:true,FontFace:true,FormData:true,GamepadButton:true,Geofencing:true,GeofencingRegion:true,Geolocation:true,Geoposition:true,Headers:true,HMDVRDevice:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageData:true,InjectedScriptHost:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,KeyframeEffect:true,MediaDeviceInfo:true,MediaDevices:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaMetadata:true,MediaSession:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MIDIInputMap:true,MIDIOutputMap:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigatorStorageUtils:true,NavigatorUserMediaError:true,NodeFilter:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,OffscreenCanvas:true,PasswordCredential:true,PerformanceCompositeTiming:true,PerformanceEntry:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformanceRenderTiming:true,PerformanceResourceTiming:true,PerformanceTiming:true,Permissions:true,PositionError:true,PositionSensorVRDevice:true,Presentation:true,PushManager:true,PushMessageData:true,PushSubscription:true,ReadableByteStream:true,ReadableByteStreamReader:true,ReadableStreamReader:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsReport:true,RTCStatsResponse:true,Screen:true,ScrollState:true,Selection:true,ServicePort:true,SharedArrayBuffer:true,SourceInfo:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StorageInfo:true,StorageManager:true,StorageQuota:true,StyleMedia:true,StylePropertyMap:true,SyncManager:true,TextMetrics:true,TrackDefault:true,UnderlyingSourceBase:true,URLSearchParams:true,VRDevice:true,VREyeParameters:true,VRFieldOfView:true,VRPositionState:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkerConsole:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothAdvertisingData:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,NFC:true,PagePopupController:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WebKitCSSMatrix:true,Worklet:true,WorkletGlobalScope:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPreserveAspectRatio:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,CHROMIUMSubscribeUniform:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTDisjointTimerQuery:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLKeygenElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMenuItemElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,AudioTrack:true,AudioTrackList:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CompositorWorker:true,CSSCharsetRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DataTransferItemList:true,DeviceAcceleration:true,HTMLDivElement:true,XMLDocument:true,Document:false,DocumentFragment:true,ShadowRoot:true,DOMException:true,DOMImplementation:true,DOMPoint:true,DOMPointReadOnly:false,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AnimationEvent:true,AnimationPlayerEvent:true,ApplicationCacheErrorEvent:true,AutocompleteErrorEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceLightEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,GamepadEvent:true,GeofencingEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,NotificationEvent:true,PageTransitionEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RelatedEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCIceCandidateEvent:true,RTCPeerConnectionIceEvent:true,SecurityPolicyViolationEvent:true,ServicePortConnectEvent:true,ServiceWorkerMessageEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BatteryManager:true,CanvasCaptureMediaStreamTrack:true,CrossOriginServiceWorkerClient:true,EventSource:true,FileReader:true,FontFaceSet:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,NetworkInformation:true,Notification:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationReceiver:true,PresentationRequest:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,ServicePortCollection:true,ServiceWorkerContainer:true,ServiceWorkerRegistration:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioContext:true,webkitAudioContext:true,AudioDestinationNode:true,AudioNode:true,AudioSourceNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OfflineAudioContext:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIOutput:true,MIDIInput:true,MIDIPort:false,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Navigator:true,Attr:true,Node:false,NodeIterator:true,NodeList:true,RadioNodeList:true,Path2D:true,Perspective:true,Plugin:true,PluginArray:true,PositionValue:true,PresentationConnection:true,Range:true,Rotation:true,RTCDataChannel:true,DataChannel:true,HTMLSelectElement:true,SharedWorker:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,CalcLength:true,KeywordValue:true,LengthValue:true,NumberValue:true,SimpleLength:true,TransformValue:true,StyleValue:false,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,Matrix:true,Skew:true,TransformComponent:false,Translation:true,TreeWalker:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,SVGZoomEvent:true,UIEvent:false,URL:true,VideoTrackList:true,VTTRegionList:true,WebSocket:true,WheelEvent:true,Window:true,DOMWindow:true,Worker:true,CompositorWorkerGlobalScope:true,DedicatedWorkerGlobalScope:true,ServiceWorkerGlobalScope:true,SharedWorkerGlobalScope:true,WorkerGlobalScope:true,ClientRect:true,ClientRectList:true,DOMRectList:true,CSSRuleList:true,DocumentType:true,DOMRect:true,GamepadList:true,HTMLFrameSetElement:true,NamedNodeMap:true,MozNamedAttrMap:true,ServiceWorker:true,SpeechRecognitionResultList:true,StyleSheetList:true,WorkerLocation:true,WorkerNavigator:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGSetElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEFloodElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGCircleElement:true,SVGEllipseElement:true,SVGLineElement:true,SVGPathElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGGeometryElement:false,SVGClipPathElement:true,SVGDefsElement:true,SVGGElement:true,SVGSwitchElement:true,SVGGraphicsElement:false,SVGImageElement:true,SVGLength:true,SVGLengthList:true,SVGMarkerElement:true,SVGMaskElement:true,SVGNumber:true,SVGNumberList:true,SVGPatternElement:true,SVGPoint:true,SVGPointList:true,SVGRect:true,SVGRectElement:true,SVGScriptElement:true,SVGStringList:true,SVGDescElement:true,SVGDiscardElement:true,SVGFEDistantLightElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEMergeNodeElement:true,SVGMetadataElement:true,SVGStopElement:true,SVGStyleElement:true,SVGTitleElement:true,SVGComponentTransferFunctionElement:true,SVGElement:false,SVGSVGElement:true,SVGSymbolElement:true,SVGTextContentElement:false,SVGTextPathElement:true,SVGTSpanElement:true,SVGTextElement:true,SVGTextPositioningElement:true,SVGTransform:true,SVGTransformList:true,SVGUseElement:true,SVGViewElement:true,SVGViewSpec:true,SVGLinearGradientElement:true,SVGRadialGradientElement:true,SVGGradientElement:true,SVGCursorElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,AudioBuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGL2RenderingContextBase:true,SQLResultSetRowList:true})
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.bE.$nativeSuperclassTag="ArrayBufferView"
H.bF.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.bD.$nativeSuperclassTag="ArrayBufferView"
H.bG.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
W.br.$nativeSuperclassTag="EventTarget"
W.bw.$nativeSuperclassTag="EventTarget"
W.bs.$nativeSuperclassTag="EventTarget"
W.bv.$nativeSuperclassTag="EventTarget"
W.bt.$nativeSuperclassTag="EventTarget"
W.bu.$nativeSuperclassTag="EventTarget"})();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){u.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.kX(Q.kW(),b)},[])
else (function(b){H.kX(Q.kW(),b)})([])})})()